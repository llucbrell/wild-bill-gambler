import {score} from '../index.js';

/**
 * The class for the Scene called Game
 * @class Game
 * @extends Phaser.Scene
 * @see https://newdocs.phaser.io/docs/3.55.2/Phaser.Scene
 */
export class Game extends Phaser.Scene {

    constructor(){
        super({key:'game'});
    }
    /**
     * Init the values every time the scene runs
     */
    init(){
        this.cardValues = [1,2,3,4,5,6,7,8,9,10];
        this.cardPositions = [];
        this.cardArray = [];
        this.backCardArray = [];
        // some clone to ensure never change the card values
        this.fakeValues = [].concat(this.cardValues);
        this.flippedCards = 0;
        this.result = 0;
    }

    /**
     * Cache memory preload for images 
     */
    preload(){ 
        for(let i = 0; i<10; i++){
            this.load.image(`card${i+1}`, `../static/Clovers_${i+1}_white.png`);
        }
        this.load.image(`back-card`, '../static/Clovers_King_black.png');
    }

    /**
     * Executed when the scene starts. Set the cards
     */
    create(){
        let initial_x_pos = 150;
        let initial_y_pos = 120;

       // set the position of the cards 
        /* this.postionValue = ()=> {
            let iterations = this.cardValues.length;
            for(let i = 0; i < iterations; i++){
                let randomNumberFromArray = Phaser.Math.RND.pick(this.fakeValues);
                console.log(randomNumberFromArray);
                let index = this.fakeValues.indexOf(randomNumberFromArray);
                this.fakeValues.splice(index, 1);
                console.log(this.fakeValues);
                this.cardPositions.push(randomNumberFromArray);
            }
        }; */

        const getCardName = (value) => {
	        return `card${value}`
        }


        this.postionValue();


        for(let i=0; i<this.cardValues.length; i++){
            let cardname = `card${this.cardPositions[i]}`;
            if(i==5) initial_x_pos = 150;
            if(i>4) initial_y_pos = 320;
            let card=this.add.image(initial_x_pos, initial_y_pos, cardname);
            let backCard = this.add.image(initial_x_pos, initial_y_pos, 'back-card');
            backCard.index=i;
            card.index=i;
            initial_x_pos+=130;
            card.setScale(0.18);
            card.visible = false;
            backCard.setScale(0.18);
            backCard.setInteractive();
            this.backCardArray.push(backCard);
            this.cardArray.push(card);
        }
        this.input.on('gameobjectdown', this.onClickCard.bind(this));
    }
onClickCard(pnt, card){
    console.log(card);
    this.flipCard(card.index);
}
flipCard(index){
    this.flippedCards+=1;
    this.backCardArray[index].visible=false;
    this.cardArray[index].visible=true;
    this.result += this.cardPositions[index];
    if(this.flippedCards ==5) this.endGame();
}
endGame(){
score.addToScore(this.result, 'somejsontoken');
this.scene.pause();
const sceneEnd = this.scene.get('end');
sceneEnd.scene.start();
//this.scene.add("end", new End(this.result));
}
initGame(){
    this.scene.restart();
}
postionValue() {
    let iterations = this.cardValues.length;
    for(let i = 0; i < iterations; i++){
        let randomNumberFromArray = Phaser.Math.RND.pick(this.fakeValues);
        console.log(randomNumberFromArray);
        let index = this.fakeValues.indexOf(randomNumberFromArray);
        this.fakeValues.splice(index, 1);
        console.log(this.fakeValues);
        this.cardPositions.push(randomNumberFromArray);
    }
};

}
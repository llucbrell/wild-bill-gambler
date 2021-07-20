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
        
        // make a shuffle
        this.postionValue();

        // asociate card images, positions and listeners
        for(let i=0; i<this.cardValues.length; i++){
            // dynamic name asociation
            let cardname = `card${this.cardPositions[i]}`;
            // put a second line of cards
            if(i==5) initial_x_pos = 150;
            if(i>4) initial_y_pos = 320;
            // relate the image, the card and the backcard with same index
            let card=this.add.image(initial_x_pos, initial_y_pos, cardname);
            let backCard = this.add.image(initial_x_pos, initial_y_pos, 'back-card');
            backCard.index=i;
            card.index=i;
            // move and point to the next postion
            initial_x_pos+=130;
            // set the scale of the cards (images are too big)
            card.setScale(0.18);
            backCard.setScale(0.18);
            // hide the value cards
            card.visible = false;
            // set the backcard image interactive (add a listener)
            backCard.setInteractive();
            // add the cards to arrays to have 2 arrays of cars
            this.backCardArray.push(backCard);
            this.cardArray.push(card);
        }
        // relate the onclick with the custom handler
        this.input.on('gameobjectdown', this.onClickCard.bind(this));
    }

    /**
     * Custom handler for gameobjectdown 
     * @param {Phaser.Input.Pointer} pnt Pointer to the object clicked
     * @see https://newdocs.phaser.io/docs/3.55.0/Phaser.Input.Pointer
     * @param {Phaser.GameObjects.Image} card Image object of the card
     * @see https://newdocs.phaser.io/docs/3.54.0/Phaser.GameObjects.Image
     */
    onClickCard(pnt, card){
        this.flipCard(card.index);
    }

    /**
     * Make invisibl the backcard and visible the value card in base of an array index. 
     * @param {number} index Index of the array used to flip the cards
     */
    flipCard(index){
        this.flippedCards+=1;
        this.backCardArray[index].visible=false;
        this.cardArray[index].visible=true;
        this.result += this.cardPositions[index];
        if(this.flippedCards ==5) this.endGame();
    }

    /**
     * Pause the scene 'game' and start 'end' scene
     */
    endGame(){
        score.addToScore(this.result, 'somejsontoken');
        this.scene.pause();
        const sceneEnd = this.scene.get('end');
        sceneEnd.scene.start();
        //this.scene.add("end", new End(this.result));
    }
    /**
     * Make a shuffle of the values of cars and set them in a another array
     */
    postionValue() {
        let iterations = this.cardValues.length;
    
        for(let i = 0; i < iterations; i++){
            // pick a random number from an array 
            let randomNumberFromArray = Phaser.Math.RND.pick(this.fakeValues);
            let index = this.fakeValues.indexOf(randomNumberFromArray);
            this.fakeValues.splice(index, 1);
            this.cardPositions.push(randomNumberFromArray);
        }
};

}
import {score} from '../index.js';

export class End extends Phaser.Scene {
    constructor(amount){
        super({key:'end',active:false});
        this.amount = score.getScore();
    }
    init(){
        this.amount = score.getScore();
    }
    preload(){
        this.load.image(`button`, '../static/button.png');

    }
    create(){
console.log('hola');
let text = this.add.text(0, 0, `Win amount ${this.amount}`, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
//text.setScale(5)
//text.color= '#ff0000';
//repetir con shuffle button (imagen con texto encima posicionado)

            let button=this.add.image(610,460, 'button');
            button.setScale(0.25);
            button.setInteractive();

        this.input.on('gameobjectdown', this.onClickButton.bind(this));
    }
    onClickButton(ipnt, btn){
        console.log('Shuffle');
        this.scene.stop();
        const sceneGame = this.scene.get('game');
        //comment the next line to have an accumulative score
        score.scoreToZero('somejsontoken');
        sceneGame.scene.restart();
        console.log(sceneGame);

    }
}
import {score} from '../index.js';

/**
 * The class for the Scene called Game
 * @class End
 * @extends Phaser.Scene
 * @see https://newdocs.phaser.io/docs/3.55.2/Phaser.Scene
 */
export class End extends Phaser.Scene {
    constructor(amount){
        super({key:'end',active:false});
        this.amount = score.getScore();
    }

    /**
     * Init the values every time the scene runs
     */
    init(){
        this.amount = score.getScore();
    }

    /**
     * Cache memory preload for images 
     */
    preload(){
        this.load.image(`button`, '../static/button.png');
    }

    /**
     * Executed when the scene starts. Set the cards
     */
    create(){
        //add text and score
        let text = this.add.text(0, 0, `Win amount ${this.amount}`, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
        //text.setScale(5)

        //set the button background image and text
        let button=this.add.image(610,460, 'button');
        let buttonText = this.add.text( 570, 450, `SHUFFLE`, { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif' });
        button.setScale(0.25);
        // set the listener
        button.setInteractive();
        // relate the listener and the custom handler
        this.input.on('gameobjectdown', this.onClickButton.bind(this));
    }

    /**
     * Custom handler for gameobjectdown over button, stops the 'end' scene and restart the 'game' scene
     * @param {Phaser.Input.Pointer} pnt 
     * @see https://newdocs.phaser.io/docs/3.55.0/Phaser.Input.Pointer
     * @param {Phaser.GameObjects.Image} btn 
     * @see https://newdocs.phaser.io/docs/3.54.0/Phaser.GameObjects.Image
     */
    onClickButton(pnt, btn){
        this.scene.stop();
        const sceneGame = this.scene.get('game');
        //comment the next line to have an accumulative score
        score.scoreToZero('somejsontoken');
        sceneGame.scene.restart();
    }
}
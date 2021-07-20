import { Game } from './scenes/game.js';
import { End } from './scenes/end.js';
import { Score } from './scenes/utils/score.js';

/**
 * @typedef {AUTO} AUTO
 * @see https://newdocs.phaser.io/docs/3.55.2/Phaser.AUTO
 */

/**
 * This is the configuration object for the phaser lib,
 * this lib's imported using CDN in index.html
 * @type {Object}
 * @property {Phaser.CONSTANT} CANVAS If it's set to AUTO, check the browser compatibility
 * @property {string} parent Stablish the div id where the game it's placed
 * @property {number} width Set the width of the canvas
 * @property {number} height Set the height of the canvas
 * @property {Array} scene Stores the array of different game scenes
 * @property {Object}physics Set the Phaser physics used with the game
 * 
 */
const config = {
    type: Phaser.AUTO,
    parent: 'phaser-div',
    width: 800,
    height: 500,
    scene: [Game,End],
    physics:{
        default:'arcade',
        arcade:{
            gravity: { y: 400 },
            debug: false
        }
    }

}

/**
 * Starts the Phaser game
 * @see https://newdocs.phaser.io/docs/3.55.2/Phaser.Game
 */
var game = new Phaser.Game(config);


/**
 * Global object that handles the score of the game
 */
export var score = new Score();


/**
 * The namespace for the Phaser framework
 * @namespace Phaser 
 * @see https://newdocs.phaser.io/docs/3.55.2/Phaser
 */


/**
* This Class creates the scene, all the game scenes must inheritance from this one.
* @typedef {Object} Phaser.Scene
* @class
* @see https://newdocs.phaser.io/docs/3.55.2/Phaser.Scene
*/
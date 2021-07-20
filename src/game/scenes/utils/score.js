/**
 * The class to handle the score
 * @class Score
 * 
 */
export class Score {
    constructor(){
        this.amount = 0; 
    }

    /**
     * Update the score
     * @param {number} amount score of the player
     * @param {string} token token for JWTs
     * @todo Implement JWTs
     * @tutoria conclusion
     */
    addToScore(amount, token){
        if(token === 'somejsontoken'){
            this.amount += amount;
        }
    }

    /**
     * Return the actual player score
     * @return {number} amount 
     */
    getScore(){
        return this.amount;
    }

    /**
     * Put the score to zero
     * @param {string} token token as example of the JWT
     * @see tutorial conclusion
     */
    scoreToZero(token){
        if(token === 'somejsontoken'){
            this.amount=0;
        }
    }
}
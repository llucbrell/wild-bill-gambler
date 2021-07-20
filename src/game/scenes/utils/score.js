
export class Score {
    constructor(){
       this.amount = 0; 
    }
    addToScore(amount, token){
        if(token === 'somejsontoken'){
            this.amount += amount;
        }
    }
    getScore(){
        return this.amount;
    }
    scoreToZero(token){
        if(token === 'somejsontoken'){
            this.amount=0;
        }
    }
}
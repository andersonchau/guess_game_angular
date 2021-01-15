import {Injectable}             from '@angular/core';
import {GuessResult}            from './GuessResult';
import {Permutation}            from './Permutation';


@Injectable({
    providedIn: 'root',
  })
export class GameService {

    public const NUMBER_OF_OBJECT = 3;
    
    public dummyNum : number = 0;
    public realAnswer : string = "";
    public guessHistory : Permutation[] = [];
    public gameState : number = 0; 
    // 0 : start / guessing , 1 : game win , 2 : game failure
    // do typescript have enum ?

    
    getServiceName(): string {
        return "GameService is Online!";
    }

    getRealAnswer(): string {
        return this.realAnswer;
    }

    getGuessResult(myGuess : string) : GuessResult {
       
        let posRight : number = 0; 
        let colorRight : number = 0; 
        let isWin: boolean = false;
        if( myGuess == this.realAnswer){
            isWin = true;
            return new GuessResult(this.NUMBER_OF_OBJECT,this.NUMBER_OF_OBJECT,true);
        }
        let markerArr = Array(this.realAnswer.length).fill(0);
        
        for (var i = 0; i < this.realAnswer.length; i++) {
            for (var j = 0; j < myGuess.length; j++) {
                if ( i == j ){
                    if ( this.realAnswer.charAt(i) == myGuess.charAt(j) ) {
                        posRight++;
                    }
                }
            }        
        }
        
        for (var i = 0; i < myGuess.length; i++) {
            let guessChar = myGuess.charAt(i);

            for (var j = 0; j < this.realAnswer.length; j++) {
                let realAnswerChar = this.realAnswer.charAt(j);
                if( guessChar ==realAnswerChar && markerArr[j] == 0 ){
                    markerArr[j] = 1;
                    colorRight++;
                    break;
                }
            }
        }
        return new GuessResult(posRight,colorRight,false);
    }
        
     

    

    constructor() {
        this.reInitNewGame();
    }

    reInitNewGame() {
        this.guessHistory = [];
        this.gameState = 0;
        this.realAnswer= "123";
    }
    
}
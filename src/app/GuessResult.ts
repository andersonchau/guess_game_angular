import { ThrowStmt } from "@angular/compiler";

export class GuessResult{
    public posRightCount : number; 
    public colorRightCount : number;
    public isGuessWinGame : boolean;
    constructor( prc : number, crc : number, winGame : boolean ) {
        this.posRightCount = prc;
        this.colorRightCount = crc;
        this.isGuessWinGame = winGame;
    }
    
}
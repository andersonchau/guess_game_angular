import { Component, OnInit } from '@angular/core';
import { GameService } from '../GameService';
import { GuessResult } from '../GuessResult';


@Component({
  selector: 'app-gamemap',
  templateUrl: './gamemap.component.html',
  styleUrls: ['./gamemap.component.css']
})
export class GamemapComponent implements OnInit {


  justClickedBall : string = "";
  clickedNumber : number = 0;
  myCurrentGuess : string = "";
  gameServiceDebugStr : string = "";
  currentGuessResult : GuessResult = new GuessResult(0,0,false);
  guessResultArrayReversed : GuessResult[] = [];
  guessResultArrayDescriptionReversed : string[] = [];
  hiddenRealAnswer : string  = "";
  debugSelectedColor : string = "";
  currentGuessBallList : string[] = [];
  constructor(private gameService : GameService) { 
    this.reInitData();
  }

  reInitData() : void{
    this.clickedNumber = 0;
    this.myCurrentGuess = "";
    this.gameServiceDebugStr = "";
    this.currentGuessResult = new GuessResult(0,0,false);
    this.hiddenRealAnswer = this.gameService.getRealAnswer();
    this.guessResultArrayReversed = [];
    this.guessResultArrayDescriptionReversed = [];
    this.currentGuessBallList = [];
    
  }
  
  

  ngOnInit(): void {
  }


  onResetGameNow(){
    this.gameServiceDebugStr = this.gameService.getServiceName();
    this.gameService.reInitNewGame();
    this.reInitData();
  }

  onGuessNow() {
    // assume the input format is correct , TODO : do form checking ... 
    if( this.currentGuessBallList.length >= 4) {
      this.updateGuessFromChosen();
      this.currentGuessResult = this.gameService.processGuess(this.myCurrentGuess);
      //this.gameService.addToGuessList(this.myCurrentGuess);
    
      this.guessResultArrayReversed = this.gameService.getGuesResultHistory().reverse();
      this.processUIString();
      this.clickedNumber++;
    }

    
  }

  processUIString(){
    this.guessResultArrayDescriptionReversed=[];
    this.guessResultArrayReversed.forEach( (guessResult) => {
      this.guessResultArrayDescriptionReversed.push( "" + guessResult.colorRightCount 
                                          + " color right " + guessResult.posRightCount + " pos right ");
    });
  }

  getGuessResultString(index:number) : string {
    return this.guessResultArrayDescriptionReversed[index];
  }

  getGuessHistoryReverse() : string [] {
    return this.gameService.getGuessHistory().reverse();
  }
  
  getGuessResultHistoryReverse() : GuessResult [] {
    return this.gameService.getGuesResultHistory().reverse();
  }

  getGuessResultByRow(row:number) : GuessResult{
    return this.getGuessResultHistoryReverse()[row];
    
  }

 
  getColorIdxByPos(guess:string ,pos :number) : string{
    return this.getColorIdx(parseInt(guess.charAt(pos)));
  }

  updateGuessFromChosen(){
    this.myCurrentGuess = "";
    for(var colorItemStr in this.currentGuessBallList){
      this.myCurrentGuess = this.myCurrentGuess.concat(colorItemStr);
    }
  }
  getIdxFromColorStr(colorStr:string) : string{
    switch(colorStr){
      case "black":
        return "1";
      case "yellow":
        return "2";
      case "blue":
        return "3";
      case "red":
        return "4";
      case "green":
        return "5";
      default:
        return "6";
    }
  }


  getColorIdx(colorIdx : number) : string {
    switch(colorIdx){
      case 1:
        return "black";
      case 2:
        return "yellow";
      case 3:
        return "blue";
      case 4:
        return "red";
      case 5:
        return "green";
      default:
        return "purple";
    }
  }

  hasGameWon() : boolean {
    return this.gameService.gameState == 1;
  }


  onJustChoseAColor(justChosenBall : string ){
    this.debugSelectedColor = justChosenBall;
    if ( this.currentGuessBallList.length <  4) {
      this.currentGuessBallList.push(justChosenBall); 
    }
  }

  
}

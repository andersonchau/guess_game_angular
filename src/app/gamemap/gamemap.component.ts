import { Component, OnInit } from '@angular/core';
import { GameService } from '../GameService';
import { GuessResult } from '../GuessResult';


@Component({
  selector: 'app-gamemap',
  templateUrl: './gamemap.component.html',
  styleUrls: ['./gamemap.component.css']
})
export class GamemapComponent implements OnInit {

  clickedNumber : number = 0;
  myCurrentGuess : string = "";
  gameServiceDebugStr : string = "";
  currentGuessResult : GuessResult;
  hiddenRealAnswer : string  = "";

  constructor(private gameService : GameService) { 
    this.clickedNumber = 0;
    this.myCurrentGuess = "";
    this.gameServiceDebugStr = "";
    this.currentGuessResult = new GuessResult(0,0,false);
    this.hiddenRealAnswer = this.gameService.getRealAnswer();
  }
  
  ngOnInit(): void {
  }

  onResetGameNow(){
    this.gameServiceDebugStr = this.gameService.getServiceName();
  }

  onGuessNow() {
    // assume the input format is correct , TODO : do form checking ... 
    
    this.currentGuessResult = this.gameService.getGuessResult(this.myCurrentGuess);
    this.clickedNumber++;
    
  }
}

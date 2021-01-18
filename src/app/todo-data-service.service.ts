import { Injectable } from '@angular/core';
import { TodoJob } from './TodoJob';

type TodoJobArray = Array<TodoJob>;

@Injectable({
  providedIn: 'root'
})
export class TodoDataServiceService {
  
  public todoList : TodoJobArray=[];

  private nextIdx : number;
  
  constructor() {
    this.nextIdx = 4;
    this.todoList  = [
      new TodoJob(1,"交水費",new Date(2021, 1, 21)),
      new TodoJob(2,"執房",new Date(2021, 1, 22)),
      new TodoJob(3,"行山",new Date(2021, 2, 21))
    ];
   }

  addNewJob(desc : string, dateString : string ){
    this.nextIdx++; 

    
    var dateParts = dateString.split("/");

    
    var dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]); 

    this.todoList.push(new TodoJob(this.nextIdx,desc,dateObject));
    // for real application , this is an HTTP POST to backend server. 
  }

  deleteJob(id : number ){
    for(var i = 0; i < this.todoList.length; i++) {
      if(this.todoList[i].id == id) {
          this.todoList.splice(i, 1);
          break;
      }
    }
  }

}

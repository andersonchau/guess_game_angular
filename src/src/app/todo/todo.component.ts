import { Component, OnInit } from '@angular/core';
import { TodoDataServiceService } from '../todo-data-service.service';
import { TodoJob } from '../TodoJob';


export class TodoFormModel {
  description : string = '';
  dateStr : string = "";

  constructor(){
  
  }
  
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public todoList : TodoJob[];

  public model: TodoFormModel = new TodoFormModel();
  // autowired:
  constructor(private todoDataService : TodoDataServiceService ) { 
    
    this.todoList = todoDataService.todoList;
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.todoDataService.addNewJob(this.model.description,this.model.dateStr);
    this.todoList = this.todoDataService.todoList;
    this.model = new TodoFormModel();
  }
}



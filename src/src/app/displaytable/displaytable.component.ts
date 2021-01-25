import { Component, OnInit } from '@angular/core';
import { Employee } from '../Employee';
import { ApiClientServiceService } from '../api-client-service.service';

@Component({
  selector: 'app-displaytable',
  templateUrl: './displaytable.component.html',
  styleUrls: ['./displaytable.component.css']
})
export class DisplaytableComponent implements OnInit {


  public employees = new Array<Employee>();

  constructor(private apiService : ApiClientServiceService ) { }

  ngOnInit(): void {
    this.loadEmployeeInForTable();
  }

  loadEmployeeInForTable(){
    this.apiService.getEmployeesFormJsonHttpServer()
              .subscribe(result => this.employees = result );
  }

}

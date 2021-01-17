import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Employee } from './Employee';
@Injectable({
  providedIn: 'root'
})
export class ApiClientServiceService {

  constructor(private http: HttpClient) { }
 
  
  getEmployeesFormJsonHttpServer() : Observable<Employee[]> {
      let url = "http://localhost:3000/employees";
      return this.http.get<Employee[]>(url);
  }
  /*
  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      this.configUrl, { observe: 'response' });
  }
  */
}

import { Injectable } from '@angular/core';
import { EmployeeModel } from '../model/employee-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApplicationServiceService {

  constructor(private http: HttpClient) { }
  
  public getEmpDtls():Observable<EmployeeModel[]>{
    return this.http.get<EmployeeModel[]>('http://dummy.restapiexample.com/api/v1/employees');
  }
}

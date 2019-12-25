import { Injectable } from '@angular/core';
import { EmployeeModel } from '../model/employee-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ArrayData } from '../model/array-data';

@Injectable({
  providedIn: 'root'
})
export class ApplicationServiceService {

  constructor(private http: HttpClient) { }
  
  public getEmpDtls():Observable<ArrayData>{
    return this.http.get<ArrayData>('https://reqres.in/api/users?page=2');
  }
  // post(opost:EmployeeModel):Observable<any>{
  //   return this.http.post('https://jsonplaceholder.typicode.com/posts', opost);
  // }
}

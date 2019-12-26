import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataClass } from '../model/data-class';

@Injectable({
  providedIn: 'root'
})
export class LocalServiceService {

  constructor(private http: HttpClient) { }
  public readData(): Observable<DataClass[]> {
    return this.http.get<DataClass[]>('http://localhost/backend/api/read.php');
  }
  createData(dataModel: DataClass): Observable<DataClass> {
    return this.http.post<DataClass>(`http://localhost/backend/api/create.php`, dataModel);
  }
  updateData(dataModel: DataClass) {
    return this.http.put<DataClass>(`http://localhost/backend/api/update.php`, dataModel);
  }
  deletePolicy(id: number) {
    return this.http.delete<DataClass>(`http://localhost/backend/api/delete.php/?id=${id}`);
  }
}

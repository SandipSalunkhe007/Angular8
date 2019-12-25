import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/model/employee-model';
import { ApplicationServiceService } from 'src/app/services/application-service.service';

@Component({
  selector: 'app-get-api-data',
  templateUrl: './get-api-data.component.html',
  styleUrls: ['./get-api-data.component.css']
})
export class GetApiDataComponent implements OnInit {
  stdobj:EmployeeModel = new EmployeeModel();
  arrylist:EmployeeModel[];
  constructor( private employeeservice: ApplicationServiceService) { }
  
  ngOnInit() {
    this.employeeservice.getEmpDtls().subscribe(data => {
      this.arrylist = data;
      //console.log(this.arrylist);
      //this.stdobj = this.arrylists[10];
        });
  }
 /* addservices() {
  this.arrylist.push(this.stdobj);
}*/

}

import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from 'src/app/model/employee-model';
import { ApplicationServiceService } from 'src/app/services/application-service.service';
import { ArrayData } from 'src/app/model/array-data';

@Component({
  selector: 'app-get-api-data',
  templateUrl: './get-api-data.component.html',
  styleUrls: ['./get-api-data.component.css']
})
export class GetApiDataComponent implements OnInit {
  stdobj:EmployeeModel = new EmployeeModel();
  arrylist:EmployeeModel[];
  arraymodel: ArrayData = new ArrayData();
  stdpost: EmployeeModel;
  constructor( private employeeservice: ApplicationServiceService) { }
  
  ngOnInit() {
    this.employeeservice.getEmpDtls().subscribe(data => {
      //this.arrylist = data;

      //console.log(this.arrylist);
      //this.stdobj = this.arrylists[10];
      this.arraymodel = data;
      this.arrylist = this.arraymodel.data;
      console.log(JSON.stringify(this.arrylist));
        });

        // var opost = new EmployeeModel();
        // opost.body = "testbody";
        // opost.title = "testtitle";
        // opost.userId = 5;

        // this.employeeservice.post(opost).subscribe(data => {
        //   this.stdpost = data;
        //   this.arrylist.push(this.stdpost);
        // });
  }
 /* addservices() {
  this.arrylist.push(this.stdobj);
}*/

}

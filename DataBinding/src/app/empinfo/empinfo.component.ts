import { Component, OnInit } from '@angular/core';
import { Employeemodel } from '../employeemodel';

@Component({
  selector: 'app-empinfo',
  templateUrl: './empinfo.component.html',
  styleUrls: ['./empinfo.component.css']
})
export class EmpinfoComponent implements OnInit {
  empModel:Employeemodel=new Employeemodel();
  constructor() { }
  welsub() {
    console.log("test "+JSON.stringify(this.empModel));
  } 
  ngOnInit() {
  }

}

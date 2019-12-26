import { Component, OnInit } from '@angular/core';
import { DataClass } from 'src/app/model/data-class';
import { LocalServiceService } from 'src/app/service/local-service.service';

@Component({
  selector: 'app-list-data',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {
  dataobj: DataClass[];
  selectedData: DataClass  = { id :  null , number: null, amount:  null};
  constructor(private localservices: LocalServiceService) { }

  ngOnInit() {
    this.localservices.readData().subscribe((data: DataClass[]) => {
      this.dataobj = data;
      console.log(this.dataobj);
    });
  }
  createOrUpdatePolicy(form) {
    if (this.selectedData && this.selectedData.id) {
      form.value.id = this.selectedData.id;
      this.localservices.updateData(form.value).subscribe((data: DataClass) => {
        console.log( 'Data Updated' , data);
        alert('Data Updated succesfully');
      });
    } else {

      this.localservices.createData(form.value).subscribe((data: DataClass) => {
        console.log('Policy created', data);
        alert('Data Added succesfully');
      });
    }
  }
  updatebtn(data: DataClass) {
    this.selectedData = data;
  }
  deletebtn(id) {
    this.localservices.deletePolicy(id).subscribe((data: DataClass) => {
      console.log('Policy deleted', data);
    });
  }

}

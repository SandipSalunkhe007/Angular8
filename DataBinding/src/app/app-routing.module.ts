import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { empty } from 'rxjs';
import { EmpinfoComponent } from './empinfo/empinfo.component';


const routes: Routes = [{path:'',component:EmpinfoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

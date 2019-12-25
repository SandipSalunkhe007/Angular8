import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetApiDataComponent } from './view/get-api-data/get-api-data.component';


const routes: Routes = [
  {path: 'employee-list', component:GetApiDataComponent},
  {path: '', redirectTo: '/employee-list', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

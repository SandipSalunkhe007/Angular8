import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListDataComponent } from './view/list-data/list-data.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'list', component: ListDataComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

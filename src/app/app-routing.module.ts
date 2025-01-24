import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'list', component: ReservationListComponent},
  { path: 'new', component: ReservationFormComponent},
  { path: 'edit/:id', component: ReservationFormComponent},
  { path: '**', redirectTo: ''}  //if the URL does not match any of the above routes, redirect to home page.
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

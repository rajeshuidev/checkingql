import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckInComponent } from './check-in-module/check-in/check-in.component';
import { BookingDetailsComponent } from './check-in-module/booking-details/booking-details.component';

const routes: Routes = [
  {
    path:'',
    component: CheckInComponent
    // loadChildren:()=>
    // import('./check-in-module/check-in.module')
    //     .then(m => m.CheckInModule)
  },
  {
    path:'booking',
    component: BookingDetailsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './page/contact/contact.component';
import { MainComponent } from './layout/main/main.component';
import { AppointmentComponent } from './page/appointment/appointment.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { NotificationComponent } from './page/notification/notification.component';


const routes: Routes = [
  { path: "", redirectTo: "home/dashboard", pathMatch: "full" },
  {
    path: "home", component: MainComponent, children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "appointment", component: AppointmentComponent },
      { path: "contact", component: ContactComponent },
      { path: "notification", component: NotificationComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

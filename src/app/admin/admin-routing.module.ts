import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudenAddFormComponent } from './studen-add-form/studen-add-form.component';
import { StudenListComponent } from './studen-list/studen-list.component';

const routes: Routes = [
  { path: '', component: AdminLoginComponent },
  {
    path: 'home', component: AdminHomeComponent, children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'studentlist', component: StudenListComponent },
      { path: 'studentadd', component: StudenAddFormComponent },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

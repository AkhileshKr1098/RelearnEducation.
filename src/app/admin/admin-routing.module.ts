import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudenAddFormComponent } from './studen-add-form/studen-add-form.component';
import { StudenListComponent } from './studen-list/studen-list.component';
import { WeekComponent } from './Questions/week/week.component';
import { DayListComponent } from './Questions/day-list/day-list.component';
import { TopicsListComponent } from './Questions/topics-list/topics-list.component';
import { ClassesComponent } from './Questions/classes/classes.component';
import { UnitListComponent } from './Questions/unit-list/unit-list.component';

const routes: Routes = [
  { path: '', component: AdminLoginComponent },
  {
    path: 'home', component: AdminHomeComponent, children: [
      { path: '', component: AdminDashboardComponent },
      { path: 'studentlist', component: StudenListComponent },
      { path: 'studentadd', component: StudenAddFormComponent },
      { path: 'week', component: WeekComponent },
      { path: 'day', component: DayListComponent },
      { path: 'classes', component: ClassesComponent },
      { path: 'units', component: UnitListComponent },
      { path: 'topics', component: TopicsListComponent },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

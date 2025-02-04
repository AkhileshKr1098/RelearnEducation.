import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { StudenListComponent } from './studen-list/studen-list.component';
import { StudenAddFormComponent } from './studen-add-form/studen-add-form.component';
import { ConfirmBoxComponentComponent } from './confirm-box-component/confirm-box-component.component';


@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminHomeComponent,
    AdminDashboardComponent,
    StudenListComponent,
    StudenAddFormComponent,
    ConfirmBoxComponentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
 ]
})
export class AdminModule { }

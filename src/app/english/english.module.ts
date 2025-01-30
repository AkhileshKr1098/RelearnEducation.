import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnglishRoutingModule } from './english-routing.module';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import {MatCardModule} from '@angular/material/card';

import { MatMenuModule } from '@angular/material/menu';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { DashboardComponent } from './dashboard/dashboard.component';


import { MatButtonToggleModule } from "@angular/material/button-toggle"
import { MatDividerModule } from "@angular/material/divider"
import { MatSelectModule } from "@angular/material/select";

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { WeekByPageComponent } from './week-by-page/week-by-page.component';
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    WeekByPageComponent
  ],
  imports: [
    CommonModule,
    EnglishRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatBadgeModule,
    MatMenuModule,
    MatCardModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatSelectModule,
    MatListModule,
    MatSidenavModule,
    NgChartsModule
    
  ]
})
export class EnglishModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SectionsComponent } from './sections/sections.component';
import { LoginComponent } from './login/login.component';
import {MatFormFieldModule} from '@angular/material/form-field';

import { IhdashboardComponent } from './layouts/ihdashboard/ihdashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { MatTabsModule, MatFormField, MatCardTitle} from '@angular/material';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { IhdashboardserService } from './services/ihdashboardser/ihdashboardser.service';
import { IhserviceService } from './services/ihservice/ihservice.service';
import { IhprofileserService } from './services/ihprofileser/ihprofileser.service';
import { SpdashboardComponent } from './layouts/spdashboard/spdashboard.component';
import { SpdashboardcardsComponent } from './pages/spdashboardcards/spdashboardcards.component';
import { SpprofileComponent } from './pages/spprofile/spprofile.component';
import { SpprofileserService } from './services/spprofileser/spprofileser.service';
import { RegisterserService } from './services/registerser/registerser.service';
import { RegisterspComponent } from './registersp/registersp.component';
import {MatCardModule} from '@angular/material/card';

// import { HttpModule } from "@angular/http";

// Import angular-fusioncharts
import { FusionChartsModule } from "angular-fusioncharts";

// Import FusionCharts library and chart modules
import * as FusionCharts from "fusioncharts";
import * as Charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { FussionChartComponent } from './fussion-chart/fussion-chart.component';
// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IhdashboardComponent,
    RegisterComponent,
    SpdashboardComponent,
    RegisterspComponent,
    FussionChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    NgbModule,
    BrowserAnimationsModule,
    DashboardModule,
    RouterModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatFormFieldModule,
    MatCardModule,
    FusionChartsModule
  ],
  providers: [
    HttpClient,
    IhserviceService,
    IhprofileserService,
    SpprofileserService,
    RegisterserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

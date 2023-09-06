import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { FlatpickrModule } from 'angularx-flatpickr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './component/pages/home/home.component';
import { LoginComponent } from './component/pages/login/login.component';
import { httpInterceptorProviders } from './utils/https.interceptor';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './component/items/navbar/navbar.component';
import { BoardComponent } from './component/pages/board/board.component';
import { TabsComponent } from './component/items/tabs/tabs.component';
import { CalendarComponent } from './component/items/calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { TimepickerComponent } from './shared/timepicker/timepicker.component';
import { DatepickerComponent } from './shared/datepicker/datepicker.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    BoardComponent,
    TabsComponent,
    CalendarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule, 
    CommonModule,
    FormsModule,
    NgbModalModule,
    NgbModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    TimepickerComponent,
    DatepickerComponent,
  ],
  exports: [CalendarComponent],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }

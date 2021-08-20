import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlipbookComponent } from './flipbook/flipbook.component';
import { YuviComponent } from './yuvi/yuvi.component';
import { SsComponent } from './ss/ss.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginmomoComponent } from './loginmomo/loginmomo.component';
import { LoginyuviComponent } from './loginyuvi/loginyuvi.component';
import { LoginssComponent } from './loginss/loginss.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { StartComponent } from './start/start.component';


@NgModule({
  declarations: [
    AppComponent,
    FlipbookComponent,
    YuviComponent,
    SsComponent,
    LoginmomoComponent,
    LoginyuviComponent,
    LoginssComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

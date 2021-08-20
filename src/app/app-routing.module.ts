import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlipbookComponent } from './flipbook/flipbook.component';
import { YuviComponent } from './yuvi/yuvi.component';
import { SsComponent } from './ss/ss.component';
import { LoginmomoComponent } from './loginmomo/loginmomo.component';
import { LoginyuviComponent } from './loginyuvi/loginyuvi.component';
import { LoginssComponent } from './loginss/loginss.component';
import { StartComponent } from './start/start.component';


const routes: Routes = [
{
  path :'aryan_momo',
  component: FlipbookComponent
},
{
  path :'yuvi',
  component: YuviComponent
},
{
  path :'sharva_sanmegh',
  component: SsComponent
},
{
  path :'welcome_aryan',
  component: LoginmomoComponent
},
{
  path :'welcome_yuvaraj',
  component: LoginyuviComponent
},
{
  path :'welcome_sharva_and_sanmegh',
  component: LoginssComponent
},
{
  path :'start',
  component: StartComponent
},
{
  path :'',
  redirectTo: 'start',
  pathMatch: 'full'
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

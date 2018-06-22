import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WashingtonComponent } from './washington/washington.component';
import { SeattleComponent } from './seattle/seattle.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { SanjoseComponent } from './sanjose/sanjose.component';


const routes: Routes = [
  {path: 'sanjose', component:SanjoseComponent},
  {path: 'washington', component:WashingtonComponent},
  {path: 'seattle', component:SeattleComponent},
  {path:'burbank', component:BurbankComponent},
  {path: 'dallas', component:DallasComponent},
  {path: 'chicago', component:ChicagoComponent},
  {path: '', pathMatch:'full', redirectTo:'/sanjose'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

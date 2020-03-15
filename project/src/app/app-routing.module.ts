import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from '../app/log-in/log-in.component';
import { SignUpComponent } from '../app/sign-up/sign-up.component';
import { MainListComponent } from '../app/main-list/main-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full'},
  { path: 'signup', component: SignUpComponent},
  { path: 'login', component: LogInComponent},
  { path: 'main', component: MainListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

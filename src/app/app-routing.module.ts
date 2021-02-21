import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [ {path:'',redirectTo:'/user/login',pathMatch:'full'},
{
  path: 'user', component: UserComponent,
  children: [
    { path: 'registration', component: RegistrationComponent },
    { path: 'login', component: LoginComponent }
  ]
},
{path:'home',component:HomeComponent,canActivate:[AuthGuardService]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

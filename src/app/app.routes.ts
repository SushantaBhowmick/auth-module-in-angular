import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthComponent } from './components/auth/auth.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';

export const routes: Routes = [
    {path: '', redirectTo: '/sign-in', pathMatch: 'full'},
    {path:'sign-in',component:SigninComponent},
    {path:'sign-up',component:SignupComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'auth',component:AuthComponent},
    {path:'**',component:PageNotFoundComponent}
];

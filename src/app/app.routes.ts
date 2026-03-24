import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/public/home/home';
import { AcercaDeComponent } from './layouts/public/about/about';
import { LoginComponent } from './layouts/public/login/login';
import { DashboardComponent } from './layouts/private/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: '#', component: HomeComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/public/home/home';
import { AcercaDeComponent } from './layouts/public/about/about';
import { LoginComponent } from './layouts/public/login/login';
import { DashboardComponent } from './layouts/private/dashboard/dashboard';
import { authGuard } from './auth.guard';

export const routes: Routes = [
    // PÚBLICAS
    { path: '', component: HomeComponent },
    { path: '#', component: HomeComponent },
    { path: 'acerca-de', component: AcercaDeComponent },
    { path: 'login', component: LoginComponent },

    // PRIVADAS
    { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },

    { path: '**', redirectTo: '', pathMatch: 'full' },
];

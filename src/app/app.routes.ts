import { Routes } from '@angular/router';
import { HomeComponent } from './layouts/public/home/home';
import { AcercaDeComponent } from './layouts/public/about/about';
import { LoginComponent } from './layouts/public/login/login';
import { DashboardComponent } from './layouts/private/dashboard/dashboard';
import { authGuard } from './auth.guard';
import { CrudComponent } from './layouts/private/crud/crud';
import { ProfileComponent } from './layouts/private/profile/profile';
import { GaleryComponent } from './layouts/private/galery/galery';

export const routes: Routes = [
    // PÚBLICAS
    { path: '', component: HomeComponent },
    { path: '#', component: HomeComponent },
    { path: 'acerca-de', component: AcercaDeComponent },
    { path: 'login', component: LoginComponent },

    // PRIVADAS
    { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
    { path: 'crud', component: CrudComponent, canActivate: [authGuard] },
    { path: 'galery', component: GaleryComponent, canActivate: [authGuard] },
    { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },

    { path: '**', redirectTo: '', pathMatch: 'full' },
];

import { Injectable } from '@angular/core';
import { using } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class Auth {
    // Variables privadas
    private loggedIn: boolean = false;
    private currentUserName: string = '';

    constructor() {
        // Recoge los datos desde el almacenamiento
        const loggedGuardado = localStorage.getItem('isLoggedIn');
        const usernameGuardado = localStorage.getItem('userName');

        if (loggedGuardado === 'true') {
            this.loggedIn = true;
            this.currentUserName = usernameGuardado || '';
        }
    }

    // Método login
    login(credenciales: { userName: string; password: string }): boolean {
        if (credenciales.userName === 'master@lemoncode.net' && credenciales.password === '1234') {
            this.loggedIn = true;
            this.currentUserName = credenciales.userName;

            // Guardar el estado de login y el nombre de usuario
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userName', this.getUserName());

            return true;
        }
        return false;
    }

    // Método para desloggearse
    logout(): void {
        this.loggedIn = false;
        this.currentUserName = '';

        // Borrar los datos de login que hay guardados
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userName');
    }

    // Método para comprobar si se está loggeado
    isLogged(): boolean {
        return this.loggedIn;
    }

    // Método para obtener el nombre del usuario
    getUserName(): string {
        return this.currentUserName;
    }

    setUserName(userName: string): void {
        this.currentUserName = userName;
        localStorage.setItem('userName', userName);
    }
}

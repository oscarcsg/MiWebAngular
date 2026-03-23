import { Injectable } from '@angular/core';
import { using } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  // Variables privadas
  private loggedIn: boolean = false;
  private currentUserName: string = '';

  constructor() {}

  // Método login
  login(credenciales: { userName: string; password: string }): boolean {
    if (credenciales.userName === 'master@lemoncode.net' && credenciales.password === '1234') {
      this.loggedIn = true;
      this.currentUserName = credenciales.userName;
      return true;
    }
    return false;
  }

  // Método para desloggearse
  logout(): void {
    this.loggedIn = false;
    this.currentUserName = '';
  }

  // Método para comprobar si se está loggeado
  isLogged(): boolean {
    return this.loggedIn;
  }

  // Método para obtener el nombre del usuario
  getUserName(): string {
    return this.currentUserName;
  }
}

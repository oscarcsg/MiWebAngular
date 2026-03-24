import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../../auth';
import { RedirectCommand, Route, Router } from '@angular/router';

@Component({
    selector: 'home',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './login.component.html',
})
export class LoginComponent {
    // Variables para guardar lo que escriba el usuario
    userName = '';
    password = '';

    constructor(
        private authService: Auth,
        private router: Router,
    ) {}

    // Se ejecutará al pulsar el botón del formulario de login
    intentarLogin() {
        // Comprobar si los datos introducidos son correctos
        const exito = this.authService.login({
            userName: this.userName,
            password: this.password,
        });

        // Comprobar la respuesta
        if (exito) {
            this.router.navigate(['/dashboard']);
        } else {
            alert('Error: Usuario o contraseña incorrectos.');
        }
    }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../../../auth';

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

  constructor(private authService: Auth) {}

  // Esta función se ejecutará al pulsar el botón
  intentarLogin() {
    // Llamamos al método login de tu servicio pasándole los datos
    const exito = this.authService.login({
      userName: this.userName,
      password: this.password,
    });

    // Comprobamos la respuesta
    if (exito) {
      alert('¡Login correcto! Hola, ' + this.authService.getUserName());
      // (Más adelante aquí pondremos el código para llevarlo al Home)
    } else {
      alert('Error: Usuario o contraseña incorrectos.');
    }
  }
}

import { Component } from '@angular/core';
import { Auth } from '../../../auth';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './profile.html',
    styleUrl: './profile.css',
})
export class ProfileComponent {
    username: string = '';

    constructor(private auth: Auth) {
        const un = auth.getUserName();
        if (un?.trim()) {
            this.username = un;
        }
    }

    actualizarNombreUsuario() {
        this.auth.setUserName(this.username);
    }
}

import { Component } from '@angular/core';
import { PublicHeaderComponent } from './public/he-public';
import { Auth } from '../../auth';
import { PrivateHeaderComponent } from './private/he-private';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [PublicHeaderComponent, PrivateHeaderComponent],
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    constructor(public auth: Auth) {}
}

import { Component } from '@angular/core';
import { PublicHeaderComponent } from './public/he-public';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [PublicHeaderComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {}

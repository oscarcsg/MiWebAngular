import { Component } from '@angular/core';
import { Auth } from '../../../auth';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'private-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './he-private.component.html',
})
export class PrivateHeaderComponent {
  constructor(
    public auth: Auth,
    private router: Router,
  ) {}

  logout() {
    this.auth.logout();
    this.router.navigate(['/']);
  }
}

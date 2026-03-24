import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'public-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './he-public.component.html',
})
export class PublicHeaderComponent {}

import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer';
import { HeaderComponent } from './components/header/header';
import { HomeComponent } from './layouts/public/home/home';

@Component({
  selector: 'app-root',
  imports: [FooterComponent, HeaderComponent, HomeComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('mi-web-angular');
}

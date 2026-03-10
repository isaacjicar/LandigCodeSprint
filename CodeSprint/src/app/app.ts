import { Component, signal } from '@angular/core';
import { AboutComponent } from './landing/about/about';
import { HeroComponent } from './landing/hero/hero';


@Component({
  selector: 'app-root',
  imports: [HeroComponent, AboutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CodeSprint');
}

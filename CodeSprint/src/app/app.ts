import { Component, signal } from '@angular/core';
import { AboutComponent } from './landing/about/about';
import { HeroComponent } from './landing/hero/hero';
import { FooterComponent } from './landing/footer/footer';
import { MissionVisionValuesComponent } from './landing/mission-vision-values/mission-vision-values';
import { ServicesComponent } from './landing/services/services';


@Component({
  selector: 'app-root',
  imports: [HeroComponent, AboutComponent, MissionVisionValuesComponent, ServicesComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CodeSprint');
}

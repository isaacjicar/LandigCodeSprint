import { Component, signal } from '@angular/core';
import { AboutComponent } from './landing/about/about';
import { HeroComponent } from './landing/hero/hero';
import { FooterComponent } from './landing/footer/footer';
import { MissionVisionValuesComponent } from './landing/mission-vision-values/mission-vision-values';
import { ServicesComponent } from './landing/services/services';
import { ProjectsComponent } from './landing/projects/projects';
import { PuravidacareprojectsComponent } from './landing/pura-vida-care-project/pura-vida-care-project';
import { ScrollTopComponent } from './landing/scroll-top/scroll-top';
import { TeamComponent } from './landing/team/team';
import { CtaComponent } from './landing/cta/cta';


@Component({
  selector: 'app-root',
  imports: [HeroComponent, AboutComponent, MissionVisionValuesComponent, ServicesComponent, PuravidacareprojectsComponent, ProjectsComponent, ScrollTopComponent, TeamComponent,CtaComponent ,FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('CodeSprint');
}

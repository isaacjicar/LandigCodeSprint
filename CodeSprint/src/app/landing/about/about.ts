import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Target, Zap, Award, Users } from 'lucide-angular';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  readonly Award = Award;

  stats = [
    { icon: Target, value: '150+', label: 'Proyectos Completados' },
    { icon: Users,  value: '50+',  label: 'Clientes Satisfechos' },
    { icon: Award,  value: '15+',  label: 'Premios Ganados' },
    { icon: Zap,    value: '8+',   label: 'Años de Experiencia' },
  ];
}
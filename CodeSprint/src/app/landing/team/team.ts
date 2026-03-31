import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Estructura de cada miembro del equipo 
interface TeamMember {
  name: string;
  role: string;
  photo?: string;
}

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './team.html',
  styleUrl: './team.css'
})
export class TeamComponent {

  // 5 miembros del equipo que se renderizan con @for en el HTML
  team: TeamMember[] = [
    { name: 'STEPHANIA ABARCA ', role: 'Project Manager',          photo: 'team/stef.jpg' },
    { name: 'ISAAC JIMENEZ', role: 'Coordinador de Desarrollo', photo: 'team/isaac.jpg' },
    { name: 'JOSHUA BENAVIDES ', role: 'Coordinador de Desarrollo', photo: 'team/Joshua.jpg' },
    { name: 'IGNACIO MOLINA ', role: 'Coordinador de Soporte',    photo: 'team/ignacio.jpg' },
    { name: 'SUSAN TORRES', role: 'Coordinador de QA',         photo: '' },
  ];
}
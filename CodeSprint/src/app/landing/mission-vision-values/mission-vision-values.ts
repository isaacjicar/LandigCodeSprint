import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Target, Eye, Zap, ShieldCheck, Users, TrendingUp } from 'lucide-angular';

@Component({
  selector: 'app-mission-vision-values',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './mission-vision-values.html',
  styleUrl: './mission-vision-values.css',
})
export class MissionVisionValuesComponent {

  // Íconos expuestos al template para las cards de Misión y Visión
  readonly Target = Target;
  readonly Eye = Eye;

  // Datos de las 4 tarjetas de valores 
  valores = [
    { icon: Zap,         title: 'Innovación',   description: 'Buscamos soluciones creativas y modernas para cada desafío.' },
    { icon: ShieldCheck, title: 'Calidad',       description: 'Código limpio, revisado y escalable en cada entrega.' },
    { icon: Users,       title: 'Colaboración',  description: 'Trabajamos en equipo, con el cliente y entre nosotros.' },
    { icon: TrendingUp,  title: 'Impacto',       description: 'Cada línea de código tiene un propósito real.' },
  ];
}
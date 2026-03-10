import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Estructura de cada tarjeta de servicio
interface Service {
  icon: string;
  title: string;
  description: string;
  tag: string;
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrl: './services.css'
})
export class ServicesComponent {

  // 6 servicios que se renderizan en el grid con @for
  services: Service[] = [
    {
      icon: 'smartphone',
      title: 'Desarrollo Mobile',
      description: 'Apps iOS y Android nativas o con React Native.',
      tag: 'Mobile',
    },
    {
      icon: 'monitor',
      title: 'Desarrollo Web',
      description: 'Plataformas web modernas con React, Next.js y tecnologías actuales.',
      tag: 'Web',
    },
    {
      icon: 'database',
      title: 'Backend & APIs',
      description: 'Arquitectura robusta, APIs REST y GraphQL, bases de datos optimizadas.',
      tag: 'Backend',
    },
    {
      icon: 'layout',
      title: 'UX/UI Design',
      description: 'Interfaces intuitivas centradas en el usuario, desde wireframe hasta entrega.',
      tag: 'Design',
    },
    {
      icon: 'cloud',
      title: 'DevOps & Cloud',
      description: 'Despliegue en AWS, GCP o Azure con CI/CD y monitoreo continuo.',
      tag: 'Cloud',
    },
    {
      icon: 'code',
      title: 'Consultoría Tech',
      description: 'Asesoría en arquitectura, stack tecnológico y mejores prácticas.',
      tag: 'Consultoría',
    },
  ];
}
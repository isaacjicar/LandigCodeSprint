import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Estructura de cada tarjeta de proyecto
interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {

  // 4 proyectos que se renderizan en el grid con @for
  projects: Project[] = [
    {
      title: 'ShopFlow',
      category: 'E-commerce Platform',
      description: 'Plataforma de comercio electrónico con integraciones de pago y gestión de inventario en tiempo real.',
      image: 'https://images.unsplash.com/photo-1768987439370-bd60d3d0b28b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMG1vYmlsZSUyMGFwcHxlbnwxfHx8fDE3NzI4NTI1MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'MediCare+',
      category: 'Healthcare App',
      description: 'Aplicación de telemedicina que conecta pacientes con profesionales de salud mediante videollamadas seguras.',
      image: 'https://images.unsplash.com/photo-1767449441925-737379bc2c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGhjYXJlJTIwbWVkaWNhbCUyMGFwcCUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzI4NTI1MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['React Native', 'WebRTC', 'AWS'],
    },
    {
      title: 'FinanceTrack',
      category: 'Finance Dashboard',
      description: 'Dashboard de análisis financiero con visualizaciones en tiempo real y reportes automatizados.',
      image: 'https://images.unsplash.com/photo-1748439435495-722cc1728b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwYmFua2luZyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzI4NTI1MzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
    },
    {
      title: 'FoodieExpress',
      category: 'Food Delivery',
      description: 'App de delivery de comida con tracking en tiempo real y sistema de recomendaciones personalizado.',
      image: 'https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwZGVsaXZlcnklMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzcyODUyNTM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      tags: ['Flutter', 'Firebase', 'Maps API'],
    },
  ];

  // Fallback si la imagen no carga: muestra placeholder con el título del proyecto
  onImageError(event: Event): void {
    const img = event.target as HTMLImageElement;
    img.src = 'https://placehold.co/600x400/0d9488/white?text=' + encodeURIComponent(img.alt);
    img.title = img.alt;
  }
}
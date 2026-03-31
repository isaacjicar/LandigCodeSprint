import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Estructura de cada feature de la lista izquierda
interface Feature {
  icon: string;
  text: string;
}

// Estructura de cada estadística de la barra inferior del mockup
interface Stat {
  value: string;
  label: string;
}

// Estructura de cada tarjeta de servicio del mockup
interface Service {
  icon: string;
  title: string;
}

@Component({
  selector: 'app-puravidacareprojects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pura-vida-care-project.html',
  styleUrl: './pura-vida-care-project.css'
})
export class PuravidacareprojectsComponent {

  // 4 características del producto con ícono SVG y descripción
  features: Feature[] = [
    { icon: 'shield',    text: 'Proveedores verificados con identidad confirmada' },
    { icon: 'map',       text: 'Seguimiento en tiempo real del servicio' },
    { icon: 'cpu',       text: 'Asistente IA para recomendar el servicio correcto' },
    { icon: 'calendar',  text: 'Agendamiento y gestión de citas' },
  ];

  // 3 estadísticas de la barra inferior del mockup
  stats: Stat[] = [
    { value: '1,200+', label: 'Usuarios' },
    { value: '350',    label: 'Proveedores' },
    { value: '98%',    label: 'Satisfacción' },
  ];

  // 3 tarjetas de servicio dentro del mockup
  services: Service[] = [
    { icon: '🚗', title: 'Transporte' },
    { icon: '👨‍⚕️', title: 'Telemedicina' },
    { icon: '🤝', title: 'Acompañamiento' },
  ];

  // Links del navbar dentro del mockup
  navItems = ['Servicios', 'Proveedores', 'Nosotros'];

  goToThePuraVidaCare(): void {
  window.location.href = 'http://localhost:4202';
}
}
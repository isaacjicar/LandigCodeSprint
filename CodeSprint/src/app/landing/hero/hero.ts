import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';
import { LucideAngularModule, Code2, Menu, X } from 'lucide-angular';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
  animations: [
    // Entrada desde abajo con fade (usada en main)
    trigger('fadeInUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
    // Fade simple (usada en menú mobile)
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-out', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class HeroComponent implements OnInit, OnDestroy {

  // Íconos de Lucide expuestos al template
  readonly Code2 = Code2;
  readonly Menu = Menu;
  readonly X = X;

  // Controla estilo del navbar al hacer scroll
  isScrolled = false;

  // Controla visibilidad del menú mobile
  isMobileMenuOpen = false;

  // Alturas de las columnas animadas tipo tetris del fondo
  columns = [40, 65, 80, 50, 70, 45, 75, 55];

  // Bolas de luz flotantes del fondo (posición, tamaño y color)
  balls = [
    { size: 180, color: 'rgba(13,148,136,0.20)', top: '10%', left: '5%' },
    { size: 140, color: 'rgba(16,185,129,0.15)', top: '70%', left: '85%' },
    { size: 100, color: 'rgba(13,148,136,0.12)', top: '50%', left: '80%' },
    { size: 80,  color: 'rgba(20,184,166,0.18)', top: '15%', left: '90%' },
    { size: 120, color: 'rgba(16,185,129,0.10)', top: '75%', left: '10%' },
    { size: 90,  color: 'rgba(13,148,136,0.14)', top: '45%', left: '15%' },
  ];

  // Links del navbar
  menuItems = [
    { href: '#about',    label: 'Nosotros' },
    { href: '#services', label: 'Servicios' },
    { href: '#team',     label: 'Equipo' },
    { href: '#projects', label: 'Proyectos' },
  ];

  // Etiquetas de confianza debajo de los botones 
  badges = ['Desarrollo a medida', 'Entrega ágil', 'Código de calidad'];

  // 60 estrellas pequeñas (1px) con parpadeo lento
  stars = Array.from({ length: 60 }, () => ({
    size: 1,
    opacity: 0.25,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: `${3 + Math.random() * 2}s`,
  }));

  // 30 estrellas medianas (2px)
  midStars = Array.from({ length: 30 }, () => ({
    size: 2,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: `${2 + Math.random() * 2}s`,
  }));

  // 15 estrellas cercanas (3px) con parpadeo más rápido
  nearStars = Array.from({ length: 15 }, () => ({
    size: 3,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: `${1.5 + Math.random() * 1.5}s`,
  }));

  // Activa clase .scrolled en el navbar al bajar más de 20px
  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  ngOnInit() {}
  ngOnDestroy() {}

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-scroll-top',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scroll-top.html',
  styleUrl: './scroll-top.css'
})
export class ScrollTopComponent {

  // Signal que controla si el botón es visible 
  isVisible = signal(false);

  // Actualiza isVisible al hacer scroll en la ventana
  @HostListener('window:scroll')
  onScroll(): void {
    this.isVisible.set(window.scrollY > 500);
  }

  // Hace scroll suave al tope de la página
  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, ArrowRight, Mail } from 'lucide-angular';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './cta.html',
  styleUrl: './cta.css',
})
export class CtaComponent {
  readonly ArrowRight = ArrowRight;
  readonly Mail = Mail;

  // Indicadores de confianza debajo de los botones
  trustItems = ['Respuesta en 24h', 'Sin compromiso', '100% confidencial'];
}
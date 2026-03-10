import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Code2, Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin, Send } from 'lucide-angular';
import emailjs from '@emailjs/browser';

// Credenciales de EmailJS (ocultas por seguridad, se ocupan cofiguarar una vez clonado el repo )
const EMAILJS_SERVICE  = '**********';
const EMAILJS_TEMPLATE = '**********';
const EMAILJS_KEY      = '**********';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule, LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {

  // Íconos de Lucide expuestos al template
  readonly Code2 = Code2;
  readonly Github = Github;
  readonly Linkedin = Linkedin;
  readonly Twitter = Twitter;
  readonly Instagram = Instagram;
  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly MapPin = MapPin;
  readonly Send = Send;

  // Valor del input de suscripción
  email = '';

  // Estados del envío
  enviando  = signal(false);
  enviado   = signal(false);
  error     = signal(false);

  // Links de navegación interna de la empresa
  companyLinks = [
    { href: '#about',    label: 'Nosotros' },
    { href: '#services', label: 'Servicios' },
    { href: '#team',     label: 'Equipo' },
    { href: '#projects', label: 'Portafolio' },
    { href: '#careers',  label: 'Carreras' },
  ];

  // Lista de servicios ofrecidos
  serviceLinks = [
    { label: 'Desarrollo Móvil' },
    { label: 'Desarrollo Web' },
    { label: 'Soluciones Cloud' },
    { label: 'Diseño UI/UX' },
    { label: 'Consultoría' },
  ];

  // Links legales del pie de página
  legalLinks = [
    { href: '#privacy', label: 'Privacidad' },
    { href: '#terms',   label: 'Términos' },
    { href: '#cookies', label: 'Cookies' },
  ];

  // Envía el email de suscripción con EmailJS
  async suscribirse() {
    if (!this.email || this.enviando()) return;

    this.enviando.set(true);
    this.error.set(false);

    try {
      await emailjs.send(
        EMAILJS_SERVICE,
        EMAILJS_TEMPLATE,
        {
          tipo:    'Suscripción Newsletter',
          nombre:  'Suscriptor',
          email:   this.email,
          mensaje: `Nuevo suscriptor al newsletter: ${this.email}`,
        },
        EMAILJS_KEY
      );
      this.enviado.set(true);
      this.email = '';
    } catch (e) {
      this.error.set(true);
    } finally {
      this.enviando.set(false);
    }
  }
}
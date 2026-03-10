import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule, Code2, Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin, Send } from 'lucide-angular';

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

  // Valor del input de suscripción por email
  email = '';

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
}
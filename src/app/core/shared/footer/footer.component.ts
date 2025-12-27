// src/app/components/footer/footer.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  urgenceLinks: FooterLink[] = [
    { label: 'Serrurier Urgence 24/7', href: '#urgence' },
    { label: 'Ouverture Porte Claquée', href: '#porte-claquee' },
    { label: 'Ouverture Porte Blindée', href: '#porte-blindee' },
    { label: 'Dépannage Dimanche & Férié', href: '#dimanche' },
    { label: 'Intervention Nuit', href: '#nuit' },
    { label: 'Clé Cassée dans Serrure', href: '#cle-cassee' }
  ];

  serviceLinks: FooterLink[] = [
    { label: 'Changement de Serrure', href: '#changement' },
    { label: 'Réparation Serrure', href: '#reparation' },
    { label: 'Installation Serrure 3 Points', href: '#3-points' },
    { label: 'Pose Porte Blindée', href: '#porte-blindee' },
    { label: 'Blindage de Porte', href: '#blindage' },
    { label: 'Sécurisation Habitation', href: '#securisation' }
  ];

  zoneLinks: FooterLink[] = [
    { label: 'Paris 1er - Louvre', href: '#paris-1' },
    { label: 'Paris 2ème - Bourse', href: '#paris-2' },
    { label: 'Paris 3ème - Temple', href: '#paris-3' },
    { label: 'Paris 4ème - Hôtel de Ville', href: '#paris-4' },
    { label: 'Paris 5ème - Panthéon', href: '#paris-5' },
    { label: 'Voir toutes les zones', href: '#zones' }
  ];

  legalLinks: FooterLink[] = [
    { label: 'Mentions Légales', href: '#mentions' },
    { label: 'Politique de Confidentialité', href: '#confidentialite' },
    { label: 'CGV', href: '#cgv' },
    { label: 'Plan du Site', href: '#sitemap' }
  ];

  socialLinks = [
    { icon: 'facebook', href: '#facebook', label: 'Facebook' },
    { icon: 'instagram', href: '#instagram', label: 'Instagram' },
    { icon: 'linkedin', href: '#linkedin', label: 'LinkedIn' }
  ];
}

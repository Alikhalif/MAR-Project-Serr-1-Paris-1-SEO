// hero-section.component.ts
import { Component, Input, Output, EventEmitter, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SITE_CONFIG_TOKEN } from '../../../config/site-config.token';
import { SiteConfig } from '../../../config/site-config.model';

export interface HeroData {
  backgroundImage: string;
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaPhone: string;
  ctaSubText: string;
}

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  // heroData!: HeroData;
  @Output() ctaClick = new EventEmitter<void>();

  platformId = inject(PLATFORM_ID);
  site: SiteConfig = inject(SITE_CONFIG_TOKEN);

  onCtaClick(): void {
    this.ctaClick.emit();
  }

  heroData: HeroData = {
    backgroundImage: 'https://i.ibb.co/zTNsTqmw/hero-bg.jpg', // ou votre image
    title: 'Serrurier Paris 1er - Dépannage & Urgence 24h/24',
    subtitle: 'Intervention d\'Urgence & Sécurité en Moins de 30 Minutes',
    description: '',
    ctaText: 'URGENCE ? ENFERMÉ(E) À PARIS ?',
    ctaPhone: this.site.phone,
    ctaSubText: 'Intervention 24h/24 - 7j/7 - Sans majoration nuit, dimanche & fériés'
  };

  onEmergencyCall(): void {
    // Logique pour appeler le numéro
    console.log('Appel d\'urgence déclenché');
    // window.location.href = 'tel:01XXXXXXXXXX';
  }


  callNow(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = `tel:${this.site.phone}`;
    }
  }
}

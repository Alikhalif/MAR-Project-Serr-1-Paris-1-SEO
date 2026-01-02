// ===================================================
// HERO SECTION COMPONENT
// ===================================================
// src/app/components/hero-section/hero-section.component.ts
import { Component, inject, input, output, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SiteConfig } from '../../config/site-config.model';
import { SITE_CONFIG_TOKEN } from '../../config/site-config.token';

interface HeroData {
  title: string;
  subtitle: string;
  description: string;
  ctaText: string;
  ctaPhone: string;
  backgroundImage: string;
}

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  data = input.required<HeroData>();
  ctaClick = output<string>();

  platformId = inject(PLATFORM_ID);
  site: SiteConfig = inject(SITE_CONFIG_TOKEN);

  onCtaClick(): void {
    this.ctaClick.emit(this.data().ctaPhone);
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = `tel:${this.site.phone}`;
    }
  }

  callNow(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = `tel:${this.site.phone}`;
    }
  }
}

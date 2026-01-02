// ===================================================
// OUR SERVICES COMPONENT
// ===================================================
// src/app/components/our-services/our-services.component.ts
import { Component, inject, input, output, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SITE_CONFIG_TOKEN } from '../../config/site-config.token';
import { SiteConfig } from '../../config/site-config.model';

interface Service {
  icon: string;
  title: string;
  description: string;
  image: string;
  price: string;
}

interface ServicesData {
  title: string;
  subtitle: string;
  services: Service[];
  ctaText: string;
  ctaPhone: string;
}

@Component({
  selector: 'app-our-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-services.component.html',
  styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {
  data = input.required<ServicesData>();
  serviceClick = output<Service>();
  ctaClick = output<string>();

  platformId = inject(PLATFORM_ID);
  site: SiteConfig = inject(SITE_CONFIG_TOKEN);

  onServiceClick(service: Service): void {
    this.serviceClick.emit(service);
  }

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

// ===================================================
// PRICING TRANSPARENCY COMPONENT
// ===================================================
// src/app/components/pricing-transparency/pricing-transparency.component.ts
import { Component, inject, input, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SITE_CONFIG_TOKEN } from '../../config/site-config.token';
import { SiteConfig } from '../../config/site-config.model';

interface PricingData {
  title: string;
  description: string;
  highlight: string;
  features: string[];
}

@Component({
  selector: 'app-pricing-transparency',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pricing-transparency.component.html',
  styleUrl: './pricing-transparency.component.scss'
})
export class PricingTransparencyComponent {
  data = input.required<PricingData>();
  platformId = inject(PLATFORM_ID);
  site: SiteConfig = inject(SITE_CONFIG_TOKEN);

  callNow(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = `tel:${this.site.phone}`;
    }
  }
}

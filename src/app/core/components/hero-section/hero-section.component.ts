// ===================================================
// HERO SECTION COMPONENT
// ===================================================
// src/app/components/hero-section/hero-section.component.ts
import { Component, inject, input, output, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

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

  onCtaClick(): void {
    this.ctaClick.emit(this.data().ctaPhone);
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = `tel:${this.data().ctaPhone}`;
    }
  }
}

// ===================================================
// CONCLUSION COMPONENT
// ===================================================
// src/app/components/conclusion/conclusion.component.ts
import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';



interface ConclusionData {
  title: string;
  description: string;
  ctaText: string;
  ctaPhone: string;
  ctaDescription: string;
}

@Component({
  selector: 'app-conclusion',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './conclusion.component.html',
  styleUrl: './conclusion.component.scss'
})
export class ConclusionComponent {
  data = input.required<ConclusionData>();
  ctaClick = output<string>();

  platformId = inject(PLATFORM_ID);

  onCtaClick(): void {
    this.ctaClick.emit(this.data().ctaPhone);

    if (isPlatformBrowser(this.platformId)) {
      window.location.href = `tel:${this.data().ctaPhone}`;
    }
  }
}

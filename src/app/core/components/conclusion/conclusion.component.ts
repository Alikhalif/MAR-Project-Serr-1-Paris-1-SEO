// ===================================================
// CONCLUSION COMPONENT
// ===================================================
// src/app/components/conclusion/conclusion.component.ts
import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  onCtaClick(): void {
    this.ctaClick.emit(this.data().ctaPhone);
    window.location.href = `tel:${this.data().ctaPhone}`;
  }
}

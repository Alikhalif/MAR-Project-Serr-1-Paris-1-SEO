// ===================================================
// FAQ COMPONENT
// ===================================================
// src/app/components/faq/faq.component.ts
import { Component, inject, input, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { SITE_CONFIG_TOKEN } from '../../config/site-config.token';
import { SiteConfig } from '../../config/site-config.model';

interface Question {
  question: string;
  answer: string;
}

interface FaqData {
  title: string;
  questions: Question[];
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  data = input.required<FaqData>();
  expandedIndex = signal<number | null>(null);

  site: SiteConfig = inject(SITE_CONFIG_TOKEN);

  toggleQuestion(index: number): void {
    this.expandedIndex.update(current => current === index ? null : index);
  }

  isExpanded(index: number): boolean {
    return this.expandedIndex() === index;
  }


}

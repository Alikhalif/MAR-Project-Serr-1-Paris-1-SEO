// ===================================================
// FAQ COMPONENT
// ===================================================
// src/app/components/faq/faq.component.ts
import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

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

  toggleQuestion(index: number): void {
    this.expandedIndex.update(current => current === index ? null : index);
  }

  isExpanded(index: number): boolean {
    return this.expandedIndex() === index;
  }
}

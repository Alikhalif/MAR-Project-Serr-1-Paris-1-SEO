// ===================================================
// PRICING TRANSPARENCY COMPONENT
// ===================================================
// src/app/components/pricing-transparency/pricing-transparency.component.ts
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

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
}

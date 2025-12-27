// ===================================================
// WHY CHOOSE US COMPONENT
// ===================================================
// src/app/components/why-choose-us/why-choose-us.component.ts
import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

interface WhyChooseData {
  title: string;
  description: string;
  benefits: Benefit[];
}

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss'
})
export class WhyChooseUsComponent {
  data = input.required<WhyChooseData>();
}

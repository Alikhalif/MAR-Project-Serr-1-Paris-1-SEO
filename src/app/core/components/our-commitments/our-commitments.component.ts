// ===================================================
// OUR COMMITMENTS COMPONENT
// ===================================================
// src/app/components/our-commitments/our-commitments.component.ts
import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE_CONFIG_TOKEN } from '../../config/site-config.token';
import { SiteConfig } from '../../config/site-config.model';

interface Commitment {
  icon: string;
  title: string;
  description: string;
}

interface CommitmentsData {
  title: string;
  subtitle: string;
  commitments: Commitment[];
}

@Component({
  selector: 'app-our-commitments',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './our-commitments.component.html',
  styleUrl: './our-commitments.component.scss'
})
export class OurCommitmentsComponent {
  data = input.required<CommitmentsData>();
  site: SiteConfig = inject(SITE_CONFIG_TOKEN);
}

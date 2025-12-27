import { Component, HostListener, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

interface MenuItem {
  label: string;
  children?: MenuItem[];
  route?: string;
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('dropdownAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate('200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('150ms ease-in', style({ opacity: 0, transform: 'translateY(-10px)' }))
      ])
    ]),
    trigger('mobileMenuAnimation', [
      transition(':enter', [
        style({ opacity: 0, height: 0 }),
        animate('300ms ease-out', style({ opacity: 1, height: '*' }))
      ]),
      transition(':leave', [
        animate('250ms ease-in', style({ opacity: 0, height: 0 }))
      ])
    ])
  ]
})
export class NavbarComponent {
  isScrolled = signal(false);
  isMobileMenuOpen = signal(false);
  activeDropdown = signal<string | null>(null);
  isMobile = signal(false);

  menuItems: MenuItem[] = [
    // {
    //   label: 'ACCUEIL',
    //   route: '/'
    // },
    {
      label: 'URGENCE 24h/24',
      children: [
        { label: 'Serrurier Urgence Paris 1er', route: '/serrurier-urgence' },
        { label: 'Ouverture Porte Claquée', route: '/ouverture-porte-claquee' },
        { label: 'Clé Cassée dans Serrure', route: '/clef-cassee-dans-serrure' },
        { label: 'Perte de Clés / Clé Perdue', route: '/perte-cles-securisation' },
        { label: 'Porte Bloquée / Ne S\'Ouvre Plus', route: '/depannage-porte-bloquee' },
        { label: 'Intervention Nuit, Dimanche, Férié', route: '/serrurier-nuit' },
        { label: 'Dépannage Serrurerie Immédiat', route: '/depannage-serrurier' }
      ]
    },
    {
      label: 'RÉPARATION / INTERVENTIONS',
      children: [
        { label: 'Changement de Serrure', route: '/changement-serrure' },
        { label: 'Remplacement Cylindre / Barillet', route: '/remplacement-cylindre-paris-1' },
        { label: 'Réparation Serrure Cassée', route: '/serrure-cassee-paris-1' },
        { label: 'Poignée Cassée', route: '/poignee-cassee-paris-1' },
        { label: 'Dépannage Serrure 3 Points', route: '/serrure-3-points-paris-1' },
        { label: 'Réparation Porte Blindée', route: '/reparation-porte-blindee-paris-1' },
        { label: 'Réglage de Porte', route: '/reglage-porte-paris-1' }
      ]
    },
    {
      label: 'INSTALLATION / SÉCURITÉ',
      children: [
        { label: 'Installation Serrure 3 Points', route: '/installation-serrure-3-point' },
        { label: 'Pose Porte Blindée', route: '/pose-porte-blindee-paris-1' },
        { label: 'Blindage de Porte', route: '/blindage-porte-paris-1' },
        { label: 'Installation Serrure Multipoints', route: '/installation-serrure-multipoints-paris-1' },
        { label: 'Sécurisation Habitation', route: '/securisation-habitation-paris-1' },
        // { label: 'Audit Sécurité Gratuit', route: '/installation/audit-gratuit' }
      ]
    },
    {
      label: 'TARIFS TRANSPARENTS',
      children: [
        { label: 'Serrurier Pas Cher Paris 1er', route: '/serrurier-pas-cher-paris-1' },
        { label: 'Ouverture Porte Prix Fixe', route: '/ouverture-porte-pas-cher-paris-1' },
        { label: 'Dépannage Serrurier Prix', route: '/depannage-serrurier-prix-paris-1' },
        { label: 'Tarifs Transparents', route: '/tarif-serrurier-paris-1' },
      ]
    }
  ];

  navbarClasses = computed(() => ({
    'navbar--scrolled': this.isScrolled(),
    'navbar--mobile-open': this.isMobileMenuOpen()
  }));

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  @HostListener('window:resize')
  onResize(): void {
    this.checkMobile();
    if (!this.isMobile() && this.isMobileMenuOpen()) {
      this.closeMobileMenu();
    }
  }

  constructor() {
    this.checkMobile();
  }

  checkMobile(): void {
    this.isMobile.set(window.innerWidth < 992);
  }

  toggleDropdown(label: string): void {
    if (this.isMobile()) {
      this.activeDropdown.set(
        this.activeDropdown() === label ? null : label
      );
    }
  }

  openDropdown(label: string): void {
    if (!this.isMobile()) {
      this.activeDropdown.set(label);
    }
  }

  closeDropdown(): void {
    if (!this.isMobile()) {
      this.activeDropdown.set(null);
    }
  }

  isDropdownActive(label: string): boolean {
    return this.activeDropdown() === label;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(v => !v);
    if (!this.isMobileMenuOpen()) {
      this.activeDropdown.set(null);
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
    this.activeDropdown.set(null);
  }

  callPhone(): void {
    window.location.href = 'tel:0123456789';
  }
}

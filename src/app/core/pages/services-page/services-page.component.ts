import { Component, signal, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurServicesComponent } from "../../components/our-services/our-services.component";

interface Service {
  icon: string;
  title: string;
  description: string;
  image: string;
  price: string;
  category: string;
}

interface ServicesData {
  title: string;
  subtitle: string;
  services: Service[];
  ctaText: string;
  ctaPhone: string;
}

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [CommonModule, OurServicesComponent],
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss']
})
export class ServicesPageComponent {
  // Main hero section
  heroData = {
    title: 'NOS SERVICES DE SERRURERIE À PARIS 1er',
    subtitle: 'Serrurier d\'urgence 24h/24 • Interventions en moins de 30 minutes • Artisans certifiés • Prix fixes transparents',
    description: 'Découvrez l\'ensemble de nos services de serrurerie professionnelle disponibles 24h/24 dans le 1er arrondissement de Paris et ses environs. Que vous soyez face à une urgence immédiate ou que vous souhaitiez sécuriser votre logement, nos artisans qualifiés interviennent avec expertise et réactivité.'
  };

  // Services data organized by category
  emergencyServices = signal({
    title: '🔴 SERVICES D\'URGENCE 24H/24',
    subtitle: 'Interventions immédiates en moins de 30 minutes',
    ctaText: 'URGENCE SERRURERIE',
    ctaPhone: '01 XX XX XX XX',
    services: [
      {
        icon: '🚨',
        title: 'Ouverture de porte en urgence',
        description: 'Techniques non destructives pour ouvrir votre porte sans l\'endommager. Intervention en moins de 30 minutes.',
        image: 'https://i.ibb.co/fcb8d2m/urgence-porte-1.png',
        price: 'À partir de 89€',
        category: 'urgence'
      },
      {
        icon: '🔑',
        title: 'Clé cassée dans la serrure',
        description: 'Extraction du fragment avec outils spécialisés. Remplacement immédiat du cylindre si nécessaire.',
        image: 'https://i.ibb.co/SwDNZBH3/cle-cassee-2.png',
        price: 'À partir de 79€',
        category: 'urgence'
      },
      {
        icon: '🔓',
        title: 'Perte totale de clés',
        description: 'Ouverture sécurisée + nouveau cylindre + jeu complet de clés recréé sur place.',
        image: 'https://i.ibb.co/spLjjC3b/perte-cles-3.png',
        price: 'À partir de 129€',
        category: 'urgence'
      },
      {
        icon: '🛡️',
        title: 'Porte blindée bloquée',
        description: 'Expertise toutes marques (Fichet, Vachette, Picard). Respect des garanties constructeurs.',
        image: 'https://i.ibb.co/V0W28xBQ/porte-blindee-4.png',
        price: 'À partir de 149€',
        category: 'urgence'
      },
      {
        icon: '🌙',
        title: 'Interventions spéciales 24h/24',
        description: 'Dimanche, jours fériés et nuit (22h-6h). Interventions discrètes dans tout Paris 1er.',
        image: 'https://i.ibb.co/X1GsDJN/nuit-5.png',
        price: 'Sur devis',
        category: 'urgence'
      }
    ]
  });

  repairServices = signal({
    title: '🔧 RÉPARATIONS & DÉPANNAGES',
    subtitle: 'Réparations techniques et maintenance préventive',
    ctaText: 'DEMANDER UN DÉPANNAGE',
    ctaPhone: '01 XX XX XX XX',
    services: [
      {
        icon: '🔄',
        title: 'Changement de cylindre',
        description: 'Standard, haute sécurité ou à bouton. Installation rapide et sécurisée.',
        image: 'https://i.ibb.co/Myq313Bp/cylindre-1.png',
        price: 'À partir de 69€',
        category: 'reparation'
      },
      {
        icon: '🔩',
        title: 'Remplacement de serrure',
        description: 'Serrure complète adaptée sur mesure à votre porte. Installation professionnelle.',
        image: 'https://i.ibb.co/8DsWJtk2/serrure-complete-2.png',
        price: 'À partir de 99€',
        category: 'reparation'
      },
      {
        icon: '⚙️',
        title: 'Réparation serrure 3 points',
        description: 'Réglage des pênes, alignement, lubrification. Rétablissement optimal.',
        image: 'https://i.ibb.co/gZVXjvBM/3-poin.png',
        price: 'À partir de 89€',
        category: 'reparation'
      },
      {
        icon: '🔧',
        title: 'Dépannage serrure bloquée',
        description: 'Diagnostic rapide, désobstruction, nettoyage complet du mécanisme.',
        image: 'https://i.ibb.co/rKyqY32r/bloquee-5.jpg',
        price: 'À partir de 79€',
        category: 'reparation'
      },
      {
        icon: '🚪',
        title: 'Réglage porte qui frotte',
        description: 'Rabotage léger, ajustement des paumelles, alignement parfait.',
        image: 'https://i.ibb.co/TDWd5Kv4/porte-frotte-5.png',
        price: 'À partir de 65€',
        category: 'reparation'
      }
    ]
  });

  installationServices = signal({
    title: '🛡️ INSTALLATION & SÉCURISATION',
    subtitle: 'Sécurisez votre logement avec nos solutions professionnelles',
    ctaText: 'DEVIS SÉCURITÉ GRATUIT',
    ctaPhone: '01 XX XX XX XX',
    services: [
      {
        icon: '🏆',
        title: 'Serrure 3 points A2P',
        description: 'Certification assurance, réduction de prime. Installation garantie 2 ans.',
        image: 'https://i.ibb.co/F4VBGJHf/a2p-1.jpg',
        price: 'À partir de 199€',
        category: 'installation'
      },
      {
        icon: '🔐',
        title: 'Serrure multipoints',
        description: '5 à 12 points de fermeture. Sécurité renforcée pour portes blindées.',
        image: 'https://i.ibb.co/pvmsK50X/multipoints-2.jpg',
        price: 'À partir de 249€',
        category: 'installation'
      },
      // {
      //   icon: '📱',
      //   title: 'Serrure connectée',
      //   description: 'Ouverture smartphone, digicode, badge. Installation et configuration.',
      //   image: 'https://i.ibb.co/FkvX9rTh/connectee-3.jpg',
      //   price: 'À partir de 299€',
      //   category: 'installation'
      // },
      {
        icon: '🚪',
        title: 'Pose de porte blindée',
        description: 'Installation complète sur mesure. Toutes marques, toutes finitions.',
        image: 'https://i.ibb.co/hFphMHbG/pose-blindee-4.jpg',
        price: 'À partir de 899€',
        category: 'installation'
      },
      {
        icon: '🔍',
        title: 'Audit sécurité gratuit',
        description: 'Diagnostic complet des vulnérabilités de votre logement parisien.',
        image: 'https://i.ibb.co/wZDQHyc2/audit-5.png',
        price: 'Gratuit',
        category: 'installation'
      }
    ]
  });

  // Key stats
  keyStats = [
    { value: '95%', label: 'urgences traitées en <30 min' },
    { value: '10+', label: 'années d\'expérience' },
    { value: '5000+', label: 'interventions réalisées' },
    { value: '24h/24', label: 'disponibilité' },
    { value: '2 ans', label: 'garantie installations' }
  ];

  // Why choose us
  whyChooseUs = [
    {
      icon: '📍',
      title: 'Expertise locale',
      description: 'Connaissance parfaite des immeubles parisiens et des spécificités du 1er arrondissement.'
    },
    {
      icon: '⚡',
      title: 'Rapidité d\'intervention',
      description: 'Basés au cœur de Paris 1er, interventions ultra-rapides avec véhicules équipés.'
    },
    {
      icon: '⭐',
      title: 'Qualité professionnelle',
      description: 'Artisans certifiés, matériaux premium, garantie écrite sur tous nos travaux.'
    },
    {
      icon: '💰',
      title: 'Transparence absolue',
      description: 'Devis gratuit, prix fixes, pas de frais cachés. Confiance totale avec nos clients.'
    }
  ];

  // Coverage area
  coverageAreas = {
    main: [
      'Quartier Saint-Germain-l\'Auxerrois',
      'Quartier des Halles',
      'Quartier du Palais Royal',
      'Quartier de la Place Vendôme'
    ],
    adjacent: ['Paris 2ème', 'Paris 4ème', 'Paris 6ème', 'Paris 8ème']
  };

  onServiceClick(service: Service): void {
    console.log('Service clicked:', service);
    // Implement navigation or modal logic here
  }

  onCtaClick(phoneNumber: string): void {
    console.log('Calling:', phoneNumber);
    window.location.href = `tel:${phoneNumber}`;
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}

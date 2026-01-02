import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { ConclusionComponent } from "../../../components/conclusion/conclusion.component";
import { FaqComponent } from "../../../components/faq/faq.component";
import { PricingTransparencyComponent } from "../../../components/pricing-transparency/pricing-transparency.component";
import { OurServicesComponent } from "../../../components/our-services/our-services.component";
import { OurCommitmentsComponent } from "../../../components/our-commitments/our-commitments.component";
import { WhyChooseUsComponent } from "../../../components/why-choose-us/why-choose-us.component";
import { HeroSectionComponent } from "../../../components/hero-section/hero-section.component";
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';
import { SITE_CONFIG_TOKEN } from '../../../config/site-config.token';
import { SiteConfig } from '../../../config/site-config.model';

@Component({
  selector: 'app-blindage-porte',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './blindage-porte.component.html',
  styleUrl: './blindage-porte.component.scss'
})
export class BlindagePorteComponent {

  private title = inject(Title);
  private meta = inject(Meta);
  platformId = inject(PLATFORM_ID);
  site: SiteConfig = inject(SITE_CONFIG_TOKEN);

  constructor() {

    this.title.setTitle(
      'Blindage Porte Paris 1 | Sécurisation Porte Haute Sécurité'
    );

    this.meta.updateTag({
      name: 'description',
      content:
        'Blindage de porte à Paris 1er (75001) : renforcez votre porte existante sans remplacement. Serrurier expert, diagnostic gratuit.'
    });

    this.meta.updateTag({
      name: 'keywords',
      content:
        'blindage porte Paris 1, blindage porte Paris 75001, renforcement porte Paris, serrurier blindage Paris'
    });

    this.meta.updateTag({ name: 'robots', content: 'index, follow' });

    /* Open Graph */
    this.meta.updateTag({ property: 'og:title', content: 'Blindage Porte Paris 1 – Sécurité Renforcée' });
    this.meta.updateTag({ property: 'og:description', content: 'Service professionnel de blindage de porte à Paris 1. Sécurité A2P, intervention rapide.' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://www.tonsite.fr/blindage-porte-paris-1' });
    this.meta.updateTag({ property: 'og:image', content: 'https://images.unsplash.com/photo-1577493340887-0b78f5b3b6f5?w=1600&q=80' });

    /* Twitter */
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });

    if (isPlatformBrowser(this.platformId)) {
      this.injectJsonLd();
    }
  }



  injectJsonLd() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Locksmith",
            "@id": "https://www.tonsite.fr/#locksmith",
            "name": "Serrurier Blindage Porte Paris 1",
            "url": "https://www.tonsite.fr/blindage-porte-paris-1",
            "telephone": "+33757831800",
            "priceRange": "€€",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Paris",
              "postalCode": "75001",
              "addressCountry": "FR"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Paris 1er"
            },
            "openingHoursSpecification": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": [
                "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"
              ],
              "opens": "00:00",
              "closes": "23:59"
            }
          },
          {
            "@type": "Service",
            "name": "Blindage de Porte à Paris 1",
            "provider": {
              "@id": "https://www.tonsite.fr/#locksmith"
            },
            "areaServed": "Paris 75001",
            "description": "Blindage de porte existante sans remplacement. Sécurisation haute résistance A2P à Paris 1."
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Ma porte en bois ancienne est-elle un bon candidat au blindage ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui. Les portes en bois massif sont idéales pour le blindage car elles offrent une excellente base structurelle pour intégrer des plaques d’acier."
                }
              },
              {
                "@type": "Question",
                "name": "Quelle est la différence entre blindage et porte blindée ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le blindage renforce votre porte existante alors qu’une porte blindée est un ensemble neuf. Le blindage est plus économique et discret."
                }
              },
              {
                "@type": "Question",
                "name": "Le blindage est-il visible ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non. Les plaques sont intégrées à l’intérieur de la porte. L’aspect extérieur reste pratiquement inchangé."
                }
              },
              {
                "@type": "Question",
                "name": "Combien de temps dure un blindage de porte ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un blindage complet prend généralement entre 6 et 8 heures selon la complexité de la porte."
                }
              },
              {
                "@type": "Question",
                "name": "Le blindage est-il garanti ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui. Les pièces sont garanties par les fabricants et la pose est garantie minimum 2 ans."
                }
              }
            ]
          }
        ]
      }

    );
    document.head.appendChild(script);
  }

  callNow(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = `tel:${this.site.phone}`;
    }
  }

  heroData = signal({
    title: 'Blindage Porte à Paris 1',
    subtitle: 'Transformez Votre Porte en Rempart Sécurisé',
    description: 'Vous souhaitez renforcer votre porte existante à Paris 1 ? Notre service de blindage expert transforme votre porte en bois massif ou métal en une barrière haute sécurité, sans remplacer l\'ensemble, pour un investissement optimisé.',
    ctaText: 'Demander un diagnostic gratuit',
    ctaPhone: this.site.phone,
    backgroundImage: 'https://images.unsplash.com/photo-1577493340887-0b78f5b3b6f5?w=1600&q=80'
  });

  whyChooseData = signal({
    title: 'Pourquoi choisir le blindage plutôt que le remplacement de votre porte ?',
    description: 'Le blindage est la solution intelligente pour une sécurité maximale, en préservant votre porte d\'origine et en maîtrisant votre budget.',
    benefits: [
      {
        icon: '💰',
        title: 'Rapport efficacité/prix excellent',
        description: 'Obtenez un niveau de sécurité A2P pour un coût inférieur à l\'achat et la pose d\'une nouvelle porte blindée.'
      },
      {
        icon: '🎨',
        title: 'Conservation de l\'esthétique',
        description: 'Préservation de l\'apparence extérieure de votre porte ancienne ou à caractère, le renfort étant réalisé de l\'intérieur.'
      },
      {
        icon: '⚡',
        title: 'Travaux moins invasifs',
        description: 'Intervention plus rapide et propre qu\'un remplacement complet, sans démolition lourde du bâti dans la plupart des cas.'
      },
      {
        icon: '🛡️',
        title: 'Montée en gamme sécurité immédiate',
        description: 'Ajout d\'une serrure multipoints (3/5 points), de plaques anti-perçage et d\'un cylindre A2P pour une protection radicale.'
      }
    ]
  });

  commitmentsData = signal({
    title: 'Nos engagements pour un blindage de porte réussi à Paris 1',
    subtitle: 'Notre expertise transforme votre porte existante en une véritable forteresse discrète',
    commitments: [
      {
        icon: '🔍',
        title: 'Diagnostic de faisabilité gratuit',
        description: 'Évaluation technique de votre porte (bois massif, métal) et de son cadre pour valider le potentiel de blindage.'
      },
      {
        icon: '📋',
        title: 'Solution sur-mesure personnalisée',
        description: 'Plan de blindage adapté : serrure multipoints, plaques d\'acier internes, paumelles renforcées et cylindre A2P.'
      },
      {
        icon: '🔧',
        title: 'Travail de précision discret',
        description: 'Insertion des plaques de blindage à l\'intérieur de la porte, préservant totalement l\'aspect extérieur.'
      },
      {
        icon: '⚙️',
        title: 'Installation professionnelle complète',
        description: 'Pose de la serrure multipoints, fixation des renforts, installation du cylindre et renforcement des gonds et de la gâche.'
      },
      {
        icon: '✅',
        title: 'Double garantie offerte',
        description: 'Garantie sur les pièces de renfort (serrure, plaques, cylindre) + garantie sur notre main d\'œuvre d\'installation.'
      }
    ]
  });

  servicesData = signal({
    title: 'Nos prestations de renforcement et blindage à Paris 1',
    subtitle: 'Des solutions adaptées pour transformer votre porte actuelle en un accès sécurisé',
    services: [
      {
        icon: '🛡️',
        title: 'Blindage complet porte en bois massif',
        description: 'Renforcement structurel avec plaques d\'acier internes + serrure 3/5 points + cylindre A2P + paumelles sécurisées.',
        image: 'https://images.unsplash.com/photo-1577493340887-0b78f5b3b6f5?w=600&q=80',
        price: 'À partir de 750€*'
      },
      {
        icon: '🔩',
        title: 'Renforcement de porte métallique',
        description: 'Ajout d\'une serrure multipoints renforcée, renfort des points faibles et pose d\'un cylindre haute sécurité.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
        price: 'À partir de 650€*'
      },
      {
        icon: '🔐',
        title: 'Pack sécurité "Essentiel"',
        description: 'Pose d\'une serrure 3 points performante + cylindre A2P + renfort minimal de la zone serrure.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        price: 'À partir de 500€*'
      },
      {
        icon: '🚪',
        title: 'Renfort de cadre et gonds',
        description: 'Consolidation du bâti, pose de paumelles anti-arrachement et de gâches ancrées profondément pour compléter un blindage.',
        image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600&q=80',
        price: 'À partir de 300€*'
      }
    ],
    ctaText: 'Évaluer le potentiel de ma porte',
    ctaPhone: '01 23 45 67 89',
    note: '*Prix indicatif pour un blindage standard. Varie selon l\'état de la porte, le niveau de renfort et les équipements choisis.'
  });

  pricingData = signal({
    title: 'Transparence tarifaire : Coût d\'un blindage de porte à Paris 1',
    description: 'Le blindage est un investissement personnalisé. Notre devis détaille chaque élément du renfort pour une parfaite compréhension.',
    highlight: 'Devis personnalisé et clair - Solution sur-mesure sans surprise.',
    features: [
      'Coût des matériaux (plaques acier, serrure multipoints, cylindre A2P)',
      'Main d\'œuvre d\'installation et de modification sur mesure',
      'Garantie sur les pièces et la pose',
      'Solution économique vs remplacement complet'
    ]
  });

  conclusionData = signal({
    title: 'Votre expert en renforcement de porte de confiance à Paris 1',
    description: 'Ne sous-estimez pas le potentiel de votre porte actuelle. Le blindage est la solution astucieuse pour allier sécurité certifiée, respect du patrimoine et maîtrise budgétaire. Confiez-nous la transformation de votre porte en un rempart discret et extrêmement efficace, pour protéger ce qui compte le plus pour vous.',
    ctaText: 'Démarrer un projet de blindage',
    ctaPhone: '01 23 45 67 89',
    ctaDescription: 'Diagnostic gratuit et devis personnalisé pour votre porte à Paris 1 !'
  });

  faqData = signal({
    title: 'FAQ : Blindage de Porte Paris 1',
    questions: [
      {
        question: 'Ma porte en bois ancienne est-elle un bon candidat au blindage ?',
        answer: 'Oui, souvent c\'est le meilleur candidat ! Les portes en bois massif ancien sont naturellement résistantes et épaisses, offrant une base idéale pour y intégrer des plaques d\'acier et une serrure multipoints. Notre expertise est précieuse pour réaliser ce renforcement de manière discrète, sans altérer leur caractère et leur aspect patrimonial.'
      },
      {
        question: 'Quelle différence avec une porte blindée neuve ?',
        answer: 'Une porte blindée neuve est un produit complet (vantail + cadre) conçu et testé en usine. Le blindage est un renforcement sur-mesure de votre porte existante. Il est généralement moins cher, préserve l\'esthétique d\'origine et est moins invasif. La résistance finale d\'une porte bien blindée peut être équivalente à celle d\'un modèle neuf d\'entrée de gamme.'
      },
      {
        question: 'Le blindage est-il visible de l\'extérieur ?',
        answer: 'Non, l\'essence du blindage réussi est d\'être discret. Les plaques d\'acier sont insérées à l\'intérieur de la porte. Seuls les nouveaux éléments nécessaires sont visibles : une serrure multipoints légèrement plus imposante (souvent avec une plaque de propreté) et éventuellement des paumelles renforcées. L\'apparence générale de la façade et le style de votre porte restent préservés.'
      },
      {
        question: 'Combien de temps prend l\'opération de blindage ?',
        answer: 'Pour un blindage complet standard (serrure multipoints, plaques, cylindre A2P), prévoyez une journée de travail complète (environ 6 à 8 heures). Cela inclut le démontage/remontage partiel de la porte, les découpes et fixations précises, et les réglages minutieux pour un fonctionnement parfait.'
      },
      {
        question: 'Le blindage est-il garanti ?',
        answer: 'Oui, nous offrons une double garantie : 1) La garantie sur les pièces (serrure, cylindre, plaques) selon les durées des fabricants. 2) Notre garantie sur la main d\'œuvre d\'installation, d\'une durée minimale de 2 ans, contre tout défaut lié à la pose. Ces garanties sont détaillées sur votre facture et nos documents contractuels.'
      }
    ]
  });
}

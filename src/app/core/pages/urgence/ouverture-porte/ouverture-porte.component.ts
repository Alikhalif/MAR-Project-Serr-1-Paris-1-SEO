import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { ConclusionComponent } from "../../../components/conclusion/conclusion.component";
import { FaqComponent } from "../../../components/faq/faq.component";
import { PricingTransparencyComponent } from "../../../components/pricing-transparency/pricing-transparency.component";
import { OurCommitmentsComponent } from "../../../components/our-commitments/our-commitments.component";
import { WhyChooseUsComponent } from "../../../components/why-choose-us/why-choose-us.component";
import { OurServicesComponent } from "../../../components/our-services/our-services.component";
import { HeroSectionComponent } from "../../../components/hero-section/hero-section.component";
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-ouverture-porte',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurCommitmentsComponent, WhyChooseUsComponent, OurServicesComponent, HeroSectionComponent],
  templateUrl: './ouverture-porte.component.html',
  styleUrl: './ouverture-porte.component.scss'
})
export class OuverturePorteComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  platformId = inject(PLATFORM_ID);

  ngOnInit(): void {

    /* =========================
       TITLE
    ========================== */
    this.title.setTitle(
      'Ouverture de Porte Paris 1 (75001) | Dépannage Serrurier Rapide'
    );

    /* =========================
       META TAGS
    ========================== */
    this.meta.addTags([
      {
        name: 'description',
        content: 'Ouverture de porte à Paris 1 (75001). Dépannage rapide et sans dégâts, intervention en moins de 30 minutes. Serrure bloquée, clé perdue, porte claquée.'
      },
      {
        name: 'keywords',
        content: 'ouverture porte Paris 1, dépanneur porte claquée 75001, serrurier urgence Paris, porte bloquée Paris'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Serrurier Paris 1' },

      /* Canonical */
      {
        rel: 'canonical',
        href: 'https://www.tonsite.fr/ouverture-porte-paris-1'
      },

      /* Open Graph */
      {
        property: 'og:title',
        content: 'Ouverture de Porte à Paris 1 – Dépannage Express'
      },
      {
        property: 'og:description',
        content: 'Intervention rapide pour ouverture de porte à Paris 1. Déblocage sans dégâts, serrurier disponible 24h/24.'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: 'https://www.tonsite.fr/ouverture-porte-paris-1'
      }
    ]);

    if (isPlatformBrowser(this.platformId)) {
    this.injectSchema();
    }
  }

  /* =========================
     SCHEMA JSON-LD
  ========================== */
  injectSchema(): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(this.schemaData);
    document.head.appendChild(script);
  }

  schemaData = {
    "@context": "https://schema.org",
    "@graph": [

      /* ===== BUSINESS ===== */
      {
        "@type": "Locksmith",
        "@id": "https://www.tonsite.fr/#locksmith",
        "name": "Serrurier Paris 1",
        "telephone": "01 23 45 67 89",
        "priceRange": "€€",
        "url": "https://www.tonsite.fr",
        "openingHours": "Mo-Su 00:00-23:59",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Paris",
          "postalCode": "75001",
          "addressCountry": "FR"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Paris 1"
        }
      },

      /* ===== SERVICE ===== */
      {
        "@type": "Service",
        "@id": "https://www.tonsite.fr/ouverture-porte-paris-1#service",
        "name": "Ouverture de porte à Paris 1",
        "serviceType": "Déblocage et ouverture de porte",
        "provider": {
          "@id": "https://www.tonsite.fr/#locksmith"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Paris 1"
        },
        "description": "Ouverture de porte à Paris 1 : intervention rapide, non destructive, serrurier disponible 24h/24 pour porte claquée, clé perdue ou serrure bloquée.",
        "availableChannel": {
          "@type": "ServiceChannel",
          "servicePhone": {
            "@type": "ContactPoint",
            "telephone": "01 23 45 67 89",
            "contactType": "customer service"
          }
        }
      },

      /* ===== FAQ ===== */
      {
        "@type": "FAQPage",
        "@id": "https://www.tonsite.fr/ouverture-porte-paris-1#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Combien de temps prenez-vous pour ouvrir une porte en moyenne ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "L'ouverture propre prend généralement entre 5 et 20 minutes une fois l'artisan sur place. Le délai total dépend du temps de trajet."
            }
          },
          {
            "@type": "Question",
            "name": "Pouvez-vous ouvrir n'importe quel type de porte ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, portes blindées, 3 points, multipoints, bureaux, digicode ou interphone. Chaque système est maîtrisé par nos artisans."
            }
          },
          {
            "@type": "Question",
            "name": "Garantissez-vous de ne rien abîmer pendant l'ouverture ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nous privilégions les méthodes non destructives. Dans plus de 95% des cas, la porte et la serrure restent intactes."
            }
          },
          {
            "@type": "Question",
            "name": "Dois-je prouver que je suis bien le résident des lieux ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, pièce d'identité et justificatif de domicile sont demandés par mesure de sécurité et responsabilité."
            }
          },
          {
            "@type": "Question",
            "name": "Que faire si ma serrure est abîmée après l'ouverture ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Si la serrure est usée, nous proposons un devis immédiat pour remplacement du cylindre ou de la serrure, libre à vous de l'accepter ou différer."
            }
          }
        ]
      }
    ]
  };


  heroData = signal({
    title: 'Ouverture de Porte à Paris 1',
    subtitle: 'Dépannage Rapide et Sans Dégâts',
    description: 'Enfermé(e) dehors à Paris 1 ? Notre service d\'ouverture de porte intervient en 30 minutes ! Vous venez de sortir vider la poubelle, chercher le courrier ou accompagner un invité, et le vent a fait claquer la porte derrière vous.',
    ctaText: 'Bloqué(e) à l\'extérieur dans Paris 1 ? Appelez-nous immédiatement',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80'
  });

  whyChooseData = signal({
      title: 'Pourquoi confier l\'ouverture de votre porte à un serrurier professionnel à Paris 1 ?',
      description: 'Face à une porte close, la tentation de chercher une solution DIY est grande, mais les risques le sont tout autant. Tenter de forcer sa serrure avec des outils inadaptés peut avoir des conséquences graves.',
      benefits: [
          {
              icon: '❌',
              title: 'Éviter les dégâts irréversibles',
              description: 'Endommagement de la serrure, du cylindre, ou de la porte elle-même, nécessitant des réparations coûteuses.'
          },
          {
              icon: '🛡️',
              title: 'Préserver votre sécurité future',
              description: 'Une porte ou serrure fragilisée devient un point faible pour la sécurité de votre domicile.'
          },
          {
              icon: '⚡',
              title: 'Gagner du temps et réduire le stress',
              description: 'Éviter les tentatives infructueuses qui aggravent la situation et augmentent l\'anxiété.'
          },
          {
              icon: '💰',
              title: 'Solution économique à long terme',
              description: 'Une ouverture professionnelle préventive les dégâts et évite des réparations supplémentaires.'
          }
      ]
  });

  commitmentsData = signal({
      title: 'Notre méthode d\'ouverture de porte sans dégât : expertise et discrétion',
      subtitle: 'Notre intervention pour une ouverture de porte en urgence suit un protocole précis conçu pour votre tranquillité d\'esprit',
      commitments: [
          {
              icon: '🔧',
              title: 'Techniques non destructives',
              description: 'Privilégions le crochetage de serrure ou l\'utilisation de passe-partout techniques, sans perçage ni déformation.'
          },
          {
              icon: '⚡',
              title: 'Intervention rapide',
              description: 'Délai d\'arrivée inférieur à 30 minutes dans le 1er arrondissement.'
          },
          {
              icon: '🛡️',
              title: 'Préservation de la sécurité',
              description: 'Si intervention plus intrusive nécessaire, nous vous le signalons et proposons une solution de remplacement sécurisé.'
          },
          {
              icon: '📋',
              title: 'Devis transparent préalable',
              description: 'Devis gratuit, ferme et détaillé par téléphone avant toute manipulation.'
          },
          {
              icon: '👨‍🔧',
              title: 'Expertise tous types de portes',
              description: 'Portes blindées, serrures 3 points, multipoints, avec digicode ou interphone.'
          }
      ]
  });

  servicesData = signal({
      title: 'Situations nécessitant une ouverture de porte par un expert à Paris 1',
      subtitle: 'Notre service d\'ouverture de porte est sollicité pour divers scénarios dans le 1er arrondissement',
      services: [
          {
              icon: '🚪',
              title: 'Porte claquée avec clés à l\'intérieur',
              description: 'La situation d\'urgence la plus fréquente.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 89€'
          },
          {
              icon: '🔑',
              title: 'Clé cassée dans la serrure',
              description: 'Nécessite extraction du fragment avant ouverture.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 99€'
          },
          {
              icon: '🔒',
              title: 'Serrure ou cylindre bloqué',
              description: 'Clé tourne dans le vide ou refuse de tourner.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 89€'
          },
          {
              icon: '🛡️',
              title: 'Problème sur porte blindée',
              description: 'Pênes défectueux, mécanisme de verrouillage grippé.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 120€'
          },
          {
              icon: '❌',
              title: 'Perte totale des jeux de clés',
              description: 'Ouverture puis changement du barillet pour sécurité.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 150€'
          },
          {
              icon: '🚨',
              title: 'Ouverture après effraction',
              description: 'Accès aux lieux pour réparations de mise en sécurité.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          }
      ],
      ctaText: 'Appelez pour une ouverture immédiate',
      ctaPhone: '01 23 45 67 89'
  });

  pricingData = signal({
      title: 'Tarification d\'une ouverture de porte à Paris 1',
      description: 'Nous croyons en une relation de confiance, surtout dans l\'urgence. Le prix d\'une ouverture de porte par un serrurier comprend un forfait d\'intervention couvrant le déplacement, la réactivité et l\'expertise technique.',
      highlight: 'Pas de surprise : Le prix annoncé au téléphone est le prix que vous payez.',
      features: [
          'Forfait d\'intervention forfaitaire',
          'Méthodes non destructives privilégiées',
          'Nouveau devis pour travaux supplémentaires',
          'Transparence totale sur les coûts',
          'Aucun coût caché'
      ]
  });

  conclusionData = signal({
      title: 'Votre accès retrouvé, rapidement et en toute confiance, dans Paris 1',
      description: 'Une porte qui refuse de s\'ouvrir n\'est pas une fatalité. En faisant appel à notre service spécialisé dans l\'ouverture de porte à Paris 1, vous optez pour une solution technique, propre et rapide. Notre expertise nous permet de résoudre la grande majorité des blocages sans forçage, en préservant votre porte et votre serrure.',
      ctaText: 'Ne restez pas plus longtemps devant votre porte close',
      ctaPhone: '01 23 45 67 89',
      ctaDescription: 'Notre équipe d\'experts est à votre service pour une intervention discrète et efficace'
  });

  faqData = signal({
      title: 'FAQ : Ouverture de Porte Paris 1',
      questions: [
          {
              question: 'Combien de temps prenez-vous pour ouvrir une porte en moyenne ?',
              answer: 'L\'ouverture propre par crochetage ou méthode technique prend généralement entre 5 et 20 minutes, une fois l\'artisan sur place. Le délai total dépend surtout de notre temps de trajet, que nous minimisons grâce à notre implantation dans Paris (objectif <30 min).'
          },
          {
              question: 'Pouvez-vous ouvrir n\'importe quel type de porte (blindée, avec digicode, à double porte) ?',
              answer: 'Oui, notre expertise couvre tous les types d\'ouvertures courantes à Paris : portes blindées (avec ou sans système anti-crochetage), portes avec serrures 3 points ou multipoints, portes de bureau, et portes d\'entrée d\'immeuble équipées de digicode ou d\'interphone. Chaque système nécessite une approche spécifique que nos artisans maîtrisent.'
          },
          {
              question: 'Garantissez-vous de ne rien abîmer pendant l\'ouverture ?',
              answer: 'Nous nous engageons à utiliser en priorité absolue des méthodes non destructives. Dans plus de 95% des cas, nous ouvrons la porte sans aucun dégât visible sur la serrure ou la porte. Si la serrure est déjà très endommagée ou de basse qualité, nous vous en informons avant d\'agir.'
          },
          {
              question: 'Dois-je prouver que je suis bien le résident des lieux ?',
              answer: 'Oui, par mesure de sécurité et de responsabilité, notre artisan vous demandera une pièce d\'identité et un justificatif de domicile (facture EDF, quittance de loyer...). Cette vérification est standard, rapide et protège votre propriété.'
          },
          {
              question: 'Que faire si ma serrure est abîmée après l\'ouverture ?',
              answer: 'C\'est rare avec nos méthodes, mais possible si la serrure était déjà très usée. Dans ce cas, notre artisan vous propose immédiatement un devis pour le remplacement du cylindre ou de la serrure. Vous êtes libre de l\'accepter sur place (nous avons souvent les pièces dans notre véhicule) ou de différer cette réparation. L\'ouverture elle-même reste facturée au forfait initial.'
          }
      ]
  });
}

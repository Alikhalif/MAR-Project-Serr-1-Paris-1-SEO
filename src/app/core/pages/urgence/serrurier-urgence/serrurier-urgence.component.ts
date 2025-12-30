import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { FaqComponent } from '../../../components/faq/faq.component';
import {  ConclusionComponent } from '../../../components/conclusion/conclusion.component';

import { HeroSectionComponent } from "../../../components/hero-section/hero-section.component";
import { WhyChooseUsComponent } from "../../../components/why-choose-us/why-choose-us.component";
import { OurCommitmentsComponent } from "../../../components/our-commitments/our-commitments.component";
import { OurServicesComponent } from "../../../components/our-services/our-services.component";
import { PricingTransparencyComponent } from "../../../components/pricing-transparency/pricing-transparency.component";
import { Meta, Title } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-serrurier-urgence',
  standalone: true,
  imports: [ ConclusionComponent, FaqComponent, HeroSectionComponent, WhyChooseUsComponent, OurCommitmentsComponent, OurServicesComponent, PricingTransparencyComponent],
  templateUrl: './serrurier-urgence.component.html',
  styleUrl: './serrurier-urgence.component.scss'
})
export class SerrurierUrgenceComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  platformId = inject(PLATFORM_ID);

  ngOnInit(): void {

    this.title.setTitle(
      'Serrurier Urgence Paris 1 (75001) | Intervention Express 24h/24'
    );


    this.meta.addTags([
      {
        name: 'description',
        content: 'Serrurier urgence Paris 1 : intervention express 24h/24 pour porte bloquée, clé cassée ou dépannage immédiat. Service rapide et sécurisé.'
      },
      {
        name: 'keywords',
        content: 'serrurier urgence Paris 1, dépannage immédiat 75001, ouverture porte urgente, serrurier 24h/24 Paris 1'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Serrurier Paris 1' },

      /* Canonical */
      {
        rel: 'canonical',
        href: 'https://www.tonsite.fr/serrurier-urgence-paris-1'
      },

      /* Open Graph */
      {
        property: 'og:title',
        content: 'Serrurier Urgence à Paris 1 – Intervention Express 24h/24'
      },
      {
        property: 'og:description',
        content: 'Intervention immédiate pour porte bloquée, clé cassée ou urgence serrurerie à Paris 1. Déplacement rapide et sécurisé.'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: 'https://www.tonsite.fr/serrurier-urgence-paris-1'
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
        "@id": "https://www.tonsite.fr/serrurier-urgence-paris-1#service",
        "name": "Intervention urgente à Paris 1",
        "serviceType": "Serrurerie express 24h/24",
        "provider": {
          "@id": "https://www.tonsite.fr/#locksmith"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Paris 1"
        },
        "description": "Serrurier urgence Paris 1 : intervention express pour porte bloquée, clé cassée ou dépannage immédiat, avec sécurité et rapidité.",
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
        "@id": "https://www.tonsite.fr/serrurier-urgence-paris-1#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "En combien de temps intervenez-vous dans Paris 1 ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Notre objectif est d'être présent à votre adresse en moins de 30 minutes après votre appel confirmé."
            }
          },
          {
            "@type": "Question",
            "name": "Proposez-vous un devis gratuit pour une intervention urgente ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, nous communiquons un devis ferme et transparent par téléphone avant toute intervention."
            }
          },
          {
            "@type": "Question",
            "name": "Pouvez-vous ouvrir une porte sans l'abîmer ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, priorité aux techniques non destructives pour préserver la serrure et la porte."
            }
          },
          {
            "@type": "Question",
            "name": "Que faire si ma clé est cassée dans la serrure ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ne tentez pas de l'extraire vous-même. Nous intervenons avec des outils adaptés et remplaçons le cylindre si nécessaire."
            }
          },
          {
            "@type": "Question",
            "name": "Garantissez-vous les pièces et les interventions ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, toutes nos pièces et interventions sont garanties avec facturation détaillée."
            }
          }
        ]
      }
    ]
  };

  //HERO ==========

  heroData = signal({
    title: 'Serrurier Urgence Paris 1',
    subtitle: 'Intervention Express 24h/24 pour Dépannage Immédiat',
    description: 'Enfermé(e) devant votre porte dans le 1er arrondissement ? Notre serrurier urgence Paris 1 intervient en moins de 30 minutes !',
    ctaText: 'Appelez-nous maintenant',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://i.ibb.co/fcb8d2m/urgence-porte-1.png'
  });

  whyChooseData = signal({
    title: 'Pourquoi faire appel à un serrurier d\'urgence professionnel à Paris ?',
    description: 'Tenter de forcer sa porte ou sa serrure soi-même est rarement une bonne idée. Les risques sont nombreux.',
    benefits: [
      {
        icon: '🔧',
        title: 'Intervention sans dégâts',
        description: 'Nous utilisons des techniques de crochetage et d\'ouverture non destructives dans la grande majorité des cas.'
      },
      {
        icon: '🛡️',
        title: 'Préservation de votre sécurité',
        description: 'Une ouverture forcée mal réalisée compromet la résistance de votre porte.'
      },
      {
        icon: '⚙️',
        title: 'Solution pérenne',
        description: 'Nous diagnostiquons l\'origine du problème et vous proposons une réparation ou un remplacement immédiat et fiable.'
      },
      {
        icon: '✓',
        title: 'Tranquillité d\'esprit',
        description: 'Intervention assurée, facturation transparente et savoir-faire à votre service.'
      }
    ]
  });

  commitmentsData = signal({
    title: 'Nos engagements pour votre dépannage urgent à Paris',
    subtitle: 'Face à une urgence de serrurerie dans le 1er arrondissement, nous nous mobilisons avec des engagements clairs',
    commitments: [
      {
        icon: '🕐',
        title: 'Disponibilité 24h/24 et 7j/7',
        description: 'Week-ends, jours fériés, nuit... Nous sommes toujours joignables.'
      },
      {
        icon: '⚡',
        title: 'Intervention ultra-rapide',
        description: 'Objectif moins de 30 minutes après votre appel dans Paris 1.'
      },
      {
        icon: '💰',
        title: 'Devis gratuit et transparent',
        description: 'Le prix vous est communiqué et accepté avant tout commencement des travaux.'
      },
      {
        icon: '👨‍🔧',
        title: 'Artisans qualifiés et assurés',
        description: 'Nos techniciens sont expérimentés et formés aux dernières techniques et normes de sécurité (A2P*).'
      },
      {
        icon: '🔐',
        title: 'Matériel de qualité',
        description: 'Nous utilisons des pièces de haute sécurité (serrures 3 points, cylindres certifiés).'
      }
    ]
  });

  servicesData = signal({
    title: 'Nos services d\'urgence pour le 1er arrondissement de Paris',
    subtitle: 'Notre activité de serrurier à Paris 1 couvre l\'ensemble des situations critiques nécessitant une réaction immédiate',
    services: [
      {
        icon: '🚪',
        title: 'Ouverture de porte en urgence',
        description: 'Porte claquée, clé cassée dans la serrure, serrure bloquée ou défectueuse.',
        image: 'https://images.unsplash.com/photo-1582719201952-3f0ce5badca8?w=600&q=80',
        price: 'À partir de 89€'
      },
      {
        icon: '🔧',
        title: 'Dépannage de serrure',
        description: 'Réparation sur place de votre mécanisme existant si cela est possible et sécurisé.',
        image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
        price: 'À partir de 79€'
      },
      {
        icon: '🔑',
        title: 'Remplacement de cylindre',
        description: 'Pour une sécurité renforcée immédiatement après une perte de clés ou un vol.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        price: 'À partir de 120€'
      },
      {
        icon: '🛡️',
        title: 'Intervention sur porte blindée',
        description: 'Ouverture et dépannage spécifique sur ces modèles haute sécurité.',
        image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=600&q=80',
        price: 'À partir de 150€'
      }
    ],
    ctaText: 'Appelez pour un devis gratuit',
    ctaPhone: '01 23 45 67 89'
  });

  pricingData = signal({
    title: 'Transparence tarifaire : combien coûte un serrurier d\'urgence à Paris 1 ?',
    description: 'Nous croyons en une relation de confiance, qui commence par une tarification claire et juste. Le coût d\'une intervention d\'urgence comprend un forfait de déplacement, la main-d\'œuvre de l\'intervention et, le cas échéant, le prix de la pièce de remplacement.',
    highlight: 'Le prix vous est toujours confirmé avant l\'intervention',
    features: [
      'Forfait déplacement inclus',
      'Main-d\'œuvre qualifiée',
      'Pièces de qualité certifiée',
      'Aucune surprise sur la facture'
    ]
  });

  conclusionData = signal({
    title: 'Votre partenaire sécurité et réactivité à Paris',
    description: 'Face à l\'imprévu, la rapidité, la technicité et la fiabilité sont les maîtres-mots. Notre entreprise de serrurerie s\'engage à être à vos côtés lors de ces moments stressants pour y apporter une solution efficace et apaisante.',
    ctaText: 'Appelez-nous 24h/24 et 7j/7',
    ctaPhone: '01 23 45 67 89',
    ctaDescription: 'Intervention express dans les 30 minutes à Paris 1 !'
  });

  faqData = signal({
    title: 'FAQ : Serrurier Urgence Paris 1',
    questions: [
      {
        question: 'En combien de temps intervenez-vous dans Paris 1 ?',
        answer: 'Notre objectif est d\'être présent à votre adresse dans le 1er arrondissement en moins de 30 minutes après votre appel confirmé. Notre centrale est active 24h/24 et nos artisans sont répartis en mobilité dans Paris pour une réactivité maximale.'
      },
      {
        question: 'Proposez-vous un devis gratuit pour une intervention urgente ?',
        answer: 'Absolument. Après avoir écouté votre situation, nous vous communiquons un devis ferme et transparent par téléphone, incluant le forfait d\'urgence et les prestations envisagées. Aucun travail ne commence avant votre accord explicite sur ce devis.'
      },
      {
        question: 'Pouvez-vous ouvrir une porte sans l\'abîmer ?',
        answer: 'Dans la grande majorité des cas, oui. Nos techniciens sont formés aux techniques d\'ouverture non destructives (crochetage, passe-partout techniques, etc.). Notre priorité est de vous rendre l\'accès à votre logement tout en préservant l\'intégrité de votre serrure et de votre porte.'
      },
      {
        question: 'Que faire si ma clé est cassée dans la serrure ?',
        answer: 'Ne tentez pas de l\'extraire vous-même, vous pourriez enfoncer le fragment. Appelez-nous immédiatement. Nous intervenons pour retirer le fragment de clé avec des outils adaptés, puis nous procédons au dépannage ou au remplacement du cylindre si nécessaire.'
      },
      {
        question: 'Garantissez-vous les pièces et les interventions ?',
        answer: 'Oui, toutes nos pièces de remplacement (cylindres, serrures) sont garanties et de qualité normée. Nos interventions sont également couvertes par une garantie de parfait achèvement. Une facturation détaillée et nos coordonnées vous sont remises à la fin de chaque prestation.'
      }
    ]
  });







}

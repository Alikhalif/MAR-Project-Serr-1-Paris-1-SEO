import { Component, inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
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
  selector: 'app-serrurier-pas-cher',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './serrurier-pas-cher.component.html',
  styleUrl: './serrurier-pas-cher.component.scss'
})
export class SerrurierPasCherComponent implements  OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  platformId = inject(PLATFORM_ID);
  site: SiteConfig = inject(SITE_CONFIG_TOKEN);

  ngOnInit(): void {

    this.title.setTitle(
      'Serrurier Pas Cher Paris 1 (75001) | Prix Justes & Intervention 24h/24'
    );

    this.meta.addTags([
      {
        name: 'description',
        content: 'Serrurier pas cher à Paris 1 : devis gratuit, tarifs transparents, intervention rapide 24h/24, sans surprise ni frais cachés.'
      },
      {
        name: 'keywords',
        content: 'serrurier pas cher Paris 1, serrurier économique 75001, serrurier prix bas Paris, dépannage serrurier pas cher'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Serrurier Paris 1' },

      /* Open Graph */
      {
        property: 'og:title',
        content: 'Serrurier Pas Cher Paris 1 – Tarifs Justes & Service Garanti'
      },
      {
        property: 'og:description',
        content: 'Besoin d’un serrurier pas cher à Paris 1 ? Prix clairs, devis gratuit, disponibilité 24h/24.'
      },
      {
        property: 'og:type',
        content: 'website'
      }
    ]);

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
            "name": "Serrurier Pas Cher Paris 1",
            "telephone": "01 23 45 67 89",
            "image": "https://i.ibb.co/L3zPnQb/serrurier-pas-cher.png",
            "priceRange": "€",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Paris",
              "postalCode": "75001",
              "addressCountry": "FR"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Paris 1"
            },
            "openingHours": "Mo-Su 00:00-23:59",
            "url": "https://www.tonsite.fr"
          },

          {
            "@type": "Service",
            "@id": "https://www.tonsite.fr/serrurier-pas-cher-paris-1#service",
            "serviceType": "Serrurier pas cher",
            "provider": {
              "@id": "https://www.tonsite.fr/#locksmith"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Paris 1"
            },
            "description": "Serrurier pas cher à Paris 1 avec devis transparent, tarifs justes et interventions garanties.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock"
            }
          },

          {
            "@type": "FAQPage",
            "@id": "https://www.tonsite.fr/serrurier-pas-cher-paris-1#faq",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Comment maintenez-vous des prix compétitifs ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Grâce à une organisation optimisée, des déplacements rapides et des achats groupés de pièces professionnelles."
                }
              },
              {
                "@type": "Question",
                "name": "Y a-t-il des majorations la nuit ou le week-end ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non, le forfait urgence est identique 24h/24 et 7j/7, sans surprise."
                }
              },
              {
                "@type": "Question",
                "name": "Puis-je fournir mes propres pièces ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non, pour garantir la sécurité, la compatibilité et la garantie des interventions."
                }
              },
              {
                "@type": "Question",
                "name": "La facture peut-elle baisser si l’intervention est plus simple ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, si le travail est plus rapide que prévu, la facture est ajustée à la baisse."
                }
              },
              {
                "@type": "Question",
                "name": "Proposez-vous des garanties malgré des prix bas ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, toutes nos interventions et pièces sont garanties, généralement 2 ans."
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
    title: 'Serrurier Pas Cher à Paris 1',
    subtitle: 'Des Tarifs Justes pour un Service de Qualité',
    description: 'Vous cherchez un serrurier pas cher à Paris 1 ? Découvrez notre équilibre entre prix juste et expertise fiable. Devis transparent, pas de surprise, et des garanties solides.',
    ctaText: 'Obtenir un devis gratuit',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://i.ibb.co/L3zPnQb/serrurier-pas-cher.png'
  });

  whyChooseData = signal({
    title: 'Pourquoi choisir un vrai professionnel est plus économique qu\'un "pas cher" risqué ?',
    description: 'Le tarif le plus bas cache souvent des surprises. La vraie économie, c\'est un travail bien fait du premier coup, sans frais cachés ni rappels coûteux.',
    benefits: [
      {
        icon: '📋',
        title: 'Devis ferme et transparent',
        description: 'Prix total communiqué et accepté AVANT les travaux. Pas de majoration surprise "c\'était plus compliqué".'
      },
      {
        icon: '🔧',
        title: 'Pièces de qualité avec garantie',
        description: 'Nous utilisons des pièces fiables et garanties, pour une réparation durable. Évitez les cylindres bas de gamme qui cassent en 6 mois.'
      },
      {
        icon: '⚖️',
        title: 'Équité et ajustement à la baisse',
        description: 'Si l\'intervention est plus simple que prévu, nous ajustons la facture en conséquence. Nous facturons le travail réel, pas l\'estimation.',
      },
      {
        icon: '👨‍🔧',
        title: 'Artisans qualifiés et efficaces',
        description: 'Nos équipes salariées résolvent le problème correctement dès la première intervention, évitant les aggravation de panne coûteuses.'
      }
    ]
  });

  commitmentsData = signal({
    title: 'Nos engagements pour un service fiable et à prix juste à Paris 1',
    subtitle: 'Notre philosophie : la transparence tarifaire est la base de la confiance',
    commitments: [
      {
        icon: '💰',
        title: 'Prix clair avant toute intervention',
        description: 'Devis gratuit et détaillé par téléphone ou sur place après diagnostic. Vous validez le montant total avant que nous commencions.'
      },
      {
        icon: '🔄',
        title: 'Modèle économique optimisé',
        description: 'Artisans salariés, gestion des déplacements et achats groupés de pièces pour maintenir des tarifs compétitifs sans sacrifier la qualité.'
      },
      {
        icon: '🔍',
        title: 'Choix maîtrisé des pièces',
        description: 'Nous vous proposons un choix de pièces (standard vs. haute sécurité) avec leurs prix. Vous décidez en connaissance de cause.'
      },
      {
        icon: '📜',
        title: 'Garantie incluse malgré le prix',
        description: 'Toutes nos interventions et pièces neuves sont garanties (souvent 2 ans pour la main d\'œuvre). Un bon prix ne rime pas avec absence de protection.'
      },
      {
        icon: '⚡',
        title: 'Urgence 24h/24 à forfait connu',
        description: 'Forfait d\'urgence unique et communiqué à l\'avance, identique toute la semaine. Pas de majoration surprise la nuit ou le week-end.'
      }
    ]
  });

  servicesData = signal({
    title: 'Nos services à tarifs transparents pour Paris 1',
    subtitle: 'Des prestations courantes avec une tarification lisible et équitable',
    services: [
      {
        icon: '🚪',
        title: 'Ouverture de porte en urgence',
        description: 'Porte claquée ? Intervention rapide avec techniques non destructives dans la mesure du possible. Forfait communiqué à l\'avance.',
        image: 'https://images.unsplash.com/photo-1582719201952-3f0ce5badca8?w=600&q=80',
        price: 'Forfait dès 89€'
      },
      {
        icon: '🔑',
        title: 'Remplacement de cylindre',
        description: 'Pose d\'un nouveau barillet. Choix entre cylindre standard ou haute sécurité (A2P). Prix de la pièce + main d\'œuvre forfaitaire.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        price: 'À partir de 65€ (pose incluse)*'
      },
      {
        icon: '🔧',
        title: 'Dépannage & réparation de serrure',
        description: 'Graissage, réglage ou réparation de votre mécanisme existant. Tarif à l\'heure si simple, devis pour une panne complexe.',
        image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
        price: 'À partir de 75€'
      },
      {
        icon: '🔩',
        title: 'Devis & diagnostic complet',
        description: 'Un expert se déplace, identifie la panne et vous remet un devis détaillé et ferme pour la réparation. Service indispensable.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
        price: 'Gratuit'
      }
    ],
    ctaText: 'Demander mon devis gratuit',
    ctaPhone: '01 23 45 67 89',
    note: '*Prix indicatif pour un cylindre standard. Varie selon le modèle choisi.'
  });

  pricingData = signal({
    title: 'Transparence tarifaire : comprendre le coût d\'une intervention à Paris 1',
    description: 'Nos prix sont structurés pour être clairs. Voici ce qui compose votre facture finale, toujours validée par vos soins au préalable.',
    highlight: 'Facturation lisible = Forfait déplacement + Main d\'œuvre + Prix des pièces (choisies par vous).',
    features: [
      'Forfait de déplacement/intervention (identique 7j/7)',
      'Main d\'œuvre facturée au temps passé pour le travail réel',
      'Pièces de rechange au prix annoncé, avec choix de gamme',
      'Aucun coût caché, devis signé = prix final'
    ]
  });

  conclusionData = signal({
    title: 'Votre serrurier de confiance, au juste prix, à Paris 1',
    description: 'Nous prouvons chaque jour qu\'il est possible d\'allier tarifs justes, transparence absolue et expertise professionnelle. Pour une intervention fiable et une facture claire, faites le choix de la confiance plutôt que du prix le plus bas affiché.',
    ctaText: 'Choisir la transparence',
    ctaPhone: '01 23 45 67 89',
    ctaDescription: 'Devis gratuit et sans engagement dans Paris 1 !'
  });

  faqData = signal({
    title: 'FAQ : Serrurier Pas Cher Paris 1',
    questions: [
      {
        question: 'Comment maintenez-vous des prix compétitifs ?',
        answer: 'Notre compétitivité vient d\'une gestion optimisée : artisans salariés et efficaces, déplacements rapides dans Paris 1, et achats groupés de pièces de qualité. Nous ne pratiquons pas le "low cost" sur la qualité, mais optimisons notre organisation pour proposer un juste prix pour un vrai service professionnel.'
      },
      {
        question: 'Y a-t-il des majorations la nuit ou le week-end ?',
        answer: 'Nous appliquons un forfait d\'urgence 24h/24 et 7j/7 qui est identique toute la semaine. Il est communiqué à l\'avance et reflète notre disponibilité permanente. Il n\'y a pas de "double tarif" ou de majoration surprise le dimanche à 3h du matin. La transparence vaut aussi pour les horaires.'
      },
      {
        question: 'Puis-je fournir mes propres pièces pour réduire la facture ?',
        answer: 'Par mesure de responsabilité, nous n\'installons pas de pièces fournies par le client. Nous devons garantir la qualité, la compatibilité et la sécurité de chaque pièce posée. Notre garantie ne couvrirait pas une pièce d\'origine inconnue. En revanche, nous vous proposons un choix de pièces à différents prix.'
      },
      {
        question: 'Que se passe-t-il si la réparation est plus simple que prévu ?',
        answer: 'Notre devis initial est une estimation. Si l\'intervention s\'avère plus simple et plus rapide que prévu, nous ajustons la facture à la baisse en conséquence et nous vous expliquons la différence. Notre objectif est l\'équité, pas de facturer un travail non réalisé.'
      },
      {
        question: 'Offrez-vous des garanties malgré vos tarifs compétitifs ?',
        answer: 'Absolument. La garantie est pour nous non négociable. Toutes nos interventions et les pièces neuves que nous posons sont garanties. La durée (souvent 2 ans pour la main d\'œuvre) est précisée sur votre facture. Un bon prix ne doit jamais signifier l\'absence de protection pour vous, bien au contraire.'
      }
    ]
  });
}

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

@Component({
  selector: 'app-ouverture-porte-claquee',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './ouverture-porte-claquee.component.html',
  styleUrl: './ouverture-porte-claquee.component.scss'
})
export class OuverturePorteClaqueeComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  platformId = inject(PLATFORM_ID);

  ngOnInit(): void {

    /* =========================
       TITLE
    ========================== */
    this.title.setTitle(
      'Ouverture Porte Claquée Paris 1 (75001) | Dépannage Serrurier Urgent'
    );

    /* =========================
       META TAGS
    ========================== */
    this.meta.addTags([
      {
        name: 'description',
        content: 'Ouverture de porte claquée à Paris 1 (75001). Dépannage express 24h/24 et 7j/7, intervention rapide sans dégâts, devis clair et transparent.'
      },
      {
        name: 'keywords',
        content: 'ouverture porte claquée Paris 1, porte claquée avec clés à l’intérieur 75001, serrurier urgence Paris 1, dépannage porte claquée Paris'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Serrurier Paris 1' },

      /* Canonical */
      {
        rel: 'canonical',
        href: 'https://www.tonsite.fr/ouverture-porte-claquee-paris-1'
      },

      /* Open Graph */
      {
        property: 'og:title',
        content: 'Ouverture de Porte Claquée à Paris 1 – Dépannage Express'
      },
      {
        property: 'og:description',
        content: 'Intervention rapide pour porte claquée à Paris 1. Service 24h/24 et 7j/7, ouverture sans dégâts, devis transparent.'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: 'https://www.tonsite.fr/ouverture-porte-claquee-paris-1'
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
        "@id": "https://www.tonsite.fr/ouverture-porte-claquee-paris-1#service",
        "name": "Ouverture de porte claquée à Paris 1",
        "serviceType": "Déblocage et ouverture de porte claquée",
        "provider": {
          "@id": "https://www.tonsite.fr/#locksmith"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Paris 1"
        },
        "description": "Ouverture de porte claquée à Paris 1 : intervention express, 24h/24 et 7j/7, techniques de crochetage sans dégâts et devis transparent.",
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
        "@id": "https://www.tonsite.fr/ouverture-porte-claquee-paris-1#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "En combien de temps ouvrez-vous une porte claquée ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Une fois sur place, l'ouverture prend généralement 5 à 20 minutes selon la complexité. Le délai total inclut le trajet jusqu'à votre adresse (<30 min)."
            }
          },
          {
            "@type": "Question",
            "name": "Pouvez-vous ouvrir une porte blindée qui a claqué ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, la plupart des portes blindées peuvent être ouvertes sans perçage, sauf cylindres anti-crochetage spécifiques, que nous signalons avant intervention."
            }
          },
          {
            "@type": "Question",
            "name": "Ai-je besoin de prouver que j'habite bien les lieux ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, pièce d'identité et justificatif de domicile sont demandés avant l'intervention pour sécuriser votre propriété."
            }
          },
          {
            "@type": "Question",
            "name": "Que se passe-t-il si ma serrure est cassée ou très usée ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Si la serrure est défectueuse, nous vous proposons soit une ouverture douce, soit un remplacement du cylindre avec devis clair avant toute action."
            }
          },
          {
            "@type": "Question",
            "name": "Le forfait est-il le même de jour comme de nuit, en semaine ou le week-end ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, forfait d'urgence 24h/24 identique, communiqué clairement dès l'appel, sans majoration surprise."
            }
          }
        ]
      }
    ]
  };

  heroData = signal({
    title: 'Ouverture de Porte Claquer à Paris 1',
    subtitle: 'Votre Serrurier en Urgence',
    description: 'Porte claquée avec les clés à l\'intérieur à Paris 1 ? Notre ouverture express vous dépanne ! Un coup de vent soudain dans le couloir, une porte qui se referme trop vite après une sortie précipitée… Notre entreprise de serrurerie parisienne est spécialisée dans l\'ouverture de porte claquée à Paris 1. Nous intervenons 24h/24 et 7j/7 pour ce type de dépannage.',
    ctaText: 'Votre porte s\'est claquée avec les clés à l\'intérieur dans Paris 1 ? Appelez-nous',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://i.ibb.co/6RRL50hG/ouverture-porte-claquee.jpg'
  });

  whyChooseData = signal({
      title: 'Pourquoi ne pas essayer d\'ouvrir soi-même une porte claquée ?',
      description: 'La tentation est grande de chercher une solution par ses propres moyens, cependant, ces tentatives amateurs présentent des risques majeurs.',
      benefits: [
          {
              icon: '❌',
              title: 'Éviter les dégâts irréversibles',
              description: 'Endommagement définitif du cylindre, dégâts sur la porte ou le bâti, rendant la porte inutilisable.'
          },
          {
              icon: '⚠️',
              title: 'Prévenir l\'aggravation',
              description: 'Risque de pousser les clés plus loin ou casser un élément mécanique, compliquant le travail du professionnel.'
          },
          {
              icon: '⏰',
              title: 'Gagner du temps précieux',
              description: 'Un serrurier expérimenté peut ouvrir en quelques minutes, contrairement aux tentatives amateurs longues et souvent infructueuses.'
          },
          {
              icon: '🔧',
              title: 'Bénéficier d\'une expertise professionnelle',
              description: 'Techniques préservant votre matériel et votre sécurité, résolution propre et sans surprise.'
          }
      ]
  });

  commitmentsData = signal({
      title: 'Notre méthode d\'ouverture pour porte claquée : rapide, propre et efficace',
      subtitle: 'Lorsque vous nous appelez pour une porte claquée avec serrure en bon état, nous mettons en œuvre des techniques de précision',
      commitments: [
          {
              icon: '🔐',
              title: 'Ouverture par crochetage',
              description: 'Technique non destructive manipulant les goupilles à l\'intérieur du cylindre sans laisser de trace.'
          },
          {
              icon: '🎯',
              title: 'Passe-partout techniques',
              description: 'Outils adaptés pour les serrures courantes en copropriété, permettant une ouverture encore plus rapide.'
          },
          {
              icon: '⚡',
              title: 'Intervention en moins de 30 minutes',
              description: 'Objectif d\'être présent chez vous en moins de 30 minutes après votre appel.'
          },
          {
              icon: '🛡️',
              title: 'Vérification de l\'état de la serrure',
              description: 'Test de votre serrure après ouverture pour s\'assurer qu\'elle n\'a pas été fragilisée.'
          },
          {
              icon: '💰',
              title: 'Devis transparent avant intervention',
              description: 'Forfait clair et ferme communiqué par téléphone, couvrant le déplacement et l\'ouverture.'
          }
      ]
  });

  servicesData = signal({
      title: 'Scénarios courants d\'ouverture de porte claquée dans le 1er arrondissement',
      subtitle: 'Notre service est adapté à toutes les situations où les clés sont restées à l\'intérieur',
      services: [
          {
              icon: '🏠',
              title: 'Porte d\'entrée d\'appartement claquée',
              description: 'En sortant pour aller aux poubelles, chercher un colis ou accompagner un invité.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 89€'
          },
          {
              icon: '🏢',
              title: 'Porte de bureau ou de commerce fermée',
              description: 'Avec les clés sur le bureau à l\'intérieur.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 99€'
          },
          {
              icon: '🚪',
              title: 'Porte de service ou de cave accidentellement verrouillée',
              description: 'Situation courante dans les immeubles parisiens.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 85€'
          },
          {
              icon: '👵',
              title: 'Porte claquée avec personne vulnérable à l\'intérieur',
              description: 'Enfant, personne âgée, nécessitant une intervention urgente.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 89€'
          },
          {
              icon: '🛡️',
              title: 'Porte blindée qui a claqué',
              description: 'Ouverture sans forçage même sur ces modèles sécurisés.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 120€'
          },
          {
              icon: '🔧',
              title: 'Porte avec serrure multipoint bloquée',
              description: 'Serrure 3 points ou multipoint verrouillée par inadvertance.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 110€'
          }
      ],
      ctaText: 'Appelez pour une ouverture express',
      ctaPhone: '01 23 45 67 89'
  });

  pricingData = signal({
      title: 'Tarif pour l\'ouverture d\'une porte claquée à Paris 1',
      description: 'Pour ce service très standardisé, nous appliquons une tarification claire et forfaitaire comprenant le déplacement et l\'ouverture par méthode non destructive.',
      highlight: 'Simplicité et transparence : Vous payez le prix convenu pour le service rendu.',
      features: [
          'Forfait unique déplacement + ouverture',
          'Méthodes non destructives privilégiées',
          'Prix communiqué et accepté avant intervention',
          'Second devis séparé pour travaux supplémentaires',
          'Aucun coût caché'
      ]
  });

  conclusionData = signal({
      title: 'Une porte claquée n\'est qu\'un contretemps avec le bon artisan',
      description: 'Un instant d\'inattention ne doit pas se transformer en soirée gâchée ou en nuit dehors. Notre rôle en tant que serrurier expert à Paris 1 est de résoudre ce problème quotidien avec la plus grande efficacité et discrétion. Spécialistes de l\'ouverture de porte claquée, nous maîtrisons les techniques qui préservent votre porte et votre budget.',
      ctaText: 'Ne perdez pas de temps et d\'énergie devant votre porte',
      ctaPhone: '01 23 45 67 89',
      ctaDescription: 'Notre solution est rapide, propre et fiable'
  });

  faqData = signal({
      title: 'FAQ : Ouverture Porte Claquer Paris 1',
      questions: [
          {
              question: 'En combien de temps ouvrez-vous une porte claquée ?',
              answer: 'Une fois notre artisan sur place, l\'ouverture d\'une porte claquée standard prend généralement entre 5 et 20 minutes grâce aux techniques de crochetage. Le délai total dépend surtout de notre temps de trajet jusqu\'à votre adresse dans Paris 1, que nous minimisons (objectif <30 min).'
          },
          {
              question: 'Pouvez-vous ouvrir une porte blindée qui a claqué ?',
              answer: 'Oui, dans la grande majorité des cas. Les portes blindées sont conçues pour résister au forçage, pas nécessairement aux techniques de crochetage de précision maîtrisées par un professionnel. Nous pouvons les ouvrir sans perçage et sans abîmer le blindage, à moins qu\'elles ne soient équipées de cylindres anti-crochetage spécifiques (ce qui est rare). Nous vous l\'indiquerons lors du diagnostic.'
          },
          {
              question: 'Ai-je besoin de prouver que j\'habite bien les lieux ?',
              answer: 'Oui, c\'est une mesure de sécurité et de légalité standard. Notre artisan vous demandera une pièce d\'identité et un justificatif de domicile (facture d\'énergie, quittance de loyer, taxe foncière) avant d\'intervenir. Cela protège votre propriété.'
          },
          {
              question: 'Que se passe-t-il si ma serrure est cassée ou très usée ?',
              answer: 'Si la serrure est déjà défectueuse (clé qui tournait difficilement avant l\'incident), le crochetage peut être impossible ou risquer de la casser. Dans ce cas, nous vous en informons avant de commencer. Nous pouvons alors soit tenter une ouverture douce, soit procéder à un remplacement du cylindre, ce qui fera l\'objet d\'un devis supplémentaire clair et accepté par vous avant toute action.'
          },
          {
              question: 'Le forfait est-il le même de jour comme de nuit, en semaine ou le week-end ?',
              answer: 'Nous appliquons un forfait d\'urgence 24h/24 qui couvre notre disponibilité permanente. Ce forfait, identique la nuit, le week-end et les jours fériés, vous est toujours communiqué avec transparence dès votre appel. Aucune majoration surprise.'
          }
      ]
  });
}

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
  selector: 'app-serrurier-urgence-24',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './serrurier-urgence-24.component.html',
  styleUrl: './serrurier-urgence-24.component.scss'
})
export class SerrurierUrgence24Component implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.title.setTitle(
      'Serrurier Urgence 24/24 Paris 1 | Intervention Express'
    );

    /* =========================
       META TAGS
    ========================== */
    this.meta.addTags([
      {
        name: 'description',
        content: 'Bloqué(e) à toute heure dans Paris 1 ? Notre serrurier urgence 24/24 intervient en moins de 30 minutes pour ouvrir votre porte et sécuriser votre domicile.'
      },
      {
        name: 'keywords',
        content: 'serrurier urgence Paris 1, serrurier 24/24, intervention express Paris 1, porte bloquée, perte de clés'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Serrurier Paris 1' },

      /* Canonical */
      {
        rel: 'canonical',
        href: 'https://www.tonsite.fr/serrurier-urgence-24-24-paris-1'
      },

      /* Open Graph */
      {
        property: 'og:title',
        content: 'Serrurier Urgence 24/24 Paris 1 – Intervention Express'
      },
      {
        property: 'og:description',
        content: 'Bloqué(e) dans Paris 1 ? Intervention rapide en moins de 30 min, jour et nuit. Sécurisation garantie.'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: 'https://www.tonsite.fr/serrurier-urgence-24-24-paris-1'
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
        "@id": "https://www.tonsite.fr/serrurier-urgence-24-24-paris-1#service",
        "name": "Serrurier Urgence 24/24 Paris 1",
        "serviceType": "Dépannage immédiat et sécurisation",
        "provider": {
          "@id": "https://www.tonsite.fr/#locksmith"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Paris 1"
        },
        "description": "Bloqué(e) à toute heure dans Paris 1 ? Intervention rapide de serrurier urgence 24/24 pour ouvrir votre porte et sécuriser votre domicile.",
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
        "@id": "https://www.tonsite.fr/serrurier-urgence-24-24-paris-1#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Êtes-vous vraiment joignable et intervenant 24h/24, même les week-ends et jours fériés ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, absolument. Notre centrale téléphonique et nos équipes d'intervention sont actives 7j/7, 24h/24, 365 jours par an, y compris dimanches et jours fériés."
            }
          },
          {
            "@type": "Question",
            "name": "Quel est votre délai d'intervention moyen pour une urgence dans Paris 1 ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nous intervenons généralement en moins de 30 minutes après votre appel confirmé. Nos artisans sont répartis en astreinte dans différents secteurs de Paris pour un délai optimal."
            }
          },
          {
            "@type": "Question",
            "name": "Les interventions de nuit sont-elles plus chères ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Notre tarification est transparente. Nous appliquons un forfait d'urgence 24h/24, communiqué clairement lors du devis téléphonique, sans majoration cachée."
            }
          },
          {
            "@type": "Question",
            "name": "Pouvez-vous intervenir si je n'ai plus du tout mes clés (perte/vol) ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, nous ouvrons votre porte sans clé par techniques non destructives, puis remplaçons immédiatement le cylindre pour garantir votre sécurité."
            }
          },
          {
            "@type": "Question",
            "name": "Proposez-vous une garantie sur vos interventions en urgence ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui, toutes nos pièces de remplacement et la main-d'œuvre sont garanties. Les détails sont précisés sur la facture remise après intervention."
            }
          }
        ]
      }
    ]
  };


  heroData = signal({
    title: 'Serrurier Urgence 24/24 Paris 1',
    subtitle: 'Votre Solution Immédiate, Jour et Nuit',
    description: 'Bloqué(e) à toute heure dans le 1er ? Notre <strong>serrurier urgence 24/24 Paris 1</strong> intervient en 30 min max ! <br>Imaginez cette scène : il est 3h du matin, vous rentrez chez vous après une longue journée et votre clé se casse net dans la serrure de votre appartement du 1er arrondissement.',
    ctaText: 'Appelez-nous immédiatement, de jour comme de nuit',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80'
  });

  whyChooseData = signal({
      title: 'Pourquoi une permanence 24h/24 est indispensable pour un dépannage serrurerie à Paris ?',
      description: 'La sécurité de votre domicile ou de votre local professionnel ne connaît pas d\'horaire. Une porte qui refuse de s\'ouvrir ou une clé perdue à minuit représente non seulement un inconfort majeur, mais aussi une vulnérabilité immédiate.',
      benefits: [
          {
              icon: '⚡',
              title: 'Une solution immédiate, sans attente',
              description: 'Pas besoin de patienter jusqu\'au lendemain matin, exposé(e) et stressé(e).'
          },
          {
              icon: '🛡️',
              title: 'La sécurisation rapide de votre bien',
              description: 'En cas de perte de clés ou de tentative d\'effraction, chaque minute compte.'
          },
          {
              icon: '🔧',
              title: 'Une intervention professionnelle, même de nuit',
              description: 'Évitez les bricolages dangereux qui pourraient endommager définitivement votre porte.'
          },
          {
              icon: '✓',
              title: 'Un retour à la normale express',
              description: 'Reprenez le cours de votre vie ou de votre activité sans délai.'
          }
      ]
  });

  commitmentsData = signal({
      title: 'Notre engagement d\'excellence pour vos urgences à toute heure',
      subtitle: 'Notre métier est de répondre à la détresse. Lorsque vous composez notre numéro, vous activez une chaîne d\'intervention optimisée',
      commitments: [
          {
              icon: '📞',
              title: 'Permanence téléphonique 24h/24 et 7j/7',
              description: 'Un conseiller vous écoute, évalue votre situation et déclenche l\'intervention.'
          },
          {
              icon: '⚡',
              title: 'Intervention hyper-rapide',
              description: 'Objectif moins de 30 minutes de délai d\'arrivée dans Paris 1 et le cœur de Paris.'
          },
          {
              icon: '🛠️',
              title: 'Expertise technique de pointe',
              description: 'Formés aux dernières méthodes d\'ouverture non destructives pour préserver votre serrure et votre porte.'
          },
          {
              icon: '🔐',
              title: 'Sécurité renforcée',
              description: 'Nous utilisons des cylindres et serrures de haute sécurité (normes A2P/BMP) pour vous protéger durablement.'
          },
          {
              icon: '💰',
              title: 'Transparence totale',
              description: 'Un devis détaillé et ferme vous est communiqué et accepté avant tout travail. Aucun coût caché.'
          }
      ]
  });

  servicesData = signal({
      title: 'Scénarios d\'urgence courants : notre expertise à votre service à Paris 1',
      subtitle: 'Notre service de dépannage urgent 24h/24 couvre l\'intégralité des pannes qui vous privent d\'accès ou compromettent votre sécurité',
      services: [
          {
              icon: '🚪',
              title: 'Ouverture de porte suite à un claquage',
              description: 'La porte s\'est refermée, les clés sont à l\'intérieur.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          },
          {
              icon: '🔑',
              title: 'Extraction de clé cassée',
              description: 'Un fragment de clé est coincé dans le barillet.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          },
          {
              icon: '🔄',
              title: 'Serrure ou cylindre bloqué',
              description: 'La clé tourne dans le vide ou refuse de tourner.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          },
          {
              icon: '❌',
              title: 'Perte ou vol de l\'ensemble des clés',
              description: 'Nécessite un remplacement d\'urgence du cylindre pour retrouver une sécurité totale.',
              image: 'https://images.unsplash.com/photo-1582719201952-3f0ce5badca8?w=600&q=80',
              price: 'Sur devis'
          },
          {
              icon: '🛡️',
              title: 'Dépannage sur porte blindée',
              description: 'Ouverture et diagnostic technique spécifique sur ces équipements.',
              image: 'https://images.unsplash.com/photo-1582719201952-3f0ce5badca8?w=600&q=80',
              price: 'Sur devis'
          },
          {
              icon: '🚨',
              title: 'Mise en sécurité après tentative d\'effraction',
              description: 'Réparation et renforcement express.',
              image: 'https://images.unsplash.com/photo-1582719201952-3f0ce5badca8?w=600&q=80',
              price: 'Sur devis'
          }
      ],
      ctaText: 'Appelez pour une intervention immédiate',
      ctaPhone: '01 23 45 67 89'
  });

  pricingData = signal({
      title: 'Tarification claire et juste pour une urgence serrurerie 24h/24',
      description: 'Le coût d\'une intervention de serrurier en urgence à Paris 1 comprend un forfait de déplacement (qui couvre la disponibilité permanente et la réactivité) et le coût de la main d\'œuvre pour l\'ouverture. Le prix de toute pièce de remplacement (cylindre, serrure) vous est toujours soumis pour acceptation préalable.',
      highlight: 'Transparence absolue : vous connaissez le montant total avant que les travaux ne commencent.',
      features: [
          'Forfait de déplacement inclus',
          'Main d\'œuvre professionnelle',
          'Pièces de haute sécurité (A2P/BMP)',
          'Pas de coût caché',
          'Devis accepté avant travaux'
      ]
  });

  conclusionData = signal({
      title: 'Votre partenaire sécurité, jour et nuit, dans le 1er arrondissement',
      description: 'Les urgences de serrurerie ne choisissent pas leur moment. Notre raison d\'être est d\'être présent, compétent et réactif, quelle que soit l\'heure indiquée sur le cadran. En faisant appel à notre service de serrurier urgence 24/24 Paris 1, vous choisissez la garantie d\'une intervention rapide, professionnelle et transparente.',
      ctaText: 'Ne restez pas seul(e) face à la panne. Appelez-nous immédiatement',
      ctaPhone: '01 23 45 67 89',
      ctaDescription: 'Intervention d\'urgence dans les 30 minutes à Paris 1 !'
  });

  faqData = signal({
      title: 'FAQ : Serrurier Urgence 24/24 Paris 1',
      questions: [
          {
              question: 'Êtes-vous vraiment joignable et intervenant 24h/24, même les week-ends et jours fériés ?',
              answer: 'Oui, absolument. Notre centrale téléphonique et nos équipes d\'intervention sont actives 7j/7, 24h/24, 365 jours par an, y compris les dimanches, samedis et tous les jours fériés. L\'urgence ne prend jamais de vacances, et nous non plus.'
          },
          {
              question: 'Quel est votre délai d\'intervention moyen pour une urgence dans Paris 1 ?',
              answer: 'Nous nous engageons sur un délai d\'intervention moyen de moins de 30 minutes après votre appel confirmé et selon la circulation. Nos artisans sont répartis en astreinte dans différents secteurs de Paris pour optimiser ce temps de réponse.'
          },
          {
              question: 'Les interventions de nuit sont-elles plus chères ?',
              answer: 'Notre tarification est transparente et constante. Nous appliquons un forfait d\'urgence 24h/24 qui couvre notre disponibilité permanente. Ce forfait vous est toujours communiqué clairement au moment du devis téléphonique, qu\'il soit 15h ou 3h du matin. Aucune majoration surprise de dernière minute.'
          },
          {
              question: 'Pouvez-vous intervenir si je n\'ai plus du tout mes clés (perte/vol) ?',
              answer: 'Oui, c\'est même une de nos spécialités. Nous intervenons pour ouvrir la porte sans clé (par techniques non destructives), puis nous remplaçons immédiatement le cylindre (barillet). Cela vous garantit que les anciennes clés ne fonctionnent plus et que votre sécurité est rétablie sur-le-champ.'
          },
          {
              question: 'Proposez-vous une garantie sur vos interventions en urgence ?',
              answer: 'Tout à fait. Toutes nos pièces de remplacement sont garanties (durée variable selon la pièce). La main d\'œuvre de notre intervention est également couverte par une garantie. Les détails vous sont remis sur la facture, qui sert de justificatif.'
          }
      ]
  });
}


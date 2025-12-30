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
  selector: 'app-ouverture-porte-blindee',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './ouverture-porte-blindee.component.html',
  styleUrl: './ouverture-porte-blindee.component.scss'
})
export class OuverturePorteBlindeeComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  platformId = inject(PLATFORM_ID);

  ngOnInit(): void {

    /* =========================
       TITLE
    ========================== */
    this.title.setTitle(
      'Ouverture Porte Blindée Paris 1 (75001) | Dépannage Serrurier Expert'
    );

    /* =========================
       META TAGS
    ========================== */
    this.meta.addTags([
      {
        name: 'description',
        content: 'Ouverture de porte blindée à Paris 1 (75001). Dépannage rapide, intervention experte 24h/24, ouverture sans dégâts, cylindre testé ou remplacé si nécessaire.'
      },
      {
        name: 'keywords',
        content: 'ouverture porte blindée Paris 1, serrurier porte blindée 75001, dépanneur porte haute sécurité Paris, serrurier urgence Paris'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Serrurier Paris 1' },

      /* Canonical */
      {
        rel: 'canonical',
        href: 'https://www.tonsite.fr/ouverture-porte-blindee-paris-1'
      },

      /* Open Graph */
      {
        property: 'og:title',
        content: 'Ouverture de Porte Blindée à Paris 1 – Dépannage Expert'
      },
      {
        property: 'og:description',
        content: 'Déblocage rapide de porte blindée à Paris 1. Intervention experte 24h/24, méthodes non destructives et cylindre testé ou remplacé.'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: 'https://www.tonsite.fr/ouverture-porte-blindee-paris-1'
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
        "@id": "https://www.tonsite.fr/ouverture-porte-blindee-paris-1#service",
        "name": "Ouverture de porte blindée à Paris 1",
        "serviceType": "Déblocage et ouverture de porte blindée",
        "provider": {
          "@id": "https://www.tonsite.fr/#locksmith"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Paris 1"
        },
        "description": "Ouverture de porte blindée à Paris 1 : intervention experte, non destructive, cylindre testé ou remplacé si nécessaire, disponibilité 24h/24.",
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
        "@id": "https://www.tonsite.fr/ouverture-porte-blindee-paris-1#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Pouvez-vous ouvrir n'importe quelle marque de porte blindée sans la percer ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Nous privilégions toujours l'ouverture sans perçage. Pour la plupart des marques courantes, nous réussissons par crochetage ou manipulation dans plus de 80% des cas. Certains cylindres haute sécurité peuvent nécessiter un perçage minimal, expliqué avant intervention."
            }
          },
          {
            "@type": "Question",
            "name": "L'ouverture va-t-elle endommager ma porte et annuler sa garantie ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Notre objectif est de préserver l'intégrité de la porte. Manipulation sans dégâts visibles, perçage minimal seulement sur le cylindre si nécessaire. La garantie sur le vantail et cadre reste intacte."
            }
          },
          {
            "@type": "Question",
            "name": "Combien de temps prend une ouverture de porte blindée ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "De 15 minutes pour une porte claquée à plus d'une heure pour un mécanisme complexe. Délai d'arrivée garanti <30 minutes dans Paris 1."
            }
          },
          {
            "@type": "Question",
            "name": "Dois-je changer mon cylindre après une ouverture ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fortement recommandé, surtout après perte de clés ou perçage. Le cylindre est testé et remplacé si nécessaire par un modèle A2P."
            }
          },
          {
            "@type": "Question",
            "name": "Pourquoi l'intervention sur une porte blindée est-elle plus chère que sur une porte standard ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "En raison de l'expertise technique, complexité, durée, utilisation d'outils spécialisés et responsabilité liée à la manipulation d'une porte haute sécurité."
            }
          }
        ]
      }
    ]
  };



  heroData = signal({
    title: 'Ouverture Porte Blindée à Paris 1',
    subtitle: 'Expertise Haute Sécurité 24h/24',
    description: 'Bloqué(e) devant votre <strong>porte blindée dans Paris 1 ?</strong> <br>Notre expertise vous ouvre sans l\'endommager, vous avez investi dans une porte blindée pour la sécurité maximale de votre appartement ou bureau dans le 1er arrondissement.',
    ctaText: 'Votre porte blindée est bloquée dans Paris 1 ? Appelez nos experts',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=1600&q=80'
  });

whyChooseData = signal({
    title: 'Pourquoi l\'ouverture d\'une porte blindée requiert un expert spécifique à Paris 1 ?',
    description: 'Une porte blindée n\'est pas une simple porte. Son ouverture en cas de problème est un défi technique qui exclut toute tentative amateur ou le recours à un serrurier généraliste non formé.',
    benefits: [
        {
            icon: '❌',
            title: 'Éviter les dégâts irréversibles',
            description: 'Préserver le blindage et éviter de rendre la porte inutilisable ou d\'annuler sa certification de sécurité.'
        },
        {
            icon: '💰',
            title: 'Protéger votre investissement',
            description: 'Éviter la destruction du mécanisme multipoints (coût de remplacement très élevé).'
        },
        {
            icon: '🛡️',
            title: 'Maintenir la garantie du fabricant',
            description: 'Une intervention par un professionnel habilité préserve la garantie de votre porte.'
        },
        {
            icon: '🔧',
            title: 'Diagnostic expert',
            description: 'Identifier la cause exacte de la panne (cylindre, crémone, clé) pour appliquer la bonne solution.'
        }
    ]
});

commitmentsData = signal({
    title: 'Notre méthodologie d\'ouverture pour porte blindée : précision et préservation',
    subtitle: 'Notre intervention sur une porte blindée bloquée est méthodique et adaptée à chaque modèle',
    commitments: [
        {
            icon: '🔍',
            title: 'Diagnostic expert',
            description: 'Identification de la marque, modèle et nature exacte du blocage.'
        },
        {
            icon: '🛠️',
            title: 'Techniques préservatives',
            description: 'Crochetage spécialisé, déblocage de crémone, techniques spécifiques par marque.'
        },
        {
            icon: '⚡',
            title: 'Intervention rapide',
            description: 'Délai d\'arrivée inférieur à 30 minutes dans Paris 1.'
        },
        {
            icon: '🎯',
            title: 'Perçage contrôlé en dernier ressort',
            description: 'Perçage stratégique minimaliste uniquement si les techniques douces échouent.'
        },
        {
            icon: '💎',
            title: 'Devis transparent et détaillé',
            description: 'Explication de la méthode envisagée et son coût forfaitaire avant toute action.'
        }
    ]
});

servicesData = signal({
    title: 'Les pannes courantes nécessitant une ouverture de porte blindée dans le 1er',
    subtitle: 'Notre service d\'urgence sur porte blindée intervient sur les dysfonctionnements les plus fréquents',
    services: [
        {
            icon: '🚪',
            title: 'Porte blindée claquée',
            description: 'Les clés sont restées à l\'intérieur sur la cuisinière.',
            image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
            price: 'À partir de 140€'
        },
        {
            icon: '🔑',
            title: 'Cylindre A2P bloqué ou défectueux',
            description: 'Clé ne rentre plus, ne tourne plus ou cassée à l\'intérieur.',
            image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
            price: 'À partir de 160€'
        },
        {
            icon: '🔒',
            title: 'Mécanisme multipoints grippé',
            description: 'La clé tourne mais les pênes ne s\'actionnent pas complètement.',
            image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
            price: 'À partir de 180€'
        },
        {
            icon: '📐',
            title: 'Problème d\'alignement de la porte',
            description: 'Le bâtiment a bougé, empêchant les pênes de pénétrer correctement.',
            image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
            price: 'Sur devis'
        },
        {
            icon: '🔧',
            title: 'Défaillance de la clé',
            description: 'Usure, copie de mauvaise qualité ne fonctionnant plus.',
            image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
            price: 'À partir de 140€'
        },
        {
            icon: '❌',
            title: 'Ouverture après perte totale des clés',
            description: 'Nécessite souvent le remplacement du cylindre après ouverture.',
            image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
            price: 'À partir de 200€'
        }
    ],
    ctaText: 'Appelez pour une intervention d\'expert',
    ctaPhone: '01 23 45 67 89'
});

pricingData = signal({
    title: 'Tarification pour l\'ouverture d\'une porte blindée à Paris 1',
    description: 'L\'ouverture d\'une porte blindée est une prestation technique supérieure, ce qui se reflète dans sa tarification. Le prix dépend de la complexité de l\'ouverture et de la méthode nécessaire.',
    highlight: 'Notre engagement : Un devis ferme et détaillé avant de commencer, sans surprise.',
    features: [
        'Expertise spécifique haute sécurité',
        'Méthodes préservatives privilégiées',
        'Outils spécialisés coûteux',
        'Temps de main-d\'œuvre adapté à la complexité',
        'Nouveau devis pour toute complication'
    ]
});

conclusionData = signal({
    title: 'Votre sécurité blindée mérite une expertise blindée à Paris 1',
    description: 'Votre porte blindée est le rempart de votre intimité et de vos biens. Lorsqu\'elle vous fait défaut, il est crucial de confier son ouverture à des mains expertes qui sauront la réparer, non l\'achever. Notre spécialisation dans l\'ouverture de porte blindée à Paris 1 fait de nous l\'interlocuteur privilégié pour ce type de panne critique.',
    ctaText: 'Ne laissez pas votre propre sécurité vous enfermer dehors',
    ctaPhone: '01 23 45 67 89',
    ctaDescription: 'Faites appel à des experts qui parlent le langage de la haute sécurité'
});

faqData = signal({
    title: 'FAQ : Ouverture Porte Blindée Paris 1',
    questions: [
        {
            question: 'Pouvez-vous ouvrir n\'importe quelle marque de porte blindée sans la percer ?',
            answer: 'Nous visons toujours l\'ouverture sans perçage. Pour la plupart des marques courantes (Vachette, Picard...), nous réussissons à ouvrir par crochetage ou manipulation du mécanisme dans plus de 80% des cas. Certains cylindres de très haute sécurité peuvent nécessiter un perçage contrôlé et minimal, que nous vous expliquons avant de l\'entreprendre.'
        },
        {
            question: 'L\'ouverture va-t-elle endommager ma porte et annuler sa garantie ?',
            answer: 'Notre objectif est de préserver l\'intégrité de votre porte blindée. Une ouverture par manipulation n\'occasionne aucun dégât visible et ne touche pas aux éléments structurants du blindage. Une ouverture par perçage minimal est ciblée sur le cylindre, un élément remplaçable, et n\'affecte pas la garantie sur le vantail et le cadre. Nous intervenons en tant que professionnels.'
        },
        {
            question: 'Combien de temps prend une ouverture de porte blindée ?',
            answer: 'Le temps sur place est variable : de 15 minutes pour une simple porte claquée avec un cylindre standard à 1 heure ou plus pour un mécanisme grippé complexe nécessitant une intervention délicate ou un perçage. Notre délai d\'arrivée lui, est garanti en moins de 30 minutes dans Paris 1.'
        },
        {
            question: 'Dois-je changer mon cylindre après une ouverture ?',
            answer: 'C\'est fortement recommandé, surtout en cas de perte de clés ou de perçage. Après une ouverture par manipulation, le cylindre peut être réutilisable, mais nous le testons. S\'il a montré des signes de faiblesse, nous vous conseillerons son remplacement par un modèle A2P pour ne pas compromettre votre sécurité.'
        },
        {
            question: 'Pourquoi votre intervention sur porte blindée est-elle plus chère que sur une porte standard ?',
            answer: 'Cette différence est justifiée par : 1) L\'expertise technique spécifique et la formation continue, 2) La complexité et durée souvent plus longue, 3) L\'utilisation d\'outils spécialisés et coûteux, 4) La responsabilité liée à la manipulation d\'un équipement de valeur et la nécessité de le préserver.'
        }
    ]
});
}

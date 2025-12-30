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
  selector: 'app-reglage-porte',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './reglage-porte.component.html',
  styleUrl: './reglage-porte.component.scss'
})
export class ReglagePorteComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  platformId = inject(PLATFORM_ID);

  ngOnInit(): void {

    /* =========================
       TITLE
    ========================== */
    this.title.setTitle(
      'Réglage Porte Paris 1 (75001) | Porte Qui Frotte ou Bloquée'
    );

    /* =========================
       META TAGS
    ========================== */
    this.meta.addTags([
      {
        name: 'description',
        content: 'Réglage de porte à Paris 1 (75001). Porte qui frotte, ferme mal ou bloque ? Serrurier expert, diagnostic gratuit et intervention rapide.'
      },
      {
        name: 'keywords',
        content: 'réglage porte Paris 1, porte qui frotte 75001, porte bloquée Paris, réglage porte entrée Paris'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Serrurier Paris 1' },

      /* Canonical */
      {
        rel: 'canonical',
        href: 'https://www.tonsite.fr/reglage-porte-paris-1'
      },

      /* Open Graph */
      {
        property: 'og:title',
        content: 'Réglage de Porte à Paris 1 – Serrurier Spécialiste'
      },
      {
        property: 'og:description',
        content: 'Porte qui frotte, ferme mal ou bloque à Paris 1 ? Réglage professionnel sans changer la serrure.'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: 'https://www.tonsite.fr/reglage-porte-paris-1'
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
        "@id": "https://www.tonsite.fr/reglage-porte-paris-1#service",
        "name": "Réglage de porte à Paris 1",
        "serviceType": "Réglage, réalignement et dépannage de porte",
        "provider": {
          "@id": "https://www.tonsite.fr/#locksmith"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Paris 1"
        },
        "description": "Réglage de porte à Paris 1 : porte qui frotte, ferme mal ou bloque. Intervention rapide sans remplacement inutile.",
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
        "@id": "https://www.tonsite.fr/reglage-porte-paris-1#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Puis-je régler ma porte moi-même ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Un réglage approximatif est parfois possible sur certaines portes modernes, mais sans expérience il existe un risque d’aggraver le désalignement. Un serrurier garantit un réglage précis et durable."
            }
          },
          {
            "@type": "Question",
            "name": "Pourquoi ma porte frotte seulement en été ou en hiver ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Les variations de température et d’humidité provoquent la dilatation du bois. Un réglage professionnel permet un fonctionnement stable toute l’année."
            }
          },
          {
            "@type": "Question",
            "name": "Combien de temps dure un réglage de porte ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Un réglage standard dure généralement entre 20 et 45 minutes. Les cas complexes peuvent aller jusqu’à 1h30."
            }
          },
          {
            "@type": "Question",
            "name": "Un réglage peut-il résoudre un problème de serrure ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui. Dans de nombreux cas, un mauvais alignement empêche le pêne de fonctionner correctement. Le réglage suffit sans toucher à la serrure."
            }
          },
          {
            "@type": "Question",
            "name": "Proposez-vous un entretien préventif ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui. Un entretien périodique des paumelles et des mécanismes évite l’usure prématurée et les blocages."
            }
          }
        ]
      }
    ]
  };


  heroData = signal({
    title: 'Réglage Porte Paris 1',
    subtitle: 'Votre Expert pour une Fermeture Parfaite',
    description: 'Votre <strong>porte frotte, ferme mal ou est bloquée à Paris 1 ?</strong> Notre service de réglage expert résout le problème, prévient l\'usure de votre serrure et restaure votre sécurité et votre confort.',
    ctaText: 'Obtenir un diagnostic gratuit',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://i.ibb.co/TDWd5Kv4/porte-frotte-5.png'
  });

whyChooseData = signal({
  title: 'Pourquoi un réglage professionnel est essentiel pour votre porte à Paris 1 ?',
  description: 'Une porte mal alignée n\'est pas qu\'une gêne quotidienne : c\'est une menace pour votre serrure, votre sécurité et l\'intégrité même de votre porte.',
  benefits: [
    {
      icon: '⚙️',
      title: 'Prévention des pannes majeures',
      description: 'Un réglage précoce évite l\'usure prématurée et la casse de votre serrure, économisant des réparations coûteuses.'
    },
    {
      icon: '🛡️',
      title: 'Restauration de la sécurité',
      description: 'Garantit que le pêne s\'engage pleinement dans la gâche, éliminant les failles de sécurité.'
    },
    {
      icon: '🔇',
      title: 'Amélioration du confort',
      description: 'Supprime les frottements, les grincements et les difficultés à fermer, pour une utilisation fluide et silencieuse.'
    },
    {
      icon: '✅',
      title: 'Expertise tous types de portes',
      description: 'Nous maîtrisons le réglage des portes en bois, PVC, aluminium et même blindées avec leurs mécanismes spécifiques.'
    }
  ]
});

commitmentsData = signal({
  title: 'Nos engagements pour un réglage de porte parfait à Paris 1',
  subtitle: 'Notre intervention de précision suit une méthodologie rigoureuse pour des résultats durables',
  commitments: [
    {
      icon: '🔍',
      title: 'Diagnostic minutieux et gratuit',
      description: 'Analyse complète de l\'alignement, des paumelles, du jeu et de l\'engagement du pêne pour identifier la cause exacte.'
    },
    {
      icon: '🎯',
      title: 'Réglage de précision',
      description: 'Manipulation experte des paumelles (réglage 3D sur modèles modernes) ou techniques adaptées sur portes anciennes.'
    },
    {
      icon: '📝',
      title: 'Devis forfaitaire clair',
      description: 'Prix fixe pour le réglage convenu. Toute pièce supplémentaire (paumelle) fait l\'objet d\'un devis complémentaire validé par vous.'
    },
    {
      icon: '⚡',
      title: 'Intervention rapide (20-45 min)',
      description: 'La plupart des réglages sont effectués en moins d\'une heure, solution immédiate à votre problème.'
    },
    {
      icon: '🔧',
      title: 'Matériel adapté',
      description: 'Outils spécifiques pour chaque type de porte et de paumelle, pour un réglage non destructif et précis.'
    }
  ]
});

servicesData = signal({
  title: 'Nos prestations de réglage pour porte à Paris 1',
  subtitle: 'Nous intervenons sur tous les types de portes et de problèmes d\'alignement dans le 1er arrondissement',
  services: [
    {
      icon: '🚪',
      title: 'Réglage de porte d\'entrée (bois, PVC, alu)',
      description: 'Alignement complet sur le cadre, réglage des paumelles pour éliminer frottements et difficultés de fermeture.',
      image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=600&q=80',
      price: 'À partir de 65€'
    },
    {
      icon: '🛡️',
      title: 'Réglage de porte blindée',
      description: 'Ajustement crucial pour l\'engagement parfait de tous les pênes multipoints et la préservation de la certification.',
      image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=600&q=80',
      price: 'À partir de 80€'
    },
    {
      icon: '🔩',
      title: 'Resserrement/Remplissage de paumelles',
      description: 'Resserrement des vis des gonds, pose de cales ou remplacement de paumelles usées pour restaurer la stabilité.',
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
      price: 'À partir de 55€'
    },
    {
      icon: '🎯',
      title: 'Réalignement de gâche de serrure',
      description: 'Repositionnement de la plaque de gâche lorsque le pêne ne s\'engage plus correctement après mouvement de la porte.',
      image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
      price: 'À partir de 45€'
    }
  ],
  ctaText: 'Demander un réglage',
  ctaPhone: '01 23 45 67 89'
});

pricingData = signal({
  title: 'Transparence tarifaire : Coût d\'un réglage de porte à Paris 1',
  description: 'Un réglage professionnel est un investissement modique qui prévient des dépenses bien plus importantes. Notre tarification est simple et transparente.',
  highlight: 'Devis forfaitaire pour le réglage convenu - Pas de surprise.',
  features: [
    'Forfait d\'intervention et diagnostic inclus',
    'Main d\'œuvre qualifiée pour un réglage précis',
    'Aucun frais caché',
    'Solution économique par rapport à une réparation de serrure'
  ]
});

conclusionData = signal({
  title: 'Votre spécialiste du réglage de porte de confiance à Paris 1',
  description: 'Ne laissez pas un simple désalignement se transformer en panne coûteuse ou en faille de sécurité. Notre expertise redonne à votre porte sa fluidité, son silence et son efficacité protectrice, pour votre confort et votre tranquillité d\'esprit au quotidien.',
  ctaText: 'Appelez pour un réglage expert',
  ctaPhone: '01 23 45 67 89',
  ctaDescription: 'Intervention rapide et solution durable dans Paris 1 !'
});

faqData = signal({
  title: 'FAQ : Réglage Porte Paris 1',
  questions: [
    {
      question: 'Puis-je régler ma porte moi-même ?',
      answer: 'Pour les portes modernes (PVC/Alu) avec paumelles à crans, un réglage sommaire est parfois possible avec une clé Allen. Cependant, sans expérience, on risque d\'aggraver le désalignement. Pour les portes en bois sur gonds fixes, le réglage nécessite des outils et un savoir-faire spécifiques. Un professionnel garantit un réglage précis, durable et identifie la cause profonde du problème.'
    },
    {
      question: 'Ma porte frotte seulement en été/en hiver. Dois-je la faire régler ?',
      answer: 'C\'est typique des portes en bois qui gonflent avec l\'humidité. Un réglage professionnel peut trouver un "juste milieu" permettant un fonctionnement correct toute l\'année, parfois en prévoyant un léger jeu en saison sèche. Dans les cas extrêmes, un ponçage léger du bord qui frotte peut être nécessaire pour une solution définitive.'
    },
    {
      question: 'Combien de temps dure un réglage de porte ?',
      answer: 'La plupart des réglages standard sont très rapides, entre 20 et 45 minutes une fois notre artisan sur place. Un réglage complexe sur une porte lourde ou très désalignée peut prendre jusqu\'à 1h30. Le diagnostic initial est immédiat.'
    },
    {
      question: 'Le réglage peut-il résoudre un problème de serrure qui bloque ?',
      answer: 'Dans une majorité de cas, OUI. Si la serrure bloque ou que la clé tourne difficilement, c\'est souvent parce que le pêne n\'est plus aligné avec la gâche. En repositionnant la porte par réglage, nous réalignons le pêne et la gâche, résolvant le problème sans toucher à la serrure elle-même. C\'est la première chose à vérifier avant toute intervention sur la serrure.'
    },
    {
      question: 'Proposez-vous un entretien préventif pour les portes ?',
      answer: 'Oui, et nous le conseillons vivement. Un contrôle et un resserrage périodique des vis des paumelles, ainsi qu\'un graissage des mécanismes, peuvent prévenir de nombreux problèmes de désalignement et d\'usure. C\'est particulièrement utile pour les portes fréquemment utilisées (portes d\'entrée, commerces). Nous pouvons établir un programme d\'entretien adapté à votre porte.'
    }
  ]
});
}

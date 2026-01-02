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
  selector: 'app-serrure-3-points',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './serrure-3-points.component.html',
  styleUrl: './serrure-3-points.component.scss'
})
export class Serrure3PointsComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  platformId = inject(PLATFORM_ID);
  site: SiteConfig = inject(SITE_CONFIG_TOKEN);

  ngOnInit(): void {

    /* =========================
       TITLE
    ========================== */
    this.title.setTitle(
      'Dépannage Serrure 3 Points Paris 1 (75001) | Serrurier Urgent'
    );

    /* =========================
       META TAGS
    ========================== */
    this.meta.addTags([
      {
        name: 'description',
        content: 'Dépannage de serrure 3 points à Paris 1 (75001). Serrure multipoints bloquée, porte impossible à ouvrir. Intervention urgente 24h/24.'
      },
      {
        name: 'keywords',
        content: 'dépannage serrure 3 points Paris 1, serrure multipoints bloquée 75001, serrurier 3 points Paris, ouverture serrure 3 points'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Serrurier Paris 1' },

      /* Canonical */
      {
        rel: 'canonical',
        href: 'https://www.tonsite.fr/depannage-serrure-3-points-paris-1'
      },

      /* Open Graph */
      {
        property: 'og:title',
        content: 'Dépannage Serrure 3 Points à Paris 1 – Intervention Rapide'
      },
      {
        property: 'og:description',
        content: 'Serrure 3 points bloquée à Paris 1 ? Dépannage serrurier urgent, ouverture et réparation sans dégâts.'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: 'https://www.tonsite.fr/depannage-serrure-3-points-paris-1'
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
        "@id": "https://www.tonsite.fr/depannage-serrure-3-points-paris-1#service",
        "name": "Dépannage serrure 3 points à Paris 1",
        "serviceType": "Dépannage et réparation de serrure multipoints",
        "provider": {
          "@id": "https://www.tonsite.fr/#locksmith"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Paris 1"
        },
        "description": "Dépannage de serrure 3 points à Paris 1 : serrure bloquée, porte impossible à ouvrir, réparation ou remplacement selon diagnostic.",
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
        "@id": "https://www.tonsite.fr/depannage-serrure-3-points-paris-1#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Pouvez-vous ouvrir une porte avec serrure 3 points bloquée ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui. Nous utilisons des techniques non destructives pour débloquer une serrure 3 points sans endommager la porte."
            }
          },
          {
            "@type": "Question",
            "name": "Faut-il réparer ou remplacer une serrure 3 points ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Si la panne est liée à un désalignement ou un grippage, la réparation suffit. En cas d’usure avancée, le remplacement est recommandé."
            }
          },
          {
            "@type": "Question",
            "name": "Puis-je forcer une porte difficile à fermer ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non. Forcer peut casser définitivement la serrure 3 points. Un réglage professionnel évite une panne grave."
            }
          },
          {
            "@type": "Question",
            "name": "Intervenez-vous sur les portes blindées ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui. Les serrures 3 points sont courantes sur les portes blindées et nous maîtrisons parfaitement leur dépannage."
            }
          },
          {
            "@type": "Question",
            "name": "Proposez-vous des serrures 3 points A2P ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui. Nous proposons des serrures 3 points certifiées A2P offrant une sécurité renforcée et recommandées par les assureurs."
            }
          }
        ]
      }
    ]
  };

  callNow(): void {
    if (isPlatformBrowser(this.platformId)) {
      window.location.href = `tel:${this.site.phone}`;
    }
  }

  heroData = signal({
    title: 'Dépannage Serrure 3 Points Paris 1',
    subtitle: 'Expertise & Réactivité 24h/24',
    description: 'Votre <strong>serrure 3 points est bloquée à Paris 1 ?</strong> Nos experts interviennent en moins de 30 minutes pour diagnostiquer, débloquer et réparer votre serrure multipoints, restaurant votre sécurité immédiatement.',
    ctaText: 'Dépannage urgent en 30 min',
    ctaPhone: this.site.phone,
    backgroundImage: 'https://i.ibb.co/gZVXjvBM/3-poin.png'
  });

  whyChooseData = signal({
    title: 'Pourquoi un dépannage expert est crucial pour votre serrure 3 points ?',
    description: 'Les serrures 3 points sont des mécanismes complexes. Une intervention inappropriée peut aggraver les dégâts et compromettre définitivement votre sécurité.',
    benefits: [
      {
        icon: '⚙️',
        title: 'Compréhension du mécanisme',
        description: 'Nous maîtrisons le fonctionnement des cylindres, tiges de transmission et pênes latéraux spécifiques aux serrures 3 points.'
      },
      {
        icon: '🔓',
        title: 'Ouverture non destructive',
        description: 'Techniques expertes pour déverrouiller une serrure 3 points bloquée sans endommager la porte ni le mécanisme.'
      },
      {
        icon: '🎯',
        title: 'Diagnostic précis des causes',
        description: 'Identification exacte de la panne : usure, alignement, grippage ou pièces cassées pour une solution adaptée.'
      },
      {
        icon: '✓',
        title: 'Réparation ou remplacement adapté',
        description: 'Conseil honnête sur la meilleure solution (réglage, réparation ou remplacement) pour votre sécurité et votre budget.'
      }
    ]
  });

  commitmentsData = signal({
    title: 'Nos engagements pour un dépannage de serrure 3 points à Paris 1',
    subtitle: 'Face à une panne de serrure multipoints, nous garantissons une intervention technique et transparente',
    commitments: [
      {
        icon: '⚡',
        title: 'Intervention ultra-rapide <30min',
        description: 'Objectif : être sur place dans le 1er arrondissement en moins de 30 minutes après votre appel confirmé.'
      },
      {
        icon: '🔍',
        title: 'Diagnostic gratuit sur place',
        description: 'Analyse précise de la panne (cylindre, crémone, alignement) avant toute proposition de solution.'
      },
      {
        icon: '📝',
        title: 'Devis clair et sans surprise',
        description: 'Prix détaillé (main d\'œuvre + pièces) validé par vos soins avant le début des travaux.'
      },
      {
        icon: '👨‍🔧',
        title: 'Techniciens spécialisés multipoints',
        description: 'Artisans formés spécifiquement aux serrures 3 points sur portes bois, métal et blindées.'
      },
      {
        icon: '🔧',
        title: 'Atelier mobile équipé',
        description: 'Stock de pièces détachées et serrures 3 points pour une réparation ou un remplacement immédiat.'
      }
    ]
  });

  servicesData = signal({
    title: 'Nos prestations de dépannage pour serrure 3 points à Paris 1',
    subtitle: 'Nous traitons toutes les pannes spécifiques aux serrures multipoints dans le 1er arrondissement',
    services: [
      {
        icon: '🔓',
        title: 'Ouverture d\'urgence serrure 3 points bloquée',
        description: 'Déverrouillage expert sans forcer, pour vous rendre l\'accès à votre logement ou commerce.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        price: 'À partir de 95€'
      },
      {
        icon: '🔩',
        title: 'Réparation de crémone 3 points',
        description: 'Démontage, nettoyage, graissage ou remplacement de pièces du mécanisme de tiges de transmission.',
        image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
        price: 'À partir de 85€'
      },
      {
        icon: '🚪',
        title: 'Réglage d\'alignement porte/cadre',
        description: 'Ajustement des paumelles et des gâches latérales pour un engagement parfait des 3 pênes.',
        image: 'https://images.unsplash.com/photo-1577493340887-0b78f5b3b6f5?w=600&q=80',
        price: 'À partir de 75€'
      },
      {
        icon: '🔄',
        title: 'Remplacement complet serrure 3 points',
        description: 'Pose d\'une nouvelle serrure multipoints, éventuellement de sécurité renforcée (A2P).',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
        price: 'À partir de 150€'
      }
    ],
    ctaText: 'Obtenir un diagnostic',
    ctaPhone: '01 23 45 67 89'
  });

  pricingData = signal({
    title: 'Transparence tarifaire : Coût d\'un dépannage de serrure 3 points à Paris 1',
    description: 'Le prix dépend de la nature de la panne et de la solution retenue. Nous détaillons chaque poste pour une totale clarté.',
    highlight: 'Le devis est votre garantie : prix ferme validé avant intervention, aucune surprise.',
    features: [
      'Forfait déplacement et diagnostic inclus',
      'Main d\'œuvre adaptée à la complexité',
      'Pièces de qualité (origine ou certifiées)',
      'Garantie sur les réparations et pièces neuves'
    ]
  });

  conclusionData = signal({
    title: 'Votre spécialiste serrure 3 points de confiance à Paris 1',
    description: 'Ne laissez pas une panne de serrure multipoints compromettre votre sécurité et votre tranquillité d\'esprit. Notre expertise technique et notre réactivité 24h/24 sont vos meilleurs atouts pour une solution durable.',
    ctaText: 'Appelez un expert 3 points',
    ctaPhone: '01 23 45 67 89',
    ctaDescription: 'Intervention express en moins de 30 minutes dans Paris 1 !'
  });

  faqData = signal({
    title: 'FAQ : Dépannage Serrure 3 Points Paris 1',
    questions: [
      {
        question: 'Pouvez-vous ouvrir une porte si la serrure 3 points est bloquée ?',
        answer: 'Oui, c\'est notre spécialité. Nous utilisons des techniques spécifiques non destructives pour déverrouiller une serrure 3 points bloquée sans forcer la porte ni endommager le mécanisme plus que nécessaire, afin de pouvoir procéder à la réparation dans les meilleures conditions.'
      },
      {
        question: 'Faut-il plutôt réparer ou remplacer ma serrure 3 points ?',
        answer: 'Cela dépend du diagnostic. Si la panne est due à un mauvais alignement, un grippage ou une pièce interne unique cassée, la réparation est souvent suffisante. Si le mécanisme est totalement usé, rouillé ou cassé en plusieurs points, ou si la serrure est très ancienne, le remplacement complet est plus sûr et plus rentable à long terme.'
      },
      {
        question: 'Ma porte est difficile à fermer, dois-je forcer ?',
        answer: 'Jamais. Forcer une porte qui résiste est la principale cause de casse des serrures 3 points. Cette résistance indique presque toujours un problème d\'alignement. Appelez un professionnel pour un simple réglage qui évitera une panne bien plus grave et coûteuse.'
      },
      {
        question: 'Intervenez-vous sur tous les types de portes ?',
        answer: 'Oui. Les serrures 3 points s\'installent sur des portes en bois, des portes métalliques d\'entrée et sont le cœur des portes blindées. Notre expertise couvre ces trois types de portes. Le principe de dépannage est similaire, mais l\'accès et les pièces peuvent différer.'
      },
      {
        question: 'Proposez-vous des serrures 3 points de meilleure qualité ?',
        answer: 'Absolument. Si un remplacement s\'avère nécessaire, nous vous conseillerons sur des serrures et cylindres de haute sécurité (norme A2P) qui offrent une résistance bien supérieure aux modèles d\'entrée de gamme. C\'est l\'occasion d\'améliorer significativement votre niveau de protection.'
      }
    ]
  });

}

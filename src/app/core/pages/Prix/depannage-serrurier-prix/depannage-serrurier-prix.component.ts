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
  selector: 'app-depannage-serrurier-prix',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './depannage-serrurier-prix.component.html',
  styleUrl: './depannage-serrurier-prix.component.scss'
})
export class DepannageSerrurierPrixComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  platformId = inject(PLATFORM_ID);
  site: SiteConfig = inject(SITE_CONFIG_TOKEN);

  ngOnInit(): void {

    this.title.setTitle(
      'Prix Dépannage Serrurier Paris 1 (75001) | Devis Gratuit & Transparent'
    );

    this.meta.addTags([
      {
        name: 'description',
        content: 'Prix dépannage serrurier à Paris 1 : tarifs clairs, devis gratuit et ferme avant intervention. Aucune surprise, transparence totale.'
      },
      {
        name: 'keywords',
        content: 'prix serrurier Paris 1, tarif dépannage serrurier 75001, devis serrurier Paris, serrurier pas cher Paris 1'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Serrurier Paris 1' },

      /* Open Graph */
      {
        property: 'og:title',
        content: 'Prix Dépannage Serrurier Paris 1 – Tarifs Transparents'
      },
      {
        property: 'og:description',
        content: 'Découvrez les prix d’un dépannage serrurier à Paris 1. Devis gratuit, clair et sans engagement.'
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
            "name": "Serrurier Paris 1",
            "telephone": "01 23 45 67 89",
            "image": "https://i.ibb.co/ns1qzmMN/depannage-serrurier-prix.png",
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
            "priceRange": "€€",
            "url": "https://www.tonsite.fr"
          },

          {
            "@type": "Service",
            "@id": "https://www.tonsite.fr/depannage-serrurier-prix-paris-1#service",
            "serviceType": "Dépannage serrurier",
            "provider": {
              "@id": "https://www.tonsite.fr/#locksmith"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Paris 1"
            },
            "description": "Dépannage serrurier à Paris 1 avec prix transparents, devis gratuit et ferme avant intervention.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "price": "Sur devis",
              "availability": "https://schema.org/InStock"
            }
          },

          {
            "@type": "FAQPage",
            "@id": "https://www.tonsite.fr/depannage-serrurier-prix-paris-1#faq",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Pourquoi certains serruriers ne donnent-ils pas de prix au téléphone ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Parce qu’ils ajustent souvent le prix une fois sur place. Nous fonctionnons différemment : devis clair et engagé avant toute intervention."
                }
              },
              {
                "@type": "Question",
                "name": "Le devis est-il vraiment gratuit et sans engagement ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui. Le devis est totalement gratuit et vous n’êtes engagé que si vous le signez."
                }
              },
              {
                "@type": "Question",
                "name": "Que se passe-t-il si un problème supplémentaire est découvert ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Les travaux sont arrêtés et un nouveau devis est proposé. Rien n’est fait sans votre accord."
                }
              },
              {
                "@type": "Question",
                "name": "Proposez-vous différentes gammes de prix ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui. Nous proposons des solutions économiques ou haut de gamme certifiées A2P selon votre budget."
                }
              },
              {
                "@type": "Question",
                "name": "Fournissez-vous une facture pour l’assurance ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, une facture détaillée et conforme aux exigences des assurances est systématiquement remise."
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
    title: 'Dépannage Serrurier Prix à Paris 1',
    subtitle: 'La Transparence Totale Avant l\'Intervention',
    description: 'Vous cherchez à connaître le prix d\'un dépannage serrurier à Paris 1 ? Notre politique tarifaire est claire, détaillée et prévisible. Devis ferme et gratuit avant tout travail.',
    ctaText: 'Obtenir un devis détaillé gratuit',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://i.ibb.co/ns1qzmMN/depannage-serrurier-prix.png'
  });

  whyChooseData = signal({
    title: 'Pourquoi la clarté tarifaire est le fondement de notre relation de confiance ?',
    description: 'Face à une panne, l\'incertitude financière est un stress inutile. Nous croyons que la confiance commence par la transparence sur le coût.',
    benefits: [
      {
        icon: '📋',
        title: 'Devis ferme, gratuit et signé',
        description: 'Vous recevez et signez un devis détaillé avant toute intervention. Le montant total est votre garantie contre les surprises.'
      },
      {
        icon: '🧾',
        title: 'Décomposition 100% lisible',
        description: 'Forfait d\'intervention + Main d\'œuvre (temps estimé) + Prix des pièces (avec choix). Vous savez exactement ce que vous payez.'
      },
      {
        icon: '🛡️',
        title: 'Protection contre les dérives',
        description: 'Notre engagement : la facture finale correspond au devis signé, sauf cas exceptionnel discuté et validé par vous au préalable.'
      },
      {
        icon: '⚖️',
        title: 'Juste prix pour une vraie expertise',
        description: 'Nos tarifs reflètent le travail d\'un artisan qualifié, des outils pro et des pièces garanties, pas des marges cachées.'
      }
    ]
  });

  commitmentsData = signal({
    title: 'Notre processus transparent pour un prix clair à Paris 1',
    subtitle: 'Une méthodologie en 4 étapes conçue pour éliminer toute incertitude financière',
    commitments: [
      {
        icon: '📞',
        title: 'Estimation indicative par téléphone',
        description: 'Pour une prestation standard (ouverture claquée), forfait ferme. Pour une panne complexe, fourchette indicative basée sur votre description.'
      },
      {
        icon: '🔍',
        title: 'Diagnostic et devis GRATUIT sur place',
        description: 'Notre expert identifie la panne et vous remet un devis détaillé, gratuit et sans engagement. Vous avez le temps de le lire et de poser des questions.'
      },
      {
        icon: '✅',
        title: 'Validation et accord client (signature)',
        description: 'Vous signez le devis pour acceptation. C\'est notre contrat : ce montant est le prix final, sauf cas de force majeure exceptionnel discuté ensemble.'
      },
      {
        icon: '🔧',
        title: 'Intervention et facturation conforme',
        description: 'Nous intervenons. La facture finale correspond exactement au devis signé. Pas de "c\'était plus compliqué" en fin de chantier.'
      },
      {
        icon: '🧾',
        title: 'Facture détaillée pour assurance',
        description: 'Nous vous remettons une facture professionnelle avec notre SIRET, le détail des travaux et des pièces, indispensable pour votre assurance.'
      }
    ]
  });

  servicesData = signal({
    title: 'Nos prestations avec tarification transparente pour Paris 1',
    subtitle: 'Exemples concrets de notre structure tarifaire claire',
    services: [
      {
        icon: '🚪',
        title: 'Forfait Ouverture Porte Claquée',
        description: 'Pour une porte standard. Forfait unique communiqué à l\'avance. Inclut déplacement, diagnostic et ouverture par méthode non destructive si possible.',
        image: 'https://images.unsplash.com/photo-1582719201952-3f0ce5badca8?w=600&q=80',
        price: 'Forfait dès 89€ TTC'
      },
      {
        icon: '🔑',
        title: 'Remplacement de Cylindre',
        description: 'Forfait intervention + Main d\'œuvre (~30-45 min) + Prix du cylindre (choix standard ou A2P). Exemple : 65€ (forfait) + 40€ (MO) + 25€ (cylindre) = 130€ TTC.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        price: 'À partir de 130€ TTC*'
      },
      {
        icon: '🔧',
        title: 'Dépannage Serrure 3 Points',
        description: 'Pour un grippage/réglage. Forfait intervention + Main d\'œuvre (~1h à 1h30). Pièces en sus si nécessaire (ex: pêne cassé).',
        image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
        price: 'À partir de 120€ TTC*'
      },
      {
        icon: '📝',
        title: 'Diagnostic & Devis Personnalisé',
        description: 'Pour toute panne ou projet complexe. Déplacement d\'un expert, diagnostic approfondi et remise d\'un devis ferme et gratuit.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
        price: 'Gratuit'
      }
    ],
    ctaText: 'Demander un devis personnalisé',
    ctaPhone: '01 23 45 67 89',
    note: '*Prix total indicatif pour une intervention moyenne. Le devis définitif vous est remis gratuitement sur place.'
  });

  pricingData = signal({
    title: 'Décomposition de notre tarif : Comprendre chaque euro investi',
    description: 'Un prix juste et transparent se compose de trois postes principaux. Chacun est expliqué et validé avec vous.',
    highlight: 'Prix final = Forfait d\'Intervention + Main d\'Œuvre (temps) + Pièces (choisies par vous).',
    features: [
      '1. Forfait Déplacement/Urgence : Réactivité 24h/24, véhicule, diagnostic.',
      '2. Main d\'Œuvre : Temps effectif de réparation (grilles horaires connues).',
      '3. Pièces de Rechange : Prix public affiché, choix entre différentes gammes.',
      '=> Devis signé = Prix final garanti.'
    ]
  });

  conclusionData = signal({
    title: 'Votre partenaire pour une sérénité tarifaire totale à Paris 1',
    description: 'Chercher un prix, c\'est chercher de la clarté et de la confiance. En nous choisissant, vous optez pour un partenaire pour qui votre droit à comprendre ce que vous payez est fondamental. Finies les angoisses de la facture surprise, place à la sérénité d\'un travail bien fait, à un prix juste et convenu ensemble.',
    ctaText: 'Choisir la transparence',
    ctaPhone: '01 23 45 67 89',
    ctaDescription: 'Devis gratuit, clair et sans engagement dans le 1er arrondissement !'
  });

  faqData = signal({
    title: 'FAQ : Dépannage Serrurier Prix Paris 1',
    questions: [
      {
        question: 'Pourquoi certains serruriers ne donnent-ils pas de prix au téléphone ?',
        answer: 'Souvent parce que leur modèle économique repose sur une marge de manœuvre une fois sur place ("à la tête du client"). Notre philosophie est inverse : plus nous sommes clairs et engagés en amont avec un devis signé, plus la relation de confiance est forte et durable. La transparence est notre règle.'
      },
      {
        question: 'Le devis est-il vraiment gratuit et sans engagement ?',
        answer: 'Absolument. Le diagnostic et l\'établissement du devis détaillé sont entièrement gratuits. Vous n\'êtes engagé(e) financièrement que lorsque vous signez ce devis pour acceptation. Vous pouvez parfaitement nous appeler, faire établir un devis, et décider de ne pas donner suite, sans aucun frais. C\'est normal et c\'est notre engagement.'
      },
      {
        question: 'Que se passe-t-il si un problème plus grave est découvert pendant les travaux ?',
        answer: 'C\'est exceptionnel car notre diagnostic initial est approfondi. Si cela arrivait (ex: une pièce interne cachée cassée), nous arrêtons immédiatement les travaux et vous présentons un nouveau devis complémentaire pour accord. Nous ne continuons jamais sans votre accord explicite sur le nouveau prix total. La transparence est permanente, du début à la fin.'
      },
      {
        question: 'Les pièces sont-elles chères ? Avez-vous différentes gammes ?',
        answer: 'Nous proposons différentes gammes de prix pour laisser le choix. Vous pouvez opter pour une pièce standard et économique, ou pour une pièce haut de gamme (certifiée A2P, marque reconnue) offrant une sécurité supérieure. Nous vous conseillons, mais le choix final du budget est le vôtre. Le prix de chaque option est affiché clairement.'
      },
      {
        question: 'Établissez-vous des factures pour l\'assurance ?',
        answer: 'Oui, systématiquement. Nous vous remettons une facture détaillée et professionnelle, mentionnant notre numéro SIRET, la nature exacte des travaux effectués, les références des pièces posées et la durée de la garantie. Ce document est indispensable pour toute réclamation auprès de votre assurance habitation si la panne est couverte par votre contrat.'
      }
    ]
  });
}

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
  selector: 'app-ouverture-porte-pas-cher',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './ouverture-porte-pas-cher.component.html',
  styleUrl: './ouverture-porte-pas-cher.component.scss'
})
export class OuverturePortePasCherComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  platformId = inject(PLATFORM_ID);

  ngOnInit(): void {

    this.title.setTitle(
      'Ouverture Porte Pas Cher Paris 1 (75001) | Forfait Fixe & Urgence 24h/24'
    );

    this.meta.addTags([
      {
        name: 'description',
        content: 'Ouverture de porte pas cher à Paris 1 : forfait clair, prix fixe annoncé au téléphone, intervention rapide <30 min, sans casse.'
      },
      {
        name: 'keywords',
        content: 'ouverture porte pas cher Paris 1, serrurier pas cher 75001, ouverture porte claquée Paris, serrurier économique Paris 1'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Serrurier Paris 1' },

      /* Open Graph */
      {
        property: 'og:title',
        content: 'Ouverture Porte Pas Cher Paris 1 – Forfait Clair & Rapide'
      },
      {
        property: 'og:description',
        content: 'Bloqué dehors à Paris 1 ? Ouverture de porte pas cher, sans casse, prix annoncé avant déplacement.'
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
            "image": "https://i.ibb.co/Ng3XtfND/ouverture-porte-pas-cher.png",
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
            "priceRange": "€",
            "url": "https://www.tonsite.fr"
          },

          {
            "@type": "Service",
            "@id": "https://www.tonsite.fr/ouverture-porte-pas-cher-paris-1#service",
            "serviceType": "Ouverture de porte pas cher",
            "provider": {
              "@id": "https://www.tonsite.fr/#locksmith"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Paris 1"
            },
            "description": "Ouverture de porte pas cher à Paris 1 avec forfait fixe annoncé à l'avance et techniques non destructives.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "price": "Forfait",
              "availability": "https://schema.org/InStock"
            }
          },

          {
            "@type": "FAQPage",
            "@id": "https://www.tonsite.fr/ouverture-porte-pas-cher-paris-1#faq",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Pouvez-vous donner un prix fixe par téléphone ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, pour les portes claquées standard, un forfait fixe est annoncé et respecté si la situation correspond."
                }
              },
              {
                "@type": "Question",
                "name": "Le tarif est-il le même pour une porte blindée ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un forfait spécifique est appliqué et communiqué à l'avance selon le type de porte blindée."
                }
              },
              {
                "@type": "Question",
                "name": "Ouvrez-vous sans casser ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui, dans plus de 95% des cas, l'ouverture est réalisée sans aucun dégât."
                }
              },
              {
                "@type": "Question",
                "name": "Y a-t-il des frais supplémentaires la nuit ou le week-end ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non. Le forfait urgence est identique 24h/24, 7j/7, sans majoration cachée."
                }
              },
              {
                "@type": "Question",
                "name": "Que se passe-t-il si la serrure est endommagée ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un devis séparé est proposé uniquement si un remplacement est nécessaire, sans obligation."
                }
              }
            ]
          }
        ]
      }


    );
    document.head.appendChild(script);
  }

  heroData = signal({
    title: 'Ouverture Porte Pas Cher à Paris 1',
    subtitle: 'Solution Économique et Fiable',
    description: 'Besoin d\'une <strong>ouverture de porte pas cher à Paris 1 ?</strong> Notre service vous offre un prix juste, transparent et forfaitaire. Bloqué(e) dehors ? Nous intervenons en <30 min avec des techniques non destructives.',
    ctaText: 'Appelez pour un forfait immédiat',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://i.ibb.co/Ng3XtfND/ouverture-porte-pas-cher.png'
  });

  whyChooseData = signal({
    title: 'Pourquoi une offre "pas cher" peut devenir très coûteuse ?',
    description: 'La vraie économie réside dans une ouverture propre, à prix fixe, qui préserve votre serrure et évite les mauvaises surprises sur la facture.',
    benefits: [
      {
        icon: '💰',
        title: 'Forfait clair communiqué à l\'avance',
        description: 'Pour une porte claquée standard, nous vous donnons un prix ferme par téléphone. Pas de majoration surprise "c\'était plus compliqué".'
      },
      {
        icon: '🔓',
        title: 'Techniques non destructives privilégiées',
        description: 'Nous utilisons le crochetage et des méthodes douces dans >95% des cas pour ouvrir SANS endommager votre serrure, évitant un remplacement coûteux.'
      },
      {
        icon: '⚖️',
        title: 'Transparence totale sur les tarifs',
        description: 'Notre forfait d\'urgence est identique 24h/24 et 7j/7. Si la situation est complexe, nous établissons un NOUVEAU devis pour accord avant d\'agir.'
      },
      {
        icon: '🛡️',
        title: 'Expertise qui préserve votre sécurité',
        description: 'Ouverture réalisée par des artisans qualifiés qui ne forcent pas votre porte, garantissant qu\'elle reste votre premier rempart de sécurité.'
      }
    ]
  });

  commitmentsData = signal({
    title: 'Nos engagements pour une ouverture économique et sans stress à Paris 1',
    subtitle: 'Être bloqué(e) dehors est déjà assez stressant, le prix et la méthode ne doivent pas l\'être davantage.',
    commitments: [
      {
        icon: '📞',
        title: 'Forfait ferme par téléphone',
        description: 'Pour une porte claquée classique, nous vous communiquons un prix fixe et définitif dès votre appel. C\'est le prix que vous paierez.'
      },
      {
        icon: '⚡',
        title: 'Intervention express en moins de 30 min',
        description: 'Objectif d\'arrivée dans le 1er arrondissement en moins de 30 minutes après votre appel confirmé.'
      },
      {
        icon: '🔧',
        title: '"Préserver avant tout" : notre règle d\'or',
        description: 'Priorité absolue aux techniques d\'ouverture non destructives (crochetage). Nous évitons de percer ou forcer, sauf en dernier recours et avec votre accord.'
      },
      {
        icon: '🔍',
        title: 'Diagnostic honnête sur place',
        description: 'Si la situation diffère (serrure cassée, blindage spécifique), nous vous le disons et établissons un devis adapté AVANT toute action.'
      },
      {
        icon: '📜',
        title: 'Facturation au forfait convenu',
        description: 'Vous payez exactement le montant annoncé. Facture détaillée remise. Aucun coût caché, ni pour l\'heure, ni pour le jour.'
      }
    ]
  });

  servicesData = signal({
    title: 'Nos services d\'ouverture à tarif transparent pour Paris 1',
    subtitle: 'Une réponse adaptée et claire en prix pour chaque situation d\'urgence',
    services: [
      {
        icon: '🚪',
        title: 'Ouverture porte claquée standard',
        description: 'La situation la plus courante. Forfait clair par téléphone. Ouverture par crochetage pour préserver votre serrure et vos clés.',
        image: 'https://images.unsplash.com/photo-1582719201952-3f0ce5badca8?w=600&q=80',
        price: 'Forfait dès 89€ TTC'
      },
      {
        icon: '🛡️',
        title: 'Ouverture porte blindée',
        description: 'Pour les portes blindées standards. Techniques spécifiques non destructives. Forfait communiqué après vérification par téléphone.',
        image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=600&q=80',
        price: 'Forfait dès 120€ TTC'
      },
      {
        icon: '🔑',
        title: 'Clé cassée dans la serrure',
        description: 'Extraction du fragment de clé avec outils adaptés, puis ouverture. Évite d\'enfoncer le morceau et préserve le cylindre.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        price: 'Forfait dès 99€ TTC'
      },
      {
        icon: '🔧',
        title: 'Diagnostic & devis gratuit sur place',
        description: 'Pour une panne complexe (porte déformée, serrure interne cassée). Expert se déplace, identifie le problème et remet un devis ferme.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
        price: 'Gratuit'
      }
    ],
    ctaText: 'Obtenir mon forfait d\'ouverture',
    ctaPhone: '01 23 45 67 89'
  });

  pricingData = signal({
    title: 'Transparence tarifaire : notre forfait d\'ouverture à Paris 1',
    description: 'Nous croyons en la simplicité. Pour une situation standard, un prix unique couvre tout : déplacement urgent, expertise et intervention.',
    highlight: 'Forfait unique 24h/24 et 7j/7 - Identique la nuit, le week-end et les jours fériés.',
    features: [
      'Déplacement urgent dans Paris 1 inclus',
      'Main d\'œuvre et expertise de l\'artisan',
      'Utilisation des outils spécialisés',
      'Prix final = Prix annoncé (si situation standard)'
    ]
  });

  conclusionData = signal({
    title: 'Votre solution de confiance pour une ouverture rapide et économique à Paris 1',
    description: 'En choisissant notre service, vous optez pour la fin du stress financier en cas d\'urgence. Un forfait clair, une méthode qui préserve votre porte, et une équipe à vos côtés en moins de 30 minutes : c\'est ça, la vraie solution "pas cher" et intelligente.',
    ctaText: 'Sortir de l\'urgence sans stress',
    ctaPhone: '01 23 45 67 89',
    ctaDescription: 'Forfait d\'ouverture transparent en moins de 30 min à Paris 1 !'
  });

  faqData = signal({
    title: 'FAQ : Ouverture Porte Pas Cher Paris 1',
    questions: [
      {
        question: 'Pouvez-vous vraiment donner un prix fixe par téléphone ?',
        answer: 'Oui, pour les situations les plus courantes (porte d\'appartement classique claquée, serrure standard), nous le faisons systématiquement. Ce forfait est valable si la situation sur place correspond à la description. Nous avons l\'expérience nécessaire pour estimer précisément le temps et la technique requis.'
      },
      {
        question: 'Et si ma porte est blindée ? Le tarif est-il le même ?',
        answer: 'Pour une porte blindée standard, nous appliquons un forfait spécifique (légèrement supérieur, communiqué à l\'avance). Si elle est équipée d\'un cylindre de très haute sécurité (A2P avec drapeaux), une méthode différente peut être nécessaire. Dans ce cas, nous vous le signalerons et établirons un devis adapté AVANT toute intervention. Pas de surprise.'
      },
      {
        question: 'Garantissez-vous de ne rien casser ?',
        answer: 'Nous privilégions systématiquement et en priorité les méthodes non destructives (crochetage). Dans l\'immense majorité des cas (>95%), nous ouvrons sans aucun dégât visible sur la serrure ou la porte. Si une technique plus invasive est le seul recours, nous vous en informons et obtenons votre accord explicite avant.'
      },
      {
        question: 'Que faire si ma serrure est cassée après votre ouverture ?',
        answer: 'C\'est extrêmement rare avec nos techniques douces. Si un problème survenait (ex : serrure grippée qui cède à la manipulation), nous vous le dirions immédiatement. Nous vous proposerions alors un devis séparé et facultatif pour le remplacement du cylindre. L\'ouverture elle-même resterait facturée au forfait initial convenu.'
      },
      {
        question: 'Votre forfait est-il valable la nuit et le week-end ?',
        answer: 'Oui, absolument. Nous appliquons un forfait d\'urgence 24h/24 et 7j/7 qui est IDENTIQUE la nuit, le dimanche et les jours fériés. Il n\'y a pas de majoration cachée pour les horaires décalés. Cette transparence totale fait partie intégrante de notre engagement envers vous.'
      }
    ]
  });
}

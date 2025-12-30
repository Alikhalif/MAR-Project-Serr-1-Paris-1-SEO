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
  selector: 'app-remplacement-cylindre',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './remplacement-cylindre.component.html',
  styleUrl: './remplacement-cylindre.component.scss'
})
export class RemplacementCylindreComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  platformId = inject(PLATFORM_ID);

  ngOnInit(): void {

    this.title.setTitle(
      'Remplacement Cylindre Paris 1 (75001) | Serrurier Sécurité'
    );

    this.meta.addTags([
      {
        name: 'description',
        content: 'Remplacement de cylindre à Paris 1 (75001). Changement de barillet standard ou A2P après perte de clés ou panne. Devis gratuit.'
      },
      {
        name: 'keywords',
        content: 'remplacement cylindre Paris 1, changer cylindre serrure 75001, barillet A2P Paris, serrurier cylindre Paris'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Serrurier Paris 1' },

      /* Canonical */
      {
        rel: 'canonical',
        href: 'https://www.tonsite.fr/remplacement-cylindre-paris-1'
      },

      /* Open Graph */
      {
        property: 'og:title',
        content: 'Remplacement de Cylindre à Paris 1 – Serrurier Expert'
      },
      {
        property: 'og:description',
        content: 'Changement de cylindre de serrure à Paris 1. Intervention rapide, cylindre A2P recommandé.'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:url',
        content: 'https://www.tonsite.fr/remplacement-cylindre-paris-1'
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
        "@id": "https://www.tonsite.fr/remplacement-cylindre-paris-1#service",
        "name": "Remplacement de cylindre à Paris 1",
        "serviceType": "Changement de cylindre et barillet de serrure",
        "provider": {
          "@id": "https://www.tonsite.fr/#locksmith"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Paris 1"
        },
        "description": "Remplacement de cylindre de serrure à Paris 1 : cylindre standard ou A2P après perte de clés, panne ou renforcement de sécurité.",
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
        "@id": "https://www.tonsite.fr/remplacement-cylindre-paris-1#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Puis-je changer le cylindre moi-même ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "C’est possible, mais une erreur de mesure ou de pose peut endommager la serrure. Un serrurier garantit le bon modèle, une pose parfaite et une garantie."
            }
          },
          {
            "@type": "Question",
            "name": "Quelle est la différence entre un cylindre standard et A2P ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le cylindre A2P est certifié contre l’effraction et recommandé par les assureurs. Il offre une résistance bien supérieure au crochetage, perçage et bumping."
            }
          },
          {
            "@type": "Question",
            "name": "Combien de temps dure le remplacement d’un cylindre ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Le remplacement prend généralement entre 10 et 20 minutes une fois sur place."
            }
          },
          {
            "@type": "Question",
            "name": "Dois-je changer toutes les serrures après une perte de clés ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Non. Dans la majorité des cas, changer uniquement le cylindre de la porte d’entrée suffit."
            }
          },
          {
            "@type": "Question",
            "name": "Puis-je conserver l’ancien cylindre ?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Oui. L’ancien cylindre vous est toujours remis, notamment utile pour les locataires."
            }
          }
        ]
      }
    ]
  };


  heroData = signal({
      title: 'Remplacement de Cylindre à Paris 1',
      subtitle: 'Le Cœur de Votre Sécurité Renouvelé',
      description: 'Vous devez <strong>changer votre cylindre de serrure à Paris 1 ?</strong> <br>Confiez le remplacement à nos experts. Le cylindre, aussi appelé barillet, est le cœur intelligent de votre serrure... Notre entreprise de serrurerie à Paris réalise des remplacements de cylindre professionnels et sécurisés à Paris 1.',
      ctaText: 'Pour un devis gratuit et un remplacement de cylindre expert à Paris 1, contactez-nous',
      ctaPhone: '01 23 45 67 89',
      backgroundImage: 'https://i.ibb.co/Myq313Bp/cylindre-1.png'
  });

  whyChooseData = signal({
      title: 'Pourquoi remplacer le cylindre de votre serrure à Paris 1 ?',
      description: 'Le remplacement du cylindre est l\'intervention de serrurerie la plus courante et souvent la plus judicieuse. Elle est impérative ou fortement recommandée dans les situations suivantes.',
      benefits: [
          {
              icon: '🔑',
              title: 'Perte ou vol de clés',
              description: 'Urgence critique : seul le remplacement garantit que les anciennes clés deviennent inopérantes.'
          },
          {
              icon: '🏠',
              title: 'Après un emménagement',
              description: 'Première mesure de sécurité pour garantir l\'intimité dans votre nouvel habitat.'
          },
          {
              icon: '⚙️',
              title: 'Usure ou défaillance mécanique',
              description: 'Clé qui tourne mal, reste coincée : signe de fin de vie du cylindre.'
          },
          {
              icon: '🛡️',
              title: 'Renforcement de la sécurité',
              description: 'Remplacer par un cylindre haute sécurité certifié A2P pour une protection optimale.'
          }
      ]
  });

  commitmentsData = signal({
      title: 'Notre processus expert pour un remplacement de cylindre réussi',
      subtitle: 'Notre intervention est rapide, propre et garantie',
      commitments: [
          {
              icon: '🔍',
              title: 'Diagnostic et conseil',
              description: 'Vérification du type existant, état du mécanisme et présentation des options (standard ou A2P).'
          },
          {
              icon: '📋',
              title: 'Devis transparent',
              description: 'Devis ferme et détaillé incluant prix du cylindre neuf et main d\'œuvre de remplacement.'
          },
          {
              icon: '🔧',
              title: 'Dépose et pose professionnelle',
              description: 'Démontage sans dégât, insertion du nouveau cylindre, vérification de la saillie parfaite.'
          },
          {
              icon: '🗝️',
              title: 'Remise et test des nouvelles clés',
              description: 'Remise du jeu de clés neuves (généralement 3) et test minutieux du fonctionnement.'
          },
          {
              icon: '🧾',
              title: 'Garantie et facturation',
              description: 'Facture détaillée et documents de garantie du fabricant sur le cylindre.'
          }
      ]
  });

  servicesData = signal({
      title: 'Quel cylindre choisir pour votre porte à Paris 1 ?',
      subtitle: 'Le choix est crucial. Nous vous conseillons parmi nos modèles adaptés à vos besoins',
      services: [
          {
              icon: '🔑',
              title: 'Cylindre Standard Européen',
              description: 'Remplacement à l\'identique pour un fonctionnement restauré.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 80€'
          },
          {
              icon: '🛡️',
              title: 'Cylindre Haute Sécurité A2P',
              description: 'Recommandé pour toute entrée : anti-perçage, anti-crochetage, anti-arrachage.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 120€'
          },
          {
              icon: '🔄',
              title: 'Cylindre à Double Entrée',
              description: 'S\'ouvre des deux côtés avec une clé, pour portes sans bouton intérieur.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 90€'
          },
          {
              icon: '🔘',
              title: 'Cylindre à Bouton (1/2 tour)',
              description: 'Ouverture extérieure avec clé, intérieure avec bouton - très pratique.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 100€'
          },
          {
              icon: '🛡️',
              title: 'Cylindre "Protège Bouchon"',
              description: 'Protection renforcée contre le perçage par l\'avant.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 130€'
          },
          {
              icon: '🔑',
              title: 'Système à Clé Unique',
              description: 'Harmonisation de plusieurs serrures avec un même cylindre.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          }
      ],
      ctaText: 'Appelez pour un conseil personnalisé',
      ctaPhone: '01 23 45 67 89'
  });

  pricingData = signal({
      title: 'Tarification claire pour un remplacement de cylindre à Paris 1',
      description: 'Le prix d\'un remplacement de cylindre est simple et prévisible : coût du cylindre neuf + main d\'œuvre de remplacement.',
      highlight: 'Notre engagement : Devis unique et clair, pas de frais cachés, prix correspondant au cylindre choisi et à sa pose professionnelle.',
      features: [
          'Coût du cylindre neuf selon modèle',
          'Main d\'œuvre forfaitaire pour intervention rapide',
          'Pas de frais de déplacement supplémentaires',
          'Investissement sécurité minime pour protection maximale',
          'Comparaison avantageuse avec risque de cambriolage'
      ]
  });

  conclusionData = signal({
      title: 'Redonnez un cœur neuf et sécurisé à votre porte à Paris 1',
      description: 'Le cylindre est un petit composant au rôle immense. Son remplacement, lorsqu\'il est réalisé par un expert avec une pièce de qualité, est l\'acte de maintenance de sécurité le plus efficace. En confiant votre remplacement de cylindre à Paris 1 à notre entreprise, vous optez pour la simplicité, l\'efficacité et la tranquillité d\'esprit.',
      ctaText: 'Ne sous-estimez pas l\'importance de cette petite pièce',
      ctaPhone: '01 23 45 67 89',
      ctaDescription: 'Elle verrouille votre plus grand bien : votre sécurité'
  });

  faqData = signal({
      title: 'FAQ : Remplacement Cylindre Paris 1',
      questions: [
          {
              question: 'Puis-je changer le cylindre moi-même ?',
              answer: 'Techniquement possible, mais un professionnel garantit : le choix de la dimension exacte, la sélection d\'un modèle adapté à votre niveau de sécurité, une pose parfaite (alignement, serrage) évitant usure prématurée et jeu, et la garantie sur la pièce et la pose. Une erreur de mesure ou de serrage peut endommager la serrure.'
          },
          {
              question: 'Quelle est la différence entre un cylindre standard et un cylindre A2P ?',
              answer: 'Un cylindre standard est une pièce mécanique qui fait tourner la serrure. Un cylindre A2P (Assurance Prévention Protection) est une pièce certifiée ayant passé des tests de résistance contre l\'effraction. Il possède des caractéristiques renforcées : bouchon anti-perçage, goupilles anti-crochetage, carbure anti-arrachage et résistance au bumping. C\'est la norme de sécurité recommandée par les assureurs.'
          },
          {
              question: 'Combien de temps prend le remplacement d\'un cylindre ?',
              answer: 'L\'intervention elle-même est très rapide. Une fois sur place et la porte ouverte, le démontage de l\'ancien et la pose du nouveau prennent entre 10 et 20 minutes. Le temps total dépend surtout de notre délai de déplacement jusqu\'à votre adresse dans Paris 1.'
          },
          {
              question: 'Dois-je changer toutes les serrures de mon appartement si je perds mes clés ?',
              answer: 'Pas nécessairement. Si toutes vos serrures (entrée, portes intérieures) sont actionnées par la même clé (système à clé unique), changer le cylindre de la porte d\'entrée suffit. Si vous avez des serrures différentes avec des clés distinctes, vous pouvez décider de ne changer que le cylindre de la porte concernée par la perte. Nous pouvons aussi vous proposer d\'harmoniser toutes vos serrures avec un même cylindre pour plus de simplicité.'
          },
          {
              question: 'Que faites-vous de l\'ancien cylindre ? Puis-je le garder ?',
              answer: 'Bien sûr. Nous vous remettons systématiquement l\'ancien cylindre. C\'est important pour les locataires qui doivent parfois le restituer au propriétaire. Si vous n\'en voulez pas, nous nous chargeons de son recyclage.'
          }
      ]
  });

}

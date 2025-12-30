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
  selector: 'app-changement-cylindre-serrure',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './changement-cylindre-serrure.component.html',
  styleUrl: './changement-cylindre-serrure.component.scss'
})
export class ChangementCylindreSerrureComponent implements  OnInit {


  private title = inject(Title);
  private meta = inject(Meta);
  platformId = inject(PLATFORM_ID);

  ngOnInit(): void {

    this.title.setTitle(
      'Changement de Cylindre de Serrure Paris 1 (75001) | Intervention Rapide & Sécurisée'
    );

    this.meta.addTags([
      {
        name: 'description',
        content: 'Changement de cylindre de serrure à Paris 1 en 30 minutes. Cylindre standard ou A2P, anciennes clés invalidées, devis clair avant intervention.'
      },
      {
        name: 'keywords',
        content: 'changement cylindre serrure Paris 1, remplacement cylindre 75001, cylindre A2P Paris, serrurier cylindre Paris'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Serrurier Paris 1' },

      /* Open Graph */
      {
        property: 'og:title',
        content: 'Changement de Cylindre de Serrure à Paris 1 – Sécurité Immédiate'
      },
      {
        property: 'og:description',
        content: 'Remplacement de cylindre de serrure à Paris 1 : intervention express, sécurité A2P, devis transparent.'
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
            "image": "https://i.ibb.co/Myq313Bp/cylindre-1.png",
            "priceRange": "€€",
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
            "@id": "https://www.tonsite.fr/changement-cylindre-serrure-paris-1#service",
            "name": "Changement de cylindre de serrure",
            "serviceType": "Remplacement de cylindre",
            "provider": {
              "@id": "https://www.tonsite.fr/#locksmith"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Paris 1"
            },
            "description": "Changement de cylindre de serrure à Paris 1 suite à une perte de clés, un cylindre HS ou un besoin de sécurité renforcée A2P.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock"
            }
          },

          {
            "@type": "FAQPage",
            "@id": "https://www.tonsite.fr/changement-cylindre-serrure-paris-1#faq",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Puis-je changer le cylindre moi-même pour économiser ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "C’est possible, mais risqué. Une erreur de mesure ou une mauvaise installation peut rendre la serrure inefficace. Un serrurier garantit le bon cylindre et une pose sécurisée."
                }
              },
              {
                "@type": "Question",
                "name": "Cylindre A2P ou standard : quelle est la différence ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le cylindre A2P est certifié contre le perçage, le crochetage et l’arrachage. Il est recommandé par les assureurs pour une sécurité maximale."
                }
              },
              {
                "@type": "Question",
                "name": "Combien de temps dure l’intervention ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Le remplacement du cylindre prend généralement entre 10 et 20 minutes sur place."
                }
              },
              {
                "@type": "Question",
                "name": "Dois-je changer toutes les serrures après une perte de clés ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non. Dans la majorité des cas, seul le cylindre de la porte concernée doit être remplacé."
                }
              },
              {
                "@type": "Question",
                "name": "Mes anciennes clés fonctionnent-elles encore après le changement ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non. Les anciennes clés sont immédiatement invalidées avec le nouveau cylindre."
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
      title: 'Changement de Cylindre de Serrure à Paris 1',
      subtitle: 'Sécurité & Sérénité en 30 Minutes',
      description: 'Votre cylindre de serrure est HS à Paris 1 ? Notre changement express vous sécurise immédiatement. Le cylindre de votre serrure, ce petit boîtier métallique où s\'insère votre clé, est le gardien silencieux de votre porte... Notre entreprise de serrurerie à Paris réalise des changements de cylindre de serrure professionnels à Paris 1.',
      ctaText: 'Pour un changement de cylindre de serrure rapide et sécurisé à Paris 1, appelez nos experts',
      ctaPhone: '01 23 45 67 89',
      backgroundImage: 'https://i.ibb.co/Myq313Bp/cylindre-1.png'
  });

  whyChooseData = signal({
      title: 'Pourquoi le cylindre est-il si important et quand faut-il le changer ?',
      description: 'Le cylindre, ou barillet, est le cerveau de votre serrure. C\'est lui qui reconnaît le profil unique de votre clé et commande le verrouillage. Son changement est impératif dans ces situations courantes à Paris 1.',
      benefits: [
          {
              icon: '🔑',
              title: 'Perte ou vol de clés',
              description: 'Urgence n°1 : seule façon de garantir que les clés perdues ne pourront plus ouvrir votre porte.'
          },
          {
              icon: '🏠',
              title: 'À l\'emménagement',
              description: 'Mesure de sécurité fondamentale en ignorant qui détient des doubles des anciennes clés.'
          },
          {
              icon: '⚙️',
              title: 'Usure ou dysfonctionnement',
              description: 'Clé qui tourne difficilement, reste coincée : signe de fin de vie du cylindre.'
          },
          {
              icon: '🛡️',
              title: 'Amélioration de la sécurité',
              description: 'Opportunité de passer à un cylindre haute sécurité A2P pour dissuader les cambrioleurs.'
          }
      ]
  });

  commitmentsData = signal({
      title: 'Notre protocole pour un changement de cylindre parfait à Paris 1',
      subtitle: 'Notre intervention est structurée pour un résultat optimal, rapide et garanti',
      commitments: [
          {
              icon: '🔍',
              title: 'Diagnostic précis et conseil',
              description: 'Mesure exacte, vérification de l\'état et présentation des options avec focus sur A2P.'
          },
          {
              icon: '📋',
              title: 'Devis clair et choix du modèle',
              description: 'Devis détaillé et ferme incluant prix du nouveau cylindre et main d\'œuvre de pose.'
          },
          {
              icon: '🔧',
              title: 'Dépose et pose méticuleuse',
              description: 'Dépose sans dégât, insertion du cylindre neuf, vérification de la saillie parfaite.'
          },
          {
              icon: '🗝️',
              title: 'Tests exhaustifs et remise des clés',
              description: 'Test du nouveau cylindre des dizaines de fois avec les nouvelles clés (généralement 3).'
          },
          {
              icon: '🧾',
              title: 'Facturation et garantie',
              description: 'Facture claire et documents de garantie du fabricant sur le cylindre.'
          }
      ]
  });

  servicesData = signal({
      title: 'Quel cylindre choisir pour votre serrure à Paris 1 ?',
      subtitle: 'Nous vous guidons dans le choix technique adapté à vos besoins',
      services: [
          {
              icon: '🔑',
              title: 'Cylindre Européen Standard',
              description: 'Remplacement à l\'identique en cas d\'usure simple.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 80€'
          },
          {
              icon: '🛡️',
              title: 'Cylindre Haute Sécurité A2P',
              description: 'Recommandé : protections anti-perçage, anti-crochetage, anti-arrachage.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 120€'
          },
          {
              icon: '🔄',
              title: 'Cylindre à Double Entrée',
              description: 'S\'ouvre des deux côtés avec une clé, pour portes sans bouton.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 90€'
          },
          {
              icon: '🔘',
              title: 'Cylindre 1/2 Tour (à Bouton)',
              description: 'Ouverture extérieure avec clé, intérieure avec bouton - confort quotidien.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 100€'
          },
          {
              icon: '🛡️',
              title: 'Cylindre à Protège Bouchon',
              description: 'Renfort frontal contre le perçage pour sécurité renforcée.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 130€'
          },
          {
              icon: '🔑',
              title: 'Système à Clé Unique',
              description: 'Harmonisation de toutes vos serrures avec un même cylindre.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          }
      ],
      ctaText: 'Appelez pour un conseil personnalisé',
      ctaPhone: '01 23 45 67 89'
  });

  pricingData = signal({
      title: 'Tarification transparente pour un changement de cylindre à Paris 1',
      description: 'Le coût est simple, prévisible et se décompose ainsi dans votre devis : prix du cylindre neuf + main d\'œuvre de pose.',
      highlight: 'Notre engagement : Zéro surprise. Devis contractuel, vous payez exactement le montant annoncé.',
      features: [
          'Prix du cylindre neuf selon modèle',
          'Main d\'œuvre forfaitaire pour pose rapide',
          'Investissement modique pour sécurité durable',
          'Comparaison avantageuse avec risques d\'intrusion',
          'Transparence totale sur tous les coûts'
      ]
  });

  conclusionData = signal({
      title: 'Redonnez toute sa force au cœur de votre serrure à Paris 1',
      description: 'Le changement de cylindre de serrure est l\'acte de maintenance de sécurité le plus efficace et le plus rapide. En confiant cette tâche à notre entreprise spécialisée dans le 1er arrondissement de Paris, vous optez pour la simplicité, l\'expertise et la qualité.',
      ctaText: 'Ne laissez pas un petit composant devenir votre plus grande faille',
      ctaPhone: '01 23 45 67 89',
      ctaDescription: 'Optez pour un changement expert'
  });

  faqData = signal({
      title: 'FAQ : Changement Cylindre Serrure Paris 1',
      questions: [
          {
              question: 'Puis-je changer le cylindre moi-même pour économiser ?',
              answer: 'Vous pouvez essayer, mais les risques sont élevés. Sans mesure ultra-précise (longueur, entraxe), vous risquez d\'acheter un cylindre inadapté. Une mauvaise installation (mauvais alignement, serrage trop fort/faible) peut endommager le nouveau cylindre ou la serrure. Enfin, vous n\'aurez pas la garantie professionnelle ni le conseil sur les modèles haute sécurité. Le gain est minime face aux risques encourus.'
          },
          {
              question: 'Cylindre A2P ou standard : quelle est la vraie différence ?',
              answer: 'La différence est énorme en termes de sécurité. Standard : une pièce mécanique simple. A2P : une pièce certifiée et testée pour résister plus de 15 minutes aux techniques d\'effraction courantes : bouchon en carbure anti-perçage, goupilles anti-crochetage, corps renforcé anti-arrachage. C\'est le niveau de sécurité recommandé par les assureurs et le plus dissuasif.'
          },
          {
              question: 'Combien de temps prend l\'intervention sur place ?',
              answer: 'L\'intervention pure (dépose + pose) est extrêmement rapide : entre 10 et 20 minutes une fois le bon cylindre en main. Le temps total inclut notre déplacement jusqu\'à chez vous dans Paris 1 (objectif <30 min en urgence), le diagnostic et les explications.'
          },
          {
              question: 'Dois-je changer toutes les serrures si je perds les clés de mon appartement ?',
              answer: 'Pas forcément. Tout dépend de votre système de clés. Si vous avez une clé unique pour l\'entrée et les portes intérieures, changer le cylindre de la porte d\'entrée suffit. Si vous avez des clés différentes, vous pouvez ne changer que le cylindre concerné. Nous pouvons aussi vous proposer de créer un système à clé unique lors de ce changement.'
          },
          {
              question: 'Que deviennent mes anciennes clés après le changement ?',
              answer: 'Elles deviennent immédiatement et définitivement inutiles pour la nouvelle serrure. Vous pouvez les jeter ou les conserver en souvenir. Seules les nouvelles clés que nous vous remettons fonctionneront. C\'est tout l\'intérêt du changement après une perte ou un vol.'
          }
      ]
  });

}

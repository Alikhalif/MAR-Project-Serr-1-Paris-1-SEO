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
  selector: 'app-pose-porte-blindee',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './pose-porte-blindee.component.html',
  styleUrl: './pose-porte-blindee.component.scss'
})
export class PosePorteBlindeeComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  platformId = inject(PLATFORM_ID);
  site: SiteConfig = inject(SITE_CONFIG_TOKEN);

  ngOnInit(): void {

    this.title.setTitle(
      'Pose Porte Blindée Paris 1 (75001) | Serrurier Certifié A2P 24h/24'
    );

    this.meta.addTags([
      {
        name: 'description',
        content: 'Pose de porte blindée à Paris 1 (75001) par un serrurier expert. Installation certifiée A2P, sécurité maximale, devis gratuit, intervention rapide 24h/24.'
      },
      {
        name: 'keywords',
        content: 'pose porte blindée Paris 1, installation porte blindée 75001, serrurier porte blindée Paris, porte blindée A2P Paris 1'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Serrurier Paris 1' },
      {
        property: 'og:title',
        content: 'Pose Porte Blindée à Paris 1 – Installation Sécurisée'
      },
      {
        property: 'og:description',
        content: 'Installation professionnelle de porte blindée à Paris 1. Sécurité certifiée A2P, devis gratuit et pose garantie.'
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
            "image": "https://i.ibb.co/hFphMHbG/pose-blindee-4.jpg",
            "telephone": "01 23 45 67 89",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Paris 1er arrondissement",
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
            "@id": "https://www.tonsite.fr/pose-porte-blindee-paris-1#service",
            "serviceType": "Pose de porte blindée",
            "provider": {
              "@id": "https://www.tonsite.fr/#locksmith"
            },
            "areaServed": {
              "@type": "AdministrativeArea",
              "name": "Paris 1"
            },
            "description": "Pose professionnelle de porte blindée à Paris 1 (75001). Installation certifiée A2P, sécurité maximale et pose garantie.",
            "offers": {
              "@type": "Offer",
              "priceCurrency": "EUR",
              "price": "Sur devis",
              "availability": "https://schema.org/InStock"
            }
          },

          {
            "@type": "FAQPage",
            "@id": "https://www.tonsite.fr/pose-porte-blindee-paris-1#faq",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Dois-je choisir une porte sur mesure ou une porte standard ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Si votre ouverture est standard, une porte standard est plus économique. Pour une ouverture hors norme, une porte sur mesure est nécessaire. Une prise de mesures gratuite permet de déterminer la meilleure option."
                }
              },
              {
                "@type": "Question",
                "name": "La pose est-elle longue et bruyante ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La pose d’une porte blindée prend généralement une journée complète (6 à 8 heures). Certaines étapes peuvent être bruyantes, mais l’installation est réalisée proprement et sans précipitation."
                }
              },
              {
                "@type": "Question",
                "name": "Puis-je conserver mon ancien cylindre ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Non. Une porte blindée est livrée avec un cylindre neuf. Il est conseillé d’opter pour un cylindre haute sécurité certifié A2P."
                }
              },
              {
                "@type": "Question",
                "name": "La porte blindée est-elle garantie ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui. La porte bénéficie de la garantie constructeur et la pose est garantie au minimum 2 ans contre tout défaut d’installation."
                }
              },
              {
                "@type": "Question",
                "name": "Existe-t-il des options connectées ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Oui. Il est possible d’installer des portes blindées avec digicode, badge, empreinte digitale ou ouverture via smartphone."
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
    title: 'Pose Porte Blindée à Paris 1',
    subtitle: 'L\'Expertise d\'une Installation Sécurisée',
    description: 'Vous projetez <strong>la pose d\'une porte blindée à Paris 1 ?</strong> Confiez l\'installation à nos experts aguerris pour une intégration parfaite, aux normes, qui préserve toutes les certifications de sécurité de votre équipement.',
    ctaText: 'Demander un devis gratuit',
    ctaPhone: this.site.phone,
    backgroundImage: 'https://i.ibb.co/hFphMHbG/pose-blindee-4.jpg'
  });

  whyChooseData = signal({
    title: 'Pourquoi l\'expertise est cruciale pour la pose de votre porte blindée ?',
    description: 'Une porte blindée mal installée perd ses certifications et ses performances de sécurité. Seul un professionnel garantit une intégration optimale.',
    benefits: [
      {
        icon: '📐',
        title: 'Préparation et réglages millimétrés',
        description: 'Agrandissement et consolidation du bâti si nécessaire, puis réglages au laser pour un alignement parfait du vantail.'
      },
      {
        icon: '🛡️',
        title: 'Respect des normes et certifications',
        description: 'Pose conforme aux exigences A2P/NF pour maintenir la validité des garanties constructeur et assurer une sécurité optimale.'
      },
      {
        icon: '🔩',
        title: 'Fixation robuste et durable',
        description: 'Ancrage profond dans les murs avec chevilles et tiges adaptées pour supporter le poids et résister aux tentatives d\'arrachement.'
      },
      {
        icon: '✅',
        title: 'Fonctionnement parfait garanti',
        description: 'Engagement fluide de tous les pênes multipoints, sans frottement, pour une utilisation quotidienne sans souci.'
      }
    ]
  });

  commitmentsData = signal({
    title: 'Nos engagements pour une pose de porte blindée parfaite à Paris 1',
    subtitle: 'Notre processus rigoureux garantit une installation aux normes, esthétique et durable',
    commitments: [
      {
        icon: '🔍',
        title: 'Diagnostic et conseil préalable gratuit',
        description: 'Prise de mesures précises, analyse du bâti et recommandations sur le modèle et le niveau de sécurité adaptés à votre besoin.'
      },
      {
        icon: '🚧',
        title: 'Préparation professionnelle du bâti',
        description: 'Démontage soigneux, mise à dimension et consolidation de l\'ouverture si nécessaire pour accueillir le cadre renforcé.'
      },
      {
        icon: '🎯',
        title: 'Pose et réglage de haute précision',
        description: 'Mise en place au niveau laser, réglages tridimensionnels des paumelles pour un jeu parfait et sans frottement.'
      },
      {
        icon: '🧪',
        title: 'Tests de sécurité complets',
        description: 'Vérification point par point du verrouillage, test de résistance et contrôle de l\'étanchéité avant remise des clés.'
      },
      {
        icon: '📜',
        title: 'Double garantie fournie',
        description: 'Garantie constructeur sur la porte + garantie sur notre pose (2 ans minimum) transmises par écrit.'
      }
    ]
  });

  servicesData = signal({
    title: 'Nos prestations d\'installation de porte blindée à Paris 1',
    subtitle: 'Un service clé en main, de la sélection du modèle à la mise en service',
    services: [
      {
        icon: '🚪',
        title: 'Pose complète porte blindée standard',
        description: 'Fourniture et installation d\'une porte blindée de série, adaptée aux ouvertures de dimensions courantes.',
        image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=600&q=80',
        price: 'À partir de 1200€*'
      },
      {
        icon: '📏',
        title: 'Pose de porte blindée sur mesure',
        description: 'Conception, fabrication et installation d\'une porte adaptée à vos mesures spécifiques (ouverture hors-norme, forme particulière).',
        image: 'https://images.unsplash.com/photo-1577493340887-0b78f5b3b6f5?w=600&q=80',
        price: 'Sur devis personnalisé'
      },
      {
        icon: '🔄',
        title: 'Remplacement d\'ancienne porte blindée',
        description: 'Dépose de l\'ancien modèle et pose d\'une nouvelle porte blindée performante, sans dégradation du bâti.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
        price: 'À partir de 1100€*'
      },
      {
        icon: '🔐',
        title: 'Pack sécurité complète A2P',
        description: 'Pose de porte blindée certifiée + cylindre haute sécurité A2P + serrure multipoints renforcée pour une protection maximale.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        price: 'À partir de 1400€*'
      }
    ],
    ctaText: 'Planifier une étude de projet',
    ctaPhone: '01 23 45 67 89',
    note: '*Prix indicatif pour modèle d\'entrée de gamme, pose incluse. Varie selon le modèle, la finition et les options.'
  });

  pricingData = signal({
    title: 'Transparence tarifaire : Coût d\'une pose de porte blindée à Paris 1',
    description: 'Investir dans une porte blindée, c\'est investir dans votre sécurité à long terme. Notre devis détaillé vous présente clairement chaque poste.',
    highlight: 'Devis exhaustif et contractuel - Installation clé en main sans surprise.',
    features: [
      'Prix de la porte blindée (standard ou sur mesure)',
      'Main d\'œuvre complète (démontage, préparation, pose, réglages)',
      'Options de sécurité (cylindre A2P, serrures supplémentaires)',
      'Garanties constructeur et main d\'œuvre incluses'
    ]
  });

  conclusionData = signal({
    title: 'Votre partenaire expert pour une sécurité pérenne à Paris 1',
    description: 'Une porte blindée est l\'ultime rempart. Son installation ne doit rien laisser au hasard. En nous confiant la pose, vous choisissez l\'assurance d\'une forteresse moderne, parfaitement intégrée à votre logement parisien, esthétique et surtout, d\'une efficacité sécurité préservée pour les décennies à venir.',
    ctaText: 'Démarrer votre projet sécurité',
    ctaPhone: '01 23 45 67 89',
    ctaDescription: 'Diagnostic gratuit et conseil expert pour votre porte blindée à Paris 1 !'
  });

  faqData = signal({
    title: 'FAQ : Pose Porte Blindée Paris 1',
    questions: [
      {
        question: 'Dois-je choisir une porte sur mesure ou une porte standard ?',
        answer: 'Cela dépend de vos mesures. Si votre ouverture est de taille standard (dimensions courantes), une porte standard est plus économique. Si votre embrasure est hors norme, arrondie ou très grande, une porte sur mesure sera nécessaire. Notre prise de mesures gratuite déterminera la meilleure option technique et économique pour vous.'
      },
      {
        question: 'La pose est-elle très bruyante et longue ?',
        answer: 'La phase de démontage et de préparation du bâti peut être bruyante (perceuse à percussion). La pose et les réglages sont plus silencieux. En termes de durée, prévoyez une journée complète de travail (6 à 8 heures) pour une installation dans les règles de l\'art, sans précipitation. Cela inclut le temps de séchage des éventuels scellements.'
      },
      {
        question: 'Puis-je conserver mon ancien cylindre ou mes anciennes clés ?',
        answer: 'Non. Une nouvelle porte blindée est livrée avec son propre cylindre neuf. Vous aurez donc de nouvelles clés. C\'est l\'occasion idéale d\'opter pour un cylindre A2P de haute sécurité. Si vous souhaitez conserver un jeu de clés unique pour plusieurs accès (porte d\'entrée, boîte aux lettres, etc.), nous pouvons harmoniser les cylindres en conséquence.'
      },
      {
        question: 'La porte posée est-elle garantie ?',
        answer: 'Oui, par une double garantie : 1) La garantie constructeur sur la porte elle-même (généralement 2 à 10 ans selon les marques et modèles). 2) Notre garantie sur la pose (2 ans minimum) contre tout défaut de mise en œuvre. Tous les documents de garantie vous sont remis après l\'installation.'
      },
      {
        question: 'Proposez-vous des portes avec des options connectées ?',
        answer: 'Absolument. Nous pouvons vous proposer et installer des portes blindées équipées de systèmes d\'accès modernes : digicode, lecteur de badge, empreinte digitale, ouverture via smartphone ou reconnaissance faciale. Nous étudions avec vous la solution la plus adaptée à votre usage, votre confort et votre niveau de sécurité souhaité.'
      }
    ]
  });
}

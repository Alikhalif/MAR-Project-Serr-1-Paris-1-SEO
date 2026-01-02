import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
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
  selector: 'app-depannage-serrure-cassee',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './depannage-serrure-cassee.component.html',
  styleUrl: './depannage-serrure-cassee.component.scss'
})
export class DepannageSerrureCasseeComponent {


  private title = inject(Title);
  private meta = inject(Meta);
  platformId = inject(PLATFORM_ID);
  site: SiteConfig = inject(SITE_CONFIG_TOKEN);

  ngOnInit(): void {

    this.title.setTitle(
      'Serrure Cassée Paris 1 (75001) | Dépannage Serrurier Urgent 24h/24'
    );

    this.meta.addTags([
      {
        name: 'description',
        content: 'Serrure cassée à Paris 1 ? Dépannage serrurier urgent 24h/24. Ouverture de porte, réparation ou remplacement immédiat. Devis gratuit avant intervention.'
      },
      {
        name: 'keywords',
        content: 'serrure cassée Paris 1, dépannage serrure cassée 75001, serrurier urgence Paris 1, serrure bloquée Paris'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Serrurier Paris 1' },

      /* Open Graph */
      {
        property: 'og:title',
        content: 'Serrure Cassée à Paris 1 – Dépannage Serrurier Urgent'
      },
      {
        property: 'og:description',
        content: 'Intervention immédiate pour serrure cassée à Paris 1. Ouverture sans dégâts, remplacement A2P possible.'
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
      "priceRange": "€€",
      "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Paris",
        "postalCode": "75001",
        "addressCountry": "FR"
      },
      "openingHours": "Mo-Su 00:00-23:59",
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Paris 1"
      },
      "url": "https://www.tonsite.fr"
    },

    {
      "@type": "Service",
      "@id": "https://www.tonsite.fr/serrure-cassee-paris-1#service",
      "name": "Dépannage serrure cassée à Paris 1",
      "serviceType": "Dépannage serrurerie urgence",
      "provider": {
        "@id": "https://www.tonsite.fr/#locksmith"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Paris 1"
      },
      "description": "Dépannage urgent de serrure cassée à Paris 1 : ouverture de porte, réparation ou remplacement de serrure et cylindre A2P.",
      "availableChannel": {
        "@type": "ServiceChannel",
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "01 23 45 67 89",
          "contactType": "emergency"
        }
      }
    },

    {
      "@type": "FAQPage",
      "@id": "https://www.tonsite.fr/serrure-cassee-paris-1#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Peut-on ouvrir une porte avec une serrure cassée ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Même avec un mécanisme cassé, un serrurier expérimenté peut ouvrir la porte sans dégâts grâce à des techniques professionnelles."
          }
        },
        {
          "@type": "Question",
          "name": "Faut-il obligatoirement changer toute la serrure ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Non. Si seul le cylindre est cassé, son remplacement suffit. Le diagnostic sur place détermine la solution la plus économique."
          }
        },
        {
          "@type": "Question",
          "name": "Une serrure cassée est-elle une urgence ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Une serrure cassée ne garantit plus la sécurité du logement. Une intervention rapide est fortement recommandée."
          }
        },
        {
          "@type": "Question",
          "name": "Installez-vous des serrures plus sécurisées en remplacement ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Nous proposons des serrures et cylindres certifiés A2P pour renforcer durablement votre sécurité."
          }
        },
        {
          "@type": "Question",
          "name": "Les pièces remplacées sont-elles garanties ?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Oui. Les pièces bénéficient de la garantie fabricant et la main d’œuvre est garantie au minimum 2 ans."
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
    title: 'Serrure Cassée à Paris 1 ?',
    subtitle: 'Notre Intervention d\'Urgence Vous Rouvre les Portes',
    description: 'Votre <strong>serrure est cassée à Paris 1 ?</strong> Notre expertise vous dépanne et vous resécurise en urgence. Le bruit sec d\'une pièce qui cède à l\'intérieur de la serrure, une clé qui tourne désespérément dans le vide... Notre entreprise de serrurerie à Paris intervient spécifiquement pour le dépannage de serrure cassée à Paris 1.',
    ctaText: 'Votre serrure est cassée à Paris 1 ? Appelez l\'urgence',
    ctaPhone: this.site.phone,
    backgroundImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80'
  });

  whyChooseData = signal({
      title: 'Pourquoi une serrure casse-t-elle ? Comprendre les causes pour mieux agir',
      description: 'Une serrure n\'est pas invincible. Elle subit des contraintes mécaniques à chaque utilisation et peut céder pour plusieurs raisons.',
      benefits: [
          {
              icon: '⚙️',
              title: 'Usure naturelle avancée',
              description: 'Pièces internes (ressorts, goupilles, pênes) qui fatiguent après des années de service.'
          },
          {
              icon: '🗝️',
              title: 'Clés abîmées ou copies déformées',
              description: 'Clé trop usée ou mal dupliquée provoquant des contraintes anormales sur le mécanisme.'
          },
          {
              icon: '🚨',
              title: 'Tentative de forçage ou d\'effraction',
              description: 'Dommages causés par une tentative d\'intrusion, visible ou non.'
          },
          {
              icon: '⚠️',
              title: 'Éviter l\'aggravation des dégâts',
              description: 'Forcer la porte peut causer des dommages irréversibles et compliquer la réparation.'
          }
      ]
  });

  commitmentsData = signal({
      title: 'Notre protocole d\'intervention d\'urgence pour serrure cassée à Paris 1',
      subtitle: 'Notre intervention est conçue pour la résolution rapide et professionnelle de cette panne critique',
      commitments: [
          {
              icon: '🔍',
              title: 'Diagnostic d\'urgence',
              description: 'Détermination de l\'accès possible et utilisation de techniques d\'ouverture non destructives.'
          },
          {
              icon: '🛠️',
              title: 'Identification de la pièce cassée',
              description: 'Démontage partiel pour identifier le composant défaillant : cylindre, pêne, mécanisme.'
          },
          {
              icon: '📋',
              title: 'Proposition de solution et devis transparent',
              description: 'Options de réparation ou remplacement avec devis détaillé et ferme pour validation.'
          },
          {
              icon: '⚡',
              title: 'Réparation ou remplacement immédiat',
              description: 'Stock de pièces détachées dans nos véhicules pour intervention sur place.'
          },
          {
              icon: '✅',
              title: 'Tests de sécurité et remise des clés',
              description: 'Test approfondi du fonctionnement et remise des nouvelles clés si nécessaire.'
          }
      ]
  });

  servicesData = signal({
      title: 'Types de pannes et nos solutions pour une serrure cassée dans le 1er',
      subtitle: 'Nous intervenons sur tous les types de défaillances cassantes avec des solutions adaptées',
      services: [
          {
              icon: '🔑',
              title: 'Cylindre (barillet) cassé',
              description: 'Clé tourne librement sans actionner la serrure. Remplacement du cylindre.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 120€'
          },
          {
              icon: '🚪',
              title: 'Pêne de serrure cassé ou bloqué',
              description: 'Pêne resté en position sortie ou rentrée. Démontage et remplacement.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 140€'
          },
          {
              icon: '🔒',
              title: 'Mécanisme de crémone cassé',
              description: 'Serrure 3 points avec pênes latéraux bloqués. Réparation ou remplacement.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 160€'
          },
          {
              icon: '🔩',
              title: 'Ressort de goupille cassé',
              description: 'Clé entre mais ne tourne pas. Nettoyage et remplacement des ressorts.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 100€'
          },
          {
              icon: '🛡️',
              title: 'Serrure de porte blindée cassée',
              description: 'Panne complexe haute sécurité. Expertise spécifique et dépannage.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 180€'
          },
          {
              icon: '🔧',
              title: 'Ouverture de porte à serrure cassée',
              description: 'Intervention d\'urgence pour ouvrir sans forcer ni endommager la porte.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 90€'
          }
      ],
      ctaText: 'Appelez pour une intervention d\'urgence',
      ctaPhone: '01 23 45 67 89'
  });

  pricingData = signal({
      title: 'Tarification pour le dépannage d\'une serrure cassée à Paris 1',
      description: 'Le coût dépend de la nature de la panne et de la solution retenue, avec une transparence totale sur tous les éléments.',
      highlight: 'Notre engagement : Le devis est votre bouclier contre les surprises, détaillant chaque poste de coût.',
      features: [
          'Forfait d\'intervention d\'urgence',
          'Main d\'œuvre pour ouverture et réparation',
          'Prix des pièces de remplacement',
          'Accord préalable sur tous les coûts',
          'Sécurité rétablie fiable et durable'
      ]
  });

  conclusionData = signal({
      title: 'Une serrure cassée est une urgence, pas une fatalité à Paris 1',
      description: 'Une serrure qui lâche brusquement peut sembler catastrophique, mais avec le bon artisan, c\'est un problème résoluble rapidement. En faisant appel à notre service spécialisé dans le dépannage de serrure cassée à Paris 1, vous choisissez la réactivité, l\'expertise technique et la capacité à vous fournir une solution clé en main.',
      ctaText: 'Ne restez pas bloqué(e) par un composant défaillant',
      ctaPhone: '01 23 45 67 89',
      ctaDescription: 'Notre expertise redonne vie à votre sécurité'
  });

  faqData = signal({
      title: 'FAQ : Serrure Cassée Paris 1',
      questions: [
          {
              question: 'Pouvez-vous ouvrir une porte dont la serrure est cassée à l\'intérieur ?',
              answer: 'Oui, c\'est notre spécialité. Même si le mécanisme est bloqué ou cassé, nous utilisons des techniques de crochetage ou de manipulation du cylindre ou du pêne pour déverrouiller la porte sans la forcer et sans causer de dégâts supplémentaires. L\'objectif est de préserver votre porte pour la réparation ou le remplacement à venir.'
          },
          {
              question: 'Vais-je forcément devoir changer toute ma serrure ?',
              answer: 'Pas forcément. Tout dépend de la pièce cassée. Si seul le cylindre est HS, son remplacement suffit. Si le boîtier de la serrure (en applique ou à larder) est cassé, il faut le changer. Si c\'est le mécanisme de crémone d\'une porte blindée, nous pouvons parfois le réparer ou ne changer que la partie défectueuse. Notre diagnostic déterminera la solution la plus économique et sécurisée.'
          },
          {
              question: 'Si je viens d\'emménager et que la serrure casse, suis-je responsable ?',
              answer: 'Cela dépend de l\'état de la serrure. Si elle était vétuste et usée à votre arrivée, la responsabilité de son remplacement pourrait incomber au propriétaire. Si elle a cassé suite à une mauvaise manipulation ou avec vos clés, elle pourrait être à votre charge. Dans le doute, contactez votre propriétaire ou votre agence tout en programmant notre intervention pour ne pas rester en insécurité. Nous pouvons vous fournir une facture détaillée pour le justifier.'
          },
          {
              question: 'Proposez-vous des serrures de meilleure qualité en remplacement ?',
              answer: 'Absolument. Profitez de ce remplacement forcé pour améliorer votre sécurité. Nous vous proposerons des cylindres certifiés A2P et des serrures de marques réputées (Vachette, Fichet, Picard, etc.) bien plus résistantes que l\'équipement d\'origine souvent basique. C\'est l\'occasion de transformer un problème en upgrade sécurité.'
          },
          {
              question: 'Garantissez-vous les serrures que vous installez en remplacement ?',
              answer: 'Oui, à double titre : 1) Garantie pièces : Les serrures et cylindres neufs bénéficient de la garantie du fabricant (souvent 2 à 5 ans). 2) Garantie main d\'œuvre : Notre installation est garantie généralement 2 ans. Ces garanties vous sont transmises par écrit sur la facture.'
          }
      ]
  });
}

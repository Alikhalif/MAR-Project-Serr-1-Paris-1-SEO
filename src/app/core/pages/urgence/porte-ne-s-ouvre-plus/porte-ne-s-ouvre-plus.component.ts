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
  selector: 'app-porte-ne-s-ouvre-plus',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './porte-ne-s-ouvre-plus.component.html',
  styleUrl: './porte-ne-s-ouvre-plus.component.scss'
})
export class PorteNeSOuvrePlusComponent implements OnInit {

  private title = inject(Title);
  private meta = inject(Meta);
  platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    this.title.setTitle(
      'Porte qui ne s\'ouvre plus Paris 1 (75001) | Dépannage Urgent'
    );

    this.meta.addTags([
      {
        name: 'description',
        content: 'Porte qui ne s\'ouvre plus à Paris 1 ? Dépannage serrurier urgent 24h/24. Ouverture sans dégâts, devis gratuit.'
      },
      {
        name: 'keywords',
        content: 'porte ne s\'ouvre plus Paris 1, serrurier urgent 75001, dépannage porte bloquée, ouverture sans dégâts'
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Serrurier Paris 1' },
      { rel: 'canonical', href: 'https://www.tonsite.fr/porte-ne-souvre-plus-paris-1' },
      { property: 'og:title', content: 'Porte qui ne s\'ouvre plus à Paris 1 – Dépannage Express' },
      { property: 'og:description', content: 'Déblocage de porte à Paris 1 en moins de 30 minutes. Intervention rapide et sécurisée.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.tonsite.fr/porte-ne-souvre-plus-paris-1' }
    ]);

    if (isPlatformBrowser(this.platformId)) {
    this.injectSchema();
    }
  }

  injectSchema(): void {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(this.schemaData);
    document.head.appendChild(script);
  }

  schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Locksmith",
        "@id": "https://www.tonsite.fr/#locksmith",
        "name": "Serrurier Paris 1",
        "telephone": "01 23 45 67 89",
        "priceRange": "€€",
        "url": "https://www.tonsite.fr",
        "openingHours": "Mo-Su 00:00-23:59",
        "address": { "@type": "PostalAddress", "addressLocality": "Paris", "postalCode": "75001", "addressCountry": "FR" },
        "areaServed": { "@type": "AdministrativeArea", "name": "Paris 1" }
      },
      {
        "@type": "Service",
        "@id": "https://www.tonsite.fr/porte-ne-souvre-plus-paris-1#service",
        "name": "Dépannage porte qui ne s'ouvre plus à Paris 1",
        "serviceType": "Ouverture et déblocage de porte",
        "provider": { "@id": "https://www.tonsite.fr/#locksmith" },
        "areaServed": { "@type": "AdministrativeArea", "name": "Paris 1" },
        "description": "Dépannage urgent d'une porte qui ne s'ouvre plus à Paris 1 : ouverture sans dégâts, réparation ou remplacement si nécessaire.",
        "availableChannel": { "@type": "ServiceChannel", "servicePhone": { "@type": "ContactPoint", "telephone": "01 23 45 67 89", "contactType": "customer service" } }
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.tonsite.fr/porte-ne-souvre-plus-paris-1#faq",
        "mainEntity": [
          { "@type": "Question", "name": "Pouvez-vous ouvrir la porte sans casser la serrure ou la porte elle-même ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, techniques non destructives privilégiées, forçage uniquement en dernier recours." } },
          { "@type": "Question", "name": "La cause est-elle forcément ma serrure ? Pas ma clé ?", "acceptedAnswer": { "@type": "Answer", "text": "Diagnostic complet : parfois la clé est en cause, souvent copiée ou usée." } },
          { "@type": "Question", "name": "Que se passe-t-il si c'est la serrure 3 points ou 5 points qui est cassée ?", "acceptedAnswer": { "@type": "Answer", "text": "Démontage et inspection du mécanisme, réparation ou remplacement selon l'état." } },
          { "@type": "Question", "name": "Proposez-vous une garantie après le dépannage ?", "acceptedAnswer": { "@type": "Answer", "text": "Oui, main d'œuvre et pièces neuves garanties, généralement 2 ans." } },
          { "@type": "Question", "name": "Votre tarif est-il le même la nuit, le week-end ou pour une porte blindée ?", "acceptedAnswer": { "@type": "Answer", "text": "Forfait d'urgence 24h/24 et 7j/7, devis spécifique pour portes blindées." } }
        ]
      }
    ]
  };


  heroData = signal({
    title: 'Porte qui ne s\'ouvre plus à Paris 1 ?',
    subtitle: 'Notre service d\'urgence vous dépanne en 30 minutes',
    description: 'Votre <strong>porte ne s\'ouvre plus à Paris 1 ?</strong><br>Découvrez notre solution de dépannage express 24h/24. vous rentrez chez vous après une journée de travail dans le 1er arrondissement, vous insérez votre clé, mais rien ne se passe.',
    ctaText: 'Votre porte ne s\'ouvre plus dans Paris 1 ? Contactez-nous immédiatement',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80'
  });

  whyChooseData = signal({
      title: 'Pourquoi ma porte ne s\'ouvre-t-elle plus ? Les diagnostics les plus courants',
      description: 'Une porte qui refuse de s\'ouvrir est le symptôme d\'un problème sous-jacent. Dans les immeubles du 1er arrondissement, nos experts identifient régulièrement ces causes.',
      benefits: [
          {
              icon: '🔑',
              title: 'Cylindre hors service',
              description: 'Usure naturelle, goupilles cassées ou gel du mécanisme. La clé tourne dans le vide ou ne pénètre plus.'
          },
          {
              icon: '🔒',
              title: 'Serrure multipoints grippée',
              description: 'Le mécanisme central qui actionne les pênes est bloqué ou défaillant.'
          },
          {
              icon: '📐',
              title: 'Problème d\'alignement',
              description: 'Tassement du bâtiment, humidité ou chaleur ayant déformé le cadre, empêchant les pênes de sortir.'
          },
          {
              icon: '⚠️',
              title: 'Éviter l\'aggravation des dégâts',
              description: 'Tenter d\'ouvrir par la force risque de casser définitivement la serrure et de déformer votre porte.'
          }
      ]
  });

  commitmentsData = signal({
      title: 'Notre approche professionnelle pour résoudre le problème "porte qui ne s\'ouvre plus"',
      subtitle: 'Face à cette urgence, notre intervention suit un protocole rigoureux conçu pour l\'efficacité et la préservation',
      commitments: [
          {
              icon: '🔍',
              title: 'Diagnostic expert et rapide',
              description: 'Analyse de la porte, écoute des bruits de la serrure, inspection du cylindre et du cadre.'
          },
          {
              icon: '🛠️',
              title: 'Technique la plus adaptée',
              description: 'Déblocage du cylindre, intervention sur serrure multipoints, réalignement ou remplacement.'
          },
          {
              icon: '⚡',
              title: 'Intervention ultra-rapide',
              description: 'Délai d\'arrivée moyen inférieur à 30 minutes dans le 1er arrondissement.'
          },
          {
              icon: '💎',
              title: 'Transparence et accord préalable',
              description: 'Devis clair, détaillé et ferme présenté une fois la cause identifiée.'
          },
          {
              icon: '🔧',
              title: 'Techniques non destructives',
              description: 'Priorité aux méthodes préservant l\'intégrité de votre porte et de votre serrure.'
          }
      ]
  });

  servicesData = signal({
      title: 'Nos services de dépannage pour porte qui ne s\'ouvre plus dans Paris 1',
      subtitle: 'Que vous soyez résident, commerçant ou gestionnaire dans le quartier, nous intervenons sur tous les types de portes',
      services: [
          {
              icon: '🏠',
              title: 'Porte d\'entrée d\'appartement',
              description: 'La situation d\'urgence la plus courante.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 85€'
          },
          {
              icon: '🛡️',
              title: 'Porte blindée verrouillée',
              description: 'Expertise spécifique sur les mécanismes de haute sécurité.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 140€'
          },
          {
              icon: '🏢',
              title: 'Porte de bureau ou local professionnel',
              description: 'Pour minimiser l\'impact sur votre activité.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 95€'
          },
          {
              icon: '🔒',
              title: 'Porte avec serrure 3 points défaillante',
              description: 'Dépannage complexe nécessitant un savoir-faire précis.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 110€'
          },
          {
              icon: '🚪',
              title: 'Porte après tentative d\'ouverture forcée',
              description: 'Réparation des dégâts causés par une précédente tentative.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          },
          {
              icon: '🔄',
              title: 'Problème d\'alignement porte/bâti',
              description: 'Réglage des paumelles ou repositionnement de la gâche.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 90€'
          }
      ],
      ctaText: 'Appelez pour un dépannage urgent',
      ctaPhone: '01 23 45 67 89'
  });

  pricingData = signal({
      title: 'Tarification transparente pour le dépannage "porte qui ne s\'ouvre plus"',
      description: 'Le coût de notre intervention dépend de la nature de la panne et des solutions à apporter. Nous pratiquons une politique de transparence totale.',
      highlight: 'Notre promesse : Un devis ferme et détaillé avant le début de toute réparation.',
      features: [
          'Forfait de déplacement et diagnostic inclus',
          'Main d\'œuvre adaptée à la complexité',
          'Pièces de rechange de qualité',
          'Accord préalable sur tous les coûts',
          'Réparation durable'
      ]
  });

  conclusionData = signal({
      title: 'Ne restez pas prisonnier de l\'extérieur, faites appel à l\'expertise parisienne',
      description: 'Une porte qui ne s\'ouvre plus est un incident majeur, mais rarement insoluble. Notre rôle en tant que serrurier expert à Paris 1 est de vous apporter une réponse technique, rapide et rassurante.',
      ctaText: 'Ne laissez pas un problème mécanique vous exclure de votre propre espace',
      ctaPhone: '01 23 45 67 89',
      ctaDescription: 'Notre solution est à un appel de vous'
  });

  faqData = signal({
      title: 'FAQ : Porte qui ne s\'ouvre plus Paris 1',
      questions: [
          {
              question: 'Pouvez-vous ouvrir la porte sans casser la serrure ou la porte elle-même ?',
              answer: 'Dans l\'immense majorité des cas, OUI. Notre priorité absolue est d\'utiliser des techniques non destructives : crochetage du cylindre, déblocage mécanique, démontage soigneux. Le forçage ou le perçage ne sont envisagés qu\'en dernier recours, et cette éventualité vous serait toujours expliquée et soumise à votre accord au préalable.'
          },
          {
              question: 'La cause est-elle forcément ma serrure ? Pas ma clé ?',
              answer: 'Pas forcément. Un diagnostic professionnel est crucial. Nous vérifions systématiquement l\'état de votre clé (usure, déformation). Parfois, une simple copie de clé de mauvaise qualité usée prématurément est la coupable. Nous pouvons souvent en fabriquer une nouvelle sur place à partir du cylindre, une fois la porte ouverte.'
          },
          {
              question: 'Que se passe-t-il si c\'est la serrure 3 points ou 5 points qui est cassée à l\'intérieur ?',
              answer: 'C\'est un cas plus complexe mais courant. Notre artisan procède généralement au démontage de la serrure (si la porte est ouverte ou après ouverture) pour inspecter le mécanisme de crémone. Selon la panne, nous le réparons ou le remplaçons par un modèle neuf et compatible. Nous transportons les modèles les plus courants dans nos véhicules.'
          },
          {
              question: 'Proposez-vous une garantie après le dépannage ?',
              answer: 'Absolument. Tous nos dépannages ainsi que les pièces neuves que nous installons (cylindres, serrures) bénéficient d\'une garantie. La durée (généralement 2 ans pour la main d\'œuvre) est précisée sur votre facture. Cette garantie est votre assurance que la réparation est fiable et durable.'
          },
          {
              question: 'Votre tarif est-il le même si l\'intervention a lieu la nuit, un week-end ou pour une porte blindée ?',
              answer: 'Nous appliquons un forfait d\'urgence 24h/24 et 7j/7 pour le déplacement et l\'urgence, quel que soit le moment. Pour les portes blindées, la technicité supérieure et la complexité des mécanismes impliquent souvent un temps d\'intervention plus long, ce qui se reflète dans un devis spécifique et transparent que nous vous présentons toujours avant de commencer les travaux.'
          }
      ]
  });
}

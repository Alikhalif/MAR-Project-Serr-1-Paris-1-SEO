import { Component, signal } from '@angular/core';
import { ConclusionComponent } from "../../../components/conclusion/conclusion.component";
import { FaqComponent } from "../../../components/faq/faq.component";
import { PricingTransparencyComponent } from "../../../components/pricing-transparency/pricing-transparency.component";
import { OurServicesComponent } from "../../../components/our-services/our-services.component";
import { OurCommitmentsComponent } from "../../../components/our-commitments/our-commitments.component";
import { WhyChooseUsComponent } from "../../../components/why-choose-us/why-choose-us.component";
import { HeroSectionComponent } from "../../../components/hero-section/hero-section.component";

@Component({
  selector: 'app-securisation-habitation',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './securisation-habitation.component.html',
  styleUrl: './securisation-habitation.component.scss'
})
export class SecurisationHabitationComponent {

  heroData = signal({
    title: 'Sécurisation d\'Habitation à Paris 1',
    subtitle: 'Votre Partenaire Expert pour un Logement Protégé',
    description: 'Vous souhaitez sécuriser votre habitation à Paris 1 ? Notre expertise globale protège votre logement de A à Z. Audit gratuit, solutions sur-mesure pour portes, fenêtres & volets.',
    ctaText: 'Demander un audit gratuit',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://i.ibb.co/wZDQHyc2/audit-5.png' // Image d'une maison/entrée sécurisée
  });

  whyChooseData = signal({
    title: 'Pourquoi une approche globale est indispensable pour votre sécurité à Paris 1 ?',
    description: 'La sécurité d\'un logement repose sur sa chaîne la plus faible. Une protection fragmentée laisse des vulnérabilités exploitables.',
    benefits: [
      {
        icon: '🔗',
        title: 'Vision d\'ensemble & expertise',
        description: 'Nous identifions et traitons tous les points faibles (porte, fenêtres, volets) pour une protection cohérente, pas seulement la porte d\'entrée.'
      },
      {
        icon: '🎯',
        title: 'Audit & conseil personnalisé gratuit',
        description: 'Diagnostic complet de vos vulnérabilités et plan d\'action priorisé, sans vente forcée. Nous vous conseillons honnêtement.'
      },
      {
        icon: '🛡️',
        title: 'Solutions certifiées & conformes',
        description: 'Utilisation de matériaux certifiés (A2P/NF) et mise en œuvre conforme aux recommandations des assureurs pour une sécurité reconnue.'
      },
      {
        icon: '🏠',
        title: 'Spécialiste des logements parisiens',
        description: 'Expertise adaptée aux appartements anciens, rez-de-chaussée, duplex avec terrasse : nous connaissons vos spécificités.'
      }
    ]
  });

  commitmentsData = signal({
    title: 'Notre méthodologie pour une sécurisation réussie à Paris 1',
    subtitle: 'Une approche structurée, du diagnostic à la garantie, pour votre tranquillité d\'esprit',
    commitments: [
      {
        icon: '🔍',
        title: 'Audit de sécurité complet & gratuit',
        description: 'Analyse experte de tous vos points d\'accès : porte d\'entrée, fenêtres, portes-fenêtres, volets. Identification des risques.'
      },
      {
        icon: '📝',
        title: 'Plan de sécurisation sur-mesure',
        description: 'Proposition claire de solutions adaptées à chaque vulnérabilité, avec un phasage possible des travaux selon votre budget.'
      },
      {
        icon: '📋',
        title: 'Devis global, modulaire et transparent',
        description: 'Devis détaillant chaque poste (matériaux certifiés, main d\'œuvre). Vous choisissez ce que vous réalisez, et quand.'
      },
      {
        icon: '⚙️',
        title: 'Mise en œuvre experte par spécialistes',
        description: 'Intervention par nos techniciens sur tous les équipements : blindage de porte, sécurisation de fenêtres et de volets.'
      },
      {
        icon: '📜',
        title: 'Garantie globale & attestations',
        description: 'Garantie produit + garantie main d\'œuvre (2 ans min.) + attestations utiles pour votre assureur.'
      }
    ]
  });

  servicesData = signal({
    title: 'Nos solutions de sécurisation globale pour Paris 1',
    subtitle: 'Un éventail complet pour fortifier chaque point d\'accès de votre habitation',
    services: [
      {
        icon: '🚪',
        title: 'Sécurisation de la porte d\'entrée',
        description: 'Blindage de porte existante ou pose de porte blindée neuve avec serrure multipoints (3/5 pts) et cylindre A2P.',
        image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=600&q=80',
        price: 'Sur devis personnalisé'
      },
      {
        icon: '🪟',
        title: 'Renforcement fenêtres & portes-fenêtres',
        description: 'Pose de serrures multipoints, gâches renforcées ancrées, crémones sécurisées pour tous vos ouvrants.',
        image: 'https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?w=600&q=80',
        price: 'Sur devis personnalisé'
      },
      {
        icon: '🪚',
        title: 'Sécurisation des volets & persiennes',
        description: 'Installation de serrures de volets blindées ou de verrous d\'ancrage fixant les volets au mur ou au sol.',
        image: 'https://images.unsplash.com/photo-1567767292275-6e1844d5fbe0?w=600&q=80',
        price: 'Sur devis personnalisé'
      },
      {
        icon: '🔑',
        title: 'Audit & Plan de sécurisation',
        description: 'Diagnostic complet de votre logement et élaboration d\'un plan d\'action priorisé. Service indispensable pour bien commencer.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        price: 'Gratuit'
      }
    ],
    ctaText: 'Planifier mon audit gratuit',
    ctaPhone: '01 23 45 67 89'
  });

  pricingData = signal({
    title: 'Investissement dans votre sécurité : Transparence & Modularité',
    description: 'Nous croyons en une sécurité accessible. Notre approche modulaire vous permet de maîtriser votre budget et de planifier les travaux par étapes.',
    highlight: 'Devis global et transparent - Vous contrôlez l\'investissement.',
    features: [
      'Audit initial gratuit et sans engagement',
      'Devis modulaire : chaque poste est chiffré indépendamment',
      'Travaux réalisables en une fois ou par phases',
      'Informations sur les aides fiscales éventuelles'
    ]
  });

  conclusionData = signal({
    title: 'Votre partenaire de confiance pour une habitation sereine à Paris 1',
    description: 'La sécurité de votre foyer est un investissement dans votre tranquillité. En nous choisissant, vous optez pour une vision experte et holistique, alliant diagnostic rigoureux, solutions techniques éprouvées et mise en œuvre irréprochable pour créer un environnement protecteur sur mesure.',
    ctaText: 'Sécuriser mon logement',
    ctaPhone: '01 23 45 67 89',
    ctaDescription: 'Audit de sécurité offert dans le 1er arrondissement !'
  });

  faqData = signal({
    title: 'FAQ : Sécurisation d\'Habitation Paris 1',
    questions: [
      {
        question: 'Par où commencer pour sécuriser mon appartement ?',
        answer: 'Commencez toujours par l\'élément le plus critique : la porte d\'entrée, votre première barrière. Ensuite, traitez les accès les plus vulnérables (fenêtres de rez-de-chaussée, balcon). Notre audit gratuit vous établit un ordre de priorité clair et personnalisé pour agir efficacement.'
      },
      {
        question: 'Je suis locataire, que puis-je faire ?',
        answer: 'En tant que locataire, vous avez des droits. Vous pouvez généralement changer le cylindre de la porte (en conservant l\'ancien) et installer des serrures additionnelles réversibles sur les fenêtres. Pour des travaux plus lourds (remplacement de porte), nous pouvons vous fournir un devis pour étayer une demande auprès de votre propriétaire.'
      },
      {
        question: 'Une porte blindée est-elle utile avec un digicode ?',
        answer: 'Absolument. Le digicode ne protège que l\'accès à l\'immeuble. Votre porte d\'appartement est la dernière et unique barrière protégeant vos biens personnels. Elle doit donc être la plus résistante possible. Les codes peuvent être divulgués, rendant la porte individuelle essentielle.'
      },
      {
        question: 'Proposez-vous des alarmes ou caméras ?',
        answer: 'Nous sommes experts en sécurité physique passive (renforcement des accès : portes, fenêtres, volets), la première et plus efficace ligne de défense. Pour les systèmes d\'alarme ou de vidéosurveillance (sécurité active), nous travaillons avec des partenaires spécialisés de confiance que nous pouvons vous recommander pour une solution 360°.'
      },
      {
        question: 'Vos travaux sont-ils garantis ?',
        answer: 'Oui, nous offrons une double garantie : 1) La garantie constructeur sur les produits (serrures, portes, etc.). 2) Notre garantie sur la main d\'œuvre d\'installation, d\'une durée minimale de 2 ans, couvrant l\'ensemble des travaux que nous réalisons. Tous les documents vous sont remis.'
      }
    ]
  });
}

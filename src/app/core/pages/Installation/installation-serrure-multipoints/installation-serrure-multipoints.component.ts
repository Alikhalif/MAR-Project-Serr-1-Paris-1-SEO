import { Component, signal } from '@angular/core';
import { ConclusionComponent } from "../../../components/conclusion/conclusion.component";
import { FaqComponent } from "../../../components/faq/faq.component";
import { PricingTransparencyComponent } from "../../../components/pricing-transparency/pricing-transparency.component";
import { OurServicesComponent } from "../../../components/our-services/our-services.component";
import { OurCommitmentsComponent } from "../../../components/our-commitments/our-commitments.component";
import { WhyChooseUsComponent } from "../../../components/why-choose-us/why-choose-us.component";
import { HeroSectionComponent } from "../../../components/hero-section/hero-section.component";

@Component({
  selector: 'app-installation-serrure-multipoints',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './installation-serrure-multipoints.component.html',
  styleUrl: './installation-serrure-multipoints.component.scss'
})
export class InstallationSerrureMultipointsComponent {

  heroData = signal({
    title: 'Installation Serrure Multipoints à Paris 1',
    subtitle: 'L\'Ultime Rempart pour Votre Sécurité',
    description: 'Renforcez votre porte à Paris 1 avec l\'installation experte d\'une serrure multipoints. Transformez votre entrée en un véritable bouclier avec une sécurité renforcée et certifiée.',
    ctaText: 'Obtenir un diagnostic gratuit',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://i.ibb.co/pvmsK50X/multipoints-2.jpg' // Image suggérée pour un projet d'installation
  });

  whyChooseData = signal({
    title: 'Pourquoi installer une serrure multipoints est le choix décisif pour votre sécurité ?',
    description: 'Face aux techniques d\'effraction modernes, une protection basique ne suffit plus. La serrure multipoints est la solution proactive.',
    benefits: [
      {
        icon: '🛡️',
        title: 'Dissuasion et résistance maximales',
        description: 'Décourage les intrus par sa complexité et répartit la force d\'effraction sur plusieurs points du cadre, rendant les méthodes classiques inefficaces.'
      },
      {
        icon: '🎯',
        title: 'Expertise technique incontournable',
        description: 'Une installation réussie exige une précision millimétrique. Notre savoir-faire garantit un alignement parfait et un fonctionnement fluide de tous les points.'
      },
      {
        icon: '🔩',
        title: 'Matériaux de haute sécurité',
        description: 'Nous utilisons exclusivement des serrures certifiées et des cylindres A2P, formant une chaîne de sécurité sans point faible.'
      },
      {
        icon: '🏚️',
        title: 'Spécialiste des portes parisiennes',
        description: 'Nous maîtrisons les particularités des portes en bois massif des immeubles anciens du 1er arrondissement et adaptons notre intervention en conséquence.'
      }
    ]
  });

  commitmentsData = signal({
    title: 'Nos engagements pour une installation de serrure multipoints parfaite',
    subtitle: 'Nous transformons votre projet sécurité en une réalisation technique fiable et durable',
    commitments: [
      {
        icon: '🔍',
        title: 'Diagnostic et conseil personnalisé',
        description: 'Évaluation gratuite de la compatibilité de votre porte et recommandation sur le nombre de points (3, 5, 7) optimal pour votre situation.'
      },
      {
        icon: '📐',
        title: 'Travail de précision millimétrique',
        description: 'Traçage au laser et perçage avec gabarits professionnels pour un alignement parfait des tiges de crémone et des gâches.'
      },
      {
        icon: '⚙️',
        title: 'Installation complète clé en main',
        description: 'De la préparation de la porte à la pose du cylindre A2P et aux réglages fins, nous gérons tout pour un résultat impeccable.'
      },
      {
        icon: '✅',
        title: 'Tests de sécurité exhaustifs',
        description: 'Vérification point par point du verrouillage et contrôle de la résistance avant la remise des clés.'
      },
      {
        icon: '📜',
        title: 'Garantie double (pièces & main d\'œuvre)',
        description: 'Garantie fabricant sur la serrure + garantie de 2 ans minimum sur notre installation pour votre tranquillité d\'esprit.'
      }
    ]
  });

  servicesData = signal({
    title: 'Nos prestations d\'installation multipoints à Paris 1',
    subtitle: 'Des solutions adaptées à chaque besoin de renforcement de sécurité',
    services: [
      {
        icon: '3️⃣',
        title: 'Installation serrure 3 points',
        description: 'Solution standard ultra-efficace, verrouillant la porte en haut, au milieu et en bas. Idéale pour une majorité de portes.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
        price: 'À partir de 190€*'
      },
      {
        icon: '5️⃣',
        title: 'Installation serrure 5 points',
        description: 'Sécurité renforcée avec verrouillage latéral additionnel. Recommandée pour les portes larges, exposées ou pour un niveau de protection maximal.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        price: 'À partir de 280€*'
      },
      {
        icon: '🔒',
        title: 'Pack Sécurité Intégrale A2P',
        description: 'Installation d\'une serrure multipoints associée à un cylindre haute sécurité certifié A2P. La combinaison gagnante.',
        image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=600&q=80',
        price: 'À partir de 250€*'
      },
      {
        icon: '🚪',
        title: 'Renfort de porte & installation',
        description: 'Pour les portes anciennes : évaluation, renfort interne si nécessaire (blindage léger) puis installation de la serrure multipoints.',
        image: 'https://images.unsplash.com/photo-1577493340887-0b78f5b3b6f5?w=600&q=80',
        price: 'Sur devis personnalisé'
      }
    ],
    ctaText: 'Demander un devis personnalisé',
    ctaPhone: '01 23 45 67 89',
    note: '*Prix indicatifs pour une porte standard. Varient selon le modèle de serrure et les spécificités de votre porte.'
  });

  pricingData = signal({
    title: 'Transparence tarifaire : Installation de serrure multipoints à Paris 1',
    description: 'Investir dans une serrure multipoints, c\'est investir dans une sécurité pérenne. Notre devis détaille chaque élément pour une parfaite lisibilité.',
    highlight: 'Devis ferme et détaillé accepté avant tout commencement des travaux.',
    features: [
      'Prix de la serrure multipoints (3, 5, 7 points)',
      'Coût du cylindre haute sécurité A2P (recommandé)',
      'Main d\'œuvre d\'installation experte et de réglage',
      'Garanties incluses sur les pièces et la pose'
    ]
  });

  conclusionData = signal({
    title: 'Votre expert en sécurité multipoints de confiance à Paris 1',
    description: 'Ne laissez plus la sécurité de votre domicile ou commerce reposer sur un point unique. Avec notre installation experte d\'une serrure multipoints, vous optez pour la dissuasion, la résistance et la sérénité. Confiez-nous la création de votre rempart infranchissable.',
    ctaText: 'Passer à la sécurité multipoints',
    ctaPhone: '01 23 45 67 89',
    ctaDescription: 'Diagnostic gratuit et devis transparent dans le 1er arrondissement !'
  });

  faqData = signal({
    title: 'FAQ : Installation Serrure Multipoints Paris 1',
    questions: [
      {
        question: 'Ma porte en bois ancien est-elle compatible avec une multipoints ?',
        answer: 'Oui, dans la plupart des cas, c\'est même idéal. Les portes en bois massif ancien sont souvent épaisses et solides. Notre expert évalue son état (absence de pourriture, solidité) et peut proposer un renfort interne léger avant installation pour garantir une résistance maximale et réaliser les perçages sans l\'endommager.'
      },
      {
        question: 'Quelle est la différence entre une serrure 3 points et 5 points ?',
        answer: 'La différence réside dans le nombre et la répartition des points de verrouillage. La 3 points verrouille en haut, au milieu et en bas. La 5 points ajoute deux pênes latéraux, verrouillant aussi les côtés. Elle est recommandée pour les portes très larges, exposées ou pour un niveau de sécurité maximal. Nous vous conseillons sur le choix optimal.'
      },
      {
        question: 'L\'installation est-elle très poussiéreuse ?',
        answer: 'Des perçages sont nécessaires, il y a donc de la poussière. Nous utilisons systématiquement des aspirateurs professionnels et protégeons vos sols pour minimiser les désagréments et laisser les lieux propres après notre intervention.'
      },
      {
        question: 'Dois-je aussi changer le cylindre ?',
        answer: 'Absolument. Il est impératif de coupler votre nouvelle serrure multipoints à un cylindre haute sécurité certifié A2P. C\'est cette combinaison qui forme une chaîne de sécurité sans faille. La serrure est souvent livrée avec une plaque de propreté ; vous pouvez généralement conserver vos poignées existantes si elles sont compatibles.'
      },
      {
        question: 'Proposez-vous une garantie ?',
        answer: 'Oui, nous offrons une garantie complète : 1) La garantie du fabricant sur la serrure et le cylindre (souvent 2 à 5 ans). 2) Notre garantie sur la main d\'œuvre d\'installation, d\'une durée minimale de 2 ans, couvrant tout défaut de mise en œuvre. Ces garanties vous sont remises par écrit.'
      }
    ]
  });
}

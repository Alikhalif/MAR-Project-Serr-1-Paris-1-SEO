import { Component, signal } from '@angular/core';
import { ConclusionComponent } from "../../../components/conclusion/conclusion.component";
import { FaqComponent } from "../../../components/faq/faq.component";
import { PricingTransparencyComponent } from "../../../components/pricing-transparency/pricing-transparency.component";
import { OurServicesComponent } from "../../../components/our-services/our-services.component";
import { OurCommitmentsComponent } from "../../../components/our-commitments/our-commitments.component";
import { WhyChooseUsComponent } from "../../../components/why-choose-us/why-choose-us.component";
import { HeroSectionComponent } from "../../../components/hero-section/hero-section.component";

@Component({
  selector: 'app-porte-blindee',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './porte-blindee.component.html',
  styleUrl: './porte-blindee.component.scss'
})
export class PorteBlindeeComponent {

  heroData = signal({
    title: 'Réparation Porte Blindée Paris 1',
    subtitle: 'Expertise Haute Sécurité & Diagnostic Précis',
    description: 'Votre <strong>porte blindée dans le 1er arrondissement dysfonctionne ?</strong> Nos experts certifiés interviennent 24h/24 pour restaurer sa protection A2P/NF et garantir votre sécurité.',
    ctaText: 'Obtenir un diagnostic gratuit',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://i.ibb.co/rKyqY32r/bloquee-5.jpg'
  });

  whyChooseData = signal({
    title: 'Pourquoi confier la réparation de votre porte blindée à un expert spécialisé ?',
    description: 'Une porte blindée est un équipement complexe. Sa réparation par un non-spécialiste comporte des risques majeurs pour votre sécurité et votre investissement.',
    benefits: [
      {
        icon: '🛡️',
        title: 'Préservation des certifications',
        description: 'Une réparation conforme maintient vos labels A2P/NF et vos garanties constructeur.'
      },
      {
        icon: '⚙️',
        title: 'Expertise technique spécifique',
        description: 'Nos techniciens sont formés aux mécanismes multipoints et aux marques haute sécurité (Vachette, Picard, Bricard, etc.).'
      },
      {
        icon: '🔧',
        title: 'Pièces détachées adaptées',
        description: 'Utilisation exclusive de pièces d\'origine ou certifiées compatibles avec votre modèle.'
      },
      {
        icon: '✓',
        title: 'Sécurité restaurée à 100%',
        description: 'Nous rétablissons l\'intégrité et le niveau de protection initial de votre porte.'
      }
    ]
  });

  commitmentsData = signal({
    title: 'Nos engagements pour une réparation de porte blindée à Paris 1',
    subtitle: 'Lorsque la sécurité de votre domicile ou commerce est en jeu, nous nous engageons sur une méthodologie rigoureuse',
    commitments: [
      {
        icon: '🔍',
        title: 'Diagnostic approfondi et gratuit',
        description: 'Analyse précise de la panne (crémone, alignement, cylindre, pênes) avant tout devis.'
      },
      {
        icon: '📝',
        title: 'Devis détaillé et transparent',
        description: 'Prix ferme et expliqué, validé par vos soins avant le début des travaux.'
      },
      {
        icon: '👨‍🔧',
        title: 'Techniciens spécialisés',
        description: 'Artisans experts des portes blindées, formés aux normes de sécurité les plus strictes.'
      },
      {
        icon: '⏱️',
        title: 'Intervention rapide et efficace',
        description: 'De la simple révision au remplacement de crémone, nous optimisons notre intervention.'
      },
      {
        icon: '🧾',
        title: 'Garantie sur pièces et main d\'œuvre',
        description: 'Facture détaillée et garantie de parfait achèvement fournie après chaque réparation.'
      }
    ]
  });

  servicesData = signal({
    title: 'Nos prestations de réparation pour porte blindée à Paris 1',
    subtitle: 'Nous intervenons sur tous les dysfonctionnements spécifiques aux portes blindées dans le 1er arrondissement',
    services: [
      {
        icon: '🔩',
        title: 'Réparation de serrure multipoints (crémone)',
        description: 'Nettoyage, graissage, réglage ou remplacement de pièces internes de la crémone grippée ou bruyante.',
        image: 'https://images.unsplash.com/photo-1582719201952-3f0ce5badca8?w=600&q=80',
        price: 'À partir de 90€'
      },
      {
        icon: '🚪',
        title: 'Réalignement et réglage de porte',
        description: 'Ajustement des paumelles (gonds), des butées et de la gâche pour une fermeture parfaite.',
        image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
        price: 'À partir de 85€'
      },
      {
        icon: '🗝️',
        title: 'Remplacement de cylindre A2P',
        description: 'Pose d\'un nouveau barillet haute sécurité après défaillance, perte de clés ou usure.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        price: 'À partir de 120€'
      },
      {
        icon: '🔧',
        title: 'Entretien préventif complet',
        description: 'Révision complète : nettoyage, graissage, vérification de l\'alignement et serrage des fixations.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        price: 'À partir de 110€'
      }
    ],
    ctaText: 'Demander un diagnostic',
    ctaPhone: '01 23 45 67 89'
  });

  pricingData = signal({
    title: 'Transparence tarifaire : Coût d\'une réparation de porte blindée à Paris 1',
    description: 'Le prix d\'une réparation experte dépend de la nature de la panne et des pièces nécessaires. Nous croyons en une tarification claire, justifiée par notre expertise.',
    highlight: 'Le devis est contractuel et détaillé. Vous connaissez le prix final avant les travaux.',
    features: [
      'Forfait diagnostic inclus dans l\'intervention',
      'Main d\'œuvre reflétant la technicité',
      'Pièces d\'origine ou certifiées validées par vous',
      'Garantie incluse sur les réparations'
    ]
  });

  conclusionData = signal({
    title: 'Votre partenaire expert en sécurité sur Paris 1',
    description: 'Préservez votre investissement sécurité et votre tranquillité d\'esprit. Confiez la réparation de votre porte blindée à des spécialistes qui en comprennent les subtilités et le caractère critique.',
    ctaText: 'Appelez un expert 24h/24',
    ctaPhone: '01 23 45 67 89',
    ctaDescription: 'Diagnostic gratuit et intervention rapide dans Paris 1 !'
  });

  faqData = signal({
    title: 'FAQ : Réparation Porte Blindée Paris 1',
    questions: [
      {
        question: 'Pouvez-vous réparer toutes les marques de portes blindées ?',
        answer: 'Nous intervenons sur la grande majorité des marques courantes (Vachette, Picard, Bricard, Keso, Ixis, Dierre...). Notre diagnostic initial permet de vérifier la faisabilité et la disponibilité des pièces, même pour les modèles anciens.'
      },
      {
        question: 'La réparation invalide-t-elle la certification A2P de ma porte ?',
        answer: 'Non, bien au contraire. Une réparation experte, réalisée avec des pièces conformes et dans le respect des normes, vise à préserver la certification. C\'est une raison majeure de faire appel à un spécialiste plutôt qu\'à un généraliste.'
      },
      {
        question: 'Ma porte blindée grince et est dure à fermer. Est-ce grave ?',
        answer: 'C\'est le signe d\'un problème d\'alignement ou d\'un manque d\'entretien. Bien que non "critique" immédiatement, cela use prématurément la serrure. Une intervention de réglage et de graissage est recommandée pour prolonger sa durée de vie et éviter une panne plus coûteuse.'
      },
      {
        question: 'Combien de temps prend une réparation de porte blindée ?',
        answer: 'Cela varie : un simple réglage (30 à 60 min), le démontage/réparation d\'une crémone (1h30 à 3h), un réalignement complet (1h à 2h). Nous vous donnons une estimation précise après le diagnostic sur place.'
      },
      {
        question: 'Proposez-vous un entretien préventif pour les portes blindées ?',
        answer: 'Absolument, et nous le recommandons vivement. Un entretien périodique (tous les 2-3 ans) par un expert permet de nettoyer et graisser la serrure, vérifier l\'alignement, resserrer les fixations et détecter toute usure anormale, garantissant ainsi longévité et sécurité optimale.'
      }
    ]
  });
}

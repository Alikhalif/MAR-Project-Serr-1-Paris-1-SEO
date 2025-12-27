import { Component, signal } from '@angular/core';
import { ConclusionComponent } from "../../../components/conclusion/conclusion.component";
import { FaqComponent } from "../../../components/faq/faq.component";
import { PricingTransparencyComponent } from "../../../components/pricing-transparency/pricing-transparency.component";
import { OurServicesComponent } from "../../../components/our-services/our-services.component";
import { OurCommitmentsComponent } from "../../../components/our-commitments/our-commitments.component";
import { WhyChooseUsComponent } from "../../../components/why-choose-us/why-choose-us.component";
import { HeroSectionComponent } from "../../../components/hero-section/hero-section.component";

@Component({
  selector: 'app-poignee-cassee',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './poignee-cassee.component.html',
  styleUrl: './poignee-cassee.component.scss'
})
export class PoigneeCasseeComponent {

  heroData = signal({
    title: 'Poignée Cassée à Paris 1 ?',
    subtitle: 'Notre Dépannage Rapide Restaure Votre Confort',
    description: 'Votre <strong>poignée de porte est cassée à Paris 1 ?</strong> Notre réparation express vous dépanne en 30 minutes. Une poignée de porte qui cède soudainement, qui tourne dans le vide, ou qui reste bloquée en position basse... Notre entreprise de serrurerie à Paris intervient pour la réparation et le remplacement de poignée cassée à Paris 1.',
    ctaText: 'Votre poignée est cassée dans Paris 1 ? Appelez-nous pour un dépannage express',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80'
  });

  whyChooseData = signal({
      title: 'Pourquoi une poignée de porte casse-t-elle et pourquoi la faire réparer ?',
      description: 'La poignée est l\'élément le plus sollicité de votre porte. Sa défaillance est souvent due à différentes causes que nous identifions et réparons.',
      benefits: [
          {
              icon: '⚙️',
              title: 'Usure naturelle et mécanisme interne',
              description: 'Après des milliers d\'utilisations, ressorts, goupilles ou carré d\'actionnement peuvent s\'user ou casser.'
          },
          {
              icon: '🔩',
              title: 'Vis de fixation desserrées',
              description: 'Vibrations répétées entraînant mauvais alignement et casse prématurée.'
          },
          {
              icon: '⚠️',
              title: 'Éviter l\'inconfort quotidien',
              description: 'Obligation de manipuler le reste de la poignée ou la clé de manière peu pratique.'
          },
          {
              icon: '🛡️',
              title: 'Prévenir l\'insécurité',
              description: 'Poignée intérieure cassée peut empêcher de sortir en cas d\'urgence.'
          }
      ]
  });

  commitmentsData = signal({
      title: 'Notre méthode de dépannage pour poignée cassée à Paris 1',
      subtitle: 'Notre intervention est simple, efficace et adaptée à chaque cas',
      commitments: [
          {
              icon: '🔍',
              title: 'Diagnostic rapide',
              description: 'Identification de la cause : carré tordu, mécanisme interne, fixation défectueuse.'
          },
          {
              icon: '📝',
              title: 'Proposition de solution adaptée',
              description: 'Choix entre réparation simple ou remplacement complet avec présentation de modèles.'
          },
          {
              icon: '📋',
              title: 'Devis transparent',
              description: 'Devis clair et ferme incluant prix de la poignée et main d\'œuvre.'
          },
          {
              icon: '🔧',
              title: 'Réparation ou remplacement soigné',
              description: 'Dépose soigneuse, nettoyage, pose de la nouvelle poignée avec alignement parfait.'
          },
          {
              icon: '✅',
              title: 'Tests de fonctionnement',
              description: 'Vérification que la nouvelle poignée actionne parfaitement la serrure des deux côtés.'
          }
      ]
  });

  servicesData = signal({
      title: 'Types d\'interventions pour poignée cassée dans le 1er arrondissement',
      subtitle: 'Nous prenons en charge tous les modèles et types de pannes de poignées',
      services: [
          {
              icon: '🚪',
              title: 'Remplacement de poignée standard',
              description: 'Pour porte d\'entrée ou intérieure, levier ou bouton.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 65€'
          },
          {
              icon: '🛡️',
              title: 'Réparation de poignée de porte blindée',
              description: 'Intervention sur mécanisme spécifique des portes haute sécurité.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 90€'
          },
          {
              icon: '🚽',
              title: 'Changement de poignée salle de bain/WC',
              description: 'Avec système de verrouillage intérieur spécifique.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 70€'
          },
          {
              icon: '🔄',
              title: 'Remplacement du set complet',
              description: 'Changement des deux poignées (intérieure et extérieure) pour harmonie.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 85€'
          },
          {
              icon: '🔲',
              title: 'Réparation du carré d\'actionnement',
              description: 'Soudure ou remplacement de la tige carrée reliant les poignées.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 50€'
          },
          {
              icon: '🖼️',
              title: 'Fixation de rosace desserrée ou cassée',
              description: 'Remise en état de la plaque de propreté de la poignée.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 45€'
          }
      ],
      ctaText: 'Appelez pour une réparation rapide',
      ctaPhone: '01 23 45 67 89'
  });

  pricingData = signal({
      title: 'Tarification pour la réparation ou le remplacement d\'une poignée cassée à Paris 1',
      description: 'Le coût est modique et prévisible, surtout comparé à l\'inconfort d\'une poignée défectueuse. Il se compose du prix de la poignée et de la main d\'œuvre.',
      highlight: 'Notre engagement : Clarté et qualité. Devis unique accepté à l\'avance, sans surprise.',
      features: [
          'Prix de la poignée neuve selon modèle',
          'Main d\'œuvre forfaitaire pour intervention rapide',
          'Poignées de qualité professionnelle',
          'Longévité accrue garantie',
          'Comparaison avantageuse avec inconfort quotidien'
      ]
  });

  conclusionData = signal({
      title: 'Redonnez de l\'aisance à votre quotidien avec une poignée fonctionnelle à Paris 1',
      description: 'Une poignée cassée est une panne bénigne en apparence, mais qui peut vite devenir exaspérante. En confiant sa réparation ou son remplacement à Paris 1 à notre entreprise, vous choisissez l\'efficacité, l\'esthétique et la durabilité.',
      ctaText: 'Ne tolérez pas l\'inconfort d\'une poignée défectueuse',
      ctaPhone: '01 23 45 67 89',
      ctaDescription: 'Notre solution est simple, rapide et efficace'
  });

  faqData = signal({
      title: 'FAQ : Poignée Cassée Paris 1',
      questions: [
          {
              question: 'Puis-je remplacer ma poignée moi-même ?',
              answer: 'C\'est souvent techniquement simple, mais il y a des pièges. Il faut connaître la longueur exacte du carré (tige carrée) et le diamètre de la rosace, avoir la bonne poignée (à bouton, à levier, avec ou sans clé), et maîtriser le démontage sans abîmer la porte. Notre intervention garantit le bon choix et une pose parfaite, et est souvent très abordable.'
          },
          {
              question: 'Dois-je changer les deux poignées (intérieure et extérieure) ou seulement celle qui est cassée ?',
              answer: 'Idéalement, il faut changer le set complet. Les deux poignées partagent le même carré d\'actionnement et sont conçues pour fonctionner ensemble. Changer une seule peut entraîner un déséquilibre ou une usure prématurée. Cependant, si seule la mécanique intérieure est cassée sur un modèle très standard, un changement d\'un seul côté est parfois possible.'
          },
          {
              question: 'La poignée tourne dans le vide mais la porte s\'ouvre avec la clé. Est-ce grave ?',
              answer: 'Cela indique que le carré d\'actionnement (la tige reliant les deux poignées) est cassé ou décroché. La sécurité n\'est pas compromise (la clé fonctionne), mais le confort est nul. La réparation nécessite généralement le démontage d\'une poignée pour remplacer le carré, une intervention simple pour un professionnel.'
          },
          {
              question: 'Proposez-vous des poignées de style ancien pour les immeubles parisiens ?',
              answer: 'Oui, nous sommes habitués à intervenir dans les immeubles du 1er arrondissement et pouvons vous proposer des poignées de style "rushes", "porcelaine" ou "ancien" qui respectent l\'esthétique des lieux. Nous pouvons aussi adapter des mécanismes modernes sur des supports anciens dans certains cas.'
          },
          {
              question: 'Votre intervention est-elle garantie ?',
              answer: 'Oui. La poignée neuve bénéficie de la garantie du fabricant. Notre pose est garantie généralement 2 ans contre tout défaut d\'installation. Vous recevez ces informations sur votre facture.'
          }
      ]
  });
}

import { Component, signal } from '@angular/core';
import { ConclusionComponent } from "../../../components/conclusion/conclusion.component";
import { FaqComponent } from "../../../components/faq/faq.component";
import { PricingTransparencyComponent } from "../../../components/pricing-transparency/pricing-transparency.component";
import { OurServicesComponent } from "../../../components/our-services/our-services.component";
import { OurCommitmentsComponent } from "../../../components/our-commitments/our-commitments.component";
import { WhyChooseUsComponent } from "../../../components/why-choose-us/why-choose-us.component";
import { HeroSectionComponent } from "../../../components/hero-section/hero-section.component";

@Component({
  selector: 'app-depannage-porte-bloquee',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './depannage-porte-bloquee.component.html',
  styleUrl: './depannage-porte-bloquee.component.scss'
})
export class DepannagePorteBloqueeComponent {

  heroData = signal({
    title: 'Porte Bloquée à Paris 1 ?',
    subtitle: 'Notre Dépannage Express Vous Débloque en 30 Minutes',
    description: 'Votre porte est bloquée à Paris 1 ? Découvrez notre solution de dépannage urgent 24h/24. Vous insérez votre clé, mais elle refuse de tourner. Vous poussez votre porte, mais elle résiste, coincée dans son cadre... Notre entreprise de serrurerie à Paris intervient spécifiquement pour le dépannage de porte bloquée à Paris 1.',
    ctaText: 'Votre porte est bloquée dans Paris 1 ? Appelez-nous',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://i.ibb.co/V0W28xBQ/porte-blindee-4.png'
  });

  whyChooseData = signal({
      title: 'Pourquoi votre porte est-elle bloquée ? Les causes courantes à Paris 1',
      description: 'Comprendre l\'origine du problème est la première étape vers une solution durable. Dans les vieux immeubles du 1er arrondissement comme dans les résidences modernes, plusieurs facteurs peuvent causer un blocage.',
      benefits: [
          {
              icon: '🔑',
              title: 'Cylindre défectueux ou usé',
              description: 'Goupilles internes cassées ou mal alignées, empêchant la clé de fonctionner.'
          },
          {
              icon: '📐',
              title: 'Problème d\'alignement',
              description: 'Le bâtiment a bougé (tassement, humidité), empêchant les pênes de s\'engager correctement.'
          },
          {
              icon: '🔧',
              title: 'Gâche déformée ou mal alignée',
              description: 'Le logement métallique dans le cadre qui reçoit le pêne est désaxé.'
          },
          {
              icon: '⚠️',
              title: 'Éviter les dégâts irréversibles',
              description: 'Tenter de résoudre seul peut mener à une porte endommagée de manière irrémédiable.'
          }
      ]
  });

  commitmentsData = signal({
      title: 'Notre méthode professionnelle pour débloquer votre porte à Paris 1',
      subtitle: 'Face à une porte bloquée, notre intervention est méthodique et vise à préserver votre équipement',
      commitments: [
          {
              icon: '🔍',
              title: 'Diagnostic précis',
              description: 'Examen de la porte, cadre, serrure et test de la clé pour identifier la cause racine.'
          },
          {
              icon: '🛠️',
              title: 'Technique la moins invasive',
              description: 'Dégrippage, réglage, crochetage, dépose du cylindre selon la cause identifiée.'
          },
          {
              icon: '⚡',
              title: 'Intervention rapide',
              description: 'Délai d\'arrivée inférieur à 30 minutes dans Paris 1 pour ce type d\'urgence.'
          },
          {
              icon: '💎',
              title: 'Transparence totale',
              description: 'Devis clair et détaillé présenté après diagnostic, avec accord avant tout travail.'
          },
          {
              icon: '🛡️',
              title: 'Préservation de l\'équipement',
              description: 'Priorité aux méthodes non destructives pour éviter d\'endommager votre porte.'
          }
      ]
  });

  servicesData = signal({
      title: 'Services de dépannage pour tous types de portes bloquées dans le 1er',
      subtitle: 'Notre expertise s\'applique à toutes les configurations que nous rencontrons dans l\'arrondissement',
      services: [
          {
              icon: '🏠',
              title: 'Porte d\'entrée d\'appartement bloquée',
              description: 'Impossible d\'entrer ou de sortir.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 85€'
          },
          {
              icon: '🛡️',
              title: 'Porte blindée bloquée',
              description: 'Dépannage spécifique des mécanismes multipoints et cylindres haute sécurité.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 140€'
          },
          {
              icon: '🏢',
              title: 'Porte de bureau ou commerciale bloquée',
              description: 'Pour une reprise d\'activité sans délai.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 95€'
          },
          {
              icon: '🔥',
              title: 'Porte coupe-feu bloquée',
              description: 'Intervention respectueuse des normes de sécurité.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          },
          {
              icon: '🔒',
              title: 'Porte avec serrure 3 points bloquée',
              description: 'Dégrippage ou remplacement du boîtier de serrure.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 110€'
          },
          {
              icon: '🚪',
              title: 'Porte coincée "entre deux"',
              description: 'Ni ouverte ni fermée, souvent problème de pêne.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 90€'
          }
      ],
      ctaText: 'Appelez pour un diagnostic et dépannage',
      ctaPhone: '01 23 45 67 89'
  });

  pricingData = signal({
      title: 'Combien coûte le dépannage d\'une porte bloquée à Paris 1 ?',
      description: 'Le coût d\'un dépannage pour porte bloquée dépend de la complexité de l\'intervention et des pièces à remplacer. Notre politique est d\'offrir une transparence absolue.',
      highlight: 'Notre engagement : Un devis ferme et explicatif avant le début des travaux, sans mauvaise surprise.',
      features: [
          'Forfait de diagnostic et déplacement inclus',
          'Main d\'œuvre adaptée à la complexité',
          'Pièces de rechange de qualité',
          'Accord préalable sur tous les coûts',
          'Investissement durable'
      ]
  });

  conclusionData = signal({
      title: 'Ne restez pas face à une porte bloquée, faites appel à l\'expertise parisienne',
      description: 'Une porte bloquée n\'est pas une fatalité, mais un problème technique qui a une solution. En faisant appel à notre service spécialisé dans le dépannage de porte bloquée à Paris 1, vous choisissez la rapidité, l\'expertise et la préservation de votre bien.',
      ctaText: 'Ne laissez pas un simple blocage vous priver de votre chez-vous ou de votre activité',
      ctaPhone: '01 23 45 67 89',
      ctaDescription: 'Notre solution est à portée de téléphone'
  });

  faqData = signal({
      title: 'FAQ : Porte Bloquée Paris 1',
      questions: [
          {
              question: 'Pouvez-vous débloquer une porte sans casser la serrure ?',
              answer: 'Dans l\'immense majorité des cas, OUI. Notre priorité est d\'utiliser des techniques non destructives : dégrippage, réglage, crochetage ou dépose soigneuse du cylindre. Le perçage ou le forçage ne sont envisagés qu\'en tout dernier recours, avec votre accord, si la serrure est déjà cassée à l\'intérieur.'
          },
          {
              question: 'Ma porte est bloquée à cause de la chaleur/de l\'humidité. Pouvez-vous intervenir ?',
              answer: 'Oui, c\'est fréquent, surtout dans les vieux immeubles parisiens. Le bois gonfle ou le cadre se déforme légèrement. Notre intervention consiste souvent à réajuster la porte (poncer un bord, resserrer des paumelles) ou à réaligner la gâche pour que les pênes s\'engagent à nouveau librement, sans toucher à la serrure.'
          },
          {
              question: 'Que faire si la clé tourne mais que la porte ne s\'ouvre pas ?',
              answer: 'Cela indique généralement un problème entre la serrure et le pêne (barre de transmission cassée dans une serrure 3 points) ou un défaut d\'alignement de la gâche. Notre artisan diagnostiquera si la réparation peut se faire sur place (remplacement du cylindre ou réglage) ou si le boîtier de serrure entier doit être changé.'
          },
          {
              question: 'Proposez-vous une garantie sur le dépannage d\'une porte bloquée ?',
              answer: 'Absolument. Tous nos dépannages et les pièces neuves installées sont garantis. La durée de garantie (souvent 2 ans pour la main d\'œuvre) vous est précisée sur la facture. Cette garantie est votre assurance que l\'intervention est durable.'
          },
          {
              question: 'Votre intervention est-elle plus chère le week-end, la nuit ou pour une porte blindée ?',
              answer: 'Nous appliquons un forfait d\'urgence 24h/24 qui est le même toute la semaine. Pour les portes blindées, l\'intervention nécessitant une expertise supérieure et parfois plus de temps, elle fait l\'objet d\'un devis spécifique reflétant cette technicité, toujours communiqué à l\'avance.'
          }
      ]
  });
}

import { Component, signal } from '@angular/core';
import { HeroSectionComponent } from "../../../components/hero-section/hero-section.component";
import { WhyChooseUsComponent } from "../../../components/why-choose-us/why-choose-us.component";
import { OurCommitmentsComponent } from "../../../components/our-commitments/our-commitments.component";
import { OurServicesComponent } from "../../../components/our-services/our-services.component";
import { PricingTransparencyComponent } from "../../../components/pricing-transparency/pricing-transparency.component";
import { FaqComponent } from "../../../components/faq/faq.component";
import { ConclusionComponent } from "../../../components/conclusion/conclusion.component";

@Component({
  selector: 'app-serrurier-dimanche',
  standalone: true,
  imports: [HeroSectionComponent, WhyChooseUsComponent, OurCommitmentsComponent, OurServicesComponent, PricingTransparencyComponent, FaqComponent, ConclusionComponent],
  templateUrl: './serrurier-dimanche.component.html',
  styleUrl: './serrurier-dimanche.component.scss'
})
export class SerrurierDimancheComponent {

  heroData = signal({
    title: 'Serrurier le Dimanche et Jour Férié à Paris 1',
    subtitle: 'Dépannage 7j/7',
    description: 'Panne de serrure un dimanche ou jour férié à Paris 1 ? Notre serrurier intervient ! Vous profitez d\'un dimanche tranquille dans votre appartement du 1er arrondissement quand soudain, la clé tourne dans le vide... Notre entreprise de serrurerie à Paris a fait le choix de la disponibilité permanente.',
    ctaText: 'Un problème de serrure ce dimanche ou ce jour férié ? Appelez-nous immédiatement',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80'
  });

  whyChooseData = signal({
      title: 'Pourquoi contacter un serrurier ouvert le dimanche et jours fériés à Paris 1 ?',
      description: 'Attendre le lendemain ou le prochain jour ouvrable n\'est souvent pas une option viable. Une porte qui ne ferme plus correctement, des clés perdues ou une serrure cassée constituent une urgence de sécurité qui nécessite une réponse immédiate.',
      benefits: [
          {
              icon: '🛡️',
              title: 'Éviter une insécurité prolongée',
              description: 'Ne laissez pas votre logement ou commerce vulnérable pendant des heures, voire des jours.'
          },
          {
              icon: '⚡',
              title: 'Retrouver un accès normal sans délai',
              description: 'Reprenez vos activités et votre confort sans avoir à vous organiser pour attendre un rendez-vous.'
          },
          {
              icon: '🔧',
              title: 'Bénéficier d\'une expertise professionnelle',
              description: 'Évitez les tentatives de réparation hasardeuses qui pourraient aggraver la situation et engendrer des coûts plus élevés.'
          },
          {
              icon: '✓',
              title: 'Une solution clé en main, immédiate',
              description: 'Diagnostic, ouverture sans dégât, réparation ou remplacement sur place en une seule intervention.'
          }
      ]
  });

  commitmentsData = signal({
      title: 'Notre service d\'urgence les weekends et fêtes : engagements et procédure',
      subtitle: 'Lorsque vous nous contactez un dimanche ou un jour férié, notre processus est optimisé pour une efficacité maximale',
      commitments: [
          {
              icon: '📞',
              title: 'Permanence téléphonique assurée',
              description: 'Notre standard est ouvert et réactif, sans interruption.'
          },
          {
              icon: '⚡',
              title: 'Intervention rapide sur Paris 1',
              description: 'Objectif de délai d\'arrivée inférieur à 30 minutes dans le 1er arrondissement.'
          },
          {
              icon: '🛠️',
              title: 'Techniques d\'ouverture préservant votre porte',
              description: 'Nous privilégions toujours les méthodes non destructives (crochetage, passe technique).'
          },
          {
              icon: '🔐',
              title: 'Matériel de sécurité disponible immédiatement',
              description: 'Nous disposons de cylindres et serrures aux normes A2P pour un remplacement sécurisé sur-le-champ.'
          },
          {
              icon: '💰',
              title: 'Transparence tarifaire totale',
              description: 'Un devis détaillé et ferme vous est présenté avant toute intervention. Pas de surprise sur la facture finale.'
          }
      ]
  });

  servicesData = signal({
      title: 'Services proposés par votre serrurier le dimanche et jours fériés dans le 1er',
      subtitle: 'Notre expertise couvre l\'ensemble des besoins urgents qui peuvent surprendre un weekend ou un jour de repos',
      services: [
          {
              icon: '🚪',
              title: 'Ouverture de porte suite à un claquage',
              description: 'Porte refermée avec les clés à l\'intérieur.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          },
          {
              icon: '🔑',
              title: 'Remplacement de cylindre en urgence',
              description: 'En cas de perte ou de vol de clés, pour rétablir une sécurité complète.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          },
          {
              icon: '🔒',
              title: 'Dépannage de serrure 3 points ou multipoints',
              description: 'Blocage, clé difficile à tourner, mécanisme grippé.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          },
          {
              icon: '🛡️',
              title: 'Intervention sur porte blindée',
              description: 'Dégrippage, réglage, déblocage de pênes.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          },
          {
              icon: '🔧',
              title: 'Réparation de porte ou de boîtier de serrure',
              description: 'Suite à un choc ou une tentative d\'effraction.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          },
          {
              icon: '🚨',
              title: 'Mise en sécurité d\'urgence',
              description: 'Installation de serrure ou de cylindre provisoire si nécessaire.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          }
      ],
      ctaText: 'Appelez pour une intervention immédiate',
      ctaPhone: '01 23 45 67 89'
  });

  pricingData = signal({
      title: 'Tarification d\'une intervention le dimanche ou jour férié à Paris 1',
      description: 'Nous appliquons une politique de transparence absolue. Le coût d\'une intervention un dimanche ou un jour férié comprend un forfait de déplacement et d\'intervention urgente, le temps de main-d\'œuvre et le prix des éventuelles pièces de remplacement.',
      highlight: 'Contrairement à certaines pratiques, nous n\'appliquons pas de majoration "cachée" de dernière minute.',
      features: [
          'Forfait de déplacement et d\'intervention urgente',
          'Temps de main-d\'œuvre professionnelle',
          'Pièces de remplacement aux normes A2P',
          'Prix communiqué et accepté avant travaux',
          'Pas de surprise sur la facture finale'
      ]
  });

  conclusionData = signal({
      title: 'Votre sécurité, notre priorité, même les jours de repos',
      description: 'Votre tranquillité ne prend pas de congé. C\'est pourquoi notre engagement en tant que serrurier de confiance à Paris 1 s\'étend à chaque jour de l\'année, sans exception. En cas de panne un dimanche, un 1er mai, un 14 juillet ou tout autre jour férié, notre équipe est prête à intervenir avec la même rigueur, la même réactivité et le même professionnalisme.',
      ctaText: 'Ne laissez pas une panne gâcher votre weekend ou votre jour de repos',
      ctaPhone: '01 23 45 67 89',
      ctaDescription: 'Notre expertise est à votre service 365 jours par an'
  });

  faqData = signal({
      title: 'FAQ : Serrurier Dimanche & Jours Fériés Paris 1',
      questions: [
          {
              question: 'Êtes-vous vraiment ouverts et intervenants tous les dimanches et jours fériés sans exception ?',
              answer: 'Oui, sans aucune exception. Notre service d\'urgence, incluant la permanence téléphonique et les équipes d\'intervention, est actif 365 jours par an. Que ce soit le 25 décembre, le 1er janvier, le 14 juillet ou un dimanche ordinaire, nous sommes joignables et intervenons.'
          },
          {
              question: 'Les tarifs sont-ils plus élevés les dimanches et jours fériés ?',
              answer: 'Notre politique est la transparence. Nous appliquons un forfait d\'urgence pour les interventions en dehors des heures ouvrables classiques (soirs, weekends, fêtes). Ce forfait, clairement identifié, vous est toujours communiqué à l\'avance dans le devis détaillé. Il n\'y a pas de majoration cachée ou de surprise à la fin.'
          },
          {
              question: 'Proposez-vous les mêmes services et garanties un dimanche qu\'en semaine ?',
              answer: 'Absolument. La qualité du service, l\'expertise des artisans et les garanties (sur les pièces et la main-d\'œuvre) sont strictement identiques. Nous utilisons le même matériel de qualité et suivons les mêmes procédures rigoureuses.'
          },
          {
              question: 'Puis-je avoir un devis gratuit pour une intervention un dimanche ?',
              answer: 'Oui, c\'est une règle incontournable chez nous. Nous établissons toujours un devis détaillé et gratuit par téléphone après avoir écouté votre problème. Aucun travail ne commence avant que vous n\'ayez donné votre accord formel sur ce devis.'
          },
          {
              question: 'Que faire si je n\'ai plus mes clés et que tous les magasins sont fermés ?',
              answer: 'C\'est une situation typique que nous gérons très bien. Nous intervenons pour ouvrir votre porte sans clé grâce à nos techniques spécialisées. Ensuite, nous pouvons immédiatement remplacer le cylindre par un neuf que nous avons en stock, vous permettant de récupérer un accès complet et sécurisé sans attendre l\'ouverture des commerces.'
          }
      ]
  });
}

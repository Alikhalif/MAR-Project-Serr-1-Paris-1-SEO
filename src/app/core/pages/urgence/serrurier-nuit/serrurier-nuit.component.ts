import { Component, signal } from '@angular/core';
import { ConclusionComponent } from "../../../components/conclusion/conclusion.component";
import { FaqComponent } from "../../../components/faq/faq.component";
import { PricingTransparencyComponent } from "../../../components/pricing-transparency/pricing-transparency.component";
import { OurServicesComponent } from "../../../components/our-services/our-services.component";
import { OurCommitmentsComponent } from "../../../components/our-commitments/our-commitments.component";
import { WhyChooseUsComponent } from "../../../components/why-choose-us/why-choose-us.component";
import { HeroSectionComponent } from "../../../components/hero-section/hero-section.component";

@Component({
  selector: 'app-serrurier-nuit',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './serrurier-nuit.component.html',
  styleUrl: './serrurier-nuit.component.scss'
})
export class SerrurierNuitComponent {

  heroData = signal({
    title: 'Serrurier Nuit à Paris 1',
    subtitle: 'Intervention d\'Urgence 24h/24',
    description: 'Enfermé(e) ou en insécurité en pleine nuit à Paris 1 ? Notre serrurier de nuit intervient sous 30 minutes ! Il est 2 heures du matin dans le 1er arrondissement... Notre équipe d\'artisans d\'urgence est spécialement organisée pour des interventions nocturnes rapides et discrètes.',
    ctaText: 'Bloqué(e) ou en insécurité en pleine nuit à Paris 1 ? Appelez notre service de garde',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://i.ibb.co/X1GsDJN/nuit-5.png'
  });

  whyChooseData = signal({
      title: 'Pourquoi une intervention de serrurier de nuit est souvent indispensable ?',
      description: 'Attendre le lever du jour n\'est pas une option quand votre sécurité personnelle ou celle de votre bien est en jeu. Une porte qui ne ferme plus, une clé perdue ou cassée, ou une tentative d\'effraction constatée nécessitent une réponse dans l\'heure.',
      benefits: [
          {
              icon: '🛡️',
              title: 'La sécurité immédiate',
              description: 'Ne pas laisser une porte fracturée ou un cylindre défectueux vous exposer au danger pendant des heures.'
          },
          {
              icon: '😌',
              title: 'La fin du stress et de l\'inconfort',
              description: 'Éviter de passer la nuit dans le froid, chez des connaissances ou dans un hôtel, à cause d\'une simple clé.'
          },
          {
              icon: '🔧',
              title: 'Une expertise professionnelle, même de nuit',
              description: 'Prévenir les dommages irréversibles que pourrait causer une tentative de forçage amateur sur votre porte ou votre serrure.'
          },
          {
              icon: '⚡',
              title: 'Une solution technique complète',
              description: 'De l\'ouverture sans dégât au remplacement immédiat du cylindre pour sécuriser définitivement votre accès.'
          }
      ]
  });

  commitmentsData = signal({
      title: 'Notre protocole d\'intervention nocturne : rapidité, discrétion et expertise',
      subtitle: 'Notre service est conçu pour l\'urgence nocturne. Lorsque vous nous appelez entre 22h et 6h du matin, vous activez un processus optimisé',
      commitments: [
          {
              icon: '📞',
              title: 'Permanence téléphonique nocturne dédiée',
              description: 'Un conseiller vous écoute, évalue calmement l\'urgence et règle les modalités.'
          },
          {
              icon: '⚡',
              title: 'Intervention express dans Paris 1',
              description: 'Objectif moins de 30 minutes de délai d\'arrivée, grâce à nos artisans en astreinte répartis dans Paris.'
          },
          {
              icon: '🔦',
              title: 'Intervention discrète et respectueuse',
              description: 'Équipements adaptés pour un travail efficace avec un impact sonore minimal pour le voisinage.'
          },
          {
              icon: '🛠️',
              title: 'Techniques d\'ouverture non destructives',
              description: 'Priorité absolue au crochetage et aux méthodes préservant l\'intégrité de votre porte et de votre serrure.'
          },
          {
              icon: '💰',
              title: 'Transparence tarifaire avant toute action',
              description: 'Un devis ferme et détaillé vous est communiqué et accepté avant le début des travaux. Aucun coût caché.'
          }
      ]
  });

  servicesData = signal({
      title: 'Les urgences traitées par votre serrurier de nuit dans le 1er arrondissement',
      subtitle: 'Notre expertise nocturne couvre toutes les pannes qui ne peuvent attendre le matin',
      services: [
          {
              icon: '🚪',
              title: 'Ouverture de porte après claquage nocturne',
              description: 'Les clés sont restées à l\'intérieur en rentrant de soirée.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          },
          {
              icon: '🔑',
              title: 'Extraction d\'urgence d\'une clé cassée',
              description: 'Le fragment est coincé, rendant l\'accès impossible.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          },
          {
              icon: '🔒',
              title: 'Serrure ou cylindre brutalement bloqué',
              description: 'Impossible d\'entrer ou de sortir.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          },
          {
              icon: '🚨',
              title: 'Mise en sécurité après tentative d\'effraction',
              description: 'Réparation d\'urgence d\'une porte ou d\'une serrure forcée.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          },
          {
              icon: '❌',
              title: 'Perte totale des clés en nuit',
              description: 'Nécessite un remplacement immédiat du barillet pour une sécurité retrouvée.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          },
          {
              icon: '🛡️',
              title: 'Dépannage sur porte blindée défaillante',
              description: 'Problème mécanique empêchant la fermeture ou l\'ouverture.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          }
      ],
      ctaText: 'Appelez pour une intervention nocturne immédiate',
      ctaPhone: '01 23 45 67 89'
  });

  pricingData = signal({
      title: 'Tarification d\'une intervention de serrurier la nuit à Paris 1',
      description: 'La transparence est d\'autant plus cruciale lors d\'une situation stressante en pleine nuit. Le coût d\'une intervention de serrurier de nuit comprend un forfait d\'urgence nocturne, la main-d\'œuvre et le prix des pièces de remplacement.',
      highlight: 'Notre engagement : le prix convenu au téléphone est le prix final que vous payez.',
      features: [
          'Forfait d\'urgence nocturne',
          'Main-d\'œuvre professionnelle',
          'Pièces de remplacement aux normes A2P/BMP',
          'Prix communiqué et accepté avant travaux',
          'Aucune surprise sur la facture finale'
      ]
  });

  conclusionData = signal({
      title: 'Votre gardien de nuit, expert en sécurité à Paris 1',
      description: 'La nuit ne doit pas être synonyme d\'impuissance face à une panne de serrure. Notre rôle est d\'être le partenaire de confiance sur lequel vous pouvez compter, quelle que soit l\'heure indiquée sur votre réveil. En choisissant notre service de serrurier de nuit à Paris 1, vous optez pour plus qu\'une simple ouverture de porte.',
      ctaText: 'Ne restez pas seul(e) face à l\'urgence nocturne',
      ctaPhone: '01 23 45 67 89',
      ctaDescription: 'Notre équipe veille pour vous permettre de retrouver le sommeil rapidement'
  });

  faqData = signal({
      title: 'FAQ : Serrurier de Nuit Paris 1',
      questions: [
          {
              question: 'Êtes-vous vraiment disponibles et intervenants toute la nuit, même après minuit ?',
              answer: 'Oui, absolument. Notre service d\'urgence 24h/24 est pleinement actif toute la nuit, de 20h à 8h du matin, sans aucune interruption. Nos artisans sont en astreinte et nos lignes téléphoniques ouvertes pour répondre à vos appels, même à 3h du matin.'
          },
          {
              question: 'Les interventions de nuit sont-elles beaucoup plus chères ?',
              answer: 'Nous appliquons un forfait d\'urgence nocturne qui reflète la disponibilité hors horaires conventionnels. Ce forfait, toujours communiqué à l\'avance et de manière transparente lors du devis téléphonique, est le seul supplément. Il n\'y a pas de "double tarif" ou de majoration imprévue.'
          },
          {
              question: 'Pouvez-vous intervenir sans faire de bruit pour ne pas déranger les voisins ?',
              answer: 'Nous en sommes parfaitement conscients. Nos interventions de nuit sont menées avec le plus grand souci de discrétion. Nous utilisons des outils et des techniques adaptés pour minimiser toute nuisance sonore et visuelle.'
          },
          {
              question: 'Que se passe-t-il si j\'ai perdu toutes mes clés en pleine nuit ? Pouvez-vous m\'en fabriquer de nouvelles ?',
              answer: 'Tout à fait. Nous intervenons d\'abord pour ouvrir votre porte sans clé. Ensuite, nous remplaçons le cylindre par un neuf, ce qui vous donne immédiatement un jeu de clés neuves et invalide les anciennes, garantissant ainsi votre sécurité.'
          },
          {
              question: 'Proposez-vous une garantie sur les interventions réalisées de nuit ?',
              answer: 'Bien sûr. La garantie sur nos interventions et sur les pièces posées est identique, que l\'intervention ait lieu de jour ou de nuit. Vous recevez une facture détaillée qui sert de justificatif de garantie pour la main-d\'œuvre et les produits installés.'
          }
      ]
  });
}

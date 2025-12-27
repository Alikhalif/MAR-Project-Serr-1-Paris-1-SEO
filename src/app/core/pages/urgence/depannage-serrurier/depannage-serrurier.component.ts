import { Component, signal } from '@angular/core';
import { ConclusionComponent } from "../../../components/conclusion/conclusion.component";
import { FaqComponent } from "../../../components/faq/faq.component";
import { PricingTransparencyComponent } from "../../../components/pricing-transparency/pricing-transparency.component";
import { OurCommitmentsComponent } from "../../../components/our-commitments/our-commitments.component";
import { WhyChooseUsComponent } from "../../../components/why-choose-us/why-choose-us.component";
import { OurServicesComponent } from "../../../components/our-services/our-services.component";
import { HeroSectionComponent } from "../../../components/hero-section/hero-section.component";

@Component({
  selector: 'app-depannage-serrurier',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurCommitmentsComponent, WhyChooseUsComponent, OurServicesComponent, HeroSectionComponent],
  templateUrl: './depannage-serrurier.component.html',
  styleUrl: './depannage-serrurier.component.scss'
})
export class DepannageSerrurierComponent {

  heroData = signal({
    title: 'Dépannage Serrurier à Paris 1',
    subtitle: 'Votre Expert en Urgence & Réparation 24h/24',
    description: 'Besoin d\'un <strong>dépannage serrurier à Paris 1 ?</strong> <br>Notre expertise vous dépanne en moins de 30 minutes. Une serrure qui grince, une clé qui résiste, une porte qui ne ferme plus correctement… Notre entreprise de serrurerie parisienne offre un service de dépannage serrurier complet et réactif à Paris 1.',
    ctaText: 'Pour un dépannage serrurier rapide, propre et garanti à Paris 1, appelez-nous 24h/24',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80'
  });

  whyChooseData = signal({
      title: 'Pourquoi choisir un artisan qualifié pour votre dépannage serrurier dans Paris 1 ?',
      description: 'Face à une panne, la tentation de chercher une solution économique ou rapide sur internet est grande. Cependant, le dépannage serrurerie est un métier technique qui exige savoir-faire et équipement spécifique.',
      benefits: [
          {
              icon: '🔧',
              title: 'Éviter l\'aggravation de la panne',
              description: 'Manipulation inadaptée peut transformer une réparation simple en remplacement coûteux.'
          },
          {
              icon: '🚪',
              title: 'Préserver votre porte',
              description: 'Éviter d\'endommager votre porte en bois, PVC ou aluminium.'
          },
          {
              icon: '🛡️',
              title: 'Garantir votre sécurité',
              description: 'Réparation professionnelle évite les points faibles exploitables.'
          },
          {
              icon: '✓',
              title: 'Bénéficier de garanties',
              description: 'Garantie sur les travaux et les pièces, protection en cas de récidive.'
          }
      ]
  });

  commitmentsData = signal({
      title: 'Notre méthodologie de dépannage : réactive, précise et transparente',
      subtitle: 'Notre processus est conçu pour répondre à votre attente avec efficacité et sérénité',
      commitments: [
          {
              icon: '📞',
              title: 'Écoute et analyse téléphonique',
              description: 'Identification de la nature du problème pour préparer l\'intervention.'
          },
          {
              icon: '⚡',
              title: 'Déplacement ultra-rapide',
              description: 'Objectif moins de 30 minutes pour arriver à votre adresse dans Paris 1.'
          },
          {
              icon: '🔍',
              title: 'Diagnostic expert sur place',
              description: 'Examen de la porte, serrure, clés et explication de la cause exacte.'
          },
          {
              icon: '💰',
              title: 'Devis détaillé et transparent',
              description: 'Options de réparation présentées clairement avec devis ferme avant tout travail.'
          },
          {
              icon: '🛠️',
              title: 'Réparation avec outils professionnels',
              description: 'Mise en œuvre des solutions avec équipement adapté.'
          }
      ]
  });

  servicesData = signal({
      title: 'Notre champ d\'expertise : tous vos besoins en dépannage serrurerie dans le 1er',
      subtitle: 'Notre service de dépannage serrurier urgent et différé couvre l\'ensemble des pannes courantes à Paris',
      services: [
          {
              icon: '🚨',
              title: 'Ouverture de porte en urgence',
              description: 'Porte claquée, bloquée ou ne s\'ouvrant plus.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 89€'
          },
          {
              icon: '🔑',
              title: 'Extraction de clé cassée',
              description: 'Retrait du fragment de clé coincé dans le cylindre.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 75€'
          },
          {
              icon: '🔧',
              title: 'Dépannage de serrure',
              description: 'Serrure ou cylindre grippé, dur à tourner.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 65€'
          },
          {
              icon: '🚪',
              title: 'Réglage et réalignement',
              description: 'Porte qui frotte, réglage des paumelles, réalignement.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 70€'
          },
          {
              icon: '🔒',
              title: 'Réparation serrure 3 points',
              description: 'Dépannage de mécanisme multipoints ou crémone.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 90€'
          },
          {
              icon: '🛡️',
              title: 'Dépannage porte blindée',
              description: 'Intervention sur mécanisme, pênes des portes haute sécurité.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 120€'
          }
      ],
      ctaText: 'Appelez pour un devis de dépannage',
      ctaPhone: '01 23 45 67 89'
  });

  pricingData = signal({
      title: 'Tarification claire et juste pour votre dépannage à Paris 1',
      description: 'La transparence est au cœur de notre relation client. Le coût d\'un dépannage serrurier dépend de trois facteurs simples, tous communiqués à l\'avance.',
      highlight: 'Notre engagement : Pas de surprise. Devis détaillé et ferme avant le début des travaux.',
      features: [
          'Forfait de déplacement/d\'intervention',
          'Temps de main d\'œuvre pour la réparation',
          'Coût des pièces de remplacement validé avant pose',
          'Transparence totale sur les coûts',
          'Réparation durable justifiant son coût'
      ]
  });

  conclusionData = signal({
      title: 'Votre partenaire de confiance pour un dépannage serein à Paris 1',
      description: 'Un problème de serrurerie ne doit pas virer au casse-tête. En faisant appel à notre service de dépannage serrurier à Paris 1, vous choisissez un interlocuteur unique, responsable et compétent pour gérer votre urgence ou votre panne du quotidien.',
      ctaText: 'Ne laissez pas une panne miner votre quotidien',
      ctaPhone: '01 23 45 67 89',
      ctaDescription: 'Notre expertise est à votre service, jour et nuit'
  });

  faqData = signal({
      title: 'FAQ : Dépannage Serrurier Paris 1',
      questions: [
          {
              question: 'Quels sont vos délais d\'intervention pour un dépannage à Paris 1 ?',
              answer: 'Pour toute urgence (porte claquée, bloquée, clé cassée...), nous nous engageons sur un délai moyen d\'arrivée inférieur à 30 minutes dans le 1er arrondissement. Pour un dépannage non urgent (porte qui grince, serrure dure), nous convenons d\'un créneau horaire précis avec vous, généralement le même jour.'
          },
          {
              question: 'Proposez-vous un devis gratuit pour le dépannage ?',
              answer: 'Oui, systématiquement. Après un diagnostic sur place, nous vous remettons toujours un devis détaillé, gratuit et sans engagement. Il précise la nature de la panne, la solution proposée, le coût de la main d\'œuvre et celui des pièces. Vous ne payez que ce qui est écrit et accepté sur le devis.'
          },
          {
              question: 'Utilisez-vous des pièces de qualité ? Puis-je fournir mes propres pièces ?',
              answer: 'Nous n\'utilisons que des pièces de qualité professionnelle, provenant de fournisseurs reconnus (cylindres A2P/BMP, serrures certifiées). Pour des raisons de responsabilité et de garantie sur la pose, nous ne posons pas de pièces fournies par le client. Nous devons maîtriser parfaitement la provenance et la conformité de chaque élément installé.'
          },
          {
              question: 'Votre intervention est-elle garantie ?',
              answer: 'Oui, à double titre. 1) Garantie sur la main d\'œuvre (généralement 2 ans) : L\'intervention en elle-même est couverte. 2) Garantie constructeur sur les pièces neuves : Les cylindres, serrures et autres pièces bénéficient de la garantie du fabricant, dont nous vous transmettons les documents.'
          },
          {
              question: 'Intervenez-vous chez les professionnels (bureaux, commerces) dans Paris 1 ?',
              answer: 'Absolument. Nous réalisons de nombreux dépannages pour les professionnels du quartier (boutiques, restaurants, bureaux, hôtels). Nous comprenons l\'enjeu critique de la continuité d\'activité et nous adaptons à vos contraintes horaires, en intervenant souvent en dehors des heures d\'ouverture pour ne pas gêner votre clientèle.'
          }
      ]
  });
}

import { Component, signal } from '@angular/core';
import { ConclusionComponent } from "../../../components/conclusion/conclusion.component";
import { FaqComponent } from "../../../components/faq/faq.component";
import { PricingTransparencyComponent } from "../../../components/pricing-transparency/pricing-transparency.component";
import { OurServicesComponent } from "../../../components/our-services/our-services.component";
import { OurCommitmentsComponent } from "../../../components/our-commitments/our-commitments.component";
import { WhyChooseUsComponent } from "../../../components/why-choose-us/why-choose-us.component";
import { HeroSectionComponent } from "../../../components/hero-section/hero-section.component";

@Component({
  selector: 'app-perte-cles-securisation',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './perte-cles-securisation.component.html',
  styleUrl: './perte-cles-securisation.component.scss'
})
export class PerteClesSecurisationComponent {

  heroData = signal({
    title: 'Perte de Clés à Paris 1',
    subtitle: 'Notre Intervention Urgente pour Sécuriser Votre Domicile',
    description: '<strong>Vous avez perdu vos clés dans Paris 1 ?</strong> <br>Notre intervention urgente vous protège en moins de 30 minutes. Vous fouillez frénétiquement vos poches, votre sac, retracez mentalement votre parcours... Notre entreprise de serrurerie parisienne intervient spécifiquement pour gérer l\'urgence liée à la perte de clés à Paris 1.',
    ctaText: 'Vous avez perdu vos clés dans Paris 1 ? Appelez l\'urgence sécurité',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://i.ibb.co/spLjjC3b/perte-cles-3.png'
  });

  whyChooseData = signal({
      title: 'Pourquoi une perte de clés constitue-t-elle une urgence de sécurité à Paris 1 ?',
      description: 'Contrairement à une porte claquée, la perte des clés implique un risque actif. Le danger ne réside pas dans la porte elle-même, mais dans l\'incertitude quant à l\'endroit où se trouvent vos clés et qui pourrait les détenir.',
      benefits: [
          {
              icon: '🚨',
              title: 'Risque d\'intrusion immédiat',
              description: 'Si vos clés sont identifiables avec adresse, votre domicile est directement compromis.'
          },
          {
              icon: '⚠️',
              title: 'Vulnérabilité permanente',
              description: 'Tant que l\'ancien cylindre est en place, les clés perdues peuvent ouvrir votre porte à tout moment.'
          },
          {
              icon: '🛡️',
              title: 'Responsabilité de sécurité',
              description: 'Obligation de garantir la sécurité des lieux, surtout en location ou gestion professionnelle.'
          },
          {
              icon: '⚡',
              title: 'Action rapide indispensable',
              description: 'Attendre revient à laisser la porte ouverte aux risques d\'intrusion.'
          }
      ]
  });

  commitmentsData = signal({
      title: 'Notre protocole d\'urgence pour perte de clés : Sécurité et réactivité',
      subtitle: 'Notre intervention est structurée pour répondre à la double exigence d\'urgence et de sécurité',
      commitments: [
          {
              icon: '🔐',
              title: 'Ouverture sans clé par méthode non destructive',
              description: 'Crochetage ou passe technique sans endommager la serrure existante.'
          },
          {
              icon: '🛠️',
              title: 'Remplacement systématique du cylindre',
              description: 'Dépose de l\'ancien cylindre et installation d\'un nouveau pour invalider les clés perdues.'
          },
          {
              icon: '🛡️',
              title: 'Cylindres haute sécurité A2P/BMP',
              description: 'Proposition de cylindres certifiés anti-perçage et anti-crochetage pour renforcer la protection.'
          },
          {
              icon: '⚡',
              title: 'Intervention rapide',
              description: 'Délai d\'arrivée inférieur à 30 minutes dans Paris 1.'
          },
          {
              icon: '💰',
              title: 'Transparence totale',
              description: 'Devis détaillé et ferme présenté avant toute intervention.'
          }
      ]
  });

  servicesData = signal({
      title: 'Nos services complets suite à une perte de clés dans le 1er arrondissement',
      subtitle: 'Nous gérons tous les scénarios liés à la disparition de vos clés',
      services: [
          {
              icon: '🏠',
              title: 'Perte des clés d\'appartement',
              description: 'Sécurisation immédiate du domicile avec changement de cylindre.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 140€'
          },
          {
              icon: '🛡️',
              title: 'Perte des clés de porte blindée',
              description: 'Remplacement par un cylindre haute sécurité A2P adapté.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 180€'
          },
          {
              icon: '🎒',
              title: 'Vol de sac ou de porte-clés',
              description: 'Urgence absolue avec risque d\'intrusion élevé.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 150€'
          },
          {
              icon: '🏢',
              title: 'Perte des clés de local professionnel',
              description: 'Protection de votre activité, données et matériel.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 160€'
          },
          {
              icon: '❌',
              title: 'Perte d\'un jeu de clés unique',
              description: 'Intervention pour ouvrir puis remplacer la serrure.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 140€'
          },
          {
              icon: '🔒',
              title: 'Changement de cylindre préventif',
              description: 'Si clés retrouvées après un long délai, changement recommandé.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 120€'
          }
      ],
      ctaText: 'Appelez pour une sécurisation immédiate',
      ctaPhone: '01 23 45 67 89'
  });

  pricingData = signal({
      title: 'Tarification transparente pour le traitement d\'une perte de clés à Paris 1',
      description: 'Le coût de la sécurisation après une perte de clés se décompose de manière transparente avec forfait d\'ouverture et prix du cylindre de remplacement.',
      highlight: 'Notre engagement : Devis global présenté et accepté avant le début des travaux, sans surprise.',
      features: [
          'Forfait d\'ouverture sans clé',
          'Prix du cylindre de remplacement',
          'Main d\'œuvre pour le changement',
          'Jeu de clés neuves inclus',
          'Investissement de sécurité essentiel'
      ]
  });

  conclusionData = signal({
      title: 'Une perte de clés est réversible, l\'insécurité ne doit pas l\'être',
      description: 'Perdre ses clés dans l\'effervescence de Paris 1 peut arriver à tout le monde. Ce qui importe, c\'est la réaction qui suit. En faisant immédiatement appel à notre service spécialisé dans la gestion de la perte de clés à Paris 1, vous prenez la décision responsable qui protège votre foyer ou votre activité.',
      ctaText: 'Ne laissez pas le doute s\'installer',
      ctaPhone: '01 23 45 67 89',
      ctaDescription: 'Agissez immédiatement pour sécuriser votre patrimoine'
  });

  faqData = signal({
      title: 'FAQ : Perte de Clés / Clé Perdue Paris 1',
      questions: [
          {
              question: 'Est-il absolument nécessaire de changer la serrure si je perds mes clés ?',
              answer: 'D\'un point de vue sécurité, OUI, c\'est indispensable. Tant que l\'ancien cylindre est en place, les clés perdues (ou celui qui les a trouvées) peuvent ouvrir votre porte. Le remplacement du cylindre est la seule garantie de rendre ces clés inutiles et de rétablir une confidentialité totale.'
          },
          {
              question: 'Ne puis-je pas juste faire ouvrir la porte et commander un double de clés plus tard ?',
              answer: 'Non, cela serait très risqué. Pour fabriquer un double, il faut soit l\'original (perdu), soit le cylindre. Un serrurier ne peut pas reproduire une clé à partir de rien. La seule façon d\'obtenir de nouvelles clés est d\'installer un nouveau cylindre, qui sera livré avec son propre jeu de clés neuves.'
          },
          {
              question: 'Que se passe-t-il si je suis locataire ? Dois-je prévenir le propriétaire ?',
              answer: 'Vous devez prévenir le propriétaire ou l\'agence de gestion dans les meilleurs délais. Cependant, l\'urgence de sécurité prime. Vous pouvez faire procéder au changement de cylindre pour vous protéger immédiatement. Conservez l\'ancien cylindre et la facture pour coordination avec le propriétaire.'
          },
          {
              question: 'Proposez-vous des cylindres de haute sécurité ?',
              answer: 'Absolument, et nous le recommandons fortement dans ce contexte. Profitez de ce changement forcé pour améliorer votre sécurité en optant pour un cylindre certifié A2P. Ces cylindres résistent au perçage, au crochetage et à l\'arrachage. Nous avons plusieurs modèles en stock et vous conseillons sur le choix.'
          },
          {
              question: 'Et si je retrouve mes clés après votre intervention ?',
              answer: 'C\'est une bonne nouvelle, mais cela ne change rien. Une fois le nouveau cylindre installé, les anciennes clés sont définitivement invalides. Vous pouvez les jeter ou les conserver comme souvenir. Vos nouvelles clés sont les seules à fonctionner. Votre sécurité est désormais étanche.'
          }
      ]
  });
}

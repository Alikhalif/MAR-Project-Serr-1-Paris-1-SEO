import { Component, signal } from '@angular/core';
import { ConclusionComponent } from "../../../components/conclusion/conclusion.component";
import { FaqComponent } from "../../../components/faq/faq.component";
import { PricingTransparencyComponent } from "../../../components/pricing-transparency/pricing-transparency.component";
import { OurServicesComponent } from "../../../components/our-services/our-services.component";
import { OurCommitmentsComponent } from "../../../components/our-commitments/our-commitments.component";
import { WhyChooseUsComponent } from "../../../components/why-choose-us/why-choose-us.component";
import { HeroSectionComponent } from "../../../components/hero-section/hero-section.component";

@Component({
  selector: 'app-changement-barillet',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './changement-barillet.component.html',
  styleUrl: './changement-barillet.component.scss'
})
export class ChangementBarilletComponent {

  heroData = signal({
    title: 'Changement de Barillet à Paris 1',
    subtitle: 'Sécurité Renouvelée en 30 Minutes',
    description: 'Votre <strong>barillet est défectueux à Paris 1 ?</strong> Notre changement express restaure votre sécurité. Le barillet, également appelé cylindre, est la pièce maîtresse de votre serrure... Notre entreprise de serrurerie à Paris réalise des changements de barillet professionnels et sécurisés à Paris 1.',
    ctaText: 'Pour un changement de barillet rapide et sécurisé à Paris 1, appelez nos experts',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80'
  });

  whyChooseData = signal({
      title: 'Pourquoi changer le barillet de votre serrure à Paris 1 ?',
      description: 'Le barillet est un consommable de sécurité. Son remplacement est une nécessité dans plusieurs situations critiques.',
      benefits: [
          {
              icon: '🔑',
              title: 'Perte ou vol de clés',
              description: 'Urgence absolue : seule façon de rendre inopérantes les clés égarées et reprendre contrôle de votre sécurité.'
          },
          {
              icon: '🏠',
              title: 'À l\'emménagement',
              description: 'Mesure de précaution fondamentale en ignorant qui détient des copies des anciennes clés.'
          },
          {
              icon: '⚙️',
              title: 'Usure ou dysfonctionnement',
              description: 'Clé qui tourne difficilement, reste coincée : signe de panne complète imminente.'
          },
          {
              icon: '🛡️',
              title: 'Amélioration de la sécurité',
              description: 'Opportunité de passer à un barillet certifié A2P pour protection optimale.'
          }
      ]
  });

  commitmentsData = signal({
      title: 'Notre protocole expert pour un changement de barillet réussi à Paris 1',
      subtitle: 'Notre intervention est méthodique, rapide et garantie',
      commitments: [
          {
              icon: '🔍',
              title: 'Diagnostic et conseil',
              description: 'Mesure précise de l\'ancien barillet et présentation des options (standard ou A2P).'
          },
          {
              icon: '📋',
              title: 'Choix du modèle et devis transparent',
              description: 'Devis ferme et détaillé incluant prix du barillet neuf et main d\'œuvre de remplacement.'
          },
          {
              icon: '🔧',
              title: 'Dépose de l\'ancien barillet',
              description: 'Dévissage de la vis de fixation latérale et retrait sans dégât en quelques secondes.'
          },
          {
              icon: '🔄',
              title: 'Pose et réglage du nouveau barillet',
              description: 'Insertion du barillet neuf, vérification de la saillie parfaite, serrage adapté.'
          },
          {
              icon: '🗝️',
              title: 'Tests rigoureux et remise des clés',
              description: 'Test du nouveau barillet des dizaines de fois avec les nouvelles clés (généralement 3).'
          }
      ]
  });

  servicesData = signal({
      title: 'Quel barillet choisir pour votre porte à Paris 1 ?',
      subtitle: 'Nous vous guidons dans le choix technique essentiel adapté à vos besoins',
      services: [
          {
              icon: '🔑',
              title: 'Barillet Européen Standard',
              description: 'Remplacement à l\'identique en cas d\'usure simple, sans renforcement.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 80€'
          },
          {
              icon: '🛡️',
              title: 'Barillet Haute Sécurité A2P',
              description: 'Recommandé : protections anti-perçage, anti-crochetage, anti-arrachage.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 120€'
          },
          {
              icon: '🔄',
              title: 'Barillet à Double Entrée',
              description: 'S\'ouvre des deux côtés avec une clé, pour portes sans bouton intérieur.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 90€'
          },
          {
              icon: '🔘',
              title: 'Barillet 1/2 Tour (à Bouton)',
              description: 'Ouverture extérieure avec clé, intérieure avec bouton - confort quotidien.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 100€'
          },
          {
              icon: '🛡️',
              title: 'Barillet à Protège Bouchon',
              description: 'Renfort frontal accru contre le perçage pour sécurité renforcée.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 130€'
          },
          {
              icon: '🔑',
              title: 'Système à Clé Unique',
              description: 'Harmonisation de toutes vos serrures avec un même barillet.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          }
      ],
      ctaText: 'Appelez pour un conseil personnalisé',
      ctaPhone: '01 23 45 67 89'
  });

  pricingData = signal({
      title: 'Tarification claire et juste pour un changement de barillet à Paris 1',
      description: 'Le coût est simple, prévisible et se décompose ainsi dans votre devis : prix du barillet neuf + main d\'œuvre de pose.',
      highlight: 'Notre engagement : Transparence totale. Devis contractuel et sans surprise.',
      features: [
          'Prix du barillet neuf selon modèle et sécurité',
          'Main d\'œuvre forfaitaire pour intervention rapide',
          'Investissement modique pour sécurité pérenne',
          'Comparaison avantageuse avec risques sécuritaires',
          'Transparence complète sur tous les coûts'
      ]
  });

  conclusionData = signal({
      title: 'Redonnez un cœur neuf et robuste à votre serrure à Paris 1',
      description: 'Le changement de barillet est l\'intervention de sécurité la plus efficace par son rapport simplicité/coût/résultat. En confiant cette tâche à notre entreprise spécialisée dans le 1er arrondissement de Paris, vous optez pour l\'expertise, la qualité des composants et une rapidité d\'exécution.',
      ctaText: 'Ne laissez pas une petite pièce défectueuse compromettre votre sécurité globale',
      ctaPhone: '01 23 45 67 89',
      ctaDescription: 'Optez pour un changement expert'
  });

  faqData = signal({
      title: 'FAQ : Changement Barillet Paris 1',
      questions: [
          {
              question: 'Puis-je changer le barillet moi-même ?',
              answer: 'La manipulation est techniquement simple (une vis à dévisser), mais le choix de la pièce est critique. Une erreur de mesure de quelques millimètres rend le barillet inutilisable ou peu sécurisé. De plus, sans conseil professionnel, vous pourriez passer à côté de l\'opportunité d\'installer un barillet A2P bien plus protecteur. Notre intervention garantit le bon modèle et une pose optimale.'
          },
          {
              question: 'Barillet A2P ou standard : lequel choisir ?',
              answer: 'Pour une porte d\'entrée principale, nous recommandons fortement le barillet A2P. La différence de sécurité est considérable : Standard : une pièce mécanique simple. A2P : une pièce certifiée pour résister plus de 15 minutes au perçage, au crochetage, à l\'arrachage et au bumping. C\'est le meilleur dissuasif anti-cambriolage pour un budget maîtrisé.'
          },
          {
              question: 'Combien de temps prend le changement sur place ?',
              answer: 'L\'intervention pure (dépose + pose + tests) est très rapide : entre 15 et 30 minutes une fois le bon barillet en main. Le temps total inclut notre déplacement jusqu\'à chez vous dans Paris 1 (objectif <30 min en urgence), le diagnostic et les explications.'
          },
          {
              question: 'Dois-je changer toutes les serrures de mon appartement si je perds mes clés ?',
              answer: 'Pas nécessairement. Si vous avez une clé unique pour l\'entrée et les portes intérieures, changer le barillet de la porte d\'entrée suffit. Si vous avez des clés différentes, vous pouvez ne changer que le barillet concerné par la perte. Nous pouvons aussi vous proposer de créer un système à clé unique lors de ce changement pour simplifier votre quotidien.'
          },
          {
              question: 'Que deviennent mes anciennes clés après le changement ?',
              answer: 'Elles sont immédiatement et définitivement invalides pour la nouvelle serrure. Le barillet neuf a un code interne différent. Vous pouvez les jeter. Seules les nouvelles clés que nous vous remettons fonctionneront. C\'est tout l\'intérêt du changement après une perte.'
          }
      ]
  });
}

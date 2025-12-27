import { Component, signal } from '@angular/core';
import { ConclusionComponent } from "../../../components/conclusion/conclusion.component";
import { FaqComponent } from "../../../components/faq/faq.component";
import { PricingTransparencyComponent } from "../../../components/pricing-transparency/pricing-transparency.component";
import { OurServicesComponent } from "../../../components/our-services/our-services.component";
import { OurCommitmentsComponent } from "../../../components/our-commitments/our-commitments.component";
import { WhyChooseUsComponent } from "../../../components/why-choose-us/why-choose-us.component";
import { HeroSectionComponent } from "../../../components/hero-section/hero-section.component";

@Component({
  selector: 'app-cle-cassee-serrure',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './cle-cassee-serrure.component.html',
  styleUrl: './cle-cassee-serrure.component.scss'
})
export class CleCasseeSerrureComponent {

  heroData = signal({
    title: 'Clé Cassée dans la Serrure à Paris 1',
    subtitle: 'Extraction Express & Dépannage',
    description: '<strong>Votre clé est cassée dans la serrure à Paris 1 ?</strong> <br>Notre extraction d\'urgence vous dépanne en 30 minutes. ce bruit sec et sans appel, suivi du constat désolant, Spécialiste des urgences de serrurerie à Paris, notre entreprise intervient spécifiquement pour l\'extraction de clé cassée dans la serrure à Paris 1.',
    ctaText: 'Votre clé est cassée dans la serrure à Paris 1 ? Appelez nos experts en extraction',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://i.ibb.co/SwDNZBH3/cle-cassee-2.png'
  });

  whyChooseData = signal({
      title: 'Pourquoi votre clé s\'est-elle cassée ? Comprendre pour mieux prévenir',
      description: 'Une clé ne se casse pas sans raison. Identifier la cause aide à prévenir la récidive et guide notre intervention.',
      benefits: [
          {
              icon: '⏳',
              title: 'Usure naturelle',
              description: 'Fragilisation au niveau de l\'épaulement après des années d\'utilisation quotidienne.'
          },
          {
              icon: '🔄',
              title: 'Duplicata de mauvaise qualité',
              description: 'Copie réalisée sur un métal trop tendre ou un blank inadapté, beaucoup plus fragile.'
          },
          {
              icon: '🔧',
              title: 'Serrure ou cylindre défectueux',
              description: 'Cylindre grippé, rouillé ou goupilles coincées opposant une résistance excessive.'
          },
          {
              icon: '⚠️',
              title: 'Éviter l\'aggravation',
              description: 'Tenter soi-même risque d\'enfoncer le fragment plus profondément ou d\'abîmer le cylindre.'
          }
      ]
  });

  commitmentsData = signal({
      title: 'Notre méthode d\'extraction professionnelle pour clé cassée à Paris 1',
      subtitle: 'Notre intervention pour une clé cassée dans le barillet est une opération de précision',
      commitments: [
          {
              icon: '🔍',
              title: 'Évaluation de la situation',
              description: 'Examen de la position du fragment : visible, à mi-chemin ou complètement au fond.'
          },
          {
              icon: '🛠️',
              title: 'Outils d\'extraction adaptés',
              description: 'Pinces à épiler, extracteurs crochetés, technique du "rake" selon la situation.'
          },
          {
              icon: '⚡',
              title: 'Intervention rapide et minutieuse',
              description: 'Extraction en 5 à 20 minutes, avec arrivée en moins de 30 minutes dans Paris 1.'
          },
          {
              icon: '🔧',
              title: 'Vérification post-extraction',
              description: 'Test du cylindre avec le reste de votre clé et diagnostic de son état.'
          },
          {
              icon: '🎯',
              title: 'Expertise de précision',
              description: 'Opération délicate pour ne pas rayer ou endommager le mécanisme interne.'
          }
      ]
  });

  servicesData = signal({
      title: 'Services associés après l\'extraction d\'une clé cassée dans Paris 1',
      subtitle: 'Notre intervention ne s\'arrête pas toujours à l\'extraction. Pour votre sécurité et tranquillité d\'esprit',
      services: [
          {
              icon: '🔑',
              title: 'Extraction de clé cassée',
              description: 'Retrait délicat du fragment avec outils spécialisés.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 75€'
          },
          {
              icon: '🔑',
              title: 'Fabrication d\'un double de clé',
              description: 'Reproduction d\'une nouvelle clé à partir du fragment ou du cylindre.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 25€'
          },
          {
              icon: '🔧',
              title: 'Remplacement du cylindre',
              description: 'Installation d\'un nouveau barillet standard ou haute sécurité A2P.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 120€'
          },
          {
              icon: '🛡️',
              title: 'Cylindre haute sécurité A2P',
              description: 'Remplacement par un cylindre certifié anti-perçage et anti-crochetage.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 150€'
          },
          {
              icon: '🔧',
              title: 'Dépannage et graissage',
              description: 'Nettoyage et graissage de la serrure si elle était grippée.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 50€'
          },
          {
              icon: '🔄',
              title: 'Remplacement complet de serrure',
              description: 'Si la serrure elle-même est endommagée ou obsolète.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          }
      ],
      ctaText: 'Appelez pour une extraction urgente',
      ctaPhone: '01 23 45 67 89'
  });

  pricingData = signal({
      title: 'Combien coûte l\'extraction d\'une clé cassée dans la serrure à Paris 1 ?',
      description: 'Notre tarification est conçue pour être claire et prévisible avec un forfait pour l\'extraction et des options supplémentaires facturées séparément.',
      highlight: 'Notre engagement : Forfait d\'extraction communiqué et accepté avant notre intervention.',
      features: [
          'Forfait d\'extraction unique',
          'Options supplémentaires facultatives',
          'Accord préalable sur tous les coûts',
          'Nouveau devis pour réparations additionnelles',
          'Transparence totale sur les tarifs'
      ]
  });

  conclusionData = signal({
      title: 'Ne laissez pas un fragment de clé vous bloquer l\'accès à Paris 1',
      description: 'Une clé cassée est un accident banal, mais ses conséquences peuvent être sérieuses si elle est mal gérée. En faisant immédiatement appel à notre service spécialisé dans l\'extraction de clé cassée dans la serrure à Paris 1, vous choisissez la solution rapide, propre et professionnelle.',
      ctaText: 'Ne prenez pas le risque d\'aggraver la situation',
      ctaPhone: '01 23 45 67 89',
      ctaDescription: 'Notre savoir-faire fait la différence'
  });

  faqData = signal({
      title: 'FAQ : Clé Cassée dans la Serrure Paris 1',
      questions: [
          {
              question: 'Puis-je essayer de retirer la clé cassée moi-même ?',
              answer: 'Nous le déconseillons fortement. Sans les outils adaptés et la technique, vous risquez d\'enfoncer le fragment au fond du cylindre, de le déformer ou d\'abîmer les goupilles. Cela rendrait l\'extraction par un professionnel plus difficile, plus longue et donc plus coûteuse, et pourrait obliger au remplacement complet du cylindre.'
          },
          {
              question: 'Êtes-vous sûrs de pouvoir l\'extraire sans abîmer ma serrure ?',
              answer: 'Dans plus de 95% des cas, oui. C\'est notre métier. Nos outils sont conçus pour cette tâche précise. L\'extraction se fait délicatement, en crochetant ou en pinçant le fragment sans rayer l\'intérieur du barillet. Si le fragment est totalement inaccessible, nous vous le dirons et proposerons une autre solution.'
          },
          {
              question: 'Vais-je devoir changer ma serrure après l\'extraction ?',
              answer: 'Pas nécessairement. Si le cylindre n\'a pas été endommagé et fonctionne correctement après extraction, vous pouvez le conserver. Cependant, nous inspectons toujours son état et vous conseillons le remplacement s\'il était usé, si la cassure a déplacé des goupilles ou si vous avez perdu l\'autre bout de clé.'
          },
          {
              question: 'Pouvez-vous me faire une nouvelle clé sur place si je n\'ai plus de double ?',
              answer: 'Oui, dans la plupart des cas. Une fois le fragment extrait, nous pouvons l\'utiliser comme modèle pour tailler une nouvelle clé sur un blank approprié, grâce à une machine à reproduire les clés que nous avons dans notre véhicule. Si le fragment est trop petit, nous pouvons aussi travailler à partir du cylindre.'
          },
          {
              question: 'Que faire si la clé s\'est cassée dans la serrure de ma porte blindée ?',
              answer: 'Le processus est identique en plus délicat. Les cylindres de portes blindées (souvent A2P) sont plus complexes mais nos extracteurs sont adaptés. Nous procédons avec la même minutie. Après extraction, nous vérifierons particulièrement l\'état du cylindre haute sécurité, élément crucial de votre protection.'
          }
      ]
  });
}

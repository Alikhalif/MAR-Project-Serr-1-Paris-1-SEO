import { Component, signal } from '@angular/core';
import { ConclusionComponent } from "../../../components/conclusion/conclusion.component";
import { FaqComponent } from "../../../components/faq/faq.component";
import { PricingTransparencyComponent } from "../../../components/pricing-transparency/pricing-transparency.component";
import { OurServicesComponent } from "../../../components/our-services/our-services.component";
import { OurCommitmentsComponent } from "../../../components/our-commitments/our-commitments.component";
import { WhyChooseUsComponent } from "../../../components/why-choose-us/why-choose-us.component";
import { HeroSectionComponent } from "../../../components/hero-section/hero-section.component";

@Component({
  selector: 'app-changement-serrure',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './changement-serrure.component.html',
  styleUrl: './changement-serrure.component.scss'
})
export class ChangementSerrureComponent {


  heroData = signal({
      title: 'Changement de Serrure à Paris 1',
      subtitle: 'Sécurité Renouvelée par des Experts',
      description: 'Vous souhaitez <strong>changer votre serrure à Paris 1 ?</strong> <br>Confiez l\'installation à nos experts certifiés. Votre serrure a donné des signes de faiblesse ? Vous venez d\'emménager dans un nouvel appartement du 1er arrondissement, ou vous avez perdu vos clés ? Notre entreprise de serrurerie à Paris réalise des changements de serrure professionnels dans le 1er arrondissement.',
      ctaText: 'Pour un devis gratuit et un changement de serrure professionnel à Paris 1, contactez nos experts',
      ctaPhone: '01 23 45 67 89',
      backgroundImage: 'https://i.ibb.co/8DsWJtk2/serrure-complete-2.png'
  });

  whyChooseData = signal({
      title: 'Pourquoi changer de serrure ? Les raisons qui justifient cette décision à Paris 1',
      description: 'Un changement de serrure est un investissement dans votre sécurité. Plusieurs situations courantes dans le 1er arrondissement le rendent nécessaire ou fortement recommandé.',
      benefits: [
          {
              icon: '🏠',
              title: 'Après un emménagement',
              description: 'Sécuriser votre nouvel habitat en ignorant qui possède des doubles des anciennes clés.'
          },
          {
              icon: '🔑',
              title: 'Suite à une perte ou vol de clés',
              description: 'Rendre inopérantes les clés égarées et retrouver une confidentialité totale.'
          },
          {
              icon: '⚙️',
              title: 'Serrure usée ou défectueuse',
              description: 'Anticiper la panne complète en remplaçant une serrure qui montre des signes de faiblesse.'
          },
          {
              icon: '🛡️',
              title: 'Renforcement de la sécurité',
              description: 'Remplacer par une serrure haute sécurité (3 points, A2P) pour une meilleure protection.'
          }
      ]
  });

  commitmentsData = signal({
      title: 'Notre processus professionnel pour un changement de serrure réussi à Paris 1',
      subtitle: 'Notre intervention suit une méthodologie rigoureuse pour un résultat optimal',
      commitments: [
          {
              icon: '🔍',
              title: 'Diagnostic et conseil personnalisé',
              description: 'Examen de votre porte et propositions adaptées à vos besoins et budget.'
          },
          {
              icon: '📋',
              title: 'Devis détaillé et transparent',
              description: 'Devis clair incluant prix de la serrure, main d\'œuvre et modifications éventuelles.'
          },
          {
              icon: '📦',
              title: 'Pièces de qualité certifiées',
              description: 'Utilisation de serrures et cylindres de marques reconnues avec normes A2P/NF.'
          },
          {
              icon: '🛠️',
              title: 'Installation précise et soignée',
              description: 'Dépose propre, ajustement parfait de l\'entaille, pose robuste et réglage minutieux.'
          },
          {
              icon: '✅',
              title: 'Tests complets et remise des clés',
              description: 'Vérification du fonctionnement des deux côtés et remise du jeu de clés neuves.'
          }
      ]
  });

  servicesData = signal({
      title: 'Quel type de serrure choisir pour votre porte à Paris 1 ?',
      subtitle: 'Notre rôle est de vous conseiller sur le modèle le plus adapté à votre situation',
      services: [
          {
              icon: '🔑',
              title: 'Cylindre de sécurité A2P',
              description: 'Remplacement du barillet seul pour une sécurité renforcée (norme A2P recommandée).',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 120€'
          },
          {
              icon: '🚪',
              title: 'Serrure à larder (en applique)',
              description: 'Solution simple se vissant sur l\'intérieur de la porte, idéale pour portes fines.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 140€'
          },
          {
              icon: '🔒',
              title: 'Serrure en applique 3 points',
              description: 'Offre un verrouillage renforcé sur le côté de la porte.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 180€'
          },
          {
              icon: '🛡️',
              title: 'Serrure multipoints (3, 5, 7 points)',
              description: 'Top de la sécurité pour portes blindées, avec verrouillage sur tout le pourtour.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'À partir de 250€'
          },
          {
              icon: '🔢',
              title: 'Serrure à code ou connectée',
              description: 'Plus de commodité sans clé physique, avec gestion d\'accès moderne.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          },
          {
              icon: '🏢',
              title: 'Serrure pour local professionnel',
              description: 'Solutions adaptées aux bureaux, commerces et établissements recevant du public.',
              image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
              price: 'Sur devis'
          }
      ],
      ctaText: 'Appelez pour un conseil et devis',
      ctaPhone: '01 23 45 67 89'
  });

  pricingData = signal({
      title: 'Tarification transparente pour un changement de serrure à Paris 1',
      description: 'Le prix d\'un changement de serrure dépend de trois éléments principaux, tous identifiés dans le devis : coût de la serrure, main d\'œuvre et fournitures complémentaires.',
      highlight: 'Notre engagement : Pas de surprise. Devis contractuel et détaillé, pas de frais cachés.',
      features: [
          'Coût de la serrure selon type et sécurité',
          'Main d\'œuvre d\'installation professionnelle',
          'Fournitures complémentaires incluses',
          'Justification par qualité des pièces',
          'Installation durable protégeant votre investissement'
      ]
  });

  conclusionData = signal({
      title: 'Investissez dans une sécurité durable avec un expert à Paris 1',
      description: 'Changer une serrure est bien plus que remplacer un objet mécanique. C\'est renforcer le premier rempart qui protège vos biens et vos proches. En confiant votre changement de serrure à Paris 1 à notre entreprise, vous choisissez un partenaire qui allie conseil avisé, produits de qualité et savoir-faire technique.',
      ctaText: 'Ne compromettez pas votre sécurité avec une installation approximative',
      ctaPhone: '01 23 45 67 89',
      ctaDescription: 'Faites le choix de l\'expertise'
  });

  faqData = signal({
      title: 'FAQ : Changement de Serrure Paris 1',
      questions: [
          {
              question: 'Dois-je systématiquement changer la serrure en emménageant à Paris ?',
              answer: 'C\'est fortement recommandé, voire indispensable. Vous n\'avez aucun contrôle sur le nombre de doubles de clés en circulation (anciens locataires, famille, amis, artisans). C\'est la première mesure de sécurité à prendre pour garantir votre intimité et votre tranquillité. De nombreux contrats de location le mentionnent d\'ailleurs.'
          },
          {
              question: 'Puis-je changer seulement le cylindre (barillet) ?',
              answer: 'Oui, dans la plupart des cas. Si le boîtier de serrure (le mécanisme dans l\'épaisseur de la porte) est en bon état, le simple remplacement du cylindre suffit. C\'est la solution la plus courante et économique. Nous vous conseillerons sur place si cette option est viable et suffisante pour votre sécurité.'
          },
          {
              question: 'Quelle est la différence entre une serrure standard et une serrure A2P ?',
              answer: 'La norme A2P (Assurance Prévention Protection) est un label français exigeant. Une serrure ou un cylindre A2P a été testé et certifié pour résister pendant un temps défini aux techniques d\'effraction (perçage, crochetage, arrachage, picking). C\'est un niveau de sécurité bien supérieur aux serrures courantes du commerce. Nous la recommandons pour toute entrée principale.'
          },
          {
              question: 'Combien de temps prend l\'installation d\'une nouvelle serrure ?',
              answer: 'Pour un changement de cylindre standard : 30 à 45 minutes. Pour une serrure complète (multipoints sur porte blindée) nécessitant des réglages précis : 1h à 2h. Ces délais incluent le démontage, l\'ajustement, la pose et les tests approfondis.'
          },
          {
              question: 'Fournissez-vous plusieurs jeux de clés ? Et puis-je conserver l\'ancienne serrure ?',
              answer: 'Oui. Toute nouvelle serrure ou cylindre est livré avec généralement 3 clés. Vous pouvez en commander davantage si besoin. Concernant l\'ancienne serrure, nous vous la remettons si vous le souhaitez (notamment pour les locataires qui doivent parfois la restituer au propriétaire). Sinon, nous nous chargeons de son recyclage.'
          }
      ]
  });

}

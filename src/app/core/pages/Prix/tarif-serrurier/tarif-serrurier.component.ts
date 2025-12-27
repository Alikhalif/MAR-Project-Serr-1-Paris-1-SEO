import { Component, signal } from '@angular/core';
import { ConclusionComponent } from "../../../components/conclusion/conclusion.component";
import { FaqComponent } from "../../../components/faq/faq.component";
import { PricingTransparencyComponent } from "../../../components/pricing-transparency/pricing-transparency.component";
import { OurServicesComponent } from "../../../components/our-services/our-services.component";
import { OurCommitmentsComponent } from "../../../components/our-commitments/our-commitments.component";
import { WhyChooseUsComponent } from "../../../components/why-choose-us/why-choose-us.component";
import { HeroSectionComponent } from "../../../components/hero-section/hero-section.component";

@Component({
  selector: 'app-tarif-serrurier',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './tarif-serrurier.component.html',
  styleUrl: './tarif-serrurier.component.scss'
})
export class TarifSerrurierComponent {

  heroData = signal({
    title: 'Tarif Serrurier à Paris 1',
    subtitle: 'Guide Complet pour une Facturation Juste et Transparente',
    description: 'Vous vous interrogez sur le tarif d\'un serrurier à Paris 1 ? Découvrez une grille tarifaire claire, basée sur des coûts réels du marché parisien, et notre engagement absolu sur un devis détaillé avant toute intervention.',
    ctaText: 'Obtenir un devis gratuit et clair',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://i.ibb.co/Gvr9D6kz/tarif-serrurier.png'
  });

  whyChooseData = signal({
    title: 'Pourquoi notre structure tarifaire est la garantie d\'une vraie transparence ?',
    description: 'Sur un marché où les prix peuvent varier du simple au triple et où les arnaques sont fréquentes, comprendre ce que l\'on paie est la première défense du client.',
    benefits: [
      {
        icon: '💰',
        title: 'Décomposition lisible et fixe',
        description: 'Nous détaillons et fixons trois postes : forfait déplacement, main d\'œuvre (à l\'heure ou forfaitaire), et prix des pièces. Pas de surprise.'
      },
      {
        icon: '📜',
        title: 'Devis contractuel obligatoire',
        description: 'Un devis gratuit, détaillé et signé par vos soins est notre seul point de départ. C\'est votre bouclier contre les majorations abusives.'
      },
      {
        icon: '🕐',
        title: 'Majorations horaires annoncées',
        description: 'Contrairement aux mauvaises surprises, nos majorations pour interventions en soirée, nuit, week-end ou jours fériés sont clairement communiquées à l\'avance.'
      },
      {
        icon: '🛡️',
        title: 'Protection contre les pratiques douteuses',
        description: 'Nous privilégions les méthodes non destructives et vous expliquons nos choix. Finies les « complications imprévues » pour gonfler la facture.'
      }
    ]
  });

  commitmentsData = signal({
    title: 'Nos engagements pour un tarif juste et une intervention fiable à Paris 1',
    subtitle: 'Des principes stricts qui protègent votre budget et votre tranquillité d\'esprit',
    commitments: [
      {
        icon: '📞',
        title: 'Transparence téléphonique initiale',
        description: 'Pour une urgence standard, un forfait peut être communiqué par téléphone. Pour un cas complexe, nous donnons une fourchette réaliste basée sur votre description.'
      },
      {
        icon: '🔍',
        title: 'Diagnostic et devis gratuit sur place',
        description: 'Notre expert établit un devis détaillé, gratuit et sans engagement, listant chaque poste de coût. Vous validez en toute connaissance de cause avant tout travail.'
      },
      {
        icon: '⚖️',
        title: 'Prix final = Devis signé',
        description: 'Le montant de la facture correspondra au devis signé. Toute dérive nécessiterait votre accord formel sur un avenant.'
      },
      {
        icon: '🚗',
        title: 'Déplacement rapide dans Paris 1',
        description: 'Intervention en moins de 30 minutes en moyenne dans le 1er arrondissement (Palais-Royal, Les Halles, Louvre...), 24h/24 et 7j/7.'
      },
      {
        icon: '🔧',
        title: 'Garantie sur pièces et main d\'œuvre',
        description: 'Les pièces neuves bénéficient de la garantie fabricant, et notre installation est couverte par une garantie de parfait achèvement (souvent 1 à 2 ans).'
      }
    ]
  });

  servicesData = signal({
    title: 'Notre grille tarifaire indicative pour Paris 1',
    subtitle: 'Fourchettes de prix TTC basées sur les tarifs du marché parisien et notre structure de coûts (déplacement, main d\'œuvre, pièces)',
    services: [
      {
        icon: '🚪',
        title: 'Ouverture de porte claquée (simple)',
        description: 'Méthode non destructive par crochetage ou radio. Forfait incluant déplacement et main d\'œuvre. Prix variable en fonction de l\'heure.',
        image: 'https://images.unsplash.com/photo-1582719201952-3f0ce5badca8?w=600&q=80',
        price: 'De 95€ à 180€*'
      },
      {
        icon: '🛡️',
        title: 'Ouverture de porte blindée',
        description: 'Techniques spécifiques pour portes sécurisées. Généralement plus long et nécessitant un matériel adapté.',
        image: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=600&q=80',
        price: 'De 129€ à 250€*'
      },
      {
        icon: '🔑',
        title: 'Remplacement de cylindre',
        description: 'Démontage de l\'ancien et pose d\'un nouveau. Prix variable selon le modèle (standard, anti-perçage, haute sécurité A2P).',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        price: 'De 90€ à 200€ (pose + pièce)'
      },
      {
        icon: '🔩',
        title: 'Installation serrure 3 points',
        description: 'Pose d\'une serrure multipoints de marque, souvent certifiée A2P. Inclut la main d\'œuvre et la fourniture.',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
        price: 'À partir de 320€'
      }
    ],
    ctaText: 'Demander un devis personnalisé',
    ctaPhone: '01 23 45 67 89',
    note: '*Prix pour une intervention en horaire de jour en semaine. Les interventions en soirée, nuit, week-end et jours fériés sont majorées.'
  });

  pricingData = signal({
    title: 'Comprendre votre facture : la clé de la confiance',
    description: 'Un tarif équitable et professionnel se décompose toujours en éléments distincts. Voici comment nous construisons nos prix pour une parfaite lisibilité.',
    highlight: 'Coût total = Forfait Déplacement + Main d\'Œuvre (forfait ou horaire) + Prix des Pièces (choisies par vous).',
    features: [
      'Forfait de Déplacement : Fixe, couvre l\'acheminement de l\'artisan (ex: 45€ - 55€).',
      'Main d\'Œuvre : Facturée à l\'heure (ex: 45€ - 80€/h en journée) ou en forfait selon la prestation.',
      'Pièces de Rechange : Prix public affiché. Choix entre différentes gammes (standard vs. A2P).',
      'Devis signé = Prix final garanti, hors découverte d\'une complication majeure imprévisible (très rare).'
    ]
  });

  conclusionData = signal({
    title: 'Votre serrurier transparent de confiance dans le 1er arrondissement',
    description: 'Choisir un serrurier à Paris ne doit pas être un pari. Avec notre engagement de clarté tarifaire totale, de devis contraignant et d\'intervention professionnelle, vous investissez dans la sécurité de votre porte et la sérénité de votre portefeuille.',
    ctaText: 'Choisir la transparence tarifaire',
    ctaPhone: '01 23 45 67 89',
    ctaDescription: 'Devis gratuit, détaillé et sans engagement à Paris 1 !'
  });

  faqData = signal({
    title: 'FAQ : Tarif Serrurier Paris 1',
    questions: [
      {
        question: 'Pourquoi les prix des serruriers à Paris varient-ils autant ?',
        answer: 'Plusieurs facteurs expliquent ces écarts : la structure des coûts (artisan indépendant vs. société), la localisation (Paris est plus cher), le niveau de sécurité des pièces (A2P coûte plus cher), et surtout, les pratiques commerciales. Certains utilisent des prix d\'appel très bas pour attirer, puis majorent abusivement sur place. Notre philosophie est l\'inverse : la transparence dès le premier contact crée la confiance.'
      },
      {
        question: 'Comment sont calculées les majorations pour les urgences en nuit / week-end ?',
        answer: 'Ces majorations, courantes dans le métier, compensent les interventions en horaires décalés. Elles s\'appliquent généralement sur la part main d\'œuvre. Les taux peuvent être de +50% en soirée (18h-22h) et de +100% la nuit, les week-ends et jours fériés. Ces taux doivent être clairement annoncés dans le devis.'
      },
      {
        question: 'Le prix des pièces est-il négociable ? Puis-je fournir les miennes ?',
        answer: 'Le prix des pièces (cylindres, serrures) dépend de leur marque et niveau de sécurité. Nous proposons un choix avec les prix correspondants. Pour des raisons de garantie et de responsabilité sur la pose, nous n\'installons généralement pas de pièces fournies par le client.'
      },
      {
        question: 'Un devis est-il vraiment obligatoire, même pour une simple ouverture ?',
        answer: 'Oui, et c\'est une protection essentielle pour vous. Même pour une urgence, un ordre de réparation ou un devis simplifié doit être établi et validé par vos soins avant l\'intervention. Cela acte le prix et la nature des travaux, et est votre seule preuve en cas de litige.'
      },
      {
        question: 'Comment éviter les arnaques au « prix qui explose » après l\'intervention ?',
        answer: 'Suivez ces règles : 1) Méfiez-vous des prix d\'appel trop bas (ex: 30€). 2) Exigez un devis ou un ordre de réparation écrit AVANT les travaux. 3) Vérifiez que les majorations horaires sont mentionnées. 4) Privilégiez les méthodes non destructives. 5) En cas de doute la nuit, il peut être plus sûr et économique d\'attendre le matin.'
      }
    ]
  });

}

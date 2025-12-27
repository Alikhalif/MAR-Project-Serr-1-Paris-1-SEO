import { Component, signal } from '@angular/core';
import { ConclusionComponent } from "../../../components/conclusion/conclusion.component";
import { FaqComponent } from "../../../components/faq/faq.component";
import { PricingTransparencyComponent } from "../../../components/pricing-transparency/pricing-transparency.component";
import { OurServicesComponent } from "../../../components/our-services/our-services.component";
import { OurCommitmentsComponent } from "../../../components/our-commitments/our-commitments.component";
import { WhyChooseUsComponent } from "../../../components/why-choose-us/why-choose-us.component";
import { HeroSectionComponent } from "../../../components/hero-section/hero-section.component";

@Component({
  selector: 'app-installation-serrure-3-point',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './installation-serrure-3-point.component.html',
  styleUrl: './installation-serrure-3-point.component.scss'
})

export class InstallationSerrure3PointComponent {

  heroData = signal({
    title: 'Installation Serrure 3 Points à Paris 1',
    subtitle: 'Renforcez Votre Sécurité avec des Experts',
    description: 'Vous souhaitez installer une serrure 3 points à Paris 1 ? Confiez l\'installation à nos experts certifiés pour une sécurité renforcée et une pose parfaite, adaptée à votre porte d\'entrée.',
    ctaText: 'Demander un devis gratuit',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://i.ibb.co/F4VBGJHf/a2p-1.jpg'
  });

  whyChooseData = signal({
    title: 'Pourquoi confier l\'installation de votre serrure 3 points à un expert ?',
    description: 'Une installation amateur peut annuler tous les bénéfices de sécurité d\'une serrure 3 points et causer des dysfonctionnements chroniques.',
    benefits: [
      {
        icon: '🎯',
        title: 'Précision chirurgicale',
        description: 'Perçages parfaitement alignés pour un fonctionnement fluide des 3 points et une fiabilité à long terme.'
      },
      {
        icon: '🛡️',
        title: 'Sécurité optimisée',
        description: 'Combinaison parfaite serrure 3 points + cylindre A2P pour une résistance physique et anti-manipulation maximale.'
      },
      {
        icon: '🔧',
        title: 'Expertise tous types de portes',
        description: 'Nous maîtrisons l\'installation sur portes en bois anciennes, métalliques modernes et portes blindées.'
      },
      {
        icon: '✅',
        title: 'Conseil produit adapté',
        description: 'Sélection de serrures de qualité parmi des marques reconnues (Vachette, Fichet, Picard) selon votre besoin et budget.'
      }
    ]
  });

  commitmentsData = signal({
    title: 'Nos engagements pour une installation de serrure 3 points parfaite à Paris 1',
    subtitle: 'Notre processus rigoureux garantit une pose professionnelle et un résultat durable',
    commitments: [
      {
        icon: '🔍',
        title: 'Évaluation et conseil personnalisé',
        description: 'Examen de votre porte (matériau, épaisseur) et recommandations sur le modèle et le niveau de sécurité adaptés.'
      },
      {
        icon: '📐',
        title: 'Travail de précision',
        description: 'Traçage et perçage méticuleux avec outils professionnels (gabarits, perceuse colonne) pour un alignement parfait.'
      },
      {
        icon: '📋',
        title: 'Devis détaillé et transparent',
        description: 'Prix clair incluant la serrure, le cylindre (option A2P) et la main d\'œuvre complète. Aucun coût caché.'
      },
      {
        icon: '🧼',
        title: 'Propreté et respect des lieux',
        description: 'Minimisation des poussières de perçage et nettoyage soigneux après l\'installation.'
      },
      {
        icon: '⚙️',
        title: 'Tests et réglages fins',
        description: 'Vérification du verrouillage fluide des 3 points et ajustements pour un fonctionnement optimal.'
      }
    ]
  });

  servicesData = signal({
    title: 'Nos prestations d\'installation de sécurité à Paris 1',
    subtitle: 'Nous proposons des solutions complètes pour renforcer la protection de votre domicile ou commerce',
    services: [
      {
        icon: '🛡️',
        title: 'Installation complète serrure 3 points',
        description: 'Fourniture et pose d\'une serrure multipoints neuve sur votre porte d\'entrée (bois, métal, blindée).',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80',
        price: 'À partir de 190€*'
      },
      {
        icon: '🔑',
        title: 'Pack sécurité 3 points + Cylindre A2P',
        description: 'Installation d\'une serrure 3 points couplée à un cylindre haute sécurité certifié, pour une protection optimale.',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
        price: 'À partir de 250€*'
      },
      {
        icon: '🔄',
        title: 'Remplacement de serrure 3 points existante',
        description: 'Dépose de l\'ancien mécanisme et pose d\'un nouveau modèle plus performant et fiable.',
        image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
        price: 'À partir de 160€*'
      },
      {
        icon: '🚪',
        title: 'Renfort de porte + Installation 3 points',
        description: 'Évaluation et préparation de votre porte si nécessaire (renfort, ajustement) avant installation de la serrure multipoints.',
        image: 'https://images.unsplash.com/photo-1577493340887-0b78f5b3b6f5?w=600&q=80',
        price: 'Sur devis'
      }
    ],
    ctaText: 'Demander une évaluation gratuite',
    ctaPhone: '01 23 45 67 89',
    note: '*Prix indicatif incluant serrure d\'entrée de gamme et main d\'œuvre. Varie selon le modèle choisi.'
  });

  pricingData = signal({
    title: 'Transparence tarifaire : Coût d\'une installation de serrure 3 points à Paris 1',
    description: 'Le prix d\'une installation professionnelle est un investissement dans votre sécurité. Il se compose de trois éléments clairs et justifiés.',
    highlight: 'Devis contractuel et détaillé - Pas de surprise.',
    features: [
      'Prix de la serrure 3 points (marque et modèle au choix)',
      'Coût du cylindre haute sécurité (option recommandée)',
      'Main d\'œuvre d\'installation professionnelle (1h30 à 3h)',
      'Garantie sur la serrure et sur la main d\'œuvre'
    ]
  });

  conclusionData = signal({
    title: 'Votre partenaire pour une sécurité renforcée à Paris 1',
    description: 'Installer une serrure 3 points est un projet de sécurité qui mérite l\'expertise d\'un professionnel. Nous transformons votre volonté de protection en une réalité technique fiable, durable et parfaitement intégrée à votre porte. Choisissez la tranquillité d\'esprit d\'une installation réalisée dans les règles de l\'art.',
    ctaText: 'Planifier une installation',
    ctaPhone: '01 23 45 67 89',
    ctaDescription: 'Devis gratuit et conseil expert pour votre projet à Paris 1 !'
  });

  faqData = signal({
    title: 'FAQ : Installation Serrure 3 Points Paris 1',
    questions: [
      {
        question: 'Ma porte est-elle compatible avec une serrure 3 points ?',
        answer: 'La grande majorité des portes d\'entrée pleines (en bois massif, métal, blindées) d\'au moins 40 mm d\'épaisseur sont compatibles. Les portes alvéolaires ou trop fines ne le sont généralement pas. Notre expert vérifie la compatibilité lors du premier rendez-vous, en examinant aussi la solidité du cadre pour recevoir les gâches latérales.'
      },
      {
        question: 'Dois-je changer mon cylindre actuel ?',
        answer: 'C\'est l\'occasion idéale de le faire, surtout s\'il est standard. Nous recommandons fortement de coupler votre nouvelle serrure 3 points avec un cylindre haute sécurité certifié A2P. C\'est la combinaison gagnante : résistance physique de la porte (3 points) + résistance du cylindre aux manipulations (A2P). Nous vous conseillerons sur le meilleur choix.'
      },
      {
        question: 'L\'installation est-elle très invasive et poussiéreuse ?',
        answer: 'L\'installation nécessite des perçages précis, donc il y a de la poussière (notamment sur les portes en bois). Notre équipe est équipée pour minimiser et contenir cette poussière (aspiration, bâches). Nous nous engageons à laisser les lieux propres après notre intervention.'
      },
      {
        question: 'Combien de temps prend l\'installation complète ?',
        answer: 'Pour une installation sur une porte standard, prévoyez entre 1h30 et 3h de travail effectif sur place. Ce temps inclut le traçage méticuleux, les perçages, la pose, les réglages fins et les tests. C\'est un travail de précision qui ne doit pas être précipité pour garantir un résultat parfait.'
      },
      {
        question: 'Proposez-vous une garantie sur l\'installation et la serrure ?',
        answer: 'Oui, à double titre : 1) La serrure neuve bénéficie de la garantie du fabricant (généralement 2 à 5 ans). 2) Notre installation est garantie généralement 2 ans contre tout défaut de pose ou de fonctionnement lié à notre intervention. Ces garanties vous sont transmises par écrit après les travaux.'
      }
    ]
  });
}

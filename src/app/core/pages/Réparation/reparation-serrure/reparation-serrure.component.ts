import { Component, signal } from '@angular/core';
import { NgClass } from "../../../../../../node_modules/@angular/common/index";
import { ConclusionComponent } from "../../../components/conclusion/conclusion.component";
import { FaqComponent } from "../../../components/faq/faq.component";
import { PricingTransparencyComponent } from "../../../components/pricing-transparency/pricing-transparency.component";
import { OurServicesComponent } from "../../../components/our-services/our-services.component";
import { OurCommitmentsComponent } from "../../../components/our-commitments/our-commitments.component";
import { WhyChooseUsComponent } from "../../../components/why-choose-us/why-choose-us.component";
import { HeroSectionComponent } from "../../../components/hero-section/hero-section.component";

@Component({
  selector: 'app-reparation-serrure',
  standalone: true,
  imports: [ConclusionComponent, FaqComponent, PricingTransparencyComponent, OurServicesComponent, OurCommitmentsComponent, WhyChooseUsComponent, HeroSectionComponent],
  templateUrl: './reparation-serrure.component.html',
  styleUrl: './reparation-serrure.component.scss'
})
export class ReparationSerrureComponent {

  heroData = signal({
    title: 'Réparation Serrure à Paris 1',
    subtitle: 'Expertise & Durabilité pour Votre Sécurité',
    description: 'Votre serrure est défectueuse à Paris 1 ? Notre service de réparation expert vous dépanne durablement. Votre clé peine à tourner, vous entendez un grincement suspect... Notre entreprise de serrurerie parisienne propose un service de réparation de serrure expert à Paris 1.',
    ctaText: 'Pour un diagnostic précis et une réparation de serrure durable à Paris 1, appelez nos experts',
    ctaPhone: '01 23 45 67 89',
    backgroundImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80'
});

whyChooseData = signal({
    title: 'Pourquoi faire réparer sa serrure par un professionnel à Paris 1 ?',
    description: 'Ignorer les signes avant-coureurs ou tenter une réparation amateur sont deux attitudes risquées. Une serrure défaillante est comme une chaîne dont le maillon le plus faible menace de céder.',
    benefits: [
        {
            icon: '⚠️',
            title: 'Éviter le blocage soudain',
            description: 'Une serrure grippée peut se bloquer complètement, vous enfermant dehors de manière inopinée.'
        },
        {
            icon: '⚡',
            title: 'Prévenir l\'usure accélérée',
            description: 'Mauvais alignement ou manque d\'entretien use prématurément le cylindre et les pênes.'
        },
        {
            icon: '🛡️',
            title: 'Maintenir votre sécurité',
            description: 'Réparation professionnelle évite les vulnérabilités exploitables par des intrus.'
        },
        {
            icon: '💰',
            title: 'Économiser sur le long terme',
            description: 'Réparation ratée conduit souvent au remplacement complet, bien plus onéreux.'
        }
    ]
});

commitmentsData = signal({
    title: 'Notre méthodologie de réparation : précision, qualité et transparence',
    subtitle: 'Notre approche est systématique pour garantir un résultat durable',
    commitments: [
        {
            icon: '🔍',
            title: 'Diagnostic approfondi',
            description: 'Démontage partiel et inspection complète du cylindre, pênes, ressorts et boîtier.'
        },
        {
            icon: '📝',
            title: 'Proposition de solution et devis',
            description: 'Explication claire de la panne et devis détaillé avant tout travail.'
        },
        {
            icon: '🛠️',
            title: 'Réparation ou remplacement de composants',
            description: 'Nettoyage, graissage, remplacement de pièces défectueuses, ajustement.'
        },
        {
            icon: '✅',
            title: 'Tests rigoureux et vérifications',
            description: 'Test du fonctionnement des dizaines de fois pour assurer fluidité et fiabilité.'
        },
        {
            icon: '🧾',
            title: 'Garantie et facturation transparente',
            description: 'Remise de facture détaillée et documents de garantie sur main d\'œuvre et pièces.'
        }
    ]
});

servicesData = signal({
    title: 'Les réparations de serrures que nous maîtrisons dans le 1er arrondissement',
    subtitle: 'Notre expertise couvre la réparation de la grande majorité des systèmes de fermeture',
    services: [
        {
            icon: '🔧',
            title: 'Réparation de cylindre (barillet)',
            description: 'Démontage, nettoyage des goupilles, remplacement des ressorts cassés.',
            image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
            price: 'À partir de 65€'
        },
        {
            icon: '🔄',
            title: 'Réparation de serrure 3 points',
            description: 'Dépannage du mécanisme de crémone, remplacement de pênes cassés.',
            image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
            price: 'À partir de 90€'
        },
        {
            icon: '🛡️',
            title: 'Réparation sur porte blindée',
            description: 'Intervention technique spécifique sur mécanismes complexes.',
            image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
            price: 'À partir de 110€'
        },
        {
            icon: '🗝️',
            title: 'Problèmes de clé et réalignement',
            description: 'Retaillage de clé, ajustement de la serrure ou de la gâche.',
            image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
            price: 'À partir de 60€'
        },
        {
            icon: '🔩',
            title: 'Nettoyage et graissage complet',
            description: 'Entretien préventif pour redonner de la fluidité à votre serrure.',
            image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
            price: 'À partir de 50€'
        },
        {
            icon: '⚙️',
            title: 'Renforcement de points faibles',
            description: 'Ajout de protections anti-perçage ou anti-arrachage.',
            image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=600&q=80',
            price: 'Sur devis'
        }
    ],
    ctaText: 'Appelez pour une réparation durable',
    ctaPhone: '01 23 45 67 89'
});

pricingData = signal({
    title: 'Tarification d\'une réparation de serrure à Paris 1 : juste et prévisible',
    description: 'Le coût d\'une réparation de serrure dépend de sa complexité et des pièces nécessaires. Notre transparence est votre meilleure garantie.',
    highlight: 'Notre engagement : Le devis est votre contrat. Pas de frais cachés ou de supplément surprise.',
    features: [
        'Forfait de diagnostic/main d\'œuvre',
        'Coût des pièces de rechange au prix public',
        'Validation des pièces avant pose',
        'Réparation prolongeant la vie de votre serrure',
        'Investissement économique à long terme'
    ]
});

conclusionData = signal({
    title: 'Préservez votre sécurité avec une réparation experte à Paris 1',
    description: 'Une serrure n\'est pas un consommable, c\'est un équipement de sécurité qui peut souvent être remis en état par un professionnel. En confiant la réparation de votre serrure à Paris 1 à notre entreprise, vous optez pour une solution durable, économique et responsable.',
    ctaText: 'Ne laissez pas un dysfonctionnement mineur devenir une faille majeure',
    ctaPhone: '01 23 45 67 89',
    ctaDescription: 'Agissez avec expertise'
});

faqData = signal({
    title: 'FAQ : Réparation Serrure Paris 1',
    questions: [
        {
            question: 'Comment savoir si ma serrure peut être réparée ou s\'il faut la changer ?',
            answer: 'Seul un examen professionnel permet de trancher. Cependant, des signes comme une clé qui tourne mais n\'actionne plus le pêne, un mécanisme très bruyant ou une clé qui reste bloquée peuvent indiquer une panne interne réparable. Si la porte a été forcée, le boîtier est corrodé ou la serrure est extrêmement ancienne (plus de 20 ans), le remplacement est souvent préférable. Nous vous donnerons un avis honnête.'
        },
        {
            question: 'Utilisez-vous des pièces d\'origine pour les réparations ?',
            answer: 'Dans la mesure du possible, oui. Pour les marques courantes (Vachette, Fichet, Picard, etc.), nous nous approvisionnons en pièces détachées d\'origine ou de qualité équivalente. Pour les modèles plus anciens ou obsolètes, nous utilisons des pièces génériques de haute qualité parfaitement compatibles. La compatibilité et la durabilité priment.'
        },
        {
            question: 'Ma serrure grince, est-ce grave ? Pouvez-vous juste la graisser ?',
            answer: 'Un grincement est souvent le signe d\'un manque d\'entretien (poussière, sécheresse) ou d\'un début de défaut d\'alignement. Dans de nombreux cas, un nettoyage complet, un graissage adapté (jamais d\'huile de WD-40 en usage unique !) et un réglage suffisent à résoudre le problème durablement. C\'est une intervention simple et peu coûteuse que nous réalisons fréquemment.'
        },
        {
            question: 'Garantissez-vous vos réparations ?',
            answer: 'Absolument. Toutes nos réparations bénéficient d\'une garantie sur la main d\'œuvre (généralement 2 ans). Les pièces neuves que nous installons sont couvertes par la garantie du fabricant. Ces garanties vous sont précisées par écrit sur la facture, qui sert de justificatif.'
        },
        {
            question: 'Proposez-vous un entretien préventif pour éviter les pannes ?',
            answer: 'Oui, et nous le recommandons. Un entretien périodique (tous les 2 à 3 ans) par un professionnel permet de : nettoyer et graisser les mécanismes, vérifier l\'alignement et le serrage des fixations, détecter une usure anormale avant la panne, et prolonger significativement la durée de vie de votre serrure. N\'hésitez pas à nous consulter pour établir un programme d\'entretien.'
        }
    ]
});
}

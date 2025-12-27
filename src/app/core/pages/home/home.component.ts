import { Component, signal } from '@angular/core';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { FaqComponent } from "../../components/faq/faq.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent, FaqComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

   onEmergencyCall(): void {
    // Implémentation de l'appel d'urgence
    window.location.href = 'tel:+33123456789';
  }


  faqData = signal({
  title: 'Questions Fréquentes sur la Serrurerie à Paris 1er',
  questions: [
    {
      question: 'Combien coûte une ouverture de porte à Paris 1er ?',
      answer: 'Le tarif d\'une ouverture de porte varie selon plusieurs facteurs : le type de serrure, l\'heure d\'intervention (jour, nuit, weekend ou férié) et la complexité de l\'opération. Pour une ouverture de porte standard en journée, comptez généralement entre 90€ et 150€. Une porte blindée ou une intervention nocturne entraînera un coût supérieur. Nous vous communiquons systématiquement un devis précis par téléphone avant de nous déplacer, sans engagement de votre part.'
    },
    {
      question: 'Combien de temps faut-il pour qu\'un serrurier arrive en urgence ?',
      answer: 'Dans le 1er arrondissement de Paris, notre temps d\'intervention moyen est de 20 à 30 minutes. Ce délai peut varier selon le trafic, l\'heure de la journée et la disponibilité immédiate de nos équipes. Lors de votre appel, nous vous indiquons un délai précis d\'arrivée du serrurier.'
    },
    {
      question: 'Un serrurier peut-il ouvrir une porte sans la casser ?',
      answer: 'Dans la majorité des cas, oui. Pour une porte simplement claquée ou une serrure standard, nos serruriers disposent de techniques et d\'outils professionnels permettant une ouverture sans dégradation. En revanche, pour certaines portes blindées ou serrures haute sécurité, ou lorsque la serrure est endommagée, un perçage peut s\'avérer nécessaire. Nous privilégions toujours la méthode la moins destructive possible.'
    },
    {
      question: 'Que faire en cas de clé cassée dans la serrure ?',
      answer: 'Ne tentez surtout pas de retirer le fragment vous-même avec des outils de fortune, vous risqueriez d\'aggraver la situation. Contactez immédiatement un serrurier professionnel. Nos experts disposent d\'extracteurs spécialisés permettant de retirer les morceaux de clé sans endommager le mécanisme de la serrure. L\'intervention est généralement rapide et permet de conserver votre serrure.'
    },
    {
      question: 'Faut-il changer la serrure après une effraction ?',
      answer: 'Oui, il est vivement recommandé de changer votre serrure après une tentative d\'effraction, même si elle fonctionne encore. Le mécanisme a pu être fragilisé ou endommagé, compromettant votre sécurité. De plus, votre assurance habitation exige généralement le remplacement de la serrure forcée pour maintenir vos garanties. Nous pouvons installer immédiatement une serrure de sécurité certifiée A2P pour renforcer votre protection.'
    },
    {
      question: 'Les serrures installées sont-elles conformes aux exigences des assurances ?',
      answer: 'Absolument. Nous installons exclusivement des serrures et portes blindées certifiées répondant aux normes d\'assurance. Les serrures certifiées A2P (de 1 à 3 étoiles) et les portes blindées certifiées BP sont reconnues par toutes les compagnies d\'assurance. Nous vous fournissons systématiquement les certificats et attestations nécessaires pour votre assureur.'
    },
    {
      question: 'Intervenez-vous le dimanche et les jours fériés ?',
      answer: 'Oui, notre service d\'urgence fonctionne 365 jours par an, sans interruption. Nous intervenons les dimanches, jours fériés et pendant les périodes de vacances. Un serrurier est toujours disponible pour répondre à vos urgences, quelle que soit l\'heure ou le jour. Les tarifs pour ces interventions spécifiques vous sont communiqués avec transparence dès votre appel.'
    },
    {
      question: 'Puis-je avoir un devis avant l\'intervention ?',
      answer: 'Oui, nous établissons systématiquement un devis détaillé par téléphone avant toute intervention. Ce devis précise la nature de l\'intervention, le matériel utilisé si nécessaire, et le coût total incluant le déplacement et la main d\'œuvre. Vous n\'êtes engagé à rien tant que vous n\'avez pas accepté ce devis. Notre transparence tarifaire est totale, sans frais cachés ni suppléments surprise.'
    },
    {
      question: 'Combien de temps dure le remplacement d\'une serrure ?',
      answer: 'Le remplacement d\'une serrure standard prend généralement entre 30 minutes et 1 heure. Pour une serrure multipoints ou une installation plus complexe, l\'intervention peut durer entre 1h30 et 2h30. La pose d\'une porte blindée complète nécessite quant à elle une demi-journée. Nous vous indiquons toujours la durée estimée de l\'intervention lors de l\'établissement du devis.'
    },
    {
      question: 'Comment savoir si ma serrure est aux normes ?',
      answer: 'Une serrure aux normes d\'assurance porte généralement la certification A2P (Assurance Prévention Protection) avec 1, 2 ou 3 étoiles selon le niveau de résistance. Si votre serrure n\'affiche aucune certification, si elle a plus de 10 ans, ou si votre assureur a émis des réserves, il est recommandé de la faire évaluer. Nous pouvons effectuer un diagnostic gratuit et vous conseiller sur les meilleures options pour votre situation et votre budget.'
    }
  ]
});
}

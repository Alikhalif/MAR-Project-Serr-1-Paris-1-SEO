import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    // Home
    path: '',
    loadComponent: () =>
      import('./core/pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Serrurier Paris - Intervention d\'Urgence & Sécurité en Moins de 30 Minutes',
  },

  {
    // Services
    path: 'services',
    loadComponent: () =>
      import(
        './core/pages/services-page/services-page.component'
      ).then((m) => m.ServicesPageComponent),
  },

  {
    // x
    // Urgence

    // serrurier-urgence
    path: 'serrurier-urgence',
    loadComponent: () =>
      import(
        './core/pages/urgence/serrurier-urgence/serrurier-urgence.component'
      ).then((m) => m.SerrurierUrgenceComponent),
  },

  {
    path: 'serrurier-urgence-24',
    loadComponent: () =>
      import(
        './core/pages/urgence/serrurier-urgence-24/serrurier-urgence-24.component'
      ).then((m) => m.SerrurierUrgence24Component),
  },

  {
    path: 'serrurier-dimanche',
    loadComponent: () =>
      import(
        './core/pages/urgence/serrurier-dimanche/serrurier-dimanche.component'
      ).then((m) => m.SerrurierDimancheComponent),
  },

  {
    // x
    path: 'serrurier-nuit',
    loadComponent: () =>
      import(
        './core/pages/urgence/serrurier-nuit/serrurier-nuit.component'
      ).then((m) => m.SerrurierNuitComponent),
  },

  {
    path: 'ouverture-porte',
    loadComponent: () =>
      import(
        './core/pages/urgence/ouverture-porte/ouverture-porte.component'
      ).then((m) => m.OuverturePorteComponent),
  },

  {
    // x
    path: 'ouverture-porte-claquee',
    loadComponent: () =>
      import(
        './core/pages/urgence/ouverture-porte-claquee/ouverture-porte-claquee.component'
      ).then((m) => m.OuverturePorteClaqueeComponent),
  },

  {
    path: 'ouverture-porte-blindee',
    loadComponent: () =>
      import(
        './core/pages/urgence/ouverture-porte-blindee/ouverture-porte-blindee.component'
      ).then((m) => m.OuverturePorteBlindeeComponent),
  },

  {
    // x
    path: 'depannage-porte-bloquee',
    loadComponent: () =>
      import(
        './core/pages/urgence/depannage-porte-bloquee/depannage-porte-bloquee.component'
      ).then((m) => m.DepannagePorteBloqueeComponent),
  },

  {
    path: 'porte-ne-s-ouvre-plus',
    loadComponent: () =>
      import(
        './core/pages/urgence/porte-ne-s-ouvre-plus/porte-ne-s-ouvre-plus.component'
      ).then((m) => m.PorteNeSOuvrePlusComponent),
  },

  {
    // x
    path: 'clef-cassee-dans-serrure',
    loadComponent: () =>
      import(
        './core/pages/urgence/cle-cassee-serrure/cle-cassee-serrure.component'
      ).then((m) => m.CleCasseeSerrureComponent),
  },

  {
    // x
    path: 'perte-cles-securisation',
    loadComponent: () =>
      import(
        './core/pages/urgence/perte-cles-securisation/perte-cles-securisation.component'
      ).then((m) => m.PerteClesSecurisationComponent),
  },

  {
    // x
    path: 'depannage-serrurier',
    loadComponent: () =>
      import(
        './core/pages/urgence/depannage-serrurier/depannage-serrurier.component'
      ).then((m) => m.DepannageSerrurierComponent),
  },


  // Réparation ==============================
  // =========================================

  {
    // x
    path: 'changement-serrure',
    loadComponent: () =>
      import(
        './core/pages/Réparation/changement-serrure/changement-serrure.component'
      ).then((m) => m.ChangementSerrureComponent)
  },

  {
    path: 'reparation-serrure-paris-1',
    loadComponent: () =>
      import(
        './core/pages/Réparation/reparation-serrure/reparation-serrure.component'
      ).then((m) => m.ReparationSerrureComponent)
  },

  {
    // x
    path: 'remplacement-cylindre-paris-1',
    loadComponent: () =>
      import(
        './core/pages/Réparation/remplacement-cylindre/remplacement-cylindre.component'
      ).then((m) => m.RemplacementCylindreComponent)
  },

  {
    path: 'changement-cylindre-serrure-paris-1',
    loadComponent: () =>
      import(
        './core/pages/Réparation/changement-cylindre-serrure/changement-cylindre-serrure.component'
      ).then((m) => m.ChangementCylindreSerrureComponent)
  },

  {
    // x
    path: 'serrure-cassee-paris-1',
    loadComponent: () =>
      import(
        './core/pages/Réparation/depannage-serrure-cassee/depannage-serrure-cassee.component'
      ).then((m) => m.DepannageSerrureCasseeComponent)
  },

  {
    // x
    path: 'poignee-cassee-paris-1',
    loadComponent: () =>
      import(
        './core/pages/Réparation/poignee-cassee/poignee-cassee.component'
      ).then((m) => m.PoigneeCasseeComponent)
  },

  {
    path: 'changement-barillet-paris-1',
    loadComponent: () =>
      import(
        './core/pages/Réparation/changement-barillet/changement-barillet.component'
      ).then((m) => m.ChangementBarilletComponent)
  },

  {
    // x
    path: 'reparation-porte-blindee-paris-1',
    loadComponent: () =>
      import(
        './core/pages/Réparation/porte-blindee/porte-blindee.component'
      ).then((m) => m.PorteBlindeeComponent)
  },

  {
    // x
    path: 'serrure-3-points-paris-1',
    loadComponent: () =>
      import(
        './core/pages/Réparation/serrure-3-points/serrure-3-points.component'
      ).then((m) => m.Serrure3PointsComponent)
  },

  {
    // x
    path: 'reglage-porte-paris-1',
    loadComponent: () =>
      import(
        './core/pages/Réparation/reglage-porte/reglage-porte.component'
      ).then((m) => m.ReglagePorteComponent)
  },


  // Installation ==============================
  // =========================================

  {
    // x
    path:'installation-serrure-3-point',
    loadComponent: () =>
      import(
        './core/pages/Installation/installation-serrure-3-point/installation-serrure-3-point.component'
      ).then((m) => m.InstallationSerrure3PointComponent)
  },

  {
    // x
    path:'pose-porte-blindee-paris-1',
    loadComponent: () =>
      import(
        './core/pages/Installation/pose-porte-blindee/pose-porte-blindee.component'
      ).then((m) => m.PosePorteBlindeeComponent)
  },

  {
    // x
    path:'blindage-porte-paris-1',
    loadComponent: () =>
      import(
        './core/pages/Installation/blindage-porte/blindage-porte.component'
      ).then((m) => m.BlindagePorteComponent)
  },

  {
    // x
    path:'installation-serrure-multipoints-paris-1',
    loadComponent: () =>
      import(
        './core/pages/Installation/installation-serrure-multipoints/installation-serrure-multipoints.component'
      ).then((m) => m.InstallationSerrureMultipointsComponent)
  },

  {
    // x
    path:'securisation-habitation-paris-1',
    loadComponent: () =>
      import(
        './core/pages/Installation/securisation-habitation/securisation-habitation.component'
      ).then((m) => m.SecurisationHabitationComponent)
  },



  //Prix ==============================
  // ==================================
  {
    path:'serrurier-pas-cher-paris-1',
    loadComponent: () =>
      import(
        './core/pages/Prix/serrurier-pas-cher/serrurier-pas-cher.component'
      ).then((m) => m.SerrurierPasCherComponent)
  },

  {
    path:'ouverture-porte-pas-cher-paris-1',
    loadComponent: () =>
      import(
        './core/pages/Prix/ouverture-porte-pas-cher/ouverture-porte-pas-cher.component'
      ).then((m) => m.OuverturePortePasCherComponent)
  },

  {
    path: 'depannage-serrurier-prix-paris-1',
    loadComponent: () =>
      import(
        './core/pages/Prix/depannage-serrurier-prix/depannage-serrurier-prix.component'
      ).then((m) => m.DepannageSerrurierPrixComponent)
  },

  {
    path: 'tarif-serrurier-paris-1',
    loadComponent: () =>
      import(
        './core/pages/Prix/tarif-serrurier/tarif-serrurier.component'
      ).then((m) => m.TarifSerrurierComponent)
  }
];

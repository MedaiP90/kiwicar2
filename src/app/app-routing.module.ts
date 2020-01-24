import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./modules/favorites/favorites.module').then(m => m.FavoritesPageModule)
  },
  {
    path: 'searches',
    loadChildren: () => import('./modules/searches/searches.module').then(m => m.SearchesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

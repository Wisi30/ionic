import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'shopping-list', loadChildren: './pages/shopping-list/shopping-list.module#ShoppingListPageModule' },
  { path: 'add-shopping-list', loadChildren: './pages/add-shopping-list/add-shopping-list.module#AddShoppingListPageModule' },
  { path: 'champion-list', loadChildren: './pages/champion-list/champion-list.module#ChampionsListPageModule' },
  { path: 'champion-build-list', loadChildren: './pages/champion-build-list/champion-build-list.module#BuildListPageModule' },
  { path: 'add-champion-build-list', loadChildren: './pages/add-champion-build-list/add-champion-build-list.module#AddBuildListPageModule' },
  { path: 'edit-champion-build-list', loadChildren: './pages/edit-champion-build-list/edit-champion-build-list.module#EditBuildListPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

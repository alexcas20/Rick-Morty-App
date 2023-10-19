import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './brand/brand.component';
import { SearchComponent } from './search/search.component';
import { CharacterComponent } from './character/character.component';
import { FiltersComponent } from './filters/filters.component';
import { FavoritesComponent } from './favorites/favorites.component';

const routes: Routes = [
  {path: '', component: BrandComponent, children: [
    {path: 'search', component: SearchComponent},
    {path: 'character/:id', component: CharacterComponent},
    {path: 'filters', component: FiltersComponent},
    {path: 'favorites', component: FavoritesComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

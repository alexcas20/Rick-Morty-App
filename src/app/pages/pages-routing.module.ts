import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './brand/brand.component';
import { SearchComponent } from './search/search.component';
import { CharacterComponent } from './character/character.component';
import { FiltersComponent } from './filters/filters.component';

const routes: Routes = [
  {path: '', component: BrandComponent, children: [
    {path: 'search', component: SearchComponent},
    {path: 'character/:id', component: CharacterComponent},
    {path: 'filters', component: FiltersComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

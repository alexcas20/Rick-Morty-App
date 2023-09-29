import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SearchComponent } from './search/search.component';
import { BrandComponent } from './brand/brand.component';
import { CharacterComponent } from './character/character.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SearchComponent, BrandComponent, CharacterComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }

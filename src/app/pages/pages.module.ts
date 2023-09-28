import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { SearchComponent } from './search/search.component';
import { BrandComponent } from './brand/brand.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CharacterComponent } from './character/character.component';


@NgModule({
  declarations: [SearchComponent, BrandComponent, CharacterComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgxPaginationModule
  ]
})
export class PagesModule { }

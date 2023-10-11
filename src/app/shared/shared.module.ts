import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';




@NgModule({
  declarations: [
  FooterComponent,
  NavbarComponent,
  PaginationComponent,
  SpinnerComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    PaginationComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }

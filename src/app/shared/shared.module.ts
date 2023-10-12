import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { SharedCardComponent } from './shared-card/shared-card.component';




@NgModule({
  declarations: [
  FooterComponent,
  NavbarComponent,
  PaginationComponent,
  SpinnerComponent,
  ScrollToTopComponent,
  SharedCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    PaginationComponent,
    SpinnerComponent,
    ScrollToTopComponent,
    SharedCardComponent
  ]
})
export class SharedModule { }

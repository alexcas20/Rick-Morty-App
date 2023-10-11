import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PaginationComponent } from './pagination/pagination.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './spinner/spinner.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';




@NgModule({
  declarations: [
  FooterComponent,
  NavbarComponent,
  PaginationComponent,
  SpinnerComponent,
  ScrollToTopComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    PaginationComponent,
    SpinnerComponent,
    ScrollToTopComponent
  ]
})
export class SharedModule { }

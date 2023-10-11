import { DOCUMENT } from '@angular/common';
import { Component, Inject, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  template: `
  
  <div class="scroll-to-top"  [ngClass]="{'show-scrollTop': windowScrolled}" >
    <button type="button" class="btn active" data-toggle="button" aria-pressed="true" (click)="scrollToTop()">
        <i class="fa-solid fa-angles-up icon" ></i>
    </button>
</div>
  
  `,
  styleUrls: ['./scroll-to-top.component.css']
})
export class ScrollToTopComponent  {

  windowScrolled!: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) { 
    this.windowScrolled = false;
  }

  @HostListener('window: scroll', [])
    
  

  

  onWindowScroll(){
    
    if(window.scrollY || this.document.documentElement.scrollTop || this.document.body.scrollTop > 100){
      this.windowScrolled = true;
    } else if(this.windowScrolled && window.scrollY || this.document.documentElement.scrollTop || this.document.body.scrollTop <10) {

      this.windowScrolled = false;

    }
  }

  scrollToTop(){

    window.scroll({
      top:0,
      left: 0,
      behavior:'smooth'
    })
    const smootScroll = (() => {
      const currentScroll = this.document.documentElement.scrollTop || this.document.body.scrollTop;
        if(currentScroll > 0){
          window.requestAnimationFrame(smootScroll);
          window.scrollTo(0, currentScroll - (currentScroll / 8))
        }
    })
  }

}

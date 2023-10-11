import { Component } from '@angular/core';
import { SpinnerService } from './spinner.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-spinner',
  template: `
  <div class="overlay" *ngIf="isLoading$ | async">
  <div class="lds-hourglass "></div>
  </div>
 
  `,
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent{

  isLoading$: Subject<boolean> = this.spinner.isLoading$;

  constructor(public spinner: SpinnerService) { }


 

}

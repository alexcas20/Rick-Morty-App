import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-card',
  templateUrl: './shared-card.component.html',
  styleUrls: ['./shared-card.component.css']
})
export class SharedCardComponent  {

  @Input() arrayCharacters: any[] =[];


  constructor() { }


 
  fnStatus(status:any){

      
    if(status === 'Alive'){
      return 'badge bg-success'
    } else if(status === 'Dead'){
      return 'badge bg-danger'
    } else return 'badge bg-info'
   }


}

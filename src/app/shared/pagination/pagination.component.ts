import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

 
  @Input() p: any;
  @Output() actualPageEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changePage(newPage: any){
    if(newPage < 1 || newPage > 42){
      return
    }
    this.p = newPage;
    this.actualPageEmitter.next(this.p);
  }

  checkTopPage(p:any){
    
    if(p >= 42){
      return 'topBtnD'
    } return
  }

  
  }




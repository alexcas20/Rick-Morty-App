import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

 
  @Input() p: any;
  @Input() pagesT: any;
  @Output() actualPageEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changePage(newPage: any){
    if(newPage < 1 || newPage > this.pagesT){
      return
    }
    this.p = newPage;
    this.actualPageEmitter.next(this.p);
  }

  checkTopPage(p:any){
    
    if(p >= this.pagesT){
      return 'topBtnD'
    } return
  }

  
  }




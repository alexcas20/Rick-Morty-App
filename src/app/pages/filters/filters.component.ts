import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  characters: any[] =[];
  p:number = 1;
  pagesTotal!:number;
  charactersStatus:any[] = [];
  filtro = false;
  statusGlobal = '';

  constructor(private api: ApiServiceService) { }

  ngOnInit(): void {

    this.pageChanged(this.p)
  }

  pageChanged(event:any){

    if(!this.filtro){
      this.api.getCharactersPage(event)
      .subscribe(resp => {
        this.characters = resp.results;
        this.pagesTotal = resp.info.pages;
      })

      this.p = event;
    } else {
      this.api.getCharactersStatus(this.statusGlobal,event)
      .subscribe(resp =>{
        [...this.characters] = resp.results;
        this.pagesTotal = resp.info.pages;
      })
      this.p = event;
    }
   
  }


  status(st: string){
    this.btnActive(st);
    this.filtro = true;
    this.statusGlobal = st;
    console.log('status --->', st )
    this.api.getCharactersStatus(st,this.p)
      .subscribe(resp => {
        
       [...this.characters] = resp.results;
       this.pagesTotal = resp.info.pages;

       
      })

      

    
    
  }

  btnActive(value:string): any{
    if(value === this.statusGlobal)
      return 'active'
    
  }



}

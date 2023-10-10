import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  arrayCharacters: any[] = [];
  p:number = 1;
  id!: string;
  character!: string;
  inputCh: string = '';
  busqueda = false;
  charactersSearch: any[] = [];
  pagesTotal: any;

  constructor(private api: ApiServiceService,
    ) { }

  ngOnInit(): void {

    
    
      this.pageChanged(this.p);
       
      
    

  }

  searchCh(ch:string){
      this.p = 1;
      this.character = ch;
      console.log(ch)
      this.busqueda = true
      this.api.getCharacterName(ch,1)
        .subscribe(resp => {
          this.busqueda = true
          this.pagesTotal = resp.info.pages;
          this.charactersSearch = resp.results;
          console.log(resp)
          
         
        })

        this.inputCh = '';
    

   
   
  }


  pageChanged(event: any): void{
  if(this.busqueda){
  
    console.log(this.busqueda)
    this.api.getCharacterName(this.character,event)
      .subscribe(resp => {
        console.log(resp);
        [...this.charactersSearch] = resp.results;
      })
      this.p = event;
  } 
  else {
    
    console.log(this.busqueda)
    this.api.getCharactersPage(event).subscribe(resp => {
      console.log(resp);
      this.pagesTotal = resp.info.pages;
      this.arrayCharacters = resp.results;
    })

    this.p = event;
  }
    
    
   


  }

  fnStatus(status:any){
    if(status === 'Alive'){
      return 'badge bg-success'
    } else if(status === 'Dead'){
      return 'badge bg-danger'
    } else return 'badge bg-info'
  }

}

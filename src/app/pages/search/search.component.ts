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
  busqueda = false;
  charactersSearch: any[] = [];
  pagesTotal: any;

  constructor(private api: ApiServiceService,
    ) { }

  ngOnInit(): void {

    
    
      this.pageChanged(this.p);
       
      
    

  }

  searchCh(ch:string){
    this.character = ch;
    this.busqueda =true;
    console.log(ch)
    this.api.getCharacterName(ch,this.p)
      .subscribe(resp => {
        console.log(resp)
      })
  }


  pageChanged(event: any): void{
  if(this.busqueda){
    
    this.api.getCharacterName(this.character,event)
      .subscribe(resp => {
        console.log(resp);
        this.charactersSearch = resp.results;
      })
      this.p = event;
  } 
  else {
    this.api.getCharactersPage(event).subscribe(resp => {
      console.log(resp)
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

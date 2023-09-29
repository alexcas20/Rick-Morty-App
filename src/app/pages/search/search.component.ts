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

  constructor(private api: ApiServiceService,
    ) { }

  ngOnInit(): void {

    
    
      this.pageChanged(this.p);
       
      
    

  }

  pageChanged(event: any): void{

    this.p = event;
    
    this.api.getCharactersPage(event).subscribe(resp => {
      console.log(resp)
      this.arrayCharacters = resp.results;
    })


  }

  fnStatus(status:any){
    if(status === 'Alive'){
      return 'badge bg-success'
    } else if(status === 'Dead'){
      return 'badge bg-danger'
    } else return 'badge bg-info'
  }

}

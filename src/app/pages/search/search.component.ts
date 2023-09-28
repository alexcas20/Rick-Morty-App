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

  constructor(private api: ApiServiceService) { }

  ngOnInit(): void {
    // this.api.getCharacters()
    //   .subscribe((resp: any[]) => {
    //     console.log(resp)
    //     this.arrayCharacters = resp;
    //   })
    

  }

}

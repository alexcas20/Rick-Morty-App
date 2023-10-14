import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private api: ApiServiceService,
    private route: Router) { }

  arrayCharactersNumber: number[] = [1,2,3,4,5,6,7,8,9,10, 11 ,12];
  arrayCharacters: any[] = [];

  ngOnInit(): void {

    this.arrayCharactersNumber.forEach( el => {
      this.api.getCharacters(el)
        .subscribe(resp => {
          this.arrayCharacters.push(resp);
         
        } )

    } )

    console.log(this.arrayCharacters)
     

  }

 

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favoritesCharacters: any;
  values: any;

  constructor() { }

  ngOnInit(): void {
    
    this.getValuesLocal();

    
  }


  getValuesLocal(){
    this.values = localStorage.getItem('favorites') || '[]';
    this.favoritesCharacters = JSON.parse(this.values);
  }


  delete(id:number){
    let array = JSON.parse(this.values);
    let result =  array.findIndex((element:any) => {
        console.log(element);

        console.log( element.id  === id);
      return element.id === id;
      })

      if(result > -1){
        this.favoritesCharacters.splice(result,1);
        localStorage.setItem('favorites', JSON.stringify(this.favoritesCharacters));
      } else {
        this.getValuesLocal();
      }
  }

  deleteAll(){
    this.favoritesCharacters = [];
    localStorage.removeItem('favorites');
  }
}

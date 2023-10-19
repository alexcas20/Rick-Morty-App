import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character:any;
  id!:number;

  constructor(private api: ApiServiceService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    const param = this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    }) 

    this.api.getCharacters(this.id)
      .subscribe(resp => {
        this.character = resp;
       
      })



  }

  status(status: string){
    if(status === 'Alive'){
      return 'status'
    } else if (status === 'Dead'){
      return 'statusD'
    } else return 'statusI'
  }


  addToFavorites(character:any){
    console.log(character);

    let fav = localStorage.getItem('favorites') || "[]";
    fav = JSON.parse(fav);

    console.log(fav);
    let listaFav = Array.from(fav)

    let postLista = listaFav.findIndex((e:any) => {
      return e.id == character.id;
     });

  

    if(postLista > -1){
      //find element 
      listaFav.splice(postLista,1);
    } else{
      //dont find element
      listaFav.push(character)
    }

    localStorage.setItem('favorites', JSON.stringify(listaFav));
    

    return 'addFavorite';
  }

}

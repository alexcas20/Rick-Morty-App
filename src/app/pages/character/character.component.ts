import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../services/api-service.service';
import { ActivatedRoute, Params } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character:any;
  id!:number;
  btnFav = false;

  listF = false;

  constructor(private api: ApiServiceService, private route: ActivatedRoute) { }


  ngOnInit(): void {
    const param = this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    }) 

    this.api.getCharacters(this.id)
      .subscribe(resp => {
        this.character = resp;
       
      })

      this.notFavorite(this.id);



  }

  status(status: string){
    if(status === 'Alive'){
      return 'status'
    } else if (status === 'Dead'){
      return 'statusD'
    } else return 'statusI'
  }


  addToFavorites(character:any){

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: character.name + " Added to favorites!",
      showConfirmButton: false,
      timer: 1500
    })
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
    this.btnFav = true

  
  }

  // Class
  isFav(): any{
    if(this.btnFav)
      return 'fa-solid fa-heart fav'
    else return 'fa-solid fa-heart'
  }

  notFavorite(i: number){
    console.log(i)
   let fav = localStorage.getItem('favorites') || "[]";
   let arrayL =  JSON.parse(fav);
   
    console.log('array', arrayL)
    let checkFavorites = Array.from(arrayL);

    checkFavorites.forEach((el: any) => {
      if(el.id == i ){
        this.listF = true
      }
    })
   

    console.log(this.listF)
  }

  redirectPage(){
    localStorage.removeItem("page");
  }

}

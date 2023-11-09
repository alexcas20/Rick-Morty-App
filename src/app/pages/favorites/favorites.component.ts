import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

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

    localStorage.removeItem("page");
    
    this.getValuesLocal();

    
  }


  getValuesLocal(){
    this.values = localStorage.getItem('favorites') || '[]';
    this.favoritesCharacters = JSON.parse(this.values);
  }


  delete(id:number){
  
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "top-end",
          title: "Deleted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1200
        });

        
    let array = JSON.parse(this.values);
    let result =  array.findIndex((element:any) => {
     

      
      return element.id === id;
      })

      if(result > -1){

        this.favoritesCharacters.splice(result,1);
        localStorage.setItem('favorites', JSON.stringify(this.favoritesCharacters));
        if(this.favoritesCharacters.lenght <= 1){
          this.favoritesCharacters = [];
         
        }
      } 
      localStorage.removeItem('favorites');
      
      }
      else if(result.dismiss === Swal.DismissReason.cancel){
       
        Swal.fire({
          title: "Check your actions!",
          icon: "info"
        });

        this.getValuesLocal();
      }
    });


  }

  deleteAll(){

     
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete all!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: "top-end",
          title: "Deleted!",
          icon: "success",
          showConfirmButton: false,
          timer: 1200
        });


    this.favoritesCharacters = [];
    localStorage.removeItem('favorites');
  }  else if(result.dismiss === Swal.DismissReason.cancel){
       
    Swal.fire({
      title: "Check your actions!",
      icon: "info"
    });

    this.getValuesLocal();
  }
});

  }
}

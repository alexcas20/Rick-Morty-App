import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/shared/spinner/spinner.service';
import { ApiServiceService } from '../../services/api-service.service';
import { Subject } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  arrayCharacters: any[] = [];
  p: number = 1;
  id!: string;
  character!: string;
  inputCh: string = '';
  busqueda = false;
  charactersSearch: any[] = [];
  pagesTotal: any;
  pageStorage : any;

  //Filters

  statusGlobal: any;
  filtro = false;
  params: {} = {}
  genders = ['female', 'male', 'genderless', 'uknown'];
  gender = "";

  constructor(private api: ApiServiceService) {}

  ngOnInit(): void {
    if(localStorage.getItem("page")){
      this.pageChanged(Number(localStorage.getItem("page")));
    }
    this.pageChanged(this.p);
  }

  searchCh() {
    const tipadoCh = this.inputCh.toLocaleLowerCase();
    this.p = 1;
    localStorage.setItem("page", this.p.toString());
    this.filtro = false;
    this.statusGlobal = '';
    this.character = tipadoCh;
   
   

    this.api.getCharacterName(this.character, 1).subscribe(resp => {
      this.busqueda = true;
      this.pagesTotal = resp.info.pages;
      this.charactersSearch = resp.results;
      
    }, (error) => {
      Swal.fire({
        icon: "error",
        title: "Character's name not found",
        text: "Type a valid character's name"
      })
      this.busqueda = false;
    });

    this.inputCh = '';
  }

  searchByKey(e: any) {
    if (e.keyCode === 13) {
      this.searchCh();
    }
  }

  pageChanged(event: any): void {
    if (this.busqueda && !this.filtro) {
     
      this.api.getCharacterName(this.character, event).subscribe(resp => {
        
        [...this.charactersSearch] = resp.results;
      });
      this.p = event;
      this.pageStorage = localStorage.setItem("page",this.p.toString());


    } else if(this.filtro){
      this.params = {
        page: event,
        name: this.character,
        status: this.statusGlobal,
        gender: this.gender
      }
     
      this.api.getCharactersStatusExample(this.params).subscribe(resp => {
        
        [...this.charactersSearch] = resp.results;
        this.pagesTotal = resp.info.pages;
      });
      this.p = event;
      this.pageStorage = localStorage.setItem("page",this.p.toString());
    
    }
    
    
    else  {
     
     
      this.api.getCharactersPage(event).subscribe(resp => {
       
        this.pagesTotal = resp.info.pages;
        this.arrayCharacters = resp.results;
      });

      this.p = event;
      this.pageStorage = localStorage.setItem("page",this.p.toString());
    
  }
}

  //Filters

  btnActive(value: string): any {
    if (value === this.statusGlobal) return 'btn btn-filter active';
    else return 'btn btn-filter '
  }

  status(st: string) {
    this.btnActive(st);
    this.filtro = true;
    this.statusGlobal = st;
   
     this.params = {
      page: this.p,
      name: this.character,
      status: this.statusGlobal,
      gender: this.gender
    }
    this.api.getCharactersStatusExample(this.params).subscribe(resp => {
     
      [...this.charactersSearch] = resp.results;
      this.pagesTotal = resp.info.pages;

    }, (error) => {
      this.alertError();
    });
  }


  //Gender 

  genderActive(value:string): any{
    if(value === this.gender) 
    return 'btn btn-filter active' 
    else return "btn btn-filter"

  }


  addGender(value: string){
    this.gender = value;
    this.genderActive(value);
    this.params = {
      page: this.p,
      name: this.character,
      status: this.statusGlobal,
      gender: this.gender
    }
    this.api.getCharactersStatusExample(this.params).subscribe(resp => {
     
      [...this.charactersSearch] = resp.results;
      this.pagesTotal = resp.info.pages;

    }, (error) => {
     this.alertError();
    });

  }

  alertError(){
    Swal.fire({
      icon: "error",
      title: "No results found",
      text: "Please choose another option",
    })
  }
}

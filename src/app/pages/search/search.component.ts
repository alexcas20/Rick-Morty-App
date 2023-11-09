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

  //Filters

  statusGlobal: any;
  filtro = false;
  params: {} = {}
  genders = ['female', 'male', 'genderless', 'uknown'];

  constructor(private api: ApiServiceService) {}

  ngOnInit(): void {
    this.pageChanged(this.p);
  }

  searchCh() {
    const tipadoCh = this.inputCh.toLocaleLowerCase();
    this.p = 1;
    this.filtro = false;
    this.statusGlobal = '';
    this.character = tipadoCh;
    console.log(tipadoCh);
   

    this.api.getCharacterName(this.character, 1).subscribe(resp => {
      this.busqueda = true;
      this.pagesTotal = resp.info.pages;
      this.charactersSearch = resp.results;
      console.log(resp);
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
      console.log(this.busqueda);
      this.api.getCharacterName(this.character, event).subscribe(resp => {
        console.log(resp);
        [...this.charactersSearch] = resp.results;
      });
      this.p = event;

    } else if(this.filtro){
      this.params = {
        page: event,
        name: this.character,
        status: this.statusGlobal
      }
     
      this.api.getCharactersStatusExample(this.params).subscribe(resp => {
        console.log(this.arrayCharacters);
        [...this.charactersSearch] = resp.results;
        this.pagesTotal = resp.info.pages;
      });
      this.p = event;
    
    }
    
    
    else  {
      console.log(this.busqueda);
     
      this.api.getCharactersPage(event).subscribe(resp => {
        console.log(resp);
        this.pagesTotal = resp.info.pages;
        this.arrayCharacters = resp.results;
      });

      this.p = event;
    
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
    console.log('status --->', st);
     this.params = {
      page: this.p,
      name: this.character,
      status: this.statusGlobal
    }
    this.api.getCharactersStatusExample(this.params).subscribe(resp => {
      console.log(this.charactersSearch);
      console.log(resp);
      [...this.charactersSearch] = resp.results;
      this.pagesTotal = resp.info.pages;

    });
  }


  //Gender 
  sendGender(value: string){

  }
}

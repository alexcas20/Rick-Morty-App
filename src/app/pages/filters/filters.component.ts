import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css'],
})
export class FiltersComponent implements OnInit {
  characters: any[] = [];
  p: number = 1;
  pagesTotal!: number;
  charactersStatus: any[] = [];
  filtro = false;
  statusGlobal = '';

  arrayLocations: any[] = [];
  locations: any[] = [];
  respLocations: any[] = [];

  response: any[] = [];

  constructor(private api: ApiServiceService) {}

  ngOnInit(): void {
    this.pageChanged(this.p);

    //Select array
    this.fnArrayLocations();
  }

  pageChanged(event: any) {
    if (!this.filtro) {
      this.api.getCharactersPage(event).subscribe(resp => {
        this.characters = resp.results;
        this.pagesTotal = resp.info.pages;
      });

      this.p = event;
    } else {
      this.api.getCharactersStatus(this.statusGlobal, event).subscribe(resp => {
        [...this.characters] = resp.results;
        this.pagesTotal = resp.info.pages;
      });
      this.p = event;
    }
  }

  status(st: string) {
   
    this.btnActive(st);
    this.filtro = true;
    this.statusGlobal = st;
    console.log('status --->', st);
    this.api.getCharactersStatus(st, this.p).subscribe(resp => {
      [...this.characters] = resp.results;
      this.pagesTotal = resp.info.pages;
    });
  }

  btnActive(value: string): any {
    if (value === this.statusGlobal) return 'active';
  }

  fnArrayLocations() {
    for (let i = 1; i <= 126; i++) {
      this.arrayLocations.push(i);
    }
    console.log(this.arrayLocations);

    this.api.getLocations(this.arrayLocations).subscribe(resp => {
      console.log(resp);
      this.locations = resp;
      console.log(this.locations);
    });
  }

  searchLocation(location: string) {
    this.statusGlobal = '';
    this.api.getLocations(location).subscribe(resp => {
      console.log(resp);
      const data = resp.residents;
      console.log(data);
      this.response = [];
      data.map((element: any) => {
        //get number of string and pass it in the petition
        const id = element.replace(/[^0-9]+/g, '');
        console.log(id);
        this.api.getCharacters(parseInt(id)).subscribe(resp => {
          this.response.push(resp);
          console.log(this.response);
        });
      });

      this.characters = this.response;

      console.log(this.characters);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/shared/spinner/spinner.service';
import { ApiServiceService } from '../../services/api-service.service';
import { Subject } from 'rxjs';

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

  constructor(private api: ApiServiceService) {}

  ngOnInit(): void {
    this.pageChanged(this.p);
  }

  searchCh() {
    const tipadoCh = this.inputCh.toLocaleLowerCase();
    this.p = 1;
    this.character = tipadoCh;
    console.log(tipadoCh);
    this.busqueda = true;

    this.api.getCharacterName(tipadoCh, 1).subscribe(resp => {
      this.busqueda = true;
      this.pagesTotal = resp.info.pages;
      this.charactersSearch = resp.results;
      console.log(resp);
    });

    this.inputCh = '';
  }

  searchByKey(e: any) {
    if (e.keyCode === 13) {
      this.searchCh();
    }
  }

  pageChanged(event: any): void {
    if (this.busqueda) {
      console.log(this.busqueda);
      this.api.getCharacterName(this.character, event).subscribe(resp => {
        console.log(resp);
        [...this.charactersSearch] = resp.results;
      });
      this.p = event;
    } else {
      console.log(this.busqueda);
      
      this.api.getCharactersPage(event).subscribe(resp => {
        console.log(resp);
        this.pagesTotal = resp.info.pages;
        this.arrayCharacters = resp.results;
      });

      this.p = event;
    }
  }
}

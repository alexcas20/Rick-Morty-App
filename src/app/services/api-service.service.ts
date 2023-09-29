import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ApiServiceService {

  private api = ' https://rickandmortyapi.com/api';

  private readonly CHARACTER_PAGE = 'https://rickandmortyapi.com/api/character/?page='

  
  

  constructor( private http: HttpClient) { }

  getCharacters(id:number):Observable<any>{
    const dir = `${this.api}/character/${id}`
  
    return this.http.get<any>(dir);
  }

  getCharactersPage(page: string):Observable<any>{
    const dir = this.CHARACTER_PAGE + page
    console.log(dir)
    console.log('Peticion pages')
    return this.http.get<any>(dir);
  }

 

  
}

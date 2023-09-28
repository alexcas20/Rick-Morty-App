import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ApiServiceService {

  private api = ' https://rickandmortyapi.com/api';

  
  

  constructor( private http: HttpClient) { }

  getCharacters(id:number):Observable<any>{
    const dir = `${this.api}/character/${id}`
  
    return this.http.get<any>(dir);
  }

  // getAllCharacters(page = 1, term = ""): Observable<any> {
  //   return this.http.get<any>(`${this.api}/?page=${page}${(term === "") ? "" : "&name=" + term}`);
  // }

 

  
}

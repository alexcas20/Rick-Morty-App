import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  private api = ' https://rickandmortyapi.com/api';
  

  constructor( private http: HttpClient) { }

  getCharacters(id:any):Observable<any>{
    const dir = `${this.api}/character/${id}`
  
    return this.http.get<any>(dir);
  }
}

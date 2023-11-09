import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ApiServiceService {

  private api = ' https://rickandmortyapi.com/api/character';
  private apiparams = ' https://rickandmortyapi.com/api/character/';
  private readonly CHARACTER_PAGE = 'https://rickandmortyapi.com/api/character/?page=';
 



  private currentPage : any;

  


  
  

  constructor( private http: HttpClient) { 

    
  }





  getCharacters(id:number):Observable<any>{
    const dir = `${this.api}/${id}`
    
    return this.http.get<any>(dir);
  }

  getCharactersPage(page: string):Observable<any>{
    const dir = this.CHARACTER_PAGE + page
   
    return this.http.get<any>(dir);
  }

  getCharacterName(name:string,page:number):Observable<any>{
    const dir = this.CHARACTER_PAGE +   page + '&name=' + name;
    return this.http.get<any>(dir);
  }

  getCharactersStatus(status:string, page:number): Observable<any>{
    const dir = this.CHARACTER_PAGE + page + '&status=' + status;
    
    return this.http.get<any>(dir)
  }

  getCharactersStatusExample(query: any): Observable<any>{
    const dir = this.apiparams + '?';
    
    let httpParams = new HttpParams();
    Object.keys(query).forEach(function (key) {
      httpParams = httpParams.append(key, query[key]);
    });
    
  
   
   
    return this.http.get<any>(dir + httpParams)
  }

  
  

 

  
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ApiServiceService {

  private api = ' https://rickandmortyapi.com/api/character';

  private readonly CHARACTER_PAGE = 'https://rickandmortyapi.com/api/character/?page=';
 
  // private readonly CHARACTER_NAME = 'https://rickandmortyapi.com/api/character/?page=';

  private readonly LOCATIONS = 'https://rickandmortyapi.com/api/location/';

  private currentPage : any;

  


  
  

  constructor( private http: HttpClient) { 

    this.currentPage = new BehaviorSubject<string>('');
  }

  setValue(value : string){
    this.currentPage.next(value);
  }

  getValue(value : string){
    return this.currentPage.asObservable();
  }



  getCharacters(id:number):Observable<any>{
    const dir = `${this.api}/${id}`
    console.log('Dir ---> '+ dir);
    return this.http.get<any>(dir);
  }

  getCharactersPage(page: string):Observable<any>{
    const dir = this.CHARACTER_PAGE + page
    console.log(dir)
    console.log('Peticion pages')
    return this.http.get<any>(dir);
  }

  getCharacterName(name:string,page:number):Observable<any>{
    const dir = this.CHARACTER_PAGE +   page + '&name=' + name;
    return this.http.get<any>(dir);
  }

  getCharactersStatus(status:string, page:number): Observable<any>{
    const dir = this.CHARACTER_PAGE + page + '&status=' + status;
    console.log('Direccion status -> '+dir);
    return this.http.get<any>(dir)
  }

  getLocations(parameters:any):Observable<any>{
    const dir = this.LOCATIONS + parameters;
    console.log(dir);
    return this.http.get<any>(dir);
  }

 

  
}

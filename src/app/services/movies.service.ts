import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http:HttpClient) { }
  public getMovie(id:string): Observable<any>{
    const options = {
      method: 'GET',
      params: {
        id: id,
      },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-RapidAPI-Host': 'movie-details1.p.rapidapi.com',
    'X-RapidAPI-Key': '7aa5966e89msh9378786283a101fp162643jsneaeb96b39428'
      })
    }
    return this.http.get('https://movie-details1.p.rapidapi.com/imdb_api/movie',options);
  }
    
    
    }
  


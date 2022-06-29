import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiTraductorService {
  constructor(private http:HttpClient) { }

  

  public postTranslate(text:string, target:string, source:string):Observable<any>{

    const httpOptions = {
      headers: new HttpHeaders({  'content-type': 'application/x-www-form-urlencoded',
    'Accept-Encoding': 'application/gzip',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    'X-RapidAPI-Key': '7aa5966e89msh9378786283a101fp162643jsneaeb96b39428'     }),
    }

    const body = new HttpParams()
    .set('q', text)
    .set('target', target)
    .set('source', source);

    return this.http.post('https://google-translate1.p.rapidapi.com/language/translate/v2',body,  httpOptions);

  }
}

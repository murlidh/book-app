import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoogsService {


  constructor(private http:HttpClient) { }
  getGet():Observable<any>{
    return this.http.get('https://api.song.link/v1-alpha.1/links?url=spotify%3Atrack%3A0Jcij1eWd5bDMU5iPbxe2i&userCountry=US&songIfSingle=true&key=')
  }
}

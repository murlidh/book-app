import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {
  constructor(private http:HttpClient) { }

  getGet():Observable<any>{
    return this.http.get('https://api.song.link/v1-alpha.1/links?url=spotify%3Atrack%3A0Jcij1eWd5bDMU5iPbxe2i&userCountry=US&songIfSingle=true&key=')
  }
  getSongList():Observable<any[]>{
    return this.http.get<any>('https://api.song.link/v1-alpha.1/links?url=spotify%3Atrack%3A0Jcij1eWd5bDMU5iPbxe2i&userCountry=US&songIfSingle=true&key=')
    .pipe(map(Response =>{
      return Object.values(Response.entitiesByUniqueId).map((entity:any) =>{
        return{
          id: entity.id,
          title: entity.title,
          artistName: entity.artistName,
          thumbnailUrl: entity.thumbnailUrl

        }
      })
    }))
  }
}

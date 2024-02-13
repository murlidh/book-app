import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BookService {
 private apiUrl='http://localhost:3000/book'
  isDarkMode: boolean = false;
  constructor(private http:HttpClient) { }

  getBooks():Observable<any[]>{
    return this.http.get<any[]>(this.apiUrl)
  }

  addBooks(Book:any):Observable<any>{
    return this.http.post<any>(this.apiUrl ,Book)
  }

  toggleDarkMode():void{
    this.isDarkMode=!this.isDarkMode;
    if(this.isDarkMode){
      document.body.classList.add('dark-theme')
    } else{
      document.body.classList.remove('dark-theme')
    }

  }
}

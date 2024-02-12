import { Injectable } from '@angular/core';
import { Book } from './book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[]= [
    { id: 1, title: 'Letting Go', author: 'Philip Roth', genre: 'Genre 1', imageUrl: "https://images3.penguinrandomhouse.com/cover/9780679764175" },
    { id: 2, title: 'Fear of Flying', author: 'Erica Jong', genre: 'Genre 2', imageUrl: "https://images2.penguinrandomhouse.com/cover/9780143107354" },
    { id: 3, title: 'Encyclopedia Brown Detective', author: 'Donald J. Sobol', genre: 'Genre 3', imageUrl: "https://images4.penguinrandomhouse.com/cover/9780142408889" },
    { id: 4, title: 'When Breath Becomes Air', author: 'Paul Kalanithi', genre: 'Genre 4', imageUrl: "https://images3.penguinrandomhouse.com/cover/9780812988406" },
    { id: 5, title: 'The Adventures of Tom Sawyer', author: 'Mark Twain', genre: 'Genre 5', imageUrl: "https://images1.penguinrandomhouse.com/cover/9780143107330" },
    { id: 6, title: 'Paper Moon', author: 'Rehana Munir', genre: 'Genre 6', imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-MSHDeRRp2m86wMKYkqx88spBZvID-b4g2A&s"}   
  ];
  isDarkMode: boolean = false;
  constructor() { }
  getBooks(): Book[]{
    return this.books
  }
  
  toggleDarkMode():void{
    this.isDarkMode=!this.isDarkMode;
    if(this.isDarkMode){
      document.body.classList.add('dark-theme')
      console.log(this.isDarkMode,'darkmode')
    } else{
      document.body.classList.remove('dark-theme')
    }

  }
}

import { Component } from '@angular/core';
import { BookService } from './book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My Book Store';
  theme:any = 'dark'
  constructor(private BookService: BookService) {}

  toggleDarkMode(): void {
    this.BookService.toggleDarkMode();
    if(this.BookService.isDarkMode){
      this.theme = 'light'
    }else{
      this.theme = 'dark'

    }
  }
}

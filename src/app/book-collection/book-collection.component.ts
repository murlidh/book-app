import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { debounceTime, distinctUntilChanged, filter } from 'rxjs';

import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss'],
})
export class BookCollectionComponent implements OnInit {
  books: Book[] | any;
  filteredBooks: Book[] | undefined;
  searchControl = new FormControl();
  view: 'grid' | 'list' = 'grid';
  showAutocompleteOptions: boolean = false;
  selectBook: any;
  selectedBook: any;
  search: any;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.getBooks();
  }

  toggleView(view: 'grid' | 'list'): void {
    this.view = view;
  }
  onClick(book: any, index: number) {
    this.selectedBook = book;
    console.log(this.selectedBook);
  }

  getBooks() {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
      console.log(this.books);
    });
  }

  searchFilter(event: any) {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books.filter(
        (item: any) =>
          item.title.toLowerCase().includes(this.search.toLowerCase()) ||
          item.author.toLowerCase().includes(this.search.toLowerCase())
      );
    });
  }
}

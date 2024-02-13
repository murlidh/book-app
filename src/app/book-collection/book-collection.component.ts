import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { debounceTime, distinctUntilChanged, filter } from 'rxjs';

import { Book } from '../book.model';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss']
})
export class BookCollectionComponent implements OnInit {
books:Book[] | any
filteredBooks: Book[] | undefined;
searchControl = new FormControl();
view:'grid' |'list'='grid';
 showAutocompleteOptions: boolean = false;
selectBook: any;
selectedBook:any
search:any

  constructor(private bookService: BookService){}

  ngOnInit(): void {
this.getBooks()

    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(value => value && value.trim().length >= 3)
    ).subscribe(value => {
      this.filteredBooks = this.filterBooks(value);
    });

  }

  toggleView(view: 'grid' | 'list'): void {
    this.view = view;
  }
  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase().trim();
    this.filteredBooks = this.filterBooks(filterValue);
  }

  filterBooks(value: string): Book[] {
    return (this.books??[]).filter((book:any) =>
      book.title.toLowerCase().includes(value) ||
      book.author.toLowerCase().includes(value) ||
      book.genre.toLowerCase().includes(value)
    );
  }
  displayFn(book?: Book): string | undefined {
    return book ? book.title : undefined;
  }
  onInputBlur(): void {
    setTimeout(() => {
      this.showAutocompleteOptions = false;
    }, 200);
  }
  onClick(book: any, index: number) {
    this.selectedBook = book
  }

  getBooks(){
    this.bookService.getBooks().subscribe(books=>{
      this.books=books
    })
  }

  searchFilter(event: any) {
    this.books = this.bookService.getBooks();
    console.log(this,this.books)
    this.books = this.books.filter((item: any) =>
    item.title.toLowerCase().includes(this.search.toLowerCase()));
}
}


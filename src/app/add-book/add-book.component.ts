import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { BookService } from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent {
  constructor(private booService: BookService) {}

  onSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const newBook = {
      title: form.value.title,
      author: form.value.author,
      genre: form.value.genre,
      imageUrl: form.value.imageUrl,
      description: form.value.description
    };
    this.booService.addBooks(newBook).subscribe(Response=>{
      console.log(Response);
      form.resetForm;
    })
  }
}

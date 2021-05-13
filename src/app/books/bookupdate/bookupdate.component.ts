import { Component, OnInit } from '@angular/core';
import {BookserviceService} from '../../service/bookservice.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Book} from '../../model/book';

@Component({
  selector: 'app-bookupdate',
  templateUrl: './bookupdate.component.html',
  styleUrls: ['./bookupdate.component.css']
})
export class BookupdateComponent implements OnInit {
  message: string;
  book: Book;
  bookForm : FormGroup = new FormGroup({
    id: new FormControl(),
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl()
  });
  constructor(private bookService: BookserviceService,
              private activeRoute: ActivatedRoute)
  {
    this.activeRoute.paramMap.subscribe(paramMap=>{
      const id = +paramMap.get("id");
      this.getBookById(id);
    })
  }
  getBookById(id: number) {
    this.bookService.getBookByID(id).subscribe(book => {
      this.book = book;
      this.bookForm = new FormGroup({
          id: new FormControl(book.id),
          title: new FormControl(book.title),
          author: new FormControl(book.author),
          description: new FormControl(book.description)
        }
      )
    });
  }
  ngOnInit() {
  }
  updateBook() {
    this.book = this.bookForm.value;
    this.bookService.updateBook(this.book, this.book.id).subscribe(() => {
        this.message = "Successfully updated";
      },
      error => {
        this.message = "Unexpected error occurred";
      });
  }
}

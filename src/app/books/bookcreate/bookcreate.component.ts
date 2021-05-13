import { Component, OnInit } from '@angular/core';
import {BookserviceService} from '../../service/bookservice.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-bookcreate',
  templateUrl: './bookcreate.component.html',
  styleUrls: ['./bookcreate.component.css']
})
export class BookcreateComponent implements OnInit {
  message: string;
  constructor(private bookService: BookserviceService) { }

  ngOnInit() {
  }
  private bookForm: FormGroup = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      author: new FormControl(),
      description: new FormControl()
    }
  )
  onSubmit() {
    const book = this.bookForm.value;
    this.bookService.addBook(book).subscribe(() => {
      this.bookForm.reset();
      this.message = "Successfully added " + book.title;
    },
    error => {
      this.bookForm.reset();
      this.message = "Unexpected error occurred";
    });
  }
}

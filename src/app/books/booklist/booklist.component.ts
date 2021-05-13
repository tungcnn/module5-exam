import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Book} from '../../model/book';
import {BookserviceService} from '../../service/bookservice.service';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css']
})
export class BooklistComponent implements OnInit, OnChanges {
  books: Book[];
  constructor(private bookService: BookserviceService) { }

  ngOnInit() {
    this.getAll();

  }
  getAll() {
    this.bookService.getAllBook().subscribe(books => this.books = books);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getAll();
  }
}

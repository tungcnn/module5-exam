import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookserviceService} from '../../service/bookservice.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  book: Book = {};
  constructor(private bookService: BookserviceService,
              private activeRoute: ActivatedRoute)
  {
    this.activeRoute.paramMap.subscribe(paramMap=>{
      const id = +paramMap.get("id");
      this.getBookById(id);
    })
  }

  ngOnInit() {
  }
  getBookById(id: number) {
    this.bookService.getBookByID(id).subscribe(book => this.book = book);
  }
}

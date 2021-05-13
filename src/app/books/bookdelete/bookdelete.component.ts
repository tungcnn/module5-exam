import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookserviceService} from '../../service/bookservice.service';
import {ActivatedRoute, Router} from '@angular/router';
import {BooklistComponent} from '../booklist/booklist.component';

@Component({
  selector: 'app-bookdelete',
  templateUrl: './bookdelete.component.html',
  styleUrls: ['./bookdelete.component.css']
})
export class BookdeleteComponent implements OnInit {
  book: Book = {};
  constructor(private bookService: BookserviceService,
              private activeRoute: ActivatedRoute,
              private router: Router)
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
  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(()=>{
      this.router.navigateByUrl('');
    })
  }
}

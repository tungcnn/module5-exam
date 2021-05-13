import { Injectable } from '@angular/core';
import {Book} from '../model/book';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {
  constructor(private http: HttpClient) { }

  getAllBook(): Observable<Book[]> {
    return this.http.get<Book[]>(`${API_URL}/books`);
  }
  getBookByID(id: number): Observable<Book> {
    return this.http.get<Book>(`${API_URL}/books/${id}`);
  }
  addBook(book: any): Observable<Book> {
    return this.http.post<Book>(`${API_URL}/books`,book);
  }
  updateBook(book: Book, id: number): Observable<Book> {
    return this.http.put<Book>(`${API_URL}/books/${id}`,book);
  }
  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${API_URL}/books/${id}`);
  }
}

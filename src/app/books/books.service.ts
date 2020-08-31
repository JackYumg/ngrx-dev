import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  [x: string]: any;

  constructor(
    private http: HttpClient
  ) { }

  getBookList(): Observable<any> {
    return this.http.get('getBooKByPage', {});
  }
}

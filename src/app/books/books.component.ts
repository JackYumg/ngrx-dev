import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { bookList } from './ngrx/book.actions';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less'],
  providers: [BooksService]
})
export class BooksComponent implements OnInit {

  book: any;
  bookList: Observable<any[]> = this.store.select((state: any) => { console.log(state); return state.book.books });
  constructor(

    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(bookList());
  }

}

import { Component, OnInit } from '@angular/core';
import { BooksService } from './books.service';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { bookList } from './ngrx/book.actions';
import { selectFeatureCount } from './ngrx/book.select';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.less'],
  providers: [BooksService]
})
export class BooksComponent implements OnInit {

  book: any;
  bookList: Observable<any[]> = this.store.pipe(select(selectFeatureCount));
  constructor(

    private store: Store<any>
  ) { }

  ngOnInit(): void {
    this.store.dispatch(bookList());
  }

}

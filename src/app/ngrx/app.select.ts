import { BookState } from './../books/ngrx/book.select';
export interface AppState {
    book: BookState;
}

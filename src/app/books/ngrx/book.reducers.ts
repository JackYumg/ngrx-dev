import { createReducer, on, Action } from '@ngrx/store'
import * as BookActions from './book.actions';
export interface BooksState {
    books: any[];
}
export const initBookState: BooksState = {
    books: []
};
const booksReducer = createReducer(
    initBookState,
    on(BookActions.bookList, (state) => {
        return state;
    }),
    on(BookActions.assginBookList, (state, args) => {
        const { books, type } = args;
        return {
            ...state, ...{ books }
        };
    }),
    on(BookActions.errorBookList, (state) => {
        return state;
    }),
);
// tslint:disable-next-line: typedef
export function reducer(state: BooksState | undefined, action: Action) {
    return booksReducer(state, action);
}

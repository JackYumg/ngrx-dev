import { createAction, props, Action } from '@ngrx/store';

export const BOOKS_PAGE_LOAD = '[Books Page] Load Books';
export const BOOKS_SUCCESS_LOAD = '[Books API] Books Loaded Success';
export const BOOKS_ERROR_LOAD = '[Books API] Books Loaded Error';

export const bookList = createAction(BOOKS_PAGE_LOAD);
export const assginBookList = createAction(BOOKS_SUCCESS_LOAD, props<{ books: any[] }>());
export const errorBookList = createAction(BOOKS_ERROR_LOAD);

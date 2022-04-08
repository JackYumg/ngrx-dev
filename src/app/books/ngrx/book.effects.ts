import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { BooksService } from './../books.service';
import { BOOKS_PAGE_LOAD, BOOKS_SUCCESS_LOAD, BOOKS_ERROR_LOAD } from './book.actions';
@Injectable()
export class BookEffects {
    loadMovies$ = createEffect(() => {
        const obs = this.actions$.pipe(
            ofType(BOOKS_PAGE_LOAD),
            mergeMap(() => this.bookServcie.getBookList().pipe(
                map(books => {
                    return ({ type: BOOKS_SUCCESS_LOAD, books: [books] });
                }),
                catchError(() => of({ type: BOOKS_ERROR_LOAD }))
            ))
        );
        return obs;
    }, {});

    constructor(
        private actions$: Actions,
        private bookServcie: BooksService
    ) { }
}

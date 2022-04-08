import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './../../ngrx/app.select';
export const featureKey = 'book';

export interface BookState {
  books: any[];
}
export const selectFeature = createFeatureSelector<AppState, BookState>(featureKey);
export const selectFeatureCount = createSelector(
  selectFeature,
  (state: BookState) => state.books
);

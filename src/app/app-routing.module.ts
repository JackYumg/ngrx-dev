import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { CountComponent } from './count/count.component';
import { BooksComponent } from './books/books.component';
const routes: Routes = [
  { path: '', redirectTo: 'count', pathMatch: 'full' },
  { path: 'count', component: CountComponent },
  { path: 'book', component: BooksComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.forRoot({
      router: routerReducer,
    }),
    StoreRouterConnectingModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

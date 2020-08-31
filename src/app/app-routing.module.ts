import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
const routes: Routes = [
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: environment.useHash }),
    StoreModule.forRoot({
      router: routerReducer,
    }),
    StoreRouterConnectingModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

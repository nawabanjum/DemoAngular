import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { I18N_PROVIDERS } from './i18n/config';
import { I18NextModule } from 'angular-i18next';
import { ItemListComponent } from './components/item-list/item-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AddItemComponent } from './components/add-item/add-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { reducer } from './reducers/sale.reducer';

@NgModule({
  declarations: [AppComponent,ItemListComponent, AddItemComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,   
    StoreModule.forRoot({ sale: reducer } as ActionReducerMap<any,any>),
   
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    I18NextModule.forRoot()
  ],
  providers: [I18N_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule {}

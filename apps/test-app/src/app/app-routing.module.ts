import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemListComponent } from './components/item-list/item-list.component';


const routes: Routes = [
  
  {
    path: 'Saleitems',    
    component: ItemListComponent
  },
  
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload', scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled', scrollOffset: [0, 64],
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

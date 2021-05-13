import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BooklistComponent} from './books/booklist/booklist.component';
import {BookcreateComponent} from './books/bookcreate/bookcreate.component';
import {BookupdateComponent} from './books/bookupdate/bookupdate.component';
import {BookdeleteComponent} from './books/bookdelete/bookdelete.component';
import {BookdetailComponent} from './books/bookdetail/bookdetail.component';


const routes: Routes = [
  {
    path: '',
    component: BooklistComponent
  },
  {
    path: 'create',
    component: BookcreateComponent
  },
  {
    path: 'update/:id',
    component: BookupdateComponent
  },
  {
    path: 'delete/:id',
    component: BookdeleteComponent
  },
  {
    path: 'detail/:id',
    component: BookdetailComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

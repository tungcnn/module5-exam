import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, /* other http imports */ } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooklistComponent } from './books/booklist/booklist.component';
import { BookcreateComponent } from './books/bookcreate/bookcreate.component';
import { BookupdateComponent } from './books/bookupdate/bookupdate.component';
import { BookdeleteComponent } from './books/bookdelete/bookdelete.component';
import { BookdetailComponent } from './books/bookdetail/bookdetail.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BooklistComponent,
    BookcreateComponent,
    BookupdateComponent,
    BookdeleteComponent,
    BookdetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

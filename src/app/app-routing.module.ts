import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SongsComponent } from './Songs/songs.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookCollectionComponent } from './book-collection/book-collection.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'header',
component:HeaderComponent},
  {path:'book-collect',
component:BookCollectionComponent},
  {path:'add-book',
component:AddBookComponent},
{path:'doogs',
component:SongsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

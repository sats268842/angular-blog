import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtricleListComponent } from './atricle-list/atricle-list.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'articles', component: AtricleListComponent  },
  { path: 'about', component: AboutComponent },
  { path: '', component: AtricleListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

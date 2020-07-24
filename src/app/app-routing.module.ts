import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AtricleListComponent } from './atricle-list/atricle-list.component';
import { AboutComponent } from './about/about.component';
import { ArticleComponent } from './article/article.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: 'articles', component: AtricleListComponent  },
  { path: 'about', component: AboutComponent },
  { path: '404', component: NotFoundComponent },
  { path: '', component: AtricleListComponent},
  { path: ':key', component: ArticleComponent},
  { path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"

import { AppComponent } from "./app.component"
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { MatToolbarModule } from "@angular/material/toolbar"
import { RouterModule, Routes } from "@angular/router"
import { ArticleListComponent } from "./article-list/article-list.component"
import { ArticleDetailComponent } from "./article-detail/article-detail.component"
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component"

const routes: Routes = [
  {
    path: "articles/:id",
    component: ArticleDetailComponent,
  },
  {
    path: "articles",
    component: ArticleListComponent,
  },
  {
    path: "",
    redirectTo: "/articles",
    pathMatch: "full"
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ArticleListComponent,
    ArticleDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GetPostsService } from './get-posts.service';
import { GetCategoriesService } from './get-categories.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostsComponent } from './posts/posts.component';
import { SinglePostComponent } from './single-post/single-post.component';
import { CategoryNavComponent } from './category-nav/category-nav.component';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    SinglePostComponent,
    CategoryNavComponent,
    MaincontainerComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, NgbModule, AppRoutingModule
  ],
  providers: [GetPostsService, GetCategoriesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

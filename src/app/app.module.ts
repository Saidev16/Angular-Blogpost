import { PostService } from './services/post.service';
import { EmailService } from './email.service';
import { CoursesService } from './courses.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { PanelComponent } from './panel/panel.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { PostsComponent } from './posts/posts.component';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileFollowerComponent } from './profile-follower/profile-follower.component';

const routes: Routes = [
  {
    path:'' , 
    component: HomeComponent
  },
  {
    path:'followers' ,
    component: GithubFollowersComponent
  },
  
  {
    path:'followers/:username' ,
    component: ProfileFollowerComponent
  },
  {
    path:'posts' ,
    component: PostsComponent
  },
  {
    path:'**' ,
    component: PageNotFoundComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavoriteComponent,
    PanelComponent,
    ContactFormComponent,
    PostsComponent,
    GithubFollowersComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule ,
    RouterModule.forRoot(routes)
  ],
  providers: [CoursesService, EmailService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }

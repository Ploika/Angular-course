import { ResolveUsersService } from './services/resolve-users.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './components/user/user.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component'
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { ResolvePostsService } from './services/resolve-posts.service';


let routes: Routes = [
  {path: 'users', component: UsersComponent,
    children:[
    {path: ':id', component: UserDetailsComponent}
  ], resolve: {data: ResolveUsersService}
},
  {path: 'home', component: HomeComponent },
  {path: 'posts', component: PostsComponent,
    children: [
      {path: ':id', component: PostDetailsComponent}
    ],
    resolve: {data: ResolvePostsService}
  }

]

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    PostsComponent,
    PostComponent,
    HomeComponent,
    UserDetailsComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

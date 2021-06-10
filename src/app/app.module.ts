import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TemplateDrivenFormsComponent } from './components/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { SelectComponent } from './components/select/select.component';
import { CarsComponent } from './components/cars/cars.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';


@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormsComponent,
    ReactiveFormsComponent,
    SelectComponent,
    CarsComponent,
    UserDetailsComponent,
    UserPostsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

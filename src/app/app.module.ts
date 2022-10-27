import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { AdminComponent } from './pages/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './highlight.directive';
import { NullablePipe } from './nullable.pipe';
import { ProveComponent } from './pages/prove/prove.component';
import { LoginComponent } from './pages/login/login.component';
import { NewsFormComponent } from './pages/news/news-form/news-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    AdminComponent,
    HighlightDirective,
    NullablePipe,
    ProveComponent,
    LoginComponent,
    NewsFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ComponentsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

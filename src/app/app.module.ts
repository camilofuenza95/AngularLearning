import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PostServiceService } from './services/post-service.service';
import { TablePostComponent } from './components/tables/table-post/table-post.component';
import { MaterialModuleModule } from '../modules/material-module/material-module.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    TablePostComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

    RouterModule.forRoot([
        {path: 'home', component: HomeComponent},
        { path: '',  pathMatch: 'full', component:LoginComponent },
    ]),
    HttpClientModule,
    MaterialModuleModule

  ],
  providers: [
    PostServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavigationComponent } from './navigation/navigation.component';
import { MainviewComponent } from './main-page/mainview/mainview.component';
import { PostsGamesComponent } from './main-page/posts-games/posts-games.component';
import { PostsCoachComponent } from './main-page/posts-coach/posts-coach.component';
import { PostsAccSellComponent } from './main-page/posts-acc-sell/posts-acc-sell.component';
import { PostsBoostComponent } from './main-page/posts-boost/posts-boost.component';
import { PostsMixedAllComponent } from './main-page/posts-mixed-all/posts-mixed-all.component';
import { SharedserviceService } from './sharedservice.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MoreInfoComponent } from './main-page/more-info/more-info.component';
import { FilterComponent } from './main-page/filter/filter.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginTemplateComponent } from './login-template/login-template.component';
import { RegisterTemplateComponent } from './register-template/register-template.component';
import { ProfileTemplateComponent } from './profile-template/profile-template.component';
import { YourPostsComponent } from './your-posts/your-posts.component';
import { RegisterFormComponent } from './register-template/register-form/register-form.component';
import { LoginFormComponent } from './login-template/login-form/login-form.component';
import { TokenInterpretorService } from './token-interpretor.service';
import { AddEditComponent } from './your-posts/add-edit/add-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MainviewComponent,
    PostsGamesComponent,
    PostsCoachComponent,
    PostsAccSellComponent,
    PostsBoostComponent,
    PostsMixedAllComponent,
    MoreInfoComponent,
    FilterComponent,
    FooterComponent,
    MainPageComponent,
    LoginTemplateComponent,
    RegisterTemplateComponent,
    ProfileTemplateComponent,
    YourPostsComponent,
    RegisterFormComponent,
    LoginFormComponent,
    AddEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModule,
  ],
  providers: [
    SharedserviceService,
    NavigationComponent,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterpretorService,
      multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
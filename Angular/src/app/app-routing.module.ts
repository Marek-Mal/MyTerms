import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component'
import { LoginTemplateComponent } from './login-template/login-template.component'
import { RegisterTemplateComponent } from './register-template/register-template.component';
import { ProfileTemplateComponent } from './profile-template/profile-template.component';
import { YourPostsComponent } from './your-posts/your-posts.component'

const routes: Routes = [
  { path: '', component:MainPageComponent },
  { path: 'Login', component:LoginTemplateComponent },
  { path: 'Register', component:RegisterTemplateComponent },
  { path: 'Profile', component:ProfileTemplateComponent },
  { path: 'MyPosts', component:YourPostsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

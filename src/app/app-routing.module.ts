import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsComponent } from './news/news.component';
import { RegisterComponent } from './register/register.component';
import { UserScreenComponent } from './user-screen/user-screen.component';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';
import { WheatherComponent } from './wheather/wheather.component';
import { ChatComponent } from './chat/chat.component';
import { ValueChangerComponent } from './value-changer/value-changer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'news', component: NewsComponent },
  { path: 'weather', component: WheatherComponent },
  { path: 'chat', component: ChatComponent },
  { path: 'value', component: ValueChangerComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user-screen', component: UserScreenComponent },
  {
    path: 'callback',
    component: OktaCallbackComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

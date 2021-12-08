import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {TextFieldModule} from '@angular/cdk/text-field';
import { UserScreenComponent } from './user-screen/user-screen.component';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS} from '@angular/material/snack-bar';
import { AuthInterceptorProviders } from './_helpers/auth.interceptor';
import { WheatherComponent } from './wheather/wheather.component';
import { ChatComponent } from './chat/chat.component';
import { ChatService } from './chat.service';
import { UsernameComponent } from './username/username.component';
import { ValueChangerComponent } from './value-changer/value-changer.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    ContactComponent,
    AboutComponent,
    LoginComponent,
    NavigationComponent,
    FooterComponent,
    UserScreenComponent,
    RegisterComponent,
    WheatherComponent,
    ChatComponent,
    UsernameComponent,
    ValueChangerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCarouselModule.forRoot(),
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    TextFieldModule,
    MatSnackBarModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA3YymppqWPnNyz6SMdgXc1m7QFUILeupM",
      authDomain: "projekt-89ec5.firebaseapp.com",
      projectId: "projekt-89ec5",
      storageBucket: "projekt-89ec5.appspot.com",
      messagingSenderId: "3326769005",
      appId: "1:3326769005:web:49eae7f2675d141a920c64",
      measurementId: "G-02NV9QMJL7"
    })

  ],
  providers: [UserService,AuthInterceptorProviders,ChatService,
    {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 1500}}],
  bootstrap: [AppComponent]
})
export class AppModule { }

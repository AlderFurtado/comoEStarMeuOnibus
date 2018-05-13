import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';

import {AngularFireModule, FirebaseApp} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireList} from 'angularfire2/database';
//import { ContactServiceProvider } from '../providers/contact-service/contact-service';


var firebaseConfig = {
  apiKey: "AIzaSyB10ysAU4t62s0Eig6mIORmz0wVsv6aJLQ",
  authDomain: "comoestarmeuonibus.firebaseapp.com",
  databaseURL: "https://comoestarmeuonibus.firebaseio.com",
  projectId: "comoestarmeuonibus",
  storageBucket: "comoestarmeuonibus.appspot.com",
  messagingSenderId: "145219296700"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CadastroPage,
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,


  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    CadastroPage,
    //AlertController
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    //ContactServiceProvider,
  ]
})
export class AppModule {}

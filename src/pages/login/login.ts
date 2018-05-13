import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { TabsPage } from '../tabs/tabs';
import { CadastroPage } from '../cadastro/cadastro';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  usuario = {
    email: null, 
    password: null}

  login(email, password){
    this.auth.auth.signInWithEmailAndPassword(email, password)
      .then(() =>{
        this.navCtrl.setRoot(TabsPage)
        console.log('logado')
      })
      .catch(()=>{
        console.log('erro no login, email ou senha errado')
      })
  }

  cadastrar(){
    this.navCtrl.push(CadastroPage);
  }

}

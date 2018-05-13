import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private auth:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  usuario = {
    email: null, 
    password: null}

  cadastrar(email, password){
    this.auth.auth.createUserWithEmailAndPassword(email, password)
      .then(() =>{
        this.navCtrl.pop()
        console.log('Usuario Cadastrado')
      })
      .catch(()=>{
        console.log('Usuario nao Cadastrado')
      })
  }

}

import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { AngularFireDatabaseModule } from "angularfire2/database";



@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {



  testCheckboxResult = [];
  testCheckboxOpen: boolean;




  constructor(public navCtrl: NavController,public alertCtrl: AlertController, private db:AngularFireDatabaseModule) {
    //this.db.  
  

  }

  showCheckbox() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which planets have you visited?');

    alert.addInput({
      type: 'checkbox',
      label: 'Alderaan',
      value: 'Alderaan',
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Bespin',
      value: 'Bespin'
    });

    
    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult.push(data);
      }
    });
    alert.present().then(() => {
      this.testCheckboxOpen = true;
    });
  }

  

}



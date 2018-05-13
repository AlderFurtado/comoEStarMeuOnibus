/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import {AngularFireAuth} from 'angularfire2/auth';*/

/*
  Generated class for the ContactServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
/*@Injectable()
export class ContactServiceProvider {

  items: AngularFireList<any[]>;

  constructor(/*public http: HttpClient, private db: AngularFireDatabase, private angularFireAuth: AngularFireAuth) {
    angularFireAuth.authState.subscribe(user => {
      var path = '/about/' + user.uid;
      this.items = db.list(path);
    })
  }

  public getAll(){
    return this.items;
  }

  public save(value: boolean, key: string){
    if(key){
        return this.items.update(key,[value] );
    } else {
        return this.items.push( [value]);
    }
  }
  public remove(key: string){
    return this.items.remove(key);
  }

}
*/
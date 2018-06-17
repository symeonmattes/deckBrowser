import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs';


const BASEURL = "http://52.57.88.137";
const ACTIONS = {
  GETCARDDATA:"/api/card_data/{cardName}",
  IMGSRC:"/api/card_image/{cardName}"
};
@Injectable({
  providedIn: 'root'
})
export class Gateway {

  results={
    "name": "",
    "text": ""
  };
  imgsrc:string = "";

  constructor(private http: Http) { }

  private makeURL(action:string){
      return BASEURL+action;
  }

  private getImgSrc(cardName:string){
    return this.makeURL(ACTIONS.IMGSRC).replace("{cardName}",cardName);
  }

  public getCardData(cardName:string){

    let promise = new Promise((resolve,reject)=>{
      this.http.get(this.makeURL(ACTIONS.GETCARDDATA).replace("{cardName}",cardName))
      .toPromise()
      .then(
        res => { //Success
          this.results.name = res.json().data.name;
          this.results.text = res.json().data.text;
          this.imgsrc = this.getImgSrc(cardName);
          resolve();
        },
        msg => { // Error
          reject(msg);
        }
      )
    });
    return promise;
  }
}

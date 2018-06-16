import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs';


const NUM_HTTP_RETRIES = 3;
const BASEURL = "http://52.57.88.137";
const TAG="HermesvGateway";
const ACTIONS = {
  GETCARDDATA:"/api/card_data/{cardName}",
  IMGSRC:"/api/card_image/{cardName}"
};
@Injectable({
  providedIn: 'root'
})
export class Gateway {

  results:Object[]=[];
  imgsrc:String = "";

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
          this.results = res.json().data;
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

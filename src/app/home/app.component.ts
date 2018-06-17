import { Component, OnInit } from '@angular/core';

import { Gateway } from "../services/gateway.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  content = {
    title:"",
    imgsrc:"",
    text:""
  }

  showList:boolean = false;
  loading: boolean = false;
  activeItem:string;

  deck = [
    "Burial from a Different Dimension",
    "Charge of the Light Brigade",
    "Infernoid Antra",
    "Infernoid Attondel",
    "Infernoid Decatron",
    "Infernoid Devyaty",
    "Infernoid Harmadik",
    "Infernoid Onuncu",
    "Infernoid Patrulea",
    "Infernoid Pirmais",
    "Infernoid Seitsemas",
    "Lyla, Lightsworn Sorceress",
    "Monster Gate",
    "One for One",
    "Raiden, Hand of the Lightsworn",
    "Reasoning",
    "Time-Space Trap Hole",
    "Torrential Tribute",
    "Upstart Goblin",
    "Void Seer"
  ];

  constructor(private gateway:Gateway){}

  ngOnInit(){
      this.activeItem = this.deck[0];
      this.bringItem(this.deck[0]);
  }
  public changeMenuState(state:number){
    this.showList = (state==1)?true:false;
  };

  private setDefaults(){
    this.content = {
      title:"",
      imgsrc:"",
      text:""
    }
  }

  private bringItem(item:string){
    this.loading = true;
    this.setDefaults();
    this.activeItem = item;
    this.gateway.getCardData(item).then(()=>{

      this.content = {
        title:this.gateway.results.name,
        imgsrc:this.gateway.imgsrc,
        text:this.gateway.results.text
      }
       this.loading = false;
    });

  }
}

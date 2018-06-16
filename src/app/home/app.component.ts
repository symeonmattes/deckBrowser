import { Component, OnInit } from '@angular/core';

import { Gateway } from "../services/gateway.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showList:boolean = false;
  private loading: boolean = false;
  private activeItem:string;

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
  private changeMenuState(state:number){
    this.showList = (state==1)?true:false;
  };

  private bringItem(item:string){
    this.loading = true;
    this.gateway.results = [];
    this.gateway.imgsrc = "";
    this.activeItem = item;
    this.gateway.getCardData(item).then(()=>{
       this.loading = false;
    });

  }
}

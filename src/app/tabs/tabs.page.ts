import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  btnclick:Boolean= false;
  constructor() {}
  getBtn(){
    debugger
    return this.btnclick;
  }
  btnClicked(){
    this.btnclick = !this.btnclick;
  }
}

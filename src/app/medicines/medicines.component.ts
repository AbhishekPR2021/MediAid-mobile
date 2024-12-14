import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medicines',
  templateUrl: './medicines.component.html',
  styleUrls: ['./medicines.component.scss'],
})
export class MedicinesComponent  implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {}
  navBack(){
    this.location.back()
  }

}
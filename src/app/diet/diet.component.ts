import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.scss'],
})
export class DietComponent  implements OnInit {

  constructor(private router:Router,private location:Location) { }

  ngOnInit() {}
  navBack(){
    this.location.back()
  }

}

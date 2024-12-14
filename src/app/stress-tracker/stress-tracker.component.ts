import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stress-tracker',
  templateUrl: './stress-tracker.component.html',
  styleUrls: ['./stress-tracker.component.scss'],
})
export class StressTrackerComponent  implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {}
  navBack(){
    this.location.back()
  }
}

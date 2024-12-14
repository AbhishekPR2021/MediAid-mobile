import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss'],
})
export class DoctorComponent  implements OnInit {

  constructor(private location:Location) { }

  ngOnInit() {}
  navBack(){
    this.location.back()
  }
}

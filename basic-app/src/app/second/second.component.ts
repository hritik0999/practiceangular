import { Component } from '@angular/core';
import { servicesClass } from '../services';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  providers : [servicesClass]
})
export class SecondComponent  {

  name = "peter"; //string interpolation

  id = 20;

  myMainObject : (string | number)[] = [];

  constructor(private serviceMainObject : servicesClass){

    this.myMainObject = serviceMainObject.getData();


  }

}

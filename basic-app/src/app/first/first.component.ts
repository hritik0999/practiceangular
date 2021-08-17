import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent  {

name = "hritik"; //string interpolation

id = 10;

situation = true;

disabledStatus = "button is disabled";

myData = "";

setDisabledStatus()
{

this.situation = true;
this.disabledStatus = "button is disabled again";

}

constructor ()
{

  setTimeout(() => {
    
  this.situation = false;

  }, 2000);


}

}

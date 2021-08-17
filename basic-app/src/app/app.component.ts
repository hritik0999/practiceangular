import { Component } from '@angular/core';
import { servicesClass } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
storeData :any=[];

constructor(private myService : servicesClass)
{

this.myService.showData().subscribe(data=> 
  {

   this.storeData = data;

  })

}

}


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(

    {

        providedIn : 'root'

    }

)

export class servicesClass
{

mySpecialData = [1,2,"name"];

getData()
{

return this.mySpecialData;

}

constructor(private http : HttpClient)
{}

showData()
{

return this.http.get("https://jsonplaceholder.typicode.com/todos/");

}

}
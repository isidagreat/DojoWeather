import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {

  constructor(private _http:HttpClient ) { }
  location:any;
  humidity:any;
  hightemp:any;
  lowtemp:any;
  status:any;
  ngOnInit() {
    this.getWeather();
  }
  getWeather(){
     //  Our http Response is an observable, store it in the variable tempObservable
     let bulbasaur = this._http.get("http://api.openweathermap.org/data/2.5/weather?zip=60007,us&appid=5d92f962daaf90e102b03d51a4c34225");
     // subscribe to our observable and provide the code we would like to do with our data from the response
     bulbasaur.subscribe(data => {
       this.location = data['name'];
       this.humidity = data['main']['humidity'];
       this.hightemp = data['main']['temp_max'];
       this.lowtemp =data['main']['temp_min'];
       this.status = data['weather'][0]['main'];
     });
    }
}

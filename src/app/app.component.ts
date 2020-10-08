import { Component, OnInit } from '@angular/core';
import { LocationService } from './location.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Obtener mí GEO-Localización';
  latitud: string = "";
  longitud: string = "";

  constructor(private servicio: LocationService) {}

  ngOnInit(){}
  
  getLocation() {
    this.servicio.getPosition().then(pos => {
        this.latitud = pos.lat;
        console.log("Latitud:", this.latitud);
        this.longitud = pos.lng;
        console.log("Longitud:", this.longitud);
    });
  }

}

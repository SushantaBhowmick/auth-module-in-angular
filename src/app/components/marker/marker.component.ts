import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { GoogleMap, GoogleMapsModule, MapAdvancedMarker, MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-marker',
  standalone: true,
  imports: [CommonModule,GoogleMap,GoogleMapsModule],
  templateUrl: './marker.component.html',
  styleUrl: './marker.component.css'
})
export class MarkerComponent {

  @ViewChild(MapInfoWindow) infoWindow!:MapInfoWindow;

  zoom=4
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  markerPositions:google.maps.LatLngLiteral[]=[];

  // marketOpions = google.maps.marker.AdvancedMarkerElement={

  // }

  addMarker(event:google.maps.MapMouseEvent){
    if(event.latLng){     
    this.markerPositions.push(event.latLng?.toJSON())
    }
  }

  openWiindow(marker:MapMarker){
    this.infoWindow.open(marker)
  }

}

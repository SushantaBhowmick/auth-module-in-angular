import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { GoogleMap, MapPolyline, GoogleMapsModule, MapPolygon, MapInfoWindow } from '@angular/google-maps';

@Component({
  selector: 'app-polygon',
  standalone: true,
  imports: [CommonModule,GoogleMapsModule],
  templateUrl: './polygon.component.html',
  styleUrl: './polygon.component.css'
})
export class PolygonComponent {

  @ViewChild(MapInfoWindow) infoWindow!:MapInfoWindow

  drawP:boolean=false;
  drawPL(){
    this.drawP = !this.drawP;
    // Change the cursor style based on the drawing state
    this.mapOptions = {
      ...this.mapOptions,
      draggableCursor: this.drawP ? 'crosshair' : 'default'
    };
  }

  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;
  
  vertices: google.maps.LatLngLiteral[] = [];
  polygonVertices: google.maps.LatLngLiteral[][] = [];

  mapOptions:google.maps.MapOptions={
    mapTypeId:"satellite"
  }


  polylineOptions:google.maps.PolylineOptions={
    strokeColor: 'blue',
    strokeOpacity: 1.0,
    strokeWeight: 2,
    clickable: false,
    editable: false,
    draggable: false,
    geodesic: false,
    visible: true,
  }
  polygonOptions: google.maps.PolygonOptions = {
    fillColor: '#FF0000',
    fillOpacity: 0.5,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2,
    clickable: true,
    editable: false,
    draggable: false,
    geodesic: false,
    visible: true,
  };

  drawPolyline(event:google.maps.MapMouseEvent){
    if(this.drawP){
      if(event.latLng){
        const newVertex = event.latLng.toJSON();
        this.vertices=[...this.vertices,newVertex];
      }
    }
  }
  
  createPolygon(){
      this.polygonVertices.push([...this.vertices])
      this.vertices = []; 
  }

  infoWindowPosition: google.maps.LatLngLiteral | null = null

  onPolygonClick(polygon:any,i:number){
    if(!this.drawP){
      // this.infoWindowPosition = event.latLng?.toJSON() ?? null; // Set the position for the info window
      this.infoWindowPosition = polygon[0] 
      this.infoWindow.open();
      console.log(i)
    }
  }
}

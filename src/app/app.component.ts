import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarkerComponent } from './components/marker/marker.component';
import { PolygonComponent } from "./components/polygon/polygon.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MarkerComponent, PolygonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'n';
}

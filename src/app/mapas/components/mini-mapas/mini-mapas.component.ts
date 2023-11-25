import {
  Component,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mini-mapas',
  templateUrl: './mini-mapas.component.html',
  styles: [
    `
      div {
        width: 100%;
        height: 150px;
        margin: 0px;
      }
    `,
  ],
})
export class MiniMapasComponent implements AfterViewInit {
  @Input() lngLat: [number, number] = [0, 0];
  @ViewChild('mapa') divMapa!: ElementRef;

  ngAfterViewInit(): void {
    const mapa = new mapboxgl.Map({
      container: this.divMapa.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.lngLat, //Angel de la independencia
      zoom: 14,
      interactive: false,
    });

    new mapboxgl.Marker().setLngLat(this.lngLat).addTo(mapa);
  }
}

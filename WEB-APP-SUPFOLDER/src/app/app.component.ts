import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { ViewEncapsulation } from "@angular/core";
import { FormControl } from "@angular/forms";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";




@Component({
  selector: "app-root",
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatProgressBarModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatButtonModule,
    MatDividerModule
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss"
})



export class AppComponent {


  tiles = new Array(<number>256);
  panelColor = new FormControl(<string>"red");



  annul_coloring_func(): void {

    const gridTiles = document.querySelectorAll(<string>"mat-grid-tile");

    gridTiles.forEach(
      (tile: Element) => {
        (tile as HTMLElement).style.backgroundColor = <string>"rgb(173, 216, 230)";
      });
  }



  reload_webie_func(): void {

    window.location.reload();

  }



  download_favico_func(): void {

    const arr_tiles = document.getElementsByClassName(<string>"MatGridTile");
    const bgs_tiles: string[] = [];

    for (let i = <number>0; i < arr_tiles.length; i++) {

      const tile = arr_tiles[i] as HTMLElement;
      const computedStyle = window.getComputedStyle(tile);
      const bgColor = computedStyle.backgroundColor || <string>"rgb(173, 216, 230)";

      bgs_tiles.push(bgColor);
    }
    this.generateFavicon(bgs_tiles);
  }



  generateFavicon(backgroundColors: string[]): void {

    const canvas = document.createElement("canvas" as string) as HTMLCanvasElement;

    canvas.width = <number>16;
    canvas.height = <number>16;

    const context = canvas.getContext("2d" as string) as CanvasRenderingContext2D;

    if (context) {
      for (let i = <number>0; i < backgroundColors.length; i++) {

        const color = backgroundColors[i];
        context.fillStyle = color;
        context.fillRect(i % <number>16, Math.floor(i / <number>16), <number>1, <number>1);
      }

      const faviconDataUri = canvas.toDataURL(<string>"image/x-icon");
      const downloadLink = document.createElement('a' as string) as HTMLAnchorElement;

      downloadLink.href = faviconDataUri;
      downloadLink.download = String("favicon.ico");
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    } else {
      console.error(<string>"glitchy_err_bug: cnvs cntxt is prbbbly null");
    }
  }



}


import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-shape-manager',
  templateUrl: './shape-manager.component.html',
  styleUrls: ['./shape-manager.component.css']
})
export class ShapeManagerComponent implements OnInit, AfterViewInit {

  height: number;
  width: number;

  constructor(private canvas: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.height = this.canvas.nativeElement.height;
    this.width = this.canvas.nativeElement.width;
  }

}
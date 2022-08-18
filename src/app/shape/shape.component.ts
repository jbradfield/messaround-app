import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shape',
  templateUrl: './shape.component.html',
  styleUrls: ['./shape.component.css']
})
export class ShapeComponent implements OnInit {

  x: number;
  y: number;
  height: number;
  width: number;
  rotation: number;

  constructor() { }

  ngOnInit() {
  }

}
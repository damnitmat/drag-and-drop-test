import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dragging-box',
  templateUrl: './dragging-box.component.html',
  styleUrls: ['./dragging-box.component.css'],
})

export class DraggingBoxComponent implements OnInit {
  constructor() {}

  @Input () object_name: string;
  @Input () boundary_name: string;

  ngOnInit(): void {}

  dragEndedProcess() {
    alert("drag has ended")
  }
  
}

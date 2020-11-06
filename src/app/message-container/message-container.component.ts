import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-container',
  templateUrl: './message-container.component.html',
  styleUrls: ['./message-container.component.scss']
})
export class MessageContainerComponent implements OnInit {
items=['mani','sundar','rahuml','sundar'];
receiver='Manoj';
  constructor() { }

  ngOnInit(): void {
    
  }

}

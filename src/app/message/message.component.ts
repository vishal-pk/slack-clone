import { Component, OnInit } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
faCoffee = faCoffee;
  constructor() { }

  ngOnInit(): void {
  }
     message="";
    messageArray =[];
  textdisplay(){
      this.messageArray.push(this.message);
      this.message="";
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Message{
  sender:string;
  receiver:string;
  messages:[];
  date:Date=new Date();
  constructor(sender,receiver,messages){
    this.sender=sender;
    this.receiver=receiver;
    this.messages=messages
  }

}
export class MessagePassingService {

  constructor() { }
  mesages=[]
  getMessages( receiver){
    this.mesages=[
      new Message(receiver,'Haritha Jayasankar',['Hello','Hope you are doing good!']),
      new Message('Haritha Jayasankar',receiver,['Hello '+receiver,'I am doing good']),
      new Message(receiver,'Haritha Jayasankar',['We are glad to have you on our team','looking forward to work with you']),
      new Message('Haritha Jayasankar',receiver,['Thanks for having me in the team']),
      new Message(receiver,'Haritha Jayasankar',['I have mailed the project requirements']),
      new Message('Haritha Jayasankar',receiver,['Yes i have received the mail.. will look into it']),
    ]
    return this.mesages;
  }

}


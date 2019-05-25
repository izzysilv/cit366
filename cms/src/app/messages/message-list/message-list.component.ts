import { Component, OnInit } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {
  messages: Message [] = [
    new Message("1", "Test1", "This is the first message", "Bob Smith"),
    new Message("2", "Test2", "This is the second message", "Chad Smith"),
    new Message("3", "Test3", "This is the third message", "Kathy Smith")

  ];

  constructor() { }

  ngOnInit() {
  }

  onAddMessage(message: Message) {
    this.messages.push(message);
  }

}

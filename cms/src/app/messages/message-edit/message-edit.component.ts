import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subject') subjectRef: ElementRef;
  @ViewChild('msgText') msgTextRef: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Message>();

  currentSender: string = "Israel";

  constructor() { }

  ngOnInit() {
  }

  onSendMessage() {
    const msgSubject = this.subjectRef.nativeElement.value;
    const msgText = this.msgTextRef.nativeElement.value;
    const newMessage = new Message("7", this.currentSender, msgSubject, msgText);
    this.addMessageEvent.emit(newMessage);

  }

  onClear() {
      const msgSubject = "";
      const msgText = "";
  }

}

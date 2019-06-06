import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { Message } from '../message.model';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'cms-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent implements OnInit {
  @ViewChild('subject') subjectRef: ElementRef;
  @ViewChild('msgText') msgTextRef: ElementRef;
  //@Output() addMessageEvent = new EventEmitter<Message>();

  currentSender: string = "Israel";

  constructor(private messagesService: MessagesService) { }

  ngOnInit() {
  }

  onSendMessage() {
    const msgSubject = this.subjectRef.nativeElement.value;
    const msgText = this.msgTextRef.nativeElement.value;
    const newMessage = new Message("7", this.currentSender, msgSubject, msgText);
    this.messagesService.addMessage(newMessage);

  }

  onClear() {
      const msgSubject = null;
      const msgText = null;
  }

}

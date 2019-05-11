import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../contacts.model';

@Component({
  selector: 'cms-contacts-detail',
  templateUrl: './contacts-detail.component.html',
  styleUrls: ['./contacts-detail.component.css']
})
export class ContactsDetailComponent implements OnInit {
  @Input() contact: Contact;

  contacts: Contact[] = [
    new Contact('1', 'Bro. Jackson', 'jacksonk@byui,edu', '208-496-3771', 'http://web.byui.edu/Directory/Employee/jacksonk.jpg', 'null')
  ];

  constructor() { }

  ngOnInit() {
  }
  
}

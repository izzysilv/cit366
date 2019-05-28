import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Contact } from '../contacts.model';

@Component({
  selector: 'cms-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  @Output() selectedContactEvent = new EventEmitter<Contact>();
  contacts: Contact[] = [
    new Contact('1' , 'Bro. Jackson', 'jacksonk@byui,edu', '208-496-3771', 'http://web.byui.edu/Directory/Employee/jacksonk.jpg', null),
    new Contact('2', 'Bro. Barzee', 'barzeer@byui.edu', '208-496-3768', 'http://web.byui.edu/Directory/Employee/barzeer.jpg', null)
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelected(contact: Contact) {
    this.selectedContactEvent.emit(contact);
  }

}

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();
  documents: Document[] = [
    new Document('1', 'Document01', 'This is file number 01', 'http://www.url01.com'),
    new Document('2', 'Document02', 'This is file number 02', 'http://www.url02.com'),
    new Document('3', 'Document03', 'This is file number 03', 'http://www.url03.com'),
    new Document('4', 'Document04', 'This is file number 04', 'http://www.url04.com'),
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }

}

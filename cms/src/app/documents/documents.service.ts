import { Injectable, EventEmitter } from '@angular/core';
import { Document } from './document.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentsService {
  documentSelectedEvent = new EventEmitter<Document>();

  private documents: Document[] = [];

  constructor() {
    this.documents = MOCKDOCUMENTS
  }

  getDocuments(): Document[] {
    return this.documents.slice();
  }

  getDocument(id: string) {
    for(let document of this.documents) {
      if(document.documentId = id) {
        return document;
      }
    }
    return null;
  }
}

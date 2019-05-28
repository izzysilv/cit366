export class Document {
    public documentId: string;
    public name: string;
    public description: string;
    public fileUrl: string;
    
    constructor(documentId: string, name: string, description: string, fileUrl: string) {
        this.documentId = documentId;
        this.name = name;
        this.description = description;
        this.fileUrl = fileUrl;
    }
}

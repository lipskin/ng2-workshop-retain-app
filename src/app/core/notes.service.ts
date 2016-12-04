import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { environment } from '../../environments/environment';

@Injectable()
export class NotesService {
  apiUrl: string = `${environment.apiUrl}/notes`;

  constructor(private http: Http) {}

  getNotes() {
    return this.http.get(this.apiUrl).map((res: Response ) => res.json());
  }

  createNote(note) {
    return this.http.post(this.apiUrl, note).map((res: Response ) => res.json());
  }

  completeNote(noteID) {
    return this.http.delete(`${this.apiUrl}/${noteID}`);
  }
}

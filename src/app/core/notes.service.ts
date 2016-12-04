import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Response } from '@angular/http';


@Injectable()
export class NotesService {
  url: string = `/notes`;

  constructor(private apiService: ApiService) {}

  getNotes() {
    return this.apiService.get(this.url).map((res: Response ) => res.json());
  }

  createNote(note) {
    return this.apiService.post(this.url, note).map((res: Response ) => res.json());
  }

  completeNote(noteID) {
    return this.apiService.delete(`${this.url}/${noteID}`);
  }
}

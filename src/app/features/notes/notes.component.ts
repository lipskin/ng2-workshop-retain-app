import { NotesService } from './../../core/notes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rt-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes = [];

  constructor(private notesService: NotesService) {}

  ngOnInit() {
    this.notesService.getNotes().subscribe(notes => this.notes = notes);
  }

  checkCard(id) {
    const index = this.notes.findIndex(note => note.id === id);
    this.notesService.completeNote(id).subscribe(() => this.notes.splice(index, 1));
  }

  addNote(note) {
    this.notesService.createNote(note).subscribe(newNote => {
      this.notes.push(newNote);
    });
  }

}

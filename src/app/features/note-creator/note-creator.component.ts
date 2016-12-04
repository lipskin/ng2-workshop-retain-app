import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rt-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.css']
})
export class NoteCreatorComponent implements OnInit {
  isFocus: boolean = false;
  newNote = {
    title: '',
    value: ''
  };

  constructor() { }

  ngOnInit() {
  }

}

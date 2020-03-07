import { Component, OnInit } from '@angular/core';
import { NoteService, Note } from 'src/app/services/note.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.page.html',
  styleUrls: ['./note-list.page.scss'],
})
export class NoteListPage implements OnInit {

  private notes: Observable<Note[]>;
  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.notes = this.noteService.getNotes();
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteService, Note } from 'src/app/services/note.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.page.html',
  styleUrls: ['./note-details.page.scss'],
})
export class NoteDetailsPage implements OnInit {

  note: Note = {
    name: '',
    ideas: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private noteService: NoteService,
    private toastCtrl: ToastController, private router: Router) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) {
      this.noteService.getNote(id).subscribe(note => {
        this.note = note;
      });
    }
  }
 
  addNote() {
    this.noteService.addNote(this.note).then(() => {
      this.showToast('Nota agregada');
    }, err => {
      this.showToast('Hubo un problema al agregar tu nota :(');
    });

    this.router.navigateByUrl('/');
  }
 
  deleteNote() {
    this.noteService.deleteNote(this.note.id).then(() => {
      this.showToast('Nota eliminada');
    }, err => {
      this.showToast('Hubo un problema al eliminar tu nota :(');
    });

    this.router.navigateByUrl('/');
  }
 
  updateNote() {
    this.noteService.updateNote(this.note).then(() => {
      this.showToast('Nota actualizada');
    }, err => {
      this.showToast('Hubo un problema al actualizar tu nota :(');
    });

    this.router.navigateByUrl('/');
  }
 
  showToast(msg) {
    this.toastCtrl.create({
      message: msg,
      duration: 2000
    }).then(toast => toast.present());
  }

}

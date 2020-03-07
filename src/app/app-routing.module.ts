import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/note-list/note-list.module').then( m => m.NoteListPageModule)
  },
  {
    path: 'note',
    loadChildren: () => import('./pages/note-details/note-details.module').then( m => m.NoteDetailsPageModule)
  },
  {
    path: 'note/:id',
    loadChildren: () => import('./pages/note-details/note-details.module').then( m => m.NoteDetailsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

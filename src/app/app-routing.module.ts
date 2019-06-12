import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRoomComponent } from './new-room/new-room.component';

const routes: Routes = [
 // {path: '', redirectTo: '/new-room', pathMatch: 'full'},
 {path: 'new-room', component: NewRoomComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

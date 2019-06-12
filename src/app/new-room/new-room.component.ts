import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import { DbService } from '../db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-room',
  templateUrl: './new-room.component.html',
  styleUrls: ['./new-room.component.scss']
})
export class NewRoomComponent implements OnInit {
  newRoom = new FormGroup({
  roomName : new FormControl('', [Validators.required]),
  rowCount : new FormControl('', [Validators.required, Validators.min(1)]),
  avgSeatsInRow : new FormControl('', [Validators.required, Validators.min(1)])
});
  constructor(private db: DbService, private router: Router) { }

  ngOnInit() {
  }
  save() {
    this.db.saveRoomConfig(this.newRoom.value)
      .subscribe(id => {
        console.log('room saved, id:', id);
        this.router.navigate(['/room-config', id]);
      });

  }
}

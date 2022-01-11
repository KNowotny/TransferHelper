import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
const msTimeoutDelay = 4000;

@Component({
  selector: 'app-add-edit-player',
  templateUrl: './add-edit-player.component.html',
  styleUrls: ['./add-edit-player.component.scss']
})
export class AddEditPlayerComponent implements OnInit {

  playerList$!: Observable<any[]>;
  positionsList$!: Observable<any[]>;

  constructor(private service: ApiService) { }

  @Input() player: any;
  id: number = 0;
  name: string = "";
  surname: string = "";
  birthdate: Date = new Date();
  positionId!: number;

  ngOnInit(): void {
    if (this.player) {
      this.id = this.player.id;
      this.name = this.player.name;
      this.surname = this.player.surname;
      this.birthdate = this.player.birthdate;
      this.positionId = this.player.positionId;
      this.playerList$ = this.service.getPlayerList();
      this.positionsList$ = this.service.getPositionsList();
    }
  }

  addPlayer() {
    var player = {
      name: this.name,
      surname: this.surname,
      birthdate: this.birthdate,
      positionId: this.positionId
    }
    this.service.addPlayer(player).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddSuccess = document.getElementById('add-success-alert');
      if (showAddSuccess) {
        showAddSuccess.style.display = "block";
      }

      setTimeout(function () {
        if (showAddSuccess) {
          showAddSuccess.style.display = "none";
        }
      }, msTimeoutDelay);
    })
  }

  updatePlayer() {
    var player = {
      id: this.id,
      name: this.name,
      surname: this.surname,
      birthdate: this.birthdate,
      positionId: this.positionId
    }
    var id: number = this.id;
    this.service.updatePlayer(id, player).subscribe(res => {
      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if (closeModalBtn) {
        closeModalBtn.click();
      }

      var showUpdateSuccess = document.getElementById('update-success-alert');
      if (showUpdateSuccess) {
        showUpdateSuccess.style.display = "block";
      }

      setTimeout(function () {
        if (showUpdateSuccess) {
          showUpdateSuccess.style.display = "none";
        }
      }, msTimeoutDelay);
    })
  }
}
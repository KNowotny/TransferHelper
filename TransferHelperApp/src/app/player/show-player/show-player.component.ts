import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { ShowPositionsComponent } from 'src/app/position/show-positions/show-positions.component';

@Component({
  selector: 'app-show-player',
  templateUrl: './show-player.component.html',
  styleUrls: ['./show-player.component.scss']
})
export class ShowPlayerComponent implements OnInit {

  playerList$!: Observable<any[]>;
  positionsList$!: Observable<any[]>;
  positionsList: any = [];


  //Map
  positionsMap: Map<number, string> = new Map()

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.playerList$ = this.service.getPlayerList();
    this.positionsList$ = this.service.getPositionsList();
    this.refreshPlayersPositionMap();
  }

  modalTitle: string = '';
  activateAddEditPlayerComponent: boolean = false;
  player: any;

  modalAdd() {
    this.player = {
      id: 0,
      name: null,
      surname: null,
      birthdate: null,
      position: null
    }
    this.modalTitle = "Add Player";
    this.activateAddEditPlayerComponent = true;
  }

  modalClose() {
    this.activateAddEditPlayerComponent = false;
    this.playerList$ = this.service.getPlayerList();
    this.positionsList$ = this.service.getPositionsList();
  }

  modalEdit(item: any) {
    this.player = item;
    this.modalTitle = "EditPlayer";
    this.activateAddEditPlayerComponent = true;
  }

  delete(item: any) {
    if (confirm(`Are you sure you want delete player ${item.name} ${item.surname}?`)) {
      this.service.deletePlayer(item.id).subscribe(res => {
        var deleteModalBtn = document.getElementById('add-edit-modal-close');
        if (deleteModalBtn) {
          deleteModalBtn.click();
        }

        var showDeleteSuccess = document.getElementById('delete-success-alert');
        if (showDeleteSuccess) {
          showDeleteSuccess.style.display = "block";
        }

        setTimeout(function () {
          if (showDeleteSuccess) {
            showDeleteSuccess.style.display = "none";
          }
        }, 4000);
      })
    }
  }

  refreshPlayersPositionMap() {
    this.service.getPositionsList().subscribe(data => {
      this.positionsList = data;

      for (let i = 0; i < data.length; i++) {
        this.positionsMap.set(this.positionsList[i].id, this.positionsList[i].positionName);
      }
    })
  }
}
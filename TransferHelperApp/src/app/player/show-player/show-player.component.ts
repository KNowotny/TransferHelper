import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerApiService } from 'src/app/player-api.service';

@Component({
  selector: 'app-show-player',
  templateUrl: './show-player.component.html',
  styleUrls: ['./show-player.component.scss']
})
export class ShowPlayerComponent implements OnInit {

  playerList$!:Observable<any[]>;
  positionsList$!:Observable<any[]>; 
  positionsList:any=[];


  //Map
  positionsMap:Map<number, string> = new Map()

  constructor(private service:PlayerApiService) { }

  ngOnInit(): void {
    this.playerList$ = this.service.getPlayerList();
    this.positionsList$ = this.service.getPositionsList();
    this.refreshPlayersPositionMap();
  }

  modalTitle:string = '';
  activateAddEditPlayerComponent:boolean = false;
  player:any;

  modalAdd(){
    this.player = {
      id:0,
      name:null,
      surname:null,
      birthdate:null,
      position:null
    }
    this.modalTitle = "Add Player";
    this.activateAddEditPlayerComponent = true;
  }

  modalClose(){
    this.activateAddEditPlayerComponent = false;
    this.playerList$ = this.service.getPlayerList();
  }

  refreshPlayersPositionMap() {
    this.service.getPositionsList().subscribe(data => {
      this.positionsList = data;

      for(let i = 0; i < data.length; i++)
      {
        this.positionsMap.set(this.positionsList[i].id, this.positionsList[i].positionName);
      }
    })
  }
}

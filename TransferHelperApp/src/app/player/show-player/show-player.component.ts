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

  positionsMap:Map<number, string> = new Map()


  constructor(private service:PlayerApiService) { }

  ngOnInit(): void {
    this.playerList$ = this.service.getPlayerList();
    this.positionsList$ = this.service.getPositionsList();

  }

}

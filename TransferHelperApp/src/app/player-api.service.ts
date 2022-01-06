import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerApiService {

  readonly playerAPIUrl = "https://localhost:7228/api";

  constructor(private http:HttpClient) { }

  //Player

  getPlayerList():Observable<any[]> {
    return this.http.get<any>(this.playerAPIUrl + '/players');
  }
  
  addPlayer(data:any) {
    return this.http.post(this.playerAPIUrl + '/players', data);
  }

  deletePlayer(id:number|string){
     return this.http.delete(this.playerAPIUrl + `/players/${id}`)
  }

  //Position

  getPositionsList():Observable<any[]> {
    return this.http.get<any>(this.playerAPIUrl + '/playerPositions');
  }
  
  addPosition(data:any) {
    return this.http.post(this.playerAPIUrl + '/playerPositions', data);
  }

  deletePosition(id:number|string){
     return this.http.delete(this.playerAPIUrl + `/playerPositions/${id}`)
  }
}

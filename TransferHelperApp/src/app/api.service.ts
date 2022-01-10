import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  readonly baseApiUrl = "https://localhost:7228/api";

  constructor(private http: HttpClient) { }

  //Player

  getPlayerList(): Observable<any[]> {
    return this.http.get<any>(this.baseApiUrl + '/players');
  }

  addPlayer(data: any) {
    return this.http.post(this.baseApiUrl + '/players', data);
  }

  deletePlayer(id: number | string) {
    return this.http.delete(this.baseApiUrl + `/players/${id}`)
  }

  //Position

  getPositionsList(): Observable<any[]> {
    return this.http.get<any>(this.baseApiUrl + '/playerPositions');
  }

  addPosition(data: any) {
    return this.http.post(this.baseApiUrl + '/playerPositions', data);
  }

  deletePosition(id: number | string) {
    return this.http.delete(this.baseApiUrl + `/playerPositions/${id}`)
  }
}

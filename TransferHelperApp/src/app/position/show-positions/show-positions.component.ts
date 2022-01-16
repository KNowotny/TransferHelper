import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-show-positions',
  templateUrl: './show-positions.component.html',
  styleUrls: ['./show-positions.component.scss']
})
export class ShowPositionsComponent implements OnInit {

  positionsList$!: Observable<any[]>;
  positionsList: any = [];

  positionsMap: Map<number, string> = new Map()

  constructor(private service: ApiService) {
  }

  ngOnInit(): void {
    this.positionsList$ = this.service.getPositionsList();
  }

  public positionRefresh() {
    this.positionsList$ = this.service.getPositionsList();
  }
}

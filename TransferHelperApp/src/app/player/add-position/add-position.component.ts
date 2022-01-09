import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayerApiService } from 'src/app/player-api.service';

@Component({
  selector: 'app-add-position',
  templateUrl: './add-position.component.html',
  styleUrls: ['./add-position.component.scss']
})
export class AddPositionComponent implements OnInit {

  positionsList$!:Observable<any[]>;

  constructor(private service:PlayerApiService) { }

  @Input() position:any;
  id:number = 0;
  positionName:string = "";

  ngOnInit(): void {
    if(this.position){
      this.id = this.position.id;
      this.positionName = this.position.positionName;
    }
    this.positionsList$ = this.service.getPositionsList();
  }

  addPosition(){
    var position = {
      positionName:this.positionName
    }
    this.service.addPosition(position).subscribe(res => {
      var closeModalBtn = document.getElementById('add-position-modal-close');
      if(closeModalBtn) {
        closeModalBtn.click();
      }

      var showAddPositionSuccess = document.getElementById('add-position-success-alert');
      if(showAddPositionSuccess){
        showAddPositionSuccess.style.display = "block";
      }

      setTimeout(function() {
        if(showAddPositionSuccess){
          showAddPositionSuccess.style.display = "none";
        }
      }, 4000);
    })
  }
}

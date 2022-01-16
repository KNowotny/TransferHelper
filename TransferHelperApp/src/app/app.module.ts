import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { ShowPlayerComponent } from './player/show-player/show-player.component';
import { AddEditPlayerComponent } from './player/add-edit-player/add-edit-player.component';
import { AddPositionComponent } from './player/add-position/add-position.component';
import { ApiService } from './api.service';
import { ShowPositionsComponent } from './position/show-positions/show-positions.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    ShowPlayerComponent,
    AddEditPlayerComponent,
    AddPositionComponent,
    ShowPositionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

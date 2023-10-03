import { Component, OnInit } from '@angular/core';
import { ChRouteService } from 'src/service/ch-route.service';
import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { MatDialog } from '@angular/material/dialog';
import { FpzonecontrolComponent } from '../fpzonecontrol/fpzonecontrol.component';
import {MatSnackBar} from '@angular/material/snack-bar';

declare var CrComLib: any;

@Component({
  selector: 'app-view7',
  templateUrl: './view7.component.html',
  styleUrls: ['./view7.component.scss']
})
export class View7Component implements OnInit {
  dragPosition = { x: 0, y: 0 };
  positionarray = [];
  constructor(public rout: ChRouteService, public dialog: MatDialog,private _snackBar: MatSnackBar) { }
  items = [1, 2, 3, 4, 5, 6];

  ngOnInit(): void {
  }



  clicked()

  {
    this.rout.active = 3;
  }
  clicked2(event) {

    this._snackBar.open("Saved", "OK", {
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
    CrComLib.publishEvent('b', "Zones.Save_Area", true);
    CrComLib.publishEvent('b', "Zones.Save_Area", false);
  }
}
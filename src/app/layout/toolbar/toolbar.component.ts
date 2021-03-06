import { Component, OnInit } from '@angular/core';

import { BreakingPointsService } from '@core/breaking-points/breaking-points.service';
import { SideNavService } from '../side-nav.service';
import { AuthService } from '@core/auth/auth.service';

import { Observable } from 'rxjs';
import { IProfile } from '../../interfaces/profiles';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  public user: Observable<IProfile>;
  public isHandset$;

  constructor(
    public sideNavService: SideNavService,
    public authService: AuthService,
    private breackingPoints: BreakingPointsService
  ) {
    this.user = authService.user;
    this.isHandset$ = this.breackingPoints.isHandset;
  }

  ngOnInit() {}
}

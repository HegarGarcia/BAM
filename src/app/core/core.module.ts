import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth/auth.service';
import { BreakingPointsService } from './breaking-points/breaking-points.service';
import { QueryService } from './query/query.service';

@NgModule({
  imports: [CommonModule],
  providers: [AuthService, BreakingPointsService, QueryService]
})
export class CoreModule {}

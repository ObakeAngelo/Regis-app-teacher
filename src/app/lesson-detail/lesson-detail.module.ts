import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LessonDetailPageRoutingModule } from './lesson-detail-routing.module';

import { LessonDetailPage } from './lesson-detail.page';
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LessonDetailPageRoutingModule,
    QrCodeModule,
  ],
  declarations: [LessonDetailPage],
})
export class LessonDetailPageModule {}

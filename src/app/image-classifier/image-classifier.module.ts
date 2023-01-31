import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageClassifierComponent } from './image-classifier/image-classifier.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    ImageClassifierComponent
  ],
  exports: [
    ImageClassifierComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ]
})
export class ImageClassifierModule { }

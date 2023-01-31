import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as model from '@tensorflow-models/mobilenet';
import * as tensorFlow from '@tensorflow/tfjs';

@Component({
  selector: 'app-image-classifier',
  templateUrl: './image-classifier.component.html',
  styleUrls: ['./image-classifier.component.scss']
})
export class ImageClassifierComponent implements OnInit {
  @ViewChild('video') public video: ElementRef;
  public model: model.MobileNet;
  public webcam: any;
  public predictions: any = [];
  public loading = true;

  constructor(private readonly cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    void this.initModel();
  }

  public async snapObject(): Promise<void> {
    const sample = await this.webcam.capture();
    this.predictions = await this.model.classify(sample);
    this.cdr.detectChanges();
    sample.dispose();
  }

  private async initModel(): Promise<void> {
    await tensorFlow.ready();
    this.model = await model.load();
    this.loading = false;
    this.cdr.detectChanges();
    this.webcam = await tensorFlow.data.webcam(this.video.nativeElement);
  }
}

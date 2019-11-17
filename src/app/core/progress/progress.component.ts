import { Component, OnInit, Input, HostBinding, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent {
  public progressValue = 0;
  public bufferValue = 100;
  public isDeterminate = true;

  @Input() public color;

  @Input() set indeterminate(value) {
    if (value || value === '') {
      this.isDeterminate = false;
    }
  }

  @Input() set progress(value) {
    this.progressValue = value;
    if (this.el.nativeElement.MaterialProgress) {
      this.el.nativeElement.MaterialProgress.setProgress(this.progressValue);
    }
  }

  @Input() set buffer(value) {
    this.bufferValue = value;
    if (this.el.nativeElement.MaterialProgress) {
      this.el.nativeElement.MaterialProgress.setBuffer(this.bufferValue);
    }
  }

  @HostBinding('class') public get className() {
    return `mdl-progress mdl-js-progress progress--colored-${this.color}`;
  }

  @HostBinding('class.mdl-progress__indeterminate') public get mdlProgressIndeterminate() {
    return !this.isDeterminate;
  }

  @HostListener('mdl-componentupgraded') public mdlComponentUpgraded() {
    // tslint:disable-next-line: max-line-length
    this.el.nativeElement.MaterialProgress.setProgress(this.progressValue); this.el.nativeElement.MaterialProgress.setBuffer(this.bufferValue);
  }

  constructor(
    public el: ElementRef
  ) { }

}

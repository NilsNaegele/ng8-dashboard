import { AfterViewInit, Component } from '@angular/core';


declare const componentHandler: any;

// @Component({
//   template: '',
// })
export abstract class UpgradableComponent implements AfterViewInit {
  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
}


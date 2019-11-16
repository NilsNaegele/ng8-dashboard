import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-base-page-top',
  templateUrl: './base-page-top.component.html',
  styleUrls: ['./base-page-top.component.scss']
})
export class BasePageTopComponent implements OnInit {
  @HostBinding('class.mdl-layout__header-row') public readonly mdlLayoutHeaderRow = true;
  constructor() { }

  ngOnInit() {
  }

}

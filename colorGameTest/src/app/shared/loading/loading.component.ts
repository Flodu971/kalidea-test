import {Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnChanges {
  @Input() loading!: boolean;
  constructor() { }

  ngOnChanges(): void {
    this.loading ? console.log('loading ', this.loading) : console.log('not loading ', this.loading);
  }

}

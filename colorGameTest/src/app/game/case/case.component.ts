import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-case',
  templateUrl: './case.component.html',
  styleUrls: ['./case.component.scss']
})
export class CaseComponent {
  @Input() public color!: string | null;
  @Output() colorChangedEmitter = new EventEmitter<string>();

  /**
   * add color
   */
  addColor(): void {
    this.color = prompt("insert color");
    if (this.color != null) {
      this.colorChangedEmitter.emit(this.color);
    }
  }
}

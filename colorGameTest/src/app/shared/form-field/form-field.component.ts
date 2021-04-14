import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  @Input() formControlName!: string;
  @Input() id!: string;
  @Input() title!: string;
  @Input() type!: string;
  @Input() icon!: string;
  constructor() { }

  ngOnInit(): void {
  }

}

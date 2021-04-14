import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {
  gameForm!: FormGroup;
  table: string[][] = [];

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initFormControl();
  }

  /**
   * init all control
   */
  initFormControl(): void {
    this.gameForm = this.formBuilder.group({
      rows: [3, Validators.compose([
        Validators.required,
        Validators.min(1)
      ])],
      cols: [6, Validators.compose([
        Validators.required,
        Validators.min(1)
      ])]
    });
    this.createTable();
  }

  /**
   * create table array
   */
  createTable(): void {
    this.table = [];
    const rows: number = this.gameForm.value.rows;
    const cols: number = this.gameForm.value.cols;
    console.log(rows, cols);

    for (let i = 0; i < rows; ++i) {
      this.table[i] = [];
      for (let j = 0; j < cols; ++j) {
        this.table[i][j] = ``;
      }
      console.log(this.table);
    }
  }

  /**
   * row or col change
   */
  drawGrid(): void {
    if (this.gameForm.valid) {
      this.createTable();
    }
  }

}

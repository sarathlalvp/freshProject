import { Component, OnInit } from '@angular/core';

@Component({
  template: `<router-outlet></router-outlet>`
})
export class BasicComponent implements OnInit {

  ngOnInit() {
    console.log("PayrollComponent.........................");
  }
}
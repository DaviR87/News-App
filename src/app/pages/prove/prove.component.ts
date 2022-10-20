import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prove',
  templateUrl: './prove.component.html',
  styleUrls: ['./prove.component.css']
})
export class ProveComponent implements OnInit {
  obj = null;
  objFull = {
    name: 'esempio'
  }
  proveNumero: number = 0.2;
  constructor() { }

  ngOnInit(): void {
  }



}

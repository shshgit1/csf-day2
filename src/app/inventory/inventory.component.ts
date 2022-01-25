import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  products=[{name:"product 1", type: "fruit"}];

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
//import { throws } from 'assert';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  item1="apple";
  item2="orange";
  products: Array<string>=[];
  applecount : number=0;
  fruitsArray=[{name:"apple",count:0},
              {name:"orange",count:0}];

  constructor() {

  }
  addcartApple(){
    this.fruitsArray[0].count=this.fruitsArray[0].count+1;
  }
  addcartOrange(){
    this.fruitsArray[1].count=this.fruitsArray[1].count+1;
  }

  DeleteApple(){
    this.fruitsArray[0].count=this.fruitsArray[0].count-1;
  }

  DeleteOrange(){
    this.fruitsArray[1].count=this.fruitsArray[1].count-1;
  }

  ngOnInit(): void {
  }

}

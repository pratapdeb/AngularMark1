import { Component, OnInit } from '@angular/core';
import { Ingridient } from '../shared/ingridient.modal';
import { ShoppingSrvice } from './shoping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

ingridients:Ingridient[];

  constructor(private shoppingService:ShoppingSrvice) { }

  
  ngOnInit() {

    this.ingridients=this.shoppingService.getIngridients();


    this.shoppingService.ingridientChanged.subscribe((ingridients:Ingridient[])=>{
    this.ingridients=ingridients;

    })
  }

}

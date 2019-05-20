import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Ingridient } from 'src/app/shared/ingridient.modal';
import { ShoppingSrvice } from '../shoping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {


  @ViewChild('nameInput') nameInputRef:ElementRef;
  @ViewChild('amountInput') amountInputRef:ElementRef;


  constructor(private shoppingService:ShoppingSrvice) { }
  addIngridient(){
   
    const ingName=this.nameInputRef.nativeElement.value;
    const ingAmount=this.amountInputRef.nativeElement.value;

    const ing=new Ingridient(ingName,ingAmount);

    this.shoppingService.addIngridients(ing);

    
  }
  ngOnInit() {
  }

}

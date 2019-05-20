import { Ingridient } from '../shared/ingridient.modal';
import { EventEmitter } from '@angular/core';

export class ShoppingSrvice{
ingridientChanged=new EventEmitter<Ingridient[]>();
private ingridients:Ingridient[]=[
  new Ingridient('bacoon',10)  
];

addIngridients(ing:Ingridient){

    this.ingridients.push(ing);
    this.ingridientChanged.emit(this.ingridients.slice());
}

getIngridients(){

    console.log('get Ingri');
    
    return this.ingridients.slice();

}


onAddFromShoppingList(ingridients:Ingridient[]){


    console.log('shopping ');
    this.ingridients.push(...ingridients);
    this.ingridientChanged.emit(this.ingridients.slice());
}

}
import { Component, Output,EventEmitter } from '@angular/core';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css']

}
)


export class HeaderComponent{

    @Output() featureSelected =new EventEmitter<string>();

    isOpen =false;

    dropdownToggle(){

        //console.log('Inside kk');
         
        this.isOpen=!this.isOpen;

    }
    onSelect(feature:string ){
    
            this.featureSelected.emit(feature);
    }


}
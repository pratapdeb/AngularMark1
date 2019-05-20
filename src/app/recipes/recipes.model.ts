import { Ingridient } from '../shared/ingridient.modal';

export class Recipe{
public name:string;
public description:string;
public imgPath :string;
public ingridients:Ingridient[];

        
constructor(name:string,decs:string,imgPath:string,ing:Ingridient[])
{
    this.name=name;
    this.description=decs;
    this.imgPath=imgPath;
    this.ingridients=ing;
}
}
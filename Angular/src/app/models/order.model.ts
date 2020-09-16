import { Product } from './product.model';
import { Quantity } from './quantity.model';

export class Order{
    oid:number;
    date:Date;
    time:Date;
    cname:string;
    address:string;
    phone:number;
    pin:number;
    amount:number;
    items:Quantity;
}
import { Entity } from './entity.model';


export class Category implements Entity {

    constructor(public id: string, public name: string) { }
}
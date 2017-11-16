import { Entity } from './entity.model';


export class Product implements Entity {

    constructor(
        public id: string,
        public title: string,
        public price: number,
        public category: string,
        public imageUrl: string) { }

}
import { Entity } from './entity.model';

export class User implements Entity {

    constructor(public id, public email, public isAdmin, public name) { }

}

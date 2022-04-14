import { Monster } from './monster.js';

export class Skeleton extends Monster {

    constructor(){
        super();
        this.username = "skeleton";
        this.life = 65;
        this.damage = 10;
        this.experience = 75;
    }
    
}
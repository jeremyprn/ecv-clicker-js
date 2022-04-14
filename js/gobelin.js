import { Monster } from './monster.js';

export class Gobelin extends Monster {

    constructor(){
        super();
        this.username = "gobelin";
        this.life = 50;
        this.damage = 5;
        this.experience = 10;
    }
    
}
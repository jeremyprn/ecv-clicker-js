import { Monster } from './monster.js';

export class Zombie extends Monster {

    constructor(){
        super();
        this.username = "zombie";
        this.life = 75;
        this.damage = 5;
        this.experience = 60;
    }
    
}
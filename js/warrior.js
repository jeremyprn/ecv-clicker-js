export class Warrior{

    constructor(){
        this.name = "warrior";
        this.life = 125;
        this.defense = 150;
        this.damage = 15;
        this.melee = 100;

        this.getName = () => {
            return this.name;
        }

        this.setName = (name) => {
            this.name = name;

            return this;
        }
        this.getLife = () => {
            return this.life;
        }

        this.setLife = (life) => {
            this.life = life;

            return this;
        }
        this.getDamage = () => {
            return this.damage;
        }

        this.setDamage = (damage) => {
            this.damage = damage;

            return this;
        }

        this.getMelee = () => {
            return this.melee;
        }

        this.setMelee = (melee) => {
            this.melee = melee;

            return this;
        }
        this.getDefense = () => {
            return this.defense;
        }

        this.setDefense = (defense) => {
            this.defense = defense;

            return this;
        }
        
    }
}
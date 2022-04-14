export class Warrior{

    constructor(){
        this.name = "warrior";
        this.life = 125;
        this.defense = 150;
        this.damage = 15;
        this.mana = 100;
        this.special = 100;

        this.getMana = () => {
            return this.mana;
        }

        this.setMana = (mana) => {
            this.mana = mana;

            return this;
        }

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

        this.getSpecial = () => {
            return this.special;
        }

        this.setSpecial = (special) => {
            this.special = special;

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
export class Magician{

    constructor(){
        this.name = "magician"
        this.life = 100;
        this.defense = 75;
        this.damage = 25;
        this.mana = 100;
        this.special = 175
        

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

        this.getDefense = () => {
            return this.defense;
        }

        this.setDefense = (defense) => {
            this.defense = defense;

            return this;
        }

        this.getMana = () => {
            return this.mana;
        }

        this.setMana = (mana) => {
            this.mana = mana;

            return this;
        }
        
        this.getSpecial = () => {
            return this.special;
        }

        this.setSpecial = (special) => {
            this.special = special;

            return this;
        }
        
    }
}
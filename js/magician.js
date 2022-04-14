export class Magician{

    constructor(){
        this.name = "magician"
        this.life = 100;
        this.defense = 75;
        this.damage = 25;
        this.mana = 100;
        this.spellDamage = 80;
        this.melee = 10;
        this.fireBall = 175
        

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

        this.getMana = () => {
            return this.mana;
        }

        this.setMana = (mana) => {
            this.mana = mana;

            return this;
        }
        this.getSpellDamage = () => {
            return this.spellDamage;
        }

        this.setSpellDamage = (spellDamage) => {
            this.spellDamage = spellDamage;

            return this;
        }
        this.getFireBall = () => {
            return this.fireBall;
        }

        this.setFireBall = (fireBall) => {
            this.fireBall = fireBall;

            return this;
        }
        
    }
}
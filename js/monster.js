export class Monster{

    constructor(username, life, damage, experience){
        this.username = username;
        this.life = life;
        this.damage = damage;
        this.experience = experience;
    }

    getUsername = () => {
        return this.username;
    }
    setUsername = (username) => {
        this.username = username;

        return this;
    }
    getLife = () => {
        return this.life;
    }
    setLife = (life) => {
        this.life = life;

        return this;
    }
    getDamage = () => {
        return this.damage;
    }
    setDamage = (damage) => {
        this.damage = damage;

        return this;
    }
    
    getExperience= () => {
        return this.experience;
    }

    setExperience = (experience) => {
        this.experience = experience;

        return this;
    }
}
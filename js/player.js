export class Player{

    constructor(username, experience, classe){
        this.username = username;
        this.experience = experience;
        this.level = 0;
        this.nextExpLvl = 50;
        this.classe = classe;
    }

    levelUp = () => {
        this.experience = 0;
        this.nextExpLvl = this.nextExpLvl * 1.25;
        this.level++;
    }

    getLevel = () => {
        return this.level;
    }
    setLevel = (level) => {
        this.level = level;

        return this;
    }

    getNextExpLvl = () => {
        return this.nextExpLvl;
    }

    getUsername = () => {
        return this.username;
    }
    setUsername = (username) => {
        this.username = username;

        return this;
    }
    
    getExperience= () => {
        return this.experience;
    }

    setExperience = (experience) => {
        this.experience = experience;

        return this;
    }

    getClasse = () => {
        return this.classe;
    }

    setClasse = (classe) => {
        this.classe = classe;

        return this;
    }
}
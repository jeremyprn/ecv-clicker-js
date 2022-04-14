export class Player{

    constructor(username, experience, classe){
        this.username = username;
        this.experience = experience;
        this.level = 0;
        this.nextExpLvl = 50;
        this.classe = classe;
        this.money = 0;
        this.gobelinKills = 0;
        this.zombieKills = 0;
        this.skeletonKills = 0;
    }

    levelUp = () => {
        this.experience = 0;
        this.nextExpLvl = this.nextExpLvl * 1.25;
        this.level++;
    }
    
    getSkeletonKills= () => {
        return this.skeletonKills;
    }
    setSkeletonKills= (skeletonKills) => {
        this.skeletonKills = skeletonKills;

        return this;
    }
    getZombieKills= () => {
        return this.zombieKills;
    }
    setZombieKills= (zombieKills) => {
        this.zombieKills = zombieKills;

        return this;
    }
    getGobelinKills= () => {
        return this.gobelinKills;
    }
    setGobelinKills= (gobelinKills) => {
        this.gobelinKills = gobelinKills;

        return this;
    }

    getGobelinKills= () => {
        return this.gobelinKills;
    }
    setGobelinKills= (gobelinKills) => {
        this.gobelinKills = gobelinKills;

        return this;
    }
    

    getMoney = () => {
        return this.money;
    }
    setMoney = (money) => {
        this.money = money;

        return this;
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
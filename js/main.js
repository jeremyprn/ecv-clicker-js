import { Player } from './player.js';
import { Warrior } from './warrior.js';
import { Magician } from './magician.js';
import { Gobelin } from './gobelin.js';
import { Skeleton } from './skeleton.js';
import { Zombie } from './zombie.js';

let monsterDiv = document.getElementById('monsterStats');
let playerDiv = document.getElementById('playerStats');
let globalInfosDiv = document.getElementById('globalInfos');
let GameOverDiv = document.getElementById('gameOverStats');
let playerInfos = document.getElementById('playerInfos');
let playerAttackBttn = document.getElementById('playerAttack');
let playerHealBttn = document.getElementById('playerHeal');
let playerSpecialBttn = document.getElementById('playerSpecial');

let baseLifeMonster;
let baseLifePlayer;
let monsterDead = 0;
let isSpecialAttack = false;


const getRandomMonster = () => {
    let monster;
    let randomMonster = Math.floor(Math.random() * 3);
    switch(randomMonster){
        case 0:
           monster = new Gobelin;
           break;
        case 1:
            monster = new Skeleton;
            break;
        case 2:
            monster = new Zombie;
            break;
        default:
            monster = new Gobelin;
   }

   return monster;
}

const renderMonster = (monster) =>{
    switch(monster.getUsername()){
        case "gobelin":
            document.getElementById('ascii-gobelin').classList.add('active');
            document.getElementById('ascii-zombie').classList.remove('active');
            document.getElementById('ascii-skeleton').classList.remove('active');
            break;
        case "zombie":
            document.getElementById('ascii-gobelin').classList.remove('active');
            document.getElementById('ascii-zombie').classList.add('active');
            document.getElementById('ascii-skeleton').classList.remove('active');
            break;
        case "skeleton":
            document.getElementById('ascii-gobelin').classList.remove('active');
            document.getElementById('ascii-zombie').classList.remove('active');
            document.getElementById('ascii-skeleton').classList.add('active');
            break;
    }

    monsterDiv.innerHTML = 
    `
     <div class=lifeContainer>
        <p>Vie du ${monster.getUsername()}: ${monster.getLife()}</p>
        <span class="life" style="width:${ (100 * monster.getLife()) / baseLifeMonster }%;"></span>
     </div>`;
     
   
    return;
}

const renderPlayer = (player) =>{

    playerInfos.innerHTML = 
    ` <p><b>${player.getUsername()}</b> a tué ${monsterDead}</p>
    <p>Vous avez ${player.getMoney()} pièces </p>
    <p>${player.getClasse().getDamage()} Attaque | ${player.getClasse().getDefense()} Defense</p>
    `;

    playerDiv.innerHTML = 
    `
    <div class=lifeContainer>
        <p>Votre vie: ${player.getClasse().getLife()}</p>
        <span class="life" style="width:${ (100 * player.getClasse().getLife()) / baseLifePlayer }%;"></span>
    </div>
    <div class="manaContainer">
        <p>Mana: ${player.getClasse().getMana()}</p>
        <span class="mana" style="width:${ player.getClasse().getMana() }%;"></span>
    </div>
    <div class="stats">
        <p>Niveau: ${player.getLevel()}</p>
        <span class="level" style="width:${ (100 * player.getExperience()) / player.getNextExpLvl() }%;"></span>
    </div>
     `;
}

const gamePlay = (player) => {
    //Set default first monster
    let monster = new Gobelin();
    baseLifeMonster = monster.getLife();
    baseLifePlayer = player.getClasse().getLife();
    
    renderMonster(monster);
    renderPlayer(player);

    playerAttackBttn.addEventListener('click', () => {

        globalInfosDiv.innerHTML= "";

        if(isSpecialAttack){
            if(player.getClasse().getUsername == "warrior"){
                monster.setLife(monster.getLife() - player.getClasse().getDamage());
                player.getClasse().setLife(player.getClasse().getLife() - (monster.getDamage() /2));
            }

            if(player.getClasse().getUsername == "magician"){
                monster.setLife(monster.getLife() - player.getClasse().getSpecial());
                player.getClasse().setLife(player.getClasse().getLife() - monster.getDamage());
            }
            
            isSpecialAttack = false;
        }
        else{
            monster.setLife(monster.getLife() - player.getClasse().getDamage());
            player.getClasse().setLife(player.getClasse().getLife() - monster.getDamage());
            if(player.getClasse().getMana() < 100){
                player.getClasse().setMana( player.getClasse().getMana() + 10);
            }
               
        }
       
        
        //Game over
        if(player.getClasse().getLife() <= 0){
            document.getElementById('gamePlay').classList.toggle('active');
            GameOverDiv.innerHTML = `
            <p>Gobelin tués : ${player.getGobelinKills()}</p>
            <p>Squelette tués : ${player.getSkeletonKills()}</p>
            <p>Zombie tués : ${player.getZombieKills()}</p>
            `
            document.getElementById('gameOver').classList.toggle('active');
        }

        //Critical attack
        if (Math.floor(Math.random() * 10) == 1){
            monster.setLife(0);
            globalInfosDiv.innerHTML="Attaque critique !!!";
        }
        
        if(monster.getLife() <= 0 ){

            globalInfosDiv.innerHTML=`${monster.getUsername()} est mort !`

            //Set stats monster kill
            if(monster.getUsername() == "gobelin")
                player.setGobelinKills( player.getGobelinKills() + 1); 

            if(monster.getUsername() == "skeleton")
                player.setSkeletonKills( player.getSkeletonKills() + 1); 

            if(monster.getUsername() == "zombie")
                player.setZombieKills( player.getZombieKills() + 1); 


            monsterDead++;
            player.setMoney(player.getMoney() + (Math.floor(Math.random() * 50)));
            
            player.setExperience(player.getExperience() + monster.getExperience());

            //Generate new monster 
            monster = getRandomMonster();
            baseLifeMonster = monster.getLife();
            
            renderMonster(monster);
            
        }

        if(player.getExperience() >= player.getNextExpLvl()){
            player.levelUp();
        }

        renderMonster(monster);
        renderPlayer(player);
        
    });

    playerHealBttn.addEventListener('click', () => {
        
        if(player.getMoney() >= 100){
            player.getClasse().setLife(baseLifePlayer);
            player.setMoney(player.getMoney() - 100);
            globalInfosDiv.innerHTML="Vous vous êtes soigné";
        }
        renderPlayer(player);
    });

    playerSpecialBttn.addEventListener('click', () => {
        if(player.getClasse().getMana() >= 75){
            player.getClasse().setMana(player.getClasse().getMana() - 75);
            if(player.getClasse().getName() == "warrior"){
                globalInfosDiv.innerHTML= "Prochaine attaque ennemi réduite de 50%";
            }
            else {
                globalInfosDiv.innerHTML= "Prochaine attaque critique";
            }
            isSpecialAttack = true;
        }
        renderPlayer(player);
    });

}

const startGame = () => {

    //Choose username and a classe (Warrior / Magician) and start game
    document.getElementById('chooseClasseBttn').addEventListener('click', () => {
        if(document.getElementById('chooseUsername').value !== null)
        {
            gamePlay(new Player(
                document.getElementById('chooseUsername').value,
                0,
                document.getElementsByName('chooseClasse')[0].checked ? 
                new Warrior() : new Magician()
            ));

            if(document.getElementsByName('chooseClasse')[1].checked){
                document.getElementById('ascii-magician').classList.toggle('active')
                document.getElementById('ascii-warrior').classList.toggle('active')
            }
            document.getElementById('gameChoice').classList.toggle('active');
            document.getElementById('gamePlay').classList.toggle('active');
        } 
    });
    
}

startGame();
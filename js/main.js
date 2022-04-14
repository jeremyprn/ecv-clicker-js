import { Player } from './player.js';
import { Warrior } from './warrior.js';
import { Magician } from './magician.js';
import { Gobelin } from './gobelin.js';
import { Skeleton } from './skeleton.js';
import { Zombie } from './zombie.js';

let gamePlayDiv = document.getElementById('gamePlay');
let gameChoiceDiv = document.getElementById('gameChoice');
let monsterDiv = document.getElementById('monsterStats');
let playerDiv = document.getElementById('playerStats');
let playerAttackBttn = document.getElementById('playerAttack');
let playerHealBttn = document.getElementById('playerHeal');

let baseLifeMonster;
let baseLifePlayer;


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

    playerDiv.innerHTML = 
    `
     <div class=lifeContainer>
        <p>Votre vie: ${player.getClasse().getLife()}</p>
        <span class="life" style="width:${ (100 * player.getClasse().getLife()) / baseLifePlayer }%;"></span>
    </div>
    <div class="stats">
    
        // ${player.getClasse().getDamage()} Attaque | ${player.getClasse().getDefense()} Defense | ${player.getExperience()} XP | ${player.getLevel()} lvl
    </div>
     `;
    // playerDiv.innerHTML = `<b>${player.getUsername()}</b> | ${player.getClasse().getLife()} ♥
    // | ${player.getClasse().getDamage()} Attaque | ${player.getClasse().getDefense()} Defense | ${player.getExperience()} XP`;
}

const gamePlay = (player) => {
    //Set default first monster
    let monster = new Gobelin();
    baseLifeMonster = monster.getLife();

    let healingCooldown = 5;
    baseLifePlayer = player.getClasse().getLife();
    
    renderMonster(monster);
    renderPlayer(player);

    playerAttackBttn.addEventListener('click', () => {
        monster.setLife(monster.getLife() - player.getClasse().getDamage());
        player.getClasse().setLife(player.getClasse().getLife() - monster.getDamage());

        if(monster.getLife() <= 0 ){
            
            player.setExperience(player.getExperience() + monster.getExperience());
            //Generate new monster 
            monster = getRandomMonster();
            baseLifeMonster = monster.getLife();
            
            renderMonster(monster);
            
        }

        if(player.getExperience() >= player.getNextExpLvl()){
            player.levelUp();
        }

        if(healingCooldown > 0){
            healingCooldown--;
            playerHealBttn.innerHTML = `Se soigner (${healingCooldown})`;
        }
        if(healingCooldown == 0){
            playerHealBttn.innerHTML = `Se soigner`;
        }
           
        
        renderMonster(monster);
        renderPlayer(player);
       
        
    });

    playerHealBttn.addEventListener('click', () => {
        
        if(healingCooldown == 0){
            player.getClasse().setLife(player.getClasse().getLife() + 50);
            healingCooldown = 5;
        }
        playerHealBttn.innerHTML = `Se soigner (${healingCooldown})`;
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
            document.getElementById('gameChoice').classList.toggle('active');
            document.getElementById('gamePlay').classList.toggle('active');
        } 
    });
    
}

startGame();
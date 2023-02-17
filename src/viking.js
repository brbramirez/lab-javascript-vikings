// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health;
        this.strength = strength;
    }
    attack(){
        return this.strength;
    }
    receiveDamage(damage){
        this.health -= damage;
    }
}

// Viking
class Viking extends Soldier{
    constructor(name, health, strength) {
        super (health, strength);
        this.name = name;
    }
    battleCry(){
        return `Odin Owns You All!`
    }
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0) return `${this.name} has received ${damage} points of damage`;
        else return `${this.name} has died in act of combat`;
    }
}

// Saxon
class Saxon extends Soldier{
    receiveDamage(damage){
        this.health -= damage;
        if (this.health > 0) return `A Saxon has received ${damage} points of damage`;
        else return `A Saxon has died in combat`;
    }
}


// War
class War {
    constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
    }
    
    addViking(vikingObject){
        this.vikingArmy.push(vikingObject);
    }
    addSaxon(saxonOnject){
        this.saxonArmy.push(saxonOnject);
    }
    vikingAttack(){
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let result = this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength);
        if (this.saxonArmy[randomSaxon].health <= 0) {
            this.saxonArmy.splice([randomSaxon], 1);
            return result;
        }
    }
    saxonAttack(){
        let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        let randomViking = Math.floor(Math.random() * this.vikingArmy.length);
        let result = this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength);
        if (this.vikingArmy[randomViking].health <= 0) {
            this.vikingArmy.slice([randomViking], 1);
        }
        return result;
    }
    showStatus(){
        if (!this.saxonArmy.length) return "Vikings have won the war of the century!";
        if (!this.vikingArmy.length) return "Saxons have fought for their lives and survived another day...";
        if (this.saxonArmy.length >= 1 && this.vikingArmy.length >= 1) return "Vikings and Saxons are still in the thick of battle.";
    }
}

function character (name, classType, level, health) {
    this.name = name;
    this.classType = classType;
    this.level = level;
    this.health = health;
    this.inventory = [];
    this.stats = {
        attack: 10 * level,
        defence: 5 * level,
        speed: 2 * level
    }
}

character.prototype.levelUp = function() {
    this.level += 1;
    this.stats.attack += 5;
    this.stats.defence += 5;
    this.stats.speed += 2;
    console.log(`${this.name} leveled up! Now at level ${this.level}`);
}

character.prototype.takeDamage = function(damage){
    this.health -= damage;
    if (this.health < 0) {
        this.health = 0;
    }
    console.log(`${this.name} took ${damage} damage! Health: ${this.health}`);
}

character.prototype.getSummary = function() {
    console.log(`Character Summary:
Name: ${this.name}
Class: ${this.classType}
Level: ${this.level}
Health: ${this.health}`);
    console.log('Stats:');
    for (let stat in this.stats) {
        console.log(`  ${stat}: ${this.stats[stat]}`);
    }
}

let aragorn = new character('Aragorn', 'Warrior', 2, 100);
let legolas = new character('Legolas', 'Archer', 3, 80);

aragorn.getSummary();
aragorn.levelUp();
aragorn.getSummary();
aragorn.takeDamage(25);
aragorn.getSummary();
aragorn.levelUp();
aragorn.getSummary();
legolas.getSummary();   
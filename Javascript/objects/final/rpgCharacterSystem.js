// Step 1: Create the Character constructor function
function Character(name, classType, level, health) {
  this.name = name;
  this.classType = classType;
  this.level = level;
  this.health = health;
  this.inventory = [];  // Empty array for items
  this.stats = { attack: 10 * level, defense: 8 * level, speed: 5 * level };
}

// Step 2: Add methods to the Character prototype
Character.prototype.levelUp = function() {
  this.level += 1;
  this.stats.attack += 5;
  this.stats.defense += 5;
  this.stats.speed += 2;
  console.log(`${this.name} leveled up! Now at level ${this.level}`);
};

Character.prototype.takeDamage = function(damage) {
  this.health -= damage;
  if (this.health < 0) this.health = 0;
  console.log(`${this.name} took ${damage} damage! Health: ${this.health}`);
};

Character.prototype.getSummary = function() {
  console.log(`Character Summary:
Name: ${this.name}
Class: ${this.classType}
Level: ${this.level}
Health: ${this.health}`);
  console.log('Stats:');
  for (let stat in this.stats) {
    console.log(`  ${stat}: ${this.stats[stat]}`);
  }
};

// Step 3: Create two character instances
let aragorn = new Character('Aragorn', 'Warrior', 2, 100);
let legolas = new Character('Legolas', 'Archer', 3, 80);

// Step 4: Use the methods and print results
aragorn.getSummary();
aragorn.levelUp();
aragorn.getSummary();
aragorn.takeDamage(25);


const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: { 
            name: "frank",
            type: "flea",
            inventory: ["small hat", "sunglasses"]
        }
    },
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
        }
    }

let inventoryItems = console.log(adventurer.inventory)

console.log(adventurer.roll())

// part 2 

class Character {
    static MAX_HEALTH = 100;
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
    roll (mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
console.log(robin)
console.log(Character.MAX_HEALTH)

// part 3 - class features 
class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    static ROLES = ["Fighter”, “Healer”, “Wizard"]
    // static checkRole() {
    //     if(Character.ROLES === "Fighter” || “Healer” || “Wizard"){

    //     }else {

    //     }
    // }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
    duel (adventurer) {
       const myRoll = this.roll();
       const theirRoll = adventurer.roll();
       if(myRoll > theirRoll){
        this.health -1 
       } else {
        adventurer.health -1 
       }
    }
  }

class Companion extends Character { 
    constructor (name,type, inventory = []){
        super(name);
        this.type = type;
        this.inventory = inventory;
    }
}

let robin2 = new Adventurer("robin", "human", ["sword", "potion", "artifact"]);
let leo = new Companion("leo", "cat", ["boots"]);
let frank = new Companion("frank", "flea", ["small hat", "sunglasses"]);

console.log(robin2, leo, frank)
console.log(Adventurer.ROLES)


//part 4 - see lines 

// part 5

class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }

  const healers = new AdventurerFactory("Healer");
  const healerRobin = healers.generate("Robin");



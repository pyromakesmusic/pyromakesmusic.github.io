/* Critical Classes, Objects, etc. */

var Player = {
  health: 20, // player health
  weap: 'fist', // player weapon
  items: [], // array for holding collected items
  x: 0, // player x position on the map
  y: 9 // player y position on the map
};

/* function for max player weapon damage*/
function playerDam(weap) {
  switch (weap) {
    case 'fist':
      return 5;
      break;
    case 'sword':
      return 10;
      break;
    case 'spear':
      return 15;
      break;
  };
};

/* Enemies */

/* enemy object constructor */
function Enemy(name, dmg, health) {
  this.name = name; // enemy name
  this.dmg = dmg; // enemy max damage
  this.health = health; // enemy health
  this.hitArr = []; // enemy hit messages
  this.missArr = []; // enemy miss messages
  this.dthMsg = "" // enemy death message
};

var dragon = new Enemy('dragon', 10, 30);
var bear = new Enemy('bear', 7, 15);
var hornets = new Enemy('hornet swarm', 4, 10);
var dog = new Enemy('dog', 2, 13);
var hwyman = new Enemy('highwayman', 6, 20);

/* Utility */

/* general purpose random int function */
function rand(seed) {
  return Math.floor(Math.random() * seed);
};


/* Combat Functions */
function isHit() {
  return Boolean(rand(5));
};

function playerDmg(weapon) {
  return (rand(playerDam(weapon)));
};

function enemyDmg(enemy) {
  return rand(enemy.dmg)
};



/* Combat Text */

/* dragon */

dragon.hitArr = function(int, num) {
  switch (int) {
    case 0:
      return "You've been roasted before, but certainly not for " + num + " damage. And certainly not by a dragon.";
      break;
    case 1:
      return "The dragon makes you feel the burn. You take " + num + " damage.";
      break;
    case 2:
      return "You're basically a human shish kebab by the time the dragon finishes skewering you and charring you for " + num + " damage.";
      break;
  };
};
dragon.missArr = function(int) {
  switch (int) {
    case 0:
      return "The dragon tries to chomp on your head, but you think you've had enough head chomping for one day.";
      break;
    case 1:
      return "The dragon incinerates a chunk of wall six inches to the left of you. Boy are you lucky you're not that chunk.";
      break;
    case 2:
      return "The dragon tries to give you a hard time, but mama told you there'd be days like this.";
      break;
  };
};
dragon.dthMsg = "With a scream like a wild animal and a resounding thud, the dragon collapses to the floor.";


/* bear */

bear.hitArr = function(int, num) {
  switch (int) {
    case 0:
      return "The bear hits you so hard you can't bear it. You take " + num + " damage.";
      break;
    case 1:
      return "The bear takes big swooping swings at your most sensitive parts, leaving you with less than even the Bear Necessities. You take " + num + " damage.";
      break;
    case 2:
      return "The bear beats you up real bad. You're embearassed. You take " + num + " damage.";
      break;
  };
};
bear.missArr = function(int) {
  switch (int) {
    case 0:
      return "The bear swipes at your head, but you bearly manage to avoid it.";
      break;
    case 1:
      return "The bear claws down on your soft meaty flesh, but luckily for you it's a bull market.";
      break;
    case 2:
      return "The bear tries to bear hug you, but this isn't the States, so he doesn't have the right to bear arms.";
      break;
  };
};
bear.dthMsg = "Bloody and bedraggled (because of all the blood) the bear ka-thumps into a harmless pile of fur. You know, they're actually kind of cute when they're not all trying to kill you and stuff.";


/* hornets */

hornets.hitArr = function(int, num) {
  switch (int) {
    case 0:
      return "Ow! You just got stung for " + num + " damage. Hornet stings are no joke, man.";
      break;
    case 1:
      return "The hornets make your body swell up in all the most embarrassing places. You take " + num + " damage.";
      break;
    case 2:
      return "The hornets penetrate you extensively. The indignity of it does " + num + " damage.";
      break;
  };
};
hornets.missArr = function(int) {
  switch (int) {
    case 0:
      return "The hornets have you cornered, but suddenly you remember there are three spatial dimensions and you just duck under them.";
      break;
    case 1:
      return "The hornets yell at you angrily, but it all just sounds like buzzing to you.";
      break;
    case 2:
      return "The hornets give it a good try, but nobody likes that basketball team anyway.";
      break;
  };
};
hornets.dthMsg = "The hornets, simultaneously, all fall to the ground. How did you do that? What are you?...let's just get out of here.";


/* dog */

dog.hitArr = function(int, num) {
  switch (int) {
    case 0:
      return "What a headline. Dog bites man for " + num + " damage.";
      break;
    case 1:
      return "Who let the dogs out? Because they have " + num + " damage to answer for, bucko.";
      break;
    case 2:
      return "Hot dog! Haha, yeah, you're severely wounded. You take " + num + " damage.";
      break;
  };
};
dog.missArr = function(int) {
  switch (int) {
    case 0:
      return "The dog tries to bite you, but you assert your dominance by peeing in front of him.";
      break;
    case 1:
      return "The dog claws at you, but you know he really just wants to go outside.";
      break;
    case 2:
      return "The dog barks at you, but deep down you know he's more bark than bite.";
      break;
  };
};
dog.dthMsg = "Man, I really can't believe you just killed a dog. But you did it, so, go you, I guess.";



/* highwayman */

hwyman.hitArr = function(int, num) {
  switch (int) {
    case 0:
      return ("The highwayman shouts 'En garde!' at you and then stabs you for  " + num + " damage, which is actually not what those words mean. You have a sneaking suspicion he's only pretending to be French.");
      break;
    case 1:
      return ("The highwayman shouts 'Look over there!' and then punches you in the face when you look over there. You take " + num + " damage. How dumb can you be?");
      break;
    case 2:
      return ("The highwayman stabs you a little bit. You take " + num + " damage. Sometimes it's hard to deal with the local scofflaws.");
      break;
  };
};


hwyman.missArr = function(int) {
  switch (int) {
    case 0:
      return "The highwayman lunges at you, but you're more of a squats kind of guy.";
      break;
    case 1:
      return "The highwayman slices and dices, so you throw some fresh fruit his way to keep him busy.";
      break;
    case 2:
      return "The highwayman makes as if to stab you, but his phone rings and he has to take the call. You wait patiently. No need to be rude.";
      break;
  };
};

hwyman.dthMsg = "The highwayman falls to his knees dramatically gargling on his own blood. Yeesh. Theater kids.";


/* Combat-Specific Functions */

function combatLoop(opponent) {
  confirm("The " + " has " + opponent.health + " and you have " + Player.health + " health.")
  while (opponent.health > 0) {
    var plyrdmg = (playerDmg(Player.weap) + 1);
    var enemydmg = (enemyDmg(opponent) + 1);
    var enemyhit = isHit();
    var plyrhit = isHit();
    switch (enemyhit) {
      case true:
        Player.health -= enemydmg;
        confirm(opponent.hitArr(rand(3), enemydmg));
        break;
      case false:
        confirm(opponent.missArr(rand(3)));
        break;
      default:
        confirm("Something went wrong. Sorry!");
    };
    if (Player.health < 0) {
      confirm("Oh, crap!");
      playing = false;
      break;
    };
    opponent.health -= plyrdmg;
    confirm("You strike with all your might, and hit for " + plyrdmg + " damage!");
    confirm("The " + opponent.name + " still has " + opponent.health + " health and you still have " + Player.health + " health.");
  };
  confirm(opponent.dthMsg);
};


/* Map and Player Movement */

// F = forest
// X = cave
// C = castle tower
// K = castle kitchen
// I = castle insides
// W = wizard's cabin
// S = swamp
// G = grassy field
// M = mountain
// R = river
// D = road
// B = bridge
// O = origin
/* Each letter represents a different environment. Based on the enemies available to each environment, there is a small chance that any enemy you haven't killed yet will become an encounter in its home environment. Once you kill the enemy for each environment, that environment will no longer trigger enemy encounters. */

var gameMap = [
  ['S', 'S', 'S', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
  ['F', 'S', 'S', 'X', 'S', 'M', 'X', 'M', 'M', 'M'],
  ['F', 'F', 'S', 'S', 'S', 'M', 'M', 'M', 'M', 'R'],
  ['F', 'F', 'F', 'F', 'F', 'G', 'R', 'R', 'R', 'R'],
  ['D', 'D', 'D', 'R', 'R', 'R', 'R', 'G', 'G', 'G'],
  ['F', 'F', 'B', 'D', 'D', 'G', 'G', 'G', 'G', 'G'],
  ['F', 'R', 'R', 'G', 'D', 'G', 'G', 'G', 'G', 'G'],
  ['R', 'F', 'F', 'G', 'D', 'D', 'D', 'D', 'G', 'G'],
  ['F', 'F', 'G', 'G', 'G', 'G', 'G', 'D', 'I', 'I'],
  ['O', 'F', 'F', 'F', 'G', 'W', 'G', 'D', 'K', 'C']
];

function Environment(y, x) {
  switch (gameMap[y][x]) {
    case 'F':
      return ("You are in the forest.");
      break;
    case 'X':
      confirm("You're in a dark cave.");
      if ((dragon.health > 0) && (rand(6) > 0)) {
        confirm("It is the dragon! Time to fight!");
        combatLoop(dragon);
      } else {
        return ("There's nothing here.");
      };
      break;
    case 'C':
      return ("You are high in the castle tower.");
      break;
    case 'K':
      confirm("You are in the castle kitchens.");
      if ((dog.health > 0) && (rand(6) > 0)) {
        confirm("A dog is barking at you. He seems angry that you are here. Combat! Huzzah!");
        combatLoop(dog);
      } else {
        return ("There's nothing here.");
      };
      break;
    case 'I':
      confirm("You're in a castle's inner courtyard.");
      if ((dog.health > 0) && (rand(6) > 0)) {
        confirm("A dog catches you from behind and begins to accost you. Combat! This is seriously starting to wear.");
        combatLoop(dog);
      } else {
        return ("There's nothing here.");
      };
      break;
    case 'W':
      return ("You see a wizard's cabin.");
      break;
    case 'S':
      return ("You're in a mucky swamp.");
      break;
    case 'G':
      confirm("You're standing on a grassy plain.");
      if ((dog.health > 0) && (rand(6) > 0)) {
        confirm("Dog comes barking. Looks like a stray. Combat! ...or whatever.");
        combatLoop(dog);
      } else {
        return ("There's nothing here.");
      };
      break;
    case 'M':
      confirm("You're next to a mountain.");
      if ((bear.health > 0) && (rand(6) > 0)) {
        confirm("A bear. It looks vicious and angry. You're going to have to engage in some good old fashioned fisticuffs.");
        combatLoop(bear);
      } else {
        return ("There's nothing here.");
      };
      break;
    case 'R':
      confirm("You're by a river.");
      if ((hornets.health > 0) && (rand(6) > 0)) {
        confirm("There's a nest of hornets swarming wildly. Looks like they don't like you so close to their home. You'll have to fight them off. Isn't combat fun?");
        combatLoop(hornets);
      } else {
        return ("There's nothing here.");
      };
      break;
    case 'D':
      confirm("You're on a road.");
      if ((hwyman.health > 0) && (rand(6) > 0)) {
        confirm("There's a highwayman attempting to highway you. Ugh, fight time I guess. Or you guess. Whatever. You know what I mean.");
        combatLoop(hwyman);
      } else {
        return ("There's nothing here.");
      };
      break;
    case 'B':
      confirm("You're on a bridge.");
      if ((hwyman.health > 0) && (rand(6) > 0)) {
        confirm("A highwayman is on the bridge and looks to be extorting some kind of fee. Time to fight!");
        combatLoop(hwyman);
      } else {
        return ("There's nothing here.");
      };
      break;
    case 'O':
      return ("You're back where you started.");
      break;
  };
};

/* Movement Controller */

/* The text below and the two functions that follow serve to provide the user with slightly randomized (1 out of 10) strings for cases when they are either at the edge of the map (in the two-dimensional array, these take up the first two indexes, 0 and 1) or have free roam to go in either direction. */
// xBound[0][0] - [0][9] are left(west)-bounding cases.
// xBound[1][0] - [1][9] are right(east)-bounding cases.
// xBound[2][0] - [2][9] are horizontally unbounded cases.
// yBound[0][0] - [0][9] are top(north)-bounding cases.
// yBound[1][0] - [1][9] are bottom(south)-bounding cases.
// yBound[2][0] - [2][9] are vertically unbounded cases.

/* This array contains X position descriptors. */

var xBound = [
  ["You can't go any farther west from here.", "The way westward is blocked.", "This is as far west as you can go.", "Can't go west. Not that you would want to.", "You've journeyed as far westward as you can.", "No more going west for you.", "It's too hard to travel west, so you'll have to find another direction.", "Guess you're not going west anymore.", "You'll have to go east before you can go west again.", "That's about as far west as you're gonna get."],
  ["You can't go any farther east from here.", "The way eastward is blocked.", "This is as far east as you can go.", "Can't go east. Not that you would want to.", "You've journeyed as far eastward as you can.", "No more going east for you.", "It's too hard to travel east, so you'll have to find another direction.", "Guess you're not going east anymore.", "You'll have to go west before you can go east again.", "That's about as far west as you're gonna get."],
  ["Looks like you can travel both west and east from here; the way is clear in both directions.", "You could go east if you want, or west too. ", "The way west is clear. The way east is, too. ", "You find yourself with easy traversal to both east and west.", "West, east, the choice is yours.", "Your path is open to the east and west.", "The way west looks pretty easy, but you won't be hard-pressed traveling east if you feel like it.", "Easy roads to the east and the west! What luck!", "Comfortable travel to the west; looks like the way east is okay too.", "You can make your way east if you want. The way west is open as well."]
];

/* This array contains Y position descriptors. */

var yBound = [
  ["You can't go any farther north from here.", "The way north is blocked.", "This is as far north as you can go.", "Can't go north. Not that you would want to.", "You've journeyed as far north as you can.", "No more going north for you.", "It's too hard to travel north, so you'll have to find another direction.", "Guess you're not going north anymore.", "You'll have to go south before you can go north again.", "That's about as far north as you're gonna get."],
  ["You can't go any farther south from here.", "The way south is blocked.", "This is as far south as you can go.", "Can't go south. Not that you would want to.", "You've journeyed as far south as you can.", "No more going south for you.", "It's too hard to travel south, so you'll have to find another direction.", "Guess you're not going south anymore.", "You'll have to go north before you can go south again.", "That's about as far south as you're gonna get."],
  ["Looks like you can travel both north and south from here; the way is clear in both directions.", "You could go north if you want, or south too. ", "The way north is clear. The way south is, too. ", "You find yourself with easy traversal to both north and south.", "North, south, the choice is yours.", "Your path is open to the north and south.", "The way south looks pretty easy, but you won't be hard-pressed traveling north if you feel like it.", "Easy roads to the north and the south! What luck!", "Comfortable travel to the south; looks like the way north is okay too.", "You can make your way south if you want. The way north is open as well."]
];

/* Gets a string to describe the X position on the map. */

function grabX() {
  switch (Player.x) {
    case 0:
      return (xBound[0][(rand(10))]);
      break;
    case 9:
      return (xBound[1][(rand(10))]);
      break;
    default:
      return (xBound[2][(rand(10))]);
  };
};

/* Gets a string to describe the Y position on the map. */

function grabY() {
  switch (Player.y) {
    case 0:
      return (yBound[0][(rand(10))]);
      break;
    case 9:
      return (yBound[1][(rand(10))]);
      break;
    default:
      return (yBound[2][(rand(10))]);
  };
};

/* MAIN GAME MAIN GAME MAIN GAME MAIN GAME MAIN GAME MAIN GAME MAIN GAME MAIN GAME MAIN GAME MAIN GAME MAIN GAME MAIN GAME*/

var playing = confirm("Do you want to play a game?");

function gamePlay(bool) {
  Player.x = rand(10);
  Player.y = rand(10);
  bool = confirm(grabX() + " " + grabY());
  bool = confirm(Environment(Player.y, Player.x));
};


while ((Player.health > 0) && (playing === true)) {
  gamePlay(playing);
  if (Player.health < 0) {
    confirm("Oops! You died. Better luck next time!");
  };
};

/* MAIN GAME MAIN GAME MAIN GAME MAIN GAME MAIN GAME MAIN GAME MAIN GAME MAIN GAME MAIN GAME MAIN GAME MAIN GAME MAIN GAME*/

---
layout: page
title: P¥RO || ADVENTURE GAME
---

This game is pretty much just RNG. It is only a "game" in the sense that playing the lottery is a game, or the card game
"War" - player agency is limited stricly to choosing to play or not play.

The player moves randomly around a game map that looks like the following:

```
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
/* Each letter represents a different environment. Based on the enemies available to each environment, there is a small 
chance that any enemy you haven't killed yet will become an encounter in its home environment. Once you kill the enemy 
for each environment, that environment will no longer trigger enemy encounters. */
```

Each letter represents a different type of environment - forest, cave, bridge, castle, and so on. Each environment type
has a chance to encounter certain types of enemy. All combat inputs other than health pools are randomly generated.

[View source on GitHub](https://github.com/pyromakesmusic/ADVENTURE-GAME/blob/master/adventuregamescript.js)


<script src="adventuregamescript.js"></script>

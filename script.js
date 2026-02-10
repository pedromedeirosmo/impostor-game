const clashRoyaleCards = [
  // Lendária (Legendary)
  "The Log",
  "Miner",
  "Princess",
  "Ice Wizard",
  "Royal Ghost",
  "Bandit",
  "Fisherman",
  "Electro Wizard",
  "Inferno Dragon",
  "Phoenix",
  "Magic Archer",
  "Lumberjack",
  "Night Witch",
  "Mother Witch",
  "Ram Rider",
  "Graveyard",
  "Goblin Machine",
  "Sparky",
  "Spirit Empress",
  "Mega Knight",
  "Lava Hound",

  // Épica (Epic)
  "Mirror",
  "Barbarian Barrel",
  "Wall Breakers",
  "Goblin Curse",
  "Rage",
  "Goblin Barrel",
  "Guards",
  "Skeleton Army",
  "Vines",
  "Clone",
  "Tornado",
  "Void",
  "Baby Dragon",
  "Dark Prince",
  "Freeze",
  "Poison",
  "Rune Giant",
  "Hunter",
  "Goblin Drill",
  "Witch",
  "Balloon",
  "Prince",
  "Electro Dragon",
  "Bowler",
  "Executioner",
  "Cannon Cart",
  "Giant Skeleton",
  "Lightning",
  "Goblin Giant",
  "X-Bow",
  "P.E.K.K.A",
  "Electric Giant",
  "Golem",

  // Rara (Rare)
  "Heal Spirit",
  "Ice Golem",
  "Suspicious Bush",
  "Tombstone",
  "Mega Minion",
  "Dart Goblin",
  "Earthquake",
  "Elixir Golem",
  "Fireball",
  "Mini P.E.K.K.A",
  "Musketeer",
  "Goblin Cage",
  "Goblin Hut",
  "Valkyrie",
  "Battle Ram",
  "Bomb Tower",
  "Flying Machine",
  "Hog Rider",
  "Battle Healer",
  "Furnace",
  "Electrocutors",
  "Goblin Demolisher",
  "Giant",
  "Inferno Tower",
  "Wizard",
  "Royal Hogs",
  "Rocket",
  "Barbarian Hut",
  "Elixir Collector",
  "Three Musketeers",

  // Comum (Common)
  "Skeletons",
  "Electro Spirit",
  "Fire Spirit",
  "Ice Spirit",
  "Goblins",
  "Spear Goblins",
  "Bomber",
  "Bats",
  "Zap",
  "Snowball",
  "Berserker",
  "Archers",
  "Arrows",
  "Knight",
  "Minions",
  "Cannon",
  "Goblin Gang",
  "Skeleton Barrel",
  "Firecracker",
  "Royal Delivery",
  "Skeleton Dragons",
  "Mortar",
  "Tesla",
  "Barbarians",
  "Minion horde",
  "Rascals",
  "Royal Giant",
  "Elite Barbarians",
  "Royal Recruits"
];

const startbtn = document.querySelector('#startbtn');
const mainContainer = document.querySelector('#mainContainer');
const gameContainer = document.querySelector('#gameContainer');
const addPlayerbtn = document.querySelector('#addPlayerbtn');
const nextbtn = document.querySelector('#nextbtn');

let morePlayers = document.querySelectorAll('.player').length + 1;

/* =================================================
   SINGLE REMOVE BUTTON (always on last player)
================================================= */

const removebtn = document.createElement('button');
removebtn.innerText = '-';
removebtn.classList.add('remove');

// Attaches the remove button to the last player div
function attachRemoveToLastDiv() {
    const players = document.querySelectorAll('.player');
    if (players.length > 3) {
        players[players.length - 1].appendChild(removebtn);
    }
}

// Removes only the last player
removebtn.addEventListener('click', () => {
    const players = document.querySelectorAll('.player');
    if (players.length > 3) {
        players[players.length - 1].remove();
        morePlayers--;
        attachRemoveToLastDiv();
    }
});

/* =================================================
   ADD PLAYER LOGIC
================================================= */

addPlayerbtn.addEventListener('click', () => {
    const players = document.querySelectorAll('.player');
    if (players.length >= 10) return;

    const div = document.createElement('div');
    div.classList.add('player');

    const label = document.createElement('label');
    label.innerText = `Player ${morePlayers}`;
    label.setAttribute('for', `player${morePlayers}`);
    div.appendChild(label);

    const input = document.createElement('input');
    input.type = 'text';
    input.id = `player${morePlayers}`;
    div.appendChild(input);

    startbtn.before(div);

    morePlayers++;
    attachRemoveToLastDiv();
});

/* =================================================
   START GAME / VALIDATION
================================================= */

startbtn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.player input');

    // Validate that all player names are filled
    for (const input of inputs) {
        if (input.value.trim() === '') {
            input.classList.add('error');
            input.focus();
            return;
        } else {
            input.classList.remove('error');
        }
    }

    const randomCard = Math.floor(Math.random() * clashRoyaleCards.length);
    const impostorIndex = Math.floor(Math.random() * inputs.length);

    // Build player data
    const players = [];
    inputs.forEach((input, indexbebe) => {
        players.push({
            id: indexbebe + 1,
            name: input.value,
            card: clashRoyaleCards[randomCard]
        });
    });

    players[impostorIndex].card = 'Impostor';

    // Switch to game screen
    mainContainer.hidden = true;
    gameContainer.hidden = false;

    const name = document.createElement('h2');
    const revealBtn = document.createElement('button');
    revealBtn.innerText = 'Reveal';
    revealBtn.classList.add('reveal')
    const card = document.createElement('p');
    card.hidden = true;
    gameContainer.appendChild(name);
    gameContainer.appendChild(revealBtn)
    gameContainer.appendChild(card);

    revealBtn.addEventListener('click', () => {
        card.hidden = false;
        revealBtn.hidden = true;
    })

    let indexbebe = 0;
    
    // Shows current player's card
    function showPlayer(indexbebe) {
        name.innerText = players[indexbebe].name;
        card.innerText = players[indexbebe].card;
        card.hidden = true;
    }

    showPlayer(indexbebe);
    indexbebe++;

    /* =================================================
       GAME FLOW (Next button)
    ================================================= */

    nextbtn.addEventListener('click', () => {

        if (indexbebe < players.length) {
            showPlayer(indexbebe);
            indexbebe++;
            revealBtn.hidden = false
        } 
        else if (indexbebe === players.length) {
            name.hidden = true
            card.hidden = true
            revealBtn.hidden = true
            nextbtn.innerText = 'Show the impostor';
            indexbebe++;
        }
        else if (indexbebe === players.length + 1) {
            nextbtn.innerText = 'Restart';
            name.hidden = false
            name.innerText = `${players[impostorIndex].name} was the Impostor`;
            indexbebe++;
        }
        else {
            window.location.reload();
        }
        
    });
});

// Initial setup in case players already exist
attachRemoveToLastDiv();
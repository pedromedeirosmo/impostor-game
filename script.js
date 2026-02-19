const clashRoyaleCards = [
    // Champion
    "Archer Queen",
    "Boss Bandit",
    "Goblinstein",
    "Golden Knight",
    "Little Prince",
    "Mighty Miner",
    "Monk",
    "Skeleton King",

    // Legendary
    "Bandit",
    "Electro Wizard",
    "Fisherman",
    "Goblin Machine",
    "Graveyard",
    "Ice Wizard",
    "Inferno Dragon",
    "Lava Hound",
    "Lumberjack",
    "Magic Archer",
    "Mega Knight",
    "Miner",
    "Mother Witch",
    "Night Witch",
    "Phoenix",
    "Princess",
    "Ram Rider",
    "Royal Ghost",
    "Sparky",
    "Spirit Empress",
    "The Log",

    // Epic
    "Baby Dragon",
    "Balloon",
    "Barbarian Barrel",
    "Bowler",
    "Cannon Cart",
    "Clone",
    "Dark Prince",
    "Electro Dragon",
    "Electro Giant",
    "Executioner",
    "Freeze",
    "Giant Skeleton",
    "Goblin Barrel",
    "Goblin Curse",
    "Goblin Drill",
    "Goblin Giant",
    "Golem",
    "Guards",
    "Hunter",
    "Lightning",
    "Mirror",
    "P.E.K.K.A",
    "Poison",
    "Prince",
    "Rage",
    "Rune Giant",
    "Skeleton Army",
    "Tornado",
    "Vines",
    "Void",
    "Wall Breakers",
    "Witch",
    "X-Bow",

    // Rare
    "Barbarian Hut",
    "Battle Healer",
    "Battle Ram",
    "Bomb Tower",
    "Dart Goblin",
    "Earthquake",
    "Elixir Collector",
    "Elixir Golem",
    "Fireball",
    "Flying Machine",
    "Furnace",
    "Giant",
    "Goblin Cage",
    "Goblin Demolisher",
    "Goblin Hut",
    "Heal Spirit",
    "Hog Rider",
    "Ice Golem",
    "Inferno Tower",
    "Mega Minion",
    "Mini P.E.K.K.A",
    "Musketeer",
    "Rocket",
    "Royal Hogs",
    "Suspicious Bush",
    "Three Musketeers",
    "Tombstone",
    "Valkyrie",
    "Wizard",
    "Zappies",

    // Common
    "Archers",
    "Arrows",
    "Barbarians",
    "Bats",
    "Berserker",
    "Bomber",
    "Cannon",
    "Electro Spirit",
    "Elite Barbarians",
    "Fire Spirit",
    "Firecracker",
    "Giant Snowball",
    "Goblin Gang",
    "Goblins",
    "Ice Spirit",
    "Knight",
    "Minion Horde",
    "Minions",
    "Mortar",
    "Rascals",
    "Royal Delivery",
    "Royal Giant",
    "Royal Recruits",
    "Skeleton Barrel",
    "Skeleton Dragons",
    "Skeletons",
    "Spear Goblins",
    "Tesla",
    "Zap"
];

const startbtn = document.querySelector('#startbtn');
const mainContainer = document.querySelector('#mainContainer');
const gameContainer = document.querySelector('#gameContainer');
const addPlayerbtn = document.querySelector('#addPlayerbtn');
const nextbtn = document.querySelector('#nextbtn');
const errorMsg = document.querySelector('.error-message')

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
function checkForDuplicates(inputs) {
    const counts = {};
    
    // Count occurrences (skip empty strings)
    inputs.forEach(input => {
        const name = input.value.trim().toLowerCase();
        if (name !== '') {  // Only count non-empty names
            counts[name] = (counts[name] || 0) + 1;
        }
    });
    
    // Mark duplicates
    let hasDuplicate = false;
    inputs.forEach(input => {
        const name = input.value.trim().toLowerCase();
        if (name !== '' && counts[name] > 1) {  // Only check non-empty
            input.classList.add('error');
            hasDuplicate = true;
        }
    });
    
    return hasDuplicate;
}
function checkForEmpty(inputs) {
    let hasEmpty = false;
    for (const input of inputs) {
        if (input.value.trim() === '') {
            input.classList.add('error');
            hasEmpty = true;
        } else {
            input.classList.remove('error');
        }
    }
    
    return hasEmpty;
}

startbtn.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.player input');
    const errorMsgTxt = document.querySelector('.error-message b');

    // Validate that all player names are filled
    const hasEmpty = checkForEmpty(inputs);
    if (hasEmpty) {
        errorMsgTxt.innerText = 'Fill in the blank fields';
        errorMsg.classList.remove('hidden');
        return;
    }

    // Check for duplicate names
    const hasDuplicate = checkForDuplicates(inputs);
    if (hasDuplicate) {
        errorMsgTxt.innerText = 'Player names must be unique';
        errorMsg.classList.remove('hidden');
        return;
    }
    errorMsg.classList.add('hidden');

    const randomCard = Math.floor(Math.random() * clashRoyaleCards.length);
    const impostorIndex = Math.floor(Math.random() * inputs.length);

    // Build player data
    const players = [];
    inputs.forEach((input, i) => {
        players.push({
            id: i + 1,
            name: input.value,
            card: clashRoyaleCards[randomCard]
        });
    });

    players[impostorIndex].card = 'Impostor';

    // Switch to game screen
    mainContainer.hidden = true;
    gameContainer.hidden = false;

    const name = document.querySelector('#gameContainer h2');
    const revealBtn = document.querySelector('.reveal');
    const card = document.querySelector('#gameContainer p');
    const img = document.querySelector('#gameContainer img');

    revealBtn.onclick = () => {
        card.hidden = false;
        revealBtn.hidden = true;
        if (players[i - 1].card !== 'Impostor') {
            img.hidden = false;
        }
    };

    let i = 0;
    
    // Shows current player's card
    function showPlayer(i) {
        name.innerText = players[i].name;
        card.innerText = players[i].card;
        card.hidden = true;
        img.hidden = true;

        if (players[i].card !== 'Impostor') {
            let fileName = (players[i].card).toLowerCase().replaceAll(' ', '-').replaceAll('.', '');
            img.src = `https://cdn.royaleapi.com/static/img/cards-150/${fileName}.png`;
            card.style.color = '#fff';
        } else {
            img.src = '';
            img.hidden = true;
            card.style.color = 'darkred';
        }
        
    }

    showPlayer(i);
    i++;

    /* =================================================
       GAME FLOW (Next button)
    ================================================= */

    nextbtn.onclick = () => { // If using addEventListener here it will create multiple event listeners to nextbtn every time you click the Start button
        if (i < players.length) {
            showPlayer(i);
            i++;
            revealBtn.hidden = false;
        } 
        else if (i === players.length) {
            name.hidden = true;
            revealBtn.hidden = true;
            card.hidden = true;
            img.hidden = true;
            nextbtn.innerText = 'Show the impostor';
            i++;
        }
        else if (i === players.length + 1) {
            nextbtn.innerText = 'Restart';
            name.hidden = false;
            name.innerText = `${players[impostorIndex].name} was the Impostor`;
            i++;
        }
        else {
            mainContainer.hidden = false;
            gameContainer.hidden = true;
            nextbtn.innerText = 'Next';
            revealBtn.hidden = false;
            i = 0
        }
    };
});

// Close error message button
document.querySelector('.close-btn').addEventListener('click', () => {
    errorMsg.classList.add('hidden');
    const inputs = document.querySelectorAll('.player input');
    inputs.forEach(input => input.classList.remove('error'));
    
    // Check empty
    checkForEmpty(inputs);
    
    // Check duplicates
    checkForDuplicates(inputs);
});

// Initial setup in case players already exist
attachRemoveToLastDiv();
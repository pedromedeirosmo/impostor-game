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
const twoImpostorsCheckbox = document.querySelector('#twoImpostors')

/* =================================================
   LANGUAGES OPTIONS
================================================= */

const englishBtn = document.querySelector('button[data-lang="en"]');
const portugueseBtn = document.querySelector('button[data-lang="pt"]');
const translations = {
  en: {
    // Buttons
    addPlayer: "Add Player",
    start: "Start",
    next: "Next",
    reveal: "Reveal",
    showImpostor: "Show the impostor",
    showImpostors: "Show the impostors",
    restart: "Restart",
    
    // Labels
    twoImpostors: "2 Impostors",
    
    // Error messages
    errorEmpty: "Fill in the blank fields",
    errorDuplicate: "Player names must be unique",
    errorMinPlayers: "2 impostors require at least 7 players",
    
    // Game text
    wasImpostor: "was the impostor",
    wereImpostors: "were the impostors",
    and: 'and',
    
    // Footer
    madeBy: "Made by"
  },
  
  pt: {
    // Botões
    addPlayer: "Adicionar Jogador",
    start: "Iniciar",
    next: "Próximo",
    reveal: "Revelar",
    showImpostor: "Mostrar o impostor",
    showImpostors: "Mostrar os impostores",
    restart: "Reiniciar",
    
    // Labels
    twoImpostors: "2 Impostores",
    
    // Mensagens de erro
    errorEmpty: "Preencha os campos vazios",
    errorDuplicate: "Os nomes dos jogadores devem ser únicos",
    
    // Texto do jogo
    wasImpostor: "era o Impostor",
    wereImpostors: "eram os Impostores",
    and: 'e',
    
    // Rodapé
    madeBy: "Feito por"
  }
};
let currentLanguage = 'en';

let impostorNames = {
    impostor1: '',
    impostor2: ''
}

function updateLanguage(lang) {
    const inputs = document.querySelectorAll('input').length;
    document.documentElement.lang = lang;
    addPlayerbtn.innerText = translations[lang].addPlayer;
    startbtn.innerText = translations[lang].start;

    document.querySelector('label[for="twoImpostors"]').innerHTML = `${translations[lang].twoImpostors} <span class="min-players">(min 6 players)</span>`;
    if (document.querySelector('.error-message b').classList.value === 'empty') {
        document.querySelector('b.empty').innerText = translations[lang].errorEmpty;
    } else if (document.querySelector('.error-message b').classList.value === 'duplicate') {
        document.querySelector('b.duplicate').innerText = translations[lang].errorDuplicate;
    }

    if (nextbtn.classList.value === 'restart') { 
        nextbtn.innerText = translations[lang].restart;
        if (inputs >= 6 && twoImpostorsCheckbox.checked === true) { 
            document.querySelector('#gameContainer h2').innerText = `${impostorNames.impostor1} ${translations[lang].and} ${impostorNames.impostor2} ${translations[lang].wereImpostors}`;
        } else {
            document.querySelector("#gameContainer h2").innerText = `${impostorNames.impostor1} ${translations[lang].wasImpostor}`;
        }
    } else if (nextbtn.classList.value === 'showImpostor') {
        if (inputs >= 6 && twoImpostorsCheckbox.checked === true) {
            nextbtn.innerText = translations[lang].showImpostors;
        } else { 
            nextbtn.innerText = translations[lang].showImpostor;
        }
    } else {
        nextbtn.innerText = translations[lang].next;
    }
    document.querySelector('.reveal').innerText = translations[lang].reveal;
    document.querySelector('footer p').innerHTML = `${translations[lang].madeBy} <span style="font-family: Pixelify Sans, sans-serif;">Mederim</span>`;
}

englishBtn.addEventListener('click', () => {
    englishBtn.classList.add('active');
    portugueseBtn.classList.remove('active');
    currentLanguage = 'en';
    localStorage.setItem('language', 'en');
    updateLanguage(currentLanguage);
})

portugueseBtn.addEventListener('click', () => {
    portugueseBtn.classList.add('active');
    englishBtn.classList.remove('active');
    currentLanguage = 'pt';
    localStorage.setItem('language', 'pt');
    updateLanguage(currentLanguage);
});

// Load on page load
(function() {
    const savedLang = localStorage.getItem('language');
    if (savedLang) {
        currentLanguage = savedLang;
        if (savedLang === 'pt') {
            portugueseBtn.classList.add('active');
            englishBtn.classList.remove('active');
        }
        updateLanguage(currentLanguage);
    }
})();

let morePlayers = document.querySelectorAll('.player').length + 1;
/* =================================================
   SINGLE REMOVE BUTTON (always on last player)
================================================= */

const removebtn = document.createElement('button');
removebtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 547.9 500.5 536.6C514.1 525.3 515.9 505.1 504.6 491.5L361.7 320L504.6 148.5z"/></svg>`
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
        if (players.length == 6) {
            document.querySelector('.impostor-checkbox').style.opacity = '0.5'
            twoImpostorsCheckbox.disabled = true;
            twoImpostorsCheckbox.checked = false;
        }
    }
});

/* =================================================
   ADD PLAYER LOGIC
================================================= */

addPlayerbtn.addEventListener('click', () => {
    const players = document.querySelectorAll('.player');
    if (players.length >= 15) return;

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

    const updatedPlayers = document.querySelectorAll('.player');
    if (updatedPlayers.length >= 6) {
        document.querySelector('.impostor-checkbox').style.opacity = '1';
        twoImpostorsCheckbox.disabled = false;
    } else {
        document.querySelector('.impostor-checkbox').style.opacity = '0.5';
        twoImpostorsCheckbox.disabled = true;
        twoImpostorsCheckbox.checked = false; 
    }
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
        errorMsgTxt.innerText = translations[currentLanguage].errorEmpty;
        errorMsgTxt.classList.remove('duplicate');
        errorMsgTxt.classList.add('empty');
        errorMsg.classList.remove('hidden');
        return;
    }

    // Check for duplicate names
    const hasDuplicate = checkForDuplicates(inputs);
    if (hasDuplicate) {
        errorMsgTxt.innerText = translations[currentLanguage].errorDuplicate;
        errorMsgTxt.classList.remove('empty');
        errorMsgTxt.classList.add('duplicate');
        errorMsg.classList.remove('hidden');
        return;
    }
    errorMsg.classList.add('hidden');

    nextbtn.disabled = true;

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

    if (inputs.length >= 6 && twoImpostorsCheckbox.checked === true) {
        let secondImpostorIndex = Math.floor(Math.random() * inputs.length);
        while (secondImpostorIndex === impostorIndex) {
            secondImpostorIndex = Math.floor(Math.random() * inputs.length);
        }
        players[secondImpostorIndex].card = 'Impostor';
        impostorNames.impostor2 = players[secondImpostorIndex].name;
        
    }
    
    players[impostorIndex].card = 'Impostor';
    impostorNames.impostor1 = players[impostorIndex].name;

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
        nextbtn.disabled = false;
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
            nextbtn.disabled = true;
        } 
        else if (i === players.length) {
            name.hidden = true;
            revealBtn.hidden = true;
            card.hidden = true;
            img.hidden = true;
            nextbtn.classList.add('showImpostor');
            i++;
            if (inputs.length >= 6 && twoImpostorsCheckbox.checked === true) {
                nextbtn.innerText = translations[currentLanguage].showImpostors;
            } else {
                nextbtn.innerText = translations[currentLanguage].showImpostor;
            }
        }
        else if (i === players.length + 1) {
            nextbtn.innerText = translations[currentLanguage].restart;
            name.hidden = false;
            nextbtn.classList.remove('showImpostor');
            nextbtn.classList.add('restart');
            i++;
            if (inputs.length >= 6 && twoImpostorsCheckbox.checked === true) {
                name.innerText = `${impostorNames.impostor1} ${translations[currentLanguage].and} ${impostorNames.impostor2} ${translations[currentLanguage].wereImpostors}`
            } else {
                name.innerText = `${players[impostorIndex].name} ${translations[currentLanguage].wasImpostor}`;
            }
        }
        else {
            nextbtn.classList.remove('restart');
            mainContainer.hidden = false;
            gameContainer.hidden = true;
            nextbtn.innerText = translations[currentLanguage].next;
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
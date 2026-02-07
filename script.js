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

const startbtn = document.querySelector('#startbtn')
const mainContainer = document.querySelector('#mainContainer')
const gameContainer = document.querySelector('#gameContainer')
startbtn.addEventListener('click', () => {
    const amount = document.querySelectorAll('input')
    for (const input of amount) {
        if (input.value.trim() === '') {
            input.classList.add('error')
            input.focus();
            return;
        } else {
            input.classList.remove('error')
        }
    }

    let ramdomCard = Math.floor(Math.random() * clashRoyaleCards.length);
    const impostor = Math.floor(Math.random() * amount.length);
    const player = []

    for (let i = 1; i <= amount.length; i++) {
        player.push({
            id: i,
            name: document.querySelector(`#player${i}`).value,
            card: clashRoyaleCards[ramdomCard]
        })
    }
    player[impostor].card = 'Impostor';
    console.log(player);
    
    mainContainer.hidden = true;
    gameContainer.hidden = false;

    const name = document.createElement('h2');
    name.innerText = `${player[0].name}`
    const card = document.createElement('p')
    card.innerText = `${player[0].card}`
    gameContainer.appendChild(name)
    gameContainer.appendChild(card)
    
    const nextbtn = document.querySelector('#nextbtn')
    let i = 1
    nextbtn.addEventListener('click', () => {
        if (i == amount.length) {
            name.innerText = ''
            card.innerText = ''
            nextbtn.innerText = 'Show the impostor'
            i++
        } else if (i == (amount.length + 1)) {
            nextbtn.innerText = 'Back'
            name.innerText = `${player[impostor].name} was the Impostor`
            i++
        } else if (i == (amount.length + 2)){
            window.location.reload()
        } 
        else {
            name.innerText = `${player[i].name}`
            card.innerText = `${player[i].card}`
            i++
        }
    })

    
    

    
})
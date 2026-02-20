# 🎮 Clash Royale Impostor Game

>A fun social deduction game inspired by Among Us, using Clash Royale cards! One player is secretly the impostor while others receive the same card. Can you find the impostor?

**🎮 <a href="https://impostor-game-umber.vercel.app/" target="_blank" rel="noopener noreferrer">Open link</a>**

![Game Preview](https://img.shields.io/badge/Status-Live-success)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)
![Players](https://img.shields.io/badge/Players-3--10-blue)
![Cards](https://img.shields.io/badge/Cards-121-green)

## 🎯 About

This is a browser-based social deduction game where players try to identify the impostor among them. Each player receives a Clash Royale card - everyone gets the same card except one player who becomes the "Impostor."

**Perfect for:**
- Game nights with friends
- Ice breaker activities
- Family gatherings
- Online hangouts

## 🕹️ How to Play

**🎮 [Play the Game Here!](https://impostor-game-umber.vercel.app)**

1. **Setup Phase:**
   - Enter 3-10 player names
   - Click "Start" to begin the game

2. **Card Reveal:**
   - Pass the device to each player
   - Each player clicks "Reveal" to see their card privately
   - The impostor will see "Impostor" instead of a card

3. **Discussion Phase:**
   - Players discuss and describe their cards (without naming them!)
   - The impostor tries to blend in
   - Players vote on who they think is the impostor

4. **Reveal:**
   - Click "Show the impostor" to reveal who was the impostor
   - Play again with "Restart"!

## ✨ Features

- ✅ **3-10 Players** - Flexible player count
- ✅ **123 Clash Royale Cards** - All rarities included (Champion, Legendary, Epic, Rare, Common)
- ✅ **Card Images** - Visual representation from RoyaleAPI CDN
- ✅ **Input Validation** - Prevents empty names and duplicates
- ✅ **Real-time Error Checking** - Instant feedback on invalid inputs
- ✅ **Responsive Design** - Works on desktop and mobile
- ✅ **Dark Crimson Theme** - Mysterious and engaging UI
- ✅ **No Installation Required** - Runs directly in browser

## 🛠️ Technologies

- **HTML5** - Structure and semantic markup
- **CSS3** - Styling with custom properties and animations
- **Vanilla JavaScript (ES6+)** - Game logic and DOM manipulation

## 📁 Project Structure
```
impostor-game/
├── index.html          # Main HTML file
├── style.css           # Styles and theme
├── script.js           # Game logic
└── README.md           # This file
```

### Code Organization

**script.js** is organized into sections:
1. **Card Array** - All 123 Clash Royale cards
2. **DOM Elements** - Query selectors
3. **Player Management** - Add/remove players
4. **Validation Functions** - Check for empty/duplicate names
5. **Game Logic** - Start game, reveal cards, flow control

## 📸 Screenshots

### Setup Screen
<img width="558" height="451" alt="Setup Screen - Player Input" src="https://github.com/user-attachments/assets/b4951278-9962-488a-8a2b-90caaea8b0ea" />

### Game Screen
<img width="568" height="496" alt="Game Screen - Card Reveal" src="https://github.com/user-attachments/assets/1fc7363a-90fe-42ad-87b7-a6be1adcfd91" />


## 🎨 Color Palette

The game uses a dark crimson shadow theme:
```css
--bg-primary: #0D0909      /* Deep black with red undertone */
--bg-secondary: #1A1314    /* Dark charcoal red */
--primary-action: #8B3A3A  /* Muted dark red */
--danger-action: #C44545   /* Bright red */
--text-primary: #D4C5C7    /* Soft rose-gray */
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

Pedro Medeiros - [@pmdeirosz](https://www.instagram.com/pmdeirosz/) - pedromedeirosmo@gmail.com

Project Link: [https://github.com/pedromedeirosmo/impostor-game](https://github.com/pedromedeirosmo/impostor-game)

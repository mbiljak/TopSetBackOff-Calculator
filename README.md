# TopSetBackOff-Calculator

A professional web calculator for the **TOP SET + BACK-OFF** Bench Press training program. This tool calculates your target weights for heavy and volume days based on your current 5-rep max.

## Overview

The TOP SET + BACK-OFF program is a 2× per week bench press protocol that alternates between:
- **Day A (Heavy)**: Top set @ 5RM + back-off sets @ 90%
- **Day B (Volume)**: 4 sets @ 75–82% of your top set

This calculator automatically determines your target weights and progression requirements.

## Features

- ⚡ **Real-time calculation** - Enter your 5-rep max and instantly see all target weights
- 📱 **Responsive design** - Works on desktop, tablet, and mobile devices
- 🎯 **Accuracy** - Rounds to nearest 5 lb for practical gym use
- 🚀 **Fast & lightweight** - Pure HTML/CSS/JavaScript with no dependencies

## Project Structure

```
TopSetBackOff-Calculator/
├── index.html           # Main entry point
├── css/
│   └── styles.css       # Stylesheet (separated for maintainability)
├── js/
│   └── calculator.js    # JavaScript logic
├── assets/              # Images, icons, etc. (if needed)
├── package.json         # Project metadata
├── README.md            # This file
└── .gitignore           # Git ignore rules
```

## Getting Started

### Quick Start

1. **Open in browser** - Simply open `index.html` in your web browser
2. **Enter your 5-rep max** - Type your current bench press 5RM in pounds
3. **Click Calculate** - View your target weights for both days

### Local Development

To run with a local server (recommended for testing):

```bash
# Python 3.x
python3 -m http.server 8000

# Then visit http://localhost:8000
```

## Usage

1. Enter your current **5-Rep Max (5RM)** in the input field
2. Click **Calculate** (or press Enter)
3. View your target weights for:
   - **Day A (Heavy)**: Top set weight and back-off weight
   - **Day B (Volume)**: Low and high volume targets

The calculator rounds all weights to the nearest 5 lb for practical gym use.

## Program Guidelines

### Day A - Heavy Day
- **Top Set**: 1 set × 5 reps at your 5RM
- **Back-Off Sets**: 3 sets × 6–8 reps @ ~90% of top set
- Rest 3–5 minutes between heavy work

### Day B - Volume Day
- **Volume Sets**: 4 sets × 6–8 reps @ 75–82% of your top set
- Rest 2–3 minutes between sets
- Independent progression from heavy day

### Progression Rules
1. **Top Set Success** → Hit 5 clean reps + strong back-offs → add +5 lb next heavy session
2. **Top Set Miss** → Fail to hit 5 reps → repeat same weight
3. **Stall Reset** → 3 consecutive failures → drop 10 lb and rebuild
4. **Volume Progression** → All 4 sets hit 8 reps → add +5 lb next volume day

## Technical Details

### Technologies
- **HTML5** - Semantic markup
- **CSS3** - Modern responsive design with CSS variables
- **JavaScript (Vanilla)** - Event-driven architecture, no frameworks

### Browser Support
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## File Organization

**css/styles.css**
- Color scheme with CSS variables
- Mobile-first responsive design
- Component-based class naming

**js/calculator.js**
- Clean, documented functions
- Event listener initialization
- Input validation and calculation logic

## License

MIT Licensed

## Contributing

Feel free to suggest improvements or report issues.

---

**Program Details**: 2× per week · Heavy / Volume alternation · 48+ hours between sessions

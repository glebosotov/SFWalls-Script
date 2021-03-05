# SFWalls

![SFWalls](./SFWalls.jpg)



## Create unique wallpapers using Apple's SF Symbols

Created by [@glebosotov](https://github.com/glebosotov) and [@AzazKamaz](https://github.com/AzazKamaz) 

The easiest way to contact us is Telegram 

### Features:

- Create randomized custom wallpapers for your iPhone, iPad and Desktop
- Make your own presets or use **built-in themes**
- Create **automations** to have different wallpaper every time you [open Twitter / Sleep / Leave home]

### Requirements:

- [Scriptable app](https://scriptable.app)

### Links:

- [Custom shortcut with advanced settings](https://routinehub.co/shortcut/8607/)
- [One-click shortcut for automation](https://routinehub.co/shortcut/8608/)
- [Shortcut for generating Desktop wallpapers](https://routinehub.co/shortcut/8609/)



## Guide to all settings/parameters:

### Desktop version:

- In your iCloud/Shortcuts there should be
  - `colorsmac.json` – color themes
  - `mac.json` – presets
- The default behaviour is: for each preset in the `mac.json` there will be created a wallpaper with every color theme from `colorsmac.json`
- The wallpapers will be saved to  `iCloud/Shortcuts/SFWalls`



### Advanced shortcut:

#### 🎨 Presets

Choose from a **predefined set of themes**, icons are differene every time (you cah change those at the beginning of the shortcut, there is a Text block with JSON)

#### 🎲 Random Preset

**Randomly choose** one of the predefined themes

#### ⚙️ Customise presets

Choose a preset and **change some values**, then set the wallpaper. Edits are **not** permanent.

#### ✅ Set wallpaper

**Preview** current preset and **set** wallpaper or continue messing with the settings.

#### 🌈 Colors/sections

**Amount of colors/sections**. All arrays must contain the same amount of elements as there are secions *(not tested otherwise, may lead to a crash)*

#### 🎨 Color theme

Choose from a predifined **set of color themes**. Can be edited, saved as a JSON text at the beginning of the shortcut.

#### 🔢 Columns per sections

Array of **columns per section**. Column as a blank space between the symbols. For example two columns is one pile/column of symbols. 4 is 3 piles...

#### 🖼 Color proportion

Array defining **proportions of colors/sections**. For example [1, 2, 1] means that middle section will be twice as big is the others.

#### 🖼 Symbol proportion

Array defining **proportions of symbol sections**. For example [1, 2, 1] means that middle section of symbols will be twice as big is the others. If it is different from Color Proportion, the symbols will overlap with other section.

#### 🔒 Icon limits

Local **limit on set of symbols** (array with limit for each color/section). 0 means unlimited

#### 📏 Icon Scales

Array of **scales of icons**. Scales per sections. For example [0.5, 1, 0.7].

#### 📐 Section angle

*is not curretnly used*

#### 📐 Symbol rotation

Angle of colors/sections

#### 📐 Symbol color rotation

Angle of symbol columns

#### 🔒 Limited amount of symbols

**Global limit** on set of symbols (for example the whole wallpaper could be created using just 1 random symbol). 0 means unlimited



### Auto version:

This version **randomly chooses** from presets (can be changed, saved as JSON text at the start), then sets the wallpaper to both Home and Lock Screen. No user action required, can be used with **Automations** or by **double-tapping the back** of your iPhone (Settings -> Accessibility -> Touch -> Back Tap -> Double Tap -> SFWalls auto).



### How `colors.json` works:

There are **two types** of color themes:

One has one array for both foreground (symbol coloring) and background (colors/sections). One has two arrays for more custimisation. `Shuffle` boolean makes the order random every time and `Shift` int indeicates what color will be first, when coloring symbols or sections. For example the code below means that the colors will be painted starting from second array element (index 1) and symbols will be painted starting from the first element (index 0)

```json
"bgShift": 1,
"fgShift": 0
```



```json
"original": {
    "bgColors": ["#1d2f6f", "#8390fa", "#fac748", "#f9e9ec", "#f88dad"],
    "bgShuffle": false,
    "fgColors": ["#f88dad", "#fac748", "#1d2f6f", "#8390fa", "#f9e9ec"],
    "fgShuffle": false
  }
```

```json
"funky future (8)": {
    "colors": [
      "#2b0f54",
      "#ab1f65",
      "#ff4f69",
      "#fff7f8",
      "#ff8142",
      "#ffda45",
      "#3368dc",
      "#49e7ec"
    ],
    "shuffle": false,
    "bgShift": 1,
    "fgShift": 0
  }
```





## Troubleshooting:

In the early versions with far worse symbol tinting algorithm Shortcuts app often "killed" Scriptable process because of memory restrictions and script did not return anything. This should not happen with this version, but if it does – **limit the symbols amount**.

Another option is to write to either @AzazKamaz or @glebosotov on Telegram or use GitHub's built-in features.
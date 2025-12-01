##🕹️ Simple Tetris Game in C++ (WinBGIm)
This is a classic implementation of Tetris built in C++ using the WinBGIm graphics library. It features the seven standard Tetromino shapes, rotation, line clearing, scoring, leveling, and a robust input system.

##📝 Game Description
Tetris is a puzzle video game where the player must maneuver falling geometric shapes, called Tetrominos, onto a playing field. The objective is to manipulate these pieces by moving them sideways and rotating them so that they form a horizontal line of ten blocks without any gaps. When such a line is formed, it disappears, and any blocks above it fall to fill the space. As the game progresses, the speed of the falling pieces increases. The game ends when the stack of pieces reaches the top of the playing field.

#Key Features - 
  1. 7 Standard Tetrominos: All classic shapes (I, J, L, O, S, T, Z) are implemented.
  2. Rotations: Pieces can be rotated clockwise.
  3. Line Clearing: Full horizontal lines are cleared, and a score is awarded.
  4. Scoring & Leveling: Score increases with cleared lines, and the game speed increases with the player's level.
  5. Controls: Supports soft drop (fast fall), hard drop (instant lock), and pause.
  6. Simple Graphics: Utilizes the basic drawing capabilities of the WinBGIm library.

##⚙️ Controls
|   |   |   |   |   |
|---|---|---|---|---|
|   |   |   |   |   |
|   |   |   |   |   |
|   |   |   |   |   |
KeyActionLeft ArrowMove piece one column leftRight ArrowMove piece one column rightUp ArrowRotate piece clockwiseDown ArrowSoft drop (fast movement down)SpaceHard drop (instant lock at the bottom)PToggle Pause/ResumeEscQuit the game💡 Thought Process & DesignThe primary goal was to create a functional and playable Tetris clone while adhering to the constraints of the WinBGIm library, which emphasizes simplicity and direct pixel manipulation.1. Game Grid AbstractionThe core of the game is represented by a simple 2D integer array: int grid[ROWS][COLS].A value of 0 in grid[r][c] means the cell is empty.A value > 0 stores the color index of the block that has settled there.2. Tetromino RepresentationEach of the seven Tetromino shapes, along with its four possible rotations, is stored efficiently in a large 4D array: shapes[7][4][4][2]. This stores the relative coordinates (row, column) of the four blocks that make up the shape, relative to an anchor point.3. Movement and Rotation LogicThe game uses a "Try-Move" pattern:Erase the current piece from the screen (drawCurrent(cur, true)).Calculate the coordinates of the new position/rotation (moved).Check if the new position is valid (canPlace(moved)).If valid, update the current piece (cur = moved) and Draw the piece at the new location (drawCurrent(cur)).4. Game Loop and TimingThe game runs on a basic, time-driven loop using the Windows function GetTickCount().A piece automatically drops one row when the time delta exceeds the current speed.The speed value decreases as the level increases, naturally speeding up the gameplay.Input is handled asynchronously using kbhit() to allow for simultaneous movement/rotation and automatic dropping.5. Line ClearingThe clearLines() function iterates through the grid from the bottom up. When a full line is detected, all rows above it are shifted down one row, and the top row is emptied.🛠️ Build and Run InstructionsPrerequisitesTo compile and run this game, you'll need a C++ compiler (like g++ in MinGW) and the WinBGIm library correctly configured in your IDE or build system.Compilation (Typical MinGW setup)Save the code as tetris.cpp.Compile using the following command, linking the required libraries:Bashg++ tetris.cpp -o tetris.exe -lbgi -lgdi32 -lcomdlg32 -luuid -loleaut32 -lole32
Run the executable:Bash./tetris.exe
👥 TeamThis project was built by a collaborative team focusing on:Core Logic: Implementing the canPlace, placePiece, and clearLines functions to manage the game state.Graphics & Rendering: Defining block drawing and managing the WinBGIm window and screen updates.Input Handling: Creating the robust input loop to capture standard keys and arrow keys for game controls.This collaborative approach allowed us to quickly implement the core features and ensure a fun, functional game experience.This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

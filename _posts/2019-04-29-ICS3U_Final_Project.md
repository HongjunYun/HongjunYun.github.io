---
title:  "[ICS3UI]Final Project for ICS3U (Grade11 Computer Science)"
date:   2019-05-29 00:00:01
categories:
- School Class
- School_Grade11
- Project
- Computer Science
tags:
- School
- Course
- Computer Science
- Project
- Final Project
- Final Exam
---
<h1>Final Project Doc</h1>


<hr>

## Shooting Game<br><br>
  <h3> User Part</h3>
  <pre>
  1. Start Program
  2. Display Controls (`w`, `a`, `s`, `d`, `l`, `esc`, etc.)
  3. Move `player unit` around the board and destroy your enemies and try not to get hit
  4. When you loose all the health gauge display your `final score` and `rank`
  5. Display the Greeting Screen and go to 1.
  </pre>

  <h3> Programmer Part</h3>
  <pre>
   1. Start Program
   2. Use `w`,`a`,`s`,`d` to move the `player unit`
   3. Press `l` to shoot the bullet
   4. Use 'esc' to open the option menu
   5. If the `player unit` is hit by enemy's attack
     * Decrease the health gauge
     * If there is no health left
       - End the game
       - Record the score to offline DB
     * Reset the location and status of `player unit`
     * Apply penalty in score
   6. If the enemy is hit by `player unit's` Bullet
     * Illuminate the <i>hit enemy</i>
     * Make Bullet disappear
     * Increase the score
   7. If there are no enemy left
     * Increase the Level
     * Locate new enemies
   8. Display the `Real-time` Ranking
     * Update the ranking when every hit occurred
     </pre>

   <h3> Pseudocode part</h3>

   <pre>
   1. Start Program
     * Set the basic settings
     * Print the starting screen
      -Show how to play the game
     * Show the loading screen
     * Read the offline DB and load the ranking to the structure array
   do {
       a) If keyboard is hit
         * If the key pressed is one of `w`,`a`,`s`,`d`
           - Move the player unit in the area of the boundary
         * If the key pressed is `l`
           - Shoot the bullet from the location of the `player unit`
         * If the key pressed is 'esc'
           - Display the option of the game
       b) If the `player unit` is hit by enemy's attack
         * Decrease the health gauge
         * If there is no health left
           - End the game
           - Record the score to offline DB
         * Reset the location and status of `player unit`
         * Apply penalty in score
       c) If the enemy is hit by `player unit's` Bullet
         * Illuminate the <i>hit enemy</i>
         * Make Bullet disappear
         * Increase the score
         * If there are no enemies left
           - Increase the Level
           - Locate new enemies
       d) If it's specific enemy's tern to shoot
         * Shoot the bullet
         * Set the cool-time timer for specific enemy to shoot bullet again
       e) Decrease the cool-time timer by 1
       f) Display the `Real-time` Ranking
         * Update the ranking when every hit occurred
   } while (health gauge is not empty)
   </pre>

   <h3> Flowchart part</h3>
<hr>
<h3>Due Dates</h3>
 <pre>
  ■ <del>Fix error of player shooting basic bullets: May 31st</del>
  ■ <del>Fix errors of enemy shooting bullets: May 31st</del>
  ■ <del>Make enemy to move: June 10th</del>
  ■ <del>Display Health gauge: June 5th</del>
  ■ Create the option tab: June 8th
  ■ <del>Create the user manual & tutorials: June 14th</del>
  ■ Fix other errors: June 14th
 </pre>
<br>
<h3>Done</h3>
 <pre>
  ■ Fix error of player shooting basic bullets
  ■ Fix errors of enemy shooting bullets
  ■ Display Health gauge
  ■ Create the user manual & tutorials
  ■ Make enemy to move(Partly done)
  ■ Real-time Ranking
  ■ File I/O for the offline DB
  ■ Make enemy bullets to move in angles(Linear function) (partly done)
 </pre>
<br>
<h3>Nice to have</h3>
 <pre>
  ■ <del>Real-time Ranking</del>
  ■ Add player name input Part
  ■ <del>File I/O for the offline DB</del>
  ■ <del>Make enemy bullets to move in angles(Linear function)</del>
 </pre>

<br>
<hr>

  <h3>Testing Chart</h3>
  <table>
    <tr>
      <th><strong>Test Date</strong></th>
      <th><strong>Test Name</strong></th>
      <th><strong>Input</strong></th>
      <th><strong>Expected Output</strong></th>
      <th><strong>Actual Output</strong></th>
      <th><strong>Remark</strong></th>
    </tr>
    <tr>
      <td>June 13</td>
      <td>Moving Player Up</td>
      <td>Keyboard Hit (w)</td>
      <td>Move Player up until the height limitation on the array and screen</td>
      <td>Move Player up until the height limitation on the array and screen</td>
      <td>PASS</td>
    </tr>
    <tr>
      <td>June 13</td>
      <td>Moving Player Left</td>
      <td>Keyboard Hit (a)</td>
      <td>Move Player left on the array and screen</td>
      <td>Move Player left until the end of the map on the array and screen</td>
      <td>PASS</td>
    </tr>
    <tr>
      <td>June 13</td>
      <td>Moving Player Down</td>
      <td>Keyboard Hit (s)</td>
      <td>Move Player down on the array and screen</td>
      <td>Move Player down until the end of the map on the array and screen</td>
      <td>PASS</td>
    </tr>
    <tr>
      <td>June 13</td>
      <td>Moving Player Right</td>
      <td>Keyboard Hit (d)</td>
      <td>Move Player right on the array and screen</td>
      <td>Move Player right until the end of the map on the array and screen</td>
      <td>PASS</td>
    </tr>
    <tr>
      <td>June 14</td>
      <td>Player Shooting type1 Bullet</td>
      <td>Keyboard Hit (L)</td>
      <td>Player Shoots bullet and moves on the array and screen</td>
      <td>Player Shoots bullet and moves on the array and screen</td>
      <td>PASS</td>
    </tr>
    <tr>
      <td>June 15</td>
      <td>Enemy Type5 Shooting Bullet</td>
      <td>Not Required</td>
      <td>Type5 Enemy(%) Shoots bullet down on the array and screen</td>
      <td>Type5 Enemy(%) Shoots bullet down on the array and screen</td>
      <td>PASS</td>
    </tr>
    <tr>
      <td>June 15</td>
      <td>Enemy Type5 Moving</td>
      <td>Not Required</td>
      <td>Type5 Enemy(%) moves down randomly on the array and screen</td>
      <td>Type5 Enemy(%) moves down randomly on the array and screen</td>
      <td>FAIL</td>
    </tr>
    <tr>
      <td>June 16</td>
      <td>Losing Score when Hit</td>
      <td>Not Required</td>
      <td>Player loses 25% of the total score when it gets hit by Type5 Bullet(@) has shot</td>
      <td>Player loses 25% of the total score when it gets hit by Type5 Bullet(@) has shot</td>
      <td>PASS</td>
    </tr>
    <tr>
      <td>June 16</td>
      <td>Gets Score when Enemy Type5(%) is Hit</td>
      <td>Not Required</td>
      <td>Player gets 15 point when Enemy Type5(%) gets hit by Player's Bullet(|)</td>
      <td>Player gets 15 point when Enemy Type5(%) gets hit by Player's Bullet(|)</td>
      <td>PASS</td>
    </tr>
    <tr>
      <td>June 16</td>
      <td>Gets Score when Enemy Type7(&) is Hit</td>
      <td>Not Required</td>
      <td>Player gets 25 point when Enemy Type7(&) gets hit by Player's Bullet(|)</td>
      <td>Player gets 25 point when Enemy Type7(&) gets hit by Player's Bullet(|)</td>
      <td>PASS</td>
    </tr>
    <tr>
      <td>June 24</td>
      <td>Enemy type7 determine the path of the Bullet</td>
      <td>Not Required</td>
      <td>Enemy Type7(&) Calculates the linear function of the bullet to hit the player</td>
      <td>Enemy Type7(&) Calculates the linear function of the bullet to hit the player</td>
      <td>PASS</td>
    </tr>
    <tr>
      <td>June 24</td>
      <td>File IO for DB</td>
      <td>Not Required</td>
      <td>Open the correct DB file and loads the ranking data</td>
      <td>Open the correct DB file and loads the ranking data</td>
      <td>PASS</td>
    </tr>

  </table>

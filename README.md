#Arcade Game

The arcade game is another implenetation of the classic arcade game: **Frogger**. The object of the game is to move your character across the map and reach the other side, without getting hit.

##Installation
Clone the GitHub repository by using:

```shell
https://github.com/KevinTou/frontend-nanodegree-arcade-game.git
```
Run the index.html file on your favorite browser and enjoy!

##How to play
After the game loads, use the arrows keys on your keyboard to move your character to the other side.

##Known Issues
When playing the game, the delay sometimes might allow the player to still score if they are close to the edge of the end even after getting hit by an enemy. This might be solved by varying the time on the `setTimer()` function.

##Obstacles/Solutions
The game was very fun and challenging to do. I had several issues with trying to implement this. One of the main issues was that I had never used the HTML5 canvas element. It took a while to figure out how to spawn the enemies and even the character itself! After creating the empty array `allEnemies = []` and seeing the actual canvas being drawn, it was a lot easier to try and work with. The movement for the player and enemies didn't seem too difficult fortunately. I did mess around with the increments/decrements to see what would fit better with the character model and how proportionate it was on the canvas. After figuring that out, I had to work on the collisions. It took me a while to do because I had to sit down and think about the logic behind it. Eventually I worked out a way to have a y-axis collision but the x-axis collisions were still a problem. I slowly incremented the character model onto a non-moving enemy and slowly worked my way from there. I ended up getting a value and it somewhat worked for both the left and right sides. If the enemy came from the left (which it normally travels), then it worked fine. But I had a big issue with collision from the right side (running into an enemy). In the end, I used a delay to make it work a little bit more smoothly.
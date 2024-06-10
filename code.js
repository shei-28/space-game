/** 
 * Lab Goal: This lab was designed to teach you
 * how to find collisions with many objects
 * 
 * Lab Description: Detect Collision
 */

// Initialize variables
var score = 0;
var ay = 40, ay2=40, ay3=40;   // Initial asteroid Y position
var ax = 0, ax2=100, ax3=200;    // Initial asteroid X position
var ry = 350;  // Initial rocket Y position
var rx = 80;   // Initial rocket X position
var time = 0;  // Time variable
var sec = 0;   // Seconds
var min = 0;   // Minutes
var speed = 5; // Rocket's speed
var speeda = 8; // Asteroid's speed



// Task 1: Implement collision detection between rocket and asteroids (Requirements)
// When the rocket and an asteroid overlap, increase the score by 10 and move the asteroid to a random location

// Task 2: Create a game over condition (Requirements)
// When the score reaches a certain threshold or when the rocket is hit multiple times, display a game over message and stop the game


// Task 3: Add two more meteors to the scene (HW)
// Initial Y position for asteroid 2
// Initial X position for asteroid 2
// Initial Y position for asteroid 3
// Initial X position for asteroid 3

// Event handler for the "playButton" click
onEvent("playButton", "click", function() {
    hideElement("playButton");

    // Create two images: asteroid and rocket
    image("asteroid", "assets/meteor2.png");
    image("asteroid2", "assets/meteor.png");
    image("asteroid3", "assets/rock.png");
    image("rocket", "assets/rocket.gif");
    setPosition("asteroid", ax, ay, 50, 50);
    setPosition("asteroid2", ax2, ay2, 50, 50);
    setPosition("asteroid3", ax3, ay3, 50, 50);
    setPosition("rocket", rx, ry, 50, 100);
    //Task 3

    // Set up a timed loop
    timedLoop(100, function() {
        ay = ay + speeda;
        ay2 = ay2 + speeda;
        ay3 = ay3 + speeda;
        setPosition("asteroid", ax, ay, 50, 50);
        setPosition("asteroid2", ax2, ay2, 50, 50);
         setPosition("asteroid3", ax3, ay3, 50, 50);
        // Task 3: Move the additional meteors
           
    var xOverlap=Math.max(0, Math.min(rx+30, ax+50)-Math.max(rx+15,ax)+1)>0 ;
    var yOverlap= Math.max(0, Math.min(ry+100, ay+50)-Math.max(ry,ay)+1)>0;
    
    var xOverlap2=Math.max(0, Math.min(rx+30, ax2+50)-Math.max(rx+15,ax2)+1)>0 ;
    var yOverlap2= Math.max(0, Math.min(ry+100, ay2+50)-Math.max(ry,ay2)+1)>0;
    
    var xOverlap3=Math.max(0, Math.min(rx+30, ax3+50)-Math.max(rx+15,ax3)+1)>0 ;
    var yOverlap3= Math.max(0, Math.min(ry+100, ay3+50)-Math.max(ry,ay3)+1)>0;
    
    if (xOverlap && yOverlap){
      score=score+5;
      ay = 40;
      ax = randomNumber(0, 320);
    }
    
    if (xOverlap2 && yOverlap2){
      score=score+5;
      ay2 = 40;
      ax2 = randomNumber(0, 320);
    }
    
    if (xOverlap3 && yOverlap3){
      score=score+5;
      ay3 = 40;
      ax3 = randomNumber(0, 320);
    }
    

        setText("score", "SCORE: " + score);

        // Wrap around the asteroid from the bottom to the top
        if (ay >= 450) {
            ay = 40;
            ax = randomNumber(0, 320);
            score = score - 2;
            speeda++;
        }
        if (ay2 >= 450) {
            ay2 = 40;
            ax2 = randomNumber(0, 320);
            score = score - 2;
            speeda++;
        }
        if (ay3 >= 450) {
            ay3 = 40;
            ax3 = randomNumber(0, 320);
            score = score - 2;
            speeda++;
        }


        // Task 1 (Requirements): Implement collision detection here

        // Update time and display it
        time = time + 1;
        sec = Math.floor(time / 10) % 60;
        min = Math.floor(time / 600) % 60;
        setText("time", "TIME: " + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec);

        // Display the score
        setText("score", "SCORE: " + score);

        // Task 2 (Requirements): Check for the game over condition and handle it
    });
});

// Event handler for arrow key presses to move the rocket
onEvent("screen1", "keydown", function(event) {
    if (event.key === "=") {
        speed = speed + 5; // Increase rocket speed
    }
    if (event.key === "-") {
        speed = speed - 5; // Decrease rocket speed
    }
    if (event.key === "Left") {
        rx = rx - speed; // Move the rocket left
    }
    if (event.key === "Right") {
        rx = rx + speed; // Move the rocket right
    }
    if (event.key === "Down") {
        ry = ry + speed; // Move the rocket down
    }
    if (event.key === "Up") {
        ry = ry - speed; // Move the rocket up
    }
    setPosition("rocket", rx, ry, 50, 100);

    // Task 1 (Requirements): Check for collisions between the rocket and asteroid1
    //if there is overlap the value will be more than 0 if not value will be negative.
    
    var xOverlap=Math.max(0, Math.min(rx+30, ax+50)-Math.max(rx+15,ax)+1)>0 ;
    var yOverlap= Math.max(0, Math.min(ry+100, ay+50)-Math.max(ry,ay)+1)>0;
    
    var xOverlap2=Math.max(0, Math.min(rx+30, ax2+50)-Math.max(rx+15,ax2)+1)>0 ;
    var yOverlap2= Math.max(0, Math.min(ry+100, ay2+50)-Math.max(ry,ay2)+1)>0;
    
    var xOverlap3=Math.max(0, Math.min(rx+30, ax3+50)-Math.max(rx+15,ax3)+1)>0 ;
    var yOverlap3= Math.max(0, Math.min(ry+100, ay3+50)-Math.max(ry,ay3)+1)>0;
    
    if (xOverlap && yOverlap){
      score=score+5;
      ay = 40;
      ax = randomNumber(0, 320);
    }
    
    if (xOverlap2 && yOverlap2){
      score=score+5;
      ay2 = 40;
      ax2 = randomNumber(0, 320);
    }
    
    if (xOverlap3 && yOverlap3){
      score=score+5;
      ay3 = 40;
      ax3 = randomNumber(0, 320);
    }
    
    
    
});

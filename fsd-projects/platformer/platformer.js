$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200,650,100,20,"black");
    createPlatform(400,600,30,20,"black");
    createPlatform(600,550,30,20,"black");
    createPlatform(300,420,150,20,"black");
    createPlatform(700,330,200,20,"black");
    createPlatform(1100,400,200,20,"black");

    // TODO 3 - Create Collectables
    createCollectable("diamond", 1200,350);
    createCollectable("diamond", 1150,350);
    createCollectable("diamond", 1250,350);


    
    // TODO 4 - Create Cannons
    createCannon("right", 600, 2000)
    createCannon("right", 700, 2000)
    createCannon("top", 500, 1500)
    createCannon("top", 850, 1000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});

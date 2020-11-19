import * as PIXI from './node_modules/pixi.js/dist/pixi'

// The application will create a renderer using WebGL, if possible,
// with a fallback to a canvas render. It will also setup the ticker
// and the root stage PIXI.Container
const app = new PIXI.Application();

// The application will create a canvas element for you that you
// can then insert into the DOM
document.body.appendChild(app.view);

// load the texture we need
app.loader.add('food', 'food.png').load((loader, resources) => {
    // This creates a texture from a 'bunny.png' image
    const bunny = new PIXI.Sprite(resources.bunny.texture);

    // Setup the position of the bunny
    bunny.x = app.renderer.width / 2;
    bunny.y = app.renderer.height / 2;

    // Rotate around the center
    bunny.anchor.x = 0.5;
    bunny.anchor.y = 0.5;

    // Add the bunny to the scene we are building
    app.stage.addChild(bunny);

    // Listen for frame updates
    app.ticker.add(() => {
         // each frame we spin the bunny around a bit
        bunny.rotation += 0.01;
    });
});

// .load((loader, resources) => {
    //     for (let index = 0; index < quantidade_comida; index++) {
    //     // This creates a texture from a 'bunny.png' image
    //     const apple = new PIXI.Sprite(resources.apple.texture);
            
    //     const position_x = getRandomArbitrary(1, 24);
    //     const position_y = getRandomArbitrary(1, 17);
            
    //     // Setup the position of the bunny
    //     apple.x = position_x * 32
    //     apple.y = position_y * 32

    //     console.log(app.renderer.width, app.renderer.height)

    //     //Change the sprite's size
    //     apple.width = 32;
    //     apple.height = 32;

    //     // Place anchor in the center
    //     // apple.anchor.x = 0.5;
    //     // apple.anchor.y = 0.5;

    //     // Add the bunny to the scene we are building
    //     app.stage.addChild(apple);
    //     }
    // });
    
    //Adicionar criaturas
    // app.loader.add('creature', 'images/creature.png').load((loader, resources) => {
    //     for (let index = 0; index < quantidade_comida; index++) {
    //     // This creates a texture from a 'bunny.png' image
    //     const creature = new PIXI.Sprite(resources.creature.texture);
            
    //     const position_x = getRandomArbitrary(1, 24);
    //     const position_y = getRandomArbitrary(1, 17);
            
    //     // Setup the position of the bunny
    //     creature.x = position_x * 32
    //     creature.y = position_y * 32

    //     console.log(app.renderer.width, app.renderer.height)

    //     //Change the sprite's size
    //     creature.width = 32;
    //     creature.height = 32;
    //     // Place anchor in the center
    //     // apple.anchor.x = 0.5;
    //     // apple.anchor.y = 0.5;

    //     // Add the bunny to the scene we are building
    //     app.stage.addChild(creature);
    //     }
    // });
        
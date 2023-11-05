import * as PIXI from 'pixi.js';

let app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x170B0A,
});
document.body.appendChild(app.view);

const stage = new PIXI.Container();
app.stage.addChild(stage);

let background = new PIXI.Graphics();
background.beginFill(0x21070B);
background.drawRect(0, 0, app.screen.width, app.screen.height);
background.endFill();
stage.addChild(background);

let blob = new PIXI.Graphics();
blob.beginFill(0x120406);
for (let i = 0; i < 100; i++) {
  let size = Math.random() * 50 + 50;
  blob.drawRect(Math.random() * app.screen.width, Math.random() * app.screen.height, size, size);
}
blob.endFill();
background.addChild(blob);


let player = new PIXI.Graphics();
player.beginFill(0xD5FB52);
player.drawRoundedRect(0, 0, 50, 50, 10);
player.endFill();
player.pivot.set(player.width/2, player.height/2); // Set the pivot point to the center of the player
stage.addChild(player);
//set player position to the center of the screen
player.x = app.screen.width/2;
player.y = app.screen.height/2;


let keys = {};

window.addEventListener('keydown', (e) => { keys[e.key] = true; });
window.addEventListener('keyup', (e) => { keys[e.key] = false; });

app.ticker.add(delta => gameLoop(delta));

function gameLoop(delta) {
    if (keys['w']) player.y -= 5;
    if (keys['s']) player.y += 5;
    if (keys['a']) player.x -= 5;
    if (keys['d']) player.x += 5;
   if (keys['Escape']) window.electronAPI.closeApp();
}

  window.addEventListener('resize', () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
});
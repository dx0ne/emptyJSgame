let app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x1099bb,
});
document.body.appendChild(app.view);

const stage = new PIXI.Container();
app.stage.addChild(stage);

let player = new PIXI.Graphics();
player.beginFill(0xff00FF);
player.drawRect(0, 0, 100, 100);
player.endFill();
player.pivot.set(player.width/2, player.height/2); // Set the pivot point to the center of the player
stage.addChild(player);

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
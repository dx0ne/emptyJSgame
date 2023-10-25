let app = new PIXI.Application({ width: 800, height: 600 });
document.body.appendChild(app.view);

let rectangle = new PIXI.Graphics();
rectangle.beginFill(0xff00FF);
rectangle.drawRect(0, 0, 100, 100);
rectangle.endFill();

app.stage.addChild(rectangle);

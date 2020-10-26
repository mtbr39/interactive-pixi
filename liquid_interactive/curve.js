// pixi.jsのアプリケーションを作成
const app = new PIXI.Application();

// bodyにpixi.jsのview(ステージ)を追加する
document.body.appendChild(app.view);

// //***クリックリスナー生成
// const clicklistener = new GraphicsObject(0, 0, app.view.width, app.view.height, 0x444444);
// app.stage.addChild(clicklistener);
// clicklistener.interactive = true;
// //clicklistener.hitArea = rect;

// const destination = new GraphicsObject(500, 100, 10, 10);
// app.stage.addChild(destination);

// clicklistener.on('click', function (event) {
//     console.log('click');
//     const position = event.data.getLocalPosition(event.currentTarget);
//     destination.x = position.x;
//     destination.y = position.y;
//     console.log(position);
// });

// let playerInfo = { x: -1, y: -1 };
// playerID = setSyncPlayer(playerInfo);
// console.log(playerID);

// //***player生成
// const player = new MoveObject(50, 50, 100, 100);
// player.destination = destination;
// app.stage.addChild(player);

// app.ticker.add(delta => mainUpdate());
// var mainUpdate = function () {
//     changeSyncPosition(playerID, player.x, player.y);
// }

// window.addEventListener('beforeunload', (event) => {
//     deleteSyncPlayer(playerID);
// });

const realPath = new PIXI.Graphics();

realPath.lineStyle(2, 0xFFFFFF, 1);
realPath.beginFill(0x2277EE, 1);
realPath.moveTo(0, 0);
realPath.lineTo(100, 200);
realPath.lineTo(200, 200);
realPath.lineTo(240, 100);


realPath.position.x = 50;
realPath.position.y = 50;

// app.stage.addChild(realPath);

const bezier = new PIXI.Graphics();

bezier.lineStyle(0, 0xAA0000, 1)
    .beginFill(0x2277EE, 1)
    .moveTo(0, 0)
    .bezierCurveTo(100, 200, 100, 200, 240, 100)
    .bezierCurveTo(200, 200, 300, 200, 400, 150);



bezier.position.x = 50;
bezier.position.y = 50;

app.stage.addChild(bezier);

const bezier1 = new PIXI.Graphics();

bezier1.lineStyle(0, 0xAA0000, 1);
bezier1.beginFill(0x2277EE, 1);
bezier1.bezierCurveTo(100, -200, 100, -200, 240, 100);

bezier1.position.x = 50;
bezier1.position.y = 50;

app.stage.addChild(bezier1);
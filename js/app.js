var stage = new createjs.Stage('myCanvas');
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener('tick',stage);

var gameView= new createjs.Container();
gameView.x=25;
gameView.y=25;
stage.addChild(gameView);

var circleArr=[{},{},{},{},{},{},{},{},{}];
var currentCat

function clickCircle(e){
//	console.log(e)
//	console.log(currentCat)
	
	if(e.target.getCircleType()!=3){
		e.target.setCircelType(2);
	}
	
	if(currentCat.indexX==0 || currentCat.indexX==8 ||currentCat.indexY==0 || currentCat.indexY==8){
		alert('游戏结束')
	}
	var leftCircle=circleArr[currentCat.indexX-1][currentCat.indexY];
	if(leftCircle.getCircleType()==1){
		leftCircle.setCircelType(3);
		currentCat.setCircelType(1);
		currentCat=leftCircle;
	}
}
function addCircle(){
	for (var indexY = 0; indexY < 9; indexY++) {
		for (var indexX = 0; indexX < 9; indexX++) {
			var c=new Circle();
			gameView.addChild(c);
			circleArr[indexX][indexY]=c;
			c.indexX = indexX;
			c.indexY = indexY;
			c.x=indexY%2?indexX*55+20:indexX*55;
			c.y=indexY*55;
			if(indexX==4&&indexY==4){
				c.setCircelType(3);
				currentCat=c;
			}
			c.addEventListener('click',clickCircle)
		}
	}	
}

addCircle();

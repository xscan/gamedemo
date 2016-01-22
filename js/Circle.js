function Circle(){
	createjs.Shape.call(this)
	
	this.setCircelType=function(type){
		this._circleType=type;
		switch(type){
			case 1:
				this.setColor('#cccccc')
				break;
			case 2:
				this.setColor('#ff6600');
				break;
			case 3:
				this.setColor("#0000ff")
				break;
		}
	}
	this.setColor=function(colorString){
		this.graphics.beginFill(colorString)
		this.graphics.drawCircle(0,0,25);
		this.graphics.endFill();
	}
	this.getCircleType=function(){
		return this._circleType;
	}
	this.setCircelType(1);
}
Circle.prototype=new createjs.Shape();

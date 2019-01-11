class App extends egret.DisplayObjectContainer {
	public constructor() {
		super();
		//this.addChild()时触发
		this.addEventListener(egret.Event.ADDED_TO_STAGE, this.addStage, this);
	}

	public static xia: egret.DisplayObject = new egret.DisplayObject();
	private addStage() {
		AppController.instance().start(this);
	
	}
}
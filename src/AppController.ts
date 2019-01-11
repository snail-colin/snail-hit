class AppController extends egret.Sprite{


	private beginLayer:BeginLayer;

	/**当前场景 */
	private currentStage:egret.DisplayObjectContainer;

	public constructor() {
		super();
		this.beginLayer = new BeginLayer();
	
	}

	private static _instance: AppController;

	public static instance(): AppController {
		if(!this._instance) {
			this._instance = new AppController();
		}
		return this._instance;
	}

	public start(stage:egret.DisplayObjectContainer):void{
		this.currentStage = stage;
		this.currentStage.addChild(this.beginLayer);
		this.beginLayer.startAnimation();
	}
}
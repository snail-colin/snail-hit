class Player extends egret.Sprite {

	public static default_color: number = 0xFFFFFF;

	public radius: number;

	public constructor() {
		super();
	}

	public draw(x: number, y: number, radius: number, color?: number) {
		this.graphics.beginFill(color ? color : Player.default_color);
		this.graphics.drawCircle(0, 0, radius);
		this.graphics.endFill();
		this.radius = radius;
		this.x = x;
		this.y = y;
	}



	/**
	 * 绑定移动事件
	 */
	public bindMove() {
		//设定2个偏移量
		var offsetX: number;
		var offsetY: number;
		//手指按到屏幕，触发 startMove 方法
		this.touchEnabled = true;
		this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, startMove, this);
		//手指离开屏幕，触发 stopMove 方法
		this.addEventListener(egret.TouchEvent.TOUCH_END, stopMove, this);

		function startMove(e: egret.TouchEvent): void {
			//计算手指和圆形的距离
			offsetX = e.stageX - this.x;
			offsetY = e.stageY - this.y;
			//手指在屏幕上移动，会触发 onMove 方法
			this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);

		}
		function stopMove(e: egret.TouchEvent) {
			//手指离开屏幕，移除手指移动的监听
			this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
		}

		// let track: CollideEvent = new CollideEvent(CollideEvent.TRACK);
		function onMove(e: egret.TouchEvent): void {
			//通过计算手指在屏幕上的位置，计算当前对象的坐标，达到跟随手指移动的效果
			this.x = e.stageX - offsetX;
			this.y = e.stageY - offsetY;
		}

	}


	/**
	 * 暴露轨迹
	 */
	public exposeTrack(track: CollideEvent) {
		track._player = this;
		this.dispatchEvent(track);
	}

}
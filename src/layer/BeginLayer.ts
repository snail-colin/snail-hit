class BeginLayer extends egret.Sprite {

	private player: Player;

	private p_radius: number = 10;

	private enemySet = new Set<Enemy>();

	public constructor() {
		super();
		this.init();
	}

	private init(): void {
		this.initPlayer();
		this.initEnemys(1);
	}

	private initPlayer(): void {
		let player = new Player();
		let x = Constant.stageW / 2;
		let y = Constant.stageH - 200;
		// console.info("player x : " + x + " player y: " + y)
		player.draw(x, y, this.p_radius);
		player.bindMove();
		this.player = player;
		this.addChild(player);
	}

	private initEnemys(num: number): void {
		for (let i = 0; i < num; i++) {
			let x = Math.round(Math.random() * Constant.stageW / 5);
			let y = Math.round(Math.random() * Constant.stageH / 5);
			let radius = Math.round(Math.random() * 10 + 2);
			let speed = Math.random() * 1.5 + 1;
			// let speed = 1;
			let en: Enemy = new Enemy();
			en.draw(x, y, radius, speed == 0 ? 1 : speed);
			// en.draw(100, 100, 5, speed == 0 ? 1 : speed);
			let isLeft: boolean = Math.round(Math.random()) == 0 ? false : true
			en.setDirection(isLeft);
			this.enemySet.add(en);
			this.addChild(en);
		}
	}

	public startAnimation(): void {
		let change = () => {
			if (this.enemySet.size() > 0) {
				let tw = egret.Tween.get(this);
				this.enemysAnimation();
				tw.call(change, this);
			}
		};
		change();
	}


	private enemysAnimation(): void {
		let enemyArray = this.enemySet.toArray();
		console.info("this.enemys.length" + enemyArray.length);
		for (let i = 0; i < enemyArray.length; i++) {
			let en: Enemy = enemyArray[i];
			var targetPoint: egret.Point = this.player.localToGlobal()
			if (en.move(targetPoint.x, targetPoint.y, this.p_radius)) {
				this.enemySet.remove(en);
			}
		}
	}
}
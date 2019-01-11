class Enemy extends egret.Sprite {

	public static default_color: number = 0xFF0000;

	private e_x: number;
	private e_y: number;
	private e_speed: number
	private radius: number;
	private isLeft: boolean = true;
	private isReset: boolean = false;
	public constructor() {
		super();
	}

	public draw(x: number, y: number, radius: number, speed: number, color?: number) {
		this.graphics.beginFill(color ? color : Enemy.default_color);
		this.graphics.drawCircle(0, 0, radius);
		this.graphics.endFill();
		this.e_x = x;
		this.e_y = y;
		this.x = x;
		this.y = y;
		this.e_speed = speed;
		this.radius = radius;
	}

	public setDirection(isLeft: boolean) {
		this.isLeft = isLeft;
	}

	public getSpeed(): number {
		return this.e_speed;
	}

	public getRadius(): number {
		return this.radius;
	}

	public getEx(): number {
		return this.e_x;
	}

	public getEy(): number {
		return this.e_y;
	}

	public move(targetX: number, targetY: number, targetRadius):boolean{
		this.e_y += this.e_speed;
		if (this.isLeft) {
			this.e_x -= this.e_speed;
		} else {
			this.e_x += this.e_speed;
		}
		//TODO 待修改
		if (this.e_x < 0 || this.e_y > Constant.stageH || this.e_x > Constant.stageW) {
			if (!this.isReset) {
				this.isReset = true;
				this.e_y = Math.random() * -100;
				if (this.isLeft) {
					this.e_x = Constant.stageW + Math.random() * 30 + 10;
				} else {
					this.e_x = Math.random() * -30 - 10;
				}
			}
		} else {
			this.isReset = false;
		}
		this.x = this.e_x;
		this.y = this.e_y;
		return this.checkHit(targetX, targetY, targetRadius);
	}

	public checkHit(targetX: number, targetY: number, targetRadius): boolean {
		// console.info("targetX： " + targetX + "targetY: " + targetY + " targetRadius:" + targetRadius);
		// console.info("this.e_x: " + this.e_x + " this.e_y: " + this.e_y);
		let dx: number = targetX - this.e_x;
		let dy: number = targetY - this.e_y;
		let distance: number = Math.sqrt(dx * dx + dy * dy);
		if (distance < (targetRadius + this.radius) && this.parent) {
			this.parent.removeChild(this);
			return true;
		}
		return false;
	}

}
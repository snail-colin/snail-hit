class CollideEvent extends egret.Event{

	public static TRACK:string = "轨迹";

	public  _player:Player

	public constructor(type: string, bubbles?: boolean, cancelable?: boolean) {
		super(type,bubbles,cancelable);
	}

}
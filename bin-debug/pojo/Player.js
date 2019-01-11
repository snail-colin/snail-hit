var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Player = (function (_super) {
    __extends(Player, _super);
    function Player() {
        return _super.call(this) || this;
    }
    Player.prototype.draw = function (x, y, radius, color) {
        this.graphics.beginFill(color ? color : Player.default_color);
        this.graphics.drawCircle(0, 0, radius);
        this.graphics.endFill();
        this.radius = radius;
        this.x = x;
        this.y = y;
    };
    /**
     * 绑定移动事件
     */
    Player.prototype.bindMove = function () {
        //设定2个偏移量
        var offsetX;
        var offsetY;
        //手指按到屏幕，触发 startMove 方法
        this.touchEnabled = true;
        this.addEventListener(egret.TouchEvent.TOUCH_BEGIN, startMove, this);
        //手指离开屏幕，触发 stopMove 方法
        this.addEventListener(egret.TouchEvent.TOUCH_END, stopMove, this);
        function startMove(e) {
            //计算手指和圆形的距离
            offsetX = e.stageX - this.x;
            offsetY = e.stageY - this.y;
            //手指在屏幕上移动，会触发 onMove 方法
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
        }
        function stopMove(e) {
            //手指离开屏幕，移除手指移动的监听
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, this);
        }
        // let track: CollideEvent = new CollideEvent(CollideEvent.TRACK);
        function onMove(e) {
            //通过计算手指在屏幕上的位置，计算当前对象的坐标，达到跟随手指移动的效果
            this.x = e.stageX - offsetX;
            this.y = e.stageY - offsetY;
        }
    };
    /**
     * 暴露轨迹
     */
    Player.prototype.exposeTrack = function (track) {
        track._player = this;
        this.dispatchEvent(track);
    };
    Player.default_color = 0xFFFFFF;
    return Player;
}(egret.Sprite));
__reflect(Player.prototype, "Player");
//# sourceMappingURL=Player.js.map
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
var BeginLayer = (function (_super) {
    __extends(BeginLayer, _super);
    function BeginLayer() {
        var _this = _super.call(this) || this;
        _this.p_radius = 10;
        _this.enemySet = new Set();
        _this.init();
        return _this;
    }
    BeginLayer.prototype.init = function () {
        this.initPlayer();
        this.initEnemys(1);
    };
    BeginLayer.prototype.initPlayer = function () {
        var player = new Player();
        var x = Constant.stageW / 2;
        var y = Constant.stageH - 200;
        // console.info("player x : " + x + " player y: " + y)
        player.draw(x, y, this.p_radius);
        player.bindMove();
        this.player = player;
        this.addChild(player);
    };
    BeginLayer.prototype.initEnemys = function (num) {
        for (var i = 0; i < num; i++) {
            var x = Math.round(Math.random() * Constant.stageW / 5);
            var y = Math.round(Math.random() * Constant.stageH / 5);
            var radius = Math.round(Math.random() * 10 + 1);
            var speed = Math.random() * 1.5 + 1;
            // let speed = 1;
            var en = new Enemy();
            en.draw(x, y, radius, speed == 0 ? 1 : speed);
            // en.draw(100, 100, 5, speed == 0 ? 1 : speed);
            var isLeft = Math.round(Math.random()) == 0 ? false : true;
            en.setDirection(isLeft);
            this.enemySet.add(en);
            this.addChild(en);
        }
    };
    BeginLayer.prototype.startAnimation = function () {
        var _this = this;
        var change = function () {
            if (_this.enemySet.size() > 0) {
                var tw = egret.Tween.get(_this);
                _this.enemysAnimation();
                tw.call(change, _this);
            }
        };
        change();
    };
    BeginLayer.prototype.enemysAnimation = function () {
        var enemyArray = this.enemySet.toArray();
        console.info("this.enemys.length" + enemyArray.length);
        for (var i = 0; i < enemyArray.length; i++) {
            var en = enemyArray[i];
            var targetPoint = this.player.localToGlobal();
            // console.info("localToGlobal" + targetPoint);
            if (en.move(targetPoint.x, targetPoint.y, this.p_radius)) {
                this.enemySet.remove(en);
            }
        }
    };
    return BeginLayer;
}(egret.Sprite));
__reflect(BeginLayer.prototype, "BeginLayer");
//# sourceMappingURL=BeginLayer.js.map
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
var Enemy = (function (_super) {
    __extends(Enemy, _super);
    function Enemy() {
        var _this = _super.call(this) || this;
        _this.isLeft = true;
        _this.isReset = false;
        return _this;
    }
    Enemy.prototype.draw = function (x, y, radius, speed, color) {
        this.graphics.beginFill(color ? color : Enemy.default_color);
        this.graphics.drawCircle(0, 0, radius);
        this.graphics.endFill();
        this.e_x = x;
        this.e_y = y;
        this.x = x;
        this.y = y;
        this.e_speed = speed;
        this.radius = radius;
    };
    Enemy.prototype.setDirection = function (isLeft) {
        this.isLeft = isLeft;
    };
    Enemy.prototype.getSpeed = function () {
        return this.e_speed;
    };
    Enemy.prototype.getRadius = function () {
        return this.radius;
    };
    Enemy.prototype.getEx = function () {
        return this.e_x;
    };
    Enemy.prototype.getEy = function () {
        return this.e_y;
    };
    Enemy.prototype.move = function (targetX, targetY, targetRadius) {
        this.e_y += this.e_speed;
        if (this.isLeft) {
            this.e_x -= this.e_speed;
        }
        else {
            this.e_x += this.e_speed;
        }
        //TODO 待修改
        if (this.e_x < 0 || this.e_y > Constant.stageH || this.e_x > Constant.stageW) {
            if (!this.isReset) {
                this.isReset = true;
                this.e_y = Math.random() * -100;
                if (this.isLeft) {
                    this.e_x = Constant.stageW + Math.random() * 30 + 10;
                }
                else {
                    this.e_x = Math.random() * -30 - 10;
                }
            }
        }
        else {
            this.isReset = false;
        }
        this.x = this.e_x;
        this.y = this.e_y;
        return this.checkHit(targetX, targetY, targetRadius);
    };
    Enemy.prototype.checkHit = function (targetX, targetY, targetRadius) {
        // console.info("targetX： " + targetX + "targetY: " + targetY + " targetRadius:" + targetRadius);
        // console.info("this.e_x: " + this.e_x + " this.e_y: " + this.e_y);
        var dx = targetX - this.e_x;
        var dy = targetY - this.e_y;
        var distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < (targetRadius + this.radius) && this.parent) {
            this.parent.removeChild(this);
            return true;
        }
        return false;
    };
    Enemy.default_color = 0xFF0000;
    return Enemy;
}(egret.Sprite));
__reflect(Enemy.prototype, "Enemy");
//# sourceMappingURL=Enemy.js.map
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
var AppController = (function (_super) {
    __extends(AppController, _super);
    function AppController() {
        var _this = _super.call(this) || this;
        _this.beginLayer = new BeginLayer();
        return _this;
    }
    AppController.instance = function () {
        if (!this._instance) {
            this._instance = new AppController();
        }
        return this._instance;
    };
    AppController.prototype.start = function (stage) {
        this.currentStage = stage;
        this.currentStage.addChild(this.beginLayer);
        this.beginLayer.startAnimation();
    };
    return AppController;
}(egret.Sprite));
__reflect(AppController.prototype, "AppController");
//# sourceMappingURL=AppController.js.map
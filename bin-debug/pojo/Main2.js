//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Main2 = (function (_super) {
    __extends(Main2, _super);
    function Main2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.enemys = new Array();
        return _this;
    }
    Main2.prototype.createChildren = function () {
        _super.prototype.createChildren.call(this);
        //常量设置
        Constant.stageW = this.stage.stageWidth;
        Constant.stageH = this.stage.stageHeight;
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //inject the custom material parser
        //注入自定义的素材解析器
        var assetAdapter = new AssetAdapter();
        egret.registerImplementation("eui.IAssetAdapter", assetAdapter);
        egret.registerImplementation("eui.IThemeAdapter", new ThemeAdapter());
        this.runGame().catch(function (e) {
            console.log(e);
        });
    };
    Main2.prototype.runGame = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadResource()];
                    case 1:
                        _a.sent();
                        this.createGameScene();
                        // const result = await RES.getResAsync("description_json")
                        this.startAnimation();
                        return [4 /*yield*/, platform.login()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, platform.getUserInfo()];
                    case 3:
                        userInfo = _a.sent();
                        console.log(userInfo);
                        return [2 /*return*/];
                }
            });
        });
    };
    Main2.prototype.loadResource = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loadingView, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 4, , 5]);
                        loadingView = new LoadingUI();
                        this.stage.addChild(loadingView);
                        return [4 /*yield*/, RES.loadConfig("resource/default.res.json", "resource/")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.loadTheme()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, RES.loadGroup("preload", 0, loadingView)];
                    case 3:
                        _a.sent();
                        this.stage.removeChild(loadingView);
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Main2.prototype.loadTheme = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // load skin theme configuration file, you can manually modify the file. And replace the default skin.
            //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
            var theme = new eui.Theme("resource/default.thm.json", _this.stage);
            theme.addEventListener(eui.UIEvent.COMPLETE, function () {
                resolve();
            }, _this);
        });
    };
    /**
     * 创建场景界面
     * Create scene interface
     */
    Main2.prototype.createGameScene = function () {
        //         let bgShape: egret.Shape = new egret.Shape();
        // bgShape.graphics.beginFill(0x000000);
        // bgShape.graphics.drawRect(0, 0, Constant.stageW, Constant.stageH);
        // bgShape.graphics.endFill();
        // //map黑色背景
        // this.addChild(bgShape);
        this.initPlayer(10, Constant.stageW, Constant.stageH);
        this.initEnemy(1, Constant.stageW, Constant.stageH);
    };
    Main2.prototype.initEnemy = function (num, stageW, stageH) {
        for (var i = 0; i < num; i++) {
            var x = Math.round(Math.random() * stageW / 5);
            var y = Math.round(Math.random() * stageH / 5);
            var radius = Math.round(Math.random() * 10 + 1);
            // let speed = Math.random() * 1.5;
            var speed = 1;
            var en = new Enemy();
            en.draw(x, y, radius, speed == 0 ? 1 : speed);
            // en.draw(100, 100, 5, speed == 0 ? 1 : speed);
            var isLeft = Math.round(Math.random()) == 0 ? false : true;
            en.setDirection(isLeft);
            this.addChild(en);
            this.enemys.push(en);
        }
    };
    Main2.prototype.initPlayer = function (radius, stageW, stageH) {
        var player = new Player();
        player.draw(stageW / 2, stageH - 100, radius);
        // player.draw(0, 0, radius);
        this.addChild(player);
        this.player = player;
        this.bindMove(player);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main2.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    /**
     * 描述文件加载成功，开始播放动画
     * Description file loading is successful, start to play the animation
     */
    Main2.prototype.startAnimation = function () {
        var _this = this;
        var change = function () {
            var tw = egret.Tween.get(_this);
            _this.enemysAnimation();
            tw.call(change, _this);
        };
        change();
        // this.player.addEventListener(CollideEvent.TRACK, this.catchPlayerTrack, this);
    };
    Main2.prototype.enemysAnimation = function () {
        for (var i = 0; i < this.enemys.length; i++) {
            var en = this.enemys[i];
            // en.move();
        }
    };
    Main2.prototype.catchPlayerTrack = function (_player) {
        console.info("px： " + _player.x + " py: " + _player.y);
        console.info("radius" + _player.radius);
        for (var i = 0; i < this.enemys.length; i++) {
            var en = this.enemys[i];
            //     let _player: Player = evt._player;
            var radius = _player.radius;
            //     console.info("radius" + radius);
            //     console.info("this.radius" + en.getRadius());
            //     console.info("_player.x： " + _player.x + " _player.y: " + _player.y);
            //     console.info("this.e_x： " + en.getEx() + " this.e_y: " + en.getEy());
            //     //两点之间的距离
            var dx = _player.x - en.getEx();
            var dy = _player.y - en.getEy();
            var distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < (radius + en.getRadius()) && _player.parent) {
                _player.parent.removeChild(en);
            }
        }
    };
    /**
     * 绑定移动事件
     */
    Main2.prototype.bindMove = function (player) {
        //设定2个偏移量
        var offsetX;
        var offsetY;
        //手指按到屏幕，触发 startMove 方法
        player.touchEnabled = true;
        player.addEventListener(egret.TouchEvent.TOUCH_BEGIN, startMove, player);
        //手指离开屏幕，触发 stopMove 方法
        player.addEventListener(egret.TouchEvent.TOUCH_END, stopMove, player);
        function startMove(e) {
            //计算手指和圆形的距离
            offsetX = e.stageX - this.x;
            offsetY = e.stageY - this.y;
            //手指在屏幕上移动，会触发 onMove 方法
            this.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, player);
        }
        function stopMove(e) {
            //手指离开屏幕，移除手指移动的监听
            this.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, onMove, player);
        }
        function onMove(e) {
            //通过计算手指在屏幕上的位置，计算当前对象的坐标，达到跟随手指移动的效果
            this.x = e.stageX - offsetX;
            this.y = e.stageY - offsetY;
            this.parent.catchPlayerTrack(this);
        }
    };
    /**
     * 点击按钮
     * Click the button
     */
    Main2.prototype.onButtonClick = function (e) {
        var panel = new eui.Panel();
        panel.title = "Title";
        panel.horizontalCenter = 0;
        panel.verticalCenter = 0;
        this.addChild(panel);
    };
    return Main2;
}(eui.UILayer));
__reflect(Main2.prototype, "Main2");
//# sourceMappingURL=Main2.js.map
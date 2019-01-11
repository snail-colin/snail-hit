var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Constant = (function () {
    function Constant() {
    }
    /**根据名字创建位图 */
    Constant.CreateBitmapByName = function (name) {
        var texture = RES.getRes(name);
        var bitmap = new egret.Bitmap(texture);
        return bitmap;
    };
    /**
     * 根据name关键字创建一个Bitmap对象。此name 是根据TexturePacker 组合成的一张位图
     */
    Constant.createBitmapFromSheet = function (name, sheetName) {
        var texture = RES.getRes(sheetName + "_json." + name);
        var result = new egret.Bitmap(texture);
        return result;
    };
    Constant.getTextureFromSheet = function (name, sheetName) {
        var result = RES.getRes(sheetName + "_json." + name);
        return result;
    };
    /**移除子类方法 */
    Constant.removeChild = function (child) {
        if (child && child.parent) {
            if (child.parent.removeElement) {
                child.parent.removeElement((child));
            }
            else {
                child.parent.removeChild(child);
            }
        }
    };
    return Constant;
}());
__reflect(Constant.prototype, "Constant");
//# sourceMappingURL=Constant.js.map
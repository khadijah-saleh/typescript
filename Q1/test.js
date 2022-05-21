var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Rect = /** @class */ (function () {
    function Rect(_width, _length) {
        this.width = _width;
        this.length = _length;
    }
    Rect.prototype.calcCircumference = function () {
        return (this.width + this.length) * 2;
    };
    Rect.WhoAmI = function () {
        console.log("I am rectangle");
    };
    return Rect;
}());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(width2, length2) {
        return _super.call(this, width2, length2) || this;
    }
    Square.prototype.calcCircumference = function () {
        return this.width * 4;
    };
    Square.WhoAmI = function () {
        console.log("I am square");
    };
    return Square;
}(Rect));
var r1 = new Rect(3, 4);
var s1 = new Square(3, 3);

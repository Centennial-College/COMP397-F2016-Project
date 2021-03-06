/**
 * @description Defines diamond object used in the game
 * @export
 * @class Diamond
 * @extends {objects.GameObject}
 **/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    var Diamond = (function (_super) {
        __extends(Diamond, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        function Diamond() {
            _super.call(this, "diamond");
            this.start();
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
        Diamond.prototype.start = function () {
            this._reset();
        };
        Diamond.prototype.update = function () {
            this.position = new objects.Vector2(this.x, this.y);
            this.y += this._dy;
            this.x -= this._dx;
            this._checkBounds();
        };
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++       
        Diamond.prototype._reset = function () {
            this.isColliding = false;
            this.visible = true;
            this._dx = Math.floor((Math.random() * 3) + 5); // horizontal drift
            this._dy = Math.floor((Math.random() * 4) + 2); // horizontal drift
            this.x = 890;
            // get a random x location
            this.y = Math.floor((Math.random() * (628 - (this.height * 0.5))) + (this.height * 0.5));
        };
        Diamond.prototype._checkBounds = function () {
            if (this.x <= (0 + (this.width * 0.5))) {
                this._reset();
            }
        };
        return Diamond;
    }(objects.GameObject));
    objects.Diamond = Diamond;
})(objects || (objects = {}));
//# sourceMappingURL=diamond.js.map
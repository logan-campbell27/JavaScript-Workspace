"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Artist = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var Artist = /*#__PURE__*/function () {
  function Artist(id, name, albums) {
    (0, _classCallCheck2.default)(this, Artist);
    (0, _defineProperty2.default)(this, "id", -1);
    (0, _defineProperty2.default)(this, "name", "");
    (0, _defineProperty2.default)(this, "albums", []);
    this.id = id;
    this.name = name;
    this.albums = albums;
  }
  (0, _createClass2.default)(Artist, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(id) {
      this.id = id;
    }
  }, {
    key: "Name",
    get: function get() {
      return this.name;
    },
    set: function set(name) {
      this.name = name;
    }
  }, {
    key: "Albums",
    get: function get() {
      return this.albums;
    },
    set: function set(albums) {
      this.albums = albums;
    }
  }]);
  return Artist;
}();
exports.Artist = Artist;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBcnRpc3QiLCJpZCIsIm5hbWUiLCJhbGJ1bXMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvbW9kZWxzL0FydGlzdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbGJ1bSB9IGZyb20gXCIuL0FsYnVtXCI7XG5leHBvcnQgY2xhc3MgQXJ0aXN0e1xuICAgIHByaXZhdGUgaWQ6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgbmFtZTogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIGFsYnVtczogQWxidW1bXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6bnVtYmVyLCBuYW1lOnN0cmluZywgYWxidW1zOiBBbGJ1bVtdKXtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYWxidW1zID0gYWxidW1zO1xuICAgIH1cblxuICAgIGdldCBJZCgpOm51bWJlcntcbiAgICAgICAgcmV0dXJuIHRoaXMuaWQ7XG4gICAgfVxuXG4gICAgc2V0IElkKGlkOm51bWJlcil7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICB9XG5cbiAgICBnZXQgTmFtZSgpOnN0cmluZ3tcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9XG4gICAgc2V0IE5hbWUobmFtZTpzdHJpbmcpe1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICBcbiAgICBnZXQgQWxidW1zKCk6QWxidW1bXXtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxidW1zO1xuICAgIH1cbiAgICBzZXQgQWxidW1zKGFsYnVtczpBbGJ1bVtdKXtcbiAgICAgICAgdGhpcy5hbGJ1bXMgPSBhbGJ1bXM7XG4gICAgfVxufSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUNhQSxNQUFNO0VBS2YsZ0JBQVlDLEVBQVMsRUFBRUMsSUFBVyxFQUFFQyxNQUFlLEVBQUM7SUFBQTtJQUFBLDBDQUovQixDQUFDLENBQUM7SUFBQSw0Q0FDQSxFQUFFO0lBQUEsOENBQ0MsRUFBRTtJQUd4QixJQUFJLENBQUNGLEVBQUUsR0FBR0EsRUFBRTtJQUNiLElBQUksQ0FBQ0MsSUFBSSxHQUFHQSxJQUFJO0lBQ2YsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDeEI7RUFBQztJQUFBO0lBQUEsS0FFRCxlQUFlO01BQ1gsT0FBTyxJQUFJLENBQUNGLEVBQUU7SUFDbEIsQ0FBQztJQUFBLEtBRUQsYUFBT0EsRUFBUyxFQUFDO01BQ2IsSUFBSSxDQUFDQSxFQUFFLEdBQUdBLEVBQUU7SUFDaEI7RUFBQztJQUFBO0lBQUEsS0FFRCxlQUFpQjtNQUNiLE9BQU8sSUFBSSxDQUFDQyxJQUFJO0lBQ3BCLENBQUM7SUFBQSxLQUNELGFBQVNBLElBQVcsRUFBQztNQUNqQixJQUFJLENBQUNBLElBQUksR0FBR0EsSUFBSTtJQUNwQjtFQUFDO0lBQUE7SUFBQSxLQUVELGVBQW9CO01BQ2hCLE9BQU8sSUFBSSxDQUFDQyxNQUFNO0lBQ3RCLENBQUM7SUFBQSxLQUNELGFBQVdBLE1BQWMsRUFBQztNQUN0QixJQUFJLENBQUNBLE1BQU0sR0FBR0EsTUFBTTtJQUN4QjtFQUFDO0VBQUE7QUFBQTtBQUFBIn0=
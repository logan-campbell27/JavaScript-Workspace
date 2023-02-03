"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Album = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var Album = /*#__PURE__*/function () {
  function Album(id, title, description, year, tracks) {
    (0, _classCallCheck2.default)(this, Album);
    (0, _defineProperty2.default)(this, "id", -1);
    (0, _defineProperty2.default)(this, "title", "");
    (0, _defineProperty2.default)(this, "artist", "");
    (0, _defineProperty2.default)(this, "description", "");
    (0, _defineProperty2.default)(this, "year", -1);
    (0, _defineProperty2.default)(this, "tracks", []);
    this.id = id;
    this.title = title;
    this.description = description;
    this.year = year;
    this.tracks = tracks;
  }
  (0, _createClass2.default)(Album, [{
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(id) {
      this.id = id;
    }
  }, {
    key: "Title",
    get: function get() {
      return this.title;
    },
    set: function set(title) {
      this.title = title;
    }
  }, {
    key: "Description",
    get: function get() {
      return this.description;
    },
    set: function set(description) {
      this.description = description;
    }
  }, {
    key: "Year",
    get: function get() {
      return this.year;
    },
    set: function set(year) {
      this.year = year;
    }
  }, {
    key: "Tracks",
    get: function get() {
      return this.tracks;
    },
    set: function set(tracks) {
      this.tracks = tracks;
    }
  }]);
  return Album;
}();
exports.Album = Album;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBbGJ1bSIsImlkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInllYXIiLCJ0cmFja3MiXSwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvbW9kZWxzL0FsYnVtLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRyYWNrIH0gZnJvbSAnLi9UcmFjayc7XG5leHBvcnQgY2xhc3MgQWxidW17XG4gICAgcHJpdmF0ZSBpZDogbnVtYmVyID0gLTE7XG4gICAgcHJpdmF0ZSB0aXRsZTogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIGFydGlzdDogc3RyaW5nID0gXCJcIjtcbiAgICBwcml2YXRlIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgeWVhcjogbnVtYmVyID0gLTE7XG4gICAgcHJpdmF0ZSB0cmFja3M6IFRyYWNrW10gPSBbXTsgXG5cbiAgICBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCB0aXRsZTogc3RyaW5nLCBkZXNjcmlwdGlvbjogc3RyaW5nLCB5ZWFyOiBudW1iZXIsIHRyYWNrczogVHJhY2tbXSl7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMueWVhciA9IHllYXI7XG4gICAgICAgIHRoaXMudHJhY2tzID0gdHJhY2tzO1xuICAgIH1cbiAgICBcbiAgICBnZXQgSWQoKTpudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cblxuICAgIHNldCBJZChpZDpudW1iZXIpe1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxuXG4gICAgZ2V0IFRpdGxlKCk6c3RyaW5ne1xuICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcbiAgICB9XG5cbiAgICBzZXQgVGl0bGUodGl0bGU6c3RyaW5nKXtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIH1cbiAgICBcbiAgICBnZXQgRGVzY3JpcHRpb24oKTpzdHJpbmd7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldCBEZXNjcmlwdGlvbihkZXNjcmlwdGlvbjpzdHJpbmcpe1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfVxuXG4gICAgZ2V0IFllYXIoKTpudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLnllYXI7XG4gICAgfVxuXG4gICAgc2V0IFllYXIoeWVhcjpudW1iZXIpe1xuICAgICAgICB0aGlzLnllYXIgPSB5ZWFyO1xuICAgIH1cblxuICAgIGdldCBUcmFja3MoKTpUcmFja1tde1xuICAgICAgICByZXR1cm4gdGhpcy50cmFja3M7XG4gICAgfVxuXG4gICAgc2V0IFRyYWNrcyh0cmFja3M6VHJhY2tbXSl7XG4gICAgICAgIHRoaXMudHJhY2tzID0gdHJhY2tzO1xuICAgIH1cbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDYUEsS0FBSztFQVFkLGVBQVlDLEVBQVUsRUFBRUMsS0FBYSxFQUFFQyxXQUFtQixFQUFFQyxJQUFZLEVBQUVDLE1BQWUsRUFBQztJQUFBO0lBQUEsMENBUHJFLENBQUMsQ0FBQztJQUFBLDZDQUNDLEVBQUU7SUFBQSw4Q0FDRCxFQUFFO0lBQUEsbURBQ0csRUFBRTtJQUFBLDRDQUNULENBQUMsQ0FBQztJQUFBLDhDQUNDLEVBQUU7SUFHeEIsSUFBSSxDQUFDSixFQUFFLEdBQUdBLEVBQUU7SUFDWixJQUFJLENBQUNDLEtBQUssR0FBR0EsS0FBSztJQUNsQixJQUFJLENBQUNDLFdBQVcsR0FBR0EsV0FBVztJQUM5QixJQUFJLENBQUNDLElBQUksR0FBR0EsSUFBSTtJQUNoQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN4QjtFQUFDO0lBQUE7SUFBQSxLQUVELGVBQWU7TUFDWCxPQUFPLElBQUksQ0FBQ0osRUFBRTtJQUNsQixDQUFDO0lBQUEsS0FFRCxhQUFPQSxFQUFTLEVBQUM7TUFDYixJQUFJLENBQUNBLEVBQUUsR0FBR0EsRUFBRTtJQUNoQjtFQUFDO0lBQUE7SUFBQSxLQUVELGVBQWtCO01BQ2QsT0FBTyxJQUFJLENBQUNDLEtBQUs7SUFDckIsQ0FBQztJQUFBLEtBRUQsYUFBVUEsS0FBWSxFQUFDO01BQ25CLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ3RCO0VBQUM7SUFBQTtJQUFBLEtBRUQsZUFBd0I7TUFDcEIsT0FBTyxJQUFJLENBQUNDLFdBQVc7SUFDM0IsQ0FBQztJQUFBLEtBRUQsYUFBZ0JBLFdBQWtCLEVBQUM7TUFDL0IsSUFBSSxDQUFDQSxXQUFXLEdBQUdBLFdBQVc7SUFDbEM7RUFBQztJQUFBO0lBQUEsS0FFRCxlQUFpQjtNQUNiLE9BQU8sSUFBSSxDQUFDQyxJQUFJO0lBQ3BCLENBQUM7SUFBQSxLQUVELGFBQVNBLElBQVcsRUFBQztNQUNqQixJQUFJLENBQUNBLElBQUksR0FBR0EsSUFBSTtJQUNwQjtFQUFDO0lBQUE7SUFBQSxLQUVELGVBQW9CO01BQ2hCLE9BQU8sSUFBSSxDQUFDQyxNQUFNO0lBQ3RCLENBQUM7SUFBQSxLQUVELGFBQVdBLE1BQWMsRUFBQztNQUN0QixJQUFJLENBQUNBLE1BQU0sR0FBR0EsTUFBTTtJQUN4QjtFQUFDO0VBQUE7QUFBQTtBQUFBIn0=
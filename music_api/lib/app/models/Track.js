"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Track = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var Track = /*#__PURE__*/function () {
  function Track(id, title, number, lyrics) {
    (0, _classCallCheck2.default)(this, Track);
    (0, _defineProperty2.default)(this, "id", -1);
    (0, _defineProperty2.default)(this, "title", "");
    (0, _defineProperty2.default)(this, "number", -1);
    (0, _defineProperty2.default)(this, "lyrics", "");
    this.id = id;
    this.title = title;
    this.number = number;
    this.lyrics = lyrics;
  }
  (0, _createClass2.default)(Track, [{
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
    key: "Number",
    get: function get() {
      return this.number;
    },
    set: function set(number) {
      this.number = number;
    }
  }, {
    key: "Lyrics",
    get: function get() {
      return this.lyrics;
    },
    set: function set(lyrics) {
      this.lyrics = lyrics;
    }
  }]);
  return Track;
}();
exports.Track = Track;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUcmFjayIsImlkIiwidGl0bGUiLCJudW1iZXIiLCJseXJpY3MiXSwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvbW9kZWxzL1RyYWNrLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBUcmFja3tcbiAgICBwcml2YXRlIGlkOiBudW1iZXIgPSAtMTtcbiAgICBwcml2YXRlIHRpdGxlOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgbnVtYmVyOiBudW1iZXIgPSAtMTtcbiAgICBwcml2YXRlIGx5cmljczogc3RyaW5nID0gXCJcIjsgXG5cbiAgICBjb25zdHJ1Y3RvcihpZDpudW1iZXIsIHRpdGxlOiBzdHJpbmcsIG51bWJlcjogbnVtYmVyLCBseXJpY3M6IHN0cmluZyl7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgICAgICAgdGhpcy5seXJpY3MgPSBseXJpY3M7XG4gICAgfVxuXG4gICAgZ2V0IElkKCk6bnVtYmVye1xuICAgICAgICByZXR1cm4gdGhpcy5pZDtcbiAgICB9XG5cbiAgICBzZXQgSWQoaWQ6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgIH1cbiAgICBnZXQgVGl0bGUoKTpzdHJpbmd7XG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xuICAgIH1cblxuICAgIHNldCBUaXRsZSh0aXRsZTpzdHJpbmcpe1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgfVxuICAgIGdldCBOdW1iZXIoKTpudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLm51bWJlcjtcbiAgICB9XG5cbiAgICBzZXQgTnVtYmVyKG51bWJlcjpudW1iZXIpe1xuICAgICAgICB0aGlzLm51bWJlciA9IG51bWJlcjtcbiAgICB9XG4gICAgZ2V0IEx5cmljcygpOnN0cmluZ3tcbiAgICAgICAgcmV0dXJuIHRoaXMubHlyaWNzO1xuICAgIH1cblxuICAgIHNldCBMeXJpY3MobHlyaWNzOnN0cmluZyl7XG4gICAgICAgIHRoaXMubHlyaWNzID0gbHlyaWNzO1xuICAgIH1cbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBYUEsS0FBSztFQU1kLGVBQVlDLEVBQVMsRUFBRUMsS0FBYSxFQUFFQyxNQUFjLEVBQUVDLE1BQWMsRUFBQztJQUFBO0lBQUEsMENBTGhELENBQUMsQ0FBQztJQUFBLDZDQUNDLEVBQUU7SUFBQSw4Q0FDRCxDQUFDLENBQUM7SUFBQSw4Q0FDRixFQUFFO0lBR3ZCLElBQUksQ0FBQ0gsRUFBRSxHQUFHQSxFQUFFO0lBQ1osSUFBSSxDQUFDQyxLQUFLLEdBQUdBLEtBQUs7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDeEI7RUFBQztJQUFBO0lBQUEsS0FFRCxlQUFlO01BQ1gsT0FBTyxJQUFJLENBQUNILEVBQUU7SUFDbEIsQ0FBQztJQUFBLEtBRUQsYUFBT0EsRUFBUyxFQUFDO01BQ2IsSUFBSSxDQUFDQSxFQUFFLEdBQUdBLEVBQUU7SUFDaEI7RUFBQztJQUFBO0lBQUEsS0FDRCxlQUFrQjtNQUNkLE9BQU8sSUFBSSxDQUFDQyxLQUFLO0lBQ3JCLENBQUM7SUFBQSxLQUVELGFBQVVBLEtBQVksRUFBQztNQUNuQixJQUFJLENBQUNBLEtBQUssR0FBR0EsS0FBSztJQUN0QjtFQUFDO0lBQUE7SUFBQSxLQUNELGVBQW1CO01BQ2YsT0FBTyxJQUFJLENBQUNDLE1BQU07SUFDdEIsQ0FBQztJQUFBLEtBRUQsYUFBV0EsTUFBYSxFQUFDO01BQ3JCLElBQUksQ0FBQ0EsTUFBTSxHQUFHQSxNQUFNO0lBQ3hCO0VBQUM7SUFBQTtJQUFBLEtBQ0QsZUFBbUI7TUFDZixPQUFPLElBQUksQ0FBQ0MsTUFBTTtJQUN0QixDQUFDO0lBQUEsS0FFRCxhQUFXQSxNQUFhLEVBQUM7TUFDckIsSUFBSSxDQUFDQSxNQUFNLEdBQUdBLE1BQU07SUFDeEI7RUFBQztFQUFBO0FBQUE7QUFBQSJ9
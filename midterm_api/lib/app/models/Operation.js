"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Operation = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var Operation = /*#__PURE__*/function () {
  function Operation(num1, num2, operand) {
    (0, _classCallCheck2.default)(this, Operation);
    (0, _defineProperty2.default)(this, "num1", -1);
    (0, _defineProperty2.default)(this, "num2", -1);
    (0, _defineProperty2.default)(this, "operand", "");
    this.num1 = num1;
    this.num2 = num2;
    this.operand = operand;
  }
  (0, _createClass2.default)(Operation, [{
    key: "Num1",
    get: function get() {
      return this.num1;
    },
    set: function set(num1) {
      this.num1 = num1;
    }
  }, {
    key: "Num2",
    get: function get() {
      return this.num2;
    },
    set: function set(num2) {
      this.num2 = num2;
    }
  }, {
    key: "Operand",
    get: function get() {
      return this.operand;
    },
    set: function set(operand) {
      this.operand = operand;
    }
  }]);
  return Operation;
}();
exports.Operation = Operation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPcGVyYXRpb24iLCJudW0xIiwibnVtMiIsIm9wZXJhbmQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvbW9kZWxzL09wZXJhdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjbGFzcyBPcGVyYXRpb257XG4gICAgcHJpdmF0ZSBudW0xOiBudW1iZXIgPSAtMTtcbiAgICBwcml2YXRlIG51bTI6IG51bWJlciA9ICAtMTtcbiAgICBwcml2YXRlIG9wZXJhbmQ6IHN0cmluZyA9IFwiXCI7XG4gICAgXG5cbiAgICBjb25zdHJ1Y3RvcihudW0xOm51bWJlciwgbnVtMjpudW1iZXIsIG9wZXJhbmQ6c3RyaW5nLCl7XG4gICAgICAgIHRoaXMubnVtMSA9IG51bTE7XG4gICAgICAgIHRoaXMubnVtMiA9IG51bTI7XG4gICAgICAgIHRoaXMub3BlcmFuZCA9IG9wZXJhbmQ7XG4gICAgfVxuXG4gICAgZ2V0IE51bTEoKTpudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLm51bTE7XG4gICAgfVxuXG4gICAgc2V0IE51bTEobnVtMTpudW1iZXIpe1xuICAgICAgICB0aGlzLm51bTEgPSBudW0xO1xuICAgIH1cblxuICAgIGdldCBOdW0yKCk6bnVtYmVye1xuICAgICAgICByZXR1cm4gdGhpcy5udW0yO1xuICAgIH1cbiAgICBzZXQgTnVtMihudW0yOm51bWJlcil7XG4gICAgICAgIHRoaXMubnVtMiA9IG51bTI7XG4gICAgfVxuICAgIGdldCBPcGVyYW5kKCk6c3RyaW5ne1xuICAgICAgICByZXR1cm4gdGhpcy5vcGVyYW5kO1xuICAgIH1cbiAgICBzZXQgT3BlcmFuZChvcGVyYW5kOnN0cmluZyl7XG4gICAgICAgIHRoaXMub3BlcmFuZCA9IG9wZXJhbmQ7XG4gICAgfSBcbiAgICBcbiAgICBcbiAgICBcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDYUEsU0FBUztFQU1sQixtQkFBWUMsSUFBVyxFQUFFQyxJQUFXLEVBQUVDLE9BQWMsRUFBRTtJQUFBO0lBQUEsNENBTC9CLENBQUMsQ0FBQztJQUFBLDRDQUNELENBQUMsQ0FBQztJQUFBLCtDQUNBLEVBQUU7SUFJeEIsSUFBSSxDQUFDRixJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87RUFDMUI7RUFBQztJQUFBO0lBQUEsS0FFRCxlQUFpQjtNQUNiLE9BQU8sSUFBSSxDQUFDRixJQUFJO0lBQ3BCLENBQUM7SUFBQSxLQUVELGFBQVNBLElBQVcsRUFBQztNQUNqQixJQUFJLENBQUNBLElBQUksR0FBR0EsSUFBSTtJQUNwQjtFQUFDO0lBQUE7SUFBQSxLQUVELGVBQWlCO01BQ2IsT0FBTyxJQUFJLENBQUNDLElBQUk7SUFDcEIsQ0FBQztJQUFBLEtBQ0QsYUFBU0EsSUFBVyxFQUFDO01BQ2pCLElBQUksQ0FBQ0EsSUFBSSxHQUFHQSxJQUFJO0lBQ3BCO0VBQUM7SUFBQTtJQUFBLEtBQ0QsZUFBb0I7TUFDaEIsT0FBTyxJQUFJLENBQUNDLE9BQU87SUFDdkIsQ0FBQztJQUFBLEtBQ0QsYUFBWUEsT0FBYyxFQUFDO01BQ3ZCLElBQUksQ0FBQ0EsT0FBTyxHQUFHQSxPQUFPO0lBQzFCO0VBQUM7RUFBQTtBQUFBO0FBQUEifQ==
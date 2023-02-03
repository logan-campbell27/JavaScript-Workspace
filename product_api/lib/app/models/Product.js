"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Product = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var Product = /*#__PURE__*/function () {
  function Product(id, name, desc, price, quantity) {
    (0, _classCallCheck2.default)(this, Product);
    (0, _defineProperty2.default)(this, "id", -1);
    (0, _defineProperty2.default)(this, "name", "");
    (0, _defineProperty2.default)(this, "desc", "");
    (0, _defineProperty2.default)(this, "price", -1);
    (0, _defineProperty2.default)(this, "quantity", -1);
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.quantity = quantity;
  }
  (0, _createClass2.default)(Product, [{
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
    key: "Desc",
    get: function get() {
      return this.desc;
    },
    set: function set(desc) {
      this.desc = desc;
    }
  }, {
    key: "Price",
    get: function get() {
      return this.price;
    },
    set: function set(price) {
      this.price = price;
    }
  }, {
    key: "Quantity",
    get: function get() {
      return this.quantity;
    },
    set: function set(quantity) {
      this.quantity = quantity;
    }
  }]);
  return Product;
}();
exports.Product = Product;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQcm9kdWN0IiwiaWQiLCJuYW1lIiwiZGVzYyIsInByaWNlIiwicXVhbnRpdHkiXSwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvbW9kZWxzL1Byb2R1Y3QudHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgUHJvZHVjdHtcbiAgICBwcml2YXRlIGlkOiBudW1iZXIgPSAtMTtcbiAgICBwcml2YXRlIG5hbWU6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBkZXNjOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgcHJpY2U6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgcXVhbnRpdHk6IG51bWJlciA9IC0xO1xuXG4gICAgY29uc3RydWN0b3IoaWQ6bnVtYmVyLCBuYW1lOnN0cmluZywgZGVzYzpzdHJpbmcsIHByaWNlOm51bWJlciwgcXVhbnRpdHk6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmRlc2MgPSBkZXNjO1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgICAgIHRoaXMucXVhbnRpdHkgPSBxdWFudGl0eTtcbiAgICB9XG5cbiAgICBnZXQgSWQoKTpudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLmlkO1xuICAgIH1cblxuICAgIHNldCBJZChpZDpudW1iZXIpe1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgfVxuXG4gICAgZ2V0IE5hbWUoKTpzdHJpbmd7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuICAgIHNldCBOYW1lKG5hbWU6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB9XG4gICAgZ2V0IERlc2MoKTpzdHJpbmd7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2M7XG4gICAgfVxuICAgIHNldCBEZXNjKGRlc2M6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5kZXNjID0gZGVzYztcbiAgICB9IFxuICAgIGdldCBQcmljZSgpOm51bWJlcntcbiAgICAgICAgcmV0dXJuIHRoaXMucHJpY2U7XG4gICAgfVxuICAgIHNldCBQcmljZShwcmljZTpudW1iZXIpe1xuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gICAgfVxuICAgICBnZXQgUXVhbnRpdHkoKTpudW1iZXJ7XG4gICAgICAgIHJldHVybiB0aGlzLnF1YW50aXR5O1xuICAgIH1cbiAgICBzZXQgUXVhbnRpdHkocXVhbnRpdHk6bnVtYmVyKXtcbiAgICAgICAgdGhpcy5xdWFudGl0eSA9IHF1YW50aXR5O1xuICAgIH1cbiAgICBcbiAgICBcbn0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFDYUEsT0FBTztFQU9oQixpQkFBWUMsRUFBUyxFQUFFQyxJQUFXLEVBQUVDLElBQVcsRUFBRUMsS0FBWSxFQUFFQyxRQUFlLEVBQUM7SUFBQTtJQUFBLDBDQU4xRCxDQUFDLENBQUM7SUFBQSw0Q0FDQSxFQUFFO0lBQUEsNENBQ0YsRUFBRTtJQUFBLDZDQUNELENBQUMsQ0FBQztJQUFBLGdEQUNDLENBQUMsQ0FBQztJQUd6QixJQUFJLENBQUNKLEVBQUUsR0FBR0EsRUFBRTtJQUNaLElBQUksQ0FBQ0MsSUFBSSxHQUFHQSxJQUFJO0lBQ2hCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQSxJQUFJO0lBQ2hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0VBQzVCO0VBQUM7SUFBQTtJQUFBLEtBRUQsZUFBZTtNQUNYLE9BQU8sSUFBSSxDQUFDSixFQUFFO0lBQ2xCLENBQUM7SUFBQSxLQUVELGFBQU9BLEVBQVMsRUFBQztNQUNiLElBQUksQ0FBQ0EsRUFBRSxHQUFHQSxFQUFFO0lBQ2hCO0VBQUM7SUFBQTtJQUFBLEtBRUQsZUFBaUI7TUFDYixPQUFPLElBQUksQ0FBQ0MsSUFBSTtJQUNwQixDQUFDO0lBQUEsS0FDRCxhQUFTQSxJQUFXLEVBQUM7TUFDakIsSUFBSSxDQUFDQSxJQUFJLEdBQUdBLElBQUk7SUFDcEI7RUFBQztJQUFBO0lBQUEsS0FDRCxlQUFpQjtNQUNiLE9BQU8sSUFBSSxDQUFDQyxJQUFJO0lBQ3BCLENBQUM7SUFBQSxLQUNELGFBQVNBLElBQVcsRUFBQztNQUNqQixJQUFJLENBQUNBLElBQUksR0FBR0EsSUFBSTtJQUNwQjtFQUFDO0lBQUE7SUFBQSxLQUNELGVBQWtCO01BQ2QsT0FBTyxJQUFJLENBQUNDLEtBQUs7SUFDckIsQ0FBQztJQUFBLEtBQ0QsYUFBVUEsS0FBWSxFQUFDO01BQ25CLElBQUksQ0FBQ0EsS0FBSyxHQUFHQSxLQUFLO0lBQ3RCO0VBQUM7SUFBQTtJQUFBLEtBQ0EsZUFBcUI7TUFDbEIsT0FBTyxJQUFJLENBQUNDLFFBQVE7SUFDeEIsQ0FBQztJQUFBLEtBQ0QsYUFBYUEsUUFBZSxFQUFDO01BQ3pCLElBQUksQ0FBQ0EsUUFBUSxHQUFHQSxRQUFRO0lBQzVCO0VBQUM7RUFBQTtBQUFBO0FBQUEifQ==
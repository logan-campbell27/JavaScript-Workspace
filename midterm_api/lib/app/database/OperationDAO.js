"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OperationDAO = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var OperationDAO = /*#__PURE__*/function () {
  function OperationDAO() {
    (0, _classCallCheck2.default)(this, OperationDAO);
  }

  /*this.connection = mysql.createConnection({
      host: this.host,
      user: this.username,
      password: this.password,
      port: this.port,
      database: "music_api_data"
  });*/
  (0, _createClass2.default)(OperationDAO, [{
    key: "create",
    value: function create(operation, callback) {
      if (operation.Operand == "+") {
        callback(operation.Num1 + operation.Num2);
      }
      if (operation.Operand == "-") {
        callback(operation.Num1 - operation.Num2);
      }
      if (operation.Operand == "/") {
        callback(operation.Num1 / operation.Num2);
      }
      if (operation.Operand == "*") {
        callback(operation.Num1 * operation.Num2);
      }
      callback(-1);
    }
  }]);
  return OperationDAO;
}();
exports.OperationDAO = OperationDAO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPcGVyYXRpb25EQU8iLCJvcGVyYXRpb24iLCJjYWxsYmFjayIsIk9wZXJhbmQiLCJOdW0xIiwiTnVtMiJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2FwcC9kYXRhYmFzZS9PcGVyYXRpb25EQU8udHMiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBPcGVyYXRpb24gfSBmcm9tIFwiLi4vbW9kZWxzL09wZXJhdGlvblwiO1xuXG5pbXBvcnQgKiBhcyBteXNxbCBmcm9tIFwibXlzcWxcIjtcblxuaW1wb3J0ICogYXMgdXRpbCBmcm9tIFwidXRpbFwiO1xuaW1wb3J0IHsgY29sbGFwc2VUZXh0Q2hhbmdlUmFuZ2VzQWNyb3NzTXVsdGlwbGVWZXJzaW9ucyB9IGZyb20gXCJ0eXBlc2NyaXB0XCI7XG5cbmV4cG9ydCBjbGFzcyBPcGVyYXRpb25EQU97XG4gICBcbiAgICBjb25zdHJ1Y3Rvcigpe31cblxuICAgICAgICAvKnRoaXMuY29ubmVjdGlvbiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xuICAgICAgICAgICAgaG9zdDogdGhpcy5ob3N0LFxuICAgICAgICAgICAgdXNlcjogdGhpcy51c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICAgICAgcG9ydDogdGhpcy5wb3J0LFxuICAgICAgICAgICAgZGF0YWJhc2U6IFwibXVzaWNfYXBpX2RhdGFcIlxuICAgICAgICB9KTsqL1xuXG4gICAgXG4gICAgXG4gICAgcHVibGljIGNyZWF0ZShvcGVyYXRpb246T3BlcmF0aW9uLCBjYWxsYmFjazogYW55KXtcblxuICAgICAgICBpZihvcGVyYXRpb24uT3BlcmFuZCA9PSBcIitcIil7XG4gICAgICAgICAgICBjYWxsYmFjayhvcGVyYXRpb24uTnVtMStvcGVyYXRpb24uTnVtMik7XG4gICAgICAgIH1cbiAgICAgICAgaWYob3BlcmF0aW9uLk9wZXJhbmQgPT0gXCItXCIpe1xuICAgICAgICAgICAgY2FsbGJhY2sob3BlcmF0aW9uLk51bTEtb3BlcmF0aW9uLk51bTIpO1xuICAgICAgICB9XG4gICAgICAgIGlmKG9wZXJhdGlvbi5PcGVyYW5kID09IFwiL1wiKXtcbiAgICAgICAgICAgIGNhbGxiYWNrKG9wZXJhdGlvbi5OdW0xL29wZXJhdGlvbi5OdW0yKTtcbiAgICAgICAgfVxuICAgICAgICBpZihvcGVyYXRpb24uT3BlcmFuZCA9PSBcIipcIil7XG4gICAgICAgICAgICBjYWxsYmFjayhvcGVyYXRpb24uTnVtMSpvcGVyYXRpb24uTnVtMik7XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2soLTEpOyAgICAgICAgXG5cbiAgICB9XG59XG5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0lBUWFBLFlBQVk7RUFFckIsd0JBQWE7SUFBQTtFQUFDOztFQUVWO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTlE7SUFBQTtJQUFBLE9BVUosZ0JBQWNDLFNBQW1CLEVBQUVDLFFBQWEsRUFBQztNQUU3QyxJQUFHRCxTQUFTLENBQUNFLE9BQU8sSUFBSSxHQUFHLEVBQUM7UUFDeEJELFFBQVEsQ0FBQ0QsU0FBUyxDQUFDRyxJQUFJLEdBQUNILFNBQVMsQ0FBQ0ksSUFBSSxDQUFDO01BQzNDO01BQ0EsSUFBR0osU0FBUyxDQUFDRSxPQUFPLElBQUksR0FBRyxFQUFDO1FBQ3hCRCxRQUFRLENBQUNELFNBQVMsQ0FBQ0csSUFBSSxHQUFDSCxTQUFTLENBQUNJLElBQUksQ0FBQztNQUMzQztNQUNBLElBQUdKLFNBQVMsQ0FBQ0UsT0FBTyxJQUFJLEdBQUcsRUFBQztRQUN4QkQsUUFBUSxDQUFDRCxTQUFTLENBQUNHLElBQUksR0FBQ0gsU0FBUyxDQUFDSSxJQUFJLENBQUM7TUFDM0M7TUFDQSxJQUFHSixTQUFTLENBQUNFLE9BQU8sSUFBSSxHQUFHLEVBQUM7UUFDeEJELFFBQVEsQ0FBQ0QsU0FBUyxDQUFDRyxJQUFJLEdBQUNILFNBQVMsQ0FBQ0ksSUFBSSxDQUFDO01BQzNDO01BQ0FILFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVoQjtFQUFDO0VBQUE7QUFBQTtBQUFBIn0=
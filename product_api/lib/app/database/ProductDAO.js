"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProductDAO = void 0;
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _Product = require("../models/Product");
var mysql = _interopRequireWildcard(require("mysql"));
var util = _interopRequireWildcard(require("util"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var ProductDAO = /*#__PURE__*/function () {
  function ProductDAO(host, port, username, password) {
    (0, _classCallCheck2.default)(this, ProductDAO);
    (0, _defineProperty2.default)(this, "host", "");
    (0, _defineProperty2.default)(this, "port", -1);
    (0, _defineProperty2.default)(this, "username", "");
    (0, _defineProperty2.default)(this, "password", "");
    (0, _defineProperty2.default)(this, "pool", void 0);
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
    this.pool = mysql.createPool({
      host: this.host,
      port: this.port,
      user: this.username,
      password: this.password,
      database: 'product_api_data'
    });
    module.exports = this.pool;

    /*this.connection = mysql.createConnection({
        host: this.host,
        user: this.username,
        password: this.password,
        port: this.port,
        database: "music_api_data"
    });*/
  }
  (0, _createClass2.default)(ProductDAO, [{
    key: "findAllProducts",
    value: function findAllProducts(callback) {
      var products = [];
      this.pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query('SELECT * FROM PRODUCTS', function (err, rows, fields) {
          connection.release();
          if (err) throw err;
          for (var x = 0; x < rows.length; ++x) {
            products.push(new _Product.Product(x, rows[x].name, rows[x].description, rows[x].price, rows[x].quantity));
          }
          callback(products);
        });
      });
    }
  }, {
    key: "findProduct",
    value: function findProduct(productid, callback) {
      var products = [];
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(err, connection) {
          var result, x;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                connection.release();
                if (!err) {
                  _context.next = 3;
                  break;
                }
                throw err;
              case 3:
                connection.query = util.promisify(connection.query);
                _context.next = 6;
                return connection.query('SELECT * FROM PRODUCTS WHERE ID=?', [productid]);
              case 6:
                result = _context.sent;
                for (x = 0; x < result.length; ++x) {
                  products.push(new _Product.Product(result[x].id, result[x].name, result[x].description, result[x].price, result[x].quantity));
                }
                ;
                callback(products);
              case 10:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "create",
    value: function create(product, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(err, connection) {
          var p, result;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!err) {
                  _context2.next = 2;
                  break;
                }
                throw err;
              case 2:
                connection.query = util.promisify(connection.query);
                p = new _Product.Product(product.Id, product.Name, product.Desc, product.Price, product.Quantity);
                _context2.next = 6;
                return connection.query('INSERT INTO `Products` (`id`, `name`, `description`, `price`, `quantity`) VALUES (?,?,?,?,?)', [p.Id, p.Name, p.Desc, p.Price, p.Quantity]);
              case 6:
                result = _context2.sent;
                if (result.affectedRows != 1) {
                  callback(-1);
                }
                callback(result);
              case 9:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "update",
    value: function update(product, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(err, connection) {
          var result;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (!err) {
                  _context3.next = 2;
                  break;
                }
                throw err;
              case 2:
                connection.query = util.promisify(connection.query);
                _context3.next = 5;
                return connection.query('UPDATE PRODUCTS SET `name`=?, `description`=?, `price`=?, `quantity`=? WHERE ID=?', [product.Name, product.Desc, product.Price, product.Quantity, product.Id]);
              case 5:
                result = _context3.sent;
                if (result.affectedRows != 1) {
                  callback(-1);
                }
                callback(result);
              case 8:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "delete",
    value: function _delete(productId, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(err, connection) {
          var result;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                connection.release();
                if (!err) {
                  _context4.next = 3;
                  break;
                }
                throw err;
              case 3:
                connection.query = util.promisify(connection.query);
                _context4.next = 6;
                return connection.query('DELETE FROM PRODUCT WHERE ID=?', [productId]);
              case 6:
                result = _context4.sent;
                callback(result);
              case 8:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }));
        return function (_x7, _x8) {
          return _ref4.apply(this, arguments);
        };
      }());
    }
  }]);
  return ProductDAO;
}();
exports.ProductDAO = ProductDAO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQcm9kdWN0REFPIiwiaG9zdCIsInBvcnQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwicG9vbCIsIm15c3FsIiwiY3JlYXRlUG9vbCIsInVzZXIiLCJkYXRhYmFzZSIsIm1vZHVsZSIsImV4cG9ydHMiLCJjYWxsYmFjayIsInByb2R1Y3RzIiwiZ2V0Q29ubmVjdGlvbiIsImVyciIsImNvbm5lY3Rpb24iLCJxdWVyeSIsInJvd3MiLCJmaWVsZHMiLCJyZWxlYXNlIiwieCIsImxlbmd0aCIsInB1c2giLCJQcm9kdWN0IiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJxdWFudGl0eSIsInByb2R1Y3RpZCIsInV0aWwiLCJwcm9taXNpZnkiLCJyZXN1bHQiLCJpZCIsInByb2R1Y3QiLCJwIiwiSWQiLCJOYW1lIiwiRGVzYyIsIlByaWNlIiwiUXVhbnRpdHkiLCJhZmZlY3RlZFJvd3MiLCJwcm9kdWN0SWQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvZGF0YWJhc2UvUHJvZHVjdERBTy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiLi4vbW9kZWxzL1Byb2R1Y3RcIjtcblxuaW1wb3J0ICogYXMgbXlzcWwgZnJvbSBcIm15c3FsXCI7XG5cbmltcG9ydCAqIGFzIHV0aWwgZnJvbSBcInV0aWxcIjtcbmltcG9ydCB7IGNvbGxhcHNlVGV4dENoYW5nZVJhbmdlc0Fjcm9zc011bHRpcGxlVmVyc2lvbnMgfSBmcm9tIFwidHlwZXNjcmlwdFwiO1xuXG5leHBvcnQgY2xhc3MgUHJvZHVjdERBT3tcbiAgICBwcml2YXRlIGhvc3Q6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBwb3J0OiBudW1iZXIgPSAtMTtcbiAgICBwcml2YXRlIHVzZXJuYW1lOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgcGFzc3dvcmQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBwb29sO1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6c3RyaW5nLCBwb3J0OiBudW1iZXIsIHVzZXJuYW1lOnN0cmluZywgcGFzc3dvcmQ6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgICAgICAgdGhpcy5wb3J0ID0gcG9ydDtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG5cbiAgICAgICAgdGhpcy5wb29sID0gbXlzcWwuY3JlYXRlUG9vbCh7XG4gICAgICAgICAgICBob3N0OiB0aGlzLmhvc3QsXG4gICAgICAgICAgICBwb3J0OiB0aGlzLnBvcnQsXG4gICAgICAgICAgICB1c2VyOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICBkYXRhYmFzZTogJ3Byb2R1Y3RfYXBpX2RhdGEnXG4gICAgICAgIH0pO1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHRoaXMucG9vbDtcblxuICAgICAgICAvKnRoaXMuY29ubmVjdGlvbiA9IG15c3FsLmNyZWF0ZUNvbm5lY3Rpb24oe1xuICAgICAgICAgICAgaG9zdDogdGhpcy5ob3N0LFxuICAgICAgICAgICAgdXNlcjogdGhpcy51c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkLFxuICAgICAgICAgICAgcG9ydDogdGhpcy5wb3J0LFxuICAgICAgICAgICAgZGF0YWJhc2U6IFwibXVzaWNfYXBpX2RhdGFcIlxuICAgICAgICB9KTsqL1xuXG4gICAgfVxuXG4gICAgcHVibGljIGZpbmRBbGxQcm9kdWN0cyhjYWxsYmFjazogYW55KXtcblxuICAgICAgICAgbGV0IHByb2R1Y3RzOlByb2R1Y3RbXSA9IFtdO1xuXG4gICAgICAgICBcbiAgICAgICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGZ1bmN0aW9uKGVycjogYW55LCBjb25uZWN0aW9uOiBhbnkpe1xuICAgICAgICAgICAgaWYgKGVycikgdGhyb3cgZXJyXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gUFJPRFVDVFMnLCBmdW5jdGlvbihlcnI6YW55LCByb3dzOmFueSwgZmllbGRzOmFueSl7XG4gICAgICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG5cbiAgICAgICAgICAgICAgICBpZihlcnIpIHRocm93IGVyclxuICAgICAgICAgICAgICAgIGZvcihsZXQgeD0wOyB4PHJvd3MubGVuZ3RoOyArK3gpe1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0cy5wdXNoKG5ldyBQcm9kdWN0KHgsIHJvd3NbeF0ubmFtZSwgcm93c1t4XS5kZXNjcmlwdGlvbiwgcm93c1t4XS5wcmljZSwgcm93c1t4XS5xdWFudGl0eSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHByb2R1Y3RzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgcHVibGljIGZpbmRQcm9kdWN0KHByb2R1Y3RpZDpudW1iZXIsIGNhbGxiYWNrOiBhbnkpe1xuXG4gICAgICAgIGxldCBwcm9kdWN0czpQcm9kdWN0W10gPSBbXTtcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSl7XG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSBQUk9EVUNUUyBXSEVSRSBJRD0/JywgW3Byb2R1Y3RpZF0pXG4gICAgICAgICAgICAgICAgZm9yKGxldCB4PTA7IHg8cmVzdWx0Lmxlbmd0aDsgKyt4KXtcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHMucHVzaChuZXcgUHJvZHVjdChyZXN1bHRbeF0uaWQsIHJlc3VsdFt4XS5uYW1lLCByZXN1bHRbeF0uZGVzY3JpcHRpb24sIHJlc3VsdFt4XS5wcmljZSwgcmVzdWx0W3hdLnF1YW50aXR5KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgO1xuICAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgICAgICBjYWxsYmFjayhwcm9kdWN0cyk7XG4gICAgICAgIH0pO1xuXG5cbiAgICB9XG4gICAgXG4gICBcbiAgICBcbiAgICBwdWJsaWMgY3JlYXRlKHByb2R1Y3Q6UHJvZHVjdCwgY2FsbGJhY2s6IGFueSl7XG5cbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSl7XG4gICAgICAgICAgICAgICAgIC8vY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyXG4gICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgbGV0IHAgPSBuZXcgUHJvZHVjdChwcm9kdWN0LklkLCBwcm9kdWN0Lk5hbWUsIHByb2R1Y3QuRGVzYywgcHJvZHVjdC5QcmljZSwgcHJvZHVjdC5RdWFudGl0eSk7XG4gICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdJTlNFUlQgSU5UTyBgUHJvZHVjdHNgIChgaWRgLCBgbmFtZWAsIGBkZXNjcmlwdGlvbmAsIGBwcmljZWAsIGBxdWFudGl0eWApIFZBTFVFUyAoPyw/LD8sPyw/KScsW3AuSWQsIHAuTmFtZSwgcC5EZXNjLCBwLlByaWNlLCBwLlF1YW50aXR5XSk7XG4gICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5hZmZlY3RlZFJvd3MgIT0gMSl7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKC0xKVxuICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgIH1cbiAgICBwdWJsaWMgdXBkYXRlKHByb2R1Y3Q6UHJvZHVjdCwgY2FsbGJhY2s6IGFueSl7XG5cbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSl7XG4gICAgICAgICAgICAvL2Nvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdVUERBVEUgUFJPRFVDVFMgU0VUIGBuYW1lYD0/LCBgZGVzY3JpcHRpb25gPT8sIGBwcmljZWA9PywgYHF1YW50aXR5YD0/IFdIRVJFIElEPT8nLFtwcm9kdWN0Lk5hbWUscHJvZHVjdC5EZXNjLHByb2R1Y3QuUHJpY2UscHJvZHVjdC5RdWFudGl0eSxwcm9kdWN0LklkXSk7XG4gICAgICAgICAgICBpZihyZXN1bHQuYWZmZWN0ZWRSb3dzICE9ICAxKXtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygtMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XG5cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBkZWxldGUocHJvZHVjdElkOm51bWJlciwgY2FsbGJhY2s6IGFueSl7XG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGFzeW5jIGZ1bmN0aW9uKGVycjogYW55LCBjb25uZWN0aW9uOiBhbnkpe1xuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgICAgICBpZihlcnIpIHRocm93IGVyclxuICAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSA9IHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpO1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ0RFTEVURSBGUk9NIFBST0RVQ1QgV0hFUkUgSUQ9PycsW3Byb2R1Y3RJZF0pO1xuICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFFQTtBQUE2QjtBQUFBO0FBQUEsK0NBSjdCO0FBQUEsSUFPYUEsVUFBVTtFQU1uQixvQkFBWUMsSUFBVyxFQUFFQyxJQUFZLEVBQUVDLFFBQWUsRUFBRUMsUUFBZSxFQUFDO0lBQUE7SUFBQSw0Q0FMakQsRUFBRTtJQUFBLDRDQUNGLENBQUMsQ0FBQztJQUFBLGdEQUNFLEVBQUU7SUFBQSxnREFDRixFQUFFO0lBQUE7SUFHekIsSUFBSSxDQUFDSCxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBLElBQUk7SUFDaEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7SUFDeEIsSUFBSSxDQUFDQyxRQUFRLEdBQUdBLFFBQVE7SUFFeEIsSUFBSSxDQUFDQyxJQUFJLEdBQUdDLEtBQUssQ0FBQ0MsVUFBVSxDQUFDO01BQ3pCTixJQUFJLEVBQUUsSUFBSSxDQUFDQSxJQUFJO01BQ2ZDLElBQUksRUFBRSxJQUFJLENBQUNBLElBQUk7TUFDZk0sSUFBSSxFQUFFLElBQUksQ0FBQ0wsUUFBUTtNQUNuQkMsUUFBUSxFQUFFLElBQUksQ0FBQ0EsUUFBUTtNQUN2QkssUUFBUSxFQUFFO0lBQ2QsQ0FBQyxDQUFDO0lBQ0ZDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHLElBQUksQ0FBQ04sSUFBSTs7SUFFMUI7QUFDUjtBQUNBO0FBQ0E7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
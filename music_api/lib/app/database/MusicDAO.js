"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MusicDAO = void 0;
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _Album = require("../models/Album");
var _Artist = require("../models/Artist");
var _Track = require("../models/Track");
var mysql = _interopRequireWildcard(require("mysql"));
var util = _interopRequireWildcard(require("util"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var MusicDAO = /*#__PURE__*/function () {
  function MusicDAO(host, port, username, password) {
    (0, _classCallCheck2.default)(this, MusicDAO);
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
      database: 'music_api_data'
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
  (0, _createClass2.default)(MusicDAO, [{
    key: "findArtists",
    value: function findArtists(callback) {
      var artists = [];
      this.pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query('SELECT * FROM ARTIST', function (err, rows, fields) {
          connection.release();
          if (err) throw err;
          for (var x = 0; x < rows.length; ++x) {
            artists.push(new _Artist.Artist(x, rows[x].name, rows[x].albums));
          }
          callback(artists);
        });
      });
    }
  }, {
    key: "findAlbums",
    value: function findAlbums(artistid, callback) {
      var albums = [];
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(err, connection) {
          var result, x, albumId, tracks, result1, y;
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
                return connection.query('SELECT * FROM ALBUM WHERE ARTIST_ID=?', [artistid]);
              case 6:
                result = _context.sent;
                x = 0;
              case 8:
                if (!(x < result.length)) {
                  _context.next = 19;
                  break;
                }
                albumId = result[x].id;
                tracks = [];
                _context.next = 13;
                return connection.query('SELECT *  FROM TRACK WHERE ALBUM_ID=?', [albumId]);
              case 13:
                result1 = _context.sent;
                for (y = 0; y < result1.length; ++y) {
                  tracks.push(new _Track.Track(result1[y].id, result1[y].track_name, result1[y].track_number, result1[y].track_lyrics));
                }
                albums.push(new _Album.Album(result[x].id, result[x].album_name, result[x].album_description, result[x].album_year, tracks));
              case 16:
                ++x;
                _context.next = 8;
                break;
              case 19:
                callback(albums);
              case 20:
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
    key: "findAllAlbums",
    value: function findAllAlbums(callback) {
      var albums = [];
      this.pool.getConnection(function (err, connection) {
        if (err) throw err;
        connection.query('SELECT * FROM ALBUM', function (err, rows, fields) {
          var _loop = function _loop() {
            var tracks = [];
            connection.query('SELECT * FROM TRACK', function (err, rows, fields) {
              for (var y = 0; y < rows.length; ++y) {
                tracks.push(new _Track.Track(rows[y].id, rows[y].track_name, rows[y].track_number, rows[y].track_lyrics));
              }
            });
            albums.push(new _Album.Album(x, rows[x].album_name, rows[x].album_description, rows[x].album_year, tracks));
          };
          for (var x = 0; x < rows.length; ++x) {
            _loop();
          }
          callback(albums);
        });
      });
    }
  }, {
    key: "findAlbum",
    value: function findAlbum(albumId, callback) {
      var albums = [];
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(err, connection) {
          var result, x, tracks, result1, y;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                connection.release();
                if (!err) {
                  _context2.next = 3;
                  break;
                }
                throw err;
              case 3:
                connection.query = util.promisify(connection.query);
                _context2.next = 6;
                return connection.query('SELECT * FROM ALBUM WHERE ID=?', [albumId]);
              case 6:
                result = _context2.sent;
                x = 0;
              case 8:
                if (!(x < result.length)) {
                  _context2.next = 19;
                  break;
                }
                tracks = [];
                _context2.next = 12;
                return connection.query('SELECT *  FROM TRACK WHERE ALBUM_ID=?', [albumId]);
              case 12:
                result1 = _context2.sent;
                for (y = 0; y < result1.length; ++y) {
                  tracks.push(new _Track.Track(result1[y].id, result1[y].track_name, result1[y].track_number, result1[y].track_lyrics));
                }
                albums.push(new _Album.Album(result[x].id, result[x].album_name, result[x].album_description, result[x].album_year, tracks));
                callback(albums);
              case 16:
                ++x;
                _context2.next = 8;
                break;
              case 19:
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
    key: "findAlbumsByDescription",
    value: function findAlbumsByDescription(search, callback) {
      var albums = [];
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(err, connection) {
          var result, x, albumId, tracks, result1, y;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                connection.release();
                if (!err) {
                  _context3.next = 3;
                  break;
                }
                throw err;
              case 3:
                connection.query = util.promisify(connection.query);
                _context3.next = 6;
                return connection.query('SELECT * FROM ALBUM WHERE ALBUM_DESCRIPTION LIKE ?', [search]);
              case 6:
                result = _context3.sent;
                x = 0;
              case 8:
                if (!(x < result.length)) {
                  _context3.next = 20;
                  break;
                }
                albumId = result[x].id;
                tracks = [];
                _context3.next = 13;
                return connection.query('SELECT *  FROM TRACK WHERE ALBUM_ID=?', [albumId]);
              case 13:
                result1 = _context3.sent;
                for (y = 0; y < result1.length; ++y) {
                  tracks.push(new _Track.Track(result1[y].id, result1[y].track_name, result1[y].track_number, result1[y].track_lyrics));
                }
                albums.push(new _Album.Album(result[x].id, result[x].album_name, result[x].album_description, result[x].album_year, tracks));
                callback(albums);
              case 17:
                ++x;
                _context3.next = 8;
                break;
              case 20:
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
    key: "create",
    value: function create(album, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(err, connection) {
          var a, result;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                if (!err) {
                  _context4.next = 2;
                  break;
                }
                throw err;
              case 2:
                connection.query = util.promisify(connection.query);
                a = new _Album.Album(album.Id, album.Title, album.Description, album.Year, album.Tracks);
                _context4.next = 6;
                return connection.query('INSERT INTO `Album` (`id`, `album_name`, `album_year`, `album_description`, `Artist_id`) VALUES (?,?,?,?,?)', [a.Id, a.Title, a.Year, a.Description, 1]);
              case 6:
                result = _context4.sent;
                if (result.affectedRows != 1) {
                  callback(-1);
                }
                callback(result);
              case 9:
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
  }, {
    key: "update",
    value: function update(album, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(err, connection) {
          var result;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                if (!err) {
                  _context5.next = 2;
                  break;
                }
                throw err;
              case 2:
                connection.query = util.promisify(connection.query);
                _context5.next = 5;
                return connection.query('UPDATE ALBUM SET `album_name`=?, `album_year`=?, `album_description`=? WHERE ID=?', [album.Title, album.Year, album.Description, album.Id]);
              case 5:
                result = _context5.sent;
                if (result.affectedRows != 1) {
                  callback(-1);
                }
                callback(result);
              case 8:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }));
        return function (_x9, _x10) {
          return _ref5.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "delete",
    value: function _delete(albumId, callback) {
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(err, connection) {
          var result;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                connection.release();
                if (!err) {
                  _context6.next = 3;
                  break;
                }
                throw err;
              case 3:
                connection.query = util.promisify(connection.query);
                _context6.next = 6;
                return connection.query('DELETE FROM ALBUM WHERE ID=?', [albumId]);
              case 6:
                result = _context6.sent;
                callback(result);
              case 8:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }));
        return function (_x11, _x12) {
          return _ref6.apply(this, arguments);
        };
      }());
    }
  }]);
  return MusicDAO;
}();
exports.MusicDAO = MusicDAO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJNdXNpY0RBTyIsImhvc3QiLCJwb3J0IiwidXNlcm5hbWUiLCJwYXNzd29yZCIsInBvb2wiLCJteXNxbCIsImNyZWF0ZVBvb2wiLCJ1c2VyIiwiZGF0YWJhc2UiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2FsbGJhY2siLCJhcnRpc3RzIiwiZ2V0Q29ubmVjdGlvbiIsImVyciIsImNvbm5lY3Rpb24iLCJxdWVyeSIsInJvd3MiLCJmaWVsZHMiLCJyZWxlYXNlIiwieCIsImxlbmd0aCIsInB1c2giLCJBcnRpc3QiLCJuYW1lIiwiYWxidW1zIiwiYXJ0aXN0aWQiLCJ1dGlsIiwicHJvbWlzaWZ5IiwicmVzdWx0IiwiYWxidW1JZCIsImlkIiwidHJhY2tzIiwicmVzdWx0MSIsInkiLCJUcmFjayIsInRyYWNrX25hbWUiLCJ0cmFja19udW1iZXIiLCJ0cmFja19seXJpY3MiLCJBbGJ1bSIsImFsYnVtX25hbWUiLCJhbGJ1bV9kZXNjcmlwdGlvbiIsImFsYnVtX3llYXIiLCJzZWFyY2giLCJhbGJ1bSIsImEiLCJJZCIsIlRpdGxlIiwiRGVzY3JpcHRpb24iLCJZZWFyIiwiVHJhY2tzIiwiYWZmZWN0ZWRSb3dzIl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL2RhdGFiYXNlL011c2ljREFPLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFsYnVtIH0gZnJvbSBcIi4uL21vZGVscy9BbGJ1bVwiO1xuaW1wb3J0IHsgQXJ0aXN0IH0gZnJvbSBcIi4uL21vZGVscy9BcnRpc3RcIjtcbmltcG9ydCB7IFRyYWNrIH0gZnJvbSBcIi4uL21vZGVscy9UcmFja1wiO1xuXG5pbXBvcnQgKiBhcyBteXNxbCBmcm9tIFwibXlzcWxcIjtcblxuaW1wb3J0ICogYXMgdXRpbCBmcm9tIFwidXRpbFwiO1xuaW1wb3J0IHsgY29sbGFwc2VUZXh0Q2hhbmdlUmFuZ2VzQWNyb3NzTXVsdGlwbGVWZXJzaW9ucyB9IGZyb20gXCJ0eXBlc2NyaXB0XCI7XG5cbmV4cG9ydCBjbGFzcyBNdXNpY0RBT3tcbiAgICBwcml2YXRlIGhvc3Q6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBwb3J0OiBudW1iZXIgPSAtMTtcbiAgICBwcml2YXRlIHVzZXJuYW1lOiBzdHJpbmcgPSBcIlwiO1xuICAgIHByaXZhdGUgcGFzc3dvcmQ6IHN0cmluZyA9IFwiXCI7XG4gICAgcHJpdmF0ZSBwb29sO1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6c3RyaW5nLCBwb3J0OiBudW1iZXIsIHVzZXJuYW1lOnN0cmluZywgcGFzc3dvcmQ6c3RyaW5nKXtcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgICAgICAgdGhpcy5wb3J0ID0gcG9ydDtcbiAgICAgICAgdGhpcy51c2VybmFtZSA9IHVzZXJuYW1lO1xuICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XG5cbiAgICAgICAgdGhpcy5wb29sID0gbXlzcWwuY3JlYXRlUG9vbCh7XG4gICAgICAgICAgICBob3N0OiB0aGlzLmhvc3QsXG4gICAgICAgICAgICBwb3J0OiB0aGlzLnBvcnQsXG4gICAgICAgICAgICB1c2VyOiB0aGlzLnVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXG4gICAgICAgICAgICBkYXRhYmFzZTogJ211c2ljX2FwaV9kYXRhJ1xuICAgICAgICB9KTtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSB0aGlzLnBvb2w7XG5cbiAgICAgICAgLyp0aGlzLmNvbm5lY3Rpb24gPSBteXNxbC5jcmVhdGVDb25uZWN0aW9uKHtcbiAgICAgICAgICAgIGhvc3Q6IHRoaXMuaG9zdCxcbiAgICAgICAgICAgIHVzZXI6IHRoaXMudXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZDogdGhpcy5wYXNzd29yZCxcbiAgICAgICAgICAgIHBvcnQ6IHRoaXMucG9ydCxcbiAgICAgICAgICAgIGRhdGFiYXNlOiBcIm11c2ljX2FwaV9kYXRhXCJcbiAgICAgICAgfSk7Ki9cblxuICAgIH1cblxuICAgIHB1YmxpYyBmaW5kQXJ0aXN0cyhjYWxsYmFjazogYW55KXtcblxuICAgICAgICAgbGV0IGFydGlzdHM6QXJ0aXN0W10gPSBbXTtcblxuICAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihmdW5jdGlvbihlcnI6IGFueSwgY29ubmVjdGlvbjogYW55KXtcbiAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVyclxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIEFSVElTVCcsIGZ1bmN0aW9uKGVycjphbnksIHJvd3M6YW55LCBmaWVsZHM6YW55KXtcbiAgICAgICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcblxuICAgICAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyXG4gICAgICAgICAgICAgICAgZm9yKGxldCB4PTA7IHg8cm93cy5sZW5ndGg7ICsreCl7XG4gICAgICAgICAgICAgICAgICAgIGFydGlzdHMucHVzaChuZXcgQXJ0aXN0KHgsIHJvd3NbeF0ubmFtZSwgcm93c1t4XS5hbGJ1bXMpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjYWxsYmFjayhhcnRpc3RzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgfSk7XG5cbiAgICB9XG4gICAgcHVibGljIGZpbmRBbGJ1bXMoYXJ0aXN0aWQ6bnVtYmVyLCBjYWxsYmFjazogYW55KXtcblxuICAgICAgICBsZXQgYWxidW1zOkFsYnVtW10gPSBbXTtcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSl7XG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gdXRpbC5wcm9taXNpZnkoY29ubmVjdGlvbi5xdWVyeSk7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSBBTEJVTSBXSEVSRSBBUlRJU1RfSUQ9PycsIFthcnRpc3RpZF0pO1xuICAgICAgICAgICAgZm9yKGxldCB4PTA7IHg8cmVzdWx0Lmxlbmd0aDsgKyt4KXtcbiAgICAgICAgICAgICAgICBsZXQgYWxidW1JZCA9IHJlc3VsdFt4XS5pZDtcbiAgICAgICAgICAgICAgICBsZXQgdHJhY2tzOiBUcmFja1tdID0gW107XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdDEgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiAgRlJPTSBUUkFDSyBXSEVSRSBBTEJVTV9JRD0/JyxbYWxidW1JZF0pO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgeT0wOyB5PHJlc3VsdDEubGVuZ3RoOysreSl7XG4gICAgICAgICAgICAgICAgICAgIHRyYWNrcy5wdXNoKG5ldyBUcmFjayhyZXN1bHQxW3ldLmlkLCByZXN1bHQxW3ldLnRyYWNrX25hbWUsIHJlc3VsdDFbeV0udHJhY2tfbnVtYmVyLCByZXN1bHQxW3ldLnRyYWNrX2x5cmljcykpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFsYnVtcy5wdXNoKG5ldyBBbGJ1bShyZXN1bHRbeF0uaWQsIHJlc3VsdFt4XS5hbGJ1bV9uYW1lLCByZXN1bHRbeF0uYWxidW1fZGVzY3JpcHRpb24sIHJlc3VsdFt4XS5hbGJ1bV95ZWFyLCB0cmFja3MpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2soYWxidW1zKTtcbiAgICAgICAgfSk7XG5cblxuICAgIH1cbiAgICBwdWJsaWMgZmluZEFsbEFsYnVtcyhjYWxsYmFjazogYW55KXtcblxuICAgICAgICBsZXQgYWxidW1zOkFsYnVtW10gPSBbXTtcblxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihmdW5jdGlvbihlcnI6IGFueSwgY29ubmVjdGlvbjogYW55KXtcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIEFMQlVNJywgZnVuY3Rpb24oZXJyOmFueSwgcm93czphbnksIGZpZWxkczphbnkpe1xuICAgICAgICAgICAgICAgIGZvcihsZXQgeD0wOyB4PHJvd3MubGVuZ3RoOysreCl7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0cmFja3M6IFRyYWNrW10gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSgnU0VMRUNUICogRlJPTSBUUkFDSycsZnVuY3Rpb24oZXJyOmFueSwgcm93czphbnksIGZpZWxkczphbnkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCB5PTA7IHk8cm93cy5sZW5ndGg7Kyt5KXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFja3MucHVzaChuZXcgVHJhY2socm93c1t5XS5pZCwgcm93c1t5XS50cmFja19uYW1lLCByb3dzW3ldLnRyYWNrX251bWJlciwgcm93c1t5XS50cmFja19seXJpY3MpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGFsYnVtcy5wdXNoKG5ldyBBbGJ1bSh4LCByb3dzW3hdLmFsYnVtX25hbWUsIHJvd3NbeF0uYWxidW1fZGVzY3JpcHRpb24sIHJvd3NbeF0uYWxidW1feWVhciwgdHJhY2tzKSk7ICAgICBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGFsYnVtcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcblxuXG4gICAgfVxuICAgIHB1YmxpYyBmaW5kQWxidW0oYWxidW1JZDogbnVtYmVyLCBjYWxsYmFjazphbnkpe1xuXG5cbiAgICAgICAgbGV0IGFsYnVtczpBbGJ1bVtdID0gW107XG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGFzeW5jIGZ1bmN0aW9uKGVycjogYW55LCBjb25uZWN0aW9uOiBhbnkpe1xuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgICAgICBpZihlcnIpIHRocm93IGVyclxuICAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSA9IHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpO1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gQUxCVU0gV0hFUkUgSUQ9PycsIFthbGJ1bUlkXSk7XG4gICAgICAgICAgICBmb3IobGV0IHg9MDsgeDxyZXN1bHQubGVuZ3RoOyArK3gpe1xuICAgICAgICAgICAgICAgIGxldCB0cmFja3M6IFRyYWNrW10gPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0MSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqICBGUk9NIFRSQUNLIFdIRVJFIEFMQlVNX0lEPT8nLFthbGJ1bUlkXSk7XG4gICAgICAgICAgICAgICAgZm9yKGxldCB5PTA7IHk8cmVzdWx0MS5sZW5ndGg7Kyt5KXtcbiAgICAgICAgICAgICAgICAgICAgdHJhY2tzLnB1c2gobmV3IFRyYWNrKHJlc3VsdDFbeV0uaWQsIHJlc3VsdDFbeV0udHJhY2tfbmFtZSwgcmVzdWx0MVt5XS50cmFja19udW1iZXIsIHJlc3VsdDFbeV0udHJhY2tfbHlyaWNzKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYWxidW1zLnB1c2gobmV3IEFsYnVtKHJlc3VsdFt4XS5pZCwgcmVzdWx0W3hdLmFsYnVtX25hbWUsIHJlc3VsdFt4XS5hbGJ1bV9kZXNjcmlwdGlvbiwgcmVzdWx0W3hdLmFsYnVtX3llYXIsIHRyYWNrcykpXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soYWxidW1zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcblxuICAgIH1cbiAgIFxuICAgIHB1YmxpYyBmaW5kQWxidW1zQnlEZXNjcmlwdGlvbihzZWFyY2g6c3RyaW5nLCBjYWxsYmFjazogYW55KXtcblxuXG4gICAgICAgIGxldCBhbGJ1bXM6QWxidW1bXSA9IFtdO1xuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbihlcnI6IGFueSwgY29ubmVjdGlvbjogYW55KXtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gQUxCVU0gV0hFUkUgQUxCVU1fREVTQ1JJUFRJT04gTElLRSA/JywgW3NlYXJjaF0pO1xuICAgICAgICAgICAgZm9yKGxldCB4PTA7IHg8cmVzdWx0Lmxlbmd0aDsgKyt4KXtcbiAgICAgICAgICAgICAgICBsZXQgYWxidW1JZCA9IHJlc3VsdFt4XS5pZDtcbiAgICAgICAgICAgICAgICBsZXQgdHJhY2tzOiBUcmFja1tdID0gW107XG4gICAgICAgICAgICAgICAgbGV0IHJlc3VsdDEgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiAgRlJPTSBUUkFDSyBXSEVSRSBBTEJVTV9JRD0/JyxbYWxidW1JZF0pO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgeT0wOyB5PHJlc3VsdDEubGVuZ3RoOysreSl7XG4gICAgICAgICAgICAgICAgICAgIHRyYWNrcy5wdXNoKG5ldyBUcmFjayhyZXN1bHQxW3ldLmlkLCByZXN1bHQxW3ldLnRyYWNrX25hbWUsIHJlc3VsdDFbeV0udHJhY2tfbnVtYmVyLCByZXN1bHQxW3ldLnRyYWNrX2x5cmljcykpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFsYnVtcy5wdXNoKG5ldyBBbGJ1bShyZXN1bHRbeF0uaWQsIHJlc3VsdFt4XS5hbGJ1bV9uYW1lLCByZXN1bHRbeF0uYWxidW1fZGVzY3JpcHRpb24sIHJlc3VsdFt4XS5hbGJ1bV95ZWFyLCB0cmFja3MpKVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGFsYnVtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICB9XG4gICAgcHVibGljIGNyZWF0ZShhbGJ1bTpBbGJ1bSwgY2FsbGJhY2s6IGFueSl7XG5cbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOiBhbnksIGNvbm5lY3Rpb246IGFueSl7XG4gICAgICAgICAgICAgICAgIC8vY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyXG4gICAgICAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcbiAgICAgICAgICAgICAgICAgbGV0IGEgPSBuZXcgQWxidW0oYWxidW0uSWQsYWxidW0uVGl0bGUsYWxidW0uRGVzY3JpcHRpb24sYWxidW0uWWVhcixhbGJ1bS5UcmFja3MpO1xuICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnSU5TRVJUIElOVE8gYEFsYnVtYCAoYGlkYCwgYGFsYnVtX25hbWVgLCBgYWxidW1feWVhcmAsIGBhbGJ1bV9kZXNjcmlwdGlvbmAsIGBBcnRpc3RfaWRgKSBWQUxVRVMgKD8sPyw/LD8sPyknLFthLklkLCBhLlRpdGxlICxhLlllYXIsYS5EZXNjcmlwdGlvbiwxXSk7XG4gICAgICAgICAgICAgICAgIGlmKHJlc3VsdC5hZmZlY3RlZFJvd3MgIT0gMSl7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKC0xKVxuICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgIH1cbiAgICBwdWJsaWMgdXBkYXRlKGFsYnVtOkFsYnVtLCBjYWxsYmFjazogYW55KXtcblxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbihlcnI6IGFueSwgY29ubmVjdGlvbjogYW55KXtcbiAgICAgICAgICAgIC8vY29ubmVjdGlvbi5yZWxlYXNlKCk7XG4gICAgICAgICAgICBpZihlcnIpIHRocm93IGVyclxuICAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSA9IHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpO1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ1VQREFURSBBTEJVTSBTRVQgYGFsYnVtX25hbWVgPT8sIGBhbGJ1bV95ZWFyYD0/LCBgYWxidW1fZGVzY3JpcHRpb25gPT8gV0hFUkUgSUQ9PycsW2FsYnVtLlRpdGxlLGFsYnVtLlllYXIsYWxidW0uRGVzY3JpcHRpb24sIGFsYnVtLklkXSk7XG4gICAgICAgICAgICBpZihyZXN1bHQuYWZmZWN0ZWRSb3dzICE9ICAxKXtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygtMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKHJlc3VsdCk7XG5cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1YmxpYyBkZWxldGUoYWxidW1JZDpudW1iZXIsIGNhbGxiYWNrOiBhbnkpe1xuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbihlcnI6IGFueSwgY29ubmVjdGlvbjogYW55KXtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xuICAgICAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KTtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdERUxFVEUgRlJPTSBBTEJVTSBXSEVSRSBJRD0/JyxbYWxidW1JZF0pO1xuICAgICAgICAgICAgY2FsbGJhY2socmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBNkI7QUFBQTtBQUFBLCtDQUw3QjtBQUFBLElBUWFBLFFBQVE7RUFNakIsa0JBQVlDLElBQVcsRUFBRUMsSUFBWSxFQUFFQyxRQUFlLEVBQUVDLFFBQWUsRUFBQztJQUFBO0lBQUEsNENBTGpELEVBQUU7SUFBQSw0Q0FDRixDQUFDLENBQUM7SUFBQSxnREFDRSxFQUFFO0lBQUEsZ0RBQ0YsRUFBRTtJQUFBO0lBR3pCLElBQUksQ0FBQ0gsSUFBSSxHQUFHQSxJQUFJO0lBQ2hCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQSxJQUFJO0lBQ2hCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBRXhCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQyxLQUFLLENBQUNDLFVBQVUsQ0FBQztNQUN6Qk4sSUFBSSxFQUFFLElBQUksQ0FBQ0EsSUFBSTtNQUNmQyxJQUFJLEVBQUUsSUFBSSxDQUFDQSxJQUFJO01BQ2ZNLElBQUksRUFBRSxJQUFJLENBQUNMLFFBQVE7TUFDbkJDLFFBQVEsRUFBRSxJQUFJLENBQUNBLFFBQVE7TUFDdkJLLFFBQVEsRUFBRTtJQUNkLENBQUMsQ0FBQztJQUNGQyxNQUFNLENBQUNDLE9BQU8sR0FBRyxJQUFJLENBQUNOLElBQUk7O0lBRTFCO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBRUk7RUFBQztJQUFBO0lBQUEsT0FF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
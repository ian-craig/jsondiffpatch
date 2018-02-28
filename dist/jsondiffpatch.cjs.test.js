'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var dmp = _interopDefault(require('diff-match-patch'));
var chalk = _interopDefault(require('chalk'));
var chai = _interopDefault(require('chai'));

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var _typeof$1 = typeof Symbol === "function" && _typeof(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof(obj);
};

var classCallCheck$1 = function classCallCheck$$1(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var get$1 = function get$$1(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get$$1(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits$1 = function inherits$$1(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn$1 = function possibleConstructorReturn$$1(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
};

var slicedToArray$1 = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

var cov_1fgbn4j4wh = function () {
  var path = 'Y:\\repos\\jsondiffpatch\\src\\processor.js',
      hash = '3c2743f86b4edfdbe149e4e86f8380523ff1deeb',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: 'Y:\\repos\\jsondiffpatch\\src\\processor.js', statementMap: { '0': { start: { line: 1, column: 16 }, end: { line: 71, column: 3 } }, '1': { start: { line: 3, column: 4 }, end: { line: 3, column: 49 } }, '2': { start: { line: 5, column: 4 }, end: { line: 5, column: 37 } }, '3': { start: { line: 6, column: 4 }, end: { line: 6, column: 20 } }, '4': { start: { line: 9, column: 2 }, end: { line: 69, column: 6 } }, '5': { start: { line: 12, column: 6 }, end: { line: 14, column: 7 } }, '6': { start: { line: 13, column: 8 }, end: { line: 13, column: 36 } }, '7': { start: { line: 15, column: 6 }, end: { line: 15, column: 30 } }, '8': { start: { line: 20, column: 17 }, end: { line: 20, column: 24 } }, '9': { start: { line: 21, column: 6 }, end: { line: 27, column: 7 } }, '10': { start: { line: 22, column: 8 }, end: { line: 26, column: 9 } }, '11': { start: { line: 23, column: 10 }, end: { line: 23, column: 34 } }, '12': { start: { line: 25, column: 10 }, end: { line: 25, column: 34 } }, '13': { start: { line: 28, column: 6 }, end: { line: 34, column: 7 } }, '14': { start: { line: 29, column: 8 }, end: { line: 29, column: 20 } }, '15': { start: { line: 30, column: 8 }, end: { line: 32, column: 9 } }, '16': { start: { line: 31, column: 10 }, end: { line: 31, column: 22 } }, '17': { start: { line: 33, column: 8 }, end: { line: 33, column: 37 } }, '18': { start: { line: 35, column: 6 }, end: { line: 35, column: 28 } }, '19': { start: { line: 36, column: 6 }, end: { line: 36, column: 18 } }, '20': { start: { line: 41, column: 20 }, end: { line: 41, column: 25 } }, '21': { start: { line: 42, column: 6 }, end: { line: 42, column: 39 } }, '22': { start: { line: 43, column: 21 }, end: { line: 43, column: 52 } }, '23': { start: { line: 44, column: 21 }, end: { line: 44, column: 27 } }, '24': { start: { line: 45, column: 24 }, end: { line: 45, column: 30 } }, '25': { start: { line: 46, column: 6 }, end: { line: 66, column: 7 } }, '26': { start: { line: 47, column: 8 }, end: { line: 51, column: 9 } }, '27': { start: { line: 49, column: 10 }, end: { line: 49, column: 51 } }, '28': { start: { line: 50, column: 10 }, end: { line: 50, column: 43 } }, '29': { start: { line: 53, column: 8 }, end: { line: 55, column: 9 } }, '30': { start: { line: 54, column: 10 }, end: { line: 54, column: 41 } }, '31': { start: { line: 56, column: 8 }, end: { line: 56, column: 34 } }, '32': { start: { line: 57, column: 8 }, end: { line: 57, column: 30 } }, '33': { start: { line: 58, column: 8 }, end: { line: 58, column: 28 } }, '34': { start: { line: 59, column: 8 }, end: { line: 59, column: 24 } }, '35': { start: { line: 60, column: 8 }, end: { line: 65, column: 9 } }, '36': { start: { line: 61, column: 10 }, end: { line: 64, column: 11 } }, '37': { start: { line: 62, column: 12 }, end: { line: 62, column: 35 } }, '38': { start: { line: 63, column: 12 }, end: { line: 63, column: 72 } }, '39': { start: { line: 67, column: 6 }, end: { line: 67, column: 60 } }, '40': { start: { line: 70, column: 2 }, end: { line: 70, column: 19 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 1, column: 16 }, end: { line: 1, column: 17 } }, loc: { start: { line: 1, column: 28 }, end: { line: 71, column: 1 } }, line: 1 }, '1': { name: 'Processor', decl: { start: { line: 2, column: 11 }, end: { line: 2, column: 20 } }, loc: { start: { line: 2, column: 30 }, end: { line: 7, column: 3 } }, line: 2 }, '2': { name: 'options', decl: { start: { line: 11, column: 20 }, end: { line: 11, column: 27 } }, loc: { start: { line: 11, column: 38 }, end: { line: 16, column: 5 } }, line: 11 }, '3': { name: 'pipe', decl: { start: { line: 19, column: 20 }, end: { line: 19, column: 24 } }, loc: { start: { line: 19, column: 40 }, end: { line: 37, column: 5 } }, line: 19 }, '4': { name: 'process', decl: { start: { line: 40, column: 20 }, end: { line: 40, column: 27 } }, loc: { start: { line: 40, column: 41 }, end: { line: 68, column: 5 } }, line: 40 } }, branchMap: { '0': { loc: { start: { line: 5, column: 23 }, end: { line: 5, column: 36 } }, type: 'binary-expr', locations: [{ start: { line: 5, column: 23 }, end: { line: 5, column: 30 } }, { start: { line: 5, column: 34 }, end: { line: 5, column: 36 } }], line: 5 }, '1': { loc: { start: { line: 12, column: 6 }, end: { line: 14, column: 7 } }, type: 'if', locations: [{ start: { line: 12, column: 6 }, end: { line: 14, column: 7 } }, { start: { line: 12, column: 6 }, end: { line: 14, column: 7 } }], line: 12 }, '2': { loc: { start: { line: 21, column: 6 }, end: { line: 27, column: 7 } }, type: 'if', locations: [{ start: { line: 21, column: 6 }, end: { line: 27, column: 7 } }, { start: { line: 21, column: 6 }, end: { line: 27, column: 7 } }], line: 21 }, '3': { loc: { start: { line: 22, column: 8 }, end: { line: 26, column: 9 } }, type: 'if', locations: [{ start: { line: 22, column: 8 }, end: { line: 26, column: 9 } }, { start: { line: 22, column: 8 }, end: { line: 26, column: 9 } }], line: 22 }, '4': { loc: { start: { line: 28, column: 6 }, end: { line: 34, column: 7 } }, type: 'if', locations: [{ start: { line: 28, column: 6 }, end: { line: 34, column: 7 } }, { start: { line: 28, column: 6 }, end: { line: 34, column: 7 } }], line: 28 }, '5': { loc: { start: { line: 28, column: 10 }, end: { line: 28, column: 27 } }, type: 'binary-expr', locations: [{ start: { line: 28, column: 10 }, end: { line: 28, column: 14 } }, { start: { line: 28, column: 18 }, end: { line: 28, column: 27 } }], line: 28 }, '6': { loc: { start: { line: 30, column: 8 }, end: { line: 32, column: 9 } }, type: 'if', locations: [{ start: { line: 30, column: 8 }, end: { line: 32, column: 9 } }, { start: { line: 30, column: 8 }, end: { line: 32, column: 9 } }], line: 30 }, '7': { loc: { start: { line: 43, column: 21 }, end: { line: 43, column: 52 } }, type: 'binary-expr', locations: [{ start: { line: 43, column: 21 }, end: { line: 43, column: 25 } }, { start: { line: 43, column: 29 }, end: { line: 43, column: 39 } }, { start: { line: 43, column: 43 }, end: { line: 43, column: 52 } }], line: 43 }, '8': { loc: { start: { line: 47, column: 8 }, end: { line: 51, column: 9 } }, type: 'if', locations: [{ start: { line: 47, column: 8 }, end: { line: 51, column: 9 } }, { start: { line: 47, column: 8 }, end: { line: 51, column: 9 } }], line: 47 }, '9': { loc: { start: { line: 53, column: 8 }, end: { line: 55, column: 9 } }, type: 'if', locations: [{ start: { line: 53, column: 8 }, end: { line: 55, column: 9 } }, { start: { line: 53, column: 8 }, end: { line: 55, column: 9 } }], line: 53 }, '10': { loc: { start: { line: 60, column: 8 }, end: { line: 65, column: 9 } }, type: 'if', locations: [{ start: { line: 60, column: 8 }, end: { line: 65, column: 9 } }, { start: { line: 60, column: 8 }, end: { line: 65, column: 9 } }], line: 60 }, '11': { loc: { start: { line: 61, column: 10 }, end: { line: 64, column: 11 } }, type: 'if', locations: [{ start: { line: 61, column: 10 }, end: { line: 64, column: 11 } }, { start: { line: 61, column: 10 }, end: { line: 64, column: 11 } }], line: 61 }, '12': { loc: { start: { line: 63, column: 23 }, end: { line: 63, column: 71 } }, type: 'binary-expr', locations: [{ start: { line: 63, column: 23 }, end: { line: 63, column: 43 } }, { start: { line: 63, column: 47 }, end: { line: 63, column: 59 } }, { start: { line: 63, column: 63 }, end: { line: 63, column: 71 } }], line: 63 }, '13': { loc: { start: { line: 67, column: 13 }, end: { line: 67, column: 59 } }, type: 'cond-expr', locations: [{ start: { line: 67, column: 33 }, end: { line: 67, column: 47 } }, { start: { line: 67, column: 50 }, end: { line: 67, column: 59 } }], line: 67 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0, 0], '8': [0, 0], '9': [0, 0], '10': [0, 0], '11': [0, 0], '12': [0, 0, 0], '13': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var Processor = (cov_1fgbn4j4wh.s[0]++, function () {
  cov_1fgbn4j4wh.f[0]++;function Processor(options) {
    cov_1fgbn4j4wh.f[1]++;cov_1fgbn4j4wh.s[1]++;classCallCheck$1(this, Processor);cov_1fgbn4j4wh.s[2]++;this.selfOptions = (cov_1fgbn4j4wh.b[0][0]++, options) || (cov_1fgbn4j4wh.b[0][1]++, {});cov_1fgbn4j4wh.s[3]++;this.pipes = {};
  }cov_1fgbn4j4wh.s[4]++;createClass$1(Processor, [{ key: 'options', value: function options(_options) {
      cov_1fgbn4j4wh.f[2]++;cov_1fgbn4j4wh.s[5]++;if (_options) {
        cov_1fgbn4j4wh.b[1][0]++;cov_1fgbn4j4wh.s[6]++;this.selfOptions = _options;
      } else {
        cov_1fgbn4j4wh.b[1][1]++;
      }cov_1fgbn4j4wh.s[7]++;return this.selfOptions;
    } }, { key: 'pipe', value: function pipe(name, pipeArg) {
      cov_1fgbn4j4wh.f[3]++;var pipe = (cov_1fgbn4j4wh.s[8]++, pipeArg);cov_1fgbn4j4wh.s[9]++;if (typeof name === 'string') {
        cov_1fgbn4j4wh.b[2][0]++;cov_1fgbn4j4wh.s[10]++;if (typeof pipe === 'undefined') {
          cov_1fgbn4j4wh.b[3][0]++;cov_1fgbn4j4wh.s[11]++;return this.pipes[name];
        } else {
          cov_1fgbn4j4wh.b[3][1]++;cov_1fgbn4j4wh.s[12]++;this.pipes[name] = pipe;
        }
      } else {
        cov_1fgbn4j4wh.b[2][1]++;
      }cov_1fgbn4j4wh.s[13]++;if ((cov_1fgbn4j4wh.b[5][0]++, name) && (cov_1fgbn4j4wh.b[5][1]++, name.name)) {
        cov_1fgbn4j4wh.b[4][0]++;cov_1fgbn4j4wh.s[14]++;pipe = name;cov_1fgbn4j4wh.s[15]++;if (pipe.processor === this) {
          cov_1fgbn4j4wh.b[6][0]++;cov_1fgbn4j4wh.s[16]++;return pipe;
        } else {
          cov_1fgbn4j4wh.b[6][1]++;
        }cov_1fgbn4j4wh.s[17]++;this.pipes[pipe.name] = pipe;
      } else {
        cov_1fgbn4j4wh.b[4][1]++;
      }cov_1fgbn4j4wh.s[18]++;pipe.processor = this;cov_1fgbn4j4wh.s[19]++;return pipe;
    } }, { key: 'process', value: function process(input, pipe) {
      cov_1fgbn4j4wh.f[4]++;var context = (cov_1fgbn4j4wh.s[20]++, input);cov_1fgbn4j4wh.s[21]++;context.options = this.options();var nextPipe = (cov_1fgbn4j4wh.s[22]++, (cov_1fgbn4j4wh.b[7][0]++, pipe) || (cov_1fgbn4j4wh.b[7][1]++, input.pipe) || (cov_1fgbn4j4wh.b[7][2]++, 'default'));var lastPipe = (cov_1fgbn4j4wh.s[23]++, void 0);var lastContext = (cov_1fgbn4j4wh.s[24]++, void 0);cov_1fgbn4j4wh.s[25]++;while (nextPipe) {
        cov_1fgbn4j4wh.s[26]++;if (typeof context.nextAfterChildren !== 'undefined') {
          cov_1fgbn4j4wh.b[8][0]++;cov_1fgbn4j4wh.s[27]++; // children processed and coming back to parent
          context.next = context.nextAfterChildren;cov_1fgbn4j4wh.s[28]++;context.nextAfterChildren = null;
        } else {
          cov_1fgbn4j4wh.b[8][1]++;
        }cov_1fgbn4j4wh.s[29]++;if (typeof nextPipe === 'string') {
          cov_1fgbn4j4wh.b[9][0]++;cov_1fgbn4j4wh.s[30]++;nextPipe = this.pipe(nextPipe);
        } else {
          cov_1fgbn4j4wh.b[9][1]++;
        }cov_1fgbn4j4wh.s[31]++;nextPipe.process(context);cov_1fgbn4j4wh.s[32]++;lastContext = context;cov_1fgbn4j4wh.s[33]++;lastPipe = nextPipe;cov_1fgbn4j4wh.s[34]++;nextPipe = null;cov_1fgbn4j4wh.s[35]++;if (context) {
          cov_1fgbn4j4wh.b[10][0]++;cov_1fgbn4j4wh.s[36]++;if (context.next) {
            cov_1fgbn4j4wh.b[11][0]++;cov_1fgbn4j4wh.s[37]++;context = context.next;cov_1fgbn4j4wh.s[38]++;nextPipe = (cov_1fgbn4j4wh.b[12][0]++, lastContext.nextPipe) || (cov_1fgbn4j4wh.b[12][1]++, context.pipe) || (cov_1fgbn4j4wh.b[12][2]++, lastPipe);
          } else {
            cov_1fgbn4j4wh.b[11][1]++;
          }
        } else {
          cov_1fgbn4j4wh.b[10][1]++;
        }
      }cov_1fgbn4j4wh.s[39]++;return context.hasResult ? (cov_1fgbn4j4wh.b[13][0]++, context.result) : (cov_1fgbn4j4wh.b[13][1]++, undefined);
    } }]);cov_1fgbn4j4wh.s[40]++;return Processor;
}());

var cov_a853lr82r = function () {
  var path = 'Y:\\repos\\jsondiffpatch\\src\\pipe.js',
      hash = 'd7b8d97ab642618bd2aec1f4434f28161ddad71b',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: 'Y:\\repos\\jsondiffpatch\\src\\pipe.js', statementMap: { '0': { start: { line: 1, column: 11 }, end: { line: 172, column: 3 } }, '1': { start: { line: 3, column: 4 }, end: { line: 3, column: 44 } }, '2': { start: { line: 5, column: 4 }, end: { line: 5, column: 21 } }, '3': { start: { line: 6, column: 4 }, end: { line: 6, column: 22 } }, '4': { start: { line: 9, column: 2 }, end: { line: 170, column: 6 } }, '5': { start: { line: 12, column: 6 }, end: { line: 14, column: 7 } }, '6': { start: { line: 13, column: 8 }, end: { line: 13, column: 72 } }, '7': { start: { line: 15, column: 18 }, end: { line: 15, column: 28 } }, '8': { start: { line: 16, column: 19 }, end: { line: 16, column: 38 } }, '9': { start: { line: 17, column: 20 }, end: { line: 17, column: 25 } }, '10': { start: { line: 18, column: 6 }, end: { line: 28, column: 7 } }, '11': { start: { line: 19, column: 21 }, end: { line: 19, column: 40 } }, '12': { start: { line: 20, column: 8 }, end: { line: 22, column: 9 } }, '13': { start: { line: 21, column: 10 }, end: { line: 21, column: 51 } }, '14': { start: { line: 23, column: 8 }, end: { line: 23, column: 24 } }, '15': { start: { line: 24, column: 8 }, end: { line: 27, column: 9 } }, '16': { start: { line: 25, column: 10 }, end: { line: 25, column: 34 } }, '17': { start: { line: 26, column: 10 }, end: { line: 26, column: 16 } }, '18': { start: { line: 29, column: 6 }, end: { line: 31, column: 7 } }, '19': { start: { line: 30, column: 8 }, end: { line: 30, column: 34 } }, '20': { start: { line: 36, column: 6 }, end: { line: 36, column: 68 } }, '21': { start: { line: 43, column: 6 }, end: { line: 43, column: 64 } }, '22': { start: { line: 44, column: 6 }, end: { line: 44, column: 18 } }, '23': { start: { line: 51, column: 6 }, end: { line: 51, column: 69 } }, '24': { start: { line: 52, column: 6 }, end: { line: 52, column: 18 } }, '25': { start: { line: 57, column: 6 }, end: { line: 59, column: 7 } }, '26': { start: { line: 58, column: 8 }, end: { line: 58, column: 53 } }, '27': { start: { line: 60, column: 6 }, end: { line: 65, column: 7 } }, '28': { start: { line: 61, column: 21 }, end: { line: 61, column: 40 } }, '29': { start: { line: 62, column: 8 }, end: { line: 64, column: 9 } }, '30': { start: { line: 63, column: 10 }, end: { line: 63, column: 23 } }, '31': { start: { line: 66, column: 6 }, end: { line: 66, column: 57 } }, '32': { start: { line: 71, column: 18 }, end: { line: 71, column: 20 } }, '33': { start: { line: 73, column: 38 }, end: { line: 73, column: 42 } }, '34': { start: { line: 74, column: 30 }, end: { line: 74, column: 35 } }, '35': { start: { line: 75, column: 27 }, end: { line: 75, column: 36 } }, '36': { start: { line: 77, column: 6 }, end: { line: 96, column: 7 } }, '37': { start: { line: 78, column: 8 }, end: { line: 82, column: 9 } }, '38': { start: { line: 79, column: 23 }, end: { line: 79, column: 34 } }, '39': { start: { line: 81, column: 10 }, end: { line: 81, column: 40 } }, '40': { start: { line: 84, column: 8 }, end: { line: 84, column: 33 } }, '41': { start: { line: 85, column: 8 }, end: { line: 85, column: 29 } }, '42': { start: { line: 87, column: 8 }, end: { line: 95, column: 9 } }, '43': { start: { line: 88, column: 10 }, end: { line: 90, column: 11 } }, '44': { start: { line: 89, column: 12 }, end: { line: 89, column: 31 } }, '45': { start: { line: 92, column: 10 }, end: { line: 94, column: 11 } }, '46': { start: { line: 93, column: 12 }, end: { line: 93, column: 33 } }, '47': { start: { line: 98, column: 6 }, end: { line: 98, column: 19 } }, '48': { start: { line: 103, column: 18 }, end: { line: 103, column: 42 } }, '49': { start: { line: 104, column: 19 }, end: { line: 104, column: 59 } }, '50': { start: { line: 105, column: 6 }, end: { line: 107, column: 7 } }, '51': { start: { line: 106, column: 8 }, end: { line: 106, column: 48 } }, '52': { start: { line: 108, column: 6 }, end: { line: 108, column: 35 } }, '53': { start: { line: 109, column: 6 }, end: { line: 109, column: 57 } }, '54': { start: { line: 110, column: 6 }, end: { line: 110, column: 18 } }, '55': { start: { line: 115, column: 18 }, end: { line: 115, column: 42 } }, '56': { start: { line: 116, column: 19 }, end: { line: 116, column: 59 } }, '57': { start: { line: 117, column: 6 }, end: { line: 119, column: 7 } }, '58': { start: { line: 118, column: 8 }, end: { line: 118, column: 48 } }, '59': { start: { line: 120, column: 6 }, end: { line: 120, column: 31 } }, '60': { start: { line: 121, column: 6 }, end: { line: 121, column: 57 } }, '61': { start: { line: 122, column: 6 }, end: { line: 122, column: 18 } }, '62': { start: { line: 127, column: 18 }, end: { line: 127, column: 42 } }, '63': { start: { line: 128, column: 19 }, end: { line: 128, column: 59 } }, '64': { start: { line: 129, column: 6 }, end: { line: 131, column: 7 } }, '65': { start: { line: 130, column: 8 }, end: { line: 130, column: 48 } }, '66': { start: { line: 132, column: 6 }, end: { line: 132, column: 31 } }, '67': { start: { line: 133, column: 6 }, end: { line: 133, column: 57 } }, '68': { start: { line: 134, column: 6 }, end: { line: 134, column: 18 } }, '69': { start: { line: 139, column: 18 }, end: { line: 139, column: 42 } }, '70': { start: { line: 140, column: 6 }, end: { line: 140, column: 36 } }, '71': { start: { line: 141, column: 6 }, end: { line: 141, column: 18 } }, '72': { start: { line: 146, column: 6 }, end: { line: 146, column: 30 } }, '73': { start: { line: 147, column: 6 }, end: { line: 147, column: 18 } }, '74': { start: { line: 152, column: 6 }, end: { line: 155, column: 7 } }, '75': { start: { line: 153, column: 8 }, end: { line: 153, column: 32 } }, '76': { start: { line: 154, column: 8 }, end: { line: 154, column: 15 } }, '77': { start: { line: 156, column: 6 }, end: { line: 158, column: 7 } }, '78': { start: { line: 157, column: 8 }, end: { line: 157, column: 15 } }, '79': { start: { line: 159, column: 17 }, end: { line: 159, column: 21 } }, '80': { start: { line: 160, column: 6 }, end: { line: 167, column: 8 } }, '81': { start: { line: 161, column: 8 }, end: { line: 166, column: 9 } }, '82': { start: { line: 162, column: 10 }, end: { line: 162, column: 31 } }, '83': { start: { line: 163, column: 22 }, end: { line: 163, column: 54 } }, '84': { start: { line: 164, column: 10 }, end: { line: 164, column: 32 } }, '85': { start: { line: 165, column: 10 }, end: { line: 165, column: 22 } }, '86': { start: { line: 168, column: 6 }, end: { line: 168, column: 18 } }, '87': { start: { line: 171, column: 2 }, end: { line: 171, column: 14 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 1, column: 11 }, end: { line: 1, column: 12 } }, loc: { start: { line: 1, column: 23 }, end: { line: 172, column: 1 } }, line: 1 }, '1': { name: 'Pipe', decl: { start: { line: 2, column: 11 }, end: { line: 2, column: 15 } }, loc: { start: { line: 2, column: 22 }, end: { line: 7, column: 3 } }, line: 2 }, '2': { name: 'process', decl: { start: { line: 11, column: 20 }, end: { line: 11, column: 27 } }, loc: { start: { line: 11, column: 35 }, end: { line: 32, column: 5 } }, line: 11 }, '3': { name: 'log', decl: { start: { line: 35, column: 20 }, end: { line: 35, column: 23 } }, loc: { start: { line: 35, column: 29 }, end: { line: 37, column: 5 } }, line: 35 }, '4': { name: 'append', decl: { start: { line: 40, column: 20 }, end: { line: 40, column: 26 } }, loc: { start: { line: 40, column: 29 }, end: { line: 45, column: 5 } }, line: 40 }, '5': { name: 'prepend', decl: { start: { line: 48, column: 20 }, end: { line: 48, column: 27 } }, loc: { start: { line: 48, column: 30 }, end: { line: 53, column: 5 } }, line: 48 }, '6': { name: 'indexOf', decl: { start: { line: 56, column: 20 }, end: { line: 56, column: 27 } }, loc: { start: { line: 56, column: 40 }, end: { line: 67, column: 5 } }, line: 56 }, '7': { name: 'list', decl: { start: { line: 70, column: 20 }, end: { line: 70, column: 24 } }, loc: { start: { line: 70, column: 27 }, end: { line: 99, column: 5 } }, line: 70 }, '8': { name: 'after', decl: { start: { line: 102, column: 20 }, end: { line: 102, column: 25 } }, loc: { start: { line: 102, column: 38 }, end: { line: 111, column: 5 } }, line: 102 }, '9': { name: 'before', decl: { start: { line: 114, column: 20 }, end: { line: 114, column: 26 } }, loc: { start: { line: 114, column: 39 }, end: { line: 123, column: 5 } }, line: 114 }, '10': { name: 'replace', decl: { start: { line: 126, column: 20 }, end: { line: 126, column: 27 } }, loc: { start: { line: 126, column: 40 }, end: { line: 135, column: 5 } }, line: 126 }, '11': { name: 'remove', decl: { start: { line: 138, column: 20 }, end: { line: 138, column: 26 } }, loc: { start: { line: 138, column: 39 }, end: { line: 142, column: 5 } }, line: 138 }, '12': { name: 'clear', decl: { start: { line: 145, column: 20 }, end: { line: 145, column: 25 } }, loc: { start: { line: 145, column: 28 }, end: { line: 148, column: 5 } }, line: 145 }, '13': { name: 'shouldHaveResult', decl: { start: { line: 151, column: 20 }, end: { line: 151, column: 36 } }, loc: { start: { line: 151, column: 45 }, end: { line: 169, column: 5 } }, line: 151 }, '14': { name: '(anonymous_14)', decl: { start: { line: 160, column: 25 }, end: { line: 160, column: 26 } }, loc: { start: { line: 160, column: 44 }, end: { line: 167, column: 7 } }, line: 160 } }, branchMap: { '0': { loc: { start: { line: 12, column: 6 }, end: { line: 14, column: 7 } }, type: 'if', locations: [{ start: { line: 12, column: 6 }, end: { line: 14, column: 7 } }, { start: { line: 12, column: 6 }, end: { line: 14, column: 7 } }], line: 12 }, '1': { loc: { start: { line: 20, column: 8 }, end: { line: 22, column: 9 } }, type: 'if', locations: [{ start: { line: 20, column: 8 }, end: { line: 22, column: 9 } }, { start: { line: 20, column: 8 }, end: { line: 22, column: 9 } }], line: 20 }, '2': { loc: { start: { line: 24, column: 8 }, end: { line: 27, column: 9 } }, type: 'if', locations: [{ start: { line: 24, column: 8 }, end: { line: 27, column: 9 } }, { start: { line: 24, column: 8 }, end: { line: 27, column: 9 } }], line: 24 }, '3': { loc: { start: { line: 24, column: 12 }, end: { line: 24, column: 121 } }, type: 'binary-expr', locations: [{ start: { line: 24, column: 12 }, end: { line: 24, column: 102 } }, { start: { line: 24, column: 106 }, end: { line: 24, column: 121 } }], line: 24 }, '4': { loc: { start: { line: 24, column: 13 }, end: { line: 24, column: 88 } }, type: 'cond-expr', locations: [{ start: { line: 24, column: 46 }, end: { line: 24, column: 57 } }, { start: { line: 24, column: 60 }, end: { line: 24, column: 88 } }], line: 24 }, '5': { loc: { start: { line: 29, column: 6 }, end: { line: 31, column: 7 } }, type: 'if', locations: [{ start: { line: 29, column: 6 }, end: { line: 31, column: 7 } }, { start: { line: 29, column: 6 }, end: { line: 31, column: 7 } }], line: 29 }, '6': { loc: { start: { line: 29, column: 10 }, end: { line: 29, column: 43 } }, type: 'binary-expr', locations: [{ start: { line: 29, column: 10 }, end: { line: 29, column: 23 } }, { start: { line: 29, column: 27 }, end: { line: 29, column: 43 } }], line: 29 }, '7': { loc: { start: { line: 57, column: 6 }, end: { line: 59, column: 7 } }, type: 'if', locations: [{ start: { line: 57, column: 6 }, end: { line: 59, column: 7 } }, { start: { line: 57, column: 6 }, end: { line: 59, column: 7 } }], line: 57 }, '8': { loc: { start: { line: 62, column: 8 }, end: { line: 64, column: 9 } }, type: 'if', locations: [{ start: { line: 62, column: 8 }, end: { line: 64, column: 9 } }, { start: { line: 62, column: 8 }, end: { line: 64, column: 9 } }], line: 62 }, '9': { loc: { start: { line: 88, column: 10 }, end: { line: 90, column: 11 } }, type: 'if', locations: [{ start: { line: 88, column: 10 }, end: { line: 90, column: 11 } }, { start: { line: 88, column: 10 }, end: { line: 90, column: 11 } }], line: 88 }, '10': { loc: { start: { line: 88, column: 14 }, end: { line: 88, column: 60 } }, type: 'binary-expr', locations: [{ start: { line: 88, column: 14 }, end: { line: 88, column: 40 } }, { start: { line: 88, column: 44 }, end: { line: 88, column: 60 } }], line: 88 }, '11': { loc: { start: { line: 92, column: 10 }, end: { line: 94, column: 11 } }, type: 'if', locations: [{ start: { line: 92, column: 10 }, end: { line: 94, column: 11 } }, { start: { line: 92, column: 10 }, end: { line: 94, column: 11 } }], line: 92 }, '12': { loc: { start: { line: 105, column: 6 }, end: { line: 107, column: 7 } }, type: 'if', locations: [{ start: { line: 105, column: 6 }, end: { line: 107, column: 7 } }, { start: { line: 105, column: 6 }, end: { line: 107, column: 7 } }], line: 105 }, '13': { loc: { start: { line: 117, column: 6 }, end: { line: 119, column: 7 } }, type: 'if', locations: [{ start: { line: 117, column: 6 }, end: { line: 119, column: 7 } }, { start: { line: 117, column: 6 }, end: { line: 119, column: 7 } }], line: 117 }, '14': { loc: { start: { line: 129, column: 6 }, end: { line: 131, column: 7 } }, type: 'if', locations: [{ start: { line: 129, column: 6 }, end: { line: 131, column: 7 } }, { start: { line: 129, column: 6 }, end: { line: 131, column: 7 } }], line: 129 }, '15': { loc: { start: { line: 152, column: 6 }, end: { line: 155, column: 7 } }, type: 'if', locations: [{ start: { line: 152, column: 6 }, end: { line: 155, column: 7 } }, { start: { line: 152, column: 6 }, end: { line: 155, column: 7 } }], line: 152 }, '16': { loc: { start: { line: 156, column: 6 }, end: { line: 158, column: 7 } }, type: 'if', locations: [{ start: { line: 156, column: 6 }, end: { line: 158, column: 7 } }, { start: { line: 156, column: 6 }, end: { line: 158, column: 7 } }], line: 156 }, '17': { loc: { start: { line: 161, column: 8 }, end: { line: 166, column: 9 } }, type: 'if', locations: [{ start: { line: 161, column: 8 }, end: { line: 166, column: 9 } }, { start: { line: 161, column: 8 }, end: { line: 166, column: 9 } }], line: 161 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, '73': 0, '74': 0, '75': 0, '76': 0, '77': 0, '78': 0, '79': 0, '80': 0, '81': 0, '82': 0, '83': 0, '84': 0, '85': 0, '86': 0, '87': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0], '8': [0, 0], '9': [0, 0], '10': [0, 0], '11': [0, 0], '12': [0, 0], '13': [0, 0], '14': [0, 0], '15': [0, 0], '16': [0, 0], '17': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var Pipe = (cov_a853lr82r.s[0]++, function () {
  cov_a853lr82r.f[0]++;function Pipe(name) {
    cov_a853lr82r.f[1]++;cov_a853lr82r.s[1]++;classCallCheck$1(this, Pipe);cov_a853lr82r.s[2]++;this.name = name;cov_a853lr82r.s[3]++;this.filters = [];
  }cov_a853lr82r.s[4]++;createClass$1(Pipe, [{ key: 'process', value: function process(input) {
      cov_a853lr82r.f[2]++;cov_a853lr82r.s[5]++;if (!this.processor) {
        cov_a853lr82r.b[0][0]++;cov_a853lr82r.s[6]++;throw new Error('add this pipe to a processor before using it');
      } else {
        cov_a853lr82r.b[0][1]++;
      }var debug = (cov_a853lr82r.s[7]++, this.debug);var length = (cov_a853lr82r.s[8]++, this.filters.length);var context = (cov_a853lr82r.s[9]++, input);cov_a853lr82r.s[10]++;for (var index = 0; index < length; index++) {
        var filter = (cov_a853lr82r.s[11]++, this.filters[index]);cov_a853lr82r.s[12]++;if (debug) {
          cov_a853lr82r.b[1][0]++;cov_a853lr82r.s[13]++;this.log('filter: ' + filter.filterName);
        } else {
          cov_a853lr82r.b[1][1]++;
        }cov_a853lr82r.s[14]++;filter(context);cov_a853lr82r.s[15]++;if ((cov_a853lr82r.b[3][0]++, (typeof context === 'undefined' ? (cov_a853lr82r.b[4][0]++, 'undefined') : (cov_a853lr82r.b[4][1]++, _typeof$1(context))) === 'object') && (cov_a853lr82r.b[3][1]++, context.exiting)) {
          cov_a853lr82r.b[2][0]++;cov_a853lr82r.s[16]++;context.exiting = false;cov_a853lr82r.s[17]++;break;
        } else {
          cov_a853lr82r.b[2][1]++;
        }
      }cov_a853lr82r.s[18]++;if ((cov_a853lr82r.b[6][0]++, !context.next) && (cov_a853lr82r.b[6][1]++, this.resultCheck)) {
        cov_a853lr82r.b[5][0]++;cov_a853lr82r.s[19]++;this.resultCheck(context);
      } else {
        cov_a853lr82r.b[5][1]++;
      }
    } }, { key: 'log', value: function log(msg) {
      cov_a853lr82r.f[3]++;cov_a853lr82r.s[20]++;console.log('[jsondiffpatch] ' + this.name + ' pipe, ' + msg);
    } }, { key: 'append', value: function append() {
      cov_a853lr82r.f[4]++;var _filters;cov_a853lr82r.s[21]++;(_filters = this.filters).push.apply(_filters, arguments);cov_a853lr82r.s[22]++;return this;
    } }, { key: 'prepend', value: function prepend() {
      cov_a853lr82r.f[5]++;var _filters2;cov_a853lr82r.s[23]++;(_filters2 = this.filters).unshift.apply(_filters2, arguments);cov_a853lr82r.s[24]++;return this;
    } }, { key: 'indexOf', value: function indexOf(filterName) {
      cov_a853lr82r.f[6]++;cov_a853lr82r.s[25]++;if (!filterName) {
        cov_a853lr82r.b[7][0]++;cov_a853lr82r.s[26]++;throw new Error('a filter name is required');
      } else {
        cov_a853lr82r.b[7][1]++;
      }cov_a853lr82r.s[27]++;for (var index = 0; index < this.filters.length; index++) {
        var filter = (cov_a853lr82r.s[28]++, this.filters[index]);cov_a853lr82r.s[29]++;if (filter.filterName === filterName) {
          cov_a853lr82r.b[8][0]++;cov_a853lr82r.s[30]++;return index;
        } else {
          cov_a853lr82r.b[8][1]++;
        }
      }cov_a853lr82r.s[31]++;throw new Error('filter not found: ' + filterName);
    } }, { key: 'list', value: function list() {
      cov_a853lr82r.f[7]++;var names = (cov_a853lr82r.s[32]++, []);var _iteratorNormalCompletion = (cov_a853lr82r.s[33]++, true);var _didIteratorError = (cov_a853lr82r.s[34]++, false);var _iteratorError = (cov_a853lr82r.s[35]++, undefined);cov_a853lr82r.s[36]++;try {
        cov_a853lr82r.s[37]++;for (var _iterator = this.filters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var filter = (cov_a853lr82r.s[38]++, _step.value);cov_a853lr82r.s[39]++;names.push(filter.filterName);
        }
      } catch (err) {
        cov_a853lr82r.s[40]++;_didIteratorError = true;cov_a853lr82r.s[41]++;_iteratorError = err;
      } finally {
        cov_a853lr82r.s[42]++;try {
          cov_a853lr82r.s[43]++;if ((cov_a853lr82r.b[10][0]++, !_iteratorNormalCompletion) && (cov_a853lr82r.b[10][1]++, _iterator.return)) {
            cov_a853lr82r.b[9][0]++;cov_a853lr82r.s[44]++;_iterator.return();
          } else {
            cov_a853lr82r.b[9][1]++;
          }
        } finally {
          cov_a853lr82r.s[45]++;if (_didIteratorError) {
            cov_a853lr82r.b[11][0]++;cov_a853lr82r.s[46]++;throw _iteratorError;
          } else {
            cov_a853lr82r.b[11][1]++;
          }
        }
      }cov_a853lr82r.s[47]++;return names;
    } }, { key: 'after', value: function after(filterName) {
      cov_a853lr82r.f[8]++;var index = (cov_a853lr82r.s[48]++, this.indexOf(filterName));var params = (cov_a853lr82r.s[49]++, Array.prototype.slice.call(arguments, 1));cov_a853lr82r.s[50]++;if (!params.length) {
        cov_a853lr82r.b[12][0]++;cov_a853lr82r.s[51]++;throw new Error('a filter is required');
      } else {
        cov_a853lr82r.b[12][1]++;
      }cov_a853lr82r.s[52]++;params.unshift(index + 1, 0);cov_a853lr82r.s[53]++;Array.prototype.splice.apply(this.filters, params);cov_a853lr82r.s[54]++;return this;
    } }, { key: 'before', value: function before(filterName) {
      cov_a853lr82r.f[9]++;var index = (cov_a853lr82r.s[55]++, this.indexOf(filterName));var params = (cov_a853lr82r.s[56]++, Array.prototype.slice.call(arguments, 1));cov_a853lr82r.s[57]++;if (!params.length) {
        cov_a853lr82r.b[13][0]++;cov_a853lr82r.s[58]++;throw new Error('a filter is required');
      } else {
        cov_a853lr82r.b[13][1]++;
      }cov_a853lr82r.s[59]++;params.unshift(index, 0);cov_a853lr82r.s[60]++;Array.prototype.splice.apply(this.filters, params);cov_a853lr82r.s[61]++;return this;
    } }, { key: 'replace', value: function replace(filterName) {
      cov_a853lr82r.f[10]++;var index = (cov_a853lr82r.s[62]++, this.indexOf(filterName));var params = (cov_a853lr82r.s[63]++, Array.prototype.slice.call(arguments, 1));cov_a853lr82r.s[64]++;if (!params.length) {
        cov_a853lr82r.b[14][0]++;cov_a853lr82r.s[65]++;throw new Error('a filter is required');
      } else {
        cov_a853lr82r.b[14][1]++;
      }cov_a853lr82r.s[66]++;params.unshift(index, 1);cov_a853lr82r.s[67]++;Array.prototype.splice.apply(this.filters, params);cov_a853lr82r.s[68]++;return this;
    } }, { key: 'remove', value: function remove(filterName) {
      cov_a853lr82r.f[11]++;var index = (cov_a853lr82r.s[69]++, this.indexOf(filterName));cov_a853lr82r.s[70]++;this.filters.splice(index, 1);cov_a853lr82r.s[71]++;return this;
    } }, { key: 'clear', value: function clear() {
      cov_a853lr82r.f[12]++;cov_a853lr82r.s[72]++;this.filters.length = 0;cov_a853lr82r.s[73]++;return this;
    } }, { key: 'shouldHaveResult', value: function shouldHaveResult(should) {
      cov_a853lr82r.f[13]++;cov_a853lr82r.s[74]++;if (should === false) {
        cov_a853lr82r.b[15][0]++;cov_a853lr82r.s[75]++;this.resultCheck = null;cov_a853lr82r.s[76]++;return;
      } else {
        cov_a853lr82r.b[15][1]++;
      }cov_a853lr82r.s[77]++;if (this.resultCheck) {
        cov_a853lr82r.b[16][0]++;cov_a853lr82r.s[78]++;return;
      } else {
        cov_a853lr82r.b[16][1]++;
      }var pipe = (cov_a853lr82r.s[79]++, this);cov_a853lr82r.s[80]++;this.resultCheck = function (context) {
        cov_a853lr82r.f[14]++;cov_a853lr82r.s[81]++;if (!context.hasResult) {
          cov_a853lr82r.b[17][0]++;cov_a853lr82r.s[82]++;console.log(context);var error = (cov_a853lr82r.s[83]++, new Error(pipe.name + ' failed'));cov_a853lr82r.s[84]++;error.noResult = true;cov_a853lr82r.s[85]++;throw error;
        } else {
          cov_a853lr82r.b[17][1]++;
        }
      };cov_a853lr82r.s[86]++;return this;
    } }]);cov_a853lr82r.s[87]++;return Pipe;
}());

var cov_14q25fwwg0 = function () {
  var path = 'Y:\\repos\\jsondiffpatch\\src\\contexts\\context.js',
      hash = '38b092760f1af283c72fc263afd039d9aef1466f',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: 'Y:\\repos\\jsondiffpatch\\src\\contexts\\context.js', statementMap: { '0': { start: { line: 3, column: 14 }, end: { line: 56, column: 3 } }, '1': { start: { line: 5, column: 4 }, end: { line: 5, column: 47 } }, '2': { start: { line: 8, column: 2 }, end: { line: 54, column: 6 } }, '3': { start: { line: 11, column: 6 }, end: { line: 11, column: 27 } }, '4': { start: { line: 12, column: 6 }, end: { line: 12, column: 28 } }, '5': { start: { line: 13, column: 6 }, end: { line: 13, column: 18 } }, '6': { start: { line: 18, column: 6 }, end: { line: 18, column: 26 } }, '7': { start: { line: 19, column: 6 }, end: { line: 19, column: 18 } }, '8': { start: { line: 24, column: 6 }, end: { line: 31, column: 7 } }, '9': { start: { line: 25, column: 8 }, end: { line: 25, column: 29 } }, '10': { start: { line: 27, column: 8 }, end: { line: 27, column: 25 } }, '11': { start: { line: 28, column: 8 }, end: { line: 30, column: 9 } }, '12': { start: { line: 29, column: 10 }, end: { line: 29, column: 31 } }, '13': { start: { line: 32, column: 6 }, end: { line: 32, column: 18 } }, '14': { start: { line: 37, column: 6 }, end: { line: 37, column: 26 } }, '15': { start: { line: 38, column: 6 }, end: { line: 40, column: 7 } }, '16': { start: { line: 39, column: 8 }, end: { line: 39, column: 31 } }, '17': { start: { line: 41, column: 6 }, end: { line: 41, column: 37 } }, '18': { start: { line: 42, column: 6 }, end: { line: 42, column: 52 } }, '19': { start: { line: 43, column: 6 }, end: { line: 50, column: 7 } }, '20': { start: { line: 44, column: 8 }, end: { line: 44, column: 32 } }, '21': { start: { line: 45, column: 8 }, end: { line: 45, column: 51 } }, '22': { start: { line: 46, column: 8 }, end: { line: 46, column: 26 } }, '23': { start: { line: 48, column: 8 }, end: { line: 48, column: 61 } }, '24': { start: { line: 49, column: 8 }, end: { line: 49, column: 34 } }, '25': { start: { line: 51, column: 6 }, end: { line: 51, column: 24 } }, '26': { start: { line: 52, column: 6 }, end: { line: 52, column: 18 } }, '27': { start: { line: 55, column: 2 }, end: { line: 55, column: 17 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 3, column: 14 }, end: { line: 3, column: 15 } }, loc: { start: { line: 3, column: 26 }, end: { line: 56, column: 1 } }, line: 3 }, '1': { name: 'Context', decl: { start: { line: 4, column: 11 }, end: { line: 4, column: 18 } }, loc: { start: { line: 4, column: 21 }, end: { line: 6, column: 3 } }, line: 4 }, '2': { name: 'setResult', decl: { start: { line: 10, column: 20 }, end: { line: 10, column: 29 } }, loc: { start: { line: 10, column: 38 }, end: { line: 14, column: 5 } }, line: 10 }, '3': { name: 'exit', decl: { start: { line: 17, column: 20 }, end: { line: 17, column: 24 } }, loc: { start: { line: 17, column: 27 }, end: { line: 20, column: 5 } }, line: 17 }, '4': { name: 'switchTo', decl: { start: { line: 23, column: 20 }, end: { line: 23, column: 28 } }, loc: { start: { line: 23, column: 41 }, end: { line: 33, column: 5 } }, line: 23 }, '5': { name: 'push', decl: { start: { line: 36, column: 20 }, end: { line: 36, column: 24 } }, loc: { start: { line: 36, column: 38 }, end: { line: 53, column: 5 } }, line: 36 } }, branchMap: { '0': { loc: { start: { line: 24, column: 6 }, end: { line: 31, column: 7 } }, type: 'if', locations: [{ start: { line: 24, column: 6 }, end: { line: 31, column: 7 } }, { start: { line: 24, column: 6 }, end: { line: 31, column: 7 } }], line: 24 }, '1': { loc: { start: { line: 24, column: 10 }, end: { line: 24, column: 58 } }, type: 'binary-expr', locations: [{ start: { line: 24, column: 10 }, end: { line: 24, column: 34 } }, { start: { line: 24, column: 38 }, end: { line: 24, column: 58 } }], line: 24 }, '2': { loc: { start: { line: 28, column: 8 }, end: { line: 30, column: 9 } }, type: 'if', locations: [{ start: { line: 28, column: 8 }, end: { line: 30, column: 9 } }, { start: { line: 28, column: 8 }, end: { line: 30, column: 9 } }], line: 28 }, '3': { loc: { start: { line: 38, column: 6 }, end: { line: 40, column: 7 } }, type: 'if', locations: [{ start: { line: 38, column: 6 }, end: { line: 40, column: 7 } }, { start: { line: 38, column: 6 }, end: { line: 40, column: 7 } }], line: 38 }, '4': { loc: { start: { line: 41, column: 19 }, end: { line: 41, column: 36 } }, type: 'binary-expr', locations: [{ start: { line: 41, column: 19 }, end: { line: 41, column: 28 } }, { start: { line: 41, column: 32 }, end: { line: 41, column: 36 } }], line: 41 }, '5': { loc: { start: { line: 42, column: 22 }, end: { line: 42, column: 51 } }, type: 'binary-expr', locations: [{ start: { line: 42, column: 22 }, end: { line: 42, column: 35 } }, { start: { line: 42, column: 39 }, end: { line: 42, column: 51 } }], line: 42 }, '6': { loc: { start: { line: 43, column: 6 }, end: { line: 50, column: 7 } }, type: 'if', locations: [{ start: { line: 43, column: 6 }, end: { line: 50, column: 7 } }, { start: { line: 43, column: 6 }, end: { line: 50, column: 7 } }], line: 43 }, '7': { loc: { start: { line: 45, column: 33 }, end: { line: 45, column: 50 } }, type: 'binary-expr', locations: [{ start: { line: 45, column: 33 }, end: { line: 45, column: 42 } }, { start: { line: 45, column: 46 }, end: { line: 45, column: 50 } }], line: 45 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var Context = (cov_14q25fwwg0.s[0]++, function () {
  cov_14q25fwwg0.f[0]++;function Context() {
    cov_14q25fwwg0.f[1]++;cov_14q25fwwg0.s[1]++;classCallCheck$1(this, Context);
  }cov_14q25fwwg0.s[2]++;createClass$1(Context, [{ key: 'setResult', value: function setResult(result) {
      cov_14q25fwwg0.f[2]++;cov_14q25fwwg0.s[3]++;this.result = result;cov_14q25fwwg0.s[4]++;this.hasResult = true;cov_14q25fwwg0.s[5]++;return this;
    } }, { key: 'exit', value: function exit() {
      cov_14q25fwwg0.f[3]++;cov_14q25fwwg0.s[6]++;this.exiting = true;cov_14q25fwwg0.s[7]++;return this;
    } }, { key: 'switchTo', value: function switchTo(next, pipe) {
      cov_14q25fwwg0.f[4]++;cov_14q25fwwg0.s[8]++;if ((cov_14q25fwwg0.b[1][0]++, typeof next === 'string') || (cov_14q25fwwg0.b[1][1]++, next instanceof Pipe)) {
        cov_14q25fwwg0.b[0][0]++;cov_14q25fwwg0.s[9]++;this.nextPipe = next;
      } else {
        cov_14q25fwwg0.b[0][1]++;cov_14q25fwwg0.s[10]++;this.next = next;cov_14q25fwwg0.s[11]++;if (pipe) {
          cov_14q25fwwg0.b[2][0]++;cov_14q25fwwg0.s[12]++;this.nextPipe = pipe;
        } else {
          cov_14q25fwwg0.b[2][1]++;
        }
      }cov_14q25fwwg0.s[13]++;return this;
    } }, { key: 'push', value: function push(child, name) {
      cov_14q25fwwg0.f[5]++;cov_14q25fwwg0.s[14]++;child.parent = this;cov_14q25fwwg0.s[15]++;if (typeof name !== 'undefined') {
        cov_14q25fwwg0.b[3][0]++;cov_14q25fwwg0.s[16]++;child.childName = name;
      } else {
        cov_14q25fwwg0.b[3][1]++;
      }cov_14q25fwwg0.s[17]++;child.root = (cov_14q25fwwg0.b[4][0]++, this.root) || (cov_14q25fwwg0.b[4][1]++, this);cov_14q25fwwg0.s[18]++;child.options = (cov_14q25fwwg0.b[5][0]++, child.options) || (cov_14q25fwwg0.b[5][1]++, this.options);cov_14q25fwwg0.s[19]++;if (!this.children) {
        cov_14q25fwwg0.b[6][0]++;cov_14q25fwwg0.s[20]++;this.children = [child];cov_14q25fwwg0.s[21]++;this.nextAfterChildren = (cov_14q25fwwg0.b[7][0]++, this.next) || (cov_14q25fwwg0.b[7][1]++, null);cov_14q25fwwg0.s[22]++;this.next = child;
      } else {
        cov_14q25fwwg0.b[6][1]++;cov_14q25fwwg0.s[23]++;this.children[this.children.length - 1].next = child;cov_14q25fwwg0.s[24]++;this.children.push(child);
      }cov_14q25fwwg0.s[25]++;child.next = this;cov_14q25fwwg0.s[26]++;return this;
    } }]);cov_14q25fwwg0.s[27]++;return Context;
}());

var cov_2coir87r35 = function () {
  var path = 'Y:\\repos\\jsondiffpatch\\src\\clone.js',
      hash = '046a9f384ecdf12e4b0b16e5da7d0999cb5bb3e1',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: 'Y:\\repos\\jsondiffpatch\\src\\clone.js', statementMap: { '0': { start: { line: 1, column: 14 }, end: { line: 3, column: 1 } }, '1': { start: { line: 2, column: 2 }, end: { line: 2, column: 28 } }, '2': { start: { line: 6, column: 19 }, end: { line: 6, column: 61 } }, '3': { start: { line: 7, column: 2 }, end: { line: 7, column: 50 } }, '4': { start: { line: 11, column: 2 }, end: { line: 13, column: 3 } }, '5': { start: { line: 12, column: 4 }, end: { line: 12, column: 15 } }, '6': { start: { line: 14, column: 2 }, end: { line: 16, column: 3 } }, '7': { start: { line: 15, column: 4 }, end: { line: 15, column: 16 } }, '8': { start: { line: 17, column: 2 }, end: { line: 19, column: 3 } }, '9': { start: { line: 18, column: 4 }, end: { line: 18, column: 26 } }, '10': { start: { line: 20, column: 2 }, end: { line: 22, column: 3 } }, '11': { start: { line: 21, column: 4 }, end: { line: 21, column: 35 } }, '12': { start: { line: 23, column: 2 }, end: { line: 25, column: 3 } }, '13': { start: { line: 24, column: 4 }, end: { line: 24, column: 28 } }, '14': { start: { line: 26, column: 15 }, end: { line: 26, column: 17 } }, '15': { start: { line: 27, column: 2 }, end: { line: 31, column: 3 } }, '16': { start: { line: 28, column: 4 }, end: { line: 30, column: 5 } }, '17': { start: { line: 29, column: 6 }, end: { line: 29, column: 38 } }, '18': { start: { line: 32, column: 2 }, end: { line: 32, column: 16 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 1, column: 68 }, end: { line: 1, column: 69 } }, loc: { start: { line: 1, column: 81 }, end: { line: 3, column: 1 } }, line: 1 }, '1': { name: 'cloneRegExp', decl: { start: { line: 5, column: 9 }, end: { line: 5, column: 20 } }, loc: { start: { line: 5, column: 25 }, end: { line: 8, column: 1 } }, line: 5 }, '2': { name: 'clone', decl: { start: { line: 10, column: 24 }, end: { line: 10, column: 29 } }, loc: { start: { line: 10, column: 35 }, end: { line: 33, column: 1 } }, line: 10 } }, branchMap: { '0': { loc: { start: { line: 1, column: 14 }, end: { line: 3, column: 1 } }, type: 'cond-expr', locations: [{ start: { line: 1, column: 52 }, end: { line: 1, column: 65 } }, { start: { line: 1, column: 68 }, end: { line: 3, column: 1 } }], line: 1 }, '1': { loc: { start: { line: 11, column: 2 }, end: { line: 13, column: 3 } }, type: 'if', locations: [{ start: { line: 11, column: 2 }, end: { line: 13, column: 3 } }, { start: { line: 11, column: 2 }, end: { line: 13, column: 3 } }], line: 11 }, '2': { loc: { start: { line: 11, column: 7 }, end: { line: 11, column: 74 } }, type: 'cond-expr', locations: [{ start: { line: 11, column: 36 }, end: { line: 11, column: 47 } }, { start: { line: 11, column: 50 }, end: { line: 11, column: 74 } }], line: 11 }, '3': { loc: { start: { line: 14, column: 2 }, end: { line: 16, column: 3 } }, type: 'if', locations: [{ start: { line: 14, column: 2 }, end: { line: 16, column: 3 } }, { start: { line: 14, column: 2 }, end: { line: 16, column: 3 } }], line: 14 }, '4': { loc: { start: { line: 17, column: 2 }, end: { line: 19, column: 3 } }, type: 'if', locations: [{ start: { line: 17, column: 2 }, end: { line: 19, column: 3 } }, { start: { line: 17, column: 2 }, end: { line: 19, column: 3 } }], line: 17 }, '5': { loc: { start: { line: 20, column: 2 }, end: { line: 22, column: 3 } }, type: 'if', locations: [{ start: { line: 20, column: 2 }, end: { line: 22, column: 3 } }, { start: { line: 20, column: 2 }, end: { line: 22, column: 3 } }], line: 20 }, '6': { loc: { start: { line: 23, column: 2 }, end: { line: 25, column: 3 } }, type: 'if', locations: [{ start: { line: 23, column: 2 }, end: { line: 25, column: 3 } }, { start: { line: 23, column: 2 }, end: { line: 25, column: 3 } }], line: 23 }, '7': { loc: { start: { line: 28, column: 4 }, end: { line: 30, column: 5 } }, type: 'if', locations: [{ start: { line: 28, column: 4 }, end: { line: 30, column: 5 } }, { start: { line: 28, column: 4 }, end: { line: 30, column: 5 } }], line: 28 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0 }, f: { '0': 0, '1': 0, '2': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var isArray = (cov_2coir87r35.s[0]++, typeof Array.isArray === 'function' ? (cov_2coir87r35.b[0][0]++, Array.isArray) : (cov_2coir87r35.b[0][1]++, function (a) {
  cov_2coir87r35.f[0]++;cov_2coir87r35.s[1]++;return a instanceof Array;
}));function cloneRegExp(re) {
  cov_2coir87r35.f[1]++;var regexMatch = (cov_2coir87r35.s[2]++, /^\/(.*)\/([gimyu]*)$/.exec(re.toString()));cov_2coir87r35.s[3]++;return new RegExp(regexMatch[1], regexMatch[2]);
}function clone(arg) {
  cov_2coir87r35.f[2]++;cov_2coir87r35.s[4]++;if ((typeof arg === 'undefined' ? (cov_2coir87r35.b[2][0]++, 'undefined') : (cov_2coir87r35.b[2][1]++, _typeof$1(arg))) !== 'object') {
    cov_2coir87r35.b[1][0]++;cov_2coir87r35.s[5]++;return arg;
  } else {
    cov_2coir87r35.b[1][1]++;
  }cov_2coir87r35.s[6]++;if (arg === null) {
    cov_2coir87r35.b[3][0]++;cov_2coir87r35.s[7]++;return null;
  } else {
    cov_2coir87r35.b[3][1]++;
  }cov_2coir87r35.s[8]++;if (isArray(arg)) {
    cov_2coir87r35.b[4][0]++;cov_2coir87r35.s[9]++;return arg.map(clone);
  } else {
    cov_2coir87r35.b[4][1]++;
  }cov_2coir87r35.s[10]++;if (arg instanceof Date) {
    cov_2coir87r35.b[5][0]++;cov_2coir87r35.s[11]++;return new Date(arg.getTime());
  } else {
    cov_2coir87r35.b[5][1]++;
  }cov_2coir87r35.s[12]++;if (arg instanceof RegExp) {
    cov_2coir87r35.b[6][0]++;cov_2coir87r35.s[13]++;return cloneRegExp(arg);
  } else {
    cov_2coir87r35.b[6][1]++;
  }var cloned = (cov_2coir87r35.s[14]++, {});cov_2coir87r35.s[15]++;for (var name in arg) {
    cov_2coir87r35.s[16]++;if (Object.prototype.hasOwnProperty.call(arg, name)) {
      cov_2coir87r35.b[7][0]++;cov_2coir87r35.s[17]++;cloned[name] = clone(arg[name]);
    } else {
      cov_2coir87r35.b[7][1]++;
    }
  }cov_2coir87r35.s[18]++;return cloned;
}

var cov_1cmki9scg3 = function () {
  var path = 'Y:\\repos\\jsondiffpatch\\src\\contexts\\diff.js',
      hash = 'b46acb9b1fa05504d37299e235c0166ec24b7295',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: 'Y:\\repos\\jsondiffpatch\\src\\contexts\\diff.js', statementMap: { '0': { start: { line: 4, column: 18 }, end: { line: 34, column: 10 } }, '1': { start: { line: 5, column: 2 }, end: { line: 5, column: 47 } }, '2': { start: { line: 8, column: 4 }, end: { line: 8, column: 51 } }, '3': { start: { line: 10, column: 16 }, end: { line: 10, column: 134 } }, '4': { start: { line: 12, column: 4 }, end: { line: 12, column: 22 } }, '5': { start: { line: 13, column: 4 }, end: { line: 13, column: 24 } }, '6': { start: { line: 14, column: 4 }, end: { line: 14, column: 24 } }, '7': { start: { line: 15, column: 4 }, end: { line: 15, column: 17 } }, '8': { start: { line: 18, column: 2 }, end: { line: 32, column: 6 } }, '9': { start: { line: 21, column: 6 }, end: { line: 29, column: 7 } }, '10': { start: { line: 22, column: 20 }, end: { line: 22, column: 116 } }, '11': { start: { line: 23, column: 8 }, end: { line: 25, column: 9 } }, '12': { start: { line: 24, column: 10 }, end: { line: 24, column: 39 } }, '13': { start: { line: 26, column: 8 }, end: { line: 28, column: 9 } }, '14': { start: { line: 27, column: 10 }, end: { line: 27, column: 39 } }, '15': { start: { line: 30, column: 6 }, end: { line: 30, column: 64 } }, '16': { start: { line: 33, column: 2 }, end: { line: 33, column: 21 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 4, column: 18 }, end: { line: 4, column: 19 } }, loc: { start: { line: 4, column: 38 }, end: { line: 34, column: 1 } }, line: 4 }, '1': { name: 'DiffContext', decl: { start: { line: 7, column: 11 }, end: { line: 7, column: 22 } }, loc: { start: { line: 7, column: 36 }, end: { line: 16, column: 3 } }, line: 7 }, '2': { name: 'setResult', decl: { start: { line: 20, column: 20 }, end: { line: 20, column: 29 } }, loc: { start: { line: 20, column: 38 }, end: { line: 31, column: 5 } }, line: 20 } }, branchMap: { '0': { loc: { start: { line: 10, column: 62 }, end: { line: 10, column: 121 } }, type: 'binary-expr', locations: [{ start: { line: 10, column: 62 }, end: { line: 10, column: 83 } }, { start: { line: 10, column: 87 }, end: { line: 10, column: 121 } }], line: 10 }, '1': { loc: { start: { line: 21, column: 6 }, end: { line: 29, column: 7 } }, type: 'if', locations: [{ start: { line: 21, column: 6 }, end: { line: 29, column: 7 } }, { start: { line: 21, column: 6 }, end: { line: 29, column: 7 } }], line: 21 }, '2': { loc: { start: { line: 21, column: 10 }, end: { line: 21, column: 130 } }, type: 'binary-expr', locations: [{ start: { line: 21, column: 10 }, end: { line: 21, column: 38 } }, { start: { line: 21, column: 42 }, end: { line: 21, column: 130 } }], line: 21 }, '3': { loc: { start: { line: 21, column: 43 }, end: { line: 21, column: 116 } }, type: 'cond-expr', locations: [{ start: { line: 21, column: 75 }, end: { line: 21, column: 86 } }, { start: { line: 21, column: 89 }, end: { line: 21, column: 116 } }], line: 21 }, '4': { loc: { start: { line: 22, column: 20 }, end: { line: 22, column: 116 } }, type: 'cond-expr', locations: [{ start: { line: 22, column: 73 }, end: { line: 22, column: 101 } }, { start: { line: 22, column: 104 }, end: { line: 22, column: 116 } }], line: 22 }, '5': { loc: { start: { line: 23, column: 8 }, end: { line: 25, column: 9 } }, type: 'if', locations: [{ start: { line: 23, column: 8 }, end: { line: 25, column: 9 } }, { start: { line: 23, column: 8 }, end: { line: 25, column: 9 } }], line: 23 }, '6': { loc: { start: { line: 26, column: 8 }, end: { line: 28, column: 9 } }, type: 'if', locations: [{ start: { line: 26, column: 8 }, end: { line: 28, column: 9 } }, { start: { line: 26, column: 8 }, end: { line: 28, column: 9 } }], line: 26 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0 }, f: { '0': 0, '1': 0, '2': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var DiffContext = (cov_1cmki9scg3.s[0]++, function (_Context) {
  cov_1cmki9scg3.f[0]++;cov_1cmki9scg3.s[1]++;inherits$1(DiffContext, _Context);function DiffContext(left, right) {
    cov_1cmki9scg3.f[1]++;cov_1cmki9scg3.s[2]++;classCallCheck$1(this, DiffContext);var _this = (cov_1cmki9scg3.s[3]++, possibleConstructorReturn$1(this, ((cov_1cmki9scg3.b[0][0]++, DiffContext.__proto__) || (cov_1cmki9scg3.b[0][1]++, Object.getPrototypeOf(DiffContext))).call(this)));cov_1cmki9scg3.s[4]++;_this.left = left;cov_1cmki9scg3.s[5]++;_this.right = right;cov_1cmki9scg3.s[6]++;_this.pipe = 'diff';cov_1cmki9scg3.s[7]++;return _this;
  }cov_1cmki9scg3.s[8]++;createClass$1(DiffContext, [{ key: 'setResult', value: function setResult(result) {
      cov_1cmki9scg3.f[2]++;cov_1cmki9scg3.s[9]++;if ((cov_1cmki9scg3.b[2][0]++, this.options.cloneDiffValues) && (cov_1cmki9scg3.b[2][1]++, (typeof result === 'undefined' ? (cov_1cmki9scg3.b[3][0]++, 'undefined') : (cov_1cmki9scg3.b[3][1]++, _typeof$1(result))) === 'object')) {
        cov_1cmki9scg3.b[1][0]++;var clone$$1 = (cov_1cmki9scg3.s[10]++, typeof this.options.cloneDiffValues === 'function' ? (cov_1cmki9scg3.b[4][0]++, this.options.cloneDiffValues) : (cov_1cmki9scg3.b[4][1]++, clone));cov_1cmki9scg3.s[11]++;if (_typeof$1(result[0]) === 'object') {
          cov_1cmki9scg3.b[5][0]++;cov_1cmki9scg3.s[12]++;result[0] = clone$$1(result[0]);
        } else {
          cov_1cmki9scg3.b[5][1]++;
        }cov_1cmki9scg3.s[13]++;if (_typeof$1(result[1]) === 'object') {
          cov_1cmki9scg3.b[6][0]++;cov_1cmki9scg3.s[14]++;result[1] = clone$$1(result[1]);
        } else {
          cov_1cmki9scg3.b[6][1]++;
        }
      } else {
        cov_1cmki9scg3.b[1][1]++;
      }cov_1cmki9scg3.s[15]++;return Context.prototype.setResult.apply(this, arguments);
    } }]);cov_1cmki9scg3.s[16]++;return DiffContext;
}(Context));

var cov_r2pd068yt = function () {
  var path = 'Y:\\repos\\jsondiffpatch\\src\\contexts\\patch.js',
      hash = 'f98eb44ddb80db0924b327a192eea76eb8c99135',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: 'Y:\\repos\\jsondiffpatch\\src\\contexts\\patch.js', statementMap: { '0': { start: { line: 3, column: 19 }, end: { line: 18, column: 10 } }, '1': { start: { line: 4, column: 2 }, end: { line: 4, column: 48 } }, '2': { start: { line: 7, column: 4 }, end: { line: 7, column: 52 } }, '3': { start: { line: 9, column: 16 }, end: { line: 9, column: 136 } }, '4': { start: { line: 11, column: 4 }, end: { line: 11, column: 22 } }, '5': { start: { line: 12, column: 4 }, end: { line: 12, column: 24 } }, '6': { start: { line: 13, column: 4 }, end: { line: 13, column: 25 } }, '7': { start: { line: 14, column: 4 }, end: { line: 14, column: 17 } }, '8': { start: { line: 17, column: 2 }, end: { line: 17, column: 22 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 3, column: 19 }, end: { line: 3, column: 20 } }, loc: { start: { line: 3, column: 39 }, end: { line: 18, column: 1 } }, line: 3 }, '1': { name: 'PatchContext', decl: { start: { line: 6, column: 11 }, end: { line: 6, column: 23 } }, loc: { start: { line: 6, column: 37 }, end: { line: 15, column: 3 } }, line: 6 } }, branchMap: { '0': { loc: { start: { line: 9, column: 62 }, end: { line: 9, column: 123 } }, type: 'binary-expr', locations: [{ start: { line: 9, column: 62 }, end: { line: 9, column: 84 } }, { start: { line: 9, column: 88 }, end: { line: 9, column: 123 } }], line: 9 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0 }, f: { '0': 0, '1': 0 }, b: { '0': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var PatchContext = (cov_r2pd068yt.s[0]++, function (_Context) {
  cov_r2pd068yt.f[0]++;cov_r2pd068yt.s[1]++;inherits$1(PatchContext, _Context);function PatchContext(left, delta) {
    cov_r2pd068yt.f[1]++;cov_r2pd068yt.s[2]++;classCallCheck$1(this, PatchContext);var _this = (cov_r2pd068yt.s[3]++, possibleConstructorReturn$1(this, ((cov_r2pd068yt.b[0][0]++, PatchContext.__proto__) || (cov_r2pd068yt.b[0][1]++, Object.getPrototypeOf(PatchContext))).call(this)));cov_r2pd068yt.s[4]++;_this.left = left;cov_r2pd068yt.s[5]++;_this.delta = delta;cov_r2pd068yt.s[6]++;_this.pipe = 'patch';cov_r2pd068yt.s[7]++;return _this;
  }cov_r2pd068yt.s[8]++;return PatchContext;
}(Context));

var cov_2o9f99sxqf = function () {
  var path = 'Y:\\repos\\jsondiffpatch\\src\\contexts\\reverse.js',
      hash = '92886d482564c29da70e9b6f47011462c15b1e78',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: 'Y:\\repos\\jsondiffpatch\\src\\contexts\\reverse.js', statementMap: { '0': { start: { line: 3, column: 21 }, end: { line: 17, column: 10 } }, '1': { start: { line: 4, column: 2 }, end: { line: 4, column: 50 } }, '2': { start: { line: 7, column: 4 }, end: { line: 7, column: 54 } }, '3': { start: { line: 9, column: 16 }, end: { line: 9, column: 140 } }, '4': { start: { line: 11, column: 4 }, end: { line: 11, column: 24 } }, '5': { start: { line: 12, column: 4 }, end: { line: 12, column: 27 } }, '6': { start: { line: 13, column: 4 }, end: { line: 13, column: 17 } }, '7': { start: { line: 16, column: 2 }, end: { line: 16, column: 24 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 3, column: 21 }, end: { line: 3, column: 22 } }, loc: { start: { line: 3, column: 41 }, end: { line: 17, column: 1 } }, line: 3 }, '1': { name: 'ReverseContext', decl: { start: { line: 6, column: 11 }, end: { line: 6, column: 25 } }, loc: { start: { line: 6, column: 33 }, end: { line: 14, column: 3 } }, line: 6 } }, branchMap: { '0': { loc: { start: { line: 9, column: 62 }, end: { line: 9, column: 127 } }, type: 'binary-expr', locations: [{ start: { line: 9, column: 62 }, end: { line: 9, column: 86 } }, { start: { line: 9, column: 90 }, end: { line: 9, column: 127 } }], line: 9 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0 }, f: { '0': 0, '1': 0 }, b: { '0': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var ReverseContext = (cov_2o9f99sxqf.s[0]++, function (_Context) {
  cov_2o9f99sxqf.f[0]++;cov_2o9f99sxqf.s[1]++;inherits$1(ReverseContext, _Context);function ReverseContext(delta) {
    cov_2o9f99sxqf.f[1]++;cov_2o9f99sxqf.s[2]++;classCallCheck$1(this, ReverseContext);var _this = (cov_2o9f99sxqf.s[3]++, possibleConstructorReturn$1(this, ((cov_2o9f99sxqf.b[0][0]++, ReverseContext.__proto__) || (cov_2o9f99sxqf.b[0][1]++, Object.getPrototypeOf(ReverseContext))).call(this)));cov_2o9f99sxqf.s[4]++;_this.delta = delta;cov_2o9f99sxqf.s[5]++;_this.pipe = 'reverse';cov_2o9f99sxqf.s[6]++;return _this;
  }cov_2o9f99sxqf.s[7]++;return ReverseContext;
}(Context));

var cov_2f64d6qhp6 = function () {
  var path = 'Y:\\repos\\jsondiffpatch\\src\\filters\\trivial.js',
      hash = '620786dab09e03d249222734c3ebf6d26a47094f',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: 'Y:\\repos\\jsondiffpatch\\src\\filters\\trivial.js', statementMap: { '0': { start: { line: 1, column: 14 }, end: { line: 3, column: 1 } }, '1': { start: { line: 2, column: 2 }, end: { line: 2, column: 28 } }, '2': { start: { line: 5, column: 24 }, end: { line: 52, column: 1 } }, '3': { start: { line: 6, column: 2 }, end: { line: 9, column: 3 } }, '4': { start: { line: 7, column: 4 }, end: { line: 7, column: 40 } }, '5': { start: { line: 8, column: 4 }, end: { line: 8, column: 11 } }, '6': { start: { line: 10, column: 2 }, end: { line: 16, column: 3 } }, '7': { start: { line: 11, column: 4 }, end: { line: 13, column: 5 } }, '8': { start: { line: 12, column: 6 }, end: { line: 12, column: 53 } }, '9': { start: { line: 14, column: 4 }, end: { line: 14, column: 46 } }, '10': { start: { line: 15, column: 4 }, end: { line: 15, column: 11 } }, '11': { start: { line: 17, column: 2 }, end: { line: 20, column: 3 } }, '12': { start: { line: 18, column: 4 }, end: { line: 18, column: 51 } }, '13': { start: { line: 19, column: 4 }, end: { line: 19, column: 11 } }, '14': { start: { line: 21, column: 2 }, end: { line: 23, column: 3 } }, '15': { start: { line: 22, column: 4 }, end: { line: 22, column: 51 } }, '16': { start: { line: 24, column: 2 }, end: { line: 24, column: 88 } }, '17': { start: { line: 25, column: 2 }, end: { line: 25, column: 91 } }, '18': { start: { line: 26, column: 2 }, end: { line: 29, column: 3 } }, '19': { start: { line: 27, column: 4 }, end: { line: 27, column: 60 } }, '20': { start: { line: 28, column: 4 }, end: { line: 28, column: 11 } }, '21': { start: { line: 30, column: 2 }, end: { line: 33, column: 3 } }, '22': { start: { line: 31, column: 4 }, end: { line: 31, column: 60 } }, '23': { start: { line: 32, column: 4 }, end: { line: 32, column: 11 } }, '24': { start: { line: 34, column: 2 }, end: { line: 36, column: 3 } }, '25': { start: { line: 35, column: 4 }, end: { line: 35, column: 48 } }, '26': { start: { line: 37, column: 2 }, end: { line: 39, column: 3 } }, '27': { start: { line: 38, column: 4 }, end: { line: 38, column: 50 } }, '28': { start: { line: 40, column: 2 }, end: { line: 43, column: 3 } }, '29': { start: { line: 41, column: 4 }, end: { line: 41, column: 60 } }, '30': { start: { line: 42, column: 4 }, end: { line: 42, column: 11 } }, '31': { start: { line: 45, column: 2 }, end: { line: 51, column: 3 } }, '32': { start: { line: 46, column: 4 }, end: { line: 50, column: 5 } }, '33': { start: { line: 47, column: 6 }, end: { line: 47, column: 84 } }, '34': { start: { line: 49, column: 6 }, end: { line: 49, column: 62 } }, '35': { start: { line: 53, column: 0 }, end: { line: 53, column: 34 } }, '36': { start: { line: 55, column: 25 }, end: { line: 82, column: 1 } }, '37': { start: { line: 56, column: 2 }, end: { line: 59, column: 3 } }, '38': { start: { line: 57, column: 4 }, end: { line: 57, column: 43 } }, '39': { start: { line: 58, column: 4 }, end: { line: 58, column: 11 } }, '40': { start: { line: 60, column: 2 }, end: { line: 60, column: 43 } }, '41': { start: { line: 61, column: 2 }, end: { line: 63, column: 3 } }, '42': { start: { line: 62, column: 4 }, end: { line: 62, column: 11 } }, '43': { start: { line: 64, column: 2 }, end: { line: 67, column: 3 } }, '44': { start: { line: 65, column: 4 }, end: { line: 65, column: 47 } }, '45': { start: { line: 66, column: 4 }, end: { line: 66, column: 11 } }, '46': { start: { line: 68, column: 2 }, end: { line: 78, column: 3 } }, '47': { start: { line: 69, column: 4 }, end: { line: 75, column: 5 } }, '48': { start: { line: 70, column: 22 }, end: { line: 70, column: 67 } }, '49': { start: { line: 71, column: 6 }, end: { line: 74, column: 7 } }, '50': { start: { line: 72, column: 8 }, end: { line: 72, column: 73 } }, '51': { start: { line: 73, column: 8 }, end: { line: 73, column: 15 } }, '52': { start: { line: 76, column: 4 }, end: { line: 76, column: 47 } }, '53': { start: { line: 77, column: 4 }, end: { line: 77, column: 11 } }, '54': { start: { line: 79, column: 2 }, end: { line: 81, column: 3 } }, '55': { start: { line: 80, column: 4 }, end: { line: 80, column: 40 } }, '56': { start: { line: 83, column: 0 }, end: { line: 83, column: 35 } }, '57': { start: { line: 85, column: 27 }, end: { line: 105, column: 1 } }, '58': { start: { line: 86, column: 2 }, end: { line: 89, column: 3 } }, '59': { start: { line: 87, column: 4 }, end: { line: 87, column: 44 } }, '60': { start: { line: 88, column: 4 }, end: { line: 88, column: 11 } }, '61': { start: { line: 90, column: 2 }, end: { line: 90, column: 43 } }, '62': { start: { line: 91, column: 2 }, end: { line: 93, column: 3 } }, '63': { start: { line: 92, column: 4 }, end: { line: 92, column: 11 } }, '64': { start: { line: 94, column: 2 }, end: { line: 97, column: 3 } }, '65': { start: { line: 95, column: 4 }, end: { line: 95, column: 55 } }, '66': { start: { line: 96, column: 4 }, end: { line: 96, column: 11 } }, '67': { start: { line: 98, column: 2 }, end: { line: 101, column: 3 } }, '68': { start: { line: 99, column: 4 }, end: { line: 99, column: 67 } }, '69': { start: { line: 100, column: 4 }, end: { line: 100, column: 11 } }, '70': { start: { line: 102, column: 2 }, end: { line: 104, column: 3 } }, '71': { start: { line: 103, column: 4 }, end: { line: 103, column: 49 } }, '72': { start: { line: 106, column: 0 }, end: { line: 106, column: 37 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 1, column: 68 }, end: { line: 1, column: 69 } }, loc: { start: { line: 1, column: 81 }, end: { line: 3, column: 1 } }, line: 1 }, '1': { name: 'trivialMatchesDiffFilter', decl: { start: { line: 5, column: 33 }, end: { line: 5, column: 57 } }, loc: { start: { line: 5, column: 67 }, end: { line: 52, column: 1 } }, line: 5 }, '2': { name: 'trivialMatchesPatchFilter', decl: { start: { line: 55, column: 34 }, end: { line: 55, column: 59 } }, loc: { start: { line: 55, column: 69 }, end: { line: 82, column: 1 } }, line: 55 }, '3': { name: 'trivialReferseFilter', decl: { start: { line: 85, column: 36 }, end: { line: 85, column: 56 } }, loc: { start: { line: 85, column: 66 }, end: { line: 105, column: 1 } }, line: 85 } }, branchMap: { '0': { loc: { start: { line: 1, column: 14 }, end: { line: 3, column: 1 } }, type: 'cond-expr', locations: [{ start: { line: 1, column: 52 }, end: { line: 1, column: 65 } }, { start: { line: 1, column: 68 }, end: { line: 3, column: 1 } }], line: 1 }, '1': { loc: { start: { line: 6, column: 2 }, end: { line: 9, column: 3 } }, type: 'if', locations: [{ start: { line: 6, column: 2 }, end: { line: 9, column: 3 } }, { start: { line: 6, column: 2 }, end: { line: 9, column: 3 } }], line: 6 }, '2': { loc: { start: { line: 10, column: 2 }, end: { line: 16, column: 3 } }, type: 'if', locations: [{ start: { line: 10, column: 2 }, end: { line: 16, column: 3 } }, { start: { line: 10, column: 2 }, end: { line: 16, column: 3 } }], line: 10 }, '3': { loc: { start: { line: 11, column: 4 }, end: { line: 13, column: 5 } }, type: 'if', locations: [{ start: { line: 11, column: 4 }, end: { line: 13, column: 5 } }, { start: { line: 11, column: 4 }, end: { line: 13, column: 5 } }], line: 11 }, '4': { loc: { start: { line: 17, column: 2 }, end: { line: 20, column: 3 } }, type: 'if', locations: [{ start: { line: 17, column: 2 }, end: { line: 20, column: 3 } }, { start: { line: 17, column: 2 }, end: { line: 20, column: 3 } }], line: 17 }, '5': { loc: { start: { line: 21, column: 2 }, end: { line: 23, column: 3 } }, type: 'if', locations: [{ start: { line: 21, column: 2 }, end: { line: 23, column: 3 } }, { start: { line: 21, column: 2 }, end: { line: 23, column: 3 } }], line: 21 }, '6': { loc: { start: { line: 21, column: 6 }, end: { line: 21, column: 79 } }, type: 'binary-expr', locations: [{ start: { line: 21, column: 6 }, end: { line: 21, column: 40 } }, { start: { line: 21, column: 44 }, end: { line: 21, column: 79 } }], line: 21 }, '7': { loc: { start: { line: 24, column: 21 }, end: { line: 24, column: 87 } }, type: 'cond-expr', locations: [{ start: { line: 24, column: 45 }, end: { line: 24, column: 51 } }, { start: { line: 24, column: 54 }, end: { line: 24, column: 87 } }], line: 24 }, '8': { loc: { start: { line: 25, column: 22 }, end: { line: 25, column: 90 } }, type: 'cond-expr', locations: [{ start: { line: 25, column: 47 }, end: { line: 25, column: 53 } }, { start: { line: 25, column: 56 }, end: { line: 25, column: 90 } }], line: 25 }, '9': { loc: { start: { line: 26, column: 2 }, end: { line: 29, column: 3 } }, type: 'if', locations: [{ start: { line: 26, column: 2 }, end: { line: 29, column: 3 } }, { start: { line: 26, column: 2 }, end: { line: 29, column: 3 } }], line: 26 }, '10': { loc: { start: { line: 30, column: 2 }, end: { line: 33, column: 3 } }, type: 'if', locations: [{ start: { line: 30, column: 2 }, end: { line: 33, column: 3 } }, { start: { line: 30, column: 2 }, end: { line: 33, column: 3 } }], line: 30 }, '11': { loc: { start: { line: 30, column: 6 }, end: { line: 30, column: 69 } }, type: 'binary-expr', locations: [{ start: { line: 30, column: 6 }, end: { line: 30, column: 36 } }, { start: { line: 30, column: 40 }, end: { line: 30, column: 69 } }], line: 30 }, '12': { loc: { start: { line: 34, column: 2 }, end: { line: 36, column: 3 } }, type: 'if', locations: [{ start: { line: 34, column: 2 }, end: { line: 36, column: 3 } }, { start: { line: 34, column: 2 }, end: { line: 36, column: 3 } }], line: 34 }, '13': { loc: { start: { line: 37, column: 2 }, end: { line: 39, column: 3 } }, type: 'if', locations: [{ start: { line: 37, column: 2 }, end: { line: 39, column: 3 } }, { start: { line: 37, column: 2 }, end: { line: 39, column: 3 } }], line: 37 }, '14': { loc: { start: { line: 40, column: 2 }, end: { line: 43, column: 3 } }, type: 'if', locations: [{ start: { line: 40, column: 2 }, end: { line: 43, column: 3 } }, { start: { line: 40, column: 2 }, end: { line: 43, column: 3 } }], line: 40 }, '15': { loc: { start: { line: 45, column: 2 }, end: { line: 51, column: 3 } }, type: 'if', locations: [{ start: { line: 45, column: 2 }, end: { line: 51, column: 3 } }, { start: { line: 45, column: 2 }, end: { line: 51, column: 3 } }], line: 45 }, '16': { loc: { start: { line: 46, column: 4 }, end: { line: 50, column: 5 } }, type: 'if', locations: [{ start: { line: 46, column: 4 }, end: { line: 50, column: 5 } }, { start: { line: 46, column: 4 }, end: { line: 50, column: 5 } }], line: 46 }, '17': { loc: { start: { line: 56, column: 2 }, end: { line: 59, column: 3 } }, type: 'if', locations: [{ start: { line: 56, column: 2 }, end: { line: 59, column: 3 } }, { start: { line: 56, column: 2 }, end: { line: 59, column: 3 } }], line: 56 }, '18': { loc: { start: { line: 61, column: 2 }, end: { line: 63, column: 3 } }, type: 'if', locations: [{ start: { line: 61, column: 2 }, end: { line: 63, column: 3 } }, { start: { line: 61, column: 2 }, end: { line: 63, column: 3 } }], line: 61 }, '19': { loc: { start: { line: 64, column: 2 }, end: { line: 67, column: 3 } }, type: 'if', locations: [{ start: { line: 64, column: 2 }, end: { line: 67, column: 3 } }, { start: { line: 64, column: 2 }, end: { line: 67, column: 3 } }], line: 64 }, '20': { loc: { start: { line: 68, column: 2 }, end: { line: 78, column: 3 } }, type: 'if', locations: [{ start: { line: 68, column: 2 }, end: { line: 78, column: 3 } }, { start: { line: 68, column: 2 }, end: { line: 78, column: 3 } }], line: 68 }, '21': { loc: { start: { line: 69, column: 4 }, end: { line: 75, column: 5 } }, type: 'if', locations: [{ start: { line: 69, column: 4 }, end: { line: 75, column: 5 } }, { start: { line: 69, column: 4 }, end: { line: 75, column: 5 } }], line: 69 }, '22': { loc: { start: { line: 71, column: 6 }, end: { line: 74, column: 7 } }, type: 'if', locations: [{ start: { line: 71, column: 6 }, end: { line: 74, column: 7 } }, { start: { line: 71, column: 6 }, end: { line: 74, column: 7 } }], line: 71 }, '23': { loc: { start: { line: 79, column: 2 }, end: { line: 81, column: 3 } }, type: 'if', locations: [{ start: { line: 79, column: 2 }, end: { line: 81, column: 3 } }, { start: { line: 79, column: 2 }, end: { line: 81, column: 3 } }], line: 79 }, '24': { loc: { start: { line: 79, column: 6 }, end: { line: 79, column: 58 } }, type: 'binary-expr', locations: [{ start: { line: 79, column: 6 }, end: { line: 79, column: 32 } }, { start: { line: 79, column: 36 }, end: { line: 79, column: 58 } }], line: 79 }, '25': { loc: { start: { line: 86, column: 2 }, end: { line: 89, column: 3 } }, type: 'if', locations: [{ start: { line: 86, column: 2 }, end: { line: 89, column: 3 } }, { start: { line: 86, column: 2 }, end: { line: 89, column: 3 } }], line: 86 }, '26': { loc: { start: { line: 91, column: 2 }, end: { line: 93, column: 3 } }, type: 'if', locations: [{ start: { line: 91, column: 2 }, end: { line: 93, column: 3 } }, { start: { line: 91, column: 2 }, end: { line: 93, column: 3 } }], line: 91 }, '27': { loc: { start: { line: 94, column: 2 }, end: { line: 97, column: 3 } }, type: 'if', locations: [{ start: { line: 94, column: 2 }, end: { line: 97, column: 3 } }, { start: { line: 94, column: 2 }, end: { line: 97, column: 3 } }], line: 94 }, '28': { loc: { start: { line: 98, column: 2 }, end: { line: 101, column: 3 } }, type: 'if', locations: [{ start: { line: 98, column: 2 }, end: { line: 101, column: 3 } }, { start: { line: 98, column: 2 }, end: { line: 101, column: 3 } }], line: 98 }, '29': { loc: { start: { line: 102, column: 2 }, end: { line: 104, column: 3 } }, type: 'if', locations: [{ start: { line: 102, column: 2 }, end: { line: 104, column: 3 } }, { start: { line: 102, column: 2 }, end: { line: 104, column: 3 } }], line: 102 }, '30': { loc: { start: { line: 102, column: 6 }, end: { line: 102, column: 58 } }, type: 'binary-expr', locations: [{ start: { line: 102, column: 6 }, end: { line: 102, column: 32 } }, { start: { line: 102, column: 36 }, end: { line: 102, column: 58 } }], line: 102 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0], '8': [0, 0], '9': [0, 0], '10': [0, 0], '11': [0, 0], '12': [0, 0], '13': [0, 0], '14': [0, 0], '15': [0, 0], '16': [0, 0], '17': [0, 0], '18': [0, 0], '19': [0, 0], '20': [0, 0], '21': [0, 0], '22': [0, 0], '23': [0, 0], '24': [0, 0], '25': [0, 0], '26': [0, 0], '27': [0, 0], '28': [0, 0], '29': [0, 0], '30': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var isArray$1 = (cov_2f64d6qhp6.s[0]++, typeof Array.isArray === 'function' ? (cov_2f64d6qhp6.b[0][0]++, Array.isArray) : (cov_2f64d6qhp6.b[0][1]++, function (a) {
  cov_2f64d6qhp6.f[0]++;cov_2f64d6qhp6.s[1]++;return a instanceof Array;
}));cov_2f64d6qhp6.s[2]++;var diffFilter = function trivialMatchesDiffFilter(context) {
  cov_2f64d6qhp6.f[1]++;cov_2f64d6qhp6.s[3]++;if (context.left === context.right) {
    cov_2f64d6qhp6.b[1][0]++;cov_2f64d6qhp6.s[4]++;context.setResult(undefined).exit();cov_2f64d6qhp6.s[5]++;return;
  } else {
    cov_2f64d6qhp6.b[1][1]++;
  }cov_2f64d6qhp6.s[6]++;if (typeof context.left === 'undefined') {
    cov_2f64d6qhp6.b[2][0]++;cov_2f64d6qhp6.s[7]++;if (typeof context.right === 'function') {
      cov_2f64d6qhp6.b[3][0]++;cov_2f64d6qhp6.s[8]++;throw new Error('functions are not supported');
    } else {
      cov_2f64d6qhp6.b[3][1]++;
    }cov_2f64d6qhp6.s[9]++;context.setResult([context.right]).exit();cov_2f64d6qhp6.s[10]++;return;
  } else {
    cov_2f64d6qhp6.b[2][1]++;
  }cov_2f64d6qhp6.s[11]++;if (typeof context.right === 'undefined') {
    cov_2f64d6qhp6.b[4][0]++;cov_2f64d6qhp6.s[12]++;context.setResult([context.left, 0, 0]).exit();cov_2f64d6qhp6.s[13]++;return;
  } else {
    cov_2f64d6qhp6.b[4][1]++;
  }cov_2f64d6qhp6.s[14]++;if ((cov_2f64d6qhp6.b[6][0]++, typeof context.left === 'function') || (cov_2f64d6qhp6.b[6][1]++, typeof context.right === 'function')) {
    cov_2f64d6qhp6.b[5][0]++;cov_2f64d6qhp6.s[15]++;throw new Error('functions are not supported');
  } else {
    cov_2f64d6qhp6.b[5][1]++;
  }cov_2f64d6qhp6.s[16]++;context.leftType = context.left === null ? (cov_2f64d6qhp6.b[7][0]++, 'null') : (cov_2f64d6qhp6.b[7][1]++, _typeof$1(context.left));cov_2f64d6qhp6.s[17]++;context.rightType = context.right === null ? (cov_2f64d6qhp6.b[8][0]++, 'null') : (cov_2f64d6qhp6.b[8][1]++, _typeof$1(context.right));cov_2f64d6qhp6.s[18]++;if (context.leftType !== context.rightType) {
    cov_2f64d6qhp6.b[9][0]++;cov_2f64d6qhp6.s[19]++;context.setResult([context.left, context.right]).exit();cov_2f64d6qhp6.s[20]++;return;
  } else {
    cov_2f64d6qhp6.b[9][1]++;
  }cov_2f64d6qhp6.s[21]++;if ((cov_2f64d6qhp6.b[11][0]++, context.leftType === 'boolean') || (cov_2f64d6qhp6.b[11][1]++, context.leftType === 'number')) {
    cov_2f64d6qhp6.b[10][0]++;cov_2f64d6qhp6.s[22]++;context.setResult([context.left, context.right]).exit();cov_2f64d6qhp6.s[23]++;return;
  } else {
    cov_2f64d6qhp6.b[10][1]++;
  }cov_2f64d6qhp6.s[24]++;if (context.leftType === 'object') {
    cov_2f64d6qhp6.b[12][0]++;cov_2f64d6qhp6.s[25]++;context.leftIsArray = isArray$1(context.left);
  } else {
    cov_2f64d6qhp6.b[12][1]++;
  }cov_2f64d6qhp6.s[26]++;if (context.rightType === 'object') {
    cov_2f64d6qhp6.b[13][0]++;cov_2f64d6qhp6.s[27]++;context.rightIsArray = isArray$1(context.right);
  } else {
    cov_2f64d6qhp6.b[13][1]++;
  }cov_2f64d6qhp6.s[28]++;if (context.leftIsArray !== context.rightIsArray) {
    cov_2f64d6qhp6.b[14][0]++;cov_2f64d6qhp6.s[29]++;context.setResult([context.left, context.right]).exit();cov_2f64d6qhp6.s[30]++;return;
  } else {
    cov_2f64d6qhp6.b[14][1]++;
  }cov_2f64d6qhp6.s[31]++;if (context.left instanceof RegExp) {
    cov_2f64d6qhp6.b[15][0]++;cov_2f64d6qhp6.s[32]++;if (context.right instanceof RegExp) {
      cov_2f64d6qhp6.b[16][0]++;cov_2f64d6qhp6.s[33]++;context.setResult([context.left.toString(), context.right.toString()]).exit();
    } else {
      cov_2f64d6qhp6.b[16][1]++;cov_2f64d6qhp6.s[34]++;context.setResult([context.left, context.right]).exit();
    }
  } else {
    cov_2f64d6qhp6.b[15][1]++;
  }
};cov_2f64d6qhp6.s[35]++;diffFilter.filterName = 'trivial';cov_2f64d6qhp6.s[36]++;var patchFilter = function trivialMatchesPatchFilter(context) {
  cov_2f64d6qhp6.f[2]++;cov_2f64d6qhp6.s[37]++;if (typeof context.delta === 'undefined') {
    cov_2f64d6qhp6.b[17][0]++;cov_2f64d6qhp6.s[38]++;context.setResult(context.left).exit();cov_2f64d6qhp6.s[39]++;return;
  } else {
    cov_2f64d6qhp6.b[17][1]++;
  }cov_2f64d6qhp6.s[40]++;context.nested = !isArray$1(context.delta);cov_2f64d6qhp6.s[41]++;if (context.nested) {
    cov_2f64d6qhp6.b[18][0]++;cov_2f64d6qhp6.s[42]++;return;
  } else {
    cov_2f64d6qhp6.b[18][1]++;
  }cov_2f64d6qhp6.s[43]++;if (context.delta.length === 1) {
    cov_2f64d6qhp6.b[19][0]++;cov_2f64d6qhp6.s[44]++;context.setResult(context.delta[0]).exit();cov_2f64d6qhp6.s[45]++;return;
  } else {
    cov_2f64d6qhp6.b[19][1]++;
  }cov_2f64d6qhp6.s[46]++;if (context.delta.length === 2) {
    cov_2f64d6qhp6.b[20][0]++;cov_2f64d6qhp6.s[47]++;if (context.left instanceof RegExp) {
      cov_2f64d6qhp6.b[21][0]++;var regexArgs = (cov_2f64d6qhp6.s[48]++, /^\/(.*)\/([gimyu]+)$/.exec(context.delta[1]));cov_2f64d6qhp6.s[49]++;if (regexArgs) {
        cov_2f64d6qhp6.b[22][0]++;cov_2f64d6qhp6.s[50]++;context.setResult(new RegExp(regexArgs[1], regexArgs[2])).exit();cov_2f64d6qhp6.s[51]++;return;
      } else {
        cov_2f64d6qhp6.b[22][1]++;
      }
    } else {
      cov_2f64d6qhp6.b[21][1]++;
    }cov_2f64d6qhp6.s[52]++;context.setResult(context.delta[1]).exit();cov_2f64d6qhp6.s[53]++;return;
  } else {
    cov_2f64d6qhp6.b[20][1]++;
  }cov_2f64d6qhp6.s[54]++;if ((cov_2f64d6qhp6.b[24][0]++, context.delta.length === 3) && (cov_2f64d6qhp6.b[24][1]++, context.delta[2] === 0)) {
    cov_2f64d6qhp6.b[23][0]++;cov_2f64d6qhp6.s[55]++;context.setResult(undefined).exit();
  } else {
    cov_2f64d6qhp6.b[23][1]++;
  }
};cov_2f64d6qhp6.s[56]++;patchFilter.filterName = 'trivial';cov_2f64d6qhp6.s[57]++;var reverseFilter = function trivialReferseFilter(context) {
  cov_2f64d6qhp6.f[3]++;cov_2f64d6qhp6.s[58]++;if (typeof context.delta === 'undefined') {
    cov_2f64d6qhp6.b[25][0]++;cov_2f64d6qhp6.s[59]++;context.setResult(context.delta).exit();cov_2f64d6qhp6.s[60]++;return;
  } else {
    cov_2f64d6qhp6.b[25][1]++;
  }cov_2f64d6qhp6.s[61]++;context.nested = !isArray$1(context.delta);cov_2f64d6qhp6.s[62]++;if (context.nested) {
    cov_2f64d6qhp6.b[26][0]++;cov_2f64d6qhp6.s[63]++;return;
  } else {
    cov_2f64d6qhp6.b[26][1]++;
  }cov_2f64d6qhp6.s[64]++;if (context.delta.length === 1) {
    cov_2f64d6qhp6.b[27][0]++;cov_2f64d6qhp6.s[65]++;context.setResult([context.delta[0], 0, 0]).exit();cov_2f64d6qhp6.s[66]++;return;
  } else {
    cov_2f64d6qhp6.b[27][1]++;
  }cov_2f64d6qhp6.s[67]++;if (context.delta.length === 2) {
    cov_2f64d6qhp6.b[28][0]++;cov_2f64d6qhp6.s[68]++;context.setResult([context.delta[1], context.delta[0]]).exit();cov_2f64d6qhp6.s[69]++;return;
  } else {
    cov_2f64d6qhp6.b[28][1]++;
  }cov_2f64d6qhp6.s[70]++;if ((cov_2f64d6qhp6.b[30][0]++, context.delta.length === 3) && (cov_2f64d6qhp6.b[30][1]++, context.delta[2] === 0)) {
    cov_2f64d6qhp6.b[29][0]++;cov_2f64d6qhp6.s[71]++;context.setResult([context.delta[0]]).exit();
  } else {
    cov_2f64d6qhp6.b[29][1]++;
  }
};cov_2f64d6qhp6.s[72]++;reverseFilter.filterName = 'trivial';

var cov_1asx7bocdk = function () {
  var path = 'Y:\\repos\\jsondiffpatch\\src\\filters\\nested.js',
      hash = 'c9df674ce41a0124905b62b95ccf497d662bb4a7',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: 'Y:\\repos\\jsondiffpatch\\src\\filters\\nested.js', statementMap: { '0': { start: { line: 6, column: 2 }, end: { line: 8, column: 3 } }, '1': { start: { line: 7, column: 4 }, end: { line: 7, column: 11 } }, '2': { start: { line: 9, column: 15 }, end: { line: 9, column: 38 } }, '3': { start: { line: 10, column: 14 }, end: { line: 10, column: 20 } }, '4': { start: { line: 11, column: 15 }, end: { line: 11, column: 29 } }, '5': { start: { line: 12, column: 2 }, end: { line: 19, column: 3 } }, '6': { start: { line: 13, column: 4 }, end: { line: 13, column: 36 } }, '7': { start: { line: 14, column: 4 }, end: { line: 16, column: 5 } }, '8': { start: { line: 15, column: 6 }, end: { line: 15, column: 15 } }, '9': { start: { line: 17, column: 4 }, end: { line: 17, column: 26 } }, '10': { start: { line: 18, column: 4 }, end: { line: 18, column: 43 } }, '11': { start: { line: 20, column: 2 }, end: { line: 22, column: 3 } }, '12': { start: { line: 21, column: 4 }, end: { line: 21, column: 20 } }, '13': { start: { line: 23, column: 2 }, end: { line: 23, column: 35 } }, '14': { start: { line: 25, column: 0 }, end: { line: 25, column: 57 } }, '15': { start: { line: 28, column: 2 }, end: { line: 30, column: 3 } }, '16': { start: { line: 29, column: 4 }, end: { line: 29, column: 11 } }, '17': { start: { line: 32, column: 13 }, end: { line: 32, column: 19 } }, '18': { start: { line: 33, column: 14 }, end: { line: 33, column: 20 } }, '19': { start: { line: 34, column: 23 }, end: { line: 34, column: 53 } }, '20': { start: { line: 35, column: 2 }, end: { line: 44, column: 3 } }, '21': { start: { line: 36, column: 4 }, end: { line: 38, column: 5 } }, '22': { start: { line: 37, column: 6 }, end: { line: 37, column: 15 } }, '23': { start: { line: 39, column: 4 }, end: { line: 41, column: 5 } }, '24': { start: { line: 40, column: 6 }, end: { line: 40, column: 15 } }, '25': { start: { line: 42, column: 4 }, end: { line: 42, column: 69 } }, '26': { start: { line: 43, column: 4 }, end: { line: 43, column: 30 } }, '27': { start: { line: 45, column: 2 }, end: { line: 56, column: 3 } }, '28': { start: { line: 46, column: 4 }, end: { line: 48, column: 5 } }, '29': { start: { line: 47, column: 6 }, end: { line: 47, column: 15 } }, '30': { start: { line: 49, column: 4 }, end: { line: 51, column: 5 } }, '31': { start: { line: 50, column: 6 }, end: { line: 50, column: 15 } }, '32': { start: { line: 52, column: 4 }, end: { line: 55, column: 5 } }, '33': { start: { line: 53, column: 6 }, end: { line: 53, column: 62 } }, '34': { start: { line: 54, column: 6 }, end: { line: 54, column: 32 } }, '35': { start: { line: 58, column: 2 }, end: { line: 61, column: 3 } }, '36': { start: { line: 59, column: 4 }, end: { line: 59, column: 40 } }, '37': { start: { line: 60, column: 4 }, end: { line: 60, column: 11 } }, '38': { start: { line: 62, column: 2 }, end: { line: 62, column: 17 } }, '39': { start: { line: 64, column: 0 }, end: { line: 64, column: 41 } }, '40': { start: { line: 66, column: 25 }, end: { line: 80, column: 1 } }, '41': { start: { line: 67, column: 2 }, end: { line: 69, column: 3 } }, '42': { start: { line: 68, column: 4 }, end: { line: 68, column: 11 } }, '43': { start: { line: 70, column: 2 }, end: { line: 72, column: 3 } }, '44': { start: { line: 71, column: 4 }, end: { line: 71, column: 11 } }, '45': { start: { line: 73, column: 13 }, end: { line: 73, column: 19 } }, '46': { start: { line: 74, column: 14 }, end: { line: 74, column: 20 } }, '47': { start: { line: 75, column: 2 }, end: { line: 78, column: 3 } }, '48': { start: { line: 76, column: 4 }, end: { line: 76, column: 70 } }, '49': { start: { line: 77, column: 4 }, end: { line: 77, column: 30 } }, '50': { start: { line: 79, column: 2 }, end: { line: 79, column: 17 } }, '51': { start: { line: 81, column: 0 }, end: { line: 81, column: 35 } }, '52': { start: { line: 83, column: 40 }, end: { line: 101, column: 1 } }, '53': { start: { line: 84, column: 2 }, end: { line: 86, column: 3 } }, '54': { start: { line: 85, column: 4 }, end: { line: 85, column: 11 } }, '55': { start: { line: 87, column: 2 }, end: { line: 89, column: 3 } }, '56': { start: { line: 88, column: 4 }, end: { line: 88, column: 11 } }, '57': { start: { line: 90, column: 15 }, end: { line: 90, column: 38 } }, '58': { start: { line: 91, column: 14 }, end: { line: 91, column: 20 } }, '59': { start: { line: 92, column: 2 }, end: { line: 99, column: 3 } }, '60': { start: { line: 93, column: 4 }, end: { line: 93, column: 36 } }, '61': { start: { line: 94, column: 4 }, end: { line: 98, column: 5 } }, '62': { start: { line: 95, column: 6 }, end: { line: 95, column: 43 } }, '63': { start: { line: 96, column: 11 }, end: { line: 98, column: 5 } }, '64': { start: { line: 97, column: 6 }, end: { line: 97, column: 51 } }, '65': { start: { line: 100, column: 2 }, end: { line: 100, column: 41 } }, '66': { start: { line: 102, column: 0 }, end: { line: 102, column: 58 } }, '67': { start: { line: 104, column: 27 }, end: { line: 118, column: 1 } }, '68': { start: { line: 105, column: 2 }, end: { line: 107, column: 3 } }, '69': { start: { line: 106, column: 4 }, end: { line: 106, column: 11 } }, '70': { start: { line: 108, column: 2 }, end: { line: 110, column: 3 } }, '71': { start: { line: 109, column: 4 }, end: { line: 109, column: 11 } }, '72': { start: { line: 111, column: 13 }, end: { line: 111, column: 19 } }, '73': { start: { line: 112, column: 14 }, end: { line: 112, column: 20 } }, '74': { start: { line: 113, column: 2 }, end: { line: 116, column: 3 } }, '75': { start: { line: 114, column: 4 }, end: { line: 114, column: 52 } }, '76': { start: { line: 115, column: 4 }, end: { line: 115, column: 30 } }, '77': { start: { line: 117, column: 2 }, end: { line: 117, column: 17 } }, '78': { start: { line: 119, column: 0 }, end: { line: 119, column: 37 } }, '79': { start: { line: 122, column: 2 }, end: { line: 124, column: 3 } }, '80': { start: { line: 123, column: 4 }, end: { line: 123, column: 11 } }, '81': { start: { line: 125, column: 2 }, end: { line: 127, column: 3 } }, '82': { start: { line: 126, column: 4 }, end: { line: 126, column: 11 } }, '83': { start: { line: 128, column: 15 }, end: { line: 128, column: 38 } }, '84': { start: { line: 129, column: 14 }, end: { line: 129, column: 20 } }, '85': { start: { line: 130, column: 14 }, end: { line: 130, column: 16 } }, '86': { start: { line: 131, column: 2 }, end: { line: 136, column: 3 } }, '87': { start: { line: 132, column: 4 }, end: { line: 132, column: 36 } }, '88': { start: { line: 133, column: 4 }, end: { line: 135, column: 5 } }, '89': { start: { line: 134, column: 6 }, end: { line: 134, column: 44 } }, '90': { start: { line: 137, column: 2 }, end: { line: 137, column: 34 } }, '91': { start: { line: 139, column: 0 }, end: { line: 139, column: 60 } } }, fnMap: { '0': { name: 'collectChildrenDiffFilter', decl: { start: { line: 5, column: 16 }, end: { line: 5, column: 41 } }, loc: { start: { line: 5, column: 51 }, end: { line: 24, column: 1 } }, line: 5 }, '1': { name: 'objectsDiffFilter', decl: { start: { line: 27, column: 16 }, end: { line: 27, column: 33 } }, loc: { start: { line: 27, column: 43 }, end: { line: 63, column: 1 } }, line: 27 }, '2': { name: 'nestedPatchFilter', decl: { start: { line: 66, column: 34 }, end: { line: 66, column: 51 } }, loc: { start: { line: 66, column: 61 }, end: { line: 80, column: 1 } }, line: 66 }, '3': { name: 'collectChildrenPatchFilter', decl: { start: { line: 83, column: 49 }, end: { line: 83, column: 75 } }, loc: { start: { line: 83, column: 85 }, end: { line: 101, column: 1 } }, line: 83 }, '4': { name: 'nestedReverseFilter', decl: { start: { line: 104, column: 36 }, end: { line: 104, column: 55 } }, loc: { start: { line: 104, column: 65 }, end: { line: 118, column: 1 } }, line: 104 }, '5': { name: 'collectChildrenReverseFilter', decl: { start: { line: 121, column: 16 }, end: { line: 121, column: 44 } }, loc: { start: { line: 121, column: 54 }, end: { line: 138, column: 1 } }, line: 121 } }, branchMap: { '0': { loc: { start: { line: 6, column: 2 }, end: { line: 8, column: 3 } }, type: 'if', locations: [{ start: { line: 6, column: 2 }, end: { line: 8, column: 3 } }, { start: { line: 6, column: 2 }, end: { line: 8, column: 3 } }], line: 6 }, '1': { loc: { start: { line: 6, column: 6 }, end: { line: 6, column: 35 } }, type: 'binary-expr', locations: [{ start: { line: 6, column: 6 }, end: { line: 6, column: 14 } }, { start: { line: 6, column: 18 }, end: { line: 6, column: 35 } }], line: 6 }, '2': { loc: { start: { line: 14, column: 4 }, end: { line: 16, column: 5 } }, type: 'if', locations: [{ start: { line: 14, column: 4 }, end: { line: 16, column: 5 } }, { start: { line: 14, column: 4 }, end: { line: 16, column: 5 } }], line: 14 }, '3': { loc: { start: { line: 17, column: 13 }, end: { line: 17, column: 25 } }, type: 'binary-expr', locations: [{ start: { line: 17, column: 13 }, end: { line: 17, column: 19 } }, { start: { line: 17, column: 23 }, end: { line: 17, column: 25 } }], line: 17 }, '4': { loc: { start: { line: 20, column: 2 }, end: { line: 22, column: 3 } }, type: 'if', locations: [{ start: { line: 20, column: 2 }, end: { line: 22, column: 3 } }, { start: { line: 20, column: 2 }, end: { line: 22, column: 3 } }], line: 20 }, '5': { loc: { start: { line: 20, column: 6 }, end: { line: 20, column: 35 } }, type: 'binary-expr', locations: [{ start: { line: 20, column: 6 }, end: { line: 20, column: 12 } }, { start: { line: 20, column: 16 }, end: { line: 20, column: 35 } }], line: 20 }, '6': { loc: { start: { line: 28, column: 2 }, end: { line: 30, column: 3 } }, type: 'if', locations: [{ start: { line: 28, column: 2 }, end: { line: 30, column: 3 } }, { start: { line: 28, column: 2 }, end: { line: 30, column: 3 } }], line: 28 }, '7': { loc: { start: { line: 28, column: 6 }, end: { line: 28, column: 58 } }, type: 'binary-expr', locations: [{ start: { line: 28, column: 6 }, end: { line: 28, column: 25 } }, { start: { line: 28, column: 29 }, end: { line: 28, column: 58 } }], line: 28 }, '8': { loc: { start: { line: 36, column: 4 }, end: { line: 38, column: 5 } }, type: 'if', locations: [{ start: { line: 36, column: 4 }, end: { line: 38, column: 5 } }, { start: { line: 36, column: 4 }, end: { line: 38, column: 5 } }], line: 36 }, '9': { loc: { start: { line: 39, column: 4 }, end: { line: 41, column: 5 } }, type: 'if', locations: [{ start: { line: 39, column: 4 }, end: { line: 41, column: 5 } }, { start: { line: 39, column: 4 }, end: { line: 41, column: 5 } }], line: 39 }, '10': { loc: { start: { line: 39, column: 8 }, end: { line: 39, column: 56 } }, type: 'binary-expr', locations: [{ start: { line: 39, column: 8 }, end: { line: 39, column: 22 } }, { start: { line: 39, column: 26 }, end: { line: 39, column: 56 } }], line: 39 }, '11': { loc: { start: { line: 46, column: 4 }, end: { line: 48, column: 5 } }, type: 'if', locations: [{ start: { line: 46, column: 4 }, end: { line: 48, column: 5 } }, { start: { line: 46, column: 4 }, end: { line: 48, column: 5 } }], line: 46 }, '12': { loc: { start: { line: 49, column: 4 }, end: { line: 51, column: 5 } }, type: 'if', locations: [{ start: { line: 49, column: 4 }, end: { line: 51, column: 5 } }, { start: { line: 49, column: 4 }, end: { line: 51, column: 5 } }], line: 49 }, '13': { loc: { start: { line: 49, column: 8 }, end: { line: 49, column: 56 } }, type: 'binary-expr', locations: [{ start: { line: 49, column: 8 }, end: { line: 49, column: 22 } }, { start: { line: 49, column: 26 }, end: { line: 49, column: 56 } }], line: 49 }, '14': { loc: { start: { line: 52, column: 4 }, end: { line: 55, column: 5 } }, type: 'if', locations: [{ start: { line: 52, column: 4 }, end: { line: 55, column: 5 } }, { start: { line: 52, column: 4 }, end: { line: 55, column: 5 } }], line: 52 }, '15': { loc: { start: { line: 58, column: 2 }, end: { line: 61, column: 3 } }, type: 'if', locations: [{ start: { line: 58, column: 2 }, end: { line: 61, column: 3 } }, { start: { line: 58, column: 2 }, end: { line: 61, column: 3 } }], line: 58 }, '16': { loc: { start: { line: 58, column: 6 }, end: { line: 58, column: 56 } }, type: 'binary-expr', locations: [{ start: { line: 58, column: 6 }, end: { line: 58, column: 23 } }, { start: { line: 58, column: 27 }, end: { line: 58, column: 56 } }], line: 58 }, '17': { loc: { start: { line: 67, column: 2 }, end: { line: 69, column: 3 } }, type: 'if', locations: [{ start: { line: 67, column: 2 }, end: { line: 69, column: 3 } }, { start: { line: 67, column: 2 }, end: { line: 69, column: 3 } }], line: 67 }, '18': { loc: { start: { line: 70, column: 2 }, end: { line: 72, column: 3 } }, type: 'if', locations: [{ start: { line: 70, column: 2 }, end: { line: 72, column: 3 } }, { start: { line: 70, column: 2 }, end: { line: 72, column: 3 } }], line: 70 }, '19': { loc: { start: { line: 84, column: 2 }, end: { line: 86, column: 3 } }, type: 'if', locations: [{ start: { line: 84, column: 2 }, end: { line: 86, column: 3 } }, { start: { line: 84, column: 2 }, end: { line: 86, column: 3 } }], line: 84 }, '20': { loc: { start: { line: 84, column: 6 }, end: { line: 84, column: 35 } }, type: 'binary-expr', locations: [{ start: { line: 84, column: 6 }, end: { line: 84, column: 14 } }, { start: { line: 84, column: 18 }, end: { line: 84, column: 35 } }], line: 84 }, '21': { loc: { start: { line: 87, column: 2 }, end: { line: 89, column: 3 } }, type: 'if', locations: [{ start: { line: 87, column: 2 }, end: { line: 89, column: 3 } }, { start: { line: 87, column: 2 }, end: { line: 89, column: 3 } }], line: 87 }, '22': { loc: { start: { line: 94, column: 4 }, end: { line: 98, column: 5 } }, type: 'if', locations: [{ start: { line: 94, column: 4 }, end: { line: 98, column: 5 } }, { start: { line: 94, column: 4 }, end: { line: 98, column: 5 } }], line: 94 }, '23': { loc: { start: { line: 94, column: 8 }, end: { line: 94, column: 105 } }, type: 'binary-expr', locations: [{ start: { line: 94, column: 8 }, end: { line: 94, column: 75 } }, { start: { line: 94, column: 79 }, end: { line: 94, column: 105 } }], line: 94 }, '24': { loc: { start: { line: 96, column: 11 }, end: { line: 98, column: 5 } }, type: 'if', locations: [{ start: { line: 96, column: 11 }, end: { line: 98, column: 5 } }, { start: { line: 96, column: 11 }, end: { line: 98, column: 5 } }], line: 96 }, '25': { loc: { start: { line: 105, column: 2 }, end: { line: 107, column: 3 } }, type: 'if', locations: [{ start: { line: 105, column: 2 }, end: { line: 107, column: 3 } }, { start: { line: 105, column: 2 }, end: { line: 107, column: 3 } }], line: 105 }, '26': { loc: { start: { line: 108, column: 2 }, end: { line: 110, column: 3 } }, type: 'if', locations: [{ start: { line: 108, column: 2 }, end: { line: 110, column: 3 } }, { start: { line: 108, column: 2 }, end: { line: 110, column: 3 } }], line: 108 }, '27': { loc: { start: { line: 122, column: 2 }, end: { line: 124, column: 3 } }, type: 'if', locations: [{ start: { line: 122, column: 2 }, end: { line: 124, column: 3 } }, { start: { line: 122, column: 2 }, end: { line: 124, column: 3 } }], line: 122 }, '28': { loc: { start: { line: 122, column: 6 }, end: { line: 122, column: 35 } }, type: 'binary-expr', locations: [{ start: { line: 122, column: 6 }, end: { line: 122, column: 14 } }, { start: { line: 122, column: 18 }, end: { line: 122, column: 35 } }], line: 122 }, '29': { loc: { start: { line: 125, column: 2 }, end: { line: 127, column: 3 } }, type: 'if', locations: [{ start: { line: 125, column: 2 }, end: { line: 127, column: 3 } }, { start: { line: 125, column: 2 }, end: { line: 127, column: 3 } }], line: 125 }, '30': { loc: { start: { line: 133, column: 4 }, end: { line: 135, column: 5 } }, type: 'if', locations: [{ start: { line: 133, column: 4 }, end: { line: 135, column: 5 } }, { start: { line: 133, column: 4 }, end: { line: 135, column: 5 } }], line: 133 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, '73': 0, '74': 0, '75': 0, '76': 0, '77': 0, '78': 0, '79': 0, '80': 0, '81': 0, '82': 0, '83': 0, '84': 0, '85': 0, '86': 0, '87': 0, '88': 0, '89': 0, '90': 0, '91': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0], '8': [0, 0], '9': [0, 0], '10': [0, 0], '11': [0, 0], '12': [0, 0], '13': [0, 0], '14': [0, 0], '15': [0, 0], '16': [0, 0], '17': [0, 0], '18': [0, 0], '19': [0, 0], '20': [0, 0], '21': [0, 0], '22': [0, 0], '23': [0, 0], '24': [0, 0], '25': [0, 0], '26': [0, 0], '27': [0, 0], '28': [0, 0], '29': [0, 0], '30': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();function collectChildrenDiffFilter(context) {
  cov_1asx7bocdk.f[0]++;cov_1asx7bocdk.s[0]++;if ((cov_1asx7bocdk.b[1][0]++, !context) || (cov_1asx7bocdk.b[1][1]++, !context.children)) {
    cov_1asx7bocdk.b[0][0]++;cov_1asx7bocdk.s[1]++;return;
  } else {
    cov_1asx7bocdk.b[0][1]++;
  }var length = (cov_1asx7bocdk.s[2]++, context.children.length);var child = (cov_1asx7bocdk.s[3]++, void 0);var result = (cov_1asx7bocdk.s[4]++, context.result);cov_1asx7bocdk.s[5]++;for (var index = 0; index < length; index++) {
    cov_1asx7bocdk.s[6]++;child = context.children[index];cov_1asx7bocdk.s[7]++;if (typeof child.result === 'undefined') {
      cov_1asx7bocdk.b[2][0]++;cov_1asx7bocdk.s[8]++;continue;
    } else {
      cov_1asx7bocdk.b[2][1]++;
    }cov_1asx7bocdk.s[9]++;result = (cov_1asx7bocdk.b[3][0]++, result) || (cov_1asx7bocdk.b[3][1]++, {});cov_1asx7bocdk.s[10]++;result[child.childName] = child.result;
  }cov_1asx7bocdk.s[11]++;if ((cov_1asx7bocdk.b[5][0]++, result) && (cov_1asx7bocdk.b[5][1]++, context.leftIsArray)) {
    cov_1asx7bocdk.b[4][0]++;cov_1asx7bocdk.s[12]++;result._t = 'a';
  } else {
    cov_1asx7bocdk.b[4][1]++;
  }cov_1asx7bocdk.s[13]++;context.setResult(result).exit();
}cov_1asx7bocdk.s[14]++;collectChildrenDiffFilter.filterName = 'collectChildren';function objectsDiffFilter(context) {
  cov_1asx7bocdk.f[1]++;cov_1asx7bocdk.s[15]++;if ((cov_1asx7bocdk.b[7][0]++, context.leftIsArray) || (cov_1asx7bocdk.b[7][1]++, context.leftType !== 'object')) {
    cov_1asx7bocdk.b[6][0]++;cov_1asx7bocdk.s[16]++;return;
  } else {
    cov_1asx7bocdk.b[6][1]++;
  }var name = (cov_1asx7bocdk.s[17]++, void 0);var child = (cov_1asx7bocdk.s[18]++, void 0);var propertyFilter = (cov_1asx7bocdk.s[19]++, context.options.propertyFilter);cov_1asx7bocdk.s[20]++;for (name in context.left) {
    cov_1asx7bocdk.s[21]++;if (!Object.prototype.hasOwnProperty.call(context.left, name)) {
      cov_1asx7bocdk.b[8][0]++;cov_1asx7bocdk.s[22]++;continue;
    } else {
      cov_1asx7bocdk.b[8][1]++;
    }cov_1asx7bocdk.s[23]++;if ((cov_1asx7bocdk.b[10][0]++, propertyFilter) && (cov_1asx7bocdk.b[10][1]++, !propertyFilter(name, context))) {
      cov_1asx7bocdk.b[9][0]++;cov_1asx7bocdk.s[24]++;continue;
    } else {
      cov_1asx7bocdk.b[9][1]++;
    }cov_1asx7bocdk.s[25]++;child = new DiffContext(context.left[name], context.right[name]);cov_1asx7bocdk.s[26]++;context.push(child, name);
  }cov_1asx7bocdk.s[27]++;for (name in context.right) {
    cov_1asx7bocdk.s[28]++;if (!Object.prototype.hasOwnProperty.call(context.right, name)) {
      cov_1asx7bocdk.b[11][0]++;cov_1asx7bocdk.s[29]++;continue;
    } else {
      cov_1asx7bocdk.b[11][1]++;
    }cov_1asx7bocdk.s[30]++;if ((cov_1asx7bocdk.b[13][0]++, propertyFilter) && (cov_1asx7bocdk.b[13][1]++, !propertyFilter(name, context))) {
      cov_1asx7bocdk.b[12][0]++;cov_1asx7bocdk.s[31]++;continue;
    } else {
      cov_1asx7bocdk.b[12][1]++;
    }cov_1asx7bocdk.s[32]++;if (typeof context.left[name] === 'undefined') {
      cov_1asx7bocdk.b[14][0]++;cov_1asx7bocdk.s[33]++;child = new DiffContext(undefined, context.right[name]);cov_1asx7bocdk.s[34]++;context.push(child, name);
    } else {
      cov_1asx7bocdk.b[14][1]++;
    }
  }cov_1asx7bocdk.s[35]++;if ((cov_1asx7bocdk.b[16][0]++, !context.children) || (cov_1asx7bocdk.b[16][1]++, context.children.length === 0)) {
    cov_1asx7bocdk.b[15][0]++;cov_1asx7bocdk.s[36]++;context.setResult(undefined).exit();cov_1asx7bocdk.s[37]++;return;
  } else {
    cov_1asx7bocdk.b[15][1]++;
  }cov_1asx7bocdk.s[38]++;context.exit();
}cov_1asx7bocdk.s[39]++;objectsDiffFilter.filterName = 'objects';cov_1asx7bocdk.s[40]++;var patchFilter$1 = function nestedPatchFilter(context) {
  cov_1asx7bocdk.f[2]++;cov_1asx7bocdk.s[41]++;if (!context.nested) {
    cov_1asx7bocdk.b[17][0]++;cov_1asx7bocdk.s[42]++;return;
  } else {
    cov_1asx7bocdk.b[17][1]++;
  }cov_1asx7bocdk.s[43]++;if (context.delta._t) {
    cov_1asx7bocdk.b[18][0]++;cov_1asx7bocdk.s[44]++;return;
  } else {
    cov_1asx7bocdk.b[18][1]++;
  }var name = (cov_1asx7bocdk.s[45]++, void 0);var child = (cov_1asx7bocdk.s[46]++, void 0);cov_1asx7bocdk.s[47]++;for (name in context.delta) {
    cov_1asx7bocdk.s[48]++;child = new PatchContext(context.left[name], context.delta[name]);cov_1asx7bocdk.s[49]++;context.push(child, name);
  }cov_1asx7bocdk.s[50]++;context.exit();
};cov_1asx7bocdk.s[51]++;patchFilter$1.filterName = 'objects';cov_1asx7bocdk.s[52]++;var collectChildrenPatchFilter = function collectChildrenPatchFilter(context) {
  cov_1asx7bocdk.f[3]++;cov_1asx7bocdk.s[53]++;if ((cov_1asx7bocdk.b[20][0]++, !context) || (cov_1asx7bocdk.b[20][1]++, !context.children)) {
    cov_1asx7bocdk.b[19][0]++;cov_1asx7bocdk.s[54]++;return;
  } else {
    cov_1asx7bocdk.b[19][1]++;
  }cov_1asx7bocdk.s[55]++;if (context.delta._t) {
    cov_1asx7bocdk.b[21][0]++;cov_1asx7bocdk.s[56]++;return;
  } else {
    cov_1asx7bocdk.b[21][1]++;
  }var length = (cov_1asx7bocdk.s[57]++, context.children.length);var child = (cov_1asx7bocdk.s[58]++, void 0);cov_1asx7bocdk.s[59]++;for (var index = 0; index < length; index++) {
    cov_1asx7bocdk.s[60]++;child = context.children[index];cov_1asx7bocdk.s[61]++;if ((cov_1asx7bocdk.b[23][0]++, Object.prototype.hasOwnProperty.call(context.left, child.childName)) && (cov_1asx7bocdk.b[23][1]++, child.result === undefined)) {
      cov_1asx7bocdk.b[22][0]++;cov_1asx7bocdk.s[62]++;delete context.left[child.childName];
    } else {
      cov_1asx7bocdk.b[22][1]++;cov_1asx7bocdk.s[63]++;if (context.left[child.childName] !== child.result) {
        cov_1asx7bocdk.b[24][0]++;cov_1asx7bocdk.s[64]++;context.left[child.childName] = child.result;
      } else {
        cov_1asx7bocdk.b[24][1]++;
      }
    }
  }cov_1asx7bocdk.s[65]++;context.setResult(context.left).exit();
};cov_1asx7bocdk.s[66]++;collectChildrenPatchFilter.filterName = 'collectChildren';cov_1asx7bocdk.s[67]++;var reverseFilter$1 = function nestedReverseFilter(context) {
  cov_1asx7bocdk.f[4]++;cov_1asx7bocdk.s[68]++;if (!context.nested) {
    cov_1asx7bocdk.b[25][0]++;cov_1asx7bocdk.s[69]++;return;
  } else {
    cov_1asx7bocdk.b[25][1]++;
  }cov_1asx7bocdk.s[70]++;if (context.delta._t) {
    cov_1asx7bocdk.b[26][0]++;cov_1asx7bocdk.s[71]++;return;
  } else {
    cov_1asx7bocdk.b[26][1]++;
  }var name = (cov_1asx7bocdk.s[72]++, void 0);var child = (cov_1asx7bocdk.s[73]++, void 0);cov_1asx7bocdk.s[74]++;for (name in context.delta) {
    cov_1asx7bocdk.s[75]++;child = new ReverseContext(context.delta[name]);cov_1asx7bocdk.s[76]++;context.push(child, name);
  }cov_1asx7bocdk.s[77]++;context.exit();
};cov_1asx7bocdk.s[78]++;reverseFilter$1.filterName = 'objects';function collectChildrenReverseFilter(context) {
  cov_1asx7bocdk.f[5]++;cov_1asx7bocdk.s[79]++;if ((cov_1asx7bocdk.b[28][0]++, !context) || (cov_1asx7bocdk.b[28][1]++, !context.children)) {
    cov_1asx7bocdk.b[27][0]++;cov_1asx7bocdk.s[80]++;return;
  } else {
    cov_1asx7bocdk.b[27][1]++;
  }cov_1asx7bocdk.s[81]++;if (context.delta._t) {
    cov_1asx7bocdk.b[29][0]++;cov_1asx7bocdk.s[82]++;return;
  } else {
    cov_1asx7bocdk.b[29][1]++;
  }var length = (cov_1asx7bocdk.s[83]++, context.children.length);var child = (cov_1asx7bocdk.s[84]++, void 0);var delta = (cov_1asx7bocdk.s[85]++, {});cov_1asx7bocdk.s[86]++;for (var index = 0; index < length; index++) {
    cov_1asx7bocdk.s[87]++;child = context.children[index];cov_1asx7bocdk.s[88]++;if (delta[child.childName] !== child.result) {
      cov_1asx7bocdk.b[30][0]++;cov_1asx7bocdk.s[89]++;delta[child.childName] = child.result;
    } else {
      cov_1asx7bocdk.b[30][1]++;
    }
  }cov_1asx7bocdk.s[90]++;context.setResult(delta).exit();
}cov_1asx7bocdk.s[91]++;collectChildrenReverseFilter.filterName = 'collectChildren';

var cov_2u6mzkxt1 = function () {
  var path = 'Y:\\repos\\jsondiffpatch\\src\\filters\\lcs.js',
      hash = 'e16fd1cbdaf55d0b99b1ed2ba848d1f44ae44d3b',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: 'Y:\\repos\\jsondiffpatch\\src\\filters\\lcs.js', statementMap: { '0': { start: { line: 9, column: 19 }, end: { line: 11, column: 1 } }, '1': { start: { line: 10, column: 2 }, end: { line: 10, column: 43 } }, '2': { start: { line: 13, column: 19 }, end: { line: 39, column: 1 } }, '3': { start: { line: 14, column: 13 }, end: { line: 14, column: 26 } }, '4': { start: { line: 15, column: 13 }, end: { line: 15, column: 26 } }, '5': { start: { line: 16, column: 10 }, end: { line: 16, column: 16 } }, '6': { start: { line: 17, column: 10 }, end: { line: 17, column: 16 } }, '7': { start: { line: 20, column: 15 }, end: { line: 20, column: 25 } }, '8': { start: { line: 21, column: 2 }, end: { line: 26, column: 3 } }, '9': { start: { line: 22, column: 4 }, end: { line: 22, column: 27 } }, '10': { start: { line: 23, column: 4 }, end: { line: 25, column: 5 } }, '11': { start: { line: 24, column: 6 }, end: { line: 24, column: 23 } }, '12': { start: { line: 27, column: 2 }, end: { line: 27, column: 23 } }, '13': { start: { line: 29, column: 2 }, end: { line: 37, column: 3 } }, '14': { start: { line: 30, column: 4 }, end: { line: 36, column: 5 } }, '15': { start: { line: 31, column: 6 }, end: { line: 35, column: 7 } }, '16': { start: { line: 32, column: 8 }, end: { line: 32, column: 48 } }, '17': { start: { line: 34, column: 8 }, end: { line: 34, column: 68 } }, '18': { start: { line: 38, column: 2 }, end: { line: 38, column: 16 } }, '19': { start: { line: 41, column: 16 }, end: { line: 63, column: 1 } }, '20': { start: { line: 42, column: 2 }, end: { line: 48, column: 3 } }, '21': { start: { line: 43, column: 4 }, end: { line: 47, column: 6 } }, '22': { start: { line: 50, column: 2 }, end: { line: 56, column: 3 } }, '23': { start: { line: 51, column: 22 }, end: { line: 51, column: 88 } }, '24': { start: { line: 52, column: 4 }, end: { line: 52, column: 50 } }, '25': { start: { line: 53, column: 4 }, end: { line: 53, column: 42 } }, '26': { start: { line: 54, column: 4 }, end: { line: 54, column: 42 } }, '27': { start: { line: 55, column: 4 }, end: { line: 55, column: 23 } }, '28': { start: { line: 58, column: 2 }, end: { line: 62, column: 3 } }, '29': { start: { line: 59, column: 4 }, end: { line: 59, column: 74 } }, '30': { start: { line: 61, column: 4 }, end: { line: 61, column: 74 } }, '31': { start: { line: 65, column: 10 }, end: { line: 73, column: 1 } }, '32': { start: { line: 66, column: 21 }, end: { line: 66, column: 34 } }, '33': { start: { line: 67, column: 15 }, end: { line: 67, column: 80 } }, '34': { start: { line: 68, column: 15 }, end: { line: 68, column: 92 } }, '35': { start: { line: 69, column: 2 }, end: { line: 71, column: 3 } }, '36': { start: { line: 70, column: 4 }, end: { line: 70, column: 47 } }, '37': { start: { line: 72, column: 2 }, end: { line: 72, column: 16 } } }, fnMap: { '0': { name: 'defaultMatch', decl: { start: { line: 9, column: 28 }, end: { line: 9, column: 40 } }, loc: { start: { line: 9, column: 73 }, end: { line: 11, column: 1 } }, line: 9 }, '1': { name: 'lengthMatrix', decl: { start: { line: 13, column: 28 }, end: { line: 13, column: 40 } }, loc: { start: { line: 13, column: 73 }, end: { line: 39, column: 1 } }, line: 13 }, '2': { name: 'backtrack', decl: { start: { line: 41, column: 25 }, end: { line: 41, column: 34 } }, loc: { start: { line: 41, column: 84 }, end: { line: 63, column: 1 } }, line: 41 }, '3': { name: 'get', decl: { start: { line: 65, column: 19 }, end: { line: 65, column: 22 } }, loc: { start: { line: 65, column: 55 }, end: { line: 73, column: 1 } }, line: 65 } }, branchMap: { '0': { loc: { start: { line: 31, column: 6 }, end: { line: 35, column: 7 } }, type: 'if', locations: [{ start: { line: 31, column: 6 }, end: { line: 35, column: 7 } }, { start: { line: 31, column: 6 }, end: { line: 35, column: 7 } }], line: 31 }, '1': { loc: { start: { line: 42, column: 2 }, end: { line: 48, column: 3 } }, type: 'if', locations: [{ start: { line: 42, column: 2 }, end: { line: 48, column: 3 } }, { start: { line: 42, column: 2 }, end: { line: 48, column: 3 } }], line: 42 }, '2': { loc: { start: { line: 42, column: 6 }, end: { line: 42, column: 34 } }, type: 'binary-expr', locations: [{ start: { line: 42, column: 6 }, end: { line: 42, column: 18 } }, { start: { line: 42, column: 22 }, end: { line: 42, column: 34 } }], line: 42 }, '3': { loc: { start: { line: 50, column: 2 }, end: { line: 56, column: 3 } }, type: 'if', locations: [{ start: { line: 50, column: 2 }, end: { line: 56, column: 3 } }, { start: { line: 50, column: 2 }, end: { line: 56, column: 3 } }], line: 50 }, '4': { loc: { start: { line: 58, column: 2 }, end: { line: 62, column: 3 } }, type: 'if', locations: [{ start: { line: 58, column: 2 }, end: { line: 62, column: 3 } }, { start: { line: 58, column: 2 }, end: { line: 62, column: 3 } }], line: 58 }, '5': { loc: { start: { line: 66, column: 21 }, end: { line: 66, column: 34 } }, type: 'binary-expr', locations: [{ start: { line: 66, column: 21 }, end: { line: 66, column: 28 } }, { start: { line: 66, column: 32 }, end: { line: 66, column: 34 } }], line: 66 }, '6': { loc: { start: { line: 67, column: 44 }, end: { line: 67, column: 65 } }, type: 'binary-expr', locations: [{ start: { line: 67, column: 44 }, end: { line: 67, column: 49 } }, { start: { line: 67, column: 53 }, end: { line: 67, column: 65 } }], line: 67 }, '7': { loc: { start: { line: 69, column: 2 }, end: { line: 71, column: 3 } }, type: 'if', locations: [{ start: { line: 69, column: 2 }, end: { line: 71, column: 3 } }, { start: { line: 69, column: 2 }, end: { line: 71, column: 3 } }], line: 69 }, '8': { loc: { start: { line: 69, column: 6 }, end: { line: 69, column: 62 } }, type: 'binary-expr', locations: [{ start: { line: 69, column: 6 }, end: { line: 69, column: 32 } }, { start: { line: 69, column: 36 }, end: { line: 69, column: 62 } }], line: 69 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0], '8': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();cov_2u6mzkxt1.s[0]++; /*
                          LCS implementation that supports arrays or strings
                          reference: http://en.wikipedia.org/wiki/Longest_common_subsequence_problem
                          */var defaultMatch = function defaultMatch(array1, array2, index1, index2) {
  cov_2u6mzkxt1.f[0]++;cov_2u6mzkxt1.s[1]++;return array1[index1] === array2[index2];
};cov_2u6mzkxt1.s[2]++;var lengthMatrix = function lengthMatrix(array1, array2, match, context) {
  cov_2u6mzkxt1.f[1]++;var len1 = (cov_2u6mzkxt1.s[3]++, array1.length);var len2 = (cov_2u6mzkxt1.s[4]++, array2.length);var x = (cov_2u6mzkxt1.s[5]++, void 0),
      y = (cov_2u6mzkxt1.s[6]++, void 0); // initialize empty matrix of len1+1 x len2+1
  var matrix = (cov_2u6mzkxt1.s[7]++, [len1 + 1]);cov_2u6mzkxt1.s[8]++;for (x = 0; x < len1 + 1; x++) {
    cov_2u6mzkxt1.s[9]++;matrix[x] = [len2 + 1];cov_2u6mzkxt1.s[10]++;for (y = 0; y < len2 + 1; y++) {
      cov_2u6mzkxt1.s[11]++;matrix[x][y] = 0;
    }
  }cov_2u6mzkxt1.s[12]++;matrix.match = match; // save sequence lengths for each coordinate
  cov_2u6mzkxt1.s[13]++;for (x = 1; x < len1 + 1; x++) {
    cov_2u6mzkxt1.s[14]++;for (y = 1; y < len2 + 1; y++) {
      cov_2u6mzkxt1.s[15]++;if (match(array1, array2, x - 1, y - 1, context)) {
        cov_2u6mzkxt1.b[0][0]++;cov_2u6mzkxt1.s[16]++;matrix[x][y] = matrix[x - 1][y - 1] + 1;
      } else {
        cov_2u6mzkxt1.b[0][1]++;cov_2u6mzkxt1.s[17]++;matrix[x][y] = Math.max(matrix[x - 1][y], matrix[x][y - 1]);
      }
    }
  }cov_2u6mzkxt1.s[18]++;return matrix;
};cov_2u6mzkxt1.s[19]++;var backtrack = function backtrack(matrix, array1, array2, index1, index2, context) {
  cov_2u6mzkxt1.f[2]++;cov_2u6mzkxt1.s[20]++;if ((cov_2u6mzkxt1.b[2][0]++, index1 === 0) || (cov_2u6mzkxt1.b[2][1]++, index2 === 0)) {
    cov_2u6mzkxt1.b[1][0]++;cov_2u6mzkxt1.s[21]++;return { sequence: [], indices1: [], indices2: [] };
  } else {
    cov_2u6mzkxt1.b[1][1]++;
  }cov_2u6mzkxt1.s[22]++;if (matrix.match(array1, array2, index1 - 1, index2 - 1, context)) {
    cov_2u6mzkxt1.b[3][0]++;var subsequence = (cov_2u6mzkxt1.s[23]++, backtrack(matrix, array1, array2, index1 - 1, index2 - 1, context));cov_2u6mzkxt1.s[24]++;subsequence.sequence.push(array1[index1 - 1]);cov_2u6mzkxt1.s[25]++;subsequence.indices1.push(index1 - 1);cov_2u6mzkxt1.s[26]++;subsequence.indices2.push(index2 - 1);cov_2u6mzkxt1.s[27]++;return subsequence;
  } else {
    cov_2u6mzkxt1.b[3][1]++;
  }cov_2u6mzkxt1.s[28]++;if (matrix[index1][index2 - 1] > matrix[index1 - 1][index2]) {
    cov_2u6mzkxt1.b[4][0]++;cov_2u6mzkxt1.s[29]++;return backtrack(matrix, array1, array2, index1, index2 - 1, context);
  } else {
    cov_2u6mzkxt1.b[4][1]++;cov_2u6mzkxt1.s[30]++;return backtrack(matrix, array1, array2, index1 - 1, index2, context);
  }
};cov_2u6mzkxt1.s[31]++;var get$1$1 = function get$$1(array1, array2, match, context) {
  cov_2u6mzkxt1.f[3]++;var innerContext = (cov_2u6mzkxt1.s[32]++, (cov_2u6mzkxt1.b[5][0]++, context) || (cov_2u6mzkxt1.b[5][1]++, {}));var matrix = (cov_2u6mzkxt1.s[33]++, lengthMatrix(array1, array2, (cov_2u6mzkxt1.b[6][0]++, match) || (cov_2u6mzkxt1.b[6][1]++, defaultMatch), innerContext));var result = (cov_2u6mzkxt1.s[34]++, backtrack(matrix, array1, array2, array1.length, array2.length, innerContext));cov_2u6mzkxt1.s[35]++;if ((cov_2u6mzkxt1.b[8][0]++, typeof array1 === 'string') && (cov_2u6mzkxt1.b[8][1]++, typeof array2 === 'string')) {
    cov_2u6mzkxt1.b[7][0]++;cov_2u6mzkxt1.s[36]++;result.sequence = result.sequence.join('');
  } else {
    cov_2u6mzkxt1.b[7][1]++;
  }cov_2u6mzkxt1.s[37]++;return result;
};var lcs = { get: get$1$1 };

var cov_25osudpoaz = function () {
  var path = 'Y:\\repos\\jsondiffpatch\\src\\filters\\arrays.js',
      hash = '21d4afe6cd9dfd321192ddf494d299aa7445c63c',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: 'Y:\\repos\\jsondiffpatch\\src\\filters\\arrays.js', statementMap: { '0': { start: { line: 7, column: 17 }, end: { line: 7, column: 18 } }, '1': { start: { line: 9, column: 14 }, end: { line: 11, column: 1 } }, '2': { start: { line: 10, column: 2 }, end: { line: 10, column: 28 } }, '3': { start: { line: 13, column: 19 }, end: { line: 23, column: 1 } }, '4': { start: { line: 14, column: 2 }, end: { line: 14, column: 29 } }, '5': { start: { line: 16, column: 15 }, end: { line: 16, column: 27 } }, '6': { start: { line: 17, column: 2 }, end: { line: 21, column: 3 } }, '7': { start: { line: 18, column: 4 }, end: { line: 20, column: 5 } }, '8': { start: { line: 19, column: 6 }, end: { line: 19, column: 15 } }, '9': { start: { line: 22, column: 2 }, end: { line: 22, column: 12 } }, '10': { start: { line: 26, column: 2 }, end: { line: 34, column: 3 } }, '11': { start: { line: 27, column: 15 }, end: { line: 27, column: 29 } }, '12': { start: { line: 28, column: 4 }, end: { line: 33, column: 5 } }, '13': { start: { line: 29, column: 17 }, end: { line: 29, column: 31 } }, '14': { start: { line: 30, column: 6 }, end: { line: 32, column: 7 } }, '15': { start: { line: 31, column: 8 }, end: { line: 31, column: 20 } }, '16': { start: { line: 38, column: 15 }, end: { line: 38, column: 29 } }, '17': { start: { line: 39, column: 15 }, end: { line: 39, column: 29 } }, '18': { start: { line: 40, column: 2 }, end: { line: 42, column: 3 } }, '19': { start: { line: 41, column: 4 }, end: { line: 41, column: 16 } }, '20': { start: { line: 43, column: 2 }, end: { line: 45, column: 3 } }, '21': { start: { line: 44, column: 4 }, end: { line: 44, column: 17 } }, '22': { start: { line: 46, column: 19 }, end: { line: 46, column: 37 } }, '23': { start: { line: 47, column: 2 }, end: { line: 50, column: 3 } }, '24': { start: { line: 49, column: 4 }, end: { line: 49, column: 56 } }, '25': { start: { line: 51, column: 14 }, end: { line: 51, column: 20 } }, '26': { start: { line: 52, column: 14 }, end: { line: 52, column: 20 } }, '27': { start: { line: 53, column: 2 }, end: { line: 61, column: 3 } }, '28': { start: { line: 54, column: 4 }, end: { line: 54, column: 50 } }, '29': { start: { line: 55, column: 4 }, end: { line: 55, column: 39 } }, '30': { start: { line: 56, column: 4 }, end: { line: 58, column: 5 } }, '31': { start: { line: 57, column: 6 }, end: { line: 57, column: 70 } }, '32': { start: { line: 60, column: 4 }, end: { line: 60, column: 31 } }, '33': { start: { line: 62, column: 2 }, end: { line: 64, column: 3 } }, '34': { start: { line: 63, column: 4 }, end: { line: 63, column: 17 } }, '35': { start: { line: 65, column: 2 }, end: { line: 73, column: 3 } }, '36': { start: { line: 66, column: 4 }, end: { line: 66, column: 50 } }, '37': { start: { line: 67, column: 4 }, end: { line: 67, column: 39 } }, '38': { start: { line: 68, column: 4 }, end: { line: 70, column: 5 } }, '39': { start: { line: 69, column: 6 }, end: { line: 69, column: 70 } }, '40': { start: { line: 72, column: 4 }, end: { line: 72, column: 31 } }, '41': { start: { line: 74, column: 2 }, end: { line: 76, column: 3 } }, '42': { start: { line: 75, column: 4 }, end: { line: 75, column: 17 } }, '43': { start: { line: 77, column: 2 }, end: { line: 77, column: 25 } }, '44': { start: { line: 80, column: 24 }, end: { line: 217, column: 1 } }, '45': { start: { line: 81, column: 2 }, end: { line: 83, column: 3 } }, '46': { start: { line: 82, column: 4 }, end: { line: 82, column: 11 } }, '47': { start: { line: 85, column: 21 }, end: { line: 88, column: 3 } }, '48': { start: { line: 89, column: 19 }, end: { line: 89, column: 20 } }, '49': { start: { line: 90, column: 19 }, end: { line: 90, column: 20 } }, '50': { start: { line: 91, column: 14 }, end: { line: 91, column: 20 } }, '51': { start: { line: 92, column: 15 }, end: { line: 92, column: 21 } }, '52': { start: { line: 93, column: 15 }, end: { line: 93, column: 21 } }, '53': { start: { line: 94, column: 15 }, end: { line: 94, column: 27 } }, '54': { start: { line: 95, column: 15 }, end: { line: 95, column: 28 } }, '55': { start: { line: 96, column: 13 }, end: { line: 96, column: 26 } }, '56': { start: { line: 97, column: 13 }, end: { line: 97, column: 26 } }, '57': { start: { line: 99, column: 14 }, end: { line: 99, column: 20 } }, '58': { start: { line: 101, column: 2 }, end: { line: 103, column: 3 } }, '59': { start: { line: 102, column: 4 }, end: { line: 102, column: 85 } }, '60': { start: { line: 106, column: 2 }, end: { line: 111, column: 3 } }, '61': { start: { line: 107, column: 4 }, end: { line: 107, column: 23 } }, '62': { start: { line: 108, column: 4 }, end: { line: 108, column: 71 } }, '63': { start: { line: 109, column: 4 }, end: { line: 109, column: 31 } }, '64': { start: { line: 110, column: 4 }, end: { line: 110, column: 17 } }, '65': { start: { line: 113, column: 2 }, end: { line: 119, column: 3 } }, '66': { start: { line: 114, column: 4 }, end: { line: 114, column: 35 } }, '67': { start: { line: 115, column: 4 }, end: { line: 115, column: 35 } }, '68': { start: { line: 116, column: 4 }, end: { line: 116, column: 73 } }, '69': { start: { line: 117, column: 4 }, end: { line: 117, column: 32 } }, '70': { start: { line: 118, column: 4 }, end: { line: 118, column: 17 } }, '71': { start: { line: 120, column: 15 }, end: { line: 120, column: 21 } }, '72': { start: { line: 121, column: 2 }, end: { line: 136, column: 3 } }, '73': { start: { line: 122, column: 4 }, end: { line: 126, column: 5 } }, '74': { start: { line: 124, column: 6 }, end: { line: 124, column: 42 } }, '75': { start: { line: 125, column: 6 }, end: { line: 125, column: 13 } }, '76': { start: { line: 128, column: 4 }, end: { line: 130, column: 6 } }, '77': { start: { line: 131, column: 4 }, end: { line: 133, column: 5 } }, '78': { start: { line: 132, column: 6 }, end: { line: 132, column: 38 } }, '79': { start: { line: 134, column: 4 }, end: { line: 134, column: 37 } }, '80': { start: { line: 135, column: 4 }, end: { line: 135, column: 11 } }, '81': { start: { line: 137, column: 2 }, end: { line: 147, column: 3 } }, '82': { start: { line: 139, column: 4 }, end: { line: 141, column: 6 } }, '83': { start: { line: 142, column: 4 }, end: { line: 144, column: 5 } }, '84': { start: { line: 143, column: 6 }, end: { line: 143, column: 50 } }, '85': { start: { line: 145, column: 4 }, end: { line: 145, column: 37 } }, '86': { start: { line: 146, column: 4 }, end: { line: 146, column: 11 } }, '87': { start: { line: 149, column: 2 }, end: { line: 149, column: 33 } }, '88': { start: { line: 150, column: 2 }, end: { line: 150, column: 33 } }, '89': { start: { line: 153, column: 17 }, end: { line: 153, column: 60 } }, '90': { start: { line: 154, column: 17 }, end: { line: 154, column: 60 } }, '91': { start: { line: 155, column: 12 }, end: { line: 155, column: 65 } }, '92': { start: { line: 156, column: 21 }, end: { line: 156, column: 23 } }, '93': { start: { line: 157, column: 2 }, end: { line: 159, column: 4 } }, '94': { start: { line: 160, column: 2 }, end: { line: 166, column: 3 } }, '95': { start: { line: 161, column: 4 }, end: { line: 165, column: 5 } }, '96': { start: { line: 163, column: 6 }, end: { line: 163, column: 50 } }, '97': { start: { line: 164, column: 6 }, end: { line: 164, column: 31 } }, '98': { start: { line: 168, column: 19 }, end: { line: 168, column: 23 } }, '99': { start: { line: 169, column: 2 }, end: { line: 171, column: 3 } }, '100': { start: { line: 170, column: 4 }, end: { line: 170, column: 23 } }, '101': { start: { line: 172, column: 27 }, end: { line: 172, column: 32 } }, '102': { start: { line: 173, column: 2 }, end: { line: 175, column: 3 } }, '103': { start: { line: 174, column: 4 }, end: { line: 174, column: 30 } }, '104': { start: { line: 177, column: 27 }, end: { line: 177, column: 46 } }, '105': { start: { line: 178, column: 2 }, end: { line: 214, column: 3 } }, '106': { start: { line: 179, column: 24 }, end: { line: 179, column: 70 } }, '107': { start: { line: 180, column: 4 }, end: { line: 213, column: 5 } }, '108': { start: { line: 182, column: 19 }, end: { line: 182, column: 24 } }, '109': { start: { line: 183, column: 6 }, end: { line: 202, column: 7 } }, '110': { start: { line: 184, column: 8 }, end: { line: 201, column: 9 } }, '111': { start: { line: 185, column: 10 }, end: { line: 185, column: 50 } }, '112': { start: { line: 186, column: 10 }, end: { line: 200, column: 11 } }, '113': { start: { line: 188, column: 12 }, end: { line: 188, column: 65 } }, '114': { start: { line: 189, column: 12 }, end: { line: 192, column: 13 } }, '115': { start: { line: 191, column: 14 }, end: { line: 191, column: 43 } }, '116': { start: { line: 194, column: 12 }, end: { line: 194, column: 27 } }, '117': { start: { line: 195, column: 12 }, end: { line: 195, column: 81 } }, '118': { start: { line: 196, column: 12 }, end: { line: 196, column: 40 } }, '119': { start: { line: 197, column: 12 }, end: { line: 197, column: 53 } }, '120': { start: { line: 198, column: 12 }, end: { line: 198, column: 26 } }, '121': { start: { line: 199, column: 12 }, end: { line: 199, column: 18 } }, '122': { start: { line: 203, column: 6 }, end: { line: 206, column: 7 } }, '123': { start: { line: 205, column: 8 }, end: { line: 205, column: 40 } }, '124': { start: { line: 209, column: 6 }, end: { line: 209, column: 56 } }, '125': { start: { line: 210, column: 6 }, end: { line: 210, column: 56 } }, '126': { start: { line: 211, column: 6 }, end: { line: 211, column: 75 } }, '127': { start: { line: 212, column: 6 }, end: { line: 212, column: 34 } }, '128': { start: { line: 216, column: 2 }, end: { line: 216, column: 35 } }, '129': { start: { line: 218, column: 0 }, end: { line: 218, column: 33 } }, '130': { start: { line: 220, column: 14 }, end: { line: 229, column: 1 } }, '131': { start: { line: 222, column: 4 }, end: { line: 222, column: 17 } }, '132': { start: { line: 225, column: 4 }, end: { line: 227, column: 6 } }, '133': { start: { line: 226, column: 6 }, end: { line: 226, column: 31 } }, '134': { start: { line: 231, column: 25 }, end: { line: 314, column: 1 } }, '135': { start: { line: 232, column: 2 }, end: { line: 234, column: 3 } }, '136': { start: { line: 233, column: 4 }, end: { line: 233, column: 11 } }, '137': { start: { line: 235, column: 2 }, end: { line: 237, column: 3 } }, '138': { start: { line: 236, column: 4 }, end: { line: 236, column: 11 } }, '139': { start: { line: 238, column: 14 }, end: { line: 238, column: 20 } }, '140': { start: { line: 239, column: 15 }, end: { line: 239, column: 21 } }, '141': { start: { line: 241, column: 14 }, end: { line: 241, column: 27 } }, '142': { start: { line: 242, column: 14 }, end: { line: 242, column: 26 } }, '143': { start: { line: 245, column: 17 }, end: { line: 245, column: 19 } }, '144': { start: { line: 246, column: 17 }, end: { line: 246, column: 19 } }, '145': { start: { line: 247, column: 17 }, end: { line: 247, column: 19 } }, '146': { start: { line: 248, column: 2 }, end: { line: 273, column: 3 } }, '147': { start: { line: 249, column: 4 }, end: { line: 272, column: 5 } }, '148': { start: { line: 250, column: 6 }, end: { line: 271, column: 7 } }, '149': { start: { line: 252, column: 8 }, end: { line: 256, column: 9 } }, '150': { start: { line: 253, column: 10 }, end: { line: 253, column: 54 } }, '151': { start: { line: 255, column: 10 }, end: { line: 255, column: 137 } }, '152': { start: { line: 258, column: 8 }, end: { line: 270, column: 9 } }, '153': { start: { line: 260, column: 10 }, end: { line: 263, column: 13 } }, '154': { start: { line: 266, column: 10 }, end: { line: 269, column: 13 } }, '155': { start: { line: 276, column: 2 }, end: { line: 276, column: 48 } }, '156': { start: { line: 277, column: 2 }, end: { line: 288, column: 3 } }, '157': { start: { line: 278, column: 4 }, end: { line: 278, column: 29 } }, '158': { start: { line: 279, column: 20 }, end: { line: 279, column: 39 } }, '159': { start: { line: 280, column: 23 }, end: { line: 280, column: 49 } }, '160': { start: { line: 281, column: 4 }, end: { line: 287, column: 5 } }, '161': { start: { line: 283, column: 6 }, end: { line: 286, column: 9 } }, '162': { start: { line: 291, column: 2 }, end: { line: 291, column: 59 } }, '163': { start: { line: 292, column: 23 }, end: { line: 292, column: 38 } }, '164': { start: { line: 293, column: 2 }, end: { line: 296, column: 3 } }, '165': { start: { line: 294, column: 20 }, end: { line: 294, column: 35 } }, '166': { start: { line: 295, column: 4 }, end: { line: 295, column: 54 } }, '167': { start: { line: 299, column: 23 }, end: { line: 299, column: 38 } }, '168': { start: { line: 300, column: 14 }, end: { line: 300, column: 20 } }, '169': { start: { line: 301, column: 2 }, end: { line: 307, column: 3 } }, '170': { start: { line: 302, column: 4 }, end: { line: 306, column: 5 } }, '171': { start: { line: 303, column: 25 }, end: { line: 303, column: 40 } }, '172': { start: { line: 304, column: 6 }, end: { line: 304, column: 85 } }, '173': { start: { line: 305, column: 6 }, end: { line: 305, column: 46 } }, '174': { start: { line: 309, column: 2 }, end: { line: 312, column: 3 } }, '175': { start: { line: 310, column: 4 }, end: { line: 310, column: 43 } }, '176': { start: { line: 311, column: 4 }, end: { line: 311, column: 11 } }, '177': { start: { line: 313, column: 2 }, end: { line: 313, column: 17 } }, '178': { start: { line: 315, column: 0 }, end: { line: 315, column: 34 } }, '179': { start: { line: 317, column: 40 }, end: { line: 331, column: 1 } }, '180': { start: { line: 318, column: 2 }, end: { line: 320, column: 3 } }, '181': { start: { line: 319, column: 4 }, end: { line: 319, column: 11 } }, '182': { start: { line: 321, column: 2 }, end: { line: 323, column: 3 } }, '183': { start: { line: 322, column: 4 }, end: { line: 322, column: 11 } }, '184': { start: { line: 324, column: 15 }, end: { line: 324, column: 38 } }, '185': { start: { line: 325, column: 14 }, end: { line: 325, column: 20 } }, '186': { start: { line: 326, column: 2 }, end: { line: 329, column: 3 } }, '187': { start: { line: 327, column: 4 }, end: { line: 327, column: 36 } }, '188': { start: { line: 328, column: 4 }, end: { line: 328, column: 49 } }, '189': { start: { line: 330, column: 2 }, end: { line: 330, column: 41 } }, '190': { start: { line: 332, column: 0 }, end: { line: 332, column: 64 } }, '191': { start: { line: 334, column: 27 }, end: { line: 355, column: 1 } }, '192': { start: { line: 335, column: 2 }, end: { line: 341, column: 3 } }, '193': { start: { line: 336, column: 4 }, end: { line: 339, column: 5 } }, '194': { start: { line: 337, column: 6 }, end: { line: 337, column: 47 } }, '195': { start: { line: 338, column: 6 }, end: { line: 338, column: 106 } }, '196': { start: { line: 340, column: 4 }, end: { line: 340, column: 11 } }, '197': { start: { line: 342, column: 2 }, end: { line: 344, column: 3 } }, '198': { start: { line: 343, column: 4 }, end: { line: 343, column: 11 } }, '199': { start: { line: 345, column: 13 }, end: { line: 345, column: 19 } }, '200': { start: { line: 346, column: 14 }, end: { line: 346, column: 20 } }, '201': { start: { line: 347, column: 2 }, end: { line: 353, column: 3 } }, '202': { start: { line: 348, column: 4 }, end: { line: 350, column: 5 } }, '203': { start: { line: 349, column: 6 }, end: { line: 349, column: 15 } }, '204': { start: { line: 351, column: 4 }, end: { line: 351, column: 52 } }, '205': { start: { line: 352, column: 4 }, end: { line: 352, column: 30 } }, '206': { start: { line: 354, column: 2 }, end: { line: 354, column: 17 } }, '207': { start: { line: 356, column: 0 }, end: { line: 356, column: 36 } }, '208': { start: { line: 358, column: 29 }, end: { line: 392, column: 1 } }, '209': { start: { line: 359, column: 2 }, end: { line: 363, column: 3 } }, '210': { start: { line: 360, column: 4 }, end: { line: 360, column: 41 } }, '211': { start: { line: 361, column: 9 }, end: { line: 363, column: 3 } }, '212': { start: { line: 362, column: 4 }, end: { line: 362, column: 23 } }, '213': { start: { line: 365, column: 21 }, end: { line: 365, column: 27 } }, '214': { start: { line: 366, column: 2 }, end: { line: 389, column: 3 } }, '215': { start: { line: 367, column: 20 }, end: { line: 367, column: 37 } }, '216': { start: { line: 368, column: 4 }, end: { line: 388, column: 5 } }, '217': { start: { line: 369, column: 6 }, end: { line: 387, column: 7 } }, '218': { start: { line: 370, column: 28 }, end: { line: 370, column: 62 } }, '219': { start: { line: 371, column: 26 }, end: { line: 371, column: 38 } }, '220': { start: { line: 372, column: 8 }, end: { line: 374, column: 9 } }, '221': { start: { line: 373, column: 10 }, end: { line: 373, column: 31 } }, '222': { start: { line: 375, column: 8 }, end: { line: 379, column: 9 } }, '223': { start: { line: 376, column: 10 }, end: { line: 376, column: 25 } }, '224': { start: { line: 377, column: 15 }, end: { line: 379, column: 9 } }, '225': { start: { line: 378, column: 10 }, end: { line: 378, column: 25 } }, '226': { start: { line: 380, column: 13 }, end: { line: 387, column: 7 } }, '227': { start: { line: 381, column: 26 }, end: { line: 381, column: 60 } }, '228': { start: { line: 382, column: 8 }, end: { line: 384, column: 9 } }, '229': { start: { line: 383, column: 10 }, end: { line: 383, column: 25 } }, '230': { start: { line: 385, column: 13 }, end: { line: 387, column: 7 } }, '231': { start: { line: 386, column: 8 }, end: { line: 386, column: 23 } }, '232': { start: { line: 391, column: 2 }, end: { line: 391, column: 22 } }, '233': { start: { line: 395, column: 2 }, end: { line: 397, column: 3 } }, '234': { start: { line: 396, column: 4 }, end: { line: 396, column: 11 } }, '235': { start: { line: 398, column: 2 }, end: { line: 400, column: 3 } }, '236': { start: { line: 399, column: 4 }, end: { line: 399, column: 11 } }, '237': { start: { line: 401, column: 15 }, end: { line: 401, column: 38 } }, '238': { start: { line: 402, column: 14 }, end: { line: 402, column: 20 } }, '239': { start: { line: 403, column: 14 }, end: { line: 405, column: 3 } }, '240': { start: { line: 407, column: 2 }, end: { line: 416, column: 3 } }, '241': { start: { line: 408, column: 4 }, end: { line: 408, column: 36 } }, '242': { start: { line: 409, column: 15 }, end: { line: 409, column: 28 } }, '243': { start: { line: 410, column: 4 }, end: { line: 412, column: 5 } }, '244': { start: { line: 411, column: 6 }, end: { line: 411, column: 82 } }, '245': { start: { line: 413, column: 4 }, end: { line: 415, column: 5 } }, '246': { start: { line: 414, column: 6 }, end: { line: 414, column: 33 } }, '247': { start: { line: 417, column: 2 }, end: { line: 417, column: 34 } }, '248': { start: { line: 419, column: 0 }, end: { line: 419, column: 66 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 9, column: 68 }, end: { line: 9, column: 69 } }, loc: { start: { line: 9, column: 81 }, end: { line: 11, column: 1 } }, line: 9 }, '1': { name: '(anonymous_1)', decl: { start: { line: 13, column: 67 }, end: { line: 13, column: 68 } }, loc: { start: { line: 13, column: 90 }, end: { line: 15, column: 1 } }, line: 13 }, '2': { name: '(anonymous_2)', decl: { start: { line: 15, column: 4 }, end: { line: 15, column: 5 } }, loc: { start: { line: 15, column: 27 }, end: { line: 23, column: 1 } }, line: 15 }, '3': { name: 'arraysHaveMatchByRef', decl: { start: { line: 25, column: 9 }, end: { line: 25, column: 29 } }, loc: { start: { line: 25, column: 58 }, end: { line: 35, column: 1 } }, line: 25 }, '4': { name: 'matchItems', decl: { start: { line: 37, column: 9 }, end: { line: 37, column: 19 } }, loc: { start: { line: 37, column: 61 }, end: { line: 78, column: 1 } }, line: 37 }, '5': { name: 'arraysDiffFilter', decl: { start: { line: 80, column: 33 }, end: { line: 80, column: 49 } }, loc: { start: { line: 80, column: 59 }, end: { line: 217, column: 1 } }, line: 80 }, '6': { name: 'numerically', decl: { start: { line: 221, column: 24 }, end: { line: 221, column: 35 } }, loc: { start: { line: 221, column: 42 }, end: { line: 223, column: 3 } }, line: 221 }, '7': { name: 'numericallyBy', decl: { start: { line: 224, column: 26 }, end: { line: 224, column: 39 } }, loc: { start: { line: 224, column: 46 }, end: { line: 228, column: 3 } }, line: 224 }, '8': { name: '(anonymous_8)', decl: { start: { line: 225, column: 11 }, end: { line: 225, column: 12 } }, loc: { start: { line: 225, column: 27 }, end: { line: 227, column: 5 } }, line: 225 }, '9': { name: 'nestedPatchFilter', decl: { start: { line: 231, column: 34 }, end: { line: 231, column: 51 } }, loc: { start: { line: 231, column: 61 }, end: { line: 314, column: 1 } }, line: 231 }, '10': { name: 'collectChildrenPatchFilter', decl: { start: { line: 317, column: 49 }, end: { line: 317, column: 75 } }, loc: { start: { line: 317, column: 85 }, end: { line: 331, column: 1 } }, line: 317 }, '11': { name: 'arraysReverseFilter', decl: { start: { line: 334, column: 36 }, end: { line: 334, column: 55 } }, loc: { start: { line: 334, column: 65 }, end: { line: 355, column: 1 } }, line: 334 }, '12': { name: 'reverseArrayDeltaIndex', decl: { start: { line: 358, column: 38 }, end: { line: 358, column: 60 } }, loc: { start: { line: 358, column: 86 }, end: { line: 392, column: 1 } }, line: 358 }, '13': { name: 'collectChildrenReverseFilter', decl: { start: { line: 394, column: 16 }, end: { line: 394, column: 44 } }, loc: { start: { line: 394, column: 54 }, end: { line: 418, column: 1 } }, line: 394 } }, branchMap: { '0': { loc: { start: { line: 9, column: 14 }, end: { line: 11, column: 1 } }, type: 'cond-expr', locations: [{ start: { line: 9, column: 52 }, end: { line: 9, column: 65 } }, { start: { line: 9, column: 68 }, end: { line: 11, column: 1 } }], line: 9 }, '1': { loc: { start: { line: 13, column: 19 }, end: { line: 23, column: 1 } }, type: 'cond-expr', locations: [{ start: { line: 13, column: 67 }, end: { line: 15, column: 1 } }, { start: { line: 15, column: 4 }, end: { line: 23, column: 1 } }], line: 13 }, '2': { loc: { start: { line: 18, column: 4 }, end: { line: 20, column: 5 } }, type: 'if', locations: [{ start: { line: 18, column: 4 }, end: { line: 20, column: 5 } }, { start: { line: 18, column: 4 }, end: { line: 20, column: 5 } }], line: 18 }, '3': { loc: { start: { line: 30, column: 6 }, end: { line: 32, column: 7 } }, type: 'if', locations: [{ start: { line: 30, column: 6 }, end: { line: 32, column: 7 } }, { start: { line: 30, column: 6 }, end: { line: 32, column: 7 } }], line: 30 }, '4': { loc: { start: { line: 30, column: 10 }, end: { line: 30, column: 44 } }, type: 'binary-expr', locations: [{ start: { line: 30, column: 10 }, end: { line: 30, column: 27 } }, { start: { line: 30, column: 31 }, end: { line: 30, column: 44 } }], line: 30 }, '5': { loc: { start: { line: 40, column: 2 }, end: { line: 42, column: 3 } }, type: 'if', locations: [{ start: { line: 40, column: 2 }, end: { line: 42, column: 3 } }, { start: { line: 40, column: 2 }, end: { line: 42, column: 3 } }], line: 40 }, '6': { loc: { start: { line: 43, column: 2 }, end: { line: 45, column: 3 } }, type: 'if', locations: [{ start: { line: 43, column: 2 }, end: { line: 45, column: 3 } }, { start: { line: 43, column: 2 }, end: { line: 45, column: 3 } }], line: 43 }, '7': { loc: { start: { line: 43, column: 6 }, end: { line: 43, column: 186 } }, type: 'binary-expr', locations: [{ start: { line: 43, column: 6 }, end: { line: 43, column: 94 } }, { start: { line: 43, column: 98 }, end: { line: 43, column: 186 } }], line: 43 }, '8': { loc: { start: { line: 43, column: 7 }, end: { line: 43, column: 80 } }, type: 'cond-expr', locations: [{ start: { line: 43, column: 39 }, end: { line: 43, column: 50 } }, { start: { line: 43, column: 53 }, end: { line: 43, column: 80 } }], line: 43 }, '9': { loc: { start: { line: 43, column: 99 }, end: { line: 43, column: 172 } }, type: 'cond-expr', locations: [{ start: { line: 43, column: 131 }, end: { line: 43, column: 142 } }, { start: { line: 43, column: 145 }, end: { line: 43, column: 172 } }], line: 43 }, '10': { loc: { start: { line: 47, column: 2 }, end: { line: 50, column: 3 } }, type: 'if', locations: [{ start: { line: 47, column: 2 }, end: { line: 50, column: 3 } }, { start: { line: 47, column: 2 }, end: { line: 50, column: 3 } }], line: 47 }, '11': { loc: { start: { line: 49, column: 11 }, end: { line: 49, column: 55 } }, type: 'binary-expr', locations: [{ start: { line: 49, column: 11 }, end: { line: 49, column: 34 } }, { start: { line: 49, column: 38 }, end: { line: 49, column: 55 } }], line: 49 }, '12': { loc: { start: { line: 53, column: 2 }, end: { line: 61, column: 3 } }, type: 'if', locations: [{ start: { line: 53, column: 2 }, end: { line: 61, column: 3 } }, { start: { line: 53, column: 2 }, end: { line: 61, column: 3 } }], line: 53 }, '13': { loc: { start: { line: 54, column: 25 }, end: { line: 54, column: 49 } }, type: 'binary-expr', locations: [{ start: { line: 54, column: 25 }, end: { line: 54, column: 43 } }, { start: { line: 54, column: 47 }, end: { line: 54, column: 49 } }], line: 54 }, '14': { loc: { start: { line: 56, column: 4 }, end: { line: 58, column: 5 } }, type: 'if', locations: [{ start: { line: 56, column: 4 }, end: { line: 58, column: 5 } }, { start: { line: 56, column: 4 }, end: { line: 58, column: 5 } }], line: 56 }, '15': { loc: { start: { line: 62, column: 2 }, end: { line: 64, column: 3 } }, type: 'if', locations: [{ start: { line: 62, column: 2 }, end: { line: 64, column: 3 } }, { start: { line: 62, column: 2 }, end: { line: 64, column: 3 } }], line: 62 }, '16': { loc: { start: { line: 65, column: 2 }, end: { line: 73, column: 3 } }, type: 'if', locations: [{ start: { line: 65, column: 2 }, end: { line: 73, column: 3 } }, { start: { line: 65, column: 2 }, end: { line: 73, column: 3 } }], line: 65 }, '17': { loc: { start: { line: 66, column: 25 }, end: { line: 66, column: 49 } }, type: 'binary-expr', locations: [{ start: { line: 66, column: 25 }, end: { line: 66, column: 43 } }, { start: { line: 66, column: 47 }, end: { line: 66, column: 49 } }], line: 66 }, '18': { loc: { start: { line: 68, column: 4 }, end: { line: 70, column: 5 } }, type: 'if', locations: [{ start: { line: 68, column: 4 }, end: { line: 70, column: 5 } }, { start: { line: 68, column: 4 }, end: { line: 70, column: 5 } }], line: 68 }, '19': { loc: { start: { line: 74, column: 2 }, end: { line: 76, column: 3 } }, type: 'if', locations: [{ start: { line: 74, column: 2 }, end: { line: 76, column: 3 } }, { start: { line: 74, column: 2 }, end: { line: 76, column: 3 } }], line: 74 }, '20': { loc: { start: { line: 81, column: 2 }, end: { line: 83, column: 3 } }, type: 'if', locations: [{ start: { line: 81, column: 2 }, end: { line: 83, column: 3 } }, { start: { line: 81, column: 2 }, end: { line: 83, column: 3 } }], line: 81 }, '21': { loc: { start: { line: 86, column: 16 }, end: { line: 86, column: 61 } }, type: 'binary-expr', locations: [{ start: { line: 86, column: 16 }, end: { line: 86, column: 31 } }, { start: { line: 86, column: 35 }, end: { line: 86, column: 61 } }], line: 86 }, '22': { loc: { start: { line: 87, column: 21 }, end: { line: 87, column: 71 } }, type: 'binary-expr', locations: [{ start: { line: 87, column: 21 }, end: { line: 87, column: 36 } }, { start: { line: 87, column: 40 }, end: { line: 87, column: 71 } }], line: 87 }, '23': { loc: { start: { line: 101, column: 2 }, end: { line: 103, column: 3 } }, type: 'if', locations: [{ start: { line: 101, column: 2 }, end: { line: 103, column: 3 } }, { start: { line: 101, column: 2 }, end: { line: 103, column: 3 } }], line: 101 }, '24': { loc: { start: { line: 101, column: 6 }, end: { line: 101, column: 107 } }, type: 'binary-expr', locations: [{ start: { line: 101, column: 6 }, end: { line: 101, column: 14 } }, { start: { line: 101, column: 18 }, end: { line: 101, column: 26 } }, { start: { line: 101, column: 30 }, end: { line: 101, column: 54 } }, { start: { line: 101, column: 58 }, end: { line: 101, column: 107 } }], line: 101 }, '25': { loc: { start: { line: 106, column: 9 }, end: { line: 106, column: 115 } }, type: 'binary-expr', locations: [{ start: { line: 106, column: 9 }, end: { line: 106, column: 26 } }, { start: { line: 106, column: 30 }, end: { line: 106, column: 47 } }, { start: { line: 106, column: 51 }, end: { line: 106, column: 115 } }], line: 106 }, '26': { loc: { start: { line: 113, column: 9 }, end: { line: 113, column: 163 } }, type: 'binary-expr', locations: [{ start: { line: 113, column: 9 }, end: { line: 113, column: 39 } }, { start: { line: 113, column: 43 }, end: { line: 113, column: 73 } }, { start: { line: 113, column: 77 }, end: { line: 113, column: 163 } }], line: 113 }, '27': { loc: { start: { line: 121, column: 2 }, end: { line: 136, column: 3 } }, type: 'if', locations: [{ start: { line: 121, column: 2 }, end: { line: 136, column: 3 } }, { start: { line: 121, column: 2 }, end: { line: 136, column: 3 } }], line: 121 }, '28': { loc: { start: { line: 122, column: 4 }, end: { line: 126, column: 5 } }, type: 'if', locations: [{ start: { line: 122, column: 4 }, end: { line: 126, column: 5 } }, { start: { line: 122, column: 4 }, end: { line: 126, column: 5 } }], line: 122 }, '29': { loc: { start: { line: 128, column: 13 }, end: { line: 130, column: 5 } }, type: 'binary-expr', locations: [{ start: { line: 128, column: 13 }, end: { line: 128, column: 19 } }, { start: { line: 128, column: 23 }, end: { line: 130, column: 5 } }], line: 128 }, '30': { loc: { start: { line: 137, column: 2 }, end: { line: 147, column: 3 } }, type: 'if', locations: [{ start: { line: 137, column: 2 }, end: { line: 147, column: 3 } }, { start: { line: 137, column: 2 }, end: { line: 147, column: 3 } }], line: 137 }, '31': { loc: { start: { line: 139, column: 13 }, end: { line: 141, column: 5 } }, type: 'binary-expr', locations: [{ start: { line: 139, column: 13 }, end: { line: 139, column: 19 } }, { start: { line: 139, column: 23 }, end: { line: 141, column: 5 } }], line: 139 }, '32': { loc: { start: { line: 157, column: 11 }, end: { line: 159, column: 3 } }, type: 'binary-expr', locations: [{ start: { line: 157, column: 11 }, end: { line: 157, column: 17 } }, { start: { line: 157, column: 21 }, end: { line: 159, column: 3 } }], line: 157 }, '33': { loc: { start: { line: 161, column: 4 }, end: { line: 165, column: 5 } }, type: 'if', locations: [{ start: { line: 161, column: 4 }, end: { line: 165, column: 5 } }, { start: { line: 161, column: 4 }, end: { line: 165, column: 5 } }], line: 161 }, '34': { loc: { start: { line: 169, column: 2 }, end: { line: 171, column: 3 } }, type: 'if', locations: [{ start: { line: 169, column: 2 }, end: { line: 171, column: 3 } }, { start: { line: 169, column: 2 }, end: { line: 171, column: 3 } }], line: 169 }, '35': { loc: { start: { line: 169, column: 6 }, end: { line: 169, column: 94 } }, type: 'binary-expr', locations: [{ start: { line: 169, column: 6 }, end: { line: 169, column: 21 } }, { start: { line: 169, column: 25 }, end: { line: 169, column: 47 } }, { start: { line: 169, column: 51 }, end: { line: 169, column: 94 } }], line: 169 }, '36': { loc: { start: { line: 173, column: 2 }, end: { line: 175, column: 3 } }, type: 'if', locations: [{ start: { line: 173, column: 2 }, end: { line: 175, column: 3 } }, { start: { line: 173, column: 2 }, end: { line: 175, column: 3 } }], line: 173 }, '37': { loc: { start: { line: 173, column: 6 }, end: { line: 173, column: 92 } }, type: 'binary-expr', locations: [{ start: { line: 173, column: 6 }, end: { line: 173, column: 21 } }, { start: { line: 173, column: 25 }, end: { line: 173, column: 47 } }, { start: { line: 173, column: 51 }, end: { line: 173, column: 92 } }], line: 173 }, '38': { loc: { start: { line: 180, column: 4 }, end: { line: 213, column: 5 } }, type: 'if', locations: [{ start: { line: 180, column: 4 }, end: { line: 213, column: 5 } }, { start: { line: 180, column: 4 }, end: { line: 213, column: 5 } }], line: 180 }, '39': { loc: { start: { line: 183, column: 6 }, end: { line: 202, column: 7 } }, type: 'if', locations: [{ start: { line: 183, column: 6 }, end: { line: 202, column: 7 } }, { start: { line: 183, column: 6 }, end: { line: 202, column: 7 } }], line: 183 }, '40': { loc: { start: { line: 183, column: 10 }, end: { line: 183, column: 46 } }, type: 'binary-expr', locations: [{ start: { line: 183, column: 10 }, end: { line: 183, column: 20 } }, { start: { line: 183, column: 24 }, end: { line: 183, column: 46 } }], line: 183 }, '41': { loc: { start: { line: 186, column: 10 }, end: { line: 200, column: 11 } }, type: 'if', locations: [{ start: { line: 186, column: 10 }, end: { line: 200, column: 11 } }, { start: { line: 186, column: 10 }, end: { line: 200, column: 11 } }], line: 186 }, '42': { loc: { start: { line: 189, column: 12 }, end: { line: 192, column: 13 } }, type: 'if', locations: [{ start: { line: 189, column: 12 }, end: { line: 192, column: 13 } }, { start: { line: 189, column: 12 }, end: { line: 192, column: 13 } }], line: 189 }, '43': { loc: { start: { line: 203, column: 6 }, end: { line: 206, column: 7 } }, type: 'if', locations: [{ start: { line: 203, column: 6 }, end: { line: 206, column: 7 } }, { start: { line: 203, column: 6 }, end: { line: 206, column: 7 } }], line: 203 }, '44': { loc: { start: { line: 232, column: 2 }, end: { line: 234, column: 3 } }, type: 'if', locations: [{ start: { line: 232, column: 2 }, end: { line: 234, column: 3 } }, { start: { line: 232, column: 2 }, end: { line: 234, column: 3 } }], line: 232 }, '45': { loc: { start: { line: 235, column: 2 }, end: { line: 237, column: 3 } }, type: 'if', locations: [{ start: { line: 235, column: 2 }, end: { line: 237, column: 3 } }, { start: { line: 235, column: 2 }, end: { line: 237, column: 3 } }], line: 235 }, '46': { loc: { start: { line: 249, column: 4 }, end: { line: 272, column: 5 } }, type: 'if', locations: [{ start: { line: 249, column: 4 }, end: { line: 272, column: 5 } }, { start: { line: 249, column: 4 }, end: { line: 272, column: 5 } }], line: 249 }, '47': { loc: { start: { line: 250, column: 6 }, end: { line: 271, column: 7 } }, type: 'if', locations: [{ start: { line: 250, column: 6 }, end: { line: 271, column: 7 } }, { start: { line: 250, column: 6 }, end: { line: 271, column: 7 } }], line: 250 }, '48': { loc: { start: { line: 252, column: 8 }, end: { line: 256, column: 9 } }, type: 'if', locations: [{ start: { line: 252, column: 8 }, end: { line: 256, column: 9 } }, { start: { line: 252, column: 8 }, end: { line: 256, column: 9 } }], line: 252 }, '49': { loc: { start: { line: 252, column: 12 }, end: { line: 252, column: 67 } }, type: 'binary-expr', locations: [{ start: { line: 252, column: 12 }, end: { line: 252, column: 33 } }, { start: { line: 252, column: 37 }, end: { line: 252, column: 67 } }], line: 252 }, '50': { loc: { start: { line: 258, column: 8 }, end: { line: 270, column: 9 } }, type: 'if', locations: [{ start: { line: 258, column: 8 }, end: { line: 270, column: 9 } }, { start: { line: 258, column: 8 }, end: { line: 270, column: 9 } }], line: 258 }, '51': { loc: { start: { line: 281, column: 4 }, end: { line: 287, column: 5 } }, type: 'if', locations: [{ start: { line: 281, column: 4 }, end: { line: 287, column: 5 } }, { start: { line: 281, column: 4 }, end: { line: 287, column: 5 } }], line: 281 }, '52': { loc: { start: { line: 301, column: 2 }, end: { line: 307, column: 3 } }, type: 'if', locations: [{ start: { line: 301, column: 2 }, end: { line: 307, column: 3 } }, { start: { line: 301, column: 2 }, end: { line: 307, column: 3 } }], line: 301 }, '53': { loc: { start: { line: 309, column: 2 }, end: { line: 312, column: 3 } }, type: 'if', locations: [{ start: { line: 309, column: 2 }, end: { line: 312, column: 3 } }, { start: { line: 309, column: 2 }, end: { line: 312, column: 3 } }], line: 309 }, '54': { loc: { start: { line: 318, column: 2 }, end: { line: 320, column: 3 } }, type: 'if', locations: [{ start: { line: 318, column: 2 }, end: { line: 320, column: 3 } }, { start: { line: 318, column: 2 }, end: { line: 320, column: 3 } }], line: 318 }, '55': { loc: { start: { line: 318, column: 6 }, end: { line: 318, column: 35 } }, type: 'binary-expr', locations: [{ start: { line: 318, column: 6 }, end: { line: 318, column: 14 } }, { start: { line: 318, column: 18 }, end: { line: 318, column: 35 } }], line: 318 }, '56': { loc: { start: { line: 321, column: 2 }, end: { line: 323, column: 3 } }, type: 'if', locations: [{ start: { line: 321, column: 2 }, end: { line: 323, column: 3 } }, { start: { line: 321, column: 2 }, end: { line: 323, column: 3 } }], line: 321 }, '57': { loc: { start: { line: 335, column: 2 }, end: { line: 341, column: 3 } }, type: 'if', locations: [{ start: { line: 335, column: 2 }, end: { line: 341, column: 3 } }, { start: { line: 335, column: 2 }, end: { line: 341, column: 3 } }], line: 335 }, '58': { loc: { start: { line: 336, column: 4 }, end: { line: 339, column: 5 } }, type: 'if', locations: [{ start: { line: 336, column: 4 }, end: { line: 339, column: 5 } }, { start: { line: 336, column: 4 }, end: { line: 339, column: 5 } }], line: 336 }, '59': { loc: { start: { line: 342, column: 2 }, end: { line: 344, column: 3 } }, type: 'if', locations: [{ start: { line: 342, column: 2 }, end: { line: 344, column: 3 } }, { start: { line: 342, column: 2 }, end: { line: 344, column: 3 } }], line: 342 }, '60': { loc: { start: { line: 348, column: 4 }, end: { line: 350, column: 5 } }, type: 'if', locations: [{ start: { line: 348, column: 4 }, end: { line: 350, column: 5 } }, { start: { line: 348, column: 4 }, end: { line: 350, column: 5 } }], line: 348 }, '61': { loc: { start: { line: 359, column: 2 }, end: { line: 363, column: 3 } }, type: 'if', locations: [{ start: { line: 359, column: 2 }, end: { line: 363, column: 3 } }, { start: { line: 359, column: 2 }, end: { line: 363, column: 3 } }], line: 359 }, '62': { loc: { start: { line: 359, column: 6 }, end: { line: 359, column: 51 } }, type: 'binary-expr', locations: [{ start: { line: 359, column: 6 }, end: { line: 359, column: 31 } }, { start: { line: 359, column: 35 }, end: { line: 359, column: 51 } }], line: 359 }, '63': { loc: { start: { line: 361, column: 9 }, end: { line: 363, column: 3 } }, type: 'if', locations: [{ start: { line: 361, column: 9 }, end: { line: 363, column: 3 } }, { start: { line: 361, column: 9 }, end: { line: 363, column: 3 } }], line: 361 }, '64': { loc: { start: { line: 361, column: 13 }, end: { line: 361, column: 53 } }, type: 'binary-expr', locations: [{ start: { line: 361, column: 13 }, end: { line: 361, column: 31 } }, { start: { line: 361, column: 35 }, end: { line: 361, column: 53 } }], line: 361 }, '65': { loc: { start: { line: 368, column: 4 }, end: { line: 388, column: 5 } }, type: 'if', locations: [{ start: { line: 368, column: 4 }, end: { line: 388, column: 5 } }, { start: { line: 368, column: 4 }, end: { line: 388, column: 5 } }], line: 368 }, '66': { loc: { start: { line: 369, column: 6 }, end: { line: 387, column: 7 } }, type: 'if', locations: [{ start: { line: 369, column: 6 }, end: { line: 387, column: 7 } }, { start: { line: 369, column: 6 }, end: { line: 387, column: 7 } }], line: 369 }, '67': { loc: { start: { line: 372, column: 8 }, end: { line: 374, column: 9 } }, type: 'if', locations: [{ start: { line: 372, column: 8 }, end: { line: 374, column: 9 } }, { start: { line: 372, column: 8 }, end: { line: 374, column: 9 } }], line: 372 }, '68': { loc: { start: { line: 375, column: 8 }, end: { line: 379, column: 9 } }, type: 'if', locations: [{ start: { line: 375, column: 8 }, end: { line: 379, column: 9 } }, { start: { line: 375, column: 8 }, end: { line: 379, column: 9 } }], line: 375 }, '69': { loc: { start: { line: 375, column: 12 }, end: { line: 375, column: 71 } }, type: 'binary-expr', locations: [{ start: { line: 375, column: 12 }, end: { line: 375, column: 41 } }, { start: { line: 375, column: 45 }, end: { line: 375, column: 71 } }], line: 375 }, '70': { loc: { start: { line: 377, column: 15 }, end: { line: 379, column: 9 } }, type: 'if', locations: [{ start: { line: 377, column: 15 }, end: { line: 379, column: 9 } }, { start: { line: 377, column: 15 }, end: { line: 379, column: 9 } }], line: 377 }, '71': { loc: { start: { line: 377, column: 19 }, end: { line: 377, column: 78 } }, type: 'binary-expr', locations: [{ start: { line: 377, column: 19 }, end: { line: 377, column: 48 } }, { start: { line: 377, column: 52 }, end: { line: 377, column: 78 } }], line: 377 }, '72': { loc: { start: { line: 380, column: 13 }, end: { line: 387, column: 7 } }, type: 'if', locations: [{ start: { line: 380, column: 13 }, end: { line: 387, column: 7 } }, { start: { line: 380, column: 13 }, end: { line: 387, column: 7 } }], line: 380 }, '73': { loc: { start: { line: 382, column: 8 }, end: { line: 384, column: 9 } }, type: 'if', locations: [{ start: { line: 382, column: 8 }, end: { line: 384, column: 9 } }, { start: { line: 382, column: 8 }, end: { line: 384, column: 9 } }], line: 382 }, '74': { loc: { start: { line: 385, column: 13 }, end: { line: 387, column: 7 } }, type: 'if', locations: [{ start: { line: 385, column: 13 }, end: { line: 387, column: 7 } }, { start: { line: 385, column: 13 }, end: { line: 387, column: 7 } }], line: 385 }, '75': { loc: { start: { line: 385, column: 17 }, end: { line: 385, column: 69 } }, type: 'binary-expr', locations: [{ start: { line: 385, column: 17 }, end: { line: 385, column: 39 } }, { start: { line: 385, column: 43 }, end: { line: 385, column: 69 } }], line: 385 }, '76': { loc: { start: { line: 395, column: 2 }, end: { line: 397, column: 3 } }, type: 'if', locations: [{ start: { line: 395, column: 2 }, end: { line: 397, column: 3 } }, { start: { line: 395, column: 2 }, end: { line: 397, column: 3 } }], line: 395 }, '77': { loc: { start: { line: 395, column: 6 }, end: { line: 395, column: 35 } }, type: 'binary-expr', locations: [{ start: { line: 395, column: 6 }, end: { line: 395, column: 14 } }, { start: { line: 395, column: 18 }, end: { line: 395, column: 35 } }], line: 395 }, '78': { loc: { start: { line: 398, column: 2 }, end: { line: 400, column: 3 } }, type: 'if', locations: [{ start: { line: 398, column: 2 }, end: { line: 400, column: 3 } }, { start: { line: 398, column: 2 }, end: { line: 400, column: 3 } }], line: 398 }, '79': { loc: { start: { line: 410, column: 4 }, end: { line: 412, column: 5 } }, type: 'if', locations: [{ start: { line: 410, column: 4 }, end: { line: 412, column: 5 } }, { start: { line: 410, column: 4 }, end: { line: 412, column: 5 } }], line: 410 }, '80': { loc: { start: { line: 413, column: 4 }, end: { line: 415, column: 5 } }, type: 'if', locations: [{ start: { line: 413, column: 4 }, end: { line: 415, column: 5 } }, { start: { line: 413, column: 4 }, end: { line: 415, column: 5 } }], line: 413 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, '73': 0, '74': 0, '75': 0, '76': 0, '77': 0, '78': 0, '79': 0, '80': 0, '81': 0, '82': 0, '83': 0, '84': 0, '85': 0, '86': 0, '87': 0, '88': 0, '89': 0, '90': 0, '91': 0, '92': 0, '93': 0, '94': 0, '95': 0, '96': 0, '97': 0, '98': 0, '99': 0, '100': 0, '101': 0, '102': 0, '103': 0, '104': 0, '105': 0, '106': 0, '107': 0, '108': 0, '109': 0, '110': 0, '111': 0, '112': 0, '113': 0, '114': 0, '115': 0, '116': 0, '117': 0, '118': 0, '119': 0, '120': 0, '121': 0, '122': 0, '123': 0, '124': 0, '125': 0, '126': 0, '127': 0, '128': 0, '129': 0, '130': 0, '131': 0, '132': 0, '133': 0, '134': 0, '135': 0, '136': 0, '137': 0, '138': 0, '139': 0, '140': 0, '141': 0, '142': 0, '143': 0, '144': 0, '145': 0, '146': 0, '147': 0, '148': 0, '149': 0, '150': 0, '151': 0, '152': 0, '153': 0, '154': 0, '155': 0, '156': 0, '157': 0, '158': 0, '159': 0, '160': 0, '161': 0, '162': 0, '163': 0, '164': 0, '165': 0, '166': 0, '167': 0, '168': 0, '169': 0, '170': 0, '171': 0, '172': 0, '173': 0, '174': 0, '175': 0, '176': 0, '177': 0, '178': 0, '179': 0, '180': 0, '181': 0, '182': 0, '183': 0, '184': 0, '185': 0, '186': 0, '187': 0, '188': 0, '189': 0, '190': 0, '191': 0, '192': 0, '193': 0, '194': 0, '195': 0, '196': 0, '197': 0, '198': 0, '199': 0, '200': 0, '201': 0, '202': 0, '203': 0, '204': 0, '205': 0, '206': 0, '207': 0, '208': 0, '209': 0, '210': 0, '211': 0, '212': 0, '213': 0, '214': 0, '215': 0, '216': 0, '217': 0, '218': 0, '219': 0, '220': 0, '221': 0, '222': 0, '223': 0, '224': 0, '225': 0, '226': 0, '227': 0, '228': 0, '229': 0, '230': 0, '231': 0, '232': 0, '233': 0, '234': 0, '235': 0, '236': 0, '237': 0, '238': 0, '239': 0, '240': 0, '241': 0, '242': 0, '243': 0, '244': 0, '245': 0, '246': 0, '247': 0, '248': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0], '8': [0, 0], '9': [0, 0], '10': [0, 0], '11': [0, 0], '12': [0, 0], '13': [0, 0], '14': [0, 0], '15': [0, 0], '16': [0, 0], '17': [0, 0], '18': [0, 0], '19': [0, 0], '20': [0, 0], '21': [0, 0], '22': [0, 0], '23': [0, 0], '24': [0, 0, 0, 0], '25': [0, 0, 0], '26': [0, 0, 0], '27': [0, 0], '28': [0, 0], '29': [0, 0], '30': [0, 0], '31': [0, 0], '32': [0, 0], '33': [0, 0], '34': [0, 0], '35': [0, 0, 0], '36': [0, 0], '37': [0, 0, 0], '38': [0, 0], '39': [0, 0], '40': [0, 0], '41': [0, 0], '42': [0, 0], '43': [0, 0], '44': [0, 0], '45': [0, 0], '46': [0, 0], '47': [0, 0], '48': [0, 0], '49': [0, 0], '50': [0, 0], '51': [0, 0], '52': [0, 0], '53': [0, 0], '54': [0, 0], '55': [0, 0], '56': [0, 0], '57': [0, 0], '58': [0, 0], '59': [0, 0], '60': [0, 0], '61': [0, 0], '62': [0, 0], '63': [0, 0], '64': [0, 0], '65': [0, 0], '66': [0, 0], '67': [0, 0], '68': [0, 0], '69': [0, 0], '70': [0, 0], '71': [0, 0], '72': [0, 0], '73': [0, 0], '74': [0, 0], '75': [0, 0], '76': [0, 0], '77': [0, 0], '78': [0, 0], '79': [0, 0], '80': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var ARRAY_MOVE = (cov_25osudpoaz.s[0]++, 3);var isArray$2 = (cov_25osudpoaz.s[1]++, typeof Array.isArray === 'function' ? (cov_25osudpoaz.b[0][0]++, Array.isArray) : (cov_25osudpoaz.b[0][1]++, function (a) {
  cov_25osudpoaz.f[0]++;cov_25osudpoaz.s[2]++;return a instanceof Array;
}));var arrayIndexOf = (cov_25osudpoaz.s[3]++, typeof Array.prototype.indexOf === 'function' ? (cov_25osudpoaz.b[1][0]++, function (array, item) {
  cov_25osudpoaz.f[1]++;cov_25osudpoaz.s[4]++;return array.indexOf(item);
}) : (cov_25osudpoaz.b[1][1]++, function (array, item) {
  cov_25osudpoaz.f[2]++;var length = (cov_25osudpoaz.s[5]++, array.length);cov_25osudpoaz.s[6]++;for (var i = 0; i < length; i++) {
    cov_25osudpoaz.s[7]++;if (array[i] === item) {
      cov_25osudpoaz.b[2][0]++;cov_25osudpoaz.s[8]++;return i;
    } else {
      cov_25osudpoaz.b[2][1]++;
    }
  }cov_25osudpoaz.s[9]++;return -1;
}));function arraysHaveMatchByRef(array1, array2, len1, len2) {
  cov_25osudpoaz.f[3]++;cov_25osudpoaz.s[10]++;for (var index1 = 0; index1 < len1; index1++) {
    var val1 = (cov_25osudpoaz.s[11]++, array1[index1]);cov_25osudpoaz.s[12]++;for (var index2 = 0; index2 < len2; index2++) {
      var val2 = (cov_25osudpoaz.s[13]++, array2[index2]);cov_25osudpoaz.s[14]++;if ((cov_25osudpoaz.b[4][0]++, index1 !== index2) && (cov_25osudpoaz.b[4][1]++, val1 === val2)) {
        cov_25osudpoaz.b[3][0]++;cov_25osudpoaz.s[15]++;return true;
      } else {
        cov_25osudpoaz.b[3][1]++;
      }
    }
  }
}function matchItems(array1, array2, index1, index2, context) {
  cov_25osudpoaz.f[4]++;var value1 = (cov_25osudpoaz.s[16]++, array1[index1]);var value2 = (cov_25osudpoaz.s[17]++, array2[index2]);cov_25osudpoaz.s[18]++;if (value1 === value2) {
    cov_25osudpoaz.b[5][0]++;cov_25osudpoaz.s[19]++;return true;
  } else {
    cov_25osudpoaz.b[5][1]++;
  }cov_25osudpoaz.s[20]++;if ((cov_25osudpoaz.b[7][0]++, (typeof value1 === 'undefined' ? (cov_25osudpoaz.b[8][0]++, 'undefined') : (cov_25osudpoaz.b[8][1]++, _typeof$1(value1))) !== 'object') || (cov_25osudpoaz.b[7][1]++, (typeof value2 === 'undefined' ? (cov_25osudpoaz.b[9][0]++, 'undefined') : (cov_25osudpoaz.b[9][1]++, _typeof$1(value2))) !== 'object')) {
    cov_25osudpoaz.b[6][0]++;cov_25osudpoaz.s[21]++;return false;
  } else {
    cov_25osudpoaz.b[6][1]++;
  }var objectHash = (cov_25osudpoaz.s[22]++, context.objectHash);cov_25osudpoaz.s[23]++;if (!objectHash) {
    cov_25osudpoaz.b[10][0]++;cov_25osudpoaz.s[24]++; // no way to match objects was provided, try match by position
    return (cov_25osudpoaz.b[11][0]++, context.matchByPosition) && (cov_25osudpoaz.b[11][1]++, index1 === index2);
  } else {
    cov_25osudpoaz.b[10][1]++;
  }var hash1 = (cov_25osudpoaz.s[25]++, void 0);var hash2 = (cov_25osudpoaz.s[26]++, void 0);cov_25osudpoaz.s[27]++;if (typeof index1 === 'number') {
    cov_25osudpoaz.b[12][0]++;cov_25osudpoaz.s[28]++;context.hashCache1 = (cov_25osudpoaz.b[13][0]++, context.hashCache1) || (cov_25osudpoaz.b[13][1]++, []);cov_25osudpoaz.s[29]++;hash1 = context.hashCache1[index1];cov_25osudpoaz.s[30]++;if (typeof hash1 === 'undefined') {
      cov_25osudpoaz.b[14][0]++;cov_25osudpoaz.s[31]++;context.hashCache1[index1] = hash1 = objectHash(value1, index1);
    } else {
      cov_25osudpoaz.b[14][1]++;
    }
  } else {
    cov_25osudpoaz.b[12][1]++;cov_25osudpoaz.s[32]++;hash1 = objectHash(value1);
  }cov_25osudpoaz.s[33]++;if (typeof hash1 === 'undefined') {
    cov_25osudpoaz.b[15][0]++;cov_25osudpoaz.s[34]++;return false;
  } else {
    cov_25osudpoaz.b[15][1]++;
  }cov_25osudpoaz.s[35]++;if (typeof index2 === 'number') {
    cov_25osudpoaz.b[16][0]++;cov_25osudpoaz.s[36]++;context.hashCache2 = (cov_25osudpoaz.b[17][0]++, context.hashCache2) || (cov_25osudpoaz.b[17][1]++, []);cov_25osudpoaz.s[37]++;hash2 = context.hashCache2[index2];cov_25osudpoaz.s[38]++;if (typeof hash2 === 'undefined') {
      cov_25osudpoaz.b[18][0]++;cov_25osudpoaz.s[39]++;context.hashCache2[index2] = hash2 = objectHash(value2, index2);
    } else {
      cov_25osudpoaz.b[18][1]++;
    }
  } else {
    cov_25osudpoaz.b[16][1]++;cov_25osudpoaz.s[40]++;hash2 = objectHash(value2);
  }cov_25osudpoaz.s[41]++;if (typeof hash2 === 'undefined') {
    cov_25osudpoaz.b[19][0]++;cov_25osudpoaz.s[42]++;return false;
  } else {
    cov_25osudpoaz.b[19][1]++;
  }cov_25osudpoaz.s[43]++;return hash1 === hash2;
}cov_25osudpoaz.s[44]++;var diffFilter$1 = function arraysDiffFilter(context) {
  cov_25osudpoaz.f[5]++;cov_25osudpoaz.s[45]++;if (!context.leftIsArray) {
    cov_25osudpoaz.b[20][0]++;cov_25osudpoaz.s[46]++;return;
  } else {
    cov_25osudpoaz.b[20][1]++;
  }var matchContext = (cov_25osudpoaz.s[47]++, { objectHash: (cov_25osudpoaz.b[21][0]++, context.options) && (cov_25osudpoaz.b[21][1]++, context.options.objectHash), matchByPosition: (cov_25osudpoaz.b[22][0]++, context.options) && (cov_25osudpoaz.b[22][1]++, context.options.matchByPosition) });var commonHead = (cov_25osudpoaz.s[48]++, 0);var commonTail = (cov_25osudpoaz.s[49]++, 0);var index = (cov_25osudpoaz.s[50]++, void 0);var index1 = (cov_25osudpoaz.s[51]++, void 0);var index2 = (cov_25osudpoaz.s[52]++, void 0);var array1 = (cov_25osudpoaz.s[53]++, context.left);var array2 = (cov_25osudpoaz.s[54]++, context.right);var len1 = (cov_25osudpoaz.s[55]++, array1.length);var len2 = (cov_25osudpoaz.s[56]++, array2.length);var child = (cov_25osudpoaz.s[57]++, void 0);cov_25osudpoaz.s[58]++;if ((cov_25osudpoaz.b[24][0]++, len1 > 0) && (cov_25osudpoaz.b[24][1]++, len2 > 0) && (cov_25osudpoaz.b[24][2]++, !matchContext.objectHash) && (cov_25osudpoaz.b[24][3]++, typeof matchContext.matchByPosition !== 'boolean')) {
    cov_25osudpoaz.b[23][0]++;cov_25osudpoaz.s[59]++;matchContext.matchByPosition = !arraysHaveMatchByRef(array1, array2, len1, len2);
  } else {
    cov_25osudpoaz.b[23][1]++;
  } // separate common head
  cov_25osudpoaz.s[60]++;while ((cov_25osudpoaz.b[25][0]++, commonHead < len1) && (cov_25osudpoaz.b[25][1]++, commonHead < len2) && (cov_25osudpoaz.b[25][2]++, matchItems(array1, array2, commonHead, commonHead, matchContext))) {
    cov_25osudpoaz.s[61]++;index = commonHead;cov_25osudpoaz.s[62]++;child = new DiffContext(context.left[index], context.right[index]);cov_25osudpoaz.s[63]++;context.push(child, index);cov_25osudpoaz.s[64]++;commonHead++;
  } // separate common tail
  cov_25osudpoaz.s[65]++;while ((cov_25osudpoaz.b[26][0]++, commonTail + commonHead < len1) && (cov_25osudpoaz.b[26][1]++, commonTail + commonHead < len2) && (cov_25osudpoaz.b[26][2]++, matchItems(array1, array2, len1 - 1 - commonTail, len2 - 1 - commonTail, matchContext))) {
    cov_25osudpoaz.s[66]++;index1 = len1 - 1 - commonTail;cov_25osudpoaz.s[67]++;index2 = len2 - 1 - commonTail;cov_25osudpoaz.s[68]++;child = new DiffContext(context.left[index1], context.right[index2]);cov_25osudpoaz.s[69]++;context.push(child, index2);cov_25osudpoaz.s[70]++;commonTail++;
  }var result = (cov_25osudpoaz.s[71]++, void 0);cov_25osudpoaz.s[72]++;if (commonHead + commonTail === len1) {
    cov_25osudpoaz.b[27][0]++;cov_25osudpoaz.s[73]++;if (len1 === len2) {
      cov_25osudpoaz.b[28][0]++;cov_25osudpoaz.s[74]++; // arrays are identical
      context.setResult(undefined).exit();cov_25osudpoaz.s[75]++;return;
    } else {
      cov_25osudpoaz.b[28][1]++;
    } // trivial case, a block (1 or more consecutive items) was added
    cov_25osudpoaz.s[76]++;result = (cov_25osudpoaz.b[29][0]++, result) || (cov_25osudpoaz.b[29][1]++, { _t: 'a' });cov_25osudpoaz.s[77]++;for (index = commonHead; index < len2 - commonTail; index++) {
      cov_25osudpoaz.s[78]++;result[index] = [array2[index]];
    }cov_25osudpoaz.s[79]++;context.setResult(result).exit();cov_25osudpoaz.s[80]++;return;
  } else {
    cov_25osudpoaz.b[27][1]++;
  }cov_25osudpoaz.s[81]++;if (commonHead + commonTail === len2) {
    cov_25osudpoaz.b[30][0]++;cov_25osudpoaz.s[82]++; // trivial case, a block (1 or more consecutive items) was removed
    result = (cov_25osudpoaz.b[31][0]++, result) || (cov_25osudpoaz.b[31][1]++, { _t: 'a' });cov_25osudpoaz.s[83]++;for (index = commonHead; index < len1 - commonTail; index++) {
      cov_25osudpoaz.s[84]++;result['_' + index] = [array1[index], 0, 0];
    }cov_25osudpoaz.s[85]++;context.setResult(result).exit();cov_25osudpoaz.s[86]++;return;
  } else {
    cov_25osudpoaz.b[30][1]++;
  } // reset hash cache
  cov_25osudpoaz.s[87]++;delete matchContext.hashCache1;cov_25osudpoaz.s[88]++;delete matchContext.hashCache2; // diff is not trivial, find the LCS (Longest Common Subsequence)
  var trimmed1 = (cov_25osudpoaz.s[89]++, array1.slice(commonHead, len1 - commonTail));var trimmed2 = (cov_25osudpoaz.s[90]++, array2.slice(commonHead, len2 - commonTail));var seq = (cov_25osudpoaz.s[91]++, lcs.get(trimmed1, trimmed2, matchItems, matchContext));var removedItems = (cov_25osudpoaz.s[92]++, []);cov_25osudpoaz.s[93]++;result = (cov_25osudpoaz.b[32][0]++, result) || (cov_25osudpoaz.b[32][1]++, { _t: 'a' });cov_25osudpoaz.s[94]++;for (index = commonHead; index < len1 - commonTail; index++) {
    cov_25osudpoaz.s[95]++;if (arrayIndexOf(seq.indices1, index - commonHead) < 0) {
      cov_25osudpoaz.b[33][0]++;cov_25osudpoaz.s[96]++; // removed
      result['_' + index] = [array1[index], 0, 0];cov_25osudpoaz.s[97]++;removedItems.push(index);
    } else {
      cov_25osudpoaz.b[33][1]++;
    }
  }var detectMove = (cov_25osudpoaz.s[98]++, true);cov_25osudpoaz.s[99]++;if ((cov_25osudpoaz.b[35][0]++, context.options) && (cov_25osudpoaz.b[35][1]++, context.options.arrays) && (cov_25osudpoaz.b[35][2]++, context.options.arrays.detectMove === false)) {
    cov_25osudpoaz.b[34][0]++;cov_25osudpoaz.s[100]++;detectMove = false;
  } else {
    cov_25osudpoaz.b[34][1]++;
  }var includeValueOnMove = (cov_25osudpoaz.s[101]++, false);cov_25osudpoaz.s[102]++;if ((cov_25osudpoaz.b[37][0]++, context.options) && (cov_25osudpoaz.b[37][1]++, context.options.arrays) && (cov_25osudpoaz.b[37][2]++, context.options.arrays.includeValueOnMove)) {
    cov_25osudpoaz.b[36][0]++;cov_25osudpoaz.s[103]++;includeValueOnMove = true;
  } else {
    cov_25osudpoaz.b[36][1]++;
  }var removedItemsLength = (cov_25osudpoaz.s[104]++, removedItems.length);cov_25osudpoaz.s[105]++;for (index = commonHead; index < len2 - commonTail; index++) {
    var indexOnArray2 = (cov_25osudpoaz.s[106]++, arrayIndexOf(seq.indices2, index - commonHead));cov_25osudpoaz.s[107]++;if (indexOnArray2 < 0) {
      cov_25osudpoaz.b[38][0]++; // added, try to match with a removed item and register as position move
      var isMove = (cov_25osudpoaz.s[108]++, false);cov_25osudpoaz.s[109]++;if ((cov_25osudpoaz.b[40][0]++, detectMove) && (cov_25osudpoaz.b[40][1]++, removedItemsLength > 0)) {
        cov_25osudpoaz.b[39][0]++;cov_25osudpoaz.s[110]++;for (var removeItemIndex1 = 0; removeItemIndex1 < removedItemsLength; removeItemIndex1++) {
          cov_25osudpoaz.s[111]++;index1 = removedItems[removeItemIndex1];cov_25osudpoaz.s[112]++;if (matchItems(trimmed1, trimmed2, index1 - commonHead, index - commonHead, matchContext)) {
            cov_25osudpoaz.b[41][0]++;cov_25osudpoaz.s[113]++; // store position move as: [originalValue, newPosition, ARRAY_MOVE]
            result['_' + index1].splice(1, 2, index, ARRAY_MOVE);cov_25osudpoaz.s[114]++;if (!includeValueOnMove) {
              cov_25osudpoaz.b[42][0]++;cov_25osudpoaz.s[115]++; // don't include moved value on diff, to save bytes
              result['_' + index1][0] = '';
            } else {
              cov_25osudpoaz.b[42][1]++;
            }cov_25osudpoaz.s[116]++;index2 = index;cov_25osudpoaz.s[117]++;child = new DiffContext(context.left[index1], context.right[index2]);cov_25osudpoaz.s[118]++;context.push(child, index2);cov_25osudpoaz.s[119]++;removedItems.splice(removeItemIndex1, 1);cov_25osudpoaz.s[120]++;isMove = true;cov_25osudpoaz.s[121]++;break;
          } else {
            cov_25osudpoaz.b[41][1]++;
          }
        }
      } else {
        cov_25osudpoaz.b[39][1]++;
      }cov_25osudpoaz.s[122]++;if (!isMove) {
        cov_25osudpoaz.b[43][0]++;cov_25osudpoaz.s[123]++; // added
        result[index] = [array2[index]];
      } else {
        cov_25osudpoaz.b[43][1]++;
      }
    } else {
      cov_25osudpoaz.b[38][1]++;cov_25osudpoaz.s[124]++; // match, do inner diff
      index1 = seq.indices1[indexOnArray2] + commonHead;cov_25osudpoaz.s[125]++;index2 = seq.indices2[indexOnArray2] + commonHead;cov_25osudpoaz.s[126]++;child = new DiffContext(context.left[index1], context.right[index2]);cov_25osudpoaz.s[127]++;context.push(child, index2);
    }
  }cov_25osudpoaz.s[128]++;context.setResult(result).exit();
};cov_25osudpoaz.s[129]++;diffFilter$1.filterName = 'arrays';var compare = (cov_25osudpoaz.s[130]++, { numerically: function numerically(a, b) {
    cov_25osudpoaz.f[6]++;cov_25osudpoaz.s[131]++;return a - b;
  }, numericallyBy: function numericallyBy(name) {
    cov_25osudpoaz.f[7]++;cov_25osudpoaz.s[132]++;return function (a, b) {
      cov_25osudpoaz.f[8]++;cov_25osudpoaz.s[133]++;return a[name] - b[name];
    };
  } });cov_25osudpoaz.s[134]++;var patchFilter$2 = function nestedPatchFilter(context) {
  cov_25osudpoaz.f[9]++;cov_25osudpoaz.s[135]++;if (!context.nested) {
    cov_25osudpoaz.b[44][0]++;cov_25osudpoaz.s[136]++;return;
  } else {
    cov_25osudpoaz.b[44][1]++;
  }cov_25osudpoaz.s[137]++;if (context.delta._t !== 'a') {
    cov_25osudpoaz.b[45][0]++;cov_25osudpoaz.s[138]++;return;
  } else {
    cov_25osudpoaz.b[45][1]++;
  }var index = (cov_25osudpoaz.s[139]++, void 0);var index1 = (cov_25osudpoaz.s[140]++, void 0);var delta = (cov_25osudpoaz.s[141]++, context.delta);var array = (cov_25osudpoaz.s[142]++, context.left); // first, separate removals, insertions and modifications
  var toRemove = (cov_25osudpoaz.s[143]++, []);var toInsert = (cov_25osudpoaz.s[144]++, []);var toModify = (cov_25osudpoaz.s[145]++, []);cov_25osudpoaz.s[146]++;for (index in delta) {
    cov_25osudpoaz.s[147]++;if (index !== '_t') {
      cov_25osudpoaz.b[46][0]++;cov_25osudpoaz.s[148]++;if (index[0] === '_') {
        cov_25osudpoaz.b[47][0]++;cov_25osudpoaz.s[149]++; // removed item from original array
        if ((cov_25osudpoaz.b[49][0]++, delta[index][2] === 0) || (cov_25osudpoaz.b[49][1]++, delta[index][2] === ARRAY_MOVE)) {
          cov_25osudpoaz.b[48][0]++;cov_25osudpoaz.s[150]++;toRemove.push(parseInt(index.slice(1), 10));
        } else {
          cov_25osudpoaz.b[48][1]++;cov_25osudpoaz.s[151]++;throw new Error('only removal or move can be applied at original array indices,' + (' invalid diff type: ' + delta[index][2]));
        }
      } else {
        cov_25osudpoaz.b[47][1]++;cov_25osudpoaz.s[152]++;if (delta[index].length === 1) {
          cov_25osudpoaz.b[50][0]++;cov_25osudpoaz.s[153]++; // added item at new array
          toInsert.push({ index: parseInt(index, 10), value: delta[index][0] });
        } else {
          cov_25osudpoaz.b[50][1]++;cov_25osudpoaz.s[154]++; // modified item at new array
          toModify.push({ index: parseInt(index, 10), delta: delta[index] });
        }
      }
    } else {
      cov_25osudpoaz.b[46][1]++;
    }
  } // remove items, in reverse order to avoid sawing our own floor
  cov_25osudpoaz.s[155]++;toRemove = toRemove.sort(compare.numerically);cov_25osudpoaz.s[156]++;for (index = toRemove.length - 1; index >= 0; index--) {
    cov_25osudpoaz.s[157]++;index1 = toRemove[index];var indexDiff = (cov_25osudpoaz.s[158]++, delta['_' + index1]);var removedValue = (cov_25osudpoaz.s[159]++, array.splice(index1, 1)[0]);cov_25osudpoaz.s[160]++;if (indexDiff[2] === ARRAY_MOVE) {
      cov_25osudpoaz.b[51][0]++;cov_25osudpoaz.s[161]++; // reinsert later
      toInsert.push({ index: indexDiff[1], value: removedValue });
    } else {
      cov_25osudpoaz.b[51][1]++;
    }
  } // insert items, in reverse order to avoid moving our own floor
  cov_25osudpoaz.s[162]++;toInsert = toInsert.sort(compare.numericallyBy('index'));var toInsertLength = (cov_25osudpoaz.s[163]++, toInsert.length);cov_25osudpoaz.s[164]++;for (index = 0; index < toInsertLength; index++) {
    var insertion = (cov_25osudpoaz.s[165]++, toInsert[index]);cov_25osudpoaz.s[166]++;array.splice(insertion.index, 0, insertion.value);
  } // apply modifications
  var toModifyLength = (cov_25osudpoaz.s[167]++, toModify.length);var child = (cov_25osudpoaz.s[168]++, void 0);cov_25osudpoaz.s[169]++;if (toModifyLength > 0) {
    cov_25osudpoaz.b[52][0]++;cov_25osudpoaz.s[170]++;for (index = 0; index < toModifyLength; index++) {
      var modification = (cov_25osudpoaz.s[171]++, toModify[index]);cov_25osudpoaz.s[172]++;child = new PatchContext(context.left[modification.index], modification.delta);cov_25osudpoaz.s[173]++;context.push(child, modification.index);
    }
  } else {
    cov_25osudpoaz.b[52][1]++;
  }cov_25osudpoaz.s[174]++;if (!context.children) {
    cov_25osudpoaz.b[53][0]++;cov_25osudpoaz.s[175]++;context.setResult(context.left).exit();cov_25osudpoaz.s[176]++;return;
  } else {
    cov_25osudpoaz.b[53][1]++;
  }cov_25osudpoaz.s[177]++;context.exit();
};cov_25osudpoaz.s[178]++;patchFilter$2.filterName = 'arrays';cov_25osudpoaz.s[179]++;var collectChildrenPatchFilter$1 = function collectChildrenPatchFilter(context) {
  cov_25osudpoaz.f[10]++;cov_25osudpoaz.s[180]++;if ((cov_25osudpoaz.b[55][0]++, !context) || (cov_25osudpoaz.b[55][1]++, !context.children)) {
    cov_25osudpoaz.b[54][0]++;cov_25osudpoaz.s[181]++;return;
  } else {
    cov_25osudpoaz.b[54][1]++;
  }cov_25osudpoaz.s[182]++;if (context.delta._t !== 'a') {
    cov_25osudpoaz.b[56][0]++;cov_25osudpoaz.s[183]++;return;
  } else {
    cov_25osudpoaz.b[56][1]++;
  }var length = (cov_25osudpoaz.s[184]++, context.children.length);var child = (cov_25osudpoaz.s[185]++, void 0);cov_25osudpoaz.s[186]++;for (var index = 0; index < length; index++) {
    cov_25osudpoaz.s[187]++;child = context.children[index];cov_25osudpoaz.s[188]++;context.left[child.childName] = child.result;
  }cov_25osudpoaz.s[189]++;context.setResult(context.left).exit();
};cov_25osudpoaz.s[190]++;collectChildrenPatchFilter$1.filterName = 'arraysCollectChildren';cov_25osudpoaz.s[191]++;var reverseFilter$2 = function arraysReverseFilter(context) {
  cov_25osudpoaz.f[11]++;cov_25osudpoaz.s[192]++;if (!context.nested) {
    cov_25osudpoaz.b[57][0]++;cov_25osudpoaz.s[193]++;if (context.delta[2] === ARRAY_MOVE) {
      cov_25osudpoaz.b[58][0]++;cov_25osudpoaz.s[194]++;context.newName = '_' + context.delta[1];cov_25osudpoaz.s[195]++;context.setResult([context.delta[0], parseInt(context.childName.substr(1), 10), ARRAY_MOVE]).exit();
    } else {
      cov_25osudpoaz.b[58][1]++;
    }cov_25osudpoaz.s[196]++;return;
  } else {
    cov_25osudpoaz.b[57][1]++;
  }cov_25osudpoaz.s[197]++;if (context.delta._t !== 'a') {
    cov_25osudpoaz.b[59][0]++;cov_25osudpoaz.s[198]++;return;
  } else {
    cov_25osudpoaz.b[59][1]++;
  }var name = (cov_25osudpoaz.s[199]++, void 0);var child = (cov_25osudpoaz.s[200]++, void 0);cov_25osudpoaz.s[201]++;for (name in context.delta) {
    cov_25osudpoaz.s[202]++;if (name === '_t') {
      cov_25osudpoaz.b[60][0]++;cov_25osudpoaz.s[203]++;continue;
    } else {
      cov_25osudpoaz.b[60][1]++;
    }cov_25osudpoaz.s[204]++;child = new ReverseContext(context.delta[name]);cov_25osudpoaz.s[205]++;context.push(child, name);
  }cov_25osudpoaz.s[206]++;context.exit();
};cov_25osudpoaz.s[207]++;reverseFilter$2.filterName = 'arrays';cov_25osudpoaz.s[208]++;var reverseArrayDeltaIndex = function reverseArrayDeltaIndex(delta, index, itemDelta) {
  cov_25osudpoaz.f[12]++;cov_25osudpoaz.s[209]++;if ((cov_25osudpoaz.b[62][0]++, typeof index === 'string') && (cov_25osudpoaz.b[62][1]++, index[0] === '_')) {
    cov_25osudpoaz.b[61][0]++;cov_25osudpoaz.s[210]++;return parseInt(index.substr(1), 10);
  } else {
    cov_25osudpoaz.b[61][1]++;cov_25osudpoaz.s[211]++;if ((cov_25osudpoaz.b[64][0]++, isArray$2(itemDelta)) && (cov_25osudpoaz.b[64][1]++, itemDelta[2] === 0)) {
      cov_25osudpoaz.b[63][0]++;cov_25osudpoaz.s[212]++;return '_' + index;
    } else {
      cov_25osudpoaz.b[63][1]++;
    }
  }var reverseIndex = (cov_25osudpoaz.s[213]++, +index);cov_25osudpoaz.s[214]++;for (var deltaIndex in delta) {
    var deltaItem = (cov_25osudpoaz.s[215]++, delta[deltaIndex]);cov_25osudpoaz.s[216]++;if (isArray$2(deltaItem)) {
      cov_25osudpoaz.b[65][0]++;cov_25osudpoaz.s[217]++;if (deltaItem[2] === ARRAY_MOVE) {
        cov_25osudpoaz.b[66][0]++;var moveFromIndex = (cov_25osudpoaz.s[218]++, parseInt(deltaIndex.substr(1), 10));var moveToIndex = (cov_25osudpoaz.s[219]++, deltaItem[1]);cov_25osudpoaz.s[220]++;if (moveToIndex === +index) {
          cov_25osudpoaz.b[67][0]++;cov_25osudpoaz.s[221]++;return moveFromIndex;
        } else {
          cov_25osudpoaz.b[67][1]++;
        }cov_25osudpoaz.s[222]++;if ((cov_25osudpoaz.b[69][0]++, moveFromIndex <= reverseIndex) && (cov_25osudpoaz.b[69][1]++, moveToIndex > reverseIndex)) {
          cov_25osudpoaz.b[68][0]++;cov_25osudpoaz.s[223]++;reverseIndex++;
        } else {
          cov_25osudpoaz.b[68][1]++;cov_25osudpoaz.s[224]++;if ((cov_25osudpoaz.b[71][0]++, moveFromIndex >= reverseIndex) && (cov_25osudpoaz.b[71][1]++, moveToIndex < reverseIndex)) {
            cov_25osudpoaz.b[70][0]++;cov_25osudpoaz.s[225]++;reverseIndex--;
          } else {
            cov_25osudpoaz.b[70][1]++;
          }
        }
      } else {
        cov_25osudpoaz.b[66][1]++;cov_25osudpoaz.s[226]++;if (deltaItem[2] === 0) {
          cov_25osudpoaz.b[72][0]++;var deleteIndex = (cov_25osudpoaz.s[227]++, parseInt(deltaIndex.substr(1), 10));cov_25osudpoaz.s[228]++;if (deleteIndex <= reverseIndex) {
            cov_25osudpoaz.b[73][0]++;cov_25osudpoaz.s[229]++;reverseIndex++;
          } else {
            cov_25osudpoaz.b[73][1]++;
          }
        } else {
          cov_25osudpoaz.b[72][1]++;cov_25osudpoaz.s[230]++;if ((cov_25osudpoaz.b[75][0]++, deltaItem.length === 1) && (cov_25osudpoaz.b[75][1]++, deltaIndex <= reverseIndex)) {
            cov_25osudpoaz.b[74][0]++;cov_25osudpoaz.s[231]++;reverseIndex--;
          } else {
            cov_25osudpoaz.b[74][1]++;
          }
        }
      }
    } else {
      cov_25osudpoaz.b[65][1]++;
    }
  }cov_25osudpoaz.s[232]++;return reverseIndex;
};function collectChildrenReverseFilter$1(context) {
  cov_25osudpoaz.f[13]++;cov_25osudpoaz.s[233]++;if ((cov_25osudpoaz.b[77][0]++, !context) || (cov_25osudpoaz.b[77][1]++, !context.children)) {
    cov_25osudpoaz.b[76][0]++;cov_25osudpoaz.s[234]++;return;
  } else {
    cov_25osudpoaz.b[76][1]++;
  }cov_25osudpoaz.s[235]++;if (context.delta._t !== 'a') {
    cov_25osudpoaz.b[78][0]++;cov_25osudpoaz.s[236]++;return;
  } else {
    cov_25osudpoaz.b[78][1]++;
  }var length = (cov_25osudpoaz.s[237]++, context.children.length);var child = (cov_25osudpoaz.s[238]++, void 0);var delta = (cov_25osudpoaz.s[239]++, { _t: 'a' });cov_25osudpoaz.s[240]++;for (var index = 0; index < length; index++) {
    cov_25osudpoaz.s[241]++;child = context.children[index];var name = (cov_25osudpoaz.s[242]++, child.newName);cov_25osudpoaz.s[243]++;if (typeof name === 'undefined') {
      cov_25osudpoaz.b[79][0]++;cov_25osudpoaz.s[244]++;name = reverseArrayDeltaIndex(context.delta, child.childName, child.result);
    } else {
      cov_25osudpoaz.b[79][1]++;
    }cov_25osudpoaz.s[245]++;if (delta[name] !== child.result) {
      cov_25osudpoaz.b[80][0]++;cov_25osudpoaz.s[246]++;delta[name] = child.result;
    } else {
      cov_25osudpoaz.b[80][1]++;
    }
  }cov_25osudpoaz.s[247]++;context.setResult(delta).exit();
}cov_25osudpoaz.s[248]++;collectChildrenReverseFilter$1.filterName = 'arraysCollectChildren';

var cov_5rs5vc4el = function () {
  var path = 'Y:\\repos\\jsondiffpatch\\src\\filters\\dates.js',
      hash = '78ea82e5d2b79f3fcf99331b13e5af8f320b2da9',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: 'Y:\\repos\\jsondiffpatch\\src\\filters\\dates.js', statementMap: { '0': { start: { line: 1, column: 24 }, end: { line: 16, column: 1 } }, '1': { start: { line: 2, column: 2 }, end: { line: 15, column: 3 } }, '2': { start: { line: 3, column: 4 }, end: { line: 11, column: 5 } }, '3': { start: { line: 4, column: 6 }, end: { line: 8, column: 7 } }, '4': { start: { line: 5, column: 8 }, end: { line: 5, column: 57 } }, '5': { start: { line: 7, column: 8 }, end: { line: 7, column: 37 } }, '6': { start: { line: 10, column: 6 }, end: { line: 10, column: 55 } }, '7': { start: { line: 12, column: 4 }, end: { line: 12, column: 19 } }, '8': { start: { line: 13, column: 9 }, end: { line: 15, column: 3 } }, '9': { start: { line: 14, column: 4 }, end: { line: 14, column: 60 } }, '10': { start: { line: 17, column: 0 }, end: { line: 17, column: 32 } } }, fnMap: { '0': { name: 'datesDiffFilter', decl: { start: { line: 1, column: 33 }, end: { line: 1, column: 48 } }, loc: { start: { line: 1, column: 58 }, end: { line: 16, column: 1 } }, line: 1 } }, branchMap: { '0': { loc: { start: { line: 2, column: 2 }, end: { line: 15, column: 3 } }, type: 'if', locations: [{ start: { line: 2, column: 2 }, end: { line: 15, column: 3 } }, { start: { line: 2, column: 2 }, end: { line: 15, column: 3 } }], line: 2 }, '1': { loc: { start: { line: 3, column: 4 }, end: { line: 11, column: 5 } }, type: 'if', locations: [{ start: { line: 3, column: 4 }, end: { line: 11, column: 5 } }, { start: { line: 3, column: 4 }, end: { line: 11, column: 5 } }], line: 3 }, '2': { loc: { start: { line: 4, column: 6 }, end: { line: 8, column: 7 } }, type: 'if', locations: [{ start: { line: 4, column: 6 }, end: { line: 8, column: 7 } }, { start: { line: 4, column: 6 }, end: { line: 8, column: 7 } }], line: 4 }, '3': { loc: { start: { line: 13, column: 9 }, end: { line: 15, column: 3 } }, type: 'if', locations: [{ start: { line: 13, column: 9 }, end: { line: 15, column: 3 } }, { start: { line: 13, column: 9 }, end: { line: 15, column: 3 } }], line: 13 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0 }, f: { '0': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();cov_5rs5vc4el.s[0]++;var diffFilter$2 = function datesDiffFilter(context) {
  cov_5rs5vc4el.f[0]++;cov_5rs5vc4el.s[1]++;if (context.left instanceof Date) {
    cov_5rs5vc4el.b[0][0]++;cov_5rs5vc4el.s[2]++;if (context.right instanceof Date) {
      cov_5rs5vc4el.b[1][0]++;cov_5rs5vc4el.s[3]++;if (context.left.getTime() !== context.right.getTime()) {
        cov_5rs5vc4el.b[2][0]++;cov_5rs5vc4el.s[4]++;context.setResult([context.left, context.right]);
      } else {
        cov_5rs5vc4el.b[2][1]++;cov_5rs5vc4el.s[5]++;context.setResult(undefined);
      }
    } else {
      cov_5rs5vc4el.b[1][1]++;cov_5rs5vc4el.s[6]++;context.setResult([context.left, context.right]);
    }cov_5rs5vc4el.s[7]++;context.exit();
  } else {
    cov_5rs5vc4el.b[0][1]++;cov_5rs5vc4el.s[8]++;if (context.right instanceof Date) {
      cov_5rs5vc4el.b[3][0]++;cov_5rs5vc4el.s[9]++;context.setResult([context.left, context.right]).exit();
    } else {
      cov_5rs5vc4el.b[3][1]++;
    }
  }
};cov_5rs5vc4el.s[10]++;diffFilter$2.filterName = 'dates';

var cov_1tiv9m9lld = function () {
  var path = 'Y:\\repos\\jsondiffpatch\\src\\filters\\texts.js',
      hash = '4bbfcf6ad696b16f9671eb2f3f3fd7587c8ab58a',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: 'Y:\\repos\\jsondiffpatch\\src\\filters\\texts.js', statementMap: { '0': { start: { line: 4, column: 16 }, end: { line: 4, column: 17 } }, '1': { start: { line: 5, column: 25 }, end: { line: 5, column: 27 } }, '2': { start: { line: 6, column: 22 }, end: { line: 6, column: 26 } }, '3': { start: { line: 8, column: 24 }, end: { line: 51, column: 1 } }, '4': { start: { line: 11, column: 2 }, end: { line: 49, column: 3 } }, '5': { start: { line: 12, column: 19 }, end: { line: 12, column: 25 } }, '6': { start: { line: 14, column: 4 }, end: { line: 23, column: 5 } }, '7': { start: { line: 16, column: 6 }, end: { line: 16, column: 123 } }, '8': { start: { line: 17, column: 11 }, end: { line: 23, column: 5 } }, '9': { start: { line: 18, column: 6 }, end: { line: 22, column: 7 } }, '10': { start: { line: 19, column: 8 }, end: { line: 19, column: 36 } }, '11': { start: { line: 21, column: 8 }, end: { line: 21, column: 24 } }, '12': { start: { line: 25, column: 4 }, end: { line: 33, column: 5 } }, '13': { start: { line: 26, column: 6 }, end: { line: 28, column: 7 } }, '14': { start: { line: 27, column: 8 }, end: { line: 27, column: 20 } }, '15': { start: { line: 29, column: 18 }, end: { line: 29, column: 70 } }, '16': { start: { line: 31, column: 6 }, end: { line: 31, column: 46 } }, '17': { start: { line: 32, column: 6 }, end: { line: 32, column: 18 } }, '18': { start: { line: 34, column: 4 }, end: { line: 48, column: 6 } }, '19': { start: { line: 36, column: 8 }, end: { line: 36, column: 70 } }, '20': { start: { line: 39, column: 22 }, end: { line: 39, column: 81 } }, '21': { start: { line: 40, column: 8 }, end: { line: 45, column: 9 } }, '22': { start: { line: 41, column: 10 }, end: { line: 44, column: 11 } }, '23': { start: { line: 42, column: 25 }, end: { line: 42, column: 55 } }, '24': { start: { line: 43, column: 12 }, end: { line: 43, column: 42 } }, '25': { start: { line: 46, column: 8 }, end: { line: 46, column: 26 } }, '26': { start: { line: 50, column: 2 }, end: { line: 50, column: 25 } }, '27': { start: { line: 53, column: 24 }, end: { line: 72, column: 1 } }, '28': { start: { line: 54, column: 2 }, end: { line: 56, column: 3 } }, '29': { start: { line: 55, column: 4 }, end: { line: 55, column: 11 } }, '30': { start: { line: 57, column: 18 }, end: { line: 57, column: 121 } }, '31': { start: { line: 58, column: 2 }, end: { line: 61, column: 3 } }, '32': { start: { line: 59, column: 4 }, end: { line: 59, column: 60 } }, '33': { start: { line: 60, column: 4 }, end: { line: 60, column: 11 } }, '34': { start: { line: 63, column: 23 }, end: { line: 63, column: 42 } }, '35': { start: { line: 64, column: 2 }, end: { line: 69, column: 3 } }, '36': { start: { line: 67, column: 4 }, end: { line: 67, column: 60 } }, '37': { start: { line: 68, column: 4 }, end: { line: 68, column: 11 } }, '38': { start: { line: 70, column: 13 }, end: { line: 70, column: 32 } }, '39': { start: { line: 71, column: 2 }, end: { line: 71, column: 78 } }, '40': { start: { line: 73, column: 0 }, end: { line: 73, column: 32 } }, '41': { start: { line: 75, column: 25 }, end: { line: 86, column: 1 } }, '42': { start: { line: 76, column: 2 }, end: { line: 78, column: 3 } }, '43': { start: { line: 77, column: 4 }, end: { line: 77, column: 11 } }, '44': { start: { line: 79, column: 2 }, end: { line: 81, column: 3 } }, '45': { start: { line: 80, column: 4 }, end: { line: 80, column: 11 } }, '46': { start: { line: 84, column: 14 }, end: { line: 84, column: 43 } }, '47': { start: { line: 85, column: 2 }, end: { line: 85, column: 66 } }, '48': { start: { line: 87, column: 0 }, end: { line: 87, column: 33 } }, '49': { start: { line: 89, column: 23 }, end: { line: 121, column: 1 } }, '50': { start: { line: 90, column: 10 }, end: { line: 90, column: 16 } }, '51': { start: { line: 91, column: 10 }, end: { line: 91, column: 16 } }, '52': { start: { line: 92, column: 14 }, end: { line: 92, column: 20 } }, '53': { start: { line: 93, column: 13 }, end: { line: 93, column: 19 } }, '54': { start: { line: 94, column: 16 }, end: { line: 94, column: 22 } }, '55': { start: { line: 95, column: 15 }, end: { line: 95, column: 19 } }, '56': { start: { line: 96, column: 20 }, end: { line: 96, column: 59 } }, '57': { start: { line: 97, column: 19 }, end: { line: 97, column: 25 } }, '58': { start: { line: 98, column: 2 }, end: { line: 98, column: 28 } }, '59': { start: { line: 99, column: 2 }, end: { line: 119, column: 3 } }, '60': { start: { line: 100, column: 4 }, end: { line: 100, column: 20 } }, '61': { start: { line: 101, column: 20 }, end: { line: 101, column: 36 } }, '62': { start: { line: 102, column: 4 }, end: { line: 118, column: 5 } }, '63': { start: { line: 103, column: 6 }, end: { line: 103, column: 38 } }, '64': { start: { line: 104, column: 6 }, end: { line: 104, column: 21 } }, '65': { start: { line: 107, column: 6 }, end: { line: 107, column: 108 } }, '66': { start: { line: 108, column: 11 }, end: { line: 118, column: 5 } }, '67': { start: { line: 109, column: 6 }, end: { line: 109, column: 41 } }, '68': { start: { line: 110, column: 6 }, end: { line: 115, column: 7 } }, '69': { start: { line: 112, column: 8 }, end: { line: 112, column: 27 } }, '70': { start: { line: 113, column: 8 }, end: { line: 113, column: 32 } }, '71': { start: { line: 114, column: 8 }, end: { line: 114, column: 31 } }, '72': { start: { line: 116, column: 11 }, end: { line: 118, column: 5 } }, '73': { start: { line: 117, column: 6 }, end: { line: 117, column: 41 } }, '74': { start: { line: 120, column: 2 }, end: { line: 120, column: 26 } }, '75': { start: { line: 123, column: 27 }, end: { line: 133, column: 1 } }, '76': { start: { line: 124, column: 2 }, end: { line: 126, column: 3 } }, '77': { start: { line: 125, column: 4 }, end: { line: 125, column: 11 } }, '78': { start: { line: 127, column: 2 }, end: { line: 129, column: 3 } }, '79': { start: { line: 128, column: 4 }, end: { line: 128, column: 11 } }, '80': { start: { line: 132, column: 2 }, end: { line: 132, column: 79 } }, '81': { start: { line: 134, column: 0 }, end: { line: 134, column: 35 } } }, fnMap: { '0': { name: 'getDiffMatchPatch', decl: { start: { line: 8, column: 33 }, end: { line: 8, column: 50 } }, loc: { start: { line: 8, column: 61 }, end: { line: 51, column: 1 } }, line: 8 }, '1': { name: 'diff', decl: { start: { line: 35, column: 21 }, end: { line: 35, column: 25 } }, loc: { start: { line: 35, column: 38 }, end: { line: 37, column: 7 } }, line: 35 }, '2': { name: 'patch', decl: { start: { line: 38, column: 22 }, end: { line: 38, column: 27 } }, loc: { start: { line: 38, column: 42 }, end: { line: 47, column: 7 } }, line: 38 }, '3': { name: 'textsDiffFilter', decl: { start: { line: 53, column: 33 }, end: { line: 53, column: 48 } }, loc: { start: { line: 53, column: 58 }, end: { line: 72, column: 1 } }, line: 53 }, '4': { name: 'textsPatchFilter', decl: { start: { line: 75, column: 34 }, end: { line: 75, column: 50 } }, loc: { start: { line: 75, column: 60 }, end: { line: 86, column: 1 } }, line: 75 }, '5': { name: 'textDeltaReverse', decl: { start: { line: 89, column: 32 }, end: { line: 89, column: 48 } }, loc: { start: { line: 89, column: 56 }, end: { line: 121, column: 1 } }, line: 89 }, '6': { name: 'textsReverseFilter', decl: { start: { line: 123, column: 36 }, end: { line: 123, column: 54 } }, loc: { start: { line: 123, column: 64 }, end: { line: 133, column: 1 } }, line: 123 } }, branchMap: { '0': { loc: { start: { line: 11, column: 2 }, end: { line: 49, column: 3 } }, type: 'if', locations: [{ start: { line: 11, column: 2 }, end: { line: 49, column: 3 } }, { start: { line: 11, column: 2 }, end: { line: 49, column: 3 } }], line: 11 }, '1': { loc: { start: { line: 14, column: 4 }, end: { line: 23, column: 5 } }, type: 'if', locations: [{ start: { line: 14, column: 4 }, end: { line: 23, column: 5 } }, { start: { line: 14, column: 4 }, end: { line: 23, column: 5 } }], line: 14 }, '2': { loc: { start: { line: 16, column: 17 }, end: { line: 16, column: 122 } }, type: 'cond-expr', locations: [{ start: { line: 16, column: 58 }, end: { line: 16, column: 80 } }, { start: { line: 16, column: 83 }, end: { line: 16, column: 122 } }], line: 16 }, '3': { loc: { start: { line: 17, column: 11 }, end: { line: 23, column: 5 } }, type: 'if', locations: [{ start: { line: 17, column: 11 }, end: { line: 23, column: 5 } }, { start: { line: 17, column: 11 }, end: { line: 23, column: 5 } }], line: 17 }, '4': { loc: { start: { line: 19, column: 19 }, end: { line: 19, column: 35 } }, type: 'binary-expr', locations: [{ start: { line: 19, column: 19 }, end: { line: 19, column: 22 } }, { start: { line: 19, column: 26 }, end: { line: 19, column: 35 } }], line: 19 }, '5': { loc: { start: { line: 25, column: 4 }, end: { line: 33, column: 5 } }, type: 'if', locations: [{ start: { line: 25, column: 4 }, end: { line: 33, column: 5 } }, { start: { line: 25, column: 4 }, end: { line: 33, column: 5 } }], line: 25 }, '6': { loc: { start: { line: 26, column: 6 }, end: { line: 28, column: 7 } }, type: 'if', locations: [{ start: { line: 26, column: 6 }, end: { line: 28, column: 7 } }, { start: { line: 26, column: 6 }, end: { line: 28, column: 7 } }], line: 26 }, '7': { loc: { start: { line: 41, column: 10 }, end: { line: 44, column: 11 } }, type: 'if', locations: [{ start: { line: 41, column: 10 }, end: { line: 44, column: 11 } }, { start: { line: 41, column: 10 }, end: { line: 44, column: 11 } }], line: 41 }, '8': { loc: { start: { line: 54, column: 2 }, end: { line: 56, column: 3 } }, type: 'if', locations: [{ start: { line: 54, column: 2 }, end: { line: 56, column: 3 } }, { start: { line: 54, column: 2 }, end: { line: 56, column: 3 } }], line: 54 }, '9': { loc: { start: { line: 57, column: 18 }, end: { line: 57, column: 121 } }, type: 'binary-expr', locations: [{ start: { line: 57, column: 18 }, end: { line: 57, column: 33 } }, { start: { line: 57, column: 37 }, end: { line: 57, column: 61 } }, { start: { line: 57, column: 65 }, end: { line: 57, column: 99 } }, { start: { line: 57, column: 103 }, end: { line: 57, column: 121 } }], line: 57 }, '10': { loc: { start: { line: 58, column: 2 }, end: { line: 61, column: 3 } }, type: 'if', locations: [{ start: { line: 58, column: 2 }, end: { line: 61, column: 3 } }, { start: { line: 58, column: 2 }, end: { line: 61, column: 3 } }], line: 58 }, '11': { loc: { start: { line: 58, column: 6 }, end: { line: 58, column: 73 } }, type: 'binary-expr', locations: [{ start: { line: 58, column: 6 }, end: { line: 58, column: 37 } }, { start: { line: 58, column: 41 }, end: { line: 58, column: 73 } }], line: 58 }, '12': { loc: { start: { line: 64, column: 2 }, end: { line: 69, column: 3 } }, type: 'if', locations: [{ start: { line: 64, column: 2 }, end: { line: 69, column: 3 } }, { start: { line: 64, column: 2 }, end: { line: 69, column: 3 } }], line: 64 }, '13': { loc: { start: { line: 76, column: 2 }, end: { line: 78, column: 3 } }, type: 'if', locations: [{ start: { line: 76, column: 2 }, end: { line: 78, column: 3 } }, { start: { line: 76, column: 2 }, end: { line: 78, column: 3 } }], line: 76 }, '14': { loc: { start: { line: 79, column: 2 }, end: { line: 81, column: 3 } }, type: 'if', locations: [{ start: { line: 79, column: 2 }, end: { line: 81, column: 3 } }, { start: { line: 79, column: 2 }, end: { line: 81, column: 3 } }], line: 79 }, '15': { loc: { start: { line: 102, column: 4 }, end: { line: 118, column: 5 } }, type: 'if', locations: [{ start: { line: 102, column: 4 }, end: { line: 118, column: 5 } }, { start: { line: 102, column: 4 }, end: { line: 118, column: 5 } }], line: 102 }, '16': { loc: { start: { line: 108, column: 11 }, end: { line: 118, column: 5 } }, type: 'if', locations: [{ start: { line: 108, column: 11 }, end: { line: 118, column: 5 } }, { start: { line: 108, column: 11 }, end: { line: 118, column: 5 } }], line: 108 }, '17': { loc: { start: { line: 110, column: 6 }, end: { line: 115, column: 7 } }, type: 'if', locations: [{ start: { line: 110, column: 6 }, end: { line: 115, column: 7 } }, { start: { line: 110, column: 6 }, end: { line: 115, column: 7 } }], line: 110 }, '18': { loc: { start: { line: 116, column: 11 }, end: { line: 118, column: 5 } }, type: 'if', locations: [{ start: { line: 116, column: 11 }, end: { line: 118, column: 5 } }, { start: { line: 116, column: 11 }, end: { line: 118, column: 5 } }], line: 116 }, '19': { loc: { start: { line: 124, column: 2 }, end: { line: 126, column: 3 } }, type: 'if', locations: [{ start: { line: 124, column: 2 }, end: { line: 126, column: 3 } }, { start: { line: 124, column: 2 }, end: { line: 126, column: 3 } }], line: 124 }, '20': { loc: { start: { line: 127, column: 2 }, end: { line: 129, column: 3 } }, type: 'if', locations: [{ start: { line: 127, column: 2 }, end: { line: 129, column: 3 } }, { start: { line: 127, column: 2 }, end: { line: 129, column: 3 } }], line: 127 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, '73': 0, '74': 0, '75': 0, '76': 0, '77': 0, '78': 0, '79': 0, '80': 0, '81': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0], '8': [0, 0], '9': [0, 0, 0, 0], '10': [0, 0], '11': [0, 0], '12': [0, 0], '13': [0, 0], '14': [0, 0], '15': [0, 0], '16': [0, 0], '17': [0, 0], '18': [0, 0], '19': [0, 0], '20': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}(); /* global diff_match_patch */var TEXT_DIFF = (cov_1tiv9m9lld.s[0]++, 2);var DEFAULT_MIN_LENGTH = (cov_1tiv9m9lld.s[1]++, 60);var cachedDiffPatch = (cov_1tiv9m9lld.s[2]++, null);cov_1tiv9m9lld.s[3]++;var getDiffMatchPatch = function getDiffMatchPatch(required) {
  cov_1tiv9m9lld.f[0]++;cov_1tiv9m9lld.s[4]++; /* jshint camelcase: false */if (!cachedDiffPatch) {
    cov_1tiv9m9lld.b[0][0]++;var instance = (cov_1tiv9m9lld.s[5]++, void 0); /* eslint-disable camelcase, new-cap */cov_1tiv9m9lld.s[6]++;if (typeof diff_match_patch !== 'undefined') {
      cov_1tiv9m9lld.b[1][0]++;cov_1tiv9m9lld.s[7]++; // already loaded, probably a browser
      instance = typeof diff_match_patch === 'function' ? (cov_1tiv9m9lld.b[2][0]++, new diff_match_patch()) : (cov_1tiv9m9lld.b[2][1]++, new diff_match_patch.diff_match_patch());
    } else {
      cov_1tiv9m9lld.b[1][1]++;cov_1tiv9m9lld.s[8]++;if (dmp) {
        cov_1tiv9m9lld.b[3][0]++;cov_1tiv9m9lld.s[9]++;try {
          cov_1tiv9m9lld.s[10]++;instance = (cov_1tiv9m9lld.b[4][0]++, dmp) && (cov_1tiv9m9lld.b[4][1]++, new dmp());
        } catch (err) {
          cov_1tiv9m9lld.s[11]++;instance = null;
        }
      } else {
        cov_1tiv9m9lld.b[3][1]++;
      }
    } /* eslint-enable camelcase, new-cap */cov_1tiv9m9lld.s[12]++;if (!instance) {
      cov_1tiv9m9lld.b[5][0]++;cov_1tiv9m9lld.s[13]++;if (!required) {
        cov_1tiv9m9lld.b[6][0]++;cov_1tiv9m9lld.s[14]++;return null;
      } else {
        cov_1tiv9m9lld.b[6][1]++;
      }var error = (cov_1tiv9m9lld.s[15]++, new Error('text diff_match_patch library not found')); // eslint-disable-next-line camelcase
      cov_1tiv9m9lld.s[16]++;error.diff_match_patch_not_found = true;cov_1tiv9m9lld.s[17]++;throw error;
    } else {
      cov_1tiv9m9lld.b[5][1]++;
    }cov_1tiv9m9lld.s[18]++;cachedDiffPatch = { diff: function diff(txt1, txt2) {
        cov_1tiv9m9lld.f[1]++;cov_1tiv9m9lld.s[19]++;return instance.patch_toText(instance.patch_make(txt1, txt2));
      }, patch: function patch(txt1, _patch) {
        cov_1tiv9m9lld.f[2]++;var results = (cov_1tiv9m9lld.s[20]++, instance.patch_apply(instance.patch_fromText(_patch), txt1));cov_1tiv9m9lld.s[21]++;for (var i = 0; i < results[1].length; i++) {
          cov_1tiv9m9lld.s[22]++;if (!results[1][i]) {
            cov_1tiv9m9lld.b[7][0]++;var _error = (cov_1tiv9m9lld.s[23]++, new Error('text patch failed'));cov_1tiv9m9lld.s[24]++;_error.textPatchFailed = true;
          } else {
            cov_1tiv9m9lld.b[7][1]++;
          }
        }cov_1tiv9m9lld.s[25]++;return results[0];
      } };
  } else {
    cov_1tiv9m9lld.b[0][1]++;
  }cov_1tiv9m9lld.s[26]++;return cachedDiffPatch;
};cov_1tiv9m9lld.s[27]++;var diffFilter$3 = function textsDiffFilter(context) {
  cov_1tiv9m9lld.f[3]++;cov_1tiv9m9lld.s[28]++;if (context.leftType !== 'string') {
    cov_1tiv9m9lld.b[8][0]++;cov_1tiv9m9lld.s[29]++;return;
  } else {
    cov_1tiv9m9lld.b[8][1]++;
  }var minLength = (cov_1tiv9m9lld.s[30]++, (cov_1tiv9m9lld.b[9][0]++, context.options) && (cov_1tiv9m9lld.b[9][1]++, context.options.textDiff) && (cov_1tiv9m9lld.b[9][2]++, context.options.textDiff.minLength) || (cov_1tiv9m9lld.b[9][3]++, DEFAULT_MIN_LENGTH));cov_1tiv9m9lld.s[31]++;if ((cov_1tiv9m9lld.b[11][0]++, context.left.length < minLength) || (cov_1tiv9m9lld.b[11][1]++, context.right.length < minLength)) {
    cov_1tiv9m9lld.b[10][0]++;cov_1tiv9m9lld.s[32]++;context.setResult([context.left, context.right]).exit();cov_1tiv9m9lld.s[33]++;return;
  } else {
    cov_1tiv9m9lld.b[10][1]++;
  } // large text, try to use a text-diff algorithm
  var diffMatchPatch = (cov_1tiv9m9lld.s[34]++, getDiffMatchPatch());cov_1tiv9m9lld.s[35]++;if (!diffMatchPatch) {
    cov_1tiv9m9lld.b[12][0]++;cov_1tiv9m9lld.s[36]++; // diff-match-patch library not available,
    // fallback to regular string replace
    context.setResult([context.left, context.right]).exit();cov_1tiv9m9lld.s[37]++;return;
  } else {
    cov_1tiv9m9lld.b[12][1]++;
  }var diff = (cov_1tiv9m9lld.s[38]++, diffMatchPatch.diff);cov_1tiv9m9lld.s[39]++;context.setResult([diff(context.left, context.right), 0, TEXT_DIFF]).exit();
};cov_1tiv9m9lld.s[40]++;diffFilter$3.filterName = 'texts';cov_1tiv9m9lld.s[41]++;var patchFilter$3 = function textsPatchFilter(context) {
  cov_1tiv9m9lld.f[4]++;cov_1tiv9m9lld.s[42]++;if (context.nested) {
    cov_1tiv9m9lld.b[13][0]++;cov_1tiv9m9lld.s[43]++;return;
  } else {
    cov_1tiv9m9lld.b[13][1]++;
  }cov_1tiv9m9lld.s[44]++;if (context.delta[2] !== TEXT_DIFF) {
    cov_1tiv9m9lld.b[14][0]++;cov_1tiv9m9lld.s[45]++;return;
  } else {
    cov_1tiv9m9lld.b[14][1]++;
  } // text-diff, use a text-patch algorithm
  var patch = (cov_1tiv9m9lld.s[46]++, getDiffMatchPatch(true).patch);cov_1tiv9m9lld.s[47]++;context.setResult(patch(context.left, context.delta[0])).exit();
};cov_1tiv9m9lld.s[48]++;patchFilter$3.filterName = 'texts';cov_1tiv9m9lld.s[49]++;var textDeltaReverse = function textDeltaReverse(delta) {
  cov_1tiv9m9lld.f[5]++;var i = (cov_1tiv9m9lld.s[50]++, void 0);var l = (cov_1tiv9m9lld.s[51]++, void 0);var lines = (cov_1tiv9m9lld.s[52]++, void 0);var line = (cov_1tiv9m9lld.s[53]++, void 0);var lineTmp = (cov_1tiv9m9lld.s[54]++, void 0);var header = (cov_1tiv9m9lld.s[55]++, null);var headerRegex = (cov_1tiv9m9lld.s[56]++, /^@@ +-(\d+),(\d+) +\+(\d+),(\d+) +@@$/);var lineHeader = (cov_1tiv9m9lld.s[57]++, void 0);cov_1tiv9m9lld.s[58]++;lines = delta.split('\n');cov_1tiv9m9lld.s[59]++;for (i = 0, l = lines.length; i < l; i++) {
    cov_1tiv9m9lld.s[60]++;line = lines[i];var lineStart = (cov_1tiv9m9lld.s[61]++, line.slice(0, 1));cov_1tiv9m9lld.s[62]++;if (lineStart === '@') {
      cov_1tiv9m9lld.b[15][0]++;cov_1tiv9m9lld.s[63]++;header = headerRegex.exec(line);cov_1tiv9m9lld.s[64]++;lineHeader = i; // fix header
      cov_1tiv9m9lld.s[65]++;lines[lineHeader] = '@@ -' + header[3] + ',' + header[4] + ' +' + header[1] + ',' + header[2] + ' @@';
    } else {
      cov_1tiv9m9lld.b[15][1]++;cov_1tiv9m9lld.s[66]++;if (lineStart === '+') {
        cov_1tiv9m9lld.b[16][0]++;cov_1tiv9m9lld.s[67]++;lines[i] = '-' + lines[i].slice(1);cov_1tiv9m9lld.s[68]++;if (lines[i - 1].slice(0, 1) === '+') {
          cov_1tiv9m9lld.b[17][0]++;cov_1tiv9m9lld.s[69]++; // swap lines to keep default order (-+)
          lineTmp = lines[i];cov_1tiv9m9lld.s[70]++;lines[i] = lines[i - 1];cov_1tiv9m9lld.s[71]++;lines[i - 1] = lineTmp;
        } else {
          cov_1tiv9m9lld.b[17][1]++;
        }
      } else {
        cov_1tiv9m9lld.b[16][1]++;cov_1tiv9m9lld.s[72]++;if (lineStart === '-') {
          cov_1tiv9m9lld.b[18][0]++;cov_1tiv9m9lld.s[73]++;lines[i] = '+' + lines[i].slice(1);
        } else {
          cov_1tiv9m9lld.b[18][1]++;
        }
      }
    }
  }cov_1tiv9m9lld.s[74]++;return lines.join('\n');
};cov_1tiv9m9lld.s[75]++;var reverseFilter$3 = function textsReverseFilter(context) {
  cov_1tiv9m9lld.f[6]++;cov_1tiv9m9lld.s[76]++;if (context.nested) {
    cov_1tiv9m9lld.b[19][0]++;cov_1tiv9m9lld.s[77]++;return;
  } else {
    cov_1tiv9m9lld.b[19][1]++;
  }cov_1tiv9m9lld.s[78]++;if (context.delta[2] !== TEXT_DIFF) {
    cov_1tiv9m9lld.b[20][0]++;cov_1tiv9m9lld.s[79]++;return;
  } else {
    cov_1tiv9m9lld.b[20][1]++;
  } // text-diff, use a text-diff algorithm
  cov_1tiv9m9lld.s[80]++;context.setResult([textDeltaReverse(context.delta[0]), 0, TEXT_DIFF]).exit();
};cov_1tiv9m9lld.s[81]++;reverseFilter$3.filterName = 'texts';

var cov_2ozukifbtm = function () {
  var path = 'Y:\\repos\\jsondiffpatch\\src\\diffpatcher.js',
      hash = '6279f051f9b9aff95dc01e1ee49b838c8b9beb7b',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: 'Y:\\repos\\jsondiffpatch\\src\\diffpatcher.js', statementMap: { '0': { start: { line: 14, column: 18 }, end: { line: 58, column: 3 } }, '1': { start: { line: 16, column: 4 }, end: { line: 16, column: 51 } }, '2': { start: { line: 18, column: 4 }, end: { line: 18, column: 44 } }, '3': { start: { line: 19, column: 4 }, end: { line: 19, column: 203 } }, '4': { start: { line: 20, column: 4 }, end: { line: 20, column: 219 } }, '5': { start: { line: 21, column: 4 }, end: { line: 21, column: 233 } }, '6': { start: { line: 24, column: 2 }, end: { line: 56, column: 6 } }, '7': { start: { line: 29, column: 6 }, end: { line: 29, column: 80 } }, '8': { start: { line: 34, column: 6 }, end: { line: 34, column: 66 } }, '9': { start: { line: 39, column: 6 }, end: { line: 39, column: 67 } }, '10': { start: { line: 44, column: 6 }, end: { line: 44, column: 63 } }, '11': { start: { line: 49, column: 6 }, end: { line: 49, column: 52 } }, '12': { start: { line: 54, column: 6 }, end: { line: 54, column: 27 } }, '13': { start: { line: 57, column: 2 }, end: { line: 57, column: 21 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 14, column: 18 }, end: { line: 14, column: 19 } }, loc: { start: { line: 14, column: 30 }, end: { line: 58, column: 1 } }, line: 14 }, '1': { name: 'DiffPatcher', decl: { start: { line: 15, column: 11 }, end: { line: 15, column: 22 } }, loc: { start: { line: 15, column: 32 }, end: { line: 22, column: 3 } }, line: 15 }, '2': { name: 'options', decl: { start: { line: 26, column: 20 }, end: { line: 26, column: 27 } }, loc: { start: { line: 26, column: 30 }, end: { line: 30, column: 5 } }, line: 26 }, '3': { name: 'diff', decl: { start: { line: 33, column: 20 }, end: { line: 33, column: 24 } }, loc: { start: { line: 33, column: 38 }, end: { line: 35, column: 5 } }, line: 33 }, '4': { name: 'patch', decl: { start: { line: 38, column: 20 }, end: { line: 38, column: 25 } }, loc: { start: { line: 38, column: 39 }, end: { line: 40, column: 5 } }, line: 38 }, '5': { name: 'reverse', decl: { start: { line: 43, column: 20 }, end: { line: 43, column: 27 } }, loc: { start: { line: 43, column: 35 }, end: { line: 45, column: 5 } }, line: 43 }, '6': { name: 'unpatch', decl: { start: { line: 48, column: 20 }, end: { line: 48, column: 27 } }, loc: { start: { line: 48, column: 42 }, end: { line: 50, column: 5 } }, line: 48 }, '7': { name: 'clone', decl: { start: { line: 53, column: 20 }, end: { line: 53, column: 25 } }, loc: { start: { line: 53, column: 33 }, end: { line: 55, column: 5 } }, line: 53 } }, branchMap: {}, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0 }, b: {}, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var DiffPatcher = (cov_2ozukifbtm.s[0]++, function () {
  cov_2ozukifbtm.f[0]++;function DiffPatcher(options) {
    cov_2ozukifbtm.f[1]++;cov_2ozukifbtm.s[1]++;classCallCheck$1(this, DiffPatcher);cov_2ozukifbtm.s[2]++;this.processor = new Processor(options);cov_2ozukifbtm.s[3]++;this.processor.pipe(new Pipe('diff').append(collectChildrenDiffFilter, diffFilter, diffFilter$2, diffFilter$3, objectsDiffFilter, diffFilter$1).shouldHaveResult());cov_2ozukifbtm.s[4]++;this.processor.pipe(new Pipe('patch').append(collectChildrenPatchFilter, collectChildrenPatchFilter$1, patchFilter, patchFilter$3, patchFilter$1, patchFilter$2).shouldHaveResult());cov_2ozukifbtm.s[5]++;this.processor.pipe(new Pipe('reverse').append(collectChildrenReverseFilter, collectChildrenReverseFilter$1, reverseFilter, reverseFilter$3, reverseFilter$1, reverseFilter$2).shouldHaveResult());
  }cov_2ozukifbtm.s[6]++;createClass$1(DiffPatcher, [{ key: 'options', value: function options() {
      cov_2ozukifbtm.f[2]++;var _processor;cov_2ozukifbtm.s[7]++;return (_processor = this.processor).options.apply(_processor, arguments);
    } }, { key: 'diff', value: function diff(left, right) {
      cov_2ozukifbtm.f[3]++;cov_2ozukifbtm.s[8]++;return this.processor.process(new DiffContext(left, right));
    } }, { key: 'patch', value: function patch(left, delta) {
      cov_2ozukifbtm.f[4]++;cov_2ozukifbtm.s[9]++;return this.processor.process(new PatchContext(left, delta));
    } }, { key: 'reverse', value: function reverse(delta) {
      cov_2ozukifbtm.f[5]++;cov_2ozukifbtm.s[10]++;return this.processor.process(new ReverseContext(delta));
    } }, { key: 'unpatch', value: function unpatch(right, delta) {
      cov_2ozukifbtm.f[6]++;cov_2ozukifbtm.s[11]++;return this.patch(right, this.reverse(delta));
    } }, { key: 'clone', value: function clone$$1(value) {
      cov_2ozukifbtm.f[7]++;cov_2ozukifbtm.s[12]++;return clone(value);
    } }]);cov_2ozukifbtm.s[13]++;return DiffPatcher;
}());

var cov_25cqm5nxce = function () {
  var path = 'Y:\\repos\\jsondiffpatch\\src\\formatters\\base.js',
      hash = 'de6f5362d6d850f65b06155c038b866b1e925bbe',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: 'Y:\\repos\\jsondiffpatch\\src\\formatters\\base.js', statementMap: { '0': { start: { line: 1, column: 14 }, end: { line: 3, column: 1 } }, '1': { start: { line: 2, column: 2 }, end: { line: 2, column: 28 } }, '2': { start: { line: 5, column: 20 }, end: { line: 15, column: 1 } }, '3': { start: { line: 6, column: 2 }, end: { line: 6, column: 26 } }, '4': { start: { line: 8, column: 14 }, end: { line: 8, column: 16 } }, '5': { start: { line: 9, column: 2 }, end: { line: 13, column: 3 } }, '6': { start: { line: 10, column: 4 }, end: { line: 12, column: 5 } }, '7': { start: { line: 11, column: 6 }, end: { line: 11, column: 27 } }, '8': { start: { line: 14, column: 2 }, end: { line: 14, column: 15 } }, '9': { start: { line: 17, column: 21 }, end: { line: 22, column: 1 } }, '10': { start: { line: 18, column: 2 }, end: { line: 20, column: 3 } }, '11': { start: { line: 19, column: 4 }, end: { line: 19, column: 24 } }, '12': { start: { line: 21, column: 2 }, end: { line: 21, column: 13 } }, '13': { start: { line: 24, column: 27 }, end: { line: 34, column: 1 } }, '14': { start: { line: 25, column: 2 }, end: { line: 33, column: 3 } }, '15': { start: { line: 26, column: 4 }, end: { line: 26, column: 14 } }, '16': { start: { line: 28, column: 4 }, end: { line: 32, column: 5 } }, '17': { start: { line: 29, column: 6 }, end: { line: 29, column: 40 } }, '18': { start: { line: 31, column: 6 }, end: { line: 31, column: 37 } }, '19': { start: { line: 36, column: 23 }, end: { line: 38, column: 1 } }, '20': { start: { line: 37, column: 2 }, end: { line: 37, column: 65 } }, '21': { start: { line: 40, column: 20 }, end: { line: 242, column: 3 } }, '22': { start: { line: 42, column: 4 }, end: { line: 42, column: 53 } }, '23': { start: { line: 45, column: 2 }, end: { line: 240, column: 6 } }, '24': { start: { line: 48, column: 20 }, end: { line: 48, column: 22 } }, '25': { start: { line: 49, column: 6 }, end: { line: 49, column: 35 } }, '26': { start: { line: 50, column: 6 }, end: { line: 50, column: 41 } }, '27': { start: { line: 51, column: 6 }, end: { line: 51, column: 36 } }, '28': { start: { line: 56, column: 6 }, end: { line: 56, column: 26 } }, '29': { start: { line: 57, column: 6 }, end: { line: 61, column: 8 } }, '30': { start: { line: 60, column: 8 }, end: { line: 60, column: 63 } }, '31': { start: { line: 66, column: 6 }, end: { line: 66, column: 64 } }, '32': { start: { line: 71, column: 6 }, end: { line: 71, column: 28 } }, '33': { start: { line: 76, column: 19 }, end: { line: 76, column: 30 } }, '34': { start: { line: 78, column: 6 }, end: { line: 80, column: 7 } }, '35': { start: { line: 79, column: 8 }, end: { line: 79, column: 31 } }, '36': { start: { line: 85, column: 30 }, end: { line: 85, column: 48 } }, '37': { start: { line: 86, column: 22 }, end: { line: 86, column: 64 } }, '38': { start: { line: 88, column: 6 }, end: { line: 90, column: 7 } }, '39': { start: { line: 89, column: 8 }, end: { line: 89, column: 25 } }, '40': { start: { line: 92, column: 17 }, end: { line: 92, column: 52 } }, '41': { start: { line: 93, column: 21 }, end: { line: 93, column: 81 } }, '42': { start: { line: 95, column: 6 }, end: { line: 99, column: 7 } }, '43': { start: { line: 96, column: 8 }, end: { line: 96, column: 70 } }, '44': { start: { line: 98, column: 8 }, end: { line: 98, column: 48 } }, '45': { start: { line: 101, column: 27 }, end: { line: 101, column: 33 } }, '46': { start: { line: 102, column: 6 }, end: { line: 110, column: 7 } }, '47': { start: { line: 103, column: 8 }, end: { line: 103, column: 94 } }, '48': { start: { line: 104, column: 8 }, end: { line: 104, column: 86 } }, '49': { start: { line: 106, column: 8 }, end: { line: 106, column: 99 } }, '50': { start: { line: 107, column: 8 }, end: { line: 109, column: 9 } }, '51': { start: { line: 108, column: 10 }, end: { line: 108, column: 35 } }, '52': { start: { line: 112, column: 6 }, end: { line: 116, column: 7 } }, '53': { start: { line: 113, column: 8 }, end: { line: 113, column: 68 } }, '54': { start: { line: 115, column: 8 }, end: { line: 115, column: 46 } }, '55': { start: { line: 121, column: 17 }, end: { line: 121, column: 21 } }, '56': { start: { line: 122, column: 6 }, end: { line: 124, column: 9 } }, '57': { start: { line: 123, column: 8 }, end: { line: 123, column: 109 } }, '58': { start: { line: 129, column: 17 }, end: { line: 129, column: 37 } }, '59': { start: { line: 130, column: 22 }, end: { line: 130, column: 38 } }, '60': { start: { line: 131, column: 29 }, end: { line: 131, column: 31 } }, '61': { start: { line: 132, column: 17 }, end: { line: 132, column: 23 } }, '62': { start: { line: 133, column: 6 }, end: { line: 141, column: 7 } }, '63': { start: { line: 134, column: 8 }, end: { line: 140, column: 9 } }, '64': { start: { line: 135, column: 10 }, end: { line: 139, column: 11 } }, '65': { start: { line: 136, column: 12 }, end: { line: 138, column: 13 } }, '66': { start: { line: 137, column: 14 }, end: { line: 137, column: 30 } }, '67': { start: { line: 143, column: 6 }, end: { line: 158, column: 7 } }, '68': { start: { line: 144, column: 8 }, end: { line: 157, column: 9 } }, '69': { start: { line: 145, column: 22 }, end: { line: 145, column: 33 } }, '70': { start: { line: 146, column: 10 }, end: { line: 156, column: 11 } }, '71': { start: { line: 147, column: 12 }, end: { line: 150, column: 14 } }, '72': { start: { line: 151, column: 12 }, end: { line: 155, column: 13 } }, '73': { start: { line: 152, column: 14 }, end: { line: 154, column: 15 } }, '74': { start: { line: 153, column: 16 }, end: { line: 153, column: 47 } }, '75': { start: { line: 159, column: 6 }, end: { line: 163, column: 7 } }, '76': { start: { line: 160, column: 8 }, end: { line: 160, column: 36 } }, '77': { start: { line: 162, column: 8 }, end: { line: 162, column: 20 } }, '78': { start: { line: 164, column: 6 }, end: { line: 172, column: 7 } }, '79': { start: { line: 165, column: 18 }, end: { line: 165, column: 29 } }, '80': { start: { line: 166, column: 8 }, end: { line: 168, column: 9 } }, '81': { start: { line: 167, column: 10 }, end: { line: 167, column: 19 } }, '82': { start: { line: 169, column: 22 }, end: { line: 169, column: 105 } }, '83': { start: { line: 170, column: 21 }, end: { line: 170, column: 41 } }, '84': { start: { line: 171, column: 8 }, end: { line: 171, column: 60 } }, '85': { start: { line: 177, column: 6 }, end: { line: 182, column: 7 } }, '86': { start: { line: 178, column: 8 }, end: { line: 180, column: 9 } }, '87': { start: { line: 179, column: 10 }, end: { line: 179, column: 35 } }, '88': { start: { line: 181, column: 8 }, end: { line: 181, column: 27 } }, '89': { start: { line: 183, column: 6 }, end: { line: 201, column: 7 } }, '90': { start: { line: 184, column: 8 }, end: { line: 186, column: 9 } }, '91': { start: { line: 185, column: 10 }, end: { line: 185, column: 25 } }, '92': { start: { line: 187, column: 8 }, end: { line: 189, column: 9 } }, '93': { start: { line: 188, column: 10 }, end: { line: 188, column: 28 } }, '94': { start: { line: 190, column: 8 }, end: { line: 192, column: 9 } }, '95': { start: { line: 191, column: 10 }, end: { line: 191, column: 27 } }, '96': { start: { line: 193, column: 8 }, end: { line: 195, column: 9 } }, '97': { start: { line: 194, column: 10 }, end: { line: 194, column: 28 } }, '98': { start: { line: 196, column: 8 }, end: { line: 198, column: 9 } }, '99': { start: { line: 197, column: 10 }, end: { line: 197, column: 25 } }, '100': { start: { line: 199, column: 13 }, end: { line: 201, column: 7 } }, '101': { start: { line: 200, column: 8 }, end: { line: 200, column: 22 } }, '102': { start: { line: 202, column: 6 }, end: { line: 202, column: 23 } }, '103': { start: { line: 207, column: 19 }, end: { line: 207, column: 21 } }, '104': { start: { line: 208, column: 18 }, end: { line: 208, column: 38 } }, '105': { start: { line: 209, column: 6 }, end: { line: 237, column: 7 } }, '106': { start: { line: 210, column: 19 }, end: { line: 210, column: 27 } }, '107': { start: { line: 211, column: 25 }, end: { line: 213, column: 9 } }, '108': { start: { line: 214, column: 23 }, end: { line: 214, column: 70 } }, '109': { start: { line: 215, column: 8 }, end: { line: 218, column: 10 } }, '110': { start: { line: 219, column: 21 }, end: { line: 219, column: 46 } }, '111': { start: { line: 220, column: 8 }, end: { line: 235, column: 9 } }, '112': { start: { line: 221, column: 22 }, end: { line: 221, column: 40 } }, '113': { start: { line: 222, column: 10 }, end: { line: 224, column: 11 } }, '114': { start: { line: 223, column: 12 }, end: { line: 223, column: 21 } }, '115': { start: { line: 225, column: 28 }, end: { line: 227, column: 11 } }, '116': { start: { line: 228, column: 10 }, end: { line: 232, column: 11 } }, '117': { start: { line: 229, column: 12 }, end: { line: 229, column: 39 } }, '118': { start: { line: 230, column: 17 }, end: { line: 232, column: 11 } }, '119': { start: { line: 231, column: 12 }, end: { line: 231, column: 41 } }, '120': { start: { line: 233, column: 10 }, end: { line: 233, column: 44 } }, '121': { start: { line: 234, column: 10 }, end: { line: 234, column: 46 } }, '122': { start: { line: 236, column: 8 }, end: { line: 236, column: 32 } }, '123': { start: { line: 238, column: 6 }, end: { line: 238, column: 20 } }, '124': { start: { line: 241, column: 2 }, end: { line: 241, column: 23 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 1, column: 68 }, end: { line: 1, column: 69 } }, loc: { start: { line: 1, column: 81 }, end: { line: 3, column: 1 } }, line: 1 }, '1': { name: '(anonymous_1)', decl: { start: { line: 5, column: 56 }, end: { line: 5, column: 57 } }, loc: { start: { line: 5, column: 71 }, end: { line: 7, column: 1 } }, line: 5 }, '2': { name: '(anonymous_2)', decl: { start: { line: 7, column: 4 }, end: { line: 7, column: 5 } }, loc: { start: { line: 7, column: 19 }, end: { line: 15, column: 1 } }, line: 7 }, '3': { name: 'trimUnderscore', decl: { start: { line: 17, column: 30 }, end: { line: 17, column: 44 } }, loc: { start: { line: 17, column: 50 }, end: { line: 22, column: 1 } }, line: 17 }, '4': { name: 'arrayKeyToSortNumber', decl: { start: { line: 24, column: 36 }, end: { line: 24, column: 56 } }, loc: { start: { line: 24, column: 62 }, end: { line: 34, column: 1 } }, line: 24 }, '5': { name: 'arrayKeyComparer', decl: { start: { line: 36, column: 32 }, end: { line: 36, column: 48 } }, loc: { start: { line: 36, column: 61 }, end: { line: 38, column: 1 } }, line: 36 }, '6': { name: '(anonymous_6)', decl: { start: { line: 40, column: 20 }, end: { line: 40, column: 21 } }, loc: { start: { line: 40, column: 32 }, end: { line: 242, column: 1 } }, line: 40 }, '7': { name: 'BaseFormatter', decl: { start: { line: 41, column: 11 }, end: { line: 41, column: 24 } }, loc: { start: { line: 41, column: 27 }, end: { line: 43, column: 3 } }, line: 41 }, '8': { name: 'format', decl: { start: { line: 47, column: 20 }, end: { line: 47, column: 26 } }, loc: { start: { line: 47, column: 40 }, end: { line: 52, column: 5 } }, line: 47 }, '9': { name: 'prepareContext', decl: { start: { line: 55, column: 20 }, end: { line: 55, column: 34 } }, loc: { start: { line: 55, column: 44 }, end: { line: 62, column: 5 } }, line: 55 }, '10': { name: '(anonymous_10)', decl: { start: { line: 57, column: 20 }, end: { line: 57, column: 21 } }, loc: { start: { line: 57, column: 32 }, end: { line: 61, column: 7 } }, line: 57 }, '11': { name: 'typeFormattterNotFound', decl: { start: { line: 65, column: 20 }, end: { line: 65, column: 42 } }, loc: { start: { line: 65, column: 63 }, end: { line: 67, column: 5 } }, line: 65 }, '12': { name: 'typeFormattterErrorFormatter', decl: { start: { line: 70, column: 20 }, end: { line: 70, column: 48 } }, loc: { start: { line: 70, column: 63 }, end: { line: 72, column: 5 } }, line: 70 }, '13': { name: 'finalize', decl: { start: { line: 75, column: 20 }, end: { line: 75, column: 28 } }, loc: { start: { line: 75, column: 35 }, end: { line: 81, column: 5 } }, line: 75 }, '14': { name: 'recurse', decl: { start: { line: 84, column: 20 }, end: { line: 84, column: 27 } }, loc: { start: { line: 84, column: 83 }, end: { line: 117, column: 5 } }, line: 84 }, '15': { name: 'formatDeltaChildren', decl: { start: { line: 120, column: 20 }, end: { line: 120, column: 39 } }, loc: { start: { line: 120, column: 62 }, end: { line: 125, column: 5 } }, line: 120 }, '16': { name: '(anonymous_16)', decl: { start: { line: 122, column: 40 }, end: { line: 122, column: 41 } }, loc: { start: { line: 122, column: 83 }, end: { line: 124, column: 7 } }, line: 122 }, '17': { name: 'forEachDeltaKey', decl: { start: { line: 128, column: 20 }, end: { line: 128, column: 35 } }, loc: { start: { line: 128, column: 53 }, end: { line: 173, column: 5 } }, line: 128 }, '18': { name: 'getDeltaType', decl: { start: { line: 176, column: 20 }, end: { line: 176, column: 32 } }, loc: { start: { line: 176, column: 51 }, end: { line: 203, column: 5 } }, line: 176 }, '19': { name: 'parseTextDiff', decl: { start: { line: 206, column: 20 }, end: { line: 206, column: 33 } }, loc: { start: { line: 206, column: 41 }, end: { line: 239, column: 5 } }, line: 206 } }, branchMap: { '0': { loc: { start: { line: 1, column: 14 }, end: { line: 3, column: 1 } }, type: 'cond-expr', locations: [{ start: { line: 1, column: 52 }, end: { line: 1, column: 65 } }, { start: { line: 1, column: 68 }, end: { line: 3, column: 1 } }], line: 1 }, '1': { loc: { start: { line: 5, column: 20 }, end: { line: 15, column: 1 } }, type: 'cond-expr', locations: [{ start: { line: 5, column: 56 }, end: { line: 7, column: 1 } }, { start: { line: 7, column: 4 }, end: { line: 15, column: 1 } }], line: 5 }, '2': { loc: { start: { line: 10, column: 4 }, end: { line: 12, column: 5 } }, type: 'if', locations: [{ start: { line: 10, column: 4 }, end: { line: 12, column: 5 } }, { start: { line: 10, column: 4 }, end: { line: 12, column: 5 } }], line: 10 }, '3': { loc: { start: { line: 18, column: 2 }, end: { line: 20, column: 3 } }, type: 'if', locations: [{ start: { line: 18, column: 2 }, end: { line: 20, column: 3 } }, { start: { line: 18, column: 2 }, end: { line: 20, column: 3 } }], line: 18 }, '4': { loc: { start: { line: 25, column: 2 }, end: { line: 33, column: 3 } }, type: 'if', locations: [{ start: { line: 25, column: 2 }, end: { line: 33, column: 3 } }, { start: { line: 25, column: 2 }, end: { line: 33, column: 3 } }], line: 25 }, '5': { loc: { start: { line: 28, column: 4 }, end: { line: 32, column: 5 } }, type: 'if', locations: [{ start: { line: 28, column: 4 }, end: { line: 32, column: 5 } }, { start: { line: 28, column: 4 }, end: { line: 32, column: 5 } }], line: 28 }, '6': { loc: { start: { line: 78, column: 6 }, end: { line: 80, column: 7 } }, type: 'if', locations: [{ start: { line: 78, column: 6 }, end: { line: 80, column: 7 } }, { start: { line: 78, column: 6 }, end: { line: 80, column: 7 } }], line: 78 }, '7': { loc: { start: { line: 85, column: 30 }, end: { line: 85, column: 48 } }, type: 'binary-expr', locations: [{ start: { line: 85, column: 30 }, end: { line: 85, column: 35 } }, { start: { line: 85, column: 39 }, end: { line: 85, column: 48 } }], line: 85 }, '8': { loc: { start: { line: 86, column: 22 }, end: { line: 86, column: 64 } }, type: 'cond-expr', locations: [{ start: { line: 86, column: 42 }, end: { line: 86, column: 57 } }, { start: { line: 86, column: 60 }, end: { line: 86, column: 64 } }], line: 86 }, '9': { loc: { start: { line: 88, column: 6 }, end: { line: 90, column: 7 } }, type: 'if', locations: [{ start: { line: 88, column: 6 }, end: { line: 90, column: 7 } }, { start: { line: 88, column: 6 }, end: { line: 90, column: 7 } }], line: 88 }, '10': { loc: { start: { line: 88, column: 10 }, end: { line: 88, column: 68 } }, type: 'binary-expr', locations: [{ start: { line: 88, column: 10 }, end: { line: 88, column: 38 } }, { start: { line: 88, column: 42 }, end: { line: 88, column: 68 } }], line: 88 }, '11': { loc: { start: { line: 93, column: 21 }, end: { line: 93, column: 81 } }, type: 'cond-expr', locations: [{ start: { line: 93, column: 39 }, end: { line: 93, column: 76 } }, { start: { line: 93, column: 79 }, end: { line: 93, column: 81 } }], line: 93 }, '12': { loc: { start: { line: 93, column: 39 }, end: { line: 93, column: 76 } }, type: 'cond-expr', locations: [{ start: { line: 93, column: 58 }, end: { line: 93, column: 65 } }, { start: { line: 93, column: 68 }, end: { line: 93, column: 76 } }], line: 93 }, '13': { loc: { start: { line: 95, column: 6 }, end: { line: 99, column: 7 } }, type: 'if', locations: [{ start: { line: 95, column: 6 }, end: { line: 99, column: 7 } }, { start: { line: 95, column: 6 }, end: { line: 99, column: 7 } }], line: 95 }, '14': { loc: { start: { line: 103, column: 25 }, end: { line: 103, column: 93 } }, type: 'binary-expr', locations: [{ start: { line: 103, column: 25 }, end: { line: 103, column: 47 } }, { start: { line: 103, column: 51 }, end: { line: 103, column: 93 } }], line: 103 }, '15': { loc: { start: { line: 107, column: 8 }, end: { line: 109, column: 9 } }, type: 'if', locations: [{ start: { line: 107, column: 8 }, end: { line: 109, column: 9 } }, { start: { line: 107, column: 8 }, end: { line: 109, column: 9 } }], line: 107 }, '16': { loc: { start: { line: 107, column: 12 }, end: { line: 107, column: 59 } }, type: 'binary-expr', locations: [{ start: { line: 107, column: 12 }, end: { line: 107, column: 42 } }, { start: { line: 107, column: 46 }, end: { line: 107, column: 59 } }], line: 107 }, '17': { loc: { start: { line: 112, column: 6 }, end: { line: 116, column: 7 } }, type: 'if', locations: [{ start: { line: 112, column: 6 }, end: { line: 116, column: 7 } }, { start: { line: 112, column: 6 }, end: { line: 116, column: 7 } }], line: 112 }, '18': { loc: { start: { line: 123, column: 42 }, end: { line: 123, column: 74 } }, type: 'cond-expr', locations: [{ start: { line: 123, column: 49 }, end: { line: 123, column: 62 } }, { start: { line: 123, column: 65 }, end: { line: 123, column: 74 } }], line: 123 }, '19': { loc: { start: { line: 133, column: 6 }, end: { line: 141, column: 7 } }, type: 'if', locations: [{ start: { line: 133, column: 6 }, end: { line: 141, column: 7 } }, { start: { line: 133, column: 6 }, end: { line: 141, column: 7 } }], line: 133 }, '20': { loc: { start: { line: 135, column: 10 }, end: { line: 139, column: 11 } }, type: 'if', locations: [{ start: { line: 135, column: 10 }, end: { line: 139, column: 11 } }, { start: { line: 135, column: 10 }, end: { line: 139, column: 11 } }], line: 135 }, '21': { loc: { start: { line: 136, column: 12 }, end: { line: 138, column: 13 } }, type: 'if', locations: [{ start: { line: 136, column: 12 }, end: { line: 138, column: 13 } }, { start: { line: 136, column: 12 }, end: { line: 138, column: 13 } }], line: 136 }, '22': { loc: { start: { line: 136, column: 16 }, end: { line: 136, column: 110 } }, type: 'binary-expr', locations: [{ start: { line: 136, column: 16 }, end: { line: 136, column: 50 } }, { start: { line: 136, column: 55 }, end: { line: 136, column: 65 } }, { start: { line: 136, column: 69 }, end: { line: 136, column: 109 } }], line: 136 }, '23': { loc: { start: { line: 144, column: 8 }, end: { line: 157, column: 9 } }, type: 'if', locations: [{ start: { line: 144, column: 8 }, end: { line: 157, column: 9 } }, { start: { line: 144, column: 8 }, end: { line: 157, column: 9 } }], line: 144 }, '24': { loc: { start: { line: 146, column: 10 }, end: { line: 156, column: 11 } }, type: 'if', locations: [{ start: { line: 146, column: 10 }, end: { line: 156, column: 11 } }, { start: { line: 146, column: 10 }, end: { line: 156, column: 11 } }], line: 146 }, '25': { loc: { start: { line: 146, column: 14 }, end: { line: 146, column: 46 } }, type: 'binary-expr', locations: [{ start: { line: 146, column: 14 }, end: { line: 146, column: 28 } }, { start: { line: 146, column: 32 }, end: { line: 146, column: 46 } }], line: 146 }, '26': { loc: { start: { line: 149, column: 21 }, end: { line: 149, column: 59 } }, type: 'binary-expr', locations: [{ start: { line: 149, column: 21 }, end: { line: 149, column: 25 } }, { start: { line: 149, column: 29 }, end: { line: 149, column: 59 } }], line: 149 }, '27': { loc: { start: { line: 151, column: 12 }, end: { line: 155, column: 13 } }, type: 'if', locations: [{ start: { line: 151, column: 12 }, end: { line: 155, column: 13 } }, { start: { line: 151, column: 12 }, end: { line: 155, column: 13 } }], line: 151 }, '28': { loc: { start: { line: 152, column: 14 }, end: { line: 154, column: 15 } }, type: 'if', locations: [{ start: { line: 152, column: 14 }, end: { line: 154, column: 15 } }, { start: { line: 152, column: 14 }, end: { line: 154, column: 15 } }], line: 152 }, '29': { loc: { start: { line: 152, column: 18 }, end: { line: 152, column: 87 } }, type: 'binary-expr', locations: [{ start: { line: 152, column: 18 }, end: { line: 152, column: 45 } }, { start: { line: 152, column: 49 }, end: { line: 152, column: 87 } }], line: 152 }, '30': { loc: { start: { line: 159, column: 6 }, end: { line: 163, column: 7 } }, type: 'if', locations: [{ start: { line: 159, column: 6 }, end: { line: 163, column: 7 } }, { start: { line: 159, column: 6 }, end: { line: 163, column: 7 } }], line: 159 }, '31': { loc: { start: { line: 166, column: 8 }, end: { line: 168, column: 9 } }, type: 'if', locations: [{ start: { line: 166, column: 8 }, end: { line: 168, column: 9 } }, { start: { line: 166, column: 8 }, end: { line: 168, column: 9 } }], line: 166 }, '32': { loc: { start: { line: 166, column: 12 }, end: { line: 166, column: 37 } }, type: 'binary-expr', locations: [{ start: { line: 166, column: 12 }, end: { line: 166, column: 21 } }, { start: { line: 166, column: 25 }, end: { line: 166, column: 37 } }], line: 166 }, '33': { loc: { start: { line: 169, column: 22 }, end: { line: 169, column: 105 } }, type: 'cond-expr', locations: [{ start: { line: 169, column: 34 }, end: { line: 169, column: 99 } }, { start: { line: 169, column: 102 }, end: { line: 169, column: 105 } }], line: 169 }, '34': { loc: { start: { line: 169, column: 34 }, end: { line: 169, column: 99 } }, type: 'cond-expr', locations: [{ start: { line: 169, column: 60 }, end: { line: 169, column: 63 } }, { start: { line: 169, column: 66 }, end: { line: 169, column: 99 } }], line: 169 }, '35': { loc: { start: { line: 177, column: 6 }, end: { line: 182, column: 7 } }, type: 'if', locations: [{ start: { line: 177, column: 6 }, end: { line: 182, column: 7 } }, { start: { line: 177, column: 6 }, end: { line: 182, column: 7 } }], line: 177 }, '36': { loc: { start: { line: 178, column: 8 }, end: { line: 180, column: 9 } }, type: 'if', locations: [{ start: { line: 178, column: 8 }, end: { line: 180, column: 9 } }, { start: { line: 178, column: 8 }, end: { line: 180, column: 9 } }], line: 178 }, '37': { loc: { start: { line: 183, column: 6 }, end: { line: 201, column: 7 } }, type: 'if', locations: [{ start: { line: 183, column: 6 }, end: { line: 201, column: 7 } }, { start: { line: 183, column: 6 }, end: { line: 201, column: 7 } }], line: 183 }, '38': { loc: { start: { line: 184, column: 8 }, end: { line: 186, column: 9 } }, type: 'if', locations: [{ start: { line: 184, column: 8 }, end: { line: 186, column: 9 } }, { start: { line: 184, column: 8 }, end: { line: 186, column: 9 } }], line: 184 }, '39': { loc: { start: { line: 187, column: 8 }, end: { line: 189, column: 9 } }, type: 'if', locations: [{ start: { line: 187, column: 8 }, end: { line: 189, column: 9 } }, { start: { line: 187, column: 8 }, end: { line: 189, column: 9 } }], line: 187 }, '40': { loc: { start: { line: 190, column: 8 }, end: { line: 192, column: 9 } }, type: 'if', locations: [{ start: { line: 190, column: 8 }, end: { line: 192, column: 9 } }, { start: { line: 190, column: 8 }, end: { line: 192, column: 9 } }], line: 190 }, '41': { loc: { start: { line: 190, column: 12 }, end: { line: 190, column: 48 } }, type: 'binary-expr', locations: [{ start: { line: 190, column: 12 }, end: { line: 190, column: 30 } }, { start: { line: 190, column: 34 }, end: { line: 190, column: 48 } }], line: 190 }, '42': { loc: { start: { line: 193, column: 8 }, end: { line: 195, column: 9 } }, type: 'if', locations: [{ start: { line: 193, column: 8 }, end: { line: 195, column: 9 } }, { start: { line: 193, column: 8 }, end: { line: 195, column: 9 } }], line: 193 }, '43': { loc: { start: { line: 193, column: 12 }, end: { line: 193, column: 48 } }, type: 'binary-expr', locations: [{ start: { line: 193, column: 12 }, end: { line: 193, column: 30 } }, { start: { line: 193, column: 34 }, end: { line: 193, column: 48 } }], line: 193 }, '44': { loc: { start: { line: 196, column: 8 }, end: { line: 198, column: 9 } }, type: 'if', locations: [{ start: { line: 196, column: 8 }, end: { line: 198, column: 9 } }, { start: { line: 196, column: 8 }, end: { line: 198, column: 9 } }], line: 196 }, '45': { loc: { start: { line: 196, column: 12 }, end: { line: 196, column: 48 } }, type: 'binary-expr', locations: [{ start: { line: 196, column: 12 }, end: { line: 196, column: 30 } }, { start: { line: 196, column: 34 }, end: { line: 196, column: 48 } }], line: 196 }, '46': { loc: { start: { line: 199, column: 13 }, end: { line: 201, column: 7 } }, type: 'if', locations: [{ start: { line: 199, column: 13 }, end: { line: 201, column: 7 } }, { start: { line: 199, column: 13 }, end: { line: 201, column: 7 } }], line: 199 }, '47': { loc: { start: { line: 199, column: 18 }, end: { line: 199, column: 89 } }, type: 'cond-expr', locations: [{ start: { line: 199, column: 49 }, end: { line: 199, column: 60 } }, { start: { line: 199, column: 63 }, end: { line: 199, column: 89 } }], line: 199 }, '48': { loc: { start: { line: 222, column: 10 }, end: { line: 224, column: 11 } }, type: 'if', locations: [{ start: { line: 222, column: 10 }, end: { line: 224, column: 11 } }, { start: { line: 222, column: 10 }, end: { line: 224, column: 11 } }], line: 222 }, '49': { loc: { start: { line: 228, column: 10 }, end: { line: 232, column: 11 } }, type: 'if', locations: [{ start: { line: 228, column: 10 }, end: { line: 232, column: 11 } }, { start: { line: 228, column: 10 }, end: { line: 232, column: 11 } }], line: 228 }, '50': { loc: { start: { line: 230, column: 17 }, end: { line: 232, column: 11 } }, type: 'if', locations: [{ start: { line: 230, column: 17 }, end: { line: 232, column: 11 } }, { start: { line: 230, column: 17 }, end: { line: 232, column: 11 } }], line: 230 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, '73': 0, '74': 0, '75': 0, '76': 0, '77': 0, '78': 0, '79': 0, '80': 0, '81': 0, '82': 0, '83': 0, '84': 0, '85': 0, '86': 0, '87': 0, '88': 0, '89': 0, '90': 0, '91': 0, '92': 0, '93': 0, '94': 0, '95': 0, '96': 0, '97': 0, '98': 0, '99': 0, '100': 0, '101': 0, '102': 0, '103': 0, '104': 0, '105': 0, '106': 0, '107': 0, '108': 0, '109': 0, '110': 0, '111': 0, '112': 0, '113': 0, '114': 0, '115': 0, '116': 0, '117': 0, '118': 0, '119': 0, '120': 0, '121': 0, '122': 0, '123': 0, '124': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0], '8': [0, 0], '9': [0, 0], '10': [0, 0], '11': [0, 0], '12': [0, 0], '13': [0, 0], '14': [0, 0], '15': [0, 0], '16': [0, 0], '17': [0, 0], '18': [0, 0], '19': [0, 0], '20': [0, 0], '21': [0, 0], '22': [0, 0, 0], '23': [0, 0], '24': [0, 0], '25': [0, 0], '26': [0, 0], '27': [0, 0], '28': [0, 0], '29': [0, 0], '30': [0, 0], '31': [0, 0], '32': [0, 0], '33': [0, 0], '34': [0, 0], '35': [0, 0], '36': [0, 0], '37': [0, 0], '38': [0, 0], '39': [0, 0], '40': [0, 0], '41': [0, 0], '42': [0, 0], '43': [0, 0], '44': [0, 0], '45': [0, 0], '46': [0, 0], '47': [0, 0], '48': [0, 0], '49': [0, 0], '50': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var isArray$3 = (cov_25cqm5nxce.s[0]++, typeof Array.isArray === 'function' ? (cov_25cqm5nxce.b[0][0]++, Array.isArray) : (cov_25cqm5nxce.b[0][1]++, function (a) {
  cov_25cqm5nxce.f[0]++;cov_25cqm5nxce.s[1]++;return a instanceof Array;
}));var getObjectKeys = (cov_25cqm5nxce.s[2]++, typeof Object.keys === 'function' ? (cov_25cqm5nxce.b[1][0]++, function (obj) {
  cov_25cqm5nxce.f[1]++;cov_25cqm5nxce.s[3]++;return Object.keys(obj);
}) : (cov_25cqm5nxce.b[1][1]++, function (obj) {
  cov_25cqm5nxce.f[2]++;var names = (cov_25cqm5nxce.s[4]++, []);cov_25cqm5nxce.s[5]++;for (var property in obj) {
    cov_25cqm5nxce.s[6]++;if (Object.prototype.hasOwnProperty.call(obj, property)) {
      cov_25cqm5nxce.b[2][0]++;cov_25cqm5nxce.s[7]++;names.push(property);
    } else {
      cov_25cqm5nxce.b[2][1]++;
    }
  }cov_25cqm5nxce.s[8]++;return names;
}));cov_25cqm5nxce.s[9]++;var trimUnderscore = function trimUnderscore(str) {
  cov_25cqm5nxce.f[3]++;cov_25cqm5nxce.s[10]++;if (str.substr(0, 1) === '_') {
    cov_25cqm5nxce.b[3][0]++;cov_25cqm5nxce.s[11]++;return str.slice(1);
  } else {
    cov_25cqm5nxce.b[3][1]++;
  }cov_25cqm5nxce.s[12]++;return str;
};cov_25cqm5nxce.s[13]++;var arrayKeyToSortNumber = function arrayKeyToSortNumber(key) {
  cov_25cqm5nxce.f[4]++;cov_25cqm5nxce.s[14]++;if (key === '_t') {
    cov_25cqm5nxce.b[4][0]++;cov_25cqm5nxce.s[15]++;return -1;
  } else {
    cov_25cqm5nxce.b[4][1]++;cov_25cqm5nxce.s[16]++;if (key.substr(0, 1) === '_') {
      cov_25cqm5nxce.b[5][0]++;cov_25cqm5nxce.s[17]++;return parseInt(key.slice(1), 10);
    } else {
      cov_25cqm5nxce.b[5][1]++;cov_25cqm5nxce.s[18]++;return parseInt(key, 10) + 0.1;
    }
  }
};cov_25cqm5nxce.s[19]++;var arrayKeyComparer = function arrayKeyComparer(key1, key2) {
  cov_25cqm5nxce.f[5]++;cov_25cqm5nxce.s[20]++;return arrayKeyToSortNumber(key1) - arrayKeyToSortNumber(key2);
};var BaseFormatter = (cov_25cqm5nxce.s[21]++, function () {
  cov_25cqm5nxce.f[6]++;function BaseFormatter() {
    cov_25cqm5nxce.f[7]++;cov_25cqm5nxce.s[22]++;classCallCheck$1(this, BaseFormatter);
  }cov_25cqm5nxce.s[23]++;createClass$1(BaseFormatter, [{ key: 'format', value: function format(delta, left) {
      cov_25cqm5nxce.f[8]++;var context = (cov_25cqm5nxce.s[24]++, {});cov_25cqm5nxce.s[25]++;this.prepareContext(context);cov_25cqm5nxce.s[26]++;this.recurse(context, delta, left);cov_25cqm5nxce.s[27]++;return this.finalize(context);
    } }, { key: 'prepareContext', value: function prepareContext(context) {
      cov_25cqm5nxce.f[9]++;cov_25cqm5nxce.s[28]++;context.buffer = [];cov_25cqm5nxce.s[29]++;context.out = function () {
        cov_25cqm5nxce.f[10]++;var _buffer;cov_25cqm5nxce.s[30]++;(_buffer = this.buffer).push.apply(_buffer, arguments);
      };
    } }, { key: 'typeFormattterNotFound', value: function typeFormattterNotFound(context, deltaType) {
      cov_25cqm5nxce.f[11]++;cov_25cqm5nxce.s[31]++;throw new Error('cannot format delta type: ' + deltaType);
    } }, { key: 'typeFormattterErrorFormatter', value: function typeFormattterErrorFormatter(context, err) {
      cov_25cqm5nxce.f[12]++;cov_25cqm5nxce.s[32]++;return err.toString();
    } }, { key: 'finalize', value: function finalize(_ref) {
      cov_25cqm5nxce.f[13]++;var buffer = (cov_25cqm5nxce.s[33]++, _ref.buffer);cov_25cqm5nxce.s[34]++;if (isArray$3(buffer)) {
        cov_25cqm5nxce.b[6][0]++;cov_25cqm5nxce.s[35]++;return buffer.join('');
      } else {
        cov_25cqm5nxce.b[6][1]++;
      }
    } }, { key: 'recurse', value: function recurse(context, delta, left, key, leftKey, movedFrom, isLast) {
      cov_25cqm5nxce.f[14]++;var useMoveOriginHere = (cov_25cqm5nxce.s[36]++, (cov_25cqm5nxce.b[7][0]++, delta) && (cov_25cqm5nxce.b[7][1]++, movedFrom));var leftValue = (cov_25cqm5nxce.s[37]++, useMoveOriginHere ? (cov_25cqm5nxce.b[8][0]++, movedFrom.value) : (cov_25cqm5nxce.b[8][1]++, left));cov_25cqm5nxce.s[38]++;if ((cov_25cqm5nxce.b[10][0]++, typeof delta === 'undefined') && (cov_25cqm5nxce.b[10][1]++, typeof key === 'undefined')) {
        cov_25cqm5nxce.b[9][0]++;cov_25cqm5nxce.s[39]++;return undefined;
      } else {
        cov_25cqm5nxce.b[9][1]++;
      }var type = (cov_25cqm5nxce.s[40]++, this.getDeltaType(delta, movedFrom));var nodeType = (cov_25cqm5nxce.s[41]++, type === 'node' ? (cov_25cqm5nxce.b[11][0]++, delta._t === 'a' ? (cov_25cqm5nxce.b[12][0]++, 'array') : (cov_25cqm5nxce.b[12][1]++, 'object')) : (cov_25cqm5nxce.b[11][1]++, ''));cov_25cqm5nxce.s[42]++;if (typeof key !== 'undefined') {
        cov_25cqm5nxce.b[13][0]++;cov_25cqm5nxce.s[43]++;this.nodeBegin(context, key, leftKey, type, nodeType, isLast);
      } else {
        cov_25cqm5nxce.b[13][1]++;cov_25cqm5nxce.s[44]++;this.rootBegin(context, type, nodeType);
      }var typeFormattter = (cov_25cqm5nxce.s[45]++, void 0);cov_25cqm5nxce.s[46]++;try {
        cov_25cqm5nxce.s[47]++;typeFormattter = (cov_25cqm5nxce.b[14][0]++, this['format_' + type]) || (cov_25cqm5nxce.b[14][1]++, this.typeFormattterNotFound(context, type));cov_25cqm5nxce.s[48]++;typeFormattter.call(this, context, delta, leftValue, key, leftKey, movedFrom);
      } catch (err) {
        cov_25cqm5nxce.s[49]++;this.typeFormattterErrorFormatter(context, err, delta, leftValue, key, leftKey, movedFrom);cov_25cqm5nxce.s[50]++;if ((cov_25cqm5nxce.b[16][0]++, typeof console !== 'undefined') && (cov_25cqm5nxce.b[16][1]++, console.error)) {
          cov_25cqm5nxce.b[15][0]++;cov_25cqm5nxce.s[51]++;console.error(err.stack);
        } else {
          cov_25cqm5nxce.b[15][1]++;
        }
      }cov_25cqm5nxce.s[52]++;if (typeof key !== 'undefined') {
        cov_25cqm5nxce.b[17][0]++;cov_25cqm5nxce.s[53]++;this.nodeEnd(context, key, leftKey, type, nodeType, isLast);
      } else {
        cov_25cqm5nxce.b[17][1]++;cov_25cqm5nxce.s[54]++;this.rootEnd(context, type, nodeType);
      }
    } }, { key: 'formatDeltaChildren', value: function formatDeltaChildren(context, delta, left) {
      cov_25cqm5nxce.f[15]++;var self = (cov_25cqm5nxce.s[55]++, this);cov_25cqm5nxce.s[56]++;this.forEachDeltaKey(delta, left, function (key, leftKey, movedFrom, isLast) {
        cov_25cqm5nxce.f[16]++;cov_25cqm5nxce.s[57]++;self.recurse(context, delta[key], left ? (cov_25cqm5nxce.b[18][0]++, left[leftKey]) : (cov_25cqm5nxce.b[18][1]++, undefined), key, leftKey, movedFrom, isLast);
      });
    } }, { key: 'forEachDeltaKey', value: function forEachDeltaKey(delta, left, fn) {
      cov_25cqm5nxce.f[17]++;var keys = (cov_25cqm5nxce.s[58]++, getObjectKeys(delta));var arrayKeys = (cov_25cqm5nxce.s[59]++, delta._t === 'a');var moveDestinations = (cov_25cqm5nxce.s[60]++, {});var name = (cov_25cqm5nxce.s[61]++, void 0);cov_25cqm5nxce.s[62]++;if (typeof left !== 'undefined') {
        cov_25cqm5nxce.b[19][0]++;cov_25cqm5nxce.s[63]++;for (name in left) {
          cov_25cqm5nxce.s[64]++;if (Object.prototype.hasOwnProperty.call(left, name)) {
            cov_25cqm5nxce.b[20][0]++;cov_25cqm5nxce.s[65]++;if ((cov_25cqm5nxce.b[22][0]++, typeof delta[name] === 'undefined') && ((cov_25cqm5nxce.b[22][1]++, !arrayKeys) || (cov_25cqm5nxce.b[22][2]++, typeof delta['_' + name] === 'undefined'))) {
              cov_25cqm5nxce.b[21][0]++;cov_25cqm5nxce.s[66]++;keys.push(name);
            } else {
              cov_25cqm5nxce.b[21][1]++;
            }
          } else {
            cov_25cqm5nxce.b[20][1]++;
          }
        }
      } else {
        cov_25cqm5nxce.b[19][1]++;
      } // look for move destinations
      cov_25cqm5nxce.s[67]++;for (name in delta) {
        cov_25cqm5nxce.s[68]++;if (Object.prototype.hasOwnProperty.call(delta, name)) {
          cov_25cqm5nxce.b[23][0]++;var value = (cov_25cqm5nxce.s[69]++, delta[name]);cov_25cqm5nxce.s[70]++;if ((cov_25cqm5nxce.b[25][0]++, isArray$3(value)) && (cov_25cqm5nxce.b[25][1]++, value[2] === 3)) {
            cov_25cqm5nxce.b[24][0]++;cov_25cqm5nxce.s[71]++;moveDestinations[value[1].toString()] = { key: name, value: (cov_25cqm5nxce.b[26][0]++, left) && (cov_25cqm5nxce.b[26][1]++, left[parseInt(name.substr(1))]) };cov_25cqm5nxce.s[72]++;if (this.includeMoveDestinations !== false) {
              cov_25cqm5nxce.b[27][0]++;cov_25cqm5nxce.s[73]++;if ((cov_25cqm5nxce.b[29][0]++, typeof left === 'undefined') && (cov_25cqm5nxce.b[29][1]++, typeof delta[value[1]] === 'undefined')) {
                cov_25cqm5nxce.b[28][0]++;cov_25cqm5nxce.s[74]++;keys.push(value[1].toString());
              } else {
                cov_25cqm5nxce.b[28][1]++;
              }
            } else {
              cov_25cqm5nxce.b[27][1]++;
            }
          } else {
            cov_25cqm5nxce.b[24][1]++;
          }
        } else {
          cov_25cqm5nxce.b[23][1]++;
        }
      }cov_25cqm5nxce.s[75]++;if (arrayKeys) {
        cov_25cqm5nxce.b[30][0]++;cov_25cqm5nxce.s[76]++;keys.sort(arrayKeyComparer);
      } else {
        cov_25cqm5nxce.b[30][1]++;cov_25cqm5nxce.s[77]++;keys.sort();
      }cov_25cqm5nxce.s[78]++;for (var index = 0, length = keys.length; index < length; index++) {
        var key = (cov_25cqm5nxce.s[79]++, keys[index]);cov_25cqm5nxce.s[80]++;if ((cov_25cqm5nxce.b[32][0]++, arrayKeys) && (cov_25cqm5nxce.b[32][1]++, key === '_t')) {
          cov_25cqm5nxce.b[31][0]++;cov_25cqm5nxce.s[81]++;continue;
        } else {
          cov_25cqm5nxce.b[31][1]++;
        }var leftKey = (cov_25cqm5nxce.s[82]++, arrayKeys ? (cov_25cqm5nxce.b[33][0]++, typeof key === 'number' ? (cov_25cqm5nxce.b[34][0]++, key) : (cov_25cqm5nxce.b[34][1]++, parseInt(trimUnderscore(key), 10))) : (cov_25cqm5nxce.b[33][1]++, key));var isLast = (cov_25cqm5nxce.s[83]++, index === length - 1);cov_25cqm5nxce.s[84]++;fn(key, leftKey, moveDestinations[leftKey], isLast);
      }
    } }, { key: 'getDeltaType', value: function getDeltaType(delta, movedFrom) {
      cov_25cqm5nxce.f[18]++;cov_25cqm5nxce.s[85]++;if (typeof delta === 'undefined') {
        cov_25cqm5nxce.b[35][0]++;cov_25cqm5nxce.s[86]++;if (typeof movedFrom !== 'undefined') {
          cov_25cqm5nxce.b[36][0]++;cov_25cqm5nxce.s[87]++;return 'movedestination';
        } else {
          cov_25cqm5nxce.b[36][1]++;
        }cov_25cqm5nxce.s[88]++;return 'unchanged';
      } else {
        cov_25cqm5nxce.b[35][1]++;
      }cov_25cqm5nxce.s[89]++;if (isArray$3(delta)) {
        cov_25cqm5nxce.b[37][0]++;cov_25cqm5nxce.s[90]++;if (delta.length === 1) {
          cov_25cqm5nxce.b[38][0]++;cov_25cqm5nxce.s[91]++;return 'added';
        } else {
          cov_25cqm5nxce.b[38][1]++;
        }cov_25cqm5nxce.s[92]++;if (delta.length === 2) {
          cov_25cqm5nxce.b[39][0]++;cov_25cqm5nxce.s[93]++;return 'modified';
        } else {
          cov_25cqm5nxce.b[39][1]++;
        }cov_25cqm5nxce.s[94]++;if ((cov_25cqm5nxce.b[41][0]++, delta.length === 3) && (cov_25cqm5nxce.b[41][1]++, delta[2] === 0)) {
          cov_25cqm5nxce.b[40][0]++;cov_25cqm5nxce.s[95]++;return 'deleted';
        } else {
          cov_25cqm5nxce.b[40][1]++;
        }cov_25cqm5nxce.s[96]++;if ((cov_25cqm5nxce.b[43][0]++, delta.length === 3) && (cov_25cqm5nxce.b[43][1]++, delta[2] === 2)) {
          cov_25cqm5nxce.b[42][0]++;cov_25cqm5nxce.s[97]++;return 'textdiff';
        } else {
          cov_25cqm5nxce.b[42][1]++;
        }cov_25cqm5nxce.s[98]++;if ((cov_25cqm5nxce.b[45][0]++, delta.length === 3) && (cov_25cqm5nxce.b[45][1]++, delta[2] === 3)) {
          cov_25cqm5nxce.b[44][0]++;cov_25cqm5nxce.s[99]++;return 'moved';
        } else {
          cov_25cqm5nxce.b[44][1]++;
        }
      } else {
        cov_25cqm5nxce.b[37][1]++;cov_25cqm5nxce.s[100]++;if ((typeof delta === 'undefined' ? (cov_25cqm5nxce.b[47][0]++, 'undefined') : (cov_25cqm5nxce.b[47][1]++, _typeof$1(delta))) === 'object') {
          cov_25cqm5nxce.b[46][0]++;cov_25cqm5nxce.s[101]++;return 'node';
        } else {
          cov_25cqm5nxce.b[46][1]++;
        }
      }cov_25cqm5nxce.s[102]++;return 'unknown';
    } }, { key: 'parseTextDiff', value: function parseTextDiff(value) {
      cov_25cqm5nxce.f[19]++;var output = (cov_25cqm5nxce.s[103]++, []);var lines = (cov_25cqm5nxce.s[104]++, value.split('\n@@ '));cov_25cqm5nxce.s[105]++;for (var i = 0, l = lines.length; i < l; i++) {
        var line = (cov_25cqm5nxce.s[106]++, lines[i]);var lineOutput = (cov_25cqm5nxce.s[107]++, { pieces: [] });var location = (cov_25cqm5nxce.s[108]++, /^(?:@@ )?[-+]?(\d+),(\d+)/.exec(line).slice(1));cov_25cqm5nxce.s[109]++;lineOutput.location = { line: location[0], chr: location[1] };var pieces = (cov_25cqm5nxce.s[110]++, line.split('\n').slice(1));cov_25cqm5nxce.s[111]++;for (var pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
          var piece = (cov_25cqm5nxce.s[112]++, pieces[pieceIndex]);cov_25cqm5nxce.s[113]++;if (!piece.length) {
            cov_25cqm5nxce.b[48][0]++;cov_25cqm5nxce.s[114]++;continue;
          } else {
            cov_25cqm5nxce.b[48][1]++;
          }var pieceOutput = (cov_25cqm5nxce.s[115]++, { type: 'context' });cov_25cqm5nxce.s[116]++;if (piece.substr(0, 1) === '+') {
            cov_25cqm5nxce.b[49][0]++;cov_25cqm5nxce.s[117]++;pieceOutput.type = 'added';
          } else {
            cov_25cqm5nxce.b[49][1]++;cov_25cqm5nxce.s[118]++;if (piece.substr(0, 1) === '-') {
              cov_25cqm5nxce.b[50][0]++;cov_25cqm5nxce.s[119]++;pieceOutput.type = 'deleted';
            } else {
              cov_25cqm5nxce.b[50][1]++;
            }
          }cov_25cqm5nxce.s[120]++;pieceOutput.text = piece.slice(1);cov_25cqm5nxce.s[121]++;lineOutput.pieces.push(pieceOutput);
        }cov_25cqm5nxce.s[122]++;output.push(lineOutput);
      }cov_25cqm5nxce.s[123]++;return output;
    } }]);cov_25cqm5nxce.s[124]++;return BaseFormatter;
}());

var base = Object.freeze({
  default: BaseFormatter
});

var cov_ajsxhvv7o = function () {
  var path = 'Y:\\repos\\jsondiffpatch\\src\\formatters\\html.js',
      hash = 'ce20d86e1df38f0e847aeae11856b255f4d31d28',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: 'Y:\\repos\\jsondiffpatch\\src\\formatters\\html.js', statementMap: { '0': { start: { line: 3, column: 20 }, end: { line: 139, column: 16 } }, '1': { start: { line: 4, column: 2 }, end: { line: 4, column: 55 } }, '2': { start: { line: 7, column: 4 }, end: { line: 7, column: 53 } }, '3': { start: { line: 8, column: 4 }, end: { line: 8, column: 146 } }, '4': { start: { line: 11, column: 2 }, end: { line: 137, column: 6 } }, '5': { start: { line: 14, column: 6 }, end: { line: 14, column: 72 } }, '6': { start: { line: 19, column: 6 }, end: { line: 19, column: 83 } }, '7': { start: { line: 24, column: 18 }, end: { line: 24, column: 43 } }, '8': { start: { line: 25, column: 6 }, end: { line: 25, column: 57 } }, '9': { start: { line: 26, column: 6 }, end: { line: 36, column: 7 } }, '10': { start: { line: 27, column: 19 }, end: { line: 27, column: 27 } }, '11': { start: { line: 28, column: 8 }, end: { line: 28, column: 283 } }, '12': { start: { line: 29, column: 21 }, end: { line: 29, column: 32 } }, '13': { start: { line: 30, column: 8 }, end: { line: 34, column: 9 } }, '14': { start: { line: 32, column: 22 }, end: { line: 32, column: 40 } }, '15': { start: { line: 33, column: 10 }, end: { line: 33, column: 129 } }, '16': { start: { line: 35, column: 8 }, end: { line: 35, column: 35 } }, '17': { start: { line: 37, column: 6 }, end: { line: 37, column: 27 } }, '18': { start: { line: 42, column: 22 }, end: { line: 42, column: 110 } }, '19': { start: { line: 43, column: 6 }, end: { line: 43, column: 73 } }, '20': { start: { line: 48, column: 6 }, end: { line: 48, column: 149 } }, '21': { start: { line: 53, column: 22 }, end: { line: 53, column: 110 } }, '22': { start: { line: 54, column: 6 }, end: { line: 54, column: 148 } }, '23': { start: { line: 59, column: 6 }, end: { line: 59, column: 27 } }, '24': { start: { line: 68, column: 6 }, end: { line: 70, column: 7 } }, '25': { start: { line: 69, column: 8 }, end: { line: 69, column: 15 } }, '26': { start: { line: 71, column: 6 }, end: { line: 71, column: 55 } }, '27': { start: { line: 72, column: 6 }, end: { line: 72, column: 38 } }, '28': { start: { line: 73, column: 6 }, end: { line: 73, column: 28 } }, '29': { start: { line: 78, column: 6 }, end: { line: 80, column: 7 } }, '30': { start: { line: 79, column: 8 }, end: { line: 79, column: 15 } }, '31': { start: { line: 81, column: 6 }, end: { line: 81, column: 55 } }, '32': { start: { line: 82, column: 6 }, end: { line: 82, column: 38 } }, '33': { start: { line: 83, column: 6 }, end: { line: 83, column: 28 } }, '34': { start: { line: 89, column: 21 }, end: { line: 89, column: 58 } }, '35': { start: { line: 90, column: 6 }, end: { line: 90, column: 94 } }, '36': { start: { line: 91, column: 6 }, end: { line: 91, column: 53 } }, '37': { start: { line: 92, column: 6 }, end: { line: 92, column: 27 } }, '38': { start: { line: 97, column: 6 }, end: { line: 97, column: 55 } }, '39': { start: { line: 98, column: 6 }, end: { line: 98, column: 42 } }, '40': { start: { line: 99, column: 6 }, end: { line: 99, column: 28 } }, '41': { start: { line: 104, column: 6 }, end: { line: 104, column: 80 } }, '42': { start: { line: 105, column: 6 }, end: { line: 105, column: 42 } }, '43': { start: { line: 106, column: 6 }, end: { line: 106, column: 92 } }, '44': { start: { line: 107, column: 6 }, end: { line: 107, column: 42 } }, '45': { start: { line: 108, column: 6 }, end: { line: 108, column: 28 } }, '46': { start: { line: 113, column: 6 }, end: { line: 113, column: 55 } }, '47': { start: { line: 114, column: 6 }, end: { line: 114, column: 42 } }, '48': { start: { line: 115, column: 6 }, end: { line: 115, column: 28 } }, '49': { start: { line: 120, column: 6 }, end: { line: 120, column: 55 } }, '50': { start: { line: 121, column: 6 }, end: { line: 121, column: 42 } }, '51': { start: { line: 122, column: 6 }, end: { line: 122, column: 95 } }, '52': { start: { line: 125, column: 6 }, end: { line: 127, column: 702 } }, '53': { start: { line: 128, column: 6 }, end: { line: 128, column: 31 } }, '54': { start: { line: 133, column: 6 }, end: { line: 133, column: 55 } }, '55': { start: { line: 134, column: 6 }, end: { line: 134, column: 51 } }, '56': { start: { line: 135, column: 6 }, end: { line: 135, column: 28 } }, '57': { start: { line: 138, column: 2 }, end: { line: 138, column: 23 } }, '58': { start: { line: 142, column: 13 }, end: { line: 142, column: 17 } }, '59': { start: { line: 143, column: 21 }, end: { line: 143, column: 106 } }, '60': { start: { line: 144, column: 2 }, end: { line: 146, column: 3 } }, '61': { start: { line: 145, column: 4 }, end: { line: 145, column: 64 } }, '62': { start: { line: 147, column: 2 }, end: { line: 147, column: 14 } }, '63': { start: { line: 150, column: 19 }, end: { line: 199, column: 1 } }, '64': { start: { line: 151, column: 13 }, end: { line: 151, column: 32 } }, '65': { start: { line: 152, column: 23 }, end: { line: 156, column: 3 } }, '66': { start: { line: 153, column: 22 }, end: { line: 153, column: 38 } }, '67': { start: { line: 154, column: 20 }, end: { line: 154, column: 34 } }, '68': { start: { line: 155, column: 4 }, end: { line: 155, column: 36 } }, '69': { start: { line: 157, column: 20 }, end: { line: 162, column: 3 } }, '70': { start: { line: 158, column: 16 }, end: { line: 158, column: 42 } }, '71': { start: { line: 159, column: 4 }, end: { line: 161, column: 5 } }, '72': { start: { line: 160, column: 6 }, end: { line: 160, column: 19 } }, '73': { start: { line: 163, column: 21 }, end: { line: 169, column: 3 } }, '74': { start: { line: 164, column: 19 }, end: { line: 164, column: 33 } }, '75': { start: { line: 166, column: 4 }, end: { line: 168, column: 5 } }, '76': { start: { line: 167, column: 6 }, end: { line: 167, column: 25 } }, '77': { start: { line: 170, column: 2 }, end: { line: 198, column: 5 } }, '78': { start: { line: 171, column: 21 }, end: { line: 171, column: 37 } }, '79': { start: { line: 172, column: 19 }, end: { line: 172, column: 33 } }, '80': { start: { line: 173, column: 16 }, end: { line: 173, column: 27 } }, '81': { start: { line: 175, column: 22 }, end: { line: 175, column: 32 } }, '82': { start: { line: 176, column: 14 }, end: { line: 176, column: 25 } }, '83': { start: { line: 177, column: 15 }, end: { line: 177, column: 30 } }, '84': { start: { line: 178, column: 4 }, end: { line: 178, column: 31 } }, '85': { start: { line: 179, column: 22 }, end: { line: 179, column: 99 } }, '86': { start: { line: 180, column: 20 }, end: { line: 180, column: 42 } }, '87': { start: { line: 181, column: 26 }, end: { line: 181, column: 32 } }, '88': { start: { line: 182, column: 4 }, end: { line: 186, column: 7 } }, '89': { start: { line: 183, column: 6 }, end: { line: 185, column: 7 } }, '90': { start: { line: 184, column: 8 }, end: { line: 184, column: 32 } }, '91': { start: { line: 187, column: 4 }, end: { line: 189, column: 5 } }, '92': { start: { line: 188, column: 6 }, end: { line: 188, column: 13 } }, '93': { start: { line: 190, column: 4 }, end: { line: 197, column: 20 } }, '94': { start: { line: 191, column: 21 }, end: { line: 191, column: 70 } }, '95': { start: { line: 192, column: 6 }, end: { line: 192, column: 57 } }, '96': { start: { line: 193, column: 6 }, end: { line: 193, column: 60 } }, '97': { start: { line: 194, column: 18 }, end: { line: 194, column: 169 } }, '98': { start: { line: 195, column: 6 }, end: { line: 195, column: 36 } }, '99': { start: { line: 196, column: 6 }, end: { line: 196, column: 29 } }, '100': { start: { line: 204, column: 27 }, end: { line: 256, column: 1 } }, '101': { start: { line: 205, column: 11 }, end: { line: 205, column: 32 } }, '102': { start: { line: 206, column: 15 }, end: { line: 206, column: 41 } }, '103': { start: { line: 207, column: 16 }, end: { line: 212, column: 3 } }, '104': { start: { line: 213, column: 13 }, end: { line: 213, column: 25 } }, '105': { start: { line: 214, column: 2 }, end: { line: 216, column: 3 } }, '106': { start: { line: 215, column: 4 }, end: { line: 215, column: 11 } }, '107': { start: { line: 217, column: 2 }, end: { line: 226, column: 3 } }, '108': { start: { line: 218, column: 4 }, end: { line: 218, column: 33 } }, '109': { start: { line: 219, column: 4 }, end: { line: 219, column: 32 } }, '110': { start: { line: 220, column: 4 }, end: { line: 220, column: 33 } }, '111': { start: { line: 221, column: 4 }, end: { line: 221, column: 32 } }, '112': { start: { line: 222, column: 4 }, end: { line: 224, column: 5 } }, '113': { start: { line: 223, column: 6 }, end: { line: 223, column: 31 } }, '114': { start: { line: 225, column: 4 }, end: { line: 225, column: 11 } }, '115': { start: { line: 227, column: 2 }, end: { line: 237, column: 3 } }, '116': { start: { line: 228, column: 4 }, end: { line: 228, column: 33 } }, '117': { start: { line: 229, column: 4 }, end: { line: 229, column: 30 } }, '118': { start: { line: 230, column: 4 }, end: { line: 232, column: 11 } }, '119': { start: { line: 231, column: 6 }, end: { line: 231, column: 31 } }, '120': { start: { line: 234, column: 4 }, end: { line: 234, column: 32 } }, '121': { start: { line: 235, column: 4 }, end: { line: 235, column: 30 } }, '122': { start: { line: 236, column: 4 }, end: { line: 236, column: 32 } }, '123': { start: { line: 238, column: 19 }, end: { line: 240, column: 9 } }, '124': { start: { line: 239, column: 4 }, end: { line: 239, column: 21 } }, '125': { start: { line: 241, column: 2 }, end: { line: 255, column: 12 } }, '126': { start: { line: 242, column: 4 }, end: { line: 242, column: 33 } }, '127': { start: { line: 243, column: 4 }, end: { line: 243, column: 32 } }, '128': { start: { line: 244, column: 4 }, end: { line: 250, column: 5 } }, '129': { start: { line: 245, column: 6 }, end: { line: 245, column: 31 } }, '130': { start: { line: 246, column: 6 }, end: { line: 246, column: 35 } }, '131': { start: { line: 248, column: 6 }, end: { line: 248, column: 32 } }, '132': { start: { line: 249, column: 6 }, end: { line: 249, column: 34 } }, '133': { start: { line: 251, column: 4 }, end: { line: 254, column: 20 } }, '134': { start: { line: 252, column: 6 }, end: { line: 252, column: 35 } }, '135': { start: { line: 253, column: 6 }, end: { line: 253, column: 32 } }, '136': { start: { line: 258, column: 27 }, end: { line: 260, column: 1 } }, '137': { start: { line: 259, column: 2 }, end: { line: 259, column: 43 } }, '138': { start: { line: 264, column: 22 }, end: { line: 264, column: 28 } }, '139': { start: { line: 267, column: 2 }, end: { line: 269, column: 3 } }, '140': { start: { line: 268, column: 4 }, end: { line: 268, column: 42 } }, '141': { start: { line: 270, column: 2 }, end: { line: 270, column: 45 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 3, column: 20 }, end: { line: 3, column: 21 } }, loc: { start: { line: 3, column: 46 }, end: { line: 139, column: 1 } }, line: 3 }, '1': { name: 'HtmlFormatter', decl: { start: { line: 6, column: 11 }, end: { line: 6, column: 24 } }, loc: { start: { line: 6, column: 27 }, end: { line: 9, column: 3 } }, line: 6 }, '2': { name: 'typeFormattterErrorFormatter', decl: { start: { line: 13, column: 20 }, end: { line: 13, column: 48 } }, loc: { start: { line: 13, column: 63 }, end: { line: 15, column: 5 } }, line: 13 }, '3': { name: 'formatValue', decl: { start: { line: 18, column: 20 }, end: { line: 18, column: 31 } }, loc: { start: { line: 18, column: 48 }, end: { line: 20, column: 5 } }, line: 18 }, '4': { name: 'formatTextDiffString', decl: { start: { line: 23, column: 20 }, end: { line: 23, column: 40 } }, loc: { start: { line: 23, column: 57 }, end: { line: 38, column: 5 } }, line: 23 }, '5': { name: 'rootBegin', decl: { start: { line: 41, column: 20 }, end: { line: 41, column: 29 } }, loc: { start: { line: 41, column: 55 }, end: { line: 44, column: 5 } }, line: 41 }, '6': { name: 'rootEnd', decl: { start: { line: 47, column: 20 }, end: { line: 47, column: 27 } }, loc: { start: { line: 47, column: 37 }, end: { line: 49, column: 5 } }, line: 47 }, '7': { name: 'nodeBegin', decl: { start: { line: 52, column: 20 }, end: { line: 52, column: 29 } }, loc: { start: { line: 52, column: 69 }, end: { line: 55, column: 5 } }, line: 52 }, '8': { name: 'nodeEnd', decl: { start: { line: 58, column: 20 }, end: { line: 58, column: 27 } }, loc: { start: { line: 58, column: 37 }, end: { line: 60, column: 5 } }, line: 58 }, '9': { name: 'format_unchanged', decl: { start: { line: 67, column: 20 }, end: { line: 67, column: 36 } }, loc: { start: { line: 67, column: 59 }, end: { line: 74, column: 5 } }, line: 67 }, '10': { name: 'format_movedestination', decl: { start: { line: 77, column: 20 }, end: { line: 77, column: 42 } }, loc: { start: { line: 77, column: 65 }, end: { line: 84, column: 5 } }, line: 77 }, '11': { name: 'format_node', decl: { start: { line: 87, column: 20 }, end: { line: 87, column: 31 } }, loc: { start: { line: 87, column: 54 }, end: { line: 93, column: 5 } }, line: 87 }, '12': { name: 'format_added', decl: { start: { line: 96, column: 20 }, end: { line: 96, column: 32 } }, loc: { start: { line: 96, column: 49 }, end: { line: 100, column: 5 } }, line: 96 }, '13': { name: 'format_modified', decl: { start: { line: 103, column: 20 }, end: { line: 103, column: 35 } }, loc: { start: { line: 103, column: 52 }, end: { line: 109, column: 5 } }, line: 103 }, '14': { name: 'format_deleted', decl: { start: { line: 112, column: 20 }, end: { line: 112, column: 34 } }, loc: { start: { line: 112, column: 51 }, end: { line: 116, column: 5 } }, line: 112 }, '15': { name: 'format_moved', decl: { start: { line: 119, column: 20 }, end: { line: 119, column: 32 } }, loc: { start: { line: 119, column: 49 }, end: { line: 129, column: 5 } }, line: 119 }, '16': { name: 'format_textdiff', decl: { start: { line: 132, column: 20 }, end: { line: 132, column: 35 } }, loc: { start: { line: 132, column: 52 }, end: { line: 136, column: 5 } }, line: 132 }, '17': { name: 'htmlEscape', decl: { start: { line: 141, column: 9 }, end: { line: 141, column: 19 } }, loc: { start: { line: 141, column: 26 }, end: { line: 148, column: 1 } }, line: 141 }, '18': { name: 'jsondiffpatchHtmlFormatterAdjustArrows', decl: { start: { line: 150, column: 28 }, end: { line: 150, column: 66 } }, loc: { start: { line: 150, column: 76 }, end: { line: 199, column: 1 } }, line: 150 }, '19': { name: 'getElementText', decl: { start: { line: 152, column: 32 }, end: { line: 152, column: 46 } }, loc: { start: { line: 152, column: 53 }, end: { line: 156, column: 3 } }, line: 152 }, '20': { name: 'eachByQuery', decl: { start: { line: 157, column: 29 }, end: { line: 157, column: 40 } }, loc: { start: { line: 157, column: 56 }, end: { line: 162, column: 3 } }, line: 157 }, '21': { name: 'eachChildren', decl: { start: { line: 163, column: 30 }, end: { line: 163, column: 42 } }, loc: { start: { line: 163, column: 54 }, end: { line: 169, column: 3 } }, line: 163 }, '22': { name: '(anonymous_22)', decl: { start: { line: 170, column: 44 }, end: { line: 170, column: 45 } }, loc: { start: { line: 170, column: 61 }, end: { line: 198, column: 3 } }, line: 170 }, '23': { name: '(anonymous_23)', decl: { start: { line: 182, column: 28 }, end: { line: 182, column: 29 } }, loc: { start: { line: 182, column: 45 }, end: { line: 186, column: 5 } }, line: 182 }, '24': { name: 'showUnchanged', decl: { start: { line: 204, column: 36 }, end: { line: 204, column: 49 } }, loc: { start: { line: 204, column: 69 }, end: { line: 256, column: 1 } }, line: 204 }, '25': { name: '(anonymous_25)', decl: { start: { line: 230, column: 15 }, end: { line: 230, column: 16 } }, loc: { start: { line: 230, column: 27 }, end: { line: 232, column: 5 } }, line: 230 }, '26': { name: '(anonymous_26)', decl: { start: { line: 238, column: 31 }, end: { line: 238, column: 32 } }, loc: { start: { line: 238, column: 43 }, end: { line: 240, column: 3 } }, line: 238 }, '27': { name: '(anonymous_27)', decl: { start: { line: 241, column: 13 }, end: { line: 241, column: 14 } }, loc: { start: { line: 241, column: 25 }, end: { line: 255, column: 3 } }, line: 241 }, '28': { name: '(anonymous_28)', decl: { start: { line: 251, column: 15 }, end: { line: 251, column: 16 } }, loc: { start: { line: 251, column: 27 }, end: { line: 254, column: 5 } }, line: 251 }, '29': { name: 'hideUnchanged', decl: { start: { line: 258, column: 36 }, end: { line: 258, column: 49 } }, loc: { start: { line: 258, column: 63 }, end: { line: 260, column: 1 } }, line: 258 }, '30': { name: 'format', decl: { start: { line: 266, column: 16 }, end: { line: 266, column: 22 } }, loc: { start: { line: 266, column: 36 }, end: { line: 271, column: 1 } }, line: 266 } }, branchMap: { '0': { loc: { start: { line: 8, column: 57 }, end: { line: 8, column: 120 } }, type: 'binary-expr', locations: [{ start: { line: 8, column: 57 }, end: { line: 8, column: 80 } }, { start: { line: 8, column: 84 }, end: { line: 8, column: 120 } }], line: 8 }, '1': { loc: { start: { line: 42, column: 49 }, end: { line: 42, column: 109 } }, type: 'cond-expr', locations: [{ start: { line: 42, column: 60 }, end: { line: 42, column: 104 } }, { start: { line: 42, column: 107 }, end: { line: 42, column: 109 } }], line: 42 }, '2': { loc: { start: { line: 48, column: 30 }, end: { line: 48, column: 146 } }, type: 'cond-expr', locations: [{ start: { line: 48, column: 50 }, end: { line: 48, column: 141 } }, { start: { line: 48, column: 144 }, end: { line: 48, column: 146 } }], line: 48 }, '3': { loc: { start: { line: 53, column: 49 }, end: { line: 53, column: 109 } }, type: 'cond-expr', locations: [{ start: { line: 53, column: 60 }, end: { line: 53, column: 104 } }, { start: { line: 53, column: 107 }, end: { line: 53, column: 109 } }], line: 53 }, '4': { loc: { start: { line: 68, column: 6 }, end: { line: 70, column: 7 } }, type: 'if', locations: [{ start: { line: 68, column: 6 }, end: { line: 70, column: 7 } }, { start: { line: 68, column: 6 }, end: { line: 70, column: 7 } }], line: 68 }, '5': { loc: { start: { line: 78, column: 6 }, end: { line: 80, column: 7 } }, type: 'if', locations: [{ start: { line: 78, column: 6 }, end: { line: 80, column: 7 } }, { start: { line: 78, column: 6 }, end: { line: 80, column: 7 } }], line: 78 }, '6': { loc: { start: { line: 89, column: 21 }, end: { line: 89, column: 58 } }, type: 'cond-expr', locations: [{ start: { line: 89, column: 40 }, end: { line: 89, column: 47 } }, { start: { line: 89, column: 50 }, end: { line: 89, column: 58 } }], line: 89 }, '7': { loc: { start: { line: 151, column: 13 }, end: { line: 151, column: 32 } }, type: 'binary-expr', locations: [{ start: { line: 151, column: 13 }, end: { line: 151, column: 20 } }, { start: { line: 151, column: 24 }, end: { line: 151, column: 32 } }], line: 151 }, '8': { loc: { start: { line: 155, column: 11 }, end: { line: 155, column: 35 } }, type: 'binary-expr', locations: [{ start: { line: 155, column: 11 }, end: { line: 155, column: 22 } }, { start: { line: 155, column: 26 }, end: { line: 155, column: 35 } }], line: 155 }, '9': { loc: { start: { line: 183, column: 6 }, end: { line: 185, column: 7 } }, type: 'if', locations: [{ start: { line: 183, column: 6 }, end: { line: 185, column: 7 } }, { start: { line: 183, column: 6 }, end: { line: 185, column: 7 } }], line: 183 }, '10': { loc: { start: { line: 187, column: 4 }, end: { line: 189, column: 5 } }, type: 'if', locations: [{ start: { line: 187, column: 4 }, end: { line: 189, column: 5 } }, { start: { line: 187, column: 4 }, end: { line: 189, column: 5 } }], line: 187 }, '11': { loc: { start: { line: 193, column: 24 }, end: { line: 193, column: 51 } }, type: 'cond-expr', locations: [{ start: { line: 193, column: 39 }, end: { line: 193, column: 40 } }, { start: { line: 193, column: 43 }, end: { line: 193, column: 51 } }], line: 193 }, '12': { loc: { start: { line: 194, column: 18 }, end: { line: 194, column: 169 } }, type: 'cond-expr', locations: [{ start: { line: 194, column: 33 }, end: { line: 194, column: 99 } }, { start: { line: 194, column: 102 }, end: { line: 194, column: 169 } }], line: 194 }, '13': { loc: { start: { line: 205, column: 11 }, end: { line: 205, column: 32 } }, type: 'binary-expr', locations: [{ start: { line: 205, column: 11 }, end: { line: 205, column: 15 } }, { start: { line: 205, column: 19 }, end: { line: 205, column: 32 } }], line: 205 }, '14': { loc: { start: { line: 214, column: 2 }, end: { line: 216, column: 3 } }, type: 'if', locations: [{ start: { line: 214, column: 2 }, end: { line: 216, column: 3 } }, { start: { line: 214, column: 2 }, end: { line: 216, column: 3 } }], line: 214 }, '15': { loc: { start: { line: 217, column: 2 }, end: { line: 226, column: 3 } }, type: 'if', locations: [{ start: { line: 217, column: 2 }, end: { line: 226, column: 3 } }, { start: { line: 217, column: 2 }, end: { line: 226, column: 3 } }], line: 217 }, '16': { loc: { start: { line: 222, column: 4 }, end: { line: 224, column: 5 } }, type: 'if', locations: [{ start: { line: 222, column: 4 }, end: { line: 224, column: 5 } }, { start: { line: 222, column: 4 }, end: { line: 224, column: 5 } }], line: 222 }, '17': { loc: { start: { line: 227, column: 2 }, end: { line: 237, column: 3 } }, type: 'if', locations: [{ start: { line: 227, column: 2 }, end: { line: 237, column: 3 } }, { start: { line: 227, column: 2 }, end: { line: 237, column: 3 } }], line: 227 }, '18': { loc: { start: { line: 244, column: 4 }, end: { line: 250, column: 5 } }, type: 'if', locations: [{ start: { line: 244, column: 4 }, end: { line: 250, column: 5 } }, { start: { line: 244, column: 4 }, end: { line: 250, column: 5 } }], line: 244 }, '19': { loc: { start: { line: 267, column: 2 }, end: { line: 269, column: 3 } }, type: 'if', locations: [{ start: { line: 267, column: 2 }, end: { line: 269, column: 3 } }, { start: { line: 267, column: 2 }, end: { line: 269, column: 3 } }], line: 267 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, '73': 0, '74': 0, '75': 0, '76': 0, '77': 0, '78': 0, '79': 0, '80': 0, '81': 0, '82': 0, '83': 0, '84': 0, '85': 0, '86': 0, '87': 0, '88': 0, '89': 0, '90': 0, '91': 0, '92': 0, '93': 0, '94': 0, '95': 0, '96': 0, '97': 0, '98': 0, '99': 0, '100': 0, '101': 0, '102': 0, '103': 0, '104': 0, '105': 0, '106': 0, '107': 0, '108': 0, '109': 0, '110': 0, '111': 0, '112': 0, '113': 0, '114': 0, '115': 0, '116': 0, '117': 0, '118': 0, '119': 0, '120': 0, '121': 0, '122': 0, '123': 0, '124': 0, '125': 0, '126': 0, '127': 0, '128': 0, '129': 0, '130': 0, '131': 0, '132': 0, '133': 0, '134': 0, '135': 0, '136': 0, '137': 0, '138': 0, '139': 0, '140': 0, '141': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0], '8': [0, 0], '9': [0, 0], '10': [0, 0], '11': [0, 0], '12': [0, 0], '13': [0, 0], '14': [0, 0], '15': [0, 0], '16': [0, 0], '17': [0, 0], '18': [0, 0], '19': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var HtmlFormatter = (cov_ajsxhvv7o.s[0]++, function (_BaseFormatter) {
  cov_ajsxhvv7o.f[0]++;cov_ajsxhvv7o.s[1]++;inherits$1(HtmlFormatter, _BaseFormatter);function HtmlFormatter() {
    cov_ajsxhvv7o.f[1]++;cov_ajsxhvv7o.s[2]++;classCallCheck$1(this, HtmlFormatter);cov_ajsxhvv7o.s[3]++;return possibleConstructorReturn$1(this, ((cov_ajsxhvv7o.b[0][0]++, HtmlFormatter.__proto__) || (cov_ajsxhvv7o.b[0][1]++, Object.getPrototypeOf(HtmlFormatter))).apply(this, arguments));
  }cov_ajsxhvv7o.s[4]++;createClass$1(HtmlFormatter, [{ key: 'typeFormattterErrorFormatter', value: function typeFormattterErrorFormatter(context, err) {
      cov_ajsxhvv7o.f[2]++;cov_ajsxhvv7o.s[5]++;context.out('<pre class="jsondiffpatch-error">' + err + '</pre>');
    } }, { key: 'formatValue', value: function formatValue(context, value) {
      cov_ajsxhvv7o.f[3]++;cov_ajsxhvv7o.s[6]++;context.out('<pre>' + htmlEscape(JSON.stringify(value, null, 2)) + '</pre>');
    } }, { key: 'formatTextDiffString', value: function formatTextDiffString(context, value) {
      cov_ajsxhvv7o.f[4]++;var lines = (cov_ajsxhvv7o.s[7]++, this.parseTextDiff(value));cov_ajsxhvv7o.s[8]++;context.out('<ul class="jsondiffpatch-textdiff">');cov_ajsxhvv7o.s[9]++;for (var i = 0, l = lines.length; i < l; i++) {
        var line = (cov_ajsxhvv7o.s[10]++, lines[i]);cov_ajsxhvv7o.s[11]++;context.out('<li><div class="jsondiffpatch-textdiff-location">' + ('<span class="jsondiffpatch-textdiff-line-number">' + line.location.line + '</span><span class="jsondiffpatch-textdiff-char">' + line.location.chr + '</span></div><div class="jsondiffpatch-textdiff-line">'));var pieces = (cov_ajsxhvv7o.s[12]++, line.pieces);cov_ajsxhvv7o.s[13]++;for (var pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
          /* global unescape */var piece = (cov_ajsxhvv7o.s[14]++, pieces[pieceIndex]);cov_ajsxhvv7o.s[15]++;context.out('<span class="jsondiffpatch-textdiff-' + piece.type + '">' + htmlEscape(unescape(piece.text)) + '</span>');
        }cov_ajsxhvv7o.s[16]++;context.out('</div></li>');
      }cov_ajsxhvv7o.s[17]++;context.out('</ul>');
    } }, { key: 'rootBegin', value: function rootBegin(context, type, nodeType) {
      cov_ajsxhvv7o.f[5]++;var nodeClass = (cov_ajsxhvv7o.s[18]++, 'jsondiffpatch-' + type + (nodeType ? (cov_ajsxhvv7o.b[1][0]++, ' jsondiffpatch-child-node-type-' + nodeType) : (cov_ajsxhvv7o.b[1][1]++, '')));cov_ajsxhvv7o.s[19]++;context.out('<div class="jsondiffpatch-delta ' + nodeClass + '">');
    } }, { key: 'rootEnd', value: function rootEnd(context) {
      cov_ajsxhvv7o.f[6]++;cov_ajsxhvv7o.s[20]++;context.out('</div>' + (context.hasArrows ? (cov_ajsxhvv7o.b[2][0]++, '<script type="text/javascript">setTimeout(' + (adjustArrows.toString() + ',10);</script>')) : (cov_ajsxhvv7o.b[2][1]++, '')));
    } }, { key: 'nodeBegin', value: function nodeBegin(context, key, leftKey, type, nodeType) {
      cov_ajsxhvv7o.f[7]++;var nodeClass = (cov_ajsxhvv7o.s[21]++, 'jsondiffpatch-' + type + (nodeType ? (cov_ajsxhvv7o.b[3][0]++, ' jsondiffpatch-child-node-type-' + nodeType) : (cov_ajsxhvv7o.b[3][1]++, '')));cov_ajsxhvv7o.s[22]++;context.out('<li class="' + nodeClass + '" data-key="' + leftKey + '">' + ('<div class="jsondiffpatch-property-name">' + leftKey + '</div>'));
    } }, { key: 'nodeEnd', value: function nodeEnd(context) {
      cov_ajsxhvv7o.f[8]++;cov_ajsxhvv7o.s[23]++;context.out('</li>');
    } /* jshint camelcase: false */ /* eslint-disable camelcase */ }, { key: 'format_unchanged', value: function format_unchanged(context, delta, left) {
      cov_ajsxhvv7o.f[9]++;cov_ajsxhvv7o.s[24]++;if (typeof left === 'undefined') {
        cov_ajsxhvv7o.b[4][0]++;cov_ajsxhvv7o.s[25]++;return;
      } else {
        cov_ajsxhvv7o.b[4][1]++;
      }cov_ajsxhvv7o.s[26]++;context.out('<div class="jsondiffpatch-value">');cov_ajsxhvv7o.s[27]++;this.formatValue(context, left);cov_ajsxhvv7o.s[28]++;context.out('</div>');
    } }, { key: 'format_movedestination', value: function format_movedestination(context, delta, left) {
      cov_ajsxhvv7o.f[10]++;cov_ajsxhvv7o.s[29]++;if (typeof left === 'undefined') {
        cov_ajsxhvv7o.b[5][0]++;cov_ajsxhvv7o.s[30]++;return;
      } else {
        cov_ajsxhvv7o.b[5][1]++;
      }cov_ajsxhvv7o.s[31]++;context.out('<div class="jsondiffpatch-value">');cov_ajsxhvv7o.s[32]++;this.formatValue(context, left);cov_ajsxhvv7o.s[33]++;context.out('</div>');
    } }, { key: 'format_node', value: function format_node(context, delta, left) {
      cov_ajsxhvv7o.f[11]++; // recurse
      var nodeType = (cov_ajsxhvv7o.s[34]++, delta._t === 'a' ? (cov_ajsxhvv7o.b[6][0]++, 'array') : (cov_ajsxhvv7o.b[6][1]++, 'object'));cov_ajsxhvv7o.s[35]++;context.out('<ul class="jsondiffpatch-node jsondiffpatch-node-type-' + nodeType + '">');cov_ajsxhvv7o.s[36]++;this.formatDeltaChildren(context, delta, left);cov_ajsxhvv7o.s[37]++;context.out('</ul>');
    } }, { key: 'format_added', value: function format_added(context, delta) {
      cov_ajsxhvv7o.f[12]++;cov_ajsxhvv7o.s[38]++;context.out('<div class="jsondiffpatch-value">');cov_ajsxhvv7o.s[39]++;this.formatValue(context, delta[0]);cov_ajsxhvv7o.s[40]++;context.out('</div>');
    } }, { key: 'format_modified', value: function format_modified(context, delta) {
      cov_ajsxhvv7o.f[13]++;cov_ajsxhvv7o.s[41]++;context.out('<div class="jsondiffpatch-value jsondiffpatch-left-value">');cov_ajsxhvv7o.s[42]++;this.formatValue(context, delta[0]);cov_ajsxhvv7o.s[43]++;context.out('</div>' + '<div class="jsondiffpatch-value jsondiffpatch-right-value">');cov_ajsxhvv7o.s[44]++;this.formatValue(context, delta[1]);cov_ajsxhvv7o.s[45]++;context.out('</div>');
    } }, { key: 'format_deleted', value: function format_deleted(context, delta) {
      cov_ajsxhvv7o.f[14]++;cov_ajsxhvv7o.s[46]++;context.out('<div class="jsondiffpatch-value">');cov_ajsxhvv7o.s[47]++;this.formatValue(context, delta[0]);cov_ajsxhvv7o.s[48]++;context.out('</div>');
    } }, { key: 'format_moved', value: function format_moved(context, delta) {
      cov_ajsxhvv7o.f[15]++;cov_ajsxhvv7o.s[49]++;context.out('<div class="jsondiffpatch-value">');cov_ajsxhvv7o.s[50]++;this.formatValue(context, delta[0]);cov_ajsxhvv7o.s[51]++;context.out('</div><div class="jsondiffpatch-moved-destination">' + delta[1] + '</div>'); // draw an SVG arrow from here to move destination
      cov_ajsxhvv7o.s[52]++;context.out( /* jshint multistr: true */'<div class="jsondiffpatch-arrow" ' + 'style="position: relative; left: -34px;">\n          <svg width="30" height="60" ' + 'style="position: absolute; display: none;">\n          <defs>\n              <marker id="markerArrow" markerWidth="8" markerHeight="8"\n                 refx="2" refy="4"\n                     orient="auto" markerUnits="userSpaceOnUse">\n                  <path d="M1,1 L1,7 L7,4 L1,1" style="fill: #339;" />\n              </marker>\n          </defs>\n          <path d="M30,0 Q-10,25 26,50"\n            style="stroke: #88f; stroke-width: 2px; fill: none; ' + 'stroke-opacity: 0.5; marker-end: url(#markerArrow);"\n          ></path>\n          </svg>\n      </div>');cov_ajsxhvv7o.s[53]++;context.hasArrows = true;
    } }, { key: 'format_textdiff', value: function format_textdiff(context, delta) {
      cov_ajsxhvv7o.f[16]++;cov_ajsxhvv7o.s[54]++;context.out('<div class="jsondiffpatch-value">');cov_ajsxhvv7o.s[55]++;this.formatTextDiffString(context, delta[0]);cov_ajsxhvv7o.s[56]++;context.out('</div>');
    } }]);cov_ajsxhvv7o.s[57]++;return HtmlFormatter;
}(BaseFormatter));function htmlEscape(text) {
  cov_ajsxhvv7o.f[17]++;var html = (cov_ajsxhvv7o.s[58]++, text);var replacements = (cov_ajsxhvv7o.s[59]++, [[/&/g, '&amp;'], [/</g, '&lt;'], [/>/g, '&gt;'], [/'/g, '&apos;'], [/"/g, '&quot;']]);cov_ajsxhvv7o.s[60]++;for (var i = 0; i < replacements.length; i++) {
    cov_ajsxhvv7o.s[61]++;html = html.replace(replacements[i][0], replacements[i][1]);
  }cov_ajsxhvv7o.s[62]++;return html;
}cov_ajsxhvv7o.s[63]++;var adjustArrows = function jsondiffpatchHtmlFormatterAdjustArrows(nodeArg) {
  cov_ajsxhvv7o.f[18]++;var node = (cov_ajsxhvv7o.s[64]++, (cov_ajsxhvv7o.b[7][0]++, nodeArg) || (cov_ajsxhvv7o.b[7][1]++, document));cov_ajsxhvv7o.s[65]++;var getElementText = function getElementText(_ref) {
    cov_ajsxhvv7o.f[19]++;var textContent = (cov_ajsxhvv7o.s[66]++, _ref.textContent),
        innerText = (cov_ajsxhvv7o.s[67]++, _ref.innerText);cov_ajsxhvv7o.s[68]++;return (cov_ajsxhvv7o.b[8][0]++, textContent) || (cov_ajsxhvv7o.b[8][1]++, innerText);
  };cov_ajsxhvv7o.s[69]++;var eachByQuery = function eachByQuery(el, query, fn) {
    cov_ajsxhvv7o.f[20]++;var elems = (cov_ajsxhvv7o.s[70]++, el.querySelectorAll(query));cov_ajsxhvv7o.s[71]++;for (var i = 0, l = elems.length; i < l; i++) {
      cov_ajsxhvv7o.s[72]++;fn(elems[i]);
    }
  };cov_ajsxhvv7o.s[73]++;var eachChildren = function eachChildren(_ref2, fn) {
    cov_ajsxhvv7o.f[21]++;var children = (cov_ajsxhvv7o.s[74]++, _ref2.children);cov_ajsxhvv7o.s[75]++;for (var i = 0, l = children.length; i < l; i++) {
      cov_ajsxhvv7o.s[76]++;fn(children[i], i);
    }
  };cov_ajsxhvv7o.s[77]++;eachByQuery(node, '.jsondiffpatch-arrow', function (_ref3) {
    cov_ajsxhvv7o.f[22]++;var parentNode = (cov_ajsxhvv7o.s[78]++, _ref3.parentNode),
        children = (cov_ajsxhvv7o.s[79]++, _ref3.children),
        style = (cov_ajsxhvv7o.s[80]++, _ref3.style);var arrowParent = (cov_ajsxhvv7o.s[81]++, parentNode);var svg = (cov_ajsxhvv7o.s[82]++, children[0]);var path = (cov_ajsxhvv7o.s[83]++, svg.children[1]);cov_ajsxhvv7o.s[84]++;svg.style.display = 'none';var destination = (cov_ajsxhvv7o.s[85]++, getElementText(arrowParent.querySelector('.jsondiffpatch-moved-destination')));var container = (cov_ajsxhvv7o.s[86]++, arrowParent.parentNode);var destinationElem = (cov_ajsxhvv7o.s[87]++, void 0);cov_ajsxhvv7o.s[88]++;eachChildren(container, function (child) {
      cov_ajsxhvv7o.f[23]++;cov_ajsxhvv7o.s[89]++;if (child.getAttribute('data-key') === destination) {
        cov_ajsxhvv7o.b[9][0]++;cov_ajsxhvv7o.s[90]++;destinationElem = child;
      } else {
        cov_ajsxhvv7o.b[9][1]++;
      }
    });cov_ajsxhvv7o.s[91]++;if (!destinationElem) {
      cov_ajsxhvv7o.b[10][0]++;cov_ajsxhvv7o.s[92]++;return;
    } else {
      cov_ajsxhvv7o.b[10][1]++;
    }cov_ajsxhvv7o.s[93]++;try {
      var distance = (cov_ajsxhvv7o.s[94]++, destinationElem.offsetTop - arrowParent.offsetTop);cov_ajsxhvv7o.s[95]++;svg.setAttribute('height', Math.abs(distance) + 6);cov_ajsxhvv7o.s[96]++;style.top = -8 + (distance > 0 ? (cov_ajsxhvv7o.b[11][0]++, 0) : (cov_ajsxhvv7o.b[11][1]++, distance)) + 'px';var curve = (cov_ajsxhvv7o.s[97]++, distance > 0 ? (cov_ajsxhvv7o.b[12][0]++, 'M30,0 Q-10,' + Math.round(distance / 2) + ' 26,' + (distance - 4)) : (cov_ajsxhvv7o.b[12][1]++, 'M30,' + -distance + ' Q-10,' + Math.round(-distance / 2) + ' 26,4'));cov_ajsxhvv7o.s[98]++;path.setAttribute('d', curve);cov_ajsxhvv7o.s[99]++;svg.style.display = '';
    } catch (err) {}
  });
}; /* jshint camelcase: true */ /* eslint-enable camelcase */cov_ajsxhvv7o.s[100]++;var showUnchanged = function showUnchanged(show, node, delay) {
  cov_ajsxhvv7o.f[24]++;var el = (cov_ajsxhvv7o.s[101]++, (cov_ajsxhvv7o.b[13][0]++, node) || (cov_ajsxhvv7o.b[13][1]++, document.body));var prefix = (cov_ajsxhvv7o.s[102]++, 'jsondiffpatch-unchanged-');var classes = (cov_ajsxhvv7o.s[103]++, { showing: prefix + 'showing', hiding: prefix + 'hiding', visible: prefix + 'visible', hidden: prefix + 'hidden' });var list = (cov_ajsxhvv7o.s[104]++, el.classList);cov_ajsxhvv7o.s[105]++;if (!list) {
    cov_ajsxhvv7o.b[14][0]++;cov_ajsxhvv7o.s[106]++;return;
  } else {
    cov_ajsxhvv7o.b[14][1]++;
  }cov_ajsxhvv7o.s[107]++;if (!delay) {
    cov_ajsxhvv7o.b[15][0]++;cov_ajsxhvv7o.s[108]++;list.remove(classes.showing);cov_ajsxhvv7o.s[109]++;list.remove(classes.hiding);cov_ajsxhvv7o.s[110]++;list.remove(classes.visible);cov_ajsxhvv7o.s[111]++;list.remove(classes.hidden);cov_ajsxhvv7o.s[112]++;if (show === false) {
      cov_ajsxhvv7o.b[16][0]++;cov_ajsxhvv7o.s[113]++;list.add(classes.hidden);
    } else {
      cov_ajsxhvv7o.b[16][1]++;
    }cov_ajsxhvv7o.s[114]++;return;
  } else {
    cov_ajsxhvv7o.b[15][1]++;
  }cov_ajsxhvv7o.s[115]++;if (show === false) {
    cov_ajsxhvv7o.b[17][0]++;cov_ajsxhvv7o.s[116]++;list.remove(classes.showing);cov_ajsxhvv7o.s[117]++;list.add(classes.visible);cov_ajsxhvv7o.s[118]++;setTimeout(function () {
      cov_ajsxhvv7o.f[25]++;cov_ajsxhvv7o.s[119]++;list.add(classes.hiding);
    }, 10);
  } else {
    cov_ajsxhvv7o.b[17][1]++;cov_ajsxhvv7o.s[120]++;list.remove(classes.hiding);cov_ajsxhvv7o.s[121]++;list.add(classes.showing);cov_ajsxhvv7o.s[122]++;list.remove(classes.hidden);
  }var intervalId = (cov_ajsxhvv7o.s[123]++, setInterval(function () {
    cov_ajsxhvv7o.f[26]++;cov_ajsxhvv7o.s[124]++;adjustArrows(el);
  }, 100));cov_ajsxhvv7o.s[125]++;setTimeout(function () {
    cov_ajsxhvv7o.f[27]++;cov_ajsxhvv7o.s[126]++;list.remove(classes.showing);cov_ajsxhvv7o.s[127]++;list.remove(classes.hiding);cov_ajsxhvv7o.s[128]++;if (show === false) {
      cov_ajsxhvv7o.b[18][0]++;cov_ajsxhvv7o.s[129]++;list.add(classes.hidden);cov_ajsxhvv7o.s[130]++;list.remove(classes.visible);
    } else {
      cov_ajsxhvv7o.b[18][1]++;cov_ajsxhvv7o.s[131]++;list.add(classes.visible);cov_ajsxhvv7o.s[132]++;list.remove(classes.hidden);
    }cov_ajsxhvv7o.s[133]++;setTimeout(function () {
      cov_ajsxhvv7o.f[28]++;cov_ajsxhvv7o.s[134]++;list.remove(classes.visible);cov_ajsxhvv7o.s[135]++;clearInterval(intervalId);
    }, delay + 400);
  }, delay);
};cov_ajsxhvv7o.s[136]++;var hideUnchanged = function hideUnchanged(node, delay) {
  cov_ajsxhvv7o.f[29]++;cov_ajsxhvv7o.s[137]++;return showUnchanged(false, node, delay);
};var defaultInstance = (cov_ajsxhvv7o.s[138]++, void 0);function format(delta, left) {
  cov_ajsxhvv7o.f[30]++;cov_ajsxhvv7o.s[139]++;if (!defaultInstance) {
    cov_ajsxhvv7o.b[19][0]++;cov_ajsxhvv7o.s[140]++;defaultInstance = new HtmlFormatter();
  } else {
    cov_ajsxhvv7o.b[19][1]++;
  }cov_ajsxhvv7o.s[141]++;return defaultInstance.format(delta, left);
}

var html = Object.freeze({
  showUnchanged: showUnchanged,
  hideUnchanged: hideUnchanged,
  default: HtmlFormatter,
  format: format
});

var cov_2nhftgaw9v = function () {
  var path = 'Y:\\repos\\jsondiffpatch\\src\\formatters\\annotated.js',
      hash = '900ce8b85fb09b078ff3cb5f67c38af61eef858d',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: 'Y:\\repos\\jsondiffpatch\\src\\formatters\\annotated.js', statementMap: { '0': { start: { line: 3, column: 25 }, end: { line: 114, column: 16 } }, '1': { start: { line: 4, column: 2 }, end: { line: 4, column: 60 } }, '2': { start: { line: 7, column: 4 }, end: { line: 7, column: 58 } }, '3': { start: { line: 9, column: 16 }, end: { line: 9, column: 148 } }, '4': { start: { line: 11, column: 4 }, end: { line: 11, column: 42 } }, '5': { start: { line: 12, column: 4 }, end: { line: 12, column: 17 } }, '6': { start: { line: 15, column: 2 }, end: { line: 112, column: 6 } }, '7': { start: { line: 18, column: 6 }, end: { line: 18, column: 162 } }, '8': { start: { line: 19, column: 6 }, end: { line: 22, column: 8 } }, '9': { start: { line: 20, column: 8 }, end: { line: 20, column: 98 } }, '10': { start: { line: 21, column: 8 }, end: { line: 21, column: 78 } }, '11': { start: { line: 23, column: 6 }, end: { line: 31, column: 8 } }, '12': { start: { line: 24, column: 8 }, end: { line: 24, column: 145 } }, '13': { start: { line: 25, column: 8 }, end: { line: 25, column: 39 } }, '14': { start: { line: 26, column: 8 }, end: { line: 26, column: 65 } }, '15': { start: { line: 27, column: 8 }, end: { line: 27, column: 26 } }, '16': { start: { line: 28, column: 8 }, end: { line: 28, column: 77 } }, '17': { start: { line: 29, column: 8 }, end: { line: 29, column: 30 } }, '18': { start: { line: 30, column: 8 }, end: { line: 30, column: 40 } }, '19': { start: { line: 36, column: 6 }, end: { line: 36, column: 76 } }, '20': { start: { line: 41, column: 18 }, end: { line: 41, column: 43 } }, '21': { start: { line: 42, column: 6 }, end: { line: 42, column: 57 } }, '22': { start: { line: 43, column: 6 }, end: { line: 52, column: 7 } }, '23': { start: { line: 44, column: 19 }, end: { line: 44, column: 27 } }, '24': { start: { line: 45, column: 8 }, end: { line: 45, column: 283 } }, '25': { start: { line: 46, column: 21 }, end: { line: 46, column: 32 } }, '26': { start: { line: 47, column: 8 }, end: { line: 50, column: 9 } }, '27': { start: { line: 48, column: 22 }, end: { line: 48, column: 40 } }, '28': { start: { line: 49, column: 10 }, end: { line: 49, column: 107 } }, '29': { start: { line: 51, column: 8 }, end: { line: 51, column: 35 } }, '30': { start: { line: 53, column: 6 }, end: { line: 53, column: 27 } }, '31': { start: { line: 58, column: 6 }, end: { line: 58, column: 67 } }, '32': { start: { line: 59, column: 6 }, end: { line: 62, column: 7 } }, '33': { start: { line: 60, column: 8 }, end: { line: 60, column: 25 } }, '34': { start: { line: 61, column: 8 }, end: { line: 61, column: 25 } }, '35': { start: { line: 63, column: 6 }, end: { line: 65, column: 7 } }, '36': { start: { line: 64, column: 8 }, end: { line: 64, column: 87 } }, '37': { start: { line: 70, column: 6 }, end: { line: 73, column: 7 } }, '38': { start: { line: 71, column: 8 }, end: { line: 71, column: 27 } }, '39': { start: { line: 72, column: 8 }, end: { line: 72, column: 25 } }, '40': { start: { line: 74, column: 6 }, end: { line: 74, column: 30 } }, '41': { start: { line: 79, column: 6 }, end: { line: 79, column: 48 } }, '42': { start: { line: 80, column: 6 }, end: { line: 82, column: 7 } }, '43': { start: { line: 81, column: 8 }, end: { line: 81, column: 25 } }, '44': { start: { line: 83, column: 6 }, end: { line: 85, column: 7 } }, '45': { start: { line: 84, column: 8 }, end: { line: 84, column: 87 } }, '46': { start: { line: 90, column: 6 }, end: { line: 92, column: 7 } }, '47': { start: { line: 91, column: 8 }, end: { line: 91, column: 27 } }, '48': { start: { line: 93, column: 6 }, end: { line: 93, column: 45 } }, '49': { start: { line: 110, column: 6 }, end: { line: 110, column: 53 } }, '50': { start: { line: 113, column: 2 }, end: { line: 113, column: 28 } }, '51': { start: { line: 118, column: 23 }, end: { line: 120, column: 1 } }, '52': { start: { line: 119, column: 2 }, end: { line: 119, column: 76 } }, '53': { start: { line: 122, column: 23 }, end: { line: 160, column: 1 } }, '54': { start: { line: 124, column: 23 }, end: { line: 124, column: 49 } }, '55': { start: { line: 125, column: 4 }, end: { line: 127, column: 5 } }, '56': { start: { line: 126, column: 6 }, end: { line: 126, column: 40 } }, '57': { start: { line: 128, column: 4 }, end: { line: 130, column: 5 } }, '58': { start: { line: 129, column: 6 }, end: { line: 129, column: 57 } }, '59': { start: { line: 131, column: 4 }, end: { line: 131, column: 70 } }, '60': { start: { line: 134, column: 23 }, end: { line: 134, column: 64 } }, '61': { start: { line: 135, column: 4 }, end: { line: 137, column: 5 } }, '62': { start: { line: 136, column: 6 }, end: { line: 136, column: 43 } }, '63': { start: { line: 138, column: 4 }, end: { line: 140, column: 5 } }, '64': { start: { line: 139, column: 6 }, end: { line: 139, column: 57 } }, '65': { start: { line: 141, column: 4 }, end: { line: 141, column: 73 } }, '66': { start: { line: 144, column: 23 }, end: { line: 144, column: 60 } }, '67': { start: { line: 145, column: 4 }, end: { line: 147, column: 5 } }, '68': { start: { line: 146, column: 6 }, end: { line: 146, column: 43 } }, '69': { start: { line: 148, column: 4 }, end: { line: 150, column: 5 } }, '70': { start: { line: 149, column: 6 }, end: { line: 149, column: 54 } }, '71': { start: { line: 151, column: 4 }, end: { line: 151, column: 73 } }, '72': { start: { line: 154, column: 4 }, end: { line: 154, column: 202 } }, '73': { start: { line: 157, column: 19 }, end: { line: 157, column: 155 } }, '74': { start: { line: 158, column: 4 }, end: { line: 158, column: 155 } }, '75': { start: { line: 162, column: 22 }, end: { line: 174, column: 1 } }, '76': { start: { line: 163, column: 18 }, end: { line: 163, column: 42 } }, '77': { start: { line: 164, column: 18 }, end: { line: 164, column: 45 } }, '78': { start: { line: 165, column: 17 }, end: { line: 165, column: 98 } }, '79': { start: { line: 166, column: 13 }, end: { line: 166, column: 43 } }, '80': { start: { line: 167, column: 2 }, end: { line: 170, column: 3 } }, '81': { start: { line: 169, column: 4 }, end: { line: 169, column: 49 } }, '82': { start: { line: 171, column: 2 }, end: { line: 171, column: 19 } }, '83': { start: { line: 172, column: 2 }, end: { line: 172, column: 30 } }, '84': { start: { line: 173, column: 2 }, end: { line: 173, column: 21 } }, '85': { start: { line: 177, column: 0 }, end: { line: 177, column: 60 } }, '86': { start: { line: 178, column: 0 }, end: { line: 178, column: 63 } }, '87': { start: { line: 179, column: 0 }, end: { line: 179, column: 62 } }, '88': { start: { line: 180, column: 0 }, end: { line: 180, column: 60 } }, '89': { start: { line: 181, column: 0 }, end: { line: 181, column: 63 } }, '90': { start: { line: 188, column: 22 }, end: { line: 188, column: 28 } }, '91': { start: { line: 191, column: 2 }, end: { line: 193, column: 3 } }, '92': { start: { line: 192, column: 4 }, end: { line: 192, column: 47 } }, '93': { start: { line: 194, column: 2 }, end: { line: 194, column: 45 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 3, column: 25 }, end: { line: 3, column: 26 } }, loc: { start: { line: 3, column: 51 }, end: { line: 114, column: 1 } }, line: 3 }, '1': { name: 'AnnotatedFormatter', decl: { start: { line: 6, column: 11 }, end: { line: 6, column: 29 } }, loc: { start: { line: 6, column: 32 }, end: { line: 13, column: 3 } }, line: 6 }, '2': { name: 'prepareContext', decl: { start: { line: 17, column: 20 }, end: { line: 17, column: 34 } }, loc: { start: { line: 17, column: 44 }, end: { line: 32, column: 5 } }, line: 17 }, '3': { name: '(anonymous_3)', decl: { start: { line: 19, column: 23 }, end: { line: 19, column: 24 } }, loc: { start: { line: 19, column: 41 }, end: { line: 22, column: 7 } }, line: 19 }, '4': { name: '(anonymous_4)', decl: { start: { line: 23, column: 20 }, end: { line: 23, column: 21 } }, loc: { start: { line: 23, column: 46 }, end: { line: 31, column: 7 } }, line: 23 }, '5': { name: 'typeFormattterErrorFormatter', decl: { start: { line: 35, column: 20 }, end: { line: 35, column: 48 } }, loc: { start: { line: 35, column: 63 }, end: { line: 37, column: 5 } }, line: 35 }, '6': { name: 'formatTextDiffString', decl: { start: { line: 40, column: 20 }, end: { line: 40, column: 40 } }, loc: { start: { line: 40, column: 57 }, end: { line: 54, column: 5 } }, line: 40 }, '7': { name: 'rootBegin', decl: { start: { line: 57, column: 20 }, end: { line: 57, column: 29 } }, loc: { start: { line: 57, column: 55 }, end: { line: 66, column: 5 } }, line: 57 }, '8': { name: 'rootEnd', decl: { start: { line: 69, column: 20 }, end: { line: 69, column: 27 } }, loc: { start: { line: 69, column: 43 }, end: { line: 75, column: 5 } }, line: 69 }, '9': { name: 'nodeBegin', decl: { start: { line: 78, column: 20 }, end: { line: 78, column: 29 } }, loc: { start: { line: 78, column: 69 }, end: { line: 86, column: 5 } }, line: 78 }, '10': { name: 'nodeEnd', decl: { start: { line: 89, column: 20 }, end: { line: 89, column: 27 } }, loc: { start: { line: 89, column: 75 }, end: { line: 94, column: 5 } }, line: 89 }, '11': { name: 'format_unchanged', decl: { start: { line: 102, column: 20 }, end: { line: 102, column: 36 } }, loc: { start: { line: 102, column: 39 }, end: { line: 102, column: 41 } }, line: 102 }, '12': { name: 'format_movedestination', decl: { start: { line: 105, column: 20 }, end: { line: 105, column: 42 } }, loc: { start: { line: 105, column: 45 }, end: { line: 105, column: 47 } }, line: 105 }, '13': { name: 'format_node', decl: { start: { line: 108, column: 20 }, end: { line: 108, column: 31 } }, loc: { start: { line: 108, column: 54 }, end: { line: 111, column: 5 } }, line: 108 }, '14': { name: 'wrapPropertyName', decl: { start: { line: 118, column: 32 }, end: { line: 118, column: 48 } }, loc: { start: { line: 118, column: 55 }, end: { line: 120, column: 1 } }, line: 118 }, '15': { name: 'added', decl: { start: { line: 123, column: 18 }, end: { line: 123, column: 23 } }, loc: { start: { line: 123, column: 51 }, end: { line: 132, column: 3 } }, line: 123 }, '16': { name: 'modified', decl: { start: { line: 133, column: 21 }, end: { line: 133, column: 29 } }, loc: { start: { line: 133, column: 57 }, end: { line: 142, column: 3 } }, line: 133 }, '17': { name: 'deleted', decl: { start: { line: 143, column: 20 }, end: { line: 143, column: 27 } }, loc: { start: { line: 143, column: 55 }, end: { line: 152, column: 3 } }, line: 143 }, '18': { name: 'moved', decl: { start: { line: 153, column: 18 }, end: { line: 153, column: 23 } }, loc: { start: { line: 153, column: 51 }, end: { line: 155, column: 3 } }, line: 153 }, '19': { name: 'textdiff', decl: { start: { line: 156, column: 21 }, end: { line: 156, column: 29 } }, loc: { start: { line: 156, column: 57 }, end: { line: 159, column: 3 } }, line: 156 }, '20': { name: 'formatAnyChange', decl: { start: { line: 162, column: 31 }, end: { line: 162, column: 46 } }, loc: { start: { line: 162, column: 63 }, end: { line: 174, column: 1 } }, line: 162 }, '21': { name: 'format', decl: { start: { line: 190, column: 16 }, end: { line: 190, column: 22 } }, loc: { start: { line: 190, column: 36 }, end: { line: 195, column: 1 } }, line: 190 } }, branchMap: { '0': { loc: { start: { line: 9, column: 62 }, end: { line: 9, column: 135 } }, type: 'binary-expr', locations: [{ start: { line: 9, column: 62 }, end: { line: 9, column: 90 } }, { start: { line: 9, column: 94 }, end: { line: 9, column: 135 } }], line: 9 }, '1': { loc: { start: { line: 18, column: 23 }, end: { line: 18, column: 116 } }, type: 'binary-expr', locations: [{ start: { line: 18, column: 23 }, end: { line: 18, column: 61 } }, { start: { line: 18, column: 65 }, end: { line: 18, column: 116 } }], line: 18 }, '2': { loc: { start: { line: 20, column: 28 }, end: { line: 20, column: 49 } }, type: 'binary-expr', locations: [{ start: { line: 20, column: 28 }, end: { line: 20, column: 44 } }, { start: { line: 20, column: 48 }, end: { line: 20, column: 49 } }], line: 20 }, '3': { loc: { start: { line: 20, column: 54 }, end: { line: 20, column: 96 } }, type: 'cond-expr', locations: [{ start: { line: 20, column: 86 }, end: { line: 20, column: 87 } }, { start: { line: 20, column: 90 }, end: { line: 20, column: 96 } }], line: 20 }, '4': { loc: { start: { line: 59, column: 6 }, end: { line: 62, column: 7 } }, type: 'if', locations: [{ start: { line: 59, column: 6 }, end: { line: 62, column: 7 } }, { start: { line: 59, column: 6 }, end: { line: 62, column: 7 } }], line: 59 }, '5': { loc: { start: { line: 63, column: 6 }, end: { line: 65, column: 7 } }, type: 'if', locations: [{ start: { line: 63, column: 6 }, end: { line: 65, column: 7 } }, { start: { line: 63, column: 6 }, end: { line: 65, column: 7 } }], line: 63 }, '6': { loc: { start: { line: 70, column: 6 }, end: { line: 73, column: 7 } }, type: 'if', locations: [{ start: { line: 70, column: 6 }, end: { line: 73, column: 7 } }, { start: { line: 70, column: 6 }, end: { line: 73, column: 7 } }], line: 70 }, '7': { loc: { start: { line: 80, column: 6 }, end: { line: 82, column: 7 } }, type: 'if', locations: [{ start: { line: 80, column: 6 }, end: { line: 82, column: 7 } }, { start: { line: 80, column: 6 }, end: { line: 82, column: 7 } }], line: 80 }, '8': { loc: { start: { line: 83, column: 6 }, end: { line: 85, column: 7 } }, type: 'if', locations: [{ start: { line: 83, column: 6 }, end: { line: 85, column: 7 } }, { start: { line: 83, column: 6 }, end: { line: 85, column: 7 } }], line: 83 }, '9': { loc: { start: { line: 90, column: 6 }, end: { line: 92, column: 7 } }, type: 'if', locations: [{ start: { line: 90, column: 6 }, end: { line: 92, column: 7 } }, { start: { line: 90, column: 6 }, end: { line: 92, column: 7 } }], line: 90 }, '10': { loc: { start: { line: 93, column: 25 }, end: { line: 93, column: 42 } }, type: 'cond-expr', locations: [{ start: { line: 93, column: 34 }, end: { line: 93, column: 36 } }, { start: { line: 93, column: 39 }, end: { line: 93, column: 42 } }], line: 93 }, '11': { loc: { start: { line: 125, column: 4 }, end: { line: 127, column: 5 } }, type: 'if', locations: [{ start: { line: 125, column: 4 }, end: { line: 127, column: 5 } }, { start: { line: 125, column: 4 }, end: { line: 127, column: 5 } }], line: 125 }, '12': { loc: { start: { line: 128, column: 4 }, end: { line: 130, column: 5 } }, type: 'if', locations: [{ start: { line: 128, column: 4 }, end: { line: 130, column: 5 } }, { start: { line: 128, column: 4 }, end: { line: 130, column: 5 } }], line: 128 }, '13': { loc: { start: { line: 135, column: 4 }, end: { line: 137, column: 5 } }, type: 'if', locations: [{ start: { line: 135, column: 4 }, end: { line: 137, column: 5 } }, { start: { line: 135, column: 4 }, end: { line: 137, column: 5 } }], line: 135 }, '14': { loc: { start: { line: 138, column: 4 }, end: { line: 140, column: 5 } }, type: 'if', locations: [{ start: { line: 138, column: 4 }, end: { line: 140, column: 5 } }, { start: { line: 138, column: 4 }, end: { line: 140, column: 5 } }], line: 138 }, '15': { loc: { start: { line: 145, column: 4 }, end: { line: 147, column: 5 } }, type: 'if', locations: [{ start: { line: 145, column: 4 }, end: { line: 147, column: 5 } }, { start: { line: 145, column: 4 }, end: { line: 147, column: 5 } }], line: 145 }, '16': { loc: { start: { line: 148, column: 4 }, end: { line: 150, column: 5 } }, type: 'if', locations: [{ start: { line: 148, column: 4 }, end: { line: 150, column: 5 } }, { start: { line: 148, column: 4 }, end: { line: 150, column: 5 } }], line: 148 }, '17': { loc: { start: { line: 157, column: 19 }, end: { line: 157, column: 155 } }, type: 'cond-expr', locations: [{ start: { line: 157, column: 52 }, end: { line: 157, column: 54 } }, { start: { line: 157, column: 57 }, end: { line: 157, column: 155 } }], line: 157 }, '18': { loc: { start: { line: 157, column: 57 }, end: { line: 157, column: 155 } }, type: 'cond-expr', locations: [{ start: { line: 157, column: 87 }, end: { line: 157, column: 109 } }, { start: { line: 157, column: 112 }, end: { line: 157, column: 155 } }], line: 157 }, '19': { loc: { start: { line: 165, column: 17 }, end: { line: 165, column: 98 } }, type: 'binary-expr', locations: [{ start: { line: 165, column: 17 }, end: { line: 165, column: 26 } }, { start: { line: 165, column: 30 }, end: { line: 165, column: 98 } }], line: 165 }, '20': { loc: { start: { line: 167, column: 2 }, end: { line: 170, column: 3 } }, type: 'if', locations: [{ start: { line: 167, column: 2 }, end: { line: 170, column: 3 } }, { start: { line: 167, column: 2 }, end: { line: 170, column: 3 } }], line: 167 }, '21': { loc: { start: { line: 191, column: 2 }, end: { line: 193, column: 3 } }, type: 'if', locations: [{ start: { line: 191, column: 2 }, end: { line: 193, column: 3 } }, { start: { line: 191, column: 2 }, end: { line: 193, column: 3 } }], line: 191 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, '73': 0, '74': 0, '75': 0, '76': 0, '77': 0, '78': 0, '79': 0, '80': 0, '81': 0, '82': 0, '83': 0, '84': 0, '85': 0, '86': 0, '87': 0, '88': 0, '89': 0, '90': 0, '91': 0, '92': 0, '93': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0], '8': [0, 0], '9': [0, 0], '10': [0, 0], '11': [0, 0], '12': [0, 0], '13': [0, 0], '14': [0, 0], '15': [0, 0], '16': [0, 0], '17': [0, 0], '18': [0, 0], '19': [0, 0], '20': [0, 0], '21': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var AnnotatedFormatter = (cov_2nhftgaw9v.s[0]++, function (_BaseFormatter) {
  cov_2nhftgaw9v.f[0]++;cov_2nhftgaw9v.s[1]++;inherits$1(AnnotatedFormatter, _BaseFormatter);function AnnotatedFormatter() {
    cov_2nhftgaw9v.f[1]++;cov_2nhftgaw9v.s[2]++;classCallCheck$1(this, AnnotatedFormatter);var _this = (cov_2nhftgaw9v.s[3]++, possibleConstructorReturn$1(this, ((cov_2nhftgaw9v.b[0][0]++, AnnotatedFormatter.__proto__) || (cov_2nhftgaw9v.b[0][1]++, Object.getPrototypeOf(AnnotatedFormatter))).call(this)));cov_2nhftgaw9v.s[4]++;_this.includeMoveDestinations = false;cov_2nhftgaw9v.s[5]++;return _this;
  }cov_2nhftgaw9v.s[6]++;createClass$1(AnnotatedFormatter, [{ key: 'prepareContext', value: function prepareContext(context) {
      cov_2nhftgaw9v.f[2]++;cov_2nhftgaw9v.s[7]++;get$1((cov_2nhftgaw9v.b[1][0]++, AnnotatedFormatter.prototype.__proto__) || (cov_2nhftgaw9v.b[1][1]++, Object.getPrototypeOf(AnnotatedFormatter.prototype)), 'prepareContext', this).call(this, context);cov_2nhftgaw9v.s[8]++;context.indent = function (levels) {
        cov_2nhftgaw9v.f[3]++;cov_2nhftgaw9v.s[9]++;this.indentLevel = ((cov_2nhftgaw9v.b[2][0]++, this.indentLevel) || (cov_2nhftgaw9v.b[2][1]++, 0)) + (typeof levels === 'undefined' ? (cov_2nhftgaw9v.b[3][0]++, 1) : (cov_2nhftgaw9v.b[3][1]++, levels));cov_2nhftgaw9v.s[10]++;this.indentPad = new Array(this.indentLevel + 1).join('&nbsp;&nbsp;');
      };cov_2nhftgaw9v.s[11]++;context.row = function (json, htmlNote) {
        cov_2nhftgaw9v.f[4]++;cov_2nhftgaw9v.s[12]++;context.out('<tr><td style="white-space: nowrap;">' + '<pre class="jsondiffpatch-annotated-indent"' + ' style="display: inline-block">');cov_2nhftgaw9v.s[13]++;context.out(context.indentPad);cov_2nhftgaw9v.s[14]++;context.out('</pre><pre style="display: inline-block">');cov_2nhftgaw9v.s[15]++;context.out(json);cov_2nhftgaw9v.s[16]++;context.out('</pre></td><td class="jsondiffpatch-delta-note"><div>');cov_2nhftgaw9v.s[17]++;context.out(htmlNote);cov_2nhftgaw9v.s[18]++;context.out('</div></td></tr>');
      };
    } }, { key: 'typeFormattterErrorFormatter', value: function typeFormattterErrorFormatter(context, err) {
      cov_2nhftgaw9v.f[5]++;cov_2nhftgaw9v.s[19]++;context.row('', '<pre class="jsondiffpatch-error">' + err + '</pre>');
    } }, { key: 'formatTextDiffString', value: function formatTextDiffString(context, value) {
      cov_2nhftgaw9v.f[6]++;var lines = (cov_2nhftgaw9v.s[20]++, this.parseTextDiff(value));cov_2nhftgaw9v.s[21]++;context.out('<ul class="jsondiffpatch-textdiff">');cov_2nhftgaw9v.s[22]++;for (var i = 0, l = lines.length; i < l; i++) {
        var line = (cov_2nhftgaw9v.s[23]++, lines[i]);cov_2nhftgaw9v.s[24]++;context.out('<li><div class="jsondiffpatch-textdiff-location">' + ('<span class="jsondiffpatch-textdiff-line-number">' + line.location.line + '</span><span class="jsondiffpatch-textdiff-char">' + line.location.chr + '</span></div><div class="jsondiffpatch-textdiff-line">'));var pieces = (cov_2nhftgaw9v.s[25]++, line.pieces);cov_2nhftgaw9v.s[26]++;for (var pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
          var piece = (cov_2nhftgaw9v.s[27]++, pieces[pieceIndex]);cov_2nhftgaw9v.s[28]++;context.out('<span class="jsondiffpatch-textdiff-' + piece.type + '">' + piece.text + '</span>');
        }cov_2nhftgaw9v.s[29]++;context.out('</div></li>');
      }cov_2nhftgaw9v.s[30]++;context.out('</ul>');
    } }, { key: 'rootBegin', value: function rootBegin(context, type, nodeType) {
      cov_2nhftgaw9v.f[7]++;cov_2nhftgaw9v.s[31]++;context.out('<table class="jsondiffpatch-annotated-delta">');cov_2nhftgaw9v.s[32]++;if (type === 'node') {
        cov_2nhftgaw9v.b[4][0]++;cov_2nhftgaw9v.s[33]++;context.row('{');cov_2nhftgaw9v.s[34]++;context.indent();
      } else {
        cov_2nhftgaw9v.b[4][1]++;
      }cov_2nhftgaw9v.s[35]++;if (nodeType === 'array') {
        cov_2nhftgaw9v.b[5][0]++;cov_2nhftgaw9v.s[36]++;context.row('"_t": "a",', 'Array delta (member names indicate array indices)');
      } else {
        cov_2nhftgaw9v.b[5][1]++;
      }
    } }, { key: 'rootEnd', value: function rootEnd(context, type) {
      cov_2nhftgaw9v.f[8]++;cov_2nhftgaw9v.s[37]++;if (type === 'node') {
        cov_2nhftgaw9v.b[6][0]++;cov_2nhftgaw9v.s[38]++;context.indent(-1);cov_2nhftgaw9v.s[39]++;context.row('}');
      } else {
        cov_2nhftgaw9v.b[6][1]++;
      }cov_2nhftgaw9v.s[40]++;context.out('</table>');
    } }, { key: 'nodeBegin', value: function nodeBegin(context, key, leftKey, type, nodeType) {
      cov_2nhftgaw9v.f[9]++;cov_2nhftgaw9v.s[41]++;context.row('&quot;' + key + '&quot;: {');cov_2nhftgaw9v.s[42]++;if (type === 'node') {
        cov_2nhftgaw9v.b[7][0]++;cov_2nhftgaw9v.s[43]++;context.indent();
      } else {
        cov_2nhftgaw9v.b[7][1]++;
      }cov_2nhftgaw9v.s[44]++;if (nodeType === 'array') {
        cov_2nhftgaw9v.b[8][0]++;cov_2nhftgaw9v.s[45]++;context.row('"_t": "a",', 'Array delta (member names indicate array indices)');
      } else {
        cov_2nhftgaw9v.b[8][1]++;
      }
    } }, { key: 'nodeEnd', value: function nodeEnd(context, key, leftKey, type, nodeType, isLast) {
      cov_2nhftgaw9v.f[10]++;cov_2nhftgaw9v.s[46]++;if (type === 'node') {
        cov_2nhftgaw9v.b[9][0]++;cov_2nhftgaw9v.s[47]++;context.indent(-1);
      } else {
        cov_2nhftgaw9v.b[9][1]++;
      }cov_2nhftgaw9v.s[48]++;context.row('}' + (isLast ? (cov_2nhftgaw9v.b[10][0]++, '') : (cov_2nhftgaw9v.b[10][1]++, ',')));
    } /* jshint camelcase: false */ /* eslint-disable camelcase */ }, { key: 'format_unchanged', value: function format_unchanged() {
      cov_2nhftgaw9v.f[11]++;
    } }, { key: 'format_movedestination', value: function format_movedestination() {
      cov_2nhftgaw9v.f[12]++;
    } }, { key: 'format_node', value: function format_node(context, delta, left) {
      cov_2nhftgaw9v.f[13]++;cov_2nhftgaw9v.s[49]++; // recurse
      this.formatDeltaChildren(context, delta, left);
    } }]);cov_2nhftgaw9v.s[50]++;return AnnotatedFormatter;
}(BaseFormatter)); /* eslint-enable camelcase */cov_2nhftgaw9v.s[51]++;var wrapPropertyName = function wrapPropertyName(name) {
  cov_2nhftgaw9v.f[14]++;cov_2nhftgaw9v.s[52]++;return '<pre style="display:inline-block">&quot;' + name + '&quot;</pre>';
};var deltaAnnotations = (cov_2nhftgaw9v.s[53]++, { added: function added(delta, left, key, leftKey) {
    cov_2nhftgaw9v.f[15]++;var formatLegend = (cov_2nhftgaw9v.s[54]++, ' <pre>([newValue])</pre>');cov_2nhftgaw9v.s[55]++;if (typeof leftKey === 'undefined') {
      cov_2nhftgaw9v.b[11][0]++;cov_2nhftgaw9v.s[56]++;return 'new value' + formatLegend;
    } else {
      cov_2nhftgaw9v.b[11][1]++;
    }cov_2nhftgaw9v.s[57]++;if (typeof leftKey === 'number') {
      cov_2nhftgaw9v.b[12][0]++;cov_2nhftgaw9v.s[58]++;return 'insert at index ' + leftKey + formatLegend;
    } else {
      cov_2nhftgaw9v.b[12][1]++;
    }cov_2nhftgaw9v.s[59]++;return 'add property ' + wrapPropertyName(leftKey) + formatLegend;
  }, modified: function modified(delta, left, key, leftKey) {
    cov_2nhftgaw9v.f[16]++;var formatLegend = (cov_2nhftgaw9v.s[60]++, ' <pre>([previousValue, newValue])</pre>');cov_2nhftgaw9v.s[61]++;if (typeof leftKey === 'undefined') {
      cov_2nhftgaw9v.b[13][0]++;cov_2nhftgaw9v.s[62]++;return 'modify value' + formatLegend;
    } else {
      cov_2nhftgaw9v.b[13][1]++;
    }cov_2nhftgaw9v.s[63]++;if (typeof leftKey === 'number') {
      cov_2nhftgaw9v.b[14][0]++;cov_2nhftgaw9v.s[64]++;return 'modify at index ' + leftKey + formatLegend;
    } else {
      cov_2nhftgaw9v.b[14][1]++;
    }cov_2nhftgaw9v.s[65]++;return 'modify property ' + wrapPropertyName(leftKey) + formatLegend;
  }, deleted: function deleted(delta, left, key, leftKey) {
    cov_2nhftgaw9v.f[17]++;var formatLegend = (cov_2nhftgaw9v.s[66]++, ' <pre>([previousValue, 0, 0])</pre>');cov_2nhftgaw9v.s[67]++;if (typeof leftKey === 'undefined') {
      cov_2nhftgaw9v.b[15][0]++;cov_2nhftgaw9v.s[68]++;return 'delete value' + formatLegend;
    } else {
      cov_2nhftgaw9v.b[15][1]++;
    }cov_2nhftgaw9v.s[69]++;if (typeof leftKey === 'number') {
      cov_2nhftgaw9v.b[16][0]++;cov_2nhftgaw9v.s[70]++;return 'remove index ' + leftKey + formatLegend;
    } else {
      cov_2nhftgaw9v.b[16][1]++;
    }cov_2nhftgaw9v.s[71]++;return 'delete property ' + wrapPropertyName(leftKey) + formatLegend;
  }, moved: function moved(delta, left, key, leftKey) {
    cov_2nhftgaw9v.f[18]++;cov_2nhftgaw9v.s[72]++;return 'move from <span title="(position to remove at original state)">' + ('index ' + leftKey + '</span> to <span title="(position to insert at final') + (' state)">index ' + delta[1] + '</span>');
  }, textdiff: function textdiff(delta, left, key, leftKey) {
    cov_2nhftgaw9v.f[19]++;var location = (cov_2nhftgaw9v.s[73]++, typeof leftKey === 'undefined' ? (cov_2nhftgaw9v.b[17][0]++, '') : (cov_2nhftgaw9v.b[17][1]++, typeof leftKey === 'number' ? (cov_2nhftgaw9v.b[18][0]++, ' at index ' + leftKey) : (cov_2nhftgaw9v.b[18][1]++, ' at property ' + wrapPropertyName(leftKey))));cov_2nhftgaw9v.s[74]++;return 'text diff' + location + ', format is <a href="https://code.google.com/' + 'p/google-diff-match-patch/wiki/Unidiff">a variation of Unidiff</a>';
  } });cov_2nhftgaw9v.s[75]++;var formatAnyChange = function formatAnyChange(context, delta) {
  cov_2nhftgaw9v.f[20]++;var deltaType = (cov_2nhftgaw9v.s[76]++, this.getDeltaType(delta));var annotator = (cov_2nhftgaw9v.s[77]++, deltaAnnotations[deltaType]);var htmlNote = (cov_2nhftgaw9v.s[78]++, (cov_2nhftgaw9v.b[19][0]++, annotator) && (cov_2nhftgaw9v.b[19][1]++, annotator.apply(annotator, Array.prototype.slice.call(arguments, 1))));var json = (cov_2nhftgaw9v.s[79]++, JSON.stringify(delta, null, 2));cov_2nhftgaw9v.s[80]++;if (deltaType === 'textdiff') {
    cov_2nhftgaw9v.b[20][0]++;cov_2nhftgaw9v.s[81]++; // split text diffs lines
    json = json.split('\\n').join('\\n"+\n   "');
  } else {
    cov_2nhftgaw9v.b[20][1]++;
  }cov_2nhftgaw9v.s[82]++;context.indent();cov_2nhftgaw9v.s[83]++;context.row(json, htmlNote);cov_2nhftgaw9v.s[84]++;context.indent(-1);
}; /* eslint-disable camelcase */cov_2nhftgaw9v.s[85]++;AnnotatedFormatter.prototype.format_added = formatAnyChange;cov_2nhftgaw9v.s[86]++;AnnotatedFormatter.prototype.format_modified = formatAnyChange;cov_2nhftgaw9v.s[87]++;AnnotatedFormatter.prototype.format_deleted = formatAnyChange;cov_2nhftgaw9v.s[88]++;AnnotatedFormatter.prototype.format_moved = formatAnyChange;cov_2nhftgaw9v.s[89]++;AnnotatedFormatter.prototype.format_textdiff = formatAnyChange; /* eslint-enable camelcase */ /* jshint camelcase: true */var defaultInstance$1 = (cov_2nhftgaw9v.s[90]++, void 0);function format$1(delta, left) {
  cov_2nhftgaw9v.f[21]++;cov_2nhftgaw9v.s[91]++;if (!defaultInstance$1) {
    cov_2nhftgaw9v.b[21][0]++;cov_2nhftgaw9v.s[92]++;defaultInstance$1 = new AnnotatedFormatter();
  } else {
    cov_2nhftgaw9v.b[21][1]++;
  }cov_2nhftgaw9v.s[93]++;return defaultInstance$1.format(delta, left);
}

var annotated = Object.freeze({
  default: AnnotatedFormatter,
  format: format$1
});

var cov_38z1qjrsb = function () {
  var path = 'Y:\\repos\\jsondiffpatch\\src\\formatters\\jsonpatch.js',
      hash = 'bd5181351705206aa6e68f76a913dd5916bf488d',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: 'Y:\\repos\\jsondiffpatch\\src\\formatters\\jsonpatch.js', statementMap: { '0': { start: { line: 3, column: 17 }, end: { line: 8, column: 1 } }, '1': { start: { line: 10, column: 20 }, end: { line: 128, column: 16 } }, '2': { start: { line: 11, column: 2 }, end: { line: 11, column: 55 } }, '3': { start: { line: 14, column: 4 }, end: { line: 14, column: 53 } }, '4': { start: { line: 16, column: 16 }, end: { line: 16, column: 138 } }, '5': { start: { line: 18, column: 4 }, end: { line: 18, column: 41 } }, '6': { start: { line: 19, column: 4 }, end: { line: 19, column: 17 } }, '7': { start: { line: 22, column: 2 }, end: { line: 126, column: 6 } }, '8': { start: { line: 25, column: 6 }, end: { line: 25, column: 152 } }, '9': { start: { line: 26, column: 6 }, end: { line: 26, column: 26 } }, '10': { start: { line: 27, column: 6 }, end: { line: 27, column: 24 } }, '11': { start: { line: 28, column: 6 }, end: { line: 40, column: 8 } }, '12': { start: { line: 29, column: 17 }, end: { line: 29, column: 23 } }, '13': { start: { line: 30, column: 20 }, end: { line: 30, column: 29 } }, '14': { start: { line: 32, column: 18 }, end: { line: 35, column: 9 } }, '15': { start: { line: 36, column: 8 }, end: { line: 38, column: 9 } }, '16': { start: { line: 37, column: 10 }, end: { line: 37, column: 28 } }, '17': { start: { line: 39, column: 8 }, end: { line: 39, column: 30 } }, '18': { start: { line: 42, column: 6 }, end: { line: 46, column: 8 } }, '19': { start: { line: 43, column: 22 }, end: { line: 43, column: 30 } }, '20': { start: { line: 44, column: 19 }, end: { line: 44, column: 37 } }, '21': { start: { line: 45, column: 8 }, end: { line: 45, column: 77 } }, '22': { start: { line: 48, column: 6 }, end: { line: 50, column: 8 } }, '23': { start: { line: 49, column: 8 }, end: { line: 49, column: 41 } }, '24': { start: { line: 55, column: 6 }, end: { line: 55, column: 36 } }, '25': { start: { line: 66, column: 17 }, end: { line: 66, column: 26 } }, '26': { start: { line: 68, column: 6 }, end: { line: 68, column: 25 } }, '27': { start: { line: 73, column: 17 }, end: { line: 73, column: 27 } }, '28': { start: { line: 75, column: 6 }, end: { line: 75, column: 17 } }, '29': { start: { line: 90, column: 6 }, end: { line: 90, column: 53 } }, '30': { start: { line: 95, column: 6 }, end: { line: 95, column: 69 } }, '31': { start: { line: 100, column: 6 }, end: { line: 100, column: 73 } }, '32': { start: { line: 105, column: 6 }, end: { line: 105, column: 55 } }, '33': { start: { line: 110, column: 15 }, end: { line: 110, column: 23 } }, '34': { start: { line: 111, column: 6 }, end: { line: 111, column: 29 } }, '35': { start: { line: 116, column: 6 }, end: { line: 116, column: 41 } }, '36': { start: { line: 121, column: 20 }, end: { line: 121, column: 22 } }, '37': { start: { line: 122, column: 6 }, end: { line: 122, column: 35 } }, '38': { start: { line: 123, column: 6 }, end: { line: 123, column: 41 } }, '39': { start: { line: 124, column: 6 }, end: { line: 124, column: 28 } }, '40': { start: { line: 127, column: 2 }, end: { line: 127, column: 23 } }, '41': { start: { line: 135, column: 11 }, end: { line: 137, column: 1 } }, '42': { start: { line: 136, column: 2 }, end: { line: 136, column: 29 } }, '43': { start: { line: 139, column: 13 }, end: { line: 142, column: 1 } }, '44': { start: { line: 140, column: 2 }, end: { line: 140, column: 17 } }, '45': { start: { line: 141, column: 2 }, end: { line: 141, column: 13 } }, '46': { start: { line: 144, column: 25 }, end: { line: 152, column: 1 } }, '47': { start: { line: 145, column: 14 }, end: { line: 145, column: 34 } }, '48': { start: { line: 146, column: 14 }, end: { line: 146, column: 34 } }, '49': { start: { line: 147, column: 2 }, end: { line: 151, column: 3 } }, '50': { start: { line: 148, column: 4 }, end: { line: 148, column: 25 } }, '51': { start: { line: 150, column: 4 }, end: { line: 150, column: 13 } }, '52': { start: { line: 154, column: 27 }, end: { line: 164, column: 1 } }, '53': { start: { line: 155, column: 2 }, end: { line: 163, column: 5 } }, '54': { start: { line: 156, column: 17 }, end: { line: 156, column: 34 } }, '55': { start: { line: 157, column: 17 }, end: { line: 157, column: 34 } }, '56': { start: { line: 158, column: 4 }, end: { line: 162, column: 5 } }, '57': { start: { line: 159, column: 6 }, end: { line: 159, column: 43 } }, '58': { start: { line: 161, column: 6 }, end: { line: 161, column: 60 } }, '59': { start: { line: 166, column: 16 }, end: { line: 175, column: 1 } }, '60': { start: { line: 167, column: 13 }, end: { line: 167, column: 15 } }, '61': { start: { line: 168, column: 14 }, end: { line: 168, column: 16 } }, '62': { start: { line: 170, column: 2 }, end: { line: 173, column: 5 } }, '63': { start: { line: 171, column: 15 }, end: { line: 171, column: 38 } }, '64': { start: { line: 172, column: 4 }, end: { line: 172, column: 18 } }, '65': { start: { line: 174, column: 2 }, end: { line: 174, column: 23 } }, '66': { start: { line: 177, column: 26 }, end: { line: 184, column: 1 } }, '67': { start: { line: 178, column: 19 }, end: { line: 181, column: 3 } }, '68': { start: { line: 179, column: 13 }, end: { line: 179, column: 21 } }, '69': { start: { line: 180, column: 4 }, end: { line: 180, column: 27 } }, '70': { start: { line: 182, column: 26 }, end: { line: 182, column: 66 } }, '71': { start: { line: 183, column: 2 }, end: { line: 183, column: 27 } }, '72': { start: { line: 186, column: 17 }, end: { line: 194, column: 1 } }, '73': { start: { line: 187, column: 29 }, end: { line: 187, column: 67 } }, '74': { start: { line: 188, column: 30 }, end: { line: 188, column: 81 } }, '75': { start: { line: 189, column: 18 }, end: { line: 189, column: 42 } }, '76': { start: { line: 190, column: 17 }, end: { line: 190, column: 41 } }, '77': { start: { line: 192, column: 25 }, end: { line: 192, column: 56 } }, '78': { start: { line: 193, column: 2 }, end: { line: 193, column: 43 } }, '79': { start: { line: 196, column: 22 }, end: { line: 196, column: 28 } }, '80': { start: { line: 198, column: 20 }, end: { line: 203, column: 1 } }, '81': { start: { line: 199, column: 2 }, end: { line: 201, column: 3 } }, '82': { start: { line: 200, column: 4 }, end: { line: 200, column: 42 } }, '83': { start: { line: 202, column: 2 }, end: { line: 202, column: 57 } }, '84': { start: { line: 205, column: 17 }, end: { line: 207, column: 1 } }, '85': { start: { line: 206, column: 2 }, end: { line: 206, column: 35 } } }, fnMap: { '0': { name: '(anonymous_0)', decl: { start: { line: 10, column: 20 }, end: { line: 10, column: 21 } }, loc: { start: { line: 10, column: 46 }, end: { line: 128, column: 1 } }, line: 10 }, '1': { name: 'JSONFormatter', decl: { start: { line: 13, column: 11 }, end: { line: 13, column: 24 } }, loc: { start: { line: 13, column: 27 }, end: { line: 20, column: 3 } }, line: 13 }, '2': { name: 'prepareContext', decl: { start: { line: 24, column: 20 }, end: { line: 24, column: 34 } }, loc: { start: { line: 24, column: 44 }, end: { line: 51, column: 5 } }, line: 24 }, '3': { name: '(anonymous_3)', decl: { start: { line: 28, column: 30 }, end: { line: 28, column: 31 } }, loc: { start: { line: 28, column: 45 }, end: { line: 40, column: 7 } }, line: 28 }, '4': { name: '(anonymous_4)', decl: { start: { line: 42, column: 27 }, end: { line: 42, column: 28 } }, loc: { start: { line: 42, column: 41 }, end: { line: 46, column: 7 } }, line: 42 }, '5': { name: '(anonymous_5)', decl: { start: { line: 48, column: 28 }, end: { line: 48, column: 29 } }, loc: { start: { line: 48, column: 40 }, end: { line: 50, column: 7 } }, line: 48 }, '6': { name: 'typeFormattterErrorFormatter', decl: { start: { line: 54, column: 20 }, end: { line: 54, column: 48 } }, loc: { start: { line: 54, column: 63 }, end: { line: 56, column: 5 } }, line: 54 }, '7': { name: 'rootBegin', decl: { start: { line: 59, column: 20 }, end: { line: 59, column: 29 } }, loc: { start: { line: 59, column: 32 }, end: { line: 59, column: 34 } }, line: 59 }, '8': { name: 'rootEnd', decl: { start: { line: 62, column: 20 }, end: { line: 62, column: 27 } }, loc: { start: { line: 62, column: 30 }, end: { line: 62, column: 32 } }, line: 62 }, '9': { name: 'nodeBegin', decl: { start: { line: 65, column: 20 }, end: { line: 65, column: 29 } }, loc: { start: { line: 65, column: 50 }, end: { line: 69, column: 5 } }, line: 65 }, '10': { name: 'nodeEnd', decl: { start: { line: 72, column: 20 }, end: { line: 72, column: 27 } }, loc: { start: { line: 72, column: 35 }, end: { line: 76, column: 5 } }, line: 72 }, '11': { name: 'format_unchanged', decl: { start: { line: 83, column: 20 }, end: { line: 83, column: 36 } }, loc: { start: { line: 83, column: 39 }, end: { line: 83, column: 41 } }, line: 83 }, '12': { name: 'format_movedestination', decl: { start: { line: 86, column: 20 }, end: { line: 86, column: 42 } }, loc: { start: { line: 86, column: 45 }, end: { line: 86, column: 47 } }, line: 86 }, '13': { name: 'format_node', decl: { start: { line: 89, column: 20 }, end: { line: 89, column: 31 } }, loc: { start: { line: 89, column: 54 }, end: { line: 91, column: 5 } }, line: 89 }, '14': { name: 'format_added', decl: { start: { line: 94, column: 20 }, end: { line: 94, column: 32 } }, loc: { start: { line: 94, column: 49 }, end: { line: 96, column: 5 } }, line: 94 }, '15': { name: 'format_modified', decl: { start: { line: 99, column: 20 }, end: { line: 99, column: 35 } }, loc: { start: { line: 99, column: 52 }, end: { line: 101, column: 5 } }, line: 99 }, '16': { name: 'format_deleted', decl: { start: { line: 104, column: 20 }, end: { line: 104, column: 34 } }, loc: { start: { line: 104, column: 44 }, end: { line: 106, column: 5 } }, line: 104 }, '17': { name: 'format_moved', decl: { start: { line: 109, column: 20 }, end: { line: 109, column: 32 } }, loc: { start: { line: 109, column: 49 }, end: { line: 112, column: 5 } }, line: 109 }, '18': { name: 'format_textdiff', decl: { start: { line: 115, column: 20 }, end: { line: 115, column: 35 } }, loc: { start: { line: 115, column: 38 }, end: { line: 117, column: 5 } }, line: 115 }, '19': { name: 'format', decl: { start: { line: 120, column: 20 }, end: { line: 120, column: 26 } }, loc: { start: { line: 120, column: 40 }, end: { line: 125, column: 5 } }, line: 120 }, '20': { name: 'last', decl: { start: { line: 135, column: 20 }, end: { line: 135, column: 24 } }, loc: { start: { line: 135, column: 30 }, end: { line: 137, column: 1 } }, line: 135 }, '21': { name: 'sortBy', decl: { start: { line: 139, column: 22 }, end: { line: 139, column: 28 } }, loc: { start: { line: 139, column: 40 }, end: { line: 142, column: 1 } }, line: 139 }, '22': { name: 'compareByIndexDesc', decl: { start: { line: 144, column: 34 }, end: { line: 144, column: 52 } }, loc: { start: { line: 144, column: 69 }, end: { line: 152, column: 1 } }, line: 144 }, '23': { name: 'opsByDescendingOrder', decl: { start: { line: 154, column: 36 }, end: { line: 154, column: 56 } }, loc: { start: { line: 154, column: 68 }, end: { line: 164, column: 1 } }, line: 154 }, '24': { name: '(anonymous_24)', decl: { start: { line: 155, column: 27 }, end: { line: 155, column: 28 } }, loc: { start: { line: 155, column: 43 }, end: { line: 163, column: 3 } }, line: 155 }, '25': { name: 'partition', decl: { start: { line: 166, column: 25 }, end: { line: 166, column: 34 } }, loc: { start: { line: 166, column: 46 }, end: { line: 175, column: 1 } }, line: 166 }, '26': { name: '(anonymous_26)', decl: { start: { line: 170, column: 14 }, end: { line: 170, column: 15 } }, loc: { start: { line: 170, column: 28 }, end: { line: 173, column: 3 } }, line: 170 }, '27': { name: 'partitionRemovedOps', decl: { start: { line: 177, column: 35 }, end: { line: 177, column: 54 } }, loc: { start: { line: 177, column: 74 }, end: { line: 184, column: 1 } }, line: 177 }, '28': { name: 'isRemoveOp', decl: { start: { line: 178, column: 28 }, end: { line: 178, column: 38 } }, loc: { start: { line: 178, column: 46 }, end: { line: 181, column: 3 } }, line: 178 }, '29': { name: 'reorderOps', decl: { start: { line: 186, column: 26 }, end: { line: 186, column: 36 } }, loc: { start: { line: 186, column: 56 }, end: { line: 194, column: 1 } }, line: 186 }, '30': { name: 'format', decl: { start: { line: 198, column: 29 }, end: { line: 198, column: 35 } }, loc: { start: { line: 198, column: 49 }, end: { line: 203, column: 1 } }, line: 198 }, '31': { name: 'log', decl: { start: { line: 205, column: 26 }, end: { line: 205, column: 29 } }, loc: { start: { line: 205, column: 43 }, end: { line: 207, column: 1 } }, line: 205 } }, branchMap: { '0': { loc: { start: { line: 16, column: 62 }, end: { line: 16, column: 125 } }, type: 'binary-expr', locations: [{ start: { line: 16, column: 62 }, end: { line: 16, column: 85 } }, { start: { line: 16, column: 89 }, end: { line: 16, column: 125 } }], line: 16 }, '1': { loc: { start: { line: 25, column: 23 }, end: { line: 25, column: 106 } }, type: 'binary-expr', locations: [{ start: { line: 25, column: 23 }, end: { line: 25, column: 56 } }, { start: { line: 25, column: 60 }, end: { line: 25, column: 106 } }], line: 25 }, '2': { loc: { start: { line: 36, column: 8 }, end: { line: 38, column: 9 } }, type: 'if', locations: [{ start: { line: 36, column: 8 }, end: { line: 38, column: 9 } }, { start: { line: 36, column: 8 }, end: { line: 38, column: 9 } }], line: 36 }, '3': { loc: { start: { line: 147, column: 2 }, end: { line: 151, column: 3 } }, type: 'if', locations: [{ start: { line: 147, column: 2 }, end: { line: 151, column: 3 } }, { start: { line: 147, column: 2 }, end: { line: 151, column: 3 } }], line: 147 }, '4': { loc: { start: { line: 147, column: 8 }, end: { line: 147, column: 36 } }, type: 'binary-expr', locations: [{ start: { line: 147, column: 8 }, end: { line: 147, column: 20 } }, { start: { line: 147, column: 24 }, end: { line: 147, column: 36 } }], line: 147 }, '5': { loc: { start: { line: 158, column: 4 }, end: { line: 162, column: 5 } }, type: 'if', locations: [{ start: { line: 158, column: 4 }, end: { line: 162, column: 5 } }, { start: { line: 158, column: 4 }, end: { line: 162, column: 5 } }], line: 158 }, '6': { loc: { start: { line: 171, column: 15 }, end: { line: 171, column: 38 } }, type: 'cond-expr', locations: [{ start: { line: 171, column: 26 }, end: { line: 171, column: 30 } }, { start: { line: 171, column: 33 }, end: { line: 171, column: 38 } }], line: 171 }, '7': { loc: { start: { line: 199, column: 2 }, end: { line: 201, column: 3 } }, type: 'if', locations: [{ start: { line: 199, column: 2 }, end: { line: 201, column: 3 } }, { start: { line: 199, column: 2 }, end: { line: 201, column: 3 } }], line: 199 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, '73': 0, '74': 0, '75': 0, '76': 0, '77': 0, '78': 0, '79': 0, '80': 0, '81': 0, '82': 0, '83': 0, '84': 0, '85': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var OPERATIONS = (cov_38z1qjrsb.s[0]++, { add: 'add', remove: 'remove', replace: 'replace', move: 'move' });var JSONFormatter = (cov_38z1qjrsb.s[1]++, function (_BaseFormatter) {
  cov_38z1qjrsb.f[0]++;cov_38z1qjrsb.s[2]++;inherits$1(JSONFormatter, _BaseFormatter);function JSONFormatter() {
    cov_38z1qjrsb.f[1]++;cov_38z1qjrsb.s[3]++;classCallCheck$1(this, JSONFormatter);var _this = (cov_38z1qjrsb.s[4]++, possibleConstructorReturn$1(this, ((cov_38z1qjrsb.b[0][0]++, JSONFormatter.__proto__) || (cov_38z1qjrsb.b[0][1]++, Object.getPrototypeOf(JSONFormatter))).call(this)));cov_38z1qjrsb.s[5]++;_this.includeMoveDestinations = true;cov_38z1qjrsb.s[6]++;return _this;
  }cov_38z1qjrsb.s[7]++;createClass$1(JSONFormatter, [{ key: 'prepareContext', value: function prepareContext(context) {
      cov_38z1qjrsb.f[2]++;cov_38z1qjrsb.s[8]++;get$1((cov_38z1qjrsb.b[1][0]++, JSONFormatter.prototype.__proto__) || (cov_38z1qjrsb.b[1][1]++, Object.getPrototypeOf(JSONFormatter.prototype)), 'prepareContext', this).call(this, context);cov_38z1qjrsb.s[9]++;context.result = [];cov_38z1qjrsb.s[10]++;context.path = [];cov_38z1qjrsb.s[11]++;context.pushCurrentOp = function (obj) {
        cov_38z1qjrsb.f[3]++;var op = (cov_38z1qjrsb.s[12]++, obj.op),
            value = (cov_38z1qjrsb.s[13]++, obj.value);var val = (cov_38z1qjrsb.s[14]++, { op: op, path: this.currentPath() });cov_38z1qjrsb.s[15]++;if (typeof value !== 'undefined') {
          cov_38z1qjrsb.b[2][0]++;cov_38z1qjrsb.s[16]++;val.value = value;
        } else {
          cov_38z1qjrsb.b[2][1]++;
        }cov_38z1qjrsb.s[17]++;this.result.push(val);
      };cov_38z1qjrsb.s[18]++;context.pushMoveOp = function (to) {
        cov_38z1qjrsb.f[4]++;var finalTo = (cov_38z1qjrsb.s[19]++, '/' + to);var from = (cov_38z1qjrsb.s[20]++, this.currentPath());cov_38z1qjrsb.s[21]++;this.result.push({ op: OPERATIONS.move, from: from, path: finalTo });
      };cov_38z1qjrsb.s[22]++;context.currentPath = function () {
        cov_38z1qjrsb.f[5]++;cov_38z1qjrsb.s[23]++;return '/' + this.path.join('/');
      };
    } }, { key: 'typeFormattterErrorFormatter', value: function typeFormattterErrorFormatter(context, err) {
      cov_38z1qjrsb.f[6]++;cov_38z1qjrsb.s[24]++;context.out('[ERROR] ' + err);
    } }, { key: 'rootBegin', value: function rootBegin() {
      cov_38z1qjrsb.f[7]++;
    } }, { key: 'rootEnd', value: function rootEnd() {
      cov_38z1qjrsb.f[8]++;
    } }, { key: 'nodeBegin', value: function nodeBegin(_ref, key, leftKey) {
      cov_38z1qjrsb.f[9]++;var path = (cov_38z1qjrsb.s[25]++, _ref.path);cov_38z1qjrsb.s[26]++;path.push(leftKey);
    } }, { key: 'nodeEnd', value: function nodeEnd(_ref2) {
      cov_38z1qjrsb.f[10]++;var path = (cov_38z1qjrsb.s[27]++, _ref2.path);cov_38z1qjrsb.s[28]++;path.pop();
    } /* jshint camelcase: false */ /* eslint-disable camelcase */ }, { key: 'format_unchanged', value: function format_unchanged() {
      cov_38z1qjrsb.f[11]++;
    } }, { key: 'format_movedestination', value: function format_movedestination() {
      cov_38z1qjrsb.f[12]++;
    } }, { key: 'format_node', value: function format_node(context, delta, left) {
      cov_38z1qjrsb.f[13]++;cov_38z1qjrsb.s[29]++;this.formatDeltaChildren(context, delta, left);
    } }, { key: 'format_added', value: function format_added(context, delta) {
      cov_38z1qjrsb.f[14]++;cov_38z1qjrsb.s[30]++;context.pushCurrentOp({ op: OPERATIONS.add, value: delta[0] });
    } }, { key: 'format_modified', value: function format_modified(context, delta) {
      cov_38z1qjrsb.f[15]++;cov_38z1qjrsb.s[31]++;context.pushCurrentOp({ op: OPERATIONS.replace, value: delta[1] });
    } }, { key: 'format_deleted', value: function format_deleted(context) {
      cov_38z1qjrsb.f[16]++;cov_38z1qjrsb.s[32]++;context.pushCurrentOp({ op: OPERATIONS.remove });
    } }, { key: 'format_moved', value: function format_moved(context, delta) {
      cov_38z1qjrsb.f[17]++;var to = (cov_38z1qjrsb.s[33]++, delta[1]);cov_38z1qjrsb.s[34]++;context.pushMoveOp(to);
    } }, { key: 'format_textdiff', value: function format_textdiff() {
      cov_38z1qjrsb.f[18]++;cov_38z1qjrsb.s[35]++;throw new Error('Not implemented');
    } }, { key: 'format', value: function format(delta, left) {
      cov_38z1qjrsb.f[19]++;var context = (cov_38z1qjrsb.s[36]++, {});cov_38z1qjrsb.s[37]++;this.prepareContext(context);cov_38z1qjrsb.s[38]++;this.recurse(context, delta, left);cov_38z1qjrsb.s[39]++;return context.result;
    } }]);cov_38z1qjrsb.s[40]++;return JSONFormatter;
}(BaseFormatter)); /* jshint camelcase: true */ /* eslint-enable camelcase */cov_38z1qjrsb.s[41]++;var last = function last(arr) {
  cov_38z1qjrsb.f[20]++;cov_38z1qjrsb.s[42]++;return arr[arr.length - 1];
};cov_38z1qjrsb.s[43]++;var sortBy = function sortBy(arr, pred) {
  cov_38z1qjrsb.f[21]++;cov_38z1qjrsb.s[44]++;arr.sort(pred);cov_38z1qjrsb.s[45]++;return arr;
};cov_38z1qjrsb.s[46]++;var compareByIndexDesc = function compareByIndexDesc(indexA, indexB) {
  cov_38z1qjrsb.f[22]++;var lastA = (cov_38z1qjrsb.s[47]++, parseInt(indexA, 10));var lastB = (cov_38z1qjrsb.s[48]++, parseInt(indexB, 10));cov_38z1qjrsb.s[49]++;if (!((cov_38z1qjrsb.b[4][0]++, isNaN(lastA)) || (cov_38z1qjrsb.b[4][1]++, isNaN(lastB)))) {
    cov_38z1qjrsb.b[3][0]++;cov_38z1qjrsb.s[50]++;return lastB - lastA;
  } else {
    cov_38z1qjrsb.b[3][1]++;cov_38z1qjrsb.s[51]++;return 0;
  }
};cov_38z1qjrsb.s[52]++;var opsByDescendingOrder = function opsByDescendingOrder(removeOps) {
  cov_38z1qjrsb.f[23]++;cov_38z1qjrsb.s[53]++;return sortBy(removeOps, function (a, b) {
    cov_38z1qjrsb.f[24]++;var splitA = (cov_38z1qjrsb.s[54]++, a.path.split('/'));var splitB = (cov_38z1qjrsb.s[55]++, b.path.split('/'));cov_38z1qjrsb.s[56]++;if (splitA.length !== splitB.length) {
      cov_38z1qjrsb.b[5][0]++;cov_38z1qjrsb.s[57]++;return splitA.length - splitB.length;
    } else {
      cov_38z1qjrsb.b[5][1]++;cov_38z1qjrsb.s[58]++;return compareByIndexDesc(last(splitA), last(splitB));
    }
  });
};cov_38z1qjrsb.s[59]++;var partition = function partition(arr, pred) {
  cov_38z1qjrsb.f[25]++;var left = (cov_38z1qjrsb.s[60]++, []);var right = (cov_38z1qjrsb.s[61]++, []);cov_38z1qjrsb.s[62]++;arr.forEach(function (el) {
    cov_38z1qjrsb.f[26]++;var coll = (cov_38z1qjrsb.s[63]++, pred(el) ? (cov_38z1qjrsb.b[6][0]++, left) : (cov_38z1qjrsb.b[6][1]++, right));cov_38z1qjrsb.s[64]++;coll.push(el);
  });cov_38z1qjrsb.s[65]++;return [left, right];
};cov_38z1qjrsb.s[66]++;var partitionRemovedOps = function partitionRemovedOps(jsonFormattedDiff) {
  cov_38z1qjrsb.f[27]++;cov_38z1qjrsb.s[67]++;var isRemoveOp = function isRemoveOp(_ref3) {
    cov_38z1qjrsb.f[28]++;var op = (cov_38z1qjrsb.s[68]++, _ref3.op);cov_38z1qjrsb.s[69]++;return op === 'remove';
  };var removeOpsOtherOps = (cov_38z1qjrsb.s[70]++, partition(jsonFormattedDiff, isRemoveOp));cov_38z1qjrsb.s[71]++;return removeOpsOtherOps;
};cov_38z1qjrsb.s[72]++;var reorderOps = function reorderOps(jsonFormattedDiff) {
  cov_38z1qjrsb.f[29]++;var _partitionRemovedOps = (cov_38z1qjrsb.s[73]++, partitionRemovedOps(jsonFormattedDiff)),
      _partitionRemovedOps2 = (cov_38z1qjrsb.s[74]++, slicedToArray$1(_partitionRemovedOps, 2)),
      removeOps = (cov_38z1qjrsb.s[75]++, _partitionRemovedOps2[0]),
      otherOps = (cov_38z1qjrsb.s[76]++, _partitionRemovedOps2[1]);var removeOpsReverse = (cov_38z1qjrsb.s[77]++, opsByDescendingOrder(removeOps));cov_38z1qjrsb.s[78]++;return removeOpsReverse.concat(otherOps);
};var defaultInstance$2 = (cov_38z1qjrsb.s[79]++, void 0);cov_38z1qjrsb.s[80]++;var format$2 = function format(delta, left) {
  cov_38z1qjrsb.f[30]++;cov_38z1qjrsb.s[81]++;if (!defaultInstance$2) {
    cov_38z1qjrsb.b[7][0]++;cov_38z1qjrsb.s[82]++;defaultInstance$2 = new JSONFormatter();
  } else {
    cov_38z1qjrsb.b[7][1]++;
  }cov_38z1qjrsb.s[83]++;return reorderOps(defaultInstance$2.format(delta, left));
};cov_38z1qjrsb.s[84]++;var log = function log(delta, left) {
  cov_38z1qjrsb.f[31]++;cov_38z1qjrsb.s[85]++;console.log(format$2(delta, left));
};

var jsonpatch = Object.freeze({
  default: JSONFormatter,
  format: format$2,
  log: log
});

var cov_hhdvnst1s = function () {
  var path = 'Y:\\repos\\jsondiffpatch\\src\\formatters\\console.js',
      hash = 'b6e6849835d19d2fd9dd0afec976e66d0345400a',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: 'Y:\\repos\\jsondiffpatch\\src\\formatters\\console.js', statementMap: { '0': { start: { line: 5, column: 2 }, end: { line: 11, column: 4 } }, '1': { start: { line: 6, column: 4 }, end: { line: 8, column: 5 } }, '2': { start: { line: 7, column: 6 }, end: { line: 7, column: 35 } }, '3': { start: { line: 10, column: 4 }, end: { line: 10, column: 16 } }, '4': { start: { line: 14, column: 13 }, end: { line: 22, column: 1 } }, '5': { start: { line: 24, column: 23 }, end: { line: 205, column: 16 } }, '6': { start: { line: 25, column: 2 }, end: { line: 25, column: 58 } }, '7': { start: { line: 28, column: 4 }, end: { line: 28, column: 56 } }, '8': { start: { line: 30, column: 16 }, end: { line: 30, column: 144 } }, '9': { start: { line: 32, column: 4 }, end: { line: 32, column: 42 } }, '10': { start: { line: 33, column: 4 }, end: { line: 33, column: 17 } }, '11': { start: { line: 36, column: 2 }, end: { line: 203, column: 6 } }, '12': { start: { line: 39, column: 6 }, end: { line: 39, column: 158 } }, '13': { start: { line: 40, column: 6 }, end: { line: 44, column: 8 } }, '14': { start: { line: 41, column: 8 }, end: { line: 41, column: 98 } }, '15': { start: { line: 42, column: 8 }, end: { line: 42, column: 68 } }, '16': { start: { line: 43, column: 8 }, end: { line: 43, column: 23 } }, '17': { start: { line: 45, column: 6 }, end: { line: 47, column: 8 } }, '18': { start: { line: 46, column: 8 }, end: { line: 46, column: 56 } }, '19': { start: { line: 48, column: 6 }, end: { line: 61, column: 8 } }, '20': { start: { line: 49, column: 8 }, end: { line: 51, column: 9 } }, '21': { start: { line: 50, column: 10 }, end: { line: 50, column: 41 } }, '22': { start: { line: 53, column: 8 }, end: { line: 60, column: 9 } }, '23': { start: { line: 54, column: 22 }, end: { line: 54, column: 41 } }, '24': { start: { line: 55, column: 21 }, end: { line: 55, column: 62 } }, '25': { start: { line: 56, column: 10 }, end: { line: 58, column: 11 } }, '26': { start: { line: 57, column: 12 }, end: { line: 57, column: 39 } }, '27': { start: { line: 59, column: 10 }, end: { line: 59, column: 33 } }, '28': { start: { line: 62, column: 6 }, end: { line: 65, column: 8 } }, '29': { start: { line: 63, column: 8 }, end: { line: 63, column: 38 } }, '30': { start: { line: 64, column: 8 }, end: { line: 64, column: 34 } }, '31': { start: { line: 66, column: 6 }, end: { line: 69, column: 8 } }, '32': { start: { line: 67, column: 8 }, end: { line: 67, column: 38 } }, '33': { start: { line: 68, column: 8 }, end: { line: 68, column: 27 } }, '34': { start: { line: 74, column: 6 }, end: { line: 74, column: 38 } }, '35': { start: { line: 75, column: 6 }, end: { line: 75, column: 35 } }, '36': { start: { line: 76, column: 6 }, end: { line: 76, column: 25 } }, '37': { start: { line: 81, column: 6 }, end: { line: 81, column: 50 } }, '38': { start: { line: 86, column: 18 }, end: { line: 86, column: 43 } }, '39': { start: { line: 87, column: 6 }, end: { line: 87, column: 23 } }, '40': { start: { line: 88, column: 6 }, end: { line: 103, column: 7 } }, '41': { start: { line: 89, column: 19 }, end: { line: 89, column: 27 } }, '42': { start: { line: 90, column: 8 }, end: { line: 90, column: 47 } }, '43': { start: { line: 91, column: 8 }, end: { line: 91, column: 72 } }, '44': { start: { line: 92, column: 8 }, end: { line: 92, column: 27 } }, '45': { start: { line: 93, column: 21 }, end: { line: 93, column: 32 } }, '46': { start: { line: 94, column: 8 }, end: { line: 99, column: 9 } }, '47': { start: { line: 95, column: 22 }, end: { line: 95, column: 40 } }, '48': { start: { line: 96, column: 10 }, end: { line: 96, column: 48 } }, '49': { start: { line: 97, column: 10 }, end: { line: 97, column: 34 } }, '50': { start: { line: 98, column: 10 }, end: { line: 98, column: 29 } }, '51': { start: { line: 100, column: 8 }, end: { line: 102, column: 9 } }, '52': { start: { line: 101, column: 10 }, end: { line: 101, column: 28 } }, '53': { start: { line: 104, column: 6 }, end: { line: 104, column: 25 } }, '54': { start: { line: 109, column: 6 }, end: { line: 109, column: 38 } }, '55': { start: { line: 110, column: 6 }, end: { line: 113, column: 7 } }, '56': { start: { line: 111, column: 8 }, end: { line: 111, column: 54 } }, '57': { start: { line: 112, column: 8 }, end: { line: 112, column: 25 } }, '58': { start: { line: 118, column: 6 }, end: { line: 121, column: 7 } }, '59': { start: { line: 119, column: 8 }, end: { line: 119, column: 27 } }, '60': { start: { line: 120, column: 8 }, end: { line: 120, column: 54 } }, '61': { start: { line: 122, column: 6 }, end: { line: 122, column: 25 } }, '62': { start: { line: 127, column: 6 }, end: { line: 127, column: 38 } }, '63': { start: { line: 128, column: 6 }, end: { line: 128, column: 34 } }, '64': { start: { line: 129, column: 6 }, end: { line: 132, column: 7 } }, '65': { start: { line: 130, column: 8 }, end: { line: 130, column: 54 } }, '66': { start: { line: 131, column: 8 }, end: { line: 131, column: 25 } }, '67': { start: { line: 137, column: 6 }, end: { line: 140, column: 7 } }, '68': { start: { line: 138, column: 8 }, end: { line: 138, column: 27 } }, '69': { start: { line: 139, column: 8 }, end: { line: 139, column: 76 } }, '70': { start: { line: 141, column: 6 }, end: { line: 143, column: 7 } }, '71': { start: { line: 142, column: 8 }, end: { line: 142, column: 26 } }, '72': { start: { line: 144, column: 6 }, end: { line: 144, column: 25 } }, '73': { start: { line: 153, column: 6 }, end: { line: 155, column: 7 } }, '74': { start: { line: 154, column: 8 }, end: { line: 154, column: 15 } }, '75': { start: { line: 156, column: 6 }, end: { line: 156, column: 38 } }, '76': { start: { line: 161, column: 6 }, end: { line: 163, column: 7 } }, '77': { start: { line: 162, column: 8 }, end: { line: 162, column: 15 } }, '78': { start: { line: 164, column: 6 }, end: { line: 164, column: 38 } }, '79': { start: { line: 170, column: 6 }, end: { line: 170, column: 53 } }, '80': { start: { line: 175, column: 6 }, end: { line: 175, column: 42 } }, '81': { start: { line: 180, column: 6 }, end: { line: 180, column: 40 } }, '82': { start: { line: 181, column: 6 }, end: { line: 181, column: 42 } }, '83': { start: { line: 182, column: 6 }, end: { line: 182, column: 25 } }, '84': { start: { line: 183, column: 6 }, end: { line: 183, column: 26 } }, '85': { start: { line: 184, column: 6 }, end: { line: 184, column: 38 } }, '86': { start: { line: 185, column: 6 }, end: { line: 185, column: 42 } }, '87': { start: { line: 186, column: 6 }, end: { line: 186, column: 25 } }, '88': { start: { line: 191, column: 6 }, end: { line: 191, column: 42 } }, '89': { start: { line: 196, column: 6 }, end: { line: 196, column: 37 } }, '90': { start: { line: 201, column: 6 }, end: { line: 201, column: 51 } }, '91': { start: { line: 204, column: 2 }, end: { line: 204, column: 26 } }, '92': { start: { line: 213, column: 22 }, end: { line: 213, column: 28 } }, '93': { start: { line: 215, column: 20 }, end: { line: 220, column: 1 } }, '94': { start: { line: 216, column: 2 }, end: { line: 218, column: 3 } }, '95': { start: { line: 217, column: 4 }, end: { line: 217, column: 45 } }, '96': { start: { line: 219, column: 2 }, end: { line: 219, column: 45 } }, '97': { start: { line: 223, column: 2 }, end: { line: 223, column: 35 } } }, fnMap: { '0': { name: 'chalkColor', decl: { start: { line: 4, column: 9 }, end: { line: 4, column: 19 } }, loc: { start: { line: 4, column: 26 }, end: { line: 12, column: 1 } }, line: 4 }, '1': { name: '(anonymous_1)', decl: { start: { line: 5, column: 33 }, end: { line: 5, column: 34 } }, loc: { start: { line: 5, column: 45 }, end: { line: 11, column: 3 } }, line: 5 }, '2': { name: '(anonymous_2)', decl: { start: { line: 24, column: 23 }, end: { line: 24, column: 24 } }, loc: { start: { line: 24, column: 49 }, end: { line: 205, column: 1 } }, line: 24 }, '3': { name: 'ConsoleFormatter', decl: { start: { line: 27, column: 11 }, end: { line: 27, column: 27 } }, loc: { start: { line: 27, column: 30 }, end: { line: 34, column: 3 } }, line: 27 }, '4': { name: 'prepareContext', decl: { start: { line: 38, column: 20 }, end: { line: 38, column: 34 } }, loc: { start: { line: 38, column: 44 }, end: { line: 70, column: 5 } }, line: 38 }, '5': { name: '(anonymous_5)', decl: { start: { line: 40, column: 23 }, end: { line: 40, column: 24 } }, loc: { start: { line: 40, column: 41 }, end: { line: 44, column: 7 } }, line: 40 }, '6': { name: '(anonymous_6)', decl: { start: { line: 45, column: 24 }, end: { line: 45, column: 25 } }, loc: { start: { line: 45, column: 36 }, end: { line: 47, column: 7 } }, line: 45 }, '7': { name: '(anonymous_7)', decl: { start: { line: 48, column: 20 }, end: { line: 48, column: 21 } }, loc: { start: { line: 48, column: 32 }, end: { line: 61, column: 7 } }, line: 48 }, '8': { name: '(anonymous_8)', decl: { start: { line: 62, column: 26 }, end: { line: 62, column: 27 } }, loc: { start: { line: 62, column: 43 }, end: { line: 65, column: 7 } }, line: 62 }, '9': { name: '(anonymous_9)', decl: { start: { line: 66, column: 25 }, end: { line: 66, column: 26 } }, loc: { start: { line: 66, column: 37 }, end: { line: 69, column: 7 } }, line: 66 }, '10': { name: 'typeFormattterErrorFormatter', decl: { start: { line: 73, column: 20 }, end: { line: 73, column: 48 } }, loc: { start: { line: 73, column: 63 }, end: { line: 77, column: 5 } }, line: 73 }, '11': { name: 'formatValue', decl: { start: { line: 80, column: 20 }, end: { line: 80, column: 31 } }, loc: { start: { line: 80, column: 48 }, end: { line: 82, column: 5 } }, line: 80 }, '12': { name: 'formatTextDiffString', decl: { start: { line: 85, column: 20 }, end: { line: 85, column: 40 } }, loc: { start: { line: 85, column: 57 }, end: { line: 105, column: 5 } }, line: 85 }, '13': { name: 'rootBegin', decl: { start: { line: 108, column: 20 }, end: { line: 108, column: 29 } }, loc: { start: { line: 108, column: 55 }, end: { line: 114, column: 5 } }, line: 108 }, '14': { name: 'rootEnd', decl: { start: { line: 117, column: 20 }, end: { line: 117, column: 27 } }, loc: { start: { line: 117, column: 53 }, end: { line: 123, column: 5 } }, line: 117 }, '15': { name: 'nodeBegin', decl: { start: { line: 126, column: 20 }, end: { line: 126, column: 29 } }, loc: { start: { line: 126, column: 69 }, end: { line: 133, column: 5 } }, line: 126 }, '16': { name: 'nodeEnd', decl: { start: { line: 136, column: 20 }, end: { line: 136, column: 27 } }, loc: { start: { line: 136, column: 75 }, end: { line: 145, column: 5 } }, line: 136 }, '17': { name: 'format_unchanged', decl: { start: { line: 152, column: 20 }, end: { line: 152, column: 36 } }, loc: { start: { line: 152, column: 59 }, end: { line: 157, column: 5 } }, line: 152 }, '18': { name: 'format_movedestination', decl: { start: { line: 160, column: 20 }, end: { line: 160, column: 42 } }, loc: { start: { line: 160, column: 65 }, end: { line: 165, column: 5 } }, line: 160 }, '19': { name: 'format_node', decl: { start: { line: 168, column: 20 }, end: { line: 168, column: 31 } }, loc: { start: { line: 168, column: 54 }, end: { line: 171, column: 5 } }, line: 168 }, '20': { name: 'format_added', decl: { start: { line: 174, column: 20 }, end: { line: 174, column: 32 } }, loc: { start: { line: 174, column: 49 }, end: { line: 176, column: 5 } }, line: 174 }, '21': { name: 'format_modified', decl: { start: { line: 179, column: 20 }, end: { line: 179, column: 35 } }, loc: { start: { line: 179, column: 52 }, end: { line: 187, column: 5 } }, line: 179 }, '22': { name: 'format_deleted', decl: { start: { line: 190, column: 20 }, end: { line: 190, column: 34 } }, loc: { start: { line: 190, column: 51 }, end: { line: 192, column: 5 } }, line: 190 }, '23': { name: 'format_moved', decl: { start: { line: 195, column: 20 }, end: { line: 195, column: 32 } }, loc: { start: { line: 195, column: 49 }, end: { line: 197, column: 5 } }, line: 195 }, '24': { name: 'format_textdiff', decl: { start: { line: 200, column: 20 }, end: { line: 200, column: 35 } }, loc: { start: { line: 200, column: 52 }, end: { line: 202, column: 5 } }, line: 200 }, '25': { name: 'format', decl: { start: { line: 215, column: 29 }, end: { line: 215, column: 35 } }, loc: { start: { line: 215, column: 49 }, end: { line: 220, column: 1 } }, line: 215 }, '26': { name: 'log', decl: { start: { line: 222, column: 16 }, end: { line: 222, column: 19 } }, loc: { start: { line: 222, column: 33 }, end: { line: 224, column: 1 } }, line: 222 } }, branchMap: { '0': { loc: { start: { line: 5, column: 9 }, end: { line: 11, column: 3 } }, type: 'binary-expr', locations: [{ start: { line: 5, column: 9 }, end: { line: 5, column: 14 } }, { start: { line: 5, column: 18 }, end: { line: 5, column: 29 } }, { start: { line: 5, column: 33 }, end: { line: 11, column: 3 } }], line: 5 }, '1': { loc: { start: { line: 30, column: 62 }, end: { line: 30, column: 131 } }, type: 'binary-expr', locations: [{ start: { line: 30, column: 62 }, end: { line: 30, column: 88 } }, { start: { line: 30, column: 92 }, end: { line: 30, column: 131 } }], line: 30 }, '2': { loc: { start: { line: 39, column: 23 }, end: { line: 39, column: 112 } }, type: 'binary-expr', locations: [{ start: { line: 39, column: 23 }, end: { line: 39, column: 59 } }, { start: { line: 39, column: 63 }, end: { line: 39, column: 112 } }], line: 39 }, '3': { loc: { start: { line: 41, column: 28 }, end: { line: 41, column: 49 } }, type: 'binary-expr', locations: [{ start: { line: 41, column: 28 }, end: { line: 41, column: 44 } }, { start: { line: 41, column: 48 }, end: { line: 41, column: 49 } }], line: 41 }, '4': { loc: { start: { line: 41, column: 54 }, end: { line: 41, column: 96 } }, type: 'cond-expr', locations: [{ start: { line: 41, column: 86 }, end: { line: 41, column: 87 } }, { start: { line: 41, column: 90 }, end: { line: 41, column: 96 } }], line: 41 }, '5': { loc: { start: { line: 46, column: 33 }, end: { line: 46, column: 53 } }, type: 'binary-expr', locations: [{ start: { line: 46, column: 33 }, end: { line: 46, column: 47 } }, { start: { line: 46, column: 51 }, end: { line: 46, column: 53 } }], line: 46 }, '6': { loc: { start: { line: 55, column: 40 }, end: { line: 55, column: 60 } }, type: 'binary-expr', locations: [{ start: { line: 55, column: 40 }, end: { line: 55, column: 54 } }, { start: { line: 55, column: 58 }, end: { line: 55, column: 60 } }], line: 55 }, '7': { loc: { start: { line: 56, column: 10 }, end: { line: 58, column: 11 } }, type: 'if', locations: [{ start: { line: 56, column: 10 }, end: { line: 58, column: 11 } }, { start: { line: 56, column: 10 }, end: { line: 58, column: 11 } }], line: 56 }, '8': { loc: { start: { line: 56, column: 14 }, end: { line: 56, column: 41 } }, type: 'binary-expr', locations: [{ start: { line: 56, column: 14 }, end: { line: 56, column: 24 } }, { start: { line: 56, column: 28 }, end: { line: 56, column: 41 } }], line: 56 }, '9': { loc: { start: { line: 63, column: 21 }, end: { line: 63, column: 37 } }, type: 'binary-expr', locations: [{ start: { line: 63, column: 21 }, end: { line: 63, column: 31 } }, { start: { line: 63, column: 35 }, end: { line: 63, column: 37 } }], line: 63 }, '10': { loc: { start: { line: 67, column: 21 }, end: { line: 67, column: 37 } }, type: 'binary-expr', locations: [{ start: { line: 67, column: 21 }, end: { line: 67, column: 31 } }, { start: { line: 67, column: 35 }, end: { line: 67, column: 37 } }], line: 67 }, '11': { loc: { start: { line: 100, column: 8 }, end: { line: 102, column: 9 } }, type: 'if', locations: [{ start: { line: 100, column: 8 }, end: { line: 102, column: 9 } }, { start: { line: 100, column: 8 }, end: { line: 102, column: 9 } }], line: 100 }, '12': { loc: { start: { line: 110, column: 6 }, end: { line: 113, column: 7 } }, type: 'if', locations: [{ start: { line: 110, column: 6 }, end: { line: 113, column: 7 } }, { start: { line: 110, column: 6 }, end: { line: 113, column: 7 } }], line: 110 }, '13': { loc: { start: { line: 111, column: 20 }, end: { line: 111, column: 52 } }, type: 'cond-expr', locations: [{ start: { line: 111, column: 43 }, end: { line: 111, column: 46 } }, { start: { line: 111, column: 49 }, end: { line: 111, column: 52 } }], line: 111 }, '14': { loc: { start: { line: 118, column: 6 }, end: { line: 121, column: 7 } }, type: 'if', locations: [{ start: { line: 118, column: 6 }, end: { line: 121, column: 7 } }, { start: { line: 118, column: 6 }, end: { line: 121, column: 7 } }], line: 118 }, '15': { loc: { start: { line: 120, column: 20 }, end: { line: 120, column: 52 } }, type: 'cond-expr', locations: [{ start: { line: 120, column: 43 }, end: { line: 120, column: 46 } }, { start: { line: 120, column: 49 }, end: { line: 120, column: 52 } }], line: 120 }, '16': { loc: { start: { line: 129, column: 6 }, end: { line: 132, column: 7 } }, type: 'if', locations: [{ start: { line: 129, column: 6 }, end: { line: 132, column: 7 } }, { start: { line: 129, column: 6 }, end: { line: 132, column: 7 } }], line: 129 }, '17': { loc: { start: { line: 130, column: 20 }, end: { line: 130, column: 52 } }, type: 'cond-expr', locations: [{ start: { line: 130, column: 43 }, end: { line: 130, column: 46 } }, { start: { line: 130, column: 49 }, end: { line: 130, column: 52 } }], line: 130 }, '18': { loc: { start: { line: 137, column: 6 }, end: { line: 140, column: 7 } }, type: 'if', locations: [{ start: { line: 137, column: 6 }, end: { line: 140, column: 7 } }, { start: { line: 137, column: 6 }, end: { line: 140, column: 7 } }], line: 137 }, '19': { loc: { start: { line: 139, column: 20 }, end: { line: 139, column: 74 } }, type: 'cond-expr', locations: [{ start: { line: 139, column: 43 }, end: { line: 139, column: 46 } }, { start: { line: 139, column: 49 }, end: { line: 139, column: 74 } }], line: 139 }, '20': { loc: { start: { line: 139, column: 56 }, end: { line: 139, column: 73 } }, type: 'cond-expr', locations: [{ start: { line: 139, column: 65 }, end: { line: 139, column: 67 } }, { start: { line: 139, column: 70 }, end: { line: 139, column: 73 } }], line: 139 }, '21': { loc: { start: { line: 141, column: 6 }, end: { line: 143, column: 7 } }, type: 'if', locations: [{ start: { line: 141, column: 6 }, end: { line: 143, column: 7 } }, { start: { line: 141, column: 6 }, end: { line: 143, column: 7 } }], line: 141 }, '22': { loc: { start: { line: 153, column: 6 }, end: { line: 155, column: 7 } }, type: 'if', locations: [{ start: { line: 153, column: 6 }, end: { line: 155, column: 7 } }, { start: { line: 153, column: 6 }, end: { line: 155, column: 7 } }], line: 153 }, '23': { loc: { start: { line: 161, column: 6 }, end: { line: 163, column: 7 } }, type: 'if', locations: [{ start: { line: 161, column: 6 }, end: { line: 163, column: 7 } }, { start: { line: 161, column: 6 }, end: { line: 163, column: 7 } }], line: 161 }, '24': { loc: { start: { line: 216, column: 2 }, end: { line: 218, column: 3 } }, type: 'if', locations: [{ start: { line: 216, column: 2 }, end: { line: 218, column: 3 } }, { start: { line: 216, column: 2 }, end: { line: 218, column: 3 } }], line: 216 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0, '27': 0, '28': 0, '29': 0, '30': 0, '31': 0, '32': 0, '33': 0, '34': 0, '35': 0, '36': 0, '37': 0, '38': 0, '39': 0, '40': 0, '41': 0, '42': 0, '43': 0, '44': 0, '45': 0, '46': 0, '47': 0, '48': 0, '49': 0, '50': 0, '51': 0, '52': 0, '53': 0, '54': 0, '55': 0, '56': 0, '57': 0, '58': 0, '59': 0, '60': 0, '61': 0, '62': 0, '63': 0, '64': 0, '65': 0, '66': 0, '67': 0, '68': 0, '69': 0, '70': 0, '71': 0, '72': 0, '73': 0, '74': 0, '75': 0, '76': 0, '77': 0, '78': 0, '79': 0, '80': 0, '81': 0, '82': 0, '83': 0, '84': 0, '85': 0, '86': 0, '87': 0, '88': 0, '89': 0, '90': 0, '91': 0, '92': 0, '93': 0, '94': 0, '95': 0, '96': 0, '97': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0, '17': 0, '18': 0, '19': 0, '20': 0, '21': 0, '22': 0, '23': 0, '24': 0, '25': 0, '26': 0 }, b: { '0': [0, 0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0], '5': [0, 0], '6': [0, 0], '7': [0, 0], '8': [0, 0], '9': [0, 0], '10': [0, 0], '11': [0, 0], '12': [0, 0], '13': [0, 0], '14': [0, 0], '15': [0, 0], '16': [0, 0], '17': [0, 0], '18': [0, 0], '19': [0, 0], '20': [0, 0], '21': [0, 0], '22': [0, 0], '23': [0, 0], '24': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();function chalkColor(name) {
  cov_hhdvnst1s.f[0]++;cov_hhdvnst1s.s[0]++;return (cov_hhdvnst1s.b[0][0]++, chalk) && (cov_hhdvnst1s.b[0][1]++, chalk[name]) || (cov_hhdvnst1s.b[0][2]++, function () {
    cov_hhdvnst1s.f[1]++;cov_hhdvnst1s.s[1]++;for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      cov_hhdvnst1s.s[2]++;args[_key] = arguments[_key];
    }cov_hhdvnst1s.s[3]++;return args;
  });
}var colors = (cov_hhdvnst1s.s[4]++, { added: chalkColor('green'), deleted: chalkColor('red'), movedestination: chalkColor('gray'), moved: chalkColor('yellow'), unchanged: chalkColor('gray'), error: chalkColor('white.bgRed'), textDiffLine: chalkColor('gray') });var ConsoleFormatter = (cov_hhdvnst1s.s[5]++, function (_BaseFormatter) {
  cov_hhdvnst1s.f[2]++;cov_hhdvnst1s.s[6]++;inherits$1(ConsoleFormatter, _BaseFormatter);function ConsoleFormatter() {
    cov_hhdvnst1s.f[3]++;cov_hhdvnst1s.s[7]++;classCallCheck$1(this, ConsoleFormatter);var _this = (cov_hhdvnst1s.s[8]++, possibleConstructorReturn$1(this, ((cov_hhdvnst1s.b[1][0]++, ConsoleFormatter.__proto__) || (cov_hhdvnst1s.b[1][1]++, Object.getPrototypeOf(ConsoleFormatter))).call(this)));cov_hhdvnst1s.s[9]++;_this.includeMoveDestinations = false;cov_hhdvnst1s.s[10]++;return _this;
  }cov_hhdvnst1s.s[11]++;createClass$1(ConsoleFormatter, [{ key: 'prepareContext', value: function prepareContext(context) {
      cov_hhdvnst1s.f[4]++;cov_hhdvnst1s.s[12]++;get$1((cov_hhdvnst1s.b[2][0]++, ConsoleFormatter.prototype.__proto__) || (cov_hhdvnst1s.b[2][1]++, Object.getPrototypeOf(ConsoleFormatter.prototype)), 'prepareContext', this).call(this, context);cov_hhdvnst1s.s[13]++;context.indent = function (levels) {
        cov_hhdvnst1s.f[5]++;cov_hhdvnst1s.s[14]++;this.indentLevel = ((cov_hhdvnst1s.b[3][0]++, this.indentLevel) || (cov_hhdvnst1s.b[3][1]++, 0)) + (typeof levels === 'undefined' ? (cov_hhdvnst1s.b[4][0]++, 1) : (cov_hhdvnst1s.b[4][1]++, levels));cov_hhdvnst1s.s[15]++;this.indentPad = new Array(this.indentLevel + 1).join('  ');cov_hhdvnst1s.s[16]++;this.outLine();
      };cov_hhdvnst1s.s[17]++;context.outLine = function () {
        cov_hhdvnst1s.f[6]++;cov_hhdvnst1s.s[18]++;this.buffer.push('\n' + ((cov_hhdvnst1s.b[5][0]++, this.indentPad) || (cov_hhdvnst1s.b[5][1]++, '')));
      };cov_hhdvnst1s.s[19]++;context.out = function () {
        cov_hhdvnst1s.f[7]++;cov_hhdvnst1s.s[20]++;for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          cov_hhdvnst1s.s[21]++;args[_key2] = arguments[_key2];
        }cov_hhdvnst1s.s[22]++;for (var i = 0, l = args.length; i < l; i++) {
          var lines = (cov_hhdvnst1s.s[23]++, args[i].split('\n'));var text = (cov_hhdvnst1s.s[24]++, lines.join('\n' + ((cov_hhdvnst1s.b[6][0]++, this.indentPad) || (cov_hhdvnst1s.b[6][1]++, ''))));cov_hhdvnst1s.s[25]++;if ((cov_hhdvnst1s.b[8][0]++, this.color) && (cov_hhdvnst1s.b[8][1]++, this.color[0])) {
            cov_hhdvnst1s.b[7][0]++;cov_hhdvnst1s.s[26]++;text = this.color[0](text);
          } else {
            cov_hhdvnst1s.b[7][1]++;
          }cov_hhdvnst1s.s[27]++;this.buffer.push(text);
        }
      };cov_hhdvnst1s.s[28]++;context.pushColor = function (color) {
        cov_hhdvnst1s.f[8]++;cov_hhdvnst1s.s[29]++;this.color = (cov_hhdvnst1s.b[9][0]++, this.color) || (cov_hhdvnst1s.b[9][1]++, []);cov_hhdvnst1s.s[30]++;this.color.unshift(color);
      };cov_hhdvnst1s.s[31]++;context.popColor = function () {
        cov_hhdvnst1s.f[9]++;cov_hhdvnst1s.s[32]++;this.color = (cov_hhdvnst1s.b[10][0]++, this.color) || (cov_hhdvnst1s.b[10][1]++, []);cov_hhdvnst1s.s[33]++;this.color.shift();
      };
    } }, { key: 'typeFormattterErrorFormatter', value: function typeFormattterErrorFormatter(context, err) {
      cov_hhdvnst1s.f[10]++;cov_hhdvnst1s.s[34]++;context.pushColor(colors.error);cov_hhdvnst1s.s[35]++;context.out('[ERROR]' + err);cov_hhdvnst1s.s[36]++;context.popColor();
    } }, { key: 'formatValue', value: function formatValue(context, value) {
      cov_hhdvnst1s.f[11]++;cov_hhdvnst1s.s[37]++;context.out(JSON.stringify(value, null, 2));
    } }, { key: 'formatTextDiffString', value: function formatTextDiffString(context, value) {
      cov_hhdvnst1s.f[12]++;var lines = (cov_hhdvnst1s.s[38]++, this.parseTextDiff(value));cov_hhdvnst1s.s[39]++;context.indent();cov_hhdvnst1s.s[40]++;for (var i = 0, l = lines.length; i < l; i++) {
        var line = (cov_hhdvnst1s.s[41]++, lines[i]);cov_hhdvnst1s.s[42]++;context.pushColor(colors.textDiffLine);cov_hhdvnst1s.s[43]++;context.out(line.location.line + ',' + line.location.chr + ' ');cov_hhdvnst1s.s[44]++;context.popColor();var pieces = (cov_hhdvnst1s.s[45]++, line.pieces);cov_hhdvnst1s.s[46]++;for (var pieceIndex = 0, piecesLength = pieces.length; pieceIndex < piecesLength; pieceIndex++) {
          var piece = (cov_hhdvnst1s.s[47]++, pieces[pieceIndex]);cov_hhdvnst1s.s[48]++;context.pushColor(colors[piece.type]);cov_hhdvnst1s.s[49]++;context.out(piece.text);cov_hhdvnst1s.s[50]++;context.popColor();
        }cov_hhdvnst1s.s[51]++;if (i < l - 1) {
          cov_hhdvnst1s.b[11][0]++;cov_hhdvnst1s.s[52]++;context.outLine();
        } else {
          cov_hhdvnst1s.b[11][1]++;
        }
      }cov_hhdvnst1s.s[53]++;context.indent(-1);
    } }, { key: 'rootBegin', value: function rootBegin(context, type, nodeType) {
      cov_hhdvnst1s.f[13]++;cov_hhdvnst1s.s[54]++;context.pushColor(colors[type]);cov_hhdvnst1s.s[55]++;if (type === 'node') {
        cov_hhdvnst1s.b[12][0]++;cov_hhdvnst1s.s[56]++;context.out(nodeType === 'array' ? (cov_hhdvnst1s.b[13][0]++, '[') : (cov_hhdvnst1s.b[13][1]++, '{'));cov_hhdvnst1s.s[57]++;context.indent();
      } else {
        cov_hhdvnst1s.b[12][1]++;
      }
    } }, { key: 'rootEnd', value: function rootEnd(context, type, nodeType) {
      cov_hhdvnst1s.f[14]++;cov_hhdvnst1s.s[58]++;if (type === 'node') {
        cov_hhdvnst1s.b[14][0]++;cov_hhdvnst1s.s[59]++;context.indent(-1);cov_hhdvnst1s.s[60]++;context.out(nodeType === 'array' ? (cov_hhdvnst1s.b[15][0]++, ']') : (cov_hhdvnst1s.b[15][1]++, '}'));
      } else {
        cov_hhdvnst1s.b[14][1]++;
      }cov_hhdvnst1s.s[61]++;context.popColor();
    } }, { key: 'nodeBegin', value: function nodeBegin(context, key, leftKey, type, nodeType) {
      cov_hhdvnst1s.f[15]++;cov_hhdvnst1s.s[62]++;context.pushColor(colors[type]);cov_hhdvnst1s.s[63]++;context.out(leftKey + ': ');cov_hhdvnst1s.s[64]++;if (type === 'node') {
        cov_hhdvnst1s.b[16][0]++;cov_hhdvnst1s.s[65]++;context.out(nodeType === 'array' ? (cov_hhdvnst1s.b[17][0]++, '[') : (cov_hhdvnst1s.b[17][1]++, '{'));cov_hhdvnst1s.s[66]++;context.indent();
      } else {
        cov_hhdvnst1s.b[16][1]++;
      }
    } }, { key: 'nodeEnd', value: function nodeEnd(context, key, leftKey, type, nodeType, isLast) {
      cov_hhdvnst1s.f[16]++;cov_hhdvnst1s.s[67]++;if (type === 'node') {
        cov_hhdvnst1s.b[18][0]++;cov_hhdvnst1s.s[68]++;context.indent(-1);cov_hhdvnst1s.s[69]++;context.out(nodeType === 'array' ? (cov_hhdvnst1s.b[19][0]++, ']') : (cov_hhdvnst1s.b[19][1]++, '}' + (isLast ? (cov_hhdvnst1s.b[20][0]++, '') : (cov_hhdvnst1s.b[20][1]++, ','))));
      } else {
        cov_hhdvnst1s.b[18][1]++;
      }cov_hhdvnst1s.s[70]++;if (!isLast) {
        cov_hhdvnst1s.b[21][0]++;cov_hhdvnst1s.s[71]++;context.outLine();
      } else {
        cov_hhdvnst1s.b[21][1]++;
      }cov_hhdvnst1s.s[72]++;context.popColor();
    } /* jshint camelcase: false */ /* eslint-disable camelcase */ }, { key: 'format_unchanged', value: function format_unchanged(context, delta, left) {
      cov_hhdvnst1s.f[17]++;cov_hhdvnst1s.s[73]++;if (typeof left === 'undefined') {
        cov_hhdvnst1s.b[22][0]++;cov_hhdvnst1s.s[74]++;return;
      } else {
        cov_hhdvnst1s.b[22][1]++;
      }cov_hhdvnst1s.s[75]++;this.formatValue(context, left);
    } }, { key: 'format_movedestination', value: function format_movedestination(context, delta, left) {
      cov_hhdvnst1s.f[18]++;cov_hhdvnst1s.s[76]++;if (typeof left === 'undefined') {
        cov_hhdvnst1s.b[23][0]++;cov_hhdvnst1s.s[77]++;return;
      } else {
        cov_hhdvnst1s.b[23][1]++;
      }cov_hhdvnst1s.s[78]++;this.formatValue(context, left);
    } }, { key: 'format_node', value: function format_node(context, delta, left) {
      cov_hhdvnst1s.f[19]++;cov_hhdvnst1s.s[79]++; // recurse
      this.formatDeltaChildren(context, delta, left);
    } }, { key: 'format_added', value: function format_added(context, delta) {
      cov_hhdvnst1s.f[20]++;cov_hhdvnst1s.s[80]++;this.formatValue(context, delta[0]);
    } }, { key: 'format_modified', value: function format_modified(context, delta) {
      cov_hhdvnst1s.f[21]++;cov_hhdvnst1s.s[81]++;context.pushColor(colors.deleted);cov_hhdvnst1s.s[82]++;this.formatValue(context, delta[0]);cov_hhdvnst1s.s[83]++;context.popColor();cov_hhdvnst1s.s[84]++;context.out(' => ');cov_hhdvnst1s.s[85]++;context.pushColor(colors.added);cov_hhdvnst1s.s[86]++;this.formatValue(context, delta[1]);cov_hhdvnst1s.s[87]++;context.popColor();
    } }, { key: 'format_deleted', value: function format_deleted(context, delta) {
      cov_hhdvnst1s.f[22]++;cov_hhdvnst1s.s[88]++;this.formatValue(context, delta[0]);
    } }, { key: 'format_moved', value: function format_moved(context, delta) {
      cov_hhdvnst1s.f[23]++;cov_hhdvnst1s.s[89]++;context.out('==> ' + delta[1]);
    } }, { key: 'format_textdiff', value: function format_textdiff(context, delta) {
      cov_hhdvnst1s.f[24]++;cov_hhdvnst1s.s[90]++;this.formatTextDiffString(context, delta[0]);
    } }]);cov_hhdvnst1s.s[91]++;return ConsoleFormatter;
}(BaseFormatter)); /* eslint-enable camelcase */var defaultInstance$3 = (cov_hhdvnst1s.s[92]++, void 0);cov_hhdvnst1s.s[93]++;var format$3 = function format(delta, left) {
  cov_hhdvnst1s.f[25]++;cov_hhdvnst1s.s[94]++;if (!defaultInstance$3) {
    cov_hhdvnst1s.b[24][0]++;cov_hhdvnst1s.s[95]++;defaultInstance$3 = new ConsoleFormatter();
  } else {
    cov_hhdvnst1s.b[24][1]++;
  }cov_hhdvnst1s.s[96]++;return defaultInstance$3.format(delta, left);
};function log$1(delta, left) {
  cov_hhdvnst1s.f[26]++;cov_hhdvnst1s.s[97]++;console.log(format$3(delta, left));
}

var console$1 = Object.freeze({
  default: ConsoleFormatter,
  format: format$3,
  log: log$1
});

var cov_22mqymzs67 = function () {
  var path = 'Y:\\repos\\jsondiffpatch\\src\\formatters\\index.js',
      hash = 'f118f3691b3314dd402c01753f8b7ce5ce693118',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: 'Y:\\repos\\jsondiffpatch\\src\\formatters\\index.js', statementMap: {}, fnMap: {}, branchMap: {}, s: {}, f: {}, b: {}, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();

var index = Object.freeze({
  base: base,
  html: html,
  annotated: annotated,
  jsonpatch: jsonpatch,
  console: console$1
});

var cov_131zf2j61b = function () {
  var path = 'Y:\\repos\\jsondiffpatch\\src\\date-reviver.js',
      hash = '96d2d8e4c287370e10f75032379bfaa6b76882ca',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: 'Y:\\repos\\jsondiffpatch\\src\\date-reviver.js', statementMap: { '0': { start: { line: 3, column: 14 }, end: { line: 3, column: 20 } }, '1': { start: { line: 4, column: 2 }, end: { line: 10, column: 3 } }, '2': { start: { line: 6, column: 4 }, end: { line: 6, column: 113 } }, '3': { start: { line: 7, column: 4 }, end: { line: 9, column: 5 } }, '4': { start: { line: 8, column: 6 }, end: { line: 8, column: 120 } }, '5': { start: { line: 11, column: 2 }, end: { line: 11, column: 15 } } }, fnMap: { '0': { name: 'dateReviver', decl: { start: { line: 2, column: 24 }, end: { line: 2, column: 35 } }, loc: { start: { line: 2, column: 48 }, end: { line: 12, column: 1 } }, line: 2 } }, branchMap: { '0': { loc: { start: { line: 4, column: 2 }, end: { line: 10, column: 3 } }, type: 'if', locations: [{ start: { line: 4, column: 2 }, end: { line: 10, column: 3 } }, { start: { line: 4, column: 2 }, end: { line: 10, column: 3 } }], line: 4 }, '1': { loc: { start: { line: 7, column: 4 }, end: { line: 9, column: 5 } }, type: 'if', locations: [{ start: { line: 7, column: 4 }, end: { line: 9, column: 5 } }, { start: { line: 7, column: 4 }, end: { line: 9, column: 5 } }], line: 7 }, '2': { loc: { start: { line: 8, column: 103 }, end: { line: 8, column: 116 } }, type: 'binary-expr', locations: [{ start: { line: 8, column: 103 }, end: { line: 8, column: 111 } }, { start: { line: 8, column: 115 }, end: { line: 8, column: 116 } }], line: 8 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, f: { '0': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}(); // use as 2nd parameter for JSON.parse to revive Date instances
var cov_2lhco8xajw = function () {
  var path = 'Y:\\repos\\jsondiffpatch\\src\\main.js',
      hash = '9204d5aa807cf56abf2f2bf9fc637c42e0015b3c',
      global = new Function('return this')(),
      gcv = '__coverage__',
      coverageData = { path: 'Y:\\repos\\jsondiffpatch\\src\\main.js', statementMap: { '0': { start: { line: 11, column: 2 }, end: { line: 11, column: 34 } }, '1': { start: { line: 18, column: 22 }, end: { line: 18, column: 28 } }, '2': { start: { line: 21, column: 2 }, end: { line: 23, column: 3 } }, '3': { start: { line: 22, column: 4 }, end: { line: 22, column: 40 } }, '4': { start: { line: 24, column: 2 }, end: { line: 24, column: 64 } }, '5': { start: { line: 28, column: 2 }, end: { line: 30, column: 3 } }, '6': { start: { line: 29, column: 4 }, end: { line: 29, column: 40 } }, '7': { start: { line: 31, column: 2 }, end: { line: 31, column: 65 } }, '8': { start: { line: 35, column: 2 }, end: { line: 37, column: 3 } }, '9': { start: { line: 36, column: 4 }, end: { line: 36, column: 40 } }, '10': { start: { line: 38, column: 2 }, end: { line: 38, column: 67 } }, '11': { start: { line: 42, column: 2 }, end: { line: 44, column: 3 } }, '12': { start: { line: 43, column: 4 }, end: { line: 43, column: 40 } }, '13': { start: { line: 45, column: 2 }, end: { line: 45, column: 67 } }, '14': { start: { line: 49, column: 2 }, end: { line: 51, column: 3 } }, '15': { start: { line: 50, column: 4 }, end: { line: 50, column: 40 } }, '16': { start: { line: 52, column: 2 }, end: { line: 52, column: 65 } } }, fnMap: { '0': { name: 'create', decl: { start: { line: 10, column: 16 }, end: { line: 10, column: 22 } }, loc: { start: { line: 10, column: 32 }, end: { line: 12, column: 1 } }, line: 10 }, '1': { name: 'diff', decl: { start: { line: 20, column: 16 }, end: { line: 20, column: 20 } }, loc: { start: { line: 20, column: 23 }, end: { line: 25, column: 1 } }, line: 20 }, '2': { name: 'patch', decl: { start: { line: 27, column: 16 }, end: { line: 27, column: 21 } }, loc: { start: { line: 27, column: 24 }, end: { line: 32, column: 1 } }, line: 27 }, '3': { name: 'unpatch', decl: { start: { line: 34, column: 16 }, end: { line: 34, column: 23 } }, loc: { start: { line: 34, column: 26 }, end: { line: 39, column: 1 } }, line: 34 }, '4': { name: 'reverse', decl: { start: { line: 41, column: 16 }, end: { line: 41, column: 23 } }, loc: { start: { line: 41, column: 26 }, end: { line: 46, column: 1 } }, line: 41 }, '5': { name: 'clone', decl: { start: { line: 48, column: 16 }, end: { line: 48, column: 21 } }, loc: { start: { line: 48, column: 24 }, end: { line: 53, column: 1 } }, line: 48 } }, branchMap: { '0': { loc: { start: { line: 21, column: 2 }, end: { line: 23, column: 3 } }, type: 'if', locations: [{ start: { line: 21, column: 2 }, end: { line: 23, column: 3 } }, { start: { line: 21, column: 2 }, end: { line: 23, column: 3 } }], line: 21 }, '1': { loc: { start: { line: 28, column: 2 }, end: { line: 30, column: 3 } }, type: 'if', locations: [{ start: { line: 28, column: 2 }, end: { line: 30, column: 3 } }, { start: { line: 28, column: 2 }, end: { line: 30, column: 3 } }], line: 28 }, '2': { loc: { start: { line: 35, column: 2 }, end: { line: 37, column: 3 } }, type: 'if', locations: [{ start: { line: 35, column: 2 }, end: { line: 37, column: 3 } }, { start: { line: 35, column: 2 }, end: { line: 37, column: 3 } }], line: 35 }, '3': { loc: { start: { line: 42, column: 2 }, end: { line: 44, column: 3 } }, type: 'if', locations: [{ start: { line: 42, column: 2 }, end: { line: 44, column: 3 } }, { start: { line: 42, column: 2 }, end: { line: 44, column: 3 } }], line: 42 }, '4': { loc: { start: { line: 49, column: 2 }, end: { line: 51, column: 3 } }, type: 'if', locations: [{ start: { line: 49, column: 2 }, end: { line: 51, column: 3 } }, { start: { line: 49, column: 2 }, end: { line: 51, column: 3 } }], line: 49 } }, s: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0, '6': 0, '7': 0, '8': 0, '9': 0, '10': 0, '11': 0, '12': 0, '13': 0, '14': 0, '15': 0, '16': 0 }, f: { '0': 0, '1': 0, '2': 0, '3': 0, '4': 0, '5': 0 }, b: { '0': [0, 0], '1': [0, 0], '2': [0, 0], '3': [0, 0], '4': [0, 0] }, _coverageSchema: '332fd63041d2c1bcb487cc26dd0d5f7d97098a6c' },
      coverage = global[gcv] || (global[gcv] = {});if (coverage[path] && coverage[path].hash === hash) {
    return coverage[path];
  }coverageData.hash = hash;return coverage[path] = coverageData;
}();var defaultInstance$4 = (cov_2lhco8xajw.s[1]++, void 0);function diff() {
  cov_2lhco8xajw.f[1]++;cov_2lhco8xajw.s[2]++;if (!defaultInstance$4) {
    cov_2lhco8xajw.b[0][0]++;cov_2lhco8xajw.s[3]++;defaultInstance$4 = new DiffPatcher();
  } else {
    cov_2lhco8xajw.b[0][1]++;
  }cov_2lhco8xajw.s[4]++;return defaultInstance$4.diff.apply(defaultInstance$4, arguments);
}function patch() {
  cov_2lhco8xajw.f[2]++;cov_2lhco8xajw.s[5]++;if (!defaultInstance$4) {
    cov_2lhco8xajw.b[1][0]++;cov_2lhco8xajw.s[6]++;defaultInstance$4 = new DiffPatcher();
  } else {
    cov_2lhco8xajw.b[1][1]++;
  }cov_2lhco8xajw.s[7]++;return defaultInstance$4.patch.apply(defaultInstance$4, arguments);
}function unpatch() {
  cov_2lhco8xajw.f[3]++;cov_2lhco8xajw.s[8]++;if (!defaultInstance$4) {
    cov_2lhco8xajw.b[2][0]++;cov_2lhco8xajw.s[9]++;defaultInstance$4 = new DiffPatcher();
  } else {
    cov_2lhco8xajw.b[2][1]++;
  }cov_2lhco8xajw.s[10]++;return defaultInstance$4.unpatch.apply(defaultInstance$4, arguments);
}function reverse() {
  cov_2lhco8xajw.f[4]++;cov_2lhco8xajw.s[11]++;if (!defaultInstance$4) {
    cov_2lhco8xajw.b[3][0]++;cov_2lhco8xajw.s[12]++;defaultInstance$4 = new DiffPatcher();
  } else {
    cov_2lhco8xajw.b[3][1]++;
  }cov_2lhco8xajw.s[13]++;return defaultInstance$4.reverse.apply(defaultInstance$4, arguments);
}function clone$1() {
  cov_2lhco8xajw.f[5]++;cov_2lhco8xajw.s[14]++;if (!defaultInstance$4) {
    cov_2lhco8xajw.b[4][0]++;cov_2lhco8xajw.s[15]++;defaultInstance$4 = new DiffPatcher();
  } else {
    cov_2lhco8xajw.b[4][1]++;
  }cov_2lhco8xajw.s[16]++;return defaultInstance$4.clone.apply(defaultInstance$4, arguments);
}

var examples = {};

var exampleDate = function exampleDate() {
  return new Date(2020, 10, 30, 15, 10, 3);
};

/* jshint camelcase: false */
/* jshint multistr: true */

examples.atomicValues = [
// undefined
{
  left: undefined,
  right: undefined,
  delta: undefined,
  reverse: undefined
}, {
  left: undefined,
  right: null,
  delta: [null],
  reverse: [null, 0, 0]
}, {
  left: undefined,
  right: false,
  delta: [false],
  reverse: [false, 0, 0]
}, {
  left: undefined,
  right: true,
  delta: [true],
  reverse: [true, 0, 0]
}, {
  left: undefined,
  right: 42,
  delta: [42],
  reverse: [42, 0, 0]
}, {
  left: undefined,
  right: 'some text',
  delta: ['some text'],
  reverse: ['some text', 0, 0]
}, {
  left: undefined,
  right: exampleDate(),
  delta: [exampleDate()],
  reverse: [exampleDate(), 0, 0]
}, {
  left: undefined,
  right: {
    a: 1,
    b: 2
  },
  delta: [{
    a: 1,
    b: 2
  }],
  reverse: [{
    a: 1,
    b: 2
  }, 0, 0]
}, {
  left: undefined,
  right: [1, 2, 3],
  delta: [[1, 2, 3]],
  reverse: [[1, 2, 3], 0, 0]
}, {
  left: undefined,
  right: function right(x) {
    return x * x;
  },

  error: /not supported/
},

// null
{
  left: null,
  right: null,
  delta: undefined,
  reverse: undefined
}, {
  left: null,
  right: false,
  delta: [null, false],
  reverse: [false, null]
}, {
  left: null,
  right: true,
  delta: [null, true],
  reverse: [true, null]
}, {
  left: null,
  right: 42,
  delta: [null, 42],
  reverse: [42, null]
}, {
  left: null,
  right: 'some text',
  delta: [null, 'some text'],
  reverse: ['some text', null]
}, {
  left: null,
  right: exampleDate(),
  delta: [null, exampleDate()],
  reverse: [exampleDate(), null]
}, {
  left: null,
  right: {
    a: 1,
    b: 2
  },
  delta: [null, {
    a: 1,
    b: 2
  }],
  reverse: [{
    a: 1,
    b: 2
  }, null]
}, {
  left: null,
  right: function right(x) {
    return x * x;
  },

  error: /not supported/
},

// false
{
  left: false,
  right: false,
  delta: undefined,
  reverse: undefined
}, {
  left: false,
  right: true,
  delta: [false, true],
  reverse: [true, false]
}, {
  left: false,
  right: 42,
  delta: [false, 42],
  reverse: [42, false]
}, {
  left: false,
  right: 'some text',
  delta: [false, 'some text'],
  reverse: ['some text', false]
}, {
  left: false,
  right: exampleDate(),
  delta: [false, exampleDate()],
  reverse: [exampleDate(), false]
}, {
  left: false,
  right: {
    a: 1,
    b: 2
  },
  delta: [false, {
    a: 1,
    b: 2
  }],
  reverse: [{
    a: 1,
    b: 2
  }, false]
}, {
  left: false,
  right: [1, 2, 3],
  delta: [false, [1, 2, 3]],
  reverse: [[1, 2, 3], false]
}, {
  left: false,
  right: function right(x) {
    return x * x;
  },

  error: /not supported/
},

// true
{
  left: true,
  right: true,
  delta: undefined,
  reverse: undefined
}, {
  left: true,
  right: 42,
  delta: [true, 42],
  reverse: [42, true]
}, {
  left: true,
  right: 'some text',
  delta: [true, 'some text'],
  reverse: ['some text', true]
}, {
  left: true,
  right: exampleDate(),
  delta: [true, exampleDate()],
  reverse: [exampleDate(), true]
}, {
  left: true,
  right: {
    a: 1,
    b: 2
  },
  delta: [true, {
    a: 1,
    b: 2
  }],
  reverse: [{
    a: 1,
    b: 2
  }, true]
}, {
  left: true,
  right: [1, 2, 3],
  delta: [true, [1, 2, 3]],
  reverse: [[1, 2, 3], true]
}, {
  left: true,
  right: function right(x) {
    return x * x;
  },

  error: /not supported/
},

// number
{
  name: 'number -> same number',
  left: 42,
  right: 42,
  delta: undefined,
  reverse: undefined
}, {
  left: 42,
  right: -1,
  delta: [42, -1],
  reverse: [-1, 42]
}, {
  left: 42,
  right: 'some text',
  delta: [42, 'some text'],
  reverse: ['some text', 42]
}, {
  left: 42,
  right: exampleDate(),
  delta: [42, exampleDate()],
  reverse: [exampleDate(), 42]
}, {
  left: 42,
  right: {
    a: 1,
    b: 2
  },
  delta: [42, {
    a: 1,
    b: 2
  }],
  reverse: [{
    a: 1,
    b: 2
  }, 42]
}, {
  left: 42,
  right: [1, 2, 3],
  delta: [42, [1, 2, 3]],
  reverse: [[1, 2, 3], 42]
}, {
  left: 42,
  right: function right(x) {
    return x * x;
  },

  error: /not supported/
},

// string
{
  name: 'string -> same string',
  left: 'some text',
  right: 'some text',
  delta: undefined,
  reverse: undefined
}, {
  left: 'some text',
  right: 'some fext',
  delta: ['some text', 'some fext'],
  reverse: ['some fext', 'some text']
}, {
  left: 'some text',
  right: exampleDate(),
  delta: ['some text', exampleDate()],
  reverse: [exampleDate(), 'some text']
}, {
  left: 'some text',
  right: {
    a: 1,
    b: 2
  },
  delta: ['some text', {
    a: 1,
    b: 2
  }],
  reverse: [{
    a: 1,
    b: 2
  }, 'some text']
}, {
  left: 'some text',
  right: [1, 2, 3],
  delta: ['some text', [1, 2, 3]],
  reverse: [[1, 2, 3], 'some text']
},

// Date
{
  name: 'Date -> same Date',
  left: exampleDate(),
  right: exampleDate(),
  delta: undefined,
  reverse: undefined
}, {
  left: exampleDate(),
  right: new Date(2020, 5, 31, 15, 12, 30),
  delta: [exampleDate(), new Date(2020, 5, 31, 15, 12, 30)],
  reverse: [new Date(2020, 5, 31, 15, 12, 30), exampleDate()]
}, {
  left: exampleDate(),
  right: {
    a: 1,
    b: 2
  },
  delta: [exampleDate(), {
    a: 1,
    b: 2
  }],
  reverse: [{
    a: 1,
    b: 2
  }, exampleDate()]
}, {
  left: exampleDate(),
  right: [1, 2, 3],
  delta: [exampleDate(), [1, 2, 3]],
  reverse: [[1, 2, 3], exampleDate()]
}, {
  left: exampleDate(),
  right: function right(x) {
    return x * x;
  },

  error: /not supported/
},

// Function
{
  name: 'string -> Function',
  left: 'some text',
  right: function right(x) {
    return x * x;
  },

  error: /not supported/
},

// RegExp
{
  name: 'RegExp -> RegExp',
  left: /regex/g,
  right: /another regex/gi,
  delta: ['/regex/g', '/another regex/gi'],
  reverse: ['/another regex/gi', '/regex/g']
},

// object
{
  name: 'object -> same object',
  left: {
    a: 1,
    b: 2
  },
  right: {
    a: 1,
    b: 2
  },
  delta: undefined,
  reverse: undefined
}, {
  left: {
    a: 1,
    b: 2
  },
  right: [1, 2, 3],
  delta: [{
    a: 1,
    b: 2
  }, [1, 2, 3]],
  reverse: [[1, 2, 3], {
    a: 1,
    b: 2
  }]
}, {
  left: {
    a: 1,
    b: 2
  },
  right: function right(x) {
    return x * x;
  },

  error: /not supported/
},

// array
{
  name: 'array -> same array',
  left: [1, 2, 3],
  right: [1, 2, 3],
  delta: undefined,
  reverse: undefined
}, {
  left: [1, 2, 3],
  right: function right(x) {
    return x * x;
  },

  error: /not supported/
}, 0];

var shortText = 'Madre,\ncuando yo sea grande\nquisiera hacer versos';
var largeText = '-Madre,\ncuando yo sea grande\nser\xE9 marinero.\n\nAhora estoy jugando\nque aquello es un puerto\ny que \xE9ste es un barco\ny \xE9stos son dos remos\ny por ese r\xEDo\nnavego y navego.\n\n(Agua, arena, piedras\ny dos palos viejos:\nun r\xEDo y un barco,\nun puerto y dos remos).\n\n-Madre,\ncuando yo sea grande\nser\xE9 jardinero.\n\nAhora estoy jugando\nque esto es un cantero,\naqu\xE9l un rosal,\n\xE9ste un jazminero\ny \xE9se es un camino\nque va por el medio.\n\n(Tierra, flores, hojas\ny unos tallos secos:\ncantero, camino,\nrosal, jazminero).\n\n-Madre,\ncuando yo sea grande\nquisiera hacer versos.\n\n-\xBFCon qu\xE9 est\xE1s jugando?\n\n-Madre, miro el cielo.\n\n(En dos ojos claros\ntodo el Universo).';

examples.text = [{
  left: shortText,
  right: largeText,
  delta: [shortText, largeText],
  reverse: [largeText, shortText]
}, {
  left: largeText,
  right: largeText.replace(/jazminero/g, 'rosal'),
  delta: ['@@ -360,25 +360,21 @@\n %C3%A9ste un \n-jazminero\n+rosal' + '\n %0Ay %C3%A9se e\n@@ -479,17 +479,13 @@\n' + ' al, \n-jazminero\n+rosal\n ).%0A%0A\n', 0, 2],
  reverse: ['@@ -360,21 +360,25 @@\n %C3%A9ste un \n-rosal\n+jazminero\n %0Ay' + ' %C3%A9se e\n@@ -479,21 +479,25 @@\n %0Arosal,' + ' \n-rosal\n+jazminero\n ).%0A%0A-Mad\n', 0, 2],
  exactReverse: false
}, {
  name: 'larger than min length',
  options: {
    textDiff: {
      minLength: 10
    }
  },
  left: largeText.substr(0, 10),
  right: largeText.substr(0, 11).replace(/Madre/g, 'Padre'),
  delta: ['@@ -1,10 +1,11 @@\n -\n-M\n+P\n adre,%0Acu\n+a\n', 0, 2],
  reverse: ['@@ -1,11 +1,10 @@\n -\n-P\n+M\n adre,%0Acu\n-a\n', 0, 2],
  exactReverse: false
}, {
  name: 'shorter than min length',
  options: {
    textDiff: {
      minLength: 10
    }
  },
  left: largeText.substr(0, 9),
  right: largeText.substr(0, 11).replace(/Madre/g, 'Padre'),
  delta: ['-Madre,\nc', '-Padre,\ncua'],
  reverse: ['-Padre,\ncua', '-Madre,\nc'],
  exactReverse: false
}, 0];

examples.objects = [{
  name: 'first level',
  left: {
    a: 1,
    b: 2
  },
  right: {
    a: 42,
    b: 2
  },
  delta: {
    a: [1, 42]
  },
  reverse: {
    a: [42, 1]
  }
}, {
  name: 'deep level',
  left: {
    a: {
      j: {
        k: {
          l: {
            m: {
              n: {
                o: 3
              }
            }
          }
        }
      }
    },
    b: 2
  },
  right: {
    a: {
      j: {
        k: {
          l: {
            m: {
              n: {
                o: true
              }
            }
          }
        }
      }
    },
    b: 2
  },
  delta: {
    a: {
      j: {
        k: {
          l: {
            m: {
              n: {
                o: [3, true]
              }
            }
          }
        }
      }
    }
  },
  reverse: {
    a: {
      j: {
        k: {
          l: {
            m: {
              n: {
                o: [true, 3]
              }
            }
          }
        }
      }
    }
  }
}, {
  name: 'multiple changes',
  left: {
    a: {
      j: {
        k: {
          l: {
            m: {
              n: {
                o: 3
              }
            }
          }
        }
      }
    },
    b: 2,
    c: 5
  },
  right: {
    a: {
      j: {
        k: {
          l: {
            m: {
              n: {
                o: 5,
                w: 12
              }
            }
          }
        }
      }
    },
    b: 2
  },
  delta: {
    a: {
      j: {
        k: {
          l: {
            m: {
              n: {
                o: [3, 5],
                w: [12]
              }
            }
          }
        }
      }
    },
    c: [5, 0, 0]
  },
  reverse: {
    a: {
      j: {
        k: {
          l: {
            m: {
              n: {
                o: [5, 3],
                w: [12, 0, 0]
              }
            }
          }
        }
      }
    },
    c: [5]
  }
}, {
  name: 'key removed',
  left: {
    a: 1,
    b: 2
  },
  right: {
    a: 1
  },
  delta: {
    b: [2, 0, 0]
  },
  reverse: {
    b: [2]
  }
}, {
  name: 'hasOwnProperty',
  /* jshint ignore:start */
  left: {
    hasOwnProperty: true
  },
  right: {
    hasOwnProperty: true
  }
  /* jshint ignore:end */
}, 0];

examples.arrays = [{
  name: 'simple values',
  left: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  right: [1, 3, 4, 5, 8, 9, 9.1, 10],
  delta: {
    _t: 'a',
    _1: [2, 0, 0],
    _5: [6, 0, 0],
    _6: [7, 0, 0],
    6: [9.1]
  },
  reverse: {
    _t: 'a',
    1: [2],
    5: [6],
    6: [7],
    _6: [9.1, 0, 0]
  }
}, {
  name: 'added block',
  left: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  right: [1, 2, 3, 4, 5, 5.1, 5.2, 5.3, 6, 7, 8, 9, 10],
  delta: {
    _t: 'a',
    5: [5.1],
    6: [5.2],
    7: [5.3]
  },
  reverse: {
    _t: 'a',
    _5: [5.1, 0, 0],
    _6: [5.2, 0, 0],
    _7: [5.3, 0, 0]
  }
}, {
  name: 'movements',
  left: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  right: [1, 2, 3, 7, 5, 6, 8, 9, 4, 10],
  delta: {
    _t: 'a',
    _3: ['', 8, 3],
    _6: ['', 3, 3]
  },
  reverse: {
    _t: 'a',
    _3: ['', 6, 3],
    _8: ['', 3, 3]
  }
}, {
  name: 'movements(2)',
  left: [1, 2, 3, 4],
  right: [2, 4, 1, 3],
  delta: {
    _t: 'a',
    _1: ['', 0, 3],
    _3: ['', 1, 3]
  },
  reverse: {
    _t: 'a',
    _2: ['', 0, 3],
    _3: ['', 2, 3]
  },
  exactReverse: false
}, {
  name: 'nested',
  options: {
    objectHash: function objectHash(obj) {
      if (obj && obj.id) {
        return obj.id;
      }
    }
  },
  left: [1, 2, {
    id: 4,
    width: 10
  }, 4, {
    id: 'five',
    width: 4
  }, 6, 7, 8, 9, 10],
  right: [1, 2, {
    id: 4,
    width: 12
  }, 4, {
    id: 'five',
    width: 4
  }, 6, 7, 8, 9, 10],
  delta: {
    _t: 'a',
    2: {
      width: [10, 12]
    }
  },
  reverse: {
    _t: 'a',
    2: {
      width: [12, 10]
    }
  }
}, {
  name: 'nested with movement',
  options: {
    objectHash: function objectHash(obj) {
      if (obj && obj.id) {
        return obj.id;
      }
    }
  },
  left: [1, 2, 4, {
    id: 'five',
    width: 4
  }, 6, 7, 8, {
    id: 4,
    width: 10,
    height: 3
  }, 9, 10],
  right: [1, 2, {
    id: 4,
    width: 12
  }, 4, {
    id: 'five',
    width: 4
  }, 6, 7, 8, 9, 10],
  delta: {
    _t: 'a',
    2: {
      width: [10, 12],
      height: [3, 0, 0]
    },
    _7: ['', 2, 3]
  },
  reverse: {
    _t: 'a',
    7: {
      width: [12, 10],
      height: [3]
    },
    _2: ['', 7, 3]
  }
}, {
  name: 'nested changes among array insertions and deletions',
  options: {
    objectHash: function objectHash(obj) {
      if (obj && obj.id) {
        return obj.id;
      }
    }
  },
  left: [{
    id: 1
  }, {
    id: 2
  }, {
    id: 4
  }, {
    id: 5
  }, {
    id: 6,
    inner: {
      property: 'abc'
    }
  }, {
    id: 7
  }, {
    id: 8
  }, {
    id: 10
  }, {
    id: 11
  }, {
    id: 12
  }],
  right: [{
    id: 3
  }, {
    id: 4
  }, {
    id: 6,
    inner: {
      property: 'abcd'
    }
  }, {
    id: 9
  }],
  delta: {
    _t: 'a',
    0: [{ id: 3 }],
    2: {
      inner: {
        property: ['abc', 'abcd']
      }
    },
    3: [{ id: 9 }],
    _0: [{ id: 1 }, 0, 0],
    _1: [{ id: 2 }, 0, 0],
    _3: [{ id: 5 }, 0, 0],
    _5: [{ id: 7 }, 0, 0],
    _6: [{ id: 8 }, 0, 0],
    _7: [{ id: 10 }, 0, 0],
    _8: [{ id: 11 }, 0, 0],
    _9: [{ id: 12 }, 0, 0]
  },
  reverse: {
    _t: 'a',
    0: [{ id: 1 }],
    1: [{ id: 2 }],
    3: [{ id: 5 }],
    4: {
      inner: {
        property: ['abcd', 'abc']
      }
    },
    5: [{ id: 7 }],
    6: [{ id: 8 }],
    7: [{ id: 10 }],
    8: [{ id: 11 }],
    9: [{ id: 12 }],
    _0: [{ id: 3 }, 0, 0],
    _3: [{ id: 9 }, 0, 0]
  }
}, {
  name: 'nested change with item moved above',
  options: {
    objectHash: function objectHash(obj) {
      if (obj && obj.id) {
        return obj.id;
      }
    }
  },
  left: [{
    id: 1
  }, {
    id: 2
  }, {
    id: 3,
    inner: {
      property: 'abc'
    }
  }, {
    id: 4
  }, {
    id: 5
  }, {
    id: 6
  }],
  right: [{
    id: 1
  }, {
    id: 2
  }, {
    id: 6
  }, {
    id: 3,
    inner: {
      property: 'abcd'
    }
  }, {
    id: 4
  }, {
    id: 5
  }],
  delta: {
    _t: 'a',
    3: {
      inner: {
        property: ['abc', 'abcd']
      }
    },
    _5: ['', 2, 3]
  },
  reverse: {
    _t: 'a',
    2: {
      inner: {
        property: ['abcd', 'abc']
      }
    },
    _2: ['', 5, 3]
  }
}, {
  name: 'nested change with item moved right above',
  options: {
    objectHash: function objectHash(obj) {
      if (obj && obj.id) {
        return obj.id;
      }
    }
  },
  left: [{
    id: 1
  }, {
    id: 2,
    inner: {
      property: 'abc'
    }
  }, {
    id: 3
  }],
  right: [{
    id: 1
  }, {
    id: 3
  }, {
    id: 2,
    inner: {
      property: 'abcd'
    }
  }],
  delta: {
    _t: 'a',
    2: {
      inner: {
        property: ['abc', 'abcd']
      }
    },
    _2: ['', 1, 3]
  },
  reverse: {
    _t: 'a',
    1: {
      inner: {
        property: ['abcd', 'abc']
      }
    },
    _2: ['', 1, 3]
  },
  exactReverse: false
}, {
  name: 'nested change with item moved right below',
  options: {
    objectHash: function objectHash(obj) {
      if (obj && obj.id) {
        return obj.id;
      }
    }
  },
  left: [{
    id: 1
  }, {
    id: 2
  }, {
    id: 3,
    inner: {
      property: 'abc'
    }
  }, {
    id: 4
  }],
  right: [{
    id: 2
  }, {
    id: 3,
    inner: {
      property: 'abcd'
    }
  }, {
    id: 1
  }, {
    id: 4
  }],
  delta: {
    _t: 'a',
    1: {
      inner: {
        property: ['abc', 'abcd']
      }
    },
    _0: ['', 2, 3]
  },
  reverse: {
    _t: 'a',
    2: {
      inner: {
        property: ['abcd', 'abc']
      }
    },
    _2: ['', 0, 3]
  }
}, {
  name: 'nested with movements using custom objectHash',
  options: {
    objectHash: function objectHash(obj) {
      if (obj && obj.itemKey) {
        return obj.itemKey;
      }
    }
  },
  left: [1, 2, 4, {
    itemKey: 'five',
    width: 4
  }, 6, 7, 8, {
    itemKey: 4,
    width: 10,
    height: 3
  }, 9, 10],
  right: [1, 2, {
    itemKey: 4,
    width: 12
  }, 4, {
    itemKey: 'five',
    width: 4
  }, 6, 7, 8, 9, 10],
  delta: {
    _t: 'a',
    2: {
      width: [10, 12],
      height: [3, 0, 0]
    },
    _7: ['', 2, 3]
  },
  reverse: {
    _t: 'a',
    7: {
      width: [12, 10],
      height: [3]
    },
    _2: ['', 7, 3]
  }
}, {
  name: 'using property filter',
  options: {
    propertyFilter: function propertyFilter(name /*, context */) {
      return name.slice(0, 1) !== '$';
    }
  },
  left: {
    inner: {
      $volatileData: 345,
      $oldVolatileData: 422,
      nonVolatile: 432
    }
  },
  right: {
    inner: {
      $volatileData: 346,
      $newVolatileData: 32,
      nonVolatile: 431
    }
  },
  delta: {
    inner: {
      nonVolatile: [432, 431]
    }
  },
  reverse: {
    inner: {
      nonVolatile: [431, 432]
    }
  },
  noPatch: true
}, 0];

/*
 * mocha's bdd syntax is inspired in RSpec
 *   please read: http://betterspecs.org/
 */
var expect = chai.expect;

describe('jsondiffpatch', function () {
  before(function () {});
  it('has a diff method', function () {
    expect(diff).to.be.a('function');
  });
});

var DiffPatcher$1 = DiffPatcher;

var isArray$1$1 = typeof Array.isArray === 'function' ? Array.isArray : function (a) {
  return (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object' && a instanceof Array;
};

var valueDescription = function valueDescription(value) {
  if (value === null) {
    return 'null';
  }
  if (typeof value === 'boolean') {
    return value.toString();
  }
  if (value instanceof Date) {
    return 'Date';
  }
  if (value instanceof RegExp) {
    return 'RegExp';
  }
  if (isArray$1$1(value)) {
    return 'array';
  }
  if (typeof value === 'string') {
    if (value.length >= 60) {
      return 'large text';
    }
  }
  return typeof value === 'undefined' ? 'undefined' : _typeof(value);
};

// Object.keys polyfill
var objectKeys = typeof Object.keys === 'function' ? function (obj) {
  return Object.keys(obj);
} : function (obj) {
  var keys = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      keys.push(key);
    }
  }
  return keys;
};

// Array.prototype.forEach polyfill
var arrayForEach = typeof Array.prototype.forEach === 'function' ? function (array, fn) {
  return array.forEach(fn);
} : function (array, fn) {
  for (var index$$1 = 0, length = array.length; index$$1 < length; index$$1++) {
    fn(array[index$$1], index$$1, array);
  }
};

describe('DiffPatcher', function () {
  arrayForEach(objectKeys(examples), function (groupName) {
    var group = examples[groupName];
    describe(groupName, function () {
      arrayForEach(group, function (example) {
        if (!example) {
          return;
        }
        var name = example.name || valueDescription(example.left) + ' -> ' + valueDescription(example.right);
        describe(name, function () {
          before(function () {
            this.instance = new DiffPatcher$1(example.options);
          });
          if (example.error) {
            it('diff should fail with: ' + example.error, function () {
              var instance = this.instance;
              expect(function () {
                instance.diff(example.left, example.right);
              }).to.throw(example.error);
            });
            return;
          }
          it('can diff', function () {
            var delta = this.instance.diff(example.left, example.right);
            expect(delta).to.deep.equal(example.delta);
          });
          it('can diff backwards', function () {
            var reverse$$1 = this.instance.diff(example.right, example.left);
            expect(reverse$$1).to.deep.equal(example.reverse);
          });
          if (!example.noPatch) {
            it('can patch', function () {
              var right = this.instance.patch(clone$1(example.left), example.delta);
              expect(right).to.deep.equal(example.right);
            });
            it('can reverse delta', function () {
              var reverse$$1 = this.instance.reverse(example.delta);
              if (example.exactReverse !== false) {
                expect(reverse$$1).to.deep.equal(example.reverse);
              } else {
                // reversed delta and the swapped-diff delta are
                // not always equal, to verify they're equivalent,
                // patch and compare the results
                expect(this.instance.patch(clone$1(example.right), reverse$$1)).to.deep.equal(example.left);
                reverse$$1 = this.instance.diff(example.right, example.left);
                expect(this.instance.patch(clone$1(example.right), reverse$$1)).to.deep.equal(example.left);
              }
            });
            it('can unpatch', function () {
              var left = this.instance.unpatch(clone$1(example.right), example.delta);
              expect(left).to.deep.equal(example.left);
            });
          }
        });
      });
    });
  });

  describe('.clone', function () {
    it('clones complex objects', function () {
      var obj = {
        name: 'a string',
        nested: {
          attributes: [{ name: 'one', value: 345, since: new Date(1934, 1, 1) }],
          another: 'property',
          enabled: true,
          nested2: {
            name: 'another string'
          }
        }
      };
      var cloned = clone$1(obj);
      expect(cloned).to.deep.equal(obj);
    });
    it('clones RegExp', function () {
      var obj = {
        pattern: /expr/gim
      };
      var cloned = clone$1(obj);
      expect(cloned).to.deep.equal({
        pattern: /expr/gim
      });
    });
  });

  describe('using cloneDiffValues', function () {
    before(function () {
      this.instance = new DiffPatcher$1({
        cloneDiffValues: true
      });
    });
    it("ensures deltas don't reference original objects", function () {
      var left = {
        oldProp: {
          value: 3
        }
      };
      var right = {
        newProp: {
          value: 5
        }
      };
      var delta = this.instance.diff(left, right);
      left.oldProp.value = 1;
      right.newProp.value = 8;
      expect(delta).to.deep.equal({
        oldProp: [{ value: 3 }, 0, 0],
        newProp: [{ value: 5 }]
      });
    });
  });

  describe('static shortcuts', function () {
    it('diff', function () {
      var delta = diff(4, 5);
      expect(delta).to.deep.equal([4, 5]);
    });
    it('patch', function () {
      var right = patch(4, [4, 5]);
      expect(right).to.eql(5);
    });
    it('unpatch', function () {
      var left = unpatch(5, [4, 5]);
      expect(left).to.eql(4);
    });
    it('reverse', function () {
      var reverseDelta = reverse([4, 5]);
      expect(reverseDelta).to.deep.equal([5, 4]);
    });
  });

  describe('plugins', function () {
    before(function () {
      this.instance = new DiffPatcher$1();
    });

    describe('getting pipe filter list', function () {
      it('returns builtin filters', function () {
        expect(this.instance.processor.pipes.diff.list()).to.deep.equal(['collectChildren', 'trivial', 'dates', 'texts', 'objects', 'arrays']);
      });
    });

    describe('supporting numeric deltas', function () {
      var NUMERIC_DIFFERENCE = -8;

      it('diff', function () {
        // a constant to identify the custom delta type
        function numericDiffFilter(context) {
          if (typeof context.left === 'number' && typeof context.right === 'number') {
            // store number delta, eg. useful for distributed counters
            context.setResult([0, context.right - context.left, NUMERIC_DIFFERENCE]).exit();
          }
        }
        // a filterName is useful if I want to allow other filters to
        // be inserted before/after this one
        numericDiffFilter.filterName = 'numeric';

        // insert new filter, right before trivial one
        this.instance.processor.pipes.diff.before('trivial', numericDiffFilter);

        var delta = this.instance.diff({ population: 400 }, { population: 403 });
        expect(delta).to.deep.equal({ population: [0, 3, NUMERIC_DIFFERENCE] });
      });

      it('patch', function () {
        function numericPatchFilter(context) {
          if (context.delta && Array.isArray(context.delta) && context.delta[2] === NUMERIC_DIFFERENCE) {
            context.setResult(context.left + context.delta[1]).exit();
          }
        }
        numericPatchFilter.filterName = 'numeric';
        this.instance.processor.pipes.patch.before('trivial', numericPatchFilter);

        var delta = { population: [0, 3, NUMERIC_DIFFERENCE] };
        var right = this.instance.patch({ population: 600 }, delta);
        expect(right).to.deep.equal({ population: 603 });
      });

      it('unpatch', function () {
        function numericReverseFilter(context) {
          if (context.nested) {
            return;
          }
          if (context.delta && Array.isArray(context.delta) && context.delta[2] === NUMERIC_DIFFERENCE) {
            context.setResult([0, -context.delta[1], NUMERIC_DIFFERENCE]).exit();
          }
        }
        numericReverseFilter.filterName = 'numeric';
        this.instance.processor.pipes.reverse.after('trivial', numericReverseFilter);

        var delta = { population: [0, 3, NUMERIC_DIFFERENCE] };
        var reverseDelta = this.instance.reverse(delta);
        expect(reverseDelta).to.deep.equal({
          population: [0, -3, NUMERIC_DIFFERENCE]
        });
        var right = { population: 703 };
        this.instance.unpatch(right, delta);
        expect(right).to.deep.equal({ population: 700 });
      });
    });

    describe('removing and replacing pipe filters', function () {
      it('removes specified filter', function () {
        expect(this.instance.processor.pipes.diff.list()).to.deep.equal(['collectChildren', 'numeric', 'trivial', 'dates', 'texts', 'objects', 'arrays']);
        this.instance.processor.pipes.diff.remove('dates');
        expect(this.instance.processor.pipes.diff.list()).to.deep.equal(['collectChildren', 'numeric', 'trivial', 'texts', 'objects', 'arrays']);
      });

      it('replaces specified filter', function () {
        function fooFilter(context) {
          context.setResult(['foo']).exit();
        }
        fooFilter.filterName = 'foo';
        expect(this.instance.processor.pipes.diff.list()).to.deep.equal(['collectChildren', 'numeric', 'trivial', 'texts', 'objects', 'arrays']);
        this.instance.processor.pipes.diff.replace('trivial', fooFilter);
        expect(this.instance.processor.pipes.diff.list()).to.deep.equal(['collectChildren', 'numeric', 'foo', 'texts', 'objects', 'arrays']);
      });
    });
  });

  describe('formatters', function () {
    describe('jsonpatch', function () {
      var instance = void 0;
      var formatter = void 0;

      before(function () {
        instance = new DiffPatcher$1();
        formatter = index.jsonpatch;
      });

      var expectFormat = function expectFormat(before, after, expected) {
        var diff$$1 = instance.diff(before, after);
        var format = formatter.format(diff$$1);
        expect(format).to.be.eql(expected);
      };

      var removeOp = function removeOp(path) {
        return {
          op: 'remove',
          path: path
        };
      };

      var addOp = function addOp(path, value) {
        return {
          op: 'add',
          path: path,
          value: value
        };
      };

      var replaceOp = function replaceOp(path, value) {
        return {
          op: 'replace',
          path: path,
          value: value
        };
      };

      it('should return empty format for empty diff', function () {
        expectFormat([], [], []);
      });

      it('should format an add operation for array insertion', function () {
        expectFormat([1, 2, 3], [1, 2, 3, 4], [addOp('/3', 4)]);
      });

      it('should format an add operation for object insertion', function () {
        expectFormat({ a: 'a', b: 'b' }, { a: 'a', b: 'b', c: 'c' }, [addOp('/c', 'c')]);
      });

      it('should format for deletion of array', function () {
        expectFormat([1, 2, 3, 4], [1, 2, 3], [removeOp('/3')]);
      });

      it('should format for deletion of object', function () {
        expectFormat({ a: 'a', b: 'b', c: 'c' }, { a: 'a', b: 'b' }, [removeOp('/c')]);
      });

      it('should format for replace of object', function () {
        expectFormat({ a: 'a', b: 'b' }, { a: 'a', b: 'c' }, [replaceOp('/b', 'c')]);
      });

      it('should put add/remove for array with primitive items', function () {
        expectFormat([1, 2, 3], [1, 2, 4], [removeOp('/2'), addOp('/2', 4)]);
      });

      it('should sort remove by desc order', function () {
        expectFormat([1, 2, 3], [1], [removeOp('/2'), removeOp('/1')]);
      });

      describe('patcher with comparator', function () {
        before(function () {
          instance = new DiffPatcher$1({
            objectHash: function objectHash(obj) {
              if (obj && obj.id) {
                return obj.id;
              }
            }
          });
        });

        var anObjectWithId = function anObjectWithId(id) {
          return {
            id: id
          };
        };

        it('should remove higher level first', function () {
          var before = [anObjectWithId('removed'), {
            id: 'remaining_outer',
            items: [anObjectWithId('removed_inner'), anObjectWithId('remaining_inner')]
          }];
          var after = [{
            id: 'remaining_outer',
            items: [anObjectWithId('remaining_inner')]
          }];
          var expectedDiff = [removeOp('/0'), removeOp('/0/items/0')];
          expectFormat(before, after, expectedDiff);
        });
      });

      it('should annotate as moved op', function () {
        expectFormat([1, 2], [2, 1], [{ op: 'move', from: '/1', path: '/0' }]);
      });
    });
  });
});
//# sourceMappingURL=jsondiffpatch.cjs.test.js.map

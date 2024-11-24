var THREE = { REVISION: "62" };
function RealisticTypewriter() {
  "use strict";
  RealisticTypewriter.super_.call(this);
}
self.console = self.console ||
  {
    info: function () {},
    log: function () {},
    debug: function () {},
    warn: function () {},
    error: function () {},
  },
  String.prototype.trim = String.prototype.trim || function () {
    return this.replace(/^\s+|\s+$/g, "");
  },
  THREE.extend = function (e, t) {
    if (Object.keys) {
      for (var i = Object.keys(t), r = 0, n = i.length; r < n; r++) {
        var o = i[r];
        Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(t, o));
      }
    } else {
      var a = {}.hasOwnProperty;
      for (var o in t) a.call(t, o) && (e[o] = t[o]);
    }
    return e;
  },
  function () {
    for (
      var n = 0, e = ["ms", "moz", "webkit", "o"], t = 0;
      t < e.length && !self.requestAnimationFrame;
      ++t
    ) {
      self.requestAnimationFrame = self[e[t] + "RequestAnimationFrame"],
        self.cancelAnimationFrame = self[e[t] + "CancelAnimationFrame"] ||
          self[e[t] + "CancelRequestAnimationFrame"];
    }
    void 0 === self.requestAnimationFrame && void 0 !== self.setTimeout &&
    (self.requestAnimationFrame = function (e) {
      var t = Date.now(),
        i = Math.max(0, 16 - (t - n)),
        r = self.setTimeout(function () {
          e(t + i);
        }, i);
      return n = t + i, r;
    }),
      void 0 === self.cancelAnimationFrame && void 0 !== self.clearTimeout &&
      (self.cancelAnimationFrame = function (e) {
        self.clearTimeout(e);
      });
  }(),
  THREE.CullFaceNone = 0,
  THREE.CullFaceBack = 1,
  THREE.CullFaceFront = 2,
  THREE.CullFaceFrontBack = 3,
  THREE.FrontFaceDirectionCW = 0,
  THREE.FrontFaceDirectionCCW = 1,
  THREE.BasicShadowMap = 0,
  THREE.PCFShadowMap = 1,
  THREE.PCFSoftShadowMap = 2,
  THREE.FrontSide = 0,
  THREE.BackSide = 1,
  THREE.DoubleSide = 2,
  THREE.NoShading = 0,
  THREE.FlatShading = 1,
  THREE.SmoothShading = 2,
  THREE.NoColors = 0,
  THREE.FaceColors = 1,
  THREE.VertexColors = 2,
  THREE.NoBlending = 0,
  THREE.NormalBlending = 1,
  THREE.AdditiveBlending = 2,
  THREE.SubtractiveBlending = 3,
  THREE.MultiplyBlending = 4,
  THREE.CustomBlending = 5,
  THREE.AddEquation = 100,
  THREE.SubtractEquation = 101,
  THREE.ReverseSubtractEquation = 102,
  THREE.ZeroFactor = 200,
  THREE.OneFactor = 201,
  THREE.SrcColorFactor = 202,
  THREE.OneMinusSrcColorFactor = 203,
  THREE.SrcAlphaFactor = 204,
  THREE.OneMinusSrcAlphaFactor = 205,
  THREE.DstAlphaFactor = 206,
  THREE.OneMinusDstAlphaFactor = 207,
  THREE.DstColorFactor = 208,
  THREE.OneMinusDstColorFactor = 209,
  THREE.SrcAlphaSaturateFactor = 210,
  THREE.MultiplyOperation = 0,
  THREE.MixOperation = 1,
  THREE.AddOperation = 2,
  THREE.UVMapping = function () {},
  THREE.CubeReflectionMapping = function () {},
  THREE.CubeRefractionMapping = function () {},
  THREE.SphericalReflectionMapping = function () {},
  THREE.SphericalRefractionMapping = function () {},
  THREE.RepeatWrapping = 1e3,
  THREE.ClampToEdgeWrapping = 1001,
  THREE.MirroredRepeatWrapping = 1002,
  THREE.NearestFilter = 1003,
  THREE.NearestMipMapNearestFilter = 1004,
  THREE.NearestMipMapLinearFilter = 1005,
  THREE.LinearFilter = 1006,
  THREE.LinearMipMapNearestFilter = 1007,
  THREE.LinearMipMapLinearFilter = 1008,
  THREE.UnsignedByteType = 1009,
  THREE.ByteType = 1010,
  THREE.ShortType = 1011,
  THREE.UnsignedShortType = 1012,
  THREE.IntType = 1013,
  THREE.UnsignedIntType = 1014,
  THREE.FloatType = 1015,
  THREE.UnsignedShort4444Type = 1016,
  THREE.UnsignedShort5551Type = 1017,
  THREE.UnsignedShort565Type = 1018,
  THREE.AlphaFormat = 1019,
  THREE.RGBFormat = 1020,
  THREE.RGBAFormat = 1021,
  THREE.LuminanceFormat = 1022,
  THREE.LuminanceAlphaFormat = 1023,
  THREE.RGB_S3TC_DXT1_Format = 2001,
  THREE.RGBA_S3TC_DXT1_Format = 2002,
  THREE.RGBA_S3TC_DXT3_Format = 2003,
  THREE.RGBA_S3TC_DXT5_Format = 2004,
  THREE.Color = function (e) {
    return void 0 !== e && this.set(e), this;
  },
  THREE.Color.prototype = {
    constructor: THREE.Color,
    r: 1,
    g: 1,
    b: 1,
    set: function (e) {
      return e instanceof THREE.Color
        ? this.copy(e)
        : "number" == typeof e
        ? this.setHex(e)
        : "string" == typeof e && this.setStyle(e),
        this;
    },
    setHex: function (e) {
      return e = Math.floor(e),
        this.r = (e >> 16 & 255) / 255,
        this.g = (e >> 8 & 255) / 255,
        this.b = (255 & e) / 255,
        this;
    },
    setRGB: function (e, t, i) {
      return this.r = e, this.g = t, this.b = i, this;
    },
    setHSL: function (e, t, i) {
      if (0 === t) this.r = this.g = this.b = i;
      else {
        var r = function (e, t, i) {
            return i < 0 && (i += 1),
              1 < i && (i -= 1),
              i < 1 / 6
                ? e + 6 * (t - e) * i
                : i < .5
                ? t
                : i < 2 / 3
                ? e + 6 * (t - e) * (2 / 3 - i)
                : e;
          },
          n = i <= .5 ? i * (1 + t) : i + t - i * t,
          o = 2 * i - n;
        this.r = r(o, n, e + 1 / 3),
          this.g = r(o, n, e),
          this.b = r(o, n, e - 1 / 3);
      }
      return this;
    },
    setStyle: function (e) {
      if (/^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.test(e)) {
        var t = /^rgb\((\d+), ?(\d+), ?(\d+)\)$/i.exec(e);
        return this.r = Math.min(255, parseInt(t[1], 10)) / 255,
          this.g = Math.min(255, parseInt(t[2], 10)) / 255,
          this.b = Math.min(255, parseInt(t[3], 10)) / 255,
          this;
      }
      if (/^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.test(e)) {
        t = /^rgb\((\d+)\%, ?(\d+)\%, ?(\d+)\%\)$/i.exec(e);
        return this.r = Math.min(100, parseInt(t[1], 10)) / 100,
          this.g = Math.min(100, parseInt(t[2], 10)) / 100,
          this.b = Math.min(100, parseInt(t[3], 10)) / 100,
          this;
      }
      if (/^\#([0-9a-f]{6})$/i.test(e)) {
        t = /^\#([0-9a-f]{6})$/i.exec(e);
        return this.setHex(parseInt(t[1], 16)), this;
      }
      if (/^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.test(e)) {
        t = /^\#([0-9a-f])([0-9a-f])([0-9a-f])$/i.exec(e);
        return this.setHex(
          parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3], 16),
        ),
          this;
      }
      if (/^(\w+)$/i.test(e)) return this.setHex(THREE.ColorKeywords[e]), this;
    },
    copy: function (e) {
      return this.r = e.r, this.g = e.g, this.b = e.b, this;
    },
    copyGammaToLinear: function (e) {
      return this.r = e.r * e.r, this.g = e.g * e.g, this.b = e.b * e.b, this;
    },
    copyLinearToGamma: function (e) {
      return this.r = Math.sqrt(e.r),
        this.g = Math.sqrt(e.g),
        this.b = Math.sqrt(e.b),
        this;
    },
    convertGammaToLinear: function () {
      var e = this.r, t = this.g, i = this.b;
      return this.r = e * e, this.g = t * t, this.b = i * i, this;
    },
    convertLinearToGamma: function () {
      return this.r = Math.sqrt(this.r),
        this.g = Math.sqrt(this.g),
        this.b = Math.sqrt(this.b),
        this;
    },
    getHex: function () {
      return 255 * this.r << 16 ^ 255 * this.g << 8 ^ 255 * this.b << 0;
    },
    getHexString: function () {
      return ("000000" + this.getHex().toString(16)).slice(-6);
    },
    getHSL: function () {
      var c = { h: 0, s: 0, l: 0 };
      return function () {
        var e,
          t,
          i = this.r,
          r = this.g,
          n = this.b,
          o = Math.max(i, r, n),
          a = Math.min(i, r, n),
          s = (a + o) / 2;
        if (a === o) t = e = 0;
        else {
          var l = o - a;
          switch (t = s <= .5 ? l / (o + a) : l / (2 - o - a), o) {
            case i:
              e = (r - n) / l + (r < n ? 6 : 0);
              break;
            case r:
              e = (n - i) / l + 2;
              break;
            case n:
              e = (i - r) / l + 4;
          }
          e /= 6;
        }
        return c.h = e, c.s = t, c.l = s, c;
      };
    }(),
    getStyle: function () {
      return "rgb(" + (255 * this.r | 0) + "," + (255 * this.g | 0) + "," +
        (255 * this.b | 0) + ")";
    },
    offsetHSL: function (e, t, i) {
      var r = this.getHSL();
      return r.h += e, r.s += t, r.l += i, this.setHSL(r.h, r.s, r.l), this;
    },
    add: function (e) {
      return this.r += e.r, this.g += e.g, this.b += e.b, this;
    },
    addColors: function (e, t) {
      return this.r = e.r + t.r, this.g = e.g + t.g, this.b = e.b + t.b, this;
    },
    addScalar: function (e) {
      return this.r += e, this.g += e, this.b += e, this;
    },
    multiply: function (e) {
      return this.r *= e.r, this.g *= e.g, this.b *= e.b, this;
    },
    multiplyScalar: function (e) {
      return this.r *= e, this.g *= e, this.b *= e, this;
    },
    lerp: function (e, t) {
      return this.r += (e.r - this.r) * t,
        this.g += (e.g - this.g) * t,
        this.b += (e.b - this.b) * t,
        this;
    },
    equals: function (e) {
      return e.r === this.r && e.g === this.g && e.b === this.b;
    },
    fromArray: function (e) {
      return this.r = e[0], this.g = e[1], this.b = e[2], this;
    },
    toArray: function () {
      return [this.r, this.g, this.b];
    },
    clone: function () {
      return (new THREE.Color()).setRGB(this.r, this.g, this.b);
    },
  },
  THREE.ColorKeywords = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  THREE.Quaternion = function (e, t, i, r) {
    this._x = e || 0,
      this._y = t || 0,
      this._z = i || 0,
      this._w = void 0 !== r ? r : 1;
  },
  THREE.Quaternion.prototype = {
    constructor: THREE.Quaternion,
    _x: 0,
    _y: 0,
    _z: 0,
    _w: 0,
    _euler: void 0,
    _updateEuler: function (e) {
      void 0 !== this._euler && this._euler.setFromQuaternion(this, void 0, !1);
    },
    get x() {
      return this._x;
    },
    set x(e) {
      this._x = e, this._updateEuler();
    },
    get y() {
      return this._y;
    },
    set y(e) {
      this._y = e, this._updateEuler();
    },
    get z() {
      return this._z;
    },
    set z(e) {
      this._z = e, this._updateEuler();
    },
    get w() {
      return this._w;
    },
    set w(e) {
      this._w = e, this._updateEuler();
    },
    set: function (e, t, i, r) {
      return this._x = e,
        this._y = t,
        this._z = i,
        this._w = r,
        this._updateEuler(),
        this;
    },
    copy: function (e) {
      return this._x = e._x,
        this._y = e._y,
        this._z = e._z,
        this._w = e._w,
        this._updateEuler(),
        this;
    },
    setFromEuler: function (e, t) {
      if (e instanceof THREE.Euler == !1) {
        throw new Error(
          "ERROR: Quaternion's .setFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.",
        );
      }
      var i = Math.cos(e._x / 2),
        r = Math.cos(e._y / 2),
        n = Math.cos(e._z / 2),
        o = Math.sin(e._x / 2),
        a = Math.sin(e._y / 2),
        s = Math.sin(e._z / 2);
      return "XYZ" === e.order
        ? (this._x = o * r * n + i * a * s,
          this._y = i * a * n - o * r * s,
          this._z = i * r * s + o * a * n,
          this._w = i * r * n - o * a * s)
        : "YXZ" === e.order
        ? (this._x = o * r * n + i * a * s,
          this._y = i * a * n - o * r * s,
          this._z = i * r * s - o * a * n,
          this._w = i * r * n + o * a * s)
        : "ZXY" === e.order
        ? (this._x = o * r * n - i * a * s,
          this._y = i * a * n + o * r * s,
          this._z = i * r * s + o * a * n,
          this._w = i * r * n - o * a * s)
        : "ZYX" === e.order
        ? (this._x = o * r * n - i * a * s,
          this._y = i * a * n + o * r * s,
          this._z = i * r * s - o * a * n,
          this._w = i * r * n + o * a * s)
        : "YZX" === e.order
        ? (this._x = o * r * n + i * a * s,
          this._y = i * a * n + o * r * s,
          this._z = i * r * s - o * a * n,
          this._w = i * r * n - o * a * s)
        : "XZY" === e.order &&
          (this._x = o * r * n - i * a * s,
            this._y = i * a * n - o * r * s,
            this._z = i * r * s + o * a * n,
            this._w = i * r * n + o * a * s),
        !1 !== t && this._updateEuler(),
        this;
    },
    setFromAxisAngle: function (e, t) {
      var i = t / 2, r = Math.sin(i);
      return this._x = e.x * r,
        this._y = e.y * r,
        this._z = e.z * r,
        this._w = Math.cos(i),
        this._updateEuler(),
        this;
    },
    setFromRotationMatrix: function (e) {
      var t,
        i = e.elements,
        r = i[0],
        n = i[4],
        o = i[8],
        a = i[1],
        s = i[5],
        l = i[9],
        c = i[2],
        h = i[6],
        u = i[10],
        p = r + s + u;
      return 0 < p
        ? (t = .5 / Math.sqrt(p + 1),
          this._w = .25 / t,
          this._x = (h - l) * t,
          this._y = (o - c) * t,
          this._z = (a - n) * t)
        : s < r && u < r
        ? (t = 2 * Math.sqrt(1 + r - s - u),
          this._w = (h - l) / t,
          this._x = .25 * t,
          this._y = (n + a) / t,
          this._z = (o + c) / t)
        : u < s
        ? (t = 2 * Math.sqrt(1 + s - r - u),
          this._w = (o - c) / t,
          this._x = (n + a) / t,
          this._y = .25 * t,
          this._z = (l + h) / t)
        : (t = 2 * Math.sqrt(1 + u - r - s),
          this._w = (a - n) / t,
          this._x = (o + c) / t,
          this._y = (l + h) / t,
          this._z = .25 * t),
        this._updateEuler(),
        this;
    },
    inverse: function () {
      return this.conjugate().normalize(), this;
    },
    conjugate: function () {
      return this._x *= -1,
        this._y *= -1,
        this._z *= -1,
        this._updateEuler(),
        this;
    },
    lengthSq: function () {
      return this._x * this._x + this._y * this._y + this._z * this._z +
        this._w * this._w;
    },
    length: function () {
      return Math.sqrt(
        this._x * this._x + this._y * this._y + this._z * this._z +
          this._w * this._w,
      );
    },
    normalize: function () {
      var e = this.length();
      return 0 === e
        ? (this._x = 0, this._y = 0, this._z = 0, this._w = 1)
        : (e = 1 / e,
          this._x = this._x * e,
          this._y = this._y * e,
          this._z = this._z * e,
          this._w = this._w * e),
        this;
    },
    multiply: function (e, t) {
      return void 0 !== t
        ? (console.warn(
          "DEPRECATED: Quaternion's .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.",
        ),
          this.multiplyQuaternions(e, t)) : this.multiplyQuaternions(this, e);
    },
    multiplyQuaternions: function (e, t) {
      var i = e._x,
        r = e._y,
        n = e._z,
        o = e._w,
        a = t._x,
        s = t._y,
        l = t._z,
        c = t._w;
      return this._x = i * c + o * a + r * l - n * s,
        this._y = r * c + o * s + n * a - i * l,
        this._z = n * c + o * l + i * s - r * a,
        this._w = o * c - i * a - r * s - n * l,
        this._updateEuler(),
        this;
    },
    multiplyVector3: function (e) {
      return console.warn(
        "DEPRECATED: Quaternion's .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.",
      ),
        e.applyQuaternion(this);
    },
    slerp: function (e, t) {
      var i = this._x,
        r = this._y,
        n = this._z,
        o = this._w,
        a = o * e._w + i * e._x + r * e._y + n * e._z;
      if (
        a < 0
          ? (this._w = -e._w,
            this._x = -e._x,
            this._y = -e._y,
            this._z = -e._z,
            a = -a)
          : this.copy(e), 1 <= a
      ) {
        return this._w = o, this._x = i, this._y = r, this._z = n, this;
      }
      var s = Math.acos(a), l = Math.sqrt(1 - a * a);
      if (Math.abs(l) < .001) {
        return this._w = .5 * (o + this._w),
          this._x = .5 * (i + this._x),
          this._y = .5 * (r + this._y),
          this._z = .5 * (n + this._z),
          this;
      }
      var c = Math.sin((1 - t) * s) / l, h = Math.sin(t * s) / l;
      return this._w = o * c + this._w * h,
        this._x = i * c + this._x * h,
        this._y = r * c + this._y * h,
        this._z = n * c + this._z * h,
        this._updateEuler(),
        this;
    },
    equals: function (e) {
      return e._x === this._x && e._y === this._y && e._z === this._z &&
        e._w === this._w;
    },
    fromArray: function (e) {
      return this._x = e[0],
        this._y = e[1],
        this._z = e[2],
        this._w = e[3],
        this._updateEuler(),
        this;
    },
    toArray: function () {
      return [this._x, this._y, this._z, this._w];
    },
    clone: function () {
      return new THREE.Quaternion(this._x, this._y, this._z, this._w);
    },
  },
  THREE.Quaternion.slerp = function (e, t, i, r) {
    return i.copy(e).slerp(t, r);
  },
  THREE.Vector2 = function (e, t) {
    this.x = e || 0, this.y = t || 0;
  },
  THREE.Vector2.prototype = {
    constructor: THREE.Vector2,
    set: function (e, t) {
      return this.x = e, this.y = t, this;
    },
    setX: function (e) {
      return this.x = e, this;
    },
    setY: function (e) {
      return this.y = e, this;
    },
    setComponent: function (e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
    },
    getComponent: function (e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        default:
          throw new Error("index is out of range: " + e);
      }
    },
    copy: function (e) {
      return this.x = e.x, this.y = e.y, this;
    },
    add: function (e, t) {
      return void 0 !== t
        ? (console.warn(
          "DEPRECATED: Vector2's .add() now only accepts one argument. Use .addVectors( a, b ) instead.",
        ),
          this.addVectors(e, t)) : (this.x += e.x, this.y += e.y, this);
    },
    addVectors: function (e, t) {
      return this.x = e.x + t.x, this.y = e.y + t.y, this;
    },
    addScalar: function (e) {
      return this.x += e, this.y += e, this;
    },
    sub: function (e, t) {
      return void 0 !== t
        ? (console.warn(
          "DEPRECATED: Vector2's .sub() now only accepts one argument. Use .subVectors( a, b ) instead.",
        ),
          this.subVectors(e, t)) : (this.x -= e.x, this.y -= e.y, this);
    },
    subVectors: function (e, t) {
      return this.x = e.x - t.x, this.y = e.y - t.y, this;
    },
    multiplyScalar: function (e) {
      return this.x *= e, this.y *= e, this;
    },
    divideScalar: function (e) {
      if (0 !== e) {
        var t = 1 / e;
        this.x *= t, this.y *= t;
      } else this.x = 0, this.y = 0;
      return this;
    },
    min: function (e) {
      return this.x > e.x && (this.x = e.x),
        this.y > e.y && (this.y = e.y),
        this;
    },
    max: function (e) {
      return this.x < e.x && (this.x = e.x),
        this.y < e.y && (this.y = e.y),
        this;
    },
    clamp: function (e, t) {
      return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x),
        this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y),
        this;
    },
    negate: function () {
      return this.multiplyScalar(-1);
    },
    dot: function (e) {
      return this.x * e.x + this.y * e.y;
    },
    lengthSq: function () {
      return this.x * this.x + this.y * this.y;
    },
    length: function () {
      return Math.sqrt(this.x * this.x + this.y * this.y);
    },
    normalize: function () {
      return this.divideScalar(this.length());
    },
    distanceTo: function (e) {
      return Math.sqrt(this.distanceToSquared(e));
    },
    distanceToSquared: function (e) {
      var t = this.x - e.x, i = this.y - e.y;
      return t * t + i * i;
    },
    setLength: function (e) {
      var t = this.length();
      return 0 !== t && e !== t && this.multiplyScalar(e / t), this;
    },
    lerp: function (e, t) {
      return this.x += (e.x - this.x) * t, this.y += (e.y - this.y) * t, this;
    },
    equals: function (e) {
      return e.x === this.x && e.y === this.y;
    },
    fromArray: function (e) {
      return this.x = e[0], this.y = e[1], this;
    },
    toArray: function () {
      return [this.x, this.y];
    },
    clone: function () {
      return new THREE.Vector2(this.x, this.y);
    },
  },
  THREE.Vector3 = function (e, t, i) {
    this.x = e || 0, this.y = t || 0, this.z = i || 0;
  },
  THREE.Vector3.prototype = {
    constructor: THREE.Vector3,
    set: function (e, t, i) {
      return this.x = e, this.y = t, this.z = i, this;
    },
    setX: function (e) {
      return this.x = e, this;
    },
    setY: function (e) {
      return this.y = e, this;
    },
    setZ: function (e) {
      return this.z = e, this;
    },
    setComponent: function (e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
    },
    getComponent: function (e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        default:
          throw new Error("index is out of range: " + e);
      }
    },
    copy: function (e) {
      return this.x = e.x, this.y = e.y, this.z = e.z, this;
    },
    add: function (e, t) {
      return void 0 !== t
        ? (console.warn(
          "DEPRECATED: Vector3's .add() now only accepts one argument. Use .addVectors( a, b ) instead.",
        ),
          this.addVectors(e, t))
        : (this.x += e.x, this.y += e.y, this.z += e.z, this);
    },
    addScalar: function (e) {
      return this.x += e, this.y += e, this.z += e, this;
    },
    addVectors: function (e, t) {
      return this.x = e.x + t.x, this.y = e.y + t.y, this.z = e.z + t.z, this;
    },
    sub: function (e, t) {
      return void 0 !== t
        ? (console.warn(
          "DEPRECATED: Vector3's .sub() now only accepts one argument. Use .subVectors( a, b ) instead.",
        ),
          this.subVectors(e, t))
        : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this);
    },
    subVectors: function (e, t) {
      return this.x = e.x - t.x, this.y = e.y - t.y, this.z = e.z - t.z, this;
    },
    multiply: function (e, t) {
      return void 0 !== t
        ? (console.warn(
          "DEPRECATED: Vector3's .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.",
        ),
          this.multiplyVectors(e, t))
        : (this.x *= e.x, this.y *= e.y, this.z *= e.z, this);
    },
    multiplyScalar: function (e) {
      return this.x *= e, this.y *= e, this.z *= e, this;
    },
    multiplyVectors: function (e, t) {
      return this.x = e.x * t.x, this.y = e.y * t.y, this.z = e.z * t.z, this;
    },
    applyMatrix3: function (e) {
      var t = this.x, i = this.y, r = this.z, n = e.elements;
      return this.x = n[0] * t + n[3] * i + n[6] * r,
        this.y = n[1] * t + n[4] * i + n[7] * r,
        this.z = n[2] * t + n[5] * i + n[8] * r,
        this;
    },
    applyMatrix4: function (e) {
      var t = this.x, i = this.y, r = this.z, n = e.elements;
      return this.x = n[0] * t + n[4] * i + n[8] * r + n[12],
        this.y = n[1] * t + n[5] * i + n[9] * r + n[13],
        this.z = n[2] * t + n[6] * i + n[10] * r + n[14],
        this;
    },
    applyProjection: function (e) {
      var t = this.x,
        i = this.y,
        r = this.z,
        n = e.elements,
        o = 1 / (n[3] * t + n[7] * i + n[11] * r + n[15]);
      return this.x = (n[0] * t + n[4] * i + n[8] * r + n[12]) * o,
        this.y = (n[1] * t + n[5] * i + n[9] * r + n[13]) * o,
        this.z = (n[2] * t + n[6] * i + n[10] * r + n[14]) * o,
        this;
    },
    applyQuaternion: function (e) {
      var t = this.x,
        i = this.y,
        r = this.z,
        n = e.x,
        o = e.y,
        a = e.z,
        s = e.w,
        l = s * t + o * r - a * i,
        c = s * i + a * t - n * r,
        h = s * r + n * i - o * t,
        u = -n * t - o * i - a * r;
      return this.x = l * s + u * -n + c * -a - h * -o,
        this.y = c * s + u * -o + h * -n - l * -a,
        this.z = h * s + u * -a + l * -o - c * -n,
        this;
    },
    transformDirection: function (e) {
      var t = this.x, i = this.y, r = this.z, n = e.elements;
      return this.x = n[0] * t + n[4] * i + n[8] * r,
        this.y = n[1] * t + n[5] * i + n[9] * r,
        this.z = n[2] * t + n[6] * i + n[10] * r,
        this.normalize(),
        this;
    },
    divide: function (e) {
      return this.x /= e.x, this.y /= e.y, this.z /= e.z, this;
    },
    divideScalar: function (e) {
      if (0 !== e) {
        var t = 1 / e;
        this.x *= t, this.y *= t, this.z *= t;
      } else this.x = 0, this.y = 0, this.z = 0;
      return this;
    },
    min: function (e) {
      return this.x > e.x && (this.x = e.x),
        this.y > e.y && (this.y = e.y),
        this.z > e.z && (this.z = e.z),
        this;
    },
    max: function (e) {
      return this.x < e.x && (this.x = e.x),
        this.y < e.y && (this.y = e.y),
        this.z < e.z && (this.z = e.z),
        this;
    },
    clamp: function (e, t) {
      return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x),
        this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y),
        this.z < e.z ? this.z = e.z : this.z > t.z && (this.z = t.z),
        this;
    },
    negate: function () {
      return this.multiplyScalar(-1);
    },
    dot: function (e) {
      return this.x * e.x + this.y * e.y + this.z * e.z;
    },
    lengthSq: function () {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    },
    length: function () {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    },
    lengthManhattan: function () {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
    },
    normalize: function () {
      return this.divideScalar(this.length());
    },
    setLength: function (e) {
      var t = this.length();
      return 0 !== t && e !== t && this.multiplyScalar(e / t), this;
    },
    lerp: function (e, t) {
      return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this;
    },
    cross: function (e, t) {
      if (void 0 !== t) {
        return console.warn(
          "DEPRECATED: Vector3's .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.",
        ),
          this.crossVectors(e, t);
      }
      var i = this.x, r = this.y, n = this.z;
      return this.x = r * e.z - n * e.y,
        this.y = n * e.x - i * e.z,
        this.z = i * e.y - r * e.x,
        this;
    },
    crossVectors: function (e, t) {
      var i = e.x, r = e.y, n = e.z, o = t.x, a = t.y, s = t.z;
      return this.x = r * s - n * a,
        this.y = n * o - i * s,
        this.z = i * a - r * o,
        this;
    },
    angleTo: function (e) {
      var t = this.dot(e) / (this.length() * e.length());
      return Math.acos(THREE.Math.clamp(t, -1, 1));
    },
    distanceTo: function (e) {
      return Math.sqrt(this.distanceToSquared(e));
    },
    distanceToSquared: function (e) {
      var t = this.x - e.x, i = this.y - e.y, r = this.z - e.z;
      return t * t + i * i + r * r;
    },
    setEulerFromRotationMatrix: function (e, t) {
      console.error(
        "REMOVED: Vector3's setEulerFromRotationMatrix has been removed in favor of Euler.setFromRotationMatrix(), please update your code.",
      );
    },
    setEulerFromQuaternion: function (e, t) {
      console.error(
        "REMOVED: Vector3's setEulerFromQuaternion: has been removed in favor of Euler.setFromQuaternion(), please update your code.",
      );
    },
    getPositionFromMatrix: function (e) {
      return this.x = e.elements[12],
        this.y = e.elements[13],
        this.z = e.elements[14],
        this;
    },
    getScaleFromMatrix: function (e) {
      var t = this.set(e.elements[0], e.elements[1], e.elements[2]).length(),
        i = this.set(e.elements[4], e.elements[5], e.elements[6]).length(),
        r = this.set(e.elements[8], e.elements[9], e.elements[10]).length();
      return this.x = t, this.y = i, this.z = r, this;
    },
    getColumnFromMatrix: function (e, t) {
      var i = 4 * e, r = t.elements;
      return this.x = r[i], this.y = r[i + 1], this.z = r[i + 2], this;
    },
    equals: function (e) {
      return e.x === this.x && e.y === this.y && e.z === this.z;
    },
    fromArray: function (e) {
      return this.x = e[0], this.y = e[1], this.z = e[2], this;
    },
    toArray: function () {
      return [this.x, this.y, this.z];
    },
    clone: function () {
      return new THREE.Vector3(this.x, this.y, this.z);
    },
  },
  THREE.extend(THREE.Vector3.prototype, {
    applyEuler: function () {
      var t = new THREE.Quaternion();
      return function (e) {
        return e instanceof THREE.Euler == !1 &&
          console.error(
            "ERROR: Vector3's .applyEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.",
          ),
          this.applyQuaternion(t.setFromEuler(e)),
          this;
      };
    }(),
    applyAxisAngle: function () {
      var i = new THREE.Quaternion();
      return function (e, t) {
        return this.applyQuaternion(i.setFromAxisAngle(e, t)), this;
      };
    }(),
    projectOnVector: function () {
      var i = new THREE.Vector3();
      return function (e) {
        i.copy(e).normalize();
        var t = this.dot(i);
        return this.copy(i).multiplyScalar(t);
      };
    }(),
    projectOnPlane: function () {
      var t = new THREE.Vector3();
      return function (e) {
        return t.copy(this).projectOnVector(e), this.sub(t);
      };
    }(),
    reflect: function () {
      var t = new THREE.Vector3();
      return function (e) {
        return t.copy(this).projectOnVector(e).multiplyScalar(2),
          this.subVectors(t, this);
      };
    }(),
  }),
  THREE.Vector4 = function (e, t, i, r) {
    this.x = e || 0,
      this.y = t || 0,
      this.z = i || 0,
      this.w = void 0 !== r ? r : 1;
  },
  THREE.Vector4.prototype = {
    constructor: THREE.Vector4,
    set: function (e, t, i, r) {
      return this.x = e, this.y = t, this.z = i, this.w = r, this;
    },
    setX: function (e) {
      return this.x = e, this;
    },
    setY: function (e) {
      return this.y = e, this;
    },
    setZ: function (e) {
      return this.z = e, this;
    },
    setW: function (e) {
      return this.w = e, this;
    },
    setComponent: function (e, t) {
      switch (e) {
        case 0:
          this.x = t;
          break;
        case 1:
          this.y = t;
          break;
        case 2:
          this.z = t;
          break;
        case 3:
          this.w = t;
          break;
        default:
          throw new Error("index is out of range: " + e);
      }
    },
    getComponent: function (e) {
      switch (e) {
        case 0:
          return this.x;
        case 1:
          return this.y;
        case 2:
          return this.z;
        case 3:
          return this.w;
        default:
          throw new Error("index is out of range: " + e);
      }
    },
    copy: function (e) {
      return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this.w = void 0 !== e.w ? e.w : 1,
        this;
    },
    add: function (e, t) {
      return void 0 !== t
        ? (console.warn(
          "DEPRECATED: Vector4's .add() now only accepts one argument. Use .addVectors( a, b ) instead.",
        ),
          this.addVectors(e, t))
        : (this.x += e.x, this.y += e.y, this.z += e.z, this.w += e.w, this);
    },
    addScalar: function (e) {
      return this.x += e, this.y += e, this.z += e, this.w += e, this;
    },
    addVectors: function (e, t) {
      return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this.w = e.w + t.w,
        this;
    },
    sub: function (e, t) {
      return void 0 !== t
        ? (console.warn(
          "DEPRECATED: Vector4's .sub() now only accepts one argument. Use .subVectors( a, b ) instead.",
        ),
          this.subVectors(e, t))
        : (this.x -= e.x, this.y -= e.y, this.z -= e.z, this.w -= e.w, this);
    },
    subVectors: function (e, t) {
      return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this.w = e.w - t.w,
        this;
    },
    multiplyScalar: function (e) {
      return this.x *= e, this.y *= e, this.z *= e, this.w *= e, this;
    },
    applyMatrix4: function (e) {
      var t = this.x, i = this.y, r = this.z, n = this.w, o = e.elements;
      return this.x = o[0] * t + o[4] * i + o[8] * r + o[12] * n,
        this.y = o[1] * t + o[5] * i + o[9] * r + o[13] * n,
        this.z = o[2] * t + o[6] * i + o[10] * r + o[14] * n,
        this.w = o[3] * t + o[7] * i + o[11] * r + o[15] * n,
        this;
    },
    divideScalar: function (e) {
      if (0 !== e) {
        var t = 1 / e;
        this.x *= t, this.y *= t, this.z *= t, this.w *= t;
      } else this.x = 0, this.y = 0, this.z = 0, this.w = 1;
      return this;
    },
    setAxisAngleFromQuaternion: function (e) {
      this.w = 2 * Math.acos(e.w);
      var t = Math.sqrt(1 - e.w * e.w);
      return t < 1e-4
        ? (this.x = 1, this.y = 0, this.z = 0)
        : (this.x = e.x / t, this.y = e.y / t, this.z = e.z / t),
        this;
    },
    setAxisAngleFromRotationMatrix: function (e) {
      var t,
        i,
        r,
        n,
        o = e.elements,
        a = o[0],
        s = o[4],
        l = o[8],
        c = o[1],
        h = o[5],
        u = o[9],
        p = o[2],
        f = o[6],
        d = o[10];
      if (
        Math.abs(s - c) < .01 && Math.abs(l - p) < .01 && Math.abs(u - f) < .01
      ) {
        if (
          Math.abs(s + c) < .1 && Math.abs(l + p) < .1 &&
          Math.abs(u + f) < .1 && Math.abs(a + h + d - 3) < .1
        ) {
          return this.set(1, 0, 0, 0), this;
        }
        t = Math.PI;
        var m = (a + 1) / 2,
          E = (h + 1) / 2,
          g = (d + 1) / 2,
          v = (s + c) / 4,
          y = (l + p) / 4,
          T = (u + f) / 4;
        return E < m && g < m
          ? m < .01
            ? (i = 0, n = r = .707106781)
            : (r = v / (i = Math.sqrt(m)), n = y / i)
          : g < E
          ? E < .01 ? (r = 0, n = i = .707106781)
          : (i = v / (r = Math.sqrt(E)), n = T / r)
          : g < .01
          ? (r = i = .707106781, n = 0)
          : (i = y / (n = Math.sqrt(g)), r = T / n),
          this.set(i, r, n, t),
          this;
      }
      var R = Math.sqrt(
        (f - u) * (f - u) + (l - p) * (l - p) + (c - s) * (c - s),
      );
      return Math.abs(R) < .001 && (R = 1),
        this.x = (f - u) / R,
        this.y = (l - p) / R,
        this.z = (c - s) / R,
        this.w = Math.acos((a + h + d - 1) / 2),
        this;
    },
    min: function (e) {
      return this.x > e.x && (this.x = e.x),
        this.y > e.y && (this.y = e.y),
        this.z > e.z && (this.z = e.z),
        this.w > e.w && (this.w = e.w),
        this;
    },
    max: function (e) {
      return this.x < e.x && (this.x = e.x),
        this.y < e.y && (this.y = e.y),
        this.z < e.z && (this.z = e.z),
        this.w < e.w && (this.w = e.w),
        this;
    },
    clamp: function (e, t) {
      return this.x < e.x ? this.x = e.x : this.x > t.x && (this.x = t.x),
        this.y < e.y ? this.y = e.y : this.y > t.y && (this.y = t.y),
        this.z < e.z ? this.z = e.z : this.z > t.z && (this.z = t.z),
        this.w < e.w ? this.w = e.w : this.w > t.w && (this.w = t.w),
        this;
    },
    negate: function () {
      return this.multiplyScalar(-1);
    },
    dot: function (e) {
      return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
    },
    lengthSq: function () {
      return this.x * this.x + this.y * this.y + this.z * this.z +
        this.w * this.w;
    },
    length: function () {
      return Math.sqrt(
        this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
      );
    },
    lengthManhattan: function () {
      return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) +
        Math.abs(this.w);
    },
    normalize: function () {
      return this.divideScalar(this.length());
    },
    setLength: function (e) {
      var t = this.length();
      return 0 !== t && e !== t && this.multiplyScalar(e / t), this;
    },
    lerp: function (e, t) {
      return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this.w += (e.w - this.w) * t,
        this;
    },
    equals: function (e) {
      return e.x === this.x && e.y === this.y && e.z === this.z &&
        e.w === this.w;
    },
    fromArray: function (e) {
      return this.x = e[0], this.y = e[1], this.z = e[2], this.w = e[3], this;
    },
    toArray: function () {
      return [this.x, this.y, this.z, this.w];
    },
    clone: function () {
      return new THREE.Vector4(this.x, this.y, this.z, this.w);
    },
  },
  THREE.Euler = function (e, t, i, r) {
    this._x = e || 0,
      this._y = t || 0,
      this._z = i || 0,
      this._order = r || THREE.Euler.DefaultOrder;
  },
  THREE.Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"],
  THREE.Euler.DefaultOrder = "XYZ",
  THREE.Euler.prototype = {
    constructor: THREE.Euler,
    _x: 0,
    _y: 0,
    _z: 0,
    _order: THREE.Euler.DefaultOrder,
    _quaternion: void 0,
    _updateQuaternion: function () {
      void 0 !== this._quaternion && this._quaternion.setFromEuler(this, !1);
    },
    get x() {
      return this._x;
    },
    set x(e) {
      this._x = e, this._updateQuaternion();
    },
    get y() {
      return this._y;
    },
    set y(e) {
      this._y = e, this._updateQuaternion();
    },
    get z() {
      return this._z;
    },
    set z(e) {
      this._z = e, this._updateQuaternion();
    },
    get order() {
      return this._order;
    },
    set order(e) {
      this._order = e, this._updateQuaternion();
    },
    set: function (e, t, i, r) {
      return this._x = e,
        this._y = t,
        this._z = i,
        this._order = r || this._order,
        this._updateQuaternion(),
        this;
    },
    copy: function (e) {
      return this._x = e._x,
        this._y = e._y,
        this._z = e._z,
        this._order = e._order,
        this._updateQuaternion(),
        this;
    },
    setFromRotationMatrix: function (e, t) {
      function i(e) {
        return Math.min(Math.max(e, -1), 1);
      }
      var r = e.elements,
        n = r[0],
        o = r[4],
        a = r[8],
        s = r[1],
        l = r[5],
        c = r[9],
        h = r[2],
        u = r[6],
        p = r[10];
      return "XYZ" === (t = t || this._order)
        ? (this._y = Math.asin(i(a)),
          Math.abs(a) < .99999
            ? (this._x = Math.atan2(-c, p), this._z = Math.atan2(-o, n))
            : (this._x = Math.atan2(u, l), this._z = 0))
        : "YXZ" === t
        ? (this._x = Math.asin(-i(c)),
          Math.abs(c) < .99999
            ? (this._y = Math.atan2(a, p), this._z = Math.atan2(s, l))
            : (this._y = Math.atan2(-h, n), this._z = 0))
        : "ZXY" === t
        ? (this._x = Math.asin(i(u)),
          Math.abs(u) < .99999
            ? (this._y = Math.atan2(-h, p), this._z = Math.atan2(-o, l))
            : (this._y = 0, this._z = Math.atan2(s, n)))
        : "ZYX" === t
        ? (this._y = Math.asin(-i(h)),
          Math.abs(h) < .99999
            ? (this._x = Math.atan2(u, p), this._z = Math.atan2(s, n))
            : (this._x = 0, this._z = Math.atan2(-o, l)))
        : "YZX" === t
        ? (this._z = Math.asin(i(s)),
          Math.abs(s) < .99999
            ? (this._x = Math.atan2(-c, l), this._y = Math.atan2(-h, n))
            : (this._x = 0, this._y = Math.atan2(a, p)))
        : "XZY" === t
        ? (this._z = Math.asin(-i(o)),
          Math.abs(o) < .99999
            ? (this._x = Math.atan2(u, l), this._y = Math.atan2(a, n))
            : (this._x = Math.atan2(-c, p), this._y = 0))
        : console.warn(
          "WARNING: Euler.setFromRotationMatrix() given unsupported order: " +
            t,
        ),
        this._order = t,
        this._updateQuaternion(),
        this;
    },
    setFromQuaternion: function (e, t, i) {
      function r(e) {
        return Math.min(Math.max(e, -1), 1);
      }
      var n = e.x * e.x, o = e.y * e.y, a = e.z * e.z, s = e.w * e.w;
      return "XYZ" === (t = t || this._order)
        ? (this._x = Math.atan2(2 * (e.x * e.w - e.y * e.z), s - n - o + a),
          this._y = Math.asin(r(2 * (e.x * e.z + e.y * e.w))),
          this._z = Math.atan2(2 * (e.z * e.w - e.x * e.y), s + n - o - a))
        : "YXZ" === t
        ? (this._x = Math.asin(r(2 * (e.x * e.w - e.y * e.z))),
          this._y = Math.atan2(2 * (e.x * e.z + e.y * e.w), s - n - o + a),
          this._z = Math.atan2(2 * (e.x * e.y + e.z * e.w), s - n + o - a))
        : "ZXY" === t
        ? (this._x = Math.asin(r(2 * (e.x * e.w + e.y * e.z))),
          this._y = Math.atan2(2 * (e.y * e.w - e.z * e.x), s - n - o + a),
          this._z = Math.atan2(2 * (e.z * e.w - e.x * e.y), s - n + o - a))
        : "ZYX" === t
        ? (this._x = Math.atan2(2 * (e.x * e.w + e.z * e.y), s - n - o + a),
          this._y = Math.asin(r(2 * (e.y * e.w - e.x * e.z))),
          this._z = Math.atan2(2 * (e.x * e.y + e.z * e.w), s + n - o - a))
        : "YZX" === t
        ? (this._x = Math.atan2(2 * (e.x * e.w - e.z * e.y), s - n + o - a),
          this._y = Math.atan2(2 * (e.y * e.w - e.x * e.z), s + n - o - a),
          this._z = Math.asin(r(2 * (e.x * e.y + e.z * e.w))))
        : "XZY" === t
        ? (this._x = Math.atan2(2 * (e.x * e.w + e.y * e.z), s - n + o - a),
          this._y = Math.atan2(2 * (e.x * e.z + e.y * e.w), s + n - o - a),
          this._z = Math.asin(r(2 * (e.z * e.w - e.x * e.y))))
        : console.warn(
          "WARNING: Euler.setFromQuaternion() given unsupported order: " + t,
        ),
        this._order = t,
        !1 !== i && this._updateQuaternion(),
        this;
    },
    reorder: function () {
      var t = new THREE.Quaternion();
      return function (e) {
        t.setFromEuler(this), this.setFromQuaternion(t, e);
      };
    }(),
    fromArray: function (e) {
      return this._x = e[0],
        this._y = e[1],
        this._z = e[2],
        void 0 !== e[3] && (this._order = e[3]),
        this._updateQuaternion(),
        this;
    },
    toArray: function () {
      return [this._x, this._y, this._z, this._order];
    },
    equals: function (e) {
      return e._x === this._x && e._y === this._y && e._z === this._z &&
        e._order === this._order;
    },
    clone: function () {
      return new THREE.Euler(this._x, this._y, this._z, this._order);
    },
  },
  THREE.Line3 = function (e, t) {
    this.start = void 0 !== e ? e : new THREE.Vector3(),
      this.end = void 0 !== t ? t : new THREE.Vector3();
  },
  THREE.Line3.prototype = {
    constructor: THREE.Line3,
    set: function (e, t) {
      return this.start.copy(e), this.end.copy(t), this;
    },
    copy: function (e) {
      return this.start.copy(e.start), this.end.copy(e.end), this;
    },
    center: function (e) {
      return (e || new THREE.Vector3()).addVectors(this.start, this.end)
        .multiplyScalar(.5);
    },
    delta: function (e) {
      return (e || new THREE.Vector3()).subVectors(this.end, this.start);
    },
    distanceSq: function () {
      return this.start.distanceToSquared(this.end);
    },
    distance: function () {
      return this.start.distanceTo(this.end);
    },
    at: function (e, t) {
      var i = t || new THREE.Vector3();
      return this.delta(i).multiplyScalar(e).add(this.start);
    },
    closestPointToPointParameter: function () {
      var n = new THREE.Vector3(), o = new THREE.Vector3();
      return function (e, t) {
        n.subVectors(e, this.start), o.subVectors(this.end, this.start);
        var i = o.dot(o), r = o.dot(n) / i;
        return t && (r = THREE.Math.clamp(r, 0, 1)), r;
      };
    }(),
    closestPointToPoint: function (e, t, i) {
      var r = this.closestPointToPointParameter(e, t),
        n = i || new THREE.Vector3();
      return this.delta(n).multiplyScalar(r).add(this.start);
    },
    applyMatrix4: function (e) {
      return this.start.applyMatrix4(e), this.end.applyMatrix4(e), this;
    },
    equals: function (e) {
      return e.start.equals(this.start) && e.end.equals(this.end);
    },
    clone: function () {
      return (new THREE.Line3()).copy(this);
    },
  },
  THREE.Box2 = function (e, t) {
    this.min = void 0 !== e ? e : new THREE.Vector2(1 / 0, 1 / 0),
      this.max = void 0 !== t ? t : new THREE.Vector2(-1 / 0, -1 / 0);
  },
  THREE.Box2.prototype = {
    constructor: THREE.Box2,
    set: function (e, t) {
      return this.min.copy(e), this.max.copy(t), this;
    },
    setFromPoints: function (e) {
      if (0 < e.length) {
        var t = e[0];
        this.min.copy(t), this.max.copy(t);
        for (var i = 1, r = e.length; i < r; i++) {
          (t = e[i]).x < this.min.x
            ? this.min.x = t.x
            : t.x > this.max.x && (this.max.x = t.x),
            t.y < this.min.y ? this.min.y = t.y
            : t.y > this.max.y && (this.max.y = t.y);
        }
      } else this.makeEmpty();
      return this;
    },
    setFromCenterAndSize: function () {
      var r = new THREE.Vector2();
      return function (e, t) {
        var i = r.copy(t).multiplyScalar(.5);
        return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
      };
    }(),
    copy: function (e) {
      return this.min.copy(e.min), this.max.copy(e.max), this;
    },
    makeEmpty: function () {
      return this.min.x = this.min.y = 1 / 0,
        this.max.x = this.max.y = -1 / 0,
        this;
    },
    empty: function () {
      return this.max.x < this.min.x || this.max.y < this.min.y;
    },
    center: function (e) {
      return (e || new THREE.Vector2()).addVectors(this.min, this.max)
        .multiplyScalar(.5);
    },
    size: function (e) {
      return (e || new THREE.Vector2()).subVectors(this.max, this.min);
    },
    expandByPoint: function (e) {
      return this.min.min(e), this.max.max(e), this;
    },
    expandByVector: function (e) {
      return this.min.sub(e), this.max.add(e), this;
    },
    expandByScalar: function (e) {
      return this.min.addScalar(-e), this.max.addScalar(e), this;
    },
    containsPoint: function (e) {
      return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y ||
        e.y > this.max.y);
    },
    containsBox: function (e) {
      return this.min.x <= e.min.x && e.max.x <= this.max.x &&
        this.min.y <= e.min.y && e.max.y <= this.max.y;
    },
    getParameter: function (e) {
      return new THREE.Vector2(
        (e.x - this.min.x) / (this.max.x - this.min.x),
        (e.y - this.min.y) / (this.max.y - this.min.y),
      );
    },
    isIntersectionBox: function (e) {
      return !(e.max.x < this.min.x || e.min.x > this.max.x ||
        e.max.y < this.min.y || e.min.y > this.max.y);
    },
    clampPoint: function (e, t) {
      return (t || new THREE.Vector2()).copy(e).clamp(this.min, this.max);
    },
    distanceToPoint: function () {
      var t = new THREE.Vector2();
      return function (e) {
        return t.copy(e).clamp(this.min, this.max).sub(e).length();
      };
    }(),
    intersect: function (e) {
      return this.min.max(e.min), this.max.min(e.max), this;
    },
    union: function (e) {
      return this.min.min(e.min), this.max.max(e.max), this;
    },
    translate: function (e) {
      return this.min.add(e), this.max.add(e), this;
    },
    equals: function (e) {
      return e.min.equals(this.min) && e.max.equals(this.max);
    },
    clone: function () {
      return (new THREE.Box2()).copy(this);
    },
  },
  THREE.Box3 = function (e, t) {
    this.min = void 0 !== e ? e : new THREE.Vector3(1 / 0, 1 / 0, 1 / 0),
      this.max = void 0 !== t ? t : new THREE.Vector3(-1 / 0, -1 / 0, -1 / 0);
  },
  THREE.Box3.prototype = {
    constructor: THREE.Box3,
    set: function (e, t) {
      return this.min.copy(e), this.max.copy(t), this;
    },
    addPoint: function (e) {
      e.x < this.min.x
        ? this.min.x = e.x
        : e.x > this.max.x && (this.max.x = e.x),
        e.y < this.min.y ? this.min.y = e.y
        : e.y > this.max.y && (this.max.y = e.y),
        e.z < this.min.z ? this.min.z = e.z
        : e.z > this.max.z && (this.max.z = e.z);
    },
    setFromPoints: function (e) {
      if (0 < e.length) {
        var t = e[0];
        this.min.copy(t), this.max.copy(t);
        for (var i = 1, r = e.length; i < r; i++) this.addPoint(e[i]);
      } else this.makeEmpty();
      return this;
    },
    setFromCenterAndSize: function () {
      var r = new THREE.Vector3();
      return function (e, t) {
        var i = r.copy(t).multiplyScalar(.5);
        return this.min.copy(e).sub(i), this.max.copy(e).add(i), this;
      };
    }(),
    setFromObject: function () {
      var o = new THREE.Vector3();
      return function (e) {
        var n = this;
        return e.updateMatrixWorld(!0),
          this.makeEmpty(),
          e.traverse(function (e) {
            if (void 0 !== e.geometry && void 0 !== e.geometry.vertices) {
              for (
                var t = e.geometry.vertices, i = 0, r = t.length; i < r; i++
              ) {
                o.copy(t[i]), o.applyMatrix4(e.matrixWorld), n.expandByPoint(o);
              }
            }
          }),
          this;
      };
    }(),
    copy: function (e) {
      return this.min.copy(e.min), this.max.copy(e.max), this;
    },
    makeEmpty: function () {
      return this.min.x = this.min.y = this.min.z = 1 / 0,
        this.max.x = this.max.y = this.max.z = -1 / 0,
        this;
    },
    empty: function () {
      return this.max.x < this.min.x || this.max.y < this.min.y ||
        this.max.z < this.min.z;
    },
    center: function (e) {
      return (e || new THREE.Vector3()).addVectors(this.min, this.max)
        .multiplyScalar(.5);
    },
    size: function (e) {
      return (e || new THREE.Vector3()).subVectors(this.max, this.min);
    },
    expandByPoint: function (e) {
      return this.min.min(e), this.max.max(e), this;
    },
    expandByVector: function (e) {
      return this.min.sub(e), this.max.add(e), this;
    },
    expandByScalar: function (e) {
      return this.min.addScalar(-e), this.max.addScalar(e), this;
    },
    containsPoint: function (e) {
      return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y ||
        e.y > this.max.y || e.z < this.min.z || e.z > this.max.z);
    },
    containsBox: function (e) {
      return this.min.x <= e.min.x && e.max.x <= this.max.x &&
        this.min.y <= e.min.y && e.max.y <= this.max.y &&
        this.min.z <= e.min.z && e.max.z <= this.max.z;
    },
    getParameter: function (e) {
      return new THREE.Vector3(
        (e.x - this.min.x) / (this.max.x - this.min.x),
        (e.y - this.min.y) / (this.max.y - this.min.y),
        (e.z - this.min.z) / (this.max.z - this.min.z),
      );
    },
    isIntersectionBox: function (e) {
      return !(e.max.x < this.min.x || e.min.x > this.max.x ||
        e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z ||
        e.min.z > this.max.z);
    },
    clampPoint: function (e, t) {
      return (t || new THREE.Vector3()).copy(e).clamp(this.min, this.max);
    },
    distanceToPoint: function () {
      var t = new THREE.Vector3();
      return function (e) {
        return t.copy(e).clamp(this.min, this.max).sub(e).length();
      };
    }(),
    getBoundingSphere: function () {
      var i = new THREE.Vector3();
      return function (e) {
        var t = e || new THREE.Sphere();
        return t.center = this.center(),
          t.radius = .5 * this.size(i).length(),
          t;
      };
    }(),
    intersect: function (e) {
      return this.min.max(e.min), this.max.min(e.max), this;
    },
    union: function (e) {
      return this.min.min(e.min), this.max.max(e.max), this;
    },
    applyMatrix4: function () {
      var t = [
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ];
      return function (e) {
        return t[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
          t[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
          t[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
          t[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
          t[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
          t[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
          t[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
          t[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
          this.makeEmpty(),
          this.setFromPoints(t),
          this;
      };
    }(),
    translate: function (e) {
      return this.min.add(e), this.max.add(e), this;
    },
    equals: function (e) {
      return e.min.equals(this.min) && e.max.equals(this.max);
    },
    clone: function () {
      return (new THREE.Box3()).copy(this);
    },
  },
  THREE.Matrix3 = function (e, t, i, r, n, o, a, s, l) {
    this.elements = new Float32Array(9),
      this.set(
        void 0 !== e ? e : 1,
        t || 0,
        i || 0,
        r || 0,
        void 0 !== n ? n : 1,
        o || 0,
        a || 0,
        s || 0,
        void 0 !== l ? l : 1,
      );
  },
  THREE.Matrix3.prototype = {
    constructor: THREE.Matrix3,
    set: function (e, t, i, r, n, o, a, s, l) {
      var c = this.elements;
      return c[0] = e,
        c[3] = t,
        c[6] = i,
        c[1] = r,
        c[4] = n,
        c[7] = o,
        c[2] = a,
        c[5] = s,
        c[8] = l,
        this;
    },
    identity: function () {
      return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
    },
    copy: function (e) {
      var t = e.elements;
      return this.set(t[0], t[3], t[6], t[1], t[4], t[7], t[2], t[5], t[8]),
        this;
    },
    multiplyVector3: function (e) {
      return console.warn(
        "DEPRECATED: Matrix3's .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.",
      ),
        e.applyMatrix3(this);
    },
    multiplyVector3Array: function () {
      var r = new THREE.Vector3();
      return function (e) {
        for (var t = 0, i = e.length; t < i; t += 3) {
          r.x = e[t],
            r.y = e[t + 1],
            r.z = e[t + 2],
            r.applyMatrix3(this),
            e[t] = r.x,
            e[t + 1] = r.y,
            e[t + 2] = r.z;
        }
        return e;
      };
    }(),
    multiplyScalar: function (e) {
      var t = this.elements;
      return t[0] *= e,
        t[3] *= e,
        t[6] *= e,
        t[1] *= e,
        t[4] *= e,
        t[7] *= e,
        t[2] *= e,
        t[5] *= e,
        t[8] *= e,
        this;
    },
    determinant: function () {
      var e = this.elements,
        t = e[0],
        i = e[1],
        r = e[2],
        n = e[3],
        o = e[4],
        a = e[5],
        s = e[6],
        l = e[7],
        c = e[8];
      return t * o * c - t * a * l - i * n * c + i * a * s + r * n * l -
        r * o * s;
    },
    getInverse: function (e, t) {
      var i = e.elements, r = this.elements;
      r[0] = i[10] * i[5] - i[6] * i[9],
        r[1] = -i[10] * i[1] + i[2] * i[9],
        r[2] = i[6] * i[1] - i[2] * i[5],
        r[3] = -i[10] * i[4] + i[6] * i[8],
        r[4] = i[10] * i[0] - i[2] * i[8],
        r[5] = -i[6] * i[0] + i[2] * i[4],
        r[6] = i[9] * i[4] - i[5] * i[8],
        r[7] = -i[9] * i[0] + i[1] * i[8],
        r[8] = i[5] * i[0] - i[1] * i[4];
      var n = i[0] * r[0] + i[1] * r[3] + i[2] * r[6];
      if (0 === n) {
        var o = "Matrix3.getInverse(): can't invert matrix, determinant is 0";
        if (t) throw new Error(o);
        return console.warn(o), this.identity(), this;
      }
      return this.multiplyScalar(1 / n), this;
    },
    transpose: function () {
      var e, t = this.elements;
      return e = t[1],
        t[1] = t[3],
        t[3] = e,
        e = t[2],
        t[2] = t[6],
        t[6] = e,
        e = t[5],
        t[5] = t[7],
        t[7] = e,
        this;
    },
    getNormalMatrix: function (e) {
      return this.getInverse(e).transpose(), this;
    },
    transposeIntoArray: function (e) {
      var t = this.elements;
      return e[0] = t[0],
        e[1] = t[3],
        e[2] = t[6],
        e[3] = t[1],
        e[4] = t[4],
        e[5] = t[7],
        e[6] = t[2],
        e[7] = t[5],
        e[8] = t[8],
        this;
    },
    clone: function () {
      var e = this.elements;
      return new THREE.Matrix3(
        e[0],
        e[3],
        e[6],
        e[1],
        e[4],
        e[7],
        e[2],
        e[5],
        e[8],
      );
    },
  },
  THREE.Matrix4 = function (e, t, i, r, n, o, a, s, l, c, h, u, p, f, d, m) {
    this.elements = new Float32Array(16);
    var E = this.elements;
    E[0] = void 0 !== e ? e : 1,
      E[4] = t || 0,
      E[8] = i || 0,
      E[12] = r || 0,
      E[1] = n || 0,
      E[5] = void 0 !== o ? o : 1,
      E[9] = a || 0,
      E[13] = s || 0,
      E[2] = l || 0,
      E[6] = c || 0,
      E[10] = void 0 !== h ? h : 1,
      E[14] = u || 0,
      E[3] = p || 0,
      E[7] = f || 0,
      E[11] = d || 0,
      E[15] = void 0 !== m ? m : 1;
  },
  THREE.Matrix4.prototype = {
    constructor: THREE.Matrix4,
    set: function (e, t, i, r, n, o, a, s, l, c, h, u, p, f, d, m) {
      var E = this.elements;
      return E[0] = e,
        E[4] = t,
        E[8] = i,
        E[12] = r,
        E[1] = n,
        E[5] = o,
        E[9] = a,
        E[13] = s,
        E[2] = l,
        E[6] = c,
        E[10] = h,
        E[14] = u,
        E[3] = p,
        E[7] = f,
        E[11] = d,
        E[15] = m,
        this;
    },
    identity: function () {
      return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    },
    copy: function (e) {
      return this.elements.set(e.elements), this;
    },
    extractPosition: function (e) {
      return console.warn(
        "DEPRECATED: Matrix4's .extractPosition() has been renamed to .copyPosition().",
      ),
        this.copyPosition(e);
    },
    copyPosition: function (e) {
      var t = this.elements, i = e.elements;
      return t[12] = i[12], t[13] = i[13], t[14] = i[14], this;
    },
    extractRotation: function () {
      var a = new THREE.Vector3();
      return function (e) {
        var t = this.elements,
          i = e.elements,
          r = 1 / a.set(i[0], i[1], i[2]).length(),
          n = 1 / a.set(i[4], i[5], i[6]).length(),
          o = 1 / a.set(i[8], i[9], i[10]).length();
        return t[0] = i[0] * r,
          t[1] = i[1] * r,
          t[2] = i[2] * r,
          t[4] = i[4] * n,
          t[5] = i[5] * n,
          t[6] = i[6] * n,
          t[8] = i[8] * o,
          t[9] = i[9] * o,
          t[10] = i[10] * o,
          this;
      };
    }(),
    makeRotationFromEuler: function (e) {
      e instanceof THREE.Euler == !1 &&
        console.error(
          "ERROR: Matrix's .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.  Please update your code.",
        );
      var t = this.elements,
        i = e.x,
        r = e.y,
        n = e.z,
        o = Math.cos(i),
        a = Math.sin(i),
        s = Math.cos(r),
        l = Math.sin(r),
        c = Math.cos(n),
        h = Math.sin(n);
      if ("XYZ" === e.order) {
        var u = o * c, p = o * h, f = a * c, d = a * h;
        t[0] = s * c,
          t[4] = -s * h,
          t[8] = l,
          t[1] = p + f * l,
          t[5] = u - d * l,
          t[9] = -a * s,
          t[2] = d - u * l,
          t[6] = f + p * l,
          t[10] = o * s;
      } else if ("YXZ" === e.order) {
        var m = s * c, E = s * h, g = l * c, v = l * h;
        t[0] = m + v * a,
          t[4] = g * a - E,
          t[8] = o * l,
          t[1] = o * h,
          t[5] = o * c,
          t[9] = -a,
          t[2] = E * a - g,
          t[6] = v + m * a,
          t[10] = o * s;
      } else if ("ZXY" === e.order) {
        m = s * c, E = s * h, g = l * c, v = l * h;
        t[0] = m - v * a,
          t[4] = -o * h,
          t[8] = g + E * a,
          t[1] = E + g * a,
          t[5] = o * c,
          t[9] = v - m * a,
          t[2] = -o * l,
          t[6] = a,
          t[10] = o * s;
      } else if ("ZYX" === e.order) {
        u = o * c, p = o * h, f = a * c, d = a * h;
        t[0] = s * c,
          t[4] = f * l - p,
          t[8] = u * l + d,
          t[1] = s * h,
          t[5] = d * l + u,
          t[9] = p * l - f,
          t[2] = -l,
          t[6] = a * s,
          t[10] = o * s;
      } else if ("YZX" === e.order) {
        var y = o * s, T = o * l, R = a * s, x = a * l;
        t[0] = s * c,
          t[4] = x - y * h,
          t[8] = R * h + T,
          t[1] = h,
          t[5] = o * c,
          t[9] = -a * c,
          t[2] = -l * c,
          t[6] = T * h + R,
          t[10] = y - x * h;
      } else if ("XZY" === e.order) {
        y = o * s, T = o * l, R = a * s, x = a * l;
        t[0] = s * c,
          t[4] = -h,
          t[8] = l * c,
          t[1] = y * h + x,
          t[5] = o * c,
          t[9] = T * h - R,
          t[2] = R * h - T,
          t[6] = a * c,
          t[10] = x * h + y;
      }
      return t[3] = 0,
        t[7] = 0,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this;
    },
    setRotationFromQuaternion: function (e) {
      return console.warn(
        "DEPRECATED: Matrix4's .setRotationFromQuaternion() has been deprecated in favor of makeRotationFromQuaternion.  Please update your code.",
      ),
        this.makeRotationFromQuaternion(e);
    },
    makeRotationFromQuaternion: function (e) {
      var t = this.elements,
        i = e.x,
        r = e.y,
        n = e.z,
        o = e.w,
        a = i + i,
        s = r + r,
        l = n + n,
        c = i * a,
        h = i * s,
        u = i * l,
        p = r * s,
        f = r * l,
        d = n * l,
        m = o * a,
        E = o * s,
        g = o * l;
      return t[0] = 1 - (p + d),
        t[4] = h - g,
        t[8] = u + E,
        t[1] = h + g,
        t[5] = 1 - (c + d),
        t[9] = f - m,
        t[2] = u - E,
        t[6] = f + m,
        t[10] = 1 - (c + p),
        t[3] = 0,
        t[7] = 0,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this;
    },
    lookAt: function () {
      var n = new THREE.Vector3(),
        o = new THREE.Vector3(),
        a = new THREE.Vector3();
      return function (e, t, i) {
        var r = this.elements;
        return a.subVectors(e, t).normalize(),
          0 === a.length() && (a.z = 1),
          n.crossVectors(i, a).normalize(),
          0 === n.length() && (a.x += 1e-4, n.crossVectors(i, a).normalize()),
          o.crossVectors(a, n),
          r[0] = n.x,
          r[4] = o.x,
          r[8] = a.x,
          r[1] = n.y,
          r[5] = o.y,
          r[9] = a.y,
          r[2] = n.z,
          r[6] = o.z,
          r[10] = a.z,
          this;
      };
    }(),
    multiply: function (e, t) {
      return void 0 !== t
        ? (console.warn(
          "DEPRECATED: Matrix4's .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.",
        ),
          this.multiplyMatrices(e, t)) : this.multiplyMatrices(this, e);
    },
    multiplyMatrices: function (e, t) {
      var i = e.elements,
        r = t.elements,
        n = this.elements,
        o = i[0],
        a = i[4],
        s = i[8],
        l = i[12],
        c = i[1],
        h = i[5],
        u = i[9],
        p = i[13],
        f = i[2],
        d = i[6],
        m = i[10],
        E = i[14],
        g = i[3],
        v = i[7],
        y = i[11],
        T = i[15],
        R = r[0],
        x = r[4],
        H = r[8],
        b = r[12],
        w = r[1],
        _ = r[5],
        M = r[9],
        S = r[13],
        C = r[2],
        A = r[6],
        L = r[10],
        P = r[14],
        D = r[3],
        F = r[7],
        N = r[11],
        V = r[15];
      return n[0] = o * R + a * w + s * C + l * D,
        n[4] = o * x + a * _ + s * A + l * F,
        n[8] = o * H + a * M + s * L + l * N,
        n[12] = o * b + a * S + s * P + l * V,
        n[1] = c * R + h * w + u * C + p * D,
        n[5] = c * x + h * _ + u * A + p * F,
        n[9] = c * H + h * M + u * L + p * N,
        n[13] = c * b + h * S + u * P + p * V,
        n[2] = f * R + d * w + m * C + E * D,
        n[6] = f * x + d * _ + m * A + E * F,
        n[10] = f * H + d * M + m * L + E * N,
        n[14] = f * b + d * S + m * P + E * V,
        n[3] = g * R + v * w + y * C + T * D,
        n[7] = g * x + v * _ + y * A + T * F,
        n[11] = g * H + v * M + y * L + T * N,
        n[15] = g * b + v * S + y * P + T * V,
        this;
    },
    multiplyToArray: function (e, t, i) {
      var r = this.elements;
      return this.multiplyMatrices(e, t),
        i[0] = r[0],
        i[1] = r[1],
        i[2] = r[2],
        i[3] = r[3],
        i[4] = r[4],
        i[5] = r[5],
        i[6] = r[6],
        i[7] = r[7],
        i[8] = r[8],
        i[9] = r[9],
        i[10] = r[10],
        i[11] = r[11],
        i[12] = r[12],
        i[13] = r[13],
        i[14] = r[14],
        i[15] = r[15],
        this;
    },
    multiplyScalar: function (e) {
      var t = this.elements;
      return t[0] *= e,
        t[4] *= e,
        t[8] *= e,
        t[12] *= e,
        t[1] *= e,
        t[5] *= e,
        t[9] *= e,
        t[13] *= e,
        t[2] *= e,
        t[6] *= e,
        t[10] *= e,
        t[14] *= e,
        t[3] *= e,
        t[7] *= e,
        t[11] *= e,
        t[15] *= e,
        this;
    },
    multiplyVector3: function (e) {
      return console.warn(
        "DEPRECATED: Matrix4's .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) or vector.applyProjection( matrix ) instead.",
      ),
        e.applyProjection(this);
    },
    multiplyVector4: function (e) {
      return console.warn(
        "DEPRECATED: Matrix4's .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.",
      ),
        e.applyMatrix4(this);
    },
    multiplyVector3Array: function () {
      var r = new THREE.Vector3();
      return function (e) {
        for (var t = 0, i = e.length; t < i; t += 3) {
          r.x = e[t],
            r.y = e[t + 1],
            r.z = e[t + 2],
            r.applyProjection(this),
            e[t] = r.x,
            e[t + 1] = r.y,
            e[t + 2] = r.z;
        }
        return e;
      };
    }(),
    rotateAxis: function (e) {
      console.warn(
        "DEPRECATED: Matrix4's .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.",
      ), e.transformDirection(this);
    },
    crossVector: function (e) {
      return console.warn(
        "DEPRECATED: Matrix4's .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.",
      ),
        e.applyMatrix4(this);
    },
    determinant: function () {
      var e = this.elements,
        t = e[0],
        i = e[4],
        r = e[8],
        n = e[12],
        o = e[1],
        a = e[5],
        s = e[9],
        l = e[13],
        c = e[2],
        h = e[6],
        u = e[10],
        p = e[14];
      return e[3] *
          (+n * s * h - r * l * h - n * a * u + i * l * u + r * a * p -
            i * s * p) +
        e[7] *
          (+t * s * p - t * l * u + n * o * u - r * o * p + r * l * c -
            n * s * c) +
        e[11] *
          (+t * l * h - t * a * p - n * o * h + i * o * p + n * a * c -
            i * l * c) +
        e[15] *
          (-r * a * c - t * s * h + t * a * u + r * o * h - i * o * u +
            i * s * c);
    },
    transpose: function () {
      var e, t = this.elements;
      return e = t[1],
        t[1] = t[4],
        t[4] = e,
        e = t[2],
        t[2] = t[8],
        t[8] = e,
        e = t[6],
        t[6] = t[9],
        t[9] = e,
        e = t[3],
        t[3] = t[12],
        t[12] = e,
        e = t[7],
        t[7] = t[13],
        t[13] = e,
        e = t[11],
        t[11] = t[14],
        t[14] = e,
        this;
    },
    flattenToArray: function (e) {
      var t = this.elements;
      return e[0] = t[0],
        e[1] = t[1],
        e[2] = t[2],
        e[3] = t[3],
        e[4] = t[4],
        e[5] = t[5],
        e[6] = t[6],
        e[7] = t[7],
        e[8] = t[8],
        e[9] = t[9],
        e[10] = t[10],
        e[11] = t[11],
        e[12] = t[12],
        e[13] = t[13],
        e[14] = t[14],
        e[15] = t[15],
        e;
    },
    flattenToArrayOffset: function (e, t) {
      var i = this.elements;
      return e[t] = i[0],
        e[t + 1] = i[1],
        e[t + 2] = i[2],
        e[t + 3] = i[3],
        e[t + 4] = i[4],
        e[t + 5] = i[5],
        e[t + 6] = i[6],
        e[t + 7] = i[7],
        e[t + 8] = i[8],
        e[t + 9] = i[9],
        e[t + 10] = i[10],
        e[t + 11] = i[11],
        e[t + 12] = i[12],
        e[t + 13] = i[13],
        e[t + 14] = i[14],
        e[t + 15] = i[15],
        e;
    },
    getPosition: function () {
      var t = new THREE.Vector3();
      return function () {
        console.warn(
          "DEPRECATED: Matrix4's .getPosition() has been removed. Use Vector3.getPositionFromMatrix( matrix ) instead.",
        );
        var e = this.elements;
        return t.set(e[12], e[13], e[14]);
      };
    }(),
    setPosition: function (e) {
      var t = this.elements;
      return t[12] = e.x, t[13] = e.y, t[14] = e.z, this;
    },
    getInverse: function (e, t) {
      var i = this.elements,
        r = e.elements,
        n = r[0],
        o = r[4],
        a = r[8],
        s = r[12],
        l = r[1],
        c = r[5],
        h = r[9],
        u = r[13],
        p = r[2],
        f = r[6],
        d = r[10],
        m = r[14],
        E = r[3],
        g = r[7],
        v = r[11],
        y = r[15];
      i[0] = h * m * g - u * d * g + u * f * v - c * m * v - h * f * y +
        c * d * y,
        i[4] = s * d * g - a * m * g - s * f * v + o * m * v + a * f * y -
          o * d * y,
        i[8] = a * u * g - s * h * g + s * c * v - o * u * v - a * c * y +
          o * h * y,
        i[12] = s * h * f - a * u * f - s * c * d + o * u * d + a * c * m -
          o * h * m,
        i[1] = u * d * E - h * m * E - u * p * v + l * m * v + h * p * y -
          l * d * y,
        i[5] = a * m * E - s * d * E + s * p * v - n * m * v - a * p * y +
          n * d * y,
        i[9] = s * h * E - a * u * E - s * l * v + n * u * v + a * l * y -
          n * h * y,
        i[13] = a * u * p - s * h * p + s * l * d - n * u * d - a * l * m +
          n * h * m,
        i[2] = c * m * E - u * f * E + u * p * g - l * m * g - c * p * y +
          l * f * y,
        i[6] = s * f * E - o * m * E - s * p * g + n * m * g + o * p * y -
          n * f * y,
        i[10] = o * u * E - s * c * E + s * l * g - n * u * g - o * l * y +
          n * c * y,
        i[14] = s * c * p - o * u * p - s * l * f + n * u * f + o * l * m -
          n * c * m,
        i[3] = h * f * E - c * d * E - h * p * g + l * d * g + c * p * v -
          l * f * v,
        i[7] = o * d * E - a * f * E + a * p * g - n * d * g - o * p * v +
          n * f * v,
        i[11] = a * c * E - o * h * E - a * l * g + n * h * g + o * l * v -
          n * c * v,
        i[15] = o * h * p - a * c * p + a * l * f - n * h * f - o * l * d +
          n * c * d;
      var T = n * i[0] + l * i[4] + p * i[8] + E * i[12];
      if (0 == T) {
        var R = "Matrix4.getInverse(): can't invert matrix, determinant is 0";
        if (t) throw new Error(R);
        return console.warn(R), this.identity(), this;
      }
      return this.multiplyScalar(1 / T), this;
    },
    translate: function (e) {
      console.warn("DEPRECATED: Matrix4's .translate() has been removed.");
    },
    rotateX: function (e) {
      console.warn("DEPRECATED: Matrix4's .rotateX() has been removed.");
    },
    rotateY: function (e) {
      console.warn("DEPRECATED: Matrix4's .rotateY() has been removed.");
    },
    rotateZ: function (e) {
      console.warn("DEPRECATED: Matrix4's .rotateZ() has been removed.");
    },
    rotateByAxis: function (e, t) {
      console.warn("DEPRECATED: Matrix4's .rotateByAxis() has been removed.");
    },
    scale: function (e) {
      var t = this.elements, i = e.x, r = e.y, n = e.z;
      return t[0] *= i,
        t[4] *= r,
        t[8] *= n,
        t[1] *= i,
        t[5] *= r,
        t[9] *= n,
        t[2] *= i,
        t[6] *= r,
        t[10] *= n,
        t[3] *= i,
        t[7] *= r,
        t[11] *= n,
        this;
    },
    getMaxScaleOnAxis: function () {
      var e = this.elements,
        t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
        i = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
        r = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
      return Math.sqrt(Math.max(t, Math.max(i, r)));
    },
    makeTranslation: function (e, t, i) {
      return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, i, 0, 0, 0, 1), this;
    },
    makeRotationX: function (e) {
      var t = Math.cos(e), i = Math.sin(e);
      return this.set(1, 0, 0, 0, 0, t, -i, 0, 0, i, t, 0, 0, 0, 0, 1), this;
    },
    makeRotationY: function (e) {
      var t = Math.cos(e), i = Math.sin(e);
      return this.set(t, 0, i, 0, 0, 1, 0, 0, -i, 0, t, 0, 0, 0, 0, 1), this;
    },
    makeRotationZ: function (e) {
      var t = Math.cos(e), i = Math.sin(e);
      return this.set(t, -i, 0, 0, i, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
    },
    makeRotationAxis: function (e, t) {
      var i = Math.cos(t),
        r = Math.sin(t),
        n = 1 - i,
        o = e.x,
        a = e.y,
        s = e.z,
        l = n * o,
        c = n * a;
      return this.set(
        l * o + i,
        l * a - r * s,
        l * s + r * a,
        0,
        l * a + r * s,
        c * a + i,
        c * s - r * o,
        0,
        l * s - r * a,
        c * s + r * o,
        n * s * s + i,
        0,
        0,
        0,
        0,
        1,
      ),
        this;
    },
    makeScale: function (e, t, i) {
      return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1), this;
    },
    compose: function (e, t, i) {
      return this.makeRotationFromQuaternion(t),
        this.scale(i),
        this.setPosition(e),
        this;
    },
    decompose: function () {
      var h = new THREE.Vector3(), u = new THREE.Matrix4();
      return function (e, t, i) {
        var r = this.elements,
          n = h.set(r[0], r[1], r[2]).length(),
          o = h.set(r[4], r[5], r[6]).length(),
          a = h.set(r[8], r[9], r[10]).length();
        e.x = r[12], e.y = r[13], e.z = r[14], u.elements.set(this.elements);
        var s = 1 / n, l = 1 / o, c = 1 / a;
        return u.elements[0] *= s,
          u.elements[1] *= s,
          u.elements[2] *= s,
          u.elements[4] *= l,
          u.elements[5] *= l,
          u.elements[6] *= l,
          u.elements[8] *= c,
          u.elements[9] *= c,
          u.elements[10] *= c,
          t.setFromRotationMatrix(u),
          i.x = n,
          i.y = o,
          i.z = a,
          this;
      };
    }(),
    makeFrustum: function (e, t, i, r, n, o) {
      var a = this.elements,
        s = 2 * n / (t - e),
        l = 2 * n / (r - i),
        c = (t + e) / (t - e),
        h = (r + i) / (r - i),
        u = -(o + n) / (o - n),
        p = -2 * o * n / (o - n);
      return a[0] = s,
        a[4] = 0,
        a[8] = c,
        a[12] = 0,
        a[1] = 0,
        a[5] = l,
        a[9] = h,
        a[13] = 0,
        a[2] = 0,
        a[6] = 0,
        a[10] = u,
        a[14] = p,
        a[3] = 0,
        a[7] = 0,
        a[11] = -1,
        a[15] = 0,
        this;
    },
    makePerspective: function (e, t, i, r) {
      var n = i * Math.tan(THREE.Math.degToRad(.5 * e)),
        o = -n,
        a = o * t,
        s = n * t;
      return this.makeFrustum(a, s, o, n, i, r);
    },
    makeOrthographic: function (e, t, i, r, n, o) {
      var a = this.elements,
        s = t - e,
        l = i - r,
        c = o - n,
        h = (t + e) / s,
        u = (i + r) / l,
        p = (o + n) / c;
      return a[0] = 2 / s,
        a[4] = 0,
        a[8] = 0,
        a[12] = -h,
        a[1] = 0,
        a[5] = 2 / l,
        a[9] = 0,
        a[13] = -u,
        a[2] = 0,
        a[6] = 0,
        a[10] = -2 / c,
        a[14] = -p,
        a[3] = 0,
        a[7] = 0,
        a[11] = 0,
        a[15] = 1,
        this;
    },
    fromArray: function (e) {
      return this.elements.set(e), this;
    },
    toArray: function () {
      var e = this.elements;
      return [
        e[0],
        e[1],
        e[2],
        e[3],
        e[4],
        e[5],
        e[6],
        e[7],
        e[8],
        e[9],
        e[10],
        e[11],
        e[12],
        e[13],
        e[14],
        e[15],
      ];
    },
    clone: function () {
      var e = this.elements;
      return new THREE.Matrix4(
        e[0],
        e[4],
        e[8],
        e[12],
        e[1],
        e[5],
        e[9],
        e[13],
        e[2],
        e[6],
        e[10],
        e[14],
        e[3],
        e[7],
        e[11],
        e[15],
      );
    },
  },
  THREE.Ray = function (e, t) {
    this.origin = void 0 !== e ? e : new THREE.Vector3(),
      this.direction = void 0 !== t ? t : new THREE.Vector3();
  },
  THREE.Ray.prototype = {
    constructor: THREE.Ray,
    set: function (e, t) {
      return this.origin.copy(e), this.direction.copy(t), this;
    },
    copy: function (e) {
      return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
    },
    at: function (e, t) {
      return (t || new THREE.Vector3()).copy(this.direction).multiplyScalar(e)
        .add(this.origin);
    },
    recast: function () {
      var t = new THREE.Vector3();
      return function (e) {
        return this.origin.copy(this.at(e, t)), this;
      };
    }(),
    closestPointToPoint: function (e, t) {
      var i = t || new THREE.Vector3();
      i.subVectors(e, this.origin);
      var r = i.dot(this.direction);
      return r < 0 ? i.copy(this.origin)
      : i.copy(this.direction).multiplyScalar(r).add(this.origin);
    },
    distanceToPoint: function () {
      var i = new THREE.Vector3();
      return function (e) {
        var t = i.subVectors(e, this.origin).dot(this.direction);
        return t < 0 ? this.origin.distanceTo(e)
        : (i.copy(this.direction).multiplyScalar(t).add(this.origin),
          i.distanceTo(e));
      };
    }(),
    distanceSqToSegment: function (e, t, i, r) {
      var n,
        o,
        a,
        s,
        l = e.clone().add(t).multiplyScalar(.5),
        c = t.clone().sub(e).normalize(),
        h = .5 * e.distanceTo(t),
        u = this.origin.clone().sub(l),
        p = -this.direction.dot(c),
        f = u.dot(this.direction),
        d = -u.dot(c),
        m = u.lengthSq(),
        E = Math.abs(1 - p * p);
      if (0 <= E) {
        if (o = p * f - d, s = h * E, 0 <= (n = p * d - f)) {
          if (-s <= o) {if (o <= s) {
              var g = 1 / E;
              a = (n *= g) * (n + p * (o *= g) + 2 * f) +
                o * (p * n + o + 2 * d) + m;
            } else {
              o = h,
                a = -(n = Math.max(0, -(p * o + f))) * n + o * (o + 2 * d) + m;
            }} else {
            o = -h,
              a = -(n = Math.max(0, -(p * o + f))) * n + o * (o + 2 * d) + m;
          }
        } else {
          o <= -s
            ? a = -(n = Math.max(0, -(-p * h + f))) * n + (o = 0 < n
                  ? -h
                  : Math.min(Math.max(-h, -d), h)) * (o + 2 * d) +
              m
            : o <= s
            ? (n = 0, a = (o = Math.min(Math.max(-h, -d), h)) * (o + 2 * d) + m)
            : a = -(n = Math.max(0, -(p * h + f))) * n + (o = 0 < n
                  ? h
                  : Math.min(Math.max(-h, -d), h)) * (o + 2 * d) +
              m;
        }
      } else {
        o = 0 < p ? -h : h,
          a = -(n = Math.max(0, -(p * o + f))) * n + o * (o + 2 * d) + m;
      }
      return i &&
        i.copy(this.direction.clone().multiplyScalar(n).add(this.origin)),
        r && r.copy(c.clone().multiplyScalar(o).add(l)),
        a;
    },
    isIntersectionSphere: function (e) {
      return this.distanceToPoint(e.center) <= e.radius;
    },
    isIntersectionPlane: function (e) {
      var t = e.distanceToPoint(this.origin);
      return 0 === t || e.normal.dot(this.direction) * t < 0;
    },
    distanceToPlane: function (e) {
      var t = e.normal.dot(this.direction);
      if (0 == t) return 0 == e.distanceToPoint(this.origin) ? 0 : null;
      var i = -(this.origin.dot(e.normal) + e.constant) / t;
      return 0 <= i ? i : null;
    },
    intersectPlane: function (e, t) {
      var i = this.distanceToPlane(e);
      return null === i ? null : this.at(i, t);
    },
    isIntersectionBox: function () {
      var t = new THREE.Vector3();
      return function (e) {
        return null !== this.intersectBox(e, t);
      };
    }(),
    intersectBox: function (e, t) {
      var i,
        r,
        n,
        o,
        a,
        s,
        l = 1 / this.direction.x,
        c = 1 / this.direction.y,
        h = 1 / this.direction.z,
        u = this.origin;
      return 0 <= l
        ? (i = (e.min.x - u.x) * l, r = (e.max.x - u.x) * l)
        : (i = (e.max.x - u.x) * l, r = (e.min.x - u.x) * l),
        0 <= c ? (n = (e.min.y - u.y) * c, o = (e.max.y - u.y) * c)
        : (n = (e.max.y - u.y) * c, o = (e.min.y - u.y) * c),
        o < i || r < n ? null
        : ((i < n || i != i) && (i = n),
          (o < r || r != r) && (r = o),
          0 <= h ? (a = (e.min.z - u.z) * h, s = (e.max.z - u.z) * h)
          : (a = (e.max.z - u.z) * h, s = (e.min.z - u.z) * h),
          s < i || r < a ? null
          : ((i < a || i != i) && (i = a),
            (s < r || r != r) && (r = s),
            r < 0 ? null : this.at(0 <= i ? i : r, t)));
    },
    intersectTriangle: function () {
      var h = new THREE.Vector3(),
        u = new THREE.Vector3(),
        p = new THREE.Vector3(),
        f = new THREE.Vector3();
      return function (e, t, i, r, n) {
        u.subVectors(t, e), p.subVectors(i, e), f.crossVectors(u, p);
        var o, a = this.direction.dot(f);
        if (0 < a) {
          if (r) return null;
          o = 1;
        } else {
          if (!(a < 0)) return null;
          o = -1, a = -a;
        }
        h.subVectors(this.origin, e);
        var s = o * this.direction.dot(p.crossVectors(h, p));
        if (s < 0) return null;
        var l = o * this.direction.dot(u.cross(h));
        if (l < 0) return null;
        if (a < s + l) return null;
        var c = -o * h.dot(f);
        return c < 0 ? null : this.at(c / a, n);
      };
    }(),
    applyMatrix4: function (e) {
      return this.direction.add(this.origin).applyMatrix4(e),
        this.origin.applyMatrix4(e),
        this.direction.sub(this.origin),
        this.direction.normalize(),
        this;
    },
    equals: function (e) {
      return e.origin.equals(this.origin) && e.direction.equals(this.direction);
    },
    clone: function () {
      return (new THREE.Ray()).copy(this);
    },
  },
  THREE.Sphere = function (e, t) {
    this.center = void 0 !== e ? e : new THREE.Vector3(),
      this.radius = void 0 !== t ? t : 0;
  },
  THREE.Sphere.prototype = {
    constructor: THREE.Sphere,
    set: function (e, t) {
      return this.center.copy(e), this.radius = t, this;
    },
    setFromPoints: function () {
      var a = new THREE.Box3();
      return function (e, t) {
        var i = this.center;
        void 0 !== t ? i.copy(t) : a.setFromPoints(e).center(i);
        for (var r = 0, n = 0, o = e.length; n < o; n++) {
          r = Math.max(r, i.distanceToSquared(e[n]));
        }
        return this.radius = Math.sqrt(r), this;
      };
    }(),
    copy: function (e) {
      return this.center.copy(e.center), this.radius = e.radius, this;
    },
    empty: function () {
      return this.radius <= 0;
    },
    containsPoint: function (e) {
      return e.distanceToSquared(this.center) <= this.radius * this.radius;
    },
    distanceToPoint: function (e) {
      return e.distanceTo(this.center) - this.radius;
    },
    intersectsSphere: function (e) {
      var t = this.radius + e.radius;
      return e.center.distanceToSquared(this.center) <= t * t;
    },
    clampPoint: function (e, t) {
      var i = this.center.distanceToSquared(e), r = t || new THREE.Vector3();
      return r.copy(e),
        i > this.radius * this.radius &&
        (r.sub(this.center).normalize(),
          r.multiplyScalar(this.radius).add(this.center)),
        r;
    },
    getBoundingBox: function (e) {
      var t = e || new THREE.Box3();
      return t.set(this.center, this.center), t.expandByScalar(this.radius), t;
    },
    applyMatrix4: function (e) {
      return this.center.applyMatrix4(e),
        this.radius = this.radius * e.getMaxScaleOnAxis(),
        this;
    },
    translate: function (e) {
      return this.center.add(e), this;
    },
    equals: function (e) {
      return e.center.equals(this.center) && e.radius === this.radius;
    },
    clone: function () {
      return (new THREE.Sphere()).copy(this);
    },
  },
  THREE.Frustum = function (e, t, i, r, n, o) {
    this.planes = [
      void 0 !== e ? e : new THREE.Plane(),
      void 0 !== t ? t : new THREE.Plane(),
      void 0 !== i ? i : new THREE.Plane(),
      void 0 !== r ? r : new THREE.Plane(),
      void 0 !== n ? n : new THREE.Plane(),
      void 0 !== o ? o : new THREE.Plane(),
    ];
  },
  THREE.Frustum.prototype = {
    constructor: THREE.Frustum,
    set: function (e, t, i, r, n, o) {
      var a = this.planes;
      return a[0].copy(e),
        a[1].copy(t),
        a[2].copy(i),
        a[3].copy(r),
        a[4].copy(n),
        a[5].copy(o),
        this;
    },
    copy: function (e) {
      for (var t = this.planes, i = 0; i < 6; i++) t[i].copy(e.planes[i]);
      return this;
    },
    setFromMatrix: function (e) {
      var t = this.planes,
        i = e.elements,
        r = i[0],
        n = i[1],
        o = i[2],
        a = i[3],
        s = i[4],
        l = i[5],
        c = i[6],
        h = i[7],
        u = i[8],
        p = i[9],
        f = i[10],
        d = i[11],
        m = i[12],
        E = i[13],
        g = i[14],
        v = i[15];
      return t[0].setComponents(a - r, h - s, d - u, v - m).normalize(),
        t[1].setComponents(a + r, h + s, d + u, v + m).normalize(),
        t[2].setComponents(a + n, h + l, d + p, v + E).normalize(),
        t[3].setComponents(a - n, h - l, d - p, v - E).normalize(),
        t[4].setComponents(a - o, h - c, d - f, v - g).normalize(),
        t[5].setComponents(a + o, h + c, d + f, v + g).normalize(),
        this;
    },
    intersectsObject: function () {
      var i = new THREE.Sphere();
      return function (e) {
        var t = e.geometry;
        return null === t.boundingSphere && t.computeBoundingSphere(),
          i.copy(t.boundingSphere),
          i.applyMatrix4(e.matrixWorld),
          this.intersectsSphere(i);
      };
    }(),
    intersectsSphere: function (e) {
      for (
        var t = this.planes, i = e.center, r = -e.radius, n = 0; n < 6; n++
      ) {
        if (t[n].distanceToPoint(i) < r) return !1;
      }
      return !0;
    },
    intersectsBox: function () {
      var a = new THREE.Vector3(), s = new THREE.Vector3();
      return function (e) {
        for (var t = this.planes, i = 0; i < 6; i++) {
          var r = t[i];
          a.x = 0 < r.normal.x ? e.min.x : e.max.x,
            s.x = 0 < r.normal.x ? e.max.x : e.min.x,
            a.y = 0 < r.normal.y ? e.min.y : e.max.y,
            s.y = 0 < r.normal.y ? e.max.y : e.min.y,
            a.z = 0 < r.normal.z ? e.min.z : e.max.z,
            s.z = 0 < r.normal.z ? e.max.z : e.min.z;
          var n = r.distanceToPoint(a), o = r.distanceToPoint(s);
          if (n < 0 && o < 0) return !1;
        }
        return !0;
      };
    }(),
    containsPoint: function (e) {
      for (var t = this.planes, i = 0; i < 6; i++) {
        if (t[i].distanceToPoint(e) < 0) return !1;
      }
      return !0;
    },
    clone: function () {
      return (new THREE.Frustum()).copy(this);
    },
  },
  THREE.Plane = function (e, t) {
    this.normal = void 0 !== e ? e : new THREE.Vector3(1, 0, 0),
      this.constant = void 0 !== t ? t : 0;
  },
  THREE.Plane.prototype = {
    constructor: THREE.Plane,
    set: function (e, t) {
      return this.normal.copy(e), this.constant = t, this;
    },
    setComponents: function (e, t, i, r) {
      return this.normal.set(e, t, i), this.constant = r, this;
    },
    setFromNormalAndCoplanarPoint: function (e, t) {
      return this.normal.copy(e), this.constant = -t.dot(this.normal), this;
    },
    setFromCoplanarPoints: function () {
      var n = new THREE.Vector3(), o = new THREE.Vector3();
      return function (e, t, i) {
        var r = n.subVectors(i, t).cross(o.subVectors(e, t)).normalize();
        return this.setFromNormalAndCoplanarPoint(r, e), this;
      };
    }(),
    copy: function (e) {
      return this.normal.copy(e.normal), this.constant = e.constant, this;
    },
    normalize: function () {
      var e = 1 / this.normal.length();
      return this.normal.multiplyScalar(e), this.constant *= e, this;
    },
    negate: function () {
      return this.constant *= -1, this.normal.negate(), this;
    },
    distanceToPoint: function (e) {
      return this.normal.dot(e) + this.constant;
    },
    distanceToSphere: function (e) {
      return this.distanceToPoint(e.center) - e.radius;
    },
    projectPoint: function (e, t) {
      return this.orthoPoint(e, t).sub(e).negate();
    },
    orthoPoint: function (e, t) {
      var i = this.distanceToPoint(e);
      return (t || new THREE.Vector3()).copy(this.normal).multiplyScalar(i);
    },
    isIntersectionLine: function (e) {
      var t = this.distanceToPoint(e.start), i = this.distanceToPoint(e.end);
      return t < 0 && 0 < i || i < 0 && 0 < t;
    },
    intersectLine: function () {
      var a = new THREE.Vector3();
      return function (e, t) {
        var i = t || new THREE.Vector3(),
          r = e.delta(a),
          n = this.normal.dot(r);
        if (0 == n) {
          return 0 == this.distanceToPoint(e.start) ? i.copy(e.start) : void 0;
        }
        var o = -(e.start.dot(this.normal) + this.constant) / n;
        return o < 0 || 1 < o ? void 0
        : i.copy(r).multiplyScalar(o).add(e.start);
      };
    }(),
    coplanarPoint: function (e) {
      return (e || new THREE.Vector3()).copy(this.normal).multiplyScalar(
        -this.constant,
      );
    },
    applyMatrix4: function () {
      var n = new THREE.Vector3(), o = new THREE.Vector3();
      return function (e, t) {
        t = t || (new THREE.Matrix3()).getNormalMatrix(e);
        var i = n.copy(this.normal).applyMatrix3(t), r = this.coplanarPoint(o);
        return r.applyMatrix4(e),
          this.setFromNormalAndCoplanarPoint(i, r),
          this;
      };
    }(),
    translate: function (e) {
      return this.constant = this.constant - e.dot(this.normal), this;
    },
    equals: function (e) {
      return e.normal.equals(this.normal) && e.constant == this.constant;
    },
    clone: function () {
      return (new THREE.Plane()).copy(this);
    },
  },
  THREE.Math = {
    PI2: 2 * Math.PI,
    generateUUID: function () {
      var t,
        i = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
          .split(""),
        r = new Array(36),
        n = 0;
      return function () {
        for (var e = 0; e < 36; e++) {
          8 == e || 13 == e || 18 == e || 23 == e ? r[e] = "-" : 14 == e
            ? r[e] = "4"
            : (n <= 2 && (n = 33554432 + 16777216 * Math.random() | 0),
              t = 15 & n,
              n >>= 4,
              r[e] = i[
                19 == e
                  ? 3 & t | 8
                  : t
              ]);
        }
        return r.join("");
      };
    }(),
    clamp: function (e, t, i) {
      return e < t ? t : i < e ? i : e;
    },
    clampBottom: function (e, t) {
      return e < t ? t : e;
    },
    mapLinear: function (e, t, i, r, n) {
      return r + (e - t) * (n - r) / (i - t);
    },
    smoothstep: function (e, t, i) {
      return e <= t ? 0
      : i <= e ? 1 : (e = (e - t) / (i - t)) * e * (3 - 2 * e);
    },
    smootherstep: function (e, t, i) {
      return e <= t ? 0
      : i <= e ? 1 : (e = (e - t) / (i - t)) * e * e * (e * (6 * e - 15) + 10);
    },
    random16: function () {
      return (65280 * Math.random() + 255 * Math.random()) / 65535;
    },
    randInt: function (e, t) {
      return e + Math.floor(Math.random() * (t - e + 1));
    },
    randFloat: function (e, t) {
      return e + Math.random() * (t - e);
    },
    randFloatSpread: function (e) {
      return e * (.5 - Math.random());
    },
    sign: function (e) {
      return e < 0 ? -1 : 0 < e ? 1 : 0;
    },
    degToRad: function () {
      var t = Math.PI / 180;
      return function (e) {
        return e * t;
      };
    }(),
    radToDeg: function () {
      var t = 180 / Math.PI;
      return function (e) {
        return e * t;
      };
    }(),
  },
  THREE.Spline = function (e) {
    this.points = e;
    var t, i, r, n, o, a, s, l, c, h = [], u = { x: 0, y: 0, z: 0 };
    function p(e, t, i, r, n, o, a) {
      var s = .5 * (i - e), l = .5 * (r - t);
      return (2 * (t - i) + s + l) * a + (-3 * (t - i) - 2 * s - l) * o +
        s * n + t;
    }
    this.initFromArray = function (e) {
      this.points = [];
      for (var t = 0; t < e.length; t++) {
        this.points[t] = { x: e[t][0], y: e[t][1], z: e[t][2] };
      }
    },
      this.getPoint = function (e) {
        return t = (this.points.length - 1) * e,
          i = Math.floor(t),
          r = t - i,
          h[0] = 0 === i ? i : i - 1,
          h[1] = i,
          h[2] = i > this.points.length - 2 ? this.points.length - 1 : i + 1,
          h[3] = i > this.points.length - 3 ? this.points.length - 1 : i + 2,
          a = this.points[h[0]],
          s = this.points[h[1]],
          l = this.points[h[2]],
          c = this.points[h[3]],
          o = r * (n = r * r),
          u.x = p(a.x, s.x, l.x, c.x, r, n, o),
          u.y = p(a.y, s.y, l.y, c.y, r, n, o),
          u.z = p(a.z, s.z, l.z, c.z, r, n, o),
          u;
      },
      this.getControlPointsArray = function () {
        var e, t, i = this.points.length, r = [];
        for (e = 0; e < i; e++) t = this.points[e], r[e] = [t.x, t.y, t.z];
        return r;
      },
      this.getLength = function (e) {
        var t,
          i,
          r,
          n,
          o = 0,
          a = 0,
          s = 0,
          l = new THREE.Vector3(),
          c = new THREE.Vector3(),
          h = [],
          u = 0;
        for (
          h[0] = 0,
            e || (e = 100),
            r = this.points.length * e,
            l.copy(this.points[0]),
            t = 1;
          t < r;
          t++
        ) {
          i = t / r,
            n = this.getPoint(i),
            c.copy(n),
            u += c.distanceTo(l),
            l.copy(n),
            o = (this.points.length - 1) * i,
            (a = Math.floor(o)) != s && (h[a] = u, s = a);
        }
        return h[h.length] = u, { chunks: h, total: u };
      },
      this.reparametrizeByArcLength = function (e) {
        var t,
          i,
          r,
          n,
          o,
          a,
          s,
          l,
          c = [],
          h = new THREE.Vector3(),
          u = this.getLength();
        for (
          c.push(h.copy(this.points[0]).clone()), t = 1;
          t < this.points.length;
          t++
        ) {
          for (
            a = u.chunks[t] - u.chunks[t - 1],
              s = Math.ceil(e * a / u.total),
              n = (t - 1) / (this.points.length - 1),
              o = t / (this.points.length - 1),
              i = 1;
            i < s - 1;
            i++
          ) {
            r = n + i * (1 / s) * (o - n),
              l = this.getPoint(r),
              c.push(h.copy(l).clone());
          }
          c.push(h.copy(this.points[t]).clone());
        }
        this.points = c;
      };
  },
  THREE.Triangle = function (e, t, i) {
    this.a = void 0 !== e ? e : new THREE.Vector3(),
      this.b = void 0 !== t ? t : new THREE.Vector3(),
      this.c = void 0 !== i ? i : new THREE.Vector3();
  },
  THREE.Triangle.normal = function () {
    var a = new THREE.Vector3();
    return function (e, t, i, r) {
      var n = r || new THREE.Vector3();
      n.subVectors(i, t), a.subVectors(e, t), n.cross(a);
      var o = n.lengthSq();
      return 0 < o ? n.multiplyScalar(1 / Math.sqrt(o)) : n.set(0, 0, 0);
    };
  }(),
  THREE.Triangle.barycoordFromPoint = function () {
    var m = new THREE.Vector3(),
      E = new THREE.Vector3(),
      g = new THREE.Vector3();
    return function (e, t, i, r, n) {
      m.subVectors(r, t), E.subVectors(i, t), g.subVectors(e, t);
      var o = m.dot(m),
        a = m.dot(E),
        s = m.dot(g),
        l = E.dot(E),
        c = E.dot(g),
        h = o * l - a * a,
        u = n || new THREE.Vector3();
      if (0 == h) return u.set(-2, -1, -1);
      var p = 1 / h, f = (l * s - a * c) * p, d = (o * c - a * s) * p;
      return u.set(1 - f - d, d, f);
    };
  }(),
  THREE.Triangle.containsPoint = function () {
    var o = new THREE.Vector3();
    return function (e, t, i, r) {
      var n = THREE.Triangle.barycoordFromPoint(e, t, i, r, o);
      return 0 <= n.x && 0 <= n.y && n.x + n.y <= 1;
    };
  }(),
  THREE.Triangle.prototype = {
    constructor: THREE.Triangle,
    set: function (e, t, i) {
      return this.a.copy(e), this.b.copy(t), this.c.copy(i), this;
    },
    setFromPointsAndIndices: function (e, t, i, r) {
      return this.a.copy(e[t]), this.b.copy(e[i]), this.c.copy(e[r]), this;
    },
    copy: function (e) {
      return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
    },
    area: function () {
      var e = new THREE.Vector3(), t = new THREE.Vector3();
      return function () {
        return e.subVectors(this.c, this.b),
          t.subVectors(this.a, this.b),
          .5 * e.cross(t).length();
      };
    }(),
    midpoint: function (e) {
      return (e || new THREE.Vector3()).addVectors(this.a, this.b).add(this.c)
        .multiplyScalar(1 / 3);
    },
    normal: function (e) {
      return THREE.Triangle.normal(this.a, this.b, this.c, e);
    },
    plane: function (e) {
      return (e || new THREE.Plane()).setFromCoplanarPoints(
        this.a,
        this.b,
        this.c,
      );
    },
    barycoordFromPoint: function (e, t) {
      return THREE.Triangle.barycoordFromPoint(e, this.a, this.b, this.c, t);
    },
    containsPoint: function (e) {
      return THREE.Triangle.containsPoint(e, this.a, this.b, this.c);
    },
    equals: function (e) {
      return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
    },
    clone: function () {
      return (new THREE.Triangle()).copy(this);
    },
  },
  THREE.Vertex = function (e) {
    return console.warn(
      "THREE.Vertex has been DEPRECATED. Use THREE.Vector3 instead.",
    ),
      e;
  },
  THREE.UV = function (e, t) {
    return console.warn(
      "THREE.UV has been DEPRECATED. Use THREE.Vector2 instead.",
    ),
      new THREE.Vector2(e, t);
  },
  THREE.Clock = function (e) {
    this.autoStart = void 0 === e || e,
      this.startTime = 0,
      this.oldTime = 0,
      this.elapsedTime = 0,
      this.running = !1;
  },
  THREE.Clock.prototype = {
    constructor: THREE.Clock,
    start: function () {
      this.startTime =
        void 0 !== self.performance && void 0 !== self.performance.now
          ? self.performance.now()
          : Date.now(),
        this.oldTime = this.startTime,
        this.running = !0;
    },
    stop: function () {
      this.getElapsedTime(), this.running = !1;
    },
    getElapsedTime: function () {
      return this.getDelta(), this.elapsedTime;
    },
    getDelta: function () {
      var e = 0;
      if (this.autoStart && !this.running && this.start(), this.running) {
        var t = void 0 !== self.performance && void 0 !== self.performance.now
          ? self.performance.now()
          : Date.now();
        e = .001 * (t - this.oldTime), this.oldTime = t, this.elapsedTime += e;
      }
      return e;
    },
  },
  THREE.EventDispatcher = function () {},
  THREE.EventDispatcher.prototype = {
    constructor: THREE.EventDispatcher,
    apply: function (e) {
      e.addEventListener = THREE.EventDispatcher.prototype.addEventListener,
        e.hasEventListener = THREE.EventDispatcher.prototype.hasEventListener,
        e.removeEventListener =
          THREE.EventDispatcher.prototype.removeEventListener,
        e.dispatchEvent = THREE.EventDispatcher.prototype.dispatchEvent;
    },
    addEventListener: function (e, t) {
      void 0 === this._listeners && (this._listeners = {});
      var i = this._listeners;
      void 0 === i[e] && (i[e] = []), -1 === i[e].indexOf(t) && i[e].push(t);
    },
    hasEventListener: function (e, t) {
      if (void 0 === this._listeners) return !1;
      var i = this._listeners;
      return void 0 !== i[e] && -1 !== i[e].indexOf(t);
    },
    removeEventListener: function (e, t) {
      if (void 0 !== this._listeners) {
        var i = this._listeners, r = i[e].indexOf(t);
        -1 !== r && i[e].splice(r, 1);
      }
    },
    dispatchEvent: function () {
      var n = [];
      return function (e) {
        if (void 0 !== this._listeners) {
          var t = this._listeners[e.type];
          if (void 0 !== t) {
            e.target = this;
            for (var i = t.length, r = 0; r < i; r++) n[r] = t[r];
            for (r = 0; r < i; r++) n[r].call(this, e);
          }
        }
      };
    }(),
  },
  function (P) {
    P.Raycaster = function (e, t, i, r) {
      this.ray = new P.Ray(e, t), this.near = i || 0, this.far = r || 1 / 0;
    };
    var D = new P.Sphere(),
      F = new P.Ray(),
      N = (new P.Plane(), new P.Vector3(), new P.Vector3()),
      V = new P.Matrix4(),
      o = function (e, t) {
        return e.distance - t.distance;
      },
      z = new P.Vector3(),
      U = new P.Vector3(),
      B = new P.Vector3(),
      O = function (e, t, i) {
        if (e instanceof P.Sprite) {
          if (
            N.getPositionFromMatrix(e.matrixWorld),
              (r = t.ray.distanceToPoint(N)) > e.scale.x
          ) {
            return i;
          }
          i.push({ distance: r, point: e.position, face: null, object: e });
        } else if (e instanceof P.LOD) {
          N.getPositionFromMatrix(e.matrixWorld);
          var r = t.ray.origin.distanceTo(N);
          O(e.getObjectForDistance(r), t, i);
        } else if (e instanceof P.Mesh) {
          if (
            null === (_ = e.geometry).boundingSphere &&
            _.computeBoundingSphere(),
              D.copy(_.boundingSphere),
              D.applyMatrix4(e.matrixWorld),
              !1 === t.ray.isIntersectionSphere(D)
          ) {
            return i;
          }
          if (
            V.getInverse(e.matrixWorld),
              F.copy(t.ray).applyMatrix4(V),
              null !== _.boundingBox &&
              !1 === F.isIntersectionBox(_.boundingBox)
          ) {
            return i;
          }
          if (_ instanceof P.BufferGeometry) {
            if (void 0 === (b = e.material)) return i;
            if (!1 === _.dynamic) return i;
            var n = t.precision;
            if (void 0 !== _.attributes.index) {
              for (
                var o = _.offsets,
                  a = _.attributes.index.array,
                  s = _.attributes.position.array,
                  l = _.offsets.length,
                  c = _.attributes.index.array.length / 3,
                  h = 0;
                h < l;
                ++h
              ) {
                for (
                  var u = o[h].start,
                    p = o[h].count,
                    f = o[h].index,
                    d = u,
                    m = u + p;
                  d < m;
                  d += 3
                ) {
                  if (
                    g = f + a[d],
                      v = f + a[d + 1],
                      y = f + a[d + 2],
                      z.set(s[3 * g], s[3 * g + 1], s[3 * g + 2]),
                      U.set(s[3 * v], s[3 * v + 1], s[3 * v + 2]),
                      B.set(s[3 * y], s[3 * y + 1], s[3 * y + 2]),
                      b.side === P.BackSide
                  ) {
                    var E = F.intersectTriangle(B, U, z, !0);
                  } else {
                    E = F.intersectTriangle(z, U, B, b.side !== P.DoubleSide);
                  }
                  if (null !== E) {
                    E.applyMatrix4(e.matrixWorld),
                      (r = t.ray.origin.distanceTo(E)) < n || r < t.near ||
                      r > t.far ||
                      i.push({
                        distance: r,
                        point: E,
                        face: null,
                        faceIndex: null,
                        object: e,
                      });
                  }
                }
              }
            } else {
              for (
                o = _.offsets,
                  s = _.attributes.position.array,
                  l = _.offsets.length,
                  c = _.attributes.position.array.length,
                  d = 0;
                d < c;
                d += 3
              ) {
                if (
                  v = (g = d) + 1,
                    y = d + 2,
                    z.set(s[3 * g], s[3 * g + 1], s[3 * g + 2]),
                    U.set(s[3 * v], s[3 * v + 1], s[3 * v + 2]),
                    B.set(s[3 * y], s[3 * y + 1], s[3 * y + 2]),
                    b.side === P.BackSide
                ) {
                  E = F.intersectTriangle(B, U, z, !0);
                } else {
                  E = F.intersectTriangle(z, U, B, b.side !== P.DoubleSide);
                }
                if (null !== E) {
                  E.applyMatrix4(e.matrixWorld),
                    (r = t.ray.origin.distanceTo(E)) < n || r < t.near ||
                    r > t.far ||
                    i.push({
                      distance: r,
                      point: E,
                      face: null,
                      faceIndex: null,
                      object: e,
                    });
                }
              }
            }
          } else if (_ instanceof P.Geometry) {
            var g,
              v,
              y,
              T = e.material instanceof P.MeshFaceMaterial,
              R = !0 === T ? e.material.materials : null,
              x = (n = t.precision, _.vertices),
              H = 0;
            for (c = _.faces.length; H < c; H++) {
              var b, w = _.faces[H];
              if (
                void 0 !== (b = !0 === T
                  ? R[w.materialIndex]
                  : e.material)
              ) {
                if (g = x[w.a], v = x[w.b], y = x[w.c], b.side === P.BackSide) {
                  E = F.intersectTriangle(y, v, g, !0);
                } else {
                  E = F.intersectTriangle(g, v, y, b.side !== P.DoubleSide);
                }
                if (null !== E) {
                  E.applyMatrix4(e.matrixWorld),
                    (r = t.ray.origin.distanceTo(E)) < n || r < t.near ||
                    r > t.far ||
                    i.push({
                      distance: r,
                      point: E,
                      face: w,
                      faceIndex: H,
                      object: e,
                    });
                }
              }
            }
          }
        } else if (e instanceof P.Line) {
          var _, M = (n = t.linePrecision) * n;
          if (
            null === (_ = e.geometry).boundingSphere &&
            _.computeBoundingSphere(),
              D.copy(_.boundingSphere),
              D.applyMatrix4(e.matrixWorld),
              !1 === t.ray.isIntersectionSphere(D)
          ) {
            return i;
          }
          if (
            V.getInverse(e.matrixWorld),
              F.copy(t.ray).applyMatrix4(V),
              _ instanceof P.Geometry
          ) {
            var S = (x = _.vertices).length,
              C = new P.Vector3(),
              A = new P.Vector3(),
              L = e.type === P.LineStrip ? 1 : 2;
            for (d = 0; d < S - 1; d += L) {
              if (!(M < F.distanceSqToSegment(x[d], x[d + 1], A, C))) {
                (r = F.origin.distanceTo(A)) < t.near || r > t.far ||
                  i.push({
                    distance: r,
                    point: C.clone().applyMatrix4(e.matrixWorld),
                    face: null,
                    faceIndex: null,
                    object: e,
                  });
              }
            }
          }
        }
      },
      a = function (e, t, i) {
        for (var r = e.getDescendants(), n = 0, o = r.length; n < o; n++) {
          O(r[n], t, i);
        }
      };
    P.Raycaster.prototype.precision = 1e-4,
      P.Raycaster.prototype.linePrecision = 1,
      P.Raycaster.prototype.set = function (e, t) {
        this.ray.set(e, t);
      },
      P.Raycaster.prototype.intersectObject = function (e, t) {
        var i = [];
        return !0 === t && a(e, this, i), O(e, this, i), i.sort(o), i;
      },
      P.Raycaster.prototype.intersectObjects = function (e, t) {
        for (var i = [], r = 0, n = e.length; r < n; r++) {
          O(e[r], this, i), !0 === t && a(e[r], this, i);
        }
        return i.sort(o), i;
      };
  }(THREE),
  THREE.Object3D = function () {
    this.id = THREE.Object3DIdCount++,
      this.uuid = THREE.Math.generateUUID(),
      this.name = "",
      this.parent = void 0,
      this.children = [],
      this.up = new THREE.Vector3(0, 1, 0),
      this.position = new THREE.Vector3(),
      this.rotation = new THREE.Euler(),
      this.quaternion = new THREE.Quaternion(),
      this.scale = new THREE.Vector3(1, 1, 1),
      this.rotation._quaternion = this.quaternion,
      this.quaternion._euler = this.rotation,
      this.renderDepth = null,
      this.rotationAutoUpdate = !0,
      this.matrix = new THREE.Matrix4(),
      this.matrixWorld = new THREE.Matrix4(),
      this.matrixAutoUpdate = !0,
      this.matrixWorldNeedsUpdate = !0,
      this.visible = !0,
      this.castShadow = !1,
      this.receiveShadow = !1,
      this.frustumCulled = !0,
      this.userData = {};
  },
  THREE.Object3D.prototype = {
    constructor: THREE.Object3D,
    get eulerOrder() {
      return console.warn(
        "DEPRECATED: Object3D's .eulerOrder has been moved to Object3D's .rotation.order.",
      ),
        this.rotation.order;
    },
    set eulerOrder(e) {
      console.warn(
        "DEPRECATED: Object3D's .eulerOrder has been moved to Object3D's .rotation.order.",
      ), this.rotation.order = e;
    },
    get useQuaternion() {
      console.warn(
        "DEPRECATED: Object3D's .useQuaternion has been removed. The library now uses quaternions by default.",
      );
    },
    set useQuaternion(e) {
      console.warn(
        "DEPRECATED: Object3D's .useQuaternion has been removed. The library now uses quaternions by default.",
      );
    },
    applyMatrix: function () {
      var t = new THREE.Matrix4();
      return function (e) {
        this.matrix.multiplyMatrices(e, this.matrix),
          this.position.getPositionFromMatrix(this.matrix),
          this.scale.getScaleFromMatrix(this.matrix),
          t.extractRotation(this.matrix),
          this.quaternion.setFromRotationMatrix(t);
      };
    }(),
    setRotationFromAxisAngle: function (e, t) {
      this.quaternion.setFromAxisAngle(e, t);
    },
    setRotationFromEuler: function (e) {
      this.quaternion.setFromEuler(e, !0);
    },
    setRotationFromMatrix: function (e) {
      this.quaternion.setFromRotationMatrix(e);
    },
    setRotationFromQuaternion: function (e) {
      this.quaternion.copy(e);
    },
    rotateOnAxis: function () {
      var i = new THREE.Quaternion();
      return function (e, t) {
        return i.setFromAxisAngle(e, t), this.quaternion.multiply(i), this;
      };
    }(),
    rotateX: function () {
      var t = new THREE.Vector3(1, 0, 0);
      return function (e) {
        return this.rotateOnAxis(t, e);
      };
    }(),
    rotateY: function () {
      var t = new THREE.Vector3(0, 1, 0);
      return function (e) {
        return this.rotateOnAxis(t, e);
      };
    }(),
    rotateZ: function () {
      var t = new THREE.Vector3(0, 0, 1);
      return function (e) {
        return this.rotateOnAxis(t, e);
      };
    }(),
    translateOnAxis: function () {
      var i = new THREE.Vector3();
      return function (e, t) {
        return i.copy(e),
          i.applyQuaternion(this.quaternion),
          this.position.add(i.multiplyScalar(t)),
          this;
      };
    }(),
    translate: function (e, t) {
      return console.warn(
        "DEPRECATED: Object3D's .translate() has been removed. Use .translateOnAxis( axis, distance ) instead. Note args have been changed.",
      ),
        this.translateOnAxis(t, e);
    },
    translateX: function () {
      var t = new THREE.Vector3(1, 0, 0);
      return function (e) {
        return this.translateOnAxis(t, e);
      };
    }(),
    translateY: function () {
      var t = new THREE.Vector3(0, 1, 0);
      return function (e) {
        return this.translateOnAxis(t, e);
      };
    }(),
    translateZ: function () {
      var t = new THREE.Vector3(0, 0, 1);
      return function (e) {
        return this.translateOnAxis(t, e);
      };
    }(),
    localToWorld: function (e) {
      return e.applyMatrix4(this.matrixWorld);
    },
    worldToLocal: function () {
      var t = new THREE.Matrix4();
      return function (e) {
        return e.applyMatrix4(t.getInverse(this.matrixWorld));
      };
    }(),
    lookAt: function () {
      var t = new THREE.Matrix4();
      return function (e) {
        t.lookAt(e, this.position, this.up),
          this.quaternion.setFromRotationMatrix(t);
      };
    }(),
    add: function (e) {
      if (e !== this) {
        if (e instanceof THREE.Object3D) {
          void 0 !== e.parent && e.parent.remove(e),
            e.parent = this,
            e.dispatchEvent({ type: "added" }),
            this.children.push(e);
          for (var t = this; void 0 !== t.parent;) t = t.parent;
          void 0 !== t && t instanceof THREE.Scene && t.__addObject(e);
        }
      } else {
        console.warn(
          "THREE.Object3D.add: An object can't be added as a child of itself.",
        );
      }
    },
    remove: function (e) {
      var t = this.children.indexOf(e);
      if (-1 !== t) {
        e.parent = void 0,
          e.dispatchEvent({ type: "removed" }),
          this.children.splice(t, 1);
        for (var i = this; void 0 !== i.parent;) i = i.parent;
        void 0 !== i && i instanceof THREE.Scene && i.__removeObject(e);
      }
    },
    traverse: function (e) {
      e(this);
      for (var t = 0, i = this.children.length; t < i; t++) {
        this.children[t].traverse(e);
      }
    },
    getObjectById: function (e, t) {
      for (var i = 0, r = this.children.length; i < r; i++) {
        var n = this.children[i];
        if (n.id === e) return n;
        if (!0 === t && void 0 !== (n = n.getObjectById(e, t))) return n;
      }
    },
    getObjectByName: function (e, t) {
      for (var i = 0, r = this.children.length; i < r; i++) {
        var n = this.children[i];
        if (n.name === e) return n;
        if (!0 === t && void 0 !== (n = n.getObjectByName(e, t))) return n;
      }
    },
    getChildByName: function (e, t) {
      return console.warn(
        "DEPRECATED: Object3D's .getChildByName() has been renamed to .getObjectByName().",
      ),
        this.getObjectByName(e, t);
    },
    getDescendants: function (e) {
      void 0 === e && (e = []), Array.prototype.push.apply(e, this.children);
      for (var t = 0, i = this.children.length; t < i; t++) {
        this.children[t].getDescendants(e);
      }
      return e;
    },
    updateMatrix: function () {
      this.matrix.compose(this.position, this.quaternion, this.scale),
        this.matrixWorldNeedsUpdate = !0;
    },
    updateMatrixWorld: function (e) {
      !0 === this.matrixAutoUpdate && this.updateMatrix(),
        !0 !== this.matrixWorldNeedsUpdate && !0 !== e ||
        (void 0 === this.parent
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix,
          ),
          e = !(this.matrixWorldNeedsUpdate = !1));
      for (var t = 0, i = this.children.length; t < i; t++) {
        this.children[t].updateMatrixWorld(e);
      }
    },
    clone: function (e, t) {
      if (
        void 0 === e && (e = new THREE.Object3D()),
          void 0 === t && (t = !0),
          e.name = this.name,
          e.up.copy(this.up),
          e.position.copy(this.position),
          e.quaternion.copy(this.quaternion),
          e.scale.copy(this.scale),
          e.renderDepth = this.renderDepth,
          e.rotationAutoUpdate = this.rotationAutoUpdate,
          e.matrix.copy(this.matrix),
          e.matrixWorld.copy(this.matrixWorld),
          e.matrixAutoUpdate = this.matrixAutoUpdate,
          e.matrixWorldNeedsUpdate = this.matrixWorldNeedsUpdate,
          e.visible = this.visible,
          e.castShadow = this.castShadow,
          e.receiveShadow = this.receiveShadow,
          e.frustumCulled = this.frustumCulled,
          e.userData = JSON.parse(JSON.stringify(this.userData)),
          !0 === t
      ) {
        for (var i = 0; i < this.children.length; i++) {
          var r = this.children[i];
          e.add(r.clone());
        }
      }
      return e;
    },
  },
  THREE.EventDispatcher.prototype.apply(THREE.Object3D.prototype),
  THREE.Object3DIdCount = 0,
  THREE.Projector = function () {
    var t,
      z,
      U,
      B,
      O,
      k,
      I,
      j,
      G,
      W,
      X,
      i = [],
      r = 0,
      q = [],
      n = 0,
      o = [],
      a = 0,
      s = [],
      l = 0,
      c = [],
      h = 0,
      Y = { objects: [], sprites: [], lights: [], elements: [] },
      u = new THREE.Vector3(),
      K = new THREE.Vector4(),
      Q = new THREE.Box3(
        new THREE.Vector3(-1, -1, -1),
        new THREE.Vector3(1, 1, 1),
      ),
      Z = new THREE.Box3(),
      $ = new Array(3),
      J = (new Array(4), new THREE.Matrix4()),
      ee = new THREE.Matrix4(),
      te = new THREE.Matrix4(),
      ie = new THREE.Matrix3(),
      re = new THREE.Matrix3(),
      ne = new THREE.Vector3(),
      oe = new THREE.Frustum(),
      ae = new THREE.Vector4(),
      se = new THREE.Vector4();
    this.projectVector = function (e, t) {
      return t.matrixWorldInverse.getInverse(t.matrixWorld),
        ee.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
        e.applyProjection(ee);
    },
      this.unprojectVector = function (e, t) {
        return t.projectionMatrixInverse.getInverse(t.projectionMatrix),
          ee.multiplyMatrices(t.matrixWorld, t.projectionMatrixInverse),
          e.applyProjection(ee);
      },
      this.pickingRay = function (e, t) {
        e.z = -1;
        var i = new THREE.Vector3(e.x, e.y, 1);
        return this.unprojectVector(e, t),
          this.unprojectVector(i, t),
          i.sub(e).normalize(),
          new THREE.Raycaster(e, i);
      };
    var p = function (e) {
        return (t = function () {
          if (z === r) {
            var e = new THREE.RenderableObject();
            return i.push(e), r++, z++, e;
          }
          return i[z++];
        }()).id = e.id,
          null !== (t.object = e).renderDepth
            ? t.z = e.renderDepth
            : (u.getPositionFromMatrix(e.matrixWorld),
              u.applyProjection(ee),
              t.z = u.z),
          t;
      },
      le = function (e) {
        if (!1 !== e.visible) {
          e instanceof THREE.Light
            ? Y.lights.push(e)
            : e instanceof THREE.Mesh || e instanceof THREE.Line
            ? !1 !== e.frustumCulled && !0 !== oe.intersectsObject(e) ||
              Y.objects.push(p(e))
            : e instanceof THREE.Sprite && Y.sprites.push(p(e));
          for (var t = 0, i = e.children.length; t < i; t++) le(e.children[t]);
        }
      };
    function ce() {
      if (B === n) {
        var e = new THREE.RenderableVertex();
        return q.push(e), n++, B++, e;
      }
      return q[B++];
    }
    function he() {
      if (k === a) {
        var e = new THREE.RenderableFace3();
        return o.push(e), a++, k++, e;
      }
      return o[k++];
    }
    function ue() {
      if (j === l) {
        var e = new THREE.RenderableLine();
        return s.push(e), l++, j++, e;
      }
      return s[j++];
    }
    function pe() {
      if (W === h) {
        var e = new THREE.RenderableSprite();
        return c.push(e), h++, W++, e;
      }
      return c[W++];
    }
    function fe(e, t) {
      return e.z !== t.z ? t.z - e.z : e.id !== t.id ? e.id - t.id : 0;
    }
    function de(e, t) {
      var i = 0,
        r = 1,
        n = e.z + e.w,
        o = t.z + t.w,
        a = -e.z + e.w,
        s = -t.z + t.w;
      return 0 <= n && 0 <= o && 0 <= a && 0 <= s ||
        !(n < 0 && o < 0 || a < 0 && s < 0) &&
          (n < 0
            ? i = Math.max(i, n / (n - o))
            : o < 0 && (r = Math.min(r, n / (n - o))),
            a < 0
              ? i = Math.max(i, a / (a - s))
              : s < 0 && (r = Math.min(r, a / (a - s))),
            !(r < i) && (e.lerp(t, i), t.lerp(e, 1 - r), !0));
    }
    this.projectScene = function (e, t, i, r) {
      var n,
        o,
        a,
        s,
        l,
        c,
        h,
        u,
        p,
        f,
        d,
        m,
        E,
        g,
        v,
        y,
        T,
        R,
        x,
        H,
        b,
        w,
        _,
        M,
        S,
        C,
        A,
        L = !1;
      for (
        W = j = k = 0,
          !(Y.elements.length = 0) === e.autoUpdate && e.updateMatrixWorld(),
          void 0 === t.parent && t.updateMatrixWorld(),
          J.copy(t.matrixWorldInverse.getInverse(t.matrixWorld)),
          ee.multiplyMatrices(t.projectionMatrix, J),
          re.getNormalMatrix(J),
          oe.setFromMatrix(ee),
          C = e,
          A = i,
          z = 0,
          Y.objects.length = 0,
          Y.sprites.length = 0,
          Y.lights.length = 0,
          le(C),
          !0 === A && Y.objects.sort(fe),
          n = 0,
          o = Y.objects.length;
        n < o;
        n++
      ) {
        if (
          E = Y.objects[n].object,
            X = E.matrixWorld,
            B = 0,
            E instanceof THREE.Mesh
        ) {
          for (
            v = (g = E.geometry).vertices,
              y = g.faces,
              x = g.faceVertexUvs,
              ie.getNormalMatrix(X),
              S = !0 === (M = E.material instanceof THREE.MeshFaceMaterial)
                ? E.material
                : null,
              a = 0,
              s = v.length;
            a < s;
            a++
          ) {
            (U = ce()).positionWorld.copy(v[a]).applyMatrix4(X),
              U.positionScreen.copy(U.positionWorld).applyMatrix4(ee);
            var P = 1 / U.positionScreen.w;
            U.positionScreen.x *= P,
              U.positionScreen.y *= P,
              U.positionScreen.z *= P,
              U.visible =
                !(U.positionScreen.x < -1 || 1 < U.positionScreen.x ||
                  U.positionScreen.y < -1 || 1 < U.positionScreen.y ||
                  U.positionScreen.z < -1 || 1 < U.positionScreen.z);
          }
          for (l = 0, c = y.length; l < c; l++) {
            T = y[l];
            var D = !0 === M ? S.materials[T.materialIndex] : E.material;
            if (void 0 !== D) {
              var F = D.side;
              if (
                b = q[T.a],
                  w = q[T.b],
                  _ = q[T.c],
                  $[0] = b.positionScreen,
                  $[1] = w.positionScreen,
                  $[2] = _.positionScreen,
                  (!0 === b.visible || !0 === w.visible || !0 === _.visible ||
                    Q.isIntersectionBox(Z.setFromPoints($))) &&
                  (L =
                    (_.positionScreen.x - b.positionScreen.x) *
                            (w.positionScreen.y - b.positionScreen.y) -
                        (_.positionScreen.y - b.positionScreen.y) *
                          (w.positionScreen.x - b.positionScreen.x) < 0,
                    F === THREE.DoubleSide || L === (F === THREE.FrontSide))
              ) {
                for (
                  (O = he()).id = E.id,
                    O.v1.copy(b),
                    O.v2.copy(w),
                    O.v3.copy(_),
                    O.normalModel.copy(T.normal),
                    !1 !== L ||
                    F !== THREE.BackSide && F !== THREE.DoubleSide ||
                    O.normalModel.negate(),
                    O.normalModel.applyMatrix3(ie).normalize(),
                    O.normalModelView.copy(O.normalModel).applyMatrix3(re),
                    O.centroidModel.copy(T.centroid).applyMatrix4(X),
                    R = T.vertexNormals,
                    h = 0,
                    u = Math.min(R.length, 3);
                  h < u;
                  h++
                ) {
                  var N = O.vertexNormalsModel[h];
                  N.copy(R[h]),
                    !1 !== L ||
                    F !== THREE.BackSide && F !== THREE.DoubleSide ||
                    N.negate(),
                    N.applyMatrix3(ie).normalize(),
                    O.vertexNormalsModelView[h].copy(N).applyMatrix3(re);
                }
                for (
                  O.vertexNormalsLength = R.length,
                    p = 0,
                    f = Math.min(x.length, 3);
                  p < f;
                  p++
                ) {
                  if (void 0 !== (H = x[p][l])) {
                    for (d = 0, m = H.length; d < m; d++) {
                      O.uvs[p][d] = H[d];
                    }
                  }
                }
                O.color = T.color,
                  O.material = D,
                  ne.copy(O.centroidModel).applyProjection(ee),
                  O.z = ne.z,
                  Y.elements.push(O);
              }
            }
          }
        } else if (E instanceof THREE.Line) {
          te.multiplyMatrices(ee, X),
            v = E.geometry.vertices,
            (b = ce()).positionScreen.copy(v[0]).applyMatrix4(te);
          var V = E.type === THREE.LinePieces ? 2 : 1;
          for (a = 1, s = v.length; a < s; a++) {
            (b = ce()).positionScreen.copy(v[a]).applyMatrix4(te),
              0 < (a + 1) % V ||
              (w = q[B - 2],
                ae.copy(b.positionScreen),
                se.copy(w.positionScreen),
                !0 === de(ae, se) &&
                (ae.multiplyScalar(1 / ae.w),
                  se.multiplyScalar(1 / se.w),
                  (I = ue()).id = E.id,
                  I.v1.positionScreen.copy(ae),
                  I.v2.positionScreen.copy(se),
                  I.z = Math.max(ae.z, se.z),
                  I.material = E.material,
                  E.material.vertexColors === THREE.VertexColors &&
                  (I.vertexColors[0].copy(E.geometry.colors[a]),
                    I.vertexColors[1].copy(E.geometry.colors[a - 1])),
                  Y.elements.push(I)));
          }
        }
      }
      for (n = 0, o = Y.sprites.length; n < o; n++) {
        if (
          E = Y.sprites[n].object, X = E.matrixWorld, E instanceof THREE.Sprite
        ) {
          K.set(X.elements[12], X.elements[13], X.elements[14], 1),
            K.applyMatrix4(ee);
          P = 1 / K.w;
          K.z *= P,
            -1 < K.z && K.z < 1 &&
            ((G = pe()).id = E.id,
              G.x = K.x * P,
              G.y = K.y * P,
              G.z = K.z,
              G.object = E,
              G.rotation = E.rotation,
              G.scale.x = E.scale.x *
                Math.abs(
                  G.x -
                    (K.x + t.projectionMatrix.elements[0]) /
                      (K.w + t.projectionMatrix.elements[12]),
                ),
              G.scale.y = E.scale.y *
                Math.abs(
                  G.y -
                    (K.y + t.projectionMatrix.elements[5]) /
                      (K.w + t.projectionMatrix.elements[13]),
                ),
              G.material = E.material,
              Y.elements.push(G));
        }
      }
      return !0 === r && Y.elements.sort(fe), Y;
    };
  },
  THREE.Face3 = function (e, t, i, r, n, o) {
    this.a = e,
      this.b = t,
      this.c = i,
      this.normal = r instanceof THREE.Vector3 ? r : new THREE.Vector3(),
      this.vertexNormals = r instanceof Array ? r : [],
      this.color = n instanceof THREE.Color ? n : new THREE.Color(),
      this.vertexColors = n instanceof Array ? n : [],
      this.vertexTangents = [],
      this.materialIndex = void 0 !== o ? o : 0,
      this.centroid = new THREE.Vector3();
  },
  THREE.Face3.prototype = {
    constructor: THREE.Face3,
    clone: function () {
      var e, t, i = new THREE.Face3(this.a, this.b, this.c);
      for (
        i.normal.copy(this.normal),
          i.color.copy(this.color),
          i.centroid.copy(this.centroid),
          i.materialIndex = this.materialIndex,
          e = 0,
          t = this.vertexNormals.length;
        e < t;
        e++
      ) {
        i.vertexNormals[e] = this.vertexNormals[e].clone();
      }
      for (e = 0, t = this.vertexColors.length; e < t; e++) {
        i.vertexColors[e] = this.vertexColors[e].clone();
      }
      for (e = 0, t = this.vertexTangents.length; e < t; e++) {
        i.vertexTangents[e] = this.vertexTangents[e].clone();
      }
      return i;
    },
  },
  THREE.Face4 = function (e, t, i, r, n, o, a) {
    return console.warn(
      "THREE.Face4 has been removed. A THREE.Face3 will be created instead.",
    ),
      new THREE.Face3(e, t, i, n, o, a);
  },
  THREE.Geometry = function () {
    this.id = THREE.GeometryIdCount++,
      this.uuid = THREE.Math.generateUUID(),
      this.name = "",
      this.vertices = [],
      this.colors = [],
      this.faces = [],
      this.faceVertexUvs = [[]],
      this.morphTargets = [],
      this.morphColors = [],
      this.morphNormals = [],
      this.skinWeights = [],
      this.skinIndices = [],
      this.lineDistances = [],
      this.boundingBox = null,
      this.boundingSphere = null,
      this.hasTangents = !1,
      this.dynamic = !0,
      this.verticesNeedUpdate = !1,
      this.elementsNeedUpdate = !1,
      this.uvsNeedUpdate = !1,
      this.normalsNeedUpdate = !1,
      this.tangentsNeedUpdate = !1,
      this.colorsNeedUpdate = !1,
      this.lineDistancesNeedUpdate = !1,
      this.buffersNeedUpdate = !1;
  },
  THREE.Geometry.prototype = {
    constructor: THREE.Geometry,
    applyMatrix: function (e) {
      for (
        var t = (new THREE.Matrix3()).getNormalMatrix(e),
          i = 0,
          r = this.vertices.length;
        i < r;
        i++
      ) {
        this.vertices[i].applyMatrix4(e);
      }
      for (i = 0, r = this.faces.length; i < r; i++) {
        var n = this.faces[i];
        n.normal.applyMatrix3(t).normalize();
        for (var o = 0, a = n.vertexNormals.length; o < a; o++) {n
            .vertexNormals[o].applyMatrix3(t).normalize();}
        n.centroid.applyMatrix4(e);
      }
      this.boundingBox instanceof THREE.Box3 && this.computeBoundingBox(),
        this.boundingSphere instanceof THREE.Sphere &&
        this.computeBoundingSphere();
    },
    computeCentroids: function () {
      var e, t, i;
      for (e = 0, t = this.faces.length; e < t; e++) {
        (i = this.faces[e]).centroid.set(0, 0, 0),
          i.centroid.add(this.vertices[i.a]),
          i.centroid.add(this.vertices[i.b]),
          i.centroid.add(this.vertices[i.c]),
          i.centroid.divideScalar(3);
      }
    },
    computeFaceNormals: function () {
      for (
        var e = new THREE.Vector3(),
          t = new THREE.Vector3(),
          i = 0,
          r = this.faces.length;
        i < r;
        i++
      ) {
        var n = this.faces[i],
          o = this.vertices[n.a],
          a = this.vertices[n.b],
          s = this.vertices[n.c];
        e.subVectors(s, a),
          t.subVectors(o, a),
          e.cross(t),
          e.normalize(),
          n.normal.copy(e);
      }
    },
    computeVertexNormals: function (e) {
      var t, i, r, n, o, a;
      if (void 0 === this.__tmpVertices) {
        for (
          this.__tmpVertices = new Array(this.vertices.length),
            a = this.__tmpVertices,
            t = 0,
            i = this.vertices.length;
          t < i;
          t++
        ) {
          a[t] = new THREE.Vector3();
        }
        for (r = 0, n = this.faces.length; r < n; r++) {
          (o = this.faces[r]).vertexNormals = [
            new THREE.Vector3(),
            new THREE.Vector3(),
            new THREE.Vector3(),
          ];
        }
      } else {
        for (
          a = this.__tmpVertices, t = 0, i = this.vertices.length; t < i; t++
        ) {
          a[t].set(0, 0, 0);
        }
      }
      if (e) {
        var s, l, c, h = new THREE.Vector3(), u = new THREE.Vector3();
        new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3();
        for (r = 0, n = this.faces.length; r < n; r++) {
          o = this.faces[r],
            s = this.vertices[o.a],
            l = this.vertices[o.b],
            c = this.vertices[o.c],
            h.subVectors(c, l),
            u.subVectors(s, l),
            h.cross(u),
            a[o.a].add(h),
            a[o.b].add(h),
            a[o.c].add(h);
        }
      } else {
        for (
          r = 0, n = this.faces.length; r < n; r++
        ) {
          a[(o = this.faces[r]).a].add(o.normal),
            a[o.b].add(o.normal),
            a[o.c].add(o.normal);
        }
      }
      for (t = 0, i = this.vertices.length; t < i; t++) a[t].normalize();
      for (r = 0, n = this.faces.length; r < n; r++) {
        (o = this.faces[r]).vertexNormals[0].copy(a[o.a]),
          o.vertexNormals[1].copy(a[o.b]),
          o.vertexNormals[2].copy(a[o.c]);
      }
    },
    computeMorphNormals: function () {
      var e, t, i, r, n;
      for (i = 0, r = this.faces.length; i < r; i++) {
        for (
          (n = this.faces[i]).__originalFaceNormal
            ? n.__originalFaceNormal.copy(n.normal)
            : n.__originalFaceNormal = n.normal.clone(),
            n.__originalVertexNormals || (n.__originalVertexNormals = []),
            e = 0,
            t = n.vertexNormals.length;
          e < t;
          e++
        ) {
          n.__originalVertexNormals[e]
            ? n.__originalVertexNormals[e].copy(n.vertexNormals[e])
            : n.__originalVertexNormals[e] = n.vertexNormals[e].clone();
        }
      }
      var o = new THREE.Geometry();
      for (
        o.faces = this.faces, e = 0, t = this.morphTargets.length; e < t; e++
      ) {
        if (!this.morphNormals[e]) {
          this.morphNormals[e] = {},
            this.morphNormals[e].faceNormals = [],
            this.morphNormals[e].vertexNormals = [];
          var a = this.morphNormals[e].faceNormals,
            s = this.morphNormals[e].vertexNormals;
          for (i = 0, r = this.faces.length; i < r; i++) {
            n = this.faces[i],
              l = new THREE.Vector3(),
              c = {
                a: new THREE.Vector3(),
                b: new THREE.Vector3(),
                c: new THREE.Vector3(),
              },
              a.push(l),
              s.push(c);
          }
        }
        var l, c, h = this.morphNormals[e];
        for (
          o.vertices = this.morphTargets[e].vertices,
            o.computeFaceNormals(),
            o.computeVertexNormals(),
            i = 0,
            r = this.faces.length;
          i < r;
          i++
        ) {
          n = this.faces[i],
            l = h.faceNormals[i],
            c = h.vertexNormals[i],
            l.copy(n.normal),
            c.a.copy(n.vertexNormals[0]),
            c.b.copy(n.vertexNormals[1]),
            c.c.copy(n.vertexNormals[2]);
        }
      }
      for (i = 0, r = this.faces.length; i < r; i++) {
        (n = this.faces[i]).normal = n.__originalFaceNormal,
          n.vertexNormals = n.__originalVertexNormals;
      }
    },
    computeTangents: function () {
      var e,
        t,
        i,
        r,
        n,
        o,
        a,
        s,
        l,
        c,
        h,
        u,
        p,
        f,
        d,
        m,
        E,
        g,
        v,
        y,
        T,
        R,
        x,
        H,
        b,
        w,
        _,
        M,
        S,
        C,
        A,
        L,
        P,
        D,
        F = [],
        N = [],
        V = new THREE.Vector3(),
        z = new THREE.Vector3(),
        U = new THREE.Vector3(),
        B = new THREE.Vector3(),
        O = new THREE.Vector3();
      for (i = 0, r = this.vertices.length; i < r; i++) {
        F[i] = new THREE.Vector3(), N[i] = new THREE.Vector3();
      }
      for (e = 0, t = this.faces.length; e < t; e++) {
        a = this.faces[e],
          s = this.faceVertexUvs[0][e],
          M = this,
          S = a.a,
          C = a.b,
          A = a.c,
          L = 0,
          P = 1,
          D = 2,
          l = M.vertices[S],
          c = M.vertices[C],
          h = M.vertices[A],
          u = s[L],
          p = s[P],
          f = s[D],
          d = c.x - l.x,
          m = h.x - l.x,
          E = c.y - l.y,
          g = h.y - l.y,
          v = c.z - l.z,
          y = h.z - l.z,
          T = p.x - u.x,
          R = f.x - u.x,
          x = p.y - u.y,
          H = f.y - u.y,
          b = 1 / (T * H - R * x),
          V.set((H * d - x * m) * b, (H * E - x * g) * b, (H * v - x * y) * b),
          z.set((T * m - R * d) * b, (T * g - R * E) * b, (T * y - R * v) * b),
          F[S].add(V),
          F[C].add(V),
          F[A].add(V),
          N[S].add(z),
          N[C].add(z),
          N[A].add(z);
      }
      var k = ["a", "b", "c", "d"];
      for (e = 0, t = this.faces.length; e < t; e++) {
        for (
          a = this.faces[e], n = 0; n < Math.min(a.vertexNormals.length, 3); n++
        ) {
          O.copy(a.vertexNormals[n]),
            o = a[k[n]],
            w = F[o],
            U.copy(w),
            U.sub(O.multiplyScalar(O.dot(w))).normalize(),
            B.crossVectors(a.vertexNormals[n], w),
            _ = B.dot(N[o]) < 0 ? -1 : 1,
            a.vertexTangents[n] = new THREE.Vector4(U.x, U.y, U.z, _);
        }
      }
      this.hasTangents = !0;
    },
    computeLineDistances: function () {
      for (var e = 0, t = this.vertices, i = 0, r = t.length; i < r; i++) {
        0 < i && (e += t[i].distanceTo(t[i - 1])), this.lineDistances[i] = e;
      }
    },
    computeBoundingBox: function () {
      null === this.boundingBox && (this.boundingBox = new THREE.Box3()),
        this.boundingBox.setFromPoints(this.vertices);
    },
    computeBoundingSphere: function () {
      null === this.boundingSphere &&
      (this.boundingSphere = new THREE.Sphere()),
        this.boundingSphere.setFromPoints(this.vertices);
    },
    mergeVertices: function () {
      var e, t, i, r, n, o, a, s, l = {}, c = [], h = [], u = Math.pow(10, 4);
      for (
        this.__tmpVertices = void 0, i = 0, r = this.vertices.length; i < r; i++
      ) {
        e = this.vertices[i],
          void 0 ===
              l[
                t = Math.round(e.x * u) + "_" + Math.round(e.y * u) + "_" +
                  Math.round(e.z * u)
              ]
            ? (l[t] = i, c.push(this.vertices[i]), h[i] = c.length - 1)
            : h[i] = h[l[t]];
      }
      var p = [];
      for (i = 0, r = this.faces.length; i < r; i++) {
        (n = this.faces[i]).a = h[n.a],
          n.b = h[n.b],
          n.c = h[n.c],
          o = [n.a, n.b, n.c];
        for (var f = 0; f < 3; f++) {
          if (o[f] == o[(f + 1) % 3]) {
            f, p.push(i);
            break;
          }
        }
      }
      for (i = p.length - 1; 0 <= i; i--) {
        var d = p[i];
        for (
          this.faces.splice(d, 1), a = 0, s = this.faceVertexUvs.length;
          a < s;
          a++
        ) {
          this.faceVertexUvs[a].splice(d, 1);
        }
      }
      var m = this.vertices.length - c.length;
      return this.vertices = c, m;
    },
    clone: function () {
      for (
        var e = new THREE.Geometry(), t = this.vertices, i = 0, r = t.length;
        i < r;
        i++
      ) {
        e.vertices.push(t[i].clone());
      }
      var n = this.faces;
      for (i = 0, r = n.length; i < r; i++) e.faces.push(n[i].clone());
      var o = this.faceVertexUvs[0];
      for (i = 0, r = o.length; i < r; i++) {
        for (var a = o[i], s = [], l = 0, c = a.length; l < c; l++) {
          s.push(new THREE.Vector2(a[l].x, a[l].y));
        }
        e.faceVertexUvs[0].push(s);
      }
      return e;
    },
    dispose: function () {
      this.dispatchEvent({ type: "dispose" });
    },
  },
  THREE.EventDispatcher.prototype.apply(THREE.Geometry.prototype),
  THREE.GeometryIdCount = 0,
  THREE.BufferGeometry = function () {
    this.id = THREE.GeometryIdCount++,
      this.uuid = THREE.Math.generateUUID(),
      this.name = "",
      this.attributes = {},
      this.dynamic = !0,
      this.offsets = [],
      this.boundingBox = null,
      this.boundingSphere = null,
      this.hasTangents = !1,
      this.morphTargets = [];
  },
  THREE.BufferGeometry.prototype = {
    constructor: THREE.BufferGeometry,
    addAttribute: function (e, t, i, r) {
      this.attributes[e] = { itemSize: r, array: new t(i * r) };
    },
    applyMatrix: function (e) {
      var t, i;
      (this.attributes.position && (t = this.attributes.position.array),
        this.attributes.normal && (i = this.attributes.normal.array),
        void 0 !== t &&
        (e.multiplyVector3Array(t), this.verticesNeedUpdate = !0),
        void 0 !== i) &&
        ((new THREE.Matrix3()).getNormalMatrix(e).multiplyVector3Array(i),
          this.normalizeNormals(),
          this.normalsNeedUpdate = !0);
    },
    computeBoundingBox: function () {
      null === this.boundingBox && (this.boundingBox = new THREE.Box3());
      var e = this.attributes.position.array;
      if (e) {
        var t, i, r, n = this.boundingBox;
        3 <= e.length &&
          (n.min.x = n.max.x = e[0],
            n.min.y = n.max.y = e[1],
            n.min.z = n.max.z = e[2]);
        for (var o = 3, a = e.length; o < a; o += 3) {
          t = e[o],
            i = e[o + 1],
            r = e[o + 2],
            t < n.min.x ? n.min.x = t : t > n.max.x && (n.max.x = t),
            i < n.min.y ? n.min.y = i : i > n.max.y && (n.max.y = i),
            r < n.min.z ? n.min.z = r : r > n.max.z && (n.max.z = r);
        }
      }
      void 0 !== e && 0 !== e.length ||
        (this.boundingBox.min.set(0, 0, 0), this.boundingBox.max.set(0, 0, 0));
    },
    computeBoundingSphere: function () {
      var o = new THREE.Box3(), a = new THREE.Vector3();
      return function () {
        null === this.boundingSphere &&
          (this.boundingSphere = new THREE.Sphere());
        var e = this.attributes.position.array;
        if (e) {
          for (
            var t = this.boundingSphere.center, i = 0, r = e.length;
            i < r;
            i += 3
          ) {
            a.set(e[i], e[i + 1], e[i + 2]), o.addPoint(a);
          }
          o.center(t);
          var n = 0;
          for (i = 0, r = e.length; i < r; i += 3) {
            a.set(e[i], e[i + 1], e[i + 2]),
              n = Math.max(n, t.distanceToSquared(a));
          }
          this.boundingSphere.radius = Math.sqrt(n);
        }
      };
    }(),
    computeVertexNormals: function () {
      if (this.attributes.position) {
        var e, t, i, r, n = this.attributes.position.array.length;
        if (void 0 === this.attributes.normal) {
          this.attributes.normal = { itemSize: 3, array: new Float32Array(n) };
        } else {
          for (e = 0, t = this.attributes.normal.array.length; e < t; e++) {
            this.attributes.normal.array[e] = 0;
          }
        }
        var o,
          a,
          s,
          l,
          c,
          h,
          u = this.attributes.position.array,
          p = this.attributes.normal.array,
          f = new THREE.Vector3(),
          d = new THREE.Vector3(),
          m = new THREE.Vector3(),
          E = new THREE.Vector3(),
          g = new THREE.Vector3();
        if (this.attributes.index) {
          var v = this.attributes.index.array, y = this.offsets;
          for (i = 0, r = y.length; i < r; ++i) {
            var T = y[i].start, R = y[i].count, x = y[i].index;
            for (t = (e = T) + R; e < t; e += 3) {
              o = x + v[e],
                a = x + v[e + 1],
                s = x + v[e + 2],
                l = u[3 * o],
                c = u[3 * o + 1],
                h = u[3 * o + 2],
                f.set(l, c, h),
                l = u[3 * a],
                c = u[3 * a + 1],
                h = u[3 * a + 2],
                d.set(l, c, h),
                l = u[3 * s],
                c = u[3 * s + 1],
                h = u[3 * s + 2],
                m.set(l, c, h),
                E.subVectors(m, d),
                g.subVectors(f, d),
                E.cross(g),
                p[3 * o] += E.x,
                p[3 * o + 1] += E.y,
                p[3 * o + 2] += E.z,
                p[3 * a] += E.x,
                p[3 * a + 1] += E.y,
                p[3 * a + 2] += E.z,
                p[3 * s] += E.x,
                p[3 * s + 1] += E.y,
                p[3 * s + 2] += E.z;
            }
          }
        } else {
          for (e = 0, t = u.length; e < t; e += 9) {
            l = u[e],
              c = u[e + 1],
              h = u[e + 2],
              f.set(l, c, h),
              l = u[e + 3],
              c = u[e + 4],
              h = u[e + 5],
              d.set(l, c, h),
              l = u[e + 6],
              c = u[e + 7],
              h = u[e + 8],
              m.set(l, c, h),
              E.subVectors(m, d),
              g.subVectors(f, d),
              E.cross(g),
              p[e] = E.x,
              p[e + 1] = E.y,
              p[e + 2] = E.z,
              p[e + 3] = E.x,
              p[e + 4] = E.y,
              p[e + 5] = E.z,
              p[e + 6] = E.x,
              p[e + 7] = E.y,
              p[e + 8] = E.z;
          }
        }
        this.normalizeNormals(), this.normalsNeedUpdate = !0;
      }
    },
    normalizeNormals: function () {
      for (
        var e, t, i, r, n = this.attributes.normal.array, o = 0, a = n.length;
        o < a;
        o += 3
      ) {
        e = n[o],
          t = n[o + 1],
          i = n[o + 2],
          r = 1 / Math.sqrt(e * e + t * t + i * i),
          n[o] *= r,
          n[o + 1] *= r,
          n[o + 2] *= r;
      }
    },
    computeTangents: function () {
      if (
        void 0 !== this.attributes.index &&
        void 0 !== this.attributes.position &&
        void 0 !== this.attributes.normal && void 0 !== this.attributes.uv
      ) {
        var e = this.attributes.index.array,
          t = this.attributes.position.array,
          i = this.attributes.normal.array,
          r = this.attributes.uv.array,
          n = t.length / 3;
        if (void 0 === this.attributes.tangent) {
          var o = 4 * n;
          this.attributes.tangent = { itemSize: 4, array: new Float32Array(o) };
        }
        for (
          var a,
            s,
            l,
            c,
            h,
            u,
            p,
            f,
            d,
            m,
            E,
            g,
            v,
            y,
            T,
            R,
            x,
            H,
            b,
            w,
            _,
            M,
            S,
            C,
            A,
            L,
            P = this.attributes.tangent.array,
            D = [],
            F = [],
            N = 0;
          N < n;
          N++
        ) {
          D[N] = new THREE.Vector3(), F[N] = new THREE.Vector3();
        }
        var V,
          z,
          U,
          B,
          O,
          k,
          I,
          j,
          G,
          W,
          X = new THREE.Vector3(),
          q = new THREE.Vector3(),
          Y = this.offsets;
        for (U = 0, B = Y.length; U < B; ++U) {
          var K = Y[U].start, Q = Y[U].count, Z = Y[U].index;
          for (z = (V = K) + Q; V < z; V += 3) {
            O = Z + e[V],
              k = Z + e[V + 1],
              I = Z + e[V + 2],
              G = k,
              W = I,
              a = t[3 * (j = O)],
              s = t[3 * j + 1],
              l = t[3 * j + 2],
              c = t[3 * G],
              h = t[3 * G + 1],
              u = t[3 * G + 2],
              p = t[3 * W],
              f = t[3 * W + 1],
              d = t[3 * W + 2],
              m = r[2 * j],
              E = r[2 * j + 1],
              g = r[2 * G],
              v = r[2 * G + 1],
              y = r[2 * W],
              T = r[2 * W + 1],
              R = c - a,
              x = p - a,
              H = h - s,
              b = f - s,
              w = u - l,
              _ = d - l,
              L = 1 / ((M = g - m) * (A = T - E) - (S = y - m) * (C = v - E)),
              X.set(
                (A * R - C * x) * L,
                (A * H - C * b) * L,
                (A * w - C * _) * L,
              ),
              q.set(
                (M * x - S * R) * L,
                (M * b - S * H) * L,
                (M * _ - S * w) * L,
              ),
              D[j].add(X),
              D[G].add(X),
              D[W].add(X),
              F[j].add(q),
              F[G].add(q),
              F[W].add(q);
          }
        }
        var $,
          J,
          ee,
          te = new THREE.Vector3(),
          ie = new THREE.Vector3(),
          re = new THREE.Vector3(),
          ne = new THREE.Vector3();
        for (U = 0, B = Y.length; U < B; ++U) {
          K = Y[U].start, Q = Y[U].count, Z = Y[U].index;
          for (z = (V = K) + Q; V < z; V += 3) {
            O = Z + e[V],
              k = Z + e[V + 1],
              I = Z + e[V + 2],
              oe(O),
              oe(k),
              oe(I);
          }
        }
        this.hasTangents = !0, this.tangentsNeedUpdate = !0;
      } else {
        console.warn(
          "Missing required attributes (index, position, normal or uv) in BufferGeometry.computeTangents()",
        );
      }
      function oe(e) {
        re.x = i[3 * e],
          re.y = i[3 * e + 1],
          re.z = i[3 * e + 2],
          ne.copy(re),
          J = D[e],
          te.copy(J),
          te.sub(re.multiplyScalar(re.dot(J))).normalize(),
          ie.crossVectors(ne, J),
          ee = ie.dot(F[e]),
          $ = ee < 0 ? -1 : 1,
          P[4 * e] = te.x,
          P[4 * e + 1] = te.y,
          P[4 * e + 2] = te.z,
          P[4 * e + 3] = $;
      }
    },
    clone: function () {
      var e = new THREE.BufferGeometry(),
        t = [
          Int8Array,
          Uint8Array,
          Uint8ClampedArray,
          Int16Array,
          Uint16Array,
          Int32Array,
          Uint32Array,
          Float32Array,
          Float64Array,
        ];
      for (var i in this.attributes) {
        for (
          var r = this.attributes[i],
            n = r.array,
            o = { itemSize: r.itemSize, numItems: r.numItems, array: null },
            a = 0,
            s = t.length;
          a < s;
          a++
        ) {
          var l = t[a];
          if (n instanceof l) {
            o.array = new l(n);
            break;
          }
        }
        e.attributes[i] = o;
      }
      for (a = 0, s = this.offsets.length; a < s; a++) {
        var c = this.offsets[a];
        e.offsets.push({ start: c.start, index: c.index, count: c.count });
      }
      return e;
    },
    dispose: function () {
      this.dispatchEvent({ type: "dispose" });
    },
  },
  THREE.EventDispatcher.prototype.apply(THREE.BufferGeometry.prototype),
  THREE.Camera = function () {
    THREE.Object3D.call(this),
      this.matrixWorldInverse = new THREE.Matrix4(),
      this.projectionMatrix = new THREE.Matrix4(),
      this.projectionMatrixInverse = new THREE.Matrix4();
  },
  THREE.Camera.prototype = Object.create(THREE.Object3D.prototype),
  THREE.Camera.prototype.lookAt = function () {
    var t = new THREE.Matrix4();
    return function (e) {
      t.lookAt(this.position, e, this.up),
        this.quaternion.setFromRotationMatrix(t);
    };
  }(),
  THREE.Camera.prototype.clone = function (e) {
    return void 0 === e && (e = new THREE.Camera()),
      THREE.Object3D.prototype.clone.call(this, e),
      e.matrixWorldInverse.copy(this.matrixWorldInverse),
      e.projectionMatrix.copy(this.projectionMatrix),
      e.projectionMatrixInverse.copy(this.projectionMatrixInverse),
      e;
  },
  THREE.OrthographicCamera = function (e, t, i, r, n, o) {
    THREE.Camera.call(this),
      this.left = e,
      this.right = t,
      this.top = i,
      this.bottom = r,
      this.near = void 0 !== n ? n : .1,
      this.far = void 0 !== o ? o : 2e3,
      this.updateProjectionMatrix();
  },
  THREE.OrthographicCamera.prototype = Object.create(THREE.Camera.prototype),
  THREE.OrthographicCamera.prototype.updateProjectionMatrix = function () {
    this.projectionMatrix.makeOrthographic(
      this.left,
      this.right,
      this.top,
      this.bottom,
      this.near,
      this.far,
    );
  },
  THREE.OrthographicCamera.prototype.clone = function () {
    var e = new THREE.OrthographicCamera();
    return THREE.Camera.prototype.clone.call(this, e),
      e.left = this.left,
      e.right = this.right,
      e.top = this.top,
      e.bottom = this.bottom,
      e.near = this.near,
      e.far = this.far,
      e;
  },
  THREE.PerspectiveCamera = function (e, t, i, r) {
    THREE.Camera.call(this),
      this.fov = void 0 !== e ? e : 50,
      this.aspect = void 0 !== t ? t : 1,
      this.near = void 0 !== i ? i : .1,
      this.far = void 0 !== r ? r : 2e3,
      this.updateProjectionMatrix();
  },
  THREE.PerspectiveCamera.prototype = Object.create(THREE.Camera.prototype),
  THREE.PerspectiveCamera.prototype.setLens = function (e, t) {
    void 0 === t && (t = 24),
      this.fov = 2 * THREE.Math.radToDeg(Math.atan(t / (2 * e))),
      this.updateProjectionMatrix();
  },
  THREE.PerspectiveCamera.prototype.setViewOffset = function (
    e,
    t,
    i,
    r,
    n,
    o,
  ) {
    this.fullWidth = e,
      this.fullHeight = t,
      this.x = i,
      this.y = r,
      this.width = n,
      this.height = o,
      this.updateProjectionMatrix();
  },
  THREE.PerspectiveCamera.prototype.updateProjectionMatrix = function () {
    if (this.fullWidth) {
      var e = this.fullWidth / this.fullHeight,
        t = Math.tan(THREE.Math.degToRad(.5 * this.fov)) * this.near,
        i = -t,
        r = e * i,
        n = e * t,
        o = Math.abs(n - r),
        a = Math.abs(t - i);
      this.projectionMatrix.makeFrustum(
        r + this.x * o / this.fullWidth,
        r + (this.x + this.width) * o / this.fullWidth,
        t - (this.y + this.height) * a / this.fullHeight,
        t - this.y * a / this.fullHeight,
        this.near,
        this.far,
      );
    } else {
      this.projectionMatrix.makePerspective(
        this.fov,
        this.aspect,
        this.near,
        this.far,
      );
    }
  },
  THREE.PerspectiveCamera.prototype.clone = function () {
    var e = new THREE.PerspectiveCamera();
    return THREE.Camera.prototype.clone.call(this, e),
      e.fov = this.fov,
      e.aspect = this.aspect,
      e.near = this.near,
      e.far = this.far,
      e;
  },
  THREE.Light = function (e) {
    THREE.Object3D.call(this), this.color = new THREE.Color(e);
  },
  THREE.Light.prototype = Object.create(THREE.Object3D.prototype),
  THREE.Light.prototype.clone = function (e) {
    return void 0 === e && (e = new THREE.Light()),
      THREE.Object3D.prototype.clone.call(this, e),
      e.color.copy(this.color),
      e;
  },
  THREE.AmbientLight = function (e) {
    THREE.Light.call(this, e);
  },
  THREE.AmbientLight.prototype = Object.create(THREE.Light.prototype),
  THREE.AmbientLight.prototype.clone = function () {
    var e = new THREE.AmbientLight();
    return THREE.Light.prototype.clone.call(this, e), e;
  },
  THREE.AreaLight = function (e, t) {
    THREE.Light.call(this, e),
      this.normal = new THREE.Vector3(0, -1, 0),
      this.right = new THREE.Vector3(1, 0, 0),
      this.intensity = void 0 !== t ? t : 1,
      this.width = 1,
      this.height = 1,
      this.constantAttenuation = 1.5,
      this.linearAttenuation = .5,
      this.quadraticAttenuation = .1;
  },
  THREE.AreaLight.prototype = Object.create(THREE.Light.prototype),
  THREE.DirectionalLight = function (e, t) {
    THREE.Light.call(this, e),
      this.position.set(0, 1, 0),
      this.target = new THREE.Object3D(),
      this.intensity = void 0 !== t ? t : 1,
      this.castShadow = !1,
      this.onlyShadow = !1,
      this.shadowCameraNear = 50,
      this.shadowCameraFar = 5e3,
      this.shadowCameraLeft = -500,
      this.shadowCameraRight = 500,
      this.shadowCameraTop = 500,
      this.shadowCameraBottom = -500,
      this.shadowCameraVisible = !1,
      this.shadowBias = 0,
      this.shadowDarkness = .5,
      this.shadowMapWidth = 512,
      this.shadowMapHeight = 512,
      this.shadowCascade = !1,
      this.shadowCascadeOffset = new THREE.Vector3(0, 0, -1e3),
      this.shadowCascadeCount = 2,
      this.shadowCascadeBias = [0, 0, 0],
      this.shadowCascadeWidth = [512, 512, 512],
      this.shadowCascadeHeight = [512, 512, 512],
      this.shadowCascadeNearZ = [-1, .99, .998],
      this.shadowCascadeFarZ = [.99, .998, 1],
      this.shadowCascadeArray = [],
      this.shadowMap = null,
      this.shadowMapSize = null,
      this.shadowCamera = null,
      this.shadowMatrix = null;
  },
  THREE.DirectionalLight.prototype = Object.create(THREE.Light.prototype),
  THREE.DirectionalLight.prototype.clone = function () {
    var e = new THREE.DirectionalLight();
    return THREE.Light.prototype.clone.call(this, e),
      e.target = this.target.clone(),
      e.intensity = this.intensity,
      e.castShadow = this.castShadow,
      e.onlyShadow = this.onlyShadow,
      e;
  },
  THREE.HemisphereLight = function (e, t, i) {
    THREE.Light.call(this, e),
      this.position.set(0, 100, 0),
      this.groundColor = new THREE.Color(t),
      this.intensity = void 0 !== i ? i : 1;
  },
  THREE.HemisphereLight.prototype = Object.create(THREE.Light.prototype),
  THREE.HemisphereLight.prototype.clone = function () {
    var e = new THREE.HemisphereLight();
    return THREE.Light.prototype.clone.call(this, e),
      e.groundColor.copy(this.groundColor),
      e.intensity = this.intensity,
      e;
  },
  THREE.PointLight = function (e, t, i) {
    THREE.Light.call(this, e),
      this.intensity = void 0 !== t ? t : 1,
      this.distance = void 0 !== i ? i : 0;
  },
  THREE.PointLight.prototype = Object.create(THREE.Light.prototype),
  THREE.PointLight.prototype.clone = function () {
    var e = new THREE.PointLight();
    return THREE.Light.prototype.clone.call(this, e),
      e.intensity = this.intensity,
      e.distance = this.distance,
      e;
  },
  THREE.SpotLight = function (e, t, i, r, n) {
    THREE.Light.call(this, e),
      this.position.set(0, 1, 0),
      this.target = new THREE.Object3D(),
      this.intensity = void 0 !== t ? t : 1,
      this.distance = void 0 !== i ? i : 0,
      this.angle = void 0 !== r ? r : Math.PI / 3,
      this.exponent = void 0 !== n ? n : 10,
      this.castShadow = !1,
      this.onlyShadow = !1,
      this.shadowCameraNear = 50,
      this.shadowCameraFar = 5e3,
      this.shadowCameraFov = 50,
      this.shadowCameraVisible = !1,
      this.shadowBias = 0,
      this.shadowDarkness = .5,
      this.shadowMapWidth = 512,
      this.shadowMapHeight = 512,
      this.shadowMap = null,
      this.shadowMapSize = null,
      this.shadowCamera = null,
      this.shadowMatrix = null;
  },
  THREE.SpotLight.prototype = Object.create(THREE.Light.prototype),
  THREE.SpotLight.prototype.clone = function () {
    var e = new THREE.SpotLight();
    return THREE.Light.prototype.clone.call(this, e),
      e.target = this.target.clone(),
      e.intensity = this.intensity,
      e.distance = this.distance,
      e.angle = this.angle,
      e.exponent = this.exponent,
      e.castShadow = this.castShadow,
      e.onlyShadow = this.onlyShadow,
      e;
  },
  THREE.Loader = function (e) {
    this.showStatus = e,
      this.statusDomElement = e
        ? THREE.Loader.prototype.addStatusElement()
        : null,
      this.onLoadStart = function () {},
      this.onLoadProgress = function () {},
      this.onLoadComplete = function () {};
  },
  THREE.Loader.prototype = {
    constructor: THREE.Loader,
    crossOrigin: "anonymous",
    addStatusElement: function () {
      var e = document.createElement("div");
      return e.style.position = "absolute",
        e.style.right = "0px",
        e.style.top = "0px",
        e.style.fontSize = "0.8em",
        e.style.textAlign = "left",
        e.style.background = "rgba(0,0,0,0.25)",
        e.style.color = "#fff",
        e.style.width = "120px",
        e.style.padding = "0.5em 0.5em 0.5em 0.5em",
        e.style.zIndex = 1e3,
        e.innerHTML = "Loading ...",
        e;
    },
    updateProgress: function (e) {
      var t = "Loaded ";
      e.total
        ? t += (100 * e.loaded / e.total).toFixed(0) + "%"
        : t += (e.loaded / 1e3).toFixed(2) + " KB",
        this.statusDomElement.innerHTML = t;
    },
    extractUrlBase: function (e) {
      var t = e.split("/");
      return t.pop(), (t.length < 1 ? "." : t.join("/")) + "/";
    },
    initMaterials: function (e, t) {
      for (var i = [], r = 0; r < e.length; ++r) {
        i[r] = THREE.Loader.prototype.createMaterial(e[r], t);
      }
      return i;
    },
    needsTangents: function (e) {
      for (var t = 0, i = e.length; t < i; t++) {
        if (e[t] instanceof THREE.ShaderMaterial) return !0;
      }
      return !1;
    },
    createMaterial: function (e, d) {
      var m = this;
      function E(e) {
        var t = Math.log(e) / Math.LN2;
        return Math.floor(t) == t;
      }
      function g(e) {
        var t = Math.log(e) / Math.LN2;
        return Math.pow(2, Math.round(t));
      }
      function t(e, t, i, r, n, o, a) {
        var s, l, c, h = /\.dds$/i.test(i), u = d + "/" + i;
        if (h) {
          var p = THREE.ImageUtils.loadCompressedTexture(u);
          e[t] = p;
        } else {
          p = document.createElement("canvas");
          e[t] = new THREE.Texture(p);
        }
        if (
          e[t].sourceFile = i,
            r &&
            (e[t].repeat.set(r[0], r[1]),
              1 !== r[0] && (e[t].wrapS = THREE.RepeatWrapping),
              1 !== r[1] && (e[t].wrapT = THREE.RepeatWrapping)),
            n && e[t].offset.set(n[0], n[1]),
            o
        ) {
          var f = {
            repeat: THREE.RepeatWrapping,
            mirror: THREE.MirroredRepeatWrapping,
          };
          void 0 !== f[o[0]] && (e[t].wrapS = f[o[0]]),
            void 0 !== f[o[1]] && (e[t].wrapT = f[o[1]]);
        }
        a && (e[t].anisotropy = a),
          h || (s = e[t],
            l = u,
            (c = new Image()).onload = function () {
              if (E(this.width) && E(this.height)) s.image = this;
              else {
                var e = g(this.width), t = g(this.height);
                s.image.width = e,
                  s.image.height = t,
                  s.image.getContext("2d").drawImage(this, 0, 0, e, t);
              }
              s.needsUpdate = !0;
            },
            c.crossOrigin = m.crossOrigin,
            c.src = l);
      }
      function i(e) {
        return (255 * e[0] << 16) + (255 * e[1] << 8) + 255 * e[2];
      }
      var r = "MeshLambertMaterial",
        n = {
          color: 15658734,
          opacity: 1,
          map: null,
          lightMap: null,
          normalMap: null,
          bumpMap: null,
          wireframe: !1,
        };
      if (e.shading) {
        var o = e.shading.toLowerCase();
        "phong" === o
          ? r = "MeshPhongMaterial"
          : "basic" === o && (r = "MeshBasicMaterial");
      }
      if (
        void 0 !== e.blending && void 0 !== THREE[e.blending] &&
        (n.blending = THREE[e.blending]),
          (void 0 !== e.transparent || e.opacity < 1) &&
          (n.transparent = e.transparent),
          void 0 !== e.depthTest && (n.depthTest = e.depthTest),
          void 0 !== e.depthWrite && (n.depthWrite = e.depthWrite),
          void 0 !== e.visible && (n.visible = e.visible),
          void 0 !== e.flipSided && (n.side = THREE.BackSide),
          void 0 !== e.doubleSided && (n.side = THREE.DoubleSide),
          void 0 !== e.wireframe && (n.wireframe = e.wireframe),
          void 0 !== e.vertexColors && ("face" === e.vertexColors
            ? n.vertexColors = THREE.FaceColors
            : e.vertexColors && (n.vertexColors = THREE.VertexColors)),
          e.colorDiffuse
            ? n.color = i(e.colorDiffuse)
            : e.DbgColor && (n.color = e.DbgColor),
          e.colorSpecular && (n.specular = i(e.colorSpecular)),
          e.colorAmbient && (n.ambient = i(e.colorAmbient)),
          e.transparency && (n.opacity = e.transparency),
          e.specularCoef && (n.shininess = e.specularCoef),
          e.mapDiffuse && d &&
          t(
            n,
            "map",
            e.mapDiffuse,
            e.mapDiffuseRepeat,
            e.mapDiffuseOffset,
            e.mapDiffuseWrap,
            e.mapDiffuseAnisotropy,
          ),
          e.mapLight && d &&
          t(
            n,
            "lightMap",
            e.mapLight,
            e.mapLightRepeat,
            e.mapLightOffset,
            e.mapLightWrap,
            e.mapLightAnisotropy,
          ),
          e.mapBump && d &&
          t(
            n,
            "bumpMap",
            e.mapBump,
            e.mapBumpRepeat,
            e.mapBumpOffset,
            e.mapBumpWrap,
            e.mapBumpAnisotropy,
          ),
          e.mapNormal && d &&
          t(
            n,
            "normalMap",
            e.mapNormal,
            e.mapNormalRepeat,
            e.mapNormalOffset,
            e.mapNormalWrap,
            e.mapNormalAnisotropy,
          ),
          e.mapSpecular && d &&
          t(
            n,
            "specularMap",
            e.mapSpecular,
            e.mapSpecularRepeat,
            e.mapSpecularOffset,
            e.mapSpecularWrap,
            e.mapSpecularAnisotropy,
          ),
          e.mapBumpScale && (n.bumpScale = e.mapBumpScale),
          e.mapNormal
      ) {
        var a = THREE.ShaderLib.normalmap,
          s = THREE.UniformsUtils.clone(a.uniforms);
        s.tNormal.value = n.normalMap,
          e.mapNormalFactor &&
          s.uNormalScale.value.set(e.mapNormalFactor, e.mapNormalFactor),
          n.map && (s.tDiffuse.value = n.map, s.enableDiffuse.value = !0),
          n.specularMap &&
          (s.tSpecular.value = n.specularMap, s.enableSpecular.value = !0),
          n.lightMap && (s.tAO.value = n.lightMap, s.enableAO.value = !0),
          s.uDiffuseColor.value.setHex(n.color),
          s.uSpecularColor.value.setHex(n.specular),
          s.uAmbientColor.value.setHex(n.ambient),
          s.uShininess.value = n.shininess,
          void 0 !== n.opacity && (s.uOpacity.value = n.opacity);
        var l = {
            fragmentShader: a.fragmentShader,
            vertexShader: a.vertexShader,
            uniforms: s,
            lights: !0,
            fog: !0,
          },
          c = new THREE.ShaderMaterial(l);
        n.transparent && (c.transparent = !0);
      } else c = new THREE[r](n);
      return void 0 !== e.DbgName && (c.name = e.DbgName), c;
    },
  },
  THREE.XHRLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager;
  },
  THREE.XHRLoader.prototype = {
    constructor: THREE.XHRLoader,
    load: function (t, i, r, n) {
      var o = this, e = new XMLHttpRequest();
      void 0 !== i && e.addEventListener("load", function (e) {
        i(e.target.responseText), o.manager.itemEnd(t);
      }, !1),
        void 0 !== r && e.addEventListener("progress", function (e) {
          r(e);
        }, !1),
        void 0 !== n && e.addEventListener("error", function (e) {
          n(e);
        }, !1),
        void 0 !== this.crossOrigin && (e.crossOrigin = this.crossOrigin),
        e.open("GET", t, !0),
        e.send(null),
        o.manager.itemStart(t);
    },
    setCrossOrigin: function (e) {
      this.crossOrigin = e;
    },
  },
  THREE.ImageLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager;
  },
  THREE.ImageLoader.prototype = {
    constructor: THREE.ImageLoader,
    load: function (t, i, r, n) {
      var o = this, e = document.createElement("img");
      return void 0 !== i && e.addEventListener("load", function (e) {
        o.manager.itemEnd(t), i(this);
      }, !1),
        void 0 !== r && e.addEventListener("progress", function (e) {
          r(e);
        }, !1),
        void 0 !== n && e.addEventListener("error", function (e) {
          n(e);
        }, !1),
        void 0 !== this.crossOrigin && (e.crossOrigin = this.crossOrigin),
        e.src = t,
        o.manager.itemStart(t),
        e;
    },
    setCrossOrigin: function (e) {
      this.crossOrigin = e;
    },
  },
  THREE.JSONLoader = function (e) {
    THREE.Loader.call(this, e), this.withCredentials = !1;
  },
  THREE.JSONLoader.prototype = Object.create(THREE.Loader.prototype),
  THREE.JSONLoader.prototype.load = function (e, t, i) {
    i = i && "string" == typeof i ? i : this.extractUrlBase(e),
      this.onLoadStart(),
      this.loadAjaxJSON(this, e, t, i);
  },
  THREE.JSONLoader.prototype.loadAjaxJSON = function (i, r, n, o, a) {
    var s = new XMLHttpRequest(), l = 0;
    s.onreadystatechange = function () {
      if (s.readyState === s.DONE) {
        if (200 === s.status || 0 === s.status) {
          if (s.responseText) {
            var e = JSON.parse(s.responseText), t = i.parse(e, o);
            n(t.geometry, t.materials);
          } else {
            console.warn(
              "THREE.JSONLoader: [" + r +
                "] seems to be unreachable or file there is empty",
            );
          }
          i.onLoadComplete();
        } else {
          console.error(
            "THREE.JSONLoader: Couldn't load [" + r + "] [" + s.status + "]",
          );
        }
      } else {
        s.readyState === s.LOADING
          ? a &&
            (0 === l && (l = s.getResponseHeader("Content-Length")),
              a({ total: l, loaded: s.responseText.length }))
          : s.readyState === s.HEADERS_RECEIVED && void 0 !== a &&
            (l = s.getResponseHeader("Content-Length"));
      }
    },
      s.open("GET", r, !0),
      s.withCredentials = this.withCredentials,
      s.send(null);
  },
  THREE.JSONLoader.prototype.parse = function (F, e) {
    var N = new THREE.Geometry(), t = void 0 !== F.scale ? 1 / F.scale : 1;
    if (
      function (e) {
        function t(e, t) {
          return e & 1 << t;
        }
        var i,
          r,
          n,
          o,
          a,
          s,
          l,
          c,
          h,
          u,
          p,
          f,
          d,
          m,
          E,
          g,
          v,
          y,
          T,
          R,
          x,
          H,
          b,
          w,
          _,
          M,
          S,
          C = F.faces,
          A = F.vertices,
          L = F.normals,
          P = F.colors,
          D = 0;
        if (void 0 !== F.uvs) {
          for (i = 0; i < F.uvs.length; i++) F.uvs[i].length && D++;
          for (i = 0; i < D; i++) N.faceVertexUvs[i] = [];
        }
        o = 0, a = A.length;
        for (; o < a;) {
          (y = new THREE.Vector3()).x = A[o++] * e,
            y.y = A[o++] * e,
            y.z = A[o++] * e,
            N.vertices.push(y);
        }
        o = 0, a = C.length;
        for (; o < a;) {
          if (
            u = C[o++],
              p = t(u, 0),
              f = t(u, 1),
              d = t(u, 3),
              m = t(u, 4),
              E = t(u, 5),
              g = t(u, 6),
              v = t(u, 7),
              p
          ) {
            if (
              (R = new THREE.Face3()).a = C[o],
                R.b = C[o + 1],
                R.c = C[o + 3],
                (x = new THREE.Face3()).a = C[o + 1],
                x.b = C[o + 2],
                x.c = C[o + 3],
                o += 4,
                f && (h = C[o++], R.materialIndex = h, x.materialIndex = h),
                n = N.faces.length,
                d
            ) {
              for (i = 0; i < D; i++) {
                for (
                  w = F.uvs[i],
                    N.faceVertexUvs[i][n] = [],
                    N.faceVertexUvs[i][n + 1] = [],
                    r = 0;
                  r < 4;
                  r++
                ) {
                  c = C[o++],
                    M = w[2 * c],
                    S = w[2 * c + 1],
                    _ = new THREE.Vector2(M, S),
                    2 !== r && N.faceVertexUvs[i][n].push(_),
                    0 !== r && N.faceVertexUvs[i][n + 1].push(_);
                }
              }
            }
            if (
              m &&
              (l = 3 * C[o++],
                R.normal.set(L[l++], L[l++], L[l]),
                x.normal.copy(R.normal)), E
            ) {
              for (i = 0; i < 4; i++) {
                l = 3 * C[o++],
                  b = new THREE.Vector3(L[l++], L[l++], L[l]),
                  2 !== i && R.vertexNormals.push(b),
                  0 !== i && x.vertexNormals.push(b);
              }
            }
            if (
              g && (s = C[o++], H = P[s], R.color.setHex(H), x.color.setHex(H)),
                v
            ) {
              for (i = 0; i < 4; i++) {
                s = C[o++],
                  H = P[s],
                  2 !== i && R.vertexColors.push(new THREE.Color(H)),
                  0 !== i && x.vertexColors.push(new THREE.Color(H));
              }
            }
            N.faces.push(R), N.faces.push(x);
          } else {
            if (
              (T = new THREE.Face3()).a = C[o++],
                T.b = C[o++],
                T.c = C[o++],
                f && (h = C[o++], T.materialIndex = h),
                n = N.faces.length,
                d
            ) {
              for (i = 0; i < D; i++) {
                for (
                  w = F.uvs[i], N.faceVertexUvs[i][n] = [], r = 0; r < 3; r++
                ) {
                  c = C[o++],
                    M = w[2 * c],
                    S = w[2 * c + 1],
                    _ = new THREE.Vector2(M, S),
                    N.faceVertexUvs[i][n].push(_);
                }
              }
            }
            if (m && (l = 3 * C[o++], T.normal.set(L[l++], L[l++], L[l])), E) {
              for (i = 0; i < 3; i++) {
                l = 3 * C[o++],
                  b = new THREE.Vector3(L[l++], L[l++], L[l]),
                  T.vertexNormals.push(b);
              }
            }
            if (g && (s = C[o++], T.color.setHex(P[s])), v) {
              for (i = 0; i < 3; i++) {
                s = C[o++], T.vertexColors.push(new THREE.Color(P[s]));
              }
            }
            N.faces.push(T);
          }
        }
      }(t),
        function () {
          var e, t, i, r, n, o;
          if (F.skinWeights) {
            for (e = 0, t = F.skinWeights.length; e < t; e += 2) {
              i = F.skinWeights[e],
                r = F.skinWeights[e + 1],
                0,
                N.skinWeights.push(new THREE.Vector4(i, r, 0, 0));
            }
          }
          if (F.skinIndices) {
            for (e = 0, t = F.skinIndices.length; e < t; e += 2) {
              n = F.skinIndices[e],
                o = F.skinIndices[e + 1],
                0,
                N.skinIndices.push(new THREE.Vector4(n, o, 0, 0));
            }
          }
          N.bones = F.bones,
            N.animation = F.animation,
            N.animations = F.animations;
        }(),
        function (e) {
          var t, i, r, n, o, a, s, l, c, h, u;
          if (void 0 !== F.morphTargets) {
            for (o = 0, a = F.morphTargets.length; o < a; o++) {
              for (
                N.morphTargets[o] = {},
                  N.morphTargets[o].name = F.morphTargets[o].name,
                  N.morphTargets[o].vertices = [],
                  r = N.morphTargets[o].vertices,
                  n = F.morphTargets[o].vertices,
                  t = 0,
                  i = n.length;
                t < i;
                t += 3
              ) {
                var p = new THREE.Vector3();
                p.x = n[t] * e,
                  p.y = n[t + 1] * e,
                  p.z = n[t + 2] * e,
                  r.push(p);
              }
            }
          }
          if (void 0 !== F.morphColors) {
            for (o = 0, a = F.morphColors.length; o < a; o++) {
              for (
                N.morphColors[o] = {},
                  N.morphColors[o].name = F.morphColors[o].name,
                  N.morphColors[o].colors = [],
                  c = N.morphColors[o].colors,
                  h = F.morphColors[o].colors,
                  s = 0,
                  l = h.length;
                s < l;
                s += 3
              ) {
                (u = new THREE.Color(16755200)).setRGB(
                  h[s],
                  h[s + 1],
                  h[s + 2],
                ), c.push(u);
              }
            }
          }
        }(t),
        N.computeCentroids(),
        N.computeFaceNormals(),
        N.computeBoundingSphere(),
        void 0 === F.materials
    ) {
      return { geometry: N };
    }
    var i = this.initMaterials(F.materials, e);
    return this.needsTangents(i) && N.computeTangents(),
      { geometry: N, materials: i };
  },
  THREE.LoadingManager = function (e, t, i) {
    var r = this, n = 0, o = 0;
    this.onLoad = e,
      this.onProgress = t,
      this.onError = i,
      this.itemStart = function (e) {
        o++;
      },
      this.itemEnd = function (e) {
        n++,
          void 0 !== r.onProgress && r.onProgress(e, n, o),
          n === o && void 0 !== r.onLoad && r.onLoad();
      };
  },
  THREE.DefaultLoadingManager = new THREE.LoadingManager(),
  THREE.BufferGeometryLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager;
  },
  THREE.BufferGeometryLoader.prototype = {
    constructor: THREE.BufferGeometryLoader,
    load: function (e, t, i, r) {
      var n = this, o = new THREE.XHRLoader();
      o.setCrossOrigin(this.crossOrigin),
        o.load(e, function (e) {
          t(n.parse(JSON.parse(e)));
        });
    },
    setCrossOrigin: function (e) {
      this.crossOrigin = e;
    },
    parse: function (e) {
      var t = new THREE.BufferGeometry(),
        i = e.attributes,
        r = e.offsets,
        n = e.boundingSphere;
      for (var o in i) {
        var a = i[o];
        t.attributes[o] = {
          itemSize: a.itemSize,
          array: new self[a.type](a.array),
        };
      }
      return void 0 !== r && (t.offsets = JSON.parse(JSON.stringify(r))),
        void 0 !== n &&
        (t.boundingSphere = new THREE.Sphere(
          (new THREE.Vector3()).fromArray(
            void 0 !== n.center
              ? n.center
              : [0, 0, 0],
          ),
          n.radius,
        )),
        t;
    },
  },
  THREE.GeometryLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager;
  },
  THREE.GeometryLoader.prototype = {
    constructor: THREE.GeometryLoader,
    load: function (e, t, i, r) {
      var n = this, o = new THREE.XHRLoader();
      o.setCrossOrigin(this.crossOrigin),
        o.load(e, function (e) {
          t(n.parse(JSON.parse(e)));
        });
    },
    setCrossOrigin: function (e) {
      this.crossOrigin = e;
    },
    parse: function (e) {},
  },
  THREE.MaterialLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager;
  },
  THREE.MaterialLoader.prototype = {
    constructor: THREE.MaterialLoader,
    load: function (e, t, i, r) {
      var n = this, o = new THREE.XHRLoader();
      o.setCrossOrigin(this.crossOrigin),
        o.load(e, function (e) {
          t(n.parse(JSON.parse(e)));
        });
    },
    setCrossOrigin: function (e) {
      this.crossOrigin = e;
    },
    parse: function (e) {
      var t = new THREE[e.type]();
      if (
        void 0 !== e.color && t.color.setHex(e.color),
          void 0 !== e.ambient && t.ambient.setHex(e.ambient),
          void 0 !== e.emissive && t.emissive.setHex(e.emissive),
          void 0 !== e.specular && t.specular.setHex(e.specular),
          void 0 !== e.shininess && (t.shininess = e.shininess),
          void 0 !== e.vertexColors && (t.vertexColors = e.vertexColors),
          void 0 !== e.blending && (t.blending = e.blending),
          void 0 !== e.opacity && (t.opacity = e.opacity),
          void 0 !== e.transparent && (t.transparent = e.transparent),
          void 0 !== e.wireframe && (t.wireframe = e.wireframe),
          void 0 !== e.materials
      ) {
        for (var i = 0, r = e.materials.length; i < r; i++) {
          t.materials.push(this.parse(e.materials[i]));
        }
      }
      return t;
    },
  },
  THREE.ObjectLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager;
  },
  THREE.ObjectLoader.prototype = {
    constructor: THREE.ObjectLoader,
    load: function (e, t, i, r) {
      var n = this, o = new THREE.XHRLoader(n.manager);
      o.setCrossOrigin(this.crossOrigin),
        o.load(e, function (e) {
          t(n.parse(JSON.parse(e)));
        });
    },
    setCrossOrigin: function (e) {
      this.crossOrigin = e;
    },
    parse: function (e) {
      var t = this.parseGeometries(e.geometries),
        i = this.parseMaterials(e.materials);
      return this.parseObject(e.object, t, i);
    },
    parseGeometries: function (e) {
      var t = {};
      if (void 0 !== e) {
        for (
          var i = new THREE.JSONLoader(),
            r = new THREE.BufferGeometryLoader(),
            n = 0,
            o = e.length;
          n < o;
          n++
        ) {
          var a, s = e[n];
          switch (s.type) {
            case "PlaneGeometry":
              a = new THREE.PlaneGeometry(
                s.width,
                s.height,
                s.widthSegments,
                s.heightSegments,
              );
              break;
            case "CircleGeometry":
              a = new THREE.CircleGeometry(s.radius, s.segments);
              break;
            case "CubeGeometry":
              a = new THREE.CubeGeometry(
                s.width,
                s.height,
                s.depth,
                s.widthSegments,
                s.heightSegments,
                s.depthSegments,
              );
              break;
            case "CylinderGeometry":
              a = new THREE.CylinderGeometry(
                s.radiusTop,
                s.radiusBottom,
                s.height,
                s.radiusSegments,
                s.heightSegments,
                s.openEnded,
              );
              break;
            case "SphereGeometry":
              a = new THREE.SphereGeometry(
                s.radius,
                s.widthSegments,
                s.heightSegments,
                s.phiStart,
                s.phiLength,
                s.thetaStart,
                s.thetaLength,
              );
              break;
            case "IcosahedronGeometry":
              a = new THREE.IcosahedronGeometry(s.radius, s.detail);
              break;
            case "TorusGeometry":
              a = new THREE.TorusGeometry(
                s.radius,
                s.tube,
                s.radialSegments,
                s.tubularSegments,
                s.arc,
              );
              break;
            case "TorusKnotGeometry":
              a = new THREE.TorusKnotGeometry(
                s.radius,
                s.tube,
                s.radialSegments,
                s.tubularSegments,
                s.p,
                s.q,
                s.heightScale,
              );
              break;
            case "BufferGeometry":
              a = r.parse(s.data);
              break;
            case "Geometry":
              a = i.parse(s.data).geometry;
          }
          a.uuid = s.uuid,
            void 0 !== s.name && (a.name = s.name),
            t[s.uuid] = a;
        }
      }
      return t;
    },
    parseMaterials: function (e) {
      var t = {};
      if (void 0 !== e) {
        for (
          var i = new THREE.MaterialLoader(), r = 0, n = e.length; r < n; r++
        ) {
          var o = e[r], a = i.parse(o);
          a.uuid = o.uuid,
            void 0 !== o.name && (a.name = o.name),
            t[o.uuid] = a;
        }
      }
      return t;
    },
    parseObject: function () {
      var s = new THREE.Matrix4();
      return function (e, t, i) {
        var r;
        switch (e.type) {
          case "Scene":
            r = new THREE.Scene();
            break;
          case "PerspectiveCamera":
            r = new THREE.PerspectiveCamera(e.fov, e.aspect, e.near, e.far);
            break;
          case "OrthographicCamera":
            r = new THREE.OrthographicCamera(
              e.left,
              e.right,
              e.top,
              e.bottom,
              e.near,
              e.far,
            );
            break;
          case "AmbientLight":
            r = new THREE.AmbientLight(e.color);
            break;
          case "DirectionalLight":
            r = new THREE.DirectionalLight(e.color, e.intensity);
            break;
          case "PointLight":
            r = new THREE.PointLight(e.color, e.intensity, e.distance);
            break;
          case "SpotLight":
            r = new THREE.SpotLight(
              e.color,
              e.intensity,
              e.distance,
              e.angle,
              e.exponent,
            );
            break;
          case "HemisphereLight":
            r = new THREE.HemisphereLight(e.color, e.groundColor, e.intensity);
            break;
          case "Mesh":
            var n = t[e.geometry], o = i[e.material];
            void 0 === n &&
            console.error(
              "THREE.ObjectLoader: Undefined geometry " + e.geometry,
            ),
              void 0 === o &&
              console.error(
                "THREE.ObjectLoader: Undefined material " + e.material,
              ),
              r = new THREE.Mesh(n, o);
            break;
          default:
            r = new THREE.Object3D();
        }
        if (
          r.uuid = e.uuid,
            void 0 !== e.name && (r.name = e.name),
            void 0 !== e.matrix
              ? (s.fromArray(e.matrix),
                s.decompose(r.position, r.quaternion, r.scale))
              : (void 0 !== e.position && r.position.fromArray(e.position),
                void 0 !== e.rotation && r.rotation.fromArray(e.rotation),
                void 0 !== e.scale && r.scale.fromArray(e.scale)),
            void 0 !== e.visible && (r.visible = e.visible),
            void 0 !== e.userData && (r.userData = e.userData),
            void 0 !== e.children
        ) {
          for (var a in e.children) {
            r.add(this.parseObject(e.children[a], t, i));
          }
        }
        return r;
      };
    }(),
  },
  THREE.SceneLoader = function () {
    this.onLoadStart = function () {},
      this.onLoadProgress = function () {},
      this.onLoadComplete = function () {},
      this.callbackSync = function () {},
      this.callbackProgress = function () {},
      this.geometryHandlers = {},
      this.hierarchyHandlers = {},
      this.addGeometryHandler("ascii", THREE.JSONLoader);
  },
  THREE.SceneLoader.prototype = {
    constructor: THREE.SceneLoader,
    load: function (t, i, e, r) {
      var n = this, o = new THREE.XHRLoader(n.manager);
      o.setCrossOrigin(this.crossOrigin),
        o.load(t, function (e) {
          n.parse(JSON.parse(e), i, t);
        });
    },
    setCrossOrigin: function (e) {
      this.crossOrigin = e;
    },
    addGeometryHandler: function (e, t) {
      this.geometryHandlers[e] = { loaderClass: t };
    },
    addHierarchyHandler: function (e, t) {
      this.hierarchyHandlers[e] = { loaderClass: t };
    },
    parse: function (e, t, i) {
      var R,
        x,
        H,
        r,
        n,
        o,
        b,
        w,
        _,
        a,
        s,
        l,
        c,
        M,
        S = this,
        h = THREE.Loader.prototype.extractUrlBase(i),
        C = [],
        A = e;
      for (var u in this.geometryHandlers) {
        var p = this.geometryHandlers[u].loaderClass;
        this.geometryHandlers[u].loaderObject = new p();
      }
      for (var u in this.hierarchyHandlers) {
        p = this.hierarchyHandlers[u].loaderClass;
        this.hierarchyHandlers[u].loaderObject = new p();
      }
      if (
        s = a = 0,
          M = {
            scene: new THREE.Scene(),
            geometries: {},
            face_materials: {},
            materials: {},
            textures: {},
            objects: {},
            cameras: {},
            lights: {},
            fogs: {},
            empties: {},
            groups: {},
          },
          A.transform
      ) {
        var f = A.transform.position,
          d = A.transform.rotation,
          m = A.transform.scale;
        f && M.scene.position.fromArray(f),
          d && M.scene.rotation.fromArray(d),
          m && M.scene.scale.fromArray(m),
          (f || d || m) &&
          (M.scene.updateMatrix(), M.scene.updateMatrixWorld());
      }
      function L(e, t) {
        return "relativeToHTML" == t ? e : h + "/" + e;
      }
      function E() {
        !function e(t, i) {
          var r, n, o, a, s, l;
          for (var c in i) {
            var h = M.objects[c], u = i[c];
            if (void 0 === h) {
              if (u.type && u.type in S.hierarchyHandlers) {
                if (void 0 === u.loading) {
                  var p = {
                      type: 1,
                      url: 1,
                      material: 1,
                      position: 1,
                      rotation: 1,
                      scale: 1,
                      visible: 1,
                      children: 1,
                      userData: 1,
                      skin: 1,
                      morph: 1,
                      mirroredLoop: 1,
                      duration: 1,
                    },
                    f = {};
                  for (var d in u) d in p || (f[d] = u[d]);
                  x = M.materials[u.material], u.loading = !0;
                  var m = S.hierarchyHandlers[u.type].loaderObject;
                  m.options ? m.load(L(u.url, A.urlBaseType), P(c, t, x, u))
                  : m.load(L(u.url, A.urlBaseType), P(c, t, x, u), f);
                }
              } else if (void 0 !== u.geometry) {
                if (R = M.geometries[u.geometry]) {
                  var E = !1;
                  if (
                    x = M.materials[u.material],
                      E = x instanceof THREE.ShaderMaterial,
                      o = u.position,
                      a = u.rotation,
                      s = u.scale,
                      r = u.matrix,
                      l = u.quaternion,
                      u.material ||
                      (x = new THREE.MeshFaceMaterial(
                        M.face_materials[u.geometry],
                      )),
                      x instanceof THREE.MeshFaceMaterial &&
                      0 === x.materials.length &&
                      (x = new THREE.MeshFaceMaterial(
                        M.face_materials[u.geometry],
                      )),
                      x instanceof THREE.MeshFaceMaterial
                  ) {
                    for (var g = 0; g < x.materials.length; g++) {
                      E = E || x.materials[g] instanceof THREE.ShaderMaterial;
                    }
                  }
                  E && R.computeTangents(),
                    u.skin ? h = new THREE.SkinnedMesh(R, x) : u.morph
                      ? (h = new THREE.MorphAnimMesh(R, x),
                        void 0 !== u.duration && (h.duration = u.duration),
                        void 0 !== u.time && (h.time = u.time),
                        void 0 !== u.mirroredLoop &&
                        (h.mirroredLoop = u.mirroredLoop),
                        x.morphNormals && R.computeMorphNormals())
                      : h = new THREE.Mesh(R, x),
                    h.name = c,
                    r
                      ? (h.matrixAutoUpdate = !1,
                        h.matrix.set(
                          r[0],
                          r[1],
                          r[2],
                          r[3],
                          r[4],
                          r[5],
                          r[6],
                          r[7],
                          r[8],
                          r[9],
                          r[10],
                          r[11],
                          r[12],
                          r[13],
                          r[14],
                          r[15],
                        ))
                      : (h.position.fromArray(o),
                        l
                          ? h.quaternion.fromArray(l)
                          : h.rotation.fromArray(a),
                        h.scale.fromArray(s)),
                    h.visible = u.visible,
                    h.castShadow = u.castShadow,
                    h.receiveShadow = u.receiveShadow,
                    t.add(h),
                    M.objects[c] = h;
                }
              } else {
                "DirectionalLight" === u.type || "PointLight" === u.type ||
                  "AmbientLight" === u.type
                  ? (w = void 0 !== u.color ? u.color : 16777215,
                    _ = void 0 !== u.intensity ? u.intensity : 1,
                    "DirectionalLight" === u.type
                      ? (o = u.direction,
                        (b = new THREE.DirectionalLight(w, _)).position
                          .fromArray(o),
                        u.target &&
                        (C.push({ object: b, targetName: u.target }),
                          b.target = null))
                      : "PointLight" === u.type
                      ? (o = u.position,
                        n = u.distance,
                        (b = new THREE.PointLight(w, _, n)).position.fromArray(
                          o,
                        ))
                      : "AmbientLight" === u.type &&
                        (b = new THREE.AmbientLight(w)),
                    t.add(b),
                    b.name = c,
                    M.lights[c] = b,
                    M.objects[c] = b)
                  : "PerspectiveCamera" === u.type ||
                      "OrthographicCamera" === u.type
                  ? (o = u.position,
                    a = u.rotation,
                    l = u.quaternion,
                    "PerspectiveCamera" === u.type
                      ? H = new THREE.PerspectiveCamera(
                        u.fov,
                        u.aspect,
                        u.near,
                        u.far,
                      )
                      : "OrthographicCamera" === u.type &&
                        (H = new THREE.OrthographicCamera(
                          u.left,
                          u.right,
                          u.top,
                          u.bottom,
                          u.near,
                          u.far,
                        )),
                    H.name = c,
                    H.position.fromArray(o),
                    void 0 !== l ? H.quaternion.fromArray(l)
                    : void 0 !== a && H.rotation.fromArray(a),
                    t.add(H),
                    M.cameras[c] = H,
                    M.objects[c] = H)
                  : (o = u.position,
                    a = u.rotation,
                    s = u.scale,
                    l = u.quaternion,
                    (h = new THREE.Object3D()).name = c,
                    h.position.fromArray(o),
                    l ? h.quaternion.fromArray(l) : h.rotation.fromArray(a),
                    h.scale.fromArray(s),
                    h.visible = void 0 !== u.visible && u.visible,
                    t.add(h),
                    M.objects[c] = h,
                    M.empties[c] = h);
              }
              if (h) {
                if (void 0 !== u.userData) {
                  for (var v in u.userData) {
                    var y = u.userData[v];
                    h.userData[v] = y;
                  }
                }
                if (void 0 !== u.groups) {
                  for (var g = 0; g < u.groups.length; g++) {
                    var T = u.groups[g];
                    void 0 === M.groups[T] && (M.groups[T] = []),
                      M.groups[T].push(c);
                  }
                }
              }
            }
            void 0 !== h && void 0 !== u.children && e(h, u.children);
          }
        }(M.scene, A.objects);
      }
      function g(o) {
        return function (e, t) {
          var i, r, n;
          e.name = o,
            i = e,
            r = t,
            n = o,
            M.geometries[n] = i,
            M.face_materials[n] = r,
            E(),
            a -= 1,
            S.onLoadComplete(),
            y();
        };
      }
      function P(t, i, r, n) {
        return function (e) {
          (function (e, t, i, r, n) {
            var o = n.position, a = n.rotation, s = n.quaternion, l = n.scale;
            e.position.fromArray(o),
              s ? e.quaternion.fromArray(s) : e.rotation.fromArray(a),
              e.scale.fromArray(l),
              r && e.traverse(function (e) {
                e.material = r;
              });
            var c = void 0 === n.visible || n.visible;
            e.traverse(function (e) {
              e.visible = c;
            }),
              i.add(e),
              e.name = t,
              M.objects[t] = e,
              E();
          })(e.content ? e.content : e.dae ? e.scene : e, t, i, r, n),
            a -= 1,
            S.onLoadComplete(),
            y();
        };
      }
      function v(i) {
        return function (e, t) {
          e.name = i, M.geometries[i] = e, M.face_materials[i] = t;
        };
      }
      function y() {
        var e = {
          totalModels: l,
          totalTextures: c,
          loadedModels: l - a,
          loadedTextures: c - s,
        };
        S.callbackProgress(e, M),
          S.onLoadProgress(),
          0 === a && 0 === s && (!function () {
            for (var e = 0; e < C.length; e++) {
              var t = C[e], i = M.objects[t.targetName];
              i
                ? t.object.target = i
                : (t.object.target = new THREE.Object3D(),
                  M.scene.add(t.object.target)),
                t.object.target.userData.targetInverse = t.object;
            }
          }(),
            t(M));
      }
      var T,
        D,
        F,
        N,
        V,
        z,
        U,
        B,
        O,
        k = function (e) {
          return function () {
            s -= e, y(), S.onLoadComplete();
          };
        };
      function I(e, t) {
        if (t(e), void 0 !== e.children) {
          for (var i in e.children) I(e.children[i], t);
        }
      }
      for (T in A.fogs) {
        "linear" === (D = A.fogs[T]).type
          ? r = new THREE.Fog(0, D.near, D.far)
          : "exp2" === D.type && (r = new THREE.FogExp2(0, D.density)),
          o = D.color,
          r.color.setRGB(o[0], o[1], o[2]),
          M.fogs[T] = r;
      }
      for (F in A.geometries) {
        (N = A.geometries[F]).type in this.geometryHandlers &&
          (a += 1, S.onLoadStart());
      }
      for (var j in A.objects) {I(A.objects[j], function (e) {
          e.type && e.type in S.hierarchyHandlers && (a += 1, S.onLoadStart());
        });}
      for (F in l = a, A.geometries) {
        if ("cube" === (N = A.geometries[F]).type) {
          (R = new THREE.CubeGeometry(
            N.width,
            N.height,
            N.depth,
            N.widthSegments,
            N.heightSegments,
            N.depthSegments,
          )).name = F, M.geometries[F] = R;
        } else if ("plane" === N.type) {
          (R = new THREE.PlaneGeometry(
            N.width,
            N.height,
            N.widthSegments,
            N.heightSegments,
          )).name = F, M.geometries[F] = R;
        } else if ("sphere" === N.type) {
          (R = new THREE.SphereGeometry(
            N.radius,
            N.widthSegments,
            N.heightSegments,
          )).name = F, M.geometries[F] = R;
        } else if ("cylinder" === N.type) {
          (R = new THREE.CylinderGeometry(
            N.topRad,
            N.botRad,
            N.height,
            N.radSegs,
            N.heightSegs,
          )).name = F, M.geometries[F] = R;
        } else if ("torus" === N.type) {
          (R = new THREE.TorusGeometry(
            N.radius,
            N.tube,
            N.segmentsR,
            N.segmentsT,
          )).name = F, M.geometries[F] = R;
        } else if ("icosahedron" === N.type) {
          (R = new THREE.IcosahedronGeometry(N.radius, N.subdivisions)).name =
            F, M.geometries[F] = R;
        } else if (N.type in this.geometryHandlers) {
          var G = {};
          for (var W in N) "type" !== W && "url" !== W && (G[W] = N[W]);
          this.geometryHandlers[N.type].loaderObject.load(
            L(N.url, A.urlBaseType),
            g(F),
            G,
          );
        } else if ("embedded" === N.type) {
          var X = A.embeds[N.id];
          if (X.metadata = A.metadata, X) {
            var q = this.geometryHandlers.ascii.loaderObject.parse(X, "");
            v(F)(q.geometry, q.materials);
          }
        }
      }
      for (V in A.textures) {
        if ((z = A.textures[V]).url instanceof Array) {
          s += z.url.length;
          for (var Y = 0; Y < z.url.length; Y++) S.onLoadStart();
        } else s += 1, S.onLoadStart();
      }
      for (V in c = s, A.textures) {
        if (
          void 0 !== (z = A.textures[V]).mapping &&
          void 0 !== THREE[z.mapping] && (z.mapping = new THREE[z.mapping]()),
            z.url instanceof Array
        ) {
          for (var K = z.url.length, Q = [], Z = 0; Z < K; Z++) {Q[Z] = L(
              z.url[Z],
              A.urlBaseType,
            );}
          n = ($ = /\.dds$/i.test(Q[0]))
            ? THREE.ImageUtils.loadCompressedTextureCube(Q, z.mapping, k(K))
            : THREE.ImageUtils.loadTextureCube(Q, z.mapping, k(K));
        } else {
          var $ = /\.dds$/i.test(z.url), J = L(z.url, A.urlBaseType), ee = k(1);
          if (
            n = $
              ? THREE.ImageUtils.loadCompressedTexture(J, z.mapping, ee)
              : THREE.ImageUtils.loadTexture(J, z.mapping, ee),
              void 0 !== THREE[z.minFilter] &&
              (n.minFilter = THREE[z.minFilter]),
              void 0 !== THREE[z.magFilter] &&
              (n.magFilter = THREE[z.magFilter]),
              z.anisotropy && (n.anisotropy = z.anisotropy),
              z.repeat &&
              (n.repeat.set(z.repeat[0], z.repeat[1]),
                1 !== z.repeat[0] && (n.wrapS = THREE.RepeatWrapping),
                1 !== z.repeat[1] && (n.wrapT = THREE.RepeatWrapping)),
              z.offset && n.offset.set(z.offset[0], z.offset[1]),
              z.wrap
          ) {
            var te = {
              repeat: THREE.RepeatWrapping,
              mirror: THREE.MirroredRepeatWrapping,
            };
            void 0 !== te[z.wrap[0]] && (n.wrapS = te[z.wrap[0]]),
              void 0 !== te[z.wrap[1]] && (n.wrapT = te[z.wrap[1]]);
          }
        }
        M.textures[V] = n;
      }
      for (U in A.materials) {
        for (O in (B = A.materials[U]).parameters) {
          if (
            "envMap" === O || "map" === O || "lightMap" === O || "bumpMap" === O
          ) {
            B.parameters[O] = M.textures[B.parameters[O]];
          } else if ("shading" === O) {
            B.parameters[O] = "flat" === B.parameters[O] ? THREE.FlatShading
            : THREE.SmoothShading;
          } else if ("side" === O) {
            "double" == B.parameters[O]
              ? B.parameters[O] = THREE.DoubleSide
              : "back" == B.parameters[O]
              ? B.parameters[O] = THREE.BackSide
              : B.parameters[O] = THREE.FrontSide;
          } else if ("blending" === O) {
            B.parameters[O] = B.parameters[O] in THREE
              ? THREE[B.parameters[O]]
              : THREE.NormalBlending;
          } else if ("combine" === O) {
            B.parameters[O] = B.parameters[O] in THREE
              ? THREE[B.parameters[O]]
              : THREE.MultiplyOperation;
          } else if ("vertexColors" === O) {
            "face" == B.parameters[O]
              ? B.parameters[O] = THREE.FaceColors
              : B.parameters[O] && (B.parameters[O] = THREE.VertexColors);
          } else if ("wrapRGB" === O) {
            var ie = B.parameters[O];
            B.parameters[O] = new THREE.Vector3(ie[0], ie[1], ie[2]);
          }
        }
        if (
          void 0 !== B.parameters.opacity && B.parameters.opacity < 1 &&
          (B.parameters.transparent = !0), B.parameters.normalMap
        ) {
          var re = THREE.ShaderLib.normalmap,
            ne = THREE.UniformsUtils.clone(re.uniforms),
            oe = B.parameters.color,
            ae = B.parameters.specular,
            se = B.parameters.ambient,
            le = B.parameters.shininess;
          ne.tNormal.value = M.textures[B.parameters.normalMap],
            B.parameters.normalScale &&
            ne.uNormalScale.value.set(
              B.parameters.normalScale[0],
              B.parameters.normalScale[1],
            ),
            B.parameters.map &&
            (ne.tDiffuse.value = B.parameters.map, ne.enableDiffuse.value = !0),
            B.parameters.envMap &&
            (ne.tCube.value = B.parameters.envMap,
              ne.enableReflection.value = !0,
              ne.uReflectivity.value = B.parameters.reflectivity),
            B.parameters.lightMap &&
            (ne.tAO.value = B.parameters.lightMap, ne.enableAO.value = !0),
            B.parameters.specularMap &&
            (ne.tSpecular.value = M.textures[B.parameters.specularMap],
              ne.enableSpecular.value = !0),
            B.parameters.displacementMap &&
            (ne.tDisplacement.value = M.textures[B.parameters.displacementMap],
              ne.enableDisplacement.value = !0,
              ne.uDisplacementBias.value = B.parameters.displacementBias,
              ne.uDisplacementScale.value = B.parameters.displacementScale),
            ne.uDiffuseColor.value.setHex(oe),
            ne.uSpecularColor.value.setHex(ae),
            ne.uAmbientColor.value.setHex(se),
            ne.uShininess.value = le,
            B.parameters.opacity && (ne.uOpacity.value = B.parameters.opacity);
          var ce = {
            fragmentShader: re.fragmentShader,
            vertexShader: re.vertexShader,
            uniforms: ne,
            lights: !0,
            fog: !0,
          };
          x = new THREE.ShaderMaterial(ce);
        } else x = new THREE[B.type](B.parameters);
        x.name = U, M.materials[U] = x;
      }
      for (U in A.materials) {
        if ((B = A.materials[U]).parameters.materials) {
          var he = [];
          for (Z = 0; Z < B.parameters.materials.length; Z++) {
            var ue = B.parameters.materials[Z];
            he.push(M.materials[ue]);
          }
          M.materials[U].materials = he;
        }
      }
      E(),
        M.cameras && A.defaults.camera &&
        (M.currentCamera = M.cameras[A.defaults.camera]),
        M.fogs && A.defaults.fog && (M.scene.fog = M.fogs[A.defaults.fog]),
        S.callbackSync(M),
        y();
    },
  },
  THREE.TextureLoader = function (e) {
    this.manager = void 0 !== e ? e : THREE.DefaultLoadingManager;
  },
  THREE.TextureLoader.prototype = {
    constructor: THREE.TextureLoader,
    load: function (e, i, t, r) {
      var n = new THREE.ImageLoader(this.manager);
      n.setCrossOrigin(this.crossOrigin),
        n.load(e, function (e) {
          var t = new THREE.Texture(e);
          t.needsUpdate = !0, void 0 !== i && i(t);
        });
    },
    setCrossOrigin: function (e) {
      this.crossOrigin = e;
    },
  },
  THREE.Material = function () {
    this.id = THREE.MaterialIdCount++,
      this.uuid = THREE.Math.generateUUID(),
      this.name = "",
      this.side = THREE.FrontSide,
      this.opacity = 1,
      this.transparent = !1,
      this.blending = THREE.NormalBlending,
      this.blendSrc = THREE.SrcAlphaFactor,
      this.blendDst = THREE.OneMinusSrcAlphaFactor,
      this.blendEquation = THREE.AddEquation,
      this.depthTest = !0,
      this.depthWrite = !0,
      this.polygonOffset = !1,
      this.polygonOffsetFactor = 0,
      this.polygonOffsetUnits = 0,
      this.alphaTest = 0,
      this.overdraw = 0,
      this.visible = !0,
      this.needsUpdate = !0;
  },
  THREE.Material.prototype = {
    constructor: THREE.Material,
    setValues: function (e) {
      if (void 0 !== e) {
        for (var t in e) {
          var i = e[t];
          if (void 0 !== i) {
            if (t in this) {
              var r = this[t];
              r instanceof THREE.Color
                ? r.set(i)
                : r instanceof THREE.Vector3 && i instanceof THREE.Vector3
                ? r.copy(i)
                : this[t] = "overdraw" == t ? Number(i) : i;
            }
          } else {
            console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          }
        }
      }
    },
    clone: function (e) {
      return void 0 === e && (e = new THREE.Material()),
        e.name = this.name,
        e.side = this.side,
        e.opacity = this.opacity,
        e.transparent = this.transparent,
        e.blending = this.blending,
        e.blendSrc = this.blendSrc,
        e.blendDst = this.blendDst,
        e.blendEquation = this.blendEquation,
        e.depthTest = this.depthTest,
        e.depthWrite = this.depthWrite,
        e.polygonOffset = this.polygonOffset,
        e.polygonOffsetFactor = this.polygonOffsetFactor,
        e.polygonOffsetUnits = this.polygonOffsetUnits,
        e.alphaTest = this.alphaTest,
        e.overdraw = this.overdraw,
        e.visible = this.visible,
        e;
    },
    dispose: function () {
      this.dispatchEvent({ type: "dispose" });
    },
  },
  THREE.EventDispatcher.prototype.apply(THREE.Material.prototype),
  THREE.MaterialIdCount = 0,
  THREE.LineBasicMaterial = function (e) {
    THREE.Material.call(this),
      this.color = new THREE.Color(16777215),
      this.linewidth = 1,
      this.linecap = "round",
      this.linejoin = "round",
      this.vertexColors = !1,
      this.fog = !0,
      this.setValues(e);
  },
  THREE.LineBasicMaterial.prototype = Object.create(THREE.Material.prototype),
  THREE.LineBasicMaterial.prototype.clone = function () {
    var e = new THREE.LineBasicMaterial();
    return THREE.Material.prototype.clone.call(this, e),
      e.color.copy(this.color),
      e.linewidth = this.linewidth,
      e.linecap = this.linecap,
      e.linejoin = this.linejoin,
      e.vertexColors = this.vertexColors,
      e.fog = this.fog,
      e;
  },
  THREE.LineDashedMaterial = function (e) {
    THREE.Material.call(this),
      this.color = new THREE.Color(16777215),
      this.linewidth = 1,
      this.scale = 1,
      this.dashSize = 3,
      this.gapSize = 1,
      this.vertexColors = !1,
      this.fog = !0,
      this.setValues(e);
  },
  THREE.LineDashedMaterial.prototype = Object.create(THREE.Material.prototype),
  THREE.LineDashedMaterial.prototype.clone = function () {
    var e = new THREE.LineDashedMaterial();
    return THREE.Material.prototype.clone.call(this, e),
      e.color.copy(this.color),
      e.linewidth = this.linewidth,
      e.scale = this.scale,
      e.dashSize = this.dashSize,
      e.gapSize = this.gapSize,
      e.vertexColors = this.vertexColors,
      e.fog = this.fog,
      e;
  },
  THREE.MeshBasicMaterial = function (e) {
    THREE.Material.call(this),
      this.color = new THREE.Color(16777215),
      this.map = null,
      this.lightMap = null,
      this.specularMap = null,
      this.envMap = null,
      this.combine = THREE.MultiplyOperation,
      this.reflectivity = 1,
      this.refractionRatio = .98,
      this.fog = !0,
      this.shading = THREE.SmoothShading,
      this.wireframe = !1,
      this.wireframeLinewidth = 1,
      this.wireframeLinecap = "round",
      this.wireframeLinejoin = "round",
      this.vertexColors = THREE.NoColors,
      this.skinning = !1,
      this.morphTargets = !1,
      this.setValues(e);
  },
  THREE.MeshBasicMaterial.prototype = Object.create(THREE.Material.prototype),
  THREE.MeshBasicMaterial.prototype.clone = function () {
    var e = new THREE.MeshBasicMaterial();
    return THREE.Material.prototype.clone.call(this, e),
      e.color.copy(this.color),
      e.map = this.map,
      e.lightMap = this.lightMap,
      e.specularMap = this.specularMap,
      e.envMap = this.envMap,
      e.combine = this.combine,
      e.reflectivity = this.reflectivity,
      e.refractionRatio = this.refractionRatio,
      e.fog = this.fog,
      e.shading = this.shading,
      e.wireframe = this.wireframe,
      e.wireframeLinewidth = this.wireframeLinewidth,
      e.wireframeLinecap = this.wireframeLinecap,
      e.wireframeLinejoin = this.wireframeLinejoin,
      e.vertexColors = this.vertexColors,
      e.skinning = this.skinning,
      e.morphTargets = this.morphTargets,
      e;
  },
  THREE.MeshLambertMaterial = function (e) {
    THREE.Material.call(this),
      this.color = new THREE.Color(16777215),
      this.ambient = new THREE.Color(16777215),
      this.emissive = new THREE.Color(0),
      this.wrapAround = !1,
      this.wrapRGB = new THREE.Vector3(1, 1, 1),
      this.map = null,
      this.lightMap = null,
      this.specularMap = null,
      this.envMap = null,
      this.combine = THREE.MultiplyOperation,
      this.reflectivity = 1,
      this.refractionRatio = .98,
      this.fog = !0,
      this.shading = THREE.SmoothShading,
      this.wireframe = !1,
      this.wireframeLinewidth = 1,
      this.wireframeLinecap = "round",
      this.wireframeLinejoin = "round",
      this.vertexColors = THREE.NoColors,
      this.skinning = !1,
      this.morphTargets = !1,
      this.morphNormals = !1,
      this.setValues(e);
  },
  THREE.MeshLambertMaterial.prototype = Object.create(THREE.Material.prototype),
  THREE.MeshLambertMaterial.prototype.clone = function () {
    var e = new THREE.MeshLambertMaterial();
    return THREE.Material.prototype.clone.call(this, e),
      e.color.copy(this.color),
      e.ambient.copy(this.ambient),
      e.emissive.copy(this.emissive),
      e.wrapAround = this.wrapAround,
      e.wrapRGB.copy(this.wrapRGB),
      e.map = this.map,
      e.lightMap = this.lightMap,
      e.specularMap = this.specularMap,
      e.envMap = this.envMap,
      e.combine = this.combine,
      e.reflectivity = this.reflectivity,
      e.refractionRatio = this.refractionRatio,
      e.fog = this.fog,
      e.shading = this.shading,
      e.wireframe = this.wireframe,
      e.wireframeLinewidth = this.wireframeLinewidth,
      e.wireframeLinecap = this.wireframeLinecap,
      e.wireframeLinejoin = this.wireframeLinejoin,
      e.vertexColors = this.vertexColors,
      e.skinning = this.skinning,
      e.morphTargets = this.morphTargets,
      e.morphNormals = this.morphNormals,
      e;
  },
  THREE.MeshPhongMaterial = function (e) {
    THREE.Material.call(this),
      this.color = new THREE.Color(16777215),
      this.ambient = new THREE.Color(16777215),
      this.emissive = new THREE.Color(0),
      this.specular = new THREE.Color(1118481),
      this.shininess = 30,
      this.metal = !1,
      this.perPixel = !0,
      this.wrapAround = !1,
      this.wrapRGB = new THREE.Vector3(1, 1, 1),
      this.map = null,
      this.lightMap = null,
      this.bumpMap = null,
      this.bumpScale = 1,
      this.normalMap = null,
      this.normalScale = new THREE.Vector2(1, 1),
      this.specularMap = null,
      this.envMap = null,
      this.combine = THREE.MultiplyOperation,
      this.reflectivity = 1,
      this.refractionRatio = .98,
      this.fog = !0,
      this.shading = THREE.SmoothShading,
      this.wireframe = !1,
      this.wireframeLinewidth = 1,
      this.wireframeLinecap = "round",
      this.wireframeLinejoin = "round",
      this.vertexColors = THREE.NoColors,
      this.skinning = !1,
      this.morphTargets = !1,
      this.morphNormals = !1,
      this.setValues(e);
  },
  THREE.MeshPhongMaterial.prototype = Object.create(THREE.Material.prototype),
  THREE.MeshPhongMaterial.prototype.clone = function () {
    var e = new THREE.MeshPhongMaterial();
    return THREE.Material.prototype.clone.call(this, e),
      e.color.copy(this.color),
      e.ambient.copy(this.ambient),
      e.emissive.copy(this.emissive),
      e.specular.copy(this.specular),
      e.shininess = this.shininess,
      e.metal = this.metal,
      e.perPixel = this.perPixel,
      e.wrapAround = this.wrapAround,
      e.wrapRGB.copy(this.wrapRGB),
      e.map = this.map,
      e.lightMap = this.lightMap,
      e.bumpMap = this.bumpMap,
      e.bumpScale = this.bumpScale,
      e.normalMap = this.normalMap,
      e.normalScale.copy(this.normalScale),
      e.specularMap = this.specularMap,
      e.envMap = this.envMap,
      e.combine = this.combine,
      e.reflectivity = this.reflectivity,
      e.refractionRatio = this.refractionRatio,
      e.fog = this.fog,
      e.shading = this.shading,
      e.wireframe = this.wireframe,
      e.wireframeLinewidth = this.wireframeLinewidth,
      e.wireframeLinecap = this.wireframeLinecap,
      e.wireframeLinejoin = this.wireframeLinejoin,
      e.vertexColors = this.vertexColors,
      e.skinning = this.skinning,
      e.morphTargets = this.morphTargets,
      e.morphNormals = this.morphNormals,
      e;
  },
  THREE.MeshDepthMaterial = function (e) {
    THREE.Material.call(this),
      this.wireframe = !1,
      this.wireframeLinewidth = 1,
      this.setValues(e);
  },
  THREE.MeshDepthMaterial.prototype = Object.create(THREE.Material.prototype),
  THREE.MeshDepthMaterial.prototype.clone = function () {
    var e = new THREE.MeshDepthMaterial();
    return THREE.Material.prototype.clone.call(this, e),
      e.wireframe = this.wireframe,
      e.wireframeLinewidth = this.wireframeLinewidth,
      e;
  },
  THREE.MeshNormalMaterial = function (e) {
    THREE.Material.call(this, e),
      this.shading = THREE.FlatShading,
      this.wireframe = !1,
      this.wireframeLinewidth = 1,
      this.morphTargets = !1,
      this.setValues(e);
  },
  THREE.MeshNormalMaterial.prototype = Object.create(THREE.Material.prototype),
  THREE.MeshNormalMaterial.prototype.clone = function () {
    var e = new THREE.MeshNormalMaterial();
    return THREE.Material.prototype.clone.call(this, e),
      e.shading = this.shading,
      e.wireframe = this.wireframe,
      e.wireframeLinewidth = this.wireframeLinewidth,
      e;
  },
  THREE.MeshFaceMaterial = function (e) {
    this.materials = e instanceof Array ? e : [];
  },
  THREE.MeshFaceMaterial.prototype.clone = function () {
    for (
      var e = new THREE.MeshFaceMaterial(), t = 0;
      t < this.materials.length;
      t++
    ) {
      e.materials.push(this.materials[t].clone());
    }
    return e;
  },
  THREE.ParticleSystemMaterial = function (e) {
    THREE.Material.call(this),
      this.color = new THREE.Color(16777215),
      this.map = null,
      this.size = 1,
      this.sizeAttenuation = !0,
      this.vertexColors = !1,
      this.fog = !0,
      this.setValues(e);
  },
  THREE.ParticleSystemMaterial.prototype = Object.create(
    THREE.Material.prototype,
  ),
  THREE.ParticleSystemMaterial.prototype.clone = function () {
    var e = new THREE.ParticleSystemMaterial();
    return THREE.Material.prototype.clone.call(this, e),
      e.color.copy(this.color),
      e.map = this.map,
      e.size = this.size,
      e.sizeAttenuation = this.sizeAttenuation,
      e.vertexColors = this.vertexColors,
      e.fog = this.fog,
      e;
  },
  THREE.ParticleBasicMaterial = THREE.ParticleSystemMaterial,
  THREE.ShaderMaterial = function (e) {
    THREE.Material.call(this),
      this.fragmentShader = "void main() {}",
      this.vertexShader = "void main() {}",
      this.uniforms = {},
      this.defines = {},
      this.attributes = null,
      this.shading = THREE.SmoothShading,
      this.linewidth = 1,
      this.wireframe = !1,
      this.wireframeLinewidth = 1,
      this.fog = !1,
      this.lights = !1,
      this.vertexColors = THREE.NoColors,
      this.skinning = !1,
      this.morphTargets = !1,
      this.morphNormals = !1,
      this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0],
      },
      this.index0AttributeName = "position",
      this.setValues(e);
  },
  THREE.ShaderMaterial.prototype = Object.create(THREE.Material.prototype),
  THREE.ShaderMaterial.prototype.clone = function () {
    var e = new THREE.ShaderMaterial();
    return THREE.Material.prototype.clone.call(this, e),
      e.fragmentShader = this.fragmentShader,
      e.vertexShader = this.vertexShader,
      e.uniforms = THREE.UniformsUtils.clone(this.uniforms),
      e.attributes = this.attributes,
      e.defines = this.defines,
      e.shading = this.shading,
      e.wireframe = this.wireframe,
      e.wireframeLinewidth = this.wireframeLinewidth,
      e.fog = this.fog,
      e.lights = this.lights,
      e.vertexColors = this.vertexColors,
      e.skinning = this.skinning,
      e.morphTargets = this.morphTargets,
      e.morphNormals = this.morphNormals,
      e;
  },
  THREE.SpriteMaterial = function (e) {
    THREE.Material.call(this),
      this.color = new THREE.Color(16777215),
      this.map = new THREE.Texture(),
      this.useScreenCoordinates = !0,
      this.depthTest = !this.useScreenCoordinates,
      this.sizeAttenuation = !this.useScreenCoordinates,
      this.alignment = THREE.SpriteAlignment.center.clone(),
      this.fog = !1,
      this.uvOffset = new THREE.Vector2(0, 0),
      this.uvScale = new THREE.Vector2(1, 1),
      this.setValues(e),
      void 0 === (e = e || {}).depthTest &&
      (this.depthTest = !this.useScreenCoordinates),
      void 0 === e.sizeAttenuation &&
      (this.sizeAttenuation = !this.useScreenCoordinates);
  },
  THREE.SpriteMaterial.prototype = Object.create(THREE.Material.prototype),
  THREE.SpriteMaterial.prototype.clone = function () {
    var e = new THREE.SpriteMaterial();
    return THREE.Material.prototype.clone.call(this, e),
      e.color.copy(this.color),
      e.map = this.map,
      e.useScreenCoordinates = this.useScreenCoordinates,
      e.sizeAttenuation = this.sizeAttenuation,
      e.alignment.copy(this.alignment),
      e.uvOffset.copy(this.uvOffset),
      e.uvScale.copy(this.uvScale),
      e.fog = this.fog,
      e;
  },
  THREE.SpriteAlignment = {},
  THREE.SpriteAlignment.topLeft = new THREE.Vector2(.5, -.5),
  THREE.SpriteAlignment.topCenter = new THREE.Vector2(0, -.5),
  THREE.SpriteAlignment.topRight = new THREE.Vector2(-.5, -.5),
  THREE.SpriteAlignment.centerLeft = new THREE.Vector2(.5, 0),
  THREE.SpriteAlignment.center = new THREE.Vector2(0, 0),
  THREE.SpriteAlignment.centerRight = new THREE.Vector2(-.5, 0),
  THREE.SpriteAlignment.bottomLeft = new THREE.Vector2(.5, .5),
  THREE.SpriteAlignment.bottomCenter = new THREE.Vector2(0, .5),
  THREE.SpriteAlignment.bottomRight = new THREE.Vector2(-.5, .5),
  THREE.SpriteCanvasMaterial = function (e) {
    THREE.Material.call(this),
      this.color = new THREE.Color(16777215),
      this.program = function (e, t) {},
      this.setValues(e);
  },
  THREE.SpriteCanvasMaterial.prototype = Object.create(
    THREE.Material.prototype,
  ),
  THREE.SpriteCanvasMaterial.prototype.clone = function () {
    var e = new THREE.SpriteCanvasMaterial();
    return THREE.Material.prototype.clone.call(this, e),
      e.color.copy(this.color),
      e.program = this.program,
      e;
  },
  THREE.ParticleCanvasMaterial = THREE.SpriteCanvasMaterial,
  THREE.Texture = function (e, t, i, r, n, o, a, s, l) {
    this.id = THREE.TextureIdCount++,
      this.uuid = THREE.Math.generateUUID(),
      this.name = "",
      this.image = e,
      this.mipmaps = [],
      this.mapping = void 0 !== t ? t : new THREE.UVMapping(),
      this.wrapS = void 0 !== i ? i : THREE.ClampToEdgeWrapping,
      this.wrapT = void 0 !== r ? r : THREE.ClampToEdgeWrapping,
      this.magFilter = void 0 !== n ? n : THREE.LinearFilter,
      this.minFilter = void 0 !== o ? o : THREE.LinearMipMapLinearFilter,
      this.anisotropy = void 0 !== l ? l : 1,
      this.format = void 0 !== a ? a : THREE.RGBAFormat,
      this.type = void 0 !== s ? s : THREE.UnsignedByteType,
      this.offset = new THREE.Vector2(0, 0),
      this.repeat = new THREE.Vector2(1, 1),
      this.generateMipmaps = !0,
      this.premultiplyAlpha = !1,
      this.flipY = !0,
      this.unpackAlignment = 4,
      this.needsUpdate = !1,
      this.onUpdate = null;
  },
  THREE.Texture.prototype = {
    constructor: THREE.Texture,
    clone: function (e) {
      return void 0 === e && (e = new THREE.Texture()),
        e.image = this.image,
        e.mipmaps = this.mipmaps.slice(0),
        e.mapping = this.mapping,
        e.wrapS = this.wrapS,
        e.wrapT = this.wrapT,
        e.magFilter = this.magFilter,
        e.minFilter = this.minFilter,
        e.anisotropy = this.anisotropy,
        e.format = this.format,
        e.type = this.type,
        e.offset.copy(this.offset),
        e.repeat.copy(this.repeat),
        e.generateMipmaps = this.generateMipmaps,
        e.premultiplyAlpha = this.premultiplyAlpha,
        e.flipY = this.flipY,
        e.unpackAlignment = this.unpackAlignment,
        e;
    },
    dispose: function () {
      this.dispatchEvent({ type: "dispose" });
    },
  },
  THREE.EventDispatcher.prototype.apply(THREE.Texture.prototype),
  THREE.TextureIdCount = 0,
  THREE.CompressedTexture = function (e, t, i, r, n, o, a, s, l, c, h) {
    THREE.Texture.call(this, null, o, a, s, l, c, r, n, h),
      this.image = { width: t, height: i },
      this.mipmaps = e,
      this.generateMipmaps = !1;
  },
  THREE.CompressedTexture.prototype = Object.create(THREE.Texture.prototype),
  THREE.CompressedTexture.prototype.clone = function () {
    var e = new THREE.CompressedTexture();
    return THREE.Texture.prototype.clone.call(this, e), e;
  },
  THREE.DataTexture = function (e, t, i, r, n, o, a, s, l, c, h) {
    THREE.Texture.call(this, null, o, a, s, l, c, r, n, h),
      this.image = { data: e, width: t, height: i };
  },
  THREE.DataTexture.prototype = Object.create(THREE.Texture.prototype),
  THREE.DataTexture.prototype.clone = function () {
    var e = new THREE.DataTexture();
    return THREE.Texture.prototype.clone.call(this, e), e;
  },
  THREE.ParticleSystem = function (e, t) {
    THREE.Object3D.call(this),
      this.geometry = void 0 !== e ? e : new THREE.Geometry(),
      this.material = void 0 !== t
        ? t
        : new THREE.ParticleSystemMaterial({ color: 16777215 * Math.random() }),
      this.sortParticles = !1,
      this.frustumCulled = !1;
  },
  THREE.ParticleSystem.prototype = Object.create(THREE.Object3D.prototype),
  THREE.ParticleSystem.prototype.clone = function (e) {
    return void 0 === e &&
      (e = new THREE.ParticleSystem(this.geometry, this.material)),
      e.sortParticles = this.sortParticles,
      THREE.Object3D.prototype.clone.call(this, e),
      e;
  },
  THREE.Line = function (e, t, i) {
    THREE.Object3D.call(this),
      this.geometry = void 0 !== e ? e : new THREE.Geometry(),
      this.material = void 0 !== t
        ? t
        : new THREE.LineBasicMaterial({ color: 16777215 * Math.random() }),
      this.type = void 0 !== i ? i : THREE.LineStrip;
  },
  THREE.LineStrip = 0,
  THREE.LinePieces = 1,
  THREE.Line.prototype = Object.create(THREE.Object3D.prototype),
  THREE.Line.prototype.clone = function (e) {
    return void 0 === e &&
      (e = new THREE.Line(this.geometry, this.material, this.type)),
      THREE.Object3D.prototype.clone.call(this, e),
      e;
  },
  THREE.Mesh = function (e, t) {
    THREE.Object3D.call(this),
      this.geometry = void 0 !== e ? e : new THREE.Geometry(),
      this.material = void 0 !== t
        ? t
        : new THREE.MeshBasicMaterial({ color: 16777215 * Math.random() }),
      this.updateMorphTargets();
  },
  THREE.Mesh.prototype = Object.create(THREE.Object3D.prototype),
  THREE.Mesh.prototype.updateMorphTargets = function () {
    if (0 < this.geometry.morphTargets.length) {
      this.morphTargetBase = -1,
        this.morphTargetForcedOrder = [],
        this.morphTargetInfluences = [],
        this.morphTargetDictionary = {};
      for (var e = 0, t = this.geometry.morphTargets.length; e < t; e++) {
        this.morphTargetInfluences.push(0),
          this.morphTargetDictionary[this.geometry.morphTargets[e].name] = e;
      }
    }
  },
  THREE.Mesh.prototype.getMorphTargetIndexByName = function (e) {
    return void 0 !== this.morphTargetDictionary[e]
      ? this.morphTargetDictionary[e]
      : (console.log(
        "THREE.Mesh.getMorphTargetIndexByName: morph target " + e +
          " does not exist. Returning 0.",
      ),
        0);
  },
  THREE.Mesh.prototype.clone = function (e) {
    return void 0 === e && (e = new THREE.Mesh(this.geometry, this.material)),
      THREE.Object3D.prototype.clone.call(this, e),
      e;
  },
  THREE.Bone = function (e) {
    THREE.Object3D.call(this),
      this.skin = e,
      this.skinMatrix = new THREE.Matrix4();
  },
  THREE.Bone.prototype = Object.create(THREE.Object3D.prototype),
  THREE.Bone.prototype.update = function (e, t) {
    this.matrixAutoUpdate && (t |= this.updateMatrix()),
      (t || this.matrixWorldNeedsUpdate) &&
      (e
        ? this.skinMatrix.multiplyMatrices(e, this.matrix)
        : this.skinMatrix.copy(this.matrix),
        t = !(this.matrixWorldNeedsUpdate = !1));
    var i, r = this.children.length;
    for (i = 0; i < r; i++) this.children[i].update(this.skinMatrix, t);
  },
  THREE.SkinnedMesh = function (e, t, i) {
    var r, n, o, a, s, l;
    if (
      THREE.Mesh.call(this, e, t),
        this.useVertexTexture = void 0 === i || i,
        this.identityMatrix = new THREE.Matrix4(),
        this.bones = [],
        this.boneMatrices = [],
        this.geometry && void 0 !== this.geometry.bones
    ) {
      for (r = 0; r < this.geometry.bones.length; r++) {
        a = (o = this.geometry.bones[r]).pos,
          s = o.rotq,
          l = o.scl,
          (n = this.addBone()).name = o.name,
          n.position.set(a[0], a[1], a[2]),
          n.quaternion.set(s[0], s[1], s[2], s[3]),
          void 0 !== l ? n.scale.set(l[0], l[1], l[2]) : n.scale.set(1, 1, 1);
      }
      for (r = 0; r < this.bones.length; r++) {
        o = this.geometry.bones[r],
          n = this.bones[r],
          -1 === o.parent ? this.add(n) : this.bones[o.parent].add(n);
      }
      var c, h = this.bones.length;
      if (this.useVertexTexture) {
        c = 256 < h ? 64 : 64 < h ? 32 : 16 < h ? 16 : 8,
          this.boneTextureWidth = c,
          this.boneTextureHeight = c,
          this.boneMatrices = new Float32Array(
            this.boneTextureWidth * this.boneTextureHeight * 4,
          ),
          this.boneTexture = new THREE.DataTexture(
            this.boneMatrices,
            this.boneTextureWidth,
            this.boneTextureHeight,
            THREE.RGBAFormat,
            THREE.FloatType,
          ),
          this.boneTexture.minFilter = THREE.NearestFilter,
          this.boneTexture.magFilter = THREE.NearestFilter,
          this.boneTexture.generateMipmaps = !1,
          this.boneTexture.flipY = !1;
      } else this.boneMatrices = new Float32Array(16 * h);
      this.pose();
    }
  },
  THREE.SkinnedMesh.prototype = Object.create(THREE.Mesh.prototype),
  THREE.SkinnedMesh.prototype.addBone = function (e) {
    return void 0 === e && (e = new THREE.Bone(this)), this.bones.push(e), e;
  },
  THREE.SkinnedMesh.prototype.updateMatrixWorld = function () {
    var s = new THREE.Matrix4();
    return function (e) {
      this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || e) &&
        (this.parent
          ? this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix,
          )
          : this.matrixWorld.copy(this.matrix),
          e = !(this.matrixWorldNeedsUpdate = !1));
      for (var t = 0, i = this.children.length; t < i; t++) {
        var r = this.children[t];
        r instanceof THREE.Bone
          ? r.update(this.identityMatrix, !1)
          : r.updateMatrixWorld(!0);
      }
      if (null == this.boneInverses) {
        this.boneInverses = [];
        for (var n = 0, o = this.bones.length; n < o; n++) {
          var a = new THREE.Matrix4();
          a.getInverse(this.bones[n].skinMatrix), this.boneInverses.push(a);
        }
      }
      for (n = 0, o = this.bones.length; n < o; n++) {
        s.multiplyMatrices(this.bones[n].skinMatrix, this.boneInverses[n]),
          s.flattenToArrayOffset(this.boneMatrices, 16 * n);
      }
      this.useVertexTexture && (this.boneTexture.needsUpdate = !0);
    };
  }(),
  THREE.SkinnedMesh.prototype.pose = function () {
    this.updateMatrixWorld(!0), this.normalizeSkinWeights();
  },
  THREE.SkinnedMesh.prototype.normalizeSkinWeights = function () {
    if (this.geometry instanceof THREE.Geometry) {
      for (var e = 0; e < this.geometry.skinIndices.length; e++) {
        var t = this.geometry.skinWeights[e], i = 1 / t.lengthManhattan();
        i !== 1 / 0
          ? t.multiplyScalar(i)
          : t.set(1);
      }
    }
  },
  THREE.SkinnedMesh.prototype.clone = function (e) {
    return void 0 === e &&
      (e = new THREE.SkinnedMesh(
        this.geometry,
        this.material,
        this.useVertexTexture,
      )),
      THREE.Mesh.prototype.clone.call(this, e),
      e;
  },
  THREE.MorphAnimMesh = function (e, t) {
    THREE.Mesh.call(this, e, t),
      this.duration = 1e3,
      this.mirroredLoop = !1,
      this.time = 0,
      this.lastKeyframe = 0,
      this.currentKeyframe = 0,
      this.direction = 1,
      this.directionBackwards = !1,
      this.setFrameRange(0, this.geometry.morphTargets.length - 1);
  },
  THREE.MorphAnimMesh.prototype = Object.create(THREE.Mesh.prototype),
  THREE.MorphAnimMesh.prototype.setFrameRange = function (e, t) {
    this.startKeyframe = e,
      this.endKeyframe = t,
      this.length = this.endKeyframe - this.startKeyframe + 1;
  },
  THREE.MorphAnimMesh.prototype.setDirectionForward = function () {
    this.direction = 1, this.directionBackwards = !1;
  },
  THREE.MorphAnimMesh.prototype.setDirectionBackward = function () {
    this.direction = -1, this.directionBackwards = !0;
  },
  THREE.MorphAnimMesh.prototype.parseAnimations = function () {
    var e = this.geometry;
    e.animations || (e.animations = {});
    for (
      var t,
        i = e.animations,
        r = /([a-z]+)(\d+)/,
        n = 0,
        o = e.morphTargets.length;
      n < o;
      n++
    ) {
      var a = e.morphTargets[n].name.match(r);
      if (a && 1 < a.length) {
        var s = a[1];
        a[2];
        i[s] || (i[s] = { start: 1 / 0, end: -1 / 0 });
        var l = i[s];
        n < l.start && (l.start = n), n > l.end && (l.end = n), t || (t = s);
      }
    }
    e.firstAnimation = t;
  },
  THREE.MorphAnimMesh.prototype.setAnimationLabel = function (e, t, i) {
    this.geometry.animations || (this.geometry.animations = {}),
      this.geometry.animations[e] = { start: t, end: i };
  },
  THREE.MorphAnimMesh.prototype.playAnimation = function (e, t) {
    var i = this.geometry.animations[e];
    i
      ? (this.setFrameRange(i.start, i.end),
        this.duration = (i.end - i.start) / t * 1e3,
        this.time = 0) : console.warn("animation[" + e + "] undefined");
  },
  THREE.MorphAnimMesh.prototype.updateAnimation = function (e) {
    var t = this.duration / this.length;
    this.time += this.direction * e,
      this.mirroredLoop
        ? (this.time > this.duration || this.time < 0) &&
          (this.direction *= -1,
            this.time > this.duration &&
            (this.time = this.duration, this.directionBackwards = !0),
            this.time < 0 && (this.time = 0, this.directionBackwards = !1))
        : (this.time = this.time % this.duration,
          this.time < 0 && (this.time += this.duration));
    var i = this.startKeyframe +
      THREE.Math.clamp(Math.floor(this.time / t), 0, this.length - 1);
    i !== this.currentKeyframe &&
      (this.morphTargetInfluences[this.lastKeyframe] = 0,
        this.morphTargetInfluences[this.currentKeyframe] = 1,
        this.morphTargetInfluences[i] = 0,
        this.lastKeyframe = this.currentKeyframe,
        this.currentKeyframe = i);
    var r = this.time % t / t;
    this.directionBackwards && (r = 1 - r),
      this.morphTargetInfluences[this.currentKeyframe] = r,
      this.morphTargetInfluences[this.lastKeyframe] = 1 - r;
  },
  THREE.MorphAnimMesh.prototype.clone = function (e) {
    return void 0 === e &&
      (e = new THREE.MorphAnimMesh(this.geometry, this.material)),
      e.duration = this.duration,
      e.mirroredLoop = this.mirroredLoop,
      e.time = this.time,
      e.lastKeyframe = this.lastKeyframe,
      e.currentKeyframe = this.currentKeyframe,
      e.direction = this.direction,
      e.directionBackwards = this.directionBackwards,
      THREE.Mesh.prototype.clone.call(this, e),
      e;
  },
  THREE.LOD = function () {
    THREE.Object3D.call(this), this.objects = [];
  },
  THREE.LOD.prototype = Object.create(THREE.Object3D.prototype),
  THREE.LOD.prototype.addLevel = function (e, t) {
    void 0 === t && (t = 0), t = Math.abs(t);
    for (
      var i = 0; i < this.objects.length && !(t < this.objects[i].distance); i++
    );
    this.objects.splice(i, 0, { distance: t, object: e }), this.add(e);
  },
  THREE.LOD.prototype.getObjectForDistance = function (e) {
    for (
      var t = 1, i = this.objects.length;
      t < i && !(e < this.objects[t].distance);
      t++
    );
    return this.objects[t - 1].object;
  },
  THREE.LOD.prototype.update = function () {
    var n = new THREE.Vector3(), o = new THREE.Vector3();
    return function (e) {
      if (1 < this.objects.length) {
        n.getPositionFromMatrix(e.matrixWorld),
          o.getPositionFromMatrix(this.matrixWorld);
        var t = n.distanceTo(o);
        this.objects[0].object.visible = !0;
        for (
          var i = 1, r = this.objects.length;
          i < r && t >= this.objects[i].distance;
          i++
        ) {
          this.objects[i - 1].object.visible = !1,
            this.objects[i].object.visible = !0;
        }
        for (; i < r; i++) this.objects[i].object.visible = !1;
      }
    };
  }(),
  THREE.LOD.prototype.clone = function () {},
  THREE.Sprite = function (e) {
    THREE.Object3D.call(this),
      this.material = void 0 !== e ? e : new THREE.SpriteMaterial(),
      this.rotation = 0;
  },
  THREE.Sprite.prototype = Object.create(THREE.Object3D.prototype),
  THREE.Sprite.prototype.updateMatrix = function () {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      this.matrixWorldNeedsUpdate = !0;
  },
  THREE.Sprite.prototype.clone = function (e) {
    return void 0 === e && (e = new THREE.Sprite(this.material)),
      THREE.Object3D.prototype.clone.call(this, e),
      e;
  },
  THREE.Particle = THREE.Sprite,
  THREE.Scene = function () {
    THREE.Object3D.call(this),
      this.fog = null,
      this.overrideMaterial = null,
      this.autoUpdate = !0,
      this.matrixAutoUpdate = !1,
      this.__lights = [],
      this.__objectsAdded = [],
      this.__objectsRemoved = [];
  },
  THREE.Scene.prototype = Object.create(THREE.Object3D.prototype),
  THREE.Scene.prototype.__addObject = function (e) {
    if (e instanceof THREE.Light) {
      -1 === this.__lights.indexOf(e) && this.__lights.push(e),
        e.target && void 0 === e.target.parent && this.add(e.target);
    } else if (!(e instanceof THREE.Camera || e instanceof THREE.Bone)) {
      this.__objectsAdded.push(e);
      var t = this.__objectsRemoved.indexOf(e);
      -1 !== t && this.__objectsRemoved.splice(t, 1);
    }
    for (var i = 0; i < e.children.length; i++) this.__addObject(e.children[i]);
  },
  THREE.Scene.prototype.__removeObject = function (e) {
    if (e instanceof THREE.Light) {
      if (
        -1 !== (i = this.__lights.indexOf(e)) && this.__lights.splice(i, 1),
          e.shadowCascadeArray
      ) {
        for (var t = 0; t < e.shadowCascadeArray.length; t++) {
          this.__removeObject(e.shadowCascadeArray[t]);
        }
      }
    } else if (!(e instanceof THREE.Camera)) {
      var i;
      this.__objectsRemoved.push(e),
        -1 !== (i = this.__objectsAdded.indexOf(e)) &&
        this.__objectsAdded.splice(i, 1);
    }
    for (var r = 0; r < e.children.length; r++) {
      this.__removeObject(e.children[r]);
    }
  },
  THREE.Scene.prototype.clone = function (e) {
    return void 0 === e && (e = new THREE.Scene()),
      THREE.Object3D.prototype.clone.call(this, e),
      null !== this.fog && (e.fog = this.fog.clone()),
      null !== this.overrideMaterial &&
      (e.overrideMaterial = this.overrideMaterial.clone()),
      e.autoUpdate = this.autoUpdate,
      e.matrixAutoUpdate = this.matrixAutoUpdate,
      e;
  },
  THREE.Fog = function (e, t, i) {
    this.name = "",
      this.color = new THREE.Color(e),
      this.near = void 0 !== t ? t : 1,
      this.far = void 0 !== i ? i : 1e3;
  },
  THREE.Fog.prototype.clone = function () {
    return new THREE.Fog(this.color.getHex(), this.near, this.far);
  },
  THREE.FogExp2 = function (e, t) {
    this.name = "",
      this.color = new THREE.Color(e),
      this.density = void 0 !== t ? t : 25e-5;
  },
  THREE.FogExp2.prototype.clone = function () {
    return new THREE.FogExp2(this.color.getHex(), this.density);
  },
  THREE.CanvasRenderer = function (e) {
    console.log("THREE.CanvasRenderer", THREE.REVISION);
    var m = THREE.Math.smoothstep;
    e = e || {};
    var a,
      s,
      l,
      E,
      c,
      h,
      u,
      g,
      v,
      y,
      T,
      R,
      x,
      H,
      b,
      w,
      _,
      M,
      S,
      C,
      A,
      L,
      P,
      n,
      o,
      p,
      f,
      d,
      D,
      F = this,
      N = new THREE.Projector(),
      r = void 0 !== e.canvas ? e.canvas : document.createElement("canvas"),
      V = r.width,
      z = r.height,
      U = Math.floor(V / 2),
      B = Math.floor(z / 2),
      O = r.getContext("2d"),
      i = new THREE.Color(0),
      k = 0,
      I = 1,
      j = 0,
      G = null,
      W = null,
      X = null,
      q = null,
      Y = null,
      K = null,
      Q = 0,
      Z =
        (new THREE.RenderableVertex(),
          new THREE.RenderableVertex(),
          new THREE.Color()),
      $ = new THREE.Color(),
      J = new THREE.Color(),
      ee = new THREE.Color(),
      te = new THREE.Color(),
      ie = new THREE.Color(),
      re = new THREE.Color(),
      ne = new THREE.Color(),
      oe = {},
      ae = {},
      se = new THREE.Box2(),
      le = new THREE.Box2(),
      ce = new THREE.Box2(),
      he = new THREE.Color(),
      ue = new THREE.Color(),
      pe = new THREE.Color(),
      fe = new THREE.Vector3(),
      t = 16;
    function de(e, t, i) {
      for (var r = 0, n = l.length; r < n; r++) {
        var o = l[r];
        if (ne.copy(o.color), o instanceof THREE.DirectionalLight) {
          var a = fe.getPositionFromMatrix(o.matrixWorld).normalize();
          if ((s = t.dot(a)) <= 0) continue;
          s *= o.intensity, i.add(ne.multiplyScalar(s));
        } else if (o instanceof THREE.PointLight) {
          var s;
          a = fe.getPositionFromMatrix(o.matrixWorld);
          if ((s = t.dot(fe.subVectors(a, e).normalize())) <= 0) continue;
          if (
            0 == (s *= 0 == o.distance
              ? 1
              : 1 - Math.min(e.distanceTo(a) / o.distance, 1))
          ) {
            continue;
          }
          s *= o.intensity, i.add(ne.multiplyScalar(s));
        }
      }
    }
    function me(e, t, i) {
      var r, n, o, a, s, l, c;
      if (
        be(i.opacity),
          we(i.blending),
          i instanceof THREE.SpriteMaterial ||
          i instanceof THREE.ParticleSystemMaterial
      ) {
        if (void 0 !== i.map.image) {
          if (
            l = (s = i.map.image).width >> 1,
              c = s.height >> 1,
              r = (o = t.scale.x * U) * l,
              n = (a = t.scale.y * B) * c,
              ce.min.set(e.x - r, e.y - n),
              ce.max.set(e.x + r, e.y + n),
              !1 === se.isIntersectionBox(ce)
          ) {
            return void ce.makeEmpty();
          }
          O.save(),
            O.translate(e.x, e.y),
            O.rotate(-t.rotation),
            O.scale(o, -a),
            O.translate(-l, -c),
            O.drawImage(s, 0, 0),
            O.restore();
        } else {
          if (
            o = t.object.scale.x,
              a = t.object.scale.y,
              o *= t.scale.x * U,
              a *= t.scale.y * B,
              ce.min.set(e.x - o, e.y - a),
              ce.max.set(e.x + o, e.y + a),
              !1 === se.isIntersectionBox(ce)
          ) {
            return void ce.makeEmpty();
          }
          Ae(i.color.getStyle()),
            O.save(),
            O.translate(e.x, e.y),
            O.rotate(-t.rotation),
            O.scale(o, a),
            O.fillRect(-1, -1, 2, 2),
            O.restore();
        }
      } else if (i instanceof THREE.SpriteCanvasMaterial) {
        if (
          r = t.scale.x * U,
            n = t.scale.y * B,
            ce.min.set(e.x - r, e.y - n),
            ce.max.set(e.x + r, e.y + n),
            !1 === se.isIntersectionBox(ce)
        ) {
          return void ce.makeEmpty();
        }
        Ce(i.color.getStyle()),
          Ae(i.color.getStyle()),
          O.save(),
          O.translate(e.x, e.y),
          O.rotate(-t.rotation),
          O.scale(r, n),
          i.program(O),
          O.restore();
      }
    }
    function Ee(e, t, i, r) {
      if (
        be(r.opacity),
          we(r.blending),
          O.beginPath(),
          O.moveTo(e.positionScreen.x, e.positionScreen.y),
          O.lineTo(t.positionScreen.x, t.positionScreen.y),
          r instanceof THREE.LineBasicMaterial
      ) {
        if (
          _e(r.linewidth),
            Me(r.linecap),
            Se(r.linejoin),
            r.vertexColors !== THREE.VertexColors
        ) {
          Ce(r.color.getStyle());
        } else {
          var n = i.vertexColors[0].getStyle(),
            o = i.vertexColors[1].getStyle();
          if (n === o) Ce(n);
          else {
            try {
              var a = O.createLinearGradient(
                e.positionScreen.x,
                e.positionScreen.y,
                t.positionScreen.x,
                t.positionScreen.y,
              );
              a.addColorStop(0, n), a.addColorStop(1, o);
            } catch (e) {
              a = n;
            }
            Ce(a);
          }
        }
        O.stroke(), ce.expandByScalar(2 * r.linewidth);
      } else {
        r instanceof THREE.LineDashedMaterial &&
          (_e(r.linewidth),
            Me(r.linecap),
            Se(r.linejoin),
            Ce(r.color.getStyle()),
            Le(r.dashSize, r.gapSize),
            O.stroke(),
            ce.expandByScalar(2 * r.linewidth),
            Le(null, null));
      }
    }
    function ge(e, t, i, r, n, o, a, s) {
      var l, c, h, u, p, f;
      if (
        F.info.render.vertices += 3,
          F.info.render.faces++,
          be(s.opacity),
          we(s.blending),
          g = e.positionScreen.x,
          v = e.positionScreen.y,
          y = t.positionScreen.x,
          T = t.positionScreen.y,
          R = i.positionScreen.x,
          x = i.positionScreen.y,
          l = g,
          c = v,
          h = y,
          u = T,
          p = R,
          f = x,
          O.beginPath(),
          O.moveTo(l, c),
          O.lineTo(h, u),
          O.lineTo(p, f),
          O.closePath(),
          (s instanceof THREE.MeshLambertMaterial ||
            s instanceof THREE.MeshPhongMaterial) && null === s.map
      ) {
        ie.copy(s.color),
          re.copy(s.emissive),
          s.vertexColors === THREE.FaceColors && ie.multiply(a.color),
          !1 === s.wireframe && s.shading == THREE.SmoothShading &&
            3 == a.vertexNormalsLength
            ? ($.copy(he),
              J.copy(he),
              ee.copy(he),
              de(a.v1.positionWorld, a.vertexNormalsModel[0], $),
              de(a.v2.positionWorld, a.vertexNormalsModel[1], J),
              de(a.v3.positionWorld, a.vertexNormalsModel[2], ee),
              $.multiply(ie).add(re),
              J.multiply(ie).add(re),
              ee.multiply(ie).add(re),
              te.addColors(J, ee).multiplyScalar(.5),
              w = xe($, J, ee, te),
              Re(g, v, y, T, R, x, 0, 0, 1, 0, 0, 1, w))
            : (Z.copy(he),
              de(a.centroidModel, a.normalModel, Z),
              Z.multiply(ie).add(re),
              !0 === s.wireframe
                ? ve(
                  Z,
                  s.wireframeLinewidth,
                  s.wireframeLinecap,
                  s.wireframeLinejoin,
                )
                : ye(Z));
      } else if (
        s instanceof THREE.MeshBasicMaterial ||
        s instanceof THREE.MeshLambertMaterial ||
        s instanceof THREE.MeshPhongMaterial
      ) {
        null !== s.map
          ? s.map.mapping instanceof THREE.UVMapping &&
            (_ = a.uvs[0],
              Te(
                g,
                v,
                y,
                T,
                R,
                x,
                _[r].x,
                _[r].y,
                _[n].x,
                _[n].y,
                _[o].x,
                _[o].y,
                s.map,
              ))
          : null !== s.envMap
          ? s.envMap.mapping instanceof THREE.SphericalReflectionMapping &&
            (fe.copy(a.vertexNormalsModelView[r]),
              M = .5 * fe.x + .5,
              S = .5 * fe.y + .5,
              fe.copy(a.vertexNormalsModelView[n]),
              C = .5 * fe.x + .5,
              A = .5 * fe.y + .5,
              fe.copy(a.vertexNormalsModelView[o]),
              L = .5 * fe.x + .5,
              P = .5 * fe.y + .5,
              Te(g, v, y, T, R, x, M, S, C, A, L, P, s.envMap))
          : (Z.copy(s.color),
            s.vertexColors === THREE.FaceColors && Z.multiply(a.color),
            !0 === s.wireframe
              ? ve(
                Z,
                s.wireframeLinewidth,
                s.wireframeLinecap,
                s.wireframeLinejoin,
              )
              : ye(Z));
      } else if (s instanceof THREE.MeshDepthMaterial) {
        H = E.near,
          b = E.far,
          $.r = $.g = $.b = 1 -
            m(e.positionScreen.z * e.positionScreen.w, H, b),
          J.r = J.g = J.b = 1 -
            m(t.positionScreen.z * t.positionScreen.w, H, b),
          ee.r = ee.g = ee.b = 1 -
            m(i.positionScreen.z * i.positionScreen.w, H, b),
          te.addColors(J, ee).multiplyScalar(.5),
          w = xe($, J, ee, te),
          Re(g, v, y, T, R, x, 0, 0, 1, 0, 0, 1, w);
      } else if (s instanceof THREE.MeshNormalMaterial) {
        var d;
        s.shading == THREE.FlatShading
          ? (d = a.normalModelView,
            Z.setRGB(d.x, d.y, d.z).multiplyScalar(.5).addScalar(.5),
            !0 === s.wireframe
              ? ve(
                Z,
                s.wireframeLinewidth,
                s.wireframeLinecap,
                s.wireframeLinejoin,
              )
              : ye(Z))
          : s.shading == THREE.SmoothShading &&
            (d = a.vertexNormalsModelView[r],
              $.setRGB(d.x, d.y, d.z).multiplyScalar(.5).addScalar(.5),
              d = a.vertexNormalsModelView[n],
              J.setRGB(d.x, d.y, d.z).multiplyScalar(.5).addScalar(.5),
              d = a.vertexNormalsModelView[o],
              ee.setRGB(d.x, d.y, d.z).multiplyScalar(.5).addScalar(.5),
              te.addColors(J, ee).multiplyScalar(.5),
              w = xe($, J, ee, te),
              Re(g, v, y, T, R, x, 0, 0, 1, 0, 0, 1, w));
      }
    }
    function ve(e, t, i, r) {
      _e(t),
        Me(i),
        Se(r),
        Ce(e.getStyle()),
        O.stroke(),
        ce.expandByScalar(2 * t);
    }
    function ye(e) {
      Ae(e.getStyle()), O.fill();
    }
    function Te(e, t, i, r, n, o, a, s, l, c, h, u, p) {
      if (
        !(p instanceof THREE.DataTexture || void 0 === p.image ||
          0 == p.image.width)
      ) {
        if (!0 === p.needsUpdate) {
          var f = p.wrapS == THREE.RepeatWrapping,
            d = p.wrapT == THREE.RepeatWrapping;
          oe[p.id] = O.createPattern(
            p.image,
            !0 === f && !0 === d ? "repeat" : !0 === f && !1 === d
              ? "repeat-x"
              : !1 === f && !0 === d
              ? "repeat-y"
              : "no-repeat",
          ), p.needsUpdate = !1;
        }
        void 0 === oe[p.id] ? Ae("rgba(0,0,0,1)") : Ae(oe[p.id]);
        var m,
          E,
          g,
          v,
          y,
          T,
          R,
          x,
          H = p.offset.x / p.repeat.x,
          b = p.offset.y / p.repeat.y,
          w = p.image.width * p.repeat.x,
          _ = p.image.height * p.repeat.y;
        if (
          l = (l + H) * w,
            c = (1 - c + b) * _,
            h = (h + H) * w,
            u = (1 - u + b) * _,
            i -= e,
            r -= t,
            n -= e,
            o -= t,
            0 ===
              (R = (l -= a = (a + H) * w) * (u -= s = (1 - s + b) * _) -
                (h -= a) * (c -= s))
        ) {
          if (void 0 === ae[p.id]) {
            var M = document.createElement("canvas");
            M.width = p.image.width, M.height = p.image.height;
            var S = M.getContext("2d");
            S.drawImage(p.image, 0, 0),
              ae[p.id] =
                S.getImageData(0, 0, p.image.width, p.image.height).data;
          }
          var C = ae[p.id],
            A = 4 * (Math.floor(a) + Math.floor(s) * p.image.width);
          return Z.setRGB(C[A] / 255, C[A + 1] / 255, C[A + 2] / 255),
            void ye(Z);
        }
        y = e - (m = (u * i - c * n) * (x = 1 / R)) * a -
          (g = (l * n - h * i) * x) * s,
          T = t - (E = (u * r - c * o) * x) * a - (v = (l * o - h * r) * x) * s,
          O.save(),
          O.transform(m, E, g, v, y, T),
          O.fill(),
          O.restore();
      }
    }
    function Re(e, t, i, r, n, o, a, s, l, c, h, u, p) {
      var f, d, m, E, g, v, y, T = p.width - 1, R = p.height - 1;
      l *= T,
        c *= R,
        h *= T,
        u *= R,
        g = e -
          (f = ((u -= s *= R) * (i -= e) - (c -= s) * (n -= e)) *
              (y = 1 / ((l -= a *= T) * u - (h -= a) * c))) * a -
          (m = (l * n - h * i) * y) * s,
        v = t - (d = (u * (r -= t) - c * (o -= t)) * y) * a -
          (E = (l * o - h * r) * y) * s,
        O.save(),
        O.transform(f, d, m, E, g, v),
        O.clip(),
        O.drawImage(p, 0, 0),
        O.restore();
    }
    function xe(e, t, i, r) {
      return f[0] = 255 * e.r | 0,
        f[1] = 255 * e.g | 0,
        f[2] = 255 * e.b | 0,
        f[4] = 255 * t.r | 0,
        f[5] = 255 * t.g | 0,
        f[6] = 255 * t.b | 0,
        f[8] = 255 * i.r | 0,
        f[9] = 255 * i.g | 0,
        f[10] = 255 * i.b | 0,
        f[12] = 255 * r.r | 0,
        f[13] = 255 * r.g | 0,
        f[14] = 255 * r.b | 0,
        o.putImageData(p, 0, 0),
        D.drawImage(n, 0, 0),
        d;
    }
    function He(e, t, i) {
      var r, n = t.x - e.x, o = t.y - e.y, a = n * n + o * o;
      0 !== a &&
        (n *= r = i / Math.sqrt(a),
          o *= r,
          t.x += n,
          t.y += o,
          e.x -= n,
          e.y -= o);
    }
    function be(e) {
      I !== e && (O.globalAlpha = e, I = e);
    }
    function we(e) {
      j !== e &&
        (e === THREE.NormalBlending
          ? O.globalCompositeOperation = "source-over"
          : e === THREE.AdditiveBlending
          ? O.globalCompositeOperation = "lighter"
          : e === THREE.SubtractiveBlending &&
            (O.globalCompositeOperation = "darker"),
          j = e);
    }
    function _e(e) {
      X !== e && (O.lineWidth = e, X = e);
    }
    function Me(e) {
      q !== e && (O.lineCap = e, q = e);
    }
    function Se(e) {
      Y !== e && (O.lineJoin = e, Y = e);
    }
    function Ce(e) {
      G !== e && (O.strokeStyle = e, G = e);
    }
    function Ae(e) {
      W !== e && (O.fillStyle = e, W = e);
    }
    function Le(e, t) {
      K === e && Q === t || (O.setLineDash([e, t]), K = e, Q = t);
    }
    (n = document.createElement("canvas")).width = n.height = 2,
      (o = n.getContext("2d")).fillStyle = "rgba(0,0,0,1)",
      o.fillRect(0, 0, 2, 2),
      p = o.getImageData(0, 0, 2, 2),
      f = p.data,
      (d = document.createElement("canvas")).width = d.height = t,
      (D = d.getContext("2d")).translate(-t / 2, -t / 2),
      D.scale(t, t),
      t--,
      void 0 === O.setLineDash && (void 0 !== O.mozDash
        ? O.setLineDash = function (e) {
          O.mozDash = null !== e[0] ? e : null;
        }
        : O.setLineDash = function () {}),
      this.domElement = r,
      this.devicePixelRatio = void 0 !== e.devicePixelRatio ? e.devicePixelRatio
      : void 0 !== self.devicePixelRatio ? self.devicePixelRatio : 1,
      this.autoClear = !0,
      this.sortObjects = !0,
      this.sortElements = !0,
      this.info = { render: { vertices: 0, faces: 0 } },
      this.supportsVertexTextures = function () {},
      this.setFaceCulling = function () {},
      this.setSize = function (e, t, i) {
        V = e * this.devicePixelRatio,
          z = t * this.devicePixelRatio,
          U = Math.floor(V / 2),
          B = Math.floor(z / 2),
          r.width = V,
          r.height = z,
          1 !== this.devicePixelRatio && !1 !== i &&
          (r.style.width = e + "px", r.style.height = t + "px"),
          se.set(new THREE.Vector2(-U, -B), new THREE.Vector2(U, B)),
          le.set(new THREE.Vector2(-U, -B), new THREE.Vector2(U, B)),
          I = 1,
          j = 0,
          Y = q = X = W = G = null;
      },
      this.setClearColor = function (e, t) {
        i.set(e),
          k = void 0 !== t ? t : 1,
          le.set(new THREE.Vector2(-U, -B), new THREE.Vector2(U, B));
      },
      this.setClearColorHex = function (e, t) {
        console.warn(
          "DEPRECATED: .setClearColorHex() is being removed. Use .setClearColor() instead.",
        ), this.setClearColor(e, t);
      },
      this.getMaxAnisotropy = function () {
        return 0;
      },
      this.clear = function () {
        O.setTransform(1, 0, 0, -1, U, B),
          !1 === le.empty() &&
          (le.intersect(se),
            le.expandByScalar(2),
            k < 1 &&
            O.clearRect(
              0 | le.min.x,
              0 | le.min.y,
              le.max.x - le.min.x | 0,
              le.max.y - le.min.y | 0,
            ),
            0 < k &&
            (we(THREE.NormalBlending),
              be(1),
              Ae(
                "rgba(" + Math.floor(255 * i.r) + "," + Math.floor(255 * i.g) +
                  "," + Math.floor(255 * i.b) + "," + k + ")",
              ),
              O.fillRect(
                0 | le.min.x,
                0 | le.min.y,
                le.max.x - le.min.x | 0,
                le.max.y - le.min.y | 0,
              )),
            le.makeEmpty());
      },
      this.render = function (e, t) {
        if (t instanceof THREE.Camera != !1) {
          !0 === this.autoClear && this.clear(),
            O.setTransform(1, 0, 0, -1, U, B),
            F.info.render.vertices = 0,
            F.info.render.faces = 0,
            a = N.projectScene(e, t, this.sortObjects, this.sortElements),
            s = a.elements,
            l = a.lights,
            E = t,
            function () {
              he.setRGB(0, 0, 0), ue.setRGB(0, 0, 0), pe.setRGB(0, 0, 0);
              for (var e = 0, t = l.length; e < t; e++) {
                var i = l[e], r = i.color;
                i instanceof THREE.AmbientLight ? he.add(r)
                : i instanceof THREE.DirectionalLight ? ue.add(r)
                : i instanceof THREE.PointLight && pe.add(r);
              }
            }();
          for (var i = 0, r = s.length; i < r; i++) {
            var n = s[i], o = n.material;
            if (void 0 !== o && !1 !== o.visible) {
              if (ce.makeEmpty(), n instanceof THREE.RenderableSprite) {
                (c = n).x *= U, c.y *= B, me(c, n, o);
              } else if (n instanceof THREE.RenderableLine) {
                c = n.v1,
                  h = n.v2,
                  c.positionScreen.x *= U,
                  c.positionScreen.y *= B,
                  h.positionScreen.x *= U,
                  h.positionScreen.y *= B,
                  ce.setFromPoints([c.positionScreen, h.positionScreen]),
                  !0 === se.isIntersectionBox(ce) && Ee(c, h, n, o);
              } else if (n instanceof THREE.RenderableFace3) {
                if (
                  c = n.v1,
                    h = n.v2,
                    u = n.v3,
                    c.positionScreen.z < -1 || 1 < c.positionScreen.z
                ) {
                  continue;
                }
                if (h.positionScreen.z < -1 || 1 < h.positionScreen.z) continue;
                if (u.positionScreen.z < -1 || 1 < u.positionScreen.z) continue;
                c.positionScreen.x *= U,
                  c.positionScreen.y *= B,
                  h.positionScreen.x *= U,
                  h.positionScreen.y *= B,
                  u.positionScreen.x *= U,
                  u.positionScreen.y *= B,
                  0 < o.overdraw &&
                  (He(c.positionScreen, h.positionScreen, o.overdraw),
                    He(h.positionScreen, u.positionScreen, o.overdraw),
                    He(u.positionScreen, c.positionScreen, o.overdraw)),
                  ce.setFromPoints([
                    c.positionScreen,
                    h.positionScreen,
                    u.positionScreen,
                  ]),
                  !0 === se.isIntersectionBox(ce) && ge(c, h, u, 0, 1, 2, n, o);
              }
              le.union(ce);
            }
          }
          O.setTransform(1, 0, 0, 1, 0, 0);
        } else {
          console.error(
            "THREE.CanvasRenderer.render: camera is not an instance of THREE.Camera.",
          );
        }
      };
  },
  THREE.ShaderChunk = {
    fog_pars_fragment: [
      "#ifdef USE_FOG",
      "uniform vec3 fogColor;",
      "#ifdef FOG_EXP2",
      "uniform float fogDensity;",
      "#else",
      "uniform float fogNear;",
      "uniform float fogFar;",
      "#endif",
      "#endif",
    ].join("\n"),
    fog_fragment: [
      "#ifdef USE_FOG",
      "float depth = gl_FragCoord.z / gl_FragCoord.w;",
      "#ifdef FOG_EXP2",
      "const float LOG2 = 1.442695;",
      "float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );",
      "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );",
      "#else",
      "float fogFactor = smoothstep( fogNear, fogFar, depth );",
      "#endif",
      "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );",
      "#endif",
    ].join("\n"),
    envmap_pars_fragment: [
      "#ifdef USE_ENVMAP",
      "uniform float reflectivity;",
      "uniform samplerCube envMap;",
      "uniform float flipEnvMap;",
      "uniform int combine;",
      "#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )",
      "uniform bool useRefract;",
      "uniform float refractionRatio;",
      "#else",
      "varying vec3 vReflect;",
      "#endif",
      "#endif",
    ].join("\n"),
    envmap_fragment: [
      "#ifdef USE_ENVMAP",
      "vec3 reflectVec;",
      "#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP )",
      "vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );",
      "if ( useRefract ) {",
      "reflectVec = refract( cameraToVertex, normal, refractionRatio );",
      "} else { ",
      "reflectVec = reflect( cameraToVertex, normal );",
      "}",
      "#else",
      "reflectVec = vReflect;",
      "#endif",
      "#ifdef DOUBLE_SIDED",
      "float flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );",
      "vec4 cubeColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );",
      "#else",
      "vec4 cubeColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );",
      "#endif",
      "#ifdef GAMMA_INPUT",
      "cubeColor.xyz *= cubeColor.xyz;",
      "#endif",
      "if ( combine == 1 ) {",
      "gl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularStrength * reflectivity );",
      "} else if ( combine == 2 ) {",
      "gl_FragColor.xyz += cubeColor.xyz * specularStrength * reflectivity;",
      "} else {",
      "gl_FragColor.xyz = mix( gl_FragColor.xyz, gl_FragColor.xyz * cubeColor.xyz, specularStrength * reflectivity );",
      "}",
      "#endif",
    ].join("\n"),
    envmap_pars_vertex: [
      "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )",
      "varying vec3 vReflect;",
      "uniform float refractionRatio;",
      "uniform bool useRefract;",
      "#endif",
    ].join("\n"),
    worldpos_vertex: [
      "#if defined( USE_ENVMAP ) || defined( PHONG ) || defined( LAMBERT ) || defined ( USE_SHADOWMAP )",
      "#ifdef USE_SKINNING",
      "vec4 worldPosition = modelMatrix * skinned;",
      "#endif",
      "#if defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )",
      "vec4 worldPosition = modelMatrix * vec4( morphed, 1.0 );",
      "#endif",
      "#if ! defined( USE_MORPHTARGETS ) && ! defined( USE_SKINNING )",
      "vec4 worldPosition = modelMatrix * vec4( position, 1.0 );",
      "#endif",
      "#endif",
    ].join("\n"),
    envmap_vertex: [
      "#if defined( USE_ENVMAP ) && ! defined( USE_BUMPMAP ) && ! defined( USE_NORMALMAP )",
      "vec3 worldNormal = mat3( modelMatrix[ 0 ].xyz, modelMatrix[ 1 ].xyz, modelMatrix[ 2 ].xyz ) * objectNormal;",
      "worldNormal = normalize( worldNormal );",
      "vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );",
      "if ( useRefract ) {",
      "vReflect = refract( cameraToVertex, worldNormal, refractionRatio );",
      "} else {",
      "vReflect = reflect( cameraToVertex, worldNormal );",
      "}",
      "#endif",
    ].join("\n"),
    map_particle_pars_fragment: [
      "#ifdef USE_MAP",
      "uniform sampler2D map;",
      "#endif",
    ].join("\n"),
    map_particle_fragment: [
      "#ifdef USE_MAP",
      "gl_FragColor = gl_FragColor * texture2D( map, vec2( gl_PointCoord.x, 1.0 - gl_PointCoord.y ) );",
      "#endif",
    ].join("\n"),
    map_pars_vertex: [
      "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )",
      "varying vec2 vUv;",
      "uniform vec4 offsetRepeat;",
      "#endif",
    ].join("\n"),
    map_pars_fragment: [
      "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )",
      "varying vec2 vUv;",
      "#endif",
      "#ifdef USE_MAP",
      "uniform sampler2D map;",
      "#endif",
    ].join("\n"),
    map_vertex: [
      "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP )",
      "vUv = uv * offsetRepeat.zw + offsetRepeat.xy;",
      "#endif",
    ].join("\n"),
    map_fragment: [
      "#ifdef USE_MAP",
      "vec4 texelColor = texture2D( map, vUv );",
      "#ifdef GAMMA_INPUT",
      "texelColor.xyz *= texelColor.xyz;",
      "#endif",
      "gl_FragColor = gl_FragColor * texelColor;",
      "#endif",
    ].join("\n"),
    lightmap_pars_fragment: [
      "#ifdef USE_LIGHTMAP",
      "varying vec2 vUv2;",
      "uniform sampler2D lightMap;",
      "#endif",
    ].join("\n"),
    lightmap_pars_vertex: [
      "#ifdef USE_LIGHTMAP",
      "varying vec2 vUv2;",
      "#endif",
    ].join("\n"),
    lightmap_fragment: [
      "#ifdef USE_LIGHTMAP",
      "gl_FragColor = gl_FragColor * texture2D( lightMap, vUv2 );",
      "#endif",
    ].join("\n"),
    lightmap_vertex: ["#ifdef USE_LIGHTMAP", "vUv2 = uv2;", "#endif"].join(
      "\n",
    ),
    bumpmap_pars_fragment: [
      "#ifdef USE_BUMPMAP",
      "uniform sampler2D bumpMap;",
      "uniform float bumpScale;",
      "vec2 dHdxy_fwd() {",
      "vec2 dSTdx = dFdx( vUv );",
      "vec2 dSTdy = dFdy( vUv );",
      "float Hll = bumpScale * texture2D( bumpMap, vUv ).x;",
      "float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;",
      "float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;",
      "return vec2( dBx, dBy );",
      "}",
      "vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {",
      "vec3 vSigmaX = dFdx( surf_pos );",
      "vec3 vSigmaY = dFdy( surf_pos );",
      "vec3 vN = surf_norm;",
      "vec3 R1 = cross( vSigmaY, vN );",
      "vec3 R2 = cross( vN, vSigmaX );",
      "float fDet = dot( vSigmaX, R1 );",
      "vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );",
      "return normalize( abs( fDet ) * surf_norm - vGrad );",
      "}",
      "#endif",
    ].join("\n"),
    normalmap_pars_fragment: [
      "#ifdef USE_NORMALMAP",
      "uniform sampler2D normalMap;",
      "uniform vec2 normalScale;",
      "vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {",
      "vec3 q0 = dFdx( eye_pos.xyz );",
      "vec3 q1 = dFdy( eye_pos.xyz );",
      "vec2 st0 = dFdx( vUv.st );",
      "vec2 st1 = dFdy( vUv.st );",
      "vec3 S = normalize(  q0 * st1.t - q1 * st0.t );",
      "vec3 T = normalize( -q0 * st1.s + q1 * st0.s );",
      "vec3 N = normalize( surf_norm );",
      "vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;",
      "mapN.xy = normalScale * mapN.xy;",
      "mat3 tsn = mat3( S, T, N );",
      "return normalize( tsn * mapN );",
      "}",
      "#endif",
    ].join("\n"),
    specularmap_pars_fragment: [
      "#ifdef USE_SPECULARMAP",
      "uniform sampler2D specularMap;",
      "#endif",
    ].join("\n"),
    specularmap_fragment: [
      "float specularStrength;",
      "#ifdef USE_SPECULARMAP",
      "vec4 texelSpecular = texture2D( specularMap, vUv );",
      "specularStrength = texelSpecular.r;",
      "#else",
      "specularStrength = 1.0;",
      "#endif",
    ].join("\n"),
    lights_lambert_pars_vertex: [
      "uniform vec3 ambient;",
      "uniform vec3 diffuse;",
      "uniform vec3 emissive;",
      "uniform vec3 ambientLightColor;",
      "#if MAX_DIR_LIGHTS > 0",
      "uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];",
      "uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];",
      "#endif",
      "#if MAX_HEMI_LIGHTS > 0",
      "uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];",
      "uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];",
      "uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];",
      "#endif",
      "#if MAX_POINT_LIGHTS > 0",
      "uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];",
      "uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];",
      "uniform float pointLightDistance[ MAX_POINT_LIGHTS ];",
      "#endif",
      "#if MAX_SPOT_LIGHTS > 0",
      "uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];",
      "uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];",
      "uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];",
      "uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];",
      "uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];",
      "uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];",
      "#endif",
      "#ifdef WRAP_AROUND",
      "uniform vec3 wrapRGB;",
      "#endif",
    ].join("\n"),
    lights_lambert_vertex: [
      "vLightFront = vec3( 0.0 );",
      "#ifdef DOUBLE_SIDED",
      "vLightBack = vec3( 0.0 );",
      "#endif",
      "transformedNormal = normalize( transformedNormal );",
      "#if MAX_DIR_LIGHTS > 0",
      "for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {",
      "vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );",
      "vec3 dirVector = normalize( lDirection.xyz );",
      "float dotProduct = dot( transformedNormal, dirVector );",
      "vec3 directionalLightWeighting = vec3( max( dotProduct, 0.0 ) );",
      "#ifdef DOUBLE_SIDED",
      "vec3 directionalLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );",
      "#ifdef WRAP_AROUND",
      "vec3 directionalLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );",
      "#endif",
      "#endif",
      "#ifdef WRAP_AROUND",
      "vec3 directionalLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );",
      "directionalLightWeighting = mix( directionalLightWeighting, directionalLightWeightingHalf, wrapRGB );",
      "#ifdef DOUBLE_SIDED",
      "directionalLightWeightingBack = mix( directionalLightWeightingBack, directionalLightWeightingHalfBack, wrapRGB );",
      "#endif",
      "#endif",
      "vLightFront += directionalLightColor[ i ] * directionalLightWeighting;",
      "#ifdef DOUBLE_SIDED",
      "vLightBack += directionalLightColor[ i ] * directionalLightWeightingBack;",
      "#endif",
      "}",
      "#endif",
      "#if MAX_POINT_LIGHTS > 0",
      "for( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {",
      "vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );",
      "vec3 lVector = lPosition.xyz - mvPosition.xyz;",
      "float lDistance = 1.0;",
      "if ( pointLightDistance[ i ] > 0.0 )",
      "lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );",
      "lVector = normalize( lVector );",
      "float dotProduct = dot( transformedNormal, lVector );",
      "vec3 pointLightWeighting = vec3( max( dotProduct, 0.0 ) );",
      "#ifdef DOUBLE_SIDED",
      "vec3 pointLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );",
      "#ifdef WRAP_AROUND",
      "vec3 pointLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );",
      "#endif",
      "#endif",
      "#ifdef WRAP_AROUND",
      "vec3 pointLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );",
      "pointLightWeighting = mix( pointLightWeighting, pointLightWeightingHalf, wrapRGB );",
      "#ifdef DOUBLE_SIDED",
      "pointLightWeightingBack = mix( pointLightWeightingBack, pointLightWeightingHalfBack, wrapRGB );",
      "#endif",
      "#endif",
      "vLightFront += pointLightColor[ i ] * pointLightWeighting * lDistance;",
      "#ifdef DOUBLE_SIDED",
      "vLightBack += pointLightColor[ i ] * pointLightWeightingBack * lDistance;",
      "#endif",
      "}",
      "#endif",
      "#if MAX_SPOT_LIGHTS > 0",
      "for( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {",
      "vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );",
      "vec3 lVector = lPosition.xyz - mvPosition.xyz;",
      "float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - worldPosition.xyz ) );",
      "if ( spotEffect > spotLightAngleCos[ i ] ) {",
      "spotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );",
      "float lDistance = 1.0;",
      "if ( spotLightDistance[ i ] > 0.0 )",
      "lDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );",
      "lVector = normalize( lVector );",
      "float dotProduct = dot( transformedNormal, lVector );",
      "vec3 spotLightWeighting = vec3( max( dotProduct, 0.0 ) );",
      "#ifdef DOUBLE_SIDED",
      "vec3 spotLightWeightingBack = vec3( max( -dotProduct, 0.0 ) );",
      "#ifdef WRAP_AROUND",
      "vec3 spotLightWeightingHalfBack = vec3( max( -0.5 * dotProduct + 0.5, 0.0 ) );",
      "#endif",
      "#endif",
      "#ifdef WRAP_AROUND",
      "vec3 spotLightWeightingHalf = vec3( max( 0.5 * dotProduct + 0.5, 0.0 ) );",
      "spotLightWeighting = mix( spotLightWeighting, spotLightWeightingHalf, wrapRGB );",
      "#ifdef DOUBLE_SIDED",
      "spotLightWeightingBack = mix( spotLightWeightingBack, spotLightWeightingHalfBack, wrapRGB );",
      "#endif",
      "#endif",
      "vLightFront += spotLightColor[ i ] * spotLightWeighting * lDistance * spotEffect;",
      "#ifdef DOUBLE_SIDED",
      "vLightBack += spotLightColor[ i ] * spotLightWeightingBack * lDistance * spotEffect;",
      "#endif",
      "}",
      "}",
      "#endif",
      "#if MAX_HEMI_LIGHTS > 0",
      "for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {",
      "vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );",
      "vec3 lVector = normalize( lDirection.xyz );",
      "float dotProduct = dot( transformedNormal, lVector );",
      "float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;",
      "float hemiDiffuseWeightBack = -0.5 * dotProduct + 0.5;",
      "vLightFront += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );",
      "#ifdef DOUBLE_SIDED",
      "vLightBack += mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeightBack );",
      "#endif",
      "}",
      "#endif",
      "vLightFront = vLightFront * diffuse + ambient * ambientLightColor + emissive;",
      "#ifdef DOUBLE_SIDED",
      "vLightBack = vLightBack * diffuse + ambient * ambientLightColor + emissive;",
      "#endif",
    ].join("\n"),
    lights_phong_pars_vertex: [
      "#ifndef PHONG_PER_PIXEL",
      "#if MAX_POINT_LIGHTS > 0",
      "uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];",
      "uniform float pointLightDistance[ MAX_POINT_LIGHTS ];",
      "varying vec4 vPointLight[ MAX_POINT_LIGHTS ];",
      "#endif",
      "#if MAX_SPOT_LIGHTS > 0",
      "uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];",
      "uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];",
      "varying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];",
      "#endif",
      "#endif",
      "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )",
      "varying vec3 vWorldPosition;",
      "#endif",
    ].join("\n"),
    lights_phong_vertex: [
      "#ifndef PHONG_PER_PIXEL",
      "#if MAX_POINT_LIGHTS > 0",
      "for( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {",
      "vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );",
      "vec3 lVector = lPosition.xyz - mvPosition.xyz;",
      "float lDistance = 1.0;",
      "if ( pointLightDistance[ i ] > 0.0 )",
      "lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );",
      "vPointLight[ i ] = vec4( lVector, lDistance );",
      "}",
      "#endif",
      "#if MAX_SPOT_LIGHTS > 0",
      "for( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {",
      "vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );",
      "vec3 lVector = lPosition.xyz - mvPosition.xyz;",
      "float lDistance = 1.0;",
      "if ( spotLightDistance[ i ] > 0.0 )",
      "lDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );",
      "vSpotLight[ i ] = vec4( lVector, lDistance );",
      "}",
      "#endif",
      "#endif",
      "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )",
      "vWorldPosition = worldPosition.xyz;",
      "#endif",
    ].join("\n"),
    lights_phong_pars_fragment: [
      "uniform vec3 ambientLightColor;",
      "#if MAX_DIR_LIGHTS > 0",
      "uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];",
      "uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];",
      "#endif",
      "#if MAX_HEMI_LIGHTS > 0",
      "uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];",
      "uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];",
      "uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];",
      "#endif",
      "#if MAX_POINT_LIGHTS > 0",
      "uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];",
      "#ifdef PHONG_PER_PIXEL",
      "uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];",
      "uniform float pointLightDistance[ MAX_POINT_LIGHTS ];",
      "#else",
      "varying vec4 vPointLight[ MAX_POINT_LIGHTS ];",
      "#endif",
      "#endif",
      "#if MAX_SPOT_LIGHTS > 0",
      "uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];",
      "uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];",
      "uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];",
      "uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];",
      "uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];",
      "#ifdef PHONG_PER_PIXEL",
      "uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];",
      "#else",
      "varying vec4 vSpotLight[ MAX_SPOT_LIGHTS ];",
      "#endif",
      "#endif",
      "#if MAX_SPOT_LIGHTS > 0 || defined( USE_BUMPMAP )",
      "varying vec3 vWorldPosition;",
      "#endif",
      "#ifdef WRAP_AROUND",
      "uniform vec3 wrapRGB;",
      "#endif",
      "varying vec3 vViewPosition;",
      "varying vec3 vNormal;",
    ].join("\n"),
    lights_phong_fragment: [
      "vec3 normal = normalize( vNormal );",
      "vec3 viewPosition = normalize( vViewPosition );",
      "#ifdef DOUBLE_SIDED",
      "normal = normal * ( -1.0 + 2.0 * float( gl_FrontFacing ) );",
      "#endif",
      "#ifdef USE_NORMALMAP",
      "normal = perturbNormal2Arb( -vViewPosition, normal );",
      "#elif defined( USE_BUMPMAP )",
      "normal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );",
      "#endif",
      "#if MAX_POINT_LIGHTS > 0",
      "vec3 pointDiffuse  = vec3( 0.0 );",
      "vec3 pointSpecular = vec3( 0.0 );",
      "for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {",
      "#ifdef PHONG_PER_PIXEL",
      "vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );",
      "vec3 lVector = lPosition.xyz + vViewPosition.xyz;",
      "float lDistance = 1.0;",
      "if ( pointLightDistance[ i ] > 0.0 )",
      "lDistance = 1.0 - min( ( length( lVector ) / pointLightDistance[ i ] ), 1.0 );",
      "lVector = normalize( lVector );",
      "#else",
      "vec3 lVector = normalize( vPointLight[ i ].xyz );",
      "float lDistance = vPointLight[ i ].w;",
      "#endif",
      "float dotProduct = dot( normal, lVector );",
      "#ifdef WRAP_AROUND",
      "float pointDiffuseWeightFull = max( dotProduct, 0.0 );",
      "float pointDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );",
      "vec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );",
      "#else",
      "float pointDiffuseWeight = max( dotProduct, 0.0 );",
      "#endif",
      "pointDiffuse  += diffuse * pointLightColor[ i ] * pointDiffuseWeight * lDistance;",
      "vec3 pointHalfVector = normalize( lVector + viewPosition );",
      "float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );",
      "float pointSpecularWeight = specularStrength * max( pow( pointDotNormalHalf, shininess ), 0.0 );",
      "#ifdef PHYSICALLY_BASED_SHADING",
      "float specularNormalization = ( shininess + 2.0001 ) / 8.0;",
      "vec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, pointHalfVector ), 5.0 );",
      "pointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance * specularNormalization;",
      "#else",
      "pointSpecular += specular * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * lDistance;",
      "#endif",
      "}",
      "#endif",
      "#if MAX_SPOT_LIGHTS > 0",
      "vec3 spotDiffuse  = vec3( 0.0 );",
      "vec3 spotSpecular = vec3( 0.0 );",
      "for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {",
      "#ifdef PHONG_PER_PIXEL",
      "vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );",
      "vec3 lVector = lPosition.xyz + vViewPosition.xyz;",
      "float lDistance = 1.0;",
      "if ( spotLightDistance[ i ] > 0.0 )",
      "lDistance = 1.0 - min( ( length( lVector ) / spotLightDistance[ i ] ), 1.0 );",
      "lVector = normalize( lVector );",
      "#else",
      "vec3 lVector = normalize( vSpotLight[ i ].xyz );",
      "float lDistance = vSpotLight[ i ].w;",
      "#endif",
      "float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );",
      "if ( spotEffect > spotLightAngleCos[ i ] ) {",
      "spotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );",
      "float dotProduct = dot( normal, lVector );",
      "#ifdef WRAP_AROUND",
      "float spotDiffuseWeightFull = max( dotProduct, 0.0 );",
      "float spotDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );",
      "vec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );",
      "#else",
      "float spotDiffuseWeight = max( dotProduct, 0.0 );",
      "#endif",
      "spotDiffuse += diffuse * spotLightColor[ i ] * spotDiffuseWeight * lDistance * spotEffect;",
      "vec3 spotHalfVector = normalize( lVector + viewPosition );",
      "float spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );",
      "float spotSpecularWeight = specularStrength * max( pow( spotDotNormalHalf, shininess ), 0.0 );",
      "#ifdef PHYSICALLY_BASED_SHADING",
      "float specularNormalization = ( shininess + 2.0001 ) / 8.0;",
      "vec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, spotHalfVector ), 5.0 );",
      "spotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * specularNormalization * spotEffect;",
      "#else",
      "spotSpecular += specular * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * lDistance * spotEffect;",
      "#endif",
      "}",
      "}",
      "#endif",
      "#if MAX_DIR_LIGHTS > 0",
      "vec3 dirDiffuse  = vec3( 0.0 );",
      "vec3 dirSpecular = vec3( 0.0 );",
      "for( int i = 0; i < MAX_DIR_LIGHTS; i ++ ) {",
      "vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );",
      "vec3 dirVector = normalize( lDirection.xyz );",
      "float dotProduct = dot( normal, dirVector );",
      "#ifdef WRAP_AROUND",
      "float dirDiffuseWeightFull = max( dotProduct, 0.0 );",
      "float dirDiffuseWeightHalf = max( 0.5 * dotProduct + 0.5, 0.0 );",
      "vec3 dirDiffuseWeight = mix( vec3( dirDiffuseWeightFull ), vec3( dirDiffuseWeightHalf ), wrapRGB );",
      "#else",
      "float dirDiffuseWeight = max( dotProduct, 0.0 );",
      "#endif",
      "dirDiffuse  += diffuse * directionalLightColor[ i ] * dirDiffuseWeight;",
      "vec3 dirHalfVector = normalize( dirVector + viewPosition );",
      "float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );",
      "float dirSpecularWeight = specularStrength * max( pow( dirDotNormalHalf, shininess ), 0.0 );",
      "#ifdef PHYSICALLY_BASED_SHADING",
      "float specularNormalization = ( shininess + 2.0001 ) / 8.0;",
      "vec3 schlick = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );",
      "dirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;",
      "#else",
      "dirSpecular += specular * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight;",
      "#endif",
      "}",
      "#endif",
      "#if MAX_HEMI_LIGHTS > 0",
      "vec3 hemiDiffuse  = vec3( 0.0 );",
      "vec3 hemiSpecular = vec3( 0.0 );",
      "for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {",
      "vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );",
      "vec3 lVector = normalize( lDirection.xyz );",
      "float dotProduct = dot( normal, lVector );",
      "float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;",
      "vec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );",
      "hemiDiffuse += diffuse * hemiColor;",
      "vec3 hemiHalfVectorSky = normalize( lVector + viewPosition );",
      "float hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;",
      "float hemiSpecularWeightSky = specularStrength * max( pow( hemiDotNormalHalfSky, shininess ), 0.0 );",
      "vec3 lVectorGround = -lVector;",
      "vec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );",
      "float hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;",
      "float hemiSpecularWeightGround = specularStrength * max( pow( hemiDotNormalHalfGround, shininess ), 0.0 );",
      "#ifdef PHYSICALLY_BASED_SHADING",
      "float dotProductGround = dot( normal, lVectorGround );",
      "float specularNormalization = ( shininess + 2.0001 ) / 8.0;",
      "vec3 schlickSky = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );",
      "vec3 schlickGround = specular + vec3( 1.0 - specular ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );",
      "hemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );",
      "#else",
      "hemiSpecular += specular * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;",
      "#endif",
      "}",
      "#endif",
      "vec3 totalDiffuse = vec3( 0.0 );",
      "vec3 totalSpecular = vec3( 0.0 );",
      "#if MAX_DIR_LIGHTS > 0",
      "totalDiffuse += dirDiffuse;",
      "totalSpecular += dirSpecular;",
      "#endif",
      "#if MAX_HEMI_LIGHTS > 0",
      "totalDiffuse += hemiDiffuse;",
      "totalSpecular += hemiSpecular;",
      "#endif",
      "#if MAX_POINT_LIGHTS > 0",
      "totalDiffuse += pointDiffuse;",
      "totalSpecular += pointSpecular;",
      "#endif",
      "#if MAX_SPOT_LIGHTS > 0",
      "totalDiffuse += spotDiffuse;",
      "totalSpecular += spotSpecular;",
      "#endif",
      "#ifdef METAL",
      "gl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient + totalSpecular );",
      "#else",
      "gl_FragColor.xyz = gl_FragColor.xyz * ( emissive + totalDiffuse + ambientLightColor * ambient ) + totalSpecular;",
      "#endif",
    ].join("\n"),
    color_pars_fragment: ["#ifdef USE_COLOR", "varying vec3 vColor;", "#endif"]
      .join("\n"),
    color_fragment: [
      "#ifdef USE_COLOR",
      "gl_FragColor = gl_FragColor * vec4( vColor, 1.0 );",
      "#endif",
    ].join("\n"),
    color_pars_vertex: ["#ifdef USE_COLOR", "varying vec3 vColor;", "#endif"]
      .join("\n"),
    color_vertex: [
      "#ifdef USE_COLOR",
      "#ifdef GAMMA_INPUT",
      "vColor = color * color;",
      "#else",
      "vColor = color;",
      "#endif",
      "#endif",
    ].join("\n"),
    skinning_pars_vertex: [
      "#ifdef USE_SKINNING",
      "#ifdef BONE_TEXTURE",
      "uniform sampler2D boneTexture;",
      "uniform int boneTextureWidth;",
      "uniform int boneTextureHeight;",
      "mat4 getBoneMatrix( const in float i ) {",
      "float j = i * 4.0;",
      "float x = mod( j, float( boneTextureWidth ) );",
      "float y = floor( j / float( boneTextureWidth ) );",
      "float dx = 1.0 / float( boneTextureWidth );",
      "float dy = 1.0 / float( boneTextureHeight );",
      "y = dy * ( y + 0.5 );",
      "vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );",
      "vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );",
      "vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );",
      "vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );",
      "mat4 bone = mat4( v1, v2, v3, v4 );",
      "return bone;",
      "}",
      "#else",
      "uniform mat4 boneGlobalMatrices[ MAX_BONES ];",
      "mat4 getBoneMatrix( const in float i ) {",
      "mat4 bone = boneGlobalMatrices[ int(i) ];",
      "return bone;",
      "}",
      "#endif",
      "#endif",
    ].join("\n"),
    skinbase_vertex: [
      "#ifdef USE_SKINNING",
      "mat4 boneMatX = getBoneMatrix( skinIndex.x );",
      "mat4 boneMatY = getBoneMatrix( skinIndex.y );",
      "#endif",
    ].join("\n"),
    skinning_vertex: [
      "#ifdef USE_SKINNING",
      "#ifdef USE_MORPHTARGETS",
      "vec4 skinVertex = vec4( morphed, 1.0 );",
      "#else",
      "vec4 skinVertex = vec4( position, 1.0 );",
      "#endif",
      "vec4 skinned  = boneMatX * skinVertex * skinWeight.x;",
      "skinned \t  += boneMatY * skinVertex * skinWeight.y;",
      "#endif",
    ].join("\n"),
    morphtarget_pars_vertex: [
      "#ifdef USE_MORPHTARGETS",
      "#ifndef USE_MORPHNORMALS",
      "uniform float morphTargetInfluences[ 8 ];",
      "#else",
      "uniform float morphTargetInfluences[ 4 ];",
      "#endif",
      "#endif",
    ].join("\n"),
    morphtarget_vertex: [
      "#ifdef USE_MORPHTARGETS",
      "vec3 morphed = vec3( 0.0 );",
      "morphed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];",
      "morphed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];",
      "morphed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];",
      "morphed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];",
      "#ifndef USE_MORPHNORMALS",
      "morphed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];",
      "morphed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];",
      "morphed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];",
      "morphed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];",
      "#endif",
      "morphed += position;",
      "#endif",
    ].join("\n"),
    default_vertex: [
      "vec4 mvPosition;",
      "#ifdef USE_SKINNING",
      "mvPosition = modelViewMatrix * skinned;",
      "#endif",
      "#if !defined( USE_SKINNING ) && defined( USE_MORPHTARGETS )",
      "mvPosition = modelViewMatrix * vec4( morphed, 1.0 );",
      "#endif",
      "#if !defined( USE_SKINNING ) && ! defined( USE_MORPHTARGETS )",
      "mvPosition = modelViewMatrix * vec4( position, 1.0 );",
      "#endif",
      "gl_Position = projectionMatrix * mvPosition;",
    ].join("\n"),
    morphnormal_vertex: [
      "#ifdef USE_MORPHNORMALS",
      "vec3 morphedNormal = vec3( 0.0 );",
      "morphedNormal +=  ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];",
      "morphedNormal +=  ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];",
      "morphedNormal +=  ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];",
      "morphedNormal +=  ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];",
      "morphedNormal += normal;",
      "#endif",
    ].join("\n"),
    skinnormal_vertex: [
      "#ifdef USE_SKINNING",
      "mat4 skinMatrix = skinWeight.x * boneMatX;",
      "skinMatrix \t+= skinWeight.y * boneMatY;",
      "#ifdef USE_MORPHNORMALS",
      "vec4 skinnedNormal = skinMatrix * vec4( morphedNormal, 0.0 );",
      "#else",
      "vec4 skinnedNormal = skinMatrix * vec4( normal, 0.0 );",
      "#endif",
      "#endif",
    ].join("\n"),
    defaultnormal_vertex: [
      "vec3 objectNormal;",
      "#ifdef USE_SKINNING",
      "objectNormal = skinnedNormal.xyz;",
      "#endif",
      "#if !defined( USE_SKINNING ) && defined( USE_MORPHNORMALS )",
      "objectNormal = morphedNormal;",
      "#endif",
      "#if !defined( USE_SKINNING ) && ! defined( USE_MORPHNORMALS )",
      "objectNormal = normal;",
      "#endif",
      "#ifdef FLIP_SIDED",
      "objectNormal = -objectNormal;",
      "#endif",
      "vec3 transformedNormal = normalMatrix * objectNormal;",
    ].join("\n"),
    shadowmap_pars_fragment: [
      "#ifdef USE_SHADOWMAP",
      "uniform sampler2D shadowMap[ MAX_SHADOWS ];",
      "uniform vec2 shadowMapSize[ MAX_SHADOWS ];",
      "uniform float shadowDarkness[ MAX_SHADOWS ];",
      "uniform float shadowBias[ MAX_SHADOWS ];",
      "varying vec4 vShadowCoord[ MAX_SHADOWS ];",
      "float unpackDepth( const in vec4 rgba_depth ) {",
      "const vec4 bit_shift = vec4( 1.0 / ( 256.0 * 256.0 * 256.0 ), 1.0 / ( 256.0 * 256.0 ), 1.0 / 256.0, 1.0 );",
      "float depth = dot( rgba_depth, bit_shift );",
      "return depth;",
      "}",
      "#endif",
    ].join("\n"),
    shadowmap_fragment: [
      "#ifdef USE_SHADOWMAP",
      "#ifdef SHADOWMAP_DEBUG",
      "vec3 frustumColors[3];",
      "frustumColors[0] = vec3( 1.0, 0.5, 0.0 );",
      "frustumColors[1] = vec3( 0.0, 1.0, 0.8 );",
      "frustumColors[2] = vec3( 0.0, 0.5, 1.0 );",
      "#endif",
      "#ifdef SHADOWMAP_CASCADE",
      "int inFrustumCount = 0;",
      "#endif",
      "float fDepth;",
      "vec3 shadowColor = vec3( 1.0 );",
      "for( int i = 0; i < MAX_SHADOWS; i ++ ) {",
      "vec3 shadowCoord = vShadowCoord[ i ].xyz / vShadowCoord[ i ].w;",
      "bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );",
      "bool inFrustum = all( inFrustumVec );",
      "#ifdef SHADOWMAP_CASCADE",
      "inFrustumCount += int( inFrustum );",
      "bvec3 frustumTestVec = bvec3( inFrustum, inFrustumCount == 1, shadowCoord.z <= 1.0 );",
      "#else",
      "bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );",
      "#endif",
      "bool frustumTest = all( frustumTestVec );",
      "if ( frustumTest ) {",
      "shadowCoord.z += shadowBias[ i ];",
      "#if defined( SHADOWMAP_TYPE_PCF )",
      "float shadow = 0.0;",
      "const float shadowDelta = 1.0 / 9.0;",
      "float xPixelOffset = 1.0 / shadowMapSize[ i ].x;",
      "float yPixelOffset = 1.0 / shadowMapSize[ i ].y;",
      "float dx0 = -1.25 * xPixelOffset;",
      "float dy0 = -1.25 * yPixelOffset;",
      "float dx1 = 1.25 * xPixelOffset;",
      "float dy1 = 1.25 * yPixelOffset;",
      "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );",
      "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;",
      "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );",
      "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;",
      "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );",
      "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;",
      "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );",
      "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;",
      "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );",
      "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;",
      "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );",
      "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;",
      "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );",
      "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;",
      "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );",
      "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;",
      "fDepth = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );",
      "if ( fDepth < shadowCoord.z ) shadow += shadowDelta;",
      "shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );",
      "#elif defined( SHADOWMAP_TYPE_PCF_SOFT )",
      "float shadow = 0.0;",
      "float xPixelOffset = 1.0 / shadowMapSize[ i ].x;",
      "float yPixelOffset = 1.0 / shadowMapSize[ i ].y;",
      "float dx0 = -1.0 * xPixelOffset;",
      "float dy0 = -1.0 * yPixelOffset;",
      "float dx1 = 1.0 * xPixelOffset;",
      "float dy1 = 1.0 * yPixelOffset;",
      "mat3 shadowKernel;",
      "mat3 depthKernel;",
      "depthKernel[0][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy0 ) ) );",
      "depthKernel[0][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, 0.0 ) ) );",
      "depthKernel[0][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx0, dy1 ) ) );",
      "depthKernel[1][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy0 ) ) );",
      "depthKernel[1][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy ) );",
      "depthKernel[1][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( 0.0, dy1 ) ) );",
      "depthKernel[2][0] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy0 ) ) );",
      "depthKernel[2][1] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, 0.0 ) ) );",
      "depthKernel[2][2] = unpackDepth( texture2D( shadowMap[ i ], shadowCoord.xy + vec2( dx1, dy1 ) ) );",
      "vec3 shadowZ = vec3( shadowCoord.z );",
      "shadowKernel[0] = vec3(lessThan(depthKernel[0], shadowZ ));",
      "shadowKernel[0] *= vec3(0.25);",
      "shadowKernel[1] = vec3(lessThan(depthKernel[1], shadowZ ));",
      "shadowKernel[1] *= vec3(0.25);",
      "shadowKernel[2] = vec3(lessThan(depthKernel[2], shadowZ ));",
      "shadowKernel[2] *= vec3(0.25);",
      "vec2 fractionalCoord = 1.0 - fract( shadowCoord.xy * shadowMapSize[i].xy );",
      "shadowKernel[0] = mix( shadowKernel[1], shadowKernel[0], fractionalCoord.x );",
      "shadowKernel[1] = mix( shadowKernel[2], shadowKernel[1], fractionalCoord.x );",
      "vec4 shadowValues;",
      "shadowValues.x = mix( shadowKernel[0][1], shadowKernel[0][0], fractionalCoord.y );",
      "shadowValues.y = mix( shadowKernel[0][2], shadowKernel[0][1], fractionalCoord.y );",
      "shadowValues.z = mix( shadowKernel[1][1], shadowKernel[1][0], fractionalCoord.y );",
      "shadowValues.w = mix( shadowKernel[1][2], shadowKernel[1][1], fractionalCoord.y );",
      "shadow = dot( shadowValues, vec4( 1.0 ) );",
      "shadowColor = shadowColor * vec3( ( 1.0 - shadowDarkness[ i ] * shadow ) );",
      "#else",
      "vec4 rgbaDepth = texture2D( shadowMap[ i ], shadowCoord.xy );",
      "float fDepth = unpackDepth( rgbaDepth );",
      "if ( fDepth < shadowCoord.z )",
      "shadowColor = shadowColor * vec3( 1.0 - shadowDarkness[ i ] );",
      "#endif",
      "}",
      "#ifdef SHADOWMAP_DEBUG",
      "#ifdef SHADOWMAP_CASCADE",
      "if ( inFrustum && inFrustumCount == 1 ) gl_FragColor.xyz *= frustumColors[ i ];",
      "#else",
      "if ( inFrustum ) gl_FragColor.xyz *= frustumColors[ i ];",
      "#endif",
      "#endif",
      "}",
      "#ifdef GAMMA_OUTPUT",
      "shadowColor *= shadowColor;",
      "#endif",
      "gl_FragColor.xyz = gl_FragColor.xyz * shadowColor;",
      "#endif",
    ].join("\n"),
    shadowmap_pars_vertex: [
      "#ifdef USE_SHADOWMAP",
      "varying vec4 vShadowCoord[ MAX_SHADOWS ];",
      "uniform mat4 shadowMatrix[ MAX_SHADOWS ];",
      "#endif",
    ].join("\n"),
    shadowmap_vertex: [
      "#ifdef USE_SHADOWMAP",
      "for( int i = 0; i < MAX_SHADOWS; i ++ ) {",
      "vShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;",
      "}",
      "#endif",
    ].join("\n"),
    alphatest_fragment: [
      "#ifdef ALPHATEST",
      "if ( gl_FragColor.a < ALPHATEST ) discard;",
      "#endif",
    ].join("\n"),
    linear_to_gamma_fragment: [
      "#ifdef GAMMA_OUTPUT",
      "gl_FragColor.xyz = sqrt( gl_FragColor.xyz );",
      "#endif",
    ].join("\n"),
  },
  THREE.UniformsUtils = {
    merge: function (e) {
      var t, i, r, n = {};
      for (t = 0; t < e.length; t++) {
        for (i in r = this.clone(e[t])) n[i] = r[i];
      }
      return n;
    },
    clone: function (e) {
      var t, i, r, n = {};
      for (t in e) {
        for (i in n[t] = {}, e[t]) {
          (r = e[t][i]) instanceof THREE.Color || r instanceof THREE.Vector2 ||
            r instanceof THREE.Vector3 || r instanceof THREE.Vector4 ||
            r instanceof THREE.Matrix4 || r instanceof THREE.Texture
            ? n[t][i] = r.clone() : r instanceof Array
            ? n[t][i] = r.slice()
            : n[t][i] = r;
        }
      }
      return n;
    },
  },
  THREE.UniformsLib = {
    common: {
      diffuse: { type: "c", value: new THREE.Color(15658734) },
      opacity: { type: "f", value: 1 },
      map: { type: "t", value: null },
      offsetRepeat: { type: "v4", value: new THREE.Vector4(0, 0, 1, 1) },
      lightMap: { type: "t", value: null },
      specularMap: { type: "t", value: null },
      envMap: { type: "t", value: null },
      flipEnvMap: { type: "f", value: -1 },
      useRefract: { type: "i", value: 0 },
      reflectivity: { type: "f", value: 1 },
      refractionRatio: { type: "f", value: .98 },
      combine: { type: "i", value: 0 },
      morphTargetInfluences: { type: "f", value: 0 },
    },
    bump: {
      bumpMap: { type: "t", value: null },
      bumpScale: { type: "f", value: 1 },
    },
    normalmap: {
      normalMap: { type: "t", value: null },
      normalScale: { type: "v2", value: new THREE.Vector2(1, 1) },
    },
    fog: {
      fogDensity: { type: "f", value: 25e-5 },
      fogNear: { type: "f", value: 1 },
      fogFar: { type: "f", value: 2e3 },
      fogColor: { type: "c", value: new THREE.Color(16777215) },
    },
    lights: {
      ambientLightColor: { type: "fv", value: [] },
      directionalLightDirection: { type: "fv", value: [] },
      directionalLightColor: { type: "fv", value: [] },
      hemisphereLightDirection: { type: "fv", value: [] },
      hemisphereLightSkyColor: { type: "fv", value: [] },
      hemisphereLightGroundColor: { type: "fv", value: [] },
      pointLightColor: { type: "fv", value: [] },
      pointLightPosition: { type: "fv", value: [] },
      pointLightDistance: { type: "fv1", value: [] },
      spotLightColor: { type: "fv", value: [] },
      spotLightPosition: { type: "fv", value: [] },
      spotLightDirection: { type: "fv", value: [] },
      spotLightDistance: { type: "fv1", value: [] },
      spotLightAngleCos: { type: "fv1", value: [] },
      spotLightExponent: { type: "fv1", value: [] },
    },
    particle: {
      psColor: { type: "c", value: new THREE.Color(15658734) },
      opacity: { type: "f", value: 1 },
      size: { type: "f", value: 1 },
      scale: { type: "f", value: 1 },
      map: { type: "t", value: null },
      fogDensity: { type: "f", value: 25e-5 },
      fogNear: { type: "f", value: 1 },
      fogFar: { type: "f", value: 2e3 },
      fogColor: { type: "c", value: new THREE.Color(16777215) },
    },
    shadowmap: {
      shadowMap: { type: "tv", value: [] },
      shadowMapSize: { type: "v2v", value: [] },
      shadowBias: { type: "fv1", value: [] },
      shadowDarkness: { type: "fv1", value: [] },
      shadowMatrix: { type: "m4v", value: [] },
    },
  },
  THREE.ShaderLib = {
    basic: {
      uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib.common,
        THREE.UniformsLib.fog,
        THREE.UniformsLib.shadowmap,
      ]),
      vertexShader: [
        THREE.ShaderChunk.map_pars_vertex,
        THREE.ShaderChunk.lightmap_pars_vertex,
        THREE.ShaderChunk.envmap_pars_vertex,
        THREE.ShaderChunk.color_pars_vertex,
        THREE.ShaderChunk.morphtarget_pars_vertex,
        THREE.ShaderChunk.skinning_pars_vertex,
        THREE.ShaderChunk.shadowmap_pars_vertex,
        "void main() {",
        THREE.ShaderChunk.map_vertex,
        THREE.ShaderChunk.lightmap_vertex,
        THREE.ShaderChunk.color_vertex,
        THREE.ShaderChunk.skinbase_vertex,
        "#ifdef USE_ENVMAP",
        THREE.ShaderChunk.morphnormal_vertex,
        THREE.ShaderChunk.skinnormal_vertex,
        THREE.ShaderChunk.defaultnormal_vertex,
        "#endif",
        THREE.ShaderChunk.morphtarget_vertex,
        THREE.ShaderChunk.skinning_vertex,
        THREE.ShaderChunk.default_vertex,
        THREE.ShaderChunk.worldpos_vertex,
        THREE.ShaderChunk.envmap_vertex,
        THREE.ShaderChunk.shadowmap_vertex,
        "}",
      ].join("\n"),
      fragmentShader: [
        "uniform vec3 diffuse;",
        "uniform float opacity;",
        THREE.ShaderChunk.color_pars_fragment,
        THREE.ShaderChunk.map_pars_fragment,
        THREE.ShaderChunk.lightmap_pars_fragment,
        THREE.ShaderChunk.envmap_pars_fragment,
        THREE.ShaderChunk.fog_pars_fragment,
        THREE.ShaderChunk.shadowmap_pars_fragment,
        THREE.ShaderChunk.specularmap_pars_fragment,
        "void main() {",
        "gl_FragColor = vec4( diffuse, opacity );",
        THREE.ShaderChunk.map_fragment,
        THREE.ShaderChunk.alphatest_fragment,
        THREE.ShaderChunk.specularmap_fragment,
        THREE.ShaderChunk.lightmap_fragment,
        THREE.ShaderChunk.color_fragment,
        THREE.ShaderChunk.envmap_fragment,
        THREE.ShaderChunk.shadowmap_fragment,
        THREE.ShaderChunk.linear_to_gamma_fragment,
        THREE.ShaderChunk.fog_fragment,
        "}",
      ].join("\n"),
    },
    lambert: {
      uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib.common,
        THREE.UniformsLib.fog,
        THREE.UniformsLib.lights,
        THREE.UniformsLib.shadowmap,
        {
          ambient: { type: "c", value: new THREE.Color(16777215) },
          emissive: { type: "c", value: new THREE.Color(0) },
          wrapRGB: { type: "v3", value: new THREE.Vector3(1, 1, 1) },
        },
      ]),
      vertexShader: [
        "#define LAMBERT",
        "varying vec3 vLightFront;",
        "#ifdef DOUBLE_SIDED",
        "varying vec3 vLightBack;",
        "#endif",
        THREE.ShaderChunk.map_pars_vertex,
        THREE.ShaderChunk.lightmap_pars_vertex,
        THREE.ShaderChunk.envmap_pars_vertex,
        THREE.ShaderChunk.lights_lambert_pars_vertex,
        THREE.ShaderChunk.color_pars_vertex,
        THREE.ShaderChunk.morphtarget_pars_vertex,
        THREE.ShaderChunk.skinning_pars_vertex,
        THREE.ShaderChunk.shadowmap_pars_vertex,
        "void main() {",
        THREE.ShaderChunk.map_vertex,
        THREE.ShaderChunk.lightmap_vertex,
        THREE.ShaderChunk.color_vertex,
        THREE.ShaderChunk.morphnormal_vertex,
        THREE.ShaderChunk.skinbase_vertex,
        THREE.ShaderChunk.skinnormal_vertex,
        THREE.ShaderChunk.defaultnormal_vertex,
        THREE.ShaderChunk.morphtarget_vertex,
        THREE.ShaderChunk.skinning_vertex,
        THREE.ShaderChunk.default_vertex,
        THREE.ShaderChunk.worldpos_vertex,
        THREE.ShaderChunk.envmap_vertex,
        THREE.ShaderChunk.lights_lambert_vertex,
        THREE.ShaderChunk.shadowmap_vertex,
        "}",
      ].join("\n"),
      fragmentShader: [
        "uniform float opacity;",
        "varying vec3 vLightFront;",
        "#ifdef DOUBLE_SIDED",
        "varying vec3 vLightBack;",
        "#endif",
        THREE.ShaderChunk.color_pars_fragment,
        THREE.ShaderChunk.map_pars_fragment,
        THREE.ShaderChunk.lightmap_pars_fragment,
        THREE.ShaderChunk.envmap_pars_fragment,
        THREE.ShaderChunk.fog_pars_fragment,
        THREE.ShaderChunk.shadowmap_pars_fragment,
        THREE.ShaderChunk.specularmap_pars_fragment,
        "void main() {",
        "gl_FragColor = vec4( vec3 ( 1.0 ), opacity );",
        THREE.ShaderChunk.map_fragment,
        THREE.ShaderChunk.alphatest_fragment,
        THREE.ShaderChunk.specularmap_fragment,
        "#ifdef DOUBLE_SIDED",
        "if ( gl_FrontFacing )",
        "gl_FragColor.xyz *= vLightFront;",
        "else",
        "gl_FragColor.xyz *= vLightBack;",
        "#else",
        "gl_FragColor.xyz *= vLightFront;",
        "#endif",
        THREE.ShaderChunk.lightmap_fragment,
        THREE.ShaderChunk.color_fragment,
        THREE.ShaderChunk.envmap_fragment,
        THREE.ShaderChunk.shadowmap_fragment,
        THREE.ShaderChunk.linear_to_gamma_fragment,
        THREE.ShaderChunk.fog_fragment,
        "}",
      ].join("\n"),
    },
    phong: {
      uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib.common,
        THREE.UniformsLib.bump,
        THREE.UniformsLib.normalmap,
        THREE.UniformsLib.fog,
        THREE.UniformsLib.lights,
        THREE.UniformsLib.shadowmap,
        {
          ambient: { type: "c", value: new THREE.Color(16777215) },
          emissive: { type: "c", value: new THREE.Color(0) },
          specular: { type: "c", value: new THREE.Color(1118481) },
          shininess: { type: "f", value: 30 },
          wrapRGB: { type: "v3", value: new THREE.Vector3(1, 1, 1) },
        },
      ]),
      vertexShader: [
        "#define PHONG",
        "varying vec3 vViewPosition;",
        "varying vec3 vNormal;",
        THREE.ShaderChunk.map_pars_vertex,
        THREE.ShaderChunk.lightmap_pars_vertex,
        THREE.ShaderChunk.envmap_pars_vertex,
        THREE.ShaderChunk.lights_phong_pars_vertex,
        THREE.ShaderChunk.color_pars_vertex,
        THREE.ShaderChunk.morphtarget_pars_vertex,
        THREE.ShaderChunk.skinning_pars_vertex,
        THREE.ShaderChunk.shadowmap_pars_vertex,
        "void main() {",
        THREE.ShaderChunk.map_vertex,
        THREE.ShaderChunk.lightmap_vertex,
        THREE.ShaderChunk.color_vertex,
        THREE.ShaderChunk.morphnormal_vertex,
        THREE.ShaderChunk.skinbase_vertex,
        THREE.ShaderChunk.skinnormal_vertex,
        THREE.ShaderChunk.defaultnormal_vertex,
        "vNormal = normalize( transformedNormal );",
        THREE.ShaderChunk.morphtarget_vertex,
        THREE.ShaderChunk.skinning_vertex,
        THREE.ShaderChunk.default_vertex,
        "vViewPosition = -mvPosition.xyz;",
        THREE.ShaderChunk.worldpos_vertex,
        THREE.ShaderChunk.envmap_vertex,
        THREE.ShaderChunk.lights_phong_vertex,
        THREE.ShaderChunk.shadowmap_vertex,
        "}",
      ].join("\n"),
      fragmentShader: [
        "uniform vec3 diffuse;",
        "uniform float opacity;",
        "uniform vec3 ambient;",
        "uniform vec3 emissive;",
        "uniform vec3 specular;",
        "uniform float shininess;",
        THREE.ShaderChunk.color_pars_fragment,
        THREE.ShaderChunk.map_pars_fragment,
        THREE.ShaderChunk.lightmap_pars_fragment,
        THREE.ShaderChunk.envmap_pars_fragment,
        THREE.ShaderChunk.fog_pars_fragment,
        THREE.ShaderChunk.lights_phong_pars_fragment,
        THREE.ShaderChunk.shadowmap_pars_fragment,
        THREE.ShaderChunk.bumpmap_pars_fragment,
        THREE.ShaderChunk.normalmap_pars_fragment,
        THREE.ShaderChunk.specularmap_pars_fragment,
        "void main() {",
        "gl_FragColor = vec4( vec3 ( 1.0 ), opacity );",
        THREE.ShaderChunk.map_fragment,
        THREE.ShaderChunk.alphatest_fragment,
        THREE.ShaderChunk.specularmap_fragment,
        THREE.ShaderChunk.lights_phong_fragment,
        THREE.ShaderChunk.lightmap_fragment,
        THREE.ShaderChunk.color_fragment,
        THREE.ShaderChunk.envmap_fragment,
        THREE.ShaderChunk.shadowmap_fragment,
        THREE.ShaderChunk.linear_to_gamma_fragment,
        THREE.ShaderChunk.fog_fragment,
        "}",
      ].join("\n"),
    },
    particle_basic: {
      uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib.particle,
        THREE.UniformsLib.shadowmap,
      ]),
      vertexShader: [
        "uniform float size;",
        "uniform float scale;",
        THREE.ShaderChunk.color_pars_vertex,
        THREE.ShaderChunk.shadowmap_pars_vertex,
        "void main() {",
        THREE.ShaderChunk.color_vertex,
        "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
        "#ifdef USE_SIZEATTENUATION",
        "gl_PointSize = size * ( scale / length( mvPosition.xyz ) );",
        "#else",
        "gl_PointSize = size;",
        "#endif",
        "gl_Position = projectionMatrix * mvPosition;",
        THREE.ShaderChunk.worldpos_vertex,
        THREE.ShaderChunk.shadowmap_vertex,
        "}",
      ].join("\n"),
      fragmentShader: [
        "uniform vec3 psColor;",
        "uniform float opacity;",
        THREE.ShaderChunk.color_pars_fragment,
        THREE.ShaderChunk.map_particle_pars_fragment,
        THREE.ShaderChunk.fog_pars_fragment,
        THREE.ShaderChunk.shadowmap_pars_fragment,
        "void main() {",
        "gl_FragColor = vec4( psColor, opacity );",
        THREE.ShaderChunk.map_particle_fragment,
        THREE.ShaderChunk.alphatest_fragment,
        THREE.ShaderChunk.color_fragment,
        THREE.ShaderChunk.shadowmap_fragment,
        THREE.ShaderChunk.fog_fragment,
        "}",
      ].join("\n"),
    },
    dashed: {
      uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib.common,
        THREE.UniformsLib.fog,
        {
          scale: { type: "f", value: 1 },
          dashSize: { type: "f", value: 1 },
          totalSize: { type: "f", value: 2 },
        },
      ]),
      vertexShader: [
        "uniform float scale;",
        "attribute float lineDistance;",
        "varying float vLineDistance;",
        THREE.ShaderChunk.color_pars_vertex,
        "void main() {",
        THREE.ShaderChunk.color_vertex,
        "vLineDistance = scale * lineDistance;",
        "vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
        "gl_Position = projectionMatrix * mvPosition;",
        "}",
      ].join("\n"),
      fragmentShader: [
        "uniform vec3 diffuse;",
        "uniform float opacity;",
        "uniform float dashSize;",
        "uniform float totalSize;",
        "varying float vLineDistance;",
        THREE.ShaderChunk.color_pars_fragment,
        THREE.ShaderChunk.fog_pars_fragment,
        "void main() {",
        "if ( mod( vLineDistance, totalSize ) > dashSize ) {",
        "discard;",
        "}",
        "gl_FragColor = vec4( diffuse, opacity );",
        THREE.ShaderChunk.color_fragment,
        THREE.ShaderChunk.fog_fragment,
        "}",
      ].join("\n"),
    },
    depth: {
      uniforms: {
        mNear: { type: "f", value: 1 },
        mFar: { type: "f", value: 2e3 },
        opacity: { type: "f", value: 1 },
      },
      vertexShader: [
        "void main() {",
        "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
        "}",
      ].join("\n"),
      fragmentShader: [
        "uniform float mNear;",
        "uniform float mFar;",
        "uniform float opacity;",
        "void main() {",
        "float depth = gl_FragCoord.z / gl_FragCoord.w;",
        "float color = 1.0 - smoothstep( mNear, mFar, depth );",
        "gl_FragColor = vec4( vec3( color ), opacity );",
        "}",
      ].join("\n"),
    },
    normal: {
      uniforms: { opacity: { type: "f", value: 1 } },
      vertexShader: [
        "varying vec3 vNormal;",
        THREE.ShaderChunk.morphtarget_pars_vertex,
        "void main() {",
        "vNormal = normalize( normalMatrix * normal );",
        THREE.ShaderChunk.morphtarget_vertex,
        THREE.ShaderChunk.default_vertex,
        "}",
      ].join("\n"),
      fragmentShader: [
        "uniform float opacity;",
        "varying vec3 vNormal;",
        "void main() {",
        "gl_FragColor = vec4( 0.5 * normalize( vNormal ) + 0.5, opacity );",
        "}",
      ].join("\n"),
    },
    normalmap: {
      uniforms: THREE.UniformsUtils.merge([
        THREE.UniformsLib.fog,
        THREE.UniformsLib.lights,
        THREE.UniformsLib.shadowmap,
        {
          enableAO: { type: "i", value: 0 },
          enableDiffuse: { type: "i", value: 0 },
          enableSpecular: { type: "i", value: 0 },
          enableReflection: { type: "i", value: 0 },
          enableDisplacement: { type: "i", value: 0 },
          tDisplacement: { type: "t", value: null },
          tDiffuse: { type: "t", value: null },
          tCube: { type: "t", value: null },
          tNormal: { type: "t", value: null },
          tSpecular: { type: "t", value: null },
          tAO: { type: "t", value: null },
          uNormalScale: { type: "v2", value: new THREE.Vector2(1, 1) },
          uDisplacementBias: { type: "f", value: 0 },
          uDisplacementScale: { type: "f", value: 1 },
          uDiffuseColor: { type: "c", value: new THREE.Color(16777215) },
          uSpecularColor: { type: "c", value: new THREE.Color(1118481) },
          uAmbientColor: { type: "c", value: new THREE.Color(16777215) },
          uShininess: { type: "f", value: 30 },
          uOpacity: { type: "f", value: 1 },
          useRefract: { type: "i", value: 0 },
          uRefractionRatio: { type: "f", value: .98 },
          uReflectivity: { type: "f", value: .5 },
          uOffset: { type: "v2", value: new THREE.Vector2(0, 0) },
          uRepeat: { type: "v2", value: new THREE.Vector2(1, 1) },
          wrapRGB: { type: "v3", value: new THREE.Vector3(1, 1, 1) },
        },
      ]),
      fragmentShader: [
        "uniform vec3 uAmbientColor;",
        "uniform vec3 uDiffuseColor;",
        "uniform vec3 uSpecularColor;",
        "uniform float uShininess;",
        "uniform float uOpacity;",
        "uniform bool enableDiffuse;",
        "uniform bool enableSpecular;",
        "uniform bool enableAO;",
        "uniform bool enableReflection;",
        "uniform sampler2D tDiffuse;",
        "uniform sampler2D tNormal;",
        "uniform sampler2D tSpecular;",
        "uniform sampler2D tAO;",
        "uniform samplerCube tCube;",
        "uniform vec2 uNormalScale;",
        "uniform bool useRefract;",
        "uniform float uRefractionRatio;",
        "uniform float uReflectivity;",
        "varying vec3 vTangent;",
        "varying vec3 vBinormal;",
        "varying vec3 vNormal;",
        "varying vec2 vUv;",
        "uniform vec3 ambientLightColor;",
        "#if MAX_DIR_LIGHTS > 0",
        "uniform vec3 directionalLightColor[ MAX_DIR_LIGHTS ];",
        "uniform vec3 directionalLightDirection[ MAX_DIR_LIGHTS ];",
        "#endif",
        "#if MAX_HEMI_LIGHTS > 0",
        "uniform vec3 hemisphereLightSkyColor[ MAX_HEMI_LIGHTS ];",
        "uniform vec3 hemisphereLightGroundColor[ MAX_HEMI_LIGHTS ];",
        "uniform vec3 hemisphereLightDirection[ MAX_HEMI_LIGHTS ];",
        "#endif",
        "#if MAX_POINT_LIGHTS > 0",
        "uniform vec3 pointLightColor[ MAX_POINT_LIGHTS ];",
        "uniform vec3 pointLightPosition[ MAX_POINT_LIGHTS ];",
        "uniform float pointLightDistance[ MAX_POINT_LIGHTS ];",
        "#endif",
        "#if MAX_SPOT_LIGHTS > 0",
        "uniform vec3 spotLightColor[ MAX_SPOT_LIGHTS ];",
        "uniform vec3 spotLightPosition[ MAX_SPOT_LIGHTS ];",
        "uniform vec3 spotLightDirection[ MAX_SPOT_LIGHTS ];",
        "uniform float spotLightAngleCos[ MAX_SPOT_LIGHTS ];",
        "uniform float spotLightExponent[ MAX_SPOT_LIGHTS ];",
        "uniform float spotLightDistance[ MAX_SPOT_LIGHTS ];",
        "#endif",
        "#ifdef WRAP_AROUND",
        "uniform vec3 wrapRGB;",
        "#endif",
        "varying vec3 vWorldPosition;",
        "varying vec3 vViewPosition;",
        THREE.ShaderChunk.shadowmap_pars_fragment,
        THREE.ShaderChunk.fog_pars_fragment,
        "void main() {",
        "gl_FragColor = vec4( vec3( 1.0 ), uOpacity );",
        "vec3 specularTex = vec3( 1.0 );",
        "vec3 normalTex = texture2D( tNormal, vUv ).xyz * 2.0 - 1.0;",
        "normalTex.xy *= uNormalScale;",
        "normalTex = normalize( normalTex );",
        "if( enableDiffuse ) {",
        "#ifdef GAMMA_INPUT",
        "vec4 texelColor = texture2D( tDiffuse, vUv );",
        "texelColor.xyz *= texelColor.xyz;",
        "gl_FragColor = gl_FragColor * texelColor;",
        "#else",
        "gl_FragColor = gl_FragColor * texture2D( tDiffuse, vUv );",
        "#endif",
        "}",
        "if( enableAO ) {",
        "#ifdef GAMMA_INPUT",
        "vec4 aoColor = texture2D( tAO, vUv );",
        "aoColor.xyz *= aoColor.xyz;",
        "gl_FragColor.xyz = gl_FragColor.xyz * aoColor.xyz;",
        "#else",
        "gl_FragColor.xyz = gl_FragColor.xyz * texture2D( tAO, vUv ).xyz;",
        "#endif",
        "}",
        "if( enableSpecular )",
        "specularTex = texture2D( tSpecular, vUv ).xyz;",
        "mat3 tsb = mat3( normalize( vTangent ), normalize( vBinormal ), normalize( vNormal ) );",
        "vec3 finalNormal = tsb * normalTex;",
        "#ifdef FLIP_SIDED",
        "finalNormal = -finalNormal;",
        "#endif",
        "vec3 normal = normalize( finalNormal );",
        "vec3 viewPosition = normalize( vViewPosition );",
        "#if MAX_POINT_LIGHTS > 0",
        "vec3 pointDiffuse = vec3( 0.0 );",
        "vec3 pointSpecular = vec3( 0.0 );",
        "for ( int i = 0; i < MAX_POINT_LIGHTS; i ++ ) {",
        "vec4 lPosition = viewMatrix * vec4( pointLightPosition[ i ], 1.0 );",
        "vec3 pointVector = lPosition.xyz + vViewPosition.xyz;",
        "float pointDistance = 1.0;",
        "if ( pointLightDistance[ i ] > 0.0 )",
        "pointDistance = 1.0 - min( ( length( pointVector ) / pointLightDistance[ i ] ), 1.0 );",
        "pointVector = normalize( pointVector );",
        "#ifdef WRAP_AROUND",
        "float pointDiffuseWeightFull = max( dot( normal, pointVector ), 0.0 );",
        "float pointDiffuseWeightHalf = max( 0.5 * dot( normal, pointVector ) + 0.5, 0.0 );",
        "vec3 pointDiffuseWeight = mix( vec3 ( pointDiffuseWeightFull ), vec3( pointDiffuseWeightHalf ), wrapRGB );",
        "#else",
        "float pointDiffuseWeight = max( dot( normal, pointVector ), 0.0 );",
        "#endif",
        "pointDiffuse += pointDistance * pointLightColor[ i ] * uDiffuseColor * pointDiffuseWeight;",
        "vec3 pointHalfVector = normalize( pointVector + viewPosition );",
        "float pointDotNormalHalf = max( dot( normal, pointHalfVector ), 0.0 );",
        "float pointSpecularWeight = specularTex.r * max( pow( pointDotNormalHalf, uShininess ), 0.0 );",
        "#ifdef PHYSICALLY_BASED_SHADING",
        "float specularNormalization = ( uShininess + 2.0001 ) / 8.0;",
        "vec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( pointVector, pointHalfVector ), 5.0 );",
        "pointSpecular += schlick * pointLightColor[ i ] * pointSpecularWeight * pointDiffuseWeight * pointDistance * specularNormalization;",
        "#else",
        "pointSpecular += pointDistance * pointLightColor[ i ] * uSpecularColor * pointSpecularWeight * pointDiffuseWeight;",
        "#endif",
        "}",
        "#endif",
        "#if MAX_SPOT_LIGHTS > 0",
        "vec3 spotDiffuse = vec3( 0.0 );",
        "vec3 spotSpecular = vec3( 0.0 );",
        "for ( int i = 0; i < MAX_SPOT_LIGHTS; i ++ ) {",
        "vec4 lPosition = viewMatrix * vec4( spotLightPosition[ i ], 1.0 );",
        "vec3 spotVector = lPosition.xyz + vViewPosition.xyz;",
        "float spotDistance = 1.0;",
        "if ( spotLightDistance[ i ] > 0.0 )",
        "spotDistance = 1.0 - min( ( length( spotVector ) / spotLightDistance[ i ] ), 1.0 );",
        "spotVector = normalize( spotVector );",
        "float spotEffect = dot( spotLightDirection[ i ], normalize( spotLightPosition[ i ] - vWorldPosition ) );",
        "if ( spotEffect > spotLightAngleCos[ i ] ) {",
        "spotEffect = max( pow( spotEffect, spotLightExponent[ i ] ), 0.0 );",
        "#ifdef WRAP_AROUND",
        "float spotDiffuseWeightFull = max( dot( normal, spotVector ), 0.0 );",
        "float spotDiffuseWeightHalf = max( 0.5 * dot( normal, spotVector ) + 0.5, 0.0 );",
        "vec3 spotDiffuseWeight = mix( vec3 ( spotDiffuseWeightFull ), vec3( spotDiffuseWeightHalf ), wrapRGB );",
        "#else",
        "float spotDiffuseWeight = max( dot( normal, spotVector ), 0.0 );",
        "#endif",
        "spotDiffuse += spotDistance * spotLightColor[ i ] * uDiffuseColor * spotDiffuseWeight * spotEffect;",
        "vec3 spotHalfVector = normalize( spotVector + viewPosition );",
        "float spotDotNormalHalf = max( dot( normal, spotHalfVector ), 0.0 );",
        "float spotSpecularWeight = specularTex.r * max( pow( spotDotNormalHalf, uShininess ), 0.0 );",
        "#ifdef PHYSICALLY_BASED_SHADING",
        "float specularNormalization = ( uShininess + 2.0001 ) / 8.0;",
        "vec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( spotVector, spotHalfVector ), 5.0 );",
        "spotSpecular += schlick * spotLightColor[ i ] * spotSpecularWeight * spotDiffuseWeight * spotDistance * specularNormalization * spotEffect;",
        "#else",
        "spotSpecular += spotDistance * spotLightColor[ i ] * uSpecularColor * spotSpecularWeight * spotDiffuseWeight * spotEffect;",
        "#endif",
        "}",
        "}",
        "#endif",
        "#if MAX_DIR_LIGHTS > 0",
        "vec3 dirDiffuse = vec3( 0.0 );",
        "vec3 dirSpecular = vec3( 0.0 );",
        "for( int i = 0; i < MAX_DIR_LIGHTS; i++ ) {",
        "vec4 lDirection = viewMatrix * vec4( directionalLightDirection[ i ], 0.0 );",
        "vec3 dirVector = normalize( lDirection.xyz );",
        "#ifdef WRAP_AROUND",
        "float directionalLightWeightingFull = max( dot( normal, dirVector ), 0.0 );",
        "float directionalLightWeightingHalf = max( 0.5 * dot( normal, dirVector ) + 0.5, 0.0 );",
        "vec3 dirDiffuseWeight = mix( vec3( directionalLightWeightingFull ), vec3( directionalLightWeightingHalf ), wrapRGB );",
        "#else",
        "float dirDiffuseWeight = max( dot( normal, dirVector ), 0.0 );",
        "#endif",
        "dirDiffuse += directionalLightColor[ i ] * uDiffuseColor * dirDiffuseWeight;",
        "vec3 dirHalfVector = normalize( dirVector + viewPosition );",
        "float dirDotNormalHalf = max( dot( normal, dirHalfVector ), 0.0 );",
        "float dirSpecularWeight = specularTex.r * max( pow( dirDotNormalHalf, uShininess ), 0.0 );",
        "#ifdef PHYSICALLY_BASED_SHADING",
        "float specularNormalization = ( uShininess + 2.0001 ) / 8.0;",
        "vec3 schlick = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( dirVector, dirHalfVector ), 5.0 );",
        "dirSpecular += schlick * directionalLightColor[ i ] * dirSpecularWeight * dirDiffuseWeight * specularNormalization;",
        "#else",
        "dirSpecular += directionalLightColor[ i ] * uSpecularColor * dirSpecularWeight * dirDiffuseWeight;",
        "#endif",
        "}",
        "#endif",
        "#if MAX_HEMI_LIGHTS > 0",
        "vec3 hemiDiffuse  = vec3( 0.0 );",
        "vec3 hemiSpecular = vec3( 0.0 );",
        "for( int i = 0; i < MAX_HEMI_LIGHTS; i ++ ) {",
        "vec4 lDirection = viewMatrix * vec4( hemisphereLightDirection[ i ], 0.0 );",
        "vec3 lVector = normalize( lDirection.xyz );",
        "float dotProduct = dot( normal, lVector );",
        "float hemiDiffuseWeight = 0.5 * dotProduct + 0.5;",
        "vec3 hemiColor = mix( hemisphereLightGroundColor[ i ], hemisphereLightSkyColor[ i ], hemiDiffuseWeight );",
        "hemiDiffuse += uDiffuseColor * hemiColor;",
        "vec3 hemiHalfVectorSky = normalize( lVector + viewPosition );",
        "float hemiDotNormalHalfSky = 0.5 * dot( normal, hemiHalfVectorSky ) + 0.5;",
        "float hemiSpecularWeightSky = specularTex.r * max( pow( hemiDotNormalHalfSky, uShininess ), 0.0 );",
        "vec3 lVectorGround = -lVector;",
        "vec3 hemiHalfVectorGround = normalize( lVectorGround + viewPosition );",
        "float hemiDotNormalHalfGround = 0.5 * dot( normal, hemiHalfVectorGround ) + 0.5;",
        "float hemiSpecularWeightGround = specularTex.r * max( pow( hemiDotNormalHalfGround, uShininess ), 0.0 );",
        "#ifdef PHYSICALLY_BASED_SHADING",
        "float dotProductGround = dot( normal, lVectorGround );",
        "float specularNormalization = ( uShininess + 2.0001 ) / 8.0;",
        "vec3 schlickSky = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVector, hemiHalfVectorSky ), 5.0 );",
        "vec3 schlickGround = uSpecularColor + vec3( 1.0 - uSpecularColor ) * pow( 1.0 - dot( lVectorGround, hemiHalfVectorGround ), 5.0 );",
        "hemiSpecular += hemiColor * specularNormalization * ( schlickSky * hemiSpecularWeightSky * max( dotProduct, 0.0 ) + schlickGround * hemiSpecularWeightGround * max( dotProductGround, 0.0 ) );",
        "#else",
        "hemiSpecular += uSpecularColor * hemiColor * ( hemiSpecularWeightSky + hemiSpecularWeightGround ) * hemiDiffuseWeight;",
        "#endif",
        "}",
        "#endif",
        "vec3 totalDiffuse = vec3( 0.0 );",
        "vec3 totalSpecular = vec3( 0.0 );",
        "#if MAX_DIR_LIGHTS > 0",
        "totalDiffuse += dirDiffuse;",
        "totalSpecular += dirSpecular;",
        "#endif",
        "#if MAX_HEMI_LIGHTS > 0",
        "totalDiffuse += hemiDiffuse;",
        "totalSpecular += hemiSpecular;",
        "#endif",
        "#if MAX_POINT_LIGHTS > 0",
        "totalDiffuse += pointDiffuse;",
        "totalSpecular += pointSpecular;",
        "#endif",
        "#if MAX_SPOT_LIGHTS > 0",
        "totalDiffuse += spotDiffuse;",
        "totalSpecular += spotSpecular;",
        "#endif",
        "#ifdef METAL",
        "gl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor + totalSpecular );",
        "#else",
        "gl_FragColor.xyz = gl_FragColor.xyz * ( totalDiffuse + ambientLightColor * uAmbientColor ) + totalSpecular;",
        "#endif",
        "if ( enableReflection ) {",
        "vec3 vReflect;",
        "vec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );",
        "if ( useRefract ) {",
        "vReflect = refract( cameraToVertex, normal, uRefractionRatio );",
        "} else {",
        "vReflect = reflect( cameraToVertex, normal );",
        "}",
        "vec4 cubeColor = textureCube( tCube, vec3( -vReflect.x, vReflect.yz ) );",
        "#ifdef GAMMA_INPUT",
        "cubeColor.xyz *= cubeColor.xyz;",
        "#endif",
        "gl_FragColor.xyz = mix( gl_FragColor.xyz, cubeColor.xyz, specularTex.r * uReflectivity );",
        "}",
        THREE.ShaderChunk.shadowmap_fragment,
        THREE.ShaderChunk.linear_to_gamma_fragment,
        THREE.ShaderChunk.fog_fragment,
        "}",
      ].join("\n"),
      vertexShader: [
        "attribute vec4 tangent;",
        "uniform vec2 uOffset;",
        "uniform vec2 uRepeat;",
        "uniform bool enableDisplacement;",
        "#ifdef VERTEX_TEXTURES",
        "uniform sampler2D tDisplacement;",
        "uniform float uDisplacementScale;",
        "uniform float uDisplacementBias;",
        "#endif",
        "varying vec3 vTangent;",
        "varying vec3 vBinormal;",
        "varying vec3 vNormal;",
        "varying vec2 vUv;",
        "varying vec3 vWorldPosition;",
        "varying vec3 vViewPosition;",
        THREE.ShaderChunk.skinning_pars_vertex,
        THREE.ShaderChunk.shadowmap_pars_vertex,
        "void main() {",
        THREE.ShaderChunk.skinbase_vertex,
        THREE.ShaderChunk.skinnormal_vertex,
        "#ifdef USE_SKINNING",
        "vNormal = normalize( normalMatrix * skinnedNormal.xyz );",
        "vec4 skinnedTangent = skinMatrix * vec4( tangent.xyz, 0.0 );",
        "vTangent = normalize( normalMatrix * skinnedTangent.xyz );",
        "#else",
        "vNormal = normalize( normalMatrix * normal );",
        "vTangent = normalize( normalMatrix * tangent.xyz );",
        "#endif",
        "vBinormal = normalize( cross( vNormal, vTangent ) * tangent.w );",
        "vUv = uv * uRepeat + uOffset;",
        "vec3 displacedPosition;",
        "#ifdef VERTEX_TEXTURES",
        "if ( enableDisplacement ) {",
        "vec3 dv = texture2D( tDisplacement, uv ).xyz;",
        "float df = uDisplacementScale * dv.x + uDisplacementBias;",
        "displacedPosition = position + normalize( normal ) * df;",
        "} else {",
        "#ifdef USE_SKINNING",
        "vec4 skinVertex = vec4( position, 1.0 );",
        "vec4 skinned  = boneMatX * skinVertex * skinWeight.x;",
        "skinned \t  += boneMatY * skinVertex * skinWeight.y;",
        "displacedPosition  = skinned.xyz;",
        "#else",
        "displacedPosition = position;",
        "#endif",
        "}",
        "#else",
        "#ifdef USE_SKINNING",
        "vec4 skinVertex = vec4( position, 1.0 );",
        "vec4 skinned  = boneMatX * skinVertex * skinWeight.x;",
        "skinned \t  += boneMatY * skinVertex * skinWeight.y;",
        "displacedPosition  = skinned.xyz;",
        "#else",
        "displacedPosition = position;",
        "#endif",
        "#endif",
        "vec4 mvPosition = modelViewMatrix * vec4( displacedPosition, 1.0 );",
        "vec4 worldPosition = modelMatrix * vec4( displacedPosition, 1.0 );",
        "gl_Position = projectionMatrix * mvPosition;",
        "vWorldPosition = worldPosition.xyz;",
        "vViewPosition = -mvPosition.xyz;",
        "#ifdef USE_SHADOWMAP",
        "for( int i = 0; i < MAX_SHADOWS; i ++ ) {",
        "vShadowCoord[ i ] = shadowMatrix[ i ] * worldPosition;",
        "}",
        "#endif",
        "}",
      ].join("\n"),
    },
    cube: {
      uniforms: {
        tCube: { type: "t", value: null },
        tFlip: { type: "f", value: -1 },
      },
      vertexShader: [
        "varying vec3 vWorldPosition;",
        "void main() {",
        "vec4 worldPosition = modelMatrix * vec4( position, 1.0 );",
        "vWorldPosition = worldPosition.xyz;",
        "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
        "}",
      ].join("\n"),
      fragmentShader: [
        "uniform samplerCube tCube;",
        "uniform float tFlip;",
        "varying vec3 vWorldPosition;",
        "void main() {",
        "gl_FragColor = textureCube( tCube, vec3( tFlip * vWorldPosition.x, vWorldPosition.yz ) );",
        "}",
      ].join("\n"),
    },
    depthRGBA: {
      uniforms: {},
      vertexShader: [
        THREE.ShaderChunk.morphtarget_pars_vertex,
        THREE.ShaderChunk.skinning_pars_vertex,
        "void main() {",
        THREE.ShaderChunk.skinbase_vertex,
        THREE.ShaderChunk.morphtarget_vertex,
        THREE.ShaderChunk.skinning_vertex,
        THREE.ShaderChunk.default_vertex,
        "}",
      ].join("\n"),
      fragmentShader: [
        "vec4 pack_depth( const in float depth ) {",
        "const vec4 bit_shift = vec4( 256.0 * 256.0 * 256.0, 256.0 * 256.0, 256.0, 1.0 );",
        "const vec4 bit_mask  = vec4( 0.0, 1.0 / 256.0, 1.0 / 256.0, 1.0 / 256.0 );",
        "vec4 res = fract( depth * bit_shift );",
        "res -= res.xxyz * bit_mask;",
        "return res;",
        "}",
        "void main() {",
        "gl_FragData[ 0 ] = pack_depth( gl_FragCoord.z );",
        "}",
      ].join("\n"),
    },
  },
  THREE.WebGLRenderer = function (e) {
    console.log("THREE.WebGLRenderer", THREE.REVISION);
    var T = void 0 !== (e = e || {}).canvas
        ? e.canvas
        : document.createElement("canvas"),
      w = void 0 !== e.precision ? e.precision : "highp",
      t = void 0 === e.alpha || e.alpha,
      i = void 0 === e.premultipliedAlpha || e.premultipliedAlpha,
      r = void 0 !== e.antialias && e.antialias,
      n = void 0 === e.stencil || e.stencil,
      o = void 0 !== e.preserveDrawingBuffer && e.preserveDrawingBuffer,
      a = new THREE.Color(0),
      s = 0;
    this.domElement = T,
      this.context = null,
      this.devicePixelRatio = void 0 !== e.devicePixelRatio ? e.devicePixelRatio
      : void 0 !== self.devicePixelRatio ? self.devicePixelRatio : 1,
      this.autoClear = !0,
      this.autoClearColor = !0,
      this.autoClearDepth = !0,
      this.autoClearStencil = !0,
      this.sortObjects = !0,
      this.autoUpdateObjects = !0,
      this.gammaInput = !1,
      this.gammaOutput = !1,
      this.physicallyBasedShading = !1,
      this.shadowMapEnabled = !1,
      this.shadowMapAutoUpdate = !0,
      this.shadowMapType = THREE.PCFShadowMap,
      this.shadowMapCullFace = THREE.CullFaceFront,
      this.shadowMapDebug = !1,
      this.shadowMapCascade = !1,
      this.maxMorphTargets = 8,
      this.maxMorphNormals = 4,
      this.autoScaleCubemaps = !0,
      this.renderPluginsPre = [],
      this.renderPluginsPost = [],
      this.info = {
        memory: { programs: 0, geometries: 0, textures: 0 },
        render: { calls: 0, vertices: 0, faces: 0, points: 0 },
      };
    var Be,
      l,
      c,
      h,
      u,
      k = this,
      _ = [],
      M = 0,
      R = null,
      p = null,
      x = -1,
      H = null,
      b = null,
      E = 0,
      S = 0,
      f = -1,
      d = -1,
      m = -1,
      g = -1,
      v = -1,
      y = -1,
      C = -1,
      A = -1,
      L = null,
      P = null,
      D = null,
      F = null,
      N = 0,
      V = 0,
      z = T.width,
      U = T.height,
      B = 0,
      O = 0,
      I = {},
      j = new THREE.Frustum(),
      G = new THREE.Matrix4(),
      W = new THREE.Matrix4(),
      X = new THREE.Vector3(),
      q = new THREE.Vector3(),
      Y = !0,
      K = {
        ambient: [0, 0, 0],
        directional: { length: 0, colors: new Array(), positions: new Array() },
        point: {
          length: 0,
          colors: new Array(),
          positions: new Array(),
          distances: new Array(),
        },
        spot: {
          length: 0,
          colors: new Array(),
          positions: new Array(),
          distances: new Array(),
          directions: new Array(),
          anglesCos: new Array(),
          exponents: new Array(),
        },
        hemi: {
          length: 0,
          skyColors: new Array(),
          groundColors: new Array(),
          positions: new Array(),
        },
      };
    !function () {
      try {
        var e = {
          alpha: t,
          premultipliedAlpha: i,
          antialias: r,
          stencil: n,
          preserveDrawingBuffer: o,
        };
        if (
          null ===
            (Be = T.getContext("webgl", e) ||
              T.getContext("experimental-webgl", e))
        ) {
          throw "Error creating WebGL context.";
        }
      } catch (e) {
        console.error(e);
      }
      l = Be.getExtension("OES_texture_float"),
        Be.getExtension("OES_texture_float_linear"),
        c = Be.getExtension("OES_standard_derivatives"),
        h = Be.getExtension("EXT_texture_filter_anisotropic") ||
          Be.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          Be.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),
        u = Be.getExtension("WEBGL_compressed_texture_s3tc") ||
          Be.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          Be.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc"),
        l || console.log("THREE.WebGLRenderer: Float textures not supported.");
      c ||
        console.log("THREE.WebGLRenderer: Standard derivatives not supported.");
      h ||
        console.log(
          "THREE.WebGLRenderer: Anisotropic texture filtering not supported.",
        );
      u ||
        console.log(
          "THREE.WebGLRenderer: S3TC compressed textures not supported.",
        );
      void 0 === Be.getShaderPrecisionFormat &&
        (Be.getShaderPrecisionFormat = function () {
          return { rangeMin: 1, rangeMax: 1, precision: 1 };
        });
    }(),
      Be.clearColor(0, 0, 0, 1),
      Be.clearDepth(1),
      Be.clearStencil(0),
      Be.enable(Be.DEPTH_TEST),
      Be.depthFunc(Be.LEQUAL),
      Be.frontFace(Be.CCW),
      Be.cullFace(Be.BACK),
      Be.enable(Be.CULL_FACE),
      Be.enable(Be.BLEND),
      Be.blendEquation(Be.FUNC_ADD),
      Be.blendFunc(Be.SRC_ALPHA, Be.ONE_MINUS_SRC_ALPHA),
      Be.viewport(N, V, z, U),
      Be.clearColor(a.r, a.g, a.b, s);
    var Q = (this.context = Be).getParameter(Be.MAX_TEXTURE_IMAGE_UNITS),
      Z = Be.getParameter(Be.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
      $ =
        (Be.getParameter(Be.MAX_TEXTURE_SIZE),
          Be.getParameter(Be.MAX_CUBE_MAP_TEXTURE_SIZE)),
      J = h ? Be.getParameter(h.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0,
      ee = 0 < Z,
      te = ee && l,
      ie =
        (u && Be.getParameter(Be.COMPRESSED_TEXTURE_FORMATS),
          Be.getShaderPrecisionFormat(Be.VERTEX_SHADER, Be.HIGH_FLOAT)),
      re = Be.getShaderPrecisionFormat(Be.VERTEX_SHADER, Be.MEDIUM_FLOAT),
      ne =
        (Be.getShaderPrecisionFormat(Be.VERTEX_SHADER, Be.LOW_FLOAT),
          Be.getShaderPrecisionFormat(Be.FRAGMENT_SHADER, Be.HIGH_FLOAT)),
      oe = Be.getShaderPrecisionFormat(Be.FRAGMENT_SHADER, Be.MEDIUM_FLOAT),
      ae =
        (Be.getShaderPrecisionFormat(Be.FRAGMENT_SHADER, Be.LOW_FLOAT),
          Be.getShaderPrecisionFormat(Be.VERTEX_SHADER, Be.HIGH_INT),
          Be.getShaderPrecisionFormat(Be.VERTEX_SHADER, Be.MEDIUM_INT),
          Be.getShaderPrecisionFormat(Be.VERTEX_SHADER, Be.LOW_INT),
          Be.getShaderPrecisionFormat(Be.FRAGMENT_SHADER, Be.HIGH_INT),
          Be.getShaderPrecisionFormat(Be.FRAGMENT_SHADER, Be.MEDIUM_INT),
          Be.getShaderPrecisionFormat(Be.FRAGMENT_SHADER, Be.LOW_INT),
          0 < ie.precision && 0 < ne.precision),
      se = 0 < re.precision && 0 < oe.precision;
    function le(e) {
      var t, i;
      if (
        e.__webglVertexBuffer = Be.createBuffer(),
          e.__webglNormalBuffer = Be.createBuffer(),
          e.__webglTangentBuffer = Be.createBuffer(),
          e.__webglColorBuffer = Be.createBuffer(),
          e.__webglUVBuffer = Be.createBuffer(),
          e.__webglUV2Buffer = Be.createBuffer(),
          e.__webglSkinIndicesBuffer = Be.createBuffer(),
          e.__webglSkinWeightsBuffer = Be.createBuffer(),
          e.__webglFaceBuffer = Be.createBuffer(),
          e.__webglLineBuffer = Be.createBuffer(),
          e.numMorphTargets
      ) {
        for (
          e.__webglMorphTargetsBuffers = [], t = 0, i = e.numMorphTargets;
          t < i;
          t++
        ) {
          e.__webglMorphTargetsBuffers.push(Be.createBuffer());
        }
      }
      if (e.numMorphNormals) {
        for (
          e.__webglMorphNormalsBuffers = [], t = 0, i = e.numMorphNormals;
          t < i;
          t++
        ) {
          e.__webglMorphNormalsBuffers.push(Be.createBuffer());
        }
      }
      k.info.memory.geometries++;
    }
    "highp" !== w || ae ||
    (se
      ? (w = "mediump",
        console.warn("WebGLRenderer: highp not supported, using mediump"))
      : (w = "lowp",
        console.warn(
          "WebGLRenderer: highp and mediump not supported, using lowp",
        ))),
      "mediump" !== w || se ||
      (w = "lowp",
        console.warn("WebGLRenderer: mediump not supported, using lowp")),
      this.getContext = function () {
        return Be;
      },
      this.supportsVertexTextures = function () {
        return ee;
      },
      this.supportsFloatTextures = function () {
        return l;
      },
      this.supportsStandardDerivatives = function () {
        return c;
      },
      this.supportsCompressedTextureS3TC = function () {
        return u;
      },
      this.getMaxAnisotropy = function () {
        return J;
      },
      this.getPrecision = function () {
        return w;
      },
      this.setSize = function (e, t, i) {
        T.width = e * this.devicePixelRatio,
          T.height = t * this.devicePixelRatio,
          1 !== this.devicePixelRatio && !1 !== i &&
          (T.style.width = e + "px", T.style.height = t + "px"),
          this.setViewport(0, 0, T.width, T.height);
      },
      this.setViewport = function (e, t, i, r) {
        N = void 0 !== e ? e : 0,
          V = void 0 !== t ? t : 0,
          z = void 0 !== i ? i : T.width,
          U = void 0 !== r ? r : T.height,
          Be.viewport(N, V, z, U);
      },
      this.setScissor = function (e, t, i, r) {
        Be.scissor(e, t, i, r);
      },
      this.enableScissorTest = function (e) {
        e ? Be.enable(Be.SCISSOR_TEST) : Be.disable(Be.SCISSOR_TEST);
      },
      this.setClearColor = function (e, t) {
        a.set(e), s = void 0 !== t ? t : 1, Be.clearColor(a.r, a.g, a.b, s);
      },
      this.setClearColorHex = function (e, t) {
        console.warn(
          "DEPRECATED: .setClearColorHex() is being removed. Use .setClearColor() instead.",
        ), this.setClearColor(e, t);
      },
      this.getClearColor = function () {
        return a;
      },
      this.getClearAlpha = function () {
        return s;
      },
      this.clear = function (e, t, i) {
        var r = 0;
        (void 0 === e || e) && (r |= Be.COLOR_BUFFER_BIT),
          (void 0 === t || t) && (r |= Be.DEPTH_BUFFER_BIT),
          (void 0 === i || i) && (r |= Be.STENCIL_BUFFER_BIT),
          Be.clear(r);
      },
      this.clearTarget = function (e, t, i, r) {
        this.setRenderTarget(e), this.clear(t, i, r);
      },
      this.addPostPlugin = function (e) {
        e.init(this), this.renderPluginsPost.push(e);
      },
      this.addPrePlugin = function (e) {
        e.init(this), this.renderPluginsPre.push(e);
      },
      this.updateShadowMap = function (e, t) {
        Y = !(R = null),
          d = f = x = H = A = C = m = -1,
          this.shadowMapPlugin.update(e, t);
      };
    var ce = function (e) {
        var t = e.target;
        t.removeEventListener("dispose", ce), de(t);
      },
      he = function (e) {
        var t = e.target;
        t.removeEventListener("dispose", he), me(t), k.info.memory.textures--;
      },
      ue = function (e) {
        var t = e.target;
        t.removeEventListener("dispose", ue), Ee(t), k.info.memory.textures--;
      },
      pe = function (e) {
        var t = e.target;
        t.removeEventListener("dispose", pe), ge(t);
      },
      fe = function (e) {
        if (
          void 0 !== e.__webglVertexBuffer &&
          Be.deleteBuffer(e.__webglVertexBuffer),
            void 0 !== e.__webglNormalBuffer &&
            Be.deleteBuffer(e.__webglNormalBuffer),
            void 0 !== e.__webglTangentBuffer &&
            Be.deleteBuffer(e.__webglTangentBuffer),
            void 0 !== e.__webglColorBuffer &&
            Be.deleteBuffer(e.__webglColorBuffer),
            void 0 !== e.__webglUVBuffer && Be.deleteBuffer(e.__webglUVBuffer),
            void 0 !== e.__webglUV2Buffer &&
            Be.deleteBuffer(e.__webglUV2Buffer),
            void 0 !== e.__webglSkinIndicesBuffer &&
            Be.deleteBuffer(e.__webglSkinIndicesBuffer),
            void 0 !== e.__webglSkinWeightsBuffer &&
            Be.deleteBuffer(e.__webglSkinWeightsBuffer),
            void 0 !== e.__webglFaceBuffer &&
            Be.deleteBuffer(e.__webglFaceBuffer),
            void 0 !== e.__webglLineBuffer &&
            Be.deleteBuffer(e.__webglLineBuffer),
            void 0 !== e.__webglLineDistanceBuffer &&
            Be.deleteBuffer(e.__webglLineDistanceBuffer),
            void 0 !== e.__webglCustomAttributesList
        ) {
          for (var t in e.__webglCustomAttributesList) {
            Be.deleteBuffer(e.__webglCustomAttributesList[t].buffer);
          }
        }
        k.info.memory.geometries--;
      },
      de = function (e) {
        if (e.__webglInit = void 0, e instanceof THREE.BufferGeometry) {
          var t = e.attributes;
          for (var i in t) {
            void 0 !== t[i].buffer && Be.deleteBuffer(t[i].buffer);
          }
          k.info.memory.geometries--;
        } else if (void 0 !== e.geometryGroups) {
          for (var r in e.geometryGroups) {
            var n = e.geometryGroups[r];
            if (void 0 !== n.numMorphTargets) {
              for (var o = 0, a = n.numMorphTargets; o < a; o++) {
                Be.deleteBuffer(n.__webglMorphTargetsBuffers[o]);
              }
            }
            if (void 0 !== n.numMorphNormals) {
              for (o = 0, a = n.numMorphNormals; o < a; o++) {
                Be.deleteBuffer(n.__webglMorphNormalsBuffers[o]);
              }
            }
            fe(n);
          }
        } else fe(e);
      },
      me = function (e) {
        if (e.image && e.image.__webglTextureCube) {
          Be.deleteTexture(e.image.__webglTextureCube);
        } else {
          if (!e.__webglInit) return;
          e.__webglInit = !1, Be.deleteTexture(e.__webglTexture);
        }
      },
      Ee = function (e) {
        if (e && e.__webglTexture) {
          if (
            Be.deleteTexture(e.__webglTexture),
              e instanceof THREE.WebGLRenderTargetCube
          ) {
            for (var t = 0; t < 6; t++) {
              Be.deleteFramebuffer(e.__webglFramebuffer[t]),
                Be.deleteRenderbuffer(e.__webglRenderbuffer[t]);
            }
          } else {
            Be.deleteFramebuffer(e.__webglFramebuffer),
              Be.deleteRenderbuffer(e.__webglRenderbuffer);
          }
        }
      },
      ge = function (e) {
        var t = e.program;
        if (void 0 !== t) {
          var i, r, n;
          e.program = void 0;
          var o = !1;
          for (i = 0, r = _.length; i < r; i++) {
            if ((n = _[i]).program === t) {
              n.usedTimes--, 0 === n.usedTimes && (o = !0);
              break;
            }
          }
          if (!0 === o) {
            var a = [];
            for (i = 0, r = _.length; i < r; i++) {
              (n = _[i]).program !== t && a.push(n);
            }
            _ = a, Be.deleteProgram(t), k.info.memory.programs--;
          }
        }
      };
    function ve(e, t) {
      var i = e.vertices.length, r = t.material;
      if (r.attributes) {
        for (
          var n
            in void 0 === e.__webglCustomAttributesList &&
              (e.__webglCustomAttributesList = []),
              r.attributes
        ) {
          var o = r.attributes[n];
          if (!o.__webglInitialized || o.createUniqueBuffers) {
            o.__webglInitialized = !0;
            var a = 1;
            "v2" === o.type
              ? a = 2
              : "v3" === o.type
              ? a = 3
              : "v4" === o.type
              ? a = 4
              : "c" === o.type && (a = 3),
              o.size = a,
              o.array = new Float32Array(i * a),
              o.buffer = Be.createBuffer(),
              o.buffer.belongsToAttribute = n,
              o.needsUpdate = !0;
          }
          e.__webglCustomAttributesList.push(o);
        }
      }
    }
    function ye(e, t) {
      var i,
        r,
        n = t.geometry,
        o = e.faces3,
        a = 3 * o.length,
        s = 1 * o.length,
        l = 3 * o.length,
        c = Te(t, e),
        h = Ie(c),
        u = Oe(c),
        p = ke(c);
      if (
        e.__vertexArray = new Float32Array(3 * a),
          u && (e.__normalArray = new Float32Array(3 * a)),
          n.hasTangents && (e.__tangentArray = new Float32Array(4 * a)),
          p && (e.__colorArray = new Float32Array(3 * a)),
          h &&
          (0 < n.faceVertexUvs.length &&
            (e.__uvArray = new Float32Array(2 * a)),
            1 < n.faceVertexUvs.length &&
            (e.__uv2Array = new Float32Array(2 * a))),
          t.geometry.skinWeights.length && t.geometry.skinIndices.length &&
          (e.__skinIndexArray = new Float32Array(4 * a),
            e.__skinWeightArray = new Float32Array(4 * a)),
          e.__faceArray = new Uint16Array(3 * s),
          e.__lineArray = new Uint16Array(2 * l),
          e.numMorphTargets
      ) {
        for (
          e.__morphTargetsArrays = [], i = 0, r = e.numMorphTargets; i < r; i++
        ) {
          e.__morphTargetsArrays.push(new Float32Array(3 * a));
        }
      }
      if (e.numMorphNormals) {
        for (
          e.__morphNormalsArrays = [], i = 0, r = e.numMorphNormals; i < r; i++
        ) {
          e.__morphNormalsArrays.push(new Float32Array(3 * a));
        }
      }
      if (
        e.__webglFaceCount = 3 * s, e.__webglLineCount = 2 * l, c.attributes
      ) {
        for (
          var f
            in void 0 === e.__webglCustomAttributesList &&
              (e.__webglCustomAttributesList = []),
              c.attributes
        ) {
          var d = c.attributes[f], m = {};
          for (var E in d) m[E] = d[E];
          if (!m.__webglInitialized || m.createUniqueBuffers) {
            m.__webglInitialized = !0;
            var g = 1;
            "v2" === m.type ? g = 2 : "v3" === m.type
              ? g = 3
              : "v4" === m.type
              ? g = 4
              : "c" === m.type && (g = 3),
              m.size = g,
              m.array = new Float32Array(a * g),
              m.buffer = Be.createBuffer(),
              m.buffer.belongsToAttribute = f,
              d.needsUpdate = !0,
              m.__original = d;
          }
          e.__webglCustomAttributesList.push(m);
        }
      }
      e.__inittedArrays = !0;
    }
    function Te(e, t) {
      return e.material instanceof THREE.MeshFaceMaterial
        ? e.material.materials[t.materialIndex] : e.material;
    }
    function Oe(e) {
      return !(e instanceof THREE.MeshBasicMaterial && !e.envMap ||
        e instanceof THREE.MeshDepthMaterial) &&
        ((t = e) && void 0 !== t.shading && t.shading === THREE.SmoothShading
          ? THREE.SmoothShading
          : THREE.FlatShading);
      var t;
    }
    function ke(e) {
      return !!e.vertexColors && e.vertexColors;
    }
    function Ie(e) {
      return !!(e.map || e.lightMap || e.bumpMap || e.normalMap ||
        e.specularMap || e instanceof THREE.ShaderMaterial);
    }
    function Re(e, t, i, r, n) {
      if (e.__inittedArrays) {
        var o,
          a,
          s,
          l,
          c,
          h,
          u,
          p,
          f,
          d,
          m,
          E,
          g,
          v,
          y,
          T,
          R,
          x,
          H,
          b,
          w,
          _,
          M,
          S,
          C,
          A,
          L,
          P,
          D,
          F,
          N,
          V,
          z,
          U,
          B,
          O,
          k,
          I,
          j,
          G,
          W,
          X = Oe(n),
          q = ke(n),
          Y = Ie(n),
          K = X === THREE.SmoothShading,
          Q = 0,
          Z = 0,
          $ = 0,
          J = 0,
          ee = 0,
          te = 0,
          ie = 0,
          re = 0,
          ne = 0,
          oe = 0,
          ae = 0,
          se = 0,
          le = e.__vertexArray,
          ce = e.__uvArray,
          he = e.__uv2Array,
          ue = e.__normalArray,
          pe = e.__tangentArray,
          fe = e.__colorArray,
          de = e.__skinIndexArray,
          me = e.__skinWeightArray,
          Ee = e.__morphTargetsArrays,
          ge = e.__morphNormalsArrays,
          ve = e.__webglCustomAttributesList,
          ye = e.__faceArray,
          Te = e.__lineArray,
          Re = t.geometry,
          xe = Re.verticesNeedUpdate,
          He = Re.elementsNeedUpdate,
          be = Re.uvsNeedUpdate,
          we = Re.normalsNeedUpdate,
          _e = Re.tangentsNeedUpdate,
          Me = Re.colorsNeedUpdate,
          Se = Re.morphTargetsNeedUpdate,
          Ce = Re.vertices,
          Ae = e.faces3,
          Le = Re.faces,
          Pe = Re.faceVertexUvs[0],
          De = Re.faceVertexUvs[1],
          Fe = (Re.colors, Re.skinIndices),
          Ne = Re.skinWeights,
          Ve = Re.morphTargets,
          ze = Re.morphNormals;
        if (xe) {
          for (o = 0, a = Ae.length; o < a; o++) {
            m = Ce[(s = Le[Ae[o]]).a],
              E = Ce[s.b],
              g = Ce[s.c],
              le[Z] = m.x,
              le[Z + 1] = m.y,
              le[Z + 2] = m.z,
              le[Z + 3] = E.x,
              le[Z + 4] = E.y,
              le[Z + 5] = E.z,
              le[Z + 6] = g.x,
              le[Z + 7] = g.y,
              le[Z + 8] = g.z,
              Z += 9;
          }
          Be.bindBuffer(Be.ARRAY_BUFFER, e.__webglVertexBuffer),
            Be.bufferData(Be.ARRAY_BUFFER, le, i);
        }
        if (Se) {
          for (U = 0, B = Ve.length; U < B; U++) {
            for (o = ae = 0, a = Ae.length; o < a; o++) {
              s = Le[I = Ae[o]],
                m = Ve[U].vertices[s.a],
                E = Ve[U].vertices[s.b],
                g = Ve[U].vertices[s.c],
                (O = Ee[U])[ae] = m.x,
                O[ae + 1] = m.y,
                O[ae + 2] = m.z,
                O[ae + 3] = E.x,
                O[ae + 4] = E.y,
                O[ae + 5] = E.z,
                O[ae + 6] = g.x,
                O[ae + 7] = g.y,
                O[ae + 8] = g.z,
                n.morphNormals &&
                (K
                  ? (R = (j = ze[U].vertexNormals[I]).a, x = j.b, H = j.c)
                  : H = x = R = ze[U].faceNormals[I],
                  (k = ge[U])[ae] = R.x,
                  k[ae + 1] = R.y,
                  k[ae + 2] = R.z,
                  k[ae + 3] = x.x,
                  k[ae + 4] = x.y,
                  k[ae + 5] = x.z,
                  k[ae + 6] = H.x,
                  k[ae + 7] = H.y,
                  k[ae + 8] = H.z),
                ae += 9;
            }
            Be.bindBuffer(Be.ARRAY_BUFFER, e.__webglMorphTargetsBuffers[U]),
              Be.bufferData(Be.ARRAY_BUFFER, Ee[U], i),
              n.morphNormals &&
              (Be.bindBuffer(Be.ARRAY_BUFFER, e.__webglMorphNormalsBuffers[U]),
                Be.bufferData(Be.ARRAY_BUFFER, ge[U], i));
          }
        }
        if (Ne.length) {
          for (o = 0, a = Ae.length; o < a; o++) {
            M = Ne[(s = Le[Ae[o]]).a],
              S = Ne[s.b],
              C = Ne[s.c],
              me[oe] = M.x,
              me[oe + 1] = M.y,
              me[oe + 2] = M.z,
              me[oe + 3] = M.w,
              me[oe + 4] = S.x,
              me[oe + 5] = S.y,
              me[oe + 6] = S.z,
              me[oe + 7] = S.w,
              me[oe + 8] = C.x,
              me[oe + 9] = C.y,
              me[oe + 10] = C.z,
              me[oe + 11] = C.w,
              A = Fe[s.a],
              L = Fe[s.b],
              P = Fe[s.c],
              de[oe] = A.x,
              de[oe + 1] = A.y,
              de[oe + 2] = A.z,
              de[oe + 3] = A.w,
              de[oe + 4] = L.x,
              de[oe + 5] = L.y,
              de[oe + 6] = L.z,
              de[oe + 7] = L.w,
              de[oe + 8] = P.x,
              de[oe + 9] = P.y,
              de[oe + 10] = P.z,
              de[oe + 11] = P.w,
              oe += 12;
          }
          0 < oe &&
            (Be.bindBuffer(Be.ARRAY_BUFFER, e.__webglSkinIndicesBuffer),
              Be.bufferData(Be.ARRAY_BUFFER, de, i),
              Be.bindBuffer(Be.ARRAY_BUFFER, e.__webglSkinWeightsBuffer),
              Be.bufferData(Be.ARRAY_BUFFER, me, i));
        }
        if (Me && q) {
          for (o = 0, a = Ae.length; o < a; o++) {
            h = (s = Le[Ae[o]]).vertexColors,
              u = s.color,
              3 === h.length && q === THREE.VertexColors
                ? (b = h[0], w = h[1], _ = h[2])
                : _ = w = b = u,
              fe[ne] = b.r,
              fe[ne + 1] = b.g,
              fe[ne + 2] = b.b,
              fe[ne + 3] = w.r,
              fe[ne + 4] = w.g,
              fe[ne + 5] = w.b,
              fe[ne + 6] = _.r,
              fe[ne + 7] = _.g,
              fe[ne + 8] = _.b,
              ne += 9;
          }
          0 < ne &&
            (Be.bindBuffer(Be.ARRAY_BUFFER, e.__webglColorBuffer),
              Be.bufferData(Be.ARRAY_BUFFER, fe, i));
        }
        if (_e && Re.hasTangents) {
          for (o = 0, a = Ae.length; o < a; o++) {
            v = (p = (s = Le[Ae[o]]).vertexTangents)[0],
              y = p[1],
              T = p[2],
              pe[ie] = v.x,
              pe[ie + 1] = v.y,
              pe[ie + 2] = v.z,
              pe[ie + 3] = v.w,
              pe[ie + 4] = y.x,
              pe[ie + 5] = y.y,
              pe[ie + 6] = y.z,
              pe[ie + 7] = y.w,
              pe[ie + 8] = T.x,
              pe[ie + 9] = T.y,
              pe[ie + 10] = T.z,
              pe[ie + 11] = T.w,
              ie += 12;
          }
          Be.bindBuffer(Be.ARRAY_BUFFER, e.__webglTangentBuffer),
            Be.bufferData(Be.ARRAY_BUFFER, pe, i);
        }
        if (we && X) {
          for (o = 0, a = Ae.length; o < a; o++) {
            if (
              l = (s = Le[Ae[o]]).vertexNormals,
                c = s.normal,
                3 === l.length && K
            ) {
              for (D = 0; D < 3; D++) {
                N = l[D],
                  ue[te] = N.x,
                  ue[te + 1] = N.y,
                  ue[te + 2] = N.z,
                  te += 3;
              }
            } else {
              for (D = 0; D < 3; D++) {
                ue[te] = c.x, ue[te + 1] = c.y, ue[te + 2] = c.z, te += 3;
              }
            }
          }
          Be.bindBuffer(Be.ARRAY_BUFFER, e.__webglNormalBuffer),
            Be.bufferData(Be.ARRAY_BUFFER, ue, i);
        }
        if (be && Pe && Y) {
          for (o = 0, a = Ae.length; o < a; o++) {
            if (void 0 !== (f = Pe[Ae[o]])) {
              for (D = 0; D < 3; D++) {
                V = f[D], ce[$] = V.x, ce[$ + 1] = V.y, $ += 2;
              }
            }
          }
          0 < $ &&
            (Be.bindBuffer(Be.ARRAY_BUFFER, e.__webglUVBuffer),
              Be.bufferData(Be.ARRAY_BUFFER, ce, i));
        }
        if (be && De && Y) {
          for (o = 0, a = Ae.length; o < a; o++) {
            if (void 0 !== (d = De[Ae[o]])) {
              for (D = 0; D < 3; D++) {
                z = d[D], he[J] = z.x, he[J + 1] = z.y, J += 2;
              }
            }
          }
          0 < J &&
            (Be.bindBuffer(Be.ARRAY_BUFFER, e.__webglUV2Buffer),
              Be.bufferData(Be.ARRAY_BUFFER, he, i));
        }
        if (He) {
          for (o = 0, a = Ae.length; o < a; o++) {
            ye[ee] = Q,
              ye[ee + 1] = Q + 1,
              ye[ee + 2] = Q + 2,
              ee += 3,
              Te[re] = Q,
              Te[re + 1] = Q + 1,
              Te[re + 2] = Q,
              Te[re + 3] = Q + 2,
              Te[re + 4] = Q + 1,
              Te[re + 5] = Q + 2,
              re += 6,
              Q += 3;
          }
          Be.bindBuffer(Be.ELEMENT_ARRAY_BUFFER, e.__webglFaceBuffer),
            Be.bufferData(Be.ELEMENT_ARRAY_BUFFER, ye, i),
            Be.bindBuffer(Be.ELEMENT_ARRAY_BUFFER, e.__webglLineBuffer),
            Be.bufferData(Be.ELEMENT_ARRAY_BUFFER, Te, i);
        }
        if (ve) {
          for (D = 0, F = ve.length; D < F; D++) {
            if ((W = ve[D]).__original.needsUpdate) {
              if (se = 0, 1 === W.size) {
                if (void 0 === W.boundTo || "vertices" === W.boundTo) {
                  for (o = 0, a = Ae.length; o < a; o++) {
                    s = Le[Ae[o]],
                      W.array[se] = W.value[s.a],
                      W.array[se + 1] = W.value[s.b],
                      W.array[se + 2] = W.value[s.c],
                      se += 3;
                  }
                } else if ("faces" === W.boundTo) {
                  for (o = 0, a = Ae.length; o < a; o++) {
                    G = W.value[Ae[o]],
                      W.array[se] = G,
                      W.array[se + 1] = G,
                      W.array[se + 2] = G,
                      se += 3;
                  }
                }
              } else if (2 === W.size) {
                if (void 0 === W.boundTo || "vertices" === W.boundTo) {
                  for (o = 0, a = Ae.length; o < a; o++) {
                    s = Le[Ae[o]],
                      m = W.value[s.a],
                      E = W.value[s.b],
                      g = W.value[s.c],
                      W.array[se] = m.x,
                      W.array[se + 1] = m.y,
                      W.array[se + 2] = E.x,
                      W.array[se + 3] = E.y,
                      W.array[se + 4] = g.x,
                      W.array[se + 5] = g.y,
                      se += 6;
                  }
                } else if ("faces" === W.boundTo) {
                  for (o = 0, a = Ae.length; o < a; o++) {
                    g = E = m = G = W.value[Ae[o]],
                      W.array[se] = m.x,
                      W.array[se + 1] = m.y,
                      W.array[se + 2] = E.x,
                      W.array[se + 3] = E.y,
                      W.array[se + 4] = g.x,
                      W.array[se + 5] = g.y,
                      se += 6;
                  }
                }
              } else if (3 === W.size) {
                var Ue;
                if (
                  Ue = "c" === W.type ? ["r", "g", "b"] : ["x", "y", "z"],
                    void 0 === W.boundTo || "vertices" === W.boundTo
                ) {
                  for (o = 0, a = Ae.length; o < a; o++) {
                    s = Le[Ae[o]],
                      m = W.value[s.a],
                      E = W.value[s.b],
                      g = W.value[s.c],
                      W.array[se] = m[Ue[0]],
                      W.array[se + 1] = m[Ue[1]],
                      W.array[se + 2] = m[Ue[2]],
                      W.array[se + 3] = E[Ue[0]],
                      W.array[se + 4] = E[Ue[1]],
                      W.array[se + 5] = E[Ue[2]],
                      W.array[se + 6] = g[Ue[0]],
                      W.array[se + 7] = g[Ue[1]],
                      W.array[se + 8] = g[Ue[2]],
                      se += 9;
                  }
                } else if ("faces" === W.boundTo) {
                  for (o = 0, a = Ae.length; o < a; o++) {
                    g = E = m = G = W.value[Ae[o]],
                      W.array[se] = m[Ue[0]],
                      W.array[se + 1] = m[Ue[1]],
                      W.array[se + 2] = m[Ue[2]],
                      W.array[se + 3] = E[Ue[0]],
                      W.array[se + 4] = E[Ue[1]],
                      W.array[se + 5] = E[Ue[2]],
                      W.array[se + 6] = g[Ue[0]],
                      W.array[se + 7] = g[Ue[1]],
                      W.array[se + 8] = g[Ue[2]],
                      se += 9;
                  }
                } else if ("faceVertices" === W.boundTo) {
                  for (o = 0, a = Ae.length; o < a; o++) {
                    m = (G = W.value[Ae[o]])[0],
                      E = G[1],
                      g = G[2],
                      W.array[se] = m[Ue[0]],
                      W.array[se + 1] = m[Ue[1]],
                      W.array[se + 2] = m[Ue[2]],
                      W.array[se + 3] = E[Ue[0]],
                      W.array[se + 4] = E[Ue[1]],
                      W.array[se + 5] = E[Ue[2]],
                      W.array[se + 6] = g[Ue[0]],
                      W.array[se + 7] = g[Ue[1]],
                      W.array[se + 8] = g[Ue[2]],
                      se += 9;
                  }
                }
              } else if (4 === W.size) {
                if (void 0 === W.boundTo || "vertices" === W.boundTo) {
                  for (o = 0, a = Ae.length; o < a; o++) {
                    s = Le[Ae[o]],
                      m = W.value[s.a],
                      E = W.value[s.b],
                      g = W.value[s.c],
                      W.array[se] = m.x,
                      W.array[se + 1] = m.y,
                      W.array[se + 2] = m.z,
                      W.array[se + 3] = m.w,
                      W.array[se + 4] = E.x,
                      W.array[se + 5] = E.y,
                      W.array[se + 6] = E.z,
                      W.array[se + 7] = E.w,
                      W.array[se + 8] = g.x,
                      W.array[se + 9] = g.y,
                      W.array[se + 10] = g.z,
                      W.array[se + 11] = g.w,
                      se += 12;
                  }
                } else if ("faces" === W.boundTo) {
                  for (o = 0, a = Ae.length; o < a; o++) {
                    g = E = m = G = W.value[Ae[o]],
                      W.array[se] = m.x,
                      W.array[se + 1] = m.y,
                      W.array[se + 2] = m.z,
                      W.array[se + 3] = m.w,
                      W.array[se + 4] = E.x,
                      W.array[se + 5] = E.y,
                      W.array[se + 6] = E.z,
                      W.array[se + 7] = E.w,
                      W.array[se + 8] = g.x,
                      W.array[se + 9] = g.y,
                      W.array[se + 10] = g.z,
                      W.array[se + 11] = g.w,
                      se += 12;
                  }
                } else if ("faceVertices" === W.boundTo) {
                  for (o = 0, a = Ae.length; o < a; o++) {
                    m = (G = W.value[Ae[o]])[0],
                      E = G[1],
                      g = G[2],
                      W.array[se] = m.x,
                      W.array[se + 1] = m.y,
                      W.array[se + 2] = m.z,
                      W.array[se + 3] = m.w,
                      W.array[se + 4] = E.x,
                      W.array[se + 5] = E.y,
                      W.array[se + 6] = E.z,
                      W.array[se + 7] = E.w,
                      W.array[se + 8] = g.x,
                      W.array[se + 9] = g.y,
                      W.array[se + 10] = g.z,
                      W.array[se + 11] = g.w,
                      se += 12;
                  }
                }
              }
              Be.bindBuffer(Be.ARRAY_BUFFER, W.buffer),
                Be.bufferData(Be.ARRAY_BUFFER, W.array, i);
            }
          }
        }
        r &&
          (delete e.__inittedArrays,
            delete e.__colorArray,
            delete e.__normalArray,
            delete e.__tangentArray,
            delete e.__uvArray,
            delete e.__uv2Array,
            delete e.__faceArray,
            delete e.__vertexArray,
            delete e.__lineArray,
            delete e.__skinIndexArray,
            delete e.__skinWeightArray);
      }
    }
    function xe(e) {
      I[e] || (Be.enableVertexAttribArray(e), I[e] = !0);
    }
    function He() {
      for (var e in I) I[e] && (Be.disableVertexAttribArray(e), I[e] = !1);
    }
    function be(e, t) {
      return e.z !== t.z ? t.z - e.z : e.id - t.id;
    }
    function we(e, t) {
      return t[0] - e[0];
    }
    function _e(e, t, i) {
      if (e.length) {
        for (var r = 0, n = e.length; r < n; r++) {
          x = H = d = f = A = C = m = -1,
            Y = !(b = R = null),
            e[r].render(t, i, B, O),
            x = H = d = f = A = C = m = -1,
            Y = !(b = R = null);
        }
      }
    }
    function Me(e, t, i, r, n, o, a, s) {
      var l, c, h, u, p, f, d;
      t ? (p = e.length - 1, d = f = -1) : (p = 0, f = e.length, d = 1);
      for (var m = p; m !== f; m += d) {
        if ((l = e[m]).render) {
          if (c = l.object, h = l.buffer, s) u = s;
          else {
            if (!(u = l[i])) continue;
            a &&
            k.setBlending(u.blending, u.blendEquation, u.blendSrc, u.blendDst),
              k.setDepthTest(u.depthTest),
              k.setDepthWrite(u.depthWrite),
              Qe(u.polygonOffset, u.polygonOffsetFactor, u.polygonOffsetUnits);
          }
          k.setMaterialFaces(u),
            h instanceof THREE.BufferGeometry
              ? k.renderBufferDirect(r, n, o, u, h, c)
              : k.renderBuffer(r, n, o, u, h, c);
        }
      }
    }
    function Se(e, t, i, r, n, o, a) {
      for (var s, l, c, h = 0, u = e.length; h < u; h++) {
        if ((l = (s = e[h]).object).visible) {
          if (a) c = a;
          else {
            if (!(c = s[t])) continue;
            o &&
            k.setBlending(c.blending, c.blendEquation, c.blendSrc, c.blendDst),
              k.setDepthTest(c.depthTest),
              k.setDepthWrite(c.depthWrite),
              Qe(c.polygonOffset, c.polygonOffsetFactor, c.polygonOffsetUnits);
          }
          k.renderImmediateObject(i, r, n, c, l);
        }
      }
    }
    function Ce(e) {
      var t = e.object.material;
      t.transparent ? (e.transparent = t, e.opaque = null)
      : (e.opaque = t, e.transparent = null);
    }
    function Ae(e) {
      var t, i, r, n = e.object, o = e.buffer;
      (r = n.material) instanceof THREE.MeshFaceMaterial
        ? (i = o.materialIndex,
          (t = r.materials[i]).transparent
            ? (e.transparent = t, e.opaque = null)
            : (e.opaque = t, e.transparent = null))
        : (t = r) &&
          (t.transparent
            ? (e.transparent = t, e.opaque = null)
            : (e.opaque = t, e.transparent = null));
    }
    function Le(e, t) {
      var i, r, n, o, a, s, l, c, h, u, p, f, d, m;
      if (void 0 === e.__webglInit) {
        if (
          e.__webglInit = !0,
            e._modelViewMatrix = new THREE.Matrix4(),
            e._normalMatrix = new THREE.Matrix3(),
            void 0 !== e.geometry && void 0 === e.geometry.__webglInit &&
            (e.geometry.__webglInit = !0,
              e.geometry.addEventListener("dispose", ce)),
            void 0 === (r = e.geometry)
        );
        else if (r instanceof THREE.BufferGeometry) {
          !function (e) {
            var t, i, r;
            for (t in e.attributes) {
              r = "index" === t ? Be.ELEMENT_ARRAY_BUFFER : Be.ARRAY_BUFFER,
                void 0 === (i = e.attributes[t]).numItems &&
                (i.numItems = i.array.length),
                i.buffer = Be.createBuffer(),
                Be.bindBuffer(r, i.buffer),
                Be.bufferData(r, i.array, Be.STATIC_DRAW);
            }
          }(r);
        } else if (e instanceof THREE.Mesh) {
          for (
            i in n = e.material,
              void 0 === r.geometryGroups && function (e, t) {
                var i,
                  r,
                  n,
                  o,
                  a,
                  s = {},
                  l = e.morphTargets.length,
                  c = e.morphNormals.length,
                  h = t instanceof THREE.MeshFaceMaterial;
                for (
                  e.geometryGroups = {}, i = 0, r = e.faces.length; i < r; i++
                ) {
                  n = e.faces[i],
                    void 0 === s[
                        o = h
                          ? n.materialIndex
                          : 0
                      ] && (s[o] = { hash: o, counter: 0 }),
                    a = s[o].hash + "_" + s[o].counter,
                    void 0 === e.geometryGroups[a] &&
                    (e.geometryGroups[a] = {
                      faces3: [],
                      materialIndex: o,
                      vertices: 0,
                      numMorphTargets: l,
                      numMorphNormals: c,
                    }),
                    65535 < e.geometryGroups[a].vertices + 3 &&
                    (s[o].counter += 1,
                      a = s[o].hash + "_" + s[o].counter,
                      void 0 === e.geometryGroups[a] &&
                      (e.geometryGroups[a] = {
                        faces3: [],
                        materialIndex: o,
                        vertices: 0,
                        numMorphTargets: l,
                        numMorphNormals: c,
                      })),
                    e.geometryGroups[a].faces3.push(i),
                    e.geometryGroups[a].vertices += 3;
                }
                for (var u in e.geometryGroupsList = [], e.geometryGroups) {
                  e.geometryGroups[u].id = E++,
                    e.geometryGroupsList.push(e.geometryGroups[u]);
                }
              }(r, n),
              r.geometryGroups
          ) {
            (o = r.geometryGroups[i]).__webglVertexBuffer ||
              (le(o),
                ye(o, e),
                r.verticesNeedUpdate = !0,
                r.morphTargetsNeedUpdate = !0,
                r.elementsNeedUpdate = !0,
                r.uvsNeedUpdate = !0,
                r.normalsNeedUpdate = !0,
                r.tangentsNeedUpdate = !0,
                r.colorsNeedUpdate = !0);
          }
        } else {
          e instanceof THREE.Line
            ? r.__webglVertexBuffer ||
              ((f = r).__webglVertexBuffer = Be.createBuffer(),
                f.__webglColorBuffer = Be.createBuffer(),
                f.__webglLineDistanceBuffer = Be.createBuffer(),
                k.info.memory.geometries++,
                u = e,
                p = (h = r).vertices.length,
                h.__vertexArray = new Float32Array(3 * p),
                h.__colorArray = new Float32Array(3 * p),
                h.__lineDistanceArray = new Float32Array(1 * p),
                h.__webglLineCount = p,
                ve(h, u),
                r.verticesNeedUpdate = !0,
                r.colorsNeedUpdate = !0,
                r.lineDistancesNeedUpdate = !0)
            : e instanceof THREE.ParticleSystem &&
              (r.__webglVertexBuffer ||
                ((c = r).__webglVertexBuffer = Be.createBuffer(),
                  c.__webglColorBuffer = Be.createBuffer(),
                  k.info.memory.geometries++,
                  s = e,
                  l = (a = r).vertices.length,
                  a.__vertexArray = new Float32Array(3 * l),
                  a.__colorArray = new Float32Array(3 * l),
                  a.__sortArray = [],
                  a.__webglParticleCount = l,
                  ve(a, s),
                  r.verticesNeedUpdate = !0,
                  r.colorsNeedUpdate = !0));
        }
      }
      if (void 0 === e.__webglActive) {
        if (e instanceof THREE.Mesh) {
          if ((r = e.geometry) instanceof THREE.BufferGeometry) {
            Pe(t.__webglObjects, r, e);
          } else if (r instanceof THREE.Geometry) {
            for (i in r.geometryGroups) {
              o = r.geometryGroups[i], Pe(t.__webglObjects, o, e);
            }
          }
        } else {
          e instanceof THREE.Line || e instanceof THREE.ParticleSystem
            ? (r = e.geometry, Pe(t.__webglObjects, r, e))
            : e instanceof THREE.ImmediateRenderObject ||
                e.immediateRenderCallback
            ? (d = t.__webglObjectsImmediate,
              m = e,
              d.push({
                id: null,
                object: m,
                opaque: null,
                transparent: null,
                z: 0,
              }))
            : e instanceof THREE.Sprite
            ? t.__webglSprites.push(e)
            : e instanceof THREE.LensFlare && t.__webglFlares.push(e);
        }
        e.__webglActive = !0;
      }
    }
    function Pe(e, t, i) {
      e.push({
        id: null,
        buffer: t,
        object: i,
        opaque: null,
        transparent: null,
        z: 0,
      });
    }
    function De(e) {
      var t, i, r, n = e.geometry;
      if (n instanceof THREE.BufferGeometry) {
        !function (e, t, i) {
          var r, n, o = e.attributes;
          for (r in o) {
            (n = o[r]).needsUpdate && ("index" === r
              ? (Be.bindBuffer(Be.ELEMENT_ARRAY_BUFFER, n.buffer),
                Be.bufferData(Be.ELEMENT_ARRAY_BUFFER, n.array, t))
              : (Be.bindBuffer(Be.ARRAY_BUFFER, n.buffer),
                Be.bufferData(Be.ARRAY_BUFFER, n.array, t)),
              n.needsUpdate = !1), i && !n.dynamic && (n.array = null);
          }
        }(n, Be.DYNAMIC_DRAW, !n.dynamic);
      } else if (e instanceof THREE.Mesh) {
        for (var o = 0, a = n.geometryGroupsList.length; o < a; o++) {
          r = Te(e, t = n.geometryGroupsList[o]),
            n.buffersNeedUpdate && ye(t, e),
            i = r.attributes && Fe(r),
            (n.verticesNeedUpdate || n.morphTargetsNeedUpdate ||
              n.elementsNeedUpdate || n.uvsNeedUpdate || n.normalsNeedUpdate ||
              n.colorsNeedUpdate || n.tangentsNeedUpdate || i) &&
            Re(t, e, Be.DYNAMIC_DRAW, !n.dynamic, r);
        }
        n.verticesNeedUpdate = !1,
          n.morphTargetsNeedUpdate = !1,
          n.elementsNeedUpdate = !1,
          n.uvsNeedUpdate = !1,
          n.normalsNeedUpdate = !1,
          n.colorsNeedUpdate = !1,
          n.tangentsNeedUpdate = !1,
          n.buffersNeedUpdate = !1,
          r.attributes && Ne(r);
      } else {
        e instanceof THREE.Line
          ? (i = (r = Te(e, n)).attributes && Fe(r),
            (n.verticesNeedUpdate || n.colorsNeedUpdate ||
              n.lineDistancesNeedUpdate || i) && function (e, t) {
              var i,
                r,
                n,
                o,
                a,
                s,
                l,
                c,
                h,
                u,
                p,
                f,
                d = e.vertices,
                m = e.colors,
                E = e.lineDistances,
                g = d.length,
                v = m.length,
                y = E.length,
                T = e.__vertexArray,
                R = e.__colorArray,
                x = e.__lineDistanceArray,
                H = e.verticesNeedUpdate,
                b = e.colorsNeedUpdate,
                w = e.lineDistancesNeedUpdate,
                _ = e.__webglCustomAttributesList;
              if (H) {
                for (i = 0; i < g; i++) {
                  o = d[i], T[a = 3 * i] = o.x, T[a + 1] = o.y, T[a + 2] = o.z;
                }
                Be.bindBuffer(Be.ARRAY_BUFFER, e.__webglVertexBuffer),
                  Be.bufferData(Be.ARRAY_BUFFER, T, t);
              }
              if (b) {
                for (r = 0; r < v; r++) {
                  s = m[r], R[a = 3 * r] = s.r, R[a + 1] = s.g, R[a + 2] = s.b;
                }
                Be.bindBuffer(Be.ARRAY_BUFFER, e.__webglColorBuffer),
                  Be.bufferData(Be.ARRAY_BUFFER, R, t);
              }
              if (w) {
                for (n = 0; n < y; n++) x[n] = E[n];
                Be.bindBuffer(Be.ARRAY_BUFFER, e.__webglLineDistanceBuffer),
                  Be.bufferData(Be.ARRAY_BUFFER, x, t);
              }
              if (_) {
                for (l = 0, c = _.length; l < c; l++) {
                  if (
                    (f = _[l]).needsUpdate &&
                    (void 0 === f.boundTo || "vertices" === f.boundTo)
                  ) {
                    if (a = 0, u = f.value.length, 1 === f.size) {
                      for (h = 0; h < u; h++) f.array[h] = f.value[h];
                    } else if (2 === f.size) {
                      for (h = 0; h < u; h++) {
                        p = f.value[h],
                          f.array[a] = p.x,
                          f.array[a + 1] = p.y,
                          a += 2;
                      }
                    } else if (3 === f.size) {
                      if ("c" === f.type) {
                        for (h = 0; h < u; h++) {
                          p = f.value[h],
                            f.array[a] = p.r,
                            f.array[a + 1] = p.g,
                            f.array[a + 2] = p.b,
                            a += 3;
                        }
                      } else {
                        for (h = 0; h < u; h++) {
                          p = f.value[h],
                            f.array[a] = p.x,
                            f.array[a + 1] = p.y,
                            f.array[a + 2] = p.z,
                            a += 3;
                        }
                      }
                    } else if (4 === f.size) {
                      for (h = 0; h < u; h++) {
                        p = f.value[h],
                          f.array[a] = p.x,
                          f.array[a + 1] = p.y,
                          f.array[a + 2] = p.z,
                          f.array[a + 3] = p.w,
                          a += 4;
                      }
                    }
                    Be.bindBuffer(Be.ARRAY_BUFFER, f.buffer),
                      Be.bufferData(Be.ARRAY_BUFFER, f.array, t);
                  }
                }
              }
            }(n, Be.DYNAMIC_DRAW),
            n.verticesNeedUpdate = !1,
            n.colorsNeedUpdate = !1,
            n.lineDistancesNeedUpdate = !1,
            r.attributes && Ne(r))
          : e instanceof THREE.ParticleSystem &&
            (i = (r = Te(e, n)).attributes && Fe(r),
              (n.verticesNeedUpdate || n.colorsNeedUpdate || e.sortParticles ||
                i) && function (e, t, i) {
                var r,
                  n,
                  o,
                  a,
                  s,
                  l,
                  c,
                  h,
                  u,
                  p,
                  f,
                  d,
                  m = e.vertices,
                  E = m.length,
                  g = e.colors,
                  v = g.length,
                  y = e.__vertexArray,
                  T = e.__colorArray,
                  R = e.__sortArray,
                  x = e.verticesNeedUpdate,
                  H = (e.elementsNeedUpdate, e.colorsNeedUpdate),
                  b = e.__webglCustomAttributesList;
                if (i.sortParticles) {
                  for (
                    W.copy(G), W.multiply(i.matrixWorld), r = 0; r < E; r++
                  ) {
                    o = m[r], X.copy(o), X.applyProjection(W), R[r] = [X.z, r];
                  }
                  for (R.sort(we), r = 0; r < E; r++) {
                    o = m[R[r][1]],
                      y[a = 3 * r] = o.x,
                      y[a + 1] = o.y,
                      y[a + 2] = o.z;
                  }
                  for (n = 0; n < v; n++) {
                    a = 3 * n,
                      l = g[R[n][1]],
                      T[a] = l.r,
                      T[a + 1] = l.g,
                      T[a + 2] = l.b;
                  }
                  if (b) {
                    for (c = 0, h = b.length; c < h; c++) {
                      if (
                        void 0 === (d = b[c]).boundTo ||
                        "vertices" === d.boundTo
                      ) {
                        if (a = 0, p = d.value.length, 1 === d.size) {
                          for (u = 0; u < p; u++) {
                            s = R[u][1], d.array[u] = d.value[s];
                          }
                        } else if (2 === d.size) {
                          for (u = 0; u < p; u++) {
                            s = R[u][1],
                              f = d.value[s],
                              d.array[a] = f.x,
                              d.array[a + 1] = f.y,
                              a += 2;
                          }
                        } else if (3 === d.size) {
                          if ("c" === d.type) {
                            for (u = 0; u < p; u++) {
                              s = R[u][1],
                                f = d.value[s],
                                d.array[a] = f.r,
                                d.array[a + 1] = f.g,
                                d.array[a + 2] = f.b,
                                a += 3;
                            }
                          } else {
                            for (u = 0; u < p; u++) {
                              s = R[u][1],
                                f = d.value[s],
                                d.array[a] = f.x,
                                d.array[a + 1] = f.y,
                                d.array[a + 2] = f.z,
                                a += 3;
                            }
                          }
                        } else if (4 === d.size) {
                          for (u = 0; u < p; u++) {
                            s = R[u][1],
                              f = d.value[s],
                              d.array[a] = f.x,
                              d.array[a + 1] = f.y,
                              d.array[a + 2] = f.z,
                              d.array[a + 3] = f.w,
                              a += 4;
                          }
                        }
                      }
                    }
                  }
                } else {
                  if (x) {
                    for (r = 0; r < E; r++) {
                      o = m[r],
                        y[a = 3 * r] = o.x,
                        y[a + 1] = o.y,
                        y[a + 2] = o.z;
                    }
                  }
                  if (H) {
                    for (n = 0; n < v; n++) {
                      l = g[n],
                        T[a = 3 * n] = l.r,
                        T[a + 1] = l.g,
                        T[a + 2] = l.b;
                    }
                  }
                  if (b) {
                    for (c = 0, h = b.length; c < h; c++) {
                      if (
                        (d = b[c]).needsUpdate &&
                        (void 0 === d.boundTo || "vertices" === d.boundTo)
                      ) {
                        if (p = d.value.length, a = 0, 1 === d.size) {
                          for (u = 0; u < p; u++) d.array[u] = d.value[u];
                        } else if (2 === d.size) {
                          for (u = 0; u < p; u++) {
                            f = d.value[u],
                              d.array[a] = f.x,
                              d.array[a + 1] = f.y,
                              a += 2;
                          }
                        } else if (3 === d.size) {
                          if ("c" === d.type) {
                            for (u = 0; u < p; u++) {
                              f = d.value[u],
                                d.array[a] = f.r,
                                d.array[a + 1] = f.g,
                                d.array[a + 2] = f.b,
                                a += 3;
                            }
                          } else {
                            for (u = 0; u < p; u++) {
                              f = d.value[u],
                                d.array[a] = f.x,
                                d.array[a + 1] = f.y,
                                d.array[a + 2] = f.z,
                                a += 3;
                            }
                          }
                        } else if (4 === d.size) {
                          for (u = 0; u < p; u++) {
                            f = d.value[u],
                              d.array[a] = f.x,
                              d.array[a + 1] = f.y,
                              d.array[a + 2] = f.z,
                              d.array[a + 3] = f.w,
                              a += 4;
                          }
                        }
                      }
                    }
                  }
                }
                if (
                  (x || i.sortParticles) &&
                  (Be.bindBuffer(Be.ARRAY_BUFFER, e.__webglVertexBuffer),
                    Be.bufferData(Be.ARRAY_BUFFER, y, t)),
                    (H || i.sortParticles) &&
                    (Be.bindBuffer(Be.ARRAY_BUFFER, e.__webglColorBuffer),
                      Be.bufferData(Be.ARRAY_BUFFER, T, t)),
                    b
                ) {
                  for (c = 0, h = b.length; c < h; c++) {
                    ((d = b[c]).needsUpdate || i.sortParticles) &&
                      (Be.bindBuffer(Be.ARRAY_BUFFER, d.buffer),
                        Be.bufferData(Be.ARRAY_BUFFER, d.array, t));
                  }
                }
              }(n, Be.DYNAMIC_DRAW, e),
              n.verticesNeedUpdate = !1,
              n.colorsNeedUpdate = !1,
              r.attributes && Ne(r));
      }
    }
    function Fe(e) {
      for (var t in e.attributes) if (e.attributes[t].needsUpdate) return !0;
      return !1;
    }
    function Ne(e) {
      for (var t in e.attributes) e.attributes[t].needsUpdate = !1;
    }
    function Ve(e, t) {
      e instanceof THREE.Mesh || e instanceof THREE.ParticleSystem ||
        e instanceof THREE.Line
        ? ze(t.__webglObjects, e)
        : e instanceof THREE.Sprite
        ? Ue(t.__webglSprites, e)
        : e instanceof THREE.LensFlare
        ? Ue(t.__webglFlares, e)
        : (e instanceof THREE.ImmediateRenderObject ||
          e.immediateRenderCallback) && ze(t.__webglObjectsImmediate, e),
        delete e.__webglActive;
    }
    function ze(e, t) {
      for (var i = e.length - 1; 0 <= i; i--) {
        e[i].object === t && e.splice(i, 1);
      }
    }
    function Ue(e, t) {
      for (var i = e.length - 1; 0 <= i; i--) e[i] === t && e.splice(i, 1);
    }
    function je(e, t, i, r, n) {
      S = 0,
        r.needsUpdate &&
        (r.program && ge(r), k.initMaterial(r, t, i, n), r.needsUpdate = !1),
        r.morphTargets &&
        (n.__webglMorphTargetInfluences ||
          (n.__webglMorphTargetInfluences = new Float32Array(
            k.maxMorphTargets,
          )));
      var o,
        a,
        s,
        l,
        c,
        h,
        u,
        p,
        f,
        d,
        m = !1,
        E = r.program,
        g = E.uniforms,
        v = r.uniforms;
      if (
        E !== R && (Be.useProgram(E), R = E, m = !0),
          r.id !== x && (x = r.id, m = !0),
          (m || e !== b) &&
          (Be.uniformMatrix4fv(
            g.projectionMatrix,
            !1,
            e.projectionMatrix.elements,
          ),
            e !== b && (b = e)),
          r.skinning
      ) {
        if (te && n.useVertexTexture) {
          if (null !== g.boneTexture) {
            var y = We();
            Be.uniform1i(g.boneTexture, y), k.setTexture(n.boneTexture, y);
          }
          null !== g.boneTextureWidth &&
          Be.uniform1i(g.boneTextureWidth, n.boneTextureWidth),
            null !== g.boneTextureHeight &&
            Be.uniform1i(g.boneTextureHeight, n.boneTextureHeight);
        } else {
          null !== g.boneGlobalMatrices &&
            Be.uniformMatrix4fv(g.boneGlobalMatrices, !1, n.boneMatrices);
        }
      }
      return m &&
        (i && r.fog &&
          (p = i,
            (u = v).fogColor.value = p.color,
            p instanceof THREE.Fog
              ? (u.fogNear.value = p.near, u.fogFar.value = p.far)
              : p instanceof THREE.FogExp2 && (u.fogDensity.value = p.density)),
          (r instanceof THREE.MeshPhongMaterial ||
            r instanceof THREE.MeshLambertMaterial || r.lights) &&
          (Y && (!function (e, t) {
            var i,
              r,
              n,
              o,
              a,
              s,
              l,
              c,
              h,
              u = 0,
              p = 0,
              f = 0,
              d = K,
              m = d.directional.colors,
              E = d.directional.positions,
              g = d.point.colors,
              v = d.point.positions,
              y = d.point.distances,
              T = d.spot.colors,
              R = d.spot.positions,
              x = d.spot.distances,
              H = d.spot.directions,
              b = d.spot.anglesCos,
              w = d.spot.exponents,
              _ = d.hemi.skyColors,
              M = d.hemi.groundColors,
              S = d.hemi.positions,
              C = 0,
              A = 0,
              L = 0,
              P = 0,
              D = 0,
              F = 0,
              N = 0,
              V = 0,
              z = 0,
              U = 0,
              B = 0,
              O = 0;
            for (i = 0, r = t.length; i < r; i++) {
              if (!(n = t[i]).onlyShadow) {
                if (
                  o = n.color,
                    l = n.intensity,
                    h = n.distance,
                    n instanceof THREE.AmbientLight
                ) {
                  if (!n.visible) continue;
                  k.gammaInput
                    ? (u += o.r * o.r, p += o.g * o.g, f += o.b * o.b)
                    : (u += o.r, p += o.g, f += o.b);
                } else if (n instanceof THREE.DirectionalLight) {
                  if (D += 1, !n.visible) continue;
                  if (
                    q.getPositionFromMatrix(n.matrixWorld),
                      X.getPositionFromMatrix(n.target.matrixWorld),
                      q.sub(X),
                      q.normalize(),
                      0 === q.x && 0 === q.y && 0 === q.z
                  ) {
                    continue;
                  }
                  E[z = 3 * C] = q.x,
                    E[z + 1] = q.y,
                    E[z + 2] = q.z,
                    k.gammaInput ? qe(m, z, o, l * l) : Ye(m, z, o, l),
                    C += 1;
                } else if (n instanceof THREE.PointLight) {
                  if (F += 1, !n.visible) continue;
                  U = 3 * A,
                    k.gammaInput
                      ? qe(g, U, o, l * l)
                      : Ye(g, U, o, l),
                    X.getPositionFromMatrix(n.matrixWorld),
                    v[U] = X.x,
                    v[U + 1] = X.y,
                    v[U + 2] = X.z,
                    y[A] = h,
                    A += 1;
                } else if (n instanceof THREE.SpotLight) {
                  if (N += 1, !n.visible) continue;
                  B = 3 * L,
                    k.gammaInput ? qe(T, B, o, l * l) : Ye(T, B, o, l),
                    X.getPositionFromMatrix(n.matrixWorld),
                    R[B] = X.x,
                    R[B + 1] = X.y,
                    R[B + 2] = X.z,
                    x[L] = h,
                    q.copy(X),
                    X.getPositionFromMatrix(n.target.matrixWorld),
                    q.sub(X),
                    q.normalize(),
                    H[B] = q.x,
                    H[B + 1] = q.y,
                    H[B + 2] = q.z,
                    b[L] = Math.cos(n.angle),
                    w[L] = n.exponent,
                    L += 1;
                } else if (n instanceof THREE.HemisphereLight) {
                  if (V += 1, !n.visible) continue;
                  if (
                    q.getPositionFromMatrix(n.matrixWorld),
                      q.normalize(),
                      0 === q.x && 0 === q.y && 0 === q.z
                  ) {
                    continue;
                  }
                  S[O = 3 * P] = q.x,
                    S[O + 1] = q.y,
                    S[O + 2] = q.z,
                    a = n.color,
                    s = n.groundColor,
                    k.gammaInput
                      ? (qe(_, O, a, c = l * l), qe(M, O, s, c))
                      : (Ye(_, O, a, l), Ye(M, O, s, l)),
                    P += 1;
                }
              }
            }
            for (i = 3 * C, r = Math.max(m.length, 3 * D); i < r; i++) m[i] = 0;
            for (i = 3 * A, r = Math.max(g.length, 3 * F); i < r; i++) {
              g[i] = 0;
            }
            for (i = 3 * L, r = Math.max(T.length, 3 * N); i < r; i++) {
              T[i] = 0;
            }
            for (i = 3 * P, r = Math.max(_.length, 3 * V); i < r; i++) {
              _[i] = 0;
            }
            for (i = 3 * P, r = Math.max(M.length, 3 * V); i < r; i++) {
              M[i] = 0;
            }
            d.directional.length = C,
              d.point.length = A,
              d.spot.length = L,
              d.hemi.length = P,
              d.ambient[0] = u,
              d.ambient[1] = p,
              d.ambient[2] = f;
          }(0, t),
            Y = !1),
            h = K,
            (c = v).ambientLightColor.value = h.ambient,
            c.directionalLightColor.value = h.directional.colors,
            c.directionalLightDirection.value = h.directional.positions,
            c.pointLightColor.value = h.point.colors,
            c.pointLightPosition.value = h.point.positions,
            c.pointLightDistance.value = h.point.distances,
            c.spotLightColor.value = h.spot.colors,
            c.spotLightPosition.value = h.spot.positions,
            c.spotLightDistance.value = h.spot.distances,
            c.spotLightDirection.value = h.spot.directions,
            c.spotLightAngleCos.value = h.spot.anglesCos,
            c.spotLightExponent.value = h.spot.exponents,
            c.hemisphereLightSkyColor.value = h.hemi.skyColors,
            c.hemisphereLightGroundColor.value = h.hemi.groundColors,
            c.hemisphereLightDirection.value = h.hemi.positions),
          (r instanceof THREE.MeshBasicMaterial ||
            r instanceof THREE.MeshLambertMaterial ||
            r instanceof THREE.MeshPhongMaterial) && function (e, t) {
            e.opacity.value = t.opacity,
              k.gammaInput
                ? e.diffuse.value.copyGammaToLinear(t.color)
                : e.diffuse.value = t.color;
            e.map.value = t.map,
              e.lightMap.value = t.lightMap,
              e.specularMap.value = t.specularMap,
              t.bumpMap &&
              (e.bumpMap.value = t.bumpMap, e.bumpScale.value = t.bumpScale);
            t.normalMap &&
              (e.normalMap.value = t.normalMap,
                e.normalScale.value.copy(t.normalScale));
            var i;
            t.map
              ? i = t.map
              : t.specularMap
              ? i = t.specularMap
              : t.normalMap
              ? i = t.normalMap
              : t.bumpMap && (i = t.bumpMap);
            if (void 0 !== i) {
              var r = i.offset, n = i.repeat;
              e.offsetRepeat.value.set(r.x, r.y, n.x, n.y);
            }
            e.envMap.value = t.envMap,
              e.flipEnvMap.value =
                t.envMap instanceof THREE.WebGLRenderTargetCube ? 1 : -1,
              k.gammaInput,
              e.reflectivity.value = t.reflectivity;
            e.refractionRatio.value = t.refractionRatio,
              e.combine.value = t.combine,
              e.useRefract.value = t.envMap &&
                t.envMap.mapping instanceof THREE.CubeRefractionMapping;
          }(v, r),
          r instanceof THREE.LineBasicMaterial
            ? Ge(v, r)
            : r instanceof THREE.LineDashedMaterial
            ? (Ge(v, r),
              l = r,
              (s = v).dashSize.value = l.dashSize,
              s.totalSize.value = l.dashSize + l.gapSize,
              s.scale.value = l.scale)
            : r instanceof THREE.ParticleSystemMaterial
            ? (a = r,
              (o = v).psColor.value = a.color,
              o.opacity.value = a.opacity,
              o.size.value = a.size,
              o.scale.value = T.height / 2,
              o.map.value = a.map)
            : r instanceof THREE.MeshPhongMaterial
            ? function (e, t) {
              e.shininess.value = t.shininess,
                k.gammaInput
                  ? (e.ambient.value.copyGammaToLinear(t.ambient),
                    e.emissive.value.copyGammaToLinear(t.emissive),
                    e.specular.value.copyGammaToLinear(t.specular))
                  : (e.ambient.value = t.ambient,
                    e.emissive.value = t.emissive,
                    e.specular.value = t.specular);
              t.wrapAround && e.wrapRGB.value.copy(t.wrapRGB);
            }(v, r)
            : r instanceof THREE.MeshLambertMaterial
            ? function (e, t) {
              k.gammaInput
                ? (e.ambient.value.copyGammaToLinear(t.ambient),
                  e.emissive.value.copyGammaToLinear(t.emissive))
                : (e.ambient.value = t.ambient, e.emissive.value = t.emissive);
              t.wrapAround && e.wrapRGB.value.copy(t.wrapRGB);
            }(v, r)
            : r instanceof THREE.MeshDepthMaterial
            ? (v.mNear.value = e.near,
              v.mFar.value = e.far,
              v.opacity.value = r.opacity)
            : r instanceof THREE.MeshNormalMaterial &&
              (v.opacity.value = r.opacity),
          n.receiveShadow && !r._shadowPass && function (e, t) {
            if (e.shadowMatrix) {
              for (var i = 0, r = 0, n = t.length; r < n; r++) {
                var o = t[r];
                o.castShadow &&
                  ((o instanceof THREE.SpotLight ||
                    o instanceof THREE.DirectionalLight && !o.shadowCascade) &&
                    (e.shadowMap.value[i] = o.shadowMap,
                      e.shadowMapSize.value[i] = o.shadowMapSize,
                      e.shadowMatrix.value[i] = o.shadowMatrix,
                      e.shadowDarkness.value[i] = o.shadowDarkness,
                      e.shadowBias.value[i] = o.shadowBias,
                      i++));
              }
            }
          }(v, t),
          function (e, t) {
            var i, r, n, o, a, s, l, c, h, u, p;
            for (h = 0, u = t.length; h < u; h++) {
              if (o = e.uniforms[t[h][1]]) {
                if (i = t[h][0], n = i.type, r = i.value, "i" === n) {
                  Be.uniform1i(o, r);
                } else if ("f" === n) Be.uniform1f(o, r);
                else if ("v2" === n) Be.uniform2f(o, r.x, r.y);
                else if ("v3" === n) Be.uniform3f(o, r.x, r.y, r.z);
                else if ("v4" === n) Be.uniform4f(o, r.x, r.y, r.z, r.w);
                else if ("c" === n) Be.uniform3f(o, r.r, r.g, r.b);
                else if ("iv1" === n) Be.uniform1iv(o, r);
                else if ("iv" === n) Be.uniform3iv(o, r);
                else if ("fv1" === n) Be.uniform1fv(o, r);
                else if ("fv" === n) Be.uniform3fv(o, r);
                else if ("v2v" === n) {
                  for (
                    void 0 === i._array &&
                    (i._array = new Float32Array(2 * r.length)),
                      l = 0,
                      c = r.length;
                    l < c;
                    l++
                  ) {
                    p = 2 * l, i._array[p] = r[l].x, i._array[p + 1] = r[l].y;
                  }
                  Be.uniform2fv(o, i._array);
                } else if ("v3v" === n) {
                  for (
                    void 0 === i._array &&
                    (i._array = new Float32Array(3 * r.length)),
                      l = 0,
                      c = r.length;
                    l < c;
                    l++
                  ) {
                    p = 3 * l,
                      i._array[p] = r[l].x,
                      i._array[p + 1] = r[l].y,
                      i._array[p + 2] = r[l].z;
                  }
                  Be.uniform3fv(o, i._array);
                } else if ("v4v" === n) {
                  for (
                    void 0 === i._array &&
                    (i._array = new Float32Array(4 * r.length)),
                      l = 0,
                      c = r.length;
                    l < c;
                    l++
                  ) {
                    p = 4 * l,
                      i._array[p] = r[l].x,
                      i._array[p + 1] = r[l].y,
                      i._array[p + 2] = r[l].z,
                      i._array[p + 3] = r[l].w;
                  }
                  Be.uniform4fv(o, i._array);
                } else if ("m4" === n) {
                  void 0 === i._array && (i._array = new Float32Array(16)),
                    r.flattenToArray(i._array),
                    Be.uniformMatrix4fv(o, !1, i._array);
                } else if ("m4v" === n) {
                  for (
                    void 0 === i._array &&
                    (i._array = new Float32Array(16 * r.length)),
                      l = 0,
                      c = r.length;
                    l < c;
                    l++
                  ) {
                    r[l].flattenToArrayOffset(i._array, 16 * l);
                  }
                  Be.uniformMatrix4fv(o, !1, i._array);
                } else if ("t" === n) {
                  if (a = r, s = We(), Be.uniform1i(o, s), !a) continue;
                  a.image instanceof Array && 6 === a.image.length
                    ? tt(a, s)
                    : a instanceof THREE.WebGLRenderTargetCube
                    ? it(a, s)
                    : k.setTexture(a, s);
                } else if ("tv" === n) {
                  for (
                    void 0 === i._array && (i._array = []),
                      l = 0,
                      c = i.value.length;
                    l < c;
                    l++
                  ) {
                    i._array[l] = We();
                  }
                  for (
                    Be.uniform1iv(o, i._array), l = 0, c = i.value.length;
                    l < c;
                    l++
                  ) {
                    a = i.value[l], s = i._array[l], a && k.setTexture(a, s);
                  }
                } else {
                  console.warn(
                    "THREE.WebGLRenderer: Unknown uniform type: " + n,
                  );
                }
              }
            }
          }(E, r.uniformsList),
          (r instanceof THREE.ShaderMaterial ||
            r instanceof THREE.MeshPhongMaterial || r.envMap) &&
          null !== g.cameraPosition &&
          (X.getPositionFromMatrix(e.matrixWorld),
            Be.uniform3f(g.cameraPosition, X.x, X.y, X.z)),
          (r instanceof THREE.MeshPhongMaterial ||
            r instanceof THREE.MeshLambertMaterial ||
            r instanceof THREE.ShaderMaterial || r.skinning) &&
          null !== g.viewMatrix &&
          Be.uniformMatrix4fv(g.viewMatrix, !1, e.matrixWorldInverse.elements)),
        f = g,
        d = n,
        Be.uniformMatrix4fv(f.modelViewMatrix, !1, d._modelViewMatrix.elements),
        f.normalMatrix &&
        Be.uniformMatrix3fv(f.normalMatrix, !1, d._normalMatrix.elements),
        null !== g.modelMatrix &&
        Be.uniformMatrix4fv(g.modelMatrix, !1, n.matrixWorld.elements),
        E;
    }
    function Ge(e, t) {
      e.diffuse.value = t.color, e.opacity.value = t.opacity;
    }
    function We() {
      var e = S;
      return Q <= e &&
        console.warn(
          "WebGLRenderer: trying to use " + e +
            " texture units while this GPU supports only " + Q,
        ),
        S += 1,
        e;
    }
    function Xe(e, t) {
      e._modelViewMatrix.multiplyMatrices(t.matrixWorldInverse, e.matrixWorld),
        e._normalMatrix.getNormalMatrix(e._modelViewMatrix);
    }
    function qe(e, t, i, r) {
      e[t] = i.r * i.r * r, e[t + 1] = i.g * i.g * r, e[t + 2] = i.b * i.b * r;
    }
    function Ye(e, t, i, r) {
      e[t] = i.r * r, e[t + 1] = i.g * r, e[t + 2] = i.b * r;
    }
    function Ke(e) {
      e !== F && (Be.lineWidth(e), F = e);
    }
    function Qe(e, t, i) {
      L !== e &&
      (e
        ? Be.enable(Be.POLYGON_OFFSET_FILL)
        : Be.disable(Be.POLYGON_OFFSET_FILL),
        L = e),
        !e || P === t && D === i || (Be.polygonOffset(t, i), P = t, D = i);
    }
    function Ze(e, t) {
      var i;
      return "fragment" === e
        ? i = Be.createShader(Be.FRAGMENT_SHADER)
        : "vertex" === e && (i = Be.createShader(Be.VERTEX_SHADER)),
        Be.shaderSource(i, t),
        Be.compileShader(i),
        Be.getShaderParameter(i, Be.COMPILE_STATUS) ? i
        : (console.error(Be.getShaderInfoLog(i)),
          console.error(function (e) {
            for (var t = e.split("\n"), i = 0, r = t.length; i < r; i++) {
              t[i] = i + 1 + ": " + t[i];
            }
            return t.join("\n");
          }(t)),
          null);
    }
    function $e(e) {
      return 0 == (e & e - 1);
    }
    function Je(e, t, i) {
      i
        ? (Be.texParameteri(e, Be.TEXTURE_WRAP_S, at(t.wrapS)),
          Be.texParameteri(e, Be.TEXTURE_WRAP_T, at(t.wrapT)),
          Be.texParameteri(e, Be.TEXTURE_MAG_FILTER, at(t.magFilter)),
          Be.texParameteri(e, Be.TEXTURE_MIN_FILTER, at(t.minFilter)))
        : (Be.texParameteri(e, Be.TEXTURE_WRAP_S, Be.CLAMP_TO_EDGE),
          Be.texParameteri(e, Be.TEXTURE_WRAP_T, Be.CLAMP_TO_EDGE),
          Be.texParameteri(e, Be.TEXTURE_MAG_FILTER, ot(t.magFilter)),
          Be.texParameteri(e, Be.TEXTURE_MIN_FILTER, ot(t.minFilter))),
        h && t.type !== THREE.FloatType &&
        (1 < t.anisotropy || t.__oldAnisotropy) &&
        (Be.texParameterf(
          e,
          h.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(t.anisotropy, J),
        ),
          t.__oldAnisotropy = t.anisotropy);
    }
    function et(e, t) {
      if (e.width <= t && e.height <= t) return e;
      var i = Math.max(e.width, e.height),
        r = Math.floor(e.width * t / i),
        n = Math.floor(e.height * t / i),
        o = document.createElement("canvas");
      return o.width = r,
        o.height = n,
        o.getContext("2d").drawImage(e, 0, 0, e.width, e.height, 0, 0, r, n),
        o;
    }
    function tt(e, t) {
      if (6 === e.image.length) {
        if (e.needsUpdate) {
          e.image.__webglTextureCube ||
          (e.addEventListener("dispose", he),
            e.image.__webglTextureCube = Be.createTexture(),
            k.info.memory.textures++),
            Be.activeTexture(Be.TEXTURE0 + t),
            Be.bindTexture(Be.TEXTURE_CUBE_MAP, e.image.__webglTextureCube),
            Be.pixelStorei(Be.UNPACK_FLIP_Y_WEBGL, e.flipY);
          for (
            var i = e instanceof THREE.CompressedTexture, r = [], n = 0;
            n < 6;
            n++
          ) {
            k.autoScaleCubemaps && !i
              ? r[n] = et(e.image[n], $)
              : r[n] = e.image[n];
          }
          var o = r[0],
            a = $e(o.width) && $e(o.height),
            s = at(e.format),
            l = at(e.type);
          Je(Be.TEXTURE_CUBE_MAP, e, a);
          for (n = 0; n < 6; n++) {
            if (i) {
              for (var c, h = r[n].mipmaps, u = 0, p = h.length; u < p; u++) {
                c = h[u],
                  e.format !== THREE.RGBAFormat
                    ? Be.compressedTexImage2D(
                      Be.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                      u,
                      s,
                      c.width,
                      c.height,
                      0,
                      c.data,
                    )
                    : Be.texImage2D(
                      Be.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                      u,
                      s,
                      c.width,
                      c.height,
                      0,
                      s,
                      l,
                      c.data,
                    );
              }
            } else {
              Be.texImage2D(
                Be.TEXTURE_CUBE_MAP_POSITIVE_X + n,
                0,
                s,
                s,
                l,
                r[n],
              );
            }
          }
          e.generateMipmaps && a && Be.generateMipmap(Be.TEXTURE_CUBE_MAP),
            e.needsUpdate = !1,
            e.onUpdate && e.onUpdate();
        } else {
          Be.activeTexture(Be.TEXTURE0 + t),
            Be.bindTexture(Be.TEXTURE_CUBE_MAP, e.image.__webglTextureCube);
        }
      }
    }
    function it(e, t) {
      Be.activeTexture(Be.TEXTURE0 + t),
        Be.bindTexture(Be.TEXTURE_CUBE_MAP, e.__webglTexture);
    }
    function rt(e, t, i) {
      Be.bindFramebuffer(Be.FRAMEBUFFER, e),
        Be.framebufferTexture2D(
          Be.FRAMEBUFFER,
          Be.COLOR_ATTACHMENT0,
          i,
          t.__webglTexture,
          0,
        );
    }
    function nt(e, t) {
      Be.bindRenderbuffer(Be.RENDERBUFFER, e),
        t.depthBuffer && !t.stencilBuffer
          ? (Be.renderbufferStorage(
            Be.RENDERBUFFER,
            Be.DEPTH_COMPONENT16,
            t.width,
            t.height,
          ),
            Be.framebufferRenderbuffer(
              Be.FRAMEBUFFER,
              Be.DEPTH_ATTACHMENT,
              Be.RENDERBUFFER,
              e,
            ))
          : t.depthBuffer && t.stencilBuffer
          ? (Be.renderbufferStorage(
            Be.RENDERBUFFER,
            Be.DEPTH_STENCIL,
            t.width,
            t.height,
          ),
            Be.framebufferRenderbuffer(
              Be.FRAMEBUFFER,
              Be.DEPTH_STENCIL_ATTACHMENT,
              Be.RENDERBUFFER,
              e,
            ))
          : Be.renderbufferStorage(
            Be.RENDERBUFFER,
            Be.RGBA4,
            t.width,
            t.height,
          );
    }
    function ot(e) {
      return e === THREE.NearestFilter ||
          e === THREE.NearestMipMapNearestFilter ||
          e === THREE.NearestMipMapLinearFilter ? Be.NEAREST : Be.LINEAR;
    }
    function at(e) {
      if (e === THREE.RepeatWrapping) return Be.REPEAT;
      if (e === THREE.ClampToEdgeWrapping) return Be.CLAMP_TO_EDGE;
      if (e === THREE.MirroredRepeatWrapping) return Be.MIRRORED_REPEAT;
      if (e === THREE.NearestFilter) return Be.NEAREST;
      if (e === THREE.NearestMipMapNearestFilter) {
        return Be.NEAREST_MIPMAP_NEAREST;
      }
      if (e === THREE.NearestMipMapLinearFilter) {
        return Be.NEAREST_MIPMAP_LINEAR;
      }
      if (e === THREE.LinearFilter) return Be.LINEAR;
      if (e === THREE.LinearMipMapNearestFilter) {
        return Be.LINEAR_MIPMAP_NEAREST;
      }
      if (e === THREE.LinearMipMapLinearFilter) return Be.LINEAR_MIPMAP_LINEAR;
      if (e === THREE.UnsignedByteType) return Be.UNSIGNED_BYTE;
      if (e === THREE.UnsignedShort4444Type) return Be.UNSIGNED_SHORT_4_4_4_4;
      if (e === THREE.UnsignedShort5551Type) return Be.UNSIGNED_SHORT_5_5_5_1;
      if (e === THREE.UnsignedShort565Type) return Be.UNSIGNED_SHORT_5_6_5;
      if (e === THREE.ByteType) return Be.BYTE;
      if (e === THREE.ShortType) return Be.SHORT;
      if (e === THREE.UnsignedShortType) return Be.UNSIGNED_SHORT;
      if (e === THREE.IntType) return Be.INT;
      if (e === THREE.UnsignedIntType) return Be.UNSIGNED_INT;
      if (e === THREE.FloatType) return Be.FLOAT;
      if (e === THREE.AlphaFormat) return Be.ALPHA;
      if (e === THREE.RGBFormat) return Be.RGB;
      if (e === THREE.RGBAFormat) return Be.RGBA;
      if (e === THREE.LuminanceFormat) return Be.LUMINANCE;
      if (e === THREE.LuminanceAlphaFormat) return Be.LUMINANCE_ALPHA;
      if (e === THREE.AddEquation) return Be.FUNC_ADD;
      if (e === THREE.SubtractEquation) return Be.FUNC_SUBTRACT;
      if (e === THREE.ReverseSubtractEquation) return Be.FUNC_REVERSE_SUBTRACT;
      if (e === THREE.ZeroFactor) return Be.ZERO;
      if (e === THREE.OneFactor) return Be.ONE;
      if (e === THREE.SrcColorFactor) return Be.SRC_COLOR;
      if (e === THREE.OneMinusSrcColorFactor) return Be.ONE_MINUS_SRC_COLOR;
      if (e === THREE.SrcAlphaFactor) return Be.SRC_ALPHA;
      if (e === THREE.OneMinusSrcAlphaFactor) return Be.ONE_MINUS_SRC_ALPHA;
      if (e === THREE.DstAlphaFactor) return Be.DST_ALPHA;
      if (e === THREE.OneMinusDstAlphaFactor) return Be.ONE_MINUS_DST_ALPHA;
      if (e === THREE.DstColorFactor) return Be.DST_COLOR;
      if (e === THREE.OneMinusDstColorFactor) return Be.ONE_MINUS_DST_COLOR;
      if (e === THREE.SrcAlphaSaturateFactor) return Be.SRC_ALPHA_SATURATE;
      if (void 0 !== u) {
        if (e === THREE.RGB_S3TC_DXT1_Format) {
          return u.COMPRESSED_RGB_S3TC_DXT1_EXT;
        }
        if (e === THREE.RGBA_S3TC_DXT1_Format) {
          return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        }
        if (e === THREE.RGBA_S3TC_DXT3_Format) {
          return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        }
        if (e === THREE.RGBA_S3TC_DXT5_Format) {
          return u.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }
      }
      return 0;
    }
    this.renderBufferImmediate = function (e, t, i) {
      if (
        e.hasPositions && !e.__webglVertexBuffer &&
        (e.__webglVertexBuffer = Be.createBuffer()),
          e.hasNormals && !e.__webglNormalBuffer &&
          (e.__webglNormalBuffer = Be.createBuffer()),
          e.hasUvs && !e.__webglUvBuffer &&
          (e.__webglUvBuffer = Be.createBuffer()),
          e.hasColors && !e.__webglColorBuffer &&
          (e.__webglColorBuffer = Be.createBuffer()),
          e.hasPositions &&
          (Be.bindBuffer(Be.ARRAY_BUFFER, e.__webglVertexBuffer),
            Be.bufferData(Be.ARRAY_BUFFER, e.positionArray, Be.DYNAMIC_DRAW),
            Be.enableVertexAttribArray(t.attributes.position),
            Be.vertexAttribPointer(
              t.attributes.position,
              3,
              Be.FLOAT,
              !1,
              0,
              0,
            )),
          e.hasNormals
      ) {
        if (
          Be.bindBuffer(Be.ARRAY_BUFFER, e.__webglNormalBuffer),
            i.shading === THREE.FlatShading
        ) {
          var r, n, o, a, s, l, c, h, u, p, f, d = 3 * e.count;
          for (f = 0; f < d; f += 9) {
            a = (p = e.normalArray)[f],
              l = p[f + 1],
              h = p[f + 2],
              s = p[f + 3],
              c = p[f + 4],
              u = p[f + 5],
              r = (a + s + p[f + 6]) / 3,
              n = (l + c + p[f + 7]) / 3,
              o = (h + u + p[f + 8]) / 3,
              p[f] = r,
              p[f + 1] = n,
              p[f + 2] = o,
              p[f + 3] = r,
              p[f + 4] = n,
              p[f + 5] = o,
              p[f + 6] = r,
              p[f + 7] = n,
              p[f + 8] = o;
          }
        }
        Be.bufferData(Be.ARRAY_BUFFER, e.normalArray, Be.DYNAMIC_DRAW),
          Be.enableVertexAttribArray(t.attributes.normal),
          Be.vertexAttribPointer(t.attributes.normal, 3, Be.FLOAT, !1, 0, 0);
      }
      e.hasUvs && i.map &&
      (Be.bindBuffer(Be.ARRAY_BUFFER, e.__webglUvBuffer),
        Be.bufferData(Be.ARRAY_BUFFER, e.uvArray, Be.DYNAMIC_DRAW),
        Be.enableVertexAttribArray(t.attributes.uv),
        Be.vertexAttribPointer(t.attributes.uv, 2, Be.FLOAT, !1, 0, 0)),
        e.hasColors && i.vertexColors !== THREE.NoColors &&
        (Be.bindBuffer(Be.ARRAY_BUFFER, e.__webglColorBuffer),
          Be.bufferData(Be.ARRAY_BUFFER, e.colorArray, Be.DYNAMIC_DRAW),
          Be.enableVertexAttribArray(t.attributes.color),
          Be.vertexAttribPointer(t.attributes.color, 3, Be.FLOAT, !1, 0, 0)),
        Be.drawArrays(Be.TRIANGLES, 0, e.count),
        e.count = 0;
    },
      this.renderBufferDirect = function (e, t, i, r, n, o) {
        if (!1 !== r.visible) {
          var a,
            s,
            l,
            c,
            h = je(e, t, i, r, o),
            u = h.attributes,
            p = n.attributes,
            f = !1,
            d = r.wireframe ? 1 : 0,
            m = 16777215 * n.id + 2 * h.id + d;
          if (m !== H && (H = m, f = !0), f && He(), o instanceof THREE.Mesh) {
            var E = p.index;
            if (E) {
              var g = n.offsets;
              1 < g.length && (f = !0);
              for (var v = 0, y = g.length; v < y; v++) {
                var T = g[v].index;
                if (f) {
                  for (s in u) {
                    l = u[s],
                      a = p[s],
                      0 <= l && (a
                        ? (c = a.itemSize,
                          Be.bindBuffer(Be.ARRAY_BUFFER, a.buffer),
                          xe(l),
                          Be.vertexAttribPointer(
                            l,
                            c,
                            Be.FLOAT,
                            !1,
                            0,
                            T * c * 4,
                          ))
                        : r.defaultAttributeValues &&
                          (2 === r.defaultAttributeValues[s].length
                            ? Be.vertexAttrib2fv(l, r.defaultAttributeValues[s])
                            : 3 === r.defaultAttributeValues[s].length &&
                              Be.vertexAttrib3fv(
                                l,
                                r.defaultAttributeValues[s],
                              )));
                  }
                  Be.bindBuffer(Be.ELEMENT_ARRAY_BUFFER, E.buffer);
                }
                Be.drawElements(
                  Be.TRIANGLES,
                  g[v].count,
                  Be.UNSIGNED_SHORT,
                  2 * g[v].start,
                ),
                  k.info.render.calls++,
                  k.info.render.vertices += g[v].count,
                  k.info.render.faces += g[v].count / 3;
              }
            } else {
              if (f) {
                for (s in u) {
                  "index" !== s && (l = u[s],
                    a = p[s],
                    0 <= l && (a
                      ? (c = a.itemSize,
                        Be.bindBuffer(Be.ARRAY_BUFFER, a.buffer),
                        xe(l),
                        Be.vertexAttribPointer(l, c, Be.FLOAT, !1, 0, 0))
                      : r.defaultAttributeValues &&
                        r.defaultAttributeValues[s] &&
                        (2 === r.defaultAttributeValues[s].length
                          ? Be.vertexAttrib2fv(l, r.defaultAttributeValues[s])
                          : 3 === r.defaultAttributeValues[s].length &&
                            Be.vertexAttrib3fv(
                              l,
                              r.defaultAttributeValues[s],
                            ))));
                }
              }
              var R = n.attributes.position;
              Be.drawArrays(Be.TRIANGLES, 0, R.numItems / 3),
                k.info.render.calls++,
                k.info.render.vertices += R.numItems / 3,
                k.info.render.faces += R.numItems / 3 / 3;
            }
          } else if (o instanceof THREE.ParticleSystem) {
            if (f) {
              for (s in u) {
                l = u[s],
                  a = p[s],
                  0 <= l && (a
                    ? (c = a.itemSize,
                      Be.bindBuffer(Be.ARRAY_BUFFER, a.buffer),
                      xe(l),
                      Be.vertexAttribPointer(l, c, Be.FLOAT, !1, 0, 0))
                    : r.defaultAttributeValues && r.defaultAttributeValues[s] &&
                      (2 === r.defaultAttributeValues[s].length
                        ? Be.vertexAttrib2fv(l, r.defaultAttributeValues[s])
                        : 3 === r.defaultAttributeValues[s].length &&
                          Be.vertexAttrib3fv(l, r.defaultAttributeValues[s])));
              }
              R = p.position;
              Be.drawArrays(Be.POINTS, 0, R.numItems / 3),
                k.info.render.calls++,
                k.info.render.points += R.numItems / 3;
            }
          } else if (o instanceof THREE.Line && f) {
            for (s in u) {
              l = u[s],
                a = p[s],
                0 <= l && (a
                  ? (c = a.itemSize,
                    Be.bindBuffer(Be.ARRAY_BUFFER, a.buffer),
                    xe(l),
                    Be.vertexAttribPointer(l, c, Be.FLOAT, !1, 0, 0))
                  : r.defaultAttributeValues && r.defaultAttributeValues[s] &&
                    (2 === r.defaultAttributeValues[s].length
                      ? Be.vertexAttrib2fv(l, r.defaultAttributeValues[s])
                      : 3 === r.defaultAttributeValues[s].length &&
                        Be.vertexAttrib3fv(l, r.defaultAttributeValues[s])));
            }
            var x = o.type === THREE.LineStrip ? Be.LINE_STRIP : Be.LINES;
            Ke(r.linewidth);
            R = p.position;
            Be.drawArrays(x, 0, R.numItems / 3),
              k.info.render.calls++,
              k.info.render.points += R.numItems;
          }
        }
      },
      this.renderBuffer = function (e, t, i, r, n, o) {
        if (!1 !== r.visible) {
          var a,
            s,
            l,
            c = je(e, t, i, r, o),
            h = c.attributes,
            u = !1,
            p = r.wireframe ? 1 : 0,
            f = 16777215 * n.id + 2 * c.id + p;
          if (
            f !== H && (H = f, u = !0),
              u && He(),
              !r.morphTargets && 0 <= h.position
                ? u &&
                  (Be.bindBuffer(Be.ARRAY_BUFFER, n.__webglVertexBuffer),
                    xe(h.position),
                    Be.vertexAttribPointer(h.position, 3, Be.FLOAT, !1, 0, 0))
                : o.morphTargetBase && function (e, t, i) {
                  var r = e.program.attributes;
                  -1 !== i.morphTargetBase && 0 <= r.position
                    ? (Be.bindBuffer(
                      Be.ARRAY_BUFFER,
                      t.__webglMorphTargetsBuffers[i.morphTargetBase],
                    ),
                      xe(r.position),
                      Be.vertexAttribPointer(r.position, 3, Be.FLOAT, !1, 0, 0))
                    : 0 <= r.position &&
                      (Be.bindBuffer(Be.ARRAY_BUFFER, t.__webglVertexBuffer),
                        xe(r.position),
                        Be.vertexAttribPointer(
                          r.position,
                          3,
                          Be.FLOAT,
                          !1,
                          0,
                          0,
                        ));
                  if (i.morphTargetForcedOrder.length) {
                    for (
                      var n = 0,
                        o = i.morphTargetForcedOrder,
                        a = i.morphTargetInfluences;
                      n < e.numSupportedMorphTargets && n < o.length;
                    ) {
                      0 <= r["morphTarget" + n] &&
                      (Be.bindBuffer(
                        Be.ARRAY_BUFFER,
                        t.__webglMorphTargetsBuffers[o[n]],
                      ),
                        xe(r["morphTarget" + n]),
                        Be.vertexAttribPointer(
                          r["morphTarget" + n],
                          3,
                          Be.FLOAT,
                          !1,
                          0,
                          0,
                        )),
                        0 <= r["morphNormal" + n] && e.morphNormals &&
                        (Be.bindBuffer(
                          Be.ARRAY_BUFFER,
                          t.__webglMorphNormalsBuffers[o[n]],
                        ),
                          xe(r["morphNormal" + n]),
                          Be.vertexAttribPointer(
                            r["morphNormal" + n],
                            3,
                            Be.FLOAT,
                            !1,
                            0,
                            0,
                          )),
                        i.__webglMorphTargetInfluences[n] = a[o[n]],
                        n++;
                    }
                  } else {
                    var s, l, c = [], a = i.morphTargetInfluences, h = a.length;
                    for (l = 0; l < h; l++) 0 < (s = a[l]) && c.push([s, l]);
                    c.length > e.numSupportedMorphTargets
                      ? (c.sort(we), c.length = e.numSupportedMorphTargets)
                      : c.length > e.numSupportedMorphNormals
                      ? c.sort(we)
                      : 0 === c.length && c.push([0, 0]);
                    for (var u, n = 0; n < e.numSupportedMorphTargets;) {
                      c[n]
                        ? (u = c[n][1],
                          0 <= r["morphTarget" + n] &&
                          (Be.bindBuffer(
                            Be.ARRAY_BUFFER,
                            t.__webglMorphTargetsBuffers[u],
                          ),
                            xe(r["morphTarget" + n]),
                            Be.vertexAttribPointer(
                              r["morphTarget" + n],
                              3,
                              Be.FLOAT,
                              !1,
                              0,
                              0,
                            )),
                          0 <= r["morphNormal" + n] && e.morphNormals &&
                          (Be.bindBuffer(
                            Be.ARRAY_BUFFER,
                            t.__webglMorphNormalsBuffers[u],
                          ),
                            xe(r["morphNormal" + n]),
                            Be.vertexAttribPointer(
                              r["morphNormal" + n],
                              3,
                              Be.FLOAT,
                              !1,
                              0,
                              0,
                            )),
                          i.__webglMorphTargetInfluences[n] = a[u])
                        : i.__webglMorphTargetInfluences[n] = 0, n++;
                    }
                  }
                  null !== e.program.uniforms.morphTargetInfluences &&
                    Be.uniform1fv(
                      e.program.uniforms.morphTargetInfluences,
                      i.__webglMorphTargetInfluences,
                    );
                }(r, n, o),
              u
          ) {
            if (n.__webglCustomAttributesList) {
              for (
                s = 0, l = n.__webglCustomAttributesList.length; s < l; s++
              ) {
                0 <=
                    h[
                      (a = n.__webglCustomAttributesList[s]).buffer
                        .belongsToAttribute
                    ] &&
                  (Be.bindBuffer(Be.ARRAY_BUFFER, a.buffer),
                    xe(h[a.buffer.belongsToAttribute]),
                    Be.vertexAttribPointer(
                      h[a.buffer.belongsToAttribute],
                      a.size,
                      Be.FLOAT,
                      !1,
                      0,
                      0,
                    ));
              }
            }
            0 <= h.color &&
            (0 < o.geometry.colors.length || 0 < o.geometry.faces.length
              ? (Be.bindBuffer(Be.ARRAY_BUFFER, n.__webglColorBuffer),
                xe(h.color),
                Be.vertexAttribPointer(h.color, 3, Be.FLOAT, !1, 0, 0))
              : r.defaultAttributeValues &&
                Be.vertexAttrib3fv(h.color, r.defaultAttributeValues.color)),
              0 <= h.normal &&
              (Be.bindBuffer(Be.ARRAY_BUFFER, n.__webglNormalBuffer),
                xe(h.normal),
                Be.vertexAttribPointer(h.normal, 3, Be.FLOAT, !1, 0, 0)),
              0 <= h.tangent &&
              (Be.bindBuffer(Be.ARRAY_BUFFER, n.__webglTangentBuffer),
                xe(h.tangent),
                Be.vertexAttribPointer(h.tangent, 4, Be.FLOAT, !1, 0, 0)),
              0 <= h.uv &&
              (o.geometry.faceVertexUvs[0]
                ? (Be.bindBuffer(Be.ARRAY_BUFFER, n.__webglUVBuffer),
                  xe(h.uv),
                  Be.vertexAttribPointer(h.uv, 2, Be.FLOAT, !1, 0, 0))
                : r.defaultAttributeValues &&
                  Be.vertexAttrib2fv(h.uv, r.defaultAttributeValues.uv)),
              0 <= h.uv2 &&
              (o.geometry.faceVertexUvs[1]
                ? (Be.bindBuffer(Be.ARRAY_BUFFER, n.__webglUV2Buffer),
                  xe(h.uv2),
                  Be.vertexAttribPointer(h.uv2, 2, Be.FLOAT, !1, 0, 0))
                : r.defaultAttributeValues &&
                  Be.vertexAttrib2fv(h.uv2, r.defaultAttributeValues.uv2)),
              r.skinning && 0 <= h.skinIndex && 0 <= h.skinWeight &&
              (Be.bindBuffer(Be.ARRAY_BUFFER, n.__webglSkinIndicesBuffer),
                xe(h.skinIndex),
                Be.vertexAttribPointer(h.skinIndex, 4, Be.FLOAT, !1, 0, 0),
                Be.bindBuffer(Be.ARRAY_BUFFER, n.__webglSkinWeightsBuffer),
                xe(h.skinWeight),
                Be.vertexAttribPointer(h.skinWeight, 4, Be.FLOAT, !1, 0, 0)),
              0 <= h.lineDistance &&
              (Be.bindBuffer(Be.ARRAY_BUFFER, n.__webglLineDistanceBuffer),
                xe(h.lineDistance),
                Be.vertexAttribPointer(h.lineDistance, 1, Be.FLOAT, !1, 0, 0));
          }
          if (o instanceof THREE.Mesh) {
            r.wireframe
              ? (Ke(r.wireframeLinewidth),
                u &&
                Be.bindBuffer(Be.ELEMENT_ARRAY_BUFFER, n.__webglLineBuffer),
                Be.drawElements(
                  Be.LINES,
                  n.__webglLineCount,
                  Be.UNSIGNED_SHORT,
                  0,
                ))
              : (u &&
                Be.bindBuffer(Be.ELEMENT_ARRAY_BUFFER, n.__webglFaceBuffer),
                Be.drawElements(
                  Be.TRIANGLES,
                  n.__webglFaceCount,
                  Be.UNSIGNED_SHORT,
                  0,
                )),
              k.info.render.calls++,
              k.info.render.vertices += n.__webglFaceCount,
              k.info.render.faces += n.__webglFaceCount / 3;
          } else if (o instanceof THREE.Line) {
            var d = o.type === THREE.LineStrip ? Be.LINE_STRIP : Be.LINES;
            Ke(r.linewidth),
              Be.drawArrays(d, 0, n.__webglLineCount),
              k.info.render.calls++;
          } else {
            o instanceof THREE.ParticleSystem &&
              (Be.drawArrays(Be.POINTS, 0, n.__webglParticleCount),
                k.info.render.calls++,
                k.info.render.points += n.__webglParticleCount);
          }
        }
      },
      this.render = function (e, t, i, r) {
        if (t instanceof THREE.Camera != !1) {
          var n, o, a, s, l, c, h = e.__lights, u = e.fog;
          for (
            x = -1,
              (Y = !0) === e.autoUpdate && e.updateMatrixWorld(),
              void 0 === t.parent && t.updateMatrixWorld(),
              t.matrixWorldInverse.getInverse(t.matrixWorld),
              G.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
              j.setFromMatrix(G),
              this.autoUpdateObjects && this.initWebGLObjects(e),
              _e(this.renderPluginsPre, e, t),
              k.info.render.calls = 0,
              k.info.render.vertices = 0,
              k.info.render.faces = 0,
              k.info.render.points = 0,
              this.setRenderTarget(i),
              (this.autoClear || r) &&
              this.clear(
                this.autoClearColor,
                this.autoClearDepth,
                this.autoClearStencil,
              ),
              n = 0,
              o = (l = e.__webglObjects).length;
            n < o;
            n++
          ) {
            s = (a = l[n]).object,
              a.id = n,
              a.render = !1,
              s.visible &&
              ((s instanceof THREE.Mesh || s instanceof THREE.ParticleSystem) &&
                  s.frustumCulled && !j.intersectsObject(s) ||
                (Xe(s, t),
                  Ae(a),
                  (a.render = !0) === this.sortObjects &&
                  (null !== s.renderDepth
                    ? a.z = s.renderDepth
                    : (X.getPositionFromMatrix(s.matrixWorld),
                      X.applyProjection(G),
                      a.z = X.z))));
          }
          for (
            this.sortObjects && l.sort(be),
              n = 0,
              o = (l = e.__webglObjectsImmediate).length;
            n < o;
            n++
          ) {
            (s = (a = l[n]).object).visible && (Xe(s, t), Ce(a));
          }
          if (e.overrideMaterial) {
            var p = e.overrideMaterial;
            this.setBlending(
              p.blending,
              p.blendEquation,
              p.blendSrc,
              p.blendDst,
            ),
              this.setDepthTest(p.depthTest),
              this.setDepthWrite(p.depthWrite),
              Qe(p.polygonOffset, p.polygonOffsetFactor, p.polygonOffsetUnits),
              Me(e.__webglObjects, !1, "", t, h, u, !0, p),
              Se(e.__webglObjectsImmediate, "", t, h, u, !1, p);
          } else {
            p = null;
            this.setBlending(THREE.NoBlending),
              Me(e.__webglObjects, !0, "opaque", t, h, u, !1, p),
              Se(e.__webglObjectsImmediate, "opaque", t, h, u, !1, p),
              Me(e.__webglObjects, !1, "transparent", t, h, u, !0, p),
              Se(e.__webglObjectsImmediate, "transparent", t, h, u, !0, p);
          }
          _e(this.renderPluginsPost, e, t),
            i && i.generateMipmaps && i.minFilter !== THREE.NearestFilter &&
            i.minFilter !== THREE.LinearFilter &&
            ((c = i) instanceof THREE.WebGLRenderTargetCube
              ? (Be.bindTexture(Be.TEXTURE_CUBE_MAP, c.__webglTexture),
                Be.generateMipmap(Be.TEXTURE_CUBE_MAP),
                Be.bindTexture(Be.TEXTURE_CUBE_MAP, null))
              : (Be.bindTexture(Be.TEXTURE_2D, c.__webglTexture),
                Be.generateMipmap(Be.TEXTURE_2D),
                Be.bindTexture(Be.TEXTURE_2D, null))),
            this.setDepthTest(!0),
            this.setDepthWrite(!0);
        } else {
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.",
          );
        }
      },
      this.renderImmediateObject = function (e, t, i, r, n) {
        var o = je(e, t, i, r, n);
        H = -1,
          k.setMaterialFaces(r),
          n.immediateRenderCallback ? n.immediateRenderCallback(o, Be, j)
          : n.render(function (e) {
            k.renderBufferImmediate(e, o, r);
          });
      },
      this.initWebGLObjects = function (e) {
        for (
          e.__webglObjects ||
          (e.__webglObjects = [],
            e.__webglObjectsImmediate = [],
            e.__webglSprites = [],
            e.__webglFlares = []);
          e.__objectsAdded.length;
        ) {
          Le(e.__objectsAdded[0], e), e.__objectsAdded.splice(0, 1);
        }
        for (; e.__objectsRemoved.length;) {
          Ve(e.__objectsRemoved[0], e), e.__objectsRemoved.splice(0, 1);
        }
        for (var t = 0, i = e.__webglObjects.length; t < i; t++) {
          var r = e.__webglObjects[t].object;
          void 0 === r.__webglInit &&
          (void 0 !== r.__webglActive && Ve(r, e), Le(r, e)), De(r);
        }
      },
      this.initMaterial = function (e, t, i, r) {
        var n, o, a, s, l, c, h, u, p;
        e.addEventListener("dispose", pe),
          e instanceof THREE.MeshDepthMaterial
            ? h = "depth"
            : e instanceof THREE.MeshNormalMaterial
            ? h = "normal"
            : e instanceof THREE.MeshBasicMaterial
            ? h = "basic"
            : e instanceof THREE.MeshLambertMaterial
            ? h = "lambert"
            : e instanceof THREE.MeshPhongMaterial
            ? h = "phong"
            : e instanceof THREE.LineBasicMaterial
            ? h = "basic"
            : e instanceof THREE.LineDashedMaterial
            ? h = "dashed"
            : e instanceof THREE.ParticleSystemMaterial &&
              (h = "particle_basic"),
          h &&
          (u = e,
            p = THREE.ShaderLib[h],
            u.uniforms = THREE.UniformsUtils.clone(p.uniforms),
            u.vertexShader = p.vertexShader,
            u.fragmentShader = p.fragmentShader),
          s = function (e) {
            for (
              var t = 0, i = 0, r = 0, n = 0, o = 0, a = e.length; o < a; o++
            ) {
              var s = e[o];
              s.onlyShadow ||
                (s instanceof THREE.DirectionalLight && t++,
                  s instanceof THREE.PointLight && i++,
                  s instanceof THREE.SpotLight && r++,
                  s instanceof THREE.HemisphereLight && n++);
            }
            return { directional: t, point: i, spot: r, hemi: n };
          }(t),
          c = function (e) {
            for (var t = 0, i = 0, r = e.length; i < r; i++) {
              var n = e[i];
              n.castShadow &&
                (n instanceof THREE.SpotLight && t++,
                  n instanceof THREE.DirectionalLight && !n.shadowCascade &&
                  t++);
            }
            return t;
          }(t),
          l = function (e) {
            {
              if (te && e && e.useVertexTexture) return 1024;
              var t = Be.getParameter(Be.MAX_VERTEX_UNIFORM_VECTORS),
                i = Math.floor((t - 20) / 4),
                r = i;
              return void 0 !== e && e instanceof THREE.SkinnedMesh &&
                (r = Math.min(e.bones.length, r)) < e.bones.length &&
                console.warn(
                  "WebGLRenderer: too many bones - " + e.bones.length +
                    ", this GPU supports just " + r +
                    " (try OpenGL instead of ANGLE)",
                ),
                r;
            }
          }(r),
          a = {
            map: !!e.map,
            envMap: !!e.envMap,
            lightMap: !!e.lightMap,
            bumpMap: !!e.bumpMap,
            normalMap: !!e.normalMap,
            specularMap: !!e.specularMap,
            vertexColors: e.vertexColors,
            fog: i,
            useFog: e.fog,
            fogExp: i instanceof THREE.FogExp2,
            sizeAttenuation: e.sizeAttenuation,
            skinning: e.skinning,
            maxBones: l,
            useVertexTexture: te && r && r.useVertexTexture,
            morphTargets: e.morphTargets,
            morphNormals: e.morphNormals,
            maxMorphTargets: this.maxMorphTargets,
            maxMorphNormals: this.maxMorphNormals,
            maxDirLights: s.directional,
            maxPointLights: s.point,
            maxSpotLights: s.spot,
            maxHemiLights: s.hemi,
            maxShadows: c,
            shadowMapEnabled: this.shadowMapEnabled && r.receiveShadow,
            shadowMapType: this.shadowMapType,
            shadowMapDebug: this.shadowMapDebug,
            shadowMapCascade: this.shadowMapCascade,
            alphaTest: e.alphaTest,
            metal: e.metal,
            perPixel: e.perPixel,
            wrapAround: e.wrapAround,
            doubleSided: e.side === THREE.DoubleSide,
            flipSided: e.side === THREE.BackSide,
          },
          e.program = function (e, t, i, r, n, o, a, s) {
            var l, c, h, u, p, f = [];
            e ? f.push(e) : (f.push(t), f.push(i));
            for (h in o) f.push(h), f.push(o[h]);
            for (l in a) f.push(l), f.push(a[l]);
            for (p = f.join(), l = 0, c = _.length; l < c; l++) {
              var d = _[l];
              if (d.code === p) return d.usedTimes++, d.program;
            }
            var m = "SHADOWMAP_TYPE_BASIC";
            a.shadowMapType === THREE.PCFShadowMap ? m = "SHADOWMAP_TYPE_PCF"
            : a.shadowMapType === THREE.PCFSoftShadowMap &&
              (m = "SHADOWMAP_TYPE_PCF_SOFT");
            var E = function (e) {
              var t, i, r = [];
              for (var n in e) {
                !1 !== (t = e[n]) && (i = "#define " + n + " " + t, r.push(i));
              }
              return r.join("\n");
            }(o);
            u = Be.createProgram();
            var g,
              v,
              y,
              T,
              R = [
                "precision " + w + " float;",
                "precision " + w + " int;",
                E,
                ee ? "#define VERTEX_TEXTURES" : "",
                k.gammaInput ? "#define GAMMA_INPUT" : "",
                k.gammaOutput ? "#define GAMMA_OUTPUT" : "",
                k.physicallyBasedShading ? "#define PHYSICALLY_BASED_SHADING"
                : "",
                "#define MAX_DIR_LIGHTS " + a.maxDirLights,
                "#define MAX_POINT_LIGHTS " + a.maxPointLights,
                "#define MAX_SPOT_LIGHTS " + a.maxSpotLights,
                "#define MAX_HEMI_LIGHTS " + a.maxHemiLights,
                "#define MAX_SHADOWS " + a.maxShadows,
                "#define MAX_BONES " + a.maxBones,
                a.map ? "#define USE_MAP" : "",
                a.envMap ? "#define USE_ENVMAP" : "",
                a.lightMap ? "#define USE_LIGHTMAP" : "",
                a.bumpMap ? "#define USE_BUMPMAP" : "",
                a.normalMap ? "#define USE_NORMALMAP" : "",
                a.specularMap ? "#define USE_SPECULARMAP" : "",
                a.vertexColors ? "#define USE_COLOR" : "",
                a.skinning ? "#define USE_SKINNING" : "",
                a.useVertexTexture ? "#define BONE_TEXTURE" : "",
                a.morphTargets ? "#define USE_MORPHTARGETS" : "",
                a.morphNormals ? "#define USE_MORPHNORMALS" : "",
                a.perPixel ? "#define PHONG_PER_PIXEL" : "",
                a.wrapAround ? "#define WRAP_AROUND" : "",
                a.doubleSided ? "#define DOUBLE_SIDED" : "",
                a.flipSided ? "#define FLIP_SIDED" : "",
                a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
                a.shadowMapEnabled ? "#define " + m : "",
                a.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "",
                a.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "",
                a.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
                "uniform mat4 modelMatrix;",
                "uniform mat4 modelViewMatrix;",
                "uniform mat4 projectionMatrix;",
                "uniform mat4 viewMatrix;",
                "uniform mat3 normalMatrix;",
                "uniform vec3 cameraPosition;",
                "attribute vec3 position;",
                "attribute vec3 normal;",
                "attribute vec2 uv;",
                "attribute vec2 uv2;",
                "#ifdef USE_COLOR",
                "attribute vec3 color;",
                "#endif",
                "#ifdef USE_MORPHTARGETS",
                "attribute vec3 morphTarget0;",
                "attribute vec3 morphTarget1;",
                "attribute vec3 morphTarget2;",
                "attribute vec3 morphTarget3;",
                "#ifdef USE_MORPHNORMALS",
                "attribute vec3 morphNormal0;",
                "attribute vec3 morphNormal1;",
                "attribute vec3 morphNormal2;",
                "attribute vec3 morphNormal3;",
                "#else",
                "attribute vec3 morphTarget4;",
                "attribute vec3 morphTarget5;",
                "attribute vec3 morphTarget6;",
                "attribute vec3 morphTarget7;",
                "#endif",
                "#endif",
                "#ifdef USE_SKINNING",
                "attribute vec4 skinIndex;",
                "attribute vec4 skinWeight;",
                "#endif",
                "",
              ].join("\n"),
              x = [
                "precision " + w + " float;",
                "precision " + w + " int;",
                a.bumpMap || a.normalMap
                  ? "#extension GL_OES_standard_derivatives : enable" : "",
                E,
                "#define MAX_DIR_LIGHTS " + a.maxDirLights,
                "#define MAX_POINT_LIGHTS " + a.maxPointLights,
                "#define MAX_SPOT_LIGHTS " + a.maxSpotLights,
                "#define MAX_HEMI_LIGHTS " + a.maxHemiLights,
                "#define MAX_SHADOWS " + a.maxShadows,
                a.alphaTest ? "#define ALPHATEST " + a.alphaTest : "",
                k.gammaInput ? "#define GAMMA_INPUT" : "",
                k.gammaOutput ? "#define GAMMA_OUTPUT" : "",
                k.physicallyBasedShading ? "#define PHYSICALLY_BASED_SHADING"
                : "",
                a.useFog && a.fog ? "#define USE_FOG" : "",
                a.useFog && a.fogExp ? "#define FOG_EXP2" : "",
                a.map ? "#define USE_MAP" : "",
                a.envMap ? "#define USE_ENVMAP" : "",
                a.lightMap ? "#define USE_LIGHTMAP" : "",
                a.bumpMap ? "#define USE_BUMPMAP" : "",
                a.normalMap ? "#define USE_NORMALMAP" : "",
                a.specularMap ? "#define USE_SPECULARMAP" : "",
                a.vertexColors ? "#define USE_COLOR" : "",
                a.metal ? "#define METAL" : "",
                a.perPixel ? "#define PHONG_PER_PIXEL" : "",
                a.wrapAround ? "#define WRAP_AROUND" : "",
                a.doubleSided ? "#define DOUBLE_SIDED" : "",
                a.flipSided ? "#define FLIP_SIDED" : "",
                a.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
                a.shadowMapEnabled ? "#define " + m : "",
                a.shadowMapDebug ? "#define SHADOWMAP_DEBUG" : "",
                a.shadowMapCascade ? "#define SHADOWMAP_CASCADE" : "",
                "uniform mat4 viewMatrix;",
                "uniform vec3 cameraPosition;",
                "",
              ].join("\n"),
              H = Ze("vertex", R + i),
              b = Ze("fragment", x + t);
            Be.attachShader(u, H),
              Be.attachShader(u, b),
              s && Be.bindAttribLocation(u, 0, s);
            Be.linkProgram(u),
              Be.getProgramParameter(u, Be.LINK_STATUS) ||
              (console.error(
                "Could not initialise shader\nVALIDATE_STATUS: " +
                  Be.getProgramParameter(u, Be.VALIDATE_STATUS) +
                  ", gl error [" + Be.getError() + "]",
              ),
                console.error("Program Info Log: " + Be.getProgramInfoLog(u)));
            Be.deleteShader(b),
              Be.deleteShader(H),
              u.uniforms = {},
              u.attributes = {},
              g = [
                "viewMatrix",
                "modelViewMatrix",
                "projectionMatrix",
                "normalMatrix",
                "modelMatrix",
                "cameraPosition",
                "morphTargetInfluences",
              ],
              a.useVertexTexture
                ? (g.push("boneTexture"),
                  g.push("boneTextureWidth"),
                  g.push("boneTextureHeight"))
                : g.push("boneGlobalMatrices");
            for (v in r) g.push(v);
            for (
              function (e, t) {
                var i, r, n;
                for (i = 0, r = t.length; i < r; i++) {
                  n = t[i], e.uniforms[n] = Be.getUniformLocation(e, n);
                }
              }(u, g),
                g = [
                  "position",
                  "normal",
                  "uv",
                  "uv2",
                  "tangent",
                  "color",
                  "skinIndex",
                  "skinWeight",
                  "lineDistance",
                ],
                T = 0;
              T < a.maxMorphTargets;
              T++
            ) {
              g.push("morphTarget" + T);
            }
            for (T = 0; T < a.maxMorphNormals; T++) g.push("morphNormal" + T);
            for (y in n) g.push(y);
            return function (e, t) {
              var i, r, n;
              for (i = 0, r = t.length; i < r; i++) {
                n = t[i], e.attributes[n] = Be.getAttribLocation(e, n);
              }
            }(u, g),
              u.id = M++,
              _.push({ program: u, code: p, usedTimes: 1 }),
              k.info.memory.programs = _.length,
              u;
          }(
            h,
            e.fragmentShader,
            e.vertexShader,
            e.uniforms,
            e.attributes,
            e.defines,
            a,
            e.index0AttributeName,
          );
        var f = e.program.attributes;
        if (e.morphTargets) {
          var d = "morphTarget";
          for (
            o = e.numSupportedMorphTargets = 0; o < this.maxMorphTargets; o++
          ) {
            0 <= f[d + o] && e.numSupportedMorphTargets++;
          }
        }
        if (e.morphNormals) {
          d = "morphNormal";
          for (
            o = e.numSupportedMorphNormals = 0; o < this.maxMorphNormals; o++
          ) {
            0 <= f[d + o] && e.numSupportedMorphNormals++;
          }
        }
        for (n in e.uniformsList = [], e.uniforms) {
          e.uniformsList.push([e.uniforms[n], n]);
        }
      },
      this.setFaceCulling = function (e, t) {
        e === THREE.CullFaceNone ? Be.disable(Be.CULL_FACE)
        : (t === THREE.FrontFaceDirectionCW
          ? Be.frontFace(Be.CW)
          : Be.frontFace(Be.CCW),
          e === THREE.CullFaceBack ? Be.cullFace(Be.BACK)
          : e === THREE.CullFaceFront
            ? Be.cullFace(Be.FRONT)
            : Be.cullFace(Be.FRONT_AND_BACK),
          Be.enable(Be.CULL_FACE));
      },
      this.setMaterialFaces = function (e) {
        var t = e.side === THREE.DoubleSide, i = e.side === THREE.BackSide;
        f !== t &&
        (t ? Be.disable(Be.CULL_FACE) : Be.enable(Be.CULL_FACE), f = t),
          d !== i && (i ? Be.frontFace(Be.CW) : Be.frontFace(Be.CCW), d = i);
      },
      this.setDepthTest = function (e) {
        C !== e &&
          (e ? Be.enable(Be.DEPTH_TEST) : Be.disable(Be.DEPTH_TEST), C = e);
      },
      this.setDepthWrite = function (e) {
        A !== e && (Be.depthMask(e), A = e);
      },
      this.setBlending = function (e, t, i, r) {
        e !== m &&
        (e === THREE.NoBlending
          ? Be.disable(Be.BLEND)
          : e === THREE.AdditiveBlending
          ? (Be.enable(Be.BLEND),
            Be.blendEquation(Be.FUNC_ADD),
            Be.blendFunc(Be.SRC_ALPHA, Be.ONE))
          : e === THREE.SubtractiveBlending
          ? (Be.enable(Be.BLEND),
            Be.blendEquation(Be.FUNC_ADD),
            Be.blendFunc(Be.ZERO, Be.ONE_MINUS_SRC_COLOR))
          : e === THREE.MultiplyBlending
          ? (Be.enable(Be.BLEND),
            Be.blendEquation(Be.FUNC_ADD),
            Be.blendFunc(Be.ZERO, Be.SRC_COLOR))
          : e === THREE.CustomBlending
          ? Be.enable(Be.BLEND)
          : (Be.enable(Be.BLEND),
            Be.blendEquationSeparate(Be.FUNC_ADD, Be.FUNC_ADD),
            Be.blendFuncSeparate(
              Be.SRC_ALPHA,
              Be.ONE_MINUS_SRC_ALPHA,
              Be.ONE,
              Be.ONE_MINUS_SRC_ALPHA,
            )),
          m = e),
          e === THREE.CustomBlending
            ? (t !== g && (Be.blendEquation(at(t)), g = t),
              i === v && r === y || (Be.blendFunc(at(i), at(r)), v = i, y = r))
            : y = v = g = null;
      },
      this.setTexture = function (e, t) {
        if (e.needsUpdate) {
          e.__webglInit ||
          (e.__webglInit = !0,
            e.addEventListener("dispose", he),
            e.__webglTexture = Be.createTexture(),
            k.info.memory.textures++),
            Be.activeTexture(Be.TEXTURE0 + t),
            Be.bindTexture(Be.TEXTURE_2D, e.__webglTexture),
            Be.pixelStorei(Be.UNPACK_FLIP_Y_WEBGL, e.flipY),
            Be.pixelStorei(
              Be.UNPACK_PREMULTIPLY_ALPHA_WEBGL,
              e.premultiplyAlpha,
            ),
            Be.pixelStorei(Be.UNPACK_ALIGNMENT, e.unpackAlignment);
          var i = e.image,
            r = $e(i.width) && $e(i.height),
            n = at(e.format),
            o = at(e.type);
          Je(Be.TEXTURE_2D, e, r);
          var a, s = e.mipmaps;
          if (e instanceof THREE.DataTexture) {
            if (0 < s.length && r) {
              for (var l = 0, c = s.length; l < c; l++) {
                a = s[l],
                  Be.texImage2D(
                    Be.TEXTURE_2D,
                    l,
                    n,
                    a.width,
                    a.height,
                    0,
                    n,
                    o,
                    a.data,
                  );
              }
              e.generateMipmaps = !1;
            } else {
              Be.texImage2D(
                Be.TEXTURE_2D,
                0,
                n,
                i.width,
                i.height,
                0,
                n,
                o,
                i.data,
              );
            }
          } else if (e instanceof THREE.CompressedTexture) {
            for (l = 0, c = s.length; l < c; l++) {
              a = s[l],
                e.format !== THREE.RGBAFormat
                  ? Be.compressedTexImage2D(
                    Be.TEXTURE_2D,
                    l,
                    n,
                    a.width,
                    a.height,
                    0,
                    a.data,
                  )
                  : Be.texImage2D(
                    Be.TEXTURE_2D,
                    l,
                    n,
                    a.width,
                    a.height,
                    0,
                    n,
                    o,
                    a.data,
                  );
            }
          } else if (0 < s.length && r) {
            for (l = 0, c = s.length; l < c; l++) {
              a = s[l], Be.texImage2D(Be.TEXTURE_2D, l, n, n, o, a);
            }
            e.generateMipmaps = !1;
          } else Be.texImage2D(Be.TEXTURE_2D, 0, n, n, o, e.image);
          e.generateMipmaps && r && Be.generateMipmap(Be.TEXTURE_2D),
            e.needsUpdate = !1,
            e.onUpdate && e.onUpdate();
        } else {
          Be.activeTexture(Be.TEXTURE0 + t),
            Be.bindTexture(Be.TEXTURE_2D, e.__webglTexture);
        }
      },
      this.setRenderTarget = function (e) {
        var t, i, r, n, o, a = e instanceof THREE.WebGLRenderTargetCube;
        if (e && !e.__webglFramebuffer) {
          void 0 === e.depthBuffer && (e.depthBuffer = !0),
            void 0 === e.stencilBuffer && (e.stencilBuffer = !0),
            e.addEventListener("dispose", ue),
            e.__webglTexture = Be.createTexture(),
            k.info.memory.textures++;
          var s = $e(e.width) && $e(e.height), l = at(e.format), c = at(e.type);
          if (a) {
            e.__webglFramebuffer = [],
              e.__webglRenderbuffer = [],
              Be.bindTexture(Be.TEXTURE_CUBE_MAP, e.__webglTexture),
              Je(Be.TEXTURE_CUBE_MAP, e, s);
            for (var h = 0; h < 6; h++) {
              e.__webglFramebuffer[h] = Be.createFramebuffer(),
                e.__webglRenderbuffer[h] = Be.createRenderbuffer(),
                Be.texImage2D(
                  Be.TEXTURE_CUBE_MAP_POSITIVE_X + h,
                  0,
                  l,
                  e.width,
                  e.height,
                  0,
                  l,
                  c,
                  null,
                ),
                rt(
                  e.__webglFramebuffer[h],
                  e,
                  Be.TEXTURE_CUBE_MAP_POSITIVE_X + h,
                ),
                nt(e.__webglRenderbuffer[h], e);
            }
            s && Be.generateMipmap(Be.TEXTURE_CUBE_MAP);
          } else {
            e.__webglFramebuffer = Be.createFramebuffer(),
              e.shareDepthFrom
                ? e.__webglRenderbuffer = e.shareDepthFrom.__webglRenderbuffer
                : e.__webglRenderbuffer = Be.createRenderbuffer(),
              Be.bindTexture(Be.TEXTURE_2D, e.__webglTexture),
              Je(Be.TEXTURE_2D, e, s),
              Be.texImage2D(
                Be.TEXTURE_2D,
                0,
                l,
                e.width,
                e.height,
                0,
                l,
                c,
                null,
              ),
              rt(e.__webglFramebuffer, e, Be.TEXTURE_2D),
              e.shareDepthFrom
                ? e.depthBuffer && !e.stencilBuffer
                  ? Be.framebufferRenderbuffer(
                    Be.FRAMEBUFFER,
                    Be.DEPTH_ATTACHMENT,
                    Be.RENDERBUFFER,
                    e.__webglRenderbuffer,
                  )
                  : e.depthBuffer && e.stencilBuffer &&
                    Be.framebufferRenderbuffer(
                      Be.FRAMEBUFFER,
                      Be.DEPTH_STENCIL_ATTACHMENT,
                      Be.RENDERBUFFER,
                      e.__webglRenderbuffer,
                    )
                : nt(e.__webglRenderbuffer, e),
              s && Be.generateMipmap(Be.TEXTURE_2D);
          }
          a
            ? Be.bindTexture(Be.TEXTURE_CUBE_MAP, null)
            : Be.bindTexture(Be.TEXTURE_2D, null),
            Be.bindRenderbuffer(Be.RENDERBUFFER, null),
            Be.bindFramebuffer(Be.FRAMEBUFFER, null);
        }
        e
          ? (t = a
            ? e.__webglFramebuffer[e.activeCubeFace]
            : e.__webglFramebuffer,
            i = e.width,
            r = e.height,
            o = n = 0)
          : (t = null, i = z, r = U, n = N, o = V),
          t !== p &&
          (Be.bindFramebuffer(Be.FRAMEBUFFER, t),
            Be.viewport(n, o, i, r),
            p = t),
          B = i,
          O = r;
      },
      this.shadowMapPlugin = new THREE.ShadowMapPlugin(),
      this.addPrePlugin(this.shadowMapPlugin),
      this.addPostPlugin(new THREE.SpritePlugin()),
      this.addPostPlugin(new THREE.LensFlarePlugin());
  },
  THREE.WebGLRenderTarget = function (e, t, i) {
    this.width = e,
      this.height = t,
      i = i || {},
      this.wrapS = void 0 !== i.wrapS ? i.wrapS : THREE.ClampToEdgeWrapping,
      this.wrapT = void 0 !== i.wrapT ? i.wrapT : THREE.ClampToEdgeWrapping,
      this.magFilter = void 0 !== i.magFilter ? i.magFilter
      : THREE.LinearFilter,
      this.minFilter = void 0 !== i.minFilter ? i.minFilter
      : THREE.LinearMipMapLinearFilter,
      this.anisotropy = void 0 !== i.anisotropy ? i.anisotropy : 1,
      this.offset = new THREE.Vector2(0, 0),
      this.repeat = new THREE.Vector2(1, 1),
      this.format = void 0 !== i.format ? i.format : THREE.RGBAFormat,
      this.type = void 0 !== i.type ? i.type : THREE.UnsignedByteType,
      this.depthBuffer = void 0 === i.depthBuffer || i.depthBuffer,
      this.stencilBuffer = void 0 === i.stencilBuffer || i.stencilBuffer,
      this.generateMipmaps = !0,
      this.shareDepthFrom = null;
  },
  THREE.WebGLRenderTarget.prototype = {
    constructor: THREE.WebGLRenderTarget,
    clone: function () {
      var e = new THREE.WebGLRenderTarget(this.width, this.height);
      return e.wrapS = this.wrapS,
        e.wrapT = this.wrapT,
        e.magFilter = this.magFilter,
        e.minFilter = this.minFilter,
        e.anisotropy = this.anisotropy,
        e.offset.copy(this.offset),
        e.repeat.copy(this.repeat),
        e.format = this.format,
        e.type = this.type,
        e.depthBuffer = this.depthBuffer,
        e.stencilBuffer = this.stencilBuffer,
        e.generateMipmaps = this.generateMipmaps,
        e.shareDepthFrom = this.shareDepthFrom,
        e;
    },
    dispose: function () {
      this.dispatchEvent({ type: "dispose" });
    },
  },
  THREE.EventDispatcher.prototype.apply(THREE.WebGLRenderTarget.prototype),
  THREE.WebGLRenderTargetCube = function (e, t, i) {
    THREE.WebGLRenderTarget.call(this, e, t, i), this.activeCubeFace = 0;
  },
  THREE.WebGLRenderTargetCube.prototype = Object.create(
    THREE.WebGLRenderTarget.prototype,
  ),
  THREE.RenderableVertex = function () {
    this.positionWorld = new THREE.Vector3(),
      this.positionScreen = new THREE.Vector4(),
      this.visible = !0;
  },
  THREE.RenderableVertex.prototype.copy = function (e) {
    this.positionWorld.copy(e.positionWorld),
      this.positionScreen.copy(e.positionScreen);
  },
  THREE.RenderableFace3 = function () {
    this.id = 0,
      this.v1 = new THREE.RenderableVertex(),
      this.v2 = new THREE.RenderableVertex(),
      this.v3 = new THREE.RenderableVertex(),
      this.centroidModel = new THREE.Vector3(),
      this.normalModel = new THREE.Vector3(),
      this.normalModelView = new THREE.Vector3(),
      this.vertexNormalsLength = 0,
      this.vertexNormalsModel = [
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ],
      this.vertexNormalsModelView = [
        new THREE.Vector3(),
        new THREE.Vector3(),
        new THREE.Vector3(),
      ],
      this.color = null,
      this.material = null,
      this.uvs = [[]],
      this.z = 0;
  },
  THREE.RenderableObject = function () {
    this.id = 0, this.object = null, this.z = 0;
  },
  THREE.RenderableSprite = function () {
    this.id = 0,
      this.object = null,
      this.x = 0,
      this.y = 0,
      this.z = 0,
      this.rotation = 0,
      this.scale = new THREE.Vector2(),
      this.material = null;
  },
  THREE.RenderableLine = function () {
    this.id = 0,
      this.v1 = new THREE.RenderableVertex(),
      this.v2 = new THREE.RenderableVertex(),
      this.vertexColors = [new THREE.Color(), new THREE.Color()],
      this.material = null,
      this.z = 0;
  },
  THREE.GeometryUtils = {
    merge: function (e, t, i) {
      var r,
        n,
        o = e.vertices.length,
        a = (e.faceVertexUvs[0].length,
          t instanceof THREE.Mesh
            ? t.geometry
            : t),
        s = e.vertices,
        l = a.vertices,
        c = e.faces,
        h = a.faces,
        u = e.faceVertexUvs[0],
        p = a.faceVertexUvs[0];
      void 0 === i && (i = 0),
        t instanceof THREE.Mesh &&
        (t.matrixAutoUpdate && t.updateMatrix(),
          r = t.matrix,
          n = (new THREE.Matrix3()).getNormalMatrix(r));
      for (var f = 0, d = l.length; f < d; f++) {
        var m = l[f].clone();
        r && m.applyMatrix4(r), s.push(m);
      }
      for (f = 0, d = h.length; f < d; f++) {
        var E, g, v, y = h[f], T = y.vertexNormals, R = y.vertexColors;
        (E = new THREE.Face3(y.a + o, y.b + o, y.c + o)).normal.copy(y.normal),
          n && E.normal.applyMatrix3(n).normalize();
        for (var x = 0, H = T.length; x < H; x++) {
          g = T[x].clone(),
            n && g.applyMatrix3(n).normalize(),
            E.vertexNormals.push(g);
        }
        E.color.copy(y.color);
        for (x = 0, H = R.length; x < H; x++) {
          v = R[x], E.vertexColors.push(v.clone());
        }
        E.materialIndex = y.materialIndex + i,
          E.centroid.copy(y.centroid),
          r && E.centroid.applyMatrix4(r),
          c.push(E);
      }
      for (f = 0, d = p.length; f < d; f++) {
        var b = p[f], w = [];
        for (x = 0, H = b.length; x < H; x++) {
          w.push(new THREE.Vector2(b[x].x, b[x].y));
        }
        u.push(w);
      }
    },
    randomPointInTriangle: function () {
      var s = new THREE.Vector3();
      return function (e, t, i) {
        var r = new THREE.Vector3(),
          n = THREE.Math.random16(),
          o = THREE.Math.random16();
        1 < n + o && (n = 1 - n, o = 1 - o);
        var a = 1 - n - o;
        return r.copy(e),
          r.multiplyScalar(n),
          s.copy(t),
          s.multiplyScalar(o),
          r.add(s),
          s.copy(i),
          s.multiplyScalar(a),
          r.add(s),
          r;
      };
    }(),
    randomPointInFace: function (e, t, i) {
      var r, n, o;
      return r = t.vertices[e.a],
        n = t.vertices[e.b],
        o = t.vertices[e.c],
        THREE.GeometryUtils.randomPointInTriangle(r, n, o);
    },
    randomPointsInGeometry: function (e, t) {
      var i,
        r,
        n,
        o,
        a,
        s = e.faces,
        l = e.vertices,
        c = s.length,
        h = 0,
        u = [];
      for (r = 0; r < c; r++) {
        n = l[(i = s[r]).a],
          o = l[i.b],
          a = l[i.c],
          i._area = THREE.GeometryUtils.triangleArea(n, o, a),
          h += i._area,
          u[r] = h;
      }
      var p, f, d, m = [], E = {};
      for (r = 0; r < t; r++) {
        p = THREE.Math.random16() * h,
          d = p,
          f = function e(t, i) {
            if (i < t) return t;
            var r = t + Math.floor((i - t) / 2);
            return u[r] > d ? e(t, r - 1) : u[r] < d ? e(r + 1, i) : r;
          }(0, u.length - 1),
          m[r] = THREE.GeometryUtils.randomPointInFace(s[f], e, !0),
          E[f] ? E[f] += 1 : E[f] = 1;
      }
      return m;
    },
    triangleArea: function () {
      var r = new THREE.Vector3(), n = new THREE.Vector3();
      return function (e, t, i) {
        return r.subVectors(t, e),
          n.subVectors(i, e),
          r.cross(n),
          .5 * r.length();
      };
    }(),
    center: function (e) {
      e.computeBoundingBox();
      var t = e.boundingBox, i = new THREE.Vector3();
      return i.addVectors(t.min, t.max),
        i.multiplyScalar(-.5),
        e.applyMatrix((new THREE.Matrix4()).makeTranslation(i.x, i.y, i.z)),
        e.computeBoundingBox(),
        i;
    },
    triangulateQuads: function (e) {
      var t, i, r, n, o = [], a = [];
      for (t = 0, i = e.faceVertexUvs.length; t < i; t++) a[t] = [];
      for (t = 0, i = e.faces.length; t < i; t++) {
        var s = e.faces[t];
        for (o.push(s), r = 0, n = e.faceVertexUvs.length; r < n; r++) {
          a[r].push(e.faceVertexUvs[r][t]);
        }
      }
      e.faces = o,
        e.faceVertexUvs = a,
        e.computeCentroids(),
        e.computeFaceNormals(),
        e.computeVertexNormals(),
        e.hasTangents && e.computeTangents();
    },
  },
  THREE.ImageUtils = {
    crossOrigin: "anonymous",
    loadTexture: function (e, t, i, r) {
      var n = new THREE.ImageLoader();
      n.crossOrigin = this.crossOrigin;
      var o = new THREE.Texture(void 0, t),
        a = n.load(e, function () {
          o.needsUpdate = !0, i && i(o);
        });
      return o.image = a, o.sourceFile = e, o;
    },
    loadCompressedTexture: function (e, t, i, r) {
      var n = new THREE.CompressedTexture();
      n.mapping = t;
      var o = new XMLHttpRequest();
      return o.onload = function () {
        var e = o.response, t = THREE.ImageUtils.parseDDS(e, !0);
        n.format = t.format,
          n.mipmaps = t.mipmaps,
          n.image.width = t.width,
          n.image.height = t.height,
          n.generateMipmaps = !1,
          n.needsUpdate = !0,
          i && i(n);
      },
        o.onerror = r,
        o.open("GET", e, !0),
        o.responseType = "arraybuffer",
        o.send(null),
        n;
    },
    loadTextureCube: function (e, t, i, r) {
      var n = [];
      n.loadCount = 0;
      var o = new THREE.Texture();
      o.image = n, void 0 !== t && (o.mapping = t), o.flipY = !1;
      for (var a = 0, s = e.length; a < s; ++a) {
        var l = new Image();
        (n[a] = l).onload = function () {
          n.loadCount += 1,
            6 === n.loadCount && (o.needsUpdate = !0, i && i(o));
        },
          l.onerror = r,
          l.crossOrigin = this.crossOrigin,
          l.src = e[a];
      }
      return o;
    },
    loadCompressedTextureCube: function (e, t, o, i) {
      var a = [];
      a.loadCount = 0;
      var s = new THREE.CompressedTexture();
      s.image = a,
        void 0 !== t && (s.mapping = t),
        s.flipY = !1,
        s.generateMipmaps = !1;
      var r = function (i, r) {
        return function () {
          var e = i.response, t = THREE.ImageUtils.parseDDS(e, !0);
          r.format = t.format,
            r.mipmaps = t.mipmaps,
            r.width = t.width,
            r.height = t.height,
            a.loadCount += 1,
            6 === a.loadCount &&
            (s.format = t.format, s.needsUpdate = !0, o && o(s));
        };
      };
      if (e instanceof Array) {
        for (var n = 0, l = e.length; n < l; ++n) {
          var c = {};
          a[n] = c, (u = new XMLHttpRequest()).onload = r(u, c), u.onerror = i;
          var h = e[n];
          u.open("GET", h, !0), u.responseType = "arraybuffer", u.send(null);
        }
      } else {
        var u;
        h = e;
        (u = new XMLHttpRequest()).onload = function () {
          var e = u.response, t = THREE.ImageUtils.parseDDS(e, !0);
          if (t.isCubemap) {
            for (var i = t.mipmaps.length / t.mipmapCount, r = 0; r < i; r++) {
              a[r] = { mipmaps: [] };
              for (
                var n = 0; n < t.mipmapCount; n++
              ) {
                a[r].mipmaps.push(t.mipmaps[r * t.mipmapCount + n]),
                  a[r].format = t.format,
                  a[r].width = t.width,
                  a[r].height = t.height;
              }
            }
            s.format = t.format, s.needsUpdate = !0, o && o(s);
          }
        },
          u.onerror = i,
          u.open("GET", h, !0),
          u.responseType = "arraybuffer",
          u.send(null);
      }
      return s;
    },
    loadDDSTexture: function (e, t, o, i) {
      var a = [];
      a.loadCount = 0;
      var s = new THREE.CompressedTexture();
      s.image = a,
        void 0 !== t && (s.mapping = t),
        s.flipY = !1,
        s.generateMipmaps = !1;
      var l = new XMLHttpRequest();
      return l.onload = function () {
        var e = l.response, t = THREE.ImageUtils.parseDDS(e, !0);
        if (t.isCubemap) {
          for (var i = t.mipmaps.length / t.mipmapCount, r = 0; r < i; r++) {
            a[r] = { mipmaps: [] };
            for (var n = 0; n < t.mipmapCount; n++) {
              a[r].mipmaps.push(t.mipmaps[r * t.mipmapCount + n]),
                a[r].format = t.format,
                a[r].width = t.width,
                a[r].height = t.height;
            }
          }
        } else {
          s.image.width = t.width,
            s.image.height = t.height,
            s.mipmaps = t.mipmaps;
        }
        s.format = t.format, s.needsUpdate = !0, o && o(s);
      },
        l.onerror = i,
        l.open("GET", e, !0),
        l.responseType = "arraybuffer",
        l.send(null),
        s;
    },
    parseDDS: function (e, t) {
      var i = {
        mipmaps: [],
        width: 0,
        height: 0,
        format: null,
        mipmapCount: 1,
      };
      function r(e) {
        return e.charCodeAt(0) + (e.charCodeAt(1) << 8) +
          (e.charCodeAt(2) << 16) + (e.charCodeAt(3) << 24);
      }
      function n(e, t, i, r) {
        for (
          var n = i * r * 4,
            o = new Uint8Array(e, t, n),
            a = new Uint8Array(n),
            s = 0,
            l = 0,
            c = 0;
          c < r;
          c++
        ) {
          for (var h = 0; h < i; h++) {
            var u = o[l], p = o[++l], f = o[++l], d = o[++l];
            l++, a[s] = f, a[++s] = p, a[++s] = u, a[++s] = d, s++;
          }
        }
        return a;
      }
      var o,
        a = r("DXT1"),
        s = r("DXT3"),
        l = r("DXT5"),
        c = new Int32Array(e, 0, 31);
      if (542327876 !== c[0]) {
        return console.error(
          "ImageUtils.parseDDS(): Invalid magic number in DDS header",
        ),
          i;
      }
      if (4 & !c[20]) {
        return console.error(
          "ImageUtils.parseDDS(): Unsupported format, must contain a FourCC code",
        ),
          i;
      }
      var h, u = c[21], p = !1;
      switch (u) {
        case a:
          o = 8, i.format = THREE.RGB_S3TC_DXT1_Format;
          break;
        case s:
          o = 16, i.format = THREE.RGBA_S3TC_DXT3_Format;
          break;
        case l:
          o = 16, i.format = THREE.RGBA_S3TC_DXT5_Format;
          break;
        default:
          if (
            !(32 == c[22] && 16711680 & c[23] && 65280 & c[24] && 255 & c[25] &&
              4278190080 & c[26])
          ) {
            return console.error(
              "ImageUtils.parseDDS(): Unsupported FourCC code: ",
              (h = u,
                String.fromCharCode(
                  255 & h,
                  h >> 8 & 255,
                  h >> 16 & 255,
                  h >> 24 & 255,
                )),
            ),
              i;
          }
          p = !0, o = 64, i.format = THREE.RGBAFormat;
      }
      i.mipmapCount = 1,
        131072 & c[2] && !1 !== t && (i.mipmapCount = Math.max(1, c[7])),
        i.isCubemap = !!(512 & c[28]),
        i.width = c[4],
        i.height = c[3];
      for (
        var f = c[1] + 4,
          d = i.width,
          m = i.height,
          E = i.isCubemap ? 6 : 1,
          g = 0;
        g < E;
        g++
      ) {
        for (var v = 0; v < i.mipmapCount; v++) {
          if (p) var y = (T = n(e, f, d, m)).length;
          else {
            y = Math.max(4, d) / 4 * Math.max(4, m) / 4 * o;
            var T = new Uint8Array(e, f, y);
          }
          var R = { data: T, width: d, height: m };
          i.mipmaps.push(R),
            f += y,
            d = Math.max(.5 * d, 1),
            m = Math.max(.5 * m, 1);
        }
        d = i.width, m = i.height;
      }
      return i;
    },
    getNormalMap: function (e, t) {
      var i = function (e, t) {
        return [e[0] - t[0], e[1] - t[1], e[2] - t[2]];
      };
      t |= 1;
      var r = e.width, n = e.height, o = document.createElement("canvas");
      o.width = r, o.height = n;
      var a = o.getContext("2d");
      a.drawImage(e, 0, 0);
      for (
        var s,
          l,
          c,
          h,
          u = a.getImageData(0, 0, r, n).data,
          p = a.createImageData(r, n),
          f = p.data,
          d = 0;
        d < r;
        d++
      ) {
        for (var m = 0; m < n; m++) {
          var E = m - 1 < 0 ? 0 : m - 1,
            g = n - 1 < m + 1 ? n - 1 : m + 1,
            v = d - 1 < 0 ? 0 : d - 1,
            y = r - 1 < d + 1 ? r - 1 : d + 1,
            T = [],
            R = [0, 0, u[4 * (m * r + d)] / 255 * t];
          T.push([-1, 0, u[4 * (m * r + v)] / 255 * t]),
            T.push([-1, -1, u[4 * (E * r + v)] / 255 * t]),
            T.push([0, -1, u[4 * (E * r + d)] / 255 * t]),
            T.push([1, -1, u[4 * (E * r + y)] / 255 * t]),
            T.push([1, 0, u[4 * (m * r + y)] / 255 * t]),
            T.push([1, 1, u[4 * (g * r + y)] / 255 * t]),
            T.push([0, 1, u[4 * (g * r + d)] / 255 * t]),
            T.push([-1, 1, u[4 * (g * r + v)] / 255 * t]);
          for (var x = [], H = T.length, b = 0; b < H; b++) {
            var w = T[b], _ = T[(b + 1) % H];
            w = i(w, R),
              _ = i(_, R),
              x.push(
                (h = _,
                  s = [
                    (c = w)[1] * h[2] - c[2] * h[1],
                    c[2] * h[0] - c[0] * h[2],
                    c[0] * h[1] - c[1] * h[0],
                  ],
                  void 0,
                  l = Math.sqrt(s[0] * s[0] + s[1] * s[1] + s[2] * s[2]),
                  [s[0] / l, s[1] / l, s[2] / l]),
              );
          }
          var M = [0, 0, 0];
          for (b = 0; b < x.length; b++) {
            M[0] += x[b][0], M[1] += x[b][1], M[2] += x[b][2];
          }
          M[0] /= x.length, M[1] /= x.length, M[2] /= x.length;
          var S = 4 * (m * r + d);
          f[S] = (M[0] + 1) / 2 * 255 | 0,
            f[S + 1] = (M[1] + 1) / 2 * 255 | 0,
            f[S + 2] = 255 * M[2] | 0,
            f[S + 3] = 255;
        }
      }
      return a.putImageData(p, 0, 0), o;
    },
    generateDataTexture: function (e, t, i) {
      for (
        var r = e * t,
          n = new Uint8Array(3 * r),
          o = Math.floor(255 * i.r),
          a = Math.floor(255 * i.g),
          s = Math.floor(255 * i.b),
          l = 0;
        l < r;
        l++
      ) {
        n[3 * l] = o, n[3 * l + 1] = a, n[3 * l + 2] = s;
      }
      var c = new THREE.DataTexture(n, e, t, THREE.RGBFormat);
      return c.needsUpdate = !0, c;
    },
  },
  THREE.SceneUtils = {
    createMultiMaterialObject: function (e, t) {
      for (var i = new THREE.Object3D(), r = 0, n = t.length; r < n; r++) {i
          .add(new THREE.Mesh(e, t[r]));}
      return i;
    },
    detach: function (e, t, i) {
      e.applyMatrix(t.matrixWorld), t.remove(e), i.add(e);
    },
    attach: function (e, t, i) {
      var r = new THREE.Matrix4();
      r.getInverse(i.matrixWorld), e.applyMatrix(r), t.remove(e), i.add(e);
    },
  },
  THREE.FontUtils = {
    faces: {},
    face: "helvetiker",
    weight: "normal",
    style: "normal",
    size: 150,
    divisions: 10,
    getFace: function () {
      return this.faces[this.face][this.weight][this.style];
    },
    loadFace: function (e) {
      var t = e.familyName.toLowerCase();
      this.faces[t] = this.faces[t] || {},
        this.faces[t][e.cssFontWeight] = this.faces[t][e.cssFontWeight] || {},
        this.faces[t][e.cssFontWeight][e.cssFontStyle] = e;
      this.faces[t][e.cssFontWeight][e.cssFontStyle] = e;
      return e;
    },
    drawText: function (e) {
      var t,
        i = this.getFace(),
        r = this.size / i.resolution,
        n = 0,
        o = String(e).split(""),
        a = o.length,
        s = [];
      for (t = 0; t < a; t++) {
        var l = new THREE.Path(), c = this.extractGlyphPoints(o[t], i, r, n, l);
        n += c.offset, s.push(c.path);
      }
      return { paths: s, offset: n / 2 };
    },
    extractGlyphPoints: function (e, t, i, r, n) {
      var o,
        a,
        s,
        l,
        c,
        h,
        u,
        p,
        f,
        d,
        m,
        E,
        g,
        v,
        y,
        T,
        R,
        x,
        H = [],
        b = t.glyphs[e] || t.glyphs["?"];
      if (b) {
        if (b.o) {
          for (
            c =
              (l = b._cachedOutline || (b._cachedOutline = b.o.split(" ")))
                .length,
              u = h = i,
              o = 0;
            o < c;
          ) {
            switch (l[o++]) {
              case "m":
                p = l[o++] * h + r, f = l[o++] * u, n.moveTo(p, f);
                break;
              case "l":
                p = l[o++] * h + r, f = l[o++] * u, n.lineTo(p, f);
                break;
              case "q":
                if (
                  d = l[o++] * h + r,
                    m = l[o++] * u,
                    v = l[o++] * h + r,
                    y = l[o++] * u,
                    n.quadraticCurveTo(v, y, d, m),
                    x = H[H.length - 1]
                ) {
                  for (
                    E = x.x, g = x.y, a = 1, s = this.divisions; a <= s; a++
                  ) {
                    var w = a / s;
                    THREE.Shape.Utils.b2(w, E, v, d),
                      THREE.Shape.Utils.b2(w, g, y, m);
                  }
                }
                break;
              case "b":
                if (
                  d = l[o++] * h + r,
                    m = l[o++] * u,
                    v = l[o++] * h + r,
                    y = l[o++] * -u,
                    T = l[o++] * h + r,
                    R = l[o++] * -u,
                    n.bezierCurveTo(d, m, v, y, T, R),
                    x = H[H.length - 1]
                ) {
                  for (
                    E = x.x, g = x.y, a = 1, s = this.divisions; a <= s; a++
                  ) {
                    w = a / s,
                      THREE.Shape.Utils.b3(w, E, v, T, d),
                      THREE.Shape.Utils.b3(w, g, y, R, m);
                  }
                }
            }
          }
        }
        return { offset: b.ha * i, path: n };
      }
    },
  },
  THREE.FontUtils.generateShapes = function (e, t) {
    var i = void 0 !== (t = t || {}).size ? t.size : 100,
      r = void 0 !== t.curveSegments ? t.curveSegments : 4,
      n = void 0 !== t.font ? t.font : "helvetiker",
      o = void 0 !== t.weight ? t.weight : "normal",
      a = void 0 !== t.style ? t.style : "normal";
    THREE.FontUtils.size = i,
      THREE.FontUtils.divisions = r,
      THREE.FontUtils.face = n,
      THREE.FontUtils.weight = o,
      THREE.FontUtils.style = a;
    for (
      var s = THREE.FontUtils.drawText(e).paths, l = [], c = 0, h = s.length;
      c < h;
      c++
    ) {
      Array.prototype.push.apply(l, s[c].toShapes());
    }
    return l;
  },
  function (e) {
    var E = function (e) {
        for (var t = e.length, i = 0, r = t - 1, n = 0; n < t; r = n++) {
          i += e[r].x * e[n].y - e[n].x * e[r].y;
        }
        return .5 * i;
      },
      g = function (e, t, i, r, n, o) {
        var a, s, l, c, h, u, p, f, d, m, E, g, v, y, T;
        if (
          s = e[o[t]].x,
            l = e[o[t]].y,
            c = e[o[i]].x,
            h = e[o[i]].y,
            u = e[o[r]].x,
            (c - s) * ((p = e[o[r]].y) - l) - (h - l) * (u - s) < 1e-10
        ) {
          return !1;
        }
        for (
          m = u - c,
            E = p - h,
            g = s - u,
            v = l - p,
            y = c - s,
            T = h - l,
            a = 0;
          a < n;
          a++
        ) {
          if (
            a !== t && a !== i && a !== r &&
            (f = e[o[a]].x,
              -1e-10 <= m * ((d = e[o[a]].y) - h) - E * (f - c) &&
              -1e-10 <= g * (d - p) - v * (f - u) &&
              -1e-10 <= y * (d - l) - T * (f - s))
          ) {
            return !1;
          }
        }
        return !0;
      };
    e.Triangulate = function (e, t) {
      var i = e.length;
      if (i < 3) return null;
      var r, n, o, a = [], s = [], l = [];
      if (0 < E(e)) for (n = 0; n < i; n++) s[n] = n;
      else for (n = 0; n < i; n++) s[n] = i - 1 - n;
      var c = i, h = 2 * c;
      for (n = c - 1; 2 < c;) {
        if (h-- <= 0) {
          return console.log("Warning, unable to triangulate polygon!"),
            t ? l : a;
        }
        if (
          c <= (r = n) && (r = 0),
            c <= (n = r + 1) && (n = 0),
            c <= (o = n + 1) && (o = 0),
            g(e, r, n, o, c, s)
        ) {
          var u, p, f, d, m;
          for (
            u = s[r],
              p = s[n],
              f = s[o],
              a.push([e[u], e[p], e[f]]),
              l.push([s[r], s[n], s[o]]),
              m = (d = n) + 1;
            m < c;
            d++, m++
          ) {
            s[d] = s[m];
          }
          h = 2 * --c;
        }
      }
      return t ? l : a;
    }, e.Triangulate.area = E;
  }(THREE.FontUtils),
  self._typeface_js = {
    faces: THREE.FontUtils.faces,
    loadFace: THREE.FontUtils.loadFace,
  },
  THREE.typeface_js = self._typeface_js,
  THREE.Curve = function () {},
  THREE.Curve.prototype.getPoint = function (e) {
    return console.log("Warning, getPoint() not implemented!"), null;
  },
  THREE.Curve.prototype.getPointAt = function (e) {
    var t = this.getUtoTmapping(e);
    return this.getPoint(t);
  },
  THREE.Curve.prototype.getPoints = function (e) {
    e || (e = 5);
    var t, i = [];
    for (t = 0; t <= e; t++) i.push(this.getPoint(t / e));
    return i;
  },
  THREE.Curve.prototype.getSpacedPoints = function (e) {
    e || (e = 5);
    var t, i = [];
    for (t = 0; t <= e; t++) i.push(this.getPointAt(t / e));
    return i;
  },
  THREE.Curve.prototype.getLength = function () {
    var e = this.getLengths();
    return e[e.length - 1];
  },
  THREE.Curve.prototype.getLengths = function (e) {
    if (
      e || (e = this.__arcLengthDivisions ? this.__arcLengthDivisions : 200),
        this.cacheArcLengths && this.cacheArcLengths.length == e + 1 &&
        !this.needsUpdate
    ) {
      return this.cacheArcLengths;
    }
    this.needsUpdate = !1;
    var t, i, r = [], n = this.getPoint(0), o = 0;
    for (r.push(0), i = 1; i <= e; i++) {
      o += (t = this.getPoint(i / e)).distanceTo(n), r.push(o), n = t;
    }
    return this.cacheArcLengths = r;
  },
  THREE.Curve.prototype.updateArcLengths = function () {
    this.needsUpdate = !0, this.getLengths();
  },
  THREE.Curve.prototype.getUtoTmapping = function (e, t) {
    var i, r = this.getLengths(), n = 0, o = r.length;
    i = t || e * r[o - 1];
    for (var a, s = 0, l = o - 1; s <= l;) {
      if ((a = r[n = Math.floor(s + (l - s) / 2)] - i) < 0) s = n + 1;
      else {
        if (!(0 < a)) {
          l = n;
          break;
        }
        l = n - 1;
      }
    }
    if (r[n = l] == i) return n / (o - 1);
    var c = r[n];
    return (n + (i - c) / (r[n + 1] - c)) / (o - 1);
  },
  THREE.Curve.prototype.getTangent = function (e) {
    var t = e - 1e-4, i = e + 1e-4;
    t < 0 && (t = 0), 1 < i && (i = 1);
    var r = this.getPoint(t);
    return this.getPoint(i).clone().sub(r).normalize();
  },
  THREE.Curve.prototype.getTangentAt = function (e) {
    var t = this.getUtoTmapping(e);
    return this.getTangent(t);
  },
  THREE.Curve.Utils = {
    tangentQuadraticBezier: function (e, t, i, r) {
      return 2 * (1 - e) * (i - t) + 2 * e * (r - i);
    },
    tangentCubicBezier: function (e, t, i, r, n) {
      return -3 * t * (1 - e) * (1 - e) + 3 * i * (1 - e) * (1 - e) -
        6 * e * i * (1 - e) + 6 * e * r * (1 - e) - 3 * e * e * r +
        3 * e * e * n;
    },
    tangentSpline: function (e, t, i, r, n) {
      return 6 * e * e - 6 * e + (3 * e * e - 4 * e + 1) +
        (-6 * e * e + 6 * e) + (3 * e * e - 2 * e);
    },
    interpolate: function (e, t, i, r, n) {
      var o = .5 * (i - e), a = .5 * (r - t), s = n * n;
      return (2 * t - 2 * i + o + a) * (n * s) +
        (-3 * t + 3 * i - 2 * o - a) * s + o * n + t;
    },
  },
  THREE.Curve.create = function (e, t) {
    return e.prototype = Object.create(THREE.Curve.prototype),
      e.prototype.getPoint = t,
      e;
  },
  THREE.CurvePath = function () {
    this.curves = [], this.bends = [], this.autoClose = !1;
  },
  THREE.CurvePath.prototype = Object.create(THREE.Curve.prototype),
  THREE.CurvePath.prototype.add = function (e) {
    this.curves.push(e);
  },
  THREE.CurvePath.prototype.checkConnection = function () {},
  THREE.CurvePath.prototype.closePath = function () {
    var e = this.curves[0].getPoint(0),
      t = this.curves[this.curves.length - 1].getPoint(1);
    e.equals(t) || this.curves.push(new THREE.LineCurve(t, e));
  },
  THREE.CurvePath.prototype.getPoint = function (e) {
    for (
      var t, i = e * this.getLength(), r = this.getCurveLengths(), n = 0;
      n < r.length;
    ) {
      if (r[n] >= i) {
        var o = 1 - (r[n] - i) / (t = this.curves[n]).getLength();
        return t.getPointAt(o);
      }
      n++;
    }
    return null;
  },
  THREE.CurvePath.prototype.getLength = function () {
    var e = this.getCurveLengths();
    return e[e.length - 1];
  },
  THREE.CurvePath.prototype.getCurveLengths = function () {
    if (this.cacheLengths && this.cacheLengths.length == this.curves.length) {
      return this.cacheLengths;
    }
    var e, t = [], i = 0, r = this.curves.length;
    for (e = 0; e < r; e++) i += this.curves[e].getLength(), t.push(i);
    return this.cacheLengths = t;
  },
  THREE.CurvePath.prototype.getBoundingBox = function () {
    var e, t, i, r, n, o, a, s, l, c, h = this.getPoints();
    e = t = Number.NEGATIVE_INFINITY, r = n = Number.POSITIVE_INFINITY;
    var u = h[0] instanceof THREE.Vector3;
    for (
      c = u ? new THREE.Vector3() : new THREE.Vector2(), s = 0, l = h.length;
      s < l;
      s++
    ) {
      (a = h[s]).x > e ? e = a.x : a.x < r && (r = a.x),
        a.y > t ? t = a.y : a.y < n && (n = a.y),
        u && (a.z > i ? i = a.z : a.z < o && (o = a.z)),
        c.add(a);
    }
    var p = { minX: r, minY: n, maxX: e, maxY: t, centroid: c.divideScalar(l) };
    return u && (p.maxZ = i, p.minZ = o), p;
  },
  THREE.CurvePath.prototype.createPointsGeometry = function (e) {
    var t = this.getPoints(e, !0);
    return this.createGeometry(t);
  },
  THREE.CurvePath.prototype.createSpacedPointsGeometry = function (e) {
    var t = this.getSpacedPoints(e, !0);
    return this.createGeometry(t);
  },
  THREE.CurvePath.prototype.createGeometry = function (e) {
    for (var t = new THREE.Geometry(), i = 0; i < e.length; i++) {
      t.vertices.push(new THREE.Vector3(e[i].x, e[i].y, e[i].z || 0));
    }
    return t;
  },
  THREE.CurvePath.prototype.addWrapPath = function (e) {
    this.bends.push(e);
  },
  THREE.CurvePath.prototype.getTransformedPoints = function (e, t) {
    var i, r, n = this.getPoints(e);
    for (t || (t = this.bends), i = 0, r = t.length; i < r; i++) {
      n = this.getWrapPoints(n, t[i]);
    }
    return n;
  },
  THREE.CurvePath.prototype.getTransformedSpacedPoints = function (e, t) {
    var i, r, n = this.getSpacedPoints(e);
    for (t || (t = this.bends), i = 0, r = t.length; i < r; i++) {
      n = this.getWrapPoints(n, t[i]);
    }
    return n;
  },
  THREE.CurvePath.prototype.getWrapPoints = function (e, t) {
    var i, r, n, o, a, s, l = this.getBoundingBox();
    for (i = 0, r = e.length; i < r; i++) {
      o = (n = e[i]).x, a = n.y, s = o / l.maxX, s = t.getUtoTmapping(s, o);
      var c = t.getPoint(s), h = t.getNormalVector(s).multiplyScalar(a);
      n.x = c.x + h.x, n.y = c.y + h.y;
    }
    return e;
  },
  THREE.Gyroscope = function () {
    THREE.Object3D.call(this);
  },
  THREE.Gyroscope.prototype = Object.create(THREE.Object3D.prototype),
  THREE.Gyroscope.prototype.updateMatrixWorld = function (e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
      (this.parent
        ? (this.matrixWorld.multiplyMatrices(
          this.parent.matrixWorld,
          this.matrix,
        ),
          this.matrixWorld.decompose(
            this.translationWorld,
            this.quaternionWorld,
            this.scaleWorld,
          ),
          this.matrix.decompose(
            this.translationObject,
            this.quaternionObject,
            this.scaleObject,
          ),
          this.matrixWorld.compose(
            this.translationWorld,
            this.quaternionObject,
            this.scaleWorld,
          ))
        : this.matrixWorld.copy(this.matrix),
        e = !(this.matrixWorldNeedsUpdate = !1));
    for (var t = 0, i = this.children.length; t < i; t++) {
      this.children[t].updateMatrixWorld(e);
    }
  },
  THREE.Gyroscope.prototype.translationWorld = new THREE.Vector3(),
  THREE.Gyroscope.prototype.translationObject = new THREE.Vector3(),
  THREE.Gyroscope.prototype.quaternionWorld = new THREE.Quaternion(),
  THREE.Gyroscope.prototype.quaternionObject = new THREE.Quaternion(),
  THREE.Gyroscope.prototype.scaleWorld = new THREE.Vector3(),
  THREE.Gyroscope.prototype.scaleObject = new THREE.Vector3(),
  THREE.Path = function (e) {
    THREE.CurvePath.call(this), this.actions = [], e && this.fromPoints(e);
  },
  THREE.Path.prototype = Object.create(THREE.CurvePath.prototype),
  THREE.PathActions = {
    MOVE_TO: "moveTo",
    LINE_TO: "lineTo",
    QUADRATIC_CURVE_TO: "quadraticCurveTo",
    BEZIER_CURVE_TO: "bezierCurveTo",
    CSPLINE_THRU: "splineThru",
    ARC: "arc",
    ELLIPSE: "ellipse",
  },
  THREE.Path.prototype.fromPoints = function (e) {
    this.moveTo(e[0].x, e[0].y);
    for (var t = 1, i = e.length; t < i; t++) this.lineTo(e[t].x, e[t].y);
  },
  THREE.Path.prototype.moveTo = function (e, t) {
    var i = Array.prototype.slice.call(arguments);
    this.actions.push({ action: THREE.PathActions.MOVE_TO, args: i });
  },
  THREE.Path.prototype.lineTo = function (e, t) {
    var i = Array.prototype.slice.call(arguments),
      r = this.actions[this.actions.length - 1].args,
      n = r[r.length - 2],
      o = r[r.length - 1],
      a = new THREE.LineCurve(new THREE.Vector2(n, o), new THREE.Vector2(e, t));
    this.curves.push(a),
      this.actions.push({ action: THREE.PathActions.LINE_TO, args: i });
  },
  THREE.Path.prototype.quadraticCurveTo = function (e, t, i, r) {
    var n = Array.prototype.slice.call(arguments),
      o = this.actions[this.actions.length - 1].args,
      a = o[o.length - 2],
      s = o[o.length - 1],
      l = new THREE.QuadraticBezierCurve(
        new THREE.Vector2(a, s),
        new THREE.Vector2(e, t),
        new THREE.Vector2(i, r),
      );
    this.curves.push(l),
      this.actions.push({
        action: THREE.PathActions.QUADRATIC_CURVE_TO,
        args: n,
      });
  },
  THREE.Path.prototype.bezierCurveTo = function (e, t, i, r, n, o) {
    var a = Array.prototype.slice.call(arguments),
      s = this.actions[this.actions.length - 1].args,
      l = s[s.length - 2],
      c = s[s.length - 1],
      h = new THREE.CubicBezierCurve(
        new THREE.Vector2(l, c),
        new THREE.Vector2(e, t),
        new THREE.Vector2(i, r),
        new THREE.Vector2(n, o),
      );
    this.curves.push(h),
      this.actions.push({ action: THREE.PathActions.BEZIER_CURVE_TO, args: a });
  },
  THREE.Path.prototype.splineThru = function (e) {
    var t = Array.prototype.slice.call(arguments),
      i = this.actions[this.actions.length - 1].args,
      r = i[i.length - 2],
      n = i[i.length - 1],
      o = [new THREE.Vector2(r, n)];
    Array.prototype.push.apply(o, e);
    var a = new THREE.SplineCurve(o);
    this.curves.push(a),
      this.actions.push({ action: THREE.PathActions.CSPLINE_THRU, args: t });
  },
  THREE.Path.prototype.arc = function (e, t, i, r, n, o) {
    var a = this.actions[this.actions.length - 1].args,
      s = a[a.length - 2],
      l = a[a.length - 1];
    this.absarc(e + s, t + l, i, r, n, o);
  },
  THREE.Path.prototype.absarc = function (e, t, i, r, n, o) {
    this.absellipse(e, t, i, i, r, n, o);
  },
  THREE.Path.prototype.ellipse = function (e, t, i, r, n, o, a) {
    var s = this.actions[this.actions.length - 1].args,
      l = s[s.length - 2],
      c = s[s.length - 1];
    this.absellipse(e + l, t + c, i, r, n, o, a);
  },
  THREE.Path.prototype.absellipse = function (e, t, i, r, n, o, a) {
    var s = Array.prototype.slice.call(arguments),
      l = new THREE.EllipseCurve(e, t, i, r, n, o, a);
    this.curves.push(l);
    var c = l.getPoint(1);
    s.push(c.x),
      s.push(c.y),
      this.actions.push({ action: THREE.PathActions.ELLIPSE, args: s });
  },
  THREE.Path.prototype.getSpacedPoints = function (e, t) {
    e || (e = 40);
    for (var i = [], r = 0; r < e; r++) i.push(this.getPoint(r / e));
    return i;
  },
  THREE.Path.prototype.getPoints = function (e, t) {
    if (this.useSpacedPoints) {
      return console.log("tata"), this.getSpacedPoints(e, t);
    }
    e = e || 12;
    var i, r, n, o, a, s, l, c, h, u, p, f, d, m, E, g, v, y, T = [];
    for (i = 0, r = this.actions.length; i < r; i++) {
      switch (o = (n = this.actions[i]).action, a = n.args, o) {
        case THREE.PathActions.MOVE_TO:
        case THREE.PathActions.LINE_TO:
          T.push(new THREE.Vector2(a[0], a[1]));
          break;
        case THREE.PathActions.QUADRATIC_CURVE_TO:
          for (
            s = a[2],
              l = a[3],
              u = a[0],
              p = a[1],
              0 < T.length
                ? (f = (m = T[T.length - 1]).x, d = m.y)
                : (f = (m = this.actions[i - 1].args)[m.length - 2],
                  d = m[m.length - 1]),
              E = 1;
            E <= e;
            E++
          ) {
            g = E / e,
              v = THREE.Shape.Utils.b2(g, f, u, s),
              y = THREE.Shape.Utils.b2(g, d, p, l),
              T.push(new THREE.Vector2(v, y));
          }
          break;
        case THREE.PathActions.BEZIER_CURVE_TO:
          for (
            s = a[4],
              l = a[5],
              u = a[0],
              p = a[1],
              c = a[2],
              h = a[3],
              0 < T.length
                ? (f = (m = T[T.length - 1]).x, d = m.y)
                : (f = (m = this.actions[i - 1].args)[m.length - 2],
                  d = m[m.length - 1]),
              E = 1;
            E <= e;
            E++
          ) {
            g = E / e,
              v = THREE.Shape.Utils.b3(g, f, u, c, s),
              y = THREE.Shape.Utils.b3(g, d, p, h, l),
              T.push(new THREE.Vector2(v, y));
          }
          break;
        case THREE.PathActions.CSPLINE_THRU:
          m = this.actions[i - 1].args;
          var R = [new THREE.Vector2(m[m.length - 2], m[m.length - 1])],
            x = e * a[0].length;
          R = R.concat(a[0]);
          var H = new THREE.SplineCurve(R);
          for (E = 1; E <= x; E++) {
            T.push(H.getPointAt(E / x));
          }
          break;
        case THREE.PathActions.ARC:
          var b = a[0],
            w = a[1],
            _ = a[2],
            M = a[3],
            S = a[4],
            C = !!a[5],
            A = S - M,
            L = 2 * e;
          for (E = 1; E <= L; E++) {
            g = E / L,
              C || (g = 1 - g),
              P = M + g * A,
              v = b + _ * Math.cos(P),
              y = w + _ * Math.sin(P),
              T.push(new THREE.Vector2(v, y));
          }
          break;
        case THREE.PathActions.ELLIPSE:
          b = a[0], w = a[1];
          var P, D = a[2], F = a[3];
          M = a[4], S = a[5], C = !!a[6], A = S - M, L = 2 * e;
          for (E = 1; E <= L; E++) {
            g = E / L,
              C || (g = 1 - g),
              P = M + g * A,
              v = b + D * Math.cos(P),
              y = w + F * Math.sin(P),
              T.push(new THREE.Vector2(v, y));
          }
      }
    }
    var N = T[T.length - 1];
    return Math.abs(N.x - T[0].x) < 1e-10 && Math.abs(N.y - T[0].y) < 1e-10 &&
      T.splice(T.length - 1, 1),
      t && T.push(T[0]),
      T;
  },
  THREE.Path.prototype.toShapes = function (e) {
    var t, i, r, n, o, a = [], s = new THREE.Path();
    for (t = 0, i = this.actions.length; t < i; t++) {
      o = (r = this.actions[t]).args,
        (n = r.action) == THREE.PathActions.MOVE_TO && 0 != s.actions.length &&
        (a.push(s), s = new THREE.Path()),
        s[n].apply(s, o);
    }
    if (0 != s.actions.length && a.push(s), 0 == a.length) return [];
    var l, c, h, u = [];
    if (1 == a.length) {
      return c = a[0],
        (h = new THREE.Shape()).actions = c.actions,
        h.curves = c.curves,
        u.push(h),
        u;
    }
    var p = !THREE.Shape.Utils.isClockWise(a[0].getPoints());
    if (p = e ? !p : p) {
      for (h = new THREE.Shape(), t = 0, i = a.length; t < i; t++) {
        c = a[t],
          l = THREE.Shape.Utils.isClockWise(c.getPoints()),
          (l = e ? !l : l)
            ? (h.actions = c.actions,
              h.curves = c.curves,
              u.push(h),
              h = new THREE.Shape())
            : h.holes.push(c);
      }
    } else {
      for (h = void 0, t = 0, i = a.length; t < i; t++) {
        c = a[t],
          l = THREE.Shape.Utils.isClockWise(c.getPoints()),
          (l = e ? !l : l)
            ? (h && u.push(h),
              (h = new THREE.Shape()).actions = c.actions,
              h.curves = c.curves)
            : h.holes.push(c);
      }
      u.push(h);
    }
    return u;
  },
  THREE.Shape = function () {
    THREE.Path.apply(this, arguments), this.holes = [];
  },
  THREE.Shape.prototype = Object.create(THREE.Path.prototype),
  THREE.Shape.prototype.extrude = function (e) {
    return new THREE.ExtrudeGeometry(this, e);
  },
  THREE.Shape.prototype.makeGeometry = function (e) {
    return new THREE.ShapeGeometry(this, e);
  },
  THREE.Shape.prototype.getPointsHoles = function (e) {
    var t, i = this.holes.length, r = [];
    for (t = 0; t < i; t++) {
      r[t] = this.holes[t].getTransformedPoints(e, this.bends);
    }
    return r;
  },
  THREE.Shape.prototype.getSpacedPointsHoles = function (e) {
    var t, i = this.holes.length, r = [];
    for (t = 0; t < i; t++) {
      r[t] = this.holes[t].getTransformedSpacedPoints(e, this.bends);
    }
    return r;
  },
  THREE.Shape.prototype.extractAllPoints = function (e) {
    return {
      shape: this.getTransformedPoints(e),
      holes: this.getPointsHoles(e),
    };
  },
  THREE.Shape.prototype.extractPoints = function (e) {
    return this.useSpacedPoints ? this.extractAllSpacedPoints(e)
    : this.extractAllPoints(e);
  },
  THREE.Shape.prototype.extractAllSpacedPoints = function (e) {
    return {
      shape: this.getTransformedSpacedPoints(e),
      holes: this.getSpacedPointsHoles(e),
    };
  },
  THREE.Shape.Utils = {
    removeHoles: function (e, t) {
      var i,
        r,
        n,
        o,
        a,
        s,
        l,
        c,
        h,
        u,
        p,
        f,
        d,
        m,
        E,
        g,
        v = e.concat(),
        y = v.concat(),
        T = [];
      for (a = 0; a < t.length; a++) {
        for (
          l = t[a],
            Array.prototype.push.apply(y, l),
            c = Number.POSITIVE_INFINITY,
            s = 0;
          s < l.length;
          s++
        ) {
          p = l[s];
          var R = [];
          for (u = 0; u < v.length; u++) {
            f = v[u],
              h = p.distanceToSquared(f),
              R.push(h),
              h < c && (c = h, n = s, o = u);
          }
        }
        i = 0 <= o - 1 ? o - 1 : v.length - 1,
          r = 0 <= n - 1 ? n - 1 : l.length - 1;
        var x = [l[n], v[o], v[i]],
          H = THREE.FontUtils.Triangulate.area(x),
          b = [l[n], l[r], v[o]],
          w = THREE.FontUtils.Triangulate.area(b),
          _ = o,
          M = n;
        n += -1,
          (o += 1) < 0 && (o += v.length),
          o %= v.length,
          n < 0 && (n += l.length),
          n %= l.length,
          i = 0 <= o - 1 ? o - 1 : v.length - 1,
          r = 0 <= n - 1 ? n - 1 : l.length - 1,
          x = [l[n], v[o], v[i]];
        var S = THREE.FontUtils.Triangulate.area(x);
        b = [l[n], l[r], v[o]],
          S + THREE.FontUtils.Triangulate.area(b) < H + w &&
          (n = M,
            (o = _) < 0 && (o += v.length),
            o %= v.length,
            n < 0 && (n += l.length),
            n %= l.length,
            i = 0 <= o - 1 ? o - 1 : v.length - 1,
            r = 0 <= n - 1 ? n - 1 : l.length - 1),
          d = v.slice(0, o),
          m = v.slice(o),
          E = l.slice(n),
          g = l.slice(0, n);
        var C = [l[n], v[o], v[i]], A = [l[n], l[r], v[o]];
        T.push(C), T.push(A), v = d.concat(E).concat(g).concat(m);
      }
      return { shape: v, isolatedPts: T, allpoints: y };
    },
    triangulateShape: function (e, t) {
      var i,
        r,
        n,
        o,
        a,
        s,
        l = THREE.Shape.Utils.removeHoles(e, t),
        c = l.shape,
        h = l.allpoints,
        u = l.isolatedPts,
        p = THREE.FontUtils.Triangulate(c, !1),
        f = {};
      for (
        i = 0, r = h.length; i < r; i++
      ) {
        void 0 !== f[a = h[i].x + ":" + h[i].y] &&
        console.log("Duplicate point", a), f[a] = i;
      }
      for (i = 0, r = p.length; i < r; i++) {
        for (o = p[i], n = 0; n < 3; n++) {
          void 0 !== (s = f[a = o[n].x + ":" + o[n].y]) && (o[n] = s);
        }
      }
      for (i = 0, r = u.length; i < r; i++) {
        for (o = u[i], n = 0; n < 3; n++) {
          void 0 !== (s = f[a = o[n].x + ":" + o[n].y]) && (o[n] = s);
        }
      }
      return p.concat(u);
    },
    isClockWise: function (e) {
      return THREE.FontUtils.Triangulate.area(e) < 0;
    },
    b2p0: function (e, t) {
      var i = 1 - e;
      return i * i * t;
    },
    b2p1: function (e, t) {
      return 2 * (1 - e) * e * t;
    },
    b2p2: function (e, t) {
      return e * e * t;
    },
    b2: function (e, t, i, r) {
      return this.b2p0(e, t) + this.b2p1(e, i) + this.b2p2(e, r);
    },
    b3p0: function (e, t) {
      var i = 1 - e;
      return i * i * i * t;
    },
    b3p1: function (e, t) {
      var i = 1 - e;
      return 3 * i * i * e * t;
    },
    b3p2: function (e, t) {
      return 3 * (1 - e) * e * e * t;
    },
    b3p3: function (e, t) {
      return e * e * e * t;
    },
    b3: function (e, t, i, r, n) {
      return this.b3p0(e, t) + this.b3p1(e, i) + this.b3p2(e, r) +
        this.b3p3(e, n);
    },
  },
  THREE.LineCurve = function (e, t) {
    this.v1 = e, this.v2 = t;
  },
  THREE.LineCurve.prototype = Object.create(THREE.Curve.prototype),
  THREE.LineCurve.prototype.getPoint = function (e) {
    var t = this.v2.clone().sub(this.v1);
    return t.multiplyScalar(e).add(this.v1), t;
  },
  THREE.LineCurve.prototype.getPointAt = function (e) {
    return this.getPoint(e);
  },
  THREE.LineCurve.prototype.getTangent = function (e) {
    return this.v2.clone().sub(this.v1).normalize();
  },
  THREE.QuadraticBezierCurve = function (e, t, i) {
    this.v0 = e, this.v1 = t, this.v2 = i;
  },
  THREE.QuadraticBezierCurve.prototype = Object.create(THREE.Curve.prototype),
  THREE.QuadraticBezierCurve.prototype.getPoint = function (e) {
    var t, i;
    return t = THREE.Shape.Utils.b2(e, this.v0.x, this.v1.x, this.v2.x),
      i = THREE.Shape.Utils.b2(e, this.v0.y, this.v1.y, this.v2.y),
      new THREE.Vector2(t, i);
  },
  THREE.QuadraticBezierCurve.prototype.getTangent = function (e) {
    var t, i;
    t = THREE.Curve.Utils.tangentQuadraticBezier(
      e,
      this.v0.x,
      this.v1.x,
      this.v2.x,
    ),
      i = THREE.Curve.Utils.tangentQuadraticBezier(
        e,
        this.v0.y,
        this.v1.y,
        this.v2.y,
      );
    var r = new THREE.Vector2(t, i);
    return r.normalize(), r;
  },
  THREE.CubicBezierCurve = function (e, t, i, r) {
    this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = r;
  },
  THREE.CubicBezierCurve.prototype = Object.create(THREE.Curve.prototype),
  THREE.CubicBezierCurve.prototype.getPoint = function (e) {
    var t, i;
    return t = THREE.Shape.Utils.b3(
      e,
      this.v0.x,
      this.v1.x,
      this.v2.x,
      this.v3.x,
    ),
      i = THREE.Shape.Utils.b3(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y),
      new THREE.Vector2(t, i);
  },
  THREE.CubicBezierCurve.prototype.getTangent = function (e) {
    var t, i;
    t = THREE.Curve.Utils.tangentCubicBezier(
      e,
      this.v0.x,
      this.v1.x,
      this.v2.x,
      this.v3.x,
    ),
      i = THREE.Curve.Utils.tangentCubicBezier(
        e,
        this.v0.y,
        this.v1.y,
        this.v2.y,
        this.v3.y,
      );
    var r = new THREE.Vector2(t, i);
    return r.normalize(), r;
  },
  THREE.SplineCurve = function (e) {
    this.points = null == e ? [] : e;
  },
  THREE.SplineCurve.prototype = Object.create(THREE.Curve.prototype),
  THREE.SplineCurve.prototype.getPoint = function (e) {
    var t, i, r, n = new THREE.Vector2(), o = [], a = this.points;
    return r = (t = (a.length - 1) * e) - (i = Math.floor(t)),
      o[0] = 0 == i ? i : i - 1,
      o[1] = i,
      o[2] = i > a.length - 2 ? a.length - 1 : i + 1,
      o[3] = i > a.length - 3 ? a.length - 1 : i + 2,
      n.x = THREE.Curve.Utils.interpolate(
        a[o[0]].x,
        a[o[1]].x,
        a[o[2]].x,
        a[o[3]].x,
        r,
      ),
      n.y = THREE.Curve.Utils.interpolate(
        a[o[0]].y,
        a[o[1]].y,
        a[o[2]].y,
        a[o[3]].y,
        r,
      ),
      n;
  },
  THREE.EllipseCurve = function (e, t, i, r, n, o, a) {
    this.aX = e,
      this.aY = t,
      this.xRadius = i,
      this.yRadius = r,
      this.aStartAngle = n,
      this.aEndAngle = o,
      this.aClockwise = a;
  },
  THREE.EllipseCurve.prototype = Object.create(THREE.Curve.prototype),
  THREE.EllipseCurve.prototype.getPoint = function (e) {
    var t, i = this.aEndAngle - this.aStartAngle;
    i < 0 && (i += 2 * Math.PI),
      i > 2 * Math.PI && (i -= 2 * Math.PI),
      t = !0 === this.aClockwise ? this.aEndAngle + (1 - e) * (2 * Math.PI - i)
      : this.aStartAngle + e * i;
    var r = this.aX + this.xRadius * Math.cos(t),
      n = this.aY + this.yRadius * Math.sin(t);
    return new THREE.Vector2(r, n);
  },
  THREE.ArcCurve = function (e, t, i, r, n, o) {
    THREE.EllipseCurve.call(this, e, t, i, i, r, n, o);
  },
  THREE.ArcCurve.prototype = Object.create(THREE.EllipseCurve.prototype),
  THREE.LineCurve3 = THREE.Curve.create(function (e, t) {
    this.v1 = e, this.v2 = t;
  }, function (e) {
    var t = new THREE.Vector3();
    return t.subVectors(this.v2, this.v1),
      t.multiplyScalar(e),
      t.add(this.v1),
      t;
  }),
  THREE.QuadraticBezierCurve3 = THREE.Curve.create(function (e, t, i) {
    this.v0 = e, this.v1 = t, this.v2 = i;
  }, function (e) {
    var t, i, r;
    return t = THREE.Shape.Utils.b2(e, this.v0.x, this.v1.x, this.v2.x),
      i = THREE.Shape.Utils.b2(e, this.v0.y, this.v1.y, this.v2.y),
      r = THREE.Shape.Utils.b2(e, this.v0.z, this.v1.z, this.v2.z),
      new THREE.Vector3(t, i, r);
  }),
  THREE.CubicBezierCurve3 = THREE.Curve.create(function (e, t, i, r) {
    this.v0 = e, this.v1 = t, this.v2 = i, this.v3 = r;
  }, function (e) {
    var t, i, r;
    return t = THREE.Shape.Utils.b3(
      e,
      this.v0.x,
      this.v1.x,
      this.v2.x,
      this.v3.x,
    ),
      i = THREE.Shape.Utils.b3(e, this.v0.y, this.v1.y, this.v2.y, this.v3.y),
      r = THREE.Shape.Utils.b3(e, this.v0.z, this.v1.z, this.v2.z, this.v3.z),
      new THREE.Vector3(t, i, r);
  }),
  THREE.SplineCurve3 = THREE.Curve.create(function (e) {
    this.points = null == e ? [] : e;
  }, function (e) {
    var t, i, r, n = new THREE.Vector3(), o = [], a = this.points;
    r = (t = (a.length - 1) * e) - (i = Math.floor(t)),
      o[0] = 0 == i ? i : i - 1,
      o[1] = i,
      o[2] = i > a.length - 2 ? a.length - 1 : i + 1,
      o[3] = i > a.length - 3 ? a.length - 1 : i + 2;
    var s = a[o[0]], l = a[o[1]], c = a[o[2]], h = a[o[3]];
    return n.x = THREE.Curve.Utils.interpolate(s.x, l.x, c.x, h.x, r),
      n.y = THREE.Curve.Utils.interpolate(s.y, l.y, c.y, h.y, r),
      n.z = THREE.Curve.Utils.interpolate(s.z, l.z, c.z, h.z, r),
      n;
  }),
  THREE.ClosedSplineCurve3 = THREE.Curve.create(function (e) {
    this.points = null == e ? [] : e;
  }, function (e) {
    var t, i, r, n = new THREE.Vector3(), o = [], a = this.points;
    return r = (t = (a.length - 0) * e) - (i = Math.floor(t)),
      i += 0 < i ? 0 : (Math.floor(Math.abs(i) / a.length) + 1) * a.length,
      o[0] = (i - 1) % a.length,
      o[1] = i % a.length,
      o[2] = (i + 1) % a.length,
      o[3] = (i + 2) % a.length,
      n.x = THREE.Curve.Utils.interpolate(
        a[o[0]].x,
        a[o[1]].x,
        a[o[2]].x,
        a[o[3]].x,
        r,
      ),
      n.y = THREE.Curve.Utils.interpolate(
        a[o[0]].y,
        a[o[1]].y,
        a[o[2]].y,
        a[o[3]].y,
        r,
      ),
      n.z = THREE.Curve.Utils.interpolate(
        a[o[0]].z,
        a[o[1]].z,
        a[o[2]].z,
        a[o[3]].z,
        r,
      ),
      n;
  }),
  THREE.AnimationHandler = function () {
    var i = [],
      t = {},
      e = {
        update: function (e) {
          for (var t = 0; t < i.length; t++) i[t].update(e);
        },
        addToUpdate: function (e) {
          -1 === i.indexOf(e) && i.push(e);
        },
        removeFromUpdate: function (e) {
          var t = i.indexOf(e);
          -1 !== t && i.splice(t, 1);
        },
        add: function (e) {
          void 0 !== t[e.name] &&
          console.log(
            "THREE.AnimationHandler.add: Warning! " + e.name +
              " already exists in library. Overwriting.",
          ),
            t[e.name] = e,
            n(e);
        },
        get: function (e) {
          if ("string" == typeof e) {
            return t[e] ? t[e]
            : (console.log(
              "THREE.AnimationHandler.get: Couldn't find animation " + e,
            ),
              null);
          }
        },
        parse: function (e) {
          var t = [];
          if (e instanceof THREE.SkinnedMesh) {
            for (var i = 0; i < e.bones.length; i++) {
              t.push(e.bones[i]);
            }
          } else r(e, t);
          return t;
        },
      },
      r = function (e, t) {
        t.push(e);
        for (var i = 0; i < e.children.length; i++) r(e.children[i], t);
      },
      n = function (e) {
        if (!0 !== e.initialized) {
          for (var t = 0; t < e.hierarchy.length; t++) {
            for (var i = 0; i < e.hierarchy[t].keys.length; i++) {
              if (
                e.hierarchy[t].keys[i].time < 0 &&
                (e.hierarchy[t].keys[i].time = 0),
                  void 0 !== e.hierarchy[t].keys[i].rot &&
                  !(e.hierarchy[t].keys[i].rot instanceof THREE.Quaternion)
              ) {
                var r = e.hierarchy[t].keys[i].rot;
                e.hierarchy[t].keys[i].rot = new THREE.Quaternion(
                  r[0],
                  r[1],
                  r[2],
                  r[3],
                );
              }
            }
            if (
              e.hierarchy[t].keys.length &&
              void 0 !== e.hierarchy[t].keys[0].morphTargets
            ) {
              var n = {};
              for (i = 0; i < e.hierarchy[t].keys.length; i++) {
                for (
                  var o = 0; o < e.hierarchy[t].keys[i].morphTargets.length; o++
                ) {
                  n[s = e.hierarchy[t].keys[i].morphTargets[o]] = -1;
                }
              }
              e.hierarchy[t].usedMorphTargets = n;
              for (i = 0; i < e.hierarchy[t].keys.length; i++) {
                var a = {};
                for (var s in n) {
                  for (
                    o = 0; o < e.hierarchy[t].keys[i].morphTargets.length; o++
                  ) {
                    if (e.hierarchy[t].keys[i].morphTargets[o] === s) {
                      a[s] = e.hierarchy[t].keys[i].morphTargetsInfluences[o];
                      break;
                    }
                  }
                  o === e.hierarchy[t].keys[i].morphTargets.length &&
                    (a[s] = 0);
                }
                e.hierarchy[t].keys[i].morphTargetsInfluences = a;
              }
            }
            for (i = 1; i < e.hierarchy[t].keys.length; i++) {
              e.hierarchy[t].keys[i].time === e.hierarchy[t].keys[i - 1].time &&
                (e.hierarchy[t].keys.splice(i, 1), i--);
            }
            for (i = 0; i < e.hierarchy[t].keys.length; i++) {
              e.hierarchy[t].keys[i].index = i;
            }
          }
          var l = parseInt(e.length * e.fps, 10);
          e.JIT = {}, e.JIT.hierarchy = [];
          for (t = 0; t < e.hierarchy.length; t++) {
            e.JIT.hierarchy.push(new Array(l));
          }
          e.initialized = !0;
        }
      };
    return e.LINEAR = 0, e.CATMULLROM = 1, e.CATMULLROM_FORWARD = 2, e;
  }(),
  THREE.Animation = function (e, t, i) {
    this.root = e,
      this.data = THREE.AnimationHandler.get(t),
      this.hierarchy = THREE.AnimationHandler.parse(e),
      this.currentTime = 0,
      this.timeScale = 1,
      this.isPlaying = !1,
      this.isPaused = !0,
      this.loop = !0,
      this.interpolationType = void 0 !== i ? i : THREE.AnimationHandler.LINEAR,
      this.points = [],
      this.target = new THREE.Vector3();
  },
  THREE.Animation.prototype.play = function (e, t) {
    if (!1 === this.isPlaying) {
      this.isPlaying = !0,
        this.loop = void 0 === e || e,
        this.currentTime = void 0 !== t ? t : 0;
      var i, r, n = this.hierarchy.length;
      for (i = 0; i < n; i++) {
        (r = this.hierarchy[i]).matrixAutoUpdate = !0,
          void 0 === r.animationCache &&
          (r.animationCache = {},
            r.animationCache.prevKey = { pos: 0, rot: 0, scl: 0 },
            r.animationCache.nextKey = { pos: 0, rot: 0, scl: 0 },
            r.animationCache.originalMatrix = r instanceof THREE.Bone
              ? r.skinMatrix
              : r.matrix);
        var o = r.animationCache.prevKey, a = r.animationCache.nextKey;
        o.pos = this.data.hierarchy[i].keys[0],
          o.rot = this.data.hierarchy[i].keys[0],
          o.scl = this.data.hierarchy[i].keys[0],
          a.pos = this.getNextKeyWith("pos", i, 1),
          a.rot = this.getNextKeyWith("rot", i, 1),
          a.scl = this.getNextKeyWith("scl", i, 1);
      }
      this.update(0);
    }
    this.isPaused = !1, THREE.AnimationHandler.addToUpdate(this);
  },
  THREE.Animation.prototype.pause = function () {
    !0 === this.isPaused
      ? THREE.AnimationHandler.addToUpdate(this)
      : THREE.AnimationHandler.removeFromUpdate(this),
      this.isPaused = !this.isPaused;
  },
  THREE.Animation.prototype.stop = function () {
    this.isPlaying = !1,
      this.isPaused = !1,
      THREE.AnimationHandler.removeFromUpdate(this);
  },
  THREE.Animation.prototype.update = function (e) {
    if (!1 !== this.isPlaying) {
      var t, i, r, n, o, a, s, l, c, h, u, p, f, d, m = ["pos", "rot", "scl"];
      this.data.JIT.hierarchy;
      this.currentTime += e * this.timeScale,
        u = this.currentTime,
        h = this.currentTime = this.currentTime % this.data.length,
        parseInt(
          Math.min(h * this.data.fps, this.data.length * this.data.fps),
          10,
        );
      for (var E = 0, g = this.hierarchy.length; E < g; E++) {
        c = (l = this.hierarchy[E]).animationCache;
        for (var v = 0; v < 3; v++) {
          if (t = m[v], a = c.prevKey[t], (s = c.nextKey[t]).time <= u) {
            if (h < u) {
              if (!this.loop) return void this.stop();
              for (
                a = this.data.hierarchy[E].keys[0],
                  s = this.getNextKeyWith(t, E, 1);
                s.time < h;
              ) {
                a = s, s = this.getNextKeyWith(t, E, s.index + 1);
              }
            } else {
              for (
                ; a = s, (s = this.getNextKeyWith(t, E, s.index + 1)).time < h;
              );
            }
            c.prevKey[t] = a, c.nextKey[t] = s;
          }
          l.matrixAutoUpdate = !0,
            l.matrixWorldNeedsUpdate = !0,
            i = (h - a.time) / (s.time - a.time),
            n = a[t],
            o = s[t],
            (i < 0 || 1 < i) &&
            (console.log(
              "THREE.Animation.update: Warning! Scale out of bounds:" + i +
                " on bone " + E,
            ),
              i = i < 0
                ? 0
                : 1),
            "pos" === t
              ? (r = l.position,
                this.interpolationType === THREE.AnimationHandler.LINEAR
                  ? (r.x = n[0] + (o[0] - n[0]) * i,
                    r.y = n[1] + (o[1] - n[1]) * i,
                    r.z = n[2] + (o[2] - n[2]) * i)
                  : this.interpolationType !==
                          THREE.AnimationHandler.CATMULLROM &&
                      this.interpolationType !==
                        THREE.AnimationHandler.CATMULLROM_FORWARD ||
                    (this.points[0] =
                      this.getPrevKeyWith("pos", E, a.index - 1).pos,
                      this.points[1] = n,
                      this.points[2] = o,
                      this.points[3] =
                        this.getNextKeyWith("pos", E, s.index + 1).pos,
                      i = .33 * i + .33,
                      p = this.interpolateCatmullRom(this.points, i),
                      r.x = p[0],
                      r.y = p[1],
                      r.z = p[2],
                      this.interpolationType ===
                        THREE.AnimationHandler.CATMULLROM_FORWARD &&
                      (f = this.interpolateCatmullRom(this.points, 1.01 * i),
                        this.target.set(f[0], f[1], f[2]),
                        this.target.sub(r),
                        this.target.y = 0,
                        this.target.normalize(),
                        d = Math.atan2(this.target.x, this.target.z),
                        l.rotation.set(0, d, 0))))
              : "rot" === t
              ? THREE.Quaternion.slerp(n, o, l.quaternion, i)
              : "scl" === t &&
                ((r = l.scale).x = n[0] + (o[0] - n[0]) * i,
                  r.y = n[1] + (o[1] - n[1]) * i,
                  r.z = n[2] + (o[2] - n[2]) * i);
        }
      }
    }
  },
  THREE.Animation.prototype.interpolateCatmullRom = function (e, t) {
    var i, r, n, o, a, s, l, c, h, u = [], p = [];
    return n = (i = (e.length - 1) * t) - (r = Math.floor(i)),
      u[0] = 0 === r ? r : r - 1,
      u[1] = r,
      u[2] = r > e.length - 2 ? r : r + 1,
      u[3] = r > e.length - 3 ? r : r + 2,
      s = e[u[0]],
      l = e[u[1]],
      c = e[u[2]],
      h = e[u[3]],
      a = n * (o = n * n),
      p[0] = this.interpolate(s[0], l[0], c[0], h[0], n, o, a),
      p[1] = this.interpolate(s[1], l[1], c[1], h[1], n, o, a),
      p[2] = this.interpolate(s[2], l[2], c[2], h[2], n, o, a),
      p;
  },
  THREE.Animation.prototype.interpolate = function (e, t, i, r, n, o, a) {
    var s = .5 * (i - e), l = .5 * (r - t);
    return (2 * (t - i) + s + l) * a + (-3 * (t - i) - 2 * s - l) * o + s * n +
      t;
  },
  THREE.Animation.prototype.getNextKeyWith = function (e, t, i) {
    var r = this.data.hierarchy[t].keys;
    for (
      this.interpolationType === THREE.AnimationHandler.CATMULLROM ||
        this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD
        ? i = i < r.length - 1 ? i : r.length - 1
        : i %= r.length;
      i < r.length;
      i++
    ) {
      if (void 0 !== r[i][e]) return r[i];
    }
    return this.data.hierarchy[t].keys[0];
  },
  THREE.Animation.prototype.getPrevKeyWith = function (e, t, i) {
    var r = this.data.hierarchy[t].keys;
    for (
      i =
        this.interpolationType === THREE.AnimationHandler.CATMULLROM ||
          this.interpolationType === THREE.AnimationHandler.CATMULLROM_FORWARD
          ? 0 < i ? i : 0
          : 0 <= i
          ? i
          : i + r.length;
      0 <= i;
      i--
    ) {
      if (void 0 !== r[i][e]) return r[i];
    }
    return this.data.hierarchy[t].keys[r.length - 1];
  },
  THREE.KeyFrameAnimation = function (e, t, i) {
    this.root = e,
      this.data = THREE.AnimationHandler.get(t),
      this.hierarchy = THREE.AnimationHandler.parse(e),
      this.currentTime = 0,
      this.timeScale = .001,
      this.isPlaying = !1,
      this.isPaused = !0,
      this.loop = !0,
      this.JITCompile = void 0 === i || i;
    for (var r = 0, n = this.hierarchy.length; r < n; r++) {
      var o = this.data.hierarchy[r].keys,
        a = this.data.hierarchy[r].sids,
        s = this.hierarchy[r];
      if (o.length && a) {
        for (var l = 0; l < a.length; l++) {
          var c = a[l], h = this.getNextKeyWith(c, r, 0);
          h && h.apply(c);
        }
        s.matrixAutoUpdate = !1,
          this.data.hierarchy[r].node.updateMatrix(),
          s.matrixWorldNeedsUpdate = !0;
      }
    }
  },
  THREE.KeyFrameAnimation.prototype.play = function (e, t) {
    if (!this.isPlaying) {
      this.isPlaying = !0,
        this.loop = void 0 === e || e,
        this.currentTime = void 0 !== t ? t : 0,
        this.startTimeMs = t,
        this.startTime = 1e7,
        this.endTime = -this.startTime;
      var i, r, n, o = this.hierarchy.length;
      for (i = 0; i < o; i++) {
        r = this.hierarchy[i],
          void 0 === (n = this.data.hierarchy[i]).animationCache &&
          (n.animationCache = {},
            n.animationCache.prevKey = null,
            n.animationCache.nextKey = null,
            n.animationCache.originalMatrix = r instanceof THREE.Bone
              ? r.skinMatrix
              : r.matrix);
        var a = this.data.hierarchy[i].keys;
        a.length &&
          (n.animationCache.prevKey = a[0],
            n.animationCache.nextKey = a[1],
            this.startTime = Math.min(a[0].time, this.startTime),
            this.endTime = Math.max(a[a.length - 1].time, this.endTime));
      }
      this.update(0);
    }
    this.isPaused = !1, THREE.AnimationHandler.addToUpdate(this);
  },
  THREE.KeyFrameAnimation.prototype.pause = function () {
    this.isPaused
      ? THREE.AnimationHandler.addToUpdate(this)
      : THREE.AnimationHandler.removeFromUpdate(this),
      this.isPaused = !this.isPaused;
  },
  THREE.KeyFrameAnimation.prototype.stop = function () {
    this.isPlaying = !1,
      this.isPaused = !1,
      THREE.AnimationHandler.removeFromUpdate(this);
    for (var e = 0; e < this.data.hierarchy.length; e++) {
      var t = this.hierarchy[e], i = this.data.hierarchy[e];
      if (void 0 !== i.animationCache) {
        var r = i.animationCache.originalMatrix;
        t instanceof THREE.Bone
          ? (r.copy(t.skinMatrix), t.skinMatrix = r)
          : (r.copy(t.matrix), t.matrix = r), delete i.animationCache;
      }
    }
  },
  THREE.KeyFrameAnimation.prototype.update = function (e) {
    if (this.isPlaying) {
      var t, i, r, n, o, a, s, l, c = this.data.JIT.hierarchy;
      if (
        this.currentTime += e * this.timeScale,
          s = this.currentTime,
          (a = this.currentTime = this.currentTime % this.data.length) <
            this.startTimeMs && (a = this.currentTime = this.startTimeMs + a),
          o = parseInt(
            Math.min(a * this.data.fps, this.data.length * this.data.fps),
            10,
          ),
          !(l = a < s) || this.loop
      ) {
        if (!(a < this.startTime)) {
          for (p = 0, f = this.hierarchy.length; p < f; p++) {
            r = this.hierarchy[p];
            d = (n = this.data.hierarchy[p]).keys;
            var h = n.animationCache;
            if (this.JITCompile && void 0 !== c[p][o]) {
              r instanceof THREE.Bone
                ? (r.skinMatrix = c[p][o], r.matrixWorldNeedsUpdate = !1)
                : (r.matrix = c[p][o], r.matrixWorldNeedsUpdate = !0);
            } else if (d.length) {
              if (
                this.JITCompile && h && (r instanceof THREE.Bone
                  ? r.skinMatrix = h.originalMatrix
                  : r.matrix = h.originalMatrix),
                  t = h.prevKey,
                  i = h.nextKey,
                  t && i
              ) {
                if (i.time <= s) {
                  if (l && this.loop) {
                    for (t = d[0], i = d[1]; i.time < a;) {
                      i = d[(t = i).index + 1];
                    }
                  } else if (!l) {
                    for (
                      var u = d.length - 1; i.time < a && i.index !== u;
                    ) {
                      i = d[(t = i).index + 1];
                    }
                  }
                  h.prevKey = t, h.nextKey = i;
                }
                i.time >= a ? t.interpolate(i, a) : t.interpolate(i, i.time);
              }
              this.data.hierarchy[p].node.updateMatrix(),
                r.matrixWorldNeedsUpdate = !0;
            }
          }
          if (this.JITCompile && void 0 === c[0][o]) {
            this.hierarchy[0].updateMatrixWorld(!0);
            for (p = 0; p < this.hierarchy.length; p++) {
              this.hierarchy[p] instanceof THREE.Bone
                ? c[p][o] = this.hierarchy[p].skinMatrix.clone()
                : c[p][o] = this.hierarchy[p].matrix.clone();
            }
          }
        }
      } else {
        for (var p = 0, f = this.hierarchy.length; p < f; p++) {
          var d = this.data.hierarchy[p].keys,
            m = this.data.hierarchy[p].sids,
            E = d.length - 1,
            g = this.hierarchy[p];
          if (d.length) {
            for (var v = 0; v < m.length; v++) {
              var y = m[v], T = this.getPrevKeyWith(y, p, E);
              T && T.apply(y);
            }
            this.data.hierarchy[p].node.updateMatrix(),
              g.matrixWorldNeedsUpdate = !0;
          }
        }
        this.stop();
      }
    }
  },
  THREE.KeyFrameAnimation.prototype.getNextKeyWith = function (e, t, i) {
    var r = this.data.hierarchy[t].keys;
    for (i %= r.length; i < r.length; i++) if (r[i].hasTarget(e)) return r[i];
    return r[0];
  },
  THREE.KeyFrameAnimation.prototype.getPrevKeyWith = function (e, t, i) {
    var r = this.data.hierarchy[t].keys;
    for (i = 0 <= i ? i : i + r.length; 0 <= i; i--) {
      if (r[i].hasTarget(e)) return r[i];
    }
    return r[r.length - 1];
  },
  THREE.CubeCamera = function (e, t, i) {
    THREE.Object3D.call(this);
    var n = new THREE.PerspectiveCamera(90, 1, e, t);
    n.up.set(0, -1, 0), n.lookAt(new THREE.Vector3(1, 0, 0)), this.add(n);
    var o = new THREE.PerspectiveCamera(90, 1, e, t);
    o.up.set(0, -1, 0), o.lookAt(new THREE.Vector3(-1, 0, 0)), this.add(o);
    var a = new THREE.PerspectiveCamera(90, 1, e, t);
    a.up.set(0, 0, 1), a.lookAt(new THREE.Vector3(0, 1, 0)), this.add(a);
    var s = new THREE.PerspectiveCamera(90, 1, e, t);
    s.up.set(0, 0, -1), s.lookAt(new THREE.Vector3(0, -1, 0)), this.add(s);
    var l = new THREE.PerspectiveCamera(90, 1, e, t);
    l.up.set(0, -1, 0), l.lookAt(new THREE.Vector3(0, 0, 1)), this.add(l);
    var c = new THREE.PerspectiveCamera(90, 1, e, t);
    c.up.set(0, -1, 0),
      c.lookAt(new THREE.Vector3(0, 0, -1)),
      this.add(c),
      this.renderTarget = new THREE.WebGLRenderTargetCube(i, i, {
        format: THREE.RGBFormat,
        magFilter: THREE.LinearFilter,
        minFilter: THREE.LinearFilter,
      }),
      this.updateCubeMap = function (e, t) {
        var i = this.renderTarget, r = i.generateMipmaps;
        i.generateMipmaps = !1,
          i.activeCubeFace = 0,
          e.render(t, n, i),
          i.activeCubeFace = 1,
          e.render(t, o, i),
          i.activeCubeFace = 2,
          e.render(t, a, i),
          i.activeCubeFace = 3,
          e.render(t, s, i),
          i.activeCubeFace = 4,
          e.render(t, l, i),
          i.generateMipmaps = r,
          i.activeCubeFace = 5,
          e.render(t, c, i);
      };
  },
  THREE.CubeCamera.prototype = Object.create(THREE.Object3D.prototype),
  THREE.CombinedCamera = function (e, t, i, r, n, o, a) {
    THREE.Camera.call(this),
      this.fov = i,
      this.left = -e / 2,
      this.right = e / 2,
      this.top = t / 2,
      this.bottom = -t / 2,
      this.cameraO = new THREE.OrthographicCamera(
        e / -2,
        e / 2,
        t / 2,
        t / -2,
        o,
        a,
      ),
      this.cameraP = new THREE.PerspectiveCamera(i, e / t, r, n),
      this.zoom = 1,
      this.toPerspective();
  },
  THREE.CombinedCamera.prototype = Object.create(THREE.Camera.prototype),
  THREE.CombinedCamera.prototype.toPerspective = function () {
    this.near = this.cameraP.near,
      this.far = this.cameraP.far,
      this.cameraP.fov = this.fov / this.zoom,
      this.cameraP.updateProjectionMatrix(),
      this.projectionMatrix = this.cameraP.projectionMatrix,
      this.inPerspectiveMode = !0,
      this.inOrthographicMode = !1;
  },
  THREE.CombinedCamera.prototype.toOrthographic = function () {
    var e = this.fov,
      t = this.cameraP.aspect,
      i = (this.cameraP.near + this.cameraP.far) / 2,
      r = Math.tan(e / 2) * i,
      n = 2 * r * t / 2;
    r /= this.zoom,
      n /= this.zoom,
      this.cameraO.left = -n,
      this.cameraO.right = n,
      this.cameraO.top = r,
      this.cameraO.bottom = -r,
      this.cameraO.updateProjectionMatrix(),
      this.near = this.cameraO.near,
      this.far = this.cameraO.far,
      this.projectionMatrix = this.cameraO.projectionMatrix,
      this.inPerspectiveMode = !1,
      this.inOrthographicMode = !0;
  },
  THREE.CombinedCamera.prototype.setSize = function (e, t) {
    this.cameraP.aspect = e / t,
      this.left = -e / 2,
      this.right = e / 2,
      this.top = t / 2,
      this.bottom = -t / 2;
  },
  THREE.CombinedCamera.prototype.setFov = function (e) {
    this.fov = e,
      this.inPerspectiveMode ? this.toPerspective() : this.toOrthographic();
  },
  THREE.CombinedCamera.prototype.updateProjectionMatrix = function () {
    this.inPerspectiveMode ? this.toPerspective()
    : (this.toPerspective(), this.toOrthographic());
  },
  THREE.CombinedCamera.prototype.setLens = function (e, t) {
    void 0 === t && (t = 24);
    var i = 2 * THREE.Math.radToDeg(Math.atan(t / (2 * e)));
    return this.setFov(i), i;
  },
  THREE.CombinedCamera.prototype.setZoom = function (e) {
    this.zoom = e,
      this.inPerspectiveMode ? this.toPerspective() : this.toOrthographic();
  },
  THREE.CombinedCamera.prototype.toFrontView = function () {
    this.rotation.x = 0,
      this.rotation.y = 0,
      this.rotation.z = 0,
      this.rotationAutoUpdate = !1;
  },
  THREE.CombinedCamera.prototype.toBackView = function () {
    this.rotation.x = 0,
      this.rotation.y = Math.PI,
      this.rotation.z = 0,
      this.rotationAutoUpdate = !1;
  },
  THREE.CombinedCamera.prototype.toLeftView = function () {
    this.rotation.x = 0,
      this.rotation.y = -Math.PI / 2,
      this.rotation.z = 0,
      this.rotationAutoUpdate = !1;
  },
  THREE.CombinedCamera.prototype.toRightView = function () {
    this.rotation.x = 0,
      this.rotation.y = Math.PI / 2,
      this.rotation.z = 0,
      this.rotationAutoUpdate = !1;
  },
  THREE.CombinedCamera.prototype.toTopView = function () {
    this.rotation.x = -Math.PI / 2,
      this.rotation.y = 0,
      this.rotation.z = 0,
      this.rotationAutoUpdate = !1;
  },
  THREE.CombinedCamera.prototype.toBottomView = function () {
    this.rotation.x = Math.PI / 2,
      this.rotation.y = 0,
      this.rotation.z = 0,
      this.rotationAutoUpdate = !1;
  },
  THREE.CircleGeometry = function (e, t, i, r) {
    THREE.Geometry.call(this),
      this.radius = e = e || 50,
      this.segments = t = void 0 !== t ? Math.max(3, t) : 8,
      this.thetaStart = i = void 0 !== i ? i : 0,
      this.thetaLength = r = void 0 !== r ? r : 2 * Math.PI;
    var n, o = [], a = new THREE.Vector3(), s = new THREE.Vector2(.5, .5);
    for (this.vertices.push(a), o.push(s), n = 0; n <= t; n++) {
      var l = new THREE.Vector3(), c = i + n / t * r;
      l.x = e * Math.cos(c),
        l.y = e * Math.sin(c),
        this.vertices.push(l),
        o.push(new THREE.Vector2((l.x / e + 1) / 2, (l.y / e + 1) / 2));
    }
    var h = new THREE.Vector3(0, 0, 1);
    for (n = 1; n <= t; n++) {
      var u = n, p = n + 1;
      this.faces.push(new THREE.Face3(u, p, 0, [h, h, h])),
        this.faceVertexUvs[0].push([o[n], o[n + 1], s]);
    }
    this.computeCentroids(),
      this.computeFaceNormals(),
      this.boundingSphere = new THREE.Sphere(new THREE.Vector3(), e);
  },
  THREE.CircleGeometry.prototype = Object.create(THREE.Geometry.prototype),
  THREE.CubeGeometry = function (e, t, i, r, n, o) {
    THREE.Geometry.call(this);
    var L = this;
    this.width = e,
      this.height = t,
      this.depth = i,
      this.widthSegments = r || 1,
      this.heightSegments = n || 1,
      this.depthSegments = o || 1;
    var a = this.width / 2, s = this.height / 2, l = this.depth / 2;
    function c(e, t, i, r, n, o, a, s) {
      var l,
        c,
        h,
        u = L.widthSegments,
        p = L.heightSegments,
        f = n / 2,
        d = o / 2,
        m = L.vertices.length;
      "x" === e && "y" === t || "y" === e && "x" === t ? l = "z"
      : "x" === e && "z" === t || "z" === e && "x" === t
        ? (l = "y", p = L.depthSegments)
        : ("z" === e && "y" === t || "y" === e && "z" === t) &&
          (l = "x", u = L.depthSegments);
      var E = u + 1, g = p + 1, v = n / u, y = o / p, T = new THREE.Vector3();
      for (T[l] = 0 < a ? 1 : -1, h = 0; h < g; h++) {
        for (c = 0; c < E; c++) {
          var R = new THREE.Vector3();
          R[e] = (c * v - f) * i,
            R[t] = (h * y - d) * r,
            R[l] = a,
            L.vertices.push(R);
        }
      }
      for (h = 0; h < p; h++) {
        for (c = 0; c < u; c++) {
          var x = c + E * h,
            H = c + E * (h + 1),
            b = c + 1 + E * (h + 1),
            w = c + 1 + E * h,
            _ = new THREE.Vector2(c / u, 1 - h / p),
            M = new THREE.Vector2(c / u, 1 - (h + 1) / p),
            S = new THREE.Vector2((c + 1) / u, 1 - (h + 1) / p),
            C = new THREE.Vector2((c + 1) / u, 1 - h / p),
            A = new THREE.Face3(x + m, H + m, w + m);
          A.normal.copy(T),
            A.vertexNormals.push(T.clone(), T.clone(), T.clone()),
            A.materialIndex = s,
            L.faces.push(A),
            L.faceVertexUvs[0].push([_, M, C]),
            (A = new THREE.Face3(H + m, b + m, w + m)).normal.copy(T),
            A.vertexNormals.push(T.clone(), T.clone(), T.clone()),
            A.materialIndex = s,
            L.faces.push(A),
            L.faceVertexUvs[0].push([M.clone(), S, C.clone()]);
        }
      }
    }
    c("z", "y", -1, -1, this.depth, this.height, a, 0),
      c("z", "y", 1, -1, this.depth, this.height, -a, 1),
      c("x", "z", 1, 1, this.width, this.depth, s, 2),
      c("x", "z", 1, -1, this.width, this.depth, -s, 3),
      c("x", "y", 1, -1, this.width, this.height, l, 4),
      c("x", "y", -1, -1, this.width, this.height, -l, 5),
      this.computeCentroids(),
      this.mergeVertices();
  },
  THREE.CubeGeometry.prototype = Object.create(THREE.Geometry.prototype),
  THREE.CylinderGeometry = function (e, t, i, r, n, o) {
    THREE.Geometry.call(this),
      this.radiusTop = e = void 0 !== e ? e : 20,
      this.radiusBottom = t = void 0 !== t ? t : 20,
      this.height = i = void 0 !== i ? i : 100,
      this.radialSegments = r = r || 8,
      this.heightSegments = n = n || 1,
      this.openEnded = o = void 0 !== o && o;
    var a, s, l = i / 2, c = [], h = [];
    for (s = 0; s <= n; s++) {
      var u = [], p = [], f = s / n, d = f * (t - e) + e;
      for (a = 0; a <= r; a++) {
        var m = a / r, E = new THREE.Vector3();
        E.x = d * Math.sin(m * Math.PI * 2),
          E.y = -f * i + l,
          E.z = d * Math.cos(m * Math.PI * 2),
          this.vertices.push(E),
          u.push(this.vertices.length - 1),
          p.push(new THREE.Vector2(m, 1 - f));
      }
      c.push(u), h.push(p);
    }
    var g, v, y = (t - e) / i;
    for (a = 0; a < r; a++) {
      for (
        0 !== e
          ? (g = this.vertices[c[0][a]].clone(),
            v = this.vertices[c[0][a + 1]].clone())
          : (g = this.vertices[c[1][a]].clone(),
            v = this.vertices[c[1][a + 1]].clone()),
          g.setY(Math.sqrt(g.x * g.x + g.z * g.z) * y).normalize(),
          v.setY(Math.sqrt(v.x * v.x + v.z * v.z) * y).normalize(),
          s = 0;
        s < n;
        s++
      ) {
        var T = c[s][a],
          R = c[s + 1][a],
          x = c[s + 1][a + 1],
          H = c[s][a + 1],
          b = g.clone(),
          w = g.clone(),
          _ = v.clone(),
          M = v.clone(),
          S = h[s][a].clone(),
          C = h[s + 1][a].clone(),
          A = h[s + 1][a + 1].clone(),
          L = h[s][a + 1].clone();
        this.faces.push(new THREE.Face3(T, R, H, [b, w, M])),
          this.faceVertexUvs[0].push([S, C, L]),
          this.faces.push(new THREE.Face3(R, x, H, [w, _, M])),
          this.faceVertexUvs[0].push([C, A, L]);
      }
    }
    if (!1 === o && 0 < e) {
      for (this.vertices.push(new THREE.Vector3(0, l, 0)), a = 0; a < r; a++) {
        T = c[0][a],
          R = c[0][a + 1],
          x = this.vertices.length - 1,
          b = new THREE.Vector3(0, 1, 0),
          w = new THREE.Vector3(0, 1, 0),
          _ = new THREE.Vector3(0, 1, 0),
          S = h[0][a].clone(),
          C = h[0][a + 1].clone(),
          A = new THREE.Vector2(C.u, 0);
        this.faces.push(new THREE.Face3(T, R, x, [b, w, _])),
          this.faceVertexUvs[0].push([S, C, A]);
      }
    }
    if (!1 === o && 0 < t) {
      for (this.vertices.push(new THREE.Vector3(0, -l, 0)), a = 0; a < r; a++) {
        T = c[s][a + 1],
          R = c[s][a],
          x = this.vertices.length - 1,
          b = new THREE.Vector3(0, -1, 0),
          w = new THREE.Vector3(0, -1, 0),
          _ = new THREE.Vector3(0, -1, 0),
          S = h[s][a + 1].clone(),
          C = h[s][a].clone(),
          A = new THREE.Vector2(C.u, 1);
        this.faces.push(new THREE.Face3(T, R, x, [b, w, _])),
          this.faceVertexUvs[0].push([S, C, A]);
      }
    }
    this.computeCentroids(), this.computeFaceNormals();
  },
  THREE.CylinderGeometry.prototype = Object.create(THREE.Geometry.prototype),
  THREE.ExtrudeGeometry = function (e, t) {
    void 0 !== e
      ? (THREE.Geometry.call(this),
        e = e instanceof Array ? e : [e],
        this.shapebb = e[e.length - 1].getBoundingBox(),
        this.addShapeList(e, t),
        this.computeCentroids(),
        this.computeFaceNormals()) : e = [];
  },
  THREE.ExtrudeGeometry.prototype = Object.create(THREE.Geometry.prototype),
  THREE.ExtrudeGeometry.prototype.addShapeList = function (e, t) {
    for (var i = e.length, r = 0; r < i; r++) {
      var n = e[r];
      this.addShape(n, t);
    }
  },
  THREE.ExtrudeGeometry.prototype.addShape = function (h, u) {
    var e,
      t,
      i,
      r,
      n,
      o,
      a,
      s,
      l = void 0 !== u.amount ? u.amount : 100,
      c = void 0 !== u.bevelThickness ? u.bevelThickness : 6,
      p = void 0 !== u.bevelSize ? u.bevelSize : c - 2,
      f = void 0 !== u.bevelSegments ? u.bevelSegments : 3,
      d = void 0 === u.bevelEnabled || u.bevelEnabled,
      m = void 0 !== u.curveSegments ? u.curveSegments : 12,
      E = void 0 !== u.steps ? u.steps : 1,
      g = u.extrudePath,
      v = !1,
      y = u.material,
      T = u.extrudeMaterial,
      R = void 0 !== u.UVGenerator ? u.UVGenerator
      : THREE.ExtrudeGeometry.WorldUVGenerator;
    this.shapebb;
    g &&
    (e = g.getSpacedPoints(E),
      d = !(v = !0),
      t = void 0 !== u.frames
        ? u.frames
        : new THREE.TubeGeometry.FrenetFrames(g, E, !1),
      i = new THREE.Vector3(),
      r = new THREE.Vector3(),
      n = new THREE.Vector3()), d || (p = c = f = 0);
    var x = this,
      H = this.vertices.length,
      b = h.extractPoints(m),
      w = b.shape,
      _ = b.holes,
      M = !THREE.Shape.Utils.isClockWise(w);
    if (M) {
      for (w = w.reverse(), a = 0, s = _.length; a < s; a++) {
        o = _[a], THREE.Shape.Utils.isClockWise(o) && (_[a] = o.reverse());
      }
      M = !1;
    }
    var S = THREE.Shape.Utils.triangulateShape(w, _), C = w;
    for (a = 0, s = _.length; a < s; a++) o = _[a], w = w.concat(o);
    function A(e, t, i) {
      return t || console.log("die"), t.clone().multiplyScalar(i).add(e);
    }
    var L, P, D, F, N, V, z = w.length, U = S.length;
    C.length, Math.PI;
    function B(e, t, i) {
      return function (e, t, i) {
        var r,
          n,
          o,
          a,
          s,
          l = THREE.ExtrudeGeometry.__v1,
          c = THREE.ExtrudeGeometry.__v2,
          h = THREE.ExtrudeGeometry.__v3,
          u = THREE.ExtrudeGeometry.__v4,
          p = THREE.ExtrudeGeometry.__v5,
          f = THREE.ExtrudeGeometry.__v6;
        if (
          l.set(e.x - t.x, e.y - t.y),
            c.set(e.x - i.x, e.y - i.y),
            r = l.normalize(),
            n = c.normalize(),
            h.set(-r.y, r.x),
            u.set(n.y, -n.x),
            p.copy(e).add(h),
            f.copy(e).add(u),
            p.equals(f)
        ) {
          return u.clone();
        }
        p.copy(t).add(h),
          f.copy(i).add(u),
          o = r.dot(u),
          a = f.sub(p).dot(u),
          0 === o && (console.log("Either infinite or no solutions!"),
            0 === a
              ? console.log("Its finite solutions.")
              : console.log("Too bad, no solutions."));
        if ((s = a / o) < 0) {
          return function (e, t, i) {
            var r = Math.atan2(t.y - e.y, t.x - e.x),
              n = Math.atan2(i.y - e.y, i.x - e.x);
            n < r && (n += 2 * Math.PI);
            var o = (r + n) / 2, a = -Math.cos(o), s = -Math.sin(o);
            return new THREE.Vector2(a, s);
          }(e, t, i);
        }
        return r.multiplyScalar(s).add(p).sub(e).clone();
      }(e, t, i);
    }
    for (
      var O = [], k = 0, I = C.length, j = I - 1, G = k + 1;
      k < I;
      k++, j++, G++
    ) {
      j === I && (j = 0), G === I && (G = 0);
      C[k], C[j], C[G];
      O[k] = B(C[k], C[j], C[G]);
    }
    var W, X, q = [], Y = O.concat();
    for (a = 0, s = _.length; a < s; a++) {
      for (
        o = _[a], W = [], k = 0, j = (I = o.length) - 1, G = k + 1;
        k < I;
        k++, j++, G++
      ) {
        j === I && (j = 0), G === I && (G = 0), W[k] = B(o[k], o[j], o[G]);
      }
      q.push(W), Y = Y.concat(W);
    }
    for (L = 0; L < f; L++) {
      for (
        F = c * (1 - (D = L / f)),
          P = p * Math.sin(D * Math.PI / 2),
          k = 0,
          I = C.length;
        k < I;
        k++
      ) {
        Q((N = A(C[k], O[k], P)).x, N.y, -F);
      }
      for (a = 0, s = _.length; a < s; a++) {
        for (o = _[a], W = q[a], k = 0, I = o.length; k < I; k++) {
          Q((N = A(o[k], W[k], P)).x, N.y, -F);
        }
      }
    }
    for (P = p, k = 0; k < z; k++) {
      N = d ? A(w[k], Y[k], P) : w[k],
        v
          ? (r.copy(t.normals[0]).multiplyScalar(N.x),
            i.copy(t.binormals[0]).multiplyScalar(N.y),
            n.copy(e[0]).add(r).add(i),
            Q(n.x, n.y, n.z))
          : Q(N.x, N.y, 0);
    }
    for (X = 1; X <= E; X++) {
      for (k = 0; k < z; k++) {
        N = d ? A(w[k], Y[k], P) : w[k],
          v
            ? (r.copy(t.normals[X]).multiplyScalar(N.x),
              i.copy(t.binormals[X]).multiplyScalar(N.y),
              n.copy(e[X]).add(r).add(i),
              Q(n.x, n.y, n.z))
            : Q(N.x, N.y, l / E * X);
      }
    }
    for (L = f - 1; 0 <= L; L--) {
      for (
        F = c * (1 - (D = L / f)),
          P = p * Math.sin(D * Math.PI / 2),
          k = 0,
          I = C.length;
        k < I;
        k++
      ) {
        Q((N = A(C[k], O[k], P)).x, N.y, l + F);
      }
      for (a = 0, s = _.length; a < s; a++) {
        for (o = _[a], W = q[a], k = 0, I = o.length; k < I; k++) {
          N = A(o[k], W[k], P),
            v
              ? Q(N.x, N.y + e[E - 1].y, e[E - 1].x + F)
              : Q(N.x, N.y, l + F);
        }
      }
    }
    function K(e, t) {
      var i, r;
      for (k = e.length; 0 <= --k;) {
        (r = (i = k) - 1) < 0 && (r = e.length - 1);
        var n = 0, o = E + 2 * f;
        for (n = 0; n < o; n++) {
          var a = z * n, s = z * (n + 1);
          $(t + i + a, t + r + a, t + r + s, t + i + s, e, n, o, i, r);
        }
      }
    }
    function Q(e, t, i) {
      x.vertices.push(new THREE.Vector3(e, t, i));
    }
    function Z(e, t, i, r) {
      e += H,
        t += H,
        i += H,
        x.faces.push(new THREE.Face3(e, t, i, null, null, y));
      var n = r ? R.generateBottomUV(x, h, u, e, t, i)
      : R.generateTopUV(x, h, u, e, t, i);
      x.faceVertexUvs[0].push(n);
    }
    function $(e, t, i, r, n, o, a, s, l) {
      e += H,
        t += H,
        i += H,
        r += H,
        x.faces.push(new THREE.Face3(e, t, r, null, null, T)),
        x.faces.push(new THREE.Face3(t, i, r, null, null, T));
      var c = R.generateSideWallUV(x, h, n, u, e, t, i, r, o, a, s, l);
      x.faceVertexUvs[0].push([c[0], c[1], c[3]]),
        x.faceVertexUvs[0].push([c[1], c[2], c[3]]);
    }
    !function () {
      if (d) {
        var e = 0, t = z * e;
        for (k = 0; k < U; k++) Z((V = S[k])[2] + t, V[1] + t, V[0] + t, !0);
        for (t = z * (e = E + 2 * f), k = 0; k < U; k++) {
          Z(
            (V = S[k])[0] + t,
            V[1] + t,
            V[2] + t,
            !1,
          );
        }
      } else {
        for (k = 0; k < U; k++) Z((V = S[k])[2], V[1], V[0], !0);
        for (k = 0; k < U; k++) {
          Z(
            (V = S[k])[0] + z * E,
            V[1] + z * E,
            V[2] + z * E,
            !1,
          );
        }
      }
    }(),
      function () {
        var e = 0;
        for (
          K(C, e), e += C.length, a = 0, s = _.length; a < s; a++
        ) {
          K(o = _[a], e), e += o.length;
        }
      }();
  },
  THREE.ExtrudeGeometry.WorldUVGenerator = {
    generateTopUV: function (e, t, i, r, n, o) {
      var a = e.vertices[r].x,
        s = e.vertices[r].y,
        l = e.vertices[n].x,
        c = e.vertices[n].y,
        h = e.vertices[o].x,
        u = e.vertices[o].y;
      return [
        new THREE.Vector2(a, s),
        new THREE.Vector2(l, c),
        new THREE.Vector2(h, u),
      ];
    },
    generateBottomUV: function (e, t, i, r, n, o) {
      return this.generateTopUV(e, t, i, r, n, o);
    },
    generateSideWallUV: function (e, t, i, r, n, o, a, s, l, c, h, u) {
      var p = e.vertices[n].x,
        f = e.vertices[n].y,
        d = e.vertices[n].z,
        m = e.vertices[o].x,
        E = e.vertices[o].y,
        g = e.vertices[o].z,
        v = e.vertices[a].x,
        y = e.vertices[a].y,
        T = e.vertices[a].z,
        R = e.vertices[s].x,
        x = e.vertices[s].y,
        H = e.vertices[s].z;
      return Math.abs(f - E) < .01
        ? [
          new THREE.Vector2(p, 1 - d),
          new THREE.Vector2(m, 1 - g),
          new THREE.Vector2(v, 1 - T),
          new THREE.Vector2(R, 1 - H),
        ]
        : [
          new THREE.Vector2(f, 1 - d),
          new THREE.Vector2(E, 1 - g),
          new THREE.Vector2(y, 1 - T),
          new THREE.Vector2(x, 1 - H),
        ];
    },
  },
  THREE.ExtrudeGeometry.__v1 = new THREE.Vector2(),
  THREE.ExtrudeGeometry.__v2 = new THREE.Vector2(),
  THREE.ExtrudeGeometry.__v3 = new THREE.Vector2(),
  THREE.ExtrudeGeometry.__v4 = new THREE.Vector2(),
  THREE.ExtrudeGeometry.__v5 = new THREE.Vector2(),
  THREE.ExtrudeGeometry.__v6 = new THREE.Vector2(),
  THREE.ShapeGeometry = function (e, t) {
    THREE.Geometry.call(this),
      e instanceof Array == !1 && (e = [e]),
      this.shapebb = e[e.length - 1].getBoundingBox(),
      this.addShapeList(e, t),
      this.computeCentroids(),
      this.computeFaceNormals();
  },
  THREE.ShapeGeometry.prototype = Object.create(THREE.Geometry.prototype),
  THREE.ShapeGeometry.prototype.addShapeList = function (e, t) {
    for (var i = 0, r = e.length; i < r; i++) this.addShape(e[i], t);
    return this;
  },
  THREE.ShapeGeometry.prototype.addShape = function (e, t) {
    void 0 === t && (t = {});
    var i,
      r,
      n,
      o = void 0 !== t.curveSegments ? t.curveSegments : 12,
      a = t.material,
      s = void 0 === t.UVGenerator ? THREE.ExtrudeGeometry.WorldUVGenerator
      : t.UVGenerator,
      l = (this.shapebb, this.vertices.length),
      c = e.extractPoints(o),
      h = c.shape,
      u = c.holes,
      p = !THREE.Shape.Utils.isClockWise(h);
    if (p) {
      for (h = h.reverse(), i = 0, r = u.length; i < r; i++) {
        n = u[i], THREE.Shape.Utils.isClockWise(n) && (u[i] = n.reverse());
      }
      p = !1;
    }
    var f = THREE.Shape.Utils.triangulateShape(h, u), d = h;
    for (i = 0, r = u.length; i < r; i++) n = u[i], h = h.concat(n);
    var m, E, g = h.length, v = f.length;
    d.length;
    for (i = 0; i < g; i++) {
      m = h[i], this.vertices.push(new THREE.Vector3(m.x, m.y, 0));
    }
    for (i = 0; i < v; i++) {
      var y = (E = f[i])[0] + l, T = E[1] + l, R = E[2] + l;
      this.faces.push(new THREE.Face3(y, T, R, null, null, a)),
        this.faceVertexUvs[0].push(s.generateBottomUV(this, e, t, y, T, R));
    }
  },
  THREE.LatheGeometry = function (e, t, i, r) {
    THREE.Geometry.call(this), t = t || 12, i = i || 0, r = r || 2 * Math.PI;
    for (var n = 1 / (e.length - 1), o = 1 / t, a = 0, s = t; a <= s; a++) {
      for (
        var l = i + a * o * r,
          c = Math.cos(l),
          h = Math.sin(l),
          u = 0,
          p = e.length;
        u < p;
        u++
      ) {
        var f = e[u], d = new THREE.Vector3();
        d.x = c * f.x - h * f.y,
          d.y = h * f.x + c * f.y,
          d.z = f.z,
          this.vertices.push(d);
      }
    }
    var m = e.length;
    for (a = 0, s = t; a < s; a++) {
      for (u = 0, p = e.length - 1; u < p; u++) {
        var E = u + m * a,
          g = E,
          v = E + m,
          y = (c = E + 1 + m, E + 1),
          T = a * o,
          R = u * n,
          x = T + o,
          H = R + n;
        this.faces.push(new THREE.Face3(g, v, y)),
          this.faceVertexUvs[0].push([
            new THREE.Vector2(T, R),
            new THREE.Vector2(x, R),
            new THREE.Vector2(T, H),
          ]),
          this.faces.push(new THREE.Face3(v, c, y)),
          this.faceVertexUvs[0].push([
            new THREE.Vector2(x, R),
            new THREE.Vector2(x, H),
            new THREE.Vector2(T, H),
          ]);
      }
    }
    this.mergeVertices(),
      this.computeCentroids(),
      this.computeFaceNormals(),
      this.computeVertexNormals();
  },
  THREE.LatheGeometry.prototype = Object.create(THREE.Geometry.prototype),
  THREE.PlaneGeometry = function (e, t, i, r) {
    var n, o;
    THREE.Geometry.call(this),
      this.width = e,
      this.height = t,
      this.widthSegments = i || 1,
      this.heightSegments = r || 1;
    var a = e / 2,
      s = t / 2,
      l = this.widthSegments,
      c = this.heightSegments,
      h = l + 1,
      u = c + 1,
      p = this.width / l,
      f = this.height / c,
      d = new THREE.Vector3(0, 0, 1);
    for (o = 0; o < u; o++) {
      for (n = 0; n < h; n++) {
        var m = n * p - a, E = o * f - s;
        this.vertices.push(new THREE.Vector3(m, -E, 0));
      }
    }
    for (o = 0; o < c; o++) {
      for (n = 0; n < l; n++) {
        var g = n + h * o,
          v = n + h * (o + 1),
          y = n + 1 + h * (o + 1),
          T = n + 1 + h * o,
          R = new THREE.Vector2(n / l, 1 - o / c),
          x = new THREE.Vector2(n / l, 1 - (o + 1) / c),
          H = new THREE.Vector2((n + 1) / l, 1 - (o + 1) / c),
          b = new THREE.Vector2((n + 1) / l, 1 - o / c),
          w = new THREE.Face3(g, v, T);
        w.normal.copy(d),
          w.vertexNormals.push(d.clone(), d.clone(), d.clone()),
          this.faces.push(w),
          this.faceVertexUvs[0].push([R, x, b]),
          (w = new THREE.Face3(v, y, T)).normal.copy(d),
          w.vertexNormals.push(d.clone(), d.clone(), d.clone()),
          this.faces.push(w),
          this.faceVertexUvs[0].push([x.clone(), H, b.clone()]);
      }
    }
    this.computeCentroids();
  },
  THREE.PlaneGeometry.prototype = Object.create(THREE.Geometry.prototype),
  THREE.RingGeometry = function (e, t, i, r, n, o) {
    THREE.Geometry.call(this),
      e = e || 0,
      t = t || 50,
      n = void 0 !== n ? n : 0,
      o = void 0 !== o ? o : 2 * Math.PI,
      i = void 0 !== i ? Math.max(3, i) : 8;
    var a,
      s,
      l = [],
      c = e,
      h = (t - e) / (r = void 0 !== r ? Math.max(3, r) : 8);
    for (a = 0; a <= r; a++) {
      for (s = 0; s <= i; s++) {
        var u = new THREE.Vector3(), p = n + s / i * o;
        u.x = c * Math.cos(p),
          u.y = c * Math.sin(p),
          this.vertices.push(u),
          l.push(new THREE.Vector2((u.x / c + 1) / 2, -(u.y / c + 1) / 2 + 1));
      }
      c += h;
    }
    var f = new THREE.Vector3(0, 0, 1);
    for (a = 0; a < r; a++) {
      var d = a * i;
      for (s = 0; s <= i; s++) {
        var m = (p = s + d) + a, E = p + i + a, g = p + i + 1 + a;
        this.faces.push(new THREE.Face3(m, E, g, [f, f, f])),
          this.faceVertexUvs[0].push([l[m], l[E], l[g]]),
          m = p + a,
          E = p + i + 1 + a,
          g = p + 1 + a,
          this.faces.push(new THREE.Face3(m, E, g, [f, f, f])),
          this.faceVertexUvs[0].push([l[m], l[E], l[g]]);
      }
    }
    this.computeCentroids(),
      this.computeFaceNormals(),
      this.boundingSphere = new THREE.Sphere(new THREE.Vector3(), c);
  },
  THREE.RingGeometry.prototype = Object.create(THREE.Geometry.prototype),
  THREE.SphereGeometry = function (e, t, i, r, n, o, a) {
    THREE.Geometry.call(this),
      this.radius = e = e || 50,
      this.widthSegments = t = Math.max(3, Math.floor(t) || 8),
      this.heightSegments = i = Math.max(2, Math.floor(i) || 6),
      this.phiStart = r = void 0 !== r ? r : 0,
      this.phiLength = n = void 0 !== n ? n : 2 * Math.PI,
      this.thetaStart = o = void 0 !== o ? o : 0,
      this.thetaLength = a = void 0 !== a ? a : Math.PI;
    var s, l, c = [], h = [];
    for (l = 0; l <= i; l++) {
      var u = [], p = [];
      for (s = 0; s <= t; s++) {
        var f = s / t, d = l / i, m = new THREE.Vector3();
        m.x = -e * Math.cos(r + f * n) * Math.sin(o + d * a),
          m.y = e * Math.cos(o + d * a),
          m.z = e * Math.sin(r + f * n) * Math.sin(o + d * a),
          this.vertices.push(m),
          u.push(this.vertices.length - 1),
          p.push(new THREE.Vector2(f, 1 - d));
      }
      c.push(u), h.push(p);
    }
    for (l = 0; l < this.heightSegments; l++) {
      for (s = 0; s < this.widthSegments; s++) {
        var E = c[l][s + 1],
          g = c[l][s],
          v = c[l + 1][s],
          y = c[l + 1][s + 1],
          T = this.vertices[E].clone().normalize(),
          R = this.vertices[g].clone().normalize(),
          x = this.vertices[v].clone().normalize(),
          H = this.vertices[y].clone().normalize(),
          b = h[l][s + 1].clone(),
          w = h[l][s].clone(),
          _ = h[l + 1][s].clone(),
          M = h[l + 1][s + 1].clone();
        Math.abs(this.vertices[E].y) === this.radius
          ? (this.faces.push(new THREE.Face3(E, v, y, [T, x, H])),
            this.faceVertexUvs[0].push([b, _, M]))
          : Math.abs(this.vertices[v].y) === this.radius
          ? (this.faces.push(new THREE.Face3(E, g, v, [T, R, x])),
            this.faceVertexUvs[0].push([b, w, _]))
          : (this.faces.push(new THREE.Face3(E, g, y, [T, R, H])),
            this.faceVertexUvs[0].push([b, w, M]),
            this.faces.push(new THREE.Face3(g, v, y, [R, x, H])),
            this.faceVertexUvs[0].push([w.clone(), _, M.clone()]));
      }
    }
    this.computeCentroids(),
      this.computeFaceNormals(),
      this.boundingSphere = new THREE.Sphere(new THREE.Vector3(), e);
  },
  THREE.SphereGeometry.prototype = Object.create(THREE.Geometry.prototype),
  THREE.TextGeometry = function (e, t) {
    t = t || {};
    var i = THREE.FontUtils.generateShapes(e, t);
    t.amount = void 0 !== t.height ? t.height : 50,
      void 0 === t.bevelThickness && (t.bevelThickness = 10),
      void 0 === t.bevelSize && (t.bevelSize = 8),
      void 0 === t.bevelEnabled && (t.bevelEnabled = !1),
      THREE.ExtrudeGeometry.call(this, i, t);
  },
  THREE.TextGeometry.prototype = Object.create(THREE.ExtrudeGeometry.prototype),
  THREE.TorusGeometry = function (e, t, i, r, n) {
    THREE.Geometry.call(this);
    this.radius = e || 100,
      this.tube = t || 40,
      this.radialSegments = i || 8,
      this.tubularSegments = r || 6,
      this.arc = n || 2 * Math.PI;
    for (
      var o = new THREE.Vector3(), a = [], s = [], l = 0;
      l <= this.radialSegments;
      l++
    ) {
      for (var c = 0; c <= this.tubularSegments; c++) {
        var h = c / this.tubularSegments * this.arc,
          u = l / this.radialSegments * Math.PI * 2;
        o.x = this.radius * Math.cos(h), o.y = this.radius * Math.sin(h);
        var p = new THREE.Vector3();
        p.x = (this.radius + this.tube * Math.cos(u)) * Math.cos(h),
          p.y = (this.radius + this.tube * Math.cos(u)) * Math.sin(h),
          p.z = this.tube * Math.sin(u),
          this.vertices.push(p),
          a.push(
            new THREE.Vector2(
              c / this.tubularSegments,
              l / this.radialSegments,
            ),
          ),
          s.push(p.clone().sub(o).normalize());
      }
    }
    for (l = 1; l <= this.radialSegments; l++) {
      for (c = 1; c <= this.tubularSegments; c++) {
        var f = (this.tubularSegments + 1) * l + c - 1,
          d = (this.tubularSegments + 1) * (l - 1) + c - 1,
          m = (this.tubularSegments + 1) * (l - 1) + c,
          E = (this.tubularSegments + 1) * l + c,
          g = new THREE.Face3(f, d, E, [s[f], s[d], s[E]]);
        g.normal.add(s[f]),
          g.normal.add(s[d]),
          g.normal.add(s[E]),
          g.normal.normalize(),
          this.faces.push(g),
          this.faceVertexUvs[0].push([
            a[f].clone(),
            a[d].clone(),
            a[E].clone(),
          ]),
          (g = new THREE.Face3(d, m, E, [s[d], s[m], s[E]])).normal.add(s[d]),
          g.normal.add(s[m]),
          g.normal.add(s[E]),
          g.normal.normalize(),
          this.faces.push(g),
          this.faceVertexUvs[0].push([
            a[d].clone(),
            a[m].clone(),
            a[E].clone(),
          ]);
      }
    }
    this.computeCentroids();
  },
  THREE.TorusGeometry.prototype = Object.create(THREE.Geometry.prototype),
  THREE.TorusKnotGeometry = function (e, t, i, r, n, o, a) {
    THREE.Geometry.call(this);
    this.radius = e || 100,
      this.tube = t || 40,
      this.radialSegments = i || 64,
      this.tubularSegments = r || 8,
      this.p = n || 2,
      this.q = o || 3,
      this.heightScale = a || 1,
      this.grid = new Array(this.radialSegments);
    for (
      var s = new THREE.Vector3(),
        l = new THREE.Vector3(),
        c = new THREE.Vector3(),
        h = 0;
      h < this.radialSegments;
      ++h
    ) {
      this.grid[h] = new Array(this.tubularSegments);
      var u = h / this.radialSegments * 2 * this.p * Math.PI,
        p = C(u, this.q, this.p, this.radius, this.heightScale),
        f = C(u + .01, this.q, this.p, this.radius, this.heightScale);
      s.subVectors(f, p),
        l.addVectors(f, p),
        c.crossVectors(s, l),
        l.crossVectors(c, s),
        c.normalize(),
        l.normalize();
      for (var d = 0; d < this.tubularSegments; ++d) {
        var m = d / this.tubularSegments * 2 * Math.PI,
          E = -this.tube * Math.cos(m),
          g = this.tube * Math.sin(m),
          v = new THREE.Vector3();
        v.x = p.x + E * l.x + g * c.x,
          v.y = p.y + E * l.y + g * c.y,
          v.z = p.z + E * l.z + g * c.z,
          this.grid[h][d] = this.vertices.push(v) - 1;
      }
    }
    for (h = 0; h < this.radialSegments; ++h) {
      for (d = 0; d < this.tubularSegments; ++d) {
        var y = (h + 1) % this.radialSegments,
          T = (d + 1) % this.tubularSegments,
          R = this.grid[h][d],
          x = this.grid[y][d],
          H = this.grid[y][T],
          b = this.grid[h][T],
          w = new THREE.Vector2(
            h / this.radialSegments,
            d / this.tubularSegments,
          ),
          _ = new THREE.Vector2(
            (h + 1) / this.radialSegments,
            d / this.tubularSegments,
          ),
          M = new THREE.Vector2(
            (h + 1) / this.radialSegments,
            (d + 1) / this.tubularSegments,
          ),
          S = new THREE.Vector2(
            h / this.radialSegments,
            (d + 1) / this.tubularSegments,
          );
        this.faces.push(new THREE.Face3(R, x, b)),
          this.faceVertexUvs[0].push([w, _, S]),
          this.faces.push(new THREE.Face3(x, H, b)),
          this.faceVertexUvs[0].push([_.clone(), M, S.clone()]);
      }
    }
    function C(e, t, i, r, n) {
      var o = Math.cos(e),
        a = Math.sin(e),
        s = t / i * e,
        l = Math.cos(s),
        c = r * (2 + l) * .5 * o,
        h = r * (2 + l) * a * .5,
        u = n * r * Math.sin(s) * .5;
      return new THREE.Vector3(c, h, u);
    }
    this.computeCentroids(),
      this.computeFaceNormals(),
      this.computeVertexNormals();
  },
  THREE.TorusKnotGeometry.prototype = Object.create(THREE.Geometry.prototype),
  THREE.TubeGeometry = function (e, t, i, r, n) {
    THREE.Geometry.call(this),
      this.path = e,
      this.segments = t || 64,
      this.radius = i || 1,
      this.radialSegments = r || 8,
      this.closed = n || !1,
      this.grid = [];
    var o,
      a,
      s,
      l,
      c,
      h,
      u,
      p,
      f,
      d,
      m,
      E,
      g,
      v,
      y,
      T,
      R,
      x,
      H,
      b,
      w,
      _,
      M = this,
      S = this.segments + 1,
      C = new THREE.Vector3(),
      A = new THREE.TubeGeometry.FrenetFrames(
        this.path,
        this.segments,
        this.closed,
      ),
      L = A.tangents,
      P = A.normals,
      D = A.binormals;
    for (
      this.tangents = L, this.normals = P, this.binormals = D, p = 0; p < S; p++
    ) {
      for (
        this.grid[p] = [],
          s = p / (S - 1),
          u = e.getPointAt(s),
          L[p],
          o = P[p],
          a = D[p],
          f = 0;
        f < this.radialSegments;
        f++
      ) {
        l = f / this.radialSegments * 2 * Math.PI,
          c = -this.radius * Math.cos(l),
          h = this.radius * Math.sin(l),
          C.copy(u),
          C.x += c * o.x + h * a.x,
          C.y += c * o.y + h * a.y,
          C.z += c * o.z + h * a.z,
          this.grid[p][f] =
            (b = C.x,
              w = C.y,
              _ = C.z,
              M.vertices.push(new THREE.Vector3(b, w, _)) - 1);
      }
    }
    for (p = 0; p < this.segments; p++) {
      for (f = 0; f < this.radialSegments; f++) {
        d = this.closed
          ? (p + 1) % this.segments
          : p + 1,
          m = (f + 1) % this.radialSegments,
          E = this.grid[p][f],
          g = this.grid[d][f],
          v = this.grid[d][m],
          y = this.grid[p][m],
          T = new THREE.Vector2(p / this.segments, f / this.radialSegments),
          R = new THREE.Vector2(
            (p + 1) / this.segments,
            f / this.radialSegments,
          ),
          x = new THREE.Vector2(
            (p + 1) / this.segments,
            (f + 1) / this.radialSegments,
          ),
          H = new THREE.Vector2(
            p / this.segments,
            (f + 1) / this.radialSegments,
          ),
          this.faces.push(new THREE.Face3(E, g, y)),
          this.faceVertexUvs[0].push([T, R, H]),
          this.faces.push(new THREE.Face3(g, v, y)),
          this.faceVertexUvs[0].push([R.clone(), x, H.clone()]);
      }
    }
    this.computeCentroids(),
      this.computeFaceNormals(),
      this.computeVertexNormals();
  },
  THREE.TubeGeometry.prototype = Object.create(THREE.Geometry.prototype),
  THREE.TubeGeometry.FrenetFrames = function (e, t, i) {
    new THREE.Vector3();
    var r,
      n,
      o,
      a,
      s,
      l,
      c,
      h = new THREE.Vector3(),
      u = (new THREE.Vector3(), []),
      p = [],
      f = [],
      d = new THREE.Vector3(),
      m = new THREE.Matrix4(),
      E = t + 1,
      g = 1e-4;
    for (
      this.tangents = u, this.normals = p, this.binormals = f, l = 0; l < E; l++
    ) {
      c = l / (E - 1), u[l] = e.getTangentAt(c), u[l].normalize();
    }
    for (
      function () {
        p[0] = new THREE.Vector3(),
          f[0] = new THREE.Vector3(),
          n = Number.MAX_VALUE,
          o = Math.abs(u[0].x),
          a = Math.abs(u[0].y),
          s = Math.abs(u[0].z),
          o <= n && (n = o, h.set(1, 0, 0));
        a <= n && (n = a, h.set(0, 1, 0));
        s <= n && h.set(0, 0, 1);
        d.crossVectors(u[0], h).normalize(),
          p[0].crossVectors(u[0], d),
          f[0].crossVectors(u[0], p[0]);
      }(), l = 1;
      l < E;
      l++
    ) {
      p[l] = p[l - 1].clone(),
        f[l] = f[l - 1].clone(),
        d.crossVectors(u[l - 1], u[l]),
        d.length() > g &&
        (d.normalize(),
          r = Math.acos(THREE.Math.clamp(u[l - 1].dot(u[l]), -1, 1)),
          p[l].applyMatrix4(m.makeRotationAxis(d, r))),
        f[l].crossVectors(u[l], p[l]);
    }
    if (i) {
      for (
        r = Math.acos(THREE.Math.clamp(p[0].dot(p[E - 1]), -1, 1)),
          r /= E - 1,
          0 < u[0].dot(d.crossVectors(p[0], p[E - 1])) && (r = -r),
          l = 1;
        l < E;
        l++
      ) {
        p[l].applyMatrix4(m.makeRotationAxis(u[l], r * l)),
          f[l].crossVectors(u[l], p[l]);
      }
    }
  },
  THREE.PolyhedronGeometry = function (e, t, i, r) {
    THREE.Geometry.call(this), i = i || 1, r = r || 0;
    for (var f = this, n = 0, o = e.length; n < o; n++) {
      v(new THREE.Vector3(e[n][0], e[n][1], e[n][2]));
    }
    var a = this.vertices, s = [];
    for (n = 0, o = t.length; n < o; n++) {
      var l = a[t[n][0]], c = a[t[n][1]], h = a[t[n][2]];
      s[n] = new THREE.Face3(l.index, c.index, h.index, [
        l.clone(),
        c.clone(),
        h.clone(),
      ]);
    }
    for (n = 0, o = s.length; n < o; n++) T(s[n], r);
    for (n = 0, o = this.faceVertexUvs[0].length; n < o; n++) {
      var u = this.faceVertexUvs[0][n],
        p = u[0].x,
        d = u[1].x,
        m = u[2].x,
        E = Math.max(p, Math.max(d, m)),
        g = Math.min(p, Math.min(d, m));
      .9 < E && g < .1 &&
        (p < .2 && (u[0].x += 1),
          d < .2 && (u[1].x += 1),
          m < .2 && (u[2].x += 1));
    }
    for (n = 0, o = this.vertices.length; n < o; n++) {
      this.vertices[n].multiplyScalar(i);
    }
    function v(e) {
      var t = e.normalize().clone();
      t.index = f.vertices.push(t) - 1;
      var i,
        r = R(e) / 2 / Math.PI + .5,
        n =
          (i = e,
            Math.atan2(-i.y, Math.sqrt(i.x * i.x + i.z * i.z)) / Math.PI + .5);
      return t.uv = new THREE.Vector2(r, 1 - n), t;
    }
    function y(e, t, i) {
      var r = new THREE.Face3(e.index, t.index, i.index, [
        e.clone(),
        t.clone(),
        i.clone(),
      ]);
      r.centroid.add(e).add(t).add(i).divideScalar(3), f.faces.push(r);
      var n = R(r.centroid);
      f.faceVertexUvs[0].push([x(e.uv, e, n), x(t.uv, t, n), x(i.uv, i, n)]);
    }
    function T(e, t) {
      for (
        var i = Math.pow(2, t),
          r = (Math.pow(4, t), v(f.vertices[e.a])),
          n = v(f.vertices[e.b]),
          o = v(f.vertices[e.c]),
          a = [],
          s = 0;
        s <= i;
        s++
      ) {
        a[s] = [];
        for (
          var l = v(r.clone().lerp(o, s / i)),
            c = v(n.clone().lerp(o, s / i)),
            h = i - s,
            u = 0;
          u <= h;
          u++
        ) {
          a[s][u] = 0 == u && s == i ? l : v(l.clone().lerp(c, u / h));
        }
      }
      for (s = 0; s < i; s++) {
        for (u = 0; u < 2 * (i - s) - 1; u++) {
          var p = Math.floor(u / 2);
          u % 2 == 0
            ? y(a[s][p + 1], a[s + 1][p], a[s][p])
            : y(a[s][p + 1], a[s + 1][p + 1], a[s + 1][p]);
        }
      }
    }
    function R(e) {
      return Math.atan2(e.z, -e.x);
    }
    function x(e, t, i) {
      return i < 0 && 1 === e.x && (e = new THREE.Vector2(e.x - 1, e.y)),
        0 === t.x && 0 === t.z &&
        (e = new THREE.Vector2(i / 2 / Math.PI + .5, e.y)),
        e.clone();
    }
    this.mergeVertices(),
      this.computeCentroids(),
      this.computeFaceNormals(),
      this.boundingSphere = new THREE.Sphere(new THREE.Vector3(), i);
  },
  THREE.PolyhedronGeometry.prototype = Object.create(THREE.Geometry.prototype),
  THREE.IcosahedronGeometry = function (e, t) {
    this.radius = e, this.detail = t;
    var i = (1 + Math.sqrt(5)) / 2,
      r = [
        [-1, i, 0],
        [1, i, 0],
        [-1, -i, 0],
        [1, -i, 0],
        [0, -1, i],
        [0, 1, i],
        [0, -1, -i],
        [0, 1, -i],
        [i, 0, -1],
        [i, 0, 1],
        [-i, 0, -1],
        [-i, 0, 1],
      ];
    THREE.PolyhedronGeometry.call(
      this,
      r,
      [
        [0, 11, 5],
        [0, 5, 1],
        [0, 1, 7],
        [0, 7, 10],
        [0, 10, 11],
        [1, 5, 9],
        [5, 11, 4],
        [11, 10, 2],
        [10, 7, 6],
        [7, 1, 8],
        [3, 9, 4],
        [3, 4, 2],
        [3, 2, 6],
        [3, 6, 8],
        [3, 8, 9],
        [4, 9, 5],
        [2, 4, 11],
        [6, 2, 10],
        [8, 6, 7],
        [9, 8, 1],
      ],
      e,
      t,
    );
  },
  THREE.IcosahedronGeometry.prototype = Object.create(THREE.Geometry.prototype),
  THREE.OctahedronGeometry = function (e, t) {
    THREE.PolyhedronGeometry.call(
      this,
      [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]],
      [[0, 2, 4], [0, 4, 3], [0, 3, 5], [0, 5, 2], [1, 2, 5], [1, 5, 3], [
        1,
        3,
        4,
      ], [1, 4, 2]],
      e,
      t,
    );
  },
  THREE.OctahedronGeometry.prototype = Object.create(THREE.Geometry.prototype),
  THREE.TetrahedronGeometry = function (e, t) {
    THREE.PolyhedronGeometry.call(
      this,
      [[1, 1, 1], [-1, -1, 1], [-1, 1, -1], [1, -1, -1]],
      [[2, 1, 0], [0, 3, 2], [1, 3, 0], [2, 3, 1]],
      e,
      t,
    );
  },
  THREE.TetrahedronGeometry.prototype = Object.create(THREE.Geometry.prototype),
  THREE.ParametricGeometry = function (e, t, i) {
    THREE.Geometry.call(this);
    var r,
      n,
      o,
      a,
      s,
      l,
      c,
      h,
      u,
      p,
      f,
      d,
      m = this.vertices,
      E = this.faces,
      g = this.faceVertexUvs[0],
      v = t + 1;
    for (r = 0; r <= i; r++) {
      for (a = r / i, n = 0; n <= t; n++) o = e(n / t, a), m.push(o);
    }
    for (r = 0; r < i; r++) {
      for (n = 0; n < t; n++) {
        l = (s = r * v + n) + 1,
          c = (r + 1) * v + n + 1,
          h = (r + 1) * v + n,
          u = new THREE.Vector2(n / t, r / i),
          p = new THREE.Vector2((n + 1) / t, r / i),
          f = new THREE.Vector2((n + 1) / t, (r + 1) / i),
          d = new THREE.Vector2(n / t, (r + 1) / i),
          E.push(new THREE.Face3(s, l, h)),
          g.push([u, p, d]),
          E.push(new THREE.Face3(l, c, h)),
          g.push([p.clone(), f, d.clone()]);
      }
    }
    this.computeCentroids(),
      this.computeFaceNormals(),
      this.computeVertexNormals();
  },
  THREE.ParametricGeometry.prototype = Object.create(THREE.Geometry.prototype),
  THREE.AxisHelper = function (e) {
    e = e || 1;
    var t = new THREE.Geometry();
    t.vertices.push(
      new THREE.Vector3(),
      new THREE.Vector3(e, 0, 0),
      new THREE.Vector3(),
      new THREE.Vector3(0, e, 0),
      new THREE.Vector3(),
      new THREE.Vector3(0, 0, e),
    ),
      t.colors.push(
        new THREE.Color(16711680),
        new THREE.Color(16755200),
        new THREE.Color(65280),
        new THREE.Color(11206400),
        new THREE.Color(255),
        new THREE.Color(43775),
      );
    var i = new THREE.LineBasicMaterial({ vertexColors: THREE.VertexColors });
    THREE.Line.call(this, t, i, THREE.LinePieces);
  },
  THREE.AxisHelper.prototype = Object.create(THREE.Line.prototype),
  THREE.ArrowHelper = function (e, t, i, r) {
    THREE.Object3D.call(this),
      void 0 === r && (r = 16776960),
      void 0 === i && (i = 1),
      this.position = t;
    var n = new THREE.Geometry();
    n.vertices.push(new THREE.Vector3(0, 0, 0)),
      n.vertices.push(new THREE.Vector3(0, 1, 0)),
      this.line = new THREE.Line(n, new THREE.LineBasicMaterial({ color: r })),
      this.line.matrixAutoUpdate = !1,
      this.add(this.line);
    var o = new THREE.CylinderGeometry(0, .05, .25, 5, 1);
    o.applyMatrix((new THREE.Matrix4()).makeTranslation(0, .875, 0)),
      this.cone = new THREE.Mesh(o, new THREE.MeshBasicMaterial({ color: r })),
      this.cone.matrixAutoUpdate = !1,
      this.add(this.cone),
      this.setDirection(e),
      this.setLength(i);
  },
  THREE.ArrowHelper.prototype = Object.create(THREE.Object3D.prototype),
  THREE.ArrowHelper.prototype.setDirection = function () {
    var t, i = new THREE.Vector3();
    return function (e) {
      .99999 < e.y ? this.quaternion.set(0, 0, 0, 1)
      : e.y < -.99999 ? this.quaternion.set(1, 0, 0, 0)
      : (i.set(e.z, 0, -e.x).normalize(),
        t = Math.acos(e.y),
        this.quaternion.setFromAxisAngle(i, t));
    };
  }(),
  THREE.ArrowHelper.prototype.setLength = function (e) {
    this.scale.set(e, e, e);
  },
  THREE.ArrowHelper.prototype.setColor = function (e) {
    this.line.material.color.setHex(e), this.cone.material.color.setHex(e);
  },
  THREE.BoxHelper = function (e) {
    var t = [
      new THREE.Vector3(1, 1, 1),
      new THREE.Vector3(-1, 1, 1),
      new THREE.Vector3(-1, -1, 1),
      new THREE.Vector3(1, -1, 1),
      new THREE.Vector3(1, 1, -1),
      new THREE.Vector3(-1, 1, -1),
      new THREE.Vector3(-1, -1, -1),
      new THREE.Vector3(1, -1, -1),
    ];
    this.vertices = t;
    var i = new THREE.Geometry();
    i.vertices.push(
      t[0],
      t[1],
      t[1],
      t[2],
      t[2],
      t[3],
      t[3],
      t[0],
      t[4],
      t[5],
      t[5],
      t[6],
      t[6],
      t[7],
      t[7],
      t[4],
      t[0],
      t[4],
      t[1],
      t[5],
      t[2],
      t[6],
      t[3],
      t[7],
    ),
      THREE.Line.call(
        this,
        i,
        new THREE.LineBasicMaterial({ color: 16776960 }),
        THREE.LinePieces,
      ),
      void 0 !== e && this.update(e);
  },
  THREE.BoxHelper.prototype = Object.create(THREE.Line.prototype),
  THREE.BoxHelper.prototype.update = function (e) {
    var t = e.geometry;
    null === t.boundingBox && t.computeBoundingBox();
    var i = t.boundingBox.min, r = t.boundingBox.max, n = this.vertices;
    n[0].set(r.x, r.y, r.z),
      n[1].set(i.x, r.y, r.z),
      n[2].set(i.x, i.y, r.z),
      n[3].set(r.x, i.y, r.z),
      n[4].set(r.x, r.y, i.z),
      n[5].set(i.x, r.y, i.z),
      n[6].set(i.x, i.y, i.z),
      n[7].set(r.x, i.y, i.z),
      this.geometry.computeBoundingSphere(),
      this.geometry.verticesNeedUpdate = !0,
      this.matrixAutoUpdate = !1,
      this.matrixWorld = e.matrixWorld;
  },
  THREE.BoundingBoxHelper = function (e, t) {
    var i = t || 8947848;
    this.object = e,
      this.box = new THREE.Box3(),
      THREE.Mesh.call(
        this,
        new THREE.CubeGeometry(1, 1, 1),
        new THREE.MeshBasicMaterial({ color: i, wireframe: !0 }),
      );
  },
  THREE.BoundingBoxHelper.prototype = Object.create(THREE.Mesh.prototype),
  THREE.BoundingBoxHelper.prototype.update = function () {
    this.box.setFromObject(this.object),
      this.box.size(this.scale),
      this.box.center(this.position);
  },
  THREE.CameraHelper = function (e) {
    var i = new THREE.Geometry(),
      t = new THREE.LineBasicMaterial({
        color: 16777215,
        vertexColors: THREE.FaceColors,
      }),
      r = {},
      n = 16755200,
      o = 16711680,
      a = 3355443;
    function s(e, t, i) {
      l(e, i), l(t, i);
    }
    function l(e, t) {
      i.vertices.push(new THREE.Vector3()),
        i.colors.push(new THREE.Color(t)),
        void 0 === r[e] && (r[e] = []),
        r[e].push(i.vertices.length - 1);
    }
    s("n1", "n2", n),
      s("n2", "n4", n),
      s("n4", "n3", n),
      s("n3", "n1", n),
      s("f1", "f2", n),
      s("f2", "f4", n),
      s("f4", "f3", n),
      s("f3", "f1", n),
      s("n1", "f1", n),
      s("n2", "f2", n),
      s("n3", "f3", n),
      s("n4", "f4", n),
      s("p", "n1", o),
      s("p", "n2", o),
      s("p", "n3", o),
      s("p", "n4", o),
      s("u1", "u2", 43775),
      s("u2", "u3", 43775),
      s("u3", "u1", 43775),
      s("c", "t", 16777215),
      s("p", "c", a),
      s("cn1", "cn2", a),
      s("cn3", "cn4", a),
      s("cf1", "cf2", a),
      s("cf3", "cf4", a),
      THREE.Line.call(this, i, t, THREE.LinePieces),
      this.camera = e,
      this.matrixWorld = e.matrixWorld,
      this.matrixAutoUpdate = !1,
      this.pointMap = r,
      this.update();
  },
  THREE.CameraHelper.prototype = Object.create(THREE.Line.prototype),
  THREE.CameraHelper.prototype.update = function () {
    var l = new THREE.Vector3(),
      c = new THREE.Camera(),
      h = new THREE.Projector();
    return function () {
      var s = this;
      function e(e, t, i, r) {
        l.set(t, i, r), h.unprojectVector(l, c);
        var n = s.pointMap[e];
        if (void 0 !== n) {
          for (var o = 0, a = n.length; o < a; o++) {s.geometry.vertices[n[o]]
              .copy(l);}
        }
      }
      c.projectionMatrix.copy(this.camera.projectionMatrix),
        e("c", 0, 0, -1),
        e("t", 0, 0, 1),
        e("n1", -1, -1, -1),
        e("n2", 1, -1, -1),
        e("n3", -1, 1, -1),
        e("n4", 1, 1, -1),
        e("f1", -1, -1, 1),
        e("f2", 1, -1, 1),
        e("f3", -1, 1, 1),
        e("f4", 1, 1, 1),
        e("u1", .7, 1.1, -1),
        e("u2", -.7, 1.1, -1),
        e("u3", 0, 2, -1),
        e("cf1", -1, 0, 1),
        e("cf2", 1, 0, 1),
        e("cf3", 0, -1, 1),
        e("cf4", 0, 1, 1),
        e("cn1", -1, 0, -1),
        e("cn2", 1, 0, -1),
        e("cn3", 0, -1, -1),
        e("cn4", 0, 1, -1),
        this.geometry.verticesNeedUpdate = !0;
    };
  }(),
  THREE.DirectionalLightHelper = function (e, t) {
    THREE.Object3D.call(this),
      this.light = e,
      this.light.updateMatrixWorld(),
      this.matrixWorld = e.matrixWorld,
      this.matrixAutoUpdate = !1;
    var i = new THREE.PlaneGeometry(t, t),
      r = new THREE.MeshBasicMaterial({ wireframe: !0, fog: !1 });
    r.color.copy(this.light.color).multiplyScalar(this.light.intensity),
      this.lightPlane = new THREE.Mesh(i, r),
      this.add(this.lightPlane),
      (i = new THREE.Geometry()).vertices.push(new THREE.Vector3()),
      i.vertices.push(new THREE.Vector3()),
      i.computeLineDistances(),
      (r = new THREE.LineBasicMaterial({ fog: !1 })).color.copy(
        this.light.color,
      ).multiplyScalar(this.light.intensity),
      this.targetLine = new THREE.Line(i, r),
      this.add(this.targetLine),
      this.update();
  },
  THREE.DirectionalLightHelper.prototype = Object.create(
    THREE.Object3D.prototype,
  ),
  THREE.DirectionalLightHelper.prototype.dispose = function () {
    this.lightPlane.geometry.dispose(),
      this.lightPlane.material.dispose(),
      this.targetLine.geometry.dispose(),
      this.targetLine.material.dispose();
  },
  THREE.DirectionalLightHelper.prototype.update = function () {
    var e = new THREE.Vector3();
    return function () {
      e.getPositionFromMatrix(this.light.matrixWorld).negate(),
        this.lightPlane.lookAt(e),
        this.lightPlane.material.color.copy(this.light.color).multiplyScalar(
          this.light.intensity,
        ),
        this.targetLine.geometry.vertices[1].copy(e),
        this.targetLine.geometry.verticesNeedUpdate = !0,
        this.targetLine.material.color.copy(this.lightPlane.material.color);
    };
  }(),
  THREE.FaceNormalsHelper = function (e, t, i, r) {
    this.object = e, this.size = t || 1;
    for (
      var n = i || 16776960,
        o = r || 1,
        a = new THREE.Geometry(),
        s = 0,
        l = this.object.geometry.faces.length;
      s < l;
      s++
    ) {
      a.vertices.push(new THREE.Vector3()),
        a.vertices.push(new THREE.Vector3());
    }
    THREE.Line.call(
      this,
      a,
      new THREE.LineBasicMaterial({ color: n, linewidth: o }),
      THREE.LinePieces,
    ),
      this.matrixAutoUpdate = !1,
      this.normalMatrix = new THREE.Matrix3(),
      this.update();
  },
  THREE.FaceNormalsHelper.prototype = Object.create(THREE.Line.prototype),
  THREE.FaceNormalsHelper.prototype.update = function (e) {
    var l = new THREE.Vector3();
    return function (e) {
      this.object.updateMatrixWorld(!0),
        this.normalMatrix.getNormalMatrix(this.object.matrixWorld);
      for (
        var t = this.geometry.vertices,
          i = this.object.geometry.faces,
          r = this.object.matrixWorld,
          n = 0,
          o = i.length;
        n < o;
        n++
      ) {
        var a = i[n];
        l.copy(a.normal).applyMatrix3(this.normalMatrix).normalize()
          .multiplyScalar(this.size);
        var s = 2 * n;
        t[s].copy(a.centroid).applyMatrix4(r), t[s + 1].addVectors(t[s], l);
      }
      return this.geometry.verticesNeedUpdate = !0, this;
    };
  }(),
  THREE.GridHelper = function (e, t) {
    var i = new THREE.Geometry(),
      r = new THREE.LineBasicMaterial({ vertexColors: THREE.VertexColors });
    this.color1 = new THREE.Color(4473924),
      this.color2 = new THREE.Color(8947848);
    for (var n = -e; n <= e; n += t) {
      i.vertices.push(
        new THREE.Vector3(-e, 0, n),
        new THREE.Vector3(e, 0, n),
        new THREE.Vector3(n, 0, -e),
        new THREE.Vector3(n, 0, e),
      );
      var o = 0 === n ? this.color1 : this.color2;
      i.colors.push(o, o, o, o);
    }
    THREE.Line.call(this, i, r, THREE.LinePieces);
  },
  THREE.GridHelper.prototype = Object.create(THREE.Line.prototype),
  THREE.GridHelper.prototype.setColors = function (e, t) {
    this.color1.set(e), this.color2.set(t), this.geometry.colorsNeedUpdate = !0;
  },
  THREE.HemisphereLightHelper = function (e, t, i, r) {
    THREE.Object3D.call(this),
      this.light = e,
      this.light.updateMatrixWorld(),
      this.matrixWorld = e.matrixWorld,
      this.matrixAutoUpdate = !1,
      this.colors = [new THREE.Color(), new THREE.Color()];
    var n = new THREE.SphereGeometry(t, 4, 2);
    n.applyMatrix((new THREE.Matrix4()).makeRotationX(-Math.PI / 2));
    for (var o = 0; o < 8; o++) n.faces[o].color = this.colors[o < 4 ? 0 : 1];
    var a = new THREE.MeshBasicMaterial({
      vertexColors: THREE.FaceColors,
      wireframe: !0,
    });
    this.lightSphere = new THREE.Mesh(n, a),
      this.add(this.lightSphere),
      this.update();
  },
  THREE.HemisphereLightHelper.prototype = Object.create(
    THREE.Object3D.prototype,
  ),
  THREE.HemisphereLightHelper.prototype.dispose = function () {
    this.lightSphere.geometry.dispose(), this.lightSphere.material.dispose();
  },
  THREE.HemisphereLightHelper.prototype.update = function () {
    var e = new THREE.Vector3();
    return function () {
      this.colors[0].copy(this.light.color).multiplyScalar(
        this.light.intensity,
      ),
        this.colors[1].copy(this.light.groundColor).multiplyScalar(
          this.light.intensity,
        ),
        this.lightSphere.lookAt(
          e.getPositionFromMatrix(this.light.matrixWorld).negate(),
        ),
        this.lightSphere.geometry.colorsNeedUpdate = !0;
    };
  }(),
  THREE.PointLightHelper = function (e, t) {
    this.light = e, this.light.updateMatrixWorld();
    var i = new THREE.SphereGeometry(t, 4, 2),
      r = new THREE.MeshBasicMaterial({ wireframe: !0, fog: !1 });
    r.color.copy(this.light.color).multiplyScalar(this.light.intensity),
      THREE.Mesh.call(this, i, r),
      this.matrixWorld = this.light.matrixWorld,
      this.matrixAutoUpdate = !1;
  },
  THREE.PointLightHelper.prototype = Object.create(THREE.Mesh.prototype),
  THREE.PointLightHelper.prototype.dispose = function () {
    this.geometry.dispose(), this.material.dispose();
  },
  THREE.PointLightHelper.prototype.update = function () {
    this.material.color.copy(this.light.color).multiplyScalar(
      this.light.intensity,
    );
  },
  THREE.SpotLightHelper = function (e) {
    THREE.Object3D.call(this),
      this.light = e,
      this.light.updateMatrixWorld(),
      this.matrixWorld = e.matrixWorld,
      this.matrixAutoUpdate = !1;
    var t = new THREE.CylinderGeometry(0, 1, 1, 8, 1, !0);
    t.applyMatrix((new THREE.Matrix4()).makeTranslation(0, -.5, 0)),
      t.applyMatrix((new THREE.Matrix4()).makeRotationX(-Math.PI / 2));
    var i = new THREE.MeshBasicMaterial({ wireframe: !0, fog: !1 });
    this.cone = new THREE.Mesh(t, i), this.add(this.cone), this.update();
  },
  THREE.SpotLightHelper.prototype = Object.create(THREE.Object3D.prototype),
  THREE.SpotLightHelper.prototype.dispose = function () {
    this.cone.geometry.dispose(), this.cone.material.dispose();
  },
  THREE.SpotLightHelper.prototype.update = function () {
    var i = new THREE.Vector3(), r = new THREE.Vector3();
    return function () {
      var e = this.light.distance ? this.light.distance : 1e4,
        t = e * Math.tan(this.light.angle);
      this.cone.scale.set(t, t, e),
        i.getPositionFromMatrix(this.light.matrixWorld),
        r.getPositionFromMatrix(this.light.target.matrixWorld),
        this.cone.lookAt(r.sub(i)),
        this.cone.material.color.copy(this.light.color).multiplyScalar(
          this.light.intensity,
        );
    };
  }(),
  THREE.VertexNormalsHelper = function (e, t, i, r) {
    this.object = e, this.size = t || 1;
    for (
      var n = i || 16711680,
        o = r || 1,
        a = new THREE.Geometry(),
        s = (e.geometry.vertices, e.geometry.faces),
        l = 0,
        c = s.length;
      l < c;
      l++
    ) {
      for (var h = 0, u = s[l].vertexNormals.length; h < u; h++) {
        a.vertices.push(new THREE.Vector3()),
          a.vertices.push(new THREE.Vector3());
      }
    }
    THREE.Line.call(
      this,
      a,
      new THREE.LineBasicMaterial({ color: n, linewidth: o }),
      THREE.LinePieces,
    ),
      this.matrixAutoUpdate = !1,
      this.normalMatrix = new THREE.Matrix3(),
      this.update();
  },
  THREE.VertexNormalsHelper.prototype = Object.create(THREE.Line.prototype),
  THREE.VertexNormalsHelper.prototype.update = function (e) {
    var d = new THREE.Vector3();
    return function (e) {
      var t = ["a", "b", "c", "d"];
      this.object.updateMatrixWorld(!0),
        this.normalMatrix.getNormalMatrix(this.object.matrixWorld);
      for (
        var i = this.geometry.vertices,
          r = this.object.geometry.vertices,
          n = this.object.geometry.faces,
          o = this.object.matrixWorld,
          a = 0,
          s = 0,
          l = n.length;
        s < l;
        s++
      ) {
        for (var c = n[s], h = 0, u = c.vertexNormals.length; h < u; h++) {
          var p = r[c[t[h]]], f = c.vertexNormals[h];
          i[a].copy(p).applyMatrix4(o),
            d.copy(f).applyMatrix3(this.normalMatrix).normalize()
              .multiplyScalar(this.size),
            d.add(i[a]),
            i[a += 1].copy(d),
            a += 1;
        }
      }
      return this.geometry.verticesNeedUpdate = !0, this;
    };
  }(),
  THREE.VertexTangentsHelper = function (e, t, i, r) {
    this.object = e, this.size = t || 1;
    for (
      var n = i || 255,
        o = r || 1,
        a = new THREE.Geometry(),
        s = (e.geometry.vertices, e.geometry.faces),
        l = 0,
        c = s.length;
      l < c;
      l++
    ) {
      for (var h = 0, u = s[l].vertexTangents.length; h < u; h++) {
        a.vertices.push(new THREE.Vector3()),
          a.vertices.push(new THREE.Vector3());
      }
    }
    THREE.Line.call(
      this,
      a,
      new THREE.LineBasicMaterial({ color: n, linewidth: o }),
      THREE.LinePieces,
    ),
      this.matrixAutoUpdate = !1,
      this.update();
  },
  THREE.VertexTangentsHelper.prototype = Object.create(THREE.Line.prototype),
  THREE.VertexTangentsHelper.prototype.update = function (e) {
    var d = new THREE.Vector3();
    return function (e) {
      var t = ["a", "b", "c", "d"];
      this.object.updateMatrixWorld(!0);
      for (
        var i = this.geometry.vertices,
          r = this.object.geometry.vertices,
          n = this.object.geometry.faces,
          o = this.object.matrixWorld,
          a = 0,
          s = 0,
          l = n.length;
        s < l;
        s++
      ) {
        for (var c = n[s], h = 0, u = c.vertexTangents.length; h < u; h++) {
          var p = r[c[t[h]]], f = c.vertexTangents[h];
          i[a].copy(p).applyMatrix4(o),
            d.copy(f).transformDirection(o).multiplyScalar(this.size),
            d.add(i[a]),
            i[a += 1].copy(d),
            a += 1;
        }
      }
      return this.geometry.verticesNeedUpdate = !0, this;
    };
  }(),
  THREE.WireframeHelper = function (e) {
    for (
      var t = [0, 0],
        i = {},
        r = function (e, t) {
          return e - t;
        },
        n = ["a", "b", "c", "d"],
        o = new THREE.Geometry(),
        a = e.geometry.vertices,
        s = e.geometry.faces,
        l = 0,
        c = s.length;
      l < c;
      l++
    ) {
      for (var h = s[l], u = 0; u < 3; u++) {
        t[0] = h[n[u]], t[1] = h[n[(u + 1) % 3]], t.sort(r);
        var p = t.toString();
        void 0 === i[p] &&
          (o.vertices.push(a[t[0]]), o.vertices.push(a[t[1]]), i[p] = !0);
      }
    }
    THREE.Line.call(
      this,
      o,
      new THREE.LineBasicMaterial({ color: 16777215 }),
      THREE.LinePieces,
    ),
      this.matrixAutoUpdate = !1,
      this.matrixWorld = e.matrixWorld;
  },
  THREE.WireframeHelper.prototype = Object.create(THREE.Line.prototype),
  THREE.ImmediateRenderObject = function () {
    THREE.Object3D.call(this), this.render = function (e) {};
  },
  THREE.ImmediateRenderObject.prototype = Object.create(
    THREE.Object3D.prototype,
  ),
  THREE.LensFlare = function (e, t, i, r, n) {
    THREE.Object3D.call(this),
      this.lensFlares = [],
      this.positionScreen = new THREE.Vector3(),
      (this.customUpdateCallback = void 0) !== e && this.add(e, t, i, r, n);
  },
  THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype),
  THREE.LensFlare.prototype.add = function (e, t, i, r, n, o) {
    void 0 === t && (t = -1),
      void 0 === i && (i = 0),
      void 0 === o && (o = 1),
      void 0 === n && (n = new THREE.Color(16777215)),
      void 0 === r && (r = THREE.NormalBlending),
      i = Math.min(i, Math.max(0, i)),
      this.lensFlares.push({
        texture: e,
        size: t,
        distance: i,
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        rotation: 1,
        opacity: o,
        color: n,
        blending: r,
      });
  },
  THREE.LensFlare.prototype.updateLensFlares = function () {
    var e,
      t,
      i = this.lensFlares.length,
      r = 2 * -this.positionScreen.x,
      n = 2 * -this.positionScreen.y;
    for (e = 0; e < i; e++) {
      (t = this.lensFlares[e]).x = this.positionScreen.x + r * t.distance,
        t.y = this.positionScreen.y + n * t.distance,
        t.wantedRotation = t.x * Math.PI * .25,
        t.rotation += .25 * (t.wantedRotation - t.rotation);
    }
  },
  THREE.MorphBlendMesh = function (e, t) {
    THREE.Mesh.call(this, e, t),
      this.animationsMap = {},
      this.animationsList = [];
    var i = this.geometry.morphTargets.length, r = i - 1, n = i / 1;
    this.createAnimation("__default", 0, r, n),
      this.setAnimationWeight("__default", 1);
  },
  THREE.MorphBlendMesh.prototype = Object.create(THREE.Mesh.prototype),
  THREE.MorphBlendMesh.prototype.createAnimation = function (e, t, i, r) {
    var n = {
      startFrame: t,
      endFrame: i,
      length: i - t + 1,
      fps: r,
      duration: (i - t) / r,
      lastFrame: 0,
      currentFrame: 0,
      active: !1,
      time: 0,
      direction: 1,
      weight: 1,
      directionBackwards: !1,
      mirroredLoop: !1,
    };
    this.animationsMap[e] = n, this.animationsList.push(n);
  },
  THREE.MorphBlendMesh.prototype.autoCreateAnimations = function (e) {
    for (
      var t,
        i = /([a-z]+)(\d+)/,
        r = {},
        n = this.geometry,
        o = 0,
        a = n.morphTargets.length;
      o < a;
      o++
    ) {
      var s = n.morphTargets[o].name.match(i);
      if (s && 1 < s.length) {
        var l = s[1];
        s[2];
        r[l] || (r[l] = { start: 1 / 0, end: -1 / 0 }),
          o < (c = r[l]).start && (c.start = o),
          o > c.end && (c.end = o),
          t || (t = l);
      }
    }
    for (var l in r) {
      var c = r[l];
      this.createAnimation(l, c.start, c.end, e);
    }
    this.firstAnimation = t;
  },
  THREE.MorphBlendMesh.prototype.setAnimationDirectionForward = function (e) {
    var t = this.animationsMap[e];
    t && (t.direction = 1, t.directionBackwards = !1);
  },
  THREE.MorphBlendMesh.prototype.setAnimationDirectionBackward = function (e) {
    var t = this.animationsMap[e];
    t && (t.direction = -1, t.directionBackwards = !0);
  },
  THREE.MorphBlendMesh.prototype.setAnimationFPS = function (e, t) {
    var i = this.animationsMap[e];
    i && (i.fps = t, i.duration = (i.end - i.start) / i.fps);
  },
  THREE.MorphBlendMesh.prototype.setAnimationDuration = function (e, t) {
    var i = this.animationsMap[e];
    i && (i.duration = t, i.fps = (i.end - i.start) / i.duration);
  },
  THREE.MorphBlendMesh.prototype.setAnimationWeight = function (e, t) {
    var i = this.animationsMap[e];
    i && (i.weight = t);
  },
  THREE.MorphBlendMesh.prototype.setAnimationTime = function (e, t) {
    var i = this.animationsMap[e];
    i && (i.time = t);
  },
  THREE.MorphBlendMesh.prototype.getAnimationTime = function (e) {
    var t = 0, i = this.animationsMap[e];
    return i && (t = i.time), t;
  },
  THREE.MorphBlendMesh.prototype.getAnimationDuration = function (e) {
    var t = -1, i = this.animationsMap[e];
    return i && (t = i.duration), t;
  },
  THREE.MorphBlendMesh.prototype.playAnimation = function (e) {
    var t = this.animationsMap[e];
    t ? (t.time = 0, t.active = !0)
    : console.warn("animation[" + e + "] undefined");
  },
  THREE.MorphBlendMesh.prototype.stopAnimation = function (e) {
    var t = this.animationsMap[e];
    t && (t.active = !1);
  },
  THREE.MorphBlendMesh.prototype.update = function (e) {
    for (var t = 0, i = this.animationsList.length; t < i; t++) {
      var r = this.animationsList[t];
      if (r.active) {
        var n = r.duration / r.length;
        r.time += r.direction * e,
          r.mirroredLoop
            ? (r.time > r.duration || r.time < 0) &&
              (r.direction *= -1,
                r.time > r.duration &&
                (r.time = r.duration, r.directionBackwards = !0),
                r.time < 0 && (r.time = 0, r.directionBackwards = !1))
            : (r.time = r.time % r.duration,
              r.time < 0 && (r.time += r.duration));
        var o = r.startFrame +
            THREE.Math.clamp(Math.floor(r.time / n), 0, r.length - 1),
          a = r.weight;
        o !== r.currentFrame &&
          (this.morphTargetInfluences[r.lastFrame] = 0,
            this.morphTargetInfluences[r.currentFrame] = 1 * a,
            this.morphTargetInfluences[o] = 0,
            r.lastFrame = r.currentFrame,
            r.currentFrame = o);
        var s = r.time % n / n;
        r.directionBackwards && (s = 1 - s),
          this.morphTargetInfluences[r.currentFrame] = s * a,
          this.morphTargetInfluences[r.lastFrame] = (1 - s) * a;
      }
    }
  },
  THREE.LensFlarePlugin = function () {
    var R, x, i, H = {};
    function r(e, t) {
      var i = R.createProgram(),
        r = R.createShader(R.FRAGMENT_SHADER),
        n = R.createShader(R.VERTEX_SHADER),
        o = "precision " + t + " float;\n";
      return R.shaderSource(r, o + e.fragmentShader),
        R.shaderSource(n, o + e.vertexShader),
        R.compileShader(r),
        R.compileShader(n),
        R.attachShader(i, r),
        R.attachShader(i, n),
        R.linkProgram(i),
        i;
    }
    this.init = function (e) {
      R = e.context,
        i = (x = e).getPrecision(),
        H.vertices = new Float32Array(16),
        H.faces = new Uint16Array(6);
      var t = 0;
      H.vertices[t++] = -1,
        H.vertices[t++] = -1,
        H.vertices[t++] = 0,
        H.vertices[t++] = 0,
        H.vertices[t++] = 1,
        H.vertices[t++] = -1,
        H.vertices[t++] = 1,
        H.vertices[t++] = 0,
        H.vertices[t++] = 1,
        H.vertices[t++] = 1,
        H.vertices[t++] = 1,
        H.vertices[t++] = 1,
        H.vertices[t++] = -1,
        H.vertices[t++] = 1,
        H.vertices[t++] = 0,
        H.vertices[t++] = 1,
        t = 0,
        H.faces[t++] = 0,
        H.faces[t++] = 1,
        H.faces[t++] = 2,
        H.faces[t++] = 0,
        H.faces[t++] = 2,
        H.faces[t++] = 3,
        H.vertexBuffer = R.createBuffer(),
        H.elementBuffer = R.createBuffer(),
        R.bindBuffer(R.ARRAY_BUFFER, H.vertexBuffer),
        R.bufferData(R.ARRAY_BUFFER, H.vertices, R.STATIC_DRAW),
        R.bindBuffer(R.ELEMENT_ARRAY_BUFFER, H.elementBuffer),
        R.bufferData(R.ELEMENT_ARRAY_BUFFER, H.faces, R.STATIC_DRAW),
        H.tempTexture = R.createTexture(),
        H.occlusionTexture = R.createTexture(),
        R.bindTexture(R.TEXTURE_2D, H.tempTexture),
        R.texImage2D(
          R.TEXTURE_2D,
          0,
          R.RGB,
          16,
          16,
          0,
          R.RGB,
          R.UNSIGNED_BYTE,
          null,
        ),
        R.texParameteri(R.TEXTURE_2D, R.TEXTURE_WRAP_S, R.CLAMP_TO_EDGE),
        R.texParameteri(R.TEXTURE_2D, R.TEXTURE_WRAP_T, R.CLAMP_TO_EDGE),
        R.texParameteri(R.TEXTURE_2D, R.TEXTURE_MAG_FILTER, R.NEAREST),
        R.texParameteri(R.TEXTURE_2D, R.TEXTURE_MIN_FILTER, R.NEAREST),
        R.bindTexture(R.TEXTURE_2D, H.occlusionTexture),
        R.texImage2D(
          R.TEXTURE_2D,
          0,
          R.RGBA,
          16,
          16,
          0,
          R.RGBA,
          R.UNSIGNED_BYTE,
          null,
        ),
        R.texParameteri(R.TEXTURE_2D, R.TEXTURE_WRAP_S, R.CLAMP_TO_EDGE),
        R.texParameteri(R.TEXTURE_2D, R.TEXTURE_WRAP_T, R.CLAMP_TO_EDGE),
        R.texParameteri(R.TEXTURE_2D, R.TEXTURE_MAG_FILTER, R.NEAREST),
        R.texParameteri(R.TEXTURE_2D, R.TEXTURE_MIN_FILTER, R.NEAREST),
        R.getParameter(R.MAX_VERTEX_TEXTURE_IMAGE_UNITS) <= 0
          ? (H.hasVertexTexture = !1,
            H.program = r(THREE.ShaderFlares.lensFlare, i))
          : (H.hasVertexTexture = !0,
            H.program = r(THREE.ShaderFlares.lensFlareVertexTexture, i)),
        H.attributes = {},
        H.uniforms = {},
        H.attributes.vertex = R.getAttribLocation(H.program, "position"),
        H.attributes.uv = R.getAttribLocation(H.program, "uv"),
        H.uniforms.renderType = R.getUniformLocation(H.program, "renderType"),
        H.uniforms.map = R.getUniformLocation(H.program, "map"),
        H.uniforms.occlusionMap = R.getUniformLocation(
          H.program,
          "occlusionMap",
        ),
        H.uniforms.opacity = R.getUniformLocation(H.program, "opacity"),
        H.uniforms.color = R.getUniformLocation(H.program, "color"),
        H.uniforms.scale = R.getUniformLocation(H.program, "scale"),
        H.uniforms.rotation = R.getUniformLocation(H.program, "rotation"),
        H.uniforms.screenPosition = R.getUniformLocation(
          H.program,
          "screenPosition",
        );
    },
      this.render = function (e, t, i, r) {
        var n = e.__webglFlares, o = n.length;
        if (o) {
          var a,
            s,
            l,
            c,
            h,
            u = new THREE.Vector3(),
            p = r / i,
            f = .5 * i,
            d = .5 * r,
            m = 16 / r,
            E = new THREE.Vector2(m * p, m),
            g = new THREE.Vector3(1, 1, 0),
            v = new THREE.Vector2(1, 1),
            y = H.uniforms,
            T = H.attributes;
          for (
            R.useProgram(H.program),
              R.enableVertexAttribArray(H.attributes.vertex),
              R.enableVertexAttribArray(H.attributes.uv),
              R.uniform1i(y.occlusionMap, 0),
              R.uniform1i(y.map, 1),
              R.bindBuffer(R.ARRAY_BUFFER, H.vertexBuffer),
              R.vertexAttribPointer(T.vertex, 2, R.FLOAT, !1, 16, 0),
              R.vertexAttribPointer(T.uv, 2, R.FLOAT, !1, 16, 8),
              R.bindBuffer(R.ELEMENT_ARRAY_BUFFER, H.elementBuffer),
              R.disable(R.CULL_FACE),
              R.depthMask(!1),
              a = 0;
            a < o;
            a++
          ) {
            if (
              m = 16 / r,
                E.set(m * p, m),
                c = n[a],
                u.set(
                  c.matrixWorld.elements[12],
                  c.matrixWorld.elements[13],
                  c.matrixWorld.elements[14],
                ),
                u.applyMatrix4(t.matrixWorldInverse),
                u.applyProjection(t.projectionMatrix),
                g.copy(u),
                v.x = g.x * f + f,
                v.y = g.y * d + d,
                H.hasVertexTexture || 0 < v.x && v.x < i && 0 < v.y && v.y < r
            ) {
              for (
                R.activeTexture(R.TEXTURE1),
                  R.bindTexture(R.TEXTURE_2D, H.tempTexture),
                  R.copyTexImage2D(
                    R.TEXTURE_2D,
                    0,
                    R.RGB,
                    v.x - 8,
                    v.y - 8,
                    16,
                    16,
                    0,
                  ),
                  R.uniform1i(y.renderType, 0),
                  R.uniform2f(y.scale, E.x, E.y),
                  R.uniform3f(y.screenPosition, g.x, g.y, g.z),
                  R.disable(R.BLEND),
                  R.enable(R.DEPTH_TEST),
                  R.drawElements(R.TRIANGLES, 6, R.UNSIGNED_SHORT, 0),
                  R.activeTexture(R.TEXTURE0),
                  R.bindTexture(R.TEXTURE_2D, H.occlusionTexture),
                  R.copyTexImage2D(
                    R.TEXTURE_2D,
                    0,
                    R.RGBA,
                    v.x - 8,
                    v.y - 8,
                    16,
                    16,
                    0,
                  ),
                  R.uniform1i(y.renderType, 1),
                  R.disable(R.DEPTH_TEST),
                  R.activeTexture(R.TEXTURE1),
                  R.bindTexture(R.TEXTURE_2D, H.tempTexture),
                  R.drawElements(R.TRIANGLES, 6, R.UNSIGNED_SHORT, 0),
                  c.positionScreen.copy(g),
                  c.customUpdateCallback
                    ? c.customUpdateCallback(c)
                    : c.updateLensFlares(),
                  R.uniform1i(y.renderType, 2),
                  R.enable(R.BLEND),
                  s = 0,
                  l = c.lensFlares.length;
                s < l;
                s++
              ) {
                .001 < (h = c.lensFlares[s]).opacity && .001 < h.scale &&
                  (g.x = h.x,
                    g.y = h.y,
                    g.z = h.z,
                    m = h.size * h.scale / r,
                    E.x = m * p,
                    E.y = m,
                    R.uniform3f(y.screenPosition, g.x, g.y, g.z),
                    R.uniform2f(y.scale, E.x, E.y),
                    R.uniform1f(y.rotation, h.rotation),
                    R.uniform1f(y.opacity, h.opacity),
                    R.uniform3f(y.color, h.color.r, h.color.g, h.color.b),
                    x.setBlending(
                      h.blending,
                      h.blendEquation,
                      h.blendSrc,
                      h.blendDst,
                    ),
                    x.setTexture(h.texture, 1),
                    R.drawElements(R.TRIANGLES, 6, R.UNSIGNED_SHORT, 0));
              }
            }
          }
          R.enable(R.CULL_FACE), R.enable(R.DEPTH_TEST), R.depthMask(!0);
        }
      };
  },
  THREE.ShadowMapPlugin = function () {
    var S,
      C,
      A,
      L,
      P,
      D,
      F = new THREE.Frustum(),
      N = new THREE.Matrix4(),
      s = new THREE.Vector3(),
      l = new THREE.Vector3(),
      V = new THREE.Vector3();
    function z(e, t) {
      var i = new THREE.DirectionalLight();
      i.isVirtual = !0,
        i.onlyShadow = !0,
        i.castShadow = !0,
        i.shadowCameraNear = e.shadowCameraNear,
        i.shadowCameraFar = e.shadowCameraFar,
        i.shadowCameraLeft = e.shadowCameraLeft,
        i.shadowCameraRight = e.shadowCameraRight,
        i.shadowCameraBottom = e.shadowCameraBottom,
        i.shadowCameraTop = e.shadowCameraTop,
        i.shadowCameraVisible = e.shadowCameraVisible,
        i.shadowDarkness = e.shadowDarkness,
        i.shadowBias = e.shadowCascadeBias[t],
        i.shadowMapWidth = e.shadowCascadeWidth[t],
        i.shadowMapHeight = e.shadowCascadeHeight[t],
        i.pointsWorld = [],
        i.pointsFrustum = [];
      for (var r = i.pointsWorld, n = i.pointsFrustum, o = 0; o < 8; o++) {
        r[o] = new THREE.Vector3(), n[o] = new THREE.Vector3();
      }
      var a = e.shadowCascadeNearZ[t], s = e.shadowCascadeFarZ[t];
      return n[0].set(-1, -1, a),
        n[1].set(1, -1, a),
        n[2].set(-1, 1, a),
        n[3].set(1, 1, a),
        n[4].set(-1, -1, s),
        n[5].set(1, -1, s),
        n[6].set(-1, 1, s),
        n[7].set(1, 1, s),
        i;
    }
    function U(e, t) {
      var i = e.shadowCascadeArray[t];
      i.position.copy(e.position),
        i.target.position.copy(e.target.position),
        i.lookAt(i.target),
        i.shadowCameraVisible = e.shadowCameraVisible,
        i.shadowDarkness = e.shadowDarkness,
        i.shadowBias = e.shadowCascadeBias[t];
      var r = e.shadowCascadeNearZ[t],
        n = e.shadowCascadeFarZ[t],
        o = i.pointsFrustum;
      o[0].z = r,
        o[1].z = r,
        o[2].z = r,
        o[3].z = r,
        o[4].z = n,
        o[5].z = n,
        o[6].z = n,
        o[7].z = n;
    }
    function B(e, t) {
      var i = t.shadowCamera, r = t.pointsFrustum, n = t.pointsWorld;
      s.set(1 / 0, 1 / 0, 1 / 0), l.set(-1 / 0, -1 / 0, -1 / 0);
      for (var o = 0; o < 8; o++) {
        var a = n[o];
        a.copy(r[o]),
          THREE.ShadowMapPlugin.__projector.unprojectVector(a, e),
          a.applyMatrix4(i.matrixWorldInverse),
          a.x < s.x && (s.x = a.x),
          a.x > l.x && (l.x = a.x),
          a.y < s.y && (s.y = a.y),
          a.y > l.y && (l.y = a.y),
          a.z < s.z && (s.z = a.z),
          a.z > l.z && (l.z = a.z);
      }
      i.left = s.x,
        i.right = l.x,
        i.top = l.y,
        i.bottom = s.y,
        i.updateProjectionMatrix();
    }
    this.init = function (e) {
      S = e.context, C = e;
      var t = THREE.ShaderLib.depthRGBA,
        i = THREE.UniformsUtils.clone(t.uniforms);
      A = new THREE.ShaderMaterial({
        fragmentShader: t.fragmentShader,
        vertexShader: t.vertexShader,
        uniforms: i,
      }),
        L = new THREE.ShaderMaterial({
          fragmentShader: t.fragmentShader,
          vertexShader: t.vertexShader,
          uniforms: i,
          morphTargets: !0,
        }),
        P = new THREE.ShaderMaterial({
          fragmentShader: t.fragmentShader,
          vertexShader: t.vertexShader,
          uniforms: i,
          skinning: !0,
        }),
        D = new THREE.ShaderMaterial({
          fragmentShader: t.fragmentShader,
          vertexShader: t.vertexShader,
          uniforms: i,
          morphTargets: !0,
          skinning: !0,
        }),
        A._shadowPass = !0,
        L._shadowPass = !0,
        P._shadowPass = !0,
        D._shadowPass = !0;
    },
      this.render = function (e, t) {
        C.shadowMapEnabled && C.shadowMapAutoUpdate && this.update(e, t);
      },
      this.update = function (e, t) {
        var i, r, n, o, a, s, l, c, h, u, p, f, d, m, E, g = [], v = 0;
        for (
          S.clearColor(1, 1, 1, 1),
            S.disable(S.BLEND),
            S.enable(S.CULL_FACE),
            S.frontFace(S.CCW),
            C.shadowMapCullFace === THREE.CullFaceFront
              ? S.cullFace(S.FRONT)
              : S.cullFace(S.BACK),
            C.setDepthTest(!0),
            i = 0,
            r = e.__lights.length;
          i < r;
          i++
        ) {
          if ((d = e.__lights[i]).castShadow) {
            if (d instanceof THREE.DirectionalLight && d.shadowCascade) {
              for (a = 0; a < d.shadowCascadeCount; a++) {
                var y;
                if (d.shadowCascadeArray[a]) y = d.shadowCascadeArray[a];
                else {
                  (y = z(d, a)).originalCamera = t;
                  var T = new THREE.Gyroscope();
                  T.position = d.shadowCascadeOffset,
                    T.add(y),
                    T.add(y.target),
                    t.add(T),
                    d.shadowCascadeArray[a] = y,
                    console.log("Created virtualLight", y);
                }
                U(d, a), g[v] = y, v++;
              }
            } else g[v] = d, v++;
          }
        }
        for (i = 0, r = g.length; i < r; i++) {
          if (!(d = g[i]).shadowMap) {
            var R = THREE.LinearFilter;
            C.shadowMapType === THREE.PCFSoftShadowMap &&
              (R = THREE.NearestFilter);
            var x = { minFilter: R, magFilter: R, format: THREE.RGBAFormat };
            d.shadowMap = new THREE.WebGLRenderTarget(
              d.shadowMapWidth,
              d.shadowMapHeight,
              x,
            ),
              d.shadowMapSize = new THREE.Vector2(
                d.shadowMapWidth,
                d.shadowMapHeight,
              ),
              d.shadowMatrix = new THREE.Matrix4();
          }
          if (!d.shadowCamera) {
            if (d instanceof THREE.SpotLight) {
              d.shadowCamera = new THREE.PerspectiveCamera(
                d.shadowCameraFov,
                d.shadowMapWidth / d.shadowMapHeight,
                d.shadowCameraNear,
                d.shadowCameraFar,
              );
            } else {
              if (!(d instanceof THREE.DirectionalLight)) {
                console.error("Unsupported light type for shadow");
                continue;
              }
              d.shadowCamera = new THREE.OrthographicCamera(
                d.shadowCameraLeft,
                d.shadowCameraRight,
                d.shadowCameraTop,
                d.shadowCameraBottom,
                d.shadowCameraNear,
                d.shadowCameraFar,
              );
            }
            e.add(d.shadowCamera), !0 === e.autoUpdate && e.updateMatrixWorld();
          }
          for (
            d.shadowCameraVisible && !d.cameraHelper &&
            (d.cameraHelper = new THREE.CameraHelper(d.shadowCamera),
              d.shadowCamera.add(d.cameraHelper)),
              d.isVirtual && y.originalCamera == t && B(t, d),
              s = d.shadowMap,
              l = d.shadowMatrix,
              (c = d.shadowCamera).position.getPositionFromMatrix(
                d.matrixWorld,
              ),
              V.getPositionFromMatrix(d.target.matrixWorld),
              c.lookAt(V),
              c.updateMatrixWorld(),
              c.matrixWorldInverse.getInverse(c.matrixWorld),
              d.cameraHelper &&
              (d.cameraHelper.visible = d.shadowCameraVisible),
              d.shadowCameraVisible && d.cameraHelper.update(),
              l.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
              l.multiply(c.projectionMatrix),
              l.multiply(c.matrixWorldInverse),
              N.multiplyMatrices(c.projectionMatrix, c.matrixWorldInverse),
              F.setFromMatrix(N),
              C.setRenderTarget(s),
              C.clear(),
              n = 0,
              o = (m = e.__webglObjects).length;
            n < o;
            n++
          ) {
            f = (p = m[n]).object,
              p.render = !1,
              f.visible && f.castShadow &&
              ((f instanceof THREE.Mesh || f instanceof THREE.ParticleSystem) &&
                  f.frustumCulled && !F.intersectsObject(f) ||
                (f._modelViewMatrix.multiplyMatrices(
                  c.matrixWorldInverse,
                  f.matrixWorld,
                ),
                  p.render = !0));
          }
          var H, b, w;
          for (n = 0, o = m.length; n < o; n++) {
            (p = m[n]).render &&
              (f = p.object,
                h = p.buffer,
                H = (E = f).material instanceof THREE.MeshFaceMaterial
                  ? E.material.materials[0]
                  : E.material,
                b = 0 < f.geometry.morphTargets.length && H.morphTargets,
                w = f instanceof THREE.SkinnedMesh && H.skinning,
                u = f.customDepthMaterial ? f.customDepthMaterial : w
                  ? b ? D : P
                  : b
                  ? L
                  : A,
                h instanceof THREE.BufferGeometry
                  ? C.renderBufferDirect(c, e.__lights, null, u, h, f)
                  : C.renderBuffer(c, e.__lights, null, u, h, f));
          }
          for (n = 0, o = (m = e.__webglObjectsImmediate).length; n < o; n++) {
            (f = (p = m[n]).object).visible && f.castShadow &&
              (f._modelViewMatrix.multiplyMatrices(
                c.matrixWorldInverse,
                f.matrixWorld,
              ),
                C.renderImmediateObject(c, e.__lights, null, A, f));
          }
        }
        var _ = C.getClearColor(), M = C.getClearAlpha();
        S.clearColor(_.r, _.g, _.b, M),
          S.enable(S.BLEND),
          C.shadowMapCullFace === THREE.CullFaceFront && S.cullFace(S.BACK);
      };
  },
  THREE.ShadowMapPlugin.__projector = new THREE.Projector(),
  THREE.SpritePlugin = function () {
    var v, y, l, T = {};
    function R(e, t) {
      return e.z !== t.z ? t.z - e.z : t.id - e.id;
    }
    this.init = function (e) {
      v = e.context,
        l = (y = e).getPrecision(),
        T.vertices = new Float32Array(16),
        T.faces = new Uint16Array(6);
      var t, i, r, n, o, a, s = 0;
      T.vertices[s++] = -.5,
        T.vertices[s++] = -.5,
        T.vertices[s++] = 0,
        T.vertices[s++] = 0,
        T.vertices[s++] = .5,
        T.vertices[s++] = -.5,
        T.vertices[s++] = 1,
        T.vertices[s++] = 0,
        T.vertices[s++] = .5,
        T.vertices[s++] = .5,
        T.vertices[s++] = 1,
        T.vertices[s++] = 1,
        T.vertices[s++] = -.5,
        T.vertices[s++] = .5,
        T.vertices[s++] = 0,
        T.vertices[s++] = 1,
        s = 0,
        T.faces[s++] = 0,
        T.faces[s++] = 1,
        T.faces[s++] = 2,
        T.faces[s++] = 0,
        T.faces[s++] = 2,
        T.faces[s++] = 3,
        T.vertexBuffer = v.createBuffer(),
        T.elementBuffer = v.createBuffer(),
        v.bindBuffer(v.ARRAY_BUFFER, T.vertexBuffer),
        v.bufferData(v.ARRAY_BUFFER, T.vertices, v.STATIC_DRAW),
        v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, T.elementBuffer),
        v.bufferData(v.ELEMENT_ARRAY_BUFFER, T.faces, v.STATIC_DRAW),
        T.program =
          (t = THREE.ShaderSprite.sprite,
            i = l,
            r = v.createProgram(),
            n = v.createShader(v.FRAGMENT_SHADER),
            o = v.createShader(v.VERTEX_SHADER),
            a = "precision " + i + " float;\n",
            v.shaderSource(n, a + t.fragmentShader),
            v.shaderSource(o, a + t.vertexShader),
            v.compileShader(n),
            v.compileShader(o),
            v.attachShader(r, n),
            v.attachShader(r, o),
            v.linkProgram(r),
            r),
        T.attributes = {},
        T.uniforms = {},
        T.attributes.position = v.getAttribLocation(T.program, "position"),
        T.attributes.uv = v.getAttribLocation(T.program, "uv"),
        T.uniforms.uvOffset = v.getUniformLocation(T.program, "uvOffset"),
        T.uniforms.uvScale = v.getUniformLocation(T.program, "uvScale"),
        T.uniforms.rotation = v.getUniformLocation(T.program, "rotation"),
        T.uniforms.scale = v.getUniformLocation(T.program, "scale"),
        T.uniforms.alignment = v.getUniformLocation(T.program, "alignment"),
        T.uniforms.halfViewport = v.getUniformLocation(
          T.program,
          "halfViewport",
        ),
        T.uniforms.color = v.getUniformLocation(T.program, "color"),
        T.uniforms.map = v.getUniformLocation(T.program, "map"),
        T.uniforms.opacity = v.getUniformLocation(T.program, "opacity"),
        T.uniforms.useScreenCoordinates = v.getUniformLocation(
          T.program,
          "useScreenCoordinates",
        ),
        T.uniforms.sizeAttenuation = v.getUniformLocation(
          T.program,
          "sizeAttenuation",
        ),
        T.uniforms.screenPosition = v.getUniformLocation(
          T.program,
          "screenPosition",
        ),
        T.uniforms.modelViewMatrix = v.getUniformLocation(
          T.program,
          "modelViewMatrix",
        ),
        T.uniforms.projectionMatrix = v.getUniformLocation(
          T.program,
          "projectionMatrix",
        ),
        T.uniforms.fogType = v.getUniformLocation(T.program, "fogType"),
        T.uniforms.fogDensity = v.getUniformLocation(T.program, "fogDensity"),
        T.uniforms.fogNear = v.getUniformLocation(T.program, "fogNear"),
        T.uniforms.fogFar = v.getUniformLocation(T.program, "fogFar"),
        T.uniforms.fogColor = v.getUniformLocation(T.program, "fogColor"),
        T.uniforms.alphaTest = v.getUniformLocation(T.program, "alphaTest");
    },
      this.render = function (e, t, i, r) {
        var n = e.__webglSprites, o = n.length;
        if (o) {
          var a = T.attributes, s = T.uniforms, l = .5 * i, c = .5 * r;
          v.useProgram(T.program),
            v.enableVertexAttribArray(a.position),
            v.enableVertexAttribArray(a.uv),
            v.disable(v.CULL_FACE),
            v.enable(v.BLEND),
            v.bindBuffer(v.ARRAY_BUFFER, T.vertexBuffer),
            v.vertexAttribPointer(a.position, 2, v.FLOAT, !1, 16, 0),
            v.vertexAttribPointer(a.uv, 2, v.FLOAT, !1, 16, 8),
            v.bindBuffer(v.ELEMENT_ARRAY_BUFFER, T.elementBuffer),
            v.uniformMatrix4fv(
              s.projectionMatrix,
              !1,
              t.projectionMatrix.elements,
            ),
            v.activeTexture(v.TEXTURE0),
            v.uniform1i(s.map, 0);
          var h = 0, u = 0, p = e.fog;
          p
            ? (v.uniform3f(s.fogColor, p.color.r, p.color.g, p.color.b),
              p instanceof THREE.Fog
                ? (v.uniform1f(s.fogNear, p.near),
                  v.uniform1f(s.fogFar, p.far),
                  v.uniform1i(s.fogType, 1),
                  u = h = 1)
                : p instanceof THREE.FogExp2 &&
                  (v.uniform1f(s.fogDensity, p.density),
                    v.uniform1i(s.fogType, 2),
                    u = h = 2))
            : (v.uniform1i(s.fogType, 0), u = h = 0);
          var f, d, m, E, g = [];
          for (f = 0; f < o; f++) {
            m = (d = n[f]).material,
              d.visible && 0 !== m.opacity && (m.useScreenCoordinates
                ? d.z = -d.position.z
                : (d._modelViewMatrix.multiplyMatrices(
                  t.matrixWorldInverse,
                  d.matrixWorld,
                ),
                  d.z = -d._modelViewMatrix.elements[14]));
          }
          for (n.sort(R), f = 0; f < o; f++) {
            m = (d = n[f]).material,
              d.visible && 0 !== m.opacity && m.map && m.map.image &&
              m.map.image.width &&
              (v.uniform1f(s.alphaTest, m.alphaTest),
                !0 === m.useScreenCoordinates
                  ? (v.uniform1i(s.useScreenCoordinates, 1),
                    v.uniform3f(
                      s.screenPosition,
                      (d.position.x * y.devicePixelRatio - l) / l,
                      (c - d.position.y * y.devicePixelRatio) / c,
                      Math.max(0, Math.min(1, d.position.z)),
                    ),
                    g[0] = y.devicePixelRatio * d.scale.x,
                    g[1] = y.devicePixelRatio * d.scale.y)
                  : (v.uniform1i(s.useScreenCoordinates, 0),
                    v.uniform1i(s.sizeAttenuation, m.sizeAttenuation ? 1 : 0),
                    v.uniformMatrix4fv(
                      s.modelViewMatrix,
                      !1,
                      d._modelViewMatrix.elements,
                    ),
                    g[0] = d.scale.x,
                    g[1] = d.scale.y),
                h !== (E = e.fog && m.fog
                    ? u
                    : 0) && (v.uniform1i(s.fogType, E), h = E),
                v.uniform2f(s.uvScale, m.uvScale.x, m.uvScale.y),
                v.uniform2f(s.uvOffset, m.uvOffset.x, m.uvOffset.y),
                v.uniform2f(s.alignment, m.alignment.x, m.alignment.y),
                v.uniform1f(s.opacity, m.opacity),
                v.uniform3f(s.color, m.color.r, m.color.g, m.color.b),
                v.uniform1f(s.rotation, d.rotation),
                v.uniform2fv(s.scale, g),
                v.uniform2f(s.halfViewport, l, c),
                y.setBlending(
                  m.blending,
                  m.blendEquation,
                  m.blendSrc,
                  m.blendDst,
                ),
                y.setDepthTest(m.depthTest),
                y.setDepthWrite(m.depthWrite),
                y.setTexture(m.map, 0),
                v.drawElements(v.TRIANGLES, 6, v.UNSIGNED_SHORT, 0));
          }
          v.enable(v.CULL_FACE);
        }
      };
  },
  THREE.DepthPassPlugin = function () {
    this.enabled = !1, this.renderTarget = null;
    var m, E, g, v, y, T, R = new THREE.Frustum(), x = new THREE.Matrix4();
    this.init = function (e) {
      m = e.context, E = e;
      var t = THREE.ShaderLib.depthRGBA,
        i = THREE.UniformsUtils.clone(t.uniforms);
      g = new THREE.ShaderMaterial({
        fragmentShader: t.fragmentShader,
        vertexShader: t.vertexShader,
        uniforms: i,
      }),
        v = new THREE.ShaderMaterial({
          fragmentShader: t.fragmentShader,
          vertexShader: t.vertexShader,
          uniforms: i,
          morphTargets: !0,
        }),
        y = new THREE.ShaderMaterial({
          fragmentShader: t.fragmentShader,
          vertexShader: t.vertexShader,
          uniforms: i,
          skinning: !0,
        }),
        T = new THREE.ShaderMaterial({
          fragmentShader: t.fragmentShader,
          vertexShader: t.vertexShader,
          uniforms: i,
          morphTargets: !0,
          skinning: !0,
        }),
        g._shadowPass = !0,
        v._shadowPass = !0,
        y._shadowPass = !0,
        T._shadowPass = !0;
    },
      this.render = function (e, t) {
        this.enabled && this.update(e, t);
      },
      this.update = function (e, t) {
        var i, r, n, o, a, s, l, c, h, u, p;
        for (
          m.clearColor(1, 1, 1, 1),
            m.disable(m.BLEND),
            E.setDepthTest(!0),
            !0 === e.autoUpdate && e.updateMatrixWorld(),
            t.matrixWorldInverse.getInverse(t.matrixWorld),
            x.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
            R.setFromMatrix(x),
            E.setRenderTarget(this.renderTarget),
            E.clear(),
            i = 0,
            r = (l = e.__webglObjects).length;
          i < r;
          i++
        ) {
          s = (a = l[i]).object,
            a.render = !1,
            s.visible &&
            ((s instanceof THREE.Mesh || s instanceof THREE.ParticleSystem) &&
                s.frustumCulled && !R.intersectsObject(s) ||
              (s._modelViewMatrix.multiplyMatrices(
                t.matrixWorldInverse,
                s.matrixWorld,
              ),
                a.render = !0));
        }
        for (i = 0, r = l.length; i < r; i++) {
          if ((a = l[i]).render) {
            if (
              s = a.object,
                n = a.buffer,
                s instanceof THREE.ParticleSystem && !s.customDepthMaterial
            ) {
              continue;
            }
            (c = (p = s).material instanceof THREE.MeshFaceMaterial
              ? p.material.materials[0]
              : p.material) &&
            E.setMaterialFaces(s.material),
              h = 0 < s.geometry.morphTargets.length && c.morphTargets,
              u = s instanceof THREE.SkinnedMesh && c.skinning,
              o = s.customDepthMaterial ? s.customDepthMaterial : u
                ? h ? T : y
                : h
                ? v
                : g,
              n instanceof THREE.BufferGeometry
                ? E.renderBufferDirect(t, e.__lights, null, o, n, s)
                : E.renderBuffer(t, e.__lights, null, o, n, s);
          }
        }
        for (i = 0, r = (l = e.__webglObjectsImmediate).length; i < r; i++) {
          (s = (a = l[i]).object).visible &&
            (s._modelViewMatrix.multiplyMatrices(
              t.matrixWorldInverse,
              s.matrixWorld,
            ),
              E.renderImmediateObject(t, e.__lights, null, g, s));
        }
        var f = E.getClearColor(), d = E.getClearAlpha();
        m.clearColor(f.r, f.g, f.b, d), m.enable(m.BLEND);
      };
  },
  THREE.ShaderFlares = {
    lensFlareVertexTexture: {
      vertexShader: [
        "uniform lowp int renderType;",
        "uniform vec3 screenPosition;",
        "uniform vec2 scale;",
        "uniform float rotation;",
        "uniform sampler2D occlusionMap;",
        "attribute vec2 position;",
        "attribute vec2 uv;",
        "varying vec2 vUV;",
        "varying float vVisibility;",
        "void main() {",
        "vUV = uv;",
        "vec2 pos = position;",
        "if( renderType == 2 ) {",
        "vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );",
        "visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );",
        "visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );",
        "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );",
        "visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );",
        "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );",
        "visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );",
        "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );",
        "visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );",
        "vVisibility =        visibility.r / 9.0;",
        "vVisibility *= 1.0 - visibility.g / 9.0;",
        "vVisibility *=       visibility.b / 9.0;",
        "vVisibility *= 1.0 - visibility.a / 9.0;",
        "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;",
        "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;",
        "}",
        "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );",
        "}",
      ].join("\n"),
      fragmentShader: [
        "uniform lowp int renderType;",
        "uniform sampler2D map;",
        "uniform float opacity;",
        "uniform vec3 color;",
        "varying vec2 vUV;",
        "varying float vVisibility;",
        "void main() {",
        "if( renderType == 0 ) {",
        "gl_FragColor = vec4( 1.0, 0.0, 1.0, 0.0 );",
        "} else if( renderType == 1 ) {",
        "gl_FragColor = texture2D( map, vUV );",
        "} else {",
        "vec4 texture = texture2D( map, vUV );",
        "texture.a *= opacity * vVisibility;",
        "gl_FragColor = texture;",
        "gl_FragColor.rgb *= color;",
        "}",
        "}",
      ].join("\n"),
    },
    lensFlare: {
      vertexShader: [
        "uniform lowp int renderType;",
        "uniform vec3 screenPosition;",
        "uniform vec2 scale;",
        "uniform float rotation;",
        "attribute vec2 position;",
        "attribute vec2 uv;",
        "varying vec2 vUV;",
        "void main() {",
        "vUV = uv;",
        "vec2 pos = position;",
        "if( renderType == 2 ) {",
        "pos.x = cos( rotation ) * position.x - sin( rotation ) * position.y;",
        "pos.y = sin( rotation ) * position.x + cos( rotation ) * position.y;",
        "}",
        "gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );",
        "}",
      ].join("\n"),
      fragmentShader: [
        "precision mediump float;",
        "uniform lowp int renderType;",
        "uniform sampler2D map;",
        "uniform sampler2D occlusionMap;",
        "uniform float opacity;",
        "uniform vec3 color;",
        "varying vec2 vUV;",
        "void main() {",
        "if( renderType == 0 ) {",
        "gl_FragColor = vec4( texture2D( map, vUV ).rgb, 0.0 );",
        "} else if( renderType == 1 ) {",
        "gl_FragColor = texture2D( map, vUV );",
        "} else {",
        "float visibility = texture2D( occlusionMap, vec2( 0.5, 0.1 ) ).a;",
        "visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) ).a;",
        "visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) ).a;",
        "visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) ).a;",
        "visibility = ( 1.0 - visibility / 4.0 );",
        "vec4 texture = texture2D( map, vUV );",
        "texture.a *= opacity * visibility;",
        "gl_FragColor = texture;",
        "gl_FragColor.rgb *= color;",
        "}",
        "}",
      ].join("\n"),
    },
  },
  THREE.ShaderSprite = {
    sprite: {
      vertexShader: [
        "uniform int useScreenCoordinates;",
        "uniform int sizeAttenuation;",
        "uniform vec3 screenPosition;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform float rotation;",
        "uniform vec2 scale;",
        "uniform vec2 alignment;",
        "uniform vec2 uvOffset;",
        "uniform vec2 uvScale;",
        "uniform vec2 halfViewport;",
        "attribute vec2 position;",
        "attribute vec2 uv;",
        "varying vec2 vUV;",
        "void main() {",
        "vUV = uvOffset + uv * uvScale;",
        "vec2 alignedPosition = ( position + alignment ) * scale;",
        "vec2 rotatedPosition;",
        "rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;",
        "rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;",
        "vec4 finalPosition;",
        "if( useScreenCoordinates != 0 ) {",
        "finalPosition = vec4( screenPosition.xy + ( rotatedPosition / halfViewport ), screenPosition.z, 1.0 );",
        "} else {",
        "finalPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );",
        "finalPosition.xy += rotatedPosition * ( sizeAttenuation == 1 ? 1.0 : finalPosition.z );",
        "finalPosition = projectionMatrix * finalPosition;",
        "}",
        "gl_Position = finalPosition;",
        "}",
      ].join("\n"),
      fragmentShader: [
        "uniform vec3 color;",
        "uniform sampler2D map;",
        "uniform float opacity;",
        "uniform int fogType;",
        "uniform vec3 fogColor;",
        "uniform float fogDensity;",
        "uniform float fogNear;",
        "uniform float fogFar;",
        "uniform float alphaTest;",
        "varying vec2 vUV;",
        "void main() {",
        "vec4 texture = texture2D( map, vUV );",
        "if ( texture.a < alphaTest ) discard;",
        "gl_FragColor = vec4( color * texture.xyz, texture.a * opacity );",
        "if ( fogType > 0 ) {",
        "float depth = gl_FragCoord.z / gl_FragCoord.w;",
        "float fogFactor = 0.0;",
        "if ( fogType == 1 ) {",
        "fogFactor = smoothstep( fogNear, fogFar, depth );",
        "} else {",
        "const float LOG2 = 1.442695;",
        "float fogFactor = exp2( - fogDensity * fogDensity * depth * depth * LOG2 );",
        "fogFactor = 1.0 - clamp( fogFactor, 0.0, 1.0 );",
        "}",
        "gl_FragColor = mix( gl_FragColor, vec4( fogColor, gl_FragColor.w ), fogFactor );",
        "}",
        "}",
      ].join("\n"),
    },
  },
  function (d, H) {
    var t,
      i,
      g = typeof H,
      m = d.document,
      e = d.location,
      r = d.jQuery,
      n = d.$,
      o = {},
      u = [],
      v = u.concat,
      s = u.push,
      h = u.slice,
      a = u.indexOf,
      l = o.toString,
      E = o.hasOwnProperty,
      c = "1.9.1".trim,
      ge = function (e, t) {
        return new ge.fn.init(e, t, i);
      },
      p = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      b = /\S+/g,
      f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      y = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      T = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      R = /^[\],:{}\s]*$/,
      x = /(?:^|:|,)(?:\s*\[)+/g,
      w = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      _ = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
      M = /^-ms-/,
      S = /-([\da-z])/gi,
      C = function (e, t) {
        return t.toUpperCase();
      },
      A = function (e) {
        (m.addEventListener || "load" === e.type ||
          "complete" === m.readyState) && (L(), ge.ready());
      },
      L = function () {
        m.addEventListener
          ? (m.removeEventListener("DOMContentLoaded", A, !1),
            d.removeEventListener("load", A, !1))
          : (m.detachEvent("onreadystatechange", A),
            d.detachEvent("onload", A));
      };
    function P(e) {
      var t = e.length, i = ge.type(e);
      return !ge.isWindow(e) &&
        (!(1 !== e.nodeType || !t) ||
          ("array" === i ||
            "function" !== i &&
              (0 === t || "number" == typeof t && 0 < t && t - 1 in e)));
    }
    ge.fn = ge.prototype = {
      jquery: "1.9.1",
      constructor: ge,
      init: function (e, t, i) {
        var r, n;
        if (!e) return this;
        if ("string" == typeof e) {
          if (
            !(r =
              "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) &&
                3 <= e.length
                ? [null, e, null]
                : y.exec(e)) || !r[1] && t
          ) {
            return !t || t.jquery
              ? (t || i).find(e)
              : this.constructor(t).find(e);
          }
          if (r[1]) {
            if (
              t = t instanceof ge ? t[0] : t,
                ge.merge(
                  this,
                  ge.parseHTML(
                    r[1],
                    t && t.nodeType ? t.ownerDocument || t : m,
                    !0,
                  ),
                ),
                T.test(r[1]) && ge.isPlainObject(t)
            ) {
              for (r in t) {
                ge.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
              }
            }
            return this;
          }
          if ((n = m.getElementById(r[2])) && n.parentNode) {
            if (n.id !== r[2]) return i.find(e);
            this.length = 1, this[0] = n;
          }
          return this.context = m, this.selector = e, this;
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this)
        : ge.isFunction(e)
          ? i.ready(e)
          : (e.selector !== H &&
            (this.selector = e.selector, this.context = e.context),
            ge.makeArray(e, this));
      },
      selector: "",
      length: 0,
      size: function () {
        return this.length;
      },
      toArray: function () {
        return h.call(this);
      },
      get: function (e) {
        return null == e ? this.toArray()
        : e < 0 ? this[this.length + e] : this[e];
      },
      pushStack: function (e) {
        var t = ge.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t;
      },
      each: function (e, t) {
        return ge.each(this, e, t);
      },
      ready: function (e) {
        return ge.ready.promise().done(e), this;
      },
      slice: function () {
        return this.pushStack(h.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (e) {
        var t = this.length, i = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= i && i < t ? [this[i]] : []);
      },
      map: function (i) {
        return this.pushStack(ge.map(this, function (e, t) {
          return i.call(e, t, e);
        }));
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: s,
      sort: [].sort,
      splice: [].splice,
    },
      ge.fn.init.prototype = ge.fn,
      ge.extend = ge.fn.extend = function () {
        var e,
          t,
          i,
          r,
          n,
          o,
          a = arguments[0] || {},
          s = 1,
          l = arguments.length,
          c = !1;
        for (
          "boolean" == typeof a && (c = a, a = arguments[1] || {}, s = 2),
            "object" == typeof a || ge.isFunction(a) || (a = {}),
            l === s && (a = this, --s);
          s < l;
          s++
        ) {
          if (null != (n = arguments[s])) {
            for (r in n) {
              e = a[r],
                a !== (i = n[r]) &&
                (c && i && (ge.isPlainObject(i) || (t = ge.isArray(i)))
                  ? (t
                    ? (t = !1, o = e && ge.isArray(e) ? e : [])
                    : o = e && ge.isPlainObject(e) ? e : {},
                    a[r] = ge.extend(c, o, i))
                  : i !== H && (a[r] = i));
            }
          }
        }
        return a;
      },
      ge.extend({
        noConflict: function (e) {
          return d.$ === ge && (d.$ = n),
            e && d.jQuery === ge && (d.jQuery = r),
            ge;
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function (e) {
          e ? ge.readyWait++ : ge.ready(!0);
        },
        ready: function (e) {
          if (!0 === e ? !--ge.readyWait : !ge.isReady) {
            if (!m.body) return setTimeout(ge.ready);
            (ge.isReady = !0) !== e && 0 < --ge.readyWait ||
              (t.resolveWith(m, [ge]),
                ge.fn.trigger && ge(m).trigger("ready").off("ready"));
          }
        },
        isFunction: function (e) {
          return "function" === ge.type(e);
        },
        isArray: Array.isArray || function (e) {
          return "array" === ge.type(e);
        },
        isWindow: function (e) {
          return null != e && e == e.window;
        },
        isNumeric: function (e) {
          return !isNaN(parseFloat(e)) && isFinite(e);
        },
        type: function (e) {
          return null == e
            ? e + ""
            : "object" == typeof e || "function" == typeof e
            ? o[l.call(e)] || "object"
            : typeof e;
        },
        isPlainObject: function (e) {
          if (!e || "object" !== ge.type(e) || e.nodeType || ge.isWindow(e)) {
            return !1;
          }
          try {
            if (
              e.constructor && !E.call(e, "constructor") &&
              !E.call(e.constructor.prototype, "isPrototypeOf")
            ) {
              return !1;
            }
          } catch (e) {
            return !1;
          }
          var t;
          for (t in e);
          return t === H || E.call(e, t);
        },
        isEmptyObject: function (e) {
          var t;
          for (t in e) return !1;
          return !0;
        },
        error: function (e) {
          throw Error(e);
        },
        parseHTML: function (e, t, i) {
          if (!e || "string" != typeof e) return null;
          "boolean" == typeof t && (i = t, t = !1), t = t || m;
          var r = T.exec(e), n = !i && [];
          return r ? [t.createElement(r[1])]
          : (r = ge.buildFragment([e], t, n),
            n && ge(n).remove(),
            ge.merge([], r.childNodes));
        },
        parseJSON: function (e) {
          return d.JSON && d.JSON.parse ? d.JSON.parse(e)
          : null === e ? e
          : "string" == typeof e &&
              ((e = ge.trim(e)) &&
                R.test(e.replace(w, "@").replace(_, "]").replace(x, "")))
            ? Function("return " + e)()
            : (ge.error("Invalid JSON: " + e), H);
        },
        parseXML: function (e) {
          var t;
          if (!e || "string" != typeof e) return null;
          try {
            d.DOMParser ? t = (new DOMParser()).parseFromString(e, "text/xml")
            : ((t = new ActiveXObject("Microsoft.XMLDOM")).async = "false",
              t.loadXML(e));
          } catch (e) {
            t = H;
          }
          return t && t.documentElement &&
              !t.getElementsByTagName("parsererror").length ||
            ge.error("Invalid XML: " + e),
            t;
        },
        noop: function () {},
        globalEval: function (e) {
          e && ge.trim(e) && (d.execScript || function (e) {
            d.eval.call(d, e);
          })(e);
        },
        camelCase: function (e) {
          return e.replace(M, "ms-").replace(S, C);
        },
        nodeName: function (e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        },
        each: function (e, t, i) {
          var r = 0, n = e.length, o = P(e);
          if (i) {if (o) for (; r < n && !1 !== t.apply(e[r], i); r++);
            else for (r in e) if (!1 === t.apply(e[r], i)) break;} else if (o) {
            for (; r < n && !1 !== t.call(e[r], r, e[r]); r++);
          } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
          return e;
        },
        trim: c && !c.call("\ufeff ")
          ? function (e) {
            return null == e ? "" : c.call(e);
          }
          : function (e) {
            return null == e ? "" : (e + "").replace(f, "");
          },
        makeArray: function (e, t) {
          var i = t || [];
          return null != e &&
            (P(Object(e))
              ? ge.merge(i, "string" == typeof e ? [e] : e)
              : s.call(i, e)),
            i;
        },
        inArray: function (e, t, i) {
          var r;
          if (t) {
            if (a) return a.call(t, e, i);
            for (
              r = t.length, i = i ? i < 0 ? Math.max(0, r + i) : i : 0;
              i < r;
              i++
            ) {
              if (i in t && t[i] === e) return i;
            }
          }
          return -1;
        },
        merge: function (e, t) {
          var i = t.length, r = e.length, n = 0;
          if ("number" == typeof i) for (; n < i; n++) e[r++] = t[n];
          else for (; t[n] !== H;) e[r++] = t[n++];
          return e.length = r, e;
        },
        grep: function (e, t, i) {
          var r = [], n = 0, o = e.length;
          for (i = !!i; n < o; n++) i !== !!t(e[n], n) && r.push(e[n]);
          return r;
        },
        map: function (e, t, i) {
          var r, n = 0, o = e.length, a = [];
          if (P(e)) {
            for (; n < o; n++) {
              null != (r = t(e[n], n, i)) && (a[a.length] = r);
            }
          } else for (n in e) null != (r = t(e[n], n, i)) && (a[a.length] = r);
          return v.apply([], a);
        },
        guid: 1,
        proxy: function (e, t) {
          var i, r, n;
          return "string" == typeof t && (n = e[t], t = e, e = n),
            ge.isFunction(e)
              ? (i = h.call(arguments, 2),
                (r = function () {
                  return e.apply(t || this, i.concat(h.call(arguments)));
                }).guid = e.guid = e.guid || ge.guid++,
                r)
              : H;
        },
        access: function (e, t, i, r, n, o, a) {
          var s = 0, l = e.length, c = null == i;
          if ("object" === ge.type(i)) {for (s in n = !0, i) {
              ge.access(e, t, s, i[s], !0, o, a);
            }} else if (
            r !== H && (n = !0,
              ge.isFunction(r) || (a = !0),
              c &&
              (a ? (t.call(e, r), t = null) : (c = t,
                t = function (e, t, i) {
                  return c.call(ge(e), i);
                })),
              t)
          ) {
            for (; s < l; s++) t(e[s], i, a ? r : r.call(e[s], s, t(e[s], i)));
          }
          return n ? e : c ? t.call(e) : l ? t(e[0], i) : o;
        },
        now: function () {
          return (new Date()).getTime();
        },
      }),
      ge.ready.promise = function (e) {
        if (!t) {
          if (t = ge.Deferred(), "complete" === m.readyState) {
            setTimeout(ge.ready);
          } else if (m.addEventListener) {
            m.addEventListener("DOMContentLoaded", A, !1),
              d.addEventListener("load", A, !1);
          } else {
            m.attachEvent("onreadystatechange", A), d.attachEvent("onload", A);
            var i = !1;
            try {
              i = null == d.frameElement && m.documentElement;
            } catch (e) {}
            i && i.doScroll && function t() {
              if (!ge.isReady) {
                try {
                  i.doScroll("left");
                } catch (e) {
                  return setTimeout(t, 50);
                }
                L(), ge.ready();
              }
            }();
          }
        }
        return t.promise(e);
      },
      ge.each(
        "Boolean Number String Function Array Date RegExp Object Error".split(
          " ",
        ),
        function (e, t) {
          o["[object " + t + "]"] = t.toLowerCase();
        },
      ),
      i = ge(m);
    var D = {};
    ge.Callbacks = function (n) {
      var e, i;
      n = "string" == typeof n
        ? D[n] ||
          (i = D[e = n] = {},
            ge.each(e.match(b) || [], function (e, t) {
              i[t] = !0;
            }),
            i)
        : ge.extend({}, n);
      var r,
        t,
        o,
        a,
        s,
        l,
        c = [],
        h = !n.once && [],
        u = function (e) {
          for (
            t = n.memory && e, o = !0, s = l || 0, l = 0, a = c.length, r = !0;
            c && s < a;
            s++
          ) {
            if (!1 === c[s].apply(e[0], e[1]) && n.stopOnFalse) {
              t = !1;
              break;
            }
          }
          r = !1,
            c && (h ? h.length && u(h.shift()) : t ? c = [] : p.disable());
        },
        p = {
          add: function () {
            if (c) {
              var e = c.length;
              (function r(e) {
                ge.each(e, function (e, t) {
                  var i = ge.type(t);
                  "function" === i
                    ? n.unique && p.has(t) || c.push(t)
                    : t && t.length && "string" !== i && r(t);
                });
              })(arguments), r ? a = c.length : t && (l = e, u(t));
            }
            return this;
          },
          remove: function () {
            return c && ge.each(arguments, function (e, t) {
              for (var i; -1 < (i = ge.inArray(t, c, i));) {
                c.splice(i, 1), r && (i <= a && a--, i <= s && s--);
              }
            }),
              this;
          },
          has: function (e) {
            return e ? -1 < ge.inArray(e, c) : !(!c || !c.length);
          },
          empty: function () {
            return c = [], this;
          },
          disable: function () {
            return c = h = t = H, this;
          },
          disabled: function () {
            return !c;
          },
          lock: function () {
            return h = H, t || p.disable(), this;
          },
          locked: function () {
            return !h;
          },
          fireWith: function (e, t) {
            return t = [e, (t = t || []).slice ? t.slice() : t],
              !c || o && !h || (r ? h.push(t) : u(t)),
              this;
          },
          fire: function () {
            return p.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!o;
          },
        };
      return p;
    },
      ge.extend({
        Deferred: function (e) {
          var a = [
              ["resolve", "done", ge.Callbacks("once memory"), "resolved"],
              ["reject", "fail", ge.Callbacks("once memory"), "rejected"],
              ["notify", "progress", ge.Callbacks("memory")],
            ],
            n = "pending",
            s = {
              state: function () {
                return n;
              },
              always: function () {
                return l.done(arguments).fail(arguments), this;
              },
              then: function () {
                var o = arguments;
                return ge.Deferred(function (n) {
                  ge.each(a, function (e, t) {
                    var i = t[0], r = ge.isFunction(o[e]) && o[e];
                    l[t[1]](function () {
                      var e = r && r.apply(this, arguments);
                      e && ge.isFunction(e.promise)
                        ? e.promise().done(n.resolve).fail(n.reject).progress(
                          n.notify,
                        )
                        : n[i + "With"](
                          this === s ? n.promise() : this,
                          r ? [e] : arguments,
                        );
                    });
                  }), o = null;
                }).promise();
              },
              promise: function (e) {
                return null != e ? ge.extend(e, s) : s;
              },
            },
            l = {};
          return s.pipe = s.then,
            ge.each(a, function (e, t) {
              var i = t[2], r = t[3];
              s[t[1]] = i.add,
                r && i.add(
                  function () {
                    n = r;
                  },
                  a[1 ^ e][2].disable,
                  a[2][2].lock,
                ),
                l[t[0]] = function () {
                  return l[t[0] + "With"](
                    this === l
                      ? s
                      : this,
                    arguments,
                  ),
                    this;
                },
                l[t[0] + "With"] = i.fireWith;
            }),
            s.promise(l),
            e && e.call(l, l),
            l;
        },
        when: function (e) {
          var n,
            t,
            i,
            r = 0,
            o = h.call(arguments),
            a = o.length,
            s = 1 !== a || e && ge.isFunction(e.promise) ? a : 0,
            l = 1 === s ? e : ge.Deferred(),
            c = function (t, i, r) {
              return function (e) {
                i[t] = this,
                  r[t] = 1 < arguments.length ? h.call(arguments) : e,
                  r === n ? l.notifyWith(i, r) : --s || l.resolveWith(i, r);
              };
            };
          if (1 < a) {
            for (n = Array(a), t = Array(a), i = Array(a); r < a; r++) {
              o[r] && ge.isFunction(o[r].promise)
                ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(
                  c(r, t, n),
                )
                : --s;
            }
          }
          return s || l.resolveWith(i, o), l.promise();
        },
      }),
      ge.support = function () {
        var o, e, t, i, r, n, a, s, l, c, h = m.createElement("div");
        if (
          h.setAttribute("className", "t"),
            h.innerHTML =
              "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
            e = h.getElementsByTagName("*"),
            t = h.getElementsByTagName("a")[0],
            !e || !t || !e.length
        ) {
          return {};
        }
        a = (r = m.createElement("select")).appendChild(
          m.createElement("option"),
        ),
          i = h.getElementsByTagName("input")[0],
          t.style.cssText = "top:1px;float:left;opacity:.5",
          o = {
            getSetAttribute: "t" !== h.className,
            leadingWhitespace: 3 === h.firstChild.nodeType,
            tbody: !h.getElementsByTagName("tbody").length,
            htmlSerialize: !!h.getElementsByTagName("link").length,
            style: /top/.test(t.getAttribute("style")),
            hrefNormalized: "/a" === t.getAttribute("href"),
            opacity: /^0.5/.test(t.style.opacity),
            cssFloat: !!t.style.cssFloat,
            checkOn: !!i.value,
            optSelected: a.selected,
            enctype: !!m.createElement("form").enctype,
            html5Clone:
              "<:nav></:nav>" !==
                m.createElement("nav").cloneNode(!0).outerHTML,
            boxModel: "CSS1Compat" === m.compatMode,
            deleteExpando: !0,
            noCloneEvent: !0,
            inlineBlockNeedsLayout: !1,
            shrinkWrapBlocks: !1,
            reliableMarginRight: !0,
            boxSizingReliable: !0,
            pixelPosition: !1,
          },
          i.checked = !0,
          o.noCloneChecked = i.cloneNode(!0).checked,
          r.disabled = !0,
          o.optDisabled = !a.disabled;
        try {
          delete h.test;
        } catch (e) {
          o.deleteExpando = !1;
        }
        for (
          c in (i = m.createElement("input")).setAttribute("value", ""),
            o.input = "" === i.getAttribute("value"),
            i.value = "t",
            i.setAttribute("type", "radio"),
            o.radioValue = "t" === i.value,
            i.setAttribute("checked", "t"),
            i.setAttribute("name", "t"),
            (n = m.createDocumentFragment()).appendChild(i),
            o.appendChecked = i.checked,
            o.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked,
            h.attachEvent && (h.attachEvent("onclick", function () {
              o.noCloneEvent = !1;
            }),
              h.cloneNode(!0).click()),
            { submit: !0, change: !0, focusin: !0 }
        ) {
          h.setAttribute(s = "on" + c, "t"),
            o[c + "Bubbles"] = s in d || !1 === h.attributes[s].expando;
        }
        return h.style.backgroundClip = "content-box",
          h.cloneNode(!0).style.backgroundClip = "",
          o.clearCloneStyle = "content-box" === h.style.backgroundClip,
          ge(function () {
            var e,
              t,
              i,
              r =
                "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
              n = m.getElementsByTagName("body")[0];
            n &&
              ((e = m.createElement("div")).style.cssText =
                "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",
                n.appendChild(e).appendChild(h),
                h.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
                (i = h.getElementsByTagName("td"))[0].style.cssText =
                  "padding:0;margin:0;border:0;display:none",
                l = 0 === i[0].offsetHeight,
                i[0].style.display = "",
                i[1].style.display = "none",
                o.reliableHiddenOffsets = l && 0 === i[0].offsetHeight,
                h.innerHTML = "",
                h.style.cssText =
                  "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",
                o.boxSizing = 4 === h.offsetWidth,
                o.doesNotIncludeMarginInBodyOffset = 1 !== n.offsetTop,
                d.getComputedStyle &&
                (o.pixelPosition =
                  "1%" !== (d.getComputedStyle(h, null) || {}).top,
                  o.boxSizingReliable =
                    "4px" ===
                      (d.getComputedStyle(h, null) || { width: "4px" }).width,
                  (t = h.appendChild(m.createElement("div"))).style.cssText = h
                    .style.cssText = r,
                  t.style.marginRight = t.style.width = "0",
                  h.style.width = "1px",
                  o.reliableMarginRight = !parseFloat(
                    (d.getComputedStyle(t, null) || {}).marginRight,
                  )),
                typeof h.style.zoom !== g &&
                (h.innerHTML = "",
                  h.style.cssText = r +
                    "width:1px;padding:1px;display:inline;zoom:1",
                  o.inlineBlockNeedsLayout = 3 === h.offsetWidth,
                  h.style.display = "block",
                  h.innerHTML = "<div></div>",
                  h.firstChild.style.width = "5px",
                  o.shrinkWrapBlocks = 3 !== h.offsetWidth,
                  o.inlineBlockNeedsLayout && (n.style.zoom = 1)),
                n.removeChild(e),
                e = h = i = t = null);
          }),
          e = r = n = a = t = i = null,
          o;
      }();
    var F = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, N = /([A-Z])/g;
    function V(e, t, i, r) {
      if (ge.acceptData(e)) {
        var n,
          o,
          a = ge.expando,
          s = "string" == typeof t,
          l = e.nodeType,
          c = l ? ge.cache : e,
          h = l ? e[a] : e[a] && a;
        if (h && c[h] && (r || c[h].data) || !s || i !== H) {
          return h || (l ? e[a] = h = u.pop() || ge.guid++ : h = a),
            c[h] || (c[h] = {}, l || (c[h].toJSON = ge.noop)),
            ("object" == typeof t || "function" == typeof t) &&
            (r
              ? c[h] = ge.extend(c[h], t)
              : c[h].data = ge.extend(c[h].data, t)),
            n = c[h],
            r || (n.data || (n.data = {}), n = n.data),
            i !== H && (n[ge.camelCase(t)] = i),
            s ? null == (o = n[t]) && (o = n[ge.camelCase(t)]) : o = n,
            o;
        }
      }
    }
    function z(e, t, i) {
      if (ge.acceptData(e)) {
        var r,
          n,
          o,
          a = e.nodeType,
          s = a ? ge.cache : e,
          l = a ? e[ge.expando] : ge.expando;
        if (s[l]) {
          if (t && (o = i ? s[l] : s[l].data)) {
            ge.isArray(t)
              ? t = t.concat(ge.map(t, ge.camelCase))
              : t in o
              ? t = [t]
              : t = (t = ge.camelCase(t)) in o ? [t] : t.split(" ");
            for (r = 0, n = t.length; r < n; r++) delete o[t[r]];
            if (!(i ? B : ge.isEmptyObject)(o)) return;
          }
          (i || (delete s[l].data, B(s[l]))) &&
            (a
              ? ge.cleanData([e], !0)
              : ge.support.deleteExpando || s != s.window
              ? delete s[l]
              : s[l] = null);
        }
      }
    }
    function U(e, t, i) {
      if (i === H && 1 === e.nodeType) {
        var r = "data-" + t.replace(N, "-$1").toLowerCase();
        if ("string" == typeof (i = e.getAttribute(r))) {
          try {
            i = "true" === i ||
              "false" !== i &&
                ("null" === i
                  ? null
                  : +i + "" === i
                  ? +i
                  : F.test(i)
                  ? ge.parseJSON(i)
                  : i);
          } catch (e) {}
          ge.data(e, t, i);
        } else i = H;
      }
      return i;
    }
    function B(e) {
      var t;
      for (t in e) {
        if (("data" !== t || !ge.isEmptyObject(e[t])) && "toJSON" !== t) {
          return !1;
        }
      }
      return !0;
    }
    ge.extend({
      cache: {},
      expando: "jQuery" + ("1.9.1" + Math.random()).replace(/\D/g, ""),
      noData: {
        embed: !0,
        object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
        applet: !0,
      },
      hasData: function (e) {
        return !!(e = e.nodeType ? ge.cache[e[ge.expando]] : e[ge.expando]) &&
          !B(e);
      },
      data: function (e, t, i) {
        return V(e, t, i);
      },
      removeData: function (e, t) {
        return z(e, t);
      },
      _data: function (e, t, i) {
        return V(e, t, i, !0);
      },
      _removeData: function (e, t) {
        return z(e, t, !0);
      },
      acceptData: function (e) {
        if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;
        var t = e.nodeName && ge.noData[e.nodeName.toLowerCase()];
        return !t || !0 !== t && e.getAttribute("classid") === t;
      },
    }),
      ge.fn.extend({
        data: function (t, e) {
          var i, r, n = this[0], o = 0, a = null;
          if (t === H) {
            if (
              this.length &&
              (a = ge.data(n), 1 === n.nodeType && !ge._data(n, "parsedAttrs"))
            ) {
              for (i = n.attributes; i.length > o; o++) {
                (r = i[o].name).indexOf("data-") ||
                  (r = ge.camelCase(r.slice(5)), U(n, r, a[r]));
              }
              ge._data(n, "parsedAttrs", !0);
            }
            return a;
          }
          return "object" == typeof t
            ? this.each(function () {
              ge.data(this, t);
            })
            : ge.access(
              this,
              function (e) {
                return e === H
                  ? n ? U(n, t, ge.data(n, t)) : null
                  : (this.each(function () {
                    ge.data(this, t, e);
                  }),
                    H);
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0,
            );
        },
        removeData: function (e) {
          return this.each(function () {
            ge.removeData(this, e);
          });
        },
      }),
      ge.extend({
        queue: function (e, t, i) {
          var r;
          return e
            ? (t = (t || "fx") + "queue",
              r = ge._data(e, t),
              i && (!r || ge.isArray(i)
                ? r = ge._data(e, t, ge.makeArray(i))
                : r.push(i)),
              r || [])
            : H;
        },
        dequeue: function (e, t) {
          t = t || "fx";
          var i = ge.queue(e, t),
            r = i.length,
            n = i.shift(),
            o = ge._queueHooks(e, t);
          "inprogress" === n && (n = i.shift(), r--),
            (o.cur = n) &&
            ("fx" === t && i.unshift("inprogress"),
              delete o.stop,
              n.call(e, function () {
                ge.dequeue(e, t);
              }, o)),
            !r && o && o.empty.fire();
        },
        _queueHooks: function (e, t) {
          var i = t + "queueHooks";
          return ge._data(e, i) ||
            ge._data(e, i, {
              empty: ge.Callbacks("once memory").add(function () {
                ge._removeData(e, t + "queue"), ge._removeData(e, i);
              }),
            });
        },
      }),
      ge.fn.extend({
        queue: function (t, i) {
          var e = 2;
          return "string" != typeof t && (i = t, t = "fx", e--),
            e > arguments.length ? ge.queue(this[0], t) : i === H
              ? this
              : this.each(function () {
                var e = ge.queue(this, t, i);
                ge._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && ge.dequeue(this, t);
              });
        },
        dequeue: function (e) {
          return this.each(function () {
            ge.dequeue(this, e);
          });
        },
        delay: function (r, e) {
          return r = ge.fx && ge.fx.speeds[r] || r,
            e = e || "fx",
            this.queue(e, function (e, t) {
              var i = setTimeout(e, r);
              t.stop = function () {
                clearTimeout(i);
              };
            });
        },
        clearQueue: function (e) {
          return this.queue(e || "fx", []);
        },
        promise: function (e, t) {
          var i,
            r = 1,
            n = ge.Deferred(),
            o = this,
            a = this.length,
            s = function () {
              --r || n.resolveWith(o, [o]);
            };
          for ("string" != typeof e && (t = e, e = H), e = e || "fx"; a--;) {
            (i = ge._data(o[a], e + "queueHooks")) && i.empty &&
              (r++, i.empty.add(s));
          }
          return s(), n.promise(t);
        },
      });
    var O,
      k,
      I = /[\t\r\n]/g,
      j = /\r/g,
      G = /^(?:input|select|textarea|button|object)$/i,
      W = /^(?:a|area)$/i,
      X =
        /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
      q = /^(?:checked|selected)$/i,
      Y = ge.support.getSetAttribute,
      K = ge.support.input;
    ge.fn.extend({
      attr: function (e, t) {
        return ge.access(this, ge.attr, e, t, 1 < arguments.length);
      },
      removeAttr: function (e) {
        return this.each(function () {
          ge.removeAttr(this, e);
        });
      },
      prop: function (e, t) {
        return ge.access(this, ge.prop, e, t, 1 < arguments.length);
      },
      removeProp: function (e) {
        return e = ge.propFix[e] || e,
          this.each(function () {
            try {
              this[e] = H, delete this[e];
            } catch (e) {}
          });
      },
      addClass: function (t) {
        var e,
          i,
          r,
          n,
          o,
          a = 0,
          s = this.length,
          l = "string" == typeof t && t;
        if (ge.isFunction(t)) {
          return this.each(function (e) {
            ge(this).addClass(t.call(this, e, this.className));
          });
        }
        if (l) {
          for (e = (t || "").match(b) || []; a < s; a++) {
            if (
              r = 1 === (i = this[a]).nodeType && (i.className
                ? (" " + i.className + " ").replace(I, " ")
                : " ")
            ) {
              for (o = 0; n = e[o++];) {
                r.indexOf(" " + n + " ") < 0 && (r += n + " ");
              }
              i.className = ge.trim(r);
            }
          }
        }
        return this;
      },
      removeClass: function (t) {
        var e,
          i,
          r,
          n,
          o,
          a = 0,
          s = this.length,
          l = 0 === arguments.length || "string" == typeof t && t;
        if (ge.isFunction(t)) {
          return this.each(function (e) {
            ge(this).removeClass(t.call(this, e, this.className));
          });
        }
        if (l) {
          for (e = (t || "").match(b) || []; a < s; a++) {
            if (
              r = 1 === (i = this[a]).nodeType && (i.className
                ? (" " + i.className + " ").replace(I, " ")
                : "")
            ) {
              for (o = 0; n = e[o++];) {
                for (; 0 <= r.indexOf(" " + n + " ");) {
                  r = r.replace(" " + n + " ", " ");
                }
              }
              i.className = t ? ge.trim(r) : "";
            }
          }
        }
        return this;
      },
      toggleClass: function (o, a) {
        var s = typeof o, l = "boolean" == typeof a;
        return ge.isFunction(o)
          ? this.each(function (e) {
            ge(this).toggleClass(o.call(this, e, this.className, a), a);
          })
          : this.each(function () {
            if ("string" === s) {
              for (
                var e, t = 0, i = ge(this), r = a, n = o.match(b) || [];
                e = n[t++];
              ) {
                i[(r = l ? r : !i.hasClass(e)) ? "addClass" : "removeClass"](e);
              }
            } else {
              (s === g || "boolean" === s) &&
                (this.className &&
                  ge._data(this, "__className__", this.className),
                  this.className = this.className || !1 === o
                    ? ""
                    : ge._data(this, "__className__") || "");
            }
          });
      },
      hasClass: function (e) {
        for (var t = " " + e + " ", i = 0, r = this.length; i < r; i++) {
          if (
            1 === this[i].nodeType &&
            0 <= (" " + this[i].className + " ").replace(I, " ").indexOf(t)
          ) {
            return !0;
          }
        }
        return !1;
      },
      val: function (r) {
        var e, n, o, t = this[0];
        return arguments.length
          ? (o = ge.isFunction(r),
            this.each(function (e) {
              var t, i = ge(this);
              1 === this.nodeType &&
                (null == (t = o ? r.call(this, e, i.val()) : r)
                  ? t = ""
                  : "number" == typeof t
                  ? t += ""
                  : ge.isArray(t) && (t = ge.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
                  (n = ge.valHooks[this.type] ||
                      ge.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in n && n.set(this, t, "value") !== H ||
                  (this.value = t));
            }))
          : t
          ? (n = ge.valHooks[t.type] ||
              ge.valHooks[t.nodeName.toLowerCase()]) &&
              "get" in n && (e = n.get(t, "value")) !== H
            ? e
            : "string" == typeof (e = t.value)
            ? e.replace(j, "")
            : null == e
            ? ""
            : e
          : void 0;
      },
    }),
      ge.extend({
        valHooks: {
          option: {
            get: function (e) {
              var t = e.attributes.value;
              return !t || t.specified
                ? e.value
                : e.text;
            },
          },
          select: {
            get: function (e) {
              for (
                var t,
                  i,
                  r = e.options,
                  n = e.selectedIndex,
                  o = "select-one" === e.type || n < 0,
                  a = o ? null : [],
                  s = o ? n + 1 : r.length,
                  l = n < 0 ? s : o
                    ? n
                    : 0;
                l < s;
                l++
              ) {
                if (
                  !(!(i = r[l]).selected && l !== n || (ge.support.optDisabled
                    ? i.disabled
                    : null !== i.getAttribute("disabled")) ||
                    i.parentNode.disabled &&
                      ge.nodeName(i.parentNode, "optgroup"))
                ) {
                  if (t = ge(i).val(), o) return t;
                  a.push(t);
                }
              }
              return a;
            },
            set: function (e, t) {
              var i = ge.makeArray(t);
              return ge(e).find("option").each(function () {
                this.selected = 0 <= ge.inArray(ge(this).val(), i);
              }),
                i.length || (e.selectedIndex = -1),
                i;
            },
          },
        },
        attr: function (e, t, i) {
          var r, n, o, a = e.nodeType;
          if (e && 3 !== a && 8 !== a && 2 !== a) {
            return typeof e.getAttribute === g
              ? ge.prop(e, t, i)
              : ((n = 1 !== a || !ge.isXMLDoc(e)) &&
                (t = t.toLowerCase(),
                  r = ge.attrHooks[t] || (X.test(t) ? k : O)),
                i === H
                  ? r && n && "get" in r && null !== (o = r.get(e, t))
                    ? o
                    : (typeof e.getAttribute !== g && (o = e.getAttribute(t)),
                      null == o ? H : o)
                  : null !== i
                  ? r && n && "set" in r && (o = r.set(e, i, t)) !== H ? o
                  : (e.setAttribute(t, i + ""), i)
                  : (ge.removeAttr(e, t), H));
          }
        },
        removeAttr: function (e, t) {
          var i, r, n = 0, o = t && t.match(b);
          if (o && 1 === e.nodeType) {
            for (; i = o[n++];) {
              r = ge.propFix[i] || i,
                X.test(i)
                  ? !Y && q.test(i)
                    ? e[ge.camelCase("default-" + i)] = e[r] = !1 : e[r] = !1
                  : ge.attr(e, i, ""),
                e.removeAttribute(
                  Y
                    ? i
                    : r,
                );
            }
          }
        },
        attrHooks: {
          type: {
            set: function (e, t) {
              if (
                !ge.support.radioValue && "radio" === t &&
                ge.nodeName(e, "input")
              ) {
                var i = e.value;
                return e.setAttribute("type", t), i && (e.value = i), t;
              }
            },
          },
        },
        propFix: {
          tabindex: "tabIndex",
          readonly: "readOnly",
          for: "htmlFor",
          class: "className",
          maxlength: "maxLength",
          cellspacing: "cellSpacing",
          cellpadding: "cellPadding",
          rowspan: "rowSpan",
          colspan: "colSpan",
          usemap: "useMap",
          frameborder: "frameBorder",
          contenteditable: "contentEditable",
        },
        prop: function (e, t, i) {
          var r, n, o = e.nodeType;
          if (e && 3 !== o && 8 !== o && 2 !== o) {
            return (1 !== o || !ge.isXMLDoc(e)) &&
              (t = ge.propFix[t] || t, n = ge.propHooks[t]),
              i !== H
                ? n && "set" in n && (r = n.set(e, i, t)) !== H ? r : e[t] = i
                : n && "get" in n && null !== (r = n.get(e, t))
                ? r
                : e[t];
          }
        },
        propHooks: {
          tabIndex: {
            get: function (e) {
              var t = e.getAttributeNode("tabindex");
              return t && t.specified
                ? parseInt(t.value, 10)
                : G.test(e.nodeName) || W.test(e.nodeName) && e.href
                ? 0
                : H;
            },
          },
        },
      }),
      k = {
        get: function (e, t) {
          var i = ge.prop(e, t),
            r = "boolean" == typeof i && e.getAttribute(t),
            n = "boolean" == typeof i
              ? K && Y
                ? null != r
                : q.test(t)
                ? e[ge.camelCase("default-" + t)]
                : !!r
              : e.getAttributeNode(t);
          return n && !1 !== n.value ? t.toLowerCase() : H;
        },
        set: function (e, t, i) {
          return !1 === t
            ? ge.removeAttr(e, i)
            : K && Y || !q.test(i)
            ? e.setAttribute(!Y && ge.propFix[i] || i, i)
            : e[ge.camelCase("default-" + i)] = e[i] = !0,
            i;
        },
      },
      K && Y || (ge.attrHooks.value = {
        get: function (e, t) {
          var i = e.getAttributeNode(t);
          return ge.nodeName(e, "input")
            ? e.defaultValue
            : i && i.specified
            ? i.value
            : H;
        },
        set: function (e, t, i) {
          return ge.nodeName(e, "input") ? (e.defaultValue = t, H)
          : O && O.set(e, t, i);
        },
      }),
      Y || (O = ge.valHooks.button = {
        get: function (e, t) {
          var i = e.getAttributeNode(t);
          return i && ("id" === t || "name" === t || "coords" === t
              ? "" !== i.value
              : i.specified)
            ? i.value
            : H;
        },
        set: function (e, t, i) {
          var r = e.getAttributeNode(i);
          return r ||
            e.setAttributeNode(r = e.ownerDocument.createAttribute(i)),
            r.value = t += "",
            "value" === i || t === e.getAttribute(i) ? t : H;
        },
      },
        ge.attrHooks.contenteditable = {
          get: O.get,
          set: function (e, t, i) {
            O.set(e, "" !== t && t, i);
          },
        },
        ge.each(["width", "height"], function (e, i) {
          ge.attrHooks[i] = ge.extend(ge.attrHooks[i], {
            set: function (e, t) {
              return "" === t ? (e.setAttribute(i, "auto"), t) : H;
            },
          });
        })),
      ge.support.hrefNormalized ||
      (ge.each(["href", "src", "width", "height"], function (e, i) {
        ge.attrHooks[i] = ge.extend(ge.attrHooks[i], {
          get: function (e) {
            var t = e.getAttribute(i, 2);
            return null == t
              ? H
              : t;
          },
        });
      }),
        ge.each(["href", "src"], function (e, t) {
          ge.propHooks[t] = {
            get: function (e) {
              return e.getAttribute(t, 4);
            },
          };
        })),
      ge.support.style || (ge.attrHooks.style = {
        get: function (e) {
          return e.style.cssText || H;
        },
        set: function (e, t) {
          return e.style.cssText = t + "";
        },
      }),
      ge.support.optSelected ||
      (ge.propHooks.selected = ge.extend(ge.propHooks.selected, {
        get: function (e) {
          var t = e.parentNode;
          return t &&
            (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null;
        },
      })),
      ge.support.enctype || (ge.propFix.enctype = "encoding"),
      ge.support.checkOn || ge.each(["radio", "checkbox"], function () {
        ge.valHooks[this] = {
          get: function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          },
        };
      }),
      ge.each(["radio", "checkbox"], function () {
        ge.valHooks[this] = ge.extend(ge.valHooks[this], {
          set: function (e, t) {
            return ge.isArray(t)
              ? e.checked = 0 <= ge.inArray(ge(e).val(), t)
              : H;
          },
        });
      });
    var Q = /^(?:input|select|textarea)$/i,
      Z = /^key/,
      $ = /^(?:mouse|contextmenu)|click/,
      J = /^(?:focusinfocus|focusoutblur)$/,
      ee = /^([^.]*)(?:\.(.+)|)$/;
    function te() {
      return !0;
    }
    function ie() {
      return !1;
    }
    ge.event = {
      global: {},
      add: function (e, t, i, r, n) {
        var o, a, s, l, c, h, u, p, f, d, m, E = ge._data(e);
        if (E) {
          for (
            i.handler && (i = (l = i).handler, n = l.selector),
              i.guid || (i.guid = ge.guid++),
              (a = E.events) || (a = E.events = {}),
              (h = E.handle) || ((h = E.handle = function (e) {
                return typeof ge === g || e && ge.event.triggered === e.type
                  ? H
                  : ge.event.dispatch.apply(h.elem, arguments);
              }).elem = e),
              s = (t = (t || "").match(b) || [""]).length;
            s--;
          ) {
            f = m = (o = ee.exec(t[s]) || [])[1],
              d = (o[2] || "").split(".").sort(),
              c = ge.event.special[f] || {},
              f = (n ? c.delegateType : c.bindType) || f,
              c = ge.event.special[f] || {},
              u = ge.extend({
                type: f,
                origType: m,
                data: r,
                handler: i,
                guid: i.guid,
                selector: n,
                needsContext: n && ge.expr.match.needsContext.test(n),
                namespace: d.join("."),
              }, l),
              (p = a[f]) ||
              ((p = a[f] = []).delegateCount = 0,
                c.setup && !1 !== c.setup.call(e, r, d, h) ||
                (e.addEventListener
                  ? e.addEventListener(f, h, !1)
                  : e.attachEvent && e.attachEvent("on" + f, h))),
              c.add &&
              (c.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)),
              n ? p.splice(p.delegateCount++, 0, u) : p.push(u),
              ge.event.global[f] = !0;
          }
          e = null;
        }
      },
      remove: function (e, t, i, r, n) {
        var o, a, s, l, c, h, u, p, f, d, m, E = ge.hasData(e) && ge._data(e);
        if (E && (h = E.events)) {
          for (c = (t = (t || "").match(b) || [""]).length; c--;) {
            if (
              f = m = (s = ee.exec(t[c]) || [])[1],
                d = (s[2] || "").split(".").sort(),
                f
            ) {
              for (
                u = ge.event.special[f] || {},
                  p = h[
                    f = (r
                      ? u.delegateType
                      : u.bindType) || f
                  ] || [],
                  s = s[2] &&
                    RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                  l = o = p.length;
                o--;
              ) {
                a = p[o],
                  !n && m !== a.origType || i && i.guid !== a.guid ||
                  s && !s.test(a.namespace) ||
                  r && r !== a.selector && ("**" !== r || !a.selector) ||
                  (p.splice(o, 1),
                    a.selector && p.delegateCount--,
                    u.remove && u.remove.call(e, a));
              }
              l && !p.length &&
                (u.teardown && !1 !== u.teardown.call(e, d, E.handle) ||
                  ge.removeEvent(e, f, E.handle),
                  delete h[f]);
            } else for (f in h) ge.event.remove(e, f + t[c], i, r, !0);
          }
          ge.isEmptyObject(h) && (delete E.handle, ge._removeData(e, "events"));
        }
      },
      trigger: function (e, t, i, r) {
        var n,
          o,
          a,
          s,
          l,
          c,
          h,
          u = [i || m],
          p = E.call(e, "type") ? e.type : e,
          f = E.call(e, "namespace") ? e.namespace.split(".") : [];
        if (
          a = c = i = i || m,
            3 !== i.nodeType && 8 !== i.nodeType &&
            !J.test(p + ge.event.triggered) &&
            (0 <= p.indexOf(".") && (p = (f = p.split(".")).shift(), f.sort()),
              o = p.indexOf(":") < 0 && "on" + p,
              (e = e[ge.expando]
                ? e
                : new ge.Event(p, "object" == typeof e && e)).isTrigger = !0,
              e.namespace = f.join("."),
              e.namespace_re = e.namespace
                ? RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null,
              e.result = H,
              e.target || (e.target = i),
              t = null == t ? [e] : ge.makeArray(t, [e]),
              l = ge.event.special[p] || {},
              r || !l.trigger || !1 !== l.trigger.apply(i, t))
        ) {
          if (!r && !l.noBubble && !ge.isWindow(i)) {
            for (
              s = l.delegateType || p, J.test(s + p) || (a = a.parentNode);
              a;
              a = a.parentNode
            ) {
              u.push(a), c = a;
            }
            c === (i.ownerDocument || m) &&
              u.push(c.defaultView || c.parentWindow || d);
          }
          for (h = 0; (a = u[h++]) && !e.isPropagationStopped();) {
            e.type = 1 < h ? s : l.bindType || p,
              (n = (ge._data(a, "events") || {})[e.type] &&
                ge._data(a, "handle")) && n.apply(a, t),
              (n = o && a[o]) && ge.acceptData(a) && n.apply &&
              !1 === n.apply(a, t) && e.preventDefault();
          }
          if (
            e.type = p,
              !(r || e.isDefaultPrevented() ||
                l._default && !1 !== l._default.apply(i.ownerDocument, t) ||
                "click" === p && ge.nodeName(i, "a")) &&
              ge.acceptData(i) && o && i[p] && !ge.isWindow(i)
          ) {
            (c = i[o]) && (i[o] = null), ge.event.triggered = p;
            try {
              i[p]();
            } catch (e) {}
            ge.event.triggered = H, c && (i[o] = c);
          }
          return e.result;
        }
      },
      dispatch: function (e) {
        e = ge.event.fix(e);
        var t,
          i,
          r,
          n,
          o,
          a = [],
          s = h.call(arguments),
          l = (ge._data(this, "events") || {})[e.type] || [],
          c = ge.event.special[e.type] || {};
        if (
          (s[0] = e).delegateTarget = this,
            !c.preDispatch || !1 !== c.preDispatch.call(this, e)
        ) {
          for (
            a = ge.event.handlers.call(this, e, l), t = 0;
            (n = a[t++]) && !e.isPropagationStopped();
          ) {
            for (
              e.currentTarget = n.elem, o = 0;
              (r = n.handlers[o++]) && !e.isImmediatePropagationStopped();
            ) {
              (!e.namespace_re || e.namespace_re.test(r.namespace)) &&
                (e.handleObj = r,
                  e.data = r.data,
                  (i =
                      ((ge.event.special[r.origType] || {}).handle || r.handler)
                        .apply(n.elem, s)) !== H &&
                  !1 === (e.result = i) &&
                  (e.preventDefault(), e.stopPropagation()));
            }
          }
          return c.postDispatch && c.postDispatch.call(this, e), e.result;
        }
      },
      handlers: function (e, t) {
        var i, r, n, o, a = [], s = t.delegateCount, l = e.target;
        if (s && l.nodeType && (!e.button || "click" !== e.type)) {
          for (; l != this; l = l.parentNode || this) {
            if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
              for (n = [], o = 0; o < s; o++) {
                n[i = (r = t[o]).selector + " "] === H &&
                (n[i] = r.needsContext
                  ? 0 <= ge(i, this).index(l)
                  : ge.find(i, this, null, [l]).length), n[i] && n.push(r);
              }
              n.length && a.push({ elem: l, handlers: n });
            }
          }
        }
        return t.length > s && a.push({ elem: this, handlers: t.slice(s) }), a;
      },
      fix: function (e) {
        if (e[ge.expando]) return e;
        var t, i, r, n = e.type, o = e, a = this.fixHooks[n];
        for (
          a || (this.fixHooks[n] = a = $.test(n)
            ? this.mouseHooks
            : Z.test(n)
            ? this.keyHooks
            : {}),
            r = a.props
              ? this.props.concat(a.props)
              : this.props,
            e = new ge.Event(o),
            t = r.length;
          t--;
        ) {
          e[i = r[t]] = o[i];
        }
        return e.target || (e.target = o.srcElement || m),
          3 === e.target.nodeType && (e.target = e.target.parentNode),
          e.metaKey = !!e.metaKey,
          a.filter ? a.filter(e, o) : e;
      },
      props:
        "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
          .split(" "),
      fixHooks: {},
      keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function (e, t) {
          return null == e.which &&
            (e.which = null != t.charCode ? t.charCode : t.keyCode),
            e;
        },
      },
      mouseHooks: {
        props:
          "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement"
            .split(" "),
        filter: function (e, t) {
          var i, r, n, o = t.button, a = t.fromElement;
          return null == e.pageX && null != t.clientX &&
            (n = (r = e.target.ownerDocument || m).documentElement,
              i = r.body,
              e.pageX = t.clientX +
                (n && n.scrollLeft || i && i.scrollLeft || 0) -
                (n && n.clientLeft || i && i.clientLeft || 0),
              e.pageY = t.clientY +
                (n && n.scrollTop || i && i.scrollTop || 0) -
                (n && n.clientTop || i && i.clientTop || 0)),
            !e.relatedTarget && a &&
            (e.relatedTarget = a === e.target ? t.toElement : a),
            e.which || o === H ||
            (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
            e;
        },
      },
      special: {
        load: { noBubble: !0 },
        click: {
          trigger: function () {
            return ge.nodeName(this, "input") && "checkbox" === this.type &&
                this.click
              ? (this.click(), !1)
              : H;
          },
        },
        focus: {
          trigger: function () {
            if (this !== m.activeElement && this.focus) {
              try {
                return this.focus(), !1;
              } catch (e) {}
            }
          },
          delegateType: "focusin",
        },
        blur: {
          trigger: function () {
            return this === m.activeElement && this.blur ? (this.blur(), !1)
            : H;
          },
          delegateType: "focusout",
        },
        beforeunload: {
          postDispatch: function (e) {
            e.result !== H && (e.originalEvent.returnValue = e.result);
          },
        },
      },
      simulate: function (e, t, i, r) {
        var n = ge.extend(new ge.Event(), i, {
          type: e,
          isSimulated: !0,
          originalEvent: {},
        });
        r ? ge.event.trigger(n, null, t) : ge.event.dispatch.call(t, n),
          n.isDefaultPrevented() && i.preventDefault();
      },
    },
      ge.removeEvent = m.removeEventListener ? function (e, t, i) {
        e.removeEventListener && e.removeEventListener(t, i, !1);
      } : function (e, t, i) {
        var r = "on" + t;
        e.detachEvent &&
          (typeof e[r] === g && (e[r] = null), e.detachEvent(r, i));
      },
      ge.Event = function (e, t) {
        return this instanceof ge.Event
          ? (e && e.type
            ? (this.originalEvent = e,
              this.type = e.type,
              this.isDefaultPrevented =
                e.defaultPrevented || !1 === e.returnValue ||
                  e.getPreventDefault && e.getPreventDefault()
                  ? te
                  : ie)
            : this.type = e,
            t && ge.extend(this, t),
            this.timeStamp = e && e.timeStamp || ge.now(),
            this[ge.expando] = !0,
            H)
          : new ge.Event(e, t);
      },
      ge.Event.prototype = {
        isDefaultPrevented: ie,
        isPropagationStopped: ie,
        isImmediatePropagationStopped: ie,
        preventDefault: function () {
          var e = this.originalEvent;
          this.isDefaultPrevented = te,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
        },
        stopPropagation: function () {
          var e = this.originalEvent;
          this.isPropagationStopped = te,
            e &&
            (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
        },
        stopImmediatePropagation: function () {
          this.isImmediatePropagationStopped = te, this.stopPropagation();
        },
      },
      ge.each(
        { mouseenter: "mouseover", mouseleave: "mouseout" },
        function (e, n) {
          ge.event.special[e] = {
            delegateType: n,
            bindType: n,
            handle: function (e) {
              var t, i = e.relatedTarget, r = e.handleObj;
              return (!i || i !== this && !ge.contains(this, i)) &&
                (e.type = r.origType,
                  t = r.handler.apply(this, arguments),
                  e.type = n),
                t;
            },
          };
        },
      ),
      ge.support.submitBubbles ||
      (ge.event.special.submit = {
        setup: function () {
          return !ge.nodeName(this, "form") &&
            (ge.event.add(this, "click._submit keypress._submit", function (e) {
              var t = e.target,
                i = ge.nodeName(t, "input") || ge.nodeName(t, "button")
                  ? t.form
                  : H;
              i && !ge._data(i, "submitBubbles") &&
                (ge.event.add(i, "submit._submit", function (e) {
                  e._submit_bubble = !0;
                }),
                  ge._data(i, "submitBubbles", !0));
            }),
              H);
        },
        postDispatch: function (e) {
          e._submit_bubble &&
            (delete e._submit_bubble,
              this.parentNode && !e.isTrigger &&
              ge.event.simulate("submit", this.parentNode, e, !0));
        },
        teardown: function () {
          return !ge.nodeName(this, "form") &&
            (ge.event.remove(this, "._submit"), H);
        },
      }),
      ge.support.changeBubbles ||
      (ge.event.special.change = {
        setup: function () {
          return Q.test(this.nodeName)
            ? (("checkbox" === this.type || "radio" === this.type) &&
              (ge.event.add(this, "propertychange._change", function (e) {
                "checked" === e.originalEvent.propertyName &&
                  (this._just_changed = !0);
              }),
                ge.event.add(this, "click._change", function (e) {
                  this._just_changed && !e.isTrigger &&
                  (this._just_changed = !1),
                    ge.event.simulate("change", this, e, !0);
                })),
              !1)
            : (ge.event.add(this, "beforeactivate._change", function (e) {
              var t = e.target;
              Q.test(t.nodeName) && !ge._data(t, "changeBubbles") &&
                (ge.event.add(t, "change._change", function (e) {
                  !this.parentNode || e.isSimulated || e.isTrigger ||
                    ge.event.simulate("change", this.parentNode, e, !0);
                }),
                  ge._data(t, "changeBubbles", !0));
            }),
              H);
        },
        handle: function (e) {
          var t = e.target;
          return this !== t || e.isSimulated || e.isTrigger ||
              "radio" !== t.type && "checkbox" !== t.type
            ? e.handleObj.handler.apply(this, arguments) : H;
        },
        teardown: function () {
          return ge.event.remove(this, "._change"), !Q.test(this.nodeName);
        },
      }),
      ge.support.focusinBubbles ||
      ge.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var i = 0,
          r = function (e) {
            ge.event.simulate(t, e.target, ge.event.fix(e), !0);
          };
        ge.event.special[t] = {
          setup: function () {
            0 == i++ && m.addEventListener(e, r, !0);
          },
          teardown: function () {
            0 == --i && m.removeEventListener(e, r, !0);
          },
        };
      }),
      ge.fn.extend({
        on: function (e, t, i, r, n) {
          var o, a;
          if ("object" == typeof e) {
            for (o in "string" != typeof t && (i = i || t, t = H), e) {
              this.on(o, t, i, e[o], n);
            }
            return this;
          }
          if (
            null == i && null == r
              ? (r = t, i = t = H)
              : null == r && ("string" == typeof t
                ? (r = i, i = H)
                : (r = i, i = t, t = H)), !1 === r
          ) {
            r = ie;
          } else if (!r) {
            return this;
          }
          return 1 === n && (a = r,
            (r = function (e) {
              return ge().off(e), a.apply(this, arguments);
            }).guid = a.guid || (a.guid = ge.guid++)),
            this.each(function () {
              ge.event.add(this, e, r, i, t);
            });
        },
        one: function (e, t, i, r) {
          return this.on(e, t, i, r, 1);
        },
        off: function (e, t, i) {
          var r, n;
          if (e && e.preventDefault && e.handleObj) {
            return r = e.handleObj,
              ge(e.delegateTarget).off(
                r.namespace
                  ? r.origType + "." + r.namespace
                  : r.origType,
                r.selector,
                r.handler,
              ),
              this;
          }
          if ("object" == typeof e) {
            for (n in e) this.off(n, t, e[n]);
            return this;
          }
          return (!1 === t || "function" == typeof t) && (i = t, t = H),
            !1 === i && (i = ie),
            this.each(function () {
              ge.event.remove(this, e, i, t);
            });
        },
        bind: function (e, t, i) {
          return this.on(e, null, t, i);
        },
        unbind: function (e, t) {
          return this.off(e, null, t);
        },
        delegate: function (e, t, i, r) {
          return this.on(t, e, i, r);
        },
        undelegate: function (e, t, i) {
          return 1 === arguments.length
            ? this.off(e, "**")
            : this.off(t, e || "**", i);
        },
        trigger: function (e, t) {
          return this.each(function () {
            ge.event.trigger(e, t, this);
          });
        },
        triggerHandler: function (e, t) {
          var i = this[0];
          return i ? ge.event.trigger(e, t, i, !0) : H;
        },
      }),
      function (i, r) {
        var e,
          R,
          x,
          o,
          t,
          d,
          c,
          H,
          m,
          b,
          n,
          E,
          g,
          a,
          s,
          v,
          h,
          w = "sizzle" + -new Date(),
          y = i.document,
          T = {},
          _ = 0,
          u = 0,
          l = te(),
          p = te(),
          f = te(),
          M = typeof r,
          S = 1 << 31,
          C = [],
          A = C.pop,
          L = C.push,
          P = C.slice,
          D = C.indexOf || function (e) {
            for (var t = 0, i = this.length; t < i; t++) {
              if (this[t] === e) return t;
            }
            return -1;
          },
          F = "[\\x20\\t\\r\\n\\f]",
          N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
          V = N.replace("w", "w#"),
          z = "\\[" + F + "*(" + N + ")" + F + "*(?:([*^$|!~]?=)" + F +
            "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + V + ")|)|)" + F + "*\\]",
          U = ":(" + N +
            ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" +
            z.replace(3, 8) + ")*)|.*)\\)|)",
          B = RegExp("^" + F + "+|((?:^|[^\\\\])(?:\\\\.)*)" + F + "+$", "g"),
          O = RegExp("^" + F + "*," + F + "*"),
          k = RegExp("^" + F + "*([\\x20\\t\\r\\n\\f>+~])" + F + "*"),
          I = RegExp(U),
          j = RegExp("^" + V + "$"),
          G = {
            ID: RegExp("^#(" + N + ")"),
            CLASS: RegExp("^\\.(" + N + ")"),
            NAME: RegExp("^\\[name=['\"]?(" + N + ")['\"]?\\]"),
            TAG: RegExp("^(" + N.replace("w", "w*") + ")"),
            ATTR: RegExp("^" + z),
            PSEUDO: RegExp("^" + U),
            CHILD: RegExp(
              "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + F +
                "*(even|odd|(([+-]|)(\\d*)n|)" + F + "*(?:([+-]|)" + F +
                "*(\\d+)|))" + F + "*\\)|)",
              "i",
            ),
            needsContext: RegExp(
              "^" + F + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + F +
                "*((?:-\\d)?\\d*)" + F + "*\\)|)(?=[^-]|$)",
              "i",
            ),
          },
          W = /[\x20\t\r\n\f]*[+~]/,
          X = /^[^{]+\{\s*\[native code/,
          q = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
          Y = /^(?:input|select|textarea|button)$/i,
          K = /^h\d$/i,
          Q = /'|\\/g,
          Z = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
          $ = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
          J = function (e, t) {
            var i = "0x" + t - 65536;
            return i != i ? t
            : i < 0 ? String.fromCharCode(i + 65536)
            : String.fromCharCode(55296 | i >> 10, 56320 | 1023 & i);
          };
        try {
          P.call(y.documentElement.childNodes, 0)[0].nodeType;
        } catch (e) {
          P = function (e) {
            for (var t, i = []; t = this[e++];) i.push(t);
            return i;
          };
        }
        function ee(e) {
          return X.test(e + "");
        }
        function te() {
          var i, r = [];
          return i = function (e, t) {
            return r.push(e += " ") > x.cacheLength && delete i[r.shift()],
              i[e] = t;
          };
        }
        function ie(e) {
          return e[w] = !0, e;
        }
        function re(e) {
          var t = b.createElement("div");
          try {
            return e(t);
          } catch (e) {
            return !1;
          } finally {
            t = null;
          }
        }
        function ne(e, t, i, r) {
          var n, o, a, s, l, c, h, u, p, f;
          if (
            (t ? t.ownerDocument || t : y) !== b && m(t),
              i = i || [],
              !e || "string" != typeof e
          ) {
            return i;
          }
          if (1 !== (s = (t = t || b).nodeType) && 9 !== s) return [];
          if (!E && !r) {
            if (n = q.exec(e)) {
              if (a = n[1]) {
                if (9 === s) {
                  if (!(o = t.getElementById(a)) || !o.parentNode) return i;
                  if (o.id === a) return i.push(o), i;
                } else if (
                  t.ownerDocument && (o = t.ownerDocument.getElementById(a)) &&
                  v(t, o) && o.id === a
                ) {
                  return i.push(o), i;
                }
              } else {
                if (n[2]) {
                  return L.apply(i, P.call(t.getElementsByTagName(e), 0)), i;
                }
                if (
                  (a = n[3]) && T.getByClassName && t.getElementsByClassName
                ) {
                  return L.apply(i, P.call(t.getElementsByClassName(a), 0)), i;
                }
              }
            }
            if (T.qsa && !g.test(e)) {
              if (
                h = !0,
                  u = w,
                  p = t,
                  f = 9 === s && e,
                  1 === s && "object" !== t.nodeName.toLowerCase()
              ) {
                for (
                  c = ce(e),
                    (h = t.getAttribute("id"))
                      ? u = h.replace(Q, "\\$&")
                      : t.setAttribute("id", u),
                    u = "[id='" + u + "'] ",
                    l = c.length;
                  l--;
                ) {
                  c[l] = u + he(c[l]);
                }
                p = W.test(e) && t.parentNode || t, f = c.join(",");
              }
              if (f) {
                try {
                  return L.apply(i, P.call(p.querySelectorAll(f), 0)), i;
                } catch (e) {
                } finally {
                  h || t.removeAttribute("id");
                }
              }
            }
          }
          return function (e, t, i, r) {
            var n, o, a, s, l, c = ce(e);
            if (!r && 1 === c.length) {
              if (
                2 < (o = c[0] = c[0].slice(0)).length &&
                "ID" === (a = o[0]).type && 9 === t.nodeType && !E &&
                x.relative[o[1].type]
              ) {
                if (!(t = x.find.ID(a.matches[0].replace($, J), t)[0])) {
                  return i;
                }
                e = e.slice(o.shift().value.length);
              }
              for (
                n = G.needsContext.test(e) ? 0 : o.length;
                n-- && (a = o[n], !x.relative[s = a.type]);
              ) {
                if (
                  (l = x.find[s]) &&
                  (r = l(
                    a.matches[0].replace($, J),
                    W.test(o[0].type) && t.parentNode || t,
                  ))
                ) {
                  if (o.splice(n, 1), !(e = r.length && he(o))) {
                    return L.apply(i, P.call(r, 0)), i;
                  }
                  break;
                }
              }
            }
            return d(e, c)(r, t, E, i, W.test(e)), i;
          }(e.replace(B, "$1"), t, i, r);
        }
        function oe(e, t) {
          var i = t && e,
            r = i && (~t.sourceIndex || S) - (~e.sourceIndex || S);
          if (r) return r;
          if (i) for (; i = i.nextSibling;) if (i === t) return -1;
          return e ? 1 : -1;
        }
        function ae(t) {
          return function (e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t;
          };
        }
        function se(i) {
          return function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && e.type === i;
          };
        }
        function le(a) {
          return ie(function (o) {
            return o = +o,
              ie(function (e, t) {
                for (
                  var i, r = a([], e.length, o), n = r.length; n--;
                ) {
                  e[i = r[n]] && (e[i] = !(t[i] = e[i]));
                }
              });
          });
        }
        for (
          e in t = ne.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName;
          },
            m = ne.setDocument = function (e) {
              var l = e ? e.ownerDocument || e : y;
              return l !== b && 9 === l.nodeType && l.documentElement &&
                (n = (b = l).documentElement,
                  E = t(l),
                  T.tagNameNoComments = re(function (e) {
                    return e.appendChild(l.createComment("")),
                      !e.getElementsByTagName("*").length;
                  }),
                  T.attributes = re(function (e) {
                    e.innerHTML = "<select></select>";
                    var t = typeof e.lastChild.getAttribute("multiple");
                    return "boolean" !== t && "string" !== t;
                  }),
                  T.getByClassName = re(function (e) {
                    return e.innerHTML =
                      "<div class='hidden e'></div><div class='hidden'></div>",
                      !(!e.getElementsByClassName ||
                        !e.getElementsByClassName("e").length) &&
                      (e.lastChild.className = "e",
                        2 === e.getElementsByClassName("e").length);
                  }),
                  T.getByName = re(function (e) {
                    e.id = w + 0,
                      e.innerHTML = "<a name='" + w + "'></a><div name='" + w +
                        "'></div>",
                      n.insertBefore(e, n.firstChild);
                    var t = l.getElementsByName &&
                      l.getElementsByName(w).length ===
                        2 + l.getElementsByName(w + 0).length;
                    return T.getIdNotName = !l.getElementById(w),
                      n.removeChild(e),
                      t;
                  }),
                  x.attrHandle = re(function (e) {
                      return e.innerHTML = "<a href='#'></a>",
                        e.firstChild &&
                        typeof e.firstChild.getAttribute !== M &&
                        "#" === e.firstChild.getAttribute("href");
                    })
                    ? {}
                    : {
                      href: function (e) {
                        return e.getAttribute("href", 2);
                      },
                      type: function (e) {
                        return e.getAttribute("type");
                      },
                    },
                  T.getIdNotName
                    ? (x.find.ID = function (e, t) {
                      if (typeof t.getElementById !== M && !E) {
                        var i = t.getElementById(e);
                        return i && i.parentNode ? [i] : [];
                      }
                    },
                      x.filter.ID = function (e) {
                        var t = e.replace($, J);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      })
                    : (x.find.ID = function (e, t) {
                      if (typeof t.getElementById !== M && !E) {
                        var i = t.getElementById(e);
                        return i
                          ? i.id === e ||
                              typeof i.getAttributeNode !== M &&
                                i.getAttributeNode("id").value === e
                            ? [i]
                            : r
                          : [];
                      }
                    },
                      x.filter.ID = function (e) {
                        var i = e.replace($, J);
                        return function (e) {
                          var t = typeof e.getAttributeNode !== M &&
                            e.getAttributeNode("id");
                          return t && t.value === i;
                        };
                      }),
                  x.find.TAG = T.tagNameNoComments
                    ? function (e, t) {
                      return typeof t.getElementsByTagName !== M
                        ? t.getElementsByTagName(e)
                        : r;
                    }
                    : function (e, t) {
                      var i, r = [], n = 0, o = t.getElementsByTagName(e);
                      if ("*" === e) {
                        for (; i = o[n++];) 1 === i.nodeType && r.push(i);
                        return r;
                      }
                      return o;
                    },
                  x.find.NAME = T.getByName && function (e, t) {
                    return typeof t.getElementsByName !== M
                      ? t.getElementsByName(name)
                      : r;
                  },
                  x.find.CLASS = T.getByClassName && function (e, t) {
                    return typeof t.getElementsByClassName === M || E
                      ? r
                      : t.getElementsByClassName(e);
                  },
                  a = [],
                  g = [":focus"],
                  (T.qsa = ee(l.querySelectorAll)) && (re(function (e) {
                    e.innerHTML =
                      "<select><option selected=''></option></select>",
                      e.querySelectorAll("[selected]").length ||
                      g.push(
                        "\\[" + F +
                          "*(?:checked|disabled|ismap|multiple|readonly|selected|value)",
                      ),
                      e.querySelectorAll(":checked").length ||
                      g.push(":checked");
                  }),
                    re(function (e) {
                      e.innerHTML = "<input type='hidden' i=''/>",
                        e.querySelectorAll("[i^='']").length &&
                        g.push("[*^$]=" + F + "*(?:\"\"|'')"),
                        e.querySelectorAll(":enabled").length ||
                        g.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        g.push(",.*:");
                    })),
                  (T.matchesSelector = ee(
                    s = n.matchesSelector || n.mozMatchesSelector ||
                      n.webkitMatchesSelector || n.oMatchesSelector ||
                      n.msMatchesSelector,
                  )) && re(function (e) {
                    T.disconnectedMatch = s.call(e, "div"),
                      s.call(e, "[s!='']:x"),
                      a.push("!=", U);
                  }),
                  g = RegExp(g.join("|")),
                  a = RegExp(a.join("|")),
                  v = ee(n.contains) || n.compareDocumentPosition
                    ? function (e, t) {
                      var i = 9 === e.nodeType ? e.documentElement : e,
                        r = t && t.parentNode;
                      return e === r || !(!r || 1 !== r.nodeType || !(i.contains
                        ? i.contains(r)
                        : e.compareDocumentPosition &&
                          16 & e.compareDocumentPosition(r)));
                    }
                    : function (e, t) {
                      if (t) {
                        for (; t = t.parentNode;) if (t === e) return !0;
                      }
                      return !1;
                    },
                  h = n.compareDocumentPosition
                    ? function (e, t) {
                      var i;
                      return e === t
                        ? (c = !0, 0)
                        : (i = t.compareDocumentPosition &&
                            e.compareDocumentPosition &&
                            e.compareDocumentPosition(t))
                        ? 1 & i || e.parentNode && 11 === e.parentNode.nodeType
                          ? e === l || v(y, e) ? -1 : t === l || v(y, t)
                            ? 1
                            : 0
                          : 4 & i
                          ? -1
                          : 1
                        : e.compareDocumentPosition
                        ? -1
                        : 1;
                    }
                    : function (e, t) {
                      var i,
                        r = 0,
                        n = e.parentNode,
                        o = t.parentNode,
                        a = [e],
                        s = [t];
                      if (e === t) return c = !0, 0;
                      if (!n || !o) {
                        return e === l ? -1 : t === l ? 1 : n ? -1 : o ? 1 : 0;
                      }
                      if (n === o) return oe(e, t);
                      for (i = e; i = i.parentNode;) a.unshift(i);
                      for (i = t; i = i.parentNode;) s.unshift(i);
                      for (; a[r] === s[r];) r++;
                      return r ? oe(a[r], s[r])
                      : a[r] === y ? -1 : s[r] === y ? 1 : 0;
                    },
                  c = !1,
                  [0, 0].sort(h),
                  T.detectDuplicates = c),
                b;
            },
            ne.matches = function (e, t) {
              return ne(e, null, null, t);
            },
            ne.matchesSelector = function (e, t) {
              if (
                (e.ownerDocument || e) !== b && m(e),
                  t = t.replace(Z, "='$1']"),
                  !(!T.matchesSelector || E || a && a.test(t) || g.test(t))
              ) {
                try {
                  var i = s.call(e, t);
                  if (
                    i || T.disconnectedMatch ||
                    e.document && 11 !== e.document.nodeType
                  ) {
                    return i;
                  }
                } catch (e) {}
              }
              return 0 < ne(t, b, null, [e]).length;
            },
            ne.contains = function (e, t) {
              return (e.ownerDocument || e) !== b && m(e), v(e, t);
            },
            ne.attr = function (e, t) {
              var i;
              return (e.ownerDocument || e) !== b && m(e),
                E || (t = t.toLowerCase()),
                (i = x.attrHandle[t])
                  ? i(e)
                  : E || T.attributes
                  ? e.getAttribute(t)
                  : ((i = e.getAttributeNode(t)) || e.getAttribute(t)) &&
                      !0 === e[t]
                  ? t
                  : i && i.specified
                  ? i.value
                  : null;
            },
            ne.error = function (e) {
              throw Error("Syntax error, unrecognized expression: " + e);
            },
            ne.uniqueSort = function (e) {
              var t, i = [], r = 1, n = 0;
              if (c = !T.detectDuplicates, e.sort(h), c) {
                for (; t = e[r]; r++) t === e[r - 1] && (n = i.push(r));
                for (; n--;) e.splice(i[n], 1);
              }
              return e;
            },
            o = ne.getText = function (e) {
              var t, i = "", r = 0, n = e.nodeType;
              if (n) {
                if (1 === n || 9 === n || 11 === n) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) i += o(e);
                } else if (3 === n || 4 === n) return e.nodeValue;
              } else for (; t = e[r]; r++) i += o(t);
              return i;
            },
            x = ne.selectors = {
              cacheLength: 50,
              createPseudo: ie,
              match: G,
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return e[1] = e[1].replace($, J),
                    e[3] = (e[4] || e[5] || "").replace($, J),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4);
                },
                CHILD: function (e) {
                  return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || ne.error(e[0]),
                        e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3])),
                        e[5] = +(e[7] + e[8] || "odd" === e[3]))
                      : e[3] && ne.error(e[0]),
                    e;
                },
                PSEUDO: function (e) {
                  var t, i = !e[5] && e[2];
                  return G.CHILD.test(e[0]) ? null
                  : (e[4]
                    ? e[2] = e[4]
                    : i && I.test(i) && (t = ce(i, !0)) &&
                      (t = i.indexOf(")", i.length - t) - i.length) &&
                      (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)),
                    e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (t) {
                  return "*" === t
                    ? function () {
                      return !0;
                    }
                    : (t = t.replace($, J).toLowerCase(), function (e) {
                      return e.nodeName && e.nodeName.toLowerCase() === t;
                    });
                },
                CLASS: function (e) {
                  var t = l[e + " "];
                  return t ||
                    (t = RegExp("(^|" + F + ")" + e + "(" + F + "|$)")) &&
                      l(e, function (e) {
                        return t.test(
                          e.className ||
                            typeof e.getAttribute !== M &&
                              e.getAttribute("class") ||
                            "",
                        );
                      });
                },
                ATTR: function (i, r, n) {
                  return function (e) {
                    var t = ne.attr(e, i);
                    return null == t ? "!=" === r
                    : !r ||
                      (t += "",
                        "=" === r
                          ? t === n
                          : "!=" === r
                          ? t !== n
                          : "^=" === r
                          ? n && 0 === t.indexOf(n)
                          : "*=" === r
                          ? n && -1 < t.indexOf(n)
                          : "$=" === r
                          ? n && t.slice(-n.length) === n
                          : "~=" === r
                          ? -1 < (" " + t + " ").indexOf(n)
                          : "|=" === r &&
                            (t === n || t.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (f, e, t, d, m) {
                  var E = "nth" !== f.slice(0, 3),
                    g = "last" !== f.slice(-4),
                    v = "of-type" === e;
                  return 1 === d && 0 === m ? function (e) {
                    return !!e.parentNode;
                  } : function (e, t, i) {
                    var r,
                      n,
                      o,
                      a,
                      s,
                      l,
                      c = E !== g ? "nextSibling" : "previousSibling",
                      h = e.parentNode,
                      u = v && e.nodeName.toLowerCase(),
                      p = !i && !v;
                    if (h) {
                      if (E) {
                        for (; c;) {
                          for (o = e; o = o[c];) {
                            if (
                              v ? o.nodeName.toLowerCase() === u
                              : 1 === o.nodeType
                            ) {
                              return !1;
                            }
                          }
                          l = c = "only" === f && !l && "nextSibling";
                        }
                        return !0;
                      }
                      if (l = [g ? h.firstChild : h.lastChild], g && p) {
                        for (
                          s =
                            (r = (n = h[w] || (h[w] = {}))[f] || [])[0] === _ &&
                            r[1],
                            a = r[0] === _ && r[2],
                            o = s && h.childNodes[s];
                          o = ++s && o && o[c] || (a = s = 0) || l.pop();
                        ) {
                          if (1 === o.nodeType && ++a && o === e) {
                            n[f] = [_, s, a];
                            break;
                          }
                        }
                      } else if (
                        p && (r = (e[w] || (e[w] = {}))[f]) && r[0] === _
                      ) {
                        a = r[1];
                      } else {
                        for (
                          ;
                          (o = ++s && o && o[c] || (a = s = 0) || l.pop()) &&
                          ((v
                            ? o.nodeName.toLowerCase() !== u
                            : 1 !== o.nodeType) ||
                            !++a ||
                            (p && ((o[w] || (o[w] = {}))[f] = [_, a]),
                              o !== e));
                        );
                      }
                      return (a -= m) === d || 0 == a % d && 0 <= a / d;
                    }
                  };
                },
                PSEUDO: function (e, o) {
                  var t,
                    a = x.pseudos[e] || x.setFilters[e.toLowerCase()] ||
                      ne.error("unsupported pseudo: " + e);
                  return a[w]
                    ? a(o)
                    : 1 < a.length
                    ? (t = [e, e, "", o],
                      x.setFilters.hasOwnProperty(e.toLowerCase())
                        ? ie(function (e, t) {
                          for (var i, r = a(e, o), n = r.length; n--;) {
                            e[i = D.call(e, r[n])] = !(t[i] = r[n]);
                          }
                        })
                        : function (e) {
                          return a(e, 0, t);
                        })
                    : a;
                },
              },
              pseudos: {
                not: ie(function (e) {
                  var r = [], n = [], s = d(e.replace(B, "$1"));
                  return s[w]
                    ? ie(function (e, t, i, r) {
                      for (
                        var n, o = s(e, null, r, []), a = e.length; a--;
                      ) {
                        (n = o[a]) && (e[a] = !(t[a] = n));
                      }
                    })
                    : function (e, t, i) {
                      return r[0] = e, s(r, null, i, n), !n.pop();
                    };
                }),
                has: ie(function (t) {
                  return function (e) {
                    return 0 < ne(t, e).length;
                  };
                }),
                contains: ie(function (t) {
                  return function (e) {
                    return -1 <
                      (e.textContent || e.innerText || o(e)).indexOf(t);
                  };
                }),
                lang: ie(function (i) {
                  return j.test(i || "") || ne.error("unsupported lang: " + i),
                    i = i.replace($, J).toLowerCase(),
                    function (e) {
                      var t;
                      do {
                        if (
                          t = E
                            ? e.getAttribute("xml:lang") ||
                              e.getAttribute("lang")
                            : e.lang
                        ) {
                          return (t = t.toLowerCase()) === i ||
                            0 === t.indexOf(i + "-");
                        }
                      } while ((e = e.parentNode) && 1 === e.nodeType);
                      return !1;
                    };
                }),
                target: function (e) {
                  var t = i.location && i.location.hash;
                  return t && t.slice(1) === e.id;
                },
                root: function (e) {
                  return e === n;
                },
                focus: function (e) {
                  return e === b.activeElement &&
                    (!b.hasFocus || b.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex);
                },
                enabled: function (e) {
                  return !1 === e.disabled;
                },
                disabled: function (e) {
                  return !0 === e.disabled;
                },
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && !!e.checked ||
                    "option" === t && !!e.selected;
                },
                selected: function (e) {
                  return e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected;
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling) {
                    if (
                      "@" < e.nodeName || 3 === e.nodeType || 4 === e.nodeType
                    ) {
                      return !1;
                    }
                  }
                  return !0;
                },
                parent: function (e) {
                  return !x.pseudos.empty(e);
                },
                header: function (e) {
                  return K.test(e.nodeName);
                },
                input: function (e) {
                  return Y.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return "input" === t && "button" === e.type || "button" === t;
                },
                text: function (e) {
                  var t;
                  return "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      t.toLowerCase() === e.type);
                },
                first: le(function () {
                  return [0];
                }),
                last: le(function (e, t) {
                  return [t - 1];
                }),
                eq: le(function (e, t, i) {
                  return [i < 0 ? i + t : i];
                }),
                even: le(function (e, t) {
                  for (var i = 0; i < t; i += 2) e.push(i);
                  return e;
                }),
                odd: le(function (e, t) {
                  for (var i = 1; i < t; i += 2) e.push(i);
                  return e;
                }),
                lt: le(function (e, t, i) {
                  for (var r = i < 0 ? i + t : i; 0 <= --r;) e.push(r);
                  return e;
                }),
                gt: le(function (e, t, i) {
                  for (var r = i < 0 ? i + t : i; t > ++r;) e.push(r);
                  return e;
                }),
              },
            },
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }
        ) {
          x.pseudos[e] = ae(e);
        }
        for (e in { submit: !0, reset: !0 }) x.pseudos[e] = se(e);
        function ce(e, t) {
          var i, r, n, o, a, s, l, c = p[e + " "];
          if (c) return t ? 0 : c.slice(0);
          for (a = e, s = [], l = x.preFilter; a;) {
            for (
              o
                in (!i || (r = O.exec(a))) &&
                  (r && (a = a.slice(r[0].length) || a), s.push(n = [])),
                  i = !1,
                  (r = k.exec(a)) &&
                  (i = r.shift(),
                    n.push({ value: i, type: r[0].replace(B, " ") }),
                    a = a.slice(i.length)),
                  x.filter
            ) {
              !(r = G[o].exec(a)) || l[o] && !(r = l[o](r)) ||
                (i = r.shift(),
                  n.push({ value: i, type: o, matches: r }),
                  a = a.slice(i.length));
            }
            if (!i) break;
          }
          return t ? a.length : a ? ne.error(e) : p(e, s).slice(0);
        }
        function he(e) {
          for (var t = 0, i = e.length, r = ""; t < i; t++) r += e[t].value;
          return r;
        }
        function ue(s, e, t) {
          var l = e.dir, c = t && "parentNode" === l, h = u++;
          return e.first ? function (e, t, i) {
            for (; e = e[l];) if (1 === e.nodeType || c) return s(e, t, i);
          } : function (e, t, i) {
            var r, n, o, a = _ + " " + h;
            if (i) {
              for (; e = e[l];) {if ((1 === e.nodeType || c) && s(e, t, i)) {
                  return !0;
                }}
            } else {
              for (; e = e[l];) {
                if (1 === e.nodeType || c) {
                  if ((n = (o = e[w] || (e[w] = {}))[l]) && n[0] === a) {
                    if (!0 === (r = n[1]) || r === R) {
                      return !0 === r;
                    }
                  } else if (
                    (n = o[l] = [a])[1] = s(e, t, i) || R, !0 === n[1]
                  ) {
                    return !0;
                  }
                }
              }
            }
          };
        }
        function pe(n) {
          return 1 < n.length ? function (e, t, i) {
            for (var r = n.length; r--;) if (!n[r](e, t, i)) return !1;
            return !0;
          } : n[0];
        }
        function fe(e, t, i, r, n) {
          for (var o, a = [], s = 0, l = e.length, c = null != t; s < l; s++) {
            (o = e[s]) && (!i || i(o, r, n)) && (a.push(o), c && t.push(s));
          }
          return a;
        }
        function de(f, d, m, E, g, e) {
          return E && !E[w] && (E = de(E)),
            g && !g[w] && (g = de(g, e)),
            ie(function (e, t, i, r) {
              var n,
                o,
                a,
                s = [],
                l = [],
                c = t.length,
                h = e || function (e, t, i) {
                  for (var r = 0, n = t.length; r < n; r++) ne(e, t[r], i);
                  return i;
                }(d || "*", i.nodeType ? [i] : i, []),
                u = !f || !e && d ? h : fe(h, s, f, i, r),
                p = m ? g || (e ? f : c || E) ? [] : t : u;
              if (m && m(u, p, i, r), E) {
                for (
                  n = fe(p, l), E(n, [], i, r), o = n.length; o--;
                ) {
                  (a = n[o]) && (p[l[o]] = !(u[l[o]] = a));
                }
              }
              if (e) {
                if (g || f) {
                  if (g) {
                    for (n = [], o = p.length; o--;) {
                      (a = p[o]) && n.push(u[o] = a);
                    }
                    g(null, p = [], n, r);
                  }
                  for (o = p.length; o--;) {
                    (a = p[o]) && -1 < (n = g
                          ? D.call(e, a)
                          : s[o]) && (e[n] = !(t[n] = a));
                  }
                }
              } else {
                p = fe(p === t ? p.splice(c, p.length) : p),
                  g ? g(null, t, p, r) : L.apply(t, p);
              }
            });
        }
        function me(e) {
          for (
            var r,
              t,
              i,
              n = e.length,
              o = x.relative[e[0].type],
              a = o || x.relative[" "],
              s = o ? 1 : 0,
              l = ue(
                function (e) {
                  return e === r;
                },
                a,
                !0,
              ),
              c = ue(
                function (e) {
                  return -1 < D.call(r, e);
                },
                a,
                !0,
              ),
              h = [function (e, t, i) {
                return !o && (i || t !== H) ||
                  ((r = t).nodeType ? l(e, t, i) : c(e, t, i));
              }];
            s < n;
            s++
          ) {
            if (t = x.relative[e[s].type]) h = [ue(pe(h), t)];
            else {
              if ((t = x.filter[e[s].type].apply(null, e[s].matches))[w]) {
                for (i = ++s; i < n && !x.relative[e[i].type]; i++);
                return de(
                  1 < s && pe(h),
                  1 < s && he(e.slice(0, s - 1)).replace(B, "$1"),
                  t,
                  s < i && me(e.slice(s, i)),
                  i < n && me(e = e.slice(i)),
                  i < n && he(e),
                );
              }
              h.push(t);
            }
          }
          return pe(h);
        }
        function Ee() {}
        d = ne.compile = function (e, t) {
          var i, E, g, v, y, T, r, n = [], o = [], a = f[e + " "];
          if (!a) {
            for (t || (t = ce(e)), i = t.length; i--;) {
              (a = me(t[i]))[w] ? n.push(a) : o.push(a);
            }
            a = f(
              e,
              (E = o,
                y = (v = 0) < (g = n).length,
                T = 0 < E.length,
                r = function (e, t, i, r, n) {
                  var o,
                    a,
                    s,
                    l = [],
                    c = 0,
                    h = "0",
                    u = e && [],
                    p = null != n,
                    f = H,
                    d = e || T && x.find.TAG("*", n && t.parentNode || t),
                    m = _ += null == f ? 1 : Math.random() || .1;
                  for (
                    p && (H = t !== b && t, R = v); null != (o = d[h]); h++
                  ) {
                    if (T && o) {
                      for (a = 0; s = E[a++];) {
                        if (s(o, t, i)) {
                          r.push(o);
                          break;
                        }
                      }
                      p && (_ = m, R = ++v);
                    }
                    y && ((o = !s && o) && c--, e && u.push(o));
                  }
                  if (c += h, y && h !== c) {
                    for (a = 0; s = g[a++];) s(u, l, t, i);
                    if (e) {
                      if (0 < c) {
                        for (; h--;) u[h] || l[h] || (l[h] = A.call(r));
                      }
                      l = fe(l);
                    }
                    L.apply(r, l),
                      p && !e && 0 < l.length && 1 < c + g.length &&
                      ne.uniqueSort(r);
                  }
                  return p && (_ = m, H = f), u;
                },
                y ? ie(r) : r),
            );
          }
          return a;
        },
          x.pseudos.nth = x.pseudos.eq,
          x.filters = Ee.prototype = x.pseudos,
          x.setFilters = new Ee(),
          m(),
          ne.attr = ge.attr,
          ge.find = ne,
          ge.expr = ne.selectors,
          ge.expr[":"] = ge.expr.pseudos,
          ge.unique = ne.uniqueSort,
          ge.text = ne.getText,
          ge.isXMLDoc = ne.isXML,
          ge.contains = ne.contains;
      }(d);
    var re = /Until$/,
      ne = /^(?:parents|prev(?:Until|All))/,
      oe = /^.[^:#\[\.,]*$/,
      ae = ge.expr.match.needsContext,
      se = { children: !0, contents: !0, next: !0, prev: !0 };
    function le(e, t) {
      for (; (e = e[t]) && 1 !== e.nodeType;);
      return e;
    }
    function ce(e, i, r) {
      if (i = i || 0, ge.isFunction(i)) {
        return ge.grep(e, function (e, t) {
          return !!i.call(e, t, e) === r;
        });
      }
      if (i.nodeType) {
        return ge.grep(e, function (e) {
          return e === i === r;
        });
      }
      if ("string" == typeof i) {
        var t = ge.grep(e, function (e) {
          return 1 === e.nodeType;
        });
        if (oe.test(i)) return ge.filter(i, t, !r);
        i = ge.filter(i, t);
      }
      return ge.grep(e, function (e) {
        return 0 <= ge.inArray(e, i) === r;
      });
    }
    function he(e) {
      var t = ue.split("|"), i = e.createDocumentFragment();
      if (i.createElement) for (; t.length;) i.createElement(t.pop());
      return i;
    }
    ge.fn.extend({
      find: function (e) {
        var t, i, r, n = this.length;
        if ("string" != typeof e) {
          return (r = this).pushStack(
            ge(e).filter(function () {
              for (t = 0; t < n; t++) if (ge.contains(r[t], this)) return !0;
            }),
          );
        }
        for (i = [], t = 0; t < n; t++) ge.find(e, this[t], i);
        return (i = this.pushStack(1 < n ? ge.unique(i) : i)).selector =
          (this.selector ? this.selector + " " : "") + e,
          i;
      },
      has: function (e) {
        var t, i = ge(e, this), r = i.length;
        return this.filter(function () {
          for (t = 0; t < r; t++) if (ge.contains(this, i[t])) return !0;
        });
      },
      not: function (e) {
        return this.pushStack(ce(this, e, !1));
      },
      filter: function (e) {
        return this.pushStack(ce(this, e, !0));
      },
      is: function (e) {
        return !!e &&
          ("string" == typeof e
            ? ae.test(e)
              ? 0 <= ge(e, this.context).index(this[0])
              : 0 < ge.filter(e, this).length
            : 0 < this.filter(e).length);
      },
      closest: function (e, t) {
        for (
          var i,
            r = 0,
            n = this.length,
            o = [],
            a = ae.test(e) || "string" != typeof e
              ? ge(e, t || this.context)
              : 0;
          r < n;
          r++
        ) {
          for (
            i = this[r]; i && i.ownerDocument && i !== t && 11 !== i.nodeType;
          ) {
            if (a ? -1 < a.index(i) : ge.find.matchesSelector(i, e)) {
              o.push(i);
              break;
            }
            i = i.parentNode;
          }
        }
        return this.pushStack(1 < o.length ? ge.unique(o) : o);
      },
      index: function (e) {
        return e
          ? "string" == typeof e
            ? ge.inArray(this[0], ge(e))
            : ge.inArray(e.jquery ? e[0] : e, this)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (e, t) {
        var i = "string" == typeof e
            ? ge(e, t)
            : ge.makeArray(e && e.nodeType ? [e] : e),
          r = ge.merge(this.get(), i);
        return this.pushStack(ge.unique(r));
      },
      addBack: function (e) {
        return this.add(
          null == e ? this.prevObject : this.prevObject.filter(e),
        );
      },
    }),
      ge.fn.andSelf = ge.fn.addBack,
      ge.each({
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return ge.dir(e, "parentNode");
        },
        parentsUntil: function (e, t, i) {
          return ge.dir(e, "parentNode", i);
        },
        next: function (e) {
          return le(e, "nextSibling");
        },
        prev: function (e) {
          return le(e, "previousSibling");
        },
        nextAll: function (e) {
          return ge.dir(e, "nextSibling");
        },
        prevAll: function (e) {
          return ge.dir(e, "previousSibling");
        },
        nextUntil: function (e, t, i) {
          return ge.dir(e, "nextSibling", i);
        },
        prevUntil: function (e, t, i) {
          return ge.dir(e, "previousSibling", i);
        },
        siblings: function (e) {
          return ge.sibling((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return ge.sibling(e.firstChild);
        },
        contents: function (e) {
          return ge.nodeName(e, "iframe")
            ? e.contentDocument || e.contentWindow.document
            : ge.merge([], e.childNodes);
        },
      }, function (r, n) {
        ge.fn[r] = function (e, t) {
          var i = ge.map(this, n, e);
          return re.test(r) || (t = e),
            t && "string" == typeof t && (i = ge.filter(t, i)),
            i = 1 < this.length && !se[r] ? ge.unique(i) : i,
            1 < this.length && ne.test(r) && (i = i.reverse()),
            this.pushStack(i);
        };
      }),
      ge.extend({
        filter: function (e, t, i) {
          return i && (e = ":not(" + e + ")"),
            1 === t.length
              ? ge.find.matchesSelector(t[0], e) ? [t[0]] : []
              : ge.find.matches(e, t);
        },
        dir: function (e, t, i) {
          for (
            var r = [], n = e[t];
            n && 9 !== n.nodeType &&
            (i === H || 1 !== n.nodeType || !ge(n).is(i));
          ) {
            1 === n.nodeType && r.push(n), n = n[t];
          }
          return r;
        },
        sibling: function (e, t) {
          for (var i = []; e; e = e.nextSibling) {
            1 === e.nodeType && e !== t && i.push(e);
          }
          return i;
        },
      });
    var ue =
        "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      pe = / jQuery\d+="(?:null|\d+)"/g,
      fe = RegExp("<(?:" + ue + ")[\\s/>]", "i"),
      de = /^\s+/,
      me =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      Ee = /<([\w:]+)/,
      ve = /<tbody/i,
      ye = /<|&#?\w+;/,
      Te = /<(?:script|style|link)/i,
      Re = /^(?:checkbox|radio)$/i,
      xe = /checked\s*(?:[^=]|=\s*.checked.)/i,
      He = /^$|\/(?:java|ecma)script/i,
      be = /^true\/(.*)/,
      we = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      _e = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ge.support.htmlSerialize ? [0, "", ""]
        : [1, "X<div>", "</div>"],
      },
      Me = he(m).appendChild(m.createElement("div"));
    function Se(e) {
      var t = e.getAttributeNode("type");
      return e.type = (t && t.specified) + "/" + e.type, e;
    }
    function Ce(e) {
      var t = be.exec(e.type);
      return t ? e.type = t[1] : e.removeAttribute("type"), e;
    }
    function Ae(e, t) {
      for (var i, r = 0; null != (i = e[r]); r++) {
        ge._data(i, "globalEval", !t || ge._data(t[r], "globalEval"));
      }
    }
    function Le(e, t) {
      if (1 === t.nodeType && ge.hasData(e)) {
        var i, r, n, o = ge._data(e), a = ge._data(t, o), s = o.events;
        if (s) {
          for (i in delete a.handle, a.events = {}, s) {
            for (r = 0, n = s[i].length; r < n; r++) {
              ge.event.add(t, i, s[i][r]);
            }
          }
        }
        a.data && (a.data = ge.extend({}, a.data));
      }
    }
    function Pe(e, t) {
      var i, r, n;
      if (1 === t.nodeType) {
        if (
          i = t.nodeName.toLowerCase(),
            !ge.support.noCloneEvent && t[ge.expando]
        ) {
          for (r in (n = ge._data(t)).events) ge.removeEvent(t, r, n.handle);
          t.removeAttribute(ge.expando);
        }
        "script" === i && t.text !== e.text
          ? (Se(t).text = e.text, Ce(t))
          : "object" === i
          ? (t.parentNode && (t.outerHTML = e.outerHTML),
            ge.support.html5Clone && e.innerHTML && !ge.trim(t.innerHTML) &&
            (t.innerHTML = e.innerHTML))
          : "input" === i && Re.test(e.type)
          ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value))
          : "option" === i
          ? t.defaultSelected = t.selected = e.defaultSelected
          : ("input" === i || "textarea" === i) &&
            (t.defaultValue = e.defaultValue);
      }
    }
    function De(e, t) {
      var i,
        r,
        n = 0,
        o = typeof e.getElementsByTagName !== g
          ? e.getElementsByTagName(t || "*")
          : typeof e.querySelectorAll !== g ? e.querySelectorAll(t || "*") : H;
      if (!o) {
        for (
          o = [], i = e.childNodes || e; null != (r = i[n]); n++
        ) {
          !t || ge.nodeName(r, t) ? o.push(r) : ge.merge(o, De(r, t));
        }
      }
      return t === H || t && ge.nodeName(e, t) ? ge.merge([e], o) : o;
    }
    function Fe(e) {
      Re.test(e.type) && (e.defaultChecked = e.checked);
    }
    _e.optgroup = _e.option,
      _e.tbody = _e.tfoot = _e.colgroup = _e.caption = _e.thead,
      _e.th = _e.td,
      ge.fn.extend({
        text: function (e) {
          return ge.access(
            this,
            function (e) {
              return e === H
                ? ge.text(this)
                : this.empty().append(
                  (this[0] && this[0].ownerDocument || m).createTextNode(e),
                );
            },
            null,
            e,
            arguments.length,
          );
        },
        wrapAll: function (t) {
          if (ge.isFunction(t)) {
            return this.each(function (e) {
              ge(this).wrapAll(t.call(this, e));
            });
          }
          if (this[0]) {
            var e = ge(t, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && e.insertBefore(this[0]),
              e.map(function () {
                for (
                  var e = this; e.firstChild && 1 === e.firstChild.nodeType;
                ) {
                  e = e.firstChild;
                }
                return e;
              }).append(this);
          }
          return this;
        },
        wrapInner: function (i) {
          return ge.isFunction(i)
            ? this.each(function (e) {
              ge(this).wrapInner(i.call(this, e));
            })
            : this.each(function () {
              var e = ge(this), t = e.contents();
              t.length ? t.wrapAll(i) : e.append(i);
            });
        },
        wrap: function (t) {
          var i = ge.isFunction(t);
          return this.each(function (e) {
            ge(this).wrapAll(
              i
                ? t.call(this, e)
                : t,
            );
          });
        },
        unwrap: function () {
          return this.parent().each(function () {
            ge.nodeName(this, "body") || ge(this).replaceWith(this.childNodes);
          }).end();
        },
        append: function () {
          return this.domManip(arguments, !0, function (e) {
            (1 === this.nodeType || 11 === this.nodeType ||
              9 === this.nodeType) && this.appendChild(e);
          });
        },
        prepend: function () {
          return this.domManip(arguments, !0, function (e) {
            (1 === this.nodeType || 11 === this.nodeType ||
              9 === this.nodeType) && this.insertBefore(e, this.firstChild);
          });
        },
        before: function () {
          return this.domManip(arguments, !1, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        },
        after: function () {
          return this.domManip(arguments, !1, function (e) {
            this.parentNode &&
              this.parentNode.insertBefore(e, this.nextSibling);
          });
        },
        remove: function (e, t) {
          for (var i, r = 0; null != (i = this[r]); r++) {
            (!e || 0 < ge.filter(e, [i]).length) &&
              (t || 1 !== i.nodeType || ge.cleanData(De(i)),
                i.parentNode &&
                (t && ge.contains(i.ownerDocument, i) && Ae(De(i, "script")),
                  i.parentNode.removeChild(i)));
          }
          return this;
        },
        empty: function () {
          for (var e, t = 0; null != (e = this[t]); t++) {
            for (1 === e.nodeType && ge.cleanData(De(e, !1)); e.firstChild;) {e
                .removeChild(e.firstChild);}
            e.options && ge.nodeName(e, "select") && (e.options.length = 0);
          }
          return this;
        },
        clone: function (e, t) {
          return e = null != e && e,
            t = null == t ? e : t,
            this.map(function () {
              return ge.clone(this, e, t);
            });
        },
        html: function (e) {
          return ge.access(
            this,
            function (e) {
              var t = this[0] || {}, i = 0, r = this.length;
              if (e === H) {
                return 1 === t.nodeType ? t.innerHTML.replace(pe, "") : H;
              }
              if (
                !("string" != typeof e || Te.test(e) ||
                  !ge.support.htmlSerialize && fe.test(e) ||
                  !ge.support.leadingWhitespace && de.test(e) ||
                  _e[(Ee.exec(e) || ["", ""])[1].toLowerCase()])
              ) {
                e = e.replace(me, "<$1></$2>");
                try {
                  for (; i < r; i++) {
                    1 === (t = this[i] || {}).nodeType &&
                      (ge.cleanData(De(t, !1)), t.innerHTML = e);
                  }
                  t = 0;
                } catch (e) {}
              }
              t && this.empty().append(e);
            },
            null,
            e,
            arguments.length,
          );
        },
        replaceWith: function (e) {
          return ge.isFunction(e) || "string" == typeof e ||
            (e = ge(e).not(this).detach()),
            this.domManip([e], !0, function (e) {
              var t = this.nextSibling, i = this.parentNode;
              i && (ge(this).remove(), i.insertBefore(e, t));
            });
        },
        detach: function (e) {
          return this.remove(e, !0);
        },
        domManip: function (i, r, n) {
          i = v.apply([], i);
          var e,
            t,
            o,
            a,
            s,
            l,
            c,
            h,
            u = 0,
            p = this.length,
            f = this,
            d = p - 1,
            m = i[0],
            E = ge.isFunction(m);
          if (
            E ||
            !(p <= 1 || "string" != typeof m || ge.support.checkClone) &&
              xe.test(m)
          ) {
            return this.each(function (e) {
              var t = f.eq(e);
              E && (i[0] = m.call(this, e, r ? t.html() : H)),
                t.domManip(i, r, n);
            });
          }
          if (
            p &&
            (e =
              (l = ge.buildFragment(i, this[0].ownerDocument, !1, this))
                .firstChild,
              1 === l.childNodes.length && (l = e),
              e)
          ) {
            for (
              r = r && ge.nodeName(e, "tr"),
                o = (a = ge.map(De(l, "script"), Se)).length;
              u < p;
              u++
            ) {
              t = l,
                u !== d &&
                (t = ge.clone(t, !0, !0), o && ge.merge(a, De(t, "script"))),
                n.call(
                  r && ge.nodeName(this[u], "table")
                    ? (c = this[u],
                      h = "tbody",
                      c.getElementsByTagName(h)[0] ||
                      c.appendChild(c.ownerDocument.createElement(h)))
                    : this[u],
                  t,
                  u,
                );
            }
            if (o) {
              for (
                s = a[a.length - 1].ownerDocument, ge.map(a, Ce), u = 0;
                u < o;
                u++
              ) {
                t = a[u],
                  He.test(t.type || "") && !ge._data(t, "globalEval") &&
                  ge.contains(s, t) && (t.src
                    ? ge.ajax({
                      url: t.src,
                      type: "GET",
                      dataType: "script",
                      async: !1,
                      global: !1,
                      throws: !0,
                    })
                    : ge.globalEval(
                      (t.text || t.textContent || t.innerHTML || "").replace(
                        we,
                        "",
                      ),
                    ));
              }
            }
            l = e = null;
          }
          return this;
        },
      }),
      ge.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      }, function (e, a) {
        ge.fn[e] = function (e) {
          for (var t, i = 0, r = [], n = ge(e), o = n.length - 1; i <= o; i++) {
            t = i === o ? this : this.clone(!0),
              ge(n[i])[a](t),
              s.apply(r, t.get());
          }
          return this.pushStack(r);
        };
      }),
      ge.extend({
        clone: function (e, t, i) {
          var r, n, o, a, s, l = ge.contains(e.ownerDocument, e);
          if (
            ge.support.html5Clone || ge.isXMLDoc(e) ||
              !fe.test("<" + e.nodeName + ">")
              ? o = e.cloneNode(!0)
              : (Me.innerHTML = e.outerHTML, Me.removeChild(o = Me.firstChild)),
              !(ge.support.noCloneEvent && ge.support.noCloneChecked ||
                1 !== e.nodeType && 11 !== e.nodeType || ge.isXMLDoc(e))
          ) {
            for (r = De(o), s = De(e), a = 0; null != (n = s[a]); ++a) {
              r[a] && Pe(n, r[a]);
            }
          }
          if (t) {
            if (i) {
              for (
                s = s || De(e), r = r || De(o), a = 0; null != (n = s[a]); a++
              ) {
                Le(n, r[a]);
              }
            } else Le(e, o);
          }
          return 0 < (r = De(o, "script")).length &&
            Ae(r, !l && De(e, "script")),
            r = s = n = null,
            o;
        },
        buildFragment: function (e, t, i, r) {
          for (
            var n, o, a, s, l, c, h, u = e.length, p = he(t), f = [], d = 0;
            d < u;
            d++
          ) {
            if ((o = e[d]) || 0 === o) {
              if ("object" === ge.type(o)) ge.merge(f, o.nodeType ? [o] : o);
              else if (ye.test(o)) {
                for (
                  s = s || p.appendChild(t.createElement("div")),
                    l = (Ee.exec(o) || ["", ""])[1].toLowerCase(),
                    h = _e[l] || _e._default,
                    s.innerHTML = h[1] + o.replace(me, "<$1></$2>") + h[2],
                    n = h[0];
                  n--;
                ) {
                  s = s.lastChild;
                }
                if (
                  !ge.support.leadingWhitespace && de.test(o) &&
                  f.push(t.createTextNode(de.exec(o)[0])), !ge.support.tbody
                ) {
                  for (
                    n = (o = "table" !== l || ve.test(o)
                      ? "<table>" !== h[1] || ve.test(o)
                        ? 0
                        : s
                      : s.firstChild) && o.childNodes.length;
                    n--;
                  ) {
                    ge.nodeName(c = o.childNodes[n], "tbody") &&
                      !c.childNodes.length && o.removeChild(c);
                  }
                }
                for (
                  ge.merge(f, s.childNodes), s.textContent = ""; s.firstChild;
                ) {
                  s.removeChild(s.firstChild);
                }
                s = p.lastChild;
              } else f.push(t.createTextNode(o));
            }
          }
          for (
            s && p.removeChild(s),
              ge.support.appendChecked || ge.grep(De(f, "input"), Fe),
              d = 0;
            o = f[d++];
          ) {
            if (
              (!r || -1 === ge.inArray(o, r)) &&
              (a = ge.contains(o.ownerDocument, o),
                s = De(p.appendChild(o), "script"),
                a && Ae(s),
                i)
            ) {
              for (n = 0; o = s[n++];) He.test(o.type || "") && i.push(o);
            }
          }
          return s = null, p;
        },
        cleanData: function (e, t) {
          for (
            var i,
              r,
              n,
              o,
              a = 0,
              s = ge.expando,
              l = ge.cache,
              c = ge.support.deleteExpando,
              h = ge.event.special;
            null != (i = e[a]);
            a++
          ) {
            if ((t || ge.acceptData(i)) && (o = (n = i[s]) && l[n])) {
              if (o.events) {
                for (r in o.events) {
                  h[r] ? ge.event.remove(i, r) : ge.removeEvent(i, r, o.handle);
                }
              }
              l[n] && (delete l[n],
                c
                  ? delete i[s]
                  : typeof i.removeAttribute !== g
                  ? i.removeAttribute(s)
                  : i[s] = null,
                u.push(n));
            }
          }
        },
      });
    var Ne,
      Ve,
      ze,
      Ue = /alpha\([^)]*\)/i,
      Be = /opacity\s*=\s*([^)]*)/,
      Oe = /^(top|right|bottom|left)$/,
      ke = /^(none|table(?!-c[ea]).+)/,
      Ie = /^margin/,
      je = RegExp("^(" + p + ")(.*)$", "i"),
      Ge = RegExp("^(" + p + ")(?!px)[a-z%]+$", "i"),
      We = RegExp("^([+-])=(" + p + ")", "i"),
      Xe = { BODY: "block" },
      qe = { position: "absolute", visibility: "hidden", display: "block" },
      Ye = { letterSpacing: 0, fontWeight: 400 },
      Ke = ["Top", "Right", "Bottom", "Left"],
      Qe = ["Webkit", "O", "Moz", "ms"];
    function Ze(e, t) {
      if (t in e) return t;
      for (
        var i = t.charAt(0).toUpperCase() + t.slice(1), r = t, n = Qe.length;
        n--;
      ) {
        if ((t = Qe[n] + i) in e) return t;
      }
      return r;
    }
    function $e(e, t) {
      return e = t || e,
        "none" === ge.css(e, "display") || !ge.contains(e.ownerDocument, e);
    }
    function Je(e, t) {
      for (var i, r, n, o = [], a = 0, s = e.length; a < s; a++) {
        (r = e[a]).style &&
          (o[a] = ge._data(r, "olddisplay"),
            i = r.style.display,
            t
              ? (o[a] || "none" !== i || (r.style.display = ""),
                "" === r.style.display && $e(r) &&
                (o[a] = ge._data(r, "olddisplay", rt(r.nodeName))))
              : o[a] ||
                (n = $e(r),
                  (i && "none" !== i || !n) &&
                  ge._data(r, "olddisplay", n ? i : ge.css(r, "display"))));
      }
      for (a = 0; a < s; a++) {
        (r = e[a]).style &&
          (t && "none" !== r.style.display && "" !== r.style.display ||
            (r.style.display = t ? o[a] || "" : "none"));
      }
      return e;
    }
    function et(e, t, i) {
      var r = je.exec(t);
      return r ? Math.max(0, r[1] - (i || 0)) + (r[2] || "px") : t;
    }
    function tt(e, t, i, r, n) {
      for (
        var o = i === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0,
          a = 0;
        o < 4;
        o += 2
      ) {
        "margin" === i && (a += ge.css(e, i + Ke[o], !0, n)),
          r
            ? ("content" === i && (a -= ge.css(e, "padding" + Ke[o], !0, n)),
              "margin" !== i &&
              (a -= ge.css(e, "border" + Ke[o] + "Width", !0, n)))
            : (a += ge.css(e, "padding" + Ke[o], !0, n),
              "padding" !== i &&
              (a += ge.css(e, "border" + Ke[o] + "Width", !0, n)));
      }
      return a;
    }
    function it(e, t, i) {
      var r = !0,
        n = "width" === t ? e.offsetWidth : e.offsetHeight,
        o = Ve(e),
        a = ge.support.boxSizing &&
          "border-box" === ge.css(e, "boxSizing", !1, o);
      if (n <= 0 || null == n) {
        if (
          ((n = ze(e, t, o)) < 0 || null == n) && (n = e.style[t]), Ge.test(n)
        ) {
          return n;
        }
        r = a && (ge.support.boxSizingReliable || n === e.style[t]),
          n = parseFloat(n) || 0;
      }
      return n + tt(e, t, i || (a ? "border" : "content"), r, o) + "px";
    }
    function rt(e) {
      var t = m, i = Xe[e];
      return i ||
        ("none" !== (i = nt(e, t)) && i ||
          ((t =
            ((Ne =
              (Ne ||
                ge("<iframe frameborder='0' width='0' height='0'/>").css(
                  "cssText",
                  "display:block !important",
                )).appendTo(t.documentElement))[0].contentWindow ||
              Ne[0].contentDocument).document).write(
              "<!doctype html><html><body>",
            ),
            t.close(),
            i = nt(e, t),
            Ne.detach()),
          Xe[e] = i),
        i;
    }
    function nt(e, t) {
      var i = ge(t.createElement(e)).appendTo(t.body),
        r = ge.css(i[0], "display");
      return i.remove(), r;
    }
    ge.fn.extend({
      css: function (e, t) {
        return ge.access(
          this,
          function (e, t, i) {
            var r, n, o = {}, a = 0;
            if (ge.isArray(t)) {
              for (n = Ve(e), r = t.length; a < r; a++) {
                o[t[a]] = ge.css(e, t[a], !1, n);
              }
              return o;
            }
            return i !== H ? ge.style(e, t, i) : ge.css(e, t);
          },
          e,
          t,
          1 < arguments.length,
        );
      },
      show: function () {
        return Je(this, !0);
      },
      hide: function () {
        return Je(this);
      },
      toggle: function (e) {
        var t = "boolean" == typeof e;
        return this.each(function () {
          (t ? e : $e(this)) ? ge(this).show() : ge(this).hide();
        });
      },
    }),
      ge.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var i = ze(e, "opacity");
                return "" === i
                  ? "1"
                  : i;
              }
            },
          },
        },
        cssNumber: {
          columnCount: !0,
          fillOpacity: !0,
          fontWeight: !0,
          lineHeight: !0,
          opacity: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {
          float: ge.support.cssFloat
            ? "cssFloat"
            : "styleFloat",
        },
        style: function (e, t, i, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var n, o, a, s = ge.camelCase(t), l = e.style;
            if (
              t = ge.cssProps[s] || (ge.cssProps[s] = Ze(l, s)),
                a = ge.cssHooks[t] || ge.cssHooks[s],
                i === H
            ) {
              return a && "get" in a && (n = a.get(e, !1, r)) !== H ? n : l[t];
            }
            if (
              "string" === (o = typeof i) && (n = We.exec(i)) &&
              (i = (n[1] + 1) * n[2] + parseFloat(ge.css(e, t)), o = "number"),
                !(null == i || "number" === o && isNaN(i) ||
                  ("number" !== o || ge.cssNumber[s] || (i += "px"),
                    ge.support.clearCloneStyle || "" !== i ||
                    0 !== t.indexOf("background") || (l[t] = "inherit"),
                    a && "set" in a && (i = a.set(e, i, r)) === H))
            ) {
              try {
                l[t] = i;
              } catch (e) {}
            }
          }
        },
        css: function (e, t, i, r) {
          var n, o, a, s = ge.camelCase(t);
          return t = ge.cssProps[s] || (ge.cssProps[s] = Ze(e.style, s)),
            (a = ge.cssHooks[t] || ge.cssHooks[s]) && "get" in a &&
            (o = a.get(e, !0, i)),
            o === H && (o = ze(e, t, r)),
            "normal" === o && t in Ye && (o = Ye[t]),
            "" === i || i
              ? (n = parseFloat(o),
                !0 === i || ge.isNumeric(n)
                  ? n || 0
                  : o)
              : o;
        },
        swap: function (e, t, i, r) {
          var n, o, a = {};
          for (o in t) a[o] = e.style[o], e.style[o] = t[o];
          for (o in n = i.apply(e, r || []), t) e.style[o] = a[o];
          return n;
        },
      }),
      d.getComputedStyle
        ? (Ve = function (e) {
          return d.getComputedStyle(e, null);
        },
          ze = function (e, t, i) {
            var r,
              n,
              o,
              a = i || Ve(e),
              s = a ? a.getPropertyValue(t) || a[t] : H,
              l = e.style;
            return a &&
              ("" !== s || ge.contains(e.ownerDocument, e) ||
                (s = ge.style(e, t)),
                Ge.test(s) && Ie.test(t) &&
                (r = l.width,
                  n = l.minWidth,
                  o = l.maxWidth,
                  l.minWidth = l.maxWidth = l.width = s,
                  s = a.width,
                  l.width = r,
                  l.minWidth = n,
                  l.maxWidth = o)),
              s;
          })
        : m.documentElement.currentStyle && (Ve = function (e) {
          return e.currentStyle;
        },
          ze = function (e, t, i) {
            var r, n, o, a = i || Ve(e), s = a ? a[t] : H, l = e.style;
            return null == s && l && l[t] && (s = l[t]),
              Ge.test(s) && !Oe.test(t) &&
              (r = l.left,
                (o = (n = e.runtimeStyle) && n.left) &&
                (n.left = e.currentStyle.left),
                l.left = "fontSize" === t
                  ? "1em"
                  : s,
                s = l.pixelLeft + "px",
                l.left = r,
                o && (n.left = o)),
              "" === s ? "auto" : s;
          }),
      ge.each(["height", "width"], function (e, n) {
        ge.cssHooks[n] = {
          get: function (e, t, i) {
            return t
              ? 0 === e.offsetWidth && ke.test(ge.css(e, "display"))
                ? ge.swap(e, qe, function () {
                  return it(e, n, i);
                })
                : it(e, n, i)
              : H;
          },
          set: function (e, t, i) {
            var r = i && Ve(e);
            return et(
              0,
              t,
              i
                ? tt(
                  e,
                  n,
                  i,
                  ge.support.boxSizing &&
                    "border-box" === ge.css(e, "boxSizing", !1, r),
                  r,
                )
                : 0,
            );
          },
        };
      }),
      ge.support.opacity || (ge.cssHooks.opacity = {
        get: function (e, t) {
          return Be.test(
              (t && e.currentStyle ? e.currentStyle.filter : e.style.filter) ||
                "",
            )
            ? .01 * parseFloat(RegExp.$1) + ""
            : t
            ? "1"
            : "";
        },
        set: function (e, t) {
          var i = e.style,
            r = e.currentStyle,
            n = ge.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
            o = r && r.filter || i.filter || "";
          ((i.zoom = 1) <= t || "" === t) &&
              "" === ge.trim(o.replace(Ue, "")) && i.removeAttribute &&
              (i.removeAttribute("filter"), "" === t || r && !r.filter) ||
            (i.filter = Ue.test(o) ? o.replace(Ue, n) : o + " " + n);
        },
      }),
      ge(function () {
        ge.support.reliableMarginRight ||
        (ge.cssHooks.marginRight = {
          get: function (e, t) {
            return t
              ? ge.swap(e, { display: "inline-block" }, ze, [e, "marginRight"])
              : H;
          },
        }),
          !ge.support.pixelPosition && ge.fn.position &&
          ge.each(["top", "left"], function (e, i) {
            ge.cssHooks[i] = {
              get: function (e, t) {
                return t
                  ? (t = ze(e, i),
                    Ge.test(t)
                      ? ge(e).position()[i] + "px"
                      : t)
                  : H;
              },
            };
          });
      }),
      ge.expr && ge.expr.filters && (ge.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 ||
          !ge.support.reliableHiddenOffsets &&
            "none" === (e.style && e.style.display || ge.css(e, "display"));
      },
        ge.expr.filters.visible = function (e) {
          return !ge.expr.filters.hidden(e);
        }),
      ge.each({ margin: "", padding: "", border: "Width" }, function (n, o) {
        ge.cssHooks[n + o] = {
          expand: function (e) {
            for (
              var t = 0, i = {}, r = "string" == typeof e ? e.split(" ") : [e];
              t < 4;
              t++
            ) {
              i[n + Ke[t] + o] = r[t] || r[t - 2] || r[0];
            }
            return i;
          },
        }, Ie.test(n) || (ge.cssHooks[n + o].set = et);
      });
    var ot = /%20/g,
      at = /\[\]$/,
      st = /\r?\n/g,
      lt = /^(?:submit|button|image|reset|file)$/i,
      ct = /^(?:input|select|textarea|keygen)/i;
    function ht(i, e, r, n) {
      var t;
      if (ge.isArray(e)) {
        ge.each(e, function (e, t) {
          r || at.test(i)
            ? n(i, t)
            : ht(i + "[" + ("object" == typeof t ? e : "") + "]", t, r, n);
        });
      } else if (r || "object" !== ge.type(e)) n(i, e);
      else for (t in e) ht(i + "[" + t + "]", e[t], r, n);
    }
    ge.fn.extend({
      serialize: function () {
        return ge.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = ge.prop(this, "elements");
          return e ? ge.makeArray(e) : this;
        }).filter(function () {
          var e = this.type;
          return this.name && !ge(this).is(":disabled") &&
            ct.test(this.nodeName) && !lt.test(e) &&
            (this.checked || !Re.test(e));
        }).map(function (e, t) {
          var i = ge(this).val();
          return null == i ? null : ge.isArray(i)
            ? ge.map(i, function (e) {
              return { name: t.name, value: e.replace(st, "\r\n") };
            })
            : { name: t.name, value: i.replace(st, "\r\n") };
        }).get();
      },
    }),
      ge.param = function (e, t) {
        var i,
          r = [],
          n = function (e, t) {
            t = ge.isFunction(t) ? t() : null == t
              ? ""
              : t,
              r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
          };
        if (
          t === H && (t = ge.ajaxSettings && ge.ajaxSettings.traditional),
            ge.isArray(e) || e.jquery && !ge.isPlainObject(e)
        ) {
          ge.each(e, function () {
            n(this.name, this.value);
          });
        } else for (i in e) ht(i, e[i], t, n);
        return r.join("&").replace(ot, "+");
      },
      ge.each(
        "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu"
          .split(" "),
        function (e, i) {
          ge.fn[i] = function (e, t) {
            return 0 < arguments.length ? this.on(i, null, e, t)
            : this.trigger(i);
          };
        },
      ),
      ge.fn.hover = function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      };
    var ut,
      pt,
      ft = ge.now(),
      dt = /\?/,
      mt = /#.*$/,
      Et = /([?&])_=[^&]*/,
      gt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      vt = /^(?:GET|HEAD)$/,
      yt = /^\/\//,
      Tt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      Rt = ge.fn.load,
      xt = {},
      Ht = {},
      bt = "*/".concat("*");
    try {
      pt = e.href;
    } catch (e) {
      (pt = m.createElement("a")).href = "", pt = pt.href;
    }
    function wt(o) {
      return function (e, t) {
        "string" != typeof e && (t = e, e = "*");
        var i, r = 0, n = e.toLowerCase().match(b) || [];
        if (ge.isFunction(t)) {
          for (; i = n[r++];) {
            "+" === i[0]
              ? (i = i.slice(1) || "*", (o[i] = o[i] || []).unshift(t))
              : (o[i] = o[i] || []).push(t);
          }
        }
      };
    }
    function _t(t, n, o, a) {
      var s = {}, l = t === Ht;
      function c(e) {
        var r;
        return s[e] = !0,
          ge.each(t[e] || [], function (e, t) {
            var i = t(n, o, a);
            return "string" != typeof i || l || s[i]
              ? l ? !(r = i) : H
              : (n.dataTypes.unshift(i), c(i), !1);
          }),
          r;
      }
      return c(n.dataTypes[0]) || !s["*"] && c("*");
    }
    function Mt(e, t) {
      var i, r, n = ge.ajaxSettings.flatOptions || {};
      for (r in t) t[r] !== H && ((n[r] ? e : i || (i = {}))[r] = t[r]);
      return i && ge.extend(!0, e, i), e;
    }
    ut = Tt.exec(pt.toLowerCase()) || [],
      ge.fn.load = function (e, t, i) {
        if ("string" != typeof e && Rt) return Rt.apply(this, arguments);
        var r, n, o, a = this, s = e.indexOf(" ");
        return 0 <= s && (r = e.slice(s, e.length), e = e.slice(0, s)),
          ge.isFunction(t)
            ? (i = t, t = H)
            : t && "object" == typeof t && (o = "POST"),
          0 < a.length &&
          ge.ajax({ url: e, type: o, dataType: "html", data: t }).done(
            function (e) {
              n = arguments,
                a.html(
                  r
                    ? ge("<div>").append(ge.parseHTML(e)).find(r)
                    : e,
                );
            },
          ).complete(
            i && function (e, t) {
              a.each(i, n || [e.responseText, t, e]);
            },
          ),
          this;
      },
      ge.each([
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ], function (e, t) {
        ge.fn[t] = function (e) {
          return this.on(t, e);
        };
      }),
      ge.each(["get", "post"], function (e, n) {
        ge[n] = function (e, t, i, r) {
          return ge.isFunction(t) && (r = r || i, i = t, t = H),
            ge.ajax({ url: e, type: n, dataType: r, data: t, success: i });
        };
      }),
      ge.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
          url: pt,
          type: "GET",
          isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
            .test(ut[1]),
          global: !0,
          processData: !0,
          async: !0,
          contentType: "application/x-www-form-urlencoded; charset=UTF-8",
          accepts: {
            "*": bt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript",
          },
          contents: { xml: /xml/, html: /html/, json: /json/ },
          responseFields: { xml: "responseXML", text: "responseText" },
          converters: {
            "* text": d.String,
            "text html": !0,
            "text json": ge.parseJSON,
            "text xml": ge.parseXML,
          },
          flatOptions: { url: !0, context: !0 },
        },
        ajaxSetup: function (e, t) {
          return t ? Mt(Mt(e, ge.ajaxSettings), t) : Mt(ge.ajaxSettings, e);
        },
        ajaxPrefilter: wt(xt),
        ajaxTransport: wt(Ht),
        ajax: function (e, t) {
          "object" == typeof e && (t = e, e = H), t = t || {};
          var i,
            r,
            h,
            u,
            p,
            f,
            d,
            n,
            m = ge.ajaxSetup({}, t),
            E = m.context || m,
            g = m.context && (E.nodeType || E.jquery) ? ge(E) : ge.event,
            v = ge.Deferred(),
            y = ge.Callbacks("once memory"),
            T = m.statusCode || {},
            o = {},
            a = {},
            R = 0,
            s = "canceled",
            x = {
              readyState: 0,
              getResponseHeader: function (e) {
                var t;
                if (2 === R) {
                  if (!n) {
                    for (n = {}; t = gt.exec(u);) {
                      n[t[1].toLowerCase()] = t[2];
                    }
                  }
                  t = n[e.toLowerCase()];
                }
                return null == t ? null : t;
              },
              getAllResponseHeaders: function () {
                return 2 === R ? u : null;
              },
              setRequestHeader: function (e, t) {
                var i = e.toLowerCase();
                return R || (e = a[i] = a[i] || e, o[e] = t), this;
              },
              overrideMimeType: function (e) {
                return R || (m.mimeType = e), this;
              },
              statusCode: function (e) {
                var t;
                if (e) {
                  if (R < 2) for (t in e) T[t] = [T[t], e[t]];
                  else x.always(e[x.status]);
                }
                return this;
              },
              abort: function (e) {
                var t = e || s;
                return d && d.abort(t), l(0, t), this;
              },
            };
          if (
            v.promise(x).complete = y.add,
              x.success = x.done,
              x.error = x.fail,
              m.url = ((e || m.url || pt) + "").replace(mt, "").replace(
                yt,
                ut[1] + "//",
              ),
              m.type = t.method || t.type || m.method || m.type,
              m.dataTypes = ge.trim(m.dataType || "*").toLowerCase().match(b) ||
                [""],
              null == m.crossDomain &&
              (i = Tt.exec(m.url.toLowerCase()),
                m.crossDomain =
                  !(!i ||
                    i[1] === ut[1] && i[2] === ut[2] &&
                      (i[3] || ("http:" === i[1] ? 80 : 443)) ==
                        (ut[3] || ("http:" === ut[1] ? 80 : 443)))),
              m.data && m.processData && "string" != typeof m.data &&
              (m.data = ge.param(m.data, m.traditional)),
              _t(xt, m, t, x),
              2 === R
          ) {
            return x;
          }
          for (
            r
              in (f = m.global) && 0 == ge.active++ &&
                ge.event.trigger("ajaxStart"),
                m.type = m.type.toUpperCase(),
                m.hasContent = !vt.test(m.type),
                h = m.url,
                m.hasContent ||
                (m.data && (h = m.url += (dt.test(h)
                  ? "&"
                  : "?") + m.data,
                  delete m.data),
                  !1 === m.cache && (m.url = Et.test(h)
                    ? h.replace(Et, "$1_=" + ft++)
                    : h + (dt.test(h)
                      ? "&"
                      : "?") + "_=" + ft++)),
                m.ifModified &&
                (ge.lastModified[h] &&
                  x.setRequestHeader("If-Modified-Since", ge.lastModified[h]),
                  ge.etag[h] &&
                  x.setRequestHeader("If-None-Match", ge.etag[h])),
                (m.data && m.hasContent && !1 !== m.contentType ||
                  t.contentType) &&
                x.setRequestHeader("Content-Type", m.contentType),
                x.setRequestHeader(
                  "Accept",
                  m.dataTypes[0] && m.accepts[m.dataTypes[0]]
                    ? m.accepts[m.dataTypes[0]] +
                      ("*" !== m.dataTypes[0] ? ", " + bt + "; q=0.01" : "")
                    : m.accepts["*"],
                ),
                m.headers
          ) {
            x.setRequestHeader(r, m.headers[r]);
          }
          if (
            m.beforeSend && (!1 === m.beforeSend.call(E, x, m) || 2 === R)
          ) {
            return x.abort();
          }
          for (r in s = "abort", { success: 1, error: 1, complete: 1 }) {
            x[r](m[r]);
          }
          if (d = _t(Ht, m, t, x)) {
            x.readyState = 1,
              f && g.trigger("ajaxSend", [x, m]),
              m.async && 0 < m.timeout && (p = setTimeout(function () {
                x.abort("timeout");
              }, m.timeout));
            try {
              R = 1, d.send(o, l);
            } catch (e) {
              if (!(R < 2)) throw e;
              l(-1, e);
            }
          } else l(-1, "No Transport");
          function l(e, t, i, r) {
            var n, o, a, s, l, c = t;
            2 !== R &&
              (R = 2,
                p && clearTimeout(p),
                d = H,
                u = r || "",
                x.readyState = 0 < e ? 4 : 0,
                i && (s = function (e, t, i) {
                  var r,
                    n,
                    o,
                    a,
                    s = e.contents,
                    l = e.dataTypes,
                    c = e.responseFields;
                  for (a in c) a in i && (t[c[a]] = i[a]);
                  for (; "*" === l[0];) {
                    l.shift(),
                      n === H &&
                      (n = e.mimeType || t.getResponseHeader("Content-Type"));
                  }
                  if (n) {
                    for (a in s) {
                      if (s[a] && s[a].test(n)) {
                        l.unshift(a);
                        break;
                      }
                    }
                  }
                  if (l[0] in i) o = l[0];
                  else {
                    for (a in i) {
                      if (!l[0] || e.converters[a + " " + l[0]]) {
                        o = a;
                        break;
                      }
                      r || (r = a);
                    }
                    o = o || r;
                  }
                  return o ? (o !== l[0] && l.unshift(o), i[o]) : H;
                }(m, x, i)),
                200 <= e && e < 300 || 304 === e
                  ? (m.ifModified &&
                    ((l = x.getResponseHeader("Last-Modified")) &&
                      (ge.lastModified[h] = l),
                      (l = x.getResponseHeader("etag")) && (ge.etag[h] = l)),
                    204 === e
                      ? (n = !0, c = "nocontent")
                      : 304 === e
                      ? (n = !0, c = "notmodified")
                      : (c = (n = function (e, t) {
                        var i,
                          r,
                          n,
                          o,
                          a = {},
                          s = 0,
                          l = e.dataTypes.slice(),
                          c = l[0];
                        if (
                          e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                            l[1]
                        ) {
                          for (n in e.converters) {
                            a[n.toLowerCase()] = e.converters[n];
                          }
                        }
                        for (; r = l[++s];) {
                          if ("*" !== r) {
                            if ("*" !== c && c !== r) {
                              if (!(n = a[c + " " + r] || a["* " + r])) {
                                for (i in a) {
                                  if (
                                    (o = i.split(" "))[1] === r &&
                                    (n = a[c + " " + o[0]] || a["* " + o[0]])
                                  ) {
                                    !0 === n
                                      ? n = a[i]
                                      : !0 !== a[i] &&
                                        (r = o[0], l.splice(s--, 0, r));
                                    break;
                                  }
                                }
                              }
                              if (!0 !== n) {
                                if (n && e.throws) t = n(t);
                                else {
                                  try {
                                    t = n(t);
                                  } catch (e) {
                                    return {
                                      state: "parsererror",
                                      error: n
                                        ? e
                                        : "No conversion from " + c + " to " +
                                          r,
                                    };
                                  }
                                }
                              }
                            }
                            c = r;
                          }
                        }
                        return { state: "success", data: t };
                      }(m, s)).state,
                        o = n.data,
                        n = !(a = n.error)))
                  : (a = c, (e || !c) && (c = "error", e < 0 && (e = 0))),
                x.status = e,
                x.statusText = (t || c) + "",
                n ? v.resolveWith(E, [o, c, x]) : v.rejectWith(E, [x, c, a]),
                x.statusCode(T),
                T = H,
                f && g.trigger(n ? "ajaxSuccess" : "ajaxError", [
                  x,
                  m,
                  n ? o : a,
                ]),
                y.fireWith(E, [x, c]),
                f &&
                (g.trigger("ajaxComplete", [x, m]),
                  --ge.active || ge.event.trigger("ajaxStop")));
          }
          return x;
        },
        getScript: function (e, t) {
          return ge.get(e, H, t, "script");
        },
        getJSON: function (e, t, i) {
          return ge.get(e, t, i, "json");
        },
      }),
      ge.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /(?:java|ecma)script/ },
        converters: {
          "text script": function (e) {
            return ge.globalEval(e), e;
          },
        },
      }),
      ge.ajaxPrefilter("script", function (e) {
        e.cache === H && (e.cache = !1),
          e.crossDomain && (e.type = "GET", e.global = !1);
      }),
      ge.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
          var r, n = m.head || ge("head")[0] || m.documentElement;
          return {
            send: function (e, i) {
              (r = m.createElement("script")).async = !0,
                t.scriptCharset && (r.charset = t.scriptCharset),
                r.src = t.url,
                r.onload = r.onreadystatechange = function (e, t) {
                  (t || !r.readyState ||
                    /loaded|complete/.test(r.readyState)) &&
                    (r.onload = r.onreadystatechange = null,
                      r.parentNode && r.parentNode.removeChild(r),
                      r = null,
                      t || i(200, "success"));
                },
                n.insertBefore(r, n.firstChild);
            },
            abort: function () {
              r && r.onload(H, !0);
            },
          };
        }
      });
    var St = [], Ct = /(=)\?(?=&|$)|\?\?/;
    ge.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var e = St.pop() || ge.expando + "_" + ft++;
        return this[e] = !0, e;
      },
    }),
      ge.ajaxPrefilter("json jsonp", function (e, t, i) {
        var r,
          n,
          o,
          a = !1 !== e.jsonp &&
            (Ct.test(e.url)
              ? "url"
              : "string" == typeof e.data &&
                !(e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded",
                ) && Ct.test(e.data) && "data");
        return a || "jsonp" === e.dataTypes[0]
          ? (r = e.jsonpCallback = ge.isFunction(e.jsonpCallback)
            ? e.jsonpCallback()
            : e.jsonpCallback,
            a
              ? e[a] = e[a].replace(Ct, "$1" + r)
              : !1 !== e.jsonp &&
                (e.url += (dt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
            e.converters["script json"] = function () {
              return o || ge.error(r + " was not called"), o[0];
            },
            e.dataTypes[0] = "json",
            n = d[r],
            d[r] = function () {
              o = arguments;
            },
            i.always(function () {
              d[r] = n,
                e[r] && (e.jsonpCallback = t.jsonpCallback, St.push(r)),
                o && ge.isFunction(n) && n(o[0]),
                o = n = H;
            }),
            "script")
          : H;
      });
    var At,
      Lt,
      Pt = 0,
      Dt = d.ActiveXObject && function () {
        var e;
        for (e in At) At[e](H, !0);
      };
    function Ft() {
      try {
        return new d.XMLHttpRequest();
      } catch (e) {}
    }
    ge.ajaxSettings.xhr = d.ActiveXObject
      ? function () {
        return !this.isLocal && Ft() || function () {
          try {
            return new d.ActiveXObject("Microsoft.XMLHTTP");
          } catch (e) {}
        }();
      }
      : Ft,
      Lt = ge.ajaxSettings.xhr(),
      ge.support.cors = !!Lt && "withCredentials" in Lt,
      (Lt = ge.support.ajax = !!Lt) && ge.ajaxTransport(function (c) {
        var h;
        if (!c.crossDomain || ge.support.cors) {
          return {
            send: function (e, a) {
              var s, t, l = c.xhr();
              if (
                c.username
                  ? l.open(c.type, c.url, c.async, c.username, c.password)
                  : l.open(c.type, c.url, c.async), c.xhrFields
              ) {
                for (t in c.xhrFields) l[t] = c.xhrFields[t];
              }
              c.mimeType && l.overrideMimeType &&
              l.overrideMimeType(c.mimeType),
                c.crossDomain || e["X-Requested-With"] ||
                (e["X-Requested-With"] = "XMLHttpRequest");
              try {
                for (t in e) l.setRequestHeader(t, e[t]);
              } catch (e) {}
              l.send(c.hasContent && c.data || null),
                h = function (e, t) {
                  var i, r, n, o;
                  try {
                    if (h && (t || 4 === l.readyState)) {
                      if (
                        h = H,
                          s &&
                          (l.onreadystatechange = ge.noop, Dt && delete At[s]),
                          t
                      ) {
                        4 !== l.readyState && l.abort();
                      } else {
                        o = {},
                          i = l.status,
                          r = l.getAllResponseHeaders(),
                          "string" == typeof l.responseText &&
                          (o.text = l.responseText);
                        try {
                          n = l.statusText;
                        } catch (e) {
                          n = "";
                        }
                        i || !c.isLocal || c.crossDomain
                          ? 1223 === i && (i = 204)
                          : i = o.text
                            ? 200
                            : 404;
                      }
                    }
                  } catch (e) {
                    t || a(-1, e);
                  }
                  o && a(i, n, o, r);
                },
                c.async
                  ? 4 === l.readyState
                    ? setTimeout(h)
                    : (s = ++Pt,
                      Dt && (At || (At = {}, ge(d).unload(Dt)), At[s] = h),
                      l.onreadystatechange = h)
                  : h();
            },
            abort: function () {
              h && h(H, !0);
            },
          };
        }
      });
    var Nt,
      Vt,
      zt = /^(?:toggle|show|hide)$/,
      Ut = RegExp("^(?:([+-])=|)(" + p + ")([a-z%]*)$", "i"),
      Bt = /queueHooks$/,
      Ot = [function (t, e, i) {
        var r,
          n,
          o,
          a,
          s,
          l,
          c,
          h,
          u,
          p = this,
          f = t.style,
          d = {},
          m = [],
          E = t.nodeType && $e(t);
        for (
          n
            in i.queue ||
              (null == (h = ge._queueHooks(t, "fx")).unqueued &&
                (h.unqueued = 0,
                  u = h.empty.fire,
                  h.empty.fire = function () {
                    h.unqueued || u();
                  }),
                h.unqueued++,
                p.always(function () {
                  p.always(function () {
                    h.unqueued--, ge.queue(t, "fx").length || h.empty.fire();
                  });
                })),
              1 === t.nodeType && ("height" in e || "width" in e) &&
              (i.overflow = [f.overflow, f.overflowX, f.overflowY],
                "inline" === ge.css(t, "display") &&
                "none" === ge.css(t, "float") &&
                (ge.support.inlineBlockNeedsLayout &&
                    "inline" !== rt(t.nodeName)
                  ? f.zoom = 1
                  : f.display = "inline-block")),
              i.overflow &&
              (f.overflow = "hidden",
                ge.support.shrinkWrapBlocks || p.always(function () {
                  f.overflow = i.overflow[0],
                    f.overflowX = i.overflow[1],
                    f.overflowY = i.overflow[2];
                })),
              e
        ) {
          if (a = e[n], zt.exec(a)) {
            if (
              delete e[n],
                l = l || "toggle" === a,
                a === (E ? "hide" : "show")
            ) {
              continue;
            }
            m.push(n);
          }
        }
        if (o = m.length) {
          "hidden" in
            (s = ge._data(t, "fxshow") || ge._data(t, "fxshow", {})) &&
          (E = s.hidden),
            l && (s.hidden = !E),
            E ? ge(t).show() : p.done(function () {
              ge(t).hide();
            }),
            p.done(function () {
              var e;
              for (e in ge._removeData(t, "fxshow"), d) ge.style(t, e, d[e]);
            });
          for (n = 0; n < o; n++) {
            r = m[n],
              c = p.createTween(r, E ? s[r] : 0),
              d[r] = s[r] || ge.style(t, r),
              r in s ||
              (s[r] = c.start,
                E && (c.end = c.start,
                  c.start = "width" === r || "height" === r
                    ? 1
                    : 0));
          }
        }
      }],
      kt = {
        "*": [function (e, t) {
          var i,
            r,
            n = this.createTween(e, t),
            o = Ut.exec(t),
            a = n.cur(),
            s = +a || 0,
            l = 1,
            c = 20;
          if (o) {
            if (
              i = +o[2],
                "px" !== (r = o[3] || (ge.cssNumber[e] ? "" : "px")) && s
            ) {
              for (
                s = ge.css(n.elem, e, !0) || i || 1;
                s /= l = l || ".5",
                  ge.style(n.elem, e, s + r),
                  l !== (l = n.cur() / a) && 1 !== l && --c;
              );
            }
            n.unit = r, n.start = s, n.end = o[1] ? s + (o[1] + 1) * i : i;
          }
          return n;
        }],
      };
    function It() {
      return setTimeout(function () {
        Nt = H;
      }),
        Nt = ge.now();
    }
    function jt(o, e, t) {
      var i,
        a,
        s,
        r,
        n = 0,
        l = Ot.length,
        c = ge.Deferred().always(function () {
          delete h.elem;
        }),
        h = function () {
          if (a) return !1;
          for (
            var e = Nt || It(),
              t = Math.max(0, u.startTime + u.duration - e),
              i = 1 - (t / u.duration || 0),
              r = 0,
              n = u.tweens.length;
            r < n;
            r++
          ) {
            u.tweens[r].run(i);
          }
          return c.notifyWith(o, [u, i, t]),
            i < 1 && n ? t : (c.resolveWith(o, [u]), !1);
        },
        u = c.promise({
          elem: o,
          props: ge.extend({}, e),
          opts: ge.extend(!0, { specialEasing: {} }, t),
          originalProperties: e,
          originalOptions: t,
          startTime: Nt || It(),
          duration: t.duration,
          tweens: [],
          createTween: function (e, t) {
            var i = ge.Tween(
              o,
              u.opts,
              e,
              t,
              u.opts.specialEasing[e] || u.opts.easing,
            );
            return u.tweens.push(i), i;
          },
          stop: function (e) {
            var t = 0, i = e ? u.tweens.length : 0;
            if (a) return this;
            for (a = !0; t < i; t++) u.tweens[t].run(1);
            return e ? c.resolveWith(o, [u, e]) : c.rejectWith(o, [u, e]), this;
          },
        }),
        p = u.props;
      for (
        function (e, t) {
          var i, r, n, o, a;
          for (n in e) {
            if (
              r = ge.camelCase(n),
                o = t[r],
                i = e[n],
                ge.isArray(i) && (o = i[1], i = e[n] = i[0]),
                n !== r && (e[r] = i, delete e[n]),
                (a = ge.cssHooks[r]) && "expand" in a
            ) {
              for (n in i = a.expand(i), delete e[r], i) {
                n in e || (e[n] = i[n], t[n] = o);
              }
            } else t[r] = o;
          }
        }(p, u.opts.specialEasing);
        n < l;
        n++
      ) {
        if (i = Ot[n].call(u, o, p, u.opts)) return i;
      }
      return s = u,
        r = p,
        ge.each(r, function (e, t) {
          for (
            var i = (kt[e] || []).concat(kt["*"]), r = 0, n = i.length;
            r < n;
            r++
          ) {
            if (i[r].call(s, e, t)) return;
          }
        }),
        ge.isFunction(u.opts.start) && u.opts.start.call(o, u),
        ge.fx.timer(ge.extend(h, { elem: o, anim: u, queue: u.opts.queue })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(
          u.opts.fail,
        ).always(u.opts.always);
    }
    function Gt(e, t, i, r, n) {
      return new Gt.prototype.init(e, t, i, r, n);
    }
    function Wt(e, t) {
      var i, r = { height: e }, n = 0;
      for (t = t ? 1 : 0; n < 4; n += 2 - t) {
        r["margin" + (i = Ke[n])] = r["padding" + i] = e;
      }
      return t && (r.opacity = r.width = e), r;
    }
    function Xt(e) {
      return ge.isWindow(e) ? e
      : 9 === e.nodeType && (e.defaultView || e.parentWindow);
    }
    ge.Animation = ge.extend(jt, {
      tweener: function (e, t) {
        ge.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
        for (var i, r = 0, n = e.length; r < n; r++) {
          i = e[r], kt[i] = kt[i] || [], kt[i].unshift(t);
        }
      },
      prefilter: function (e, t) {
        t ? Ot.unshift(e) : Ot.push(e);
      },
    }),
      ((ge.Tween = Gt).prototype = {
        constructor: Gt,
        init: function (e, t, i, r, n, o) {
          this.elem = e,
            this.prop = i,
            this.easing = n || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (ge.cssNumber[i] ? "" : "px");
        },
        cur: function () {
          var e = Gt.propHooks[this.prop];
          return e && e.get ? e.get(this) : Gt.propHooks._default.get(this);
        },
        run: function (e) {
          var t, i = Gt.propHooks[this.prop];
          return this.pos = t = this.options.duration
            ? ge.easing[this.easing](
              e,
              this.options.duration * e,
              0,
              1,
              this.options.duration,
            )
            : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step &&
            this.options.step.call(this.elem, this.now, this),
            i && i.set ? i.set(this) : Gt.propHooks._default.set(this),
            this;
        },
      }).init.prototype = Gt.prototype,
      (Gt.propHooks = {
        _default: {
          get: function (e) {
            var t;
            return null == e.elem[e.prop] ||
                e.elem.style && null != e.elem.style[e.prop]
              ? (t = ge.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
              : e.elem[e.prop];
          },
          set: function (e) {
            ge.fx.step[e.prop]
              ? ge.fx.step[e.prop](e)
              : e.elem.style &&
                  (null != e.elem.style[ge.cssProps[e.prop]] ||
                    ge.cssHooks[e.prop])
              ? ge.style(e.elem, e.prop, e.now + e.unit)
              : e.elem[e.prop] = e.now;
          },
        },
      }).scrollTop = Gt.propHooks.scrollLeft = {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      },
      ge.each(["toggle", "show", "hide"], function (e, r) {
        var n = ge.fn[r];
        ge.fn[r] = function (e, t, i) {
          return null == e || "boolean" == typeof e
            ? n.apply(this, arguments)
            : this.animate(Wt(r, !0), e, t, i);
        };
      }),
      ge.fn.extend({
        fadeTo: function (e, t, i, r) {
          return this.filter($e).css("opacity", 0).show().end().animate(
            { opacity: t },
            e,
            i,
            r,
          );
        },
        animate: function (t, e, i, r) {
          var n = ge.isEmptyObject(t),
            o = ge.speed(e, i, r),
            a = function () {
              var e = jt(this, ge.extend({}, t), o);
              a.finish = function () {
                e.stop(!0);
              }, (n || ge._data(this, "finish")) && e.stop(!0);
            };
          return a.finish = a,
            n || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        },
        stop: function (n, e, o) {
          var a = function (e) {
            var t = e.stop;
            delete e.stop, t(o);
          };
          return "string" != typeof n && (o = e, e = n, n = H),
            e && !1 !== n && this.queue(n || "fx", []),
            this.each(function () {
              var e = !0,
                t = null != n && n + "queueHooks",
                i = ge.timers,
                r = ge._data(this);
              if (t) r[t] && r[t].stop && a(r[t]);
              else for (t in r) r[t] && r[t].stop && Bt.test(t) && a(r[t]);
              for (t = i.length; t--;) {
                i[t].elem !== this || null != n && i[t].queue !== n ||
                  (i[t].anim.stop(o), e = !1, i.splice(t, 1));
              }
              (e || !o) && ge.dequeue(this, n);
            });
        },
        finish: function (a) {
          return !1 !== a && (a = a || "fx"),
            this.each(function () {
              var e,
                t = ge._data(this),
                i = t[a + "queue"],
                r = t[a + "queueHooks"],
                n = ge.timers,
                o = i ? i.length : 0;
              for (
                t.finish = !0,
                  ge.queue(this, a, []),
                  r && r.cur && r.cur.finish && r.cur.finish.call(this),
                  e = n.length;
                e--;
              ) {
                n[e].elem === this && n[e].queue === a &&
                  (n[e].anim.stop(!0), n.splice(e, 1));
              }
              for (e = 0; e < o; e++) {
                i[e] && i[e].finish && i[e].finish.call(this);
              }
              delete t.finish;
            });
        },
      }),
      ge.each({
        slideDown: Wt("show"),
        slideUp: Wt("hide"),
        slideToggle: Wt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      }, function (e, r) {
        ge.fn[e] = function (e, t, i) {
          return this.animate(r, e, t, i);
        };
      }),
      ge.speed = function (e, t, i) {
        var r = e && "object" == typeof e ? ge.extend({}, e)
        : {
          complete: i || !i && t || ge.isFunction(e) && e,
          duration: e,
          easing: i && t || t && !ge.isFunction(t) && t,
        };
        return r.duration = ge.fx.off
          ? 0
          : "number" == typeof r.duration
          ? r.duration
          : r.duration in ge.fx.speeds
          ? ge.fx.speeds[r.duration]
          : ge.fx.speeds._default,
          (null == r.queue || !0 === r.queue) && (r.queue = "fx"),
          r.old = r.complete,
          r.complete = function () {
            ge.isFunction(r.old) && r.old.call(this),
              r.queue && ge.dequeue(this, r.queue);
          },
          r;
      },
      ge.easing = {
        linear: function (e) {
          return e;
        },
        swing: function (e) {
          return .5 - Math.cos(e * Math.PI) / 2;
        },
      },
      ge.timers = [],
      ge.fx = Gt.prototype.init,
      ge.fx.tick = function () {
        var e, t = ge.timers, i = 0;
        for (Nt = ge.now(); t.length > i; i++) {
          (e = t[i])() || t[i] !== e || t.splice(i--, 1);
        }
        t.length || ge.fx.stop(), Nt = H;
      },
      ge.fx.timer = function (e) {
        e() && ge.timers.push(e) && ge.fx.start();
      },
      ge.fx.interval = 13,
      ge.fx.start = function () {
        Vt || (Vt = setInterval(ge.fx.tick, ge.fx.interval));
      },
      ge.fx.stop = function () {
        clearInterval(Vt), Vt = null;
      },
      ge.fx.speeds = { slow: 600, fast: 200, _default: 400 },
      ge.fx.step = {},
      ge.expr && ge.expr.filters && (ge.expr.filters.animated = function (t) {
        return ge.grep(ge.timers, function (e) {
          return t === e.elem;
        }).length;
      }),
      ge.fn.offset = function (t) {
        if (arguments.length) {
          return t === H ? this : this.each(function (e) {
            ge.offset.setOffset(this, t, e);
          });
        }
        var e,
          i,
          r = { top: 0, left: 0 },
          n = this[0],
          o = n && n.ownerDocument;
        return o
          ? (e = o.documentElement,
            ge.contains(e, n)
              ? (typeof n.getBoundingClientRect !== g &&
                (r = n.getBoundingClientRect()),
                i = Xt(o),
                {
                  top: r.top + (i.pageYOffset || e.scrollTop) -
                    (e.clientTop || 0),
                  left: r.left + (i.pageXOffset || e.scrollLeft) -
                    (e.clientLeft || 0),
                })
              : r) : void 0;
      },
      ge.offset = {
        setOffset: function (e, t, i) {
          var r = ge.css(e, "position");
          "static" === r && (e.style.position = "relative");
          var n,
            o,
            a = ge(e),
            s = a.offset(),
            l = ge.css(e, "top"),
            c = ge.css(e, "left"),
            h = {},
            u = {};
          ("absolute" === r || "fixed" === r) && -1 < ge.inArray("auto", [l, c])
            ? (n = (u = a.position()).top, o = u.left)
            : (n = parseFloat(l) || 0, o = parseFloat(c) || 0),
            ge.isFunction(t) && (t = t.call(e, i, s)),
            null != t.top && (h.top = t.top - s.top + n),
            null != t.left && (h.left = t.left - s.left + o),
            "using" in t ? t.using.call(e, h) : a.css(h);
        },
      },
      ge.fn.extend({
        position: function () {
          if (this[0]) {
            var e, t, i = { top: 0, left: 0 }, r = this[0];
            return "fixed" === ge.css(r, "position")
              ? t = r.getBoundingClientRect()
              : (e = this.offsetParent(),
                t = this.offset(),
                ge.nodeName(e[0], "html") || (i = e.offset()),
                i.top += ge.css(e[0], "borderTopWidth", !0),
                i.left += ge.css(e[0], "borderLeftWidth", !0)),
              {
                top: t.top - i.top - ge.css(r, "marginTop", !0),
                left: t.left - i.left - ge.css(r, "marginLeft", !0),
              };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var e = this.offsetParent || m.documentElement;
              e && !ge.nodeName(e, "html") &&
              "static" === ge.css(e, "position");
            ) {
              e = e.offsetParent;
            }
            return e || m.documentElement;
          });
        },
      }),
      ge.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (t, n) {
          var o = /Y/.test(n);
          ge.fn[t] = function (e) {
            return ge.access(
              this,
              function (e, t, i) {
                var r = Xt(e);
                return i === H
                  ? r ? n in r ? r[n] : r.document.documentElement[t] : e[t]
                  : (r
                    ? r.scrollTo(
                      o
                        ? ge(r).scrollLeft()
                        : i,
                      o ? i : ge(r).scrollTop(),
                    )
                    : e[t] = i,
                    H);
              },
              t,
              e,
              arguments.length,
              null,
            );
          };
        },
      ),
      ge.each({ Height: "height", Width: "width" }, function (o, a) {
        ge.each(
          { padding: "inner" + o, content: a, "": "outer" + o },
          function (r, e) {
            ge.fn[e] = function (e, t) {
              var i = arguments.length && (r || "boolean" != typeof e),
                n = r || (!0 === e || !0 === t ? "margin" : "border");
              return ge.access(
                this,
                function (e, t, i) {
                  var r;
                  return ge.isWindow(e)
                    ? e.document.documentElement["client" + o]
                    : 9 === e.nodeType
                    ? (r = e.documentElement,
                      Math.max(
                        e.body["scroll" + o],
                        r["scroll" + o],
                        e.body["offset" + o],
                        r["offset" + o],
                        r["client" + o],
                      ))
                    : i === H
                    ? ge.css(e, t, n)
                    : ge.style(e, t, i, n);
                },
                a,
                i ? e : H,
                i,
                null,
              );
            };
          },
        );
      }),
      d.jQuery = d.$ = ge,
      "function" == typeof define && define.amd && define.amd.jQuery &&
      define("jquery", [], function () {
        return ge;
      });
  }(window),
  "function" != typeof Object.create && (Object.create = function (e, t) {
    "use strict";
    var i;
    function r() {}
    if (r.prototype = e, void 0 !== t) {
      for (i in t) t.hasOwnProperty(i) && (r[i] = t[i].value);
    }
    return new r();
  }),
  function () {
    "use strict";
    function h(e, t) {
      return Math.floor(Math.random() * (t - e + 1) + e);
    }
    function i(t, i, r, n) {
      var o = -1, a = !1, s = -1;
      return {
        nextChar: function () {
          if (o >= t.length - 1) {
            if (-1 === s) return null;
            a = !0;
          }
          if (!a) {
            if (o++, a = -1 !== s && o % n == 0, h(0, 100) > r) {
              var e = function e(t, i) {
                var r, n, o, a, s, l, c;
                for (r = 0; r < i.length; r++) {
                  for (n = 0; n < i[r].length; n++) {
                    if (i[r][n].toLowerCase() === t) {
                      return ((a = r + (l = h(-1, 1))) >= i.length || a < 0) &&
                        (a += -2 * l),
                        n >= i[a].length && (n = i[a].length - 1),
                        ((o = n +
                              (l = 0 === l ? [-1, 1][h(0, 1)] : h(-1, 1))) >=
                            i[a].length || o < 0) && (o += -2 * l),
                        "" ===
                            (s = (c = t) === c.toLowerCase()
                              ? i[a][o].toLowerCase()
                              : i[a][o])
                          ? e(t, i)
                          : s;
                    }
                  }
                }
                return null;
              }(t.charAt(o), i);
              return null === e ? t.charAt(o)
              : (-1 === s && (s = o, a = 1 === h(0, 1)), e);
            }
            return t.charAt(o);
          }
          return s <= o ? (o--, "\b") : (a = !1, s = -1, t.charAt(++o));
        },
      };
    }
    RealisticTypewriter.super_ = Object,
      RealisticTypewriter.prototype = Object.create(Object.prototype, {
        constructor: { value: RealisticTypewriter, enumerable: !1 },
        minimumCharactersPerSecond: { value: 20, enumerable: !1 },
        maximumCharactersPerSecond: { value: 30, enumerable: !1 },
        minimumInitialDelay: { value: 500, enumerable: !1 },
        maximumInitialDelay: { value: 1e3, enumerable: !1 },
        accuracy: { value: 99, enumerable: !1 },
        keyboardLayout: {
          value: [
            ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
            [
              "",
              "Q",
              "W",
              "E",
              "R",
              "T",
              "Y",
              "U",
              "I",
              "O",
              "P",
              "[",
              "]",
              "\\",
            ],
            ["", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'"],
            ["", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/"],
          ],
          enumerable: !1,
        },
      }),
      RealisticTypewriter.prototype.type = function (e, n, o) {
        var a = this,
          t =
            (this.maximumCharactersPerSecond +
              this.minimumCharactersPerSecond) / 2,
          s = i(e, this.keyboardLayout, this.accuracy, t).nextChar;
        if (void 0 !== e && 0 !== e.length) {
          if (
            void 0 === n.removeChild || void 0 === n.lastChild ||
            void 0 === n.appendChild
          ) {
            throw "Invalid DOMElement!";
          }
          if (void 0 === document) throw "Can't find document object!";
          setTimeout(function () {
            !function t() {
              var i, e, r;
              i = function (e) {
                e
                  ? void 0 !== o && "function" == typeof o && o()
                  : setTimeout(t, 0);
              },
                e = h(
                  1e3 / a.minimumCharactersPerSecond,
                  1e3 / a.maximumCharactersPerSecond,
                ),
                null !== (r = s())
                  ? setTimeout(function () {
                    if ("\b" === r) n.removeChild(n.lastChild);
                    else {
                      var e = document.createElement("span");
                      e.className = "letra",
                        e.innerHTML = " " === r
                          ? "&nbsp;"
                          : r,
                        n.appendChild(e);
                    }
                    i(!1);
                  }, e)
                  : i(!0);
            }();
          }, h(a.minimumInitialDelay, a.maximumInitialDelay));
        }
      };
  }(),
  jQuery(document).ready(function (i) {
    var r = [
        "I am a frontend developer,",
        "a web artist",
        "in love with minimalism.",
        "My thoughts are on twitter,",
        "and my works on .",
        "How can I help you?",
        "Some of my work:   ",
      ],
      n = document.getElementById("text"),
      o = (document.getElementById("githubLink"), new RealisticTypewriter());
    o.accuracy = 94,
      o.minimumCharactersPerSecond = 5,
      o.maximumCharactersPerSecond = 10,
      o.minimumInitialDelay = 500,
      o.maximumInitialDelay = 1200;
    jQuery(".letra");
    !function e(t) {
      o.type(r[t], n, function () {
        t < r.length - 1
          ? setTimeout(function () {
            t++, document.getElementById("text").innerHTML = "", e(t);
          }, 1e3)
          : i("#portfolio, .email").delay(1500).fadeIn(500);
      });
    }(0);
  }),
  THREE.TrackballControls = function (e, t) {
    var o = this,
      r = {
        NONE: -1,
        ROTATE: 0,
        ZOOM: 1,
        PAN: 2,
        TOUCH_ROTATE: 3,
        TOUCH_ZOOM: 4,
        TOUCH_PAN: 5,
      };
    this.object = e,
      this.domElement = void 0 !== t ? t : document,
      this.enabled = !0,
      this.screen = { left: 0, top: 0, width: 0, height: 0 },
      this.rotateSpeed = 1,
      this.zoomSpeed = 1.2,
      this.panSpeed = .3,
      this.noRotate = !1,
      this.noZoom = !1,
      this.noPan = !1,
      this.noRoll = !1,
      this.staticMoving = !1,
      this.dynamicDampingFactor = .2,
      this.minDistance = 0,
      this.maxDistance = 1 / 0,
      this.keys = [65, 83, 68],
      this.target = new THREE.Vector3();
    var i = new THREE.Vector3(),
      n = r.NONE,
      a = r.NONE,
      s = new THREE.Vector3(),
      l = new THREE.Vector3(),
      c = new THREE.Vector3(),
      h = new THREE.Vector2(),
      u = new THREE.Vector2(),
      p = 0,
      f = 0,
      d = new THREE.Vector2(),
      m = new THREE.Vector2();
    this.target0 = this.target.clone(),
      this.position0 = this.object.position.clone(),
      this.up0 = this.object.up.clone();
    var E = { type: "change" };
    function g(e) {
      !1 !== o.enabled &&
        (window.removeEventListener("keydown", g),
          (a = n) === r.NONE &&
          (e.keyCode !== o.keys[r.ROTATE] || o.noRotate
            ? e.keyCode !== o.keys[r.ZOOM] || o.noZoom
              ? e.keyCode !== o.keys[r.PAN] || o.noPan || (n = r.PAN)
              : n = r.ZOOM
            : n = r.ROTATE));
    }
    function v(e) {
      !1 !== o.enabled &&
        (e.preventDefault(),
          e.stopPropagation(),
          n !== r.ROTATE || o.noRotate
            ? n !== r.ZOOM || o.noZoom
              ? n !== r.PAN || o.noPan ||
                (m = o.getMouseOnScreen(e.clientX, e.clientY))
              : u = o.getMouseOnScreen(e.clientX, e.clientY)
            : c = o.getMouseProjectionOnBall(e.clientX, e.clientY));
    }
    function y(e) {
      !1 !== o.enabled &&
        (e.preventDefault(),
          e.stopPropagation(),
          n = r.NONE,
          document.removeEventListener("mousemove", v),
          document.removeEventListener("mouseup", y));
    }
    function T(e) {
      if (!1 !== o.enabled) {
        e.preventDefault(), e.stopPropagation();
        var t = 0;
        e.wheelDelta ? t = e.wheelDelta / 40 : e.detail && (t = -e.detail / 3),
          h.y += .01 * t;
      }
    }
    this.handleResize = function () {
      this.domElement === document
        ? (this.screen.left = 0,
          this.screen.top = 0,
          this.screen.width = window.innerWidth,
          this.screen.height = window.innerHeight)
        : this.screen = this.domElement.getBoundingClientRect();
    },
      this.handleEvent = function (e) {
        "function" == typeof this[e.type] && this[e.type](e);
      },
      this.getMouseOnScreen = function (e, t) {
        return new THREE.Vector2(
          (e - o.screen.left) / o.screen.width,
          (t - o.screen.top) / o.screen.height,
        );
      },
      this.getMouseProjectionOnBall = function (e, t) {
        var i = new THREE.Vector3(
            (e - .5 * o.screen.width - o.screen.left) / (.5 * o.screen.width),
            (.5 * o.screen.height + o.screen.top - t) / (.5 * o.screen.height),
            0,
          ),
          r = i.length();
        o.noRoll
          ? r < Math.SQRT1_2 ? i.z = Math.sqrt(1 - r * r) : i.z = .5 / r
          : 1 < r
          ? i.normalize()
          : i.z = Math.sqrt(1 - r * r), s.copy(o.object.position).sub(o.target);
        var n = o.object.up.clone().setLength(i.y);
        return n.add(o.object.up.clone().cross(s).setLength(i.x)),
          n.add(s.setLength(i.z)),
          n;
      },
      this.rotateCamera = function () {
        var e = Math.acos(l.dot(c) / l.length() / c.length());
        if (e) {
          var t = (new THREE.Vector3()).crossVectors(l, c).normalize(),
            i = new THREE.Quaternion();
          e *= o.rotateSpeed,
            i.setFromAxisAngle(t, -e),
            s.applyQuaternion(i),
            o.object.up.applyQuaternion(i),
            c.applyQuaternion(i),
            o.staticMoving ? l.copy(c)
            : (i.setFromAxisAngle(t, e * (o.dynamicDampingFactor - 1)),
              l.applyQuaternion(i));
        }
      },
      this.zoomCamera = function () {
        if (n === r.TOUCH_ZOOM) {
          var e = p / f;
          p = f, s.multiplyScalar(e);
        } else {
          1 !== (e = 1 + (u.y - h.y) * o.zoomSpeed) && 0 < e &&
            (s.multiplyScalar(e),
              o.staticMoving
                ? h.copy(u)
                : h.y += (u.y - h.y) * this.dynamicDampingFactor);
        }
      },
      this.panCamera = function () {
        var e = m.clone().sub(d);
        if (e.lengthSq()) {
          e.multiplyScalar(s.length() * o.panSpeed);
          var t = s.clone().cross(o.object.up).setLength(e.x);
          t.add(o.object.up.clone().setLength(e.y)),
            o.object.position.add(t),
            o.target.add(t),
            o.staticMoving ? d = m
            : d.add(e.subVectors(m, d).multiplyScalar(o.dynamicDampingFactor));
        }
      },
      this.checkDistances = function () {
        o.noZoom && o.noPan ||
          (s.lengthSq() > o.maxDistance * o.maxDistance &&
            o.object.position.addVectors(o.target, s.setLength(o.maxDistance)),
            s.lengthSq() < o.minDistance * o.minDistance &&
            o.object.position.addVectors(o.target, s.setLength(o.minDistance)));
      },
      this.update = function () {
        s.subVectors(o.object.position, o.target),
          o.noRotate || o.rotateCamera(),
          o.noZoom || o.zoomCamera(),
          o.noPan || o.panCamera(),
          o.object.position.addVectors(o.target, s),
          o.checkDistances(),
          o.object.lookAt(o.target),
          0 < i.distanceToSquared(o.object.position) &&
          (o.dispatchEvent(E), i.copy(o.object.position));
      },
      this.reset = function () {
        n = r.NONE,
          a = r.NONE,
          o.target.copy(o.target0),
          o.object.position.copy(o.position0),
          o.object.up.copy(o.up0),
          s.subVectors(o.object.position, o.target),
          o.object.lookAt(o.target),
          o.dispatchEvent(E),
          i.copy(o.object.position);
      },
      this.domElement.addEventListener("contextmenu", function (e) {
        e.preventDefault();
      }, !1),
      this.domElement.addEventListener("mousedown", function (e) {
        !1 !== o.enabled &&
          (e.preventDefault(),
            e.stopPropagation(),
            n === r.NONE && (n = e.button),
            n !== r.ROTATE || o.noRotate
              ? n !== r.ZOOM || o.noZoom
                ? n !== r.PAN || o.noPan ||
                  (d = o.getMouseOnScreen(e.clientX, e.clientY), m.copy(d))
                : (h = o.getMouseOnScreen(e.clientX, e.clientY), u.copy(h))
              : (l = o.getMouseProjectionOnBall(e.clientX, e.clientY),
                c.copy(l)),
            document.addEventListener("mousemove", v, !1),
            document.addEventListener("mouseup", y, !1));
      }, !1),
      this.domElement.addEventListener("mousewheel", T, !1),
      this.domElement.addEventListener("DOMMouseScroll", T, !1),
      this.domElement.addEventListener("touchstart", function (e) {
        if (!1 !== o.enabled) {
          switch (e.touches.length) {
            case 1:
              n = r.TOUCH_ROTATE,
                l = c = o.getMouseProjectionOnBall(
                  e.touches[0].pageX,
                  e.touches[0].pageY,
                );
              break;
            case 2:
              n = r.TOUCH_ZOOM;
              var t = e.touches[0].pageX - e.touches[1].pageX,
                i = e.touches[0].pageY - e.touches[1].pageY;
              f = p = Math.sqrt(t * t + i * i);
              break;
            case 3:
              n = r.TOUCH_PAN,
                d = m = o.getMouseOnScreen(
                  e.touches[0].pageX,
                  e.touches[0].pageY,
                );
              break;
            default:
              n = r.NONE;
          }
        }
      }, !1),
      this.domElement.addEventListener("touchend", function (e) {
        if (!1 !== o.enabled) {
          switch (e.touches.length) {
            case 1:
              l = c = o.getMouseProjectionOnBall(
                e.touches[0].pageX,
                e.touches[0].pageY,
              );
              break;
            case 2:
              p = f = 0;
              break;
            case 3:
              d = m = o.getMouseOnScreen(
                e.touches[0].pageX,
                e.touches[0].pageY,
              );
          }
          n = r.NONE;
        }
      }, !1),
      this.domElement.addEventListener("touchmove", function (e) {
        if (!1 !== o.enabled) {
          switch (e.preventDefault(), e.stopPropagation(), e.touches.length) {
            case 1:
              c = o.getMouseProjectionOnBall(
                e.touches[0].pageX,
                e.touches[0].pageY,
              );
              break;
            case 2:
              var t = e.touches[0].pageX - e.touches[1].pageX,
                i = e.touches[0].pageY - e.touches[1].pageY;
              f = Math.sqrt(t * t + i * i);
              break;
            case 3:
              m = o.getMouseOnScreen(e.touches[0].pageX, e.touches[0].pageY);
              break;
            default:
              n = r.NONE;
          }
        }
      }, !1),
      window.addEventListener("keydown", g, !1),
      window.addEventListener("keyup", function (e) {
        !1 !== o.enabled && (n = a, window.addEventListener("keydown", g, !1));
      }, !1),
      this.handleResize();
  },
  THREE.TrackballControls.prototype = Object.create(
    THREE.EventDispatcher.prototype,
  ),
  THREE.AsciiEffect = function (i, e, t) {
    e = void 0 === e ? " .:-=+*#%@" : e, t || (t = {});
    var r,
      n,
      o = t.resolution ? t.resolution : .15,
      a = t.scale ? t.scale : 1,
      d = !!t.color && t.color,
      m = !!t.alpha && t.alpha,
      E = !!t.block && t.block,
      g = !!t.invert && t.invert,
      s = document.createElement("div");
    s.style.cursor = "default";
    var v, y, l, c = document.createElement("table");
    s.appendChild(c),
      this.setSize = function (e, t) {
        r = e,
          n = t,
          i.setSize(e, t),
          function () {
            v = Math.round(r * H),
              y = Math.round(n * H),
              f.width = v,
              f.height = y,
              (l = i.domElement).style.backgroundColor &&
              (c.rows[0].cells[0].style.backgroundColor =
                l.style.backgroundColor,
                c.rows[0].cells[0].style.color = l.style.color);
            c.cellSpacing = 0, c.cellPadding = 0;
            var e = c.style;
            e.display = "inline",
              e.width = Math.round(v / H * a) + "px",
              e.height = Math.round(y / H * a) + "px",
              e.whiteSpace = "pre",
              e.margin = "0px",
              e.padding = "0px",
              e.letterSpacing = _ + "px",
              e.fontFamily = p,
              e.fontSize = b + "px",
              e.lineHeight = w + "px",
              e.textAlign = "left",
              e.textDecoration = "none";
          }();
      },
      this.render = function (e, t) {
        i.render(e, t),
          function (e, t) {
            R.clearRect(0, 0, v, y), R.drawImage(T, 0, 0, v, y);
            for (
              var i = R.getImageData(0, 0, v, y).data, r = "", n = 0;
              n < y;
              n += 2
            ) {
              for (var o = 0; o < v; o++) {
                var a,
                  s,
                  l = 4 * (n * v + o),
                  c = i[l],
                  h = i[l + 1],
                  u = i[l + 2],
                  p = i[l + 3];
                s = (.3 * c + .59 * h + .11 * u) / 255,
                  0 == p && (s = 1),
                  a = Math.floor((1 - s) * (x.length - 1)),
                  g && (a = x.length - a - 1);
                var f = x[a];
                void 0 !== f && " " != f || (f = "&nbsp;"),
                  r += d
                    ? "<span style='color:rgb(" + c + "," + h + "," + u + ");" +
                      (E
                        ? "background-color:rgb(" + c + "," + h + "," + u + ");"
                        : "") +
                      (m ? "opacity:" + p / 255 + ";" : "") + "'>" + f +
                      "</span>"
                    : f;
              }
              r += "<br/>";
            }
            t.innerHTML = "<tr><td>" + r + "</td></tr>";
          }(0, c);
      },
      this.domElement = s;
    var h = " .,:;i1tfLCG08@".split(""),
      u = " CGO08@".split(""),
      p = "courier new, monospace",
      T = i.domElement,
      f = document.createElement("canvas");
    if (f.getContext) {
      var R = f.getContext("2d");
      if (R.getImageData) {
        var x = d ? u : h;
        e && (x = e);
        var H = .5;
        H = .25, o && (H = o);
        var b = 2 / H * a, w = 2 / H * a, _ = 0;
        switch (a) {
          case 1:
            _ = -1;
            break;
          case 2:
          case 3:
            _ = -2.1;
            break;
          case 4:
            _ = -3.1;
            break;
          case 5:
            _ = -4.15;
        }
        0;
      }
    }
  };
var Bird = function () {
  var r = this;
  function e(e, t, i) {
    r.vertices.push(new THREE.Vector3(e, t, i));
  }
  function t(e, t, i) {
    r.faces.push(new THREE.Face3(e, t, i));
  }
  THREE.Geometry.call(this),
    e(5, 0, 0),
    e(-5, -2, 1),
    e(-5, 0, 0),
    e(-5, -2, -1),
    e(0, 2, -6),
    e(0, 2, 6),
    e(2, 0, 0),
    e(-3, 0, 0),
    t(0, 2, 1),
    t(4, 7, 6),
    t(5, 6, 7),
    this.computeCentroids(),
    this.computeFaceNormals();
};
function AsciiBG() {
  var r, n, o, a, s, l, c, h, t = Date.now();
  function u() {
    n.aspect = window.innerWidth / window.innerHeight,
      n.updateProjectionMatrix(),
      s.setSize(window.innerWidth, window.innerHeight),
      effect.setSize(window.innerWidth, window.innerHeight);
  }
  function p() {
    requestAnimationFrame(p),
      function () {
        if (!h) {
          var e = Date.now() - t;
          l.position.y = 150 * Math.abs(Math.sin(.002 * e)),
            l.rotation.x = 3e-4 * e,
            l.rotation.z = 2e-4 * e,
            o.update(),
            effect.render(a, n);
        }
      }();
  }
  this.play = function () {
    var e, t, i;
    t = window.innerWidth || 2,
      i = window.innerHeight || 2,
      (r = document.createElement("div")).className = "background ascii",
      document.body.appendChild(r),
      (n = new THREE.PerspectiveCamera(70, t / i, 1, 1e3)).position.y = 150,
      n.position.z = 500,
      o = new THREE.TrackballControls(n),
      a = new THREE.Scene(),
      (e = new THREE.PointLight(16777215)).position.set(500, 500, 500),
      a.add(e),
      (e = new THREE.PointLight(16777215, .25)).position.set(-500, -500, -500),
      a.add(e),
      l = new THREE.Mesh(
        new THREE.SphereGeometry(200, 20, 10),
        new THREE.MeshLambertMaterial({ shading: THREE.FlatShading }),
      ),
      a.add(l),
      (c = new THREE.Mesh(
        new THREE.PlaneGeometry(400, 400),
        new THREE.MeshBasicMaterial({ color: 14737632 }),
      )).position.y = -200,
      c.rotation.x = -Math.PI / 2,
      a.add(c),
      (s = new THREE.CanvasRenderer()).setSize(t, i),
      effect = new THREE.AsciiEffect(s),
      effect.setSize(t, i),
      r.appendChild(effect.domElement),
      window.addEventListener("resize", u, !1),
      p(),
      h = !1;
  },
    this.stop = function () {
      h = !0, $(".background").remove();
    };
}
function BirdsBG() {
  var i;
  this.play = function () {
    !function () {
      (r = new THREE.PerspectiveCamera(75, h / u, 1, 1e4)).position.z = 450,
        n = new THREE.Scene(),
        a = [],
        c = [];
      for (var e = 0; e < 200; e++) {
        (l = c[e] = new t()).position.x = 400 * Math.random() - 200,
          l.position.y = 400 * Math.random() - 200,
          l.position.z = 400 * Math.random() - 200,
          l.velocity.x = 2 * Math.random() - 1,
          l.velocity.y = 2 * Math.random() - 1,
          l.velocity.z = 2 * Math.random() - 1,
          l.setAvoidWalls(!0),
          l.setWorldSize(500, 500, 400),
          (s = a[e] = new THREE.Mesh(
            new Bird(),
            new THREE.MeshBasicMaterial({
              color: 16777215 * Math.random(),
              side: THREE.DoubleSide,
            }),
          )).phase = Math.floor(62.83 * Math.random()),
          s.position = c[e].position,
          n.add(s);
      }
      (o = new THREE.CanvasRenderer()).setSize(h, u),
        document.addEventListener("mousemove", m, !1),
        document.body.appendChild(o.domElement),
        window.addEventListener("resize", d, !1);
    }(),
      e(),
      i = !1;
  },
    this.stop = function () {
      i = !0, $("canvas").remove();
    };
  var r,
    n,
    o,
    a,
    s,
    l,
    c,
    t = function () {
      var r, t, i = new THREE.Vector3(), n = 500, o = 500, a = 200, s = !1;
      this.position = new THREE.Vector3(),
        this.velocity = new THREE.Vector3(),
        r = new THREE.Vector3(),
        this.setGoal = function (e) {
          t = e;
        },
        this.setAvoidWalls = function (e) {
          s = e;
        },
        this.setWorldSize = function (e, t, i) {
          n = e, o = t, a = i;
        },
        this.run = function (e) {
          s &&
          (i.set(-n, this.position.y, this.position.z),
            (i = this.avoid(i)).multiplyScalar(5),
            r.add(i),
            i.set(n, this.position.y, this.position.z),
            (i = this.avoid(i)).multiplyScalar(5),
            r.add(i),
            i.set(this.position.x, -o, this.position.z),
            (i = this.avoid(i)).multiplyScalar(5),
            r.add(i),
            i.set(this.position.x, o, this.position.z),
            (i = this.avoid(i)).multiplyScalar(5),
            r.add(i),
            i.set(this.position.x, this.position.y, -a),
            (i = this.avoid(i)).multiplyScalar(5),
            r.add(i),
            i.set(this.position.x, this.position.y, a),
            (i = this.avoid(i)).multiplyScalar(5),
            r.add(i)),
            .5 < Math.random() && this.flock(e),
            this.move();
        },
        this.flock = function (e) {
          t && r.add(this.reach(t, .005)),
            r.add(this.alignment(e)),
            r.add(this.cohesion(e)),
            r.add(this.separation(e));
        },
        this.move = function () {
          this.velocity.add(r);
          var e = this.velocity.length();
          4 < e && this.velocity.divideScalar(e / 4),
            this.position.add(this.velocity),
            r.set(0, 0, 0);
        },
        this.checkBounds = function () {
          this.position.x > n && (this.position.x = -n),
            this.position.x < -n && (this.position.x = n),
            this.position.y > o && (this.position.y = -o),
            this.position.y < -o && (this.position.y = o),
            this.position.z > a && (this.position.z = -a),
            this.position.z < -a && (this.position.z = a);
        },
        this.avoid = function (e) {
          var t = new THREE.Vector3();
          return t.copy(this.position),
            t.sub(e),
            t.multiplyScalar(1 / this.position.distanceToSquared(e)),
            t;
        },
        this.repulse = function (e) {
          var t = this.position.distanceTo(e);
          if (t < 150) {
            var i = new THREE.Vector3();
            i.subVectors(this.position, e), i.multiplyScalar(.5 / t), r.add(i);
          }
        },
        this.reach = function (e, t) {
          var i = new THREE.Vector3();
          return i.subVectors(e, this.position), i.multiplyScalar(t), i;
        },
        this.alignment = function (e) {
          for (
            var t, i = new THREE.Vector3(), r = 0, n = 0, o = e.length;
            n < o;
            n++
          ) {
            .6 < Math.random() ||
              (t = e[n],
                distance = t.position.distanceTo(this.position),
                0 < distance && distance <= 100 && (i.add(t.velocity), r++));
          }
          if (0 < r) {
            i.divideScalar(r);
            var a = i.length();
            .1 < a && i.divideScalar(a / .1);
          }
          return i;
        },
        this.cohesion = function (e) {
          for (
            var t,
              i,
              r = new THREE.Vector3(),
              n = new THREE.Vector3(),
              o = 0,
              a = 0,
              s = e.length;
            a < s;
            a++
          ) {
            .6 < Math.random() ||
              0 < (i = (t = e[a]).position.distanceTo(this.position)) &&
                i <= 100 && (r.add(t.position), o++);
          }
          0 < o && r.divideScalar(o), n.subVectors(r, this.position);
          var l = n.length();
          return .1 < l && n.divideScalar(l / .1), n;
        },
        this.separation = function (e) {
          for (
            var t,
              i,
              r = new THREE.Vector3(),
              n = new THREE.Vector3(),
              o = 0,
              a = e.length;
            o < a;
            o++
          ) {
            .6 < Math.random() ||
              0 < (i = (t = e[o]).position.distanceTo(this.position)) &&
                i <= 100 &&
                (n.subVectors(this.position, t.position),
                  n.normalize(),
                  n.divideScalar(i),
                  r.add(n));
          }
          return r;
        };
    },
    h = window.innerWidth,
    u = window.innerHeight,
    p = h / 2,
    f = u / 2;
  function d() {
    r.aspect = window.innerWidth / window.innerHeight,
      r.updateProjectionMatrix(),
      o.setSize(window.innerWidth, window.innerHeight);
  }
  function m(e) {
    for (
      var t = new THREE.Vector3(e.clientX - p, -e.clientY + f, 0),
        i = 0,
        r = c.length;
      i < r;
      i++
    ) {
      l = c[i], t.z = l.position.z, l.repulse(t);
    }
  }
  function e() {
    requestAnimationFrame(e),
      function () {
        if (!i) {
          for (var e = 0, t = a.length; e < t; e++) {
            (l = c[e]).run(c),
              s = a[e],
              color = s.material.color,
              color.r = color.g = color.b = (500 - s.position.z) / 1e3,
              s.rotation.y = Math.atan2(-l.velocity.z, l.velocity.x),
              s.rotation.z = Math.asin(l.velocity.y / l.velocity.length()),
              s.phase = (s.phase + (Math.max(0, s.rotation.z) + .1)) % 62.83,
              s.geometry.vertices[5].y = s.geometry.vertices[4].y = 5 *
                Math.sin(s.phase);
          }
          o.render(n, r);
        }
      }();
  }
}
function CubesBG() {
  var t, n, o, a, s, l;
  this.play = function () {
    !function () {
      (n = document.createElement("div")).className = "background cubes",
        document.body.appendChild(n),
        (o = new THREE.PerspectiveCamera(
          60,
          window.innerWidth / window.innerHeight,
          1,
          1e4,
        )).position.z = 500,
        a = new THREE.Scene();
      var e = new THREE.CubeGeometry(100, 100, 100),
        t = new THREE.MeshNormalMaterial({ overdraw: .5 });
      l = new THREE.Object3D();
      for (var i = 0; i < 200; i++) {
        var r = new THREE.Mesh(e, t);
        r.position.x = 2e3 * Math.random() - 1e3,
          r.position.y = 2e3 * Math.random() - 1e3,
          r.position.z = 2e3 * Math.random() - 1e3,
          r.rotation.x = 2 * Math.random() * Math.PI,
          r.rotation.y = 2 * Math.random() * Math.PI,
          r.matrixAutoUpdate = !1,
          r.updateMatrix(),
          l.add(r);
      }
      a.add(l),
        (s = new THREE.CanvasRenderer()).setSize(
          window.innerWidth,
          window.innerHeight,
        ),
        s.sortObjects = !1,
        n.appendChild(s.domElement),
        window.addEventListener("resize", u, !1);
    }(),
      e(),
      t = !1;
  },
    this.stop = function () {
      t = !0, $("canvas").remove();
    };
  var i = 0, r = 0, c = window.innerWidth / 2, h = window.innerHeight / 2;
  function u() {
    c = window.innerWidth / 2,
      h = window.innerHeight / 2,
      o.aspect = window.innerWidth / window.innerHeight,
      o.updateProjectionMatrix(),
      s.setSize(window.innerWidth, window.innerHeight);
  }
  function e() {
    requestAnimationFrame(e),
      function () {
        if (!t) {
          o.position.x += .05 * (i - o.position.x),
            o.position.y += .05 * (-r - o.position.y),
            o.lookAt(a.position);
          var e = Date.now();
          l.rotation.x = .5 * Math.sin(7e-4 * e),
            l.rotation.y = .5 * Math.sin(3e-4 * e),
            l.rotation.z = .5 * Math.sin(2e-4 * e),
            s.render(a, o);
        }
      }();
  }
  document.addEventListener("mousemove", function (e) {
    i = 10 * (e.clientX - c), r = 10 * (e.clientY - h);
  }, !1);
}
function FloorBG() {
  var e;
  this.play = function () {
    !function () {
      (r = document.createElement("div")).className = "background floor",
        document.body.appendChild(r),
        (n = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          1,
          1e4,
        )).position.z = 1e3,
        o = new THREE.Scene();
      for (var e = new THREE.SpriteMaterial(), t = 0; t < c; t++) {
        for (var i = 0; i < h; i++) {
          (s = new THREE.Sprite(e)).scale.y = 4,
            s.position.x = t * l - c * l / 2,
            s.position.z = i * l - h * l / 2,
            o.add(s);
        }
      }
      (a = new THREE.CanvasRenderer()).setSize(
        window.innerWidth,
        window.innerHeight,
      ),
        r.appendChild(a.domElement),
        document.addEventListener("mousemove", d, !1),
        document.addEventListener("touchstart", m, !1),
        document.addEventListener("touchmove", E, !1),
        window.addEventListener("resize", f, !1);
    }(),
      g(),
      e = !1;
  },
    this.stop = function () {
      e = !0, $(".background").remove();
    };
  var r,
    n,
    o,
    a,
    s,
    l = 100,
    c = 50,
    h = 50,
    t = 0,
    i = 0,
    u = window.innerWidth / 2,
    p = window.innerHeight / 2;
  function f() {
    u = window.innerWidth / 2,
      p = window.innerHeight / 2,
      n.aspect = window.innerWidth / window.innerHeight,
      n.updateProjectionMatrix(),
      a.setSize(window.innerWidth, window.innerHeight);
  }
  function d(e) {
    t = e.clientX - u, i = e.clientY - p;
  }
  function m(e) {
    1 < e.touches.length &&
      (e.preventDefault(),
        t = e.touches[0].pageX - u,
        i = e.touches[0].pageY - p);
  }
  function E(e) {
    1 == e.touches.length &&
      (e.preventDefault(),
        t = e.touches[0].pageX - u,
        i = e.touches[0].pageY - p);
  }
  function g() {
    requestAnimationFrame(g),
      e ||
      (n.position.x += .05 * (t - n.position.x),
        n.position.y += .05 * (-i - n.position.y),
        n.lookAt(o.position),
        a.render(o, n));
  }
}
function ISOcubesBG() {
  var t,
    o = {
      scale: 40,
      width: 15,
      height: 15,
      grabbed: null,
      cubes: [],
      k: .007,
      damp: .99,
      margin: -20,
    },
    a = Math.sqrt(3),
    l = a / 2;
  this.play = function () {
    var e;
    t = !1,
      function () {
        for (
          var o = 0, e = ["ms", "moz", "webkit", "o"], t = 0;
          t < e.length && !window.requestAnimationFrame;
          ++t
        ) {
          window.requestAnimationFrame = window[e[t] + "RequestAnimationFrame"],
            window.cancelAnimationFrame =
              window[e[t] + "CancelAnimationFrame"] ||
              window[e[t] + "CancelRequestAnimationFrame"];
        }
        window.requestAnimationFrame ||
        (window.requestAnimationFrame = function (e, t) {
          var i = (new Date()).getTime(),
            r = Math.max(0, 16 - (i - o)),
            n = window.setTimeout(function () {
              e(i + r);
            }, r);
          return o = i + r, n;
        }),
          window.cancelAnimationFrame ||
          (window.cancelAnimationFrame = function (e) {
            clearTimeout(e);
          });
      }(),
      (e = document.createElement("canvas")).width = window.innerWidth,
      e.height = window.innerHeight,
      e.className = "background ISOcubes",
      document.body.appendChild(e),
      window.onmousedown = function (e) {
        o.grabX = e.clientX,
          o.grabY = e.clientY,
          o.mouseX = e.clientX,
          o.mouseY = e.clientY;
        var t = Math.floor((o.mouseY - o.margin) / (1.5 * o.scale)),
          i = (o.mouseX - o.margin) / (a * o.scale),
          r = t % 2 == 1 ? Math.floor(i - .5) : Math.floor(i);
        0 <= r && r < o.width && 0 <= t && t < o.height &&
          (o.grabbed = o.cubes[t * o.width + r], o.grabbed.grabbed = !0);
      },
      window.onmousemove = function (e) {
        o.mouseX = e.clientX, o.mouseY = e.clientY;
      },
      window.onmouseup = function (e) {
        null != o.grabbed && (o.grabbed.grabbed = !1), o.grabbed = null;
      },
      o.ctx = e.getContext("2d"),
      o.canvaswidth = e.width,
      o.canvasheight = e.height,
      o.width = Math.ceil(o.canvaswidth / (o.scale * a)),
      o.height = Math.ceil(o.canvasheight / (1.5 * o.scale)),
      o.frame = 0,
      function (e) {
        e.cubes = [];
        for (var t = 0; t < e.height; t++) {
          for (var i = 0; i < e.width; i++) {
            var r = { x: i, y: t, off: 1, voff: .02, grabbed: !1 };
            e.cubes.push(r);
          }
        }
      }(o),
      function e() {
        var n;
        t ||
          (o.anim = requestAnimationFrame(e),
            (n = o).frame++,
            n.ctx.setTransform(1, 0, 0, 1, 0, 0),
            n.ctx.clearRect(0, 0, n.canvaswidth, n.canvasheight),
            n.cubes.forEach(function (e) {
              n.ctx.setTransform(1, 0, 0, 1, 0, 0),
                n.ctx.translate(l * n.scale + n.margin, n.scale + n.margin),
                n.ctx.translate(n.scale * e.x * a, n.scale * e.y * 1.5),
                e.y % 2 == 1 && n.ctx.translate(n.scale * l, 0),
                n.ctx.translate(0, e.off * n.scale),
                function (e, t, i) {
                  if (e.beginPath(), i.grabbed) e.fillStyle = "#ee6666";
                  else {
                    var r = 230 - 80 * i.off, n = 230 + 80 * i.off;
                    e.fillStyle =
                      (o = r,
                        a = 230,
                        s = n,
                        "rgb(" + Math.floor(o) + "," + Math.floor(a) + "," +
                        Math.floor(s) + ")");
                  }
                  var o, a, s;
                  e.moveTo(0, 0),
                    e.lineTo(t * l, -.5 * t),
                    e.lineTo(0, -1 * t),
                    e.lineTo(-l * t, -.5 * t),
                    e.lineTo(0, 0),
                    e.fill(),
                    e.beginPath(),
                    e.fillStyle = "#999999",
                    e.moveTo(0, 0),
                    e.lineTo(0, 10 * t),
                    e.lineTo(l * t, 10 * t - .5 * t),
                    e.lineTo(l * t, -.5 * t),
                    e.lineTo(0, 0),
                    e.fill(),
                    e.beginPath(),
                    e.fillStyle = "#000000",
                    e.moveTo(0, 0),
                    e.lineTo(0, 10 * t),
                    e.lineTo(-l * t, 10 * t - .5 * t),
                    e.lineTo(-l * t, -.5 * t),
                    e.lineTo(0, 0),
                    e.fill();
                }(n.ctx, n.scale, e);
              var t = e.x, i = e.y;
              if (0 == t) e.voff -= n.k * e.off;
              else {
                var r = n.cubes[i * n.width + t - 1];
                e.voff -= n.k * (e.off - r.off);
              }
              t == n.width - 1
                ? e.voff -= n.k * e.off
                : (r = n.cubes[i * n.width + t + 1],
                  e.voff -= n.k * (e.off - r.off)),
                0 == i
                  ? e.voff -= n.k * e.off
                  : (r = n.cubes[(i - 1) * n.width + t],
                    e.voff -= n.k * (e.off - r.off)),
                i == n.height - 1
                  ? e.voff -= n.k * e.off
                  : (r = n.cubes[(i + 1) * n.width + t],
                    e.voff -= n.k * (e.off - r.off)),
                e.voff *= n.damp;
            }),
            n.cubes.forEach(function (e) {
              e.off += e.voff;
            }),
            null != n.grabbed &&
            (n.grabbed.off = (n.mouseY - n.grabY) / n.scale,
              n.grabbed.voff = 0));
      }();
  },
    this.stop = function () {
      t = !0, cancelAnimationFrame(o.anim), $(".background").remove();
    };
}
function JailBG() {
  var e;
  this.play = function () {
    !function () {
      var e, t;
      (e = document.createElement("div")).className = "background jail",
        document.body.appendChild(e),
        (s = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          1,
          1e4,
        )).position.z = 100,
        l = new THREE.Scene(),
        (c = new THREE.CanvasRenderer()).setSize(
          window.innerWidth,
          window.innerHeight,
        ),
        e.appendChild(c.domElement);
      for (
        var i = 2 * Math.PI,
          r = new THREE.SpriteCanvasMaterial({
            color: 16777215,
            program: function (e) {
              e.beginPath(), e.arc(0, 0, 1, 0, i, !0), e.fill();
            },
          }),
          n = new THREE.Geometry(),
          o = 0;
        o < 100;
        o++
      ) {
        (t = new THREE.Sprite(r)).position.x = 2 * Math.random() - 1,
          t.position.y = 2 * Math.random() - 1,
          t.position.z = 2 * Math.random() - 1,
          t.position.normalize(),
          t.position.multiplyScalar(10 * Math.random() + 450),
          t.scale.x = t.scale.y = 5,
          l.add(t),
          n.vertices.push(t.position);
      }
      var a = new THREE.Line(
        n,
        new THREE.LineBasicMaterial({ color: 16777215, opacity: .5 }),
      );
      l.add(a),
        document.addEventListener("mousemove", u, !1),
        document.addEventListener("touchstart", p, !1),
        document.addEventListener("touchmove", f, !1),
        window.addEventListener("resize", h, !1);
    }(),
      o(),
      e = !1;
  },
    this.stop = function () {
      e = !0, $(".background").remove();
    };
  var s,
    l,
    c,
    t = 0,
    i = 0,
    r = window.innerWidth / 2,
    n = window.innerHeight / 2;
  function h() {
    r = window.innerWidth / 2,
      n = window.innerHeight / 2,
      s.aspect = window.innerWidth / window.innerHeight,
      s.updateProjectionMatrix(),
      c.setSize(window.innerWidth, window.innerHeight);
  }
  function u(e) {
    t = e.clientX - r, i = e.clientY - n;
  }
  function p(e) {
    1 < e.touches.length &&
      (e.preventDefault(),
        t = e.touches[0].pageX - r,
        i = e.touches[0].pageY - n);
  }
  function f(e) {
    1 == e.touches.length &&
      (e.preventDefault(),
        t = e.touches[0].pageX - r,
        i = e.touches[0].pageY - n);
  }
  function o() {
    requestAnimationFrame(o),
      e ||
      (s.position.x += .05 * (t - s.position.x),
        s.position.y += .05 * (200 - i - s.position.y),
        s.lookAt(l.position),
        c.render(l, s));
  }
}
function LinesBG() {
  var s, l, c, h, u, p, f, d, i, r, n = new THREE.Vector2(), o = 100, a = 0;
  function m() {
    l.aspect = window.innerWidth / window.innerHeight,
      l.updateProjectionMatrix(),
      p.setSize(window.innerWidth, window.innerHeight);
  }
  function E(e) {
    e.preventDefault(),
      n.x = e.clientX / window.innerWidth * 2 - 1,
      n.y = -e.clientY / window.innerHeight * 2 + 1;
  }
  function e() {
    requestAnimationFrame(e),
      function () {
        if (!r) {
          a += .1,
            l.position.x = o * Math.sin(THREE.Math.degToRad(a)),
            l.position.y = o * Math.sin(THREE.Math.degToRad(a)),
            l.position.z = o * Math.cos(THREE.Math.degToRad(a)),
            l.lookAt(c.position);
          var e = new THREE.Vector3(n.x, n.y, 1);
          h.unprojectVector(e, l),
            u.set(l.position, e.sub(l.position).normalize());
          var t = u.intersectObjects(f.children, !0);
          0 < t.length
            ? (void 0 !== i && (i.material.linewidth = 1),
              (i = t[0].object).material.linewidth = 5,
              d.visible = !0,
              d.position.copy(t[0].point))
            : (void 0 !== i && (i.material.linewidth = 1),
              i = void 0,
              d.visible = !1), p.render(c, l);
        }
      }();
  }
  this.play = function () {
    !function () {
      (s = document.createElement("div")).className = "background lines",
        document.body.appendChild(s),
        l = new THREE.PerspectiveCamera(
          70,
          window.innerWidth / window.innerHeight,
          1,
          1e4,
        ),
        c = new THREE.Scene();
      var t = 2 * Math.PI;
      (d = new THREE.Particle(
        new THREE.ParticleCanvasMaterial({
          color: 13107,
          program: function (e) {
            e.beginPath(), e.arc(0, 0, 1, 0, t, !0), e.fill();
          },
        }),
      )).scale.x = d.scale.y = 5,
        d.visible = !1,
        c.add(d);
      for (
        var e = new THREE.Geometry(),
          i = new THREE.Vector3(),
          r = new THREE.Vector3(),
          n = 0;
        n < 100;
        n++
      ) {
        r.x += Math.random() - .5,
          r.y += Math.random() - .5,
          r.z += Math.random() - .5,
          r.normalize().multiplyScalar(5),
          i.add(r),
          e.vertices.push(i.clone());
      }
      (f = new THREE.Object3D()).position.x = 40 * Math.random() - 20,
        f.position.y = 40 * Math.random() - 20,
        f.position.z = 40 * Math.random() - 20,
        f.rotation.x = 2 * Math.random() * Math.PI,
        f.rotation.y = 2 * Math.random() * Math.PI,
        f.rotation.z = 2 * Math.random() * Math.PI,
        f.scale.x = Math.random() + .5,
        f.scale.y = Math.random() + .5,
        f.scale.z = Math.random() + .5;
      for (var n = 0; n < 50; n++) {
        var o = .5 < Math.random() ? THREE.LineStrip : THREE.LinePieces,
          a = new THREE.Line(
            e,
            new THREE.LineBasicMaterial({ color: 16777215 * Math.random() }),
            o,
          );
        a.position.x = 400 * Math.random() - 200,
          a.position.y = 400 * Math.random() - 200,
          a.position.z = 400 * Math.random() - 200,
          a.rotation.x = 2 * Math.random() * Math.PI,
          a.rotation.y = 2 * Math.random() * Math.PI,
          a.rotation.z = 2 * Math.random() * Math.PI,
          a.scale.x = Math.random() + .5,
          a.scale.y = Math.random() + .5,
          a.scale.z = Math.random() + .5,
          f.add(a);
      }
      c.add(f),
        h = new THREE.Projector(),
        (u = new THREE.Raycaster()).linePrecision = 3,
        (p = new THREE.CanvasRenderer()).sortObjects = !1,
        p.setSize(window.innerWidth, window.innerHeight),
        s.appendChild(p.domElement),
        document.addEventListener("mousemove", E, !1),
        window.addEventListener("resize", m, !1);
    }(),
      e(),
      r = !1;
  },
    this.stop = function () {
      r = !0, $(".background").remove();
    };
}
Bird.prototype = Object.create(THREE.Geometry.prototype),
  function (e, t, i, r, n, o, a) {
    e.GoogleAnalyticsObject = "ga",
      e.ga = e.ga || function () {
        (e.ga.q = e.ga.q || []).push(arguments);
      },
      e.ga.l = 1 * new Date(),
      o = t.createElement("script"),
      a = t.getElementsByTagName("script")[0],
      o.async = 1,
      o.src = "//www.google-analytics.com/analytics.js",
      a.parentNode.insertBefore(o, a);
  }(window, document),
  ga("create", "UA-46721958-1", "garni.ca"),
  ga("send", "pageview");
var bg = [],
  i = 3,
  colors = [
    "#1E8C93",
    "#ffc000",
    "tomato",
    "#0078A7",
    "#413123",
    "#333340",
    "#000",
  ];
bg[0] = new FloorBG(),
  bg[1] = new BirdsBG(),
  bg[2] = new AsciiBG(),
  bg[3] = new CubesBG(),
  bg[4] = new JailBG(),
  bg[5] = new LinesBG(),
  bg[6] = new ISOcubesBG();
var bgCurrent = bg[i];
function changeBackground() {
  i != bg.length - 1 ? i++ : i = 0,
    bgCurrent.stop(),
    (bgCurrent = bg[i]).play(),
    $("body").css("background", colors[i]);
}
bgCurrent.play(),
  $("body").css("background", colors[i]),
  setInterval(changeBackground, 2e4);

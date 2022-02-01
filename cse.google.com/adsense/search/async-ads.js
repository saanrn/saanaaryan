if (!window['googleNDT_']) {
    window['googleNDT_'] = (new Date()).getTime();
}(function() {
    window.googleAltLoader = 4;
    var sffeData_ = {
        service_host: "cse.google.com",
        hash: "17936949922821630891",
        packages: "search",
        module: "ads",
        version: "3",
        m: {
            cei: "17300841,17300863,17300865",
            ah: true,
            uatm: 500,
            ecfc2: true,
            llrm: 1000,
            llel: "Lio=",
            lldl: "bS5zZWFycy5jb20=",
            abf: {
                "_blockAdRequestOnUach": true,
                "_googEnableQup": true,
                "_googErrorTurnOffPersonalization": true,
                "_googTimeoutTurnOffPersonalization": true,
                "enableEnhancedTargetingRsonc": true
            }
        }
    };
    /*

     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    var m;

    function aa(a) {
        var b = 0;
        return function() {
            return b < a.length ? {
                done: !1,
                value: a[b++]
            } : {
                done: !0
            }
        }
    }
    var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ca(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var da = ca(this);

    function ha(a, b) {
        if (b) a: {
            var c = da;a = a.split(".");
            for (var d = 0; d < a.length - 1; d++) {
                var e = a[d];
                if (!(e in c)) break a;
                c = c[e]
            }
            a = a[a.length - 1];d = c[a];b = b(d);b != d && null != b && ba(c, a, {
                configurable: !0,
                writable: !0,
                value: b
            })
        }
    }
    ha("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.Id = f;
            ba(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.Id
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    });
    ha("Symbol.iterator", function(a) {
        if (a) return a;
        a = Symbol("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = da[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ba(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ja(aa(this))
                }
            })
        }
        return a
    });

    function ja(a) {
        a = {
            next: a
        };
        a[Symbol.iterator] = function() {
            return this
        };
        return a
    }

    function n(a) {
        var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
        return b ? b.call(a) : {
            next: aa(a)
        }
    }
    var ka = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        la;
    if ("function" == typeof Object.setPrototypeOf) la = Object.setPrototypeOf;
    else {
        var ma;
        a: {
            var na = {
                    a: !0
                },
                oa = {};
            try {
                oa.__proto__ = na;
                ma = oa.a;
                break a
            } catch (a) {}
            ma = !1
        }
        la = ma ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var qa = la;

    function ra(a, b) {
        a.prototype = ka(b.prototype);
        a.prototype.constructor = a;
        if (qa) qa(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Cf = b.prototype
    }
    ha("Promise", function(a) {
        function b(g) {
            this.B = 0;
            this.Na = void 0;
            this.ta = [];
            this.md = !1;
            var h = this.Xb();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.S = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.Yc = function(g) {
            if (null == this.S) {
                this.S = [];
                var h = this;
                this.Zc(function() {
                    h.Ae()
                })
            }
            this.S.push(g)
        };
        var e = da.setTimeout;
        c.prototype.Zc = function(g) {
            e(g, 0)
        };
        c.prototype.Ae = function() {
            for (; this.S && this.S.length;) {
                var g = this.S;
                this.S = [];
                for (var h =
                        0; h < g.length; ++h) {
                    var k = g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.Wd(l)
                    }
                }
            }
            this.S = null
        };
        c.prototype.Wd = function(g) {
            this.Zc(function() {
                throw g;
            })
        };
        b.prototype.Xb = function() {
            function g(l) {
                return function(q) {
                    k || (k = !0, l.call(h, q))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.mf),
                reject: g(this.Hc)
            }
        };
        b.prototype.mf = function(g) {
            if (g === this) this.Hc(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.wf(g);
            else {
                a: switch (typeof g) {
                    case "object":
                        var h = null != g;
                        break a;
                    case "function":
                        h = !0;
                        break a;
                    default:
                        h = !1
                }
                h ? this.lf(g) : this.kd(g)
            }
        };
        b.prototype.lf = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.Hc(k);
                return
            }
            "function" == typeof h ? this.xf(h, g) : this.kd(g)
        };
        b.prototype.Hc = function(g) {
            this.Bd(2, g)
        };
        b.prototype.kd = function(g) {
            this.Bd(1, g)
        };
        b.prototype.Bd = function(g, h) {
            if (0 != this.B) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.B);
            this.B = g;
            this.Na = h;
            2 === this.B && this.vf();
            this.Be()
        };
        b.prototype.vf = function() {
            var g = this;
            e(function() {
                if (g.df()) {
                    var h = da.console;
                    "undefined" !== typeof h && h.error(g.Na)
                }
            }, 1)
        };
        b.prototype.df = function() {
            if (this.md) return !1;
            var g = da.CustomEvent,
                h = da.Event,
                k = da.dispatchEvent;
            if ("undefined" === typeof k) return !0;
            "function" === typeof g ? g = new g("unhandledrejection", {
                cancelable: !0
            }) : "function" === typeof h ? g = new h("unhandledrejection", {
                cancelable: !0
            }) : (g = da.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
            g.promise = this;
            g.reason = this.Na;
            return k(g)
        };
        b.prototype.Be = function() {
            if (null != this.ta) {
                for (var g =
                        0; g < this.ta.length; ++g) f.Yc(this.ta[g]);
                this.ta = null
            }
        };
        var f = new c;
        b.prototype.wf = function(g) {
            var h = this.Xb();
            g.$a(h.resolve, h.reject)
        };
        b.prototype.xf = function(g, h) {
            var k = this.Xb();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function k(x, r) {
                return "function" == typeof x ? function(y) {
                    try {
                        l(x(y))
                    } catch (u) {
                        q(u)
                    }
                } : r
            }
            var l, q, p = new b(function(x, r) {
                l = x;
                q = r
            });
            this.$a(k(g, l), k(h, q));
            return p
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.$a = function(g,
            h) {
            function k() {
                switch (l.B) {
                    case 1:
                        g(l.Na);
                        break;
                    case 2:
                        h(l.Na);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.B);
                }
            }
            var l = this;
            null == this.ta ? f.Yc(k) : this.ta.push(k);
            this.md = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var l = n(g), q = l.next(); !q.done; q = l.next()) d(q.value).$a(h, k)
            })
        };
        b.all = function(g) {
            var h = n(g),
                k = h.next();
            return k.done ? d([]) : new b(function(l, q) {
                function p(y) {
                    return function(u) {
                        x[y] = u;
                        r--;
                        0 == r && l(x)
                    }
                }
                var x = [],
                    r = 0;
                do x.push(void 0), r++, d(k.value).$a(p(x.length - 1), q), k = h.next(); while (!k.done)
            })
        };
        return b
    });

    function sa(a, b, c) {
        if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
        if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
        return a + ""
    }
    ha("Array.prototype.find", function(a) {
        return a ? a : function(b, c) {
            a: {
                var d = this;d instanceof String && (d = String(d));
                for (var e = d.length, f = 0; f < e; f++) {
                    var g = d[f];
                    if (b.call(c, g, f, d)) {
                        b = g;
                        break a
                    }
                }
                b = void 0
            }
            return b
        }
    });
    ha("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            var d = sa(this, b, "startsWith");
            b += "";
            var e = d.length,
                f = b.length;
            c = Math.max(0, Math.min(c | 0, d.length));
            for (var g = 0; g < f && c < e;)
                if (d[c++] != b[g++]) return !1;
            return g >= f
        }
    });
    var ua = "function" == typeof Object.assign ? Object.assign : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e])
        }
        return a
    };
    ha("Object.assign", function(a) {
        return a || ua
    });

    function va(a, b) {
        a instanceof String && (a += "");
        var c = 0,
            d = !1,
            e = {
                next: function() {
                    if (!d && c < a.length) {
                        var f = c++;
                        return {
                            value: b(f, a[f]),
                            done: !1
                        }
                    }
                    d = !0;
                    return {
                        done: !0,
                        value: void 0
                    }
                }
            };
        e[Symbol.iterator] = function() {
            return e
        };
        return e
    }
    ha("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return va(this, function(b) {
                return b
            })
        }
    });
    ha("Object.is", function(a) {
        return a ? a : function(b, c) {
            return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c
        }
    });
    ha("Array.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            var d = this;
            d instanceof String && (d = String(d));
            var e = d.length;
            c = c || 0;
            for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                var f = d[c];
                if (f === b || Object.is(f, b)) return !0
            }
            return !1
        }
    });
    ha("String.prototype.includes", function(a) {
        return a ? a : function(b, c) {
            return -1 !== sa(this, b, "includes").indexOf(b, c || 0)
        }
    });
    ha("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    });
    var t = this || self;

    function wa(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function xa(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ya(a, b) {
        a = a.split(".");
        var c = t;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
    }

    function za(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.Cf = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.Of = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function Aa(a) {
        return a
    };
    var Ba = null,
        Ca = null,
        Da = null,
        Ea = null,
        Fa = null;

    function Ga() {
        var a = {};
        return window.ad_json ? window.ad_json : "undefined" != typeof ad_json && ad_json ? ad_json : a
    }

    function Ha(a) {
        Ba || (Ba = Ga().gd || null);
        return Ba && Ba[a] || {}
    }

    function Ia() {
        this.data = Ha("ff")
    }

    function Ja() {
        var a = Ca;
        a || (a = new Ia, Ga().gd && (Ca = a));
        return a
    }

    function Ka() {
        var a = Ja();
        return null != a.data.ini ? a.data.ini : -1
    }
    Ia.prototype.gb = function() {
        return !!this.data.eccp
    };
    Ia.prototype.fb = function() {
        return !!this.data.ecc
    };

    function La() {
        this.data = Ha("cd")
    }

    function Ma() {
        var a = Da;
        a || (a = new La, Ga().gd && (Da = a));
        return a
    }

    function Na(a) {
        return a.data.pid || ""
    }

    function Oa() {
        this.data = Ha("pc")
    }

    function Pa() {
        var a = Ea;
        a || (a = new Oa, Ga().gd && (Ea = a));
        return a
    }

    function Qa() {
        this.data = Ha("dc")
    }

    function Ra() {
        var a = Fa;
        a || (a = new Qa, Ga().gd && (Fa = a));
        return a
    };
    var Ua;

    function Va(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };
    var Wa = Array.prototype.indexOf ? function(a, b) {
            return Array.prototype.indexOf.call(a, b, void 0)
        } : function(a, b) {
            if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            for (var c = 0; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        Xa = Array.prototype.forEach ? function(a, b) {
            Array.prototype.forEach.call(a, b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
        },
        Ya = Array.prototype.filter ? function(a, b) {
            return Array.prototype.filter.call(a,
                b, void 0)
        } : function(a, b) {
            for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
                if (g in f) {
                    var h = f[g];
                    b.call(void 0, h, g, a) && (d[e++] = h)
                }
            return d
        };

    function Za(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function $a(a) {
        var b = [],
            c = 0,
            d;
        for (d in a) b[c++] = d;
        return b
    };
    var ab;

    function bb() {
        if (void 0 === ab) {
            var a = null,
                b = t.trustedTypes;
            if (b && b.createPolicy) try {
                a = b.createPolicy("goog#html", {
                    createHTML: Aa,
                    createScript: Aa,
                    createScriptURL: Aa
                })
            } catch (c) {
                t.console && t.console.error(c.message)
            }
            ab = a
        }
        return ab
    };

    function cb(a, b) {
        this.Cd = a === db && b || "";
        this.Jd = eb
    }
    cb.prototype.fa = !0;
    cb.prototype.ea = function() {
        return this.Cd
    };

    function fb(a) {
        return a instanceof cb && a.constructor === cb && a.Jd === eb ? a.Cd : "type_error:Const"
    }
    var eb = {},
        db = {};
    var gb = /<[^>]*>|&[^;]+;/g;

    function hb(a, b) {
        return b ? a.replace(gb, "") : a
    }
    var kb = RegExp("[A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]"),
        lb = RegExp("^[^A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff]*[\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc]"),
        mb = /^http:\/\/.*/,
        nb = /\s+/,
        ob = /[\d\u06f0-\u06f9]/;

    function pb(a, b) {
        this.Gc = b === qb ? a : ""
    }
    m = pb.prototype;
    m.fa = !0;
    m.ea = function() {
        return this.Gc.toString()
    };
    m.nc = !0;
    m.ib = function() {
        return 1
    };

    function rb(a, b, c) {
        a = sb.exec(tb(a).toString());
        var d = a[3] || "";
        return ub(a[1] + vb("?", a[2] || "", b) + vb("#", d, c))
    }
    m.toString = function() {
        return this.Gc + ""
    };

    function tb(a) {
        return a instanceof pb && a.constructor === pb ? a.Gc : "type_error:TrustedResourceUrl"
    }

    function wb() {
        var a = {},
            b = fb(new cb(db, "https://fonts.googleapis.com/css"));
        if (!xb.test(b)) throw Error("Invalid TrustedResourceUrl format: " + b);
        var c = b.replace(yb, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(a, e)) throw Error('Found marker, "' + e + '", in format string, "' + b + '", but no valid label mapping found in args: ' + JSON.stringify(a));
            d = a[e];
            return d instanceof cb ? fb(d) : encodeURIComponent(String(d))
        });
        return ub(c)
    }
    var yb = /%{(\w+)}/g,
        xb = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        sb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        qb = {};

    function ub(a) {
        var b = bb();
        a = b ? b.createScriptURL(a) : a;
        return new pb(a, qb)
    }

    function vb(a, b, c) {
        if (null == c) return b;
        if ("string" === typeof c) return c ? a + encodeURIComponent(c) : "";
        for (var d in c)
            if (Object.prototype.hasOwnProperty.call(c, d)) {
                var e = c[d];
                e = Array.isArray(e) ? e : [e];
                for (var f = 0; f < e.length; f++) {
                    var g = e[f];
                    null != g && (b || (b = a), b += (b.length > a.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)))
                }
            }
        return b
    };
    var zb = String.prototype.trim ? function(a) {
            return a.trim()
        } : function(a) {
            return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
        },
        Ab = /&/g,
        Bb = /</g,
        Cb = />/g,
        Db = /"/g,
        Eb = /'/g,
        Fb = /\x00/g,
        Gb = /[\x00&<>"']/;

    function Hb(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function Ib(a, b) {
        this.Fc = b === Jb ? a : ""
    }
    m = Ib.prototype;
    m.fa = !0;
    m.ea = function() {
        return this.Fc.toString()
    };
    m.nc = !0;
    m.ib = function() {
        return 1
    };
    m.toString = function() {
        return this.Fc.toString()
    };

    function Kb(a) {
        return a instanceof Ib && a.constructor === Ib ? a.Fc : "type_error:SafeUrl"
    }
    var Lb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,
        Jb = {};
    var Mb = {};

    function Nb(a, b) {
        this.Ec = b === Mb ? a : "";
        this.fa = !0
    }
    Nb.prototype.ea = function() {
        return this.Ec
    };
    Nb.prototype.toString = function() {
        return this.Ec.toString()
    };
    var Ob = {};

    function Pb(a, b) {
        this.Dc = b === Ob ? a : "";
        this.fa = !0
    }
    Pb.prototype.ea = function() {
        return this.Dc
    };
    Pb.prototype.toString = function() {
        return this.Dc.toString()
    };

    function Qb() {
        var a = t.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function Rb(a) {
        return -1 != Qb().indexOf(a)
    };

    function Sb() {};
    var Vb = {};

    function Wb(a, b, c) {
        this.Cc = c === Vb ? a : "";
        this.we = b;
        this.fa = this.nc = !0
    }
    Wb.prototype.ib = function() {
        return this.we
    };
    Wb.prototype.ea = function() {
        return this.Cc.toString()
    };
    Wb.prototype.toString = function() {
        return this.Cc.toString()
    };

    function Xb(a) {
        return a instanceof Wb && a.constructor === Wb ? a.Cc : "type_error:SafeHtml"
    }

    function Yb(a) {
        if (a instanceof Wb) return a;
        var b = "object" == typeof a,
            c = null;
        b && a.nc && (c = a.ib());
        a = b && a.fa ? a.ea() : String(a);
        Gb.test(a) && (-1 != a.indexOf("&") && (a = a.replace(Ab, "&amp;")), -1 != a.indexOf("<") && (a = a.replace(Bb, "&lt;")), -1 != a.indexOf(">") && (a = a.replace(Cb, "&gt;")), -1 != a.indexOf('"') && (a = a.replace(Db, "&quot;")), -1 != a.indexOf("'") && (a = a.replace(Eb, "&#39;")), -1 != a.indexOf("\x00") && (a = a.replace(Fb, "&#0;")));
        return Zb(a, c)
    }

    function Zb(a, b) {
        var c = bb();
        a = c ? c.createHTML(a) : a;
        return new Wb(a, b, Vb)
    }
    var $b = new Wb(t.trustedTypes && t.trustedTypes.emptyHTML || "", 0, Vb);
    var ac = function(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = Xb($b);
        return !b.parentElement
    });

    function bc(a, b) {
        b instanceof Ib || b instanceof Ib || (b = "object" == typeof b && b.fa ? b.ea() : String(b), Lb.test(b) || (b = "about:invalid#zClosurez"), b = new Ib(b, Jb));
        a.href = Kb(b)
    }

    function cc(a, b) {
        a.src = tb(b);
        (b = dc("script[nonce]", a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute("nonce", b)
    }
    var ec = /^[\w+/_-]+[=]{0,2}$/;

    function dc(a, b) {
        b = (b || t).document;
        return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute("nonce")) && ec.test(a) ? a : "" : ""
    };

    function fc(a) {
        return function() {
            a.onload = a.onerror = null
        }
    }

    function gc(a) {
        var b = new Image;
        b.onload = b.onerror = fc(b);
        b.src = a
    }

    function hc() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Date.now()).toString(36)
    };

    function ic(a) {
        if (null != a) return a
    }

    function jc() {
        return "object" === typeof sffeData_ ? sffeData_ : {}
    }

    function kc(a, b) {
        b = b || jc();
        return ic(b[a])
    }

    function lc(a) {
        var b = mc();
        b = b || jc();
        a = b[a];
        return null != a ? a : void 0
    }

    function nc(a, b) {
        b = b || jc();
        return !!b[a]
    }

    function mc() {
        return jc().m || {}
    }

    function oc(a) {
        return nc(a, mc().abf)
    };
    var pc = (nc("ah", mc()) ? "https:" : "") + "//www.google.com",
        qc = null;

    function rc() {
        qc || (qc = sc());
        return qc
    }

    function sc() {
        var a = ic(t.gwsBase_);
        return a || (a = kc("gws_host")) ? a : (a = kc("service_host")) ? (nc("ah", mc()) ? "https://" : "//") + a : pc
    };
    var tc = window.navigator ? window.navigator.userAgent : "";

    function uc() {
        var a = vc(wc);
        return -1 !== a ? 67 < a : !xc()
    }

    function xc() {
        return 0 != tc.indexOf("Opera") && (-1 != tc.indexOf("MSIE") || -1 != tc.indexOf("Trident"))
    }
    var wc = /Firefox\/(\d+)\./,
        yc = /Version\/(\d+)\..*Safari/,
        zc = /(?:iPhone|iPod|iPad).*AppleWebKit\/(\d+)(?!.*Version)/;

    function vc(a) {
        a = (a = a.exec(tc)) ? a[1] : "";
        return 0 < a.length && (a = parseInt(a, 10)) ? a : -1
    }

    function Ac() {
        var a = tc.toLowerCase();
        return -1 != a.indexOf("series60") || -1 != a.indexOf("series 60")
    };

    function Bc(a) {
        this.L = [];
        this.bc = [];
        a = a.split("#");
        this.ed = a[0];
        this.hb = a[1] || "";
        this.tb = xc() ? 1999 : 7950
    }

    function v(a, b, c, d) {
        (c || 0 === c || !1 === c) && (d ? a.L : a.bc).push([encodeURIComponent(b), encodeURIComponent("" + c)])
    }

    function Cc(a) {
        for (var b = a.ed, c = -1 !== a.ed.indexOf("?"), d = 0; d < a.bc.length; d++) {
            var e = (c ? "&" : "?") + a.bc[d].join("=");
            e.length + b.length <= a.tb && (b += e, c = !0)
        }
        for (e = d = 0; e < a.L.length; e++) d += a.L[e][0].length;
        d = a.tb - b.length - d - 2 * a.L.length;
        var f = Math.floor(d / a.L.length);
        if (1 <= f)
            for (e = 0; e < a.L.length; e++) {
                var g = a.L[e][1];
                f = g.length > f ? g.substring(0, f) : g;
                b += (c ? "&" : "?") + a.L[e][0] + "=" + f;
                d -= f.length;
                f = Math.floor(d / (a.L.length - e - 1));
                c = !0
            } else
                for (d = 0; d < a.L.length; d++) a.L[d][0].length + 3 + b.length <= a.tb && (b += (c ? "&" : "?") +
                    a.L[d].join("="), c = !0);
        b = b.substring(0, a.tb);
        b = b.replace(/%\w?$/, "");
        0 < a.hb.length && (b += "#" + a.hb);
        return b
    };
    var Dc = .01 > Math.random(),
        Ec = .1 > Math.random(),
        Fc = null;

    function Gc() {
        var a = Ga().caps;
        if (!a) return null;
        a = n(a);
        for (var b = a.next(); !b.done; b = a.next())
            if (b = b.value, "queryId" === b.n) return b.v;
        return null
    }

    function Hc(a) {
        this.He = hc;
        this.ga = gc;
        this.yb = Gc() || "";
        this.Cb = "";
        this.client = a || "unknown"
    }

    function Ic() {
        Fc || (Fc = new Hc(null));
        return Fc
    }

    function Jc(a) {
        var b = new Bc(rc() + "/afs/gen_204"),
            c = a.client;
        "unknown" === c && Na(Ma()) && (c = Na(Ma()));
        v(b, "client", c);
        v(b, "output", "uds_ads_only");
        v(b, "zx", a.He());
        a.yb && v(b, "aqid", a.yb);
        a.Cb && v(b, "psid", a.Cb);
        return b
    }

    function Kc(a, b, c) {
        var d = Jc(a);
        v(d, "pbt", b);
        v(d, "adbx", c.left);
        v(d, "adby", c.top);
        v(d, "adbh", c.height);
        v(d, "adbw", c.width);
        v(d, "adbah", c.Ua);
        v(d, "adbn", c.ce);
        v(d, "eawp", c.ze);
        v(d, "errv", c.Ve);
        v(d, "csadii", c.Le);
        v(d, "csadr", c.Rd);
        v(d, "csala", c.Xe);
        v(d, "lle", c.Ye ? 1 : 0);
        v(d, "llm", c.Ze || 0);
        v(d, "ifv", c.Pe ? 1 : 0);
        v(d, "usr", c.If ? 1 : 0);
        a.ga(Cc(d))
    }

    function Sc(a, b, c) {
        var d = Jc(a);
        v(d, "pbt", "tp");
        v(d, "errm", b);
        v(d, "emsg", c, !0);
        a.ga(Cc(d))
    };
    var Tc = {};

    function Uc() {
        var a = Vc();
        this.We = "ads." + Wc;
        this.Ue = a;
        this.od = "google.ads.search.Ads: ";
        this.Ge = Ic()
    }
    Uc.prototype.log = function(a, b) {
        if (!0 === window.IS_GOOGLE_AFS_IFRAME_ && window.parent == window) return !1;
        a = xa(a) ? a.message : a;
        var c = a + b;
        if (!Tc[c]) {
            Tc[c] = !0;
            c = this.Ge;
            var d = this.We,
                e = this.Ue,
                f = Jc(c);
            v(f, "pbt", "er");
            v(f, "errt", d);
            v(f, "errv", e);
            v(f, "errm", b);
            v(f, "emsg", a, !0);
            c.ga(Cc(f));
            return !0
        }
        return !1
    };

    function w(a, b) {
        var c = z;
        return function() {
            var d = Array.prototype.slice.call(arguments, 0) || [];
            try {
                return a.apply(this, d)
            } catch (f) {
                "string" === typeof f && (f = {
                    message: f
                });
                d = f.message;
                var e = -1 == d.indexOf(c.od);
                e && c.log(f, b);
                throw e ? c.od + d : d;
            }
        }
    }

    function A(a) {
        return "google.ads.search.Ads: " + a
    }

    function Vc() {
        var a = kc("hash"),
            b = "unknown";
        a && (b = a);
        return b
    }

    function B(a, b) {
        return w(a, b)
    }
    var Xc = kc("packages"),
        Wc = "unknown";
    null != Xc && (Wc = Xc);
    var z = new Uc;
    var Yc;
    a: {
        var Zc = window.parent;
        try {
            Yc = Zc.postMessage ? Zc : Zc.document.postMessage ? Zc.document : null;
            break a
        } catch (a) {}
        Yc = null
    }
    var $c = Yc,
        ad = {},
        bd = B(function() {
            for (var a = n($a(ad)), b = a.next(); !b.done; b = a.next()) b = b.value, ad.hasOwnProperty(b) && (ad[b].jb() || delete ad[b])
        }, "fsCDI"),
        cd = !1,
        ed = B(function() {
            cd || (cd = !0, window.setInterval(bd, 500), window.addEventListener("message", dd))
        }, "fsIL");

    function fd(a, b) {
        this.Lc = a;
        this.B = {};
        this.Ta = b;
        ad[this.Lc] = this;
        ed()
    }

    function gd(a, b) {
        return a.B.hasOwnProperty(b) ? a.B[b].value : null
    }

    function hd(a, b) {
        return a.B.hasOwnProperty(b) ? a.B[b].value : null
    }

    function C(a, b, c, d) {
        a.B.hasOwnProperty(b) || (a.B[b] = c());
        c = a.B[b];
        c.Nb = d || function() {};
        null != c.value && c.Nb(a, a.Lc, b, c.value)
    }
    fd.prototype.jb = function() {
        return !!(this.Ta && this.Ta.parentNode && this.Ta.contentWindow)
    };
    var id = {};

    function jd() {
        this.value = null;
        this.Nb = function() {};
        this.pa = !1
    }
    m = jd.prototype;
    m.ra = function() {};
    m.Oa = function() {};
    m.La = function() {};
    m.Da = function() {};
    m.cc = function(a) {
        return this.value == a
    };

    function kd() {
        jd.call(this)
    }
    ra(kd, jd);
    kd.prototype.ra = function(a, b) {
        return !!b
    };
    kd.prototype.Oa = function() {
        return this.value ? "t" : "f"
    };
    kd.prototype.La = function(a) {
        return "t" == a
    };
    kd.prototype.Da = function() {
        return 0
    };
    kd.j = function() {
        return new kd
    };

    function ld() {
        jd.call(this)
    }
    ra(ld, jd);
    ld.prototype.ra = function(a, b) {
        var c = parseInt(b, 10);
        a = a + " = " + b;
        if (isNaN(c)) return z.log(a, "sIGVVnn"), null;
        9007199254740991 < c && (z.log(a, "sIGVVtl"), c = 9007199254740991);
        0 > c && (z.log(a, "sIGVVts"), c = 0);
        return c
    };
    ld.prototype.Oa = function() {
        return this.value + ""
    };
    ld.prototype.La = function(a) {
        return parseInt(a, 10)
    };
    ld.prototype.Da = function() {
        return 1
    };
    ld.j = function() {
        return new ld
    };

    function E() {
        jd.call(this)
    }
    ra(E, jd);
    E.prototype.ra = function(a, b) {
        return b ? b.toString() : ""
    };
    E.prototype.Oa = function() {
        return this.value ? encodeURIComponent(this.value) : ""
    };
    E.prototype.La = function(a) {
        return decodeURIComponent(a)
    };
    E.prototype.Da = function() {
        return 2
    };
    E.j = function() {
        return new E
    };

    function md() {
        jd.call(this)
    }
    ra(md, jd);
    m = md.prototype;
    m.ra = function(a, b) {
        return b ? b : null
    };
    m.Oa = function() {
        return this.value ? encodeURIComponent(JSON.stringify(this.value)) : ""
    };
    m.La = function(a) {
        return a ? JSON.parse(decodeURIComponent(a)) : null
    };
    m.Da = function() {
        return 3
    };
    m.cc = function(a) {
        var b = JSON.stringify(this.value);
        a = JSON.stringify(a);
        return b === a
    };
    md.j = function() {
        return new md
    };
    var nd = {},
        od = (nd[0] = kd.j, nd[1] = ld.j, nd[2] = E.j, nd[3] = md.j, nd);

    function pd(a, b, c) {
        id.hasOwnProperty(a) || (id[a] = c());
        c = id[a];
        a = c.ra(a, b);
        null == a || c.cc(a) || (c.value = a, c.pa = !0)
    }

    function dd(a) {
        if (a = a || window.event)
            for (var b = n($a(ad)), c = b.next(); !c.done; c = b.next())
                if (c = ad[c.value], c.jb() && a.source == c.Ta.contentWindow) {
                    if ((a = a.data) && a.split && (a = a.split(","), "FSXDC" == a[0])) {
                        for (b = 1; b < a.length; b++) {
                            var d = a[b].split(":"),
                                e = decodeURIComponent(d[0]),
                                f = od[parseInt(d[1], 10)];
                            c.B.hasOwnProperty(e) || (c.B[e] = f());
                            d = c.B[e].La(d[2]);
                            c.B.hasOwnProperty(e) || (c.B[e] = f());
                            f = c.B[e];
                            d = f.ra(e, d);
                            null != d && f.value != d && (f.value = d, f.pa = !0)
                        }
                        a = n($a(c.B));
                        for (b = a.next(); !b.done; b = a.next()) b = b.value,
                            f = c.B[b], f.pa && (f.pa = !1, f.Nb(c, c.Lc, b, f.value))
                    }
                    break
                }
    }
    fd.prototype.jb = w(fd.prototype.jb, "fsiHVI");
    var qd = B(function() {
        if ($c) {
            for (var a = [], b = n($a(id)), c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = id[c];
                if (d.pa) {
                    var e = d.Oa();
                    a.push([encodeURIComponent(c), d.Da(), e].join(":"));
                    d.pa = !1
                }
            }
            0 != a.length && $c.postMessage(["FSXDC"].concat(a).join(","), "*")
        }
    }, "fsSC");

    function rd(a, b) {
        pd(a, b, ld.j)
    }

    function sd(a, b) {
        pd(a, b, kd.j)
    };

    function td(a, b) {
        for (var c = n(Object.keys(b)), d = c.next(); !d.done; d = c.next()) d = d.value, a[d] = {}, Object.assign(a[d], b[d])
    }

    function ud(a, b) {
        b = n(b);
        for (var c = b.next(); !c.done; c = b.next()) c = c.value, a.hasOwnProperty(c), a[c].vc = !0
    };

    function vd() {}
    vd.prototype.H = function() {
        return "true, false"
    };
    vd.prototype.D = function(a) {
        return 0 === a || 1 === a ? 1 === a : "true" == a || "on" == a || 1 == a ? !0 : "false" == a || "off" == a || !1 === a ? !1 : null
    };
    vd.prototype.G = function(a) {
        a = this.D(a);
        return null == a ? null : a ? 1 : 0
    };
    var F = new vd;

    function wd() {
        var a = xd;
        this.Ja = 8;
        this.Ia = Math.floor(a)
    }
    wd.prototype.H = function() {
        return this.Ja + "px - " + this.Ia + "px"
    };
    wd.prototype.D = function(a) {
        a = parseInt(a, 10);
        return isNaN(a) ? null : Math.max(this.Ja, Math.min(this.Ia, a))
    };
    wd.prototype.G = function(a) {
        return this.D(a)
    };

    function yd(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    m = yd.prototype;
    m.clone = function() {
        return new yd(this.x, this.y)
    };
    m.cc = function(a) {
        return a instanceof yd && (this == a ? !0 : this && a ? this.x == a.x && this.y == a.y : !1)
    };
    m.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    m.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    m.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };
    m.translate = function(a, b) {
        a instanceof yd ? (this.x += a.x, this.y += a.y) : (this.x += Number(a), "number" === typeof b && (this.y += b));
        return this
    };
    m.scale = function(a, b) {
        this.x *= a;
        this.y *= "number" === typeof b ? b : a;
        return this
    };

    function zd(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    m = zd.prototype;
    m.clone = function() {
        return new zd(this.top, this.right, this.bottom, this.left)
    };
    m.contains = function(a) {
        return this && a ? a instanceof zd ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };
    m.expand = function(a, b, c, d) {
        xa(a) ? (this.top -= a.top, this.right += a.right, this.bottom += a.bottom, this.left -= a.left) : (this.top -= a, this.right += Number(b), this.bottom += Number(c), this.left -= Number(d));
        return this
    };
    m.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    m.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    m.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };
    m.translate = function(a, b) {
        a instanceof yd ? (this.left += a.x, this.right += a.x, this.top += a.y, this.bottom += a.y) : (this.left += a, this.right += a, "number" === typeof b && (this.top += b, this.bottom += b));
        return this
    };
    m.scale = function(a, b) {
        b = "number" === typeof b ? b : a;
        this.left *= a;
        this.right *= a;
        this.top *= b;
        this.bottom *= b;
        return this
    };

    function Ad(a) {
        Ad[" "](a);
        return a
    }
    Ad[" "] = function() {};

    function Bd(a) {
        var b = Cd;
        return Object.prototype.hasOwnProperty.call(b, "10") ? b["10"] : b["10"] = a("10")
    };
    var Dd = Rb("Opera"),
        Ed = Rb("Trident") || Rb("MSIE"),
        Fd = Rb("Edge"),
        Gd = Rb("Gecko") && !(-1 != Qb().toLowerCase().indexOf("webkit") && !Rb("Edge")) && !(Rb("Trident") || Rb("MSIE")) && !Rb("Edge"),
        Hd = -1 != Qb().toLowerCase().indexOf("webkit") && !Rb("Edge");

    function Id() {
        var a = t.document;
        return a ? a.documentMode : void 0
    }
    var Jd;
    a: {
        var Kd = "",
            Ld = function() {
                var a = Qb();
                if (Gd) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (Fd) return /Edge\/([\d\.]+)/.exec(a);
                if (Ed) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (Hd) return /WebKit\/(\S+)/.exec(a);
                if (Dd) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();Ld && (Kd = Ld ? Ld[1] : "");
        if (Ed) {
            var Md = Id();
            if (null != Md && Md > parseFloat(Kd)) {
                Jd = String(Md);
                break a
            }
        }
        Jd = Kd
    }
    var Nd = Jd,
        Cd = {};

    function Od() {
        return Bd(function() {
            for (var a = 0, b = zb(String(Nd)).split("."), c = zb("10").split("."), d = Math.max(b.length, c.length), e = 0; 0 == a && e < d; e++) {
                var f = b[e] || "",
                    g = c[e] || "";
                do {
                    f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                    g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                    if (0 == f[0].length && 0 == g[0].length) break;
                    a = Hb(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Hb(0 == f[2].length, 0 == g[2].length) || Hb(f[2], g[2]);
                    f = f[3];
                    g = g[3]
                } while (0 == a)
            }
            return 0 <= a
        })
    }
    var Pd;
    if (t.document && Ed) {
        var Qd = Id();
        Pd = Qd ? Qd : parseInt(Nd, 10) || void 0
    } else Pd = void 0;
    var Rd = Pd;

    function Sd(a, b) {
        this.width = a;
        this.height = b
    }
    m = Sd.prototype;
    m.clone = function() {
        return new Sd(this.width, this.height)
    };
    m.aspectRatio = function() {
        return this.width / this.height
    };
    m.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    m.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    m.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    m.scale = function(a, b) {
        this.width *= a;
        this.height *= "number" === typeof b ? b : a;
        return this
    };

    function Td(a) {
        return a ? new Ud(Vd(a)) : Ua || (Ua = new Ud)
    }

    function Wd(a, b) {
        var c = document;
        b = b || c;
        var d = a && "*" != a ? String(a).toUpperCase() : "";
        if (b.querySelectorAll && b.querySelector) return b.querySelectorAll(d + ".b_");
        if (b.getElementsByClassName) {
            a = b.getElementsByClassName("b_");
            if (d) {
                b = {};
                for (var e = c = 0, f; f = a[e]; e++) d == f.nodeName && (b[c++] = f);
                b.length = c;
                return b
            }
            return a
        }
        a = b.getElementsByTagName(d || "*");
        b = {};
        for (e = c = 0; f = a[e]; e++) {
            d = f.className;
            var g;
            if (g = "function" == typeof d.split) g = 0 <= Wa(d.split(/\s+/), "b_");
            g && (b[c++] = f)
        }
        b.length = c;
        return b
    }

    function Xd(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new Sd(a.clientWidth, a.clientHeight)
    }

    function Yd(a) {
        return a.scrollingElement ? a.scrollingElement : Hd || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement
    }

    function Zd(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!wa(f) || xa(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (xa(f)) {
                            var g = "function" == typeof f.item || "string" == typeof f.item;
                            break a
                        }
                        if ("function" === typeof f) {
                            g = "function" == typeof f.item;
                            break a
                        }
                    }
                    g = !1
                }
                Xa(g ? Za(f) : f, d)
            }
        }
    }

    function $d(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function Vd(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }

    function Ud(a) {
        this.P = a || t.document || document
    }
    m = Ud.prototype;
    m.getElementsByTagName = function(a, b) {
        return (b || this.P).getElementsByTagName(String(a))
    };
    m.createElement = function(a) {
        return $d(this.P, a)
    };
    m.createTextNode = function(a) {
        return this.P.createTextNode(String(a))
    };
    m.appendChild = function(a, b) {
        a.appendChild(b)
    };
    m.append = function(a, b) {
        Zd(Vd(a), a, arguments)
    };
    m.canHaveChildren = function(a) {
        if (1 != a.nodeType) return !1;
        switch (a.tagName) {
            case "APPLET":
            case "AREA":
            case "BASE":
            case "BR":
            case "COL":
            case "COMMAND":
            case "EMBED":
            case "FRAME":
            case "HR":
            case "IMG":
            case "INPUT":
            case "IFRAME":
            case "ISINDEX":
            case "KEYGEN":
            case "LINK":
            case "NOFRAMES":
            case "NOSCRIPT":
            case "META":
            case "OBJECT":
            case "PARAM":
            case "SCRIPT":
            case "SOURCE":
            case "STYLE":
            case "TRACK":
            case "WBR":
                return !1
        }
        return !0
    };
    m.removeNode = function(a) {
        return a && a.parentNode ? a.parentNode.removeChild(a) : null
    };
    m.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function ae(a, b) {
        a: {
            var c = Vd(a);
            if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(a, null))) {
                c = c[b] || c.getPropertyValue(b) || "";
                break a
            }
            c = ""
        }
        return c || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function be(a) {
        try {
            return a.getBoundingClientRect()
        } catch (b) {
            return {
                left: 0,
                top: 0,
                right: 0,
                bottom: 0
            }
        }
    }

    function ce(a) {
        if (Ed && !(8 <= Number(Rd))) return a.offsetParent;
        var b = Vd(a),
            c = ae(a, "position"),
            d = "fixed" == c || "absolute" == c;
        for (a = a.parentNode; a && a != b; a = a.parentNode)
            if (11 == a.nodeType && a.host && (a = a.host), c = ae(a, "position"), d = d && "static" == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || "fixed" == c || "absolute" == c || "relative" == c)) return a;
        return null
    }

    function de(a) {
        var b = Vd(a),
            c = new yd(0, 0);
        var d = b ? Vd(b) : document;
        d = !Ed || 9 <= Number(Rd) || "CSS1Compat" == Td(d).P.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = be(a);
        d = Td(b).P;
        b = Yd(d);
        d = d.parentWindow || d.defaultView;
        b = Ed && Od() && d.pageYOffset != b.scrollTop ? new yd(b.scrollLeft, b.scrollTop) : new yd(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function ee(a) {
        if (1 == a.nodeType) return a = be(a), new yd(a.left, a.top);
        a = a.changedTouches ? a.changedTouches[0] : a;
        return new yd(a.clientX, a.clientY)
    }

    function fe(a) {
        var b = ge;
        if ("none" != ae(a, "display")) return b(a);
        var c = a.style,
            d = c.display,
            e = c.visibility,
            f = c.position;
        c.visibility = "hidden";
        c.position = "absolute";
        c.display = "inline";
        a = b(a);
        c.display = d;
        c.position = f;
        c.visibility = e;
        return a
    }

    function ge(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = Hd && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = be(a), new Sd(a.right - a.left, a.bottom - a.top)) : new Sd(b, c)
    };

    function he(a) {
        var b = a.indexOf("#");
        return 0 > b ? a : a.substr(0, b)
    }
    var ie = /#|$/;

    function je(a, b) {
        var c = a.search(ie);
        a: {
            var d = 0;
            for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                var f = a.charCodeAt(d - 1);
                if (38 == f || 63 == f)
                    if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f) break a;
                d += e + 1
            }
            d = -1
        }
        if (0 > d) return null;
        e = a.indexOf("&", d);
        if (0 > e || e > c) e = c;
        d += b.length + 1;
        return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, " "))
    };
    var ke = {},
        le = (ke.ads = 0, ke.plas = 1, ke.relatedsearch = 3, ke),
        me = !window.IS_GOOGLE_AFS_IFRAME_ || Pa().data.cglfa ? 8 : 6,
        xd = !window.IS_GOOGLE_AFS_IFRAME_ || Pa().data.cglfa ? 24 : 16,
        ne = new wd,
        oe = {
            content: "c",
            query: "q",
            domain: "d"
        };

    function pe(a, b, c) {
        if (!b.g) return c;
        c = b.g.D(c);
        if (null == c && !b.C) throw A(a + " has an invalid value. Valid input values: [" + b.g.H() + "].");
        return c
    }

    function qe(a) {
        return !!F.D(a.waitForAds)
    }

    function re(a) {
        return /^(?:(?:slave-\d+(?:-(?:a|b))?)|(?:master-(?:a|b)))-\d+$/.test(a)
    }

    function se(a) {
        return (a = a.match(/slave-(\d+)-/)) ? parseInt(a[1], 10) + 1 : 1
    }

    function te(a, b, c) {
        for (var d = [], e, f = 0; e = c[f]; f++) e = new Bc(e), v(e, a, b), d.push(Cc(e));
        return d
    }

    function ue(a, b) {
        a = he(a);
        if ((a = a.match(new RegExp("[?&]" + b + "=([^&]*)"))) && a[1]) try {
            return decodeURIComponent(a[1])
        } catch (c) {}
        return null
    }

    function ve(a) {
        a = he(a);
        var b = {};
        a.replace(/[?&]+([^=&]+)=?([^&]*)/gi, function(c, d, e) {
            try {
                b[decodeURIComponent(d)] = decodeURIComponent(e)
            } catch (f) {}
        });
        return b
    }

    function we() {
        var a = void 0 === a ? window.location.href : a;
        var b = kc("lldl", mc());
        if (b && (b = new RegExp("(" + atob(b).replace(/,/g, ")|(") + ")"), a.match(b))) return !1;
        a = oc("_enableLazyLoading");
        return !!("IntersectionObserver" in window && a)
    }

    function xe(a) {
        var b = new zd(0, Infinity, Infinity, 0);
        for (var c = Td(a), d = c.P.body, e = c.P.documentElement, f = Yd(c.P), g = a; g = ce(g);)
            if (!(Ed && 0 == g.clientWidth || Hd && 0 == g.clientHeight && g == d) && g != d && g != e && "visible" != ae(g, "overflow")) {
                var h = de(g),
                    k = new yd(g.clientLeft, g.clientTop);
                h.x += k.x;
                h.y += k.y;
                b.top = Math.max(b.top, h.y);
                b.right = Math.min(b.right, h.x + g.clientWidth);
                b.bottom = Math.min(b.bottom, h.y + g.clientHeight);
                b.left = Math.max(b.left, h.x)
            }
        d = f.scrollLeft;
        f = f.scrollTop;
        b.left = Math.max(b.left, d);
        b.top = Math.max(b.top,
            f);
        c = c.P;
        c = Xd(c.parentWindow || c.defaultView || window);
        b.right = Math.min(b.right, d + c.width);
        b.bottom = Math.min(b.bottom, f + c.height);
        b = 0 <= b.top && 0 <= b.left && b.bottom > b.top && b.right > b.left ? b : null;
        c = new yd(a.offsetLeft, a.offsetTop);
        f = fe(a);
        a = new zd(c.y, c.x + f.width, c.y + f.height, c.x);
        c = .3 * f.height;
        (f = !b) || (c = -c, f = !(b.left <= a.right + c && a.left <= b.right + c && b.top <= a.bottom + c && a.top <= b.bottom + c));
        return !f
    };
    var ye = {};

    function Be(a) {
        var b = {
                names: [],
                frames: []
            },
            c;
        for (c in ye) {
            var d = Ce(c, a);
            null == d ? delete ye[c] : (b.names.push(c), b.frames.push(d))
        }
        return b
    }
    Be = w(Be, "cFr");

    function Ce(a, b) {
        if (De) return De(a, b);
        if (a == b.name) return window;
        try {
            var c = window.parent.frames[a + "|" + window.name];
            if (c) return c
        } catch (d) {}
        try {
            return window.parent.frames[a] || null
        } catch (d) {}
        return null
    }
    Ce = w(Ce, "gFBN");
    var De = null,
        Ee = Be,
        Fe = Ce;

    function Ge(a, b, c) {
        c = void 0 === c ? [] : c;
        this.frameWidth = a;
        this.frameHeight = b;
        this.Ua = c
    };

    function He(a, b, c) {
        var d = !1;
        a.addEventListener(b, c);
        a.addEventListener(b, function() {
            d || (a.removeEventListener(b, c), d = !0)
        })
    };

    function Ie() {
        var a, b;
        return {
            promise: new Promise(function(c, d) {
                a = c;
                b = d
            }),
            resolve: a,
            reject: b
        }
    }

    function Je(a, b) {
        var c = Ie();
        a.setTimeout(function() {
            c.resolve(b)
        }, 0);
        return c.promise
    }

    function Ke(a, b) {
        var c = Ie();
        window.setTimeout(function() {
            c.resolve(b)
        }, a);
        return c.promise
    }

    function Le(a) {
        var b = [],
            c = 0,
            d = a.length;
        return new Promise(function(e, f) {
            if (d)
                for (var g = {
                        ia: 0
                    }; g.ia < d; g = {
                        ia: g.ia
                    }, g.ia++) Promise.resolve(a[g.ia]).then(function(h) {
                    return function(k) {
                        b[h.ia] = k;
                        c += 1;
                        c === d && e(b)
                    }
                }(g)).catch(function(h) {
                    f(h)
                });
            else e(b)
        })
    };
    var Me = null;

    function Ne() {
        if (null != Me) return Me;
        var a = document.createElement("div");
        a.style.width = "1px";
        a.style.height = "1px";
        a.style.border = "1px solid black";
        a.style.padding = "1px";
        a.style.visibility = "hidden";
        document.body.appendChild(a);
        var b = a.offsetWidth;
        document.body.removeChild(a);
        return Me = 5 == b
    }

    function Oe(a) {
        return parseFloat(a.replace("px", "")) || 0
    }

    function Pe(a, b) {
        "string" == typeof a && (a = document.getElementById(a));
        var c = document.defaultView || {},
            d = b ? a.offsetHeight : a.offsetWidth;
        b = b ? ["Top", "Bottom"] : ["Right", "Left"];
        var e = !1;
        var f = Ne() ? ["margin"] : ["border", "margin", "padding"];
        var g = f.length,
            h = b.length;
        if (c && c.getComputedStyle && (c = c.getComputedStyle(a))) {
            e = !0;
            for (var k = 0; k < g; k++)
                for (var l = 0; l < h; l++) d += Oe(c.getPropertyValue([f[k], b[l].toLowerCase()].join("-")))
        }
        if (!e && (a = a.currentStyle)) {
            if (!Ne())
                for (e = 0; e < h; e++) d += Oe(a[["border", b[e], "Width"].join("")]);
            for (e = 0; e < g; e++)
                if ("border" != f[e])
                    for (c = 0; c < h; c++) d += Oe(a[[f[e], b[c]].join("")])
        }
        return d
    };

    function Qe(a) {
        if (Re) return Re(a);
        a = Ee(a);
        var b = a.names;
        return Se(a.frames).then(function(c) {
            for (var d = 0; d < c.length; d++) {
                var e = b[d],
                    f = c[d];
                if (null != f) {
                    var g = {};
                    f = (g.fw = f.frameWidth, g.fh = f.frameHeight, g.ah = f.Ua, g);
                    pd(e + ".fs", f, md.j)
                }
            }
            qd()
        })
    }
    Qe = w(Qe, "sPH");
    var Re = null,
        Te = [];

    function Ue(a) {
        try {
            var b = a.document.getElementById("adBlock");
            return Pe(b, !0)
        } catch (c) {
            return null
        }
    }
    Ue = w(Ue, "gBH");

    function Ve(a) {
        try {
            var b = a.document.getElementById("adBlock");
            return Pe(b, !1)
        } catch (c) {
            return null
        }
    }
    Ve = w(Ve, "gBW");

    function We(a) {
        var b = [],
            c = n(a.document.getElementsByTagName("img"));
        for (a = c.next(); !a.done; a = c.next()) a = a.value, null == a.getAttribute("loading") && b.push(a);
        b = n(b);
        for (a = b.next(); !a.done; a = b.next()) {
            c = Te;
            var d = c.push;
            a = a.value;
            var e = Ie();
            a.complete ? e.resolve() : (He(a, "load", e.resolve), He(a, "error", e.resolve));
            d.call(c, e.promise)
        }
        return Le(Te)
    }
    We = w(We, "gFH_wfip");

    function Se(a) {
        for (var b = [], c = 0; c < a.length; c++) b.push(We(a[c]));
        return Promise.race([Promise.all(b), Ke(500, "timedOutWaitingForImages")]).then(function(d) {
            if ("string" === typeof d && (d = Ic(), Dc)) {
                var e = Jc(d);
                v(e, "pbt", "ui");
                v(e, "action", "llimsg");
                d.ga(Cc(e))
            }
            d = [];
            for (e = 0; e < a.length; e++) {
                var f = a[e],
                    g = Ue(f),
                    h = Ve(f);
                Xe(f, g, h) ? d.push(new Ge(1, 1)) : (f = Ye(f), d.push(new Ge(h, g, f)))
            }
            return d
        })
    }
    Se = w(Se, "gFH");
    var Ye = B(function(a) {
        var b = [];
        a = n(a.document.querySelectorAll(".si101"));
        for (var c = a.next(); !c.done; c = a.next()) b.push(Pe(c.value, !0));
        return b
    }, "gAHIF");

    function Xe(a, b, c) {
        return ("number" == typeof b && 16 > b || "number" == typeof c && 16 > c) && (a = a.document.getElementById("adBlock")) && "" != a.innerHTML ? !0 : !1
    }
    Xe = w(Xe, "iCSI");
    var Ze = Qe;

    function $e(a, b) {
        b = b[a];
        b || (z.log("frameOptions is undefined for " + a, "fAU"), b = {});
        return b
    }
    $e = w($e, "gFO");

    function af(a) {
        return function(b, c) {
            return "undefined" == typeof a[b] ? c || null : a[b]
        }
    }

    function bf(a) {
        return function(b, c) {
            if (a.hasOwnProperty(b)) {
                b = a[b].split(",");
                for (var d = 0; d < b.length; d++)
                    if (b[d] == c) return !0;
                return !1
            }
            return !0
        }
    }

    function cf(a) {
        return (a = a.width) && "auto" != a ? a : "100%"
    }

    function df(a) {
        var b = {
            sa: !1,
            Uc: null,
            $c: null
        };
        a.verticalSpacing && (a = a.verticalSpacing / 2, b.sa = !0, b.Uc = Math.floor(a), b.$c = Math.ceil(a));
        return b
    }

    function ef(a) {
        if (a.fontSizeTitle) return a.fontSizeTitle;
        a = Ra();
        return a.data.hm || a.data.t ? 18 : null
    }
    var ff = $e;
    /*

     SPDX-License-Identifier: Apache-2.0
    */
    function gf(a) {
        if (null !== a && void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
            if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
        }
    };

    function hf(a, b) {
        a.write(Xb(b))
    };
    var jf = {},
        kf = {},
        lf = {},
        mf = {},
        nf = {};

    function of () {
        throw Error("Do not instantiate directly");
    } of .prototype.aa = null; of .prototype.toString = function() {
        return this.content
    };

    function pf() { of .call(this)
    }
    za(pf, of );
    pf.prototype.N = jf;

    function qf() { of .call(this)
    }
    za(qf, of );
    qf.prototype.N = kf;
    qf.prototype.aa = 1;

    function rf() { of .call(this)
    }
    za(rf, of );
    rf.prototype.N = mf;
    rf.prototype.aa = 1;

    function sf() { of .call(this)
    }
    za(sf, of );
    sf.prototype.N = nf;
    sf.prototype.aa = 1;

    function tf(a, b) {
        return null != a && a.N === b
    };

    function uf(a) {
        if (null != a) switch (a.aa) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function vf(a) {
        return tf(a, jf) ? a : a instanceof Wb ? H(Xb(a).toString(), a.ib()) : H(String(String(a)).replace(wf, xf), uf(a))
    }

    function yf(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c) {
            return new b(String(c))
        }
    }
    var H = function(a) {
            function b(c) {
                this.content = c
            }
            b.prototype = a.prototype;
            return function(c, d) {
                c = new b(String(c));
                void 0 !== d && (c.aa = d);
                return c
            }
        }(pf),
        zf = yf(rf),
        Af = yf(sf);

    function Bf(a) {
        var b = [],
            c;
        for (c in a) b.push(c);
        return b
    }

    function Cf(a) {
        if (null == a) throw Error("unexpected null value");
        return a
    }

    function I(a, b) {
        return a && b && a.Qe && b.Qe ? a.N !== b.N ? !1 : a.toString() === b.toString() : a instanceof of && b instanceof of ? a.N != b.N ? !1 : a.toString() == b.toString() : a == b
    }

    function K(a) {
        return a instanceof of ? !!a.content : !!a
    }

    function Df(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c) {
            return (c = String(c)) ? new b(c) : ""
        }
    }
    var Ef = function(a) {
            function b(c) {
                this.content = c
            }
            b.prototype = a.prototype;
            return function(c, d) {
                c = String(c);
                if (!c) return "";
                c = new b(c);
                void 0 !== d && (c.aa = d);
                return c
            }
        }(pf),
        Ff = Df(qf),
        Gf = Df(rf),
        Hf = Df(sf);

    function If(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function L(a) {
        if (tf(a, jf)) {
            var b = String;
            a = String(a.content).replace(Jf, "").replace(Kf, "&lt;");
            b = b(a).replace(Lf, xf)
        } else b = String(a).replace(wf, xf);
        return b
    }

    function Mf(a) {
        tf(a, mf) ? a = a.content : (a = String(a), a = Nf.test(a) ? a : "zSoyz");
        return a
    }

    function Of(a) {
        tf(a, mf) && (a = a.content);
        var b;
        if (b = a) b = !(1 <= a.length && " " === a.substring(0, 1));
        return (b ? " " : "") + a
    }

    function Pf(a) {
        tf(a, kf) || tf(a, lf) ? a = Qf(a) : a instanceof Ib ? a = Qf(Kb(a)) : a instanceof pb ? a = Qf(tb(a).toString()) : (a = String(a), a = Rf.test(a) ? a.replace(Sf, Tf) : "about:invalid#zSoyz");
        return a
    }

    function Uf(a) {
        tf(a, kf) || tf(a, lf) ? a = Qf(a) : a instanceof Ib ? a = Qf(Kb(a)) : a instanceof pb ? a = Qf(tb(a).toString()) : (a = String(a), a = Vf.test(a) ? a.replace(Sf, Tf) : "about:invalid#zSoyz");
        return a
    }

    function O(a) {
        tf(a, nf) ? a = If(a.content) : null == a ? a = "" : a instanceof Nb ? a = If(a instanceof Nb && a.constructor === Nb ? a.Ec : "type_error:SafeStyle") : a instanceof Pb ? a = If(a instanceof Pb && a.constructor === Pb ? a.Dc : "type_error:SafeStyleSheet") : (a = String(a), a = Wf.test(a) ? a : "zSoyz");
        return a
    }
    var Xf = {
        "\x00": "&#0;",
        "\t": "&#9;",
        "\n": "&#10;",
        "\v": "&#11;",
        "\f": "&#12;",
        "\r": "&#13;",
        " ": "&#32;",
        '"': "&quot;",
        "&": "&amp;",
        "'": "&#39;",
        "-": "&#45;",
        "/": "&#47;",
        "<": "&lt;",
        "=": "&#61;",
        ">": "&gt;",
        "`": "&#96;",
        "\u0085": "&#133;",
        "\u00a0": "&#160;",
        "\u2028": "&#8232;",
        "\u2029": "&#8233;"
    };

    function xf(a) {
        return Xf[a]
    }
    var Yf = {
        "\x00": "\\0 ",
        "\b": "\\8 ",
        "\t": "\\9 ",
        "\n": "\\a ",
        "\v": "\\b ",
        "\f": "\\c ",
        "\r": "\\d ",
        '"': "\\22 ",
        "&": "\\26 ",
        "'": "\\27 ",
        "(": "\\28 ",
        ")": "\\29 ",
        "*": "\\2a ",
        "/": "\\2f ",
        ":": "\\3a ",
        ";": "\\3b ",
        "<": "\\3c ",
        "=": "\\3d ",
        ">": "\\3e ",
        "@": "\\40 ",
        "\\": "\\5c ",
        "{": "\\7b ",
        "}": "\\7d ",
        "\u0085": "\\85 ",
        "\u00a0": "\\a0 ",
        "\u2028": "\\2028 ",
        "\u2029": "\\2029 "
    };

    function Zf(a) {
        return Yf[a]
    }
    var $f = {
        "\x00": "%00",
        "\u0001": "%01",
        "\u0002": "%02",
        "\u0003": "%03",
        "\u0004": "%04",
        "\u0005": "%05",
        "\u0006": "%06",
        "\u0007": "%07",
        "\b": "%08",
        "\t": "%09",
        "\n": "%0A",
        "\v": "%0B",
        "\f": "%0C",
        "\r": "%0D",
        "\u000e": "%0E",
        "\u000f": "%0F",
        "\u0010": "%10",
        "\u0011": "%11",
        "\u0012": "%12",
        "\u0013": "%13",
        "\u0014": "%14",
        "\u0015": "%15",
        "\u0016": "%16",
        "\u0017": "%17",
        "\u0018": "%18",
        "\u0019": "%19",
        "\u001a": "%1A",
        "\u001b": "%1B",
        "\u001c": "%1C",
        "\u001d": "%1D",
        "\u001e": "%1E",
        "\u001f": "%1F",
        " ": "%20",
        '"': "%22",
        "'": "%27",
        "(": "%28",
        ")": "%29",
        "<": "%3C",
        ">": "%3E",
        "\\": "%5C",
        "{": "%7B",
        "}": "%7D",
        "\u007f": "%7F",
        "\u0085": "%C2%85",
        "\u00a0": "%C2%A0",
        "\u2028": "%E2%80%A8",
        "\u2029": "%E2%80%A9",
        "\uff01": "%EF%BC%81",
        "\uff03": "%EF%BC%83",
        "\uff04": "%EF%BC%84",
        "\uff06": "%EF%BC%86",
        "\uff07": "%EF%BC%87",
        "\uff08": "%EF%BC%88",
        "\uff09": "%EF%BC%89",
        "\uff0a": "%EF%BC%8A",
        "\uff0b": "%EF%BC%8B",
        "\uff0c": "%EF%BC%8C",
        "\uff0f": "%EF%BC%8F",
        "\uff1a": "%EF%BC%9A",
        "\uff1b": "%EF%BC%9B",
        "\uff1d": "%EF%BC%9D",
        "\uff1f": "%EF%BC%9F",
        "\uff20": "%EF%BC%A0",
        "\uff3b": "%EF%BC%BB",
        "\uff3d": "%EF%BC%BD"
    };

    function Tf(a) {
        return $f[a]
    }
    var wf = /[\x00\x22\x26\x27\x3c\x3e]/g,
        Lf = /[\x00\x22\x27\x3c\x3e]/g,
        ag = /[\x00\x08-\x0d\x22\x26-\x2a\/\x3a-\x3e@\\\x7b\x7d\x85\xa0\u2028\u2029]/g,
        Sf = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
        Wf = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        Rf =
        /^(?:(?:https?|mailto|ftp):|[^&:\/?#]*(?:[\/?#]|$))/i,
        Vf = /^[^&:\/?#]*(?:[\/?#]|$)|^https?:|^ftp:|^data:image\/[a-z0-9+]+;base64,[a-z0-9+\/]+=*$|^blob:/i,
        Nf = /^(?!on|src|(?:action|archive|background|cite|classid|codebase|content|data|dsync|href|http-equiv|longdesc|style|usemap)\s*$)(?:[a-z0-9_$:-]*)$/i;

    function Qf(a) {
        return String(a).replace(Sf, Tf)
    }
    var Jf = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Kf = /</g;
    /*
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
    function bg(a) {
        return cg(a, void 0)
    }

    function cg(a, b) {
        b = (b || Td()).createElement("DIV");
        if (xa(a))
            if (a instanceof of ) {
                if (a.N !== jf) throw Error("Sanitized content was not of kind HTML.");
                a = Zb(a.toString(), a.aa || null)
            } else a = Yb("zSoyz");
        else a = Yb(String(a));
        if (ac())
            for (; b.lastChild;) b.removeChild(b.lastChild);
        b.innerHTML = Xb(a);
        return 1 == b.childNodes.length && (a = b.firstChild, 1 == a.nodeType) ? a : b
    }
    var dg = {};

    function eg(a) {
        var b = a.caps,
            c = a.Oe,
            d = a.Se,
            e = a.de,
            f = a.Jf,
            g = a.se,
            h = a.Ne,
            k = a.le,
            l = a.ke,
            q = a.Sd,
            p = a.re,
            x = a.pe,
            r = a.qe,
            y = a.ne,
            u = a.fontFamily,
            J = a.De,
            D = a.Fe,
            G = a.Ee,
            N = a.Ef,
            M = a.Ff,
            V = a.rf,
            ea = a.sf,
            W = a.qf,
            Lc = a.tf,
            Sa = a.pf,
            pa = a.bf,
            Mc = a.Kd,
            P = a.$d,
            Tb = a.ae,
            fa = a.be,
            ia = a.Zd,
            ta = a.Qd,
            ze = a.Ld,
            Nc = a.Md,
            Gg = a.Od,
            Hg = a.Nd,
            Oc = a.Pd,
            Pc = a.$e,
            Qc = a.Uf,
            Ae = a.Vf,
            Ig = a.Yd,
            Rc = a.type,
            Ta = a.te,
            ib = a.Je,
            jb = a.Ie,
            zj = "";
        a = b.isRtl ? "right" : "left";
        var Ub = b.isRtl ? "left" : "right";
        var Aj = f.sa ? "padding-top:" + O(f.Uc) + "px; padding-bottom:" + O(f.$c) + "px;" : c ||
            d ? "padding:7px 0;" : "";
        var Bj = G ? O(G) : d ? "15" : "13";
        if (K(Rc) && "relatedsearch" == Rc) {
            var Cj = jb ? "text-align:" + ("right" == a && "left" == jb ? "right" : "right" == a && "right" == jb ? "left" : O(jb)) + ";" : "";
            Ta = Ta ? K(ib) && K(jb) ? "center" == jb ? "padding-right:" + O(Math.floor(Ta / 2)) + "px; padding-left:" + O(Math.floor(Ta / 2)) + "px;" : "right" == jb ? "padding-" + O(a) + ":" + O(Ta) + "px;" : "padding-" + O(Ub) + ":" + O(Ta) + "px;" : "padding-right:" + O(Ta) + "px;" : "";
            ib = ".radlinkC{" + (K(ib) && D < G ? "padding:" + O(1 + (G - D)) + "px 4px;" : "padding:1px 4px;") + "word-break:break-word;}.col{" +
                Cj + (ib ? "border-" + O(Ub) + ":1px solid " + O(q) + ";" : "") + "vertical-align:top;" + Ta + "}" + (ib ? "#adBlock h2{float:" + O(a) + "; line-height:1.4em; vertical-align:top;" + (D >= G ? "padding:" + O(3 + (D - G)) + "px 4px;" : "padding:3px 4px;") + "}.ad{border-bottom:none;}.col.l{border-" + O(Ub) + ":none;}" : "#adBlock h2{text-align:" + O(a) + ";}")
        } else ib = "";
        G = zj;
        b = "<style>#response_debug_output{max-height:500px; overflow:auto;}body{" + (c ? "-webkit-text-size-adjust:100%;" : "") + "color:" + (p ? O(p) : "#000") + "; font-family:" + (Qc ? "'" + String(Qc).replace(ag,
            Zf) + "'," : "") + (u ? O(u) : "arial") + ", sans-serif; font-size:" + (c || d ? "14" : "12") + "px; width:" + O(e) + "; padding:0px; margin:0px;" + (K(r) && (K(Tb) || K(Mc)) ? "padding-right:2px;" : "") + (h && K(b.isRtl) ? "direction:rtl;" : "") + "}body{-webkit-tap-highlight-color:rgba(0,0,0,0); -webkit-tap-highlight-color:transparent;}a{-webkit-tap-highlight-color:initial;}.ad{padding:2px 0; margin:0px; word-wrap:break-word;" + Aj + (q ? "border-bottom:1px solid " + O(q) + ";" : "") + "}" + (K(Sa) && (!h || K(Rc) && "relatedsearch" == Rc) ? "." + O("a_") + ":hover{background-color:" +
            O(Sa) + ";}" : "") + ".ad.f{" + (f.sa ? "padding-top:2px;" : "") + "}.ad.fr{" + (f.sa ? "padding-top:2px;" : "") + "}.ad.l{" + (f.sa ? "padding-bottom:2px;" : "") + (q ? "border-bottom:0px;" : "") + "}.ad.lr{" + (f.sa ? "padding-bottom:2px;" : "") + "}#adBlock b{" + (l || h ? "" : "font-weight:normal;") + "}.ad span{_width:99%;}#adBlock{background:#FFF none repeat scroll 0 0; margin:0; padding:0;" + (x ? "background-color:" + O(x) + ";" : "") + (K(r) && K(P) ? "border-left:1px solid " + O(r) + ";" : "") + (K(r) && K(Tb) ? "border-right:1px solid " + O(r) + ";" : "") + (K(r) && K(fa) ? "border-top:1px solid " +
            O(r) + ";" : "") + (K(r) && K(ia) ? "border-bottom:1px solid " + O(r) + ";" : "") + "}#adBlock h2{font-size:" + Bj + "px; font-weight:normal;" + (Ig ? "padding-bottom:" + O(Ig) + "px;" : "padding:0;") + "margin:0;" + (K(J) || K(Ae) ? "font-family:" + (Ae ? "'" + String(Ae).replace(ag, Zf) + "'," : "") + (J ? O(J) + "," : "") + " sans-serif;" : "") + (b.isCse ? "text-align:" + O(a) + ";" : "") + "}#adBlock span.lhHeader{margin:3px 4px 0;}#adBlock h2 a, #adBlock h2{color:" + (y ? O(y) : "#676767") + "; text-decoration:none;}." + O("c_") + "{color:" + O(g) + ";}." + O("c_") + "{" + (D ? "font-size:" +
            O(D) + "px;" : "") + "font-weight:" + (N ? "bold" : "normal") + ";}." + O("c_") + "{" + (M ? "display:inline-block;" : "") + "line-height:" + (Pc ? O(Pc) + "px" : "1.4em") + ";" + (pa ? "text-decoration:none;" : "") + "margin:0; padding:0;}" + (Lc ? "." + O("c_") + ":hover {text-decoration:underline;}a{text-decoration:none;}" : "") + "h2 a:hover{color:" + (y ? O(y) : "#676767") + "; text-decoration:none; font-weight:normal; background-color:transparent;}a:hover{" + (V ? "font-weight:bold;" : "") + (ea ? "color:" + O(ea) + ";" : "") + (W ? "background-color:" + O(W) + ";" : "") + "}" + (K(ta) &&
            K(ze) && k ? ".adIcon{visibility:visible; width:" + O(ta) + "px; height:" + O(ze) + "px; border:none; float:" + O(a) + "; margin-" + O(a) + ":" + O(null != Gg ? Gg : 0) + "px; margin-" + O(Ub) + ":" + O(null != Hg ? Hg : 4) + "px; margin-top:" + O(null != Nc ? Nc : 4) + "px; margin-bottom:" + O(null != Oc ? Oc : 0) + "px;}.adD, ." + O("a_") + "{display:block; overflow:hidden;}" : "") + (c ? ".adD{clear:" + O(Ub) + ";}" : "") + ib;
        c = c || d ? Af("body{font-family:" + (Qc ? "'" + String(Qc).replace(ag, Zf) + "'," : "") + (u ? O(u) + "," : "") + '"Roboto","Helvetica Neue",arial,sans-serif;}.ad{margin:0; padding:0;}.' +
            O("c_") + "{line-height:" + (Pc ? O(Pc) : "20") + "px; margin:0;}td{padding:0px;}.adStd{clear:none;}" + (K(ta) && K(ze) && K(k) ? ".adIcon{margin-top:" + O(null != Nc ? Nc : 0) + "px; margin-bottom:" + O(null != Oc ? Oc : 0) + "px; margin-" + O(a) + ":0px;}" : "") + ".adStd{clear:none;}") : "";
        return H(G + (b + c + "</style>"))
    };

    function fg(a) {
        return a ? a : Ra().data.hm || Ra().data.t ? "#bdbdbd" : null
    }

    function gg(a, b, c) {
        function d(q) {
            return (q = e(q)) ? Af(q) : void 0
        }
        var e = af(c),
            f = bf(c),
            g = e("type") || "ads",
            h = Pa(),
            k = Ra(),
            l = "#0000CC";
        if (k.data.hm || k.data.t) l = "#1a0dab";
        l = e("colorTitleLink", l);
        a = {
            caps: a,
            de: cf(c),
            Jf: df(c),
            Sd: fg(e("colorAdSeparator")),
            Pf: 20,
            re: e("colorText"),
            se: l,
            pe: e("colorBackground"),
            qe: e("colorBorder"),
            ne: e("colorAttribution"),
            fontFamily: d("fontFamily"),
            De: d("fontFamilyAttribution"),
            Fe: ef(c) || e("fontSizeTitle"),
            Ee: e("fontSizeAttribution"),
            Ef: e("titleBold"),
            Ff: !k.data.hm,
            rf: e("rolloverLinkBold"),
            sf: e("rolloverLinkColor"),
            qf: e("rolloverLinkBackgroundColor"),
            tf: e("rolloverLinkUnderline"),
            pf: e("rolloverAdBackgroundColor"),
            bf: e("noTitleUnderline"),
            Mf: f("adBorderSelections", "left"),
            Kd: f("adBorderSelections", "right"),
            Nf: f("adBorderSelections", "top"),
            Lf: f("adBorderSelections", "bottom"),
            $d: f("borderSelections", "left"),
            ae: f("borderSelections", "right"),
            be: f("borderSelections", "top"),
            Zd: f("borderSelections", "bottom"),
            $e: e("lineHeightTitle"),
            Yd: e("attributionSpacingBelow"),
            Ne: !1,
            Oe: !!k.data.hm,
            Se: !!k.data.t,
            le: !!h.data.cucai,
            ke: !!h.data.cgab
        };
        e("adIconUrl") && (a.Qd = e("adIconWidth"), a.Ld = e("adIconHeight"), a.Md = e("adIconSpacingAbove"), a.Od = e("adIconSpacingBefore"), a.Nd = e("adIconSpacingAfter"), a.Pd = e("adIconSpacingBelow"));
        "relatedsearch" == g && (a.type = "relatedsearch", a.te = e("columnSpacing"), a.Je = e("horizontalFlow"), a.Ie = e("horizontalAlignment"));
        g = eg(a);
        b.appendChild(bg(g))
    };
    var hg = /^((https?):)?\/\/afs.googleusercontent.com\//;

    function ig(a, b, c) {
        if (hg.test(b))
            for ("http:" == b.substring(0, 5) && c ? b = "https:" + b.substring(5) : "//" == b.substring(0, 2) && (b = (c ? "https:" : "") + b), c = 0; c < a.length; c++) a[c].adIconUrl = b
    }
    ig = w(ig, "aiIID");

    function jg() {};

    function kg(a, b) {
        a.addEventListener("mouseup", function(c) {
            2 !== c.button && b(c)
        })
    };

    function lg(a) {
        var b = "https" == window.location.protocol;
        a = a.clicktrackUrl;
        return Pa().data.ct && wa(a) ? Ya(a, function(c) {
            return !(0 == c.indexOf("http:") && b)
        }) : []
    }

    function mg(a, b) {
        a = a.getElementsByTagName("a");
        for (var c = 0; c < a.length; c++) {
            var d = a[c];
            (d.hasAttribute ? d.hasAttribute("data-notrack") : d.getAttribute("data-notrack")) || kg(d, function() {
                for (var e = [], f = n(b), g = f.next(); !g.done; g = f.next()) g = new Bc(g.value), v(g, "nc", [Math.round(9E6 * Math.random()), (new Date).getTime()].join("")), e.push(Cc(g));
                if (window.navigator.sendBeacon)
                    for (e = n(e), g = e.next(); !g.done; g = e.next()) window.navigator.sendBeacon(g.value);
                else
                    for (e = n(e), f = e.next(); !f.done; f = e.next()) gc(f.value)
            })
        }
    }

    function ng(a, b, c) {
        if (Pa().data.ct && (a = lg(a), 0 < a.length))
            if (Pa().data.alct) {
                c = te("block", "" + c, a);
                a = Za(Wd("div", b));
                a = a.concat(Za(Wd("tr", b)));
                a = a.concat(Za(Wd("li", b)));
                var d;
                for (b = 0; d = a[b]; b++) {
                    var e = c;
                    e = te("ad", "" + (b + 1), e);
                    mg(d, e)
                }
            } else mg(b, a)
    };
    var og = B(function(a, b) {
        var c = a.resultsPageBaseUrl,
            d = a.resultsPageQueryParam,
            e = b[0] && b[0].adtype;
        b = n(b);
        for (var f = b.next(); !f.done; f = b.next()) {
            f = f.value;
            e && (f = f[e]);
            var g = f.t,
                h = f.afdt;
            if (null != g && null != h) {
                if (!c) throw A("resultsPageBaseUrl needs to be set.");
                var k = new Bc(c);
                v(k, d, g);
                v(k, "rsToken", h);
                null != a.personalizedAds && v(k, "pcsa", "" + a.personalizedAds);
                f.l = Cc(k);
                f.u = Cc(k)
            }
        }
    }, "fRSCL");

    function pg() {
        var a = {
            uc: xc()
        };
        a = a || {};
        var b = a.uc;
        return H("<style" + (a.Qf ? ' data-permanent="true"' : "") + ">body{-webkit-text-size-adjust:100%; font-family:arial,sans-serif;}div{" + qg(0) + "max-width:100%;}span:last-child, div:last-child{" + qg(1) + "}." + O("v_") + "{" + qg(1) + "}." + O("j_") + ">span:last-child, ." + O("j_") + ">div:last-child, ." + O("w_") + ", ." + O("w_") + ":last-child{" + qg(0) + "}." + O("l_") + "{-ms-overflow-style:none; scrollbar-width:none;}." + O("l_") + "::-webkit-scrollbar{display:none;}a{text-decoration:none; text-transform:none; color:inherit; display:inline-block;}span{" +
            qg(0) + "display:inline-block; overflow:hidden; text-transform:none;}img{border:none; max-width:100%; max-height:100%;" + (b ? "min-width:1px; min-height:1px;" : "") + "}." + O("i_") + "{display:-ms-flexbox; display:-webkit-box; display:-webkit-flex; display:flex;" + rg("flex-start") + "box-sizing:border-box; overflow:hidden;}." + O("s_") + "{position:relative; display:inline-block;}." + O("u_") + "{position:absolute; top:0; left:0; height:100%; background-repeat:no-repeat; background-size:auto 100%;}." + O("t_") + "{display:block;}." +
            O("r_") + "{" + sg() + "}." + O("q_") + "{box-sizing:border-box; max-width:100%; max-height:100%; overflow:hidden;" + sg() + "}." + O("n_") + "{-ms-flex-negative:1; text-overflow:ellipsis; white-space:nowrap;}." + O("p_") + "{-ms-flex-negative:1; max-width: 100%;}." + O("m_") + "{overflow:hidden;}." + O("o_") + "{white-space:nowrap;}." + O("x_") + "{cursor:pointer;}." + O("y_") + "{display:none; position:absolute; z-index:1;}." + O("k_") + ">div:not(." + O("y_") + ") {display:-webkit-inline-box; display:-moz-inline-box; display:-ms-inline-flexbox; display:-webkit-inline-flex; display:inline-flex; vertical-align:middle;}." +
            O("k_") + ".topAlign>div{vertical-align:top;}." + O("k_") + ".centerAlign>div{vertical-align:middle;}." + O("k_") + ".bottomAlign>div{vertical-align:bottom;}." + O("k_") + ">span, ." + O("k_") + ">a, ." + O("k_") + ">img, ." + O("k_") + "{display:inline; vertical-align:middle;}.si101:nth-of-type(5n+1) > .si141{border-left: #1f8a70 7px solid;}.rssAttrContainer ~ .si101:nth-of-type(5n+2) > .si141{border-left: #1f8a70 7px solid;}.si101:nth-of-type(5n+3) > .si141{border-left: #bedb39 7px solid;}.rssAttrContainer ~ .si101:nth-of-type(5n+4) > .si141{border-left: #bedb39 7px solid;}.si101:nth-of-type(5n+5) > .si141{border-left: #ffe11a 7px solid;}.rssAttrContainer ~ .si101:nth-of-type(5n+6) > .si141{border-left: #ffe11a 7px solid}.si101:nth-of-type(5n+2) > .si141{border-left: #fd7400 7px solid;}.rssAttrContainer ~ .si101:nth-of-type(5n+3) > .si141{border-left: #fd7400 7px solid;}.si101:nth-of-type(5n+4) > .si141{border-left: #004358 7px solid;}.rssAttrContainer ~ .si101:nth-of-type(5n+5) > .si141{border-left: #004358 7px solid;}." +
            O("z_") + "{cursor:pointer;}.si130{display:inline; text-transform:inherit;}</style>")
    }

    function sg() {
        return Af("display:-ms-flexbox; display:-webkit-box; display:-webkit-flex; display:flex;" + rg("center") + tg("center"))
    }

    function ug(a, b) {
        var c = "",
            d = b ? "right" : "left";
        b = b ? "left" : "right";
        for (var e = Bf(a), f = e.length, g = 0; g < f; g++) {
            var h = e[g];
            switch (xa(h) ? h.toString() : h) {
                case "fw":
                    c += "font-weight:";
                    h = a.fw;
                    switch (xa(h) ? h.toString() : h) {
                        case 1:
                            c += "100";
                            break;
                        case 2:
                            c += "400";
                            break;
                        case 3:
                            c += "700";
                            break;
                        case 0:
                            c += "400"
                    }
                    break;
                case "bac":
                    c += "background-color:" + O(a.bac);
                    break;
                case "br":
                    c += "border-radius:" + O(a.br) + "px";
                    break;
                case "bw":
                    c += "border:" + O(a.bw) + "px solid " + O(a.boc);
                    break;
                case "bb":
                    c += "border-bottom:" + O(a.bb.w) + "px solid " +
                        O(a.bb.c);
                    break;
                case "bl":
                    c += "border-left:" + O(a.bl.w) + "px solid " + O(a.bl.c);
                    break;
                case "brt":
                    c += "border-right:" + O(a.brt.w) + "px solid " + O(a.brt.c);
                    break;
                case "bt":
                    c += "border-top:" + O(a.bt.w) + "px solid " + O(a.bt.c);
                    break;
                case "ff":
                    c += "font-family:" + O(a.ff) + ",arial,sans-serif;";
                    break;
                case "fs":
                    c += "font-size:" + O(a.fs) + "px";
                    break;
                case "h":
                    c += "height:" + O(a.h) + (-1 != ("" + a.h).indexOf("%") ? "" : "px");
                    break;
                case "i":
                    c += "font-style:" + O(I(a.i, !0) ? "italic" : "normal");
                    break;
                case "lh":
                    c += "line-height:" + O(a.lh) + "px";
                    break;
                case "maxh":
                    c += "max-height:" + O(a.maxh) + "px";
                    break;
                case "maxw":
                    c += "max-width:" + O(a.maxw) + "px";
                    break;
                case "mb":
                    c += "margin-bottom:" + O(a.mb) + "px";
                    break;
                case "minh":
                    c += "min-height:" + O(a.minh) + "px";
                    break;
                case "minw":
                    c += "min-width:" + O(a.minw) + "px";
                    break;
                case "ml":
                    c += "margin-" + O(d) + ":" + O(a.ml) + "px";
                    break;
                case "mr":
                    c += "margin-" + O(b) + ":" + O(a.mr) + "px";
                    break;
                case "mt":
                    c += "margin-top:" + O(a.mt) + "px";
                    break;
                case "op":
                    c += "opacity:" + O(a.op);
                    break;
                case "pb":
                    c += "padding-bottom:" + O(a.pb) + "px";
                    break;
                case "pl":
                    c += "padding-" +
                        O(d) + ": " + O(a.pl) + "px";
                    break;
                case "pr":
                    c += "padding-" + O(b) + ": " + O(a.pr) + "px";
                    break;
                case "pt":
                    c += "padding-top:" + O(a.pt) + "px";
                    break;
                case "tc":
                    c += "color:" + O(a.tc);
                    break;
                case "u":
                    c += "text-decoration:" + O(a.u ? "underline" : "none");
                    break;
                case "st":
                    c += "text-decoration:" + O(a.st ? "line-through" : "none");
                    break;
                case "po":
                    h = a.po;
                    h = Af((h.t ? O(void 0) + "top:" + O(h.t) + "px;" : "") + (h.r ? O(void 0) + O(b) + ":" + O(h.r) + "px;" : "") + (h.b ? O(void 0) + "bottom:" + O(h.b) + "px;" : "") + (h.l ? O(void 0) + O(d) + ":" + O(h.l) + "px;" : ""));
                    c += h + "position:absolute";
                    break;
                case "bos":
                    h = a.bos;
                    for (var k = "", l = h.length, q = 0; q < l; q++) {
                        var p = h[q];
                        k += O(p.xo) + "px " + O(p.yo) + "px " + (p.br ? O(p.br) + "px " + (p.sr ? O(p.sr) + "px " : "") : "") + O(p.sc) + (q != Cf(h).length - 1 ? "," : "")
                    }
                    h = Af(k);
                    h = Hf("" + h);
                    h = Af("-webkit-box-shadow:" + O(h) + "; -moz-box-shadow:" + O(h) + "; -ms-box-shadow:" + O(h) + "; box-shadow:" + O(h) + ";");
                    c += h;
                    break;
                case "w":
                    c += "width:" + O(a.w) + (-1 != ("" + a.w).indexOf("%") ? "; -ms-flex-negative:1;" + qg(1) : "px");
                    break;
                case "tt":
                    switch (c += "text-transform:", h = a.tt, xa(h) ? h.toString() : h) {
                        case 1:
                            c +=
                                "uppercase";
                            break;
                        default:
                            c += "initial"
                    }
            }
            c += ";"
        }
        return Af(c)
    }

    function qg(a) {
        return Af("-webkit-box-flex:" + O(a) + " 0; -webkit-flex-shrink:" + O(a) + "; flex-shrink:" + O(a) + ";")
    }

    function rg(a) {
        var b = "",
            c = "" + (0 == ("" + Cf(a)).indexOf("flex-") ? O(("" + Cf(a)).substring(5)) : O(a));
        c = Hf(c);
        b += "-ms-flex-align:" + O(c) + "; -webkit-box-align:" + O(c) + "; -webkit-align-items:" + O(a) + "; align-items:" + O(a) + ";";
        return Af(b)
    }

    function tg(a) {
        var b = "",
            c = "" + (0 == ("" + Cf(a)).indexOf("flex-") ? O(("" + Cf(a)).substring(5)) : O(a));
        c = Hf(c);
        b += "-ms-flex-pack:" + O(c) + "; -webkit-box-pack:" + O(c) + "; -webkit-justify-content:" + O(a) + "; justify-content:" + O(a) + ";";
        return Af(b)
    };

    function vg(a, b) {
        var c = [];
        b = n(b.s || []);
        for (var d = b.next(); !d.done; d = b.next()) {
            d = d.value;
            var e = d.r;
            e && e.hasOwnProperty("ff") && (e.ff = Af(e.ff));
            (e = d.hr) && e.hasOwnProperty("ff") && (e.ff = Af(e.ff));
            c.push({
                className: d.sk,
                rules: d.r || {},
                kb: d.hr || {}
            })
        }
        a = a.isRtl;
        b = "<style>";
        d = c.length;
        for (e = 0; e < d; e++) {
            var f = c[e];
            b += (K(f.rules) && 0 < Bf(f.rules).length ? "." + O(f.className) + "{" + ug(f.rules, a) + "}" : "") + (K(f.kb) && 0 < Bf(f.kb).length ? "." + O(f.className) + ":hover{" + ug(f.kb, a) + "}" : "")
        }
        return H(b + "</style>")
    };

    function wg(a, b) {
        if (!a) return !1;
        if (3 == a.nodeType && a.nodeValue && (b && (a.nodeValue += " ..."), 4 < a.nodeValue.length)) {
            b = a.nodeValue;
            var c = a.nodeValue.length - 1;
            b.length > c && (b = b.substring(0, c - 3) + "...");
            a.nodeValue = b;
            return !1
        }
        c = a.textContent || a.innerText;
        if (!c || c.length <= (b ? 0 : 4)) return a.parentNode.removeChild(a), !0;
        for (b = wg(a.lastChild, b); b;) b = wg(a.lastChild, b);
        return !1
    }

    function xg(a, b) {
        if (!(0 >= b)) {
            for (var c = a.innerHTML.length; 0 < c && a.offsetHeight > b; c--)
                for (var d = a, e = wg(d.lastChild, !1); e;) e = wg(d.lastChild, e);
            a.offsetHeight > b && (gf(a), a.innerHTML = Xb($b))
        }
    };
    var yg = 1;

    function zg(a, b, c) {
        if (!c) return null;
        if ("." == c[0]) return b[c.substring(1)];
        c = n(c.split("."));
        for (b = c.next(); !b.done; b = c.next()) {
            b = b.value;
            if (null == a) return null;
            if (Array.isArray(a)) {
                b = parseInt(b, 10);
                if (isNaN(b)) return null;
                a = a[b]
            } else if (xa(a) && a.hasOwnProperty(b)) a = a[b];
            else return null
        }
        return a
    };
    var Ag = null;

    function Bg(a, b, c) {
        var d = "A" === c.tagName ? c : c.querySelector("a");
        b.addEventListener("click", function(e) {
            Cg(a, b, c);
            Dg(e)
        });
        b.addEventListener("keydown", function(e) {
            if (32 == e.keyCode || 13 == e.keyCode) Cg(a, b, c), Dg(e), d && d.focus()
        });
        a.addEventListener("click", Eg);
        a.addEventListener("scroll", Eg);
        b.setAttribute("role", "button");
        b.setAttribute("tabindex", 0);
        d && b.setAttribute("aria-label", c.textContent)
    }

    function Dg(a) {
        a.stopPropagation ? a.stopPropagation() : (a.cancelBubble = !0, a.returnValue = !1)
    }

    function Cg(a, b, c) {
        Ag && Ag != c && (Ag.style.display = "none", Ag = null);
        if (c.style.display && "none" != c.style.display) c.style.display = "none", Ag = null;
        else {
            a.appendChild(c);
            var d = ee(b),
                e = fe(b),
                f = fe(c),
                g = fe(a),
                h = ee(a),
                k = d.x + a.scrollLeft - h.x;
            d = d.y + a.scrollTop - h.y;
            switch (b.getAttribute("data-position")) {
                case "over":
                    b = e.width / 2 - f.width / 2;
                    e = e.height / 2 - f.height / 2;
                    break;
                default:
                    b = e.width / 2 - f.width / 2, e = e.height
            }
            h = a.scrollTop;
            var l = a.scrollTop + g.height - f.height - 10;
            c.style.left = Math.min(Math.max(Math.round(k + b), a.scrollLeft),
                a.scrollLeft + g.width - f.width - 10) + "px";
            c.style.top = Math.min(Math.max(Math.round(d + e), h), l) + "px";
            c.style.display = "block";
            Ag = c
        }
    }

    function Eg() {
        Ag && (Ag.style.display = "none", Ag = null)
    };

    function Fg(a) {
        var b = a.orientation,
            c = a.id,
            d = a.O,
            e = a.Td,
            f = a.overflow,
            g = a.ue,
            h = a.je,
            k = a.Re,
            l = a.href,
            q = a.uc,
            p = "",
            x = "" + O(0 == b ? "row" : "column");
        x = Hf(x);
        x = "-ms-flex-direction:" + O(x) + "; -webkit-box-orient:" + O(0 == b ? "horizontal" : "vertical") + "; -webkit-flex-direction:" + O(x) + "; flex-direction:" + O(x) + ";";
        x = Hf(x);
        var r = I(e, 0) || I(e, 1) || I(e, 2),
            y = I(e, 6) || I(e, 7) || I(e, 8),
            u = I(e, 3) || I(e, 4) || I(e, 5);
        var J = null != e ? tg(I(e, 0) || I(e, 3) || I(e, 9) || I(e, 6) ? "flex-start" : I(e, 1) || I(e, 4) || I(e, 10) || I(e, 7) ? "center" : I(e, 2) || I(e, 5) || I(e,
            11) || I(e, 8) ? "flex-end" : "") : "";
        J = Hf("" + J);
        e = null != e ? rg(r ? "flex-start" : u ? "flex-end" : y ? "center" : I(e, 9) || I(e, 10) || I(e, 11) ? "stretch" : "") : "";
        e = Hf("" + e);
        var D = "";
        switch (f) {
            case 2:
                D += "-ms-flex-wrap:wrap; -webkit-flex-wrap:wrap; flex-wrap:wrap;";
                break;
            case 3:
            case 4:
                D += "overflow-" + O(0 == b ? "x" : "y") + ":auto; -webkit-overflow-scrolling: touch; scroll-behavior: smooth;" + (K(q) && 3 == f ? "padding-" + O(0 == b ? "bottom" : "right") + ": 25px;" : "")
        }
        b = Hf(D);
        q = r ? "topAlign" : y ? "centerAlign" : u ? "bottomAlign" : "";
        c = (c ? 'id="' + L(c) + '"' : "") +
            ' class="' + L("i_") + (d ? " " + L(d) : "") + (I(f, 3) ? " " + L("j_") : "") + (I(g, 4) ? " " + L("k_") + " " + L(q) : "") + (I(f, 4) ? " " + L("j_") + " " + L("l_") : "") + '"' + (h ? ' data-drop="true"' : "") + ' style="' + L(O(x)) + L(O(J)) + L(O(e)) + L(O(b)) + (k ? "position:relative;" : "") + '"';
        c = Gf(c);
        p += l ? "<a" + Of(Jg(a)) + Of(Mf(c)) + "></a>" : "<div" + Of(Mf(c)) + "></div>";
        return H(p)
    }

    function Kg(a) {
        a = a || {};
        var b = a.id,
            c = a.text,
            d = a.Ud,
            e = a.O,
            f = a.ef,
            g = a.Gf,
            h = a.gb,
            k = a.fb,
            l = a.href,
            q = "",
            p = I(f, 1) ? "m_ " + (I(g, 0) ? "n_" : "o_") : "p_";
        g = null != f ? 'data-lines="' + L(f) + '"' + (null != g ? ' data-truncate="' + L(g) + '"' : ' data-truncate="0"') : "";
        g = Gf(g);
        c = (K(h) && K(f) && 1 < f ? "<span" + Of(Mf(g)) + ' style="display: -webkit-box; -webkit-box-orient: vertical; overflow: hidden;' + (k ? "-webkit-line-clamp: " + L(O(f)) + ";" : "") + '">' : "") + vf(null != c ? c : "") + (K(h) && K(f) && 1 < f ? "</span>" : "");
        c = Ef(c);
        q += l ? "<a" + (b ? ' id="' + L(b) + '"' : "") + ' class="' +
            L(p) + " " + L(null != e ? e : "") + '" aria-label="' + L(null != d ? d : "") + '"' + (K(h) && K(f) && 1 < f ? "" : Of(Mf(g))) + Of(Jg(a)) + ">" + c + "</a>" : "<span" + (b ? ' id="' + L(b) + '"' : "") + ' aria-label="' + L(null != d ? d : "") + '"' + (K(h) && K(f) && 1 < f ? "" : Of(Mf(g))) + ' class="' + L(p) + " " + L(null != e ? e : "") + '">' + c + "</span>";
        return H(q)
    }

    function Lg(a) {
        var b = a.src,
            c = a.id,
            d = a.Me,
            e = a.Vd,
            f = a.O,
            g = a.href,
            h = a.af,
            k = "";
        c = (c ? 'id="' + L(c) + '"' : "") + (e ? ' aria-hidden="true" tabindex="-1"' : "") + ' class="' + L("q_") + (f ? " " + L(f) : "") + '"';
        c = Gf(c);
        b = '<img src="' + L(Uf(b)) + '"' + (d ? ' aria-label="' + L(d) + '"' : "") + (h ? ' loading="lazy"' : "") + ">";
        b = Ef(b);
        k += g ? "<a" + Of(Jg(a)) + Of(Mf(c)) + ">" + b + "</a>" : "<div" + Of(Mf(c)) + ">" + b + "</div>";
        return H(k)
    }

    function Mg(a) {
        var b = a.jf,
            c = a.kf,
            d = a.id,
            e = a.yf,
            f = a.zf,
            g = a.Sf,
            h = a.Tf,
            k = a.O,
            l = a.href,
            q = a.ub,
            p = a.Oc,
            x = a.$b,
            r = "";
        h = null != h ? h : "";
        a = "" + Pf((a.Rf ? "" : h) + (null != e ? e : "/images/afs/sr-star-off.png"));
        a = Ff(a);
        f = "" + Pf((g ? "" : h) + (null != f ? f : "/images/afs/sr-star-on.png"));
        f = Ff(f);
        b = b = {
            href: l,
            ub: q,
            Oc: p,
            $b: x,
            ve: Ef("<div" + (d ? ' id="' + L(d) + '"' : "") + ' class="' + L("r_") + (k ? " " + L(k) : "") + '"><div class="' + L("s_") + '"><img src="' + L(Uf(a)) + '" class="' + L("t_") + '" role="none"/><div class="' + L("u_") + '" style="background-image: url(' +
                L(Uf(f)) + "); width: " + L(O(20 * Math.max(Math.min(b, 5), 0))) + '%" role="img"' + (c ? ' aria-label="' + L(c) + '"' : ' aria-hidden="true"') + "></div></div></div>")
        };
        c = b.ve;
        b = H(b.href ? "<a" + Of(Jg(b)) + ">" + vf(c) + "</a>" : vf(c));
        return H(r + b)
    }

    function Jg(a) {
        a = a || {};
        var b = a.ub,
            c = a.Oc,
            d = a.$b;
        return zf('href="' + L(Pf(a.href)) + '"' + (d ? ' data-notrack="true"' : "") + (null != c ? ' data-nb="' + L(c) + '"' : "") + Of(zf('target="' + (b ? "_blank" : "_top") + '"')))
    };
    !Rb("Android") || Sb();
    Sb();
    Rb("Safari") && Sb();
    var Ng = {},
        Og = null;

    function Pg(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        a = 3;
        void 0 === a && (a = 0);
        if (!Og)
            for (Og = {}, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Ng[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Og[h] && (Og[h] = g)
                }
            }
        a = Ng[a];
        c = Array(Math.floor(b.length / 3));
        d = a[64] || "";
        for (e = f = 0; f < b.length - 2; f += 3) {
            var k = b[f],
                l = b[f + 1];
            h = b[f + 2];
            g = a[k >> 2];
            k = a[(k &
                3) << 4 | l >> 4];
            l = a[(l & 15) << 2 | h >> 6];
            h = a[h & 63];
            c[e++] = "" + g + k + l + h
        }
        g = 0;
        h = d;
        switch (b.length - f) {
            case 2:
                g = b[f + 1], h = a[(g & 15) << 2] || d;
            case 1:
                b = b[f], c[e] = "" + a[b >> 2] + a[(b & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    };
    var Qg = "function" === typeof Symbol && "symbol" === typeof Symbol() ? Symbol(void 0) : void 0;
    var Rg = Object,
        Sg = Rg.freeze,
        Tg = [];
    Object.isFrozen(Tg) || (Qg ? Tg[Qg] |= 1 : void 0 !== Tg.rc ? Tg.rc |= 1 : Object.defineProperties(Tg, {
        rc: {
            value: 1,
            configurable: !0,
            writable: !0,
            enumerable: !1
        }
    }));
    Sg.call(Rg, Tg);

    function Ug() {
        this.xe = Td();
        this.Db = null
    }

    function Vg(a, b) {
        var c = Wg,
            d = c.Db ? c.Db.getData() : {};
        c = c.xe;
        return cg(a(b || dg, d), c)
    }
    Ug.prototype.xd = function(a) {
        a = a({}, this.Db ? this.Db.getData() : {});
        return String(a)
    };
    var Xg = 0;

    function Yg(a) {
        if (!a) return {};
        var b = {};
        a = n(a);
        for (var c = a.next(); !c.done; c = a.next()) c = c.value, b[c.sk] = {
            rules: c.r,
            kb: c.hr
        };
        return b
    }
    var Wg = new Ug,
        Zg = {},
        $g = (Zg[2] = "v_", Zg[3] = "w_", Zg);

    function ah(a, b, c, d, e, f) {
        function g(r, y, u) {
            var J = "adBlock" == r.dbk;
            u = {
                id: J ? "adBlock" : y,
                O: (r.sk || "") + " " + (void 0 === u ? "" : u),
                ub: d
            };
            y = "ctc" === r.dbk;
            var D = "ctc.bt" === r.dbk;
            if (l || q || y || D) u.ub = !1;
            D = r.dbk ? zg(c, b, r.dbk) : void 0;
            var G = r.acc && r.acc.alt ? zg(c, b, r.acc.alt) : void 0,
                N = r.acc && r.acc.ah;
            if (r.dbk && !D && !J || r.hnk && null != zg(c, b, r.hnk)) return null;
            y = null;
            var M = 0;
            if (r.ac) {
                var V = r.ac[0],
                    ea = V.act,
                    W = V.dbk ? zg(c, b, V.dbk) : void 0,
                    Lc = {};
                if (V.ad)
                    for (var Sa = n(V.ad), pa = Sa.next(); !pa.done; pa = Sa.next()) pa = pa.value, Lc[pa.n] =
                        pa.v;
                Sa = V.en;
                var Mc = pa = void 0;
                switch (ea) {
                    case 0:
                        u.href = W;
                        u.$b = !!V.nm;
                        u.Oc = null != V.nb ? V.nb : Lc.nb;
                        break;
                    case 3:
                        u.O += " x_";
                        Mc = "y_";
                        pa = "e" + yg++;
                        u.id || (u.id = "e" + yg++);
                        k.push({
                            Ke: u.id,
                            ee: pa
                        });
                        break;
                    case 5:
                        if (M = parseInt(W, 10)) u.O += " z_"
                }
                Sa && (y = g(Sa, pa, Mc))
            }
            W = null;
            V = r.nt;
            ea = r.lr || {};
            W = (h[r.sk] || {}).rules || {};
            switch (V) {
                case 0:
                    D = ea.o;
                    null == D && (D = 0);
                    u.orientation = D;
                    u.Td = ea.a;
                    u.je = 1 == ea.t;
                    u.overflow = ea.ov;
                    u.ue = ea.cf;
                    u.Re = ea.ap && !W.po;
                    u.uc = xc();
                    W = Fg;
                    break;
                case 1:
                    u.text = H(D);
                    u.Ud = u.text.toString().replace(/(<([^>]+)>)/g,
                        "");
                    u.ef = ea.nl;
                    u.Gf = ea.t;
                    u.gb = Ja().gb();
                    u.fb = Ja().fb();
                    W = Kg;
                    break;
                case 2:
                    u.src = W.sfc && "svg" == D.substr(-3) ? D + "?c=" + encodeURIComponent(W.sfc) : D;
                    Xg += 1;
                    u.af = !!Ja().data.elli && Xg > Ka();
                    u.Me = G;
                    u.Vd = N;
                    W = Lg;
                    break;
                case 4:
                    "string" == typeof D && (D = parseFloat(D));
                    if ("number" != typeof D || isNaN(D)) return null;
                    u.yf = W.bu;
                    u.zf = W.fu;
                    u.jf = D;
                    u.kf = G;
                    W = Mg;
                    break;
                default:
                    return null
            }
            if (D = $g[ea.sb]) u.O += " " + D;
            var P = Vg(W, u);
            r.hasOwnProperty("hne") && x[r.hne].push(P);
            if (J) {
                var Tb = B(function() {
                    for (var fa = n(x[1]), ia = fa.next(); !ia.done; ia =
                        fa.next()) {
                        ia = ia.value;
                        var ta = !1;
                        "auto" === P.style.overflowX ? ta = 0 !== P.scrollLeft : "auto" === P.style.overflowY && (ta = 0 !== P.scrollTop);
                        ia.style.visibility = ta ? "visible" : "hidden"
                    }
                    fa = n(x[2]);
                    for (ia = fa.next(); !ia.done; ia = fa.next()) ia = ia.value, ta = !0, "auto" === P.style.overflowX ? ta = P.scrollLeft !== P.scrollWidth - P.clientWidth : "auto" === P.style.overflowY && (ta = P.scrollTop !== P.scrollHeight - P.clientHeight), ia.style.visibility = ta ? "visible" : "hidden"
                }, "hneSc");
                B(function() {
                    e && (P.addEventListener("scroll", Tb), e.addEventListener("resize",
                        Tb))
                }, "hneAsc")()
            }
            M && P.addEventListener("click", function() {
                var fa = P.ownerDocument.getElementById("adBlock");
                "auto" === fa.style.overflowX ? fa.scrollLeft += M : "auto" === fa.style.overflowY && (fa.scrollTop += M)
            });
            r = r.ch;
            if (0 == V && r && 0 < r.length) {
                J = !1;
                for (u = 0; u < r.length; u++) D = g(r[u]), null != D && (J = !0, P.appendChild(D));
                if (!J) return null
            }
            return y ? (r = document.createDocumentFragment(), r.appendChild(P), r.appendChild(y), r) : P
        }
        d = void 0 === d ? !1 : d;
        e = void 0 === e ? null : e;
        f = void 0 === f ? [] : f;
        var h = Yg(a.s),
            k = [],
            l = !!zg(c, b, "ctc.cott"),
            q = !!zg(c, b, "ctd"),
            p = {},
            x = (p[1] = [], p[2] = [], p);
        p = "e" + yg++;
        a = g(a.l || {}, p, f.join(" "));
        a || (a = document.createElement("span"), a.id = p);
        return {
            rootElement: a,
            Kf: k,
            uf: p
        }
    }

    function bh(a, b) {
        function c(p) {
            var x = p.style.wordWrap,
                r = p.style.whiteSpace;
            p.style.whiteSpace = "nowrap";
            p.style.wordWrap = "normal";
            var y = p.offsetHeight;
            p.style.whiteSpace = r;
            p.style.wordWrap = x;
            return y
        }

        function d(p, x) {
            var r = 0 == p.childElementCount;
            x = x && "true" == p.getAttribute("data-drop");
            if (r || x) r = p.parentNode, r.removeChild(p), p.id != b && d(r, x)
        }
        a = a.querySelectorAll("[data-lines]");
        for (var e = a.length - 1; 0 <= e; e--) {
            var f = a[e],
                g = f.parentNode,
                h = parseInt(f.getAttribute("data-lines"), 10),
                k = parseInt(f.getAttribute("data-truncate"),
                    10);
            if (1 != h || 0 != k) {
                var l = f.getBoundingClientRect(),
                    q = g.getBoundingClientRect();
                l = q.left > l.left || q.right < l.right;
                q = Ja().gb() && Ja().fb() && uc();
                0 !== k || q ? 1 === k && (k = 1 < h ? c(f) : void 0, q = xc() ? -1 : 0, (1 == h ? f.offsetWidth < f.scrollWidth + q : 1 < h && f.offsetHeight / k > h) || l) && (g.removeChild(f), d(g, !0)) : (g = c(f), (1 < h && f.offsetHeight / g > h || l) && xg(f, (g + 1) * h))
            }
        }
    };

    function ch(a, b) {
        return H('<div style="display:none;"' + (b ? ' id="_' + L(b) + "_" + L(null != a ? a : "unknown_pubId") + '"' : "") + "></div>")
    };

    function dh(a) {
        this.Eb = a = a.url;
        var b = /[?&]dsh=1(&|$)/.test(a);
        this.wc = !b && /[?&]ae=1(&|$)/.test(a);
        this.nd = !b && /[?&]ae=2(&|$)/.test(a);
        if ((this.la = /[?&]adurl=([^&]*)/.exec(a)) && this.la[1]) {
            try {
                var c = decodeURIComponent(this.la[1])
            } catch (d) {
                c = null
            }
            this.Ib = c
        }
    }

    function eh(a, b) {
        return a.wc && a.Ib || a.nd ? 1 == b ? a.wc ? a.Ib : fh(a, "&dct=1") : 2 == b ? fh(a, "&ri=2") : fh(a, "&ri=16") : a.Eb
    }

    function fh(a, b) {
        return a.la ? a.Eb.slice(0, a.la.index) + b + a.Eb.slice(a.la.index) : a.Eb + b
    };
    var gh = /^((market|itms|intent|itms-appss):\/\/)/i,
        hh = /^((market|itms|intent|itms-appss):\/\/)/i;
    var ih = B(function(a) {
        if (a.hasAttribute("data-ohref")) var b = a.getAttribute("data-ohref");
        else b = a.href, a.setAttribute("data-ohref", b);
        var c = b;
        var d = new dh({
            url: c
        });
        c = d.wc && d.Ib || d.nd ? navigator.sendBeacon ? navigator.sendBeacon(fh(d, "&act=1&ri=1"), "") ? eh(d, 1) : eh(d, 2) : eh(d, 0) : c;
        c instanceof Ib || !gh.test(c) || (hh.test(c), c = new Ib(c, Jb));
        b != c && bc(a, c)
    }, "mDS");
    var jh = /([?|&]{1}nm=)([\d]{1,})/,
        kh = /(\?|&)clkt=-?[\d]*/g,
        lh = /(\?|&)bg=[^&]*/g,
        mh = /(\?|&)nx=-?[\d]+/g,
        nh = /(\?|&)ny=-?[\d]+/g;

    function oh(a) {
        return function() {
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if (c.Aa) {
                    var d = c.element.href,
                        e = d.match(jh);
                    e ? 3 == e.length && (d = d.replace(jh, e[1] + (parseInt(e[2], 10) + 1))) : d += (-1 == d.indexOf("?") ? "?" : "&") + "nm=1";
                    ph(c, d)
                }
            }
        }
    }

    function qh(a) {
        return function() {
            if (a.yc) {
                var b = "&clkt=" + ((new Date).getTime() - a.yc),
                    c = a.element.href;
                c = c.replace(kh, "");
                ph(a, c + b)
            }
        }
    }

    function rh(a) {
        return function(b) {
            a.yc = (new Date).getTime();
            var c = de(a.element),
                d = Math.round(b.clientX - c.x);
            b = Math.round(b.clientY - c.y);
            c = a.element.href;
            c = c.replace(mh, "");
            c = c.replace(nh, "");
            ph(a, c + ("&nx=" + d) + ("&ny=" + b))
        }
    }

    function sh(a) {
        return function() {
            var b = a.element.ownerDocument;
            if (b = (b.defaultView || b.parentWindow).csabg) {
                b = "&bg=" + b.kc();
                var c = a.element.href;
                c = c.replace(lh, "");
                ph(a, c + b)
            }
        }
    }

    function th(a) {
        a.Aa && (a.element.addEventListener("mouseover", oh([a])), a.element.addEventListener("mousedown", rh(a)));
        var b = qh(a),
            c = sh(a);
        kg(a.element, function(d) {
            Ja().data.ecde && (rd(".aCS", Date.now()), qd());
            a.Aa && (b(d), c(d));
            try {
                ih(a.element)
            } catch (e) {}
        })
    }

    function uh(a, b, c) {
        return -1 == a.indexOf(b) && 16334 > a.length + b.length && (a += b + encodeURIComponent(c), 16334 < a.length) ? a.substring(0, 16334) : a
    }

    function vh(a, b) {
        He(a.element, "mousedown", function() {
            try {
                var c = Pe(b, !0);
                var d = Pe(b, !1)
            } catch (f) {}
            if (c && d) {
                var e = a.element.href;
                e = uh(e, "&is=", [d, c].join("x"));
                ph(a, e)
            }
        })
    }

    function wh(a, b, c, d) {
        for (var e = 0; e < a.length; e++) {
            var f = a[e];
            th(f);
            if (f.Aa) {
                var g = f.element.href;
                g = g.replace(xh, "");
                g = -1 == g.indexOf("?") ? g + f.dd.replace(/^&/, "?") : g + f.dd;
                ph(f, g)
            }
            if (f.Aa && (vh(f, c), void 0 != d.refererUrl && (g = d.refererUrl, g = void 0 == g ? document.referrer : g, "" != g))) {
                var h = f.element.href;
                h = uh(h, "&rurl=", g);
                ph(f, h)
            }
        }
        0 < a.length && b.addEventListener("mouseover", oh(a))
    };

    function yh(a, b, c) {
        this.dd = "&nb=" + (void 0 === b ? "" : b);
        this.Aa = void 0 === c ? !0 : c;
        this.element = a;
        this.yc = null
    }

    function ph(a, b) {
        16384 < b.length || bc(a.element, b)
    }
    var xh = /[&\?]nb=\d/;
    var zh = {
        nt: 0,
        sk: "si128"
    };

    function Ah(a, b, c, d, e, f, g, h) {
        g = void 0 === g ? [] : g;
        h = void 0 === h ? null : h;
        this.Xd = wh;
        this.ka = [];
        this.Wa = null;
        this.J = f;
        this.Bf = bg(vg(b, c));
        a: {
            var k = n(c.s || []);
            for (var l = k.next(); !l.done; l = k.next())
                if (l = l.value, "si128" == l.sk && l.r && l.r.bac) {
                    k = l;
                    break a
                }
            k = null
        }
        null != k && (this.Wa = ah({
            s: [k],
            l: zh
        }, {}, {}).rootElement, this.Wa.removeAttribute("id"));
        a = n(a);
        for (l = a.next(); !l.done; l = a.next()) l = l.value, this.ka.push(ah(c, d, l[l.adtype], e, f, ["b_"]));
        this.Wc = c.at;
        this.nf = d;
        this.Ob = b;
        this.gf = e;
        this.Qb = h;
        a: if (e = g, this.Wa)
            if (b =
                ((k || {}).r || {}).rsi) c = b;
            else {
                d = b = !1;
                if (4 == this.Wc)
                    for (c = n(c.s || []), e = c.next(); !e.done; e = c.next())
                        if (e = e.value, "si101" === e.sk) {
                            if ("100%" !== e.r.w) {
                                c = [];
                                break a
                            }
                        } else {
                            if ("si144" === e.sk) {
                                d = b = !0;
                                break
                            }
                        }
                else b = e.includes(2), d = e.includes(3);
                c = [];
                for (e = 0; e < this.ka.length - 1; e++) c.push(e);
                b && c.unshift(-1);
                d && c.push(this.ka.length - 1)
            }
        else c = [];
        this.Ad = c
    }

    function Bh(a, b) {
        var c = a.J.document.head,
            d = b.parentNode;
        c.appendChild(a.Bf);
        var e = b;
        a.Qb && (c.appendChild(bg(vg(a.Ob, a.Qb))), e = ah(a.Qb, a.nf, {}, a.gf, a.J).rootElement, d.replaceChild(e, b), e = d.querySelector("#adBlock"), e.setAttribute("aria-label", document.title), e.setAttribute("role", "region"));
        b = 0;
        for (d = -1; d < a.ka.length; d++) 0 <= d && e.appendChild(a.ka[d].rootElement), b < a.Ad.length && a.Ad[b] === d && (e.appendChild(a.Wa.cloneNode(!0)), b++);
        a = a = {
            Ma: Na(Ma()),
            Xa: a.Wc
        };
        b = a.Ma;
        d = "";
        switch (a.Xa) {
            case 1:
                d += ch(b, "googAFS");
                break;
            case 2:
                d += ch(b, "googAFShPLAs");
                break;
            default:
                d += ch()
        }
        a = H(d);
        a = bg(a);
        e.appendChild(a);
        a.setAttribute("data-render-complete", !0);
        return e
    }
    Ah.prototype.xd = function(a) {
        var b = this,
            c = null,
            d = Ie();
        if ("MutationObserver" in window) return (new MutationObserver(function(e, f) {
            e = n(e);
            for (var g = e.next(); !g.done; g = e.next()) "data-render-complete" == g.value.attributeName && (d.resolve(c), f.disconnect())
        })).observe(a.parentElement, {
            subtree: !0,
            attributes: !0,
            attributeFilter: ["data-render-complete"]
        }), c = Bh(this, a), d.promise.then(function(e) {
            return Je(b.J, e)
        }).then(function(e) {
            Ch(b, e, b.J, b.Ob);
            return e
        });
        c = Bh(this, a);
        this.J.setTimeout(function() {
            Ch(b, c, b.J,
                b.Ob);
            Ma().data.icv2 && "requestAnimationFrame" in b.J ? b.J.requestAnimationFrame(function() {
                d.resolve(c)
            }) : d.resolve(c)
        }, 0);
        return d.promise
    };

    function Ch(a, b, c, d) {
        for (var e = [], f = n(b.querySelectorAll("a[href]")), g = f.next(); !g.done; g = f.next())
            if (g = g.value, "true" != g.getAttribute("data-notrack")) {
                var h = g.getAttribute("data-nb") || void 0;
                e.push(new yh(g, h, !!h))
            }
        f = n(b.querySelectorAll(".b_"));
        for (g = f.next(); !g.done; g = f.next()) g.value.setAttribute("data-bg", "true");
        a.Xd(e, b, c.document.body, d);
        a = n(a.ka);
        for (d = a.next(); !d.done; d = a.next()) {
            d = d.value;
            e = c;
            f = n(d.Kf || []);
            for (g = f.next(); !g.done; g = f.next()) h = g.value, g = e.document.getElementById(h.ee), h =
                e.document.getElementById(h.Ke), g && h && Bg(e.document.getElementById("adBlock"), h, g);
            bh(b, d.uf)
        }
    };

    function Dh(a, b) {
        var c = b.querySelectorAll("[data-ad-container]");
        if (!(1 > c.length)) {
            var d = c[0],
                e = b.querySelectorAll('[data-hide-node-event="SCROLL_BEGIN"]'),
                f = b.querySelectorAll('[data-hide-node-event="SCROLL_END"]');
            c = function() {
                for (var k = n(e), l = k.next(); !l.done; l = k.next()) {
                    l = l.value;
                    var q = !1;
                    "auto" === d.style.overflowX ? q = 0 !== d.scrollLeft : "auto" === d.style.overflowY && (q = 0 !== d.scrollTop);
                    l.style.visibility = q ? "visible" : "hidden"
                }
                k = n(f);
                for (l = k.next(); !l.done; l = k.next()) l = l.value, q = !0, "auto" === d.style.overflowX ?
                    q = d.scrollLeft !== d.scrollWidth - d.clientWidth : "auto" === d.style.overflowY && (q = d.scrollTop !== d.scrollHeight - d.clientHeight), l.style.visibility = q ? "visible" : "hidden"
            };
            d.addEventListener("scroll", c);
            "function" === typeof ResizeObserver ? (new ResizeObserver(c)).observe(d) : a.addEventListener("resize", c);
            a = {};
            b = n(b.querySelectorAll("[data-scroll-displacement]"));
            for (var g = b.next(); !g.done; a = {
                    wa: a.wa
                }, g = b.next()) {
                g = g.value;
                var h = g.getAttribute("data-scroll-displacement");
                if (h) {
                    a.wa = Number(h);
                    if (isNaN(a.wa)) throw Error("Scroll Displacement is not a number: " +
                        h);
                    g.addEventListener("click", function(k) {
                        return function() {
                            "auto" === d.style.overflowX ? d.scrollLeft += k.wa : "auto" === d.style.overflowY && (d.scrollTop += k.wa)
                        }
                    }(a))
                }
            }
            c()
        }
    };

    function Eh(a, b) {
        a.addEventListener && a.addEventListener.call(a, "message", b, !1)
    };

    function Fh(a, b) {
        try {
            return !(!a.frames || !a.frames[b])
        } catch (c) {
            return !1
        }
    }

    function Gh(a, b) {
        for (var c = 0; 50 > c; ++c) {
            if (Fh(a, b)) return a;
            a: {
                try {
                    var d = a.parent;
                    if (d && d != a) {
                        var e = d;
                        break a
                    }
                } catch (f) {}
                e = null
            }
            if (!(a = e)) break
        }
        return null
    };

    function Hh(a, b, c) {
        c = void 0 === c ? document : c;
        var d = Td(c).createElement("SCRIPT");
        d.type = "text/javascript";
        b && (void 0 !== d.onreadystatechange ? d.onreadystatechange = function() {
            if ("complete" == d.readyState || "loaded" == d.readyState) try {
                b && b()
            } catch (f) {}
        } : d.onload = b);
        cc(d, ub(a));
        var e = c.getElementsByTagName("head")[0];
        if (e) try {
            t.setTimeout(function() {
                e.appendChild(d)
            }, 0)
        } catch (f) {}
    };

    function Ih(a, b, c) {
        var d = this;
        this.Af = b;
        this.ye = c;
        this.ca = "0";
        this.cd = null;
        this.J = a;
        this.qa = null;
        a && a.document && "complete" === a.document.readyState ? this.cb() : He(a, "load", function() {
            return d.cb()
        })
    }
    m = Ih.prototype;
    m.cb = function() {
        var a = this;
        if (!this.qa) {
            var b = (new Ud(this.J.document)).createElement("IFRAME");
            b.frameBorder = "0";
            b.style.height = 0;
            b.style.width = 0;
            b.style.position = "absolute";
            this.qa = b;
            this.J.document.body && (this.J.document.body.appendChild(b), this.qa.contentDocument ? this.xb() : He(this.qa, "load", function() {
                return a.xb()
            }))
        }
    };
    m.xb = function() {
        var a = this,
            b = this.qa;
        b && (b = b.contentDocument ? b.contentDocument : b.contentWindow ? b.contentWindow.document : null) && (this.ca = "1", b.open(), hf(b, Zb("<!doctype html><html><head></head><body></body></html>", null)), b.close(), Hh(this.Af, function() {
            return a.Ub()
        }, b))
    };
    m.Ub = function() {
        var a = this.qa;
        if (a)
            if (a = a.contentWindow, this.ca = "", a.botguard)
                if (a = a.botguard.bg) try {
                    this.cd = new a(this.ye)
                } catch (b) {
                    this.ca = "5"
                } else this.ca = "3";
                else this.ca = "2"
    };
    m.kc = function() {
        if (this.ca) return this.ca;
        var a = this.cd;
        if (!a) return "5";
        if (!a.invoke) return "4";
        var b = "";
        try {
            a.invoke(function(c) {
                b = c
            })
        } catch (c) {
            return "6"
        }
        return "string" !== typeof b || 0 == b.length ? "6" : 3 > b.length ? "7" : 1550 < b.length ? "8" : b
    };
    m.cb = w(Ih.prototype.cb, "BGcI");
    m.xb = w(Ih.prototype.xb, "BGpI");
    m.Ub = w(Ih.prototype.Ub, "BGcBV");
    m.kc = w(Ih.prototype.kc, "BGgBR");

    function Jh(a) {
        var b = {};
        a = n(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            var d = c.at;
            b[d] = b[d] || {};
            if (c.c) {
                b[d].containerMap = b[d].containerMap || {};
                for (var e = n(c.c), f = e.next(); !f.done; f = e.next()) b[d].containerMap[f.value] = c
            } else b[d]["default"] = c
        }
        this.Pc = b
    }

    function Kh(a, b, c) {
        var d = Lh[b];
        if (!a.Pc[d]) return null;
        b = a.Pc[d]["default"];
        return (a = a.Pc[d].containerMap) ? a[c] || b : b
    }
    var Mh = {},
        Lh = (Mh[0] = 1, Mh[3] = 2, Mh[2] = 4, Mh);
    var Nh = document;

    function Oh(a, b) {
        b = b.document;
        var c = b.createElement("link");
        c.rel = "stylesheet";
        c.href = tb(a).toString();
        (a = dc('style[nonce],link[rel="stylesheet"][nonce]', c.ownerDocument && c.ownerDocument.defaultView)) && c.setAttribute("nonce", a);
        b.head.appendChild(c)
    }

    function Ph() {
        this.fc = Ma().data.wftl || [];
        if (0 < this.fc.length) {
            var a = {
                family: this.fc.join("|")
            };
            a = rb(wb(), a, void 0);
            var b = Ja().data.fd || null;
            b && (a = rb(a, {
                display: b
            }))
        } else a = null;
        this.Fd = a;
        this.xc = null;
        this.hd = !1
    }

    function Qh(a) {
        if (!a.hd && Nh.fonts && "function" == typeof Nh.fonts.load) {
            a.hd = !0;
            var b = {};
            a = n(a.fc);
            for (var c = a.next(); !c.done; b = {
                    Qa: b.Qa
                }, c = a.next()) {
                c = c.value;
                var d = "",
                    e = c.split(":");
                2 === e.length && (c = e[0], "700" === e[1] && (d = "bold "));
                b.Qa = d + "12px " + c;
                Nh.fonts.load(b.Qa).catch(function(f) {
                    return function(g) {
                        z.log((g instanceof Error ? g.message : String(g)) + " - " + f.Qa, "mffl")
                    }
                }(b))
            }
        }
    };
    var Rh = null,
        Sh = {
            ads: 0,
            rss: 2,
            pbs: 3,
            ad_data: 8,
            sbs: 5
        },
        Th = {
            text_ads: 0,
            pla_npack: 3,
            related_search: 2
        },
        Uh = {
            statusAdult: "s.aDULT",
            statusFaillisted: "s.fL",
            statusTrademark: "s.tM",
            statusNeedsReview: "s.nR"
        },
        Q = {},
        Vh = !1;

    function Wh(a) {
        !Rh && a.name && (Rh = (a = a.name.match(/master-(\d+)/)) && a[1] ? a[1] : null);
        Rh || (Rh = -1);
        return Rh
    }
    Wh = w(Wh, "gMN");

    function Xh(a) {
        var b = "master-" + Wh(a);
        return Fe(b, a)
    }
    Xh = w(Xh, "gMI");

    function Yh(a, b, c) {
        try {
            if (a.document.getElementsByTagName("html")) {
                var d = a.document.getElementsByTagName("html")[0];
                d && (!d.lang && b && (d.lang = b), !d.dir && c && (d.dir = c))
            }
        } catch (e) {}
    }
    Yh = w(Yh, "sSILD");

    function Zh(a, b) {
        var c = {};
        a = n(a);
        for (var d = a.next(); !d.done; d = a.next()) d = d.value, c[d.k] = d.v;
        b = n(b);
        for (d = b.next(); !d.done; d = b.next()) a = d.value, c[a.k] = a.v;
        return c
    }

    function $h(a, b, c, d, e, f, g, h, k, l, q) {
        function p(D) {
            var G = {};
            D = n(D.getElementsByTagName("a"));
            for (var N = D.next(); !N.done; G = {
                    Ra: G.Ra,
                    Sa: G.Sa
                }, N = D.next()) N = N.value, N.classList.contains("si133") || (G.Ra = je(N.href, encodeURIComponent(e[e.name].resultsPageQueryParam)), G.Sa = je(N.href, encodeURIComponent("rsToken")), G.Ra && G.Sa ? (N.setAttribute("target", "_self"), N.href = "#", kg(N, function(M) {
                return function() {
                    pd("rsrc", {
                        q: M.Ra,
                        rsToken: M.Sa,
                        uid: Date.now()
                    }, md.j);
                    qd()
                }
            }(G))) : z.log("Could not parse query or rsToken from url: " +
                N.href, "rRHWC"))
        }

        function x(D) {
            var G = se(b);
            ng(h, D, G);
            a.requestAnimationFrame && a.requestAnimationFrame(function() {
                D.style.transform = "rotateZ(0deg)"
            })
        }
        var r = Zh(g.r || [], k.r || []),
            y = 2 === d[0].type,
            u = y ? !1 : "_blank" == h.linkTarget,
            J = pg();
        a.document.head.appendChild(bg(J));
        d = new Ah(d, f, k, r, u, a, q, l);
        "iev" in k && sd(b + ".eV", k.iev);
        "tp" in g && pd(b + ".ptp", g.tp, md.j);
        c = d.xd(c).then(function(D) {
            x(D);
            sd("wrs", !0);
            return D
        });
        y && h.relatedSearchUseResultCallback && (c = c.then(function(D) {
            p(D);
            return D
        }));
        return c
    }
    $h = w($h, "fSA");

    function ai(a, b, c, d, e, f, g, h) {
        f.isRtl && (a.document.dir = "rtl");
        a = d[0].type;
        if (2 == a) {
            var k = g.rs_attr.t;
            e = g.rs_attr.u;
            h.horizontalFlow && (k += ":");
            k && (e = H('<h2 id=\'attrHeader\'><span class="lhHeader" id="attribution"><a href="' + L(Pf(e)) + '" target="_blank">' + vf(k) + "</a></span></h2>"), c.appendChild(bg(e)))
        }
        gg(f, c, h);
        "tp" in g && pd(b + ".ptp", g.tp, md.j);
        bi(d, c, h, f, a);
        b = se(b);
        ng(h, c, b)
    }
    ai = w(ai, "fA");

    function ci(a, b) {
        for (var c = document.getElementById("ssrab"), d = Wh(a), e = Pa(); c.firstElementChild;) {
            var f = c.removeChild(c.firstElementChild),
                g = f.id.split("-");
            if (!(2 > g.length)) {
                var h = g.shift();
                if ("ssrad" === h || "ssrs" === h) {
                    g.push(d.toString());
                    g = g.join("-");
                    var k = Fe(g, a);
                    if (null != k)
                        if ("ssrs" === h) k.document.head.appendChild(f);
                        else {
                            h = null;
                            try {
                                h = k.document.getElementById("adBlock"), ye[g] = !0
                            } catch (G) {}
                            if (null != h) {
                                for (var l = 0; f.firstElementChild;) h.appendChild(f.removeChild(f.firstElementChild)), l++;
                                var q =
                                    void 0;
                                f = void 0;
                                var p = h,
                                    x = b;
                                f = void 0 === f ? wh : f;
                                q = void 0 === q ? Bg : q;
                                for (var r = n(p.querySelectorAll("[data-wta-bubble]")), y = r.next(); !y.done; y = r.next()) {
                                    y = y.value;
                                    var u = y.getAttribute("data-wta-bubble");
                                    if (u) {
                                        var J = k.document.getElementById(u);
                                        if (!J) throw Error("Could not find element with id: " + u);
                                        q(p, y, J)
                                    }
                                }
                                q = n(p.querySelectorAll(".clicktrackedAd_js"));
                                for (r = q.next(); !r.done; r = q.next()) r.value.setAttribute("data-bg", "true");
                                q = [];
                                r = n(p.querySelectorAll("a[href]"));
                                for (y = r.next(); !y.done; y = r.next()) y = y.value,
                                    "true" !== y.getAttribute("data-notrack") && (u = y.getAttribute("data-nb") || void 0, q.push(new yh(y, u, !!u)));
                                f(q, p, p, x);
                                Dh(k, p);
                                k = se(g);
                                f = ff(g, a);
                                ng(f, h, k);
                                sd(g + ".hA", 0 < l);
                                e.data.cgna && rd(g + ".aC", l);
                                delete Q[g]
                            }
                        }
                }
            }
        }
        for (var D in Q) sd(D + ".hA", !1), e.data.cgna && rd(D + ".aC", 0), delete Q[D];
        document.body.removeChild(c);
        qd()
    }
    ci = w(ci, "pSRA");

    function di(a, b, c) {
        var d = Xh(a);
        if (d) {
            var e = d.document.documentElement.lang;
            var f = d.document.documentElement.dir
        }
        var g = (d = c.at) && 0 < d.length ? new Jh(d) : void 0;
        d = (d = c.act) ? new Jh(d) : void 0;
        var h = [];
        if (!Vh)
            for (var k in a) !Q.hasOwnProperty(k) && a[k] instanceof Object && "ads" === a[k].type && h.push(k);
        k = Object.keys(Q).slice();
        h = new Ph;
        var l = [],
            q = [];
        if (ei()) ci(a, b), q.push(Promise.resolve());
        else
            for (var p in Q) {
                var x = Q[p],
                    r = x[0].type,
                    y = Fe(p, a);
                if (null != y) {
                    Yh(y, e, f);
                    var u = null;
                    try {
                        u = y.document.getElementById("adBlock")
                    } catch (V) {}
                    if (null !=
                        u) {
                        u.setAttribute("aria-label", document.title);
                        u.setAttribute("role", "region");
                        if (h.Fd) try {
                            Oh(h.Fd, y)
                        } catch (V) {
                            h.xc = V
                        }
                        Qh(h);
                        var J = 2 == r,
                            D = 5 == r,
                            G = ff(p, a),
                            N = !!Ja().data.rsn && J && g && Kh(g, 2, G.container),
                            M = Promise.resolve();
                        !g || !N && J || D ? ai(y, p, u, x, a, b, c, G) : (M = Kh(g, r, G.container), r = d ? Kh(d, r, G.container) : null, J && og(G, x), J = fi(p, k), M = $h(y, p, u, x, a, b, c, G, M, r, J));
                        c.bg && (x = new Ih(y, c.bg.i, c.bg.p), y.csabg = x);
                        q.push(M);
                        ye[p] = !0;
                        l.push(p);
                        delete Q[p]
                    }
                }
            }
        h.xc && z.log(h.xc, "lwf2");
        return Le(q).then(function() {
            gi(a, !!g)
        })
    }
    di = w(di, "mPAASH");
    var hi = null;

    function gi(a, b) {
        var c = "function" === typeof ResizeObserver,
            d = Ee(a).frames;
        if (c)
            for (hi && hi.disconnect(), hi = new ResizeObserver(function() {
                    Ze(a)
                }), d = n(d), c = d.next(); !c.done; c = d.next()) hi.observe(c.value.document.body);
        else
            for (d = n(d), c = d.next(); !c.done; c = d.next()) c.value.onresize = function() {
                Ze(a)
            };
        b ? Ze(a) : setTimeout(function() {
            Ze(a)
        }, 0)
    }

    function fi(a, b) {
        var c = a.split("-");
        a = a.split("-");
        c.splice(c.length - 1, 0, "a");
        c = c.join("-");
        a.splice(a.length - 1, 0, "b");
        a = a.join("-");
        var d = [];
        b.includes(c) && d.push(2);
        b.hasOwnProperty(a) && d.push(3);
        return d
    }

    function ii(a, b, c) {
        var d = Math.max.apply(Math, a);
        a = Math.min.apply(Math, a);
        if (d - a > me)
            for (d = 0; d < b.length; d++) c[b[d]] = null;
        return c
    }
    ii = w(ii, "pBDF");

    function ji(a, b) {
        for (var c = {}, d = !1, e = [], f = [], g = n(Object.keys(a)), h = g.next(); !h.done; h = g.next())
            if (h = h.value, h in b) {
                var k = b[h],
                    l = a[h];
                "undefined" != typeof l && (l = pe(h, k, l), null != l && (c[h] = l, k.g == ne && (e.push(l), f.push(h)), d = !0))
            }
        0 < e.length && (c = ii(e, f, c));
        return d ? c : null
    }
    ji = w(ji, "vO");

    function ki(a, b) {
        return (re(a) || /^master-\d+$/.test(a)) && "object" == typeof b
    }
    ki = w(ki, "iPABO");

    function li(a) {
        try {
            if (!a) throw Error("Null, undefined or empty window.name.");
            var b = JSON.parse(a)
        } catch (d) {
            var c = d.message;
            a && (c = "Invalid window.name: " + a.split(",")[0]);
            z.log(c, "pNAO")
        }
        return b || {}
    }
    li = w(li, "pNAO");

    function mi(a, b) {
        var c = {},
            d;
        for (d in a) {
            var e = a[d];
            "name" == d ? c[d] = re(e) || /^master-\d+$/.test(e) ? e : null : ki(d, e) && (e = ji(e, b), c[d] = e, Q[d] = [])
        }
        return c
    }
    mi = w(mi, "vNAO");

    function ni(a, b, c, d) {
        var e = b.horizontalFlow ? -1 : b.columns;
        if (2 <= e && !(0 >= e)) {
            for (var f = [], g = 0, h = 0; h < e; h++)
                for (var k = Math.ceil((a.length - g) / (e - h)), l = 0; l < k; l++) f[l * e + h] = a[g++];
            a = f
        }
        f = void 0 === d ? !1 : d;
        d = a;
        g = !b.horizontalFlow;
        b = void 0 === f ? !1 : f;
        if (c.vd && 1 == e) {
            b = a.length;
            a = c.vd.split(",");
            e = [];
            for (f = 0; f < b; f++) e.push(a[f % a.length]);
            b = c.Te;
            g = '<div class="' + L("d_") + '">';
            c = d.length;
            for (a = 0; a < c; a++) {
                k = d[a];
                f = k.adIconUrl;
                h = '<div class="' + L("e_") + '" style="border-' + (b ? "right" : "left") + "-color: " + L(O(e[a])) + '"><a href="' +
                    L(Pf(k.l)) + '" class="' + L("c_") + ' popstripeRs" data-notrack="true" target="_top">' + (k.furl ? '<div class="' + L("f_") + '"><img src="' + L(Uf(k.furl)) + '" class="' + L("g_") + '"></div>' : "");
                l = k.t;
                k = H;
                if (0 < ("" + Cf("" + l)).length) {
                    var q = void 0;
                    var p = uf(l);
                    if (null == p) {
                        q = q || null != l && l.N === jf;
                        var x = p = 0,
                            r = !1;
                        q = hb(l + "", q).split(nb);
                        for (var y = 0; y < q.length; y++) {
                            var u = q[y];
                            lb.test(hb(u, void 0)) ? (p++, x++) : mb.test(u) ? r = !0 : kb.test(hb(u, void 0)) ? x++ : ob.test(u) && (r = !0)
                        }
                        p = 0 == x ? r ? 1 : 0 : .4 < p / x ? -1 : 1
                    }
                    l = '<span dir="' + (0 > p ? "rtl" : "ltr") +
                        '">' + vf(l) + "</span>"
                } else l = "";
                k = k(l);
                g += h + k + '<div class="' + L("h_") + '" style="background-image: url(' + L(Uf(null != f ? f : "//www.gstatic.com/domainads/images/chevron-white.png")) + ')"></div></a></div>'
            }
            d = H(g + "</div>")
        } else {
            f = '<table cellspacing="0" cellpadding="0"' + (2 <= e || g ? ' width="100%"' : "") + "><tbody><tr>";
            c = d.length;
            for (a = 0; a < c; a++) g = d[a], h = 0 > e || 2 <= e && a < e, h = (0 != a && 0 < e && 0 == a % e ? "</tr><tr>" : "") + '<td class="col' + (a == Cf(d).length - 1 ? " l" : "") + '"' + (2 <= e ? ' width="' + L(100 / e) + '%"' : "") + '><div class="ad' + (0 == a ? " f" :
                "") + (h ? " fr" : "") + (a == Cf(d).length - 1 ? " l" : "") + (!h && 2 <= e && a >= d.length - (d.length % e ? d.length % e : e) ? " lr" : "") + '"><div class="' + L("a_") + " " + L("b_") + ' radlinkC">', k = H(g.adIconUrl ? '<img class="adIcon" src="' + L(Uf(g.adIconUrl)) + '"/>' : ""), h = h + k + '<div class="adD">', b ? (k = Ff("" + Pf(g.l)), g = Ef("" + vf(g.t)), g = H('<div class="adStd"><a href="' + L(Pf(k)) + '" class="radlinkButtonLink" data-notrack="true" target="_top">' + H('<span style="height:20px;line-height:20px;width:20px;margin-right:5px"><svg class="radlinkSvg" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg></span>') +
                g + "</a></div>")) : (k = Ff("" + Pf(g.l)), g = Ef("" + vf(g.t)), g = H('<div class="adStd"><a href="' + L(Pf(k)) + '" class="' + L("c_") + '" data-notrack="true" target="_top">' + g + "</a></div>")), f += h + g + "</div></div></div></td>";
            d = H(f + "</tr></tbody></table>")
        }
        return d
    }
    ni = w(ni, "cRSN");

    function bi(a, b, c, d, e) {
        if (!(0 >= a.length)) {
            var f = null;
            if (Pa().data.cucai) {
                var g = "https:" == window.location.protocol;
                null != c.adIconUrl && 0 < c.adIconHeight && 0 < c.adIconWidth && ig(a, c.adIconUrl, g)
            }
            og(c, a);
            d = {
                Te: !!d.isRtl,
                vd: d.popstripeRs
            };
            if (2 == e) f = ni(a, c, d);
            else if (5 == e) {
                d = c.resultsPageBaseUrl;
                if (!d) throw A("resultsPageBaseUrl needs to be set for searchbox blocks.");
                f = a[0].afdt;
                a = a[0].label;
                e = ve(d);
                null != c.personalizedAds && (e.pcsa = "" + c.personalizedAds);
                c = '<div class="adStd"><form action="' + L(Pf(d)) + '" target="_top" method="get" accept-charset="UTF-8">';
                d = Bf(e);
                g = d.length;
                for (var h = 0; h < g; h++) {
                    var k = d[h];
                    c += '<input type="hidden" name="' + L(k) + '" value="' + L(e[k]) + '"/>'
                }
                c += '<table class="sb-table" cellspacing="0" cellpadding="0"><tbody><tr><td class="sbi-td"><input class="sbi" type="text" name="query" maxlength="63" title="Enter a search" autocomplete="off"/></td><td><input class="sbb" type="submit" value="' + (a ? L(a) : "Search") + '"/></td></tr></tbody></table><input type="hidden" name="afdToken" value="' + L(f) + '"/><input type="hidden" name="search" value="1"/></form></div>';
                f = H(c)
            }
            c = c = {
                Ma: Na(Ma())
            };
            c = H(ch(c.Ma, "googAFS"));
            b.appendChild(bg(c));
            f && b.appendChild(bg(f))
        }
    }
    bi = w(bi, "cAN");

    function oi(a, b, c) {
        var d = pi(a);
        a = Wh(b);
        var e = Pa(),
            f = Ma(),
            g = Ja();
        c.queryId && (pd("qi", c.queryId, E.j), Ic().yb = c.queryId || "");
        var h = f.data.eawp || null;
        h && pd("eawp", h, E.j);
        (g = !!g.data.sbn) && sd("sbn", g);
        h = {};
        g = !1;
        if (!ei())
            for (var k = 0; k < d.length; k++) {
                var l = d[k].adtype,
                    q = void 0 != l,
                    p = d[k],
                    x = p.fn;
                x.startsWith("slave-0") && (Vh = !0);
                x = x + "-" + a;
                Q[x] || (z.log(x, "pAJ2"), Q[x] = []);
                Q[x].push(p);
                q && (p = p[l], g = !0);
                3 != p.type && (p.v && (p.visDomain = p.v.replace(/<[^>^<]*>/g, "").replace(/\/.*$/, "").replace(/^www\./, ""), p.nonBreakingVisDomain =
                    p.visDomain.replace(/-/g, "&#8209;")), e.data.cgavu && p.v && (h[p.v.replace(/<[^>^<]*>/g, "")] = 1))
            }
        e.data.cgavu && (d = Object.keys(h).sort().join("|"), pd("v." + a, d, E.j));
        if (!ei())
            for (var r in Q)
                if (d = Q[r], h = d.length, 0 < h && !g && (k = d[0], 3 == k.type && (h = k.plas ? k.plas.length : 0)), Vh && /^master-\d+$/.test(r)) 0 < h && z.log(d.length, "pAJ3"), delete Q[r];
                else if (sd(r + ".hA", 0 < h), e.data.cgna && rd(r + ".aC", h), 1 > h) {
            if (d = Fe(r, b)) try {
                var y = d.document.getElementById("adBlock");
                if (y) {
                    var u = {
                        Ma: Na(f)
                    };
                    u = u || {};
                    var J = H(ch(u.Ma, "googNoAds"));
                    y.appendChild(bg(J))
                }
            } catch (G) {}
            delete Q[r]
        }
        for (var D in Uh) c[D] && sd(Uh[D], !0);
        (b = c.statusErrorCode) && rd("s.eC", parseInt(b, 10));
        sd("s.b", !!c.statusBlocked);
        Ma().data.isi && sd("s.iSI", !0);
        e.data.cgna && sd("aD." + a, !0);
        qd()
    }
    oi = w(oi, "pAJ");

    function pi(a) {
        var b = [],
            c;
        for (c in Sh) {
            var d = a[c];
            if (d) {
                for (var e = Sh[c], f = 0; f < d.length; f++) d[f].type = "ad_data" == c ? Th[d[f].adtype] : e;
                b = b.concat(d)
            }
        }
        return b
    }
    pi = w(pi, "cAA");

    function qi(a, b, c) {
        var d = null;
        window.XMLHttpRequest ? d = new XMLHttpRequest : window.ActiveXObject && (d = new ActiveXObject("Microsoft.XMLHTTP"));
        if (d) d.open("GET", "/afs/ads?" + c, !0), d.setRequestHeader("Duplicate", "1"), d.onreadystatechange = function() {
            if (4 == d.readyState) {
                var e = JSON.parse(d.responseText.substr(d.responseText.indexOf("//") + 2));
                if (!e) throw Error("Unable to use waitForAds");
                window.ad_json = e;
                ri(a, b)
            }
        }, d.send();
        else throw Error("Unable to create the HTTP request object.");
    }
    qi = w(qi, "rCAAC");

    function si(a) {
        if (a) {
            var b = {};
            a = n(a);
            for (var c = a.next(); !c.done; c = a.next()) {
                var d = c.value;
                c = d.n;
                d = d.v;
                "t" === d ? b[c] = !0 : "f" !== d && (b[c] = d)
            }
        } else b = {};
        return b
    }
    si = w(si, "cPATO");

    function ti(a, b, c) {
        window.sPH = function() {
            Ze(a)
        };
        window.mPAASH = function() {
            di(a, b, c)
        };
        return di(a, b, c)
    }
    ti = w(ti, "sCFC");

    function ui(a) {
        return function(b) {
            b = b.data.split(":");
            2 == b.length && "orientation" == b[0] && Ze(a)
        }
    }
    ui = w(ui, "bOCH");

    function ri(a, b) {
        var c = Ga(),
            d = si(c.caps);
        a = mi(b, a);
        oi(c, a, d);
        c = ti(a, d, c);
        Ra().data.hm && window.addEventListener("message", ui(a));
        return c
    }
    ri = w(ri, "raa");

    function vi(a, b) {
        var c = b.name,
            d = b && b[c] && qe(b[c]);
        wi();
        if (oc("sma")) {
            var e = kc("cei", mc()) || "";
            e.includes("17300001") ? rd("scs_mismatch_analysis_value", 1) : e.includes("17300002") ? rd("scs_mismatch_analysis_value", 2) : rd("scs_mismatch_analysis_value", 3);
            qd()
        }
        return d ? (qi(a.Ka, b, b[c].adRequestUrlParams), Promise.resolve()) : ri(a.Ka, b)
    }
    vi = w(vi, "init");

    function ei() {
        return null !== document.getElementById("ssrab")
    }
    ei = w(ei, "iSSRE");

    function wi() {
        pd("it", document.title, E.j);
        qd()
    }
    wi = w(wi, "setTitle");

    function xi(a, b) {
        this.ba = a;
        this.qb = b
    }
    xi.prototype.H = function() {
        var a = this.ba.H() + " (one by itself, or multiple in an Array";
        this.qb && (a += " with fewer than " + (this.qb + 1) + " elements");
        return a + ")"
    };
    xi.prototype.D = function(a) {
        a = Array.isArray(a) ? a : [a];
        if (this.qb && a.length > this.qb) return null;
        for (var b = [], c = 0; c < a.length; c++) {
            var d = this.ba.D(a[c]);
            if (null == d) return null;
            b.push(d)
        }
        return 0 == b.length ? null : b
    };
    xi.prototype.G = function(a) {
        a = this.D(a);
        return null == a || 1 > a.length ? null : this.ba.G(a[0])
    };

    function R(a, b) {
        this.Ja = Math.ceil(a);
        this.Ia = Math.floor(b)
    }
    R.prototype.H = function() {
        return this.Ja + " - " + this.Ia
    };
    R.prototype.D = function(a) {
        a = parseInt(a, 10);
        return a >= this.Ja && a <= this.Ia ? a : null
    };
    R.prototype.G = function(a) {
        return this.D(a)
    };

    function yi() {}
    yi.prototype.H = function() {
        return "A function"
    };
    yi.prototype.D = function(a) {
        return "function" === typeof a ? !0 : !1
    };
    yi.prototype.G = function() {
        return null
    };
    var zi = new yi;
    var Ai = /#(.)(.)(.)/;

    function Bi(a) {
        if (!Ci.test(a)) throw Error("'" + a + "' is not a valid hex color");
        4 == a.length && (a = a.replace(Ai, "#$1$1$2$2$3$3"));
        return a.toLowerCase()
    }
    var Ci = /^#(?:[0-9a-f]{3}){1,2}$/i,
        Di = /^(?:rgb)?\((0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2}),\s?(0|[1-9]\d{0,2})\)$/i;
    var Ei = {
        black: "#000000",
        blue: "#0000ff",
        darkorange: "#ff8c00",
        darkred: "#8b0000",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        grey: "#808080",
        orange: "#ffa500",
        red: "#ff0000",
        royalblue: "#4169e1",
        skyblue: "#87ceeb",
        white: "#ffffff",
        whitesmoke: "#f5f5f5",
        yellow: "#ffff00"
    };

    function Fi(a) {
        this.Xc = a
    }
    Fi.prototype.H = function() {
        var a = "A hexadecimal color string";
        this.Xc && (a += " or 'transparent'");
        return a
    };
    Fi.prototype.D = function(a) {
        var b = zb("" + a).toLowerCase();
        if (this.Xc && "transparent" == b) return "transparent";
        if (Ei[b]) return Ei[b];
        a = null;
        try {
            a = Bi("#" == b.charAt(0) ? b : "#" + b)
        } catch (q) {}
        if (!a) try {
            a: {
                var c = b.match(Di);
                if (c) {
                    var d = Number(c[1]),
                        e = Number(c[2]),
                        f = Number(c[3]);
                    if (0 <= d && 255 >= d && 0 <= e && 255 >= e && 0 <= f && 255 >= f) {
                        var g = [d, e, f];
                        break a
                    }
                }
                g = []
            }
            if (!g.length) throw Error(b + " is not a valid RGB color");
            var h = g[0],
                k = g[1],
                l = g[2];h = Number(h);k = Number(k);l = Number(l);
            if (h != (h & 255) || k != (k & 255) || l != (l & 255)) throw Error('"(' +
                h + "," + k + "," + l + '") is not a valid RGB color');k = h << 16 | k << 8 | l;a = 16 > h ? "#" + (16777216 | k).toString(16).substr(1) : "#" + k.toString(16)
        }
        catch (q) {}
        return a
    };
    Fi.prototype.G = function() {
        return null
    };
    var Gi = new Fi(!1),
        Hi = new Fi(!0);

    function Ii(a) {
        this.ba = a
    }
    Ii.prototype.H = function() {
        return this.ba.H() + " (one or more, comma separated)"
    };
    Ii.prototype.D = function(a) {
        a = Ji(a);
        for (var b = [], c = 0; c < a.length; c++) {
            var d = this.ba.D(a[c]);
            null != d && b.push(d)
        }
        return 0 == b.length ? null : b.join(",")
    };
    Ii.prototype.G = function(a) {
        a = Ji(a);
        for (var b = 0; b < a.length; b++) {
            var c = this.ba.G(a[b]);
            if (null != c) return c
        }
        return null
    };

    function Ji(a) {
        if ("string" !== typeof a) return [];
        a = a.split(",");
        for (var b = [], c = 0; c < a.length; c++) b.push(zb(a[c]));
        return b
    };

    function Ki(a, b) {
        b = void 0 === b ? 0 : b;
        this.Rc = a;
        this.Sc = {};
        for (a = 0; a < this.Rc.length; a++) {
            var c = this.Rc[a];
            this.Sc[c.toLowerCase()] = new Li(c, b + a)
        }
    }
    Ki.prototype.H = function() {
        return this.Rc.join(", ") + " (case insensitive)"
    };

    function Mi(a, b) {
        if (!b || "string" !== typeof b) return Ni;
        b = b.toLowerCase();
        return a.Sc.hasOwnProperty(b) ? a.Sc[b] : Ni
    }
    Ki.prototype.D = function(a) {
        return Mi(this, a).hf
    };
    Ki.prototype.G = function(a) {
        return Mi(this, a).id
    };

    function Li(a, b) {
        this.hf = a;
        this.id = b
    }
    var Ni = new Li(null, null);
    var Oi = /^\d+px$/i,
        Pi = /^\d+%$/,
        Qi = /^[0-9]+\.[0-9]{1,}$/;

    function Ri() {}
    Ri.prototype.H = function() {
        return "Width in px (e.g. '500px') or 'auto'"
    };
    Ri.prototype.D = function(a) {
        var b = Si(a);
        return null != b ? b + "px" : "string" !== typeof a || "auto" != a && !Pi.test(a) ? null : a
    };
    Ri.prototype.G = function(a) {
        return Si(a)
    };

    function Si(a) {
        var b;
        (b = "number" === typeof a) || (b = "string" === typeof a && (!/[^0-9]/.test(a) || Qi.test(a) || Oi.test(a)));
        return b ? (a = parseInt(a, 10), isNaN(a) ? null : a) : null
    }
    var Ti = new Ri;
    var Ui = /^[0-9a-zA-Z]*$/;

    function Vi() {}
    Vi.prototype.G = function() {
        return null
    };
    Vi.prototype.H = function() {
        return "A settings id"
    };
    Vi.prototype.D = function(a) {
        return ("string" === typeof a || "number" === typeof a && !Number.isNaN(a)) && Ui.test(a) ? "" + a : null
    };

    function Wi() {}
    Wi.prototype.H = function() {
        return "A string"
    };
    Wi.prototype.D = function(a) {
        return "string" === typeof a ? a : null
    };
    Wi.prototype.G = function() {
        return null
    };
    var Xi = new Wi;

    function Yi() {}
    Yi.prototype.H = function() {
        return "An http(s) url"
    };
    Yi.prototype.D = function(a) {
        return "string" === typeof a && Zi.test(a) ? a : null
    };
    Yi.prototype.G = function() {
        return null
    };
    var Zi = /^((https?):)?\/\/([a-zA-Z0-9~!@#\$&\*\(\)_\+\-=:;',\.\?\/%]*)$/,
        $i = new Yi;
    var aj = new R(2, 400),
        bj = new R(0, 400),
        cj = new R(8, 50),
        dj = new Ii(new Ki("verdana;arial;tahoma;times new roman;georgia;trebuchet ms;meiryo;ms gothic;roboto;helvetica neue".split(";"), 1)),
        ej = new Ii(new Ki(["right", "left", "top", "bottom"])),
        S = {},
        fj = (S.adsafe = {
                g: new Ki(["off", "low", "med", "high"]),
                rd: !0
            }, S.adtest = {
                g: F,
                rd: !0
            }, S.clicktrackUrl = {
                g: new xi($i)
            }, S.container = {
                g: Xi
            }, S.styleId = {
                g: new Vi
            }, S.personalizedAds = {
                g: F
            }, S.personalisedAds = {
                g: F
            }, S.adpage = {}, S.adPage = {}, S.adsResponseCallback = {}, S.bgresponse = {},
            S.channel = {}, S.cmpSdkId = {}, S.container = {}, S.cref = {}, S.cx = {}, S.deb = {}, S.debug = {}, S.domainName = {}, S.e = {}, S.expflags = {}, S.fakeads = {}, S.fcap = {}, S.fexp = {}, S.forceEx = {}, S.gcsc = {}, S.gdprApplies = {}, S.iframeHeightCallback = {}, S.jsSrc = {}, S.masterNumber = {}, S.ms = {}, S.noAdLoadedCallback = {}, S.number = {}, S.propertyCode = {}, S.pubId = {}, S.query = {}, S.role = {}, S.rowkeyV2 = {}, S.sbsignals = {}, S.settingsId = {}, S.slaveNumber = {}, S.source = {}, S.source_ip = {}, S.tcString = {}, S.uideb = {}, S.userAgent = {}, S.usPrivacy = {}, S.uuld = {}, S.uap = {},
            S.uapv = {}, S.uaa = {}, S.uafv = {}, S.uam = {}, S.uab = {}, S.trustToken = {}, S.tt_state = {}, S.sct = {}, S.sc_status = {}, S.adLoadedCallback = {
                g: zi
            }, S.adRequestUrlParams = {
                g: Xi
            }, S.hl = {
                g: Xi
            }, S.cpp = {}, S),
        T = {},
        gj = (T.colorText = {
                g: Gi,
                C: !0,
                A: !0
            }, T.colorTitleLink = {
                g: Gi,
                C: !0,
                A: !0
            }, T.colorBorder = {
                g: Gi,
                C: !0,
                A: !0
            }, T.colorAttribution = {
                g: Gi,
                A: !0
            }, T.fontFamily = {
                g: dj,
                C: !0,
                A: !0
            }, T.fontFamilyAttribution = {
                g: dj,
                A: !0
            }, T.titleBold = {
                g: F,
                C: !0,
                A: !0
            }, T.rolloverLinkBold = {
                g: F,
                C: !0,
                A: !0
            }, T.rolloverLinkColor = {
                g: Gi,
                C: !0,
                A: !0
            }, T.rolloverLinkBackgroundColor = {
                g: Gi,
                C: !0,
                A: !0
            }, T.rolloverLinkUnderline = {
                g: F,
                C: !0,
                A: !0
            }, T.noTitleUnderline = {
                g: F,
                A: !0
            }, T.adBorderSelections = {
                g: ej,
                A: !0
            }, T.borderSelections = {
                g: ej,
                A: !0
            }, T.position = {
                g: new Ki(["top", "right", "bottom"])
            }, T.cseGoogleHosting = {
                g: new Ki(["full", "iframe", "partner"])
            }, T.adIconUrl = {
                g: $i,
                A: !0
            }, T.adIconWidth = {
                g: aj,
                A: !0
            }, T.adIconHeight = {
                g: aj,
                A: !0
            }, T.adIconSpacingAbove = {
                g: bj,
                C: !0,
                A: !0
            }, T.adIconSpacingBefore = {
                g: bj,
                A: !0
            }, T.adIconSpacingAfter = {
                g: bj,
                A: !0
            }, T.adIconSpacingBelow = {
                g: bj,
                A: !0
            }, T.lineHeightTitle = {
                g: cj,
                A: !0
            },
            T.waitForAds = {
                g: F
            }, T.heightConstrained = {
                g: F,
                R: "hc"
            }, T.width = {
                g: Ti,
                R: "wi",
                C: !0
            }, T.attributionSpacingBelow = {
                g: new R(0, 40),
                A: !0
            }, T.resultsPageBaseUrl = {
                g: $i
            }, T.radlinkBaseUrl = {
                g: $i
            }, T.radlinkQueryParam = {
                g: Xi
            }, T.columns = {
                g: new R(1, 20),
                U: 1
            }, T.columnSpacing = {
                g: new R(2, 100)
            }, T.horizontalFlow = {
                g: F
            }, T.horizontalAlignment = {
                g: new Ki(["center", "left", "right"]),
                U: "left"
            }, T.resultsPageQueryParam = {
                g: Xi,
                U: "query"
            }, T.rurlOverride = {
                g: Xi
            }, T.terms = {
                g: Xi
            }, T.kw = {
                g: Xi
            }, T.referrerAdCreative = {
                g: Xi
            }, T.relatedSearchResultClickedCallback = {
                g: zi
            }, T.relatedSearchUseResultCallback = {
                g: F
            }, T.adfiliateWp = {
                g: Xi
            }, T.adstyle = {}, T.afdToken = {}, T.attmas = {}, T.gcs = {}, T.gcse_nc = {}, T.gl = {}, T.gm = {}, T.gr = {}, T.ie = {}, T.maxTermLength = {}, T.maxTop = {}, T.minTop = {}, T.numRepeated = {}, T.oe = {}, T.queryContext = {}, T.queryLink = {}, T.referrer = {}, T.relatedSearches = {}, T.visibleUrlsCallback = {}, T);

    function hj() {}
    hj.prototype.H = function() {
        return "A web font"
    };
    hj.prototype.D = function(a) {
        return "string" !== typeof a || /[^a-zA-Z0-9 ]/.test(a) ? null : a
    };
    hj.prototype.G = function() {
        return null
    };
    var ij = new hj;
    var jj = new R(8, xd),
        kj = {},
        lj = (kj.type = {
            g: new Ki(["ads", "textads", "relatedsearch", "searchbox", "dynamic"])
        }, kj.linkTarget = {
            g: new Ki(["_top", "_blank"]),
            U: "_blank",
            C: !0
        }, kj.verticalSpacing = {
            g: new R(2, 24)
        }, kj.fontSizeTitle = {
            g: ne,
            C: !0,
            U: 18
        }, kj.fontSizeAttribution = {
            g: ne,
            C: !0,
            U: 13
        }, kj),
        U = {},
        mj = (U.colorAdSeparator = {
            g: Gi,
            A: !0
        }, U.rolloverAdBackgroundColor = {
            g: Hi,
            C: !0
        }, U.colorBackground = {
            g: Hi,
            C: !0
        }, U.hideSearchInputBorder = {
            g: F
        }, U.hideSearchButtonBorder = {
            g: F
        }, U.colorSearchBox = {
            g: Hi
        }, U.colorSearchButton = {
            g: Hi
        }, U.colorSearchButtonText = {
            g: Hi
        }, U.widthSearchInput = {
            g: new R(1, 1E3),
            C: !0
        }, U.widthSearchButton = {
            g: new R(100, 1E3),
            C: !0
        }, U.fontSizeSearchInput = {
            g: jj
        }, U.fontSizeSearchButton = {
            g: jj
        }, U.heightSearchInput = {
            g: new R(1, 50)
        }, U.heightSearchButton = {
            g: new R(1, 50)
        }, U.colorSearchButtonBorder = {
            g: Hi
        }, U.widthSearchButtonBorder = {
            g: new R(0, 5)
        }, U.radiusSearchInputBorder = {
            g: new R(0, 20)
        }, U.attributionBold = {
            g: F
        }, U.attributionUppercase = {
            g: F
        }, U.titleUppercase = {
            g: F
        }, U.webFontFamily = {
            g: ij
        }, U.webFontFamilyAttribution = {
            g: ij
        }, U.uiOptimize = {
            g: F
        }, U.ui_optimize = {
            g: F
        }, U.adBorderWidth = {
            g: new R(0, 20)
        }, U.relatedSearchTargeting = {
            g: new Ki($a(oe || []))
        }, U.domainRegistrant = {}, U.domainSessionToken = {}, U.languageCode = {}, U.pageLoadedCallback = {}, U.size = {}, U),
        nj = {};
    td(nj, fj);
    td(nj, gj);
    td(nj, lj);
    td(nj, mj);
    ud(nj, [
        ["container"], "role"
    ]);
    var oj = {
        Ka: nj
    };
    var pj = {},
        qj = (pj.rolloverAdBackgroundColor = {
            g: Gi,
            C: !0,
            A: !0
        }, pj.colorBackground = {
            g: Gi,
            C: !0,
            A: !0
        }, pj.verticalSpacing = {
            g: new R(2, 34)
        }, pj.type = {
            g: new Ki(["ads", "relatedsearch"])
        }, pj.fontSizeTitle = {
            g: ne,
            C: !0,
            A: !0
        }, pj.fontSizeAttribution = {
            g: ne,
            C: !0,
            A: !0
        }, pj.linkTarget = {
            g: new Ki(["_top", "_blank"]),
            U: "_top",
            C: !0
        }, pj),
        rj = {};
    td(rj, fj);
    td(rj, gj);
    td(rj, qj);
    ud(rj, ["query", ["container"], "role"]);
    var sj = {
        Ka: rj
    };
    var tj = {},
        uj = (tj.disableCarousel = {
            g: F,
            R: "dc"
        }, tj.enableInteractive = {
            g: F,
            R: "ei"
        }, tj.gpcId = {
            g: Xi,
            R: "gi"
        }, tj.height = {
            g: new R(0, 1E4),
            R: "he"
        }, tj.merchantFilter = {}, tj.priceCurrency = {}, tj.priceMax = {}, tj.priceMin = {}, tj.promoted = {}, tj.testgl = {}, tj.textColorPalette = {}, tj.theme = {}, tj),
        vj = {},
        wj = (vj.width = {
            g: new R(0, 1E4),
            R: "wi"
        }, vj.linkTarget = {
            g: new Ki(["_top", "_blank"]),
            U: "_top",
            C: !0
        }, vj.type = {
            g: new Ki(["plas"])
        }, vj),
        xj = {};
    td(xj, wj);
    td(xj, fj);
    td(xj, uj);
    ud(xj, [
        ["container"],
        ["height"],
        ["width"], "query", "role"
    ]);
    var yj = {
        Ka: xj,
        Xa: "plas"
    };

    function Dj() {
        var a = window.AFS_AD_REQUEST_RETURN_TIME_;
        a && pd("irt", a + "|" + Date.now(), E.j);
        a = li(window.name);
        switch ((a[a.name] || {}).type) {
            case "plas":
                vi(yj, a);
                break;
            default:
                vi(sj, a)
        }
        setTimeout(function() {
            try {
                var b = document.getElementById("response_debug_output");
                if (b) {
                    var c = document.getElementById("adBlock");
                    c && (b.parentNode.removeChild(b), 0 == c.childNodes.length ? c.appendChild(b) : c.insertBefore(b, c.childNodes[0]))
                }
            } catch (d) {}
        }, 0)
    }
    window.IS_GOOGLE_AFS_IFRAME_ && (xc() ? window.onload = Dj : Dj());

    function Ej(a, b) {
        this.Ca = a;
        this.Df = void 0 === b ? 500 : b;
        this.na = null;
        this.td = {};
        this.ge = 0;
        this.Jb = null
    }
    ra(Ej, jg);

    function Fj(a) {
        var b;
        return "function" === typeof(null === (b = a.Ca) || void 0 === b ? void 0 : b.__uspapi) || null != a.Ba()
    }

    function Gj(a, b) {
        var c = {};
        if (Fj(a)) {
            var d = Va(function() {
                return b(c)
            });
            Hj(a, function(e, f) {
                f && (c = e);
                d()
            });
            setTimeout(d, a.Df)
        } else b(c)
    }

    function Hj(a, b) {
        var c;
        if ("function" === typeof(null === (c = a.Ca) || void 0 === c ? void 0 : c.__uspapi)) a = a.Ca.__uspapi, a("getUSPData", 1, b);
        else if (a.Ba()) {
            Ij(a);
            var d = ++a.ge;
            a.td[d] = b;
            a.na && (b = {}, a.na.postMessage((b.__uspapiCall = {
                command: "getUSPData",
                version: 1,
                callId: d
            }, b), "*"))
        }
    }
    Ej.prototype.Ba = function() {
        return this.na ? this.na : this.na = Gh(this.Ca, "__uspapiLocator")
    };

    function Ij(a) {
        a.Jb || (a.Jb = function(b) {
            var c;
            try {
                var d = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__uspapiReturn;
                null === (c = a.td) || void 0 === c ? void 0 : c[d.callId](d.returnValue, d.success)
            } catch (e) {}
        }, Eh(a.Ca, a.Jb))
    };
    var Kj = B(function() {
        var a = lc("uatm"),
            b = null != a ? a : 5;
        a = new Ej(window);
        return Fj(a) ? (a = Jj(a), Promise.race([a, Ke(b, 4)]).then(function(c) {
            return 2 === c ? {
                wb: !1,
                ma: c
            } : 4 === c ? (console.warn("Reached" + b + "ms timeout and before USP response was received."), {
                wb: !1,
                ma: c
            }) : 6 === c ? {
                wb: !1,
                ma: c
            } : {
                wb: !0,
                ma: c
            }
        })) : null
    }, "gCAD");

    function Jj(a) {
        function b(d) {
            d && "string" === typeof d.uspString ? c.resolve(Lj(d.uspString)) : c.resolve(3)
        }
        var c = Ie();
        try {
            Gj(a, b)
        } catch (d) {
            c.resolve(6), console.warn("USP returned error status: " + d)
        }
        return c.promise
    }

    function Lj(a) {
        if (/^[1-9][nyNY\-][nyNY][nyNY\-]$/.test(a)) {
            var b = a.charAt(2);
            if (/^Y|y/.test(b)) return 2;
            if (/^N|n/.test(b)) return 1
        }
        if ("1---" === a) return 5;
        b = "3:" + a;
        console.warn("CCPA US Privacy string " + a + " is malformed and personalization intent was unable to be fetched.");
        return b
    };

    function Mj() {}

    function Nj() {
        return new Bc(rc() + "/afs/ads/i/iframe.html")
    }
    Mj.prototype.pd = function() {
        return !1
    };

    function Oj(a, b, c, d) {
        this.Hd = a;
        this.Rb = b;
        this.Va = c;
        this.qd = d;
        this.Gb = !1;
        this.dc = 0
    }

    function Pj(a, b, c, d) {
        d = void 0 === d ? {} : d;
        a.Hd--;
        a.Gb = a.Gb || b;
        c > a.dc && (a.dc = c);
        if (0 == a.Hd)
            if (a.Gb) {
                if (a.Va) {
                    b = void 0;
                    switch (a.dc) {
                        case 2:
                            b = !0;
                            break;
                        case 1:
                            b = !1
                    }
                    try {
                        a.Va(a.Rb, !0, b, d)
                    } catch (e) {}
                }
            } else {
                if (a.qd) try {
                    a.qd(a.Rb, !1, void 0, d)
                } catch (e) {}
                if (a.Va) try {
                    a.Va(a.Rb, !1, void 0, d)
                } catch (e) {}
            }
    };

    function Qj(a) {
        var b = window.location.href;
        a = zb("" + a).replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,\-.\/:;<=>?@\[\]^`{|}~]/g, "").toLowerCase();
        if (0 === a.length) return null;
        var c = b.indexOf("?"),
            d = b.indexOf("#");
        if (-1 === c) return null; - 1 === d && (d = b.length);
        var e = b.slice(c + 1, d).split("&");
        c = e.map(function(k) {
            k = k.substr(0, k.indexOf("="));
            try {
                return decodeURIComponent(k)
            } catch (l) {
                return k
            }
        });
        for (var f = e.map(function(k) {
                k = k.substr(k.indexOf("=") + 1);
                try {
                    k = decodeURIComponent(k)
                } catch (l) {}
                return zb(k.replace(/\+/g,
                    " ").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*,\-.\/:;<=>?@\[\]^`{|}~]/g, "").toLowerCase())
            }), g = -1, h = 0; h < e.length; h++)
            if (a === f[h]) {
                if (-1 < g) return null;
                g = h
            }
        if (-1 === g)
            for (h = 0; h < e.length; h++)
                if (f[h].includes(a) || a.includes(f[h])) {
                    if (-1 < g) return null;
                    g = h
                }
        if (-1 === g) return null;
        a = b.indexOf("&" + e[g]);
        if (-1 === a && (a = b.indexOf("?" + e[g]), -1 === a)) return null;
        a++;
        e = b.indexOf("&", a) + 1;
        0 === e && (a--, e = d);
        b = b.substring(0, a) + b.substring(e);
        b = b.split("#");
        b[0] = b[0].replace(/&rsToken=[^&]+|rsToken=[^&]+&|\?rsToken=[^&]+$/,
            "");
        b = b.join("#");
        d = {};
        return d.resultsPageBaseUrl = b, d.resultsPageQueryParam = c[g], d
    };
    var Rj = window;

    function Sj(a, b) {
        a && null !== b && b != b.top && (b = b.top);
        try {
            return Xd(b || window).round()
        } catch (c) {
            return new Sd(-12245933, -12245933)
        }
    };

    function Tj() {
        var a = void 0 === a ? t.top : a;
        return Fh(a, "googlefcInactive")
    };
    var Uj = new function(a, b) {
        this.Ce = a;
        this.defaultValue = void 0 === b ? !1 : b
    }(419638674);

    function Vj() {
        var a = Wj,
            b = "qc";
        if (a.qc && a.hasOwnProperty(b)) return a.qc;
        var c = new a;
        a.qc = c;
        a.hasOwnProperty(b);
        return c
    };

    function Wj() {
        var a = {};
        this.ld = function() {
            var b = Uj.Ce,
                c = Uj.defaultValue;
            return null != a[b] ? a[b] : c
        }
    };
    Vj();

    function Xj(a) {
        return a.some(function(b) {
            return b.hasRedemptionRecord
        })
    }

    function Yj(a) {
        var b = {};
        a = a.filter(function(c) {
            return c.hasRedemptionRecord
        }).map(function(c) {
            return c.issuerOrigin
        });
        if (0 == a.length) return null;
        a = {
            type: "send-redemption-record",
            issuers: a,
            refreshPolicy: "none",
            signRequestData: Vj().ld() ? "omit" : "include",
            includeTimestampHeader: !0,
            additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
        };
        !Vj().ld() && b && 0 < Object.keys(b).length && (a.additionalSigningData = Pg(JSON.stringify(b)));
        return a
    };
    var Zj = void 0;

    function X(a, b, c, d, e, f, g, h, k, l) {
        l = void 0 === l ? [] : l;
        this.I = a;
        this.$ = this.Z = this.Y = 0;
        this.options = {};
        this.container = null;
        this.da = void 0 === k ? 1 : k;
        this.Kc = c;
        this.V = h || [];
        this.sd = e || null;
        this.Ha = this.bd = this.Za = !1;
        this.M = Ic();
        this.va = this.X = this.W = this.Ed = "";
        this.Ga = this.K = !1;
        this.jd = "";
        this.Ya = new Bc("");
        this.xa = l;
        this.zb = this.Ea = 0;
        this.yd = d;
        this.za = null;
        this.Vc = [];
        this.Mb = {};
        this.ja = this.ob = null;
        this.oc(b, f, g, h)
    }
    m = X.prototype;
    m.Tb = function(a) {
        if (this.K) return "n0";
        var b = this.Z,
            c = this.Y,
            d = this.$;
        null != a && (b += "minTop" in a ? a.minTop : 0, c += "maxTop" in a ? a.maxTop : 0, d += "rhs" in a ? a.rhs : 0);
        if (c && b > c) throw A("Cannot request more minTop ads than maxTop.");
        return (0 < d ? "n" + d : "") + (0 < c ? "p" + c : "") + (0 < b ? "a" + b : "")
    };
    m.Wb = function(a, b) {
        a = this.T(a);
        b && 0 < b.length && (b.splice(0, 0, a), a = b.join("|"));
        return a
    };
    m.T = function(a) {
        this.$ = a.number || 0;
        this.Z = a.minTop;
        this.Y = a.maxTop;
        this.$ || this.Z || this.Y || (this.$ = 2);
        if (this.$ && (this.Y || this.Z)) throw A("Cannot request standard and top ads in the same ad block.");
        if (this.K && 0 != a.slaveNumber && !a.firstTextAdBlock && (this.Y || this.Z)) throw A("Only the first ad block can have top ads.");
        var b;
        this.Y || this.Z ? b = "p" : this.$ && (b = "n");
        return "" + b + (this.Y || this.Z || this.$ || 0)
    };
    m.Gd = function() {};
    m.Tc = function(a, b, c) {
        var d = {};
        a.settingsId && !a.styleId && (a.styleId = a.settingsId);
        a.styleId && delete a.settingsId;
        a.hasOwnProperty("personalisedAds") && (a.hasOwnProperty("personalizedAds") ? a.personalizedAds = a.personalisedAds && a.personalizedAds : a.personalizedAds = a.personalisedAds);
        a.hasOwnProperty("personalizedAds") && delete a.personalisedAds;
        a.referrerAdCreative && (a.kw ? console.warn("Cannot set both referrerAdCreative and kw, ignoring referrerAdCreative") : a.kw = a.referrerAdCreative, delete a.referrerAdCreative);
        a.cmpSdkId && !a.tcString && (a.tcString = "tcunavailable");
        1 == a.gdprApplies ? a.gdprApplies = !0 : 0 == a.gdprApplies && (a.gdprApplies = !1);
        if (nc("ecfc2", mc()) && a.usPrivacy) {
            var e = Lj(a.usPrivacy);
            a.cpp = e;
            2 === e && (d.personalizedAds = !1)
        }
        "plas" == a.type && a.styleId && (this.I.width.vc = !1, this.I.height.vc = !1);
        e = n(Object.keys(this.I));
        for (var f = e.next(); !f.done; f = e.next()) {
            f = f.value;
            if (this.I[f].vc && ("query" == f && (null == a[f] || "" == a[f]) || "query" != f && !a[f])) throw A("Missing option '" + f + "'.");
            "undefined" != typeof a[f] && null !=
                a[f] && (d[f] = a[f])
        }
        a.rurlOverride && (console.warn("adtest is enabled when an rurlOverride value is provided"), d.adtest = "on");
        if (e = ue(t.location.href, "google_afsexp")) d.afsexp = e, d.adtest = "on", console.warn("adtest is enabled when google_afsexp is used");
        this.K = "m" != a.role;
        this.Lb(d);
        this.K || (e = ue(window.location.href, "rsToken")) && (d.afdToken = e);
        d.adLoadedCallback = a.adLoadedCallback || a.callback || null;
        d.oe = d.oe || "UTF-8";
        d.ie = d.ie || "UTF-8";
        d.number = ak(d.number);
        d.minTop = ak(d.minTop);
        d.maxTop = ak(d.maxTop);
        d.fexp = (d.fexp ? d.fexp + "," : "") + (d.gcsc ? "20606" : "21404");
        (e = kc("cei", mc())) && (d.fexp += "," + e);
        void 0 != d.forceEx && ("MostLaunches" === d.forceEx ? (d.e = "MostLaunches", delete d.forceEx) : d.e || (d.e = "OnlyForcedExperiments"));
        d.gcsc && "top" == a.position && (d.maxTop = a.number, d.number = null);
        d.format = this.K ? this.T(d) : this.Wb(d, b);
        this.jd = d.format;
        d.ads = this.Tb(c);
        d.nocache = [Math.floor(1E3 * Math.random()), Date.now()].join("");
        d.num = "0";
        d.output = this.Kc.mc();
        if (this.Kc.pd()) try {
            d.domainName || (d.domainName = window.document.domain),
                d.domainName = d.domainName.substring(0, 80)
        } catch (h) {} else delete d.domainName;
        d.gcsc && (d.source = "gcsc");
        d.v = qe(d) ? "4" : "3";
        "string" !== typeof d.pubId && (d.pubId = "" + d.pubId);
        0 == d.pubId.indexOf("partner-") && (d.pubId = d.pubId.substring(8));
        a = Tj() ? 4 : 0;
        var g;
        b = g = void 0 === g ? t : g;
        b = void 0 === b ? t : b;
        (b = !!b.googlefc) || (g = g.top, g = void 0 === g ? t.top : g, b = Fh(g, "googlefcPresent"));
        if (b && !Tj() || 0 != a) d.fcsa = a;
        d = bk(d);
        !d.titleBold || !0 !== d.titleBold && 1 != d.titleBold ? d.titleBold && delete d.titleBold : d.titleBold = 1;
        this.Gd(d);
        return d
    };
    m.Ac = function(a) {
        var b = [],
            c;
        for (c in a) a.hasOwnProperty(c) && c in this.I && this.I[c].R && b.push(ck(a[c], this.I[c]));
        return b.join("")
    };
    m.ya = function(a, b) {
        var c = [],
            d;
        for (d in a) !(a.hasOwnProperty(d) && d in this.I && this.I[d].R) || d in b && b[d] == a[d] || c.push(ck(a[d], this.I[d]));
        return c.join("")
    };
    m.Yb = function(a, b, c) {
        var d = b.filter(function(f) {
            return 1 === f.da
        });
        if (0 == d.length) return this.ya(a, {}) + "-";
        c.pubId = a.pubId;
        c = bk(c);
        b = this.Ac(c);
        var e = [];
        e.push(this.ya(a, c));
        a = n(d);
        for (d = a.next(); !d.done; d = a.next()) d = d.value, d.options.slaveNumber && 0 != d.options.slaveNumber && e.push(this.ya(d.options, c));
        return [b, e.join("-")].join("-")
    };

    function dk(a) {
        return a.options && a.options.type ? "searchbox" === a.options.type : !1
    }
    m.Vb = function(a, b) {
        var c = /^[A-Za-z]+[\w\-:\.]*$/,
            d = [];
        this.Ga || dk(this) || (a = a.container, d.push(c.test(a) ? a : ""));
        b = n(b);
        for (a = b.next(); !a.done; a = b.next()) a = a.value, dk(a) || 1 !== a.da || (a = a.options.container, d.push(c.test(a) ? a : ""));
        return d.join("|")
    };
    m.Zb = function(a) {
        var b = this.Kc.jc();
        this.Hb(a, b);
        3 == window.googleAltLoader ? v(b, "bsl", 8) : 4 == window.googleAltLoader && v(b, "bsl", 10);
        v(b, "pac", ek(a));
        if (!this.K) {
            var c = void 0 === c ? window : c;
            var d = void 0 === d ? document : d;
            var e = void 0 === e ? new Date : e;
            var f = c;
            f = void 0 === f ? Rj : f;
            try {
                var g = f.history.length
            } catch (l) {
                g = 0
            }
            v(b, "u_his", g);
            v(b, "u_tz", -e.getTimezoneOffset());
            v(b, "dt", e.getTime());
            v(b, "u_w", c.screen.width);
            v(b, "u_h", c.screen.height);
            e = Sj(!0, c);
            v(b, "biw", e.width);
            v(b, "bih", e.height);
            c.top != c && (e = Sj(!1, c),
                v(b, "isw", e.width), v(b, "ish", e.height));
            d.body ? (e = !c.scrollY && "CSS1Compat" != d.compatMode, d = new Sd(e ? d.body.scrollWidth : d.body.offsetWidth, e ? d.body.scrollHeight : d.body.offsetHeight)) : d = new Sd(-1, -1);
            v(b, "psw", d.width);
            v(b, "psh", d.height);
            if (c.top == c) var h = 0;
            else {
                c = c.top;
                try {
                    var k;
                    if (k = !!c && null != c.location.href) b: {
                        try {
                            Ad(c.foo);
                            k = !0;
                            break b
                        } catch (l) {}
                        k = !1
                    }
                    h = k
                } catch (l) {
                    h = !1
                }
                h = h ? 1 : 2
            }
            v(b, "frm", h)
        }
        v(b, "uio", this.Ed);
        v(b, "cont", this.Vb(this.options, this.V));
        v(b, "jsv", Vc().substring(0, 5), !0);
        a.radlinkBaseUrl &&
            a.radlinkQueryParam && v(b, "qup", "1");
        a.rurlOverride ? v(b, "rurl", a.rurlOverride, !0) : (h = window.location.href, 0 == h.indexOf("about:") && window.location.ancestorOrigins && window.location.ancestorOrigins.length && 0 < window.location.ancestorOrigins.length && (h = window.location.ancestorOrigins[0]), v(b, "rurl", h, !0));
        v(b, fk.referer, document.referrer, !0);
        a.referrer && v(b, "optref", a.referrer, !0);
        h = this.V;
        a = [];
        this.Ga || dk(this) || a.push(this.F());
        h = n(h);
        for (k = h.next(); !k.done; k = h.next()) k = k.value, dk(k) || a.push(k.F());
        v(b,
            "inames", a.join("|"));
        v(b, "jsid", "csa");
        return b
    };
    m.Hb = function(a, b) {
        for (var c in a)
            if (a.hasOwnProperty(c) && fk.hasOwnProperty(c)) {
                var d = fk[c],
                    e = a[c];
                "clkwd" == d && (e = "t");
                "type" == d && (e = le[a[c]]);
                "domainSessionToken" == c && "afdToken" in a && d == fk.afdToken || v(b, d, e)
            }
    };
    m.F = function() {
        var a = [];
        "m" == this.options.role || void 0 === this.options.slaveNumber ? a.push("master") : (a.push("slave"), a.push(this.options.slaveNumber));
        2 == this.da ? a.push("a") : 3 == this.da && a.push("b");
        a.push(this.options.masterNumber);
        return a.join("-")
    };
    m.lc = function(a, b, c, d) {
        var e = {};
        e.name = b;
        a = c.concat([a]);
        b = d.concat([b]);
        for (d = 0; d < a.length; d++) {
            c = b[d];
            var f = void 0,
                g = a[d],
                h = this.I,
                k = {};
            for (f in h)
                if (h.hasOwnProperty(f) && !h[f].rd) {
                    var l = g[f],
                        q = h[f].U;
                    "undefined" == typeof l || "container" == f && "object" == typeof l ? "undefined" != typeof q && (k[f] = q) : k[f] = l
                }
            e[c] = k
        }
        return JSON.stringify(e)
    };
    m.ic = function(a, b, c, d) {
        document.getElementById(a) && z.log("iframe: " + a + ". pubId: " + d + ". ", "dI");
        d = $d(document, "IFRAME");
        d.frameBorder = "0";
        d.marginWidth = "0";
        d.marginHeight = "0";
        d.vspace = 0;
        d.hspace = 0;
        d.setAttribute("allowTransparency", "true");
        d.scrolling = "no";
        d.style.visibility = "hidden";
        d.width = "100%";
        d.style.height = "0px";
        d.style.display = "block";
        d.name = b;
        d.id = a;
        d.src = c;
        we() && (d.dataset.observe = this.options.masterNumber, this.K || (d.setAttribute("data-ad-src", c), d.src = "about:blank"));
        (a = window.trustToken) &&
        Xj(a) && (a = Yj(a), null != a && (d.trustToken = a));
        this.Ea = Date.now();
        2 === this.da && 1 <= this.container.childElementCount ? this.container.insertBefore(d, this.container.children[0]) : 1 === this.da && 2 === this.container.childElementCount ? this.container.insertBefore(d, this.container.children[1]) : this.container.appendChild(d);
        try {
            d.contentWindow.name = b
        } catch (e) {}
        return d
    };
    m.Pb = function(a) {
        var b = window.innerWidth < window.innerHeight;
        if (this.Ha && !b || !this.Ha && b) {
            this.Ha = b;
            try {
                a.contentWindow.postMessage("orientation:" + (this.Ha ? "portrait" : "landscape"), "*")
            } catch (c) {}
        }
    };
    m.Fa = function(a, b, c, d) {
        var e = this,
            f = this.ic(a, b, c, d);
        this.K || (this.pc(f), "postMessage" in window && (this.Ha = window.innerWidth < window.innerHeight, window.addEventListener("resize", function() {
            return e.Pb(f)
        })))
    };
    m.Bc = function() {
        var a = {},
            b;
        for (b in this.options) this.options.hasOwnProperty(b) && (a[b] = this.options[b]);
        a.ads = "n0";
        a[""] = "";
        a.slaveNumber = "0";
        a.role = "s";
        a = gk(this.I, a, Date.now(), void 0, void 0, void 0, void 0, 1, this.xa);
        Y[a.F()] = a;
        this.V.splice(0, 0, a);
        a = document.createElement("div");
        document.body.appendChild(a);
        a.style.height = "0px";
        a.style.visibility = "hidden";
        this.options.container = a;
        this.Ga = this.options.preload = !0;
        this.xa = []
    };
    m.oc = function(a, b, c, d) {
        this.options = this.Tc(a, b, c, d);
        this.M.client = this.options.pubId;
        this.M.Cb = this.options.styleId || "";
        try {
            var e = this.options;
            if ("ads" === e.type) {
                var f;
                void 0 === Zj && (Zj = Qj(this.options.query || ""));
                if (f = Zj) e.radlinkBaseUrl = f.resultsPageBaseUrl, e.radlinkQueryParam = f.resultsPageQueryParam
            }
        } catch (g) {
            z.log(g.message, "qup")
        }
        this.eb() || this.K || !document.body || this.Bc();
        this.Ed = null == this.sd ? "" : this.Yb(this.options, this.V, this.sd);
        this.Ya = (this.K ? Nj() : null) || this.Zb(this.options);
        this.X =
            this.W = this.F();
        this.Ya.hb = encodeURI(this.W);
        this.va = Cc(this.Ya);
        if (1 === this.da)
            for (this.za = new Oj(this.xa.length + 1, this.options.container, this.options.adLoadedCallback, this.options.noAdLoadedCallback), a = n(this.xa), b = a.next(); !b.done; b = a.next()) b.value.za = this.za;
        if (!this.K) {
            Ic().client = this.options.pubId;
            Ic().Cb = this.options.styleId || "";
            if (this.options.hasOwnProperty("tcString") && 0 < this.options.tcString.length && !this.va.includes(fk.tcString + "=")) throw Sc(this.M, "tl", "TC string of length " + this.options.tcString.length +
                " does not fit in URL"), A("A transparency consent string was collected but is too long to fit in the CSA ad request URL. No ads are being requested.");
            a = [];
            b = [];
            for (c = 0; c < this.V.length; c++) a.push(this.V[c].F()), b.push(this.V[c].options);
            qe(this.options) && (this.options.adRequestUrlParams = this.va.substr(this.va.indexOf("?") + 1));
            this.X = this.lc(this.options, this.W, b, a)
        }
    };
    m.ab = function() {
        var a = this,
            b = Ie(),
            c = B(function() {
                if (!a.eb()) return !1;
                a.Bb(a.options.container);
                if (a.options.width && !a.Ga) {
                    if ("plas" == a.options.type && void 0 != a.I.width && null == a.I.width.g.D(a.options.width)) throw A("width " + a.options.width + " is invalid.");
                    "auto" == a.options.width ? a.container.style.width = "100%" : hk(a.options.width) && (a.container.style.width = a.options.width)
                }
                var f = a.container;
                gf(f);
                f.innerHTML = Xb($b);
                f = n(a.xa);
                for (var g = f.next(); !g.done; g = f.next()) g = g.value, g.Bb(a.options.container), g.rb();
                a.rb();
                b.resolve();
                return !0
            }, "cI_mA");
        if (!c()) var d = Date.now(),
            e = window.setInterval(function() {
                if (c()) clearInterval(e);
                else if (6E4 < Date.now() - d) throw clearInterval(e), A('container "' + a.options.container + '" does not exist.');
            }, 5);
        return b.promise
    };
    m.rb = function() {
        if (this.Ya) {
            var a = Nj();
            if (!nc("usm", mc()) && a && Cc(a) && qe(this.options)) {
                !0 === this.options.debug && v(a, "debug", !0);
                a.hb = encodeURI(this.W);
                var b = Cc(a);
                if (this.K) this.Fa(this.W, this.X, b, this.options.pubId);
                else {
                    var c = this;
                    window.google.renderCsaAds = function() {
                        c.Fa(c.W, c.X, b, c.options.pubId)
                    };
                    hf(document, Zb('<script src="' + this.va + '">\x3c/script>', null))
                }
            } else this.Fa(this.W, this.X, this.va, this.options.pubId)
        }
    };
    m.Qc = function(a) {
        var b = this;
        if (this.bd) {
            var c = this.F(),
                d = document.getElementById(c);
            setTimeout(function() {
                return b.Ab(d, c, a, !0)
            }, 1500)
        }
    };
    m.pc = function(a) {
        var b = this,
            c = "" + this.options.masterNumber,
            d = new fd(c, a),
            e = kc("cei", mc()) || "",
            f = 3;
        e.includes("17300001") ? f = 1 : e.includes("17300002") && (f = 2);
        var g = !1;
        C(d, "scs_mismatch_analysis_value", ld.j, function(k, l, q, p) {
            g || (g = !0, p != f && (k = b.M, p = "sma." + f + "," + p, l = Jc(k), v(l, "pbt", "ri"), v(l, "action", p), k.ga(Cc(l))))
        });
        C(d, "aD." + c, kd.j, ik);
        C(d, "qi", E.j, function(k, l, q, p) {
            b.M.yb = p || ""
        });
        C(d, "eawp", E.j);
        C(d, "it", E.j, function(k, l, q, p) {
            a.title = p
        });
        C(d, "wrs", kd.j, jk);
        C(d, ".aCS", ld.j, function(k, l, q, p) {
            kk(b, p)
        });
        e = null;
        this.Ga || (e = this.F(), C(d, e + ".hA", kd.j, lk), C(d, e + ".fs", md.j, mk), C(d, e + ".w", ld.j, function(k, l, q, p) {
            nk(k, l, q, p)
        }), C(d, e + ".aC", ld.j));
        C(d, "v." + c, E.j, ok);
        var h = this.options.relatedSearchResultClickedCallback;
        this.options.relatedSearchUseResultCallback && h && C(d, "rsrc", md.j, function(k, l, q, p) {
            try {
                h(p.q, p.rsToken)
            } catch (x) {}
        });
        c = n(this.V);
        for (e = c.next(); !e.done; e = c.next()) e = e.value.F(), C(d, e + ".hA", kd.j, lk), C(d, e + ".fs", md.j, mk), C(d, e + ".aC", ld.j)
    };

    function kk(a, b) {
        a.ob = b;
        if (!a.ja) {
            var c = ["mousemove", "mousedown", "scroll", "keydown", "touchstart"];
            a.ja = function() {
                if (a.ob) {
                    var e = a.M,
                        f = Date.now() - a.ob,
                        g = Jc(e);
                    v(g, "pbt", "cd");
                    v(g, "csacd", f);
                    e.ga(Cc(g));
                    a.ob = null
                }
                if (a.ja) {
                    e = n(c);
                    for (f = e.next(); !f.done; f = e.next()) document.body.removeEventListener(f.value, a.ja);
                    a.ja = null
                }
            };
            b = n(c);
            for (var d = b.next(); !d.done; d = b.next()) document.body.addEventListener(d.value, a.ja)
        }
    }
    m.zc = function(a) {
        if (!this.Za && (this.Za = !0, Pj(this.za, !1, 0, this.Mb), hd(a, "sbn"))) {
            var b = this.F(),
                c = document.getElementById(b);
            this.zb = Date.now();
            this.Ab(c, b, a, !1)
        }
    };
    m.Nc = function(a, b) {
        var c = vc(yc),
            d = vc(zc);
        /Mobile/i.test(tc) && (0 < c || 0 < d) ? (a.style.width = "1px", a.style.minWidth = "100%", a.removeAttribute("width")) : a.width = "100%";
        a.style.visibility = 0 < b ? "visible" : "hidden";
        a.style.height = b + "px";
        this.container.style.height = "auto"
    };
    m.Mc = function(a) {
        this.container.style.width = a + "px";
        var b = vc(yc),
            c = vc(zc);
        if (0 < b || 0 < c)
            if (b = document.getElementById(this.F())) b.style.width = a + "px", b.removeAttribute("width")
    };
    m.lb = function(a) {
        return xe(a)
    };

    function pk(a, b, c) {
        var d = new IntersectionObserver(function(e) {
            var f = !1;
            e = n(e);
            for (var g = e.next(); !g.done; g = e.next()) 0 < g.value.intersectionRatio && (f = !0);
            f && (Kc(a.M, "io", c), d.unobserve(b))
        }, {
            threshold: .3
        });
        d.observe(b)
    }
    m.Ab = function(a, b, c, d) {
        var e = this,
            f = de(a),
            g = {
                top: f.y,
                left: f.x,
                height: a.offsetHeight,
                width: a.offsetWidth,
                Ua: this.Vc.join(","),
                ce: b,
                ze: gd(c, "eawp"),
                Ve: Vc(),
                Le: this.Ea - this.yd,
                Rd: this.zb - this.Ea,
                Ye: a.hasAttribute("data-lle"),
                Ze: lc("llrm") || 0,
                Pe: this.lb(a),
                If: hd(c, "wrs") || !1
            };
        if (b = qk(this, c)) g.Xe = b;
        if (d) {
            Kc(this.M, "bs", g);
            var h = null;
            h = setInterval(B(function() {
                e.lb(a) && (Kc(e.M, "bv", g), clearInterval(h))
            }, "sPIV"), 500);
            window.IntersectionObserver && oc("_enableIntersectionObserverPingback") && pk(this, a, g)
        } else Kc(this.M,
            "bn", g)
    };

    function qk(a, b) {
        if (b = gd(b, "irt")) {
            var c = b.split("|");
            b = parseInt(c[0], 10);
            c = parseInt(c[1], 10);
            return a.Ea - a.yd + "|" + (b - a.Ea) + "|" + (c - b) + "|" + (a.zb - c)
        }
        return null
    }
    m.Jc = function(a) {
        if (Ec) {
            var b = "",
                c;
            try {
                var d = ji(this.options, this.I)
            } catch (e) {
                d = this.options, d.sanitizeFailure = !0
            }
            d.measuredWidth = a;
            for (a = 0; c = rk[a]; a++) d && d.hasOwnProperty(c) && (c = d[c], null == c && (c = ""), c = c.toString().replace(/\|/g, "&#124;"), b += c), b += "|";
            d = this.M;
            a = this.F();
            Ec && (c = Jc(d), v(c, "pbt", "bo"), v(c, "adbn", a), v(c, "uio", b), d.ga(Cc(c).replace(/%7C/g, "|")))
        }
    };
    m.Ic = function(a, b) {
        var c = this.F(),
            d = document.getElementById(c);
        if (d) {
            var e = a.frameHeight;
            this.Vc = a.Ua;
            this.Nc(d, e);
            if (!this.Za && 0 < e) {
                this.zb = Date.now();
                this.bd = this.Za = !0;
                this.Qc(b);
                this.Jc(d.offsetWidth);
                d = hd(b, c + ".eV");
                a = 0;
                !0 === d ? a = 2 : !1 === d && (a = 1);
                c += ".ptp";
                if (b = b.B.hasOwnProperty(c) ? b.B[c].value : null) this.Mb.termPositions = b;
                Pj(this.za, !0, a, this.Mb)
            }
        }
    };
    m.eb = function() {
        var a = this.options.container;
        return "string" == typeof a ? (a = document.getElementById(a), !!a) : "string" == typeof a.innerHTML ? !0 : !1
    };
    m.Bb = function(a) {
        this.container = "string" == typeof a ? document.getElementById(a) : a
    };
    m.Lb = function(a) {
        a.hasOwnProperty("resultsPageBaseUrl") && (a.resultsPageBaseUrl = sk(a.resultsPageBaseUrl));
        var b = a.relatedSearchTargeting;
        b in oe && (a.rs_tt = oe[b])
    };
    var ck = B(function(a, b) {
        var c = b.R;
        a = b.g.G(a);
        return null != a && hk(a) ? tk.hasOwnProperty(c) ? a ? c.charAt(0) + c.charAt(1).toUpperCase() : c : c + a : ""
    }, "gPFO");

    function ak(a) {
        try {
            var b = parseInt(a, 10);
            return !isNaN(b) && 0 <= b ? b : 0
        } catch (c) {
            return 0
        }
    }

    function hk(a) {
        a = parseInt(a, 10);
        return !isNaN(a) && 0 <= a
    }
    var bk = B(function(a) {
            for (var b = ["fontSizeTitle", "fontSizeAttribution"], c = 0; c < b.length; c++) {
                var d = b[c];
                if (a[d]) {
                    var e = "string" == typeof a[d] ? parseInt(a[d].replace("px", ""), 10) : a[d];
                    e = e > xd ? xd : e;
                    e = 8 > e ? 8 : e;
                    a[d] = e + "px"
                }
            }
            return a
        }, "vFS"),
        sk = B(function(a) {
            return a && a.startsWith("//") ? document.location.protocol + a : a
        }, "rRP"),
        ek = B(function(a) {
            a = a.fexp || "";
            return a.includes("17300001") ? 1 : a.includes("17300002") ? 2 : 0
        }, "gPPV"),
        rk = ["columns", "horizontalFlow", "type", "measuredWidth"],
        Z = {},
        fk = (Z.adPage = "adpage", Z.adpage =
            "adpage", Z.ads = "ad", Z.adsafe = "adsafe", Z.adstyle = "adstyle", Z.adtest = "adtest", Z.afdToken = "afdt", Z.afsexp = "afsexp", Z.allwcallad = "allwcallad", Z.bgresponse = "bgresponse", Z.channel = "channel", Z.cont = "cont", Z.cref = "cref", Z.cx = "cx", Z.deb = "deb", Z.debug = "debug", Z.domainName = "domain_name", Z.e = "e", Z.expflags = "expflags", Z.fakeads = "fakeads", Z.fcap = "fcap", Z.fcsa = "fcsa", Z.fexp = "fexp", Z.forceEx = "expid", Z.format = "format", Z.gcs = "gcs", Z.gcse_nc = "gcse_nc", Z.gl = "gl", Z.glp = "glp", Z.gm = "gm", Z.gpcId = "gpcId", Z.gr = "gr", Z.hl = "hl",
            Z.ie = "ie", Z.jsSrc = "csa_js_src", Z.languageCode = "hl", Z.maxTermLength = "max_radlink_len", Z.ms = "ms", Z.nocache = "nocache", Z.num = "num", Z.numRepeated = "adrep", Z.oe = "oe", Z.output = "output", Z.preload = "preload", Z.priceCurrency = "pfcrncy", Z.priceMax = "pfmax", Z.priceMin = "pfmin", Z.pubId = "client", Z.query = "q", Z.queryContext = "qry_ctxt", Z.queryLink = "qry_lnk", Z.referer = "referer", Z.role = "r", Z.rowkeyV2 = "rowkeyV2", Z.rs_tt = "rs_tt", Z.rurl = "rurl", Z.safe = "safe", Z.sbsignals = "sbsignals", Z.source = "source", Z.source_ip = "source_ip",
            Z.styleId = "psid", Z.textColorPalette = "tcpal", Z.theme = "theme", Z.type = "type", Z.uideb = "uideb", Z.userAgent = "useragent", Z.uuld = "uuld", Z.v = "v", Z.adfiliateWp = "adfwp", Z.cpp = "cpp", Z.personalizedAds = "pcsa", Z.attmas = "attmas", Z.cmpSdkId = "iab_cmpSdkId", Z.gdprApplies = "iab_gdprApplies", Z.tcString = "iab_tcString", Z.trustToken = "trustToken", Z.tt_state = "tt_state", Z.sc_status = "sc_status", Z.sct = "sct", Z.uaa = "uaa", Z.uab = "uab", Z.uafv = "uafv", Z.uam = "uam", Z.uap = "uap", Z.uapv = "uapv", Z.uiOptimize = "uiopt", Z.ui_optimize = "uiopt", Z.domainRegistrant =
            "swp", Z.domainSessionToken = "afdt", Z.kw = "kw", Z.terms = "terms", Z),
        tk = {
            hc: 1
        };
    m = X.prototype;
    m.Tb = w(X.prototype.Tb, "cAA");
    m.Wb = w(X.prototype.Wb, "cFAM");
    m.T = w(X.prototype.T, "cFA");
    m.Tc = w(X.prototype.Tc, "vASDO");
    m.Ac = w(X.prototype.Ac, "oTPP");
    m.ya = w(X.prototype.ya, "oTBP");
    m.Vb = w(X.prototype.Vb, "cCP");
    m.Yb = w(X.prototype.Yb, "cUIP");
    m.Zb = w(X.prototype.Zb, "cU");
    m.Hb = w(X.prototype.Hb, "aOTU");
    m.F = w(X.prototype.F, "gFN");
    m.lc = w(X.prototype.lc, "gFNAOAJ");
    m.ic = w(X.prototype.ic, "gAI");
    m.Pb = w(X.prototype.Pb, "cO");
    m.Fa = w(X.prototype.Fa, "iAI");
    m.Bc = w(X.prototype.Bc, "pM");
    m.oc = w(X.prototype.oc, "i");
    m.ab = w(X.prototype.ab, "cI");
    m.rb = w(X.prototype.rb, "mA");
    m.Qc = w(X.prototype.Qc, "tSP");
    m.pc = w(X.prototype.pc, "iFS");
    m.zc = w(X.prototype.zc, "nNA");
    m.Nc = w(X.prototype.Nc, "sIH");
    m.Mc = w(X.prototype.Mc, "sCW");
    m.Ab = w(X.prototype.Ab, "sP");
    m.Jc = w(X.prototype.Jc, "sUOP");
    m.Ic = w(X.prototype.Ic, "rIS");
    m.eb = w(X.prototype.eb, "dCE");
    m.Bb = w(X.prototype.Bb, "sC");
    m.Lb = w(X.prototype.Lb, "cVASDO");
    m.lb = w(X.prototype.lb, "iIV");

    function uk() {}
    ra(uk, Mj);
    uk.prototype.jc = function() {
        var a = rc().replace("www.google", "cse.google");
        return new Bc(a + "/cse_v2/ads")
    };
    uk.prototype.mc = function() {
        return "uds_ads_only"
    };

    function vk() {}
    ra(vk, Mj);
    vk.prototype.jc = function() {
        return new Bc(rc() + "/afs/ads")
    };
    vk.prototype.mc = function() {
        return "uds_ads_only"
    };
    var wk = {
        g: new xi(Gi, 5)
    };

    function xk(a, b, c, d, e, f, g, h, k, l) {
        l = void 0 === l ? [] : l;
        X.call(this, a, b, c, d, e, f, g, h, void 0 === k ? 1 : k, l)
    }
    ra(xk, X);
    xk.prototype.Gd = function(a) {
        if (a.textColorPalette) {
            var b = a.textColorPalette;
            Array.isArray(b) || (b = [b]);
            b = pe("textColorPalette", wk, b);
            for (var c = 0; c < b.length; c++) try {
                var d = b[c];
                b[c] = Bi("#" == d.charAt(0) ? d : "#" + d).substr(1)
            } catch (e) {}
            a.textColorPalette = b.join(",")
        }
        "on" == a.adtest && a.testgl && (a.gl = a.testgl, a.glp = "1")
    };
    xk.prototype.T = function(a) {
        return a.number ? "n" + a.number : ""
    };

    function yk(a, b, c, d, e, f, g, h, k, l) {
        l = void 0 === l ? [] : l;
        X.call(this, a, b, c, d, e, f, g, h, void 0 === k ? 1 : k, l)
    }
    ra(yk, X);
    yk.prototype.T = function(a) {
        var b = a.relatedSearches;
        b || 0 === b || (b = a.number) || 0 === b || (b = 10);
        return "r" + b
    };
    yk.prototype.T = w(yk.prototype.T, "cFA_RS");

    function zk() {}
    ra(zk, Mj);
    zk.prototype.jc = function() {
        var a = oc("_afsRsPath") ? "/afs/ads" : "/dp/ads";
        return new Bc(rc() + a)
    };
    zk.prototype.mc = function() {
        return "afd_ads"
    };
    zk.prototype.pd = function() {
        return !0
    };
    var gk = B(function(a, b, c, d, e, f, g, h, k) {
        function l() {}
        k = void 0 === k ? [] : k;
        b.relatedSearches ? b.type = "relatedsearch" : b.type || (b.type = "ads");
        var q = new vk,
            p = null;
        switch (b.type) {
            case "relatedsearch":
                l = yk;
                p = new zk;
                break;
            case "ads":
            case "textads":
                b.type = "ads";
                l = X;
                p = b.gcsc ? new uk : q;
                break;
            case "plas":
                l = xk;
                p = new vk;
                break;
            case "searchbox":
                break;
            default:
                throw A("invalid block type: " + b.type);
        }
        return new l(a, b, p, c, d, e, f, g, void 0 === h ? 1 : h, k)
    }, "nAB");

    function Ak(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }

    function Bk(a, b) {
        this.Pa = a;
        this.oa = null;
        this.ud = {};
        this.he = 0;
        this.Dd = void 0 === b ? 500 : b;
        this.Kb = null
    }
    ra(Bk, jg);
    Bk.prototype.addEventListener = function(a) {
        function b(f, g) {
            clearTimeout(e);
            f ? (c = f, c.internalErrorState = Ak(c), g && 0 === c.internalErrorState || (c.tcString = "tcunavailable", g || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        }
        var c = {},
            d = Va(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.Dd && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.Dd));
        try {
            Ck(this, "addEventListener", b)
        } catch (f) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e),
                e = 0), d()
        }
    };
    Bk.prototype.removeEventListener = function(a) {
        a && a.listenerId && Ck(this, "removeEventListener", null, a.listenerId)
    };

    function Ck(a, b, c, d) {
        c || (c = function() {});
        if ("function" === typeof a.Pa.__tcfapi) a = a.Pa.__tcfapi, a(b, 2, c, d);
        else if (a.Ba()) {
            Dk(a);
            var e = ++a.he;
            a.ud[e] = c;
            a.oa && (c = {}, a.oa.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            }, c), "*"))
        } else c({}, !1)
    }
    Bk.prototype.Ba = function() {
        return this.oa ? this.oa : this.oa = Gh(this.Pa, "__tcfapiLocator")
    };

    function Dk(a) {
        a.Kb || (a.Kb = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.ud[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, Eh(a.Pa, a.Kb))
    };

    function Ek(a) {
        if (!1 === a.gdprApplies) var b = !0;
        else void 0 === a.internalErrorState && (a.internalErrorState = Ak(a)), b = "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1;
        if (!b) return !1;
        if (!1 === a.gdprApplies || "tcunavailable" === a.tcString) return !0;
        var c = void 0 === c ? "755" : c;
        b: {
            if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"], void 0 !== b)) {
                b = b[void 0 === c ? "755" : c];
                break b
            }
            b = void 0
        }
        0 === b ? c = !1 :
            a.purpose && a.vendor ? (b = a.vendor.consents, (c = !(!b || !b[void 0 === c ? "755" : c])) && a.purposeOneTreatment && "CH" === a.publisherCC ? c = !0 : c && (c = a.purpose.consents, c = !(!c || !c["1"]))) : c = !0;
        return c ? !0 : (console.warn(A("TC string lacks purpose 1 consent for Google (GVL ID: 755). CSA ads will not be requested until consent is given. TC string: " + a.tcString)), !1)
    }
    var Fk = B(function(a) {
        var b = new Bk(window, -1);
        if ("function" === typeof b.Pa.__tcfapi || null != b.Ba()) {
            var c = Ie(),
                d = 0;
            d = setTimeout(function() {
                d = 0;
                console.warn(A("No response received from CMP after 10 seconds. CSA ads have not been requested."))
            }, 1E4);
            b.addEventListener(function(e) {
                d && (clearTimeout(d), d = 0);
                if (Ek(e)) {
                    if (0 !== e.internalErrorState) {
                        var f = new Hc(a);
                        switch (e.internalErrorState) {
                            case 1:
                                Sc(f, "to", JSON.stringify(e));
                                console.warn(A("Reached timeout before a response was received from CMP."));
                                break;
                            case 2:
                                Sc(f, "it", JSON.stringify(e));
                                console.warn(A("Invalid types in received tcData."));
                                break;
                            case 3:
                                Sc(f, "er", JSON.stringify(e)), console.warn(A("CMP returned error status."))
                        }
                    }
                    b.removeEventListener(e);
                    c.resolve({
                        tcString: e.tcString,
                        gdprApplies: e.gdprApplies
                    })
                }
            });
            return c.promise
        }
        return null
    }, "gTAD");

    function Gk(a, b) {
        var c = a.createElement("script");
        c.src = tb(b);
        var d;
        b = (c.ownerDocument && c.ownerDocument.defaultView || window).document;
        var e = null === (d = b.querySelector) || void 0 === d ? void 0 : d.call(b, "script[nonce]");
        (d = e ? e.nonce || e.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", d);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function Hk(a, b, c, d, e) {
        this.name = a;
        this.value = b;
        this.ec = c;
        this.path = void 0 === d ? null : d;
        this.domain = void 0 === e ? null : e
    }

    function Ik(a) {
        this.ha = a;
        this.Sb = 0;
        this.zd = null
    }

    function Jk(a, b) {
        if (!b.name || !b.value || !b.ec) throw "Setting a cookie must include cookie name and value and expiration.";
        var c = b.name + "=" + b.value,
            d = "",
            e = "",
            f = "";
        b.path && (d = ";path=" + b.path);
        b.domain && (e = ";domain=" + a.ha.location.hostname);
        b.ec && (f = ";expires=" + b.ec);
        a.ha.document.cookie = c + f + d + e
    }

    function Kk(a, b) {
        if (!b) return Promise.resolve({
            cookie: null,
            status: 4
        });
        var c = b._cookies_[0];
        if (!c) return Promise.resolve({
            cookie: null,
            status: 4
        });
        b = c._value_;
        c = new Hk("__gsas", b, (new Date(1E3 * c._expires_)).toUTCString(), c._path_, c._domain_);
        try {
            Jk(a, c)
        } catch (d) {
            return Promise.resolve({
                cookie: null,
                status: 7
            })
        }
        return Promise.resolve({
            cookie: b,
            status: 3
        })
    }

    function Lk(a) {
        if (0 === a.Sb) {
            a: {
                try {
                    var b = new Date;
                    b.setTime(b.getTime() + 36E5);
                    Jk(a, new Hk("GoogleAdServingTest", "Good", b.toUTCString()))
                } catch (d) {
                    b = !1;
                    break a
                }
                if (b = "Good" === Mk(a, "GoogleAdServingTest")) {
                    var c = new Hk("GoogleAdServingTest", "Good", (new Date(0)).toUTCString());
                    try {
                        Jk(a, c)
                    } catch (d) {
                        b = !1
                    }
                }
            }
            a.Sb = b ? 2 : 1
        }
        return 2 === a.Sb
    }

    function Mk(a, b) {
        if ("string" === typeof a.ha.document.cookie) {
            var c = new RegExp(b + "=(.*)");
            if (a = a.ha.document.cookie.split(";").find(function(d) {
                    return null != d.match(c)
                })) return a.match(c)[1]
        }
    }

    function Nk(a, b) {
        b = {
            domain: a.ha.location.hostname,
            client: b || "undefined",
            product: "SAS",
            callback: "__sasCookie"
        };
        var c = rb(ub(fb(new cb(db, "https://partner.googleadservices.com/gampad/cookie.js"))), b);
        return new Promise(function(d) {
            a.ha.__sasCookie = function(e) {
                Kk(a, a.zd ? a.zd : e).then(function(f) {
                    d(f)
                })
            };
            Gk(a.ha.document, c)
        })
    }
    var Ok = B(function(a) {
            return null == a ? null : Lk(a) ? (a = Mk(a, "__gsas")) ? Promise.resolve({
                ua: 6,
                cookie: a
            }) : null : Promise.resolve({
                ua: 0,
                cookie: null
            })
        }, "sasCkeErr"),
        Pk = B(function(a) {
            var b = new Ik(window);
            if (!Lk(b)) return Promise.resolve({
                ua: 0,
                cookie: null
            });
            var c = Ok(b);
            return c ? c : Nk(b, a).then(function(d) {
                return {
                    ua: d.status,
                    cookie: d.cookie
                }
            })
        }, "scErr");
    var Qk = "platform platformVersion architecture model uaFullVersion bitness".split(" ");

    function Rk(a, b, c, d, e, f) {
        this.platform = a;
        this.platformVersion = b;
        this.architecture = c;
        this.model = d;
        this.uaFullVersion = e;
        this.bitness = f
    }
    var Sk = B(function(a) {
        if (!a.navigator || !a.navigator.userAgentData || "function" !== typeof a.navigator.userAgentData.getHighEntropyValues) return null;
        var b = a.navigator.userAgentData.getHighEntropyValues(Qk);
        return b ? Promise.race([b.catch(function(c) {
            z.log(c, "uachPrr")
        }), Ke(300, null)]).then(function(c) {
            if (c) return c = new Rk(c.platform, c.platformVersion, c.architecture, c.model, c.uaFullVersion, c.bitness), a.uachNonBlockingData = c
        }) : null
    }, "uachErr");
    var Tk = B(function(a, b) {
        b = void 0 === b ? window : b;
        var c = [Kj(), Fk(a)],
            d = -1,
            e = -1,
            f = -1,
            g = 2;
        if (oc("_blockAdRequestOnUach")) {
            var h = Sk(b);
            c.push(h);
            f = g;
            g++
        }
        var k = /startpage/,
            l, q;
        h = null == (l = b.location) ? void 0 : null == (q = l.host) ? void 0 : q.match(k);
        oc("_enableSasCookie") && !h && (a = Pk(a), c.push(a), d = g, g++);
        oc("enableNonblockingSasCookie") && !h && (b = Ok(new Ik(b)), c.push(b), e = g, g++);
        return c.every(function(p) {
            return null == p
        }) ? null : Le(c).then(function(p) {
            for (var x, r, y, u, J, D, G, N = 0; N < p.length; N++) {
                var M = p[N];
                if (M) switch (N) {
                    case 0:
                        x =
                            M.ma;
                        r = M.wb;
                        break;
                    case 1:
                        y = M.tcString;
                        u = M.gdprApplies;
                        break;
                    case d:
                    case e:
                        J = M.cookie;
                        D = M.ua;
                        break;
                    case f:
                        G = M
                }
            }
            return {
                ma: x,
                me: r,
                tcString: y,
                gdprApplies: u,
                Hf: G,
                ua: D,
                cookie: J
            }
        }).catch(function(p) {
            z.log(p, "usdPrErr")
        })
    }, "usdErr");

    function Uk(a) {
        for (var b = new Vk, c = a[0], d = !1, e = 1; e < a.length; e++) {
            var f = new Wk,
                g = void 0,
                h = void 0,
                k = a[e];
            for (h in k) k.hasOwnProperty(h) && (f.options[h] = k[h]);
            for (g in c) c.hasOwnProperty(g) && (f.options[g] = c[g]);
            d || (f.options.type || f.options.relatedSearches) && "ads" !== f.options.type && "textads" !== f.options.type || (d = f.options.firstTextAdBlock = !0);
            f.options.relatedSearches ? b.wd.push(f) : b.Fb.push(f)
        }
        for (var l in c) c.hasOwnProperty(l) && (b.vb[l] = c[l]);
        return b
    }

    function Wk() {
        this.options = {}
    }

    function Vk() {
        this.vb = {};
        this.Fb = [];
        this.wd = []
    };
    var Xk = "clicktrackUrl container iframeHeightCallback linkTarget query settingsId styleId waitForAds".split(" "),
        Yk = null,
        Zk = !1;

    function $k(a) {
        if (2 > a.length) throw A("No options specified.");
        return 1 < a.length && a[1] instanceof Array ? [a[0]].concat(a[1]) : Array.prototype.slice.call(a, 0)
    }
    $k = w($k, "ppata");

    function al(a, b) {
        b.platform && (a.uap = b.platform);
        b.platformVersion && (a.uapv = b.platformVersion);
        b.architecture && (a.uaa = b.architecture);
        b.uaFullVersion && (a.uafv = b.uaFullVersion);
        b.model && (a.uam = b.model);
        b.bitness && (a.uab = b.bitness)
    }

    function bl(a, b) {
        var c = b.Hf,
            d = b.ma,
            e = b.me,
            f = b.tcString,
            g = b.gdprApplies,
            h = b.ua;
        b = b.cookie;
        c && al(a, c);
        null != d && (a.cpp = d);
        !1 === e && (a.personalizedAds = !1);
        f && (a.tcString = f);
        null != g && (a.gdprApplies = g);
        null != h && (a.sc_status = h);
        b && (a.sct = b)
    }
    bl = w(bl, "aUDTA");

    function cl(a, b, c, d) {
        c = void 0 === c ? null : c;
        var e = a.Ka;
        d = d || Date.now();
        b = $k(b);
        if (!Ac()) {
            a.Xa && (b[0].type = a.Xa);
            c && bl(b[0], c);
            (a = window.uachNonBlockingData) && al(b[0], a);
            a = Uk(b);
            var f = {};
            c = function(l) {
                l = n($a(l));
                for (var q = l.next(); !q.done; q = l.next()) {
                    q = q.value;
                    var p = e[q];
                    p && p.A && (f[q] = !0)
                }
            };
            c(a.vb);
            b = n(a.Fb);
            for (var g = b.next(); !g.done; g = b.next()) c(g.value.options);
            c = $a(f);
            0 < c.length && (Yk = "The following CSA option(s) were ignored due to being overridden by native style controls: " + c);
            c = dl(e, a.vb, a.Fb,
                d, {});
            var h = el;
            c.then(function() {
                fl(h)
            });
            d = dl(e, a.vb, a.wd, d);
            var k = el;
            k != h && d.then(function() {
                fl(k)
            })
        }
    }
    cl = w(cl, "aasi");

    function fl(a) {
        if (we()) {
            var b = '[data-observe="' + a + '"]',
                c = function() {
                    for (var f = n(document.querySelectorAll("iframe[data-ad-src]" + b)), g = f.next(); !g.done; g = f.next()) {
                        g = g.value;
                        var h = ub(g.getAttribute("data-ad-src"));
                        g.src = tb(h).toString();
                        g.removeAttribute("data-ad-src")
                    }
                };
            a = n(document.querySelectorAll("iframe" + b));
            for (var d = a.next(); !d.done; d = a.next())
                if (d = d.value, null == d.offsetParent || xe(d)) {
                    c();
                    return
                }
            var e = new IntersectionObserver(function(f) {
                var g = !1;
                f = n(f);
                for (var h = f.next(); !h.done; h = f.next()) 0 <
                    h.value.intersectionRatio && (g = !0);
                if (g)
                    for (c(), g = n(document.querySelectorAll("iframe" + b)), f = g.next(); !f.done; f = g.next()) e.unobserve(f.value)
            }, {
                rootMargin: "0px 0px " + (lc("llrm") || 0) + "px 0px",
                threshold: 0
            });
            a = n(document.querySelectorAll("iframe" + b));
            for (d = a.next(); !d.done; d = a.next()) d = d.value, e.observe(d), d.setAttribute("data-lle", "1")
        }
    }
    fl = w(fl, "mILL");

    function dl(a, b, c, d) {
        var e = Promise.resolve();
        if (0 == c.length) return e;
        var f = [],
            g = [],
            h = {
                maxTop: 0,
                minTop: 0,
                rhs: 0
            };
        el++;
        for (var k = c.length - 1; 0 <= k; k--) {
            var l = c[k].options,
                q = l.gcsc,
                p = gl.location.href.includes("ampproject.net"),
                x = [];
            if (l.firstTextAdBlock && !q && !p) {
                q = {};
                p = n(Xk);
                for (var r = p.next(); !r.done; r = p.next()) r = r.value, q[r] = l[r];
                q.role = "s";
                q.masterNumber = el;
                0 < k && (q.slaveNumber = k);
                p = gk(a, q, d, void 0, void 0, void 0, void 0, 2);
                q = gk(a, q, d, void 0, void 0, void 0, void 0, 3);
                g.unshift(q);
                g.unshift(p);
                x.push(p);
                x.push(q);
                Y[p.F()] = p;
                Y[q.F()] = q
            }
            0 === k ? (l.role = "m", l.masterNumber = el, l = gk(a, l, d, b, f, h, g, 1, x), Y[l.F()] = l) : (l.role = "s", l.slaveNumber = k, l.masterNumber = el, l = gk(a, l, d, void 0, void 0, void 0, void 0, 1, x), f.unshift(l.jd), g.unshift(l), h.maxTop += l.Y, h.minTop += l.Z, h.rhs += l.$, Y[l.F()] = l)
        }
        a = "master-" + el;
        for (var y in Y) re(y) && (Y[y].X += "|" + Y[a].X);
        for (c = c.length - 1; 0 <= c; c--) y = ["slave", c, el].join("-"), Y.hasOwnProperty(y) && Y[y].ab();
        Y.hasOwnProperty(a) ? e = Y[a].ab() : z.log("Missing ad block for " + a, "cAFOMM");
        return e
    }
    dl = w(dl, "cAFO");

    function lk(a, b, c, d) {
        d || Y[c.split(".")[0]].zc(a)
    }
    lk = w(lk, "hAC");
    var hl = {};

    function mk(a, b, c, d) {
        b = d.fw;
        var e = d.fh;
        d = d.ah;
        d = "number" === typeof b && "number" === typeof e && d instanceof Array ? new Ge(b, e, d) : null;
        if (null != d && (c = c.split(".")[0], b = Y[c], b.Ic(d, a), b.options && b.options.iframeHeightCallback && (a = b.container.offsetHeight, hl[c] != a))) {
            hl[c] = a;
            try {
                b.options.iframeHeightCallback(a)
            } catch (f) {}
        }
    }
    mk = w(mk, "hC");

    function nk(a, b, c, d) {
        a = Y[c.split(".")[0]];
        gl.getComputedStyle && a instanceof xk && (b = parseInt(gl.getComputedStyle(a.container || document.body).width, 10), d == b && /Mobile/i.test(tc) && d--);
        a.Mc(d)
    }
    nk = w(nk, "wC");

    function jk(a, b, c, d) {
        d && Yk && !Zk && (console.warn(Yk), Zk = !0)
    }

    function il(a, b) {
        var c = {},
            d;
        for (d in Y)
            if (Y.hasOwnProperty(d)) {
                var e = Y[d];
                e.options && e.options.masterNumber == b && "string" == typeof e.options.container && (e = e.options.container, c[e] = (c[e] || 0) + a.B[d + ".aC"].value)
            }
        return c
    }
    il = w(il, "gAC");

    function ik(a, b) {
        var c = Y["master-" + b];
        if (c && c.options && c.options.adsResponseCallback) {
            a = il(a, b);
            try {
                c.options.adsResponseCallback(a)
            } catch (d) {}
        }
    }
    ik = w(ik, "aCC");

    function ok(a, b, c, d) {
        if ((a = Y["master-" + b]) && a.options && a.options.visibleUrlsCallback) {
            d = d ? d.split("|") : [];
            try {
                a.options.visibleUrlsCallback(d)
            } catch (e) {}
        }
    }
    ok = w(ok, "vUC");
    var el = 0,
        Y = {},
        gl = window;
    var jl = B(function(a, b) {
        var c = /startpage/,
            d, e, f = null == (d = window.location) ? void 0 : null == (e = d.host) ? void 0 : e.match(c);
        return oc("enableNonblockingSasCookie") && null == f ? Pk(b).then(function(g) {
            a[0].sct = g.cookie;
            a[0].sc_status = g.prefetchStatus
        }) : Promise.resolve()
    }, "nbCookieErr");
    var kl = cl;

    function ll(a) {
        ml(arguments)
    }
    var nl = {},
        ol = (nl.ads = sj, nl.plas = yj, nl.relatedsearch = oj, nl),
        ql = B(function() {
            var a = window._googCsa ? window._googCsa.q || [] : [],
                b = (window._googCsa || {}).t;
            ya("_googCsa", function() {
                pl(arguments)
            });
            for (var c = 0; c < a.length; c++) pl(a[c], b)
        }, "cmps"),
        pl = B(function(a, b) {
            if (a && !(1 > a.length))
                if (ol.hasOwnProperty(a[0])) {
                    var c = ol[a[0]],
                        d;
                    a = (d = 3 == a.length ? [a[1], a[2]] : [a[1], Array.prototype.slice.call(a, 2)], d[0]) && d[0].pubId || null;
                    jl(d, a);
                    oc("_doNotBlockAdRequestOnUach") && Sk(window);
                    (a = Tk(a)) ? a.then(function(e) {
                        kl(c, d,
                            e, b)
                    }): kl(c, d, null, b)
                } else if ("jsLoadedCallback" == a[0]) try {
                a[1]()
            } catch (e) {}
        }, "cmpe"),
        ml = B(function(a) {
            var b = a && a[0] && a[0].pubId || null;
            jl(a, b);
            oc("_doNotBlockAdRequestOnUach") && Sk(window);
            (b = Tk(b)) ? b.then(function(c) {
                kl(sj, a, c)
            }): kl(sj, a)
        }, "iAAPR");
    window.IS_GOOGLE_AFS_IFRAME_ || window.google && window.google.ads && window.google.ads.search && window.google.ads.search.Ads || (ya("google.ads.search.Ads", ll), ql());
})();
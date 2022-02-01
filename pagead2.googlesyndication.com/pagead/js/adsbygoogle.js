(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var n, aa;

    function ba(a) {
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
    var ca = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function da(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ea = da(this),
        fa = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        p = {},
        ha = {};

    function t(a, b) {
        var c = ha[b];
        if (null == c) return a[b];
        c = a[c];
        return void 0 !== c ? c : a[b]
    }

    function ia(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in p ? f = p : f = ea;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = fa && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? ca(p, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === ha[d] && (a = 1E9 * Math.random() >>> 0, ha[d] = fa ? ea.Symbol(d) : "$jscp$" + a + "$" + d), ca(f, ha[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    ia("Symbol", function(a) {
        function b(f) {
            if (this instanceof b) throw new TypeError("Symbol is not a constructor");
            return new c(d + (f || "") + "_" + e++, f)
        }

        function c(f, g) {
            this.h = f;
            ca(this, "description", {
                configurable: !0,
                writable: !0,
                value: g
            })
        }
        if (a) return a;
        c.prototype.toString = function() {
            return this.h
        };
        var d = "jscomp_symbol_" + (1E9 * Math.random() >>> 0) + "_",
            e = 0;
        return b
    }, "es6");
    ia("Symbol.iterator", function(a) {
        if (a) return a;
        a = (0, p.Symbol)("Symbol.iterator");
        for (var b = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), c = 0; c < b.length; c++) {
            var d = ea[b[c]];
            "function" === typeof d && "function" != typeof d.prototype[a] && ca(d.prototype, a, {
                configurable: !0,
                writable: !0,
                value: function() {
                    return ja(ba(this))
                }
            })
        }
        return a
    }, "es6");

    function ja(a) {
        a = {
            next: a
        };
        a[t(p.Symbol, "iterator")] = function() {
            return this
        };
        return a
    }

    function ka(a) {
        return a.raw = a
    }

    function u(a) {
        var b = "undefined" != typeof p.Symbol && t(p.Symbol, "iterator") && a[t(p.Symbol, "iterator")];
        return b ? b.call(a) : {
            next: ba(a)
        }
    }

    function la(a) {
        if (!(a instanceof Array)) {
            a = u(a);
            for (var b, c = []; !(b = a.next()).done;) c.push(b.value);
            a = c
        }
        return a
    }
    var ma = "function" == typeof Object.create ? Object.create : function(a) {
            function b() {}
            b.prototype = a;
            return new b
        },
        na;
    if (fa && "function" == typeof Object.setPrototypeOf) na = Object.setPrototypeOf;
    else {
        var oa;
        a: {
            var pa = {
                    a: !0
                },
                qa = {};
            try {
                qa.__proto__ = pa;
                oa = qa.a;
                break a
            } catch (a) {}
            oa = !1
        }
        na = oa ? function(a, b) {
            a.__proto__ = b;
            if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
            return a
        } : null
    }
    var ra = na;

    function v(a, b) {
        a.prototype = ma(b.prototype);
        a.prototype.constructor = a;
        if (ra) ra(a, b);
        else
            for (var c in b)
                if ("prototype" != c)
                    if (Object.defineProperties) {
                        var d = Object.getOwnPropertyDescriptor(b, c);
                        d && Object.defineProperty(a, c, d)
                    } else a[c] = b[c];
        a.Fb = b.prototype
    }

    function sa() {
        for (var a = Number(this), b = [], c = a; c < arguments.length; c++) b[c - a] = arguments[c];
        return b
    }
    ia("Promise", function(a) {
        function b(g) {
            this.h = 0;
            this.j = void 0;
            this.i = [];
            this.D = !1;
            var h = this.l();
            try {
                g(h.resolve, h.reject)
            } catch (k) {
                h.reject(k)
            }
        }

        function c() {
            this.h = null
        }

        function d(g) {
            return g instanceof b ? g : new b(function(h) {
                h(g)
            })
        }
        if (a) return a;
        c.prototype.i = function(g) {
            if (null == this.h) {
                this.h = [];
                var h = this;
                this.j(function() {
                    h.m()
                })
            }
            this.h.push(g)
        };
        var e = ea.setTimeout;
        c.prototype.j = function(g) {
            e(g, 0)
        };
        c.prototype.m = function() {
            for (; this.h && this.h.length;) {
                var g = this.h;
                this.h = [];
                for (var h = 0; h < g.length; ++h) {
                    var k =
                        g[h];
                    g[h] = null;
                    try {
                        k()
                    } catch (l) {
                        this.l(l)
                    }
                }
            }
            this.h = null
        };
        c.prototype.l = function(g) {
            this.j(function() {
                throw g;
            })
        };
        b.prototype.l = function() {
            function g(l) {
                return function(m) {
                    k || (k = !0, l.call(h, m))
                }
            }
            var h = this,
                k = !1;
            return {
                resolve: g(this.O),
                reject: g(this.m)
            }
        };
        b.prototype.O = function(g) {
            if (g === this) this.m(new TypeError("A Promise cannot resolve to itself"));
            else if (g instanceof b) this.T(g);
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
                h ? this.N(g) : this.u(g)
            }
        };
        b.prototype.N = function(g) {
            var h = void 0;
            try {
                h = g.then
            } catch (k) {
                this.m(k);
                return
            }
            "function" == typeof h ? this.fa(h, g) : this.u(g)
        };
        b.prototype.m = function(g) {
            this.A(2, g)
        };
        b.prototype.u = function(g) {
            this.A(1, g)
        };
        b.prototype.A = function(g, h) {
            if (0 != this.h) throw Error("Cannot settle(" + g + ", " + h + "): Promise already settled in state" + this.h);
            this.h = g;
            this.j = h;
            2 === this.h && this.P();
            this.F()
        };
        b.prototype.P = function() {
            var g = this;
            e(function() {
                if (g.M()) {
                    var h = ea.console;
                    "undefined" !== typeof h && h.error(g.j)
                }
            }, 1)
        };
        b.prototype.M =
            function() {
                if (this.D) return !1;
                var g = ea.CustomEvent,
                    h = ea.Event,
                    k = ea.dispatchEvent;
                if ("undefined" === typeof k) return !0;
                "function" === typeof g ? g = new g("unhandledrejection", {
                    cancelable: !0
                }) : "function" === typeof h ? g = new h("unhandledrejection", {
                    cancelable: !0
                }) : (g = ea.document.createEvent("CustomEvent"), g.initCustomEvent("unhandledrejection", !1, !0, g));
                g.promise = this;
                g.reason = this.j;
                return k(g)
            };
        b.prototype.F = function() {
            if (null != this.i) {
                for (var g = 0; g < this.i.length; ++g) f.i(this.i[g]);
                this.i = null
            }
        };
        var f = new c;
        b.prototype.T = function(g) {
            var h = this.l();
            g.ha(h.resolve, h.reject)
        };
        b.prototype.fa = function(g, h) {
            var k = this.l();
            try {
                g.call(h, k.resolve, k.reject)
            } catch (l) {
                k.reject(l)
            }
        };
        b.prototype.then = function(g, h) {
            function k(r, y) {
                return "function" == typeof r ? function(F) {
                    try {
                        l(r(F))
                    } catch (z) {
                        m(z)
                    }
                } : y
            }
            var l, m, q = new b(function(r, y) {
                l = r;
                m = y
            });
            this.ha(k(g, l), k(h, m));
            return q
        };
        b.prototype.catch = function(g) {
            return this.then(void 0, g)
        };
        b.prototype.ha = function(g, h) {
            function k() {
                switch (l.h) {
                    case 1:
                        g(l.j);
                        break;
                    case 2:
                        h(l.j);
                        break;
                    default:
                        throw Error("Unexpected state: " + l.h);
                }
            }
            var l = this;
            null == this.i ? f.i(k) : this.i.push(k);
            this.D = !0
        };
        b.resolve = d;
        b.reject = function(g) {
            return new b(function(h, k) {
                k(g)
            })
        };
        b.race = function(g) {
            return new b(function(h, k) {
                for (var l = u(g), m = l.next(); !m.done; m = l.next()) d(m.value).ha(h, k)
            })
        };
        b.all = function(g) {
            var h = u(g),
                k = h.next();
            return k.done ? d([]) : new b(function(l, m) {
                function q(F) {
                    return function(z) {
                        r[F] = z;
                        y--;
                        0 == y && l(r)
                    }
                }
                var r = [],
                    y = 0;
                do r.push(void 0), y++, d(k.value).ha(q(r.length - 1), m), k = h.next();
                while (!k.done)
            })
        };
        return b
    }, "es6");
    ia("Array.prototype.find", function(a) {
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
    }, "es6");

    function ta(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ia("WeakMap", function(a) {
        function b(g) {
            this.h = (f += Math.random() + 1).toString();
            if (g) {
                g = u(g);
                for (var h; !(h = g.next()).done;) h = h.value, this.set(h[0], h[1])
            }
        }

        function c() {}

        function d(g) {
            var h = typeof g;
            return "object" === h && null !== g || "function" === h
        }
        if (function() {
                if (!a || !Object.seal) return !1;
                try {
                    var g = Object.seal({}),
                        h = Object.seal({}),
                        k = new a([
                            [g, 2],
                            [h, 3]
                        ]);
                    if (2 != k.get(g) || 3 != k.get(h)) return !1;
                    k.delete(g);
                    k.set(h, 4);
                    return !k.has(g) && 4 == k.get(h)
                } catch (l) {
                    return !1
                }
            }()) return a;
        var e = "$jscomp_hidden_" + Math.random(),
            f = 0;
        b.prototype.set = function(g, h) {
            if (!d(g)) throw Error("Invalid WeakMap key");
            if (!ta(g, e)) {
                var k = new c;
                ca(g, e, {
                    value: k
                })
            }
            if (!ta(g, e)) throw Error("WeakMap key fail: " + g);
            g[e][this.h] = h;
            return this
        };
        b.prototype.get = function(g) {
            return d(g) && ta(g, e) ? g[e][this.h] : void 0
        };
        b.prototype.has = function(g) {
            return d(g) && ta(g, e) && ta(g[e], this.h)
        };
        b.prototype.delete = function(g) {
            return d(g) && ta(g, e) && ta(g[e], this.h) ? delete g[e][this.h] : !1
        };
        return b
    }, "es6");
    ia("Map", function(a) {
        function b() {
            var h = {};
            return h.K = h.next = h.head = h
        }

        function c(h, k) {
            var l = h.h;
            return ja(function() {
                if (l) {
                    for (; l.head != h.h;) l = l.K;
                    for (; l.next != l.head;) return l = l.next, {
                        done: !1,
                        value: k(l)
                    };
                    l = null
                }
                return {
                    done: !0,
                    value: void 0
                }
            })
        }

        function d(h, k) {
            var l = k && typeof k;
            "object" == l || "function" == l ? f.has(k) ? l = f.get(k) : (l = "" + ++g, f.set(k, l)) : l = "p_" + k;
            var m = h.i[l];
            if (m && ta(h.i, l))
                for (h = 0; h < m.length; h++) {
                    var q = m[h];
                    if (k !== k && q.key !== q.key || k === q.key) return {
                        id: l,
                        list: m,
                        index: h,
                        v: q
                    }
                }
            return {
                id: l,
                list: m,
                index: -1,
                v: void 0
            }
        }

        function e(h) {
            this.i = {};
            this.h = b();
            this.size = 0;
            if (h) {
                h = u(h);
                for (var k; !(k = h.next()).done;) k = k.value, this.set(k[0], k[1])
            }
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var h = Object.seal({
                            x: 4
                        }),
                        k = new a(u([
                            [h, "s"]
                        ]));
                    if ("s" != k.get(h) || 1 != k.size || k.get({
                            x: 4
                        }) || k.set({
                            x: 4
                        }, "t") != k || 2 != k.size) return !1;
                    var l = k.entries(),
                        m = l.next();
                    if (m.done || m.value[0] != h || "s" != m.value[1]) return !1;
                    m = l.next();
                    return m.done || 4 != m.value[0].x ||
                        "t" != m.value[1] || !l.next().done ? !1 : !0
                } catch (q) {
                    return !1
                }
            }()) return a;
        var f = new p.WeakMap;
        e.prototype.set = function(h, k) {
            h = 0 === h ? 0 : h;
            var l = d(this, h);
            l.list || (l.list = this.i[l.id] = []);
            l.v ? l.v.value = k : (l.v = {
                next: this.h,
                K: this.h.K,
                head: this.h,
                key: h,
                value: k
            }, l.list.push(l.v), this.h.K.next = l.v, this.h.K = l.v, this.size++);
            return this
        };
        e.prototype.delete = function(h) {
            h = d(this, h);
            return h.v && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.i[h.id], h.v.K.next = h.v.next, h.v.next.K = h.v.K, h.v.head = null, this.size--, !0) : !1
        };
        e.prototype.clear = function() {
            this.i = {};
            this.h = this.h.K = b();
            this.size = 0
        };
        e.prototype.has = function(h) {
            return !!d(this, h).v
        };
        e.prototype.get = function(h) {
            return (h = d(this, h).v) && h.value
        };
        e.prototype.entries = function() {
            return c(this, function(h) {
                return [h.key, h.value]
            })
        };
        e.prototype.keys = function() {
            return c(this, function(h) {
                return h.key
            })
        };
        e.prototype.values = function() {
            return c(this, function(h) {
                return h.value
            })
        };
        e.prototype.forEach = function(h, k) {
            for (var l = this.entries(), m; !(m = l.next()).done;) m = m.value,
                h.call(k, m[1], m[0], this)
        };
        e.prototype[t(p.Symbol, "iterator")] = e.prototype.entries;
        var g = 0;
        return e
    }, "es6");

    function ua(a, b) {
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
        e[t(p.Symbol, "iterator")] = function() {
            return e
        };
        return e
    }
    var va = fa && "function" == typeof t(Object, "assign") ? t(Object, "assign") : function(a, b) {
        for (var c = 1; c < arguments.length; c++) {
            var d = arguments[c];
            if (d)
                for (var e in d) ta(d, e) && (a[e] = d[e])
        }
        return a
    };
    ia("Object.assign", function(a) {
        return a || va
    }, "es6");
    ia("String.prototype.startsWith", function(a) {
        return a ? a : function(b, c) {
            if (null == this) throw new TypeError("The 'this' value for String.prototype.startsWith must not be null or undefined");
            if (b instanceof RegExp) throw new TypeError("First argument to String.prototype.startsWith must not be a regular expression");
            var d = this.length,
                e = b.length;
            c = Math.max(0, Math.min(c | 0, this.length));
            for (var f = 0; f < e && c < d;)
                if (this[c++] != b[f++]) return !1;
            return f >= e
        }
    }, "es6");
    ia("globalThis", function(a) {
        return a || ea
    }, "es_2020");
    ia("Set", function(a) {
        function b(c) {
            this.h = new p.Map;
            if (c) {
                c = u(c);
                for (var d; !(d = c.next()).done;) this.add(d.value)
            }
            this.size = this.h.size
        }
        if (function() {
                if (!a || "function" != typeof a || !a.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var c = Object.seal({
                            x: 4
                        }),
                        d = new a(u([c]));
                    if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({
                            x: 4
                        }) != d || 2 != d.size) return !1;
                    var e = d.entries(),
                        f = e.next();
                    if (f.done || f.value[0] != c || f.value[1] != c) return !1;
                    f = e.next();
                    return f.done || f.value[0] == c || 4 != f.value[0].x ||
                        f.value[1] != f.value[0] ? !1 : e.next().done
                } catch (g) {
                    return !1
                }
            }()) return a;
        b.prototype.add = function(c) {
            c = 0 === c ? 0 : c;
            this.h.set(c, c);
            this.size = this.h.size;
            return this
        };
        b.prototype.delete = function(c) {
            c = this.h.delete(c);
            this.size = this.h.size;
            return c
        };
        b.prototype.clear = function() {
            this.h.clear();
            this.size = 0
        };
        b.prototype.has = function(c) {
            return this.h.has(c)
        };
        b.prototype.entries = function() {
            return this.h.entries()
        };
        b.prototype.values = function() {
            return t(this.h, "values").call(this.h)
        };
        b.prototype.keys = t(b.prototype,
            "values");
        b.prototype[t(p.Symbol, "iterator")] = t(b.prototype, "values");
        b.prototype.forEach = function(c, d) {
            var e = this;
            this.h.forEach(function(f) {
                return c.call(d, f, f, e)
            })
        };
        return b
    }, "es6");
    ia("Array.prototype.keys", function(a) {
        return a ? a : function() {
            return ua(this, function(b) {
                return b
            })
        }
    }, "es6");
    ia("Array.prototype.values", function(a) {
        return a ? a : function() {
            return ua(this, function(b, c) {
                return c
            })
        }
    }, "es8");
    ia("Number.isNaN", function(a) {
        return a ? a : function(b) {
            return "number" === typeof b && isNaN(b)
        }
    }, "es6");
    ia("Promise.prototype.finally", function(a) {
        return a ? a : function(b) {
            return this.then(function(c) {
                return p.Promise.resolve(b()).then(function() {
                    return c
                })
            }, function(c) {
                return p.Promise.resolve(b()).then(function() {
                    throw c;
                })
            })
        }
    }, "es9");
    var w = this || self;

    function wa(a) {
        a = a.split(".");
        for (var b = w, c = 0; c < a.length; c++)
            if (b = b[a[c]], null == b) return null;
        return b
    }

    function xa(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function ya(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function za(a) {
        return Object.prototype.hasOwnProperty.call(a, Aa) && a[Aa] || (a[Aa] = ++Ba)
    }
    var Aa = "closure_uid_" + (1E9 * Math.random() >>> 0),
        Ba = 0;

    function Ca(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function Da(a, b, c) {
        if (!a) throw Error();
        if (2 < arguments.length) {
            var d = Array.prototype.slice.call(arguments, 2);
            return function() {
                var e = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(e, d);
                return a.apply(b, e)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }

    function Ea(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? Ea = Ca : Ea = Da;
        return Ea.apply(null, arguments)
    }

    function Fa(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function Ga(a) {
        var b = ["__uspapi"],
            c = w;
        b[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + b[0]);
        for (var d; b.length && (d = b.shift());) b.length || void 0 === a ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = a
    }

    function Ha(a) {
        return a
    };
    var Ia = (new Date).getTime();

    function Ja(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Ka(a, b) {
        var c = 0;
        a = Ja(String(a)).split(".");
        b = Ja(String(b)).split(".");
        for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
            var f = a[e] || "",
                g = b[e] || "";
            do {
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                g = /(\d*)(\D*)(.*)/.exec(g) || ["", "", "", ""];
                if (0 == f[0].length && 0 == g[0].length) break;
                c = La(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || La(0 == f[2].length, 0 == g[2].length) || La(f[2], g[2]);
                f = f[3];
                g = g[3]
            } while (0 == c)
        }
        return c
    }

    function La(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function Ma() {
        var a = w.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function x(a) {
        return -1 != Ma().indexOf(a)
    };

    function Na() {
        return x("Trident") || x("MSIE")
    }

    function Oa() {
        return (x("Chrome") || x("CriOS")) && !x("Edge") || x("Silk")
    }

    function Pa(a) {
        var b = {};
        a.forEach(function(c) {
            b[c[0]] = c[1]
        });
        return function(c) {
            return b[t(c, "find").call(c, function(d) {
                return d in b
            })] || ""
        }
    }

    function Qa() {
        var a = Ma();
        if (Na()) {
            var b = /rv: *([\d\.]*)/.exec(a);
            if (b && b[1]) a = b[1];
            else {
                b = "";
                var c = /MSIE +([\d\.]+)/.exec(a);
                if (c && c[1])
                    if (a = /Trident\/(\d.\d)/.exec(a), "7.0" == c[1])
                        if (a && a[1]) switch (a[1]) {
                            case "4.0":
                                b = "8.0";
                                break;
                            case "5.0":
                                b = "9.0";
                                break;
                            case "6.0":
                                b = "10.0";
                                break;
                            case "7.0":
                                b = "11.0"
                        } else b = "7.0";
                        else b = c[1];
                a = b
            }
            return a
        }
        c = RegExp("([A-Z][\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g");
        b = [];
        for (var d; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = Pa(b);
        return x("Opera") ? a(["Version", "Opera"]) :
            x("Edge") ? a(["Edge"]) : x("Edg/") ? a(["Edg"]) : x("Silk") ? a(["Silk"]) : Oa() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Ra(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Sa(a, b) {
        for (var c = a.length, d = [], e = 0, f = "string" === typeof a ? a.split("") : a, g = 0; g < c; g++)
            if (g in f) {
                var h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function Ta(a, b) {
        for (var c = a.length, d = Array(c), e = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function Ua(a, b) {
        for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function Va(a, b) {
        a: {
            for (var c = a.length, d = "string" === typeof a ? a.split("") : a, e = 0; e < c; e++)
                if (e in d && b.call(void 0, d[e], e, a)) {
                    b = e;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Wa(a, b) {
        a: {
            for (var c = "string" === typeof a ? a.split("") : a, d = a.length - 1; 0 <= d; d--)
                if (d in c && b.call(void 0, c[d], d, a)) {
                    b = d;
                    break a
                }
            b = -1
        }
        return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b]
    }

    function Xa(a, b) {
        a: if ("string" === typeof a) a = "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
            else {
                for (var c = 0; c < a.length; c++)
                    if (c in a && a[c] === b) {
                        a = c;
                        break a
                    }
                a = -1
            }return 0 <= a
    }

    function Ya(a) {
        var b = a.length;
        if (0 < b) {
            for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    };

    function Za(a) {
        Za[" "](a);
        return a
    }
    Za[" "] = function() {};
    var $a = Na();
    !x("Android") || Oa();
    Oa();
    !x("Safari") || Oa();
    var ab = {},
        bb = null;
    var cb = "function" === typeof Uint8Array;
    var db = "function" === typeof p.Symbol && "symbol" === typeof(0, p.Symbol)() ? (0, p.Symbol)(void 0) : void 0;

    function eb(a) {
        Object.isFrozen(a) || (db ? a[db] |= 1 : void 0 !== a.la ? a.la |= 1 : Object.defineProperties(a, {
            la: {
                value: 1,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }));
        return a
    };

    function fb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    var gb;

    function hb(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a) && cb && null != a && a instanceof Uint8Array) {
                    var b;
                    void 0 === b && (b = 0);
                    if (!bb) {
                        bb = {};
                        for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                            var f = c.concat(d[e].split(""));
                            ab[e] = f;
                            for (var g = 0; g < f.length; g++) {
                                var h = f[g];
                                void 0 === bb[h] && (bb[h] = g)
                            }
                        }
                    }
                    b = ab[b];
                    c = Array(Math.floor(a.length / 3));
                    d = b[64] || "";
                    for (e = f = 0; f < a.length -
                        2; f += 3) {
                        var k = a[f],
                            l = a[f + 1];
                        h = a[f + 2];
                        g = b[k >> 2];
                        k = b[(k & 3) << 4 | l >> 4];
                        l = b[(l & 15) << 2 | h >> 6];
                        h = b[h & 63];
                        c[e++] = g + k + l + h
                    }
                    g = 0;
                    h = d;
                    switch (a.length - f) {
                        case 2:
                            g = a[f + 1], h = b[(g & 15) << 2] || d;
                        case 1:
                            a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
                    }
                    return c.join("")
                }
        }
        return a
    };

    function ib(a, b) {
        if (null != a) {
            if (Array.isArray(a)) a = jb(a, b);
            else if (fb(a)) {
                var c = {},
                    d;
                for (d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = ib(a[d], b));
                a = c
            } else a = b(a);
            return a
        }
    }

    function jb(a, b) {
        for (var c = a.slice(), d = 0; d < c.length; d++) c[d] = ib(c[d], b);
        if (b = Array.isArray(a)) {
            var e;
            db ? e = a[db] : e = a.la;
            b = (null == e ? 0 : e) & 1
        }
        b && eb(c);
        return c
    }

    function kb(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = hb(a);
        return Array.isArray(a) ? jb(a, kb) : a
    };
    var lb;

    function mb(a, b) {
        lb = b;
        a = new a(b);
        lb = null;
        return a
    };

    function A(a, b, c) {
        var d = lb;
        lb = null;
        a || (a = d);
        d = this.constructor.messageId;
        a || (a = d ? [d] : []);
        this.l = (d ? 0 : -1) - (this.constructor.Bb || 0);
        this.h = void 0;
        this.i = a;
        a: {
            d = this.i.length;a = d - 1;
            if (d && (d = this.i[a], fb(d))) {
                this.m = a - this.l;
                this.j = d;
                break a
            }
            void 0 !== b && -1 < b ? (this.m = Math.max(b, a + 1 - this.l), this.j = void 0) : this.m = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++)
                if (a = c[b], a < this.m) a += this.l, (d = this.i[a]) ? Array.isArray(d) && eb(d) : this.i[a] = nb;
                else {
                    d = this.j || (this.j = this.i[this.m + this.l] = {});
                    var e = d[a];
                    e ? Array.isArray(e) &&
                        eb(e) : d[a] = nb
                }
    }
    var nb = Object.freeze(eb([]));

    function B(a, b, c) {
        return -1 === b ? null : b >= a.m ? a.j ? a.j[b] : void 0 : (void 0 === c ? 0 : c) && a.j && (c = a.j[b], null != c) ? c : a.i[b + a.l]
    }

    function ob(a, b, c) {
        c = void 0 === c ? !1 : c;
        var d = B(a, b, c);
        null == d && (d = nb);
        d === nb && (d = eb(d.slice()), C(a, b, d, c));
        return d
    }

    function pb(a, b) {
        a = B(a, b);
        return null == a ? a : !!a
    }

    function D(a, b, c) {
        a = B(a, b);
        return null == a ? c : a
    }

    function G(a, b, c) {
        a = pb(a, b);
        return null == a ? void 0 === c ? !1 : c : a
    }

    function qb(a, b, c) {
        a = B(a, b);
        a = null == a ? a : +a;
        return null == a ? void 0 === c ? 0 : c : a
    }

    function C(a, b, c, d) {
        b < a.m && (void 0 === d || !d) ? a.i[b + a.l] = c : (a.j || (a.j = a.i[a.m + a.l] = {}))[b] = c;
        return a
    }

    function rb(a, b, c) {
        var d = void 0 === d ? !1 : d;
        return C(a, b, null == c ? eb([]) : Array.isArray(c) ? eb(c) : c, d)
    }

    function sb(a, b, c) {
        0 !== c ? C(a, b, c) : C(a, b, void 0, !1);
        return a
    }

    function tb(a, b, c, d) {
        (c = vb(a, c)) && c !== b && null != d && (a.h && c in a.h && (a.h[c] = void 0), C(a, c, void 0));
        return C(a, b, d)
    }

    function vb(a, b) {
        for (var c = 0, d = 0; d < b.length; d++) {
            var e = b[d];
            null != B(a, e) && (0 !== c && C(a, c, void 0, !1), c = e)
        }
        return c
    }

    function H(a, b, c) {
        if (-1 === c) return null;
        a.h || (a.h = {});
        var d = a.h[c];
        if (d) return d;
        var e = B(a, c, !1);
        if (null == e) return d;
        b = new b(e);
        return a.h[c] = b
    }

    function I(a, b, c) {
        a.h || (a.h = {});
        var d = a.h[c];
        if (!d) {
            var e = ob(a, c, !1);
            d = [];
            for (var f = 0; f < e.length; f++) d[f] = new b(e[f]);
            a.h[c] = d
        }
        return d
    }

    function wb(a, b, c, d) {
        a.h || (a.h = {});
        var e = d ? d.i : d;
        a.h[b] = d;
        return tb(a, b, c, e)
    }

    function xb(a, b, c) {
        var d = void 0 === d ? !1 : d;
        if (c) {
            var e = eb([]);
            for (var f = 0; f < c.length; f++) e[f] = c[f].i;
            a.h || (a.h = {});
            a.h[b] = c
        } else a.h && (a.h[b] = void 0), e = nb;
        return C(a, b, e, d)
    }
    A.prototype.toJSON = function() {
        var a = this.i;
        return gb ? a : jb(a, kb)
    };

    function yb(a, b) {
        return hb(b)
    }

    function zb(a) {
        gb = !0;
        try {
            return JSON.stringify(a.toJSON(), yb)
        } finally {
            gb = !1
        }
    }

    function Ab(a, b, c) {
        return vb(a, b) === c ? c : -1
    }

    function Bb(a, b, c) {
        return D(a, b, void 0 === c ? "" : c)
    }

    function Cb(a, b, c) {
        return D(a, Ab(a, c, b), 0)
    }

    function Db(a, b, c, d) {
        return H(a, b, Ab(a, d, c))
    };

    function Eb(a) {
        A.call(this, a, -1, Fb)
    }
    v(Eb, A);

    function Gb(a) {
        A.call(this, a)
    }
    v(Gb, A);
    var Fb = [2, 3];

    function Hb(a, b) {
        this.i = a === Ib && b || "";
        this.h = Jb
    }
    var Jb = {},
        Ib = {};

    function Kb(a, b) {
        var c = {},
            d;
        for (d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function Lb(a, b) {
        for (var c in a)
            if (b.call(void 0, a[c], c, a)) return !0;
        return !1
    }

    function Mb(a) {
        var b = {},
            c;
        for (c in a) b[c] = a[c];
        return b
    };
    var Nb;

    function Ob(a, b) {
        this.h = b === Pb ? a : ""
    }

    function Qb(a, b) {
        a = Rb.exec(Sb(a).toString());
        var c = a[3] || "";
        return Tb(a[1] + Ub("?", a[2] || "", b) + Ub("#", c, void 0))
    }
    Ob.prototype.toString = function() {
        return this.h + ""
    };

    function Sb(a) {
        return a instanceof Ob && a.constructor === Ob ? a.h : "type_error:TrustedResourceUrl"
    }
    var Rb = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Pb = {};

    function Tb(a) {
        if (void 0 === Nb) {
            var b = null;
            var c = w.trustedTypes;
            if (c && c.createPolicy) {
                try {
                    b = c.createPolicy("goog#html", {
                        createHTML: Ha,
                        createScript: Ha,
                        createScriptURL: Ha
                    })
                } catch (d) {
                    w.console && w.console.error(d.message)
                }
                Nb = b
            } else Nb = b
        }
        a = (b = Nb) ? b.createScriptURL(a) : a;
        return new Ob(a, Pb)
    }

    function Ub(a, b, c) {
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
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    var Vb = {};

    function Wb() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    }
    var Xb;

    function Yb() {
        var a, b;
        if (void 0 === Xb) try {
            Xb = null !== (b = null === (a = Wb()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
                createHTML: function(c) {
                    return c
                },
                createScript: function(c) {
                    return c
                },
                createScriptURL: function(c) {
                    return c
                }
            })) && void 0 !== b ? b : null
        } catch (c) {
            Xb = null
        }
        return Xb
    };

    function Zb() {}

    function $b(a) {
        this.h = a
    }
    v($b, Zb);
    $b.prototype.toString = function() {
        return this.h.toString()
    };

    function ac(a) {
        var b, c = null === (b = Yb()) || void 0 === b ? void 0 : b.createScriptURL(a);
        return new $b(null !== c && void 0 !== c ? c : a, Vb)
    }

    function bc(a) {
        if (a instanceof $b) return a.h;
        throw Error("");
    };

    function cc(a) {
        return a instanceof Zb ? bc(a) : Sb(a)
    };

    function dc(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function ec(a) {
        var b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function fc(a) {
        var b = a;
        return function() {
            if (b) {
                var c = b;
                b = null;
                c()
            }
        }
    };

    function gc(a, b, c) {
        a.addEventListener && a.addEventListener(b, c, !1)
    }

    function hc(a, b) {
        a.removeEventListener && a.removeEventListener("message", b, !1)
    };
    var ic = 2147483648 * Math.random() | 0;

    function jc(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    };

    function kc(a, b, c) {
        function d(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (var e = 1; e < c.length; e++) {
            var f = c[e];
            if (!xa(f) || ya(f) && 0 < f.nodeType) d(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (ya(f)) {
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
                Ra(g ? Ya(f) : f, d)
            }
        }
    }

    function lc(a) {
        this.h = a || w.document || document
    }
    n = lc.prototype;
    n.getElementsByTagName = function(a, b) {
        return (b || this.h).getElementsByTagName(String(a))
    };
    n.createElement = function(a) {
        var b = this.h;
        a = String(a);
        "application/xhtml+xml" === b.contentType && (a = a.toLowerCase());
        return b.createElement(a)
    };
    n.createTextNode = function(a) {
        return this.h.createTextNode(String(a))
    };
    n.append = function(a, b) {
        kc(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments)
    };
    n.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };

    function mc() {
        return !nc() && (x("iPod") || x("iPhone") || x("Android") || x("IEMobile"))
    }

    function nc() {
        return x("iPad") || x("Android") && !x("Mobile") || x("Silk")
    };
    var oc = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"),
        pc = /#|$/;

    function qc(a) {
        var b = a.search(pc),
            c;
        a: {
            for (c = 0; 0 <= (c = a.indexOf("client", c)) && c < b;) {
                var d = a.charCodeAt(c - 1);
                if (38 == d || 63 == d)
                    if (d = a.charCodeAt(c + 6), !d || 61 == d || 38 == d || 35 == d) break a;
                c += 7
            }
            c = -1
        }
        if (0 > c) return null;
        d = a.indexOf("&", c);
        if (0 > d || d > b) d = b;
        c += 7;
        return decodeURIComponent(a.substr(c, d - c).replace(/\+/g, " "))
    };

    function rc(a) {
        try {
            var b;
            if (b = !!a && null != a.location.href) a: {
                try {
                    Za(a.foo);
                    b = !0;
                    break a
                } catch (c) {}
                b = !1
            }
            return b
        } catch (c) {
            return !1
        }
    }

    function sc(a) {
        return rc(a.top) ? a.top : null
    }

    function tc(a, b) {
        var c = uc("SCRIPT", a);
        c.src = cc(b);
        var d;
        b = (c.ownerDocument && c.ownerDocument.defaultView || window).document;
        var e = null === (d = b.querySelector) || void 0 === d ? void 0 : d.call(b, "script[nonce]");
        (d = e ? e.nonce || e.getAttribute("nonce") || "" : "") && c.setAttribute("nonce", d);
        return (a = a.getElementsByTagName("script")[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null
    }

    function vc(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function wc(a, b) {
        if (!xc() && !yc()) {
            var c = Math.random();
            if (c < b) return c = zc(), a[Math.floor(c * a.length)]
        }
        return null
    }

    function zc() {
        if (!p.globalThis.crypto) return Math.random();
        try {
            var a = new Uint32Array(1);
            p.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (b) {
            return Math.random()
        }
    }

    function Ac(a, b) {
        if (a)
            for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Bc(a) {
        var b = a.length;
        if (0 == b) return 0;
        for (var c = 305419896, d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var yc = ec(function() {
        return Ua(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Cc) || 1E-4 > Math.random()
    });

    function Dc(a, b) {
        var c = -1;
        try {
            a && (c = parseInt(a.getItem(b), 10))
        } catch (d) {
            return null
        }
        return 0 <= c && 1E3 > c ? c : null
    }

    function Ec(a, b) {
        var c = yc() ? null : Math.floor(1E3 * zc());
        var d;
        if (d = null != c && a) a: {
            var e = String(c);
            try {
                if (a) {
                    a.setItem(b, e);
                    d = e;
                    break a
                }
            } catch (f) {}
            d = null
        }
        return d ? c : null
    }
    var xc = ec(function() {
        return Cc("MSIE")
    });

    function Cc(a) {
        return -1 != Ma().indexOf(a)
    }
    var Fc = /^([0-9.]+)px$/,
        Gc = /^(-?[0-9.]{1,30})$/;

    function Hc(a) {
        var b = void 0 === b ? null : b;
        if (!Gc.test(a)) return b;
        a = Number(a);
        return isNaN(a) ? b : a
    }

    function Ic(a) {
        return /^true$/.test(a)
    }

    function J(a) {
        return (a = Fc.exec(a)) ? +a[1] : null
    }

    function Lc(a, b) {
        for (var c = 0; 50 > c; ++c) {
            try {
                var d = !(!a.frames || !a.frames[b])
            } catch (g) {
                d = !1
            }
            if (d) return a;
            a: {
                try {
                    var e = a.parent;
                    if (e && e != a) {
                        var f = e;
                        break a
                    }
                } catch (g) {}
                f = null
            }
            if (!(a = f)) break
        }
        return null
    }
    var Mc = ec(function() {
        return mc() ? 2 : nc() ? 1 : 0
    });

    function Nc(a) {
        Ac({
            display: "none"
        }, function(b, c) {
            a.style.setProperty(c, b, "important")
        })
    }
    var Oc = [];

    function Pc() {
        var a = Oc;
        Oc = [];
        a = u(a);
        for (var b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            try {
                b()
            } catch (c) {}
        }
    }

    function Qc(a, b) {
        0 != a.length && b.head && a.forEach(function(c) {
            if (c && c && b.head) {
                var d = uc("META");
                b.head.appendChild(d);
                d.httpEquiv = "origin-trial";
                d.content = c
            }
        })
    }

    function Rc(a) {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * Math.pow(2, 52)),
                configurable: !1
            })
        } catch (b) {}
        return Number(a.goog_pvsid) || -1
    }

    function Sc(a) {
        var b = Tc;
        "complete" === b.readyState || "interactive" === b.readyState ? (Oc.push(a), 1 == Oc.length && (p.Promise ? p.Promise.resolve().then(Pc) : window.setImmediate ? setImmediate(Pc) : setTimeout(Pc, 0))) : b.addEventListener("DOMContentLoaded", a)
    }

    function uc(a, b) {
        b = void 0 === b ? document : b;
        return b.createElement(String(a).toLowerCase())
    };
    var Uc = null;
    var Tc = document,
        K = window;
    var Vc = null;

    function Wc(a, b) {
        b = void 0 === b ? [] : b;
        var c = !1;
        w.google_logging_queue || (c = !0, w.google_logging_queue = []);
        w.google_logging_queue.push([a, b]);
        if (a = c) {
            if (null == Vc) {
                Vc = !1;
                try {
                    var d = sc(w);
                    d && -1 !== d.location.hash.indexOf("google_logging") && (Vc = !0);
                    w.localStorage.getItem("google_logging") && (Vc = !0)
                } catch (e) {}
            }
            a = Vc
        }
        a && (d = w.document, a = new Hb(Ib, "https://pagead2.googlesyndication.com/pagead/js/logging_library.js"), a = Tb(a instanceof Hb && a.constructor === Hb && a.h === Jb ? a.i : "type_error:Const"), tc(d, a))
    };

    function Xc(a) {
        a = void 0 === a ? w : a;
        var b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function Yc(a) {
        return (a = a || Xc()) ? rc(a.master) ? a.master : null : null
    };

    function Zc(a, b) {
        a.google_image_requests || (a.google_image_requests = []);
        var c = uc("IMG", a.document);
        c.src = b;
        a.google_image_requests.push(c)
    }

    function $c(a, b) {
        var c = "https://pagead2.googlesyndication.com/pagead/gen_204?id=" + b;
        Ac(a, function(d, e) {
            d && (c += "&" + e + "=" + encodeURIComponent(d))
        });
        ad(c)
    }

    function ad(a) {
        var b = window;
        b.fetch ? b.fetch(a, {
            keepalive: !0,
            credentials: "include",
            redirect: "follow",
            method: "get",
            mode: "no-cors"
        }) : Zc(b, a)
    };

    function bd(a) {
        var b = sa.apply(1, arguments);
        if (0 === b.length) return ac(a[0]);
        for (var c = [a[0]], d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return ac(c.join(""))
    };

    function cd(a) {
        var b = void 0 === b ? 1 : b;
        a = Yc(Xc(a)) || a;
        a.google_unique_id = (a.google_unique_id || 0) + b;
        return a.google_unique_id
    }

    function dd(a) {
        a = a.google_unique_id;
        return "number" === typeof a ? a : 0
    }
    var ed = !!window.google_async_iframe_id,
        fd = ed && window.parent || window;

    function gd() {
        if (ed && !rc(fd)) {
            var a = "." + Tc.domain;
            try {
                for (; 2 < a.split(".").length && !rc(fd);) Tc.domain = a = a.substr(a.indexOf(".") + 1), fd = window.parent
            } catch (b) {}
            rc(fd) || (fd = window)
        }
        fd !== window && .01 > Math.random() && $c({
            stack: Error().stack,
            aswift: window.google_async_iframe_id
        }, "badpubwin");
        return fd
    }

    function hd() {
        var a = void 0 === a ? K : a;
        if (!a) return !1;
        try {
            return !(!a.navigator.standalone && !a.top.navigator.standalone)
        } catch (b) {
            return !1
        }
    }

    function id(a) {
        if (!a) return "";
        a = a.toLowerCase();
        "ca-" != a.substring(0, 3) && (a = "ca-" + a);
        return a
    };

    function jd() {
        this.i = new kd(this);
        this.h = 0
    }
    jd.prototype.resolve = function(a) {
        ld(this);
        this.h = 1;
        this.l = a;
        md(this.i)
    };
    jd.prototype.reject = function(a) {
        ld(this);
        this.h = 2;
        this.j = a;
        md(this.i)
    };

    function ld(a) {
        if (0 != a.h) throw Error("Already resolved/rejected.");
    }

    function kd(a) {
        this.h = a
    }
    kd.prototype.then = function(a, b) {
        if (this.i) throw Error("Then functions already set.");
        this.i = a;
        this.j = b;
        md(this)
    };

    function md(a) {
        switch (a.h.h) {
            case 0:
                break;
            case 1:
                a.i && a.i(a.h.l);
                break;
            case 2:
                a.j && a.j(a.h.j);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    };

    function nd(a) {
        this.h = a.slice(0)
    }
    n = nd.prototype;
    n.forEach = function(a) {
        var b = this;
        this.h.forEach(function(c, d) {
            return void a(c, d, b)
        })
    };
    n.filter = function(a) {
        return new nd(Sa(this.h, a))
    };
    n.apply = function(a) {
        return new nd(a(this.h.slice(0)))
    };
    n.sort = function(a) {
        return new nd(this.h.slice(0).sort(a))
    };
    n.get = function(a) {
        return this.h[a]
    };
    n.add = function(a) {
        var b = this.h.slice(0);
        b.push(a);
        return new nd(b)
    };

    function od(a, b) {
        for (var c = [], d = a.length, e = 0; e < d; e++) c.push(a[e]);
        c.forEach(b, void 0)
    };

    function pd() {
        this.h = {};
        this.i = {}
    }
    pd.prototype.set = function(a, b) {
        var c = qd(a);
        this.h[c] = b;
        this.i[c] = a
    };
    pd.prototype.get = function(a, b) {
        a = qd(a);
        return void 0 !== this.h[a] ? this.h[a] : b
    };
    pd.prototype.clear = function() {
        this.h = {};
        this.i = {}
    };

    function qd(a) {
        return a instanceof Object ? String(za(a)) : a + ""
    };

    function rd(a, b) {
        this.h = a;
        this.i = b
    }

    function sd(a) {
        return null != a.h ? a.h.value : null
    }

    function td(a, b) {
        null != a.h && b(a.h.value);
        return a
    }
    rd.prototype.map = function(a) {
        return null != this.h ? (a = a(this.h.value), a instanceof rd ? a : ud(a)) : this
    };

    function vd(a, b) {
        null != a.h || b(a.i);
        return a
    }

    function ud(a) {
        return new rd({
            value: a
        }, null)
    }

    function wd(a) {
        return new rd(null, a)
    }

    function xd(a) {
        try {
            return ud(a())
        } catch (b) {
            return wd(b)
        }
    };

    function yd(a) {
        this.h = new pd;
        if (a)
            for (var b = 0; b < a.length; ++b) this.add(a[b])
    }
    yd.prototype.add = function(a) {
        this.h.set(a, !0)
    };
    yd.prototype.contains = function(a) {
        return void 0 !== this.h.h[qd(a)]
    };

    function zd() {
        this.h = new pd
    }
    zd.prototype.set = function(a, b) {
        var c = this.h.get(a);
        c || (c = new yd, this.h.set(a, c));
        c.add(b)
    };

    function Ad(a) {
        A.call(this, a, -1, Bd)
    }
    v(Ad, A);
    Ad.prototype.getId = function() {
        return B(this, 3)
    };
    var Bd = [4];

    function Cd(a) {
        var b = void 0 === a.Fa ? void 0 : a.Fa,
            c = void 0 === a.eb ? void 0 : a.eb,
            d = void 0 === a.Pa ? void 0 : a.Pa;
        this.h = void 0 === a.$a ? void 0 : a.$a;
        this.l = new nd(b || []);
        this.j = d;
        this.i = c
    };

    function Dd(a) {
        var b = [],
            c = a.l;
        c && c.h.length && b.push({
            W: "a",
            ba: Ed(c)
        });
        null != a.h && b.push({
            W: "as",
            ba: a.h
        });
        null != a.i && b.push({
            W: "i",
            ba: String(a.i)
        });
        null != a.j && b.push({
            W: "rp",
            ba: String(a.j)
        });
        b.sort(function(d, e) {
            return d.W.localeCompare(e.W)
        });
        b.unshift({
            W: "t",
            ba: "aa"
        });
        return b
    }

    function Ed(a) {
        a = a.h.slice(0).map(Fd);
        a = JSON.stringify(a);
        return Bc(a)
    }

    function Fd(a) {
        var b = {};
        null != B(a, 7) && (b.q = B(a, 7));
        null != B(a, 2) && (b.o = B(a, 2));
        null != B(a, 5) && (b.p = B(a, 5));
        return b
    };

    function Gd(a) {
        A.call(this, a)
    }
    v(Gd, A);
    Gd.prototype.setLocation = function(a) {
        return C(this, 1, a)
    };

    function Hd(a, b) {
        this.Ia = a;
        this.Oa = b
    }

    function Id(a) {
        var b = [].slice.call(arguments).filter(dc(function(e) {
            return null === e
        }));
        if (!b.length) return null;
        var c = [],
            d = {};
        b.forEach(function(e) {
            c = c.concat(e.Ia || []);
            d = t(Object, "assign").call(Object, d, e.Oa)
        });
        return new Hd(c, d)
    }

    function Jd(a) {
        switch (a) {
            case 1:
                return new Hd(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new Hd(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new Hd(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new Hd(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Kd(a) {
        if (null == a) a = null;
        else {
            var b = Dd(a);
            a = [];
            b = u(b);
            for (var c = b.next(); !c.done; c = b.next()) {
                c = c.value;
                var d = String(c.ba);
                a.push(c.W + "." + (20 >= d.length ? d : d.slice(0, 19) + "_"))
            }
            a = new Hd(null, {
                google_placement_id: a.join("~")
            })
        }
        return a
    };
    var Ld = {},
        Md = new Hd(["google-auto-placed"], (Ld.google_reactive_ad_format = 40, Ld.google_tag_origin = "qs", Ld));

    function Nd(a) {
        A.call(this, a)
    }
    v(Nd, A);

    function Od(a) {
        A.call(this, a)
    }
    v(Od, A);
    Od.prototype.getName = function() {
        return B(this, 4)
    };

    function Pd(a) {
        A.call(this, a)
    }
    v(Pd, A);

    function Qd(a) {
        A.call(this, a)
    }
    v(Qd, A);

    function Rd(a) {
        A.call(this, a)
    }
    v(Rd, A);
    var Sd = [1, 2, 3];

    function Td(a) {
        A.call(this, a)
    }
    v(Td, A);

    function Ud(a) {
        A.call(this, a, -1, Vd)
    }
    v(Ud, A);
    var Vd = [6, 7, 9, 10, 11];

    function Wd(a) {
        A.call(this, a, -1, Xd)
    }
    v(Wd, A);

    function Yd(a) {
        A.call(this, a)
    }
    v(Yd, A);

    function Zd(a) {
        A.call(this, a)
    }
    v(Zd, A);
    var Xd = [1],
        $d = [1, 2];

    function ae(a) {
        A.call(this, a, -1, be)
    }
    v(ae, A);

    function ce(a) {
        A.call(this, a)
    }
    v(ce, A);

    function de(a) {
        A.call(this, a, -1, ee)
    }
    v(de, A);

    function fe(a) {
        A.call(this, a)
    }
    v(fe, A);

    function ge(a) {
        A.call(this, a)
    }
    v(ge, A);

    function he(a) {
        A.call(this, a)
    }
    v(he, A);

    function ie(a) {
        A.call(this, a)
    }
    v(ie, A);
    var be = [1, 2, 5, 7],
        ee = [2, 5, 6, 11];

    function je(a) {
        A.call(this, a)
    }
    v(je, A);

    function ke(a) {
        if (1 != a.nodeType) var b = !1;
        else if (b = "INS" == a.tagName) a: {
            b = ["adsbygoogle-placeholder"];a = a.className ? a.className.split(/\s+/) : [];
            for (var c = {}, d = 0; d < a.length; ++d) c[a[d]] = !0;
            for (d = 0; d < b.length; ++d)
                if (!c[b[d]]) {
                    b = !1;
                    break a
                }
            b = !0
        }
        return b
    };

    function le(a, b, c) {
        switch (c) {
            case 0:
                b.parentNode && b.parentNode.insertBefore(a, b);
                break;
            case 3:
                if (c = b.parentNode) {
                    var d = b.nextSibling;
                    if (d && d.parentNode != c)
                        for (; d && 8 == d.nodeType;) d = d.nextSibling;
                    c.insertBefore(a, d)
                }
                break;
            case 1:
                b.insertBefore(a, b.firstChild);
                break;
            case 2:
                b.appendChild(a)
        }
        ke(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    };

    function L(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? !1 : b
    }

    function M(a, b) {
        this.h = a;
        this.defaultValue = void 0 === b ? 0 : b
    }

    function me(a, b) {
        b = void 0 === b ? [] : b;
        this.h = a;
        this.defaultValue = b
    };
    var ne = new L(1084),
        oe = new L(1082, !0),
        pe = new M(62, .001),
        qe = new M(1130),
        re = new function(a, b) {
            this.h = a;
            this.defaultValue = void 0 === b ? "" : b
        }(14),
        se = new M(1114, 1),
        te = new M(1110),
        ue = new M(1111),
        ve = new M(1112),
        we = new M(1113),
        xe = new M(1104),
        ye = new M(1108),
        ze = new M(1106),
        Ae = new M(1107),
        Be = new M(1105),
        Ce = new M(1115, 1),
        De = new L(1121),
        Ee = new L(316),
        Fe = new L(313),
        Ge = new L(369),
        He = new L(1093),
        Ie = new M(1098),
        Je = new L(1129),
        Ke = new L(1128),
        Le = new L(1026),
        Me = new L(1090),
        Ne = new L(1136, !0),
        Oe = new L(1053, !0),
        Pe = new L(1120),
        Qe = new L(1100, !0),
        Re = new L(1109, !0),
        Se = new L(1135),
        Te = new M(1046),
        Ue = new L(1102, !0),
        Ve = new L(218),
        We = new L(216),
        Xe = new L(217),
        Ye = new L(1125),
        Ze = new L(227),
        $e = new L(208),
        af = new L(282),
        bf = new L(1086),
        cf = new M(1079, 5),
        df = new L(1141),
        ef = new me(1939),
        ff = new me(1934, ["A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
            "A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9", "A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"
        ]),
        gf = new L(1959),
        hf = new L(203),
        jf = new L(84),
        kf = new L(1928),
        lf = new L(1941),
        mf = new L(370946349),
        nf = new L(392736476),
        of = new M(406149835),
        pf = new me(1932, ["AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=", "Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
            "A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
            "A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
        ]),
        qf = new M(1935);

    function N(a) {
        var b = "ra";
        if (a.ra && a.hasOwnProperty(b)) return a.ra;
        b = new a;
        return a.ra = b
    };

    function rf() {
        var a = {};
        this.i = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.j = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.l = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.h = function(b, c) {
            return null != a[b] ? a[b] : c
        };
        this.m = function() {}
    }

    function O(a) {
        return N(rf).i(a.h, a.defaultValue)
    }

    function P(a) {
        return N(rf).j(a.h, a.defaultValue)
    }

    function sf() {
        return N(rf).l(re.h, re.defaultValue)
    };

    function tf(a, b, c) {
        function d(f) {
            f = uf(f);
            return null == f ? !1 : c > f
        }

        function e(f) {
            f = uf(f);
            return null == f ? !1 : c < f
        }
        switch (b) {
            case 0:
                return {
                    init: vf(a.previousSibling, e),
                    ia: function(f) {
                        return vf(f.previousSibling, e)
                    },
                    ma: 0
                };
            case 2:
                return {
                    init: vf(a.lastChild, e),
                    ia: function(f) {
                        return vf(f.previousSibling, e)
                    },
                    ma: 0
                };
            case 3:
                return {
                    init: vf(a.nextSibling, d),
                    ia: function(f) {
                        return vf(f.nextSibling, d)
                    },
                    ma: 3
                };
            case 1:
                return {
                    init: vf(a.firstChild, d),
                    ia: function(f) {
                        return vf(f.nextSibling, d)
                    },
                    ma: 3
                }
        }
        throw Error("Un-handled RelativePosition: " +
            b);
    }

    function uf(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function vf(a, b) {
        return a && b(a) ? a : null
    };
    var wf = {
        rectangle: 1,
        horizontal: 2,
        vertical: 4
    };

    function xf() {
        this.j = "&";
        this.i = {};
        this.l = 0;
        this.h = []
    }

    function yf(a, b) {
        var c = {};
        c[a] = b;
        return [c]
    }

    function zf(a, b, c, d, e) {
        var f = [];
        Ac(a, function(g, h) {
            (g = Af(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function Af(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                for (var f = [], g = 0; g < a.length; g++) f.push(Af(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(zf(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Bf(a, b) {
        var c = "https://pagead2.googlesyndication.com" + b,
            d = Cf(a) - b.length;
        if (0 > d) return "";
        a.h.sort(function(m, q) {
            return m - q
        });
        b = null;
        for (var e = "", f = 0; f < a.h.length; f++)
            for (var g = a.h[f], h = a.i[g], k = 0; k < h.length; k++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                var l = zf(h[k], a.j, ",$");
                if (l) {
                    l = e + l;
                    if (d >= l.length) {
                        d -= l.length;
                        c += l;
                        e = a.j;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }

    function Cf(a) {
        var b = 1,
            c;
        for (c in a.i) b = c.length > b ? c.length : b;
        return 3997 - b - a.j.length - 1
    };

    function Df() {
        this.h = Math.random()
    }

    function Ef() {
        var a = Ff,
            b = w.google_srt;
        0 <= b && 1 >= b && (a.h = b)
    }

    function Gf(a, b, c, d, e) {
        if ((d ? a.h : Math.random()) < (e || .01)) try {
            if (c instanceof xf) var f = c;
            else f = new xf, Ac(c, function(h, k) {
                var l = f,
                    m = l.l++;
                h = yf(k, h);
                l.h.push(m);
                l.i[m] = h
            });
            var g = Bf(f, "/pagead/gen_204?id=" + b + "&");
            g && Zc(w, g)
        } catch (h) {}
    };
    var Hf = {
        overlays: 1,
        interstitials: 2,
        vignettes: 2,
        inserts: 3,
        immersives: 4,
        list_view: 5
    };

    function If() {
        this.wasPlaTagProcessed = !1;
        this.wasReactiveAdConfigReceived = {};
        this.adCount = {};
        this.wasReactiveAdVisible = {};
        this.stateForType = {};
        this.reactiveTypeEnabledInAsfe = {};
        this.wasReactiveTagRequestSent = !1;
        this.reactiveTypeDisabledByPublisher = {};
        this.tagSpecificState = {};
        this.messageValidationEnabled = !1;
        this.floatingAdsStacking = new Jf;
        this.sideRailProcessedFixedElements = new p.Set;
        this.sideRailAvailableSpace = new p.Map
    }

    function Kf(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new p.Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new p.Map)) : a.google_reactive_ads_global_state = new If;
        return a.google_reactive_ads_global_state
    }

    function Jf() {
        this.maxZIndexRestrictions = {};
        this.nextRestrictionId = 0;
        this.maxZIndexListeners = []
    };

    function Lf(a) {
        a = a.document;
        var b = {};
        a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return b || {}
    }

    function Mf(a) {
        return Lf(a).clientWidth
    };

    function Nf(a) {
        return null !== a && void 0 !== a
    }

    function Of(a, b) {
        if (!b(a)) throw Error(String(a));
    };

    function Pf(a) {
        return "string" === typeof a
    }

    function Qf(a) {
        return void 0 === a
    };

    function Rf(a) {
        A.call(this, a, -1, Sf)
    }
    v(Rf, A);
    var Sf = [2, 8],
        Tf = [3, 4, 5],
        Uf = [6, 7];
    var Vf;
    Vf = {
        ub: 0,
        Wa: 3,
        Xa: 4,
        Ya: 5
    };
    var Wf = Vf.Wa,
        Xf = Vf.Xa,
        Yf = Vf.Ya;

    function Zf(a) {
        return null != a ? !a : a
    }

    function $f(a, b) {
        for (var c = !1, d = 0; d < a.length; d++) {
            var e = a[d]();
            if (e === b) return e;
            null == e && (c = !0)
        }
        if (!c) return !b
    }

    function ag(a, b) {
        var c = I(a, Rf, 2);
        if (!c.length) return bg(a, b);
        a = D(a, 1, 0);
        if (1 === a) return Zf(ag(c[0], b));
        c = Ta(c, function(d) {
            return function() {
                return ag(d, b)
            }
        });
        switch (a) {
            case 2:
                return $f(c, !1);
            case 3:
                return $f(c, !0)
        }
    }

    function bg(a, b) {
        var c = vb(a, Tf);
        a: {
            switch (c) {
                case Wf:
                    var d = Cb(a, 3, Tf);
                    break a;
                case Xf:
                    d = Cb(a, 4, Tf);
                    break a;
                case Yf:
                    d = Cb(a, 5, Tf);
                    break a
            }
            d = void 0
        }
        if (d && (b = (b = b[c]) && b[d])) {
            try {
                var e = b.apply(null, la(ob(a, 8)))
            } catch (f) {
                return
            }
            b = D(a, 1, 0);
            if (4 === b) return !!e;
            d = null != e;
            if (5 === b) return d;
            if (12 === b) a = Bb(a, Ab(a, Uf, 7), void 0);
            else a: {
                switch (c) {
                    case Xf:
                        a = qb(a, Ab(a, Uf, 6), void 0);
                        break a;
                    case Yf:
                        a = Bb(a, Ab(a, Uf, 7), void 0);
                        break a
                }
                a = void 0
            }
            if (null != a) {
                if (6 === b) return e === a;
                if (9 === b) return null != e && 0 === Ka(String(e),
                    a);
                if (d) switch (b) {
                    case 7:
                        return e < a;
                    case 8:
                        return e > a;
                    case 12:
                        return Pf(a) && Pf(e) && (new RegExp(a)).test(e);
                    case 10:
                        return null != e && -1 === Ka(String(e), a);
                    case 11:
                        return null != e && 1 === Ka(String(e), a)
                }
            }
        }
    }

    function cg(a, b) {
        return !a || !(!b || !ag(a, b))
    };

    function dg(a) {
        A.call(this, a, -1, eg)
    }
    v(dg, A);
    var eg = [4];

    function fg(a) {
        A.call(this, a)
    }
    v(fg, A);

    function gg(a) {
        A.call(this, a, -1, hg)
    }
    v(gg, A);
    var hg = [5],
        ig = [1, 2, 3, 6, 7];

    function jg(a) {
        a.Qa.apply(a, la(sa.apply(1, arguments).map(function(b) {
            return {
                Va: 4,
                message: b
            }
        })))
    }

    function kg(a) {
        a.Qa.apply(a, la(sa.apply(1, arguments).map(function(b) {
            return {
                Va: 7,
                message: b
            }
        })))
    };

    function lg(a) {
        return function() {
            var b = sa.apply(0, arguments);
            try {
                return a.apply(this, b)
            } catch (c) {}
        }
    }
    var mg = lg(function(a) {
        var b = [],
            c = {};
        a = u(a);
        for (var d = a.next(); !d.done; c = {
                da: c.da
            }, d = a.next()) c.da = d.value, lg(function(e) {
            return function() {
                b.push('[{"' + e.da.Va + '":' + zb(e.da.message) + "}]")
            }
        }(c))();
        return "[[" + b.join(",") + "]]"
    });

    function ng(a, b) {
        if (p.globalThis.fetch) p.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        });
        else {
            var c = new XMLHttpRequest;
            c.open("POST", a, !0);
            c.send(b)
        }
    };

    function og(a) {
        var b = void 0 === b ? ng : b;
        this.l = void 0 === a ? 1E3 : a;
        this.j = b;
        this.i = [];
        this.h = null
    }
    og.prototype.Qa = function() {
        var a = sa.apply(0, arguments),
            b = this;
        lg(function() {
            b.i.push.apply(b.i, la(a));
            var c = lg(function() {
                var d = mg(b.i);
                b.j("https://pagead2.googlesyndication.com/pagead/ping?e=1", d);
                b.i = [];
                b.h = null
            });
            100 <= b.i.length ? (null !== b.h && clearTimeout(b.h), b.h = setTimeout(c, 0)) : null === b.h && (b.h = setTimeout(c, b.l))
        })()
    };

    function pg(a) {
        A.call(this, a, -1, qg)
    }
    v(pg, A);

    function rg(a, b) {
        var c;
        a.h || (a.h = {});
        var d = b ? b.i : b;
        a.h[1] = b;
        return C(a, 1, d, void 0 === c ? !1 : c)
    }

    function sg(a, b) {
        return xb(a, 2, b)
    }

    function tg(a, b) {
        return rb(a, 4, b)
    }

    function ug(a, b) {
        return xb(a, 5, b)
    }

    function vg(a, b) {
        return sb(a, 6, b)
    }

    function wg(a) {
        A.call(this, a)
    }
    v(wg, A);
    wg.prototype.U = function() {
        return D(this, 1, 0)
    };

    function xg(a, b) {
        return sb(a, 1, b)
    }

    function yg(a, b) {
        return sb(a, 2, b)
    }

    function zg(a) {
        A.call(this, a)
    }
    v(zg, A);
    var qg = [2, 4, 5],
        Ag = [1, 2];

    function Bg(a) {
        A.call(this, a, -1, Cg)
    }
    v(Bg, A);

    function Dg(a) {
        A.call(this, a, -1, Eg)
    }
    v(Dg, A);
    var Cg = [2, 3],
        Eg = [5],
        Fg = [1, 2, 3, 4];

    function Gg(a) {
        A.call(this, a)
    }
    v(Gg, A);
    Gg.prototype.getTagSessionCorrelator = function() {
        return D(this, 2, 0)
    };

    function Hg(a) {
        var b = new Gg;
        return wb(b, 4, Ig, a)
    }
    var Ig = [4, 5, 7];

    function Jg(a, b, c) {
        var d = void 0 === d ? new og(b) : d;
        this.i = a;
        this.m = c;
        this.j = d;
        this.h = [];
        this.l = 0 < this.i && zc() < 1 / this.i
    }

    function Kg(a, b, c, d, e, f) {
        var g = yg(xg(new wg, b), c);
        b = vg(sg(rg(ug(tg(new pg, d), e), g), a.h), f);
        b = Hg(b);
        a.l && jg(a.j, Lg(a, b));
        if (1 === f || 3 === f || 4 === f && !a.h.some(function(h) {
                return h.U() === g.U() && D(h, 2, 0) === c
            })) a.h.push(g), 100 < a.h.length && a.h.shift()
    }

    function Qg(a, b, c, d) {
        if (a.m) {
            var e = new Bg;
            b = xb(e, 2, b);
            c = xb(b, 3, c);
            d && sb(c, 1, d);
            d = new Gg;
            d = wb(d, 7, Ig, c);
            a.l && jg(a.j, Lg(a, d))
        }
    }

    function Lg(a, b) {
        b = sb(b, 1, Date.now());
        var c = Rc(window);
        b = sb(b, 2, c);
        return sb(b, 6, a.i)
    };

    function Rg() {
        var a = {};
        this.h = (a[Wf] = {}, a[Xf] = {}, a[Yf] = {}, a)
    };
    var Sg = Ic("false");
    var Tg = Sg;

    function Ug(a, b) {
        switch (b) {
            case 1:
                return Cb(a, 1, ig);
            case 2:
                return Cb(a, 2, ig);
            case 3:
                return Cb(a, 3, ig);
            case 6:
                return Cb(a, 6, ig);
            default:
                return null
        }
    }

    function Vg(a, b) {
        if (!a) return null;
        switch (b) {
            case 1:
                return G(a, 1);
            case 7:
                return Bb(a, 3);
            case 2:
                return qb(a, 2);
            case 3:
                return Bb(a, 3);
            case 6:
                return ob(a, 4);
            default:
                return null
        }
    }
    var Wg = ec(function() {
        if (!Tg) return {};
        try {
            var a = window.sessionStorage && window.sessionStorage.getItem("GGDFSSK");
            if (a) return JSON.parse(a)
        } catch (b) {}
        return {}
    });

    function Xg(a, b, c, d) {
        var e = d = void 0 === d ? 0 : d,
            f, g;
        N(Yg).j[e] = null != (g = null == (f = N(Yg).j[e]) ? void 0 : f.add(b)) ? g : (new p.Set).add(b);
        e = Wg();
        if (null != e[b]) return e[b];
        b = Zg(d)[b];
        if (!b) return c;
        b = new gg(b);
        b = $g(b);
        a = Vg(b, a);
        return null != a ? a : c
    }

    function $g(a) {
        var b = N(Rg).h;
        if (b) {
            var c = Wa(I(a, fg, 5), function(d) {
                return cg(H(d, Rf, 1), b)
            });
            if (c) return H(c, dg, 2)
        }
        return H(a, dg, 4)
    }

    function Yg() {
        this.i = {};
        this.l = [];
        this.j = {};
        this.h = new p.Map
    }

    function ah(a, b, c) {
        return !!Xg(1, a, void 0 === b ? !1 : b, c)
    }

    function bh(a, b, c) {
        b = void 0 === b ? 0 : b;
        a = Number(Xg(2, a, b, c));
        return isNaN(a) ? b : a
    }

    function ch(a, b, c) {
        return Xg(3, a, void 0 === b ? "" : b, c)
    }

    function dh(a, b, c) {
        b = void 0 === b ? [] : b;
        return Xg(6, a, b, c)
    }

    function Zg(a) {
        return N(Yg).i[a] || (N(Yg).i[a] = {})
    }

    function eh(a, b) {
        var c = Zg(b);
        Ac(a, function(d, e) {
            return c[e] = d
        })
    }

    function fh(a, b, c, d, e) {
        e = void 0 === e ? !1 : e;
        var f = [],
            g = [];
        Ra(b, function(h) {
            var k = Zg(h);
            Ra(a, function(l) {
                var m = vb(l, ig),
                    q = Ug(l, m);
                if (q) {
                    var r, y, F;
                    var z = null != (F = null == (r = N(Yg).h.get(h)) ? void 0 : null == (y = r.get(q)) ? void 0 : y.slice(0)) ? F : [];
                    a: {
                        r = new Dg;
                        switch (m) {
                            case 1:
                                tb(r, 1, Fg, q);
                                break;
                            case 2:
                                tb(r, 2, Fg, q);
                                break;
                            case 3:
                                tb(r, 3, Fg, q);
                                break;
                            case 6:
                                tb(r, 4, Fg, q);
                                break;
                            default:
                                m = void 0;
                                break a
                        }
                        rb(r, 5, z);m = r
                    }
                    if (z = m) {
                        var E;
                        z = !(null == (E = N(Yg).j[h]) || !E.has(q))
                    }
                    z && f.push(m);
                    if (E = m) {
                        var S;
                        E = !(null == (S = N(Yg).h.get(h)) ||
                            !S.has(q))
                    }
                    E && g.push(m);
                    e || (S = N(Yg), S.h.has(h) || S.h.set(h, new p.Map), S.h.get(h).has(q) || S.h.get(h).set(q, []), d && S.h.get(h).get(q).push(d));
                    k[q] = l.toJSON()
                }
            })
        });
        (f.length || g.length) && Qg(c, f, g, null != d ? d : void 0)
    }

    function gh(a, b) {
        var c = Zg(b);
        Ra(a, function(d) {
            var e = new gg(d),
                f = vb(e, ig);
            (e = Ug(e, f)) && (c[e] || (c[e] = d))
        })
    }

    function hh() {
        return Ta(t(Object, "keys").call(Object, N(Yg).i), function(a) {
            return Number(a)
        })
    }

    function ih(a) {
        Xa(N(Yg).l, a) || eh(Zg(4), a)
    };

    function jh(a) {
        this.methodName = a
    }
    var kh = new jh(1),
        lh = new jh(16),
        mh = new jh(15),
        nh = new jh(2),
        oh = new jh(3),
        ph = new jh(4),
        qh = new jh(5),
        rh = new jh(6),
        sh = new jh(7),
        th = new jh(8),
        uh = new jh(9),
        vh = new jh(10),
        wh = new jh(11),
        xh = new jh(12),
        yh = new jh(13),
        zh = new jh(14);

    function Ah(a, b, c) {
        c.hasOwnProperty(a.methodName) || Object.defineProperty(c, String(a.methodName), {
            value: b
        })
    }

    function Bh(a, b, c) {
        return b[a.methodName] || c || function() {}
    }

    function Ch(a) {
        Ah(qh, ah, a);
        Ah(rh, bh, a);
        Ah(sh, ch, a);
        Ah(th, dh, a);
        Ah(yh, gh, a);
        Ah(mh, ih, a)
    }

    function Dh(a) {
        Ah(ph, function(b) {
            N(Rg).h = b
        }, a);
        Ah(uh, function(b, c) {
            var d = N(Rg);
            d.h[Wf][b] || (d.h[Wf][b] = c)
        }, a);
        Ah(vh, function(b, c) {
            var d = N(Rg);
            d.h[Xf][b] || (d.h[Xf][b] = c)
        }, a);
        Ah(wh, function(b, c) {
            var d = N(Rg);
            d.h[Yf][b] || (d.h[Yf][b] = c)
        }, a);
        Ah(zh, function(b) {
            for (var c = N(Rg), d = u([Wf, Xf, Yf]), e = d.next(); !e.done; e = d.next()) e = e.value, t(Object, "assign").call(Object, c.h[e], b[e])
        }, a)
    }

    function Eh(a) {
        a.hasOwnProperty("init-done") || Object.defineProperty(a, "init-done", {
            value: !0
        })
    };

    function Fh() {
        this.l = function() {};
        this.i = function() {};
        this.j = function() {};
        this.h = function() {
            return []
        }
    }

    function Gh(a, b, c) {
        a.l = Bh(kh, b, function() {});
        a.j = function(d) {
            Bh(nh, b, function() {
                return []
            })(d, c)
        };
        a.h = function() {
            return Bh(oh, b, function() {
                return []
            })(c)
        };
        a.i = function(d) {
            Bh(lh, b, function() {})(d, c)
        }
    };
    var Q = {},
        Hh = (Q[23] = .001, Q[38] = .001, Q[150] = "", Q[211] = !1, Q[253] = !1, Q[172] = null, Q[246] = [], Q[226] = [], Q[252] = null, Q[258] = null, Q[251] = null, Q[259] = null, Q[6] = function(a, b) {
            b = void 0 === b ? !0 : b;
            try {
                for (var c = null; c != a; c = a, a = a.parent) switch (a.location.protocol) {
                    case "https:":
                        return !0;
                    case "file:":
                        return b;
                    case "http:":
                        return !1
                }
            } catch (d) {}
            return !0
        }(window), Q[36] = Ic("false"), Q[148] = Sg, Q[221] = Ic("false"), Q[257] = Ic("false"), Q[260] = void 0, Q[262] = Ic("false"), Q),
        Ih, Jh;
    Ih = null !== (Jh = w.googletag) && void 0 !== Jh ? Jh : w.googletag = {};
    t(Object, "assign").call(Object, Hh, Ih._vars_);
    Ih._vars_ = Hh;

    function Kh(a, b) {
        var c = void 0 === c ? {} : c;
        this.error = a;
        this.context = b.context;
        this.msg = b.message || "";
        this.id = b.id || "jserror";
        this.meta = c
    }

    function Lh(a) {
        return !!(a.error && a.meta && a.id)
    };
    var Mh = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");

    function Nh(a, b) {
        this.h = a;
        this.i = b
    }

    function Oh(a, b, c) {
        this.url = a;
        this.G = b;
        this.Ka = !!c;
        this.depth = null
    };
    var Ph = null;

    function Qh() {
        if (null === Ph) {
            Ph = "";
            try {
                var a = "";
                try {
                    a = w.top.location.hash
                } catch (c) {
                    a = w.location.hash
                }
                if (a) {
                    var b = a.match(/\bdeid=([\d,]+)/);
                    Ph = b ? b[1] : ""
                }
            } catch (c) {}
        }
        return Ph
    };

    function Rh() {
        var a = void 0 === a ? w : a;
        return (a = a.performance) && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Date.now()
    }

    function Sh() {
        var a = void 0 === a ? w : a;
        return (a = a.performance) && a.now ? a.now() : null
    };

    function Th(a, b) {
        var c = Sh() || Rh();
        this.label = a;
        this.type = b;
        this.value = c;
        this.duration = 0;
        this.uniqueId = Math.random();
        this.slotId = void 0
    };
    var Uh = w.performance,
        Vh = !!(Uh && Uh.mark && Uh.measure && Uh.clearMarks),
        Wh = ec(function() {
            var a;
            if (a = Vh) a = Qh(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function Xh() {
        this.events = [];
        this.i = w || w;
        var a = null;
        w && (w.google_js_reporting_queue = w.google_js_reporting_queue || [], this.events = w.google_js_reporting_queue, a = w.google_measure_js_timing);
        this.h = Wh() || (null != a ? a : 1 > Math.random())
    }

    function Yh(a) {
        a && Uh && Wh() && (Uh.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_start"), Uh.clearMarks("goog_" + a.label + "_" + a.uniqueId + "_end"))
    }
    Xh.prototype.start = function(a, b) {
        if (!this.h) return null;
        a = new Th(a, b);
        b = "goog_" + a.label + "_" + a.uniqueId + "_start";
        Uh && Wh() && Uh.mark(b);
        return a
    };
    Xh.prototype.end = function(a) {
        if (this.h && "number" === typeof a.value) {
            a.duration = (Sh() || Rh()) - a.value;
            var b = "goog_" + a.label + "_" + a.uniqueId + "_end";
            Uh && Wh() && Uh.mark(b);
            !this.h || 2048 < this.events.length || this.events.push(a)
        }
    };

    function Zh() {
        var a = $h;
        this.m = Ff;
        this.i = null;
        this.l = this.H;
        this.h = void 0 === a ? null : a;
        this.j = !1
    }
    n = Zh.prototype;
    n.Sa = function(a) {
        this.l = a
    };
    n.Ra = function(a) {
        this.i = a
    };
    n.Ta = function(a) {
        this.j = a
    };
    n.na = function(a, b, c) {
        try {
            if (this.h && this.h.h) {
                var d = this.h.start(a.toString(), 3);
                var e = b();
                this.h.end(d)
            } else e = b()
        } catch (h) {
            b = !0;
            try {
                Yh(d), b = this.l(a, new Kh(h, {
                    message: ai(h)
                }), void 0, c)
            } catch (k) {
                this.H(217, k)
            }
            if (b) {
                var f, g;
                null == (f = window.console) || null == (g = f.error) || g.call(f, h)
            } else throw h;
        }
        return e
    };
    n.Na = function(a, b, c, d) {
        var e = this;
        return function() {
            var f = sa.apply(0, arguments);
            return e.na(a, function() {
                return b.apply(c, f)
            }, d)
        }
    };
    n.H = function(a, b, c, d, e) {
        e = e || "jserror";
        try {
            var f = new xf;
            f.h.push(1);
            f.i[1] = yf("context", a);
            Lh(b) || (b = new Kh(b, {
                message: ai(b)
            }));
            if (b.msg) {
                var g = b.msg.substring(0, 512);
                f.h.push(2);
                f.i[2] = yf("msg", g)
            }
            var h = b.meta || {};
            if (this.i) try {
                this.i(h)
            } catch (Jc) {}
            if (d) try {
                d(h)
            } catch (Jc) {}
            b = [h];
            f.h.push(3);
            f.i[3] = b;
            d = w;
            b = [];
            g = null;
            do {
                var k = d;
                if (rc(k)) {
                    var l = k.location.href;
                    g = k.document && k.document.referrer || null
                } else l = g, g = null;
                b.push(new Oh(l || "", k));
                try {
                    d = k.parent
                } catch (Jc) {
                    d = null
                }
            } while (d && k != d);
            l = 0;
            for (var m =
                    b.length - 1; l <= m; ++l) b[l].depth = m - l;
            k = w;
            if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == b.length - 1)
                for (m = 1; m < b.length; ++m) {
                    var q = b[m];
                    q.url || (q.url = k.location.ancestorOrigins[m - 1] || "", q.Ka = !0)
                }
            var r = new Oh(w.location.href, w, !1);
            k = null;
            var y = b.length - 1;
            for (q = y; 0 <= q; --q) {
                var F = b[q];
                !k && Mh.test(F.url) && (k = F);
                if (F.url && !F.Ka) {
                    r = F;
                    break
                }
            }
            F = null;
            var z = b.length && b[y].url;
            0 != r.depth && z && (F = b[y]);
            var E = new Nh(r, F);
            if (E.i) {
                var S = E.i.url || "";
                f.h.push(4);
                f.i[4] = yf("top", S)
            }
            var ub = {
                url: E.h.url || ""
            };
            if (E.h.url) {
                var Kc = E.h.url.match(oc),
                    Mg = Kc[1],
                    Ng = Kc[3],
                    Og = Kc[4];
                r = "";
                Mg && (r += Mg + ":");
                Ng && (r += "//", r += Ng, Og && (r += ":" + Og));
                var Pg = r
            } else Pg = "";
            ub = [ub, {
                url: Pg
            }];
            f.h.push(5);
            f.i[5] = ub;
            Gf(this.m, e, f, this.j, c)
        } catch (Jc) {
            try {
                Gf(this.m, e, {
                    context: "ecmserr",
                    rctx: a,
                    msg: ai(Jc),
                    url: E && E.h.url
                }, this.j, c)
            } catch (ep) {}
        }
        return !0
    };

    function ai(a) {
        var b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        if (a.stack) {
            a = a.stack;
            try {
                -1 == a.indexOf(b) && (a = b + "\n" + a);
                for (var c; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
                b = a.replace(/\n */g, "\n")
            } catch (d) {}
        }
        return b
    };
    var bi = ka(["https://www.googletagservices.com/console/host/host.js"]),
        ci = ka(["https://www.googletagservices.com/console/panel/index.html"]),
        di = ka(["https://www.googletagservices.com/console/overlay/index.html"]);
    bd(bi);
    bd(ci);
    bd(di);

    function ei() {
        this.u = this.u;
        this.D = this.D
    }
    ei.prototype.u = !1;
    ei.prototype.j = function() {
        if (this.D)
            for (; this.D.length;) this.D.shift()()
    };

    function fi() {
        var a = this;
        this.promise = new p.Promise(function(b, c) {
            a.resolve = b;
            a.reject = c
        })
    };

    function gi(a) {
        this.h = a || {
            cookie: ""
        }
    }
    gi.prototype.set = function(a, b, c) {
        var d = !1;
        if ("object" === typeof c) {
            var e = c.Db;
            d = c.Eb || !1;
            var f = c.domain || void 0;
            var g = c.path || void 0;
            var h = c.hb
        }
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === h && (h = -1);
        this.h.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (g ? ";path=" + g : "") + (0 > h ? "" : 0 == h ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * h)).toUTCString()) + (d ? ";secure" : "") + (null != e ? ";samesite=" +
            e : "")
    };
    gi.prototype.get = function(a, b) {
        for (var c = a + "=", d = (this.h.cookie || "").split(";"), e = 0, f; e < d.length; e++) {
            f = Ja(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    gi.prototype.isEmpty = function() {
        return !this.h.cookie
    };
    gi.prototype.clear = function() {
        for (var a = (this.h.cookie || "").split(";"), b = [], c = [], d, e, f = 0; f < a.length; f++) e = Ja(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) c = b[a], this.get(c), this.set(c, "", {
            hb: 0,
            path: void 0,
            domain: void 0
        })
    };

    function hi(a) {
        function b() {
            if (!a.frames.__uspapiLocator)
                if (c.body) {
                    var d = uc("IFRAME", c);
                    d.style.display = "none";
                    d.style.width = "0px";
                    d.style.height = "0px";
                    d.style.border = "none";
                    d.style.zIndex = "-1000";
                    d.style.left = "-1000px";
                    d.style.top = "-1000px";
                    d.name = "__uspapiLocator";
                    c.body.appendChild(d)
                } else a.setTimeout(b, 5)
        }
        var c = a.document;
        b()
    };

    function ii(a) {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    }

    function ji(a, b) {
        b = void 0 === b ? 500 : b;
        ei.call(this);
        this.h = a;
        this.i = null;
        this.m = {};
        this.F = 0;
        this.A = b;
        this.l = null
    }
    v(ji, ei);
    ji.prototype.j = function() {
        this.m = {};
        this.l && (hc(this.h, this.l), delete this.l);
        delete this.m;
        delete this.h;
        delete this.i;
        ei.prototype.j.call(this)
    };

    function ki(a) {
        return "function" === typeof a.h.__tcfapi || null != li(a)
    }
    ji.prototype.addEventListener = function(a) {
        function b(f, g) {
            clearTimeout(e);
            f ? (c = f, c.internalErrorState = ii(c), g && 0 === c.internalErrorState || (c.tcString = "tcunavailable", g || (c.internalErrorState = 3))) : (c.tcString = "tcunavailable", c.internalErrorState = 3);
            a(c)
        }
        var c = {},
            d = fc(function() {
                return a(c)
            }),
            e = 0; - 1 !== this.A && (e = setTimeout(function() {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, this.A));
        try {
            mi(this, "addEventListener", b)
        } catch (f) {
            c.tcString = "tcunavailable", c.internalErrorState = 3, e && (clearTimeout(e),
                e = 0), d()
        }
    };
    ji.prototype.removeEventListener = function(a) {
        a && a.listenerId && mi(this, "removeEventListener", null, a.listenerId)
    };

    function mi(a, b, c, d) {
        c || (c = function() {});
        if ("function" === typeof a.h.__tcfapi) a = a.h.__tcfapi, a(b, 2, c, d);
        else if (li(a)) {
            ni(a);
            var e = ++a.F;
            a.m[e] = c;
            a.i && (c = {}, a.i.postMessage((c.__tcfapiCall = {
                command: b,
                version: 2,
                callId: e,
                parameter: d
            }, c), "*"))
        } else c({}, !1)
    }

    function li(a) {
        if (a.i) return a.i;
        a.i = Lc(a.h, "__tcfapiLocator");
        return a.i
    }

    function ni(a) {
        a.l || (a.l = function(b) {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.m[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, gc(a.h, "message", a.l))
    };

    function oi() {
        this.id = "goog_" + ic++
    }
    new oi;
    new oi;
    new oi;
    new oi;
    new oi;
    new oi;
    new oi;
    new oi;
    new oi;

    function pi(a, b) {
        do {
            var c = vc(a, b);
            if (c && "fixed" == c.position) return !1
        } while (a = a.parentElement);
        return !0
    };

    function qi(a, b) {
        for (var c = ["width", "height"], d = 0; d < c.length; d++) {
            var e = "google_ad_" + c[d];
            if (!b.hasOwnProperty(e)) {
                var f = J(a[c[d]]);
                f = null === f ? null : Math.round(f);
                null != f && (b[e] = f)
            }
        }
    }

    function ri(a, b) {
        return !((Gc.test(b.google_ad_width) || Fc.test(a.style.width)) && (Gc.test(b.google_ad_height) || Fc.test(a.style.height)))
    }

    function si(a, b) {
        return (a = ti(a, b)) ? a.y : 0
    }

    function ti(a, b) {
        try {
            var c = b.document.documentElement.getBoundingClientRect(),
                d = a.getBoundingClientRect();
            return {
                x: d.left - c.left,
                y: d.top - c.top
            }
        } catch (e) {
            return null
        }
    }

    function ui(a) {
        var b = 0,
            c;
        for (c in wf) - 1 != a.indexOf(c) && (b |= wf[c]);
        return b
    }

    function vi(a, b, c, d, e) {
        if (a !== a.top) return sc(a) ? 3 : 16;
        if (!(488 > Mf(a))) return 4;
        if (!(a.innerHeight >= a.innerWidth)) return 5;
        var f = Mf(a);
        if (!f || (f - c) / f > d) a = 6;
        else {
            if (c = "true" != e.google_full_width_responsive) a: {
                c = Mf(a);
                for (b = b.parentElement; b; b = b.parentElement)
                    if ((d = vc(b, a)) && (e = J(d.width)) && !(e >= c) && "visible" != d.overflow) {
                        c = !0;
                        break a
                    }
                c = !1
            }
            a = c ? 7 : !0
        }
        return a
    }

    function wi(a, b, c, d) {
        var e = vi(b, c, a, .3, d);
        !0 !== e ? a = e : "true" == d.google_full_width_responsive || pi(c, b) ? (b = Mf(b), a = b - a, a = b && 0 <= a ? !0 : b ? -10 > a ? 11 : 0 > a ? 14 : 12 : 10) : a = 9;
        return a
    }

    function xi(a, b, c) {
        a = a.style;
        "rtl" == b ? a.marginRight = c : a.marginLeft = c
    }

    function yi(a, b) {
        if (3 == b.nodeType) return /\S/.test(b.data);
        if (1 == b.nodeType) {
            if (/^(script|style)$/i.test(b.nodeName)) return !1;
            try {
                var c = vc(b, a)
            } catch (d) {}
            return !c || "none" != c.display && !("absolute" == c.position && ("hidden" == c.visibility || "collapse" == c.visibility))
        }
        return !1
    }

    function zi(a, b, c) {
        a = ti(b, a);
        return "rtl" == c ? -a.x : a.x
    }

    function Ai(a, b) {
        var c;
        c = (c = b.parentElement) ? (c = vc(c, a)) ? c.direction : "" : "";
        if (c) {
            b.style.border = b.style.borderStyle = b.style.outline = b.style.outlineStyle = b.style.transition = "none";
            b.style.borderSpacing = b.style.padding = "0";
            xi(b, c, "0px");
            b.style.width = Mf(a) + "px";
            if (0 !== zi(a, b, c)) {
                xi(b, c, "0px");
                var d = zi(a, b, c);
                xi(b, c, -1 * d + "px");
                a = zi(a, b, c);
                0 !== a && a !== d && xi(b, c, d / (a - d) * d + "px")
            }
            b.style.zIndex = 30
        }
    };

    function Bi(a, b) {
        this.l = a;
        this.j = b
    }
    Bi.prototype.minWidth = function() {
        return this.l
    };
    Bi.prototype.height = function() {
        return this.j
    };
    Bi.prototype.h = function(a) {
        return 300 < a && 300 < this.j ? this.l : Math.min(1200, Math.round(a))
    };
    Bi.prototype.i = function() {};

    function Ci(a, b, c, d) {
        d = void 0 === d ? function(f) {
            return f
        } : d;
        var e;
        return a.style && a.style[c] && d(a.style[c]) || (e = vc(a, b)) && e[c] && d(e[c]) || null
    }

    function Di(a) {
        return function(b) {
            return b.minWidth() <= a
        }
    }

    function Ei(a, b, c, d) {
        var e = a && Fi(c, b),
            f = Gi(b, d);
        return function(g) {
            return !(e && g.height() >= f)
        }
    }

    function Hi(a) {
        return function(b) {
            return b.height() <= a
        }
    }

    function Fi(a, b) {
        return si(a, b) < Lf(b).clientHeight - 100
    }

    function Ii(a, b) {
        var c = Ci(b, a, "height", J);
        if (c) return c;
        var d = b.style.height;
        b.style.height = "inherit";
        c = Ci(b, a, "height", J);
        b.style.height = d;
        if (c) return c;
        c = Infinity;
        do(d = b.style && J(b.style.height)) && (c = Math.min(c, d)), (d = Ci(b, a, "maxHeight", J)) && (c = Math.min(c, d)); while ((b = b.parentElement) && "HTML" != b.tagName);
        return c
    }

    function Gi(a, b) {
        var c = 0 == dd(a);
        return b && c ? Math.max(250, 2 * Lf(a).clientHeight / 3) : 250
    };
    var R = {},
        Ji = (R.google_ad_channel = !0, R.google_ad_client = !0, R.google_ad_host = !0, R.google_ad_host_channel = !0, R.google_adtest = !0, R.google_tag_for_child_directed_treatment = !0, R.google_tag_for_under_age_of_consent = !0, R.google_tag_partner = !0, R.google_restrict_data_processing = !0, R.google_page_url = !0, R.google_debug_params = !0, R.google_adbreak_test = !0, R.google_ad_frequency_hint = !0, R.google_admob_interstitial_slot = !0, R.google_admob_rewarded_slot = !0, R.google_max_ad_content_rating = !0, R),
        Ki = RegExp("(^| )adsbygoogle($| )");

    function Li(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = jc(d.Cb);
            a[e] = d.value
        }
    };

    function Mi(a, b, c, d) {
        this.l = a;
        this.i = b;
        this.j = c;
        this.h = d
    }

    function Ni(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.l)
        } catch (g) {}
        if (!c.length) return [];
        b = Ya(c);
        b = Oi(a, b);
        "number" === typeof a.i && (c = a.i, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
        if ("number" === typeof a.j) {
            c = [];
            for (var d = 0; d < b.length; d++) {
                var e = Pi(b[d]),
                    f = a.j;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    Mi.prototype.toString = function() {
        return JSON.stringify({
            nativeQuery: this.l,
            occurrenceIndex: this.i,
            paragraphIndex: this.j,
            ignoreMode: this.h
        })
    };

    function Oi(a, b) {
        if (null == a.h) return b;
        switch (a.h) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.h);
        }
    }

    function Pi(a) {
        var b = [];
        od(a.getElementsByTagName("p"), function(c) {
            100 <= Qi(c) && b.push(c)
        });
        return b
    }

    function Qi(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        od(a.childNodes, function(c) {
            b += Qi(c)
        });
        return b
    }

    function Ri(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    };

    function Si(a) {
        if (!a) return null;
        var b = B(a, 7);
        if (B(a, 1) || a.getId() || 0 < ob(a, 4).length) {
            var c = a.getId();
            b = ob(a, 4);
            var d = B(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + Ri(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + Ri(b[c]);
            a = (b = e) ? new Mi(b, B(a, 2), B(a, 5), Ti(B(a, 6))) : null
        } else a = b ? new Mi(b, B(a, 2), B(a, 5), Ti(B(a, 6))) : null;
        return a
    }
    var Ui = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Ti(a) {
        return null == a ? a : Ui[a]
    }
    var Vi = {
        1: 0,
        2: 1,
        3: 2,
        4: 3
    };

    function Wi(a) {
        return a.google_ama_state = a.google_ama_state || {}
    }

    function Xi(a) {
        a = Wi(a);
        return a.optimization = a.optimization || {}
    };

    function Yi(a) {
        switch (B(a, 8)) {
            case 1:
            case 2:
                if (null == a) var b = null;
                else b = H(a, Ad, 1), null == b ? b = null : (a = B(a, 2), b = null == a ? null : new Cd({
                    Fa: [b],
                    Pa: a
                }));
                return null != b ? ud(b) : wd(Error("Missing dimension when creating placement id"));
            case 3:
                return wd(Error("Missing dimension when creating placement id"));
            default:
                return wd(Error("Invalid type: " + B(a, 8)))
        }
    };

    function T(a) {
        a = void 0 === a ? "" : a;
        var b = Error.call(this);
        this.message = b.message;
        "stack" in b && (this.stack = b.stack);
        this.name = "TagError";
        this.message = a ? "adsbygoogle.push() error: " + a : "";
        Error.captureStackTrace ? Error.captureStackTrace(this, T) : this.stack = Error().stack || ""
    }
    v(T, Error);
    var Ff, Zi, $h = new Xh;

    function $i(a) {
        null != a && (w.google_measure_js_timing = a);
        w.google_measure_js_timing || (a = $h, a.h = !1, a.events != a.i.google_js_reporting_queue && (Wh() && Ra(a.events, Yh), a.events.length = 0))
    }(function(a) {
        Ff = a || new Df;
        "number" !== typeof w.google_srt && (w.google_srt = Math.random());
        Ef();
        Zi = new Zh;
        Zi.Ta(!0);
        "complete" == w.document.readyState ? $i() : $h.h && gc(w, "load", function() {
            $i()
        })
    })();

    function aj(a, b, c) {
        return Zi.na(a, b, c)
    }

    function bj(a, b) {
        return Zi.Na(a, b, void 0, void 0)
    }

    function cj(a, b, c) {
        var d = N(Fh).h();
        !b.eid && d.length && (b.eid = d.toString());
        Gf(Ff, a, b, !0, c)
    }

    function dj(a) {
        return function(b) {
            null != b || (b = "unnamed rejection");
            Zi.H(a, b instanceof Error ? b : Error(b), void 0, void 0)
        }
    }

    function ej(a, b, c, d) {
        var e;
        Lh(b) ? e = b.msg || ai(b.error) : e = ai(b);
        return 0 == e.indexOf("TagError") ? (c = b instanceof Kh ? b.error : b, c.pbr || (c.pbr = !0, Zi.H(a, b, .1, d, "puberror")), !1) : Zi.H(a, b, c, d)
    };

    function fj(a) {
        a = void 0 === a ? window : a;
        a = a.googletag;
        return (null === a || void 0 === a ? 0 : a.apiReady) ? a : void 0
    };

    function gj(a) {
        var b = fj(a);
        return b ? Sa(Ta(b.pubads().getSlots(), function(c) {
            return a.document.getElementById(c.getSlotElementId())
        }), function(c) {
            return null != c
        }) : null
    }

    function hj(a, b) {
        return Ya(a.document.querySelectorAll(b))
    }

    function ij(a) {
        var b = [];
        a = u(a);
        for (var c = a.next(); !c.done; c = a.next()) {
            c = c.value;
            for (var d = !0, e = 0; e < b.length; e++) {
                var f = b[e];
                if (f.contains(c)) {
                    d = !1;
                    break
                }
                if (c.contains(f)) {
                    d = !1;
                    b[e] = c;
                    break
                }
            }
            d && b.push(c)
        }
        return b
    };

    function jj(a, b) {
        function c() {
            d.push({
                anchor: e.anchor,
                position: e.position
            });
            return e.anchor == b.anchor && e.position == b.position
        }
        for (var d = [], e = a; e;) {
            switch (e.position) {
                case 1:
                    if (c()) return d;
                    e.position = 2;
                case 2:
                    if (c()) return d;
                    if (e.anchor.firstChild) {
                        e = {
                            anchor: e.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else e.position = 3;
                case 3:
                    if (c()) return d;
                    e.position = 4;
                case 4:
                    if (c()) return d
            }
            for (; e && !e.anchor.nextSibling && e.anchor.parentNode != e.anchor.ownerDocument.body;) {
                e = {
                    anchor: e.anchor.parentNode,
                    position: 3
                };
                if (c()) return d;
                e.position = 4;
                if (c()) return d
            }
            e && e.anchor.nextSibling ? e = {
                anchor: e.anchor.nextSibling,
                position: 1
            } : e = null
        }
        return d
    };

    function kj(a, b) {
        this.i = a;
        this.h = b
    }

    function lj(a, b) {
        var c = new zd,
            d = new yd;
        b.forEach(function(e) {
            if (Db(e, Pd, 1, Sd)) {
                e = Db(e, Pd, 1, Sd);
                if (H(e, Nd, 1) && H(H(e, Nd, 1), Ad, 1) && H(e, Nd, 2) && H(H(e, Nd, 2), Ad, 1)) {
                    var f = mj(a, H(H(e, Nd, 1), Ad, 1)),
                        g = mj(a, H(H(e, Nd, 2), Ad, 1));
                    if (f && g)
                        for (f = u(jj({
                                anchor: f,
                                position: B(H(e, Nd, 1), 2)
                            }, {
                                anchor: g,
                                position: B(H(e, Nd, 2), 2)
                            })), g = f.next(); !g.done; g = f.next()) g = g.value, c.set(za(g.anchor), g.position)
                }
                H(e, Nd, 3) && H(H(e, Nd, 3), Ad, 1) && (f = mj(a, H(H(e, Nd, 3), Ad, 1))) && c.set(za(f), B(H(e, Nd, 3), 2))
            } else Db(e, Qd, 2, Sd) ? nj(a, Db(e, Qd, 2, Sd),
                c) : Db(e, Rd, 3, Sd) && oj(a, Db(e, Rd, 3, Sd), d)
        });
        return new kj(c, d)
    }

    function nj(a, b, c) {
        H(b, Ad, 1) && (a = pj(a, H(b, Ad, 1))) && a.forEach(function(d) {
            d = za(d);
            c.set(d, 1);
            c.set(d, 4);
            c.set(d, 2);
            c.set(d, 3)
        })
    }

    function oj(a, b, c) {
        H(b, Ad, 1) && (a = pj(a, H(b, Ad, 1))) && a.forEach(function(d) {
            c.add(za(d))
        })
    }

    function mj(a, b) {
        return (a = pj(a, b)) && 0 < a.length ? a[0] : null
    }

    function pj(a, b) {
        return (b = Si(b)) ? Ni(b, a) : null
    };

    function qj() {
        this.h = new p.Set
    }

    function rj(a) {
        a = sj(a);
        return a.has("all") || a.has("after")
    }

    function tj(a) {
        a = sj(a);
        return a.has("all") || a.has("before")
    }

    function uj(a, b, c) {
        switch (c) {
            case 2:
            case 3:
                break;
            case 1:
            case 4:
                b = b.parentElement;
                break;
            default:
                throw Error("Unknown RelativePosition: " + c);
        }
        for (c = []; b;) {
            if (vj(b)) return !0;
            if (a.h.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(function(d) {
            return a.h.add(d)
        });
        return !1
    }

    function vj(a) {
        var b = sj(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }

    function sj(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new p.Set(a.split("|")) : new p.Set
    };

    function wj(a, b) {
        if (!a) return !1;
        a = vc(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function xj(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function yj(a) {
        return !!a.nextSibling || !!a.parentNode && yj(a.parentNode)
    };

    function zj(a) {
        var b = {};
        a && ob(a, 6).forEach(function(c) {
            b[c] = !0
        });
        return b
    }

    function Aj(a, b, c, d, e) {
        this.h = a;
        this.F = b;
        this.j = c;
        this.m = e || null;
        this.u = (this.A = d) ? lj(a.document, I(d, Od, 5)) : lj(a.document, []);
        this.D = new qj;
        this.i = 0;
        this.l = !1
    }

    function Bj(a, b) {
        if (a.l) return !0;
        a.l = !0;
        var c = I(a.j, Ud, 1);
        a.i = 0;
        var d = zj(a.A);
        var e = a.h;
        try {
            var f = e.localStorage.getItem("google_ama_settings");
            var g = f ? mb(je, f ? JSON.parse(f) : null) : null
        } catch (S) {
            g = null
        }
        var h = null !== g && G(g, 2, !1);
        g = Wi(e);
        h && (g.eatf = !0, Wc(7, [!0, 0, !1]));
        var k = O(Ke) || O(Je);
        f = O(Je);
        if (k) {
            b: {
                var l = {
                        cb: !1
                    },
                    m = hj(e, ".google-auto-placed"),
                    q = hj(e, 'ins.adsbygoogle[data-anchor-shown="true"]'),
                    r = hj(e, "ins.adsbygoogle[data-ad-format=autorelaxed]");
                var y = (gj(e) || hj(e, "div[id^=div-gpt-ad]")).concat(hj(e,
                    "iframe[id^=google_ads_iframe]"));
                var F = hj(e, "div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"),
                    z = hj(e, "ins.adsbygoogle-ablated-ad-slot"),
                    E = hj(e, "div.googlepublisherpluginad");k = [].concat(hj(e, "iframe[id^=aswift_],iframe[id^=google_ads_frame]"), hj(e, "ins.adsbygoogle"));h = [];l = u([
                    [l.wb, m],
                    [l.cb, q],
                    [l.zb, r],
                    [l.xb, y],
                    [l.Ab, F],
                    [l.vb, z],
                    [l.yb, E]
                ]);
                for (m = l.next(); !m.done; m = l.next()) q = u(m.value),
                m = q.next().value,
                q = q.next().value,
                !1 === m ? h = h.concat(q) : k = k.concat(q);k = ij(k);l = ij(h);h = k.slice(0);k = u(l);
                for (l = k.next(); !l.done; l = k.next())
                    for (l = l.value, m = 0; m < h.length; m++)(l.contains(h[m]) || h[m].contains(l)) && h.splice(m, 1);e = Lf(e).clientHeight;
                for (k =
                    0; k < h.length; k++)
                    if (l = h[k].getBoundingClientRect(), !(0 === l.height && !f || l.top > e)) {
                        e = !0;
                        break b
                    }
                e = !1
            }
            g = e ? g.eatfAbg = !0 : !1
        }
        else g = h;
        if (g) return !0;
        g = new yd([2]);
        for (e = 0; e < c.length; e++) {
            f = a;
            k = c[e];
            h = e;
            l = b;
            if (!H(k, Gd, 4) || !g.contains(B(H(k, Gd, 4), 1)) || 1 !== B(k, 8) || k && null != B(k, 4) && d[B(H(k, Gd, 4), 2)]) f = null;
            else {
                f.i++;
                if (k = Cj(f, k, l, d)) l = Wi(f.h), l.numAutoAdsPlaced || (l.numAutoAdsPlaced = 0), null == l.placed && (l.placed = []), l.numAutoAdsPlaced++, l.placed.push({
                    index: h,
                    element: k.ga
                }), Wc(7, [!1, f.i, !0]);
                f = k
            }
            if (f) return !0
        }
        Wc(7, [!1, a.i, !1]);
        return !1
    }

    function Cj(a, b, c, d) {
        if (b && null != B(b, 4) && d[B(H(b, Gd, 4), 2)] || 1 != B(b, 8)) return null;
        d = H(b, Ad, 1);
        if (!d) return null;
        d = Si(d);
        if (!d) return null;
        d = Ni(d, a.h.document);
        if (0 == d.length) return null;
        d = d[0];
        var e = Vi[B(b, 2)];
        e = void 0 === e ? null : e;
        var f;
        if (!(f = null == e)) {
            a: {
                f = a.h;
                switch (e) {
                    case 0:
                        f = wj(xj(d), f);
                        break a;
                    case 3:
                        f = wj(d, f);
                        break a;
                    case 2:
                        var g = d.lastChild;
                        f = wj(g ? 1 == g.nodeType ? g : xj(g) : null, f);
                        break a
                }
                f = !1
            }
            if (c = !f && !(!c && 2 == e && !yj(d))) c = 1 == e || 2 == e ? d : d.parentNode,
            c = !(c && !ke(c) && 0 >= c.offsetWidth);f = !c
        }
        if (!(c =
                f)) {
            c = a.u;
            f = B(b, 2);
            g = za(d);
            g = c.i.h.get(g);
            if (!(g = g ? g.contains(f) : !1)) a: {
                if (c.h.contains(za(d))) switch (f) {
                    case 2:
                    case 3:
                        g = !0;
                        break a;
                    default:
                        g = !1;
                        break a
                }
                for (f = d.parentElement; f;) {
                    if (c.h.contains(za(f))) {
                        g = !0;
                        break a
                    }
                    f = f.parentElement
                }
                g = !1
            }
            c = g
        }
        if (!c && (c = O(Se))) {
            c = a.D;
            f = B(b, 2);
            a: switch (f) {
                case 1:
                    g = rj(d.previousElementSibling) || tj(d);
                    break a;
                case 4:
                    g = rj(d) || tj(d.nextElementSibling);
                    break a;
                case 2:
                    g = tj(d.firstElementChild);
                    break a;
                case 3:
                    g = rj(d.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " +
                        f);
            }
            c = g || uj(c, d, f)
        }
        if (c) return null;
        c = H(b, Td, 3);
        f = {};
        c && (f.Ua = B(c, 1), f.Ga = B(c, 2), f.ab = !!pb(c, 3));
        c = H(b, Gd, 4) && B(H(b, Gd, 4), 2) ? B(H(b, Gd, 4), 2) : null;
        c = Jd(c);
        g = null == B(b, 12) ? null : B(b, 12);
        g = null == g ? null : new Hd(null, {
            google_ml_rank: g
        });
        b = Dj(a, b);
        b = Id(a.m, c, g, b);
        c = a.h;
        a = a.F;
        var h = c.document,
            k = f.ab || !1;
        g = (new lc(h)).createElement("DIV");
        var l = g.style;
        l.width = "100%";
        l.height = "auto";
        l.clear = k ? "both" : "none";
        k = g.style;
        k.textAlign = "center";
        f.jb && Li(k, f.jb);
        h = (new lc(h)).createElement("INS");
        k = h.style;
        k.display =
            "block";
        k.margin = "auto";
        k.backgroundColor = "transparent";
        f.Ua && (k.marginTop = f.Ua);
        f.Ga && (k.marginBottom = f.Ga);
        f.Za && Li(k, f.Za);
        g.appendChild(h);
        f = {
            qa: g,
            ga: h
        };
        f.ga.setAttribute("data-ad-format", "auto");
        g = [];
        if (h = b && b.Ia) f.qa.className = h.join(" ");
        h = f.ga;
        h.className = "adsbygoogle";
        h.setAttribute("data-ad-client", a);
        g.length && h.setAttribute("data-ad-channel", g.join("+"));
        a: {
            try {
                var m = f.qa;
                var q = void 0 === q ? 0 : q;
                if (O(Fe)) {
                    q = void 0 === q ? 0 : q;
                    var r = tf(d, e, q);
                    if (r.init) {
                        var y = r.init;
                        for (d = y; d = r.ia(d);) y = d;
                        var F = {
                            anchor: y,
                            position: r.ma
                        }
                    } else F = {
                        anchor: d,
                        position: e
                    };
                    m["google-ama-order-assurance"] = q;
                    le(m, F.anchor, F.position)
                } else le(m, d, e);
                b: {
                    var z = f.ga;z.dataset.adsbygoogleStatus = "reserved";z.className += " adsbygoogle-noablate";m = {
                        element: z
                    };
                    var E = b && b.Oa;
                    if (z.hasAttribute("data-pub-vars")) {
                        try {
                            E = JSON.parse(z.getAttribute("data-pub-vars"))
                        } catch (S) {
                            break b
                        }
                        z.removeAttribute("data-pub-vars")
                    }
                    E && (m.params = E);
                    (c.adsbygoogle = c.adsbygoogle || []).push(m)
                }
            } catch (S) {
                (z = f.qa) && z.parentNode && (E = z.parentNode, E.removeChild(z),
                    ke(E) && (E.style.display = E.getAttribute("data-init-display") || "none"));
                z = !1;
                break a
            }
            z = !0
        }
        return z ? f : null
    }

    function Dj(a, b) {
        return sd(vd(Yi(b).map(Kd), function(c) {
            Wi(a.h).exception = c
        }))
    };

    function Ej(a) {
        if (O(Ee)) var b = null;
        else try {
            b = a.getItem("google_ama_config")
        } catch (d) {
            b = null
        }
        try {
            var c = b ? mb(ae, b ? JSON.parse(b) : null) : null
        } catch (d) {
            c = null
        }
        return c
    };

    function Fj(a) {
        A.call(this, a)
    }
    v(Fj, A);

    function Gj(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        var c = b;
        return c ? xd(function() {
            return mb(Fj, c ? JSON.parse(c) : null)
        }) : ud(null)
    };

    function Hj() {
        this.S = {}
    }

    function Ij() {
        if (Jj) return Jj;
        var a = Yc() || gd(),
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Jj = b : a.google_persistent_state_async = Jj = new Hj
    }

    function Kj(a) {
        return Lj[a] || "google_ps_" + a
    }

    function Mj(a, b, c) {
        b = Kj(b);
        a = a.S;
        var d = a[b];
        return void 0 === d ? a[b] = c : d
    }
    var Jj = null,
        Nj = {},
        Lj = (Nj[8] = "google_prev_ad_formats_by_region", Nj[9] = "google_prev_ad_slotnames_by_region", Nj);

    function Oj(a) {
        A.call(this, a)
    }
    v(Oj, A);

    function Pj(a) {
        var b = new Oj;
        return C(b, 5, a)
    };

    function Qj(a) {
        var b = a.G,
            c = a.sa,
            d = a.Ha;
        a = Rj({
            G: b,
            Y: a.Y,
            ja: void 0 === a.ja ? !1 : a.ja,
            ka: void 0 === a.ka ? !1 : a.ka
        });
        null != a.h || "tcunav" != a.i.message ? d(a) : Sj(b, c).then(function(e) {
            return e.map(Tj)
        }).then(function(e) {
            return e.map(function(f) {
                return Uj(b, f)
            })
        }).then(d)
    }

    function Rj(a) {
        var b = a.G,
            c = a.Y,
            d = void 0 === a.ja ? !1 : a.ja;
        if (!(a = !(void 0 === a.ka ? 0 : a.ka) && ki(new ji(b)))) {
            if (d = !d) {
                if (c) {
                    c = Gj(b);
                    if (null == c.h) Zi.H(806, c.i, void 0, void 0), c = !1;
                    else if ((c = c.h.value) && null != B(c, 1)) b: switch (c = B(c, 1), c) {
                        case 1:
                            c = !0;
                            break b;
                        default:
                            throw Error("Unhandled AutoGdprFeatureStatus: " + c);
                    } else c = !1;
                    c = !c
                }
                d = c
            }
            a = d
        }
        if (!a) return Uj(b, Pj(!0));
        c = Ij();
        return (c = Mj(c, 24, void 0)) ? Uj(b, Tj(c)) : wd(Error("tcunav"))
    }

    function Sj(a, b) {
        return p.Promise.race([Vj(), Wj(a, b)])
    }

    function Vj() {
        return (new p.Promise(function(a) {
            var b = Ij();
            a = {
                resolve: a
            };
            var c = Mj(b, 25, []);
            c.push(a);
            b.S[Kj(25)] = c
        })).then(Xj)
    }

    function Wj(a, b) {
        return new p.Promise(function(c) {
            a.setTimeout(c, b, wd(Error("tcto")))
        })
    }

    function Xj(a) {
        return a ? ud(a) : wd(Error("tcnull"))
    }

    function Tj(a) {
        var b = void 0 === b ? !1 : b;
        if (!1 === a.gdprApplies) var c = !0;
        else void 0 === a.internalErrorState && (a.internalErrorState = ii(a)), c = "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1;
        if (c)
            if (!1 === a.gdprApplies || "tcunavailable" === a.tcString || void 0 === a.gdprApplies && !b || "string" !== typeof a.tcString || !a.tcString.length) a = !0;
            else {
                var d = void 0 === d ? "755" : d;
                b: {
                    if (a.publisher && a.publisher.restrictions && (b = a.publisher.restrictions["1"],
                            void 0 !== b)) {
                        b = b[void 0 === d ? "755" : d];
                        break b
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (d = !(!b || !b[void 0 === d ? "755" : d])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (d && (a = a.purpose.consents, d = !(!a || !a["1"])), a = d)) : a = !0
            }
        else a = !1;
        return Pj(a)
    }

    function Uj(a, b) {
        a: {
            a = void 0 === a ? window : a;
            if (pb(b, 5)) try {
                var c = a.localStorage;
                break a
            } catch (d) {}
            c = null
        }
        return (b = c) ? ud(b) : wd(Error("unav"))
    };

    function Yj(a) {
        A.call(this, a)
    }
    v(Yj, A);

    function Zj(a) {
        A.call(this, a, -1, ak)
    }
    v(Zj, A);
    var ak = [1, 2];

    function bk(a) {
        this.exception = a
    }

    function ck(a, b, c) {
        this.j = a;
        this.h = b;
        this.i = c
    }
    ck.prototype.start = function() {
        this.l()
    };
    ck.prototype.l = function() {
        try {
            switch (this.j.document.readyState) {
                case "complete":
                case "interactive":
                    Bj(this.h, !0);
                    dk(this);
                    break;
                default:
                    Bj(this.h, !1) ? dk(this) : this.j.setTimeout(Ea(this.l, this), 100)
            }
        } catch (a) {
            dk(this, a)
        }
    };

    function dk(a, b) {
        try {
            var c = a.i,
                d = c.resolve,
                e = a.h;
            Wi(e.h);
            I(e.j, Ud, 1);
            d.call(c, new bk(b))
        } catch (f) {
            a.i.reject(f)
        }
    };

    function ek(a) {
        A.call(this, a, -1, fk)
    }
    v(ek, A);
    var fk = [6];

    function gk(a) {
        A.call(this, a, -1, hk)
    }
    v(gk, A);

    function ik(a) {
        A.call(this, a)
    }
    v(ik, A);

    function jk(a) {
        A.call(this, a)
    }
    v(jk, A);
    var hk = [7];

    function kk(a) {
        a = (a = (new gi(a)).get("FCCDCF", "")) ? a : null;
        try {
            return a ? mb(gk, a ? JSON.parse(a) : null) : null
        } catch (b) {
            return null
        }
    };

    function lk(a) {
        this.h = a;
        this.i = a.document;
        this.j = (a = (a = kk(this.i)) ? H(a, jk, 5) || null : null) ? B(a, 2) : null;
        (a = kk(this.i)) && H(a, ik, 4);
        (a = kk(this.i)) && H(a, ik, 4)
    }

    function mk() {
        var a = window;
        a.__uspapi || a.frames.__uspapiLocator || (a = new lk(a), nk(a))
    }

    function nk(a) {
        !a.j || a.h.__uspapi || a.h.frames.__uspapiLocator || (a.h.__uspapiManager = "fc", hi(a.h), Ga(function() {
            return a.l.apply(a, la(sa.apply(0, arguments)))
        }))
    }
    lk.prototype.l = function(a, b, c) {
        "function" === typeof c && "getUSPData" === a && c({
            version: 1,
            uspString: this.j
        }, !0)
    };

    function ok(a) {
        A.call(this, a)
    }
    v(ok, A);

    function pk(a) {
        A.call(this, a)
    }
    v(pk, A);
    var qk = [4, 5];

    function rk(a) {
        var b = /[a-zA-Z0-9._~-]/,
            c = /%[89a-zA-Z]./;
        return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
            if (!d.match(c)) {
                var e = decodeURIComponent(d);
                if (e.match(b)) return e
            }
            return d.toUpperCase()
        })
    }

    function sk(a) {
        for (var b = "", c = /[/%?&=]/, d = 0; d < a.length; ++d) {
            var e = a[d];
            b = e.match(c) ? b + e : b + encodeURIComponent(e)
        }
        return b
    };

    function tk(a, b) {
        a = sk(rk(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
        var c = Bc(a),
            d = uk(a);
        return t(b, "find").call(b, function(e) {
            var f = null != B(e, 7) ? B(H(e, fe, 7), 1) : B(e, 1);
            e = null != B(e, 7) ? B(H(e, fe, 7), 2) : 2;
            if ("number" !== typeof f) return !1;
            switch (e) {
                case 1:
                    return f == c;
                case 2:
                    return d[f] || !1
            }
            return !1
        }) || null
    }

    function uk(a) {
        for (var b = {};;) {
            b[Bc(a)] = !0;
            if (!a) return b;
            a = a.substring(0, a.lastIndexOf("/"))
        }
    };
    var vk = {},
        wk = (vk.google_ad_channel = !0, vk.google_ad_host = !0, vk);

    function xk(a, b) {
        a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
        cj("ama", b, .01)
    }

    function yk(a) {
        var b = {};
        Ac(wk, function(c, d) {
            d in a && (b[d] = a[d])
        });
        return b
    };

    function zk(a) {
        a = H(a, ce, 3);
        return !a || B(a, 1) <= Date.now() ? !1 : !0
    }

    function Ak(a) {
        return (a = Ej(a)) ? zk(a) ? a : null : null
    }

    function Bk(a, b) {
        try {
            b.removeItem("google_ama_config")
        } catch (c) {
            xk(a, {
                lserr: 1
            })
        }
    };

    function Ck(a) {
        A.call(this, a)
    }
    v(Ck, A);

    function Dk(a) {
        A.call(this, a, -1, Ek)
    }
    v(Dk, A);
    var Ek = [1];

    function Fk(a) {
        A.call(this, a, -1, Gk)
    }
    v(Fk, A);
    Fk.prototype.getId = function() {
        return D(this, 1, 0)
    };
    Fk.prototype.U = function() {
        return D(this, 7, 0)
    };
    var Gk = [2];

    function Hk(a) {
        A.call(this, a, -1, Ik)
    }
    v(Hk, A);
    Hk.prototype.U = function() {
        return D(this, 5, 0)
    };
    var Ik = [2];

    function Jk(a) {
        A.call(this, a, -1, Kk)
    }
    v(Jk, A);

    function Lk(a) {
        A.call(this, a, -1, Mk)
    }
    v(Lk, A);
    Lk.prototype.U = function() {
        return D(this, 1, 0)
    };

    function Nk(a) {
        A.call(this, a)
    }
    v(Nk, A);
    var Kk = [1, 4, 2, 3],
        Mk = [2];

    function Ok(a) {
        A.call(this, a, -1, Pk)
    }
    v(Ok, A);

    function Qk(a) {
        return Db(a, Dk, 14, Rk)
    }
    var Pk = [19],
        Rk = [13, 14];
    var Sk = void 0;

    function Tk() {
        Of(Sk, Nf);
        return Sk
    }

    function Uk(a) {
        Of(Sk, Qf);
        Sk = a
    };

    function Vk(a, b, c, d) {
        c = void 0 === c ? "" : c;
        return 1 === b && Wk(c, void 0 === d ? null : d) ? !0 : Xk(a, c, function(e) {
            return Ua(I(e, Gb, 2), function(f) {
                return B(f, 1) === b
            })
        })
    }

    function Wk(a, b) {
        return b ? 13 === vb(b, Rk) ? G(Db(b, Ck, 13, Rk), 1) : 14 === vb(b, Rk) && "" !== a && 1 === ob(Qk(b), 1).length && ob(Qk(b), 1)[0] === a ? G(H(Qk(b), Ck, 2), 1) : !1 : !1
    }

    function Yk(a, b) {
        b = D(b, 18, 0); - 1 !== b && (a.tmod = b)
    }

    function Zk(a) {
        var b = void 0 === b ? "" : b;
        var c = sc(K) || K;
        return $k(c, a) ? !0 : Xk(K, b, function(d) {
            return Ua(ob(d, 3), function(e) {
                return e === a
            })
        })
    }

    function al(a) {
        return Xk(w, void 0 === a ? "" : a, function() {
            return !0
        })
    }

    function $k(a, b) {
        a = (a = (a = a.location && a.location.hash) && a.match(/forced_clientside_labs=([\d,]+)/)) && a[1];
        return !!a && Xa(a.split(","), b.toString())
    }

    function Xk(a, b, c) {
        a = sc(a) || a;
        var d = bl(a);
        b && (b = id(String(b)));
        return Lb(d, function(e, f) {
            return Object.prototype.hasOwnProperty.call(d, f) && (!b || b === f) && c(e)
        })
    }

    function bl(a) {
        a = cl(a);
        var b = {};
        Ac(a, function(c, d) {
            try {
                var e = new Eb(c);
                b[d] = e
            } catch (f) {}
        });
        return b
    }

    function cl(a) {
        return O(oe) ? (a = Rj({
            G: a,
            Y: Tk()
        }), null != a.h ? (dl("ok"), a = el(a.h.value)) : (dl(a.i.message), a = {}), a) : el(a.localStorage)
    }

    function el(a) {
        try {
            var b = a.getItem("google_adsense_settings");
            if (!b) return {};
            var c = JSON.parse(b);
            return c !== Object(c) ? {} : Kb(c, function(d, e) {
                return Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d)
            })
        } catch (d) {
            return {}
        }
    }

    function dl(a) {
        O(ne) && cj("abg_adsensesettings_lserr", {
            s: a,
            g: O(oe),
            c: Tk(),
            r: .01
        }, .01)
    };

    function fl(a, b, c, d) {
        gl(new hl(a, b, c, d))
    }

    function hl(a, b, c, d) {
        this.G = a;
        this.i = b;
        this.j = c;
        this.h = d
    }

    function gl(a) {
        vd(td(Rj({
            G: a.G,
            Y: G(a.i, 6)
        }), function(b) {
            il(a, b, !0)
        }), function() {
            jl(a)
        })
    }

    function il(a, b, c) {
        vd(td(kl(b), function(d) {
            ll("ok");
            a.h(d)
        }), function() {
            Bk(a.G, b);
            c ? jl(a) : a.h(null)
        })
    }

    function jl(a) {
        vd(td(ml(a), a.h), function() {
            nl(a)
        })
    }

    function nl(a) {
        Qj({
            G: a.G,
            Y: G(a.i, 6),
            sa: 50,
            Ha: function(b) {
                ol(a, b)
            }
        })
    }

    function kl(a) {
        return (a = Ak(a)) ? ud(a) : wd(Error("invlocst"))
    }

    function ml(a) {
        a: {
            var b = a.G;
            var c = a.j;a = a.i;
            if (13 === vb(a, Rk)) b = H(H(Db(a, Ck, 13, Rk), Yj, 2), Zj, 2),
            b = 0 < I(b, Ud, 1).length ? b : null;
            else {
                if (14 === vb(a, Rk)) {
                    var d = ob(Qk(a), 1),
                        e = H(H(H(Qk(a), Ck, 2), Yj, 2), Zj, 2);
                    if (1 === d.length && d[0] === c && 0 < I(e, Ud, 1).length && Bb(a, 17) === b.location.host) {
                        b = e;
                        break a
                    }
                }
                b = null
            }
        }
        b ? (c = new ae, a = I(b, Ud, 1), c = xb(c, 1, a), b = I(b, de, 2), b = xb(c, 7, b), b = ud(b)) : b = wd(Error("invtag"));
        return b
    }

    function ol(a, b) {
        vd(td(b, function(c) {
            il(a, c, !1)
        }), function(c) {
            ll(c.message);
            a.h(null)
        })
    }

    function ll(a) {
        cj("abg::amalserr", {
            status: a,
            guarding: "true",
            timeout: 50,
            rate: .01
        }, .01)
    };

    function pl(a) {
        xk(a, {
            atf: 1
        })
    }

    function ql(a, b) {
        (a.google_ama_state = a.google_ama_state || {}).exception = b;
        xk(a, {
            atf: 0
        })
    };

    function U(a) {
        a.google_ad_modifications || (a.google_ad_modifications = {});
        return a.google_ad_modifications
    }

    function rl(a) {
        a = U(a);
        var b = a.space_collapsing || "none";
        return a.remove_ads_by_default ? {
            Ea: !0,
            rb: b,
            pa: a.ablation_viewport_offset
        } : null
    }

    function sl(a, b) {
        a = U(a);
        a.remove_ads_by_default = !0;
        a.space_collapsing = "slot";
        a.ablation_viewport_offset = b
    }

    function tl(a) {
        U(K).allow_second_reactive_tag = a
    }

    function ul() {
        var a = U(window);
        a.afg_slotcar_vars || (a.afg_slotcar_vars = {});
        return a.afg_slotcar_vars
    };

    function vl(a, b) {
        if (!a) return !1;
        a = a.hash;
        if (!a || !a.indexOf) return !1;
        if (-1 != a.indexOf(b)) return !0;
        b = wl(b);
        return "go" != b && -1 != a.indexOf(b) ? !0 : !1
    }

    function wl(a) {
        var b = "";
        Ac(a.split("_"), function(c) {
            b += c.substr(0, 2)
        });
        return b
    };
    $a || !x("Safari") || Oa();

    function xl() {
        var a = new fi;
        return {
            promise: a.promise,
            resolve: a.resolve
        }
    };

    function yl(a) {
        a = void 0 === a ? function() {} : a;
        w.google_llp || (w.google_llp = {});
        var b = w.google_llp,
            c = b[7];
        if (c) return c;
        c = xl();
        b[7] = c;
        a();
        return c
    }

    function zl(a) {
        return yl(function() {
            tc(w.document, a)
        }).promise
    };

    function Al(a) {
        var b = {};
        return {
            enable_page_level_ads: (b.pltais = !0, b),
            google_ad_client: a
        }
    };

    function Bl(a) {
        if (w.google_apltlad || w !== w.top || !a.google_ad_client) return null;
        w.google_apltlad = !0;
        var b = Al(a.google_ad_client),
            c = b.enable_page_level_ads;
        Ac(a, function(d, e) {
            Ji[e] && "google_ad_client" !== e && (c[e] = d)
        });
        c.google_pgb_reactive = 7;
        if ("google_ad_section" in a || "google_ad_region" in a) c.google_ad_section = a.google_ad_section || a.google_ad_region;
        return b
    }

    function Cl(a) {
        return ya(a.enable_page_level_ads) && 7 === a.enable_page_level_ads.google_pgb_reactive
    };

    function Dl(a, b) {
        this.h = w;
        this.i = a;
        this.j = b
    }

    function El(a) {
        O(df) ? fl(a.h, a.j, a.i.google_ad_client || "", function(b) {
            var c = a.h,
                d = a.i;
            U(K).ama_ran_on_page || b && Fl(c, d, b)
        }) : Qj({
            G: a.h,
            Y: G(a.j, 6),
            sa: 50,
            Ha: function(b) {
                return Gl(a, b)
            }
        })
    }

    function Gl(a, b) {
        vd(td(b, function(c) {
            Hl("ok");
            var d = a.h,
                e = a.i;
            if (!U(K).ama_ran_on_page) {
                var f = Ak(c);
                f ? Fl(d, e, f) : Bk(d, c)
            }
        }), function(c) {
            return Hl(c.message)
        })
    }

    function Hl(a) {
        cj("abg::amalserr", {
            status: a,
            guarding: !0,
            timeout: 50,
            rate: .01
        }, .01)
    }

    function Fl(a, b, c) {
        if (null != B(c, 24)) {
            var d = Xi(a);
            d.availableAbg = !0;
            var e, f;
            d.ablationFromStorage = !!(null == (e = H(c, Wd, 24)) ? 0 : null == (f = H(e, Yd, 3)) ? 0 : Db(f, Zd, 2, $d))
        }
        if (Cl(b) && (d = tk(a, I(c, de, 7)), !d || !pb(d, 8))) return;
        U(K).ama_ran_on_page = !0;
        var g;
        if (null == (g = H(c, ie, 15)) ? 0 : pb(g, 23)) U(a).enable_overlap_observer = !0;
        if ((g = H(c, ge, 13)) && 1 === B(g, 1)) {
            var h = 0,
                k = H(g, he, 6);
            k && B(k, 3) && (h = B(k, 3) || 0);
            sl(a, h)
        } else if (null == (h = H(c, Wd, 24)) ? 0 : null == (k = H(h, Yd, 3)) ? 0 : Db(k, Zd, 2, $d)) Xi(a).ablatingThisPageview = !0, sl(a, 1);
        Wc(3, [c.toJSON()]);
        var l = b.google_ad_client || "";
        b = yk(ya(b.enable_page_level_ads) ? b.enable_page_level_ads : {});
        var m = Id(Md, new Hd(null, b));
        aj(782, function() {
            var q = m;
            try {
                var r = tk(a, I(c, de, 7)),
                    y;
                if (y = r) a: {
                    var F = ob(r, 2);
                    if (F)
                        for (var z = 0; z < F.length; z++)
                            if (1 == F[z]) {
                                y = !0;
                                break a
                            }
                    y = !1
                }
                if (y) {
                    if (B(r, 4)) {
                        y = {};
                        var E = new Hd(null, (y.google_package = B(r, 4), y));
                        q = Id(q, E)
                    }
                    var S = new Aj(a, l, c, r, q),
                        ub = new jd;
                    (new ck(a, S, ub)).start();
                    ub.i.then(Fa(pl, a), Fa(ql, a))
                }
            } catch (Kc) {
                xk(a, {
                    atf: -1
                })
            }
        })
    };

    function Il(a, b) {
        return a instanceof HTMLScriptElement && b.test(a.src) ? 0 : 1
    }

    function Jl(a) {
        var b = K.document;
        if (b.currentScript) return Il(b.currentScript, a);
        b = u(b.scripts);
        for (var c = b.next(); !c.done; c = b.next())
            if (0 === Il(c.value, a)) return 0;
        return 1
    };

    function Kl(a, b) {
        var c = {},
            d = {},
            e = {},
            f = {};
        return f[Wf] = (c[55] = function() {
            return 0 === a
        }, c[23] = function(g) {
            return Vk(K, Number(g))
        }, c[24] = function(g) {
            return Zk(Number(g))
        }, c[61] = function() {
            return G(b, 6)
        }, c[63] = function() {
            return G(b, 6) || ".google.ch" === Bb(b, 8)
        }, c), f[Xf] = (d[7] = function(g) {
            try {
                var h = window.localStorage
            } catch (l) {
                h = null
            }
            g = Number(g);
            g = void 0 === g ? 0 : g;
            g = 0 !== g ? "google_experiment_mod" + g : "google_experiment_mod";
            var k = Dc(h, g);
            h = null === k ? Ec(h, g) : k;
            return null !== h && void 0 !== h ? h : void 0
        }, d), f[Yf] = (e[6] =
            function() {
                return Bb(b, 15)
            }, e), f
    };

    function Ll(a) {
        a = void 0 === a ? w : a;
        return a.ggeac || (a.ggeac = {})
    };

    function Ml(a, b) {
        try {
            var c = a.split(".");
            a = w;
            for (var d = 0, e; null != a && d < c.length; d++) e = a, a = a[c[d]], "function" === typeof a && (a = e[c[d]]());
            var f = a;
            if (typeof f === b) return f
        } catch (g) {}
    }

    function Nl() {
        var a = {};
        this[Wf] = (a[8] = function(b) {
            try {
                return null != wa(b)
            } catch (c) {}
        }, a[9] = function(b) {
            try {
                var c = wa(b)
            } catch (d) {
                return
            }
            if (b = "function" === typeof c) c = c && c.toString && c.toString(), b = "string" === typeof c && -1 != c.indexOf("[native code]");
            return b
        }, a[10] = function() {
            return window == window.top
        }, a[6] = function(b) {
            return Xa(N(Fh).h(), parseInt(b, 10))
        }, a[27] = function(b) {
            b = Ml(b, "boolean");
            return void 0 !== b ? b : void 0
        }, a[60] = function(b) {
            try {
                return !!w.document.querySelector(b)
            } catch (c) {}
        }, a);
        a = {};
        this[Xf] =
            (a[3] = function() {
                return Mc()
            }, a[6] = function(b) {
                b = Ml(b, "number");
                return void 0 !== b ? b : void 0
            }, a[11] = function(b) {
                b = void 0 === b ? "" : b;
                var c = w;
                b = void 0 === b ? "" : b;
                c = void 0 === c ? window : c;
                b = (c = (c = c.location.href.match(oc)[3] || null) ? decodeURI(c) : c) ? Bc(c + b) : null;
                return null == b ? void 0 : b % 1E3
            }, a);
        a = {};
        this[Yf] = (a[2] = function() {
            return window.location.href
        }, a[3] = function() {
            try {
                return window.top.location.hash
            } catch (b) {
                return ""
            }
        }, a[4] = function(b) {
            b = Ml(b, "string");
            return void 0 !== b ? b : void 0
        }, a)
    };
    var Ol = [12, 13, 20];

    function Pl() {}
    Pl.prototype.init = function(a, b, c, d) {
        var e = this;
        d = void 0 === d ? {} : d;
        var f = void 0 === d.Ja ? !1 : d.Ja,
            g = void 0 === d.ib ? {} : d.ib;
        d = void 0 === d.kb ? [] : d.kb;
        this.l = a;
        this.u = {};
        this.D = f;
        this.m = g;
        a = {};
        this.i = (a[b] = [], a[4] = [], a);
        this.j = {};
        (b = Qh()) && Ra(b.split(",") || [], function(h) {
            (h = parseInt(h, 10)) && (e.j[h] = !0)
        });
        Ra(d, function(h) {
            e.j[h] = !0
        });
        this.h = c;
        return this
    };

    function Ql(a, b, c) {
        var d = [],
            e = Rl(a.l, b),
            f;
        if (f = 9 !== b) a.u[b] ? f = !0 : (a.u[b] = !0, f = !1);
        if (f) {
            var g;
            null == (g = a.h) || Kg(g, b, c, d, [], 4);
            return d
        }
        if (!e.length) {
            var h;
            null == (h = a.h) || Kg(h, b, c, d, [], 3);
            return d
        }
        var k = Xa(Ol, b),
            l = [];
        Ra(e, function(q) {
            var r = new zg;
            if (q = Sl(a, q, c, r)) 0 !== vb(r, Ag) && l.push(r), r = q.getId(), d.push(r), Tl(a, r, k ? 4 : c), (q = I(q, gg, 2)) && (k ? fh(q, hh(), a.h, r) : fh(q, [c], a.h, r))
        });
        var m;
        null == (m = a.h) || Kg(m, b, c, d, l, 1);
        return d
    }

    function Tl(a, b, c) {
        a.i[c] || (a.i[c] = []);
        a = a.i[c];
        Xa(a, b) || a.push(b)
    }

    function Ul(a, b) {
        a.l.push.apply(a.l, la(Sa(Ta(b, function(c) {
            return new Lk(c)
        }), function(c) {
            return !Xa(Ol, c.U())
        })))
    }

    function Sl(a, b, c, d) {
        var e = N(Rg).h;
        if (!cg(H(b, Rf, 3), e)) return null;
        var f = I(b, Fk, 2),
            g = D(b, 6, 0);
        if (g) {
            tb(d, 1, Ag, g);
            f = e[Xf];
            switch (c) {
                case 2:
                    var h = f[8];
                    break;
                case 1:
                    h = f[7]
            }
            c = void 0;
            if (h) try {
                c = h(g), sb(d, 3, c)
            } catch (k) {}
            return (b = Vl(b, c)) ? Wl(a, [b], 1) : null
        }
        if (g = D(b, 10, 0)) {
            tb(d, 2, Ag, g);
            h = null;
            switch (c) {
                case 1:
                    h = e[Xf][9];
                    break;
                case 2:
                    h = e[Xf][10];
                    break;
                default:
                    return null
            }
            c = h ? h(String(g)) : void 0;
            if (void 0 === c && 1 === D(b, 11, 0)) return null;
            void 0 !== c && sb(d, 3, c);
            return (b = Vl(b, c)) ? Wl(a, [b], 1) : null
        }
        d = e ? Sa(f, function(k) {
            return cg(H(k,
                Rf, 3), e)
        }) : f;
        if (!d.length) return null;
        c = d.length * D(b, 1, 0);
        return (b = D(b, 4, 0)) ? Xl(a, b, c, d) : Wl(a, d, c / 1E3)
    }

    function Xl(a, b, c, d) {
        var e = null != a.m[b] ? a.m[b] : 1E3;
        if (0 >= e) return null;
        d = Wl(a, d, c / e);
        a.m[b] = d ? 0 : e - c;
        return d
    }

    function Wl(a, b, c) {
        var d = a.j,
            e = Va(b, function(f) {
                return !!d[f.getId()]
            });
        return e ? e : a.D ? null : wc(b, c)
    }

    function Yl(a, b) {
        Ah(kh, function(c) {
            a.j[c] = !0
        }, b);
        Ah(nh, function(c, d) {
            return Ql(a, c, d)
        }, b);
        Ah(oh, function(c) {
            return (a.i[c] || []).concat(a.i[4])
        }, b);
        Ah(xh, function(c) {
            return Ul(a, c)
        }, b);
        Ah(lh, function(c, d) {
            return Tl(a, c, d)
        }, b)
    }

    function Rl(a, b) {
        return (a = Va(a, function(c) {
            return c.U() == b
        })) && I(a, Hk, 2) || []
    }

    function Vl(a, b) {
        var c = I(a, Fk, 2),
            d = c.length,
            e = D(a, 8, 0);
        a = d * D(a, 1, 0) - 1;
        b = void 0 !== b ? b : Math.floor(1E3 * zc());
        d = (b - e) % d;
        if (b < e || b - e - d >= a) return null;
        c = c[d];
        e = N(Rg).h;
        return !c || e && !cg(H(c, Rf, 3), e) ? null : c
    };

    function Zl() {
        this.h = function() {}
    }

    function $l(a) {
        N(Zl).h(a)
    };
    var am, bm, cm, dm, em, fm;

    function gm(a, b, c, d) {
        var e = 1;
        d = void 0 === d ? Ll() : d;
        e = void 0 === e ? 0 : e;
        var f = void 0 === f ? new Jg(null != (dm = null == (am = H(a, Nk, 5)) ? void 0 : D(am, 2, 0)) ? dm : 0, null != (em = null == (bm = H(a, Nk, 5)) ? void 0 : D(bm, 4, 0)) ? em : 0, null != (fm = null == (cm = H(a, Nk, 5)) ? void 0 : G(cm, 3)) ? fm : !1) : f;
        d.hasOwnProperty("init-done") ? (Bh(xh, d)(Ta(I(a, Lk, 2), function(g) {
            return g.toJSON()
        })), Bh(yh, d)(Ta(I(a, gg, 1), function(g) {
            return g.toJSON()
        }), e), b && Bh(zh, d)(b), hm(d, e)) : (Yl(N(Pl).init(I(a, Lk, 2), e, f, c), d), Ch(d), Dh(d), Eh(d), hm(d, e), fh(I(a, gg, 1), [e], f,
            void 0, !0), Tg = Tg || !(!c || !c.fb), $l(N(Nl)), b && $l(b))
    }

    function hm(a, b) {
        a = void 0 === a ? Ll() : a;
        b = void 0 === b ? 0 : b;
        var c = a,
            d = b;
        d = void 0 === d ? 0 : d;
        Gh(N(Fh), c, d);
        im(a, b);
        N(Zl).h = Bh(zh, a);
        N(rf).m()
    }

    function im(a, b) {
        var c = N(rf);
        c.i = function(d, e) {
            return Bh(qh, a, function() {
                return !1
            })(d, e, b)
        };
        c.j = function(d, e) {
            return Bh(rh, a, function() {
                return 0
            })(d, e, b)
        };
        c.l = function(d, e) {
            return Bh(sh, a, function() {
                return ""
            })(d, e, b)
        };
        c.h = function(d, e) {
            return Bh(th, a, function() {
                return []
            })(d, e, b)
        };
        c.m = function() {
            Bh(mh, a)(b)
        }
    };

    function jm(a, b, c) {
        var d = U(a);
        if (d.plle) hm(Ll(a), 1);
        else {
            d.plle = !0;
            try {
                var e = a.localStorage
            } catch (f) {
                e = null
            }
            d = e;
            null == Dc(d, "goog_pem_mod") && Ec(d, "goog_pem_mod");
            d = H(b, Jk, 12);
            e = G(b, 9);
            gm(d, Kl(c, b), {
                Ja: e && !!a.google_disable_experiments,
                fb: e
            }, Ll(a));
            if (c = Bb(b, 15)) c = Number(c), N(Fh).l(c);
            if (c = Bb(b, 10)) c = Number(c), N(Fh).i(c);
            b = u(ob(b, 19));
            for (c = b.next(); !c.done; c = b.next()) c = c.value, N(Fh).i(c);
            N(Fh).j(12);
            N(Fh).j(10);
            a = sc(a) || a;
            vl(a.location, "google_mc_lab") && N(Fh).i(44738307)
        }
    };

    function km(a, b, c) {
        a = a.style;
        a.border = "none";
        a.height = c + "px";
        a.width = b + "px";
        a.margin = 0;
        a.padding = 0;
        a.position = "relative";
        a.visibility = "visible";
        a.backgroundColor = "transparent"
    };
    var lm = {
        "120x90": !0,
        "160x90": !0,
        "180x90": !0,
        "200x90": !0,
        "468x15": !0,
        "728x15": !0
    };

    function mm(a, b) {
        if (15 == b) {
            if (728 <= a) return 728;
            if (468 <= a) return 468
        } else if (90 == b) {
            if (200 <= a) return 200;
            if (180 <= a) return 180;
            if (160 <= a) return 160;
            if (120 <= a) return 120
        }
        return null
    };

    function V(a, b, c, d) {
        d = void 0 === d ? !1 : d;
        Bi.call(this, a, b);
        this.ca = c;
        this.gb = d
    }
    v(V, Bi);
    V.prototype.oa = function() {
        return this.ca
    };
    V.prototype.i = function(a, b, c) {
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };

    function nm(a) {
        return function(b) {
            return !!(b.ca & a)
        }
    };
    var om = {},
        pm = (om.image_stacked = 1 / 1.91, om.image_sidebyside = 1 / 3.82, om.mobile_banner_image_sidebyside = 1 / 3.82, om.pub_control_image_stacked = 1 / 1.91, om.pub_control_image_sidebyside = 1 / 3.82, om.pub_control_image_card_stacked = 1 / 1.91, om.pub_control_image_card_sidebyside = 1 / 3.74, om.pub_control_text = 0, om.pub_control_text_card = 0, om),
        qm = {},
        rm = (qm.image_stacked = 80, qm.image_sidebyside = 0, qm.mobile_banner_image_sidebyside = 0, qm.pub_control_image_stacked = 80, qm.pub_control_image_sidebyside = 0, qm.pub_control_image_card_stacked =
            85, qm.pub_control_image_card_sidebyside = 0, qm.pub_control_text = 80, qm.pub_control_text_card = 80, qm),
        sm = {},
        tm = (sm.pub_control_image_stacked = 100, sm.pub_control_image_sidebyside = 200, sm.pub_control_image_card_stacked = 150, sm.pub_control_image_card_sidebyside = 250, sm.pub_control_text = 100, sm.pub_control_text_card = 150, sm);

    function um(a) {
        var b = 0;
        a.R && b++;
        a.I && b++;
        a.J && b++;
        if (3 > b) return {
            L: "Tags data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num should be set together."
        };
        b = a.R.split(",");
        var c = a.J.split(",");
        a = a.I.split(",");
        if (b.length !== c.length || b.length !== a.length) return {
            L: 'Lengths of parameters data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num must match. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside"'
        };
        if (2 < b.length) return {
            L: "The parameter length of attribute data-matched-content-ui-type, data-matched-content-columns-num and data-matched-content-rows-num is too long. At most 2 parameters for each attribute are needed: one for mobile and one for desktop, while you are providing " + (b.length + ' parameters. Example: \n data-matched-content-rows-num="4,2"\ndata-matched-content-columns-num="1,6"\ndata-matched-content-ui-type="image_stacked,image_card_sidebyside".')
        };
        for (var d = [], e = [], f = 0; f < b.length; f++) {
            var g =
                Number(c[f]);
            if (t(Number, "isNaN").call(Number, g) || 0 === g) return {
                L: "Wrong value '" + c[f] + "' for data-matched-content-rows-num."
            };
            d.push(g);
            g = Number(a[f]);
            if (t(Number, "isNaN").call(Number, g) || 0 === g) return {
                L: "Wrong value '" + a[f] + "' for data-matched-content-columns-num."
            };
            e.push(g)
        }
        return {
            J: d,
            I: e,
            Ma: b
        }
    }

    function vm(a) {
        return 1200 <= a ? {
            width: 1200,
            height: 600
        } : 850 <= a ? {
            width: a,
            height: Math.floor(.5 * a)
        } : 550 <= a ? {
            width: a,
            height: Math.floor(.6 * a)
        } : 468 <= a ? {
            width: a,
            height: Math.floor(.7 * a)
        } : {
            width: a,
            height: Math.floor(3.44 * a)
        }
    };
    var wm = Za("script");

    function xm(a, b, c, d, e, f, g, h, k, l, m, q) {
        this.u = a;
        this.T = b;
        this.ca = void 0 === c ? null : c;
        this.h = void 0 === d ? null : d;
        this.O = void 0 === e ? null : e;
        this.i = void 0 === f ? null : f;
        this.j = void 0 === g ? null : g;
        this.F = void 0 === h ? null : h;
        this.M = void 0 === k ? null : k;
        this.l = void 0 === l ? null : l;
        this.m = void 0 === m ? null : m;
        this.N = void 0 === q ? null : q;
        this.P = this.A = this.D = null
    }
    xm.prototype.size = function() {
        return this.T
    };

    function ym(a, b, c) {
        null != a.ca && (c.google_responsive_formats = a.ca);
        null != a.O && (c.google_safe_for_responsive_override = a.O);
        null != a.i && (!0 === a.i ? c.google_full_width_responsive_allowed = !0 : (c.google_full_width_responsive_allowed = !1, c.gfwrnwer = a.i));
        null != a.j && !0 !== a.j && (c.gfwrnher = a.j);
        var d = a.m || c.google_ad_width;
        null != d && (c.google_resizing_width = d);
        d = a.l || c.google_ad_height;
        null != d && (c.google_resizing_height = d);
        d = a.size().h(b);
        var e = a.size().height();
        if (!c.google_ad_resize) {
            c.google_ad_width = d;
            c.google_ad_height =
                e;
            var f = a.size();
            b = f.h(b) + "x" + f.height();
            c.google_ad_format = b;
            c.google_responsive_auto_format = a.u;
            null != a.h && (c.armr = a.h);
            c.google_ad_resizable = !0;
            c.google_override_format = 1;
            c.google_loader_features_used = 128;
            !0 === a.i && (c.gfwrnh = a.size().height() + "px")
        }
        null != a.F && (c.gfwroml = a.F);
        null != a.M && (c.gfwromr = a.M);
        null != a.l && (c.gfwroh = a.l);
        null != a.m && (c.gfwrow = a.m);
        null != a.N && (c.gfwroz = a.N);
        null != a.D && (c.gml = a.D);
        null != a.A && (c.gmr = a.A);
        null != a.P && (c.gzi = a.P);
        b = gd();
        b = sc(b) || b;
        vl(b.location, "google_responsive_dummy_ad") &&
            (Xa([1, 2, 3, 4, 5, 6, 7, 8], a.u) || 1 === a.h) && 2 !== a.h && (a = JSON.stringify({
                googMsgType: "adpnt",
                key_value: [{
                    key: "qid",
                    value: "DUMMY_AD"
                }]
            }), c.dash = "<" + wm + ">window.top.postMessage('" + a + "', '*');\n          </" + wm + '>\n          <div id="dummyAd" style="width:' + d + "px;height:" + e + 'px;\n            background:#ddd;border:3px solid #f00;box-sizing:border-box;\n            color:#000;">\n            <p>Requested size:' + d + "x" + e + "</p>\n            <p>Rendered size:" + d + "x" + e + "</p>\n          </div>")
    };
    var zm = ["google_content_recommendation_ui_type", "google_content_recommendation_columns_num", "google_content_recommendation_rows_num"];

    function Am(a, b) {
        Bi.call(this, a, b)
    }
    v(Am, Bi);
    Am.prototype.h = function(a) {
        return Math.min(1200, Math.max(this.minWidth(), Math.round(a)))
    };

    function Bm(a, b) {
        Cm(a, b);
        if ("pedestal" == b.google_content_recommendation_ui_type) return new xm(9, new Am(a, Math.floor(a * b.google_phwr)));
        var c = mc();
        468 > a ? c ? (c = a - 8 - 8, c = Math.floor(c / 1.91 + 70) + Math.floor(11 * (c * pm.mobile_banner_image_sidebyside + rm.mobile_banner_image_sidebyside) + 96), a = {
            $: a,
            Z: c,
            I: 1,
            J: 12,
            R: "mobile_banner_image_sidebyside"
        }) : (a = vm(a), a = {
            $: a.width,
            Z: a.height,
            I: 1,
            J: 13,
            R: "image_sidebyside"
        }) : (a = vm(a), a = {
            $: a.width,
            Z: a.height,
            I: 4,
            J: 2,
            R: "image_stacked"
        });
        Dm(b, a);
        return new xm(9, new Am(a.$, a.Z))
    }

    function Em(a, b) {
        Cm(a, b);
        var c = um({
            J: b.google_content_recommendation_rows_num,
            I: b.google_content_recommendation_columns_num,
            R: b.google_content_recommendation_ui_type
        });
        if (c.L) a = {
            $: 0,
            Z: 0,
            I: 0,
            J: 0,
            R: "image_stacked",
            L: c.L
        };
        else {
            var d = 2 === c.Ma.length && 468 <= a ? 1 : 0;
            var e = c.Ma[d];
            e = 0 === e.indexOf("pub_control_") ? e : "pub_control_" + e;
            var f = tm[e];
            for (var g = c.I[d]; a / g < f && 1 < g;) g--;
            f = g;
            c = c.J[d];
            d = Math.floor(((a - 8 * f - 8) / f * pm[e] + rm[e]) * c + 8 * c + 8);
            a = 1500 < a ? {
                    width: 0,
                    height: 0,
                    pb: "Calculated slot width is too large: " + a
                } :
                1500 < d ? {
                    width: 0,
                    height: 0,
                    pb: "Calculated slot height is too large: " + d
                } : {
                    width: a,
                    height: d
                };
            a = {
                $: a.width,
                Z: a.height,
                I: f,
                J: c,
                R: e
            }
        }
        if (a.L) throw new T(a.L);
        Dm(b, a);
        return new xm(9, new Am(a.$, a.Z))
    }

    function Cm(a, b) {
        if (0 >= a) throw new T("Invalid responsive width from Matched Content slot " + b.google_ad_slot + ": " + a + ". Please ensure to put this Matched Content slot into a non-zero width div container.");
    }

    function Dm(a, b) {
        a.google_content_recommendation_ui_type = b.R;
        a.google_content_recommendation_columns_num = b.I;
        a.google_content_recommendation_rows_num = b.J
    };

    function Fm(a, b) {
        Bi.call(this, a, b)
    }
    v(Fm, Bi);
    Fm.prototype.h = function() {
        return this.minWidth()
    };
    Fm.prototype.i = function(a, b, c) {
        Ai(a, c);
        b.google_ad_resize || (c.style.height = this.height() + "px", b.rpe = !0)
    };
    var Gm = {
        "image-top": function(a) {
            return 600 >= a ? 284 + .414 * (a - 250) : 429
        },
        "image-middle": function(a) {
            return 500 >= a ? 196 - .13 * (a - 250) : 164 + .2 * (a - 500)
        },
        "image-side": function(a) {
            return 500 >= a ? 205 - .28 * (a - 250) : 134 + .21 * (a - 500)
        },
        "text-only": function(a) {
            return 500 >= a ? 187 - .228 * (a - 250) : 130
        },
        "in-article": function(a) {
            return 420 >= a ? a / 1.2 : 460 >= a ? a / 1.91 + 130 : 800 >= a ? a / 4 : 200
        }
    };

    function Hm(a, b) {
        Bi.call(this, a, b)
    }
    v(Hm, Bi);
    Hm.prototype.h = function() {
        return Math.min(1200, this.minWidth())
    };

    function Im(a, b, c, d, e) {
        var f = e.google_ad_layout || "image-top";
        if ("in-article" == f) {
            var g = a;
            if ("false" == e.google_full_width_responsive) a = g;
            else if (a = vi(b, c, g, .2, e), !0 !== a) e.gfwrnwer = a, a = g;
            else if (a = Mf(b))
                if (e.google_full_width_responsive_allowed = !0, c.parentElement) {
                    b: {
                        g = c;
                        for (var h = 0; 100 > h && g.parentElement; ++h) {
                            for (var k = g.parentElement.childNodes, l = 0; l < k.length; ++l) {
                                var m = k[l];
                                if (m != g && yi(b, m)) break b
                            }
                            g = g.parentElement;
                            g.style.width = "100%";
                            g.style.height = "auto"
                        }
                    }
                    Ai(b, c)
                }
            else a = g;
            else a = g
        }
        if (250 > a) throw new T("Fluid responsive ads must be at least 250px wide: availableWidth=" +
            a);
        a = Math.min(1200, Math.floor(a));
        if (d && "in-article" != f) {
            f = Math.ceil(d);
            if (50 > f) throw new T("Fluid responsive ads must be at least 50px tall: height=" + f);
            return new xm(11, new Bi(a, f))
        }
        if ("in-article" != f && (d = e.google_ad_layout_key)) {
            f = "" + d;
            b = Math.pow(10, 3);
            if (d = (c = f.match(/([+-][0-9a-z]+)/g)) && c.length) {
                e = [];
                for (g = 0; g < d; g++) e.push(parseInt(c[g], 36) / b);
                b = e
            } else b = null;
            if (!b) throw new T("Invalid data-ad-layout-key value: " + f);
            f = (a + -725) / 1E3;
            c = 0;
            d = 1;
            e = b.length;
            for (g = 0; g < e; g++) c += b[g] * d, d *= f;
            f = Math.ceil(1E3 *
                c - -725 + 10);
            if (isNaN(f)) throw new T("Invalid height: height=" + f);
            if (50 > f) throw new T("Fluid responsive ads must be at least 50px tall: height=" + f);
            if (1200 < f) throw new T("Fluid responsive ads must be at most 1200px tall: height=" + f);
            return new xm(11, new Bi(a, f))
        }
        d = Gm[f];
        if (!d) throw new T("Invalid data-ad-layout value: " + f);
        c = Fi(c, b);
        b = Mf(b);
        b = "in-article" !== f || c || a !== b ? Math.ceil(d(a)) : Math.ceil(1.25 * d(a));
        return new xm(11, "in-article" == f ? new Hm(a, b) : new Bi(a, b))
    };

    function Jm(a) {
        return function(b) {
            for (var c = a.length - 1; 0 <= c; --c)
                if (!a[c](b)) return !1;
            return !0
        }
    }

    function Km(a, b) {
        for (var c = Lm.slice(0), d = c.length, e = null, f = 0; f < d; ++f) {
            var g = c[f];
            if (a(g)) {
                if (!b || b(g)) return g;
                null === e && (e = g)
            }
        }
        return e
    };
    var W = [new V(970, 90, 2), new V(728, 90, 2), new V(468, 60, 2), new V(336, 280, 1), new V(320, 100, 2), new V(320, 50, 2), new V(300, 600, 4), new V(300, 250, 1), new V(250, 250, 1), new V(234, 60, 2), new V(200, 200, 1), new V(180, 150, 1), new V(160, 600, 4), new V(125, 125, 1), new V(120, 600, 4), new V(120, 240, 4), new V(120, 120, 1, !0)],
        Lm = [W[6], W[12], W[3], W[0], W[7], W[14], W[1], W[8], W[10], W[4], W[15], W[2], W[11], W[5], W[13], W[9], W[16]];

    function Mm(a, b, c, d, e) {
        "false" == e.google_full_width_responsive ? c = {
            B: a,
            C: 1
        } : "autorelaxed" == b && e.google_full_width_responsive || Nm(b) || e.google_ad_resize ? (b = wi(a, c, d, e), c = !0 !== b ? {
            B: a,
            C: b
        } : {
            B: Mf(c) || a,
            C: !0
        }) : c = {
            B: a,
            C: 2
        };
        b = c.C;
        return !0 !== b ? {
            B: a,
            C: b
        } : d.parentElement ? {
            B: c.B,
            C: b
        } : {
            B: a,
            C: b
        }
    }

    function Om(a, b, c, d, e) {
        var f = aj(247, function() {
                return Mm(a, b, c, d, e)
            }),
            g = f.B;
        f = f.C;
        var h = !0 === f,
            k = J(d.style.width),
            l = J(d.style.height),
            m = Pm(g, b, c, d, e, h);
        g = m.X;
        h = m.V;
        var q = m.oa;
        m = m.La;
        var r = Qm(b, q),
            y, F = (y = Ci(d, c, "marginLeft", J)) ? y + "px" : "",
            z = (y = Ci(d, c, "marginRight", J)) ? y + "px" : "";
        y = Ci(d, c, "zIndex") || "";
        return new xm(r, g, q, null, m, f, h, F, z, l, k, y)
    }

    function Nm(a) {
        return "auto" == a || /^((^|,) *(horizontal|vertical|rectangle) *)+$/.test(a)
    }

    function Pm(a, b, c, d, e, f) {
        b = "auto" == b ? .25 >= a / Math.min(1200, Mf(c)) ? 4 : 3 : ui(b);
        var g = !1,
            h = !1;
        if (488 > Mf(c)) {
            var k = pi(d, c);
            var l = Fi(d, c);
            g = !l && k;
            h = l && k
        }
        l = [Di(a), nm(b)];
        l.push(Ei(488 > Mf(c), c, d, h));
        null != e.google_max_responsive_height && l.push(Hi(e.google_max_responsive_height));
        var m = [function(r) {
            return !r.gb
        }];
        if (g || h) g = Ii(c, d), m.push(Hi(g));
        var q = Km(Jm(l), Jm(m));
        if (!q) throw new T("No slot size for availableWidth=" + a);
        l = aj(248, function() {
            var r;
            a: if (f) {
                if (e.gfwrnh && (r = J(e.gfwrnh))) {
                    r = {
                        X: new Fm(a, r),
                        V: !0
                    };
                    break a
                }
                r = a / 1.2;
                var y = Math;
                var F = y.min;
                if (e.google_resizing_allowed || "true" == e.google_full_width_responsive) var z = Infinity;
                else {
                    z = d;
                    var E = Infinity;
                    do {
                        var S = Ci(z, c, "height", J);
                        S && (E = Math.min(E, S));
                        (S = Ci(z, c, "maxHeight", J)) && (E = Math.min(E, S))
                    } while ((z = z.parentElement) && "HTML" != z.tagName);
                    z = E
                }
                y = F.call(y, r, z);
                if (y < .5 * r || 100 > y) y = r;
                O(af) && !Fi(d, c) && (y = Math.max(y, .5 * Lf(c).clientHeight));
                r = {
                    X: new Fm(a, Math.floor(y)),
                    V: y < r ? 102 : !0
                }
            } else r = {
                X: q,
                V: 100
            };
            return r
        });
        g = l.X;
        l = l.V;
        return "in-article" === e.google_ad_layout &&
            Rm(c) ? {
                X: Sm(a, c, d, g, e),
                V: !1,
                oa: b,
                La: k
            } : {
                X: g,
                V: l,
                oa: b,
                La: k
            }
    }

    function Qm(a, b) {
        if ("auto" == a) return 1;
        switch (b) {
            case 2:
                return 2;
            case 1:
                return 3;
            case 4:
                return 4;
            case 3:
                return 5;
            case 6:
                return 6;
            case 5:
                return 7;
            case 7:
                return 8
        }
        throw Error("bad mask");
    }

    function Sm(a, b, c, d, e) {
        var f = e.google_ad_height || Ci(c, b, "height", J);
        b = Im(a, b, c, f, e).size();
        return b.minWidth() * b.height() > a * d.height() ? new V(b.minWidth(), b.height(), 1) : d
    }

    function Rm(a) {
        return O(Ze) || a.location && "#hffwroe2etoq" == a.location.hash
    };

    function Tm(a, b, c, d, e) {
        var f;
        (f = Mf(b)) ? 488 > Mf(b) ? b.innerHeight >= b.innerWidth ? (e.google_full_width_responsive_allowed = !0, Ai(b, c), f = {
            B: f,
            C: !0
        }) : f = {
            B: a,
            C: 5
        } : f = {
            B: a,
            C: 4
        }: f = {
            B: a,
            C: 10
        };
        var g = f;
        f = g.B;
        g = g.C;
        if (!0 !== g || a == f) return new xm(12, new Bi(a, d), null, null, !0, g, 100);
        a = Pm(f, "auto", b, c, e, !0);
        return new xm(1, a.X, a.oa, 2, !0, g, a.V)
    };

    function Um(a, b) {
        var c = b.google_ad_format;
        if ("autorelaxed" == c) {
            a: {
                if ("pedestal" != b.google_content_recommendation_ui_type)
                    for (a = u(zm), c = a.next(); !c.done; c = a.next())
                        if (null != b[c.value]) {
                            b = !0;
                            break a
                        }
                b = !1
            }
            return b ? 9 : 5
        }
        if (Nm(c)) return 1;
        if ("link" === c) return 4;
        if ("fluid" == c) {
            if (c = "in-article" === b.google_ad_layout) c = O($e) || O(Ze) || a.location && ("#hffwroe2etop" == a.location.hash || "#hffwroe2etoq" == a.location.hash);
            return c ? (Vm(b), 1) : 8
        }
        if (27 === b.google_reactive_ad_format) return Vm(b), 1
    }

    function Wm(a, b, c, d, e) {
        e = b.offsetWidth || (c.google_ad_resize || (void 0 === e ? !1 : e)) && Ci(b, d, "width", J) || c.google_ad_width || 0;
        4 === a && (c.google_ad_format = "auto", a = 1);
        var f = (f = Xm(a, e, b, c, d)) ? f : Om(e, c.google_ad_format, d, b, c);
        f.size().i(d, c, b);
        ym(f, e, c);
        1 != a && (a = f.size().height(), b.style.height = a + "px")
    }

    function Xm(a, b, c, d, e) {
        var f = d.google_ad_height || Ci(c, e, "height", J);
        switch (a) {
            case 5:
                return f = aj(247, function() {
                    return Mm(b, d.google_ad_format, e, c, d)
                }), a = f.B, f = f.C, !0 === f && b != a && Ai(e, c), !0 === f ? d.google_full_width_responsive_allowed = !0 : (d.google_full_width_responsive_allowed = !1, d.gfwrnwer = f), Bm(a, d);
            case 9:
                return Em(b, d);
            case 8:
                return Im(b, e, c, f, d);
            case 10:
                return Tm(b, e, c, f, d)
        }
    }

    function Vm(a) {
        a.google_ad_format = "auto";
        a.armr = 3
    };

    function Ym(a, b) {
        var c = sc(b);
        if (c) {
            c = Mf(c);
            var d = vc(a, b) || {},
                e = d.direction;
            if ("0px" === d.width && "none" !== d.cssFloat) return -1;
            if ("ltr" === e && c) return Math.floor(Math.min(1200, c - a.getBoundingClientRect().left));
            if ("rtl" === e && c) return a = b.document.body.getBoundingClientRect().right - a.getBoundingClientRect().right, Math.floor(Math.min(1200, c - a - Math.floor((c - b.document.body.clientWidth) / 2)))
        }
        return -1
    };
    var Zm = ka(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/slotcar_library", ".js"]),
        $m = ka(["https://googleads.g.doubleclick.net/pagead/html/", "/", "/zrt_lookup.html"]),
        an = ka(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl", ".js"]),
        bn = ka(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_with_ama", ".js"]),
        cn = ka(["https://pagead2.googlesyndication.com/pagead/managed/js/adsense/", "/show_ads_impl_instrumented", ".js"]);

    function dn(a) {
        Zi.Ra(function(b) {
            b.shv = String(a);
            b.mjsv = "m202201240101";
            var c = N(Fh).h(),
                d = U(w);
            d.eids || (d.eids = []);
            b.eid = c.concat(d.eids).join(",")
        })
    };

    function en(a) {
        var b = a.lb;
        return a.bb || ("dev" === b ? "dev" : "")
    };
    var fn = {},
        gn = (fn.google_ad_modifications = !0, fn.google_analytics_domain_name = !0, fn.google_analytics_uacct = !0, fn.google_pause_ad_requests = !0, fn.google_user_agent_client_hint = !0, fn);

    function hn(a) {
        return (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null
    }

    function jn(a) {
        if (a = a.innerText || a.innerHTML)
            if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g, ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
        return null
    }

    function kn(a) {
        switch (a) {
            case "true":
                return !0;
            case "false":
                return !1;
            case "null":
                return null;
            case "undefined":
                break;
            default:
                try {
                    var b = a.match(/^(?:'(.*)'|"(.*)")$/);
                    if (b) return b[1] || b[2] || "";
                    if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                        var c = parseFloat(a);
                        return c === c ? c : void 0
                    }
                } catch (d) {}
        }
    };

    function ln(a) {
        var b, c, d, e;
        if (a.google_ad_client) return String(a.google_ad_client);
        var f = U(a).head_tag_slot_vars;
        if (null !== (d = null !== (b = null === f || void 0 === f ? void 0 : f.google_ad_client) && void 0 !== b ? b : null === (c = a.document.querySelector(".adsbygoogle[data-ad-client]")) || void 0 === c ? void 0 : c.getAttribute("data-ad-client")) && void 0 !== d) f = d;
        else {
            b: {
                f = a.document.getElementsByTagName("script");a = a.navigator && a.navigator.userAgent || "";a = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube",
                    "i").test(a) || /i(phone|pad|pod)/i.test(a) && /applewebkit/i.test(a) && !/version|safari/i.test(a) && !hd() ? hn : jn;
                for (var g = f.length - 1; 0 <= g; g--) {
                    var h = f[g];
                    if (!h.google_parsed_script_for_pub_code && (h.google_parsed_script_for_pub_code = !0, h = a(h))) {
                        f = h;
                        break b
                    }
                }
                f = null
            }
            if (f) {
                a = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                for (g = {}; h = a.exec(f);) g[h[1]] = kn(h[2]);
                f = g.google_ad_client ? g.google_ad_client : ""
            } else f = ""
        }
        return null !== (e = f) && void 0 !== e ? e : ""
    };
    var mn = "undefined" === typeof sttc ? void 0 : sttc;

    function nn(a) {
        var b = Zi;
        try {
            return Of(a, Pf), new Ok(JSON.parse(a))
        } catch (c) {
            b.H(838, c instanceof Error ? c : Error(String(c)), void 0, function(d) {
                d.jspb = String(a)
            })
        }
        return new Ok
    };
    var on = N(rf).h(ef.h, ef.defaultValue);

    function pn() {
        var a = K.document;
        a = void 0 === a ? window.document : a;
        Qc(on, a)
    };
    var qn = N(rf).h(ff.h, ff.defaultValue);

    function rn() {
        var a = K.document;
        a = void 0 === a ? window.document : a;
        Qc(qn, a)
    };
    var sn = ka(["https://pagead2.googlesyndication.com/pagead/js/err_rep.js"]);

    function tn() {
        this.h = null;
        this.j = !1;
        this.l = Math.random();
        this.i = this.H;
        this.m = null
    }
    n = tn.prototype;
    n.Ra = function(a) {
        this.h = a
    };
    n.Ta = function(a) {
        this.j = a
    };
    n.Sa = function(a) {
        this.i = a
    };
    n.H = function(a, b, c, d, e) {
        if ((this.j ? this.l : Math.random()) > (void 0 === c ? .01 : c)) return !1;
        Lh(b) || (b = new Kh(b, {
            context: a,
            id: void 0 === e ? "jserror" : e
        }));
        if (d || this.h) b.meta = {}, this.h && this.h(b.meta), d && d(b.meta);
        w.google_js_errors = w.google_js_errors || [];
        w.google_js_errors.push(b);
        if (!w.error_rep_loaded) {
            a = bd(sn);
            var f;
            tc(w.document, null != (f = this.m) ? f : Tb(cc(a).toString()));
            w.error_rep_loaded = !0
        }
        return !1
    };
    n.na = function(a, b, c) {
        try {
            var d = b()
        } catch (e) {
            if (!this.i(a, e, .01, c, "jserror")) throw e;
        }
        return d
    };
    n.Na = function(a, b, c, d) {
        var e = this;
        return function() {
            var f = sa.apply(0, arguments);
            return e.na(a, function() {
                return b.apply(c, f)
            }, d)
        }
    };

    function un(a, b, c) {
        var d = window;
        return function() {
            var e = Sh(),
                f = 3;
            try {
                var g = b.apply(this, arguments)
            } catch (h) {
                f = 13;
                if (c) return c(a, h), g;
                throw h;
            } finally {
                d.google_measure_js_timing && e && (e = {
                    label: a.toString(),
                    value: e,
                    duration: (Sh() || 0) - e,
                    type: f
                }, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e))
            }
            return g
        }
    }

    function vn(a, b) {
        return un(a, b, function(c, d) {
            (new tn).H(c, d)
        })
    };

    function wn(a, b) {
        return null == b ? "&" + a + "=null" : "&" + a + "=" + Math.floor(b)
    }

    function xn(a, b) {
        return "&" + a + "=" + b.toFixed(3)
    }

    function yn() {
        var a = new p.Set,
            b = fj();
        try {
            if (!b) return a;
            for (var c = b.pubads(), d = u(c.getSlots()), e = d.next(); !e.done; e = d.next()) a.add(e.value.getSlotId().getDomId())
        } catch (f) {}
        return a
    }

    function zn(a) {
        a = a.id;
        return null != a && (yn().has(a) || t(a, "startsWith").call(a, "google_ads_iframe_") || t(a, "startsWith").call(a, "aswift"))
    }

    function An(a, b, c) {
        if (!a.sources) return !1;
        switch (Bn(a)) {
            case 2:
                var d = Cn(a);
                if (d) return c.some(function(f) {
                    return Dn(d, f)
                });
            case 1:
                var e = En(a);
                if (e) return b.some(function(f) {
                    return Dn(e, f)
                })
        }
        return !1
    }

    function Bn(a) {
        if (!a.sources) return 0;
        a = a.sources.filter(function(b) {
            return b.previousRect && b.currentRect
        });
        if (1 <= a.length) {
            a = a[0];
            if (a.previousRect.top < a.currentRect.top) return 2;
            if (a.previousRect.top > a.currentRect.top) return 1
        }
        return 0
    }

    function En(a) {
        return Fn(a, function(b) {
            return b.currentRect
        })
    }

    function Cn(a) {
        return Fn(a, function(b) {
            return b.previousRect
        })
    }

    function Fn(a, b) {
        return a.sources.reduce(function(c, d) {
            d = b(d);
            return c ? d && 0 !== d.width * d.height ? d.top < c.top ? d : c : c : d
        }, null)
    }

    function Gn() {
        ei.call(this);
        this.i = this.h = this.O = this.N = this.F = 0;
        this.Aa = this.xa = Number.NEGATIVE_INFINITY;
        this.ta = this.va = this.wa = this.ya = this.Da = this.m = this.Ca = this.T = 0;
        this.ua = !1;
        this.P = this.M = this.A = 0;
        var a = document.querySelector("[data-google-query-id]");
        this.Ba = a ? a.getAttribute("data-google-query-id") : null;
        this.l = null;
        this.za = !1;
        this.fa = function() {}
    }
    v(Gn, ei);

    function Hn() {
        var a = new Gn;
        if (O(hf)) {
            var b = window;
            if (!b.google_plmetrics && window.PerformanceObserver) {
                b.google_plmetrics = !0;
                b = u(["layout-shift", "largest-contentful-paint", "first-input", "longtask"]);
                for (var c = b.next(); !c.done; c = b.next()) c = c.value, In(a).observe({
                    type: c,
                    buffered: !0
                });
                Jn(a)
            }
        }
    }

    function In(a) {
        a.l || (a.l = new PerformanceObserver(vn(640, function(b) {
            var c = Kn !== window.scrollX || Ln !== window.scrollY ? [] : Mn,
                d = Nn();
            b = u(b.getEntries());
            for (var e = b.next(); !e.done; e = b.next()) switch (e = e.value, e.entryType) {
                case "layout-shift":
                    var f = a;
                    if (!e.hadRecentInput) {
                        f.F += Number(e.value);
                        Number(e.value) > f.N && (f.N = Number(e.value));
                        f.O += 1;
                        var g = An(e, c, d);
                        g && (f.m += e.value, f.ya++);
                        if (5E3 < e.startTime - f.xa || 1E3 < e.startTime - f.Aa) f.xa = e.startTime, f.h = 0, f.i = 0;
                        f.Aa = e.startTime;
                        f.h += e.value;
                        g && (f.i += e.value);
                        f.h > f.T && (f.T = f.h, f.Da = f.i, f.Ca = e.startTime + e.duration)
                    }
                    break;
                case "largest-contentful-paint":
                    a.wa = Math.floor(e.renderTime || e.loadTime);
                    a.va = e.size;
                    break;
                case "first-input":
                    a.ta = Number((e.processingStart - e.startTime).toFixed(3));
                    a.ua = !0;
                    break;
                case "longtask":
                    e = Math.max(0, e.duration - 50), a.A += e, a.M = Math.max(a.M, e), a.P += 1
            }
        })));
        return a.l
    }

    function Jn(a) {
        var b = vn(641, function() {
                var d = document;
                2 == (O(gf) && d.prerendering ? 3 : {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[d.visibilityState || d.webkitVisibilityState || d.mozVisibilityState || ""] || 0) && On(a)
            }),
            c = vn(641, function() {
                return void On(a)
            });
        document.addEventListener("visibilitychange", b);
        document.addEventListener("unload", c);
        a.fa = function() {
            document.removeEventListener("visibilitychange", b);
            document.removeEventListener("unload", c);
            In(a).disconnect()
        }
    }
    Gn.prototype.j = function() {
        ei.prototype.j.call(this);
        this.fa()
    };

    function On(a) {
        if (!a.za) {
            a.za = !0;
            In(a).takeRecords();
            var b = "https://pagead2.googlesyndication.com/pagead/gen_204?id=plmetrics";
            window.LayoutShift && (b += xn("cls", a.F), b += xn("mls", a.N), b += wn("nls", a.O), window.LayoutShiftAttribution && (b += xn("cas", a.m), b += wn("nas", a.ya)), b += xn("wls", a.T), b += xn("tls", a.Ca), window.LayoutShiftAttribution && (b += xn("was", a.Da)));
            window.LargestContentfulPaint && (b += wn("lcp", a.wa), b += wn("lcps", a.va));
            window.PerformanceEventTiming && a.ua && (b += wn("fid", a.ta));
            window.PerformanceLongTaskTiming &&
                (b += wn("cbt", a.A), b += wn("mbt", a.M), b += wn("nlt", a.P));
            for (var c = 0, d = u(document.getElementsByTagName("iframe")), e = d.next(); !e.done; e = d.next()) zn(e.value) && c++;
            b += wn("nif", c);
            b += wn("ifi", dd(window));
            c = N(Fh).h();
            b += "&eid=" + encodeURIComponent(c.join());
            b += "&top=" + (w === w.top ? 1 : 0);
            b += a.Ba ? "&qqid=" + encodeURIComponent(a.Ba) : wn("pvsid", Rc(w));
            window.googletag && (b += "&gpt=1");
            window.fetch(b, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            });
            a.u || (a.u = !0, a.j())
        }
    }

    function Dn(a, b) {
        var c = Math.min(a.right, b.right) - Math.max(a.left, b.left);
        a = Math.min(a.bottom, b.bottom) - Math.max(a.top, b.top);
        return 0 >= c || 0 >= a ? !1 : 50 <= 100 * c * a / ((b.right - b.left) * (b.bottom - b.top))
    }

    function Nn() {
        var a = [].concat(la(document.getElementsByTagName("iframe"))).filter(zn),
            b = [].concat(la(yn())).map(function(c) {
                return document.getElementById(c)
            }).filter(function(c) {
                return null !== c
            });
        Kn = window.scrollX;
        Ln = window.scrollY;
        return Mn = [].concat(la(a), la(b)).map(function(c) {
            return c.getBoundingClientRect()
        })
    }
    var Kn = void 0,
        Ln = void 0,
        Mn = [];
    var X = {
            issuerOrigin: "https://attestation.android.com",
            issuancePath: "/att/i",
            redemptionPath: "/att/r"
        },
        Y = {
            issuerOrigin: "https://pagead2.googlesyndication.com",
            issuancePath: "/dtt/i",
            redemptionPath: "/dtt/r",
            getStatePath: "/dtt/s"
        };
    var Pn = N(rf).h(pf.h, pf.defaultValue);

    function Qn(a, b, c) {
        ei.call(this);
        var d = this;
        this.i = a;
        this.h = [];
        b && Rn() && this.h.push(X);
        c && this.h.push(Y);
        if (document.hasTrustToken && !O(mf)) {
            var e = new p.Map;
            this.h.forEach(function(f) {
                e.set(f.issuerOrigin, {
                    issuerOrigin: f.issuerOrigin,
                    state: d.i ? 1 : 12,
                    hasRedemptionRecord: !1
                })
            });
            window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof p.Map ? new p.Map([].concat(la(e), la(window.goog_tt_state_map))) : e;
            window.goog_tt_promise_map && window.goog_tt_promise_map instanceof p.Map || (window.goog_tt_promise_map =
                new p.Map)
        }
    }
    v(Qn, ei);

    function Rn() {
        var a = void 0 === a ? window : a;
        a = a.navigator.userAgent;
        var b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }

    function Sn() {
        var a = void 0 === a ? window.document : a;
        Qc(Pn, a)
    }

    function Tn(a, b) {
        return a || ".google.ch" === b || "function" === typeof K.__tcfapi
    }

    function Z(a, b, c) {
        var d, e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
        e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
    }

    function Un() {
        var a = X.issuerOrigin + X.redemptionPath,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: X.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        Z(X.issuerOrigin, 2);
        return window.fetch(a, b).then(function(c) {
            if (!c.ok) throw Error(c.status + ": Network response was not ok!");
            Z(X.issuerOrigin, 6, !0)
        }).catch(function(c) {
            c && "NoModificationAllowedError" === c.name ? Z(X.issuerOrigin, 6, !0) : Z(X.issuerOrigin, 5)
        })
    }

    function Vn() {
        var a = X.issuerOrigin + X.issuancePath;
        Z(X.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(function(b) {
            if (!b.ok) throw Error(b.status + ": Network response was not ok!");
            Z(X.issuerOrigin, 10);
            return Un()
        }).catch(function(b) {
            if (b && "NoModificationAllowedError" === b.name) return Z(X.issuerOrigin, 10), Un();
            Z(X.issuerOrigin, 9)
        })
    }

    function Wn() {
        Z(X.issuerOrigin, 13);
        return document.hasTrustToken(X.issuerOrigin).then(function(a) {
            return a ? Un() : Vn()
        })
    }

    function Xn() {
        Z(Y.issuerOrigin, 13);
        if (p.Promise) {
            var a = document.hasTrustToken(Y.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return p.Promise.reject({
                        state: 19,
                        error: e
                    })
                }),
                b = Y.issuerOrigin + Y.redemptionPath,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            Z(Y.issuerOrigin, 16);
            a = a.then(function(e) {
                return window.fetch(b, c).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 18, !0)
                }).catch(function(f) {
                    if (f && "NoModificationAllowedError" ===
                        f.name) Z(Y.issuerOrigin, 18, !0);
                    else {
                        if (e) return p.Promise.reject({
                            state: 17,
                            error: f
                        });
                        Z(Y.issuerOrigin, 17)
                    }
                })
            }).then(function() {
                return document.hasTrustToken(Y.issuerOrigin).then(function(e) {
                    return e
                }).catch(function(e) {
                    return p.Promise.reject({
                        state: 19,
                        error: e
                    })
                })
            }).then(function(e) {
                var f = Y.issuerOrigin + Y.getStatePath;
                Z(Y.issuerOrigin, 20);
                return window.fetch(f + "?ht=" + e, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [Y.issuerOrigin]
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 22);
                    return g.text().then(function(h) {
                        return JSON.parse(h)
                    })
                }).catch(function(g) {
                    return p.Promise.reject({
                        state: 21,
                        error: g
                    })
                })
            });
            var d = Rc(window);
            return a.then(function(e) {
                var f = Y.issuerOrigin + Y.issuancePath;
                return e && e.srqt && e.cs ? (Z(Y.issuerOrigin, 23), window.fetch(f + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(function(g) {
                    if (!g.ok) throw Error(g.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 25);
                    return e
                }).catch(function(g) {
                    return p.Promise.reject({
                        state: 24,
                        error: g
                    })
                })) : e
            }).then(function(e) {
                if (e && e.srdt && e.cs) return Z(Y.issuerOrigin, 26), window.fetch(b + "?cs=" + e.cs + "&correlator=" + d, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(function(f) {
                    if (!f.ok) throw Error(f.status + ": Network response was not ok!");
                    Z(Y.issuerOrigin, 28, !0)
                }).catch(function(f) {
                    return p.Promise.reject({
                        state: 27,
                        error: f
                    })
                })
            }).then(function() {
                Z(Y.issuerOrigin, 29)
            }).catch(function(e) {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" ===
                        typeof e.state && e.error instanceof Error) {
                        Z(Y.issuerOrigin, e.state);
                        var f = P( of );
                        Math.random() <= f && $c({
                            state: e.state,
                            err: e.error.toString()
                        }, "dtt_err")
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function Yn(a) {
        if (document.hasTrustToken && !O(mf) && a.i) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof p.Map) {
                var c = [];
                if (a.h.some(function(e) {
                        return e.issuerOrigin === X.issuerOrigin
                    })) {
                    var d = b.get(X.issuerOrigin);
                    d || (d = Wn(), b.set(X.issuerOrigin, d));
                    c.push(d)
                }
                a.h.some(function(e) {
                    return e.issuerOrigin === Y.issuerOrigin
                }) && (a = b.get(Y.issuerOrigin), a || (a = Xn(), b.set(Y.issuerOrigin, a)), c.push(a));
                if (0 < c.length && p.Promise && p.Promise.all) return p.Promise.all(c)
            }
        }
    };
    var Zn = "platform platformVersion architecture model uaFullVersion bitness".split(" ");

    function $n() {
        var a, b;
        return "function" !== typeof(null === (b = null === (a = null === K || void 0 === K ? void 0 : K.navigator) || void 0 === a ? void 0 : a.userAgentData) || void 0 === b ? void 0 : b.getHighEntropyValues) ? null : K.navigator.userAgentData.getHighEntropyValues(Zn).then(function(c) {
            var d = new ek;
            d = C(d, 1, c.platform);
            d = C(d, 2, c.platformVersion);
            d = C(d, 3, c.architecture);
            d = C(d, 4, c.model);
            d = C(d, 5, c.uaFullVersion);
            return C(d, 9, c.bitness)
        })
    };

    function ao(a, b) {
        b.google_ad_host || (a = a.document.querySelector('meta[name="google-adsense-platform-account"]')) && (b.google_ad_host = a.getAttribute("content"))
    }

    function bo(a, b, c) {
        c = void 0 === c ? "" : c;
        K.google_sa_impl && !K.document.getElementById("google_shimpl") && (delete K.google_sa_queue, K.google_sl_win = null, delete K.google_sa_impl);
        K.google_sa_queue || (K.google_sa_queue = [], O(Ne) || (K.google_sl_win = K), K.google_process_slots = bj(215, function() {
            return co(K.google_sa_queue)
        }), a = eo(c, a, b), tc(K.document, a).id = "google_shimpl")
    }

    function co(a) {
        var b = a.shift();
        "function" === typeof b && aj(216, b);
        a.length && w.setTimeout(bj(215, function() {
            return co(a)
        }), 0)
    }

    function fo(a, b, c) {
        a.google_sa_queue = a.google_sa_queue || [];
        a.google_sa_impl ? c(b) : a.google_sa_queue.push(b)
    }

    function eo(a, b, c) {
        var d = Math.random() < P(Te) ? Tb(cc(b.nb).toString()) : null;
        b = G(c, 4) ? b.mb : b.ob;
        d = d ? d : Tb(cc(b).toString());
        b = {};
        a: {
            if (G(c, 4)) {
                if (c = a || ln(K)) {
                    var e = {};
                    c = (e.client = c, e.plah = K.location.host, e);
                    break a
                }
                throw Error("PublisherCodeNotFoundForAma");
            }
            c = {}
        }
        go(c, b);
        a: {
            if (O(Pe) && (a = a || ln(K))) {
                c = {};
                a = (c.client = a, c.plah = K.location.host, c.ama_t = "adsense", c.asntp = P(xe), c.asntpv = P(Be), c.asntpl = P(ze), c.asntpm = P(Ae), c.asntpc = P(ye), c.asna = P(te), c.asnd = P(ue), c.asnp = P(ve), c.asns = P(we), c.asmat = P(se), c.asptt =
                    P(Ce), c.easpi = O(Pe), c.asro = O(De), c);
                break a
            }
            a = {}
        }
        go(a, b);
        go(sf() ? {
            bust: sf()
        } : {}, b);
        return Qb(d, b)
    }

    function go(a, b) {
        Ac(a, function(c, d) {
            void 0 === b[d] && (b[d] = c)
        })
    }

    function ho(a) {
        a: {
            var b = void 0 === b ? !1 : b;
            var c = void 0 === c ? 1024 : c;
            for (var d = [w.top], e = [], f = 0, g; g = d[f++];) {
                b && !rc(g) || e.push(g);
                try {
                    if (g.frames)
                        for (var h = 0; h < g.frames.length && d.length < c; ++h) d.push(g.frames[h])
                } catch (l) {}
            }
            for (b = 0; b < e.length; b++) try {
                var k = e[b].frames.google_esf;
                if (k) {
                    Uc = k;
                    break a
                }
            } catch (l) {}
            Uc = null
        }
        if (Uc) return null;e = uc("IFRAME");e.id = "google_esf";e.name = "google_esf";a = a.tb;a = a instanceof Zb ? bc(a).toString() : Sb(a).toString();e.src = a;e.style.display = "none";
        return e
    }

    function io(a, b, c, d) {
        jo(a, b, c, d, function(e, f) {
            e = e.document;
            for (var g = void 0, h = 0; !g || e.getElementById(g + "_anchor");) g = "aswift_" + h++;
            e = g;
            g = Number(f.google_ad_width || 0);
            f = Number(f.google_ad_height || 0);
            h = uc("INS");
            h.id = e + "_anchor";
            km(h, g, f);
            h.style.display = "block";
            var k = uc("INS");
            k.id = e + "_expand";
            km(k, g, f);
            k.style.display = "inline-table";
            k.appendChild(h);
            c.appendChild(k);
            return e
        })
    }

    function jo(a, b, c, d, e) {
        e = e(a, b);
        ko(a, c, b);
        c = Ia;
        var f = (new Date).getTime();
        b.google_lrv = Bb(d, 2);
        b.google_async_iframe_id = e;
        b.google_start_time = c;
        b.google_bpp = f > c ? f - c : 1;
        a.google_sv_map = a.google_sv_map || {};
        a.google_sv_map[e] = b;
        d = a.document.getElementById(e + "_anchor") ? function(h) {
            return h()
        } : function(h) {
            return window.setTimeout(h, 0)
        };
        var g = {
            pubWin: a,
            vars: b
        };
        fo(a, function() {
            var h = a.google_sa_impl(g);
            h && h.catch && h.catch(dj(911))
        }, d)
    }

    function ko(a, b, c) {
        var d = c.google_ad_output,
            e = c.google_ad_format,
            f = c.google_ad_width || 0,
            g = c.google_ad_height || 0;
        e || "html" != d && null != d || (e = f + "x" + g);
        d = !c.google_ad_slot || c.google_override_format || !lm[c.google_ad_width + "x" + c.google_ad_height] && "aa" == c.google_loader_used;
        e && d ? e = e.toLowerCase() : e = "";
        c.google_ad_format = e;
        if ("number" !== typeof c.google_reactive_sra_index || !c.google_ad_unit_key) {
            e = [c.google_ad_slot, c.google_orig_ad_format || c.google_ad_format, c.google_ad_type, c.google_orig_ad_width || c.google_ad_width,
                c.google_orig_ad_height || c.google_ad_height
            ];
            d = [];
            f = 0;
            for (g = b; g && 25 > f; g = g.parentNode, ++f) 9 === g.nodeType ? d.push("") : d.push(g.id);
            (d = d.join()) && e.push(d);
            c.google_ad_unit_key = Bc(e.join(":")).toString();
            var h = void 0 === h ? !1 : h;
            e = [];
            for (d = 0; b && 25 > d; ++d) {
                f = "";
                void 0 !== h && h || (f = (f = 9 !== b.nodeType && b.id) ? "/" + f : "");
                a: {
                    if (b && b.nodeName && b.parentElement) {
                        g = b.nodeName.toString().toLowerCase();
                        for (var k = b.parentElement.childNodes, l = 0, m = 0; m < k.length; ++m) {
                            var q = k[m];
                            if (q.nodeName && q.nodeName.toString().toLowerCase() ===
                                g) {
                                if (b === q) {
                                    g = "." + l;
                                    break a
                                }++l
                            }
                        }
                    }
                    g = ""
                }
                e.push((b.nodeName && b.nodeName.toString().toLowerCase()) + f + g);
                b = b.parentElement
            }
            h = e.join() + ":";
            b = [];
            if (a) try {
                var r = a.parent;
                for (e = 0; r && r !== a && 25 > e; ++e) {
                    var y = r.frames;
                    for (d = 0; d < y.length; ++d)
                        if (a === y[d]) {
                            b.push(d);
                            break
                        }
                    a = r;
                    r = a.parent
                }
            } catch (F) {}
            c.google_ad_dom_fingerprint = Bc(h + b.join()).toString()
        }
    }

    function lo() {
        var a = sc(w);
        a && (a = Kf(a), a.tagSpecificState[1] || (a.tagSpecificState[1] = {
            debugCard: null,
            debugCardRequested: !1
        }))
    }

    function mo(a) {
        Sn();
        Tn(Tk(), Bb(a, 8)) || bj(779, function() {
            var b = window;
            b = void 0 === b ? window : b;
            b = O(b.PeriodicSyncManager ? kf : lf);
            var c = O(nf);
            b = new Qn(!0, b, c);
            0 < P(qf) ? K.google_trust_token_operation_promise = Yn(b) : Yn(b)
        })();
        a = $n();
        null != a && a.then(function(b) {
            K.google_user_agent_client_hint = zb(b)
        });
        rn();
        pn()
    };

    function no(a, b) {
        switch (a) {
            case "google_reactive_ad_format":
                return a = parseInt(b, 10), isNaN(a) ? 0 : a;
            case "google_allow_expandable_ads":
                return Ic(b);
            default:
                return b
        }
    }

    function oo(a, b) {
        if (a.getAttribute("src")) {
            var c = a.getAttribute("src") || "";
            (c = qc(c)) && (b.google_ad_client = no("google_ad_client", c))
        }
        a = a.attributes;
        c = a.length;
        for (var d = 0; d < c; d++) {
            var e = a[d];
            if (/data-/.test(e.name)) {
                var f = Ja(e.name.replace("data-matched-content", "google_content_recommendation").replace("data", "google").replace(/-/g, "_"));
                b.hasOwnProperty(f) || (e = no(f, e.value), null !== e && (b[f] = e))
            }
        }
    }

    function po(a) {
        if (a = Xc(a)) switch (a.data && a.data.autoFormat) {
            case "rspv":
                return 13;
            case "mcrspv":
                return 15;
            default:
                return 14
        } else return 12
    }

    function qo(a, b, c, d) {
        oo(a, b);
        if (c.document && c.document.body && !Um(c, b) && !b.google_reactive_ad_format) {
            var e = parseInt(a.style.width, 10),
                f = Ym(a, c);
            if (0 < f && e > f) {
                var g = parseInt(a.style.height, 10);
                e = !!lm[e + "x" + g];
                var h = f;
                if (e) {
                    var k = mm(f, g);
                    if (k) h = k, b.google_ad_format = k + "x" + g + "_0ads_al";
                    else throw new T("No slot size for availableWidth=" + f);
                }
                b.google_ad_resize = !0;
                b.google_ad_width = h;
                e || (b.google_ad_format = null, b.google_override_format = !0);
                f = h;
                a.style.width = f + "px";
                g = Om(f, "auto", c, a, b);
                h = f;
                g.size().i(c, b,
                    a);
                ym(g, h, b);
                g = g.size();
                b.google_responsive_formats = null;
                g.minWidth() > f && !e && (b.google_ad_width = g.minWidth(), a.style.width = g.minWidth() + "px")
            }
        }
        e = a.offsetWidth || Ci(a, c, "width", J) || b.google_ad_width || 0;
        f = Fa(Om, e, "auto", c, a, b, !1, !0);
        !(g = O(Me) || !(488 > Mf(c)) && !O(We)) && (g = O(Ye)) && (g = c === c.top, g || (sc(c) ? b.gfwrnwer = 3 : b.gfwrnwer = 16, g = !1), g = !g);
        if (g) d = !1;
        else {
            g = sc(c) || c;
            h = b.google_ad_client;
            d = g.location && "#ftptohbh" === g.location.hash ? 2 : vl(g.location, "google_responsive_slot_preview") || O(Xe) ? 1 : O(Ve) ? 2 : Vk(g, 1,
                h, d) ? 1 : 0;
            if (g = 0 !== d) b: if (b.google_reactive_ad_format || Um(c, b) || ri(a, b)) g = !1;
                else {
                    for (g = a; g; g = g.parentElement) {
                        h = vc(g, c);
                        if (!h) {
                            b.gfwrnwer = 18;
                            g = !1;
                            break b
                        }
                        if (!Xa(["static", "relative"], h.position)) {
                            b.gfwrnwer = 17;
                            g = !1;
                            break b
                        }
                    }
                    if (!O(We) && (g = vi(c, a, e, .3, b), !0 !== g)) {
                        b.gfwrnwer = g;
                        g = !1;
                        break b
                    }
                    g = c === c.top ? !0 : !1
                }
            g ? (b.google_resizing_allowed = !0, b.ovlp = !0, 2 === d ? (d = {}, ym(f(), e, d), b.google_resizing_width = d.google_ad_width, b.google_resizing_height = d.google_ad_height, b.iaaso = !1) : (b.google_ad_format = "auto", b.iaaso = !0, b.armr = 1), d = !0) : d = !1
        }
        if (e = Um(c, b)) Wm(e, a, b, c, d);
        else {
            if (ri(a, b)) {
                if (d = vc(a, c)) a.style.width = d.width, a.style.height = d.height, qi(d, b);
                b.google_ad_width || (b.google_ad_width = a.offsetWidth);
                b.google_ad_height || (b.google_ad_height = a.offsetHeight);
                b.google_loader_features_used = 256;
                b.google_responsive_auto_format = po(c)
            } else qi(a.style, b);
            c.location && "#gfwmrp" == c.location.hash || 12 == b.google_responsive_auto_format && "true" == b.google_full_width_responsive ? Wm(10, a, b, c, !1) : .01 > Math.random() && 12 === b.google_responsive_auto_format &&
                (a = wi(a.offsetWidth || parseInt(a.style.width, 10) || b.google_ad_width, c, a, b), !0 !== a ? (b.efwr = !1, b.gfwrnwer = a) : b.efwr = !0)
        }
    };

    function ro(a) {
        this.j = new p.Set;
        this.h = P(qe);
        this.u = (this.i = 0 < this.h && zc() < 1 / this.h) ? Rc(gd()) : 0;
        this.m = this.i ? ln(gd()) : "";
        this.l = null !== a && void 0 !== a ? a : new og(100)
    }

    function so() {
        var a = N(ro);
        var b = new pk;
        b = C(b, 1, a.u);
        b = C(b, 2, a.m);
        b = C(b, 3, a.h);
        var c = new ok;
        b = wb(b, 4, qk, c);
        a.i && !a.j.has(1) && (a.j.add(1), kg(a.l, b))
    };

    function to(a) {
        var b = window;
        var c = void 0 === c ? null : c;
        gc(b, "message", function(d) {
            try {
                var e = JSON.parse(d.data)
            } catch (f) {
                return
            }!e || "sc-cnf" !== e.googMsgType || c && /[:|%3A]javascript\(/i.test(d.data) && !c(e, d) || a(e, d)
        })
    };

    function uo(a, b) {
        b = void 0 === b ? 500 : b;
        ei.call(this);
        this.i = a;
        this.sa = b;
        this.h = null;
        this.m = {};
        this.l = null
    }
    v(uo, ei);
    uo.prototype.j = function() {
        this.m = {};
        this.l && (hc(this.i, this.l), delete this.l);
        delete this.m;
        delete this.i;
        delete this.h;
        ei.prototype.j.call(this)
    };

    function vo(a) {
        ei.call(this);
        this.h = a;
        this.i = null;
        this.l = !1
    }
    v(vo, ei);
    var wo = null,
        xo = [],
        yo = new p.Map,
        zo = -1;

    function Ao(a) {
        return Ki.test(a.className) && "done" != a.dataset.adsbygoogleStatus
    }

    function Bo(a, b, c) {
        a.dataset.adsbygoogleStatus = "done";
        Co(a, b, c)
    }

    function Co(a, b, c) {
        var d = window,
            e = gd();
        e.google_spfd || (e.google_spfd = qo);
        (e = b.google_reactive_ads_config) || qo(a, b, d, c);
        ao(d, b);
        if (!Do(a, b, d)) {
            e || (d.google_lpabyc = si(a, d) + Ci(a, d, "height", J));
            if (e) {
                e = e.page_level_pubvars || {};
                if (U(K).page_contains_reactive_tag && !U(K).allow_second_reactive_tag) {
                    if (e.pltais) {
                        tl(!1);
                        return
                    }
                    throw new T("Only one 'enable_page_level_ads' allowed per page.");
                }
                U(K).page_contains_reactive_tag = !0;
                tl(7 === e.google_pgb_reactive)
            }
            b.google_unique_id = cd(d);
            Ac(gn, function(f, g) {
                b[g] =
                    b[g] || d[g]
            });
            b.google_loader_used = "aa";
            b.google_reactive_tag_first = 1 === (U(K).first_tag_on_page || 0);
            aj(164, function() {
                io(d, b, a, c)
            })
        }
    }

    function Do(a, b, c) {
        var d = b.google_reactive_ads_config,
            e = "string" === typeof a.className && RegExp("(\\W|^)adsbygoogle-noablate(\\W|$)").test(a.className),
            f = rl(c);
        if (f && f.Ea && "on" != b.google_adtest && !e) {
            e = si(a, c);
            var g = Lf(c).clientHeight;
            if (!f.pa || f.pa && ((0 == g ? null : e / g) || 0) >= f.pa) return a.className += " adsbygoogle-ablated-ad-slot", c = c.google_sv_map = c.google_sv_map || {}, d = za(a), b.google_element_uid = d, c[b.google_element_uid] = b, a.setAttribute("google_element_uid", d), "slot" == f.rb && (null !== Hc(a.getAttribute("width")) &&
                a.setAttribute("width", 0), null !== Hc(a.getAttribute("height")) && a.setAttribute("height", 0), a.style.width = "0px", a.style.height = "0px"), !0
        }
        if ((f = vc(a, c)) && "none" == f.display && !("on" == b.google_adtest || 0 < b.google_reactive_ad_format || d)) return c.document.createComment && a.appendChild(c.document.createComment("No ad requested because of display:none on the adsbygoogle tag")), !0;
        a = null == b.google_pgb_reactive || 3 === b.google_pgb_reactive;
        return 1 !== b.google_reactive_ad_format && 8 !== b.google_reactive_ad_format ||
            !a ? !1 : (w.console && w.console.warn("Adsbygoogle tag with data-reactive-ad-format=" + b.google_reactive_ad_format + " is deprecated. Check out page-level ads at https://www.google.com/adsense"), !0)
    }

    function Eo(a) {
        var b = document.getElementsByTagName("INS");
        for (var c = 0, d = b[c]; c < b.length; d = b[++c]) {
            var e = d;
            if (Ao(e) && "reserved" != e.dataset.adsbygoogleStatus && (!a || d.id == a)) return d
        }
        return null
    }

    function Fo(a, b, c) {
        if (a && a.shift)
            for (var d = 20; 0 < a.length && 0 < d;) {
                try {
                    Go(a.shift(), b, c)
                } catch (e) {
                    setTimeout(function() {
                        throw e;
                    })
                }--d
            }
    }

    function Ho() {
        var a = uc("INS");
        a.className = "adsbygoogle";
        a.className += " adsbygoogle-noablate";
        Nc(a);
        return a
    }

    function Io(a, b) {
        var c = {};
        Ac(Hf, function(f, g) {
            !1 === a.enable_page_level_ads ? c[g] = !1 : a.hasOwnProperty(g) && (c[g] = a[g])
        });
        ya(a.enable_page_level_ads) && (c.page_level_pubvars = a.enable_page_level_ads);
        var d = Ho();
        Tc.body.appendChild(d);
        var e = {};
        e = (e.google_reactive_ads_config = c, e.google_ad_client = a.google_ad_client, e);
        e.google_pause_ad_requests = !!U(K).pause_ad_requests;
        Bo(d, e, b)
    }

    function Jo(a, b) {
        function c() {
            return Io(a, b)
        }
        Kf(w).wasPlaTagProcessed = !0;
        var d = w.document;
        if (d.body || "complete" == d.readyState || "interactive" == d.readyState) c();
        else {
            var e = fc(bj(191, c));
            gc(d, "DOMContentLoaded", e);
            (new w.MutationObserver(function(f, g) {
                d.body && (e(), g.disconnect())
            })).observe(d, {
                childList: !0,
                subtree: !0
            })
        }
    }

    function Go(a, b, c) {
        var d = {};
        aj(165, function() {
            Ko(a, d, b, c)
        }, function(e) {
            e.client = e.client || d.google_ad_client || a.google_ad_client;
            e.slotname = e.slotname || d.google_ad_slot;
            e.tag_origin = e.tag_origin || d.google_tag_origin
        })
    }

    function Lo(a) {
        delete a.google_checked_head;
        Ac(a, function(b, c) {
            Ji[c] || (delete a[c], w.console.warn("AdSense head tag doesn't support " + c.replace("google", "data").replace(/_/g, "-") + " attribute."))
        })
    }

    function Mo(a, b) {
        var c = K.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]:not([data-checked-head])') || K.document.querySelector('script[src*="/pagead/js/adsbygoogle.js"][data-ad-client]:not([data-checked-head])');
        if (c) {
            c.setAttribute("data-checked-head", "true");
            var d = U(window);
            if (d.head_tag_slot_vars) {
                if (O(Re)) {
                    No(c);
                    return
                }
                throw new T("Only one AdSense head tag supported per page. The second tag is ignored.");
            }
            var e = {};
            oo(c, e);
            Lo(e);
            var f = Mb(e);
            d.head_tag_slot_vars = f;
            c = {
                google_ad_client: e.google_ad_client,
                enable_page_level_ads: e
            };
            K.adsbygoogle || (K.adsbygoogle = []);
            d = K.adsbygoogle;
            d.loaded ? d.push(c) : d.splice(0, 0, c);
            var g;
            e.google_adbreak_test || (null == (g = Db(b, Ck, 13, Rk)) ? 0 : G(g, 3)) && O(bf) ? Oo(f, a) : to(function() {
                Oo(f, a)
            })
        }
    }

    function No(a) {
        var b = U(window).head_tag_slot_vars,
            c = a.getAttribute("src") || "";
        if ((a = qc(c) || a.getAttribute("data-ad-client") || "") && a !== b.google_ad_client) throw new T("Warning: Do not add multiple property codes with AdSense tag to avoid seeing unexpected behavior. These codes were found on the page " + a + ", " + b.google_ad_client);
    }

    function Po(a) {
        if ("object" === typeof a && null != a) {
            if ("string" === typeof a.type) return 2;
            if ("string" === typeof a.sound || "string" === typeof a.preloadAdBreaks) return 3
        }
        return 0
    }

    function Ko(a, b, c, d) {
        if (null == a) throw new T("push() called with no parameters.");
        14 === vb(d, Rk) && Qo(a, ob(Qk(d), 1), Bb(d, 2));
        var e = Po(a);
        if (0 !== e) O(Qe) && (d = ul(), d.first_slotcar_request_processing_time || (d.first_slotcar_request_processing_time = Date.now(), d.adsbygoogle_execution_start_time = Ia)), null == wo ? (Ro(a), xo.push(a)) : 3 === e ? aj(787, function() {
            wo.handleAdConfig(a)
        }) : wo.handleAdBreak(a).catch(dj(730));
        else {
            Ia = (new Date).getTime();
            bo(c, d, So(a));
            To();
            a: {
                if (void 0 != a.enable_page_level_ads) {
                    if ("string" ===
                        typeof a.google_ad_client) {
                        e = !0;
                        break a
                    }
                    throw new T("'google_ad_client' is missing from the tag config.");
                }
                e = !1
            }
            if (e) Uo(a, d);
            else if ((e = a.params) && Ac(e, function(g, h) {
                    b[h] = g
                }), "js" === b.google_ad_output) console.warn("Ads with google_ad_output='js' have been deprecated and no longer work. Contact your AdSense account manager or switch to standard AdSense ads.");
            else {
                e = Vo(a.element);
                oo(e, b);
                c = U(w).head_tag_slot_vars || {};
                Ac(c, function(g, h) {
                    b.hasOwnProperty(h) || (b[h] = g)
                });
                if (e.hasAttribute("data-require-head") &&
                    !U(w).head_tag_slot_vars) throw new T("AdSense head tag is missing. AdSense body tags don't work without the head tag. You can copy the head tag from your account on https://adsense.com.");
                if (!b.google_ad_client) throw new T("Ad client is missing from the slot.");
                b.google_apsail = al(b.google_ad_client);
                var f = (c = 0 === (U(K).first_tag_on_page || 0) && Bl(b)) && Cl(c);
                c && !f && (Uo(c, d), U(K).skip_next_reactive_tag = !0);
                0 === (U(K).first_tag_on_page || 0) && (U(K).first_tag_on_page = 2);
                b.google_pause_ad_requests = !!U(K).pause_ad_requests;
                Bo(e, b, d);
                c && f && Wo(c)
            }
        }
    }
    var Xo = !1;

    function Qo(a, b, c) {
        O(Oe) && !Xo && (Xo = !0, a = So(a) || ln(K), cj("predictive_abg", {
            a_c: a,
            p_c: b,
            b_v: c
        }, .01))
    }

    function So(a) {
        return a.google_ad_client ? a.google_ad_client : (a = a.params) && a.google_ad_client ? a.google_ad_client : ""
    }

    function To() {
        if (O(Ge)) {
            var a = rl(K);
            if (!(a = a && a.Ea)) {
                try {
                    var b = K.localStorage
                } catch (c) {
                    b = null
                }
                b = b ? Ej(b) : null;
                a = !(b && zk(b) && b)
            }
            a || sl(K, 1)
        }
    }

    function Wo(a) {
        Sc(function() {
            Kf(w).wasPlaTagProcessed || w.adsbygoogle && w.adsbygoogle.push(a)
        })
    }

    function Uo(a, b) {
        if (U(K).skip_next_reactive_tag) U(K).skip_next_reactive_tag = !1;
        else {
            0 === (U(K).first_tag_on_page || 0) && (U(K).first_tag_on_page = 1);
            if (a.tag_partner) {
                var c = a.tag_partner,
                    d = U(w);
                d.tag_partners = d.tag_partners || [];
                d.tag_partners.push(c)
            }
            U(K).ama_ran_on_page || El(new Dl(a, b));
            Jo(a, b)
        }
    }

    function Vo(a) {
        if (a) {
            if (!Ao(a) && (a.id ? a = Eo(a.id) : a = null, !a)) throw new T("'element' has already been filled.");
            if (!("innerHTML" in a)) throw new T("'element' is not a good DOM element.");
        } else if (a = Eo(), !a) throw new T("All ins elements in the DOM with class=adsbygoogle already have ads in them.");
        return a
    }

    function Yo() {
        var a = new ji(K),
            b = new uo(K),
            c = new vo(K),
            d = K.__cmp ? 1 : 0;
        a = ki(a) ? 1 : 0;
        var e, f;
        (f = "function" === typeof(null === (e = b.i) || void 0 === e ? void 0 : e.__uspapi)) || (b.h ? b = b.h : (b.h = Lc(b.i, "__uspapiLocator"), b = b.h), f = null != b);
        c.l || (c.i || (c.i = c.h.googlefc ? c.h : Lc(c.h, "googlefcPresent")), c.l = !0);
        cj("cmpMet", {
            tcfv1: d,
            tcfv2: a,
            usp: f ? 1 : 0,
            fc: c.i ? 1 : 0,
            ptt: 9
        }, P(pe))
    }

    function Zo(a) {
        a = {
            value: G(a, 16)
        };
        var b = .01;
        P(Ie) && (a.eid = P(Ie), b = 1);
        a.frequency = b;
        cj("new_abg_tag", a, b)
    }

    function $o(a) {
        Ij().S[Kj(26)] = !!Number(a)
    }

    function ap(a) {
        Number(a) ? U(K).pause_ad_requests = !0 : (U(K).pause_ad_requests = !1, a = function() {
            if (!U(K).pause_ad_requests) {
                var b = void 0 === b ? {} : b;
                if ("function" === typeof window.CustomEvent) var c = new CustomEvent("adsbygoogle-pub-unpause-ad-requests-event", b);
                else c = document.createEvent("CustomEvent"), c.initCustomEvent("adsbygoogle-pub-unpause-ad-requests-event", !!b.bubbles, !!b.cancelable, b.detail);
                K.dispatchEvent(c)
            }
        }, w.setTimeout(a, 0), w.setTimeout(a, 1E3))
    }

    function bp(a) {
        cj("adsenseGfpKnob", {
            value: a,
            ptt: 9
        }, .1);
        switch (a) {
            case 0:
            case 2:
                a = !0;
                break;
            case 1:
                a = !1;
                break;
            default:
                throw Error("Illegal value of cookieOptions: " + a);
        }
        K._gfp_a_ = a
    }

    function cp(a) {
        a && a.call && "function" === typeof a && window.setTimeout(a, 0)
    }

    function Oo(a, b) {
        (aa = zl(Qb(Tb(cc(b.qb).toString()), sf() ? {
            bust: sf()
        } : {})).then(function(c) {
            null == wo && (c.init(a), wo = c, dp())
        }).catch(dj(723)), t(aa, "finally")).call(aa, function() {
            xo.length = 0;
            cj("slotcar", {
                event: "api_ld",
                time: Date.now() - Ia,
                time_pr: Date.now() - zo
            })
        })
    }

    function dp() {
        for (var a = u(t(yo, "keys").call(yo)), b = a.next(); !b.done; b = a.next()) {
            b = b.value;
            var c = yo.get(b); - 1 !== c && (w.clearTimeout(c), yo.delete(b))
        }
        a = {};
        for (b = 0; b < xo.length; a = {
                ea: a.ea,
                aa: a.aa
            }, b++) yo.has(b) || (a.aa = xo[b], a.ea = Po(a.aa), aj(723, function(d) {
            return function() {
                3 === d.ea ? wo.handleAdConfig(d.aa) : 2 === d.ea && wo.handleAdBreakBeforeReady(d.aa).catch(dj(730))
            }
        }(a)))
    }

    function Ro(a) {
        var b = xo.length;
        if (2 === Po(a) && "preroll" === a.type && null != a.adBreakDone) {
            -1 === zo && (zo = Date.now());
            var c = w.setTimeout(function() {
                try {
                    (0, a.adBreakDone)({
                        breakType: "preroll",
                        breakName: a.name,
                        breakFormat: "preroll",
                        breakStatus: "timeout"
                    }), yo.set(b, -1), cj("slotcar", {
                        event: "pr_to",
                        source: "adsbygoogle"
                    })
                } catch (d) {
                    console.error("[Ad Placement API] adBreakDone callback threw an error:", d instanceof Error ? d : Error(String(d)))
                }
            }, 1E3 * P(cf));
            yo.set(b, c)
        }
    };
    (function(a, b, c, d) {
        d = void 0 === d ? function() {} : d;
        Zi.Sa(ej);
        aj(166, function() {
            var e = nn(b);
            dn(Bb(e, 2));
            Uk(G(e, 6));
            d();
            Wc(16, [1, e.toJSON()]);
            var f = Yc(Xc(K)) || K,
                g = c(en({
                    bb: a,
                    lb: Bb(e, 2)
                }), e);
            O(Ue) && Yk(f, e);
            jm(f, e, null === K.document.currentScript ? 1 : Jl(g.sb));
            so();
            if ((!Na() || 0 <= Ka(Qa(), 11)) && (null == (K.Prototype || {}).Version || !O(Le))) {
                $i(O(jf));
                mo(e);
                mk();
                try {
                    Hn()
                } catch (q) {}
                lo();
                Mo(g, e);
                f = window;
                var h = f.adsbygoogle;
                if (!h || !h.loaded) {
                    if (O(He) && !G(e, 16)) try {
                        if (K.document.querySelector('script[src*="/pagead/js/adsbygoogle.js?client="]')) return
                    } catch (q) {}
                    Zo(e);
                    P(pe) && Yo();
                    var k = {
                        push: function(q) {
                            Go(q, g, e)
                        },
                        loaded: !0
                    };
                    try {
                        Object.defineProperty(k, "requestNonPersonalizedAds", {
                            set: $o
                        }), Object.defineProperty(k, "pauseAdRequests", {
                            set: ap
                        }), Object.defineProperty(k, "cookieOptions", {
                            set: bp
                        }), Object.defineProperty(k, "onload", {
                            set: cp
                        })
                    } catch (q) {}
                    if (h)
                        for (var l = u(["requestNonPersonalizedAds", "pauseAdRequests", "cookieOptions"]), m = l.next(); !m.done; m = l.next()) m = m.value, void 0 !== h[m] && (k[m] = h[m]);
                    "_gfp_a_" in window || (window._gfp_a_ = !0);
                    Fo(h, g, e);
                    f.adsbygoogle = k;
                    h && (k.onload =
                        h.onload);
                    (f = ho(g)) && document.documentElement.appendChild(f)
                }
            }
        })
    })("m202201240101", mn, function(a, b) {
        var c = 2012 < D(b, 1, 0) ? "_fy" + D(b, 1, 0) : "",
            d = Bb(b, 3),
            e = Bb(b, 2);
        b = bd(Zm, a, c);
        d = bd($m, e, d);
        return {
            qb: b,
            ob: bd(an, a, c),
            mb: bd(bn, a, c),
            nb: bd(cn, a, c),
            tb: d,
            sb: /^(?:https?:)?\/\/(?:pagead2\.googlesyndication\.com|securepubads\.g\.doubleclick\.net)\/pagead\/(?:js\/)?(?:show_ads|adsbygoogle)\.js(?:[?#].*)?$/
        }
    });
}).call(this, "[2019,\"r20220126\",\"r20190131\",null,[],null,null,\".google.com.np\",null,null,[],[[[1082,null,null,[1]],[null,62,null,[null,0.001]],[383,null,null,[1]],[null,1126,null,[null,5000]],[1132,null,null,[1]],[1131,null,null,[1]],[null,1142,null,[null,8]],[null,1114,null,[null,1]],[null,1116,null,[null,300]],[null,1117,null,[null,100]],[null,1115,null,[null,1]],[1021,null,null,[1]],[null,66,null,[null,-1]],[null,65,null,[null,-1]],[1136,null,null,[1]],[1053,null,null,[1]],[1100,null,null,[1]],[1109,null,null,[1]],[1102,null,null,[1]],[null,1072,null,[null,0.75]],[1101,null,null,[1]],[1036,null,null,[1]],[1127,null,null,[1]],[null,1085,null,[null,5]],[null,63,null,[null,30]],[null,1080,null,[null,5]],[1054,null,null,[1]],[null,1027,null,[null,10]],[null,57,null,[null,120]],[null,1079,null,[null,5]],[null,1050,null,[null,30]],[null,58,null,[null,120]],[null,null,null,[null,null,null,[\"A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9\",\"A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9\",\"A4\/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme\/J33Q\/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9\"]],null,1934],[1903,null,null,[1]],[1953,null,null,[1]],[1938,null,null,[1]],[1948,null,null,[1]],[null,null,null,[null,null,null,[\"AxujKG9INjsZ8\/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=\",\"Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt\/P\/H4\/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"AxBHdr0J44vFBQtZUqX9sjiqf5yWZ\/OcHRcRMN3H9TH+t90V\/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9\",\"A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ==\"]],null,1932],[null,397907552,null,[null,500]]],[[10,[[1,[[21066108],[21066109,[[316,null,null,[1]]]]],null,null,null,34,18,1],[1,[[21066110],[21066111]],null,null,null,34,18,1],[1,[[42530528],[42530529,[[368,null,null,[1]]]],[42530530,[[369,null,null,[1]],[368,null,null,[1]]]]]],[1,[[42530887,[[290,null,null,[1]]]],[42530888,[[290,null,null,[1]]]],[42530889,[[290,null,null,[1]]]],[42530890,[[290,null,null,[1]]]],[42530891,[[290,null,null,[1]]]],[42530892,[[290,null,null,[1]]]],[42530893,[[290,null,null,[1]]]]],null,null,null,53],[200,[[42531397],[42531398,[[1135,null,null,[1]]]]]],[1,[[44719338],[44719339,[[334,null,null,[1]],[null,54,null,[null,100]],[null,66,null,[null,10]],[null,65,null,[null,1000]]]]]],[200,[[44750773],[44750774,[[1087,null,null,[1]]]]],null,null,null,57],[1,[[44756427],[44756428,[[1129,null,null,[1]]]],[44756429,[[1128,null,null,[1]]]]]],[10,[[44752536,[[1122,null,null,[1]],[1033,null,null,[1]]]],[44753656],[44753657,[[1033,null,null,[1]]]],[44753658,[[1033,null,null,[1]]]],[44753659,[[1033,null,null,[1]]]]]],[null,[[44755592],[44755593,[[1122,null,null,[1]],[1033,null,null,[1]]]],[44755594,[[1122,null,null,[1]],[1033,null,null,[1]]]],[44755653,[[1122,null,null,[1]],[1033,null,null,[1]]]]]],[20,[[182982000,[[218,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982100,[[217,null,null,[1]]],[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[20,[[182982200,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]],[182982300,null,[1,[[12,null,null,null,2,null,\"\\\\.wiki(dogs|how)(-fun)?\\\\.\"]]]]],null,null,null,36,8,1],[10,[[182984000,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984100,[[218,null,null,[1]]],[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,36,10,101],[10,[[182984200,null,[4,null,23,null,null,null,null,[\"1\"]]],[182984300,null,[4,null,23,null,null,null,null,[\"1\"]]]],null,null,null,36,10,101],[10,[[21066428],[21066429]]],[10,[[21066430],[21066431],[21066432],[21066433]],null,null,null,44,22],[10,[[21066434],[21066435]],null,null,null,44,null,500],[null,[[31062369],[31062370,[[380254521,null,null,[1]]]]],null,null,null,56],[50,[[31062422],[31062423,[[381914117,null,null,[1]]]]]],[10,[[31063938],[31063939,[[1125,null,null,[1]]]]]],[50,[[31064036],[31064037,[[1134,null,null,[1]]]]]],[1,[[31064180],[31064181,[[null,1137,null,[null,120]]]],[31064182,[[null,1137,null,[null,3600]]]]]],[10,[[31064183],[31064184,[[1959,null,null,[1]]]]]],[1000,[[31064527,[[null,null,14,[null,null,\"31064527\"]]],[6,null,null,null,6,null,\"31064527\"]],[31064528,[[null,null,14,[null,null,\"31064528\"]]],[6,null,null,null,6,null,\"31064528\"]]],[4,null,55]],[1000,[[31064543,[[null,null,14,[null,null,\"31064543\"]]],[6,null,null,null,6,null,\"31064543\"]],[31064544,[[null,null,14,[null,null,\"31064544\"]]],[6,null,null,null,6,null,\"31064544\"]]],[4,null,55]],[1,[[44736076],[44736077,[[null,1046,null,[null,0.1]]]]]],[10,[[44756554],[44756555,[[null,1130,null,[null,100]]]]]],[null,[[44757625,[[null,1103,null,[null,44757625]]]],[44757626,[[null,1103,null,[null,44757626]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44757627,[[null,1103,null,[null,44757627]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44757629,[[null,1103,null,[null,44757629]],[null,1114,null,[null,0.9]],[null,1106,null,[null,10]],[null,1115,null,[null,0.8]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44757630,[[null,1103,null,[null,44757630]],[null,1114,null,[null,0.9]],[null,1107,null,[null,10]],[null,1115,null,[null,0.8]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44757631,[[null,1103,null,[null,44757631]],[null,1114,null,[null,0.9]],[null,1105,null,[null,10]],[null,1115,null,[null,0.8]],[null,1119,null,[null,300]],[1120,null,null,[1]]]]]],[1,[[44757632,[[null,1103,null,[null,44757632]],[1121,null,null,[1]],[null,1119,null,[null,300]]]],[44757633,[[null,1103,null,[null,44757633]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44757634,[[null,1103,null,[null,44757634]],[null,1114,null,[null,0.9]],[null,1104,null,[null,100]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44757636,[[null,1103,null,[null,44757636]],[null,1114,null,[null,0.9]],[null,1106,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44757637,[[null,1103,null,[null,44757637]],[null,1114,null,[null,0.9]],[null,1107,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]],[44757638,[[null,1103,null,[null,44757638]],[null,1114,null,[null,0.9]],[null,1105,null,[null,10]],[null,1115,null,[null,0.8]],[1121,null,null,[1]],[null,1119,null,[null,300]],[1120,null,null,[1]]]]]],[150,[[31061760],[31061761,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]],[31062202,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]],[31063913,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],15],[50,[[31063202,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]],[31063912],[44753753,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]],[44756455,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]]]]],[3,[[4,null,8,null,null,null,null,[\"gmaSdk.getQueryInfo\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaQueryInfo.postMessage\"]],[4,null,8,null,null,null,null,[\"webkit.messageHandlers.getGmaSig.postMessage\"]]]],15],[100,[[31063221],[31063222,[[1954,null,null,[1]]]]]]]],[20,[[50,[[31062930],[31062931,[[380025941,null,null,[1]]]]],null,null,null,null,null,101,null,102]]],[11,[[2,[[44756083],[44756084,[[1957,null,null,[1]]]],[44756085,[[1957,null,null,[1]]]],[44756086,[[1957,null,null,[1]]]],[44756087,[[1957,null,null,[1]]]],[44756088,[[1957,null,null,[1]]]],[44756089,[[1957,null,null,[1]]]],[44757585,[[1957,null,null,[]]]],[44757586,[[1957,null,null,[1]]]]]],[500,[[31063741,null,[4,null,8,null,null,null,null,[\"top.frames.google_ads_top_frame\"]]],[31063742,[[null,1044,null,[null,200]]],[4,null,8,null,null,null,null,[\"top.frames.google_ads_top_frame\"]]]]]]],[13,[[10,[[44756894],[44756895,[[1947,null,null,[1]]]]]],[10,[[44756896],[44756897]]],[10,[[44756431],[44756432,[[1960,null,null,[1]]]]]],[10,[[44758226],[44758227]]],[10,[[44758228],[44758229]]],[1,[[31062554,null,[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/(9[23456789]|\\\\d{3,})\",[\"navigator.userAgent\"]]]]],[31062555,[[395842139,null,null,[1]]],[2,[[6,null,null,3,null,0],[12,null,null,null,4,null,\"Chrome\/(9[23456789]|\\\\d{3,})\",[\"navigator.userAgent\"]]]]]]],[1000,[[21067496]],[4,null,9,null,null,null,null,[\"document.hasTrustToken\"]]],[1000,[[31060475,null,[2,[[1,[[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]],[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]]]]]]],[500,[[31061692],[31061693,[[77,null,null,[1]],[78,null,null,[1]],[85,null,null,[1]],[80,null,null,[1]],[76,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31061691\"]]],[1,[[31062890],[31062891,[[397841828,null,null,[1]]]]]],[1,[[31062946]],[4,null,27,null,null,null,null,[\"document.prerendering\"]]],[1,[[31062947]],[1,[[4,null,27,null,null,null,null,[\"document.prerendering\"]]]]],[100,[[31063982],[31063983,[[419638674,null,null,[1]]]]],[4,null,6,null,null,null,null,[\"31063247\"]],45],[1,[[31064018],[31064019,[[1961,null,null,[1]]]]]]]],[17,[[10,[[31060047]],null,null,null,44,null,900],[10,[[31060048],[31060049]],null,null,null,null,null,null,null,101],[10,[[31060566]]]]],[12,[[1,[[31061828],[31061829,[[null,1032,null,[null,200],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,500]]]],[360245597,null,null,[1]],[null,494,null,[null,5000],[[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[null,5500]]]],[null,517,null,[null,1]]]]],null,15],[20,[[21065724],[21065725,[[203,null,null,[1]]]]],[4,null,9,null,null,null,null,[\"LayoutShift\"]]],[50,[[31060006,null,[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]],[31060007,[[1928,null,null,[1]]],[2,[[12,null,null,null,4,null,\"Android\",[\"navigator.userAgent\"]],[12,null,null,null,4,null,\"Chrome\/(89|9\\\\d|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]]]],null,21],[10,[[31060032],[31060033,[[1928,null,null,[1]]]]],null,21],[10,[[31061690],[31061691,[[83,null,null,[1]],[84,null,null,[1]]]]]],[1,[[31063244],[31063245,[[392736476,null,null,[1]]]]],null,45],[50,[[31063246],[31063247,[[392736476,null,null,[1]],[null,406149835,null,[null,0.01]]]]],[2,[[12,null,null,null,4,null,\"Chrome\/(9[3456789]|\\\\d{3,})\",[\"navigator.userAgent\"]],[4,null,9,null,null,null,null,[\"window.PeriodicSyncManager\"]]]],45],[10,[[31063910],[31063911,[[1948,null,null,[]]]]]]]]],null,null,[0.001,\"1000\",1,\"1000\"]],[null,[]],null,\"31064543\",null,null,1345169247]");
(function(sttc) {
    /* 
     
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    'use strict';
    var p, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
        if (a == Array.prototype || a == Object.prototype) return a;
        a[b] = c.value;
        return a
    };

    function ba(a) {
        a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global];
        for (var b = 0; b < a.length; ++b) {
            var c = a[b];
            if (c && c.Math == Math) return c
        }
        throw Error("Cannot find global object");
    }
    var ca = ba(this),
        da = "function" === typeof Symbol && "symbol" === typeof Symbol("x"),
        ea = {},
        fa = {};

    function ia(a, b, c) {
        if (b) a: {
            var d = a.split(".");a = 1 === d.length;
            var e = d[0],
                f;!a && e in ea ? f = ea : f = ca;
            for (e = 0; e < d.length - 1; e++) {
                var g = d[e];
                if (!(g in f)) break a;
                f = f[g]
            }
            d = d[d.length - 1];c = da && "es6" === c ? f[d] : null;b = b(c);null != b && (a ? aa(ea, d, {
                configurable: !0,
                writable: !0,
                value: b
            }) : b !== c && (void 0 === fa[d] && (a = 1E9 * Math.random() >>> 0, fa[d] = da ? ca.Symbol(d) : "$jscp$" + a + "$" + d), aa(f, fa[d], {
                configurable: !0,
                writable: !0,
                value: b
            })))
        }
    }
    ia("globalThis", function(a) {
        return a || ca
    }, "es_2020");
    var t = this || self;

    function ja(a) {
        var b = typeof a;
        b = "object" != b ? b : a ? Array.isArray(a) ? "array" : b : "null";
        return "array" == b || "object" == b && "number" == typeof a.length
    }

    function ka(a) {
        var b = typeof a;
        return "object" == b && null != a || "function" == b
    }

    function ma(a) {
        return Object.prototype.hasOwnProperty.call(a, na) && a[na] || (a[na] = ++oa)
    }
    var na = "closure_uid_" + (1E9 * Math.random() >>> 0),
        oa = 0;

    function qa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }

    function sa(a, b, c) {
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

    function ta(a, b, c) {
        Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ta = qa : ta = sa;
        return ta.apply(null, arguments)
    }

    function ua(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var d = c.slice();
            d.push.apply(d, arguments);
            return a.apply(this, d)
        }
    }

    function va() {
        return Date.now()
    }

    function wa(a, b) {
        a = a.split(".");
        var c = t;
        a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
        for (var d; a.length && (d = a.shift());) a.length || void 0 === b ? c[d] && c[d] !== Object.prototype[d] ? c = c[d] : c = c[d] = {} : c[d] = b
    }

    function xa(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.yi = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.ni = function(d, e, f) {
            for (var g = Array(arguments.length - 2), h = 2; h < arguments.length; h++) g[h - 2] = arguments[h];
            return b.prototype[e].apply(d, g)
        }
    }

    function ya(a) {
        return a
    };

    function za(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, za);
        else {
            const b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    xa(za, Error);
    za.prototype.name = "CustomError";
    var Aa;

    function Ba(a, b) {
        a = a.split("%s");
        for (var c = "", d = a.length - 1, e = 0; e < d; e++) c += a[e] + (e < b.length ? b[e] : "%s");
        za.call(this, c + a[d])
    }
    xa(Ba, za);
    Ba.prototype.name = "AssertionError";

    function Ca(a) {
        return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]
    }

    function Da(a, b) {
        if (b) a = a.replace(Ea, "&amp;").replace(Fa, "&lt;").replace(Ga, "&gt;").replace(Ha, "&quot;").replace(Ia, "&#39;").replace(Ja, "&#0;");
        else {
            if (!Ka.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(Ea, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(Fa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(Ga, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(Ha, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(Ia, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(Ja, "&#0;"))
        }
        return a
    }
    var Ea = /&/g,
        Fa = /</g,
        Ga = />/g,
        Ha = /"/g,
        Ia = /'/g,
        Ja = /\x00/g,
        Ka = /[\x00&<>"']/;

    function La(a, b) {
        let c = 0;
        a = Ca(String(a)).split(".");
        b = Ca(String(b)).split(".");
        const d = Math.max(a.length, b.length);
        for (let g = 0; 0 == c && g < d; g++) {
            var e = a[g] || "",
                f = b[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || ["", "", "", ""];
                f = /(\d*)(\D*)(.*)/.exec(f) || ["", "", "", ""];
                if (0 == e[0].length && 0 == f[0].length) break;
                c = Ma(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == f[1].length ? 0 : parseInt(f[1], 10)) || Ma(0 == e[2].length, 0 == f[2].length) || Ma(e[2], f[2]);
                e = e[3];
                f = f[3]
            } while (0 == c)
        }
        return c
    }

    function Ma(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    };

    function Na() {
        var a = t.navigator;
        return a && (a = a.userAgent) ? a : ""
    }

    function u(a) {
        return -1 != Na().indexOf(a)
    };

    function Oa() {
        return u("Opera")
    }

    function Pa() {
        return u("Trident") || u("MSIE")
    }

    function Qa() {
        return u("Firefox") || u("FxiOS")
    }

    function Ra() {
        return u("Safari") && !(Sa() || u("Coast") || Oa() || u("Edge") || u("Edg/") || u("OPR") || Qa() || u("Silk") || u("Android"))
    }

    function Sa() {
        return (u("Chrome") || u("CriOS")) && !u("Edge") || u("Silk")
    }

    function Ta() {
        return u("Android") && !(Sa() || Qa() || Oa() || u("Silk"))
    }

    function Ua(a) {
        const b = {};
        a.forEach(c => {
            b[c[0]] = c[1]
        });
        return c => b[c.find(d => d in b)] || ""
    }

    function Va() {
        var a = Na();
        if (Pa()) {
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
        let d;
        for (; d = c.exec(a);) b.push([d[1], d[2], d[3] || void 0]);
        a = Ua(b);
        return Oa() ? a(["Version", "Opera"]) :
            u("Edge") ? a(["Edge"]) : u("Edg/") ? a(["Edg"]) : u("Silk") ? a(["Silk"]) : Sa() ? a(["Chrome", "CriOS", "HeadlessChrome"]) : (a = b[2]) && a[1] || ""
    };

    function Wa(a, b) {
        if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
        for (let c = 0; c < a.length; c++)
            if (c in a && a[c] === b) return c;
        return -1
    }

    function Ya(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++) e in d && b.call(void 0, d[e], e, a)
    }

    function Za(a, b) {
        const c = a.length,
            d = [];
        let e = 0;
        const f = "string" === typeof a ? a.split("") : a;
        for (let g = 0; g < c; g++)
            if (g in f) {
                const h = f[g];
                b.call(void 0, h, g, a) && (d[e++] = h)
            }
        return d
    }

    function $a(a, b) {
        const c = a.length,
            d = Array(c),
            e = "string" === typeof a ? a.split("") : a;
        for (let f = 0; f < c; f++) f in e && (d[f] = b.call(void 0, e[f], f, a));
        return d
    }

    function ab(a, b, c) {
        let d = c;
        Ya(a, function(e, f) {
            d = b.call(void 0, d, e, f, a)
        });
        return d
    }

    function bb(a, b) {
        const c = a.length,
            d = "string" === typeof a ? a.split("") : a;
        for (let e = 0; e < c; e++)
            if (e in d && b.call(void 0, d[e], e, a)) return !0;
        return !1
    }

    function cb(a, b) {
        return 0 <= Wa(a, b)
    }

    function db(a, b) {
        b = Wa(a, b);
        let c;
        (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
        return c
    }

    function eb(a) {
        return Array.prototype.concat.apply([], arguments)
    }

    function fb(a) {
        const b = a.length;
        if (0 < b) {
            const c = Array(b);
            for (let d = 0; d < b; d++) c[d] = a[d];
            return c
        }
        return []
    }

    function gb(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }

    function hb(a) {
        const b = [];
        for (let c = 0; c < arguments.length; c++) {
            const d = arguments[c];
            if (Array.isArray(d))
                for (let e = 0; e < d.length; e += 8192) {
                    const f = hb.apply(null, gb(d, e, e + 8192));
                    for (let g = 0; g < f.length; g++) b.push(f[g])
                } else b.push(d)
        }
        return b
    }

    function ib(a, b) {
        b = b || Math.random;
        for (let c = a.length - 1; 0 < c; c--) {
            const d = Math.floor(b() * (c + 1)),
                e = a[c];
            a[c] = a[d];
            a[d] = e
        }
    };

    function jb(a) {
        jb[" "](a);
        return a
    }
    jb[" "] = function() {};

    function kb(a, b) {
        try {
            return jb(a[b]), !0
        } catch (c) {}
        return !1
    }

    function lb(a, b) {
        var c = mb;
        return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a)
    };
    var ob = Oa(),
        pb = Pa(),
        qb = u("Edge"),
        rb = qb || pb,
        sb = u("Gecko") && !(-1 != Na().toLowerCase().indexOf("webkit") && !u("Edge")) && !(u("Trident") || u("MSIE")) && !u("Edge"),
        tb = -1 != Na().toLowerCase().indexOf("webkit") && !u("Edge");

    function vb() {
        var a = t.document;
        return a ? a.documentMode : void 0
    }
    var wb;
    a: {
        var xb = "",
            yb = function() {
                var a = Na();
                if (sb) return /rv:([^\);]+)(\)|;)/.exec(a);
                if (qb) return /Edge\/([\d\.]+)/.exec(a);
                if (pb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                if (tb) return /WebKit\/(\S+)/.exec(a);
                if (ob) return /(?:Version)[ \/]?(\S+)/.exec(a)
            }();yb && (xb = yb ? yb[1] : "");
        if (pb) {
            var zb = vb();
            if (null != zb && zb > parseFloat(xb)) {
                wb = String(zb);
                break a
            }
        }
        wb = xb
    }
    var Ab = wb,
        mb = {};

    function Bb(a) {
        return lb(a, function() {
            return 0 <= La(Ab, a)
        })
    }
    var Cb;
    if (t.document && pb) {
        var Db = vb();
        Cb = Db ? Db : parseInt(Ab, 10) || void 0
    } else Cb = void 0;
    var Eb = Cb;
    Ta();
    Sa();
    Ra();
    var Fb = {},
        Gb = null;

    function Hb(a, b) {
        void 0 === b && (b = 0);
        if (!Gb) {
            Gb = {};
            for (var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), d = ["+/=", "+/", "-_=", "-_.", "-_"], e = 0; 5 > e; e++) {
                var f = c.concat(d[e].split(""));
                Fb[e] = f;
                for (var g = 0; g < f.length; g++) {
                    var h = f[g];
                    void 0 === Gb[h] && (Gb[h] = g)
                }
            }
        }
        b = Fb[b];
        c = Array(Math.floor(a.length / 3));
        d = b[64] || "";
        for (e = f = 0; f < a.length - 2; f += 3) {
            var l = a[f],
                k = a[f + 1];
            h = a[f + 2];
            g = b[l >> 2];
            l = b[(l & 3) << 4 | k >> 4];
            k = b[(k & 15) << 2 | h >> 6];
            h = b[h & 63];
            c[e++] = g + l + k + h
        }
        g = 0;
        h = d;
        switch (a.length - f) {
            case 2:
                g =
                    a[f + 1], h = b[(g & 15) << 2] || d;
            case 1:
                a = a[f], c[e] = b[a >> 2] + b[(a & 3) << 4 | g >> 4] + h + d
        }
        return c.join("")
    }

    function Ib(a) {
        for (var b = [], c = 0, d = 0; d < a.length; d++) {
            var e = a.charCodeAt(d);
            255 < e && (b[c++] = e & 255, e >>= 8);
            b[c++] = e
        }
        return Hb(b, 3)
    };
    var Jb = "function" === typeof Uint8Array;
    const Kb = Symbol(void 0);

    function Lb(a) {
        Object.isFrozen(a) || (Kb ? a[Kb] |= 1 : void 0 !== a.Bb ? a.Bb |= 1 : Object.defineProperties(a, {
            Bb: {
                value: 1,
                configurable: !0,
                writable: !0,
                enumerable: !1
            }
        }));
        return a
    };

    function Mb(a) {
        return null !== a && "object" === typeof a && !Array.isArray(a) && a.constructor === Object
    }
    let Nb;

    function Ob(a) {
        switch (typeof a) {
            case "number":
                return isFinite(a) ? a : String(a);
            case "object":
                if (a && !Array.isArray(a) && Jb && null != a && a instanceof Uint8Array) return Hb(a)
        }
        return a
    };

    function Pb(a, b) {
        if (null != a) {
            if (Array.isArray(a)) a = Qb(a, b);
            else if (Mb(a)) {
                const c = {};
                for (let d in a) Object.prototype.hasOwnProperty.call(a, d) && (c[d] = Pb(a[d], b));
                a = c
            } else a = b(a);
            return a
        }
    }

    function Qb(a, b) {
        const c = a.slice();
        for (let d = 0; d < c.length; d++) c[d] = Pb(c[d], b);
        if (b = Array.isArray(a)) {
            let d;
            Kb ? d = a[Kb] : d = a.Bb;
            b = (null == d ? 0 : d) & 1
        }
        b && Lb(c);
        return c
    }

    function Rb(a) {
        if (a && "object" == typeof a && a.toJSON) return a.toJSON();
        a = Ob(a);
        return Array.isArray(a) ? Qb(a, Rb) : a
    }

    function Sb(a) {
        return Jb && null != a && a instanceof Uint8Array ? new Uint8Array(a) : a
    };
    let Tb;

    function Ub(a, b) {
        Tb = b;
        a = new a(b);
        Tb = null;
        return a
    };

    function w(a, b, c) {
        var d = Tb;
        Tb = null;
        a || (a = d);
        d = this.constructor.messageId;
        a || (a = d ? [d] : []);
        this.C = (d ? 0 : -1) - (this.constructor.si || 0);
        this.j = void 0;
        this.A = a;
        a: {
            d = this.A.length;a = d - 1;
            if (d && (d = this.A[a], Mb(d))) {
                this.D = a - this.C;
                this.B = d;
                break a
            }
            void 0 !== b && -1 < b ? (this.D = Math.max(b, a + 1 - this.C), this.B = void 0) : this.D = Number.MAX_VALUE
        }
        if (c)
            for (b = 0; b < c.length; b++)
                if (a = c[b], a < this.D) a += this.C, (d = this.A[a]) ? Array.isArray(d) && Lb(d) : this.A[a] = Vb;
                else {
                    d = this.B || (this.B = this.A[this.D + this.C] = {});
                    let e = d[a];
                    e ? Array.isArray(e) &&
                        Lb(e) : d[a] = Vb
                }
    }
    const Vb = Object.freeze(Lb([]));

    function y(a, b, c = !1) {
        return -1 === b ? null : b >= a.D ? a.B ? a.B[b] : void 0 : c && a.B && (c = a.B[b], null != c) ? c : a.A[b + a.C]
    }

    function Wb(a, b) {
        return null != y(a, b)
    }

    function Xb(a, b, c = !1) {
        let d = y(a, b, c);
        null == d && (d = Vb);
        d === Vb && (d = Lb(d.slice()), z(a, b, d, c));
        return d
    }

    function $b(a, b) {
        a = y(a, b);
        return null == a ? a : +a
    }

    function B(a, b) {
        a = y(a, b);
        return null == a ? a : !!a
    }

    function ac(a, b, c) {
        a = y(a, b);
        return null == a ? c : a
    }

    function bc(a, b, c = !1) {
        a = B(a, b);
        return null == a ? c : a
    }

    function z(a, b, c, d = !1) {
        b < a.D && !d ? a.A[b + a.C] = c : (a.B || (a.B = a.A[a.D + a.C] = {}))[b] = c;
        return a
    }

    function cc(a, b, c) {
        return z(a, b, null == c ? Lb([]) : Array.isArray(c) ? Lb(c) : c, !1)
    }

    function dc(a, b, c, d) {
        c !== d ? z(a, b, c) : z(a, b, void 0, !1);
        return a
    }

    function ec(a, b, c, d) {
        (c = fc(a, c)) && c !== b && null != d && (a.j && c in a.j && (a.j[c] = void 0), z(a, c, void 0));
        return z(a, b, d)
    }

    function fc(a, b) {
        let c = 0;
        for (let d = 0; d < b.length; d++) {
            const e = b[d];
            null != y(a, e) && (0 !== c && z(a, c, void 0, !1), c = e)
        }
        return c
    }

    function C(a, b, c, d, e = !1) {
        if (-1 === c) return null;
        a.j || (a.j = {});
        const f = a.j[c];
        if (f) return f;
        e = y(a, c, e);
        if (null == e && !d) return f;
        b = new b(e);
        return a.j[c] = b
    }

    function G(a, b, c, d = !1) {
        a.j || (a.j = {});
        let e = a.j[c];
        if (!e) {
            d = Xb(a, c, d);
            e = [];
            for (let f = 0; f < d.length; f++) e[f] = new b(d[f]);
            a.j[c] = e
        }
        return e
    }

    function gc(a, b, c) {
        a.j || (a.j = {});
        let d = c ? c.A : c;
        a.j[b] = c;
        return z(a, b, d, !1)
    }

    function hc(a, b, c, d) {
        a.j || (a.j = {});
        let e = d ? d.A : d;
        a.j[b] = d;
        return ec(a, b, c, e)
    }

    function ic(a, b, c) {
        let d;
        if (c) {
            d = Lb([]);
            for (let e = 0; e < c.length; e++) d[e] = c[e].A;
            a.j || (a.j = {});
            a.j[b] = c
        } else a.j && (a.j[b] = void 0), d = Vb;
        return z(a, b, d, !1)
    }
    w.prototype.toJSON = function() {
        const a = this.A;
        return Nb ? a : Qb(a, Rb)
    };

    function jc(a, b) {
        return Ob(b)
    }

    function kc(a) {
        Nb = !0;
        try {
            return JSON.stringify(a.toJSON(), jc)
        } finally {
            Nb = !1
        }
    }

    function lc(a, b) {
        return Ub(a, b ? JSON.parse(b) : null)
    }

    function mc(a, b) {
        b.G && (a.G = b.G.slice());
        const c = b.j;
        if (c) {
            b = b.B;
            for (let f in c) {
                if (!Object.prototype.hasOwnProperty.call(c, f)) continue;
                const g = c[f];
                if (g) {
                    var d = !(!b || !b[f]),
                        e = +f;
                    if (Array.isArray(g)) {
                        if (g.length)
                            for (d = G(a, g[0].constructor, e, d), e = 0; e < Math.min(d.length, g.length); e++) mc(d[e], g[e])
                    } else(d = C(a, g.constructor, e, void 0, d)) && mc(d, g)
                }
            }
        }
    }

    function H(a, b) {
        return ac(a, b, "")
    }

    function nc(a, b, c, d) {
        c = fc(a, d) === c ? c : -1;
        return C(a, b, c)
    }

    function oc(a, b, c) {
        return dc(a, b, c, !1)
    }

    function pc(a, b) {
        return dc(a, b, 1, 0)
    };

    function qc(a, b) {
        this.j = a === rc && b || "";
        this.l = sc
    }
    qc.prototype.ha = !0;
    qc.prototype.ba = function() {
        return this.j
    };

    function tc(a) {
        return a instanceof qc && a.constructor === qc && a.l === sc ? a.j : "type_error:Const"
    }

    function uc(a) {
        return new qc(rc, a)
    }
    var sc = {},
        rc = {};
    var vc = uc("https://tpc.googlesyndication.com/sodar/%{basename}.js");

    function xc(a, b) {
        for (const c in a) b.call(void 0, a[c], c, a)
    }

    function yc(a, b) {
        const c = {};
        for (const d in a) b.call(void 0, a[d], d, a) && (c[d] = a[d]);
        return c
    }

    function zc(a) {
        var b = Ac;
        a: {
            for (const c in b)
                if (b[c] == a) {
                    a = !0;
                    break a
                }
            a = !1
        }
        return a
    }

    function Bc(a) {
        let b = 0;
        for (const c in a) b++
    }

    function Cc(a) {
        const b = {};
        for (const c in a) b[c] = a[c];
        return b
    }
    const Dc = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");

    function Ec(a, b) {
        let c, d;
        for (let e = 1; e < arguments.length; e++) {
            d = arguments[e];
            for (c in d) a[c] = d[c];
            for (let f = 0; f < Dc.length; f++) c = Dc[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c])
        }
    };
    var Fc = {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        command: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0
    };
    var Gc;

    function Hc() {
        if (void 0 === Gc) {
            var a = null,
                b = t.trustedTypes;
            if (b && b.createPolicy) {
                try {
                    a = b.createPolicy("goog#html", {
                        createHTML: ya,
                        createScript: ya,
                        createScriptURL: ya
                    })
                } catch (c) {
                    t.console && t.console.error(c.message)
                }
                Gc = a
            } else Gc = a
        }
        return Gc
    };
    const Ic = {};

    function Jc(a) {
        return a instanceof Kc && a.constructor === Kc ? a.j : "type_error:SafeScript"
    }
    class Kc {
        constructor(a, b) {
            this.j = b === Ic ? a : "";
            this.ha = !0
        }
        ba() {
            return this.j.toString()
        }
    }
    Kc.prototype.toString = function() {
        return this.j.toString()
    };
    var Mc = class {
        constructor(a, b) {
            this.j = b === Lc ? a : ""
        }
    };
    p = Mc.prototype;
    p.ha = !0;
    p.ba = function() {
        return this.j.toString()
    };
    p.hc = !0;
    p.va = function() {
        return 1
    };

    function Nc(a, b) {
        a = Oc.exec(Pc(a).toString());
        var c = a[3] || "";
        return Qc(a[1] + Rc("?", a[2] || "", b) + Rc("#", c, void 0))
    }
    p.toString = function() {
        return this.j + ""
    };

    function Pc(a) {
        return a instanceof Mc && a.constructor === Mc ? a.j : "type_error:TrustedResourceUrl"
    }

    function Sc(a, b) {
        var c = tc(a);
        if (!Tc.test(c)) throw Error("Invalid TrustedResourceUrl format: " + c);
        a = c.replace(Uc, function(d, e) {
            if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
            d = b[e];
            return d instanceof qc ? tc(d) : encodeURIComponent(String(d))
        });
        return Qc(a)
    }
    var Uc = /%{(\w+)}/g,
        Tc = RegExp("^((https:)?//[0-9a-z.:[\\]-]+/|/[^/\\\\]|[^:/\\\\%]+/|[^:/\\\\%]*[?#]|about:blank#)", "i"),
        Oc = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/,
        Lc = {};

    function Qc(a) {
        const b = Hc();
        a = b ? b.createScriptURL(a) : a;
        return new Mc(a, Lc)
    }

    function Rc(a, b, c) {
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
    var Wc = class {
        constructor(a, b) {
            this.j = b === Vc ? a : ""
        }
    };
    p = Wc.prototype;
    p.ha = !0;
    p.ba = function() {
        return this.j.toString()
    };
    p.hc = !0;
    p.va = function() {
        return 1
    };
    p.toString = function() {
        return this.j.toString()
    };

    function Xc(a) {
        return a instanceof Wc && a.constructor === Wc ? a.j : "type_error:SafeUrl"
    }
    var Yc = RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$', "i"),
        Zc = /^data:(.*);base64,[a-z0-9+\/]+=*$/i;

    function $c(a) {
        a = String(a);
        a = a.replace(/(%0A|%0D)/g, "");
        var b = a.match(Zc);
        return b && Yc.test(b[1]) ? new Wc(a, Vc) : null
    }
    var ad = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

    function bd(a) {
        a instanceof Wc || (a = "object" == typeof a && a.ha ? a.ba() : String(a), a = ad.test(a) ? new Wc(a, Vc) : $c(a));
        return a || cd
    }

    function dd(a, b) {
        if (a instanceof Wc) return a;
        a = "object" == typeof a && a.ha ? a.ba() : String(a);
        if (b && /^data:/i.test(a) && (b = $c(a) || cd, b.ba() == a)) return b;
        ad.test(a) || (a = "about:invalid#zClosurez");
        return new Wc(a, Vc)
    }
    var Vc = {},
        cd = new Wc("about:invalid#zClosurez", Vc);
    const gd = {};

    function hd(a) {
        return a instanceof id && a.constructor === id ? a.j : "type_error:SafeStyle"
    }

    function jd(a) {
        let b = "";
        for (let c in a)
            if (Object.prototype.hasOwnProperty.call(a, c)) {
                if (!/^[-_a-zA-Z0-9]+$/.test(c)) throw Error(`Name allows only [-_a-zA-Z0-9], got: ${c}`);
                let d = a[c];
                null != d && (d = Array.isArray(d) ? d.map(kd).join(" ") : kd(d), b += `${c}:${d};`)
            }
        return b ? new id(b, gd) : ld
    }
    class id {
        constructor(a, b) {
            this.j = b === gd ? a : "";
            this.ha = !0
        }
        ba() {
            return this.j
        }
        toString() {
            return this.j.toString()
        }
    }
    var ld = new id("", gd);

    function kd(a) {
        if (a instanceof Wc) return 'url("' + Xc(a).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
        if (a instanceof qc) a = tc(a);
        else {
            a = String(a);
            var b = a.replace(md, "$1").replace(md, "$1").replace(nd, "url");
            if (od.test(b)) {
                if (b = !pd.test(a)) {
                    let c = b = !0;
                    for (let d = 0; d < a.length; d++) {
                        const e = a.charAt(d);
                        "'" == e && c ? b = !b : '"' == e && b && (c = !c)
                    }
                    b = b && c && qd(a)
                }
                a = b ? rd(a) : "zClosurez"
            } else a = "zClosurez"
        }
        if (/[{;}]/.test(a)) throw new Ba("Value does not allow [{;}], got: %s.", [a]);
        return a
    }

    function qd(a) {
        let b = !0;
        const c = /^[-_a-zA-Z0-9]$/;
        for (let d = 0; d < a.length; d++) {
            const e = a.charAt(d);
            if ("]" == e) {
                if (b) return !1;
                b = !0
            } else if ("[" == e) {
                if (!b) return !1;
                b = !1
            } else if (!b && !c.test(e)) return !1
        }
        return b
    }
    const od = RegExp("^[-,.\"'%_!#/ a-zA-Z0-9\\[\\]]+$"),
        nd = RegExp("\\b(url\\([ \t\n]*)('[ -&(-\\[\\]-~]*'|\"[ !#-\\[\\]-~]*\"|[!#-&*-\\[\\]-~]*)([ \t\n]*\\))", "g"),
        md = RegExp("\\b(calc|cubic-bezier|fit-content|hsl|hsla|linear-gradient|matrix|minmax|repeat|rgb|rgba|(rotate|scale|translate)(X|Y|Z|3d)?|var)\\([-+*/0-9a-zA-Z.%#\\[\\], ]+\\)", "g"),
        pd = /\/\*/;

    function rd(a) {
        return a.replace(nd, (b, c, d, e) => {
            let f = "";
            d = d.replace(/^(['"])(.*)\1$/, (g, h, l) => {
                f = h;
                return l
            });
            b = bd(d).ba();
            return c + f + b + f + e
        })
    };
    const sd = {};
    class td {
        constructor(a, b) {
            this.j = b === sd ? a : "";
            this.ha = !0
        }
        ba() {
            return this.j
        }
    }
    td.prototype.toString = function() {
        return this.j.toString()
    };
    const ud = {};

    function vd(a) {
        return a instanceof wd && a.constructor === wd ? a.j : "type_error:SafeHtml"
    }

    function xd(a) {
        if (a instanceof wd) return a;
        const b = "object" == typeof a;
        let c = null;
        b && a.hc && (c = a.va());
        return yd(Da(b && a.ha ? a.ba() : String(a)), c)
    }

    function yd(a, b) {
        const c = Hc();
        a = c ? c.createHTML(a) : a;
        return new wd(a, b, ud)
    }

    function zd(a, b, c) {
        Ad(String(a));
        return Bd(String(a), b, c)
    }

    function Ad(a) {
        if (!Cd.test(a)) throw Error("");
        if (a.toUpperCase() in Dd) throw Error("");
    }

    function Bd(a, b, c) {
        var d = null;
        let e;
        e = `<${a}` + Ed(b);
        null == c ? c = [] : Array.isArray(c) || (c = [c]);
        !0 === Fc[a.toLowerCase()] ? e += ">" : (d = Fd(c), e += ">" + vd(d).toString() + "</" + a + ">", d = d.va());
        (a = b && b.dir) && (/^(ltr|rtl|auto)$/i.test(a) ? d = 0 : d = null);
        return yd(e, d)
    }

    function Gd(a) {
        const b = xd(Hd);
        let c = b.va();
        const d = [],
            e = f => {
                Array.isArray(f) ? f.forEach(e) : (f = xd(f), d.push(vd(f).toString()), f = f.va(), 0 == c ? c = f : 0 != f && c != f && (c = null))
            };
        a.forEach(e);
        return yd(d.join(vd(b).toString()), c)
    }

    function Fd(a) {
        return Gd(Array.prototype.slice.call(arguments))
    }

    function Ed(a) {
        var b = "";
        if (a)
            for (let e in a)
                if (Object.prototype.hasOwnProperty.call(a, e)) {
                    if (!Cd.test(e)) throw Error("");
                    var c = a[e];
                    if (null != c) {
                        var d = e;
                        if (c instanceof qc) c = tc(c);
                        else if ("style" == d.toLowerCase()) {
                            if (!ka(c)) throw Error("");
                            c instanceof id || (c = jd(c));
                            c = hd(c)
                        } else {
                            if (/^on/i.test(d)) throw Error("");
                            if (d.toLowerCase() in Id)
                                if (c instanceof Mc) c = Pc(c).toString();
                                else if (c instanceof Wc) c = Xc(c);
                            else if ("string" === typeof c) c = bd(c).ba();
                            else throw Error("");
                        }
                        c.ha && (c = c.ba());
                        d = `${d}="` + Da(String(c)) +
                            '"';
                        b += " " + d
                    }
                }
        return b
    }
    class wd {
        constructor(a, b, c) {
            this.j = c === ud ? a : "";
            this.l = b;
            this.ha = this.hc = !0
        }
        va() {
            return this.l
        }
        ba() {
            return this.j.toString()
        }
        toString() {
            return this.j.toString()
        }
    }
    const Cd = /^[a-zA-Z0-9-]+$/,
        Id = {
            action: !0,
            cite: !0,
            data: !0,
            formaction: !0,
            href: !0,
            manifest: !0,
            poster: !0,
            src: !0
        },
        Dd = {
            APPLET: !0,
            BASE: !0,
            EMBED: !0,
            IFRAME: !0,
            LINK: !0,
            MATH: !0,
            META: !0,
            OBJECT: !0,
            SCRIPT: !0,
            STYLE: !0,
            SVG: !0,
            TEMPLATE: !0
        };
    var Jd = yd("<!DOCTYPE html>", 0),
        Hd = new wd(t.trustedTypes && t.trustedTypes.emptyHTML || "", 0, ud),
        Kd = yd("<br>", 0);
    /* 
     
     SPDX-License-Identifier: Apache-2.0 
    */
    function Ld() {
        var a = "undefined" !== typeof window ? window.trustedTypes : void 0;
        return null !== a && void 0 !== a ? a : null
    }
    let Md;

    function Nd() {
        var a, b;
        if (void 0 === Md) try {
            Md = null !== (b = null === (a = Ld()) || void 0 === a ? void 0 : a.createPolicy("google#safe", {
                createHTML: c => c,
                createScript: c => c,
                createScriptURL: c => c
            })) && void 0 !== b ? b : null
        } catch (c) {
            Md = null
        }
        return Md
    };
    var Od = class {};
    class Pd extends Od {
        constructor(a) {
            super();
            this.j = a
        }
        toString() {
            return this.j.toString()
        }
    }

    function Qd(a) {
        var b;
        const c = null === (b = Nd()) || void 0 === b ? void 0 : b.createScriptURL(a);
        return new Pd(null !== c && void 0 !== c ? c : a)
    }

    function Rd(a) {
        if (a instanceof Pd) return a.j;
        throw Error("");
    }

    function Sd(a) {
        var b;
        a = Rd(a);
        return (null === (b = Ld()) || void 0 === b ? 0 : b.isScriptURL(a)) ? TrustedScriptURL.prototype.toString.apply(a) : a
    };
    var Td = class {};
    class Ud extends Td {
        constructor(a) {
            super();
            this.j = a
        }
        toString() {
            return this.j.toString()
        }
    }

    function Vd(a) {
        var b, c = null === (b = Nd()) || void 0 === b ? void 0 : b.createScript(a);
        return new Ud(null !== c && void 0 !== c ? c : a)
    }

    function Wd(a) {
        if (a instanceof Ud) return a.j;
        throw Error("");
    };
    var Xd = class {};
    class Yd extends Xd {
        constructor(a) {
            super();
            this.j = a
        }
        toString() {
            return this.j
        }
    }
    var Zd = new Yd("about:invalid#zTSz");

    function ae(a) {
        return a instanceof Od ? Rd(a) : Pc(a)
    }

    function be(a) {
        if (a instanceof Xd)
            if (a instanceof Yd) a = a.j;
            else throw Error("");
        else a = Xc(a);
        return a
    }

    function ce(a) {
        return Qc(ae(a).toString())
    };

    function de(a) {
        var b = ee(fe) || Zd;
        a.href = be(b)
    };

    function ge(a, b) {
        if (null !== a && void 0 !== a.tagName) {
            if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
            if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
        }
        a.innerHTML = vd(b)
    }

    function he(a, b) {
        a.style.cssText = hd(b)
    };

    function ie(a, b) {
        a.src = be(b)
    };
    const je = "alternate author bookmark canonical cite help icon license next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");

    function ke(a) {
        var b;
        const c = (a.ownerDocument && a.ownerDocument.defaultView || window).document,
            d = null === (b = c.querySelector) || void 0 === b ? void 0 : b.call(c, "script[nonce]");
        (b = d ? d.nonce || d.getAttribute("nonce") || "" : "") && a.setAttribute("nonce", b)
    }

    function le(a, b) {
        b = b instanceof Td ? Wd(b) : Jc(b);
        a.textContent = b;
        ke(a)
    }

    function me(a, b) {
        a.src = ae(b);
        ke(a)
    };

    function ne() {
        return !1
    }

    function oe() {
        return !0
    }

    function pe(a) {
        const b = arguments,
            c = b.length;
        return function() {
            for (let d = 0; d < c; d++)
                if (!b[d].apply(this, arguments)) return !1;
            return !0
        }
    }

    function qe(a) {
        return function() {
            return !a.apply(this, arguments)
        }
    }

    function re(a) {
        let b = !1,
            c;
        return function() {
            b || (c = a(), b = !0);
            return c
        }
    }

    function se(a) {
        let b = a;
        return function() {
            if (b) {
                const c = b;
                b = null;
                c()
            }
        }
    }

    function te(a, b) {
        let c = 0;
        return function(d) {
            t.clearTimeout(c);
            const e = arguments;
            c = t.setTimeout(function() {
                a.apply(b, e)
            }, 63)
        }
    }

    function ue(a, b) {
        function c() {
            e = t.setTimeout(d, 63);
            let h = g;
            g = [];
            a.apply(b, h)
        }

        function d() {
            e = 0;
            f && (f = !1, c())
        }
        let e = 0,
            f = !1,
            g = [];
        return function(h) {
            g = arguments;
            e ? f = !0 : c()
        }
    };
    var ve = {
            passive: !0
        },
        we = re(function() {
            let a = !1;
            try {
                const b = Object.defineProperty({}, "passive", {
                    get: function() {
                        a = !0
                    }
                });
                t.addEventListener("test", null, b)
            } catch (b) {}
            return a
        });

    function xe(a) {
        return a ? a.passive && we() ? a : a.capture || !1 : !1
    }

    function K(a, b, c, d) {
        return a.addEventListener ? (a.addEventListener(b, c, xe(d)), !0) : !1
    }

    function ye(a, b, c, d) {
        return a.removeEventListener ? (a.removeEventListener(b, c, xe(d)), !0) : !1
    };

    function ze(a) {
        var b = window;
        new Promise((c, d) => {
            function e() {
                var g;
                f.onload = null;
                f.onerror = null;
                null === (g = f.parentElement) || void 0 === g ? void 0 : g.removeChild(f)
            }
            const f = b.document.createElement("script");
            f.onload = () => {
                e();
                c()
            };
            f.onerror = () => {
                e();
                d(void 0)
            };
            f.type = "text/javascript";
            me(f, a);
            "complete" !== b.document.readyState ? K(b, "load", () => {
                b.document.body.appendChild(f)
            }) : b.document.body.appendChild(f)
        })
    };
    async function Ae(a) {
        var b = "https://pagead2.googlesyndication.com/getconfig/sodar" + `?sv=${200}&tid=${a.j}` + `&tv=${a.l}&st=` + `${a.Na}`;
        let c = void 0;
        try {
            c = await Be(b)
        } catch (g) {}
        if (c) {
            b = a.$a || c.sodar_query_id;
            var d = void 0 !== c.rc_enable && a.A ? c.rc_enable : "n",
                e = void 0 === c.bg_snapshot_delay_ms ? "0" : c.bg_snapshot_delay_ms,
                f = void 0 === c.is_gen_204 ? "1" : c.is_gen_204;
            if (b && c.bg_hash_basename && c.bg_binary) return {
                context: a.B,
                Ld: c.bg_hash_basename,
                Kd: c.bg_binary,
                ie: a.j + "_" + a.l,
                $a: b,
                Na: a.Na,
                Gb: d,
                Mb: e,
                Eb: f
            }
        }
    }
    let Be = a => new Promise((b, c) => {
        const d = new XMLHttpRequest;
        d.onreadystatechange = () => {
            d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c())
        };
        d.open("GET", a, !0);
        d.send()
    });
    async function Ce(a) {
        var b = await Ae(a);
        if (b) {
            a = window;
            let c = a.GoogleGcLKhOms;
            c && "function" === typeof c.push || (c = a.GoogleGcLKhOms = []);
            c.push({
                _ctx_: b.context,
                _bgv_: b.Ld,
                _bgp_: b.Kd,
                _li_: b.ie,
                _jk_: b.$a,
                _st_: b.Na,
                _rc_: b.Gb,
                _dl_: b.Mb,
                _g2_: b.Eb
            });
            if (b = a.GoogleDX5YKUSk) a.GoogleDX5YKUSk = void 0, b[1]();
            a = Sc(vc, {
                basename: "sodar2"
            });
            ze(a)
        }
    };

    function De(a, b) {
        return gc(a, 5, b)
    }

    function Ee(a, b) {
        return dc(a, 3, b, "")
    }
    var Fe = class extends w {
        constructor() {
            super(void 0)
        }
    };

    function Ge(a, b) {
        return dc(a, 1, b, "")
    }
    var He = class extends w {
        constructor(a) {
            super(a)
        }
    };

    function Ie(a) {
        switch (a) {
            case 1:
                return "gda";
            case 2:
                return "gpt";
            case 3:
                return "ima";
            case 4:
                return "pal";
            case 5:
                return "xfad";
            case 6:
                return "dv3n";
            case 7:
                return "spa";
            default:
                return "unk"
        }
    }
    var Je = class {
            constructor(a) {
                this.j = a.l;
                this.l = a.A;
                this.B = a.B;
                this.$a = a.$a;
                this.win = a.N();
                this.Na = a.Na;
                this.Gb = a.Gb;
                this.Mb = a.Mb;
                this.Eb = a.Eb;
                this.A = a.j
            }
        },
        Ke = class {
            constructor(a, b, c) {
                this.l = a;
                this.A = b;
                this.B = c;
                this.win = window;
                this.Na = "env";
                this.Gb = "n";
                this.Mb = "0";
                this.Eb = "1";
                this.j = !0
            }
            N() {
                return this.win
            }
            build() {
                return new Je(this)
            }
        };
    var Me = class extends w {
            constructor(a) {
                super(a, -1, Le)
            }
        },
        Le = [2, 3];

    function Ne(a, b) {
        return z(a, 1, b)
    }

    function Oe(a, b) {
        return z(a, 2, b)
    }

    function Pe(a, b) {
        return z(a, 3, b)
    }

    function Qe(a, b) {
        return z(a, 4, b)
    }
    var Re = class extends w {
        constructor() {
            super(void 0)
        }
        getVersion() {
            return y(this, 5)
        }
    };
    var Se = document,
        Te = window;
    var Ue = {
        Ue: "google_adtest",
        Ye: "google_ad_client",
        Ze: "google_ad_format",
        bf: "google_ad_height",
        qf: "google_ad_width",
        ff: "google_ad_layout",
        gf: "google_ad_layout_key",
        hf: "google_ad_output",
        jf: "google_ad_region",
        mf: "google_ad_slot",
        nf: "google_ad_type",
        pf: "google_ad_url",
        rf: "google_allow_expandable_ads",
        Ff: "google_analytics_domain_name",
        Gf: "google_analytics_uacct",
        Uf: "google_container_id",
        dg: "google_gl",
        xg: "google_enable_ose",
        Hg: "google_full_width_responsive",
        Gh: "google_rl_filtering",
        Fh: "google_rl_mode",
        Hh: "google_rt",
        Eh: "google_rl_dest_url",
        mh: "google_max_radlink_len",
        th: "google_num_radlinks",
        uh: "google_num_radlinks_per_unit",
        Xe: "google_ad_channel",
        lh: "google_max_num_ads",
        oh: "google_max_responsive_height",
        Pf: "google_color_border",
        wg: "google_enable_content_recommendations",
        ag: "google_content_recommendation_ui_type",
        $f: "google_source_type",
        Zf: "google_content_recommendation_rows_num",
        Yf: "google_content_recommendation_columns_num",
        Xf: "google_content_recommendation_ad_positions",
        bg: "google_content_recommendation_use_square_imgs",
        Rf: "google_color_link",
        Qf: "google_color_line",
        Tf: "google_color_url",
        Ve: "google_ad_block",
        lf: "google_ad_section",
        We: "google_ad_callback",
        Mf: "google_captcha_token",
        Sf: "google_color_text",
        Df: "google_alternate_ad_url",
        ef: "google_ad_host_tier_id",
        Nf: "google_city",
        cf: "google_ad_host",
        df: "google_ad_host_channel",
        Ef: "google_alternate_color",
        Of: "google_color_bg",
        yg: "google_encoding",
        Fg: "google_font_face",
        gg: "google_cust_ch",
        jg: "google_cust_job",
        ig: "google_cust_interests",
        hg: "google_cust_id",
        kg: "google_cust_u_url",
        Jg: "google_hints",
        Yg: "google_image_size",
        qh: "google_mtl",
        gi: "google_cpm",
        Wf: "google_contents",
        sh: "google_native_settings_key",
        cg: "google_country",
        Zh: "google_targeting",
        Gg: "google_font_size",
        ng: "google_disable_video_autoplay",
        li: "google_video_product_type",
        ki: "google_video_doc_id",
        ji: "google_cust_gender",
        Vh: "google_cust_lh",
        Uh: "google_cust_l",
        fi: "google_tfs",
        rh: "google_native_ad_template",
        eh: "google_kw",
        Wh: "google_tag_for_child_directed_treatment",
        Xh: "google_tag_for_under_age_of_consent",
        Jh: "google_region",
        fg: "google_cust_criteria",
        kf: "google_safe",
        eg: "google_ctr_threshold",
        Kh: "google_resizing_allowed",
        Mh: "google_resizing_width",
        Lh: "google_resizing_height",
        ii: "google_cust_age",
        LANGUAGE: "google_language",
        fh: "google_kw_type",
        Ah: "google_pucrd",
        zh: "google_page_url",
        Yh: "google_tag_partner",
        Qh: "google_restrict_data_processing",
        Re: "google_adbreak_test",
        $e: "google_ad_frequency_hint",
        Se: "google_admob_interstitial_slot",
        Te: "google_admob_rewarded_slot",
        kh: "google_max_ad_content_rating",
        Dh: "google_ad_public_floor",
        Bh: "google_ad_private_floor"
    };
    var Ve = re(function() {
        var a = document.createElement("div"),
            b = document.createElement("div");
        b.appendChild(document.createElement("div"));
        a.appendChild(b);
        b = a.firstChild.firstChild;
        a.innerHTML = vd(Hd);
        return !b.parentElement
    });

    function We(a, b) {
        if (Ve())
            for (; a.lastChild;) a.removeChild(a.lastChild);
        a.innerHTML = vd(b)
    }

    function Xe(a, b) {
        b = b instanceof Wc ? b : dd(b, /^data:image\//i.test(b));
        a.src = Xc(b)
    }
    var Ye = /^[\w+/_-]+[=]{0,2}$/;

    function Ze() {
        var a = t.document;
        return a.querySelector ? (a = a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && Ye.test(a) ? a : "" : ""
    };

    function $e(a, b, c) {
        return Math.min(Math.max(a, b), c)
    }

    function af(a) {
        return Array.prototype.reduce.call(arguments, function(b, c) {
            return b + c
        }, 0)
    }

    function bf(a) {
        return af.apply(null, arguments) / arguments.length
    };

    function cf(a, b) {
        this.x = void 0 !== a ? a : 0;
        this.y = void 0 !== b ? b : 0
    }
    cf.prototype.ceil = function() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this
    };
    cf.prototype.floor = function() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this
    };
    cf.prototype.round = function() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this
    };

    function df(a, b) {
        this.width = a;
        this.height = b
    }
    p = df.prototype;
    p.aspectRatio = function() {
        return this.width / this.height
    };
    p.isEmpty = function() {
        return !(this.width * this.height)
    };
    p.ceil = function() {
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    p.floor = function() {
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    p.round = function() {
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };

    function ef(a) {
        return a = Da(a, void 0)
    }

    function ff(a, b) {
        const c = {
            "&amp;": "&",
            "&lt;": "<",
            "&gt;": ">",
            "&quot;": '"'
        };
        let d;
        d = b ? b.createElement("div") : t.document.createElement("div");
        return a.replace(gf, function(e, f) {
            var g = c[e];
            if (g) return g;
            "#" == f.charAt(0) && (f = Number("0" + f.substr(1)), isNaN(f) || (g = String.fromCharCode(f)));
            g || (g = yd(e + " ", null), We(d, g), g = d.firstChild.nodeValue.slice(0, -1));
            return c[e] = g
        })
    }
    var gf = /&([^;\s<&]+);?/g;

    function hf() {
        return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ va()).toString(36)
    }

    function jf(a) {
        let b = 0;
        for (let c = 0; c < a.length; ++c) b = 31 * b + a.charCodeAt(c) >>> 0;
        return b
    }
    var kf = 2147483648 * Math.random() | 0;

    function lf(a) {
        return String(a).replace(/\-([a-z])/g, function(b, c) {
            return c.toUpperCase()
        })
    }

    function mf(a) {
        return a.replace(RegExp("(^|[\\s]+)([a-z])", "g"), function(b, c, d) {
            return c + d.toUpperCase()
        })
    };

    function nf(a) {
        return a ? new of (pf(a)) : Aa || (Aa = new of )
    }

    function qf(a, b) {
        xc(b, function(c, d) {
            c && "object" == typeof c && c.ha && (c = c.ba());
            "style" == d ? a.style.cssText = c : "class" == d ? a.className = c : "for" == d ? a.htmlFor = c : rf.hasOwnProperty(d) ? a.setAttribute(rf[d], c) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, c) : a[d] = c
        })
    }
    var rf = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        frameborder: "frameBorder",
        height: "height",
        maxlength: "maxLength",
        nonce: "nonce",
        role: "role",
        rowspan: "rowSpan",
        type: "type",
        usemap: "useMap",
        valign: "vAlign",
        width: "width"
    };

    function sf(a) {
        a = a.document;
        a = "CSS1Compat" == a.compatMode ? a.documentElement : a.body;
        return new df(a.clientWidth, a.clientHeight)
    }

    function tf(a) {
        var b = a.scrollingElement ? a.scrollingElement : tb || "CSS1Compat" != a.compatMode ? a.body || a.documentElement : a.documentElement;
        a = a.parentWindow || a.defaultView;
        return pb && Bb("10") && a.pageYOffset != b.scrollTop ? new cf(b.scrollLeft, b.scrollTop) : new cf(a.pageXOffset || b.scrollLeft, a.pageYOffset || b.scrollTop)
    }

    function uf(a) {
        return a ? a.parentWindow || a.defaultView : window
    }

    function vf(a, b, c, d) {
        function e(h) {
            h && b.appendChild("string" === typeof h ? a.createTextNode(h) : h)
        }
        for (; d < c.length; d++) {
            var f = c[d];
            if (!ja(f) || ka(f) && 0 < f.nodeType) e(f);
            else {
                a: {
                    if (f && "number" == typeof f.length) {
                        if (ka(f)) {
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
                Ya(g ? fb(f) : f, e)
            }
        }
    }

    function wf(a, b) {
        b = String(b);
        "application/xhtml+xml" === a.contentType && (b = b.toLowerCase());
        return a.createElement(b)
    }

    function xf(a) {
        var b, c = arguments.length;
        if (!c) return null;
        if (1 == c) return arguments[0];
        var d = [],
            e = Infinity;
        for (b = 0; b < c; b++) {
            for (var f = [], g = arguments[b]; g;) f.unshift(g), g = g.parentNode;
            d.push(f);
            e = Math.min(e, f.length)
        }
        f = null;
        for (b = 0; b < e; b++) {
            g = d[0][b];
            for (var h = 1; h < c; h++)
                if (g != d[h][b]) return f;
            f = g
        }
        return f
    }

    function pf(a) {
        return 9 == a.nodeType ? a : a.ownerDocument || a.document
    }
    var yf = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        zf = {
            IMG: " ",
            BR: "\n"
        };

    function Af(a) {
        var b = [];
        Bf(a, b, !0);
        a = b.join("");
        a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
        a = a.replace(/\u200B/g, "");
        a = a.replace(/ +/g, " ");
        " " != a && (a = a.replace(/^\s*/, ""));
        return a
    }

    function Bf(a, b, c) {
        if (!(a.nodeName in yf))
            if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
            else if (a.nodeName in zf) b.push(zf[a.nodeName]);
        else
            for (a = a.firstChild; a;) Bf(a, b, c), a = a.nextSibling
    }

    function Cf(a, b, c, d) {
        if (!b && !c) return null;
        var e = b ? String(b).toUpperCase() : null;
        return Df(a, function(f) {
            return (!e || f.nodeName == e) && (!c || "string" === typeof f.className && cb(f.className.split(/\s+/), c))
        }, d)
    }

    function Df(a, b, c) {
        for (var d = 0; a && (null == c || d <= c);) {
            if (b(a)) return a;
            a = a.parentNode;
            d++
        }
        return null
    }

    function of (a) {
        this.j = a || t.document || document
    }
    p = of .prototype;
    p.$d = function(a) {
        return "string" === typeof a ? this.j.getElementById(a) : a
    };
    p.Qe = of .prototype.$d;
    p.getElementsByTagName = function(a, b) {
        return (b || this.j).getElementsByTagName(String(a))
    };
    p.Ea = function(a, b, c) {
        var d = this.j,
            e = arguments,
            f = e[1],
            g = wf(d, String(e[0]));
        f && ("string" === typeof f ? g.className = f : Array.isArray(f) ? g.className = f.join(" ") : qf(g, f));
        2 < e.length && vf(d, g, e, 2);
        return g
    };
    p.createElement = function(a) {
        return wf(this.j, a)
    };
    p.createTextNode = function(a) {
        return this.j.createTextNode(String(a))
    };
    p.N = function() {
        var a = this.j;
        return a.parentWindow || a.defaultView
    };
    p.appendChild = function(a, b) {
        a.appendChild(b)
    };
    p.append = function(a, b) {
        vf(pf(a), a, arguments, 1)
    };
    p.canHaveChildren = function(a) {
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
    p.contains = function(a, b) {
        if (!a || !b) return !1;
        if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
        if ("undefined" != typeof a.compareDocumentPosition) return a == b || !!(a.compareDocumentPosition(b) & 16);
        for (; b && a != b;) b = b.parentNode;
        return b == a
    };
    p.Yd = xf;

    function Ef() {
        return !(u("iPad") || u("Android") && !u("Mobile") || u("Silk")) && (u("iPod") || u("iPhone") || u("Android") || u("IEMobile"))
    };
    var Ff = RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");

    function Gf(a) {
        return a ? decodeURI(a) : a
    };

    function Hf(a) {
        try {
            return !!a && null != a.location.href && kb(a, "foo")
        } catch (b) {
            return !1
        }
    }

    function If(a, b = !1, c = !1, d = t) {
        c = c ? Jf(d) : d;
        for (d = 0; c && 40 > d++ && (!b && !Hf(c) || !a(c));) c = Jf(c)
    }

    function Jf(a) {
        try {
            const b = a.parent;
            if (b && b != a) return b
        } catch (b) {}
        return null
    }

    function Kf(a) {
        return Hf(a.top) ? a.top : null
    }

    function Lf(a, b) {
        const c = Mf("SCRIPT", a);
        me(c, b);
        (a = a.getElementsByTagName("script")[0]) && a.parentNode && a.parentNode.insertBefore(c, a)
    }

    function Nf(a, b) {
        return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle
    }

    function Qf() {
        if (!ea.globalThis.crypto) return Math.random();
        try {
            const a = new Uint32Array(1);
            ea.globalThis.crypto.getRandomValues(a);
            return a[0] / 65536 / 65536
        } catch (a) {
            return Math.random()
        }
    }

    function Rf(a, b) {
        if (a)
            for (const c in a) Object.prototype.hasOwnProperty.call(a, c) && b(a[c], c, a)
    }

    function Sf(a) {
        const b = [];
        Rf(a, function(c) {
            b.push(c)
        });
        return b
    }

    function Tf(a) {
        const b = a.length;
        if (0 == b) return 0;
        let c = 305419896;
        for (let d = 0; d < b; d++) c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
        return 0 < c ? c : 4294967296 + c
    }
    var Vf = re(() => bb(["Google Web Preview", "Mediapartners-Google", "Google-Read-Aloud", "Google-Adwords"], Uf) || 1E-4 > Math.random());
    const Uf = a => -1 != Na().indexOf(a);
    var Wf = /^([0-9.]+)px$/,
        Xf = /^(-?[0-9.]{1,30})$/;

    function Yf(a, b = null) {
        if (!Xf.test(a)) return b;
        a = Number(a);
        return isNaN(a) ? b : a
    }

    function Zf(a) {
        return /^true$/.test(a)
    }

    function $f(a) {
        return (a = Wf.exec(a)) ? +a[1] : null
    }

    function ag() {
        var a = t.document.URL;
        if (!a) return "";
        const b = RegExp(".*[&#?]google_debug(=[^&]*)?(&.*)?$");
        try {
            const c = b.exec(decodeURIComponent(a));
            if (c) return c[1] && 1 < c[1].length ? c[1].substring(1) : "true"
        } catch (c) {}
        return ""
    }
    var bg = {
        sf: "allow-forms",
        tf: "allow-modals",
        uf: "allow-orientation-lock",
        vf: "allow-pointer-lock",
        wf: "allow-popups",
        xf: "allow-popups-to-escape-sandbox",
        yf: "allow-presentation",
        zf: "allow-same-origin",
        Af: "allow-scripts",
        Bf: "allow-top-navigation",
        Cf: "allow-top-navigation-by-user-activation"
    };
    const cg = re(() => Sf(bg));

    function dg() {
        var a = ["allow-top-navigation", "allow-modals", "allow-orientation-lock", "allow-presentation", "allow-pointer-lock"];
        const b = cg();
        return a.length ? Za(b, c => !cb(a, c)) : b
    }

    function eg() {
        const a = Mf("IFRAME"),
            b = {};
        Ya(cg(), c => {
            a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0)
        });
        return b
    }
    var fg = (a, b) => {
            try {
                return !(!a.frames || !a.frames[b])
            } catch (c) {
                return !1
            }
        },
        gg = (a, b) => {
            for (let c = 0; 50 > c; ++c) {
                if (fg(a, b)) return a;
                if (!(a = Jf(a))) break
            }
            return null
        },
        L = (a, b) => {
            Rf(b, (c, d) => {
                a.style.setProperty(d, c, "important")
            })
        },
        hg = {
            ["http://googleads.g.doubleclick.net"]: !0,
            ["http://pagead2.googlesyndication.com"]: !0,
            ["https://googleads.g.doubleclick.net"]: !0,
            ["https://pagead2.googlesyndication.com"]: !0
        },
        ig = /\.proxy\.googleprod\.com(:\d+)?$/;
    const jg = /.*domain\.test$/,
        kg = /\.prod\.google\.com(:\d+)?$/;
    var lg = a => !!hg[a] || ig.test(a) || jg.test(a) || kg.test(a);
    let mg = [];
    const ng = () => {
        const a = mg;
        mg = [];
        for (const b of a) try {
            b()
        } catch (c) {}
    };
    var og = (a, b) => {
        if ("number" !== typeof a.goog_pvsid) try {
            Object.defineProperty(a, "goog_pvsid", {
                value: Math.floor(Math.random() * 2 ** 52),
                configurable: !1
            })
        } catch (c) {
            b && b.wa(784, c)
        }
        a = Number(a.goog_pvsid);
        b && (!a || 0 >= a) && b.wa(784, Error(`Invalid correlator, ${a}`));
        return a || -1
    };

    function pg(a, b, c, d = []) {
        const e = new a.MutationObserver(f => {
            for (const g of f)
                for (const h of g.removedNodes)
                    if (d && (h === b || xf(h, b))) {
                        for (const l of d) l.disconnect();
                        d.length = 0;
                        c();
                        return
                    }
        });
        d.push(e);
        e.observe(a.document.documentElement, {
            childList: !0,
            subtree: !0
        });
        If(f => {
            if (!f.parent || !Hf(f.parent)) return !1;
            const g = f.parent.document.getElementsByTagName("iframe");
            for (let k = 0; k < g.length; k++) try {
                a: {
                    var h = g[k];
                    try {
                        var l = h.contentWindow || (h.contentDocument ? uf(h.contentDocument) : null);
                        break a
                    } catch (m) {}
                    l =
                    null
                }
                if (l == f) {
                    pg(f.parent, g[k], c, d);
                    break
                }
            }
            catch (m) {}
            return !1
        }, !1, !1, a)
    }
    var qg = (a, b) => {
            pg(uf(pf(a)), a, b)
        },
        rg = (a, b) => {
            "complete" === a.document.readyState ? (mg.push(b), 1 == mg.length && (window.Promise ? Promise.resolve().then(ng) : window.setImmediate ? setImmediate(ng) : setTimeout(ng, 0))) : a.addEventListener("load", b)
        },
        sg = (a, b) => {
            const c = Mf("DIV");
            c.id = a;
            c.textContent = b;
            L(c, {
                height: "24px",
                "line-height": "24px",
                "text-align": "center",
                "vertical-align": "middle",
                color: "white",
                "background-color": "black",
                margin: "0",
                "font-family": "Roboto",
                "font-style": "normal",
                "font-weight": "500",
                "font-size": "11px",
                "letter-spacing": "0.08em"
            });
            return c
        },
        tg = (a, b) => new Promise(c => {
            setTimeout(() => void c(b), a)
        });

    function ug(a) {
        if ("localhost" === a) return ["localhost"];
        a = a.split(".");
        if (2 > a.length) return [];
        const b = [];
        for (let c = 0; c < a.length - 1; ++c) b.push(a.slice(c).join("."));
        return b
    }

    function Mf(a, b = document) {
        return b.createElement(String(a).toLowerCase())
    }
    var vg = a => {
        let b = a;
        for (; a && a != a.parent;) a = a.parent, Hf(a) && (b = a);
        return b
    };

    function wg(a, b, c, d) {
        this.top = a;
        this.right = b;
        this.bottom = c;
        this.left = d
    }
    p = wg.prototype;
    p.getWidth = function() {
        return this.right - this.left
    };
    p.getHeight = function() {
        return this.bottom - this.top
    };

    function xg(a) {
        return new wg(a.top, a.right, a.bottom, a.left)
    }
    p.contains = function(a) {
        return this && a ? a instanceof wg ? a.left >= this.left && a.right <= this.right && a.top >= this.top && a.bottom <= this.bottom : a.x >= this.left && a.x <= this.right && a.y >= this.top && a.y <= this.bottom : !1
    };

    function yg(a, b) {
        return a.left <= b.right && b.left <= a.right && a.top <= b.bottom && b.top <= a.bottom
    }
    p.ceil = function() {
        this.top = Math.ceil(this.top);
        this.right = Math.ceil(this.right);
        this.bottom = Math.ceil(this.bottom);
        this.left = Math.ceil(this.left);
        return this
    };
    p.floor = function() {
        this.top = Math.floor(this.top);
        this.right = Math.floor(this.right);
        this.bottom = Math.floor(this.bottom);
        this.left = Math.floor(this.left);
        return this
    };
    p.round = function() {
        this.top = Math.round(this.top);
        this.right = Math.round(this.right);
        this.bottom = Math.round(this.bottom);
        this.left = Math.round(this.left);
        return this
    };

    function zg(a, b, c, d) {
        this.left = a;
        this.top = b;
        this.width = c;
        this.height = d
    }

    function Ag(a, b) {
        var c = Math.max(a.left, b.left),
            d = Math.min(a.left + a.width, b.left + b.width);
        if (c <= d) {
            var e = Math.max(a.top, b.top);
            a = Math.min(a.top + a.height, b.top + b.height);
            if (e <= a) return new zg(c, e, d - c, a - e)
        }
        return null
    }

    function Bg(a, b) {
        var c = Ag(a, b);
        if (!c || !c.height || !c.width) return [new zg(a.left, a.top, a.width, a.height)];
        c = [];
        var d = a.top,
            e = a.height,
            f = a.left + a.width,
            g = a.top + a.height,
            h = b.left + b.width,
            l = b.top + b.height;
        b.top > a.top && (c.push(new zg(a.left, a.top, a.width, b.top - a.top)), d = b.top, e -= b.top - a.top);
        l < g && (c.push(new zg(a.left, l, a.width, g - l)), e = l - d);
        b.left > a.left && c.push(new zg(a.left, d, b.left - a.left, e));
        h < f && c.push(new zg(h, d, f - h, e));
        return c
    }
    zg.prototype.contains = function(a) {
        return a instanceof cf ? a.x >= this.left && a.x <= this.left + this.width && a.y >= this.top && a.y <= this.top + this.height : this.left <= a.left && this.left + this.width >= a.left + a.width && this.top <= a.top && this.top + this.height >= a.top + a.height
    };
    zg.prototype.ceil = function() {
        this.left = Math.ceil(this.left);
        this.top = Math.ceil(this.top);
        this.width = Math.ceil(this.width);
        this.height = Math.ceil(this.height);
        return this
    };
    zg.prototype.floor = function() {
        this.left = Math.floor(this.left);
        this.top = Math.floor(this.top);
        this.width = Math.floor(this.width);
        this.height = Math.floor(this.height);
        return this
    };
    zg.prototype.round = function() {
        this.left = Math.round(this.left);
        this.top = Math.round(this.top);
        this.width = Math.round(this.width);
        this.height = Math.round(this.height);
        return this
    };
    const Cg = {
        "AMP-CAROUSEL": "ac",
        "AMP-FX-FLYING-CARPET": "fc",
        "AMP-LIGHTBOX": "lb",
        "AMP-STICKY-AD": "sa"
    };

    function Dg(a = t) {
        let b = a.context || a.AMP_CONTEXT_DATA;
        if (!b) try {
            b = a.parent.context || a.parent.AMP_CONTEXT_DATA
        } catch (c) {}
        try {
            if (b && b.pageViewId && b.canonicalUrl) return b
        } catch (c) {}
        return null
    }

    function Eg() {
        const a = Dg();
        return a && a.initialIntersection
    }

    function Fg() {
        const a = Eg();
        return a && ka(a.rootBounds) ? new df(a.rootBounds.width, a.rootBounds.height) : null
    }

    function Gg(a) {
        return (a = a || Dg()) ? Hf(a.master) ? a.master : null : null
    }

    function Hg(a, b) {
        const c = a.ampInaboxIframes = a.ampInaboxIframes || [];
        let d = () => {},
            e = () => {};
        b && (c.push(b), e = () => {
            a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
            db(c, b);
            d()
        });
        if (a.ampInaboxInitialized) return e;
        a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
        const f = g => {
            if (a.ampInaboxInitialized) g = !0;
            else {
                var h, l = "amp-ini-load" === g.data;
                a.ampInaboxPendingMessages && !l && (h = /^amp-(\d{15,20})?/.exec(g.data)) && (a.ampInaboxPendingMessages.push(g), g = h[1], a.ampInaboxInitialized ||
                    g && !/^\d{15,20}$/.test(g) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Lf(a.document, g ? Sc(uc("https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js"), {
                        ampVersion: g
                    }) : Qc(tc(uc("https://cdn.ampproject.org/amp4ads-host-v0.js")))));
                g = !1
            }
            g && d()
        };
        c.google_amp_listener_added || (c.google_amp_listener_added = !0, K(a, "message", f), d = () => {
            ye(a, "message", f)
        });
        return e
    };

    function Ig(a, b) {
        a.google_image_requests || (a.google_image_requests = []);
        const c = Mf("IMG", a.document);
        c.src = b;
        a.google_image_requests.push(c)
    }
    var Kg = (a, b) => {
            let c = `https://${"pagead2.googlesyndication.com"}/pagead/gen_204?id=${b}`;
            Rf(a, (d, e) => {
                d && (c += `&${e}=${encodeURIComponent(d)}`)
            });
            Jg(c)
        },
        Jg = a => {
            var b = window;
            b.fetch ? b.fetch(a, {
                keepalive: !0,
                credentials: "include",
                redirect: "follow",
                method: "get",
                mode: "no-cors"
            }) : Ig(b, a)
        };
    class Lg {
        constructor(a) {
            this.he = a
        }
    }

    function Mg(a) {
        return new Lg(b => b.substr(0, a.length + 1).toLowerCase() === a + ":")
    }
    const fe = [Mg("data"), Mg("http"), Mg("https"), Mg("mailto"), Mg("ftp"), new Lg(a => /^[^:]*([/?#]|$)/.test(a))];

    function ee(a = fe) {
        for (let b = 0; b < a.length; ++b) {
            const c = a[b];
            if (c instanceof Lg && c.he("#")) return new Yd("#")
        }
    };

    function N(a, ...b) {
        if (0 === b.length) return Qd(a[0]);
        const c = [a[0]];
        for (let d = 0; d < b.length; d++) c.push(encodeURIComponent(b[d])), c.push(a[d + 1]);
        return Qd(c.join(""))
    }

    function Ng(a, b) {
        let c = Sd(a);
        if (/#/.test(c)) throw Error("");
        let d = /\?/.test(c) ? "&" : "?";
        b.forEach((e, f) => {
            e = e instanceof Array ? e : [e];
            for (let g = 0; g < e.length; g++) {
                const h = e[g];
                null !== h && void 0 !== h && (c += d + encodeURIComponent(f) + "=" + encodeURIComponent(String(h)), d = "&")
            }
        });
        return Qd(c)
    };

    function Og(a) {
        return Vd(a[0])
    }

    function Pg(a) {
        return (...b) => {
            b = b.map(c => Vd(JSON.stringify(c).replace(/</g, "\\x3c")).toString());
            return Vd(`(${a.join("")})(${b.join(",")})`)
        }
    };

    function Qg(a, b, c) {
        if ("string" === typeof b)(b = Rg(a, b)) && (a.style[b] = c);
        else
            for (var d in b) {
                c = a;
                var e = b[d],
                    f = Rg(c, d);
                f && (c.style[f] = e)
            }
    }
    var Sg = {};

    function Rg(a, b) {
        var c = Sg[b];
        if (!c) {
            var d = lf(b);
            c = d;
            void 0 === a.style[d] && (d = (tb ? "Webkit" : sb ? "Moz" : pb ? "ms" : null) + mf(d), void 0 !== a.style[d] && (c = d));
            Sg[b] = c
        }
        return c
    }

    function Tg(a, b) {
        var c = pf(a);
        return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || "" : ""
    }

    function Ug(a, b) {
        return Tg(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b]
    }

    function Vg(a) {
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

    function Wg(a) {
        var b = pf(a),
            c = new cf(0, 0);
        var d = b ? pf(b) : document;
        d = !pb || 9 <= Number(Eb) || "CSS1Compat" == nf(d).j.compatMode ? d.documentElement : d.body;
        if (a == d) return c;
        a = Vg(a);
        b = tf(nf(b).j);
        c.x = a.left + b.x;
        c.y = a.top + b.y;
        return c
    }

    function Xg(a) {
        var b = Yg;
        if ("none" != Ug(a, "display")) return b(a);
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

    function Yg(a) {
        var b = a.offsetWidth,
            c = a.offsetHeight,
            d = tb && !b && !c;
        return (void 0 === b || d) && a.getBoundingClientRect ? (a = Vg(a), new df(a.right - a.left, a.bottom - a.top)) : new df(b, c)
    }

    function Zg(a, b) {
        if (/^\d+px?$/.test(b)) return parseInt(b, 10);
        var c = a.style.left,
            d = a.runtimeStyle.left;
        a.runtimeStyle.left = a.currentStyle.left;
        a.style.left = b;
        b = a.style.pixelLeft;
        a.style.left = c;
        a.runtimeStyle.left = d;
        return +b
    }

    function $g(a, b) {
        return (b = a.currentStyle ? a.currentStyle[b] : null) ? Zg(a, b) : 0
    }
    var ah = {
        thin: 2,
        medium: 4,
        thick: 6
    };

    function bh(a, b) {
        if ("none" == (a.currentStyle ? a.currentStyle[b + "Style"] : null)) return 0;
        b = a.currentStyle ? a.currentStyle[b + "Width"] : null;
        return b in ah ? ah[b] : Zg(a, b)
    };
    var ch = a => "number" === typeof a && 0 < a,
        eh = (a, b) => {
            a = dh(a);
            if (!a) return b;
            const c = b.slice(-1);
            return b + ("?" === c || "#" === c ? "" : "&") + a
        },
        dh = a => Object.entries(fh(a)).map(([b, c]) => `${b}=${encodeURIComponent(String(c))}`).join("&"),
        fh = a => {
            const b = {};
            Rf(a, (c, d) => {
                if (c || 0 === c || !1 === c) "boolean" === typeof c && (c = c ? 1 : 0), b[d] = c
            });
            return b
        },
        gh = () => {
            try {
                return Te.history.length
            } catch (a) {
                return 0
            }
        },
        hh = a => {
            a = Gg(Dg(a)) || a;
            a.google_unique_id = (a.google_unique_id || 0) + 1
        },
        ih = a => {
            a = a.google_unique_id;
            return "number" === typeof a ? a :
                0
        },
        jh = a => {
            a.u_tz = -(new Date).getTimezoneOffset();
            a.u_his = gh();
            let b;
            a.u_h = null == (b = Te.screen) ? void 0 : b.height;
            let c;
            a.u_w = null == (c = Te.screen) ? void 0 : c.width;
            let d;
            a.u_ah = null == (d = Te.screen) ? void 0 : d.availHeight;
            let e;
            a.u_aw = null == (e = Te.screen) ? void 0 : e.availWidth;
            let f;
            a.u_cd = null == (f = Te.screen) ? void 0 : f.colorDepth
        },
        kh = a => {
            let b;
            b = 9 !== a.nodeType && a.id;
            a: {
                if (a && a.nodeName && a.parentElement) {
                    var c = a.nodeName.toString().toLowerCase();
                    const d = a.parentElement.childNodes;
                    let e = 0;
                    for (let f = 0; f < d.length; ++f) {
                        const g =
                            d[f];
                        if (g.nodeName && g.nodeName.toString().toLowerCase() === c) {
                            if (a === g) {
                                c = "." + e;
                                break a
                            }++e
                        }
                    }
                }
                c = ""
            }
            return (a.nodeName && a.nodeName.toString().toLowerCase()) + (b ? "/" + b : "") + c
        },
        lh = !!window.google_async_iframe_id;
    let mh = lh && window.parent || window;
    var Q = () => {
            if (lh && !Hf(mh)) {
                let a = "." + Se.domain;
                try {
                    for (; 2 < a.split(".").length && !Hf(mh);) Se.domain = a = a.substr(a.indexOf(".") + 1), mh = window.parent
                } catch (b) {}
                Hf(mh) || (mh = window)
            }
            mh !== window && .01 > Math.random() && Kg({
                stack: Error().stack,
                aswift: window.google_async_iframe_id
            }, "badpubwin");
            return mh
        },
        nh = a => function() {
            if (a) {
                const b = a;
                a = null;
                b.apply(null, arguments)
            }
        },
        oh = () => {
            if (!Te) return !1;
            try {
                return !(!Te.navigator.standalone && !Te.top.navigator.standalone)
            } catch (a) {
                return !1
            }
        },
        ph = a => {
            let b;
            var c = a.ActiveXObject;
            if (a.navigator.plugins && a.navigator.mimeTypes.length) {
                if ((c = a.navigator.plugins["Shockwave Flash"]) && c.description) return c.description.replace(/([a-zA-Z]|\s)+/, "").replace(/(\s)+r/, ".")
            } else {
                if (a.navigator.userAgent && 0 <= a.navigator.userAgent.indexOf("Windows CE")) {
                    b = 3;
                    for (a = 1; a;) try {
                        a = new c("ShockwaveFlash.ShockwaveFlash." + (b + 1)), b++
                    } catch (d) {
                        a = null
                    }
                    return b.toString()
                }
                if (Pa()) {
                    a = null;
                    try {
                        a = new c("ShockwaveFlash.ShockwaveFlash.7")
                    } catch (d) {
                        b = 0;
                        try {
                            a = new c("ShockwaveFlash.ShockwaveFlash.6"), b = 6, a.AllowScriptAccess =
                                "always"
                        } catch (e) {
                            if (6 === b) return b.toString()
                        }
                        try {
                            a = new c("ShockwaveFlash.ShockwaveFlash")
                        } catch (e) {}
                    }
                    if (a) return b = a.GetVariable("$version").split(" ")[1], b.replace(/,/g, ".")
                }
            }
            return "0"
        },
        qh = a => (a = a.google_ad_format) ? 0 < a.indexOf("_0ads") : !1,
        rh = a => {
            let b = Number(a.google_ad_width),
                c = Number(a.google_ad_height);
            if (!(0 < b && 0 < c)) {
                a: {
                    try {
                        const e = String(a.google_ad_format);
                        if (e && e.match) {
                            const f = e.match(/(\d+)x(\d+)/i);
                            if (f) {
                                const g = parseInt(f[1], 10),
                                    h = parseInt(f[2], 10);
                                if (0 < g && 0 < h) {
                                    var d = {
                                        width: g,
                                        height: h
                                    };
                                    break a
                                }
                            }
                        }
                    } catch (e) {}
                    d = null
                }
                a = d;
                if (!a) return null;b = 0 < b ? b : a.width;c = 0 < c ? c : a.height
            }
            return {
                width: b,
                height: c
            }
        },
        sh = (a, b) => a.source !== b.contentWindow && a.source.parent !== b.contentWindow ? !1 : !0;
    class th {
        constructor(a, b) {
            this.error = a;
            this.context = b.context;
            this.msg = b.message || "";
            this.id = b.id || "jserror";
            this.meta = {}
        }
    };
    const uh = RegExp("^https?://(\\w|-)+\\.cdn\\.ampproject\\.(net|org)(\\?|/|$)");
    var vh = class {
            constructor(a, b) {
                this.j = a;
                this.l = b
            }
        },
        wh = class {
            constructor(a, b, c) {
                this.url = a;
                this.win = b;
                this.Pc = !!c;
                this.depth = null
            }
        };

    function xh(a, b) {
        const c = {};
        c[a] = b;
        return [c]
    }

    function yh(a, b, c, d, e) {
        const f = [];
        Rf(a, function(g, h) {
            (g = zh(g, b, c, d, e)) && f.push(h + "=" + g)
        });
        return f.join(b)
    }

    function zh(a, b, c, d, e) {
        if (null == a) return "";
        b = b || "&";
        c = c || ",$";
        "string" == typeof c && (c = c.split(""));
        if (a instanceof Array) {
            if (d = d || 0, d < c.length) {
                const f = [];
                for (let g = 0; g < a.length; g++) f.push(zh(a[g], b, c, d + 1, e));
                return f.join(c[d])
            }
        } else if ("object" == typeof a) return e = e || 0, 2 > e ? encodeURIComponent(yh(a, b, c, d, e + 1)) : "...";
        return encodeURIComponent(String(a))
    }

    function Ah(a) {
        let b = 1;
        for (const c in a.l) b = c.length > b ? c.length : b;
        return 3997 - b - a.A.length - 1
    }

    function Bh(a, b) {
        let c = "https://pagead2.googlesyndication.com" + b,
            d = Ah(a) - b.length;
        if (0 > d) return "";
        a.j.sort(function(f, g) {
            return f - g
        });
        b = null;
        let e = "";
        for (let f = 0; f < a.j.length; f++) {
            const g = a.j[f],
                h = a.l[g];
            for (let l = 0; l < h.length; l++) {
                if (!d) {
                    b = null == b ? g : b;
                    break
                }
                let k = yh(h[l], a.A, ",$");
                if (k) {
                    k = e + k;
                    if (d >= k.length) {
                        d -= k.length;
                        c += k;
                        e = a.A;
                        break
                    }
                    b = null == b ? g : b
                }
            }
        }
        a = "";
        null != b && (a = e + "trn=" + b);
        return c + a
    }
    class Ch {
        constructor() {
            this.A = "&";
            this.l = {};
            this.B = 0;
            this.j = []
        }
    };

    function Dh() {
        var a = Eh,
            b = t.google_srt;
        0 <= b && 1 >= b && (a.j = b)
    }

    function Fh(a, b, c, d, e) {
        if ((d ? a.j : Math.random()) < (e || .01)) try {
            let f;
            c instanceof Ch ? f = c : (f = new Ch, Rf(c, (h, l) => {
                var k = f,
                    m = k.B++;
                h = xh(l, h);
                k.j.push(m);
                k.l[m] = h
            }));
            const g = Bh(f, "/pagead/gen_204?id=" + b + "&");
            g && Ig(t, g)
        } catch (f) {}
    }
    class Gh {
        constructor() {
            this.j = Math.random()
        }
    };
    let Hh = null;

    function Ih() {
        if (null === Hh) {
            Hh = "";
            try {
                let a = "";
                try {
                    a = t.top.location.hash
                } catch (b) {
                    a = t.location.hash
                }
                if (a) {
                    const b = a.match(/\bdeid=([\d,]+)/);
                    Hh = b ? b[1] : ""
                }
            } catch (a) {}
        }
        return Hh
    };
    var Jh = () => {
            const a = t.performance;
            return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : va()
        },
        Kh = () => {
            const a = t.performance;
            return a && a.now ? a.now() : null
        };
    class Lh {
        constructor(a, b) {
            var c = Kh() || Jh();
            this.label = a;
            this.type = b;
            this.value = c;
            this.duration = 0;
            this.uniqueId = Math.random();
            this.slotId = void 0
        }
    };
    const Mh = t.performance,
        Nh = !!(Mh && Mh.mark && Mh.measure && Mh.clearMarks),
        Oh = re(() => {
            var a;
            if (a = Nh) a = Ih(), a = !!a.indexOf && 0 <= a.indexOf("1337");
            return a
        });

    function Ph(a) {
        a && Mh && Oh() && (Mh.clearMarks(`goog_${a.label}_${a.uniqueId}_start`), Mh.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))
    }

    function Qh() {
        var a = Rh;
        a.j = !1;
        a.events != a.l.google_js_reporting_queue && (Oh() && Ya(a.events, Ph), a.events.length = 0)
    }

    function Sh(a, b) {
        if (!a.j) return b();
        const c = a.start("491", 3);
        let d;
        try {
            d = b()
        } catch (e) {
            throw Ph(c), e;
        }
        a.end(c);
        return d
    }
    class Th {
        constructor(a) {
            this.events = [];
            this.l = a || t;
            let b = null;
            a && (a.google_js_reporting_queue = a.google_js_reporting_queue || [], this.events = a.google_js_reporting_queue, b = a.google_measure_js_timing);
            this.j = Oh() || (null != b ? b : 1 > Math.random())
        }
        start(a, b) {
            if (!this.j) return null;
            a = new Lh(a, b);
            b = `goog_${a.label}_${a.uniqueId}_start`;
            Mh && Oh() && Mh.mark(b);
            return a
        }
        end(a) {
            if (this.j && "number" === typeof a.value) {
                a.duration = (Kh() || Jh()) - a.value;
                var b = `goog_${a.label}_${a.uniqueId}_end`;
                Mh && Oh() && Mh.mark(b);
                !this.j ||
                    2048 < this.events.length || this.events.push(a)
            }
        }
    };

    function Uh(a) {
        let b = a.toString();
        a.name && -1 == b.indexOf(a.name) && (b += ": " + a.name);
        a.message && -1 == b.indexOf(a.message) && (b += ": " + a.message);
        a.stack && (b = Vh(a.stack, b));
        return b
    }

    function Vh(a, b) {
        try {
            -1 == a.indexOf(b) && (a = b + "\n" + a);
            let c;
            for (; a != c;) c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, "$1");
            return a.replace(/\n */g, "\n")
        } catch (c) {
            return b
        }
    }

    function Wh(a, b, c, d) {
        let e, f;
        try {
            a.j && a.j.j ? (f = a.j.start(b.toString(), 3), e = c(), a.j.end(f)) : e = c()
        } catch (g) {
            c = !0;
            try {
                Ph(f), c = a.B(b, new th(g, {
                    message: Uh(g)
                }), void 0, d)
            } catch (h) {
                a.wa(217, h)
            }
            if (c) {
                let h, l;
                null == (h = window.console) || null == (l = h.error) || l.call(h, g)
            } else throw g;
        }
        return e
    }

    function Xh(a, b, c, d, e) {
        return (...f) => Wh(a, b, () => c.apply(d, f), e)
    }
    class Yh {
        constructor(a = null) {
            this.l = Eh;
            this.Qb = null;
            this.B = this.wa;
            this.j = a;
            this.A = !1
        }
        la() {
            return this.l
        }
        wa(a, b, c, d, e) {
            e = e || "jserror";
            let f;
            try {
                const J = new Ch;
                var g = J;
                g.j.push(1);
                g.l[1] = xh("context", a);
                b.error && b.meta && b.id || (b = new th(b, {
                    message: Uh(b)
                }));
                if (b.msg) {
                    g = J;
                    var h = b.msg.substring(0, 512);
                    g.j.push(2);
                    g.l[2] = xh("msg", h)
                }
                var l = b.meta || {};
                b = l;
                if (this.Qb) try {
                    this.Qb(b)
                } catch (ra) {}
                if (d) try {
                    d(b)
                } catch (ra) {}
                d = J;
                l = [l];
                d.j.push(3);
                d.l[3] = l;
                d = t;
                l = [];
                b = null;
                do {
                    var k = d;
                    if (Hf(k)) {
                        var m = k.location.href;
                        b = k.document && k.document.referrer || null
                    } else m = b, b = null;
                    l.push(new wh(m || "", k));
                    try {
                        d = k.parent
                    } catch (ra) {
                        d = null
                    }
                } while (d && k != d);
                for (let ra = 0, nb = l.length - 1; ra <= nb; ++ra) l[ra].depth = nb - ra;
                k = t;
                if (k.location && k.location.ancestorOrigins && k.location.ancestorOrigins.length == l.length - 1)
                    for (m = 1; m < l.length; ++m) {
                        var n = l[m];
                        n.url || (n.url = k.location.ancestorOrigins[m - 1] || "", n.Pc = !0)
                    }
                var q = l;
                let Z = new wh(t.location.href, t, !1);
                k = null;
                const pa = q.length - 1;
                for (n = pa; 0 <= n; --n) {
                    var r = q[n];
                    !k && uh.test(r.url) && (k = r);
                    if (r.url &&
                        !r.Pc) {
                        Z = r;
                        break
                    }
                }
                r = null;
                const O = q.length && q[pa].url;
                0 != Z.depth && O && (r = q[pa]);
                f = new vh(Z, r);
                if (f.l) {
                    q = J;
                    var v = f.l.url || "";
                    q.j.push(4);
                    q.l[4] = xh("top", v)
                }
                var x = {
                    url: f.j.url || ""
                };
                if (f.j.url) {
                    var F = f.j.url.match(Ff),
                        A = F[1],
                        E = F[3],
                        D = F[4];
                    v = "";
                    A && (v += A + ":");
                    E && (v += "//", v += E, D && (v += ":" + D));
                    var I = v
                } else I = "";
                A = J;
                x = [x, {
                    url: I
                }];
                A.j.push(5);
                A.l[5] = x;
                Fh(this.l, e, J, this.A, c)
            } catch (J) {
                try {
                    Fh(this.l, e, {
                        context: "ecmserr",
                        rctx: a,
                        msg: Uh(J),
                        url: f && f.j.url
                    }, this.A, c)
                } catch (Z) {}
            }
            return !0
        }
    };
    const Zh = a => null !== a && void 0 !== a;

    function $h(a, b) {
        if (!b(a)) throw Error(String(a));
    };
    var ai = a => "string" === typeof a,
        bi = a => void 0 === a;
    var ci;
    ci = {
        Ch: 0,
        md: 3,
        nd: 4,
        pd: 5
    };
    var di = ci.md,
        ei = ci.nd,
        fi = ci.pd;

    function gi(a, ...b) {
        hi(a, ...b.map(c => ({
            Le: 7,
            message: c
        })))
    };

    function ii(a) {
        return function(...b) {
            try {
                return a.apply(this, b)
            } catch (c) {}
        }
    }
    var ji = ii(a => {
        const b = [];
        for (const c of a) ii(() => {
            b.push(`[{"${c.Le}":${kc(c.message)}}]`)
        })();
        return `[[${b.join(",")}]]`
    });
    var ki = (a, b) => {
        ea.globalThis.fetch(a, {
            method: "POST",
            body: b,
            keepalive: 65536 > b.length,
            credentials: "omit",
            mode: "no-cors",
            redirect: "follow"
        })
    };

    function hi(a, ...b) {
        ii(() => {
            a.l.push(...b);
            const c = ii(() => {
                const d = ji(a.l);
                a.A("https://pagead2.googlesyndication.com/pagead/ping?e=1", d);
                a.l = [];
                a.j = null
            });
            100 <= a.l.length ? (null !== a.j && clearTimeout(a.j), a.j = setTimeout(c, 0)) : null === a.j && (a.j = setTimeout(c, 100))
        })()
    }
    var li = class {
        constructor() {
            this.A = ki;
            this.l = [];
            this.j = null
        }
    };
    var mi = a => {
        var b = "ic";
        if (a.ic && a.hasOwnProperty(b)) return a.ic;
        b = new a;
        return a.ic = b
    };
    var ni = Zf("false");
    class oi {
        constructor(a) {
            this.methodName = a
        }
    }
    var pi = new oi(15),
        qi = new oi(2),
        ri = new oi(3),
        si = new oi(5),
        ti = new oi(6),
        ui = new oi(7),
        vi = new oi(8),
        wi = new oi(14),
        xi = (a, b, c) => b[a.methodName] || c || (() => {});

    function yi(a, b) {
        a.j = c => {
            xi(qi, b, () => [])(c, 1)
        };
        a.l = () => xi(ri, b, () => [])(1)
    }
    class zi {
        constructor() {
            this.j = () => {};
            this.l = () => []
        }
    };
    let Eh, Ai;
    const Rh = new Th(t);
    (a => {
        Eh = a || new Gh;
        "number" !== typeof t.google_srt && (t.google_srt = Math.random());
        Dh();
        Ai = new Yh(Rh);
        Ai.A = !0;
        "complete" == t.document.readyState ? t.google_measure_js_timing || Qh() : Rh.j && K(t, "load", () => {
            t.google_measure_js_timing || Qh()
        })
    })();
    var Bi = (a, b, c) => Wh(Ai, a, b, c),
        Ci = (a, b) => Xh(Ai, a, b, void 0, void 0),
        S = (a, b, c) => {
            const d = mi(zi).l();
            !b.eid && d.length && (b.eid = d.toString());
            Fh(Eh, a, b, !0, c)
        },
        Di = (a, b) => Ai.wa(a, b, void 0, void 0),
        Ei = a => b => {
            null != b || (b = "unnamed rejection");
            Di(a, b instanceof Error ? b : Error(b))
        };
    var Fi = (a, b) => {
        const c = ag();
        return a + (-1 == a.indexOf("?") ? "?" : "&") + [0 < c.length ? "google_debug" + (c ? "=" + c : "") + "&" : "", "xpc=", b, "&p=", encodeURIComponent(t.document.location.protocol), "//", encodeURIComponent(t.document.location.host)].join("")
    };
    Qc(tc(uc("https://pagead2.googlesyndication.com/pagead/expansion_embed.js")));
    var Gi = (a, b, c, d = null) => {
            const e = g => {
                let h;
                try {
                    h = JSON.parse(g.data)
                } catch (l) {
                    return
                }!h || h.googMsgType !== b || d && /[:|%3A]javascript\(/i.test(g.data) && !d(h, g) || c(h, g)
            };
            K(a, "message", e);
            let f = !1;
            return () => {
                let g = !1;
                f || (f = !0, g = ye(a, "message", e));
                return g
            }
        },
        Hi = (a, b, c, d = null) => {
            const e = Gi(a, b, pe(c, () => e()), d);
            return e
        },
        Ii = (a, b, c, d, e) => {
            if (!(0 >= e) && (c.googMsgType = b, a.postMessage(JSON.stringify(c), d), a = a.frames))
                for (let f = 0; f < a.length; ++f) 1 < e && Ii(a[f], b, c, d, --e)
        };

    function Ji(a, b, c, d) {
        lg(d.origin) && "expandable-xpc-ready" == c.notify && Ki(a, b)
    }

    function Ki(a, b) {
        var c = a.ec;
        c.google_eas_queue = c.google_eas_queue || [];
        c.google_eas_queue.push({
            a: a.id,
            b: a.url,
            c: a.width,
            d: a.height,
            e: a.Cc,
            f: a.we,
            g: a.Bd,
            h: a.ge,
            i: void 0
        });
        t.setTimeout(Ci(220, nh(() => {
            Lf(c.document, ce(b))
        })), 0)
    };
    var Mi = class extends w {
            constructor() {
                super(void 0, -1, Li)
            }
        },
        Li = [15];
    var Ni = class extends w {
        constructor() {
            super(void 0)
        }
        getCorrelator() {
            return ac(this, 1, 0)
        }
        setCorrelator(a) {
            return dc(this, 1, a, 0)
        }
    };
    var Oi = class extends w {
        constructor() {
            super(void 0)
        }
    };
    let Pi = null,
        Qi = null;
    var Ri = () => {
            if (null != Pi) return Pi;
            Pi = !1;
            try {
                const a = Kf(t);
                a && -1 !== a.location.hash.indexOf("google_logging") && (Pi = !0);
                t.localStorage.getItem("google_logging") && (Pi = !0)
            } catch (a) {}
            return Pi
        },
        Si = () => {
            if (null != Qi) return Qi;
            Qi = !1;
            try {
                const a = Kf(t);
                if (a && -1 !== a.location.hash.indexOf("auto_ads_logging") || t.localStorage.getItem("auto_ads_logging")) Qi = !0
            } catch (a) {}
            return Qi
        },
        Ti = (a, b = []) => {
            let c = !1;
            t.google_logging_queue || (c = !0, t.google_logging_queue = []);
            t.google_logging_queue.push([a, b]);
            c && Ri() && Lf(t.document,
                Qc(tc(uc("https://pagead2.googlesyndication.com/pagead/js/logging_library.js"))))
        };
    Qc(tc(uc("https://pagead2.googlesyndication.com/pagead/osd.js")));
    let Ui = (new Date).getTime();
    var Vi = a => {
        a = parseFloat(a);
        return isNaN(a) || 1 < a || 0 > a ? .05 : a
    };
    var aj = {
        Ug: 0,
        Tg: 1,
        Qg: 2,
        Lg: 3,
        Rg: 4,
        Mg: 5,
        Sg: 6,
        Og: 7,
        Pg: 8,
        Kg: 9,
        Ng: 10
    };
    var bj = {
        Wg: 0,
        Xg: 1,
        Vg: 2
    };

    function cj(a, b) {
        return a.left < b.right && b.left < a.right && a.top < b.bottom && b.top < a.bottom
    }

    function dj(a) {
        a = $a(a, b => new wg(b.top, b.right, b.bottom, b.left));
        a = ej(a);
        return {
            top: a.top,
            right: a.right,
            bottom: a.bottom,
            left: a.left
        }
    }

    function ej(a) {
        if (!a.length) throw Error("pso:box:m:nb");
        return ab(a.slice(1), (b, c) => {
            b.left = Math.min(b.left, c.left);
            b.top = Math.min(b.top, c.top);
            b.right = Math.max(b.right, c.right);
            b.bottom = Math.max(b.bottom, c.bottom);
            return b
        }, xg(a[0]))
    };
    var Ac = {
        Ih: 0,
        zg: 1,
        Cg: 2,
        Ag: 3,
        Bg: 4,
        Ig: 8,
        Th: 9,
        ih: 10,
        jh: 11,
        Ph: 16,
        mg: 17,
        lg: 24,
        gh: 25,
        If: 26,
        Hf: 27,
        od: 30,
        $g: 32,
        bh: 40
    };
    var fj = {
            overlays: 1,
            interstitials: 2,
            vignettes: 2,
            inserts: 3,
            immersives: 4,
            list_view: 5
        },
        gj = {
            [1]: 1,
            [2]: 1,
            [3]: 1,
            [4]: 1,
            [8]: 2,
            [27]: 3,
            [9]: 4,
            [30]: 5
        };

    function hj(a) {
        a.google_reactive_ads_global_state ? (null == a.google_reactive_ads_global_state.sideRailProcessedFixedElements && (a.google_reactive_ads_global_state.sideRailProcessedFixedElements = new Set), null == a.google_reactive_ads_global_state.sideRailAvailableSpace && (a.google_reactive_ads_global_state.sideRailAvailableSpace = new Map)) : a.google_reactive_ads_global_state = new ij;
        return a.google_reactive_ads_global_state
    }
    class ij {
        constructor() {
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
            this.floatingAdsStacking = new jj;
            this.sideRailProcessedFixedElements = new Set;
            this.sideRailAvailableSpace = new Map
        }
    }
    var jj = class {
        constructor() {
            this.maxZIndexRestrictions = {};
            this.nextRestrictionId = 0;
            this.maxZIndexListeners = []
        }
    };
    var kj = 728 * 1.38,
        lj = (a, b = 420) => (a = V(a).clientWidth) ? a > b ? 32768 : 320 > a ? 65536 : 0 : 16384,
        mj = a => {
            var b = V(a).clientWidth;
            a = a.innerWidth;
            return (b = b && a ? b / a : 0) ? 1.05 < b ? 262144 : .95 > b ? 524288 : 0 : 131072
        },
        oj = a => Math.max(0, nj(a, !0) - V(a).clientHeight),
        V = a => {
            a = a.document;
            let b = {};
            a && (b = "CSS1Compat" == a.compatMode ? a.documentElement : a.body);
            return b || {}
        },
        nj = (a, b) => {
            const c = V(a);
            return b ? c.scrollHeight == V(a).clientHeight ? c.offsetHeight : c.scrollHeight : c.offsetHeight
        },
        qj = (a, b) => pj(b) || 10 === b || !a.adCount ? !1 : 1 == b || 2 == b ? !(!a.adCount[1] &&
            !a.adCount[2]) : (a = a.adCount[b]) ? 1 <= a : !1,
        rj = (a, b) => a && a.source ? a.source === b || a.source.parent === b : !1,
        sj = a => void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset,
        tj = a => void 0 === a.pageXOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollLeft : a.pageXOffset,
        uj = a => {
            const b = {};
            let c;
            Array.isArray(a) ? c = a : a && a.key_value && (c = a.key_value);
            if (c)
                for (a = 0; a < c.length; a++) {
                    const d = c[a];
                    if ("key" in d && "value" in d) {
                        const e =
                            d.value;
                        b[d.key] = null == e ? null : String(e)
                    }
                }
            return b
        },
        vj = (a, b, c, d, e) => {
            Fh(c, b, {
                c: e.data.substring(0, 500),
                u: a.location.href.substring(0, 500)
            }, !0, .1);
            return !0
        },
        pj = a => 26 === a || 27 === a || 40 === a;

    function wj(a) {
        if (0 != a.j) throw Error("Already resolved/rejected.");
    }
    var zj = class {
        constructor() {
            this.l = new xj(this);
            this.j = 0
        }
        resolve(a) {
            wj(this);
            this.j = 1;
            this.B = a;
            yj(this.l)
        }
    };

    function yj(a) {
        switch (a.j.j) {
            case 0:
                break;
            case 1:
                a.l && a.l(a.j.B);
                break;
            case 2:
                a.A && a.A(a.j.A);
                break;
            default:
                throw Error("Unhandled deferred state.");
        }
    }
    var xj = class {
        constructor(a) {
            this.j = a
        }
        then(a, b) {
            if (this.l) throw Error("Then functions already set.");
            this.l = a;
            this.A = b;
            yj(this)
        }
    };

    function Aj(a, b) {
        Bj(a).forEach(b, void 0)
    }

    function Bj(a) {
        for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
        return b
    };

    function Cj(a, b) {
        return void 0 !== a.j[Dj(b)]
    }

    function Ej(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.l[c]);
        return b
    }

    function Fj(a) {
        var b = [],
            c;
        for (c in a.j) void 0 !== a.j[c] && a.j.hasOwnProperty(c) && b.push(a.j[c]);
        return b
    }
    const Gj = class {
        constructor() {
            this.j = {};
            this.l = {}
        }
        set(a, b) {
            const c = Dj(a);
            this.j[c] = b;
            this.l[c] = a
        }
        remove(a) {
            a = Dj(a);
            this.j[a] = void 0;
            this.l[a] = void 0
        }
        get(a, b) {
            a = Dj(a);
            return void 0 !== this.j[a] ? this.j[a] : b
        }
        Ya() {
            return Ej(this).length
        }
        clear() {
            this.j = {};
            this.l = {}
        }
    };

    function Dj(a) {
        return a instanceof Object ? String(ma(a)) : a + ""
    };
    const Hj = class {
        constructor(a) {
            this.j = new Gj;
            if (a)
                for (var b = 0; b < a.length; ++b) this.add(a[b])
        }
        add(a) {
            this.j.set(a, !0)
        }
        remove(a) {
            this.j.remove(a)
        }
        contains(a) {
            return Cj(this.j, a)
        }
    };
    const Ij = new Hj("IMG AMP-IMG IFRAME AMP-IFRAME HR EMBED OBJECT VIDEO AMP-VIDEO INPUT BUTTON SVG".split(" "));
    var Lj = (a, b) => {
        const c = new Jj(a, b);
        return () => Kj(c)
    };

    function Kj(a) {
        if (a.j) return !1;
        if (null == a.l) return Mj(a), !0;
        const b = a.l + 1E3 - (new Date).getTime();
        if (1 > b) return Mj(a), !0;
        Nj(a, b);
        return !0
    }

    function Mj(a) {
        a.l = (new Date).getTime();
        a.B()
    }

    function Nj(a, b) {
        a.j = !0;
        a.A.setTimeout(() => {
            a.j = !1;
            Mj(a)
        }, b)
    }
    class Jj {
        constructor(a, b) {
            this.A = a;
            this.B = b;
            this.l = null;
            this.j = !1
        }
    };

    function Oj(a, b) {
        return {
            top: a.j - b,
            right: a.A + a.l,
            bottom: a.j + b,
            left: a.A
        }
    }
    class Pj {
        constructor(a, b, c) {
            this.A = a;
            this.j = b;
            this.l = c
        }
    };

    function Qj(a, b) {
        a = a.getBoundingClientRect();
        return new Rj(a.top + sj(b), a.bottom - a.top)
    }

    function Sj(a) {
        return new Rj(Math.round(a.j), Math.round(a.l))
    }
    class Rj {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        getHeight() {
            return this.l
        }
    };

    function Tj(a, b) {
        a.D ? b(a.A) : a.l.push(b)
    }

    function Uj(a, b) {
        a.D = !0;
        a.A = b;
        a.l.forEach(c => {
            c(a.A)
        });
        a.l = []
    }
    class Vj {
        constructor(a) {
            this.j = a;
            this.l = [];
            this.D = !1;
            this.C = this.A = null;
            this.G = Lj(a, () => {
                if (null != this.C) {
                    var b = nj(this.j, !0) - this.C;
                    1E3 < b && Uj(this, b)
                }
            });
            this.B = null
        }
        init(a, b) {
            null == a ? (this.C = a = nj(this.j, !0), this.j.addEventListener("scroll", this.G), null != b && b(a)) : this.B = this.j.setTimeout(() => {
                this.init(void 0, b)
            }, a)
        }
        ea() {
            null != this.B && this.j.clearTimeout(this.B);
            this.j.removeEventListener("scroll", this.G);
            this.l = [];
            this.A = null
        }
    };
    var Wj = (a, b) => a.reduce((c, d) => c.concat(b(d)), []);
    class Xj {
        constructor(a = 1) {
            this.j = a
        }
    };

    function Yj(a, b, c) {
        const d = [];
        for (const e of a.j) b(e) ? d.push(e) : c(e);
        return new Zj(d)
    }

    function ak(a, b = 1) {
        a = a.j.slice(0);
        const c = new Xj(b);
        ib(a, () => {
            var d = 48271 * c.j % 2147483647;
            c.j = 0 > 2147483647 * d ? d + 2147483647 : d;
            return c.j / 2147483647
        });
        return new Zj(a)
    }
    const Zj = class {
        constructor(a) {
            this.j = a.slice(0)
        }
        forEach(a) {
            this.j.forEach((b, c) => void a(b, c, this))
        }
        filter(a) {
            return new Zj(Za(this.j, a))
        }
        apply(a) {
            return new Zj(a(this.j.slice(0)))
        }
        sort(a) {
            return new Zj(this.j.slice(0).sort(a))
        }
        get(a) {
            return this.j[a]
        }
        add(a) {
            const b = this.j.slice(0);
            b.push(a);
            return new Zj(b)
        }
    };
    class bk {
        constructor(a) {
            this.j = new Hj(a)
        }
        contains(a) {
            return this.j.contains(a)
        }
    };

    function ck(a, b, c = !1) {
        a.l.push(b);
        c && b(a.j)
    }

    function dk(a, b) {
        a.j = b;
        Ya(a.l, c => {
            c(a.j)
        })
    }

    function ek(a, b) {
        ck(b, c => dk(a, c), !0)
    }
    class fk {
        constructor(a) {
            this.j = a;
            this.l = []
        }
        map(a) {
            const b = new fk(a(this.j));
            ck(this, c => dk(b, a(c)));
            return b
        }
    };

    function gk(a) {
        return new hk({
            value: a
        }, null)
    }

    function ik(a) {
        return new hk(null, Error(a))
    }

    function jk(a) {
        try {
            return gk(a())
        } catch (b) {
            return new hk(null, b)
        }
    }

    function kk(a) {
        return null != a.j ? a.j.value : null
    }

    function lk(a, b) {
        null != a.j && b(a.j.value)
    }

    function mk(a, b) {
        null != a.j || b(a.l);
        return a
    }
    class hk {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        map(a) {
            return null != this.j ? (a = a(this.j.value), a instanceof hk ? a : gk(a)) : this
        }
    };
    class nk {
        constructor() {
            this.j = new Gj
        }
        set(a, b) {
            let c = this.j.get(a);
            c || (c = new Hj, this.j.set(a, c));
            c.add(b)
        }
    };
    var pk = class extends w {
            constructor(a) {
                super(a, -1, ok)
            }
            getId() {
                return y(this, 3)
            }
        },
        ok = [4];
    class qk {
        constructor(a, {
            Ac: b,
            sd: c,
            ee: d,
            bd: e
        }) {
            this.C = a;
            this.A = c;
            this.B = new Zj(b || []);
            this.l = e;
            this.j = d
        }
    };
    var rk = a => {
            var b = a.split("~").filter(c => 0 < c.length);
            a = new Gj;
            for (const c of b) b = c.indexOf("."), -1 == b ? a.set(c, "") : a.set(c.substring(0, b), c.substring(b + 1));
            return a
        },
        tk = a => {
            var b = sk(a);
            a = [];
            for (let c of b) b = String(c.Ra), a.push(c.za + "." + (20 >= b.length ? b : b.slice(0, 19) + "_"));
            return a.join("~")
        };
    const sk = a => {
            const b = [],
                c = a.B;
            c && c.j.length && b.push({
                za: "a",
                Ra: uk(c)
            });
            null != a.A && b.push({
                za: "as",
                Ra: a.A
            });
            null != a.j && b.push({
                za: "i",
                Ra: String(a.j)
            });
            null != a.l && b.push({
                za: "rp",
                Ra: String(a.l)
            });
            b.sort(function(d, e) {
                return d.za.localeCompare(e.za)
            });
            b.unshift({
                za: "t",
                Ra: vk(a.C)
            });
            return b
        },
        vk = a => {
            switch (a) {
                case 0:
                    return "aa";
                case 1:
                    return "ma";
                default:
                    throw Error("Invalid slot type" + a);
            }
        },
        uk = a => {
            a = a.j.slice(0).map(wk);
            a = JSON.stringify(a);
            return Tf(a)
        },
        wk = a => {
            const b = {};
            null != y(a, 7) && (b.q = y(a, 7));
            null !=
                y(a, 2) && (b.o = y(a, 2));
            null != y(a, 5) && (b.p = y(a, 5));
            return b
        };

    function xk() {
        var a = new yk;
        return z(a, 2, 1)
    }
    var yk = class extends w {
        constructor(a) {
            super(a)
        }
        setLocation(a) {
            return z(this, 1, a)
        }
    };

    function zk(a) {
        const b = [].slice.call(arguments).filter(qe(e => null === e));
        if (!b.length) return null;
        let c = [],
            d = {};
        b.forEach(e => {
            c = c.concat(e.Dc || []);
            d = Object.assign(d, e.Za())
        });
        return new Ak(c, d)
    }

    function Bk(a) {
        switch (a) {
            case 1:
                return new Ak(null, {
                    google_ad_semantic_area: "mc"
                });
            case 2:
                return new Ak(null, {
                    google_ad_semantic_area: "h"
                });
            case 3:
                return new Ak(null, {
                    google_ad_semantic_area: "f"
                });
            case 4:
                return new Ak(null, {
                    google_ad_semantic_area: "s"
                });
            default:
                return null
        }
    }

    function Ck(a) {
        return null == a ? null : new Ak(null, {
            google_placement_id: tk(a)
        })
    }
    class Ak {
        constructor(a, b) {
            this.Dc = a;
            this.j = b
        }
        Za() {
            return this.j
        }
    };
    var Dk = class extends w {
        constructor(a) {
            super(a)
        }
    };
    var Ek = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Fk = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Hk = class extends w {
            constructor(a) {
                super(a, -1, Gk)
            }
        },
        Ik = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Jk = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Gk = [1];
    var Kk = class extends w {
        constructor(a) {
            super(a)
        }
    };
    var Mk = class extends w {
            constructor(a) {
                super(a, -1, Lk)
            }
        },
        Nk = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Ok = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Lk = [3];
    var Qk = class extends w {
            constructor(a) {
                super(a, -1, Pk)
            }
        },
        Pk = [2];
    var Rk = class extends w {
        constructor(a) {
            super(a)
        }
    };
    var Tk = class extends w {
            constructor(a) {
                super(a, -1, Sk)
            }
        },
        Sk = [1];
    var Uk = class extends w {
        constructor(a) {
            super(a)
        }
        W() {
            return C(this, pk, 1)
        }
        l() {
            return y(this, 2)
        }
    };
    var Vk = class extends w {
            constructor(a) {
                super(a)
            }
            getName() {
                return y(this, 4)
            }
        },
        Wk = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Xk = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Yk = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Zk = [1, 2, 3];
    var $k = class extends w {
        constructor(a) {
            super(a)
        }
    };
    var bl = class extends w {
            constructor(a) {
                super(a, -1, al)
            }
        },
        cl = class extends w {
            constructor(a) {
                super(a)
            }
        },
        al = [1];
    var el = class extends w {
            constructor(a) {
                super(a, -1, dl)
            }
        },
        dl = [3, 4];
    var fl = class extends w {
        constructor(a) {
            super(a)
        }
    };
    var hl = class extends w {
            constructor(a) {
                super(a, -1, gl)
            }
            W() {
                return C(this, pk, 1)
            }
            l() {
                return y(this, 2)
            }
        },
        gl = [6, 7, 9, 10, 11];
    var jl = class extends w {
            constructor(a) {
                super(a, -1, il)
            }
        },
        il = [4];
    var kl = class extends w {
        constructor(a) {
            super(a)
        }
    };
    var ml = class extends w {
            constructor(a) {
                super(a, -1, ll)
            }
        },
        ol = class extends w {
            constructor(a) {
                super(a, -1, nl)
            }
        },
        pl = class extends w {
            constructor(a) {
                super(a)
            }
            wb() {
                return H(this, 1)
            }
            dc() {
                return ac(this, 2, 0)
            }
        },
        ql = class extends w {
            constructor(a) {
                super(a)
            }
        },
        rl = class extends w {
            constructor(a) {
                super(a)
            }
        },
        sl = class extends w {
            constructor(a) {
                super(a)
            }
        },
        ll = [1],
        nl = [1],
        tl = [1, 2];

    function ul(a) {
        return C(a, vl, 13)
    }

    function wl(a) {
        return C(a, xl, 15)
    }
    var zl = class extends w {
            constructor(a) {
                super(a, -1, yl)
            }
        },
        Al = class extends w {
            constructor() {
                super(void 0)
            }
        },
        Bl = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Dl = class extends w {
            constructor(a) {
                super(a, -1, Cl)
            }
        },
        El = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Fl = class extends w {
            constructor(a) {
                super(a)
            }
        },
        vl = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Gl = class extends w {
            constructor(a) {
                super(a)
            }
        },
        xl = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Hl = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Il = class extends w {
            constructor(a) {
                super(a)
            }
        },
        yl = [1, 2, 5, 7],
        Cl = [2, 5, 6, 11];
    var Jl = class extends w {
        constructor(a) {
            super(a)
        }
    };

    function Kl(a) {
        try {
            const b = a.localStorage.getItem("google_ama_settings");
            return b ? lc(Jl, b) : null
        } catch (b) {
            return null
        }
    }

    function Ll(a, b) {
        if (void 0 !== a.Yb) {
            let c = Kl(b);
            c || (c = new Jl);
            void 0 !== a.Yb && z(c, 2, a.Yb);
            z(c, 1, va() + 864E5);
            a = kc(c);
            try {
                b.localStorage.setItem("google_ama_settings", a)
            } catch (d) {}
        } else if ((a = Kl(b)) && y(a, 1) < va()) try {
            b.localStorage.removeItem("google_ama_settings")
        } catch (c) {}
    };

    function Ml(a) {
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
    }

    function Nl(a) {
        return Bj(a.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"))
    };

    function Ol(a, b) {
        a = (new of (a)).createElement("DIV");
        const c = a.style;
        c.width = "100%";
        c.height = "auto";
        c.clear = b ? "both" : "none";
        return a
    }

    function Pl(a, b, c) {
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
        Ml(b) && (b.setAttribute("data-init-display", b.style.display), b.style.display = "block")
    }

    function Ql(a) {
        if (a && a.parentNode) {
            const b = a.parentNode;
            b.removeChild(a);
            Ml(b) && (b.style.display = b.getAttribute("data-init-display") || "none")
        }
    };
    var W = class {
            constructor(a, b = !1) {
                this.j = a;
                this.defaultValue = b
            }
        },
        Rl = class {
            constructor(a, b = 0) {
                this.j = a;
                this.defaultValue = b
            }
        },
        Sl = class {
            constructor(a, b = []) {
                this.j = a;
                this.defaultValue = b
            }
        };
    var Tl = new W(1084),
        Ul = new W(1082, !0),
        Vl = new W(236),
        Wl = new W(383, !0),
        Xl = new Rl(1130),
        Yl = new Rl(1126, 5E3),
        Zl = new Rl(1032),
        $l = new class {
            constructor(a, b = "") {
                this.j = a;
                this.defaultValue = b
            }
        }(14),
        am = new Rl(1044),
        bm = new W(1132, !0),
        cm = new W(1131),
        dm = new Rl(1142, 8),
        em = new Rl(1103),
        fm = new Rl(1116, 300),
        gm = new Rl(1117, 100),
        hm = new W(1121),
        im = new Rl(1119),
        jm = new Rl(1138),
        km = new W(1122),
        lm = new W(316),
        mm = new W(334),
        nm = new Rl(54),
        om = new W(313),
        pm = new Rl(66, -1),
        qm = new Rl(65, -1),
        rm = new W(369),
        sm = new W(368),
        tm = new W(1087),
        um = new W(265),
        vm = new W(1120),
        wm = new W(1135),
        xm = new W(1102, !0),
        ym = new W(260),
        zm = new W(1139),
        Am = new W(1133),
        Bm = new Rl(1072),
        Cm = new W(290),
        Dm = new W(190),
        Em = new W(1036, !0),
        Fm = new W(154),
        Gm = new W(1140),
        Hm = new W(380254521),
        Im = new W(381914117),
        Jm = new W(83),
        Km = new W(360245598),
        Lm = new Rl(1927),
        Mm = new Sl(1934, ["A8FHS1NmdCwGqD9DwOicnHHY+y27kdWfxKa0YHSGDfv0CSpDKRHTQdQmZVPDUdaFWUsxdgVxlwAd6o+dhJykPA0AAACWeyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9",
            "A8zdXi6dr1hwXEUjQrYiyYQGlU3557y5QWDnN0Lwgj9ePt66XMEvNkVWOEOWPd7TP9sBQ25X0Q15Lr1Nn4oGFQkAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9", "A4/Htern2udN9w3yJK9QgWQxQFruxOXsXL7cW60DyCl0EZFGCSme/J33Q/WzF7bBkVvhEWDlcBiUyZaim5CpFQwAAACceyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiQ29udmVyc2lvbk1lYXN1cmVtZW50IiwiZXhwaXJ5IjoxNjQzMTU1MTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlLCJ1c2FnZSI6InN1YnNldCJ9"
        ]),
        Nm = new W(77),
        Om = new W(78),
        Pm = new W(309),
        Qm = new W(1959),
        Rm = new W(1953, !0),
        Sm = new W(1960),
        Tm = new W(80),
        Um = new W(76),
        Vm = new W(81),
        Wm = new W(1957),
        Xm = new W(380025941),
        Ym = new W(84),
        Zm = new W(188),
        $m = new W(1928),
        an = new W(1941),
        bn = new W(370946349),
        cn = new W(392736476),
        dn = new Rl(406149835),
        en = new Sl(1932, ["AxujKG9INjsZ8/gUq8+dTruNvk7RjZQ1oFhhgQbcTJKDnZfbzSTE81wvC2Hzaf3TW4avA76LTZEMdiedF1vIbA4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=",
            "Azuce85ORtSnWe1MZDTv68qpaW3iHyfL9YbLRy0cwcCZwVnePnOmkUJlG8HGikmOwhZU22dElCcfrfX2HhrBPAkAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A16nvcdeoOAqrJcmjLRpl1I6f3McDD8EfofAYTt/P/H4/AWwB99nxiPp6kA0fXoiZav908Z8etuL16laFPUdfQsAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9",
            "AxBHdr0J44vFBQtZUqX9sjiqf5yWZ/OcHRcRMN3H9TH+t90V/j3ENW6C8+igBZFXMJ7G3Pr8Dd13632aLng42wgAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2NTI3NzQ0MDAsImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9", "A88BWHFjcawUfKU3lIejLoryXoyjooBXLgWmGh+hNcqMK44cugvsI5YZbNarYvi3roc1fYbHA1AVbhAtuHZflgEAAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjUyNzc0NDAwLCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=="
        ]),
        fn = new Rl(397907552, 500),
        gn = new W(419638674),
        hn = new Rl(1935);
    var jn = class {
            constructor() {
                const a = {};
                this.B = (b, c) => null != a[b] ? a[b] : c;
                this.C = (b, c) => null != a[b] ? a[b] : c;
                this.j = (b, c) => null != a[b] ? a[b] : c;
                this.l = () => {};
                this.A = () => {}
            }
        },
        X = a => mi(jn).B(a.j, a.defaultValue),
        kn = a => mi(jn).C(a.j, a.defaultValue);
    var mn = (a, b, c, d = 0) => {
            var e = ln(b, c, d);
            if (e.init) {
                for (c = b = e.init; c = e.vb(c);) b = c;
                e = {
                    anchor: b,
                    position: e.Jb
                }
            } else e = {
                anchor: b,
                position: c
            };
            a["google-ama-order-assurance"] = d;
            Pl(a, e.anchor, e.position)
        },
        nn = (a, b, c, d = 0) => {
            X(om) ? mn(a, b, c, d) : Pl(a, b, c)
        };

    function ln(a, b, c) {
        const d = f => {
                f = on(f);
                return null == f ? !1 : c < f
            },
            e = f => {
                f = on(f);
                return null == f ? !1 : c > f
            };
        switch (b) {
            case 0:
                return {
                    init: pn(a.previousSibling, d),
                    vb: f => pn(f.previousSibling, d),
                    Jb: 0
                };
            case 2:
                return {
                    init: pn(a.lastChild, d),
                    vb: f => pn(f.previousSibling, d),
                    Jb: 0
                };
            case 3:
                return {
                    init: pn(a.nextSibling, e),
                    vb: f => pn(f.nextSibling, e),
                    Jb: 3
                };
            case 1:
                return {
                    init: pn(a.firstChild, e),
                    vb: f => pn(f.nextSibling, e),
                    Jb: 3
                }
        }
        throw Error("Un-handled RelativePosition: " + b);
    }

    function on(a) {
        return a.hasOwnProperty("google-ama-order-assurance") ? a["google-ama-order-assurance"] : null
    }

    function pn(a, b) {
        return a && b(a) ? a : null
    };
    var qn = (a, b = !1) => {
        try {
            return b ? (new df(a.innerWidth, a.innerHeight)).round() : sf(a || window).round()
        } catch (c) {
            return new df(-12245933, -12245933)
        }
    };

    function rn(a = t) {
        a = a.devicePixelRatio;
        return "number" === typeof a ? +a.toFixed(3) : null
    }

    function sn(a, b = t) {
        a = a.scrollingElement || ("CSS1Compat" == a.compatMode ? a.documentElement : a.body);
        return new cf(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop)
    }

    function tn(a) {
        try {
            return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length))
        } catch (b) {
            return !1
        }
    };

    function un(a) {
        -1 == a.l && (a.l = ab(a.j, (b, c, d) => c ? b + 2 ** d : b, 0));
        return a.l
    }
    class vn {
        constructor() {
            this.j = [];
            this.l = -1
        }
        set(a, b = !0) {
            0 <= a && 52 > a && 0 === a % 1 && this.j[a] != b && (this.j[a] = b, this.l = -1)
        }
        get(a) {
            return !!this.j[a]
        }
    };
    const wn = {
        [23]: .001,
        [38]: .001,
        [150]: "",
        [211]: !1,
        [253]: !1,
        [172]: null,
        [246]: [],
        [226]: [],
        [252]: null,
        [258]: null,
        [251]: null,
        [259]: null,
        [6]: function(a, b = !0) {
            try {
                for (let c = null; c != a; c = a, a = a.parent) switch (a.location.protocol) {
                    case "https:":
                        return !0;
                    case "file:":
                        return b;
                    case "http:":
                        return !1
                }
            } catch (c) {}
            return !0
        }(window),
        [36]: Zf("false"),
        [148]: ni,
        [221]: Zf("false"),
        [257]: Zf("false"),
        [260]: void 0,
        [262]: Zf("false")
    };
    var xn, yn;
    xn = null !== (yn = t.googletag) && void 0 !== yn ? yn : t.googletag = {};
    Object.assign(wn, xn._vars_);
    xn._vars_ = wn;
    N `https://www.googletagservices.com/console/host/host.js`;
    N `https://www.googletagservices.com/console/panel/index.html`;
    N `https://www.googletagservices.com/console/overlay/index.html`;
    var zn = (a, b, c, d) => {
        c = c || a.google_ad_width;
        d = d || a.google_ad_height;
        if (a && a.top == a) return !1;
        const e = b.documentElement;
        if (c && d) {
            let f = 1,
                g = 1;
            a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
            if (g > 2 * d || f > 2 * c) return !1
        }
        return !0
    };

    function An(a, b) {
        Rf(a, (c, d) => {
            b[d] = c
        })
    }
    var Bn = a => {
        let b = a.location.href;
        if (a == a.top) return {
            url: b,
            kc: !0
        };
        let c = !1;
        const d = a.document;
        d && d.referrer && (b = d.referrer, a.parent == a.top && (c = !0));
        (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1, b = a);
        return {
            url: b,
            kc: c
        }
    };

    function Cn() {
        var a = Q();
        if (a == a.top) return 0;
        for (; a && a != a.top && Hf(a); a = a.parent) {
            if (a.sf_) return 2;
            if (a.$sf) return 3;
            if (a.inGptIF) return 4;
            if (a.inDapIF) return 5
        }
        return 1
    };

    function Dn() {
        this.T = this.T;
        this.H = this.H
    }
    Dn.prototype.T = !1;
    Dn.prototype.ea = function() {
        this.T || (this.T = !0, this.B())
    };

    function En(a, b) {
        a.T ? b() : (a.H || (a.H = []), a.H.push(b))
    }
    Dn.prototype.B = function() {
        if (this.H)
            for (; this.H.length;) this.H.shift()()
    };
    class Fn {
        constructor() {
            this.promise = new Promise((a, b) => {
                this.resolve = a;
                this.j = b
            })
        }
    };

    function Gn(a) {
        this.j = a || {
            cookie: ""
        }
    }
    p = Gn.prototype;
    p.set = function(a, b, c) {
        let d, e, f, g = !1,
            h;
        "object" === typeof c && (h = c.vi, g = c.He || !1, f = c.domain || void 0, e = c.path || void 0, d = c.Rc);
        if (/[;=\s]/.test(a)) throw Error('Invalid cookie name "' + a + '"');
        if (/[;\r\n]/.test(b)) throw Error('Invalid cookie value "' + b + '"');
        void 0 === d && (d = -1);
        this.j.cookie = a + "=" + b + (f ? ";domain=" + f : "") + (e ? ";path=" + e : "") + (0 > d ? "" : 0 == d ? ";expires=" + (new Date(1970, 1, 1)).toUTCString() : ";expires=" + (new Date(Date.now() + 1E3 * d)).toUTCString()) + (g ? ";secure" : "") + (null != h ? ";samesite=" + h : "")
    };
    p.get = function(a, b) {
        const c = a + "=",
            d = (this.j.cookie || "").split(";");
        for (let e = 0, f; e < d.length; e++) {
            f = Ca(d[e]);
            if (0 == f.lastIndexOf(c, 0)) return f.substr(c.length);
            if (f == a) return ""
        }
        return b
    };
    p.remove = function(a, b, c) {
        const d = void 0 !== this.get(a);
        this.set(a, "", {
            Rc: 0,
            path: b,
            domain: c
        });
        return d
    };
    p.isEmpty = function() {
        return !this.j.cookie
    };
    p.Ya = function() {
        return this.j.cookie ? (this.j.cookie || "").split(";").length : 0
    };
    p.clear = function() {
        var a = (this.j.cookie || "").split(";");
        const b = [],
            c = [];
        let d, e;
        for (let f = 0; f < a.length; f++) e = Ca(a[f]), d = e.indexOf("="), -1 == d ? (b.push(""), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
        for (a = b.length - 1; 0 <= a; a--) this.remove(b[a])
    };

    function Hn(a, b = window) {
        if (B(a, 5)) try {
            return b.localStorage
        } catch (c) {}
        return null
    }

    function In(a) {
        return "null" !== a.origin
    }

    function Jn(a, b, c) {
        b = B(b, 5) && In(c) ? c.document.cookie : null;
        return null === b ? null : (new Gn({
            cookie: b
        })).get(a) || ""
    };

    function Kn(a, b = []) {
        const c = Date.now();
        return Za(b, d => c - d < 1E3 * a)
    }

    function Ln(a, b) {
        try {
            const c = a.getItem("__lsv__");
            if (!c) return [];
            let d;
            try {
                d = JSON.parse(c)
            } catch (e) {}
            if (!Array.isArray(d) || bb(d, e => !Number.isInteger(e))) return a.removeItem("__lsv__"), [];
            d = Kn(b, d);
            d.length || null == a || a.removeItem("__lsv__");
            return d
        } catch (c) {
            return null
        }
    }

    function Mn(a, b) {
        var c;
        if (!(c = 0 >= b) && !(c = null == a)) {
            try {
                a.setItem("__storage_test__", "__storage_test__");
                const e = a.getItem("__storage_test__");
                a.removeItem("__storage_test__");
                var d = "__storage_test__" === e
            } catch (e) {
                d = !1
            }
            c = !d
        }
        return c ? null : Ln(a, b)
    };
    var Nn = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, b |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0
            } catch (c) {
                b |= 32
            }
            return b
        },
        On = (a, b, c) => {
            let d = 0;
            try {
                d |= lj(a, 2500);
                if (X(Pm)) {
                    const g = V(a).clientHeight;
                    d |= g ? 320 > g ? -2147483648 : 0 : 1073741824
                }
                d |= mj(a);
                var e;
                if (e = 0 < b) {
                    var f = Mn(c, b);
                    e = !(f && 1 > f.length)
                }
                e && (d |= 134217728)
            } catch (g) {
                d |= 32
            }
            return d
        };
    var Pn = (a, b, c, d, e, f) => {
            try {
                const g = a.j,
                    h = Mf("SCRIPT", g);
                h.async = !0;
                me(h, b);
                g.head.appendChild(h);
                h.addEventListener("load", () => {
                    e();
                    d && g.head.removeChild(h)
                });
                h.addEventListener("error", () => {
                    0 < c ? Pn(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f())
                })
            } catch (g) {
                f()
            }
        },
        Qn = (a, b, c = () => {}, d = () => {}) => {
            Pn(nf(a), b, 0, !1, c, d)
        };
    var Rn = (a = null) => {
        a = a || t;
        return a.googlefc || (a.googlefc = {})
    };
    Bc(aj);
    Bc(bj);
    var Sn = (a, b) => {
        const c = a.document,
            d = () => {
                if (!a.frames[b])
                    if (c.body) {
                        const e = Mf("IFRAME", c);
                        e.style.display = "none";
                        e.style.width = "0px";
                        e.style.height = "0px";
                        e.style.border = "none";
                        e.style.zIndex = "-1000";
                        e.style.left = "-1000px";
                        e.style.top = "-1000px";
                        e.name = b;
                        c.body.appendChild(e)
                    } else a.setTimeout(d, 5)
            };
        d()
    };
    const Tn = a => {
        void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
        void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
        return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
    };

    function Un(a) {
        if (!1 === a.gdprApplies) return !0;
        void 0 === a.internalErrorState && (a.internalErrorState = Tn(a));
        return "error" === a.cmpStatus || 0 !== a.internalErrorState || "loaded" === a.cmpStatus && ("tcloaded" === a.eventStatus || "useractioncomplete" === a.eventStatus) ? !0 : !1
    }

    function Vn(a) {
        if (Un(a))
            if (!1 !== a.gdprApplies && "tcunavailable" !== a.tcString && void 0 !== a.gdprApplies && "string" === typeof a.tcString && a.tcString.length) {
                b: {
                    if (a.publisher && a.publisher.restrictions) {
                        var b = a.publisher.restrictions["1"];
                        if (void 0 !== b) {
                            b = b["755"];
                            break b
                        }
                    }
                    b = void 0
                }
                0 === b ? a = !1 : a.purpose && a.vendor ? (b = a.vendor.consents, (b = !(!b || !b["755"])) && a.purposeOneTreatment && "CH" === a.publisherCC ? a = !0 : (b && (a = a.purpose.consents, b = !(!a || !a["1"])), a = b)) : a = !0
            }
        else a = !0;
        else a = !1;
        return a
    }

    function Wn(a) {
        if (a.l) return a.l;
        a.l = gg(a.j, "__tcfapiLocator");
        return a.l
    }

    function Xn(a) {
        return "function" === typeof a.j.__tcfapi || null != Wn(a)
    }

    function Yn(a, b, c, d) {
        c || (c = () => {});
        if ("function" === typeof a.j.__tcfapi) a = a.j.__tcfapi, a(b, 2, c, d);
        else if (Wn(a)) {
            Zn(a);
            const e = ++a.G;
            a.D[e] = c;
            a.l && a.l.postMessage({
                __tcfapiCall: {
                    command: b,
                    version: 2,
                    callId: e,
                    parameter: d
                }
            }, "*")
        } else c({}, !1)
    }

    function $n(a, b) {
        let c = {
            internalErrorState: 0
        };
        const d = se(() => b(c));
        let e = 0; - 1 !== a.C && (e = setTimeout(() => {
            e = 0;
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.C));
        Yn(a, "addEventListener", f => {
            f && (c = f, c.internalErrorState = Tn(c), Un(c) && (0 != c.internalErrorState && (c.tcString = "tcunavailable"), Yn(a, "removeEventListener", null, c.listenerId), e && (clearTimeout(e), e = 0), d()))
        })
    }

    function ao(a, b) {
        let c = {
            internalErrorState: 0
        };
        const d = se(() => b(c));
        let e = 0; - 1 !== a.C && (e = setTimeout(() => {
            c.tcString = "tcunavailable";
            c.internalErrorState = 1;
            d()
        }, a.C));
        Yn(a, "addEventListener", (f, g) => {
            e && (clearTimeout(e), e = 0);
            g && (c = f);
            c.internalErrorState = Tn(c);
            0 != c.internalErrorState && (c.tcString = "tcunavailable");
            if (0 != c.internalErrorState || Un(c)) Yn(a, "removeEventListener", null, c.listenerId), d()
        })
    }

    function bo(a) {
        return new Promise(b => {
            ao(a, b)
        })
    }

    function Zn(a) {
        a.A || (a.A = b => {
            try {
                var c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                a.D[c.callId](c.returnValue, c.success)
            } catch (d) {}
        }, K(a.j, "message", a.A))
    }
    class co extends Dn {
        constructor(a, b = 500) {
            super();
            this.j = a;
            this.l = null;
            this.D = {};
            this.G = 0;
            this.C = b;
            this.A = null
        }
        B() {
            this.D = {};
            this.A && (ye(this.j, "message", this.A), delete this.A);
            delete this.D;
            delete this.j;
            delete this.l;
            super.B()
        }
        addEventListener(a) {
            let b = {};
            const c = se(() => a(b));
            let d = 0; - 1 !== this.C && (d = setTimeout(() => {
                b.tcString = "tcunavailable";
                b.internalErrorState = 1;
                c()
            }, this.C));
            const e = (f, g) => {
                clearTimeout(d);
                f ? (b = f, b.internalErrorState = Tn(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable",
                    g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
                a(b)
            };
            try {
                Yn(this, "addEventListener", e)
            } catch (f) {
                b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c()
            }
        }
        removeEventListener(a) {
            a && a.listenerId && Yn(this, "removeEventListener", null, a.listenerId)
        }
    };

    function eo(a) {
        const b = Sc(uc("https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}"), {
            id: a.l,
            ers: 2
        });
        Qn(a.j, b, () => {}, () => {})
    }

    function fo(a, b, c) {
        const d = Rn(a.j);
        d.callbackQueue = d.callbackQueue || [];
        d.callbackQueue.push({
            CONSENT_DATA_READY: () => {
                const e = Rn(a.j),
                    f = new co(a.j);
                Xn(f) && $n(f, g => {
                    300 === g.cmpId && g.tcString && "tcunavailable" !== g.tcString && b({
                        Fe: e.getDefaultConsentRevocationText(),
                        Od: e.getDefaultConsentRevocationCloseText(),
                        Cd: e.getDefaultConsentRevocationAttestationText(),
                        showRevocationMessage: () => e.showRevocationMessage()
                    })
                });
                c()
            }
        })
    }
    class go {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
        start() {
            try {
                Sn(this.j, "googlefcPresent"), eo(this)
            } catch (a) {}
        }
    };
    var ho = class {
        constructor() {
            this.id = "goog_" + kf++
        }
    };
    new ho;
    new ho;
    new ho;
    new ho;
    new ho;
    new ho;
    new ho;
    new ho;
    new ho;
    var io = (a, b) => {
            try {
                const c = b.document.documentElement.getBoundingClientRect(),
                    d = a.getBoundingClientRect();
                return {
                    x: d.left - c.left,
                    y: d.top - c.top
                }
            } catch (c) {
                return null
            }
        },
        jo = (a, b) => {
            const c = 40 === a.google_reactive_ad_format,
                d = 16 === a.google_reactive_ad_format;
            return !!a.google_ad_resizable && (!a.google_reactive_ad_format || c) && !d && !!b.navigator && /iPhone|iPod|iPad|Android|BlackBerry/.test(b.navigator.userAgent) && b === b.top
        },
        ko = (a, b, c) => {
            a = a.style;
            "rtl" == b ? a.marginRight = c : a.marginLeft = c
        };
    const lo = (a, b, c) => {
        a = io(b, a);
        return "rtl" == c ? -a.x : a.x
    };
    var mo = (a, b) => {
            b = b.parentElement;
            return b ? (a = Nf(b, a)) ? a.direction : "" : ""
        },
        no = (a, b, c) => {
            if (0 === lo(a, b, c)) return !1;
            ko(b, c, "0px");
            const d = lo(a, b, c);
            ko(b, c, -1 * d + "px");
            a = lo(a, b, c);
            0 !== a && a !== d && ko(b, c, d / (a - d) * d + "px");
            return !0
        };
    const oo = RegExp("(^| )adsbygoogle($| )");

    function po(a, b) {
        for (var c = 0; c < b.length; c++) {
            var d = b[c],
                e = lf(d.oc);
            a[e] = d.value
        }
    }

    function qo(a, b, c, d, e, f) {
        a = ro(a, e);
        a.ia.setAttribute("data-ad-format", d ? d : "auto");
        so(a, b, c, f);
        return a
    }

    function to(a, b, c = null) {
        a = ro(a, {});
        so(a, b, null, c);
        return a
    }

    function so(a, b, c, d) {
        var e = [];
        if (d = d && d.Dc) a.Fa.className = d.join(" ");
        a = a.ia;
        a.className = "adsbygoogle";
        a.setAttribute("data-ad-client", b);
        c && a.setAttribute("data-ad-slot", c);
        e.length && a.setAttribute("data-ad-channel", e.join("+"))
    }

    function ro(a, b) {
        var c = Ol(a, b.clearBoth || !1),
            d = c.style;
        d.textAlign = "center";
        b.Ib && po(d, b.Ib);
        a = (new of (a)).createElement("INS");
        d = a.style;
        d.display = "block";
        d.margin = "auto";
        d.backgroundColor = "transparent";
        b.vc && (d.marginTop = b.vc);
        b.Sb && (d.marginBottom = b.Sb);
        b.Pa && po(d, b.Pa);
        c.appendChild(a);
        return {
            Fa: c,
            ia: a
        }
    }

    function uo(a, b, c) {
        b.dataset.adsbygoogleStatus = "reserved";
        b.className += " adsbygoogle-noablate";
        var d = {
            element: b
        };
        c = c && c.Za();
        if (b.hasAttribute("data-pub-vars")) {
            try {
                c = JSON.parse(b.getAttribute("data-pub-vars"))
            } catch (e) {
                return
            }
            b.removeAttribute("data-pub-vars")
        }
        c && (d.params = c);
        (a.adsbygoogle = a.adsbygoogle || []).push(d)
    }

    function vo(a) {
        var b = Nl(a.document);
        Ya(b, function(c) {
            var d = wo(a, c),
                e;
            if (e = d) e = io(c, a), e = !((e ? e.y : 0) < V(a).clientHeight);
            e && (c.setAttribute("data-pub-vars", JSON.stringify(d)), c.removeAttribute("height"), c.style.removeProperty("height"), c.removeAttribute("width"), c.style.removeProperty("width"), uo(a, c))
        })
    }

    function wo(a, b) {
        b = b.getAttribute("google_element_uid");
        a = a.google_sv_map;
        if (!b || !a || !a[b]) return null;
        a = a[b];
        b = {};
        for (let c in Ue) a[Ue[c]] && (b[Ue[c]] = a[Ue[c]]);
        return b
    };
    const xo = (a, b) => {
        if (3 == b.nodeType) return 3 == b.nodeType ? (b = b.data, a = -1 != b.indexOf("&") ? ff(b, a.document) : b, a = /\S/.test(a)) : a = !1, a;
        if (1 == b.nodeType) {
            var c = a.getComputedStyle(b);
            if ("0" == c.opacity || "none" == c.display || "hidden" == c.visibility) return !1;
            if ((c = b.tagName) && Ij.contains(c.toUpperCase())) return !0;
            b = b.childNodes;
            for (c = 0; c < b.length; c++)
                if (xo(a, b[c])) return !0
        }
        return !1
    };
    var yo = a => {
        if (460 <= a) return a = Math.min(a, 1200), Math.ceil(800 > a ? a / 4 : 200);
        a = Math.min(a, 600);
        return 420 >= a ? Math.ceil(a / 1.2) : Math.ceil(a / 1.91) + 130
    };
    var zo = class {
        constructor() {
            this.j = {
                clearBoth: !0
            }
        }
        l(a, b, c, d) {
            return qo(d.document, a, null, null, this.j, b)
        }
        A(a) {
            return yo(Math.min(a.screen.width || 0, a.screen.height || 0))
        }
    };

    function Ao(a) {
        var b = [];
        Aj(a.getElementsByTagName("p"), function(c) {
            100 <= Bo(c) && b.push(c)
        });
        return b
    }

    function Bo(a) {
        if (3 == a.nodeType) return a.length;
        if (1 != a.nodeType || "SCRIPT" == a.tagName) return 0;
        var b = 0;
        Aj(a.childNodes, function(c) {
            b += Bo(c)
        });
        return b
    }

    function Co(a) {
        return 0 == a.length || isNaN(a[0]) ? a : "\\" + (30 + parseInt(a[0], 10)) + " " + a.substring(1)
    }

    function Do(a, b) {
        if (null == a.j) return b;
        switch (a.j) {
            case 1:
                return b.slice(1);
            case 2:
                return b.slice(0, b.length - 1);
            case 3:
                return b.slice(1, b.length - 1);
            case 0:
                return b;
            default:
                throw Error("Unknown ignore mode: " + a.j);
        }
    }

    function Eo(a, b) {
        var c = [];
        try {
            c = b.querySelectorAll(a.B)
        } catch (g) {}
        if (!c.length) return [];
        b = fb(c);
        b = Do(a, b);
        "number" === typeof a.l && (c = a.l, 0 > c && (c += b.length), b = 0 <= c && c < b.length ? [b[c]] : []);
        if ("number" === typeof a.A) {
            c = [];
            for (var d = 0; d < b.length; d++) {
                var e = Ao(b[d]),
                    f = a.A;
                0 > f && (f += e.length);
                0 <= f && f < e.length && c.push(e[f])
            }
            b = c
        }
        return b
    }
    const Fo = class {
        constructor(a, b, c, d) {
            this.B = a;
            this.l = b;
            this.A = c;
            this.j = d
        }
        toString() {
            return JSON.stringify({
                nativeQuery: this.B,
                occurrenceIndex: this.l,
                paragraphIndex: this.A,
                ignoreMode: this.j
            })
        }
    };

    function Go(a) {
        if (!a) return null;
        var b = y(a, 7);
        if (y(a, 1) || a.getId() || 0 < Xb(a, 4).length) {
            var c = a.getId();
            b = Xb(a, 4);
            var d = y(a, 1),
                e = "";
            d && (e += d);
            c && (e += "#" + Co(c));
            if (b)
                for (c = 0; c < b.length; c++) e += "." + Co(b[c]);
            a = (b = e) ? new Fo(b, y(a, 2), y(a, 5), Ho(y(a, 6))) : null
        } else a = b ? new Fo(b, y(a, 2), y(a, 5), Ho(y(a, 6))) : null;
        return a
    }
    var Io = {
        1: 1,
        2: 2,
        3: 3,
        0: 0
    };

    function Ho(a) {
        return null == a ? a : Io[a]
    }

    function Jo(a) {
        for (var b = [], c = 0; c < a.length; c++) {
            var d = y(a[c], 1),
                e = y(a[c], 2);
            if (d && null != e) {
                var f = {};
                f.oc = d;
                f.value = e;
                b.push(f)
            }
        }
        return b
    }

    function Ko(a, b) {
        var c = {};
        a && (c.vc = y(a, 1), c.Sb = y(a, 2), c.clearBoth = !!B(a, 3));
        b && (c.Ib = Jo(G(b, Dk, 3)), c.Pa = Jo(G(b, Dk, 4)));
        return c
    }
    var Lo = {
            1: 0,
            2: 1,
            3: 2,
            4: 3
        },
        Mo = {
            0: 1,
            1: 2,
            2: 3,
            3: 4
        };
    const No = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            return qo(d.document, a, null, null, this.j, b)
        }
        A() {
            return null
        }
    };
    class Oo {
        constructor(a) {
            this.l = a
        }
        j(a) {
            a = Math.floor(a.l);
            const b = yo(a);
            return new Ak(["ap_container"], {
                google_reactive_ad_format: 27,
                google_responsive_auto_format: 16,
                google_max_num_ads: 1,
                google_ad_type: this.l,
                google_ad_format: a + "x" + b,
                google_ad_width: a,
                google_ad_height: b
            })
        }
    };
    var Po = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        j() {
            return this.B
        }
        l() {
            return this.A
        }
    };
    const Qo = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            var e = 0 < G(this.j, el, 9).length ? G(this.j, el, 9)[0] : null,
                f = Ko(C(this.j, fl, 3), e);
            if (!e) return null;
            if (e = y(e, 1)) {
                d = d.document;
                var g = c.tagName;
                c = (new of (d)).createElement(g);
                c.style.clear = f.clearBoth ? "both" : "none";
                "A" == g && (c.style.display = "block");
                c.style.padding = "0px";
                c.style.margin = "0px";
                f.Ib && po(c.style, f.Ib);
                d = (new of (d)).createElement("INS");
                f.Pa && po(d.style, f.Pa);
                c.appendChild(d);
                f = {
                    Fa: c,
                    ia: d
                };
                f.ia.setAttribute("data-ad-type", "text");
                f.ia.setAttribute("data-native-settings-key",
                    e);
                so(f, a, null, b);
                a = f
            } else a = null;
            return a
        }
        A() {
            var a = 0 < G(this.j, el, 9).length ? G(this.j, el, 9)[0] : null;
            if (!a) return null;
            a = G(a, Dk, 3);
            for (var b = 0; b < a.length; b++) {
                var c = a[b];
                if ("height" == y(c, 1) && 0 < parseInt(y(c, 2), 10)) return parseInt(y(c, 2), 10)
            }
            return null
        }
    };
    var Ro = class {
        constructor(a) {
            this.j = a
        }
        l(a, b, c, d) {
            if (!this.j) return null;
            const e = this.j.google_ad_format || null,
                f = this.j.google_ad_slot || null;
            if (c = c.style) {
                var g = [];
                for (let h = 0; h < c.length; h++) {
                    const l = c.item(h);
                    "width" !== l && "height" !== l && g.push({
                        oc: l,
                        value: c.getPropertyValue(l)
                    })
                }
                c = {
                    Pa: g
                }
            } else c = {};
            a = qo(d.document, a, f, e, c, b);
            a.ia.setAttribute("data-pub-vars", JSON.stringify(this.j));
            return a
        }
        A() {
            return this.j ? parseInt(this.j.google_ad_height, 10) || null : null
        }
        Za() {
            return this.j
        }
    };
    class So {
        constructor(a) {
            this.l = a
        }
        j() {
            return new Ak([], {
                google_ad_type: this.l,
                google_reactive_ad_format: 26,
                google_ad_format: "fluid"
            })
        }
    };
    var To = class {
        constructor(a, b) {
            this.B = a;
            this.A = b
        }
        l() {
            return this.A
        }
        j(a) {
            a = Eo(this.B, a.document);
            return 0 < a.length ? a[0] : null
        }
    };

    function Uo(a, b, c, d) {
        var e = a.W();
        if (!e) return null;
        var f = Go(e);
        if (!f) return null;
        var g = Lo[a.l()];
        var h = void 0 === g ? null : g;
        if (null === h) return null;
        g = (g = C(a, fl, 3)) ? B(g, 3) : null;
        f = new To(f, h);
        h = Xb(a, 10).slice(0);
        Wb(e, 5) && h.push(1);
        var l = d ? d : {};
        d = y(a, 12);
        e = Wb(a, 4) ? C(a, yk, 4) : null;
        switch (y(a, 8)) {
            case 1:
                return l = l.Jd || null, new Vo(f, new No(Ko(C(a, fl, 3), null)), l, g, 0, h, e, c, b, d, a);
            case 2:
                return new Vo(f, new Qo(a), l.fe || new So("text"), g, 1, h, e, c, b, d, a)
        }
        return null
    }

    function Wo(a, b, c) {
        const d = [];
        for (let e = 0; e < a.length; e++) {
            const f = Uo(a[e], e, b, c);
            null !== f && d.push(f)
        }
        return d
    }

    function Xo(a) {
        return a.B
    }

    function Yo(a) {
        return a.D instanceof Ro ? a.D.Za() : null
    }

    function Zo(a, b, c) {
        Cj(a.L, b) || a.L.set(b, []);
        a.L.get(b).push(c)
    }

    function $o(a) {
        return Ol(a.j.document, a.I || !1)
    }

    function ap(a) {
        return a.D.A(a.j)
    }

    function bp(a, b = null, c = null) {
        return new Vo(a.H, b || a.D, c || a.T, a.I, a.Ha, a.lc, a.eb, a.j, a.Z, a.G, a.A, a.C, a.O)
    }
    class Vo {
        constructor(a, b, c, d, e, f, g, h, l, k = null, m = null, n = null, q = null) {
            this.H = a;
            this.D = b;
            this.T = c;
            this.I = d;
            this.Ha = e;
            this.lc = f;
            this.eb = g ? g : new yk;
            this.j = h;
            this.Z = l;
            this.G = k;
            this.A = m;
            this.C = n;
            this.O = q;
            this.J = [];
            this.B = !1;
            this.L = new Gj
        }
        N() {
            return this.j
        }
        l() {
            return this.H.l()
        }
    };
    const cp = {
        TABLE: {
            Ua: new bk([1, 2])
        },
        THEAD: {
            Ua: new bk([0, 3, 1, 2])
        },
        TBODY: {
            Ua: new bk([0, 3, 1, 2])
        },
        TR: {
            Ua: new bk([0, 3, 1, 2])
        },
        TD: {
            Ua: new bk([0, 3])
        }
    };

    function dp(a, b, c, d) {
        const e = c.childNodes;
        c = c.querySelectorAll(b);
        b = [];
        for (const f of c) c = Wa(e, f), 0 > c || b.push(new ep(a, [f], c, f, 3, Af(f).trim(), d));
        return b
    }

    function fp(a, b, c) {
        let d = [];
        const e = [],
            f = b.childNodes,
            g = f.length;
        let h = 0,
            l = "";
        for (let n = 0; n < g; n++) {
            var k = f[n];
            if (1 == k.nodeType || 3 == k.nodeType) {
                a: {
                    var m = k;
                    if (1 != m.nodeType) {
                        m = null;
                        break a
                    }
                    if ("BR" == m.tagName) break a;
                    const q = c.getComputedStyle(m).getPropertyValue("display");m = "inline" == q || "inline-block" == q ? null : m
                }
                m ? (d.length && l && e.push(new ep(a, d, n - 1, m, 0, l, c)), d = [], h = n + 1, l = "") : (d.push(k), k = Af(k).trim(), l += k && l ? " " + k : k)
            }
        }
        d.length && l && e.push(new ep(a, d, h, b, 2, l, c));
        return e
    }

    function gp(a, b) {
        return a.j - b.j
    }

    function hp(a) {
        const b = xk();
        return new Vo(new Po(a.Ob, a.Pb), new No({
            clearBoth: !0
        }), null, !0, 2, [], b, a.l, null, null, null, a.A, a.j)
    }
    class ep {
        constructor(a, b, c, d, e, f, g) {
            this.A = a;
            this.Sa = b.slice(0);
            this.j = c;
            this.Ob = d;
            this.Pb = e;
            this.B = f;
            this.l = g
        }
        N() {
            return this.l
        }
    };

    function ip(a) {
        return eb(a.B ? fp(a.j, a.qa, a.l) : [], a.A ? dp(a.j, a.A, a.qa, a.l) : []).filter(b => {
            var c = b.Ob.tagName;
            c ? (c = cp[c.toUpperCase()], b = null != c && c.Ua.contains(b.Pb)) : b = !1;
            return !b
        })
    }
    class jp {
        constructor(a, b, c) {
            this.qa = a;
            this.A = b.rb;
            this.B = b.Hc;
            this.j = b.articleStructure;
            this.l = c
        }
    };

    function kp(a, b) {
        if (!b) return !1;
        const c = ma(b),
            d = a.j.get(c);
        if (null != d) return d;
        if (1 == b.nodeType && ("UL" == b.tagName || "OL" == b.tagName) && "none" != a.l.getComputedStyle(b).getPropertyValue("list-style-type")) return a.j.set(c, !0), !0;
        b = kp(a, b.parentNode);
        a.j.set(c, b);
        return b
    }

    function lp(a, b) {
        return bb(b.Sa, c => kp(a, c))
    }
    class mp {
        constructor(a) {
            this.j = new Gj;
            this.l = a
        }
    };
    class np {
        constructor(a, b) {
            this.B = a;
            this.j = [];
            this.l = [];
            this.A = b
        }
    };
    var pp = (a, {
            ri: b = !1,
            ti: c = 3,
            Ie: d = null
        } = {}) => {
            a = ip(a);
            return op(a, b, c, d)
        },
        op = (a, b = !1, c = 3, d = null) => {
            if (2 > c) throw Error("minGroupSize should be at least 2, found " + c);
            var e = a.slice(0);
            e.sort(gp);
            a = [];
            b = new np(b, d);
            for (const k of e) {
                d = b;
                e = {
                    Kb: k,
                    Cb: 51 > k.B.length ? !1 : null != d.A ? !lp(d.A, k) : !0
                };
                if (d.B || e.Cb) {
                    if (d.j.length) {
                        var f = d.j[d.j.length - 1].Kb;
                        b: {
                            var g = f.N();
                            var h = f.Sa[f.Sa.length - 1];f = e.Kb.Sa[0];
                            if (!h || !f) {
                                g = !1;
                                break b
                            }
                            var l = h.parentElement;
                            const m = f.parentElement;
                            if (l && m && l == m) {
                                l = 0;
                                for (h = h.nextSibling; 10 >
                                    l && h;) {
                                    if (h == f) {
                                        g = !0;
                                        break b
                                    }
                                    if (xo(g, h)) break;
                                    h = h.nextSibling;
                                    l++
                                }
                                g = !1
                            } else g = !1
                        }
                    } else g = !0;
                    g ? (d.j.push(e), e.Cb && d.l.push(e.Kb)) : (d.j = [e], d.l = e.Cb ? [e.Kb] : [])
                }
                if (b.l.length >= c) {
                    if (1 >= b.l.length) d = null;
                    else {
                        e = b.l[1];
                        for (d = b; d.j.length && !d.j[0].Cb;) d.j.shift();
                        d.j.shift();
                        d.l.shift();
                        d = e
                    }
                    d && a.push(d)
                }
            }
            return a
        };
    var rp = (a, b) => {
            a = qp(a, b);
            const c = new mp(b);
            return Wj(a, d => pp(d, {
                Ie: c
            }))
        },
        qp = (a, b) => {
            const c = new Gj;
            a.forEach(d => {
                var e = Go(C(d, pk, 1));
                if (e) {
                    const f = e.toString();
                    Cj(c, f) || c.set(f, {
                        articleStructure: d,
                        zd: e,
                        rb: null,
                        Hc: !1
                    });
                    e = c.get(f);
                    (d = (d = C(d, pk, 2)) ? y(d, 7) : null) ? e.rb = e.rb ? e.rb + "," + d : d: e.Hc = !0
                }
            });
            return Fj(c).map(d => {
                const e = Eo(d.zd, b.document);
                return e.length ? new jp(e[0], d, b) : null
            }).filter(d => null != d)
        };
    const sp = a => {
            a = a.qa.getBoundingClientRect();
            return 0 < a.width && 0 < a.height
        },
        tp = a => {
            let b = 0;
            a.forEach(c => b = Math.max(b, c.qa.getBoundingClientRect().width));
            return c => c.qa.getBoundingClientRect().width > .5 * b
        },
        up = a => {
            const b = V(a).clientHeight || 0;
            return c => c.qa.getBoundingClientRect().height >= .75 * b
        },
        vp = (a, b) => a.qa.getBoundingClientRect().top - b.qa.getBoundingClientRect().top;
    var wp = a => (null == a ? 0 : a.google_ad_slot) ? gk(new qk(1, {
            sd: a.google_ad_slot
        })) : ik("Missing dimension when creating placement id"),
        yp = a => {
            switch (a.Ha) {
                case 0:
                case 1:
                    var b = a.A;
                    null == b ? a = null : (a = b.W(), null == a ? a = null : (b = b.l(), a = null == b ? null : new qk(0, {
                        Ac: [a],
                        bd: b
                    })));
                    return null != a ? gk(a) : ik("Missing dimension when creating placement id");
                case 2:
                    return a = xp(a), null != a ? gk(a) : ik("Missing dimension when creating placement id");
                default:
                    return ik("Invalid type: " + a.Ha)
            }
        };
    const xp = a => {
        if (null == a || null == a.C) return null;
        const b = C(a.C, pk, 1),
            c = C(a.C, pk, 2);
        if (null == b || null == c) return null;
        const d = a.O;
        if (null == d) return null;
        a = a.l();
        return null == a ? null : new qk(0, {
            Ac: [b, c],
            ee: d,
            bd: Mo[a]
        })
    };

    function zp(a) {
        const b = Yo(a.P);
        return (b ? wp(b) : yp(a.P)).map(c => tk(c))
    }

    function Ap(a) {
        a.j = a.j || zp(a);
        return a.j
    }

    function Bp(a, b) {
        if (a.P.B) throw Error("AMA:AP:AP");
        nn(b, a.W(), a.P.l());
        a = a.P;
        a.B = !0;
        null != b && a.J.push(b)
    }
    var Cp = class {
        constructor(a, b, c) {
            this.P = a;
            this.l = b;
            this.U = c;
            this.j = null
        }
        W() {
            return this.l
        }
        fill(a, b) {
            var c = this.P;
            (a = c.D.l(a, b, this.l, c.j)) && Bp(this, a.Fa);
            return a
        }
    };
    var Dp = Ci(754, function(a, b) {
        var c = [],
            d = [];
        try {
            for (var e = [], f = 0; f < a.length; f++) {
                var g = a[f],
                    h = g.H.j(g.j);
                h && e.push({
                    Yc: g,
                    anchorElement: h
                })
            }
            for (f = 0; f < e.length; f++) {
                a = d;
                var l = a.push;
                var k = e[f],
                    m = k.anchorElement,
                    n = k.Yc,
                    q = n.I,
                    r = n.j.document.createElement("div");
                r.className = "google-auto-placed";
                var v = r.style;
                v.textAlign = "center";
                v.width = "100%";
                v.height = "0px";
                v.clear = q ? "both" : "none";
                var x = r;
                try {
                    nn(x, m, n.l());
                    var F = x
                } catch (J) {
                    throw Ql(x), J;
                }
                l.call(a, F)
            }
            var A = sj(b),
                E = tj(b);
            for (f = 0; f < d.length; f++) {
                b = E;
                l = A;
                var D =
                    d[f].getBoundingClientRect(),
                    I = e[f];
                c.push(new Cp(I.Yc, I.anchorElement, new Pj(D.left + b, D.top + l, D.right - D.left)))
            }
        } finally {
            for (f = 0; f < d.length; f++) Ql(d[f])
        }
        return c
    });

    function Ep(a, b) {
        const c = ip(b);
        c.sort(gp);
        return new Fp(a, b, c)
    }

    function Gp(a) {
        if (!a.l) {
            if (a.A >= a.B.length) var b = null;
            else {
                {
                    const c = a.B[a.A++].Sa[0];
                    ka(c) && 1 == c.nodeType ? b = Hp(a, c, 0) : (b = a.j.document.createElement("div"), L(b, {
                        display: "none"
                    }), c.parentNode.insertBefore(b, c), b = Hp(a, b, 3))
                }
                b = Dp([b], a.j)[0] || null
            }
            if (b) return b;
            a.l = !0
        }
        return null
    }

    function Hp(a, b, c) {
        return new Vo(new Po(b, c), new No({}), null, !0, 2, [], null, a.j, null, null, null, a.C.j, null)
    }
    var Fp = class {
        constructor(a, b, c) {
            this.j = a;
            this.C = b;
            this.B = c;
            this.l = !1;
            this.A = 0
        }
    };
    var Ip = class {
        constructor(a) {
            this.l = a
        }
        j() {
            return Gp(this.l)
        }
    };
    const Jp = {
            1: "0.5vp",
            2: "300px"
        },
        Kp = {
            1: 700,
            2: 1200
        },
        Lp = {
            [1]: {
                jd: "3vp",
                tc: "1vp",
                hd: "0.3vp"
            },
            [2]: {
                jd: "900px",
                tc: "300px",
                hd: "90px"
            }
        };

    function Mp(a) {
        const b = Np(a);
        return Op(b, V(a).clientHeight || Kp[b])
    }
    class Pp {
        constructor(a, b, c, d, e, f) {
            this.A = a;
            this.C = b;
            this.D = c.sort((g, h) => g.adCount - h.adCount);
            this.l = d;
            this.B = e;
            this.j = f
        }
    }

    function Qp(a, b) {
        for (let c of a)
            if (y(c, 1) == b) return c;
        return null
    }

    function Rp(a, b) {
        if (void 0 === a) return null;
        const c = [];
        for (let d of a) {
            a = y(d, 1);
            const e = Sp(y(d, 2), b);
            if ("number" !== typeof a || null === e) return null;
            c.push({
                adCount: a,
                sc: {
                    Hb: e,
                    xa: Sp(y(d, 3), b)
                }
            })
        }
        return c
    }

    function Tp(a, b) {
        const c = Sp(y(a, 2), b),
            d = Sp(y(a, 5), b);
        if (null === c) return null;
        const e = y(a, 4);
        if (null == e) return null;
        var f = G(a, Nk, 3);
        f = Rp(f, b);
        if (null === f) return null;
        const g = C(a, Ok, 7);
        return new Pp(c, d, f, e, $b(a, 6), g ? Up(g, b) : void 0)
    }

    function Op(a, b) {
        a = Sp(Jp[a], b);
        return new Pp(null === a ? Infinity : a, null, [], 3, null)
    }

    function Sp(a, b) {
        if (!a) return null;
        const c = parseFloat(a);
        return isNaN(c) ? null : a.endsWith("px") ? c : a.endsWith("vp") ? c * b : null
    }

    function Np(a) {
        a = 900 <= V(a).clientWidth;
        return Ef() && !a ? 1 : 2
    }

    function Vp(a, b, c) {
        if (4 > c) return [];
        const d = Math.ceil(c / 2);
        return [{
            adCount: d,
            sc: {
                Hb: 2 * a,
                xa: 2 * b
            }
        }, {
            adCount: d + Math.ceil((c - d) / 2),
            sc: {
                Hb: 3 * a,
                xa: 3 * b
            }
        }]
    }

    function Up(a, b) {
        return {
            Uc: Sp(y(a, 2), b) || 0,
            Sc: y(a, 3) || 1,
            Qa: Sp(y(a, 1), b) || 0
        }
    };

    function Wp(a, b, c) {
        return cj({
            top: a.j.top - (c + 1),
            right: a.j.right + (c + 1),
            bottom: a.j.bottom + (c + 1),
            left: a.j.left - (c + 1)
        }, b.j)
    }

    function Xp(a) {
        if (!a.length) return null;
        const b = dj(a.map(c => c.j));
        a = a.reduce((c, d) => c + d.l, 0);
        return new Yp(b, a)
    }
    class Yp {
        constructor(a, b) {
            this.j = a;
            this.l = b
        }
    };

    function Zp(a = window) {
        a = a.googletag;
        return (null === a || void 0 === a ? 0 : a.apiReady) ? a : void 0
    };
    var jq = (a, b) => {
        const c = fb(b.document.querySelectorAll(".google-auto-placed")),
            d = $p(b),
            e = aq(b),
            f = bq(b),
            g = cq(b),
            h = fb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot")),
            l = fb(b.document.querySelectorAll("div.googlepublisherpluginad"));
        let k = [].concat(fb(b.document.querySelectorAll("iframe[id^=aswift_],iframe[id^=google_ads_frame]")), fb(b.document.querySelectorAll("ins.adsbygoogle")));
        b = [];
        for (const [m, n] of [
                [a.yb, c],
                [a.Ga, d],
                [a.ce, e],
                [a.zb, f],
                [a.Ab, g],
                [a.ae, h],
                [a.be, l]
            ]) a = n, !1 === m ? b = b.concat(a) :
            k = k.concat(a);
        a = iq(k);
        b = iq(b);
        a = a.slice(0);
        for (const m of b)
            for (b = 0; b < a.length; b++)(m.contains(a[b]) || a[b].contains(m)) && a.splice(b, 1);
        return a
    };
    const kq = a => {
            const b = Zp(a);
            return b ? Za($a(b.pubads().getSlots(), c => a.document.getElementById(c.getSlotElementId())), c => null != c) : null
        },
        $p = a => fb(a.document.querySelectorAll('ins.adsbygoogle[data-anchor-shown="true"]')),
        aq = a => fb(a.document.querySelectorAll("ins.adsbygoogle[data-ad-format=autorelaxed]")),
        bq = a => (kq(a) || fb(a.document.querySelectorAll("div[id^=div-gpt-ad]"))).concat(fb(a.document.querySelectorAll("iframe[id^=google_ads_iframe]"))),
        cq = a => fb(a.document.querySelectorAll("div.trc_related_container,div.OUTBRAIN,div[id^=rcjsload],div[id^=ligatusframe],div[id^=crt-],iframe[id^=cto_iframe],div[id^=yandex_], div[id^=Ya_sync],iframe[src*=adnxs],div.advertisement--appnexus,div[id^=apn-ad],div[id^=amzn-native-ad],iframe[src*=amazon-adsystem],iframe[id^=ox_],iframe[src*=openx],img[src*=openx],div[class*=adtech],div[id^=adtech],iframe[src*=adtech],div[data-content-ad-placement=true],div.wpcnt div[id^=atatags-]"));
    var iq = a => {
        const b = [];
        for (const c of a) {
            a = !0;
            for (let d = 0; d < b.length; d++) {
                const e = b[d];
                if (e.contains(c)) {
                    a = !1;
                    break
                }
                if (c.contains(e)) {
                    a = !1;
                    b[d] = c;
                    break
                }
            }
            a && b.push(c)
        }
        return b
    };
    var lq = Ci(453, jq),
        mq = Ci(454, (a, b) => {
            const c = fb(b.document.querySelectorAll(".google-auto-placed")),
                d = $p(b),
                e = aq(b),
                f = bq(b),
                g = cq(b),
                h = fb(b.document.querySelectorAll("ins.adsbygoogle-ablated-ad-slot"));
            b = fb(b.document.querySelectorAll("div.googlepublisherpluginad"));
            return iq([].concat(!0 === a.yb ? c : [], !0 === a.Ga ? d : [], !0 === a.ce ? e : [], !0 === a.zb ? f : [], !0 === a.Ab ? g : [], !0 === a.ae ? h : [], !0 === a.be ? b : []))
        });

    function nq(a, b, c) {
        const d = oq(a);
        b = pq(d, b, c);
        return new qq(a, d, b)
    }

    function rq(a) {
        return 1 < (a.bottom - a.top) * (a.right - a.left)
    }

    function sq(a) {
        return a.j.map(b => b.box)
    }

    function tq(a) {
        return a.j.reduce((b, c) => b + c.box.bottom - c.box.top, 0)
    }
    class qq {
        constructor(a, b, c) {
            this.A = a;
            this.j = b.slice(0);
            this.B = c.slice(0);
            this.l = null
        }
    }

    function oq(a) {
        const b = lq({
                Ga: !1
            }, a),
            c = tj(a),
            d = sj(a);
        return b.map(e => {
            const f = e.getBoundingClientRect();
            return (e = !!e.className && -1 != e.className.indexOf("google-auto-placed")) || rq(f) ? {
                box: {
                    top: f.top + d,
                    right: f.right + c,
                    bottom: f.bottom + d,
                    left: f.left + c
                },
                mi: e ? 1 : 0
            } : null
        }).filter(qe(e => null === e))
    }

    function pq(a, b, c) {
        return void 0 != b && a.length <= (void 0 != c ? c : 8) ? uq(a, b) : $a(a, d => new Yp(d.box, 1))
    }

    function uq(a, b) {
        a = $a(a, d => new Yp(d.box, 1));
        const c = [];
        for (; 0 < a.length;) {
            let d = a.pop(),
                e = !0;
            for (; e;) {
                e = !1;
                for (let f = 0; f < a.length; f++)
                    if (Wp(d, a[f], b)) {
                        d = Xp([d, a[f]]);
                        Array.prototype.splice.call(a, f, 1);
                        e = !0;
                        break
                    }
            }
            c.push(d)
        }
        return c
    };

    function vq(a, b, c) {
        const d = Oj(c, b);
        return !bb(a, e => cj(e, d))
    }

    function wq(a, b, c, d, e) {
        e = e.U;
        const f = Oj(e, b),
            g = Oj(e, c),
            h = Oj(e, d);
        return !bb(a, l => cj(l, g) || cj(l, f) && !cj(l, h))
    }

    function xq(a, b, c, d) {
        const e = sq(a);
        if (vq(e, b, d.U)) return !0;
        if (!wq(e, b, c.Uc, c.Qa, d)) return !1;
        const f = new Yp(Oj(d.U, 0), 1);
        a = Za(a.B, g => Wp(g, f, c.Qa));
        b = ab(a, (g, h) => g + h.l, 1);
        return 0 === a.length || b > c.Sc ? !1 : !0
    };
    var yq = (a, b) => {
        const c = [];
        let d = a;
        for (a = () => {
                c.push({
                    anchor: d.anchor,
                    position: d.position
                });
                return d.anchor == b.anchor && d.position == b.position
            }; d;) {
            switch (d.position) {
                case 1:
                    if (a()) return c;
                    d.position = 2;
                case 2:
                    if (a()) return c;
                    if (d.anchor.firstChild) {
                        d = {
                            anchor: d.anchor.firstChild,
                            position: 1
                        };
                        continue
                    } else d.position = 3;
                case 3:
                    if (a()) return c;
                    d.position = 4;
                case 4:
                    if (a()) return c
            }
            for (; d && !d.anchor.nextSibling && d.anchor.parentNode != d.anchor.ownerDocument.body;) {
                d = {
                    anchor: d.anchor.parentNode,
                    position: 3
                };
                if (a()) return c;
                d.position = 4;
                if (a()) return c
            }
            d && d.anchor.nextSibling ? d = {
                anchor: d.anchor.nextSibling,
                position: 1
            } : d = null
        }
        return c
    };

    function zq(a, b) {
        const c = new nk,
            d = new Hj;
        b.forEach(e => {
            if (nc(e, Wk, 1, Zk)) {
                e = nc(e, Wk, 1, Zk);
                if (C(e, Uk, 1) && C(e, Uk, 1).W() && C(e, Uk, 2) && C(e, Uk, 2).W()) {
                    const g = Aq(a, C(e, Uk, 1).W()),
                        h = Aq(a, C(e, Uk, 2).W());
                    if (g && h)
                        for (var f of yq({
                                anchor: g,
                                position: C(e, Uk, 1).l()
                            }, {
                                anchor: h,
                                position: C(e, Uk, 2).l()
                            })) c.set(ma(f.anchor), f.position)
                }
                C(e, Uk, 3) && C(e, Uk, 3).W() && (f = Aq(a, C(e, Uk, 3).W())) && c.set(ma(f), C(e, Uk, 3).l())
            } else nc(e, Xk, 2, Zk) ? Bq(a, nc(e, Xk, 2, Zk), c) : nc(e, Yk, 3, Zk) && Cq(a, nc(e, Yk, 3, Zk), d)
        });
        return new Dq(c, d)
    }
    class Dq {
        constructor(a, b) {
            this.l = a;
            this.j = b
        }
    }
    const Bq = (a, b, c) => {
            C(b, pk, 1) && (a = Eq(a, C(b, pk, 1))) && a.forEach(d => {
                d = ma(d);
                c.set(d, 1);
                c.set(d, 4);
                c.set(d, 2);
                c.set(d, 3)
            })
        },
        Cq = (a, b, c) => {
            C(b, pk, 1) && (a = Eq(a, C(b, pk, 1))) && a.forEach(d => {
                c.add(ma(d))
            })
        },
        Aq = (a, b) => (a = Eq(a, b)) && 0 < a.length ? a[0] : null,
        Eq = (a, b) => (b = Go(b)) ? Eo(b, a) : null;

    function Fq(a, b, c) {
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
            if (Gq(b)) return !0;
            if (a.j.has(b)) break;
            c.push(b);
            b = b.parentElement
        }
        c.forEach(d => a.j.add(d));
        return !1
    }

    function Hq(a) {
        a = Iq(a);
        return a.has("all") || a.has("after")
    }

    function Jq(a) {
        a = Iq(a);
        return a.has("all") || a.has("before")
    }

    function Iq(a) {
        return (a = a && a.getAttribute("data-no-auto-ads")) ? new Set(a.split("|")) : new Set
    }

    function Gq(a) {
        const b = Iq(a);
        return a && ("AUTO-ADS-EXCLUSION-AREA" === a.tagName || b.has("inside") || b.has("all"))
    }
    var Kq = class {
        constructor() {
            this.j = new Set
        }
    };

    function Lq(a) {
        return function(b) {
            return Dp(b, a)
        }
    }

    function Mq(a) {
        const b = V(a).clientHeight;
        return b ? ua(Nq, b + sj(a)) : ne
    }

    function Oq(a, b, c) {
        if (0 > a) throw Error("ama::ead:nd");
        if (Infinity === a) return ne;
        const d = sq(c || nq(b));
        return e => vq(d, a, e.U)
    }

    function Pq(a, b, c, d) {
        if (0 > a || 0 > b.Uc || 0 > b.Sc || 0 > b.Qa) throw Error("ama::ead:nd");
        return Infinity === a ? ne : e => xq(d || nq(c, b.Qa), a, b, e)
    }

    function Qq(a) {
        if (!a.length) return ne;
        const b = new bk(a);
        return c => b.contains(c.Ha)
    }

    function Rq(a) {
        return function(b) {
            for (let c of b.lc)
                if (-1 < a.indexOf(c)) return !1;
            return !0
        }
    }

    function Sq(a) {
        return a.length ? function(b) {
            const c = b.lc;
            return a.some(d => -1 < c.indexOf(d))
        } : oe
    }

    function Tq(a, b) {
        if (0 >= a) return oe;
        const c = V(b).scrollHeight - a;
        return function(d) {
            return d.U.j <= c
        }
    }

    function Uq(a) {
        const b = {};
        a && a.forEach(c => {
            b[c] = !0
        });
        return function(c) {
            return !b[y(c.eb, 2) || 0]
        }
    }

    function Vq(a) {
        return a.length ? b => a.includes(y(b.eb, 2) || 0) : oe
    }

    function Wq(a) {
        return a.length ? b => a.includes(y(b.eb, 1) || 0) : oe
    }

    function Xq(a, b) {
        const c = zq(a, b);
        return function(d) {
            var e = d.W();
            d = Mo[d.P.l()];
            var f = ma(e);
            f = c.l.j.get(f);
            if (!(f = f ? f.contains(d) : !1)) a: {
                if (c.j.contains(ma(e))) switch (d) {
                    case 2:
                    case 3:
                        f = !0;
                        break a;
                    default:
                        f = !1;
                        break a
                }
                for (e = e.parentElement; e;) {
                    if (c.j.contains(ma(e))) {
                        f = !0;
                        break a
                    }
                    e = e.parentElement
                }
                f = !1
            }
            return !f
        }
    }

    function Yq() {
        const a = new Kq;
        return function(b) {
            var c = b.W();
            b = Mo[b.P.l()];
            a: switch (b) {
                case 1:
                    var d = Hq(c.previousElementSibling) || Jq(c);
                    break a;
                case 4:
                    d = Hq(c) || Jq(c.nextElementSibling);
                    break a;
                case 2:
                    d = Jq(c.firstElementChild);
                    break a;
                case 3:
                    d = Hq(c.lastElementChild);
                    break a;
                default:
                    throw Error("Unknown RelativePosition: " + b);
            }
            return !(d || Fq(a, c, b))
        }
    }
    const Nq = (a, b) => b.U.j >= a,
        Zq = (a, b, c) => {
            c = c.U.l;
            return a <= c && c <= b
        };
    var $q = class {
        constructor(a, b) {
            this.A = a;
            this.l = b
        }
        j() {
            const a = Mq(this.A);
            let b = Gp(this.l);
            for (; b;) {
                if (a(b)) return b;
                b = Gp(this.l)
            }
            return null
        }
    };
    var ar = class {
        constructor(a, b) {
            this.l = a;
            this.A = b
        }
        j() {
            var a = new hl;
            var b = C(this.A.j, pk, 1);
            a = gc(a, 1, b);
            a = z(a, 2, 2);
            a = z(a, 8, 1);
            a = Wo([a], this.l);
            return Dp(a, this.l)[0] || null
        }
    };
    const br = (a, b, c) => {
            a = a.createElement("script");
            me(a, Qc(tc(c)));
            a.setAttribute("async", "true");
            b.appendChild(a)
        },
        cr = {
            [1]: "out_of_view"
        };

    function dr() {
        const {
            promise: a,
            resolve: b
        } = new Fn;
        return {
            promise: a,
            resolve: b
        }
    };

    function er(a, b, c = () => {}) {
        b.google_llp || (b.google_llp = {});
        b = b.google_llp;
        let d = b[a];
        if (d) return d;
        d = dr();
        b[a] = d;
        c();
        return d
    }

    function fr(a, b, c) {
        return er(a, b, () => {
            Lf(b.document, c)
        }).promise
    };

    function gr(a, b, c) {
        return new hr(fr(7, a, c).then(d => {
            d.init(b);
            d.handleAdConfig({
                preloadAdBreaks: "on",
                sound: "on"
            });
            return d
        }).catch(Ei(915)))
    }

    function ir(a, b) {
        a.j || (a.l.then(c => {
            c.handleAdBreak({
                type: "preroll",
                name: "audiosense-preroll",
                adBreakDone: b
            })
        }), a.j = !0)
    }
    var hr = class {
        constructor(a) {
            this.l = a;
            this.j = !1
        }
    };
    var jr = {
            ka: "ama_success",
            da: .1,
            ra: !0
        },
        kr = {
            ka: "ama_failure",
            da: .1,
            ra: !0
        },
        lr = {
            ka: "ama_inf_scr",
            da: .1,
            ra: !0
        },
        mr = {
            ka: "ama_inf_scr",
            da: .1,
            ra: !0
        },
        nr = {
            ka: "ama_coverage",
            da: .1,
            ra: !0
        },
        or = {
            ka: "ama_inf_scr",
            da: 1,
            ra: !0
        },
        pr = {
            ka: "ama_opt",
            da: .1,
            ra: !0
        },
        qr = {
            ka: "ama_aud_sen",
            da: 1,
            ra: !0
        };

    function rr(a, b) {
        for (var c = 0; c < b.length; c++) a.ma(b[c]);
        return a
    }

    function sr(a, b) {
        a.A = a.A ? a.A : b;
        return a
    }
    class tr {
        constructor(a) {
            this.G = {};
            this.G.c = a;
            this.C = [];
            this.A = null;
            this.D = [];
            this.H = 0
        }
        Ma(a) {
            this.G.wpc = a;
            return this
        }
        ma(a) {
            for (var b = 0; b < this.C.length; b++)
                if (this.C[b] == a) return this;
            this.C.push(a);
            return this
        }
        B(a) {
            var b = Cc(this.G);
            0 < this.H && (b.t = this.H);
            b.err = this.C.join();
            b.warn = this.D.join();
            this.A && (b.excp_n = this.A.name, b.excp_m = this.A.message && this.A.message.substring(0, 512), b.excp_s = this.A.stack && Vh(this.A.stack, ""));
            b.w = 0 < a.innerWidth ? a.innerWidth : null;
            b.h = 0 < a.innerHeight ? a.innerHeight : null;
            return b
        }
    };

    function ur(a, b, c) {
        c = c.B(a.j);
        b.ra && (c.pvc = og(a.j));
        0 < b.da && (c.r = b.da, S(b.ka, c, b.da))
    }
    var vr = class {
        constructor(a) {
            this.j = a
        }
    };

    function wr(a, b, c, d) {
        let e;
        const f = null == (e = C(b, bl, 6)) ? void 0 : G(e, cl, 1);
        return f && 0 != f.length ? (b = C(b, Ek, 27)) ? C(b, Fk, 2) ? gk(new xr(a, f, b, c, d)) : ik("No AudioSenseConfig.PlacementConfig found") : ik("No AudioSenseConfig found") : ik("No ArticleStructure found")
    }

    function yr(a) {
        a.A.addEventListener("playing", () => {
            a.C.j || (a.A.pause(), ir(a.C, () => a.A.play()))
        })
    }

    function zr(a) {
        return (a = C(a.l, Hk, 3)) ? G(a, Ik, 1).some(b => 1 === ac(b, 1, 0)) : !1
    }

    function Ar(a, b) {
        let c;
        a = Object.assign({}, b, {
            vh: V(a.j).clientHeight,
            eid: null == (c = C(a.l, Jk, 4)) ? void 0 : H(c, 2)
        });
        S(qr.ka, a, qr.da)
    }
    var xr = class {
        constructor(a, b, c, d, e) {
            this.j = a;
            this.G = b;
            this.l = c;
            this.B = d;
            this.D = e;
            this.A = this.C = null
        }
    };
    const Br = ["-webkit-text-fill-color"];

    function Cr(a) {
        if (rb) {
            {
                const c = Nf(a.document.body, a);
                if (c) {
                    a = {};
                    var b = c.length;
                    for (let d = 0; d < b; ++d) a[c[d]] = "initial";
                    a = Dr(a)
                } else a = Er()
            }
        } else a = Er();
        return a
    }
    var Er = () => {
        const a = {
            all: "initial"
        };
        Ya(Br, b => {
            a[b] = "unset"
        });
        return a
    };

    function Dr(a) {
        Ya(Br, b => {
            delete a[b]
        });
        return a
    };
    var Fr = class {
        constructor(a) {
            this.j = a
        }
        na(a) {
            const b = a.document.createElement("div");
            L(b, Cr(a));
            L(b, {
                width: "100%",
                "max-width": "1000px",
                margin: "auto"
            });
            b.appendChild(this.j);
            const c = a.document.createElement("div");
            L(c, Cr(a));
            L(c, {
                width: "100%",
                "text-align": "center",
                display: "block",
                padding: "5px 5px 2px",
                "box-sizing": "border-box",
                "background-color": "#FFF"
            });
            c.appendChild(b);
            return c
        }
    };
    var Gr = (a, b) => (b = C(b, bl, 6)) ? rp(G(b, cl, 1), a).map(c => hp(c)) : [];
    var Hr = {},
        Ir = {},
        Jr = {};

    function Kr() {
        throw Error("Do not instantiate directly");
    }
    Kr.prototype.Tb = null;
    Kr.prototype.na = function() {
        return this.content
    };
    Kr.prototype.toString = function() {
        return this.content
    };

    function Lr(a) {
        if (a.Ta !== Hr) throw Error("Sanitized content was not of kind HTML.");
        return yd(a.toString(), a.Tb || null)
    }

    function Mr() {
        Kr.call(this)
    }
    xa(Mr, Kr);
    Mr.prototype.Ta = Hr;

    function Nr(a) {
        if (null != a) switch (a.Tb) {
            case 1:
                return 1;
            case -1:
                return -1;
            case 0:
                return 0
        }
        return null
    }

    function Or(a) {
        return null != a && a.Ta === Hr ? a : a instanceof wd ? Pr(vd(a).toString(), a.va()) : Pr(String(String(a)).replace(Qr, Rr), Nr(a))
    }
    var Pr = function(a) {
        function b(c) {
            this.content = c
        }
        b.prototype = a.prototype;
        return function(c, d) {
            c = new b(String(c));
            void 0 !== d && (c.Tb = d);
            return c
        }
    }(Mr);

    function Sr(a) {
        return a.replace(/<\//g, "<\\/").replace(/\]\]>/g, "]]\\>")
    }

    function Tr(a) {
        return null != a && a.Ta === Hr ? String(String(a.na()).replace(Ur, "").replace(Vr, "&lt;")).replace(Wr, Rr) : String(a).replace(Qr, Rr)
    }

    function Xr(a) {
        a = String(a);
        const b = (d, e, f) => {
            const g = Math.min(e.length - f, d.length);
            for (let l = 0; l < g; l++) {
                var h = e[f + l];
                if (d[l] !== ("A" <= h && "Z" >= h ? h.toLowerCase() : h)) return !1
            }
            return !0
        };
        for (var c = 0; - 1 != (c = a.indexOf("<", c));) {
            if (b("\x3c/script", a, c) || b("\x3c!--", a, c)) return "zSoyz";
            c += 1
        }
        return a
    }

    function Yr(a) {
        if (null == a) return " null ";
        if (null != a && a.Ta === Ir) return a.na();
        if (a instanceof Kc) return Jc(a).toString();
        if (a instanceof Td) {
            var b;
            a = Wd(a);
            return (null === (b = Ld()) || void 0 === b ? 0 : b.isScript(a)) ? TrustedScript.prototype.toString.apply(a) : a
        }
        switch (typeof a) {
            case "boolean":
            case "number":
                return " " + a + " ";
            default:
                return "'" + String(String(a)).replace(Zr, $r) + "'"
        }
    }

    function as(a) {
        null != a && a.Ta === Jr ? a = Sr(a.na()) : null == a ? a = "" : a instanceof id ? a = Sr(hd(a)) : a instanceof td ? a = Sr(a instanceof td && a.constructor === td ? a.j : "type_error:SafeStyleSheet") : (a = String(a), a = bs.test(a) ? a : "zSoyz");
        return a
    }
    const cs = {
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

    function Rr(a) {
        return cs[a]
    }
    const ds = {
        "\x00": "\\x00",
        "\b": "\\x08",
        "\t": "\\t",
        "\n": "\\n",
        "\v": "\\x0b",
        "\f": "\\f",
        "\r": "\\r",
        '"': "\\x22",
        $: "\\x24",
        "&": "\\x26",
        "'": "\\x27",
        "(": "\\x28",
        ")": "\\x29",
        "*": "\\x2a",
        "+": "\\x2b",
        ",": "\\x2c",
        "-": "\\x2d",
        ".": "\\x2e",
        "/": "\\/",
        ":": "\\x3a",
        "<": "\\x3c",
        "=": "\\x3d",
        ">": "\\x3e",
        "?": "\\x3f",
        "[": "\\x5b",
        "\\": "\\\\",
        "]": "\\x5d",
        "^": "\\x5e",
        "{": "\\x7b",
        "|": "\\x7c",
        "}": "\\x7d",
        "\u0085": "\\x85",
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };

    function $r(a) {
        return ds[a]
    }
    const Qr = /[\x00\x22\x26\x27\x3c\x3e]/g,
        Wr = /[\x00\x22\x27\x3c\x3e]/g,
        Zr = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\x5b-\x5d\x7b\x7d\x85\u2028\u2029]/g,
        bs = /^(?!-*(?:expression|(?:moz-)?binding))(?:(?:[.#]?-?(?:[_a-z0-9-]+)(?:-[_a-z0-9-]+)*-?|(?:rgb|hsl)a?\([0-9.%,\u0020]+\)|[-+]?(?:[0-9]+(?:\.[0-9]*)?|\.[0-9]+)(?:e-?[0-9]+)?(?:[a-z]{1,4}|%)?|!important)(?:\s*[,\u0020]\s*|$))*$/i,
        Ur = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        Vr = /</g;
    /* 
     Copyright The Closure Library Authors. 
     SPDX-License-Identifier: Apache-2.0 
    */
    var es = class {
        constructor(a, b, c, d) {
            this.j = a;
            this.l = b;
            this.host = c;
            this.language = d
        }
        init() {
            this.j.setAttribute("id", "prose-iframe");
            this.j.setAttribute("width", "100%");
            this.j.setAttribute("height", "100%");
            he(this.j, jd({
                "box-sizing": "border-box",
                border: "unset"
            }));
            var a = this.l;
            var b = this.host,
                c = this.language;
            a = Pr('<div class="gcse-search" data-gname="' + Tr("auto-rs-prose") + '" data-adclient="' + Tr(a) + '" data-as_sitesearch="' + Tr(b) + '" data-gl="' + Tr(c) + '"></div>');
            a = Lr(a);
            b = Pr("<style>.gsc-search-box {max-width: 520px !important;}.gsc-input {padding-right: 0 !important;}.gsc-input-box {border-radius: 16px 0 0 16px !important;}.gsc-search-button-v2 {border-left: 0 !important; border-radius: 0 16px 16px 0 !important; min-height: 30px !important; margin-left: 0 !important;}.gsc-cursor-page, .gsc-cursor-next-page, .gsc-cursor-numbered-page {color: #1a73e8 !important;}.gsc-cursor-chevron {fill: #1a73e8 !important;}.gsc-cursor-box {text-align: center !important;}.gsc-cursor-current-page {color: #000 !important;}.gcsc-find-more-on-google-root, .gcsc-find-more-on-google {display: none !important;}</style>");
            b = Lr(b);
            c = {
                style: jd({
                    margin: 0
                })
            };
            var d = {
                    src: Sc(uc("https://cse.google.com/cse.js?cx=9d449ff4a772956c6&language=%{lang}"), {
                        lang: this.language
                    })
                },
                e = {};
            const f = {};
            for (g in d) Object.prototype.hasOwnProperty.call(d, g) && (f[g] = d[g]);
            for (const h in e) Object.prototype.hasOwnProperty.call(e, h) && (f[h] = e[h]);
            var g = Bd("script", f);
            g = zd("body", c, [a, b, g]);
            this.j.srcdoc = vd(g)
        }
    };

    function fs(a) {
        const b = gs(a);
        Ya(a.j.maxZIndexListeners, c => c(b))
    }

    function gs(a) {
        a = Sf(a.j.maxZIndexRestrictions);
        return a.length ? Math.min.apply(null, a) : null
    }
    class hs {
        constructor(a) {
            this.j = hj(a).floatingAdsStacking
        }
    }

    function is(a) {
        if (null == a.j) {
            var b = a.l,
                c = a.A;
            const d = b.j.nextRestrictionId++;
            b.j.maxZIndexRestrictions[d] = c;
            fs(b);
            a.j = d
        }
    }

    function js(a) {
        if (null != a.j) {
            var b = a.l;
            delete b.j.maxZIndexRestrictions[a.j];
            fs(b);
            a.j = null
        }
    }
    class ks {
        constructor(a, b) {
            this.l = a;
            this.A = b;
            this.j = null
        }
    };

    function ls(a) {
        K(a.G, "click", () => ms(a));
        K(a.j, "click", () => ms(a));
        K(a.j, "mousedown", () => {
            const b = d => ns(a, d.movementY),
                c = () => {
                    os(a);
                    ye(a.j, "mousemove", b);
                    ye(a.j, "mouseup", c);
                    ye(a.j, "mouseleave", c)
                };
            K(a.j, "mousemove", b);
            K(a.j, "mouseup", c);
            K(a.j, "mouseleave", c)
        });
        K(a.j, "touchstart", b => {
            let c = b.touches[0];
            const d = f => {
                    f = f.touches[0];
                    c && ns(a, f.pageY - c.pageY);
                    c = f
                },
                e = () => {
                    os(a);
                    ye(a.j, "touchmove", d);
                    ye(a.j, "touchend", e);
                    ye(a.j, "touchcancel", e)
                };
            K(a.j, "touchmove", d);
            K(a.j, "touchend", e);
            K(a.j, "touchcancel",
                e)
        });
        K(a.l, "scroll", () => {
            if (a.H) {
                clearTimeout(a.O);
                a.O = setTimeout(() => {
                    a.H && os(a)
                }, 66);
                var b = a.B - a.l.scrollTop;
                a.l.scrollTop > a.B ? (ns(a, b), a.l.scrollTop = a.B) : 10 > a.l.scrollTop && (a.l.scrollTop = 10, 30 > b ? ns(a, b) : ms(a))
            }
        })
    }

    function ms(a) {
        a.H = !1;
        a.J = !1;
        a.A.style.transitionDuration = ".5s";
        a.A.style.transform = `translateY(${a.D}px)`;
        a.G.style.opacity = "0";
        a.C.style.transitionDelay = ".5s";
        jb(a.C.offsetHeight);
        a.C.style.visibility = "hidden";
        setTimeout(() => {
            a.l.scrollTop = 10;
            a.win.document.body.style.overflow = ""
        }, 500);
        a.B = 10;
        for (const b of a.T) try {
            b()
        } catch (c) {
            console.error(c)
        }
    }

    function ns(a, b) {
        a.A.style.transitionDuration = "0s";
        b = ps(a) + b;
        0 > b && (a.B -= b, a.B = Math.min(a.B, a.l.scrollHeight - a.l.offsetHeight), b = 0);
        a.A.style.transform = `translateY(${b}px)`;
        jb(a.A.offsetHeight);
        a.A.style.transitionDuration = ".5s"
    }

    function os(a) {
        const b = ps(a);
        if (a.J) 50 < b ? ms(a) : 0 !== b && qs(a, 0);
        else {
            const c = a.D - a.I;
            b < c - 50 ? qs(a, 0) : b > c + 50 ? ms(a) : b !== c && qs(a, a.D - a.I)
        }
    }

    function qs(a, b) {
        a.H = !0;
        0 === b && (a.J = !0);
        a.win.document.body.style.overflow = "hidden";
        a.C.style.transitionDelay = "0s";
        a.C.style.visibility = "visible";
        a.G.style.opacity = ".5";
        a.A.style.transform = `translateY(${b}px)`
    }

    function ps(a) {
        let b, c;
        a = null != (c = null == (b = a.win.getComputedStyle(a.A)) ? void 0 : b.transform) ? c : null;
        return (new DOMMatrix(a)).m42
    }
    var rs = class {
        constructor(a, b, c) {
            var d = new of (a.document);
            this.G = d.Ea("DIV", {
                "class": "cse-modal-background",
                tabindex: 1
            });
            this.j = d.Ea("DIV", {
                "class": "cse-drawer-handle"
            });
            this.l = d.Ea("DIV", {
                "class": "cse-drawer-contents"
            });
            this.A = d.Ea("DIV", {
                "class": "cse-drawer"
            }, this.j, this.l);
            this.C = d.Ea("DIV", {
                "class": "cse-drawer-container"
            }, this.G, this.A);
            this.L = d.Ea("DIV", {
                "class": "cse-drawer-root"
            });
            this.win = a;
            this.I = b;
            this.D = c;
            this.T = [];
            this.B = 10;
            this.H = this.J = !1;
            b = this.L.attachShadow({
                mode: "open"
            });
            c = b.appendChild;
            var e = this.D;
            e = Pr("<style>.cse-drawer-container {height: 100%; left: 0; position: fixed; top: 0; transition: visibility 0s linear .5s; visibility: hidden; width: 100%; z-index: " + as(100002) + ";}.cse-modal-background {background-color: black; height: 100%; opacity: 0; position: absolute; transition: opacity .5s ease-in-out; width: 100%;}.cse-drawer {bottom: 0; position: absolute; transform: translateY(" + as(e) + "px); transition: transform .5s ease-in-out; width: 100%;}.cse-drawer-handle {border-radius: 20px 20px 0 0; background: white; height: " +
                as(30) + "px;}.cse-drawer-contents {background: white; height: " + as(e) + "px; padding-top: " + as(10) + "px; overflow: auto;}</style>");
            e = Lr(e);
            var f = d.j;
            d = wf(f, "DIV");
            pb ? (e = Fd(Kd, e), We(d, e), d.removeChild(d.firstChild)) : We(d, e);
            if (1 == d.childNodes.length) d = d.removeChild(d.firstChild);
            else {
                for (e = f.createDocumentFragment(); d.firstChild;) e.appendChild(d.firstChild);
                d = e
            }
            c.call(b, d);
            b.appendChild(this.C);
            L(this.L, Cr(a));
            this.l.scrollTop = 10
        }
        init() {
            this.win.document.body.appendChild(this.L);
            ls(this)
        }
    };

    function ss(a, b) {
        a.j++;
        const c = "{SafeHtmlFormatter:" + a.j + "_" + hf() + "}";
        a.l[ef(c)] = b;
        return c
    }
    class ts {
        constructor() {
            this.l = {};
            this.j = 0
        }
        A(a, b) {
            a = this.l[b];
            if (!a) return b;
            b = "";
            a.Nb && (b += "<" + a.Nb + a.attributes + ">");
            a.Lc && (b += a.Lc);
            a.tb && (b += "</" + a.tb + ">");
            return b
        }
        Nb(a, b) {
            Ad(a);
            return ss(this, {
                Nb: a,
                attributes: Ed(b)
            })
        }
        tb(a) {
            Ad(a);
            return ss(this, {
                tb: a
            })
        }
        text(a) {
            return ss(this, {
                Lc: ef(a)
            })
        }
    };

    function us(a) {
        let b;
        a.j.id = "cse-overlay-div";
        he(a.j, jd({
            "background-color": "white",
            border: "none",
            "border-radius": "16px 16px 16px 16px",
            "box-shadow": "0 3px 10px rgb(34 25 25 / 40%)",
            display: "none",
            "flex-direction": "column",
            height: "90%",
            left: "2.5%",
            margin: "auto",
            overflow: "auto",
            position: "fixed",
            padding: "1%",
            top: "5%",
            transition: "all 0.25s linear",
            width: "95%",
            "z-index": 100002
        }));
        b = a.l.createElement("DIV");
        b.id = "cse-overlay-close-button";
        he(b, jd({
            "background-image": "url(//www.google.com/images/nav_logo114.png)",
            "background-position": "-140px -230px",
            "background-repeat": "no-repeat",
            cursor: "pointer",
            display: "block",
            "float": "right",
            height: "12px",
            opacity: 1,
            position: "absolute",
            right: "15px",
            top: "15px",
            width: "12px"
        }));
        var c = a.A.location.host;
        const d = a.l.createElement("IMG");
        ie(d, bd("https://www.google.com/s2/favicons?sz=64&domain_url=" + encodeURIComponent(c)));
        he(d, jd({
            display: "block",
            "float": "left",
            height: "16px",
            position: "absolute",
            left: "15px",
            top: "15px",
            width: "16px"
        }));
        const e = a.l.createElement("P");
        ge(e, vs(a.C.trim().substring(0,
            2), c.startsWith("www.") ? c.slice(4) : c));
        e.style.fontSize = "16px";
        e.style.marginLeft = "35px";
        e.style.marginTop = "6px";
        e.style.marginBottom = "unset";
        e.style.display = "inline-block";
        a.B.classList.add("gsc-modal-background-image");
        a.B.setAttribute("tabindex", 0);
        a.A.document.body.appendChild(a.j);
        a.A.document.body.appendChild(a.B);
        a.j.appendChild(d);
        a.j.appendChild(e);
        c = () => {
            "flex" === a.j.style.display && (a.j.style.display = "none");
            a.B.classList.remove("gsc-modal-background-image-visible");
            js(a.J)
        };
        b.onclick = c;
        a.B.onclick = c;
        a.j.appendChild(b);
        a.j.appendChild(a.H);
        a.I.init()
    }

    function ws(a) {
        const b = a.l.createElement("SCRIPT");
        b.type = "text/javascript";
        var c = a.G.map(d => ({
            container: d,
            relatedSearches: 5
        }));
        wa("google.ads.autorscse.startProseSearch", (d, e) => {
            is(a.J);
            a.B.classList.add("gsc-modal-background-image-visible");
            a.j.style.display = "flex";
            a.I.j.contentWindow.google.search.cse.element.getElement("auto-rs-prose").execute(d, void 0, {
                rsToken: e
            })
        });
        c = Pg `function(afsProperty, cseElementName, rsBlocks, language){ 
          function performSearch(query, rsToken) { 
            google.ads.autorscse.startProseSearch(query, rsToken); 
          } 
          const pageOptions = { 
            pubId: afsProperty, 
            styleId: '5134551505', 
            hl: language, 
            resultsPageBaseUrl: 'http://google.com', 
            resultsPageQueryParam: 'q', 
            relatedSearchTargeting: 'content', 
            relatedSearchResultClickedCallback: performSearch, 
            relatedSearchUseResultCallback: true, 
          }; 
          _googCsa('relatedsearch', pageOptions, rsBlocks); 
        }` (a.D, "auto-rs-prose", c, a.C);
        le(b, c);
        a.A.document.body.appendChild(b)
    }
    var xs = class {
        constructor(a, b, c, d) {
            this.A = a;
            this.G = b;
            this.C = d || "en";
            this.D = c.replace("ca", "partner");
            b = new hs(a);
            this.J = new ks(b, 1E5);
            this.l = new of (a.document);
            this.j = this.l.createElement("DIV");
            this.B = this.l.createElement("DIV");
            this.H = this.l.createElement("IFRAME");
            this.I = new es(this.H, this.D, a.location.host, this.C)
        }
        init() {
            if (0 != this.G.length && !this.A.document.querySelector('script[src*="cse.google.com/cse"]')) {
                us(this);
                var a = this.l.createElement("SCRIPT");
                me(a, N `https://www.google.com/adsense/search/async-ads.js`);
                this.A.document.head.appendChild(a);
                a = this.l.createElement("SCRIPT");
                a.type = "text/javascript";
                var b = Og `(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');`;
                le(a, b);
                this.A.document.head.appendChild(a);
                a = this.l.createElement("SCRIPT");
                b = N `https://cse.google.com/cse.js?cx=9d449ff4a772956c6`;
                b = Ng(b, new Map([
                    ["language", this.C]
                ]));
                me(a, b);
                this.A.document.head.appendChild(a);
                ws(this)
            }
        }
    };

    function vs(a, b) {
        var c = new ts;
        const d = c.Nb("strong"),
            e = c.tb("strong");
        b = {
            en: `Search results from ${d}${b}${e}`,
            de: `Suchergebnisse von ${d}${b}${e}`,
            ja: `${d}${b}${e}\u304b\u3089\u306e\u691c\u7d22\u7d50\u679c`,
            fr: `R\u00e9sultats de recherche sur ${d}${b}${e}`,
            es: `Resultados de b\u00fasqueda de ${d}${b}${e}`
        };
        a = b[a] || b.en;
        b = ef("SafeHtmlFormatter:");
        c = ef(a).replace(new RegExp(`\\{${b}[\\w&#;]+\\}`, "g"), ta(c.A, c, []));
        return yd(c, null)
    };

    function ys(a) {
        const b = $o(a.A.P),
            c = a.C.na(a.D, () => a.remove());
        b.appendChild(c);
        a.B && (b.className = a.B);
        return {
            Ud: b,
            Qd: c
        }
    }
    class zs {
        constructor(a, b, c, d) {
            this.D = a;
            this.A = b;
            this.C = c;
            this.B = d || null;
            this.j = null;
            this.l = new fk(null)
        }
        init() {
            const a = ys(this);
            this.j = a.Ud;
            Bp(this.A, this.j);
            dk(this.l, a.Qd)
        }
        remove() {
            this.j && this.j.parentNode && this.j.parentNode.removeChild(this.j);
            this.j = null;
            dk(this.l, null)
        }
        G() {
            return this.l
        }
    };
    var As = class {
        constructor(a, b, c) {
            this.j = a;
            this.l = b;
            this.A = c
        }
    };

    function Bs(a, b) {
        return a.U.j - b.U.j
    };

    function Cs(a, b) {
        const c = a.document.createElement("img");
        Ds(a, c);
        Xe(c, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg");
        L(c, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: null == b ? "auto" : "pointer"
        });
        b && c.addEventListener("click", d => {
            b();
            d.stopPropagation()
        });
        return c
    }

    function Es(a, b) {
        const c = b.document.createElement("button");
        Ds(b, c);
        L(c, {
            display: "inline",
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.l));
        c.addEventListener("click", d => {
            a.A();
            d.stopPropagation()
        });
        return c
    }

    function Fs(a, b, c) {
        const d = b.document.createElement("img");
        Xe(d, "https://www.gstatic.com/adsense/autoads/icons/arrow_left_24px_grey_800.svg");
        d.setAttribute("aria-label", a.B);
        Ds(b, d);
        L(d, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        d.addEventListener("click", e => {
            c();
            e.stopPropagation()
        });
        return d
    }

    function Gs(a) {
        const b = a.document.createElement("ins");
        Ds(a, b);
        L(b, {
            "float": "left",
            display: "inline-flex",
            padding: "8px 0px",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 2px 0px rgba(60,64,67,0.3), 0px 1px 3px 1px rgba(60,64,67,0.15)"
        });
        return b
    }
    class Hs {
        constructor(a, b, c) {
            this.l = a;
            this.B = b;
            this.A = c;
            this.j = new fk(!1)
        }
        na(a, b, c, d) {
            const e = Cs(a, d),
                f = Cs(a),
                g = Es(this, a),
                h = Fs(this, a, c);
            a = Gs(a);
            a.appendChild(e);
            a.appendChild(f);
            a.appendChild(g);
            a.appendChild(h);
            ck(this.j, l => {
                L(e, {
                    display: l ? "none" : "inline"
                });
                L(f, {
                    display: l ? "inline" : "none"
                });
                l ? (L(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), L(h, {
                        margin: "0px 12px 0px 8px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 100ms 50ms, opacity 50ms 50ms, width 100ms 50ms"
                    })) :
                    (L(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), L(h, {
                        margin: "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 100ms, opacity 50ms, width 100ms"
                    }))
            }, !0);
            return a
        }
        Kc() {
            return 40
        }
        Vc() {
            dk(this.j, !1);
            return 0
        }
        Wc() {
            dk(this.j, !0)
        }
    }

    function Ds(a, b) {
        L(b, Cr(a));
        L(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#3C4043",
            "user-select": "none"
        })
    };

    function Is(a, b) {
        const c = b.document.createElement("button");
        Js(a, b, c);
        b = {
            width: "100%",
            "text-align": "center",
            display: "block",
            padding: "8px 0px",
            "background-color": a.l
        };
        a.j && (b["border-top"] = a.j, b["border-bottom"] = a.j);
        L(c, b);
        c.addEventListener("click", d => {
            a.D();
            d.stopPropagation()
        });
        return c
    }

    function Ks(a, b, c, d) {
        const e = b.document.createElement("div");
        L(e, Cr(b));
        L(e, {
            "align-items": "center",
            "background-color": a.l,
            display: "flex",
            "justify-content": "center"
        });
        const f = b.document.createElement("span");
        f.appendChild(b.document.createTextNode(d));
        L(f, Cr(b));
        L(f, {
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            padding: "8px 0px"
        });
        b = b.matchMedia("(min-width: 768px)");
        d = g => {
            g.matches ? (L(e, {
                    "flex-direction": "row"
                }), a.j && L(e, {
                    "border-top": a.j,
                    "border-bottom": a.j
                }), L(f, {
                    "margin-left": "8px",
                    "text-align": "start"
                }),
                L(c, {
                    border: "0",
                    "margin-right": "8px",
                    width: "auto"
                })) : (L(e, {
                border: "0",
                "flex-direction": "column"
            }), L(f, {
                "margin-left": "0",
                "text-align": "center"
            }), L(c, {
                "margin-right": "0",
                width: "100%"
            }), a.j && L(c, {
                "border-top": a.j,
                "border-bottom": a.j
            }))
        };
        d(b);
        b.addEventListener("change", d);
        e.appendChild(c);
        e.appendChild(f);
        return e
    }

    function Js(a, b, c) {
        L(c, Cr(b));
        L(c, {
            "font-family": "Arial,sans-serif",
            "font-weight": a.G,
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: a.H,
            "user-select": "none",
            cursor: "pointer"
        })
    }
    class Ls {
        constructor(a, b, c, d, e, f = null, g = null, h = null) {
            this.C = a;
            this.D = b;
            this.H = c;
            this.l = d;
            this.G = e;
            this.B = f;
            this.j = g;
            this.A = h
        }
        na(a) {
            const b = a.document.createElement("div");
            Js(this, a, b);
            L(b, {
                display: "inline-flex",
                padding: "8px 0px",
                "background-color": this.l
            });
            if (this.B) {
                var c = a.document.createElement("img");
                Xe(c, this.B);
                Js(this, a, c);
                L(c, {
                    margin: "0px 8px 0px 0px",
                    width: "24px",
                    height: "24px"
                })
            } else c = null;
            c && b.appendChild(c);
            c = a.document.createElement("span");
            Js(this, a, c);
            L(c, {
                "line-height": "24px"
            });
            c.appendChild(a.document.createTextNode(this.C));
            b.appendChild(c);
            c = Is(this, a);
            c.appendChild(b);
            return this.A ? Ks(this, a, c, this.A) : c
        }
    };
    var Ms = (a, b) => {
        b = b.filter(c => 5 == y(C(c, yk, 4), 1) && 1 == y(c, 8));
        b = Wo(b, a);
        a = Dp(b, a);
        a.sort((c, d) => d.U.j - c.U.j);
        return a[0] || null
    };
    var Ns = a => !X(Sm) && /Firefox/.test(a) || /Android 2/.test(a) || /iPhone OS [34]_/.test(a) || /Windows Phone (?:OS )?[67]/.test(a) || /MSIE.*Windows NT/.test(a) || /Windows NT.*Trident/.test(a),
        Rs = (a, b = null) => {
            const c = Os(a.innerWidth, 0, Math.min(Math.round(a.innerWidth / 320 * 50), Ps) + 15);
            return Qs(a, c, b)
        },
        Ss = (a, b = null) => {
            const c = a.innerWidth,
                d = a.innerHeight,
                e = Math.min(Math.round(a.innerWidth / 320 * 50), Ps) + 15,
                f = Os(c, d - e, d);
            25 < e && f.push({
                x: c - 25,
                y: d - 25
            });
            return Qs(a, f, b)
        },
        Us = (a, b) => {
            const c = a.innerWidth,
                d = a.innerHeight;
            let e = d;
            for (; e > b;) {
                var f = Os(c, e - b, e);
                f = Ts(a, f);
                if (!f) return d - e;
                e = f.getBoundingClientRect().top - 1
            }
            return null
        },
        Qs = (a, b, c = null) => null != Ts(a, b, c);

    function Ts(a, b, c = null) {
        for (const d of b)
            if (b = Vs(a, d, c)) return b;
        return null
    }

    function Vs(a, b, c = null) {
        const d = Ws(a.document, b.x, b.y);
        return d ? Xs(d, a, b, c) || Ys(d, a, b, c) || null : null
    }
    var Ws = (a, b, c) => {
        a.hasOwnProperty("_goog_efp_called_") || (a._goog_efp_called_ = a.elementFromPoint(b, c));
        return a.elementFromPoint(b, c)
    };

    function Ys(a, b, c, d = null) {
        const e = b.document;
        for (a = a.offsetParent; a && a != e.body; a = a.offsetParent) {
            const f = Xs(a, b, c, d);
            if (f) return f
        }
        return null
    }
    var Os = (a, b, c) => {
        const d = [];
        for (let f = 0; 3 > f; f++)
            for (let g = 0; 3 > g; g++) {
                var e = d;
                e.push.call(e, {
                    x: g / 2 * a,
                    y: b + f / 2 * (c - b)
                })
            }
        return d
    };

    function Xs(a, b, c, d = null) {
        if ("fixed" !== Ug(a, "position")) return null;
        var e = "GoogleActiveViewInnerContainer" == a.getAttribute("class") || 1 >= Xg(a).width && 1 >= Xg(a).height ? !0 : !1;
        d && Fh(d, "ach_evt", {
            url: b.location.href,
            tn: a.tagName,
            id: a.getAttribute("id"),
            cls: a.getAttribute("class"),
            ign: e,
            pw: b.innerWidth,
            ph: b.innerHeight,
            x: c.x,
            y: c.y
        }, !0, 1);
        return e ? null : a
    }
    const Ps = 90 * 1.38;

    function Zs(a) {
        if (a.H) {
            const b = sj(a.j);
            if (b > a.l + 100 || b < a.l - 100) $s(a), a.l = oj(a.j)
        }
        a.I && a.j.clearTimeout(a.I);
        a.I = a.j.setTimeout(() => at(a), 200)
    }

    function at(a) {
        var b = oj(a.j);
        a.l && a.l > b && (a.l = b);
        b = sj(a.j);
        b >= a.l - 100 && (a.l = Math.max(a.l, b), bt(a))
    }

    function ct(a) {
        a.j.removeEventListener("scroll", a.L)
    }

    function $s(a) {
        a.H = !1;
        const b = a.C.Vc();
        switch (b) {
            case 0:
                dk(a.B, a.D);
                break;
            case 1:
                a.A && (L(a.A, {
                    display: "none"
                }), dk(a.B, null));
                break;
            default:
                throw Error("Unhandled OnHideOutcome: " + b);
        }
    }

    function bt(a) {
        a.A || (a.A = dt(a));
        L(a.A, {
            display: "block"
        });
        a.H = !0;
        a.C.Wc();
        dk(a.B, a.D)
    }

    function dt(a) {
        var b = Us(a.j, a.C.Kc() + 60);
        b = null == b ? 30 : b + 30;
        const c = a.j.document.createElement("div");
        L(c, Cr(a.j));
        L(c, {
            position: "fixed",
            left: "0px",
            bottom: b + "px",
            width: "100vw",
            "text-align": "center",
            "z-index": 2147483642,
            display: "none",
            "pointer-events": "none"
        });
        a.D = a.C.na(a.j, () => a.remove(), () => {
            ct(a);
            $s(a)
        }, () => {
            ct(a);
            bt(a)
        });
        c.appendChild(a.D);
        a.J && (c.className = a.J);
        a.j.document.body.appendChild(c);
        return c
    }
    class et {
        constructor(a, b, c) {
            this.j = a;
            this.C = b;
            this.D = null;
            this.B = new fk(null);
            this.J = c || null;
            this.A = null;
            this.H = !1;
            this.l = 0;
            this.I = null;
            this.L = () => Zs(this)
        }
        init() {
            this.j.addEventListener("scroll", this.L);
            this.l = oj(this.j);
            at(this)
        }
        remove() {
            this.A && this.A.parentNode && this.A.parentNode.removeChild(this.A);
            this.A = null;
            ct(this);
            dk(this.B, null)
        }
        G() {
            return this.B
        }
    };

    function ft(a) {
        dk(a.D, 0);
        null != a.A && (a.A.remove(), a.A = null);
        null != a.l && (a.l.remove(), a.l = null)
    }

    function gt(a) {
        a.l = new et(a.C, a.J, a.H);
        a.l.init();
        ek(a.B, a.l.G());
        dk(a.D, 2)
    }
    class ht {
        constructor(a, b, c, d, e) {
            this.C = a;
            this.I = b;
            this.L = c;
            this.J = d;
            this.H = e;
            this.D = new fk(0);
            this.B = new fk(null);
            this.l = this.A = this.j = null
        }
        init() {
            this.I ? (this.A = new zs(this.C, this.I, this.L, this.H), this.A.init(), ek(this.B, this.A.G()), dk(this.D, 1), null == this.j && (this.j = new Vj(this.C), this.j.init(2E3)), Tj(this.j, () => {
                ft(this);
                gt(this)
            })) : gt(this)
        }
        remove() {
            ft(this);
            this.j && (this.j.ea(), this.j = null)
        }
        G() {
            return this.B
        }
    };
    var it = (a, b, c, d, e) => {
        a = new ht(a, Ms(a, e), new Ls(b, d, "#FFF", "#4A4A4A", "normal"), new Hs(b, c, d), "google-dns-link-placeholder");
        a.init();
        return a
    };
    var jt = a => a.googlefc = a.googlefc || {},
        kt = a => {
            a = a.googlefc = a.googlefc || {};
            return a.ccpa = a.ccpa || {}
        };

    function lt(a) {
        var b = kt(a.j);
        if (mt(b.getInitialCcpaStatus(), b.InitialCcpaStatusEnum)) {
            var c = b.getLocalizedDnsText();
            b = b.getLocalizedDnsCollapseText();
            null != c && null != b && (a.l = it(a.j, c, b, () => nt(a), a.B))
        }
    }

    function ot(a) {
        const b = jt(a.j);
        kt(a.j).overrideDnsLink = !0;
        b.callbackQueue = b.callbackQueue || [];
        b.callbackQueue.push({
            INITIAL_CCPA_DATA_READY: () => lt(a)
        })
    }

    function nt(a) {
        is(a.A);
        kt(a.j).openConfirmationDialog(b => {
            b && a.l && (a.l.remove(), a.l = null);
            js(a.A)
        })
    }
    class pt {
        constructor(a, b, c) {
            this.j = a;
            this.A = new ks(b, 2147483643);
            this.B = c;
            this.l = null
        }
    }

    function mt(a, b) {
        switch (a) {
            case b.CCPA_DOES_NOT_APPLY:
            case b.OPTED_OUT:
                return !1;
            case b.NOT_OPTED_OUT:
                return !0;
            default:
                return !0
        }
    };

    function qt(a) {
        const b = a.document.createElement("ins");
        rt(a, b);
        L(b, {
            display: "flex",
            padding: "8px 0px",
            width: "100%"
        });
        return b
    }

    function st(a, b, c, d) {
        const e = a.document.createElement("img");
        Xe(e, b);
        d && e.setAttribute("aria-label", d);
        rt(a, e);
        L(e, {
            margin: "0px 12px 0px 8px",
            width: "24px",
            height: "24px",
            cursor: "pointer"
        });
        e.addEventListener("click", f => {
            c();
            f.stopPropagation()
        });
        return e
    }

    function tt(a, b) {
        const c = b.document.createElement("span");
        rt(b, c);
        L(c, {
            "line-height": "24px",
            cursor: "pointer"
        });
        c.appendChild(b.document.createTextNode(a.B));
        c.addEventListener("click", d => {
            a.l();
            d.stopPropagation()
        });
        return c
    }

    function ut(a, b) {
        const c = b.document.createElement("span");
        c.appendChild(b.document.createTextNode(a.A));
        L(c, Cr(b));
        L(c, {
            "border-top": "11px solid #ECEDED",
            "font-family": "Arial,sans-serif",
            "font-size": "12px",
            "line-height": "1414px",
            padding: "8px 32px",
            "text-align": "center"
        });
        return c
    }

    function vt(a) {
        const b = a.document.createElement("div");
        L(b, Cr(a));
        L(b, {
            "align-items": "flex-start",
            "background-color": "#FFF",
            "border-radius": "0px 20px 20px 0px",
            "box-shadow": "0px 1px 3px 1px rgba(60,64,67,0.5)",
            display: "inline-flex",
            "flex-direction": "column",
            "float": "left"
        });
        return b
    }
    class wt {
        constructor(a, b, c, d) {
            this.B = a;
            this.C = b;
            this.A = c;
            this.l = d;
            this.j = new fk(!1)
        }
        na(a, b, c, d) {
            c = qt(a);
            const e = st(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", d),
                f = st(a, "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_grey_800.svg", this.l),
                g = tt(this, a),
                h = st(a, "https://www.gstatic.com/adsense/autoads/icons/close_24px_grey_700.svg", b, this.C);
            L(h, {
                "margin-left": "auto"
            });
            c.appendChild(e);
            c.appendChild(f);
            c.appendChild(g);
            c.appendChild(h);
            const l = ut(this, a);
            a = vt(a);
            a.appendChild(c);
            a.appendChild(l);
            ck(this.j, k => {
                L(e, {
                    display: k ? "none" : "inline"
                });
                L(f, {
                    display: k ? "inline" : "none"
                });
                k ? (L(g, {
                        "line-height": "24px",
                        "max-width": "100vw",
                        opacity: "1",
                        transition: "line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms"
                    }), L(h, {
                        "margin-right": "12px",
                        opacity: 1,
                        width: "24px",
                        transition: "margin 50ms, opacity 50ms 50ms, width 50ms"
                    }), L(l, {
                        "border-width": "1px",
                        "line-height": "14px",
                        "max-width": "100vw",
                        opacity: "1",
                        padding: "8px 32px",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms, opacity 50ms 50ms, padding 50ms"
                    })) :
                    (L(g, {
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        transition: "line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms"
                    }), L(h, {
                        "margin-right": "0",
                        opacity: "0",
                        width: "0",
                        transition: "margin 50ms 50ms, opacity 50ms, width 50ms 50ms"
                    }), L(l, {
                        "border-width": "0px",
                        "line-height": "0px",
                        "max-width": "0vw",
                        opacity: "0",
                        padding: "0",
                        transition: "border-width 0s 50ms, line-height 0s 50ms, max-width 50ms 50ms, opacity 50ms, padding 50ms 50ms"
                    }))
            }, !0);
            return a
        }
        Kc() {
            return 71
        }
        Vc() {
            dk(this.j, !1);
            return 0
        }
        Wc() {
            dk(this.j, !0)
        }
    }

    function rt(a, b) {
        L(b, Cr(a));
        L(b, {
            "font-family": "Arial,sans-serif",
            "font-weight": "bold",
            "font-size": "14px",
            "letter-spacing": "0.2px",
            color: "#1A73E8",
            "user-select": "none"
        })
    };

    function xt(a) {
        fo(a.l, b => {
            var c = a.B,
                d = b.Fe,
                e = b.Od,
                f = b.Cd;
            b = b.showRevocationMessage;
            (new ht(c, Ms(c, a.A), new Ls(d, b, "#1A73E8", "#FFF", "bold", "https://www.gstatic.com/adsense/autoads/icons/gpp_good_24px_blue_600.svg", "2px solid #ECEDED", f), new wt(d, e, f, b), "google-revocation-link-placeholder")).init()
        }, () => {
            js(a.j)
        })
    }
    class yt {
        constructor(a, b, c, d) {
            this.B = a;
            this.j = new ks(b, 2147483643);
            this.A = c;
            this.l = d
        }
    };
    var zt = a => {
        if (!a || !Wb(a, 1)) return !1;
        a = y(a, 1);
        switch (a) {
            case 1:
                return !0;
            case 2:
                return !1;
            default:
                throw Error("Unhandled AutoConsentUiStatus: " + a);
        }
    };

    function At(a) {
        if (!0 !== a.j.adsbygoogle_ama_fc_has_run) {
            var b = !1;
            zt(a.l) && (b = new yt(a.j, a.C, a.B || G(a.l, hl, 4), a.A), is(b.j), xt(b), b = !0);
            var c;
            a: if ((c = a.l) && Wb(c, 3)) switch (c = y(c, 3), c) {
                case 1:
                    c = !0;
                    break a;
                case 2:
                    c = !1;
                    break a;
                default:
                    throw Error("Unhandled AutoCcpaUiStatus: " + c);
            } else c = !1;
            c && (ot(new pt(a.j, a.C, a.B || G(a.l, hl, 4))), b = !0);
            b && (a.A.start(), a.j.adsbygoogle_ama_fc_has_run = !0)
        }
    }
    class Bt {
        constructor(a, b, c, d, e) {
            this.j = a;
            this.A = b;
            this.l = c;
            this.C = d;
            this.B = e || null
        }
    };
    var Ct = (a, b, c) => {
        const d = C(a, bl, 6);
        if (!d) return [];
        c = rp(G(d, cl, 1), c);
        return (a = wl(a)) && B(a, 11) ? c.map(e => hp(e)) : c.map(e => {
            const f = xk();
            return new Vo(new Po(e.Ob, e.Pb), new zo, new Oo(b), !0, 2, [], f, e.l, null, null, null, e.A, e.j)
        })
    };
    var Et = class extends w {
        constructor() {
            super(void 0, -1, Dt)
        }
    };

    function Ft(a, b) {
        return z(a, 1, b)
    }

    function Gt(a, b) {
        return ic(a, 2, b)
    }
    var It = class extends w {
            constructor(a) {
                super(a, -1, Ht)
            }
        },
        Jt = class extends w {
            constructor(a) {
                super(a)
            }
            getHeight() {
                return ac(this, 2, 0)
            }
        },
        Dt = [5],
        Ht = [2];
    var Kt = class extends w {
            constructor() {
                super(void 0)
            }
        },
        Lt = [1, 2];

    function Mt(a) {
        return new Ak(["pedestal_container"], {
            google_reactive_ad_format: 30,
            google_phwr: 2.189,
            google_ad_width: Math.floor(a),
            google_ad_format: "autorelaxed",
            google_full_width_responsive: !0,
            google_enable_content_recommendations: !0,
            google_content_recommendation_ui_type: "pedestal"
        })
    }
    class Nt {
        j(a) {
            return Mt(Math.floor(a.l))
        }
    };
    var Ot = {
        INTERSTITIAL: 1,
        BOTTOM_ANCHOR: 2,
        TOP_ANCHOR: 3,
        Sh: 4,
        1: "INTERSTITIAL",
        2: "BOTTOM_ANCHOR",
        3: "TOP_ANCHOR",
        4: "SCROLL_TRIGGERED_IMMERSIVE"
    };

    function Pt(a) {
        var b = ["Could not locate a suitable placement in the content below the fold."],
            c, d;
        a = null === (c = hj(a)) || void 0 === c ? void 0 : c.tagSpecificState[1];
        (c = null == a ? null : 4 === (null === (d = a.debugCard) || void 0 === d ? void 0 : d.getAdType()) ? a.debugCard : null) && c.displayAdLoadedContent(b)
    };
    var Qt = class extends w {
        constructor() {
            super(void 0)
        }
    };

    function Rt(a, b) {
        if (b) {
            var c = b.adClient;
            if ("string" === typeof c && c) {
                a.mb = c;
                a.A = !!b.adTest;
                c = b.pubVars;
                ka(c) && (a.F = c);
                if (Array.isArray(b.fillMessage) && 0 < b.fillMessage.length) {
                    a.D = {};
                    for (d of b.fillMessage) a.D[d.key] = d.value
                }
                a.B = b.adWidth;
                a.l = b.adHeight;
                ch(a.B) && ch(a.l) || S("rctnosize", b);
                var d = !0
            } else d = !1
        } else d = !1;
        return d && a.H(b)
    }
    class St {
        constructor() {
            this.D = this.F = this.A = this.mb = null;
            this.l = this.B = 0
        }
        H() {
            return !0
        }
    };
    var Tt = (a, b, c) => {
        let d = 0;
        try {
            d |= a != a.top ? 512 : 0;
            d |= mj(a);
            d |= lj(a);
            d |= a.innerHeight >= a.innerWidth ? 0 : 8;
            d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
            var e;
            if (e = b) {
                var f = Mn(c, 3600);
                e = !(f && 1 > f.length)
            }
            e && (d |= 134217728);
            X(Xm) && (d |= 128)
        } catch (g) {
            d |= 32
        }
        return d
    };
    class Ut extends St {
        constructor() {
            super();
            this.C = !1;
            this.j = null;
            this.G = !1
        }
        H(a) {
            this.C = !!a.enableAma;
            var b = a.amaConfig;
            if (b) try {
                var c = lc(zl, b)
            } catch (d) {
                c = null
            } else c = null;
            this.j = c;
            Array.isArray(a.fillMessage) && (this.G = !0);
            return !0
        }
    };
    var Vt = {};

    function Wt(a, b, c) {
        let d = Xt(a, c, b);
        if (!d) return !0;
        let e = -1;
        const f = c.D.l;
        for (; d.cb && d.cb.length;) {
            const h = d.cb.shift();
            var g = ap(h.P);
            const l = h.U.j,
                k = !!c.l.gb || !!c.l.ib || Yt(c) || !!c.l.Fc || l > e;
            g = !g || g <= d.qb;
            if (k && g && Zt(c, h, {
                    Qc: d.qb
                })) {
                e = l;
                if (d.ob.j.length + 1 >= f) return !0;
                d = Xt(a, c, b);
                if (!d) return !0
            }
        }
        return c.B
    }
    var Xt = (a, b, c) => {
        var d = b.D.l,
            e = b.D.B,
            f = b.D;
        f = nq(b.N(), f.j ? f.j.Qa : void 0, d);
        if (f.j.length >= d) return null;
        e ? (d = f.l || (f.l = V(f.A).scrollHeight || null), e = !d || 0 > d ? -1 : f.l * e - tq(f)) : e = void 0;
        a = null == e || 50 <= e ? $t(b, f, {
            types: a
        }, c) : null;
        return {
            ob: f,
            qb: e,
            cb: a
        }
    };
    Vt[2] = ua(function(a, b) {
        a = $t(b, nq(b.N()), {
            types: a,
            Ba: Mp(b.N())
        }, 2);
        if (0 == a.length) return !0;
        for (var c = 0; c < a.length; c++)
            if (Zt(b, a[c])) return !0;
        return b.B ? (b.C.push(11), !0) : !1
    }, [0]);
    Vt[5] = ua(Wt, [0], 5);
    Vt[3] = function(a) {
        if (!a.B) return !1;
        var b = $t(a, nq(a.N()), {
            types: [0],
            Ba: Mp(a.N())
        }, 3);
        if (0 == b.length) return !0;
        for (var c = b.length - 1; 0 <= c; c--)
            if (Zt(a, b[c])) return !0;
        a.C.push(11);
        return !0
    };
    var au = a => {
            var b;
            a.l.kd ? b = new Pp(0, null, [], 3, null) : b = Mp(a.N());
            return {
                types: [0],
                Ba: b
            }
        },
        du = a => {
            var b = a.N().document.body.getBoundingClientRect().width;
            b = Mt(b);
            var c = a.j;
            var d = c.document.body,
                e = bu(c, d, null);
            if (e) c = e;
            else {
                if (c.document.body) {
                    e = Math.floor(c.document.body.getBoundingClientRect().width);
                    for (var f = [{
                            element: c.document.body,
                            depth: 0,
                            height: 0
                        }], g = -1, h = null; 0 < f.length;) {
                        const k = f.pop(),
                            m = k.element;
                        var l = k.height;
                        0 < k.depth && l > g && (g = l, h = m);
                        if (5 > k.depth)
                            for (let n = 0; n < m.children.length; n++) {
                                const q =
                                    m.children[n];
                                l = e;
                                const r = q.getBoundingClientRect().width;
                                (null == r || null == l ? 0 : r >= .9 * l && r <= 1.01 * l) && f.push({
                                    element: q,
                                    depth: k.depth + 1,
                                    height: q.getBoundingClientRect().height
                                })
                            }
                    }
                    e = h
                } else e = null;
                c = e ? bu(c, e.parentNode || d, e) : null
            }
            c && (b = zk(a.J, b), d = qo(a.j.document, a.G, null, null, {}, b)) && (nn(d.Fa, c, 2, 256), cu(a, d, b))
        },
        fu = (a, b) => {
            var c = au(a);
            c.rc = [5];
            c = $t(a, nq(a.N()), c, 8);
            eu(a, c.reverse(), b)
        },
        eu = (a, b, c) => {
            for (const d of b)
                if (b = c.j(d.U), Zt(a, d, {
                        rd: b
                    })) return !0;
            return !1
        };
    Vt[8] = function(a) {
        var b = a.N().document;
        if ("complete" != b.readyState) return b.addEventListener("readystatechange", () => Vt[8](a), {
            once: !0
        }), !0;
        if (!a.B) return !1;
        if (!a.Fb()) return !0;
        b = au(a);
        b.qc = [2, 4, 5];
        b = $t(a, nq(a.N()), b, 8);
        const c = new Nt;
        if (eu(a, b, c)) return !0;
        if (a.l.Gc) switch (a.l.Xc || 0) {
            case 1:
                fu(a, c);
                break;
            default:
                du(a)
        }
        return !0
    };
    Vt[6] = ua(Wt, [2], 6);
    Vt[7] = ua(Wt, [1], 7);
    Vt[9] = function(a) {
        const b = Xt([0, 2], a, 9);
        if (!b || !b.cb) return a.C.push(17), Pt(a.N()), a.B;
        for (var c of b.cb) {
            var d = c;
            var e = a.l.ac || null;
            null == e ? d = null : (e = bp(d.P, new gu, new hu(e, a.N())), d = new Cp(e, d.W(), d.U));
            if (d && !(ap(d.P) > b.qb) && Zt(a, d, {
                    Qc: b.qb,
                    Nd: !0
                })) return a = d.P.J, c = c.P, a = 0 < a.length ? a[0] : null, c.B = !0, null != a && c.J.push(a), !0
        }
        a.C.push(17);
        Pt(a.N());
        return a.B
    };
    class gu {
        l(a, b, c, d) {
            return to(d.document, a, b)
        }
        A(a) {
            return V(a).clientHeight || 0
        }
    };
    class hu {
        constructor(a, b) {
            this.l = a;
            this.A = b
        }
        j() {
            var a = this.l,
                b = this.A;
            const c = a.F || {};
            c.google_ad_client = a.mb;
            c.google_ad_height = V(b).clientHeight || 0;
            c.google_ad_width = V(b).clientWidth || 0;
            c.google_reactive_ad_format = 9;
            b = new Qt;
            z(b, 1, a.C);
            a.j && gc(b, 2, a.j);
            a.G && z(b, 3, !0);
            c.google_rasc = kc(b);
            a.A && (c.google_adtest = "on");
            return new Ak(["fsi_container"], c)
        }
    };
    var iu = tk(new qk(0, {})),
        ju = tk(new qk(1, {})),
        ku = a => a === iu || a === ju;

    function lu(a, b, c) {
        Cj(a.j, b) || a.j.set(b, []);
        a.j.get(b).push(c)
    }
    class mu {
        constructor() {
            this.j = new Gj
        }
    };

    function nu(a, b) {
        b && (a.l.apv = y(b, 4), Wb(b, 23) && (a.l.sat = "" + y(C(b, Bl, 23), 1)));
        return a
    }

    function ou(a, b) {
        a.l.afm = b.join(",");
        return a
    }
    class pu extends tr {
        constructor(a) {
            super(a);
            this.l = {}
        }
        I(a) {
            null != a && (this.l.allp = a);
            return this
        }
        B(a) {
            try {
                this.l.su = a.location.hostname
            } catch (b) {
                this.l.su = "_ex"
            }
            a = super.B(a);
            Ec(a, this.l);
            return a
        }
    }

    function qu(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function ru(a, b) {
        a.j.op = su(b)
    }

    function tu(a, b, c) {
        30 >= c.length ? a.j[b] = uu(c) : (a.j[b] = uu(c.slice(0, 30)), a.j[b + "_c"] = c.length.toString())
    }

    function vu(a, b, c) {
        tu(a, "fap", b);
        a.j.fad = su(c)
    }

    function wu(a, b, c) {
        tu(a, "fmp", b);
        a.j.fmd = su(c)
    }

    function xu(a, b, c) {
        tu(a, "vap", b);
        a.j.vad = su(c)
    }

    function yu(a, b, c) {
        tu(a, "vmp", b);
        a.j.vmd = su(c)
    }

    function zu(a, b, c) {
        tu(a, "pap", b);
        a.j.pad = su(c)
    }

    function Au(a, b, c) {
        tu(a, "pmp", b);
        a.j.pmd = su(c)
    }

    function Bu(a, b) {
        tu(a, "psq", b)
    }
    var Cu = class extends pu {
        constructor(a) {
            super(0);
            Object.assign(this, a);
            this.j = {}
        }
        B(a) {
            a = super.B(a);
            Object.assign(a, this.j);
            return a
        }
    };

    function uu(a) {
        return a.map(b => {
            let c;
            return null != (c = null == b ? void 0 : b.toString()) ? c : "null"
        }).join("~")
    }

    function su(a) {
        return null == a ? "null" : "string" === typeof a ? a : "boolean" === typeof a ? a ? "1" : "0" : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };
    var Du = class extends w {
        constructor() {
            super(void 0)
        }
        wb() {
            return H(this, 1)
        }
        dc() {
            return ac(this, 2, 0)
        }
    };

    function Eu(a, b) {
        return cc(a, 1, b)
    }

    function Fu() {
        var a = new Gu;
        Xb(a, 2).push("irr");
        return a
    }

    function Hu(a, b) {
        return z(a, 3, b)
    }

    function Iu(a, b) {
        return z(a, 4, b)
    }

    function Ju(a, b) {
        return z(a, 5, b)
    }

    function Ku(a, b) {
        return z(a, 7, b)
    }

    function Lu(a, b) {
        return z(a, 8, b)
    }

    function Mu(a, b) {
        return z(a, 9, b)
    }

    function Nu(a, b) {
        return ic(a, 10, b)
    }

    function Ou(a, b) {
        return cc(a, 11, b)
    }
    var Gu = class extends w {
            constructor() {
                super(void 0, -1, Pu)
            }
        },
        Pu = [1, 2, 10, 11];
    class Qu {
        constructor(a) {
            this.A = this.l = this.j = !1;
            this.Ja = null;
            this.ya = a
        }
    }

    function Ru(a, b, c) {
        const d = b.P;
        if (!Cj(a.j, d)) {
            let e;
            a.j.set(d, new Qu(null != (e = kk(Ap(b))) ? e : ""))
        }
        c(a.j.get(d))
    }

    function Su(a) {
        Ru(Tu, a, b => {
            b.j = !0
        })
    }

    function Uu(a) {
        Ru(Tu, a, b => {
            b.l = !0
        })
    }

    function Vu(a) {
        var b = Tu;
        Ru(b, a, c => {
            c.A = !0
        });
        b.I.push(a.P)
    }

    function Wu(a, b) {
        Ru(Tu, a, c => {
            c.Ja = b
        })
    }

    function Xu(a, b, c) {
        const d = [];
        let e = 0;
        for (const f of c.filter(b)) {
            let g;
            if (ku(null != (g = f.Ja) ? g : "")) ++e;
            else {
                let h;
                b = a.l.get(null != (h = f.Ja) ? h : "", null);
                d.push(b)
            }
        }
        return {
            list: d.sort((f, g) => (null != f ? f : -1) - (null != g ? g : -1)),
            Ka: e
        }
    }

    function Yu(a, b) {
        ru(b, a.l.Ya());
        var c = Fj(a.j).filter(f => 0 === (f.ya.startsWith(iu) ? 0 : 1)),
            d = Fj(a.j).filter(f => 1 === (f.ya.startsWith(iu) ? 0 : 1)),
            e = Xu(a, f => f.j, c);
        vu(b, e.list, e.Ka);
        e = Xu(a, f => f.j, d);
        wu(b, e.list, e.Ka);
        e = Xu(a, f => f.l, c);
        xu(b, e.list, e.Ka);
        e = Xu(a, f => f.l, d);
        yu(b, e.list, e.Ka);
        c = Xu(a, f => f.A, c);
        zu(b, c.list, c.Ka);
        d = Xu(a, f => f.A, d);
        Au(b, d.list, d.Ka);
        Bu(b, a.I.map(f => {
            let g;
            return null == (g = a.j.get(f)) ? void 0 : g.Ja
        }).map(f => {
            let g;
            return null != (g = a.l.get(f)) ? g : null
        }))
    }

    function Zu() {
        var a = Tu;
        if (!a.B) return Fu();
        let b, c;
        const d = Ou(Nu(Mu(Lu(Ku(Ju(Iu(Hu(Eu(new Gu, null != (b = a.B) ? b : []), a.C), a.G), a.H), a.J), a.L), null != (c = a.D) ? c : 0), Fj(a.j).map(e => {
            var f;
            var g = new Du;
            g = z(g, 1, e.ya);
            var h = a.l.get(null != (f = e.Ja) ? f : "", -1);
            f = z(g, 2, h);
            f = z(f, 3, e.j);
            return z(f, 4, e.l)
        })), a.I.map(e => {
            let f;
            return null == (f = a.j.get(e)) ? void 0 : f.Ja
        }).map(e => {
            let f;
            return null != (f = a.l.get(e)) ? f : null
        }));
        null != a.A && z(d, 6, a.A);
        return d
    }
    var Tu = new class {
        constructor() {
            this.B = null;
            this.H = this.G = !1;
            this.A = null;
            this.L = this.C = this.J = !1;
            this.D = null;
            this.l = new Gj;
            this.j = new Gj;
            this.I = []
        }
    };
    class $u {
        constructor(a = 0) {
            this.j = a
        }
    };
    class av {
        constructor(a) {
            this.l = a;
            this.j = -1
        }
    };

    function bv(a) {
        let b = 0;
        for (; a;)(!b || a.previousElementSibling || a.nextElementSibling) && b++, a = a.parentElement;
        return b
    };

    function cv(a, b) {
        const c = a.B.filter(d => Ej(d.sb).every(e => d.sb.get(e) === b.get(e)));
        return 0 === c.length ? (a.l.push(19), null) : c.reduce((d, e) => d.sb.Ya() > e.sb.Ya() ? d : e, c[0])
    }

    function dv(a, b) {
        b = Ap(b);
        if (null == b.j) return a.l.push(18), null;
        b = b.j.value;
        if (Cj(a.A, b)) return a.A.get(b);
        var c = rk(b);
        c = cv(a, c);
        a.A.set(b, c);
        return c
    }

    function ev(a, b) {
        let c;
        return (null == (c = dv(a, b)) ? void 0 : c.xe) || Number.MAX_VALUE
    }

    function fv(a, b) {
        const c = kn(Bm) || 0;
        if (0 == b.length || 0 == c) return !0;
        const d = (new Zj(b)).filter(e => {
            let f;
            e = (null == (f = dv(a, e)) ? void 0 : f.ya) || "";
            return "" != e && !(e === iu || e === ju)
        });
        return c <= d.j.length / b.length
    }
    var gv = class {
        constructor(a) {
            this.j = a;
            this.A = new Gj;
            let b;
            this.B = ((null == (b = C(a, ol, 2)) ? void 0 : G(b, pl, 1)) || []).map(c => ({
                sb: rk(c.wb()),
                xe: c.dc(),
                ya: c.wb()
            }));
            this.l = []
        }
    };

    function hv(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => ev(a.j, c) - ev(a.j, d))
    }

    function iv(a, b) {
        var c = b.U.j,
            d = Math,
            e = d.min;
        const f = b.W(),
            g = b.P.l();
        c += 200 * e.call(d, 20, 0 == g || 3 == g ? bv(f.parentElement) : bv(f));
        d = a.A;
        0 > d.j && (d.j = V(d.l).scrollHeight || 0);
        d = d.j - b.U.j;
        c += 1E3 < d ? 0 : 2 * (1E3 - d);
        a = a.l;
        b = b.W();
        return c + ("string" === typeof b.className && 0 <= b.className.indexOf("adsbygoogle-ablated-ad-slot") ? a.j : 0)
    }

    function jv(a, b) {
        return 0 == b.j.length ? b : b.sort((c, d) => iv(a, c) - iv(a, d))
    }

    function kv(a, b) {
        return b.sort((c, d) => {
            const e = c.P.G,
                f = d.P.G;
            var g;
            null == e || null == f ? g = null == e && null == f ? iv(a, c) - iv(a, d) : null == e ? 1 : -1 : g = e - f;
            return g
        })
    }
    class lv {
        constructor(a, b = 0, c = null) {
            this.A = new av(a);
            this.l = new $u(b);
            this.j = c && new gv(c)
        }
    };
    class mv {
        constructor(a, b, c = 0, d = null) {
            this.A = new Zj(a);
            this.l = new lv(b, c, d);
            this.j = b;
            this.B = new mu
        }
        find(a, b = 0) {
            const c = a.mc ? a.mc : [0],
                d = "number" === typeof a.Tc ? a.Tc : 0,
                e = "number" === typeof a.minWidth ? a.minWidth : 0,
                f = "number" === typeof a.maxWidth ? a.maxWidth : Infinity,
                g = "number" === typeof a.xa ? a.xa : 0;
            let h = this.A;
            h = Yj(Yj(Yj(Yj(Yj(Yj(Yj(h, Qq(c), nv(1, b)), Rq(a.Wa || []), nv(2, b)), Uq(a.Zb || []), nv(3, b)), Vq(a.ui || []), nv(4, b)), Wq(a.rc || []), nv(5, b)), Sq(a.qc || []), nv(6, b)), qe(Xo), nv(7, b));
            let l = h = h.apply(Lq(this.j));
            l = a.pb &&
                a.Ec ? Yj(l, Pq(d, a.Ec, this.j, a.ob), ov(16, b)) : Yj(l, Oq(d, this.j, a.ob), ov(9, b));
            l = Yj(l, ua(Zq, e, f), ov(10, b));
            a.nb && (l = Yj(l, Xq(this.j.document, a.nb), ov(11, b)));
            a.$b && (l = Yj(l, Yq(), ov(17, b)));
            l = Yj(Yj(l, Mq(this.j), ov(12, b)), Tq(g, this.j), ov(13, b));
            a.ib ? l = kv(this.l, l) : a.Me ? (l = hv(this.l, l), h.forEach(k => {
                Su(k);
                var m;
                null != (m = this.l.j) && (m = dv(m, k), null != (null == m ? void 0 : m.ya) && Wu(k, m.ya))
            }), l.forEach(k => Uu(k))) : l = jv(this.l, l);
            a.gb && (l = ak(l, jf(this.j.location.href + this.j.localStorage.google_experiment_mod)));
            1 ===
                c.length && lu(this.B, c[0], {
                    Ed: h.j.length,
                    Ne: l.j.length
                });
            return l.j.slice(0)
        }
    }
    const nv = (a, b) => c => Zo(c, b, a),
        ov = (a, b) => c => Zo(c.P, b, a);

    function pv(a, b) {
        if (!a) return !1;
        a = Nf(a, b);
        if (!a) return !1;
        a = a.cssFloat || a.styleFloat;
        return "left" == a || "right" == a
    }

    function qv(a) {
        for (a = a.previousSibling; a && 1 != a.nodeType;) a = a.previousSibling;
        return a ? a : null
    }

    function rv(a) {
        return !!a.nextSibling || !!a.parentNode && rv(a.parentNode)
    };
    var sv = !pb && !Ra();

    function tv(a) {
        if (/-[a-z]/.test("adFormat")) return null;
        if (sv && a.dataset) {
            if (Ta() && !("adFormat" in a.dataset)) return null;
            a = a.dataset.adFormat;
            return void 0 === a ? null : a
        }
        return a.getAttribute("data-" + "adFormat".replace(/([A-Z])/g, "-$1").toLowerCase())
    };
    var bu = (a, b, c) => {
            if (!b) return null;
            const d = wf(document, "INS");
            d.id = "google_pedestal_container";
            d.style.width = "100%";
            d.style.zIndex = "-1";
            if (c) {
                var e = a.getComputedStyle(c),
                    f = "";
                if (e && "static" != e.position) {
                    var g = c.parentNode.lastElementChild;
                    for (f = e.position; g && g != c;) {
                        if ("none" != a.getComputedStyle(g).display) {
                            f = a.getComputedStyle(g).position;
                            break
                        }
                        g = g.previousElementSibling
                    }
                }
                if (c = f) d.style.position = c
            }
            b.appendChild(d);
            if (d) {
                var h = a.document;
                f = h.createElement("div");
                f.style.width = "100%";
                f.style.height =
                    "2000px";
                c = V(a).clientHeight;
                e = h.body.scrollHeight;
                a = a.innerHeight;
                g = h.body.getBoundingClientRect().bottom;
                d.appendChild(f);
                var l = f.getBoundingClientRect().top;
                h = h.body.getBoundingClientRect().top;
                d.removeChild(f);
                f = e;
                e <= a && 0 < c && 0 < g && (f = g - h);
                a = l - h >= .8 * f
            } else a = !1;
            return a ? d : (b.removeChild(d), null)
        },
        vv = a => {
            let b = 0;
            try {
                b |= a != a.top ? 512 : 0, Ef() || (b |= 1048576), 1200 >= Math.floor(a.document.body.getBoundingClientRect().width) || (b |= 32768), uv(a) && (b |= 33554432)
            } catch (c) {
                b |= 32
            }
            return b
        },
        uv = a => {
            a = a.document.getElementsByClassName("adsbygoogle");
            for (let b = 0; b < a.length; b++)
                if ("autorelaxed" == tv(a[b])) return !0;
            return !1
        };

    function wv(a) {
        const b = nj(a, !0),
            c = V(a).scrollWidth,
            d = V(a).scrollHeight;
        let e = "unknown";
        a && a.document && a.document.readyState && (e = a.document.readyState);
        var f = sj(a);
        const g = [];
        var h = [];
        const l = [],
            k = [];
        var m = [],
            n = [],
            q = [];
        let r = 0,
            v = 0,
            x = Infinity,
            F = Infinity,
            A = null;
        var E = jq({
            Ga: !1
        }, a);
        for (var D of E) {
            E = D.getBoundingClientRect();
            const Z = b - (E.bottom + f);
            var I = void 0,
                J = void 0;
            if (D.className && -1 != D.className.indexOf("adsbygoogle-ablated-ad-slot")) {
                I = D.getAttribute("google_element_uid");
                J = a.google_sv_map;
                if (!I ||
                    !J || !J[I]) continue;
                I = (J = rh(J[I])) ? J.height : 0;
                J = J ? J.width : 0
            } else if (I = E.bottom - E.top, J = E.right - E.left, 1 >= I || 1 >= J) continue;
            g.push(I);
            l.push(J);
            k.push(I * J);
            D.className && -1 != D.className.indexOf("google-auto-placed") ? (v += 1, D.className && -1 != D.className.indexOf("pedestal_container") && (A = I)) : (x = Math.min(x, Z), n.push(E), r += 1, h.push(I), m.push(I * J));
            F = Math.min(F, Z);
            q.push(E)
        }
        x = Infinity === x ? null : x;
        F = Infinity === F ? null : F;
        f = xv(n);
        q = xv(q);
        h = yv(b, h);
        n = yv(b, g);
        m = yv(b * c, m);
        D = yv(b * c, k);
        return new zv(a, {
            Td: e,
            nc: b,
            se: c,
            re: d,
            je: r,
            Dd: v,
            Gd: Av(g),
            Hd: Av(l),
            Fd: Av(k),
            pe: f,
            ne: q,
            me: x,
            le: F,
            Vb: h,
            Ub: n,
            yd: m,
            xd: D,
            te: A
        })
    }

    function Bv(a, b, c, d) {
        const e = Ef() && !(900 <= V(a.l).clientWidth);
        d = Za(d, f => cb(a.A, f)).join(",");
        return {
            wpc: b,
            su: c,
            eid: d,
            doc: a.j.Td,
            pg_h: Cv(a.j.nc),
            pg_w: Cv(a.j.se),
            pg_hs: Cv(a.j.re),
            c: Cv(a.j.je),
            aa_c: Cv(a.j.Dd),
            av_h: Cv(a.j.Gd),
            av_w: Cv(a.j.Hd),
            av_a: Cv(a.j.Fd),
            s: Cv(a.j.pe),
            all_s: Cv(a.j.ne),
            b: Cv(a.j.me),
            all_b: Cv(a.j.le),
            d: Cv(a.j.Vb),
            all_d: Cv(a.j.Ub),
            ard: Cv(a.j.yd),
            all_ard: Cv(a.j.xd),
            pd_h: Cv(a.j.te),
            dt: e ? "m" : "d"
        }
    }
    class zv {
        constructor(a, b) {
            this.l = a;
            this.j = b;
            this.A = "633794002 633794005 21066126 21066127 21065713 21065714 21065715 21065716 42530887 42530888 42530889 42530890 42530891 42530892 42530893".split(" ")
        }
    }

    function Av(a) {
        return bf.apply(null, Za(a, b => 0 < b)) || null
    }

    function yv(a, b) {
        return 0 >= a ? null : af.apply(null, b) / a
    }

    function xv(a) {
        let b = Infinity;
        for (let e = 0; e < a.length - 1; e++)
            for (let f = e + 1; f < a.length; f++) {
                var c = a[e],
                    d = a[f];
                c = Math.max(Math.max(0, c.left - d.right, d.left - c.right), Math.max(0, c.top - d.bottom, d.top - c.bottom));
                0 < c && (b = Math.min(c, b))
            }
        return Infinity !== b ? b : null
    }

    function Cv(a) {
        return null == a ? null : Number.isInteger(a) ? a.toString() : a.toFixed(3)
    };

    function Dv(a, b) {
        b = (V(b).clientHeight || 0) - sj(b);
        let c = 0;
        for (let d = 0; d < a.length; d++) {
            const e = a[d].getBoundingClientRect();
            rq(e) && e.top <= b && (c += 1)
        }
        return c
    }

    function Ev(a) {
        const b = {};
        var c = lq({
            Ga: !1,
            yb: !1,
            zb: !1,
            Ab: !1
        }, a).map(d => d.getBoundingClientRect()).filter(rq);
        b.td = c.length;
        c = mq({
            zb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(rq);
        b.Vd = c.length;
        c = mq({
            Ab: !0
        }, a).map(d => d.getBoundingClientRect()).filter(rq);
        b.qe = c.length;
        c = mq({
            yb: !0
        }, a).map(d => d.getBoundingClientRect()).filter(rq);
        b.wd = c.length;
        c = (V(a).clientHeight || 0) - sj(a);
        c = lq({
            Ga: !1
        }, a).map(d => d.getBoundingClientRect()).filter(rq).filter(ta(Fv, null, c));
        b.ud = c.length;
        a = wv(a);
        c = null != a.j.Vb ? a.j.Vb :
            null;
        null != c && (b.ke = c);
        a = null != a.j.Ub ? a.j.Ub : null;
        null != a && (b.vd = a);
        return b
    }

    function Yt(a) {
        var b;
        let c;
        if (0 == (null != (c = null == (b = a.A.l.j) ? void 0 : [...Xb(b.j, 1)].length) ? c : 0)) return !1;
        if (0 == (kn(Bm) || 0)) return !0;
        if (void 0 === a.I) {
            b = a.A.find({
                mc: [0, 1, 2]
            });
            let d;
            a.I = (null == (d = a.A.l.j) ? void 0 : fv(d, b)) || !1
        }
        return a.I
    }

    function Zt(a, b, {
        Qc: c,
        rd: d,
        Nd: e
    } = {}) {
        const f = b.P;
        if (f.B) return !1;
        var g = b.W(),
            h = f.l(),
            l = a.B;
        a: {
            var k = a.j;
            switch (h) {
                case 0:
                    k = pv(qv(g), k);
                    break a;
                case 3:
                    k = pv(g, k);
                    break a;
                case 2:
                    var m = g.lastChild;
                    k = pv(m ? 1 == m.nodeType ? m : qv(m) : null, k);
                    break a
            }
            k = !1
        }
        if (l = !k && !(!l && 2 == h && !rv(g))) g = 1 == h || 2 == h ? g : g.parentNode, l = !(g && !Ml(g) && 0 >= g.offsetWidth);
        if (!l) return !1;
        c = null == c ? null : new Ak(null, {
            google_max_responsive_height: c
        });
        g = Bk(y(f.eb, 2) || 0);
        h = f.G;
        h = null == h ? null : new Ak(null, {
            google_ml_rank: h
        });
        l = Gv(a, f);
        d = zk(a.J, f.T ?
            f.T.j(b.U) : null, c, d || null, g, h, l);
        c = b.fill(a.G, d);
        if (e) {
            if (c) {
                e = c.ia;
                g = e.style.width;
                e.style.width = "100%";
                h = e.offsetWidth;
                e.style.width = g;
                e = h;
                g = a.j;
                h = c.ia;
                l = d && d.Za() || {};
                if (g !== g.top) k = Kf(g) ? 3 : 16;
                else if (488 > V(g).clientWidth)
                    if (g.innerHeight >= g.innerWidth)
                        if (k = V(g).clientWidth, !k || .3 < (k - e) / k) k = 6;
                        else {
                            if (k = "true" != l.google_full_width_responsive) c: {
                                m = h.parentElement;
                                for (k = V(g).clientWidth; m; m = m.parentElement) {
                                    const n = Nf(m, g);
                                    if (!n) continue;
                                    const q = $f(n.width);
                                    if (q && !(q >= k) && "visible" != n.overflow) {
                                        k = !0;
                                        break c
                                    }
                                }
                                k = !1
                            }
                            k = k ? 7 : !0
                        }
                else k = 5;
                else k = 4;
                if (!0 !== k) e = k;
                else {
                    if (!(l = "true" == l.google_full_width_responsive)) b: {
                        do
                            if ((l = Nf(h, g)) && "fixed" == l.position) {
                                l = !1;
                                break b
                            }
                        while (h = h.parentElement);
                        l = !0
                    }
                    l ? (g = V(g).clientWidth, e = g - e, e = g && 0 <= e ? !0 : g ? -10 > e ? 11 : 0 > e ? 14 : 12 : 10) : e = 9
                }
                if (e) {
                    e = a.j;
                    g = c.ia;
                    if (h = mo(e, g)) g.style.border = g.style.borderStyle = g.style.outline = g.style.outlineStyle = g.style.transition = "none", g.style.borderSpacing = g.style.padding = "0", ko(g, h, "0px"), g.style.width = V(e).clientWidth + "px", no(e, g, h), g.style.zIndex =
                        30;
                    e = !0
                } else Ql(c.Fa), e = !1
            } else e = !1;
            e = !e
        }
        if (e || !cu(a, c, d)) return !1;
        Ti(9, [f.G, f.Ha]);
        Yt(a) && Vu(b);
        return !0
    }

    function $t(a, b, c, d) {
        const e = c.Ba ? c.Ba : a.D;
        var f = {
            Hb: e.A,
            xa: e.C
        };
        for (let g of e.D) g.adCount <= b.j.length && (f = g.sc);
        return a.A.find({
            mc: c.types,
            Tc: f.Hb,
            ob: b,
            Wa: a.ea,
            xa: f.xa || void 0,
            gb: !!a.l.gb,
            ib: !!a.l.ib,
            Me: Yt(a),
            qc: c.qc,
            minWidth: c.minWidth,
            maxWidth: c.maxWidth,
            Zb: a.O,
            nb: a.T,
            rc: c.rc,
            pb: !!a.l.pb,
            Ec: e.j,
            $b: !!a.Z
        }, d)
    }

    function Hv(a) {
        return a.H ? a.H : a.H = a.j.google_ama_state
    }

    function Gv(a, b) {
        return kk(mk(yp(b).map(Ck), () => {
            a.C.push(18)
        }))
    }

    function cu(a, b, c) {
        if (!b) return !1;
        try {
            uo(a.j, b.ia, c)
        } catch (d) {
            return Ql(b.Fa), a.C.push(6), !1
        }
        return !0
    }
    class Iv {
        constructor(a, b, c, d, e = {}) {
            this.A = a;
            this.G = b;
            this.j = c;
            this.D = d.Ba;
            this.ea = d.Wa || [];
            this.J = d.Wd || null;
            this.O = d.Zb || [];
            this.T = d.nb || [];
            this.Z = !!d.$b;
            this.l = e;
            this.B = !1;
            this.L = [];
            this.C = [];
            this.I = this.H = void 0
        }
        N() {
            return this.j
        }
        ma(a) {
            this.L.push(a)
        }
        jc() {
            return !!this.l.dd
        }
        Fb() {
            return !uv(this.j)
        }
    }
    const Fv = (a, b) => b.top <= a;

    function Jv(a, b, c, d, e) {
        this.Ca = a;
        this.errors = b;
        this.jb = c;
        this.j = d;
        this.l = e
    };
    var Kv = (a, b, {
        Fb: c = !1,
        jc: d = !1,
        Ge: e = !1
    } = {}) => {
        const f = [];
        e && f.push(9); - 1 < b.indexOf(3) && f.push(6); - 1 < b.indexOf(4) && !d && c && f.push(8); - 1 < b.indexOf(1) && (3 === a ? f.push(1, 5) : f.push(1, 2, 3)); - 1 < b.indexOf(2) && f.push(7); - 1 < b.indexOf(4) && d && c && f.push(8);
        return f
    };
    class Lv {
        constructor(a, b) {
            this.B = a.slice(0);
            this.l = a.slice(0);
            this.A = db(this.l, 1);
            this.j = b
        }
    };
    const Mv = class {
        constructor(a) {
            this.j = a;
            this.exception = void 0
        }
    };
    class Nv {
        j() {
            return new Ak([], {
                google_reactive_ad_format: 40,
                google_tag_origin: "qs"
            })
        }
    };
    class Ov {
        j() {
            return new Ak(["adsbygoogle-resurrected-ad-slot"], {})
        }
    };

    function Pv(a) {
        return Nl(a.j.document).map(b => {
            const c = new Po(b, 3);
            b = new Ro(wo(a.j, b));
            return new Vo(c, b, a.l, !1, 0, [], null, a.j, null)
        })
    }
    class Qv {
        constructor(a) {
            var b = new Ov;
            this.j = a;
            this.l = b || null
        }
    };
    const Rv = {
        vc: "10px",
        Sb: "10px"
    };

    function Sv(a) {
        return Bj(a.j.document.querySelectorAll("INS.adsbygoogle-placeholder")).map(b => new Vo(new Po(b, 1), new No(Rv), a.l, !1, 0, [], null, a.j, null))
    }
    class Tv {
        constructor(a, b) {
            this.j = a;
            this.l = b || null
        }
    };

    function Uv(a, b) {
        return null == a ? b + "ShouldNotBeNull" : 0 == a ? b + "ShouldNotBeZero" : -1 > a ? b + "ShouldNotBeLessMinusOne" : null
    }

    function Vv(a, b, c) {
        const d = Uv(c.ub, "gapsMeasurementWindow") || Uv(c.Xa, "gapsPerMeasurementWindow") || Uv(c.bb, "maxGapsToReport");
        return null != d ? ik(d) : c.zc || -1 != c.Xa || -1 != c.bb ? gk(new Wv(a, b, c)) : ik("ShouldHaveLimits")
    }

    function Xv(a) {
        return Hv(a.A) && Hv(a.A).placed || []
    }

    function Yv(a) {
        return Xv(a).map(b => Sj(Qj(b.element, a.j)))
    }

    function Zv(a) {
        return Xv(a).map(b => b.index)
    }

    function $v(a, b) {
        const c = b.P;
        return !a.D && c.A && Wb(c.A, 8) && 1 == y(c.A, 8) ? [] : c.B ? (c.J || []).map(d => Sj(Qj(d, a.j))) : [Sj(new Rj(b.U.j, 0))]
    }

    function aw(a) {
        a.sort((e, f) => e.j - f.j);
        const b = [];
        let c = 0;
        for (let e = 0; e < a.length; ++e) {
            var d = a[e];
            let f = d.j;
            d = d.j + d.l;
            f <= c ? c = Math.max(c, d) : (b.push(new Rj(c, f - c)), c = d)
        }
        return b
    }

    function bw(a, b) {
        b = b.map(c => {
            var d = new Jt;
            d = z(d, 1, c.j);
            c = c.getHeight();
            return z(d, 2, c)
        });
        return Gt(Ft(new It, a), b)
    }

    function cw(a) {
        const b = G(a, Jt, 2).map(c => `G${ac(c,1,0)}~${c.getHeight()}`);
        return `W${ac(a,1,0)}${b.join("")}`
    }

    function dw(a, b) {
        const c = [];
        let d = 0;
        for (const e of Ej(b)) {
            const f = b.get(e);
            f.sort((g, h) => h.getHeight() - g.getHeight());
            a.I || f.splice(a.C, f.length);
            !a.G && d + f.length > a.l && f.splice(a.l - d, f.length);
            c.push(bw(e, f));
            d += f.length;
            if (!a.G && d >= a.l) break
        }
        return c
    }

    function ew(a) {
        const b = G(a, It, 5).map(c => cw(c));
        return `M${ac(a,1,0)}H${ac(a,2,0)}C${ac(a,3,0)}B${Number(!!bc(a,4))}${b.join("")}`
    }

    function fw(a) {
        var b = Dp(a.A.A.A.j.slice(0), a.j),
            c = Yv(a),
            d = new Hj(Zv(a));
        for (var e = 0; e < b.length; ++e)
            if (!d.contains(e)) {
                var f = $v(a, b[e]);
                c.push(...f)
            }
        c.push(new Rj(0, 0));
        c.push(Sj(new Rj(V(a.j).scrollHeight, 0)));
        b = aw(c);
        c = new Gj;
        for (d = 0; d < b.length; ++d) e = b[d], f = a.H ? 0 : Math.floor(e.j / a.B), Cj(c, f) || c.set(f, []), c.get(f).push(e);
        b = dw(a, c);
        c = new Et;
        c = z(c, 1, a.l);
        c = z(c, 2, a.B);
        c = z(c, 3, a.C);
        a = z(c, 4, a.D);
        return ic(a, 5, b)
    }

    function gw(a) {
        a = fw(a);
        return ew(a)
    }
    var Wv = class {
        constructor(a, b, c) {
            this.H = -1 == c.ub;
            this.B = c.ub;
            this.I = -1 == c.Xa;
            this.C = c.Xa;
            this.G = -1 == c.bb;
            this.l = c.bb;
            this.D = c.Oc;
            this.A = b;
            this.j = a
        }
    };
    var iw = class extends w {
            constructor() {
                super(void 0, -1, hw)
            }
            I(a) {
                return z(this, 8, a)
            }
        },
        hw = [3, 4, 5, 6];
    const jw = a => {
            const b = /[a-zA-Z0-9._~-]/,
                c = /%[89a-zA-Z]./;
            return a.replace(/(%[a-zA-Z0-9]{2})/g, function(d) {
                if (!d.match(c)) {
                    const e = decodeURIComponent(d);
                    if (e.match(b)) return e
                }
                return d.toUpperCase()
            })
        },
        kw = a => {
            let b = "";
            const c = /[/%?&=]/;
            for (let d = 0; d < a.length; ++d) {
                const e = a[d];
                b = e.match(c) ? b + e : b + encodeURIComponent(e)
            }
            return b
        };
    var lw = (a, b) => {
        a = Xb(a, 2);
        if (!a) return !1;
        for (let c = 0; c < a.length; c++)
            if (a[c] == b) return !0;
        return !1
    };
    const nw = (a, b) => {
            a = kw(jw(a.location.pathname)).replace(/(^\/)|(\/$)/g, "");
            const c = Tf(a),
                d = mw(a);
            return b.find(e => {
                const f = Wb(e, 7) ? y(C(e, El, 7), 1) : y(e, 1);
                e = Wb(e, 7) ? y(C(e, El, 7), 2) : 2;
                if ("number" !== typeof f) return !1;
                switch (e) {
                    case 1:
                        return f == c;
                    case 2:
                        return d[f] || !1
                }
                return !1
            }) || null
        },
        mw = a => {
            const b = {};
            for (;;) {
                b[Tf(a)] = !0;
                if (!a) return b;
                a = a.substring(0, a.lastIndexOf("/"))
            }
        };
    var ow = class extends w {
            constructor() {
                super(void 0)
            }
            Ma(a) {
                return z(this, 2, a)
            }
        },
        pw = [4, 5];
    var qw = a => {
            a.google_ad_modifications || (a.google_ad_modifications = {});
            return a.google_ad_modifications
        },
        rw = a => {
            a = qw(a);
            a.eids || (a.eids = []);
            return a.eids
        },
        sw = (a, b) => {
            a = qw(a);
            a.processed_sra_frame_pingbacks = a.processed_sra_frame_pingbacks || {};
            const c = !a.processed_sra_frame_pingbacks[b];
            a.processed_sra_frame_pingbacks[b] = !0;
            return c
        };
    var tw = {
            google_ad_block: "ad_block",
            google_ad_client: "client",
            google_ad_output: "output",
            google_ad_callback: "callback",
            google_ad_height: "h",
            google_ad_resize: "twa",
            google_ad_slot: "slotname",
            google_ad_unit_key: "adk",
            google_ad_dom_fingerprint: "adf",
            google_placement_id: "pi",
            google_ad_width: "w",
            google_captcha_token: "captok",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_ctr_threshold: "ctr_t",
            google_cust_criteria: "cust_params",
            gfwrnwer: "fwrn",
            gfwrnher: "fwrnh",
            google_image_size: "image_size",
            google_last_modified_time: "lmt",
            google_loeid: "loeid",
            google_max_num_ads: "num_ads",
            google_max_radlink_len: "max_radlink_len",
            google_mtl: "mtl",
            google_native_settings_key: "nsk",
            google_enable_content_recommendations: "ecr",
            google_num_radlinks: "num_radlinks",
            google_num_radlinks_per_unit: "num_radlinks_per_unit",
            google_pucrd: "pucrd",
            google_reactive_plaf: "plaf",
            google_reactive_plat: "plat",
            google_reactive_fba: "fba",
            google_reactive_sra_channels: "plach",
            google_responsive_auto_format: "rafmt",
            armr: "armr",
            google_plas: "plas",
            google_rl_dest_url: "rl_dest_url",
            google_rl_filtering: "rl_filtering",
            google_rl_mode: "rl_mode",
            google_rt: "rt",
            google_video_play_muted: "vpmute",
            google_source_type: "src_type",
            google_restrict_data_processing: "rdp",
            google_tag_for_child_directed_treatment: "tfcd",
            google_tag_for_under_age_of_consent: "tfua",
            google_tag_origin: "to",
            google_ad_semantic_area: "sem",
            google_tfs: "tfs",
            google_package: "pwprc",
            google_tag_partner: "tp",
            fra: "fpla",
            google_ml_rank: "mlr",
            google_apsail: "psa",
            google_ad_channel: "channel",
            google_ad_type: "ad_type",
            google_ad_format: "format",
            google_color_bg: "color_bg",
            google_color_border: "color_border",
            google_color_link: "color_link",
            google_color_text: "color_text",
            google_color_url: "color_url",
            google_page_url: "url",
            google_allow_expandable_ads: "ea",
            google_ad_section: "region",
            google_cpm: "cpm",
            google_encoding: "oe",
            google_safe: "adsafe",
            google_flash_version: "flash",
            google_font_face: "f",
            google_font_size: "fs",
            google_hints: "hints",
            google_ad_host: "host",
            google_ad_host_channel: "h_ch",
            google_ad_host_tier_id: "ht_id",
            google_kw_type: "kw_type",
            google_kw: "kw",
            google_contents: "contents",
            google_targeting: "targeting",
            google_adtest: "adtest",
            google_alternate_color: "alt_color",
            google_alternate_ad_url: "alternate_ad_url",
            google_cust_age: "cust_age",
            google_cust_ch: "cust_ch",
            google_cust_gender: "cust_gender",
            google_cust_interests: "cust_interests",
            google_cust_job: "cust_job",
            google_cust_l: "cust_l",
            google_cust_lh: "cust_lh",
            google_cust_u_url: "cust_u_url",
            google_cust_id: "cust_id",
            google_language: "hl",
            google_city: "gcs",
            google_country: "gl",
            google_region: "gr",
            google_content_recommendation_ad_positions: "ad_pos",
            google_content_recommendation_columns_num: "cr_col",
            google_content_recommendation_rows_num: "cr_row",
            google_content_recommendation_ui_type: "crui",
            google_content_recommendation_use_square_imgs: "cr_sq_img",
            google_color_line: "color_line",
            google_disable_video_autoplay: "disable_video_autoplay",
            google_full_width_responsive_allowed: "fwr",
            google_full_width_responsive: "fwrattr",
            efwr: "efwr",
            google_pgb_reactive: "pra",
            google_resizing_allowed: "rs",
            google_resizing_height: "rh",
            google_resizing_width: "rw",
            rpe: "rpe",
            google_responsive_formats: "resp_fmts",
            google_safe_for_responsive_override: "sfro",
            google_video_doc_id: "video_doc_id",
            google_video_product_type: "video_product_type",
            google_webgl_support: "wgl"
        },
        uw = a => (a = a.innerText || a.innerHTML) && (a = a.replace(/^\s+/, "").split(/\r?\n/, 1)[0].match(/^\x3c!--+(.*?)(?:--+>)?\s*$/)) && RegExp("google_ad_client").test(a[1]) ? a[1] : null,
        vw = a => {
            if (a = a.innerText || a.innerHTML)
                if (a = a.replace(/^\s+|\s+$/g, "").replace(/\s*(\r?\n)+\s*/g,
                        ";"), (a = a.match(/^\x3c!--+(.*?)(?:--+>)?$/) || a.match(/^\/*\s*<!\[CDATA\[(.*?)(?:\/*\s*\]\]>)?$/i)) && RegExp("google_ad_client").test(a[1])) return a[1];
            return null
        },
        ww = a => {
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
                        const b = a.match(/^(?:'(.*)'|"(.*)")$/);
                        if (b) return b[1] || b[2] || "";
                        if (/^[-+]?\d*(\.\d+)?$/.test(a)) {
                            const c = parseFloat(a);
                            return c === c ? c : void 0
                        }
                    } catch (b) {}
            }
        };

    function xw(a, b) {
        var c = new ow;
        c = z(c, 1, a.B).Ma(a.webPropertyCode);
        c = z(c, 3, a.l);
        b = hc(c, 5, pw, b);
        a.j && !a.A.has(2) && (a.A.add(2), gi(a.la, b))
    }
    var yw = class {
        constructor(a) {
            this.A = new Set;
            this.l = kn(Xl);
            this.B = (this.j = 0 < this.l && Qf() < 1 / this.l) ? og(Q()) : 0;
            if (this.j) {
                var b = Q(),
                    c, d, e;
                if (b.google_ad_client) var f = String(b.google_ad_client);
                else {
                    var g = qw(b).head_tag_slot_vars;
                    if (null !== (d = null !== (f = null === g || void 0 === g ? void 0 : g.google_ad_client) && void 0 !== f ? f : null === (c = b.document.querySelector(".adsbygoogle[data-ad-client]")) || void 0 === c ? void 0 : c.getAttribute("data-ad-client")) && void 0 !== d) f = d;
                    else {
                        c: {
                            f = b.document.getElementsByTagName("script");b =
                            b.navigator && b.navigator.userAgent || "";b = RegExp("appbankapppuzdradb|daumapps|fban|fbios|fbav|fb_iab|gsa/|messengerforios|naver|niftyappmobile|nonavigation|pinterest|twitter|ucbrowser|yjnewsapp|youtube", "i").test(b) || /i(phone|pad|pod)/i.test(b) && /applewebkit/i.test(b) && !/version|safari/i.test(b) && !oh() ? uw : vw;
                            for (c = f.length - 1; 0 <= c; c--)
                                if (d = f[c], !d.google_parsed_script_for_pub_code && (d.google_parsed_script_for_pub_code = !0, d = b(d))) {
                                    f = d;
                                    break c
                                }
                            f = null
                        }
                        if (f) {
                            b = /(google_\w+) *= *(['"]?[\w.-]+['"]?) *(?:;|$)/gm;
                            for (c = {}; d = b.exec(f);) c[d[1]] = ww(d[2]);
                            f = c;
                            f = f.google_ad_client ? f.google_ad_client : ""
                        } else f = ""
                    }
                    f = null !== (e = f) && void 0 !== e ? e : ""
                }
            } else f = "";
            this.webPropertyCode = f;
            this.la = null !== a && void 0 !== a ? a : new li
        }
    };
    var Aw = (a, b, c, d, e, f = null, g = null, h) => {
            zw(a, new vr(a), b, c, d, e, f, new Vj(a), g, h)
        },
        zw = (a, b, c, d, e, f, g = null, h = null, l = null, k) => {
            if (c)
                if (d) {
                    var m = [];
                    C(d, jl, 18) && m.push(2);
                    e.X && m.push(0);
                    const n = wl(d) && B(wl(d), 22),
                        q = C(d, Kk, 28) && 1 == ac(C(d, Kk, 28), 1, 0);
                    (n || q) && m.push(1);
                    C(d, Ek, 27) && 1 == ac(C(d, Ek, 27), 1, 0) && m.push(3);
                    C(d, kl, 29) && m.push(4);
                    try {
                        Bw(new Cw(a, b, c, d, e, m, f, g, h, l, k))
                    } catch (r) {
                        Si() && Ti(15, [r]), ur(b, kr, sr(ou(nu((new pu(0)).Ma(c), d), m).ma(1), r)), xw(mi(yw), new iw)
                    }
                } else ur(b, kr, (new pu(0)).Ma(c).ma(8)), xw(mi(yw),
                    new iw);
            else ur(b, kr, (new pu(0)).ma(9)), xw(mi(yw), new iw)
        };

    function Bw(a) {
        a.G.forEach(b => {
            switch (b) {
                case 0:
                    Dw(a);
                    break;
                case 1:
                    var c = new As(a.l, a.j, a.C),
                        d = Gr(c.j, c.l);
                    d = Dp(d, c.j).sort(Bs);
                    d = 0 == d.length ? [] : [d[Math.floor(d.length / 2)]];
                    b = c.j;
                    const e = [];
                    for (let f = 0; f < d.length; f++) {
                        const g = d[f],
                            h = "autors-container-" + f,
                            l = b.document.createElement("div");
                        l.setAttribute("id", h);
                        (new zs(b, g, new Fr(l))).init();
                        e.push(h)
                    }(new xs(c.j, e, c.A, y(C(c.l, $k, 22), 1))).init();
                    break;
                case 2:
                    (c = C(a.j, jl, 18)) && At(new Bt(a.l, new go(a.l, a.C), c, new hs(a.l), G(a.j, hl, 1)));
                    break;
                case 3:
                    Ew(a);
                    break;
                case 4:
                    (b = C(a.j, kl, 29)) && Fw(a.la, {
                        win: a.l,
                        webPropertyCode: a.C,
                        Zd: b,
                        Ad: null != (d = null == (c = C(a.j, bl, 6)) ? void 0 : G(c, cl, 1)) ? d : []
                    })
            }
        })
    }

    function Dw(a) {
        Gw(a) && Hw(a, "p", Iw(a));
        if (ul(a.j) && 1 === y(ul(a.j), 1)) {
            var b = C(ul(a.j), Gl, 6);
            b && 2 === y(b, 1) && vo(a.l)
        }
        b = a.B.ve;
        a: {
            var c = a.l;
            var d = Np(c);c = V(c).clientHeight || Kp[d];
            var e = Qp(G(b, Mk, 2), d);
            if (e && (e = Tp(e, c))) {
                d = e;
                break a
            }
            d = Op(d, c)
        }
        if (a.B.X && Wb(a.B.X, 10) && (c = $b(C(a.B.X, Fl, 10), 1), null !== c && void 0 !== c)) {
            var f = a.l;
            d = c;
            c = Np(f);
            e = V(f).clientHeight || Kp[c];
            var g = void 0;
            b && (g = (g = (g = Qp(G(b, Mk, 2), c)) ? C(g, Ok, 7) : void 0) ? Up(g, e) : void 0);
            var h = Np(f);
            f = V(f).clientHeight || Kp[h];
            const O = Sp(Lp[h].tc, f);
            f = null ===
                O ? Op(h, f) : new Pp(O, O, Vp(O, O, 8), 8, .3, g);
            g = Sp(Lp[c].jd, e);
            h = Sp(Lp[c].tc, e);
            e = Sp(Lp[c].hd, e);
            c = f.A;
            g && e && h && void 0 !== d && (c = .5 >= d ? h + (1 - 2 * d) * (g - h) : e + (2 - 2 * d) * (h - e));
            d = c;
            d = new Pp(c, d, Vp(c, d, f.l), f.l, f.B, f.j)
        }
        if (Wb(a.j, 26)) {
            c = C(a.j, Il, 26);
            e = a.l;
            g = B(c, 2);
            c = C(c, Mk, 1);
            f = V(e).clientHeight || Kp[Np(e)];
            var l;
            e = null != (l = Sp(null == c ? void 0 : y(c, 2), f)) ? l : d.A;
            var k;
            l = null != (k = Sp(null == c ? void 0 : y(c, 5), f)) ? k : d.C;
            var m;
            k = g ? [] : null != (m = Rp(null == c ? void 0 : G(c, Nk, 3), f)) ? m : d.D;
            var n;
            m = null != (n = null == c ? void 0 : y(c, 4)) ? n : d.l;
            var q;
            n = null != (q = null == c ? void 0 : $b(c, 6)) ? q : d.B;
            var r;
            q = null != (r = (null == c ? 0 : Wb(c, 7)) ? Up(C(c, Ok, 7), f) : null) ? r : d.j;
            d = new Pp(e, l, k, m, n, q)
        }
        r = a.B.X ? Xb(a.B.X, 6) : [];
        q = a.B.X ? G(a.B.X, Vk, 5) : [];
        n = X(wm);
        var v;
        k = a.j;
        c = G(k, hl, 1);
        l = a.B.X && lw(a.B.X, 1) ? "text_image" : "text";
        e = new Nv;
        m = Wo(c, a.l, {
            Jd: e,
            fe: new So(l)
        });
        c.length != m.length && a.L.push(13);
        m = m.concat(Sv(new Tv(a.l, e)));
        c = 0;
        e = X(rm);
        f = !1;
        ul(k) && 1 === y(ul(k), 1) && (g = C(ul(k), Gl, 6)) && (c = y(g, 2) || 0, 1 === y(g, 1) && (f = !0));
        var x, F;
        g = (null == (v = C(k, ml, 24)) ? void 0 : null == (x = C(v, ql, 3)) ?
            void 0 : null == (F = C(x, rl, 3)) ? void 0 : nc(F, sl, 2, tl)) || !1;
        if (e || f || g) v = Pv(new Qv(a.l)), m = m.concat(v), Tu.J = !0, Tu.D = v.length;
        m = m.concat(Ct(k, l, a.l));
        v = C(k, ml, 24);
        v = new mv(m, a.l, c, v);
        x = a.C;
        F = a.l;
        r = {
            Ba: d,
            Wd: a.Z,
            Wa: a.B.Wa,
            Zb: r,
            nb: q,
            $b: n
        };
        n = X(sm);
        wl(a.j) ? (q = wl(a.j), m = $b(q, 8), q = {
            gb: n || bc(q, 14, !1),
            ib: bc(q, 2, !1),
            Fc: bc(q, 3, !1),
            kd: bc(q, 4, !1),
            Gc: bc(q, 5, !1),
            dd: bc(q, 6, !1),
            ue: null == m ? 0 : m,
            Xc: y(q, 10),
            pb: Jw(a),
            ac: a.T
        }) : q = {
            gb: n,
            ib: !1,
            Fc: !1,
            kd: !1,
            Gc: !1,
            dd: !1,
            ue: 0,
            Xc: 0,
            pb: Jw(a),
            ac: a.T
        };
        a.A = new Iv(v, x, F, r, q);
        var A, E;
        (null ==
            (A = Hv(a.A)) ? 0 : null == (E = A.optimization) ? 0 : E.ablatingThisPageview) && !Yt(a.A) && (vo(a.l), Tu.C = !0);
        E = a.B.X ? Xb(a.B.X, 2) : [];
        A = a.A;
        b = Kv(y(b, 1), E, {
            Fb: A.Fb(),
            jc: A.jc(),
            Ge: !!A.l.ac
        });
        b = new Lv(b, A);
        a.H = b;
        A = a.H;
        b = new zj;
        for (A.j.B = !0; 0 < A.l.length;) E = A, (v = Vt[A.l[0]]) ? E = v(E.j) : (E.j.ma(12), E = !0), E || A.j.ma(5), A.l.shift();
        try {
            var D = b.resolve,
                I = A.j.A.A.filter(Xo).j.length,
                J = A.j.L.slice(0),
                Z = A.j;
            let O;
            var pa = [...Z.C, ...((null == (O = Z.A.l.j) ? void 0 : [...O.l]) || [])];
            D.call(b, new Mv(new Jv(I, J, pa, A.j.A.A.j.length, A.j.A.B.j)))
        } catch (O) {
            D =
                O, wj(b), b.j = 2, b.A = D, yj(b.l)
        }
        b.l.then(ta(a.ga, a), ta(a.O, a))
    }

    function Ew(a) {
        lk(wr(a.l, a.j, a.ea, {
            google_ad_client: a.C
        }), b => {
            const c = !!b.B.hb && zr(b);
            c && (b.C = gr(b.j, b.D, b.B.hb));
            var d = b.j;
            var e = C(b.l, Fk, 2);
            var f = qp(b.G, d);
            f = f.filter(sp).filter(tp(f)).filter(up(d));
            f.sort(vp);
            if (f = f[0] || null) {
                a: switch (ac(e, 1, 0)) {
                    case 1:
                        d = new ar(d, f);
                        break a;
                    case 2:
                        d = new Ip(Ep(d, f));
                        break a;
                    case 3:
                        d = new $q(d, Ep(d, f));
                        break a;
                    default:
                        throw Error(`Unknown player position: ${ac(e,1,0)}`);
                }
                d = d.j()
            }
            else d = null;
            if (d) {
                e = b.j;
                f = C(b.l, Jk, 4) || void 0;
                if (0 < e.document.getElementsByTagName("google-read-aloud-player").length) e =
                    ik("Player already created");
                else {
                    var g = b.B,
                        h = e.document;
                    const l = h.createElement("div");
                    l.id = "google-auto-placed-read-aloud-player";
                    L(l, {
                        margin: "5px"
                    });
                    const k = h.createElement("script");
                    le(k, Og `window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;`);
                    l.appendChild(k);
                    br(h, l, uc("https://www.google-analytics.com/analytics.js"));
                    br(h, l, uc("https://www.gstatic.com/readaloud/player/web/api/audiosense/js/api.js"));
                    h = h.createElement("google-read-aloud-player");
                    h.setAttribute("data-api-key",
                        "AIzaSyDTBU0XpbvyTzmA5nS-09w7cnopRavFpxs");
                    h.setAttribute("data-tracking-ids", "UA-199725947-1,UA-168915890-13");
                    h.setAttribute("data-url", g.url);
                    h.setAttribute("data-voice", "en-us-f-1");
                    f && (Wb(f, 1) && 0 != ac(f, 1, 0) && h.setAttribute("data-docking-begin-trigger", cr[ac(f, 1, 0)]), Wb(f, 2) && h.setAttribute("data-experiment", H(f, 2)));
                    l.appendChild(h);
                    Bp(d, l);
                    e = gk(e.document.getElementsByTagName("google-read-aloud-player")[0])
                }
                null != e.j ? (b.A = e.j.value, c && yr(b), Ar(b, {
                    sts: "ok",
                    pp: d.U.j
                })) : Ar(b, {
                    sts: "wf"
                })
            } else Ar(b, {
                sts: "pf"
            })
        })
    }

    function Jw(a) {
        return a.B.X && Wb(a.B.X, 10) ? .5 <= ($b(C(a.B.X, Fl, 10), 1) || 0) : !0
    }

    function Kw(a, b) {
        for (var c = rr(rr(new pu(b.Ca), b.errors), a.L), d = b.jb, e = 0; e < d.length; e++) a: {
            for (var f = d[e], g = 0; g < c.D.length; g++)
                if (c.D[g] == f) break a;c.D.push(f)
        }
        c.l.ppos = b.placementPositionDiffs;
        c.l.eatf = b.Wb;
        c.l.eatfAbg = b.Xb;
        c.l.reatf = b.xb;
        c.l.a = a.H.B.slice(0).join(",");
        a = ou(nu(c, a.j), a.G).Ma(a.C);
        if (c = b.Rb) a.l.as_count = c.td, a.l.d_count = c.Vd, a.l.ng_count = c.qe, a.l.am_count = c.wd, a.l.atf_count = c.ud, a.l.mdns = qu(c.ke), a.l.alldns = qu(c.vd);
        a = a.I(b.Lb);
        if (c = b.Xd) {
            d = [];
            for (var h of Ej(c)) 0 < c.get(h).length &&
                (e = c.get(h)[0], d.push("(" + [h, e.Ed, e.Ne].join() + ")"));
            a.l.fd = d.join(",")
        }
        h = b.nc;
        null != h && (a.l.pgh = h);
        void 0 !== b.exception && sr(a, b.exception).ma(1);
        return a
    }

    function Lw(a, b) {
        var c = Kw(a, b);
        ur(a.D, 0 < b.errors.length || 0 < a.L.length || void 0 !== b.exception ? 0 < a.J ? mr : kr : 0 < a.J ? lr : jr, c);
        if (C(a.j, ml, 24)) {
            if (null != (b = a.A.A.l.j)) {
                Tu.B = [...Xb(b.j, 1)];
                var d;
                let k;
                Tu.H = !!(null == (d = C(b.j, ql, 3)) ? 0 : null == (k = C(d, rl, 3)) ? 0 : nc(k, sl, 2, tl));
                d = new Gj;
                var e;
                let m;
                for (const n of null != (m = null == (e = C(b.j, ol, 2)) ? void 0 : G(e, pl, 1)) ? m : []) d.set(n.wb(), n.dc());
                Tu.l = d
            }
            e = Hv(a.A);
            var f;
            Tu.A = !!(null == e ? 0 : null == (f = e.optimization) ? 0 : f.ablationFromStorage);
            var g;
            if (null == e ? 0 : null == (g = e.optimization) ?
                0 : g.ablatingThisPageview) Tu.G = !0;
            let l;
            Tu.L = !!(null == e ? 0 : null == (l = e.optimization) ? 0 : l.availableAbg);
            var h;
            f = Tu;
            c = new Cu(c);
            f.B ? (g = null != (h = f.B) ? h : [], c.j.sl = g.join("~"), c.j.ab = su(f.G), c.j.rr = su(f.J), c.j.oab = su(f.H), null != f.A && (c.j.sab = su(f.A)), f.C && (c.j.fb = su(f.C)), c.j.ls = su(f.L), ru(c, f.l.Ya()), null != f.D && (c.j.rp = su(f.D)), Yu(f, c)) : (h = c, f = "irr".replace(RegExp("~", "g"), ""), h.j.e = h.j.e ? h.j.e + ("~" + f) : f);
            h = c;
            ur(a.D, pr, h)
        }
    }

    function Mw(a) {
        const b = new iw,
            c = mi(yw);
        c.j && C(a.j, ml, 24) && (a = Zu(), gc(b, 1, a));
        xw(c, b)
    }

    function Nw(a) {
        return ul(a.j) && 1 === y(ul(a.j), 1) ? !(C(ul(a.j), Gl, 6) && 1 <= (y(C(ul(a.j), Gl, 6), 3) || 0)) : !1
    }

    function Ow(a) {
        if (Nw(a)) {
            a = a.A;
            var b = mq({
                zb: !0,
                Ab: !0
            }, a.j);
            a = 0 < Dv(b, a.j)
        } else a = a.A.j, b = lq({
            Ga: !1,
            yb: !1
        }, a), a = 0 < Dv(b, a);
        return a
    }

    function Pw(a) {
        if (Gw(a)) {
            var b = Iw(a);
            a.I.init(null == b ? void 0 : b, () => {
                Hw(a, "s", b)
            });
            Tj(a.I, c => {
                Hw(a, "d", Iw(a), c);
                a.I.ea();
                let d, e;
                if (null == (d = a.j) ? 0 : null == (e = wl(d)) ? 0 : bc(e, 21, !1)) {
                    let f, g;
                    null != (f = a.j) && null != (g = wl(f)) && z(g, 18, !1);
                    try {
                        let h;
                        if (null == (h = a.G) ? 0 : h.includes(0)) a.J++, Dw(a), Hw(a, "r", Iw(a), c)
                    } catch (h) {
                        Hw(a, "f", Iw(a), c), ur(a.D, mr, sr(ou(nu((new pu(0)).Ma(a.C), a.j), a.G).ma(1), h))
                    }
                }
            })
        }
    }

    function Qw(a, b, c) {
        {
            var d = Hv(a.A),
                e = b.j;
            const f = e.j;
            let g = e.Ca,
                h = e.errors.slice(),
                l = e.jb.slice(),
                k = b.exception;
            d ? (d.numAutoAdsPlaced ? g += d.numAutoAdsPlaced : a.H.A && l.push(13), void 0 !== d.exception && (k = d.exception), c = {
                Ca: g,
                Lb: f,
                errors: e.errors.slice(),
                jb: l,
                exception: k,
                xb: c,
                Wb: !!d.eatf,
                Xb: !!d.eatfAbg
            }) : (l.push(12), a.H.A && l.push(13), c = {
                Ca: g,
                Lb: f,
                errors: h,
                jb: l,
                exception: k,
                xb: c,
                Wb: !1,
                Xb: !1
            })
        }
        c.Rb = Ev(a.A.j);
        if (b = b.j.l) c.Xd = b;
        c.nc = V(a.l).scrollHeight;
        if (Si()) {
            d = a.A.A.A.j.slice(0);
            b = [];
            for (const f of d) {
                d = {};
                e = f.L;
                for (const g of Ej(e)) d[g] = e.get(g);
                d = {
                    anchorElement: f.H.j(f.j),
                    position: f.l(),
                    clearBoth: f.I,
                    locationType: f.Ha,
                    placed: f.B,
                    placementProto: f.A ? f.A.toJSON() : null,
                    articleStructure: f.C ? f.C.toJSON() : null,
                    rejectionReasons: d
                };
                b.push(d)
            }
            Ti(14, [{
                placementIdentifiers: b
            }, a.A.G, c.Rb])
        }
        return c
    }

    function Rw(a, b) {
        var c = a.A.j;
        c = c.googleSimulationState = c.googleSimulationState || {};
        c.amaConfigPlacementCount = b.Lb;
        c.numAutoAdsPlaced = b.Ca;
        c.hasAtfAd = b.xb;
        void 0 !== b.exception && (c.exception = b.exception);
        null != a.A && (a = Vv(a.l, a.A, {
            ub: -1,
            Xa: -1,
            bb: -1,
            Oc: !0,
            zc: !0
        }), null != a.j ? (c.placementPositionDiffs = gw(a.j.value), b = fw(a.j.value), a = new Kt, a = hc(a, 2, Lt, b), c.placementPositionDiffsReport = kc(a)) : (b = a.l.message, c.placementPositionDiffs = "E" + b, a = new Kt, a = ec(a, 1, Lt, b), c.placementPositionDiffsReport = kc(a)))
    }

    function Hw(a, b, c, d) {
        a = {
            r: b,
            pg_h: V(a.l).scrollHeight,
            su: a.l.location.hostname,
            d: void 0 == c ? -1 : c
        };
        void 0 !== d && (a.pg_hd = d);
        S(or.ka, a, or.da)
    }

    function Gw(a) {
        let b, c, d;
        return null != (d = null == (b = a.j) ? void 0 : null == (c = wl(b)) ? void 0 : bc(c, 18, !1)) ? d : !1
    }

    function Iw(a) {
        let b = null;
        wl(a.j) && Wb(wl(a.j), 19) && (b = y(wl(a.j), 19));
        return b
    }
    class Cw {
        constructor(a, b, c, d, e, f, g, h, l, k, m) {
            this.l = a;
            this.D = b;
            this.C = c;
            this.j = d;
            this.B = e;
            this.G = f;
            this.Z = h || null;
            this.L = [];
            this.I = l;
            this.T = k;
            this.la = g;
            this.J = 0;
            this.ea = m ? m : {
                url: a.location.href,
                hb: void 0
            }
        }
        ga(a) {
            try {
                const b = Ow(this) || Nw(this) ? Ow(this) : void 0;
                Ll({
                    Yb: b
                }, this.l);
                Pw(this);
                const c = Qw(this, a, Ow(this));
                Wb(this.j, 25) && B(C(this.j, Hl, 25), 1) && Rw(this, c);
                Lw(this, c);
                Mw(this);
                Ci(753, () => {
                    if (X(mm) && null != this.A) {
                        var d = Vv(this.l, this.A, {
                                ub: kn(qm),
                                Xa: kn(pm),
                                bb: kn(nm),
                                Oc: !0,
                                zc: !1
                            }),
                            e = Cc(c);
                        null != d.j ?
                            (d = gw(d.j.value), e.placementPositionDiffs = d) : e.placementPositionDiffs = "E" + d.l.message;
                        e = Kw(this, e);
                        ur(this.D, nr, e)
                    }
                })()
            } catch (b) {
                this.O(b)
            }
        }
        O(a) {
            Lw(this, {
                Ca: 0,
                Lb: void 0,
                errors: [],
                jb: [],
                exception: a,
                xb: void 0,
                Wb: void 0,
                Xb: void 0,
                Rb: void 0
            });
            Mw(this)
        }
    };
    var Sw = class extends w {
        constructor(a) {
            super(a)
        }
    };

    function Tw(a) {
        try {
            var b = a.localStorage.getItem("google_auto_fc_cmp_setting") || null
        } catch (d) {
            b = null
        }
        const c = b;
        return c ? jk(() => lc(Sw, c)) : gk(null)
    };

    function Uw() {
        if (Vw) return Vw;
        const a = Gg() || Q(),
            b = a.google_persistent_state_async;
        return null != b && "object" == typeof b && null != b.S && "object" == typeof b.S ? Vw = b : a.google_persistent_state_async = Vw = new Ww
    }

    function Xw(a, b, c) {
        b = Yw[b] || "google_ps_" + b;
        a = a.S;
        const d = a[b];
        return void 0 === d ? a[b] = c : d
    }

    function Zw(a, b, c) {
        return a.S[Yw[b] || "google_ps_" + b] = c
    }

    function $w(a, b) {
        return Zw(a, b, Xw(a, b, 0) + 1)
    }

    function ax() {
        var a = Uw();
        return Xw(a, 20, {})
    }

    function bx() {
        var a = Uw();
        return Xw(a, 28, [])
    }
    class Ww {
        constructor() {
            this.S = {}
        }
    }
    var Vw = null;
    const Yw = {
        [8]: "google_prev_ad_formats_by_region",
        [9]: "google_prev_ad_slotnames_by_region"
    };

    function cx(a, b) {
        return z(a, 5, b)
    }
    var dx = class extends w {
        constructor() {
            super(void 0)
        }
    };
    var gx = ({
        win: a,
        Db: b,
        Mc: c = !1,
        Nc: d = !1
    }) => {
        if (!ex({
                win: a,
                Db: b,
                Mc: c,
                Nc: d
            })) return fx(a, cx(new dx, !0));
        b = Uw();
        (b = Xw(b, 24, void 0)) ? (b = cx(new dx, Vn(b)), a = fx(a, b)) : a = new hk(null, Error("tcunav"));
        return a
    };

    function ex({
        win: a,
        Db: b,
        Mc: c,
        Nc: d
    }) {
        if (!(d = !d && Xn(new co(a)))) {
            if (c = !c) {
                if (b) {
                    a = Tw(a);
                    if (null != a.j)
                        if ((a = a.j.value) && Wb(a, 1)) b: switch (a = y(a, 1), a) {
                            case 1:
                                a = !0;
                                break b;
                            default:
                                throw Error("Unhandled AutoGdprFeatureStatus: " + a);
                        } else a = !1;
                        else Di(806, a.l), a = !1;
                    b = !a
                }
                c = b
            }
            d = c
        }
        return d ? !0 : !1
    }

    function fx(a, b) {
        return (a = Hn(b, a)) ? gk(a) : new hk(null, Error("unav"))
    };
    var hx = class extends w {
        constructor(a) {
            super(a)
        }
    };
    class ix {
        constructor(a, b, c, d) {
            this.j = a;
            this.A = b;
            this.C = c;
            this.l = !1;
            this.B = d
        }
    };
    Bc(aj);
    Bc(bj);
    var kx = class extends w {
            constructor(a) {
                super(a, -1, jx)
            }
        },
        lx = class extends w {
            constructor(a) {
                super(a)
            }
        },
        mx = class extends w {
            constructor(a) {
                super(a)
            }
        },
        jx = [7];

    function nx(a) {
        (a = ox(a)) && C(a, lx, 4)
    }

    function ox(a) {
        a = (a = (new Gn(a)).get("FCCDCF", "")) ? a : null;
        try {
            return a ? lc(kx, a) : null
        } catch (b) {
            return null
        }
    };

    function px(a) {
        a.__uspapi || a.frames.__uspapiLocator || (a = new qx(a), rx(a))
    }

    function rx(a) {
        !a.A || a.j.__uspapi || a.j.frames.__uspapiLocator || (a.j.__uspapiManager = "fc", Sn(a.j, "__uspapiLocator"), wa("__uspapi", (...b) => sx(a, ...b)))
    }

    function sx(a, b, c, d) {
        "function" === typeof d && "getUSPData" === b && d({
            version: 1,
            uspString: a.A
        }, !0)
    }
    class qx {
        constructor(a) {
            this.j = a;
            this.l = a.document;
            this.A = (a = (a = ox(this.l)) ? C(a, mx, 5) || null : null) ? y(a, 2) : null;
            nx(this.l);
            nx(this.l)
        }
    };

    function tx(a) {
        const b = a[0] / 255,
            c = a[1] / 255;
        a = a[2] / 255;
        return .2126 * (.03928 >= b ? b / 12.92 : Math.pow((b + .055) / 1.055, 2.4)) + .7152 * (.03928 >= c ? c / 12.92 : Math.pow((c + .055) / 1.055, 2.4)) + .0722 * (.03928 >= a ? a / 12.92 : Math.pow((a + .055) / 1.055, 2.4))
    }

    function ux(a, b) {
        a = tx(a);
        b = tx(b);
        return (Math.max(a, b) + .05) / (Math.min(a, b) + .05)
    };
    const vx = {
        google_ad_channel: !0,
        google_ad_host: !0
    };
    var wx = (a, b) => {
            a.location.href && a.location.href.substring && (b.url = a.location.href.substring(0, 200));
            S("ama", b, .01)
        },
        xx = a => {
            const b = {};
            Rf(vx, (c, d) => {
                d in a && (b[d] = a[d])
            });
            return b
        };
    const zx = (a, b, c) => {
        var d = new Al;
        gc(c, 3, d);
        var e = wl(c) && y(wl(c), 13) ? y(wl(c), 13) : 1;
        z(d, 1, Date.now() + 864E5 * e);
        d = c.constructor;
        e = Qb(c.A, Sb);
        d = Ub(d, e);
        mc(d, c);
        if (wl(c)) {
            e = new xl;
            var f = B(wl(c), 23);
            e = z(e, 23, f);
            f = bc(wl(c), 12, !1);
            e = z(e, 12, f);
            c = bc(wl(c), 15, !1);
            c = z(e, 15, c);
            gc(d, 15, c)
        }
        c = G(d, hl, 1);
        for (e = 0; e < c.length; e++) z(c[e], 11, Vb);
        gc(d, 22, void 0);
        if (X(lm)) yx(a);
        else try {
            (b || a.localStorage).setItem("google_ama_config", kc(d))
        } catch (g) {
            wx(a, {
                lserr: 1
            })
        }
    };
    var yx = a => {
        try {
            try {
                a.localStorage.removeItem("google_ama_config")
            } catch (b) {
                wx(a, {
                    lserr: 1
                })
            }
        } catch (b) {
            wx(a, {
                lserr: 1
            })
        }
    };

    function Fw(a, {
        win: b,
        webPropertyCode: c,
        Zd: d,
        Ad: e
    }) {
        fr(8, b, a.j).then(f => f.runGallerify({
            win: b,
            webPropertyCode: c,
            serializedGallerifyConfig: kc(d),
            serializedArticleStructures: e.map(g => kc(g))
        })).catch(Ei(927))
    }
    var Ax = class {
        constructor(a) {
            this.j = a
        }
    };
    var Bx = (a, b, c, d, e, f, g = null, h) => {
        try {
            var l = a.localStorage
        } catch (r) {
            l = null
        }
        if (l) {
            if (X(lm)) var k = null;
            else try {
                k = l.getItem("google_ama_config")
            } catch (r) {
                k = null
            }
            try {
                var m = k ? lc(zl, k) : null
            } catch (r) {
                m = null
            }
            k = m
        } else k = null;
        a: {
            if (d) try {
                var n = lc(zl, d);
                break a
            } catch (r) {
                wx(a, {
                    cfg: 1,
                    inv: 1
                })
            }
            n = null
        }
        if (d = n) {
            X(tm) ? e && zx(a, e, d) : zx(a, null, d);
            e = nw(a, G(d, Dl, 7));
            a: {
                if (e && (n = y(e, 3), k = C(d, Tk, 9), n && k)) {
                    b: {
                        k = G(k, Rk, 1);
                        for (q of k)
                            if (y(q, 1) == n) {
                                var q = C(q, Qk, 2) || null;
                                break b
                            }
                        q = null
                    }
                    if (q) break a
                }
                q = C(d, Qk, 8) || new Qk
            }
            q = {
                ve: q
            };
            e && (q.X = e);
            e && lw(e, 3) && (q.Wa = [1]);
            if (7 == c.google_pgb_reactive && (e = q.X, !e || !B(e, 8))) return !1;
            sw(a, 2) && (Ti(5, [d.toJSON()]), e = xx(c), f = new Ax(f), c = q.X, e.google_package = c && y(c, 4) || "", Aw(a, b, d, q, f, new Ak(["google-auto-placed"], e), g, {
                url: a.location.href,
                hb: h
            }));
            return !0
        }
        k && (wx(a, {
            cfg: 1,
            cl: 1
        }), yx(a));
        return !1
    };
    const Cx = [255, 255, 255];

    function Dx(a) {
        function b(d) {
            return [Number(d[1]), Number(d[2]), Number(d[3]), 4 < d.length ? Number(d[4]) : 1]
        }
        var c = a.match(/rgb\(([0-9]+),\s*([0-9]+),\s*([0-9]+)\)/);
        if (c || (c = a.match(/rgba\(([0-9]+),\s*([0-9]+),\s*([0-9]+),\s*([0-9\\.]+)\)/))) return b(c);
        if ("transparent" === a) return [0, 0, 0, 0];
        throw Error(`Invalid color: ${a}`);
    }

    function Ex(a) {
        var b = getComputedStyle(a);
        if ("none" !== b.backgroundImage) return null;
        b = Dx(b.backgroundColor);
        var c = Fx(b);
        if (c) return c;
        a = (a = a.parentElement) ? Ex(a) : Cx;
        if (!a) return null;
        c = b[3];
        return [Math.round(c * b[0] + (1 - c) * a[0]), Math.round(c * b[1] + (1 - c) * a[1]), Math.round(c * b[2] + (1 - c) * a[2])]
    }

    function Fx(a) {
        return 1 === a[3] ? [a[0], a[1], a[2]] : null
    };
    var Gx = class {
        constructor(a, b, c, d, e = !1) {
            this.l = a;
            this.j = b;
            this.C = c;
            this.B = d;
            this.A = e
        }
    };
    const Hx = /[\s!'",:;\\(\\)\\?\\.]/,
        Ix = "\u00bf\u00a1\u037e\u061f\u3002\uff0c\u00b7\u2019".split(""),
        Jx = ["block", "inline", "inline-block", "list-item", "table-cell"],
        Kx = ["ja", "zh_CN", "zh_TW"];
    class Lx {
        constructor() {
            this.j = Infinity
        }
    }

    function Mx(a, b, c, d, e, f) {
        if (a.performance.now() >= c.B) return !1;
        for (let A = 0; A < b.childNodes.length; A++) {
            const E = b.childNodes[A];
            if (E.nodeType === Node.TEXT_NODE && "" !== E.textContent) {
                a: {
                    var g = a;
                    var h = c,
                        l = b,
                        k = E.textContent,
                        m = e,
                        n = f,
                        q = h.j,
                        r = [];
                    let D = 0;
                    for (;;) {
                        var v = k.length;
                        let I = null;
                        var x = "";
                        b: for (const J of G(q, Nx, 2))
                            for (const Z of G(J, Ox, 2)) {
                                const pa = H(Z, 1);
                                for (var F = D; F < k.length;) {
                                    F = k.indexOf(pa, F);
                                    if (-1 === F) break;
                                    if (F > v || F === v && null !== I && pa.length < I.length) break;
                                    if (!Px(k.charAt(F - 1)) || !Px(k.charAt(F +
                                            pa.length))) break;
                                    if (m.j + Qx(k.substr(D, F - D)) >= kn(gm)) {
                                        const O = g.getComputedStyle(l),
                                            ra = O.fontSize.match(/\d+/);
                                        if (!(ra && 12 <= Number(ra[0]) && cb(Jx, O.display))) break b;
                                        v = F;
                                        I = pa;
                                        x = H(J, 1);
                                        break
                                    }
                                    F += 1
                                }
                            }
                        if (null === I) {
                            if (0 === D) {
                                m.j += Qx(k);
                                g = null;
                                break a
                            }
                            D < k.length && (h = k.substr(D), r.push(g.document.createTextNode(h)), m.j += Qx(h));
                            g = r;
                            break a
                        }
                        v > D && r.push(g.document.createTextNode(k.substr(D, v - D)));
                        r.push(Rx(g, h, x, I));
                        m.j = 0;
                        D = v + I.length;
                        v = n;
                        v.j++;
                        v.l.add(x)
                    }
                }
                if (g && !X(hm)) {
                    for (const D of g) b.insertBefore(D, E), Sx(D);
                    b.removeChild(E);
                    A += g.length - 1
                }
            }
            else {
                a: if (h = r = m = void 0, g = E, g.nodeType !== Node.ELEMENT_NODE || (null === (h = g.classList) || void 0 === h ? 0 : h.contains("google-adfil-skip"))) g = !1;
                    else switch (null === (m = null === (r = g.tagName) || void 0 === r ? void 0 : r.toUpperCase) || void 0 === m ? void 0 : m.call(r)) {
                        case "A":
                        case "IFRAME":
                        case "AUDIO":
                        case "BUTTON":
                        case "CANVAS":
                        case "CITE":
                        case "CODE":
                        case "EMBED":
                        case "FOOTER":
                        case "FORM":
                        case "H1":
                        case "H2":
                        case "H3":
                        case "H4":
                        case "H5":
                        case "H6":
                        case "KBD":
                        case "LABEL":
                        case "OBJECT":
                        case "PRE":
                        case "SAMP":
                        case "SCRIPT":
                        case "SELECT":
                        case "SUB":
                        case "SUPER":
                        case "SVG":
                        case "TEXTAREA":
                        case "TIME":
                        case "VAR":
                        case "VIDEO":
                        case null:
                            g = !1;
                            break a;
                        default:
                            n = k = l = h = r = m = void 0, q = g, g = !((null === (l = null === (k = (n = q.className).toUpperCase) || void 0 === k ? void 0 : k.call(n)) || void 0 === l ? 0 : l.includes("CRUMB")) || (null === (m = null === (r = (h = q.id).toUpperCase) || void 0 === r ? void 0 : r.call(h)) || void 0 === m ? 0 : m.includes("CRUMB")) || q.innerText.includes("\u00bb"))
                    }
                if (g && !Mx(a, E, c, d, e, f)) return !1
            }
        }
        return !0
    }

    function Sx(a) {
        if (a.nodeType === Node.ELEMENT_NODE) {
            if ("A" === a.tagName) {
                var b = Fx(Dx(getComputedStyle(a.parentElement).color)),
                    c = Fx(Dx(getComputedStyle(a).color));
                var d = Ex(a);
                if (d = b && c && d ? ux(c, d) < Math.min(ux(b, d), 4.5) ? b : null : b) {
                    b = d[0];
                    c = d[1];
                    d = d[2];
                    b = Number(b);
                    c = Number(c);
                    d = Number(d);
                    if (b != (b & 255) || c != (c & 255) || d != (d & 255)) throw Error('"(' + b + "," + c + "," + d + '") is not a valid RGB color');
                    c = b << 16 | c << 8 | d;
                    b = 16 > b ? "#" + (16777216 | c).toString(16).substr(1) : "#" + c.toString(16);
                    L(a, {
                        color: b
                    })
                }
            }
            for (b = 0; b < a.childElementCount; b++) Sx(a.children[b])
        }
    }

    function Px(a) {
        return "" === a || !!a.match(Hx) || cb(Ix, a)
    }

    function Rx(a, b, c, d) {
        const e = a.document.createElement("SPAN");
        Tx(e);
        e.appendChild(a.document.createTextNode(d));
        const f = a.document.createElement("A");
        Ux(f);
        L(f, {
            "text-decoration": "none"
        });
        de(f);
        f.className = "google-adfil";
        f.appendChild(Vx(a));
        f.appendChild(a.document.createTextNode("\u00a0"));
        f.appendChild(e);
        const g = a.performance.now();
        f.addEventListener("click", h => {
            var l = a.performance.now();
            l = {
                wp: b.l,
                c: b.C,
                e: kn(em),
                m: d,
                q: c,
                v: Math.round(l - g)
            };
            S("adfil-clk", l, 1);
            l = new rs(a, Math.round(.75 * a.innerHeight -
                40), Math.round(.95 * a.innerHeight - 40));
            l.init();
            qs(l, l.D - l.I);
            var k = b.j;
            var m = kn(dm);
            var n = Math.max(Math.floor((a.innerWidth - 150 * Math.floor(a.innerWidth / 150)) / 2), 5),
                q = b.A ? "on" : "",
                r = H(k, 3),
                v = `${kn(em)}`,
                x = H(k, 7);
            k = H(k, 6);
            var F = b.l;
            m = Pr('<link href="https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700" rel="stylesheet"><div style="font-family: Roboto, sans-serif;"><div style="border: 0 solid #eee; border-bottom-width: 1px; color: #3c4043; font-size: 13px; line-height: 20px; padding: 0 15px 13px; text-align: center">' +
                Or(r) + '\u00a0<a href="https://support.google.com/adsense/answer/11188578" target="_blank" style="color: #1967d2; text-decoration: none; white-space: nowrap">' + Or(k) + '</a></div><div style="border-bottom: 1px solid #eee; color: #202124; font-family: \'Google Sans\'; font-size: 15px; line-height: 20px; overflow: hidden; padding: 15px; text-align: center; text-overflow: ellipsis; white-space: nowrap"><span style="bottom: -2px; color: #1967d2; font-family: \'Google Material Icons\'; padding-right: 5px; position: relative">shoppingmode</span><span style="color:#80868b"> ' +
                Or("Shopping results for ") + "</span>" + Or(c) + '</div><div id="adfil-csa" style="margin:5px ' + Tr(as(n)) + "px\"></div><script>(function(g,o){g[o]=g[o]||function(){(g[o]['q']=g[o]['q']||[]).push(arguments)},g[o]['t']=1*new Date})(window,'_googCsa');const pageOptions = {'pubId': 'vert-pla-adfiliates-srp', 'styleId': '1138882718', 'disableCarousel': true, 'query': " + Xr(Yr(c)) + ", 'hl': " + Xr(Yr(x)) + ", 'personalizedAds': 'false', 'fexp': " + Xr(Yr(v)) + ", 'adfiliateWp': " + Xr(Yr(F)) + ", 'adtest': " + Xr(Yr(q)) + "}; const adBlock = {'container': 'adfil-csa', 'linkTarget': '_blank', 'number': " +
                Xr(Yr(m)) + ", 'width': document.body.offsetWidth - 30}; _googCsa('plas', pageOptions, adBlock);\x3c/script><script async=\"async\" src=\"https://www.google.com/adsense/search/ads.js\">\x3c/script></div>");
            m = zd("body", {
                style: jd({
                    margin: "0"
                })
            }, Lr(m));
            n = a.document.createElement("IFRAME");
            L(n, {
                border: "0",
                height: "100%",
                width: "100%"
            });
            for (n.srcdoc = vd(m); l.l.firstChild;) l.l.removeChild(l.l.firstChild);
            l.l.appendChild(n);
            h.preventDefault();
            return !1
        });
        return f
    }

    function Tx(a) {
        Ux(a);
        L(a, {
            "text-decoration": "underline"
        });
        L(a, {
            "text-decoration-style": "dotted"
        });
        L(a, {
            "-webkit-text-decoration-line": "underline",
            "-webkit-text-decoration-style": "dotted"
        })
    }

    function Vx(a) {
        const b = a.document.createElement("SPAN");
        b.appendChild(a.document.createTextNode("shoppingmode"));
        Ux(b);
        L(b, {
            "font-style": "normal",
            "font-weight": "normal",
            "text-decoration": "none"
        });
        L(b, {
            bottom: "-1px",
            "font-family": '"Google Material Icons"',
            "font-size": "90%",
            position: "relative"
        });
        return b
    }

    function Ux(a) {
        L(a, {
            border: "0",
            "box-shadow": "none",
            display: "inline",
            "float": "none",
            margin: "0",
            outline: "0",
            padding: "0"
        })
    }

    function Qx(a) {
        a = a.trim();
        return "" === a ? 0 : a.split(/\s+/).length
    };
    var Wx = class {
        constructor() {
            this.j = 0;
            this.l = new Set;
            this.A = 0;
            this.B = this.C = null
        }
    };

    function Xx(a) {
        return (a = a.match(/^[a-z]{2,3}/i)) ? a[0].toLowerCase() : ""
    }

    function Yx(a) {
        return new Set(a.map(Xx).filter(b => b.length))
    };
    var $x = class extends w {
            constructor(a) {
                super(a, -1, Zx)
            }
        },
        Ox = class extends w {
            constructor(a) {
                super(a)
            }
        },
        Nx = class extends w {
            constructor(a) {
                super(a, -1, ay)
            }
        },
        Zx = [2],
        ay = [2];

    function by(a, b, c, d) {
        if (!Xw(Uw(), 29, !1)) {
            Zw(Uw(), 29, !0);
            var e = cy(a) || dy(c);
            e && Bi(898, () => void ey(a, b, e, d), f => {
                f.e = `${kn(em)}`
            })
        }
    }

    function ey(a, b, c, d) {
        const e = () => {
                a: {
                    try {
                        var g = a.document.body
                    } catch (A) {
                        break a
                    }
                    if (a.performance && g && g.classList && void 0 !== g.classList.contains) {
                        var h = a.performance.now(),
                            l = kn(im),
                            k = l ? h + l : Infinity;
                        if (!X(hm)) {
                            l = a.document;
                            var m = l.createElement("LINK"),
                                n = N `https://fonts.googleapis.com/css2?family=Google+Material+Icons:wght@400;500;700`;
                            if (n instanceof Mc || n instanceof Od) n = n instanceof Od ? Rd(n).toString() : Pc(n).toString(), m.href = n;
                            else {
                                if (-1 === je.indexOf("stylesheet")) throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');
                                m.href = be(n)
                            }
                            m.rel = "stylesheet";
                            l.head.appendChild(m)
                        }
                        b.hasOwnProperty("adfcb") || (b.adfcb = Vf() ? null : Math.floor(20 * Qf()));
                        m = b.adfcb;
                        if (null != m) {
                            l = new Wx;
                            k = new Gx(d, c, m, k, "on" === b.google_adtest);
                            g = Qx(g.innerText);
                            l.A = g;
                            n = Xx(H(k.j, 7));
                            var q = Xx(a.document.documentElement.lang);
                            if ("" !== q) var r = new Set([q]);
                            else {
                                q = a.location;
                                var v = q.host.match(/^[a-z]{2}\./i);
                                v = v ? [v[0]] : [];
                                for (x of q.pathname.split("/")) 2 === x.length && v.push(x);
                                var x = Yx(v);
                                x.size || (q = a.navigator, x = Yx((null === (r = q.languages) || void 0 === r ?
                                    0 : r.length) ? q.languages : [q.language]));
                                r = x
                            }
                            l.C = n;
                            l.B = new Set(r);
                            r = g < kn(fm) ? "sw" : a.document.querySelector('script[src*="www.google.com/adsense/search/ads.js"]') ? "si" : r.has(n) ? Mx(a, a.document.body, k, cb(Kx, H(k.j, 7)) ? 1 : 0, new Lx, l) ? "a" : "p" : "sl";
                            h = a.performance.now() - h;
                            !X(hm) && 0 < l.j && (x = a.document, k = x.createElement("SCRIPT"), k.setAttribute("async", "async"), me(k, N `https://www.google.com/adsense/search/ads.js`), x.body.appendChild(k));
                            var F;
                            m = {
                                wp: d,
                                c: m,
                                e: kn(em),
                                ld: Array.from(null !== (F = l.B) && void 0 !== F ? F : []).sort().join(","),
                                lx: l.C || "",
                                n: l.j,
                                o: r,
                                p: G(c, Nx, 2).length,
                                t: l.l.size,
                                w: l.A,
                                x: Math.round(h)
                            };
                            S("adfil-imp", m, 1)
                        }
                    }
                }
            },
            f = kn(jm);
        f ? fy(a, e, f) : e()
    }

    function cy(a) {
        var b, c;
        try {
            const d = null === (c = null === (b = a.location) || void 0 === b ? void 0 : b.hash) || void 0 === c ? void 0 : c.match(/\bgoog_cpmi=([^&]*)/);
            if (!d) return null;
            const e = decodeURIComponent(d[1]);
            return new $x(JSON.parse(e))
        } catch (d) {
            return null
        }
    }

    function dy(a) {
        return X(vm) ? C(a, $x, 11) : null
    }

    function fy(a, b, c) {
        a.requestIdleCallback ? a.requestIdleCallback(b, {
            timeout: c
        }) : a.setTimeout(b, 1)
    };
    var gy = class extends w {
        constructor(a) {
            super(a)
        }
    };
    var iy = class extends w {
            constructor(a) {
                super(a, -1, hy)
            }
        },
        hy = [1];
    var ky = class extends w {
            constructor(a) {
                super(a, -1, jy)
            }
        },
        jy = [19],
        ly = [13, 14];
    var my = class {
        constructor(a) {
            this.K = a.K;
            this.pubWin = a.pubWin;
            this.F = a.F;
            this.V = a.V;
            this.aa = a.aa;
            this.Ia = a.Ia;
            this.Y = a.Y;
            this.ca = a.ca;
            this.B = -1;
            this.j = 0;
            this.A = this.H = null;
            this.G = this.D = 0;
            this.l = [];
            this.Va = this.C = ""
        }
    };
    var oy = a => {
            const b = a.F;
            null == b.google_ad_output && (b.google_ad_output = "html");
            if (null != b.google_ad_client) {
                var c;
                (c = String(b.google_ad_client)) ? (c = c.toLowerCase(), "ca-" != c.substring(0, 3) && (c = "ca-" + c)) : c = "";
                b.google_ad_client = c
            }
            null != b.google_ad_slot && (b.google_ad_slot = String(b.google_ad_slot));
            if (null == b.google_flash_version) {
                c = window;
                try {
                    var d = ph(c)
                } catch (e) {
                    d = "0"
                }
                b.google_flash_version = d
            }
            b.google_webgl_support = !!Te.WebGLRenderingContext;
            b.google_ad_section = b.google_ad_section || b.google_ad_region ||
                "";
            b.google_country = b.google_country || b.google_gl || "";
            d = (new Date).getTime();
            Array.isArray(b.google_color_bg) && (b.google_color_bg = ny(a, b.google_color_bg, d));
            Array.isArray(b.google_color_text) && (b.google_color_text = ny(a, b.google_color_text, d));
            Array.isArray(b.google_color_link) && (b.google_color_link = ny(a, b.google_color_link, d));
            Array.isArray(b.google_color_url) && (b.google_color_url = ny(a, b.google_color_url, d));
            Array.isArray(b.google_color_border) && (b.google_color_border = ny(a, b.google_color_border, d));
            Array.isArray(b.google_color_line) && (b.google_color_line = ny(a, b.google_color_line, d))
        },
        ny = (a, b, c) => {
            a.j |= 2;
            return b[c % b.length]
        };
    var py = (a, b) => {
        var c = Ai,
            d;
        var e;
        d = (e = (e = Dg()) && (d = e.initialLayoutRect) && "number" === typeof d.top && "number" === typeof d.left && "number" === typeof d.width && "number" === typeof d.height ? new zg(d.left, d.top, d.width, d.height) : null) ? new cf(e.left, e.top) : (d = Eg()) && ka(d.rootBounds) ? new cf(d.rootBounds.left + d.boundingClientRect.left, d.rootBounds.top + d.boundingClientRect.top) : null;
        if (d) return d;
        try {
            var f = new cf(0, 0),
                g = uf(pf(b));
            if (kb(g, "parent")) {
                do {
                    if (g == a) var h = Wg(b);
                    else {
                        var l = Vg(b);
                        h = new cf(l.left, l.top)
                    }
                    d = h;
                    f.x += d.x;
                    f.y += d.y
                } while (g && g != a && g != g.parent && (b = g.frameElement) && (g = g.parent))
            }
            return f
        } catch (k) {
            return c.wa(888, k), new cf(-12245933, -12245933)
        }
    };
    var qy = {
            Jf: "google_ads_preview",
            og: "google_mc_lab",
            Eg: "google_anchor_debug",
            Dg: "google_bottom_anchor_debug",
            INTERSTITIAL: "google_ia_debug",
            Zg: "google_scr_debug",
            ah: "google_ia_debug_allow_onclick",
            yh: "googleads",
            od: "google_pedestal_debug",
            Oh: "google_responsive_slot_preview",
            Nh: "google_responsive_dummy_ad"
        },
        ry = {
            google_bottom_anchor_debug: 1,
            google_anchor_debug: 2,
            google_ia_debug: 8,
            google_scr_debug: 9,
            googleads: 2,
            google_pedestal_debug: 30
        };
    var ty = (a, b) => {
            if (!a) return !1;
            a = a.hash;
            if (!a || !a.indexOf) return !1;
            if (-1 != a.indexOf(b)) return !0;
            b = sy(b);
            return "go" != b && -1 != a.indexOf(b) ? !0 : !1
        },
        sy = a => {
            let b = "";
            Rf(a.split("_"), c => {
                b += c.substr(0, 2)
            });
            return b
        },
        uy = () => {
            var a = t.location;
            let b = !1;
            Rf(qy, c => {
                ty(a, c) && (b = !0)
            });
            return b
        },
        vy = (a, b) => {
            switch (a) {
                case 1:
                    return ty(b, "google_ia_debug");
                case 2:
                    return ty(b, "google_bottom_anchor_debug");
                case 3:
                    return ty(b, "google_anchor_debug") || ty(b, "googleads");
                case 4:
                    return ty(b, "google_scr_debug")
            }
            return !1
        };

    function wy(a, b) {
        b && !a.j && (a.j = b.split(":").find(c => 0 === c.indexOf("ID=")) || null)
    }
    var xy = class {
            constructor() {
                this.j = null;
                this.l = {
                    [di]: {},
                    [ei]: {},
                    [fi]: {}
                };
                const a = b => this.j ? Tf(`${b} + ${this.j}`) % 1E3 : void 0;
                this.l[ei] = {
                    [9]: (...b) => a(b[0])
                }
            }
        },
        yy;
    let zy = void 0;

    function Ay() {
        $h(zy, Zh);
        return zy
    };

    function By(a) {
        try {
            const b = a.getItem("google_adsense_settings");
            if (!b) return {};
            const c = JSON.parse(b);
            return c !== Object(c) ? {} : yc(c, (d, e) => Object.prototype.hasOwnProperty.call(c, e) && "string" === typeof e && Array.isArray(d))
        } catch (b) {
            return {}
        }
    }

    function Cy(a) {
        X(Tl) && S("abg_adsensesettings_lserr", {
            s: a,
            g: X(Ul),
            c: Ay(),
            r: .01
        }, .01)
    };
    var Dy = (a = t) => a.ggeac || (a.ggeac = {});
    class Ey {
        constructor() {
            this.j = () => {}
        }
    };
    var Gy = (a = Dy()) => {
            yi(mi(zi), a);
            Fy(a);
            mi(Ey).j = xi(wi, a);
            mi(jn).A()
        },
        Fy = a => {
            const b = mi(jn);
            b.B = (c, d) => xi(si, a, () => !1)(c, d, 1);
            b.C = (c, d) => xi(ti, a, () => 0)(c, d, 1);
            b.j = (c, d) => xi(ui, a, () => "")(c, d, 1);
            b.l = (c, d) => {
                xi(vi, a, () => [])(c, d, 1)
            };
            b.A = () => {
                xi(pi, a)(1)
            }
        };
    var Hy = a => {
        const b = mi(zi).l();
        a = rw(a);
        return b.concat(a).join(",")
    };

    function Iy(a, b, c) {
        return c ? Jn(b, c, a.j) : null
    }

    function Jy(a, b, c, d) {
        if (d) {
            var e = {
                Rc: y(c, 2) - Date.now() / 1E3,
                path: y(c, 3),
                domain: y(c, 4),
                He: !1
            };
            a = a.j;
            B(d, 5) && In(a) && (new Gn(a.document)).set(b, y(c, 1), e)
        }
    }

    function Ky(a, b, c) {
        if (c && Jn(b, c, a.j))
            for (const e of ug(a.j.location.hostname)) {
                var d = a.j;
                B(c, 5) && In(d) && (new Gn(d.document)).remove(b, "/", e)
            }
    }
    var Ly = class {
        constructor(a) {
            this.j = a;
            this.l = 0
        }
    };

    function My(a, b, c) {
        return Ci(629, d => {
            delete a._gfp_s_;
            if (!d) throw Error("Invalid JSONP response");
            d = d._cookies_;
            if (!d) return Promise.resolve();
            if (0 === d.length) throw Error("Invalid JSONP response");
            for (const f of d) {
                var e = f._domain_;
                const g = f._value_,
                    h = f._expires_,
                    l = f._path_;
                d = f._version_ || 1;
                if ("string" !== typeof e || "string" !== typeof g || "number" !== typeof h || "string" !== typeof l || "number" !== typeof d || !g) throw Error("Invalid JSONP response");
                e = Qe(Pe(Oe(Ne(new Re, g), h), l), e);
                switch (d) {
                    case 1:
                        Jy(c, "__gads",
                            e, b);
                        break;
                    case 2:
                        X(Hm) && "1" !== Iy(c, "__gpi_opt_out", b) && Jy(c, "__gpi", e, b)
                }
            }
            return Promise.resolve()
        })
    }

    function Ny(a, b, c) {
        let d = void 0;
        if (0 === a.l) {
            if (Iy(a, "__gads", b)) var e = !0;
            else if (e = a.j, B(b, 5) && In(e) && (new Gn(e.document)).set("GoogleAdServingTest", "Good", void 0), e = "Good" === Jn("GoogleAdServingTest", b, a.j)) {
                var f = a.j;
                B(b, 5) && In(f) && (new Gn(f.document)).remove("GoogleAdServingTest", void 0, void 0)
            }
            a.l = e ? 2 : 1
        }
        2 === a.l && (d = My(c, b, a));
        c._gfp_p_ = !0;
        return d
    }

    function Oy(a, b, c, d) {
        d = {
            domain: c.location.hostname,
            callback: "_gfp_s_",
            client: d
        };
        var e = Iy(b, "__gads", a);
        e && (d.cookie = e);
        X(Hm) && ((e = Iy(b, "__gpi", a)) && !e.includes("&") && (d.gpi_cookie = e), d.gpid_exp = "1");
        const f = Nc(Qc(tc(uc("https://partner.googleadservices.com/gampad/cookie.js"))), d),
            g = Ny(b, a, c);
        g ? new Promise(h => {
            c._gfp_s_ = l => {
                g(l).then(h)
            };
            Lf(c.document, f)
        }) : Promise.resolve()
    }
    var Py = (a, b, c) => {
        "_gfp_p_" in b || (b._gfp_p_ = !1, "_gfp_a_" in b || (b._gfp_a_ = !0));
        const d = new Ly(b);
        c = b.google_ad_client || c;
        var e = b._gfp_a_;
        if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_a_"}: ${e}`);
        if (e) {
            e = b._gfp_p_;
            if ("boolean" !== typeof e) throw Error(`Illegal value of ${"_gfp_p_"}: ${e}`);
            e ? Promise.resolve() : Oy(a, d, b, c)
        } else Promise.resolve();
        a = Iy(d, "__gads", a) || "";
        yy || (yy = new xy);
        b = yy;
        wy(b, a);
        a = b.l;
        mi(Ey).j(a);
        mi(zi).j(20);
        mi(zi).j(17)
    };
    var Qy = (a, b) => {
        var c = a.innerWidth > kj ? 650 : 0,
            d = Eh;
        let e = 0;
        try {
            e |= a != a.top ? 512 : 0;
            const f = Math.min(a.screen.width || 0, a.screen.height || 0);
            e |= f ? 320 > f ? 8192 : 0 : 2048;
            e |= a.navigator && Ns(a.navigator.userAgent) ? 1048576 : 0;
            e = c ? e | (a.innerHeight >= c ? 0 : 1024) : e | (a.innerHeight >= a.innerWidth ? 0 : 8);
            e |= lj(a, 3E3);
            e |= mj(a)
        } catch (f) {
            e |= 32
        }
        switch (b) {
            case 2:
                Rs(a, d) && (e |= 16777216);
                break;
            case 1:
                Ss(a, d) && (e |= 16777216)
        }
        return e
    };
    var Ry = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= lj(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };
    var Sy = a => {
        let b = 0;
        try {
            b |= a != a.top ? 512 : 0, b |= lj(a, 1E4)
        } catch (c) {
            b |= 32
        }
        return b
    };

    function Ty(a, b = null) {
        var c;
        if (!X(Wm)) return 32;
        let d = a != a.top ? 512 : 0;
        Ns(null === (c = a.navigator) || void 0 === c ? void 0 : c.userAgent) && (d |= 1048576);
        const e = a.innerWidth;
        1200 > e && (d |= 65536);
        const f = a.innerHeight;
        650 > f && (d |= -2147483648);
        b && 0 === d && (Uy({
            K: a,
            gd: 1,
            position: 3 === b ? "left" : "right",
            M: e,
            R: f,
            ua: new Set,
            minWidth: 120,
            minHeight: 500
        }) || (d |= 16));
        return d
    }

    function Vy(a) {
        if (0 !== Ty(a)) return "";
        const b = [],
            c = a.innerWidth,
            d = a.innerHeight;
        for (const e of ["left", "right"]) {
            const f = Uy({
                K: a,
                gd: 1,
                position: e,
                M: c,
                R: d,
                ua: new Set,
                minWidth: 120,
                minHeight: 500
            });
            f && b.push(`${f.width}x${f.height}_${String(e).charAt(0)}`)
        }
        return b.join("|")
    }

    function Wy(a, b) {
        return null !== Df(a, c => c.nodeType === Node.ELEMENT_NODE && b.has(c))
    }

    function Xy(a, b) {
        return null !== Df(a, c => c.nodeType === Node.ELEMENT_NODE && "fixed" === b.getComputedStyle(c, null).position)
    }

    function Yy(a) {
        const b = [];
        for (const c of a.document.querySelectorAll("*")) {
            const d = a.getComputedStyle(c, null);
            "fixed" === d.position && "none" !== d.display && "hidden" !== d.visibility && b.push(c)
        }
        return b
    }

    function Zy(a) {
        return Math.round(10 * Math.round(a / 10))
    }

    function $y(a) {
        return `${a.position}-${Zy(a.M)}x${Zy(a.R)}-${Zy(a.scrollY+a.La)}Y`
    }

    function az(a) {
        return `f-${$y({position:a.position,La:a.La,scrollY:0,M:a.M,R:a.R})}`
    }

    function bz(a, b) {
        a = Math.min(null !== a && void 0 !== a ? a : Infinity, null !== b && void 0 !== b ? b : Infinity);
        return Infinity !== a ? a : 0
    }

    function cz(a, b, c) {
        const d = hj(c.K).sideRailProcessedFixedElements;
        if (!d.has(a)) {
            var e = a.getBoundingClientRect();
            if (e) {
                var f = Math.max(e.top, 0),
                    g = Math.min(e.bottom, c.R),
                    h = Math.max(e.left, 0);
                e = Math.min(e.right, c.M);
                for (var l = .3 * c.M; f < g; f += 10) {
                    if (0 < e && h < l) {
                        var k = az({
                            position: "left",
                            La: f,
                            M: c.M,
                            R: c.R
                        });
                        b.set(k, bz(b.get(k), h))
                    }
                    if (h < c.M && e > c.M - l) {
                        k = az({
                            position: "right",
                            La: f,
                            M: c.M,
                            R: c.R
                        });
                        const m = c.M - e;
                        b.set(k, bz(b.get(k), m))
                    }
                }
                d.add(a)
            }
        }
    }

    function Uy(a) {
        var b = hj(a.K).sideRailAvailableSpace,
            c = {
                K: a.K,
                M: a.M,
                R: a.R,
                ua: a.ua
            },
            d = `f-${Zy(c.M)}x${Zy(c.R)}`;
        if (!b.has(d)) {
            b.set(d, 0);
            d = new Set([...Array.from(c.K.document.querySelectorAll("[data-anchor-status]")), ...c.ua]);
            for (var e of Yy(c.K)) Wy(e, d) || cz(e, b, c)
        }
        c = [];
        d = .9 * a.R;
        var f = sj(a.K),
            g = e = (a.R - d) / 2,
            h = d / 11;
        for (var l = 0; 12 > l; l++) {
            var k = c,
                m = k.push;
            a: {
                var n = g;
                var q = a.position,
                    r = b,
                    v = {
                        K: a.K,
                        M: a.M,
                        R: a.R,
                        ua: a.ua
                    };
                const F = az({
                        position: q,
                        La: n,
                        M: v.M,
                        R: v.R
                    }),
                    A = $y({
                        position: q,
                        La: n,
                        scrollY: f,
                        M: v.M,
                        R: v.R
                    });
                if (r.has(A)) {
                    n = bz(r.get(F), r.get(A));
                    break a
                }
                const E = "left" === q ? 20 : v.M - 20;
                let D = E;q = .3 * v.M / 7 * ("left" === q ? 1 : -1);
                for (let I = 0; 8 > I; I++) {
                    const J = Ws(v.K.document, Math.round(D), Math.round(n));
                    var x = Wy(J, v.ua);
                    const Z = Xy(J, v.K);
                    if (!x && Z) {
                        cz(J, r, v);
                        r.delete(A);
                        break
                    }
                    x || (x = J.offsetHeight >= .25 * v.R, x = J.offsetWidth >= .9 * v.M && x);
                    if (x) r.set(A, Math.round(Math.abs(D - E) + 20));
                    else if (D !== E) D -= q, q /= 2;
                    else {
                        r.set(A, 0);
                        break
                    }
                    D += q
                }
                n = bz(r.get(F), r.get(A))
            }
            m.call(k, n);
            g += h
        }
        b = a.gd;
        f = a.position;
        d = Math.round(d / 12);
        e = Math.round(e);
        g = a.minWidth;
        a = a.minHeight;
        m = [];
        h = Array(c.length).fill(0);
        for (k = 0; k < c.length; k++) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[k];) m.pop();
            h[k] = 0 === m.length ? 0 : m[m.length - 1] + 1;
            m.push(k)
        }
        m = [];
        l = c.length - 1;
        k = Array(c.length).fill(0);
        for (n = l; 0 <= n; n--) {
            for (; 0 !== m.length && c[m[m.length - 1]] >= c[n];) m.pop();
            k[n] = 0 === m.length ? l : m[m.length - 1] - 1;
            m.push(n)
        }
        m = null;
        for (l = 0; l < c.length; l++)
            if (n = {
                    position: f,
                    width: Math.round(c[l]),
                    height: Math.round((k[l] - h[l] + 1) * d),
                    xi: e + h[l] * d
                }, r = n.width >= g && n.height >= a, 0 === b && r) {
                m = n;
                break
            } else 1 ===
                b && r && (!m || n.width * n.height > m.width * m.height) && (m = n);
        return m
    };
    const dz = {
        [27]: 512,
        [26]: 128
    };
    var ez = (a, b, c, d) => {
            switch (c) {
                case 1:
                case 2:
                    return 0 === Qy(a, c);
                case 3:
                case 4:
                    return 0 === Ty(a, c);
                case 8:
                    return b = "on" === b.google_adtest || ty(a.location, "google_ia_debug") ? -1 : 3600, 0 == (Nn(a) | On(a, b, d));
                case 9:
                    return b = !("on" === b.google_adtest || ty(a.location, "google_scr_debug")), !Tt(a, b, d);
                case 30:
                    return 0 == vv(a);
                case 26:
                    return 0 == Sy(a);
                case 27:
                    return 0 === Ry(a);
                case 40:
                    return !0;
                default:
                    return !1
            }
        },
        fz = (a, b, c, d) => {
            switch (c) {
                case 0:
                case 40:
                case 10:
                case 11:
                    return 0;
                case 1:
                case 2:
                    return Qy(a, c);
                case 3:
                case 4:
                    return Ty(a,
                        c);
                case 8:
                    return b = "on" === b.google_adtest || ty(a.location, "google_ia_debug") ? -1 : 3600, Nn(a) | On(a, b, d);
                case 9:
                    return Tt(a, !("on" === b.google_adtest || ty(a.location, "google_scr_debug")), d);
                case 16:
                    return jo(b, a) ? 0 : 8388608;
                case 30:
                    return vv(a);
                case 26:
                    return Sy(a);
                case 27:
                    return Ry(a);
                default:
                    return 32
            }
        },
        gz = (a, b, c) => {
            const d = b.google_reactive_ad_format;
            if (!zc(d)) return !1;
            a = Kf(a);
            if (!a || !ez(a, b, d, c)) return !1;
            b = hj(a);
            if (qj(b, d)) return !1;
            b.adCount[d] || (b.adCount[d] = 0);
            b.adCount[d]++;
            return !0
        },
        iz = a => {
            const b =
                a.google_reactive_ad_format;
            return !a.google_reactive_ads_config && hz(a) && 16 !== b && 10 !== b && 11 !== b && 40 !== b
        },
        jz = a => {
            if (!a.hash) return null;
            let b = null;
            Rf(qy, c => {
                !b && ty(a, c) && (b = ry[c])
            });
            return b
        },
        lz = (a, b) => {
            const c = hj(a).tagSpecificState[1] || null;
            null != c && null == c.debugCard && Rf(Ot, d => {
                !c.debugCardRequested && "number" === typeof d && vy(d, a.location) && (c.debugCardRequested = !0, kz(a, b, e => {
                    c.debugCard = e.createDebugCard(d, a)
                }))
            })
        },
        nz = (a, b, c) => {
            if (!b) return null;
            const d = hj(b);
            let e = 0;
            Rf(Ac, f => {
                const g = dz[f];
                g && 0 ===
                    mz(a, b, f, c) && (e |= g)
            });
            d.wasPlaTagProcessed && (e |= 256);
            a.google_reactive_tag_first && (e |= 1024);
            return e ? "" + e : null
        },
        oz = (a, b, c) => {
            const d = [];
            Rf(Ac, e => {
                const f = mz(b, a, e, c);
                0 !== f && d.push(e + ":" + f)
            });
            return d.join(",") || null
        },
        pz = a => {
            const b = [],
                c = {};
            Rf(a, (d, e) => {
                if ((e = fj[e]) && !c[e]) {
                    c[e] = !0;
                    if (d) d = 1;
                    else if (!1 === d) d = 2;
                    else return;
                    b.push(e + ":" + d)
                }
            });
            return b.join(",")
        },
        qz = a => {
            a = a.overlays;
            if (!a) return "";
            a = a.bottom;
            return "boolean" === typeof a ? a ? "1" : "0" : ""
        },
        mz = (a, b, c, d) => {
            if (!b) return 256;
            let e = 0;
            const f = hj(b),
                g = qj(f, c);
            if (a.google_reactive_ad_format == c || g) e |= 64;
            let h = !1;
            Rf(f.reactiveTypeDisabledByPublisher, (l, k) => {
                String(c) === String(k) && (h = !0)
            });
            h && jz(b.location) !== c && (e |= 128);
            return e | fz(b, a, c, d)
        },
        rz = (a, b) => {
            if (a) {
                var c = hj(a),
                    d = {};
                Rf(b, (e, f) => {
                    (f = fj[f]) && (!1 === e || /^false$/i.test(e)) && (d[f] = !0)
                });
                Rf(Ac, e => {
                    d[gj[e]] && (c.reactiveTypeDisabledByPublisher[e] = !0)
                })
            }
        },
        sz = (a, b, c) => {
            b = Ci(b, c);
            return fr(1, Q(), Nc(ce(a), mi(jn).j($l.j, $l.defaultValue) ? {
                bust: mi(jn).j($l.j, $l.defaultValue)
            } : {})).then(b)
        },
        kz = (a, b, c) => {
            c = Ci(212, c);
            fr(3, a, ce(b)).then(c)
        };
    const tz = a => {
        a.adsbygoogle || (a.adsbygoogle = [], Lf(a.document, ce(N `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js`)))
    };
    var uz = (a, b) => {
            K(a, "load", () => {
                tz(a);
                a.adsbygoogle.push(b)
            })
        },
        vz = a => {
            a = a.google_reactive_ad_format;
            return zc(a) ? "" + a : null
        },
        hz = a => !!vz(a) || null != a.google_pgb_reactive,
        wz = a => {
            a = vz(a);
            return 26 == a || 27 == a || 30 == a || 16 == a || 40 == a
        };
    var xz = a => "number" === typeof a.google_reactive_sra_index,
        Cz = (a, b, c) => {
            const d = b.K || b.pubWin,
                e = b.F;
            e.google_reactive_plat = oz(d, e, c);
            var f = pz(a);
            f && (e.google_reactive_plaf = f);
            (f = qz(a)) && (e.google_reactive_fba = f);
            (f = Vy(d)) && (e.google_plas = f);
            yz(a, e);
            f = jz(b.pubWin.location);
            zz(a, f, e);
            f ? (e.fra = f, e.google_pgb_reactive = 6) : e.google_pgb_reactive = 5;
            Fg() || qn(b.pubWin.top);
            f = Hi(b.pubWin, "rsrai", Ci(429, (g, h) => Az(b, d, e.google_ad_client, a, g, h, c)), Ci(430, ua(vj, b.pubWin, 431, Eh)));
            b.l.push(f);
            hj(d).wasReactiveTagRequestSent = !0;
            Bz(b, a, c)
        };
    const Bz = (a, b, c) => {
        const d = a.F,
            e = ka(b.page_level_pubvars) ? b.page_level_pubvars : {};
        b = Hi(a.pubWin, "apcnf", Ci(353, (f, g) => {
            var h = a.pubWin,
                l = d.google_ad_client,
                k = ce(a.aa.Ic),
                m = ce(a.aa.hb);
            return lg(g.origin) ? Bx(h, l, e, f.config, c, k, null, m) : !1
        }), Ci(353, ua(vj, a.pubWin, 353, Eh)));
        a.l.push(b)
    };
    var Az = (a, b, c, d, e, f, g) => {
            if (!lg(f.origin)) return !1;
            f = e.data;
            if (!Array.isArray(f)) return !1;
            if (!sw(b, 1)) return !0;
            f && Ti(6, [f]);
            e = e.amaConfig;
            const h = [],
                l = [],
                k = hj(b);
            let m = null;
            for (let n = 0; n < f.length; n++) {
                if (!f[n]) continue;
                const q = f[n],
                    r = q.adFormat;
                k && q.enabledInAsfe && (k.reactiveTypeEnabledInAsfe[r] = !0);
                if (!q.noCreative) {
                    q.google_reactive_sra_index = n;
                    if (9 === r && e) {
                        q.pubVars = Object.assign(q.pubVars || {}, Dz(d, q));
                        const v = new Ut;
                        if (Rt(v, q)) {
                            m = v;
                            continue
                        }
                    }
                    h.push(q);
                    l.push(r)
                }
            }
            h.length && (S("rasra::pm", {
                rt: l.join(","),
                c
            }, .1), sz(a.aa.Zc, 522, n => {
                Ez(h, b, c, n, d, g)
            }));
            e && Bx(b, c, d, e, g, ce(a.aa.Ic), m);
            return !0
        },
        Dz = (a, b) => {
            const c = b.adFormat,
                d = b.adKey;
            delete b.adKey;
            const e = {};
            a = a.page_level_pubvars;
            ka(a) && Object.assign(e, a);
            e.google_ad_unit_key = d;
            e.google_reactive_sra_index = b.google_reactive_sra_index;
            30 === c && (e.google_reactive_ad_format = 30);
            e.google_pgb_reactive = e.google_pgb_reactive || 5;
            return b.pubVars = e
        },
        Ez = (a, b, c, d, e, f) => {
            const g = [];
            for (let h = 0; h < a.length; h++) {
                const l = a[h],
                    k = l.adFormat,
                    m = l.adKey,
                    n = d.configProcessorForAdFormat(k);
                k && n && m ? (l.pubVars = Dz(e, l), delete l.google_reactive_sra_index, g.push(k), Bi(466, () => n.verifyAndProcessConfig(b, l, f))) : S("rasra::ivc", {
                    af: k,
                    ak: m,
                    c
                }, .1)
            }
            S("rasra::pr", {
                rt: g.join(","),
                c
            }, .1)
        },
        yz = (a, b) => {
            const c = [];
            let d = !1;
            Rf(fj, (e, f) => {
                let g;
                if (a.hasOwnProperty(f)) {
                    const h = a[f];
                    ka(h) && h.google_ad_channel && (g = String(h.google_ad_channel))
                }
                f = fj[f] - 1;
                c[f] && "+" != c[f] || (c[f] = g ? g.replace(/,/g, "+") : "+", d = d || g)
            });
            d && (b.google_reactive_sra_channels = c.join(","))
        },
        zz = (a, b, c) => {
            const d = a.page_level_pubvars;
            !c.google_adtest &&
                ("on" == a.google_adtest || d && "on" == d.google_adtest || b) && (c.google_adtest = "on")
        };
    jb("script");
    var Fz = {
        "image-top": 0,
        "image-middle": 1,
        "image-side": 2,
        "text-only": 3,
        "in-article": 4
    };

    function Gz(a, b) {
        if (!jo(b, a)) return () => {};
        a = Hz(b, a);
        if (!a) return () => {};
        const c = bx();
        b = Cc(b);
        const d = {
            pc: a,
            F: b,
            offsetWidth: a.offsetWidth
        };
        c.push(d);
        return () => db(c, d)
    }

    function Hz(a, b) {
        a = b.document.getElementById(a.google_async_iframe_id);
        if (!a) return null;
        for (a = a.parentElement; a && !oo.test(a.className);) a = a.parentElement;
        return a
    }

    function Iz(a, b) {
        for (let g = 0; g < a.childNodes.length; g++) {
            const h = {},
                l = a.childNodes[g];
            var c = l.style,
                d = h,
                e = ["width", "height"];
            for (let k = 0; k < e.length; k++) {
                const m = "google_ad_" + e[k];
                if (!d.hasOwnProperty(m)) {
                    var f = $f(c[e[k]]);
                    f = null === f ? null : Math.round(f);
                    null != f && (d[m] = f)
                }
            }
            if (h.google_ad_width == b.google_ad_width && h.google_ad_height == b.google_ad_height) return l
        }
        return null
    }

    function Jz(a, b) {
        a.style.display = b ? "inline-block" : "none";
        const c = a.parentElement;
        b ? c.dataset.adStatus = a.dataset.adStatus : (a.dataset.adStatus = c.dataset.adStatus, delete c.dataset.adStatus)
    }

    function Kz(a, b) {
        const c = b.innerHeight >= b.innerWidth ? 1 : 2;
        if (a.j != c) {
            a.j = c;
            a = bx();
            for (const d of a)
                if (d.pc.offsetWidth != d.offsetWidth || d.F.google_full_width_responsive_allowed) d.offsetWidth = d.pc.offsetWidth, Bi(467, () => {
                    var e = d.pc,
                        f = d.F;
                    const g = Iz(e, f);
                    f.google_full_width_responsive_allowed && (e.style.marginLeft = f.gfwroml || "", e.style.marginRight = f.gfwromr || "", e.style.height = f.gfwroh ? f.gfwroh + "px" : "", e.style.width = f.gfwrow ? f.gfwrow + "px" : "", e.style.zIndex = f.gfwroz || "", delete f.google_full_width_responsive_allowed);
                    delete f.google_ad_format;
                    delete f.google_ad_width;
                    delete f.google_ad_height;
                    delete f.google_content_recommendation_ui_type;
                    delete f.google_content_recommendation_rows_num;
                    delete f.google_content_recommendation_columns_num;
                    Q().google_spfd(e, f, b);
                    const h = Iz(e, f);
                    !h && g && 1 == e.childNodes.length ? (Jz(g, !1), f.google_reactive_ad_format = 16, f.google_ad_section = "responsive_resize", e.dataset.adsbygoogleStatus = "reserved", e.className += " adsbygoogle-noablate", tz(b), b.adsbygoogle.push({
                            element: e,
                            params: f
                        })) : h && g ?
                        h != g && (Jz(g, !1), Jz(h, !0)) : S("auto_size_refresh", {
                            context: "showOrHideElm",
                            url: b.location.href,
                            nodes: e.childNodes.length
                        })
                })
        }
    }
    class Lz extends Dn {
        constructor() {
            super();
            this.j = null
        }
        init(a) {
            const b = Uw();
            if (!Xw(b, 27, !1)) {
                Zw(b, 27, !0);
                this.j = a.innerHeight >= a.innerWidth ? 1 : 2;
                var c = () => Kz(this, a);
                K(a, "resize", c);
                En(this, () => {
                    ye(a, "resize", c)
                })
            }
        }
    };
    var Mz = class {
        constructor(a, b, c) {
            this.B = a;
            this.A = b;
            this.j = c;
            this.l = null;
            this.C = this.D = 0
        }
        G() {
            10 <= ++this.D && t.clearInterval(this.l);
            var a = mo(this.B, this.A);
            a = no(this.B, this.A, a);
            const b = io(this.A, this.B);
            null != b && 0 === b.x || t.clearInterval(this.l);
            a && (this.C++, S("rspv:al", {
                aligns: this.C,
                attempt: this.D,
                client: this.j.google_ad_client,
                eoffs: null != b ? b.x : null,
                eids: Hy(this.j),
                slot: this.j.google_ad_slot,
                url: this.j.google_page_url
            }, .01))
        }
    };
    var Oz = a => {
            const b = {};
            b.dtd = Nz((new Date).getTime(), Ui);
            return eh(b, a)
        },
        Nz = (a, b, c = 1E5) => {
            a -= b;
            return a >= c ? "M" : 0 <= a ? a : "-M"
        };
    var Qz = (a, b, c) => {
        let d;
        const e = (null == (d = b.parentElement) ? 0 : d.classList.contains("adsbygoogle")) ? b.parentElement : b;
        c.addEventListener("load", () => Pz(e));
        return Hi(a, "adpnt", (f, g) => {
            var h;
            if (rj(g, c.contentWindow)) {
                f = uj(f).qid;
                try {
                    c.setAttribute("data-google-query-id", f);
                    var l;
                    null !== (h = a.googletag) && void 0 !== h ? h : a.googletag = {};
                    const k = null !== (l = a.googletag.queryIds) && void 0 !== l ? l : [];
                    k.push(f);
                    500 < k.length && k.shift();
                    a.googletag.queryIds = k
                } catch (k) {}
                e.dataset.adStatus && S("adsense_late_fill", {
                    status: e.dataset.adStatus
                });
                e.dataset.adStatus = "filled";
                h = !0
            } else h = !1;
            return h
        })
    };

    function Pz(a) {
        setTimeout(() => {
            "filled" !== a.dataset.adStatus && (a.dataset.adStatus = "unfilled")
        }, 1E3)
    };

    function Rz(a, b, c) {
        try {
            if (!lg(c.origin)) return
        } catch (f) {
            return
        }
        const d = b.msg_type;
        let e;
        "string" === typeof d && (e = a.wc[d]) && Wh(a.Aa, 168, () => {
            e.call(a, b, c)
        })
    }
    class Sz extends Dn {
        constructor(a) {
            var b = Ai,
                c = Eh;
            super();
            this.j = a;
            this.Aa = b;
            this.la = c;
            this.wc = {};
            this.Id = Xh(this.Aa, 168, (d, e) => void Rz(this, d, e));
            this.Rd = Xh(this.Aa, 169, (d, e) => vj(this.j, "ras::xsf", this.la, d, e));
            this.Oa = [];
            this.Z(this.wc);
            this.Oa.push(Gi(this.j, "sth", this.Id, this.Rd))
        }
        B() {
            for (const a of this.Oa) a();
            this.Oa.length = 0;
            super.B()
        }
    };
    class Tz extends Sz {
        constructor(a) {
            super(a);
            this.j = a
        }
    };
    var Uz = class extends Tz {
        constructor(a, b) {
            super(a);
            this.l = b;
            this.A = () => {};
            K(this.l, "load", this.A)
        }
        B() {
            this.l && ye(this.l, "load", this.A);
            super.B();
            this.l = null
        }
        Z(a) {
            a["adsense-labs"] = b => {
                if (b = uj(b).settings) try {
                    var c = new Me(JSON.parse(b));
                    if (Wb(c, 1)) {
                        var d = this.j,
                            e = y(c, 1) || "";
                        if (X(Ul) ? null != gx({
                                win: d,
                                Db: Ay()
                            }).j : 1) {
                            if (X(Ul)) {
                                var f = gx({
                                    win: d,
                                    Db: Ay()
                                });
                                if (null != f.j) {
                                    Cy("ok");
                                    var g = By(f.j.value)
                                } else Cy(f.l.message), g = {}
                            } else g = By(d.localStorage);
                            null !== c && (g[e] = c.toJSON());
                            try {
                                d.localStorage.setItem("google_adsense_settings",
                                    JSON.stringify(g))
                            } catch (h) {}
                        }
                    }
                } catch (h) {}
            }
        }
    };

    function Vz(a) {
        a.A = a.D;
        a.I.style.transition = "height 500ms";
        a.C.style.transition = "height 500ms";
        a.G.style.transition = "height 500ms";
        a.l.style.transition = "height 500ms";
        Wz(a)
    }

    function Xz(a, b) {
        (a.l.contentWindow || a.l.contentWindow).postMessage(JSON.stringify({
            msg_type: "expand-on-scroll-result",
            eos_success: !0,
            eos_amount: b,
            googMsgType: "sth"
        }), "*")
    }

    function Wz(a) {
        const b = `rect(0px, ${a.l.width}px, ${a.A}px, 0px)`;
        a.l.style.clip = b;
        a.G.style.clip = b;
        a.l.setAttribute("height", a.A);
        a.l.style.height = a.A + "px";
        a.G.setAttribute("height", a.A);
        a.G.style.height = a.A + "px";
        a.C.style.height = a.A + "px";
        a.I.style.height = a.A + "px"
    }

    function Yz(a, b) {
        b = Yf(b.r_nh);
        a.D = null == b ? 0 : b;
        if (0 >= a.D) return "1";
        a.L = Wg(a.I).y;
        a.J = sj(a.j);
        if (a.L + a.A < a.J) return "2";
        if (a.L > nj(a.j) - a.j.innerHeight) return "3";
        b = a.J;
        a.l.setAttribute("height", a.D);
        a.l.style.height = a.D + "px";
        a.G.style.overflow = "hidden";
        a.I.style.position = "relative";
        a.I.style.transition = "height 100ms";
        a.C.style.transition = "height 100ms";
        a.G.style.transition = "height 100ms";
        a.l.style.transition = "height 100ms";
        b = Math.min(b + a.j.innerHeight - a.L, a.A);
        Qg(a.C, {
            position: "relative",
            top: "auto",
            bottom: "auto"
        });
        b = `rect(0px, ${a.l.width}px, ${b}px, 0px)`;
        Qg(a.l, {
            clip: b
        });
        Qg(a.G, {
            clip: b
        });
        return "0"
    }

    function Zz(a, b = {}) {
        a.ga && (b.eid = a.ga);
        b.qid = a.sa;
        S("eoscrl", b, Vi(String(a.kb)))
    }
    class $z extends Tz {
        constructor(a, b) {
            super(a.K);
            this.l = b;
            this.G = a.ca.firstElementChild;
            this.C = a.ca;
            this.I = this.C.parentElement && this.C.parentElement.classList.contains("adsbygoogle") ? this.C.parentElement : this.C;
            this.A = parseInt(this.C.style.height, 10);
            this.ga = null;
            this.xc = this.lb = !1;
            this.sa = "";
            this.pa = this.J = this.D = 0;
            this.Md = this.A / 5;
            this.L = Wg(this.I).y;
            this.kb = null;
            this.qd = ue(Ci(651, () => {
                this.L = Wg(this.I).y;
                var c = this.J;
                this.J = sj(this.j);
                this.A < this.D ? (c = this.J - c, 0 < c && (this.pa += c, this.pa >= this.Md ?
                    (Vz(this), Xz(this, this.D)) : (this.A = Math.min(this.D, this.A + c), Xz(this, c), Wz(this)))) : ye(this.j, "scroll", this.O)
            }), this);
            this.O = () => {
                var c = this.qd;
                Te.requestAnimationFrame ? Te.requestAnimationFrame(c) : c()
            }
        }
        Z(a) {
            a["expand-on-scroll"] = (b, c) => {
                sh(c, this.l) && (b = uj(b), this.ga = b.i_expid, this.sa = b.qid, this.kb = b.gen204_fraction, this.lb || (this.lb = !0, b = Yz(this, b), "0" === b && K(this.j, "scroll", this.O, ve), c.source.postMessage(JSON.stringify({
                        msg_type: "expand-on-scroll-result",
                        eos_success: "0" === b,
                        googMsgType: "sth"
                    }),
                    "*"), Zz(this, {
                    err: b
                })))
            };
            a["expand-on-scroll-force-expand"] = (b, c) => {
                sh(c, this.l) && !this.xc && (this.xc = !0, Vz(this), ye(this.j, "scroll", this.O))
            }
        }
        B() {
            this.O && ye(this.j, "scroll", this.O, ve);
            super.B()
        }
    };

    function aA(a) {
        const b = a.J.getBoundingClientRect(),
            c = 0 > b.top + b.height;
        return !(b.top > a.l.innerHeight) && !c
    }
    class bA extends Dn {
        constructor(a, b, c) {
            super();
            this.l = a;
            this.C = b;
            this.J = c;
            this.D = 0;
            this.A = aA(this);
            this.I = te(this.G, this);
            this.j = Ci(433, () => {
                var d = this.I;
                Te.requestAnimationFrame ? Te.requestAnimationFrame(d) : d()
            });
            K(this.l, "scroll", this.j, ve)
        }
        G() {
            const a = aA(this);
            if (a && !this.A) {
                var b = {
                    rr: "vis-bcr"
                };
                const c = this.C.contentWindow;
                c && (Ii(c, "ig", b, "*", 2), 10 <= ++this.D && this.j && ye(this.l, "scroll", this.j, ve))
            }
            this.A = a
        }
    };
    class cA extends Tz {
        constructor(a, b) {
            a.K && super(a.K);
            this.l = b;
            this.C = a.ca;
            this.A = a.Y
        }
        Z(a) {
            a.interscroller = (b, c) => {
                if (sh(c, this.l) && (c = uj(b), b = c.i_h, c = c.i_f, null != b && "" !== b && null != c && "" !== c)) {
                    this.C.style.position = "relative";
                    L(this.A, {
                        position: "absolute",
                        clip: "rect(0, auto, auto, 0)"
                    });
                    var d = this.A.firstElementChild;
                    d && d.id == this.l.id && L(d, {
                        position: "fixed"
                    });
                    d = Yf(Ug(this.A, "zIndex").toString(), 0) + 1;
                    b = sg(this.l.id + "_header", b);
                    L(b, {
                        position: "absolute",
                        top: "0px",
                        left: "0px",
                        right: "0px",
                        "z-index": d
                    });
                    this.C.insertAdjacentElement("afterbegin", b);
                    b = sg(this.l.id + "_footer", c);
                    L(b, {
                        position: "absolute",
                        bottom: "0px",
                        left: "0px",
                        right: "0px",
                        "z-index": d
                    });
                    this.C.insertAdjacentElement("beforeend", b)
                }
            }
        }
    };
    const dA = {
        display: "block",
        left: "auto",
        position: "fixed",
        bottom: "0px"
    };

    function eA(a, b) {
        if (!a.sa) return "1";
        b = Yf(b.r_nh);
        a.D = null == b ? 0 : b;
        if (0 >= a.D) return "2";
        a.C = Wg(a.A).y;
        b = a.j.innerHeight;
        if (a.C + a.ga < b) return "4";
        if (a.C > nj(a.j) - b) return "3";
        a.A.setAttribute("height", a.D);
        a.A.style.height = a.D + "px";
        Qg(a.l, dA);
        a.l.style.height = a.D + "px";
        a.O.style.position = "relative";
        a.pa();
        return "0"
    }

    function fA(a, b = {}) {
        a.G && (b.eid = a.G);
        b.qid = a.I;
        S("pscrl", b, Vi(String(a.J)))
    }
    class gA extends Tz {
        constructor(a, b) {
            a.K && super(a.K);
            this.A = b;
            this.l = a.ca;
            this.O = this.l.parentElement;
            this.ga = parseInt(this.l.style.height, 10);
            this.G = null;
            this.L = !1;
            this.I = "";
            this.D = 0;
            this.C = Wg(this.A).y;
            this.J = null;
            this.sa = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || t.msRequestAnimationFrame;
            this.pa = Ci(636, () => {
                this.sa.call(this.j, this.pa);
                var c = this.j.innerHeight,
                    d = sj(this.j);
                this.C = Wg(this.O).y;
                d + c > this.C ? (d = d + c - this.C, c = Math.min(d,
                    this.ga), d = this.D - d, d = Math.max(0, d), 0 >= d ? Qg(this.l, {
                    position: "absolute",
                    top: "0px",
                    bottom: "auto"
                }) : Qg(this.l, {
                    position: "fixed",
                    top: "auto",
                    bottom: "0px"
                }), Qg(this.l, {
                    clip: "rect(" + d + "px, " + this.A.width + "px, " + (d + c) + "px, 0px)"
                })) : Qg(this.l, {
                    clip: "rect(3000px, " + this.A.width + "px, 0px, 0px)"
                })
            })
        }
        Z(a) {
            a["parallax-scroll"] = (b, c) => {
                b = uj(b);
                this.G = b.i_expid;
                this.I = b.qid;
                this.J = b.gen204_fraction;
                !this.L && sh(c, this.A) && (this.L = !0, b = eA(this, b), c.source.postMessage(JSON.stringify({
                    msg_type: "parallax-scroll-result",
                    ps_success: "0" === b,
                    googMsgType: "sth"
                }), "*"), fA(this, {
                    err: b
                }))
            }
        }
    };

    function hA(a, b) {
        b = b && b[0];
        if (!b) return null;
        b = b.target;
        const c = b.getBoundingClientRect(),
            d = sf(a.j.N() || window);
        if (0 >= c.bottom || c.bottom > d.height || 0 >= c.right || c.left >= d.width) return null;
        var e = iA(a, b, c, a.j.j.elementsFromPoint($e(c.left + c.width / 2, c.left, c.right - 1), $e(c.bottom - 1 - 2, c.top, c.bottom - 1)), 1, []),
            f = iA(a, b, c, a.j.j.elementsFromPoint($e(c.left + c.width / 2, c.left, c.right - 1), $e(c.top + 2, c.top, c.bottom - 1)), 2, e.ta),
            g = iA(a, b, c, a.j.j.elementsFromPoint($e(c.left + 2, c.left, c.right - 1), $e(c.top + c.height / 2,
                c.top, c.bottom - 1)), 3, [...e.ta, ...f.ta]);
        const h = iA(a, b, c, a.j.j.elementsFromPoint($e(c.right - 1 - 2, c.left, c.right - 1), $e(c.top + c.height / 2, c.top, c.bottom - 1)), 4, [...e.ta, ...f.ta, ...g.ta]);
        var l = jA(a, b, c),
            k = n => cb(a.A, n.overlapType) && cb(a.B, n.overlapDepth) && cb(a.l, n.overlapDetectionPoint);
        e = Za([...e.entries, ...f.entries, ...g.entries, ...h.entries], k);
        k = Za(l, k);
        l = [...e, ...k];
        f = -2 > c.left || c.right > d.width + 2;
        f = 0 < l.length || f;
        g = tf(a.j.j);
        const m = new zg(c.left, c.top, c.width, c.height);
        e = [...$a(e, n => new zg(n.elementRect.left,
            n.elementRect.top, n.elementRect.width, n.elementRect.height)), ...hb($a(k, n => Bg(m, n.elementRect))), ...Za(Bg(m, new zg(0, 0, d.width, d.height)), n => 0 <= n.top && n.top + n.height <= d.height)];
        return {
            entries: l,
            isOverlappingOrOutsideViewport: f,
            scrollPosition: {
                scrollX: g.x,
                scrollY: g.y
            },
            target: b,
            targetRect: c,
            viewportSize: {
                width: d.width,
                height: d.height
            },
            overlappedArea: 20 > e.length ? kA(m, e) : lA(c, e)
        }
    }

    function mA(a, b) {
        const c = a.j.N(),
            d = a.j.j;
        return new Promise((e, f) => {
            const g = c.IntersectionObserver;
            if (g)
                if (d.elementsFromPoint)
                    if (d.createNodeIterator)
                        if (d.createRange)
                            if (c.Range.prototype.getBoundingClientRect) {
                                var h = new g(l => {
                                    const k = new Th,
                                        m = Sh(k, () => hA(a, l));
                                    m && (k.events.length && (m.executionTime = Math.round(Number(k.events[0].duration))), h.disconnect(), e(m))
                                }, nA);
                                h.observe(b)
                            } else f(Error("5"));
            else f(Error("4"));
            else f(Error("3"));
            else f(Error("2"));
            else f(Error("1"))
        })
    }

    function iA(a, b, c, d, e, f) {
        if (0 === c.width || 0 === c.height) return {
            entries: [],
            ta: []
        };
        const g = [],
            h = [];
        for (let n = 0; n < d.length; n++) {
            const q = d[n];
            if (q === b) continue;
            if (cb(f, q)) continue;
            h.push(q);
            const r = q.getBoundingClientRect();
            if (a.j.contains(q, b)) {
                g.push(oA(a, c, q, r, 1, e));
                continue
            }
            if (a.j.contains(b, q)) {
                g.push(oA(a, c, q, r, 2, e));
                continue
            }
            a: {
                var l = a;
                var k = b,
                    m = q;
                const F = l.j.Yd(k, m);
                if (!F) {
                    l = null;
                    break a
                }
                const {
                    suspectAncestor: A,
                    Da: E
                } = pA(l, k, F, m) || {},
                {
                    suspectAncestor: D,
                    Da: I
                } = pA(l, m, F, k) || {};l = A && E && D && I ? E <= I ? {
                    suspectAncestor: A,
                    overlapType: qA[E]
                } : {
                    suspectAncestor: D,
                    overlapType: rA[I]
                } : A && E ? {
                    suspectAncestor: A,
                    overlapType: qA[E]
                } : D && I ? {
                    suspectAncestor: D,
                    overlapType: rA[I]
                } : null
            }
            const {
                suspectAncestor: v,
                overlapType: x
            } = l || {};
            v && x ? g.push(oA(a, c, q, r, x, e, v)) : g.push(oA(a, c, q, r, 9, e))
        }
        return {
            entries: g,
            ta: h
        }
    }

    function jA(a, b, c) {
        const d = [];
        for (b = b.parentElement; b; b = b.parentElement) {
            const f = b.getBoundingClientRect();
            if (f) {
                var e = Nf(b, a.j.N());
                e && "visible" !== e.overflow && ("auto" !== e.overflowY && "scroll" !== e.overflowY && c.bottom > f.bottom + 2 ? d.push(oA(a, c, b, f, 5, 1)) : (e = "auto" === e.overflowX || "scroll" === e.overflowX, !e && c.left < f.left - 2 ? d.push(oA(a, c, b, f, 5, 3)) : !e && c.right > f.right + 2 && d.push(oA(a, c, b, f, 5, 4))))
            }
        }
        return d
    }

    function kA(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = 1; d < 1 << b.length; d++) {
            let e = a,
                f = 0;
            for (let g = 0; g < b.length && (!(d & 1 << g) || (f++, e = Ag(e, b[g]), e)); g++);
            e && (c = 1 === f % 2 ? c + (e.width + 1) * (e.height + 1) : c - (e.width + 1) * (e.height + 1))
        }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function lA(a, b) {
        if (0 === a.width || 0 === a.height || 0 === b.length) return 0;
        let c = 0;
        for (let d = a.left; d <= a.right; d++)
            for (let e = a.top; e <= a.bottom; e++)
                for (let f = 0; f < b.length; f++)
                    if (d >= b[f].left && d <= b[f].left + b[f].width && e >= b[f].top && e <= b[f].top + b[f].height) {
                        c++;
                        break
                    }
        return c / ((a.width + 1) * (a.height + 1))
    }

    function oA(a, b, c, d, e, f, g) {
        const h = {
            element: c,
            elementRect: d,
            overlapType: e,
            overlapDetectionPoint: f
        };
        if (cb(a.A, e) && cb(a.l, f)) {
            b = new wg(b.top, b.right - 1, b.bottom - 1, b.left);
            if ((a = sA(a, c)) && yg(b, a)) c = 4;
            else {
                a = tA(c, d);
                if (pb) {
                    e = $g(c, "paddingLeft");
                    f = $g(c, "paddingRight");
                    var l = $g(c, "paddingTop"),
                        k = $g(c, "paddingBottom");
                    e = new wg(l, f, k, e)
                } else e = Tg(c, "paddingLeft"), f = Tg(c, "paddingRight"), l = Tg(c, "paddingTop"), k = Tg(c, "paddingBottom"), e = new wg(parseFloat(l), parseFloat(f), parseFloat(k), parseFloat(e));
                yg(b, new wg(a.top +
                    e.top, a.right - e.right, a.bottom - e.bottom, a.left + e.left)) ? c = 3 : (c = tA(c, d), c = yg(b, c) ? 2 : 1)
            }
            h.overlapDepth = c
        }
        g && (h.suspectAncestor = g);
        return h
    }

    function pA(a, b, c, d) {
        const e = [];
        for (var f = b; f && f !== c; f = f.parentElement) e.unshift(f);
        c = a.j.N();
        for (f = 0; f < e.length; f++) {
            const h = e[f];
            var g = Nf(h, c);
            if (g) {
                if ("fixed" === g.position) return {
                    suspectAncestor: h,
                    Da: 1
                };
                if ("sticky" === g.position && a.j.contains(h.parentElement, d)) return {
                    suspectAncestor: h,
                    Da: 2
                };
                if ("absolute" === g.position) return {
                    suspectAncestor: h,
                    Da: 3
                };
                if ("none" !== g.cssFloat) {
                    g = h === e[0];
                    const l = uA(a, e.slice(0, f), h);
                    if (g || l) return {
                        suspectAncestor: h,
                        Da: 4
                    }
                }
            }
        }
        return (a = uA(a, e, b)) ? {
                suspectAncestor: a,
                Da: 5
            } :
            null
    }

    function uA(a, b, c) {
        const d = c.getBoundingClientRect();
        if (!d) return null;
        for (let e = 0; e < b.length; e++) {
            const f = b[e];
            if (!a.j.contains(f, c)) continue;
            const g = f.getBoundingClientRect();
            if (!g) continue;
            const h = Nf(f, a.j.N());
            if (h && d.bottom > g.bottom + 2 && "visible" === h.overflowY) return f
        }
        return null
    }

    function sA(a, b) {
        var c = a.j.j;
        a = c.createRange();
        if (!a) return null;
        c = c.createNodeIterator(b, NodeFilter.SHOW_TEXT, {
            acceptNode: d => /^[\s\xa0]*$/.test(d.nodeValue) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        });
        for (b = c.nextNode(); c.nextNode(););
        c = c.previousNode();
        if (!b || !c) return null;
        a.setStartBefore(b);
        a.setEndAfter(c);
        a = a.getBoundingClientRect();
        return 0 === a.width || 0 === a.height ? null : new wg(a.top, a.right, a.bottom, a.left)
    }

    function tA(a, b) {
        if (!pb || 9 <= Number(Eb)) {
            var c = Tg(a, "borderLeftWidth");
            d = Tg(a, "borderRightWidth");
            e = Tg(a, "borderTopWidth");
            a = Tg(a, "borderBottomWidth");
            c = new wg(parseFloat(e), parseFloat(d), parseFloat(a), parseFloat(c))
        } else {
            c = bh(a, "borderLeft");
            var d = bh(a, "borderRight"),
                e = bh(a, "borderTop");
            a = bh(a, "borderBottom");
            c = new wg(e, d, a, c)
        }
        return new wg(b.top + c.top, b.right - 1 - c.right, b.bottom - 1 - c.bottom, b.left + c.left)
    }
    class vA {
        constructor(a, b = wA) {
            this.j = nf(a);
            this.A = [5, 8, 9];
            this.B = [3, 4];
            this.l = b
        }
    }
    const qA = {
            [1]: 3,
            [4]: 10,
            [3]: 12,
            [2]: 4,
            [5]: 5
        },
        rA = {
            [1]: 6,
            [4]: 11,
            [3]: 13,
            [2]: 7,
            [5]: 8
        };
    Za(Sf({
        ug: 1,
        vg: 2,
        ai: 3,
        bi: 4,
        di: 5,
        qg: 6,
        rg: 7,
        tg: 8,
        wh: 9,
        ci: 10,
        sg: 11,
        $h: 12,
        pg: 13
    }), a => !cb([1, 2], a));
    Sf({
        Kf: 1,
        xh: 2,
        Vf: 3,
        ei: 4
    });
    const wA = Sf({
            Lf: 1,
            hi: 2,
            hh: 3,
            Rh: 4
        }),
        nA = {
            threshold: [0, .25, .5, .75, .95, .96, .97, .98, .99, 1]
        };

    function xA(a) {
        return X(Qm) && a.prerendering ? 3 : {
            visible: 1,
            hidden: 2,
            prerender: 3,
            preview: 4,
            unloaded: 5
        }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ""] || 0
    }

    function yA(a) {
        let b;
        a.visibilityState ? b = "visibilitychange" : a.mozVisibilityState ? b = "mozvisibilitychange" : a.webkitVisibilityState && (b = "webkitvisibilitychange");
        return b
    }

    function zA(a) {
        return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null
    };

    function AA(a, b) {
        Array.isArray(b) || (b = [b]);
        b = b.map(function(c) {
            return "string" === typeof c ? c : c.oc + " " + c.duration + "s " + c.timing + " " + c.delay + "s"
        });
        Qg(a, "transition", b.join(","))
    }
    var BA = re(function() {
        if (pb) return Bb("10.0");
        var a = wf(document, "DIV"),
            b = tb ? "-webkit" : sb ? "-moz" : pb ? "-ms" : null,
            c = {
                transition: "opacity 1s linear"
            };
        b && (c[b + "-transition"] = "opacity 1s linear");
        b = zd("div", {
            style: c
        });
        We(a, b);
        a = a.firstChild;
        b = a.style[lf("transition")];
        return "" != ("undefined" !== typeof b ? b : a.style[Rg(a, "transition")] || "")
    });

    function CA(a, b, c) {
        0 > a.l[b].indexOf(c) && (a.l[b] += c)
    }

    function DA(a, b) {
        0 <= a.j.indexOf(b) || (a.j = b + a.j)
    }

    function EA(a, b) {
        0 > a.A.indexOf(b) && (a.A = b + a.A)
    }

    function FA(a, b, c, d) {
        return "" != a.A || b ? null : "" == a.j.replace(GA, "") ? null != c && a.l[0] || null != d && a.l[1] ? !1 : !0 : !1
    }

    function HA(a) {
        var b = FA(a, "", null, 0);
        if (null === b) return "XS";
        b = b ? "C" : "N";
        a = a.j;
        return 0 <= a.indexOf("a") ? b + "A" : 0 <= a.indexOf("f") ? b + "F" : b + "S"
    }
    var IA = class {
        constructor(a, b) {
            this.l = ["", ""];
            this.j = a || "";
            this.A = b || ""
        }
        toString() {
            return [this.l[0], this.l[1], this.j, this.A].join("|")
        }
    };

    function JA(a) {
        let b = a.ea;
        a.J = function() {};
        KA(a, a.I, b);
        let c = a.I.parentElement;
        if (!c) return a.j;
        let d = !0,
            e = null;
        for (; c;) {
            try {
                e = /^head|html$/i.test(c.nodeName) ? null : Nf(c, b)
            } catch (g) {
                EA(a.j, "c")
            }
            const f = LA(a, b, c, e);
            c.classList.contains("adsbygoogle") && e && (/^\-.*/.test(e["margin-left"]) || /^\-.*/.test(e["margin-right"])) && (a.Z = !0);
            if (d && !f && MA(e)) {
                DA(a.j, "l");
                a.L = c;
                break
            }
            d = d && f;
            if (e && NA(a, e)) break;
            c = c.parentElement;
            if (!c) {
                if (b === a.kb) break;
                try {
                    if (c = b.frameElement, b = b.parent, !Hf(b)) {
                        DA(a.j, "c");
                        break
                    }
                } catch (g) {
                    DA(a.j,
                        "c");
                    break
                }
            }
        }
        a.H && a.B && OA(a);
        return a.j
    }

    function PA(a) {
        function b() {
            QA(c, f, g);
            if (h && !l && !g) {
                const k = function(m) {
                    for (let n = 0; n < m.length; n++) Qg(h, m[n], "0px")
                };
                k(RA);
                k(SA)
            }
        }
        const c = a.I;
        c.style.overflow = a.sa ? "visible" : "hidden";
        a.H && (a.L ? (AA(c, TA), AA(a.L, TA)) : AA(c, "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1) .3s, height .5s cubic-bezier(.4, 0, 1, 1)"));
        null !== a.O && (c.style.opacity = a.O);
        const d = null != a.G && null != a.A && (a.ga || a.A > a.G) ? a.A : null,
            e = null != a.D && null != a.l && (a.ga || a.l > a.D) ? a.l : null;
        if (a.T) {
            const k = a.T.length;
            for (let m = 0; m < k; m++) QA(a.T[m], d, e)
        }
        const f = a.A,
            g = a.l,
            h = a.L,
            l = a.Z;
        a.H ? t.setTimeout(b, 1E3) : b()
    }

    function UA(a) {
        if (a.B && !a.Oa || null == a.A && null == a.l && null == a.O && a.B) return a.j;
        var b = a.B;
        a.B = !1;
        JA(a);
        a.B = b;
        if (!b || null != a.la && !FA(a.j, a.la, a.A, a.l)) return a.j;
        0 <= a.j.j.indexOf("n") && (a.G = null, a.D = null);
        if (null == a.G && null !== a.A || null == a.D && null !== a.l) a.H = !1;
        (0 == a.A || 0 == a.l) && 0 <= a.j.j.indexOf("l") && (a.A = 0, a.l = 0);
        b = a.j;
        b.l[0] = "";
        b.l[1] = "";
        b.j = "";
        b.A = "";
        PA(a);
        return JA(a)
    }

    function NA(a, b) {
        let c = !1;
        "none" == b.display && (DA(a.j, "n"), a.B && (c = !0));
        "hidden" != b.visibility && "collapse" != b.visibility || DA(a.j, "v");
        "hidden" == b.overflow && DA(a.j, "o");
        "absolute" == b.position ? (DA(a.j, "a"), c = !0) : "fixed" == b.position && (DA(a.j, "f"), c = !0);
        return c
    }

    function KA(a, b, c) {
        let d = 0;
        if (!b || !b.parentElement) return !0;
        let e = !1,
            f = 0;
        const g = b.parentElement.childNodes;
        for (let l = 0; l < g.length; l++) {
            var h = g[l];
            h == b ? e = !0 : (h = VA(a, h, c), d |= h, e && (f |= h))
        }
        f & 1 && (d & 2 && CA(a.j, 0, "o"), d & 4 && CA(a.j, 1, "o"));
        return !(d & 1)
    }

    function LA(a, b, c, d) {
        let e = null;
        try {
            e = c.style
        } catch (F) {
            EA(a.j, "s")
        }
        var f = c.getAttribute("width"),
            g = Yf(f),
            h = c.getAttribute("height"),
            l = Yf(h),
            k = d && /^block$/.test(d.display) || e && /^block$/.test(e.display);
        const m = KA(a, c, b);
        var n = d && d.width,
            q = d && d.height,
            r = e && e.width,
            v = e && e.height,
            x = $f(n) == a.G && $f(q) == a.D;
        n = x ? n : r;
        v = x ? q : v;
        r = $f(n);
        x = $f(v);
        g = null !== a.G && (null !== r && a.G >= r || null !== g && a.G >= g);
        x = null !== a.D && (null !== x && a.D >= x || null !== l && a.D >= l);
        l = !m && MA(d);
        x = m || x || l || !(f || n || d && (!WA(String(d.minWidth)) || !XA(String(d.maxWidth))));
        k = m || g || l || k || !(h || v || d && (!WA(String(d.minHeight)) || !XA(String(d.maxHeight))));
        YA(a, 0, x, c, "width", f, a.G, a.A);
        ZA(a, 0, "d", x, e, d, "width", n, a.G, a.A);
        ZA(a, 0, "m", x, e, d, "minWidth", e && e.minWidth, a.G, a.A);
        ZA(a, 0, "M", x, e, d, "maxWidth", e && e.maxWidth, a.G, a.A);
        if (a.lb) {
            c = /^html|body$/i.test(c.nodeName);
            q = $f(q);
            h = d ? "auto" === d.overflowY || "scroll" === d.overflowY : !1;
            (f = null != a.l && d && q && Math.round(q) !== a.l) && !(f = !h) && (f = q, f = (X(ym) || b.location && "#gffwroe2ettq" == b.location.hash) && Math.round(f) < .8 * Math.round(b.innerHeight));
            f = f && "100%" !== d.minHeight;
            if (c = a.B && !c && f) c = !(a.pa && d && (X(um) || b.location && "#gffwroe2etoq" == b.location.hash) && Math.round($f(d.minHeight)) === Math.round(b.innerHeight));
            c && (e.setProperty("height", "auto", "important"), d && !WA(String(d.minHeight)) && e.setProperty("min-height", "0px", "important"), d && !XA(String(d.maxHeight)) && a.l && Math.round(q) < a.l && e.setProperty("max-height", "none", "important"))
        } else YA(a, 1, k, c, "height", h, a.D, a.l), ZA(a, 1, "d", k, e, d, "height", v, a.D, a.l), ZA(a, 1, "m", k, e, d, "minHeight", e && e.minHeight,
            a.D, a.l), ZA(a, 1, "M", k, e, d, "maxHeight", e && e.maxHeight, a.D, a.l);
        return m
    }

    function OA(a) {
        function b() {
            if (0 < c) {
                var k = Nf(e, d) || {};
                const m = $f(k.width);
                k = $f(k.height);
                null !== m && null !== f && h && h(0, f - m);
                null !== k && null !== g && h && h(1, g - k);
                --c
            } else t.clearInterval(l), h && (h(0, 0), h(1, 0))
        }
        let c = 31.25;
        const d = a.ea,
            e = a.I,
            f = a.A,
            g = a.l,
            h = a.J;
        let l;
        t.setTimeout(function() {
            l = t.setInterval(b, 16)
        }, 990)
    }

    function VA(a, b, c) {
        if (3 == b.nodeType) return /\S/.test(b.data) ? 1 : 0;
        if (1 == b.nodeType) {
            if (/^(head|script|style)$/i.test(b.nodeName)) return 0;
            let d = null;
            try {
                d = Nf(b, c)
            } catch (e) {}
            if (d) {
                if ("none" == d.display || "fixed" == d.position) return 0;
                if ("absolute" == d.position) {
                    if (!a.C.boundingClientRect || "hidden" == d.visibility || "collapse" == d.visibility) return 0;
                    c = null;
                    try {
                        c = b.getBoundingClientRect()
                    } catch (e) {
                        return 0
                    }
                    return (c.right > a.C.boundingClientRect.left ? 2 : 0) | (c.bottom > a.C.boundingClientRect.top ? 4 : 0)
                }
            }
            return 1
        }
        return 0
    }

    function YA(a, b, c, d, e, f, g, h) {
        if (null != h) {
            if ("string" == typeof f) {
                if ("100%" == f || !f) return;
                f = Yf(f);
                null == f && (EA(a.j, "n"), CA(a.j, b, "d"))
            }
            if (null != f)
                if (c) {
                    if (a.B)
                        if (a.H) {
                            const l = Math.max(f + h - (g || 0), 0),
                                k = a.J;
                            a.J = function(m, n) {
                                m == b && d.setAttribute(e, l - n);
                                k && k(m, n)
                            }
                        } else d.setAttribute(e, h)
                } else CA(a.j, b, "d")
        }
    }

    function ZA(a, b, c, d, e, f, g, h, l, k) {
        if (null != k) {
            f = f && f[g];
            "string" != typeof f || ("m" == c ? WA(f) : XA(f)) || (f = $f(f), null == f ? DA(a.j, "p") : null != l && DA(a.j, f == l ? "E" : "e"));
            if ("string" == typeof h) {
                if ("m" == c ? WA(h) : XA(h)) return;
                h = $f(h);
                null == h && (EA(a.j, "p"), CA(a.j, b, c))
            }
            if (null != h)
                if (d && e) {
                    if (a.B)
                        if (a.H) {
                            const m = Math.max(h + k - (l || 0), 0),
                                n = a.J;
                            a.J = function(q, r) {
                                q == b && (e[g] = m - r + "px");
                                n && n(q, r)
                            }
                        } else e[g] = k + "px"
                } else CA(a.j, b, c)
        }
    }
    var dB = class {
        constructor(a, b, c, d, e, f, g) {
            this.kb = a;
            this.T = c;
            this.I = b;
            this.ea = (a = this.I.ownerDocument) && (a.defaultView || a.parentWindow);
            this.C = new $A(this.I);
            this.B = g;
            this.Oa = aB(this.C, d.uc, d.height, d.ed);
            this.G = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.right - this.C.boundingClientRect.left : null : e;
            this.D = this.B ? this.C.boundingClientRect ? this.C.boundingClientRect.bottom - this.C.boundingClientRect.top : null : f;
            this.A = bB(d.width);
            this.l = bB(d.height);
            this.O = this.B ? bB(d.opacity) : null;
            this.la =
                d.check;
            this.H = "animate" == d.uc && !cB(this.C, this.l, this.Aa) && BA();
            this.sa = !!d.yc;
            this.j = new IA;
            cB(this.C, this.l, this.Aa) && DA(this.j, "r");
            e = this.C;
            e.j && e.l >= e.A && DA(this.j, "b");
            this.L = this.J = null;
            this.Z = !1;
            this.ga = !!d.Ee;
            this.lb = !!d.cd;
            this.Aa = !!d.ed;
            this.pa = d.mb
        }
    };

    function cB(a, b, c) {
        var d;
        (d = a.j) && !(d = !a.B) && (c ? (b = a.l + Math.min(b, bB(a.getHeight())), a = a.j && b >= a.A) : a = a.j && a.l >= a.A, d = a);
        return d
    }
    var $A = class {
        constructor(a) {
            var b = a && a.ownerDocument,
                c = b && (b.defaultView || b.parentWindow);
            c = c && Kf(c);
            this.j = !!c;
            this.boundingClientRect = null;
            if (a) try {
                this.boundingClientRect = a.getBoundingClientRect()
            } catch (g) {}
            var d = a;
            let e = 0,
                f = this.boundingClientRect;
            for (; d;) try {
                f && (e += f.top);
                const g = d.ownerDocument,
                    h = g && (g.defaultView || g.parentWindow);
                (d = h && h.frameElement) && (f = d.getBoundingClientRect())
            } catch (g) {
                break
            }
            this.l = e;
            c = c || t;
            this.A = ("CSS1Compat" == c.document.compatMode ? c.document.documentElement : c.document.body).clientHeight;
            b = b && xA(b);
            this.B = !!a && !(2 == b || 3 == b) && !(this.boundingClientRect && this.boundingClientRect.top >= this.boundingClientRect.bottom && this.boundingClientRect.left >= this.boundingClientRect.right)
        }
        isVisible() {
            return this.B
        }
        getWidth() {
            return this.boundingClientRect ? this.boundingClientRect.right - this.boundingClientRect.left : null
        }
        getHeight() {
            return this.boundingClientRect ? this.boundingClientRect.bottom - this.boundingClientRect.top : null
        }
    };

    function aB(a, b, c, d) {
        switch (b) {
            case "no_rsz":
                return !1;
            case "force":
            case "animate":
                return !0;
            default:
                return cB(a, c, d)
        }
    }

    function MA(a) {
        return !!a && /^left|right$/.test(a.cssFloat || a.styleFloat)
    }

    function eB(a, b, c, d) {
        return UA(new dB(a, b, d, c, null, null, !0))
    }
    var fB = new IA("s", ""),
        GA = RegExp("[lonvafrbpEe]", "g");

    function XA(a) {
        return !a || /^(auto|none|100%)$/.test(a)
    }

    function WA(a) {
        return !a || /^(0px|auto|none|0%)$/.test(a)
    }

    function QA(a, b, c) {
        null !== b && null !== Yf(a.getAttribute("width")) && a.setAttribute("width", b);
        null !== c && null !== Yf(a.getAttribute("height")) && a.setAttribute("height", c);
        null !== b && (a.style.width = b + "px");
        null !== c && (a.style.height = c + "px")
    }
    var RA = "margin-left margin-right padding-left padding-right border-left-width border-right-width".split(" "),
        SA = "margin-top margin-bottom padding-top padding-bottom border-top-width border-bottom-width".split(" ");
    let gB = "opacity 1s cubic-bezier(.4, 0, 1, 1), width .2s cubic-bezier(.4, 0, 1, 1), height .3s cubic-bezier(.4, 0, 1, 1) .2s",
        hB = RA;
    for (let a = 0; a < hB.length; a++) gB += ", " + hB[a] + " .2s cubic-bezier(.4, 0, 1, 1)";
    hB = SA;
    for (let a = 0; a < hB.length; a++) gB += ", " + hB[a] + " .3s cubic-bezier(.4, 0, 1, 1) .2s";
    var TA = gB;

    function bB(a) {
        return "string" === typeof a ? Yf(a) : "number" === typeof a && isFinite(a) ? a : null
    };

    function iB(a, b, c, d, e, f, g, h, l, k) {
        const m = Q();
        if (!a.l || !m) return k.err = "2", jB(a, k, null), !1;
        if ("no_rsz" === f) return k.err = "7", jB(a, k, null), !0;
        const n = new $A(a.l);
        if (!n.j) return k.err = "3", jB(a, k, null), !1;
        var q = n.getWidth();
        null != q && (k.w = q);
        q = n.getHeight();
        null != q && (k.h = q);
        if (aB(n, f, d, l)) {
            var r = a.l.ownerDocument.getElementById(a.l.id + "_anchor");
            q = r ? [a.l] : null;
            r = r || a.l;
            const v = X(Fm);
            b = eB(m, r, {
                width: c,
                height: d,
                opacity: e,
                check: b,
                uc: f,
                yc: g,
                Ee: h,
                cd: v,
                ed: l
            }, q);
            k.r_cui && Zf(k.r_cui.toString()) && L(r, {
                height: (null ===
                    d ? 0 : d - 48) + "px",
                top: "24px"
            });
            null != c && (k.nw = c);
            null != d && (k.nh = d);
            k.rsz = b.toString();
            k.abl = HA(b);
            k.frsz = ("force" === f).toString();
            k.err = "0";
            jB(a, k, n);
            bb(mi(zi).l(), x => cb([248427477, 248427478], x)) && a.j === m && mA(new vA(a.j, void 0), r).then(x => {
                Ti(8, [x]);
                return x
            }).then(x => {
                S("resize-ovlp", {
                    adf: a.A,
                    eid: a.G,
                    io: Number(x.isOverlappingOrOutsideViewport),
                    oa: x.overlappedArea.toFixed(2),
                    qid: k.qid || "",
                    slot: a.I,
                    url: a.J,
                    vp: x.viewportSize.width + "x" + x.viewportSize.height
                }, 1)
            }).catch(x => {
                S("resize-ovlp-err", {
                        err: x.message
                    },
                    1)
            });
            return !0
        }
        k.err = "1";
        jB(a, k, n);
        return !1
    }

    function kB(a, b, c) {
        const d = {
            scrl: sj(a.j || Q()),
            adk: a.D,
            adf: a.A,
            fmt: a.C
        };
        b && (d.str = cB(b, Yf(c.r_nh), Zf(c.r_cab)), d.ad_y = b.l, d.vph = b.A);
        Rf(c, (e, f) => {
            d[f] = e
        });
        return d
    }

    function jB(a, b, c) {
        const d = Vi(String(b.gen204_fraction));
        b = kB(a, c, b);
        b.url = a.j.document.URL;
        S("resize", b, d)
    }
    class lB extends Tz {
        constructor(a, b, c) {
            super(a);
            this.l = b;
            this.D = String(c.google_ad_unit_key || "");
            this.A = String(c.google_ad_dom_fingerprint || "");
            this.C = String(c.google_ad_format || "");
            this.G = Hy(c);
            this.I = String(c.google_ad_slot || "");
            this.J = String(c.google_page_url || "")
        }
        Z(a) {
            a["resize-me"] = (b, c) => {
                if (rj(c, this.l.contentWindow)) {
                    b = uj(b);
                    var d = b.r_chk;
                    if (null == d || "" === d) {
                        var e = Yf(b.r_nw),
                            f = Yf(b.r_nh),
                            g = Yf(b.r_no);
                        null != g || 0 !== e && 0 !== f || (g = 0);
                        var h = b.r_str;
                        h = h ? h : null;
                        e = iB(this, d, e, f, g, h, Zf(b.r_ao), Zf(b.r_ifr),
                            Zf(b.r_cab), b);
                        d = {
                            msg_type: "resize-result"
                        };
                        d.r_str = h;
                        d.r_status = e;
                        c = c.source;
                        d.googMsgType = "sth";
                        c.postMessage(JSON.stringify(d), "*");
                        this.l.dataset.googleQueryId || this.l.setAttribute("data-google-query-id", b.qid)
                    }
                }
            }
        }
        B() {
            super.B();
            this.l = null
        }
    };
    const mB = {
        google: 1,
        googlegroups: 1,
        gmail: 1,
        googlemail: 1,
        googleimages: 1,
        googleprint: 1
    };
    const nB = /^blogger$/,
        oB = /^wordpress(.|\s|$)/i,
        pB = /^joomla!/i,
        qB = /^drupal/i,
        rB = /\/wp-content\//,
        sB = /\/wp-content\/plugins\/advanced-ads/,
        tB = /\/wp-content\/themes\/genesis/,
        uB = /\/wp-content\/plugins\/genesis/;
    var vB = a => {
        var b = a.getElementsByTagName("script"),
            c = b.length;
        for (var d = 0; d < c; ++d) {
            var e = b[d];
            if (e.hasAttribute("src")) {
                e = e.getAttribute("src");
                if (sB.test(e)) return 5;
                if (uB.test(e)) return 6
            }
        }
        b = a.getElementsByTagName("link");
        c = b.length;
        for (d = 0; d < c; ++d)
            if (e = b[d], e.hasAttribute("href") && (e = e.getAttribute("href"), tB.test(e) || uB.test(e))) return 6;
        a = a.getElementsByTagName("meta");
        d = a.length;
        for (e = 0; e < d; ++e) {
            var f = a[e];
            if ("generator" == f.getAttribute("name") && f.hasAttribute("content")) {
                f = f.getAttribute("content");
                if (nB.test(f)) return 1;
                if (oB.test(f)) return 2;
                if (pB.test(f)) return 3;
                if (qB.test(f)) return 4
            }
        }
        for (a = 0; a < c; ++a)
            if (d = b[a], "stylesheet" == d.getAttribute("rel") && d.hasAttribute("href") && (d = d.getAttribute("href"), rB.test(d))) return 2;
        return 0
    };
    let wB = navigator;
    var xB = a => {
            let b = 1;
            let c;
            if (void 0 != a && "" != a)
                for (b = 0, c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        },
        yB = (a, b) => {
            if (!a || "none" == a) return 1;
            a = String(a);
            "auto" == a && (a = b, "www." == a.substring(0, 4) && (a = a.substring(4, a.length)));
            return xB(a.toLowerCase())
        };
    const zB = RegExp("^\\s*_ga=\\s*1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        AB = RegExp("^[^=]+=\\s*GA1\\.(\\d+)[^.]*\\.(.*?)\\s*$"),
        BB = RegExp("^\\s*_ga=\\s*()(amp-[\\w.-]{22,64})$");
    var CB = () => {
        const a = new vn;
        t.SVGElement && t.document.createElementNS && a.set(0);
        const b = eg();
        b["allow-top-navigation-by-user-activation"] && a.set(1);
        b["allow-popups-to-escape-sandbox"] && a.set(2);
        t.crypto && t.crypto.subtle && a.set(3);
        t.TextDecoder && t.TextEncoder && a.set(4);
        return un(a)
    };
    var DB = new Map([
        [".google.com", a => N `https://adservice.google.com/adsid/integrator.${a}`],
        [".google.ad", a => N `https://adservice.google.ad/adsid/integrator.${a}`],
        [".google.ae", a => N `https://adservice.google.ae/adsid/integrator.${a}`],
        [".google.com.af", a => N `https://adservice.google.com.af/adsid/integrator.${a}`],
        [".google.com.ag", a => N `https://adservice.google.com.ag/adsid/integrator.${a}`],
        [".google.com.ai", a => N `https://adservice.google.com.ai/adsid/integrator.${a}`],
        [".google.al", a => N `https://adservice.google.al/adsid/integrator.${a}`],
        [".google.co.ao", a => N `https://adservice.google.co.ao/adsid/integrator.${a}`],
        [".google.com.ar", a => N `https://adservice.google.com.ar/adsid/integrator.${a}`],
        [".google.as", a => N `https://adservice.google.as/adsid/integrator.${a}`],
        [".google.at", a => N `https://adservice.google.at/adsid/integrator.${a}`],
        [".google.com.au", a => N `https://adservice.google.com.au/adsid/integrator.${a}`],
        [".google.az", a => N `https://adservice.google.az/adsid/integrator.${a}`],
        [".google.com.bd", a => N `https://adservice.google.com.bd/adsid/integrator.${a}`],
        [".google.be", a => N `https://adservice.google.be/adsid/integrator.${a}`],
        [".google.bf", a => N `https://adservice.google.bf/adsid/integrator.${a}`],
        [".google.bg", a => N `https://adservice.google.bg/adsid/integrator.${a}`],
        [".google.com.bh", a => N `https://adservice.google.com.bh/adsid/integrator.${a}`],
        [".google.bi", a => N `https://adservice.google.bi/adsid/integrator.${a}`],
        [".google.bj", a => N `https://adservice.google.bj/adsid/integrator.${a}`],
        [".google.com.bn", a => N `https://adservice.google.com.bn/adsid/integrator.${a}`],
        [".google.com.bo", a => N `https://adservice.google.com.bo/adsid/integrator.${a}`],
        [".google.com.br", a => N `https://adservice.google.com.br/adsid/integrator.${a}`],
        [".google.bs", a => N `https://adservice.google.bs/adsid/integrator.${a}`],
        [".google.bt", a => N `https://adservice.google.bt/adsid/integrator.${a}`],
        [".google.co.bw", a => N `https://adservice.google.co.bw/adsid/integrator.${a}`],
        [".google.com.bz", a => N `https://adservice.google.com.bz/adsid/integrator.${a}`],
        [".google.ca", a => N `https://adservice.google.ca/adsid/integrator.${a}`],
        [".google.cd", a => N `https://adservice.google.cd/adsid/integrator.${a}`],
        [".google.cf", a => N `https://adservice.google.cf/adsid/integrator.${a}`],
        [".google.cg", a => N `https://adservice.google.cg/adsid/integrator.${a}`],
        [".google.ch", a => N `https://adservice.google.ch/adsid/integrator.${a}`],
        [".google.ci", a => N `https://adservice.google.ci/adsid/integrator.${a}`],
        [".google.co.ck", a => N `https://adservice.google.co.ck/adsid/integrator.${a}`],
        [".google.cl", a => N `https://adservice.google.cl/adsid/integrator.${a}`],
        [".google.cm", a => N `https://adservice.google.cm/adsid/integrator.${a}`],
        [".google.com.co", a => N `https://adservice.google.com.co/adsid/integrator.${a}`],
        [".google.co.cr", a => N `https://adservice.google.co.cr/adsid/integrator.${a}`],
        [".google.com.cu", a => N `https://adservice.google.com.cu/adsid/integrator.${a}`],
        [".google.cv", a => N `https://adservice.google.cv/adsid/integrator.${a}`],
        [".google.com.cy", a => N `https://adservice.google.com.cy/adsid/integrator.${a}`],
        [".google.cz", a => N `https://adservice.google.cz/adsid/integrator.${a}`],
        [".google.de", a => N `https://adservice.google.de/adsid/integrator.${a}`],
        [".google.dj", a => N `https://adservice.google.dj/adsid/integrator.${a}`],
        [".google.dk", a => N `https://adservice.google.dk/adsid/integrator.${a}`],
        [".google.dm", a => N `https://adservice.google.dm/adsid/integrator.${a}`],
        [".google.dz", a => N `https://adservice.google.dz/adsid/integrator.${a}`],
        [".google.com.ec", a => N `https://adservice.google.com.ec/adsid/integrator.${a}`],
        [".google.ee", a => N `https://adservice.google.ee/adsid/integrator.${a}`],
        [".google.com.eg", a => N `https://adservice.google.com.eg/adsid/integrator.${a}`],
        [".google.es", a => N `https://adservice.google.es/adsid/integrator.${a}`],
        [".google.com.et", a => N `https://adservice.google.com.et/adsid/integrator.${a}`],
        [".google.fi", a => N `https://adservice.google.fi/adsid/integrator.${a}`],
        [".google.com.fj", a => N `https://adservice.google.com.fj/adsid/integrator.${a}`],
        [".google.fm", a => N `https://adservice.google.fm/adsid/integrator.${a}`],
        [".google.fr", a => N `https://adservice.google.fr/adsid/integrator.${a}`],
        [".google.ga", a => N `https://adservice.google.ga/adsid/integrator.${a}`],
        [".google.ge", a => N `https://adservice.google.ge/adsid/integrator.${a}`],
        [".google.gg", a => N `https://adservice.google.gg/adsid/integrator.${a}`],
        [".google.com.gh", a => N `https://adservice.google.com.gh/adsid/integrator.${a}`],
        [".google.com.gi", a => N `https://adservice.google.com.gi/adsid/integrator.${a}`],
        [".google.gl", a => N `https://adservice.google.gl/adsid/integrator.${a}`],
        [".google.gm", a => N `https://adservice.google.gm/adsid/integrator.${a}`],
        [".google.gr", a => N `https://adservice.google.gr/adsid/integrator.${a}`],
        [".google.com.gt", a => N `https://adservice.google.com.gt/adsid/integrator.${a}`],
        [".google.gy", a => N `https://adservice.google.gy/adsid/integrator.${a}`],
        [".google.com.hk", a => N `https://adservice.google.com.hk/adsid/integrator.${a}`],
        [".google.hn", a => N `https://adservice.google.hn/adsid/integrator.${a}`],
        [".google.hr", a => N `https://adservice.google.hr/adsid/integrator.${a}`],
        [".google.ht", a => N `https://adservice.google.ht/adsid/integrator.${a}`],
        [".google.hu", a => N `https://adservice.google.hu/adsid/integrator.${a}`],
        [".google.co.id", a => N `https://adservice.google.co.id/adsid/integrator.${a}`],
        [".google.ie", a => N `https://adservice.google.ie/adsid/integrator.${a}`],
        [".google.co.il", a => N `https://adservice.google.co.il/adsid/integrator.${a}`],
        [".google.im", a => N `https://adservice.google.im/adsid/integrator.${a}`],
        [".google.co.in", a => N `https://adservice.google.co.in/adsid/integrator.${a}`],
        [".google.iq", a => N `https://adservice.google.iq/adsid/integrator.${a}`],
        [".google.is", a => N `https://adservice.google.is/adsid/integrator.${a}`],
        [".google.it", a => N `https://adservice.google.it/adsid/integrator.${a}`],
        [".google.je", a => N `https://adservice.google.je/adsid/integrator.${a}`],
        [".google.com.jm", a => N `https://adservice.google.com.jm/adsid/integrator.${a}`],
        [".google.jo", a => N `https://adservice.google.jo/adsid/integrator.${a}`],
        [".google.co.jp", a => N `https://adservice.google.co.jp/adsid/integrator.${a}`],
        [".google.co.ke", a => N `https://adservice.google.co.ke/adsid/integrator.${a}`],
        [".google.com.kh", a => N `https://adservice.google.com.kh/adsid/integrator.${a}`],
        [".google.ki", a => N `https://adservice.google.ki/adsid/integrator.${a}`],
        [".google.kg", a => N `https://adservice.google.kg/adsid/integrator.${a}`],
        [".google.co.kr", a => N `https://adservice.google.co.kr/adsid/integrator.${a}`],
        [".google.com.kw", a => N `https://adservice.google.com.kw/adsid/integrator.${a}`],
        [".google.kz", a => N `https://adservice.google.kz/adsid/integrator.${a}`],
        [".google.la", a => N `https://adservice.google.la/adsid/integrator.${a}`],
        [".google.com.lb", a => N `https://adservice.google.com.lb/adsid/integrator.${a}`],
        [".google.li", a => N `https://adservice.google.li/adsid/integrator.${a}`],
        [".google.lk", a => N `https://adservice.google.lk/adsid/integrator.${a}`],
        [".google.co.ls", a => N `https://adservice.google.co.ls/adsid/integrator.${a}`],
        [".google.lt", a => N `https://adservice.google.lt/adsid/integrator.${a}`],
        [".google.lu", a => N `https://adservice.google.lu/adsid/integrator.${a}`],
        [".google.lv", a => N `https://adservice.google.lv/adsid/integrator.${a}`],
        [".google.com.ly", a => N `https://adservice.google.com.ly/adsid/integrator.${a}`],
        [".google.md", a => N `https://adservice.google.md/adsid/integrator.${a}`],
        [".google.me", a => N `https://adservice.google.me/adsid/integrator.${a}`],
        [".google.mg", a => N `https://adservice.google.mg/adsid/integrator.${a}`],
        [".google.mk", a => N `https://adservice.google.mk/adsid/integrator.${a}`],
        [".google.ml", a => N `https://adservice.google.ml/adsid/integrator.${a}`],
        [".google.com.mm", a => N `https://adservice.google.com.mm/adsid/integrator.${a}`],
        [".google.mn", a => N `https://adservice.google.mn/adsid/integrator.${a}`],
        [".google.ms", a => N `https://adservice.google.ms/adsid/integrator.${a}`],
        [".google.com.mt", a => N `https://adservice.google.com.mt/adsid/integrator.${a}`],
        [".google.mu", a => N `https://adservice.google.mu/adsid/integrator.${a}`],
        [".google.mv", a => N `https://adservice.google.mv/adsid/integrator.${a}`],
        [".google.mw", a => N `https://adservice.google.mw/adsid/integrator.${a}`],
        [".google.com.mx", a => N `https://adservice.google.com.mx/adsid/integrator.${a}`],
        [".google.com.my", a => N `https://adservice.google.com.my/adsid/integrator.${a}`],
        [".google.co.mz", a => N `https://adservice.google.co.mz/adsid/integrator.${a}`],
        [".google.com.na", a => N `https://adservice.google.com.na/adsid/integrator.${a}`],
        [".google.com.ng", a => N `https://adservice.google.com.ng/adsid/integrator.${a}`],
        [".google.com.ni", a => N `https://adservice.google.com.ni/adsid/integrator.${a}`],
        [".google.ne", a => N `https://adservice.google.ne/adsid/integrator.${a}`],
        [".google.nl", a => N `https://adservice.google.nl/adsid/integrator.${a}`],
        [".google.no", a => N `https://adservice.google.no/adsid/integrator.${a}`],
        [".google.com.np", a => N `https://adservice.google.com.np/adsid/integrator.${a}`],
        [".google.nr", a => N `https://adservice.google.nr/adsid/integrator.${a}`],
        [".google.nu", a => N `https://adservice.google.nu/adsid/integrator.${a}`],
        [".google.co.nz", a => N `https://adservice.google.co.nz/adsid/integrator.${a}`],
        [".google.com.om", a => N `https://adservice.google.com.om/adsid/integrator.${a}`],
        [".google.com.pa", a => N `https://adservice.google.com.pa/adsid/integrator.${a}`],
        [".google.com.pe", a => N `https://adservice.google.com.pe/adsid/integrator.${a}`],
        [".google.com.pg", a => N `https://adservice.google.com.pg/adsid/integrator.${a}`],
        [".google.com.ph", a => N `https://adservice.google.com.ph/adsid/integrator.${a}`],
        [".google.com.pk", a => N `https://adservice.google.com.pk/adsid/integrator.${a}`],
        [".google.pl", a => N `https://adservice.google.pl/adsid/integrator.${a}`],
        [".google.pn", a => N `https://adservice.google.pn/adsid/integrator.${a}`],
        [".google.com.pr", a => N `https://adservice.google.com.pr/adsid/integrator.${a}`],
        [".google.ps", a => N `https://adservice.google.ps/adsid/integrator.${a}`],
        [".google.pt", a => N `https://adservice.google.pt/adsid/integrator.${a}`],
        [".google.com.py", a => N `https://adservice.google.com.py/adsid/integrator.${a}`],
        [".google.com.qa", a => N `https://adservice.google.com.qa/adsid/integrator.${a}`],
        [".google.ro", a => N `https://adservice.google.ro/adsid/integrator.${a}`],
        [".google.ru", a => N `https://adservice.google.ru/adsid/integrator.${a}`],
        [".google.rw", a => N `https://adservice.google.rw/adsid/integrator.${a}`],
        [".google.com.sa", a => N `https://adservice.google.com.sa/adsid/integrator.${a}`],
        [".google.com.sb", a => N `https://adservice.google.com.sb/adsid/integrator.${a}`],
        [".google.sc", a => N `https://adservice.google.sc/adsid/integrator.${a}`],
        [".google.se", a => N `https://adservice.google.se/adsid/integrator.${a}`],
        [".google.com.sg", a => N `https://adservice.google.com.sg/adsid/integrator.${a}`],
        [".google.sh", a => N `https://adservice.google.sh/adsid/integrator.${a}`],
        [".google.si", a => N `https://adservice.google.si/adsid/integrator.${a}`],
        [".google.sk", a => N `https://adservice.google.sk/adsid/integrator.${a}`],
        [".google.sn", a => N `https://adservice.google.sn/adsid/integrator.${a}`],
        [".google.so", a => N `https://adservice.google.so/adsid/integrator.${a}`],
        [".google.sm", a => N `https://adservice.google.sm/adsid/integrator.${a}`],
        [".google.sr", a => N `https://adservice.google.sr/adsid/integrator.${a}`],
        [".google.st", a => N `https://adservice.google.st/adsid/integrator.${a}`],
        [".google.com.sv", a => N `https://adservice.google.com.sv/adsid/integrator.${a}`],
        [".google.td", a => N `https://adservice.google.td/adsid/integrator.${a}`],
        [".google.tg", a => N `https://adservice.google.tg/adsid/integrator.${a}`],
        [".google.co.th", a => N `https://adservice.google.co.th/adsid/integrator.${a}`],
        [".google.com.tj", a => N `https://adservice.google.com.tj/adsid/integrator.${a}`],
        [".google.tl", a => N `https://adservice.google.tl/adsid/integrator.${a}`],
        [".google.tm", a => N `https://adservice.google.tm/adsid/integrator.${a}`],
        [".google.tn", a => N `https://adservice.google.tn/adsid/integrator.${a}`],
        [".google.to", a => N `https://adservice.google.to/adsid/integrator.${a}`],
        [".google.com.tr", a => N `https://adservice.google.com.tr/adsid/integrator.${a}`],
        [".google.tt", a => N `https://adservice.google.tt/adsid/integrator.${a}`],
        [".google.com.tw", a => N `https://adservice.google.com.tw/adsid/integrator.${a}`],
        [".google.co.tz", a => N `https://adservice.google.co.tz/adsid/integrator.${a}`],
        [".google.com.ua", a => N `https://adservice.google.com.ua/adsid/integrator.${a}`],
        [".google.co.ug", a => N `https://adservice.google.co.ug/adsid/integrator.${a}`],
        [".google.co.uk", a => N `https://adservice.google.co.uk/adsid/integrator.${a}`],
        [".google.com.uy", a => N `https://adservice.google.com.uy/adsid/integrator.${a}`],
        [".google.co.uz", a => N `https://adservice.google.co.uz/adsid/integrator.${a}`],
        [".google.com.vc", a => N `https://adservice.google.com.vc/adsid/integrator.${a}`],
        [".google.co.ve", a => N `https://adservice.google.co.ve/adsid/integrator.${a}`],
        [".google.vg", a => N `https://adservice.google.vg/adsid/integrator.${a}`],
        [".google.co.vi", a => N `https://adservice.google.co.vi/adsid/integrator.${a}`],
        [".google.com.vn", a => N `https://adservice.google.com.vn/adsid/integrator.${a}`],
        [".google.vu", a => N `https://adservice.google.vu/adsid/integrator.${a}`],
        [".google.ws", a => N `https://adservice.google.ws/adsid/integrator.${a}`],
        [".google.rs", a => N `https://adservice.google.rs/adsid/integrator.${a}`],
        [".google.co.za", a => N `https://adservice.google.co.za/adsid/integrator.${a}`],
        [".google.co.zm", a => N `https://adservice.google.co.zm/adsid/integrator.${a}`],
        [".google.co.zw", a => N `https://adservice.google.co.zw/adsid/integrator.${a}`],
        [".google.cat", a => N `https://adservice.google.cat/adsid/integrator.${a}`]
    ].map(([a, b]) => [a, {
        json: b("json"),
        js: b("js"),
        ["sync.js"]: b("sync.js")
    }]));

    function EB(a, b, c) {
        const d = Mf("LINK", a);
        try {
            d.rel = "preload", d.href = b instanceof Mc ? Pc(b).toString() : b instanceof Wc ? Xc(b) : Xc(dd(b))
        } catch (e) {
            return
        }
        d.as = "script";
        c && d.setAttribute("nonce", c);
        if (a = a.getElementsByTagName("head")[0]) try {
            a.appendChild(d)
        } catch (e) {}
    };
    let FB = () => t,
        GB = t;
    const IB = a => {
        const b = new Map([
            ["domain", t.location.hostname]
        ]);
        HB[3] >= va() && b.set("adsid", HB[1]);
        return Ng(DB.get(a).js, b)
    };
    let HB, JB;
    const KB = () => {
        GB = FB();
        HB = GB.googleToken = GB.googleToken || {};
        const a = va();
        HB[1] && HB[3] > a && 0 < HB[2] || (HB[1] = "", HB[2] = -1, HB[3] = -1, HB[4] = "", HB[6] = "");
        JB = GB.googleIMState = GB.googleIMState || {};
        DB.has(JB[1]) || (JB[1] = ".google.com");
        Array.isArray(JB[5]) || (JB[5] = []);
        "boolean" !== typeof JB[6] && (JB[6] = !1);
        Array.isArray(JB[7]) || (JB[7] = []);
        "number" !== typeof JB[8] && (JB[8] = 0)
    };
    var LB = a => {
        KB();
        DB.has(a) && (JB[1] = a)
    };
    const MB = {
        cc: () => 0 < JB[8],
        Ae: () => {
            JB[8]++
        },
        Be: () => {
            0 < JB[8] && JB[8]--
        },
        Ce: () => {
            JB[8] = 0
        },
        wi: () => !1,
        Jc: () => JB[5],
        Bc: a => {
            try {
                a()
            } catch (b) {
                t.setTimeout(() => {
                    throw b;
                }, 0)
            }
        },
        $c: () => {
            if (!MB.cc()) {
                var a = t.document,
                    b = e => {
                        e = IB(e);
                        a: {
                            try {
                                var f = Ze();
                                break a
                            } catch (g) {}
                            f = void 0
                        }
                        EB(a, e.toString(), f);
                        f = Mf("SCRIPT", a);
                        f.type = "text/javascript";
                        f.onerror = () => t.processGoogleToken({}, 2);
                        me(f, e);
                        try {
                            (a.head || a.body || a.documentElement).appendChild(f), MB.Ae()
                        } catch (g) {}
                    },
                    c = JB[1];
                b(c);
                ".google.com" != c && b(".google.com");
                var d = {
                    newToken: "FBT"
                };
                t.setTimeout(() => t.processGoogleToken(d, 1), 1E3)
            }
        }
    };

    function NB(a) {
        KB();
        const b = GB.googleToken[5] || 0;
        a && (0 != b || HB[3] >= va() ? MB.Bc(a) : (MB.Jc().push(a), MB.$c()));
        HB[3] >= va() && HB[2] >= va() || MB.$c()
    }
    var PB = a => {
        t.processGoogleToken = t.processGoogleToken || ((b, c) => OB(b, c));
        NB(a)
    };
    const OB = (a = {}, b = 0) => {
        var c = a.newToken || "",
            d = "NT" == c,
            e = parseInt(a.freshLifetimeSecs || "", 10),
            f = parseInt(a.validLifetimeSecs || "", 10);
        const g = a["1p_jar"] || "";
        a = a.pucrd || "";
        KB();
        1 == b ? MB.Ce() : MB.Be();
        var h = GB.googleToken = GB.googleToken || {},
            l = 0 == b && c && "string" === typeof c && !d && "number" === typeof e && 0 < e && "number" === typeof f && 0 < f && "string" === typeof g;
        d = d && !MB.cc() && (!(HB[3] >= va()) || "NT" == HB[1]);
        var k = !(HB[3] >= va()) && 0 != b;
        if (l || d || k) d = va(), e = d + 1E3 * e, f = d + 1E3 * f, 1E-5 > Math.random() && Ig(t, "https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr" +
            `&err=${b}`), h[5] = b, h[1] = c, h[2] = e, h[3] = f, h[4] = g, h[6] = a, KB();
        if (l || !MB.cc()) {
            b = MB.Jc();
            for (c = 0; c < b.length; c++) MB.Bc(b[c]);
            b.length = 0
        }
    };
    const QB = new Map([
            ["navigate", 1],
            ["reload", 2],
            ["back_forward", 3],
            ["prerender", 4]
        ]),
        RB = new Map([
            [0, 1],
            [1, 2],
            [2, 3]
        ]);

    function SB(a) {
        var b, c, d, e, f, g;
        try {
            const h = null === (c = null === (b = a.performance) || void 0 === b ? void 0 : b.getEntriesByType("navigation")) || void 0 === c ? void 0 : c[0];
            if (null === h || void 0 === h ? 0 : h.type) return null !== (d = QB.get(h.type)) && void 0 !== d ? d : 0
        } catch (h) {}
        return null !== (g = RB.get(null === (f = null === (e = a.performance) || void 0 === e ? void 0 : e.navigation) || void 0 === f ? void 0 : f.type)) && void 0 !== g ? g : 0
    };
    var TB = {
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
    mi(jn).l(en.j, en.defaultValue);

    function UB() {
        const a = window.navigator.userAgent,
            b = /Chrome/.test(a);
        return /Android/.test(a) && b
    }

    function VB(a = window) {
        return !a.PeriodicSyncManager
    }

    function WB(a, b, c) {
        a = a.goog_tt_state_map;
        let d, e = [];
        b && (d = null == a ? void 0 : a.get(TB.issuerOrigin)) && e.push(d);
        c && (d = null == a ? void 0 : a.get(Y.issuerOrigin)) && e.push(d);
        return e
    }

    function XB(a) {
        return a.some(b => b.hasRedemptionRecord)
    }

    function YB(a, b, c) {
        return b || ".google.ch" === c || "function" === typeof a.__tcfapi
    }

    function ZB(a, b) {
        a = a.filter(c => c.hasRedemptionRecord).map(c => c.issuerOrigin);
        if (0 == a.length) return null;
        a = {
            type: "send-redemption-record",
            issuers: a,
            refreshPolicy: "none",
            signRequestData: X(gn) ? "omit" : "include",
            includeTimestampHeader: !0,
            additionalSignedHeaders: ["sec-time", "Sec-Redemption-Record"]
        };
        !X(gn) && b && 0 < Object.keys(b).length && (a.additionalSigningData = Ib(JSON.stringify(b)));
        return a
    }

    function $B(a, b, c) {
        let d;
        const e = null == (d = window.goog_tt_state_map) ? void 0 : d.get(a);
        e && (e.state = b, void 0 != c && (e.hasRedemptionRecord = c))
    }

    function aC() {
        const a = `${TB.issuerOrigin}${TB.redemptionPath}`,
            b = {
                keepalive: !0,
                trustToken: {
                    type: "token-redemption",
                    issuer: TB.issuerOrigin,
                    refreshPolicy: "none"
                }
            };
        $B(TB.issuerOrigin, 2);
        return window.fetch(a, b).then(c => {
            if (!c.ok) throw Error(`${c.status}: Network response was not ok!`);
            $B(TB.issuerOrigin, 6, !0)
        }).catch(c => {
            c && "NoModificationAllowedError" === c.name ? $B(TB.issuerOrigin, 6, !0) : $B(TB.issuerOrigin, 5)
        })
    }

    function bC() {
        const a = `${TB.issuerOrigin}${TB.issuancePath}`;
        $B(TB.issuerOrigin, 8);
        return window.fetch(a, {
            keepalive: !0,
            trustToken: {
                type: "token-request"
            }
        }).then(b => {
            if (!b.ok) throw Error(`${b.status}: Network response was not ok!`);
            $B(TB.issuerOrigin, 10);
            return aC()
        }).catch(b => {
            if (b && "NoModificationAllowedError" === b.name) return $B(TB.issuerOrigin, 10), aC();
            $B(TB.issuerOrigin, 9)
        })
    }

    function cC() {
        $B(TB.issuerOrigin, 13);
        return document.hasTrustToken(TB.issuerOrigin).then(a => a ? aC() : bC())
    }

    function dC() {
        $B(Y.issuerOrigin, 13);
        if (window.Promise) {
            var a = document.hasTrustToken(Y.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }));
            const b = `${Y.issuerOrigin}${Y.redemptionPath}`,
                c = {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "none"
                    }
                };
            $B(Y.issuerOrigin, 16);
            a = a.then(e => window.fetch(b, c).then(f => {
                if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                $B(Y.issuerOrigin, 18, !0)
            }).catch(f => {
                if (f && "NoModificationAllowedError" === f.name) $B(Y.issuerOrigin,
                    18, !0);
                else {
                    if (e) return window.Promise.reject({
                        state: 17,
                        error: f
                    });
                    $B(Y.issuerOrigin, 17)
                }
            })).then(() => document.hasTrustToken(Y.issuerOrigin).then(e => e).catch(e => window.Promise.reject({
                state: 19,
                error: e
            }))).then(e => {
                const f = `${Y.issuerOrigin}${Y.getStatePath}`;
                $B(Y.issuerOrigin, 20);
                return window.fetch(`${f}?ht=${e}`, {
                    trustToken: {
                        type: "send-redemption-record",
                        issuers: [Y.issuerOrigin]
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    $B(Y.issuerOrigin, 22);
                    return g.text().then(h =>
                        JSON.parse(h))
                }).catch(g => window.Promise.reject({
                    state: 21,
                    error: g
                }))
            });
            const d = og(window);
            return a.then(e => {
                const f = `${Y.issuerOrigin}${Y.issuancePath}`;
                return e && e.srqt && e.cs ? ($B(Y.issuerOrigin, 23), window.fetch(`${f}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-request"
                    }
                }).then(g => {
                    if (!g.ok) throw Error(`${g.status}: Network response was not ok!`);
                    $B(Y.issuerOrigin, 25);
                    return e
                }).catch(g => window.Promise.reject({
                    state: 24,
                    error: g
                }))) : e
            }).then(e => {
                if (e && e.srdt && e.cs) return $B(Y.issuerOrigin,
                    26), window.fetch(`${b}?cs=${e.cs}&correlator=${d}`, {
                    keepalive: !0,
                    trustToken: {
                        type: "token-redemption",
                        refreshPolicy: "refresh"
                    }
                }).then(f => {
                    if (!f.ok) throw Error(`${f.status}: Network response was not ok!`);
                    $B(Y.issuerOrigin, 28, !0)
                }).catch(f => window.Promise.reject({
                    state: 27,
                    error: f
                }))
            }).then(() => {
                $B(Y.issuerOrigin, 29)
            }).catch(e => {
                if (e instanceof Object && e.hasOwnProperty("state") && e.hasOwnProperty("error"))
                    if ("number" === typeof e.state && e.error instanceof Error) {
                        $B(Y.issuerOrigin, e.state);
                        const f = kn(dn);
                        Math.random() <= f && Kg({
                            state: e.state,
                            err: e.error.toString()
                        }, "dtt_err")
                    } else throw Error(e);
                else throw e;
            })
        }
    }

    function eC(a) {
        if (document.hasTrustToken && !X(bn) && a.l) {
            var b = window.goog_tt_promise_map;
            if (b && b instanceof Map) {
                var c = [];
                if (a.j.some(d => d.issuerOrigin === TB.issuerOrigin)) {
                    let d = b.get(TB.issuerOrigin);
                    d || (d = cC(), b.set(TB.issuerOrigin, d));
                    c.push(d)
                }
                a.j.some(d => d.issuerOrigin === Y.issuerOrigin) && (a = b.get(Y.issuerOrigin), a || (a = dC(), b.set(Y.issuerOrigin, a)), c.push(a));
                if (0 < c.length && window.Promise && window.Promise.all) return window.Promise.all(c)
            }
        }
    }
    var fC = class extends Dn {
        constructor(a, b, c) {
            super();
            this.l = a;
            this.j = [];
            b && UB() && this.j.push(TB);
            c && this.j.push(Y);
            if (document.hasTrustToken && !X(bn)) {
                const d = new Map;
                this.j.forEach(e => {
                    d.set(e.issuerOrigin, {
                        issuerOrigin: e.issuerOrigin,
                        state: this.l ? 1 : 12,
                        hasRedemptionRecord: !1
                    })
                });
                window.goog_tt_state_map = window.goog_tt_state_map && window.goog_tt_state_map instanceof Map ? new Map([...d, ...window.goog_tt_state_map]) : d;
                window.goog_tt_promise_map && window.goog_tt_promise_map instanceof Map || (window.goog_tt_promise_map =
                    new Map)
            }
        }
    };

    function gC(a) {
        var b;
        if (a = null === (b = a.navigator) || void 0 === b ? void 0 : b.userActivation) {
            var c = 0;
            if (null === a || void 0 === a ? 0 : a.hasBeenActive) c |= 1;
            if (null === a || void 0 === a ? 0 : a.isActive) c |= 2;
            return c
        }
    };
    const hC = /[+, ]/;
    var kC = (a, b) => {
            const c = a.F;
            var d = Q().document,
                e = {},
                f = Q(),
                g;
            var h = vg(Q());
            var l = Bn(h);
            var k = g = zn(Q(), d, c.google_ad_width, c.google_ad_height);
            l = l.kc;
            var m = Q();
            m = m.top == m ? 0 : Hf(m.top) ? 1 : 2;
            let n = 4;
            k || 1 != m ? k || 2 != m ? k && 1 == m ? n = 7 : k && 2 == m && (n = 8) : n = 6 : n = 5;
            l && (n |= 16);
            k = "" + n;
            l = Cn();
            m = !!c.google_page_url;
            e.google_iframing = k;
            0 != l && (e.google_iframing_environment = l);
            if (!m && "ad.yieldmanager.com" == d.domain) {
                for (k = d.URL.substring(d.URL.lastIndexOf("http")); - 1 < k.indexOf("%");) try {
                    k = decodeURIComponent(k)
                } catch (r) {
                    break
                }
                c.google_page_url = k;
                m = !!k
            }
            m ? (e.google_page_url = c.google_page_url, e.google_page_location = (g ? d.referrer : d.URL) || "EMPTY") : (g && Hf(f.top) && d.referrer && f.top.document.referrer === d.referrer ? e.google_page_url = f.top.document.URL : e.google_page_url = g ? d.referrer : d.URL, e.google_page_location = null);
            if (d.URL === e.google_page_url) try {
                var q = Math.round(Date.parse(d.lastModified) / 1E3) || null
            } catch (r) {
                q = null
            } else q = null;
            e.google_last_modified_time = q;
            d = h == h.top ? h.document.referrer : (d = Dg()) && d.referrer || "";
            e.google_referrer_url = d;
            An(e, c);
            e =
                c.google_page_location || c.google_page_url;
            "EMPTY" == e && (e = c.google_page_url);
            e ? (e = e.toString(), 0 == e.indexOf("http://") ? e = e.substring(7, e.length) : 0 == e.indexOf("https://") && (e = e.substring(8, e.length)), d = e.indexOf("/"), -1 == d && (d = e.length), e = e.substring(0, d).split("."), d = !1, 3 <= e.length && (d = e[e.length - 3] in mB), 2 <= e.length && (d = d || e[e.length - 2] in mB), e = d) : e = !1;
            e = e ? "pagead2.googlesyndication.com" : "googleads.g.doubleclick.net";
            b = iC(a, b);
            d = a.F;
            f = d.google_ad_channel;
            q = "/pagead/ads?";
            "ca-pub-6219811747049371" ===
            d.google_ad_client && jC.test(f) && (q = "/pagead/lopri?");
            a = eh(b, `https://${e}${q}` + (bc(a.V, 9) && c.google_debug_params ? c.google_debug_params : ""));
            return c.google_ad_url = a
        },
        lC = a => encodeURIComponent("RS-" + a.google_reactive_sra_index + "-") + "&" + dh({
            adk: a.google_ad_unit_key,
            client: a.google_ad_client,
            fa: a.google_reactive_ad_format
        }),
        mC = a => {
            try {
                if (a.parentNode) return a.parentNode
            } catch (c) {
                return null
            }
            if (9 === a.nodeType) a: {
                try {
                    const c = uf(a);
                    if (c) {
                        const d = c.frameElement;
                        if (d && Hf(c.parent)) {
                            var b = d;
                            break a
                        }
                    }
                } catch (c) {}
                b =
                null
            }
            else b = null;
            return b
        },
        nC = (a, b) => {
            b.eid = Hy(a.pubWin);
            const c = a.F.google_loeid;
            "string" === typeof c && (a.j |= 4096, b.loeid = c)
        },
        oC = (a, b) => {
            a = (a = Kf(a.pubWin)) && a.document ? sn(a.document, a) : new cf(-12245933, -12245933);
            b.scr_x = Math.round(a.x);
            b.scr_y = Math.round(a.y)
        };
    const pC = a => {
        try {
            const b = t.top.location.hash;
            if (b) {
                const c = b.match(a);
                return c && c[1] || ""
            }
        } catch (b) {}
        return ""
    };
    var qC = a => {
            const b = Ih();
            b && (a.debug_experiment_id = b);
            a.creatives = pC(/\b(?:creatives)=([\d,]+)/);
            a.adgroups = pC(/\b(?:adgroups)=([\d,]+)/);
            a.adgroups && (a.adtest = "on", a.disable_budget_throttling = !0, a.use_budget_filtering = !1, a.retrieve_only = !0, a.disable_fcap = !0)
        },
        rC = (a, b, c) => {
            const d = a.F;
            var e = a.pubWin,
                f = a.K,
                g = vg(window);
            b.ref = d.google_referrer_url;
            b.loc = d.google_page_location;
            var h;
            (h = Dg(e)) && ka(h.data) && "string" === typeof h.data.type ? (h = h.data.type.toLowerCase(), h = "doubleclick" == h || "adsense" == h ? null :
                h) : h = null;
            h && (b.apn = h.substr(0, 10));
            g = Bn(g);
            b.url || b.loc || !g.url || (b.url = g.url, g.kc || (b.usrc = 1));
            h = d.google_trust_token_additional_signing_data || {};
            h.url = b.url;
            d.google_trust_token_additional_signing_data = h;
            g.url != (b.loc || b.url) && (b.top = g.url);
            0 < kn(am) && a.Va && (b.etu = a.Va);
            0 <= a.B && (b.eae = a.B);
            (c = nz(d, f, f ? Hn(c, f) : null)) && (b.fc = c);
            if (!qh(d)) {
                c = a.pubWin.document;
                g = "";
                if (c.documentMode && (h = (new of (c)).createElement("IFRAME"), h.frameBorder = "0", h.style.height = 0, h.style.width = 0, h.style.position = "absolute",
                        c.body)) {
                    c.body.appendChild(h);
                    try {
                        const R = h.contentWindow.document;
                        R.open();
                        R.write(vd(Jd));
                        R.close();
                        g += R.documentMode
                    } catch (R) {}
                    c.body.removeChild(h)
                }
                b.docm = g
            }
            let l, k, m, n, q, r, v, x, F;
            try {
                var A = e.screenX;
                l = e.screenY
            } catch (R) {}
            try {
                k = e.outerWidth, m = e.outerHeight
            } catch (R) {}
            try {
                n = e.innerWidth, q = e.innerHeight
            } catch (R) {}
            try {
                r = e.screenLeft, v = e.screenTop
            } catch (R) {}
            try {
                n = e.innerWidth, q = e.innerHeight
            } catch (R) {}
            try {
                x = e.screen.availWidth, F = e.screen.availTop
            } catch (R) {}
            b.brdim = [r, v, A, l, x, F, k, m, n, q].join();
            A = 0;
            void 0 === t.postMessage && (A |= 1);
            0 < A && (b.osd = A);
            b.vis = xA(e.document);
            A = a.Y;
            e = hz(d) ? fB : UA(new dB(e, A, null, {
                width: 0,
                height: 0
            }, d.google_ad_width, d.google_ad_height, !1));
            b.rsz = e.toString();
            b.abl = HA(e);
            if (!hz(d) && (e = rh(d))) {
                A = 0;
                a: {
                    try {
                        {
                            var E = d.google_async_iframe_id;
                            const R = Q().document;
                            if (E) var D = R.getElementById(E);
                            else {
                                var I = R.getElementsByTagName("script"),
                                    J = I[I.length - 1];
                                D = J && J.parentNode || null
                            }
                        }
                        if (E = D) {
                            D = [];
                            I = 0;
                            for (var Z = Date.now(); 100 >= ++I && 50 > Date.now() - Z && (E = mC(E));) 1 === E.nodeType && D.push(E);
                            var pa =
                                D;
                            b: {
                                for (Z = 0; Z < pa.length; Z++) {
                                    c: {
                                        var O = pa[Z];
                                        try {
                                            if (O.parentNode && 0 < O.offsetWidth && 0 < O.offsetHeight && O.style && "none" !== O.style.display && "hidden" !== O.style.visibility && (!O.style.opacity || 0 !== Number(O.style.opacity))) {
                                                const R = O.getBoundingClientRect();
                                                var ra = 0 < R.right && 0 < R.bottom;
                                                break c
                                            }
                                        } catch (R) {}
                                        ra = !1
                                    }
                                    if (!ra) {
                                        var nb = !1;
                                        break b
                                    }
                                }
                                nb = !0
                            }
                            if (nb) {
                                b: {
                                    const R = Date.now();nb = /^html|body$/i;ra = /^fixed/i;
                                    for (O = 0; O < pa.length && 50 > Date.now() - R; O++) {
                                        const ed = pa[O];
                                        if (!nb.test(ed.tagName) && ra.test(ed.style.position ||
                                                Ug(ed, "position"))) {
                                            var Yb = ed;
                                            break b
                                        }
                                    }
                                    Yb = null
                                }
                                break a
                            }
                        }
                    } catch (R) {}
                    Yb = null
                }
                Yb && Yb.offsetWidth * Yb.offsetHeight <= 4 * e.width * e.height && (A = 1);
                b.pfx = A
            }
            a: {
                if (.05 > Math.random() && f) try {
                    const R = f.document.getElementsByTagName("head")[0];
                    var Zb = R ? vB(R) : 0;
                    break a
                } catch (R) {}
                Zb = 0
            }
            f = Zb;
            0 !== f && (b.cms = f);
            d.google_lrv !== H(a.V, 2) && (b.alvm = d.google_lrv || "none")
        },
        sC = (a, b) => {
            let c = 0;
            a.location && a.location.ancestorOrigins ? c = a.location.ancestorOrigins.length : If(() => {
                c++;
                return !1
            }, !0, !0, a);
            c && (b.nhd = c)
        },
        tC = (a, b) => {
            const c =
                Xw(b, 8, {});
            b = Xw(b, 9, {});
            const d = a.google_ad_section,
                e = a.google_ad_format;
            a = a.google_ad_slot;
            e ? c[d] = c[d] ? c[d] + `,${e}` : e : a && (b[d] = b[d] ? b[d] + `,${a}` : a)
        },
        uC = (a, b, c) => {
            const d = a.F,
                e = a.F;
            b.dt = Ui;
            e.google_async_iframe_id && e.google_bpp && (b.bpp = e.google_bpp);
            var f;
            const g = Q();
            a: {
                const P = Q();
                try {
                    const M = P.performance;
                    if (M && M.timing && M.now) {
                        var h = M.timing.navigationStart + Math.round(M.now()) - M.timing.domLoading;
                        break a
                    }
                } catch (M) {}
                h = null
            }
            const l = h;
            (f = l ? Nz(l, g.Date.now() - Ui, 1E6) : null) && (b.bdt = f);
            b.idt = Nz(a.G, Ui);
            const k = a.F;
            b.shv = H(a.V, 2);
            a.Ia && (b.mjsv = a.Ia);
            "sa" == k.google_loader_used ? b.ptt = 5 : "aa" == k.google_loader_used && (b.ptt = 9);
            /^\w{1,3}$/.test(k.google_loader_used) && (b.saldr = k.google_loader_used);
            const m = Dg(a.pubWin);
            if (m) {
                b.is_amp = 1;
                const P = m || Dg();
                b.amp_v = P && P.mode ? +P.mode.version || null : null; {
                    const T = m || Dg();
                    if (T && T.container) {
                        const ha = T.container.split(","),
                            U = [];
                        for (let Xa = 0; Xa < ha.length; Xa++) U.push(Cg[ha[Xa]] || "x");
                        var n = U.join()
                    } else n = null
                }
                const M = n;
                M && (b.act = M)
            }
            Q() == window.top && (b.abxe = 1);
            if ("_gfp_a_" in
                a.pubWin) {
                const P = a.pubWin._gfp_a_;
                if ("boolean" !== typeof P) throw Error(`Illegal value of ${"_gfp_a_"}: ${P}`);
                if (P) {
                    const M = new Ly(a.pubWin),
                        T = Iy(M, "__gads", c);
                    T && (b.cookie = T);
                    if (X(Hm)) {
                        const ha = Iy(M, "__gpi", c);
                        ha && !ha.includes("&") && (b.gpic = ha)
                    }
                    X(Im) && "1" === Iy(M, "__gpi_opt_out", c) && (b.gpico = "1")
                }
            }
            const q = Uw(),
                r = Xw(q, 8, {}),
                v = d.google_ad_section;
            r[v] && (b.prev_fmts = r[v]);
            const x = Xw(q, 9, {});
            x[v] && (b.prev_slotnames = x[v].toLowerCase());
            tC(d, q);
            const F = Xw(q, 15, 0);
            0 < F && (b.nras = String(F)); {
                const P = Q(),
                    M =
                    Dg(P);
                if (M) {
                    {
                        const T = M || Dg();
                        if (T) {
                            let ha = T.pageViewId;
                            const U = T.clientId;
                            "string" === typeof U && (ha += U.replace(/\D/g, "").substr(0, 6));
                            var A = ha
                        } else A = null
                    }
                    var E = +A
                } else {
                    var D = vg(P),
                        I = D.google_global_correlator;
                    I || (D.google_global_correlator = I = 1 + Math.floor(Math.random() * Math.pow(2, 43)));
                    E = I
                }
            }
            b.correlator = Xw(q, 7, E);
            X(Jm) && (b.rume = 1);
            if (d.google_ad_channel) {
                const P = Xw(q, 10, {});
                let M = "";
                const T = d.google_ad_channel.split(hC);
                for (let ha = 0; ha < T.length; ha++) {
                    const U = T[ha];
                    P[U] ? M += U + "+" : P[U] = !0
                }
                b.pv_ch = M
            }
            if (d.google_ad_host_channel) {
                var J =
                    Xw(q, 11, []);
                const P = d.google_ad_host_channel.split("|");
                let M = -1;
                const T = [];
                for (let U = 0; U < P.length; U++) {
                    const Xa = P[U].split(hC);
                    J[U] || (J[U] = {});
                    let ub = "";
                    for (let wc = 0; wc < Xa.length; wc++) {
                        const Of = Xa[wc];
                        "" !== Of && (J[U][Of] ? ub += "+" + Of : J[U][Of] = !0)
                    }
                    ub = ub.slice(1);
                    T[U] = ub;
                    "" !== ub && (M = U)
                }
                let ha = "";
                if (-1 < M) {
                    for (let U = 0; U < M; U++) ha += T[U] + "|";
                    ha += T[M]
                }
                b.pv_h_ch = ha
            }
            b.frm = d.google_iframing;
            b.ife = d.google_iframing_environment;
            var Z = d.google_ad_client;
            try {
                const P = vg(window);
                let M = P.google_prev_clients;
                M || (M = P.google_prev_clients = {});
                if (Z in M) var pa = 1;
                else M[Z] = !0, pa = 2
            } catch (P) {
                pa = 0
            }
            b.pv = pa;
            const O = a.pubWin.document,
                ra = a.F;
            var nb = a.pubWin;
            var Yb = O.domain,
                Zb = (B(c, 5) && In(nb) ? nb.document.cookie : null) || "",
                R = a.pubWin.screen,
                ed = O.referrer,
                HC = gh();
            if (Dg()) var dq = Q().gaGlobal || {};
            else {
                var Wi = Math.round((new Date).getTime() / 1E3),
                    Xi = ra.google_analytics_domain_name,
                    Pf = "undefined" == typeof Xi ? yB("auto", Yb) : yB(Xi, Yb),
                    IC = -1 < Zb.indexOf("__utma=" + Pf + "."),
                    JC = -1 < Zb.indexOf("__utmb=" + Pf),
                    Yi;
                if (!(Yi = (Gg() || Q()).gaGlobal)) {
                    var KC = {};
                    Yi = (Gg() ||
                        Q()).gaGlobal = KC
                }
                var la = Yi,
                    eq = !1;
                if (IC) {
                    var Zi = Zb.split("__utma=" + Pf + ".")[1].split(";")[0].split(".");
                    JC ? la.sid = Zi[3] : la.sid || (la.sid = Wi + "");
                    la.vid = Zi[0] + "." + Zi[1];
                    la.from_cookie = !0
                } else {
                    la.sid || (la.sid = Wi + "");
                    if (!la.vid) {
                        eq = !0;
                        var LC = Math.round(2147483647 * Math.random()),
                            fq = HC;
                        let P, M;
                        var MC = wB.appName,
                            NC = wB.version,
                            OC = wB.language ? wB.language : wB.browserLanguage,
                            PC = wB.platform,
                            QC = wB.userAgent;
                        try {
                            var gq = wB.javaEnabled()
                        } catch (ha) {
                            gq = !1
                        }
                        let T = [MC, NC, OC, PC, QC, gq ? 1 : 0].join("");
                        R ? T += R.width + "x" + R.height +
                            R.colorDepth : t.java && t.java.awt && (M = t.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), T += M.screen.width + "x" + M.screen.height);
                        T = T + Zb + (ed || "");
                        for (P = T.length; 0 < fq;) T += fq-- ^ P++;
                        la.vid = (LC ^ xB(T) & 2147483647) + "." + Wi
                    }
                    X(Rm) && la.from_cookie || (la.from_cookie = !1)
                }
                if (!la.cid) {
                    b: {
                        var fd = Xi;
                        let M = 999;fd && (fd = 0 == fd.indexOf(".") ? fd.substr(1) : fd, M = fd.split(".").length);
                        let T, ha = 999;
                        const U = Zb.split(";");
                        for (let Xa = 0; Xa < U.length; Xa++) {
                            const ub = zB.exec(U[Xa]) || AB.exec(U[Xa]) || BB.exec(U[Xa]);
                            if (!ub) continue;
                            const wc =
                                ub[1] || 0;
                            if (wc == M) {
                                var hq = ub[2];
                                break b
                            }
                            wc < ha && (ha = wc, T = ub[2])
                        }
                        hq = T
                    }
                    const P = hq;eq && P && -1 != P.search(/^\d+\.\d+$/) ? (la.vid = P, la.from_cookie = !0) : P != la.vid && (la.cid = P)
                }
                la.dh = Pf;
                la.hid || (la.hid = Math.round(2147483647 * Math.random()));
                dq = la
            }
            const $d = dq;
            b.ga_vid = $d.vid;
            b.ga_sid = $d.sid;
            b.ga_hid = $d.hid;
            b.ga_fc = $d.from_cookie;
            b.ga_cid = $d.cid;
            b.ga_wpids = ra.google_analytics_uacct;
            sC(a.pubWin, b);
            const $i = d.google_ad_layout;
            $i && 0 <= Fz[$i] && (b.rplot = Fz[$i])
        };
    const vC = (a, b) => {
        a = a.A;
        var c;
        (c = null == a ? 0 : B(a, 6)) || (c = Uw(), c = Xw(c, 26, void 0));
        c && (b.npa = 1);
        a && (Wb(a, 3) && (b.gdpr = B(a, 3) ? "1" : "0"), (c = y(a, 1)) && (b.us_privacy = c), (c = y(a, 2)) && (b.gdpr_consent = c), (c = y(a, 4)) && (b.addtl_consent = c), (a = y(a, 7)) && (b.tcfe = a))
    };
    var wC = (a, b) => {
            const c = a.F;
            vC(a, b);
            Rf(tw, (d, e) => {
                b[d] = c[e]
            });
            hz(c) && (a = vz(c), b.fa = a);
            b.pi || null == c.google_ad_slot || (a = wp(c), null != a.j && (a = tk(a.j.value), b.pi = a))
        },
        xC = (a, b) => {
            var c = Fg() || qn(a.pubWin.top);
            c && (b.biw = c.width, b.bih = c.height);
            c = a.pubWin;
            c !== c.top && (a = qn(a.pubWin)) && (b.isw = a.width, b.ish = a.height)
        },
        yC = (a, b) => {
            var c = a.pubWin;
            null !== c && c != c.top ? (a = [c.document.URL], c.name && a.push(c.name), c = qn(c, !1), a.push(c.width.toString()), a.push(c.height.toString()), a = Tf(a.join(""))) : a = 0;
            0 !== a && (b.ifk = a)
        },
        zC = (a, b) => {
            (a = ax()[a.F.google_ad_client]) && (b.psts = a.join())
        },
        AC = (a, b, c) => {
            a: {
                c = Hn(c, a.pubWin);
                let d = -1;
                try {
                    c && (d = parseInt(c.getItem("goog_pem_mod"), 10))
                } catch (e) {
                    c = null;
                    break a
                }
                c = 0 <= d && 1E3 > d ? d : null
            }
            b.pem = c;X(xm) && (a = a.pubWin.tmod) && (b.tmod = a)
        },
        BC = (a, b) => {
            (a = a.pubWin.google_user_agent_client_hint) && (b.uach = Ib(a))
        },
        CC = (a, b) => {
            const c = X(VB(window) ? an : $m),
                d = X(cn);
            (a = WB(a.pubWin, c, d)) && 0 < a.length && (b.tt_state = Ib(JSON.stringify(a)))
        },
        DC = (a, b) => {
            if (a = a.F.google_floc) b.floc_id = a.id, b.floc_ver = a.version
        },
        EC = (a, b) => {
            try {
                const d = a.pubWin && a.pubWin.external && a.pubWin.external.getHostEnvironmentValue && a.pubWin.external.getHostEnvironmentValue.bind(a.pubWin.external);
                if (d) {
                    var c = parseInt(JSON.parse(d("os-mode"))["os-mode"], 10);
                    0 <= c && (b.wsm = c + 1)
                }
            } catch (d) {}
        };

    function FC(a, b) {
        0 <= a.F.google_ad_public_floor && (b.pubf = a.F.google_ad_public_floor);
        0 <= a.F.google_ad_private_floor && (b.pvtf = a.F.google_ad_private_floor)
    }

    function GC(a, b) {
        if (X(Am))
            if ((new Set(["e", "pg", "t", "ma"])).has(a.F.google_max_ad_content_rating)) b.macr = a.F.google_max_ad_content_rating;
            else throw Error(`Illegal value of ${"google_max_ad_content_rating"}: ${a.F.google_max_ad_content_rating}`);
    }
    var iC = (a, b) => {
        const c = {};
        wC(a, c);
        KB();
        c.adsid = HB[1];
        KB();
        c.pucrd = HB[6];
        BC(a, c);
        CC(a, c);
        DC(a, c);
        uC(a, c, b);
        jh(c);
        c.u_sd = rn(a.pubWin);
        var d;
        c.dmc = null == (d = a.pubWin.navigator) ? void 0 : d.deviceMemory;
        Bi(889, () => {
            if (null == a.K) c.adx = -12245933, c.ady = -12245933;
            else {
                var e = py(a.K, a.Y);
                c.adx && -12245933 != c.adx && c.ady && -12245933 != c.ady || (c.adx = Math.round(e.x), c.ady = Math.round(e.y));
                tn(a.Y) || (c.adx = -12245933, c.ady = -12245933, a.j |= 32768)
            }
        });
        xC(a, c);
        yC(a, c);
        oC(a, c);
        nC(a, c);
        a.D && (c.oid = a.D);
        zC(a, c);
        c.pvsid = og(a.pubWin,
            Ai);
        AC(a, c, b);
        EC(a, c);
        X(cm) && (c.uas = gC(a.pubWin));
        X(bm) && (d = SB(a.pubWin), 0 !== d && (c.nvt = d));
        a.C && (c.scar = a.C);
        rC(a, c, b);
        c.fu = a.j;
        c.bc = CB();
        KB();
        c.jar = HB[4];
        bc(a.V, 9) && qC(c);
        Ri() && (c.atl = !0);
        FC(a, c);
        a.F.google_max_ad_content_rating && GC(a, c);
        return c
    };
    const jC = /YtLoPri/;

    function RC(a) {
        Ai.Qb = b => {
            b.shv = String(a);
            b.mjsv = "m202201240101";
            b.eid = Hy(t)
        }
    }

    function SC(a) {
        RC(H(a, 2));
        a = bc(a, 6);
        $h(zy, bi);
        zy = a
    };

    function TC({
        Pd: a,
        Je: b
    }) {
        return a || ("dev" === b ? "dev" : "")
    };
    var UC = "undefined" === typeof sttc ? void 0 : sttc;

    function VC(a) {
        var b = Ai;
        try {
            return $h(a, ai), new ky(JSON.parse(a))
        } catch (c) {
            b.wa(838, c instanceof Error ? c : Error(String(c)), void 0, d => {
                d.jspb = String(a)
            })
        }
        return new ky
    };
    mi(jn).l(Mm.j, Mm.defaultValue);

    function WC(a, b, c, d) {
        var e, f, g, h, l, k, m;
        const n = new Fn;
        let q = "";
        const r = v => {
            try {
                const x = "object" === typeof v.data ? v.data : JSON.parse(v.data);
                q === x.paw_id && (ye(a, "message", r), x.error ? n.j(Error(x.error)) : n.resolve(d(x)))
            } catch (x) {}
        };
        return "function" === typeof(null === (e = a.gmaSdk) || void 0 === e ? void 0 : e.getQueryInfo) ? (K(a, "message", r), q = c(a.gmaSdk), n.promise) : "function" === typeof(null === (h = null === (g = null === (f = a.webkit) || void 0 === f ? void 0 : f.messageHandlers) || void 0 === g ? void 0 : g.getGmaQueryInfo) || void 0 === h ? void 0 :
            h.postMessage) || "function" === typeof(null === (m = null === (k = null === (l = a.webkit) || void 0 === l ? void 0 : l.messageHandlers) || void 0 === k ? void 0 : k.getGmaSig) || void 0 === m ? void 0 : m.postMessage) ? (q = String(Math.floor(2147483647 * Qf())), K(a, "message", r), b(a.webkit.messageHandlers, q), n.promise) : null
    }

    function XC(a) {
        return WC(a, (b, c) => {
            var d;
            return void(null !== (d = b.getGmaQueryInfo) && void 0 !== d ? d : b.getGmaSig).postMessage(c)
        }, b => b.getQueryInfo(), b => b.signal)
    };

    function YC(a) {
        if (a.j) return a.j;
        a.j = gg(a.l, "__uspapiLocator");
        return a.j
    }

    function ZC(a) {
        var b;
        return "function" === typeof(null === (b = a.l) || void 0 === b ? void 0 : b.__uspapi) || null != YC(a)
    }

    function $C(a, b) {
        var c;
        if ("function" === typeof(null === (c = a.l) || void 0 === c ? void 0 : c.__uspapi)) a = a.l.__uspapi, a("getUSPData", 1, b);
        else if (YC(a)) {
            aD(a);
            const d = ++a.D;
            a.C[d] = b;
            a.j && a.j.postMessage({
                __uspapiCall: {
                    command: "getUSPData",
                    version: 1,
                    callId: d
                }
            }, "*")
        }
    }

    function bD(a, b) {
        let c = {};
        if (ZC(a)) {
            var d = se(() => b(c));
            $C(a, (e, f) => {
                f && (c = e);
                d()
            });
            setTimeout(d, 500)
        } else b(c)
    }

    function aD(a) {
        a.A || (a.A = b => {
            var c;
            try {
                let e = {};
                "string" === typeof b.data ? e = JSON.parse(b.data) : e = b.data;
                var d = e.__uspapiReturn;
                null === (c = a.C) || void 0 === c ? void 0 : c[d.callId](d.returnValue, d.success)
            } catch (e) {}
        }, K(a.l, "message", a.A))
    }
    var cD = class extends Dn {
        constructor(a) {
            super();
            this.l = a;
            this.j = null;
            this.C = {};
            this.D = 0;
            this.A = null
        }
        B() {
            this.C = {};
            this.A && (ye(this.l, "message", this.A), delete this.A);
            delete this.C;
            delete this.l;
            delete this.j;
            super.B()
        }
    };
    var dD = class extends w {
        constructor(a) {
            super(a)
        }
    };
    var fD = class extends w {
            constructor(a) {
                super(a, -1, eD)
            }
        },
        eD = [1, 2];
    var gD = class extends w {
        constructor(a) {
            super(a)
        }
    };
    var hD = class extends w {
        constructor(a) {
            super(a)
        }
    };

    function iD(a) {
        a.D || (a.j || (a.j = a.l.googlefc ? a.l : gg(a.l, "googlefcPresent")), a.D = !0);
        return !!a.j
    }

    function jD(a) {
        a.A || (a.A = b => {
            try {
                const c = lc(hD, b.data.__fciReturn);
                (0, a.C[y(c, 1)])(c)
            } catch (c) {}
        }, K(a.l, "message", a.A))
    }

    function kD(a, b, c) {
        if (iD(a))
            if (a.j === a.l) a = a.j.googlefc || (a.j.googlefc = {}), a.__fci = a.__fci || [], a.__fci.push(b, d => {
                c(lc(hD, d))
            });
            else {
                jD(a);
                const d = a.G++;
                a.C[d] = c;
                a.j.postMessage({
                    __fciCall: {
                        command: b,
                        callId: d
                    }
                }, "*")
            }
    }

    function lD(a, b) {
        return new Promise(c => {
            kD(a, b, c)
        })
    }
    var mD = class extends Dn {
            constructor(a) {
                super();
                this.l = a;
                this.A = this.j = null;
                this.C = {};
                this.G = 0;
                this.D = !1
            }
        },
        nD = (a, b, c, d) => {
            if (!b) return Promise.resolve(null);
            const e = C(b, dD, 3);
            b = C(b, gD, 2);
            return e && b && 1 === y(b, 1) && 2 === y(e, 1) ? lD(a, "getM25Consent").then(f => {
                var g = C(f, fD, 4);
                if (g) {
                    if (f = d, c) {
                        const h = Xb(g, 1);
                        h && h.includes(c) && (f = !1);
                        (g = Xb(g, 2)) && g.includes(c) && (f = !0)
                    }
                } else f = null;
                return f
            }) : Promise.resolve(null)
        };
    const oD = (a, b) => {
        try {
            var c, d;
            const l = void 0 === bc(b, 6) ? !0 : bc(b, 6);
            a: switch (ac(b, 4, 0)) {
                case 1:
                    var e = "pt";
                    break a;
                case 2:
                    e = "cr";
                    break a;
                default:
                    e = ""
            }
            var f = new Ke(Ie(ac(b, 2, 0)), H(b, 3), e),
                g = null !== (d = null === (c = C(b, He, 5)) || void 0 === c ? void 0 : H(c, 1)) && void 0 !== d ? d : "";
            f.$a = g;
            f.j = l;
            f.win = a;
            var h = f.build();
            Ce(h)
        } catch (l) {}
    };

    function pD(a, b) {
        a.goog_sdr_l || (Object.defineProperty(a, "goog_sdr_l", {
            value: !0
        }), "complete" === a.document.readyState ? oD(a, b) : K(a, "load", () => void oD(a, b)))
    };

    function qD(a) {
        var b, c;
        try {
            return (null !== (c = null === (b = a.top) || void 0 === b ? void 0 : b.frames) && void 0 !== c ? c : {}).google_ads_top_frame
        } catch (d) {}
        return null
    }

    function rD(a) {
        const b = RegExp("^https?://[^/#?]+/?$");
        return !!a && !b.test(a)
    }

    function sD(a) {
        if (a === a.top || Hf(a.top)) return Promise.resolve({
            status: 4
        });
        const b = qD(a);
        if (!b) return Promise.resolve({
            status: 2
        });
        if (a.parent === a.top && rD(a.document.referrer)) return Promise.resolve({
            status: 3
        });
        const c = new Fn;
        a = new MessageChannel;
        a.port1.onmessage = d => {
            "__goog_top_url_resp" === d.data.msgType && c.resolve({
                Va: d.data.topUrl,
                status: d.data.topUrl ? 0 : 1
            })
        };
        b.postMessage({
            msgType: "__goog_top_url_req"
        }, "*", [a.port2]);
        return c.promise
    };

    function tD(a, b) {
        const c = a.document.getElementById(b.google_async_iframe_id + "_anchor");
        a = a.document.getElementById(b.google_async_iframe_id + "_expand");
        if (null == c || null == a) throw Error("no_ins");
        return {
            Y: c,
            ca: a
        }
    }
    async function uD({
        V: a,
        aa: b,
        Ia: c,
        slot: d
    }) {
        const e = d.vars,
            {
                Y: f,
                ca: g
            } = tD(d.pubWin, d.vars),
            h = Kf(d.pubWin),
            l = new my({
                K: h,
                pubWin: d.pubWin,
                F: e,
                V: a,
                aa: b,
                Ia: c,
                Y: f,
                ca: g
            });
        l.G = Date.now();
        Ti(1, [l.F]);
        try {
            await vD(l)
        } catch (k) {
            if (!Di(159, k)) throw k;
        }
        Bi(639, () => {
            {
                var k = l.F;
                const n = l.K;
                if (n && 1 === k.google_responsive_auto_format && !0 === k.google_full_width_responsive_allowed) {
                    var m;
                    (m = (m = n.document.getElementById(k.google_async_iframe_id)) ? Cf(m, "INS", "adsbygoogle") : null) ? (k = new Mz(n, m, k), k.l = t.setInterval(ta(k.G, k),
                        500), k.G(), k = !0) : k = !1
                } else k = !1
            }
            return k
        });
        Bi(914, () => {
            h && by(h, d.vars, a, d.vars.google_ad_client)
        });
        return l
    }

    function vD(a) {
        if (/_sdo/.test(a.F.google_ad_format)) return Promise.resolve();
        var b = Uw(),
            c = Xw(b, 22, !1);
        c || Zw(b, 22, !0);
        c || (c = a.F, b = a.V, mi(zi).j(13), mi(zi).j(11), c = rw(c), (b = H(b, 10)) && c.push(b));
        b = Uw();
        (c = Xw(b, 23, !1)) || Zw(b, 23, !0);
        if (!c) {
            if (X(Gm)) {
                var d = a.F.google_ad_client;
                b = a.V;
                if (13 === fc(b, ly)) var e = C(nc(b, gy, 13, ly), hx, 2);
                else {
                    var f;
                    b: if (c = null != (f = null == (e = nc(b, iy, 14, ly)) ? void 0 : Xb(e, 1)) ? f : [], e = [d], ja(c) && ja(e) && c.length == e.length) {
                        f = c.length;
                        for (d = 0; d < f; d++)
                            if (c[d] !== e[d]) {
                                e = !1;
                                break b
                            }
                        e = !0
                    } else e = !1;
                    e = e ? C(C(nc(b, iy, 14, ly), gy, 2), hx, 2) : new hx
                }
            } else e = C(a.V, hx, 5) || new hx;
            e = new ix(a.pubWin, a.F.google_ad_client, e, bc(a.V, 6));
            f = X(Em);
            e.l = f;
            b = C(e.C, jl, 1);
            if (e.l && (f = e.j, e.B && !zt(b) ? (c = new Sw, c = z(c, 1, 1)) : c = null, c)) {
                c = kc(c);
                try {
                    f.localStorage.setItem("google_auto_fc_cmp_setting", c)
                } catch (g) {}
            }
            b && At(new Bt(e.j, new go(e.j, e.A), b, new hs(e.j)))
        }
        e = !Dg() && !Oa();
        return !e || e && !wD(a) ? xD(a) : Promise.resolve()
    }

    function yD(a, b, c = !1) {
        b = py(a.K, b);
        const d = Fg() || qn(a.pubWin.top);
        if (!b || -12245933 == b.y || -12245933 == d.width || -12245933 == d.height || !d.height) return 0;
        let e = 0;
        try {
            const f = a.pubWin.top;
            e = sn(f.document, f).y
        } catch (f) {
            return 0
        }
        a = e + d.height;
        return b.y < e ? c ? 0 : (e - b.y) / d.height : b.y > a ? (b.y - a) / d.height : 0
    }

    function wD(a) {
        return zD(a) || AD(a)
    }

    function zD(a) {
        const b = a.F;
        if (!b.google_pause_ad_requests) return !1;
        const c = t.setTimeout(() => {
                S("abg:cmppar", {
                    client: a.F.google_ad_client,
                    url: a.F.google_page_url
                })
            }, 1E4),
            d = Ci(450, () => {
                b.google_pause_ad_requests = !1;
                t.clearTimeout(c);
                a.pubWin.removeEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
                wD(a) || xD(a)
            });
        a.pubWin.addEventListener("adsbygoogle-pub-unpause-ad-requests-event", d);
        return !0
    }

    function AD(a) {
        const b = a.pubWin.document,
            c = BD();
        if (0 > c.hidden && 0 > c.visible) return !1;
        const d = a.Y,
            e = yA(b);
        if (!e) return !1;
        if (!zA(b)) return CD(a, c.visible, d);
        const f = 3 === xA(b);
        if (yD(a, d) <= c.hidden && !f) return !1;
        let g = Ci(332, () => {
            !zA(b) && g && (ye(b, e, g), CD(a, c.visible, d) || xD(a), g = null)
        });
        return K(b, e, g)
    }

    function BD() {
        const a = {
            hidden: 0,
            visible: 3
        };
        t.IntersectionObserver || (a.visible = -1);
        Ef() && (a.visible *= 2);
        return a
    }

    function CD(a, b, c) {
        if (!c || 0 > b) return !1;
        var d = a.F;
        if (!pj(d.google_reactive_ad_format) && (hz(d) || d.google_reactive_ads_config) || !tn(c) || yD(a, c) <= b) return !1;
        var e = Uw();
        const f = Xw(e, 8, {});
        e = Xw(e, 9, {});
        d = d.google_ad_section || d.google_ad_region || "";
        const g = !!a.pubWin.google_apltlad;
        if (!f[d] && !e[d] && !g) return !1;
        b = new t.IntersectionObserver((h, l) => {
            Ya(h, k => {
                0 >= k.intersectionRatio || (l.unobserve(k.target), Bi(294, () => {
                    xD(a)
                }))
            })
        }, {
            rootMargin: 100 * b + "%"
        });
        a.H = b;
        b.observe(c);
        return !0
    }
    async function xD(a) {
        Bi(326, () => {
            if (1 === ih(a.F)) {
                var c = X(Zm),
                    d = c || X(Ym),
                    e = a.pubWin;
                if (d && e === a.K) {
                    var f = new Ni;
                    d = new Oi;
                    f.setCorrelator(og(a.pubWin));
                    var g = Hy(a.pubWin);
                    dc(f, 5, g, "");
                    pc(f, 2);
                    gc(d, 1, f);
                    g = new Mi;
                    g = oc(g, 10, !0);
                    f = X(Nm);
                    g = oc(g, 8, f);
                    f = X(Om);
                    g = oc(g, 9, f);
                    f = X(Um);
                    g = oc(g, 7, f);
                    f = X(Tm);
                    g = oc(g, 13, f);
                    f = X(Vm);
                    g = oc(g, 14, f);
                    gc(d, 2, g);
                    e.google_rum_config = d.toJSON();
                    Lf(e.document, ce(bc(a.V, 9) && c ? a.aa.ye : a.aa.ze))
                } else Qh()
            }
        });
        try {
            await DD(a)
        } catch (c) {
            Di(827, c)
        }
        a.F.google_ad_channel = ED(a, a.F.google_ad_channel);
        a.F.google_tag_partner = FD(a, a.F.google_tag_partner);
        GD(a);
        const b = a.F.google_start_time;
        "number" === typeof b && (Ui = b, a.F.google_start_time = null);
        oy(a);
        HD(a);
        hz(a.F) && (uy() && (a.F.google_adtest = a.F.google_adtest || "on"), a.F.google_pgb_reactive = a.F.google_pgb_reactive || 3);
        ID(a.K);
        return JD(a)
    }

    function HD(a) {
        a.K && (lz(a.K, a.aa.Sd), jz(a.K.location) && uz(a.K, {
            enable_page_level_ads: {
                pltais: !0
            },
            google_ad_client: a.F.google_ad_client
        }))
    }

    function ED(a, b) {
        return (b ? [b] : []).concat(qw(a.F).ad_channels || []).join("+")
    }

    function FD(a, b) {
        return (b ? [b] : []).concat(qw(a.F).tag_partners || []).join("+")
    }

    function KD(a, b, c, d) {
        c.src = Oz(a);
        const e = d.pubWin.document;
        a = Q() == window.top;
        c = LD(c);
        a && d.l.push(Hg(d.pubWin, c));
        MD(d.Y, c);
        X(Vl) && t.setTimeout(Ci(644, () => {
            const f = e.getElementById(b);
            qg(f, () => {
                t.setTimeout(() => {
                    for (const g of d.l) g();
                    d.l.length = 0
                }, 200)
            })
        }), 0);
        return Promise.resolve(c)
    }

    function LD(a) {
        const b = Mf("IFRAME");
        Rf(a, (c, d) => {
            null != c && b.setAttribute(d, c)
        });
        return b
    }

    function ND(a, b, c) {
        return 9 == a.F.google_reactive_ad_format && Cf(a.ca, null, "fsi_container", void 0) ? (a.Y.appendChild(b), Promise.resolve(b)) : sz(a.aa.Zc, 525, d => {
            a.Y.appendChild(b);
            d.createAdSlot(a.K, a.F, b, a.ca.parentElement, Hn(c, a.pubWin));
            return b
        })
    }

    function OD(a, b, c) {
        pD(a.pubWin, oc(Ee(pc(pc(De(new Fe, Ge(new He, String(og(a.pubWin)))), 4), 2), H(a.V, 2)), 6, !0));
        const d = a.K;
        a.F.google_acr && a.F.google_acr(b);
        K(b, "load", () => {
            b && b.setAttribute("data-load-complete", !0);
            const f = d ? qw(d).enable_overlap_observer || !1 : !1;
            (a.F.ovlp || X(Dm) || f) && d && d === a.pubWin && PD(d, a, a.ca, b)
        });
        var e = f => {
            f && a.l.push(() => {
                f.ea()
            })
        };
        QD(a, b);
        X(Im) && RD(a, b);
        !d || hz(a.F) && !wz(a.F) || (e(new cA(a, b)), e(new lB(d, b, a.F)), e(new gA(a, b)), e(new $z(a, b)), e(d.IntersectionObserver ? null : new bA(d,
            b, a.Y)));
        d && (e(new Uz(d, b)), a.l.push(Gz(d, a.F)), mi(Lz).init(d), a.l.push(Qz(d, a.ca, b)));
        b && b.setAttribute("data-google-container-id", c);
        c = a.F.iaaso;
        if (null != c) {
            e = a.ca;
            const f = e.parentElement;
            (f && oo.test(f.className) ? f : e).setAttribute("data-auto-ad-size", c)
        }
        c = a.ca;
        c.setAttribute("tabindex", "0");
        c.setAttribute("title", "Advertisement");
        c.setAttribute("aria-label", "Advertisement");
        SD(a)
    }

    function QD(a, b) {
        const c = a.pubWin,
            d = a.F.google_ad_client,
            e = ax();
        let f = null;
        const g = Gi(c, "pvt", (h, l) => {
            "string" === typeof h.token && l.source === b.contentWindow && (f = h.token, g(), e[d] = e[d] || [], e[d].push(f), 100 < e[d].length && e[d].shift())
        });
        a.l.push(g)
    }

    function TD(a, b) {
        var c = Iy(a, "__gpi_opt_out", b.A);
        c && (c = Qe(Pe(Oe(Ne(new Re, c), 2147483647), "/"), Gf(b.F.google_page_url.match(Ff)[3] || null)), Jy(a, "__gpi_opt_out", c, b.A))
    }

    function RD(a, b) {
        const c = Gi(a.pubWin, "gpi-uoo", (d, e) => {
            if (e.source === b.contentWindow) {
                e = Qe(Pe(Oe(Ne(new Re, d.userOptOut ? "1" : "0"), 2147483647), "/"), Gf(a.F.google_page_url.match(Ff)[3] || null));
                var f = new Ly(a.pubWin);
                Jy(f, "__gpi_opt_out", e, a.A);
                if (d.userOptOut || d.clearAdsData) Ky(f, "__gads", a.A), Ky(f, "__gpi", a.A)
            }
        });
        a.l.push(c)
    }

    function SD(a) {
        const b = Dg(a.pubWin);
        if (b)
            if ("AMP-STICKY-AD" === b.container) {
                const c = d => {
                    "fill_sticky" === d.data && b.renderStart && b.renderStart()
                };
                K(a.pubWin, "message", Ci(616, c));
                a.l.push(() => {
                    ye(a.pubWin, "message", c)
                })
            } else b.renderStart && b.renderStart()
    }

    function PD(a, b, c, d) {
        mA(new vA(a, void 0), c).then(e => {
            Ti(8, [e]);
            return e
        }).then(e => {
            const f = c.parentElement;
            (f && oo.test(f.className) ? f : c).setAttribute("data-overlap-observer-io", e.isOverlappingOrOutsideViewport);
            return e
        }).then(e => {
            const f = b.F.armr || "",
                g = e.executionTime || "",
                h = null == b.F.iaaso ? "" : Number(b.F.iaaso),
                l = Number(e.isOverlappingOrOutsideViewport),
                k = $a(e.entries, F => `${F.overlapType}:${F.overlapDepth}:${F.overlapDetectionPoint}`),
                m = Number(e.overlappedArea.toFixed(2)),
                n = d.dataset.googleQueryId ||
                "",
                q = m * e.targetRect.width * e.targetRect.height,
                r = e.scrollPosition.scrollX + "," + e.scrollPosition.scrollY,
                v = kh(e.target),
                x = [e.targetRect.left, e.targetRect.top, e.targetRect.right, e.targetRect.bottom].join();
            e = e.viewportSize.width + "x" + e.viewportSize.height;
            S("ovlp", {
                adf: b.F.google_ad_dom_fingerprint,
                armr: f,
                client: b.F.google_ad_client,
                eid: Hy(b.F),
                et: g,
                fwrattr: b.F.google_full_width_responsive,
                iaaso: h,
                io: l,
                saldr: b.F.google_loader_used,
                oa: m,
                oe: k.join(","),
                qid: n,
                rafmt: b.F.google_responsive_auto_format,
                roa: q,
                slot: b.F.google_ad_slot,
                sp: r,
                tgt: v,
                tr: x,
                url: b.F.google_page_url,
                vp: e
            }, 1)
        }).catch(e => {
            Ti(8, ["Error:", e.message, c]);
            S("ovlp-err", {
                err: e.message
            }, 1)
        })
    }

    function UD(a, b) {
        b.allow = b.allow && 0 < b.allow.length ? b.allow + ("; " + a) : a
    }

    function VD(a, b, c, d) {
        var e = a.F;
        const f = e.google_async_iframe_id,
            g = e.google_ad_width,
            h = e.google_ad_height;
        var l = xz(e);
        const k = {
            id: f,
            name: f
        };
        l || (k.style = "left:0;position:absolute;top:0;border:0;" + `width:${g}px;` + `height:${h}px;`);
        var m = eg();
        if (m["allow-top-navigation-by-user-activation"] && m["allow-popups-to-escape-sandbox"]) {
            m = b;
            if (b = "fsb=" + encodeURIComponent("1")) {
                var n = m.indexOf("#");
                0 > n && (n = m.length);
                var q = m.indexOf("?");
                if (0 > q || q > n) {
                    q = n;
                    var r = ""
                } else r = m.substring(q + 1, n);
                m = [m.substr(0, q), r, m.substr(n)];
                n = m[1];
                m[1] = b ? n ? n + "&" + b : b : n;
                b = m[0] + (m[1] ? "?" + m[1] : "") + m[2]
            } else b = m;
            k.sandbox = dg().join(" ")
        }
        X(km) && !1 === e.google_video_play_muted && UD("autoplay", k);
        n = b;
        b = WD(b);
        q = c ? b.replace(/&ea=[^&]*/, "") + "&ea=0" : b;
        null != g && (k.width = String(g));
        null != h && (k.height = String(h));
        k.frameborder = "0";
        k.marginwidth = "0";
        k.marginheight = "0";
        k.vspace = "0";
        k.hspace = "0";
        k.allowtransparency = "true";
        k.scrolling = "no";
        X(zm) || (k.allowfullscreen = "true");
        m = "";
        if (c) {
            m = 10;
            for (q = ""; 0 < m--;) q += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62 *
                Math.random()));
            m = q;
            b = Fi(b, m);
            Fi(n, m)
        } else b = q;
        e.dash && (k.srcdoc = e.dash);
        n = X(VB(window) ? an : $m);
        q = X(cn);
        n = WB(a.pubWin, n, q);
        q = e.google_trust_token_additional_signing_data;
        n && XB(n) && (n = ZB(n, q)) && (k.trustToken = JSON.stringify(n));
        var v;
        n = (n = window.navigator.userAgent.match(/Chrome\/([0-9]+)/)) && 92 > Number(n[1]) ? "conversion-measurement" : "attribution-reporting";
        (null === (v = a.pubWin.document.featurePolicy) || void 0 === v ? 0 : v.features().includes(n)) && UD(n, k);
        l ? (k.src = b, l = LD(k), d = ND(a, l, d)) : d = KD(b, f, k, a);
        c && (c =
            a.aa.Oe, e = {
                id: f,
                url: b,
                width: g,
                height: h,
                Cc: m,
                we: a.pubWin,
                Bd: f,
                oi: "google_expandable_ad_slot" + ih(e),
                ge: c.toString(),
                ec: a.pubWin
            }, e = !e.id || !e.url || 0 >= e.width || 0 >= e.height || !e.Cc || !e.ec ? void 0 : Gi(e.ec, "ct", ua(Ji, e, c)), e && a.l.push(e));
        return d
    }

    function WD(a) {
        var b = u("Edge") ? 4E3 : 8100;
        var c = a;
        c.length > b && (c = c.substring(0, b - 8), c = c.replace(/%\w?$/, ""), c = c.replace(/&[^=]*=?$/, ""), c += "&trunc=1");
        if (c !== a) {
            b -= 8;
            let d = a.lastIndexOf("&", b); - 1 === d && (d = a.lastIndexOf("?", b));
            S("trn", {
                ol: a.length,
                tr: -1 === d ? "" : a.substring(d + 1),
                url: a
            }, .01)
        }
        return c
    }
    async function XD(a) {
        var b = a.F,
            c = a.pubWin,
            d = a.A;
        X(Hm) && B(d, 5) && TD(new Ly(a.pubWin), a);
        var e = Hn(d, a.pubWin);
        if (!B(d, 5) && X(Wl)) return Promise.resolve();
        B(d, 5) && Py(d, a.pubWin, a.F.google_ad_client);
        var f = a.F.google_reactive_ads_config;
        f && (rz(a.K, f), Cz(f, a, Hn(d)), f = f.page_level_pubvars, ka(f) && Ec(a.F, f));
        B(d, 5) && await YD();
        if (!YB(a.pubWin, Ay(), H(a.V, 8))) {
            const g = kn(hn);
            f = c.google_trust_token_operation_promise;
            0 < g && f && await Promise.race([f, new Promise(h => void setTimeout(() => {
                h(void 0)
            }, g))])
        }
        f = "";
        xz(b) ?
            (f = a.aa.Pe.toString() + "#" + lC(b), tC(b, Uw()), ZD(b)) : (5 == b.google_pgb_reactive && b.google_reactive_ads_config || !iz(b) || gz(c, b, e)) && ZD(b) && (f = kC(a, d));
        Ti(2, [b, f]);
        if (!f) return Promise.resolve();
        b.google_async_iframe_id || hh(c);
        e = ih(b);
        b = a.pubWin === a.K ? "a!" + e.toString(36) : `${e.toString(36)}.${hf()}`;
        c = 0 < yD(a, a.Y, !0);
        e = {
            ifi: e,
            uci: b
        };
        c && (c = Uw(), e.btvi = Xw(c, 21, 1), $w(c, 21));
        f = eh(e, f);
        d = VD(a, f, 0 === a.B, d);
        f = WD(f);
        a.F.rpe && eB(a.pubWin, a.Y, {
            height: a.F.google_ad_height,
            uc: "force",
            yc: !0,
            cd: !0,
            mb: a.F.google_ad_client
        });
        d = await d;
        try {
            OD(a, d, b)
        } catch (g) {
            Di(223, g)
        }
    }

    function YD() {
        return (Ra() ? 0 <= La(Va(), 11) : Qa() && 0 <= La(Va(), 65)) ? new Promise(a => {
            PB(a.bind(null, !0))
        }) : (PB(null), Promise.resolve(!1))
    }

    function $D(a) {
        const b = new cD(a);
        return new Promise(c => {
            bD(b, d => {
                d && "string" === typeof d.uspString ? c(d.uspString) : c(null)
            })
        })
    }

    function aE(a) {
        a = new co(a, -1);
        return Xn(a) ? bo(a) : Promise.resolve(null)
    }

    function bE(a) {
        var b = fg(t.top, "googlefcPresent");
        t.googlefc && !b && S("adsense_fc_has_namespace_but_no_iframes", {
            publisherId: a
        }, 1)
    }

    function cE(a) {
        return iD(a) ? lD(a, "loaded") : Promise.resolve(null)
    }

    function dE(a, b) {
        const c = b.Ke,
            d = b.uspString;
        b = b.De;
        const e = new dx;
        if (c) {
            var f = cx(e, Vn(c));
            f = z(f, 2, c.tcString);
            f = z(f, 4, c.addtlConsent || "");
            z(f, 7, c.internalErrorState);
            void 0 !== c.gdprApplies && z(e, 3, c.gdprApplies)
        } else cx(e, !0);
        d && z(e, 1, d);
        null !== b && z(e, 6, b);
        a.A = e
    }
    async function eE(a) {
        var b = kn(Zl);
        if (0 >= b) return Promise.resolve(void 0);
        const c = Jh(),
            d = Bi(809, () => XC(a));
        if (d) try {
            const e = await Promise.race([d.then(f => {
                S("adsense_paw", {
                    time: Jh() - c
                });
                return f
            }), tg(b, "0")]);
            return (null === e || void 0 === e ? void 0 : e.length) > kn(Yl) ? (Di(809, Error(`ML:${e.length}`)), "0") : e
        } catch (e) {
            return Di(809, e), "0"
        }
    }

    function fE(a) {
        var b = kn(am);
        if (0 >= b) return Promise.resolve(void 0);
        const c = Jh();
        return Promise.race([Bi(832, () => sD(a)), tg(b)]).then(d => {
            var e;
            const f = null !== (e = null === d || void 0 === d ? void 0 : d.status) && void 0 !== e ? e : 100;
            S("afc_etu", {
                etus: f,
                sig: Jh() - c,
                tms: b
            });
            return null === d || void 0 === d ? void 0 : d.Va
        })
    }

    function gE(a) {
        var b = kn(fn);
        return Promise.race([Ci(779, () => {
            const c = X(VB(window) ? an : $m),
                d = X(cn);
            return eC(new fC(a, c, d))
        })(), tg(b)])
    }
    async function hE(a) {
        FB = Q;
        LB(H(a.V, 8));
        px(a.pubWin);
        bE(a.F.google_ad_client);
        var b = new mD(a.pubWin),
            c = await cE(b);
        b = [aE(a.pubWin), $D(a.pubWin), nD(b, c, a.F.google_ad_client, bc(a.V, 6))];
        b = await Promise.all(b);
        dE(a, {
            Ke: b[0],
            uspString: b[1],
            De: b[2]
        });
        YB(a.pubWin, Ay(), H(a.V, 8)) && await gE(!!B(a.A, 5));
        b = eE(a.pubWin);
        c = Bi(868, () => fE(a.pubWin));
        a.C = await b || "";
        a.Va = await c || "";
        await XD(a)
    }

    function JD(a) {
        var b = a.pubWin.document,
            c = a.F;
        const d = c.google_ad_width,
            e = c.google_ad_height;
        let f = 0;
        try {
            !1 === c.google_allow_expandable_ads && (f |= 1);
            if (!b.body || isNaN(c.google_ad_height) || isNaN(c.google_ad_width) || !/^http/.test(b.location.protocol)) f |= 2;
            a: {
                c = navigator;
                const l = c.userAgent,
                    k = c.platform,
                    m = /WebKit\/(\d+)/,
                    n = /rv:(\d+\.\d+)/,
                    q = /rv:1\.8([^.]|\.0)/;
                if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(k) && !/^Opera/.test(l)) {
                    const r = (m.exec(l) || [0, 0])[1],
                        v = (n.exec(l) || [0, 0])[1];
                    if (/Win/.test(k) && /Trident/.test(l) &&
                        11 <= b.documentMode || !r && "Gecko" === c.product && 27 <= v && !q.test(l) || 536 <= r) {
                        var g = !0;
                        break a
                    }
                }
                g = !1
            }
            g || (f |= 4);
            zn(a.pubWin, a.pubWin.document, d, e) && (f |= 2)
        } catch (l) {
            f |= 8
        }
        a.B = f;
        0 === a.B || (a.F.google_allow_expandable_ads = !1);
        var h;
        vg(a.pubWin) != a.pubWin && (a.j |= 4);
        3 === xA(a.pubWin.document) && (a.j |= 32);
        if (b = a.K) b = a.K, b = !(V(b).scrollWidth <= V(b).clientWidth);
        b && (a.j |= 1024);
        if (null === (h = a.pubWin.Prototype) || void 0 === h ? 0 : h.Version) a.j |= 16384;
        a.F.google_loader_features_used && (a.j |= a.F.google_loader_features_used);
        a.D =
            2;
        return hE(a)
    }

    function MD(a, b) {
        a.style.visibility = "visible";
        for (var c; c = a.firstChild;) a.removeChild(c);
        a.appendChild(b)
    }

    function ZD(a) {
        const b = Uw(),
            c = a.google_ad_section;
        hz(a) && $w(b, 15);
        if (qh(a)) {
            if (100 < $w(b, 5)) return !1
        } else if (100 < $w(b, 6) - Xw(b, 15, 0) && "" == c) return !1;
        return !0
    }

    function GD(a) {
        const b = a.K;
        if (b && !qw(b).ads_density_stats_processed && !Dg(b) && (qw(b).ads_density_stats_processed = !0, X(Cm) || .01 > Qf())) {
            const c = () => {
                if (b) {
                    var d = Bv(wv(b), a.F.google_ad_client, b.location.hostname, Hy(a.F).split(","));
                    S("ama_stats", d, 1)
                }
            };
            rg(b, () => {
                t.setTimeout(c, 1E3)
            })
        }
    }

    function ID(a) {
        a && !qw(a).host_pinged_back && (qw(a).host_pinged_back = !0, S("abg_host", {
            host: a.location.host
        }, .01))
    }
    async function DD(a) {
        const b = a.pubWin.document;
        if ("function" === typeof b.interestCohort && X(Km)) {
            const c = kn(Lm),
                d = await Promise.race([(async () => {
                    var e;
                    const f = performance.now(),
                        g = await (null === (e = b.interestCohort) || void 0 === e ? void 0 : e.call(b));
                    S("flocapi", {
                        time: performance.now() - f
                    }, 1);
                    return g
                })(), new Promise(e => void setTimeout(() => {
                    e(void 0)
                }, c))]);
            d && (a.F.google_floc = d)
        }
    };
    (function(a, b, c) {
        Bi(843, () => {
            var d, e = t.google_sl_win || t;
            if (!e.google_sa_impl) {
                var f = VC(a);
                SC(f);
                Ti(16, [3, f.toJSON()]);
                var g = TC({
                        Pd: b,
                        Je: H(f, 2)
                    }),
                    h = c(g, f);
                e.google_sa_impl = async l => uD({
                    V: f,
                    aa: h,
                    Ia: g,
                    slot: l
                });
                Gy(Dy(e));
                null === (d = e.google_process_slots) || void 0 === d ? void 0 : d.call(e);
                e = (t.Prototype || {}).Version;
                null != e && S("prtpjs", {
                    version: e
                })
            }
        })
    })(UC, "m202201240101", function(a, b) {
        const c = 2012 < ac(b, 1, 0) ? `_fy${ac(b,1,0)}` : "",
            d = H(b, 3);
        b = H(b, 2);
        return {
            ze: N `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum${c}.js`,
            ye: N `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/rum_debug${c}.js`,
            Zc: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/reactive_library${c}.js`,
            Sd: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/debug_card_library${c}.js`,
            Oe: N `https://pagead2.googlesyndication.com/pagead/js/${b}/${d}/creativetoolset/xpc_expansion_embed.js`,
            Pe: N `https://googleads.g.doubleclick.net/pagead/html/${b}/${d}/zrt_lookup.html`,
            hb: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/slotcar_library${c}.js`,
            Ic: N `https://pagead2.googlesyndication.com/pagead/managed/js/adsense/${a}/gallerify${c}.js`
        }
    });
}).call(this, "[2019,\"r20220126\",\"r20110914\",null,[],null,null,\".google.com.np\",null,null,[],null,[null,[]],null,null,null,null,-1]");
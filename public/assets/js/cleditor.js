/* jQuery v1.7.2 jquery.com | jquery.org/license */
(function(a, b) {
    function cy(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView ||
            a.parentWindow : !1
    }

    function cu(a) {
        if (!cj[a]) {
            var b = c.body,
                d = f("<" + a + ">").appendTo(b),
                e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ck || (ck = c.createElement("iframe"), ck.frameBorder =
                    ck.width = ck.height = 0), b.appendChild(ck);
                if (!cl || !ck.createElement) {
                    cl = (ck.contentWindow || ck.contentDocument).document,
                        cl.write((f.support.boxModel ?
                                "<!doctype html>" : "") +
                            "<html><body>"), cl.close()
                }
                d = cl.createElement(a), cl.body.appendChild(d), e = f.css(
                    d, "display"), b.removeChild(ck)
            }
            cj[a] = e
        }
        return cj[a]
    }

    function ct(a, b) {
        var c = {};
        f.each(cp.concat.apply([], cp.slice(0, b)), function() {
            c[this] = a
        });
        return c
    }

    function cs() {
        cq = b
    }

    function cr() {
        setTimeout(cs, 0);
        return cq = f.now()
    }

    function ci() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {}
    }

    function ch() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {}
    }

    function cb(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes,
            e = {},
            g, h, i = d.length,
            j, k = d[0],
            l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1) {
                for (h in a.converters) {
                    typeof h == "string" && (e[h.toLowerCase()] = a.converters[
                        h])
                }
            }
            l = k, k = d[g];
            if (k === "*") {
                k = l
            } else {
                if (l !== "*" && l !== k) {
                    m = l + " " + k, n = e[m] || e["* " + k];
                    if (!n) {
                        p = b;
                        for (o in e) {
                            j = o.split(" ");
                            if (j[0] === l || j[0] === "*") {
                                p = e[j[1] + " " + k];
                                if (p) {
                                    o = e[o], o === !0 ? n = p : p ===
                                        !0 && (n = o);
                                    break
                                }
                            }
                        }
                    }!n && !p && f.error("No conversion from " + m.replace(
                        " ", " to ")), n !== !0 && (c = n ? n(c) :
                        p(o(c)))
                }
            }
        }
        return c
    }

    function ca(a, c, d) {
        var e = a.contents,
            f = a.dataTypes,
            g = a.responseFields,
            h, i, j, k;
        for (i in g) {
            i in d && (c[g[i]] = d[i])
        }
        while (f[0] === "*") {
            f.shift(), h === b && (h = a.mimeType || c.getResponseHeader(
                "content-type"))
        }
        if (h) {
            for (i in e) {
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                }
            }
        }
        if (f[0] in d) {
            j = f[0]
        } else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        } if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }

    function b_(a, b, c, d) {
        if (f.isArray(b)) {
            f.each(b, function(b, e) {
                c || bD.test(a) ? d(a, e) : b_(a + "[" + (
                        typeof e == "object" ? b : "") +
                    "]", e, c, d)
            })
        } else {
            if (!c && f.type(b) === "object") {
                for (var e in b) {
                    b_(a + "[" + e + "]", b[e], c, d)
                }
            } else {
                d(a, b)
            }
        }
    }

    function b$(a, c) {
        var d, e, g = f.ajaxSettings.flatOptions || {};
        for (d in c) {
            c[d] !== b && ((g[d] ? a : e || (e = {}))[d] = c[d])
        }
        e && f.extend(!0, a, e)
    }

    function bZ(a, c, d, e, f, g) {
        f = f || c.dataTypes[0], g = g || {}, g[f] = !0;
        var h = a[f],
            i = 0,
            j = h ? h.length : 0,
            k = a === bS,
            l;
        for (; i < j && (k || !l); i++) {
            l = h[i](c, d, e), typeof l == "string" && (!k || g[l] ? l =
                b : (c.dataTypes.unshift(l), l = bZ(a, c, d, e, l,
                    g)))
        }(k || !l) && !g["*"] && (l = bZ(a, c, d, e, "*", g));
        return l
    }

    function bY(a) {
        return function(b, c) {
            typeof b != "string" && (c = b, b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bO),
                    e = 0,
                    g = d.length,
                    h, i, j;
                for (; e < g; e++) {
                    h = d[e], j = /^\+/.test(h), j && (h = h.substr(
                        1) || "*"), i = a[h] = a[h] || [], i[j ?
                        "unshift" : "push"](c)
                }
            }
        }
    }

    function bB(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight,
            e = b === "width" ? 1 : 0,
            g = 4;
        if (d > 0) {
            if (c !== "border") {
                for (; e < g; e += 2) {
                    c || (d -= parseFloat(f.css(a, "padding" + bx[e])) ||
                        0), c === "margin" ? d += parseFloat(f.css(
                        a, c + bx[e])) || 0 : d -= parseFloat(f.css(
                        a, "border" + bx[e] + "Width")) || 0
                }
            }
            return d + "px"
        }
        d = by(a, b);
        if (d < 0 || d == null) {
            d = a.style[b]
        }
        if (bt.test(d)) {
            return d
        }
        d = parseFloat(d) || 0;
        if (c) {
            for (; e < g; e += 2) {
                d += parseFloat(f.css(a, "padding" + bx[e])) || 0, c !==
                    "padding" && (d += parseFloat(f.css(a, "border" +
                        bx[e] + "Width")) || 0), c === "margin" && (d +=
                        parseFloat(f.css(a, c + bx[e])) || 0)
            }
        }
        return d + "px"
    }

    function bo(a) {
        var b = c.createElement("div");
        bh.appendChild(b), b.innerHTML = a.outerHTML;
        return b.firstChild
    }

    function bn(a) {
        var b = (a.nodeName || "").toLowerCase();
        b === "input" ? bm(a) : b !== "script" && typeof a.getElementsByTagName !=
            "undefined" && f.grep(a.getElementsByTagName("input"), bm)
    }

    function bm(a) {
        if (a.type === "checkbox" || a.type === "radio") {
            a.defaultChecked = a.checked
        }
    }

    function bl(a) {
        return typeof a.getElementsByTagName != "undefined" ? a.getElementsByTagName(
            "*") : typeof a.querySelectorAll != "undefined" ? a.querySelectorAll(
            "*") : []
    }

    function bk(a, b) {
        var c;
        b.nodeType === 1 && (b.clearAttributes && b.clearAttributes(),
            b.mergeAttributes && b.mergeAttributes(a), c = b.nodeName
            .toLowerCase(), c === "object" ? b.outerHTML = a.outerHTML :
            c !== "input" || a.type !== "checkbox" && a.type !==
            "radio" ? c === "option" ? b.selected = a.defaultSelected :
            c === "input" || c === "textarea" ? b.defaultValue = a.defaultValue :
            c === "script" && b.text !== a.text && (b.text = a.text) :
            (a.checked && (b.defaultChecked = b.checked = a.checked),
                b.value !== a.value && (b.value = a.value)), b.removeAttribute(
                f.expando), b.removeAttribute("_submit_attached"),
            b.removeAttribute("_change_attached"))
    }

    function bj(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c, d, e, g = f._data(a),
                h = f._data(b, g),
                i = g.events;
            if (i) {
                delete h.handle, h.events = {};
                for (c in i) {
                    for (d = 0, e = i[c].length; d < e; d++) {
                        f.event.add(b, c, i[c][d])
                    }
                }
            }
            h.data && (h.data = f.extend({}, h.data))
        }
    }

    function bi(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[
            0] || a.appendChild(a.ownerDocument.createElement(
            "tbody")) : a
    }

    function U(a) {
        var b = V.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement) {
            while (b.length) {
                c.createElement(b.pop())
            }
        }
        return c
    }

    function T(a, b, c) {
        b = b || 0;
        if (f.isFunction(b)) {
            return f.grep(a, function(a, d) {
                var e = !!b.call(a, d, a);
                return e === c
            })
        }
        if (b.nodeType) {
            return f.grep(a, function(a, d) {
                return a === b === c
            })
        }
        if (typeof b == "string") {
            var d = f.grep(a, function(a) {
                return a.nodeType === 1
            });
            if (O.test(b)) {
                return f.filter(b, d, !c)
            }
            b = f.filter(b, d)
        }
        return f.grep(a, function(a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }

    function S(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }

    function K() {
        return !0
    }

    function J() {
        return !1
    }

    function n(a, b, c) {
        var d = b + "defer",
            e = b + "queue",
            g = b + "mark",
            h = f._data(a, d);
        h && (c === "queue" || !f._data(a, e)) && (c === "mark" || !f._data(
            a, g)) && setTimeout(function() {
            !f._data(a, e) && !f._data(a, g) && (f.removeData(a,
                d, !0), h.fire())
        }, 0)
    }

    function m(a) {
        for (var b in a) {
            if (b === "data" && f.isEmptyObject(a[b])) {
                continue
            }
            if (b !== "toJSON") {
                return !1
            }
        }
        return !0
    }

    function l(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(k, "-$1").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d ===
                        "null" ? null : f.isNumeric(d) ? +d : j.test(d) ?
                        f.parseJSON(d) : d
                } catch (g) {}
                f.data(a, c, d)
            } else {
                d = b
            }
        }
        return d
    }

    function h(a) {
        var b = g[a] = {},
            c, d;
        a = a.split(/\s+/);
        for (c = 0, d = a.length; c < d; c++) {
            b[a[c]] = !0
        }
        return b
    }
    var c = a.document,
        d = a.navigator,
        e = a.location,
        f = function() {
            function J() {
                if (!e.isReady) {
                    try {
                        c.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(J, 1);
                        return
                    }
                    e.ready()
                }
            }
            var e = function(a, b) {
                    return new e.fn.init(a, b, h)
                },
                f = a.jQuery,
                g = a.$,
                h, i = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
                j = /\S/,
                k = /^\s+/,
                l = /\s+$/,
                m = /^<(\w+)\s*\/?>(?:<\/\1>)?$/,
                n = /^[\],:{}\s]*$/,
                o = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
                p =
                /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
                q = /(?:^|:|,)(?:\s*\[)+/g,
                r = /(webkit)[ \/]([\w.]+)/,
                s = /(opera)(?:.*version)?[ \/]([\w.]+)/,
                t = /(msie) ([\w.]+)/,
                u = /(mozilla)(?:.*? rv:([\w.]+))?/,
                v = /-([a-z]|[0-9])/ig,
                w = /^-ms-/,
                x = function(a, b) {
                    return (b + "").toUpperCase()
                },
                y = d.userAgent,
                z, A, B, C = Object.prototype.toString,
                D = Object.prototype.hasOwnProperty,
                E = Array.prototype.push,
                F = Array.prototype.slice,
                G = String.prototype.trim,
                H = Array.prototype.indexOf,
                I = {};
            e.fn = e.prototype = {
                    constructor: e,
                    init: function(a, d, f) {
                        var g, h, j, k;
                        if (!a) {
                            return this
                        }
                        if (a.nodeType) {
                            this.context = this[0] = a, this.length = 1;
                            return this
                        }
                        if (a === "body" && !d && c.body) {
                            this.context = c, this[0] = c.body, this.selector =
                                a, this.length = 1;
                            return this
                        }
                        if (typeof a == "string") {
                            a.charAt(0) !== "<" || a.charAt(a.length -
                                1) !== ">" || a.length < 3 ? g = i.exec(
                                a) : g = [null, a, null];
                            if (g && (g[1] || !d)) {
                                if (g[1]) {
                                    d = d instanceof e ? d[0] : d, k =
                                        d ? d.ownerDocument || d : c, j =
                                        m.exec(a), j ? e.isPlainObject(
                                            d) ? (a = [c.createElement(
                                            j[1])], e.fn.attr.call(
                                            a, d, !0)) : a = [k.createElement(
                                            j[1])] : (j = e.buildFragment(
                                            [g[1]], [k]), a = (j.cacheable ?
                                            e.clone(j.fragment) : j
                                            .fragment).childNodes);
                                    return e.merge(this, a)
                                }
                                h = c.getElementById(g[2]);
                                if (h && h.parentNode) {
                                    if (h.id !== g[2]) {
                                        return f.find(a)
                                    }
                                    this.length = 1, this[0] = h
                                }
                                this.context = c, this.selector = a;
                                return this
                            }
                            return !d || d.jquery ? (d || f).find(a) :
                                this.constructor(d).find(a)
                        }
                        if (e.isFunction(a)) {
                            return f.ready(a)
                        }
                        a.selector !== b && (this.selector = a.selector,
                            this.context = a.context);
                        return e.makeArray(a, this)
                    },
                    selector: "",
                    jquery: "1.7.2",
                    length: 0,
                    size: function() {
                        return this.length
                    },
                    toArray: function() {
                        return F.call(this, 0)
                    },
                    get: function(a) {
                        return a == null ? this.toArray() : a < 0 ?
                            this[this.length + a] : this[a]
                    },
                    pushStack: function(a, b, c) {
                        var d = this.constructor();
                        e.isArray(a) ? E.apply(d, a) : e.merge(d, a), d
                            .prevObject = this, d.context = this.context,
                            b === "find" ? d.selector = this.selector +
                            (this.selector ? " " : "") + c : b && (d.selector =
                                this.selector + "." + b + "(" + c + ")"
                            );
                        return d
                    },
                    each: function(a, b) {
                        return e.each(this, a, b)
                    },
                    ready: function(a) {
                        e.bindReady(), A.add(a);
                        return this
                    },
                    eq: function(a) {
                        a = +a;
                        return a === -1 ? this.slice(a) : this.slice(a,
                            a + 1)
                    },
                    first: function() {
                        return this.eq(0)
                    },
                    last: function() {
                        return this.eq(-1)
                    },
                    slice: function() {
                        return this.pushStack(F.apply(this, arguments),
                            "slice", F.call(arguments).join(","))
                    },
                    map: function(a) {
                        return this.pushStack(e.map(this, function(b, c) {
                            return a.call(b, c, b)
                        }))
                    },
                    end: function() {
                        return this.prevObject || this.constructor(null)
                    },
                    push: E,
                    sort: [].sort,
                    splice: [].splice
                }, e.fn.init.prototype = e.fn, e.extend = e.fn.extend =
                function() {
                    var a, c, d, f, g, h, i = arguments[0] || {},
                        j = 1,
                        k = arguments.length,
                        l = !1;
                    typeof i == "boolean" && (l = i, i = arguments[1] || {},
                            j = 2), typeof i != "object" && !e.isFunction(i) &&
                        (i = {}), k === j && (i = this, --j);
                    for (; j < k; j++) {
                        if ((a = arguments[j]) != null) {
                            for (c in a) {
                                d = i[c], f = a[c];
                                if (i === f) {
                                    continue
                                }
                                l && f && (e.isPlainObject(f) || (g = e.isArray(
                                    f))) ? (g ? (g = !1, h = d && e.isArray(
                                    d) ? d : []) : h = d && e.isPlainObject(
                                    d) ? d : {}, i[c] = e.extend(l,
                                    h, f)) : f !== b && (i[c] = f)
                            }
                        }
                    }
                    return i
                }, e.extend({
                    noConflict: function(b) {
                        a.$ === e && (a.$ = g), b && a.jQuery === e &&
                            (a.jQuery = f);
                        return e
                    },
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function(a) {
                        a ? e.readyWait++ : e.ready(!0)
                    },
                    ready: function(a) {
                        if (a === !0 && !--e.readyWait || a !== !0 &&
                            !e.isReady) {
                            if (!c.body) {
                                return setTimeout(e.ready, 1)
                            }
                            e.isReady = !0;
                            if (a !== !0 && --e.readyWait > 0) {
                                return
                            }
                            A.fireWith(c, [e]), e.fn.trigger && e(c)
                                .trigger("ready").off("ready")
                        }
                    },
                    bindReady: function() {
                        if (!A) {
                            A = e.Callbacks("once memory");
                            if (c.readyState === "complete") {
                                return setTimeout(e.ready, 1)
                            }
                            if (c.addEventListener) {
                                c.addEventListener(
                                        "DOMContentLoaded", B, !1),
                                    a.addEventListener("load", e.ready, !
                                        1)
                            } else {
                                if (c.attachEvent) {
                                    c.attachEvent(
                                        "onreadystatechange", B
                                    ), a.attachEvent("onload",
                                        e.ready);
                                    var b = !1;
                                    try {
                                        b = a.frameElement == null
                                    } catch (d) {}
                                    c.documentElement.doScroll && b &&
                                        J()
                                }
                            }
                        }
                    },
                    isFunction: function(a) {
                        return e.type(a) === "function"
                    },
                    isArray: Array.isArray || function(a) {
                        return e.type(a) === "array"
                    },
                    isWindow: function(a) {
                        return a != null && a == a.window
                    },
                    isNumeric: function(a) {
                        return !isNaN(parseFloat(a)) && isFinite(a)
                    },
                    type: function(a) {
                        return a == null ? String(a) : I[C.call(a)] ||
                            "object"
                    },
                    isPlainObject: function(a) {
                        if (!a || e.type(a) !== "object" || a.nodeType ||
                            e.isWindow(a)) {
                            return !1
                        }
                        try {
                            if (a.constructor && !D.call(a,
                                "constructor") && !D.call(a.constructor
                                .prototype, "isPrototypeOf")) {
                                return !1
                            }
                        } catch (c) {
                            return !1
                        }
                        var d;
                        for (d in a) {}
                        return d === b || D.call(a, d)
                    },
                    isEmptyObject: function(a) {
                        for (var b in a) {
                            return !1
                        }
                        return !0
                    },
                    error: function(a) {
                        throw new Error(a)
                    },
                    parseJSON: function(b) {
                        if (typeof b != "string" || !b) {
                            return null
                        }
                        b = e.trim(b);
                        if (a.JSON && a.JSON.parse) {
                            return a.JSON.parse(b)
                        }
                        if (n.test(b.replace(o, "@").replace(p, "]")
                            .replace(q, ""))) {
                            return (new Function("return " + b))()
                        }
                        e.error("Invalid JSON: " + b)
                    },
                    parseXML: function(c) {
                        if (typeof c != "string" || !c) {
                            return null
                        }
                        var d, f;
                        try {
                            a.DOMParser ? (f = new DOMParser, d = f
                                .parseFromString(c, "text/xml")
                            ) : (d = new ActiveXObject(
                                    "Microsoft.XMLDOM"), d.async =
                                "false", d.loadXML(c))
                        } catch (g) {
                            d = b
                        }(!d || !d.documentElement || d.getElementsByTagName(
                            "parsererror").length) && e.error(
                            "Invalid XML: " + c);
                        return d
                    },
                    noop: function() {},
                    globalEval: function(b) {
                        b && j.test(b) && (a.execScript || function(
                            b) {
                            a.eval.call(a, b)
                        })(b)
                    },
                    camelCase: function(a) {
                        return a.replace(w, "ms-").replace(v, x)
                    },
                    nodeName: function(a, b) {
                        return a.nodeName && a.nodeName.toUpperCase() ===
                            b.toUpperCase()
                    },
                    each: function(a, c, d) {
                        var f, g = 0,
                            h = a.length,
                            i = h === b || e.isFunction(a);
                        if (d) {
                            if (i) {
                                for (f in a) {
                                    if (c.apply(a[f], d) === !1) {
                                        break
                                    }
                                }
                            } else {
                                for (; g < h;) {
                                    if (c.apply(a[g++], d) === !1) {
                                        break
                                    }
                                }
                            }
                        } else {
                            if (i) {
                                for (f in a) {
                                    if (c.call(a[f], f, a[f]) === !
                                        1) {
                                        break
                                    }
                                }
                            } else {
                                for (; g < h;) {
                                    if (c.call(a[g], g, a[g++]) ===
                                        !1) {
                                        break
                                    }
                                }
                            }
                        }
                        return a
                    },
                    trim: G ? function(a) {
                        return a == null ? "" : G.call(a)
                    } : function(a) {
                        return a == null ? "" : (a + "").replace(k,
                            "").replace(l, "")
                    },
                    makeArray: function(a, b) {
                        var c = b || [];
                        if (a != null) {
                            var d = e.type(a);
                            a.length == null || d === "string" || d ===
                                "function" || d === "regexp" || e.isWindow(
                                    a) ? E.call(c, a) : e.merge(c,
                                    a)
                        }
                        return c
                    },
                    inArray: function(a, b, c) {
                        var d;
                        if (b) {
                            if (H) {
                                return H.call(b, a, c)
                            }
                            d = b.length, c = c ? c < 0 ? Math.max(
                                0, d + c) : c : 0;
                            for (; c < d; c++) {
                                if (c in b && b[c] === a) {
                                    return c
                                }
                            }
                        }
                        return -1
                    },
                    merge: function(a, c) {
                        var d = a.length,
                            e = 0;
                        if (typeof c.length == "number") {
                            for (var f = c.length; e < f; e++) {
                                a[d++] = c[e]
                            }
                        } else {
                            while (c[e] !== b) {
                                a[d++] = c[e++]
                            }
                        }
                        a.length = d;
                        return a
                    },
                    grep: function(a, b, c) {
                        var d = [],
                            e;
                        c = !!c;
                        for (var f = 0, g = a.length; f < g; f++) {
                            e = !!b(a[f], f), c !== e && d.push(a[f])
                        }
                        return d
                    },
                    map: function(a, c, d) {
                        var f, g, h = [],
                            i = 0,
                            j = a.length,
                            k = a instanceof e || j !== b && typeof j ==
                            "number" && (j > 0 && a[0] && a[j - 1] ||
                                j === 0 || e.isArray(a));
                        if (k) {
                            for (; i < j; i++) {
                                f = c(a[i], i, d), f != null && (h[
                                    h.length] = f)
                            }
                        } else {
                            for (g in a) {
                                f = c(a[g], g, d), f != null && (h[
                                    h.length] = f)
                            }
                        }
                        return h.concat.apply([], h)
                    },
                    guid: 1,
                    proxy: function(a, c) {
                        if (typeof c == "string") {
                            var d = a[c];
                            c = a, a = d
                        }
                        if (!e.isFunction(a)) {
                            return b
                        }
                        var f = F.call(arguments, 2),
                            g = function() {
                                return a.apply(c, f.concat(F.call(
                                    arguments)))
                            };
                        g.guid = a.guid = a.guid || g.guid || e.guid++;
                        return g
                    },
                    access: function(a, c, d, f, g, h, i) {
                        var j, k = d == null,
                            l = 0,
                            m = a.length;
                        if (d && typeof d == "object") {
                            for (l in d) {
                                e.access(a, c, l, d[l], 1, h, f)
                            }
                            g = 1
                        } else {
                            if (f !== b) {
                                j = i === b && e.isFunction(f), k &&
                                    (j ? (j = c, c = function(a, b,
                                        c) {
                                        return j.call(e(a),
                                            c)
                                    }) : (c.call(a, f), c =
                                        null));
                                if (c) {
                                    for (; l < m; l++) {
                                        c(a[l], d, j ? f.call(a[l],
                                                l, c(a[l], d)) :
                                            f, i)
                                    }
                                }
                                g = 1
                            }
                        }
                        return g ? a : k ? c.call(a) : m ? c(a[0],
                            d) : h
                    },
                    now: function() {
                        return (new Date).getTime()
                    },
                    uaMatch: function(a) {
                        a = a.toLowerCase();
                        var b = r.exec(a) || s.exec(a) || t.exec(a) ||
                            a.indexOf("compatible") < 0 && u.exec(a) || [];
                        return {
                            browser: b[1] || "",
                            version: b[2] || "0"
                        }
                    },
                    sub: function() {
                        function a(b, c) {
                            return new a.fn.init(b, c)
                        }
                        e.extend(!0, a, this), a.superclass = this,
                            a.fn = a.prototype = this(), a.fn.constructor =
                            a, a.sub = this.sub, a.fn.init =
                            function(d, f) {
                                f && f instanceof e && !(f instanceof a) &&
                                    (f = a(f));
                                return e.fn.init.call(this, d, f, b)
                            }, a.fn.init.prototype = a.fn;
                        var b = a(c);
                        return a
                    },
                    browser: {}
                }), e.each(
                    "Boolean Number String Function Array Date RegExp Object"
                    .split(" "), function(a, b) {
                        I["[object " + b + "]"] = b.toLowerCase()
                    }), z = e.uaMatch(y), z.browser && (e.browser[z.browser] = !
                    0, e.browser.version = z.version), e.browser.webkit &&
                (e.browser.safari = !0), j.test(" ") && (k = /^[\s\xA0]+/,
                    l = /[\s\xA0]+$/), h = e(c), c.addEventListener ? B =
                function() {
                    c.removeEventListener("DOMContentLoaded", B, !1), e.ready()
                } : c.attachEvent && (B = function() {
                    c.readyState === "complete" && (c.detachEvent(
                        "onreadystatechange", B), e.ready())
                });
            return e
        }(),
        g = {};
    f.Callbacks = function(a) {
        a = a ? g[a] || h(a) : {};
        var c = [],
            d = [],
            e, i, j, k, l, m, n = function(b) {
                var d, e, g, h, i;
                for (d = 0, e = b.length; d < e; d++) {
                    g = b[d], h = f.type(g), h === "array" ? n(g) : h ===
                        "function" && (!a.unique || !p.has(g)) && c.push(
                            g)
                }
            },
            o = function(b, f) {
                f = f || [], e = !a.memory || [b, f], i = !0, j = !0, m =
                    k || 0, k = 0, l = c.length;
                for (; c && m < l; m++) {
                    if (c[m].apply(b, f) === !1 && a.stopOnFalse) {
                        e = !0;
                        break
                    }
                }
                j = !1, c && (a.once ? e === !0 ? p.disable() : c = [] :
                    d && d.length && (e = d.shift(), p.fireWith(e[0],
                        e[1])))
            },
            p = {
                add: function() {
                    if (c) {
                        var a = c.length;
                        n(arguments), j ? l = c.length : e && e !==
                            !0 && (k = a, o(e[0], e[1]))
                    }
                    return this
                },
                remove: function() {
                    if (c) {
                        var b = arguments,
                            d = 0,
                            e = b.length;
                        for (; d < e; d++) {
                            for (var f = 0; f < c.length; f++) {
                                if (b[d] === c[f]) {
                                    j && f <= l && (l--, f <= m &&
                                        m--), c.splice(f--, 1);
                                    if (a.unique) {
                                        break
                                    }
                                }
                            }
                        }
                    }
                    return this
                },
                has: function(a) {
                    if (c) {
                        var b = 0,
                            d = c.length;
                        for (; b < d; b++) {
                            if (a === c[b]) {
                                return !0
                            }
                        }
                    }
                    return !1
                },
                empty: function() {
                    c = [];
                    return this
                },
                disable: function() {
                    c = d = e = b;
                    return this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    d = b, (!e || e === !0) && p.disable();
                    return this
                },
                locked: function() {
                    return !d
                },
                fireWith: function(b, c) {
                    d && (j ? a.once || d.push([b, c]) : (!a.once ||
                        !e) && o(b, c));
                    return this
                },
                fire: function() {
                    p.fireWith(this, arguments);
                    return this
                },
                fired: function() {
                    return !!i
                }
            };
        return p
    };
    var i = [].slice;
    f.extend({
        Deferred: function(a) {
            var b = f.Callbacks("once memory"),
                c = f.Callbacks("once memory"),
                d = f.Callbacks("memory"),
                e = "pending",
                g = {
                    resolve: b,
                    reject: c,
                    notify: d
                },
                h = {
                    done: b.add,
                    fail: c.add,
                    progress: d.add,
                    state: function() {
                        return e
                    },
                    isResolved: b.fired,
                    isRejected: c.fired,
                    then: function(a, b, c) {
                        i.done(a).fail(b).progress(c);
                        return this
                    },
                    always: function() {
                        i.done.apply(i, arguments).fail.apply(
                            i, arguments);
                        return this
                    },
                    pipe: function(a, b, c) {
                        return f.Deferred(function(d) {
                            f.each({
                                done: [a,
                                    "resolve"
                                ],
                                fail: [b,
                                    "reject"
                                ],
                                progress: [
                                    c,
                                    "notify"
                                ]
                            }, function(a,
                                b) {
                                var c = b[0],
                                    e = b[1],
                                    g;
                                f.isFunction(
                                        c) ?
                                    i[a](
                                        function() {
                                            g
                                                =
                                                c
                                                .apply(
                                                    this,
                                                    arguments
                                                ),
                                                g &&
                                                f
                                                .isFunction(
                                                    g
                                                    .promise
                                                ) ?
                                                g
                                                .promise()
                                                .then(
                                                    d
                                                    .resolve,
                                                    d
                                                    .reject,
                                                    d
                                                    .notify
                                                ) :
                                                d[
                                                    e +
                                                    "With"
                                                ]
                                                (
                                                    this ===
                                                    i ?
                                                    d :
                                                    this, [
                                                        g
                                                    ]
                                                )
                                        }) :
                                    i[a](d[
                                        e
                                    ])
                            })
                        }).promise()
                    },
                    promise: function(a) {
                        if (a == null) {
                            a = h
                        } else {
                            for (var b in h) {
                                a[b] = h[b]
                            }
                        }
                        return a
                    }
                },
                i = h.promise({}),
                j;
            for (j in g) {
                i[j] = g[j].fire, i[j + "With"] = g[j].fireWith
            }
            i.done(function() {
                e = "resolved"
            }, c.disable, d.lock).fail(function() {
                e = "rejected"
            }, b.disable, d.lock), a && a.call(i, i);
            return i
        },
        when: function(a) {
            function m(a) {
                return function(b) {
                    e[a] = arguments.length > 1 ? i.call(
                        arguments, 0) : b, j.notifyWith(
                        k, e)
                }
            }

            function l(a) {
                return function(c) {
                    b[a] = arguments.length > 1 ? i.call(
                            arguments, 0) : c, --g || j
                        .resolveWith(j, b)
                }
            }
            var b = i.call(arguments, 0),
                c = 0,
                d = b.length,
                e = Array(d),
                g = d,
                h = d,
                j = d <= 1 && a && f.isFunction(a.promise) ? a :
                f.Deferred(),
                k = j.promise();
            if (d > 1) {
                for (; c < d; c++) {
                    b[c] && b[c].promise && f.isFunction(b[c].promise) ?
                        b[c].promise().then(l(c), j.reject, m(c)) :
                        --g
                }
                g || j.resolveWith(j, b)
            } else {
                j !== a && j.resolveWith(j, d ? [a] : [])
            }
            return k
        }
    }), f.support = function() {
        var b, d, e, g, h, i, j, k, l, m, n, o, p = c.createElement(
                "div"),
            q = c.documentElement;
        p.setAttribute("className", "t"), p.innerHTML =
            "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",
            d = p.getElementsByTagName("*"), e = p.getElementsByTagName(
                "a")[0];
        if (!d || !d.length || !e) {
            return {}
        }
        g = c.createElement("select"), h = g.appendChild(c.createElement(
                "option")), i = p.getElementsByTagName("input")[0], b = {
                leadingWhitespace: p.firstChild.nodeType === 3,
                tbody: !p.getElementsByTagName("tbody").length,
                htmlSerialize: !!p.getElementsByTagName("link").length,
                style: /top/.test(e.getAttribute("style")),
                hrefNormalized: e.getAttribute("href") === "/a",
                opacity: /^0.55/.test(e.style.opacity),
                cssFloat: !!e.style.cssFloat,
                checkOn: i.value === "on",
                optSelected: h.selected,
                getSetAttribute: p.className !== "t",
                enctype: !!c.createElement("form").enctype,
                html5Clone: c.createElement("nav").cloneNode(!0).outerHTML !==
                    "<:nav></:nav>",
                submitBubbles: !0,
                changeBubbles: !0,
                focusinBubbles: !1,
                deleteExpando: !0,
                noCloneEvent: !0,
                inlineBlockNeedsLayout: !1,
                shrinkWrapBlocks: !1,
                reliableMarginRight: !0,
                pixelMargin: !0
            }, f.boxModel = b.boxModel = c.compatMode === "CSS1Compat",
            i.checked = !0, b.noCloneChecked = i.cloneNode(!0).checked,
            g.disabled = !0, b.optDisabled = !h.disabled;
        try {
            delete p.test
        } catch (r) {
            b.deleteExpando = !1
        }!p.addEventListener && p.attachEvent && p.fireEvent && (p.attachEvent(
                "onclick", function() {
                    b.noCloneEvent = !1
                }), p.cloneNode(!0).fireEvent("onclick")), i = c.createElement(
                "input"), i.value = "t", i.setAttribute("type", "radio"),
            b.radioValue = i.value === "t", i.setAttribute("checked",
                "checked"), i.setAttribute("name", "t"), p.appendChild(
                i), j = c.createDocumentFragment(), j.appendChild(p.lastChild),
            b.checkClone = j.cloneNode(!0).cloneNode(!0).lastChild.checked,
            b.appendChecked = i.checked, j.removeChild(i), j.appendChild(
                p);
        if (p.attachEvent) {
            for (n in {
                submit: 1,
                change: 1,
                focusin: 1
            }) {
                m = "on" + n, o = m in p, o || (p.setAttribute(m,
                    "return;"), o = typeof p[m] == "function"), b[n +
                    "Bubbles"] = o
            }
        }
        j.removeChild(p), j = g = h = p = i = null, f(function() {
            var d, e, g, h, i, j, l, m, n, q, r, s, t, u = c.getElementsByTagName(
                "body")[0];
            !u || (m = 1, t = "padding:0;margin:0;border:", r =
                "position:absolute;top:0;left:0;width:1px;height:1px;",
                s = t + "0;visibility:hidden;", n =
                "style='" + r + t + "5px solid #000;", q =
                "<div " + n +
                "display:block;'><div style='" + t +
                "0;display:block;overflow:hidden;'></div></div><table " +
                n +
                "' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>",
                d = c.createElement("div"), d.style.cssText =
                s +
                "width:0;height:0;position:static;top:0;margin-top:" +
                m + "px", u.insertBefore(d, u.firstChild),
                p = c.createElement("div"), d.appendChild(p),
                p.innerHTML = "<table><tr><td style='" + t +
                "0;display:none'></td><td>t</td></tr></table>",
                k = p.getElementsByTagName("td"), o = k[0].offsetHeight ===
                0, k[0].style.display = "", k[1].style.display =
                "none", b.reliableHiddenOffsets = o && k[0]
                .offsetHeight === 0, a.getComputedStyle &&
                (p.innerHTML = "", l = c.createElement(
                        "div"), l.style.width = "0", l.style
                    .marginRight = "0", p.style.width =
                    "2px", p.appendChild(l), b.reliableMarginRight =
                    (parseInt((a.getComputedStyle(l, null) || {
                        marginRight: 0
                    }).marginRight, 10) || 0) === 0),
                typeof p.style.zoom != "undefined" && (p.innerHTML =
                    "", p.style.width = p.style.padding =
                    "1px", p.style.border = 0, p.style.overflow =
                    "hidden", p.style.display = "inline", p
                    .style.zoom = 1, b.inlineBlockNeedsLayout =
                    p.offsetWidth === 3, p.style.display =
                    "block", p.style.overflow = "visible",
                    p.innerHTML =
                    "<div style='width:5px;'></div>", b.shrinkWrapBlocks =
                    p.offsetWidth !== 3), p.style.cssText =
                r + s, p.innerHTML = q, e = p.firstChild, g =
                e.firstChild, i = e.nextSibling.firstChild.firstChild,
                j = {
                    doesNotAddBorder: g.offsetTop !== 5,
                    doesAddBorderForTableAndCells: i.offsetTop ===
                        5
                }, g.style.position = "fixed", g.style.top =
                "20px", j.fixedPosition = g.offsetTop ===
                20 || g.offsetTop === 15, g.style.position =
                g.style.top = "", e.style.overflow =
                "hidden", e.style.position = "relative", j.subtractsBorderForOverflowNotVisible =
                g.offsetTop === -5, j.doesNotIncludeMarginInBodyOffset =
                u.offsetTop !== m, a.getComputedStyle && (p
                    .style.marginTop = "1%", b.pixelMargin =
                    (a.getComputedStyle(p, null) || {
                        marginTop: 0
                    }).marginTop !== "1%"), typeof d.style.zoom !=
                "undefined" && (d.style.zoom = 1), u.removeChild(
                    d), l = p = d = null, f.extend(b, j))
        });
        return b
    }();
    var j = /^(?:\{.*\}|\[.*\])$/,
        k = /([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(
            /\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function(a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !m(a)
        },
        data: function(a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g, h, i, j = f.expando,
                    k = typeof c == "string",
                    l = a.nodeType,
                    m = l ? f.cache : a,
                    n = l ? a[j] : a[j] && j,
                    o = c === "events";
                if ((!n || !m[n] || !o && !e && !m[n].data) &&
                    k && d === b) {
                    return
                }
                n || (l ? a[j] = n = ++f.uuid : n = j), m[n] ||
                    (m[n] = {}, l || (m[n].toJSON = f.noop));
                if (typeof c == "object" || typeof c ==
                    "function") {
                    e ? m[n] = f.extend(m[n], c) : m[n].data =
                        f.extend(m[n].data, c)
                }
                g = h = m[n], e || (h.data || (h.data = {}), h =
                    h.data), d !== b && (h[f.camelCase(c)] =
                    d);
                if (o && !h[c]) {
                    return g.events
                }
                k ? (i = h[c], i == null && (i = h[f.camelCase(
                    c)])) : i = h;
                return i
            }
        },
        removeData: function(a, b, c) {
            if (!!f.acceptData(a)) {
                var d, e, g, h = f.expando,
                    i = a.nodeType,
                    j = i ? f.cache : a,
                    k = i ? a[h] : h;
                if (!j[k]) {
                    return
                }
                if (b) {
                    d = c ? j[k] : j[k].data;
                    if (d) {
                        f.isArray(b) || (b in d ? b = [b] : (b =
                            f.camelCase(b), b in d ? b = [
                                b
                            ] : b = b.split(" ")));
                        for (e = 0, g = b.length; e < g; e++) {
                            delete d[b[e]]
                        }
                        if (!(c ? m : f.isEmptyObject)(d)) {
                            return
                        }
                    }
                }
                if (!c) {
                    delete j[k].data;
                    if (!m(j[k])) {
                        return
                    }
                }
                f.support.deleteExpando || !j.setInterval ?
                    delete j[k] : j[k] = null, i && (f.support.deleteExpando ?
                        delete a[h] : a.removeAttribute ? a.removeAttribute(
                            h) : a[h] = null)
            }
        },
        _data: function(a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function(a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b) {
                    return b !== !0 && a.getAttribute("classid") ===
                        b
                }
            }
            return !0
        }
    }), f.fn.extend({
        data: function(a, c) {
            var d, e, g, h, i, j = this[0],
                k = 0,
                m = null;
            if (a === b) {
                if (this.length) {
                    m = f.data(j);
                    if (j.nodeType === 1 && !f._data(j,
                        "parsedAttrs")) {
                        g = j.attributes;
                        for (i = g.length; k < i; k++) {
                            h = g[k].name, h.indexOf("data-") ===
                                0 && (h = f.camelCase(h.substring(
                                    5)), l(j, h, m[h]))
                        }
                        f._data(j, "parsedAttrs", !0)
                    }
                }
                return m
            }
            if (typeof a == "object") {
                return this.each(function() {
                    f.data(this, a)
                })
            }
            d = a.split(".", 2), d[1] = d[1] ? "." + d[1] : "",
                e = d[1] + "!";
            return f.access(this, function(c) {
                if (c === b) {
                    m = this.triggerHandler("getData" +
                            e, [d[0]]), m === b && j &&
                        (m = f.data(j, a), m = l(j, a,
                            m));
                    return m === b && d[1] ? this.data(
                        d[0]) : m
                }
                d[1] = c, this.each(function() {
                    var b = f(this);
                    b.triggerHandler("setData" +
                        e, d), f.data(this,
                        a, c), b.triggerHandler(
                        "changeData" + e, d
                    )
                })
            }, null, c, arguments.length > 1, null, !1)
        },
        removeData: function(a) {
            return this.each(function() {
                f.removeData(this, a)
            })
        }
    }), f.extend({
        _mark: function(a, b) {
            a && (b = (b || "fx") + "mark", f._data(a, b, (f._data(
                a, b) || 0) + 1))
        },
        _unmark: function(a, b, c) {
            a !== !0 && (c = b, b = a, a = !1);
            if (b) {
                c = c || "fx";
                var d = c + "mark",
                    e = a ? 0 : (f._data(b, d) || 1) - 1;
                e ? f._data(b, d, e) : (f.removeData(b, d, !0),
                    n(b, c, "mark"))
            }
        },
        queue: function(a, b, c) {
            var d;
            if (a) {
                b = (b || "fx") + "queue", d = f._data(a, b), c &&
                    (!d || f.isArray(c) ? d = f._data(a, b, f.makeArray(
                        c)) : d.push(c));
                return d || []
            }
        },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = f.queue(a, b),
                d = c.shift(),
                e = {};
            d === "inprogress" && (d = c.shift()), d && (b ===
                "fx" && c.unshift("inprogress"), f._data(a,
                    b + ".run", e), d.call(a, function() {
                    f.dequeue(a, b)
                }, e)), c.length || (f.removeData(a, b +
                "queue " + b + ".run", !0), n(a, b,
                "queue"))
        }
    }), f.fn.extend({
        queue: function(a, c) {
            var d = 2;
            typeof a != "string" && (c = a, a = "fx", d--);
            if (arguments.length < d) {
                return f.queue(this[0], a)
            }
            return c === b ? this : this.each(function() {
                var b = f.queue(this, a, c);
                a === "fx" && b[0] !== "inprogress" &&
                    f.dequeue(this, a)
            })
        },
        dequeue: function(a) {
            return this.each(function() {
                f.dequeue(this, a)
            })
        },
        delay: function(a, b) {
            a = f.fx ? f.fx.speeds[a] || a : a, b = b || "fx";
            return this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        },
        clearQueue: function(a) {
            return this.queue(a || "fx", [])
        },
        promise: function(a, c) {
            function m() {
                --h || d.resolveWith(e, [e])
            }
            typeof a != "string" && (c = a, a = b), a = a ||
                "fx";
            var d = f.Deferred(),
                e = this,
                g = e.length,
                h = 1,
                i = a + "defer",
                j = a + "queue",
                k = a + "mark",
                l;
            while (g--) {
                if (l = f.data(e[g], i, b, !0) || (f.data(e[g],
                        j, b, !0) || f.data(e[g], k, b, !0)) &&
                    f.data(e[g], i, f.Callbacks("once memory"), !
                        0)) {
                    h++, l.add(m)
                }
            }
            m();
            return d.promise(c)
        }
    });
    var o = /[\n\t\r]/g,
        p = /\s+/,
        q = /\r/g,
        r = /^(?:button|input)$/i,
        s = /^(?:button|input|object|select|textarea)$/i,
        t = /^a(?:rea)?$/i,
        u =
        /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        v = f.support.getSetAttribute,
        w, x, y;
    f.fn.extend({
            attr: function(a, b) {
                return f.access(this, f.attr, a, b, arguments.length >
                    1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    f.removeAttr(this, a)
                })
            },
            prop: function(a, b) {
                return f.access(this, f.prop, a, b, arguments.length >
                    1)
            },
            removeProp: function(a) {
                a = f.propFix[a] || a;
                return this.each(function() {
                    try {
                        this[a] = b, delete this[a]
                    } catch (c) {}
                })
            },
            addClass: function(a) {
                var b, c, d, e, g, h, i;
                if (f.isFunction(a)) {
                    return this.each(function(b) {
                        f(this).addClass(a.call(this, b,
                            this.className))
                    })
                }
                if (a && typeof a == "string") {
                    b = a.split(p);
                    for (c = 0, d = this.length; c < d; c++) {
                        e = this[c];
                        if (e.nodeType === 1) {
                            if (!e.className && b.length === 1) {
                                e.className = a
                            } else {
                                g = " " + e.className + " ";
                                for (h = 0, i = b.length; h < i; h++) {
                                    ~g.indexOf(" " + b[h] + " ") ||
                                        (g += b[h] + " ")
                                }
                                e.className = f.trim(g)
                            }
                        }
                    }
                }
                return this
            },
            removeClass: function(a) {
                var c, d, e, g, h, i, j;
                if (f.isFunction(a)) {
                    return this.each(function(b) {
                        f(this).removeClass(a.call(this, b,
                            this.className))
                    })
                }
                if (a && typeof a == "string" || a === b) {
                    c = (a || "").split(p);
                    for (d = 0, e = this.length; d < e; d++) {
                        g = this[d];
                        if (g.nodeType === 1 && g.className) {
                            if (a) {
                                h = (" " + g.className + " ").replace(
                                    o, " ");
                                for (i = 0, j = c.length; i < j; i++) {
                                    h = h.replace(" " + c[i] + " ",
                                        " ")
                                }
                                g.className = f.trim(h)
                            } else {
                                g.className = ""
                            }
                        }
                    }
                }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a,
                    d = typeof b == "boolean";
                if (f.isFunction(a)) {
                    return this.each(function(c) {
                        f(this).toggleClass(a.call(this, c,
                            this.className, b), b)
                    })
                }
                return this.each(function() {
                    if (c === "string") {
                        var e, g = 0,
                            h = f(this),
                            i = b,
                            j = a.split(p);
                        while (e = j[g++]) {
                            i = d ? i : !h.hasClass(e), h[i ?
                                "addClass" :
                                "removeClass"](e)
                        }
                    } else {
                        if (c === "undefined" || c ===
                            "boolean") {
                            this.className && f._data(this,
                                    "__className__", this.className
                                ), this.className = this.className ||
                                a === !1 ? "" : f._data(
                                    this, "__className__") ||
                                ""
                        }
                    }
                })
            },
            hasClass: function(a) {
                var b = " " + a + " ",
                    c = 0,
                    d = this.length;
                for (; c < d; c++) {
                    if (this[c].nodeType === 1 && (" " + this[c].className +
                        " ").replace(o, " ").indexOf(b) > -1) {
                        return !0
                    }
                }
                return !1
            },
            val: function(a) {
                var c, d, e, g = this[0];
                if (!!arguments.length) {
                    e = f.isFunction(a);
                    return this.each(function(d) {
                        var g = f(this),
                            h;
                        if (this.nodeType === 1) {
                            e ? h = a.call(this, d, g.val()) :
                                h = a, h == null ? h = "" :
                                typeof h == "number" ? h +=
                                "" : f.isArray(h) && (h = f
                                    .map(h, function(a) {
                                        return a ==
                                            null ? "" :
                                            a + ""
                                    })), c = f.valHooks[
                                    this.type] || f.valHooks[
                                    this.nodeName.toLowerCase()
                                ];
                            if (!c || !("set" in c) || c.set(
                                this, h, "value") === b) {
                                this.value = h
                            }
                        }
                    })
                }
                if (g) {
                    c = f.valHooks[g.type] || f.valHooks[g.nodeName
                        .toLowerCase()];
                    if (c && "get" in c && (d = c.get(g, "value")) !==
                        b) {
                        return d
                    }
                    d = g.value;
                    return typeof d == "string" ? d.replace(q, "") :
                        d == null ? "" : d
                }
            }
        }), f.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text
                    }
                },
                select: {
                    get: function(a) {
                        var b, c, d, e, g = a.selectedIndex,
                            h = [],
                            i = a.options,
                            j = a.type === "select-one";
                        if (g < 0) {
                            return null
                        }
                        c = j ? g : 0, d = j ? g + 1 : i.length;
                        for (; c < d; c++) {
                            e = i[c];
                            if (e.selected && (f.support.optDisabled ?
                                !e.disabled : e.getAttribute(
                                    "disabled") === null) && (!
                                e.parentNode.disabled || !f.nodeName(
                                    e.parentNode, "optgroup"))) {
                                b = f(e).val();
                                if (j) {
                                    return b
                                }
                                h.push(b)
                            }
                        }
                        if (j && !h.length && i.length) {
                            return f(i[g]).val()
                        }
                        return h
                    },
                    set: function(a, b) {
                        var c = f.makeArray(b);
                        f(a).find("option").each(function() {
                            this.selected = f.inArray(f(
                                this).val(), c) >= 0
                        }), c.length || (a.selectedIndex = -1);
                        return c
                    }
                }
            },
            attrFn: {
                val: !0,
                css: !0,
                html: !0,
                text: !0,
                data: !0,
                width: !0,
                height: !0,
                offset: !0
            },
            attr: function(a, c, d, e) {
                var g, h, i, j = a.nodeType;
                if (!!a && j !== 3 && j !== 8 && j !== 2) {
                    if (e && c in f.attrFn) {
                        return f(a)[c](d)
                    }
                    if (typeof a.getAttribute == "undefined") {
                        return f.prop(a, c, d)
                    }
                    i = j !== 1 || !f.isXMLDoc(a), i && (c = c.toLowerCase(),
                        h = f.attrHooks[c] || (u.test(c) ? x :
                            w));
                    if (d !== b) {
                        if (d === null) {
                            f.removeAttr(a, c);
                            return
                        }
                        if (h && "set" in h && i && (g = h.set(a, d,
                            c)) !== b) {
                            return g
                        }
                        a.setAttribute(c, "" + d);
                        return d
                    }
                    if (h && "get" in h && i && (g = h.get(a, c)) !==
                        null) {
                        return g
                    }
                    g = a.getAttribute(c);
                    return g === null ? b : g
                }
            },
            removeAttr: function(a, b) {
                var c, d, e, g, h, i = 0;
                if (b && a.nodeType === 1) {
                    d = b.toLowerCase().split(p), g = d.length;
                    for (; i < g; i++) {
                        e = d[i], e && (c = f.propFix[e] || e, h =
                            u.test(e), h || f.attr(a, e, ""), a
                            .removeAttribute(v ? e : c), h && c in
                            a && (a[c] = !1))
                    }
                }
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (r.test(a.nodeName) && a.parentNode) {
                            f.error(
                                "type property can't be changed"
                            )
                        } else {
                            if (!f.support.radioValue && b ===
                                "radio" && f.nodeName(a, "input")) {
                                var c = a.value;
                                a.setAttribute("type", b), c && (a.value =
                                    c);
                                return b
                            }
                        }
                    }
                },
                value: {
                    get: function(a, b) {
                        if (w && f.nodeName(a, "button")) {
                            return w.get(a, b)
                        }
                        return b in a ? a.value : null
                    },
                    set: function(a, b, c) {
                        if (w && f.nodeName(a, "button")) {
                            return w.set(a, b, c)
                        }
                        a.value = b
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function(a, c, d) {
                var e, g, h, i = a.nodeType;
                if (!!a && i !== 3 && i !== 8 && i !== 2) {
                    h = i !== 1 || !f.isXMLDoc(a), h && (c = f.propFix[
                        c] || c, g = f.propHooks[c]);
                    return d !== b ? g && "set" in g && (e = g.set(
                            a, d, c)) !== b ? e : a[c] = d : g &&
                        "get" in g && (e = g.get(a, c)) !== null ?
                        e : a[c]
                }
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        var c = a.getAttributeNode("tabindex");
                        return c && c.specified ? parseInt(c.value,
                            10) : s.test(a.nodeName) || t.test(
                            a.nodeName) && a.href ? 0 : b
                    }
                }
            }
        }), f.attrHooks.tabindex = f.propHooks.tabIndex, x = {
            get: function(a, c) {
                var d, e = f.prop(a, c);
                return e === !0 || typeof e != "boolean" && (d = a.getAttributeNode(
                    c)) && d.nodeValue !== !1 ? c.toLowerCase() : b
            },
            set: function(a, b, c) {
                var d;
                b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c,
                    d in a && (a[d] = !0), a.setAttribute(c, c.toLowerCase())
                );
                return c
            }
        }, v || (y = {
            name: !0,
            id: !0,
            coords: !0
        }, w = f.valHooks.button = {
            get: function(a, c) {
                var d;
                d = a.getAttributeNode(c);
                return d && (y[c] ? d.nodeValue !== "" : d.specified) ?
                    d.nodeValue : b
            },
            set: function(a, b, d) {
                var e = a.getAttributeNode(d);
                e || (e = c.createAttribute(d), a.setAttributeNode(
                    e));
                return e.nodeValue = b + ""
            }
        }, f.attrHooks.tabindex.set = w.set, f.each(["width", "height"],
            function(a, b) {
                f.attrHooks[b] = f.extend(f.attrHooks[b], {
                    set: function(a, c) {
                        if (c === "") {
                            a.setAttribute(b, "auto");
                            return c
                        }
                    }
                })
            }), f.attrHooks.contenteditable = {
            get: w.get,
            set: function(a, b, c) {
                b === "" && (b = "false"), w.set(a, b, c)
            }
        }), f.support.hrefNormalized || f.each(["href", "src", "width",
            "height"
        ], function(a, c) {
            f.attrHooks[c] = f.extend(f.attrHooks[c], {
                get: function(a) {
                    var d = a.getAttribute(c, 2);
                    return d === null ? b : d
                }
            })
        }), f.support.style || (f.attrHooks.style = {
            get: function(a) {
                return a.style.cssText.toLowerCase() || b
            },
            set: function(a, b) {
                return a.style.cssText = "" + b
            }
        }), f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks
            .selected, {
                get: function(a) {
                    var b = a.parentNode;
                    b && (b.selectedIndex, b.parentNode && b.parentNode
                        .selectedIndex);
                    return null
                }
            })), f.support.enctype || (f.propFix.enctype = "encoding"), f.support
        .checkOn || f.each(["radio", "checkbox"], function() {
            f.valHooks[this] = {
                get: function(a) {
                    return a.getAttribute("value") === null ?
                        "on" : a.value
                }
            }
        }), f.each(["radio", "checkbox"], function() {
            f.valHooks[this] = f.extend(f.valHooks[this], {
                set: function(a, b) {
                    if (f.isArray(b)) {
                        return a.checked = f.inArray(f(a).val(),
                            b) >= 0
                    }
                }
            })
        });
    var z = /^(?:textarea|input|select)$/i,
        A = /^([^\.]*)?(?:\.(.+))?$/,
        B = /(?:^|\s)hover(\.\S+)?\b/,
        C = /^key/,
        D = /^(?:mouse|contextmenu)|click/,
        E = /^(?:focusinfocus|focusoutblur)$/,
        F = /^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,
        G = function(a) {
            var b = F.exec(a);
            b && (b[1] = (b[1] || "").toLowerCase(), b[3] = b[3] && new RegExp(
                "(?:^|\\s)" + b[3] + "(?:\\s|$)"));
            return b
        },
        H = function(a, b) {
            var c = a.attributes || {};
            return (!b[1] || a.nodeName.toLowerCase() === b[1]) && (!b[2] ||
                (c.id || {}).value === b[2]) && (!b[3] || b[3].test((c[
                "class"] || {}).value))
        },
        I = function(a) {
            return f.event.special.hover ? a : a.replace(B,
                "mouseenter$1 mouseleave$1")
        };
    f.event = {
            add: function(a, c, d, e, g) {
                var h, i, j, k, l, m, n, o, p, q, r, s;
                if (!(a.nodeType === 3 || a.nodeType === 8 || !c || !d ||
                    !(h = f._data(a)))) {
                    d.handler && (p = d, d = p.handler, g = p.selector),
                        d.guid || (d.guid = f.guid++), j = h.events, j ||
                        (h.events = j = {}), i = h.handle, i || (h.handle =
                            i = function(a) {
                                return typeof f != "undefined" && (!a ||
                                        f.event.triggered !== a.type) ?
                                    f.event.dispatch.apply(i.elem,
                                        arguments) : b
                            }, i.elem = a), c = f.trim(I(c)).split(" ");
                    for (k = 0; k < c.length; k++) {
                        l = A.exec(c[k]) || [], m = l[1], n = (l[2] ||
                                "").split(".").sort(), s = f.event.special[
                                m] || {}, m = (g ? s.delegateType : s.bindType) ||
                            m, s = f.event.special[m] || {}, o = f.extend({
                                type: m,
                                origType: l[1],
                                data: e,
                                handler: d,
                                guid: d.guid,
                                selector: g,
                                quick: g && G(g),
                                namespace: n.join(".")
                            }, p), r = j[m];
                        if (!r) {
                            r = j[m] = [], r.delegateCount = 0;
                            if (!s.setup || s.setup.call(a, e, n, i) ===
                                !1) {
                                a.addEventListener ? a.addEventListener(
                                    m, i, !1) : a.attachEvent && a.attachEvent(
                                    "on" + m, i)
                            }
                        }
                        s.add && (s.add.call(a, o), o.handler.guid || (
                                o.handler.guid = d.guid)), g ? r.splice(
                                r.delegateCount++, 0, o) : r.push(o), f
                            .event.global[m] = !0
                    }
                    a = null
                }
            },
            global: {},
            remove: function(a, b, c, d, e) {
                var g = f.hasData(a) && f._data(a),
                    h, i, j, k, l, m, n, o, p, q, r, s;
                if (!!g && !!(o = g.events)) {
                    b = f.trim(I(b || "")).split(" ");
                    for (h = 0; h < b.length; h++) {
                        i = A.exec(b[h]) || [], j = k = i[1], l = i[2];
                        if (!j) {
                            for (j in o) {
                                f.event.remove(a, j + b[h], c, d, !0)
                            }
                            continue
                        }
                        p = f.event.special[j] || {}, j = (d ? p.delegateType :
                                p.bindType) || j, r = o[j] || [], m = r
                            .length, l = l ? new RegExp("(^|\\.)" + l.split(
                                    ".").sort().join("\\.(?:.*\\.)?") +
                                "(\\.|$)") : null;
                        for (n = 0; n < r.length; n++) {
                            s = r[n], (e || k === s.origType) && (!c ||
                                c.guid === s.guid) && (!l || l.test(
                                s.namespace)) && (!d || d === s.selector ||
                                d === "**" && s.selector) && (r.splice(
                                    n--, 1), s.selector && r.delegateCount--,
                                p.remove && p.remove.call(a, s))
                        }
                        r.length === 0 && m !== r.length && ((!p.teardown ||
                            p.teardown.call(a, l) === !1) && f.removeEvent(
                            a, j, g.handle), delete o[j])
                    }
                    f.isEmptyObject(o) && (q = g.handle, q && (q.elem =
                        null), f.removeData(a, ["events",
                        "handle"
                    ], !0))
                }
            },
            customEvent: {
                getData: !0,
                setData: !0,
                changeData: !0
            },
            trigger: function(c, d, e, g) {
                if (!e || e.nodeType !== 3 && e.nodeType !== 8) {
                    var h = c.type || c,
                        i = [],
                        j, k, l, m, n, o, p, q, r, s;
                    if (E.test(h + f.event.triggered)) {
                        return
                    }
                    h.indexOf("!") >= 0 && (h = h.slice(0, -1), k = !0),
                        h.indexOf(".") >= 0 && (i = h.split("."), h = i
                            .shift(), i.sort());
                    if ((!e || f.event.customEvent[h]) && !f.event.global[
                        h]) {
                        return
                    }
                    c = typeof c == "object" ? c[f.expando] ? c : new f
                        .Event(h, c) : new f.Event(h), c.type = h, c.isTrigger = !
                        0, c.exclusive = k, c.namespace = i.join("."),
                        c.namespace_re = c.namespace ? new RegExp(
                            "(^|\\.)" + i.join("\\.(?:.*\\.)?") +
                            "(\\.|$)") : null, o = h.indexOf(":") < 0 ?
                        "on" + h : "";
                    if (!e) {
                        j = f.cache;
                        for (l in j) {
                            j[l].events && j[l].events[h] && f.event.trigger(
                                c, d, j[l].handle.elem, !0)
                        }
                        return
                    }
                    c.result = b, c.target || (c.target = e), d = d !=
                        null ? f.makeArray(d) : [], d.unshift(c), p = f
                        .event.special[h] || {};
                    if (p.trigger && p.trigger.apply(e, d) === !1) {
                        return
                    }
                    r = [
                        [e, p.bindType || h]
                    ];
                    if (!g && !p.noBubble && !f.isWindow(e)) {
                        s = p.delegateType || h, m = E.test(s + h) ? e :
                            e.parentNode, n = null;
                        for (; m; m = m.parentNode) {
                            r.push([m, s]), n = m
                        }
                        n && n === e.ownerDocument && r.push([n.defaultView ||
                            n.parentWindow || a, s
                        ])
                    }
                    for (l = 0; l < r.length && !c.isPropagationStopped(); l++) {
                        m = r[l][0], c.type = r[l][1], q = (f._data(m,
                                "events") || {})[c.type] && f._data(m,
                                "handle"), q && q.apply(m, d), q = o &&
                            m[o], q && f.acceptData(m) && q.apply(m, d) ===
                            !1 && c.preventDefault()
                    }
                    c.type = h, !g && !c.isDefaultPrevented() && (!p._default ||
                            p._default.apply(e.ownerDocument, d) === !1
                        ) && (h !== "click" || !f.nodeName(e, "a")) &&
                        f.acceptData(e) && o && e[h] && (h !== "focus" &&
                            h !== "blur" || c.target.offsetWidth !== 0) &&
                        !f.isWindow(e) && (n = e[o], n && (e[o] = null),
                            f.event.triggered = h, e[h](), f.event.triggered =
                            b, n && (e[o] = n));
                    return c.result
                }
            },
            dispatch: function(c) {
                c = f.event.fix(c || a.event);
                var d = (f._data(this, "events") || {})[c.type] || [],
                    e = d.delegateCount,
                    g = [].slice.call(arguments, 0),
                    h = !c.exclusive && !c.namespace,
                    i = f.event.special[c.type] || {},
                    j = [],
                    k, l, m, n, o, p, q, r, s, t, u;
                g[0] = c, c.delegateTarget = this;
                if (!i.preDispatch || i.preDispatch.call(this, c) !== !
                    1) {
                    if (e && (!c.button || c.type !== "click")) {
                        n = f(this), n.context = this.ownerDocument ||
                            this;
                        for (m = c.target; m != this; m = m.parentNode ||
                            this) {
                            if (m.disabled !== !0) {
                                p = {}, r = [], n[0] = m;
                                for (k = 0; k < e; k++) {
                                    s = d[k], t = s.selector, p[t] ===
                                        b && (p[t] = s.quick ? H(m, s.quick) :
                                            n.is(t)), p[t] && r.push(s)
                                }
                                r.length && j.push({
                                    elem: m,
                                    matches: r
                                })
                            }
                        }
                    }
                    d.length > e && j.push({
                        elem: this,
                        matches: d.slice(e)
                    });
                    for (k = 0; k < j.length && !c.isPropagationStopped(); k++) {
                        q = j[k], c.currentTarget = q.elem;
                        for (l = 0; l < q.matches.length && !c.isImmediatePropagationStopped(); l++) {
                            s = q.matches[l];
                            if (h || !c.namespace && !s.namespace || c.namespace_re &&
                                c.namespace_re.test(s.namespace)) {
                                c.data = s.data, c.handleObj = s, o = (
                                    (f.event.special[s.origType] || {})
                                    .handle || s.handler).apply(q.elem,
                                    g), o !== b && (c.result = o, o ===
                                    !1 && (c.preventDefault(), c.stopPropagation())
                                )
                            }
                        }
                    }
                    i.postDispatch && i.postDispatch.call(this, c);
                    return c.result
                }
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which"
                .split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    a.which == null && (a.which = b.charCode != null ?
                        b.charCode : b.keyCode);
                    return a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement"
                    .split(" "),
                filter: function(a, d) {
                    var e, f, g, h = d.button,
                        i = d.fromElement;
                    a.pageX == null && d.clientX != null && (e = a.target
                            .ownerDocument || c, f = e.documentElement,
                            g = e.body, a.pageX = d.clientX + (f && f.scrollLeft ||
                                g && g.scrollLeft || 0) - (f && f.clientLeft ||
                                g && g.clientLeft || 0), a.pageY = d.clientY +
                            (f && f.scrollTop || g && g.scrollTop || 0) -
                            (f && f.clientTop || g && g.clientTop || 0)
                        ), !a.relatedTarget && i && (a.relatedTarget =
                            i === a.target ? d.toElement : i), !a.which &&
                        h !== b && (a.which = h & 1 ? 1 : h & 2 ? 3 : h &
                            4 ? 2 : 0);
                    return a
                }
            },
            fix: function(a) {
                if (a[f.expando]) {
                    return a
                }
                var d, e, g = a,
                    h = f.event.fixHooks[a.type] || {},
                    i = h.props ? this.props.concat(h.props) : this.props;
                a = f.Event(g);
                for (d = i.length; d;) {
                    e = i[--d], a[e] = g[e]
                }
                a.target || (a.target = g.srcElement || c), a.target.nodeType ===
                    3 && (a.target = a.target.parentNode), a.metaKey ===
                    b && (a.metaKey = a.ctrlKey);
                return h.filter ? h.filter(a, g) : a
            },
            special: {
                ready: {
                    setup: f.bindReady
                },
                load: {
                    noBubble: !0
                },
                focus: {
                    delegateType: "focusin"
                },
                blur: {
                    delegateType: "focusout"
                },
                beforeunload: {
                    setup: function(a, b, c) {
                        f.isWindow(this) && (this.onbeforeunload = c)
                    },
                    teardown: function(a, b) {
                        this.onbeforeunload === b && (this.onbeforeunload =
                            null)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = f.extend(new f.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? f.event.trigger(e, null, b) : f.event.dispatch.call(
                    b, e), e.isDefaultPrevented() && c.preventDefault()
            }
        }, f.event.handle = f.event.dispatch, f.removeEvent = c.removeEventListener ?
        function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function(a, b, c) {
            a.detachEvent && a.detachEvent("on" + b, c)
        }, f.Event = function(a, b) {
            if (!(this instanceof f.Event)) {
                return new f.Event(a, b)
            }
            a && a.type ? (this.originalEvent = a, this.type = a.type, this
                    .isDefaultPrevented = a.defaultPrevented || a.returnValue ===
                    !1 || a.getPreventDefault && a.getPreventDefault() ? K :
                    J) : this.type = a, b && f.extend(this, b), this.timeStamp =
                a && a.timeStamp || f.now(), this[f.expando] = !0
        }, f.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = K;
                var a = this.originalEvent;
                !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !
                    1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = K;
                var a = this.originalEvent;
                !a || (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !
                    0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = K, this.stopPropagation()
            },
            isDefaultPrevented: J,
            isPropagationStopped: J,
            isImmediatePropagationStopped: J
        }, f.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(a, b) {
            f.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c = this,
                        d = a.relatedTarget,
                        e = a.handleObj,
                        g = e.selector,
                        h;
                    if (!d || d !== c && !f.contains(c, d)) {
                        a.type = e.origType, h = e.handler.apply(
                            this, arguments), a.type = b
                    }
                    return h
                }
            }
        }), f.support.submitBubbles || (f.event.special.submit = {
            setup: function() {
                if (f.nodeName(this, "form")) {
                    return !1
                }
                f.event.add(this, "click._submit keypress._submit",
                    function(a) {
                        var c = a.target,
                            d = f.nodeName(c, "input") || f.nodeName(
                                c, "button") ? c.form : b;
                        d && !d._submit_attached && (f.event.add(
                            d, "submit._submit",
                            function(a) {
                                a._submit_bubble = !0
                            }), d._submit_attached = !0)
                    })
            },
            postDispatch: function(a) {
                a._submit_bubble && (delete a._submit_bubble, this.parentNode &&
                    !a.isTrigger && f.event.simulate("submit",
                        this.parentNode, a, !0))
            },
            teardown: function() {
                if (f.nodeName(this, "form")) {
                    return !1
                }
                f.event.remove(this, "._submit")
            }
        }), f.support.changeBubbles || (f.event.special.change = {
            setup: function() {
                if (z.test(this.nodeName)) {
                    if (this.type === "checkbox" || this.type ===
                        "radio") {
                        f.event.add(this, "propertychange._change",
                            function(a) {
                                a.originalEvent.propertyName ===
                                    "checked" && (this._just_changed = !
                                        0)
                            }), f.event.add(this,
                            "click._change", function(a) {
                                this._just_changed && !a.isTrigger &&
                                    (this._just_changed = !1, f
                                        .event.simulate(
                                            "change", this, a, !
                                            0))
                            })
                    }
                    return !1
                }
                f.event.add(this, "beforeactivate._change",
                    function(a) {
                        var b = a.target;
                        z.test(b.nodeName) && !b._change_attached &&
                            (f.event.add(b, "change._change",
                                function(a) {
                                    this.parentNode && !a.isSimulated &&
                                        !a.isTrigger && f.event
                                        .simulate("change",
                                            this.parentNode,
                                            a, !0)
                                }), b._change_attached = !0)
                    })
            },
            handle: function(a) {
                var b = a.target;
                if (this !== b || a.isSimulated || a.isTrigger || b
                    .type !== "radio" && b.type !== "checkbox") {
                    return a.handleObj.handler.apply(this,
                        arguments)
                }
            },
            teardown: function() {
                f.event.remove(this, "._change");
                return z.test(this.nodeName)
            }
        }), f.support.focusinBubbles || f.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var d = 0,
                e = function(a) {
                    f.event.simulate(b, a.target, f.event.fix(a), !0)
                };
            f.event.special[b] = {
                setup: function() {
                    d++ === 0 && c.addEventListener(a, e, !0)
                },
                teardown: function() {
                    --d === 0 && c.removeEventListener(a, e, !0)
                }
            }
        }), f.fn.extend({
            on: function(a, c, d, e, g) {
                var h, i;
                if (typeof a == "object") {
                    typeof c != "string" && (d = d || c, c = b);
                    for (i in a) {
                        this.on(i, c, d, a[i], g)
                    }
                    return this
                }
                d == null && e == null ? (e = c, d = c = b) : e ==
                    null && (typeof c == "string" ? (e = d, d = b) :
                        (e = d, d = c, c = b));
                if (e === !1) {
                    e = J
                } else {
                    if (!e) {
                        return this
                    }
                }
                g === 1 && (h = e, e = function(a) {
                    f().off(a);
                    return h.apply(this, arguments)
                }, e.guid = h.guid || (h.guid = f.guid++));
                return this.each(function() {
                    f.event.add(this, a, e, d, c)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, c, d) {
                if (a && a.preventDefault && a.handleObj) {
                    var e = a.handleObj;
                    f(a.delegateTarget).off(e.namespace ? e.origType +
                        "." + e.namespace : e.origType, e.selector,
                        e.handler);
                    return this
                }
                if (typeof a == "object") {
                    for (var g in a) {
                        this.off(g, c, a[g])
                    }
                    return this
                }
                if (c === !1 || typeof c == "function") {
                    d = c, c = b
                }
                d === !1 && (d = J);
                return this.each(function() {
                    f.event.remove(this, a, d, c)
                })
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            live: function(a, b, c) {
                f(this.context).on(a, this.selector, b, c);
                return this
            },
            die: function(a, b) {
                f(this.context).off(a, this.selector || "**", b);
                return this
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return arguments.length == 1 ? this.off(a, "**") :
                    this.off(b, a, c)
            },
            trigger: function(a, b) {
                return this.each(function() {
                    f.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                if (this[0]) {
                    return f.event.trigger(a, b, this[0], !0)
                }
            },
            toggle: function(a) {
                var b = arguments,
                    c = a.guid || f.guid++,
                    d = 0,
                    e = function(c) {
                        var e = (f._data(this, "lastToggle" + a.guid) ||
                            0) % d;
                        f._data(this, "lastToggle" + a.guid, e + 1),
                            c.preventDefault();
                        return b[e].apply(this, arguments) || !1
                    };
                e.guid = c;
                while (d < b.length) {
                    b[d++].guid = c
                }
                return this.click(e)
            },
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        }), f.each(
            "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu"
            .split(" "), function(a, b) {
                f.fn[b] = function(a, c) {
                    c == null && (c = a, a = null);
                    return arguments.length > 0 ? this.on(b, null, a, c) :
                        this.trigger(b)
                }, f.attrFn && (f.attrFn[b] = !0), C.test(b) && (f.event
                    .fixHooks[b] = f.event.keyHooks), D.test(b) && (f.event
                    .fixHooks[b] = f.event.mouseHooks)
            }),
        function() {
            function x(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            if (j.nodeType === 1) {
                                g || (j[d] = c, j.sizset = h);
                                if (typeof b != "string") {
                                    if (j === b) {
                                        k = !0;
                                        break
                                    }
                                } else {
                                    if (m.filter(b, [j]).length > 0) {
                                        k = j;
                                        break
                                    }
                                }
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }

            function w(a, b, c, e, f, g) {
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = e[h];
                    if (j) {
                        var k = !1;
                        j = j[a];
                        while (j) {
                            if (j[d] === c) {
                                k = e[j.sizset];
                                break
                            }
                            j.nodeType === 1 && !g && (j[d] = c, j.sizset =
                                h);
                            if (j.nodeName.toLowerCase() === b) {
                                k = j;
                                break
                            }
                            j = j[a]
                        }
                        e[h] = k
                    }
                }
            }
            var a =
                /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,
                d = "sizcache" + (Math.random() + "").replace(".", ""),
                e = 0,
                g = Object.prototype.toString,
                h = !1,
                i = !0,
                j = /\\/g,
                k = /\r\n/g,
                l = /\W/;
            [0, 0].sort(function() {
                i = !1;
                return 0
            });
            var m = function(b, d, e, f) {
                e = e || [], d = d || c;
                var h = d;
                if (d.nodeType !== 1 && d.nodeType !== 9) {
                    return []
                }
                if (!b || typeof b != "string") {
                    return e
                }
                var i, j, k, l, n, q, r, t, u = !0,
                    v = m.isXML(d),
                    w = [],
                    x = b;
                do {
                    a.exec(""), i = a.exec(x);
                    if (i) {
                        x = i[3], w.push(i[1]);
                        if (i[2]) {
                            l = i[3];
                            break
                        }
                    }
                } while (i);
                if (w.length > 1 && p.exec(b)) {
                    if (w.length === 2 && o.relative[w[0]]) {
                        j = y(w[0] + w[1], d, f)
                    } else {
                        j = o.relative[w[0]] ? [d] : m(w.shift(), d);
                        while (w.length) {
                            b = w.shift(), o.relative[b] && (b += w.shift()),
                                j = y(b, j, f)
                        }
                    }
                } else {
                    !f && w.length > 1 && d.nodeType === 9 && !v && o.match
                        .ID.test(w[0]) && !o.match.ID.test(w[w.length -
                            1]) && (n = m.find(w.shift(), d, v), d = n.expr ?
                            m.filter(n.expr, n.set)[0] : n.set[0]);
                    if (d) {
                        n = f ? {
                                expr: w.pop(),
                                set: s(f)
                            } : m.find(w.pop(), w.length === 1 && (w[0] ===
                                    "~" || w[0] === "+") && d.parentNode ?
                                d.parentNode : d, v), j = n.expr ? m.filter(
                                n.expr, n.set) : n.set, w.length > 0 ?
                            k = s(j) : u = !1;
                        while (w.length) {
                            q = w.pop(), r = q, o.relative[q] ? r = w.pop() :
                                q = "", r == null && (r = d), o.relative[
                                    q](k, r, v)
                        }
                    } else {
                        k = w = []
                    }
                }
                k || (k = j), k || m.error(q || b);
                if (g.call(k) === "[object Array]") {
                    if (!u) {
                        e.push.apply(e, k)
                    } else {
                        if (d && d.nodeType === 1) {
                            for (t = 0; k[t] != null; t++) {
                                k[t] && (k[t] === !0 || k[t].nodeType ===
                                    1 && m.contains(d, k[t])) && e.push(
                                    j[t])
                            }
                        } else {
                            for (t = 0; k[t] != null; t++) {
                                k[t] && k[t].nodeType === 1 && e.push(j[
                                    t])
                            }
                        }
                    }
                } else {
                    s(k, e)
                }
                l && (m(l, h, e, f), m.uniqueSort(e));
                return e
            };
            m.uniqueSort = function(a) {
                if (u) {
                    h = i, a.sort(u);
                    if (h) {
                        for (var b = 1; b < a.length; b++) {
                            a[b] === a[b - 1] && a.splice(b--, 1)
                        }
                    }
                }
                return a
            }, m.matches = function(a, b) {
                return m(a, null, null, b)
            }, m.matchesSelector = function(a, b) {
                return m(b, null, null, [a]).length > 0
            }, m.find = function(a, b, c) {
                var d, e, f, g, h, i;
                if (!a) {
                    return []
                }
                for (e = 0, f = o.order.length; e < f; e++) {
                    h = o.order[e];
                    if (g = o.leftMatch[h].exec(a)) {
                        i = g[1], g.splice(1, 1);
                        if (i.substr(i.length - 1) !== "\\") {
                            g[1] = (g[1] || "").replace(j, ""), d = o.find[
                                h](g, b, c);
                            if (d != null) {
                                a = a.replace(o.match[h], "");
                                break
                            }
                        }
                    }
                }
                d || (d = typeof b.getElementsByTagName != "undefined" ?
                    b.getElementsByTagName("*") : []);
                return {
                    set: d,
                    expr: a
                }
            }, m.filter = function(a, c, d, e) {
                var f, g, h, i, j, k, l, n, p, q = a,
                    r = [],
                    s = c,
                    t = c && c[0] && m.isXML(c[0]);
                while (a && c.length) {
                    for (h in o.filter) {
                        if ((f = o.leftMatch[h].exec(a)) != null && f[2]) {
                            k = o.filter[h], l = f[1], g = !1, f.splice(
                                1, 1);
                            if (l.substr(l.length - 1) === "\\") {
                                continue
                            }
                            s === r && (r = []);
                            if (o.preFilter[h]) {
                                f = o.preFilter[h](f, s, d, r, e, t);
                                if (!f) {
                                    g = i = !0
                                } else {
                                    if (f === !0) {
                                        continue
                                    }
                                }
                            }
                            if (f) {
                                for (n = 0;
                                    (j = s[n]) != null; n++) {
                                    j && (i = k(j, f, n, s), p = e ^ i,
                                        d && i != null ? p ? g = !0 :
                                        s[n] = !1 : p && (r.push(j),
                                            g = !0))
                                }
                            }
                            if (i !== b) {
                                d || (s = r), a = a.replace(o.match[h],
                                    "");
                                if (!g) {
                                    return []
                                }
                                break
                            }
                        }
                    }
                    if (a === q) {
                        if (g == null) {
                            m.error(a)
                        } else {
                            break
                        }
                    }
                    q = a
                }
                return s
            }, m.error = function(a) {
                throw new Error(
                    "Syntax error, unrecognized expression: " + a)
            };
            var n = m.getText = function(a) {
                    var b, c, d = a.nodeType,
                        e = "";
                    if (d) {
                        if (d === 1 || d === 9 || d === 11) {
                            if (typeof a.textContent == "string") {
                                return a.textContent
                            }
                            if (typeof a.innerText == "string") {
                                return a.innerText.replace(k, "")
                            }
                            for (a = a.firstChild; a; a = a.nextSibling) {
                                e += n(a)
                            }
                        } else {
                            if (d === 3 || d === 4) {
                                return a.nodeValue
                            }
                        }
                    } else {
                        for (b = 0; c = a[b]; b++) {
                            c.nodeType !== 8 && (e += n(c))
                        }
                    }
                    return e
                },
                o = m.selectors = {
                    order: ["ID", "NAME", "TAG"],
                    match: {
                        ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                        NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                        ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                        TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                        CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                        POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                        PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                    },
                    leftMatch: {},
                    attrMap: {
                        "class": "className",
                        "for": "htmlFor"
                    },
                    attrHandle: {
                        href: function(a) {
                            return a.getAttribute("href")
                        },
                        type: function(a) {
                            return a.getAttribute("type")
                        }
                    },
                    relative: {
                        "+": function(a, b) {
                            var c = typeof b == "string",
                                d = c && !l.test(b),
                                e = c && !d;
                            d && (b = b.toLowerCase());
                            for (var f = 0, g = a.length, h; f < g; f++) {
                                if (h = a[f]) {
                                    while ((h = h.previousSibling) && h
                                        .nodeType !== 1) {}
                                    a[f] = e || h && h.nodeName.toLowerCase() ===
                                        b ? h || !1 : h === b
                                }
                            }
                            e && m.filter(b, a, !0)
                        },
                        ">": function(a, b) {
                            var c, d = typeof b == "string",
                                e = 0,
                                f = a.length;
                            if (d && !l.test(b)) {
                                b = b.toLowerCase();
                                for (; e < f; e++) {
                                    c = a[e];
                                    if (c) {
                                        var g = c.parentNode;
                                        a[e] = g.nodeName.toLowerCase() ===
                                            b ? g : !1
                                    }
                                }
                            } else {
                                for (; e < f; e++) {
                                    c = a[e], c && (a[e] = d ? c.parentNode :
                                        c.parentNode === b)
                                }
                                d && m.filter(b, a, !0)
                            }
                        },
                        "": function(a, b, c) {
                            var d, f = e++,
                                g = x;
                            typeof b == "string" && !l.test(b) && (b =
                                b.toLowerCase(), d = b, g = w), g(
                                "parentNode", b, f, a, d, c)
                        },
                        "~": function(a, b, c) {
                            var d, f = e++,
                                g = x;
                            typeof b == "string" && !l.test(b) && (b =
                                b.toLowerCase(), d = b, g = w), g(
                                "previousSibling", b, f, a, d, c)
                        }
                    },
                    find: {
                        ID: function(a, b, c) {
                            if (typeof b.getElementById != "undefined" &&
                                !c) {
                                var d = b.getElementById(a[1]);
                                return d && d.parentNode ? [d] : []
                            }
                        },
                        NAME: function(a, b) {
                            if (typeof b.getElementsByName !=
                                "undefined") {
                                var c = [],
                                    d = b.getElementsByName(a[1]);
                                for (var e = 0, f = d.length; e < f; e++) {
                                    d[e].getAttribute("name") === a[1] &&
                                        c.push(d[e])
                                }
                                return c.length === 0 ? null : c
                            }
                        },
                        TAG: function(a, b) {
                            if (typeof b.getElementsByTagName !=
                                "undefined") {
                                return b.getElementsByTagName(a[1])
                            }
                        }
                    },
                    preFilter: {
                        CLASS: function(a, b, c, d, e, f) {
                            a = " " + a[1].replace(j, "") + " ";
                            if (f) {
                                return a
                            }
                            for (var g = 0, h;
                                (h = b[g]) != null; g++) {
                                h && (e ^ (h.className && (" " + h.className +
                                        " ").replace(
                                        /[\t\n\r]/g, " ").indexOf(
                                        a) >= 0) ? c || d.push(h) :
                                    c && (b[g] = !1))
                            }
                            return !1
                        },
                        ID: function(a) {
                            return a[1].replace(j, "")
                        },
                        TAG: function(a, b) {
                            return a[1].replace(j, "").toLowerCase()
                        },
                        CHILD: function(a) {
                            if (a[1] === "nth") {
                                a[2] || m.error(a[0]), a[2] = a[2].replace(
                                    /^\+|\s*/g, "");
                                var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(
                                    a[2] === "even" && "2n" || a[2] ===
                                    "odd" && "2n+1" || !/\D/.test(a[
                                        2]) && "0n+" + a[2] || a[2]
                                );
                                a[2] = b[1] + (b[2] || 1) - 0, a[3] = b[
                                    3] - 0
                            } else {
                                a[2] && m.error(a[0])
                            }
                            a[0] = e++;
                            return a
                        },
                        ATTR: function(a, b, c, d, e, f) {
                            var g = a[1] = a[1].replace(j, "");
                            !f && o.attrMap[g] && (a[1] = o.attrMap[g]),
                                a[4] = (a[4] || a[5] || "").replace(j,
                                    ""), a[2] === "~=" && (a[4] = " " +
                                    a[4] + " ");
                            return a
                        },
                        PSEUDO: function(b, c, d, e, f) {
                            if (b[1] === "not") {
                                if ((a.exec(b[3]) || "").length > 1 ||
                                    /^\w/.test(b[3])) {
                                    b[3] = m(b[3], null, null, c)
                                } else {
                                    var g = m.filter(b[3], c, d, !0 ^ f);
                                    d || e.push.apply(e, g);
                                    return !1
                                }
                            } else {
                                if (o.match.POS.test(b[0]) || o.match.CHILD
                                    .test(b[0])) {
                                    return !0
                                }
                            }
                            return b
                        },
                        POS: function(a) {
                            a.unshift(!0);
                            return a
                        }
                    },
                    filters: {
                        enabled: function(a) {
                            return a.disabled === !1 && a.type !==
                                "hidden"
                        },
                        disabled: function(a) {
                            return a.disabled === !0
                        },
                        checked: function(a) {
                            return a.checked === !0
                        },
                        selected: function(a) {
                            a.parentNode && a.parentNode.selectedIndex;
                            return a.selected === !0
                        },
                        parent: function(a) {
                            return !!a.firstChild
                        },
                        empty: function(a) {
                            return !a.firstChild
                        },
                        has: function(a, b, c) {
                            return !!m(c[3], a).length
                        },
                        header: function(a) {
                            return /h\d/i.test(a.nodeName)
                        },
                        text: function(a) {
                            var b = a.getAttribute("type"),
                                c = a.type;
                            return a.nodeName.toLowerCase() === "input" &&
                                "text" === c && (b === c || b === null)
                        },
                        radio: function(a) {
                            return a.nodeName.toLowerCase() === "input" &&
                                "radio" === a.type
                        },
                        checkbox: function(a) {
                            return a.nodeName.toLowerCase() === "input" &&
                                "checkbox" === a.type
                        },
                        file: function(a) {
                            return a.nodeName.toLowerCase() === "input" &&
                                "file" === a.type
                        },
                        password: function(a) {
                            return a.nodeName.toLowerCase() === "input" &&
                                "password" === a.type
                        },
                        submit: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return (b === "input" || b === "button") &&
                                "submit" === a.type
                        },
                        image: function(a) {
                            return a.nodeName.toLowerCase() === "input" &&
                                "image" === a.type
                        },
                        reset: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return (b === "input" || b === "button") &&
                                "reset" === a.type
                        },
                        button: function(a) {
                            var b = a.nodeName.toLowerCase();
                            return b === "input" && "button" === a.type ||
                                b === "button"
                        },
                        input: function(a) {
                            return /input|select|textarea|button/i.test(
                                a.nodeName)
                        },
                        focus: function(a) {
                            return a === a.ownerDocument.activeElement
                        }
                    },
                    setFilters: {
                        first: function(a, b) {
                            return b === 0
                        },
                        last: function(a, b, c, d) {
                            return b === d.length - 1
                        },
                        even: function(a, b) {
                            return b % 2 === 0
                        },
                        odd: function(a, b) {
                            return b % 2 === 1
                        },
                        lt: function(a, b, c) {
                            return b < c[3] - 0
                        },
                        gt: function(a, b, c) {
                            return b > c[3] - 0
                        },
                        nth: function(a, b, c) {
                            return c[3] - 0 === b
                        },
                        eq: function(a, b, c) {
                            return c[3] - 0 === b
                        }
                    },
                    filter: {
                        PSEUDO: function(a, b, c, d) {
                            var e = b[1],
                                f = o.filters[e];
                            if (f) {
                                return f(a, c, b, d)
                            }
                            if (e === "contains") {
                                return (a.textContent || a.innerText ||
                                        n([a]) || "").indexOf(b[3]) >=
                                    0
                            }
                            if (e === "not") {
                                var g = b[3];
                                for (var h = 0, i = g.length; h < i; h++) {
                                    if (g[h] === a) {
                                        return !1
                                    }
                                }
                                return !0
                            }
                            m.error(e)
                        },
                        CHILD: function(a, b) {
                            var c, e, f, g, h, i, j, k = b[1],
                                l = a;
                            switch (k) {
                                case "only":
                                case "first":
                                    while (l = l.previousSibling) {
                                        if (l.nodeType === 1) {
                                            return !1
                                        }
                                    }
                                    if (k === "first") {
                                        return !0
                                    }
                                    l = a;
                                case "last":
                                    while (l = l.nextSibling) {
                                        if (l.nodeType === 1) {
                                            return !1
                                        }
                                    }
                                    return !0;
                                case "nth":
                                    c = b[2], e = b[3];
                                    if (c === 1 && e === 0) {
                                        return !0
                                    }
                                    f = b[0], g = a.parentNode;
                                    if (g && (g[d] !== f || !a.nodeIndex)) {
                                        i = 0;
                                        for (l = g.firstChild; l; l = l
                                            .nextSibling) {
                                            l.nodeType === 1 && (l.nodeIndex = ++
                                                i)
                                        }
                                        g[d] = f
                                    }
                                    j = a.nodeIndex - e;
                                    return c === 0 ? j === 0 : j % c ===
                                        0 && j / c >= 0
                            }
                        },
                        ID: function(a, b) {
                            return a.nodeType === 1 && a.getAttribute(
                                "id") === b
                        },
                        TAG: function(a, b) {
                            return b === "*" && a.nodeType === 1 || !!a
                                .nodeName && a.nodeName.toLowerCase() ===
                                b
                        },
                        CLASS: function(a, b) {
                            return (" " + (a.className || a.getAttribute(
                                "class")) + " ").indexOf(b) > -1
                        },
                        ATTR: function(a, b) {
                            var c = b[1],
                                d = m.attr ? m.attr(a, c) : o.attrHandle[
                                    c] ? o.attrHandle[c](a) : a[c] !=
                                null ? a[c] : a.getAttribute(c),
                                e = d + "",
                                f = b[2],
                                g = b[4];
                            return d == null ? f === "!=" : !f && m.attr ?
                                d != null : f === "=" ? e === g : f ===
                                "*=" ? e.indexOf(g) >= 0 : f === "~=" ?
                                (" " + e + " ").indexOf(g) >= 0 : g ? f ===
                                "!=" ? e !== g : f === "^=" ? e.indexOf(
                                    g) === 0 : f === "$=" ? e.substr(e.length -
                                    g.length) === g : f === "|=" ? e ===
                                g || e.substr(0, g.length + 1) === g +
                                "-" : !1 : e && d !== !1
                        },
                        POS: function(a, b, c, d) {
                            var e = b[2],
                                f = o.setFilters[e];
                            if (f) {
                                return f(a, c, b, d)
                            }
                        }
                    }
                },
                p = o.match.POS,
                q = function(a, b) {
                    return "\\" + (b - 0 + 1)
                };
            for (var r in o.match) {
                o.match[r] = new RegExp(o.match[r].source +
                        /(?![^\[]*\])(?![^\(]*\))/.source), o.leftMatch[r] =
                    new RegExp(/(^(?:.|\r|\n)*?)/.source + o.match[r].source
                        .replace(/\\(\d+)/g, q))
            }
            o.match.globalPOS = p;
            var s = function(a, b) {
                a = Array.prototype.slice.call(a, 0);
                if (b) {
                    b.push.apply(b, a);
                    return b
                }
                return a
            };
            try {
                Array.prototype.slice.call(c.documentElement.childNodes, 0)[
                    0].nodeType
            } catch (t) {
                s = function(a, b) {
                    var c = 0,
                        d = b || [];
                    if (g.call(a) === "[object Array]") {
                        Array.prototype.push.apply(d, a)
                    } else {
                        if (typeof a.length == "number") {
                            for (var e = a.length; c < e; c++) {
                                d.push(a[c])
                            }
                        } else {
                            for (; a[c]; c++) {
                                d.push(a[c])
                            }
                        }
                    }
                    return d
                }
            }
            var u, v;
            c.documentElement.compareDocumentPosition ? u = function(a, b) {
                    if (a === b) {
                        h = !0;
                        return 0
                    }
                    if (!a.compareDocumentPosition || !b.compareDocumentPosition) {
                        return a.compareDocumentPosition ? -1 : 1
                    }
                    return a.compareDocumentPosition(b) & 4 ? -1 : 1
                } : (u = function(a, b) {
                    if (a === b) {
                        h = !0;
                        return 0
                    }
                    if (a.sourceIndex && b.sourceIndex) {
                        return a.sourceIndex - b.sourceIndex
                    }
                    var c, d, e = [],
                        f = [],
                        g = a.parentNode,
                        i = b.parentNode,
                        j = g;
                    if (g === i) {
                        return v(a, b)
                    }
                    if (!g) {
                        return -1
                    }
                    if (!i) {
                        return 1
                    }
                    while (j) {
                        e.unshift(j), j = j.parentNode
                    }
                    j = i;
                    while (j) {
                        f.unshift(j), j = j.parentNode
                    }
                    c = e.length, d = f.length;
                    for (var k = 0; k < c && k < d; k++) {
                        if (e[k] !== f[k]) {
                            return v(e[k], f[k])
                        }
                    }
                    return k === c ? v(a, f[k], -1) : v(e[k], b, 1)
                }, v = function(a, b, c) {
                    if (a === b) {
                        return c
                    }
                    var d = a.nextSibling;
                    while (d) {
                        if (d === b) {
                            return -1
                        }
                        d = d.nextSibling
                    }
                    return 1
                }),
                function() {
                    var a = c.createElement("div"),
                        d = "script" + (new Date).getTime(),
                        e = c.documentElement;
                    a.innerHTML = "<a name='" + d + "'/>", e.insertBefore(a,
                        e.firstChild), c.getElementById(d) && (o.find.ID =
                        function(a, c, d) {
                            if (typeof c.getElementById != "undefined" &&
                                !d) {
                                var e = c.getElementById(a[1]);
                                return e ? e.id === a[1] || typeof e.getAttributeNode !=
                                    "undefined" && e.getAttributeNode(
                                        "id").nodeValue === a[1] ? [e] :
                                    b : []
                            }
                        }, o.filter.ID = function(a, b) {
                            var c = typeof a.getAttributeNode !=
                                "undefined" && a.getAttributeNode("id");
                            return a.nodeType === 1 && c && c.nodeValue ===
                                b
                        }), e.removeChild(a), e = a = null
                }(),
                function() {
                    var a = c.createElement("div");
                    a.appendChild(c.createComment("")), a.getElementsByTagName(
                            "*").length > 0 && (o.find.TAG = function(a, b) {
                            var c = b.getElementsByTagName(a[1]);
                            if (a[1] === "*") {
                                var d = [];
                                for (var e = 0; c[e]; e++) {
                                    c[e].nodeType === 1 && d.push(c[e])
                                }
                                c = d
                            }
                            return c
                        }), a.innerHTML = "<a href='#'></a>", a.firstChild &&
                        typeof a.firstChild.getAttribute != "undefined" &&
                        a.firstChild.getAttribute("href") !== "#" && (o.attrHandle
                            .href = function(a) {
                                return a.getAttribute("href", 2)
                            }), a = null
                }(), c.querySelectorAll && function() {
                    var a = m,
                        b = c.createElement("div"),
                        d = "__sizzle__";
                    b.innerHTML = "<p class='TEST'></p>";
                    if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !==
                        0) {
                        m = function(b, e, f, g) {
                            e = e || c;
                            if (!g && !m.isXML(e)) {
                                var h =
                                    /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/
                                    .exec(b);
                                if (h && (e.nodeType === 1 || e.nodeType ===
                                    9)) {
                                    if (h[1]) {
                                        return s(e.getElementsByTagName(
                                            b), f)
                                    }
                                    if (h[2] && o.find.CLASS && e.getElementsByClassName) {
                                        return s(e.getElementsByClassName(
                                            h[2]), f)
                                    }
                                }
                                if (e.nodeType === 9) {
                                    if (b === "body" && e.body) {
                                        return s([e.body], f)
                                    }
                                    if (h && h[3]) {
                                        var i = e.getElementById(h[3]);
                                        if (!i || !i.parentNode) {
                                            return s([], f)
                                        }
                                        if (i.id === h[3]) {
                                            return s([i], f)
                                        }
                                    }
                                    try {
                                        return s(e.querySelectorAll(b),
                                            f)
                                    } catch (j) {}
                                } else {
                                    if (e.nodeType === 1 && e.nodeName.toLowerCase() !==
                                        "object") {
                                        var k = e,
                                            l = e.getAttribute("id"),
                                            n = l || d,
                                            p = e.parentNode,
                                            q = /^\s*[+~]/.test(b);
                                        l ? n = n.replace(/'/g, "\\$&") :
                                            e.setAttribute("id", n), q &&
                                            p && (e = e.parentNode);
                                        try {
                                            if (!q || p) {
                                                return s(e.querySelectorAll(
                                                        "[id='" + n +
                                                        "'] " + b),
                                                    f)
                                            }
                                        } catch (r) {} finally {
                                            l || k.removeAttribute("id")
                                        }
                                    }
                                }
                            }
                            return a(b, e, f, g)
                        };
                        for (var e in a) {
                            m[e] = a[e]
                        }
                        b = null
                    }
                }(),
                function() {
                    var a = c.documentElement,
                        b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector ||
                        a.msMatchesSelector;
                    if (b) {
                        var d = !b.call(c.createElement("div"), "div"),
                            e = !1;
                        try {
                            b.call(c.documentElement, "[test!='']:sizzle")
                        } catch (f) {
                            e = !0
                        }
                        m.matchesSelector = function(a, c) {
                            c = c.replace(/\=\s*([^'"\]]*)\s*\]/g,
                                "='$1']");
                            if (!m.isXML(a)) {
                                try {
                                    if (e || !o.match.PSEUDO.test(c) &&
                                        !/!=/.test(c)) {
                                        var f = b.call(a, c);
                                        if (f || !d || a.document && a.document
                                            .nodeType !== 11) {
                                            return f
                                        }
                                    }
                                } catch (g) {}
                            }
                            return m(c, null, null, [a]).length > 0
                        }
                    }
                }(),
                function() {
                    var a = c.createElement("div");
                    a.innerHTML =
                        "<div class='test e'></div><div class='test'></div>";
                    if (!!a.getElementsByClassName && a.getElementsByClassName(
                        "e").length !== 0) {
                        a.lastChild.className = "e";
                        if (a.getElementsByClassName("e").length === 1) {
                            return
                        }
                        o.order.splice(1, 0, "CLASS"), o.find.CLASS =
                            function(a, b, c) {
                                if (typeof b.getElementsByClassName !=
                                    "undefined" && !c) {
                                    return b.getElementsByClassName(a[1])
                                }
                            }, a = null
                    }
                }(), c.documentElement.contains ? m.contains = function(a,
                    b) {
                    return a !== b && (a.contains ? a.contains(b) : !0)
                } : c.documentElement.compareDocumentPosition ? m.contains =
                function(a, b) {
                    return !!(a.compareDocumentPosition(b) & 16)
                } : m.contains = function() {
                    return !1
                }, m.isXML = function(a) {
                    var b = (a ? a.ownerDocument || a : 0).documentElement;
                    return b ? b.nodeName !== "HTML" : !1
                };
            var y = function(a, b, c) {
                var d, e = [],
                    f = "",
                    g = b.nodeType ? [b] : b;
                while (d = o.match.PSEUDO.exec(a)) {
                    f += d[0], a = a.replace(o.match.PSEUDO, "")
                }
                a = o.relative[a] ? a + "*" : a;
                for (var h = 0, i = g.length; h < i; h++) {
                    m(a, g[h], e, c)
                }
                return m.filter(f, e)
            };
            m.attr = f.attr, m.selectors.attrMap = {}, f.find = m, f.expr =
                m.selectors, f.expr[":"] = f.expr.filters, f.unique = m.uniqueSort,
                f.text = m.getText, f.isXMLDoc = m.isXML, f.contains = m.contains
        }();
    var L = /Until$/,
        M = /^(?:parents|prevUntil|prevAll)/,
        N = /,/,
        O = /^.[^:#\[\.,]*$/,
        P = Array.prototype.slice,
        Q = f.expr.match.globalPOS,
        R = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function(a) {
            var b = this,
                c, d;
            if (typeof a != "string") {
                return f(a).filter(function() {
                    for (c = 0, d = b.length; c < d; c++) {
                        if (f.contains(b[c], this)) {
                            return !0
                        }
                    }
                })
            }
            var e = this.pushStack("", "find", a),
                g, h, i;
            for (c = 0, d = this.length; c < d; c++) {
                g = e.length, f.find(a, this[c], e);
                if (c > 0) {
                    for (h = g; h < e.length; h++) {
                        for (i = 0; i < g; i++) {
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            }
                        }
                    }
                }
            }
            return e
        },
        has: function(a) {
            var b = f(a);
            return this.filter(function() {
                for (var a = 0, c = b.length; a < c; a++) {
                    if (f.contains(this, b[a])) {
                        return !0
                    }
                }
            })
        },
        not: function(a) {
            return this.pushStack(T(this, a, !1), "not", a)
        },
        filter: function(a) {
            return this.pushStack(T(this, a, !0), "filter", a)
        },
        is: function(a) {
            return !!a && (typeof a == "string" ? Q.test(a) ? f(
                    a, this.context).index(this[0]) >= 0 :
                f.filter(a, this).length > 0 : this.filter(
                    a).length > 0)
        },
        closest: function(a, b) {
            var c = [],
                d, e, g = this[0];
            if (f.isArray(a)) {
                var h = 1;
                while (g && g.ownerDocument && g !== b) {
                    for (d = 0; d < a.length; d++) {
                        f(g).is(a[d]) && c.push({
                            selector: a[d],
                            elem: g,
                            level: h
                        })
                    }
                    g = g.parentNode, h++
                }
                return c
            }
            var i = Q.test(a) || typeof a != "string" ? f(a, b ||
                this.context) : 0;
            for (d = 0, e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (i ? i.index(g) > -1 : f.find.matchesSelector(
                        g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType ===
                        11) {
                        break
                    }
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function(a) {
            if (!a) {
                return this[0] && this[0].parentNode ? this.prevAll()
                    .length : -1
            }
            if (typeof a == "string") {
                return f.inArray(this[0], f(a))
            }
            return f.inArray(a.jquery ? a[0] : a, this)
        },
        add: function(a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(
                    a && a.nodeType ? [a] : a),
                d = f.merge(this.get(), c);
            return this.pushStack(S(c[0]) || S(d[0]) ? d : f.unique(
                d))
        },
        andSelf: function() {
            return this.add(this.prevObject)
        }
    }), f.each({
        parent: function(a) {
            var b = a.parentNode;
            return b && b.nodeType !== 11 ? b : null
        },
        parents: function(a) {
            return f.dir(a, "parentNode")
        },
        parentsUntil: function(a, b, c) {
            return f.dir(a, "parentNode", c)
        },
        next: function(a) {
            return f.nth(a, 2, "nextSibling")
        },
        prev: function(a) {
            return f.nth(a, 2, "previousSibling")
        },
        nextAll: function(a) {
            return f.dir(a, "nextSibling")
        },
        prevAll: function(a) {
            return f.dir(a, "previousSibling")
        },
        nextUntil: function(a, b, c) {
            return f.dir(a, "nextSibling", c)
        },
        prevUntil: function(a, b, c) {
            return f.dir(a, "previousSibling", c)
        },
        siblings: function(a) {
            return f.sibling((a.parentNode || {}).firstChild, a)
        },
        children: function(a) {
            return f.sibling(a.firstChild)
        },
        contents: function(a) {
            return f.nodeName(a, "iframe") ? a.contentDocument ||
                a.contentWindow.document : f.makeArray(a.childNodes)
        }
    }, function(a, b) {
        f.fn[a] = function(c, d) {
            var e = f.map(this, b, c);
            L.test(a) || (d = c), d && typeof d == "string" &&
                (e = f.filter(d, e)), e = this.length > 1 && !R[
                    a] ? f.unique(e) : e, (this.length > 1 || N
                    .test(d)) && M.test(a) && (e = e.reverse());
            return this.pushStack(e, a, P.call(arguments).join(
                ","))
        }
    }), f.extend({
        filter: function(a, b, c) {
            c && (a = ":not(" + a + ")");
            return b.length === 1 ? f.find.matchesSelector(b[0],
                a) ? [b[0]] : [] : f.find.matches(a, b)
        },
        dir: function(a, c, d) {
            var e = [],
                g = a[c];
            while (g && g.nodeType !== 9 && (d === b || g.nodeType !==
                1 || !f(g).is(d))) {
                g.nodeType === 1 && e.push(g), g = g[c]
            }
            return e
        },
        nth: function(a, b, c, d) {
            b = b || 1;
            var e = 0;
            for (; a; a = a[c]) {
                if (a.nodeType === 1 && ++e === b) {
                    break
                }
            }
            return a
        },
        sibling: function(a, b) {
            var c = [];
            for (; a; a = a.nextSibling) {
                a.nodeType === 1 && a !== b && c.push(a)
            }
            return c
        }
    });
    var V =
        "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        W = / jQuery\d+="(?:\d+|null)"/g,
        X = /^\s+/,
        Y =
        /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
        Z = /<([\w:]+)/,
        $ = /<tbody/i,
        _ = /<|&#?\w+;/,
        ba = /<(?:script|style)/i,
        bb = /<(?:script|object|embed|option|style)/i,
        bc = new RegExp("<(?:" + V + ")[\\s/>]", "i"),
        bd = /checked\s*(?:[^=]|=\s*.checked.)/i,
        be = /\/(java|ecma)script/i,
        bf = /^\s*<!(?:\[CDATA\[|\-\-)/,
        bg = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>",
                "</colgroup></table>"
            ],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        },
        bh = U(c);
    bg.optgroup = bg.option, bg.tbody = bg.tfoot = bg.colgroup = bg.caption =
        bg.thead, bg.th = bg.td, f.support.htmlSerialize || (bg._default = [
            1, "div<div>", "</div>"
        ]), f.fn.extend({
            text: function(a) {
                return f.access(this, function(a) {
                    return a === b ? f.text(this) : this.empty()
                        .append((this[0] && this[0].ownerDocument ||
                            c).createTextNode(a))
                }, null, a, arguments.length)
            },
            wrapAll: function(a) {
                if (f.isFunction(a)) {
                    return this.each(function(b) {
                        f(this).wrapAll(a.call(this, b))
                    })
                }
                if (this[0]) {
                    var b = f(a, this[0].ownerDocument).eq(0).clone(!
                        0);
                    this[0].parentNode && b.insertBefore(this[0]),
                        b.map(function() {
                            var a = this;
                            while (a.firstChild && a.firstChild
                                .nodeType === 1) {
                                a = a.firstChild
                            }
                            return a
                        }).append(this)
                }
                return this
            },
            wrapInner: function(a) {
                if (f.isFunction(a)) {
                    return this.each(function(b) {
                        f(this).wrapInner(a.call(this, b))
                    })
                }
                return this.each(function() {
                    var b = f(this),
                        c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function(a) {
                var b = f.isFunction(a);
                return this.each(function(c) {
                    f(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    f.nodeName(this, "body") || f(this).replaceWith(
                        this.childNodes)
                }).end()
            },
            append: function() {
                return this.domManip(arguments, !0, function(a) {
                    this.nodeType === 1 && this.appendChild(
                        a)
                })
            },
            prepend: function() {
                return this.domManip(arguments, !0, function(a) {
                    this.nodeType === 1 && this.insertBefore(
                        a, this.firstChild)
                })
            },
            before: function() {
                if (this[0] && this[0].parentNode) {
                    return this.domManip(arguments, !1, function(a) {
                        this.parentNode.insertBefore(a,
                            this)
                    })
                }
                if (arguments.length) {
                    var a = f.clean(arguments);
                    a.push.apply(a, this.toArray());
                    return this.pushStack(a, "before", arguments)
                }
            },
            after: function() {
                if (this[0] && this[0].parentNode) {
                    return this.domManip(arguments, !1, function(a) {
                        this.parentNode.insertBefore(a,
                            this.nextSibling)
                    })
                }
                if (arguments.length) {
                    var a = this.pushStack(this, "after", arguments);
                    a.push.apply(a, f.clean(arguments));
                    return a
                }
            },
            remove: function(a, b) {
                for (var c = 0, d;
                    (d = this[c]) != null; c++) {
                    if (!a || f.filter(a, [d]).length) {
                        !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName(
                                "*")), f.cleanData([d])), d.parentNode &&
                            d.parentNode.removeChild(d)
                    }
                }
                return this
            },
            empty: function() {
                for (var a = 0, b;
                    (b = this[a]) != null; a++) {
                    b.nodeType === 1 && f.cleanData(b.getElementsByTagName(
                        "*"));
                    while (b.firstChild) {
                        b.removeChild(b.firstChild)
                    }
                }
                return this
            },
            clone: function(a, b) {
                a = a == null ? !1 : a, b = b == null ? a : b;
                return this.map(function() {
                    return f.clone(this, a, b)
                })
            },
            html: function(a) {
                return f.access(this, function(a) {
                    var c = this[0] || {},
                        d = 0,
                        e = this.length;
                    if (a === b) {
                        return c.nodeType === 1 ? c.innerHTML
                            .replace(W, "") : null
                    }
                    if (typeof a == "string" && !ba.test(a) &&
                        (f.support.leadingWhitespace || !X.test(
                            a)) && !bg[(Z.exec(a) || ["",
                            ""
                        ])[1].toLowerCase()]) {
                        a = a.replace(Y, "<$1></$2>");
                        try {
                            for (; d < e; d++) {
                                c = this[d] || {}, c.nodeType ===
                                    1 && (f.cleanData(c.getElementsByTagName(
                                            "*")), c.innerHTML =
                                        a)
                            }
                            c = 0
                        } catch (g) {}
                    }
                    c && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function(a) {
                if (this[0] && this[0].parentNode) {
                    if (f.isFunction(a)) {
                        return this.each(function(b) {
                            var c = f(this),
                                d = c.html();
                            c.replaceWith(a.call(this, b, d))
                        })
                    }
                    typeof a != "string" && (a = f(a).detach());
                    return this.each(function() {
                        var b = this.nextSibling,
                            c = this.parentNode;
                        f(this).remove(), b ? f(b).before(a) :
                            f(c).append(a)
                    })
                }
                return this.length ? this.pushStack(f(f.isFunction(
                    a) ? a() : a), "replaceWith", a) : this
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, c, d) {
                var e, g, h, i, j = a[0],
                    k = [];
                if (!f.support.checkClone && arguments.length === 3 &&
                    typeof j == "string" && bd.test(j)) {
                    return this.each(function() {
                        f(this).domManip(a, c, d, !0)
                    })
                }
                if (f.isFunction(j)) {
                    return this.each(function(e) {
                        var g = f(this);
                        a[0] = j.call(this, e, c ? g.html() :
                            b), g.domManip(a, c, d)
                    })
                }
                if (this[0]) {
                    i = j && j.parentNode, f.support.parentNode &&
                        i && i.nodeType === 11 && i.childNodes.length ===
                        this.length ? e = {
                            fragment: i
                        } : e = f.buildFragment(a, this, k), h = e.fragment,
                        h.childNodes.length === 1 ? g = h = h.firstChild :
                        g = h.firstChild;
                    if (g) {
                        c = c && f.nodeName(g, "tr");
                        for (var l = 0, m = this.length, n = m - 1; l <
                            m; l++) {
                            d.call(c ? bi(this[l], g) : this[l], e.cacheable ||
                                m > 1 && l < n ? f.clone(h, !0, !
                                    0) : h)
                        }
                    }
                    k.length && f.each(k, function(a, b) {
                        b.src ? f.ajax({
                                type: "GET",
                                global: !1,
                                url: b.src,
                                async: !1,
                                dataType: "script"
                            }) : f.globalEval((b.text || b.textContent ||
                                b.innerHTML || "").replace(
                                bf, "/*$0*/")), b.parentNode &&
                            b.parentNode.removeChild(b)
                    })
                }
                return this
            }
        }), f.buildFragment = function(a, b, d) {
            var e, g, h, i, j = a[0];
            b && b[0] && (i = b[0].ownerDocument || b[0]), i.createDocumentFragment ||
                (i = c), a.length === 1 && typeof j == "string" && j.length <
                512 && i === c && j.charAt(0) === "<" && !bb.test(j) && (f.support
                    .checkClone || !bd.test(j)) && (f.support.html5Clone ||
                    !bc.test(j)) && (g = !0, h = f.fragments[j], h && h !==
                    1 && (e = h)), e || (e = i.createDocumentFragment(), f.clean(
                    a, i, e, d)), g && (f.fragments[j] = h ? e : 1);
            return {
                fragment: e,
                cacheable: g
            }
        }, f.fragments = {}, f.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            f.fn[a] = function(c) {
                var d = [],
                    e = f(c),
                    g = this.length === 1 && this[0].parentNode;
                if (g && g.nodeType === 11 && g.childNodes.length ===
                    1 && e.length === 1) {
                    e[b](this[0]);
                    return this
                }
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = (h > 0 ? this.clone(!0) : this).get();
                    f(e[h])[b](j), d = d.concat(j)
                }
                return this.pushStack(d, a, e.selector)
            }
        }), f.extend({
            clone: function(a, b, c) {
                var d, e, g, h = f.support.html5Clone || f.isXMLDoc(
                    a) || !bc.test("<" + a.nodeName + ">") ? a.cloneNode(!
                    0) : bo(a);
                if ((!f.support.noCloneEvent || !f.support.noCloneChecked) &&
                    (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(
                        a)) {
                    bk(a, h), d = bl(a), e = bl(h);
                    for (g = 0; d[g]; ++g) {
                        e[g] && bk(d[g], e[g])
                    }
                }
                if (b) {
                    bj(a, h);
                    if (c) {
                        d = bl(a), e = bl(h);
                        for (g = 0; d[g]; ++g) {
                            bj(d[g], e[g])
                        }
                    }
                }
                d = e = null;
                return h
            },
            clean: function(a, b, d, e) {
                var g, h, i, j = [];
                b = b || c, typeof b.createElement == "undefined" &&
                    (b = b.ownerDocument || b[0] && b[0].ownerDocument ||
                        c);
                for (var k = 0, l;
                    (l = a[k]) != null; k++) {
                    typeof l == "number" && (l += "");
                    if (!l) {
                        continue
                    }
                    if (typeof l == "string") {
                        if (!_.test(l)) {
                            l = b.createTextNode(l)
                        } else {
                            l = l.replace(Y, "<$1></$2>");
                            var m = (Z.exec(l) || ["", ""])[1].toLowerCase(),
                                n = bg[m] || bg._default,
                                o = n[0],
                                p = b.createElement("div"),
                                q = bh.childNodes,
                                r;
                            b === c ? bh.appendChild(p) : U(b).appendChild(
                                p), p.innerHTML = n[1] + l + n[
                                2];
                            while (o--) {
                                p = p.lastChild
                            }
                            if (!f.support.tbody) {
                                var s = $.test(l),
                                    t = m === "table" && !s ? p.firstChild &&
                                    p.firstChild.childNodes : n[1] ===
                                    "<table>" && !s ? p.childNodes : [];
                                for (i = t.length - 1; i >= 0; --i) {
                                    f.nodeName(t[i], "tbody") && !t[
                                            i].childNodes.length &&
                                        t[i].parentNode.removeChild(
                                            t[i])
                                }
                            }!f.support.leadingWhitespace && X.test(
                                    l) && p.insertBefore(b.createTextNode(
                                    X.exec(l)[0]), p.firstChild), l =
                                p.childNodes, p && (p.parentNode.removeChild(
                                    p), q.length > 0 && (r = q[
                                        q.length - 1], r && r.parentNode &&
                                    r.parentNode.removeChild(r)
                                ))
                        }
                    }
                    var u;
                    if (!f.support.appendChecked) {
                        if (l[0] && typeof(u = l.length) ==
                            "number") {
                            for (i = 0; i < u; i++) {
                                bn(l[i])
                            }
                        } else {
                            bn(l)
                        }
                    }
                    l.nodeType ? j.push(l) : j = f.merge(j, l)
                }
                if (d) {
                    g = function(a) {
                        return !a.type || be.test(a.type)
                    };
                    for (k = 0; j[k]; k++) {
                        h = j[k];
                        if (e && f.nodeName(h, "script") && (!h.type ||
                            be.test(h.type))) {
                            e.push(h.parentNode ? h.parentNode.removeChild(
                                h) : h)
                        } else {
                            if (h.nodeType === 1) {
                                var v = f.grep(h.getElementsByTagName(
                                    "script"), g);
                                j.splice.apply(j, [k + 1, 0].concat(
                                    v))
                            }
                            d.appendChild(h)
                        }
                    }
                }
                return j
            },
            cleanData: function(a) {
                var b, c, d = f.cache,
                    e = f.event.special,
                    g = f.support.deleteExpando;
                for (var h = 0, i;
                    (i = a[h]) != null; h++) {
                    if (i.nodeName && f.noData[i.nodeName.toLowerCase()]) {
                        continue
                    }
                    c = i[f.expando];
                    if (c) {
                        b = d[c];
                        if (b && b.events) {
                            for (var j in b.events) {
                                e[j] ? f.event.remove(i, j) : f.removeEvent(
                                    i, j, b.handle)
                            }
                            b.handle && (b.handle.elem = null)
                        }
                        g ? delete i[f.expando] : i.removeAttribute &&
                            i.removeAttribute(f.expando), delete d[
                                c]
                    }
                }
            }
        });
    var bp = /alpha\([^)]*\)/i,
        bq = /opacity=([^)]*)/,
        br = /([A-Z]|^ms)/g,
        bs = /^[\-+]?(?:\d*\.)?\d+$/i,
        bt = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i,
        bu = /^([\-+])=([\-+.\de]+)/,
        bv = /^margin/,
        bw = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        bx = ["Top", "Right", "Bottom", "Left"],
        by, bz, bA;
    f.fn.css = function(a, c) {
            return f.access(this, function(a, c, d) {
                return d !== b ? f.style(a, c, d) : f.css(a, c)
            }, a, c, arguments.length > 1)
        }, f.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = by(a, "opacity");
                            return c === "" ? "1" : c
                        }
                        return a.style.opacity
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(a, c, d, e) {
                if (!!a && a.nodeType !== 3 && a.nodeType !== 8 &&
                    !!a.style) {
                    var g, h, i = f.camelCase(c),
                        j = a.style,
                        k = f.cssHooks[i];
                    c = f.cssProps[i] || i;
                    if (d === b) {
                        if (k && "get" in k && (g = k.get(a, !1, e)) !==
                            b) {
                            return g
                        }
                        return j[c]
                    }
                    h = typeof d, h === "string" && (g = bu.exec(d)) &&
                        (d = +(g[1] + 1) * +g[2] + parseFloat(f.css(
                            a, c)), h = "number");
                    if (d == null || h === "number" && isNaN(d)) {
                        return
                    }
                    h === "number" && !f.cssNumber[i] && (d += "px");
                    if (!k || !("set" in k) || (d = k.set(a, d)) !==
                        b) {
                        try {
                            j[c] = d
                        } catch (l) {}
                    }
                }
            },
            css: function(a, c, d) {
                var e, g;
                c = f.camelCase(c), g = f.cssHooks[c], c = f.cssProps[
                    c] || c, c === "cssFloat" && (c = "float");
                if (g && "get" in g && (e = g.get(a, !0, d)) !== b) {
                    return e
                }
                if (by) {
                    return by(a, c)
                }
            },
            swap: function(a, b, c) {
                var d = {},
                    e, f;
                for (f in b) {
                    d[f] = a.style[f], a.style[f] = b[f]
                }
                e = c.call(a);
                for (f in b) {
                    a.style[f] = d[f]
                }
                return e
            }
        }), f.curCSS = f.css, c.defaultView && c.defaultView.getComputedStyle &&
        (bz = function(a, b) {
            var c, d, e, g, h = a.style;
            b = b.replace(br, "-$1").toLowerCase(), (d = a.ownerDocument
                    .defaultView) && (e = d.getComputedStyle(a, null)) &&
                (c = e.getPropertyValue(b), c === "" && !f.contains(a.ownerDocument
                    .documentElement, a) && (c = f.style(a, b))), !f.support
                .pixelMargin && e && bv.test(b) && bt.test(c) && (g = h
                    .width, h.width = c, c = e.width, h.width = g);
            return c
        }), c.documentElement.currentStyle && (bA = function(a, b) {
            var c, d, e, f = a.currentStyle && a.currentStyle[b],
                g = a.style;
            f == null && g && (e = g[b]) && (f = e), bt.test(f) && (c =
                g.left, d = a.runtimeStyle && a.runtimeStyle.left,
                d && (a.runtimeStyle.left = a.currentStyle.left), g
                .left = b === "fontSize" ? "1em" : f, f = g.pixelLeft +
                "px", g.left = c, d && (a.runtimeStyle.left = d));
            return f === "" ? "auto" : f
        }), by = bz || bA, f.each(["height", "width"], function(a, b) {
            f.cssHooks[b] = {
                get: function(a, c, d) {
                    if (c) {
                        return a.offsetWidth !== 0 ? bB(a, b, d) :
                            f.swap(a, bw, function() {
                                return bB(a, b, d)
                            })
                    }
                },
                set: function(a, b) {
                    return bs.test(b) ? b + "px" : b
                }
            }
        }), f.support.opacity || (f.cssHooks.opacity = {
            get: function(a, b) {
                return bq.test((b && a.currentStyle ? a.currentStyle
                        .filter : a.style.filter) || "") ?
                    parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
            },
            set: function(a, b) {
                var c = a.style,
                    d = a.currentStyle,
                    e = f.isNumeric(b) ? "alpha(opacity=" + b * 100 +
                    ")" : "",
                    g = d && d.filter || c.filter || "";
                c.zoom = 1;
                if (b >= 1 && f.trim(g.replace(bp, "")) === "") {
                    c.removeAttribute("filter");
                    if (d && !d.filter) {
                        return
                    }
                }
                c.filter = bp.test(g) ? g.replace(bp, e) : g + " " +
                    e
            }
        }), f(function() {
            f.support.reliableMarginRight || (f.cssHooks.marginRight = {
                get: function(a, b) {
                    return f.swap(a, {
                        display: "inline-block"
                    }, function() {
                        return b ? by(a,
                                "margin-right") : a
                            .style.marginRight
                    })
                }
            })
        }), f.expr && f.expr.filters && (f.expr.filters.hidden = function(a) {
            var b = a.offsetWidth,
                c = a.offsetHeight;
            return b === 0 && c === 0 || !f.support.reliableHiddenOffsets &&
                (a.style && a.style.display || f.css(a, "display")) ===
                "none"
        }, f.expr.filters.visible = function(a) {
            return !f.expr.filters.hidden(a)
        }), f.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            f.cssHooks[a + b] = {
                expand: function(c) {
                    var d, e = typeof c == "string" ? c.split(
                            " ") : [c],
                        f = {};
                    for (d = 0; d < 4; d++) {
                        f[a + bx[d] + b] = e[d] || e[d - 2] ||
                            e[0]
                    }
                    return f
                }
            }
        });
    var bC = /%20/g,
        bD = /\[\]$/,
        bE = /\r?\n/g,
        bF = /#.*$/,
        bG = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
        bH =
        /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        bI = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        bJ = /^(?:GET|HEAD)$/,
        bK = /^\/\//,
        bL = /\?/,
        bM = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        bN = /^(?:select|textarea)/i,
        bO = /\s+/,
        bP = /([?&])_=[^&]*/,
        bQ = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,
        bR = f.fn.load,
        bS = {},
        bT = {},
        bU, bV, bW = ["*/"] + ["*"];
    try {
        bU = e.href
    } catch (bX) {
        bU = c.createElement("a"), bU.href = "", bU = bU.href
    }
    bV = bQ.exec(bU.toLowerCase()) || [], f.fn.extend({
        load: function(a, c, d) {
            if (typeof a != "string" && bR) {
                return bR.apply(this, arguments)
            }
            if (!this.length) {
                return this
            }
            var e = a.indexOf(" ");
            if (e >= 0) {
                var g = a.slice(e, a.length);
                a = a.slice(0, e)
            }
            var h = "GET";
            c && (f.isFunction(c) ? (d = c, c = b) : typeof c ==
                "object" && (c = f.param(c, f.ajaxSettings.traditional),
                    h = "POST"));
            var i = this;
            f.ajax({
                url: a,
                type: h,
                dataType: "html",
                data: c,
                complete: function(a, b, c) {
                    c = a.responseText, a.isResolved() &&
                        (a.done(function(a) {
                            c = a
                        }), i.html(g ? f(
                                "<div>").append(
                                c.replace(bM,
                                    "")).find(g) :
                            c)), d && i.each(d, [c,
                            b, a
                        ])
                }
            });
            return this
        },
        serialize: function() {
            return f.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                return this.elements ? f.makeArray(this
                    .elements) : this
            }).filter(function() {
                return this.name && !this.disabled && (
                    this.checked || bN.test(this.nodeName) ||
                    bH.test(this.type))
            }).map(function(a, b) {
                var c = f(this).val();
                return c == null ? null : f.isArray(c) ?
                    f.map(c, function(a, c) {
                        return {
                            name: b.name,
                            value: a.replace(bE,
                                "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(bE, "\r\n")
                    }
            }).get()
        }
    }), f.each(
        "ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend"
        .split(" "), function(a, b) {
            f.fn[b] = function(a) {
                return this.on(b, a)
            }
        }), f.each(["get", "post"], function(a, c) {
        f[c] = function(a, d, e, g) {
            f.isFunction(d) && (g = g || e, e = d, d = b);
            return f.ajax({
                type: c,
                url: a,
                data: d,
                success: e,
                dataType: g
            })
        }
    }), f.extend({
        getScript: function(a, c) {
            return f.get(a, b, c, "script")
        },
        getJSON: function(a, b, c) {
            return f.get(a, b, c, "json")
        },
        ajaxSetup: function(a, b) {
            b ? b$(a, f.ajaxSettings) : (b = a, a = f.ajaxSettings),
                b$(a, b);
            return a
        },
        ajaxSettings: {
            url: bU,
            isLocal: bI.test(bV[1]),
            global: !0,
            type: "GET",
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            processData: !0,
            async: !0,
            accepts: {
                xml: "application/xml, text/xml",
                html: "text/html",
                text: "text/plain",
                json: "application/json, text/javascript",
                "*": bW
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText"
            },
            converters: {
                "* text": a.String,
                "text html": !0,
                "text json": f.parseJSON,
                "text xml": f.parseXML
            },
            flatOptions: {
                context: !0,
                url: !0
            }
        },
        ajaxPrefilter: bY(bS),
        ajaxTransport: bY(bT),
        ajax: function(a, c) {
            function w(a, c, l, m) {
                if (s !== 2) {
                    s = 2, q && clearTimeout(q), p = b, n =
                        m || "", v.readyState = a > 0 ? 4 :
                        0;
                    var o, r, u, w = c,
                        x = l ? ca(d, v, l) : b,
                        y, z;
                    if (a >= 200 && a < 300 || a === 304) {
                        if (d.ifModified) {
                            if (y = v.getResponseHeader(
                                "Last-Modified")) {
                                f.lastModified[k] = y
                            }
                            if (z = v.getResponseHeader(
                                "Etag")) {
                                f.etag[k] = z
                            }
                        }
                        if (a === 304) {
                            w = "notmodified", o = !0
                        } else {
                            try {
                                r = cb(d, x), w = "success",
                                    o = !0
                            } catch (A) {
                                w = "parsererror", u = A
                            }
                        }
                    } else {
                        u = w;
                        if (!w || a) {
                            w = "error", a < 0 && (a = 0)
                        }
                    }
                    v.status = a, v.statusText = "" + (c ||
                        w), o ? h.resolveWith(e, [r, w,
                        v
                    ]) : h.rejectWith(e, [v, w, u]), v.statusCode(
                        j), j = b, t && g.trigger(
                        "ajax" + (o ? "Success" :
                            "Error"), [v, d, o ? r : u]
                    ), i.fireWith(e, [v, w]), t && (g.trigger(
                            "ajaxComplete", [v, d]), --
                        f.active || f.event.trigger(
                            "ajaxStop"))
                }
            }
            typeof a == "object" && (c = a, a = b), c = c || {};
            var d = f.ajaxSetup({}, c),
                e = d.context || d,
                g = e !== d && (e.nodeType || e instanceof f) ?
                f(e) : f.event,
                h = f.Deferred(),
                i = f.Callbacks("once memory"),
                j = d.statusCode || {},
                k, l = {},
                m = {},
                n, o, p, q, r, s = 0,
                t, u, v = {
                    readyState: 0,
                    setRequestHeader: function(a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a, l[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function() {
                        return s === 2 ? n : null
                    },
                    getResponseHeader: function(a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bG.exec(n)) {
                                    o[c[1].toLowerCase()] =
                                        c[2]
                                }
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function(a) {
                        s || (d.mimeType = a);
                        return this
                    },
                    abort: function(a) {
                        a = a || "abort", p && p.abort(a),
                            w(0, a);
                        return this
                    }
                };
            h.promise(v), v.success = v.done, v.error = v.fail,
                v.complete = i.add, v.statusCode = function(a) {
                    if (a) {
                        var b;
                        if (s < 2) {
                            for (b in a) {
                                j[b] = [j[b], a[b]]
                            }
                        } else {
                            b = a[v.status], v.then(b, b)
                        }
                    }
                    return this
                }, d.url = ((a || d.url) + "").replace(bF, "").replace(
                    bK, bV[1] + "//"), d.dataTypes = f.trim(d.dataType ||
                    "*").toLowerCase().split(bO), d.crossDomain ==
                null && (r = bQ.exec(d.url.toLowerCase()), d.crossDomain = !
                    (!r || r[1] == bV[1] && r[2] == bV[2] && (r[
                        3] || (r[1] === "http:" ? 80 :
                        443)) == (bV[3] || (bV[1] ===
                        "http:" ? 80 : 443)))), d.data && d.processData &&
                typeof d.data != "string" && (d.data = f.param(
                    d.data, d.traditional)), bZ(bS, d, c, v);
            if (s === 2) {
                return !1
            }
            t = d.global, d.type = d.type.toUpperCase(), d.hasContent = !
                bJ.test(d.type), t && f.active++ === 0 && f.event
                .trigger("ajaxStart");
            if (!d.hasContent) {
                d.data && (d.url += (bL.test(d.url) ? "&" : "?") +
                    d.data, delete d.data), k = d.url;
                if (d.cache === !1) {
                    var x = f.now(),
                        y = d.url.replace(bP, "$1_=" + x);
                    d.url = y + (y === d.url ? (bL.test(d.url) ?
                        "&" : "?") + "_=" + x : "")
                }
            }(d.data && d.hasContent && d.contentType !== !1 ||
                c.contentType) && v.setRequestHeader(
                    "Content-Type", d.contentType), d.ifModified &&
                (k = k || d.url, f.lastModified[k] && v.setRequestHeader(
                        "If-Modified-Since", f.lastModified[k]),
                    f.etag[k] && v.setRequestHeader(
                        "If-None-Match", f.etag[k])), v.setRequestHeader(
                    "Accept", d.dataTypes[0] && d.accepts[d.dataTypes[
                        0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[
                            0] !== "*" ? ", " + bW + "; q=0.01" :
                        "") : d.accepts["*"]);
            for (u in d.headers) {
                v.setRequestHeader(u, d.headers[u])
            }
            if (d.beforeSend && (d.beforeSend.call(e, v, d) ===
                !1 || s === 2)) {
                v.abort();
                return !1
            }
            for (u in {
                success: 1,
                error: 1,
                complete: 1
            }) {
                v[u](d[u])
            }
            p = bZ(bT, d, c, v);
            if (!p) {
                w(-1, "No Transport")
            } else {
                v.readyState = 1, t && g.trigger("ajaxSend", [v,
                    d
                ]), d.async && d.timeout > 0 && (q =
                    setTimeout(function() {
                        v.abort("timeout")
                    }, d.timeout));
                try {
                    s = 1, p.send(l, w)
                } catch (z) {
                    if (s < 2) {
                        w(-1, z)
                    } else {
                        throw z
                    }
                }
            }
            return v
        },
        param: function(a, c) {
            var d = [],
                e = function(a, b) {
                    b = f.isFunction(b) ? b() : b, d[d.length] =
                        encodeURIComponent(a) + "=" +
                        encodeURIComponent(b)
                };
            c === b && (c = f.ajaxSettings.traditional);
            if (f.isArray(a) || a.jquery && !f.isPlainObject(a)) {
                f.each(a, function() {
                    e(this.name, this.value)
                })
            } else {
                for (var g in a) {
                    b_(g, a[g], c, e)
                }
            }
            return d.join("&").replace(bC, "+")
        }
    }), f.extend({
        active: 0,
        lastModified: {},
        etag: {}
    });
    var cc = f.now(),
        cd = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            return f.expando + "_" + cc++
        }
    }), f.ajaxPrefilter("json jsonp", function(b, c, d) {
        var e = typeof b.data == "string" &&
            /^application\/x\-www\-form\-urlencoded/.test(b.contentType);
        if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (cd.test(
            b.url) || e && cd.test(b.data))) {
            var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ?
                b.jsonpCallback() : b.jsonpCallback,
                i = a[h],
                j = b.url,
                k = b.data,
                l = "$1" + h + "$2";
            b.jsonp !== !1 && (j = j.replace(cd, l), b.url === j &&
                    (e && (k = k.replace(cd, l)), b.data === k && (
                        j += (/\?/.test(j) ? "&" : "?") + b.jsonp +
                        "=" + h))), b.url = j, b.data = k, a[h] =
                function(a) {
                    g = [a]
                }, d.always(function() {
                    a[h] = i, g && f.isFunction(i) && a[h](g[0])
                }), b.converters["script json"] = function() {
                    g || f.error(h + " was not called");
                    return g[0]
                }, b.dataTypes[0] = "json";
            return "script"
        }
    }), f.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /javascript|ecmascript/
        },
        converters: {
            "text script": function(a) {
                f.globalEval(a);
                return a
            }
        }
    }), f.ajaxPrefilter("script", function(a) {
        a.cache === b && (a.cache = !1), a.crossDomain && (a.type =
            "GET", a.global = !1)
    }), f.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var d, e = c.head || c.getElementsByTagName("head")[0] ||
                c.documentElement;
            return {
                send: function(f, g) {
                    d = c.createElement("script"), d.async =
                        "async", a.scriptCharset && (d.charset =
                            a.scriptCharset), d.src = a.url, d.onload =
                        d.onreadystatechange = function(a, c) {
                            if (c || !d.readyState ||
                                /loaded|complete/.test(d.readyState)
                            ) {
                                d.onload = d.onreadystatechange =
                                    null, e && d.parentNode &&
                                    e.removeChild(d), d = b, c ||
                                    g(200, "success")
                            }
                        }, e.insertBefore(d, e.firstChild)
                },
                abort: function() {
                    d && d.onload(0, 1)
                }
            }
        }
    });
    var ce = a.ActiveXObject ? function() {
            for (var a in cg) {
                cg[a](0, 1)
            }
        } : !1,
        cf = 0,
        cg;
    f.ajaxSettings.xhr = a.ActiveXObject ? function() {
            return !this.isLocal && ch() || ci()
        } : ch,
        function(a) {
            f.extend(f.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        }(f.ajaxSettings.xhr()), f.support.ajax && f.ajaxTransport(function(
            c) {
            if (!c.crossDomain || f.support.cors) {
                var d;
                return {
                    send: function(e, g) {
                        var h = c.xhr(),
                            i, j;
                        c.username ? h.open(c.type, c.url, c.async,
                            c.username, c.password) : h.open(c.type,
                            c.url, c.async);
                        if (c.xhrFields) {
                            for (j in c.xhrFields) {
                                h[j] = c.xhrFields[j]
                            }
                        }
                        c.mimeType && h.overrideMimeType && h.overrideMimeType(
                            c.mimeType), !c.crossDomain && !e[
                            "X-Requested-With"] && (e[
                                "X-Requested-With"] =
                            "XMLHttpRequest");
                        try {
                            for (j in e) {
                                h.setRequestHeader(j, e[j])
                            }
                        } catch (k) {}
                        h.send(c.hasContent && c.data || null), d =
                            function(a, e) {
                                var j, k, l, m, n;
                                try {
                                    if (d && (e || h.readyState ===
                                        4)) {
                                        d = b, i && (h.onreadystatechange =
                                            f.noop, ce &&
                                            delete cg[i]);
                                        if (e) {
                                            h.readyState !== 4 && h
                                                .abort()
                                        } else {
                                            j = h.status, l = h.getAllResponseHeaders(),
                                                m = {}, n = h.responseXML,
                                                n && n.documentElement &&
                                                (m.xml = n);
                                            try {
                                                m.text = h.responseText
                                            } catch (a) {}
                                            try {
                                                k = h.statusText
                                            } catch (o) {
                                                k = ""
                                            }!j && c.isLocal && !c.crossDomain ?
                                                j = m.text ? 200 :
                                                404 : j === 1223 &&
                                                (j = 204)
                                        }
                                    }
                                } catch (p) {
                                    e || g(-1, p)
                                }
                                m && g(j, k, m, l)
                            }, !c.async || h.readyState === 4 ? d() :
                            (i = ++cf, ce && (cg || (cg = {}, f(a).unload(
                                    ce)), cg[i] = d), h.onreadystatechange =
                                d)
                    },
                    abort: function() {
                        d && d(0, 1)
                    }
                }
            }
        });
    var cj = {},
        ck, cl, cm = /^(?:toggle|show|hide)$/,
        cn = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,
        co, cp = [
            ["height", "marginTop", "marginBottom", "paddingTop",
                "paddingBottom"
            ],
            ["width", "marginLeft", "marginRight", "paddingLeft",
                "paddingRight"
            ],
            ["opacity"]
        ],
        cq;
    f.fn.extend({
        show: function(a, b, c) {
            var d, e;
            if (a || a === 0) {
                return this.animate(ct("show", 3), a, b, c)
            }
            for (var g = 0, h = this.length; g < h; g++) {
                d = this[g], d.style && (e = d.style.display, !
                    f._data(d, "olddisplay") && e ===
                    "none" && (e = d.style.display = ""), (
                        e === "" && f.css(d, "display") ===
                        "none" || !f.contains(d.ownerDocument
                            .documentElement, d)) && f._data(
                        d, "olddisplay", cu(d.nodeName)))
            }
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none") {
                        d.style.display = f._data(d,
                            "olddisplay") || ""
                    }
                }
            }
            return this
        },
        hide: function(a, b, c) {
            if (a || a === 0) {
                return this.animate(ct("hide", 3), a, b, c)
            }
            var d, e, g = 0,
                h = this.length;
            for (; g < h; g++) {
                d = this[g], d.style && (e = f.css(d, "display"),
                    e !== "none" && !f._data(d,
                        "olddisplay") && f._data(d,
                        "olddisplay", e))
            }
            for (g = 0; g < h; g++) {
                this[g].style && (this[g].style.display =
                    "none")
            }
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function(a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(
                this, arguments) : a == null || d ? this.each(
                function() {
                    var b = d ? a : f(this).is(":hidden");
                    f(this)[b ? "show" : "hide"]()
                }) : this.animate(ct("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function(a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show()
                .end().animate({
                    opacity: b
                }, a, c, d)
        },
        animate: function(a, b, c, d) {
            function g() {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e),
                    c = this.nodeType === 1,
                    d = c && f(this).is(":hidden"),
                    g, h, i, j, k, l, m, n, o, p, q;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i), i !== g && (a[g] =
                        a[i], delete a[i]);
                    if ((k = f.cssHooks[g]) && "expand" in
                        k) {
                        l = k.expand(a[g]), delete a[g];
                        for (i in l) {
                            i in a || (a[i] = l[i])
                        }
                    }
                }
                for (g in a) {
                    h = a[g], f.isArray(h) ? (b.animatedProperties[
                            g] = h[1], h = a[g] = h[0]) : b
                        .animatedProperties[g] = b.specialEasing &&
                        b.specialEasing[g] || b.easing ||
                        "swing";
                    if (h === "hide" && d || h === "show" &&
                        !d) {
                        return b.complete.call(this)
                    }
                    c && (g === "height" || g === "width") &&
                        (b.overflow = [this.style.overflow,
                                this.style.overflowX, this.style
                                .overflowY
                            ], f.css(this, "display") ===
                            "inline" && f.css(this, "float") ===
                            "none" && (!f.support.inlineBlockNeedsLayout ||
                                cu(this.nodeName) ===
                                "inline" ? this.style.display =
                                "inline-block" : this.style
                                .zoom = 1))
                }
                b.overflow != null && (this.style.overflow =
                    "hidden");
                for (i in a) {
                    j = new f.fx(this, b, i), h = a[i], cm.test(
                        h) ? (q = f._data(this,
                        "toggle" + i) || (h ===
                        "toggle" ? d ? "show" :
                        "hide" : 0), q ? (f._data(
                        this, "toggle" + i, q ===
                        "show" ? "hide" :
                        "show"), j[q]()) : j[h]()) : (m =
                        cn.exec(h), n = j.cur(), m ? (o =
                            parseFloat(m[2]), p = m[3] ||
                            (f.cssNumber[i] ? "" : "px"),
                            p !== "px" && (f.style(this,
                                    i, (o || 1) + p), n =
                                (o || 1) / j.cur() * n,
                                f.style(this, i, n + p)
                            ), m[1] && (o = (m[1] ===
                                    "-=" ? -1 : 1) * o +
                                n), j.custom(n, o, p)) :
                        j.custom(n, h, ""))
                }
                return !0
            }
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a)) {
                return this.each(e.complete, [!1])
            }
            a = f.extend({}, a);
            return e.queue === !1 ? this.each(g) : this.queue(e
                .queue, g)
        },
        stop: function(a, c, d) {
            typeof a != "string" && (d = c, c = a, a = b), c &&
                a !== !1 && this.queue(a || "fx", []);
            return this.each(function() {
                function h(a, b, c) {
                    var e = b[c];
                    f.removeData(a, c, !0), e.stop(
                        d)
                }
                var b, c = !1,
                    e = f.timers,
                    g = f._data(this);
                d || f._unmark(!0, this);
                if (a == null) {
                    for (b in g) {
                        g[b] && g[b].stop && b.indexOf(
                                ".run") === b.length -
                            4 && h(this, g, b)
                    }
                } else {
                    g[b = a + ".run"] && g[b].stop && h(
                        this, g, b)
                }
                for (b = e.length; b--;) {
                    e[b].elem === this && (a == null ||
                        e[b].queue === a) && (d ? e[
                            b](!0) : e[b].saveState(),
                        c = !0, e.splice(b, 1))
                }(!d || !c) && f.dequeue(this, a)
            })
        }
    }), f.each({
        slideDown: ct("show", 1),
        slideUp: ct("hide", 1),
        slideToggle: ct("toggle", 1),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(a, b) {
        f.fn[a] = function(a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), f.extend({
        speed: function(a, b, c) {
            var d = a && typeof a == "object" ? f.extend({}, a) : {
                complete: c || !c && b || f.isFunction(a) &&
                    a,
                duration: a,
                easing: c && b || b && !f.isFunction(b) &&
                    b
            };
            d.duration = f.fx.off ? 0 : typeof d.duration ==
                "number" ? d.duration : d.duration in f.fx.speeds ?
                f.fx.speeds[d.duration] : f.fx.speeds._default;
            if (d.queue == null || d.queue === !0) {
                d.queue = "fx"
            }
            d.old = d.complete, d.complete = function(a) {
                f.isFunction(d.old) && d.old.call(this), d.queue ?
                    f.dequeue(this, d.queue) : a !== !1 &&
                    f._unmark(this)
            };
            return d
        },
        easing: {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return -Math.cos(a * Math.PI) / 2 + 0.5
            }
        },
        timers: [],
        fx: function(a, b, c) {
            this.options = b, this.elem = a, this.prop = c, b.orig =
                b.orig || {}
        }
    }), f.fx.prototype = {
        update: function() {
            this.options.step && this.options.step.call(this.elem,
                this.now, this), (f.fx.step[this.prop] || f.fx.step
                ._default)(this)
        },
        cur: function() {
            if (this.elem[this.prop] != null && (!this.elem.style ||
                this.elem.style[this.prop] == null)) {
                return this.elem[this.prop]
            }
            var a, b = f.css(this.elem, this.prop);
            return isNaN(a = parseFloat(b)) ? !b || b === "auto" ?
                0 : b : a
        },
        custom: function(a, c, d) {
            function h(a) {
                return e.step(a)
            }
            var e = this,
                g = f.fx;
            this.startTime = cq || cr(), this.end = c, this.now =
                this.start = a, this.pos = this.state = 0, this.unit =
                d || this.unit || (f.cssNumber[this.prop] ? "" :
                    "px"), h.queue = this.options.queue, h.elem =
                this.elem, h.saveState = function() {
                    f._data(e.elem, "fxshow" + e.prop) === b && (e.options
                        .hide ? f._data(e.elem, "fxshow" + e.prop,
                            e.start) : e.options.show && f._data(
                            e.elem, "fxshow" + e.prop, e.end))
                }, h() && f.timers.push(h) && !co && (co =
                    setInterval(g.tick, g.interval))
        },
        show: function() {
            var a = f._data(this.elem, "fxshow" + this.prop);
            this.options.orig[this.prop] = a || f.style(this.elem,
                    this.prop), this.options.show = !0, a !== b ?
                this.custom(this.cur(), a) : this.custom(this.prop ===
                    "width" || this.prop === "height" ? 1 : 0, this
                    .cur()), f(this.elem).show()
        },
        hide: function() {
            this.options.orig[this.prop] = f._data(this.elem,
                "fxshow" + this.prop) || f.style(this.elem,
                this.prop), this.options.hide = !0, this.custom(
                this.cur(), 0)
        },
        step: function(a) {
            var b, c, d, e = cq || cr(),
                g = !0,
                h = this.elem,
                i = this.options;
            if (a || e >= i.duration + this.startTime) {
                this.now = this.end, this.pos = this.state = 1,
                    this.update(), i.animatedProperties[this.prop] = !
                    0;
                for (b in i.animatedProperties) {
                    i.animatedProperties[b] !== !0 && (g = !1)
                }
                if (g) {
                    i.overflow != null && !f.support.shrinkWrapBlocks &&
                        f.each(["", "X", "Y"], function(a, b) {
                            h.style["overflow" + b] = i.overflow[
                                a]
                        }), i.hide && f(h).hide();
                    if (i.hide || i.show) {
                        for (b in i.animatedProperties) {
                            f.style(h, b, i.orig[b]), f.removeData(
                                h, "fxshow" + b, !0), f.removeData(
                                h, "toggle" + b, !0)
                        }
                    }
                    d = i.complete, d && (i.complete = !1, d.call(h))
                }
                return !1
            }
            i.duration == Infinity ? this.now = e : (c = e - this.startTime,
                this.state = c / i.duration, this.pos = f.easing[
                    i.animatedProperties[this.prop]](this.state,
                    c, 0, 1, i.duration), this.now = this.start +
                (this.end - this.start) * this.pos), this.update();
            return !0
        }
    }, f.extend(f.fx, {
        tick: function() {
            var a, b = f.timers,
                c = 0;
            for (; c < b.length; c++) {
                a = b[c], !a() && b[c] === a && b.splice(c--, 1)
            }
            b.length || f.fx.stop()
        },
        interval: 13,
        stop: function() {
            clearInterval(co), co = null
        },
        speeds: {
            slow: 600,
            fast: 200,
            _default: 400
        },
        step: {
            opacity: function(a) {
                f.style(a.elem, "opacity", a.now)
            },
            _default: function(a) {
                a.elem.style && a.elem.style[a.prop] != null ?
                    a.elem.style[a.prop] = a.now + a.unit : a.elem[
                        a.prop] = a.now
            }
        }
    }), f.each(cp.concat.apply([], cp), function(a, b) {
        b.indexOf("margin") && (f.fx.step[b] = function(a) {
            f.style(a.elem, b, Math.max(0, a.now) + a.unit)
        })
    }), f.expr && f.expr.filters && (f.expr.filters.animated = function(
        a) {
        return f.grep(f.timers, function(b) {
            return a === b.elem
        }).length
    });
    var cv, cw = /^t(?:able|d|h)$/i,
        cx = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? cv = function(a, b, c, d) {
            try {
                d = a.getBoundingClientRect()
            } catch (e) {}
            if (!d || !f.contains(c, a)) {
                return d ? {
                    top: d.top,
                    left: d.left
                } : {
                    top: 0,
                    left: 0
                }
            }
            var g = b.body,
                h = cy(b),
                i = c.clientTop || g.clientTop || 0,
                j = c.clientLeft || g.clientLeft || 0,
                k = h.pageYOffset || f.support.boxModel && c.scrollTop || g
                .scrollTop,
                l = h.pageXOffset || f.support.boxModel && c.scrollLeft ||
                g.scrollLeft,
                m = d.top + k - i,
                n = d.left + l - j;
            return {
                top: m,
                left: n
            }
        } : cv = function(a, b, c) {
            var d, e = a.offsetParent,
                g = a,
                h = b.body,
                i = b.defaultView,
                j = i ? i.getComputedStyle(a, null) : a.currentStyle,
                k = a.offsetTop,
                l = a.offsetLeft;
            while ((a = a.parentNode) && a !== h && a !== c) {
                if (f.support.fixedPosition && j.position === "fixed") {
                    break
                }
                d = i ? i.getComputedStyle(a, null) : a.currentStyle, k -=
                    a.scrollTop, l -= a.scrollLeft, a === e && (k += a.offsetTop,
                        l += a.offsetLeft, f.support.doesNotAddBorder && (!
                            f.support.doesAddBorderForTableAndCells || !cw.test(
                                a.nodeName)) && (k += parseFloat(d.borderTopWidth) ||
                            0, l += parseFloat(d.borderLeftWidth) || 0), g =
                        e, e = a.offsetParent), f.support.subtractsBorderForOverflowNotVisible &&
                    d.overflow !== "visible" && (k += parseFloat(d.borderTopWidth) ||
                        0, l += parseFloat(d.borderLeftWidth) || 0), j = d
            }
            if (j.position === "relative" || j.position === "static") {
                k += h.offsetTop, l += h.offsetLeft
            }
            f.support.fixedPosition && j.position === "fixed" && (k += Math
                .max(c.scrollTop, h.scrollTop), l += Math.max(c.scrollLeft,
                    h.scrollLeft));
            return {
                top: k,
                left: l
            }
        }, f.fn.offset = function(a) {
            if (arguments.length) {
                return a === b ? this : this.each(function(b) {
                    f.offset.setOffset(this, a, b)
                })
            }
            var c = this[0],
                d = c && c.ownerDocument;
            if (!d) {
                return null
            }
            if (c === d.body) {
                return f.offset.bodyOffset(c)
            }
            return cv(c, d, d.documentElement)
        }, f.offset = {
            bodyOffset: function(a) {
                var b = a.offsetTop,
                    c = a.offsetLeft;
                f.support.doesNotIncludeMarginInBodyOffset && (b +=
                    parseFloat(f.css(a, "marginTop")) || 0, c +=
                    parseFloat(f.css(a, "marginLeft")) || 0);
                return {
                    top: b,
                    left: c
                }
            },
            setOffset: function(a, b, c) {
                var d = f.css(a, "position");
                d === "static" && (a.style.position = "relative");
                var e = f(a),
                    g = e.offset(),
                    h = f.css(a, "top"),
                    i = f.css(a, "left"),
                    j = (d === "absolute" || d === "fixed") && f.inArray(
                        "auto", [h, i]) > -1,
                    k = {},
                    l = {},
                    m, n;
                j ? (l = e.position(), m = l.top, n = l.left) : (m =
                        parseFloat(h) || 0, n = parseFloat(i) || 0), f.isFunction(
                        b) && (b = b.call(a, c, g)), b.top != null && (
                        k.top = b.top - g.top + m), b.left != null && (
                        k.left = b.left - g.left + n), "using" in b ? b
                    .using.call(a, k) : e.css(k)
            }
        }, f.fn.extend({
            position: function() {
                if (!this[0]) {
                    return null
                }
                var a = this[0],
                    b = this.offsetParent(),
                    c = this.offset(),
                    d = cx.test(b[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : b.offset();
                c.top -= parseFloat(f.css(a, "marginTop")) || 0, c.left -=
                    parseFloat(f.css(a, "marginLeft")) || 0, d.top +=
                    parseFloat(f.css(b[0], "borderTopWidth")) || 0,
                    d.left += parseFloat(f.css(b[0],
                        "borderLeftWidth")) || 0;
                return {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var a = this.offsetParent || c.body;
                    while (a && !cx.test(a.nodeName) && f.css(
                        a, "position") === "static") {
                        a = a.offsetParent
                    }
                    return a
                })
            }
        }), f.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(a, c) {
            var d = /Y/.test(c);
            f.fn[a] = function(e) {
                return f.access(this, function(a, e, g) {
                    var h = cy(a);
                    if (g === b) {
                        return h ? c in h ? h[c] : f.support
                            .boxModel && h.document.documentElement[
                                e] || h.document.body[e] :
                            a[e]
                    }
                    h ? h.scrollTo(d ? f(h).scrollLeft() :
                            g, d ? g : f(h).scrollTop()) :
                        a[e] = g
                }, a, e, arguments.length, null)
            }
        }), f.each({
            Height: "height",
            Width: "width"
        }, function(a, c) {
            var d = "client" + a,
                e = "scroll" + a,
                g = "offset" + a;
            f.fn["inner" + a] = function() {
                var a = this[0];
                return a ? a.style ? parseFloat(f.css(a, c,
                    "padding")) : this[c]() : null
            }, f.fn["outer" + a] = function(a) {
                var b = this[0];
                return b ? b.style ? parseFloat(f.css(b, c, a ?
                    "margin" : "border")) : this[c]() : null
            }, f.fn[c] = function(a) {
                return f.access(this, function(a, c, h) {
                    var i, j, k, l;
                    if (f.isWindow(a)) {
                        i = a.document, j = i.documentElement[
                            d];
                        return f.support.boxModel && j || i
                            .body && i.body[d] || j
                    }
                    if (a.nodeType === 9) {
                        i = a.documentElement;
                        if (i[d] >= i[e]) {
                            return i[d]
                        }
                        return Math.max(a.body[e], i[e], a.body[
                            g], i[g])
                    }
                    if (h === b) {
                        k = f.css(a, c), l = parseFloat(k);
                        return f.isNumeric(l) ? l : k
                    }
                    f(a).css(c, h)
                }, c, a, arguments.length, null)
            }
        }), a.jQuery = a.$ = f, typeof define == "function" && define.amd &&
        define.amd.jQuery && define("jquery", [], function() {
            return f
        })
})(window);
/* jQuery UI - v1.8.20 - 2012-04-30
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.core.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(f, e) {
    function h(a, l) {
        var k = a.nodeName.toLowerCase();
        if ("area" === k) {
            var j = a.parentNode,
                i = j.name,
                d;
            return !a.href || !i || j.nodeName.toLowerCase() !== "map" ?
                !1 : (d = f("img[usemap=#" + i + "]")[0], !!d && g(d))
        }
        return (/input|select|textarea|button|object/.test(k) ? !a.disabled :
            "a" == k ? a.href || l : l) && g(a)
    }

    function g(a) {
        return !f(a).parents().andSelf().filter(function() {
            return f.curCSS(this, "visibility") === "hidden" ||
                f.expr.filters.hidden(this)
        }).length
    }
    f.ui = f.ui || {};
    if (f.ui.version) {
        return
    }
    f.extend(f.ui, {
        version: "1.8.20",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    }), f.fn.extend({
        propAttr: f.fn.prop || f.fn.attr,
        _focus: f.fn.focus,
        focus: function(a, d) {
            return typeof a == "number" ? this.each(function() {
                var b = this;
                setTimeout(function() {
                    f(b).focus(), d && d.call(b)
                }, a)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var a;
            return f.browser.msie && /(static|relative)/.test(
                    this.css("position")) || /absolute/.test(
                    this.css("position")) ? a = this.parents().filter(
                    function() {
                        return /(relative|absolute|fixed)/.test(
                                f.curCSS(this, "position", 1)) &&
                            /(auto|scroll)/.test(f.curCSS(this,
                                "overflow", 1) + f.curCSS(
                                this, "overflow-y", 1) + f.curCSS(
                                this, "overflow-x", 1))
                    }).eq(0) : a = this.parents().filter(
                    function() {
                        return /(auto|scroll)/.test(f.curCSS(
                            this, "overflow", 1) + f.curCSS(
                            this, "overflow-y", 1) + f.curCSS(
                            this, "overflow-x", 1))
                    }).eq(0), /fixed/.test(this.css("position")) ||
                !a.length ? f(document) : a
        },
        zIndex: function(j) {
            if (j !== e) {
                return this.css("zIndex", j)
            }
            if (this.length) {
                var i = f(this[0]),
                    b, a;
                while (i.length && i[0] !== document) {
                    b = i.css("position");
                    if (b === "absolute" || b === "relative" ||
                        b === "fixed") {
                        a = parseInt(i.css("zIndex"), 10);
                        if (!isNaN(a) && a !== 0) {
                            return a
                        }
                    }
                    i = i.parent()
                }
            }
            return 0
        },
        disableSelection: function() {
            return this.bind((f.support.selectstart ?
                    "selectstart" : "mousedown") +
                ".ui-disableSelection", function(b) {
                    b.preventDefault()
                })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), f.each(["Width", "Height"], function(l, k) {
        function a(m, p, o, n) {
            return f.each(j, function() {
                p -= parseFloat(f.curCSS(m, "padding" +
                        this, !0)) || 0, o && (p -=
                        parseFloat(f.curCSS(m, "border" +
                            this + "Width", !0)) || 0),
                    n && (p -= parseFloat(f.curCSS(m,
                        "margin" + this, !0)) || 0)
            }), p
        }
        var j = k === "Width" ? ["Left", "Right"] : ["Top",
                "Bottom"
            ],
            i = k.toLowerCase(),
            b = {
                innerWidth: f.fn.innerWidth,
                innerHeight: f.fn.innerHeight,
                outerWidth: f.fn.outerWidth,
                outerHeight: f.fn.outerHeight
            };
        f.fn["inner" + k] = function(d) {
            return d === e ? b["inner" + k].call(this) : this.each(
                function() {
                    f(this).css(i, a(this, d) + "px")
                })
        }, f.fn["outer" + k] = function(d, m) {
            return typeof d != "number" ? b["outer" + k].call(
                this, d) : this.each(function() {
                f(this).css(i, a(this, d, !0, m) + "px")
            })
        }
    }), f.extend(f.expr[":"], {
        data: function(a, j, i) {
            return !!f.data(a, i[3])
        },
        focusable: function(a) {
            return h(a, !isNaN(f.attr(a, "tabindex")))
        },
        tabbable: function(a) {
            var i = f.attr(a, "tabindex"),
                c = isNaN(i);
            return (c || i >= 0) && h(a, !c)
        }
    }), f(function() {
        var a = document.body,
            d = a.appendChild(d = document.createElement("div"));
        d.offsetHeight, f.extend(d.style, {
                minHeight: "100px",
                height: "auto",
                padding: 0,
                borderWidth: 0
            }), f.support.minHeight = d.offsetHeight === 100, f.support
            .selectstart = "onselectstart" in d, a.removeChild(d).style
            .display = "none"
    }), f.extend(f.ui, {
        plugin: {
            add: function(a, l, k) {
                var j = f.ui[a].prototype;
                for (var i in k) {
                    j.plugins[i] = j.plugins[i] || [], j.plugins[
                        i].push([l, k[i]])
                }
            },
            call: function(j, i, m) {
                var l = j.plugins[i];
                if (!l || !j.element[0].parentNode) {
                    return
                }
                for (var k = 0; k < l.length; k++) {
                    j.options[l[k][0]] && l[k][1].apply(j.element,
                        m)
                }
            }
        },
        contains: function(d, c) {
            return document.compareDocumentPosition ? d.compareDocumentPosition(
                c) & 16 : d !== c && d.contains(c)
        },
        hasScroll: function(a, k) {
            if (f(a).css("overflow") === "hidden") {
                return !1
            }
            var j = k && k === "left" ? "scrollLeft" :
                "scrollTop",
                i = !1;
            return a[j] > 0 ? !0 : (a[j] = 1, i = a[j] > 0, a[j] =
                0, i)
        },
        isOverAxis: function(i, d, j) {
            return i > d && i < d + j
        },
        isOver: function(a, m, l, k, j, i) {
            return f.ui.isOverAxis(a, l, j) && f.ui.isOverAxis(
                m, k, i)
        }
    })
})(jQuery);
/* jQuery UI - v1.8.20 - 2012-04-30
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.widget.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(f, e) {
    if (f.cleanData) {
        var h = f.cleanData;
        f.cleanData = function(a) {
            for (var j = 0, i;
                (i = a[j]) != null; j++) {
                try {
                    f(i).triggerHandler("remove")
                } catch (c) {}
            }
            h(a)
        }
    } else {
        var g = f.fn.remove;
        f.fn.remove = function(a, d) {
            return this.each(function() {
                return d || (!a || f.filter(a, [this]).length) &&
                    f("*", this).add([this]).each(function() {
                        try {
                            f(this).triggerHandler("remove")
                        } catch (c) {}
                    }), g.call(f(this), a, d)
            })
        }
    }
    f.widget = function(a, m, l) {
        var k = a.split(".")[0],
            j;
        a = a.split(".")[1], j = k + "-" + a, l || (l = m, m = f.Widget),
            f.expr[":"][j] = function(b) {
                return !!f.data(b, a)
            }, f[k] = f[k] || {}, f[k][a] = function(d, c) {
                arguments.length && this._createWidget(d, c)
            };
        var i = new m;
        i.options = f.extend(!0, {}, i.options), f[k][a].prototype = f.extend(!
            0, i, {
                namespace: k,
                widgetName: a,
                widgetEventPrefix: f[k][a].prototype.widgetEventPrefix ||
                    a,
                widgetBaseClass: j
            }, l), f.widget.bridge(a, f[k][a])
    }, f.widget.bridge = function(b, a) {
        f.fn[b] = function(j) {
            var i = typeof j == "string",
                d = Array.prototype.slice.call(arguments, 1),
                c = this;
            return j = !i && d.length ? f.extend.apply(null, [!0, j]
                    .concat(d)) : j, i && j.charAt(0) === "_" ? c :
                (i ? this.each(function() {
                    var l = f.data(this, b),
                        k = l && f.isFunction(l[j]) ? l[j].apply(
                            l, d) : l;
                    if (k !== l && k !== e) {
                        return c = k, !1
                    }
                }) : this.each(function() {
                    var k = f.data(this, b);
                    k ? k.option(j || {})._init() : f.data(
                        this, b, new a(j, this))
                }), c)
        }
    }, f.Widget = function(d, c) {
        arguments.length && this._createWidget(d, c)
    }, f.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function(a, j) {
            f.data(j, this.widgetName, this), this.element = f(j),
                this.options = f.extend(!0, {}, this.options, this._getCreateOptions(),
                    a);
            var i = this;
            this.element.bind("remove." + this.widgetName, function() {
                i.destroy()
            }), this._create(), this._trigger("create"), this._init()
        },
        _getCreateOptions: function() {
            return f.metadata && f.metadata.get(this.element[0])[
                this.widgetName]
        },
        _create: function() {},
        _init: function() {},
        destroy: function() {
            this.element.unbind("." + this.widgetName).removeData(
                this.widgetName), this.widget().unbind("." +
                this.widgetName).removeAttr("aria-disabled").removeClass(
                this.widgetBaseClass +
                "-disabled ui-state-disabled")
        },
        widget: function() {
            return this.element
        },
        option: function(i, b) {
            var a = i;
            if (arguments.length === 0) {
                return f.extend({}, this.options)
            }
            if (typeof i == "string") {
                if (b === e) {
                    return this.options[i]
                }
                a = {}, a[i] = b
            }
            return this._setOptions(a), this
        },
        _setOptions: function(a) {
            var d = this;
            return f.each(a, function(i, c) {
                d._setOption(i, c)
            }), this
        },
        _setOption: function(d, c) {
            return this.options[d] = c, d === "disabled" && this.widget()[
                c ? "addClass" : "removeClass"](this.widgetBaseClass +
                "-disabled ui-state-disabled").attr(
                "aria-disabled", c), this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _trigger: function(a, m, l) {
            var k, j, i = this.options[a];
            l = l || {}, m = f.Event(m), m.type = (a === this.widgetEventPrefix ?
                    a : this.widgetEventPrefix + a).toLowerCase(),
                m.target = this.element[0], j = m.originalEvent;
            if (j) {
                for (k in j) {
                    k in m || (m[k] = j[k])
                }
            }
            return this.element.trigger(m, l), !(f.isFunction(i) &&
                i.call(this.element[0], m, l) === !1 || m.isDefaultPrevented()
            )
        }
    }
})(jQuery);
/* jQuery UI - v1.8.20 - 2012-04-30
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.mouse.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(e, d) {
    var f = !1;
    e(document).mouseup(function(b) {
        f = !1
    }), e.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function() {
            var a = this;
            this.element.bind("mousedown." + this.widgetName,
                function(b) {
                    return a._mouseDown(b)
                }).bind("click." + this.widgetName,
                function(b) {
                    if (!0 === e.data(b.target, a.widgetName +
                        ".preventClickEvent")) {
                        return e.removeData(b.target, a.widgetName +
                                ".preventClickEvent"), b.stopImmediatePropagation(), !
                            1
                    }
                }), this.started = !1
        },
        _mouseDestroy: function() {
            this.element.unbind("." + this.widgetName), e(
                document).unbind("mousemove." + this.widgetName,
                this._mouseMoveDelegate).unbind("mouseup." +
                this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function(a) {
            if (f) {
                return
            }
            this._mouseStarted && this._mouseUp(a), this._mouseDownEvent =
                a;
            var h = this,
                g = a.which == 1,
                c = typeof this.options.cancel == "string" && a
                .target.nodeName ? e(a.target).closest(this.options
                    .cancel).length : !1;
            if (!g || c || !this._mouseCapture(a)) {
                return !0
            }
            this.mouseDelayMet = !this.options.delay, this.mouseDelayMet ||
                (this._mouseDelayTimer = setTimeout(function() {
                    h.mouseDelayMet = !0
                }, this.options.delay));
            if (this._mouseDistanceMet(a) && this._mouseDelayMet(
                a)) {
                this._mouseStarted = this._mouseStart(a) !== !1;
                if (!this._mouseStarted) {
                    return a.preventDefault(), !0
                }
            }
            return !0 === e.data(a.target, this.widgetName +
                    ".preventClickEvent") && e.removeData(a.target,
                    this.widgetName + ".preventClickEvent"),
                this._mouseMoveDelegate = function(b) {
                    return h._mouseMove(b)
                }, this._mouseUpDelegate = function(b) {
                    return h._mouseUp(b)
                }, e(document).bind("mousemove." + this.widgetName,
                    this._mouseMoveDelegate).bind("mouseup." +
                    this.widgetName, this._mouseUpDelegate), a.preventDefault(),
                f = !0, !0
        },
        _mouseMove: function(a) {
            return !e.browser.msie || document.documentMode >=
                9 || !!a.button ? this._mouseStarted ? (this._mouseDrag(
                    a), a.preventDefault()) : (this._mouseDistanceMet(
                        a) && this._mouseDelayMet(a) && (this._mouseStarted =
                        this._mouseStart(this._mouseDownEvent,
                            a) !== !1, this._mouseStarted ?
                        this._mouseDrag(a) : this._mouseUp(a)), !
                    this._mouseStarted) : this._mouseUp(a)
        },
        _mouseUp: function(a) {
            return e(document).unbind("mousemove." + this.widgetName,
                    this._mouseMoveDelegate).unbind("mouseup." +
                    this.widgetName, this._mouseUpDelegate),
                this._mouseStarted && (this._mouseStarted = !1,
                    a.target == this._mouseDownEvent.target &&
                    e.data(a.target, this.widgetName +
                        ".preventClickEvent", !0), this._mouseStop(
                        a)), !1
        },
        _mouseDistanceMet: function(b) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX -
                b.pageX), Math.abs(this._mouseDownEvent
                .pageY - b.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function(b) {
            return this.mouseDelayMet
        },
        _mouseStart: function(b) {},
        _mouseDrag: function(b) {},
        _mouseStop: function(b) {},
        _mouseCapture: function(b) {
            return !0
        }
    })
})(jQuery);
/* jQuery UI - v1.8.20 - 2012-04-30
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.position.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(j, i) {
    j.ui = j.ui || {};
    var p = /left|center|right/,
        o = /top|center|bottom/,
        n = "center",
        m = {},
        l = j.fn.position,
        k = j.fn.offset;
    j.fn.position = function(c) {
            if (!c || !c.of) {
                return l.apply(this, arguments)
            }
            c = j.extend({}, c);
            var q = j(c.of),
                g = q[0],
                f = (c.collision || "flip").split(" "),
                e = c.offset ? c.offset.split(" ") : [0, 0],
                d, a, r;
            return g.nodeType === 9 ? (d = q.width(), a = q.height(), r = {
                    top: 0,
                    left: 0
                }) : g.setTimeout ? (d = q.width(), a = q.height(), r = {
                    top: q.scrollTop(),
                    left: q.scrollLeft()
                }) : g.preventDefault ? (c.at = "left top", d = a = 0, r = {
                    top: c.of.pageY,
                    left: c.of.pageX
                }) : (d = q.outerWidth(), a = q.outerHeight(), r = q.offset()),
                j.each(["my", "at"], function() {
                    var b = (c[this] || "").split(" ");
                    b.length === 1 && (b = p.test(b[0]) ? b.concat([n]) :
                            o.test(b[0]) ? [n].concat(b) : [n, n]), b[0] =
                        p.test(b[0]) ? b[0] : n, b[1] = o.test(b[1]) ?
                        b[1] : n, c[this] = b
                }), f.length === 1 && (f[1] = f[0]), e[0] = parseInt(e[0],
                    10) || 0, e.length === 1 && (e[1] = e[0]), e[1] =
                parseInt(e[1], 10) || 0, c.at[0] === "right" ? r.left += d :
                c.at[0] === n && (r.left += d / 2), c.at[1] === "bottom" ?
                r.top += a : c.at[1] === n && (r.top += a / 2), r.left += e[
                    0], r.top += e[1], this.each(function() {
                    var z = j(this),
                        y = z.outerWidth(),
                        x = z.outerHeight(),
                        w = parseInt(j.curCSS(this, "marginLeft", !0)) ||
                        0,
                        v = parseInt(j.curCSS(this, "marginTop", !0)) ||
                        0,
                        u = y + w + (parseInt(j.curCSS(this,
                            "marginRight", !0)) || 0),
                        t = x + v + (parseInt(j.curCSS(this,
                            "marginBottom", !0)) || 0),
                        s = j.extend({}, r),
                        b;
                    c.my[0] === "right" ? s.left -= y : c.my[0] === n &&
                        (s.left -= y / 2), c.my[1] === "bottom" ? s.top -=
                        x : c.my[1] === n && (s.top -= x / 2), m.fractions ||
                        (s.left = Math.round(s.left), s.top = Math.round(
                            s.top)), b = {
                            left: s.left - w,
                            top: s.top - v
                        }, j.each(["left", "top"], function(A, h) {
                            j.ui.position[f[A]] && j.ui.position[f[
                                A]][h](s, {
                                targetWidth: d,
                                targetHeight: a,
                                elemWidth: y,
                                elemHeight: x,
                                collisionPosition: b,
                                collisionWidth: u,
                                collisionHeight: t,
                                offset: e,
                                my: c.my,
                                at: c.at
                            })
                        }), j.fn.bgiframe && z.bgiframe(), z.offset(j.extend(
                            s, {
                                using: c.using
                            }))
                })
        }, j.ui.position = {
            fit: {
                left: function(a, h) {
                    var g = j(window),
                        f = h.collisionPosition.left + h.collisionWidth -
                        g.width() - g.scrollLeft();
                    a.left = f > 0 ? a.left - f : Math.max(a.left - h.collisionPosition
                        .left, a.left)
                },
                top: function(a, h) {
                    var g = j(window),
                        f = h.collisionPosition.top + h.collisionHeight -
                        g.height() - g.scrollTop();
                    a.top = f > 0 ? a.top - f : Math.max(a.top - h.collisionPosition
                        .top, a.top)
                }
            },
            flip: {
                left: function(a, u) {
                    if (u.at[0] === n) {
                        return
                    }
                    var t = j(window),
                        s = u.collisionPosition.left + u.collisionWidth -
                        t.width() - t.scrollLeft(),
                        r = u.my[0] === "left" ? -u.elemWidth : u.my[0] ===
                        "right" ? u.elemWidth : 0,
                        q = u.at[0] === "left" ? u.targetWidth : -u.targetWidth,
                        e = -2 * u.offset[0];
                    a.left += u.collisionPosition.left < 0 ? r + q + e :
                        s > 0 ? r + q + e : 0
                },
                top: function(a, u) {
                    if (u.at[1] === n) {
                        return
                    }
                    var t = j(window),
                        s = u.collisionPosition.top + u.collisionHeight -
                        t.height() - t.scrollTop(),
                        r = u.my[1] === "top" ? -u.elemHeight : u.my[1] ===
                        "bottom" ? u.elemHeight : 0,
                        q = u.at[1] === "top" ? u.targetHeight : -u.targetHeight,
                        e = -2 * u.offset[1];
                    a.top += u.collisionPosition.top < 0 ? r + q + e :
                        s > 0 ? r + q + e : 0
                }
            }
        }, j.offset.setOffset || (j.offset.setOffset = function(a, v) {
            /static/.test(j.curCSS(a, "position")) && (a.style.position =
                "relative");
            var u = j(a),
                t = u.offset(),
                s = parseInt(j.curCSS(a, "top", !0), 10) || 0,
                r = parseInt(j.curCSS(a, "left", !0), 10) || 0,
                q = {
                    top: v.top - t.top + s,
                    left: v.left - t.left + r
                };
            "using" in v ? v.using.call(a, q) : u.css(q)
        }, j.fn.offset = function(a) {
            var d = this[0];
            return !d || !d.ownerDocument ? null : a ? this.each(
                function() {
                    j.offset.setOffset(this, a)
                }) : k.call(this)
        }),
        function() {
            var a = document.getElementsByTagName("body")[0],
                v = document.createElement("div"),
                u, t, s, r, q;
            u = document.createElement(a ? "div" : "body"), s = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, a && j.extend(s, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            });
            for (var f in s) {
                u.style[f] = s[f]
            }
            u.appendChild(v), t = a || document.documentElement, t.insertBefore(
                    u, t.firstChild), v.style.cssText =
                "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",
                r = j(v).offset(function(d, c) {
                    return c
                }).offset(), u.innerHTML = "", t.removeChild(u), q = r.top +
                r.left + (a ? 2000 : 0), m.fractions = q > 21 && q < 22
        }()
})(jQuery);
/* jQuery UI - v1.8.20 - 2012-04-30
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.sortable.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(d, c) {
    d.widget("ui.sortable", d.ui.mouse, {
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1000
        },
        _create: function() {
            var b = this.options;
            this.containerCache = {}, this.element.addClass(
                    "ui-sortable"), this.refresh(), this.floating =
                this.items.length ? b.axis === "x" ||
                /left|right/.test(this.items[0].item.css(
                    "float")) || /inline|table-cell/.test(this.items[
                    0].item.css("display")) : !1, this.offset =
                this.element.offset(), this._mouseInit(), this.ready = !
                0
        },
        destroy: function() {
            d.Widget.prototype.destroy.call(this), this.element
                .removeClass("ui-sortable ui-sortable-disabled"),
                this._mouseDestroy();
            for (var a = this.items.length - 1; a >= 0; a--) {
                this.items[a].item.removeData(this.widgetName +
                    "-item")
            }
            return this
        },
        _setOption: function(a, e) {
            a === "disabled" ? (this.options[a] = e, this.widget()[
                    e ? "addClass" : "removeClass"](
                    "ui-sortable-disabled")) : d.Widget.prototype
                ._setOption.apply(this, arguments)
        },
        _mouseCapture: function(a, n) {
            var m = this;
            if (this.reverting) {
                return !1
            }
            if (this.options.disabled || this.options.type ==
                "static") {
                return !1
            }
            this._refreshItems(a);
            var l = null,
                k = this,
                j = d(a.target).parents().each(function() {
                    if (d.data(this, m.widgetName + "-item") ==
                        k) {
                        return l = d(this), !1
                    }
                });
            d.data(a.target, m.widgetName + "-item") == k && (l =
                d(a.target));
            if (!l) {
                return !1
            }
            if (this.options.handle && !n) {
                var i = !1;
                d(this.options.handle, l).find("*").andSelf().each(
                    function() {
                        this == a.target && (i = !0)
                    });
                if (!i) {
                    return !1
                }
            }
            return this.currentItem = l, this._removeCurrentsFromItems(), !
                0
        },
        _mouseStart: function(a, l, k) {
            var j = this.options,
                i = this;
            this.currentContainer = this, this.refreshPositions(),
                this.helper = this._createHelper(a), this._cacheHelperProportions(),
                this._cacheMargins(), this.scrollParent = this.helper
                .scrollParent(), this.offset = this.currentItem
                .offset(), this.offset = {
                    top: this.offset.top - this.margins.top,
                    left: this.offset.left - this.margins.left
                }, this.helper.css("position", "absolute"),
                this.cssPosition = this.helper.css("position"),
                d.extend(this.offset, {
                    click: {
                        left: a.pageX - this.offset.left,
                        top: a.pageY - this.offset.top
                    },
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }), this.originalPosition = this._generatePosition(
                    a), this.originalPageX = a.pageX, this.originalPageY =
                a.pageY, j.cursorAt && this._adjustOffsetFromHelper(
                    j.cursorAt), this.domPosition = {
                    prev: this.currentItem.prev()[0],
                    parent: this.currentItem.parent()[0]
                }, this.helper[0] != this.currentItem[0] &&
                this.currentItem.hide(), this._createPlaceholder(),
                j.containment && this._setContainment(), j.cursor &&
                (d("body").css("cursor") && (this._storedCursor =
                    d("body").css("cursor")), d("body").css(
                    "cursor", j.cursor)), j.opacity && (this.helper
                    .css("opacity") && (this._storedOpacity =
                        this.helper.css("opacity")), this.helper
                    .css("opacity", j.opacity)), j.zIndex && (
                    this.helper.css("zIndex") && (this._storedZIndex =
                        this.helper.css("zIndex")), this.helper
                    .css("zIndex", j.zIndex)), this.scrollParent[
                    0] != document && this.scrollParent[0].tagName !=
                "HTML" && (this.overflowOffset = this.scrollParent
                    .offset()), this._trigger("start", a, this._uiHash()),
                this._preserveHelperProportions || this._cacheHelperProportions();
            if (!k) {
                for (var h = this.containers.length - 1; h >= 0; h--) {
                    this.containers[h]._trigger("activate", a,
                        i._uiHash(this))
                }
            }
            return d.ui.ddmanager && (d.ui.ddmanager.current =
                    this), d.ui.ddmanager && !j.dropBehaviour &&
                d.ui.ddmanager.prepareOffsets(this, a), this.dragging = !
                0, this.helper.addClass("ui-sortable-helper"),
                this._mouseDrag(a), !0
        },
        _mouseDrag: function(a) {
            this.position = this._generatePosition(a), this.positionAbs =
                this._convertPositionTo("absolute"), this.lastPositionAbs ||
                (this.lastPositionAbs = this.positionAbs);
            if (this.options.scroll) {
                var n = this.options,
                    m = !1;
                this.scrollParent[0] != document && this.scrollParent[
                        0].tagName != "HTML" ? (this.overflowOffset
                        .top + this.scrollParent[0].offsetHeight -
                        a.pageY < n.scrollSensitivity ? this.scrollParent[
                            0].scrollTop = m = this.scrollParent[
                            0].scrollTop + n.scrollSpeed : a.pageY -
                        this.overflowOffset.top < n.scrollSensitivity &&
                        (this.scrollParent[0].scrollTop = m =
                            this.scrollParent[0].scrollTop - n.scrollSpeed
                        ), this.overflowOffset.left + this.scrollParent[
                            0].offsetWidth - a.pageX < n.scrollSensitivity ?
                        this.scrollParent[0].scrollLeft = m =
                        this.scrollParent[0].scrollLeft + n.scrollSpeed :
                        a.pageX - this.overflowOffset.left < n.scrollSensitivity &&
                        (this.scrollParent[0].scrollLeft = m =
                            this.scrollParent[0].scrollLeft - n
                            .scrollSpeed)) : (a.pageY - d(
                            document).scrollTop() < n.scrollSensitivity ?
                        m = d(document).scrollTop(d(document).scrollTop() -
                            n.scrollSpeed) : d(window).height() -
                        (a.pageY - d(document).scrollTop()) < n
                        .scrollSensitivity && (m = d(document).scrollTop(
                            d(document).scrollTop() + n.scrollSpeed
                        )), a.pageX - d(document).scrollLeft() <
                        n.scrollSensitivity ? m = d(document).scrollLeft(
                            d(document).scrollLeft() - n.scrollSpeed
                        ) : d(window).width() - (a.pageX - d(
                            document).scrollLeft()) < n.scrollSensitivity &&
                        (m = d(document).scrollLeft(d(document)
                            .scrollLeft() + n.scrollSpeed))), m !==
                    !1 && d.ui.ddmanager && !n.dropBehaviour &&
                    d.ui.ddmanager.prepareOffsets(this, a)
            }
            this.positionAbs = this._convertPositionTo(
                "absolute");
            if (!this.options.axis || this.options.axis != "y") {
                this.helper[0].style.left = this.position.left +
                    "px"
            }
            if (!this.options.axis || this.options.axis != "x") {
                this.helper[0].style.top = this.position.top +
                    "px"
            }
            for (var l = this.items.length - 1; l >= 0; l--) {
                var k = this.items[l],
                    j = k.item[0],
                    i = this._intersectsWithPointer(k);
                if (!i) {
                    continue
                }
                if (j != this.currentItem[0] && this.placeholder[
                        i == 1 ? "next" : "prev"]()[0] != j &&
                    !d.ui.contains(this.placeholder[0], j) && (
                        this.options.type == "semi-dynamic" ? !
                        d.ui.contains(this.element[0], j) : !0)
                ) {
                    this.direction = i == 1 ? "down" : "up";
                    if (this.options.tolerance == "pointer" ||
                        this._intersectsWithSides(k)) {
                        this._rearrange(a, k)
                    } else {
                        break
                    }
                    this._trigger("change", a, this._uiHash());
                    break
                }
            }
            return this._contactContainers(a), d.ui.ddmanager &&
                d.ui.ddmanager.drag(this, a), this._trigger(
                    "sort", a, this._uiHash()), this.lastPositionAbs =
                this.positionAbs, !1
        },
        _mouseStop: function(a, h) {
            if (!a) {
                return
            }
            d.ui.ddmanager && !this.options.dropBehaviour && d.ui
                .ddmanager.drop(this, a);
            if (this.options.revert) {
                var g = this,
                    f = g.placeholder.offset();
                g.reverting = !0, d(this.helper).animate({
                        left: f.left - this.offset.parent.left -
                            g.margins.left + (this.offsetParent[
                                    0] == document.body ? 0 :
                                this.offsetParent[0].scrollLeft
                            ),
                        top: f.top - this.offset.parent.top -
                            g.margins.top + (this.offsetParent[
                                    0] == document.body ? 0 :
                                this.offsetParent[0].scrollTop
                            )
                    }, parseInt(this.options.revert, 10) ||
                    500, function() {
                        g._clear(a)
                    })
            } else {
                this._clear(a, h)
            }
            return !1
        },
        cancel: function() {
            var a = this;
            if (this.dragging) {
                this._mouseUp({
                        target: null
                    }), this.options.helper == "original" ?
                    this.currentItem.css(this._storedCSS).removeClass(
                        "ui-sortable-helper") : this.currentItem
                    .show();
                for (var e = this.containers.length - 1; e >= 0; e--) {
                    this.containers[e]._trigger("deactivate",
                        null, a._uiHash(this)), this.containers[
                        e].containerCache.over && (this.containers[
                            e]._trigger("out", null, a._uiHash(
                            this)), this.containers[e].containerCache
                        .over = 0)
                }
            }
            return this.placeholder && (this.placeholder[0].parentNode &&
                this.placeholder[0].parentNode.removeChild(
                    this.placeholder[0]), this.options.helper !=
                "original" && this.helper && this.helper[0]
                .parentNode && this.helper.remove(), d.extend(
                    this, {
                        helper: null,
                        dragging: !1,
                        reverting: !1,
                        _noFinalSort: null
                    }), this.domPosition.prev ? d(this.domPosition
                    .prev).after(this.currentItem) : d(this
                    .domPosition.parent).prepend(this.currentItem)
            ), this
        },
        serialize: function(a) {
            var f = this._getItemsAsjQuery(a && a.connected),
                e = [];
            return a = a || {}, d(f).each(function() {
                    var b = (d(a.item || this).attr(a.attribute ||
                        "id") || "").match(a.expression ||
                        /(.+)[-=_](.+)/);
                    b && e.push((a.key || b[1] + "[]") +
                        "=" + (a.key && a.expression ?
                            b[1] : b[2]))
                }), !e.length && a.key && e.push(a.key + "="),
                e.join("&")
        },
        toArray: function(a) {
            var f = this._getItemsAsjQuery(a && a.connected),
                e = [];
            return a = a || {}, f.each(function() {
                e.push(d(a.item || this).attr(a.attribute ||
                    "id") || "")
            }), e
        },
        _intersectsWith: function(x) {
            var w = this.positionAbs.left,
                v = w + this.helperProportions.width,
                u = this.positionAbs.top,
                t = u + this.helperProportions.height,
                s = x.left,
                r = s + x.width,
                q = x.top,
                p = q + x.height,
                o = this.offset.click.top,
                n = this.offset.click.left,
                m = u + o > q && u + o < p && w + n > s && w +
                n < r;
            return this.options.tolerance == "pointer" || this.options
                .forcePointerForContainers || this.options.tolerance !=
                "pointer" && this.helperProportions[this.floating ?
                    "width" : "height"] > x[this.floating ?
                    "width" : "height"] ? m : s < w + this.helperProportions
                .width / 2 && v - this.helperProportions.width /
                2 < r && q < u + this.helperProportions.height /
                2 && t - this.helperProportions.height / 2 < p
        },
        _intersectsWithPointer: function(a) {
            var l = this.options.axis === "x" || d.ui.isOverAxis(
                    this.positionAbs.top + this.offset.click.top,
                    a.top, a.height),
                k = this.options.axis === "y" || d.ui.isOverAxis(
                    this.positionAbs.left + this.offset.click.left,
                    a.left, a.width),
                j = l && k,
                i = this._getDragVerticalDirection(),
                h = this._getDragHorizontalDirection();
            return j ? this.floating ? h && h == "right" || i ==
                "down" ? 2 : 1 : i && (i == "down" ? 2 : 1) : !
                1
        },
        _intersectsWithSides: function(a) {
            var j = d.ui.isOverAxis(this.positionAbs.top + this
                    .offset.click.top, a.top + a.height / 2, a.height
                ),
                i = d.ui.isOverAxis(this.positionAbs.left +
                    this.offset.click.left, a.left + a.width /
                    2, a.width),
                h = this._getDragVerticalDirection(),
                g = this._getDragHorizontalDirection();
            return this.floating && g ? g == "right" && i || g ==
                "left" && !i : h && (h == "down" && j || h ==
                    "up" && !j)
        },
        _getDragVerticalDirection: function() {
            var b = this.positionAbs.top - this.lastPositionAbs
                .top;
            return b != 0 && (b > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function() {
            var b = this.positionAbs.left - this.lastPositionAbs
                .left;
            return b != 0 && (b > 0 ? "right" : "left")
        },
        refresh: function(b) {
            return this._refreshItems(b), this.refreshPositions(),
                this
        },
        _connectWith: function() {
            var b = this.options;
            return b.connectWith.constructor == String ? [b.connectWith] :
                b.connectWith
        },
        _getItemsAsjQuery: function(r) {
            var q = this,
                p = [],
                o = [],
                n = this._connectWith();
            if (n && r) {
                for (var m = n.length - 1; m >= 0; m--) {
                    var l = d(n[m]);
                    for (var k = l.length - 1; k >= 0; k--) {
                        var a = d.data(l[k], this.widgetName);
                        a && a != this && !a.options.disabled &&
                            o.push([d.isFunction(a.options.items) ?
                                a.options.items.call(a.element) :
                                d(a.options.items, a.element)
                                .not(".ui-sortable-helper")
                                .not(
                                    ".ui-sortable-placeholder"
                                ), a
                            ])
                    }
                }
            }
            o.push([d.isFunction(this.options.items) ? this.options
                .items.call(this.element, null, {
                    options: this.options,
                    item: this.currentItem
                }) : d(this.options.items, this.element)
                .not(".ui-sortable-helper").not(
                    ".ui-sortable-placeholder"), this
            ]);
            for (var m = o.length - 1; m >= 0; m--) {
                o[m][0].each(function() {
                    p.push(this)
                })
            }
            return d(p)
        },
        _removeCurrentsFromItems: function() {
            var f = this.currentItem.find(":data(" + this.widgetName +
                "-item)");
            for (var e = 0; e < this.items.length; e++) {
                for (var g = 0; g < f.length; g++) {
                    f[g] == this.items[e].item[0] && this.items
                        .splice(e, 1)
                }
            }
        },
        _refreshItems: function(z) {
            this.items = [], this.containers = [this];
            var y = this.items,
                x = this,
                w = [
                    [d.isFunction(this.options.items) ? this.options
                        .items.call(this.element[0], z, {
                            item: this.currentItem
                        }) : d(this.options.items, this.element),
                        this
                    ]
                ],
                v = this._connectWith();
            if (v && this.ready) {
                for (var u = v.length - 1; u >= 0; u--) {
                    var t = d(v[u]);
                    for (var s = t.length - 1; s >= 0; s--) {
                        var r = d.data(t[s], this.widgetName);
                        r && r != this && !r.options.disabled &&
                            (w.push([d.isFunction(r.options.items) ?
                                r.options.items.call(r.element[
                                    0], z, {
                                    item: this.currentItem
                                }) : d(r.options.items,
                                    r.element), r
                            ]), this.containers.push(r))
                    }
                }
            }
            for (var u = w.length - 1; u >= 0; u--) {
                var q = w[u][1],
                    p = w[u][0];
                for (var s = 0, o = p.length; s < o; s++) {
                    var a = d(p[s]);
                    a.data(this.widgetName + "-item", q), y.push({
                        item: a,
                        instance: q,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
            }
        },
        refreshPositions: function(a) {
            this.offsetParent && this.helper && (this.offset.parent =
                this._getParentOffset());
            for (var j = this.items.length - 1; j >= 0; j--) {
                var i = this.items[j];
                if (i.instance != this.currentContainer && this
                    .currentContainer && i.item[0] != this.currentItem[
                        0]) {
                    continue
                }
                var h = this.options.toleranceElement ? d(this.options
                    .toleranceElement, i.item) : i.item;
                a || (i.width = h.outerWidth(), i.height = h.outerHeight());
                var g = h.offset();
                i.left = g.left, i.top = g.top
            }
            if (this.options.custom && this.options.custom.refreshContainers) {
                this.options.custom.refreshContainers.call(this)
            } else {
                for (var j = this.containers.length - 1; j >= 0; j--) {
                    var g = this.containers[j].element.offset();
                    this.containers[j].containerCache.left = g.left,
                        this.containers[j].containerCache.top =
                        g.top, this.containers[j].containerCache
                        .width = this.containers[j].element.outerWidth(),
                        this.containers[j].containerCache.height =
                        this.containers[j].element.outerHeight()
                }
            }
            return this
        },
        _createPlaceholder: function(a) {
            var h = a || this,
                g = h.options;
            if (!g.placeholder || g.placeholder.constructor ==
                String) {
                var f = g.placeholder;
                g.placeholder = {
                    element: function() {
                        var e = d(document.createElement(
                            h.currentItem[0].nodeName
                        )).addClass(f || h.currentItem[
                                0].className +
                            " ui-sortable-placeholder"
                        ).removeClass(
                            "ui-sortable-helper")[0];
                        return f || (e.style.visibility =
                            "hidden"), e
                    },
                    update: function(i, e) {
                        if (f && !g.forcePlaceholderSize) {
                            return
                        }
                        e.height() || e.height(h.currentItem
                                .innerHeight() -
                                parseInt(h.currentItem.css(
                                        "paddingTop") ||
                                    0, 10) - parseInt(h
                                    .currentItem.css(
                                        "paddingBottom"
                                    ) || 0, 10)), e.width() ||
                            e.width(h.currentItem.innerWidth() -
                                parseInt(h.currentItem.css(
                                        "paddingLeft") ||
                                    0, 10) - parseInt(h
                                    .currentItem.css(
                                        "paddingRight") ||
                                    0, 10))
                    }
                }
            }
            h.placeholder = d(g.placeholder.element.call(h.element,
                    h.currentItem)), h.currentItem.after(h.placeholder),
                g.placeholder.update(h, h.placeholder)
        },
        _contactContainers: function(r) {
            var q = null,
                p = null;
            for (var o = this.containers.length - 1; o >= 0; o--) {
                if (d.ui.contains(this.currentItem[0], this.containers[
                    o].element[0])) {
                    continue
                }
                if (this._intersectsWith(this.containers[o].containerCache)) {
                    if (q && d.ui.contains(this.containers[o].element[
                        0], q.element[0])) {
                        continue
                    }
                    q = this.containers[o], p = o
                } else {
                    this.containers[o].containerCache.over && (
                        this.containers[o]._trigger("out",
                            r, this._uiHash(this)), this.containers[
                            o].containerCache.over = 0)
                }
            }
            if (!q) {
                return
            }
            if (this.containers.length === 1) {
                this.containers[p]._trigger("over", r, this._uiHash(
                        this)), this.containers[p].containerCache
                    .over = 1
            } else {
                if (this.currentContainer != this.containers[p]) {
                    var n = 10000,
                        m = null,
                        l = this.positionAbs[this.containers[p]
                            .floating ? "left" : "top"];
                    for (var k = this.items.length - 1; k >= 0; k--) {
                        if (!d.ui.contains(this.containers[p].element[
                            0], this.items[k].item[0])) {
                            continue
                        }
                        var a = this.items[k][this.containers[p]
                            .floating ? "left" : "top"
                        ];
                        Math.abs(a - l) < n && (n = Math.abs(a -
                            l), m = this.items[k])
                    }
                    if (!m && !this.options.dropOnEmpty) {
                        return
                    }
                    this.currentContainer = this.containers[p],
                        m ? this._rearrange(r, m, null, !0) :
                        this._rearrange(r, null, this.containers[
                            p].element, !0), this._trigger(
                            "change", r, this._uiHash()), this.containers[
                            p]._trigger("change", r, this._uiHash(
                            this)), this.options.placeholder.update(
                            this.currentContainer, this.placeholder
                        ), this.containers[p]._trigger("over",
                            r, this._uiHash(this)), this.containers[
                            p].containerCache.over = 1
                }
            }
        },
        _createHelper: function(a) {
            var f = this.options,
                e = d.isFunction(f.helper) ? d(f.helper.apply(
                    this.element[0], [a, this.currentItem])) :
                f.helper == "clone" ? this.currentItem.clone() :
                this.currentItem;
            return e.parents("body").length || d(f.appendTo !=
                    "parent" ? f.appendTo : this.currentItem[0]
                    .parentNode)[0].appendChild(e[0]), e[0] ==
                this.currentItem[0] && (this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css(
                        "position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                }), (e[0].style.width == "" || f.forceHelperSize) &&
                e.width(this.currentItem.width()), (e[0].style.height ==
                    "" || f.forceHelperSize) && e.height(this.currentItem
                    .height()), e
        },
        _adjustOffsetFromHelper: function(a) {
            typeof a == "string" && (a = a.split(" ")), d.isArray(
                    a) && (a = {
                    left: +a[0],
                    top: +a[1] || 0
                }), "left" in a && (this.offset.click.left = a.left +
                    this.margins.left), "right" in a && (this.offset
                    .click.left = this.helperProportions.width -
                    a.right + this.margins.left), "top" in a &&
                (this.offset.click.top = a.top + this.margins.top),
                "bottom" in a && (this.offset.click.top = this.helperProportions
                    .height - a.bottom + this.margins.top)
        },
        _getParentOffset: function() {
            this.offsetParent = this.helper.offsetParent();
            var a = this.offsetParent.offset();
            this.cssPosition == "absolute" && this.scrollParent[
                0] != document && d.ui.contains(this.scrollParent[
                0], this.offsetParent[0]) && (a.left +=
                this.scrollParent.scrollLeft(), a.top +=
                this.scrollParent.scrollTop());
            if (this.offsetParent[0] == document.body || this.offsetParent[
                    0].tagName && this.offsetParent[0].tagName.toLowerCase() ==
                "html" && d.browser.msie) {
                a = {
                    top: 0,
                    left: 0
                }
            }
            return {
                top: a.top + (parseInt(this.offsetParent.css(
                    "borderTopWidth"), 10) || 0),
                left: a.left + (parseInt(this.offsetParent.css(
                    "borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function() {
            if (this.cssPosition == "relative") {
                var b = this.currentItem.position();
                return {
                    top: b.top - (parseInt(this.helper.css(
                            "top"), 10) || 0) + this.scrollParent
                        .scrollTop(),
                    left: b.left - (parseInt(this.helper.css(
                            "left"), 10) || 0) + this.scrollParent
                        .scrollLeft()
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        _cacheMargins: function() {
            this.margins = {
                left: parseInt(this.currentItem.css(
                    "marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css(
                    "marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function() {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function() {
            var a = this.options;
            a.containment == "parent" && (a.containment = this.helper[
                0].parentNode);
            if (a.containment == "document" || a.containment ==
                "window") {
                this.containment = [0 - this.offset.relative.left -
                    this.offset.parent.left, 0 - this.offset
                    .relative.top - this.offset.parent.top,
                    d(a.containment == "document" ?
                        document : window).width() - this.helperProportions
                    .width - this.margins.left, (d(a.containment ==
                            "document" ? document : window)
                        .height() || document.body.parentNode
                        .scrollHeight) - this.helperProportions
                    .height - this.margins.top
                ]
            }
            if (!/^(document|window|parent)$/.test(a.containment)) {
                var h = d(a.containment)[0],
                    g = d(a.containment).offset(),
                    f = d(h).css("overflow") != "hidden";
                this.containment = [g.left + (parseInt(d(h).css(
                        "borderLeftWidth"), 10) || 0) + (
                        parseInt(d(h).css("paddingLeft"),
                            10) || 0) - this.margins.left,
                    g.top + (parseInt(d(h).css(
                        "borderTopWidth"), 10) || 0) + (
                        parseInt(d(h).css("paddingTop"), 10) ||
                        0) - this.margins.top, g.left + (f ?
                        Math.max(h.scrollWidth, h.offsetWidth) :
                        h.offsetWidth) - (parseInt(d(h).css(
                        "borderLeftWidth"), 10) || 0) - (
                        parseInt(d(h).css("paddingRight"),
                            10) || 0) - this.helperProportions
                    .width - this.margins.left, g.top + (f ?
                        Math.max(h.scrollHeight, h.offsetHeight) :
                        h.offsetHeight) - (parseInt(d(h).css(
                        "borderTopWidth"), 10) || 0) - (
                        parseInt(d(h).css("paddingBottom"),
                            10) || 0) - this.helperProportions
                    .height - this.margins.top
                ]
            }
        },
        _convertPositionTo: function(a, l) {
            l || (l = this.position);
            var k = a == "absolute" ? 1 : -1,
                j = this.options,
                i = this.cssPosition == "absolute" && (this.scrollParent[
                    0] == document || !d.ui.contains(this.scrollParent[
                    0], this.offsetParent[0])) ? this.offsetParent :
                this.scrollParent,
                h = /(html|body)/i.test(i[0].tagName);
            return {
                top: l.top + this.offset.relative.top * k +
                    this.offset.parent.top * k - (d.browser.safari &&
                        this.cssPosition == "fixed" ? 0 : (this
                            .cssPosition == "fixed" ? -this.scrollParent
                            .scrollTop() : h ? 0 : i.scrollTop()
                        ) * k),
                left: l.left + this.offset.relative.left * k +
                    this.offset.parent.left * k - (d.browser.safari &&
                        this.cssPosition == "fixed" ? 0 : (this
                            .cssPosition == "fixed" ? -this.scrollParent
                            .scrollLeft() : h ? 0 : i.scrollLeft()
                        ) * k)
            }
        },
        _generatePosition: function(a) {
            var p = this.options,
                o = this.cssPosition == "absolute" && (this.scrollParent[
                    0] == document || !d.ui.contains(this.scrollParent[
                    0], this.offsetParent[0])) ? this.offsetParent :
                this.scrollParent,
                n = /(html|body)/i.test(o[0].tagName);
            this.cssPosition == "relative" && (this.scrollParent[
                    0] == document || this.scrollParent[0] ==
                this.offsetParent[0]) && (this.offset.relative =
                this._getRelativeOffset());
            var m = a.pageX,
                l = a.pageY;
            if (this.originalPosition) {
                this.containment && (a.pageX - this.offset.click
                    .left < this.containment[0] && (m =
                        this.containment[0] + this.offset.click
                        .left), a.pageY - this.offset.click
                    .top < this.containment[1] && (l = this
                        .containment[1] + this.offset.click
                        .top), a.pageX - this.offset.click.left >
                    this.containment[2] && (m = this.containment[
                        2] + this.offset.click.left), a.pageY -
                    this.offset.click.top > this.containment[
                        3] && (l = this.containment[3] +
                        this.offset.click.top));
                if (p.grid) {
                    var k = this.originalPageY + Math.round((l -
                            this.originalPageY) / p.grid[1]) *
                        p.grid[1];
                    l = this.containment ? k - this.offset.click
                        .top < this.containment[1] || k - this.offset
                        .click.top > this.containment[3] ? k -
                        this.offset.click.top < this.containment[
                            1] ? k + p.grid[1] : k - p.grid[1] :
                        k : k;
                    var j = this.originalPageX + Math.round((m -
                            this.originalPageX) / p.grid[0]) *
                        p.grid[0];
                    m = this.containment ? j - this.offset.click
                        .left < this.containment[0] || j - this
                        .offset.click.left > this.containment[2] ?
                        j - this.offset.click.left < this.containment[
                            0] ? j + p.grid[0] : j - p.grid[0] :
                        j : j
                }
            }
            return {
                top: l - this.offset.click.top - this.offset.relative
                    .top - this.offset.parent.top + (d.browser.safari &&
                        this.cssPosition == "fixed" ? 0 : this.cssPosition ==
                        "fixed" ? -this.scrollParent.scrollTop() :
                        n ? 0 : o.scrollTop()),
                left: m - this.offset.click.left - this.offset.relative
                    .left - this.offset.parent.left + (d.browser
                        .safari && this.cssPosition == "fixed" ?
                        0 : this.cssPosition == "fixed" ? -this
                        .scrollParent.scrollLeft() : n ? 0 : o.scrollLeft()
                    )
            }
        },
        _rearrange: function(h, g, l, k) {
            l ? l[0].appendChild(this.placeholder[0]) : g.item[
                    0].parentNode.insertBefore(this.placeholder[
                        0], this.direction == "down" ? g.item[0] :
                    g.item[0].nextSibling), this.counter = this
                .counter ? ++this.counter : 1;
            var j = this,
                i = this.counter;
            window.setTimeout(function() {
                i == j.counter && j.refreshPositions(!k)
            }, 0)
        },
        _clear: function(a, j) {
            this.reverting = !1;
            var i = [],
                h = this;
            !this._noFinalSort && this.currentItem.parent().length &&
                this.placeholder.before(this.currentItem), this
                ._noFinalSort = null;
            if (this.helper[0] == this.currentItem[0]) {
                for (var g in this._storedCSS) {
                    if (this._storedCSS[g] == "auto" || this._storedCSS[
                        g] == "static") {
                        this._storedCSS[g] = ""
                    }
                }
                this.currentItem.css(this._storedCSS).removeClass(
                    "ui-sortable-helper")
            } else {
                this.currentItem.show()
            }
            this.fromOutside && !j && i.push(function(b) {
                    this._trigger("receive", b, this._uiHash(
                        this.fromOutside))
                }), (this.fromOutside || this.domPosition.prev !=
                    this.currentItem.prev().not(
                        ".ui-sortable-helper")[0] || this.domPosition
                    .parent != this.currentItem.parent()[0]) &&
                !j && i.push(function(b) {
                    this._trigger("update", b, this._uiHash())
                });
            if (!d.ui.contains(this.element[0], this.currentItem[
                0])) {
                j || i.push(function(b) {
                    this._trigger("remove", b, this._uiHash())
                });
                for (var g = this.containers.length - 1; g >= 0; g--) {
                    d.ui.contains(this.containers[g].element[0],
                        this.currentItem[0]) && !j && (i.push(
                        function(b) {
                            return function(e) {
                                b._trigger(
                                    "receive",
                                    e, this._uiHash(
                                        this))
                            }
                        }.call(this, this.containers[g])
                    ), i.push(function(b) {
                        return function(e) {
                            b._trigger("update",
                                e, this._uiHash(
                                    this))
                        }
                    }.call(this, this.containers[g])))
                }
            }
            for (var g = this.containers.length - 1; g >= 0; g--) {
                j || i.push(function(b) {
                    return function(e) {
                        b._trigger("deactivate", e,
                            this._uiHash(this))
                    }
                }.call(this, this.containers[g])), this.containers[
                    g].containerCache.over && (i.push(
                        function(b) {
                            return function(e) {
                                b._trigger("out", e,
                                    this._uiHash(
                                        this))
                            }
                        }.call(this, this.containers[g])),
                    this.containers[g].containerCache.over =
                    0)
            }
            this._storedCursor && d("body").css("cursor", this._storedCursor),
                this._storedOpacity && this.helper.css(
                    "opacity", this._storedOpacity), this._storedZIndex &&
                this.helper.css("zIndex", this._storedZIndex ==
                    "auto" ? "" : this._storedZIndex), this.dragging = !
                1;
            if (this.cancelHelperRemoval) {
                if (!j) {
                    this._trigger("beforeStop", a, this._uiHash());
                    for (var g = 0; g < i.length; g++) {
                        i[g].call(this, a)
                    }
                    this._trigger("stop", a, this._uiHash())
                }
                return !1
            }
            j || this._trigger("beforeStop", a, this._uiHash()),
                this.placeholder[0].parentNode.removeChild(this
                    .placeholder[0]), this.helper[0] != this.currentItem[
                    0] && this.helper.remove(), this.helper =
                null;
            if (!j) {
                for (var g = 0; g < i.length; g++) {
                    i[g].call(this, a)
                }
                this._trigger("stop", a, this._uiHash())
            }
            return this.fromOutside = !1, !0
        },
        _trigger: function() {
            d.Widget.prototype._trigger.apply(this, arguments) ===
                !1 && this.cancel()
        },
        _uiHash: function(a) {
            var e = a || this;
            return {
                helper: e.helper,
                placeholder: e.placeholder || d([]),
                position: e.position,
                originalPosition: e.originalPosition,
                offset: e.positionAbs,
                item: e.currentItem,
                sender: a ? a.element : null
            }
        }
    }), d.extend(d.ui.sortable, {
        version: "1.8.20"
    })
})(jQuery);
/* jQuery UI - v1.8.20 - 2012-04-30
 * https://github.com/jquery/jquery-ui
 * Includes: jquery.ui.dialog.js
 * Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
(function(h, g) {
    var l = "ui-dialog ui-widget ui-widget-content ui-corner-all ",
        k = {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        j = {
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0
        },
        i = h.attrFn || {
            val: !0,
            css: !0,
            html: !0,
            text: !0,
            data: !0,
            width: !0,
            height: !0,
            offset: !0,
            click: !0
        };
    h.widget("ui.dialog", {
        options: {
            autoOpen: !0,
            buttons: {},
            closeOnEscape: !0,
            closeText: "close",
            dialogClass: "",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: !1,
            maxWidth: !1,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                collision: "fit",
                using: function(a) {
                    var d = h(this).css(a).offset().top;
                    d < 0 && h(this).css("top", a.top - d)
                }
            },
            resizable: !0,
            show: null,
            stack: !0,
            title: "",
            width: 300,
            zIndex: 1000
        },
        _create: function() {
            this.originalTitle = this.element.attr("title"),
                typeof this.originalTitle != "string" && (this.originalTitle =
                    ""), this.options.title = this.options.title ||
                this.originalTitle;
            var t = this,
                s = t.options,
                r = s.title || "&#160;",
                q = h.ui.dialog.getTitleId(t.element),
                p = (t.uiDialog = h("<div></div>")).appendTo(
                    document.body).hide().addClass(l + s.dialogClass)
                .css({
                    zIndex: s.zIndex
                }).attr("tabIndex", -1).css("outline", 0).keydown(
                    function(b) {
                        s.closeOnEscape && !b.isDefaultPrevented() &&
                            b.keyCode && b.keyCode === h.ui.keyCode
                            .ESCAPE && (t.close(b), b.preventDefault())
                    }).attr({
                    role: "dialog",
                    "aria-labelledby": q
                }).mousedown(function(b) {
                    t.moveToTop(!1, b)
                }),
                o = t.element.show().removeAttr("title").addClass(
                    "ui-dialog-content ui-widget-content").appendTo(
                    p),
                n = (t.uiDialogTitlebar = h("<div></div>")).addClass(
                    "ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"
                ).prependTo(p),
                m = h('<a href="#"></a>').addClass(
                    "ui-dialog-titlebar-close ui-corner-all").attr(
                    "role", "button").hover(function() {
                    m.addClass("ui-state-hover")
                }, function() {
                    m.removeClass("ui-state-hover")
                }).focus(function() {
                    m.addClass("ui-state-focus")
                }).blur(function() {
                    m.removeClass("ui-state-focus")
                }).click(function(b) {
                    return t.close(b), !1
                }).appendTo(n),
                c = (t.uiDialogTitlebarCloseText = h(
                    "<span></span>")).addClass(
                    "ui-icon ui-icon-closethick").text(s.closeText)
                .appendTo(m),
                a = h("<span></span>").addClass(
                    "ui-dialog-title").attr("id", q).html(r).prependTo(
                    n);
            h.isFunction(s.beforeclose) && !h.isFunction(s.beforeClose) &&
                (s.beforeClose = s.beforeclose), n.find("*").add(
                    n).disableSelection(), s.draggable && h.fn.draggable &&
                t._makeDraggable(), s.resizable && h.fn.resizable &&
                t._makeResizable(), t._createButtons(s.buttons),
                t._isOpen = !1, h.fn.bgiframe && p.bgiframe()
        },
        _init: function() {
            this.options.autoOpen && this.open()
        },
        destroy: function() {
            var b = this;
            return b.overlay && b.overlay.destroy(), b.uiDialog
                .hide(), b.element.unbind(".dialog").removeData(
                    "dialog").removeClass(
                    "ui-dialog-content ui-widget-content").hide()
                .appendTo("body"), b.uiDialog.remove(), b.originalTitle &&
                b.element.attr("title", b.originalTitle), b
        },
        widget: function() {
            return this.uiDialog
        },
        close: function(a) {
            var n = this,
                m, f;
            if (!1 === n._trigger("beforeClose", a)) {
                return
            }
            return n.overlay && n.overlay.destroy(), n.uiDialog
                .unbind("keypress.ui-dialog"), n._isOpen = !1,
                n.options.hide ? n.uiDialog.hide(n.options.hide,
                    function() {
                        n._trigger("close", a)
                    }) : (n.uiDialog.hide(), n._trigger("close",
                    a)), h.ui.dialog.overlay.resize(), n.options
                .modal && (m = 0, h(".ui-dialog").each(function() {
                    this !== n.uiDialog[0] && (f = h(
                            this).css("z-index"),
                        isNaN(f) || (m = Math.max(m,
                            f)))
                }), h.ui.dialog.maxZ = m), n
        },
        isOpen: function() {
            return this._isOpen
        },
        moveToTop: function(a, p) {
            var o = this,
                n = o.options,
                m;
            return n.modal && !a || !n.stack && !n.modal ? o._trigger(
                "focus", p) : (n.zIndex > h.ui.dialog.maxZ &&
                (h.ui.dialog.maxZ = n.zIndex), o.overlay &&
                (h.ui.dialog.maxZ += 1, o.overlay.$el.css(
                    "z-index", h.ui.dialog.overlay.maxZ =
                    h.ui.dialog.maxZ)), m = {
                    scrollTop: o.element.scrollTop(),
                    scrollLeft: o.element.scrollLeft()
                }, h.ui.dialog.maxZ += 1, o.uiDialog.css(
                    "z-index", h.ui.dialog.maxZ), o.element
                .attr(m), o._trigger("focus", p), o)
        },
        open: function() {
            if (this._isOpen) {
                return
            }
            var a = this,
                f = a.options,
                e = a.uiDialog;
            return a.overlay = f.modal ? new h.ui.dialog.overlay(
                    a) : null, a._size(), a._position(f.position),
                e.show(f.show), a.moveToTop(!0), f.modal && e.bind(
                    "keydown.ui-dialog", function(m) {
                        if (m.keyCode !== h.ui.keyCode.TAB) {
                            return
                        }
                        var p = h(":tabbable", this),
                            o = p.filter(":first"),
                            n = p.filter(":last");
                        if (m.target === n[0] && !m.shiftKey) {
                            return o.focus(1), !1
                        }
                        if (m.target === o[0] && m.shiftKey) {
                            return n.focus(1), !1
                        }
                    }), h(a.element.find(":tabbable").get().concat(
                    e.find(
                        ".ui-dialog-buttonpane :tabbable").get()
                    .concat(e.get()))).eq(0).focus(), a._isOpen = !
                0, a._trigger("open"), a
        },
        _createButtons: function(a) {
            var o = this,
                n = !1,
                m = h("<div></div>").addClass(
                    "ui-dialog-buttonpane ui-widget-content ui-helper-clearfix"
                ),
                f = h("<div></div>").addClass(
                    "ui-dialog-buttonset").appendTo(m);
            o.uiDialog.find(".ui-dialog-buttonpane").remove(),
                typeof a == "object" && a !== null && h.each(a,
                    function() {
                        return !(n = !0)
                    }), n && (h.each(a, function(c, q) {
                    q = h.isFunction(q) ? {
                        click: q,
                        text: c
                    } : q;
                    var p = h(
                        '<button type="button"></button>'
                    ).click(function() {
                        q.click.apply(o.element[
                                0],
                            arguments)
                    }).appendTo(f);
                    h.each(q, function(e, d) {
                        if (e === "click") {
                            return
                        }
                        e in i ? p[e](d) : p.attr(
                            e, d)
                    }), h.fn.button && p.button()
                }), m.appendTo(o.uiDialog))
        },
        _makeDraggable: function() {
            function m(b) {
                return {
                    position: b.position,
                    offset: b.offset
                }
            }
            var a = this,
                p = a.options,
                o = h(document),
                n;
            a.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(c, b) {
                    n = p.height === "auto" ?
                        "auto" : h(this).height(),
                        h(this).height(h(this).height())
                        .addClass(
                            "ui-dialog-dragging"),
                        a._trigger("dragStart", c,
                            m(b))
                },
                drag: function(b, d) {
                    a._trigger("drag", b, m(d))
                },
                stop: function(c, b) {
                    p.position = [b.position.left -
                            o.scrollLeft(), b.position
                            .top - o.scrollTop()
                        ], h(this).removeClass(
                            "ui-dialog-dragging").height(
                            n), a._trigger(
                            "dragStop", c, m(b)), h
                        .ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function(p) {
            function a(c) {
                return {
                    originalPosition: c.originalPosition,
                    originalSize: c.originalSize,
                    position: c.position,
                    size: c.size
                }
            }
            p = p === g ? this.options.resizable : p;
            var o = this,
                n = o.options,
                m = o.uiDialog.css("position"),
                b = typeof p == "string" ? p :
                "n,e,s,w,se,sw,ne,nw";
            o.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: o.element,
                maxWidth: n.maxWidth,
                maxHeight: n.maxHeight,
                minWidth: n.minWidth,
                minHeight: o._minHeight(),
                handles: b,
                start: function(d, e) {
                    h(this).addClass(
                            "ui-dialog-resizing"),
                        o._trigger("resizeStart", d,
                            a(e))
                },
                resize: function(d, c) {
                    o._trigger("resize", d, a(c))
                },
                stop: function(d, e) {
                    h(this).removeClass(
                            "ui-dialog-resizing"),
                        n.height = h(this).height(),
                        n.width = h(this).width(),
                        o._trigger("resizeStop", d,
                            a(e)), h.ui.dialog.overlay
                        .resize()
                }
            }).css("position", m).find(".ui-resizable-se").addClass(
                "ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function() {
            var b = this.options;
            return b.height === "auto" ? b.minHeight : Math.min(
                b.minHeight, b.height)
        },
        _position: function(a) {
            var n = [],
                m = [0, 0],
                f;
            if (a) {
                if (typeof a == "string" || typeof a ==
                    "object" && "0" in a) {
                    n = a.split ? a.split(" ") : [a[0], a[1]],
                        n.length === 1 && (n[1] = n[0]), h.each(
                            ["left", "top"], function(d, c) {
                                +n[d] === n[d] && (m[d] = n[d],
                                    n[d] = c)
                            }), a = {
                            my: n.join(" "),
                            at: n.join(" "),
                            offset: m.join(" ")
                        }
                }
                a = h.extend({}, h.ui.dialog.prototype.options.position,
                    a)
            } else {
                a = h.ui.dialog.prototype.options.position
            }
            f = this.uiDialog.is(":visible"), f || this.uiDialog
                .show(), this.uiDialog.css({
                    top: 0,
                    left: 0
                }).position(h.extend({
                    of: window
                }, a)), f || this.uiDialog.hide()
        },
        _setOptions: function(a) {
            var m = this,
                e = {},
                d = !1;
            h.each(a, function(f, c) {
                m._setOption(f, c), f in k && (d = !0),
                    f in j && (e[f] = c)
            }), d && this._size(), this.uiDialog.is(
                ":data(resizable)") && this.uiDialog.resizable(
                "option", e)
        },
        _setOption: function(a, p) {
            var o = this,
                n = o.uiDialog;
            switch (a) {
                case "beforeclose":
                    a = "beforeClose";
                    break;
                case "buttons":
                    o._createButtons(p);
                    break;
                case "closeText":
                    o.uiDialogTitlebarCloseText.text("" + p);
                    break;
                case "dialogClass":
                    n.removeClass(o.options.dialogClass).addClass(
                        l + p);
                    break;
                case "disabled":
                    p ? n.addClass("ui-dialog-disabled") : n.removeClass(
                        "ui-dialog-disabled");
                    break;
                case "draggable":
                    var m = n.is(":data(draggable)");
                    m && !p && n.draggable("destroy"), !m && p &&
                        o._makeDraggable();
                    break;
                case "position":
                    o._position(p);
                    break;
                case "resizable":
                    var c = n.is(":data(resizable)");
                    c && !p && n.resizable("destroy"), c &&
                        typeof p == "string" && n.resizable(
                            "option", "handles", p), !c && p !==
                        !1 && o._makeResizable(p);
                    break;
                case "title":
                    h(".ui-dialog-title", o.uiDialogTitlebar).html(
                        "" + (p || "&#160;"))
            }
            h.Widget.prototype._setOption.apply(o, arguments)
        },
        _size: function() {
            var a = this.options,
                p, o, n = this.uiDialog.is(":visible");
            this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    height: 0
                }), a.minWidth > a.width && (a.width = a.minWidth),
                p = this.uiDialog.css({
                    height: "auto",
                    width: a.width
                }).height(), o = Math.max(0, a.minHeight - p);
            if (a.height === "auto") {
                if (h.support.minHeight) {
                    this.element.css({
                        minHeight: o,
                        height: "auto"
                    })
                } else {
                    this.uiDialog.show();
                    var m = this.element.css("height", "auto").height();
                    n || this.uiDialog.hide(), this.element.height(
                        Math.max(m, o))
                }
            } else {
                this.element.height(Math.max(a.height - p, 0))
            }
            this.uiDialog.is(":data(resizable)") && this.uiDialog
                .resizable("option", "minHeight", this._minHeight())
        }
    }), h.extend(h.ui.dialog, {
        version: "1.8.20",
        uuid: 0,
        maxZ: 0,
        getTitleId: function(d) {
            var c = d.attr("id");
            return c || (this.uuid += 1, c = this.uuid),
                "ui-dialog-title-" + c
        },
        overlay: function(a) {
            this.$el = h.ui.dialog.overlay.create(a)
        }
    }), h.extend(h.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: h.map(
            "focus,mousedown,mouseup,keydown,keypress,click".split(
                ","), function(b) {
                return b + ".dialog-overlay"
            }).join(" "),
        create: function(a) {
            this.instances.length === 0 && (setTimeout(function() {
                h.ui.dialog.overlay.instances.length &&
                    h(document).bind(h.ui.dialog.overlay
                        .events, function(c) {
                            if (h(c.target).zIndex() <
                                h.ui.dialog.overlay
                                .maxZ) {
                                return !1
                            }
                        })
            }, 1), h(document).bind(
                "keydown.dialog-overlay", function(b) {
                    a.options.closeOnEscape && !b.isDefaultPrevented() &&
                        b.keyCode && b.keyCode === h.ui
                        .keyCode.ESCAPE && (a.close(b),
                            b.preventDefault())
                }), h(window).bind(
                "resize.dialog-overlay", h.ui.dialog.overlay
                .resize));
            var d = (this.oldInstances.pop() || h("<div></div>")
                .addClass("ui-widget-overlay")).appendTo(
                document.body).css({
                width: this.width(),
                height: this.height()
            });
            return h.fn.bgiframe && d.bgiframe(), this.instances
                .push(d), d
        },
        destroy: function(a) {
            var f = h.inArray(a, this.instances);
            f != -1 && this.oldInstances.push(this.instances.splice(
                f, 1)[0]), this.instances.length === 0 && h(
                [document, window]).unbind(
                ".dialog-overlay"), a.remove();
            var e = 0;
            h.each(this.instances, function() {
                e = Math.max(e, this.css("z-index"))
            }), this.maxZ = e
        },
        height: function() {
            var a, d;
            return h.browser.msie && h.browser.version < 7 ? (a =
                Math.max(document.documentElement.scrollHeight,
                    document.body.scrollHeight), d = Math.max(
                    document.documentElement.offsetHeight,
                    document.body.offsetHeight), a < d ? h(
                    window).height() + "px" : a + "px") : h(
                document).height() + "px"
        },
        width: function() {
            var a, d;
            return h.browser.msie ? (a = Math.max(document.documentElement
                .scrollWidth, document.body.scrollWidth
            ), d = Math.max(document.documentElement.offsetWidth,
                document.body.offsetWidth), a < d ? h(
                window).width() + "px" : a + "px") : h(
                document).width() + "px"
        },
        resize: function() {
            var a = h([]);
            h.each(h.ui.dialog.overlay.instances, function() {
                a = a.add(this)
            }), a.css({
                width: 0,
                height: 0
            }).css({
                width: h.ui.dialog.overlay.width(),
                height: h.ui.dialog.overlay.height()
            })
        }
    }), h.extend(h.ui.dialog.overlay.prototype, {
        destroy: function() {
            h.ui.dialog.overlay.destroy(this.$el)
        }
    })
})(jQuery);
(function(b) {
    b.cookie = function(r, q, p) {
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString
            .call(q)) || q === null || q === undefined)) {
            p = b.extend({}, p);
            if (q === null || q === undefined) {
                p.expires = -1
            }
            if (typeof p.expires === "number") {
                var o = p.expires,
                    n = p.expires = new Date;
                n.setDate(n.getDate() + o)
            }
            q = String(q);
            return document.cookie = [encodeURIComponent(r), "=", p.raw ?
                q : encodeURIComponent(q), p.expires ? "; expires=" +
                p.expires.toUTCString() : "", p.path ? "; path=" +
                p.path : "", p.domain ? "; domain=" + p.domain : "",
                p.secure ? "; secure" : ""
            ].join("")
        }
        p = q || {};
        var m = p.raw ? function(c) {
            return c
        } : decodeURIComponent;
        var l = document.cookie.split("; ");
        for (var k = 0, a; a = l[k] && l[k].split("="); k++) {
            if (m(a[0]) === r) {
                return m(a[1] || "")
            }
        }
        return null
    }
})(jQuery);
(function(aJ) {
    function ap(t) {
        var s = this,
            r = t.target,
            q = aJ.data(r, ax),
            m = aC[q],
            p = m.popupName,
            l = aF[p];
        if (!(s.disabled || aJ(r).attr(aG) == aG)) {
            var n = {
                editor: s,
                button: r,
                buttonName: q,
                popup: l,
                popupName: p,
                command: m.command,
                useCSS: s.options.useCSS
            };
            if (m.buttonClick && m.buttonClick(t, n) === false) {
                return false
            }
            if (q == "source") {
                if (aB(s)) {
                    delete s.range;
                    s.$area.hide();
                    s.$frame.show();
                    r.title = m.title
                } else {
                    s.$frame.hide();
                    s.$area.show();
                    r.title = "Show Rich Text"
                }
                setTimeout(function() {
                    aA(s)
                }, 100)
            } else {
                if (!aB(s)) {
                    if (p) {
                        var e = aJ(l);
                        if (p == "url") {
                            if (q == "link" && ad(s) === "") {
                                av(s,
                                    "A selection is required when inserting a link.",
                                    r);
                                return false
                            }
                            e.children(":button").unbind(aE).bind(aE,
                                function() {
                                    var u = e.find(":text"),
                                        v = aJ.trim(u.val());
                                    v !== "" && az(s, n.command, v,
                                        null, n.button);
                                    u.val("http://");
                                    aD();
                                    ay(s)
                                })
                        } else {
                            p == "pastetext" && e.children(":button").unbind(
                                aE).bind(aE, function() {
                                var u = e.find("textarea"),
                                    v = u.val().replace(/\n/g,
                                        "<br />");
                                v !== "" && az(s, n.command, v,
                                    null, n.button);
                                u.val("");
                                aD();
                                ay(s)
                            })
                        } if (r !== aJ.data(l, ao)) {
                            ac(s, l, r);
                            return false
                        }
                        return
                    } else {
                        if (q == "print") {
                            s.$frame[0].contentWindow.print()
                        } else {
                            if (!az(s, n.command, n.value, n.useCSS, r)) {
                                return false
                            }
                        }
                    }
                }
            }
            ay(s)
        }
    }

    function ab(e) {
        e = aJ(e.target).closest("div");
        e.css(ai, e.data(ax) ? "#FFF" : "#FFC")
    }

    function G(e) {
        aJ(e.target).closest("div").css(ai, "transparent")
    }

    function aK(t) {
        var s = t.data.popup,
            r = t.target;
        if (!(s === aF.msg || aJ(s).hasClass(an))) {
            var q = aJ.data(s, ao),
                m = aJ.data(q, ax),
                p = aC[m],
                l = p.command,
                n, e = this.options.useCSS;
            if (m == "font") {
                n = r.style.fontFamily.replace(/"/g, "")
            } else {
                if (m == "size") {
                    if (r.tagName == "DIV") {
                        r = r.children[0]
                    }
                    n = r.innerHTML
                } else {
                    if (m == "style") {
                        n = "<" + r.tagName + ">"
                    } else {
                        if (m == "color") {
                            n = o(r.style.backgroundColor)
                        } else {
                            if (m == "highlight") {
                                n = o(r.style.backgroundColor);
                                if (aI) {
                                    l = "backcolor"
                                } else {
                                    e = true
                                }
                            }
                        }
                    }
                }
            }
            s = {
                editor: this,
                button: q,
                buttonName: m,
                popup: s,
                popupName: p.popupName,
                command: l,
                value: n,
                useCSS: e
            };
            if (!(p.popupClick && p.popupClick(t, s) === false)) {
                if (s.command && !az(this, s.command, s.value, s.useCSS,
                    q)) {
                    return false
                }
                aD();
                ay(this)
            }
        }
    }

    function am(l) {
        for (var e = 1, n = 0, m = 0; m < l.length; ++m) {
            e = (e + l.charCodeAt(m)) % 65521;
            n = (n + e) % 65521
        }
        return n << 16 | e
    }

    function k(l, e, q, p, m) {
        if (aF[l]) {
            return aF[l]
        }
        var n = aJ(aH).hide().addClass(at).appendTo("body");
        if (p) {
            n.html(p)
        } else {
            if (l == "color") {
                e = e.colors.split(" ");
                e.length < 10 && n.width("auto");
                aJ.each(e, function(r, s) {
                    aJ(aH).appendTo(n).css(ai, "#" + s)
                });
                q = aq
            } else {
                if (l == "font") {
                    aJ.each(e.fonts.split(","), function(r, s) {
                        aJ(aH).appendTo(n).css("fontFamily", s)
                            .html(s)
                    })
                } else {
                    if (l == "size") {
                        aJ.each(e.sizes.split(","), function(r, s) {
                            aJ(aH).appendTo(n).html(
                                "<font size=" + s + ">" + s +
                                "</font>")
                        })
                    } else {
                        if (l == "style") {
                            aJ.each(e.styles, function(r, s) {
                                aJ(aH).appendTo(n).html(s[1] +
                                    s[0] + s[1].replace("<",
                                        "</"))
                            })
                        } else {
                            if (l == "url") {
                                n.html(
                                    'Enter URL:<br><input type=text value="http://" size=35><br><input type=button value="Submit">'
                                );
                                q = an
                            } else {
                                if (l == "pastetext") {
                                    n.html(
                                        "Paste your content here and click submit.<br /><textarea cols=40 rows=3></textarea><br /><input type=button value=Submit>"
                                    );
                                    q = an
                                }
                            }
                        }
                    }
                }
            }
        } if (!q && !p) {
            q = j
        }
        n.addClass(q);
        aI && n.attr(ah, "on").find("div,font,p,h1,h2,h3,h4,h5,h6").attr(
            ah, "on");
        if (n.hasClass(j) || m === true) {
            n.children().hover(ab, G)
        }
        aF[l] = n[0];
        return n[0]
    }

    function i(l, e) {
        if (e) {
            l.$area.attr(aG, aG);
            l.disabled = true
        } else {
            l.$area.removeAttr(aG);
            delete l.disabled
        }
        try {
            if (aI) {
                l.doc.body.contentEditable = !e
            } else {
                l.doc.designMode = !e ? "on" : "off"
            }
        } catch (m) {}
        aA(l)
    }

    function az(l, e, r, q, n) {
        al(l);
        if (!aI) {
            if (q === undefined || q === null) {
                q = l.options.useCSS
            }
            l.doc.execCommand("styleWithCSS", 0, q.toString())
        }
        q = true;
        var p;
        if (aI && e.toLowerCase() == "inserthtml") {
            aw(l).pasteHTML(r)
        } else {
            try {
                q = l.doc.execCommand(e, 0, r || null)
            } catch (m) {
                p = m.description;
                q = false
            }
            q || ("cutcopypaste".indexOf(e) > -1 ? av(l,
                "For security reasons, your browser does not support the " +
                e +
                " command. Try using the keyboard shortcut or context menu instead.",
                n) : av(l, p ? p : "Error executing the " + e +
                " command.", n))
        }
        aA(l);
        return q
    }

    function ay(e) {
        setTimeout(function() {
            aB(e) ? e.$area.focus() : e.$frame[0].contentWindow
                .focus();
            aA(e)
        }, 0)
    }

    function aw(e) {
        if (aI) {
            return ag(e).createRange()
        }
        return ag(e).getRangeAt(0)
    }

    function ag(e) {
        if (aI) {
            return e.doc.selection
        }
        return e.$frame[0].contentWindow.getSelection()
    }

    function o(l) {
        var e = /rgba?\((\d+), (\d+), (\d+)/.exec(l),
            m = l.split("");
        if (e) {
            for (l = (e[1] << 16 | e[2] << 8 | e[3]).toString(16); l.length <
                6;) {
                l = "0" + l
            }
        }
        return "#" + (l.length == 6 ? l : m[1] + m[1] + m[2] + m[2] + m[
            3] + m[3])
    }

    function aD() {
        aJ.each(aF, function(l, e) {
            aJ(e).hide().unbind(aE).removeData(ao)
        })
    }

    function h() {
        return CV_ROOT + "images/"
    }

    function af(l) {
        var e = l.$main,
            r = l.options;
        l.$frame && l.$frame.remove();
        var q = l.$frame = aJ(
                '<iframe frameborder="0" src="javascript:true;">').hide()
            .appendTo(e),
            n = q[0].contentWindow,
            p = l.doc = n.document,
            m = aJ(p);
        p.open();
        p.write(r.docType + "<html>" + (r.docCSSFile === "" ? "" :
                '<head><link rel="stylesheet" type="text/css" href="' +
                r.docCSSFile + '" /></head>') + '<body style="' + r
            .bodyStyle + '"></body></html>');
        p.close();
        aI && m.click(function() {
            ay(l)
        });
        ak(l);
        if (aI) {
            m.bind(
                "beforedeactivate beforeactivate selectionchange keypress",
                function(s) {
                    if (s.type == "beforedeactivate") {
                        l.inactive = true
                    } else {
                        if (s.type == "beforeactivate") {
                            !l.inactive && l.range && l.range.length >
                                1 && l.range.shift();
                            delete l.inactive
                        } else {
                            if (!l.inactive) {
                                if (!l.range) {
                                    l.range = []
                                }
                                for (l.range.unshift(aw(l)); l.range
                                    .length > 2;) {
                                    l.range.pop()
                                }
                            }
                        }
                    }
                });
            q.focus(function() {
                al(l)
            })
        }(aJ.browser.mozilla ? m : aJ(n)).blur(function() {
            g(l, true)
        });
        m.click(aD).bind("keyup mouseup", function() {
            aA(l)
        });
        ae ? l.$area.show() : q.show();
        aJ(function() {
            var u = l.$toolbar,
                t = u.children("div:last"),
                s = e.width();
            t = t.offset().top + t.outerHeight() - u.offset().top +
                1;
            u.height(t);
            t = (/%/.test("" + r.height) ? e.height() :
                parseInt(r.height)) - t;
            q.width(s).height(t);
            l.$area.width(s).height(a ? t - 2 : t);
            i(l, l.disabled);
            aA(l)
        })
    }

    function aA(l) {
        if (!ae && aJ.browser.webkit && !l.focused) {
            l.$frame[0].contentWindow.focus();
            window.focus();
            l.focused = true
        }
        var e = l.doc;
        if (aI) {
            e = aw(l)
        }
        var m = aB(l);
        aJ.each(l.$toolbar.find("." + f), function(u, r) {
            var t = aJ(r),
                q = aJ.cleditor.buttons[aJ.data(r, ax)],
                s = q.command,
                p = true;
            if (l.disabled) {
                p = false
            } else {
                if (q.getEnabled) {
                    p = q.getEnabled({
                        editor: l,
                        button: r,
                        buttonName: q.name,
                        popup: aF[q.popupName],
                        popupName: q.popupName,
                        command: q.command,
                        useCSS: l.options.useCSS
                    });
                    if (p === undefined) {
                        p = true
                    }
                } else {
                    if ((m || ae) && q.name != "source" || aI &&
                        (s == "undo" || s == "redo")) {
                        p = false
                    } else {
                        if (s && s != "print") {
                            if (aI && s == "hilitecolor") {
                                s = "backcolor"
                            }
                            if (!aI || s != "inserthtml") {
                                try {
                                    p = e.queryCommandEnabled(s)
                                } catch (n) {
                                    p = false
                                }
                            }
                        }
                    }
                }
            } if (p) {
                t.removeClass(d);
                t.removeAttr(aG)
            } else {
                t.addClass(d);
                t.attr(aG, aG)
            }
        })
    }

    function al(e) {
        aI && e.range && e.range[0].select()
    }

    function ad(e) {
        al(e);
        if (aI) {
            return aw(e).text
        }
        return ag(e).toString()
    }

    function av(l, e, n) {
        var m = k("msg", l.options, au);
        m.innerHTML = e;
        ac(l, m, n)
    }

    function ac(l, e, r) {
        var q, n, p = aJ(e);
        if (r) {
            var m = aJ(r);
            q = m.offset();
            n = --q.left;
            q = q.top + m.height()
        } else {
            m = l.$toolbar;
            q = m.offset();
            n = Math.floor((m.width() - p.width()) / 2) + q.left;
            q = q.top + m.height() - 2
        }
        aD();
        p.css({
            left: n,
            top: q
        }).show();
        if (r) {
            aJ.data(e, ao, r);
            p.bind(aE, {
                popup: e
            }, aJ.proxy(aK, l))
        }
        setTimeout(function() {
            p.find(":text,textarea").eq(0).focus().select()
        }, 100)
    }

    function aB(e) {
        return e.$area.is(":visible")
    }

    function ak(l, e) {
        var r = l.$area.val(),
            q = l.options,
            n = q.updateFrame,
            p = aJ(l.doc.body);
        if (n) {
            var m = am(r);
            if (e && l.areaChecksum == m) {
                return
            }
            l.areaChecksum = m
        }
        r = n ? n(r) : r;
        r = r.replace(/<(?=\/?script)/ig, "&lt;");
        if (q.updateTextArea) {
            l.frameChecksum = am(r)
        }
        if (r != p.html()) {
            p.html(r);
            aJ(l).triggerHandler(aj)
        }
    }

    function g(l, e) {
        var r = aJ(l.doc.body).html(),
            q = l.options,
            n = q.updateTextArea,
            p = l.$area;
        if (n) {
            var m = am(r);
            if (e && l.frameChecksum == m) {
                return
            }
            l.frameChecksum = m
        }
        r = n ? n(r) : r;
        if (q.updateFrame) {
            l.areaChecksum = am(r)
        }
        if (r != p.val()) {
            p.val(r);
            aJ(l).triggerHandler(aj)
        }
    }
    aJ.cleditor = {
        defaultOptions: {
            width: 500,
            height: 250,
            controls: "bold italic underline strikethrough subscript superscript | font size style | color highlight removeformat | bullets numbering | outdent indent | alignleft center alignright justify | undo redo | rule image link unlink | cut copy paste pastetext | print source",
            colors: "FFF FCC FC9 FF9 FFC 9F9 9FF CFF CCF FCF CCC F66 F96 FF6 FF3 6F9 3FF 6FF 99F F9F BBB F00 F90 FC6 FF0 3F3 6CC 3CF 66C C6C 999 C00 F60 FC3 FC0 3C0 0CC 36F 63F C3C 666 900 C60 C93 990 090 399 33F 60C 939 333 600 930 963 660 060 366 009 339 636 000 300 630 633 330 030 033 006 309 303",
            fonts: "Arial,Arial Black,Comic Sans MS,Courier New,Narrow,Garamond,Georgia,Impact,Sans Serif,Serif,Tahoma,Trebuchet MS,Verdana",
            sizes: "1,2,3,4,5,6,7",
            styles: [
                ["Paragraph", "<p>"],
                ["Header 1", "<h1>"],
                ["Header 2", "<h2>"],
                ["Header 3", "<h3>"],
                ["Header 4", "<h4>"],
                ["Header 5", "<h5>"],
                ["Header 6", "<h6>"]
            ],
            useCSS: false,
            docType: '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">',
            docCSSFile: "",
            bodyStyle: "margin:4px; font:10pt Arial,Verdana; cursor:text"
        },
        buttons: {
            init: "bold,,|italic,,|underline,,|strikethrough,,|subscript,,|superscript,,|font,,fontname,|size,Font Size,fontsize,|style,,formatblock,|color,Font Color,forecolor,|highlight,Text Highlight Color,hilitecolor,color|removeformat,Remove Formatting,|bullets,,insertunorderedlist|numbering,,insertorderedlist|outdent,,|indent,,|alignleft,Align Text Left,justifyleft|center,,justifycenter|alignright,Align Text Right,justifyright|justify,,justifyfull|undo,,|redo,,|rule,Insert Horizontal Rule,inserthorizontalrule|image,Insert Image,insertimage,url|link,Insert Hyperlink,createlink,url|unlink,Remove Hyperlink,|cut,,|copy,,|paste,,|pastetext,Paste as Text,inserthtml,|print,,|source,Show Source"
        },
        imagesPath: function() {
            return h()
        }
    };
    aJ.fn.cleditor = function(l) {
        var e = aJ([]);
        this.each(function(p, n) {
            if (n.tagName == "TEXTAREA") {
                var m = aJ.data(n, c);
                m || (m = new cleditor(n, l));
                e = e.add(m)
            }
        });
        return e
    };
    var ai = "backgroundColor",
        ao = "button",
        ax = "buttonName",
        aj = "change",
        c = "cleditor",
        aE = "click",
        aG = "disabled",
        aH = "<div>",
        ah = "unselectable",
        f = "cleditorButton",
        d = "cleditorDisabled",
        at = "cleditorPopup",
        j = "cleditorList",
        aq = "cleditorColor",
        an = "cleditorPrompt",
        au = "cleditorMsg",
        aI = aJ.browser.msie,
        a = /msie\s6/i.test(navigator.userAgent),
        ae = /iphone|ipad|ipod/i.test(navigator.userAgent),
        aF = {},
        b, aC = aJ.cleditor.buttons;
    aJ.each(aC.init.split("|"), function(l, e) {
        var n = e.split(","),
            m = n[0];
        aC[m] = {
            stripIndex: l,
            name: m,
            title: n[1] === "" ? m.charAt(0).toUpperCase() + m.substr(
                1) : n[1],
            command: n[2] === "" ? m : n[2],
            popupName: n[3] === "" ? m : n[3]
        }
    });
    delete aC.init;
    cleditor = function(l, e) {
        var r = this;
        r.options = e = aJ.extend({}, aJ.cleditor.defaultOptions, e);
        var q = r.$area = aJ(l).hide().data(c, r).blur(function() {
                ak(r, true)
            }),
            n = r.$main = aJ(aH).addClass("cleditorMain").width(e.width)
            .height(e.height),
            p = r.$toolbar = aJ(aH).addClass("cleditorToolbar").appendTo(
                n),
            m = aJ(aH).addClass("cleditorGroup").appendTo(p);
        aJ.each(e.controls.split(" "), function(v, t) {
            if (t === "") {
                return true
            }
            if (t == "|") {
                aJ(aH).addClass("cleditorDivider").appendTo(m);
                m = aJ(aH).addClass("cleditorGroup").appendTo(p)
            } else {
                var s = aC[t],
                    w = aJ(aH).data(ax, s.name).addClass(f).attr(
                        "title", s.title).bind(aE, aJ.proxy(ap,
                        r)).appendTo(m).hover(ab, G),
                    u = {};
                if (s.css) {
                    u = s.css
                } else {
                    if (s.image) {
                        u.backgroundImage = "url(" + h() + s.image +
                            ")"
                    }
                } if (s.stripIndex) {
                    u.backgroundPosition = s.stripIndex * -24
                }
                w.css(u);
                aI && w.attr(ah, "on");
                s.popupName && k(s.popupName, e, s.popupClass,
                    s.popupContent, s.popupHover)
            }
        });
        n.insertBefore(q).append(q);
        if (!b) {
            aJ(document).click(function(s) {
                s = aJ(s.target);
                s.add(s.parents()).is("." + an) || aD()
            });
            b = true
        }
        / auto | % /.test("" + e.width + e.height) && aJ(window).resize(
            function() {
                af(r)
            });
        af(r)
    };
    var ar = cleditor.prototype;
    aJ.each([
        ["clear",
            function(e) {
                e.$area.val("");
                ak(e)
            }
        ],
        ["disable", i],
        ["execCommand", az],
        ["focus", ay],
        ["hidePopups", aD],
        ["sourceMode", aB, true],
        ["refresh", af],
        ["select",
            function(e) {
                setTimeout(function() {
                    aB(e) ? e.$area.select() : az(e,
                        "selectall")
                }, 0)
            }
        ],
        ["selectedHTML",
            function(l) {
                al(l);
                l = aw(l);
                if (aI) {
                    return l.htmlText
                }
                var e = aJ("<layer>")[0];
                e.appendChild(l.cloneContents());
                return e.innerHTML
            },
            true
        ],
        ["selectedText", ad, true],
        ["showMessage", av],
        ["updateFrame", ak],
        ["updateTextArea", g]
    ], function(l, e) {
        ar[e[0]] = function() {
            for (var n = [this], m = 0; m < arguments.length; m++) {
                n.push(arguments[m])
            }
            n = e[1].apply(this, n);
            if (e[2]) {
                return n
            }
            return this
        }
    });
    ar.change = function(l) {
        var e = aJ(this);
        return l ? e.bind(aj, l) : e.trigger(aj)
    }
})(jQuery);
var CV = new function() {
    var d = "en";
    this.init = function() {
        c.init()
    };
    this.initHome = function() {
        c.initHome()
    };
    this.showSectionFromIndex = function(a) {
        c.showSectionFromIndex(a)
    };
    var c = {
        SECTIONS: {},
        DATA: {},
        LIST: {},
        ORDER: [],
        USER: null,
        MAX_ADDABLES: 15,
        MAX_SECTIONS: 15,
        PHOTO_FILES: null,
        PHOTO_SIZE: null,
        AUTO_SAVE: 600000,
        addable_sets: {},
        rte: {},
        controls: {},
        current_section: null,
        previous_section: null,
        new_section: null,
        counter: 0,
        flags: {
            counter: 0,
            download_timer: null,
            notice_timer: null,
            processing: false
        },
        control_names: {
            share_link: "#share-link",
            share_options: "#share-options",
            sections: "#cvsections",
            form: "#cvform",
            postframe: "#postframe",
            form_create: "#cvform.create",
            choose_style: "#choose-style",
            choose_type: "#choose-type",
            choose_size: "#choose-size",
            download_prompt: "#download-prompt",
            bt_create: "#bt-create",
            bt_rename: ".bt_rename",
            bt_delete: ".bt_delete",
            bt_share: ".bt_share",
            notice: "#notice",
            bt_preview: "#bt-preview",
            bt_save: "#bt-save",
            bt_download: "#bt-download",
            bt_add_section: "#bt-add-section",
            bt_delete_section: ".bt_delete_section",
            photo: "#photo",
            photo_preview: "#photo-preview",
            bt_photo: "#bt-photo",
            bt_photo_remove: "#bt-photo-remove"
        },
        init: function() {
            c.DATA = CV_DATA;
            c.SECTIONS = CV_SECTIONS;
            c.ORDER = CV_ORDER;
            c.USER = CV_USER;
            c.MAX_ADDABLES = CV_MAX_ADDABLES;
            c.MAX_SECTIONS = CV_MAX_SECTIONS;
            c.PHOTO_FILES = CV_PHOTO_FILES;
            c.PHOTO_SIZE = CV_PHOTO_SIZE;
            c.initControls();
            c.initRTE();
            c.makeControls();
            c.addableSets();
            c.populate();
            c.renamableSections();
            c.collapsibleSets();
            c.sortableSectionList();
            c.sortableSets();
            c.updateAll();
            c.makeRTEs()
        },
        initHome: function() {
            c.LIST = CV_LIST;
            c.initControls();
            c.controls.bt_create.click(function() {
                c.controls.form_create.find(".cv_lang").val(
                    CV.LANG);
                c.controls.form_create.dialog({
                    modal: true,
                    buttons: [{
                        text: _lang.ok,
                        click: function() {
                            c.updateForm(
                                "create"
                            );
                            c.commitForm()
                        }
                    }, {
                        text: _lang.cancel,
                        click: function() {
                            $(this).dialog(
                                "close"
                            )
                        }
                    }]
                });
                return false
            });
            c.controls.bt_rename.click(function() {
                var a = $(this).data("id");
                c.updateForm("rename", {
                    cv_id: a
                });
                c.controls.form_create.find(".cv_name").val(
                    c.LIST[a].name);
                c.controls.form_create.find(".cv_lang").val(
                    c.LIST[a].lang);
                c.controls.form_create.find(".cv_industry")
                    .val(c.LIST[a].industry);
                c.controls.form_create.dialog({
                    modal: true,
                    buttons: [{
                        text: _lang.save,
                        click: function() {
                            c.commitForm();
                            $(this).dialog(
                                "close"
                            )
                        }
                    }, {
                        text: _lang.cancel,
                        click: function() {
                            $(this).dialog(
                                "close"
                            )
                        }
                    }]
                });
                return false
            });
            c.controls.bt_delete.click(function() {
                var a = $(this).data("id");
                c.updateForm("delete", {
                    cv_id: a
                });
                var b = $("<p>" + _lang.delete_msg +
                    ' <strong><em class="name"></em > < /strong> ?</p > '
                );
                b.find(".name").text(c.LIST[a].name);
                b.dialog({
                    modal: true,
                    buttons: [{
                        text: _lang.yes,
                        click: function() {
                            c.commitForm();
                            $(this).dialog(
                                "close"
                            )
                        }
                    }, {
                        text: _lang.no,
                        click: function() {
                            $(this).dialog(
                                "close"
                            )
                        }
                    }]
                });
                return false
            });
            c.controls.bt_share.click(function() {
                var a = $(this).data("id"),
                    b = c.LIST[a];
                c.controls.share_link.val(b.url).select();
                c.controls.share_options.find(".url").attr(
                    "href", b.url);
                c.controls.share_options.find(
                    '.visibility:radio[value = "' + b.visibility +
                    '"]').prop("checked", true);
                $(".addthis_toolbox").attr("addthis:url", b
                        .url).attr("addthis:title", b.name)
                    .html(
                        ' < a class = "addthis_button_tweet" > < /a><a class="addthis_button_google_plusone" g:plusone:size="medium"></a > < a class = "addthis_button_facebook_like" fb:like:layout = "button_count" > < /a>'
                    );
                addthis.toolbox(".addthis_toolbox");
                c.promptOptions(function(g) {
                    var h = c.controls.share_options
                        .find(
                            ".visibility:radio:checked"
                        ).val();
                    $.post(document.location.href, {
                        action: "options",
                        cv_id: a,
                        style: g,
                        visibility: h
                    }, function() {
                        c.LIST[a].style = g;
                        c.LIST[a].visibility =
                            h
                    })
                }, ["share_options", "choose_style"]);
                $("#style-" + b.style).prop("checked", true);
                return false
            });
            c.controls.share_link.click(function() {
                $(this).select()
            });
            c.controls.share_options.append(
                '<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js#pubid=ra-4f86b88138e9c1b6"><\/script>'
            );
            if ($("table.list tbody tr").length == 1) {
                $("table.list tbody tr .options div").css("opacity",
                    1)
            } else {
                $("table.list tbody tr").hover(function() {
                    $(this).find(".options div").stop().animate({
                        opacity: 1
                    }, 200)
                }, function() {
                    $(this).find(".options div").stop().animate({
                        opacity: 0
                    }, 200)
                })
            }
        },
        initControls: function() {
            for (var a in c.control_names) {
                if (c.control_names.hasOwnProperty(a)) {
                    c.controls[a] = $(c.control_names[a])
                }
            }
            $("#cv").show(function() {
                if (c.USER) {
                    window.setInterval(function() {
                        c.save()
                    }, c.AUTO_SAVE);
                    $(window).keypress(function(b) {
                        if (!(b.which == 115 && b.ctrlKey) &&
                            !(b.which == 19)) {
                            return true
                        }
                        c.save();
                        b.preventDefault();
                        return false
                    })
                }
            })
        },
        makeControls: function() {
            c.controls.bt_preview.click(function() {
                c.promptOptions(function(b) {
                    var a = $(
                        '<div><iframe frameborder="0" border="0" name="preview_frame" width="100%"></iframe></div>'
                    );
                    a.find("iframe").height($(
                            window).height() -
                        200);
                    $(a).dialog({
                        modal: true,
                        width: 950,
                        height: $(window).height() -
                            100,
                        buttons: [{
                            text: _lang
                                .close,
                            click: function() {
                                $
                                    (
                                        this
                                    )
                                    .dialog(
                                        "close"
                                    )
                            }
                        }],
                        close: function() {
                            $(this).dialog(
                                "destroy"
                            ).remove()
                        }
                    });
                    c.attachOrderToForm();
                    c.updateForm("preview", {
                        style: b
                    });
                    c.commitForm("preview_frame")
                }, ["choose_style"]);
                return false
            });
            c.controls.bt_save.click(function() {
                if (!c.USER) {
                    $(_lang.new_user).dialog({
                        modal: true,
                        buttons: [{
                            text: _lang.proceed,
                            click: function() {
                                c.updateForm(
                                    "newsave"
                                );
                                c.commitForm();
                                $(this)
                                    .dialog(
                                        "close"
                                    )
                            }
                        }, {
                            text: _lang.cancel,
                            click: function() {
                                $(this)
                                    .dialog(
                                        "close"
                                    )
                            }
                        }],
                        close: function() {
                            $(this).dialog(
                                "destroy").remove()
                        }
                    });
                    return false
                }
                c.save();
                return false
            });
            c.controls.bt_download.click(function() {
                c.promptOptions(function(a, b, f) {
                    c.download(a, b, f)
                }, ["choose_style", "choose_type",
                    "choose_size"
                ]);
                return false
            });
            c.controls.bt_add_section.click(function() {
                if (c.numSections() >= c.MAX_SECTIONS) {
                    c.noticeDialog(_lang.replace("%s", c.MAX_SECTIONS));
                    return false
                }
                var a = $("<p>").append("<label>" + _lang.section_name +
                    "</label><br />").append($(
                    "<input>").attr({
                    type: "text",
                    maxlength: 75
                }).val(_lang.section_new));
                $(a).dialog({
                    modal: true,
                    buttons: [{
                        text: _lang.ok,
                        click: function() {
                            var b = $.trim(
                                $(
                                    this
                                ).find(
                                    "input"
                                ).val()
                            ).replace(
                                /(<([^>]+)>)/ig,
                                "");
                            if (!b) {
                                $(this)
                                    .dialog(
                                        "close"
                                    );
                                return
                                    false
                            }
                            var f = new Date()
                                .getTime()
                                .toString();
                            c.addSection(
                                f,
                                b);
                            c.updateAll();
                            c.renamableSections();
                            c.showSection(
                                f);
                            $(this).dialog(
                                "close"
                            )
                        }
                    }, {
                        text: _lang.cancel,
                        click: function() {
                            $(this).dialog(
                                "close"
                            )
                        }
                    }]
                });
                return false
            });
            c.controls.form.on("click", ".bt_delete_section",
                function() {
                    var a = $(this).data("id").toString();
                    $("<p>" + _lang.section_delete + "</p>").dialog({
                        modal: true,
                        buttons: [{
                            text: _lang.yes,
                            click: function() {
                                var b = $.inArray(
                                    a,
                                    c.ORDER
                                ) - 1;
                                c.removeSection(
                                    a);
                                c.updateAll();
                                c.showSectionFromIndex(
                                    b);
                                $(this).dialog(
                                    "close"
                                )
                            }
                        }, {
                            text: _lang.no,
                            click: function() {
                                $(this).dialog(
                                    "close"
                                )
                            }
                        }]
                    });
                    return false
                });
            c.controls.form.on("click", ".rename", function() {
                var f = $(this).data("id").toString(),
                    a = c.SECTIONS[f].name;
                var b = $("<p>").append($("<input>").attr({
                    type: "text",
                    maxlength: 50
                }).val(a));
                $(b).dialog({
                    modal: true,
                    buttons: [{
                        text: _lang.title_change,
                        click: function() {
                            var e = $.trim(
                                $(
                                    this
                                ).find(
                                    "input"
                                ).val()
                            );
                            if (e) {
                                c.renameSection(
                                    f,
                                    e
                                )
                            }
                            $(this).dialog(
                                "close"
                            )
                        }
                    }, {
                        text: _lang.cancel,
                        click: function() {
                            $(this).dialog(
                                "close"
                            )
                        }
                    }]
                });
                return false
            });
            c.controls.form.on("click", ".bt_delete_set", function() {
                var b = $(this).data("id");
                var a = $(this).parent();
                a.find("textarea").each(function() {
                    delete c.rte[b][$(this).attr(
                        "id")]
                });
                a.slideUp("fast", function() {
                    $(this).remove()
                });
                return false
            });
            c.controls.form.on("click", ".collapse", function() {
                var b = $(this).data("id").toString(),
                    a = c.getSectionDOM(b);
                if (!$(this).hasClass("expand")) {
                    a.find(".set").height(50);
                    a.addClass("collapsed");
                    $(this).addClass("expand")
                } else {
                    a.find(".set").css("height", "auto");
                    a.removeClass("collapsed");
                    $(this).removeClass("expand");
                    c.refreshRTEs(b)
                }
                return false
            });
            c.controls.sections.on("click", "a", function() {
                $(this).blur();
                c.showSection($(this).data("id").toString());
                return false
            });
            c.new_section = $("#section-new").clone();
            $("#section-new").remove();
            if (document.location.href.match(/updated/)) {
                c.notice("Saved")
            }
            c.controls.bt_photo.click(function() {
                c.uploadPhoto()
            });
            c.controls.form.find(".field_photo").before($(
                "#photo-preview"));
            c.controls.bt_photo_remove.click(function() {
                c.removePhoto()
            });
            c.controls.form.find(".field_photo").before($(
                "#photo-preview"));
            if (CV_ID) {
                $(
                    "#photo-preview, .field_photo, .field_bt-photo, .field_bt-photo-remove"
                ).show()
            } else {
                $("#photo-preview").after(_lang.photo_login)
            }
        },
        noticeDialog: function(a) {
            $("<p>" + a + "</p>").dialog({
                modal: true,
                buttons: [{
                    text: _lang.ok,
                    click: function() {
                        $(this).dialog("close")
                    }
                }]
            })
        },
        promptOptions: function(b, h) {
            var g = c.controls.download_prompt;
            g.find(".optionset").hide();
            for (var a in h) {
                if (h.hasOwnProperty(a)) {
                    c.controls[h[a]].show()
                }
            }
            if ($.cookie("type")) {
                g.find('select[name="type"]').val($.cookie("type"))
            }
            if ($.cookie("style")) {
                g.find("#style-" + $.cookie("style")).attr(
                    "checked", "true")
            }
            if ($.cookie("page_size")) {
                g.find('select[name="page_size"]').val($.cookie(
                    "page_size"))
            }
            $(g).dialog({
                modal: true,
                buttons: [{
                    text: _lang.ok,
                    click: function() {
                        var e = $(this).find(
                                'select[name="type"]'
                            ).val(),
                            f = $(this).find(
                                'input[name="style"]:checked'
                            ).val(),
                            j = $(this).find(
                                'select[name="page_size"]'
                            ).val();
                        $.cookie("type", e, 365);
                        $.cookie("style", f,
                            365);
                        $.cookie("page_size", j,
                            365);
                        b(f, e, j);
                        $(this).dialog("close")
                    }
                }, {
                    text: _lang.cancel,
                    click: function() {
                        $(this).dialog("close")
                    }
                }]
            });
            return false
        },
        updateAll: function() {
            c.updateSectionList()
        },
        numSections: function() {
            return c.ORDER.length
        },
        addSection: function(b, a) {
            if (c.numSections() >= c.MAX_SECTIONS) {
                return false
            }
            c.SECTIONS[b] = {
                name: a,
                addable: false,
                renamable: true
            };
            c.ORDER.push(b);
            c.addSectionDOM(b, a);
            return true
        },
        addSectionDOM: function(f, a) {
            var b = c.new_section.clone().removeClass("invisible");
            b.attr("id", "section-" + f);
            b.find("*[name*='sections[new]']").each(function() {
                var e = $(this).attr("name");
                $(this).attr("name", e.replace(
                    "sections[new]", "sections[" +
                    f + "]"))
            });
            b.find(".section_name").val(a);
            b.find(".title span:first").text(a);
            b.find(".set").append($(
                '<a href="#" class="button bt_delete_section" data-id="' +
                f +
                '"><span class="ui-icon ui-icon-closethick"></span>' +
                _lang["delete"] + "</a>"));
            c.controls.form.append(b);
            c.makeRTE(f, b.find(".textarea"))
        },
        getSectionDOM: function(a) {
            return $("#section-" + a)
        },
        showSection: function(a) {
            if (c.current_section == a) {
                return
            }
            var b = 0;
            if (!a || !c.SECTIONS[a]) {
                var a = c.ORDER[b]
            } else {
                b = $.inArray(a, c.ORDER)
            }
            c.previous_section = c.current_section;
            c.current_section = a;
            if (c.previous_section) {
                c.updateRTEs(c.previous_section);
                c.getSectionDOM(c.previous_section).hide()
            }
            c.getSectionDOM(a).show();
            c.controls.sections.find(".item").removeClass(
                "selected");
            c.controls.sections.find(".section-" + a).addClass(
                "selected");
            document.location.href = "#" + b;
            c.refreshRTEs(c.previous_section);
            c.refreshRTEs(a)
        },
        showSectionFromIndex: function(a) {
            if (!c.ORDER[a]) {
                a = 0
            }
            c.showSection(c.ORDER[a])
        },
        renameSection: function(g, a) {
            a = a.replace(/[<>]/ig, " ");
            c.SECTIONS[g].name = a;
            c.controls.sections.find(".section-" + g + " a").text(a);
            var b = c.getSectionDOM(g);
            b.find(".title .name").text(a);
            var h = b.find(".section_name");
            if (h.length == 0) {
                h = $("<input>").prop("type", "hidden").attr("name",
                    "sections[" + g + "][section_name]").addClass(
                    "section_name");
                b.append(h)
            }
            h.val(a)
        },
        removeSection: function(a) {
            delete c.SECTIONS[a];
            delete c.rte[a];
            c.ORDER = $.grep(c.ORDER, function(b) {
                return b != a
            });
            c.getSectionDOM(a).remove()
        },
        renamableSections: function() {
            for (var f in c.SECTIONS) {
                if (c.SECTIONS.hasOwnProperty(f) && c.SECTIONS[f].renamable) {
                    var a = c.getSectionDOM(f),
                        b = a.find(".title");
                    b.before(a.find(".section_name"));
                    if (!b.find(".rename").get(0)) {
                        $(b).append($(
                            '<a href="#" class="ui-icon ui-icon-pencil rename" title="Rename section">' +
                            _lang.section_rename + "</a>").data(
                            "id", f))
                    }
                }
            }
        },
        sortableSectionList: function() {
            c.controls.sections.sortable({
                axis: "y",
                handle: "a",
                items: ".item",
                update: function(b, a) {
                    var i = $(a.item).find("a").data(
                        "id").toString();
                    var j = a.item.index();
                    var h = $.inArray(i, c.ORDER);
                    c.ORDER = [];
                    $(this).find("a").each(function() {
                        c.ORDER.push($(this).data(
                            "id").toString())
                    });
                    document.location.href = "#" + $.inArray(
                        c.current_section, c.ORDER)
                }
            })
        },
        updateSectionList: function() {
            c.controls.sections.text("");
            var b = [];
            for (var f in c.SECTIONS) {
                if (c.SECTIONS.hasOwnProperty(f)) {
                    var a = c.SECTIONS[f].name;
                    b.push($("<li>").addClass("item section-" + f).append(
                        $("<a>").attr("href", "#").data(
                            "id", f).text(a)).get(0))
                }
            }
            c.controls.sections.append(b)
        },
        collapsibleSets: function() {
            for (var b in c.SECTIONS) {
                if (c.SECTIONS.hasOwnProperty(b) && c.SECTIONS[b].addable) {
                    var a = c.getSectionDOM(b);
                    a.find(".title").append($(
                        '<a href="#" class="ui-icon ui-icon-carat-2-n-s collapse" title="' +
                        _lang.expand_collapse_info + '">' +
                        _lang.expand_collapse + "</a>").data(
                        "id", b))
                }
            }
        },
        addableSets: function() {
            for (var h in c.SECTIONS) {
                if (c.SECTIONS.hasOwnProperty(h) && c.SECTIONS[h].addable) {
                    var g = c.getSectionDOM(h);
                    var a = g.find(".set:first");
                    var b = a.clone();
                    b.find("input[type='text'], textarea, select").val();
                    b.append($(
                        '<a href="#" class="button bt_delete_set"><span class="ui-icon ui-icon-closethick"></span>' +
                        _lang["delete"] + "</a>"));
                    c.addable_sets[h] = b;
                    a.remove();
                    g.find(".sets").after($(
                        '<a href="#" class="button bt_cloneset"><span class="ui-icon ui-icon-plusthick"></span> ' +
                        _lang.add_entry + "</a>").data("id",
                        h).click(function() {
                        var e = $(this).data("id").toString();
                        if (c.numSets(e) >= c.MAX_ADDABLES) {
                            c.noticeDialog(_lang.max_entries
                                .replace("%s", c.MAX_ADDABLES)
                            );
                            return false
                        }
                        c.cloneSet(e);
                        return false
                    }))
                }
            }
        },
        sortableSets: function() {
            c.controls.form.find(".section.addable").sortable({
                axis: "y",
                handle: "",
                items: ".set",
                stop: function(b, a) {
                    var f = $(this).attr("id").replace(
                        "section-", "");
                    c.refreshRTEs(f)
                }
            })
        },
        cloneSet: function(b) {
            if (c.numSets(b) >= c.MAX_ADDABLES) {
                return false
            }
            var a = c.addable_sets[b].clone();
            a.find("textarea").each(function() {
                $(this).attr("id", "t" + c.flags.counter);
                c.flags.counter++
            });
            a.find(".bt_delete_set").data("id", b);
            c.getSectionDOM(b).find(".sets").append(a);
            c.makeRTE(b, a.find(".textarea:first"));
            return true
        },
        numSets: function(a) {
            return c.getSectionDOM(a).find(".set").length
        },
        initRTE: function() {
            $.cleditor.buttons.pagebreak = {
                name: "pagebreak",
                stripIndex: 27,
                title: "Insert page-break",
                command: "inserthtml",
                buttonClick: c.insertRTEpagebreak
            }
        },
        insertRTEpagebreak: function(a, b) {
            var e = b.editor;
            e.execCommand(b.command, "[page-break]", null, b.button);
            e.focus();
            return false
        },
        updateRTEs: function(a) {
            if (c.rte[a]) {
                $.each(c.rte[a], function(b) {
                    this[0].updateTextArea()
                })
            }
        },
        updateRTEFrames: function(a) {
            if (c.rte[a]) {
                $.each(c.rte[a], function(b) {
                    this[0].updateFrame()
                })
            }
        },
        refreshRTEs: function(a) {
            if (c.rte[a]) {
                $.each(c.rte[a], function(b) {
                    this[0].refresh()
                })
            }
        },
        makeRTEs: function() {
            for (var a in c.SECTIONS) {
                if (c.SECTIONS.hasOwnProperty(a)) {
                    c.getSectionDOM(a).find(".textarea").each(
                        function() {
                            c.makeRTE(a, $(this))
                        })
                }
            }
        },
        makeRTE: function(a, b) {
            if (!c.rte[a]) {
                c.rte[a] = {}
            }
            if (!b.data("rte")) {
                c.rte[a][b.attr("id")] = b.cleditor({
                    controls: "bold italic underline | bullets numbering | indent outdent | pagebreak | undo redo | removeformat",
                    width: 658,
                    bodyStyle: "font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial; font-size: 13px;"
                });
                b.data("rte", true)
            }
        },
        populate: function() {
            if (!c.DATA) {
                return
            }
            var o = {};
            for (var a in c.DATA) {
                if (!c.DATA.hasOwnProperty(a)) {
                    continue
                }
                var j = c.DATA[a],
                    s = j.section_name;
                if (!isNaN(a)) {
                    if (!s) {
                        s = "New section"
                    }
                    c.addSectionDOM(a, s)
                } else {
                    if (!s) {
                        s = c.SECTIONS[a] ? c.SECTIONS[a].section_name :
                            ""
                    }
                }
                var t = "sections[" + a + "]",
                    p = c.getSectionDOM(a);
                for (var n in j.data) {
                    if (!j.data.hasOwnProperty(n)) {
                        continue
                    }
                    var b = j.data[n];
                    if (b instanceof Array) {
                        if (o[a] == undefined) {
                            o[a] = true;
                            if (c.SECTIONS[a].addable) {
                                for (var q = 0; q < b.length; q++) {
                                    c.cloneSet(a)
                                }
                            }
                        }
                        for (var q in b) {
                            if (b.hasOwnProperty(q)) {
                                var r = b[q];
                                p.find(".set:eq(" + q + ") [name='" +
                                    t + "[data][" + n + "][]']"
                                ).val(r)
                            }
                        }
                    } else {
                        p.find("[name='" + t + "[data][" + n +
                            "]']").val(b)
                    }
                }
                p.find(".section_name").val(s);
                p.find(".title .name").text(s);
                c.updateRTEFrames(a)
            }
        },
        notice: function(a, b) {
            if (c.flags.notice_timer) {
                window.clearTimeout(c.flags.notice_timer)
            }
            c.controls.notice.text(a).fadeIn();
            if (!b) {
                c.flags.notice_timer = window.setTimeout(function() {
                    c.controls.notice.fadeOut()
                }, 4000)
            }
        },
        save: function() {
            if (c.flags.processing) {
                return false
            }
            c.flags.processing = true;
            c.attachOrderToForm();
            c.controls.form.attr("action", document.location.href);
            c.updateForm("save");
            c.notice(_lang.saving, true);
            $.ajax({
                type: "POST",
                url: document.location.href,
                data: c.controls.form.serialize().replace(
                    /%5B%5D/g, "[]"),
                dataType: "json",
                timeout: 7000,
                success: function(a) {
                    c.flags.processing = false;
                    if (a.success) {
                        c.notice(_lang.saved)
                    } else {
                        c.notice("Error")
                    }
                    return false
                },
                error: function(a, f, b) {
                    c.flags.processing = false;
                    c.notice("Error")
                }
            })
        },
        download: function(a, b, f) {
            if (c.flags.processing) {
                return false
            }
            c.flags.processing = true;
            c.attachOrderToForm();
            c.updateForm("download", {
                style: a,
                type: b,
                page_size: f
            });
            c.commitFrame();
            c.notice(_lang.download, true);
            c.flags.download_timer = window.setInterval(function() {
                if ($.cookie("download")) {
                    window.clearInterval(c.flags.download_timer);
                    $.cookie("download", null);
                    c.flags.processing = false;
                    c.notice(_lang.ready)
                }
            }, 500)
        },
        uploadPhoto: function() {
            var b = c.controls.photo.val(),
                a = b.split(".");
            a = a[a.length - 1].toLowerCase();
            if ($.inArray(a, c.PHOTO_FILES) == -1) {
                c.noticeDialog(_lang.photo_error.replace("%s", c.PHOTO_FILES
                    .join(", ")).replace("%s", c.PHOTO_SIZE));
                return
            }
            c.notice(_lang.saving, true);
            c.updateForm("photo");
            c.commitFrame(function(f) {
                if (!f || f.success != "1") {
                    c.notice(_lang.error);
                    c.noticeDialog(_lang.photo_error.replace(
                        "%s", c.PHOTO_FILES.join(
                            ", ")).replace("%s", c.PHOTO_SIZE));
                    return false
                } else {
                    c.notice(_lang.saved);
                    c.controls.photo_preview.children().remove();
                    c.controls.photo_preview.append($(
                        "<img>").attr("src", f.url +
                        "?r=" + new Date().getTime()
                    ))
                }
            })
        },
        removePhoto: function() {
            c.controls.photo_preview.children().remove();
            $.post(document.location.href, {
                action: "remove_photo",
                cv_id: CV_ID
            })
        },
        attachOrderToForm: function() {
            c.controls.form.find(".order").remove();
            var b = [];
            for (var a = 0; a < c.ORDER.length; a++) {
                b.push($("<input>").attr({
                    type: "hidden",
                    name: "order[]",
                    "class": "order"
                }).val(c.ORDER[a]).get(0))
            }
            c.controls.form.append(b)
        },
        updateForm: function(f, a) {
            c.controls.form.find(".action").val(f);
            if (a) {
                for (var b in a) {
                    if (a.hasOwnProperty(b)) {
                        c.controls.form.find("." + b).val(a[b])
                    }
                }
            }
        },
        commitFrame: function(a) {
            c.controls.form.attr("target", "postframe");
            (function(b) {
                c.controls.postframe.one("load", function() {
                    try {
                        var h = c.controls.postframe.contents()
                            .find("body").text();
                        h = JSON.parse(h)
                    } catch (e) {
                        h = null
                    }
                    b(h)
                })
            })(a);
            c.controls.form.submit()
        },
        commitForm: function(a) {
            if (a) {
                c.controls.form.attr("target", a)
            } else {
                c.controls.form.removeAttr("target")
            }
            c.controls.form.submit()
        }
    }
};
var Slideshow = {
    dots: $('<ul class="noul dots">'),
    active: false,
    current: 0,
    current_slide: null,
    slides: null,
    show: function(c) {
        if (Slideshow.active) {
            return false
        }
        if (Slideshow.current == c) {
            return false
        }
        var d = this.slides[c];
        $(Slideshow.dots).find("a").removeClass("sel");
        $(Slideshow.dots).find("a:eq(" + c + ")").addClass("sel");
        $(Slideshow.current_slide).animate({
            opacity: 0
        }, 500, function() {
            $(this).hide()
        });
        $(d).show();
        $(d).animate({
            opacity: 1
        }, 500, function() {
            Slideshow.active = false
        });
        Slideshow.current_slide = d;
        Slideshow.active = true;
        Slideshow.current = c;
        this.timer()
    },
    timer: function() {
        if (this.stimer) {
            window.clearTimeout(this.stimer)
        }
        this.stimer = window.setInterval(function() {
            var d = 0,
                c = Slideshow.dots.find("a");
            if (Slideshow.current >= c.length - 1) {
                d = 0
            } else {
                d = Slideshow.current + 1
            }
            Slideshow.show(d)
        }, 7000)
    },
    init: function(c, d) {
        $(c).append($(this.dots));
        this.slides = $(c + " " + d);
        $(c + " " + d).each(function() {
            var b = $(this);
            var a = $('<a href="#">&#9679;</a>');
            $(a).click(function() {
                var f = $(".dots li").index($(this).parent());
                Slideshow.show(f);
                return false
            });
            $(a).each(function() {
                $(Slideshow.dots).append($("<li>").append(
                    this))
            })
        });
        $(c + " " + d + ":gt(0)").css("opacity", 0);
        Slideshow.current_slide = $(c + " " + d + ":first").show();
        $(this.dots).find("a:first").addClass("sel");
        this.timer()
    }
};
$.isset = function(b) {
    return (typeof(window[b]) !== "undefined") ? true : false
};
$(document).ready(function() {
    if ($("#download-form").get(0)) {
        $("#download-form").submit()
    }
    if ($.isset("CV_INIT")) {
        if ($.isset("CV_HOME")) {
            CV.initHome()
        } else {
            CV.init();
            var b = document.location.hash.replace("#", "");
            CV.showSectionFromIndex(b);
            $(window).bind("hashchange", function() {
                var a = document.location.hash.replace("#", "");
                if (!isNaN(a)) {
                    CV.showSectionFromIndex(document.location.hash
                        .replace("#", ""))
                }
            });
            jobFeed()
        }
    }
    CV.LANG = $.cookie("language") && $.cookie("language").length < 3 ?
        $.cookie("language") : "en";
    $("#language").val(CV.LANG).addClass(CV.LANG);
    $("#language").change(function() {
        var e = $(this).val();
        $(this).attr("class", "").addClass(e);
        $.cookie("language", e, {
            expires: 365,
            path: "/"
        });
        var a = document.location.href,
            f = a.replace(
                /(http(s?):\/\/(.+?)\/)([a-z]{2})\/(.*)$/, "$1" +
                e + "/$5");
        if (a == f) {
            document.location.href = CV_ROOT + "?lang=" + e
        } else {
            document.location.href = f
        }
    });
    $("td .lang").click(function() {
        $(this).parent().parent().find(".bt_rename").click();
        return false
    });
    $(".oauth_login_button").click(function() {
        var a = $('<form method="post" action="">').append($(
            '<input type="hidden" name="action" value="oauth">'
        )).append($('<input type="hidden" name="provider">')
            .val($(this).data("provider")));
        $("body").append(a);
        a.submit();
        return false
    })
});

function jobFeed() {
    var f = null;
    $("input[name='sections[work][data][job_title][]']").each(function() {
        var a = $(this).val();
        a = $.trim(a.replace(/[^a-z0-9\s]/ig, " ").replace(/\s+/ig,
            " "));
        if (a.length >= 5) {
            f = a;
            return
        }
    });

    function e(a) {
        return a.replace(/\w\S*/g, function(b) {
            return b.charAt(0).toUpperCase() + b.substr(1).toLowerCase()
        })
    }

    function d(a, b) {
        var c = a.substr(0, b);
        return c.substr(0, Math.min(c.length, c.lastIndexOf(" ")))
    }
    if (!f) {
        window.setTimeout(jobFeed, 60000)
    } else {
        $.post(CV_ROOT + "Jobs", {
            action: "feed",
            keywords: f
        }, function(c) {
            if (c && c.hasOwnProperty("location")) {
                $("#jobs-toast").append($("<a>").attr("href",
                    CV_ROOT + "Jobs/?location=" + c.location[
                        0] + ", " + c.location[1] +
                    "&keywords=" + c.keywords).attr(
                    "target", "_blank").text("Jobs in " + c
                    .location[0]).addClass("caption"));
                if (c.jobs.length > 0) {
                    for (var a = 0; a < c.jobs.length; a++) {
                        var i = c.jobs[a],
                            b = e(i.name);
                        b = b.length > 35 ? d(b, 35) : b;
                        var j = $("<a>").attr("href", i.url).attr(
                            "target", "_blank").text(b + "@" +
                            e(i.hiring_company.name));
                        $("#jobs-toast").append(j)
                    }
                }
                $("#jobs-toast").append($("<a>").attr("href",
                    CV_ROOT + "Jobs/?location=" + c.location[
                        0] + ", " + c.location[1] +
                    "&keywords=" + c.keywords).attr(
                    "target", "_blank").html(
                    "View more &rarr;").addClass("more")).css(
                    "visibility", "visible")
            }
        })
    }
}
if (top.location != document.location) {
    top.location.replace(document.location);
    alert(
        "For security reasons, framing is not allowed; click OK to remove the frames."
    )
};
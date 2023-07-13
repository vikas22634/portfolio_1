!(function (e) {
  var t = {};
  function n(r) {
    if (t[r]) return t[r].exports;
    var i = (t[r] = { i: r, l: !1, exports: {} });
    return e[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
  }
  (n.m = e),
    (n.c = t),
    (n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r });
    }),
    (n.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i)
          );
      return r;
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return n.d(t, "a", t), t;
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (n.p = ""),
    n((n.s = 7));
})([
  function (e, t, n) {
    var r;
    /*!
     * jQuery JavaScript Library v3.5.1
     * https://jquery.com/
     *
     * Includes Sizzle.js
     * https://sizzlejs.com/
     *
     * Copyright JS Foundation and other contributors
     * Released under the MIT license
     * https://jquery.org/license
     *
     * Date: 2020-05-04T22:49Z
     */ !(function (t, n) {
      "use strict";
      "object" == typeof e.exports
        ? (e.exports = t.document
            ? n(t, !0)
            : function (e) {
                if (!e.document)
                  throw new Error("jQuery requires a window with a document");
                return n(e);
              })
        : n(t);
    })("undefined" != typeof window ? window : this, function (n, i) {
      "use strict";
      var o = [],
        s = Object.getPrototypeOf,
        a = o.slice,
        l = o.flat
          ? function (e) {
              return o.flat.call(e);
            }
          : function (e) {
              return o.concat.apply([], e);
            },
        u = o.push,
        c = o.indexOf,
        f = {},
        p = f.toString,
        d = f.hasOwnProperty,
        h = d.toString,
        g = h.call(Object),
        v = {},
        m = function (e) {
          return "function" == typeof e && "number" != typeof e.nodeType;
        },
        y = function (e) {
          return null != e && e === e.window;
        },
        x = n.document,
        b = { type: !0, src: !0, nonce: !0, noModule: !0 };
      function w(e, t, n) {
        var r,
          i,
          o = (n = n || x).createElement("script");
        if (((o.text = e), t))
          for (r in b)
            (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
              o.setAttribute(r, i);
        n.head.appendChild(o).parentNode.removeChild(o);
      }
      function T(e) {
        return null == e
          ? e + ""
          : "object" == typeof e || "function" == typeof e
          ? f[p.call(e)] || "object"
          : typeof e;
      }
      var C = function (e, t) {
        return new C.fn.init(e, t);
      };
      function S(e) {
        var t = !!e && "length" in e && e.length,
          n = T(e);
        return (
          !m(e) &&
          !y(e) &&
          ("array" === n ||
            0 === t ||
            ("number" == typeof t && t > 0 && t - 1 in e))
        );
      }
      (C.fn = C.prototype =
        {
          jquery: "3.5.1",
          constructor: C,
          length: 0,
          toArray: function () {
            return a.call(this);
          },
          get: function (e) {
            return null == e
              ? a.call(this)
              : e < 0
              ? this[e + this.length]
              : this[e];
          },
          pushStack: function (e) {
            var t = C.merge(this.constructor(), e);
            return (t.prevObject = this), t;
          },
          each: function (e) {
            return C.each(this, e);
          },
          map: function (e) {
            return this.pushStack(
              C.map(this, function (t, n) {
                return e.call(t, n, t);
              })
            );
          },
          slice: function () {
            return this.pushStack(a.apply(this, arguments));
          },
          first: function () {
            return this.eq(0);
          },
          last: function () {
            return this.eq(-1);
          },
          even: function () {
            return this.pushStack(
              C.grep(this, function (e, t) {
                return (t + 1) % 2;
              })
            );
          },
          odd: function () {
            return this.pushStack(
              C.grep(this, function (e, t) {
                return t % 2;
              })
            );
          },
          eq: function (e) {
            var t = this.length,
              n = +e + (e < 0 ? t : 0);
            return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
          },
          end: function () {
            return this.prevObject || this.constructor();
          },
          push: u,
          sort: o.sort,
          splice: o.splice,
        }),
        (C.extend = C.fn.extend =
          function () {
            var e,
              t,
              n,
              r,
              i,
              o,
              s = arguments[0] || {},
              a = 1,
              l = arguments.length,
              u = !1;
            for (
              "boolean" == typeof s && ((u = s), (s = arguments[a] || {}), a++),
                "object" == typeof s || m(s) || (s = {}),
                a === l && ((s = this), a--);
              a < l;
              a++
            )
              if (null != (e = arguments[a]))
                for (t in e)
                  (r = e[t]),
                    "__proto__" !== t &&
                      s !== r &&
                      (u && r && (C.isPlainObject(r) || (i = Array.isArray(r)))
                        ? ((n = s[t]),
                          (o =
                            i && !Array.isArray(n)
                              ? []
                              : i || C.isPlainObject(n)
                              ? n
                              : {}),
                          (i = !1),
                          (s[t] = C.extend(u, o, r)))
                        : void 0 !== r && (s[t] = r));
            return s;
          }),
        C.extend({
          expando: "jQuery" + ("3.5.1" + Math.random()).replace(/\D/g, ""),
          isReady: !0,
          error: function (e) {
            throw new Error(e);
          },
          noop: function () {},
          isPlainObject: function (e) {
            var t, n;
            return (
              !(!e || "[object Object]" !== p.call(e)) &&
              (!(t = s(e)) ||
                ("function" ==
                  typeof (n = d.call(t, "constructor") && t.constructor) &&
                  h.call(n) === g))
            );
          },
          isEmptyObject: function (e) {
            var t;
            for (t in e) return !1;
            return !0;
          },
          globalEval: function (e, t, n) {
            w(e, { nonce: t && t.nonce }, n);
          },
          each: function (e, t) {
            var n,
              r = 0;
            if (S(e))
              for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
            else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
            return e;
          },
          makeArray: function (e, t) {
            var n = t || [];
            return (
              null != e &&
                (S(Object(e))
                  ? C.merge(n, "string" == typeof e ? [e] : e)
                  : u.call(n, e)),
              n
            );
          },
          inArray: function (e, t, n) {
            return null == t ? -1 : c.call(t, e, n);
          },
          merge: function (e, t) {
            for (var n = +t.length, r = 0, i = e.length; r < n; r++)
              e[i++] = t[r];
            return (e.length = i), e;
          },
          grep: function (e, t, n) {
            for (var r = [], i = 0, o = e.length, s = !n; i < o; i++)
              !t(e[i], i) !== s && r.push(e[i]);
            return r;
          },
          map: function (e, t, n) {
            var r,
              i,
              o = 0,
              s = [];
            if (S(e))
              for (r = e.length; o < r; o++)
                null != (i = t(e[o], o, n)) && s.push(i);
            else for (o in e) null != (i = t(e[o], o, n)) && s.push(i);
            return l(s);
          },
          guid: 1,
          support: v,
        }),
        "function" == typeof Symbol &&
          (C.fn[Symbol.iterator] = o[Symbol.iterator]),
        C.each(
          "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
            " "
          ),
          function (e, t) {
            f["[object " + t + "]"] = t.toLowerCase();
          }
        );
      var E =
        /*!
         * Sizzle CSS Selector Engine v2.3.5
         * https://sizzlejs.com/
         *
         * Copyright JS Foundation and other contributors
         * Released under the MIT license
         * https://js.foundation/
         *
         * Date: 2020-03-14
         */
        (function (e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            a,
            l,
            u,
            c,
            f,
            p,
            d,
            h,
            g,
            v,
            m,
            y,
            x,
            b = "sizzle" + 1 * new Date(),
            w = e.document,
            T = 0,
            C = 0,
            S = le(),
            E = le(),
            k = le(),
            j = le(),
            A = function (e, t) {
              return e === t && (f = !0), 0;
            },
            N = {}.hasOwnProperty,
            D = [],
            q = D.pop,
            L = D.push,
            H = D.push,
            O = D.slice,
            P = function (e, t) {
              for (var n = 0, r = e.length; n < r; n++)
                if (e[n] === t) return n;
              return -1;
            },
            R =
              "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            W =
              "(?:\\\\[\\da-fA-F]{1,6}" +
              M +
              "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
            I =
              "\\[" +
              M +
              "*(" +
              W +
              ")(?:" +
              M +
              "*([*^$|!~]?=)" +
              M +
              "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
              W +
              "))|)" +
              M +
              "*\\]",
            $ =
              ":(" +
              W +
              ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
              I +
              ")*)|.*)\\)|)",
            F = new RegExp(M + "+", "g"),
            _ = new RegExp(
              "^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$",
              "g"
            ),
            B = new RegExp("^" + M + "*," + M + "*"),
            X = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            z = new RegExp(M + "|>"),
            U = new RegExp($),
            Y = new RegExp("^" + W + "$"),
            V = {
              ID: new RegExp("^#(" + W + ")"),
              CLASS: new RegExp("^\\.(" + W + ")"),
              TAG: new RegExp("^(" + W + "|[*])"),
              ATTR: new RegExp("^" + I),
              PSEUDO: new RegExp("^" + $),
              CHILD: new RegExp(
                "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                  M +
                  "*(even|odd|(([+-]|)(\\d*)n|)" +
                  M +
                  "*(?:([+-]|)" +
                  M +
                  "*(\\d+)|))" +
                  M +
                  "*\\)|)",
                "i"
              ),
              bool: new RegExp("^(?:" + R + ")$", "i"),
              needsContext: new RegExp(
                "^" +
                  M +
                  "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                  M +
                  "*((?:-\\d)?\\d*)" +
                  M +
                  "*\\)|)(?=[^-]|$)",
                "i"
              ),
            },
            G = /HTML$/i,
            Q = /^(?:input|select|textarea|button)$/i,
            J = /^h\d$/i,
            K = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp(
              "\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])",
              "g"
            ),
            ne = function (e, t) {
              var n = "0x" + e.slice(1) - 65536;
              return (
                t ||
                (n < 0
                  ? String.fromCharCode(n + 65536)
                  : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
              );
            },
            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function (e, t) {
              return t
                ? "\0" === e
                  ? "�"
                  : e.slice(0, -1) +
                    "\\" +
                    e.charCodeAt(e.length - 1).toString(16) +
                    " "
                : "\\" + e;
            },
            oe = function () {
              p();
            },
            se = be(
              function (e) {
                return (
                  !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
                );
              },
              { dir: "parentNode", next: "legend" }
            );
          try {
            H.apply((D = O.call(w.childNodes)), w.childNodes),
              D[w.childNodes.length].nodeType;
          } catch (e) {
            H = {
              apply: D.length
                ? function (e, t) {
                    L.apply(e, O.call(t));
                  }
                : function (e, t) {
                    for (var n = e.length, r = 0; (e[n++] = t[r++]); );
                    e.length = n - 1;
                  },
            };
          }
          function ae(e, t, r, i) {
            var o,
              a,
              u,
              c,
              f,
              h,
              m,
              y = t && t.ownerDocument,
              w = t ? t.nodeType : 9;
            if (
              ((r = r || []),
              "string" != typeof e || !e || (1 !== w && 9 !== w && 11 !== w))
            )
              return r;
            if (!i && (p(t), (t = t || d), g)) {
              if (11 !== w && (f = Z.exec(e)))
                if ((o = f[1])) {
                  if (9 === w) {
                    if (!(u = t.getElementById(o))) return r;
                    if (u.id === o) return r.push(u), r;
                  } else if (
                    y &&
                    (u = y.getElementById(o)) &&
                    x(t, u) &&
                    u.id === o
                  )
                    return r.push(u), r;
                } else {
                  if (f[2]) return H.apply(r, t.getElementsByTagName(e)), r;
                  if (
                    (o = f[3]) &&
                    n.getElementsByClassName &&
                    t.getElementsByClassName
                  )
                    return H.apply(r, t.getElementsByClassName(o)), r;
                }
              if (
                n.qsa &&
                !j[e + " "] &&
                (!v || !v.test(e)) &&
                (1 !== w || "object" !== t.nodeName.toLowerCase())
              ) {
                if (((m = e), (y = t), 1 === w && (z.test(e) || X.test(e)))) {
                  for (
                    ((y = (ee.test(e) && me(t.parentNode)) || t) === t &&
                      n.scope) ||
                      ((c = t.getAttribute("id"))
                        ? (c = c.replace(re, ie))
                        : t.setAttribute("id", (c = b))),
                      a = (h = s(e)).length;
                    a--;

                  )
                    h[a] = (c ? "#" + c : ":scope") + " " + xe(h[a]);
                  m = h.join(",");
                }
                try {
                  return H.apply(r, y.querySelectorAll(m)), r;
                } catch (t) {
                  j(e, !0);
                } finally {
                  c === b && t.removeAttribute("id");
                }
              }
            }
            return l(e.replace(_, "$1"), t, r, i);
          }
          function le() {
            var e = [];
            return function t(n, i) {
              return (
                e.push(n + " ") > r.cacheLength && delete t[e.shift()],
                (t[n + " "] = i)
              );
            };
          }
          function ue(e) {
            return (e[b] = !0), e;
          }
          function ce(e) {
            var t = d.createElement("fieldset");
            try {
              return !!e(t);
            } catch (e) {
              return !1;
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null);
            }
          }
          function fe(e, t) {
            for (var n = e.split("|"), i = n.length; i--; )
              r.attrHandle[n[i]] = t;
          }
          function pe(e, t) {
            var n = t && e,
              r =
                n &&
                1 === e.nodeType &&
                1 === t.nodeType &&
                e.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (n) for (; (n = n.nextSibling); ) if (n === t) return -1;
            return e ? 1 : -1;
          }
          function de(e) {
            return function (t) {
              return "input" === t.nodeName.toLowerCase() && t.type === e;
            };
          }
          function he(e) {
            return function (t) {
              var n = t.nodeName.toLowerCase();
              return ("input" === n || "button" === n) && t.type === e;
            };
          }
          function ge(e) {
            return function (t) {
              return "form" in t
                ? t.parentNode && !1 === t.disabled
                  ? "label" in t
                    ? "label" in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && se(t) === e)
                  : t.disabled === e
                : "label" in t && t.disabled === e;
            };
          }
          function ve(e) {
            return ue(function (t) {
              return (
                (t = +t),
                ue(function (n, r) {
                  for (var i, o = e([], n.length, t), s = o.length; s--; )
                    n[(i = o[s])] && (n[i] = !(r[i] = n[i]));
                })
              );
            });
          }
          function me(e) {
            return e && void 0 !== e.getElementsByTagName && e;
          }
          for (t in ((n = ae.support = {}),
          (o = ae.isXML =
            function (e) {
              var t = e.namespaceURI,
                n = (e.ownerDocument || e).documentElement;
              return !G.test(t || (n && n.nodeName) || "HTML");
            }),
          (p = ae.setDocument =
            function (e) {
              var t,
                i,
                s = e ? e.ownerDocument || e : w;
              return s != d && 9 === s.nodeType && s.documentElement
                ? ((h = (d = s).documentElement),
                  (g = !o(d)),
                  w != d &&
                    (i = d.defaultView) &&
                    i.top !== i &&
                    (i.addEventListener
                      ? i.addEventListener("unload", oe, !1)
                      : i.attachEvent && i.attachEvent("onunload", oe)),
                  (n.scope = ce(function (e) {
                    return (
                      h.appendChild(e).appendChild(d.createElement("div")),
                      void 0 !== e.querySelectorAll &&
                        !e.querySelectorAll(":scope fieldset div").length
                    );
                  })),
                  (n.attributes = ce(function (e) {
                    return (e.className = "i"), !e.getAttribute("className");
                  })),
                  (n.getElementsByTagName = ce(function (e) {
                    return (
                      e.appendChild(d.createComment("")),
                      !e.getElementsByTagName("*").length
                    );
                  })),
                  (n.getElementsByClassName = K.test(d.getElementsByClassName)),
                  (n.getById = ce(function (e) {
                    return (
                      (h.appendChild(e).id = b),
                      !d.getElementsByName || !d.getElementsByName(b).length
                    );
                  })),
                  n.getById
                    ? ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((r.filter.ID = function (e) {
                        var t = e.replace(te, ne);
                        return function (e) {
                          var n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (r.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && g) {
                          var n,
                            r,
                            i,
                            o = t.getElementById(e);
                          if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                              return [o];
                            for (
                              i = t.getElementsByName(e), r = 0;
                              (o = i[r++]);

                            )
                              if (
                                (n = o.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [o];
                          }
                          return [];
                        }
                      })),
                  (r.find.TAG = n.getElementsByTagName
                    ? function (e, t) {
                        return void 0 !== t.getElementsByTagName
                          ? t.getElementsByTagName(e)
                          : n.qsa
                          ? t.querySelectorAll(e)
                          : void 0;
                      }
                    : function (e, t) {
                        var n,
                          r = [],
                          i = 0,
                          o = t.getElementsByTagName(e);
                        if ("*" === e) {
                          for (; (n = o[i++]); ) 1 === n.nodeType && r.push(n);
                          return r;
                        }
                        return o;
                      }),
                  (r.find.CLASS =
                    n.getElementsByClassName &&
                    function (e, t) {
                      if (void 0 !== t.getElementsByClassName && g)
                        return t.getElementsByClassName(e);
                    }),
                  (m = []),
                  (v = []),
                  (n.qsa = K.test(d.querySelectorAll)) &&
                    (ce(function (e) {
                      var t;
                      (h.appendChild(e).innerHTML =
                        "<a id='" +
                        b +
                        "'></a><select id='" +
                        b +
                        "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                        e.querySelectorAll("[msallowcapture^='']").length &&
                          v.push("[*^$]=" + M + "*(?:''|\"\")"),
                        e.querySelectorAll("[selected]").length ||
                          v.push("\\[" + M + "*(?:value|" + R + ")"),
                        e.querySelectorAll("[id~=" + b + "-]").length ||
                          v.push("~="),
                        (t = d.createElement("input")).setAttribute("name", ""),
                        e.appendChild(t),
                        e.querySelectorAll("[name='']").length ||
                          v.push(
                            "\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"
                          ),
                        e.querySelectorAll(":checked").length ||
                          v.push(":checked"),
                        e.querySelectorAll("a#" + b + "+*").length ||
                          v.push(".#.+[+~]"),
                        e.querySelectorAll("\\\f"),
                        v.push("[\\r\\n\\f]");
                    }),
                    ce(function (e) {
                      e.innerHTML =
                        "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                      var t = d.createElement("input");
                      t.setAttribute("type", "hidden"),
                        e.appendChild(t).setAttribute("name", "D"),
                        e.querySelectorAll("[name=d]").length &&
                          v.push("name" + M + "*[*^$|!~]?="),
                        2 !== e.querySelectorAll(":enabled").length &&
                          v.push(":enabled", ":disabled"),
                        (h.appendChild(e).disabled = !0),
                        2 !== e.querySelectorAll(":disabled").length &&
                          v.push(":enabled", ":disabled"),
                        e.querySelectorAll("*,:x"),
                        v.push(",.*:");
                    })),
                  (n.matchesSelector = K.test(
                    (y =
                      h.matches ||
                      h.webkitMatchesSelector ||
                      h.mozMatchesSelector ||
                      h.oMatchesSelector ||
                      h.msMatchesSelector)
                  )) &&
                    ce(function (e) {
                      (n.disconnectedMatch = y.call(e, "*")),
                        y.call(e, "[s!='']:x"),
                        m.push("!=", $);
                    }),
                  (v = v.length && new RegExp(v.join("|"))),
                  (m = m.length && new RegExp(m.join("|"))),
                  (t = K.test(h.compareDocumentPosition)),
                  (x =
                    t || K.test(h.contains)
                      ? function (e, t) {
                          var n = 9 === e.nodeType ? e.documentElement : e,
                            r = t && t.parentNode;
                          return (
                            e === r ||
                            !(
                              !r ||
                              1 !== r.nodeType ||
                              !(n.contains
                                ? n.contains(r)
                                : e.compareDocumentPosition &&
                                  16 & e.compareDocumentPosition(r))
                            )
                          );
                        }
                      : function (e, t) {
                          if (t)
                            for (; (t = t.parentNode); ) if (t === e) return !0;
                          return !1;
                        }),
                  (A = t
                    ? function (e, t) {
                        if (e === t) return (f = !0), 0;
                        var r =
                          !e.compareDocumentPosition -
                          !t.compareDocumentPosition;
                        return (
                          r ||
                          (1 &
                            (r =
                              (e.ownerDocument || e) == (t.ownerDocument || t)
                                ? e.compareDocumentPosition(t)
                                : 1) ||
                          (!n.sortDetached &&
                            t.compareDocumentPosition(e) === r)
                            ? e == d || (e.ownerDocument == w && x(w, e))
                              ? -1
                              : t == d || (t.ownerDocument == w && x(w, t))
                              ? 1
                              : c
                              ? P(c, e) - P(c, t)
                              : 0
                            : 4 & r
                            ? -1
                            : 1)
                        );
                      }
                    : function (e, t) {
                        if (e === t) return (f = !0), 0;
                        var n,
                          r = 0,
                          i = e.parentNode,
                          o = t.parentNode,
                          s = [e],
                          a = [t];
                        if (!i || !o)
                          return e == d
                            ? -1
                            : t == d
                            ? 1
                            : i
                            ? -1
                            : o
                            ? 1
                            : c
                            ? P(c, e) - P(c, t)
                            : 0;
                        if (i === o) return pe(e, t);
                        for (n = e; (n = n.parentNode); ) s.unshift(n);
                        for (n = t; (n = n.parentNode); ) a.unshift(n);
                        for (; s[r] === a[r]; ) r++;
                        return r
                          ? pe(s[r], a[r])
                          : s[r] == w
                          ? -1
                          : a[r] == w
                          ? 1
                          : 0;
                      }),
                  d)
                : d;
            }),
          (ae.matches = function (e, t) {
            return ae(e, null, null, t);
          }),
          (ae.matchesSelector = function (e, t) {
            if (
              (p(e),
              n.matchesSelector &&
                g &&
                !j[t + " "] &&
                (!m || !m.test(t)) &&
                (!v || !v.test(t)))
            )
              try {
                var r = y.call(e, t);
                if (
                  r ||
                  n.disconnectedMatch ||
                  (e.document && 11 !== e.document.nodeType)
                )
                  return r;
              } catch (e) {
                j(t, !0);
              }
            return ae(t, d, null, [e]).length > 0;
          }),
          (ae.contains = function (e, t) {
            return (e.ownerDocument || e) != d && p(e), x(e, t);
          }),
          (ae.attr = function (e, t) {
            (e.ownerDocument || e) != d && p(e);
            var i = r.attrHandle[t.toLowerCase()],
              o =
                i && N.call(r.attrHandle, t.toLowerCase())
                  ? i(e, t, !g)
                  : void 0;
            return void 0 !== o
              ? o
              : n.attributes || !g
              ? e.getAttribute(t)
              : (o = e.getAttributeNode(t)) && o.specified
              ? o.value
              : null;
          }),
          (ae.escape = function (e) {
            return (e + "").replace(re, ie);
          }),
          (ae.error = function (e) {
            throw new Error("Syntax error, unrecognized expression: " + e);
          }),
          (ae.uniqueSort = function (e) {
            var t,
              r = [],
              i = 0,
              o = 0;
            if (
              ((f = !n.detectDuplicates),
              (c = !n.sortStable && e.slice(0)),
              e.sort(A),
              f)
            ) {
              for (; (t = e[o++]); ) t === e[o] && (i = r.push(o));
              for (; i--; ) e.splice(r[i], 1);
            }
            return (c = null), e;
          }),
          (i = ae.getText =
            function (e) {
              var t,
                n = "",
                r = 0,
                o = e.nodeType;
              if (o) {
                if (1 === o || 9 === o || 11 === o) {
                  if ("string" == typeof e.textContent) return e.textContent;
                  for (e = e.firstChild; e; e = e.nextSibling) n += i(e);
                } else if (3 === o || 4 === o) return e.nodeValue;
              } else for (; (t = e[r++]); ) n += i(t);
              return n;
            }),
          ((r = ae.selectors =
            {
              cacheLength: 50,
              createPseudo: ue,
              match: V,
              attrHandle: {},
              find: {},
              relative: {
                ">": { dir: "parentNode", first: !0 },
                " ": { dir: "parentNode" },
                "+": { dir: "previousSibling", first: !0 },
                "~": { dir: "previousSibling" },
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(te, ne)),
                    (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                  );
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    "nth" === e[1].slice(0, 3)
                      ? (e[3] || ae.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ("even" === e[3] || "odd" === e[3]))),
                        (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                      : e[3] && ae.error(e[0]),
                    e
                  );
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2];
                  return V.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || "")
                        : n &&
                          U.test(n) &&
                          (t = s(n, !0)) &&
                          (t = n.indexOf(")", n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3));
                },
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(te, ne).toLowerCase();
                  return "*" === e
                    ? function () {
                        return !0;
                      }
                    : function (e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t;
                      };
                },
                CLASS: function (e) {
                  var t = S[e + " "];
                  return (
                    t ||
                    ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                      S(e, function (e) {
                        return t.test(
                          ("string" == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute &&
                              e.getAttribute("class")) ||
                            ""
                        );
                      }))
                  );
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var i = ae.attr(r, e);
                    return null == i
                      ? "!=" === t
                      : !t ||
                          ((i += ""),
                          "=" === t
                            ? i === n
                            : "!=" === t
                            ? i !== n
                            : "^=" === t
                            ? n && 0 === i.indexOf(n)
                            : "*=" === t
                            ? n && i.indexOf(n) > -1
                            : "$=" === t
                            ? n && i.slice(-n.length) === n
                            : "~=" === t
                            ? (" " + i.replace(F, " ") + " ").indexOf(n) > -1
                            : "|=" === t &&
                              (i === n ||
                                i.slice(0, n.length + 1) === n + "-"));
                  };
                },
                CHILD: function (e, t, n, r, i) {
                  var o = "nth" !== e.slice(0, 3),
                    s = "last" !== e.slice(-4),
                    a = "of-type" === t;
                  return 1 === r && 0 === i
                    ? function (e) {
                        return !!e.parentNode;
                      }
                    : function (t, n, l) {
                        var u,
                          c,
                          f,
                          p,
                          d,
                          h,
                          g = o !== s ? "nextSibling" : "previousSibling",
                          v = t.parentNode,
                          m = a && t.nodeName.toLowerCase(),
                          y = !l && !a,
                          x = !1;
                        if (v) {
                          if (o) {
                            for (; g; ) {
                              for (p = t; (p = p[g]); )
                                if (
                                  a
                                    ? p.nodeName.toLowerCase() === m
                                    : 1 === p.nodeType
                                )
                                  return !1;
                              h = g = "only" === e && !h && "nextSibling";
                            }
                            return !0;
                          }
                          if (
                            ((h = [s ? v.firstChild : v.lastChild]), s && y)
                          ) {
                            for (
                              x =
                                (d =
                                  (u =
                                    (c =
                                      (f = (p = v)[b] || (p[b] = {}))[
                                        p.uniqueID
                                      ] || (f[p.uniqueID] = {}))[e] ||
                                    [])[0] === T && u[1]) && u[2],
                                p = d && v.childNodes[d];
                              (p =
                                (++d && p && p[g]) || (x = d = 0) || h.pop());

                            )
                              if (1 === p.nodeType && ++x && p === t) {
                                c[e] = [T, d, x];
                                break;
                              }
                          } else if (
                            (y &&
                              (x = d =
                                (u =
                                  (c =
                                    (f = (p = t)[b] || (p[b] = {}))[
                                      p.uniqueID
                                    ] || (f[p.uniqueID] = {}))[e] || [])[0] ===
                                  T && u[1]),
                            !1 === x)
                          )
                            for (
                              ;
                              (p =
                                (++d && p && p[g]) || (x = d = 0) || h.pop()) &&
                              ((a
                                ? p.nodeName.toLowerCase() !== m
                                : 1 !== p.nodeType) ||
                                !++x ||
                                (y &&
                                  ((c =
                                    (f = p[b] || (p[b] = {}))[p.uniqueID] ||
                                    (f[p.uniqueID] = {}))[e] = [T, x]),
                                p !== t));

                            );
                          return (x -= i) === r || (x % r == 0 && x / r >= 0);
                        }
                      };
                },
                PSEUDO: function (e, t) {
                  var n,
                    i =
                      r.pseudos[e] ||
                      r.setFilters[e.toLowerCase()] ||
                      ae.error("unsupported pseudo: " + e);
                  return i[b]
                    ? i(t)
                    : i.length > 1
                    ? ((n = [e, e, "", t]),
                      r.setFilters.hasOwnProperty(e.toLowerCase())
                        ? ue(function (e, n) {
                            for (var r, o = i(e, t), s = o.length; s--; )
                              e[(r = P(e, o[s]))] = !(n[r] = o[s]);
                          })
                        : function (e) {
                            return i(e, 0, n);
                          })
                    : i;
                },
              },
              pseudos: {
                not: ue(function (e) {
                  var t = [],
                    n = [],
                    r = a(e.replace(_, "$1"));
                  return r[b]
                    ? ue(function (e, t, n, i) {
                        for (var o, s = r(e, null, i, []), a = e.length; a--; )
                          (o = s[a]) && (e[a] = !(t[a] = o));
                      })
                    : function (e, i, o) {
                        return (
                          (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                        );
                      };
                }),
                has: ue(function (e) {
                  return function (t) {
                    return ae(e, t).length > 0;
                  };
                }),
                contains: ue(function (e) {
                  return (
                    (e = e.replace(te, ne)),
                    function (t) {
                      return (t.textContent || i(t)).indexOf(e) > -1;
                    }
                  );
                }),
                lang: ue(function (e) {
                  return (
                    Y.test(e || "") || ae.error("unsupported lang: " + e),
                    (e = e.replace(te, ne).toLowerCase()),
                    function (t) {
                      var n;
                      do {
                        if (
                          (n = g
                            ? t.lang
                            : t.getAttribute("xml:lang") ||
                              t.getAttribute("lang"))
                        )
                          return (
                            (n = n.toLowerCase()) === e ||
                            0 === n.indexOf(e + "-")
                          );
                      } while ((t = t.parentNode) && 1 === t.nodeType);
                      return !1;
                    }
                  );
                }),
                target: function (t) {
                  var n = e.location && e.location.hash;
                  return n && n.slice(1) === t.id;
                },
                root: function (e) {
                  return e === h;
                },
                focus: function (e) {
                  return (
                    e === d.activeElement &&
                    (!d.hasFocus || d.hasFocus()) &&
                    !!(e.type || e.href || ~e.tabIndex)
                  );
                },
                enabled: ge(!1),
                disabled: ge(!0),
                checked: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && !!e.checked) ||
                    ("option" === t && !!e.selected)
                  );
                },
                selected: function (e) {
                  return (
                    e.parentNode && e.parentNode.selectedIndex,
                    !0 === e.selected
                  );
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling)
                    if (e.nodeType < 6) return !1;
                  return !0;
                },
                parent: function (e) {
                  return !r.pseudos.empty(e);
                },
                header: function (e) {
                  return J.test(e.nodeName);
                },
                input: function (e) {
                  return Q.test(e.nodeName);
                },
                button: function (e) {
                  var t = e.nodeName.toLowerCase();
                  return (
                    ("input" === t && "button" === e.type) || "button" === t
                  );
                },
                text: function (e) {
                  var t;
                  return (
                    "input" === e.nodeName.toLowerCase() &&
                    "text" === e.type &&
                    (null == (t = e.getAttribute("type")) ||
                      "text" === t.toLowerCase())
                  );
                },
                first: ve(function () {
                  return [0];
                }),
                last: ve(function (e, t) {
                  return [t - 1];
                }),
                eq: ve(function (e, t, n) {
                  return [n < 0 ? n + t : n];
                }),
                even: ve(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n);
                  return e;
                }),
                odd: ve(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n);
                  return e;
                }),
                lt: ve(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n > t ? t : n; --r >= 0; )
                    e.push(r);
                  return e;
                }),
                gt: ve(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
                  return e;
                }),
              },
            }).pseudos.nth = r.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            r.pseudos[t] = de(t);
          for (t in { submit: !0, reset: !0 }) r.pseudos[t] = he(t);
          function ye() {}
          function xe(e) {
            for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
            return r;
          }
          function be(e, t, n) {
            var r = t.dir,
              i = t.next,
              o = i || r,
              s = n && "parentNode" === o,
              a = C++;
            return t.first
              ? function (t, n, i) {
                  for (; (t = t[r]); )
                    if (1 === t.nodeType || s) return e(t, n, i);
                  return !1;
                }
              : function (t, n, l) {
                  var u,
                    c,
                    f,
                    p = [T, a];
                  if (l) {
                    for (; (t = t[r]); )
                      if ((1 === t.nodeType || s) && e(t, n, l)) return !0;
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || s)
                        if (
                          ((c =
                            (f = t[b] || (t[b] = {}))[t.uniqueID] ||
                            (f[t.uniqueID] = {})),
                          i && i === t.nodeName.toLowerCase())
                        )
                          t = t[r] || t;
                        else {
                          if ((u = c[o]) && u[0] === T && u[1] === a)
                            return (p[2] = u[2]);
                          if (((c[o] = p), (p[2] = e(t, n, l)))) return !0;
                        }
                  return !1;
                };
          }
          function we(e) {
            return e.length > 1
              ? function (t, n, r) {
                  for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1;
                  return !0;
                }
              : e[0];
          }
          function Te(e, t, n, r, i) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; a < l; a++)
              (o = e[a]) && ((n && !n(o, r, i)) || (s.push(o), u && t.push(a)));
            return s;
          }
          function Ce(e, t, n, r, i, o) {
            return (
              r && !r[b] && (r = Ce(r)),
              i && !i[b] && (i = Ce(i, o)),
              ue(function (o, s, a, l) {
                var u,
                  c,
                  f,
                  p = [],
                  d = [],
                  h = s.length,
                  g =
                    o ||
                    (function (e, t, n) {
                      for (var r = 0, i = t.length; r < i; r++) ae(e, t[r], n);
                      return n;
                    })(t || "*", a.nodeType ? [a] : a, []),
                  v = !e || (!o && t) ? g : Te(g, p, e, a, l),
                  m = n ? (i || (o ? e : h || r) ? [] : s) : v;
                if ((n && n(v, m, a, l), r))
                  for (u = Te(m, d), r(u, [], a, l), c = u.length; c--; )
                    (f = u[c]) && (m[d[c]] = !(v[d[c]] = f));
                if (o) {
                  if (i || e) {
                    if (i) {
                      for (u = [], c = m.length; c--; )
                        (f = m[c]) && u.push((v[c] = f));
                      i(null, (m = []), u, l);
                    }
                    for (c = m.length; c--; )
                      (f = m[c]) &&
                        (u = i ? P(o, f) : p[c]) > -1 &&
                        (o[u] = !(s[u] = f));
                  }
                } else (m = Te(m === s ? m.splice(h, m.length) : m)), i ? i(null, s, m, l) : H.apply(s, m);
              })
            );
          }
          function Se(e) {
            for (
              var t,
                n,
                i,
                o = e.length,
                s = r.relative[e[0].type],
                a = s || r.relative[" "],
                l = s ? 1 : 0,
                c = be(
                  function (e) {
                    return e === t;
                  },
                  a,
                  !0
                ),
                f = be(
                  function (e) {
                    return P(t, e) > -1;
                  },
                  a,
                  !0
                ),
                p = [
                  function (e, n, r) {
                    var i =
                      (!s && (r || n !== u)) ||
                      ((t = n).nodeType ? c(e, n, r) : f(e, n, r));
                    return (t = null), i;
                  },
                ];
              l < o;
              l++
            )
              if ((n = r.relative[e[l].type])) p = [be(we(p), n)];
              else {
                if ((n = r.filter[e[l].type].apply(null, e[l].matches))[b]) {
                  for (i = ++l; i < o && !r.relative[e[i].type]; i++);
                  return Ce(
                    l > 1 && we(p),
                    l > 1 &&
                      xe(
                        e
                          .slice(0, l - 1)
                          .concat({ value: " " === e[l - 2].type ? "*" : "" })
                      ).replace(_, "$1"),
                    n,
                    l < i && Se(e.slice(l, i)),
                    i < o && Se((e = e.slice(i))),
                    i < o && xe(e)
                  );
                }
                p.push(n);
              }
            return we(p);
          }
          return (
            (ye.prototype = r.filters = r.pseudos),
            (r.setFilters = new ye()),
            (s = ae.tokenize =
              function (e, t) {
                var n,
                  i,
                  o,
                  s,
                  a,
                  l,
                  u,
                  c = E[e + " "];
                if (c) return t ? 0 : c.slice(0);
                for (a = e, l = [], u = r.preFilter; a; ) {
                  for (s in ((n && !(i = B.exec(a))) ||
                    (i && (a = a.slice(i[0].length) || a), l.push((o = []))),
                  (n = !1),
                  (i = X.exec(a)) &&
                    ((n = i.shift()),
                    o.push({ value: n, type: i[0].replace(_, " ") }),
                    (a = a.slice(n.length))),
                  r.filter))
                    !(i = V[s].exec(a)) ||
                      (u[s] && !(i = u[s](i))) ||
                      ((n = i.shift()),
                      o.push({ value: n, type: s, matches: i }),
                      (a = a.slice(n.length)));
                  if (!n) break;
                }
                return t ? a.length : a ? ae.error(e) : E(e, l).slice(0);
              }),
            (a = ae.compile =
              function (e, t) {
                var n,
                  i = [],
                  o = [],
                  a = k[e + " "];
                if (!a) {
                  for (t || (t = s(e)), n = t.length; n--; )
                    (a = Se(t[n]))[b] ? i.push(a) : o.push(a);
                  (a = k(
                    e,
                    (function (e, t) {
                      var n = t.length > 0,
                        i = e.length > 0,
                        o = function (o, s, a, l, c) {
                          var f,
                            h,
                            v,
                            m = 0,
                            y = "0",
                            x = o && [],
                            b = [],
                            w = u,
                            C = o || (i && r.find.TAG("*", c)),
                            S = (T += null == w ? 1 : Math.random() || 0.1),
                            E = C.length;
                          for (
                            c && (u = s == d || s || c);
                            y !== E && null != (f = C[y]);
                            y++
                          ) {
                            if (i && f) {
                              for (
                                h = 0,
                                  s || f.ownerDocument == d || (p(f), (a = !g));
                                (v = e[h++]);

                              )
                                if (v(f, s || d, a)) {
                                  l.push(f);
                                  break;
                                }
                              c && (T = S);
                            }
                            n && ((f = !v && f) && m--, o && x.push(f));
                          }
                          if (((m += y), n && y !== m)) {
                            for (h = 0; (v = t[h++]); ) v(x, b, s, a);
                            if (o) {
                              if (m > 0)
                                for (; y--; )
                                  x[y] || b[y] || (b[y] = q.call(l));
                              b = Te(b);
                            }
                            H.apply(l, b),
                              c &&
                                !o &&
                                b.length > 0 &&
                                m + t.length > 1 &&
                                ae.uniqueSort(l);
                          }
                          return c && ((T = S), (u = w)), x;
                        };
                      return n ? ue(o) : o;
                    })(o, i)
                  )).selector = e;
                }
                return a;
              }),
            (l = ae.select =
              function (e, t, n, i) {
                var o,
                  l,
                  u,
                  c,
                  f,
                  p = "function" == typeof e && e,
                  d = !i && s((e = p.selector || e));
                if (((n = n || []), 1 === d.length)) {
                  if (
                    (l = d[0] = d[0].slice(0)).length > 2 &&
                    "ID" === (u = l[0]).type &&
                    9 === t.nodeType &&
                    g &&
                    r.relative[l[1].type]
                  ) {
                    if (
                      !(t = (r.find.ID(u.matches[0].replace(te, ne), t) ||
                        [])[0])
                    )
                      return n;
                    p && (t = t.parentNode),
                      (e = e.slice(l.shift().value.length));
                  }
                  for (
                    o = V.needsContext.test(e) ? 0 : l.length;
                    o-- && ((u = l[o]), !r.relative[(c = u.type)]);

                  )
                    if (
                      (f = r.find[c]) &&
                      (i = f(
                        u.matches[0].replace(te, ne),
                        (ee.test(l[0].type) && me(t.parentNode)) || t
                      ))
                    ) {
                      if ((l.splice(o, 1), !(e = i.length && xe(l))))
                        return H.apply(n, i), n;
                      break;
                    }
                }
                return (
                  (p || a(e, d))(
                    i,
                    t,
                    !g,
                    n,
                    !t || (ee.test(e) && me(t.parentNode)) || t
                  ),
                  n
                );
              }),
            (n.sortStable = b.split("").sort(A).join("") === b),
            (n.detectDuplicates = !!f),
            p(),
            (n.sortDetached = ce(function (e) {
              return 1 & e.compareDocumentPosition(d.createElement("fieldset"));
            })),
            ce(function (e) {
              return (
                (e.innerHTML = "<a href='#'></a>"),
                "#" === e.firstChild.getAttribute("href")
              );
            }) ||
              fe("type|href|height|width", function (e, t, n) {
                if (!n)
                  return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
              }),
            (n.attributes &&
              ce(function (e) {
                return (
                  (e.innerHTML = "<input/>"),
                  e.firstChild.setAttribute("value", ""),
                  "" === e.firstChild.getAttribute("value")
                );
              })) ||
              fe("value", function (e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                  return e.defaultValue;
              }),
            ce(function (e) {
              return null == e.getAttribute("disabled");
            }) ||
              fe(R, function (e, t, n) {
                var r;
                if (!n)
                  return !0 === e[t]
                    ? t.toLowerCase()
                    : (r = e.getAttributeNode(t)) && r.specified
                    ? r.value
                    : null;
              }),
            ae
          );
        })(n);
      (C.find = E),
        (C.expr = E.selectors),
        (C.expr[":"] = C.expr.pseudos),
        (C.uniqueSort = C.unique = E.uniqueSort),
        (C.text = E.getText),
        (C.isXMLDoc = E.isXML),
        (C.contains = E.contains),
        (C.escapeSelector = E.escape);
      var k = function (e, t, n) {
          for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
              if (i && C(e).is(n)) break;
              r.push(e);
            }
          return r;
        },
        j = function (e, t) {
          for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
          return n;
        },
        A = C.expr.match.needsContext;
      function N(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
      }
      var D = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
      function q(e, t, n) {
        return m(t)
          ? C.grep(e, function (e, r) {
              return !!t.call(e, r, e) !== n;
            })
          : t.nodeType
          ? C.grep(e, function (e) {
              return (e === t) !== n;
            })
          : "string" != typeof t
          ? C.grep(e, function (e) {
              return c.call(t, e) > -1 !== n;
            })
          : C.filter(t, e, n);
      }
      (C.filter = function (e, t, n) {
        var r = t[0];
        return (
          n && (e = ":not(" + e + ")"),
          1 === t.length && 1 === r.nodeType
            ? C.find.matchesSelector(r, e)
              ? [r]
              : []
            : C.find.matches(
                e,
                C.grep(t, function (e) {
                  return 1 === e.nodeType;
                })
              )
        );
      }),
        C.fn.extend({
          find: function (e) {
            var t,
              n,
              r = this.length,
              i = this;
            if ("string" != typeof e)
              return this.pushStack(
                C(e).filter(function () {
                  for (t = 0; t < r; t++) if (C.contains(i[t], this)) return !0;
                })
              );
            for (n = this.pushStack([]), t = 0; t < r; t++) C.find(e, i[t], n);
            return r > 1 ? C.uniqueSort(n) : n;
          },
          filter: function (e) {
            return this.pushStack(q(this, e || [], !1));
          },
          not: function (e) {
            return this.pushStack(q(this, e || [], !0));
          },
          is: function (e) {
            return !!q(
              this,
              "string" == typeof e && A.test(e) ? C(e) : e || [],
              !1
            ).length;
          },
        });
      var L,
        H = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
      ((C.fn.init = function (e, t, n) {
        var r, i;
        if (!e) return this;
        if (((n = n || L), "string" == typeof e)) {
          if (
            !(r =
              "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                ? [null, e, null]
                : H.exec(e)) ||
            (!r[1] && t)
          )
            return !t || t.jquery
              ? (t || n).find(e)
              : this.constructor(t).find(e);
          if (r[1]) {
            if (
              ((t = t instanceof C ? t[0] : t),
              C.merge(
                this,
                C.parseHTML(
                  r[1],
                  t && t.nodeType ? t.ownerDocument || t : x,
                  !0
                )
              ),
              D.test(r[1]) && C.isPlainObject(t))
            )
              for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
            return this;
          }
          return (
            (i = x.getElementById(r[2])) && ((this[0] = i), (this.length = 1)),
            this
          );
        }
        return e.nodeType
          ? ((this[0] = e), (this.length = 1), this)
          : m(e)
          ? void 0 !== n.ready
            ? n.ready(e)
            : e(C)
          : C.makeArray(e, this);
      }).prototype = C.fn),
        (L = C(x));
      var O = /^(?:parents|prev(?:Until|All))/,
        P = { children: !0, contents: !0, next: !0, prev: !0 };
      function R(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType; );
        return e;
      }
      C.fn.extend({
        has: function (e) {
          var t = C(e, this),
            n = t.length;
          return this.filter(function () {
            for (var e = 0; e < n; e++) if (C.contains(this, t[e])) return !0;
          });
        },
        closest: function (e, t) {
          var n,
            r = 0,
            i = this.length,
            o = [],
            s = "string" != typeof e && C(e);
          if (!A.test(e))
            for (; r < i; r++)
              for (n = this[r]; n && n !== t; n = n.parentNode)
                if (
                  n.nodeType < 11 &&
                  (s
                    ? s.index(n) > -1
                    : 1 === n.nodeType && C.find.matchesSelector(n, e))
                ) {
                  o.push(n);
                  break;
                }
          return this.pushStack(o.length > 1 ? C.uniqueSort(o) : o);
        },
        index: function (e) {
          return e
            ? "string" == typeof e
              ? c.call(C(e), this[0])
              : c.call(this, e.jquery ? e[0] : e)
            : this[0] && this[0].parentNode
            ? this.first().prevAll().length
            : -1;
        },
        add: function (e, t) {
          return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))));
        },
        addBack: function (e) {
          return this.add(
            null == e ? this.prevObject : this.prevObject.filter(e)
          );
        },
      }),
        C.each(
          {
            parent: function (e) {
              var t = e.parentNode;
              return t && 11 !== t.nodeType ? t : null;
            },
            parents: function (e) {
              return k(e, "parentNode");
            },
            parentsUntil: function (e, t, n) {
              return k(e, "parentNode", n);
            },
            next: function (e) {
              return R(e, "nextSibling");
            },
            prev: function (e) {
              return R(e, "previousSibling");
            },
            nextAll: function (e) {
              return k(e, "nextSibling");
            },
            prevAll: function (e) {
              return k(e, "previousSibling");
            },
            nextUntil: function (e, t, n) {
              return k(e, "nextSibling", n);
            },
            prevUntil: function (e, t, n) {
              return k(e, "previousSibling", n);
            },
            siblings: function (e) {
              return j((e.parentNode || {}).firstChild, e);
            },
            children: function (e) {
              return j(e.firstChild);
            },
            contents: function (e) {
              return null != e.contentDocument && s(e.contentDocument)
                ? e.contentDocument
                : (N(e, "template") && (e = e.content || e),
                  C.merge([], e.childNodes));
            },
          },
          function (e, t) {
            C.fn[e] = function (n, r) {
              var i = C.map(this, t, n);
              return (
                "Until" !== e.slice(-5) && (r = n),
                r && "string" == typeof r && (i = C.filter(r, i)),
                this.length > 1 &&
                  (P[e] || C.uniqueSort(i), O.test(e) && i.reverse()),
                this.pushStack(i)
              );
            };
          }
        );
      var M = /[^\x20\t\r\n\f]+/g;
      function W(e) {
        return e;
      }
      function I(e) {
        throw e;
      }
      function $(e, t, n, r) {
        var i;
        try {
          e && m((i = e.promise))
            ? i.call(e).done(t).fail(n)
            : e && m((i = e.then))
            ? i.call(e, t, n)
            : t.apply(void 0, [e].slice(r));
        } catch (e) {
          n.apply(void 0, [e]);
        }
      }
      (C.Callbacks = function (e) {
        e =
          "string" == typeof e
            ? (function (e) {
                var t = {};
                return (
                  C.each(e.match(M) || [], function (e, n) {
                    t[n] = !0;
                  }),
                  t
                );
              })(e)
            : C.extend({}, e);
        var t,
          n,
          r,
          i,
          o = [],
          s = [],
          a = -1,
          l = function () {
            for (i = i || e.once, r = t = !0; s.length; a = -1)
              for (n = s.shift(); ++a < o.length; )
                !1 === o[a].apply(n[0], n[1]) &&
                  e.stopOnFalse &&
                  ((a = o.length), (n = !1));
            e.memory || (n = !1), (t = !1), i && (o = n ? [] : "");
          },
          u = {
            add: function () {
              return (
                o &&
                  (n && !t && ((a = o.length - 1), s.push(n)),
                  (function t(n) {
                    C.each(n, function (n, r) {
                      m(r)
                        ? (e.unique && u.has(r)) || o.push(r)
                        : r && r.length && "string" !== T(r) && t(r);
                    });
                  })(arguments),
                  n && !t && l()),
                this
              );
            },
            remove: function () {
              return (
                C.each(arguments, function (e, t) {
                  for (var n; (n = C.inArray(t, o, n)) > -1; )
                    o.splice(n, 1), n <= a && a--;
                }),
                this
              );
            },
            has: function (e) {
              return e ? C.inArray(e, o) > -1 : o.length > 0;
            },
            empty: function () {
              return o && (o = []), this;
            },
            disable: function () {
              return (i = s = []), (o = n = ""), this;
            },
            disabled: function () {
              return !o;
            },
            lock: function () {
              return (i = s = []), n || t || (o = n = ""), this;
            },
            locked: function () {
              return !!i;
            },
            fireWith: function (e, n) {
              return (
                i ||
                  ((n = [e, (n = n || []).slice ? n.slice() : n]),
                  s.push(n),
                  t || l()),
                this
              );
            },
            fire: function () {
              return u.fireWith(this, arguments), this;
            },
            fired: function () {
              return !!r;
            },
          };
        return u;
      }),
        C.extend({
          Deferred: function (e) {
            var t = [
                [
                  "notify",
                  "progress",
                  C.Callbacks("memory"),
                  C.Callbacks("memory"),
                  2,
                ],
                [
                  "resolve",
                  "done",
                  C.Callbacks("once memory"),
                  C.Callbacks("once memory"),
                  0,
                  "resolved",
                ],
                [
                  "reject",
                  "fail",
                  C.Callbacks("once memory"),
                  C.Callbacks("once memory"),
                  1,
                  "rejected",
                ],
              ],
              r = "pending",
              i = {
                state: function () {
                  return r;
                },
                always: function () {
                  return o.done(arguments).fail(arguments), this;
                },
                catch: function (e) {
                  return i.then(null, e);
                },
                pipe: function () {
                  var e = arguments;
                  return C.Deferred(function (n) {
                    C.each(t, function (t, r) {
                      var i = m(e[r[4]]) && e[r[4]];
                      o[r[1]](function () {
                        var e = i && i.apply(this, arguments);
                        e && m(e.promise)
                          ? e
                              .promise()
                              .progress(n.notify)
                              .done(n.resolve)
                              .fail(n.reject)
                          : n[r[0] + "With"](this, i ? [e] : arguments);
                      });
                    }),
                      (e = null);
                  }).promise();
                },
                then: function (e, r, i) {
                  var o = 0;
                  function s(e, t, r, i) {
                    return function () {
                      var a = this,
                        l = arguments,
                        u = function () {
                          var n, u;
                          if (!(e < o)) {
                            if ((n = r.apply(a, l)) === t.promise())
                              throw new TypeError("Thenable self-resolution");
                            (u =
                              n &&
                              ("object" == typeof n ||
                                "function" == typeof n) &&
                              n.then),
                              m(u)
                                ? i
                                  ? u.call(n, s(o, t, W, i), s(o, t, I, i))
                                  : (o++,
                                    u.call(
                                      n,
                                      s(o, t, W, i),
                                      s(o, t, I, i),
                                      s(o, t, W, t.notifyWith)
                                    ))
                                : (r !== W && ((a = void 0), (l = [n])),
                                  (i || t.resolveWith)(a, l));
                          }
                        },
                        c = i
                          ? u
                          : function () {
                              try {
                                u();
                              } catch (n) {
                                C.Deferred.exceptionHook &&
                                  C.Deferred.exceptionHook(n, c.stackTrace),
                                  e + 1 >= o &&
                                    (r !== I && ((a = void 0), (l = [n])),
                                    t.rejectWith(a, l));
                              }
                            };
                      e
                        ? c()
                        : (C.Deferred.getStackHook &&
                            (c.stackTrace = C.Deferred.getStackHook()),
                          n.setTimeout(c));
                    };
                  }
                  return C.Deferred(function (n) {
                    t[0][3].add(s(0, n, m(i) ? i : W, n.notifyWith)),
                      t[1][3].add(s(0, n, m(e) ? e : W)),
                      t[2][3].add(s(0, n, m(r) ? r : I));
                  }).promise();
                },
                promise: function (e) {
                  return null != e ? C.extend(e, i) : i;
                },
              },
              o = {};
            return (
              C.each(t, function (e, n) {
                var s = n[2],
                  a = n[5];
                (i[n[1]] = s.add),
                  a &&
                    s.add(
                      function () {
                        r = a;
                      },
                      t[3 - e][2].disable,
                      t[3 - e][3].disable,
                      t[0][2].lock,
                      t[0][3].lock
                    ),
                  s.add(n[3].fire),
                  (o[n[0]] = function () {
                    return (
                      o[n[0] + "With"](this === o ? void 0 : this, arguments),
                      this
                    );
                  }),
                  (o[n[0] + "With"] = s.fireWith);
              }),
              i.promise(o),
              e && e.call(o, o),
              o
            );
          },
          when: function (e) {
            var t = arguments.length,
              n = t,
              r = Array(n),
              i = a.call(arguments),
              o = C.Deferred(),
              s = function (e) {
                return function (n) {
                  (r[e] = this),
                    (i[e] = arguments.length > 1 ? a.call(arguments) : n),
                    --t || o.resolveWith(r, i);
                };
              };
            if (
              t <= 1 &&
              ($(e, o.done(s(n)).resolve, o.reject, !t),
              "pending" === o.state() || m(i[n] && i[n].then))
            )
              return o.then();
            for (; n--; ) $(i[n], s(n), o.reject);
            return o.promise();
          },
        });
      var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
      (C.Deferred.exceptionHook = function (e, t) {
        n.console &&
          n.console.warn &&
          e &&
          F.test(e.name) &&
          n.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
      }),
        (C.readyException = function (e) {
          n.setTimeout(function () {
            throw e;
          });
        });
      var _ = C.Deferred();
      function B() {
        x.removeEventListener("DOMContentLoaded", B),
          n.removeEventListener("load", B),
          C.ready();
      }
      (C.fn.ready = function (e) {
        return (
          _.then(e).catch(function (e) {
            C.readyException(e);
          }),
          this
        );
      }),
        C.extend({
          isReady: !1,
          readyWait: 1,
          ready: function (e) {
            (!0 === e ? --C.readyWait : C.isReady) ||
              ((C.isReady = !0),
              (!0 !== e && --C.readyWait > 0) || _.resolveWith(x, [C]));
          },
        }),
        (C.ready.then = _.then),
        "complete" === x.readyState ||
        ("loading" !== x.readyState && !x.documentElement.doScroll)
          ? n.setTimeout(C.ready)
          : (x.addEventListener("DOMContentLoaded", B),
            n.addEventListener("load", B));
      var X = function (e, t, n, r, i, o, s) {
          var a = 0,
            l = e.length,
            u = null == n;
          if ("object" === T(n))
            for (a in ((i = !0), n)) X(e, t, a, n[a], !0, o, s);
          else if (
            void 0 !== r &&
            ((i = !0),
            m(r) || (s = !0),
            u &&
              (s
                ? (t.call(e, r), (t = null))
                : ((u = t),
                  (t = function (e, t, n) {
                    return u.call(C(e), n);
                  }))),
            t)
          )
            for (; a < l; a++) t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
          return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
        },
        z = /^-ms-/,
        U = /-([a-z])/g;
      function Y(e, t) {
        return t.toUpperCase();
      }
      function V(e) {
        return e.replace(z, "ms-").replace(U, Y);
      }
      var G = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      };
      function Q() {
        this.expando = C.expando + Q.uid++;
      }
      (Q.uid = 1),
        (Q.prototype = {
          cache: function (e) {
            var t = e[this.expando];
            return (
              t ||
                ((t = {}),
                G(e) &&
                  (e.nodeType
                    ? (e[this.expando] = t)
                    : Object.defineProperty(e, this.expando, {
                        value: t,
                        configurable: !0,
                      }))),
              t
            );
          },
          set: function (e, t, n) {
            var r,
              i = this.cache(e);
            if ("string" == typeof t) i[V(t)] = n;
            else for (r in t) i[V(r)] = t[r];
            return i;
          },
          get: function (e, t) {
            return void 0 === t
              ? this.cache(e)
              : e[this.expando] && e[this.expando][V(t)];
          },
          access: function (e, t, n) {
            return void 0 === t || (t && "string" == typeof t && void 0 === n)
              ? this.get(e, t)
              : (this.set(e, t, n), void 0 !== n ? n : t);
          },
          remove: function (e, t) {
            var n,
              r = e[this.expando];
            if (void 0 !== r) {
              if (void 0 !== t) {
                n = (t = Array.isArray(t)
                  ? t.map(V)
                  : (t = V(t)) in r
                  ? [t]
                  : t.match(M) || []).length;
                for (; n--; ) delete r[t[n]];
              }
              (void 0 === t || C.isEmptyObject(r)) &&
                (e.nodeType
                  ? (e[this.expando] = void 0)
                  : delete e[this.expando]);
            }
          },
          hasData: function (e) {
            var t = e[this.expando];
            return void 0 !== t && !C.isEmptyObject(t);
          },
        });
      var J = new Q(),
        K = new Q(),
        Z = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ee = /[A-Z]/g;
      function te(e, t, n) {
        var r;
        if (void 0 === n && 1 === e.nodeType)
          if (
            ((r = "data-" + t.replace(ee, "-$&").toLowerCase()),
            "string" == typeof (n = e.getAttribute(r)))
          ) {
            try {
              n = (function (e) {
                return (
                  "true" === e ||
                  ("false" !== e &&
                    ("null" === e
                      ? null
                      : e === +e + ""
                      ? +e
                      : Z.test(e)
                      ? JSON.parse(e)
                      : e))
                );
              })(n);
            } catch (e) {}
            K.set(e, t, n);
          } else n = void 0;
        return n;
      }
      C.extend({
        hasData: function (e) {
          return K.hasData(e) || J.hasData(e);
        },
        data: function (e, t, n) {
          return K.access(e, t, n);
        },
        removeData: function (e, t) {
          K.remove(e, t);
        },
        _data: function (e, t, n) {
          return J.access(e, t, n);
        },
        _removeData: function (e, t) {
          J.remove(e, t);
        },
      }),
        C.fn.extend({
          data: function (e, t) {
            var n,
              r,
              i,
              o = this[0],
              s = o && o.attributes;
            if (void 0 === e) {
              if (
                this.length &&
                ((i = K.get(o)), 1 === o.nodeType && !J.get(o, "hasDataAttrs"))
              ) {
                for (n = s.length; n--; )
                  s[n] &&
                    0 === (r = s[n].name).indexOf("data-") &&
                    ((r = V(r.slice(5))), te(o, r, i[r]));
                J.set(o, "hasDataAttrs", !0);
              }
              return i;
            }
            return "object" == typeof e
              ? this.each(function () {
                  K.set(this, e);
                })
              : X(
                  this,
                  function (t) {
                    var n;
                    if (o && void 0 === t)
                      return void 0 !== (n = K.get(o, e)) ||
                        void 0 !== (n = te(o, e))
                        ? n
                        : void 0;
                    this.each(function () {
                      K.set(this, e, t);
                    });
                  },
                  null,
                  t,
                  arguments.length > 1,
                  null,
                  !0
                );
          },
          removeData: function (e) {
            return this.each(function () {
              K.remove(this, e);
            });
          },
        }),
        C.extend({
          queue: function (e, t, n) {
            var r;
            if (e)
              return (
                (t = (t || "fx") + "queue"),
                (r = J.get(e, t)),
                n &&
                  (!r || Array.isArray(n)
                    ? (r = J.access(e, t, C.makeArray(n)))
                    : r.push(n)),
                r || []
              );
          },
          dequeue: function (e, t) {
            t = t || "fx";
            var n = C.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = C._queueHooks(e, t);
            "inprogress" === i && ((i = n.shift()), r--),
              i &&
                ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                i.call(
                  e,
                  function () {
                    C.dequeue(e, t);
                  },
                  o
                )),
              !r && o && o.empty.fire();
          },
          _queueHooks: function (e, t) {
            var n = t + "queueHooks";
            return (
              J.get(e, n) ||
              J.access(e, n, {
                empty: C.Callbacks("once memory").add(function () {
                  J.remove(e, [t + "queue", n]);
                }),
              })
            );
          },
        }),
        C.fn.extend({
          queue: function (e, t) {
            var n = 2;
            return (
              "string" != typeof e && ((t = e), (e = "fx"), n--),
              arguments.length < n
                ? C.queue(this[0], e)
                : void 0 === t
                ? this
                : this.each(function () {
                    var n = C.queue(this, e, t);
                    C._queueHooks(this, e),
                      "fx" === e && "inprogress" !== n[0] && C.dequeue(this, e);
                  })
            );
          },
          dequeue: function (e) {
            return this.each(function () {
              C.dequeue(this, e);
            });
          },
          clearQueue: function (e) {
            return this.queue(e || "fx", []);
          },
          promise: function (e, t) {
            var n,
              r = 1,
              i = C.Deferred(),
              o = this,
              s = this.length,
              a = function () {
                --r || i.resolveWith(o, [o]);
              };
            for (
              "string" != typeof e && ((t = e), (e = void 0)), e = e || "fx";
              s--;

            )
              (n = J.get(o[s], e + "queueHooks")) &&
                n.empty &&
                (r++, n.empty.add(a));
            return a(), i.promise(t);
          },
        });
      var ne = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        re = new RegExp("^(?:([+-])=|)(" + ne + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        oe = x.documentElement,
        se = function (e) {
          return C.contains(e.ownerDocument, e);
        },
        ae = { composed: !0 };
      oe.getRootNode &&
        (se = function (e) {
          return (
            C.contains(e.ownerDocument, e) ||
            e.getRootNode(ae) === e.ownerDocument
          );
        });
      var le = function (e, t) {
        return (
          "none" === (e = t || e).style.display ||
          ("" === e.style.display && se(e) && "none" === C.css(e, "display"))
        );
      };
      function ue(e, t, n, r) {
        var i,
          o,
          s = 20,
          a = r
            ? function () {
                return r.cur();
              }
            : function () {
                return C.css(e, t, "");
              },
          l = a(),
          u = (n && n[3]) || (C.cssNumber[t] ? "" : "px"),
          c =
            e.nodeType &&
            (C.cssNumber[t] || ("px" !== u && +l)) &&
            re.exec(C.css(e, t));
        if (c && c[3] !== u) {
          for (l /= 2, u = u || c[3], c = +l || 1; s--; )
            C.style(e, t, c + u),
              (1 - o) * (1 - (o = a() / l || 0.5)) <= 0 && (s = 0),
              (c /= o);
          (c *= 2), C.style(e, t, c + u), (n = n || []);
        }
        return (
          n &&
            ((c = +c || +l || 0),
            (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
            r && ((r.unit = u), (r.start = c), (r.end = i))),
          i
        );
      }
      var ce = {};
      function fe(e) {
        var t,
          n = e.ownerDocument,
          r = e.nodeName,
          i = ce[r];
        return (
          i ||
          ((t = n.body.appendChild(n.createElement(r))),
          (i = C.css(t, "display")),
          t.parentNode.removeChild(t),
          "none" === i && (i = "block"),
          (ce[r] = i),
          i)
        );
      }
      function pe(e, t) {
        for (var n, r, i = [], o = 0, s = e.length; o < s; o++)
          (r = e[o]).style &&
            ((n = r.style.display),
            t
              ? ("none" === n &&
                  ((i[o] = J.get(r, "display") || null),
                  i[o] || (r.style.display = "")),
                "" === r.style.display && le(r) && (i[o] = fe(r)))
              : "none" !== n && ((i[o] = "none"), J.set(r, "display", n)));
        for (o = 0; o < s; o++) null != i[o] && (e[o].style.display = i[o]);
        return e;
      }
      C.fn.extend({
        show: function () {
          return pe(this, !0);
        },
        hide: function () {
          return pe(this);
        },
        toggle: function (e) {
          return "boolean" == typeof e
            ? e
              ? this.show()
              : this.hide()
            : this.each(function () {
                le(this) ? C(this).show() : C(this).hide();
              });
        },
      });
      var de,
        he,
        ge = /^(?:checkbox|radio)$/i,
        ve = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
        me = /^$|^module$|\/(?:java|ecma)script/i;
      (de = x.createDocumentFragment().appendChild(x.createElement("div"))),
        (he = x.createElement("input")).setAttribute("type", "radio"),
        he.setAttribute("checked", "checked"),
        he.setAttribute("name", "t"),
        de.appendChild(he),
        (v.checkClone = de.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (de.innerHTML = "<textarea>x</textarea>"),
        (v.noCloneChecked = !!de.cloneNode(!0).lastChild.defaultValue),
        (de.innerHTML = "<option></option>"),
        (v.option = !!de.lastChild);
      var ye = {
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""],
      };
      function xe(e, t) {
        var n;
        return (
          (n =
            void 0 !== e.getElementsByTagName
              ? e.getElementsByTagName(t || "*")
              : void 0 !== e.querySelectorAll
              ? e.querySelectorAll(t || "*")
              : []),
          void 0 === t || (t && N(e, t)) ? C.merge([e], n) : n
        );
      }
      function be(e, t) {
        for (var n = 0, r = e.length; n < r; n++)
          J.set(e[n], "globalEval", !t || J.get(t[n], "globalEval"));
      }
      (ye.tbody = ye.tfoot = ye.colgroup = ye.caption = ye.thead),
        (ye.th = ye.td),
        v.option ||
          (ye.optgroup = ye.option =
            [1, "<select multiple='multiple'>", "</select>"]);
      var we = /<|&#?\w+;/;
      function Te(e, t, n, r, i) {
        for (
          var o,
            s,
            a,
            l,
            u,
            c,
            f = t.createDocumentFragment(),
            p = [],
            d = 0,
            h = e.length;
          d < h;
          d++
        )
          if ((o = e[d]) || 0 === o)
            if ("object" === T(o)) C.merge(p, o.nodeType ? [o] : o);
            else if (we.test(o)) {
              for (
                s = s || f.appendChild(t.createElement("div")),
                  a = (ve.exec(o) || ["", ""])[1].toLowerCase(),
                  l = ye[a] || ye._default,
                  s.innerHTML = l[1] + C.htmlPrefilter(o) + l[2],
                  c = l[0];
                c--;

              )
                s = s.lastChild;
              C.merge(p, s.childNodes), ((s = f.firstChild).textContent = "");
            } else p.push(t.createTextNode(o));
        for (f.textContent = "", d = 0; (o = p[d++]); )
          if (r && C.inArray(o, r) > -1) i && i.push(o);
          else if (
            ((u = se(o)), (s = xe(f.appendChild(o), "script")), u && be(s), n)
          )
            for (c = 0; (o = s[c++]); ) me.test(o.type || "") && n.push(o);
        return f;
      }
      var Ce = /^key/,
        Se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Ee = /^([^.]*)(?:\.(.+)|)/;
      function ke() {
        return !0;
      }
      function je() {
        return !1;
      }
      function Ae(e, t) {
        return (
          (e ===
            (function () {
              try {
                return x.activeElement;
              } catch (e) {}
            })()) ==
          ("focus" === t)
        );
      }
      function Ne(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
          for (a in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
            Ne(e, a, n, r, t[a], o);
          return e;
        }
        if (
          (null == r && null == i
            ? ((i = n), (r = n = void 0))
            : null == i &&
              ("string" == typeof n
                ? ((i = r), (r = void 0))
                : ((i = r), (r = n), (n = void 0))),
          !1 === i)
        )
          i = je;
        else if (!i) return e;
        return (
          1 === o &&
            ((s = i),
            ((i = function (e) {
              return C().off(e), s.apply(this, arguments);
            }).guid = s.guid || (s.guid = C.guid++))),
          e.each(function () {
            C.event.add(this, t, i, r, n);
          })
        );
      }
      function De(e, t, n) {
        n
          ? (J.set(e, t, !1),
            C.event.add(e, t, {
              namespace: !1,
              handler: function (e) {
                var r,
                  i,
                  o = J.get(this, t);
                if (1 & e.isTrigger && this[t]) {
                  if (o.length)
                    (C.event.special[t] || {}).delegateType &&
                      e.stopPropagation();
                  else if (
                    ((o = a.call(arguments)),
                    J.set(this, t, o),
                    (r = n(this, t)),
                    this[t](),
                    o !== (i = J.get(this, t)) || r
                      ? J.set(this, t, !1)
                      : (i = {}),
                    o !== i)
                  )
                    return (
                      e.stopImmediatePropagation(), e.preventDefault(), i.value
                    );
                } else
                  o.length &&
                    (J.set(this, t, {
                      value: C.event.trigger(
                        C.extend(o[0], C.Event.prototype),
                        o.slice(1),
                        this
                      ),
                    }),
                    e.stopImmediatePropagation());
              },
            }))
          : void 0 === J.get(e, t) && C.event.add(e, t, ke);
      }
      (C.event = {
        global: {},
        add: function (e, t, n, r, i) {
          var o,
            s,
            a,
            l,
            u,
            c,
            f,
            p,
            d,
            h,
            g,
            v = J.get(e);
          if (G(e))
            for (
              n.handler && ((n = (o = n).handler), (i = o.selector)),
                i && C.find.matchesSelector(oe, i),
                n.guid || (n.guid = C.guid++),
                (l = v.events) || (l = v.events = Object.create(null)),
                (s = v.handle) ||
                  (s = v.handle =
                    function (t) {
                      return void 0 !== C && C.event.triggered !== t.type
                        ? C.event.dispatch.apply(e, arguments)
                        : void 0;
                    }),
                u = (t = (t || "").match(M) || [""]).length;
              u--;

            )
              (d = g = (a = Ee.exec(t[u]) || [])[1]),
                (h = (a[2] || "").split(".").sort()),
                d &&
                  ((f = C.event.special[d] || {}),
                  (d = (i ? f.delegateType : f.bindType) || d),
                  (f = C.event.special[d] || {}),
                  (c = C.extend(
                    {
                      type: d,
                      origType: g,
                      data: r,
                      handler: n,
                      guid: n.guid,
                      selector: i,
                      needsContext: i && C.expr.match.needsContext.test(i),
                      namespace: h.join("."),
                    },
                    o
                  )),
                  (p = l[d]) ||
                    (((p = l[d] = []).delegateCount = 0),
                    (f.setup && !1 !== f.setup.call(e, r, h, s)) ||
                      (e.addEventListener && e.addEventListener(d, s))),
                  f.add &&
                    (f.add.call(e, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                  i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                  (C.event.global[d] = !0));
        },
        remove: function (e, t, n, r, i) {
          var o,
            s,
            a,
            l,
            u,
            c,
            f,
            p,
            d,
            h,
            g,
            v = J.hasData(e) && J.get(e);
          if (v && (l = v.events)) {
            for (u = (t = (t || "").match(M) || [""]).length; u--; )
              if (
                ((d = g = (a = Ee.exec(t[u]) || [])[1]),
                (h = (a[2] || "").split(".").sort()),
                d)
              ) {
                for (
                  f = C.event.special[d] || {},
                    p = l[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                    a =
                      a[2] &&
                      new RegExp(
                        "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      ),
                    s = o = p.length;
                  o--;

                )
                  (c = p[o]),
                    (!i && g !== c.origType) ||
                      (n && n.guid !== c.guid) ||
                      (a && !a.test(c.namespace)) ||
                      (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                      (p.splice(o, 1),
                      c.selector && p.delegateCount--,
                      f.remove && f.remove.call(e, c));
                s &&
                  !p.length &&
                  ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                    C.removeEvent(e, d, v.handle),
                  delete l[d]);
              } else for (d in l) C.event.remove(e, d + t[u], n, r, !0);
            C.isEmptyObject(l) && J.remove(e, "handle events");
          }
        },
        dispatch: function (e) {
          var t,
            n,
            r,
            i,
            o,
            s,
            a = new Array(arguments.length),
            l = C.event.fix(e),
            u = (J.get(this, "events") || Object.create(null))[l.type] || [],
            c = C.event.special[l.type] || {};
          for (a[0] = l, t = 1; t < arguments.length; t++) a[t] = arguments[t];
          if (
            ((l.delegateTarget = this),
            !c.preDispatch || !1 !== c.preDispatch.call(this, l))
          ) {
            for (
              s = C.event.handlers.call(this, l, u), t = 0;
              (i = s[t++]) && !l.isPropagationStopped();

            )
              for (
                l.currentTarget = i.elem, n = 0;
                (o = i.handlers[n++]) && !l.isImmediatePropagationStopped();

              )
                (l.rnamespace &&
                  !1 !== o.namespace &&
                  !l.rnamespace.test(o.namespace)) ||
                  ((l.handleObj = o),
                  (l.data = o.data),
                  void 0 !==
                    (r = (
                      (C.event.special[o.origType] || {}).handle || o.handler
                    ).apply(i.elem, a)) &&
                    !1 === (l.result = r) &&
                    (l.preventDefault(), l.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, l), l.result;
          }
        },
        handlers: function (e, t) {
          var n,
            r,
            i,
            o,
            s,
            a = [],
            l = t.delegateCount,
            u = e.target;
          if (l && u.nodeType && !("click" === e.type && e.button >= 1))
            for (; u !== this; u = u.parentNode || this)
              if (
                1 === u.nodeType &&
                ("click" !== e.type || !0 !== u.disabled)
              ) {
                for (o = [], s = {}, n = 0; n < l; n++)
                  void 0 === s[(i = (r = t[n]).selector + " ")] &&
                    (s[i] = r.needsContext
                      ? C(i, this).index(u) > -1
                      : C.find(i, this, null, [u]).length),
                    s[i] && o.push(r);
                o.length && a.push({ elem: u, handlers: o });
              }
          return (
            (u = this),
            l < t.length && a.push({ elem: u, handlers: t.slice(l) }),
            a
          );
        },
        addProp: function (e, t) {
          Object.defineProperty(C.Event.prototype, e, {
            enumerable: !0,
            configurable: !0,
            get: m(t)
              ? function () {
                  if (this.originalEvent) return t(this.originalEvent);
                }
              : function () {
                  if (this.originalEvent) return this.originalEvent[e];
                },
            set: function (t) {
              Object.defineProperty(this, e, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: t,
              });
            },
          });
        },
        fix: function (e) {
          return e[C.expando] ? e : new C.Event(e);
        },
        special: {
          load: { noBubble: !0 },
          click: {
            setup: function (e) {
              var t = this || e;
              return (
                ge.test(t.type) &&
                  t.click &&
                  N(t, "input") &&
                  De(t, "click", ke),
                !1
              );
            },
            trigger: function (e) {
              var t = this || e;
              return (
                ge.test(t.type) && t.click && N(t, "input") && De(t, "click"),
                !0
              );
            },
            _default: function (e) {
              var t = e.target;
              return (
                (ge.test(t.type) &&
                  t.click &&
                  N(t, "input") &&
                  J.get(t, "click")) ||
                N(t, "a")
              );
            },
          },
          beforeunload: {
            postDispatch: function (e) {
              void 0 !== e.result &&
                e.originalEvent &&
                (e.originalEvent.returnValue = e.result);
            },
          },
        },
      }),
        (C.removeEvent = function (e, t, n) {
          e.removeEventListener && e.removeEventListener(t, n);
        }),
        (C.Event = function (e, t) {
          if (!(this instanceof C.Event)) return new C.Event(e, t);
          e && e.type
            ? ((this.originalEvent = e),
              (this.type = e.type),
              (this.isDefaultPrevented =
                e.defaultPrevented ||
                (void 0 === e.defaultPrevented && !1 === e.returnValue)
                  ? ke
                  : je),
              (this.target =
                e.target && 3 === e.target.nodeType
                  ? e.target.parentNode
                  : e.target),
              (this.currentTarget = e.currentTarget),
              (this.relatedTarget = e.relatedTarget))
            : (this.type = e),
            t && C.extend(this, t),
            (this.timeStamp = (e && e.timeStamp) || Date.now()),
            (this[C.expando] = !0);
        }),
        (C.Event.prototype = {
          constructor: C.Event,
          isDefaultPrevented: je,
          isPropagationStopped: je,
          isImmediatePropagationStopped: je,
          isSimulated: !1,
          preventDefault: function () {
            var e = this.originalEvent;
            (this.isDefaultPrevented = ke),
              e && !this.isSimulated && e.preventDefault();
          },
          stopPropagation: function () {
            var e = this.originalEvent;
            (this.isPropagationStopped = ke),
              e && !this.isSimulated && e.stopPropagation();
          },
          stopImmediatePropagation: function () {
            var e = this.originalEvent;
            (this.isImmediatePropagationStopped = ke),
              e && !this.isSimulated && e.stopImmediatePropagation(),
              this.stopPropagation();
          },
        }),
        C.each(
          {
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function (e) {
              var t = e.button;
              return null == e.which && Ce.test(e.type)
                ? null != e.charCode
                  ? e.charCode
                  : e.keyCode
                : !e.which && void 0 !== t && Se.test(e.type)
                ? 1 & t
                  ? 1
                  : 2 & t
                  ? 3
                  : 4 & t
                  ? 2
                  : 0
                : e.which;
            },
          },
          C.event.addProp
        ),
        C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
          C.event.special[e] = {
            setup: function () {
              return De(this, e, Ae), !1;
            },
            trigger: function () {
              return De(this, e), !0;
            },
            delegateType: t,
          };
        }),
        C.each(
          {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout",
          },
          function (e, t) {
            C.event.special[e] = {
              delegateType: t,
              bindType: t,
              handle: function (e) {
                var n,
                  r = this,
                  i = e.relatedTarget,
                  o = e.handleObj;
                return (
                  (i && (i === r || C.contains(r, i))) ||
                    ((e.type = o.origType),
                    (n = o.handler.apply(this, arguments)),
                    (e.type = t)),
                  n
                );
              },
            };
          }
        ),
        C.fn.extend({
          on: function (e, t, n, r) {
            return Ne(this, e, t, n, r);
          },
          one: function (e, t, n, r) {
            return Ne(this, e, t, n, r, 1);
          },
          off: function (e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
              return (
                (r = e.handleObj),
                C(e.delegateTarget).off(
                  r.namespace ? r.origType + "." + r.namespace : r.origType,
                  r.selector,
                  r.handler
                ),
                this
              );
            if ("object" == typeof e) {
              for (i in e) this.off(i, t, e[i]);
              return this;
            }
            return (
              (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
              !1 === n && (n = je),
              this.each(function () {
                C.event.remove(this, e, n, t);
              })
            );
          },
        });
      var qe = /<script|<style|<link/i,
        Le = /checked\s*(?:[^=]|=\s*.checked.)/i,
        He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
      function Oe(e, t) {
        return (
          (N(e, "table") &&
            N(11 !== t.nodeType ? t : t.firstChild, "tr") &&
            C(e).children("tbody")[0]) ||
          e
        );
      }
      function Pe(e) {
        return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
      }
      function Re(e) {
        return (
          "true/" === (e.type || "").slice(0, 5)
            ? (e.type = e.type.slice(5))
            : e.removeAttribute("type"),
          e
        );
      }
      function Me(e, t) {
        var n, r, i, o, s, a;
        if (1 === t.nodeType) {
          if (J.hasData(e) && (a = J.get(e).events))
            for (i in (J.remove(t, "handle events"), a))
              for (n = 0, r = a[i].length; n < r; n++)
                C.event.add(t, i, a[i][n]);
          K.hasData(e) &&
            ((o = K.access(e)), (s = C.extend({}, o)), K.set(t, s));
        }
      }
      function We(e, t) {
        var n = t.nodeName.toLowerCase();
        "input" === n && ge.test(e.type)
          ? (t.checked = e.checked)
          : ("input" !== n && "textarea" !== n) ||
            (t.defaultValue = e.defaultValue);
      }
      function Ie(e, t, n, r) {
        t = l(t);
        var i,
          o,
          s,
          a,
          u,
          c,
          f = 0,
          p = e.length,
          d = p - 1,
          h = t[0],
          g = m(h);
        if (g || (p > 1 && "string" == typeof h && !v.checkClone && Le.test(h)))
          return e.each(function (i) {
            var o = e.eq(i);
            g && (t[0] = h.call(this, i, o.html())), Ie(o, t, n, r);
          });
        if (
          p &&
          ((o = (i = Te(t, e[0].ownerDocument, !1, e, r)).firstChild),
          1 === i.childNodes.length && (i = o),
          o || r)
        ) {
          for (a = (s = C.map(xe(i, "script"), Pe)).length; f < p; f++)
            (u = i),
              f !== d &&
                ((u = C.clone(u, !0, !0)), a && C.merge(s, xe(u, "script"))),
              n.call(e[f], u, f);
          if (a)
            for (
              c = s[s.length - 1].ownerDocument, C.map(s, Re), f = 0;
              f < a;
              f++
            )
              (u = s[f]),
                me.test(u.type || "") &&
                  !J.access(u, "globalEval") &&
                  C.contains(c, u) &&
                  (u.src && "module" !== (u.type || "").toLowerCase()
                    ? C._evalUrl &&
                      !u.noModule &&
                      C._evalUrl(
                        u.src,
                        { nonce: u.nonce || u.getAttribute("nonce") },
                        c
                      )
                    : w(u.textContent.replace(He, ""), u, c));
        }
        return e;
      }
      function $e(e, t, n) {
        for (var r, i = t ? C.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
          n || 1 !== r.nodeType || C.cleanData(xe(r)),
            r.parentNode &&
              (n && se(r) && be(xe(r, "script")), r.parentNode.removeChild(r));
        return e;
      }
      C.extend({
        htmlPrefilter: function (e) {
          return e;
        },
        clone: function (e, t, n) {
          var r,
            i,
            o,
            s,
            a = e.cloneNode(!0),
            l = se(e);
          if (
            !(
              v.noCloneChecked ||
              (1 !== e.nodeType && 11 !== e.nodeType) ||
              C.isXMLDoc(e)
            )
          )
            for (s = xe(a), r = 0, i = (o = xe(e)).length; r < i; r++)
              We(o[r], s[r]);
          if (t)
            if (n)
              for (
                o = o || xe(e), s = s || xe(a), r = 0, i = o.length;
                r < i;
                r++
              )
                Me(o[r], s[r]);
            else Me(e, a);
          return (
            (s = xe(a, "script")).length > 0 && be(s, !l && xe(e, "script")), a
          );
        },
        cleanData: function (e) {
          for (
            var t, n, r, i = C.event.special, o = 0;
            void 0 !== (n = e[o]);
            o++
          )
            if (G(n)) {
              if ((t = n[J.expando])) {
                if (t.events)
                  for (r in t.events)
                    i[r] ? C.event.remove(n, r) : C.removeEvent(n, r, t.handle);
                n[J.expando] = void 0;
              }
              n[K.expando] && (n[K.expando] = void 0);
            }
        },
      }),
        C.fn.extend({
          detach: function (e) {
            return $e(this, e, !0);
          },
          remove: function (e) {
            return $e(this, e);
          },
          text: function (e) {
            return X(
              this,
              function (e) {
                return void 0 === e
                  ? C.text(this)
                  : this.empty().each(function () {
                      (1 !== this.nodeType &&
                        11 !== this.nodeType &&
                        9 !== this.nodeType) ||
                        (this.textContent = e);
                    });
              },
              null,
              e,
              arguments.length
            );
          },
          append: function () {
            return Ie(this, arguments, function (e) {
              (1 !== this.nodeType &&
                11 !== this.nodeType &&
                9 !== this.nodeType) ||
                Oe(this, e).appendChild(e);
            });
          },
          prepend: function () {
            return Ie(this, arguments, function (e) {
              if (
                1 === this.nodeType ||
                11 === this.nodeType ||
                9 === this.nodeType
              ) {
                var t = Oe(this, e);
                t.insertBefore(e, t.firstChild);
              }
            });
          },
          before: function () {
            return Ie(this, arguments, function (e) {
              this.parentNode && this.parentNode.insertBefore(e, this);
            });
          },
          after: function () {
            return Ie(this, arguments, function (e) {
              this.parentNode &&
                this.parentNode.insertBefore(e, this.nextSibling);
            });
          },
          empty: function () {
            for (var e, t = 0; null != (e = this[t]); t++)
              1 === e.nodeType &&
                (C.cleanData(xe(e, !1)), (e.textContent = ""));
            return this;
          },
          clone: function (e, t) {
            return (
              (e = null != e && e),
              (t = null == t ? e : t),
              this.map(function () {
                return C.clone(this, e, t);
              })
            );
          },
          html: function (e) {
            return X(
              this,
              function (e) {
                var t = this[0] || {},
                  n = 0,
                  r = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if (
                  "string" == typeof e &&
                  !qe.test(e) &&
                  !ye[(ve.exec(e) || ["", ""])[1].toLowerCase()]
                ) {
                  e = C.htmlPrefilter(e);
                  try {
                    for (; n < r; n++)
                      1 === (t = this[n] || {}).nodeType &&
                        (C.cleanData(xe(t, !1)), (t.innerHTML = e));
                    t = 0;
                  } catch (e) {}
                }
                t && this.empty().append(e);
              },
              null,
              e,
              arguments.length
            );
          },
          replaceWith: function () {
            var e = [];
            return Ie(
              this,
              arguments,
              function (t) {
                var n = this.parentNode;
                C.inArray(this, e) < 0 &&
                  (C.cleanData(xe(this)), n && n.replaceChild(t, this));
              },
              e
            );
          },
        }),
        C.each(
          {
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith",
          },
          function (e, t) {
            C.fn[e] = function (e) {
              for (
                var n, r = [], i = C(e), o = i.length - 1, s = 0;
                s <= o;
                s++
              )
                (n = s === o ? this : this.clone(!0)),
                  C(i[s])[t](n),
                  u.apply(r, n.get());
              return this.pushStack(r);
            };
          }
        );
      var Fe = new RegExp("^(" + ne + ")(?!px)[a-z%]+$", "i"),
        _e = function (e) {
          var t = e.ownerDocument.defaultView;
          return (t && t.opener) || (t = n), t.getComputedStyle(e);
        },
        Be = function (e, t, n) {
          var r,
            i,
            o = {};
          for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
          for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
          return r;
        },
        Xe = new RegExp(ie.join("|"), "i");
      function ze(e, t, n) {
        var r,
          i,
          o,
          s,
          a = e.style;
        return (
          (n = n || _e(e)) &&
            ("" !== (s = n.getPropertyValue(t) || n[t]) ||
              se(e) ||
              (s = C.style(e, t)),
            !v.pixelBoxStyles() &&
              Fe.test(s) &&
              Xe.test(t) &&
              ((r = a.width),
              (i = a.minWidth),
              (o = a.maxWidth),
              (a.minWidth = a.maxWidth = a.width = s),
              (s = n.width),
              (a.width = r),
              (a.minWidth = i),
              (a.maxWidth = o))),
          void 0 !== s ? s + "" : s
        );
      }
      function Ue(e, t) {
        return {
          get: function () {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get;
          },
        };
      }
      !(function () {
        function e() {
          if (c) {
            (u.style.cssText =
              "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
              (c.style.cssText =
                "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
              oe.appendChild(u).appendChild(c);
            var e = n.getComputedStyle(c);
            (r = "1%" !== e.top),
              (l = 12 === t(e.marginLeft)),
              (c.style.right = "60%"),
              (s = 36 === t(e.right)),
              (i = 36 === t(e.width)),
              (c.style.position = "absolute"),
              (o = 12 === t(c.offsetWidth / 3)),
              oe.removeChild(u),
              (c = null);
          }
        }
        function t(e) {
          return Math.round(parseFloat(e));
        }
        var r,
          i,
          o,
          s,
          a,
          l,
          u = x.createElement("div"),
          c = x.createElement("div");
        c.style &&
          ((c.style.backgroundClip = "content-box"),
          (c.cloneNode(!0).style.backgroundClip = ""),
          (v.clearCloneStyle = "content-box" === c.style.backgroundClip),
          C.extend(v, {
            boxSizingReliable: function () {
              return e(), i;
            },
            pixelBoxStyles: function () {
              return e(), s;
            },
            pixelPosition: function () {
              return e(), r;
            },
            reliableMarginLeft: function () {
              return e(), l;
            },
            scrollboxSize: function () {
              return e(), o;
            },
            reliableTrDimensions: function () {
              var e, t, r, i;
              return (
                null == a &&
                  ((e = x.createElement("table")),
                  (t = x.createElement("tr")),
                  (r = x.createElement("div")),
                  (e.style.cssText = "position:absolute;left:-11111px"),
                  (t.style.height = "1px"),
                  (r.style.height = "9px"),
                  oe.appendChild(e).appendChild(t).appendChild(r),
                  (i = n.getComputedStyle(t)),
                  (a = parseInt(i.height) > 3),
                  oe.removeChild(e)),
                a
              );
            },
          }));
      })();
      var Ye = ["Webkit", "Moz", "ms"],
        Ve = x.createElement("div").style,
        Ge = {};
      function Qe(e) {
        var t = C.cssProps[e] || Ge[e];
        return (
          t ||
          (e in Ve
            ? e
            : (Ge[e] =
                (function (e) {
                  for (
                    var t = e[0].toUpperCase() + e.slice(1), n = Ye.length;
                    n--;

                  )
                    if ((e = Ye[n] + t) in Ve) return e;
                })(e) || e))
        );
      }
      var Je = /^(none|table(?!-c[ea]).+)/,
        Ke = /^--/,
        Ze = { position: "absolute", visibility: "hidden", display: "block" },
        et = { letterSpacing: "0", fontWeight: "400" };
      function tt(e, t, n) {
        var r = re.exec(t);
        return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
      }
      function nt(e, t, n, r, i, o) {
        var s = "width" === t ? 1 : 0,
          a = 0,
          l = 0;
        if (n === (r ? "border" : "content")) return 0;
        for (; s < 4; s += 2)
          "margin" === n && (l += C.css(e, n + ie[s], !0, i)),
            r
              ? ("content" === n && (l -= C.css(e, "padding" + ie[s], !0, i)),
                "margin" !== n &&
                  (l -= C.css(e, "border" + ie[s] + "Width", !0, i)))
              : ((l += C.css(e, "padding" + ie[s], !0, i)),
                "padding" !== n
                  ? (l += C.css(e, "border" + ie[s] + "Width", !0, i))
                  : (a += C.css(e, "border" + ie[s] + "Width", !0, i)));
        return (
          !r &&
            o >= 0 &&
            (l +=
              Math.max(
                0,
                Math.ceil(
                  e["offset" + t[0].toUpperCase() + t.slice(1)] -
                    o -
                    l -
                    a -
                    0.5
                )
              ) || 0),
          l
        );
      }
      function rt(e, t, n) {
        var r = _e(e),
          i =
            (!v.boxSizingReliable() || n) &&
            "border-box" === C.css(e, "boxSizing", !1, r),
          o = i,
          s = ze(e, t, r),
          a = "offset" + t[0].toUpperCase() + t.slice(1);
        if (Fe.test(s)) {
          if (!n) return s;
          s = "auto";
        }
        return (
          ((!v.boxSizingReliable() && i) ||
            (!v.reliableTrDimensions() && N(e, "tr")) ||
            "auto" === s ||
            (!parseFloat(s) && "inline" === C.css(e, "display", !1, r))) &&
            e.getClientRects().length &&
            ((i = "border-box" === C.css(e, "boxSizing", !1, r)),
            (o = a in e) && (s = e[a])),
          (s = parseFloat(s) || 0) +
            nt(e, t, n || (i ? "border" : "content"), o, r, s) +
            "px"
        );
      }
      function it(e, t, n, r, i) {
        return new it.prototype.init(e, t, n, r, i);
      }
      C.extend({
        cssHooks: {
          opacity: {
            get: function (e, t) {
              if (t) {
                var n = ze(e, "opacity");
                return "" === n ? "1" : n;
              }
            },
          },
        },
        cssNumber: {
          animationIterationCount: !0,
          columnCount: !0,
          fillOpacity: !0,
          flexGrow: !0,
          flexShrink: !0,
          fontWeight: !0,
          gridArea: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnStart: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowStart: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
        },
        cssProps: {},
        style: function (e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i,
              o,
              s,
              a = V(t),
              l = Ke.test(t),
              u = e.style;
            if (
              (l || (t = Qe(a)),
              (s = C.cssHooks[t] || C.cssHooks[a]),
              void 0 === n)
            )
              return s && "get" in s && void 0 !== (i = s.get(e, !1, r))
                ? i
                : u[t];
            "string" === (o = typeof n) &&
              (i = re.exec(n)) &&
              i[1] &&
              ((n = ue(e, t, i)), (o = "number")),
              null != n &&
                n == n &&
                ("number" !== o ||
                  l ||
                  (n += (i && i[3]) || (C.cssNumber[a] ? "" : "px")),
                v.clearCloneStyle ||
                  "" !== n ||
                  0 !== t.indexOf("background") ||
                  (u[t] = "inherit"),
                (s && "set" in s && void 0 === (n = s.set(e, n, r))) ||
                  (l ? u.setProperty(t, n) : (u[t] = n)));
          }
        },
        css: function (e, t, n, r) {
          var i,
            o,
            s,
            a = V(t);
          return (
            Ke.test(t) || (t = Qe(a)),
            (s = C.cssHooks[t] || C.cssHooks[a]) &&
              "get" in s &&
              (i = s.get(e, !0, n)),
            void 0 === i && (i = ze(e, t, r)),
            "normal" === i && t in et && (i = et[t]),
            "" === n || n
              ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
              : i
          );
        },
      }),
        C.each(["height", "width"], function (e, t) {
          C.cssHooks[t] = {
            get: function (e, n, r) {
              if (n)
                return !Je.test(C.css(e, "display")) ||
                  (e.getClientRects().length && e.getBoundingClientRect().width)
                  ? rt(e, t, r)
                  : Be(e, Ze, function () {
                      return rt(e, t, r);
                    });
            },
            set: function (e, n, r) {
              var i,
                o = _e(e),
                s = !v.scrollboxSize() && "absolute" === o.position,
                a = (s || r) && "border-box" === C.css(e, "boxSizing", !1, o),
                l = r ? nt(e, t, r, a, o) : 0;
              return (
                a &&
                  s &&
                  (l -= Math.ceil(
                    e["offset" + t[0].toUpperCase() + t.slice(1)] -
                      parseFloat(o[t]) -
                      nt(e, t, "border", !1, o) -
                      0.5
                  )),
                l &&
                  (i = re.exec(n)) &&
                  "px" !== (i[3] || "px") &&
                  ((e.style[t] = n), (n = C.css(e, t))),
                tt(0, n, l)
              );
            },
          };
        }),
        (C.cssHooks.marginLeft = Ue(v.reliableMarginLeft, function (e, t) {
          if (t)
            return (
              (parseFloat(ze(e, "marginLeft")) ||
                e.getBoundingClientRect().left -
                  Be(e, { marginLeft: 0 }, function () {
                    return e.getBoundingClientRect().left;
                  })) + "px"
            );
        })),
        C.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
          (C.cssHooks[e + t] = {
            expand: function (n) {
              for (
                var r = 0,
                  i = {},
                  o = "string" == typeof n ? n.split(" ") : [n];
                r < 4;
                r++
              )
                i[e + ie[r] + t] = o[r] || o[r - 2] || o[0];
              return i;
            },
          }),
            "margin" !== e && (C.cssHooks[e + t].set = tt);
        }),
        C.fn.extend({
          css: function (e, t) {
            return X(
              this,
              function (e, t, n) {
                var r,
                  i,
                  o = {},
                  s = 0;
                if (Array.isArray(t)) {
                  for (r = _e(e), i = t.length; s < i; s++)
                    o[t[s]] = C.css(e, t[s], !1, r);
                  return o;
                }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t);
              },
              e,
              t,
              arguments.length > 1
            );
          },
        }),
        (C.Tween = it),
        (it.prototype = {
          constructor: it,
          init: function (e, t, n, r, i, o) {
            (this.elem = e),
              (this.prop = n),
              (this.easing = i || C.easing._default),
              (this.options = t),
              (this.start = this.now = this.cur()),
              (this.end = r),
              (this.unit = o || (C.cssNumber[n] ? "" : "px"));
          },
          cur: function () {
            var e = it.propHooks[this.prop];
            return e && e.get ? e.get(this) : it.propHooks._default.get(this);
          },
          run: function (e) {
            var t,
              n = it.propHooks[this.prop];
            return (
              this.options.duration
                ? (this.pos = t =
                    C.easing[this.easing](
                      e,
                      this.options.duration * e,
                      0,
                      1,
                      this.options.duration
                    ))
                : (this.pos = t = e),
              (this.now = (this.end - this.start) * t + this.start),
              this.options.step &&
                this.options.step.call(this.elem, this.now, this),
              n && n.set ? n.set(this) : it.propHooks._default.set(this),
              this
            );
          },
        }),
        (it.prototype.init.prototype = it.prototype),
        (it.propHooks = {
          _default: {
            get: function (e) {
              var t;
              return 1 !== e.elem.nodeType ||
                (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                ? e.elem[e.prop]
                : (t = C.css(e.elem, e.prop, "")) && "auto" !== t
                ? t
                : 0;
            },
            set: function (e) {
              C.fx.step[e.prop]
                ? C.fx.step[e.prop](e)
                : 1 !== e.elem.nodeType ||
                  (!C.cssHooks[e.prop] && null == e.elem.style[Qe(e.prop)])
                ? (e.elem[e.prop] = e.now)
                : C.style(e.elem, e.prop, e.now + e.unit);
            },
          },
        }),
        (it.propHooks.scrollTop = it.propHooks.scrollLeft =
          {
            set: function (e) {
              e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
            },
          }),
        (C.easing = {
          linear: function (e) {
            return e;
          },
          swing: function (e) {
            return 0.5 - Math.cos(e * Math.PI) / 2;
          },
          _default: "swing",
        }),
        (C.fx = it.prototype.init),
        (C.fx.step = {});
      var ot,
        st,
        at = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;
      function ut() {
        st &&
          (!1 === x.hidden && n.requestAnimationFrame
            ? n.requestAnimationFrame(ut)
            : n.setTimeout(ut, C.fx.interval),
          C.fx.tick());
      }
      function ct() {
        return (
          n.setTimeout(function () {
            ot = void 0;
          }),
          (ot = Date.now())
        );
      }
      function ft(e, t) {
        var n,
          r = 0,
          i = { height: e };
        for (t = t ? 1 : 0; r < 4; r += 2 - t)
          i["margin" + (n = ie[r])] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e), i;
      }
      function pt(e, t, n) {
        for (
          var r,
            i = (dt.tweeners[t] || []).concat(dt.tweeners["*"]),
            o = 0,
            s = i.length;
          o < s;
          o++
        )
          if ((r = i[o].call(n, t, e))) return r;
      }
      function dt(e, t, n) {
        var r,
          i,
          o = 0,
          s = dt.prefilters.length,
          a = C.Deferred().always(function () {
            delete l.elem;
          }),
          l = function () {
            if (i) return !1;
            for (
              var t = ot || ct(),
                n = Math.max(0, u.startTime + u.duration - t),
                r = 1 - (n / u.duration || 0),
                o = 0,
                s = u.tweens.length;
              o < s;
              o++
            )
              u.tweens[o].run(r);
            return (
              a.notifyWith(e, [u, r, n]),
              r < 1 && s
                ? n
                : (s || a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u]), !1)
            );
          },
          u = a.promise({
            elem: e,
            props: C.extend({}, t),
            opts: C.extend(
              !0,
              { specialEasing: {}, easing: C.easing._default },
              n
            ),
            originalProperties: t,
            originalOptions: n,
            startTime: ot || ct(),
            duration: n.duration,
            tweens: [],
            createTween: function (t, n) {
              var r = C.Tween(
                e,
                u.opts,
                t,
                n,
                u.opts.specialEasing[t] || u.opts.easing
              );
              return u.tweens.push(r), r;
            },
            stop: function (t) {
              var n = 0,
                r = t ? u.tweens.length : 0;
              if (i) return this;
              for (i = !0; n < r; n++) u.tweens[n].run(1);
              return (
                t
                  ? (a.notifyWith(e, [u, 1, 0]), a.resolveWith(e, [u, t]))
                  : a.rejectWith(e, [u, t]),
                this
              );
            },
          }),
          c = u.props;
        for (
          !(function (e, t) {
            var n, r, i, o, s;
            for (n in e)
              if (
                ((i = t[(r = V(n))]),
                (o = e[n]),
                Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                n !== r && ((e[r] = o), delete e[n]),
                (s = C.cssHooks[r]) && ("expand" in s))
              )
                for (n in ((o = s.expand(o)), delete e[r], o))
                  (n in e) || ((e[n] = o[n]), (t[n] = i));
              else t[r] = i;
          })(c, u.opts.specialEasing);
          o < s;
          o++
        )
          if ((r = dt.prefilters[o].call(u, e, c, u.opts)))
            return (
              m(r.stop) &&
                (C._queueHooks(u.elem, u.opts.queue).stop = r.stop.bind(r)),
              r
            );
        return (
          C.map(c, pt, u),
          m(u.opts.start) && u.opts.start.call(e, u),
          u
            .progress(u.opts.progress)
            .done(u.opts.done, u.opts.complete)
            .fail(u.opts.fail)
            .always(u.opts.always),
          C.fx.timer(C.extend(l, { elem: e, anim: u, queue: u.opts.queue })),
          u
        );
      }
      (C.Animation = C.extend(dt, {
        tweeners: {
          "*": [
            function (e, t) {
              var n = this.createTween(e, t);
              return ue(n.elem, e, re.exec(t), n), n;
            },
          ],
        },
        tweener: function (e, t) {
          m(e) ? ((t = e), (e = ["*"])) : (e = e.match(M));
          for (var n, r = 0, i = e.length; r < i; r++)
            (n = e[r]),
              (dt.tweeners[n] = dt.tweeners[n] || []),
              dt.tweeners[n].unshift(t);
        },
        prefilters: [
          function (e, t, n) {
            var r,
              i,
              o,
              s,
              a,
              l,
              u,
              c,
              f = "width" in t || "height" in t,
              p = this,
              d = {},
              h = e.style,
              g = e.nodeType && le(e),
              v = J.get(e, "fxshow");
            for (r in (n.queue ||
              (null == (s = C._queueHooks(e, "fx")).unqueued &&
                ((s.unqueued = 0),
                (a = s.empty.fire),
                (s.empty.fire = function () {
                  s.unqueued || a();
                })),
              s.unqueued++,
              p.always(function () {
                p.always(function () {
                  s.unqueued--, C.queue(e, "fx").length || s.empty.fire();
                });
              })),
            t))
              if (((i = t[r]), at.test(i))) {
                if (
                  (delete t[r],
                  (o = o || "toggle" === i),
                  i === (g ? "hide" : "show"))
                ) {
                  if ("show" !== i || !v || void 0 === v[r]) continue;
                  g = !0;
                }
                d[r] = (v && v[r]) || C.style(e, r);
              }
            if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(d))
              for (r in (f &&
                1 === e.nodeType &&
                ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                null == (u = v && v.display) && (u = J.get(e, "display")),
                "none" === (c = C.css(e, "display")) &&
                  (u
                    ? (c = u)
                    : (pe([e], !0),
                      (u = e.style.display || u),
                      (c = C.css(e, "display")),
                      pe([e]))),
                ("inline" === c || ("inline-block" === c && null != u)) &&
                  "none" === C.css(e, "float") &&
                  (l ||
                    (p.done(function () {
                      h.display = u;
                    }),
                    null == u &&
                      ((c = h.display), (u = "none" === c ? "" : c))),
                  (h.display = "inline-block"))),
              n.overflow &&
                ((h.overflow = "hidden"),
                p.always(function () {
                  (h.overflow = n.overflow[0]),
                    (h.overflowX = n.overflow[1]),
                    (h.overflowY = n.overflow[2]);
                })),
              (l = !1),
              d))
                l ||
                  (v
                    ? "hidden" in v && (g = v.hidden)
                    : (v = J.access(e, "fxshow", { display: u })),
                  o && (v.hidden = !g),
                  g && pe([e], !0),
                  p.done(function () {
                    for (r in (g || pe([e]), J.remove(e, "fxshow"), d))
                      C.style(e, r, d[r]);
                  })),
                  (l = pt(g ? v[r] : 0, r, p)),
                  r in v ||
                    ((v[r] = l.start), g && ((l.end = l.start), (l.start = 0)));
          },
        ],
        prefilter: function (e, t) {
          t ? dt.prefilters.unshift(e) : dt.prefilters.push(e);
        },
      })),
        (C.speed = function (e, t, n) {
          var r =
            e && "object" == typeof e
              ? C.extend({}, e)
              : {
                  complete: n || (!n && t) || (m(e) && e),
                  duration: e,
                  easing: (n && t) || (t && !m(t) && t),
                };
          return (
            C.fx.off
              ? (r.duration = 0)
              : "number" != typeof r.duration &&
                (r.duration in C.fx.speeds
                  ? (r.duration = C.fx.speeds[r.duration])
                  : (r.duration = C.fx.speeds._default)),
            (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
            (r.old = r.complete),
            (r.complete = function () {
              m(r.old) && r.old.call(this), r.queue && C.dequeue(this, r.queue);
            }),
            r
          );
        }),
        C.fn.extend({
          fadeTo: function (e, t, n, r) {
            return this.filter(le)
              .css("opacity", 0)
              .show()
              .end()
              .animate({ opacity: t }, e, n, r);
          },
          animate: function (e, t, n, r) {
            var i = C.isEmptyObject(e),
              o = C.speed(t, n, r),
              s = function () {
                var t = dt(this, C.extend({}, e), o);
                (i || J.get(this, "finish")) && t.stop(!0);
              };
            return (
              (s.finish = s),
              i || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
            );
          },
          stop: function (e, t, n) {
            var r = function (e) {
              var t = e.stop;
              delete e.stop, t(n);
            };
            return (
              "string" != typeof e && ((n = t), (t = e), (e = void 0)),
              t && this.queue(e || "fx", []),
              this.each(function () {
                var t = !0,
                  i = null != e && e + "queueHooks",
                  o = C.timers,
                  s = J.get(this);
                if (i) s[i] && s[i].stop && r(s[i]);
                else for (i in s) s[i] && s[i].stop && lt.test(i) && r(s[i]);
                for (i = o.length; i--; )
                  o[i].elem !== this ||
                    (null != e && o[i].queue !== e) ||
                    (o[i].anim.stop(n), (t = !1), o.splice(i, 1));
                (!t && n) || C.dequeue(this, e);
              })
            );
          },
          finish: function (e) {
            return (
              !1 !== e && (e = e || "fx"),
              this.each(function () {
                var t,
                  n = J.get(this),
                  r = n[e + "queue"],
                  i = n[e + "queueHooks"],
                  o = C.timers,
                  s = r ? r.length : 0;
                for (
                  n.finish = !0,
                    C.queue(this, e, []),
                    i && i.stop && i.stop.call(this, !0),
                    t = o.length;
                  t--;

                )
                  o[t].elem === this &&
                    o[t].queue === e &&
                    (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; t < s; t++)
                  r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish;
              })
            );
          },
        }),
        C.each(["toggle", "show", "hide"], function (e, t) {
          var n = C.fn[t];
          C.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e
              ? n.apply(this, arguments)
              : this.animate(ft(t, !0), e, r, i);
          };
        }),
        C.each(
          {
            slideDown: ft("show"),
            slideUp: ft("hide"),
            slideToggle: ft("toggle"),
            fadeIn: { opacity: "show" },
            fadeOut: { opacity: "hide" },
            fadeToggle: { opacity: "toggle" },
          },
          function (e, t) {
            C.fn[e] = function (e, n, r) {
              return this.animate(t, e, n, r);
            };
          }
        ),
        (C.timers = []),
        (C.fx.tick = function () {
          var e,
            t = 0,
            n = C.timers;
          for (ot = Date.now(); t < n.length; t++)
            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
          n.length || C.fx.stop(), (ot = void 0);
        }),
        (C.fx.timer = function (e) {
          C.timers.push(e), C.fx.start();
        }),
        (C.fx.interval = 13),
        (C.fx.start = function () {
          st || ((st = !0), ut());
        }),
        (C.fx.stop = function () {
          st = null;
        }),
        (C.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
        (C.fn.delay = function (e, t) {
          return (
            (e = (C.fx && C.fx.speeds[e]) || e),
            (t = t || "fx"),
            this.queue(t, function (t, r) {
              var i = n.setTimeout(t, e);
              r.stop = function () {
                n.clearTimeout(i);
              };
            })
          );
        }),
        (function () {
          var e = x.createElement("input"),
            t = x
              .createElement("select")
              .appendChild(x.createElement("option"));
          (e.type = "checkbox"),
            (v.checkOn = "" !== e.value),
            (v.optSelected = t.selected),
            ((e = x.createElement("input")).value = "t"),
            (e.type = "radio"),
            (v.radioValue = "t" === e.value);
        })();
      var ht,
        gt = C.expr.attrHandle;
      C.fn.extend({
        attr: function (e, t) {
          return X(this, C.attr, e, t, arguments.length > 1);
        },
        removeAttr: function (e) {
          return this.each(function () {
            C.removeAttr(this, e);
          });
        },
      }),
        C.extend({
          attr: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return void 0 === e.getAttribute
                ? C.prop(e, t, n)
                : ((1 === o && C.isXMLDoc(e)) ||
                    (i =
                      C.attrHooks[t.toLowerCase()] ||
                      (C.expr.match.bool.test(t) ? ht : void 0)),
                  void 0 !== n
                    ? null === n
                      ? void C.removeAttr(e, t)
                      : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e.setAttribute(t, n + ""), n)
                    : i && "get" in i && null !== (r = i.get(e, t))
                    ? r
                    : null == (r = C.find.attr(e, t))
                    ? void 0
                    : r);
          },
          attrHooks: {
            type: {
              set: function (e, t) {
                if (!v.radioValue && "radio" === t && N(e, "input")) {
                  var n = e.value;
                  return e.setAttribute("type", t), n && (e.value = n), t;
                }
              },
            },
          },
          removeAttr: function (e, t) {
            var n,
              r = 0,
              i = t && t.match(M);
            if (i && 1 === e.nodeType)
              for (; (n = i[r++]); ) e.removeAttribute(n);
          },
        }),
        (ht = {
          set: function (e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n;
          },
        }),
        C.each(C.expr.match.bool.source.match(/\w+/g), function (e, t) {
          var n = gt[t] || C.find.attr;
          gt[t] = function (e, t, r) {
            var i,
              o,
              s = t.toLowerCase();
            return (
              r ||
                ((o = gt[s]),
                (gt[s] = i),
                (i = null != n(e, t, r) ? s : null),
                (gt[s] = o)),
              i
            );
          };
        });
      var vt = /^(?:input|select|textarea|button)$/i,
        mt = /^(?:a|area)$/i;
      function yt(e) {
        return (e.match(M) || []).join(" ");
      }
      function xt(e) {
        return (e.getAttribute && e.getAttribute("class")) || "";
      }
      function bt(e) {
        return Array.isArray(e)
          ? e
          : ("string" == typeof e && e.match(M)) || [];
      }
      C.fn.extend({
        prop: function (e, t) {
          return X(this, C.prop, e, t, arguments.length > 1);
        },
        removeProp: function (e) {
          return this.each(function () {
            delete this[C.propFix[e] || e];
          });
        },
      }),
        C.extend({
          prop: function (e, t, n) {
            var r,
              i,
              o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
              return (
                (1 === o && C.isXMLDoc(e)) ||
                  ((t = C.propFix[t] || t), (i = C.propHooks[t])),
                void 0 !== n
                  ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                    ? r
                    : (e[t] = n)
                  : i && "get" in i && null !== (r = i.get(e, t))
                  ? r
                  : e[t]
              );
          },
          propHooks: {
            tabIndex: {
              get: function (e) {
                var t = C.find.attr(e, "tabindex");
                return t
                  ? parseInt(t, 10)
                  : vt.test(e.nodeName) || (mt.test(e.nodeName) && e.href)
                  ? 0
                  : -1;
              },
            },
          },
          propFix: { for: "htmlFor", class: "className" },
        }),
        v.optSelected ||
          (C.propHooks.selected = {
            get: function (e) {
              var t = e.parentNode;
              return t && t.parentNode && t.parentNode.selectedIndex, null;
            },
            set: function (e) {
              var t = e.parentNode;
              t &&
                (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
            },
          }),
        C.each(
          [
            "tabIndex",
            "readOnly",
            "maxLength",
            "cellSpacing",
            "cellPadding",
            "rowSpan",
            "colSpan",
            "useMap",
            "frameBorder",
            "contentEditable",
          ],
          function () {
            C.propFix[this.toLowerCase()] = this;
          }
        ),
        C.fn.extend({
          addClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              s,
              a,
              l = 0;
            if (m(e))
              return this.each(function (t) {
                C(this).addClass(e.call(this, t, xt(this)));
              });
            if ((t = bt(e)).length)
              for (; (n = this[l++]); )
                if (
                  ((i = xt(n)), (r = 1 === n.nodeType && " " + yt(i) + " "))
                ) {
                  for (s = 0; (o = t[s++]); )
                    r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                  i !== (a = yt(r)) && n.setAttribute("class", a);
                }
            return this;
          },
          removeClass: function (e) {
            var t,
              n,
              r,
              i,
              o,
              s,
              a,
              l = 0;
            if (m(e))
              return this.each(function (t) {
                C(this).removeClass(e.call(this, t, xt(this)));
              });
            if (!arguments.length) return this.attr("class", "");
            if ((t = bt(e)).length)
              for (; (n = this[l++]); )
                if (
                  ((i = xt(n)), (r = 1 === n.nodeType && " " + yt(i) + " "))
                ) {
                  for (s = 0; (o = t[s++]); )
                    for (; r.indexOf(" " + o + " ") > -1; )
                      r = r.replace(" " + o + " ", " ");
                  i !== (a = yt(r)) && n.setAttribute("class", a);
                }
            return this;
          },
          toggleClass: function (e, t) {
            var n = typeof e,
              r = "string" === n || Array.isArray(e);
            return "boolean" == typeof t && r
              ? t
                ? this.addClass(e)
                : this.removeClass(e)
              : m(e)
              ? this.each(function (n) {
                  C(this).toggleClass(e.call(this, n, xt(this), t), t);
                })
              : this.each(function () {
                  var t, i, o, s;
                  if (r)
                    for (i = 0, o = C(this), s = bt(e); (t = s[i++]); )
                      o.hasClass(t) ? o.removeClass(t) : o.addClass(t);
                  else
                    (void 0 !== e && "boolean" !== n) ||
                      ((t = xt(this)) && J.set(this, "__className__", t),
                      this.setAttribute &&
                        this.setAttribute(
                          "class",
                          t || !1 === e
                            ? ""
                            : J.get(this, "__className__") || ""
                        ));
                });
          },
          hasClass: function (e) {
            var t,
              n,
              r = 0;
            for (t = " " + e + " "; (n = this[r++]); )
              if (1 === n.nodeType && (" " + yt(xt(n)) + " ").indexOf(t) > -1)
                return !0;
            return !1;
          },
        });
      var wt = /\r/g;
      C.fn.extend({
        val: function (e) {
          var t,
            n,
            r,
            i = this[0];
          return arguments.length
            ? ((r = m(e)),
              this.each(function (n) {
                var i;
                1 === this.nodeType &&
                  (null == (i = r ? e.call(this, n, C(this).val()) : e)
                    ? (i = "")
                    : "number" == typeof i
                    ? (i += "")
                    : Array.isArray(i) &&
                      (i = C.map(i, function (e) {
                        return null == e ? "" : e + "";
                      })),
                  ((t =
                    C.valHooks[this.type] ||
                    C.valHooks[this.nodeName.toLowerCase()]) &&
                    "set" in t &&
                    void 0 !== t.set(this, i, "value")) ||
                    (this.value = i));
              }))
            : i
            ? (t =
                C.valHooks[i.type] || C.valHooks[i.nodeName.toLowerCase()]) &&
              "get" in t &&
              void 0 !== (n = t.get(i, "value"))
              ? n
              : "string" == typeof (n = i.value)
              ? n.replace(wt, "")
              : null == n
              ? ""
              : n
            : void 0;
        },
      }),
        C.extend({
          valHooks: {
            option: {
              get: function (e) {
                var t = C.find.attr(e, "value");
                return null != t ? t : yt(C.text(e));
              },
            },
            select: {
              get: function (e) {
                var t,
                  n,
                  r,
                  i = e.options,
                  o = e.selectedIndex,
                  s = "select-one" === e.type,
                  a = s ? null : [],
                  l = s ? o + 1 : i.length;
                for (r = o < 0 ? l : s ? o : 0; r < l; r++)
                  if (
                    ((n = i[r]).selected || r === o) &&
                    !n.disabled &&
                    (!n.parentNode.disabled || !N(n.parentNode, "optgroup"))
                  ) {
                    if (((t = C(n).val()), s)) return t;
                    a.push(t);
                  }
                return a;
              },
              set: function (e, t) {
                for (
                  var n, r, i = e.options, o = C.makeArray(t), s = i.length;
                  s--;

                )
                  ((r = i[s]).selected =
                    C.inArray(C.valHooks.option.get(r), o) > -1) && (n = !0);
                return n || (e.selectedIndex = -1), o;
              },
            },
          },
        }),
        C.each(["radio", "checkbox"], function () {
          (C.valHooks[this] = {
            set: function (e, t) {
              if (Array.isArray(t))
                return (e.checked = C.inArray(C(e).val(), t) > -1);
            },
          }),
            v.checkOn ||
              (C.valHooks[this].get = function (e) {
                return null === e.getAttribute("value") ? "on" : e.value;
              });
        }),
        (v.focusin = "onfocusin" in n);
      var Tt = /^(?:focusinfocus|focusoutblur)$/,
        Ct = function (e) {
          e.stopPropagation();
        };
      C.extend(C.event, {
        trigger: function (e, t, r, i) {
          var o,
            s,
            a,
            l,
            u,
            c,
            f,
            p,
            h = [r || x],
            g = d.call(e, "type") ? e.type : e,
            v = d.call(e, "namespace") ? e.namespace.split(".") : [];
          if (
            ((s = p = a = r = r || x),
            3 !== r.nodeType &&
              8 !== r.nodeType &&
              !Tt.test(g + C.event.triggered) &&
              (g.indexOf(".") > -1 &&
                ((v = g.split(".")), (g = v.shift()), v.sort()),
              (u = g.indexOf(":") < 0 && "on" + g),
              ((e = e[C.expando]
                ? e
                : new C.Event(g, "object" == typeof e && e)).isTrigger = i
                ? 2
                : 3),
              (e.namespace = v.join(".")),
              (e.rnamespace = e.namespace
                ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)")
                : null),
              (e.result = void 0),
              e.target || (e.target = r),
              (t = null == t ? [e] : C.makeArray(t, [e])),
              (f = C.event.special[g] || {}),
              i || !f.trigger || !1 !== f.trigger.apply(r, t)))
          ) {
            if (!i && !f.noBubble && !y(r)) {
              for (
                l = f.delegateType || g, Tt.test(l + g) || (s = s.parentNode);
                s;
                s = s.parentNode
              )
                h.push(s), (a = s);
              a === (r.ownerDocument || x) &&
                h.push(a.defaultView || a.parentWindow || n);
            }
            for (o = 0; (s = h[o++]) && !e.isPropagationStopped(); )
              (p = s),
                (e.type = o > 1 ? l : f.bindType || g),
                (c =
                  (J.get(s, "events") || Object.create(null))[e.type] &&
                  J.get(s, "handle")) && c.apply(s, t),
                (c = u && s[u]) &&
                  c.apply &&
                  G(s) &&
                  ((e.result = c.apply(s, t)),
                  !1 === e.result && e.preventDefault());
            return (
              (e.type = g),
              i ||
                e.isDefaultPrevented() ||
                (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                !G(r) ||
                (u &&
                  m(r[g]) &&
                  !y(r) &&
                  ((a = r[u]) && (r[u] = null),
                  (C.event.triggered = g),
                  e.isPropagationStopped() && p.addEventListener(g, Ct),
                  r[g](),
                  e.isPropagationStopped() && p.removeEventListener(g, Ct),
                  (C.event.triggered = void 0),
                  a && (r[u] = a))),
              e.result
            );
          }
        },
        simulate: function (e, t, n) {
          var r = C.extend(new C.Event(), n, { type: e, isSimulated: !0 });
          C.event.trigger(r, null, t);
        },
      }),
        C.fn.extend({
          trigger: function (e, t) {
            return this.each(function () {
              C.event.trigger(e, t, this);
            });
          },
          triggerHandler: function (e, t) {
            var n = this[0];
            if (n) return C.event.trigger(e, t, n, !0);
          },
        }),
        v.focusin ||
          C.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
            var n = function (e) {
              C.event.simulate(t, e.target, C.event.fix(e));
            };
            C.event.special[t] = {
              setup: function () {
                var r = this.ownerDocument || this.document || this,
                  i = J.access(r, t);
                i || r.addEventListener(e, n, !0), J.access(r, t, (i || 0) + 1);
              },
              teardown: function () {
                var r = this.ownerDocument || this.document || this,
                  i = J.access(r, t) - 1;
                i
                  ? J.access(r, t, i)
                  : (r.removeEventListener(e, n, !0), J.remove(r, t));
              },
            };
          });
      var St = n.location,
        Et = { guid: Date.now() },
        kt = /\?/;
      C.parseXML = function (e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
          t = new n.DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }
        return (
          (t && !t.getElementsByTagName("parsererror").length) ||
            C.error("Invalid XML: " + e),
          t
        );
      };
      var jt = /\[\]$/,
        At = /\r?\n/g,
        Nt = /^(?:submit|button|image|reset|file)$/i,
        Dt = /^(?:input|select|textarea|keygen)/i;
      function qt(e, t, n, r) {
        var i;
        if (Array.isArray(t))
          C.each(t, function (t, i) {
            n || jt.test(e)
              ? r(e, i)
              : qt(
                  e + "[" + ("object" == typeof i && null != i ? t : "") + "]",
                  i,
                  n,
                  r
                );
          });
        else if (n || "object" !== T(t)) r(e, t);
        else for (i in t) qt(e + "[" + i + "]", t[i], n, r);
      }
      (C.param = function (e, t) {
        var n,
          r = [],
          i = function (e, t) {
            var n = m(t) ? t() : t;
            r[r.length] =
              encodeURIComponent(e) +
              "=" +
              encodeURIComponent(null == n ? "" : n);
          };
        if (null == e) return "";
        if (Array.isArray(e) || (e.jquery && !C.isPlainObject(e)))
          C.each(e, function () {
            i(this.name, this.value);
          });
        else for (n in e) qt(n, e[n], t, i);
        return r.join("&");
      }),
        C.fn.extend({
          serialize: function () {
            return C.param(this.serializeArray());
          },
          serializeArray: function () {
            return this.map(function () {
              var e = C.prop(this, "elements");
              return e ? C.makeArray(e) : this;
            })
              .filter(function () {
                var e = this.type;
                return (
                  this.name &&
                  !C(this).is(":disabled") &&
                  Dt.test(this.nodeName) &&
                  !Nt.test(e) &&
                  (this.checked || !ge.test(e))
                );
              })
              .map(function (e, t) {
                var n = C(this).val();
                return null == n
                  ? null
                  : Array.isArray(n)
                  ? C.map(n, function (e) {
                      return { name: t.name, value: e.replace(At, "\r\n") };
                    })
                  : { name: t.name, value: n.replace(At, "\r\n") };
              })
              .get();
          },
        });
      var Lt = /%20/g,
        Ht = /#.*$/,
        Ot = /([?&])_=[^&]*/,
        Pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Rt = /^(?:GET|HEAD)$/,
        Mt = /^\/\//,
        Wt = {},
        It = {},
        $t = "*/".concat("*"),
        Ft = x.createElement("a");
      function _t(e) {
        return function (t, n) {
          "string" != typeof t && ((n = t), (t = "*"));
          var r,
            i = 0,
            o = t.toLowerCase().match(M) || [];
          if (m(n))
            for (; (r = o[i++]); )
              "+" === r[0]
                ? ((r = r.slice(1) || "*"), (e[r] = e[r] || []).unshift(n))
                : (e[r] = e[r] || []).push(n);
        };
      }
      function Bt(e, t, n, r) {
        var i = {},
          o = e === It;
        function s(a) {
          var l;
          return (
            (i[a] = !0),
            C.each(e[a] || [], function (e, a) {
              var u = a(t, n, r);
              return "string" != typeof u || o || i[u]
                ? o
                  ? !(l = u)
                  : void 0
                : (t.dataTypes.unshift(u), s(u), !1);
            }),
            l
          );
        }
        return s(t.dataTypes[0]) || (!i["*"] && s("*"));
      }
      function Xt(e, t) {
        var n,
          r,
          i = C.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        return r && C.extend(!0, e, r), e;
      }
      (Ft.href = St.href),
        C.extend({
          active: 0,
          lastModified: {},
          etag: {},
          ajaxSettings: {
            url: St.href,
            type: "GET",
            isLocal:
              /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                St.protocol
              ),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
              "*": $t,
              text: "text/plain",
              html: "text/html",
              xml: "application/xml, text/xml",
              json: "application/json, text/javascript",
            },
            contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
            responseFields: {
              xml: "responseXML",
              text: "responseText",
              json: "responseJSON",
            },
            converters: {
              "* text": String,
              "text html": !0,
              "text json": JSON.parse,
              "text xml": C.parseXML,
            },
            flatOptions: { url: !0, context: !0 },
          },
          ajaxSetup: function (e, t) {
            return t ? Xt(Xt(e, C.ajaxSettings), t) : Xt(C.ajaxSettings, e);
          },
          ajaxPrefilter: _t(Wt),
          ajaxTransport: _t(It),
          ajax: function (e, t) {
            "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
            var r,
              i,
              o,
              s,
              a,
              l,
              u,
              c,
              f,
              p,
              d = C.ajaxSetup({}, t),
              h = d.context || d,
              g = d.context && (h.nodeType || h.jquery) ? C(h) : C.event,
              v = C.Deferred(),
              m = C.Callbacks("once memory"),
              y = d.statusCode || {},
              b = {},
              w = {},
              T = "canceled",
              S = {
                readyState: 0,
                getResponseHeader: function (e) {
                  var t;
                  if (u) {
                    if (!s)
                      for (s = {}; (t = Pt.exec(o)); )
                        s[t[1].toLowerCase() + " "] = (
                          s[t[1].toLowerCase() + " "] || []
                        ).concat(t[2]);
                    t = s[e.toLowerCase() + " "];
                  }
                  return null == t ? null : t.join(", ");
                },
                getAllResponseHeaders: function () {
                  return u ? o : null;
                },
                setRequestHeader: function (e, t) {
                  return (
                    null == u &&
                      ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e),
                      (b[e] = t)),
                    this
                  );
                },
                overrideMimeType: function (e) {
                  return null == u && (d.mimeType = e), this;
                },
                statusCode: function (e) {
                  var t;
                  if (e)
                    if (u) S.always(e[S.status]);
                    else for (t in e) y[t] = [y[t], e[t]];
                  return this;
                },
                abort: function (e) {
                  var t = e || T;
                  return r && r.abort(t), E(0, t), this;
                },
              };
            if (
              (v.promise(S),
              (d.url = ((e || d.url || St.href) + "").replace(
                Mt,
                St.protocol + "//"
              )),
              (d.type = t.method || t.type || d.method || d.type),
              (d.dataTypes = (d.dataType || "*").toLowerCase().match(M) || [
                "",
              ]),
              null == d.crossDomain)
            ) {
              l = x.createElement("a");
              try {
                (l.href = d.url),
                  (l.href = l.href),
                  (d.crossDomain =
                    Ft.protocol + "//" + Ft.host != l.protocol + "//" + l.host);
              } catch (e) {
                d.crossDomain = !0;
              }
            }
            if (
              (d.data &&
                d.processData &&
                "string" != typeof d.data &&
                (d.data = C.param(d.data, d.traditional)),
              Bt(Wt, d, t, S),
              u)
            )
              return S;
            for (f in ((c = C.event && d.global) &&
              0 == C.active++ &&
              C.event.trigger("ajaxStart"),
            (d.type = d.type.toUpperCase()),
            (d.hasContent = !Rt.test(d.type)),
            (i = d.url.replace(Ht, "")),
            d.hasContent
              ? d.data &&
                d.processData &&
                0 ===
                  (d.contentType || "").indexOf(
                    "application/x-www-form-urlencoded"
                  ) &&
                (d.data = d.data.replace(Lt, "+"))
              : ((p = d.url.slice(i.length)),
                d.data &&
                  (d.processData || "string" == typeof d.data) &&
                  ((i += (kt.test(i) ? "&" : "?") + d.data), delete d.data),
                !1 === d.cache &&
                  ((i = i.replace(Ot, "$1")),
                  (p = (kt.test(i) ? "&" : "?") + "_=" + Et.guid++ + p)),
                (d.url = i + p)),
            d.ifModified &&
              (C.lastModified[i] &&
                S.setRequestHeader("If-Modified-Since", C.lastModified[i]),
              C.etag[i] && S.setRequestHeader("If-None-Match", C.etag[i])),
            ((d.data && d.hasContent && !1 !== d.contentType) ||
              t.contentType) &&
              S.setRequestHeader("Content-Type", d.contentType),
            S.setRequestHeader(
              "Accept",
              d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                ? d.accepts[d.dataTypes[0]] +
                    ("*" !== d.dataTypes[0] ? ", " + $t + "; q=0.01" : "")
                : d.accepts["*"]
            ),
            d.headers))
              S.setRequestHeader(f, d.headers[f]);
            if (d.beforeSend && (!1 === d.beforeSend.call(h, S, d) || u))
              return S.abort();
            if (
              ((T = "abort"),
              m.add(d.complete),
              S.done(d.success),
              S.fail(d.error),
              (r = Bt(It, d, t, S)))
            ) {
              if (((S.readyState = 1), c && g.trigger("ajaxSend", [S, d]), u))
                return S;
              d.async &&
                d.timeout > 0 &&
                (a = n.setTimeout(function () {
                  S.abort("timeout");
                }, d.timeout));
              try {
                (u = !1), r.send(b, E);
              } catch (e) {
                if (u) throw e;
                E(-1, e);
              }
            } else E(-1, "No Transport");
            function E(e, t, s, l) {
              var f,
                p,
                x,
                b,
                w,
                T = t;
              u ||
                ((u = !0),
                a && n.clearTimeout(a),
                (r = void 0),
                (o = l || ""),
                (S.readyState = e > 0 ? 4 : 0),
                (f = (e >= 200 && e < 300) || 304 === e),
                s &&
                  (b = (function (e, t, n) {
                    for (
                      var r, i, o, s, a = e.contents, l = e.dataTypes;
                      "*" === l[0];

                    )
                      l.shift(),
                        void 0 === r &&
                          (r =
                            e.mimeType || t.getResponseHeader("Content-Type"));
                    if (r)
                      for (i in a)
                        if (a[i] && a[i].test(r)) {
                          l.unshift(i);
                          break;
                        }
                    if (l[0] in n) o = l[0];
                    else {
                      for (i in n) {
                        if (!l[0] || e.converters[i + " " + l[0]]) {
                          o = i;
                          break;
                        }
                        s || (s = i);
                      }
                      o = o || s;
                    }
                    if (o) return o !== l[0] && l.unshift(o), n[o];
                  })(d, S, s)),
                !f &&
                  C.inArray("script", d.dataTypes) > -1 &&
                  (d.converters["text script"] = function () {}),
                (b = (function (e, t, n, r) {
                  var i,
                    o,
                    s,
                    a,
                    l,
                    u = {},
                    c = e.dataTypes.slice();
                  if (c[1])
                    for (s in e.converters)
                      u[s.toLowerCase()] = e.converters[s];
                  for (o = c.shift(); o; )
                    if (
                      (e.responseFields[o] && (n[e.responseFields[o]] = t),
                      !l &&
                        r &&
                        e.dataFilter &&
                        (t = e.dataFilter(t, e.dataType)),
                      (l = o),
                      (o = c.shift()))
                    )
                      if ("*" === o) o = l;
                      else if ("*" !== l && l !== o) {
                        if (!(s = u[l + " " + o] || u["* " + o]))
                          for (i in u)
                            if (
                              (a = i.split(" "))[1] === o &&
                              (s = u[l + " " + a[0]] || u["* " + a[0]])
                            ) {
                              !0 === s
                                ? (s = u[i])
                                : !0 !== u[i] && ((o = a[0]), c.unshift(a[1]));
                              break;
                            }
                        if (!0 !== s)
                          if (s && e.throws) t = s(t);
                          else
                            try {
                              t = s(t);
                            } catch (e) {
                              return {
                                state: "parsererror",
                                error: s
                                  ? e
                                  : "No conversion from " + l + " to " + o,
                              };
                            }
                      }
                  return { state: "success", data: t };
                })(d, b, S, f)),
                f
                  ? (d.ifModified &&
                      ((w = S.getResponseHeader("Last-Modified")) &&
                        (C.lastModified[i] = w),
                      (w = S.getResponseHeader("etag")) && (C.etag[i] = w)),
                    204 === e || "HEAD" === d.type
                      ? (T = "nocontent")
                      : 304 === e
                      ? (T = "notmodified")
                      : ((T = b.state), (p = b.data), (f = !(x = b.error))))
                  : ((x = T), (!e && T) || ((T = "error"), e < 0 && (e = 0))),
                (S.status = e),
                (S.statusText = (t || T) + ""),
                f ? v.resolveWith(h, [p, T, S]) : v.rejectWith(h, [S, T, x]),
                S.statusCode(y),
                (y = void 0),
                c &&
                  g.trigger(f ? "ajaxSuccess" : "ajaxError", [S, d, f ? p : x]),
                m.fireWith(h, [S, T]),
                c &&
                  (g.trigger("ajaxComplete", [S, d]),
                  --C.active || C.event.trigger("ajaxStop")));
            }
            return S;
          },
          getJSON: function (e, t, n) {
            return C.get(e, t, n, "json");
          },
          getScript: function (e, t) {
            return C.get(e, void 0, t, "script");
          },
        }),
        C.each(["get", "post"], function (e, t) {
          C[t] = function (e, n, r, i) {
            return (
              m(n) && ((i = i || r), (r = n), (n = void 0)),
              C.ajax(
                C.extend(
                  { url: e, type: t, dataType: i, data: n, success: r },
                  C.isPlainObject(e) && e
                )
              )
            );
          };
        }),
        C.ajaxPrefilter(function (e) {
          var t;
          for (t in e.headers)
            "content-type" === t.toLowerCase() &&
              (e.contentType = e.headers[t] || "");
        }),
        (C._evalUrl = function (e, t, n) {
          return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            converters: { "text script": function () {} },
            dataFilter: function (e) {
              C.globalEval(e, t, n);
            },
          });
        }),
        C.fn.extend({
          wrapAll: function (e) {
            var t;
            return (
              this[0] &&
                (m(e) && (e = e.call(this[0])),
                (t = C(e, this[0].ownerDocument).eq(0).clone(!0)),
                this[0].parentNode && t.insertBefore(this[0]),
                t
                  .map(function () {
                    for (var e = this; e.firstElementChild; )
                      e = e.firstElementChild;
                    return e;
                  })
                  .append(this)),
              this
            );
          },
          wrapInner: function (e) {
            return m(e)
              ? this.each(function (t) {
                  C(this).wrapInner(e.call(this, t));
                })
              : this.each(function () {
                  var t = C(this),
                    n = t.contents();
                  n.length ? n.wrapAll(e) : t.append(e);
                });
          },
          wrap: function (e) {
            var t = m(e);
            return this.each(function (n) {
              C(this).wrapAll(t ? e.call(this, n) : e);
            });
          },
          unwrap: function (e) {
            return (
              this.parent(e)
                .not("body")
                .each(function () {
                  C(this).replaceWith(this.childNodes);
                }),
              this
            );
          },
        }),
        (C.expr.pseudos.hidden = function (e) {
          return !C.expr.pseudos.visible(e);
        }),
        (C.expr.pseudos.visible = function (e) {
          return !!(
            e.offsetWidth ||
            e.offsetHeight ||
            e.getClientRects().length
          );
        }),
        (C.ajaxSettings.xhr = function () {
          try {
            return new n.XMLHttpRequest();
          } catch (e) {}
        });
      var zt = { 0: 200, 1223: 204 },
        Ut = C.ajaxSettings.xhr();
      (v.cors = !!Ut && "withCredentials" in Ut),
        (v.ajax = Ut = !!Ut),
        C.ajaxTransport(function (e) {
          var t, r;
          if (v.cors || (Ut && !e.crossDomain))
            return {
              send: function (i, o) {
                var s,
                  a = e.xhr();
                if (
                  (a.open(e.type, e.url, e.async, e.username, e.password),
                  e.xhrFields)
                )
                  for (s in e.xhrFields) a[s] = e.xhrFields[s];
                for (s in (e.mimeType &&
                  a.overrideMimeType &&
                  a.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  i["X-Requested-With"] ||
                  (i["X-Requested-With"] = "XMLHttpRequest"),
                i))
                  a.setRequestHeader(s, i[s]);
                (t = function (e) {
                  return function () {
                    t &&
                      ((t =
                        r =
                        a.onload =
                        a.onerror =
                        a.onabort =
                        a.ontimeout =
                        a.onreadystatechange =
                          null),
                      "abort" === e
                        ? a.abort()
                        : "error" === e
                        ? "number" != typeof a.status
                          ? o(0, "error")
                          : o(a.status, a.statusText)
                        : o(
                            zt[a.status] || a.status,
                            a.statusText,
                            "text" !== (a.responseType || "text") ||
                              "string" != typeof a.responseText
                              ? { binary: a.response }
                              : { text: a.responseText },
                            a.getAllResponseHeaders()
                          ));
                  };
                }),
                  (a.onload = t()),
                  (r = a.onerror = a.ontimeout = t("error")),
                  void 0 !== a.onabort
                    ? (a.onabort = r)
                    : (a.onreadystatechange = function () {
                        4 === a.readyState &&
                          n.setTimeout(function () {
                            t && r();
                          });
                      }),
                  (t = t("abort"));
                try {
                  a.send((e.hasContent && e.data) || null);
                } catch (e) {
                  if (t) throw e;
                }
              },
              abort: function () {
                t && t();
              },
            };
        }),
        C.ajaxPrefilter(function (e) {
          e.crossDomain && (e.contents.script = !1);
        }),
        C.ajaxSetup({
          accepts: {
            script:
              "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
          },
          contents: { script: /\b(?:java|ecma)script\b/ },
          converters: {
            "text script": function (e) {
              return C.globalEval(e), e;
            },
          },
        }),
        C.ajaxPrefilter("script", function (e) {
          void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET");
        }),
        C.ajaxTransport("script", function (e) {
          var t, n;
          if (e.crossDomain || e.scriptAttrs)
            return {
              send: function (r, i) {
                (t = C("<script>")
                  .attr(e.scriptAttrs || {})
                  .prop({ charset: e.scriptCharset, src: e.url })
                  .on(
                    "load error",
                    (n = function (e) {
                      t.remove(),
                        (n = null),
                        e && i("error" === e.type ? 404 : 200, e.type);
                    })
                  )),
                  x.head.appendChild(t[0]);
              },
              abort: function () {
                n && n();
              },
            };
        });
      var Yt,
        Vt = [],
        Gt = /(=)\?(?=&|$)|\?\?/;
      C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
          var e = Vt.pop() || C.expando + "_" + Et.guid++;
          return (this[e] = !0), e;
        },
      }),
        C.ajaxPrefilter("json jsonp", function (e, t, r) {
          var i,
            o,
            s,
            a =
              !1 !== e.jsonp &&
              (Gt.test(e.url)
                ? "url"
                : "string" == typeof e.data &&
                  0 ===
                    (e.contentType || "").indexOf(
                      "application/x-www-form-urlencoded"
                    ) &&
                  Gt.test(e.data) &&
                  "data");
          if (a || "jsonp" === e.dataTypes[0])
            return (
              (i = e.jsonpCallback =
                m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
              a
                ? (e[a] = e[a].replace(Gt, "$1" + i))
                : !1 !== e.jsonp &&
                  (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
              (e.converters["script json"] = function () {
                return s || C.error(i + " was not called"), s[0];
              }),
              (e.dataTypes[0] = "json"),
              (o = n[i]),
              (n[i] = function () {
                s = arguments;
              }),
              r.always(function () {
                void 0 === o ? C(n).removeProp(i) : (n[i] = o),
                  e[i] && ((e.jsonpCallback = t.jsonpCallback), Vt.push(i)),
                  s && m(o) && o(s[0]),
                  (s = o = void 0);
              }),
              "script"
            );
        }),
        (v.createHTMLDocument =
          (((Yt = x.implementation.createHTMLDocument("").body).innerHTML =
            "<form></form><form></form>"),
          2 === Yt.childNodes.length)),
        (C.parseHTML = function (e, t, n) {
          return "string" != typeof e
            ? []
            : ("boolean" == typeof t && ((n = t), (t = !1)),
              t ||
                (v.createHTMLDocument
                  ? (((r = (t =
                      x.implementation.createHTMLDocument("")).createElement(
                      "base"
                    )).href = x.location.href),
                    t.head.appendChild(r))
                  : (t = x)),
              (o = !n && []),
              (i = D.exec(e))
                ? [t.createElement(i[1])]
                : ((i = Te([e], t, o)),
                  o && o.length && C(o).remove(),
                  C.merge([], i.childNodes)));
          var r, i, o;
        }),
        (C.fn.load = function (e, t, n) {
          var r,
            i,
            o,
            s = this,
            a = e.indexOf(" ");
          return (
            a > -1 && ((r = yt(e.slice(a))), (e = e.slice(0, a))),
            m(t)
              ? ((n = t), (t = void 0))
              : t && "object" == typeof t && (i = "POST"),
            s.length > 0 &&
              C.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
                .done(function (e) {
                  (o = arguments),
                    s.html(r ? C("<div>").append(C.parseHTML(e)).find(r) : e);
                })
                .always(
                  n &&
                    function (e, t) {
                      s.each(function () {
                        n.apply(this, o || [e.responseText, t, e]);
                      });
                    }
                ),
            this
          );
        }),
        (C.expr.pseudos.animated = function (e) {
          return C.grep(C.timers, function (t) {
            return e === t.elem;
          }).length;
        }),
        (C.offset = {
          setOffset: function (e, t, n) {
            var r,
              i,
              o,
              s,
              a,
              l,
              u = C.css(e, "position"),
              c = C(e),
              f = {};
            "static" === u && (e.style.position = "relative"),
              (a = c.offset()),
              (o = C.css(e, "top")),
              (l = C.css(e, "left")),
              ("absolute" === u || "fixed" === u) &&
              (o + l).indexOf("auto") > -1
                ? ((s = (r = c.position()).top), (i = r.left))
                : ((s = parseFloat(o) || 0), (i = parseFloat(l) || 0)),
              m(t) && (t = t.call(e, n, C.extend({}, a))),
              null != t.top && (f.top = t.top - a.top + s),
              null != t.left && (f.left = t.left - a.left + i),
              "using" in t
                ? t.using.call(e, f)
                : ("number" == typeof f.top && (f.top += "px"),
                  "number" == typeof f.left && (f.left += "px"),
                  c.css(f));
          },
        }),
        C.fn.extend({
          offset: function (e) {
            if (arguments.length)
              return void 0 === e
                ? this
                : this.each(function (t) {
                    C.offset.setOffset(this, e, t);
                  });
            var t,
              n,
              r = this[0];
            return r
              ? r.getClientRects().length
                ? ((t = r.getBoundingClientRect()),
                  (n = r.ownerDocument.defaultView),
                  { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                : { top: 0, left: 0 }
              : void 0;
          },
          position: function () {
            if (this[0]) {
              var e,
                t,
                n,
                r = this[0],
                i = { top: 0, left: 0 };
              if ("fixed" === C.css(r, "position"))
                t = r.getBoundingClientRect();
              else {
                for (
                  t = this.offset(),
                    n = r.ownerDocument,
                    e = r.offsetParent || n.documentElement;
                  e &&
                  (e === n.body || e === n.documentElement) &&
                  "static" === C.css(e, "position");

                )
                  e = e.parentNode;
                e &&
                  e !== r &&
                  1 === e.nodeType &&
                  (((i = C(e).offset()).top += C.css(e, "borderTopWidth", !0)),
                  (i.left += C.css(e, "borderLeftWidth", !0)));
              }
              return {
                top: t.top - i.top - C.css(r, "marginTop", !0),
                left: t.left - i.left - C.css(r, "marginLeft", !0),
              };
            }
          },
          offsetParent: function () {
            return this.map(function () {
              for (
                var e = this.offsetParent;
                e && "static" === C.css(e, "position");

              )
                e = e.offsetParent;
              return e || oe;
            });
          },
        }),
        C.each(
          { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
          function (e, t) {
            var n = "pageYOffset" === t;
            C.fn[e] = function (r) {
              return X(
                this,
                function (e, r, i) {
                  var o;
                  if (
                    (y(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView),
                    void 0 === i)
                  )
                    return o ? o[t] : e[r];
                  o
                    ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset)
                    : (e[r] = i);
                },
                e,
                r,
                arguments.length
              );
            };
          }
        ),
        C.each(["top", "left"], function (e, t) {
          C.cssHooks[t] = Ue(v.pixelPosition, function (e, n) {
            if (n)
              return (n = ze(e, t)), Fe.test(n) ? C(e).position()[t] + "px" : n;
          });
        }),
        C.each({ Height: "height", Width: "width" }, function (e, t) {
          C.each(
            { padding: "inner" + e, content: t, "": "outer" + e },
            function (n, r) {
              C.fn[r] = function (i, o) {
                var s = arguments.length && (n || "boolean" != typeof i),
                  a = n || (!0 === i || !0 === o ? "margin" : "border");
                return X(
                  this,
                  function (t, n, i) {
                    var o;
                    return y(t)
                      ? 0 === r.indexOf("outer")
                        ? t["inner" + e]
                        : t.document.documentElement["client" + e]
                      : 9 === t.nodeType
                      ? ((o = t.documentElement),
                        Math.max(
                          t.body["scroll" + e],
                          o["scroll" + e],
                          t.body["offset" + e],
                          o["offset" + e],
                          o["client" + e]
                        ))
                      : void 0 === i
                      ? C.css(t, n, a)
                      : C.style(t, n, i, a);
                  },
                  t,
                  s ? i : void 0,
                  s
                );
              };
            }
          );
        }),
        C.each(
          [
            "ajaxStart",
            "ajaxStop",
            "ajaxComplete",
            "ajaxError",
            "ajaxSuccess",
            "ajaxSend",
          ],
          function (e, t) {
            C.fn[t] = function (e) {
              return this.on(t, e);
            };
          }
        ),
        C.fn.extend({
          bind: function (e, t, n) {
            return this.on(e, null, t, n);
          },
          unbind: function (e, t) {
            return this.off(e, null, t);
          },
          delegate: function (e, t, n, r) {
            return this.on(t, e, n, r);
          },
          undelegate: function (e, t, n) {
            return 1 === arguments.length
              ? this.off(e, "**")
              : this.off(t, e || "**", n);
          },
          hover: function (e, t) {
            return this.mouseenter(e).mouseleave(t || e);
          },
        }),
        C.each(
          "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
            " "
          ),
          function (e, t) {
            C.fn[t] = function (e, n) {
              return arguments.length > 0
                ? this.on(t, null, e, n)
                : this.trigger(t);
            };
          }
        );
      var Qt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
      (C.proxy = function (e, t) {
        var n, r, i;
        if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
          return (
            (r = a.call(arguments, 2)),
            ((i = function () {
              return e.apply(t || this, r.concat(a.call(arguments)));
            }).guid = e.guid =
              e.guid || C.guid++),
            i
          );
      }),
        (C.holdReady = function (e) {
          e ? C.readyWait++ : C.ready(!0);
        }),
        (C.isArray = Array.isArray),
        (C.parseJSON = JSON.parse),
        (C.nodeName = N),
        (C.isFunction = m),
        (C.isWindow = y),
        (C.camelCase = V),
        (C.type = T),
        (C.now = Date.now),
        (C.isNumeric = function (e) {
          var t = C.type(e);
          return (
            ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
          );
        }),
        (C.trim = function (e) {
          return null == e ? "" : (e + "").replace(Qt, "");
        }),
        void 0 ===
          (r = function () {
            return C;
          }.apply(t, [])) || (e.exports = r);
      var Jt = n.jQuery,
        Kt = n.$;
      return (
        (C.noConflict = function (e) {
          return (
            n.$ === C && (n.$ = Kt), e && n.jQuery === C && (n.jQuery = Jt), C
          );
        }),
        void 0 === i && (n.jQuery = n.$ = C),
        C
      );
    });
  },
  ,
  function (e, t, n) {
    "use strict";
    (function (e) {
      n(8);
      t.a = () => {
        e(".project-wrapper__image a div").tilt({ maxTilt: 3 });
      };
    }.call(this, n(0)));
  },
  function (e, t, n) {
    "use strict";
    var r = function (e, t) {
      return Object.assign({}, t, e);
    };
    t.a = function () {
      const e = {
        easing: "cubic-bezier(0.5, 0, 0, 1)",
        distance: "30px",
        duration: 1e3,
        desktop: !0,
        mobile: !0,
      };
      ScrollReveal().reveal(
        ".section-title",
        r({ delay: 300, distance: "0px", origin: "bottom" }, e)
      ),
        ScrollReveal().reveal(
          ".hero-title",
          r(
            { delay: 500, origin: window.innerWidth > 768 ? "left" : "bottom" },
            e
          )
        ),
        ScrollReveal().reveal(
          ".name",
          r(
            { delay: 500, origin: window.innerWidth > 768 ? "left" : "bottom" },
            e
          )
        ),
        ScrollReveal().reveal(
          ".timeline",
          r(
            { delay: 500, origin: window.innerWidth > 768 ? "left" : "bottom" },
            e
          )
        ),
        ScrollReveal().reveal(
          ".timeline2",
          r(
            { delay: 500, origin: window.innerWidth > 768 ? "left" : "bottom" },
            e
          )
        ),
        ScrollReveal().reveal(
          ".skills-content",
          r(
            { delay: 500, origin: window.innerWidth > 768 ? "left" : "bottom" },
            e
          )
        ),
        ScrollReveal().reveal(
          ".communities-content",
          r(
            { delay: 500, origin: window.innerWidth > 768 ? "left" : "bottom" },
            e
          )
        ),
        ScrollReveal().reveal(
          ".hero-content",
          r(
            { delay: 500, origin: window.innerWidth > 768 ? "left" : "bottom" },
            e
          )
        ),
        ScrollReveal().reveal(
          ".hero-cta",
          r(
            { delay: 1e3, origin: window.innerWidth > 768 ? "left" : "bottom" },
            e
          )
        ),
        ScrollReveal().reveal(
          ".profile-img",
          r(
            { delay: 500, origin: window.innerWidth > 768 ? "left" : "bottom" },
            e
          )
        ),
        ScrollReveal().reveal(
          ".about-wrapper__image",
          r({ delay: 600, origin: "bottom" }, e)
        ),
        ScrollReveal().reveal(
          ".about-wrapper__info",
          r(
            { delay: 1e3, origin: window.innerWidth > 768 ? "left" : "bottom" },
            e
          )
        ),
        ScrollReveal().reveal(
          ".project-wrapper__text",
          r(
            { delay: 500, origin: window.innerWidth > 768 ? "left" : "bottom" },
            e
          )
        ),
        ScrollReveal().reveal(
          ".project-wrapper__image",
          r(
            {
              delay: 1e3,
              origin: window.innerWidth > 768 ? "right" : "bottom",
            },
            e
          )
        ),
        ScrollReveal().reveal(
          ".blog-content",
          r(
            {
              delay: 1e3,
              origin: window.innerWidth > 768 ? "right" : "bottom",
            },
            e
          )
        ),
        ScrollReveal().reveal(
          ".contact-wrapper",
          r({ delay: 800, origin: "bottom" }, e)
        );
    };
  },
  ,
  ,
  ,
  function (e, t, n) {
    "use strict";
    n.r(t),
      function (e) {
        var t = n(2),
          r = n(3);
        n(9);
        e('a[href^="#"]').on("click", function (t) {
          var n = e(this.getAttribute("href"));
          n.length &&
            (t.preventDefault(),
            e("html, body").stop().animate({ scrollTop: n.offset().top }, 1e3));
        }),
          Object(r.a)(),
          Object(t.a)();
      }.call(this, n(0));
  },
  function (e, t, n) {
    var r, i, o;
    (i = [n(0)]),
      void 0 ===
        (o =
          "function" ==
          typeof (r = function (e) {
            return (
              (e.fn.tilt = function (t) {
                const n = function () {
                    this.ticking ||
                      (requestAnimationFrame(c.bind(this)),
                      (this.ticking = !0));
                  },
                  r = function () {
                    e(this).on("mousemove", a),
                      e(this).on("mouseenter", o),
                      this.settings.reset && e(this).on("mouseleave", l),
                      this.settings.glare &&
                        e(window).on("resize", p.bind(this));
                  },
                  i = function () {
                    void 0 !== this.timeout && clearTimeout(this.timeout),
                      e(this).css({
                        transition: `${this.settings.speed}ms ${this.settings.easing}`,
                      }),
                      this.settings.glare &&
                        this.glareElement.css({
                          transition: `opacity ${this.settings.speed}ms ${this.settings.easing}`,
                        }),
                      (this.timeout = setTimeout(() => {
                        e(this).css({ transition: "" }),
                          this.settings.glare &&
                            this.glareElement.css({ transition: "" });
                      }, this.settings.speed));
                  },
                  o = function (t) {
                    (this.ticking = !1),
                      e(this).css({ "will-change": "transform" }),
                      i.call(this),
                      e(this).trigger("tilt.mouseEnter");
                  },
                  s = function (t) {
                    return (
                      void 0 === t &&
                        (t = {
                          pageX:
                            e(this).offset().left + e(this).outerWidth() / 2,
                          pageY:
                            e(this).offset().top + e(this).outerHeight() / 2,
                        }),
                      { x: t.pageX, y: t.pageY }
                    );
                  },
                  a = function (e) {
                    (this.mousePositions = s(e)), n.call(this);
                  },
                  l = function () {
                    i.call(this),
                      (this.reset = !0),
                      n.call(this),
                      e(this).trigger("tilt.mouseLeave");
                  },
                  u = function () {
                    const t = e(this).outerWidth(),
                      n = e(this).outerHeight(),
                      r = e(this).offset().left,
                      i = e(this).offset().top,
                      o = (this.mousePositions.x - r) / t,
                      s = (this.mousePositions.y - i) / n;
                    return {
                      tiltX: (
                        this.settings.maxTilt / 2 -
                        o * this.settings.maxTilt
                      ).toFixed(2),
                      tiltY: (
                        s * this.settings.maxTilt -
                        this.settings.maxTilt / 2
                      ).toFixed(2),
                      percentageX: 100 * o,
                      percentageY: 100 * s,
                      angle:
                        Math.atan2(
                          this.mousePositions.x - (r + t / 2),
                          -(this.mousePositions.y - (i + n / 2))
                        ) *
                        (180 / Math.PI),
                    };
                  },
                  c = function () {
                    if (((this.transforms = u.call(this)), this.reset))
                      return (
                        (this.reset = !1),
                        e(this).css(
                          "transform",
                          `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg)`
                        ),
                        void (
                          this.settings.glare &&
                          (this.glareElement.css(
                            "transform",
                            "rotate(180deg) translate(-50%, -50%)"
                          ),
                          this.glareElement.css("opacity", "0"))
                        )
                      );
                    e(this).css(
                      "transform",
                      `perspective(${this.settings.perspective}px) rotateX(${
                        "x" === this.settings.disableAxis
                          ? 0
                          : this.transforms.tiltY
                      }deg) rotateY(${
                        "y" === this.settings.disableAxis
                          ? 0
                          : this.transforms.tiltX
                      }deg) scale3d(${this.settings.scale},${
                        this.settings.scale
                      },${this.settings.scale})`
                    ),
                      this.settings.glare &&
                        (this.glareElement.css(
                          "transform",
                          `rotate(${this.transforms.angle}deg) translate(-50%, -50%)`
                        ),
                        this.glareElement.css(
                          "opacity",
                          "" +
                            (this.transforms.percentageY *
                              this.settings.maxGlare) /
                              100
                        )),
                      e(this).trigger("change", [this.transforms]),
                      (this.ticking = !1);
                  },
                  f = function () {
                    const t = this.settings.glarePrerender;
                    t ||
                      e(this).append(
                        '<div class="js-tilt-glare"><div class="js-tilt-glare-inner"></div></div>'
                      ),
                      (this.glareElementWrapper =
                        e(this).find(".js-tilt-glare")),
                      (this.glareElement = e(this).find(
                        ".js-tilt-glare-inner"
                      )),
                      t ||
                        (this.glareElementWrapper
                          .css({
                            position: "absolute",
                            top: "0",
                            left: "0",
                            width: "100%",
                            height: "100%",
                          })
                          .css({
                            overflow: "hidden",
                            "pointer-events": "none",
                          }),
                        this.glareElement.css({
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          "background-image":
                            "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                          width: "" + 2 * e(this).outerWidth(),
                          height: "" + 2 * e(this).outerWidth(),
                          transform: "rotate(180deg) translate(-50%, -50%)",
                          "transform-origin": "0% 0%",
                          opacity: "0",
                        }));
                  },
                  p = function () {
                    this.glareElement.css({
                      width: "" + 2 * e(this).outerWidth(),
                      height: "" + 2 * e(this).outerWidth(),
                    });
                  };
                return (
                  (e.fn.tilt.destroy = function () {
                    e(this).each(function () {
                      e(this).find(".js-tilt-glare").remove(),
                        e(this).css({ "will-change": "", transform: "" }),
                        e(this).off("mousemove mouseenter mouseleave");
                    });
                  }),
                  (e.fn.tilt.getValues = function () {
                    const t = [];
                    return (
                      e(this).each(function () {
                        (this.mousePositions = s.call(this)),
                          t.push(u.call(this));
                      }),
                      t
                    );
                  }),
                  (e.fn.tilt.reset = function () {
                    e(this).each(function () {
                      (this.mousePositions = s.call(this)),
                        (this.settings = e(this).data("settings")),
                        l.call(this),
                        setTimeout(() => {
                          this.reset = !1;
                        }, this.settings.transition);
                    });
                  }),
                  this.each(function () {
                    (this.settings = e.extend(
                      {
                        maxTilt: e(this).is("[data-tilt-max]")
                          ? e(this).data("tilt-max")
                          : 20,
                        perspective: e(this).is("[data-tilt-perspective]")
                          ? e(this).data("tilt-perspective")
                          : 300,
                        easing: e(this).is("[data-tilt-easing]")
                          ? e(this).data("tilt-easing")
                          : "cubic-bezier(.03,.98,.52,.99)",
                        scale: e(this).is("[data-tilt-scale]")
                          ? e(this).data("tilt-scale")
                          : "1",
                        speed: e(this).is("[data-tilt-speed]")
                          ? e(this).data("tilt-speed")
                          : "400",
                        transition:
                          !e(this).is("[data-tilt-transition]") ||
                          e(this).data("tilt-transition"),
                        disableAxis: e(this).is("[data-tilt-disable-axis]")
                          ? e(this).data("tilt-disable-axis")
                          : null,
                        axis: e(this).is("[data-tilt-axis]")
                          ? e(this).data("tilt-axis")
                          : null,
                        reset:
                          !e(this).is("[data-tilt-reset]") ||
                          e(this).data("tilt-reset"),
                        glare:
                          !!e(this).is("[data-tilt-glare]") &&
                          e(this).data("tilt-glare"),
                        maxGlare: e(this).is("[data-tilt-maxglare]")
                          ? e(this).data("tilt-maxglare")
                          : 1,
                      },
                      t
                    )),
                      null !== this.settings.axis &&
                        (console.warn(
                          "Tilt.js: the axis setting has been renamed to disableAxis. See https://github.com/gijsroge/tilt.js/pull/26 for more information"
                        ),
                        (this.settings.disableAxis = this.settings.axis)),
                      (this.init = () => {
                        e(this).data("settings", this.settings),
                          this.settings.glare && f.call(this),
                          r.call(this);
                      }),
                      this.init();
                  })
                );
              }),
              e("[data-tilt]").tilt(),
              !0
            );
          })
            ? r.apply(t, i)
            : r) || (e.exports = o);
  },
  function (e, t, n) {},
]);

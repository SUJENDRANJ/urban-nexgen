(self.webpackChunk = self.webpackChunk || []).push([
  ["106"],
  {
    5487: function () {
      "use strict";
      window.tram = (function (e) {
        function t(e, t) {
          return new G.Bare().init(e, t);
        }
        function n(e) {
          var t = parseInt(e.slice(1), 16);
          return [(t >> 16) & 255, (t >> 8) & 255, 255 & t];
        }
        function a(e, t, n) {
          return (
            "#" + (0x1000000 | (e << 16) | (t << 8) | n).toString(16).slice(1)
          );
        }
        function i() {}
        function o(e, t, n) {
          if ((void 0 !== t && (n = t), void 0 === e)) return n;
          var a = n;
          return (
            $.test(e) || !q.test(e)
              ? (a = parseInt(e, 10))
              : q.test(e) && (a = 1e3 * parseFloat(e)),
            0 > a && (a = 0),
            a == a ? a : n
          );
        }
        function r(e) {
          j.debug && window && window.console.warn(e);
        }
        var l,
          c,
          s,
          d = (function (e, t, n) {
            function a(e) {
              return "object" == typeof e;
            }
            function i(e) {
              return "function" == typeof e;
            }
            function o() {}
            return function r(l, c) {
              function s() {
                var e = new d();
                return i(e.init) && e.init.apply(e, arguments), e;
              }
              function d() {}
              c === n && ((c = l), (l = Object)), (s.Bare = d);
              var u,
                f = (o[e] = l[e]),
                p = (d[e] = s[e] = new o());
              return (
                (p.constructor = s),
                (s.mixin = function (t) {
                  return (d[e] = s[e] = r(s, t)[e]), s;
                }),
                (s.open = function (e) {
                  if (
                    ((u = {}),
                    i(e) ? (u = e.call(s, p, f, s, l)) : a(e) && (u = e),
                    a(u))
                  )
                    for (var n in u) t.call(u, n) && (p[n] = u[n]);
                  return i(p.init) || (p.init = l), s;
                }),
                s.open(c)
              );
            };
          })("prototype", {}.hasOwnProperty),
          u = {
            ease: [
              "ease",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return (
                  t +
                  n *
                    (-2.75 * o * i + 11 * i * i + -15.5 * o + 8 * i + 0.25 * e)
                );
              },
            ],
            "ease-in": [
              "ease-in",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return t + n * (-1 * o * i + 3 * i * i + -3 * o + 2 * i);
              },
            ],
            "ease-out": [
              "ease-out",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return (
                  t +
                  n *
                    (0.3 * o * i + -1.6 * i * i + 2.2 * o + -1.8 * i + 1.9 * e)
                );
              },
            ],
            "ease-in-out": [
              "ease-in-out",
              function (e, t, n, a) {
                var i = (e /= a) * e,
                  o = i * e;
                return t + n * (2 * o * i + -5 * i * i + 2 * o + 2 * i);
              },
            ],
            linear: [
              "linear",
              function (e, t, n, a) {
                return (n * e) / a + t;
              },
            ],
            "ease-in-quad": [
              "cubic-bezier(0.550, 0.085, 0.680, 0.530)",
              function (e, t, n, a) {
                return n * (e /= a) * e + t;
              },
            ],
            "ease-out-quad": [
              "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
              function (e, t, n, a) {
                return -n * (e /= a) * (e - 2) + t;
              },
            ],
            "ease-in-out-quad": [
              "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e + t
                  : (-n / 2) * (--e * (e - 2) - 1) + t;
              },
            ],
            "ease-in-cubic": [
              "cubic-bezier(0.550, 0.055, 0.675, 0.190)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e + t;
              },
            ],
            "ease-out-cubic": [
              "cubic-bezier(0.215, 0.610, 0.355, 1)",
              function (e, t, n, a) {
                return n * ((e = e / a - 1) * e * e + 1) + t;
              },
            ],
            "ease-in-out-cubic": [
              "cubic-bezier(0.645, 0.045, 0.355, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e + 2) + t;
              },
            ],
            "ease-in-quart": [
              "cubic-bezier(0.895, 0.030, 0.685, 0.220)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e * e + t;
              },
            ],
            "ease-out-quart": [
              "cubic-bezier(0.165, 0.840, 0.440, 1)",
              function (e, t, n, a) {
                return -n * ((e = e / a - 1) * e * e * e - 1) + t;
              },
            ],
            "ease-in-out-quart": [
              "cubic-bezier(0.770, 0, 0.175, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e * e + t
                  : (-n / 2) * ((e -= 2) * e * e * e - 2) + t;
              },
            ],
            "ease-in-quint": [
              "cubic-bezier(0.755, 0.050, 0.855, 0.060)",
              function (e, t, n, a) {
                return n * (e /= a) * e * e * e * e + t;
              },
            ],
            "ease-out-quint": [
              "cubic-bezier(0.230, 1, 0.320, 1)",
              function (e, t, n, a) {
                return n * ((e = e / a - 1) * e * e * e * e + 1) + t;
              },
            ],
            "ease-in-out-quint": [
              "cubic-bezier(0.860, 0, 0.070, 1)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (n / 2) * e * e * e * e * e + t
                  : (n / 2) * ((e -= 2) * e * e * e * e + 2) + t;
              },
            ],
            "ease-in-sine": [
              "cubic-bezier(0.470, 0, 0.745, 0.715)",
              function (e, t, n, a) {
                return -n * Math.cos((e / a) * (Math.PI / 2)) + n + t;
              },
            ],
            "ease-out-sine": [
              "cubic-bezier(0.390, 0.575, 0.565, 1)",
              function (e, t, n, a) {
                return n * Math.sin((e / a) * (Math.PI / 2)) + t;
              },
            ],
            "ease-in-out-sine": [
              "cubic-bezier(0.445, 0.050, 0.550, 0.950)",
              function (e, t, n, a) {
                return (-n / 2) * (Math.cos((Math.PI * e) / a) - 1) + t;
              },
            ],
            "ease-in-expo": [
              "cubic-bezier(0.950, 0.050, 0.795, 0.035)",
              function (e, t, n, a) {
                return 0 === e ? t : n * Math.pow(2, 10 * (e / a - 1)) + t;
              },
            ],
            "ease-out-expo": [
              "cubic-bezier(0.190, 1, 0.220, 1)",
              function (e, t, n, a) {
                return e === a
                  ? t + n
                  : n * (-Math.pow(2, (-10 * e) / a) + 1) + t;
              },
            ],
            "ease-in-out-expo": [
              "cubic-bezier(1, 0, 0, 1)",
              function (e, t, n, a) {
                return 0 === e
                  ? t
                  : e === a
                  ? t + n
                  : (e /= a / 2) < 1
                  ? (n / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (n / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
              },
            ],
            "ease-in-circ": [
              "cubic-bezier(0.600, 0.040, 0.980, 0.335)",
              function (e, t, n, a) {
                return -n * (Math.sqrt(1 - (e /= a) * e) - 1) + t;
              },
            ],
            "ease-out-circ": [
              "cubic-bezier(0.075, 0.820, 0.165, 1)",
              function (e, t, n, a) {
                return n * Math.sqrt(1 - (e = e / a - 1) * e) + t;
              },
            ],
            "ease-in-out-circ": [
              "cubic-bezier(0.785, 0.135, 0.150, 0.860)",
              function (e, t, n, a) {
                return (e /= a / 2) < 1
                  ? (-n / 2) * (Math.sqrt(1 - e * e) - 1) + t
                  : (n / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
              },
            ],
            "ease-in-back": [
              "cubic-bezier(0.600, -0.280, 0.735, 0.045)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  n * (e /= a) * e * ((i + 1) * e - i) + t
                );
              },
            ],
            "ease-out-back": [
              "cubic-bezier(0.175, 0.885, 0.320, 1.275)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  n * ((e = e / a - 1) * e * ((i + 1) * e + i) + 1) + t
                );
              },
            ],
            "ease-in-out-back": [
              "cubic-bezier(0.680, -0.550, 0.265, 1.550)",
              function (e, t, n, a, i) {
                return (
                  void 0 === i && (i = 1.70158),
                  (e /= a / 2) < 1
                    ? (n / 2) * e * e * (((i *= 1.525) + 1) * e - i) + t
                    : (n / 2) *
                        ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) +
                      t
                );
              },
            ],
          },
          f = {
            "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
            "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
            "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
          },
          p = window,
          E = "bkwld-tram",
          I = /[\-\.0-9]/g,
          g = /[A-Z]/,
          y = "number",
          m = /^(rgb|#)/,
          T = /(em|cm|mm|in|pt|pc|px)$/,
          b = /(em|cm|mm|in|pt|pc|px|%)$/,
          O = /(deg|rad|turn)$/,
          v = "unitless",
          h = /(all|none) 0s ease 0s/,
          _ = /^(width|height)$/,
          A = document.createElement("a"),
          R = ["Webkit", "Moz", "O", "ms"],
          S = ["-webkit-", "-moz-", "-o-", "-ms-"],
          L = function (e) {
            if (e in A.style) return { dom: e, css: e };
            var t,
              n,
              a = "",
              i = e.split("-");
            for (t = 0; t < i.length; t++)
              a += i[t].charAt(0).toUpperCase() + i[t].slice(1);
            for (t = 0; t < R.length; t++)
              if ((n = R[t] + a) in A.style) return { dom: n, css: S[t] + e };
          },
          N = (t.support = {
            bind: Function.prototype.bind,
            transform: L("transform"),
            transition: L("transition"),
            backface: L("backface-visibility"),
            timing: L("transition-timing-function"),
          });
        if (N.transition) {
          var C = N.timing.dom;
          if (((A.style[C] = u["ease-in-back"][0]), !A.style[C]))
            for (var w in f) u[w][0] = f[w];
        }
        var P = (t.frame =
            (l =
              p.requestAnimationFrame ||
              p.webkitRequestAnimationFrame ||
              p.mozRequestAnimationFrame ||
              p.oRequestAnimationFrame ||
              p.msRequestAnimationFrame) && N.bind
              ? l.bind(p)
              : function (e) {
                  p.setTimeout(e, 16);
                }),
          F = (t.now =
            (s =
              (c = p.performance) &&
              (c.now || c.webkitNow || c.msNow || c.mozNow)) && N.bind
              ? s.bind(c)
              : Date.now ||
                function () {
                  return +new Date();
                }),
          M = d(function (t) {
            function n(e, t) {
              var n = (function (e) {
                  for (var t = -1, n = e ? e.length : 0, a = []; ++t < n; ) {
                    var i = e[t];
                    i && a.push(i);
                  }
                  return a;
                })(("" + e).split(" ")),
                a = n[0];
              t = t || {};
              var i = z[a];
              if (!i) return r("Unsupported property: " + a);
              if (!t.weak || !this.props[a]) {
                var o = i[0],
                  l = this.props[a];
                return (
                  l || (l = this.props[a] = new o.Bare()),
                  l.init(this.$el, n, i, t),
                  l
                );
              }
            }
            function a(e, t, a) {
              if (e) {
                var r = typeof e;
                if (
                  (t ||
                    (this.timer && this.timer.destroy(),
                    (this.queue = []),
                    (this.active = !1)),
                  "number" == r && t)
                )
                  return (
                    (this.timer = new B({
                      duration: e,
                      context: this,
                      complete: i,
                    })),
                    void (this.active = !0)
                  );
                if ("string" == r && t) {
                  switch (e) {
                    case "hide":
                      c.call(this);
                      break;
                    case "stop":
                      l.call(this);
                      break;
                    case "redraw":
                      s.call(this);
                      break;
                    default:
                      n.call(this, e, a && a[1]);
                  }
                  return i.call(this);
                }
                if ("function" == r) return void e.call(this, this);
                if ("object" == r) {
                  var f = 0;
                  u.call(
                    this,
                    e,
                    function (e, t) {
                      e.span > f && (f = e.span), e.stop(), e.animate(t);
                    },
                    function (e) {
                      "wait" in e && (f = o(e.wait, 0));
                    }
                  ),
                    d.call(this),
                    f > 0 &&
                      ((this.timer = new B({ duration: f, context: this })),
                      (this.active = !0),
                      t && (this.timer.complete = i));
                  var p = this,
                    E = !1,
                    I = {};
                  P(function () {
                    u.call(p, e, function (e) {
                      e.active && ((E = !0), (I[e.name] = e.nextStyle));
                    }),
                      E && p.$el.css(I);
                  });
                }
              }
            }
            function i() {
              if (
                (this.timer && this.timer.destroy(),
                (this.active = !1),
                this.queue.length)
              ) {
                var e = this.queue.shift();
                a.call(this, e.options, !0, e.args);
              }
            }
            function l(e) {
              var t;
              this.timer && this.timer.destroy(),
                (this.queue = []),
                (this.active = !1),
                "string" == typeof e
                  ? ((t = {})[e] = 1)
                  : (t = "object" == typeof e && null != e ? e : this.props),
                u.call(this, t, f),
                d.call(this);
            }
            function c() {
              l.call(this), (this.el.style.display = "none");
            }
            function s() {
              this.el.offsetHeight;
            }
            function d() {
              var e,
                t,
                n = [];
              for (e in (this.upstream && n.push(this.upstream), this.props))
                (t = this.props[e]).active && n.push(t.string);
              (n = n.join(",")),
                this.style !== n &&
                  ((this.style = n), (this.el.style[N.transition.dom] = n));
            }
            function u(e, t, a) {
              var i,
                o,
                r,
                l,
                c = t !== f,
                s = {};
              for (i in e)
                (r = e[i]),
                  i in Y
                    ? (s.transform || (s.transform = {}), (s.transform[i] = r))
                    : (g.test(i) &&
                        (i = i.replace(/[A-Z]/g, function (e) {
                          return "-" + e.toLowerCase();
                        })),
                      i in z ? (s[i] = r) : (l || (l = {}), (l[i] = r)));
              for (i in s) {
                if (((r = s[i]), !(o = this.props[i]))) {
                  if (!c) continue;
                  o = n.call(this, i);
                }
                t.call(this, o, r);
              }
              a && l && a.call(this, l);
            }
            function f(e) {
              e.stop();
            }
            function p(e, t) {
              e.set(t);
            }
            function I(e) {
              this.$el.css(e);
            }
            function y(e, n) {
              t[e] = function () {
                return this.children
                  ? m.call(this, n, arguments)
                  : (this.el && n.apply(this, arguments), this);
              };
            }
            function m(e, t) {
              var n,
                a = this.children.length;
              for (n = 0; a > n; n++) e.apply(this.children[n], t);
              return this;
            }
            (t.init = function (t) {
              if (
                ((this.$el = e(t)),
                (this.el = this.$el[0]),
                (this.props = {}),
                (this.queue = []),
                (this.style = ""),
                (this.active = !1),
                j.keepInherited && !j.fallback)
              ) {
                var n = W(this.el, "transition");
                n && !h.test(n) && (this.upstream = n);
              }
              N.backface &&
                j.hideBackface &&
                H(this.el, N.backface.css, "hidden");
            }),
              y("add", n),
              y("start", a),
              y("wait", function (e) {
                (e = o(e, 0)),
                  this.active
                    ? this.queue.push({ options: e })
                    : ((this.timer = new B({
                        duration: e,
                        context: this,
                        complete: i,
                      })),
                      (this.active = !0));
              }),
              y("then", function (e) {
                return this.active
                  ? (this.queue.push({ options: e, args: arguments }),
                    void (this.timer.complete = i))
                  : r(
                      "No active transition timer. Use start() or wait() before then()."
                    );
              }),
              y("next", i),
              y("stop", l),
              y("set", function (e) {
                l.call(this, e), u.call(this, e, p, I);
              }),
              y("show", function (e) {
                "string" != typeof e && (e = "block"),
                  (this.el.style.display = e);
              }),
              y("hide", c),
              y("redraw", s),
              y("destroy", function () {
                l.call(this),
                  e.removeData(this.el, E),
                  (this.$el = this.el = null);
              });
          }),
          G = d(M, function (t) {
            function n(t, n) {
              var a = e.data(t, E) || e.data(t, E, new M.Bare());
              return a.el || a.init(t), n ? a.start(n) : a;
            }
            t.init = function (t, a) {
              var i = e(t);
              if (!i.length) return this;
              if (1 === i.length) return n(i[0], a);
              var o = [];
              return (
                i.each(function (e, t) {
                  o.push(n(t, a));
                }),
                (this.children = o),
                this
              );
            };
          }),
          x = d(function (e) {
            function t() {
              var e = this.get();
              this.update("auto");
              var t = this.get();
              return this.update(e), t;
            }
            (e.init = function (e, t, n, a) {
              (this.$el = e), (this.el = e[0]);
              var i,
                r,
                l,
                c = t[0];
              n[2] && (c = n[2]),
                Q[c] && (c = Q[c]),
                (this.name = c),
                (this.type = n[1]),
                (this.duration = o(t[1], this.duration, 500)),
                (this.ease =
                  ((i = t[2]),
                  (r = this.ease),
                  (l = "ease"),
                  void 0 !== r && (l = r),
                  i in u ? i : l)),
                (this.delay = o(t[3], this.delay, 0)),
                (this.span = this.duration + this.delay),
                (this.active = !1),
                (this.nextStyle = null),
                (this.auto = _.test(this.name)),
                (this.unit = a.unit || this.unit || j.defaultUnit),
                (this.angle = a.angle || this.angle || j.defaultAngle),
                j.fallback || a.fallback
                  ? (this.animate = this.fallback)
                  : ((this.animate = this.transition),
                    (this.string =
                      this.name +
                      " " +
                      this.duration +
                      "ms" +
                      ("ease" != this.ease ? " " + u[this.ease][0] : "") +
                      (this.delay ? " " + this.delay + "ms" : "")));
            }),
              (e.set = function (e) {
                (e = this.convert(e, this.type)), this.update(e), this.redraw();
              }),
              (e.transition = function (e) {
                (this.active = !0),
                  (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == this.el.style[this.name] &&
                      (this.update(this.get()), this.redraw()),
                    "auto" == e && (e = t.call(this))),
                  (this.nextStyle = e);
              }),
              (e.fallback = function (e) {
                var n =
                  this.el.style[this.name] ||
                  this.convert(this.get(), this.type);
                (e = this.convert(e, this.type)),
                  this.auto &&
                    ("auto" == n && (n = this.convert(this.get(), this.type)),
                    "auto" == e && (e = t.call(this))),
                  (this.tween = new k({
                    from: n,
                    to: e,
                    duration: this.duration,
                    delay: this.delay,
                    ease: this.ease,
                    update: this.update,
                    context: this,
                  }));
              }),
              (e.get = function () {
                return W(this.el, this.name);
              }),
              (e.update = function (e) {
                H(this.el, this.name, e);
              }),
              (e.stop = function () {
                (this.active || this.nextStyle) &&
                  ((this.active = !1),
                  (this.nextStyle = null),
                  H(this.el, this.name, this.get()));
                var e = this.tween;
                e && e.context && e.destroy();
              }),
              (e.convert = function (e, t) {
                if ("auto" == e && this.auto) return e;
                var n,
                  i,
                  o = "number" == typeof e,
                  l = "string" == typeof e;
                switch (t) {
                  case y:
                    if (o) return e;
                    if (l && "" === e.replace(I, "")) return +e;
                    i = "number(unitless)";
                    break;
                  case m:
                    if (l) {
                      if ("" === e && this.original) return this.original;
                      if (t.test(e))
                        return "#" == e.charAt(0) && 7 == e.length
                          ? e
                          : ((n = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(e))
                              ? a(n[1], n[2], n[3])
                              : e
                            ).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3");
                    }
                    i = "hex or rgb string";
                    break;
                  case T:
                    if (o) return e + this.unit;
                    if (l && t.test(e)) return e;
                    i = "number(px) or string(unit)";
                    break;
                  case b:
                    if (o) return e + this.unit;
                    if (l && t.test(e)) return e;
                    i = "number(px) or string(unit or %)";
                    break;
                  case O:
                    if (o) return e + this.angle;
                    if (l && t.test(e)) return e;
                    i = "number(deg) or string(angle)";
                    break;
                  case v:
                    if (o || (l && b.test(e))) return e;
                    i = "number(unitless) or string(unit or %)";
                }
                return (
                  r(
                    "Type warning: Expected: [" +
                      i +
                      "] Got: [" +
                      typeof e +
                      "] " +
                      e
                  ),
                  e
                );
              }),
              (e.redraw = function () {
                this.el.offsetHeight;
              });
          }),
          U = d(x, function (e, t) {
            e.init = function () {
              t.init.apply(this, arguments),
                this.original || (this.original = this.convert(this.get(), m));
            };
          }),
          V = d(x, function (e, t) {
            (e.init = function () {
              t.init.apply(this, arguments), (this.animate = this.fallback);
            }),
              (e.get = function () {
                return this.$el[this.name]();
              }),
              (e.update = function (e) {
                this.$el[this.name](e);
              });
          }),
          D = d(x, function (e, t) {
            function n(e, t) {
              var n, a, i, o, r;
              for (n in e)
                (i = (o = Y[n])[0]),
                  (a = o[1] || n),
                  (r = this.convert(e[n], i)),
                  t.call(this, a, r, i);
            }
            (e.init = function () {
              t.init.apply(this, arguments),
                this.current ||
                  ((this.current = {}),
                  Y.perspective &&
                    j.perspective &&
                    ((this.current.perspective = j.perspective),
                    H(this.el, this.name, this.style(this.current)),
                    this.redraw()));
            }),
              (e.set = function (e) {
                n.call(this, e, function (e, t) {
                  this.current[e] = t;
                }),
                  H(this.el, this.name, this.style(this.current)),
                  this.redraw();
              }),
              (e.transition = function (e) {
                var t = this.values(e);
                this.tween = new X({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                });
                var n,
                  a = {};
                for (n in this.current) a[n] = n in t ? t[n] : this.current[n];
                (this.active = !0), (this.nextStyle = this.style(a));
              }),
              (e.fallback = function (e) {
                var t = this.values(e);
                this.tween = new X({
                  current: this.current,
                  values: t,
                  duration: this.duration,
                  delay: this.delay,
                  ease: this.ease,
                  update: this.update,
                  context: this,
                });
              }),
              (e.update = function () {
                H(this.el, this.name, this.style(this.current));
              }),
              (e.style = function (e) {
                var t,
                  n = "";
                for (t in e) n += t + "(" + e[t] + ") ";
                return n;
              }),
              (e.values = function (e) {
                var t,
                  a = {};
                return (
                  n.call(this, e, function (e, n, i) {
                    (a[e] = n),
                      void 0 === this.current[e] &&
                        ((t = 0),
                        ~e.indexOf("scale") && (t = 1),
                        (this.current[e] = this.convert(t, i)));
                  }),
                  a
                );
              });
          }),
          k = d(function (t) {
            function o() {
              var e,
                t,
                n,
                a = c.length;
              if (a)
                for (P(o), t = F(), e = a; e--; ) (n = c[e]) && n.render(t);
            }
            var l = { ease: u.ease[1], from: 0, to: 1 };
            (t.init = function (e) {
              (this.duration = e.duration || 0), (this.delay = e.delay || 0);
              var t = e.ease || l.ease;
              u[t] && (t = u[t][1]),
                "function" != typeof t && (t = l.ease),
                (this.ease = t),
                (this.update = e.update || i),
                (this.complete = e.complete || i),
                (this.context = e.context || this),
                (this.name = e.name);
              var n = e.from,
                a = e.to;
              void 0 === n && (n = l.from),
                void 0 === a && (a = l.to),
                (this.unit = e.unit || ""),
                "number" == typeof n && "number" == typeof a
                  ? ((this.begin = n), (this.change = a - n))
                  : this.format(a, n),
                (this.value = this.begin + this.unit),
                (this.start = F()),
                !1 !== e.autoplay && this.play();
            }),
              (t.play = function () {
                this.active ||
                  (this.start || (this.start = F()),
                  (this.active = !0),
                  1 === c.push(this) && P(o));
              }),
              (t.stop = function () {
                var t, n;
                this.active &&
                  ((this.active = !1),
                  (n = e.inArray(this, c)) >= 0 &&
                    ((t = c.slice(n + 1)),
                    (c.length = n),
                    t.length && (c = c.concat(t))));
              }),
              (t.render = function (e) {
                var t,
                  n = e - this.start;
                if (this.delay) {
                  if (n <= this.delay) return;
                  n -= this.delay;
                }
                if (n < this.duration) {
                  var i,
                    o,
                    r = this.ease(n, 0, 1, this.duration);
                  return (
                    (t = this.startRGB
                      ? ((i = this.startRGB),
                        (o = this.endRGB),
                        a(
                          i[0] + r * (o[0] - i[0]),
                          i[1] + r * (o[1] - i[1]),
                          i[2] + r * (o[2] - i[2])
                        ))
                      : Math.round((this.begin + r * this.change) * s) / s),
                    (this.value = t + this.unit),
                    void this.update.call(this.context, this.value)
                  );
                }
                (t = this.endHex || this.begin + this.change),
                  (this.value = t + this.unit),
                  this.update.call(this.context, this.value),
                  this.complete.call(this.context),
                  this.destroy();
              }),
              (t.format = function (e, t) {
                if (((t += ""), "#" == (e += "").charAt(0)))
                  return (
                    (this.startRGB = n(t)),
                    (this.endRGB = n(e)),
                    (this.endHex = e),
                    (this.begin = 0),
                    void (this.change = 1)
                  );
                if (!this.unit) {
                  var a = t.replace(I, "");
                  a !== e.replace(I, "") &&
                    r("Units do not match [tween]: " + t + ", " + e),
                    (this.unit = a);
                }
                (t = parseFloat(t)),
                  (e = parseFloat(e)),
                  (this.begin = this.value = t),
                  (this.change = e - t);
              }),
              (t.destroy = function () {
                this.stop(),
                  (this.context = null),
                  (this.ease = this.update = this.complete = i);
              });
            var c = [],
              s = 1e3;
          }),
          B = d(k, function (e) {
            (e.init = function (e) {
              (this.duration = e.duration || 0),
                (this.complete = e.complete || i),
                (this.context = e.context),
                this.play();
            }),
              (e.render = function (e) {
                e - this.start < this.duration ||
                  (this.complete.call(this.context), this.destroy());
              });
          }),
          X = d(k, function (e, t) {
            (e.init = function (e) {
              var t, n;
              for (t in ((this.context = e.context),
              (this.update = e.update),
              (this.tweens = []),
              (this.current = e.current),
              e.values))
                (n = e.values[t]),
                  this.current[t] !== n &&
                    this.tweens.push(
                      new k({
                        name: t,
                        from: this.current[t],
                        to: n,
                        duration: e.duration,
                        delay: e.delay,
                        ease: e.ease,
                        autoplay: !1,
                      })
                    );
              this.play();
            }),
              (e.render = function (e) {
                var t,
                  n,
                  a = this.tweens.length,
                  i = !1;
                for (t = a; t--; )
                  (n = this.tweens[t]).context &&
                    (n.render(e), (this.current[n.name] = n.value), (i = !0));
                return i
                  ? void (this.update && this.update.call(this.context))
                  : this.destroy();
              }),
              (e.destroy = function () {
                if ((t.destroy.call(this), this.tweens)) {
                  var e;
                  for (e = this.tweens.length; e--; ) this.tweens[e].destroy();
                  (this.tweens = null), (this.current = null);
                }
              });
          }),
          j = (t.config = {
            debug: !1,
            defaultUnit: "px",
            defaultAngle: "deg",
            keepInherited: !1,
            hideBackface: !1,
            perspective: "",
            fallback: !N.transition,
            agentTests: [],
          });
        (t.fallback = function (e) {
          if (!N.transition) return (j.fallback = !0);
          j.agentTests.push("(" + e + ")");
          var t = RegExp(j.agentTests.join("|"), "i");
          j.fallback = t.test(navigator.userAgent);
        }),
          t.fallback("6.0.[2-5] Safari"),
          (t.tween = function (e) {
            return new k(e);
          }),
          (t.delay = function (e, t, n) {
            return new B({ complete: t, duration: e, context: n });
          }),
          (e.fn.tram = function (e) {
            return t.call(null, this, e);
          });
        var H = e.style,
          W = e.css,
          Q = { transform: N.transform && N.transform.css },
          z = {
            color: [U, m],
            background: [U, m, "background-color"],
            "outline-color": [U, m],
            "border-color": [U, m],
            "border-top-color": [U, m],
            "border-right-color": [U, m],
            "border-bottom-color": [U, m],
            "border-left-color": [U, m],
            "border-width": [x, T],
            "border-top-width": [x, T],
            "border-right-width": [x, T],
            "border-bottom-width": [x, T],
            "border-left-width": [x, T],
            "border-spacing": [x, T],
            "letter-spacing": [x, T],
            margin: [x, T],
            "margin-top": [x, T],
            "margin-right": [x, T],
            "margin-bottom": [x, T],
            "margin-left": [x, T],
            padding: [x, T],
            "padding-top": [x, T],
            "padding-right": [x, T],
            "padding-bottom": [x, T],
            "padding-left": [x, T],
            "outline-width": [x, T],
            opacity: [x, y],
            top: [x, b],
            right: [x, b],
            bottom: [x, b],
            left: [x, b],
            "font-size": [x, b],
            "text-indent": [x, b],
            "word-spacing": [x, b],
            width: [x, b],
            "min-width": [x, b],
            "max-width": [x, b],
            height: [x, b],
            "min-height": [x, b],
            "max-height": [x, b],
            "line-height": [x, v],
            "scroll-top": [V, y, "scrollTop"],
            "scroll-left": [V, y, "scrollLeft"],
          },
          Y = {};
        N.transform &&
          ((z.transform = [D]),
          (Y = {
            x: [b, "translateX"],
            y: [b, "translateY"],
            rotate: [O],
            rotateX: [O],
            rotateY: [O],
            scale: [y],
            scaleX: [y],
            scaleY: [y],
            skew: [O],
            skewX: [O],
            skewY: [O],
          })),
          N.transform &&
            N.backface &&
            ((Y.z = [b, "translateZ"]),
            (Y.rotateZ = [O]),
            (Y.scaleZ = [y]),
            (Y.perspective = [T]));
        var $ = /ms/,
          q = /s|\./;
        return (e.tram = t);
      })(window.jQuery);
    },
    5756: function (e, t, n) {
      "use strict";
      var a,
        i,
        o,
        r,
        l,
        c,
        s,
        d,
        u,
        f,
        p,
        E,
        I,
        g,
        y,
        m,
        T,
        b,
        O,
        v,
        h = window.$,
        _ = n(5487) && h.tram;
      ((a = {}).VERSION = "1.6.0-Webflow"),
        (i = {}),
        (o = Array.prototype),
        (r = Object.prototype),
        (l = Function.prototype),
        o.push,
        (c = o.slice),
        o.concat,
        r.toString,
        (s = r.hasOwnProperty),
        (d = o.forEach),
        (u = o.map),
        o.reduce,
        o.reduceRight,
        (f = o.filter),
        o.every,
        (p = o.some),
        (E = o.indexOf),
        o.lastIndexOf,
        (I = Object.keys),
        l.bind,
        (g =
          a.each =
          a.forEach =
            function (e, t, n) {
              if (null == e) return e;
              if (d && e.forEach === d) e.forEach(t, n);
              else if (e.length === +e.length) {
                for (var o = 0, r = e.length; o < r; o++)
                  if (t.call(n, e[o], o, e) === i) return;
              } else
                for (var l = a.keys(e), o = 0, r = l.length; o < r; o++)
                  if (t.call(n, e[l[o]], l[o], e) === i) return;
              return e;
            }),
        (a.map = a.collect =
          function (e, t, n) {
            var a = [];
            return null == e
              ? a
              : u && e.map === u
              ? e.map(t, n)
              : (g(e, function (e, i, o) {
                  a.push(t.call(n, e, i, o));
                }),
                a);
          }),
        (a.find = a.detect =
          function (e, t, n) {
            var a;
            return (
              y(e, function (e, i, o) {
                if (t.call(n, e, i, o)) return (a = e), !0;
              }),
              a
            );
          }),
        (a.filter = a.select =
          function (e, t, n) {
            var a = [];
            return null == e
              ? a
              : f && e.filter === f
              ? e.filter(t, n)
              : (g(e, function (e, i, o) {
                  t.call(n, e, i, o) && a.push(e);
                }),
                a);
          }),
        (y =
          a.some =
          a.any =
            function (e, t, n) {
              t || (t = a.identity);
              var o = !1;
              return null == e
                ? o
                : p && e.some === p
                ? e.some(t, n)
                : (g(e, function (e, a, r) {
                    if (o || (o = t.call(n, e, a, r))) return i;
                  }),
                  !!o);
            }),
        (a.contains = a.include =
          function (e, t) {
            return (
              null != e &&
              (E && e.indexOf === E
                ? -1 != e.indexOf(t)
                : y(e, function (e) {
                    return e === t;
                  }))
            );
          }),
        (a.delay = function (e, t) {
          var n = c.call(arguments, 2);
          return setTimeout(function () {
            return e.apply(null, n);
          }, t);
        }),
        (a.defer = function (e) {
          return a.delay.apply(a, [e, 1].concat(c.call(arguments, 1)));
        }),
        (a.throttle = function (e) {
          var t, n, a;
          return function () {
            t ||
              ((t = !0),
              (n = arguments),
              (a = this),
              _.frame(function () {
                (t = !1), e.apply(a, n);
              }));
          };
        }),
        (a.debounce = function (e, t, n) {
          var i,
            o,
            r,
            l,
            c,
            s = function () {
              var d = a.now() - l;
              d < t
                ? (i = setTimeout(s, t - d))
                : ((i = null), n || ((c = e.apply(r, o)), (r = o = null)));
            };
          return function () {
            (r = this), (o = arguments), (l = a.now());
            var d = n && !i;
            return (
              i || (i = setTimeout(s, t)),
              d && ((c = e.apply(r, o)), (r = o = null)),
              c
            );
          };
        }),
        (a.defaults = function (e) {
          if (!a.isObject(e)) return e;
          for (var t = 1, n = arguments.length; t < n; t++) {
            var i = arguments[t];
            for (var o in i) void 0 === e[o] && (e[o] = i[o]);
          }
          return e;
        }),
        (a.keys = function (e) {
          if (!a.isObject(e)) return [];
          if (I) return I(e);
          var t = [];
          for (var n in e) a.has(e, n) && t.push(n);
          return t;
        }),
        (a.has = function (e, t) {
          return s.call(e, t);
        }),
        (a.isObject = function (e) {
          return e === Object(e);
        }),
        (a.now =
          Date.now ||
          function () {
            return new Date().getTime();
          }),
        (a.templateSettings = {
          evaluate: /<%([\s\S]+?)%>/g,
          interpolate: /<%=([\s\S]+?)%>/g,
          escape: /<%-([\s\S]+?)%>/g,
        }),
        (m = /(.)^/),
        (T = {
          "'": "'",
          "\\": "\\",
          "\r": "r",
          "\n": "n",
          "\u2028": "u2028",
          "\u2029": "u2029",
        }),
        (b = /\\|'|\r|\n|\u2028|\u2029/g),
        (O = function (e) {
          return "\\" + T[e];
        }),
        (v = /^\s*(\w|\$)+\s*$/),
        (a.template = function (e, t, n) {
          !t && n && (t = n);
          var i,
            o = RegExp(
              [
                ((t = a.defaults({}, t, a.templateSettings)).escape || m)
                  .source,
                (t.interpolate || m).source,
                (t.evaluate || m).source,
              ].join("|") + "|$",
              "g"
            ),
            r = 0,
            l = "__p+='";
          e.replace(o, function (t, n, a, i, o) {
            return (
              (l += e.slice(r, o).replace(b, O)),
              (r = o + t.length),
              n
                ? (l += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'")
                : a
                ? (l += "'+\n((__t=(" + a + "))==null?'':__t)+\n'")
                : i && (l += "';\n" + i + "\n__p+='"),
              t
            );
          }),
            (l += "';\n");
          var c = t.variable;
          if (c) {
            if (!v.test(c))
              throw Error("variable is not a bare identifier: " + c);
          } else (l = "with(obj||{}){\n" + l + "}\n"), (c = "obj");
          l =
            "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" +
            l +
            "return __p;\n";
          try {
            i = Function(t.variable || "obj", "_", l);
          } catch (e) {
            throw ((e.source = l), e);
          }
          var s = function (e) {
            return i.call(this, e, a);
          };
          return (s.source = "function(" + c + "){\n" + l + "}"), s;
        }),
        (e.exports = a);
    },
    9461: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "brand",
        (e.exports = function (e) {
          var t,
            n = {},
            i = document,
            o = e("html"),
            r = e("body"),
            l = window.location,
            c = /PhantomJS/i.test(navigator.userAgent),
            s =
              "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange";
          function d() {
            var n =
              i.fullScreen ||
              i.mozFullScreen ||
              i.webkitIsFullScreen ||
              i.msFullscreenElement ||
              !!i.webkitFullscreenElement;
            e(t).attr("style", n ? "display: none !important;" : "");
          }
          function u() {
            var e = r.children(".w-webflow-badge"),
              n = e.length && e.get(0) === t,
              i = a.env("editor");
            if (n) {
              i && e.remove();
              return;
            }
            e.length && e.remove(), i || r.append(t);
          }
          return (
            (n.ready = function () {
              var n,
                a,
                r,
                f = o.attr("data-wf-status"),
                p = o.attr("data-wf-domain") || "";
              /\.webflow\.io$/i.test(p) && l.hostname !== p && (f = !0),
                f && !c;
            }),
            n
          );
        })
      );
    },
    322: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "edit",
        (e.exports = function (e, t, n) {
          if (
            ((n = n || {}),
            (a.env("test") || a.env("frame")) &&
              !n.fixture &&
              !(function () {
                try {
                  return !!(window.top.__Cypress__ || window.PLAYWRIGHT_TEST);
                } catch (e) {
                  return !1;
                }
              })())
          )
            return { exit: 1 };
          var i,
            o = e(window),
            r = e(document.documentElement),
            l = document.location,
            c = "hashchange",
            s =
              n.load ||
              function () {
                var t, n, a;
                (i = !0),
                  (window.WebflowEditor = !0),
                  o.off(c, u),
                  (t = function (t) {
                    var n;
                    e.ajax({
                      url: p("https://editor-api.webflow.com/api/editor/view"),
                      data: { siteId: r.attr("data-wf-site") },
                      xhrFields: { withCredentials: !0 },
                      dataType: "json",
                      crossDomain: !0,
                      success:
                        ((n = t),
                        function (t) {
                          var a, i, o;
                          if (!t)
                            return void console.error(
                              "Could not load editor data"
                            );
                          (t.thirdPartyCookiesSupported = n),
                            (i =
                              (a = t.scriptPath).indexOf("//") >= 0
                                ? a
                                : p("https://editor-api.webflow.com" + a)),
                            (o = function () {
                              window.WebflowEditor(t);
                            }),
                            e
                              .ajax({
                                type: "GET",
                                url: i,
                                dataType: "script",
                                cache: !0,
                              })
                              .then(o, f);
                        }),
                    });
                  }),
                  ((n = window.document.createElement("iframe")).src =
                    "https://webflow.com/site/third-party-cookie-check.html"),
                  (n.style.display = "none"),
                  (n.sandbox = "allow-scripts allow-same-origin"),
                  (a = function (e) {
                    "WF_third_party_cookies_unsupported" === e.data
                      ? (E(n, a), t(!1))
                      : "WF_third_party_cookies_supported" === e.data &&
                        (E(n, a), t(!0));
                  }),
                  (n.onerror = function () {
                    E(n, a), t(!1);
                  }),
                  window.addEventListener("message", a, !1),
                  window.document.body.appendChild(n);
              },
            d = !1;
          try {
            d =
              localStorage &&
              localStorage.getItem &&
              localStorage.getItem("WebflowEditor");
          } catch (e) {}
          function u() {
            !i && /\?edit/.test(l.hash) && s();
          }
          function f(e, t, n) {
            throw (console.error("Could not load editor script: " + t), n);
          }
          function p(e) {
            return e.replace(/([^:])\/\//g, "$1/");
          }
          function E(e, t) {
            window.removeEventListener("message", t, !1), e.remove();
          }
          return (
            d
              ? s()
              : l.search
              ? (/[?&](edit)(?:[=&?]|$)/.test(l.search) ||
                  /\?edit$/.test(l.href)) &&
                s()
              : o.on(c, u).triggerHandler(c),
            {}
          );
        })
      );
    },
    2338: function (e, t, n) {
      "use strict";
      n(3949).define(
        "focus-visible",
        (e.exports = function () {
          return {
            ready: function () {
              if ("undefined" != typeof document)
                try {
                  document.querySelector(":focus-visible");
                } catch (e) {
                  !(function (e) {
                    var t = !0,
                      n = !1,
                      a = null,
                      i = {
                        text: !0,
                        search: !0,
                        url: !0,
                        tel: !0,
                        email: !0,
                        password: !0,
                        number: !0,
                        date: !0,
                        month: !0,
                        week: !0,
                        time: !0,
                        datetime: !0,
                        "datetime-local": !0,
                      };
                    function o(e) {
                      return (
                        !!e &&
                        e !== document &&
                        "HTML" !== e.nodeName &&
                        "BODY" !== e.nodeName &&
                        "classList" in e &&
                        "contains" in e.classList
                      );
                    }
                    function r(e) {
                      e.getAttribute("data-wf-focus-visible") ||
                        e.setAttribute("data-wf-focus-visible", "true");
                    }
                    function l() {
                      t = !1;
                    }
                    function c() {
                      document.addEventListener("mousemove", s),
                        document.addEventListener("mousedown", s),
                        document.addEventListener("mouseup", s),
                        document.addEventListener("pointermove", s),
                        document.addEventListener("pointerdown", s),
                        document.addEventListener("pointerup", s),
                        document.addEventListener("touchmove", s),
                        document.addEventListener("touchstart", s),
                        document.addEventListener("touchend", s);
                    }
                    function s(e) {
                      (e.target.nodeName &&
                        "html" === e.target.nodeName.toLowerCase()) ||
                        ((t = !1),
                        document.removeEventListener("mousemove", s),
                        document.removeEventListener("mousedown", s),
                        document.removeEventListener("mouseup", s),
                        document.removeEventListener("pointermove", s),
                        document.removeEventListener("pointerdown", s),
                        document.removeEventListener("pointerup", s),
                        document.removeEventListener("touchmove", s),
                        document.removeEventListener("touchstart", s),
                        document.removeEventListener("touchend", s));
                    }
                    document.addEventListener(
                      "keydown",
                      function (n) {
                        n.metaKey ||
                          n.altKey ||
                          n.ctrlKey ||
                          (o(e.activeElement) && r(e.activeElement), (t = !0));
                      },
                      !0
                    ),
                      document.addEventListener("mousedown", l, !0),
                      document.addEventListener("pointerdown", l, !0),
                      document.addEventListener("touchstart", l, !0),
                      document.addEventListener(
                        "visibilitychange",
                        function () {
                          "hidden" === document.visibilityState &&
                            (n && (t = !0), c());
                        },
                        !0
                      ),
                      c(),
                      e.addEventListener(
                        "focus",
                        function (e) {
                          if (o(e.target)) {
                            var n, a, l;
                            (t ||
                              ((a = (n = e.target).type),
                              ("INPUT" === (l = n.tagName) &&
                                i[a] &&
                                !n.readOnly) ||
                                ("TEXTAREA" === l && !n.readOnly) ||
                                n.isContentEditable ||
                                0)) &&
                              r(e.target);
                          }
                        },
                        !0
                      ),
                      e.addEventListener(
                        "blur",
                        function (e) {
                          if (
                            o(e.target) &&
                            e.target.hasAttribute("data-wf-focus-visible")
                          ) {
                            var t;
                            (n = !0),
                              window.clearTimeout(a),
                              (a = window.setTimeout(function () {
                                n = !1;
                              }, 100)),
                              (t = e.target).getAttribute(
                                "data-wf-focus-visible"
                              ) && t.removeAttribute("data-wf-focus-visible");
                          }
                        },
                        !0
                      );
                  })(document);
                }
            },
          };
        })
      );
    },
    8334: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "focus",
        (e.exports = function () {
          var e = [],
            t = !1;
          function n(n) {
            t &&
              (n.preventDefault(),
              n.stopPropagation(),
              n.stopImmediatePropagation(),
              e.unshift(n));
          }
          function i(n) {
            var a, i;
            (i = (a = n.target).tagName),
              ((/^a$/i.test(i) && null != a.href) ||
                (/^(button|textarea)$/i.test(i) && !0 !== a.disabled) ||
                (/^input$/i.test(i) &&
                  /^(button|reset|submit|radio|checkbox)$/i.test(a.type) &&
                  !a.disabled) ||
                (!/^(button|input|textarea|select|a)$/i.test(i) &&
                  !Number.isNaN(Number.parseFloat(a.tabIndex))) ||
                /^audio$/i.test(i) ||
                (/^video$/i.test(i) && !0 === a.controls)) &&
                ((t = !0),
                setTimeout(() => {
                  for (t = !1, n.target.focus(); e.length > 0; ) {
                    var a = e.pop();
                    a.target.dispatchEvent(new MouseEvent(a.type, a));
                  }
                }, 0));
          }
          return {
            ready: function () {
              "undefined" != typeof document &&
                document.body.hasAttribute("data-wf-focus-within") &&
                a.env.safari &&
                (document.addEventListener("mousedown", i, !0),
                document.addEventListener("mouseup", n, !0),
                document.addEventListener("click", n, !0));
            },
          };
        })
      );
    },
    7199: function (e) {
      "use strict";
      var t = window.jQuery,
        n = {},
        a = [],
        i = ".w-ix",
        o = {
          reset: function (e, t) {
            t.__wf_intro = null;
          },
          intro: function (e, a) {
            a.__wf_intro ||
              ((a.__wf_intro = !0), t(a).triggerHandler(n.types.INTRO));
          },
          outro: function (e, a) {
            a.__wf_intro &&
              ((a.__wf_intro = null), t(a).triggerHandler(n.types.OUTRO));
          },
        };
      (n.triggers = {}),
        (n.types = { INTRO: "w-ix-intro" + i, OUTRO: "w-ix-outro" + i }),
        (n.init = function () {
          for (var e = a.length, i = 0; i < e; i++) {
            var r = a[i];
            r[0](0, r[1]);
          }
          (a = []), t.extend(n.triggers, o);
        }),
        (n.async = function () {
          for (var e in o) {
            var t = o[e];
            o.hasOwnProperty(e) &&
              (n.triggers[e] = function (e, n) {
                a.push([t, n]);
              });
          }
        }),
        n.async(),
        (e.exports = n);
    },
    5134: function (e, t, n) {
      "use strict";
      var a = n(7199);
      function i(e, t) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, null), e.dispatchEvent(n);
      }
      var o = window.jQuery,
        r = {},
        l = ".w-ix";
      (r.triggers = {}),
        (r.types = { INTRO: "w-ix-intro" + l, OUTRO: "w-ix-outro" + l }),
        o.extend(r.triggers, {
          reset: function (e, t) {
            a.triggers.reset(e, t);
          },
          intro: function (e, t) {
            a.triggers.intro(e, t), i(t, "COMPONENT_ACTIVE");
          },
          outro: function (e, t) {
            a.triggers.outro(e, t), i(t, "COMPONENT_INACTIVE");
          },
        }),
        (e.exports = r);
    },
    941: function (e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(6011);
      i.setEnv(a.env),
        a.define(
          "ix2",
          (e.exports = function () {
            return i;
          })
        );
    },
    3949: function (e, t, n) {
      "use strict";
      var a,
        i,
        o = {},
        r = {},
        l = [],
        c = window.Webflow || [],
        s = window.jQuery,
        d = s(window),
        u = s(document),
        f = s.isFunction,
        p = (o._ = n(5756)),
        E = (o.tram = n(5487) && s.tram),
        I = !1,
        g = !1;
      function y(e) {
        o.env() &&
          (f(e.design) && d.on("__wf_design", e.design),
          f(e.preview) && d.on("__wf_preview", e.preview)),
          f(e.destroy) && d.on("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            (function (e) {
              if (I) return e.ready();
              p.contains(l, e.ready) || l.push(e.ready);
            })(e);
      }
      function m(e) {
        var t;
        f(e.design) && d.off("__wf_design", e.design),
          f(e.preview) && d.off("__wf_preview", e.preview),
          f(e.destroy) && d.off("__wf_destroy", e.destroy),
          e.ready &&
            f(e.ready) &&
            ((t = e),
            (l = p.filter(l, function (e) {
              return e !== t.ready;
            })));
      }
      (E.config.hideBackface = !1),
        (E.config.keepInherited = !0),
        (o.define = function (e, t, n) {
          r[e] && m(r[e]);
          var a = (r[e] = t(s, p, n) || {});
          return y(a), a;
        }),
        (o.require = function (e) {
          return r[e];
        }),
        (o.push = function (e) {
          if (I) {
            f(e) && e();
            return;
          }
          c.push(e);
        }),
        (o.env = function (e) {
          var t = window.__wf_design,
            n = void 0 !== t;
          return e
            ? "design" === e
              ? n && t
              : "preview" === e
              ? n && !t
              : "slug" === e
              ? n && window.__wf_slug
              : "editor" === e
              ? window.WebflowEditor
              : "test" === e
              ? window.__wf_test
              : "frame" === e
              ? window !== window.top
              : void 0
            : n;
        });
      var T = navigator.userAgent.toLowerCase(),
        b = (o.env.touch =
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch)),
        O = (o.env.chrome =
          /chrome/.test(T) &&
          /Google/.test(navigator.vendor) &&
          parseInt(T.match(/chrome\/(\d+)\./)[1], 10)),
        v = (o.env.ios = /(ipod|iphone|ipad)/.test(T));
      (o.env.safari = /safari/.test(T) && !O && !v),
        b &&
          u.on("touchstart mousedown", function (e) {
            a = e.target;
          }),
        (o.validClick = b
          ? function (e) {
              return e === a || s.contains(e, a);
            }
          : function () {
              return !0;
            });
      var h = "resize.webflow orientationchange.webflow load.webflow",
        _ = "scroll.webflow " + h;
      function A(e, t) {
        var n = [],
          a = {};
        return (
          (a.up = p.throttle(function (e) {
            p.each(n, function (t) {
              t(e);
            });
          })),
          e && t && e.on(t, a.up),
          (a.on = function (e) {
            "function" == typeof e && (p.contains(n, e) || n.push(e));
          }),
          (a.off = function (e) {
            if (!arguments.length) {
              n = [];
              return;
            }
            n = p.filter(n, function (t) {
              return t !== e;
            });
          }),
          a
        );
      }
      function R(e) {
        f(e) && e();
      }
      function S() {
        i && (i.reject(), d.off("load", i.resolve)),
          (i = new s.Deferred()),
          d.on("load", i.resolve);
      }
      (o.resize = A(d, h)),
        (o.scroll = A(d, _)),
        (o.redraw = A()),
        (o.location = function (e) {
          window.location = e;
        }),
        o.env() && (o.location = function () {}),
        (o.ready = function () {
          (I = !0),
            g ? ((g = !1), p.each(r, y)) : p.each(l, R),
            p.each(c, R),
            o.resize.up();
        }),
        (o.load = function (e) {
          i.then(e);
        }),
        (o.destroy = function (e) {
          (e = e || {}),
            (g = !0),
            d.triggerHandler("__wf_destroy"),
            null != e.domready && (I = e.domready),
            p.each(r, m),
            o.resize.off(),
            o.scroll.off(),
            o.redraw.off(),
            (l = []),
            (c = []),
            "pending" === i.state() && S();
        }),
        s(o.ready),
        S(),
        (e.exports = window.Webflow = o);
    },
    7624: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "links",
        (e.exports = function (e, t) {
          var n,
            i,
            o,
            r = {},
            l = e(window),
            c = a.env(),
            s = window.location,
            d = document.createElement("a"),
            u = "w--current",
            f = /index\.(html|php)$/,
            p = /\/$/;
          function E() {
            var e = l.scrollTop(),
              n = l.height();
            t.each(i, function (t) {
              if (!t.link.attr("hreflang")) {
                var a = t.link,
                  i = t.sec,
                  o = i.offset().top,
                  r = i.outerHeight(),
                  l = 0.5 * n,
                  c = i.is(":visible") && o + r - l >= e && o + l <= e + n;
                t.active !== c && ((t.active = c), I(a, u, c));
              }
            });
          }
          function I(e, t, n) {
            var a = e.hasClass(t);
            (!n || !a) && (n || a) && (n ? e.addClass(t) : e.removeClass(t));
          }
          return (
            (r.ready =
              r.design =
              r.preview =
                function () {
                  (n = c && a.env("design")),
                    (o = a.env("slug") || s.pathname || ""),
                    a.scroll.off(E),
                    (i = []);
                  for (var t = document.links, r = 0; r < t.length; ++r)
                    !(function (t) {
                      if (!t.getAttribute("hreflang")) {
                        var a =
                          (n && t.getAttribute("href-disabled")) ||
                          t.getAttribute("href");
                        if (((d.href = a), !(a.indexOf(":") >= 0))) {
                          var r = e(t);
                          if (
                            d.hash.length > 1 &&
                            d.host + d.pathname === s.host + s.pathname
                          ) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(d.hash)) return;
                            var l = e(d.hash);
                            l.length && i.push({ link: r, sec: l, active: !1 });
                            return;
                          }
                          "#" !== a &&
                            "" !== a &&
                            I(
                              r,
                              u,
                              d.href === s.href ||
                                a === o ||
                                (f.test(a) && p.test(o))
                            );
                        }
                      }
                    })(t[r]);
                  i.length && (a.scroll.on(E), E());
                }),
            r
          );
        })
      );
    },
    286: function (e, t, n) {
      "use strict";
      var a = n(3949);
      a.define(
        "scroll",
        (e.exports = function (e) {
          var t = {
              WF_CLICK_EMPTY: "click.wf-empty-link",
              WF_CLICK_SCROLL: "click.wf-scroll",
            },
            n = window.location,
            i = !(function () {
              try {
                return !!window.frameElement;
              } catch (e) {
                return !0;
              }
            })()
              ? window.history
              : null,
            o = e(window),
            r = e(document),
            l = e(document.body),
            c =
              window.requestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              window.webkitRequestAnimationFrame ||
              function (e) {
                window.setTimeout(e, 15);
              },
            s = a.env("editor") ? ".w-editor-body" : "body",
            d =
              "header, " +
              s +
              " > .header, " +
              s +
              " > .w-nav:not([data-no-scroll])",
            u = 'a[href="#"]',
            f = 'a[href*="#"]:not(.w-tab-link):not(' + u + ")",
            p = document.createElement("style");
          p.appendChild(
            document.createTextNode(
              '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
            )
          );
          var E = /^#[a-zA-Z0-9][\w:.-]*$/;
          let I =
            "function" == typeof window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)");
          function g(e, t) {
            var n;
            switch (t) {
              case "add":
                (n = e.attr("tabindex"))
                  ? e.attr("data-wf-tabindex-swap", n)
                  : e.attr("tabindex", "-1");
                break;
              case "remove":
                (n = e.attr("data-wf-tabindex-swap"))
                  ? (e.attr("tabindex", n),
                    e.removeAttr("data-wf-tabindex-swap"))
                  : e.removeAttr("tabindex");
            }
            e.toggleClass("wf-force-outline-none", "add" === t);
          }
          function y(t) {
            var r = t.currentTarget;
            if (
              !(
                a.env("design") ||
                (window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(r.className))
              )
            ) {
              var s =
                E.test(r.hash) && r.host + r.pathname === n.host + n.pathname
                  ? r.hash
                  : "";
              if ("" !== s) {
                var u,
                  f = e(s);
                f.length &&
                  (t && (t.preventDefault(), t.stopPropagation()),
                  (u = s),
                  n.hash !== u &&
                    i &&
                    i.pushState &&
                    !(a.env.chrome && "file:" === n.protocol) &&
                    (i.state && i.state.hash) !== u &&
                    i.pushState({ hash: u }, "", u),
                  window.setTimeout(function () {
                    !(function (t, n) {
                      var a = o.scrollTop(),
                        i = (function (t) {
                          var n = e(d),
                            a =
                              "fixed" === n.css("position")
                                ? n.outerHeight()
                                : 0,
                            i = t.offset().top - a;
                          if ("mid" === t.data("scroll")) {
                            var r = o.height() - a,
                              l = t.outerHeight();
                            l < r && (i -= Math.round((r - l) / 2));
                          }
                          return i;
                        })(t);
                      if (a !== i) {
                        var r = (function (e, t, n) {
                            if (
                              "none" ===
                                document.body.getAttribute(
                                  "data-wf-scroll-motion"
                                ) ||
                              I.matches
                            )
                              return 0;
                            var a = 1;
                            return (
                              l.add(e).each(function (e, t) {
                                var n = parseFloat(
                                  t.getAttribute("data-scroll-time")
                                );
                                !isNaN(n) && n >= 0 && (a = n);
                              }),
                              (472.143 * Math.log(Math.abs(t - n) + 125) -
                                2e3) *
                                a
                            );
                          })(t, a, i),
                          s = Date.now(),
                          u = function () {
                            var e,
                              t,
                              o,
                              l,
                              d,
                              f = Date.now() - s;
                            window.scroll(
                              0,
                              ((e = a),
                              (t = i),
                              (o = f) > (l = r)
                                ? t
                                : e +
                                  (t - e) *
                                    ((d = o / l) < 0.5
                                      ? 4 * d * d * d
                                      : (d - 1) * (2 * d - 2) * (2 * d - 2) +
                                        1))
                            ),
                              f <= r ? c(u) : "function" == typeof n && n();
                          };
                        c(u);
                      }
                    })(f, function () {
                      g(f, "add"),
                        f.get(0).focus({ preventScroll: !0 }),
                        g(f, "remove");
                    });
                  }, 300 * !t));
              }
            }
          }
          return {
            ready: function () {
              var { WF_CLICK_EMPTY: e, WF_CLICK_SCROLL: n } = t;
              r.on(n, f, y),
                r.on(e, u, function (e) {
                  e.preventDefault();
                }),
                document.head.insertBefore(p, document.head.firstChild);
            },
          };
        })
      );
    },
    3695: function (e, t, n) {
      "use strict";
      n(3949).define(
        "touch",
        (e.exports = function (e) {
          var t = {},
            n = window.getSelection;
          function a(t) {
            var a,
              i,
              o = !1,
              r = !1,
              l = Math.min(Math.round(0.04 * window.innerWidth), 40);
            function c(e) {
              var t = e.touches;
              (t && t.length > 1) ||
                ((o = !0),
                t ? ((r = !0), (a = t[0].clientX)) : (a = e.clientX),
                (i = a));
            }
            function s(t) {
              if (o) {
                if (r && "mousemove" === t.type) {
                  t.preventDefault(), t.stopPropagation();
                  return;
                }
                var a,
                  c,
                  s,
                  d,
                  f = t.touches,
                  p = f ? f[0].clientX : t.clientX,
                  E = p - i;
                (i = p),
                  Math.abs(E) > l &&
                    n &&
                    "" === String(n()) &&
                    ((a = "swipe"),
                    (c = t),
                    (s = { direction: E > 0 ? "right" : "left" }),
                    (d = e.Event(a, { originalEvent: c })),
                    e(c.target).trigger(d, s),
                    u());
              }
            }
            function d(e) {
              if (o && ((o = !1), r && "mouseup" === e.type)) {
                e.preventDefault(), e.stopPropagation(), (r = !1);
                return;
              }
            }
            function u() {
              o = !1;
            }
            t.addEventListener("touchstart", c, !1),
              t.addEventListener("touchmove", s, !1),
              t.addEventListener("touchend", d, !1),
              t.addEventListener("touchcancel", u, !1),
              t.addEventListener("mousedown", c, !1),
              t.addEventListener("mousemove", s, !1),
              t.addEventListener("mouseup", d, !1),
              t.addEventListener("mouseout", u, !1),
              (this.destroy = function () {
                t.removeEventListener("touchstart", c, !1),
                  t.removeEventListener("touchmove", s, !1),
                  t.removeEventListener("touchend", d, !1),
                  t.removeEventListener("touchcancel", u, !1),
                  t.removeEventListener("mousedown", c, !1),
                  t.removeEventListener("mousemove", s, !1),
                  t.removeEventListener("mouseup", d, !1),
                  t.removeEventListener("mouseout", u, !1),
                  (t = null);
              });
          }
          return (
            (e.event.special.tap = {
              bindType: "click",
              delegateType: "click",
            }),
            (t.init = function (t) {
              return (t = "string" == typeof t ? e(t).get(0) : t)
                ? new a(t)
                : null;
            }),
            (t.instance = t.init(document)),
            t
          );
        })
      );
    },
    1655: function (e, t, n) {
      "use strict";
      var a = n(3949),
        i = n(5134);
      let o = {
        ARROW_LEFT: 37,
        ARROW_UP: 38,
        ARROW_RIGHT: 39,
        ARROW_DOWN: 40,
        ESCAPE: 27,
        SPACE: 32,
        ENTER: 13,
        HOME: 36,
        END: 35,
      };
      a.define(
        "navbar",
        (e.exports = function (e, t) {
          var n,
            r,
            l,
            c,
            s = {},
            d = e.tram,
            u = e(window),
            f = e(document),
            p = t.debounce,
            E = a.env(),
            I = ".w-nav",
            g = "w--open",
            y = "w--nav-dropdown-open",
            m = "w--nav-dropdown-toggle-open",
            T = "w--nav-dropdown-list-open",
            b = "w--nav-link-open",
            O = i.triggers,
            v = e();
          function h() {
            a.resize.off(_);
          }
          function _() {
            r.each(M);
          }
          function A(n, a) {
            var i,
              r,
              s,
              d,
              p,
              E = e(a),
              g = e.data(a, I);
            g ||
              (g = e.data(a, I, {
                open: !1,
                el: E,
                config: {},
                selectedIdx: -1,
              })),
              (g.menu = E.find(".w-nav-menu")),
              (g.links = g.menu.find(".w-nav-link")),
              (g.dropdowns = g.menu.find(".w-dropdown")),
              (g.dropdownToggle = g.menu.find(".w-dropdown-toggle")),
              (g.dropdownList = g.menu.find(".w-dropdown-list")),
              (g.button = E.find(".w-nav-button")),
              (g.container = E.find(".w-container")),
              (g.overlayContainerId = "w-nav-overlay-" + n),
              (g.outside =
                ((i = g).outside && f.off("click" + I, i.outside),
                function (t) {
                  var n = e(t.target);
                  (c && n.closest(".w-editor-bem-EditorOverlay").length) ||
                    F(i, n);
                }));
            var y = E.find(".w-nav-brand");
            y &&
              "/" === y.attr("href") &&
              null == y.attr("aria-label") &&
              y.attr("aria-label", "home"),
              g.button.attr("style", "-webkit-user-select: text;"),
              null == g.button.attr("aria-label") &&
                g.button.attr("aria-label", "menu"),
              g.button.attr("role", "button"),
              g.button.attr("tabindex", "0"),
              g.button.attr("aria-controls", g.overlayContainerId),
              g.button.attr("aria-haspopup", "menu"),
              g.button.attr("aria-expanded", "false"),
              g.el.off(I),
              g.button.off(I),
              g.menu.off(I),
              L(g),
              l
                ? (S(g),
                  g.el.on(
                    "setting" + I,
                    ((r = g),
                    function (e, n) {
                      n = n || {};
                      var a = u.width();
                      L(r),
                        !0 === n.open && V(r, !0),
                        !1 === n.open && k(r, !0),
                        r.open &&
                          t.defer(function () {
                            a !== u.width() && C(r);
                          });
                    })
                  ))
                : ((s = g).overlay ||
                    ((s.overlay = e(
                      '<div class="w-nav-overlay" data-wf-ignore />'
                    ).appendTo(s.el)),
                    s.overlay.attr("id", s.overlayContainerId),
                    (s.parent = s.menu.parent()),
                    k(s, !0)),
                  g.button.on("click" + I, w(g)),
                  g.menu.on("click" + I, "a", P(g)),
                  g.button.on(
                    "keydown" + I,
                    ((d = g),
                    function (e) {
                      switch (e.keyCode) {
                        case o.SPACE:
                        case o.ENTER:
                          return (
                            w(d)(), e.preventDefault(), e.stopPropagation()
                          );
                        case o.ESCAPE:
                          return k(d), e.preventDefault(), e.stopPropagation();
                        case o.ARROW_RIGHT:
                        case o.ARROW_DOWN:
                        case o.HOME:
                        case o.END:
                          if (!d.open)
                            return e.preventDefault(), e.stopPropagation();
                          return (
                            e.keyCode === o.END
                              ? (d.selectedIdx = d.links.length - 1)
                              : (d.selectedIdx = 0),
                            N(d),
                            e.preventDefault(),
                            e.stopPropagation()
                          );
                      }
                    })
                  ),
                  g.el.on(
                    "keydown" + I,
                    ((p = g),
                    function (e) {
                      if (p.open)
                        switch (
                          ((p.selectedIdx = p.links.index(
                            document.activeElement
                          )),
                          e.keyCode)
                        ) {
                          case o.HOME:
                          case o.END:
                            return (
                              e.keyCode === o.END
                                ? (p.selectedIdx = p.links.length - 1)
                                : (p.selectedIdx = 0),
                              N(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ESCAPE:
                            return (
                              k(p),
                              p.button.focus(),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ARROW_LEFT:
                          case o.ARROW_UP:
                            return (
                              (p.selectedIdx = Math.max(-1, p.selectedIdx - 1)),
                              N(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                          case o.ARROW_RIGHT:
                          case o.ARROW_DOWN:
                            return (
                              (p.selectedIdx = Math.min(
                                p.links.length - 1,
                                p.selectedIdx + 1
                              )),
                              N(p),
                              e.preventDefault(),
                              e.stopPropagation()
                            );
                        }
                    })
                  )),
              M(n, a);
          }
          function R(t, n) {
            var a = e.data(n, I);
            a && (S(a), e.removeData(n, I));
          }
          function S(e) {
            e.overlay && (k(e, !0), e.overlay.remove(), (e.overlay = null));
          }
          function L(e) {
            var n = {},
              a = e.config || {},
              i = (n.animation = e.el.attr("data-animation") || "default");
            (n.animOver = /^over/.test(i)),
              (n.animDirect = /left$/.test(i) ? -1 : 1),
              a.animation !== i && e.open && t.defer(C, e),
              (n.easing = e.el.attr("data-easing") || "ease"),
              (n.easing2 = e.el.attr("data-easing2") || "ease");
            var o = e.el.attr("data-duration");
            (n.duration = null != o ? Number(o) : 400),
              (n.docHeight = e.el.attr("data-doc-height")),
              (e.config = n);
          }
          function N(e) {
            if (e.links[e.selectedIdx]) {
              var t = e.links[e.selectedIdx];
              t.focus(), P(t);
            }
          }
          function C(e) {
            e.open && (k(e, !0), V(e, !0));
          }
          function w(e) {
            return p(function () {
              e.open ? k(e) : V(e);
            });
          }
          function P(t) {
            return function (n) {
              var i = e(this).attr("href");
              if (!a.validClick(n.currentTarget))
                return void n.preventDefault();
              i && 0 === i.indexOf("#") && t.open && k(t);
            };
          }
          (s.ready =
            s.design =
            s.preview =
              function () {
                (l = E && a.env("design")),
                  (c = a.env("editor")),
                  (n = e(document.body)),
                  (r = f.find(I)).length && (r.each(A), h(), a.resize.on(_));
              }),
            (s.destroy = function () {
              (v = e()), h(), r && r.length && r.each(R);
            });
          var F = p(function (e, t) {
            if (e.open) {
              var n = t.closest(".w-nav-menu");
              e.menu.is(n) || k(e);
            }
          });
          function M(t, n) {
            var a = e.data(n, I),
              i = (a.collapsed = "none" !== a.button.css("display"));
            if ((!a.open || i || l || k(a, !0), a.container.length)) {
              var o,
                r =
                  ("none" === (o = a.container.css(G)) && (o = ""),
                  function (t, n) {
                    (n = e(n)).css(G, ""), "none" === n.css(G) && n.css(G, o);
                  });
              a.links.each(r), a.dropdowns.each(r);
            }
            a.open && D(a);
          }
          var G = "max-width";
          function x(e, t) {
            t.setAttribute("data-nav-menu-open", "");
          }
          function U(e, t) {
            t.removeAttribute("data-nav-menu-open");
          }
          function V(e, t) {
            if (!e.open) {
              (e.open = !0),
                e.menu.each(x),
                e.links.addClass(b),
                e.dropdowns.addClass(y),
                e.dropdownToggle.addClass(m),
                e.dropdownList.addClass(T),
                e.button.addClass(g);
              var n = e.config;
              ("none" === n.animation ||
                !d.support.transform ||
                n.duration <= 0) &&
                (t = !0);
              var i = D(e),
                o = e.menu.outerHeight(!0),
                r = e.menu.outerWidth(!0),
                c = e.el.height(),
                s = e.el[0];
              if (
                (M(0, s),
                O.intro(0, s),
                a.redraw.up(),
                l || f.on("click" + I, e.outside),
                t)
              )
                return void p();
              var u = "transform " + n.duration + "ms " + n.easing;
              if (
                (e.overlay &&
                  ((v = e.menu.prev()), e.overlay.show().append(e.menu)),
                n.animOver)
              ) {
                d(e.menu)
                  .add(u)
                  .set({ x: n.animDirect * r, height: i })
                  .start({ x: 0 })
                  .then(p),
                  e.overlay && e.overlay.width(r);
                return;
              }
              d(e.menu)
                .add(u)
                .set({ y: -(c + o) })
                .start({ y: 0 })
                .then(p);
            }
            function p() {
              e.button.attr("aria-expanded", "true");
            }
          }
          function D(e) {
            var t = e.config,
              a = t.docHeight ? f.height() : n.height();
            return (
              t.animOver
                ? e.menu.height(a)
                : "fixed" !== e.el.css("position") &&
                  (a -= e.el.outerHeight(!0)),
              e.overlay && e.overlay.height(a),
              a
            );
          }
          function k(e, t) {
            if (e.open) {
              (e.open = !1), e.button.removeClass(g);
              var n = e.config;
              if (
                (("none" === n.animation ||
                  !d.support.transform ||
                  n.duration <= 0) &&
                  (t = !0),
                O.outro(0, e.el[0]),
                f.off("click" + I, e.outside),
                t)
              ) {
                d(e.menu).stop(), l();
                return;
              }
              var a = "transform " + n.duration + "ms " + n.easing2,
                i = e.menu.outerHeight(!0),
                o = e.menu.outerWidth(!0),
                r = e.el.height();
              if (n.animOver)
                return void d(e.menu)
                  .add(a)
                  .start({ x: o * n.animDirect })
                  .then(l);
              d(e.menu)
                .add(a)
                .start({ y: -(r + i) })
                .then(l);
            }
            function l() {
              e.menu.height(""),
                d(e.menu).set({ x: 0, y: 0 }),
                e.menu.each(U),
                e.links.removeClass(b),
                e.dropdowns.removeClass(y),
                e.dropdownToggle.removeClass(m),
                e.dropdownList.removeClass(T),
                e.overlay &&
                  e.overlay.children().length &&
                  (v.length
                    ? e.menu.insertAfter(v)
                    : e.menu.prependTo(e.parent),
                  e.overlay.attr("style", "").hide()),
                e.el.triggerHandler("w-close"),
                e.button.attr("aria-expanded", "false");
            }
          }
          return s;
        })
      );
    },
    3946: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        actionListPlaybackChanged: function () {
          return W;
        },
        animationFrameChanged: function () {
          return D;
        },
        clearRequested: function () {
          return G;
        },
        elementStateChanged: function () {
          return H;
        },
        eventListenerAdded: function () {
          return x;
        },
        eventStateChanged: function () {
          return V;
        },
        instanceAdded: function () {
          return B;
        },
        instanceRemoved: function () {
          return j;
        },
        instanceStarted: function () {
          return X;
        },
        mediaQueriesDefined: function () {
          return z;
        },
        parameterChanged: function () {
          return k;
        },
        playbackRequested: function () {
          return F;
        },
        previewRequested: function () {
          return P;
        },
        rawDataImported: function () {
          return L;
        },
        sessionInitialized: function () {
          return N;
        },
        sessionStarted: function () {
          return C;
        },
        sessionStopped: function () {
          return w;
        },
        stopRequested: function () {
          return M;
        },
        testFrameRendered: function () {
          return U;
        },
        viewportWidthChanged: function () {
          return Q;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(7087),
        r = n(9468),
        {
          IX2_RAW_DATA_IMPORTED: l,
          IX2_SESSION_INITIALIZED: c,
          IX2_SESSION_STARTED: s,
          IX2_SESSION_STOPPED: d,
          IX2_PREVIEW_REQUESTED: u,
          IX2_PLAYBACK_REQUESTED: f,
          IX2_STOP_REQUESTED: p,
          IX2_CLEAR_REQUESTED: E,
          IX2_EVENT_LISTENER_ADDED: I,
          IX2_TEST_FRAME_RENDERED: g,
          IX2_EVENT_STATE_CHANGED: y,
          IX2_ANIMATION_FRAME_CHANGED: m,
          IX2_PARAMETER_CHANGED: T,
          IX2_INSTANCE_ADDED: b,
          IX2_INSTANCE_STARTED: O,
          IX2_INSTANCE_REMOVED: v,
          IX2_ELEMENT_STATE_CHANGED: h,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: _,
          IX2_VIEWPORT_WIDTH_CHANGED: A,
          IX2_MEDIA_QUERIES_DEFINED: R,
        } = o.IX2EngineActionTypes,
        { reifyState: S } = r.IX2VanillaUtils,
        L = (e) => ({ type: l, payload: { ...S(e) } }),
        N = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
          type: c,
          payload: { hasBoundaryNodes: e, reducedMotion: t },
        }),
        C = () => ({ type: s }),
        w = () => ({ type: d }),
        P = ({ rawData: e, defer: t }) => ({
          type: u,
          payload: { defer: t, rawData: e },
        }),
        F = ({
          actionTypeId: e = o.ActionTypeConsts.GENERAL_START_ACTION,
          actionListId: t,
          actionItemId: n,
          eventId: a,
          allowEvents: i,
          immediate: r,
          testManual: l,
          verbose: c,
          rawData: s,
        }) => ({
          type: f,
          payload: {
            actionTypeId: e,
            actionListId: t,
            actionItemId: n,
            testManual: l,
            eventId: a,
            allowEvents: i,
            immediate: r,
            verbose: c,
            rawData: s,
          },
        }),
        M = (e) => ({ type: p, payload: { actionListId: e } }),
        G = () => ({ type: E }),
        x = (e, t) => ({ type: I, payload: { target: e, listenerParams: t } }),
        U = (e = 1) => ({ type: g, payload: { step: e } }),
        V = (e, t) => ({ type: y, payload: { stateKey: e, newState: t } }),
        D = (e, t) => ({ type: m, payload: { now: e, parameters: t } }),
        k = (e, t) => ({ type: T, payload: { key: e, value: t } }),
        B = (e) => ({ type: b, payload: { ...e } }),
        X = (e, t) => ({ type: O, payload: { instanceId: e, time: t } }),
        j = (e) => ({ type: v, payload: { instanceId: e } }),
        H = (e, t, n, a) => ({
          type: h,
          payload: { elementId: e, actionTypeId: t, current: n, actionItem: a },
        }),
        W = ({ actionListId: e, isPlaying: t }) => ({
          type: _,
          payload: { actionListId: e, isPlaying: t },
        }),
        Q = ({ width: e, mediaQueries: t }) => ({
          type: A,
          payload: { width: e, mediaQueries: t },
        }),
        z = () => ({ type: R });
    },
    6011: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          actions: function () {
            return s;
          },
          destroy: function () {
            return E;
          },
          init: function () {
            return p;
          },
          setEnv: function () {
            return f;
          },
          store: function () {
            return u;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = n(9516),
        l = (a = n(7243)) && a.__esModule ? a : { default: a },
        c = n(1970),
        s = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = d(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        })(n(3946));
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      let u = (0, r.createStore)(l.default);
      function f(e) {
        e() && (0, c.observeRequests)(u);
      }
      function p(e) {
        E(), (0, c.startEngine)({ store: u, rawData: e, allowEvents: !0 });
      }
      function E() {
        (0, c.stopEngine)(u);
      }
    },
    5012: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        elementContains: function () {
          return T;
        },
        getChildElements: function () {
          return O;
        },
        getClosestElement: function () {
          return h;
        },
        getProperty: function () {
          return E;
        },
        getQuerySelector: function () {
          return g;
        },
        getRefType: function () {
          return _;
        },
        getSiblingElements: function () {
          return v;
        },
        getStyle: function () {
          return p;
        },
        getValidDocument: function () {
          return y;
        },
        isSiblingNode: function () {
          return b;
        },
        matchSelector: function () {
          return I;
        },
        queryDocument: function () {
          return m;
        },
        setStyle: function () {
          return f;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(9468),
        r = n(7087),
        { ELEMENT_MATCHES: l } = o.IX2BrowserSupport,
        {
          IX2_ID_DELIMITER: c,
          HTML_ELEMENT: s,
          PLAIN_OBJECT: d,
          WF_PAGE: u,
        } = r.IX2EngineConstants;
      function f(e, t, n) {
        e.style[t] = n;
      }
      function p(e, t) {
        return t.startsWith("--")
          ? window
              .getComputedStyle(document.documentElement)
              .getPropertyValue(t)
          : e.style instanceof CSSStyleDeclaration
          ? e.style[t]
          : void 0;
      }
      function E(e, t) {
        return e[t];
      }
      function I(e) {
        return (t) => t[l](e);
      }
      function g({ id: e, selector: t }) {
        if (e) {
          let t = e;
          if (-1 !== e.indexOf(c)) {
            let n = e.split(c),
              a = n[0];
            if (((t = n[1]), a !== document.documentElement.getAttribute(u)))
              return null;
          }
          return `[data-w-id="${t}"], [data-w-id^="${t}_instance"]`;
        }
        return t;
      }
      function y(e) {
        return null == e || e === document.documentElement.getAttribute(u)
          ? document
          : null;
      }
      function m(e, t) {
        return Array.prototype.slice.call(
          document.querySelectorAll(t ? e + " " + t : e)
        );
      }
      function T(e, t) {
        return e.contains(t);
      }
      function b(e, t) {
        return e !== t && e.parentNode === t.parentNode;
      }
      function O(e) {
        let t = [];
        for (let n = 0, { length: a } = e || []; n < a; n++) {
          let { children: a } = e[n],
            { length: i } = a;
          if (i) for (let e = 0; e < i; e++) t.push(a[e]);
        }
        return t;
      }
      function v(e = []) {
        let t = [],
          n = [];
        for (let a = 0, { length: i } = e; a < i; a++) {
          let { parentNode: i } = e[a];
          if (!i || !i.children || !i.children.length || -1 !== n.indexOf(i))
            continue;
          n.push(i);
          let o = i.firstElementChild;
          for (; null != o; )
            -1 === e.indexOf(o) && t.push(o), (o = o.nextElementSibling);
        }
        return t;
      }
      let h = Element.prototype.closest
        ? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
        : (e, t) => {
            if (!document.documentElement.contains(e)) return null;
            let n = e;
            do {
              if (n[l] && n[l](t)) return n;
              n = n.parentNode;
            } while (null != n);
            return null;
          };
      function _(e) {
        return null != e && "object" == typeof e
          ? e instanceof Element
            ? s
            : d
          : null;
      }
    },
    1970: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        observeRequests: function () {
          return K;
        },
        startActionGroup: function () {
          return eE;
        },
        startEngine: function () {
          return ea;
        },
        stopActionGroup: function () {
          return ep;
        },
        stopAllActionGroups: function () {
          return ef;
        },
        stopEngine: function () {
          return ei;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = m(n(9777)),
        r = m(n(4738)),
        l = m(n(4659)),
        c = m(n(3452)),
        s = m(n(6633)),
        d = m(n(3729)),
        u = m(n(2397)),
        f = m(n(5082)),
        p = n(7087),
        E = n(9468),
        I = n(3946),
        g = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = T(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        })(n(5012)),
        y = m(n(8955));
      function m(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function T(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (T = function (e) {
          return e ? n : t;
        })(e);
      }
      let b = Object.keys(p.QuickEffectIds),
        O = (e) => b.includes(e),
        {
          COLON_DELIMITER: v,
          BOUNDARY_SELECTOR: h,
          HTML_ELEMENT: _,
          RENDER_GENERAL: A,
          W_MOD_IX: R,
        } = p.IX2EngineConstants,
        {
          getAffectedElements: S,
          getElementId: L,
          getDestinationValues: N,
          observeStore: C,
          getInstanceId: w,
          renderHTMLElement: P,
          clearAllStyles: F,
          getMaxDurationItemIndex: M,
          getComputedStyle: G,
          getInstanceOrigin: x,
          reduceListToGroup: U,
          shouldNamespaceEventParameter: V,
          getNamespacedParameterId: D,
          shouldAllowMediaQuery: k,
          cleanupHTMLElement: B,
          clearObjectCache: X,
          stringifyTarget: j,
          mediaQueriesEqual: H,
          shallowEqual: W,
        } = E.IX2VanillaUtils,
        {
          isPluginType: Q,
          createPluginInstance: z,
          getPluginDuration: Y,
        } = E.IX2VanillaPlugins,
        $ = navigator.userAgent,
        q = $.match(/iPad/i) || $.match(/iPhone/);
      function K(e) {
        C({ store: e, select: ({ ixRequest: e }) => e.preview, onChange: Z }),
          C({
            store: e,
            select: ({ ixRequest: e }) => e.playback,
            onChange: ee,
          }),
          C({ store: e, select: ({ ixRequest: e }) => e.stop, onChange: et }),
          C({ store: e, select: ({ ixRequest: e }) => e.clear, onChange: en });
      }
      function Z({ rawData: e, defer: t }, n) {
        let a = () => {
          ea({ store: n, rawData: e, allowEvents: !0 }), J();
        };
        t ? setTimeout(a, 0) : a();
      }
      function J() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
      }
      function ee(e, t) {
        let {
            actionTypeId: n,
            actionListId: a,
            actionItemId: i,
            eventId: o,
            allowEvents: r,
            immediate: l,
            testManual: c,
            verbose: s = !0,
          } = e,
          { rawData: d } = e;
        if (a && i && d && l) {
          let e = d.actionLists[a];
          e && (d = U({ actionList: e, actionItemId: i, rawData: d }));
        }
        if (
          (ea({ store: t, rawData: d, allowEvents: r, testManual: c }),
          (a && n === p.ActionTypeConsts.GENERAL_START_ACTION) || O(n))
        ) {
          ep({ store: t, actionListId: a }),
            eu({ store: t, actionListId: a, eventId: o });
          let e = eE({
            store: t,
            eventId: o,
            actionListId: a,
            immediate: l,
            verbose: s,
          });
          s &&
            e &&
            t.dispatch(
              (0, I.actionListPlaybackChanged)({
                actionListId: a,
                isPlaying: !l,
              })
            );
        }
      }
      function et({ actionListId: e }, t) {
        e ? ep({ store: t, actionListId: e }) : ef({ store: t }), ei(t);
      }
      function en(e, t) {
        ei(t), F({ store: t, elementApi: g });
      }
      function ea({ store: e, rawData: t, allowEvents: n, testManual: a }) {
        let { ixSession: i } = e.getState();
        if ((t && e.dispatch((0, I.rawDataImported)(t)), !i.active)) {
          (e.dispatch(
            (0, I.sessionInitialized)({
              hasBoundaryNodes: !!document.querySelector(h),
              reducedMotion:
                document.body.hasAttribute("data-wf-ix-vacation") &&
                window.matchMedia("(prefers-reduced-motion)").matches,
            })
          ),
          n) &&
            ((function (e) {
              let { ixData: t } = e.getState(),
                { eventTypeMap: n } = t;
              el(e),
                (0, u.default)(n, (t, n) => {
                  let a = y.default[n];
                  if (!a)
                    return void console.warn(
                      `IX2 event type not configured: ${n}`
                    );
                  !(function ({ logic: e, store: t, events: n }) {
                    !(function (e) {
                      if (!q) return;
                      let t = {},
                        n = "";
                      for (let a in e) {
                        let { eventTypeId: i, target: o } = e[a],
                          r = g.getQuerySelector(o);
                        t[r] ||
                          ((i === p.EventTypeConsts.MOUSE_CLICK ||
                            i === p.EventTypeConsts.MOUSE_SECOND_CLICK) &&
                            ((t[r] = !0),
                            (n +=
                              r +
                              "{cursor: pointer;touch-action: manipulation;}")));
                      }
                      if (n) {
                        let e = document.createElement("style");
                        (e.textContent = n), document.body.appendChild(e);
                      }
                    })(n);
                    let { types: a, handler: i } = e,
                      { ixData: c } = t.getState(),
                      { actionLists: s } = c,
                      d = ec(n, ed);
                    if (!(0, l.default)(d)) return;
                    (0, u.default)(d, (e, a) => {
                      let i = n[a],
                        {
                          action: l,
                          id: d,
                          mediaQueries: u = c.mediaQueryKeys,
                        } = i,
                        { actionListId: f } = l.config;
                      H(u, c.mediaQueryKeys) ||
                        t.dispatch((0, I.mediaQueriesDefined)()),
                        l.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
                          (Array.isArray(i.config)
                            ? i.config
                            : [i.config]
                          ).forEach((n) => {
                            let { continuousParameterGroupId: a } = n,
                              i = (0, r.default)(
                                s,
                                `${f}.continuousParameterGroups`,
                                []
                              ),
                              l = (0, o.default)(i, ({ id: e }) => e === a),
                              c = (n.smoothing || 0) / 100,
                              u = (n.restingState || 0) / 100;
                            l &&
                              e.forEach((e, a) => {
                                !(function ({
                                  store: e,
                                  eventStateKey: t,
                                  eventTarget: n,
                                  eventId: a,
                                  eventConfig: i,
                                  actionListId: o,
                                  parameterGroup: l,
                                  smoothing: c,
                                  restingValue: s,
                                }) {
                                  let { ixData: d, ixSession: u } =
                                      e.getState(),
                                    { events: f } = d,
                                    E = f[a],
                                    { eventTypeId: I } = E,
                                    y = {},
                                    m = {},
                                    T = [],
                                    { continuousActionGroups: b } = l,
                                    { id: O } = l;
                                  V(I, i) && (O = D(t, O));
                                  let _ =
                                    u.hasBoundaryNodes && n
                                      ? g.getClosestElement(n, h)
                                      : null;
                                  b.forEach((e) => {
                                    let { keyframe: t, actionItems: a } = e;
                                    a.forEach((e) => {
                                      let { actionTypeId: a } = e,
                                        { target: i } = e.config;
                                      if (!i) return;
                                      let o = i.boundaryMode ? _ : null,
                                        r = j(i) + v + a;
                                      if (
                                        ((m[r] = (function (e = [], t, n) {
                                          let a,
                                            i = [...e];
                                          return (
                                            i.some(
                                              (e, n) =>
                                                e.keyframe === t &&
                                                ((a = n), !0)
                                            ),
                                            null == a &&
                                              ((a = i.length),
                                              i.push({
                                                keyframe: t,
                                                actionItems: [],
                                              })),
                                            i[a].actionItems.push(n),
                                            i
                                          );
                                        })(m[r], t, e)),
                                        !y[r])
                                      ) {
                                        y[r] = !0;
                                        let { config: t } = e;
                                        S({
                                          config: t,
                                          event: E,
                                          eventTarget: n,
                                          elementRoot: o,
                                          elementApi: g,
                                        }).forEach((e) => {
                                          T.push({ element: e, key: r });
                                        });
                                      }
                                    });
                                  }),
                                    T.forEach(({ element: t, key: n }) => {
                                      let i = m[n],
                                        l = (0, r.default)(
                                          i,
                                          "[0].actionItems[0]",
                                          {}
                                        ),
                                        { actionTypeId: d } = l,
                                        u = (
                                          d === p.ActionTypeConsts.PLUGIN_RIVE
                                            ? 0 ===
                                              (
                                                l.config?.target
                                                  ?.selectorGuids || []
                                              ).length
                                            : Q(d)
                                        )
                                          ? z(d)?.(t, l)
                                          : null,
                                        f = N(
                                          {
                                            element: t,
                                            actionItem: l,
                                            elementApi: g,
                                          },
                                          u
                                        );
                                      eI({
                                        store: e,
                                        element: t,
                                        eventId: a,
                                        actionListId: o,
                                        actionItem: l,
                                        destination: f,
                                        continuous: !0,
                                        parameterId: O,
                                        actionGroups: i,
                                        smoothing: c,
                                        restingValue: s,
                                        pluginInstance: u,
                                      });
                                    });
                                })({
                                  store: t,
                                  eventStateKey: d + v + a,
                                  eventTarget: e,
                                  eventId: d,
                                  eventConfig: n,
                                  actionListId: f,
                                  parameterGroup: l,
                                  smoothing: c,
                                  restingValue: u,
                                });
                              });
                          }),
                        (l.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_START_ACTION ||
                          O(l.actionTypeId)) &&
                          eu({ store: t, actionListId: f, eventId: d });
                    });
                    let E = (e) => {
                        let { ixSession: a } = t.getState();
                        es(d, (o, r, l) => {
                          let s = n[r],
                            d = a.eventState[l],
                            { action: u, mediaQueries: f = c.mediaQueryKeys } =
                              s;
                          if (!k(f, a.mediaQueryKey)) return;
                          let E = (n = {}) => {
                            let a = i(
                              {
                                store: t,
                                element: o,
                                event: s,
                                eventConfig: n,
                                nativeEvent: e,
                                eventStateKey: l,
                              },
                              d
                            );
                            W(a, d) ||
                              t.dispatch((0, I.eventStateChanged)(l, a));
                          };
                          u.actionTypeId ===
                          p.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
                            ? (Array.isArray(s.config)
                                ? s.config
                                : [s.config]
                              ).forEach(E)
                            : E();
                        });
                      },
                      y = (0, f.default)(E, 12),
                      m = ({ target: e = document, types: n, throttle: a }) => {
                        n.split(" ")
                          .filter(Boolean)
                          .forEach((n) => {
                            let i = a ? y : E;
                            e.addEventListener(n, i),
                              t.dispatch((0, I.eventListenerAdded)(e, [n, i]));
                          });
                      };
                    Array.isArray(a)
                      ? a.forEach(m)
                      : "string" == typeof a && m(e);
                  })({ logic: a, store: e, events: t });
                });
              let { ixSession: a } = e.getState();
              a.eventListeners.length &&
                (function (e) {
                  let t = () => {
                    el(e);
                  };
                  er.forEach((n) => {
                    window.addEventListener(n, t),
                      e.dispatch((0, I.eventListenerAdded)(window, [n, t]));
                  }),
                    t();
                })(e);
            })(e),
            (function () {
              let { documentElement: e } = document;
              -1 === e.className.indexOf(R) && (e.className += ` ${R}`);
            })(),
            e.getState().ixSession.hasDefinedMediaQueries &&
              C({
                store: e,
                select: ({ ixSession: e }) => e.mediaQueryKey,
                onChange: () => {
                  ei(e),
                    F({ store: e, elementApi: g }),
                    ea({ store: e, allowEvents: !0 }),
                    J();
                },
              }));
          e.dispatch((0, I.sessionStarted)()),
            (function (e, t) {
              let n = (a) => {
                let { ixSession: i, ixParameters: o } = e.getState();
                if (i.active)
                  if ((e.dispatch((0, I.animationFrameChanged)(a, o)), t)) {
                    let t = C({
                      store: e,
                      select: ({ ixSession: e }) => e.tick,
                      onChange: (e) => {
                        n(e), t();
                      },
                    });
                  } else requestAnimationFrame(n);
              };
              n(window.performance.now());
            })(e, a);
        }
      }
      function ei(e) {
        let { ixSession: t } = e.getState();
        if (t.active) {
          let { eventListeners: n } = t;
          n.forEach(eo), X(), e.dispatch((0, I.sessionStopped)());
        }
      }
      function eo({ target: e, listenerParams: t }) {
        e.removeEventListener.apply(e, t);
      }
      let er = ["resize", "orientationchange"];
      function el(e) {
        let { ixSession: t, ixData: n } = e.getState(),
          a = window.innerWidth;
        if (a !== t.viewportWidth) {
          let { mediaQueries: t } = n;
          e.dispatch(
            (0, I.viewportWidthChanged)({ width: a, mediaQueries: t })
          );
        }
      }
      let ec = (e, t) => (0, c.default)((0, d.default)(e, t), s.default),
        es = (e, t) => {
          (0, u.default)(e, (e, n) => {
            e.forEach((e, a) => {
              t(e, n, n + v + a);
            });
          });
        },
        ed = (e) =>
          S({
            config: { target: e.target, targets: e.targets },
            elementApi: g,
          });
      function eu({ store: e, actionListId: t, eventId: n }) {
        let { ixData: a, ixSession: i } = e.getState(),
          { actionLists: o, events: l } = a,
          c = l[n],
          s = o[t];
        if (s && s.useFirstGroupAsInitialState) {
          let o = (0, r.default)(s, "actionItemGroups[0].actionItems", []);
          if (
            !k(
              (0, r.default)(c, "mediaQueries", a.mediaQueryKeys),
              i.mediaQueryKey
            )
          )
            return;
          o.forEach((a) => {
            let { config: i, actionTypeId: o } = a,
              r = S({
                config:
                  i?.target?.useEventTarget === !0 &&
                  i?.target?.objectId == null
                    ? { target: c.target, targets: c.targets }
                    : i,
                event: c,
                elementApi: g,
              }),
              l = Q(o);
            r.forEach((i) => {
              let r = l ? z(o)?.(i, a) : null;
              eI({
                destination: N({ element: i, actionItem: a, elementApi: g }, r),
                immediate: !0,
                store: e,
                element: i,
                eventId: n,
                actionItem: a,
                actionListId: t,
                pluginInstance: r,
              });
            });
          });
        }
      }
      function ef({ store: e }) {
        let { ixInstances: t } = e.getState();
        (0, u.default)(t, (t) => {
          if (!t.continuous) {
            let { actionListId: n, verbose: a } = t;
            eg(t, e),
              a &&
                e.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: n,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function ep({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: i,
      }) {
        let { ixInstances: o, ixSession: l } = e.getState(),
          c = l.hasBoundaryNodes && n ? g.getClosestElement(n, h) : null;
        (0, u.default)(o, (n) => {
          let o = (0, r.default)(n, "actionItem.config.target.boundaryMode"),
            l = !a || n.eventStateKey === a;
          if (n.actionListId === i && n.eventId === t && l) {
            if (c && o && !g.elementContains(c, n.element)) return;
            eg(n, e),
              n.verbose &&
                e.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: i,
                    isPlaying: !1,
                  })
                );
          }
        });
      }
      function eE({
        store: e,
        eventId: t,
        eventTarget: n,
        eventStateKey: a,
        actionListId: i,
        groupIndex: o = 0,
        immediate: l,
        verbose: c,
      }) {
        let { ixData: s, ixSession: d } = e.getState(),
          { events: u } = s,
          f = u[t] || {},
          { mediaQueries: p = s.mediaQueryKeys } = f,
          { actionItemGroups: E, useFirstGroupAsInitialState: I } = (0,
          r.default)(s, `actionLists.${i}`, {});
        if (!E || !E.length) return !1;
        o >= E.length && (0, r.default)(f, "config.loop") && (o = 0),
          0 === o && I && o++;
        let y =
            (0 === o || (1 === o && I)) && O(f.action?.actionTypeId)
              ? f.config.delay
              : void 0,
          m = (0, r.default)(E, [o, "actionItems"], []);
        if (!m.length || !k(p, d.mediaQueryKey)) return !1;
        let T = d.hasBoundaryNodes && n ? g.getClosestElement(n, h) : null,
          b = M(m),
          v = !1;
        return (
          m.forEach((r, s) => {
            let { config: d, actionTypeId: u } = r,
              p = Q(u),
              { target: E } = d;
            E &&
              S({
                config: d,
                event: f,
                eventTarget: n,
                elementRoot: E.boundaryMode ? T : null,
                elementApi: g,
              }).forEach((d, f) => {
                let E = p ? z(u)?.(d, r) : null,
                  I = p ? Y(u)(d, r) : null;
                v = !0;
                let m = G({ element: d, actionItem: r }),
                  T = N({ element: d, actionItem: r, elementApi: g }, E);
                eI({
                  store: e,
                  element: d,
                  actionItem: r,
                  eventId: t,
                  eventTarget: n,
                  eventStateKey: a,
                  actionListId: i,
                  groupIndex: o,
                  isCarrier: b === s && 0 === f,
                  computedStyle: m,
                  destination: T,
                  immediate: l,
                  verbose: c,
                  pluginInstance: E,
                  pluginDuration: I,
                  instanceDelay: y,
                });
              });
          }),
          v
        );
      }
      function eI(e) {
        let t,
          { store: n, computedStyle: a, ...i } = e,
          {
            element: o,
            actionItem: r,
            immediate: l,
            pluginInstance: c,
            continuous: s,
            restingValue: d,
            eventId: u,
          } = i,
          f = w(),
          { ixElements: E, ixSession: y, ixData: m } = n.getState(),
          T = L(E, o),
          { refState: b } = E[T] || {},
          O = g.getRefType(o),
          v = y.reducedMotion && p.ReducedMotionTypes[r.actionTypeId];
        if (v && s)
          switch (m.events[u]?.eventTypeId) {
            case p.EventTypeConsts.MOUSE_MOVE:
            case p.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
              t = d;
              break;
            default:
              t = 0.5;
          }
        let h = x(o, b, a, r, g, c);
        if (
          (n.dispatch(
            (0, I.instanceAdded)({
              instanceId: f,
              elementId: T,
              origin: h,
              refType: O,
              skipMotion: v,
              skipToValue: t,
              ...i,
            })
          ),
          ey(document.body, "ix2-animation-started", f),
          l)
        )
          return void (function (e, t) {
            let { ixParameters: n } = e.getState();
            e.dispatch((0, I.instanceStarted)(t, 0)),
              e.dispatch((0, I.animationFrameChanged)(performance.now(), n));
            let { ixInstances: a } = e.getState();
            em(a[t], e);
          })(n, f);
        C({ store: n, select: ({ ixInstances: e }) => e[f], onChange: em }),
          s || n.dispatch((0, I.instanceStarted)(f, y.tick));
      }
      function eg(e, t) {
        ey(document.body, "ix2-animation-stopping", {
          instanceId: e.id,
          state: t.getState(),
        });
        let { elementId: n, actionItem: a } = e,
          { ixElements: i } = t.getState(),
          { ref: o, refType: r } = i[n] || {};
        r === _ && B(o, a, g), t.dispatch((0, I.instanceRemoved)(e.id));
      }
      function ey(e, t, n) {
        let a = document.createEvent("CustomEvent");
        a.initCustomEvent(t, !0, !0, n), e.dispatchEvent(a);
      }
      function em(e, t) {
        let {
            active: n,
            continuous: a,
            complete: i,
            elementId: o,
            actionItem: r,
            actionTypeId: l,
            renderType: c,
            current: s,
            groupIndex: d,
            eventId: u,
            eventTarget: f,
            eventStateKey: p,
            actionListId: E,
            isCarrier: y,
            styleProp: m,
            verbose: T,
            pluginInstance: b,
          } = e,
          { ixData: O, ixSession: v } = t.getState(),
          { events: h } = O,
          { mediaQueries: R = O.mediaQueryKeys } = h && h[u] ? h[u] : {};
        if (k(R, v.mediaQueryKey) && (a || n || i)) {
          if (s || (c === A && i)) {
            t.dispatch((0, I.elementStateChanged)(o, l, s, r));
            let { ixElements: e } = t.getState(),
              { ref: n, refType: a, refState: i } = e[o] || {},
              d = i && i[l];
            (a === _ || Q(l)) && P(n, i, d, u, r, m, g, c, b);
          }
          if (i) {
            if (y) {
              let e = eE({
                store: t,
                eventId: u,
                eventTarget: f,
                eventStateKey: p,
                actionListId: E,
                groupIndex: d + 1,
                verbose: T,
              });
              T &&
                !e &&
                t.dispatch(
                  (0, I.actionListPlaybackChanged)({
                    actionListId: E,
                    isPlaying: !1,
                  })
                );
            }
            eg(e, t);
          }
        }
      }
    },
    8955: function (e, t, n) {
      "use strict";
      let a;
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return ep;
          },
        });
      let i = u(n(5801)),
        o = u(n(4738)),
        r = u(n(3789)),
        l = n(7087),
        c = n(1970),
        s = n(3946),
        d = n(9468);
      function u(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          MOUSE_CLICK: f,
          MOUSE_SECOND_CLICK: p,
          MOUSE_DOWN: E,
          MOUSE_UP: I,
          MOUSE_OVER: g,
          MOUSE_OUT: y,
          DROPDOWN_CLOSE: m,
          DROPDOWN_OPEN: T,
          SLIDER_ACTIVE: b,
          SLIDER_INACTIVE: O,
          TAB_ACTIVE: v,
          TAB_INACTIVE: h,
          NAVBAR_CLOSE: _,
          NAVBAR_OPEN: A,
          MOUSE_MOVE: R,
          PAGE_SCROLL_DOWN: S,
          SCROLL_INTO_VIEW: L,
          SCROLL_OUT_OF_VIEW: N,
          PAGE_SCROLL_UP: C,
          SCROLLING_IN_VIEW: w,
          PAGE_FINISH: P,
          ECOMMERCE_CART_CLOSE: F,
          ECOMMERCE_CART_OPEN: M,
          PAGE_START: G,
          PAGE_SCROLL: x,
        } = l.EventTypeConsts,
        U = "COMPONENT_ACTIVE",
        V = "COMPONENT_INACTIVE",
        { COLON_DELIMITER: D } = l.IX2EngineConstants,
        { getNamespacedParameterId: k } = d.IX2VanillaUtils,
        B = (e) => (t) => !!("object" == typeof t && e(t)) || t,
        X = B(({ element: e, nativeEvent: t }) => e === t.target),
        j = B(({ element: e, nativeEvent: t }) => e.contains(t.target)),
        H = (0, i.default)([X, j]),
        W = (e, t) => {
          if (t) {
            let { ixData: n } = e.getState(),
              { events: a } = n,
              i = a[t];
            if (i && !ee[i.eventTypeId]) return i;
          }
          return null;
        },
        Q = ({ store: e, event: t }) => {
          let { action: n } = t,
            { autoStopEventId: a } = n.config;
          return !!W(e, a);
        },
        z = ({ store: e, event: t, element: n, eventStateKey: a }, i) => {
          let { action: r, id: l } = t,
            { actionListId: s, autoStopEventId: d } = r.config,
            u = W(e, d);
          return (
            u &&
              (0, c.stopActionGroup)({
                store: e,
                eventId: d,
                eventTarget: n,
                eventStateKey: d + D + a.split(D)[1],
                actionListId: (0, o.default)(u, "action.config.actionListId"),
              }),
            (0, c.stopActionGroup)({
              store: e,
              eventId: l,
              eventTarget: n,
              eventStateKey: a,
              actionListId: s,
            }),
            (0, c.startActionGroup)({
              store: e,
              eventId: l,
              eventTarget: n,
              eventStateKey: a,
              actionListId: s,
            }),
            i
          );
        },
        Y = (e, t) => (n, a) => !0 === e(n, a) ? t(n, a) : a,
        $ = { handler: Y(H, z) },
        q = { ...$, types: [U, V].join(" ") },
        K = [
          { target: window, types: "resize orientationchange", throttle: !0 },
          {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0,
          },
        ],
        Z = "mouseover mouseout",
        J = { types: K },
        ee = { PAGE_START: G, PAGE_FINISH: P },
        et = (() => {
          let e = void 0 !== window.pageXOffset,
            t =
              "CSS1Compat" === document.compatMode
                ? document.documentElement
                : document.body;
          return () => ({
            scrollLeft: e ? window.pageXOffset : t.scrollLeft,
            scrollTop: e ? window.pageYOffset : t.scrollTop,
            stiffScrollTop: (0, r.default)(
              e ? window.pageYOffset : t.scrollTop,
              0,
              t.scrollHeight - window.innerHeight
            ),
            scrollWidth: t.scrollWidth,
            scrollHeight: t.scrollHeight,
            clientWidth: t.clientWidth,
            clientHeight: t.clientHeight,
            innerWidth: window.innerWidth,
            innerHeight: window.innerHeight,
          });
        })(),
        en = (e, t) =>
          !(
            e.left > t.right ||
            e.right < t.left ||
            e.top > t.bottom ||
            e.bottom < t.top
          ),
        ea = ({ element: e, nativeEvent: t }) => {
          let { type: n, target: a, relatedTarget: i } = t,
            o = e.contains(a);
          if ("mouseover" === n && o) return !0;
          let r = e.contains(i);
          return "mouseout" === n && !!o && !!r;
        },
        ei = (e) => {
          let {
              element: t,
              event: { config: n },
            } = e,
            { clientWidth: a, clientHeight: i } = et(),
            o = n.scrollOffsetValue,
            r = "PX" === n.scrollOffsetUnit ? o : (i * (o || 0)) / 100;
          return en(t.getBoundingClientRect(), {
            left: 0,
            top: r,
            right: a,
            bottom: i - r,
          });
        },
        eo = (e) => (t, n) => {
          let { type: a } = t.nativeEvent,
            i = -1 !== [U, V].indexOf(a) ? a === U : n.isActive,
            o = { ...n, isActive: i };
          return ((!n || o.isActive !== n.isActive) && e(t, o)) || o;
        },
        er = (e) => (t, n) => {
          let a = { elementHovered: ea(t) };
          return (
            ((n ? a.elementHovered !== n.elementHovered : a.elementHovered) &&
              e(t, a)) ||
            a
          );
        },
        el =
          (e) =>
          (t, n = {}) => {
            let a,
              i,
              { stiffScrollTop: o, scrollHeight: r, innerHeight: l } = et(),
              {
                event: { config: c, eventTypeId: s },
              } = t,
              { scrollOffsetValue: d, scrollOffsetUnit: u } = c,
              f = r - l,
              p = Number((o / f).toFixed(2));
            if (n && n.percentTop === p) return n;
            let E = ("PX" === u ? d : (l * (d || 0)) / 100) / f,
              I = 0;
            n &&
              ((a = p > n.percentTop),
              (I = (i = n.scrollingDown !== a) ? p : n.anchorTop));
            let g = s === S ? p >= I + E : p <= I - E,
              y = {
                ...n,
                percentTop: p,
                inBounds: g,
                anchorTop: I,
                scrollingDown: a,
              };
            return (n && g && (i || y.inBounds !== n.inBounds) && e(t, y)) || y;
          },
        ec = (e, t) =>
          e.left > t.left &&
          e.left < t.right &&
          e.top > t.top &&
          e.top < t.bottom,
        es =
          (e) =>
          (t, n = { clickCount: 0 }) => {
            let a = { clickCount: (n.clickCount % 2) + 1 };
            return (a.clickCount !== n.clickCount && e(t, a)) || a;
          },
        ed = (e = !0) => ({
          ...q,
          handler: Y(
            e ? H : X,
            eo((e, t) => (t.isActive ? $.handler(e, t) : t))
          ),
        }),
        eu = (e = !0) => ({
          ...q,
          handler: Y(
            e ? H : X,
            eo((e, t) => (t.isActive ? t : $.handler(e, t)))
          ),
        }),
        ef = {
          ...J,
          handler:
            ((a = (e, t) => {
              let { elementVisible: n } = t,
                { event: a, store: i } = e,
                { ixData: o } = i.getState(),
                { events: r } = o;
              return !r[a.action.config.autoStopEventId] && t.triggered
                ? t
                : (a.eventTypeId === L) === n
                ? (z(e), { ...t, triggered: !0 })
                : t;
            }),
            (e, t) => {
              let n = { ...t, elementVisible: ei(e) };
              return (
                ((t
                  ? n.elementVisible !== t.elementVisible
                  : n.elementVisible) &&
                  a(e, n)) ||
                n
              );
            }),
        },
        ep = {
          [b]: ed(),
          [O]: eu(),
          [T]: ed(),
          [m]: eu(),
          [A]: ed(!1),
          [_]: eu(!1),
          [v]: ed(),
          [h]: eu(),
          [M]: { types: "ecommerce-cart-open", handler: Y(H, z) },
          [F]: { types: "ecommerce-cart-close", handler: Y(H, z) },
          [f]: {
            types: "click",
            handler: Y(
              H,
              es((e, { clickCount: t }) => {
                Q(e) ? 1 === t && z(e) : z(e);
              })
            ),
          },
          [p]: {
            types: "click",
            handler: Y(
              H,
              es((e, { clickCount: t }) => {
                2 === t && z(e);
              })
            ),
          },
          [E]: { ...$, types: "mousedown" },
          [I]: { ...$, types: "mouseup" },
          [g]: {
            types: Z,
            handler: Y(
              H,
              er((e, t) => {
                t.elementHovered && z(e);
              })
            ),
          },
          [y]: {
            types: Z,
            handler: Y(
              H,
              er((e, t) => {
                t.elementHovered || z(e);
              })
            ),
          },
          [R]: {
            types: "mousemove mouseout scroll",
            handler: (
              {
                store: e,
                element: t,
                eventConfig: n,
                nativeEvent: a,
                eventStateKey: i,
              },
              o = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
            ) => {
              let {
                  basedOn: r,
                  selectedAxis: c,
                  continuousParameterGroupId: d,
                  reverse: u,
                  restingState: f = 0,
                } = n,
                {
                  clientX: p = o.clientX,
                  clientY: E = o.clientY,
                  pageX: I = o.pageX,
                  pageY: g = o.pageY,
                } = a,
                y = "X_AXIS" === c,
                m = "mouseout" === a.type,
                T = f / 100,
                b = d,
                O = !1;
              switch (r) {
                case l.EventBasedOn.VIEWPORT:
                  T = y
                    ? Math.min(p, window.innerWidth) / window.innerWidth
                    : Math.min(E, window.innerHeight) / window.innerHeight;
                  break;
                case l.EventBasedOn.PAGE: {
                  let {
                    scrollLeft: e,
                    scrollTop: t,
                    scrollWidth: n,
                    scrollHeight: a,
                  } = et();
                  T = y ? Math.min(e + I, n) / n : Math.min(t + g, a) / a;
                  break;
                }
                case l.EventBasedOn.ELEMENT:
                default: {
                  b = k(i, d);
                  let e = 0 === a.type.indexOf("mouse");
                  if (e && !0 !== H({ element: t, nativeEvent: a })) break;
                  let n = t.getBoundingClientRect(),
                    { left: o, top: r, width: l, height: c } = n;
                  if (!e && !ec({ left: p, top: E }, n)) break;
                  (O = !0), (T = y ? (p - o) / l : (E - r) / c);
                }
              }
              return (
                m && (T > 0.95 || T < 0.05) && (T = Math.round(T)),
                (r !== l.EventBasedOn.ELEMENT || O || O !== o.elementHovered) &&
                  ((T = u ? 1 - T : T),
                  e.dispatch((0, s.parameterChanged)(b, T))),
                {
                  elementHovered: O,
                  clientX: p,
                  clientY: E,
                  pageX: I,
                  pageY: g,
                }
              );
            },
          },
          [x]: {
            types: K,
            handler: ({ store: e, eventConfig: t }) => {
              let { continuousParameterGroupId: n, reverse: a } = t,
                { scrollTop: i, scrollHeight: o, clientHeight: r } = et(),
                l = i / (o - r);
              (l = a ? 1 - l : l), e.dispatch((0, s.parameterChanged)(n, l));
            },
          },
          [w]: {
            types: K,
            handler: (
              { element: e, store: t, eventConfig: n, eventStateKey: a },
              i = { scrollPercent: 0 }
            ) => {
              let {
                  scrollLeft: o,
                  scrollTop: r,
                  scrollWidth: c,
                  scrollHeight: d,
                  clientHeight: u,
                } = et(),
                {
                  basedOn: f,
                  selectedAxis: p,
                  continuousParameterGroupId: E,
                  startsEntering: I,
                  startsExiting: g,
                  addEndOffset: y,
                  addStartOffset: m,
                  addOffsetValue: T = 0,
                  endOffsetValue: b = 0,
                } = n;
              if (f === l.EventBasedOn.VIEWPORT) {
                let e = "X_AXIS" === p ? o / c : r / d;
                return (
                  e !== i.scrollPercent &&
                    t.dispatch((0, s.parameterChanged)(E, e)),
                  { scrollPercent: e }
                );
              }
              {
                let n = k(a, E),
                  o = e.getBoundingClientRect(),
                  r = (m ? T : 0) / 100,
                  l = (y ? b : 0) / 100;
                (r = I ? r : 1 - r), (l = g ? l : 1 - l);
                let c = o.top + Math.min(o.height * r, u),
                  f = Math.min(u + (o.top + o.height * l - c), d),
                  p = Math.min(Math.max(0, u - c), f) / f;
                return (
                  p !== i.scrollPercent &&
                    t.dispatch((0, s.parameterChanged)(n, p)),
                  { scrollPercent: p }
                );
              }
            },
          },
          [L]: ef,
          [N]: ef,
          [S]: {
            ...J,
            handler: el((e, t) => {
              t.scrollingDown && z(e);
            }),
          },
          [C]: {
            ...J,
            handler: el((e, t) => {
              t.scrollingDown || z(e);
            }),
          },
          [P]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Y(X, (e, t) => {
              let n = { finished: "complete" === document.readyState };
              return n.finished && !(t && t.finshed) && z(e), n;
            }),
          },
          [G]: {
            types: "readystatechange IX2_PAGE_UPDATE",
            handler: Y(X, (e, t) => (t || z(e), { started: !0 })),
          },
        };
    },
    4609: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixData", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let { IX2_RAW_DATA_IMPORTED: a } = n(7087).IX2EngineActionTypes,
        i = (e = Object.freeze({}), t) =>
          t.type === a ? t.payload.ixData || Object.freeze({}) : e;
    },
    7718: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixInstances", {
          enumerable: !0,
          get: function () {
            return O;
          },
        });
      let a = n(7087),
        i = n(9468),
        o = n(1185),
        {
          IX2_RAW_DATA_IMPORTED: r,
          IX2_SESSION_STOPPED: l,
          IX2_INSTANCE_ADDED: c,
          IX2_INSTANCE_STARTED: s,
          IX2_INSTANCE_REMOVED: d,
          IX2_ANIMATION_FRAME_CHANGED: u,
        } = a.IX2EngineActionTypes,
        {
          optimizeFloat: f,
          applyEasing: p,
          createBezierEasing: E,
        } = i.IX2EasingUtils,
        { RENDER_GENERAL: I } = a.IX2EngineConstants,
        {
          getItemConfigByKey: g,
          getRenderType: y,
          getStyleProp: m,
        } = i.IX2VanillaUtils,
        T = (e, t) => {
          let n,
            a,
            i,
            r,
            {
              position: l,
              parameterId: c,
              actionGroups: s,
              destinationKeys: d,
              smoothing: u,
              restingValue: E,
              actionTypeId: I,
              customEasingFn: y,
              skipMotion: m,
              skipToValue: T,
            } = e,
            { parameters: b } = t.payload,
            O = Math.max(1 - u, 0.01),
            v = b[c];
          null == v && ((O = 1), (v = E));
          let h = f((Math.max(v, 0) || 0) - l),
            _ = m ? T : f(l + h * O),
            A = 100 * _;
          if (_ === l && e.current) return e;
          for (let e = 0, { length: t } = s; e < t; e++) {
            let { keyframe: t, actionItems: o } = s[e];
            if ((0 === e && (n = o[0]), A >= t)) {
              n = o[0];
              let l = s[e + 1],
                c = l && A !== t;
              (a = c ? l.actionItems[0] : null),
                c && ((i = t / 100), (r = (l.keyframe - t) / 100));
            }
          }
          let R = {};
          if (n && !a)
            for (let e = 0, { length: t } = d; e < t; e++) {
              let t = d[e];
              R[t] = g(I, t, n.config);
            }
          else if (n && a && void 0 !== i && void 0 !== r) {
            let e = (_ - i) / r,
              t = p(n.config.easing, e, y);
            for (let e = 0, { length: i } = d; e < i; e++) {
              let i = d[e],
                o = g(I, i, n.config),
                r = (g(I, i, a.config) - o) * t + o;
              R[i] = r;
            }
          }
          return (0, o.merge)(e, { position: _, current: R });
        },
        b = (e, t) => {
          let {
              active: n,
              origin: a,
              start: i,
              immediate: r,
              renderType: l,
              verbose: c,
              actionItem: s,
              destination: d,
              destinationKeys: u,
              pluginDuration: E,
              instanceDelay: g,
              customEasingFn: y,
              skipMotion: m,
            } = e,
            T = s.config.easing,
            { duration: b, delay: O } = s.config;
          null != E && (b = E),
            (O = null != g ? g : O),
            l === I ? (b = 0) : (r || m) && (b = O = 0);
          let { now: v } = t.payload;
          if (n && a) {
            let t = v - (i + O);
            if (c) {
              let t = b + O,
                n = f(Math.min(Math.max(0, (v - i) / t), 1));
              e = (0, o.set)(e, "verboseTimeElapsed", t * n);
            }
            if (t < 0) return e;
            let n = f(Math.min(Math.max(0, t / b), 1)),
              r = p(T, n, y),
              l = {},
              s = null;
            return (
              u.length &&
                (s = u.reduce((e, t) => {
                  let n = d[t],
                    i = parseFloat(a[t]) || 0,
                    o = parseFloat(n) - i;
                  return (e[t] = o * r + i), e;
                }, {})),
              (l.current = s),
              (l.position = n),
              1 === n && ((l.active = !1), (l.complete = !0)),
              (0, o.merge)(e, l)
            );
          }
          return e;
        },
        O = (e = Object.freeze({}), t) => {
          switch (t.type) {
            case r:
              return t.payload.ixInstances || Object.freeze({});
            case l:
              return Object.freeze({});
            case c: {
              let {
                  instanceId: n,
                  elementId: a,
                  actionItem: i,
                  eventId: r,
                  eventTarget: l,
                  eventStateKey: c,
                  actionListId: s,
                  groupIndex: d,
                  isCarrier: u,
                  origin: f,
                  destination: p,
                  immediate: I,
                  verbose: g,
                  continuous: T,
                  parameterId: b,
                  actionGroups: O,
                  smoothing: v,
                  restingValue: h,
                  pluginInstance: _,
                  pluginDuration: A,
                  instanceDelay: R,
                  skipMotion: S,
                  skipToValue: L,
                } = t.payload,
                { actionTypeId: N } = i,
                C = y(N),
                w = m(C, N),
                P = Object.keys(p).filter(
                  (e) => null != p[e] && "string" != typeof p[e]
                ),
                { easing: F } = i.config;
              return (0, o.set)(e, n, {
                id: n,
                elementId: a,
                active: !1,
                position: 0,
                start: 0,
                origin: f,
                destination: p,
                destinationKeys: P,
                immediate: I,
                verbose: g,
                current: null,
                actionItem: i,
                actionTypeId: N,
                eventId: r,
                eventTarget: l,
                eventStateKey: c,
                actionListId: s,
                groupIndex: d,
                renderType: C,
                isCarrier: u,
                styleProp: w,
                continuous: T,
                parameterId: b,
                actionGroups: O,
                smoothing: v,
                restingValue: h,
                pluginInstance: _,
                pluginDuration: A,
                instanceDelay: R,
                skipMotion: S,
                skipToValue: L,
                customEasingFn:
                  Array.isArray(F) && 4 === F.length ? E(F) : void 0,
              });
            }
            case s: {
              let { instanceId: n, time: a } = t.payload;
              return (0, o.mergeIn)(e, [n], {
                active: !0,
                complete: !1,
                start: a,
              });
            }
            case d: {
              let { instanceId: n } = t.payload;
              if (!e[n]) return e;
              let a = {},
                i = Object.keys(e),
                { length: o } = i;
              for (let t = 0; t < o; t++) {
                let o = i[t];
                o !== n && (a[o] = e[o]);
              }
              return a;
            }
            case u: {
              let n = e,
                a = Object.keys(e),
                { length: i } = a;
              for (let r = 0; r < i; r++) {
                let i = a[r],
                  l = e[i],
                  c = l.continuous ? T : b;
                n = (0, o.set)(n, i, c(l, t));
              }
              return n;
            }
            default:
              return e;
          }
        };
    },
    1540: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixParameters", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let {
          IX2_RAW_DATA_IMPORTED: a,
          IX2_SESSION_STOPPED: i,
          IX2_PARAMETER_CHANGED: o,
        } = n(7087).IX2EngineActionTypes,
        r = (e = {}, t) => {
          switch (t.type) {
            case a:
              return t.payload.ixParameters || {};
            case i:
              return {};
            case o: {
              let { key: n, value: a } = t.payload;
              return (e[n] = a), e;
            }
            default:
              return e;
          }
        };
    },
    7243: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let a = n(9516),
        i = n(4609),
        o = n(628),
        r = n(5862),
        l = n(9468),
        c = n(7718),
        s = n(1540),
        { ixElements: d } = l.IX2ElementsReducer,
        u = (0, a.combineReducers)({
          ixData: i.ixData,
          ixRequest: o.ixRequest,
          ixSession: r.ixSession,
          ixElements: d,
          ixInstances: c.ixInstances,
          ixParameters: s.ixParameters,
        });
    },
    628: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixRequest", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let a = n(7087),
        i = n(1185),
        {
          IX2_PREVIEW_REQUESTED: o,
          IX2_PLAYBACK_REQUESTED: r,
          IX2_STOP_REQUESTED: l,
          IX2_CLEAR_REQUESTED: c,
        } = a.IX2EngineActionTypes,
        s = { preview: {}, playback: {}, stop: {}, clear: {} },
        d = Object.create(null, {
          [o]: { value: "preview" },
          [r]: { value: "playback" },
          [l]: { value: "stop" },
          [c]: { value: "clear" },
        }),
        u = (e = s, t) => {
          if (t.type in d) {
            let n = [d[t.type]];
            return (0, i.setIn)(e, [n], { ...t.payload });
          }
          return e;
        };
    },
    5862: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ixSession", {
          enumerable: !0,
          get: function () {
            return g;
          },
        });
      let a = n(7087),
        i = n(1185),
        {
          IX2_SESSION_INITIALIZED: o,
          IX2_SESSION_STARTED: r,
          IX2_TEST_FRAME_RENDERED: l,
          IX2_SESSION_STOPPED: c,
          IX2_EVENT_LISTENER_ADDED: s,
          IX2_EVENT_STATE_CHANGED: d,
          IX2_ANIMATION_FRAME_CHANGED: u,
          IX2_ACTION_LIST_PLAYBACK_CHANGED: f,
          IX2_VIEWPORT_WIDTH_CHANGED: p,
          IX2_MEDIA_QUERIES_DEFINED: E,
        } = a.IX2EngineActionTypes,
        I = {
          active: !1,
          tick: 0,
          eventListeners: [],
          eventState: {},
          playbackState: {},
          viewportWidth: 0,
          mediaQueryKey: null,
          hasBoundaryNodes: !1,
          hasDefinedMediaQueries: !1,
          reducedMotion: !1,
        },
        g = (e = I, t) => {
          switch (t.type) {
            case o: {
              let { hasBoundaryNodes: n, reducedMotion: a } = t.payload;
              return (0, i.merge)(e, { hasBoundaryNodes: n, reducedMotion: a });
            }
            case r:
              return (0, i.set)(e, "active", !0);
            case l: {
              let {
                payload: { step: n = 20 },
              } = t;
              return (0, i.set)(e, "tick", e.tick + n);
            }
            case c:
              return I;
            case u: {
              let {
                payload: { now: n },
              } = t;
              return (0, i.set)(e, "tick", n);
            }
            case s: {
              let n = (0, i.addLast)(e.eventListeners, t.payload);
              return (0, i.set)(e, "eventListeners", n);
            }
            case d: {
              let { stateKey: n, newState: a } = t.payload;
              return (0, i.setIn)(e, ["eventState", n], a);
            }
            case f: {
              let { actionListId: n, isPlaying: a } = t.payload;
              return (0, i.setIn)(e, ["playbackState", n], a);
            }
            case p: {
              let { width: n, mediaQueries: a } = t.payload,
                o = a.length,
                r = null;
              for (let e = 0; e < o; e++) {
                let { key: t, min: i, max: o } = a[e];
                if (n >= i && n <= o) {
                  r = t;
                  break;
                }
              }
              return (0, i.merge)(e, { viewportWidth: n, mediaQueryKey: r });
            }
            case E:
              return (0, i.set)(e, "hasDefinedMediaQueries", !0);
            default:
              return e;
          }
        };
    },
    7377: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return d;
        },
        createPluginInstance: function () {
          return c;
        },
        getPluginConfig: function () {
          return i;
        },
        getPluginDestination: function () {
          return l;
        },
        getPluginDuration: function () {
          return o;
        },
        getPluginOrigin: function () {
          return r;
        },
        renderPlugin: function () {
          return s;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = (e) => e.value,
        o = (e, t) => {
          if ("auto" !== t.config.duration) return null;
          let n = parseFloat(e.getAttribute("data-duration"));
          return n > 0
            ? 1e3 * n
            : 1e3 * parseFloat(e.getAttribute("data-default-duration"));
        },
        r = (e) => e || { value: 0 },
        l = (e) => ({ value: e.value }),
        c = (e) => {
          let t = window.Webflow.require("lottie");
          if (!t) return null;
          let n = t.createInstance(e);
          return n.stop(), n.setSubframe(!0), n;
        },
        s = (e, t, n) => {
          if (!e) return;
          let a = t[n.actionTypeId].value / 100;
          e.goToFrame(e.frames * a);
        },
        d = (e) => {
          let t = window.Webflow.require("lottie");
          t && t.createInstance(e).stop();
        };
    },
    2570: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return c;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return s;
        },
        getPluginOrigin: function () {
          return d;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "--wf-rive-fit",
        o = "--wf-rive-alignment",
        r = (e) => document.querySelector(`[data-w-id="${e}"]`),
        l = () => window.Webflow.require("rive"),
        c = (e, t) => e.value.inputs[t],
        s = () => null,
        d = (e, t) => {
          if (e) return e;
          let n = {},
            { inputs: a = {} } = t.config.value;
          for (let e in a) null == a[e] && (n[e] = 0);
          return n;
        },
        u = (e) => e.value.inputs ?? {},
        f = (e, t) => {
          if ((t.config?.target?.selectorGuids || []).length > 0) return e;
          let n = t?.config?.target?.pluginElement;
          return n ? r(n) : null;
        },
        p = (e, { PLUGIN_RIVE: t }, n) => {
          let a = l();
          if (!a) return;
          let r = a.getInstance(e),
            c = a.rive.StateMachineInputType,
            { name: s, inputs: d = {} } = n.config.value || {};
          function u(e) {
            if (e.loaded) n();
            else {
              let t = () => {
                n(), e?.off("load", t);
              };
              e?.on("load", t);
            }
            function n() {
              let n = e.stateMachineInputs(s);
              if (null != n) {
                if ((e.isPlaying || e.play(s, !1), i in d || o in d)) {
                  let t = e.layout,
                    n = d[i] ?? t.fit,
                    a = d[o] ?? t.alignment;
                  (n !== t.fit || a !== t.alignment) &&
                    (e.layout = t.copyWith({ fit: n, alignment: a }));
                }
                for (let e in d) {
                  if (e === i || e === o) continue;
                  let a = n.find((t) => t.name === e);
                  if (null != a)
                    switch (a.type) {
                      case c.Boolean:
                        null != d[e] && (a.value = !!d[e]);
                        break;
                      case c.Number: {
                        let n = t[e];
                        null != n && (a.value = n);
                        break;
                      }
                      case c.Trigger:
                        d[e] && a.fire();
                    }
                }
              }
            }
          }
          r?.rive ? u(r.rive) : a.setLoadHandler(e, u);
        },
        E = (e, t) => null;
    },
    2866: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        clearPlugin: function () {
          return E;
        },
        createPluginInstance: function () {
          return f;
        },
        getPluginConfig: function () {
          return l;
        },
        getPluginDestination: function () {
          return u;
        },
        getPluginDuration: function () {
          return c;
        },
        getPluginOrigin: function () {
          return d;
        },
        renderPlugin: function () {
          return p;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = (e) => document.querySelector(`[data-w-id="${e}"]`),
        o = () => window.Webflow.require("spline"),
        r = (e, t) => e.filter((e) => !t.includes(e)),
        l = (e, t) => e.value[t],
        c = () => null,
        s = Object.freeze({
          positionX: 0,
          positionY: 0,
          positionZ: 0,
          rotationX: 0,
          rotationY: 0,
          rotationZ: 0,
          scaleX: 1,
          scaleY: 1,
          scaleZ: 1,
        }),
        d = (e, t) => {
          let n = Object.keys(t.config.value);
          if (e) {
            let t = r(n, Object.keys(e));
            return t.length ? t.reduce((e, t) => ((e[t] = s[t]), e), e) : e;
          }
          return n.reduce((e, t) => ((e[t] = s[t]), e), {});
        },
        u = (e) => e.value,
        f = (e, t) => {
          let n = t?.config?.target?.pluginElement;
          return n ? i(n) : null;
        },
        p = (e, t, n) => {
          let a = o();
          if (!a) return;
          let i = a.getInstance(e),
            r = n.config.target.objectId,
            l = (e) => {
              if (!e) throw Error("Invalid spline app passed to renderSpline");
              let n = r && e.findObjectById(r);
              if (!n) return;
              let { PLUGIN_SPLINE: a } = t;
              null != a.positionX && (n.position.x = a.positionX),
                null != a.positionY && (n.position.y = a.positionY),
                null != a.positionZ && (n.position.z = a.positionZ),
                null != a.rotationX && (n.rotation.x = a.rotationX),
                null != a.rotationY && (n.rotation.y = a.rotationY),
                null != a.rotationZ && (n.rotation.z = a.rotationZ),
                null != a.scaleX && (n.scale.x = a.scaleX),
                null != a.scaleY && (n.scale.y = a.scaleY),
                null != a.scaleZ && (n.scale.z = a.scaleZ);
            };
          i ? l(i.spline) : a.setLoadHandler(e, l);
        },
        E = () => null;
    },
    1407: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return p;
        },
        createPluginInstance: function () {
          return d;
        },
        getPluginConfig: function () {
          return r;
        },
        getPluginDestination: function () {
          return s;
        },
        getPluginDuration: function () {
          return l;
        },
        getPluginOrigin: function () {
          return c;
        },
        renderPlugin: function () {
          return f;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(380),
        r = (e, t) => e.value[t],
        l = () => null,
        c = (e, t) => {
          if (e) return e;
          let n = t.config.value,
            a = t.config.target.objectId,
            i = getComputedStyle(document.documentElement).getPropertyValue(a);
          return null != n.size
            ? { size: parseInt(i, 10) }
            : "%" === n.unit || "-" === n.unit
            ? { size: parseFloat(i) }
            : null != n.red && null != n.green && null != n.blue
            ? (0, o.normalizeColor)(i)
            : void 0;
        },
        s = (e) => e.value,
        d = () => null,
        u = {
          color: {
            match: ({ red: e, green: t, blue: n, alpha: a }) =>
              [e, t, n, a].every((e) => null != e),
            getValue: ({ red: e, green: t, blue: n, alpha: a }) =>
              `rgba(${e}, ${t}, ${n}, ${a})`,
          },
          size: {
            match: ({ size: e }) => null != e,
            getValue: ({ size: e }, t) => ("-" === t ? e : `${e}${t}`),
          },
        },
        f = (e, t, n) => {
          let {
              target: { objectId: a },
              value: { unit: i },
            } = n.config,
            o = t.PLUGIN_VARIABLE,
            r = Object.values(u).find((e) => e.match(o, i));
          r && document.documentElement.style.setProperty(a, r.getValue(o, i));
        },
        p = (e, t) => {
          let n = t.config.target.objectId;
          document.documentElement.style.removeProperty(n);
        };
    },
    3690: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "pluginMethodMap", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let a = n(7087),
        i = s(n(7377)),
        o = s(n(2866)),
        r = s(n(2570)),
        l = s(n(1407));
      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (c = function (e) {
          return e ? n : t;
        })(e);
      }
      function s(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = c(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return (a.default = e), n && n.set(e, a), a;
      }
      let d = new Map([
        [a.ActionTypeConsts.PLUGIN_LOTTIE, { ...i }],
        [a.ActionTypeConsts.PLUGIN_SPLINE, { ...o }],
        [a.ActionTypeConsts.PLUGIN_RIVE, { ...r }],
        [a.ActionTypeConsts.PLUGIN_VARIABLE, { ...l }],
      ]);
    },
    8023: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: function () {
          return b;
        },
        IX2_ANIMATION_FRAME_CHANGED: function () {
          return E;
        },
        IX2_CLEAR_REQUESTED: function () {
          return u;
        },
        IX2_ELEMENT_STATE_CHANGED: function () {
          return T;
        },
        IX2_EVENT_LISTENER_ADDED: function () {
          return f;
        },
        IX2_EVENT_STATE_CHANGED: function () {
          return p;
        },
        IX2_INSTANCE_ADDED: function () {
          return g;
        },
        IX2_INSTANCE_REMOVED: function () {
          return m;
        },
        IX2_INSTANCE_STARTED: function () {
          return y;
        },
        IX2_MEDIA_QUERIES_DEFINED: function () {
          return v;
        },
        IX2_PARAMETER_CHANGED: function () {
          return I;
        },
        IX2_PLAYBACK_REQUESTED: function () {
          return s;
        },
        IX2_PREVIEW_REQUESTED: function () {
          return c;
        },
        IX2_RAW_DATA_IMPORTED: function () {
          return i;
        },
        IX2_SESSION_INITIALIZED: function () {
          return o;
        },
        IX2_SESSION_STARTED: function () {
          return r;
        },
        IX2_SESSION_STOPPED: function () {
          return l;
        },
        IX2_STOP_REQUESTED: function () {
          return d;
        },
        IX2_TEST_FRAME_RENDERED: function () {
          return h;
        },
        IX2_VIEWPORT_WIDTH_CHANGED: function () {
          return O;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "IX2_RAW_DATA_IMPORTED",
        o = "IX2_SESSION_INITIALIZED",
        r = "IX2_SESSION_STARTED",
        l = "IX2_SESSION_STOPPED",
        c = "IX2_PREVIEW_REQUESTED",
        s = "IX2_PLAYBACK_REQUESTED",
        d = "IX2_STOP_REQUESTED",
        u = "IX2_CLEAR_REQUESTED",
        f = "IX2_EVENT_LISTENER_ADDED",
        p = "IX2_EVENT_STATE_CHANGED",
        E = "IX2_ANIMATION_FRAME_CHANGED",
        I = "IX2_PARAMETER_CHANGED",
        g = "IX2_INSTANCE_ADDED",
        y = "IX2_INSTANCE_STARTED",
        m = "IX2_INSTANCE_REMOVED",
        T = "IX2_ELEMENT_STATE_CHANGED",
        b = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        O = "IX2_VIEWPORT_WIDTH_CHANGED",
        v = "IX2_MEDIA_QUERIES_DEFINED",
        h = "IX2_TEST_FRAME_RENDERED";
    },
    2686: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ABSTRACT_NODE: function () {
          return et;
        },
        AUTO: function () {
          return H;
        },
        BACKGROUND: function () {
          return V;
        },
        BACKGROUND_COLOR: function () {
          return U;
        },
        BAR_DELIMITER: function () {
          return z;
        },
        BORDER_COLOR: function () {
          return D;
        },
        BOUNDARY_SELECTOR: function () {
          return c;
        },
        CHILDREN: function () {
          return Y;
        },
        COLON_DELIMITER: function () {
          return Q;
        },
        COLOR: function () {
          return k;
        },
        COMMA_DELIMITER: function () {
          return W;
        },
        CONFIG_UNIT: function () {
          return g;
        },
        CONFIG_VALUE: function () {
          return f;
        },
        CONFIG_X_UNIT: function () {
          return p;
        },
        CONFIG_X_VALUE: function () {
          return s;
        },
        CONFIG_Y_UNIT: function () {
          return E;
        },
        CONFIG_Y_VALUE: function () {
          return d;
        },
        CONFIG_Z_UNIT: function () {
          return I;
        },
        CONFIG_Z_VALUE: function () {
          return u;
        },
        DISPLAY: function () {
          return B;
        },
        FILTER: function () {
          return F;
        },
        FLEX: function () {
          return X;
        },
        FONT_VARIATION_SETTINGS: function () {
          return M;
        },
        HEIGHT: function () {
          return x;
        },
        HTML_ELEMENT: function () {
          return J;
        },
        IMMEDIATE_CHILDREN: function () {
          return $;
        },
        IX2_ID_DELIMITER: function () {
          return i;
        },
        OPACITY: function () {
          return P;
        },
        PARENT: function () {
          return K;
        },
        PLAIN_OBJECT: function () {
          return ee;
        },
        PRESERVE_3D: function () {
          return Z;
        },
        RENDER_GENERAL: function () {
          return ea;
        },
        RENDER_PLUGIN: function () {
          return eo;
        },
        RENDER_STYLE: function () {
          return ei;
        },
        RENDER_TRANSFORM: function () {
          return en;
        },
        ROTATE_X: function () {
          return R;
        },
        ROTATE_Y: function () {
          return S;
        },
        ROTATE_Z: function () {
          return L;
        },
        SCALE_3D: function () {
          return A;
        },
        SCALE_X: function () {
          return v;
        },
        SCALE_Y: function () {
          return h;
        },
        SCALE_Z: function () {
          return _;
        },
        SIBLINGS: function () {
          return q;
        },
        SKEW: function () {
          return N;
        },
        SKEW_X: function () {
          return C;
        },
        SKEW_Y: function () {
          return w;
        },
        TRANSFORM: function () {
          return y;
        },
        TRANSLATE_3D: function () {
          return O;
        },
        TRANSLATE_X: function () {
          return m;
        },
        TRANSLATE_Y: function () {
          return T;
        },
        TRANSLATE_Z: function () {
          return b;
        },
        WF_PAGE: function () {
          return o;
        },
        WIDTH: function () {
          return G;
        },
        WILL_CHANGE: function () {
          return j;
        },
        W_MOD_IX: function () {
          return l;
        },
        W_MOD_JS: function () {
          return r;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = "|",
        o = "data-wf-page",
        r = "w-mod-js",
        l = "w-mod-ix",
        c = ".w-dyn-item",
        s = "xValue",
        d = "yValue",
        u = "zValue",
        f = "value",
        p = "xUnit",
        E = "yUnit",
        I = "zUnit",
        g = "unit",
        y = "transform",
        m = "translateX",
        T = "translateY",
        b = "translateZ",
        O = "translate3d",
        v = "scaleX",
        h = "scaleY",
        _ = "scaleZ",
        A = "scale3d",
        R = "rotateX",
        S = "rotateY",
        L = "rotateZ",
        N = "skew",
        C = "skewX",
        w = "skewY",
        P = "opacity",
        F = "filter",
        M = "font-variation-settings",
        G = "width",
        x = "height",
        U = "backgroundColor",
        V = "background",
        D = "borderColor",
        k = "color",
        B = "display",
        X = "flex",
        j = "willChange",
        H = "AUTO",
        W = ",",
        Q = ":",
        z = "|",
        Y = "CHILDREN",
        $ = "IMMEDIATE_CHILDREN",
        q = "SIBLINGS",
        K = "PARENT",
        Z = "preserve-3d",
        J = "HTML_ELEMENT",
        ee = "PLAIN_OBJECT",
        et = "ABSTRACT_NODE",
        en = "RENDER_TRANSFORM",
        ea = "RENDER_GENERAL",
        ei = "RENDER_STYLE",
        eo = "RENDER_PLUGIN";
    },
    262: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        ActionAppliesTo: function () {
          return o;
        },
        ActionTypeConsts: function () {
          return i;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = {
          TRANSFORM_MOVE: "TRANSFORM_MOVE",
          TRANSFORM_SCALE: "TRANSFORM_SCALE",
          TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
          TRANSFORM_SKEW: "TRANSFORM_SKEW",
          STYLE_OPACITY: "STYLE_OPACITY",
          STYLE_SIZE: "STYLE_SIZE",
          STYLE_FILTER: "STYLE_FILTER",
          STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
          STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
          STYLE_BORDER: "STYLE_BORDER",
          STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
          OBJECT_VALUE: "OBJECT_VALUE",
          PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
          PLUGIN_SPLINE: "PLUGIN_SPLINE",
          PLUGIN_RIVE: "PLUGIN_RIVE",
          PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
          GENERAL_DISPLAY: "GENERAL_DISPLAY",
          GENERAL_START_ACTION: "GENERAL_START_ACTION",
          GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
          GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
          GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
          GENERAL_LOOP: "GENERAL_LOOP",
          STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
        },
        o = {
          ELEMENT: "ELEMENT",
          ELEMENT_CLASS: "ELEMENT_CLASS",
          TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
        };
    },
    7087: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        ActionTypeConsts: function () {
          return r.ActionTypeConsts;
        },
        IX2EngineActionTypes: function () {
          return l;
        },
        IX2EngineConstants: function () {
          return c;
        },
        QuickEffectIds: function () {
          return o.QuickEffectIds;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = s(n(1833), t),
        r = s(n(262), t);
      s(n(8704), t), s(n(3213), t);
      let l = u(n(8023)),
        c = u(n(2686));
      function s(e, t) {
        return (
          Object.keys(e).forEach(function (n) {
            "default" === n ||
              Object.prototype.hasOwnProperty.call(t, n) ||
              Object.defineProperty(t, n, {
                enumerable: !0,
                get: function () {
                  return e[n];
                },
              });
          }),
          e
        );
      }
      function d(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (d = function (e) {
          return e ? n : t;
        })(e);
      }
      function u(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = d(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return (a.default = e), n && n.set(e, a), a;
      }
    },
    3213: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ReducedMotionTypes", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let {
          TRANSFORM_MOVE: a,
          TRANSFORM_SCALE: i,
          TRANSFORM_ROTATE: o,
          TRANSFORM_SKEW: r,
          STYLE_SIZE: l,
          STYLE_FILTER: c,
          STYLE_FONT_VARIATION: s,
        } = n(262).ActionTypeConsts,
        d = { [a]: !0, [i]: !0, [o]: !0, [r]: !0, [l]: !0, [c]: !0, [s]: !0 };
    },
    1833: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var n = {
        EventAppliesTo: function () {
          return o;
        },
        EventBasedOn: function () {
          return r;
        },
        EventContinuousMouseAxes: function () {
          return l;
        },
        EventLimitAffectedElements: function () {
          return c;
        },
        EventTypeConsts: function () {
          return i;
        },
        QuickEffectDirectionConsts: function () {
          return d;
        },
        QuickEffectIds: function () {
          return s;
        },
      };
      for (var a in n)
        Object.defineProperty(t, a, { enumerable: !0, get: n[a] });
      let i = {
          NAVBAR_OPEN: "NAVBAR_OPEN",
          NAVBAR_CLOSE: "NAVBAR_CLOSE",
          TAB_ACTIVE: "TAB_ACTIVE",
          TAB_INACTIVE: "TAB_INACTIVE",
          SLIDER_ACTIVE: "SLIDER_ACTIVE",
          SLIDER_INACTIVE: "SLIDER_INACTIVE",
          DROPDOWN_OPEN: "DROPDOWN_OPEN",
          DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
          MOUSE_CLICK: "MOUSE_CLICK",
          MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
          MOUSE_DOWN: "MOUSE_DOWN",
          MOUSE_UP: "MOUSE_UP",
          MOUSE_OVER: "MOUSE_OVER",
          MOUSE_OUT: "MOUSE_OUT",
          MOUSE_MOVE: "MOUSE_MOVE",
          MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
          SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
          SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
          SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
          ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
          ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
          PAGE_START: "PAGE_START",
          PAGE_FINISH: "PAGE_FINISH",
          PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
          PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
          PAGE_SCROLL: "PAGE_SCROLL",
        },
        o = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" },
        r = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" },
        l = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" },
        c = {
          CHILDREN: "CHILDREN",
          SIBLINGS: "SIBLINGS",
          IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
        },
        s = {
          FADE_EFFECT: "FADE_EFFECT",
          SLIDE_EFFECT: "SLIDE_EFFECT",
          GROW_EFFECT: "GROW_EFFECT",
          SHRINK_EFFECT: "SHRINK_EFFECT",
          SPIN_EFFECT: "SPIN_EFFECT",
          FLY_EFFECT: "FLY_EFFECT",
          POP_EFFECT: "POP_EFFECT",
          FLIP_EFFECT: "FLIP_EFFECT",
          JIGGLE_EFFECT: "JIGGLE_EFFECT",
          PULSE_EFFECT: "PULSE_EFFECT",
          DROP_EFFECT: "DROP_EFFECT",
          BLINK_EFFECT: "BLINK_EFFECT",
          BOUNCE_EFFECT: "BOUNCE_EFFECT",
          FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
          FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
          RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
          JELLO_EFFECT: "JELLO_EFFECT",
          GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
          SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
          PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
        },
        d = {
          LEFT: "LEFT",
          RIGHT: "RIGHT",
          BOTTOM: "BOTTOM",
          TOP: "TOP",
          BOTTOM_LEFT: "BOTTOM_LEFT",
          BOTTOM_RIGHT: "BOTTOM_RIGHT",
          TOP_RIGHT: "TOP_RIGHT",
          TOP_LEFT: "TOP_LEFT",
          CLOCKWISE: "CLOCKWISE",
          COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
        };
    },
    8704: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "InteractionTypeConsts", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = {
        MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
        MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
        MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
        SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
        SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
        MOUSE_MOVE_IN_VIEWPORT_INTERACTION:
          "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
        PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
        PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
        PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
        NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
        DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
        ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
        TAB_INTERACTION: "TAB_INTERACTION",
        SLIDER_INTERACTION: "SLIDER_INTERACTION",
      };
    },
    380: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "normalizeColor", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let n = {
        aliceblue: "#F0F8FF",
        antiquewhite: "#FAEBD7",
        aqua: "#00FFFF",
        aquamarine: "#7FFFD4",
        azure: "#F0FFFF",
        beige: "#F5F5DC",
        bisque: "#FFE4C4",
        black: "#000000",
        blanchedalmond: "#FFEBCD",
        blue: "#0000FF",
        blueviolet: "#8A2BE2",
        brown: "#A52A2A",
        burlywood: "#DEB887",
        cadetblue: "#5F9EA0",
        chartreuse: "#7FFF00",
        chocolate: "#D2691E",
        coral: "#FF7F50",
        cornflowerblue: "#6495ED",
        cornsilk: "#FFF8DC",
        crimson: "#DC143C",
        cyan: "#00FFFF",
        darkblue: "#00008B",
        darkcyan: "#008B8B",
        darkgoldenrod: "#B8860B",
        darkgray: "#A9A9A9",
        darkgreen: "#006400",
        darkgrey: "#A9A9A9",
        darkkhaki: "#BDB76B",
        darkmagenta: "#8B008B",
        darkolivegreen: "#556B2F",
        darkorange: "#FF8C00",
        darkorchid: "#9932CC",
        darkred: "#8B0000",
        darksalmon: "#E9967A",
        darkseagreen: "#8FBC8F",
        darkslateblue: "#483D8B",
        darkslategray: "#2F4F4F",
        darkslategrey: "#2F4F4F",
        darkturquoise: "#00CED1",
        darkviolet: "#9400D3",
        deeppink: "#FF1493",
        deepskyblue: "#00BFFF",
        dimgray: "#696969",
        dimgrey: "#696969",
        dodgerblue: "#1E90FF",
        firebrick: "#B22222",
        floralwhite: "#FFFAF0",
        forestgreen: "#228B22",
        fuchsia: "#FF00FF",
        gainsboro: "#DCDCDC",
        ghostwhite: "#F8F8FF",
        gold: "#FFD700",
        goldenrod: "#DAA520",
        gray: "#808080",
        green: "#008000",
        greenyellow: "#ADFF2F",
        grey: "#808080",
        honeydew: "#F0FFF0",
        hotpink: "#FF69B4",
        indianred: "#CD5C5C",
        indigo: "#4B0082",
        ivory: "#FFFFF0",
        khaki: "#F0E68C",
        lavender: "#E6E6FA",
        lavenderblush: "#FFF0F5",
        lawngreen: "#7CFC00",
        lemonchiffon: "#FFFACD",
        lightblue: "#ADD8E6",
        lightcoral: "#F08080",
        lightcyan: "#E0FFFF",
        lightgoldenrodyellow: "#FAFAD2",
        lightgray: "#D3D3D3",
        lightgreen: "#90EE90",
        lightgrey: "#D3D3D3",
        lightpink: "#FFB6C1",
        lightsalmon: "#FFA07A",
        lightseagreen: "#20B2AA",
        lightskyblue: "#87CEFA",
        lightslategray: "#778899",
        lightslategrey: "#778899",
        lightsteelblue: "#B0C4DE",
        lightyellow: "#FFFFE0",
        lime: "#00FF00",
        limegreen: "#32CD32",
        linen: "#FAF0E6",
        magenta: "#FF00FF",
        maroon: "#800000",
        mediumaquamarine: "#66CDAA",
        mediumblue: "#0000CD",
        mediumorchid: "#BA55D3",
        mediumpurple: "#9370DB",
        mediumseagreen: "#3CB371",
        mediumslateblue: "#7B68EE",
        mediumspringgreen: "#00FA9A",
        mediumturquoise: "#48D1CC",
        mediumvioletred: "#C71585",
        midnightblue: "#191970",
        mintcream: "#F5FFFA",
        mistyrose: "#FFE4E1",
        moccasin: "#FFE4B5",
        navajowhite: "#FFDEAD",
        navy: "#000080",
        oldlace: "#FDF5E6",
        olive: "#808000",
        olivedrab: "#6B8E23",
        orange: "#FFA500",
        orangered: "#FF4500",
        orchid: "#DA70D6",
        palegoldenrod: "#EEE8AA",
        palegreen: "#98FB98",
        paleturquoise: "#AFEEEE",
        palevioletred: "#DB7093",
        papayawhip: "#FFEFD5",
        peachpuff: "#FFDAB9",
        peru: "#CD853F",
        pink: "#FFC0CB",
        plum: "#DDA0DD",
        powderblue: "#B0E0E6",
        purple: "#800080",
        rebeccapurple: "#663399",
        red: "#FF0000",
        rosybrown: "#BC8F8F",
        royalblue: "#4169E1",
        saddlebrown: "#8B4513",
        salmon: "#FA8072",
        sandybrown: "#F4A460",
        seagreen: "#2E8B57",
        seashell: "#FFF5EE",
        sienna: "#A0522D",
        silver: "#C0C0C0",
        skyblue: "#87CEEB",
        slateblue: "#6A5ACD",
        slategray: "#708090",
        slategrey: "#708090",
        snow: "#FFFAFA",
        springgreen: "#00FF7F",
        steelblue: "#4682B4",
        tan: "#D2B48C",
        teal: "#008080",
        thistle: "#D8BFD8",
        tomato: "#FF6347",
        turquoise: "#40E0D0",
        violet: "#EE82EE",
        wheat: "#F5DEB3",
        white: "#FFFFFF",
        whitesmoke: "#F5F5F5",
        yellow: "#FFFF00",
        yellowgreen: "#9ACD32",
      };
      function a(e) {
        let t,
          a,
          i,
          o = 1,
          r = e.replace(/\s/g, "").toLowerCase(),
          l = ("string" == typeof n[r] ? n[r].toLowerCase() : null) || r;
        if (l.startsWith("#")) {
          let e = l.substring(1);
          3 === e.length || 4 === e.length
            ? ((t = parseInt(e[0] + e[0], 16)),
              (a = parseInt(e[1] + e[1], 16)),
              (i = parseInt(e[2] + e[2], 16)),
              4 === e.length && (o = parseInt(e[3] + e[3], 16) / 255))
            : (6 === e.length || 8 === e.length) &&
              ((t = parseInt(e.substring(0, 2), 16)),
              (a = parseInt(e.substring(2, 4), 16)),
              (i = parseInt(e.substring(4, 6), 16)),
              8 === e.length && (o = parseInt(e.substring(6, 8), 16) / 255));
        } else if (l.startsWith("rgba")) {
          let e = l.match(/rgba\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (a = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10)),
            (o = parseFloat(e[3]));
        } else if (l.startsWith("rgb")) {
          let e = l.match(/rgb\(([^)]+)\)/)[1].split(",");
          (t = parseInt(e[0], 10)),
            (a = parseInt(e[1], 10)),
            (i = parseInt(e[2], 10));
        } else if (l.startsWith("hsla")) {
          let e,
            n,
            r,
            c = l.match(/hsla\(([^)]+)\)/)[1].split(","),
            s = parseFloat(c[0]),
            d = parseFloat(c[1].replace("%", "")) / 100,
            u = parseFloat(c[2].replace("%", "")) / 100;
          o = parseFloat(c[3]);
          let f = (1 - Math.abs(2 * u - 1)) * d,
            p = f * (1 - Math.abs(((s / 60) % 2) - 1)),
            E = u - f / 2;
          s >= 0 && s < 60
            ? ((e = f), (n = p), (r = 0))
            : s >= 60 && s < 120
            ? ((e = p), (n = f), (r = 0))
            : s >= 120 && s < 180
            ? ((e = 0), (n = f), (r = p))
            : s >= 180 && s < 240
            ? ((e = 0), (n = p), (r = f))
            : s >= 240 && s < 300
            ? ((e = p), (n = 0), (r = f))
            : ((e = f), (n = 0), (r = p)),
            (t = Math.round((e + E) * 255)),
            (a = Math.round((n + E) * 255)),
            (i = Math.round((r + E) * 255));
        } else if (l.startsWith("hsl")) {
          let e,
            n,
            o,
            r = l.match(/hsl\(([^)]+)\)/)[1].split(","),
            c = parseFloat(r[0]),
            s = parseFloat(r[1].replace("%", "")) / 100,
            d = parseFloat(r[2].replace("%", "")) / 100,
            u = (1 - Math.abs(2 * d - 1)) * s,
            f = u * (1 - Math.abs(((c / 60) % 2) - 1)),
            p = d - u / 2;
          c >= 0 && c < 60
            ? ((e = u), (n = f), (o = 0))
            : c >= 60 && c < 120
            ? ((e = f), (n = u), (o = 0))
            : c >= 120 && c < 180
            ? ((e = 0), (n = u), (o = f))
            : c >= 180 && c < 240
            ? ((e = 0), (n = f), (o = u))
            : c >= 240 && c < 300
            ? ((e = f), (n = 0), (o = u))
            : ((e = u), (n = 0), (o = f)),
            (t = Math.round((e + p) * 255)),
            (a = Math.round((n + p) * 255)),
            (i = Math.round((o + p) * 255));
        }
        if (Number.isNaN(t) || Number.isNaN(a) || Number.isNaN(i))
          throw Error(
            `Invalid color in [ix2/shared/utils/normalizeColor.js] '${e}'`
          );
        return { red: t, green: a, blue: i, alpha: o };
      }
    },
    9468: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        IX2BrowserSupport: function () {
          return o;
        },
        IX2EasingUtils: function () {
          return l;
        },
        IX2Easings: function () {
          return r;
        },
        IX2ElementsReducer: function () {
          return c;
        },
        IX2VanillaPlugins: function () {
          return s;
        },
        IX2VanillaUtils: function () {
          return d;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = f(n(2662)),
        r = f(n(8686)),
        l = f(n(3767)),
        c = f(n(5861)),
        s = f(n(1799)),
        d = f(n(4124));
      function u(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (u = function (e) {
          return e ? n : t;
        })(e);
      }
      function f(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || ("object" != typeof e && "function" != typeof e))
          return { default: e };
        var n = u(t);
        if (n && n.has(e)) return n.get(e);
        var a = { __proto__: null },
          i = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
          if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
            var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
            r && (r.get || r.set)
              ? Object.defineProperty(a, o, r)
              : (a[o] = e[o]);
          }
        return (a.default = e), n && n.set(e, a), a;
      }
    },
    2662: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          ELEMENT_MATCHES: function () {
            return s;
          },
          FLEX_PREFIXED: function () {
            return d;
          },
          IS_BROWSER_ENV: function () {
            return l;
          },
          TRANSFORM_PREFIXED: function () {
            return u;
          },
          TRANSFORM_STYLE_PREFIXED: function () {
            return p;
          },
          withBrowser: function () {
            return c;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = (a = n(9777)) && a.__esModule ? a : { default: a },
        l = "undefined" != typeof window,
        c = (e, t) => (l ? e() : t),
        s = c(() =>
          (0, r.default)(
            [
              "matches",
              "matchesSelector",
              "mozMatchesSelector",
              "msMatchesSelector",
              "oMatchesSelector",
              "webkitMatchesSelector",
            ],
            (e) => e in Element.prototype
          )
        ),
        d = c(() => {
          let e = document.createElement("i"),
            t = [
              "flex",
              "-webkit-flex",
              "-ms-flexbox",
              "-moz-box",
              "-webkit-box",
            ];
          try {
            let { length: n } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a];
              if (((e.style.display = n), e.style.display === n)) return n;
            }
            return "";
          } catch (e) {
            return "";
          }
        }, "flex"),
        u = c(() => {
          let e = document.createElement("i");
          if (null == e.style.transform) {
            let t = ["Webkit", "Moz", "ms"],
              { length: n } = t;
            for (let a = 0; a < n; a++) {
              let n = t[a] + "Transform";
              if (void 0 !== e.style[n]) return n;
            }
          }
          return "transform";
        }, "transform"),
        f = u.split("transform")[0],
        p = f ? f + "TransformStyle" : "transformStyle";
    },
    3767: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          applyEasing: function () {
            return u;
          },
          createBezierEasing: function () {
            return d;
          },
          optimizeFloat: function () {
            return s;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = (function (e, t) {
          if (e && e.__esModule) return e;
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return { default: e };
          var n = c(t);
          if (n && n.has(e)) return n.get(e);
          var a = { __proto__: null },
            i = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
              var r = i ? Object.getOwnPropertyDescriptor(e, o) : null;
              r && (r.get || r.set)
                ? Object.defineProperty(a, o, r)
                : (a[o] = e[o]);
            }
          return (a.default = e), n && n.set(e, a), a;
        })(n(8686)),
        l = (a = n(1361)) && a.__esModule ? a : { default: a };
      function c(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap(),
          n = new WeakMap();
        return (c = function (e) {
          return e ? n : t;
        })(e);
      }
      function s(e, t = 5, n = 10) {
        let a = Math.pow(n, t),
          i = Number(Math.round(e * a) / a);
        return Math.abs(i) > 1e-4 ? i : 0;
      }
      function d(e) {
        return (0, l.default)(...e);
      }
      function u(e, t, n) {
        return 0 === t
          ? 0
          : 1 === t
          ? 1
          : n
          ? s(t > 0 ? n(t) : t)
          : s(t > 0 && e && r[e] ? r[e](t) : t);
      }
    },
    8686: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a,
        i = {
          bounce: function () {
            return X;
          },
          bouncePast: function () {
            return j;
          },
          ease: function () {
            return l;
          },
          easeIn: function () {
            return c;
          },
          easeInOut: function () {
            return d;
          },
          easeOut: function () {
            return s;
          },
          inBack: function () {
            return F;
          },
          inCirc: function () {
            return N;
          },
          inCubic: function () {
            return E;
          },
          inElastic: function () {
            return x;
          },
          inExpo: function () {
            return R;
          },
          inOutBack: function () {
            return G;
          },
          inOutCirc: function () {
            return w;
          },
          inOutCubic: function () {
            return g;
          },
          inOutElastic: function () {
            return V;
          },
          inOutExpo: function () {
            return L;
          },
          inOutQuad: function () {
            return p;
          },
          inOutQuart: function () {
            return T;
          },
          inOutQuint: function () {
            return v;
          },
          inOutSine: function () {
            return A;
          },
          inQuad: function () {
            return u;
          },
          inQuart: function () {
            return y;
          },
          inQuint: function () {
            return b;
          },
          inSine: function () {
            return h;
          },
          outBack: function () {
            return M;
          },
          outBounce: function () {
            return P;
          },
          outCirc: function () {
            return C;
          },
          outCubic: function () {
            return I;
          },
          outElastic: function () {
            return U;
          },
          outExpo: function () {
            return S;
          },
          outQuad: function () {
            return f;
          },
          outQuart: function () {
            return m;
          },
          outQuint: function () {
            return O;
          },
          outSine: function () {
            return _;
          },
          swingFrom: function () {
            return k;
          },
          swingFromTo: function () {
            return D;
          },
          swingTo: function () {
            return B;
          },
        };
      for (var o in i)
        Object.defineProperty(t, o, { enumerable: !0, get: i[o] });
      let r = (a = n(1361)) && a.__esModule ? a : { default: a },
        l = (0, r.default)(0.25, 0.1, 0.25, 1),
        c = (0, r.default)(0.42, 0, 1, 1),
        s = (0, r.default)(0, 0, 0.58, 1),
        d = (0, r.default)(0.42, 0, 0.58, 1);
      function u(e) {
        return Math.pow(e, 2);
      }
      function f(e) {
        return -(Math.pow(e - 1, 2) - 1);
      }
      function p(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 2)
          : -0.5 * ((e -= 2) * e - 2);
      }
      function E(e) {
        return Math.pow(e, 3);
      }
      function I(e) {
        return Math.pow(e - 1, 3) + 1;
      }
      function g(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 3)
          : 0.5 * (Math.pow(e - 2, 3) + 2);
      }
      function y(e) {
        return Math.pow(e, 4);
      }
      function m(e) {
        return -(Math.pow(e - 1, 4) - 1);
      }
      function T(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 4)
          : -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
      }
      function b(e) {
        return Math.pow(e, 5);
      }
      function O(e) {
        return Math.pow(e - 1, 5) + 1;
      }
      function v(e) {
        return (e /= 0.5) < 1
          ? 0.5 * Math.pow(e, 5)
          : 0.5 * (Math.pow(e - 2, 5) + 2);
      }
      function h(e) {
        return -Math.cos((Math.PI / 2) * e) + 1;
      }
      function _(e) {
        return Math.sin((Math.PI / 2) * e);
      }
      function A(e) {
        return -0.5 * (Math.cos(Math.PI * e) - 1);
      }
      function R(e) {
        return 0 === e ? 0 : Math.pow(2, 10 * (e - 1));
      }
      function S(e) {
        return 1 === e ? 1 : -Math.pow(2, -10 * e) + 1;
      }
      function L(e) {
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (e /= 0.5) < 1
          ? 0.5 * Math.pow(2, 10 * (e - 1))
          : 0.5 * (-Math.pow(2, -10 * --e) + 2);
      }
      function N(e) {
        return -(Math.sqrt(1 - e * e) - 1);
      }
      function C(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2));
      }
      function w(e) {
        return (e /= 0.5) < 1
          ? -0.5 * (Math.sqrt(1 - e * e) - 1)
          : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
      }
      function P(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function F(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function M(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function G(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function x(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            -(
              a *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n)
            ));
      }
      function U(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 1 === e
          ? 1
          : (n || (n = 0.3),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            a * Math.pow(2, -10 * e) * Math.sin((2 * Math.PI * (e - t)) / n) +
              1);
      }
      function V(e) {
        let t = 1.70158,
          n = 0,
          a = 1;
        return 0 === e
          ? 0
          : 2 == (e /= 0.5)
          ? 1
          : (n || (n = 0.3 * 1.5),
            a < 1
              ? ((a = 1), (t = n / 4))
              : (t = (n / (2 * Math.PI)) * Math.asin(1 / a)),
            e < 1)
          ? -0.5 *
            (a *
              Math.pow(2, 10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n))
          : a *
              Math.pow(2, -10 * (e -= 1)) *
              Math.sin((2 * Math.PI * (e - t)) / n) *
              0.5 +
            1;
      }
      function D(e) {
        let t = 1.70158;
        return (e /= 0.5) < 1
          ? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
          : 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
      }
      function k(e) {
        return e * e * (2.70158 * e - 1.70158);
      }
      function B(e) {
        return (e -= 1) * e * (2.70158 * e + 1.70158) + 1;
      }
      function X(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
          : e < 2.5 / 2.75
          ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
          : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
      }
      function j(e) {
        return e < 1 / 2.75
          ? 7.5625 * e * e
          : e < 2 / 2.75
          ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
          : e < 2.5 / 2.75
          ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
          : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
      }
    },
    1799: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        clearPlugin: function () {
          return I;
        },
        createPluginInstance: function () {
          return p;
        },
        getPluginConfig: function () {
          return s;
        },
        getPluginDestination: function () {
          return f;
        },
        getPluginDuration: function () {
          return u;
        },
        getPluginOrigin: function () {
          return d;
        },
        isPluginType: function () {
          return l;
        },
        renderPlugin: function () {
          return E;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(2662),
        r = n(3690);
      function l(e) {
        return r.pluginMethodMap.has(e);
      }
      let c = (e) => (t) => {
          if (!o.IS_BROWSER_ENV) return () => null;
          let n = r.pluginMethodMap.get(t);
          if (!n) throw Error(`IX2 no plugin configured for: ${t}`);
          let a = n[e];
          if (!a) throw Error(`IX2 invalid plugin method: ${e}`);
          return a;
        },
        s = c("getPluginConfig"),
        d = c("getPluginOrigin"),
        u = c("getPluginDuration"),
        f = c("getPluginDestination"),
        p = c("createPluginInstance"),
        E = c("renderPlugin"),
        I = c("clearPlugin");
    },
    4124: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        cleanupHTMLElement: function () {
          return eW;
        },
        clearAllStyles: function () {
          return eX;
        },
        clearObjectCache: function () {
          return eu;
        },
        getActionListProgress: function () {
          return e$;
        },
        getAffectedElements: function () {
          return eb;
        },
        getComputedStyle: function () {
          return eO;
        },
        getDestinationValues: function () {
          return eN;
        },
        getElementId: function () {
          return eI;
        },
        getInstanceId: function () {
          return ep;
        },
        getInstanceOrigin: function () {
          return eA;
        },
        getItemConfigByKey: function () {
          return eL;
        },
        getMaxDurationItemIndex: function () {
          return eY;
        },
        getNamespacedParameterId: function () {
          return eZ;
        },
        getRenderType: function () {
          return eC;
        },
        getStyleProp: function () {
          return ew;
        },
        mediaQueriesEqual: function () {
          return e0;
        },
        observeStore: function () {
          return em;
        },
        reduceListToGroup: function () {
          return eq;
        },
        reifyState: function () {
          return eg;
        },
        renderHTMLElement: function () {
          return eP;
        },
        shallowEqual: function () {
          return d.default;
        },
        shouldAllowMediaQuery: function () {
          return eJ;
        },
        shouldNamespaceEventParameter: function () {
          return eK;
        },
        stringifyTarget: function () {
          return e1;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = I(n(4075)),
        r = I(n(1455)),
        l = I(n(5720)),
        c = n(1185),
        s = n(7087),
        d = I(n(7164)),
        u = n(3767),
        f = n(380),
        p = n(1799),
        E = n(2662);
      function I(e) {
        return e && e.__esModule ? e : { default: e };
      }
      let {
          BACKGROUND: g,
          TRANSFORM: y,
          TRANSLATE_3D: m,
          SCALE_3D: T,
          ROTATE_X: b,
          ROTATE_Y: O,
          ROTATE_Z: v,
          SKEW: h,
          PRESERVE_3D: _,
          FLEX: A,
          OPACITY: R,
          FILTER: S,
          FONT_VARIATION_SETTINGS: L,
          WIDTH: N,
          HEIGHT: C,
          BACKGROUND_COLOR: w,
          BORDER_COLOR: P,
          COLOR: F,
          CHILDREN: M,
          IMMEDIATE_CHILDREN: G,
          SIBLINGS: x,
          PARENT: U,
          DISPLAY: V,
          WILL_CHANGE: D,
          AUTO: k,
          COMMA_DELIMITER: B,
          COLON_DELIMITER: X,
          BAR_DELIMITER: j,
          RENDER_TRANSFORM: H,
          RENDER_GENERAL: W,
          RENDER_STYLE: Q,
          RENDER_PLUGIN: z,
        } = s.IX2EngineConstants,
        {
          TRANSFORM_MOVE: Y,
          TRANSFORM_SCALE: $,
          TRANSFORM_ROTATE: q,
          TRANSFORM_SKEW: K,
          STYLE_OPACITY: Z,
          STYLE_FILTER: J,
          STYLE_FONT_VARIATION: ee,
          STYLE_SIZE: et,
          STYLE_BACKGROUND_COLOR: en,
          STYLE_BORDER: ea,
          STYLE_TEXT_COLOR: ei,
          GENERAL_DISPLAY: eo,
          OBJECT_VALUE: er,
        } = s.ActionTypeConsts,
        el = (e) => e.trim(),
        ec = Object.freeze({ [en]: w, [ea]: P, [ei]: F }),
        es = Object.freeze({
          [E.TRANSFORM_PREFIXED]: y,
          [w]: g,
          [R]: R,
          [S]: S,
          [N]: N,
          [C]: C,
          [L]: L,
        }),
        ed = new Map();
      function eu() {
        ed.clear();
      }
      let ef = 1;
      function ep() {
        return "i" + ef++;
      }
      let eE = 1;
      function eI(e, t) {
        for (let n in e) {
          let a = e[n];
          if (a && a.ref === t) return a.id;
        }
        return "e" + eE++;
      }
      function eg({ events: e, actionLists: t, site: n } = {}) {
        let a = (0, r.default)(
            e,
            (e, t) => {
              let { eventTypeId: n } = t;
              return e[n] || (e[n] = {}), (e[n][t.id] = t), e;
            },
            {}
          ),
          i = n && n.mediaQueries,
          o = [];
        return (
          i
            ? (o = i.map((e) => e.key))
            : ((i = []), console.warn("IX2 missing mediaQueries in site data")),
          {
            ixData: {
              events: e,
              actionLists: t,
              eventTypeMap: a,
              mediaQueries: i,
              mediaQueryKeys: o,
            },
          }
        );
      }
      let ey = (e, t) => e === t;
      function em({ store: e, select: t, onChange: n, comparator: a = ey }) {
        let { getState: i, subscribe: o } = e,
          r = o(function () {
            let o = t(i());
            if (null == o) return void r();
            a(o, l) || n((l = o), e);
          }),
          l = t(i());
        return r;
      }
      function eT(e) {
        let t = typeof e;
        if ("string" === t) return { id: e };
        if (null != e && "object" === t) {
          let {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: r,
          } = e;
          return {
            id: t,
            objectId: n,
            selector: a,
            selectorGuids: i,
            appliesTo: o,
            useEventTarget: r,
          };
        }
        return {};
      }
      function eb({
        config: e,
        event: t,
        eventTarget: n,
        elementRoot: a,
        elementApi: i,
      }) {
        let o, r, l;
        if (!i) throw Error("IX2 missing elementApi");
        let { targets: c } = e;
        if (Array.isArray(c) && c.length > 0)
          return c.reduce(
            (e, o) =>
              e.concat(
                eb({
                  config: { target: o },
                  event: t,
                  eventTarget: n,
                  elementRoot: a,
                  elementApi: i,
                })
              ),
            []
          );
        let {
            getValidDocument: d,
            getQuerySelector: u,
            queryDocument: f,
            getChildElements: p,
            getSiblingElements: I,
            matchSelector: g,
            elementContains: y,
            isSiblingNode: m,
          } = i,
          { target: T } = e;
        if (!T) return [];
        let {
          id: b,
          objectId: O,
          selector: v,
          selectorGuids: h,
          appliesTo: _,
          useEventTarget: A,
        } = eT(T);
        if (O) return [ed.has(O) ? ed.get(O) : ed.set(O, {}).get(O)];
        if (_ === s.EventAppliesTo.PAGE) {
          let e = d(b);
          return e ? [e] : [];
        }
        let R = (t?.action?.config?.affectedElements ?? {})[b || v] || {},
          S = !!(R.id || R.selector),
          L = t && u(eT(t.target));
        if (
          (S
            ? ((o = R.limitAffectedElements), (r = L), (l = u(R)))
            : (r = l = u({ id: b, selector: v, selectorGuids: h })),
          t && A)
        ) {
          let e = n && (l || !0 === A) ? [n] : f(L);
          if (l) {
            if (A === U) return f(l).filter((t) => e.some((e) => y(t, e)));
            if (A === M) return f(l).filter((t) => e.some((e) => y(e, t)));
            if (A === x) return f(l).filter((t) => e.some((e) => m(e, t)));
          }
          return e;
        }
        return null == r || null == l
          ? []
          : E.IS_BROWSER_ENV && a
          ? f(l).filter((e) => a.contains(e))
          : o === M
          ? f(r, l)
          : o === G
          ? p(f(r)).filter(g(l))
          : o === x
          ? I(f(r)).filter(g(l))
          : f(l);
      }
      function eO({ element: e, actionItem: t }) {
        if (!E.IS_BROWSER_ENV) return {};
        let { actionTypeId: n } = t;
        switch (n) {
          case et:
          case en:
          case ea:
          case ei:
          case eo:
            return window.getComputedStyle(e);
          default:
            return {};
        }
      }
      let ev = /px/,
        eh = (e, t) =>
          t.reduce(
            (e, t) => (null == e[t.type] && (e[t.type] = eM[t.type]), e),
            e || {}
          ),
        e_ = (e, t) =>
          t.reduce(
            (e, t) => (
              null == e[t.type] &&
                (e[t.type] = eG[t.type] || t.defaultValue || 0),
              e
            ),
            e || {}
          );
      function eA(e, t = {}, n = {}, a, i) {
        let { getStyle: r } = i,
          { actionTypeId: l } = a;
        if ((0, p.isPluginType)(l)) return (0, p.getPluginOrigin)(l)(t[l], a);
        switch (a.actionTypeId) {
          case Y:
          case $:
          case q:
          case K:
            return t[a.actionTypeId] || eF[a.actionTypeId];
          case J:
            return eh(t[a.actionTypeId], a.config.filters);
          case ee:
            return e_(t[a.actionTypeId], a.config.fontVariations);
          case Z:
            return { value: (0, o.default)(parseFloat(r(e, R)), 1) };
          case et: {
            let t,
              i = r(e, N),
              l = r(e, C);
            return {
              widthValue:
                a.config.widthUnit === k
                  ? ev.test(i)
                    ? parseFloat(i)
                    : parseFloat(n.width)
                  : (0, o.default)(parseFloat(i), parseFloat(n.width)),
              heightValue:
                a.config.heightUnit === k
                  ? ev.test(l)
                    ? parseFloat(l)
                    : parseFloat(n.height)
                  : (0, o.default)(parseFloat(l), parseFloat(n.height)),
            };
          }
          case en:
          case ea:
          case ei:
            return (function ({
              element: e,
              actionTypeId: t,
              computedStyle: n,
              getStyle: a,
            }) {
              let i = ec[t],
                r = a(e, i),
                l = (function (e, t) {
                  let n = e.exec(t);
                  return n ? n[1] : "";
                })(eD, eV.test(r) ? r : n[i]).split(B);
              return {
                rValue: (0, o.default)(parseInt(l[0], 10), 255),
                gValue: (0, o.default)(parseInt(l[1], 10), 255),
                bValue: (0, o.default)(parseInt(l[2], 10), 255),
                aValue: (0, o.default)(parseFloat(l[3]), 1),
              };
            })({
              element: e,
              actionTypeId: a.actionTypeId,
              computedStyle: n,
              getStyle: r,
            });
          case eo:
            return { value: (0, o.default)(r(e, V), n.display) };
          case er:
            return t[a.actionTypeId] || { value: 0 };
          default:
            return;
        }
      }
      let eR = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eS = (e, t) => (t && (e[t.type] = t.value || 0), e),
        eL = (e, t, n) => {
          if ((0, p.isPluginType)(e)) return (0, p.getPluginConfig)(e)(n, t);
          switch (e) {
            case J: {
              let e = (0, l.default)(n.filters, ({ type: e }) => e === t);
              return e ? e.value : 0;
            }
            case ee: {
              let e = (0, l.default)(
                n.fontVariations,
                ({ type: e }) => e === t
              );
              return e ? e.value : 0;
            }
            default:
              return n[t];
          }
        };
      function eN({ element: e, actionItem: t, elementApi: n }) {
        if ((0, p.isPluginType)(t.actionTypeId))
          return (0, p.getPluginDestination)(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
          case Y:
          case $:
          case q:
          case K: {
            let { xValue: e, yValue: n, zValue: a } = t.config;
            return { xValue: e, yValue: n, zValue: a };
          }
          case et: {
            let { getStyle: a, setStyle: i, getProperty: o } = n,
              { widthUnit: r, heightUnit: l } = t.config,
              { widthValue: c, heightValue: s } = t.config;
            if (!E.IS_BROWSER_ENV) return { widthValue: c, heightValue: s };
            if (r === k) {
              let t = a(e, N);
              i(e, N, ""), (c = o(e, "offsetWidth")), i(e, N, t);
            }
            if (l === k) {
              let t = a(e, C);
              i(e, C, ""), (s = o(e, "offsetHeight")), i(e, C, t);
            }
            return { widthValue: c, heightValue: s };
          }
          case en:
          case ea:
          case ei: {
            let {
              rValue: a,
              gValue: i,
              bValue: o,
              aValue: r,
              globalSwatchId: l,
            } = t.config;
            if (l && l.startsWith("--")) {
              let { getStyle: t } = n,
                a = t(e, l),
                i = (0, f.normalizeColor)(a);
              return {
                rValue: i.red,
                gValue: i.green,
                bValue: i.blue,
                aValue: i.alpha,
              };
            }
            return { rValue: a, gValue: i, bValue: o, aValue: r };
          }
          case J:
            return t.config.filters.reduce(eR, {});
          case ee:
            return t.config.fontVariations.reduce(eS, {});
          default: {
            let { value: e } = t.config;
            return { value: e };
          }
        }
      }
      function eC(e) {
        return /^TRANSFORM_/.test(e)
          ? H
          : /^STYLE_/.test(e)
          ? Q
          : /^GENERAL_/.test(e)
          ? W
          : /^PLUGIN_/.test(e)
          ? z
          : void 0;
      }
      function ew(e, t) {
        return e === Q ? t.replace("STYLE_", "").toLowerCase() : null;
      }
      function eP(e, t, n, a, i, o, l, c, s) {
        switch (c) {
          case H:
            var d = e,
              u = t,
              f = n,
              I = i,
              g = l;
            let y = eU
                .map((e) => {
                  let t = eF[e],
                    {
                      xValue: n = t.xValue,
                      yValue: a = t.yValue,
                      zValue: i = t.zValue,
                      xUnit: o = "",
                      yUnit: r = "",
                      zUnit: l = "",
                    } = u[e] || {};
                  switch (e) {
                    case Y:
                      return `${m}(${n}${o}, ${a}${r}, ${i}${l})`;
                    case $:
                      return `${T}(${n}${o}, ${a}${r}, ${i}${l})`;
                    case q:
                      return `${b}(${n}${o}) ${O}(${a}${r}) ${v}(${i}${l})`;
                    case K:
                      return `${h}(${n}${o}, ${a}${r})`;
                    default:
                      return "";
                  }
                })
                .join(" "),
              { setStyle: R } = g;
            ek(d, E.TRANSFORM_PREFIXED, g),
              R(d, E.TRANSFORM_PREFIXED, y),
              (function (
                { actionTypeId: e },
                { xValue: t, yValue: n, zValue: a }
              ) {
                return (
                  (e === Y && void 0 !== a) ||
                  (e === $ && void 0 !== a) ||
                  (e === q && (void 0 !== t || void 0 !== n))
                );
              })(I, f) && R(d, E.TRANSFORM_STYLE_PREFIXED, _);
            return;
          case Q:
            return (function (e, t, n, a, i, o) {
              let { setStyle: l } = o;
              switch (a.actionTypeId) {
                case et: {
                  let { widthUnit: t = "", heightUnit: i = "" } = a.config,
                    { widthValue: r, heightValue: c } = n;
                  void 0 !== r &&
                    (t === k && (t = "px"), ek(e, N, o), l(e, N, r + t)),
                    void 0 !== c &&
                      (i === k && (i = "px"), ek(e, C, o), l(e, C, c + i));
                  break;
                }
                case J:
                  var c = a.config;
                  let s = (0, r.default)(
                      n,
                      (e, t, n) => `${e} ${n}(${t}${ex(n, c)})`,
                      ""
                    ),
                    { setStyle: d } = o;
                  ek(e, S, o), d(e, S, s);
                  break;
                case ee:
                  a.config;
                  let u = (0, r.default)(
                      n,
                      (e, t, n) => (e.push(`"${n}" ${t}`), e),
                      []
                    ).join(", "),
                    { setStyle: f } = o;
                  ek(e, L, o), f(e, L, u);
                  break;
                case en:
                case ea:
                case ei: {
                  let t = ec[a.actionTypeId],
                    i = Math.round(n.rValue),
                    r = Math.round(n.gValue),
                    c = Math.round(n.bValue),
                    s = n.aValue;
                  ek(e, t, o),
                    l(
                      e,
                      t,
                      s >= 1
                        ? `rgb(${i},${r},${c})`
                        : `rgba(${i},${r},${c},${s})`
                    );
                  break;
                }
                default: {
                  let { unit: t = "" } = a.config;
                  ek(e, i, o), l(e, i, n.value + t);
                }
              }
            })(e, 0, n, i, o, l);
          case W:
            var w = e,
              P = i,
              F = l;
            let { setStyle: M } = F;
            if (P.actionTypeId === eo) {
              let { value: e } = P.config;
              M(w, V, e === A && E.IS_BROWSER_ENV ? E.FLEX_PREFIXED : e);
            }
            return;
          case z: {
            let { actionTypeId: e } = i;
            if ((0, p.isPluginType)(e)) return (0, p.renderPlugin)(e)(s, t, i);
          }
        }
      }
      let eF = {
          [Y]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [$]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
          [q]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
          [K]: Object.freeze({ xValue: 0, yValue: 0 }),
        },
        eM = Object.freeze({
          blur: 0,
          "hue-rotate": 0,
          invert: 0,
          grayscale: 0,
          saturate: 100,
          sepia: 0,
          contrast: 100,
          brightness: 100,
        }),
        eG = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
        ex = (e, t) => {
          let n = (0, l.default)(t.filters, ({ type: t }) => t === e);
          if (n && n.unit) return n.unit;
          switch (e) {
            case "blur":
              return "px";
            case "hue-rotate":
              return "deg";
            default:
              return "%";
          }
        },
        eU = Object.keys(eF),
        eV = /^rgb/,
        eD = RegExp("rgba?\\(([^)]+)\\)");
      function ek(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let a = es[t];
        if (!a) return;
        let { getStyle: i, setStyle: o } = n,
          r = i(e, D);
        if (!r) return void o(e, D, a);
        let l = r.split(B).map(el);
        -1 === l.indexOf(a) && o(e, D, l.concat(a).join(B));
      }
      function eB(e, t, n) {
        if (!E.IS_BROWSER_ENV) return;
        let a = es[t];
        if (!a) return;
        let { getStyle: i, setStyle: o } = n,
          r = i(e, D);
        r &&
          -1 !== r.indexOf(a) &&
          o(
            e,
            D,
            r
              .split(B)
              .map(el)
              .filter((e) => e !== a)
              .join(B)
          );
      }
      function eX({ store: e, elementApi: t }) {
        let { ixData: n } = e.getState(),
          { events: a = {}, actionLists: i = {} } = n;
        Object.keys(a).forEach((e) => {
          let n = a[e],
            { config: o } = n.action,
            { actionListId: r } = o,
            l = i[r];
          l && ej({ actionList: l, event: n, elementApi: t });
        }),
          Object.keys(i).forEach((e) => {
            ej({ actionList: i[e], elementApi: t });
          });
      }
      function ej({ actionList: e = {}, event: t, elementApi: n }) {
        let { actionItemGroups: a, continuousParameterGroups: i } = e;
        a &&
          a.forEach((e) => {
            eH({ actionGroup: e, event: t, elementApi: n });
          }),
          i &&
            i.forEach((e) => {
              let { continuousActionGroups: a } = e;
              a.forEach((e) => {
                eH({ actionGroup: e, event: t, elementApi: n });
              });
            });
      }
      function eH({ actionGroup: e, event: t, elementApi: n }) {
        let { actionItems: a } = e;
        a.forEach((e) => {
          let a,
            { actionTypeId: i, config: o } = e;
          (a = (0, p.isPluginType)(i)
            ? (t) => (0, p.clearPlugin)(i)(t, e)
            : eQ({ effect: ez, actionTypeId: i, elementApi: n })),
            eb({ config: o, event: t, elementApi: n }).forEach(a);
        });
      }
      function eW(e, t, n) {
        let { setStyle: a, getStyle: i } = n,
          { actionTypeId: o } = t;
        if (o === et) {
          let { config: n } = t;
          n.widthUnit === k && a(e, N, ""), n.heightUnit === k && a(e, C, "");
        }
        i(e, D) && eQ({ effect: eB, actionTypeId: o, elementApi: n })(e);
      }
      let eQ =
        ({ effect: e, actionTypeId: t, elementApi: n }) =>
        (a) => {
          switch (t) {
            case Y:
            case $:
            case q:
            case K:
              e(a, E.TRANSFORM_PREFIXED, n);
              break;
            case J:
              e(a, S, n);
              break;
            case ee:
              e(a, L, n);
              break;
            case Z:
              e(a, R, n);
              break;
            case et:
              e(a, N, n), e(a, C, n);
              break;
            case en:
            case ea:
            case ei:
              e(a, ec[t], n);
              break;
            case eo:
              e(a, V, n);
          }
        };
      function ez(e, t, n) {
        let { setStyle: a } = n;
        eB(e, t, n),
          a(e, t, ""),
          t === E.TRANSFORM_PREFIXED && a(e, E.TRANSFORM_STYLE_PREFIXED, "");
      }
      function eY(e) {
        let t = 0,
          n = 0;
        return (
          e.forEach((e, a) => {
            let { config: i } = e,
              o = i.delay + i.duration;
            o >= t && ((t = o), (n = a));
          }),
          n
        );
      }
      function e$(e, t) {
        let { actionItemGroups: n, useFirstGroupAsInitialState: a } = e,
          { actionItem: i, verboseTimeElapsed: o = 0 } = t,
          r = 0,
          l = 0;
        return (
          n.forEach((e, t) => {
            if (a && 0 === t) return;
            let { actionItems: n } = e,
              c = n[eY(n)],
              { config: s, actionTypeId: d } = c;
            i.id === c.id && (l = r + o);
            let u = eC(d) === W ? 0 : s.duration;
            r += s.delay + u;
          }),
          r > 0 ? (0, u.optimizeFloat)(l / r) : 0
        );
      }
      function eq({ actionList: e, actionItemId: t, rawData: n }) {
        let { actionItemGroups: a, continuousParameterGroups: i } = e,
          o = [],
          r = (e) => (
            o.push((0, c.mergeIn)(e, ["config"], { delay: 0, duration: 0 })),
            e.id === t
          );
        return (
          a && a.some(({ actionItems: e }) => e.some(r)),
          i &&
            i.some((e) => {
              let { continuousActionGroups: t } = e;
              return t.some(({ actionItems: e }) => e.some(r));
            }),
          (0, c.setIn)(n, ["actionLists"], {
            [e.id]: { id: e.id, actionItemGroups: [{ actionItems: o }] },
          })
        );
      }
      function eK(e, { basedOn: t }) {
        return (
          (e === s.EventTypeConsts.SCROLLING_IN_VIEW &&
            (t === s.EventBasedOn.ELEMENT || null == t)) ||
          (e === s.EventTypeConsts.MOUSE_MOVE && t === s.EventBasedOn.ELEMENT)
        );
      }
      function eZ(e, t) {
        return e + X + t;
      }
      function eJ(e, t) {
        return null == t || -1 !== e.indexOf(t);
      }
      function e0(e, t) {
        return (0, d.default)(e && e.sort(), t && t.sort());
      }
      function e1(e) {
        if ("string" == typeof e) return e;
        if (e.pluginElement && e.objectId)
          return e.pluginElement + j + e.objectId;
        if (e.objectId) return e.objectId;
        let { id: t = "", selector: n = "", useEventTarget: a = "" } = e;
        return t + j + n + j + a;
      }
    },
    7164: function (e, t) {
      "use strict";
      function n(e, t) {
        return e === t
          ? 0 !== e || 0 !== t || 1 / e == 1 / t
          : e != e && t != t;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let a = function (e, t) {
        if (n(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        let a = Object.keys(e),
          i = Object.keys(t);
        if (a.length !== i.length) return !1;
        for (let i = 0; i < a.length; i++)
          if (!Object.hasOwn(t, a[i]) || !n(e[a[i]], t[a[i]])) return !1;
        return !0;
      };
    },
    5861: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      var a = {
        createElementState: function () {
          return h;
        },
        ixElements: function () {
          return v;
        },
        mergeActionState: function () {
          return _;
        },
      };
      for (var i in a)
        Object.defineProperty(t, i, { enumerable: !0, get: a[i] });
      let o = n(1185),
        r = n(7087),
        {
          HTML_ELEMENT: l,
          PLAIN_OBJECT: c,
          ABSTRACT_NODE: s,
          CONFIG_X_VALUE: d,
          CONFIG_Y_VALUE: u,
          CONFIG_Z_VALUE: f,
          CONFIG_VALUE: p,
          CONFIG_X_UNIT: E,
          CONFIG_Y_UNIT: I,
          CONFIG_Z_UNIT: g,
          CONFIG_UNIT: y,
        } = r.IX2EngineConstants,
        {
          IX2_SESSION_STOPPED: m,
          IX2_INSTANCE_ADDED: T,
          IX2_ELEMENT_STATE_CHANGED: b,
        } = r.IX2EngineActionTypes,
        O = {},
        v = (e = O, t = {}) => {
          switch (t.type) {
            case m:
              return O;
            case T: {
              let {
                  elementId: n,
                  element: a,
                  origin: i,
                  actionItem: r,
                  refType: l,
                } = t.payload,
                { actionTypeId: c } = r,
                s = e;
              return (
                (0, o.getIn)(s, [n, a]) !== a && (s = h(s, a, l, n, r)),
                _(s, n, c, i, r)
              );
            }
            case b: {
              let {
                elementId: n,
                actionTypeId: a,
                current: i,
                actionItem: o,
              } = t.payload;
              return _(e, n, a, i, o);
            }
            default:
              return e;
          }
        };
      function h(e, t, n, a, i) {
        let r =
          n === c ? (0, o.getIn)(i, ["config", "target", "objectId"]) : null;
        return (0, o.mergeIn)(e, [a], { id: a, ref: t, refId: r, refType: n });
      }
      function _(e, t, n, a, i) {
        let r = (function (e) {
          let { config: t } = e;
          return A.reduce((e, n) => {
            let a = n[0],
              i = n[1],
              o = t[a],
              r = t[i];
            return null != o && null != r && (e[i] = r), e;
          }, {});
        })(i);
        return (0, o.mergeIn)(e, [t, "refState", n], a, r);
      }
      let A = [
        [d, E],
        [u, I],
        [f, g],
        [p, y],
      ];
    },
    9834: function () {
      Webflow.require("ix2").init({
        events: {
          "e-7": {
            id: "e-7",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: { actionListId: "slideInBottom", autoStopEventId: "e-8" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-item",
              originalId: "565e083a-e323-eeab-25c7-83b41f253968",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-item",
                originalId: "565e083a-e323-eeab-25c7-83b41f253968",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191c303e692,
          },
          "e-13": {
            id: "e-13",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "FADE_EFFECT",
              instant: !1,
              config: { actionListId: "fadeIn", autoStopEventId: "e-14" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".team-member-component",
              originalId:
                "66b37f10d54197dd9d5ccbc6|d7be947d-5923-7509-a2be-8e216de9e7a3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".team-member-component",
                originalId:
                  "66b37f10d54197dd9d5ccbc6|d7be947d-5923-7509-a2be-8e216de9e7a3",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x18b8243484f,
          },
          "e-15": {
            id: "e-15",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-16",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".team-member-component",
              originalId:
                "66b37f10d54197dd9d5ccbc6|d7be947d-5923-7509-a2be-8e216de9e7a3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".team-member-component",
                originalId:
                  "66b37f10d54197dd9d5ccbc6|d7be947d-5923-7509-a2be-8e216de9e7a3",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: 0,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x18b8243ff20,
          },
          "e-29": {
            id: "e-29",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "FADE_EFFECT",
              instant: !1,
              config: { actionListId: "fadeIn", autoStopEventId: "e-30" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".rich-text",
              originalId:
                "6565fce350a68b672cbfe187|171e66d1-e092-65c1-38eb-2bae4bce2b91",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".rich-text",
                originalId:
                  "6565fce350a68b672cbfe187|171e66d1-e092-65c1-38eb-2bae4bce2b91",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 25,
              scrollOffsetUnit: "%",
              delay: 100,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x18c3a0b2fca,
          },
          "e-98": {
            id: "e-98",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-99",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".speakers-card",
              originalId:
                "68807ff0204b3738dba8aba7|3734f47b-2344-a370-7598-c31a8f79ebf3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".speakers-card",
                originalId:
                  "68807ff0204b3738dba8aba7|3734f47b-2344-a370-7598-c31a8f79ebf3",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191fdb4c6d9,
          },
          "e-112": {
            id: "e-112",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-113",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".event-item",
              originalId:
                "68807ff0204b3738dba8aba7|dfa5471b-ca1a-1afd-8685-6382173bad61",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".event-item",
                originalId:
                  "68807ff0204b3738dba8aba7|dfa5471b-ca1a-1afd-8685-6382173bad61",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191fdb64204,
          },
          "e-115": {
            id: "e-115",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-114",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8aba7",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8aba7",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1920b977151,
          },
          "e-116": {
            id: "e-116",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-117",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8aba7|bffe6e9c-77c6-200f-a7ba-923b878b4277",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8aba7|bffe6e9c-77c6-200f-a7ba-923b878b4277",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1920bd70c98,
          },
          "e-118": {
            id: "e-118",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-3",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-153",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-item",
              originalId: "58705a91-993b-412e-4318-0b653b98e396",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-item",
                originalId: "92ec0d11-5307-1ca0-ff24-4a4d5b86fea9",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1805789991f,
          },
          "e-119": {
            id: "e-119",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-4",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-265",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-item",
              originalId: "58705a91-993b-412e-4318-0b653b98e396",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-item",
                originalId: "92ec0d11-5307-1ca0-ff24-4a4d5b86fea9",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18057899920,
          },
          "e-120": {
            id: "e-120",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-5",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-121",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-item",
              originalId: "92ec0d11-5307-1ca0-ff24-4a4d5b86fe97",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-item",
                originalId: "92ec0d11-5307-1ca0-ff24-4a4d5b86fe97",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18053a7e111,
          },
          "e-121": {
            id: "e-121",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_SECOND_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-6",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-164",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".faq-item",
              originalId: "92ec0d11-5307-1ca0-ff24-4a4d5b86fe97",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".faq-item",
                originalId: "92ec0d11-5307-1ca0-ff24-4a4d5b86fe97",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18053a7e13d,
          },
          "e-123": {
            id: "e-123",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-122",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abbb",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abbb",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1920bfb362b,
          },
          "e-124": {
            id: "e-124",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-2",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-125",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abbb|268b7445-26d7-b467-1465-47fe39538bf5",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abbb|268b7445-26d7-b467-1465-47fe39538bf5",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1920bfc4d4c,
          },
          "e-126": {
            id: "e-126",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-127",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb4|c00620c6-d1fd-d318-c2ad-334f18eed9a7",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb4|c00620c6-d1fd-d318-c2ad-334f18eed9a7",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191c3031a18,
          },
          "e-128": {
            id: "e-128",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-129",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb4|c00620c6-d1fd-d318-c2ad-334f18eed9aa",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb4|c00620c6-d1fd-d318-c2ad-334f18eed9aa",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19185ac4235,
          },
          "e-131": {
            id: "e-131",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-15",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-134",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "f9581d51-d09d-0761-a4c6-2b5106d5820c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "f9581d51-d09d-0761-a4c6-2b5106d5820c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18fde81cec4,
          },
          "e-134": {
            id: "e-134",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-18",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-131",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "f9581d51-d09d-0761-a4c6-2b5106d5820c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "f9581d51-d09d-0761-a4c6-2b5106d5820c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18fde81cec1,
          },
          "e-139": {
            id: "e-139",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-20",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-142",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".links-navbar",
              originalId: "30ddc5a2-f02e-0392-5a0d-3d7d6db48b73",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".links-navbar",
                originalId: "30ddc5a2-f02e-0392-5a0d-3d7d6db48b73",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18fcfb28be0,
          },
          "e-142": {
            id: "e-142",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-17",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-139",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".links-navbar",
              originalId: "30ddc5a2-f02e-0392-5a0d-3d7d6db48b73",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".links-navbar",
                originalId: "30ddc5a2-f02e-0392-5a0d-3d7d6db48b73",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x18fcfb28bde,
          },
          "e-143": {
            id: "e-143",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-21",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-144",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".card-small",
              originalId:
                "68807ff0204b3738dba8aba7|f3f4deab-f76b-9552-5eec-35b7d70e1cfc",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".card-small",
                originalId:
                  "68807ff0204b3738dba8aba7|f3f4deab-f76b-9552-5eec-35b7d70e1cfc",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192103c4ae4,
          },
          "e-144": {
            id: "e-144",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-22",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-143",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".card-small",
              originalId:
                "68807ff0204b3738dba8aba7|f3f4deab-f76b-9552-5eec-35b7d70e1cfc",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".card-small",
                originalId:
                  "68807ff0204b3738dba8aba7|f3f4deab-f76b-9552-5eec-35b7d70e1cfc",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192103c4ae4,
          },
          "e-145": {
            id: "e-145",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-21",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-146",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".card-big",
              originalId:
                "68807ff0204b3738dba8aba7|b310c4e9-87f8-3994-aa69-22849ebdbfa2",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".card-big",
                originalId:
                  "68807ff0204b3738dba8aba7|b310c4e9-87f8-3994-aa69-22849ebdbfa2",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192104358a6,
          },
          "e-146": {
            id: "e-146",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-22",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-145",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".card-big",
              originalId:
                "68807ff0204b3738dba8aba7|b310c4e9-87f8-3994-aa69-22849ebdbfa2",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".card-big",
                originalId:
                  "68807ff0204b3738dba8aba7|b310c4e9-87f8-3994-aa69-22849ebdbfa2",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192104358a6,
          },
          "e-147": {
            id: "e-147",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-23",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-148",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".product-link",
              originalId:
                "68807ff0204b3738dba8aba7|bffe6e9c-77c6-200f-a7ba-923b878b4277",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".product-link",
                originalId:
                  "68807ff0204b3738dba8aba7|bffe6e9c-77c6-200f-a7ba-923b878b4277",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19210dac915,
          },
          "e-148": {
            id: "e-148",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-24",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-147",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".product-link",
              originalId:
                "68807ff0204b3738dba8aba7|bffe6e9c-77c6-200f-a7ba-923b878b4277",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".product-link",
                originalId:
                  "68807ff0204b3738dba8aba7|bffe6e9c-77c6-200f-a7ba-923b878b4277",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19210dac916,
          },
          "e-149": {
            id: "e-149",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-25",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".sticky-small-image",
              originalId:
                "68807ff0204b3738dba8aba7|c5e8977c-772e-2e41-10ae-d7305fd7af22",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".sticky-small-image",
                originalId:
                  "68807ff0204b3738dba8aba7|c5e8977c-772e-2e41-10ae-d7305fd7af22",
                appliesTo: "CLASS",
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-25-p",
                smoothing: 85,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19210e2cb54,
          },
          "e-150": {
            id: "e-150",
            name: "",
            animationType: "custom",
            eventTypeId: "SCROLLING_IN_VIEW",
            action: {
              id: "",
              actionTypeId: "GENERAL_CONTINUOUS_ACTION",
              config: {
                actionListId: "a-25",
                affectedElements: {},
                duration: 0,
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8aba7|d6eb4b71-80eb-f603-35f2-731c895e4ef6",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8aba7|d6eb4b71-80eb-f603-35f2-731c895e4ef6",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: [
              {
                continuousParameterGroupId: "a-25-p",
                smoothing: 85,
                startsEntering: !0,
                addStartOffset: !1,
                addOffsetValue: 50,
                startsExiting: !1,
                addEndOffset: !1,
                endOffsetValue: 50,
              },
            ],
            createdOn: 0x19210e3470c,
          },
          "e-151": {
            id: "e-151",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-152",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8aba7",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8aba7",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19210e3e33d,
          },
          "e-152": {
            id: "e-152",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-151",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8aba7",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8aba7",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19210e3e33e,
          },
          "e-153": {
            id: "e-153",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-28",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-154",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".hover-relative",
              originalId:
                "68807ff0204b3738dba8aba7|42e8932e-6c04-a7d4-f0c1-b4cf70a9f10b",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".hover-relative",
                originalId:
                  "68807ff0204b3738dba8aba7|42e8932e-6c04-a7d4-f0c1-b4cf70a9f10b",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192117ff762,
          },
          "e-154": {
            id: "e-154",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-29",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-153",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".hover-relative",
              originalId:
                "68807ff0204b3738dba8aba7|42e8932e-6c04-a7d4-f0c1-b4cf70a9f10b",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".hover-relative",
                originalId:
                  "68807ff0204b3738dba8aba7|42e8932e-6c04-a7d4-f0c1-b4cf70a9f10b",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192117ff763,
          },
          "e-157": {
            id: "e-157",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-30",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-158",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8aba7|5866cdfd-451c-e48d-60d2-e80e9bf58d58",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8aba7|5866cdfd-451c-e48d-60d2-e80e9bf58d58",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19211996d7d,
          },
          "e-158": {
            id: "e-158",
            name: "",
            animationType: "preset",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-31",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-157",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8aba7|5866cdfd-451c-e48d-60d2-e80e9bf58d58",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8aba7|5866cdfd-451c-e48d-60d2-e80e9bf58d58",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19211996d7d,
          },
          "e-159": {
            id: "e-159",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-32",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-160",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8aba7",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8aba7",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !0,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19211a204e2,
          },
          "e-161": {
            id: "e-161",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-33",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-162",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".read-more-tag",
              originalId:
                "68807ff0204b3738dba8aba7|61db882b-22a8-7139-9e18-c5f7ec351cb3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".read-more-tag",
                originalId:
                  "68807ff0204b3738dba8aba7|61db882b-22a8-7139-9e18-c5f7ec351cb3",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191bf87821f,
          },
          "e-162": {
            id: "e-162",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-34",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-161",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".read-more-tag",
              originalId:
                "68807ff0204b3738dba8aba7|61db882b-22a8-7139-9e18-c5f7ec351cb3",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".read-more-tag",
                originalId:
                  "68807ff0204b3738dba8aba7|61db882b-22a8-7139-9e18-c5f7ec351cb3",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x191bf87821f,
          },
          "e-165": {
            id: "e-165",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-166",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abba|0fdec84b-bc8c-1ec1-8d04-b73e60de136a",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abba|0fdec84b-bc8c-1ec1-8d04-b73e60de136a",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191aaf0058a,
          },
          "e-167": {
            id: "e-167",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-168",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abba|0fdec84b-bc8c-1ec1-8d04-b73e60de136d",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abba|0fdec84b-bc8c-1ec1-8d04-b73e60de136d",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 450,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191aaf029cd,
          },
          "e-169": {
            id: "e-169",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-35",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-170",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abba|f1ca395d-c989-51a4-6cc3-cb492ab727c2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abba|f1ca395d-c989-51a4-6cc3-cb492ab727c2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19214dd6765,
          },
          "e-170": {
            id: "e-170",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-36",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-169",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abba|f1ca395d-c989-51a4-6cc3-cb492ab727c2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abba|f1ca395d-c989-51a4-6cc3-cb492ab727c2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19214dd6765,
          },
          "e-173": {
            id: "e-173",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "GROW_EFFECT",
              instant: !1,
              config: { actionListId: "growIn", autoStopEventId: "e-179" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "840cf11d-6f08-20b7-2ae0-7b73f27382ee",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "840cf11d-6f08-20b7-2ae0-7b73f27382ee",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 450,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x191aac0d410,
          },
          "e-174": {
            id: "e-174",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-78",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "840cf11d-6f08-20b7-2ae0-7b73f2738313",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "840cf11d-6f08-20b7-2ae0-7b73f2738313",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 15,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191aac1fd73,
          },
          "e-178": {
            id: "e-178",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-177",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "840cf11d-6f08-20b7-2ae0-7b73f273831c",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "840cf11d-6f08-20b7-2ae0-7b73f273831c",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x191aac23b63,
          },
          "e-181": {
            id: "e-181",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OVER",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-39",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-182",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".hero-hover",
              originalId:
                "68807ff0204b3738dba8aba7|b983f0d2-4433-d5f0-5efe-9aff8c5482e8",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".hero-hover",
                originalId:
                  "68807ff0204b3738dba8aba7|b983f0d2-4433-d5f0-5efe-9aff8c5482e8",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19214f843d7,
          },
          "e-182": {
            id: "e-182",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_OUT",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-40",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-181",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".hero-hover",
              originalId:
                "68807ff0204b3738dba8aba7|b983f0d2-4433-d5f0-5efe-9aff8c5482e8",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".hero-hover",
                originalId:
                  "68807ff0204b3738dba8aba7|b983f0d2-4433-d5f0-5efe-9aff8c5482e8",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19214f843d8,
          },
          "e-183": {
            id: "e-183",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-41",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-184",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8aba7",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8aba7",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192152091c9,
          },
          "e-186": {
            id: "e-186",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-42",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-185",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abbb",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abbb",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192152ac928,
          },
          "e-187": {
            id: "e-187",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-188",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abbb",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abbb",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192152b951d,
          },
          "e-188": {
            id: "e-188",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-187",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abbb",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abbb",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192152b951d,
          },
          "e-190": {
            id: "e-190",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-42",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-189",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb2",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb2",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192152d6286,
          },
          "e-192": {
            id: "e-192",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-42",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-191",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb4",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb4",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192152db4e6,
          },
          "e-193": {
            id: "e-193",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-194",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb4",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb4",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192152dce74,
          },
          "e-194": {
            id: "e-194",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-193",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb4",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb4",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192152dce75,
          },
          "e-195": {
            id: "e-195",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-196",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb2",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb2",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192152dfd87,
          },
          "e-196": {
            id: "e-196",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-195",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb2",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb2",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192152dfd88,
          },
          "e-198": {
            id: "e-198",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-42",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-197",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb7",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb7",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192152e49b6,
          },
          "e-199": {
            id: "e-199",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-200",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb7",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb7",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192152e8010,
          },
          "e-200": {
            id: "e-200",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-199",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb7",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb7",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192152e8010,
          },
          "e-202": {
            id: "e-202",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-42",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-201",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb0",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb0",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192152ed5eb,
          },
          "e-203": {
            id: "e-203",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-204",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb0",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb0",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192152f1385,
          },
          "e-204": {
            id: "e-204",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-203",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb0",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb0",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192152f1385,
          },
          "e-206": {
            id: "e-206",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-42",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-205",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb8",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb8",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192152f7c9b,
          },
          "e-207": {
            id: "e-207",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-208",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb8",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb8",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192152f950c,
          },
          "e-208": {
            id: "e-208",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-207",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb8",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb8",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192152f950c,
          },
          "e-210": {
            id: "e-210",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-42",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-209",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb9",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb9",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192152fdbdb,
          },
          "e-211": {
            id: "e-211",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-212",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb9",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb9",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192152ff592,
          },
          "e-212": {
            id: "e-212",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-211",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb9",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb9",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192152ff592,
          },
          "e-214": {
            id: "e-214",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-42",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-213",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abba",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abba",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19215302b43,
          },
          "e-215": {
            id: "e-215",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_START",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-216",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abba",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abba",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19215304115,
          },
          "e-216": {
            id: "e-216",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-215",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abba",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abba",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19215304116,
          },
          "e-218": {
            id: "e-218",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-42",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-217",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb1",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb1",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19215308f8b,
          },
          "e-219": {
            id: "e-219",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_UP",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-26",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-220",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb1",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb1",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1921530a941,
          },
          "e-220": {
            id: "e-220",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_SCROLL_DOWN",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-27",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-219",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb1",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb1",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x1921530a942,
          },
          "e-222": {
            id: "e-222",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-42",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-221",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb3",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb3",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x19215313982,
          },
          "e-224": {
            id: "e-224",
            name: "",
            animationType: "custom",
            eventTypeId: "PAGE_FINISH",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-42",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-223",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb5",
              appliesTo: "PAGE",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb5",
                appliesTo: "PAGE",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192153163c7,
          },
          "e-225": {
            id: "e-225",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-226",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8aba7|6bd37292-5282-e855-ba53-dbeb6480588b",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8aba7|6bd37292-5282-e855-ba53-dbeb6480588b",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1921532ee4d,
          },
          "e-227": {
            id: "e-227",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-228",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8aba7|2f423519-54a1-f6cf-f436-adda19db444f",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8aba7|2f423519-54a1-f6cf-f436-adda19db444f",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x19215331022,
          },
          "e-229": {
            id: "e-229",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "FADE_EFFECT",
              instant: !1,
              config: { actionListId: "fadeIn", autoStopEventId: "e-230" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".card-small",
              originalId:
                "68807ff0204b3738dba8aba7|f3f4deab-f76b-9552-5eec-35b7d70e1cfc",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".card-small",
                originalId:
                  "68807ff0204b3738dba8aba7|f3f4deab-f76b-9552-5eec-35b7d70e1cfc",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 450,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x192153331e9,
          },
          "e-231": {
            id: "e-231",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "FADE_EFFECT",
              instant: !1,
              config: { actionListId: "fadeIn", autoStopEventId: "e-232" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              selector: ".card-big",
              originalId:
                "68807ff0204b3738dba8aba7|b310c4e9-87f8-3994-aa69-22849ebdbfa2",
              appliesTo: "CLASS",
            },
            targets: [
              {
                selector: ".card-big",
                originalId:
                  "68807ff0204b3738dba8aba7|b310c4e9-87f8-3994-aa69-22849ebdbfa2",
                appliesTo: "CLASS",
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 450,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x19215335d04,
          },
          "e-233": {
            id: "e-233",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-234",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8aba7|b549090b-fb57-780a-009d-ed71c2b6c8c2",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8aba7|b549090b-fb57-780a-009d-ed71c2b6c8c2",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1921533f671,
          },
          "e-235": {
            id: "e-235",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-236",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8aba7|91f2a621-a900-bda0-4e4b-f4d51b12c4ae",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8aba7|91f2a621-a900-bda0-4e4b-f4d51b12c4ae",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 1726932591e3,
          },
          "e-237": {
            id: "e-237",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-238",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "840cf11d-6f08-20b7-2ae0-7b73f27382f0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "840cf11d-6f08-20b7-2ae0-7b73f27382f0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x1921534762b,
          },
          "e-239": {
            id: "e-239",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "FADE_EFFECT",
              instant: !1,
              config: { actionListId: "fadeIn", autoStopEventId: "e-240" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abbb|4cdce911-e160-1d66-11cf-019fa4ba0da1",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abbb|4cdce911-e160-1d66-11cf-019fa4ba0da1",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x192159b1f7f,
          },
          "e-241": {
            id: "e-241",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "FADE_EFFECT",
              instant: !1,
              config: { actionListId: "fadeIn", autoStopEventId: "e-242" },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abbb|3d641119-0743-624f-4e9b-b473fee206a0",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abbb|3d641119-0743-624f-4e9b-b473fee206a0",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: null,
              effectIn: !0,
            },
            createdOn: 0x192159b4dcb,
          },
          "e-243": {
            id: "e-243",
            name: "",
            animationType: "preset",
            eventTypeId: "SCROLL_INTO_VIEW",
            action: {
              id: "",
              actionTypeId: "SLIDE_EFFECT",
              instant: !1,
              config: {
                actionListId: "slideInBottom",
                autoStopEventId: "e-244",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              id: "68807ff0204b3738dba8abb2|338636f3-38f5-d93b-80c1-22af1269d095",
              appliesTo: "ELEMENT",
              styleBlockIds: [],
            },
            targets: [
              {
                id: "68807ff0204b3738dba8abb2|338636f3-38f5-d93b-80c1-22af1269d095",
                appliesTo: "ELEMENT",
                styleBlockIds: [],
              },
            ],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: 0,
              scrollOffsetUnit: "%",
              delay: 250,
              direction: "BOTTOM",
              effectIn: !0,
            },
            createdOn: 0x192159b85de,
          },
          "e-245": {
            id: "e-245",
            name: "",
            animationType: "custom",
            eventTypeId: "MOUSE_CLICK",
            action: {
              id: "",
              actionTypeId: "GENERAL_START_ACTION",
              config: {
                delay: 0,
                easing: "",
                duration: 0,
                actionListId: "a-43",
                affectedElements: {},
                playInReverse: !1,
                autoStopEventId: "e-246",
              },
            },
            mediaQueries: ["main", "medium", "small", "tiny"],
            target: {
              appliesTo: "ELEMENT",
              styleBlockIds: [],
              id: "68807ff0204b3738dba8aba7|7f7be333-0a87-ccfd-200b-559fc44ee5ee",
            },
            targets: [],
            config: {
              loop: !1,
              playInReverse: !1,
              scrollOffsetValue: null,
              scrollOffsetUnit: null,
              delay: null,
              direction: null,
              effectIn: null,
            },
            createdOn: 0x192674663a1,
          },
        },
        actionLists: {
          a: {
            id: "a",
            title: "âš¡ Tag Marquee",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".tag",
                        selectorGuids: ["e29fcb9b-ba2a-c95a-9003-edcda1f4c665"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 1e4,
                      target: {
                        selector: ".tag",
                        selectorGuids: ["e29fcb9b-ba2a-c95a-9003-edcda1f4c665"],
                      },
                      xValue: -104.5,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".tag",
                        selectorGuids: ["e29fcb9b-ba2a-c95a-9003-edcda1f4c665"],
                      },
                      xValue: 0,
                      xUnit: "%",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1920b977b9f,
          },
          "a-2": {
            id: "a-2",
            title: "âš¡ Mask Frame",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-2-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".mask-frame",
                        selectorGuids: ["8088d142-43a8-3012-2d01-b7321654c75a"],
                      },
                      heightValue: 100,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-2-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".image",
                        selectorGuids: ["17adb1ac-252c-e613-df31-3895a2535ce7"],
                      },
                      xValue: 1.09,
                      yValue: 1.09,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-2-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".mask-frame",
                        selectorGuids: ["8088d142-43a8-3012-2d01-b7321654c75a"],
                      },
                      heightValue: 0,
                      widthUnit: "PX",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-2-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".image",
                        selectorGuids: ["17adb1ac-252c-e613-df31-3895a2535ce7"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x1920bd718ed,
          },
          "a-3": {
            id: "a-3",
            title: "â˜ï¸ Tab link icon open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-3-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-action-wrapper",
                        selectorGuids: ["17d80382-1dc3-1ccc-512a-491f4fc00933"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-3-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-3-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-action-wrapper",
                        selectorGuids: ["17d80382-1dc3-1ccc-512a-491f4fc00933"],
                      },
                      xValue: 180,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-3-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 800,
                      target: {},
                      xValue: 180,
                      zValue: null,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x180537db178,
          },
          "a-4": {
            id: "a-4",
            title: "â˜ï¸ Tab link icon close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-4-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-action-wrapper",
                        selectorGuids: ["17d80382-1dc3-1ccc-512a-491f4fc00933"],
                      },
                      xValue: 0,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "DEG",
                    },
                  },
                  {
                    id: "a-4-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {},
                      xValue: 0,
                      xUnit: "deg",
                      yUnit: "DEG",
                      zUnit: "DEG",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x180537db178,
          },
          "a-5": {
            id: "a-5",
            title: "â˜ï¸ Tab open",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-5-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-bottom",
                        selectorGuids: ["434903e2-8ac9-02f7-8a58-d779e6a1e757"],
                      },
                      heightValue: 0,
                      widthUnit: "AUTO",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-5-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-bottom",
                        selectorGuids: ["434903e2-8ac9-02f7-8a58-d779e6a1e757"],
                      },
                      yValue: -2,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-5-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 550,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-bottom",
                        selectorGuids: ["434903e2-8ac9-02f7-8a58-d779e6a1e757"],
                      },
                      widthUnit: "AUTO",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-5-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 550,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-bottom",
                        selectorGuids: ["434903e2-8ac9-02f7-8a58-d779e6a1e757"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-5-n-6",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-item",
                        selectorGuids: ["f1f9e869-b387-3b24-a8a4-f25c844642c7"],
                      },
                      globalSwatchId: "--color--white",
                      rValue: 255,
                      bValue: 255,
                      gValue: 255,
                      aValue: 1,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x180537db178,
          },
          "a-6": {
            id: "a-6",
            title: "â˜ï¸ Tab close",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-6-n",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 550,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-bottom",
                        selectorGuids: ["434903e2-8ac9-02f7-8a58-d779e6a1e757"],
                      },
                      heightValue: 0,
                      widthUnit: "AUTO",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-6-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outCubic",
                      duration: 550,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-bottom",
                        selectorGuids: ["434903e2-8ac9-02f7-8a58-d779e6a1e757"],
                      },
                      yValue: -2,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-6-n-3",
                    actionTypeId: "STYLE_BACKGROUND_COLOR",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".faq-item",
                        selectorGuids: ["f1f9e869-b387-3b24-a8a4-f25c844642c7"],
                      },
                      globalSwatchId: "",
                      rValue: 0,
                      bValue: 0,
                      gValue: 0,
                      aValue: 0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x180537db178,
          },
          "a-15": {
            id: "a-15",
            title: "â˜ï¸ Navbar - Home Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-15-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 1e3,
                      target: {
                        id: "668c03e7e4168e68237e863e|558ebe4a-c96a-9c49-afa2-42e9f56f7195",
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-15-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 1e3,
                      target: { id: "30ddc5a2-f02e-0392-5a0d-3d7d6db48b5a" },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18fde81dbe2,
          },
          "a-18": {
            id: "a-18",
            title: "â˜ï¸ Navbar - Home",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-18-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "668c03e7e4168e68237e863e|558ebe4a-c96a-9c49-afa2-42e9f56f7195",
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-18-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: { id: "30ddc5a2-f02e-0392-5a0d-3d7d6db48b5a" },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-18-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 500,
                      target: {
                        id: "668c03e7e4168e68237e863e|558ebe4a-c96a-9c49-afa2-42e9f56f7195",
                      },
                      zValue: 90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                  {
                    id: "a-18-n-4",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "easeInOut",
                      duration: 500,
                      target: { id: "30ddc5a2-f02e-0392-5a0d-3d7d6db48b5a" },
                      zValue: 90,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18fde81dbe2,
          },
          "a-20": {
            id: "a-20",
            title: "â˜ï¸ Navbar Card Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-20-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 800,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x18fcfaf9732,
          },
          "a-17": {
            id: "a-17",
            title: "â˜ï¸ Navbar Card Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-17-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {},
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-17-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 500,
                      target: {},
                      xValue: 1.1,
                      yValue: 1.1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x18fcfaf9732,
          },
          "a-21": {
            id: "a-21",
            title: "â˜ï¸ Bento Card - Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-21-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".image",
                        selectorGuids: ["17adb1ac-252c-e613-df31-3895a2535ce7"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-21-n-3",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow-wrapper",
                        selectorGuids: ["aeac40f5-92af-937d-1a3c-1c1ba6e4ead0"],
                      },
                      xValue: 0,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-21-n-2",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".image",
                        selectorGuids: ["17adb1ac-252c-e613-df31-3895a2535ce7"],
                      },
                      xValue: 1.09,
                      yValue: 1.09,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-21-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow-wrapper",
                        selectorGuids: ["aeac40f5-92af-937d-1a3c-1c1ba6e4ead0"],
                      },
                      xValue: 0.2,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x192103c59ec,
          },
          "a-22": {
            id: "a-22",
            title: "â˜ï¸ Bento Card - Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-22-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".image",
                        selectorGuids: ["17adb1ac-252c-e613-df31-3895a2535ce7"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-22-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow-wrapper",
                        selectorGuids: ["aeac40f5-92af-937d-1a3c-1c1ba6e4ead0"],
                      },
                      xValue: 0,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x192103c59ec,
          },
          "a-23": {
            id: "a-23",
            title: "â˜ï¸ Product - Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-23-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".image",
                        selectorGuids: ["17adb1ac-252c-e613-df31-3895a2535ce7"],
                      },
                      xValue: 1.09,
                      yValue: 1.09,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19210dbb72a,
          },
          "a-24": {
            id: "a-24",
            title: "â˜ï¸ Product - Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-24-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".image",
                        selectorGuids: ["17adb1ac-252c-e613-df31-3895a2535ce7"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19210dbb72a,
          },
          "a-25": {
            id: "a-25",
            title: "âš¡ Card Parallax",
            continuousParameterGroups: [
              {
                id: "a-25-p",
                type: "SCROLL_PROGRESS",
                parameterLabel: "Scroll",
                continuousActionGroups: [
                  {
                    keyframe: 0,
                    actionItems: [
                      {
                        id: "a-25-n",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".image-parallax",
                            selectorGuids: [
                              "10051bf4-af47-2bca-2ca7-d7e872d43233",
                            ],
                          },
                          yValue: 0,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                  {
                    keyframe: 100,
                    actionItems: [
                      {
                        id: "a-25-n-2",
                        actionTypeId: "TRANSFORM_MOVE",
                        config: {
                          delay: 0,
                          easing: "",
                          duration: 500,
                          target: {
                            useEventTarget: "CHILDREN",
                            selector: ".image-parallax",
                            selectorGuids: [
                              "10051bf4-af47-2bca-2ca7-d7e872d43233",
                            ],
                          },
                          yValue: -10,
                          xUnit: "PX",
                          yUnit: "%",
                          zUnit: "PX",
                        },
                      },
                    ],
                  },
                ],
              },
            ],
            createdOn: 0x19210de07f6,
          },
          "a-26": {
            id: "a-26",
            title: "âš¡ Navbar - Show",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-26-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 800,
                      target: {
                        selector: ".navbar-component",
                        selectorGuids: ["cc62f2d4-cd27-d539-bdee-9f60385fb05e"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19210e41b4a,
          },
          "a-27": {
            id: "a-27",
            title: "âš¡ Navbar - Hide",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-27-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 800,
                      target: {
                        selector: ".navbar-component",
                        selectorGuids: ["cc62f2d4-cd27-d539-bdee-9f60385fb05e"],
                      },
                      yValue: -10,
                      xUnit: "PX",
                      yUnit: "rem",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19210e41b4a,
          },
          "a-28": {
            id: "a-28",
            title: "â˜ï¸ Hero - Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-28-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".hero-hover",
                        selectorGuids: ["80ef0b2b-bf3f-0ce2-f667-ac31b602ae82"],
                      },
                      value: "none",
                    },
                  },
                  {
                    id: "a-28-n-3",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".hero-hover",
                        selectorGuids: ["80ef0b2b-bf3f-0ce2-f667-ac31b602ae82"],
                      },
                      widthValue: 0,
                      heightValue: 0,
                      widthUnit: "%",
                      heightUnit: "%",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-28-n-5",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".hero-hover",
                        selectorGuids: ["80ef0b2b-bf3f-0ce2-f667-ac31b602ae82"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-28-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".hero-hover",
                        selectorGuids: ["80ef0b2b-bf3f-0ce2-f667-ac31b602ae82"],
                      },
                      value: "flex",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-28-n-4",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".hero-hover",
                        selectorGuids: ["80ef0b2b-bf3f-0ce2-f667-ac31b602ae82"],
                      },
                      widthUnit: "AUTO",
                      heightUnit: "AUTO",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-28-n-6",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".hero-hover",
                        selectorGuids: ["80ef0b2b-bf3f-0ce2-f667-ac31b602ae82"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19211801453,
          },
          "a-29": {
            id: "a-29",
            title: "â˜ï¸ Hero - Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-29-n-2",
                    actionTypeId: "STYLE_SIZE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".hero-hover",
                        selectorGuids: ["80ef0b2b-bf3f-0ce2-f667-ac31b602ae82"],
                      },
                      widthValue: 0,
                      heightValue: 0,
                      widthUnit: "px",
                      heightUnit: "px",
                      locked: !1,
                    },
                  },
                  {
                    id: "a-29-n-3",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".hero-hover",
                        selectorGuids: ["80ef0b2b-bf3f-0ce2-f667-ac31b602ae82"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-29-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".hero-hover",
                        selectorGuids: ["80ef0b2b-bf3f-0ce2-f667-ac31b602ae82"],
                      },
                      value: "none",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19211801453,
          },
          "a-30": {
            id: "a-30",
            title: "â˜ï¸ Button Primary - Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-30-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: !0,
                        id: "68807ff0204b3738dba8aba7|5866cdfd-451c-e48d-60d2-e80e9bf58d58",
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-30-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow",
                        selectorGuids: ["17d80382-1dc3-1ccc-512a-491f4fc00934"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-30-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 600,
                      target: {
                        useEventTarget: !0,
                        id: "68807ff0204b3738dba8aba7|5866cdfd-451c-e48d-60d2-e80e9bf58d58",
                      },
                      xValue: 0.95,
                      yValue: 0.95,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-30-n-4",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow",
                        selectorGuids: ["17d80382-1dc3-1ccc-512a-491f4fc00934"],
                      },
                      yValue: 190,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x191fbf16030,
          },
          "a-31": {
            id: "a-31",
            title: "â˜ï¸ Button Primary - Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-31-n",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".button-hero",
                        selectorGuids: ["e7501a72-9ce6-322f-415c-6e7824cc8639"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-31-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 0,
                      target: {
                        selector: ".arrow",
                        selectorGuids: ["17d80382-1dc3-1ccc-512a-491f4fc00934"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x191fbf16030,
          },
          "a-32": {
            id: "a-32",
            title: "âš¡ Button Loop",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-32-n",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".circular-text",
                        selectorGuids: ["e7501a72-9ce6-322f-415c-6e7824cc863b"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-32-n-2",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 3e4,
                      target: {
                        selector: ".circular-text",
                        selectorGuids: ["e7501a72-9ce6-322f-415c-6e7824cc863b"],
                      },
                      zValue: 360,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-32-n-3",
                    actionTypeId: "TRANSFORM_ROTATE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        selector: ".circular-text",
                        selectorGuids: ["e7501a72-9ce6-322f-415c-6e7824cc863b"],
                      },
                      zValue: 0,
                      xUnit: "DEG",
                      yUnit: "DEG",
                      zUnit: "deg",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19211a23bac,
          },
          "a-33": {
            id: "a-33",
            title: "â˜ï¸ Tag - Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-33-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".opacity-50",
                        selectorGuids: ["467a0a70-6766-0feb-2990-641fcc0e8058"],
                      },
                      value: 0.5,
                      unit: "",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-33-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 600,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".opacity-50",
                        selectorGuids: ["467a0a70-6766-0feb-2990-641fcc0e8058"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x191bf878fd0,
          },
          "a-34": {
            id: "a-34",
            title: "â˜ï¸ Tag - Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-34-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".opacity-50",
                        selectorGuids: ["467a0a70-6766-0feb-2990-641fcc0e8058"],
                      },
                      value: 0.5,
                      unit: "",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x191bf878fd0,
          },
          "a-35": {
            id: "a-35",
            title: "â˜ï¸ Product Button - Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-35-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow-wrapper",
                        selectorGuids: ["aeac40f5-92af-937d-1a3c-1c1ba6e4ead0"],
                      },
                      xValue: 0,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-35-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow-wrapper",
                        selectorGuids: ["aeac40f5-92af-937d-1a3c-1c1ba6e4ead0"],
                      },
                      xValue: 0.3,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19214dd7ae6,
          },
          "a-36": {
            id: "a-36",
            title: "â˜ï¸ Product Button - Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-36-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outExpo",
                      duration: 1e3,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow-wrapper",
                        selectorGuids: ["aeac40f5-92af-937d-1a3c-1c1ba6e4ead0"],
                      },
                      xValue: 0,
                      xUnit: "rem",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19214dd7ae6,
          },
          "a-39": {
            id: "a-39",
            title: "â˜ï¸ Hero Product - Hover In",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-39-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow",
                        selectorGuids: ["17d80382-1dc3-1ccc-512a-491f4fc00934"],
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-39-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 800,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow",
                        selectorGuids: ["17d80382-1dc3-1ccc-512a-491f4fc00934"],
                      },
                      xValue: 150,
                      yValue: -110,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19214f84fcb,
          },
          "a-40": {
            id: "a-40",
            title: "â˜ï¸ Hero Product - Hover Out",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-40-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      target: {
                        useEventTarget: "CHILDREN",
                        selector: ".arrow",
                        selectorGuids: ["17d80382-1dc3-1ccc-512a-491f4fc00934"],
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "%",
                      yUnit: "%",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !1,
            createdOn: 0x19214f84fcb,
          },
          "a-41": {
            id: "a-41",
            title: "âš¡ Hero Load",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-41-n",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".hover-relative",
                        selectorGuids: ["888432d1-91d8-ba55-adad-ba36915144dc"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-41-n-3",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".hover-relative",
                        selectorGuids: ["888432d1-91d8-ba55-adad-ba36915144dc"],
                      },
                      xValue: 3,
                      yValue: 3,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-41-n-5",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".read-more-tag",
                        selectorGuids: ["61ebc1f6-a038-2511-b699-68b8d4f9b66a"],
                      },
                      yValue: 10,
                      xUnit: "PX",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-41-n-7",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".read-more-tag",
                        selectorGuids: ["61ebc1f6-a038-2511-b699-68b8d4f9b66a"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-41-n-10",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68807ff0204b3738dba8aba7|51364c1f-c2c4-184d-f696-20039fbb7860",
                      },
                      yValue: 10,
                      xUnit: "PX",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-41-n-9",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        id: "68807ff0204b3738dba8aba7|51364c1f-c2c4-184d-f696-20039fbb7860",
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-41-n-13",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".button-hero",
                        selectorGuids: ["e7501a72-9ce6-322f-415c-6e7824cc8639"],
                      },
                      xValue: 1.2,
                      yValue: 1.2,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-41-n-15",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".button-hero",
                        selectorGuids: ["e7501a72-9ce6-322f-415c-6e7824cc8639"],
                      },
                      value: 0,
                      unit: "",
                    },
                  },
                  {
                    id: "a-41-n-17",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: { id: "f9581d51-d09d-0761-a4c6-2b5106d5820a" },
                      yValue: -10,
                      xUnit: "PX",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-41-n-2",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 600,
                      target: {
                        selector: ".hover-relative",
                        selectorGuids: ["888432d1-91d8-ba55-adad-ba36915144dc"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-41-n-4",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 200,
                      easing: "swingTo",
                      duration: 1500,
                      target: {
                        selector: ".hover-relative",
                        selectorGuids: ["888432d1-91d8-ba55-adad-ba36915144dc"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                  {
                    id: "a-41-n-6",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 400,
                      easing: "swingTo",
                      duration: 800,
                      target: {
                        selector: ".read-more-tag",
                        selectorGuids: ["61ebc1f6-a038-2511-b699-68b8d4f9b66a"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-41-n-8",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 600,
                      easing: "",
                      duration: 1e3,
                      target: {
                        selector: ".read-more-tag",
                        selectorGuids: ["61ebc1f6-a038-2511-b699-68b8d4f9b66a"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-41-n-11",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 600,
                      easing: "swingTo",
                      duration: 800,
                      target: {
                        id: "68807ff0204b3738dba8aba7|51364c1f-c2c4-184d-f696-20039fbb7860",
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-41-n-16",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 600,
                      easing: "inOutQuart",
                      duration: 800,
                      target: {
                        selector: ".button-hero",
                        selectorGuids: ["e7501a72-9ce6-322f-415c-6e7824cc8639"],
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-41-n-18",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 600,
                      easing: "swingTo",
                      duration: 1e3,
                      target: { id: "f9581d51-d09d-0761-a4c6-2b5106d5820a" },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                  {
                    id: "a-41-n-12",
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 800,
                      easing: "",
                      duration: 1e3,
                      target: {
                        id: "68807ff0204b3738dba8aba7|51364c1f-c2c4-184d-f696-20039fbb7860",
                      },
                      value: 1,
                      unit: "",
                    },
                  },
                  {
                    id: "a-41-n-14",
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 800,
                      easing: "swingTo",
                      duration: 1e3,
                      target: {
                        selector: ".button-hero",
                        selectorGuids: ["e7501a72-9ce6-322f-415c-6e7824cc8639"],
                      },
                      xValue: 1,
                      yValue: 1,
                      locked: !0,
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x19215209eef,
          },
          "a-42": {
            id: "a-42",
            title: "âš¡ Navbar - Load Show",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-42-n",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 500,
                      target: {
                        selector: ".navbar-component",
                        selectorGuids: ["cc62f2d4-cd27-d539-bdee-9f60385fb05e"],
                      },
                      yValue: -10,
                      xUnit: "PX",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-42-n-2",
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "inOutQuart",
                      duration: 1e3,
                      target: {
                        selector: ".navbar-component",
                        selectorGuids: ["cc62f2d4-cd27-d539-bdee-9f60385fb05e"],
                      },
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "vh",
                      zUnit: "PX",
                    },
                  },
                ],
              },
            ],
            useFirstGroupAsInitialState: !0,
            createdOn: 0x192152ad55d,
          },
          "a-43": {
            id: "a-43",
            title: "â˜ï¸ Close Modal",
            actionItemGroups: [
              {
                actionItems: [
                  {
                    id: "a-43-n",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      value: "flex",
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".delete-this",
                        selectorGuids: ["0e70aa72-4bdd-086d-54d1-969aec00ebd7"],
                      },
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    id: "a-43-n-2",
                    actionTypeId: "GENERAL_DISPLAY",
                    config: {
                      delay: 0,
                      easing: "",
                      duration: 0,
                      value: "none",
                      target: {
                        useEventTarget: "PARENT",
                        selector: ".delete-this",
                        selectorGuids: ["0e70aa72-4bdd-086d-54d1-969aec00ebd7"],
                      },
                    },
                  },
                ],
              },
            ],
            createdOn: 0x19267466ebf,
            useFirstGroupAsInitialState: !0,
          },
          slideInBottom: {
            id: "slideInBottom",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 100,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_MOVE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0,
                      yValue: 0,
                      xUnit: "PX",
                      yUnit: "PX",
                      zUnit: "PX",
                    },
                  },
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
          fadeIn: {
            id: "fadeIn",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
          growIn: {
            id: "growIn",
            useFirstGroupAsInitialState: !0,
            actionItemGroups: [
              {
                actionItems: [
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 0,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      duration: 0,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 0.7500000000000001,
                      yValue: 0.7500000000000001,
                    },
                  },
                ],
              },
              {
                actionItems: [
                  {
                    actionTypeId: "TRANSFORM_SCALE",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      xValue: 1,
                      yValue: 1,
                    },
                  },
                  {
                    actionTypeId: "STYLE_OPACITY",
                    config: {
                      delay: 0,
                      easing: "outQuart",
                      duration: 1e3,
                      target: {
                        id: "N/A",
                        appliesTo: "TRIGGER_ELEMENT",
                        useEventTarget: !0,
                      },
                      value: 1,
                    },
                  },
                ],
              },
            ],
          },
        },
        site: {
          mediaQueries: [
            { key: "main", min: 992, max: 1e4 },
            { key: "medium", min: 768, max: 991 },
            { key: "small", min: 480, max: 767 },
            { key: "tiny", min: 0, max: 479 },
          ],
        },
      });
    },
  },
]);

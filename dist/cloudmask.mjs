import $, { createContext as gr, useState as je, useCallback as Ce, useEffect as hr, useContext as yr, Component as br } from "react";
var X = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function Ar() {
  if (Se) return N;
  Se = 1;
  var l = $, m = Symbol.for("react.element"), f = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, h = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, A = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(R, u, j) {
    var Z, x = {}, v = null, F = null;
    j !== void 0 && (v = "" + j), u.key !== void 0 && (v = "" + u.key), u.ref !== void 0 && (F = u.ref);
    for (Z in u) g.call(u, Z) && !A.hasOwnProperty(Z) && (x[Z] = u[Z]);
    if (R && R.defaultProps) for (Z in u = R.defaultProps, u) x[Z] === void 0 && (x[Z] = u[Z]);
    return { $$typeof: m, type: R, key: v, ref: F, props: x, _owner: h.current };
  }
  return N.Fragment = f, N.jsx = E, N.jsxs = E, N;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function Er() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    var l = $, m = Symbol.for("react.element"), f = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), A = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), R = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), re = Symbol.iterator, Pe = "@@iterator";
    function Be(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = re && e[re] || e[Pe];
      return typeof r == "function" ? r : null;
    }
    var T = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ne("error", e, t);
      }
    }
    function Ne(e, r, t) {
      {
        var n = T.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", t = t.concat([s]));
        var c = t.map(function(i) {
          return String(i);
        });
        c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
      }
    }
    var Ve = !1, Fe = !1, De = !1, _e = !1, Le = !1, te;
    te = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === A || Le || e === h || e === j || e === Z || _e || e === F || Ve || Fe || De || typeof e == "object" && e !== null && (e.$$typeof === v || e.$$typeof === x || e.$$typeof === E || e.$$typeof === R || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Ue(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? t + "(" + s + ")" : t;
    }
    function ae(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case f:
          return "Portal";
        case A:
          return "Profiler";
        case h:
          return "StrictMode";
        case j:
          return "Suspense";
        case Z:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return ae(r) + ".Consumer";
          case E:
            var t = e;
            return ae(t._context) + ".Provider";
          case u:
            return Ue(e, e.render, "ForwardRef");
          case x:
            var n = e.displayName || null;
            return n !== null ? n : C(e.type) || "Memo";
          case v: {
            var s = e, c = s._payload, i = s._init;
            try {
              return C(i(c));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, P = 0, ne, oe, me, ie, se, ce, le;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function ze() {
      {
        if (P === 0) {
          ne = console.log, oe = console.info, me = console.warn, ie = console.error, se = console.group, ce = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        P++;
      }
    }
    function Me() {
      {
        if (P--, P === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: ne
            }),
            info: S({}, e, {
              value: oe
            }),
            warn: S({}, e, {
              value: me
            }),
            error: S({}, e, {
              value: ie
            }),
            group: S({}, e, {
              value: se
            }),
            groupCollapsed: S({}, e, {
              value: ce
            }),
            groupEnd: S({}, e, {
              value: le
            })
          });
        }
        P < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = T.ReactCurrentDispatcher, z;
    function D(e, r, t) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            z = n && n[1] || "";
          }
        return `
` + z + e;
      }
    }
    var M = !1, _;
    {
      var Ie = typeof WeakMap == "function" ? WeakMap : Map;
      _ = new Ie();
    }
    function ue(e, r) {
      if (!e || M)
        return "";
      {
        var t = _.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      M = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var c;
      c = U.current, U.current = null, ze();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (w) {
              n = w;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (w) {
              n = w;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (w) {
            n = w;
          }
          e();
        }
      } catch (w) {
        if (w && n && typeof w.stack == "string") {
          for (var o = w.stack.split(`
`), b = n.stack.split(`
`), d = o.length - 1, p = b.length - 1; d >= 1 && p >= 0 && o[d] !== b[p]; )
            p--;
          for (; d >= 1 && p >= 0; d--, p--)
            if (o[d] !== b[p]) {
              if (d !== 1 || p !== 1)
                do
                  if (d--, p--, p < 0 || o[d] !== b[p]) {
                    var q = `
` + o[d].replace(" at new ", " at ");
                    return e.displayName && q.includes("<anonymous>") && (q = q.replace("<anonymous>", e.displayName)), typeof e == "function" && _.set(e, q), q;
                  }
                while (d >= 1 && p >= 0);
              break;
            }
        }
      } finally {
        M = !1, U.current = c, Me(), Error.prepareStackTrace = s;
      }
      var O = e ? e.displayName || e.name : "", J = O ? D(O) : "";
      return typeof e == "function" && _.set(e, J), J;
    }
    function Ke(e, r, t) {
      return ue(e, !1);
    }
    function We(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function L(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ue(e, We(e));
      if (typeof e == "string")
        return D(e);
      switch (e) {
        case j:
          return D("Suspense");
        case Z:
          return D("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Ke(e.render);
          case x:
            return L(e.type, r, t);
          case v: {
            var n = e, s = n._payload, c = n._init;
            try {
              return L(c(s), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, de = {}, Ze = T.ReactDebugCurrentFrame;
    function Y(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        Ze.setExtraStackFrame(t);
      } else
        Ze.setExtraStackFrame(null);
    }
    function He(e, r, t, n, s) {
      {
        var c = Function.call.bind(B);
        for (var i in e)
          if (c(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var b = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw b.name = "Invariant Violation", b;
              }
              o = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (d) {
              o = d;
            }
            o && !(o instanceof Error) && (Y(s), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof o), Y(null)), o instanceof Error && !(o.message in de) && (de[o.message] = !0, Y(s), y("Failed %s type: %s", t, o.message), Y(null));
          }
      }
    }
    var Qe = Array.isArray;
    function I(e) {
      return Qe(e);
    }
    function Ge(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Xe(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function ve(e) {
      if (Xe(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), pe(e);
    }
    var ge = T.ReactCurrentOwner, $e = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, ye;
    function er(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rr(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tr(e, r) {
      typeof e.ref == "string" && ge.current;
    }
    function ar(e, r) {
      {
        var t = function() {
          he || (he = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function nr(e, r) {
      {
        var t = function() {
          ye || (ye = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var or = function(e, r, t, n, s, c, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: m,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: c
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function mr(e, r, t, n, s) {
      {
        var c, i = {}, o = null, b = null;
        t !== void 0 && (ve(t), o = "" + t), rr(r) && (ve(r.key), o = "" + r.key), er(r) && (b = r.ref, tr(r, s));
        for (c in r)
          B.call(r, c) && !$e.hasOwnProperty(c) && (i[c] = r[c]);
        if (e && e.defaultProps) {
          var d = e.defaultProps;
          for (c in d)
            i[c] === void 0 && (i[c] = d[c]);
        }
        if (o || b) {
          var p = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && ar(i, p), b && nr(i, p);
        }
        return or(e, o, b, s, n, ge.current, i);
      }
    }
    var K = T.ReactCurrentOwner, be = T.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = L(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    var W;
    W = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === m;
    }
    function Ae() {
      {
        if (K.current) {
          var e = C(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ir(e) {
      return "";
    }
    var Ee = {};
    function sr(e) {
      {
        var r = Ae();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function xe(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = sr(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== K.current && (n = " It was passed a child from " + C(e._owner.type) + "."), k(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function we(e, r) {
      {
        if (typeof e != "object")
          return;
        if (I(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && xe(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = Be(e);
          if (typeof s == "function" && s !== e.entries)
            for (var c = s.call(e), i; !(i = c.next()).done; )
              H(i.value) && xe(i.value, r);
        }
      }
    }
    function cr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === x))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = C(r);
          He(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !W) {
          W = !0;
          var s = C(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    var Re = {};
    function qe(e, r, t, n, s, c) {
      {
        var i = Ye(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var b = ir();
          b ? o += b : o += Ae();
          var d;
          e === null ? d = "null" : I(e) ? d = "array" : e !== void 0 && e.$$typeof === m ? (d = "<" + (C(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : d = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", d, o);
        }
        var p = mr(e, r, t, s, c);
        if (p == null)
          return p;
        if (i) {
          var q = r.children;
          if (q !== void 0)
            if (n)
              if (I(q)) {
                for (var O = 0; O < q.length; O++)
                  we(q[O], e);
                Object.freeze && Object.freeze(q);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              we(q, e);
        }
        if (B.call(r, "key")) {
          var J = C(e), w = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), Q = w.length > 0 ? "{key: someKey, " + w.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Re[J + Q]) {
            var pr = w.length > 0 ? "{" + w.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, J, pr, J), Re[J + Q] = !0;
          }
        }
        return e === g ? lr(p) : cr(p), p;
      }
    }
    function fr(e, r, t) {
      return qe(e, r, t, !0);
    }
    function ur(e, r, t) {
      return qe(e, r, t, !1);
    }
    var dr = ur, Zr = fr;
    V.Fragment = g, V.jsx = dr, V.jsxs = Zr;
  }()), V;
}
process.env.NODE_ENV === "production" ? X.exports = Ar() : X.exports = Er();
var a = X.exports;
const Oe = gr(), xr = () => yr(Oe), wr = (l) => {
  var g, h;
  if (!l) return 500;
  const m = ((g = l.message) == null ? void 0 : g.toLowerCase()) || "", f = ((h = l.name) == null ? void 0 : h.toLowerCase()) || "";
  return m.includes("network") || m.includes("fetch") || m.includes("gateway") ? 502 : m.includes("timeout") || f.includes("timeout") ? 504 : m.includes("unavailable") || m.includes("maintenance") ? 503 : 500;
}, Or = ({
  children: l,
  serviceName: m = "Cloudmask",
  enableGlobalErrorHandling: f = !0,
  onError: g
}) => {
  const [h, A] = je(null), [E, R] = je(null), u = Ce((Z, x) => {
    const v = x || wr(Z);
    A(Z), R(v), g && g(Z, v);
  }, [g]), j = Ce(() => {
    A(null), R(null);
  }, []);
  return hr(() => {
    if (!f) return;
    const Z = (v) => {
      console.error("Cloudmask: Global error caught", v.error), u(v.error || new Error(v.message)), v.preventDefault();
    }, x = (v) => {
      console.error("Cloudmask: Unhandled rejection caught", v.reason), u(v.reason || new Error("Unhandled Promise Rejection")), v.preventDefault();
    };
    return window.addEventListener("error", Z), window.addEventListener("unhandledrejection", x), () => {
      window.removeEventListener("error", Z), window.removeEventListener("unhandledrejection", x);
    };
  }, [f, u]), /* @__PURE__ */ a.jsx(Oe.Provider, { value: {
    error: h,
    errorCode: E,
    triggerError: u,
    clearError: j,
    serviceName: m
  }, children: l });
}, Te = {
  400: {
    title: "Bad Request",
    message: "The request could not be understood by the server.",
    link: "https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/"
  },
  500: {
    title: "Internal Server Error",
    message: "The server encountered an unexpected error.",
    link: "https://www.cloudflare.com/learning/ddos/glossary/hypertext-transfer-protocol-http/"
  },
  502: {
    title: "Bad Gateway",
    message: "The web server reported a bad gateway error.",
    link: "https://www.cloudflare.com/5xx-error-landing"
  },
  503: {
    title: "Service Unavailable",
    message: "The server is temporarily unavailable.",
    link: "https://www.cloudflare.com/5xx-error-landing"
  }
}, Rr = (l) => {
  var f;
  if (!l) return 500;
  const m = ((f = l.name) == null ? void 0 : f.toLowerCase()) || "";
  return m.includes("typeerror") || m.includes("referenceerror") || m.includes("syntaxerror") ? 400 : m === "error" ? 502 : 500;
}, qr = () => Array.from(
  { length: 16 },
  () => Math.floor(Math.random() * 16).toString(16)
).join(""), jr = () => (/* @__PURE__ */ new Date()).toISOString().replace("T", " ").substring(0, 19) + " UTC", G = ({ icon: l, statusIcon: m, label: f, sublabel: g, status: h, isError: A, link: E }) => /* @__PURE__ */ a.jsxs("div", { className: `cf-relative cf-w-third cf-md:w-full cf-py-15 cf-md:p-0 cf-md:py-8 cf-md:text-left cf-md:border-solid cf-md:border-0 cf-md:border-b cf-md:border-gray-400 cf-overflow-hidden cf-float-left cf-md:float-none cf-text-center ${A ? "cf-error-source" : ""}`, children: [
  /* @__PURE__ */ a.jsx("div", { className: "cf-relative cf-mb-10 cf-md:m-0", children: E ? /* @__PURE__ */ a.jsxs("a", { href: E, target: "_blank", rel: "noopener noreferrer", children: [
    /* @__PURE__ */ a.jsx("img", { src: l, alt: f, className: "cf-block cf-md:hidden cf-h-20 cf-mx-auto", style: { width: "auto", height: "5rem" } }),
    /* @__PURE__ */ a.jsx("img", { src: m, alt: h, className: "cf-w-12 cf-h-12 cf-absolute cf-left-half cf-md:left-auto cf-md:right-0 cf-md:top-0 cf-ml-6-neg cf-bottom-4-neg", style: { width: "3rem", height: "3rem" } })
  ] }) : /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsx("img", { src: l, alt: f, className: "cf-block cf-md:hidden cf-h-20 cf-mx-auto", style: { width: "auto", height: "5rem" } }),
    /* @__PURE__ */ a.jsx("img", { src: m, alt: h, className: "cf-w-12 cf-h-12 cf-absolute cf-left-half cf-md:left-auto cf-md:right-0 cf-md:top-0 cf-ml-6-neg cf-bottom-4-neg", style: { width: "3rem", height: "3rem" } })
  ] }) }),
  /* @__PURE__ */ a.jsx("span", { className: "cf-md:block cf-w-full cf-truncate", style: { letterSpacing: 0 }, children: g }),
  /* @__PURE__ */ a.jsx("h3", { className: "cf-md:inline-block cf-mt-3 cf-md:mt-0 cf-text-2xl cf-text-gray-600 cf-font-light cf-leading-1.3", style: { marginBottom: 0 }, children: E ? /* @__PURE__ */ a.jsx("a", { href: E, target: "_blank", rel: "noopener noreferrer", children: f }) : f }),
  /* @__PURE__ */ a.jsx("span", { className: `cf-leading-1.3 cf-text-2xl ${A ? "cf-text-red-error" : "cf-text-green-success"}`, style: { letterSpacing: 0 }, children: h })
] }), Cr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABQCAMAAADY1yDdAAAAeFBMVEUAAAD///////+ZmZmqqqqcnJyampqampqbm5uampqbm5uZmZmbm5uZmZmZmZmampqZmZmampqampqZmZmZmZmampqampqZmZmYmJiZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZn/JnkoAAAAJ3RSTlMAAQIFBk1OUVJTVFVZWmdoh4iSk5ucpKqur9fZ29/g4eLy+Pn8/f7iAQurAAAA9ElEQVRYw+3ZSw+CMBAE4FErCiq+8W3BKvv//6EiRPBst4nJzGmTHr6Ebi8MUMUk2cWJ5xTHLB7gk5EVpZyHDdFblKKWctF7IytRzboyxqKc+HXnVhuxBlNRzxQ7fWSHqz5yxa3dtsM8PTy+Jy9x+Iz3pNq15N6dBD+k3agW2dZH2+7kHYnqo6g7/SfSfKRNd/KOBLl4Kfdpun98T34CCRAiREIgFp5jiRAhQoQIESJEiBAhQoQIESJEiPwNUuj/iXI4hag2gpQ0sxB1k8m1jdwAcYAKEFgHKDPR16xlZdlvns1Yr2CO2sdpJgpVubtkSV2VPwEqETy3yPMtAgAAAABJRU5ErkJggg==", Sr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJgAAABNCAMAAABt712PAAACBFBMVEUAAAD///////+qqqq/v7+ZmZmqqqq2trafn5+qqqqZmZmioqKqqqqdnZ2kpKSZmZmfn5+cnJyZmZmioqKbm5ufn5+ZmZmdnZ2bm5uZmZmfn5+dnZ2cnJyampqZmZmenp6cnJyZmZmdnZ2ampqbm5uZmZmcnJyZmZmbm5ucnJyampqbm5ubm5ubm5uZmZmampqcnJyampqbm5uampqcnJybm5ubm5uZmZmampqYmJiampqbm5uampqampqZmZmYmJiampqbm5uZmZmampqYmJiZmZmampqZmZmampqZmZmZmZmampqampqZmZmampqZmZmZmZmZmZmZmZmampqampqZmZmZmZmampqZmZmampqZmZmampqampqZmZmZmZmampqZmZmZmZmZmZmZmZmampqZmZmZmZmZmZmZmZmZmZmZmZmZmZmampqZmZmampqampqZmZmZmZmYmJiZmZmampqZmZmZmZmZmZmampqZmZmYmJiZmZmampqZmZmZmZmYmJiZmZmZmZmYmJiZmZmampqZmZmZmZmYmJiZmZmampqYmJiZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZk3ub1nAAAAq3RSTlMAAQIDBAUGBwgJCgsMDQ4PEBIUFhcYGRocHiAiJCYoKiwtLzAzNzs8PT4/QEJFRkdISUpMTVJUVVZXWFlbXV9hYmNkZWZnaGlqa2xtb3Byc3V2eHl8f4CBgoOEhoiJio2OkZOWl5iZm52eoqOmqKmrrK2ur7CxsrS1tri5uru8vb7BwsPExcbHyMnM0NHS1NXZ29ze3+Dh4uTl5unq7O3v8PLz9ff4+fv8/f6cL+z7AAACzElEQVRo3s3aV1cTQRiH8TcQFQU7WBDBAiqGKKIGlYhd7KISRZRYQAFLUBDBAigWEAkoBFGxoYGQ/L+kFxRzQiLs7uzM+1zmIud3JrOb2ZklElR6UXVXAGH9fO3Om09qs2RX+BCtQMfZ5epYy0p7Ebtgi9OqhLW6ahjT5Ds+V/5oVQcwgwaPyR0167nfmGE9myS6Mjow80KVibJcRX5o6sN6KayEGmjNXyjBtfQddHTFYrYrtRe6qok317VqADq7a+qYrfBBdzdNdC30wkCXTXPFNcBQ+WbBXMZcGEo3x7V51CAMPab8ByT1w3CmXAA3jLsQ2ijetSYgAIYu8augVgjpqGjXNjEufJ0nGNYuCIZTxq7AvPM1D5vrqi5sTRr7wCbKhU/6Z5m1oOnfRB9udMQT0QNhMGzX+6i4ty/imz4WWJID4mD1+lwr26J81/Nr4lwIpOhx2X/A9E7qcO0aMd+FRh3jJcOFP3M0r5t/QUp2revAdjkuXNQIOyzJhcfaXLM/y4L1aYPtl+VCUNvsfykNhjQtriVBebBsLTCHPBd2EGUccHueNNfeOmNLmAZWJhFWev1L2FbQI8d/V0IeqKvvUFxs2DOorHNdTNgrpTD4j8SCNUFx5TH2qe6ohsEdHVaqHIbTUWH56mEjWRGmrLIXvmEwqGdW+CqssBtsKg7bK+kEowYnD8WcfrBq4m52IsTLhTfjT2vcXAglExGlDYFde4iImvm5UE5EdoYuNBDRU46wdqKUIEeYl6gQTGEVLGFtRC0sYfeIvCxhLq6wLUQdHF3+RKL7HGG1RFTCEZZLRBsYurotRBQ3wA82dmrC77cc32hf9J2Z69vEmclBXq6RnMnzrHpOrtHdYW+eMLrJ+neGP4MvfsvF1Z8Z8ZbabRasYOWCKZspOe/Vz666tVGPdHM9Kh/jgp0lqbFPwTOdxZeuKsi1zzblrey/JL9aGU1QBWYAAAAASUVORK5CYII=", Jr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAF8AAABLCAMAAAAh1atKAAAB+1BMVEUAAAD///////+qqqq/v7+ZmZmqqqq2traqqqqZmZmioqKqqqqdnZ2ZmZmfn5+cnJyZmZmenp6ioqKbm5ufn5+ZmZmdnZ2bm5uZmZmcnJyfn5+bm5udnZ2cnJyfn5+dnZ2ZmZmcnJyZmZmbm5udnZ2bm5udnZ2ampqcnJydnZ2ampqcnJyZmZmbm5ucnJybm5ubm5ucnJyampqampqampqcnJybm5uampqbm5uampqbm5uZmZmYmJiampqampqYmJiampqZmZmYmJibm5uampqYmJiampqZmZmampqZmZmampqZmZmZmZmampqZmZmampqZmZmZmZmampqZmZmZmZmZmZmampqZmZmampqZmZmampqZmZmampqZmZmampqZmZmampqZmZmZmZmampqZmZmZmZmZmZmampqZmZmZmZmZmZmampqZmZmZmZmZmZmZmZmZmZmZmZmampqZmZmZmZmYmJiZmZmZmZmYmJiZmZmampqZmZmZmZmYmJiampqZmZmYmJiZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmBOyp0AAAAqHRSTlMAAQIDBAUGBwkKCwwNDxASFBUWFxgZGhweHyAhIiQlJygsLS4vMzQ1Njk6Ozw9PkBCQ0RHSU1PUVJTVFVXWFtcXV9hY2VmaGlqbm9wcXR1d3h7fH1/gIOFhoeLjI2RkpSXmZufoKKjpKWnqKmqra+xtLa6u7y9vsHCw8TFxsfJyszOz9DR0tPX2dvd3+Hi4+Tl5ufo6uvs7e7v8PHz9PX29/j5+vv8/f7pUPvfAAACdElEQVRYw+3Z11cTURAG8GsiBlTUABJ7ib33blRU7EYQK9aoUVAxFkBULNiJYAMVVGKDZP5M3d27102yG9T95hwf+J52HvZ38pA7d86sEFnxh5u+0F+nr+XoRPEH8VX+A24kGRnZL1/aTC7yYno/vL+VXOVjMCc/qIFcJj4sl7+GXOdgLr/Zvf9miDM/iQBZ6exXIfwaZ/8pwv9c4MRPJUjWOfmHMH6dk9+K8b8Ot+dnECgb7f1qlH/Vvje0ofzvtm10HsGyxc4/ifOv2/Detzi/ryjbX0zA7Mj2I0i/KYvPe4f0k4FMfzlBsyfTP4f172VOJZ+wfmpCur+KwKlI9y+i/Udp/NAetE+TrX4IztMBq38F7z+z8IXf8D5ZRtEyBp6O/PavcfhxxY/6weHTbNMvZ+HpuOk38PgvPQZfkuTxab7h72Ti6ZTh3+HyO7waPzbF5dNSzQ+z8XRG8x/w+R/yhBhPjFkmxDZO/4QQdWps74JF3VbPhXgtH/d7BC5rZUdLjRDy8L4X0MTkr54i5EMb1q+RbHDAZ/J9K/bunmupizft2zoO5y9o195qLDHrsLZV6632gvxgwnjtsc+od0nmGMhXp75cL/PN8bs3gPG7TL9WLxeqjhPC+D3py4wlyi/D+LdMr0ovi9SIMA3jrzb3kaON+qysb6D+n5X6rd29SJYF9bry0A87X7NO36w/PEaVntCl27Ht+QP953/z5fT2CuvXKr9T3sQzkXxxh/QD4r58SlyOwBLtNI+fB7VUtc+v7leaYPTnoJbm9jmvL/ZiXPyTQuPyifLwjWqLuLkdr3dXDLYMGxuiLXFg7l5YL78j/QRS4fgdoUvxHQAAAABJRU5ErkJggg==", ke = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABWVBMVEUAAAD//4Cq/1Wq1FWb0UCeykahzESczkKb0T6ezEKbzUGdzkCdyT+eykKby0CdzD+bzT6czD+dyj6bykCcy0Cbyz+dyT+byj6byz+cyz+byz+cyT6cyT+byj6byT+cyj+byj6ayj+byT+cyj6byj6byj+byj+ayz6byj6byj6cyT+byj6byj6byj6byj6byj6byj6byj+byT6byj6byj6byj+byj+ayj6byT6byj6byj6cy0Cdy0KgzEegzUigzUmjzk2m0FKm0FOm0FSo0Vaq0lqq0luv1GSv1WWw1We012622XO52ni62nq623u723u8237H4ZLH4ZTM5J3O5aDS56fS56nT6KvU6K3V6a3X6rHZ67be7sDf7sLg7sLg78Ph78Xj8Mnl8czn89Lo89Lr9Njr9dns9dvv9+H0+en0+er0+ev3++/5/PT6/PX6/fb+/v3///7///+2oUH2AAAAOnRSTlMAAgMGHB0eHyEyMzQ5OkBBQlVWV1hZcnN1dpKToqWmp6iqq6ytsrO0vL2+ycrNzuXm6Onq6+zw8fL6V13PxgAAAc5JREFUSMelluVTw0AQxbdBE1wLaXHXAgUCW9zd3d11//8PXAtlyElyHd6XzLz5vWx619s9AF4BszzcERnEwUhHOGgGwEem3Yd/1WebXnhBO4pqL1DhWU0oV3OWlC9yUCWnWMQNG71kGxyfVo/eqk9zv78W/VTnqmGjv+w/fDHqqOSXT3e0Ak5GMtCAemr44fNRV/nfgVbtQGuCz1EDE8ency7D8lnSE6IrYWkDUSW/QkSXLifKzoep5EcfiT4W3R47HUFlYI8VOOC8IECVip//IHoe58wagC4FH7tlBdZ5txugVxHYZPyF4EYAht3OzOFWLP6ceiN6nxYCQwCcc020H3+eswJbksJChQeizw3EVcbfxVBWgfsNa59Er7NjT2wLFiQFIuIq7bJ33x/Rz5dJVqmas0ZuKKGnUVmA7UMF702+JAKr0sWuBMgVzGW2xXQm35081mH6BXeH6G1KykfjvSYk/iu2z5Y8Wk0O6itx4qBNm29LtWskJ0WjJt+YbGQZmp0v87dXlmgFSlPs3iHXfKjzb6zGvyZQ6jOOqdRjipZJ5252i4JvyVaN9kLpTaDQ6/JghQZc9EDI8rueGFZ5uLPHQaenMxy0DPivvgB1F5tMoL3sZAAAAABJRU5ErkJggg==", Tr = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAABIFBMVEUAAAD/gID/VVXUKiq/JC7BLCzDKiq9KSnBJye9KSm+KCi/JyfAKCi9KCi/JCi8Jye9Jye9JCe+Jye/Jia8Jim9JSi+Jia8Jii+JSe+JSe9JSa9JCa9JCe9JSe9JSa9JSa+JCa9JCe9JSe8JSe9JSa9JSe9JSa8JSa9JSa9JCe9JCe9JSa9JSa9JCe9JCa9JSa8JSe9JCa9JCa9JCa9JSa9JSe9JCa8JCa9JSa9JSe9JCa9JSe+Jym/KSvALS/BMTPKTlDLVFbVcnPWdnfXenvXe3zXfH3ahIXahYbbhofci4zflZXkpabmra7nr7DnsbLptrfrvL3rvb3rvr7uxsfx0NDx0dLy0tPz2Nn02tr56+v57Oz78fH9+vr//v7///9CvFrmAAAAOnRSTlMAAgMGHB0eHyEyMzQ5OkBBQlVWV1hZcnN1dpKToqWmp6iqq6ytsrO0vL2+ycrNzuXm6Onq6+zw8fL6V13PxgAAAatJREFUSMelVmlTwkAMDUWE1gMEBC14cCingiBUYxHFGxFvRQXy//+FHzgGuku7Hd6Xzry+10ySbrIAc8Mhh6K5QhWrhVw0LDus5LJawkmUVNlM7s0ii6x3lty9h3zsu7n6NQ1nQfOzcklFM6iSQe+Moznizunv76IVYlMxVLSGOqH3owgCY/2CJmTQXCNDAsWQGOpXURSrA0Na2JAGAIAlFIciWtLJ0jrKNgxlB4BsJK9+2zoiov70d804ZICwkfsmaiEitoh+GEMYYMvIPRBRE7E5eBiwA3DAkC2ifqPRJ3o+Y94dAhwxpP5G1OsRfdTYrAsApyxb7xARdeqcMp0A8Kp3QUR0yS0sN8L5p1kETg6vgxzedW4OJlVqIa9K20bunogeB3244/Vhw8h9DRvA7fQmwLKRu+m+1BAR9Xb3ljGsAEjHdv5WCQAiNs+D/RMHGWF9xu7UGG2KpKA+ORpkLsHJtzielQEhQ9Dm9I5M7YeY9WCV5tpA9nccAARNtug6d+96UjP0Kc+s1e7j3gR8ZpcHJVKZUlciitX1RFJC0XxRQ62Yj4YVJtd/owaTEMmgjzMAAAAASUVORK5CYII=", ee = ({
  error: l,
  serviceName: m = "Cloudflare"
}) => {
  const f = Rr(l), [g, h] = $.useState(!1), A = Te[f] || Te[500], E = qr(), R = jr(), u = window.location.hostname;
  return /* @__PURE__ */ a.jsx("div", { className: "cloudmask-wrapper", style: { background: "#fff", minHeight: "100vh", letterSpacing: 0 }, children: /* @__PURE__ */ a.jsxs("div", { id: "cf-error-details", className: "cf-p-0", children: [
    /* @__PURE__ */ a.jsxs("header", { className: "cf-mx-auto cf-pt-10 cf-lg:pt-6 cf-lg:px-8 cf-w-240 cf-lg:w-full cf-mb-8", children: [
      /* @__PURE__ */ a.jsxs("h1", { className: "cf-inline-block cf-sm:block cf-sm:mb-2 cf-font-light cf-text-60 cf-lg:text-4xl cf-text-black-dark cf-leading-tight cf-mr-2", style: { letterSpacing: 0 }, children: [
        /* @__PURE__ */ a.jsx("span", { className: "cf-inline-block", style: { letterSpacing: 0 }, children: A.title }),
        /* @__PURE__ */ a.jsxs("span", { className: "code-label", style: { paddingLeft: 8 }, children: [
          "Error code ",
          f
        ] })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { style: { letterSpacing: 0 }, children: [
        "Visit ",
        /* @__PURE__ */ a.jsx("a", { href: A.link || "https://www.cloudflare.com", target: "_blank", rel: "noopener noreferrer", children: "cloudflare.com" }),
        " for more information."
      ] }),
      /* @__PURE__ */ a.jsx("div", { className: "cf-mt-3", style: { letterSpacing: 0 }, children: R })
    ] }),
    /* @__PURE__ */ a.jsx("div", { className: "cf-my-8 cf-bg-gradient-gray", children: /* @__PURE__ */ a.jsx("div", { className: "cf-w-240 cf-lg:w-full cf-mx-auto", children: /* @__PURE__ */ a.jsxs("div", { className: "cf-clearfix cf-md:px-8", children: [
      /* @__PURE__ */ a.jsx(
        G,
        {
          icon: Cr,
          statusIcon: ke,
          label: "Browser",
          sublabel: "You",
          status: "Working",
          isError: !1
        }
      ),
      /* @__PURE__ */ a.jsx(
        G,
        {
          icon: Sr,
          statusIcon: ke,
          label: m,
          sublabel: "Singapore",
          status: "Working",
          isError: !1,
          link: "https://www.cloudflare.com/5xx-error-landing"
        }
      ),
      /* @__PURE__ */ a.jsx(
        G,
        {
          icon: Jr,
          statusIcon: Tr,
          label: "Host",
          sublabel: u,
          status: "Error",
          isError: !0
        }
      )
    ] }) }) }),
    /* @__PURE__ */ a.jsx("div", { className: "cf-w-240 cf-lg:w-full cf-mx-auto cf-mb-8 cf-lg:px-8", children: /* @__PURE__ */ a.jsxs("div", { className: "cf-clearfix", children: [
      /* @__PURE__ */ a.jsxs("div", { id: "what-happened-section", className: "cf-w-half cf-md:w-full cf-float-left cf-pr-6 cf-md:pb-10 cf-md:pr-0 cf-leading-relaxed", children: [
        /* @__PURE__ */ a.jsx("h2", { className: "cf-text-3xl cf-font-normal cf-leading-1.3 cf-mb-4", style: { letterSpacing: 0 }, children: "What happened?" }),
        /* @__PURE__ */ a.jsx("p", { style: { letterSpacing: 0 }, children: A.message })
      ] }),
      /* @__PURE__ */ a.jsxs("div", { className: "cf-w-half cf-md:w-full cf-float-left cf-leading-relaxed", children: [
        /* @__PURE__ */ a.jsx("h2", { className: "cf-text-3xl cf-font-normal cf-leading-1.3 cf-mb-4", style: { letterSpacing: 0 }, children: "What can I do?" }),
        /* @__PURE__ */ a.jsx("p", { className: "cf-mb-6", style: { letterSpacing: 0 }, children: "Please try again in a few minutes." })
      ] })
    ] }) }),
    /* @__PURE__ */ a.jsx("div", { className: "cf-error-footer cf-w-240 cf-lg:w-full cf-py-10 cf-sm:py-4 cf-sm:px-8 cf-mx-auto cf-text-center cf-sm:text-left cf-border-solid cf-border-0 cf-border-t cf-border-gray-300", children: /* @__PURE__ */ a.jsxs("p", { className: "cf-text-13", style: { letterSpacing: 0 }, children: [
      /* @__PURE__ */ a.jsxs("span", { className: "cf-footer-item cf-sm:block cf-sm:mb-1", style: { letterSpacing: 0 }, children: [
        m,
        " Ray ID: ",
        /* @__PURE__ */ a.jsx("strong", { className: "cf-font-semibold", children: E })
      ] }),
      /* @__PURE__ */ a.jsx("span", { style: { padding: "0 2px" }, className: "cf-footer-separator cf-sm:hidden", children: "•" }),
      /* @__PURE__ */ a.jsxs("span", { className: "cf-footer-item cf-sm:block cf-sm:mb-1", style: { letterSpacing: 0 }, children: [
        "Your IP:",
        " ",
        g ? /* @__PURE__ */ a.jsx("span", { style: { letterSpacing: 0 }, children: "Hidden for privacy" }) : /* @__PURE__ */ a.jsx(
          "button",
          {
            type: "button",
            className: "cf-footer-ip-reveal-btn",
            onClick: () => h(!0),
            style: { letterSpacing: 0 },
            children: "Click to reveal"
          }
        ),
        /* @__PURE__ */ a.jsx("span", { className: "cf-footer-separator cf-sm:hidden", children: "•" })
      ] }),
      /* @__PURE__ */ a.jsxs("span", { className: "cf-footer-item cf-sm:block cf-sm:mb-1", style: { letterSpacing: 0 }, children: [
        /* @__PURE__ */ a.jsx("span", { children: "Performance & security by" }),
        " ",
        /* @__PURE__ */ a.jsx("a", { rel: "noopener noreferrer", href: "https://www.cloudflare.com", target: "_blank", children: "Cloudflare" })
      ] })
    ] }) })
  ] }) });
};
class Pr extends br {
  constructor(m) {
    super(m), this.state = { hasError: !1, error: null, errorInfo: null };
  }
  static getDerivedStateFromError(m) {
    return { hasError: !0 };
  }
  componentDidCatch(m, f) {
    this.setState({ error: m, errorInfo: f }), console.error("Cloudmask caught error:", m, f);
  }
  render() {
    return this.state.hasError ? /* @__PURE__ */ a.jsx(
      ee,
      {
        error: this.state.error,
        serviceName: this.props.serviceName
      }
    ) : this.props.children;
  }
}
const Br = ({ error: l, serviceName: m }) => l ? /* @__PURE__ */ a.jsx("div", { style: {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 999999
}, children: /* @__PURE__ */ a.jsx(
  ee,
  {
    error: l,
    serviceName: m
  }
) }) : null, Nr = () => {
  const { error: l, errorCode: m, serviceName: f } = xr();
  return l ? /* @__PURE__ */ a.jsx("div", { style: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 999999
  }, children: /* @__PURE__ */ a.jsx(
    ee,
    {
      errorCode: m || 500,
      serviceName: f
    }
  ) }) : null;
};
export {
  Br as Cloudmask,
  ee as CloudmaskDisplay,
  Pr as CloudmaskErrorBoundary,
  Nr as CloudmaskOverlay,
  Or as CloudmaskProvider,
  xr as useCloudmask
};

var q6 = Object.defineProperty;
var Y6 = (e, t, n) => t in e ? q6(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var qt = (e, t, n) => Y6(e, typeof t != "symbol" ? t + "" : t, n);
import * as y from "react";
import Ve, { forwardRef as p3, createElement as ia, useState as F0, createContext as h3, useEffect as a0, useContext as m3, useRef as C3, useLayoutEffect as G6 } from "react";
import * as ai from "react-dom";
import K6 from "react-dom";
var a2 = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function g3(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var oa = { exports: {} }, F1 = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ml;
function X6() {
  if (Ml) return F1;
  Ml = 1;
  var e = Ve, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, l, c) {
    var u, d = {}, p = null, m = null;
    c !== void 0 && (p = "" + c), l.key !== void 0 && (p = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (u in l) r.call(l, u) && !o.hasOwnProperty(u) && (d[u] = l[u]);
    if (s && s.defaultProps) for (u in l = s.defaultProps, l) d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: s, key: p, ref: m, props: d, _owner: i.current };
  }
  return F1.Fragment = n, F1.jsx = a, F1.jsxs = a, F1;
}
var P1 = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Al;
function J6() {
  return Al || (Al = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ve, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), C = Symbol.iterator, g = "@@iterator";
    function b(T) {
      if (T === null || typeof T != "object")
        return null;
      var ne = C && T[C] || T[g];
      return typeof ne == "function" ? ne : null;
    }
    var x = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(T) {
      {
        for (var ne = arguments.length, ye = new Array(ne > 1 ? ne - 1 : 0), He = 1; He < ne; He++)
          ye[He - 1] = arguments[He];
        E("error", T, ye);
      }
    }
    function E(T, ne, ye) {
      {
        var He = x.ReactDebugCurrentFrame, Ke = He.getStackAddendum();
        Ke !== "" && (ne += "%s", ye = ye.concat([Ke]));
        var r2 = ye.map(function(Ye) {
          return String(Ye);
        });
        r2.unshift("Warning: " + ne), Function.prototype.apply.call(console[T], console, r2);
      }
    }
    var S = !1, _ = !1, P = !1, F = !1, $ = !1, le;
    le = Symbol.for("react.module.reference");
    function pe(T) {
      return !!(typeof T == "string" || typeof T == "function" || T === r || T === o || $ || T === i || T === c || T === u || F || T === m || S || _ || P || typeof T == "object" && T !== null && (T.$$typeof === p || T.$$typeof === d || T.$$typeof === a || T.$$typeof === s || T.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      T.$$typeof === le || T.getModuleId !== void 0));
    }
    function fe(T, ne, ye) {
      var He = T.displayName;
      if (He)
        return He;
      var Ke = ne.displayName || ne.name || "";
      return Ke !== "" ? ye + "(" + Ke + ")" : ye;
    }
    function D(T) {
      return T.displayName || "Context";
    }
    function Q(T) {
      if (T == null)
        return null;
      if (typeof T.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof T == "function")
        return T.displayName || T.name || null;
      if (typeof T == "string")
        return T;
      switch (T) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case s:
            var ne = T;
            return D(ne) + ".Consumer";
          case a:
            var ye = T;
            return D(ye._context) + ".Provider";
          case l:
            return fe(T, T.render, "ForwardRef");
          case d:
            var He = T.displayName || null;
            return He !== null ? He : Q(T.type) || "Memo";
          case p: {
            var Ke = T, r2 = Ke._payload, Ye = Ke._init;
            try {
              return Q(Ye(r2));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, re = 0, k, ce, xe, X, j, B, he;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function Y() {
      {
        if (re === 0) {
          k = console.log, ce = console.info, xe = console.warn, X = console.error, j = console.group, B = console.groupCollapsed, he = console.groupEnd;
          var T = {
            configurable: !0,
            enumerable: !0,
            value: H,
            writable: !0
          };
          Object.defineProperties(console, {
            info: T,
            log: T,
            warn: T,
            error: T,
            group: T,
            groupCollapsed: T,
            groupEnd: T
          });
        }
        re++;
      }
    }
    function ie() {
      {
        if (re--, re === 0) {
          var T = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, T, {
              value: k
            }),
            info: N({}, T, {
              value: ce
            }),
            warn: N({}, T, {
              value: xe
            }),
            error: N({}, T, {
              value: X
            }),
            group: N({}, T, {
              value: j
            }),
            groupCollapsed: N({}, T, {
              value: B
            }),
            groupEnd: N({}, T, {
              value: he
            })
          });
        }
        re < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = x.ReactCurrentDispatcher, G;
    function oe(T, ne, ye) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (Ke) {
            var He = Ke.stack.trim().match(/\n( *(at )?)/);
            G = He && He[1] || "";
          }
        return `
` + G + T;
      }
    }
    var de = !1, ve;
    {
      var ke = typeof WeakMap == "function" ? WeakMap : Map;
      ve = new ke();
    }
    function ee(T, ne) {
      if (!T || de)
        return "";
      {
        var ye = ve.get(T);
        if (ye !== void 0)
          return ye;
      }
      var He;
      de = !0;
      var Ke = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var r2;
      r2 = q.current, q.current = null, Y();
      try {
        if (ne) {
          var Ye = function() {
            throw Error();
          };
          if (Object.defineProperty(Ye.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ye, []);
            } catch (R2) {
              He = R2;
            }
            Reflect.construct(T, [], Ye);
          } else {
            try {
              Ye.call();
            } catch (R2) {
              He = R2;
            }
            T.call(Ye.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R2) {
            He = R2;
          }
          T();
        }
      } catch (R2) {
        if (R2 && He && typeof R2.stack == "string") {
          for (var qe = R2.stack.split(`
`), S2 = He.stack.split(`
`), h2 = qe.length - 1, C2 = S2.length - 1; h2 >= 1 && C2 >= 0 && qe[h2] !== S2[C2]; )
            C2--;
          for (; h2 >= 1 && C2 >= 0; h2--, C2--)
            if (qe[h2] !== S2[C2]) {
              if (h2 !== 1 || C2 !== 1)
                do
                  if (h2--, C2--, C2 < 0 || qe[h2] !== S2[C2]) {
                    var K2 = `
` + qe[h2].replace(" at new ", " at ");
                    return T.displayName && K2.includes("<anonymous>") && (K2 = K2.replace("<anonymous>", T.displayName)), typeof T == "function" && ve.set(T, K2), K2;
                  }
                while (h2 >= 1 && C2 >= 0);
              break;
            }
        }
      } finally {
        de = !1, q.current = r2, ie(), Error.prepareStackTrace = Ke;
      }
      var Wt = T ? T.displayName || T.name : "", yt = Wt ? oe(Wt) : "";
      return typeof T == "function" && ve.set(T, yt), yt;
    }
    function Ae(T, ne, ye) {
      return ee(T, !1);
    }
    function Ue(T) {
      var ne = T.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function c2(T, ne, ye) {
      if (T == null)
        return "";
      if (typeof T == "function")
        return ee(T, Ue(T));
      if (typeof T == "string")
        return oe(T);
      switch (T) {
        case c:
          return oe("Suspense");
        case u:
          return oe("SuspenseList");
      }
      if (typeof T == "object")
        switch (T.$$typeof) {
          case l:
            return Ae(T.render);
          case d:
            return c2(T.type, ne, ye);
          case p: {
            var He = T, Ke = He._payload, r2 = He._init;
            try {
              return c2(r2(Ke), ne, ye);
            } catch {
            }
          }
        }
      return "";
    }
    var t2 = Object.prototype.hasOwnProperty, ze = {}, M = x.ReactDebugCurrentFrame;
    function R(T) {
      if (T) {
        var ne = T._owner, ye = c2(T.type, T._source, ne ? ne.type : null);
        M.setExtraStackFrame(ye);
      } else
        M.setExtraStackFrame(null);
    }
    function V(T, ne, ye, He, Ke) {
      {
        var r2 = Function.call.bind(t2);
        for (var Ye in T)
          if (r2(T, Ye)) {
            var qe = void 0;
            try {
              if (typeof T[Ye] != "function") {
                var S2 = Error((He || "React class") + ": " + ye + " type `" + Ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof T[Ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S2.name = "Invariant Violation", S2;
              }
              qe = T[Ye](ne, Ye, He, ye, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (h2) {
              qe = h2;
            }
            qe && !(qe instanceof Error) && (R(Ke), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", He || "React class", ye, Ye, typeof qe), R(null)), qe instanceof Error && !(qe.message in ze) && (ze[qe.message] = !0, R(Ke), w("Failed %s type: %s", ye, qe.message), R(null));
          }
      }
    }
    var f = Array.isArray;
    function A(T) {
      return f(T);
    }
    function O(T) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, ye = ne && T[Symbol.toStringTag] || T.constructor.name || "Object";
        return ye;
      }
    }
    function I(T) {
      try {
        return L(T), !1;
      } catch {
        return !0;
      }
    }
    function L(T) {
      return "" + T;
    }
    function K(T) {
      if (I(T))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", O(T)), L(T);
    }
    var U = x.ReactCurrentOwner, me = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, Ne, We;
    We = {};
    function _e(T) {
      if (t2.call(T, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(T, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return T.ref !== void 0;
    }
    function d2(T) {
      if (t2.call(T, "key")) {
        var ne = Object.getOwnPropertyDescriptor(T, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return T.key !== void 0;
    }
    function v(T, ne) {
      if (typeof T.ref == "string" && U.current && ne && U.current.stateNode !== ne) {
        var ye = Q(U.current.type);
        We[ye] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Q(U.current.type), T.ref), We[ye] = !0);
      }
    }
    function z(T, ne) {
      {
        var ye = function() {
          Te || (Te = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        ye.isReactWarning = !0, Object.defineProperty(T, "key", {
          get: ye,
          configurable: !0
        });
      }
    }
    function J(T, ne) {
      {
        var ye = function() {
          Ne || (Ne = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        ye.isReactWarning = !0, Object.defineProperty(T, "ref", {
          get: ye,
          configurable: !0
        });
      }
    }
    var W = function(T, ne, ye, He, Ke, r2, Ye) {
      var qe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: T,
        key: ne,
        ref: ye,
        props: Ye,
        // Record the component responsible for creating this element.
        _owner: r2
      };
      return qe._store = {}, Object.defineProperty(qe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(qe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: He
      }), Object.defineProperty(qe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ke
      }), Object.freeze && (Object.freeze(qe.props), Object.freeze(qe)), qe;
    };
    function te(T, ne, ye, He, Ke) {
      {
        var r2, Ye = {}, qe = null, S2 = null;
        ye !== void 0 && (K(ye), qe = "" + ye), d2(ne) && (K(ne.key), qe = "" + ne.key), _e(ne) && (S2 = ne.ref, v(ne, Ke));
        for (r2 in ne)
          t2.call(ne, r2) && !me.hasOwnProperty(r2) && (Ye[r2] = ne[r2]);
        if (T && T.defaultProps) {
          var h2 = T.defaultProps;
          for (r2 in h2)
            Ye[r2] === void 0 && (Ye[r2] = h2[r2]);
        }
        if (qe || S2) {
          var C2 = typeof T == "function" ? T.displayName || T.name || "Unknown" : T;
          qe && z(Ye, C2), S2 && J(Ye, C2);
        }
        return W(T, qe, S2, Ke, He, U.current, Ye);
      }
    }
    var se = x.ReactCurrentOwner, Ee = x.ReactDebugCurrentFrame;
    function Ce(T) {
      if (T) {
        var ne = T._owner, ye = c2(T.type, T._source, ne ? ne.type : null);
        Ee.setExtraStackFrame(ye);
      } else
        Ee.setExtraStackFrame(null);
    }
    var Se;
    Se = !1;
    function Le(T) {
      return typeof T == "object" && T !== null && T.$$typeof === t;
    }
    function u2() {
      {
        if (se.current) {
          var T = Q(se.current.type);
          if (T)
            return `

Check the render method of \`` + T + "`.";
        }
        return "";
      }
    }
    function m2(T) {
      return "";
    }
    var n2 = {};
    function zn(T) {
      {
        var ne = u2();
        if (!ne) {
          var ye = typeof T == "string" ? T : T.displayName || T.name;
          ye && (ne = `

Check the top-level render call using <` + ye + ">.");
        }
        return ne;
      }
    }
    function $0(T, ne) {
      {
        if (!T._store || T._store.validated || T.key != null)
          return;
        T._store.validated = !0;
        var ye = zn(ne);
        if (n2[ye])
          return;
        n2[ye] = !0;
        var He = "";
        T && T._owner && T._owner !== se.current && (He = " It was passed a child from " + Q(T._owner.type) + "."), Ce(T), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ye, He), Ce(null);
      }
    }
    function B0(T, ne) {
      {
        if (typeof T != "object")
          return;
        if (A(T))
          for (var ye = 0; ye < T.length; ye++) {
            var He = T[ye];
            Le(He) && $0(He, ne);
          }
        else if (Le(T))
          T._store && (T._store.validated = !0);
        else if (T) {
          var Ke = b(T);
          if (typeof Ke == "function" && Ke !== T.entries)
            for (var r2 = Ke.call(T), Ye; !(Ye = r2.next()).done; )
              Le(Ye.value) && $0(Ye.value, ne);
        }
      }
    }
    function I6(T) {
      {
        var ne = T.type;
        if (ne == null || typeof ne == "string")
          return;
        var ye;
        if (typeof ne == "function")
          ye = ne.propTypes;
        else if (typeof ne == "object" && (ne.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ne.$$typeof === d))
          ye = ne.propTypes;
        else
          return;
        if (ye) {
          var He = Q(ne);
          V(ye, T.props, "prop", He, T);
        } else if (ne.PropTypes !== void 0 && !Se) {
          Se = !0;
          var Ke = Q(ne);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ke || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function D6(T) {
      {
        for (var ne = Object.keys(T.props), ye = 0; ye < ne.length; ye++) {
          var He = ne[ye];
          if (He !== "children" && He !== "key") {
            Ce(T), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", He), Ce(null);
            break;
          }
        }
        T.ref !== null && (Ce(T), w("Invalid attribute `ref` supplied to `React.Fragment`."), Ce(null));
      }
    }
    var El = {};
    function Sl(T, ne, ye, He, Ke, r2) {
      {
        var Ye = pe(T);
        if (!Ye) {
          var qe = "";
          (T === void 0 || typeof T == "object" && T !== null && Object.keys(T).length === 0) && (qe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S2 = m2();
          S2 ? qe += S2 : qe += u2();
          var h2;
          T === null ? h2 = "null" : A(T) ? h2 = "array" : T !== void 0 && T.$$typeof === t ? (h2 = "<" + (Q(T.type) || "Unknown") + " />", qe = " Did you accidentally export a JSX literal instead of a component?") : h2 = typeof T, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", h2, qe);
        }
        var C2 = te(T, ne, ye, Ke, r2);
        if (C2 == null)
          return C2;
        if (Ye) {
          var K2 = ne.children;
          if (K2 !== void 0)
            if (He)
              if (A(K2)) {
                for (var Wt = 0; Wt < K2.length; Wt++)
                  B0(K2[Wt], T);
                Object.freeze && Object.freeze(K2);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              B0(K2, T);
        }
        if (t2.call(ne, "key")) {
          var yt = Q(T), R2 = Object.keys(ne).filter(function(W6) {
            return W6 !== "key";
          }), Wi = R2.length > 0 ? "{key: someKey, " + R2.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!El[yt + Wi]) {
            var U6 = R2.length > 0 ? "{" + R2.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Wi, yt, U6, yt), El[yt + Wi] = !0;
          }
        }
        return T === r ? D6(C2) : I6(C2), C2;
      }
    }
    function Z6(T, ne, ye) {
      return Sl(T, ne, ye, !0);
    }
    function z6(T, ne, ye) {
      return Sl(T, ne, ye, !1);
    }
    var $6 = z6, B6 = Z6;
    P1.Fragment = r, P1.jsx = $6, P1.jsxs = B6;
  }()), P1;
}
process.env.NODE_ENV === "production" ? oa.exports = X6() : oa.exports = J6();
var h = oa.exports, aa = { exports: {} }, qi = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tl;
function Q6() {
  if (Tl) return qi;
  Tl = 1;
  var e = Ve;
  function t(l, c) {
    return l === c && (l !== 0 || 1 / l === 1 / c) || l !== l && c !== c;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, i = e.useRef, o = e.useEffect, a = e.useMemo, s = e.useDebugValue;
  return qi.useSyncExternalStoreWithSelector = function(l, c, u, d, p) {
    var m = i(null);
    if (m.current === null) {
      var C = { hasValue: !1, value: null };
      m.current = C;
    } else C = m.current;
    m = a(function() {
      function b(_) {
        if (!x) {
          if (x = !0, w = _, _ = d(_), p !== void 0 && C.hasValue) {
            var P = C.value;
            if (p(P, _)) return E = P;
          }
          return E = _;
        }
        if (P = E, n(w, _)) return P;
        var F = d(_);
        return p !== void 0 && p(P, F) ? P : (w = _, E = F);
      }
      var x = !1, w, E, S = u === void 0 ? null : u;
      return [function() {
        return b(c());
      }, S === null ? void 0 : function() {
        return b(S());
      }];
    }, [c, u, d, p]);
    var g = r(l, m[0], m[1]);
    return o(function() {
      C.hasValue = !0, C.value = g;
    }, [g]), s(g), g;
  }, qi;
}
var Yi = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ol;
function e5() {
  return Ol || (Ol = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Ve;
    function t(c, u) {
      return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
    }
    var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, i = e.useRef, o = e.useEffect, a = e.useMemo, s = e.useDebugValue;
    function l(c, u, d, p, m) {
      var C = i(null), g;
      C.current === null ? (g = {
        hasValue: !1,
        value: null
      }, C.current = g) : g = C.current;
      var b = a(function() {
        var S = !1, _, P, F = function(fe) {
          if (!S) {
            S = !0, _ = fe;
            var D = p(fe);
            if (m !== void 0 && g.hasValue) {
              var Q = g.value;
              if (m(Q, D))
                return P = Q, Q;
            }
            return P = D, D;
          }
          var N = _, re = P;
          if (n(N, fe))
            return re;
          var k = p(fe);
          return m !== void 0 && m(re, k) ? re : (_ = fe, P = k, k);
        }, $ = d === void 0 ? null : d, le = function() {
          return F(u());
        }, pe = $ === null ? void 0 : function() {
          return F($());
        };
        return [le, pe];
      }, [u, d, p, m]), x = b[0], w = b[1], E = r(c, x, w);
      return o(function() {
        g.hasValue = !0, g.value = E;
      }, [E]), s(E), E;
    }
    Yi.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Yi;
}
process.env.NODE_ENV === "production" ? aa.exports = Q6() : aa.exports = e5();
var t5 = aa.exports, D2 = (
  // prettier-ignore
  // @ts-ignore
  "default" in y ? y.default : y
), Rl = Symbol.for("react-redux-context"), Fl = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function n5() {
  if (!D2.createContext)
    return {};
  const e = Fl[Rl] ?? (Fl[Rl] = /* @__PURE__ */ new Map());
  let t = e.get(D2.createContext);
  return t || (t = D2.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(D2.createContext, t)), t;
}
var st = /* @__PURE__ */ n5(), r5 = () => {
  throw new Error("uSES not initialized!");
};
function rs(e = st) {
  return function() {
    const n = D2.useContext(e);
    if (process.env.NODE_ENV !== "production" && !n)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return n;
  };
}
var v3 = /* @__PURE__ */ rs(), y3 = r5, i5 = (e) => {
  y3 = e;
}, o5 = (e, t) => e === t;
function a5(e = st) {
  const t = e === st ? v3 : rs(e), n = (r, i = {}) => {
    const { equalityFn: o = o5, devModeChecks: a = {} } = typeof i == "function" ? { equalityFn: i } : i;
    if (process.env.NODE_ENV !== "production") {
      if (!r)
        throw new Error("You must pass a selector to useSelector");
      if (typeof r != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof o != "function")
        throw new Error(
          "You must pass a function as an equality function to useSelector"
        );
    }
    const {
      store: s,
      subscription: l,
      getServerState: c,
      stabilityCheck: u,
      identityFunctionCheck: d
    } = t(), p = D2.useRef(!0), m = D2.useCallback(
      {
        [r.name](g) {
          const b = r(g);
          if (process.env.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: x,
              stabilityCheck: w
            } = {
              stabilityCheck: u,
              identityFunctionCheck: d,
              ...a
            };
            if (w === "always" || w === "once" && p.current) {
              const E = r(g);
              if (!o(b, E)) {
                let S;
                try {
                  throw new Error();
                } catch (_) {
                  ({ stack: S } = _);
                }
                console.warn(
                  "Selector " + (r.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: g,
                    selected: b,
                    selected2: E,
                    stack: S
                  }
                );
              }
            }
            if ((x === "always" || x === "once" && p.current) && b === g) {
              let E;
              try {
                throw new Error();
              } catch (S) {
                ({ stack: E } = S);
              }
              console.warn(
                "Selector " + (r.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: E }
              );
            }
            p.current && (p.current = !1);
          }
          return b;
        }
      }[r.name],
      [r, u, a.stabilityCheck]
    ), C = y3(
      l.addNestedSub,
      s.getState,
      c || s.getState,
      m,
      o
    );
    return D2.useDebugValue(C), C;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Z2 = /* @__PURE__ */ a5();
function s5(e) {
  e();
}
function l5() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      s5(() => {
        let n = e;
        for (; n; )
          n.callback(), n = n.next;
      });
    },
    get() {
      const n = [];
      let r = e;
      for (; r; )
        n.push(r), r = r.next;
      return n;
    },
    subscribe(n) {
      let r = !0;
      const i = t = {
        callback: n,
        next: null,
        prev: t
      };
      return i.prev ? i.prev.next = i : e = i, function() {
        !r || e === null || (r = !1, i.next ? i.next.prev = i.prev : t = i.prev, i.prev ? i.prev.next = i.next : e = i.next);
      };
    }
  };
}
var Pl = {
  notify() {
  },
  get: () => []
};
function c5(e, t) {
  let n, r = Pl, i = 0, o = !1;
  function a(g) {
    u();
    const b = r.subscribe(g);
    let x = !1;
    return () => {
      x || (x = !0, b(), d());
    };
  }
  function s() {
    r.notify();
  }
  function l() {
    C.onStateChange && C.onStateChange();
  }
  function c() {
    return o;
  }
  function u() {
    i++, n || (n = e.subscribe(l), r = l5());
  }
  function d() {
    i--, n && i === 0 && (n(), n = void 0, r.clear(), r = Pl);
  }
  function p() {
    o || (o = !0, u());
  }
  function m() {
    o && (o = !1, d());
  }
  const C = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: l,
    isSubscribed: c,
    trySubscribe: p,
    tryUnsubscribe: m,
    getListeners: () => r
  };
  return C;
}
var u5 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", f5 = typeof navigator < "u" && navigator.product === "ReactNative", d5 = u5 || f5 ? D2.useLayoutEffect : D2.useEffect;
function p5({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  identityFunctionCheck: o = "once"
}) {
  const a = D2.useMemo(() => {
    const c = c5(e);
    return {
      store: e,
      subscription: c,
      getServerState: r ? () => r : void 0,
      stabilityCheck: i,
      identityFunctionCheck: o
    };
  }, [e, r, i, o]), s = D2.useMemo(() => e.getState(), [e]);
  d5(() => {
    const { subscription: c } = a;
    return c.onStateChange = c.notifyNestedSubs, c.trySubscribe(), s !== e.getState() && c.notifyNestedSubs(), () => {
      c.tryUnsubscribe(), c.onStateChange = void 0;
    };
  }, [a, s]);
  const l = t || st;
  return /* @__PURE__ */ D2.createElement(l.Provider, { value: a }, n);
}
var b3 = p5;
function x3(e = st) {
  const t = e === st ? v3 : (
    // @ts-ignore
    rs(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var h5 = /* @__PURE__ */ x3();
function m5(e = st) {
  const t = e === st ? h5 : x3(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Q2 = /* @__PURE__ */ m5();
i5(t5.useSyncExternalStoreWithSelector);
function x2(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var C5 = typeof Symbol == "function" && Symbol.observable || "@@observable", kl = C5, Gi = () => Math.random().toString(36).substring(7).split("").join("."), g5 = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Gi()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Gi()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Gi()}`
}, At = g5;
function Rn(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function v5(e) {
  if (e === void 0)
    return "undefined";
  if (e === null)
    return "null";
  const t = typeof e;
  switch (t) {
    case "boolean":
    case "string":
    case "number":
    case "symbol":
    case "function":
      return t;
  }
  if (Array.isArray(e))
    return "array";
  if (x5(e))
    return "date";
  if (b5(e))
    return "error";
  const n = y5(e);
  switch (n) {
    case "Symbol":
    case "Promise":
    case "WeakMap":
    case "WeakSet":
    case "Map":
    case "Set":
      return n;
  }
  return Object.prototype.toString.call(e).slice(8, -1).toLowerCase().replace(/\s/g, "");
}
function y5(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function b5(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function x5(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function X0(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = v5(e)), t;
}
function w3(e, t, n) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? x2(2) : `Expected the root reducer to be a function. Instead, received: '${X0(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? x2(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? x2(1) : `Expected the enhancer to be a function. Instead, received: '${X0(n)}'`);
    return n(w3)(e, t);
  }
  let r = e, i = t, o = /* @__PURE__ */ new Map(), a = o, s = 0, l = !1;
  function c() {
    a === o && (a = /* @__PURE__ */ new Map(), o.forEach((b, x) => {
      a.set(x, b);
    }));
  }
  function u() {
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? x2(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function d(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? x2(4) : `Expected the listener to be a function. Instead, received: '${X0(b)}'`);
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? x2(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let x = !0;
    c();
    const w = s++;
    return a.set(w, b), function() {
      if (x) {
        if (l)
          throw new Error(process.env.NODE_ENV === "production" ? x2(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        x = !1, c(), a.delete(w), o = null;
      }
    };
  }
  function p(b) {
    if (!Rn(b))
      throw new Error(process.env.NODE_ENV === "production" ? x2(7) : `Actions must be plain objects. Instead, the actual type was: '${X0(b)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof b.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? x2(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof b.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? x2(17) : `Action "type" property must be a string. Instead, the actual type was: '${X0(b.type)}'. Value was: '${b.type}' (stringified)`);
    if (l)
      throw new Error(process.env.NODE_ENV === "production" ? x2(9) : "Reducers may not dispatch actions.");
    try {
      l = !0, i = r(i, b);
    } finally {
      l = !1;
    }
    return (o = a).forEach((w) => {
      w();
    }), b;
  }
  function m(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? x2(10) : `Expected the nextReducer to be a function. Instead, received: '${X0(b)}`);
    r = b, p({
      type: At.REPLACE
    });
  }
  function C() {
    const b = d;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(x) {
        if (typeof x != "object" || x === null)
          throw new Error(process.env.NODE_ENV === "production" ? x2(11) : `Expected the observer to be an object. Instead, received: '${X0(x)}'`);
        function w() {
          const S = x;
          S.next && S.next(u());
        }
        return w(), {
          unsubscribe: b(w)
        };
      },
      [kl]() {
        return this;
      }
    };
  }
  return p({
    type: At.INIT
  }), {
    dispatch: p,
    subscribe: d,
    getState: u,
    replaceReducer: m,
    [kl]: C
  };
}
function Hl(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function w5(e, t, n, r) {
  const i = Object.keys(t), o = n && n.type === At.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Rn(e))
    return `The ${o} has unexpected type of "${X0(e)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const a = Object.keys(e).filter((s) => !t.hasOwnProperty(s) && !r[s]);
  if (a.forEach((s) => {
    r[s] = !0;
  }), !(n && n.type === At.REPLACE) && a.length > 0)
    return `Unexpected ${a.length > 1 ? "keys" : "key"} "${a.join('", "')}" found in ${o}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function _5(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: At.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? x2(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof n(void 0, {
      type: At.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? x2(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${At.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function E5(e) {
  const t = Object.keys(e), n = {};
  for (let a = 0; a < t.length; a++) {
    const s = t[a];
    process.env.NODE_ENV !== "production" && typeof e[s] > "u" && Hl(`No reducer provided for key "${s}"`), typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let o;
  try {
    _5(n);
  } catch (a) {
    o = a;
  }
  return function(s = {}, l) {
    if (o)
      throw o;
    if (process.env.NODE_ENV !== "production") {
      const d = w5(s, n, l, i);
      d && Hl(d);
    }
    let c = !1;
    const u = {};
    for (let d = 0; d < r.length; d++) {
      const p = r[d], m = n[p], C = s[p], g = m(C, l);
      if (typeof g > "u") {
        const b = l && l.type;
        throw new Error(process.env.NODE_ENV === "production" ? x2(14) : `When called with an action of type ${b ? `"${String(b)}"` : "(unknown type)"}, the slice reducer for key "${p}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      u[p] = g, c = c || g !== C;
    }
    return c = c || r.length !== Object.keys(s).length, c ? u : s;
  };
}
function Ar(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function S5(...e) {
  return (t) => (n, r) => {
    const i = t(n, r);
    let o = () => {
      throw new Error(process.env.NODE_ENV === "production" ? x2(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: i.getState,
      dispatch: (l, ...c) => o(l, ...c)
    }, s = e.map((l) => l(a));
    return o = Ar(...s)(i.dispatch), {
      ...i,
      dispatch: o
    };
  };
}
function _3(e) {
  return Rn(e) && "type" in e && typeof e.type == "string";
}
var E3 = Symbol.for("immer-nothing"), Nl = Symbol.for("immer-draftable"), W2 = Symbol.for("immer-state"), M5 = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(e) {
    return `The plugin for '${e}' has not been loaded into Immer. To enable the plugin, import and call \`enable${e}()\` when initializing your application.`;
  },
  function(e) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${e}'`;
  },
  "This object has been frozen and should not be mutated",
  function(e) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + e;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(e) {
    return `'current' expects a draft, got: ${e}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(e) {
    return `'original' expects a draft, got: ${e}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function V2(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const n = M5[e], r = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${r}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var m1 = Object.getPrototypeOf;
function kt(e) {
  return !!e && !!e[W2];
}
function P0(e) {
  var t;
  return e ? S3(e) || Array.isArray(e) || !!e[Nl] || !!((t = e.constructor) != null && t[Nl]) || li(e) || ci(e) : !1;
}
var A5 = Object.prototype.constructor.toString();
function S3(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = m1(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === A5;
}
function Tr(e, t) {
  si(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function si(e) {
  const t = e[W2];
  return t ? t.type_ : Array.isArray(e) ? 1 : li(e) ? 2 : ci(e) ? 3 : 0;
}
function sa(e, t) {
  return si(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function M3(e, t, n) {
  const r = si(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function T5(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function li(e) {
  return e instanceof Map;
}
function ci(e) {
  return e instanceof Set;
}
function wt(e) {
  return e.copy_ || e.base_;
}
function la(e, t) {
  if (li(e))
    return new Map(e);
  if (ci(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = S3(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[W2];
    let i = Reflect.ownKeys(r);
    for (let o = 0; o < i.length; o++) {
      const a = i[o], s = r[a];
      s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (r[a] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: s.enumerable,
        value: e[a]
      });
    }
    return Object.create(m1(e), r);
  } else {
    const r = m1(e);
    if (r !== null && n)
      return { ...e };
    const i = Object.create(r);
    return Object.assign(i, e);
  }
}
function is(e, t = !1) {
  return ui(e) || kt(e) || !P0(e) || (si(e) > 1 && (e.set = e.add = e.clear = e.delete = O5), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => is(r, !0))), e;
}
function O5() {
  V2(2);
}
function ui(e) {
  return Object.isFrozen(e);
}
var R5 = {};
function Ht(e) {
  const t = R5[e];
  return t || V2(0, e), t;
}
var tn;
function A3() {
  return tn;
}
function F5(e, t) {
  return {
    drafts_: [],
    parent_: e,
    immer_: t,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Ll(e, t) {
  t && (Ht("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function ca(e) {
  ua(e), e.drafts_.forEach(P5), e.drafts_ = null;
}
function ua(e) {
  e === tn && (tn = e.parent_);
}
function Vl(e) {
  return tn = F5(tn, e);
}
function P5(e) {
  const t = e[W2];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function jl(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[W2].modified_ && (ca(t), V2(4)), P0(e) && (e = Or(t, e), t.parent_ || Rr(t, e)), t.patches_ && Ht("Patches").generateReplacementPatches_(
    n[W2].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Or(t, n, []), ca(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== E3 ? e : void 0;
}
function Or(e, t, n) {
  if (ui(t))
    return t;
  const r = t[W2];
  if (!r)
    return Tr(
      t,
      (i, o) => Il(e, r, t, i, o, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return Rr(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let o = i, a = !1;
    r.type_ === 3 && (o = new Set(i), i.clear(), a = !0), Tr(
      o,
      (s, l) => Il(e, r, i, s, l, n, a)
    ), Rr(e, i, !1), n && e.patches_ && Ht("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function Il(e, t, n, r, i, o, a) {
  if (process.env.NODE_ENV !== "production" && i === n && V2(5), kt(i)) {
    const s = o && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !sa(t.assigned_, r) ? o.concat(r) : void 0, l = Or(e, i, s);
    if (M3(n, r, l), kt(l))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else a && n.add(i);
  if (P0(i) && !ui(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Or(e, i), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && Rr(e, i);
  }
}
function Rr(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && is(t, n);
}
function k5(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : A3(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: t,
    // The base state.
    base_: e,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = r, o = os;
  n && (i = [r], o = nn);
  const { revoke: a, proxy: s } = Proxy.revocable(i, o);
  return r.draft_ = s, r.revoke_ = a, s;
}
var os = {
  get(e, t) {
    if (t === W2)
      return e;
    const n = wt(e);
    if (!sa(n, t))
      return H5(e, n, t);
    const r = n[t];
    return e.finalized_ || !P0(r) ? r : r === Ki(e.base_, t) ? (Xi(e), e.copy_[t] = da(r, e)) : r;
  },
  has(e, t) {
    return t in wt(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(wt(e));
  },
  set(e, t, n) {
    const r = T3(wt(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const i = Ki(wt(e), t), o = i == null ? void 0 : i[W2];
      if (o && o.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (T5(n, i) && (n !== void 0 || sa(e.base_, t)))
        return !0;
      Xi(e), fa(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Ki(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Xi(e), fa(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = wt(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    V2(11);
  },
  getPrototypeOf(e) {
    return m1(e.base_);
  },
  setPrototypeOf() {
    V2(12);
  }
}, nn = {};
Tr(os, (e, t) => {
  nn[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
nn.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && V2(13), nn.set.call(this, e, t, void 0);
};
nn.set = function(e, t, n) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && V2(14), os.set.call(this, e[0], t, n, e[0]);
};
function Ki(e, t) {
  const n = e[W2];
  return (n ? wt(n) : e)[t];
}
function H5(e, t, n) {
  var i;
  const r = T3(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = r.get) == null ? void 0 : i.call(e.draft_)
  ) : void 0;
}
function T3(e, t) {
  if (!(t in e))
    return;
  let n = m1(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = m1(n);
  }
}
function fa(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && fa(e.parent_));
}
function Xi(e) {
  e.copy_ || (e.copy_ = la(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var N5 = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const o = n;
        n = t;
        const a = this;
        return function(l = o, ...c) {
          return a.produce(l, (u) => n.call(this, u, ...c));
        };
      }
      typeof n != "function" && V2(6), r !== void 0 && typeof r != "function" && V2(7);
      let i;
      if (P0(t)) {
        const o = Vl(this), a = da(t, void 0);
        let s = !0;
        try {
          i = n(a), s = !1;
        } finally {
          s ? ca(o) : ua(o);
        }
        return Ll(o, r), jl(i, o);
      } else if (!t || typeof t != "object") {
        if (i = n(t), i === void 0 && (i = t), i === E3 && (i = void 0), this.autoFreeze_ && is(i, !0), r) {
          const o = [], a = [];
          Ht("Patches").generateReplacementPatches_(t, i, o, a), r(o, a);
        }
        return i;
      } else
        V2(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (a, ...s) => this.produceWithPatches(a, (l) => t(l, ...s));
      let r, i;
      return [this.produce(t, n, (a, s) => {
        r = a, i = s;
      }), r, i];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    P0(e) || V2(8), kt(e) && (e = L5(e));
    const t = Vl(this), n = da(e, void 0);
    return n[W2].isManual_ = !0, ua(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[W2];
    (!n || !n.isManual_) && V2(9);
    const { scope_: r } = n;
    return Ll(r, t), jl(void 0, r);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(e) {
    this.autoFreeze_ = e;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(e) {
    this.useStrictShallowCopy_ = e;
  }
  applyPatches(e, t) {
    let n;
    for (n = t.length - 1; n >= 0; n--) {
      const i = t[n];
      if (i.path.length === 0 && i.op === "replace") {
        e = i.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = Ht("Patches").applyPatches_;
    return kt(e) ? r(e, t) : this.produce(
      e,
      (i) => r(i, t)
    );
  }
};
function da(e, t) {
  const n = li(e) ? Ht("MapSet").proxyMap_(e, t) : ci(e) ? Ht("MapSet").proxySet_(e, t) : k5(e, t);
  return (t ? t.scope_ : A3()).drafts_.push(n), n;
}
function L5(e) {
  return kt(e) || V2(10, e), O3(e);
}
function O3(e) {
  if (!P0(e) || ui(e))
    return e;
  const t = e[W2];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = la(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = la(e, !0);
  return Tr(n, (r, i) => {
    M3(n, r, O3(i));
  }), t && (t.finalized_ = !1), n;
}
var q2 = new N5(), R3 = q2.produce;
q2.produceWithPatches.bind(
  q2
);
q2.setAutoFreeze.bind(q2);
q2.setUseStrictShallowCopy.bind(q2);
q2.applyPatches.bind(q2);
q2.createDraft.bind(q2);
q2.finishDraft.bind(q2);
function F3(e) {
  return ({ dispatch: n, getState: r }) => (i) => (o) => typeof o == "function" ? o(n, r, e) : i(o);
}
var V5 = F3(), j5 = F3, I5 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Ar : Ar.apply(null, arguments);
}, P3 = (e) => e && typeof e.match == "function";
function q1(e, t) {
  function n(...r) {
    if (t) {
      let i = t(...r);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? i2(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: i.payload,
        ..."meta" in i && {
          meta: i.meta
        },
        ..."error" in i && {
          error: i.error
        }
      };
    }
    return {
      type: e,
      payload: r[0]
    };
  }
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => _3(r) && r.type === e, n;
}
function D5(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  P3(e);
}
function Z5(e) {
  const t = e ? `${e}`.split("/") : [], n = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${n}())\` instead of \`dispatch(${n})\`. This is necessary even if the action has no payload.`;
}
function z5(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (n) => (r) => n(r);
  const {
    isActionCreator: t = D5
  } = e;
  return () => (n) => (r) => (t(r) && console.warn(Z5(r.type)), n(r));
}
function k3(e, t) {
  let n = 0;
  return {
    measureTime(r) {
      const i = Date.now();
      try {
        return r();
      } finally {
        const o = Date.now();
        n += o - i;
      }
    },
    warnIfExceeded() {
      n > e && console.warn(`${t} took ${n}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var H3 = class j1 extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, j1.prototype);
  }
  static get [Symbol.species]() {
    return j1;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new j1(...t[0].concat(this)) : new j1(...t.concat(this));
  }
};
function Dl(e) {
  return P0(e) ? R3(e, () => {
  }) : e;
}
function Zl(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t);
    return n.update && (i = n.update(i, t, e), e.set(t, i)), i;
  }
  if (!n.insert) throw new Error(process.env.NODE_ENV === "production" ? i2(10) : "No insert provided for key not already in map");
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function $5(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function B5(e, t, n) {
  const r = N3(e, t, n);
  return {
    detectMutations() {
      return L3(e, t, r, n);
    }
  };
}
function N3(e, t = [], n, r = "", i = /* @__PURE__ */ new Set()) {
  const o = {
    value: n
  };
  if (!e(n) && !i.has(n)) {
    i.add(n), o.children = {};
    for (const a in n) {
      const s = r ? r + "." + a : a;
      t.length && t.indexOf(s) !== -1 || (o.children[a] = N3(e, t, n[a], s));
    }
  }
  return o;
}
function L3(e, t = [], n, r, i = !1, o = "") {
  const a = n ? n.value : void 0, s = a === r;
  if (i && !s && !Number.isNaN(r))
    return {
      wasMutated: !0,
      path: o
    };
  if (e(a) || e(r))
    return {
      wasMutated: !1
    };
  const l = {};
  for (let u in n.children)
    l[u] = !0;
  for (let u in r)
    l[u] = !0;
  const c = t.length > 0;
  for (let u in l) {
    const d = o ? o + "." + u : u;
    if (c && t.some((C) => C instanceof RegExp ? C.test(d) : d === C))
      continue;
    const p = L3(e, t, n.children[u], r[u], s, d);
    if (p.wasMutated)
      return p;
  }
  return {
    wasMutated: !1
  };
}
function U5(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (n) => t(n);
  {
    let t = function(s, l, c, u) {
      return JSON.stringify(s, n(l, u), c);
    }, n = function(s, l) {
      let c = [], u = [];
      return l || (l = function(d, p) {
        return c[0] === p ? "[Circular ~]" : "[Circular ~." + u.slice(0, c.indexOf(p)).join(".") + "]";
      }), function(d, p) {
        if (c.length > 0) {
          var m = c.indexOf(this);
          ~m ? c.splice(m + 1) : c.push(this), ~m ? u.splice(m, 1 / 0, d) : u.push(d), ~c.indexOf(p) && (p = l.call(this, d, p));
        } else c.push(p);
        return s == null ? p : s.call(this, d, p);
      };
    }, {
      isImmutable: r = $5,
      ignoredPaths: i,
      warnAfter: o = 32
    } = e;
    const a = B5.bind(null, r, i);
    return ({
      getState: s
    }) => {
      let l = s(), c = a(l), u;
      return (d) => (p) => {
        const m = k3(o, "ImmutableStateInvariantMiddleware");
        m.measureTime(() => {
          if (l = s(), u = c.detectMutations(), c = a(l), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? i2(19) : `A state mutation was detected between dispatches, in the path '${u.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const C = d(p);
        return m.measureTime(() => {
          if (l = s(), u = c.detectMutations(), c = a(l), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? i2(20) : `A state mutation was detected inside a dispatch, in the path: ${u.path || ""}. Take a look at the reducer(s) handling the action ${t(p)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), m.warnIfExceeded(), C;
      };
    };
  }
}
function V3(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || Rn(e);
}
function pa(e, t = "", n = V3, r, i = [], o) {
  let a;
  if (!n(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || o != null && o.has(e)) return !1;
  const s = r != null ? r(e) : Object.entries(e), l = i.length > 0;
  for (const [c, u] of s) {
    const d = t ? t + "." + c : c;
    if (!(l && i.some((m) => m instanceof RegExp ? m.test(d) : d === m))) {
      if (!n(u))
        return {
          keyPath: d,
          value: u
        };
      if (typeof u == "object" && (a = pa(u, d, n, r, i, o), a))
        return a;
    }
  }
  return o && j3(e) && o.add(e), !1;
}
function j3(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !j3(t))
      return !1;
  return !0;
}
function W5(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (n) => t(n);
  {
    const {
      isSerializable: t = V3,
      getEntries: n,
      ignoredActions: r = [],
      ignoredActionPaths: i = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: o = [],
      warnAfter: a = 32,
      ignoreState: s = !1,
      ignoreActions: l = !1,
      disableCache: c = !1
    } = e, u = !c && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (d) => (p) => (m) => {
      if (!_3(m))
        return p(m);
      const C = p(m), g = k3(a, "SerializableStateInvariantMiddleware");
      return !l && !(r.length && r.indexOf(m.type) !== -1) && g.measureTime(() => {
        const b = pa(m, "", t, n, i, u);
        if (b) {
          const {
            keyPath: x,
            value: w
          } = b;
          console.error(`A non-serializable value was detected in an action, in the path: \`${x}\`. Value:`, w, `
Take a look at the logic that dispatched this action: `, m, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), s || (g.measureTime(() => {
        const b = d.getState(), x = pa(b, "", t, n, o, u);
        if (x) {
          const {
            keyPath: w,
            value: E
          } = x;
          console.error(`A non-serializable value was detected in the state, in the path: \`${w}\`. Value:`, E, `
Take a look at the reducer(s) handling this action type: ${m.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), g.warnIfExceeded()), C;
    };
  }
}
function $n(e) {
  return typeof e == "boolean";
}
var q5 = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: o = !0
  } = t ?? {};
  let a = new H3();
  if (n && ($n(n) ? a.push(V5) : a.push(j5(n.extraArgument))), process.env.NODE_ENV !== "production") {
    if (r) {
      let s = {};
      $n(r) || (s = r), a.unshift(U5(s));
    }
    if (i) {
      let s = {};
      $n(i) || (s = i), a.push(W5(s));
    }
    if (o) {
      let s = {};
      $n(o) || (s = o), a.unshift(z5(s));
    }
  }
  return a;
}, Y5 = "RTK_autoBatch", I3 = (e) => (t) => {
  setTimeout(t, e);
}, G5 = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : I3(10), K5 = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let i = !0, o = !1, a = !1;
  const s = /* @__PURE__ */ new Set(), l = e.type === "tick" ? queueMicrotask : e.type === "raf" ? G5 : e.type === "callback" ? e.queueNotification : I3(e.timeout), c = () => {
    a = !1, o && (o = !1, s.forEach((u) => u()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(u) {
      const d = () => i && u(), p = r.subscribe(d);
      return s.add(u), () => {
        p(), s.delete(u);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(u) {
      var d;
      try {
        return i = !((d = u == null ? void 0 : u.meta) != null && d[Y5]), o = !i, o && (a || (a = !0, l(c))), r.dispatch(u);
      } finally {
        i = !0;
      }
    }
  });
}, X5 = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let i = new H3(e);
  return r && i.push(K5(typeof r == "object" ? r : void 0)), i;
};
function J5(e) {
  const t = q5(), {
    reducer: n = void 0,
    middleware: r,
    devTools: i = !0,
    preloadedState: o = void 0,
    enhancers: a = void 0
  } = e || {};
  let s;
  if (typeof n == "function")
    s = n;
  else if (Rn(n))
    s = E5(n);
  else
    throw new Error(process.env.NODE_ENV === "production" ? i2(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && r && typeof r != "function")
    throw new Error(process.env.NODE_ENV === "production" ? i2(2) : "`middleware` field must be a callback");
  let l;
  if (typeof r == "function") {
    if (l = r(t), process.env.NODE_ENV !== "production" && !Array.isArray(l))
      throw new Error(process.env.NODE_ENV === "production" ? i2(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    l = t();
  if (process.env.NODE_ENV !== "production" && l.some((C) => typeof C != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? i2(4) : "each middleware provided to configureStore must be a function");
  let c = Ar;
  i && (c = I5({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof i == "object" && i
  }));
  const u = S5(...l), d = X5(u);
  if (process.env.NODE_ENV !== "production" && a && typeof a != "function")
    throw new Error(process.env.NODE_ENV === "production" ? i2(5) : "`enhancers` field must be a callback");
  let p = typeof a == "function" ? a(d) : d();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(p))
    throw new Error(process.env.NODE_ENV === "production" ? i2(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && p.some((C) => typeof C != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? i2(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && l.length && !p.includes(u) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const m = c(...p);
  return w3(s, o, m);
}
function D3(e) {
  const t = {}, n = [];
  let r;
  const i = {
    addCase(o, a) {
      if (process.env.NODE_ENV !== "production") {
        if (n.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? i2(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (r)
          throw new Error(process.env.NODE_ENV === "production" ? i2(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const s = typeof o == "string" ? o : o.type;
      if (!s)
        throw new Error(process.env.NODE_ENV === "production" ? i2(28) : "`builder.addCase` cannot be called with an empty action type");
      if (s in t)
        throw new Error(process.env.NODE_ENV === "production" ? i2(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${s}'`);
      return t[s] = a, i;
    },
    addMatcher(o, a) {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error(process.env.NODE_ENV === "production" ? i2(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return n.push({
        matcher: o,
        reducer: a
      }), i;
    },
    addDefaultCase(o) {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error(process.env.NODE_ENV === "production" ? i2(31) : "`builder.addDefaultCase` can only be called once");
      return r = o, i;
    }
  };
  return e(i), [t, n, r];
}
function Q5(e) {
  return typeof e == "function";
}
function e7(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? i2(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [n, r, i] = D3(t), o;
  if (Q5(e))
    o = () => Dl(e());
  else {
    const s = Dl(e);
    o = () => s;
  }
  function a(s = o(), l) {
    let c = [n[l.type], ...r.filter(({
      matcher: u
    }) => u(l)).map(({
      reducer: u
    }) => u)];
    return c.filter((u) => !!u).length === 0 && (c = [i]), c.reduce((u, d) => {
      if (d)
        if (kt(u)) {
          const m = d(u, l);
          return m === void 0 ? u : m;
        } else {
          if (P0(u))
            return R3(u, (p) => d(p, l));
          {
            const p = d(u, l);
            if (p === void 0) {
              if (u === null)
                return u;
              throw new Error(process.env.NODE_ENV === "production" ? i2(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return p;
          }
        }
      return u;
    }, s);
  }
  return a.getInitialState = o, a;
}
var t7 = (e, t) => P3(e) ? e.match(t) : e(t);
function n7(...e) {
  return (t) => e.some((n) => t7(n, t));
}
var r7 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", i7 = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += r7[Math.random() * 64 | 0];
  return t;
}, o7 = ["name", "message", "stack", "code"], Ji = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    qt(this, "_type");
    this.payload = e, this.meta = t;
  }
}, zl = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    qt(this, "_type");
    this.payload = e, this.meta = t;
  }
}, a7 = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n of o7)
      typeof e[n] == "string" && (t[n] = e[n]);
    return t;
  }
  return {
    message: String(e)
  };
}, I0 = /* @__PURE__ */ (() => {
  function e(t, n, r) {
    const i = q1(t + "/fulfilled", (l, c, u, d) => ({
      payload: l,
      meta: {
        ...d || {},
        arg: u,
        requestId: c,
        requestStatus: "fulfilled"
      }
    })), o = q1(t + "/pending", (l, c, u) => ({
      payload: void 0,
      meta: {
        ...u || {},
        arg: c,
        requestId: l,
        requestStatus: "pending"
      }
    })), a = q1(t + "/rejected", (l, c, u, d, p) => ({
      payload: d,
      error: (r && r.serializeError || a7)(l || "Rejected"),
      meta: {
        ...p || {},
        arg: u,
        requestId: c,
        rejectedWithValue: !!d,
        requestStatus: "rejected",
        aborted: (l == null ? void 0 : l.name) === "AbortError",
        condition: (l == null ? void 0 : l.name) === "ConditionError"
      }
    }));
    function s(l) {
      return (c, u, d) => {
        const p = r != null && r.idGenerator ? r.idGenerator(l) : i7(), m = new AbortController();
        let C, g;
        function b(w) {
          g = w, m.abort();
        }
        const x = async function() {
          var S, _;
          let w;
          try {
            let P = (S = r == null ? void 0 : r.condition) == null ? void 0 : S.call(r, l, {
              getState: u,
              extra: d
            });
            if (l7(P) && (P = await P), P === !1 || m.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const F = new Promise(($, le) => {
              C = () => {
                le({
                  name: "AbortError",
                  message: g || "Aborted"
                });
              }, m.signal.addEventListener("abort", C);
            });
            c(o(p, l, (_ = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : _.call(r, {
              requestId: p,
              arg: l
            }, {
              getState: u,
              extra: d
            }))), w = await Promise.race([F, Promise.resolve(n(l, {
              dispatch: c,
              getState: u,
              extra: d,
              requestId: p,
              signal: m.signal,
              abort: b,
              rejectWithValue: ($, le) => new Ji($, le),
              fulfillWithValue: ($, le) => new zl($, le)
            })).then(($) => {
              if ($ instanceof Ji)
                throw $;
              return $ instanceof zl ? i($.payload, p, l, $.meta) : i($, p, l);
            })]);
          } catch (P) {
            w = P instanceof Ji ? a(null, p, l, P.payload, P.meta) : a(P, p, l);
          } finally {
            C && m.signal.removeEventListener("abort", C);
          }
          return r && !r.dispatchConditionRejection && a.match(w) && w.meta.condition || c(w), w;
        }();
        return Object.assign(x, {
          abort: b,
          requestId: p,
          arg: l,
          unwrap() {
            return x.then(s7);
          }
        });
      };
    }
    return Object.assign(s, {
      pending: o,
      rejected: a,
      fulfilled: i,
      settled: n7(a, i),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function s7(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function l7(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var c7 = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function u7(e, t) {
  return `${e}/${t}`;
}
function f7({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[c7];
  return function(i) {
    const {
      name: o,
      reducerPath: a = o
    } = i;
    if (!o)
      throw new Error(process.env.NODE_ENV === "production" ? i2(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && i.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const s = (typeof i.reducers == "function" ? i.reducers(p7()) : i.reducers) || {}, l = Object.keys(s), c = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(E, S) {
        const _ = typeof E == "string" ? E : E.type;
        if (!_)
          throw new Error(process.env.NODE_ENV === "production" ? i2(12) : "`context.addCase` cannot be called with an empty action type");
        if (_ in c.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? i2(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + _);
        return c.sliceCaseReducersByType[_] = S, u;
      },
      addMatcher(E, S) {
        return c.sliceMatchers.push({
          matcher: E,
          reducer: S
        }), u;
      },
      exposeAction(E, S) {
        return c.actionCreators[E] = S, u;
      },
      exposeCaseReducer(E, S) {
        return c.sliceCaseReducersByName[E] = S, u;
      }
    };
    l.forEach((E) => {
      const S = s[E], _ = {
        reducerName: E,
        type: u7(o, E),
        createNotation: typeof i.reducers == "function"
      };
      m7(S) ? g7(_, S, u, t) : h7(_, S, u);
    });
    function d() {
      if (process.env.NODE_ENV !== "production" && typeof i.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? i2(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [E = {}, S = [], _ = void 0] = typeof i.extraReducers == "function" ? D3(i.extraReducers) : [i.extraReducers], P = {
        ...E,
        ...c.sliceCaseReducersByType
      };
      return e7(i.initialState, (F) => {
        for (let $ in P)
          F.addCase($, P[$]);
        for (let $ of c.sliceMatchers)
          F.addMatcher($.matcher, $.reducer);
        for (let $ of S)
          F.addMatcher($.matcher, $.reducer);
        _ && F.addDefaultCase(_);
      });
    }
    const p = (E) => E, m = /* @__PURE__ */ new Map();
    let C;
    function g(E, S) {
      return C || (C = d()), C(E, S);
    }
    function b() {
      return C || (C = d()), C.getInitialState();
    }
    function x(E, S = !1) {
      function _(F) {
        let $ = F[E];
        if (typeof $ > "u") {
          if (S)
            $ = b();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? i2(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return $;
      }
      function P(F = p) {
        const $ = Zl(m, S, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Zl($, F, {
          insert: () => {
            const le = {};
            for (const [pe, fe] of Object.entries(i.selectors ?? {}))
              le[pe] = d7(fe, F, b, S);
            return le;
          }
        });
      }
      return {
        reducerPath: E,
        getSelectors: P,
        get selectors() {
          return P(_);
        },
        selectSlice: _
      };
    }
    const w = {
      name: o,
      reducer: g,
      actions: c.actionCreators,
      caseReducers: c.sliceCaseReducersByName,
      getInitialState: b,
      ...x(a),
      injectInto(E, {
        reducerPath: S,
        ..._
      } = {}) {
        const P = S ?? a;
        return E.inject({
          reducerPath: P,
          reducer: g
        }, _), {
          ...w,
          ...x(P, !0)
        };
      }
    };
    return w;
  };
}
function d7(e, t, n, r) {
  function i(o, ...a) {
    let s = t(o);
    if (typeof s > "u") {
      if (r)
        s = n();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? i2(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(s, ...a);
  }
  return i.unwrapped = e, i;
}
var as = /* @__PURE__ */ f7();
function p7() {
  function e(t, n) {
    return {
      _reducerDefinitionType: "asyncThunk",
      payloadCreator: t,
      ...n
    };
  }
  return e.withTypes = () => e, {
    reducer(t) {
      return Object.assign({
        // hack so the wrapping function has the same name as the original
        // we need to create a wrapper so the `reducerDefinitionType` is not assigned to the original
        [t.name](...n) {
          return t(...n);
        }
      }[t.name], {
        _reducerDefinitionType: "reducer"
        /* reducer */
      });
    },
    preparedReducer(t, n) {
      return {
        _reducerDefinitionType: "reducerWithPrepare",
        prepare: t,
        reducer: n
      };
    },
    asyncThunk: e
  };
}
function h7({
  type: e,
  reducerName: t,
  createNotation: n
}, r, i) {
  let o, a;
  if ("reducer" in r) {
    if (n && !C7(r))
      throw new Error(process.env.NODE_ENV === "production" ? i2(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    o = r.reducer, a = r.prepare;
  } else
    o = r;
  i.addCase(e, o).exposeCaseReducer(t, o).exposeAction(t, a ? q1(e, a) : q1(e));
}
function m7(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function C7(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function g7({
  type: e,
  reducerName: t
}, n, r, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? i2(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: o,
    fulfilled: a,
    pending: s,
    rejected: l,
    settled: c,
    options: u
  } = n, d = i(e, o, u);
  r.exposeAction(t, d), a && r.addCase(d.fulfilled, a), s && r.addCase(d.pending, s), l && r.addCase(d.rejected, l), c && r.addMatcher(d.settled, c), r.exposeCaseReducer(t, {
    fulfilled: a || Bn,
    pending: s || Bn,
    rejected: l || Bn,
    settled: c || Bn
  });
}
function Bn() {
}
function i2(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Z3 = {}, rn = {};
function z3(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: v7 } = Object.prototype, { getPrototypeOf: ss } = Object, fi = /* @__PURE__ */ ((e) => (t) => {
  const n = v7.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), u0 = (e) => (e = e.toLowerCase(), (t) => fi(t) === e), di = (e) => (t) => typeof t === e, { isArray: _1 } = Array, on = di("undefined");
function y7(e) {
  return e !== null && !on(e) && e.constructor !== null && !on(e.constructor) && X2(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const $3 = u0("ArrayBuffer");
function b7(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && $3(e.buffer), t;
}
const x7 = di("string"), X2 = di("function"), B3 = di("number"), pi = (e) => e !== null && typeof e == "object", w7 = (e) => e === !0 || e === !1, lr = (e) => {
  if (fi(e) !== "object")
    return !1;
  const t = ss(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, _7 = u0("Date"), E7 = u0("File"), S7 = u0("Blob"), M7 = u0("FileList"), A7 = (e) => pi(e) && X2(e.pipe), T7 = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || X2(e.append) && ((t = fi(e)) === "formdata" || // detect form-data instance
  t === "object" && X2(e.toString) && e.toString() === "[object FormData]"));
}, O7 = u0("URLSearchParams"), [R7, F7, P7, k7] = ["ReadableStream", "Request", "Response", "Headers"].map(u0), H7 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Fn(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, i;
  if (typeof e != "object" && (e = [e]), _1(e))
    for (r = 0, i = e.length; r < i; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let s;
    for (r = 0; r < a; r++)
      s = o[r], t.call(null, e[s], s, e);
  }
}
function U3(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], t === i.toLowerCase())
      return i;
  return null;
}
const W3 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : a2, q3 = (e) => !on(e) && e !== W3;
function ha() {
  const { caseless: e } = q3(this) && this || {}, t = {}, n = (r, i) => {
    const o = e && U3(t, i) || i;
    lr(t[o]) && lr(r) ? t[o] = ha(t[o], r) : lr(r) ? t[o] = ha({}, r) : _1(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && Fn(arguments[r], n);
  return t;
}
const N7 = (e, t, n, { allOwnKeys: r } = {}) => (Fn(t, (i, o) => {
  n && X2(i) ? e[o] = z3(i, n) : e[o] = i;
}, { allOwnKeys: r }), e), L7 = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), V7 = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, j7 = (e, t, n, r) => {
  let i, o, a;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
      a = i[o], (!r || r(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = n !== !1 && ss(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, I7 = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, D7 = (e) => {
  if (!e) return null;
  if (_1(e)) return e;
  let t = e.length;
  if (!B3(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, Z7 = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && ss(Uint8Array)), z7 = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const o = i.value;
    t.call(e, o[0], o[1]);
  }
}, $7 = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, B7 = u0("HTMLFormElement"), U7 = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, i) {
    return r.toUpperCase() + i;
  }
), $l = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), W7 = u0("RegExp"), Y3 = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Fn(n, (i, o) => {
    let a;
    (a = t(i, o, e)) !== !1 && (r[o] = a || i);
  }), Object.defineProperties(e, r);
}, q7 = (e) => {
  Y3(e, (t, n) => {
    if (X2(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (X2(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Y7 = (e, t) => {
  const n = {}, r = (i) => {
    i.forEach((o) => {
      n[o] = !0;
    });
  };
  return _1(e) ? r(e) : r(String(e).split(t)), n;
}, G7 = () => {
}, K7 = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, Qi = "abcdefghijklmnopqrstuvwxyz", Bl = "0123456789", G3 = {
  DIGIT: Bl,
  ALPHA: Qi,
  ALPHA_DIGIT: Qi + Qi.toUpperCase() + Bl
}, X7 = (e = 16, t = G3.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function J7(e) {
  return !!(e && X2(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Q7 = (e) => {
  const t = new Array(10), n = (r, i) => {
    if (pi(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[i] = r;
        const o = _1(r) ? [] : {};
        return Fn(r, (a, s) => {
          const l = n(a, i + 1);
          !on(l) && (o[s] = l);
        }), t[i] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, ep = u0("AsyncFunction"), tp = (e) => e && (pi(e) || X2(e)) && X2(e.then) && X2(e.catch);
var Z = {
  isArray: _1,
  isArrayBuffer: $3,
  isBuffer: y7,
  isFormData: T7,
  isArrayBufferView: b7,
  isString: x7,
  isNumber: B3,
  isBoolean: w7,
  isObject: pi,
  isPlainObject: lr,
  isReadableStream: R7,
  isRequest: F7,
  isResponse: P7,
  isHeaders: k7,
  isUndefined: on,
  isDate: _7,
  isFile: E7,
  isBlob: S7,
  isRegExp: W7,
  isFunction: X2,
  isStream: A7,
  isURLSearchParams: O7,
  isTypedArray: Z7,
  isFileList: M7,
  forEach: Fn,
  merge: ha,
  extend: N7,
  trim: H7,
  stripBOM: L7,
  inherits: V7,
  toFlatObject: j7,
  kindOf: fi,
  kindOfTest: u0,
  endsWith: I7,
  toArray: D7,
  forEachEntry: z7,
  matchAll: $7,
  isHTMLForm: B7,
  hasOwnProperty: $l,
  hasOwnProp: $l,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Y3,
  freezeMethods: q7,
  toObjectSet: Y7,
  toCamelCase: U7,
  noop: G7,
  toFiniteNumber: K7,
  findKey: U3,
  global: W3,
  isContextDefined: q3,
  ALPHABET: G3,
  generateString: X7,
  isSpecCompliantForm: J7,
  toJSONObject: Q7,
  isAsyncFn: ep,
  isThenable: tp
};
function je(e, t, n, r, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i);
}
Z.inherits(je, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: Z.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const K3 = je.prototype, X3 = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  X3[e] = { value: e };
});
Object.defineProperties(je, X3);
Object.defineProperty(K3, "isAxiosError", { value: !0 });
je.from = (e, t, n, r, i, o) => {
  const a = Object.create(K3);
  return Z.toFlatObject(e, a, function(l) {
    return l !== Error.prototype;
  }, (s) => s !== "isAxiosError"), je.call(a, e.message, t, n, r, i), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
var np = null;
function ma(e) {
  return Z.isPlainObject(e) || Z.isArray(e);
}
function J3(e) {
  return Z.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Ul(e, t, n) {
  return e ? e.concat(t).map(function(i, o) {
    return i = J3(i), !n && o ? "[" + i + "]" : i;
  }).join(n ? "." : "") : t;
}
function rp(e) {
  return Z.isArray(e) && !e.some(ma);
}
const ip = Z.toFlatObject(Z, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function hi(e, t, n) {
  if (!Z.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = Z.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, b) {
    return !Z.isUndefined(b[g]);
  });
  const r = n.metaTokens, i = n.visitor || u, o = n.dots, a = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && Z.isSpecCompliantForm(t);
  if (!Z.isFunction(i))
    throw new TypeError("visitor must be a function");
  function c(C) {
    if (C === null) return "";
    if (Z.isDate(C))
      return C.toISOString();
    if (!l && Z.isBlob(C))
      throw new je("Blob is not supported. Use a Buffer instead.");
    return Z.isArrayBuffer(C) || Z.isTypedArray(C) ? l && typeof Blob == "function" ? new Blob([C]) : Buffer.from(C) : C;
  }
  function u(C, g, b) {
    let x = C;
    if (C && !b && typeof C == "object") {
      if (Z.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), C = JSON.stringify(C);
      else if (Z.isArray(C) && rp(C) || (Z.isFileList(C) || Z.endsWith(g, "[]")) && (x = Z.toArray(C)))
        return g = J3(g), x.forEach(function(E, S) {
          !(Z.isUndefined(E) || E === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Ul([g], S, o) : a === null ? g : g + "[]",
            c(E)
          );
        }), !1;
    }
    return ma(C) ? !0 : (t.append(Ul(b, g, o), c(C)), !1);
  }
  const d = [], p = Object.assign(ip, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: ma
  });
  function m(C, g) {
    if (!Z.isUndefined(C)) {
      if (d.indexOf(C) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(C), Z.forEach(C, function(x, w) {
        (!(Z.isUndefined(x) || x === null) && i.call(
          t,
          x,
          Z.isString(w) ? w.trim() : w,
          g,
          p
        )) === !0 && m(x, g ? g.concat(w) : [w]);
      }), d.pop();
    }
  }
  if (!Z.isObject(e))
    throw new TypeError("data must be an object");
  return m(e), t;
}
function Wl(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(r) {
    return t[r];
  });
}
function ls(e, t) {
  this._pairs = [], e && hi(e, this, t);
}
const Q3 = ls.prototype;
Q3.append = function(t, n) {
  this._pairs.push([t, n]);
};
Q3.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Wl);
  } : Wl;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function op(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function eu(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || op, i = n && n.serialize;
  let o;
  if (i ? o = i(t, n) : o = Z.isURLSearchParams(t) ? t.toString() : new ls(t, n).toString(r), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class ap {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, n, r) {
    return this.handlers.push({
      fulfilled: t,
      rejected: n,
      synchronous: r ? r.synchronous : !1,
      runWhen: r ? r.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    Z.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
var ql = ap, tu = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, sp = typeof URLSearchParams < "u" ? URLSearchParams : ls, lp = typeof FormData < "u" ? FormData : null, cp = typeof Blob < "u" ? Blob : null, up = {
  isBrowser: !0,
  classes: {
    URLSearchParams: sp,
    FormData: lp,
    Blob: cp
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
const cs = typeof window < "u" && typeof document < "u", fp = ((e) => cs && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), dp = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", pp = cs && window.location.href || "http://localhost";
var hp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  hasBrowserEnv: cs,
  hasStandardBrowserWebWorkerEnv: dp,
  hasStandardBrowserEnv: fp,
  origin: pp
}), n0 = {
  ...hp,
  ...up
};
function mp(e, t) {
  return hi(e, new n0.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, i, o) {
      return n0.isNode && Z.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Cp(e) {
  return Z.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function gp(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function nu(e) {
  function t(n, r, i, o) {
    let a = n[o++];
    if (a === "__proto__") return !0;
    const s = Number.isFinite(+a), l = o >= n.length;
    return a = !a && Z.isArray(i) ? i.length : a, l ? (Z.hasOwnProp(i, a) ? i[a] = [i[a], r] : i[a] = r, !s) : ((!i[a] || !Z.isObject(i[a])) && (i[a] = []), t(n, r, i[a], o) && Z.isArray(i[a]) && (i[a] = gp(i[a])), !s);
  }
  if (Z.isFormData(e) && Z.isFunction(e.entries)) {
    const n = {};
    return Z.forEachEntry(e, (r, i) => {
      t(Cp(r), i, n, 0);
    }), n;
  }
  return null;
}
function vp(e, t, n) {
  if (Z.isString(e))
    try {
      return (t || JSON.parse)(e), Z.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(e);
}
const us = {
  transitional: tu,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, o = Z.isObject(t);
    if (o && Z.isHTMLForm(t) && (t = new FormData(t)), Z.isFormData(t))
      return i ? JSON.stringify(nu(t)) : t;
    if (Z.isArrayBuffer(t) || Z.isBuffer(t) || Z.isStream(t) || Z.isFile(t) || Z.isBlob(t) || Z.isReadableStream(t))
      return t;
    if (Z.isArrayBufferView(t))
      return t.buffer;
    if (Z.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return mp(t, this.formSerializer).toString();
      if ((s = Z.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return hi(
          s ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return o || i ? (n.setContentType("application/json", !1), vp(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || us.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
    if (Z.isResponse(t) || Z.isReadableStream(t))
      return t;
    if (t && Z.isString(t) && (r && !this.responseType || i)) {
      const a = !(n && n.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? je.from(s, je.ERR_BAD_RESPONSE, this, null, this.response) : s;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: n0.classes.FormData,
    Blob: n0.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
Z.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  us.headers[e] = {};
});
var fs = us;
const yp = Z.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
var bp = (e) => {
  const t = {};
  let n, r, i;
  return e && e.split(`
`).forEach(function(a) {
    i = a.indexOf(":"), n = a.substring(0, i).trim().toLowerCase(), r = a.substring(i + 1).trim(), !(!n || t[n] && yp[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
};
const Yl = Symbol("internals");
function k1(e) {
  return e && String(e).trim().toLowerCase();
}
function cr(e) {
  return e === !1 || e == null ? e : Z.isArray(e) ? e.map(cr) : String(e);
}
function xp(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const wp = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function eo(e, t, n, r, i) {
  if (Z.isFunction(r))
    return r.call(this, t, n);
  if (i && (t = n), !!Z.isString(t)) {
    if (Z.isString(r))
      return t.indexOf(r) !== -1;
    if (Z.isRegExp(r))
      return r.test(t);
  }
}
function _p(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Ep(e, t) {
  const n = Z.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(i, o, a) {
        return this[r].call(this, t, i, o, a);
      },
      configurable: !0
    });
  });
}
class mi {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(s, l, c) {
      const u = k1(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = Z.findKey(i, u);
      (!d || i[d] === void 0 || c === !0 || c === void 0 && i[d] !== !1) && (i[d || l] = cr(s));
    }
    const a = (s, l) => Z.forEach(s, (c, u) => o(c, u, l));
    if (Z.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (Z.isString(t) && (t = t.trim()) && !wp(t))
      a(bp(t), n);
    else if (Z.isHeaders(t))
      for (const [s, l] of t.entries())
        o(l, s, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = k1(t), t) {
      const r = Z.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return xp(i);
        if (Z.isFunction(n))
          return n.call(this, i, r);
        if (Z.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = k1(t), t) {
      const r = Z.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || eo(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(a) {
      if (a = k1(a), a) {
        const s = Z.findKey(r, a);
        s && (!n || eo(r, r[s], s, n)) && (delete r[s], i = !0);
      }
    }
    return Z.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || eo(this, this[o], o, t, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(t) {
    const n = this, r = {};
    return Z.forEach(this, (i, o) => {
      const a = Z.findKey(r, o);
      if (a) {
        n[a] = cr(i), delete n[o];
        return;
      }
      const s = t ? _p(o) : String(o).trim();
      s !== o && delete n[o], n[s] = cr(i), r[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return Z.forEach(this, (r, i) => {
      r != null && r !== !1 && (n[i] = t && Z.isArray(r) ? r.join(", ") : r);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((i) => r.set(i)), r;
  }
  static accessor(t) {
    const r = (this[Yl] = this[Yl] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(a) {
      const s = k1(a);
      r[s] || (Ep(i, a), r[s] = !0);
    }
    return Z.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
mi.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
Z.reduceDescriptors(mi.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
Z.freezeMethods(mi);
var r0 = mi;
function to(e, t) {
  const n = this || fs, r = t || n, i = r0.from(r.headers);
  let o = r.data;
  return Z.forEach(e, function(s) {
    o = s.call(n, o, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), o;
}
function ru(e) {
  return !!(e && e.__CANCEL__);
}
function E1(e, t, n) {
  je.call(this, e ?? "canceled", je.ERR_CANCELED, t, n), this.name = "CanceledError";
}
Z.inherits(E1, je, {
  __CANCEL__: !0
});
function iu(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new je(
    "Request failed with status code " + n.status,
    [je.ERR_BAD_REQUEST, je.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Sp(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Mp(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let i = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), u = r[o];
    a || (a = c), n[i] = l, r[i] = c;
    let d = o, p = 0;
    for (; d !== i; )
      p += n[d++], d = d % e;
    if (i = (i + 1) % e, i === o && (o = (o + 1) % e), c - a < t)
      return;
    const m = u && c - u;
    return m ? Math.round(p * 1e3 / m) : void 0;
  };
}
function Ap(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let i = null;
  return function() {
    const a = this === !0, s = Date.now();
    if (a || s - n > r)
      return i && (clearTimeout(i), i = null), n = s, e.apply(null, arguments);
    i || (i = setTimeout(() => (i = null, n = Date.now(), e.apply(null, arguments)), r - (s - n)));
  };
}
var Fr = (e, t, n = 3) => {
  let r = 0;
  const i = Mp(50, 250);
  return Ap((o) => {
    const a = o.loaded, s = o.lengthComputable ? o.total : void 0, l = a - r, c = i(l), u = a <= s;
    r = a;
    const d = {
      loaded: a,
      total: s,
      progress: s ? a / s : void 0,
      bytes: l,
      rate: c || void 0,
      estimated: c && s && u ? (s - a) / c : void 0,
      event: o,
      lengthComputable: s != null
    };
    d[t ? "download" : "upload"] = !0, e(d);
  }, n);
}, Tp = n0.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function i(o) {
      let a = o;
      return t && (n.setAttribute("href", a), a = n.href), n.setAttribute("href", a), {
        href: n.href,
        protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
        host: n.host,
        search: n.search ? n.search.replace(/^\?/, "") : "",
        hash: n.hash ? n.hash.replace(/^#/, "") : "",
        hostname: n.hostname,
        port: n.port,
        pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname
      };
    }
    return r = i(window.location.href), function(a) {
      const s = Z.isString(a) ? i(a) : a;
      return s.protocol === r.protocol && s.host === r.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
), Op = n0.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, i, o) {
      const a = [e + "=" + encodeURIComponent(t)];
      Z.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), Z.isString(r) && a.push("path=" + r), Z.isString(i) && a.push("domain=" + i), o === !0 && a.push("secure"), document.cookie = a.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Rp(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Fp(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ou(e, t) {
  return e && !Rp(t) ? Fp(e, t) : t;
}
const Gl = (e) => e instanceof r0 ? { ...e } : e;
function Nt(e, t) {
  t = t || {};
  const n = {};
  function r(c, u, d) {
    return Z.isPlainObject(c) && Z.isPlainObject(u) ? Z.merge.call({ caseless: d }, c, u) : Z.isPlainObject(u) ? Z.merge({}, u) : Z.isArray(u) ? u.slice() : u;
  }
  function i(c, u, d) {
    if (Z.isUndefined(u)) {
      if (!Z.isUndefined(c))
        return r(void 0, c, d);
    } else return r(c, u, d);
  }
  function o(c, u) {
    if (!Z.isUndefined(u))
      return r(void 0, u);
  }
  function a(c, u) {
    if (Z.isUndefined(u)) {
      if (!Z.isUndefined(c))
        return r(void 0, c);
    } else return r(void 0, u);
  }
  function s(c, u, d) {
    if (d in t)
      return r(c, u);
    if (d in e)
      return r(void 0, c);
  }
  const l = {
    url: o,
    method: o,
    data: o,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: s,
    headers: (c, u) => i(Gl(c), Gl(u), !0)
  };
  return Z.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = l[u] || i, p = d(e[u], t[u], u);
    Z.isUndefined(p) && d !== s || (n[u] = p);
  }), n;
}
var au = (e) => {
  const t = Nt({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: o, headers: a, auth: s } = t;
  t.headers = a = r0.from(a), t.url = eu(ou(t.baseURL, t.url), e.params, e.paramsSerializer), s && a.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  );
  let l;
  if (Z.isFormData(n)) {
    if (n0.hasStandardBrowserEnv || n0.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if ((l = a.getContentType()) !== !1) {
      const [c, ...u] = l ? l.split(";").map((d) => d.trim()).filter(Boolean) : [];
      a.setContentType([c || "multipart/form-data", ...u].join("; "));
    }
  }
  if (n0.hasStandardBrowserEnv && (r && Z.isFunction(r) && (r = r(t)), r || r !== !1 && Tp(t.url))) {
    const c = i && o && Op.read(o);
    c && a.set(i, c);
  }
  return t;
};
const Pp = typeof XMLHttpRequest < "u";
var kp = Pp && function(e) {
  return new Promise(function(n, r) {
    const i = au(e);
    let o = i.data;
    const a = r0.from(i.headers).normalize();
    let { responseType: s } = i, l;
    function c() {
      i.cancelToken && i.cancelToken.unsubscribe(l), i.signal && i.signal.removeEventListener("abort", l);
    }
    let u = new XMLHttpRequest();
    u.open(i.method.toUpperCase(), i.url, !0), u.timeout = i.timeout;
    function d() {
      if (!u)
        return;
      const m = r0.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), g = {
        data: !s || s === "text" || s === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: m,
        config: e,
        request: u
      };
      iu(function(x) {
        n(x), c();
      }, function(x) {
        r(x), c();
      }, g), u = null;
    }
    "onloadend" in u ? u.onloadend = d : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(d);
    }, u.onabort = function() {
      u && (r(new je("Request aborted", je.ECONNABORTED, i, u)), u = null);
    }, u.onerror = function() {
      r(new je("Network Error", je.ERR_NETWORK, i, u)), u = null;
    }, u.ontimeout = function() {
      let C = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const g = i.transitional || tu;
      i.timeoutErrorMessage && (C = i.timeoutErrorMessage), r(new je(
        C,
        g.clarifyTimeoutError ? je.ETIMEDOUT : je.ECONNABORTED,
        i,
        u
      )), u = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in u && Z.forEach(a.toJSON(), function(C, g) {
      u.setRequestHeader(g, C);
    }), Z.isUndefined(i.withCredentials) || (u.withCredentials = !!i.withCredentials), s && s !== "json" && (u.responseType = i.responseType), typeof i.onDownloadProgress == "function" && u.addEventListener("progress", Fr(i.onDownloadProgress, !0)), typeof i.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Fr(i.onUploadProgress)), (i.cancelToken || i.signal) && (l = (m) => {
      u && (r(!m || m.type ? new E1(null, e, u) : m), u.abort(), u = null);
    }, i.cancelToken && i.cancelToken.subscribe(l), i.signal && (i.signal.aborted ? l() : i.signal.addEventListener("abort", l)));
    const p = Sp(i.url);
    if (p && n0.protocols.indexOf(p) === -1) {
      r(new je("Unsupported protocol " + p + ":", je.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
};
const Hp = (e, t) => {
  let n = new AbortController(), r;
  const i = function(l) {
    if (!r) {
      r = !0, a();
      const c = l instanceof Error ? l : this.reason;
      n.abort(c instanceof je ? c : new E1(c instanceof Error ? c.message : c));
    }
  };
  let o = t && setTimeout(() => {
    i(new je(`timeout ${t} of ms exceeded`, je.ETIMEDOUT));
  }, t);
  const a = () => {
    e && (o && clearTimeout(o), o = null, e.forEach((l) => {
      l && (l.removeEventListener ? l.removeEventListener("abort", i) : l.unsubscribe(i));
    }), e = null);
  };
  e.forEach((l) => l && l.addEventListener && l.addEventListener("abort", i));
  const { signal: s } = n;
  return s.unsubscribe = a, [s, () => {
    o && clearTimeout(o), o = null;
  }];
};
var Np = Hp;
const Lp = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, i;
  for (; r < n; )
    i = r + t, yield e.slice(r, i), r = i;
}, Vp = async function* (e, t, n) {
  for await (const r of e)
    yield* Lp(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
}, Kl = (e, t, n, r, i) => {
  const o = Vp(e, t, i);
  let a = 0;
  return new ReadableStream({
    type: "bytes",
    async pull(s) {
      const { done: l, value: c } = await o.next();
      if (l) {
        s.close(), r();
        return;
      }
      let u = c.byteLength;
      n && n(a += u), s.enqueue(new Uint8Array(c));
    },
    cancel(s) {
      return r(s), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, Xl = (e, t) => {
  const n = e != null;
  return (r) => setTimeout(() => t({
    lengthComputable: n,
    total: e,
    loaded: r
  }));
}, Ci = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", su = Ci && typeof ReadableStream == "function", Ca = Ci && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), jp = su && (() => {
  let e = !1;
  const t = new Request(n0.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
})(), Jl = 64 * 1024, ga = su && !!(() => {
  try {
    return Z.isReadableStream(new Response("").body);
  } catch {
  }
})(), Pr = {
  stream: ga && ((e) => e.body)
};
Ci && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Pr[t] && (Pr[t] = Z.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new je(`Response type '${t}' is not supported`, je.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const Ip = async (e) => {
  if (e == null)
    return 0;
  if (Z.isBlob(e))
    return e.size;
  if (Z.isSpecCompliantForm(e))
    return (await new Request(e).arrayBuffer()).byteLength;
  if (Z.isArrayBufferView(e))
    return e.byteLength;
  if (Z.isURLSearchParams(e) && (e = e + ""), Z.isString(e))
    return (await Ca(e)).byteLength;
}, Dp = async (e, t) => {
  const n = Z.toFiniteNumber(e.getContentLength());
  return n ?? Ip(t);
};
var Zp = Ci && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: i,
    cancelToken: o,
    timeout: a,
    onDownloadProgress: s,
    onUploadProgress: l,
    responseType: c,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: p
  } = au(e);
  c = c ? (c + "").toLowerCase() : "text";
  let [m, C] = i || o || a ? Np([i, o], a) : [], g, b;
  const x = () => {
    !g && setTimeout(() => {
      m && m.unsubscribe();
    }), g = !0;
  };
  let w;
  try {
    if (l && jp && n !== "get" && n !== "head" && (w = await Dp(u, r)) !== 0) {
      let P = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), F;
      Z.isFormData(r) && (F = P.headers.get("content-type")) && u.setContentType(F), P.body && (r = Kl(P.body, Jl, Xl(
        w,
        Fr(l)
      ), null, Ca));
    }
    Z.isString(d) || (d = d ? "cors" : "omit"), b = new Request(t, {
      ...p,
      signal: m,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      withCredentials: d
    });
    let E = await fetch(b);
    const S = ga && (c === "stream" || c === "response");
    if (ga && (s || S)) {
      const P = {};
      ["status", "statusText", "headers"].forEach(($) => {
        P[$] = E[$];
      });
      const F = Z.toFiniteNumber(E.headers.get("content-length"));
      E = new Response(
        Kl(E.body, Jl, s && Xl(
          F,
          Fr(s, !0)
        ), S && x, Ca),
        P
      );
    }
    c = c || "text";
    let _ = await Pr[Z.findKey(Pr, c) || "text"](E, e);
    return !S && x(), C && C(), await new Promise((P, F) => {
      iu(P, F, {
        data: _,
        headers: r0.from(E.headers),
        status: E.status,
        statusText: E.statusText,
        config: e,
        request: b
      });
    });
  } catch (E) {
    throw x(), E && E.name === "TypeError" && /fetch/i.test(E.message) ? Object.assign(
      new je("Network Error", je.ERR_NETWORK, e, b),
      {
        cause: E.cause || E
      }
    ) : je.from(E, E && E.code, e, b);
  }
});
const va = {
  http: np,
  xhr: kp,
  fetch: Zp
};
Z.forEach(va, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ql = (e) => `- ${e}`, zp = (e) => Z.isFunction(e) || e === null || e === !1;
var lu = {
  getAdapter: (e) => {
    e = Z.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const i = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let a;
      if (r = n, !zp(n) && (r = va[(a = String(n)).toLowerCase()], r === void 0))
        throw new je(`Unknown adapter '${a}'`);
      if (r)
        break;
      i[a || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(i).map(
        ([s, l]) => `adapter ${s} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? o.length > 1 ? `since :
` + o.map(Ql).join(`
`) : " " + Ql(o[0]) : "as no adapter specified";
      throw new je(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: va
};
function no(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new E1(null, e);
}
function ec(e) {
  return no(e), e.headers = r0.from(e.headers), e.data = to.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), lu.getAdapter(e.adapter || fs.adapter)(e).then(function(r) {
    return no(e), r.data = to.call(
      e,
      e.transformResponse,
      r
    ), r.headers = r0.from(r.headers), r;
  }, function(r) {
    return ru(r) || (no(e), r && r.response && (r.response.data = to.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = r0.from(r.response.headers))), Promise.reject(r);
  });
}
const cu = "1.7.2", ds = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ds[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const tc = {};
ds.transitional = function(t, n, r) {
  function i(o, a) {
    return "[Axios v" + cu + "] Transitional option '" + o + "'" + a + (r ? ". " + r : "");
  }
  return (o, a, s) => {
    if (t === !1)
      throw new je(
        i(a, " has been removed" + (n ? " in " + n : "")),
        je.ERR_DEPRECATED
      );
    return n && !tc[a] && (tc[a] = !0, console.warn(
      i(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, a, s) : !0;
  };
};
function $p(e, t, n) {
  if (typeof e != "object")
    throw new je("options must be an object", je.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i], a = t[o];
    if (a) {
      const s = e[o], l = s === void 0 || a(s, o, e);
      if (l !== !0)
        throw new je("option " + o + " must be " + l, je.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new je("Unknown option " + o, je.ERR_BAD_OPTION);
  }
}
var ya = {
  assertOptions: $p,
  validators: ds
};
const U0 = ya.validators;
class kr {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new ql(),
      response: new ql()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let i;
        Error.captureStackTrace ? Error.captureStackTrace(i = {}) : i = new Error();
        const o = i.stack ? i.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? o && !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + o) : r.stack = o;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Nt(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 && ya.assertOptions(r, {
      silentJSONParsing: U0.transitional(U0.boolean),
      forcedJSONParsing: U0.transitional(U0.boolean),
      clarifyTimeoutError: U0.transitional(U0.boolean)
    }, !1), i != null && (Z.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : ya.assertOptions(i, {
      encode: U0.function,
      serialize: U0.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = o && Z.merge(
      o.common,
      o[n.method]
    );
    o && Z.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (C) => {
        delete o[C];
      }
    ), n.headers = r0.concat(a, o);
    const s = [];
    let l = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (l = l && g.synchronous, s.unshift(g.fulfilled, g.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(g) {
      c.push(g.fulfilled, g.rejected);
    });
    let u, d = 0, p;
    if (!l) {
      const C = [ec.bind(this), void 0];
      for (C.unshift.apply(C, s), C.push.apply(C, c), p = C.length, u = Promise.resolve(n); d < p; )
        u = u.then(C[d++], C[d++]);
      return u;
    }
    p = s.length;
    let m = n;
    for (d = 0; d < p; ) {
      const C = s[d++], g = s[d++];
      try {
        m = C(m);
      } catch (b) {
        g.call(this, b);
        break;
      }
    }
    try {
      u = ec.call(this, m);
    } catch (C) {
      return Promise.reject(C);
    }
    for (d = 0, p = c.length; d < p; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = Nt(this.defaults, t);
    const n = ou(t.baseURL, t.url);
    return eu(n, t.params, t.paramsSerializer);
  }
}
Z.forEach(["delete", "get", "head", "options"], function(t) {
  kr.prototype[t] = function(n, r) {
    return this.request(Nt(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
Z.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, a, s) {
      return this.request(Nt(s || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  kr.prototype[t] = n(), kr.prototype[t + "Form"] = n(!0);
});
var ur = kr;
class ps {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(o) {
      n = o;
    });
    const r = this;
    this.promise.then((i) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; )
        r._listeners[o](i);
      r._listeners = null;
    }), this.promise.then = (i) => {
      let o;
      const a = new Promise((s) => {
        r.subscribe(s), o = s;
      }).then(i);
      return a.cancel = function() {
        r.unsubscribe(o);
      }, a;
    }, t(function(o, a, s) {
      r.reason || (r.reason = new E1(o, a, s), n(r.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new ps(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
var Bp = ps;
function Up(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function Wp(e) {
  return Z.isObject(e) && e.isAxiosError === !0;
}
const ba = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ba).forEach(([e, t]) => {
  ba[t] = e;
});
var qp = ba;
function uu(e) {
  const t = new ur(e), n = z3(ur.prototype.request, t);
  return Z.extend(n, ur.prototype, t, { allOwnKeys: !0 }), Z.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(i) {
    return uu(Nt(e, i));
  }, n;
}
const g2 = uu(fs);
g2.Axios = ur;
g2.CanceledError = E1;
g2.CancelToken = Bp;
g2.isCancel = ru;
g2.VERSION = cu;
g2.toFormData = hi;
g2.AxiosError = je;
g2.Cancel = g2.CanceledError;
g2.all = function(t) {
  return Promise.all(t);
};
g2.spread = Up;
g2.isAxiosError = Wp;
g2.mergeConfig = Nt;
g2.AxiosHeaders = r0;
g2.formToJSON = (e) => nu(Z.isHTMLForm(e) ? new FormData(e) : e);
g2.getAdapter = lu.getAdapter;
g2.HttpStatusCode = qp;
g2.default = g2;
var Yp = g2, fu = {}, gi = {}, S1 = {};
Object.defineProperty(S1, "__esModule", {
  value: !0
});
S1.pathTempalteToParameterNames = void 0;
const Gp = (e) => {
  const t = e.match(/\{[A-Za-z0-9_-]+\}/g);
  return t === null ? [] : t.map((n) => n.substring(1, n.length - 1));
};
S1.pathTempalteToParameterNames = Gp;
Object.defineProperty(gi, "__esModule", {
  value: !0
});
gi.names = void 0;
var Kp = S1;
const Xp = (e) => (0, Kp.pathTempalteToParameterNames)(e).filter((n, r, i) => i.indexOf(n) === r);
gi.names = Xp;
var vi = {}, Pn = {};
Object.defineProperty(Pn, "__esModule", {
  value: !0
});
Pn.toParameterPattern = void 0;
var Jp = S1;
const Qp = (e, t) => {
  const n = typeof t > "u" ? [] : Object.keys(t).map((o) => {
    const a = t[o];
    return {
      name: o,
      pattern: typeof a > "u" ? null : a
    };
  });
  return (0, Jp.pathTempalteToParameterNames)(e).map((o) => {
    const a = n.find(({
      name: l
    }) => l === o), s = typeof a > "u" ? null : a.pattern;
    return {
      name: o,
      pattern: s
    };
  });
};
Pn.toParameterPattern = Qp;
Object.defineProperty(vi, "__esModule", {
  value: !0
});
vi.params = void 0;
var eh = Pn;
const th = (e, t) => {
  const r = oh(e), i = (0, eh.toParameterPattern)(e, t);
  return (o) => {
    const a = ih(o, r);
    if (a === null) return null;
    const s = rh(a, i);
    return s === null ? null : nh(s);
  };
};
vi.params = th;
const nh = (e) => e.map(({
  name: t,
  value: n
}) => ({
  [t]: n
})).reduce((t, n) => Object.assign(t, n), {}), rh = (e, t) => {
  const n = e.map(({
    value: o
  }) => decodeURIComponent(o)).map((o, a) => {
    const {
      name: s,
      pattern: l
    } = t[a];
    return {
      name: s,
      pattern: l,
      value: o
    };
  });
  return n.some(({
    pattern: o,
    value: a
  }) => o !== null && a.match(o) === null) || n.some(({
    name: o,
    value: a
  }) => n.some(({
    name: s,
    value: l
  }) => s === o && l !== a)) ? null : n;
}, ih = (e, t) => {
  const n = e.match(t);
  return n === null ? null : n.slice(1).map((i) => ({
    value: i
  }));
}, oh = (e) => new RegExp("^" + e.replace(/\{[A-Za-z0-9_-]+\}/g, "([^\\/]*)") + "$");
var yi = {};
Object.defineProperty(yi, "__esModule", {
  value: !0
});
yi.path = void 0;
var ah = S1, sh = Pn;
const lh = (e, t) => {
  const n = (0, ah.pathTempalteToParameterNames)(e);
  return (r) => n.some((o) => typeof r[o] != "string") || (0, sh.toParameterPattern)(e, t).some(({
    name: o,
    pattern: a
  }) => a !== null && r[o].match(a) === null) ? null : n.reduce((o, a) => o.split("{" + a + "}").join(encodeURIComponent(r[a])), e);
};
yi.path = lh;
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "names", {
    enumerable: !0,
    get: function() {
      return t.names;
    }
  }), Object.defineProperty(e, "params", {
    enumerable: !0,
    get: function() {
      return n.params;
    }
  }), Object.defineProperty(e, "path", {
    enumerable: !0,
    get: function() {
      return r.path;
    }
  }), e.bath = e.default = void 0;
  var t = gi, n = vi, r = yi;
  const i = (a, s) => {
    const l = (0, t.names)(a), c = (0, r.path)(a, s), u = (0, n.params)(a, s);
    return {
      names: l,
      path: c,
      params: u
    };
  };
  e.bath = i;
  var o = i;
  e.default = o;
})(fu);
var du = {}, pu = {};
Object.defineProperty(pu, "__esModule", {
  value: !0
});
var hu = {}, mu = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "klona", {
    enumerable: !0,
    get: function() {
      return t;
    }
  });
  function t(n) {
    var r, i, o;
    if (Array.isArray(n)) {
      for (i = Array(r = n.length); r--; ) i[r] = (o = n[r]) && typeof o == "object" ? t(o) : o;
      return i;
    }
    if (Object.prototype.toString.call(n) === "[object Object]") {
      i = {};
      for (r in n)
        r === "__proto__" ? Object.defineProperty(i, r, {
          value: t(n[r]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : i[r] = (o = n[r]) && typeof o == "object" ? t(o) : o;
      return i;
    }
    return n;
  }
})(mu);
var hs = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "resolveRefSync", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  var t = /* @__PURE__ */ new Map(), n = function(r, i) {
    t.has(r) || t.set(r, /* @__PURE__ */ new Map());
    var o = t.get(r);
    if (o.has(i))
      return o.get(i);
    var a = i.split("/").slice(1), s = r, l = !0, c = !1, u = void 0;
    try {
      for (var d = a[Symbol.iterator](), p; !(l = (p = d.next()).done); l = !0) {
        var m = p.value;
        (!s || typeof s != "object") && (s = null);
        var C;
        s = (C = s[m]) !== null && C !== void 0 ? C : null;
      }
    } catch (g) {
      c = !0, u = g;
    } finally {
      try {
        !l && d.return != null && d.return();
      } finally {
        if (c)
          throw u;
      }
    }
    return o.set(i, s), s;
  };
})(hs);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "dereferenceSync", {
    enumerable: !0,
    get: function() {
      return i;
    }
  });
  var t = mu, n = hs, r = /* @__PURE__ */ new Map(), i = function(o) {
    if (r.has(o))
      return r.get(o);
    var a = /* @__PURE__ */ new Set(), s = (0, t.klona)(o), l = function(u, d) {
      if (typeof u == "object" && u !== null) {
        if (a.has(u))
          return u;
        if (a.add(u), Array.isArray(u))
          for (var p = 0; p < u.length; p++)
            u[p] = l(u[p]);
        else {
          if ("$ref" in u && typeof u.$ref == "string")
            return (0, n.resolveRefSync)(s, u.$ref);
          for (var m in u)
            u[m] = l(u[m]);
        }
      }
      return u;
    }, c = l(s);
    return r.set(o, c), c;
  };
})(hu);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), t(pu, e), t(hu, e), t(hs, e);
  function t(n, r) {
    return Object.keys(n).forEach(function(i) {
      i !== "default" && !Object.prototype.hasOwnProperty.call(r, i) && Object.defineProperty(r, i, {
        enumerable: !0,
        get: function() {
          return n[i];
        }
      });
    }), n;
  }
})(du);
var ms = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ParamType = e.HttpMethod = void 0, function(t) {
    t.Get = "get", t.Put = "put", t.Post = "post", t.Patch = "patch", t.Delete = "delete", t.Options = "options", t.Head = "head", t.Trace = "trace";
  }(e.HttpMethod || (e.HttpMethod = {})), function(t) {
    t.Query = "query", t.Header = "header", t.Path = "path", t.Cookie = "cookie";
  }(e.ParamType || (e.ParamType = {}));
})(ms);
var w2 = {}, Un = {}, W0 = {}, nc;
function kn() {
  if (nc) return W0;
  nc = 1;
  function e(a) {
    return typeof a > "u" || a === null;
  }
  function t(a) {
    return typeof a == "object" && a !== null;
  }
  function n(a) {
    return Array.isArray(a) ? a : e(a) ? [] : [a];
  }
  function r(a, s) {
    var l, c, u, d;
    if (s)
      for (d = Object.keys(s), l = 0, c = d.length; l < c; l += 1)
        u = d[l], a[u] = s[u];
    return a;
  }
  function i(a, s) {
    var l = "", c;
    for (c = 0; c < s; c += 1)
      l += a;
    return l;
  }
  function o(a) {
    return a === 0 && Number.NEGATIVE_INFINITY === 1 / a;
  }
  return W0.isNothing = e, W0.isObject = t, W0.toArray = n, W0.repeat = i, W0.isNegativeZero = o, W0.extend = r, W0;
}
var ro, rc;
function Hn() {
  if (rc) return ro;
  rc = 1;
  function e(n, r) {
    var i = "", o = n.reason || "(unknown reason)";
    return n.mark ? (n.mark.name && (i += 'in "' + n.mark.name + '" '), i += "(" + (n.mark.line + 1) + ":" + (n.mark.column + 1) + ")", !r && n.mark.snippet && (i += `

` + n.mark.snippet), o + " " + i) : o;
  }
  function t(n, r) {
    Error.call(this), this.name = "YAMLException", this.reason = n, this.mark = r, this.message = e(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
  }
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t.prototype.toString = function(r) {
    return this.name + ": " + e(this, r);
  }, ro = t, ro;
}
var io, ic;
function ch() {
  if (ic) return io;
  ic = 1;
  var e = kn();
  function t(i, o, a, s, l) {
    var c = "", u = "", d = Math.floor(l / 2) - 1;
    return s - o > d && (c = " ... ", o = s - d + c.length), a - s > d && (u = " ...", a = s + d - u.length), {
      str: c + i.slice(o, a).replace(/\t/g, "→") + u,
      pos: s - o + c.length
      // relative position
    };
  }
  function n(i, o) {
    return e.repeat(" ", o - i.length) + i;
  }
  function r(i, o) {
    if (o = Object.create(o || null), !i.buffer) return null;
    o.maxLength || (o.maxLength = 79), typeof o.indent != "number" && (o.indent = 1), typeof o.linesBefore != "number" && (o.linesBefore = 3), typeof o.linesAfter != "number" && (o.linesAfter = 2);
    for (var a = /\r?\n|\r|\0/g, s = [0], l = [], c, u = -1; c = a.exec(i.buffer); )
      l.push(c.index), s.push(c.index + c[0].length), i.position <= c.index && u < 0 && (u = s.length - 2);
    u < 0 && (u = s.length - 1);
    var d = "", p, m, C = Math.min(i.line + o.linesAfter, l.length).toString().length, g = o.maxLength - (o.indent + C + 3);
    for (p = 1; p <= o.linesBefore && !(u - p < 0); p++)
      m = t(
        i.buffer,
        s[u - p],
        l[u - p],
        i.position - (s[u] - s[u - p]),
        g
      ), d = e.repeat(" ", o.indent) + n((i.line - p + 1).toString(), C) + " | " + m.str + `
` + d;
    for (m = t(i.buffer, s[u], l[u], i.position, g), d += e.repeat(" ", o.indent) + n((i.line + 1).toString(), C) + " | " + m.str + `
`, d += e.repeat("-", o.indent + C + 3 + m.pos) + `^
`, p = 1; p <= o.linesAfter && !(u + p >= l.length); p++)
      m = t(
        i.buffer,
        s[u + p],
        l[u + p],
        i.position - (s[u] - s[u + p]),
        g
      ), d += e.repeat(" ", o.indent) + n((i.line + p + 1).toString(), C) + " | " + m.str + `
`;
    return d.replace(/\n$/, "");
  }
  return io = r, io;
}
var oo, oc;
function T2() {
  if (oc) return oo;
  oc = 1;
  var e = Hn(), t = [
    "kind",
    "multi",
    "resolve",
    "construct",
    "instanceOf",
    "predicate",
    "represent",
    "representName",
    "defaultStyle",
    "styleAliases"
  ], n = [
    "scalar",
    "sequence",
    "mapping"
  ];
  function r(o) {
    var a = {};
    return o !== null && Object.keys(o).forEach(function(s) {
      o[s].forEach(function(l) {
        a[String(l)] = s;
      });
    }), a;
  }
  function i(o, a) {
    if (a = a || {}, Object.keys(a).forEach(function(s) {
      if (t.indexOf(s) === -1)
        throw new e('Unknown option "' + s + '" is met in definition of "' + o + '" YAML type.');
    }), this.options = a, this.tag = o, this.kind = a.kind || null, this.resolve = a.resolve || function() {
      return !0;
    }, this.construct = a.construct || function(s) {
      return s;
    }, this.instanceOf = a.instanceOf || null, this.predicate = a.predicate || null, this.represent = a.represent || null, this.representName = a.representName || null, this.defaultStyle = a.defaultStyle || null, this.multi = a.multi || !1, this.styleAliases = r(a.styleAliases || null), n.indexOf(this.kind) === -1)
      throw new e('Unknown kind "' + this.kind + '" is specified for "' + o + '" YAML type.');
  }
  return oo = i, oo;
}
var ao, ac;
function Cu() {
  if (ac) return ao;
  ac = 1;
  var e = Hn(), t = T2();
  function n(o, a) {
    var s = [];
    return o[a].forEach(function(l) {
      var c = s.length;
      s.forEach(function(u, d) {
        u.tag === l.tag && u.kind === l.kind && u.multi === l.multi && (c = d);
      }), s[c] = l;
    }), s;
  }
  function r() {
    var o = {
      scalar: {},
      sequence: {},
      mapping: {},
      fallback: {},
      multi: {
        scalar: [],
        sequence: [],
        mapping: [],
        fallback: []
      }
    }, a, s;
    function l(c) {
      c.multi ? (o.multi[c.kind].push(c), o.multi.fallback.push(c)) : o[c.kind][c.tag] = o.fallback[c.tag] = c;
    }
    for (a = 0, s = arguments.length; a < s; a += 1)
      arguments[a].forEach(l);
    return o;
  }
  function i(o) {
    return this.extend(o);
  }
  return i.prototype.extend = function(a) {
    var s = [], l = [];
    if (a instanceof t)
      l.push(a);
    else if (Array.isArray(a))
      l = l.concat(a);
    else if (a && (Array.isArray(a.implicit) || Array.isArray(a.explicit)))
      a.implicit && (s = s.concat(a.implicit)), a.explicit && (l = l.concat(a.explicit));
    else
      throw new e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
    s.forEach(function(u) {
      if (!(u instanceof t))
        throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      if (u.loadKind && u.loadKind !== "scalar")
        throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
      if (u.multi)
        throw new e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
    }), l.forEach(function(u) {
      if (!(u instanceof t))
        throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    });
    var c = Object.create(i.prototype);
    return c.implicit = (this.implicit || []).concat(s), c.explicit = (this.explicit || []).concat(l), c.compiledImplicit = n(c, "implicit"), c.compiledExplicit = n(c, "explicit"), c.compiledTypeMap = r(c.compiledImplicit, c.compiledExplicit), c;
  }, ao = i, ao;
}
var so, sc;
function gu() {
  if (sc) return so;
  sc = 1;
  var e = T2();
  return so = new e("tag:yaml.org,2002:str", {
    kind: "scalar",
    construct: function(t) {
      return t !== null ? t : "";
    }
  }), so;
}
var lo, lc;
function vu() {
  if (lc) return lo;
  lc = 1;
  var e = T2();
  return lo = new e("tag:yaml.org,2002:seq", {
    kind: "sequence",
    construct: function(t) {
      return t !== null ? t : [];
    }
  }), lo;
}
var co, cc;
function yu() {
  if (cc) return co;
  cc = 1;
  var e = T2();
  return co = new e("tag:yaml.org,2002:map", {
    kind: "mapping",
    construct: function(t) {
      return t !== null ? t : {};
    }
  }), co;
}
var uo, uc;
function bu() {
  if (uc) return uo;
  uc = 1;
  var e = Cu();
  return uo = new e({
    explicit: [
      gu(),
      vu(),
      yu()
    ]
  }), uo;
}
var fo, fc;
function xu() {
  if (fc) return fo;
  fc = 1;
  var e = T2();
  function t(i) {
    if (i === null) return !0;
    var o = i.length;
    return o === 1 && i === "~" || o === 4 && (i === "null" || i === "Null" || i === "NULL");
  }
  function n() {
    return null;
  }
  function r(i) {
    return i === null;
  }
  return fo = new e("tag:yaml.org,2002:null", {
    kind: "scalar",
    resolve: t,
    construct: n,
    predicate: r,
    represent: {
      canonical: function() {
        return "~";
      },
      lowercase: function() {
        return "null";
      },
      uppercase: function() {
        return "NULL";
      },
      camelcase: function() {
        return "Null";
      },
      empty: function() {
        return "";
      }
    },
    defaultStyle: "lowercase"
  }), fo;
}
var po, dc;
function wu() {
  if (dc) return po;
  dc = 1;
  var e = T2();
  function t(i) {
    if (i === null) return !1;
    var o = i.length;
    return o === 4 && (i === "true" || i === "True" || i === "TRUE") || o === 5 && (i === "false" || i === "False" || i === "FALSE");
  }
  function n(i) {
    return i === "true" || i === "True" || i === "TRUE";
  }
  function r(i) {
    return Object.prototype.toString.call(i) === "[object Boolean]";
  }
  return po = new e("tag:yaml.org,2002:bool", {
    kind: "scalar",
    resolve: t,
    construct: n,
    predicate: r,
    represent: {
      lowercase: function(i) {
        return i ? "true" : "false";
      },
      uppercase: function(i) {
        return i ? "TRUE" : "FALSE";
      },
      camelcase: function(i) {
        return i ? "True" : "False";
      }
    },
    defaultStyle: "lowercase"
  }), po;
}
var ho, pc;
function _u() {
  if (pc) return ho;
  pc = 1;
  var e = kn(), t = T2();
  function n(l) {
    return 48 <= l && l <= 57 || 65 <= l && l <= 70 || 97 <= l && l <= 102;
  }
  function r(l) {
    return 48 <= l && l <= 55;
  }
  function i(l) {
    return 48 <= l && l <= 57;
  }
  function o(l) {
    if (l === null) return !1;
    var c = l.length, u = 0, d = !1, p;
    if (!c) return !1;
    if (p = l[u], (p === "-" || p === "+") && (p = l[++u]), p === "0") {
      if (u + 1 === c) return !0;
      if (p = l[++u], p === "b") {
        for (u++; u < c; u++)
          if (p = l[u], p !== "_") {
            if (p !== "0" && p !== "1") return !1;
            d = !0;
          }
        return d && p !== "_";
      }
      if (p === "x") {
        for (u++; u < c; u++)
          if (p = l[u], p !== "_") {
            if (!n(l.charCodeAt(u))) return !1;
            d = !0;
          }
        return d && p !== "_";
      }
      if (p === "o") {
        for (u++; u < c; u++)
          if (p = l[u], p !== "_") {
            if (!r(l.charCodeAt(u))) return !1;
            d = !0;
          }
        return d && p !== "_";
      }
    }
    if (p === "_") return !1;
    for (; u < c; u++)
      if (p = l[u], p !== "_") {
        if (!i(l.charCodeAt(u)))
          return !1;
        d = !0;
      }
    return !(!d || p === "_");
  }
  function a(l) {
    var c = l, u = 1, d;
    if (c.indexOf("_") !== -1 && (c = c.replace(/_/g, "")), d = c[0], (d === "-" || d === "+") && (d === "-" && (u = -1), c = c.slice(1), d = c[0]), c === "0") return 0;
    if (d === "0") {
      if (c[1] === "b") return u * parseInt(c.slice(2), 2);
      if (c[1] === "x") return u * parseInt(c.slice(2), 16);
      if (c[1] === "o") return u * parseInt(c.slice(2), 8);
    }
    return u * parseInt(c, 10);
  }
  function s(l) {
    return Object.prototype.toString.call(l) === "[object Number]" && l % 1 === 0 && !e.isNegativeZero(l);
  }
  return ho = new t("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: o,
    construct: a,
    predicate: s,
    represent: {
      binary: function(l) {
        return l >= 0 ? "0b" + l.toString(2) : "-0b" + l.toString(2).slice(1);
      },
      octal: function(l) {
        return l >= 0 ? "0o" + l.toString(8) : "-0o" + l.toString(8).slice(1);
      },
      decimal: function(l) {
        return l.toString(10);
      },
      /* eslint-disable max-len */
      hexadecimal: function(l) {
        return l >= 0 ? "0x" + l.toString(16).toUpperCase() : "-0x" + l.toString(16).toUpperCase().slice(1);
      }
    },
    defaultStyle: "decimal",
    styleAliases: {
      binary: [2, "bin"],
      octal: [8, "oct"],
      decimal: [10, "dec"],
      hexadecimal: [16, "hex"]
    }
  }), ho;
}
var mo, hc;
function Eu() {
  if (hc) return mo;
  hc = 1;
  var e = kn(), t = T2(), n = new RegExp(
    // 2.5e4, 2.5 and integers
    "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
  );
  function r(l) {
    return !(l === null || !n.test(l) || // Quick hack to not allow integers end with `_`
    // Probably should update regexp & check speed
    l[l.length - 1] === "_");
  }
  function i(l) {
    var c, u;
    return c = l.replace(/_/g, "").toLowerCase(), u = c[0] === "-" ? -1 : 1, "+-".indexOf(c[0]) >= 0 && (c = c.slice(1)), c === ".inf" ? u === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : c === ".nan" ? NaN : u * parseFloat(c, 10);
  }
  var o = /^[-+]?[0-9]+e/;
  function a(l, c) {
    var u;
    if (isNaN(l))
      switch (c) {
        case "lowercase":
          return ".nan";
        case "uppercase":
          return ".NAN";
        case "camelcase":
          return ".NaN";
      }
    else if (Number.POSITIVE_INFINITY === l)
      switch (c) {
        case "lowercase":
          return ".inf";
        case "uppercase":
          return ".INF";
        case "camelcase":
          return ".Inf";
      }
    else if (Number.NEGATIVE_INFINITY === l)
      switch (c) {
        case "lowercase":
          return "-.inf";
        case "uppercase":
          return "-.INF";
        case "camelcase":
          return "-.Inf";
      }
    else if (e.isNegativeZero(l))
      return "-0.0";
    return u = l.toString(10), o.test(u) ? u.replace("e", ".e") : u;
  }
  function s(l) {
    return Object.prototype.toString.call(l) === "[object Number]" && (l % 1 !== 0 || e.isNegativeZero(l));
  }
  return mo = new t("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: r,
    construct: i,
    predicate: s,
    represent: a,
    defaultStyle: "lowercase"
  }), mo;
}
var Co, mc;
function Su() {
  return mc || (mc = 1, Co = bu().extend({
    implicit: [
      xu(),
      wu(),
      _u(),
      Eu()
    ]
  })), Co;
}
var go, Cc;
function Mu() {
  return Cc || (Cc = 1, go = Su()), go;
}
var vo, gc;
function Au() {
  if (gc) return vo;
  gc = 1;
  var e = T2(), t = new RegExp(
    "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
  ), n = new RegExp(
    "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
  );
  function r(a) {
    return a === null ? !1 : t.exec(a) !== null || n.exec(a) !== null;
  }
  function i(a) {
    var s, l, c, u, d, p, m, C = 0, g = null, b, x, w;
    if (s = t.exec(a), s === null && (s = n.exec(a)), s === null) throw new Error("Date resolve error");
    if (l = +s[1], c = +s[2] - 1, u = +s[3], !s[4])
      return new Date(Date.UTC(l, c, u));
    if (d = +s[4], p = +s[5], m = +s[6], s[7]) {
      for (C = s[7].slice(0, 3); C.length < 3; )
        C += "0";
      C = +C;
    }
    return s[9] && (b = +s[10], x = +(s[11] || 0), g = (b * 60 + x) * 6e4, s[9] === "-" && (g = -g)), w = new Date(Date.UTC(l, c, u, d, p, m, C)), g && w.setTime(w.getTime() - g), w;
  }
  function o(a) {
    return a.toISOString();
  }
  return vo = new e("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: r,
    construct: i,
    instanceOf: Date,
    represent: o
  }), vo;
}
var yo, vc;
function Tu() {
  if (vc) return yo;
  vc = 1;
  var e = T2();
  function t(n) {
    return n === "<<" || n === null;
  }
  return yo = new e("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: t
  }), yo;
}
var bo, yc;
function Ou() {
  if (yc) return bo;
  yc = 1;
  var e = T2(), t = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
  function n(a) {
    if (a === null) return !1;
    var s, l, c = 0, u = a.length, d = t;
    for (l = 0; l < u; l++)
      if (s = d.indexOf(a.charAt(l)), !(s > 64)) {
        if (s < 0) return !1;
        c += 6;
      }
    return c % 8 === 0;
  }
  function r(a) {
    var s, l, c = a.replace(/[\r\n=]/g, ""), u = c.length, d = t, p = 0, m = [];
    for (s = 0; s < u; s++)
      s % 4 === 0 && s && (m.push(p >> 16 & 255), m.push(p >> 8 & 255), m.push(p & 255)), p = p << 6 | d.indexOf(c.charAt(s));
    return l = u % 4 * 6, l === 0 ? (m.push(p >> 16 & 255), m.push(p >> 8 & 255), m.push(p & 255)) : l === 18 ? (m.push(p >> 10 & 255), m.push(p >> 2 & 255)) : l === 12 && m.push(p >> 4 & 255), new Uint8Array(m);
  }
  function i(a) {
    var s = "", l = 0, c, u, d = a.length, p = t;
    for (c = 0; c < d; c++)
      c % 3 === 0 && c && (s += p[l >> 18 & 63], s += p[l >> 12 & 63], s += p[l >> 6 & 63], s += p[l & 63]), l = (l << 8) + a[c];
    return u = d % 3, u === 0 ? (s += p[l >> 18 & 63], s += p[l >> 12 & 63], s += p[l >> 6 & 63], s += p[l & 63]) : u === 2 ? (s += p[l >> 10 & 63], s += p[l >> 4 & 63], s += p[l << 2 & 63], s += p[64]) : u === 1 && (s += p[l >> 2 & 63], s += p[l << 4 & 63], s += p[64], s += p[64]), s;
  }
  function o(a) {
    return Object.prototype.toString.call(a) === "[object Uint8Array]";
  }
  return bo = new e("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: n,
    construct: r,
    predicate: o,
    represent: i
  }), bo;
}
var xo, bc;
function Ru() {
  if (bc) return xo;
  bc = 1;
  var e = T2(), t = Object.prototype.hasOwnProperty, n = Object.prototype.toString;
  function r(o) {
    if (o === null) return !0;
    var a = [], s, l, c, u, d, p = o;
    for (s = 0, l = p.length; s < l; s += 1) {
      if (c = p[s], d = !1, n.call(c) !== "[object Object]") return !1;
      for (u in c)
        if (t.call(c, u))
          if (!d) d = !0;
          else return !1;
      if (!d) return !1;
      if (a.indexOf(u) === -1) a.push(u);
      else return !1;
    }
    return !0;
  }
  function i(o) {
    return o !== null ? o : [];
  }
  return xo = new e("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: r,
    construct: i
  }), xo;
}
var wo, xc;
function Fu() {
  if (xc) return wo;
  xc = 1;
  var e = T2(), t = Object.prototype.toString;
  function n(i) {
    if (i === null) return !0;
    var o, a, s, l, c, u = i;
    for (c = new Array(u.length), o = 0, a = u.length; o < a; o += 1) {
      if (s = u[o], t.call(s) !== "[object Object]" || (l = Object.keys(s), l.length !== 1)) return !1;
      c[o] = [l[0], s[l[0]]];
    }
    return !0;
  }
  function r(i) {
    if (i === null) return [];
    var o, a, s, l, c, u = i;
    for (c = new Array(u.length), o = 0, a = u.length; o < a; o += 1)
      s = u[o], l = Object.keys(s), c[o] = [l[0], s[l[0]]];
    return c;
  }
  return wo = new e("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: n,
    construct: r
  }), wo;
}
var _o, wc;
function Pu() {
  if (wc) return _o;
  wc = 1;
  var e = T2(), t = Object.prototype.hasOwnProperty;
  function n(i) {
    if (i === null) return !0;
    var o, a = i;
    for (o in a)
      if (t.call(a, o) && a[o] !== null)
        return !1;
    return !0;
  }
  function r(i) {
    return i !== null ? i : {};
  }
  return _o = new e("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: n,
    construct: r
  }), _o;
}
var Eo, _c;
function Cs() {
  return _c || (_c = 1, Eo = Mu().extend({
    implicit: [
      Au(),
      Tu()
    ],
    explicit: [
      Ou(),
      Ru(),
      Fu(),
      Pu()
    ]
  })), Eo;
}
var Ec;
function uh() {
  if (Ec) return Un;
  Ec = 1;
  var e = kn(), t = Hn(), n = ch(), r = Cs(), i = Object.prototype.hasOwnProperty, o = 1, a = 2, s = 3, l = 4, c = 1, u = 2, d = 3, p = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, m = /[\x85\u2028\u2029]/, C = /[,\[\]\{\}]/, g = /^(?:!|!!|![a-z\-]+!)$/i, b = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
  function x(f) {
    return Object.prototype.toString.call(f);
  }
  function w(f) {
    return f === 10 || f === 13;
  }
  function E(f) {
    return f === 9 || f === 32;
  }
  function S(f) {
    return f === 9 || f === 32 || f === 10 || f === 13;
  }
  function _(f) {
    return f === 44 || f === 91 || f === 93 || f === 123 || f === 125;
  }
  function P(f) {
    var A;
    return 48 <= f && f <= 57 ? f - 48 : (A = f | 32, 97 <= A && A <= 102 ? A - 97 + 10 : -1);
  }
  function F(f) {
    return f === 120 ? 2 : f === 117 ? 4 : f === 85 ? 8 : 0;
  }
  function $(f) {
    return 48 <= f && f <= 57 ? f - 48 : -1;
  }
  function le(f) {
    return f === 48 ? "\0" : f === 97 ? "\x07" : f === 98 ? "\b" : f === 116 || f === 9 ? "	" : f === 110 ? `
` : f === 118 ? "\v" : f === 102 ? "\f" : f === 114 ? "\r" : f === 101 ? "\x1B" : f === 32 ? " " : f === 34 ? '"' : f === 47 ? "/" : f === 92 ? "\\" : f === 78 ? "" : f === 95 ? " " : f === 76 ? "\u2028" : f === 80 ? "\u2029" : "";
  }
  function pe(f) {
    return f <= 65535 ? String.fromCharCode(f) : String.fromCharCode(
      (f - 65536 >> 10) + 55296,
      (f - 65536 & 1023) + 56320
    );
  }
  for (var fe = new Array(256), D = new Array(256), Q = 0; Q < 256; Q++)
    fe[Q] = le(Q) ? 1 : 0, D[Q] = le(Q);
  function N(f, A) {
    this.input = f, this.filename = A.filename || null, this.schema = A.schema || r, this.onWarning = A.onWarning || null, this.legacy = A.legacy || !1, this.json = A.json || !1, this.listener = A.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = f.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
  }
  function re(f, A) {
    var O = {
      name: f.filename,
      buffer: f.input.slice(0, -1),
      // omit trailing \0
      position: f.position,
      line: f.line,
      column: f.position - f.lineStart
    };
    return O.snippet = n(O), new t(A, O);
  }
  function k(f, A) {
    throw re(f, A);
  }
  function ce(f, A) {
    f.onWarning && f.onWarning.call(null, re(f, A));
  }
  var xe = {
    YAML: function(A, O, I) {
      var L, K, U;
      A.version !== null && k(A, "duplication of %YAML directive"), I.length !== 1 && k(A, "YAML directive accepts exactly one argument"), L = /^([0-9]+)\.([0-9]+)$/.exec(I[0]), L === null && k(A, "ill-formed argument of the YAML directive"), K = parseInt(L[1], 10), U = parseInt(L[2], 10), K !== 1 && k(A, "unacceptable YAML version of the document"), A.version = I[0], A.checkLineBreaks = U < 2, U !== 1 && U !== 2 && ce(A, "unsupported YAML version of the document");
    },
    TAG: function(A, O, I) {
      var L, K;
      I.length !== 2 && k(A, "TAG directive accepts exactly two arguments"), L = I[0], K = I[1], g.test(L) || k(A, "ill-formed tag handle (first argument) of the TAG directive"), i.call(A.tagMap, L) && k(A, 'there is a previously declared suffix for "' + L + '" tag handle'), b.test(K) || k(A, "ill-formed tag prefix (second argument) of the TAG directive");
      try {
        K = decodeURIComponent(K);
      } catch {
        k(A, "tag prefix is malformed: " + K);
      }
      A.tagMap[L] = K;
    }
  };
  function X(f, A, O, I) {
    var L, K, U, me;
    if (A < O) {
      if (me = f.input.slice(A, O), I)
        for (L = 0, K = me.length; L < K; L += 1)
          U = me.charCodeAt(L), U === 9 || 32 <= U && U <= 1114111 || k(f, "expected valid JSON character");
      else p.test(me) && k(f, "the stream contains non-printable characters");
      f.result += me;
    }
  }
  function j(f, A, O, I) {
    var L, K, U, me;
    for (e.isObject(O) || k(f, "cannot merge mappings; the provided source object is unacceptable"), L = Object.keys(O), U = 0, me = L.length; U < me; U += 1)
      K = L[U], i.call(A, K) || (A[K] = O[K], I[K] = !0);
  }
  function B(f, A, O, I, L, K, U, me, Te) {
    var Ne, We;
    if (Array.isArray(L))
      for (L = Array.prototype.slice.call(L), Ne = 0, We = L.length; Ne < We; Ne += 1)
        Array.isArray(L[Ne]) && k(f, "nested arrays are not supported inside keys"), typeof L == "object" && x(L[Ne]) === "[object Object]" && (L[Ne] = "[object Object]");
    if (typeof L == "object" && x(L) === "[object Object]" && (L = "[object Object]"), L = String(L), A === null && (A = {}), I === "tag:yaml.org,2002:merge")
      if (Array.isArray(K))
        for (Ne = 0, We = K.length; Ne < We; Ne += 1)
          j(f, A, K[Ne], O);
      else
        j(f, A, K, O);
    else
      !f.json && !i.call(O, L) && i.call(A, L) && (f.line = U || f.line, f.lineStart = me || f.lineStart, f.position = Te || f.position, k(f, "duplicated mapping key")), L === "__proto__" ? Object.defineProperty(A, L, {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: K
      }) : A[L] = K, delete O[L];
    return A;
  }
  function he(f) {
    var A;
    A = f.input.charCodeAt(f.position), A === 10 ? f.position++ : A === 13 ? (f.position++, f.input.charCodeAt(f.position) === 10 && f.position++) : k(f, "a line break is expected"), f.line += 1, f.lineStart = f.position, f.firstTabInLine = -1;
  }
  function H(f, A, O) {
    for (var I = 0, L = f.input.charCodeAt(f.position); L !== 0; ) {
      for (; E(L); )
        L === 9 && f.firstTabInLine === -1 && (f.firstTabInLine = f.position), L = f.input.charCodeAt(++f.position);
      if (A && L === 35)
        do
          L = f.input.charCodeAt(++f.position);
        while (L !== 10 && L !== 13 && L !== 0);
      if (w(L))
        for (he(f), L = f.input.charCodeAt(f.position), I++, f.lineIndent = 0; L === 32; )
          f.lineIndent++, L = f.input.charCodeAt(++f.position);
      else
        break;
    }
    return O !== -1 && I !== 0 && f.lineIndent < O && ce(f, "deficient indentation"), I;
  }
  function Y(f) {
    var A = f.position, O;
    return O = f.input.charCodeAt(A), !!((O === 45 || O === 46) && O === f.input.charCodeAt(A + 1) && O === f.input.charCodeAt(A + 2) && (A += 3, O = f.input.charCodeAt(A), O === 0 || S(O)));
  }
  function ie(f, A) {
    A === 1 ? f.result += " " : A > 1 && (f.result += e.repeat(`
`, A - 1));
  }
  function q(f, A, O) {
    var I, L, K, U, me, Te, Ne, We, _e = f.kind, d2 = f.result, v;
    if (v = f.input.charCodeAt(f.position), S(v) || _(v) || v === 35 || v === 38 || v === 42 || v === 33 || v === 124 || v === 62 || v === 39 || v === 34 || v === 37 || v === 64 || v === 96 || (v === 63 || v === 45) && (L = f.input.charCodeAt(f.position + 1), S(L) || O && _(L)))
      return !1;
    for (f.kind = "scalar", f.result = "", K = U = f.position, me = !1; v !== 0; ) {
      if (v === 58) {
        if (L = f.input.charCodeAt(f.position + 1), S(L) || O && _(L))
          break;
      } else if (v === 35) {
        if (I = f.input.charCodeAt(f.position - 1), S(I))
          break;
      } else {
        if (f.position === f.lineStart && Y(f) || O && _(v))
          break;
        if (w(v))
          if (Te = f.line, Ne = f.lineStart, We = f.lineIndent, H(f, !1, -1), f.lineIndent >= A) {
            me = !0, v = f.input.charCodeAt(f.position);
            continue;
          } else {
            f.position = U, f.line = Te, f.lineStart = Ne, f.lineIndent = We;
            break;
          }
      }
      me && (X(f, K, U, !1), ie(f, f.line - Te), K = U = f.position, me = !1), E(v) || (U = f.position + 1), v = f.input.charCodeAt(++f.position);
    }
    return X(f, K, U, !1), f.result ? !0 : (f.kind = _e, f.result = d2, !1);
  }
  function G(f, A) {
    var O, I, L;
    if (O = f.input.charCodeAt(f.position), O !== 39)
      return !1;
    for (f.kind = "scalar", f.result = "", f.position++, I = L = f.position; (O = f.input.charCodeAt(f.position)) !== 0; )
      if (O === 39)
        if (X(f, I, f.position, !0), O = f.input.charCodeAt(++f.position), O === 39)
          I = f.position, f.position++, L = f.position;
        else
          return !0;
      else w(O) ? (X(f, I, L, !0), ie(f, H(f, !1, A)), I = L = f.position) : f.position === f.lineStart && Y(f) ? k(f, "unexpected end of the document within a single quoted scalar") : (f.position++, L = f.position);
    k(f, "unexpected end of the stream within a single quoted scalar");
  }
  function oe(f, A) {
    var O, I, L, K, U, me;
    if (me = f.input.charCodeAt(f.position), me !== 34)
      return !1;
    for (f.kind = "scalar", f.result = "", f.position++, O = I = f.position; (me = f.input.charCodeAt(f.position)) !== 0; ) {
      if (me === 34)
        return X(f, O, f.position, !0), f.position++, !0;
      if (me === 92) {
        if (X(f, O, f.position, !0), me = f.input.charCodeAt(++f.position), w(me))
          H(f, !1, A);
        else if (me < 256 && fe[me])
          f.result += D[me], f.position++;
        else if ((U = F(me)) > 0) {
          for (L = U, K = 0; L > 0; L--)
            me = f.input.charCodeAt(++f.position), (U = P(me)) >= 0 ? K = (K << 4) + U : k(f, "expected hexadecimal character");
          f.result += pe(K), f.position++;
        } else
          k(f, "unknown escape sequence");
        O = I = f.position;
      } else w(me) ? (X(f, O, I, !0), ie(f, H(f, !1, A)), O = I = f.position) : f.position === f.lineStart && Y(f) ? k(f, "unexpected end of the document within a double quoted scalar") : (f.position++, I = f.position);
    }
    k(f, "unexpected end of the stream within a double quoted scalar");
  }
  function de(f, A) {
    var O = !0, I, L, K, U = f.tag, me, Te = f.anchor, Ne, We, _e, d2, v, z = /* @__PURE__ */ Object.create(null), J, W, te, se;
    if (se = f.input.charCodeAt(f.position), se === 91)
      We = 93, v = !1, me = [];
    else if (se === 123)
      We = 125, v = !0, me = {};
    else
      return !1;
    for (f.anchor !== null && (f.anchorMap[f.anchor] = me), se = f.input.charCodeAt(++f.position); se !== 0; ) {
      if (H(f, !0, A), se = f.input.charCodeAt(f.position), se === We)
        return f.position++, f.tag = U, f.anchor = Te, f.kind = v ? "mapping" : "sequence", f.result = me, !0;
      O ? se === 44 && k(f, "expected the node content, but found ','") : k(f, "missed comma between flow collection entries"), W = J = te = null, _e = d2 = !1, se === 63 && (Ne = f.input.charCodeAt(f.position + 1), S(Ne) && (_e = d2 = !0, f.position++, H(f, !0, A))), I = f.line, L = f.lineStart, K = f.position, t2(f, A, o, !1, !0), W = f.tag, J = f.result, H(f, !0, A), se = f.input.charCodeAt(f.position), (d2 || f.line === I) && se === 58 && (_e = !0, se = f.input.charCodeAt(++f.position), H(f, !0, A), t2(f, A, o, !1, !0), te = f.result), v ? B(f, me, z, W, J, te, I, L, K) : _e ? me.push(B(f, null, z, W, J, te, I, L, K)) : me.push(J), H(f, !0, A), se = f.input.charCodeAt(f.position), se === 44 ? (O = !0, se = f.input.charCodeAt(++f.position)) : O = !1;
    }
    k(f, "unexpected end of the stream within a flow collection");
  }
  function ve(f, A) {
    var O, I, L = c, K = !1, U = !1, me = A, Te = 0, Ne = !1, We, _e;
    if (_e = f.input.charCodeAt(f.position), _e === 124)
      I = !1;
    else if (_e === 62)
      I = !0;
    else
      return !1;
    for (f.kind = "scalar", f.result = ""; _e !== 0; )
      if (_e = f.input.charCodeAt(++f.position), _e === 43 || _e === 45)
        c === L ? L = _e === 43 ? d : u : k(f, "repeat of a chomping mode identifier");
      else if ((We = $(_e)) >= 0)
        We === 0 ? k(f, "bad explicit indentation width of a block scalar; it cannot be less than one") : U ? k(f, "repeat of an indentation width identifier") : (me = A + We - 1, U = !0);
      else
        break;
    if (E(_e)) {
      do
        _e = f.input.charCodeAt(++f.position);
      while (E(_e));
      if (_e === 35)
        do
          _e = f.input.charCodeAt(++f.position);
        while (!w(_e) && _e !== 0);
    }
    for (; _e !== 0; ) {
      for (he(f), f.lineIndent = 0, _e = f.input.charCodeAt(f.position); (!U || f.lineIndent < me) && _e === 32; )
        f.lineIndent++, _e = f.input.charCodeAt(++f.position);
      if (!U && f.lineIndent > me && (me = f.lineIndent), w(_e)) {
        Te++;
        continue;
      }
      if (f.lineIndent < me) {
        L === d ? f.result += e.repeat(`
`, K ? 1 + Te : Te) : L === c && K && (f.result += `
`);
        break;
      }
      for (I ? E(_e) ? (Ne = !0, f.result += e.repeat(`
`, K ? 1 + Te : Te)) : Ne ? (Ne = !1, f.result += e.repeat(`
`, Te + 1)) : Te === 0 ? K && (f.result += " ") : f.result += e.repeat(`
`, Te) : f.result += e.repeat(`
`, K ? 1 + Te : Te), K = !0, U = !0, Te = 0, O = f.position; !w(_e) && _e !== 0; )
        _e = f.input.charCodeAt(++f.position);
      X(f, O, f.position, !1);
    }
    return !0;
  }
  function ke(f, A) {
    var O, I = f.tag, L = f.anchor, K = [], U, me = !1, Te;
    if (f.firstTabInLine !== -1) return !1;
    for (f.anchor !== null && (f.anchorMap[f.anchor] = K), Te = f.input.charCodeAt(f.position); Te !== 0 && (f.firstTabInLine !== -1 && (f.position = f.firstTabInLine, k(f, "tab characters must not be used in indentation")), !(Te !== 45 || (U = f.input.charCodeAt(f.position + 1), !S(U)))); ) {
      if (me = !0, f.position++, H(f, !0, -1) && f.lineIndent <= A) {
        K.push(null), Te = f.input.charCodeAt(f.position);
        continue;
      }
      if (O = f.line, t2(f, A, s, !1, !0), K.push(f.result), H(f, !0, -1), Te = f.input.charCodeAt(f.position), (f.line === O || f.lineIndent > A) && Te !== 0)
        k(f, "bad indentation of a sequence entry");
      else if (f.lineIndent < A)
        break;
    }
    return me ? (f.tag = I, f.anchor = L, f.kind = "sequence", f.result = K, !0) : !1;
  }
  function ee(f, A, O) {
    var I, L, K, U, me, Te, Ne = f.tag, We = f.anchor, _e = {}, d2 = /* @__PURE__ */ Object.create(null), v = null, z = null, J = null, W = !1, te = !1, se;
    if (f.firstTabInLine !== -1) return !1;
    for (f.anchor !== null && (f.anchorMap[f.anchor] = _e), se = f.input.charCodeAt(f.position); se !== 0; ) {
      if (!W && f.firstTabInLine !== -1 && (f.position = f.firstTabInLine, k(f, "tab characters must not be used in indentation")), I = f.input.charCodeAt(f.position + 1), K = f.line, (se === 63 || se === 58) && S(I))
        se === 63 ? (W && (B(f, _e, d2, v, z, null, U, me, Te), v = z = J = null), te = !0, W = !0, L = !0) : W ? (W = !1, L = !0) : k(f, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), f.position += 1, se = I;
      else {
        if (U = f.line, me = f.lineStart, Te = f.position, !t2(f, O, a, !1, !0))
          break;
        if (f.line === K) {
          for (se = f.input.charCodeAt(f.position); E(se); )
            se = f.input.charCodeAt(++f.position);
          if (se === 58)
            se = f.input.charCodeAt(++f.position), S(se) || k(f, "a whitespace character is expected after the key-value separator within a block mapping"), W && (B(f, _e, d2, v, z, null, U, me, Te), v = z = J = null), te = !0, W = !1, L = !1, v = f.tag, z = f.result;
          else if (te)
            k(f, "can not read an implicit mapping pair; a colon is missed");
          else
            return f.tag = Ne, f.anchor = We, !0;
        } else if (te)
          k(f, "can not read a block mapping entry; a multiline key may not be an implicit key");
        else
          return f.tag = Ne, f.anchor = We, !0;
      }
      if ((f.line === K || f.lineIndent > A) && (W && (U = f.line, me = f.lineStart, Te = f.position), t2(f, A, l, !0, L) && (W ? z = f.result : J = f.result), W || (B(f, _e, d2, v, z, J, U, me, Te), v = z = J = null), H(f, !0, -1), se = f.input.charCodeAt(f.position)), (f.line === K || f.lineIndent > A) && se !== 0)
        k(f, "bad indentation of a mapping entry");
      else if (f.lineIndent < A)
        break;
    }
    return W && B(f, _e, d2, v, z, null, U, me, Te), te && (f.tag = Ne, f.anchor = We, f.kind = "mapping", f.result = _e), te;
  }
  function Ae(f) {
    var A, O = !1, I = !1, L, K, U;
    if (U = f.input.charCodeAt(f.position), U !== 33) return !1;
    if (f.tag !== null && k(f, "duplication of a tag property"), U = f.input.charCodeAt(++f.position), U === 60 ? (O = !0, U = f.input.charCodeAt(++f.position)) : U === 33 ? (I = !0, L = "!!", U = f.input.charCodeAt(++f.position)) : L = "!", A = f.position, O) {
      do
        U = f.input.charCodeAt(++f.position);
      while (U !== 0 && U !== 62);
      f.position < f.length ? (K = f.input.slice(A, f.position), U = f.input.charCodeAt(++f.position)) : k(f, "unexpected end of the stream within a verbatim tag");
    } else {
      for (; U !== 0 && !S(U); )
        U === 33 && (I ? k(f, "tag suffix cannot contain exclamation marks") : (L = f.input.slice(A - 1, f.position + 1), g.test(L) || k(f, "named tag handle cannot contain such characters"), I = !0, A = f.position + 1)), U = f.input.charCodeAt(++f.position);
      K = f.input.slice(A, f.position), C.test(K) && k(f, "tag suffix cannot contain flow indicator characters");
    }
    K && !b.test(K) && k(f, "tag name cannot contain such characters: " + K);
    try {
      K = decodeURIComponent(K);
    } catch {
      k(f, "tag name is malformed: " + K);
    }
    return O ? f.tag = K : i.call(f.tagMap, L) ? f.tag = f.tagMap[L] + K : L === "!" ? f.tag = "!" + K : L === "!!" ? f.tag = "tag:yaml.org,2002:" + K : k(f, 'undeclared tag handle "' + L + '"'), !0;
  }
  function Ue(f) {
    var A, O;
    if (O = f.input.charCodeAt(f.position), O !== 38) return !1;
    for (f.anchor !== null && k(f, "duplication of an anchor property"), O = f.input.charCodeAt(++f.position), A = f.position; O !== 0 && !S(O) && !_(O); )
      O = f.input.charCodeAt(++f.position);
    return f.position === A && k(f, "name of an anchor node must contain at least one character"), f.anchor = f.input.slice(A, f.position), !0;
  }
  function c2(f) {
    var A, O, I;
    if (I = f.input.charCodeAt(f.position), I !== 42) return !1;
    for (I = f.input.charCodeAt(++f.position), A = f.position; I !== 0 && !S(I) && !_(I); )
      I = f.input.charCodeAt(++f.position);
    return f.position === A && k(f, "name of an alias node must contain at least one character"), O = f.input.slice(A, f.position), i.call(f.anchorMap, O) || k(f, 'unidentified alias "' + O + '"'), f.result = f.anchorMap[O], H(f, !0, -1), !0;
  }
  function t2(f, A, O, I, L) {
    var K, U, me, Te = 1, Ne = !1, We = !1, _e, d2, v, z, J, W;
    if (f.listener !== null && f.listener("open", f), f.tag = null, f.anchor = null, f.kind = null, f.result = null, K = U = me = l === O || s === O, I && H(f, !0, -1) && (Ne = !0, f.lineIndent > A ? Te = 1 : f.lineIndent === A ? Te = 0 : f.lineIndent < A && (Te = -1)), Te === 1)
      for (; Ae(f) || Ue(f); )
        H(f, !0, -1) ? (Ne = !0, me = K, f.lineIndent > A ? Te = 1 : f.lineIndent === A ? Te = 0 : f.lineIndent < A && (Te = -1)) : me = !1;
    if (me && (me = Ne || L), (Te === 1 || l === O) && (o === O || a === O ? J = A : J = A + 1, W = f.position - f.lineStart, Te === 1 ? me && (ke(f, W) || ee(f, W, J)) || de(f, J) ? We = !0 : (U && ve(f, J) || G(f, J) || oe(f, J) ? We = !0 : c2(f) ? (We = !0, (f.tag !== null || f.anchor !== null) && k(f, "alias node should not have any properties")) : q(f, J, o === O) && (We = !0, f.tag === null && (f.tag = "?")), f.anchor !== null && (f.anchorMap[f.anchor] = f.result)) : Te === 0 && (We = me && ke(f, W))), f.tag === null)
      f.anchor !== null && (f.anchorMap[f.anchor] = f.result);
    else if (f.tag === "?") {
      for (f.result !== null && f.kind !== "scalar" && k(f, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + f.kind + '"'), _e = 0, d2 = f.implicitTypes.length; _e < d2; _e += 1)
        if (z = f.implicitTypes[_e], z.resolve(f.result)) {
          f.result = z.construct(f.result), f.tag = z.tag, f.anchor !== null && (f.anchorMap[f.anchor] = f.result);
          break;
        }
    } else if (f.tag !== "!") {
      if (i.call(f.typeMap[f.kind || "fallback"], f.tag))
        z = f.typeMap[f.kind || "fallback"][f.tag];
      else
        for (z = null, v = f.typeMap.multi[f.kind || "fallback"], _e = 0, d2 = v.length; _e < d2; _e += 1)
          if (f.tag.slice(0, v[_e].tag.length) === v[_e].tag) {
            z = v[_e];
            break;
          }
      z || k(f, "unknown tag !<" + f.tag + ">"), f.result !== null && z.kind !== f.kind && k(f, "unacceptable node kind for !<" + f.tag + '> tag; it should be "' + z.kind + '", not "' + f.kind + '"'), z.resolve(f.result, f.tag) ? (f.result = z.construct(f.result, f.tag), f.anchor !== null && (f.anchorMap[f.anchor] = f.result)) : k(f, "cannot resolve a node with !<" + f.tag + "> explicit tag");
    }
    return f.listener !== null && f.listener("close", f), f.tag !== null || f.anchor !== null || We;
  }
  function ze(f) {
    var A = f.position, O, I, L, K = !1, U;
    for (f.version = null, f.checkLineBreaks = f.legacy, f.tagMap = /* @__PURE__ */ Object.create(null), f.anchorMap = /* @__PURE__ */ Object.create(null); (U = f.input.charCodeAt(f.position)) !== 0 && (H(f, !0, -1), U = f.input.charCodeAt(f.position), !(f.lineIndent > 0 || U !== 37)); ) {
      for (K = !0, U = f.input.charCodeAt(++f.position), O = f.position; U !== 0 && !S(U); )
        U = f.input.charCodeAt(++f.position);
      for (I = f.input.slice(O, f.position), L = [], I.length < 1 && k(f, "directive name must not be less than one character in length"); U !== 0; ) {
        for (; E(U); )
          U = f.input.charCodeAt(++f.position);
        if (U === 35) {
          do
            U = f.input.charCodeAt(++f.position);
          while (U !== 0 && !w(U));
          break;
        }
        if (w(U)) break;
        for (O = f.position; U !== 0 && !S(U); )
          U = f.input.charCodeAt(++f.position);
        L.push(f.input.slice(O, f.position));
      }
      U !== 0 && he(f), i.call(xe, I) ? xe[I](f, I, L) : ce(f, 'unknown document directive "' + I + '"');
    }
    if (H(f, !0, -1), f.lineIndent === 0 && f.input.charCodeAt(f.position) === 45 && f.input.charCodeAt(f.position + 1) === 45 && f.input.charCodeAt(f.position + 2) === 45 ? (f.position += 3, H(f, !0, -1)) : K && k(f, "directives end mark is expected"), t2(f, f.lineIndent - 1, l, !1, !0), H(f, !0, -1), f.checkLineBreaks && m.test(f.input.slice(A, f.position)) && ce(f, "non-ASCII line breaks are interpreted as content"), f.documents.push(f.result), f.position === f.lineStart && Y(f)) {
      f.input.charCodeAt(f.position) === 46 && (f.position += 3, H(f, !0, -1));
      return;
    }
    if (f.position < f.length - 1)
      k(f, "end of the stream or a document separator is expected");
    else
      return;
  }
  function M(f, A) {
    f = String(f), A = A || {}, f.length !== 0 && (f.charCodeAt(f.length - 1) !== 10 && f.charCodeAt(f.length - 1) !== 13 && (f += `
`), f.charCodeAt(0) === 65279 && (f = f.slice(1)));
    var O = new N(f, A), I = f.indexOf("\0");
    for (I !== -1 && (O.position = I, k(O, "null byte is not allowed in input")), O.input += "\0"; O.input.charCodeAt(O.position) === 32; )
      O.lineIndent += 1, O.position += 1;
    for (; O.position < O.length - 1; )
      ze(O);
    return O.documents;
  }
  function R(f, A, O) {
    A !== null && typeof A == "object" && typeof O > "u" && (O = A, A = null);
    var I = M(f, O);
    if (typeof A != "function")
      return I;
    for (var L = 0, K = I.length; L < K; L += 1)
      A(I[L]);
  }
  function V(f, A) {
    var O = M(f, A);
    if (O.length !== 0) {
      if (O.length === 1)
        return O[0];
      throw new t("expected a single document in the stream, but found more");
    }
  }
  return Un.loadAll = R, Un.load = V, Un;
}
var So = {}, Sc;
function fh() {
  if (Sc) return So;
  Sc = 1;
  var e = kn(), t = Hn(), n = Cs(), r = Object.prototype.toString, i = Object.prototype.hasOwnProperty, o = 65279, a = 9, s = 10, l = 13, c = 32, u = 33, d = 34, p = 35, m = 37, C = 38, g = 39, b = 42, x = 44, w = 45, E = 58, S = 61, _ = 62, P = 63, F = 64, $ = 91, le = 93, pe = 96, fe = 123, D = 124, Q = 125, N = {};
  N[0] = "\\0", N[7] = "\\a", N[8] = "\\b", N[9] = "\\t", N[10] = "\\n", N[11] = "\\v", N[12] = "\\f", N[13] = "\\r", N[27] = "\\e", N[34] = '\\"', N[92] = "\\\\", N[133] = "\\N", N[160] = "\\_", N[8232] = "\\L", N[8233] = "\\P";
  var re = [
    "y",
    "Y",
    "yes",
    "Yes",
    "YES",
    "on",
    "On",
    "ON",
    "n",
    "N",
    "no",
    "No",
    "NO",
    "off",
    "Off",
    "OFF"
  ], k = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
  function ce(v, z) {
    var J, W, te, se, Ee, Ce, Se;
    if (z === null) return {};
    for (J = {}, W = Object.keys(z), te = 0, se = W.length; te < se; te += 1)
      Ee = W[te], Ce = String(z[Ee]), Ee.slice(0, 2) === "!!" && (Ee = "tag:yaml.org,2002:" + Ee.slice(2)), Se = v.compiledTypeMap.fallback[Ee], Se && i.call(Se.styleAliases, Ce) && (Ce = Se.styleAliases[Ce]), J[Ee] = Ce;
    return J;
  }
  function xe(v) {
    var z, J, W;
    if (z = v.toString(16).toUpperCase(), v <= 255)
      J = "x", W = 2;
    else if (v <= 65535)
      J = "u", W = 4;
    else if (v <= 4294967295)
      J = "U", W = 8;
    else
      throw new t("code point within a string may not be greater than 0xFFFFFFFF");
    return "\\" + J + e.repeat("0", W - z.length) + z;
  }
  var X = 1, j = 2;
  function B(v) {
    this.schema = v.schema || n, this.indent = Math.max(1, v.indent || 2), this.noArrayIndent = v.noArrayIndent || !1, this.skipInvalid = v.skipInvalid || !1, this.flowLevel = e.isNothing(v.flowLevel) ? -1 : v.flowLevel, this.styleMap = ce(this.schema, v.styles || null), this.sortKeys = v.sortKeys || !1, this.lineWidth = v.lineWidth || 80, this.noRefs = v.noRefs || !1, this.noCompatMode = v.noCompatMode || !1, this.condenseFlow = v.condenseFlow || !1, this.quotingType = v.quotingType === '"' ? j : X, this.forceQuotes = v.forceQuotes || !1, this.replacer = typeof v.replacer == "function" ? v.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
  }
  function he(v, z) {
    for (var J = e.repeat(" ", z), W = 0, te = -1, se = "", Ee, Ce = v.length; W < Ce; )
      te = v.indexOf(`
`, W), te === -1 ? (Ee = v.slice(W), W = Ce) : (Ee = v.slice(W, te + 1), W = te + 1), Ee.length && Ee !== `
` && (se += J), se += Ee;
    return se;
  }
  function H(v, z) {
    return `
` + e.repeat(" ", v.indent * z);
  }
  function Y(v, z) {
    var J, W, te;
    for (J = 0, W = v.implicitTypes.length; J < W; J += 1)
      if (te = v.implicitTypes[J], te.resolve(z))
        return !0;
    return !1;
  }
  function ie(v) {
    return v === c || v === a;
  }
  function q(v) {
    return 32 <= v && v <= 126 || 161 <= v && v <= 55295 && v !== 8232 && v !== 8233 || 57344 <= v && v <= 65533 && v !== o || 65536 <= v && v <= 1114111;
  }
  function G(v) {
    return q(v) && v !== o && v !== l && v !== s;
  }
  function oe(v, z, J) {
    var W = G(v), te = W && !ie(v);
    return (
      // ns-plain-safe
      (J ? (
        // c = flow-in
        W
      ) : W && v !== x && v !== $ && v !== le && v !== fe && v !== Q) && v !== p && !(z === E && !te) || G(z) && !ie(z) && v === p || z === E && te
    );
  }
  function de(v) {
    return q(v) && v !== o && !ie(v) && v !== w && v !== P && v !== E && v !== x && v !== $ && v !== le && v !== fe && v !== Q && v !== p && v !== C && v !== b && v !== u && v !== D && v !== S && v !== _ && v !== g && v !== d && v !== m && v !== F && v !== pe;
  }
  function ve(v) {
    return !ie(v) && v !== E;
  }
  function ke(v, z) {
    var J = v.charCodeAt(z), W;
    return J >= 55296 && J <= 56319 && z + 1 < v.length && (W = v.charCodeAt(z + 1), W >= 56320 && W <= 57343) ? (J - 55296) * 1024 + W - 56320 + 65536 : J;
  }
  function ee(v) {
    var z = /^\n* /;
    return z.test(v);
  }
  var Ae = 1, Ue = 2, c2 = 3, t2 = 4, ze = 5;
  function M(v, z, J, W, te, se, Ee, Ce) {
    var Se, Le = 0, u2 = null, m2 = !1, n2 = !1, zn = W !== -1, $0 = -1, B0 = de(ke(v, 0)) && ve(ke(v, v.length - 1));
    if (z || Ee)
      for (Se = 0; Se < v.length; Le >= 65536 ? Se += 2 : Se++) {
        if (Le = ke(v, Se), !q(Le))
          return ze;
        B0 = B0 && oe(Le, u2, Ce), u2 = Le;
      }
    else {
      for (Se = 0; Se < v.length; Le >= 65536 ? Se += 2 : Se++) {
        if (Le = ke(v, Se), Le === s)
          m2 = !0, zn && (n2 = n2 || // Foldable line = too long, and not more-indented.
          Se - $0 - 1 > W && v[$0 + 1] !== " ", $0 = Se);
        else if (!q(Le))
          return ze;
        B0 = B0 && oe(Le, u2, Ce), u2 = Le;
      }
      n2 = n2 || zn && Se - $0 - 1 > W && v[$0 + 1] !== " ";
    }
    return !m2 && !n2 ? B0 && !Ee && !te(v) ? Ae : se === j ? ze : Ue : J > 9 && ee(v) ? ze : Ee ? se === j ? ze : Ue : n2 ? t2 : c2;
  }
  function R(v, z, J, W, te) {
    v.dump = function() {
      if (z.length === 0)
        return v.quotingType === j ? '""' : "''";
      if (!v.noCompatMode && (re.indexOf(z) !== -1 || k.test(z)))
        return v.quotingType === j ? '"' + z + '"' : "'" + z + "'";
      var se = v.indent * Math.max(1, J), Ee = v.lineWidth === -1 ? -1 : Math.max(Math.min(v.lineWidth, 40), v.lineWidth - se), Ce = W || v.flowLevel > -1 && J >= v.flowLevel;
      function Se(Le) {
        return Y(v, Le);
      }
      switch (M(
        z,
        Ce,
        v.indent,
        Ee,
        Se,
        v.quotingType,
        v.forceQuotes && !W,
        te
      )) {
        case Ae:
          return z;
        case Ue:
          return "'" + z.replace(/'/g, "''") + "'";
        case c2:
          return "|" + V(z, v.indent) + f(he(z, se));
        case t2:
          return ">" + V(z, v.indent) + f(he(A(z, Ee), se));
        case ze:
          return '"' + I(z) + '"';
        default:
          throw new t("impossible error: invalid scalar style");
      }
    }();
  }
  function V(v, z) {
    var J = ee(v) ? String(z) : "", W = v[v.length - 1] === `
`, te = W && (v[v.length - 2] === `
` || v === `
`), se = te ? "+" : W ? "" : "-";
    return J + se + `
`;
  }
  function f(v) {
    return v[v.length - 1] === `
` ? v.slice(0, -1) : v;
  }
  function A(v, z) {
    for (var J = /(\n+)([^\n]*)/g, W = function() {
      var Le = v.indexOf(`
`);
      return Le = Le !== -1 ? Le : v.length, J.lastIndex = Le, O(v.slice(0, Le), z);
    }(), te = v[0] === `
` || v[0] === " ", se, Ee; Ee = J.exec(v); ) {
      var Ce = Ee[1], Se = Ee[2];
      se = Se[0] === " ", W += Ce + (!te && !se && Se !== "" ? `
` : "") + O(Se, z), te = se;
    }
    return W;
  }
  function O(v, z) {
    if (v === "" || v[0] === " ") return v;
    for (var J = / [^ ]/g, W, te = 0, se, Ee = 0, Ce = 0, Se = ""; W = J.exec(v); )
      Ce = W.index, Ce - te > z && (se = Ee > te ? Ee : Ce, Se += `
` + v.slice(te, se), te = se + 1), Ee = Ce;
    return Se += `
`, v.length - te > z && Ee > te ? Se += v.slice(te, Ee) + `
` + v.slice(Ee + 1) : Se += v.slice(te), Se.slice(1);
  }
  function I(v) {
    for (var z = "", J = 0, W, te = 0; te < v.length; J >= 65536 ? te += 2 : te++)
      J = ke(v, te), W = N[J], !W && q(J) ? (z += v[te], J >= 65536 && (z += v[te + 1])) : z += W || xe(J);
    return z;
  }
  function L(v, z, J) {
    var W = "", te = v.tag, se, Ee, Ce;
    for (se = 0, Ee = J.length; se < Ee; se += 1)
      Ce = J[se], v.replacer && (Ce = v.replacer.call(J, String(se), Ce)), (Ne(v, z, Ce, !1, !1) || typeof Ce > "u" && Ne(v, z, null, !1, !1)) && (W !== "" && (W += "," + (v.condenseFlow ? "" : " ")), W += v.dump);
    v.tag = te, v.dump = "[" + W + "]";
  }
  function K(v, z, J, W) {
    var te = "", se = v.tag, Ee, Ce, Se;
    for (Ee = 0, Ce = J.length; Ee < Ce; Ee += 1)
      Se = J[Ee], v.replacer && (Se = v.replacer.call(J, String(Ee), Se)), (Ne(v, z + 1, Se, !0, !0, !1, !0) || typeof Se > "u" && Ne(v, z + 1, null, !0, !0, !1, !0)) && ((!W || te !== "") && (te += H(v, z)), v.dump && s === v.dump.charCodeAt(0) ? te += "-" : te += "- ", te += v.dump);
    v.tag = se, v.dump = te || "[]";
  }
  function U(v, z, J) {
    var W = "", te = v.tag, se = Object.keys(J), Ee, Ce, Se, Le, u2;
    for (Ee = 0, Ce = se.length; Ee < Ce; Ee += 1)
      u2 = "", W !== "" && (u2 += ", "), v.condenseFlow && (u2 += '"'), Se = se[Ee], Le = J[Se], v.replacer && (Le = v.replacer.call(J, Se, Le)), Ne(v, z, Se, !1, !1) && (v.dump.length > 1024 && (u2 += "? "), u2 += v.dump + (v.condenseFlow ? '"' : "") + ":" + (v.condenseFlow ? "" : " "), Ne(v, z, Le, !1, !1) && (u2 += v.dump, W += u2));
    v.tag = te, v.dump = "{" + W + "}";
  }
  function me(v, z, J, W) {
    var te = "", se = v.tag, Ee = Object.keys(J), Ce, Se, Le, u2, m2, n2;
    if (v.sortKeys === !0)
      Ee.sort();
    else if (typeof v.sortKeys == "function")
      Ee.sort(v.sortKeys);
    else if (v.sortKeys)
      throw new t("sortKeys must be a boolean or a function");
    for (Ce = 0, Se = Ee.length; Ce < Se; Ce += 1)
      n2 = "", (!W || te !== "") && (n2 += H(v, z)), Le = Ee[Ce], u2 = J[Le], v.replacer && (u2 = v.replacer.call(J, Le, u2)), Ne(v, z + 1, Le, !0, !0, !0) && (m2 = v.tag !== null && v.tag !== "?" || v.dump && v.dump.length > 1024, m2 && (v.dump && s === v.dump.charCodeAt(0) ? n2 += "?" : n2 += "? "), n2 += v.dump, m2 && (n2 += H(v, z)), Ne(v, z + 1, u2, !0, m2) && (v.dump && s === v.dump.charCodeAt(0) ? n2 += ":" : n2 += ": ", n2 += v.dump, te += n2));
    v.tag = se, v.dump = te || "{}";
  }
  function Te(v, z, J) {
    var W, te, se, Ee, Ce, Se;
    for (te = J ? v.explicitTypes : v.implicitTypes, se = 0, Ee = te.length; se < Ee; se += 1)
      if (Ce = te[se], (Ce.instanceOf || Ce.predicate) && (!Ce.instanceOf || typeof z == "object" && z instanceof Ce.instanceOf) && (!Ce.predicate || Ce.predicate(z))) {
        if (J ? Ce.multi && Ce.representName ? v.tag = Ce.representName(z) : v.tag = Ce.tag : v.tag = "?", Ce.represent) {
          if (Se = v.styleMap[Ce.tag] || Ce.defaultStyle, r.call(Ce.represent) === "[object Function]")
            W = Ce.represent(z, Se);
          else if (i.call(Ce.represent, Se))
            W = Ce.represent[Se](z, Se);
          else
            throw new t("!<" + Ce.tag + '> tag resolver accepts not "' + Se + '" style');
          v.dump = W;
        }
        return !0;
      }
    return !1;
  }
  function Ne(v, z, J, W, te, se, Ee) {
    v.tag = null, v.dump = J, Te(v, J, !1) || Te(v, J, !0);
    var Ce = r.call(v.dump), Se = W, Le;
    W && (W = v.flowLevel < 0 || v.flowLevel > z);
    var u2 = Ce === "[object Object]" || Ce === "[object Array]", m2, n2;
    if (u2 && (m2 = v.duplicates.indexOf(J), n2 = m2 !== -1), (v.tag !== null && v.tag !== "?" || n2 || v.indent !== 2 && z > 0) && (te = !1), n2 && v.usedDuplicates[m2])
      v.dump = "*ref_" + m2;
    else {
      if (u2 && n2 && !v.usedDuplicates[m2] && (v.usedDuplicates[m2] = !0), Ce === "[object Object]")
        W && Object.keys(v.dump).length !== 0 ? (me(v, z, v.dump, te), n2 && (v.dump = "&ref_" + m2 + v.dump)) : (U(v, z, v.dump), n2 && (v.dump = "&ref_" + m2 + " " + v.dump));
      else if (Ce === "[object Array]")
        W && v.dump.length !== 0 ? (v.noArrayIndent && !Ee && z > 0 ? K(v, z - 1, v.dump, te) : K(v, z, v.dump, te), n2 && (v.dump = "&ref_" + m2 + v.dump)) : (L(v, z, v.dump), n2 && (v.dump = "&ref_" + m2 + " " + v.dump));
      else if (Ce === "[object String]")
        v.tag !== "?" && R(v, v.dump, z, se, Se);
      else {
        if (Ce === "[object Undefined]")
          return !1;
        if (v.skipInvalid) return !1;
        throw new t("unacceptable kind of an object to dump " + Ce);
      }
      v.tag !== null && v.tag !== "?" && (Le = encodeURI(
        v.tag[0] === "!" ? v.tag.slice(1) : v.tag
      ).replace(/!/g, "%21"), v.tag[0] === "!" ? Le = "!" + Le : Le.slice(0, 18) === "tag:yaml.org,2002:" ? Le = "!!" + Le.slice(18) : Le = "!<" + Le + ">", v.dump = Le + " " + v.dump);
    }
    return !0;
  }
  function We(v, z) {
    var J = [], W = [], te, se;
    for (_e(v, J, W), te = 0, se = W.length; te < se; te += 1)
      z.duplicates.push(J[W[te]]);
    z.usedDuplicates = new Array(se);
  }
  function _e(v, z, J) {
    var W, te, se;
    if (v !== null && typeof v == "object")
      if (te = z.indexOf(v), te !== -1)
        J.indexOf(te) === -1 && J.push(te);
      else if (z.push(v), Array.isArray(v))
        for (te = 0, se = v.length; te < se; te += 1)
          _e(v[te], z, J);
      else
        for (W = Object.keys(v), te = 0, se = W.length; te < se; te += 1)
          _e(v[W[te]], z, J);
  }
  function d2(v, z) {
    z = z || {};
    var J = new B(z);
    J.noRefs || We(v, J);
    var W = v;
    return J.replacer && (W = J.replacer.call({ "": W }, "", W)), Ne(J, 0, W, !0, !0) ? J.dump + `
` : "";
  }
  return So.dump = d2, So;
}
var Mc;
function dh() {
  if (Mc) return w2;
  Mc = 1;
  var e = uh(), t = fh();
  function n(r, i) {
    return function() {
      throw new Error("Function yaml." + r + " is removed in js-yaml 4. Use yaml." + i + " instead, which is now safe by default.");
    };
  }
  return w2.Type = T2(), w2.Schema = Cu(), w2.FAILSAFE_SCHEMA = bu(), w2.JSON_SCHEMA = Su(), w2.CORE_SCHEMA = Mu(), w2.DEFAULT_SCHEMA = Cs(), w2.load = e.load, w2.loadAll = e.loadAll, w2.dump = t.dump, w2.YAMLException = Hn(), w2.types = {
    binary: Ou(),
    float: Eu(),
    map: yu(),
    null: xu(),
    pairs: Fu(),
    set: Pu(),
    timestamp: Au(),
    bool: wu(),
    int: _u(),
    merge: Tu(),
    omap: Ru(),
    seq: vu(),
    str: gu()
  }, w2.safeLoad = n("safeLoad", "load"), w2.safeLoadAll = n("safeLoadAll", "loadAll"), w2.safeDump = n("safeDump", "dump"), w2;
}
var P2 = a2 && a2.__assign || function() {
  return P2 = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, P2.apply(this, arguments);
}, ph = a2 && a2.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var i = Object.getOwnPropertyDescriptor(t, n);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, i);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), hh = a2 && a2.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), mh = a2 && a2.__importStar || function(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var n in e) n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && ph(t, e, n);
  return hh(t, e), t;
}, Wn = a2 && a2.__awaiter || function(e, t, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(a) {
      a(o);
    });
  }
  return new (n || (n = Promise))(function(o, a) {
    function s(u) {
      try {
        c(r.next(u));
      } catch (d) {
        a(d);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      u.done ? o(u.value) : i(u.value).then(s, l);
    }
    c((r = r.apply(e, t || [])).next());
  });
}, qn = a2 && a2.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(c) {
    return function(u) {
      return l([c, u]);
    };
  }
  function l(c) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, c[0] && (n = 0)), n; ) try {
      if (r = 1, i && (o = c[0] & 2 ? i.return : c[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, c[1])).done) return o;
      switch (i = 0, o && (c = [c[0] & 2, o.value]), c[0]) {
        case 0:
        case 1:
          o = c;
          break;
        case 4:
          return n.label++, { value: c[1], done: !1 };
        case 5:
          n.label++, i = c[1], c = [0];
          continue;
        case 7:
          c = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (c[0] === 6 || c[0] === 2)) {
            n = 0;
            continue;
          }
          if (c[0] === 3 && (!o || c[1] > o[0] && c[1] < o[3])) {
            n.label = c[1];
            break;
          }
          if (c[0] === 6 && n.label < o[1]) {
            n.label = o[1], o = c;
            break;
          }
          if (o && n.label < o[2]) {
            n.label = o[2], n.ops.push(c);
            break;
          }
          o[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      c = t.call(e, n);
    } catch (u) {
      c = [6, u], i = 0;
    } finally {
      r = o = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}, q0 = a2 && a2.__values || function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, S0 = a2 && a2.__read || function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), i, o = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(i = r.next()).done; ) o.push(i.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      i && !i.done && (n = r.return) && n.call(r);
    } finally {
      if (a) throw a.error;
    }
  }
  return o;
}, Yn = a2 && a2.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, o; r < i; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}, ku = a2 && a2.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(rn, "__esModule", { value: !0 });
rn.OpenAPIClientAxios = void 0;
var Ch = ku(Yp), Ac = ku(fu), Tc = du, bt = ms, Mo = "default", gh = (
  /** @class */
  function() {
    function e(t) {
      var n, r = this;
      this.getClient = function() {
        return Wn(r, void 0, void 0, function() {
          return qn(this, function(o) {
            return this.initialized ? [2, this.instance] : [2, this.init()];
          });
        });
      }, this.init = function() {
        return Wn(r, void 0, void 0, function() {
          return qn(this, function(o) {
            switch (o.label) {
              case 0:
                return [4, this.loadDocument()];
              case 1:
                return o.sent(), this.definition = (0, Tc.dereferenceSync)(this.document), this.instance = this.createAxiosInstance(), this.initialized = !0, [2, this.instance];
            }
          });
        });
      }, this.initSync = function() {
        if (typeof r.inputDocument != "object")
          throw new Error(".initSync() can't be called with a non-object definition. Please use .init()");
        return r.document = r.inputDocument, r.definition = (0, Tc.dereferenceSync)(r.document), r.instance = r.createAxiosInstance(), r.initialized = !0, r.instance;
      }, this.getAxiosInstance = function() {
        var o = Ch.default.create(r.axiosConfigDefaults);
        return o;
      }, this.createAxiosInstance = function() {
        var o, a, s = r.getAxiosInstance(), l = r.getBaseURL();
        l && !r.axiosConfigDefaults.baseURL && (s.defaults.baseURL = l);
        var c = r.getOperations();
        try {
          for (var u = q0(c), d = u.next(); !d.done; d = u.next()) {
            var p = d.value, m = p.operationId;
            m && (s[r.transformOperationName(m)] = r.createOperationMethod(p));
          }
        } catch (b) {
          o = { error: b };
        } finally {
          try {
            d && !d.done && (a = u.return) && a.call(u);
          } finally {
            if (o) throw o.error;
          }
        }
        s.paths = {};
        var C = function(b) {
          if (r.definition.paths[b]) {
            s.paths[b] || (s.paths[b] = {});
            var x = r.definition.paths[b], w = function(S) {
              if (x[S] && Object.values(bt.HttpMethod).includes(S)) {
                var _ = S, P = r.getOperations().find(function(F) {
                  return F.method === _ && F.path === b;
                });
                s.paths[b][_] = r.createOperationMethod(P);
              }
            };
            for (var E in x)
              w(E);
          }
        };
        for (var g in r.definition.paths)
          C(g);
        return s.api = r, s;
      }, this.getBaseURL = function(o) {
        var a, s, l, c;
        if (r.definition) {
          if (o && (typeof o == "string" && (o = r.getOperation(o)), o.servers && o.servers[0]))
            return o.servers[0].url;
          var u;
          if (typeof r.defaultServer == "number")
            r.definition.servers && r.definition.servers[r.defaultServer] && (u = r.definition.servers[r.defaultServer]);
          else if (typeof r.defaultServer == "string")
            try {
              for (var d = q0(r.definition.servers), p = d.next(); !p.done; p = d.next()) {
                var m = p.value;
                if (m.description === r.defaultServer) {
                  u = m;
                  break;
                }
              }
            } catch (F) {
              a = { error: F };
            } finally {
              try {
                p && !p.done && (s = d.return) && s.call(d);
              } finally {
                if (a) throw a.error;
              }
            }
          else r.defaultServer.url && (u = r.defaultServer);
          if (u) {
            var C = u.url, g = u.variables, b = (0, Ac.default)(C);
            if (!b.names.length)
              return C;
            var x = {};
            try {
              for (var w = q0(b.names), E = w.next(); !E.done; E = w.next()) {
                var S = E.value, _ = r.baseURLVariables[S];
                if (_ !== void 0 && g[S].enum) {
                  if (typeof _ == "number") {
                    var P = g[S].enum[_];
                    if (P)
                      x[S] = P;
                    else
                      throw new Error("index ".concat(_, " out of range for enum of baseURL variable: ").concat(S, ";               enum max index is ").concat(g[S].enum.length - 1));
                  } else if (typeof _ == "string")
                    if (g[S].enum.includes(_))
                      x[S] = _;
                    else
                      throw new Error("".concat(_, " is not a valid entry for baseURL variable ").concat(S, ";                 variable must be of the following: ").concat(g[S].enum.join(", ")));
                } else
                  x[S] = g[S].default;
              }
            } catch (F) {
              l = { error: F };
            } finally {
              try {
                E && !E.done && (c = w.return) && c.call(w);
              } finally {
                if (l) throw l.error;
              }
            }
            return b.path(x);
          }
        }
      }, this.getAxiosConfigForOperation = function(o, a) {
        typeof o == "string" && (o = r.getOperation(o));
        var s = r.getRequestConfigForOperation(o, a), l = {
          method: s.method,
          url: s.path,
          data: s.payload,
          params: s.query,
          headers: s.headers
        }, c = o.servers;
        c && c[0] && (l.baseURL = c[0].url);
        var u = S0(a, 3), d = u[2];
        return P2(P2(P2({}, l), d), { params: P2(P2({}, l == null ? void 0 : l.params), d == null ? void 0 : d.params), headers: P2(P2({}, l == null ? void 0 : l.headers), d == null ? void 0 : d.headers) });
      }, this.getRequestConfigForOperation = function(o, a) {
        var s, l, c, u, d, p, m, C, g, b;
        typeof o == "string" && (o = r.getOperation(o));
        var x = {}, w = new URLSearchParams(), E = {}, S = {}, _ = {}, P = o.parameters || [], F = function(ze, M, R) {
          var V, f;
          switch (R) {
            case bt.ParamType.Path:
              x[ze] = M;
              break;
            case bt.ParamType.Query:
              if (Array.isArray(M))
                try {
                  for (var A = q0(M), O = A.next(); !O.done; O = A.next()) {
                    var I = O.value;
                    w.append(ze, I);
                  }
                } catch (L) {
                  V = { error: L };
                } finally {
                  try {
                    O && !O.done && (f = A.return) && f.call(A);
                  } finally {
                    if (V) throw V.error;
                  }
                }
              else
                w.append(ze, M);
              E[ze] = M;
              break;
            case bt.ParamType.Header:
              S[ze] = M;
              break;
            case bt.ParamType.Cookie:
              _[ze] = M;
              break;
          }
        }, $ = function(ze) {
          var M = P.find(function(R) {
            var V = R.name;
            return V === ze;
          });
          return M ? M.in : bt.ParamType.Query;
        }, le = function() {
          var ze = P.find(function(R) {
            var V = R.required;
            return V === !0;
          });
          if (ze)
            return ze;
          var M = P[0];
          if (M)
            return M;
        }, pe = S0(a, 2), fe = pe[0], D = pe[1];
        if (Array.isArray(fe))
          try {
            for (var Q = q0(fe), N = Q.next(); !N.done; N = Q.next()) {
              var re = N.value;
              F(re.name, re.value, re.in || $(re.name));
            }
          } catch (ze) {
            s = { error: ze };
          } finally {
            try {
              N && !N.done && (l = Q.return) && l.call(Q);
            } finally {
              if (s) throw s.error;
            }
          }
        else if (typeof fe == "object")
          for (var k in fe)
            fe[k] !== void 0 && F(k, fe[k], $(k));
        else if (fe) {
          var ce = le();
          if (!ce)
            throw new Error("No parameters found for operation ".concat(o.operationId));
          F(ce.name, fe, ce.in);
        }
        var xe = (0, Ac.default)(o.path);
        try {
          for (var X = q0(xe.names), j = X.next(); !j.done; j = X.next()) {
            var B = j.value, he = x[B];
            x[B] = "".concat(he);
          }
        } catch (ze) {
          c = { error: ze };
        } finally {
          try {
            j && !j.done && (u = X.return) && u.call(X);
          } finally {
            if (c) throw c.error;
          }
        }
        var H = xe.path(x), Y = w.toString(), ie = "".concat(r.getBaseURL(o)).concat(H).concat(Y ? "?".concat(Y) : ""), q = r.client.defaults.headers;
        try {
          for (var G = q0(Object.entries((g = q.common) !== null && g !== void 0 ? g : {})), oe = G.next(); !oe.done; oe = G.next()) {
            var de = S0(oe.value, 2), ve = de[0], ke = de[1];
            S[ve] = ke;
          }
        } catch (ze) {
          d = { error: ze };
        } finally {
          try {
            oe && !oe.done && (p = G.return) && p.call(G);
          } finally {
            if (d) throw d.error;
          }
        }
        if (r.applyMethodCommonHeaders) {
          var ee = (b = q[o.method]) !== null && b !== void 0 ? b : {};
          try {
            for (var Ae = q0(Object.entries(ee)), Ue = Ae.next(); !Ue.done; Ue = Ae.next()) {
              var c2 = S0(Ue.value, 2), ve = c2[0], ke = c2[1];
              S[ve] = ke;
            }
          } catch (ze) {
            m = { error: ze };
          } finally {
            try {
              Ue && !Ue.done && (C = Ae.return) && C.call(Ae);
            } finally {
              if (m) throw m.error;
            }
          }
        }
        var t2 = {
          method: o.method,
          url: ie,
          path: H,
          pathParams: x,
          query: E,
          queryString: Y,
          headers: S,
          cookies: _,
          payload: D
        };
        return t2;
      }, this.getOperations = function() {
        var o, a = ((o = r.definition) === null || o === void 0 ? void 0 : o.paths) || {};
        return Object.entries(a).flatMap(function(s) {
          var l = S0(s, 2), c = l[0], u = l[1];
          return Object.values(bt.HttpMethod).map(function(d) {
            return { path: c, method: d, operation: u[d] };
          }).filter(function(d) {
            var p = d.operation;
            return p;
          }).map(function(d) {
            var p, m = d.operation, C = d.method, g = P2(P2({}, typeof m == "object" ? m : {}), { path: c, method: C });
            return u.parameters && (g.parameters = Yn(Yn([], S0(g.parameters || []), !1), S0(u.parameters), !1)), u.servers && (g.servers = Yn(Yn([], S0(g.servers || []), !1), S0(u.servers), !1)), g.security = (p = g.security) !== null && p !== void 0 ? p : r.definition.security, g;
          });
        });
      }, this.getOperation = function(o) {
        return r.getOperations().find(function(a) {
          return a.operationId === o;
        });
      }, this.createOperationMethod = function(o) {
        var a = function() {
          for (var s = [], l = 0; l < arguments.length; l++)
            s[l] = arguments[l];
          return Wn(r, void 0, void 0, function() {
            var c, u;
            return qn(this, function(d) {
              return c = this.getAxiosConfigForOperation(o, s), u = this.getRunner(o.operationId), [2, u.runRequest(c, o, u.context)];
            });
          });
        };
        return r.transformOperationMethod(a, o);
      };
      var i = P2(P2({ quick: !1, withServer: 0, baseURLVariables: {}, transformOperationName: function(o) {
        return o;
      }, transformOperationMethod: function(o) {
        return o;
      }, axiosRunner: function(o) {
        return r.client.request(o);
      }, applyMethodCommonHeaders: !1 }, t), { axiosConfigDefaults: P2({}, t.axiosConfigDefaults || {}) });
      this.inputDocument = i.definition, this.quick = i.quick, this.axiosConfigDefaults = i.axiosConfigDefaults, this.defaultServer = i.withServer, this.baseURLVariables = i.baseURLVariables, this.applyMethodCommonHeaders = i.applyMethodCommonHeaders, this.transformOperationName = i.transformOperationName, this.transformOperationMethod = i.transformOperationMethod, this.runners = (n = {}, n[Mo] = { runRequest: i.axiosRunner }, n);
    }
    return Object.defineProperty(e.prototype, "client", {
      /**
       * Returns the instance of OpenAPIClient
       *
       * @readonly
       * @type {OpenAPIClient}
       * @memberof OpenAPIClientAxios
       */
      get: function() {
        return this.instance;
      },
      enumerable: !1,
      configurable: !0
    }), e.prototype.withServer = function(t, n) {
      n === void 0 && (n = {}), this.defaultServer = t, this.baseURLVariables = n;
    }, e.prototype.loadDocument = function() {
      var t;
      return Wn(this, void 0, void 0, function() {
        var n, r, i, o;
        return qn(this, function(a) {
          switch (a.label) {
            case 0:
              return typeof this.inputDocument != "object" ? [3, 1] : (this.document = this.inputDocument, [3, 6]);
            case 1:
              return n = this.getAxiosInstance(), [4, n.get(this.inputDocument)];
            case 2:
              return r = a.sent(), typeof r.data != "object" ? [3, 3] : (this.document = r.data, [3, 6]);
            case 3:
              return typeof r.data == "string" && (!((t = r.headers["content-type"]) === null || t === void 0) && t.match(/ya?ml/)) ? [4, Promise.resolve().then(function() {
                return mh(dh());
              })] : [3, 5];
            case 4:
              return i = a.sent(), this.document = i.load(r.data), [3, 6];
            case 5:
              throw o = new Error("Invalid response fetching OpenAPI definition: ".concat(r)), o.response = r, o;
            case 6:
              return [2, this.document];
          }
        });
      });
    }, e.prototype.registerRunner = function(t, n) {
      this.runners[n ?? Mo] = t;
    }, e.prototype.getRunner = function(t) {
      var n;
      return (n = this.runners[t]) !== null && n !== void 0 ? n : this.runners[Mo];
    }, e;
  }()
);
rn.OpenAPIClientAxios = gh;
(function(e) {
  var t = a2 && a2.__createBinding || (Object.create ? function(i, o, a, s) {
    s === void 0 && (s = a);
    var l = Object.getOwnPropertyDescriptor(o, a);
    (!l || ("get" in l ? !o.__esModule : l.writable || l.configurable)) && (l = { enumerable: !0, get: function() {
      return o[a];
    } }), Object.defineProperty(i, s, l);
  } : function(i, o, a, s) {
    s === void 0 && (s = a), i[s] = o[a];
  }), n = a2 && a2.__exportStar || function(i, o) {
    for (var a in i) a !== "default" && !Object.prototype.hasOwnProperty.call(o, a) && t(o, i, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = rn;
  e.default = r.OpenAPIClientAxios, n(rn, e), n(ms, e);
})(Z3);
const vh = /* @__PURE__ */ g3(Z3), k2 = class k2 {
  constructor() {
  }
  static configure(t) {
    k2.serverUrl = t;
  }
  static async getInstance() {
    if (!k2.serverUrl)
      throw new Error("ApiClient not configured. Please call ApiClient.configure(serverUrl) before using it.");
    return k2.instance ? k2.instance : (k2.initializing || (k2.initializing = (async () => {
      const t = new vh({
        definition: `${this.serverUrl}/wd-media-api/docs.jsonopenapi`,
        transformOperationMethod: (r, i) => (o, a, s) => (i.method === "patch" && (s = s || {}, s.headers = {
          "Content-Type": "application/merge-patch+json",
          ...s.headers
        }), r(o, a, s))
      });
      t.withServer({ url: String(this.serverUrl) });
      const n = await t.init();
      return k2.instance = n, k2.initializing = null, n;
    })()), k2.initializing);
  }
};
qt(k2, "instance", null), qt(k2, "initializing", null), qt(k2, "serverUrl", null);
let Y2 = k2;
const yh = 1, bh = 1e6;
let Ao = 0;
function xh() {
  return Ao = (Ao + 1) % Number.MAX_SAFE_INTEGER, Ao.toString();
}
const To = /* @__PURE__ */ new Map(), Oc = (e) => {
  if (To.has(e))
    return;
  const t = setTimeout(() => {
    To.delete(e), Y1({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, bh);
  To.set(e, t);
}, wh = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, yh)
      };
    case "UPDATE_TOAST":
      return {
        ...e,
        toasts: e.toasts.map(
          (n) => n.id === t.toast.id ? { ...n, ...t.toast } : n
        )
      };
    case "DISMISS_TOAST": {
      const { toastId: n } = t;
      return n ? Oc(n) : e.toasts.forEach((r) => {
        Oc(r.id);
      }), {
        ...e,
        toasts: e.toasts.map(
          (r) => r.id === n || n === void 0 ? {
            ...r,
            open: !1
          } : r
        )
      };
    }
    case "REMOVE_TOAST":
      return t.toastId === void 0 ? {
        ...e,
        toasts: []
      } : {
        ...e,
        toasts: e.toasts.filter((n) => n.id !== t.toastId)
      };
  }
}, fr = [];
let dr = { toasts: [] };
function Y1(e) {
  dr = wh(dr, e), fr.forEach((t) => {
    t(dr);
  });
}
function Hu({ ...e }) {
  const t = xh(), n = (i) => Y1({
    type: "UPDATE_TOAST",
    toast: { ...i, id: t }
  }), r = () => Y1({ type: "DISMISS_TOAST", toastId: t });
  return Y1({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (i) => {
        i || r();
      }
    }
  }), {
    id: t,
    dismiss: r,
    update: n
  };
}
function Nu() {
  const [e, t] = y.useState(dr);
  return y.useEffect(() => (fr.push(t), () => {
    const n = fr.indexOf(t);
    n > -1 && fr.splice(n, 1);
  }), [e]), {
    ...e,
    toast: Hu,
    dismiss: (n) => Y1({ type: "DISMISS_TOAST", toastId: n })
  };
}
const xa = (e, t = "default", n = void 0) => {
  Hu({
    title: e,
    description: n,
    variant: t
  });
}, Lu = {
  items: [],
  status: "idle",
  error: null,
  view: null,
  updateStatus: "idle",
  updateError: null
}, ot = I0(
  "fetch",
  async (e) => (await (await Y2.getInstance()).getMedias(e, null, {
    headers: {
      Accept: "application/ld+json"
    }
  })).data
), Vu = async (e) => (await (await Y2.getInstance()).getMedia({ id: String(e) }, null, {})).data;
I0(
  "fetchOne",
  Vu
);
const pr = I0(
  "patch",
  async (e) => (await (await Y2.getInstance()).patchMedia(e.id, e)).data
), hr = I0(
  "patchFile",
  async (e) => {
    const t = new FormData();
    return t.append("file", e.file), (await (await Y2.getInstance()).patchMediaFile(e.id, t, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })).data;
  }
), mr = I0(
  "createMedia",
  async (e) => {
    const t = new FormData();
    return t.append("file", e.file), (await (await Y2.getInstance()).postMedia(null, t, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })).data;
  }
), ju = as({
  name: "media",
  initialState: Lu,
  reducers: {
    addItem(e, t) {
      e.items.push(t.payload);
    },
    removeItem(e, t) {
      e.items = e.items.filter((n) => n.id !== t.payload);
    },
    setLoading(e) {
      e.status = "loading";
    },
    setSucceeded(e) {
      e.status = "succeeded";
    },
    setFailed(e, t) {
      e.status = "failed", e.error = t.payload;
    }
  },
  extraReducers: (e) => {
    e.addCase(ot.pending, (t) => {
      t.status = "loading", t.view = null;
    }).addCase(ot.fulfilled, (t, n) => {
      t.status = "succeeded", t.items = n.payload["hydra:member"], t.view = n.payload["hydra:view"];
    }).addCase(ot.rejected, (t, n) => {
      t.status = "failed", t.view = null, t.error = n.error.message || "Failed to fetch media items";
    }), e.addCase(pr.pending, (t) => {
      t.updateStatus = "loading";
    }).addCase(pr.fulfilled, (t, n) => {
      t.updateStatus = "succeeded";
      const r = t.items.findIndex((i) => i.id === n.payload.id);
      r !== -1 && (t.items[r] = n.payload);
    }).addCase(pr.rejected, (t, n) => {
      t.updateStatus = "failed", t.updateError = n.error.message || "Failed to update media item";
    }), e.addCase(hr.pending, (t) => {
      t.updateStatus = "loading";
    }).addCase(hr.fulfilled, (t, n) => {
      t.updateStatus = "succeeded";
      const r = t.items.findIndex((i) => i.id === n.payload.id);
      r !== -1 && (t.items[r] = n.payload);
    }).addCase(hr.rejected, (t, n) => {
      t.updateStatus = "failed", t.updateError = n.error.message || "Failed to update media file item";
    }), e.addCase(mr.pending, (t) => {
      t.updateStatus = "loading";
    }).addCase(mr.fulfilled, (t) => {
      t.updateStatus = "succeeded", xa("Media ajouté");
    }).addCase(mr.rejected, (t) => {
      t.updateStatus = "failed", xa("Une erreur est survenu pendant la création !", "destructive");
    });
  }
}), _h = Lu;
ju.actions;
const Eh = ju.reducer, Iu = {
  currentMedia: null,
  picker: !1
}, Du = as({
  name: "main",
  initialState: Iu,
  reducers: {
    setCurrentMedia: (e, t) => {
      e.currentMedia = t.payload;
    },
    setPicker: (e, t) => {
      e.picker = t.payload;
    }
  }
}), Sh = Iu, {
  setCurrentMedia: Hr,
  setPicker: Mh
} = Du.actions, Ah = Du.reducer, Zu = {
  items: [],
  status: "idle",
  error: null,
  currentFolder: null,
  dialogForm: {
    isOpen: !1,
    folder: null,
    targetFolder: null
  },
  updateStatus: "idle",
  openFolders: []
}, Cr = I0(
  "fetchFolderItems",
  async () => (await (await Y2.getInstance()).getFolders()).data
), gr = I0(
  "fetchFolder",
  async (e) => (await (await Y2.getInstance()).patchFolder(e.id, e.data)).data
), vr = I0(
  "createFolder",
  async (e) => (await (await Y2.getInstance()).postFolder(null, e)).data
), yr = I0(
  "deleteFolder",
  async (e, { rejectWithValue: t }) => {
    try {
      return await (await Y2.getInstance()).deleteFolder(e), e;
    } catch (n) {
      return t(n.response.data.detail);
    }
  }
), zu = as({
  name: "folder",
  initialState: Zu,
  reducers: {
    setIsOpen(e, t) {
      t.payload.value ? e.openFolders.push(t.payload.id) : e.openFolders = e.openFolders.filter((n) => n !== t.payload.id);
    },
    setCurrentFolder(e, t) {
      e.currentFolder = t.payload;
    },
    setDialogFormIsOpen(e, t) {
      e.dialogForm.isOpen = t.payload;
    },
    setDialogFormFolder(e, t) {
      e.dialogForm.folder = t.payload;
    },
    setDialogFormTargetFolder(e, t) {
      e.dialogForm.targetFolder = t.payload;
    }
  },
  extraReducers: (e) => {
    e.addCase(Cr.pending, (t) => {
      t.status = "loading";
    }).addCase(Cr.fulfilled, (t, n) => {
      t.status = "succeeded";
      const r = n.payload["hydra:member"];
      t.items = r.map((i) => ({ ...i, children: [] }));
    }).addCase(Cr.rejected, (t, n) => {
      t.status = "failed", t.error = n.error.message || "Failed to fetch menu";
    }), e.addCase(gr.pending, (t) => {
      t.updateStatus = "loading";
    }).addCase(gr.fulfilled, (t, n) => {
      t.updateStatus = "succeeded";
      const r = t.items.findIndex((i) => i.id === n.payload.id);
      r !== -1 && (t.items[r] = { ...n.payload, children: [] });
    }).addCase(gr.rejected, (t, n) => {
      t.updateStatus = "failed", t.error = n.error.message || "Failed to patch item";
    }), e.addCase(vr.pending, (t) => {
      t.updateStatus = "loading";
    }).addCase(vr.fulfilled, (t, n) => {
      t.updateStatus = "succeeded", t.items.push({ ...n.payload, children: [] });
    }).addCase(vr.rejected, (t, n) => {
      t.updateStatus = "failed", t.error = n.error.message || "Failed to patch item";
    }), e.addCase(yr.pending, (t) => {
      t.updateStatus = "loading";
    }).addCase(yr.fulfilled, (t, n) => {
      t.updateStatus = "succeeded", t.items = t.items.filter((r) => r.id !== n.payload);
    }).addCase(yr.rejected, (t, n) => {
      t.updateStatus = "failed", t.error = n.error.message || "Failed to delete item", xa("Erreur de suppression !", "destructive", String(n.payload));
    });
  }
}), Th = Zu, {
  setIsOpen: Oh,
  setCurrentFolder: gs,
  setDialogFormIsOpen: Nr,
  setDialogFormFolder: Rc,
  setDialogFormTargetFolder: Fc
} = zu.actions, Rh = zu.reducer, Fh = () => {
  try {
    const e = localStorage.getItem("wd-media-ui-state");
    return e === null ? void 0 : JSON.parse(e);
  } catch {
    return;
  }
}, Ph = (e) => {
  try {
    const t = {
      folder: {
        openFolders: e.folder.openFolders,
        currentFolder: e.folder.currentFolder
      }
    }, n = JSON.stringify(t);
    localStorage.setItem("wd-media-ui-state", n);
  } catch (t) {
    console.error("Could not save state", t);
  }
};
function $u(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = $u(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function kh() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = $u(e)) && (r && (r += " "), r += t);
  return r;
}
const vs = "-";
function Hh(e) {
  const t = Lh(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  function i(a) {
    const s = a.split(vs);
    return s[0] === "" && s.length !== 1 && s.shift(), Bu(s, t) || Nh(a);
  }
  function o(a, s) {
    const l = n[a] || [];
    return s && r[a] ? [...l, ...r[a]] : l;
  }
  return {
    getClassGroupId: i,
    getConflictingClassGroupIds: o
  };
}
function Bu(e, t) {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), i = r ? Bu(e.slice(1), r) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const o = e.join(vs);
  return (a = t.validators.find(({
    validator: s
  }) => s(o))) == null ? void 0 : a.classGroupId;
}
const Pc = /^\[(.+)\]$/;
function Nh(e) {
  if (Pc.test(e)) {
    const t = Pc.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Lh(e) {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return jh(Object.entries(e.classGroups), n).forEach(([o, a]) => {
    wa(a, r, o, t);
  }), r;
}
function wa(e, t, n, r) {
  e.forEach((i) => {
    if (typeof i == "string") {
      const o = i === "" ? t : kc(t, i);
      o.classGroupId = n;
      return;
    }
    if (typeof i == "function") {
      if (Vh(i)) {
        wa(i(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: n
      });
      return;
    }
    Object.entries(i).forEach(([o, a]) => {
      wa(a, kc(t, o), n, r);
    });
  });
}
function kc(e, t) {
  let n = e;
  return t.split(vs).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function Vh(e) {
  return e.isThemeGetter;
}
function jh(e, t) {
  return t ? e.map(([n, r]) => {
    const i = r.map((o) => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([a, s]) => [t + a, s])) : o);
    return [n, i];
  }) : e;
}
function Ih(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function i(o, a) {
    n.set(o, a), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get(o) {
      let a = n.get(o);
      if (a !== void 0)
        return a;
      if ((a = r.get(o)) !== void 0)
        return i(o, a), a;
    },
    set(o, a) {
      n.has(o) ? n.set(o, a) : i(o, a);
    }
  };
}
const Uu = "!";
function Dh(e) {
  const t = e.separator, n = t.length === 1, r = t[0], i = t.length;
  return function(a) {
    const s = [];
    let l = 0, c = 0, u;
    for (let g = 0; g < a.length; g++) {
      let b = a[g];
      if (l === 0) {
        if (b === r && (n || a.slice(g, g + i) === t)) {
          s.push(a.slice(c, g)), c = g + i;
          continue;
        }
        if (b === "/") {
          u = g;
          continue;
        }
      }
      b === "[" ? l++ : b === "]" && l--;
    }
    const d = s.length === 0 ? a : a.substring(c), p = d.startsWith(Uu), m = p ? d.substring(1) : d, C = u && u > c ? u - c : void 0;
    return {
      modifiers: s,
      hasImportantModifier: p,
      baseClassName: m,
      maybePostfixModifierPosition: C
    };
  };
}
function Zh(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}
function zh(e) {
  return {
    cache: Ih(e.cacheSize),
    splitModifiers: Dh(e),
    ...Hh(e)
  };
}
const $h = /\s+/;
function Bh(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: i
  } = t, o = /* @__PURE__ */ new Set();
  return e.trim().split($h).map((a) => {
    const {
      modifiers: s,
      hasImportantModifier: l,
      baseClassName: c,
      maybePostfixModifierPosition: u
    } = n(a);
    let d = r(u ? c.substring(0, u) : c), p = !!u;
    if (!d) {
      if (!u)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      if (d = r(c), !d)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      p = !1;
    }
    const m = Zh(s).join(":");
    return {
      isTailwindClass: !0,
      modifierId: l ? m + Uu : m,
      classGroupId: d,
      originalClassName: a,
      hasPostfixModifier: p
    };
  }).reverse().filter((a) => {
    if (!a.isTailwindClass)
      return !0;
    const {
      modifierId: s,
      classGroupId: l,
      hasPostfixModifier: c
    } = a, u = s + l;
    return o.has(u) ? !1 : (o.add(u), i(l, c).forEach((d) => o.add(s + d)), !0);
  }).reverse().map((a) => a.originalClassName).join(" ");
}
function Uh() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Wu(t)) && (r && (r += " "), r += n);
  return r;
}
function Wu(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Wu(e[r])) && (n && (n += " "), n += t);
  return n;
}
function Wh(e, ...t) {
  let n, r, i, o = a;
  function a(l) {
    const c = t.reduce((u, d) => d(u), e());
    return n = zh(c), r = n.cache.get, i = n.cache.set, o = s, s(l);
  }
  function s(l) {
    const c = r(l);
    if (c)
      return c;
    const u = Bh(l, n);
    return i(l, u), u;
  }
  return function() {
    return o(Uh.apply(null, arguments));
  };
}
function o2(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const qu = /^\[(?:([a-z-]+):)?(.+)\]$/i, qh = /^\d+\/\d+$/, Yh = /* @__PURE__ */ new Set(["px", "full", "screen"]), Gh = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Kh = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Xh = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, Jh = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Qh = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function M0(e) {
  return Et(e) || Yh.has(e) || qh.test(e);
}
function Y0(e) {
  return M1(e, "length", sm);
}
function Et(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Gn(e) {
  return M1(e, "number", Et);
}
function H1(e) {
  return !!e && Number.isInteger(Number(e));
}
function em(e) {
  return e.endsWith("%") && Et(e.slice(0, -1));
}
function De(e) {
  return qu.test(e);
}
function G0(e) {
  return Gh.test(e);
}
const tm = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function nm(e) {
  return M1(e, tm, Yu);
}
function rm(e) {
  return M1(e, "position", Yu);
}
const im = /* @__PURE__ */ new Set(["image", "url"]);
function om(e) {
  return M1(e, im, cm);
}
function am(e) {
  return M1(e, "", lm);
}
function N1() {
  return !0;
}
function M1(e, t, n) {
  const r = qu.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}
function sm(e) {
  return Kh.test(e) && !Xh.test(e);
}
function Yu() {
  return !1;
}
function lm(e) {
  return Jh.test(e);
}
function cm(e) {
  return Qh.test(e);
}
function um() {
  const e = o2("colors"), t = o2("spacing"), n = o2("blur"), r = o2("brightness"), i = o2("borderColor"), o = o2("borderRadius"), a = o2("borderSpacing"), s = o2("borderWidth"), l = o2("contrast"), c = o2("grayscale"), u = o2("hueRotate"), d = o2("invert"), p = o2("gap"), m = o2("gradientColorStops"), C = o2("gradientColorStopPositions"), g = o2("inset"), b = o2("margin"), x = o2("opacity"), w = o2("padding"), E = o2("saturate"), S = o2("scale"), _ = o2("sepia"), P = o2("skew"), F = o2("space"), $ = o2("translate"), le = () => ["auto", "contain", "none"], pe = () => ["auto", "hidden", "clip", "visible", "scroll"], fe = () => ["auto", De, t], D = () => [De, t], Q = () => ["", M0, Y0], N = () => ["auto", Et, De], re = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], k = () => ["solid", "dashed", "dotted", "double", "none"], ce = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], xe = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], X = () => ["", "0", De], j = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], B = () => [Et, Gn], he = () => [Et, De];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [N1],
      spacing: [M0, Y0],
      blur: ["none", "", G0, De],
      brightness: B(),
      borderColor: [e],
      borderRadius: ["none", "", "full", G0, De],
      borderSpacing: D(),
      borderWidth: Q(),
      contrast: B(),
      grayscale: X(),
      hueRotate: he(),
      invert: X(),
      gap: D(),
      gradientColorStops: [e],
      gradientColorStopPositions: [em, Y0],
      inset: fe(),
      margin: fe(),
      opacity: B(),
      padding: D(),
      saturate: B(),
      scale: B(),
      sepia: X(),
      skew: he(),
      space: D(),
      translate: D()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", De]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [G0]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": j()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": j()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...re(), De]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: pe()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": pe()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": pe()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: le()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": le()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": le()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [g]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [g]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [g]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [g]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [g]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [g]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [g]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [g]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [g]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", H1, De]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: fe()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", De]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: X()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: X()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", H1, De]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [N1]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", H1, De]
        }, De]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": N()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": N()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [N1]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [H1, De]
        }, De]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": N()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": N()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", De]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", De]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [p]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [p]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [p]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...xe()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...xe(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...xe(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [F]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [F]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", De, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [De, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [De, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [G0]
        }, G0]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [De, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [De, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [De, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [De, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", G0, Y0]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Gn]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [N1]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", De]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Et, Gn]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", M0, De]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", De]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", De]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [x]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [x]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...k(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", M0, Y0]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", M0, De]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: D()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", De]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", De]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [x]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...re(), rm]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", nm]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, om]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [C]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [C]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [C]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [s]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [s]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [s]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [s]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [s]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [s]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [s]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [s]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [s]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [x]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...k(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [s]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [s]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [x]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: k()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [i]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [i]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [i]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [i]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [i]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [i]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [i]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [i]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...k()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [M0, De]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [M0, Y0]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: Q()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [x]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [M0, Y0]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", G0, am]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [N1]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [x]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ce(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ce()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [n]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [r]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", G0, De]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [E]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [_]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [n]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [r]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [x]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [E]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [_]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", De]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: he()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", De]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: he()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", De]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [S]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [S]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [S]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [H1, De]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [$]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [$]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [P]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [P]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", De]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", De]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": D()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": D()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": D()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": D()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": D()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": D()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": D()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": D()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": D()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": D()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": D()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": D()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": D()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": D()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": D()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": D()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": D()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": D()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", De]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [M0, Y0, Gn]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const fm = /* @__PURE__ */ Wh(um);
function Oe(...e) {
  return fm(kh(e));
}
function Hc(e) {
  const t = new Date(e), n = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: !1
    // Utilisation du format 24 heures
  };
  return new Intl.DateTimeFormat("fr-FR", n).format(t);
}
function _a(e) {
  return e == null ? !1 : typeof e == "string" ? e.trim().length > 0 : Array.isArray(e) ? e.length > 0 : typeof e == "object" ? Object.keys(e).length > 0 : !0;
}
function Nc(e) {
  return e && typeof e == "object" && !Array.isArray(e);
}
function Gu(e, t) {
  if (!Nc(t))
    return t;
  const n = { ...e };
  for (const r in t)
    if (t.hasOwnProperty(r)) {
      const i = e[r], o = t[r];
      Nc(o) ? e[r] ? n[r] = Gu(
        i,
        o
      ) : n[r] = o : Array.isArray(o) ? n[r] = Array.isArray(i) ? [...i, ...o] : o : n[r] = o;
    }
  return n;
}
const dm = {
  main: Sh,
  media: _h,
  folder: Th
}, pm = Fh(), G1 = J5({
  reducer: {
    main: Ah,
    media: Eh,
    folder: Rh
  },
  preloadedState: Gu(dm, pm)
});
G1.subscribe(() => {
  Ph({
    folder: {
      openFolders: G1.getState().folder.openFolders,
      currentFolder: G1.getState().folder.currentFolder
    }
  });
});
const Ku = async (e) => {
  Y2.configure(e), await Y2.getInstance();
};
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const hm = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Xu = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var mm = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cm = p3(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: o,
    iconNode: a,
    ...s
  }, l) => ia(
    "svg",
    {
      ref: l,
      ...mm,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Xu("lucide", i),
      ...s
    },
    [
      ...a.map(([c, u]) => ia(c, u)),
      ...Array.isArray(o) ? o : [o]
    ]
  )
);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const A1 = (e, t) => {
  const n = p3(
    ({ className: r, ...i }, o) => ia(Cm, {
      ref: o,
      iconNode: t,
      className: Xu(`lucide-${hm(e)}`, r),
      ...i
    })
  );
  return n.displayName = `${e}`, n;
};
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gm = A1("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ju = A1("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const vm = A1("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ym = A1("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bm = A1("GripVertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qu = A1("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), {
  createElement: C1,
  createContext: xm,
  createRef: PM,
  forwardRef: e4,
  useCallback: F2,
  useContext: t4,
  useEffect: Tt,
  useImperativeHandle: n4,
  useLayoutEffect: wm,
  useMemo: _m,
  useRef: L2,
  useState: c1
} = y, Lc = y.useId, Em = wm, bi = xm(null);
bi.displayName = "PanelGroupContext";
const Ot = Em, Sm = typeof Lc == "function" ? Lc : () => null;
let Mm = 0;
function ys(e = null) {
  const t = Sm(), n = L2(e || t || null);
  return n.current === null && (n.current = "" + Mm++), e ?? n.current;
}
function r4({
  children: e,
  className: t = "",
  collapsedSize: n,
  collapsible: r,
  defaultSize: i,
  forwardedRef: o,
  id: a,
  maxSize: s,
  minSize: l,
  onCollapse: c,
  onExpand: u,
  onResize: d,
  order: p,
  style: m,
  tagName: C = "div",
  ...g
}) {
  const b = t4(bi);
  if (b === null)
    throw Error("Panel components must be rendered within a PanelGroup container");
  const {
    collapsePanel: x,
    expandPanel: w,
    getPanelSize: E,
    getPanelStyle: S,
    groupId: _,
    isPanelCollapsed: P,
    reevaluatePanelConstraints: F,
    registerPanel: $,
    resizePanel: le,
    unregisterPanel: pe
  } = b, fe = ys(a), D = L2({
    callbacks: {
      onCollapse: c,
      onExpand: u,
      onResize: d
    },
    constraints: {
      collapsedSize: n,
      collapsible: r,
      defaultSize: i,
      maxSize: s,
      minSize: l
    },
    id: fe,
    idIsFromProps: a !== void 0,
    order: p
  });
  L2({
    didLogMissingDefaultSizeWarning: !1
  }), Ot(() => {
    const {
      callbacks: N,
      constraints: re
    } = D.current, k = {
      ...re
    };
    D.current.id = fe, D.current.idIsFromProps = a !== void 0, D.current.order = p, N.onCollapse = c, N.onExpand = u, N.onResize = d, re.collapsedSize = n, re.collapsible = r, re.defaultSize = i, re.maxSize = s, re.minSize = l, (k.collapsedSize !== re.collapsedSize || k.collapsible !== re.collapsible || k.maxSize !== re.maxSize || k.minSize !== re.minSize) && F(D.current, k);
  }), Ot(() => {
    const N = D.current;
    return $(N), () => {
      pe(N);
    };
  }, [p, fe, $, pe]), n4(o, () => ({
    collapse: () => {
      x(D.current);
    },
    expand: (N) => {
      w(D.current, N);
    },
    getId() {
      return fe;
    },
    getSize() {
      return E(D.current);
    },
    isCollapsed() {
      return P(D.current);
    },
    isExpanded() {
      return !P(D.current);
    },
    resize: (N) => {
      le(D.current, N);
    }
  }), [x, w, E, P, fe, le]);
  const Q = S(D.current, i);
  return C1(C, {
    ...g,
    children: e,
    className: t,
    id: a,
    style: {
      ...Q,
      ...m
    },
    // CSS selectors
    "data-panel": "",
    "data-panel-collapsible": r || void 0,
    "data-panel-group-id": _,
    "data-panel-id": fe,
    "data-panel-size": parseFloat("" + Q.flexGrow).toFixed(1)
  });
}
const i4 = e4((e, t) => C1(r4, {
  ...e,
  forwardedRef: t
}));
r4.displayName = "Panel";
i4.displayName = "forwardRef(Panel)";
let Ea = null, St = null;
function Am(e, t) {
  if (t) {
    const n = (t & c4) !== 0, r = (t & u4) !== 0, i = (t & f4) !== 0, o = (t & d4) !== 0;
    if (n)
      return i ? "se-resize" : o ? "ne-resize" : "e-resize";
    if (r)
      return i ? "sw-resize" : o ? "nw-resize" : "w-resize";
    if (i)
      return "s-resize";
    if (o)
      return "n-resize";
  }
  switch (e) {
    case "horizontal":
      return "ew-resize";
    case "intersection":
      return "move";
    case "vertical":
      return "ns-resize";
  }
}
function Tm() {
  St !== null && (document.head.removeChild(St), Ea = null, St = null);
}
function Oo(e, t) {
  const n = Am(e, t);
  Ea !== n && (Ea = n, St === null && (St = document.createElement("style"), document.head.appendChild(St)), St.innerHTML = `*{cursor: ${n}!important;}`);
}
function o4(e) {
  return e.type === "keydown";
}
function a4(e) {
  return e.type.startsWith("pointer");
}
function s4(e) {
  return e.type.startsWith("mouse");
}
function xi(e) {
  if (a4(e)) {
    if (e.isPrimary)
      return {
        x: e.clientX,
        y: e.clientY
      };
  } else if (s4(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  return {
    x: 1 / 0,
    y: 1 / 0
  };
}
function Om() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
function Rm(e, t, n) {
  return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function Fm(e, t) {
  if (e === t) throw new Error("Cannot compare node with itself");
  const n = {
    a: Ic(e),
    b: Ic(t)
  };
  let r;
  for (; n.a.at(-1) === n.b.at(-1); )
    e = n.a.pop(), t = n.b.pop(), r = e;
  $e(r, "Stacking order can only be calculated for elements with a common ancestor");
  const i = {
    a: jc(Vc(n.a)),
    b: jc(Vc(n.b))
  };
  if (i.a === i.b) {
    const o = r.childNodes, a = {
      a: n.a.at(-1),
      b: n.b.at(-1)
    };
    let s = o.length;
    for (; s--; ) {
      const l = o[s];
      if (l === a.a) return 1;
      if (l === a.b) return -1;
    }
  }
  return Math.sign(i.a - i.b);
}
const Pm = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function km(e) {
  var t;
  const n = getComputedStyle((t = l4(e)) !== null && t !== void 0 ? t : e).display;
  return n === "flex" || n === "inline-flex";
}
function Hm(e) {
  const t = getComputedStyle(e);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || km(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || Pm.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function Vc(e) {
  let t = e.length;
  for (; t--; ) {
    const n = e[t];
    if ($e(n, "Missing node"), Hm(n)) return n;
  }
  return null;
}
function jc(e) {
  return e && Number(getComputedStyle(e).zIndex) || 0;
}
function Ic(e) {
  const t = [];
  for (; e; )
    t.push(e), e = l4(e);
  return t;
}
function l4(e) {
  const {
    parentNode: t
  } = e;
  return t && t instanceof ShadowRoot ? t.host : t;
}
const c4 = 1, u4 = 2, f4 = 4, d4 = 8, Nm = Om() === "coarse";
let i0 = [], an = !1, Q0 = /* @__PURE__ */ new Map(), wi = /* @__PURE__ */ new Map();
const sn = /* @__PURE__ */ new Set();
function Lm(e, t, n, r, i) {
  var o;
  const {
    ownerDocument: a
  } = t, s = {
    direction: n,
    element: t,
    hitAreaMargins: r,
    setResizeHandlerState: i
  }, l = (o = Q0.get(a)) !== null && o !== void 0 ? o : 0;
  return Q0.set(a, l + 1), sn.add(s), Lr(), function() {
    var u;
    wi.delete(e), sn.delete(s);
    const d = (u = Q0.get(a)) !== null && u !== void 0 ? u : 1;
    if (Q0.set(a, d - 1), Lr(), d === 1 && Q0.delete(a), i0.includes(s)) {
      const p = i0.indexOf(s);
      p >= 0 && i0.splice(p, 1), xs();
    }
  };
}
function Dc(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = xi(e);
  an = !0, bs({
    target: t,
    x: n,
    y: r
  }), Lr(), i0.length > 0 && (Vr("down", e), e.preventDefault(), e.stopPropagation());
}
function L1(e) {
  const {
    x: t,
    y: n
  } = xi(e);
  if (e.buttons === 0 && (an = !1, Vr("up", e)), !an) {
    const {
      target: r
    } = e;
    bs({
      target: r,
      x: t,
      y: n
    });
  }
  Vr("move", e), xs(), i0.length > 0 && e.preventDefault();
}
function Yt(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = xi(e);
  wi.clear(), an = !1, i0.length > 0 && e.preventDefault(), Vr("up", e), bs({
    target: t,
    x: n,
    y: r
  }), xs(), Lr();
}
function bs({
  target: e,
  x: t,
  y: n
}) {
  i0.splice(0);
  let r = null;
  e instanceof HTMLElement && (r = e), sn.forEach((i) => {
    const {
      element: o,
      hitAreaMargins: a
    } = i, s = o.getBoundingClientRect(), {
      bottom: l,
      left: c,
      right: u,
      top: d
    } = s, p = Nm ? a.coarse : a.fine;
    if (t >= c - p && t <= u + p && n >= d - p && n <= l + p) {
      if (r !== null && o !== r && !o.contains(r) && !r.contains(o) && // Calculating stacking order has a cost, so we should avoid it if possible
      // That is why we only check potentially intersecting handles,
      // and why we skip if the event target is within the handle's DOM
      Fm(r, o) > 0) {
        let C = r, g = !1;
        for (; C && !C.contains(o); ) {
          if (Rm(C.getBoundingClientRect(), s)) {
            g = !0;
            break;
          }
          C = C.parentElement;
        }
        if (g)
          return;
      }
      i0.push(i);
    }
  });
}
function Ro(e, t) {
  wi.set(e, t);
}
function xs() {
  let e = !1, t = !1;
  i0.forEach((r) => {
    const {
      direction: i
    } = r;
    i === "horizontal" ? e = !0 : t = !0;
  });
  let n = 0;
  wi.forEach((r) => {
    n |= r;
  }), e && t ? Oo("intersection", n) : e ? Oo("horizontal", n) : t ? Oo("vertical", n) : Tm();
}
function Lr() {
  Q0.forEach((e, t) => {
    const {
      body: n
    } = t;
    n.removeEventListener("contextmenu", Yt), n.removeEventListener("pointerdown", Dc), n.removeEventListener("pointerleave", L1), n.removeEventListener("pointermove", L1);
  }), window.removeEventListener("pointerup", Yt), window.removeEventListener("pointercancel", Yt), sn.size > 0 && (an ? (i0.length > 0 && Q0.forEach((e, t) => {
    const {
      body: n
    } = t;
    e > 0 && (n.addEventListener("contextmenu", Yt), n.addEventListener("pointerleave", L1), n.addEventListener("pointermove", L1));
  }), window.addEventListener("pointerup", Yt), window.addEventListener("pointercancel", Yt)) : Q0.forEach((e, t) => {
    const {
      body: n
    } = t;
    e > 0 && (n.addEventListener("pointerdown", Dc, {
      capture: !0
    }), n.addEventListener("pointermove", L1));
  }));
}
function Vr(e, t) {
  sn.forEach((n) => {
    const {
      setResizeHandlerState: r
    } = n, i = i0.includes(n);
    r(e, i, t);
  });
}
function Vm() {
  const [e, t] = c1(0);
  return F2(() => t((n) => n + 1), []);
}
function $e(e, t) {
  if (!e)
    throw console.error(t), Error(t);
}
const ws = 10;
function Lt(e, t, n = ws) {
  return e.toFixed(n) === t.toFixed(n) ? 0 : e > t ? 1 : -1;
}
function O0(e, t, n = ws) {
  return Lt(e, t, n) === 0;
}
function j2(e, t, n) {
  return Lt(e, t, n) === 0;
}
function jm(e, t, n) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++) {
    const i = e[r], o = t[r];
    if (!j2(i, o, n))
      return !1;
  }
  return !0;
}
function n1({
  panelConstraints: e,
  panelIndex: t,
  size: n
}) {
  const r = e[t];
  $e(r != null, `Panel constraints not found for index ${t}`);
  let {
    collapsedSize: i = 0,
    collapsible: o,
    maxSize: a = 100,
    minSize: s = 0
  } = r;
  if (Lt(n, s) < 0)
    if (o) {
      const l = (i + s) / 2;
      Lt(n, l) < 0 ? n = i : n = s;
    } else
      n = s;
  return n = Math.min(a, n), n = parseFloat(n.toFixed(ws)), n;
}
function I1({
  delta: e,
  initialLayout: t,
  panelConstraints: n,
  pivotIndices: r,
  prevLayout: i,
  trigger: o
}) {
  if (j2(e, 0))
    return t;
  const a = [...t], [s, l] = r;
  $e(s != null, "Invalid first pivot index"), $e(l != null, "Invalid second pivot index");
  let c = 0;
  if (o === "keyboard") {
    {
      const d = e < 0 ? l : s, p = n[d];
      $e(p, `Panel constraints not found for index ${d}`);
      const {
        collapsedSize: m = 0,
        collapsible: C,
        minSize: g = 0
      } = p;
      if (C) {
        const b = t[d];
        if ($e(b != null, `Previous layout not found for panel index ${d}`), j2(b, m)) {
          const x = g - b;
          Lt(x, Math.abs(e)) > 0 && (e = e < 0 ? 0 - x : x);
        }
      }
    }
    {
      const d = e < 0 ? s : l, p = n[d];
      $e(p, `No panel constraints found for index ${d}`);
      const {
        collapsedSize: m = 0,
        collapsible: C,
        minSize: g = 0
      } = p;
      if (C) {
        const b = t[d];
        if ($e(b != null, `Previous layout not found for panel index ${d}`), j2(b, g)) {
          const x = b - m;
          Lt(x, Math.abs(e)) > 0 && (e = e < 0 ? 0 - x : x);
        }
      }
    }
  }
  {
    const d = e < 0 ? 1 : -1;
    let p = e < 0 ? l : s, m = 0;
    for (; ; ) {
      const g = t[p];
      $e(g != null, `Previous layout not found for panel index ${p}`);
      const x = n1({
        panelConstraints: n,
        panelIndex: p,
        size: 100
      }) - g;
      if (m += x, p += d, p < 0 || p >= n.length)
        break;
    }
    const C = Math.min(Math.abs(e), Math.abs(m));
    e = e < 0 ? 0 - C : C;
  }
  {
    let p = e < 0 ? s : l;
    for (; p >= 0 && p < n.length; ) {
      const m = Math.abs(e) - Math.abs(c), C = t[p];
      $e(C != null, `Previous layout not found for panel index ${p}`);
      const g = C - m, b = n1({
        panelConstraints: n,
        panelIndex: p,
        size: g
      });
      if (!j2(C, b) && (c += C - b, a[p] = b, c.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, {
        numeric: !0
      }) >= 0))
        break;
      e < 0 ? p-- : p++;
    }
  }
  if (jm(i, a))
    return i;
  {
    const d = e < 0 ? l : s, p = t[d];
    $e(p != null, `Previous layout not found for panel index ${d}`);
    const m = p + c, C = n1({
      panelConstraints: n,
      panelIndex: d,
      size: m
    });
    if (a[d] = C, !j2(C, m)) {
      let g = m - C, x = e < 0 ? l : s;
      for (; x >= 0 && x < n.length; ) {
        const w = a[x];
        $e(w != null, `Previous layout not found for panel index ${x}`);
        const E = w + g, S = n1({
          panelConstraints: n,
          panelIndex: x,
          size: E
        });
        if (j2(w, S) || (g -= S - w, a[x] = S), j2(g, 0))
          break;
        e > 0 ? x-- : x++;
      }
    }
  }
  const u = a.reduce((d, p) => p + d, 0);
  return j2(u, 100) ? a : i;
}
function Im({
  layout: e,
  panelsArray: t,
  pivotIndices: n
}) {
  let r = 0, i = 100, o = 0, a = 0;
  const s = n[0];
  $e(s != null, "No pivot index found"), t.forEach((d, p) => {
    const {
      constraints: m
    } = d, {
      maxSize: C = 100,
      minSize: g = 0
    } = m;
    p === s ? (r = g, i = C) : (o += g, a += C);
  });
  const l = Math.min(i, 100 - o), c = Math.max(r, 100 - a), u = e[s];
  return {
    valueMax: l,
    valueMin: c,
    valueNow: u
  };
}
function ln(e, t = document) {
  return Array.from(t.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`));
}
function p4(e, t, n = document) {
  const i = ln(e, n).findIndex((o) => o.getAttribute("data-panel-resize-handle-id") === t);
  return i ?? null;
}
function h4(e, t, n) {
  const r = p4(e, t, n);
  return r != null ? [r, r + 1] : [-1, -1];
}
function m4(e, t = document) {
  var n;
  if (t instanceof HTMLElement && (t == null || (n = t.dataset) === null || n === void 0 ? void 0 : n.panelGroupId) == e)
    return t;
  const r = t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);
  return r || null;
}
function _i(e, t = document) {
  const n = t.querySelector(`[data-panel-resize-handle-id="${e}"]`);
  return n || null;
}
function Dm(e, t, n, r = document) {
  var i, o, a, s;
  const l = _i(t, r), c = ln(e, r), u = l ? c.indexOf(l) : -1, d = (i = (o = n[u]) === null || o === void 0 ? void 0 : o.id) !== null && i !== void 0 ? i : null, p = (a = (s = n[u + 1]) === null || s === void 0 ? void 0 : s.id) !== null && a !== void 0 ? a : null;
  return [d, p];
}
function Zm({
  committedValuesRef: e,
  eagerValuesRef: t,
  groupId: n,
  layout: r,
  panelDataArray: i,
  panelGroupElement: o,
  setLayout: a
}) {
  L2({
    didWarnAboutMissingResizeHandle: !1
  }), Ot(() => {
    if (!o)
      return;
    const s = ln(n, o);
    for (let l = 0; l < i.length - 1; l++) {
      const {
        valueMax: c,
        valueMin: u,
        valueNow: d
      } = Im({
        layout: r,
        panelsArray: i,
        pivotIndices: [l, l + 1]
      }), p = s[l];
      if (p != null) {
        const m = i[l];
        $e(m, `No panel data found for index "${l}"`), p.setAttribute("aria-controls", m.id), p.setAttribute("aria-valuemax", "" + Math.round(c)), p.setAttribute("aria-valuemin", "" + Math.round(u)), p.setAttribute("aria-valuenow", d != null ? "" + Math.round(d) : "");
      }
    }
    return () => {
      s.forEach((l, c) => {
        l.removeAttribute("aria-controls"), l.removeAttribute("aria-valuemax"), l.removeAttribute("aria-valuemin"), l.removeAttribute("aria-valuenow");
      });
    };
  }, [n, r, i, o]), Tt(() => {
    if (!o)
      return;
    const s = t.current;
    $e(s, "Eager values not found");
    const {
      panelDataArray: l
    } = s, c = m4(n, o);
    $e(c != null, `No group found for id "${n}"`);
    const u = ln(n, o);
    $e(u, `No resize handles found for group id "${n}"`);
    const d = u.map((p) => {
      const m = p.getAttribute("data-panel-resize-handle-id");
      $e(m, "Resize handle element has no handle id attribute");
      const [C, g] = Dm(n, m, l, o);
      if (C == null || g == null)
        return () => {
        };
      const b = (x) => {
        if (!x.defaultPrevented)
          switch (x.key) {
            case "Enter": {
              x.preventDefault();
              const w = l.findIndex((E) => E.id === C);
              if (w >= 0) {
                const E = l[w];
                $e(E, `No panel data found for index ${w}`);
                const S = r[w], {
                  collapsedSize: _ = 0,
                  collapsible: P,
                  minSize: F = 0
                } = E.constraints;
                if (S != null && P) {
                  const $ = I1({
                    delta: j2(S, _) ? F - _ : _ - S,
                    initialLayout: r,
                    panelConstraints: l.map((le) => le.constraints),
                    pivotIndices: h4(n, m, o),
                    prevLayout: r,
                    trigger: "keyboard"
                  });
                  r !== $ && a($);
                }
              }
              break;
            }
          }
      };
      return p.addEventListener("keydown", b), () => {
        p.removeEventListener("keydown", b);
      };
    });
    return () => {
      d.forEach((p) => p());
    };
  }, [o, e, t, n, r, i, a]);
}
function Zc(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function C4(e, t) {
  const n = e === "horizontal", {
    x: r,
    y: i
  } = xi(t);
  return n ? r : i;
}
function zm(e, t, n, r, i) {
  const o = n === "horizontal", a = _i(t, i);
  $e(a, `No resize handle element found for id "${t}"`);
  const s = a.getAttribute("data-panel-group-id");
  $e(s, "Resize handle element has no group id attribute");
  let {
    initialCursorPosition: l
  } = r;
  const c = C4(n, e), u = m4(s, i);
  $e(u, `No group element found for id "${s}"`);
  const d = u.getBoundingClientRect(), p = o ? d.width : d.height;
  return (c - l) / p * 100;
}
function $m(e, t, n, r, i, o) {
  if (o4(e)) {
    const a = n === "horizontal";
    let s = 0;
    e.shiftKey ? s = 100 : i != null ? s = i : s = 10;
    let l = 0;
    switch (e.key) {
      case "ArrowDown":
        l = a ? 0 : s;
        break;
      case "ArrowLeft":
        l = a ? -s : 0;
        break;
      case "ArrowRight":
        l = a ? s : 0;
        break;
      case "ArrowUp":
        l = a ? 0 : -s;
        break;
      case "End":
        l = 100;
        break;
      case "Home":
        l = -100;
        break;
    }
    return l;
  } else
    return r == null ? 0 : zm(e, t, n, r, o);
}
function Bm({
  panelDataArray: e
}) {
  const t = Array(e.length), n = e.map((o) => o.constraints);
  let r = 0, i = 100;
  for (let o = 0; o < e.length; o++) {
    const a = n[o];
    $e(a, `Panel constraints not found for index ${o}`);
    const {
      defaultSize: s
    } = a;
    s != null && (r++, t[o] = s, i -= s);
  }
  for (let o = 0; o < e.length; o++) {
    const a = n[o];
    $e(a, `Panel constraints not found for index ${o}`);
    const {
      defaultSize: s
    } = a;
    if (s != null)
      continue;
    const l = e.length - r, c = i / l;
    r++, t[o] = c, i -= c;
  }
  return t;
}
function Gt(e, t, n) {
  t.forEach((r, i) => {
    const o = e[i];
    $e(o, `Panel data not found for index ${i}`);
    const {
      callbacks: a,
      constraints: s,
      id: l
    } = o, {
      collapsedSize: c = 0,
      collapsible: u
    } = s, d = n[l];
    if (d == null || r !== d) {
      n[l] = r;
      const {
        onCollapse: p,
        onExpand: m,
        onResize: C
      } = a;
      C && C(r, d), u && (p || m) && (m && (d == null || O0(d, c)) && !O0(r, c) && m(), p && (d == null || !O0(d, c)) && O0(r, c) && p());
    }
  });
}
function Kn(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] != t[n])
      return !1;
  return !0;
}
function Um({
  defaultSize: e,
  dragState: t,
  layout: n,
  panelData: r,
  panelIndex: i,
  precision: o = 3
}) {
  const a = n[i];
  let s;
  return a == null ? s = e != null ? e.toPrecision(o) : "1" : r.length === 1 ? s = "1" : s = a.toPrecision(o), {
    flexBasis: 0,
    flexGrow: s,
    flexShrink: 1,
    // Without this, Panel sizes may be unintentionally overridden by their content
    overflow: "hidden",
    // Disable pointer events inside of a panel during resize
    // This avoid edge cases like nested iframes
    pointerEvents: t !== null ? "none" : void 0
  };
}
function Wm(e, t = 10) {
  let n = null;
  return (...i) => {
    n !== null && clearTimeout(n), n = setTimeout(() => {
      e(...i);
    }, t);
  };
}
function zc(e) {
  try {
    if (typeof localStorage < "u")
      e.getItem = (t) => localStorage.getItem(t), e.setItem = (t, n) => {
        localStorage.setItem(t, n);
      };
    else
      throw new Error("localStorage not supported in this environment");
  } catch (t) {
    console.error(t), e.getItem = () => null, e.setItem = () => {
    };
  }
}
function g4(e) {
  return `react-resizable-panels:${e}`;
}
function v4(e) {
  return e.map((t) => {
    const {
      constraints: n,
      id: r,
      idIsFromProps: i,
      order: o
    } = t;
    return i ? r : o ? `${o}:${JSON.stringify(n)}` : JSON.stringify(n);
  }).sort((t, n) => t.localeCompare(n)).join(",");
}
function y4(e, t) {
  try {
    const n = g4(e), r = t.getItem(n);
    if (r) {
      const i = JSON.parse(r);
      if (typeof i == "object" && i != null)
        return i;
    }
  } catch {
  }
  return null;
}
function qm(e, t, n) {
  var r, i;
  const o = (r = y4(e, n)) !== null && r !== void 0 ? r : {}, a = v4(t);
  return (i = o[a]) !== null && i !== void 0 ? i : null;
}
function Ym(e, t, n, r, i) {
  var o;
  const a = g4(e), s = v4(t), l = (o = y4(e, i)) !== null && o !== void 0 ? o : {};
  l[s] = {
    expandToSizes: Object.fromEntries(n.entries()),
    layout: r
  };
  try {
    i.setItem(a, JSON.stringify(l));
  } catch (c) {
    console.error(c);
  }
}
function $c({
  layout: e,
  panelConstraints: t
}) {
  const n = [...e], r = n.reduce((o, a) => o + a, 0);
  if (n.length !== t.length)
    throw Error(`Invalid ${t.length} panel layout: ${n.map((o) => `${o}%`).join(", ")}`);
  if (!j2(r, 100))
    for (let o = 0; o < t.length; o++) {
      const a = n[o];
      $e(a != null, `No layout data found for index ${o}`);
      const s = 100 / r * a;
      n[o] = s;
    }
  let i = 0;
  for (let o = 0; o < t.length; o++) {
    const a = n[o];
    $e(a != null, `No layout data found for index ${o}`);
    const s = n1({
      panelConstraints: t,
      panelIndex: o,
      size: a
    });
    a != s && (i += a - s, n[o] = s);
  }
  if (!j2(i, 0))
    for (let o = 0; o < t.length; o++) {
      const a = n[o];
      $e(a != null, `No layout data found for index ${o}`);
      const s = a + i, l = n1({
        panelConstraints: t,
        panelIndex: o,
        size: s
      });
      if (a !== l && (i -= l - a, n[o] = l, j2(i, 0)))
        break;
    }
  return n;
}
const Gm = 100, D1 = {
  getItem: (e) => (zc(D1), D1.getItem(e)),
  setItem: (e, t) => {
    zc(D1), D1.setItem(e, t);
  }
}, Bc = {};
function b4({
  autoSaveId: e = null,
  children: t,
  className: n = "",
  direction: r,
  forwardedRef: i,
  id: o = null,
  onLayout: a = null,
  keyboardResizeBy: s = null,
  storage: l = D1,
  style: c,
  tagName: u = "div",
  ...d
}) {
  const p = ys(o), m = L2(null), [C, g] = c1(null), [b, x] = c1([]), w = Vm(), E = L2({}), S = L2(/* @__PURE__ */ new Map()), _ = L2(0), P = L2({
    autoSaveId: e,
    direction: r,
    dragState: C,
    id: p,
    keyboardResizeBy: s,
    onLayout: a,
    storage: l
  }), F = L2({
    layout: b,
    panelDataArray: [],
    panelDataArrayChanged: !1
  });
  L2({
    didLogIdAndOrderWarning: !1,
    didLogPanelConstraintsWarning: !1,
    prevPanelIds: []
  }), n4(i, () => ({
    getId: () => P.current.id,
    getLayout: () => {
      const {
        layout: H
      } = F.current;
      return H;
    },
    setLayout: (H) => {
      const {
        onLayout: Y
      } = P.current, {
        layout: ie,
        panelDataArray: q
      } = F.current, G = $c({
        layout: H,
        panelConstraints: q.map((oe) => oe.constraints)
      });
      Zc(ie, G) || (x(G), F.current.layout = G, Y && Y(G), Gt(q, G, E.current));
    }
  }), []), Ot(() => {
    P.current.autoSaveId = e, P.current.direction = r, P.current.dragState = C, P.current.id = p, P.current.onLayout = a, P.current.storage = l;
  }), Zm({
    committedValuesRef: P,
    eagerValuesRef: F,
    groupId: p,
    layout: b,
    panelDataArray: F.current.panelDataArray,
    setLayout: x,
    panelGroupElement: m.current
  }), Tt(() => {
    const {
      panelDataArray: H
    } = F.current;
    if (e) {
      if (b.length === 0 || b.length !== H.length)
        return;
      let Y = Bc[e];
      Y == null && (Y = Wm(Ym, Gm), Bc[e] = Y);
      const ie = [...H], q = new Map(S.current);
      Y(e, ie, q, b, l);
    }
  }, [e, b, l]), Tt(() => {
  });
  const $ = F2((H) => {
    const {
      onLayout: Y
    } = P.current, {
      layout: ie,
      panelDataArray: q
    } = F.current;
    if (H.constraints.collapsible) {
      const G = q.map((ke) => ke.constraints), {
        collapsedSize: oe = 0,
        panelSize: de,
        pivotIndices: ve
      } = xt(q, H, ie);
      if ($e(de != null, `Panel size not found for panel "${H.id}"`), !O0(de, oe)) {
        S.current.set(H.id, de);
        const ee = e1(q, H) === q.length - 1 ? de - oe : oe - de, Ae = I1({
          delta: ee,
          initialLayout: ie,
          panelConstraints: G,
          pivotIndices: ve,
          prevLayout: ie,
          trigger: "imperative-api"
        });
        Kn(ie, Ae) || (x(Ae), F.current.layout = Ae, Y && Y(Ae), Gt(q, Ae, E.current));
      }
    }
  }, []), le = F2((H, Y) => {
    const {
      onLayout: ie
    } = P.current, {
      layout: q,
      panelDataArray: G
    } = F.current;
    if (H.constraints.collapsible) {
      const oe = G.map((Ue) => Ue.constraints), {
        collapsedSize: de = 0,
        panelSize: ve = 0,
        minSize: ke = 0,
        pivotIndices: ee
      } = xt(G, H, q), Ae = Y ?? ke;
      if (O0(ve, de)) {
        const Ue = S.current.get(H.id), c2 = Ue != null && Ue >= Ae ? Ue : Ae, ze = e1(G, H) === G.length - 1 ? ve - c2 : c2 - ve, M = I1({
          delta: ze,
          initialLayout: q,
          panelConstraints: oe,
          pivotIndices: ee,
          prevLayout: q,
          trigger: "imperative-api"
        });
        Kn(q, M) || (x(M), F.current.layout = M, ie && ie(M), Gt(G, M, E.current));
      }
    }
  }, []), pe = F2((H) => {
    const {
      layout: Y,
      panelDataArray: ie
    } = F.current, {
      panelSize: q
    } = xt(ie, H, Y);
    return $e(q != null, `Panel size not found for panel "${H.id}"`), q;
  }, []), fe = F2((H, Y) => {
    const {
      panelDataArray: ie
    } = F.current, q = e1(ie, H);
    return Um({
      defaultSize: Y,
      dragState: C,
      layout: b,
      panelData: ie,
      panelIndex: q
    });
  }, [C, b]), D = F2((H) => {
    const {
      layout: Y,
      panelDataArray: ie
    } = F.current, {
      collapsedSize: q = 0,
      collapsible: G,
      panelSize: oe
    } = xt(ie, H, Y);
    return $e(oe != null, `Panel size not found for panel "${H.id}"`), G === !0 && O0(oe, q);
  }, []), Q = F2((H) => {
    const {
      layout: Y,
      panelDataArray: ie
    } = F.current, {
      collapsedSize: q = 0,
      collapsible: G,
      panelSize: oe
    } = xt(ie, H, Y);
    return $e(oe != null, `Panel size not found for panel "${H.id}"`), !G || Lt(oe, q) > 0;
  }, []), N = F2((H) => {
    const {
      panelDataArray: Y
    } = F.current;
    Y.push(H), Y.sort((ie, q) => {
      const G = ie.order, oe = q.order;
      return G == null && oe == null ? 0 : G == null ? -1 : oe == null ? 1 : G - oe;
    }), F.current.panelDataArrayChanged = !0, w();
  }, [w]);
  Ot(() => {
    if (F.current.panelDataArrayChanged) {
      F.current.panelDataArrayChanged = !1;
      const {
        autoSaveId: H,
        onLayout: Y,
        storage: ie
      } = P.current, {
        layout: q,
        panelDataArray: G
      } = F.current;
      let oe = null;
      if (H) {
        const ve = qm(H, G, ie);
        ve && (S.current = new Map(Object.entries(ve.expandToSizes)), oe = ve.layout);
      }
      oe == null && (oe = Bm({
        panelDataArray: G
      }));
      const de = $c({
        layout: oe,
        panelConstraints: G.map((ve) => ve.constraints)
      });
      Zc(q, de) || (x(de), F.current.layout = de, Y && Y(de), Gt(G, de, E.current));
    }
  }), Ot(() => {
    const H = F.current;
    return () => {
      H.layout = [];
    };
  }, []);
  const re = F2((H) => function(ie) {
    ie.preventDefault();
    const q = m.current;
    if (!q)
      return () => null;
    const {
      direction: G,
      dragState: oe,
      id: de,
      keyboardResizeBy: ve,
      onLayout: ke
    } = P.current, {
      layout: ee,
      panelDataArray: Ae
    } = F.current, {
      initialLayout: Ue
    } = oe ?? {}, c2 = h4(de, H, q);
    let t2 = $m(ie, H, G, oe, ve, q);
    const ze = G === "horizontal";
    document.dir === "rtl" && ze && (t2 = -t2);
    const M = Ae.map((f) => f.constraints), R = I1({
      delta: t2,
      initialLayout: Ue ?? ee,
      panelConstraints: M,
      pivotIndices: c2,
      prevLayout: ee,
      trigger: o4(ie) ? "keyboard" : "mouse-or-touch"
    }), V = !Kn(ee, R);
    (a4(ie) || s4(ie)) && _.current != t2 && (_.current = t2, V ? Ro(H, 0) : ze ? Ro(H, t2 < 0 ? c4 : u4) : Ro(H, t2 < 0 ? f4 : d4)), V && (x(R), F.current.layout = R, ke && ke(R), Gt(Ae, R, E.current));
  }, []), k = F2((H, Y) => {
    const {
      onLayout: ie
    } = P.current, {
      layout: q,
      panelDataArray: G
    } = F.current, oe = G.map((Ue) => Ue.constraints), {
      panelSize: de,
      pivotIndices: ve
    } = xt(G, H, q);
    $e(de != null, `Panel size not found for panel "${H.id}"`);
    const ee = e1(G, H) === G.length - 1 ? de - Y : Y - de, Ae = I1({
      delta: ee,
      initialLayout: q,
      panelConstraints: oe,
      pivotIndices: ve,
      prevLayout: q,
      trigger: "imperative-api"
    });
    Kn(q, Ae) || (x(Ae), F.current.layout = Ae, ie && ie(Ae), Gt(G, Ae, E.current));
  }, []), ce = F2((H, Y) => {
    const {
      layout: ie,
      panelDataArray: q
    } = F.current, {
      collapsedSize: G = 0,
      collapsible: oe
    } = Y, {
      collapsedSize: de = 0,
      collapsible: ve,
      maxSize: ke = 100,
      minSize: ee = 0
    } = H.constraints, {
      panelSize: Ae
    } = xt(q, H, ie);
    Ae != null && (oe && ve && O0(Ae, G) ? O0(G, de) || k(H, de) : Ae < ee ? k(H, ee) : Ae > ke && k(H, ke));
  }, [k]), xe = F2((H, Y) => {
    const {
      direction: ie
    } = P.current, {
      layout: q
    } = F.current;
    if (!m.current)
      return;
    const G = _i(H, m.current);
    $e(G, `Drag handle element not found for id "${H}"`);
    const oe = C4(ie, Y);
    g({
      dragHandleId: H,
      dragHandleRect: G.getBoundingClientRect(),
      initialCursorPosition: oe,
      initialLayout: q
    });
  }, []), X = F2(() => {
    g(null);
  }, []), j = F2((H) => {
    const {
      panelDataArray: Y
    } = F.current, ie = e1(Y, H);
    ie >= 0 && (Y.splice(ie, 1), delete E.current[H.id], F.current.panelDataArrayChanged = !0, w());
  }, [w]), B = _m(() => ({
    collapsePanel: $,
    direction: r,
    dragState: C,
    expandPanel: le,
    getPanelSize: pe,
    getPanelStyle: fe,
    groupId: p,
    isPanelCollapsed: D,
    isPanelExpanded: Q,
    reevaluatePanelConstraints: ce,
    registerPanel: N,
    registerResizeHandle: re,
    resizePanel: k,
    startDragging: xe,
    stopDragging: X,
    unregisterPanel: j,
    panelGroupElement: m.current
  }), [$, C, r, le, pe, fe, p, D, Q, ce, N, re, k, xe, X, j]), he = {
    display: "flex",
    flexDirection: r === "horizontal" ? "row" : "column",
    height: "100%",
    overflow: "hidden",
    width: "100%"
  };
  return C1(bi.Provider, {
    value: B
  }, C1(u, {
    ...d,
    children: t,
    className: n,
    id: o,
    ref: m,
    style: {
      ...he,
      ...c
    },
    // CSS selectors
    "data-panel-group": "",
    "data-panel-group-direction": r,
    "data-panel-group-id": p
  }));
}
const x4 = e4((e, t) => C1(b4, {
  ...e,
  forwardedRef: t
}));
b4.displayName = "PanelGroup";
x4.displayName = "forwardRef(PanelGroup)";
function e1(e, t) {
  return e.findIndex((n) => n === t || n.id === t.id);
}
function xt(e, t, n) {
  const r = e1(e, t), o = r === e.length - 1 ? [r - 1, r] : [r, r + 1], a = n[r];
  return {
    ...t.constraints,
    panelSize: a,
    pivotIndices: o
  };
}
function Km({
  disabled: e,
  handleId: t,
  resizeHandler: n,
  panelGroupElement: r
}) {
  Tt(() => {
    if (e || n == null || r == null)
      return;
    const i = _i(t, r);
    if (i == null)
      return;
    const o = (a) => {
      if (!a.defaultPrevented)
        switch (a.key) {
          case "ArrowDown":
          case "ArrowLeft":
          case "ArrowRight":
          case "ArrowUp":
          case "End":
          case "Home": {
            a.preventDefault(), n(a);
            break;
          }
          case "F6": {
            a.preventDefault();
            const s = i.getAttribute("data-panel-group-id");
            $e(s, `No group element found for id "${s}"`);
            const l = ln(s, r), c = p4(s, t, r);
            $e(c !== null, `No resize element found for id "${t}"`);
            const u = a.shiftKey ? c > 0 ? c - 1 : l.length - 1 : c + 1 < l.length ? c + 1 : 0;
            l[u].focus();
            break;
          }
        }
    };
    return i.addEventListener("keydown", o), () => {
      i.removeEventListener("keydown", o);
    };
  }, [r, e, t, n]);
}
function w4({
  children: e = null,
  className: t = "",
  disabled: n = !1,
  hitAreaMargins: r,
  id: i,
  onBlur: o,
  onDragging: a,
  onFocus: s,
  style: l = {},
  tabIndex: c = 0,
  tagName: u = "div",
  ...d
}) {
  var p, m;
  const C = L2(null), g = L2({
    onDragging: a
  });
  Tt(() => {
    g.current.onDragging = a;
  });
  const b = t4(bi);
  if (b === null)
    throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");
  const {
    direction: x,
    groupId: w,
    registerResizeHandle: E,
    startDragging: S,
    stopDragging: _,
    panelGroupElement: P
  } = b, F = ys(i), [$, le] = c1("inactive"), [pe, fe] = c1(!1), [D, Q] = c1(null), N = L2({
    state: $
  });
  Ot(() => {
    N.current.state = $;
  }), Tt(() => {
    if (n)
      Q(null);
    else {
      const xe = E(F);
      Q(() => xe);
    }
  }, [n, F, E]);
  const re = (p = r == null ? void 0 : r.coarse) !== null && p !== void 0 ? p : 15, k = (m = r == null ? void 0 : r.fine) !== null && m !== void 0 ? m : 5;
  return Tt(() => {
    if (n || D == null)
      return;
    const xe = C.current;
    return $e(xe, "Element ref not attached"), Lm(F, xe, x, {
      coarse: re,
      fine: k
    }, (j, B, he) => {
      if (B)
        switch (j) {
          case "down": {
            le("drag"), S(F, he);
            const {
              onDragging: H
            } = g.current;
            H && H(!0);
            break;
          }
          case "move": {
            const {
              state: H
            } = N.current;
            H !== "drag" && le("hover"), D(he);
            break;
          }
          case "up": {
            le("hover"), _();
            const {
              onDragging: H
            } = g.current;
            H && H(!1);
            break;
          }
        }
      else
        le("inactive");
    });
  }, [re, x, n, k, E, F, D, S, _]), Km({
    disabled: n,
    handleId: F,
    resizeHandler: D,
    panelGroupElement: P
  }), C1(u, {
    ...d,
    children: e,
    className: t,
    id: i,
    onBlur: () => {
      fe(!1), o == null || o();
    },
    onFocus: () => {
      fe(!0), s == null || s();
    },
    ref: C,
    role: "separator",
    style: {
      ...{
        touchAction: "none",
        userSelect: "none"
      },
      ...l
    },
    tabIndex: c,
    // CSS selectors
    "data-panel-group-direction": x,
    "data-panel-group-id": w,
    "data-resize-handle": "",
    "data-resize-handle-active": $ === "drag" ? "pointer" : pe ? "keyboard" : void 0,
    "data-resize-handle-state": $,
    "data-panel-resize-handle-enabled": !n,
    "data-panel-resize-handle-id": F
  });
}
w4.displayName = "PanelResizeHandle";
const Xm = ({
  className: e,
  ...t
}) => /* @__PURE__ */ h.jsx(
  x4,
  {
    className: Oe(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      e
    ),
    ...t
  }
), Fo = i4, Uc = ({
  withHandle: e,
  className: t,
  ...n
}) => /* @__PURE__ */ h.jsx(
  w4,
  {
    className: Oe(
      "relative flex w-px items-center justify-center bg-slate-200 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90 dark:bg-slate-800 dark:focus-visible:ring-slate-300",
      t
    ),
    ...n,
    children: e && /* @__PURE__ */ h.jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border border-slate-200 bg-slate-200 dark:border-slate-800 dark:bg-slate-800", children: /* @__PURE__ */ h.jsx(bm, { className: "h-2.5 w-2.5" }) })
  }
);
function Jm(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function _s(...e) {
  return (t) => e.forEach((n) => Jm(n, t));
}
function y2(...e) {
  return y.useCallback(_s(...e), e);
}
var k0 = y.forwardRef((e, t) => {
  const { children: n, ...r } = e, i = y.Children.toArray(n), o = i.find(eC);
  if (o) {
    const a = o.props.children, s = i.map((l) => l === o ? y.Children.count(a) > 1 ? y.Children.only(null) : y.isValidElement(a) ? a.props.children : null : l);
    return /* @__PURE__ */ h.jsx(Sa, { ...r, ref: t, children: y.isValidElement(a) ? y.cloneElement(a, void 0, s) : null });
  }
  return /* @__PURE__ */ h.jsx(Sa, { ...r, ref: t, children: n });
});
k0.displayName = "Slot";
var Sa = y.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (y.isValidElement(n)) {
    const i = nC(n);
    return y.cloneElement(n, {
      ...tC(r, n.props),
      // @ts-ignore
      ref: t ? _s(t, i) : i
    });
  }
  return y.Children.count(n) > 1 ? y.Children.only(null) : null;
});
Sa.displayName = "SlotClone";
var Qm = ({ children: e }) => /* @__PURE__ */ h.jsx(h.Fragment, { children: e });
function eC(e) {
  return y.isValidElement(e) && e.type === Qm;
}
function tC(e, t) {
  const n = { ...t };
  for (const r in t) {
    const i = e[r], o = t[r];
    /^on[A-Z]/.test(r) ? i && o ? n[r] = (...s) => {
      o(...s), i(...s);
    } : i && (n[r] = i) : r === "style" ? n[r] = { ...i, ...o } : r === "className" && (n[r] = [i, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function nC(e) {
  var r, i;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var rC = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], e2 = rC.reduce((e, t) => {
  const n = y.forwardRef((r, i) => {
    const { asChild: o, ...a } = r, s = o ? k0 : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ h.jsx(s, { ...a, ref: i });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function Es(e, t) {
  e && ai.flushSync(() => e.dispatchEvent(t));
}
var iC = "AspectRatio", _4 = y.forwardRef(
  (e, t) => {
    const { ratio: n = 1 / 1, style: r, ...i } = e;
    return /* @__PURE__ */ h.jsx(
      "div",
      {
        style: {
          // ensures inner element is contained
          position: "relative",
          // ensures padding bottom trick maths works
          width: "100%",
          paddingBottom: `${100 / n}%`
        },
        "data-radix-aspect-ratio-wrapper": "",
        children: /* @__PURE__ */ h.jsx(
          e2.div,
          {
            ...i,
            ref: t,
            style: {
              ...r,
              // ensures children expand in ratio
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0
            }
          }
        )
      }
    );
  }
);
_4.displayName = iC;
var oC = _4;
const E4 = oC, Ei = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  "div",
  {
    ref: n,
    className: Oe(
      "rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      e
    ),
    ...t
  }
));
Ei.displayName = "Card";
const Ss = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  "div",
  {
    ref: n,
    className: Oe("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
Ss.displayName = "CardHeader";
const aC = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  "h3",
  {
    ref: n,
    className: Oe(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
aC.displayName = "CardTitle";
const sC = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  "p",
  {
    ref: n,
    className: Oe("text-sm text-slate-500 dark:text-slate-400", e),
    ...t
  }
));
sC.displayName = "CardDescription";
const Ms = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx("div", { ref: n, className: Oe("p-6 pt-0", e), ...t }));
Ms.displayName = "CardContent";
const lC = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  "div",
  {
    ref: n,
    className: Oe("flex items-center p-6 pt-0", e),
    ...t
  }
));
lC.displayName = "CardFooter";
const cC = "data:image/svg+xml,%3c!--%20icon666.com%20-%20MILLIONS%20vector%20ICONS%20FREE%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20368%20368'%20style='enable-background:new%200%200%20368%20368;'%20xml:space='preserve'%3e%3cg%3e%3cg%3e%3cg%3e%3cpath%20d='M328,32H40C18,32,0,50,0,72v224c0,22,18,40,40,40h288c22,0,40-18,40-40V72C368,50,350,32,328,32z%20M352,185.6l-38-38%20c-6.4-6.4-16-6.4-22.4,0L200,238.8l-0.4-0.4L153.2,192c-6-6-16.4-6-22.4,0l-39.2,39.2c-3.2,3.2-3.2,8,0,11.2%20c3.2,3.2,8,3.2,11.2,0l39.2-39.2l46.4,46.4l0.4,0.4l-32.4,32.4c-3.2,3.2-3.2,8,0,11.2c1.6,1.6,3.6,2.4,5.6,2.4s4-0.8,5.6-2.4%20l135.2-134.8l47.6,47.6c0.4,0.4,1.2,0.8,1.6,1.2V296c0,13.2-10.8,24-24,24H40c-13.2,0-24-10.8-24-24V72c0-13.2,10.8-24,24-24h288%20c13.2,0,24,10.8,24,24V185.6z'%3e%3c/path%3e%3cpath%20d='M72.4,250.4l-8,8c-3.2,3.2-3.2,8,0,11.2C66,271.2,68,272,70,272s4-0.8,5.6-2.4l8-8c3.2-3.2,3.2-8,0-11.2%20C80.4,247.2,75.6,247.2,72.4,250.4z'%3e%3c/path%3e%3cpath%20d='M88,80c-22,0-40,18-40,40s18,40,40,40s40-18,40-40S110,80,88,80z%20M88,144c-13.2,0-24-10.8-24-24s10.8-24,24-24%20s24,10.8,24,24S101.2,144,88,144z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e", uC = "data:image/svg+xml,%3csvg%20width='200'%20height='240'%20viewBox='0%200%20200%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M139.67%2049.25C134.202%2049.2421%20128.96%2047.0657%20125.095%2043.1982C121.229%2039.3308%20119.055%2034.0881%20119.05%2028.62V0H26.9099C19.7729%200%2012.9284%202.83511%207.88184%207.88171C2.83523%2012.9283%200%2019.7731%200%2026.91V189.13C0%20196.267%202.83523%20203.112%207.88184%20208.158C12.9284%20213.205%2019.7729%20216.04%2026.9099%20216.04H137.51C141.045%20216.041%20144.545%20215.346%20147.811%20213.995C151.077%20212.643%20154.045%20210.661%20156.545%20208.162C159.045%20205.663%20161.028%20202.696%20162.381%20199.43C163.734%20196.165%20164.43%20192.665%20164.43%20189.13V49.25H139.67Z'%20fill='%23FF9908'/%3e%3c/g%3e%3cpath%20d='M164.43%2049.25H139.67C134.202%2049.2421%20128.96%2047.0657%20125.095%2043.1982C121.229%2039.3308%20119.055%2034.0881%20119.05%2028.62V0L164.43%2049.25Z'%20fill='%23FF9908'/%3e%3cpath%20d='M183.94%20170.61H58.8999C50.0302%20170.61%2042.8401%20177.8%2042.8401%20186.67V223.95C42.8401%20232.82%2050.0302%20240.01%2058.8999%20240.01H183.94C192.81%20240.01%20200%20232.82%20200%20223.95V186.67C200%20177.8%20192.81%20170.61%20183.94%20170.61Z'%20fill='%23FF9908'/%3e%3cpath%20d='M103.79%20213.38V220.65H96.26V213.38H103.79Z'%20fill='white'/%3e%3cpath%20d='M126.21%20215.16H114.93L113.06%20220.65H105.41L116.41%20190.79H124.79L135.79%20220.65H128.05L126.21%20215.16ZM124.33%20209.63L120.59%20198.57L116.81%20209.63H124.33Z'%20fill='white'/%3e%3cpath%20d='M145.9%20190.58V220.65H138.63V190.58H145.9Z'%20fill='white'/%3e%3cpath%20d='M76.0701%20114.08C76.0166%20113.645%2076.0636%20113.203%2076.2075%20112.789C76.3514%20112.374%2076.5881%20111.998%2076.8999%20111.69C77.1729%20111.417%2077.4973%20111.2%2077.8542%20111.052C78.2111%20110.904%2078.5936%20110.828%2078.98%20110.828C79.3663%20110.828%2079.7488%20110.904%2080.1057%20111.052C80.4626%20111.2%2080.787%20111.417%2081.0601%20111.69C81.3334%20111.963%2081.5501%20112.287%2081.698%20112.644C81.8459%20113.001%2081.9221%20113.384%2081.9221%20113.77C81.9221%20114.156%2081.8459%20114.539%2081.698%20114.896C81.5501%20115.253%2081.3334%20115.577%2081.0601%20115.85C80.7516%20116.162%2080.3757%20116.399%2079.9614%20116.543C79.5471%20116.686%2079.1052%20116.734%2078.6699%20116.68L44.51%20150.84L95.51%20125.84C95.51%20125.84%20101.24%20104.5%20107.74%2097.99L94.74%2084.99C88.23%2091.49%2066.8899%2097.22%2066.8899%2097.22L41.8899%20148.22L76.0701%20114.08Z'%20fill='%23FF9908'/%3e%3cpath%20d='M122.518%2090.406L102.344%2070.2322L92.4518%2080.1246L112.626%20100.298L122.518%2090.406Z'%20fill='%23FF9908'/%3e%3c/svg%3e", fC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: uC
}, Symbol.toStringTag, { value: "Module" })), dC = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140%2049.24C134.532%2049.2347%20129.289%2047.0609%20125.422%2043.1953C121.554%2039.3297%20119.378%2034.0881%20119.37%2028.62V0H27.2C20.063%200%2013.2184%202.83517%208.17175%207.88177C3.12515%2012.9284%200.290039%2019.773%200.290039%2026.91V189.13C0.297991%20196.261%203.13695%20203.097%208.18298%20208.135C13.229%20213.174%2020.0691%20216.003%2027.2%20216H137.8C144.937%20216%20151.782%20213.165%20156.828%20208.118C161.875%20203.072%20164.71%20196.227%20164.71%20189.09V49.24H140Z'%20fill='%23FF9908'/%3e%3c/g%3e%3cpath%20d='M164.71%2049.24H140C134.532%2049.2347%20129.289%2047.0609%20125.422%2043.1953C121.554%2039.3297%20119.378%2034.0881%20119.37%2028.62V0L164.71%2049.24Z'%20fill='%23FF9908'/%3e%3cpath%20d='M184.23%20170.6H59.1899C50.3202%20170.6%2043.13%20177.79%2043.13%20186.66V223.94C43.13%20232.81%2050.3202%20240%2059.1899%20240H184.23C193.1%20240%20200.29%20232.81%20200.29%20223.94V186.66C200.29%20177.79%20193.1%20170.6%20184.23%20170.6Z'%20fill='%23FF9908'/%3e%3cpath%20d='M88%20213.37V220.64H80.47V213.37H88Z'%20fill='white'/%3e%3cpath%20d='M110.45%20215.16H99.17L97.3%20220.64H89.65L100.65%20190.79H109L120%20220.64H112.26L110.45%20215.16ZM108.57%20209.63L104.83%20198.57L101.05%20209.63H108.57Z'%20fill='white'/%3e%3cpath%20d='M128.48%20190.57L135.84%20213.2L143.2%20190.57H151L140.54%20220.64H131.14L120.72%20190.57H128.48Z'%20fill='white'/%3e%3cpath%20d='M161.06%20190.57V220.64H153.79V190.57H161.06Z'%20fill='white'/%3e%3cpath%20d='M82.34%20149.83C71.4304%20149.817%2060.9715%20145.477%2053.2572%20137.763C45.5429%20130.049%2041.2032%20119.59%2041.1899%20108.68C41.2032%2097.7704%2045.5429%2087.3114%2053.2572%2079.5972C60.9715%2071.8829%2071.4304%2067.5433%2082.34%2067.53C93.2496%2067.5433%20103.709%2071.8829%20111.423%2079.5972C119.137%2087.3114%20123.477%2097.7704%20123.49%20108.68C123.477%20119.59%20119.137%20130.049%20111.423%20137.763C103.709%20145.477%2093.2496%20149.817%2082.34%20149.83ZM82.34%2074.74C73.3434%2074.7559%2064.7198%2078.3368%2058.3583%2084.6983C51.9967%2091.0599%2048.4159%2099.6834%2048.4%20108.68C48.4%20117.687%2051.9739%20126.326%2058.3372%20132.7C64.7004%20139.075%2073.333%20142.664%2082.34%20142.68C91.3469%20142.664%2099.9796%20139.075%20106.343%20132.7C112.706%20126.326%20116.28%20117.687%20116.28%20108.68C116.264%2099.6834%20112.683%2091.0599%20106.322%2084.6983C99.9601%2078.3368%2091.3365%2074.7559%2082.34%2074.74Z'%20fill='%23FF9908'/%3e%3cpath%20d='M94.14%20105.86L84.5699%20100.34C84.0746%20100.054%2083.5128%2099.9035%2082.9408%2099.9033C82.3688%2099.9032%2081.8069%20100.053%2081.3114%20100.339C80.8159%20100.625%2080.4043%20101.036%2080.1179%20101.531C79.8316%20102.026%2079.6806%20102.588%2079.6801%20103.16V114.21C79.6806%20114.782%2079.8316%20115.344%2080.1179%20115.839C80.4043%20116.334%2080.8159%20116.745%2081.3114%20117.031C81.8069%20117.317%2082.3688%20117.467%2082.9408%20117.467C83.5128%20117.467%2084.0746%20117.316%2084.5699%20117.03L94.14%20111.5C94.6341%20111.214%2095.0441%20110.802%2095.3292%20110.307C95.6143%20109.812%2095.7644%20109.251%2095.7644%20108.68C95.7644%20108.109%2095.6143%20107.548%2095.3292%20107.053C95.0441%20106.558%2094.6341%20106.147%2094.14%20105.86Z'%20fill='%23FF9908'/%3e%3cpath%20d='M74.77%2099.48H71.27C69.9666%2099.48%2068.91%20100.537%2068.91%20101.84V115.53C68.91%20116.833%2069.9666%20117.89%2071.27%20117.89H74.77C76.0734%20117.89%2077.13%20116.833%2077.13%20115.53V101.84C77.13%20100.537%2076.0734%2099.48%2074.77%2099.48Z'%20fill='%23FF9908'/%3e%3c/svg%3e", pC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dC
}, Symbol.toStringTag, { value: "Module" })), hC = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140.53%2049.24C135.061%2049.2373%20129.817%2047.0644%20125.949%2043.1982C122.081%2039.3321%20119.905%2034.0889%20119.9%2028.62V0H27.77C24.2353%20-2.4406e-07%2020.7353%200.696337%2017.4697%202.04932C14.2042%203.4023%2011.2372%205.38537%208.73828%207.88525C6.23933%2010.3851%204.25729%2013.3529%202.90552%2016.6189C1.55375%2019.8849%200.858796%2023.3853%200.860109%2026.92V189.13C0.858796%20192.665%201.55375%20196.165%202.90552%20199.431C4.25729%20202.697%206.23933%20205.665%208.73828%20208.165C11.2372%20210.665%2014.2042%20212.648%2017.4697%20214.001C20.7353%20215.354%2024.2353%20216.05%2027.77%20216.05H138.37C141.905%20216.05%20145.405%20215.354%20148.67%20214.001C151.936%20212.648%20154.903%20210.665%20157.402%20208.165C159.901%20205.665%20161.883%20202.697%20163.234%20199.431C164.586%20196.165%20165.281%20192.665%20165.28%20189.13V49.25L140.53%2049.24Z'%20fill='%23A140FF'/%3e%3c/g%3e%3cpath%20d='M165.28%2049.24H140.53C135.061%2049.2373%20129.817%2047.0644%20125.949%2043.1982C122.081%2039.3321%20119.905%2034.0889%20119.9%2028.62V0L165.28%2049.24Z'%20fill='%23A140FF'/%3e%3cpath%20d='M184.8%20170.6H59.76C50.8903%20170.6%2043.7%20177.79%2043.7%20186.66V223.94C43.7%20232.81%2050.8903%20240%2059.76%20240H184.8C193.67%20240%20200.86%20232.81%20200.86%20223.94V186.66C200.86%20177.79%20193.67%20170.6%20184.8%20170.6Z'%20fill='%23A140FF'/%3e%3cpath%20d='M79.46%20213.37V220.65H71.9299V213.37H79.46Z'%20fill='white'/%3e%3cpath%20d='M105.6%20207.8C106.655%20209.114%20107.217%20210.755%20107.19%20212.44C107.242%20213.569%20107.038%20214.696%20106.593%20215.735C106.148%20216.774%20105.473%20217.699%20104.62%20218.44C102.9%20219.88%20100.44%20220.61%2097.24%20220.61H83.24V190.54H96.8899C99.9499%20190.54%20102.317%20191.207%20103.99%20192.54C104.827%20193.226%20105.49%20194.1%20105.926%20195.09C106.362%20196.08%20106.559%20197.16%20106.5%20198.24C106.563%20199.872%20106.054%20201.474%20105.06%20202.77C104.108%20203.972%20102.769%20204.806%20101.27%20205.13C102.977%20205.498%20104.505%20206.44%20105.6%20207.8ZM90.52%20202.87H95.28C97.8067%20202.87%2099.0701%20201.79%2099.0701%20199.63C99.0701%20197.47%2097.78%20196.393%2095.2%20196.4H90.52V202.87ZM99.75%20211.42C99.7733%20210.946%2099.6903%20210.473%2099.5068%20210.035C99.3234%20209.597%2099.0442%20209.206%2098.6899%20208.89C97.8327%20208.233%2096.7679%20207.907%2095.6899%20207.97H90.54V214.73H95.73C98.41%20214.73%2099.75%20213.627%2099.75%20211.42Z'%20fill='white'/%3e%3cpath%20d='M144.83%20190.79V220.65H137.56V202L131.1%20220.68H124.8L118.29%20201.96V220.68H111V190.82H119.89L128.01%20211.62L136.01%20190.82L144.83%20190.79Z'%20fill='white'/%3e%3cpath%20d='M157.13%20210.1V220.65H149.85V190.58H161.63C165.21%20190.58%20167.933%20191.463%20169.8%20193.23C170.746%20194.16%20171.485%20195.28%20171.969%20196.515C172.454%20197.751%20172.672%20199.075%20172.61%20200.4C172.642%20202.149%20172.207%20203.875%20171.35%20205.4C170.485%20206.895%20169.188%20208.094%20167.63%20208.84C165.759%20209.732%20163.702%20210.164%20161.63%20210.1H157.13ZM165.21%20200.4C165.21%20197.733%20163.75%20196.4%20160.83%20196.4H157.13V204.23H160.83C163.75%20204.257%20165.21%20202.98%20165.21%20200.4Z'%20fill='white'/%3e%3cpath%20d='M105.16%20146.41H61C56.6759%20146.405%2052.5305%20144.685%2049.4729%20141.627C46.4153%20138.57%2044.6952%20134.424%2044.6899%20130.1V85.9301C44.6952%2081.606%2046.4153%2077.4605%2049.4729%2074.403C52.5305%2071.3454%2056.6759%2069.6253%2061%2069.62H105.17C109.493%2069.6253%20113.638%2071.3457%20116.694%2074.4036C119.75%2077.4614%20121.467%2081.6069%20121.47%2085.9301V130.1C121.467%20134.425%20119.748%20138.572%20116.69%20141.63C113.632%20144.688%20109.485%20146.407%20105.16%20146.41ZM61%2076.83C58.5873%2076.8326%2056.2744%2077.7923%2054.5684%2079.4983C52.8624%2081.2043%2051.9025%2083.5174%2051.8999%2085.9301V130.1C51.9025%20132.513%2052.8624%20134.826%2054.5684%20136.532C56.2744%20138.238%2058.5873%20139.197%2061%20139.2H105.17C107.581%20139.195%20109.891%20138.234%20111.595%20136.528C113.299%20134.822%20114.257%20132.511%20114.26%20130.1V85.9301C114.257%2083.5191%20113.299%2081.2076%20111.595%2079.5018C109.891%2077.7961%20107.581%2076.8352%20105.17%2076.83H61Z'%20fill='%23A140FF'/%3e%3cpath%20d='M117.86%20121.7V130.1C117.857%20133.467%20116.519%20136.696%20114.137%20139.077C111.756%20141.458%20108.527%20142.797%20105.16%20142.8H61C57.6308%20142.8%2054.3994%20141.462%2052.0161%20139.081C49.6328%20136.699%2048.2927%20133.469%2048.29%20130.1V116C55.37%20114.48%2066.14%20114%2079.21%20119.22L87.3101%20111.5L92.8301%20125.5C92.8301%20125.5%2094.3101%20120.35%2099.0901%20121.08C103.87%20121.81%20111.61%20124.4%20114.92%20122.19C115.809%20121.678%20116.853%20121.504%20117.86%20121.7Z'%20fill='%23A140FF'/%3e%3cpath%20d='M102.39%2094.95C105.102%2094.95%20107.3%2092.7518%20107.3%2090.04C107.3%2087.3283%20105.102%2085.13%20102.39%2085.13C99.6782%2085.13%2097.48%2087.3283%2097.48%2090.04C97.48%2092.7518%2099.6782%2094.95%20102.39%2094.95Z'%20fill='%23A140FF'/%3e%3c/svg%3e", mC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hC
}, Symbol.toStringTag, { value: "Module" })), CC = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140.24%2049.24C134.773%2049.2347%20129.531%2047.0606%20125.665%2043.1947C121.799%2039.3288%20119.625%2034.0871%20119.62%2028.62V0H27.48C23.9453%20-2.4406e-07%2020.4452%200.696337%2017.1797%202.04932C13.9142%203.4023%2010.9472%205.38537%208.44824%207.88525C5.94929%2010.3851%203.96731%2013.3529%202.61554%2016.6189C1.26378%2019.8849%200.568696%2023.3853%200.570009%2026.92V189.13C0.580608%20196.26%203.42043%20203.094%208.46588%20208.132C13.5113%20213.17%2020.3499%20216%2027.48%20216H138.09C145.222%20216%20152.062%20213.169%20157.108%20208.129C162.153%20203.089%20164.992%20196.252%20165%20189.12V49.24H140.24Z'%20fill='%233CBA32'/%3e%3c/g%3e%3cpath%20d='M165%2049.24H140.24C134.773%2049.2347%20129.531%2047.0606%20125.665%2043.1947C121.799%2039.3288%20119.625%2034.0871%20119.62%2028.62V0L165%2049.24Z'%20fill='%233CBA32'/%3e%3cpath%20d='M184.51%20170.6H59.47C50.6003%20170.6%2043.41%20177.79%2043.41%20186.66V223.94C43.41%20232.81%2050.6003%20240%2059.47%20240H184.51C193.38%20240%20200.57%20232.81%20200.57%20223.94V186.66C200.57%20177.79%20193.38%20170.6%20184.51%20170.6Z'%20fill='%233CBA32'/%3e%3cpath%20d='M79.65%20213.37V220.65H72.12V213.37H79.65Z'%20fill='white'/%3e%3cpath%20d='M106.68%20193.3C109.218%20195.358%20110.943%20198.249%20111.55%20201.46H103.85C103.331%20200.128%20102.417%20198.987%20101.23%20198.19C99.9751%20197.369%2098.4986%20196.954%2097%20197C96.021%20196.969%2095.048%20197.163%2094.1565%20197.569C93.2651%20197.975%2092.4792%20198.581%2091.86%20199.34C90.4634%20201.115%2089.7533%20203.334%2089.86%20205.59C89.75%20207.84%2090.4607%20210.054%2091.86%20211.82C92.4817%20212.575%2093.2685%20213.176%2094.1597%20213.579C95.051%20213.981%2096.0228%20214.173%2097%20214.14C98.4851%20214.178%2099.9465%20213.763%20101.19%20212.95C102.365%20212.158%20103.277%20211.033%20103.81%20209.72H111.51C110.891%20212.92%20109.167%20215.801%20106.64%20217.86C103.919%20219.943%20100.554%20221.005%2097.13%20220.86C94.4366%20220.92%2091.7768%20220.253%2089.43%20218.93C87.2326%20217.655%2085.4536%20215.768%2084.31%20213.5C83.0605%20211.022%2082.4389%20208.275%2082.5%20205.5C82.4471%20202.742%2083.0684%20200.013%2084.31%20197.55C85.4536%20195.282%2087.2326%20193.395%2089.43%20192.12C91.7768%20190.797%2094.4366%20190.13%2097.13%20190.19C100.58%20190.071%20103.961%20191.173%20106.68%20193.3Z'%20fill='white'/%3e%3cpath%20d='M131.07%20220.65L124.56%20209.29H122.9V220.65H115.63V190.58H128.05C130.118%20190.522%20132.171%20190.943%20134.05%20191.81C135.594%20192.54%20136.883%20193.718%20137.75%20195.19C138.587%20196.689%20139.012%20198.383%20138.98%20200.1C139.037%20202.111%20138.402%20204.081%20137.18%20205.68C135.835%20207.295%20133.98%20208.403%20131.92%20208.82L139.07%20220.65H131.07ZM122.9%20204.31H127.41C128.561%20204.392%20129.701%20204.034%20130.6%20203.31C130.955%20202.934%20131.228%20202.488%20131.4%20202.001C131.572%20201.514%20131.64%20200.995%20131.6%20200.48C131.635%20199.968%20131.564%20199.454%20131.392%20198.971C131.22%20198.487%20130.951%20198.045%20130.6%20197.67C129.717%20196.931%20128.577%20196.572%20127.43%20196.67H122.9V204.31Z'%20fill='white'/%3e%3cpath%20d='M167.84%20213.39C166.591%20215.666%20164.699%20217.523%20162.4%20218.73C159.818%20220.06%20156.943%20220.72%20154.04%20220.65H142.68V190.58H154C156.905%20190.504%20159.783%20191.147%20162.38%20192.45C164.667%20193.633%20166.553%20195.467%20167.8%20197.72C169.093%20200.124%20169.744%20202.821%20169.69%20205.55C169.755%20208.279%20169.118%20210.978%20167.84%20213.39ZM160.01%20211.88C160.825%20211.049%20161.457%20210.056%20161.863%20208.966C162.27%20207.875%20162.442%20206.712%20162.37%20205.55C162.442%20204.387%20162.269%20203.222%20161.863%20202.13C161.456%20201.038%20160.825%20200.043%20160.01%20199.21C158.189%20197.62%20155.814%20196.811%20153.4%20196.96H150V214.14H153.45C155.845%20214.273%20158.197%20213.462%20160%20211.88H160.01Z'%20fill='white'/%3e%3cpath%20d='M82.52%2062C82.52%2062%20106%2067%2084.25%20140.49H81.25C81.25%20140.49%2060.35%2072.8%2082.52%2062Z'%20fill='%233CBA32'/%3e%3cpath%20d='M87.71%2062.72C87.71%2062.72%20120.55%2075.1101%2086.13%20140.06C86.13%20140.06%20138.12%2076.69%2087.71%2062.72Z'%20fill='%233CBA32'/%3e%3cpath%20d='M101.39%2067.1899C101.39%2067.1899%20132.93%2082.88%2090.16%20137.61C90.16%20137.61%20139.27%2084.7599%20101.39%2067.1899Z'%20fill='%233CBA32'/%3e%3cpath%20d='M77.86%2062.72C77.86%2062.72%2045.02%2075.1101%2079.44%20140.06C79.44%20140.06%2027.45%2076.69%2077.86%2062.72Z'%20fill='%233CBA32'/%3e%3cpath%20d='M64.18%2067.1899C64.18%2067.1899%2032.64%2082.88%2075.41%20137.61C75.41%20137.61%2026.3%2084.7599%2064.18%2067.1899Z'%20fill='%233CBA32'/%3e%3cpath%20d='M87.19%20154.03H78.73L76.19%20145.96H89.73L87.19%20154.03Z'%20fill='%233CBA32'/%3e%3c/svg%3e", gC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: CC
}, Symbol.toStringTag, { value: "Module" })), vC = "data:image/svg+xml,%3csvg%20width='200'%20height='240'%20viewBox='0%200%20200%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M139.67%2049.25C134.203%2049.2447%20128.961%2047.0704%20125.095%2043.2046C121.229%2039.3387%20119.055%2034.097%20119.05%2028.6299V0H26.91C19.773%200%2012.9284%202.83523%207.88176%207.88184C2.83516%2012.9284%200%2019.7729%200%2026.9099V189.13C0.0105984%20196.26%202.85043%20203.094%207.89589%20208.132C12.9413%20213.17%2019.78%20216%2026.91%20216H137.51C141.045%20216.001%20144.545%20215.306%20147.811%20213.955C151.077%20212.603%20154.045%20210.621%20156.545%20208.122C159.045%20205.623%20161.028%20202.656%20162.381%20199.39C163.734%20196.125%20164.43%20192.625%20164.43%20189.09V49.21L139.67%2049.25Z'%20fill='%2300C650'/%3e%3c/g%3e%3cpath%20d='M164.43%2049.25H139.67C134.203%2049.2447%20128.961%2047.0704%20125.095%2043.2046C121.229%2039.3387%20119.055%2034.097%20119.05%2028.6299V0L164.43%2049.25Z'%20fill='%2300C650'/%3e%3cpath%20d='M183.94%20170.61H58.9C50.0303%20170.61%2042.84%20177.8%2042.84%20186.67V223.95C42.84%20232.82%2050.0303%20240.01%2058.9%20240.01H183.94C192.81%20240.01%20200%20232.82%20200%20223.95V186.67C200%20177.8%20192.81%20170.61%20183.94%20170.61Z'%20fill='%2300C650'/%3e%3cpath%20d='M80.49%20213.12V220.37H73V213.12H80.49Z'%20fill='white'/%3e%3cpath%20d='M107.4%20193.14C109.931%20195.188%20111.65%20198.07%20112.25%20201.27H104.59C104.079%20199.942%20103.176%20198.802%20102%20198C100.763%20197.189%2099.3086%20196.774%2097.83%20196.81C96.8551%20196.781%2095.8865%20196.975%2094.9989%20197.379C94.1112%20197.783%2093.3281%20198.386%2092.71%20199.14C91.3358%20200.917%2090.644%20203.127%2090.76%20205.37C90.6432%20207.604%2091.3355%20209.805%2092.71%20211.57C93.3306%20212.32%2094.1146%20212.919%2095.0021%20213.319C95.8896%20213.719%2096.8569%20213.911%2097.83%20213.88C99.3086%20213.916%20100.763%20213.501%20102%20212.69C103.175%20211.905%20104.085%20210.782%20104.61%20209.47H112.27C111.657%20212.66%20109.94%20215.531%20107.42%20217.58C104.716%20219.659%20101.368%20220.721%2097.96%20220.58C95.2762%20220.639%2092.6263%20219.972%2090.29%20218.65C88.101%20217.384%2086.3286%20215.508%2085.19%20213.25C83.9574%20210.798%2083.3397%20208.084%2083.39%20205.34C83.3385%20202.593%2083.9562%20199.875%2085.19%20197.42C86.3286%20195.162%2088.101%20193.286%2090.29%20192.02C92.6263%20190.698%2095.2762%20190.031%2097.96%20190.09C101.366%20189.973%20104.706%20191.052%20107.4%20193.14Z'%20fill='white'/%3e%3cpath%20d='M136.63%20216.3C135.768%20217.675%20134.534%20218.778%20133.07%20219.48C131.289%20220.314%20129.336%20220.718%20127.37%20220.66C124.409%20220.78%20121.491%20219.919%20119.07%20218.21C118.001%20217.406%20117.126%20216.372%20116.509%20215.185C115.893%20213.998%20115.552%20212.687%20115.51%20211.35H123.22C123.273%20212.358%20123.706%20213.308%20124.43%20214.01C125.146%20214.681%20126.099%20215.04%20127.08%20215.01C127.884%20215.051%20128.673%20214.778%20129.28%20214.25C129.543%20213.989%20129.75%20213.677%20129.888%20213.333C130.026%20212.989%20130.091%20212.62%20130.08%20212.25C130.089%20211.9%20130.029%20211.552%20129.902%20211.225C129.775%20210.899%20129.584%20210.602%20129.34%20210.35C128.815%20209.817%20128.189%20209.392%20127.5%20209.1C126.76%20208.77%20125.75%20208.38%20124.45%20207.93C122.863%20207.408%20121.313%20206.78%20119.81%20206.05C118.575%20205.411%20117.514%20204.481%20116.72%20203.34C115.806%20201.955%20115.355%20200.317%20115.43%20198.66C115.389%20197.017%20115.861%20195.402%20116.78%20194.04C117.725%20192.709%20119.024%20191.67%20120.53%20191.04C122.272%20190.335%20124.141%20189.995%20126.02%20190.04C128.861%20189.89%20131.666%20190.727%20133.96%20192.41C134.939%20193.204%20135.741%20194.194%20136.312%20195.317C136.884%20196.44%20137.214%20197.671%20137.28%20198.93H129.45C129.354%20198.05%20128.975%20197.226%20128.37%20196.58C128.057%20196.284%20127.688%20196.054%20127.284%20195.904C126.88%20195.755%20126.45%20195.689%20126.02%20195.71C125.273%20195.672%20124.538%20195.914%20123.96%20196.39C123.69%20196.644%20123.479%20196.956%20123.344%20197.302C123.209%20197.648%20123.153%20198.019%20123.18%20198.39C123.171%20198.721%20123.229%20199.051%20123.349%20199.36C123.469%20199.669%20123.65%20199.951%20123.88%20200.19C124.376%20200.712%20124.975%20201.124%20125.64%20201.4C126.34%20201.71%20127.36%20202.11%20128.64%20202.59C130.256%20203.11%20131.831%20203.752%20133.35%20204.51C134.596%20205.18%20135.668%20206.132%20136.48%20207.29C137.407%20208.692%20137.866%20210.351%20137.79%20212.03C137.797%20213.532%20137.396%20215.008%20136.63%20216.3Z'%20fill='white'/%3e%3cpath%20d='M147.44%20190.43L154.77%20212.96L162.1%20190.43H169.85L159.43%20220.37H150.07L139.69%20190.43H147.44Z'%20fill='white'/%3e%3cpath%20d='M118.89%20150.8H45.54C39.19%20150.8%2034.03%20144.48%2034.03%20136.7V83.51C34.03%2075.74%2039.19%2069.4199%2045.54%2069.4199H118.89C125.24%2069.4199%20130.4%2075.74%20130.4%2083.51V136.7C130.4%20144.48%20125.24%20150.8%20118.89%20150.8ZM45.54%2076.6201C42.44%2076.6201%2039.91%2079.71%2039.91%2083.51V136.7C39.91%20140.5%2042.44%20143.59%2045.54%20143.59H118.89C121.99%20143.59%20124.51%20140.5%20124.51%20136.7V83.51C124.51%2079.71%20121.99%2076.6201%20118.89%2076.6201H45.54Z'%20fill='%2300C650'/%3e%3cpath%20d='M127.46%20118.77H36.97V125.98H127.46V118.77Z'%20fill='%2300C650'/%3e%3cpath%20d='M127.46%2094.05H36.97V101.26H127.46V94.05Z'%20fill='%2300C650'/%3e%3cpath%20d='M104.29%2073.02H97.08V147.19H104.29V73.02Z'%20fill='%2300C650'/%3e%3cpath%20d='M67.35%2073.02H60.14V147.19H67.35V73.02Z'%20fill='%2300C650'/%3e%3c/svg%3e", yC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vC
}, Symbol.toStringTag, { value: "Module" })), bC = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140.53%2049.25C135.06%2049.2447%20129.816%2047.0695%20125.948%2043.2018C122.081%2039.3341%20119.905%2034.0898%20119.9%2028.62V0H27.77C20.633%200%2013.7883%202.83511%208.7417%207.88171C3.6951%2012.9283%200.860107%2019.7731%200.860107%2026.91V189.13C0.860107%20196.267%203.6951%20203.112%208.7417%20208.158C13.7883%20213.205%2020.633%20216.04%2027.77%20216.04H138.37C145.507%20216.04%20152.352%20213.205%20157.398%20208.158C162.445%20203.112%20165.28%20196.267%20165.28%20189.13V49.25H140.53Z'%20fill='%23A140FF'/%3e%3c/g%3e%3cpath%20d='M165.28%2049.25H140.53C135.06%2049.2447%20129.816%2047.0695%20125.948%2043.2018C122.081%2039.3341%20119.905%2034.0898%20119.9%2028.62V0L165.28%2049.25Z'%20fill='%23A140FF'/%3e%3cpath%20d='M184.8%20170.61H59.76C50.8903%20170.61%2043.7%20177.8%2043.7%20186.67V223.95C43.7%20232.82%2050.8903%20240.01%2059.76%20240.01H184.8C193.67%20240.01%20200.86%20232.82%20200.86%20223.95V186.67C200.86%20177.8%20193.67%20170.61%20184.8%20170.61Z'%20fill='%23A140FF'/%3e%3cpath%20d='M90%20213.38V220.65H82.47V213.38H90Z'%20fill='white'/%3e%3cpath%20d='M119%20213.4C117.751%20215.673%20115.858%20217.527%20113.56%20218.73C110.978%20220.061%20108.104%20220.721%20105.2%20220.65H93.8V190.58H105.15C108.055%20190.503%20110.933%20191.146%20113.53%20192.45C115.815%20193.636%20117.7%20195.469%20118.95%20197.72C120.246%20200.123%20120.901%20202.82%20120.85%20205.55C120.914%20208.282%20120.277%20210.984%20119%20213.4ZM111.18%20211.89C111.992%20211.055%20112.622%20210.06%20113.028%20208.969C113.434%20207.877%20113.609%20206.713%20113.54%20205.55C113.609%20204.387%20113.434%20203.223%20113.028%20202.131C112.622%20201.04%20111.992%20200.045%20111.18%20199.21C109.354%20197.62%20106.977%20196.812%20104.56%20196.96H101.12V214.14H104.56C106.96%20214.275%20109.317%20213.468%20111.13%20211.89H111.18Z'%20fill='white'/%3e%3cpath%20d='M132.24%20215.08H141.94V220.65H124.94V190.58H132.21L132.24%20215.08Z'%20fill='white'/%3e%3cpath%20d='M152.57%20215.08H162.27V220.65H145.27V190.58H152.54L152.57%20215.08Z'%20fill='white'/%3e%3cpath%20d='M69.24%20159.4C68.0996%20159.4%2067.0059%20158.947%2066.1995%20158.141C65.3931%20157.334%2064.9399%20156.24%2064.9399%20155.1V148.49C64.9399%20147.926%2065.0514%20147.367%2065.2676%20146.846C65.4838%20146.325%2065.8005%20145.852%2066.2%20145.453C66.5994%20145.055%2067.0736%20144.739%2067.5952%20144.524C68.1169%20144.309%2068.6758%20144.199%2069.24%20144.2C70.3778%20144.2%2071.4689%20144.652%2072.2734%20145.457C73.078%20146.261%2073.53%20147.352%2073.53%20148.49V155.1C73.53%20156.239%2073.0784%20157.331%2072.2742%20158.137C71.4699%20158.943%2070.3787%20159.397%2069.24%20159.4Z'%20fill='%23A140FF'/%3e%3cpath%20d='M69.24%20106.1C68.6758%20106.101%2068.1169%20105.991%2067.5952%20105.776C67.0736%20105.561%2066.5994%20105.246%2066.2%20104.847C65.8005%20104.449%2065.4838%20103.975%2065.2676%20103.454C65.0514%20102.933%2064.9399%20102.374%2064.9399%20101.81V94.12C64.9399%2092.9796%2065.3931%2091.8859%2066.1995%2091.0795C67.0059%2090.2731%2068.0996%2089.8199%2069.24%2089.8199C70.3787%2089.8226%2071.4699%2090.2769%2072.2742%2091.083C73.0784%2091.8891%2073.53%2092.9813%2073.53%2094.12V101.81C73.53%20102.948%2073.078%20104.039%2072.2734%20104.844C71.4689%20105.648%2070.3778%20106.1%2069.24%20106.1Z'%20fill='%23A140FF'/%3e%3cpath%20d='M84.49%20155.32C83.7346%20155.319%2082.9926%20155.12%2082.3381%20154.743C81.6836%20154.366%2081.1395%20153.823%2080.76%20153.17L77.5601%20147.61C76.9908%20146.623%2076.8363%20145.451%2077.1306%20144.35C77.425%20143.25%2078.144%20142.311%2079.1299%20141.74C80.1179%20141.172%2081.2914%20141.019%2082.3921%20141.315C83.4928%20141.611%2084.4308%20142.332%2085%20143.32L88.21%20148.87C88.7784%20149.858%2088.9313%20151.031%2088.635%20152.132C88.3387%20153.233%2087.6175%20154.171%2086.6299%20154.74C85.9804%20155.119%2085.2421%20155.319%2084.49%20155.32Z'%20fill='%23A140FF'/%3e%3cpath%20d='M57.9399%20109.32C57.1841%20109.321%2056.4414%20109.123%2055.7866%20108.746C55.1317%20108.368%2054.5878%20107.825%2054.2099%20107.17L50.28%20100.35C49.997%2099.8625%2049.8132%2099.3239%2049.739%2098.7651C49.6647%2098.2063%2049.7015%2097.6383%2049.8474%2097.0938C49.9932%2096.5493%2050.2452%2096.039%2050.5888%2095.5922C50.9325%2095.1454%2051.3612%2094.7708%2051.8501%2094.49C52.3383%2094.2068%2052.8776%2094.0228%2053.4372%2093.9484C53.9968%2093.874%2054.5655%2093.9108%2055.1108%2094.0567C55.6561%2094.2025%2056.1672%2094.4546%2056.6149%2094.7984C57.0627%2095.1422%2057.4382%2095.5709%2057.7199%2096.0601L61.6499%20102.88C61.9331%20103.368%2062.1172%20103.908%2062.1916%20104.467C62.266%20105.027%2062.2291%20105.596%2062.0832%20106.141C61.9374%20106.686%2061.6855%20107.197%2061.3418%20107.645C60.998%20108.093%2060.5692%20108.468%2060.08%20108.75C59.4292%20109.125%2058.6909%20109.321%2057.9399%20109.32Z'%20fill='%23A140FF'/%3e%3cpath%20d='M95.65%20144.15C94.8949%20144.148%2094.1536%20143.948%2093.5001%20143.57L87.9401%20140.36C86.9548%20139.791%2086.236%20138.854%2085.9415%20137.755C85.6471%20136.656%2085.8014%20135.485%2086.3702%20134.5C86.9394%20133.512%2087.8774%20132.791%2088.9781%20132.495C90.0789%20132.199%2091.2521%20132.352%2092.2401%20132.92L97.8002%20136.13C98.7861%20136.701%2099.5051%20137.64%2099.7994%20138.74C100.094%20139.841%2099.9395%20141.013%2099.3702%20142C98.9947%20142.654%2098.4527%20143.198%2097.7994%20143.576C97.1461%20143.953%2096.4046%20144.151%2095.65%20144.15Z'%20fill='%23A140FF'/%3e%3cpath%20d='M49.6399%20117.6C48.8882%20117.597%2048.1506%20117.397%2047.5%20117.02L40.6799%20113.09C39.694%20112.519%2038.975%20111.58%2038.6807%20110.48C38.3863%20109.379%2038.5408%20108.207%2039.1101%20107.22C39.6793%20106.232%2040.6173%20105.511%2041.718%20105.215C42.8187%20104.919%2043.992%20105.071%2044.98%20105.64L51.8001%20109.58C52.786%20110.151%2053.505%20111.09%2053.7993%20112.19C54.0937%20113.291%2053.9394%20114.463%2053.3701%20115.45C52.9922%20116.104%2052.4483%20116.648%2051.7935%20117.025C51.1386%20117.403%2050.3957%20117.601%2049.6399%20117.6Z'%20fill='%23A140FF'/%3e%3cpath%20d='M99.73%20128.91H93.1101C91.9705%20128.907%2090.8781%20128.453%2090.0723%20127.648C89.2664%20126.842%2088.8127%20125.75%2088.8101%20124.61C88.8127%20123.471%2089.2669%20122.38%2090.073%20121.576C90.8791%20120.772%2091.9714%20120.32%2093.1101%20120.32H99.73C100.869%20120.32%20101.961%20120.772%20102.767%20121.576C103.573%20122.38%20104.027%20123.471%20104.03%20124.61C104.027%20125.75%20103.573%20126.842%20102.768%20127.648C101.962%20128.453%20100.87%20128.907%2099.73%20128.91Z'%20fill='%23A140FF'/%3e%3cpath%20d='M46.4299%20128.91H38.75C37.6104%20128.907%2036.5182%20128.453%2035.7124%20127.648C34.9066%20126.842%2034.4526%20125.75%2034.45%20124.61C34.4526%20123.471%2034.9068%20122.38%2035.7129%20121.576C36.519%20120.772%2037.6113%20120.32%2038.75%20120.32H46.4299C47.5677%20120.32%2048.6588%20120.772%2049.4634%20121.577C50.2679%20122.381%2050.72%20123.472%2050.72%20124.61C50.72%20125.749%2050.2684%20126.841%2049.4641%20127.647C48.6599%20128.453%2047.5686%20128.907%2046.4299%20128.91Z'%20fill='%23A140FF'/%3e%3cpath%20d='M89.6201%20117.14C88.8643%20117.141%2088.1214%20116.943%2087.4666%20116.565C86.8117%20116.188%2086.2678%20115.645%2085.8899%20114.99C85.6087%20114.501%2085.4266%20113.962%2085.3538%20113.404C85.281%20112.845%2085.3191%20112.277%2085.4658%20111.732C85.6126%20111.188%2085.8651%20110.678%2086.209%20110.232C86.5529%20109.785%2086.9813%20109.411%2087.47%20109.13L93.47%20105.64C94.458%20105.071%2095.6315%20104.919%2096.7322%20105.215C97.8329%20105.511%2098.7709%20106.232%2099.3401%20107.22C99.9094%20108.207%20100.064%20109.379%2099.7693%20110.48C99.475%20111.58%2098.756%20112.519%2097.77%20113.09L91.77%20116.57C91.1169%20116.948%2090.3748%20117.145%2089.6201%20117.14Z'%20fill='%23A140FF'/%3e%3cpath%20d='M42.8301%20144.15C42.0759%20144.149%2041.3351%20143.95%2040.6821%20143.573C40.0292%20143.196%2039.4872%20142.653%2039.1101%20142C38.5408%20141.013%2038.3863%20139.841%2038.6807%20138.74C38.975%20137.64%2039.694%20136.701%2040.6799%20136.13L47.04%20132.46C48.0275%20131.893%2049.199%20131.741%2050.2988%20132.035C51.3986%20132.329%2052.3372%20133.046%2052.9099%20134.03C53.4792%20135.017%2053.6337%20136.189%2053.3394%20137.29C53.045%20138.39%2052.326%20139.329%2051.3401%20139.9L44.98%20143.57C44.3265%20143.948%2043.5852%20144.148%2042.8301%20144.15Z'%20fill='%23A140FF'/%3e%3cpath%20d='M69.77%20152.79H69.0801C64.1653%20152.684%2059.3701%20151.253%2055.2%20148.65C51.0776%20146.094%2047.6983%20142.501%2045.3999%20138.23C43.2516%20134.208%2042.1254%20129.72%2042.1201%20125.16C42.1201%20124.92%2042.1201%20124.7%2042.1201%20124.47C42.2384%20119.771%2043.553%20115.18%2045.9399%20111.13C48.3238%20107.086%2051.696%20103.714%2055.74%20101.33C59.8064%2098.9412%2064.4151%2097.6299%2069.1299%2097.52H69.76C74.3255%2097.5144%2078.8206%2098.645%2082.8401%20100.81C87.1079%20103.101%2090.6979%20106.473%2093.25%20110.59C95.859%20114.78%2097.2892%20119.596%2097.3899%20124.53C97.3899%20124.7%2097.3899%20124.92%2097.3899%20125.16C97.3909%20129.934%2096.1541%20134.627%2093.8%20138.78C91.3391%20143.139%2087.7366%20146.745%2083.3799%20149.21C79.2284%20151.558%2074.5397%20152.792%2069.77%20152.79ZM69.6599%20106.1H69.3899C66.1267%20106.166%2062.9352%20107.068%2060.1201%20108.72C57.3279%20110.364%2054.9985%20112.69%2053.3501%20115.48C51.7009%20118.282%2050.7954%20121.459%2050.72%20124.71C50.72%20124.89%2050.72%20125.02%2050.72%20125.15C50.721%20128.289%2051.4937%20131.38%2052.97%20134.15C54.5563%20137.102%2056.891%20139.585%2059.74%20141.35C62.6247%20143.14%2065.9362%20144.124%2069.3301%20144.2H69.77C73.0611%20144.204%2076.2967%20143.353%2079.1599%20141.73C82.1666%20140.028%2084.6526%20137.539%2086.3501%20134.53C87.9711%20131.67%2088.8221%20128.438%2088.8201%20125.15V124.77C88.7461%20121.354%2087.7622%20118.019%2085.97%20115.11C84.203%20112.271%2081.7243%20109.944%2078.78%20108.36C75.972%20106.868%2072.8395%20106.092%2069.6599%20106.1Z'%20fill='%23A140FF'/%3e%3cpath%20d='M80.8001%20108.87C80.049%20108.872%2079.3107%20108.675%2078.6599%20108.3C78.1708%20108.018%2077.742%20107.643%2077.3982%20107.195C77.0544%20106.747%2076.8026%20106.236%2076.6567%20105.691C76.5109%20105.146%2076.474%20104.577%2076.5483%20104.017C76.6227%20103.458%2076.8069%20102.918%2077.0901%20102.43L80.76%2096.0601C81.0417%2095.5709%2081.4173%2095.1422%2081.865%2094.7984C82.3127%2094.4546%2082.8238%2094.2025%2083.3691%2094.0567C83.9145%2093.9108%2084.4832%2093.874%2085.0427%2093.9484C85.6023%2094.0228%2086.1416%2094.2068%2086.6299%2094.49C87.1186%2094.7709%2087.5472%2095.1454%2087.8911%2095.592C88.235%2096.0385%2088.4876%2096.5485%2088.6343%2097.0927C88.781%2097.6369%2088.8191%2098.2047%2088.7463%2098.7636C88.6735%2099.3225%2088.4912%2099.8616%2088.21%20100.35L84.53%20106.72C84.1521%20107.375%2083.6082%20107.918%2082.9534%20108.295C82.2985%20108.673%2081.5559%20108.871%2080.8001%20108.87Z'%20fill='%23A140FF'/%3e%3cpath%20d='M54%20155.32C53.2479%20155.319%2052.5096%20155.119%2051.8601%20154.74C51.3709%20154.458%2050.9422%20154.083%2050.5984%20153.635C50.2546%20153.187%2050.0025%20152.676%2049.8567%20152.131C49.7108%20151.586%2049.6739%20151.017%2049.7483%20150.457C49.8227%20149.898%2050.0068%20149.358%2050.29%20148.87L53.76%20142.87C54.0417%20142.381%2054.4173%20141.952%2054.865%20141.608C55.3127%20141.265%2055.8238%20141.012%2056.3691%20140.867C56.9145%20140.721%2057.4832%20140.684%2058.0427%20140.758C58.6023%20140.833%2059.1416%20141.017%2059.6299%20141.3C60.6158%20141.871%2061.335%20142.81%2061.6294%20143.91C61.9238%20145.011%2061.7693%20146.183%2061.2%20147.17L57.73%20153.17C57.3521%20153.825%2056.8084%20154.368%2056.1536%20154.746C55.4987%20155.123%2054.7558%20155.321%2054%20155.32Z'%20fill='%23A140FF'/%3e%3cpath%20d='M108.84%20100.66C108.145%20100.66%20107.479%20100.384%20106.987%2099.8926C106.496%2099.4013%20106.22%2098.7349%20106.22%2098.0401V94.0401C106.22%2093.6965%20106.288%2093.3563%20106.42%2093.039C106.551%2092.7216%20106.745%2092.4334%20106.988%2092.1909C107.231%2091.9484%20107.52%2091.7564%20107.838%2091.6259C108.156%2091.4953%20108.496%2091.4288%20108.84%2091.4301C109.532%2091.4301%20110.196%2091.705%20110.686%2092.1945C111.175%2092.6839%20111.45%2093.3478%20111.45%2094.0401V98.0401C111.451%2098.3836%20111.385%2098.7241%20111.254%2099.0419C111.124%2099.3597%20110.932%2099.6486%20110.689%2099.892C110.447%20100.135%20110.158%20100.329%20109.841%20100.46C109.524%20100.592%20109.184%20100.66%20108.84%20100.66Z'%20fill='%23A140FF'/%3e%3cpath%20d='M108.84%2068.23C108.496%2068.2313%20108.156%2068.1648%20107.838%2068.0342C107.52%2067.9036%20107.231%2067.7116%20106.988%2067.4691C106.745%2067.2266%20106.551%2066.9384%20106.42%2066.6211C106.288%2066.3038%20106.22%2065.9636%20106.22%2065.62V60.9399C106.22%2060.2451%20106.496%2059.5787%20106.987%2059.0874C107.479%2058.5961%20108.145%2058.3199%20108.84%2058.3199C109.184%2058.3199%20109.524%2058.3879%20109.841%2058.5197C110.158%2058.6514%20110.447%2058.8446%20110.689%2059.088C110.932%2059.3314%20111.124%2059.6203%20111.254%2059.9381C111.385%2060.2559%20111.451%2060.5964%20111.45%2060.9399V65.62C111.45%2066.3122%20111.175%2066.9761%20110.686%2067.4656C110.196%2067.955%20109.532%2068.23%20108.84%2068.23Z'%20fill='%23A140FF'/%3e%3cpath%20d='M118.12%2098.17C117.661%2098.1712%20117.209%2098.0518%20116.811%2097.8236C116.413%2097.5954%20116.081%2097.2666%20115.85%2096.87L113.9%2093.49C113.558%2092.8825%20113.472%2092.1643%20113.659%2091.493C113.847%2090.8218%20114.293%2090.2525%20114.9%2089.91C115.2%2089.7411%20115.531%2089.6328%20115.872%2089.5917C116.214%2089.5505%20116.561%2089.5772%20116.892%2089.67C117.224%2089.7629%20117.534%2089.9202%20117.805%2090.1329C118.075%2090.3457%20118.301%2090.6098%20118.47%2090.91L120.47%2094.29C120.639%2094.5901%20120.747%2094.9203%20120.788%2095.2622C120.83%2095.604%20120.803%2095.9507%20120.71%2096.2822C120.617%2096.6138%20120.46%2096.9239%20120.247%2097.1946C120.034%2097.4653%20119.77%2097.6914%20119.47%2097.86C119.057%2098.0849%20118.59%2098.1922%20118.12%2098.17Z'%20fill='%23A140FF'/%3e%3cpath%20d='M102%2070.19C101.54%2070.1892%20101.088%2070.0678%20100.69%2069.8379C100.292%2069.6081%2099.9608%2069.2778%2099.73%2068.8801L97.3401%2064.73C97.1711%2064.43%2097.0629%2064.0996%2097.0217%2063.7577C96.9805%2063.4159%2097.0072%2063.0693%2097.1001%2062.7377C97.193%2062.4062%2097.3502%2062.0962%2097.563%2061.8255C97.7757%2061.5548%2098.0399%2061.3287%2098.3401%2061.1601C98.6398%2060.9898%2098.9701%2060.8806%2099.3122%2060.8387C99.6544%2060.7968%20100.002%2060.8231%20100.333%2060.9161C100.665%2061.009%20100.975%2061.1668%20101.246%2061.3803C101.517%2061.5938%20101.742%2061.8589%20101.91%2062.1601L104.3%2066.3101C104.469%2066.6101%20104.577%2066.9404%20104.618%2067.2823C104.66%2067.6241%20104.633%2067.9707%20104.54%2068.3023C104.447%2068.6339%20104.29%2068.9439%20104.077%2069.2147C103.864%2069.4854%20103.6%2069.7115%20103.3%2069.8801C102.9%2070.0919%20102.453%2070.1985%20102%2070.19Z'%20fill='%23A140FF'/%3e%3cpath%20d='M124.91%2091.3801C124.45%2091.3823%20123.998%2091.2615%20123.6%2091.0301L120.22%2089.0301C119.92%2088.8615%20119.656%2088.6353%20119.443%2088.3646C119.23%2088.0938%20119.073%2087.7839%20118.98%2087.4523C118.887%2087.1208%20118.86%2086.7742%20118.902%2086.4323C118.943%2086.0905%20119.051%2085.76%20119.22%2085.46C119.388%2085.1588%20119.613%2084.8939%20119.884%2084.6803C120.154%2084.4668%20120.465%2084.309%20120.797%2084.216C121.129%2084.123%20121.475%2084.0967%20121.818%2084.1386C122.16%2084.1805%20122.49%2084.2897%20122.79%2084.46L126.17%2086.46C126.471%2086.6276%20126.736%2086.8534%20126.95%2087.124C127.163%2087.3946%20127.321%2087.7048%20127.414%2088.0367C127.507%2088.3686%20127.533%2088.7156%20127.491%2089.0578C127.45%2089.3999%20127.34%2089.7304%20127.17%2090.0301C126.947%2090.4359%20126.621%2090.7749%20126.223%2091.0123C125.826%2091.2496%20125.373%2091.3765%20124.91%2091.3801Z'%20fill='%23A140FF'/%3e%3cpath%20d='M96.9199%2075.22C96.4598%2075.2222%2096.0077%2075.1014%2095.6101%2074.87L91.46%2072.48C91.1597%2072.3114%2090.8956%2072.0853%2090.6829%2071.8146C90.4701%2071.5439%2090.3128%2071.2338%2090.22%2070.9023C90.1271%2070.5707%2090.1004%2070.2241%2090.1416%2069.8822C90.1828%2069.5404%2090.291%2069.2101%2090.46%2068.9101C90.8024%2068.303%2091.3717%2067.8567%2092.043%2067.6692C92.7142%2067.4817%2093.4326%2067.5684%2094.04%2067.9101L98.1799%2070.3001C98.7869%2070.6425%2099.2334%2071.2118%2099.4209%2071.8831C99.6084%2072.5543%2099.5216%2073.2726%2099.1799%2073.88C98.9553%2074.2833%2098.628%2074.6197%2098.2309%2074.8551C97.8339%2075.0905%2097.3815%2075.2164%2096.9199%2075.22Z'%20fill='%23A140FF'/%3e%3cpath%20d='M127.39%2082.11H123.39C123.046%2082.11%20122.706%2082.0422%20122.389%2081.9104C122.072%2081.7786%20121.784%2081.5855%20121.541%2081.3421C121.299%2081.0986%20121.106%2080.8097%20120.976%2080.4918C120.845%2080.174%20120.779%2079.8336%20120.78%2079.49C120.78%2078.7978%20121.055%2078.1339%20121.544%2077.6444C122.034%2077.155%20122.698%2076.88%20123.39%2076.88H127.39C127.734%2076.8787%20128.074%2076.9452%20128.392%2077.0758C128.71%2077.2064%20128.999%2077.3984%20129.242%2077.6409C129.485%2077.8834%20129.679%2078.1716%20129.81%2078.4889C129.942%2078.8062%20130.01%2079.1464%20130.01%2079.49C130.01%2080.1849%20129.734%2080.8513%20129.243%2081.3427C128.751%2081.834%20128.085%2082.11%20127.39%2082.11Z'%20fill='%23A140FF'/%3e%3cpath%20d='M95%2082.11H90.3201C89.9765%2082.11%2089.6362%2082.0422%2089.3189%2081.9104C89.0016%2081.7786%2088.7135%2081.5855%2088.471%2081.342C88.2285%2081.0986%2088.0364%2080.8096%2087.9058%2080.4918C87.7752%2080.174%2087.7087%2079.8336%2087.71%2079.49C87.71%2079.1472%2087.7775%2078.8079%2087.9087%2078.4912C88.0399%2078.1746%2088.232%2077.8868%2088.4744%2077.6444C88.7167%2077.402%2089.0046%2077.2099%2089.3213%2077.0787C89.638%2076.9476%2089.9773%2076.88%2090.3201%2076.88H95C95.6922%2076.88%2096.356%2077.1549%2096.8455%2077.6444C97.3349%2078.1339%2097.6101%2078.7978%2097.6101%2079.49C97.6114%2079.8336%2097.5449%2080.174%2097.4143%2080.4918C97.2838%2080.8096%2097.0916%2081.0986%2096.8491%2081.342C96.6066%2081.5855%2096.3186%2081.7786%2096.0012%2081.9104C95.6839%2082.0422%2095.3436%2082.11%2095%2082.11Z'%20fill='%23A140FF'/%3e%3cpath%20d='M121.24%2075C120.78%2074.9992%20120.328%2074.8778%20119.93%2074.648C119.532%2074.4181%20119.201%2074.0877%20118.97%2073.69C118.801%2073.3899%20118.693%2073.0596%20118.652%2072.7178C118.61%2072.3759%20118.637%2072.0293%20118.73%2071.6978C118.823%2071.3662%20118.98%2071.0561%20119.193%2070.7854C119.406%2070.5147%20119.67%2070.2886%20119.97%2070.12L123.64%2068C123.94%2067.8311%20124.27%2067.723%20124.612%2067.6818C124.954%2067.6406%20125.301%2067.6672%20125.632%2067.76C125.964%2067.8529%20126.274%2068.0103%20126.545%2068.223C126.815%2068.4358%20127.041%2068.6998%20127.21%2069C127.38%2069.2997%20127.49%2069.6302%20127.531%2069.9723C127.573%2070.3144%20127.547%2070.6615%20127.454%2070.9934C127.361%2071.3253%20127.203%2071.6355%20126.99%2071.9061C126.776%2072.1767%20126.511%2072.4023%20126.21%2072.57L122.54%2074.69C122.14%2074.9018%20121.693%2075.0086%20121.24%2075Z'%20fill='%23A140FF'/%3e%3cpath%20d='M92.77%2091.3801C92.3112%2091.3805%2091.8605%2091.2595%2091.4636%2091.0295C91.0667%2090.7994%2090.7376%2090.4683%2090.51%2090.07C90.3363%2089.7736%2090.2232%2089.4459%2090.177%2089.1055C90.1308%2088.7651%2090.1524%2088.4189%2090.2407%2088.087C90.329%2087.755%2090.4824%2087.4439%2090.6916%2087.1716C90.9009%2086.8992%2091.162%2086.6709%2091.4599%2086.5001L95.3301%2084.2701C95.6298%2084.0998%2095.9601%2083.9905%2096.3022%2083.9487C96.6444%2083.9068%2096.9916%2083.9331%2097.3235%2084.0261C97.6554%2084.119%2097.9655%2084.2768%2098.2361%2084.4903C98.5067%2084.7038%2098.7323%2084.9689%2098.8999%2085.2701C99.0688%2085.5701%2099.1771%2085.9005%2099.2182%2086.2424C99.2594%2086.5842%2099.2328%2086.9308%2099.1399%2087.2624C99.047%2087.5939%2098.8898%2087.9039%2098.677%2088.1746C98.4642%2088.4453%2098.2001%2088.6714%2097.8999%2088.84L94.04%2091.08C93.6486%2091.2851%2093.2118%2091.3883%2092.77%2091.3801Z'%20fill='%23A140FF'/%3e%3cpath%20d='M109.16%2096.64H108.73C105.744%2096.575%20102.832%2095.7043%20100.3%2094.12C97.7773%2092.5711%2095.7077%2090.3842%2094.3001%2087.78C92.9846%2085.3188%2092.2976%2082.5707%2092.3001%2079.78V79.3499C92.3728%2076.4922%2093.1747%2073.7005%2094.6299%2071.24C96.0853%2068.7609%2098.1508%2066.6954%20100.63%2065.24C103.105%2063.787%20105.91%2062.9887%20108.78%2062.92H109.16C111.951%2062.9113%20114.701%2063.5987%20117.16%2064.92C119.764%2066.328%20121.951%2068.3975%20123.5%2070.92C125.08%2073.4718%20125.95%2076.3993%20126.02%2079.4V79.79C126.022%2082.6921%20125.271%2085.545%20123.84%2088.0699C122.34%2090.7248%20120.145%2092.9204%20117.49%2094.42C114.954%2095.8728%20112.083%2096.638%20109.16%2096.64ZM109.09%2068.2299H108.94C106.951%2068.2632%20105.005%2068.811%20103.29%2069.8199C101.589%2070.8211%20100.171%2072.239%2099.1699%2073.9399C98.1678%2075.6432%2097.6172%2077.5743%2097.5701%2079.55V79.8199C97.569%2081.7315%2098.0395%2083.6138%2098.9399%2085.3C99.9054%2087.0902%20101.322%2088.5967%20103.05%2089.67C104.807%2090.7596%20106.823%2091.3603%20108.89%2091.41H109.16C111.161%2091.4113%20113.128%2090.8945%20114.87%2089.91C116.7%2088.8744%20118.214%2087.3603%20119.25%2085.53C120.232%2083.787%20120.749%2081.8205%20120.75%2079.8199V79.5799C120.705%2077.5043%20120.108%2075.4783%20119.02%2073.7099C117.943%2071.9815%20116.433%2070.5647%20114.64%2069.5999C112.932%2068.691%20111.025%2068.2203%20109.09%2068.2299Z'%20fill='%23A140FF'/%3e%3cpath%20d='M115.87%2069.9101C115.413%2069.911%20114.965%2069.7902%20114.57%2069.5601C114.27%2069.3915%20114.006%2069.1653%20113.793%2068.8945C113.58%2068.6238%20113.423%2068.3139%20113.33%2067.9823C113.237%2067.6508%20113.211%2067.3041%20113.252%2066.9623C113.293%2066.6204%20113.401%2066.29%20113.57%2065.99L115.81%2062.12C115.979%2061.8198%20116.205%2061.5558%20116.475%2061.343C116.746%2061.1303%20117.056%2060.9729%20117.388%2060.88C117.719%2060.7871%20118.066%2060.7606%20118.408%2060.8018C118.75%2060.843%20119.08%2060.9511%20119.38%2061.12C119.68%2061.2886%20119.944%2061.5147%20120.157%2061.7854C120.37%2062.0561%20120.527%2062.3662%20120.62%2062.6978C120.713%2063.0293%20120.739%2063.3759%20120.698%2063.7178C120.657%2064.0596%20120.549%2064.3899%20120.38%2064.69L118.14%2068.57C117.915%2068.9754%20117.587%2069.3134%20117.187%2069.549C116.788%2069.7846%20116.334%2069.9093%20115.87%2069.9101Z'%20fill='%23A140FF'/%3e%3cpath%20d='M99.56%2098.1701C99.1033%2098.171%2098.6545%2098.0501%2098.26%2097.82C97.9598%2097.6514%2097.6957%2097.4253%2097.4829%2097.1546C97.2701%2096.8838%2097.1129%2096.5739%2097.02%2096.2423C96.9271%2095.9108%2096.9005%2095.5642%2096.9416%2095.2223C96.9828%2094.8805%2097.091%2094.55%2097.26%2094.25L99.3701%2090.59C99.5387%2090.2898%2099.7647%2090.0258%20100.035%2089.813C100.306%2089.6002%20100.616%2089.4429%20100.948%2089.35C101.279%2089.2571%20101.626%2089.2306%20101.968%2089.2717C102.31%2089.3129%20102.64%2089.421%20102.94%2089.59C103.24%2089.7586%20103.504%2089.9848%20103.717%2090.2555C103.93%2090.5262%20104.087%2090.8362%20104.18%2091.1677C104.273%2091.4993%20104.299%2091.8459%20104.258%2092.1878C104.217%2092.5296%20104.109%2092.86%20103.94%2093.1601L101.83%2096.83C101.602%2097.2326%20101.273%2097.5684%20100.874%2097.8036C100.476%2098.0388%20100.023%2098.1652%2099.56%2098.1701Z'%20fill='%23A140FF'/%3e%3c/svg%3e", xC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bC
}, Symbol.toStringTag, { value: "Module" })), wC = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140.38%2049.25C134.913%2049.2447%20129.671%2047.0704%20125.805%2043.2046C121.939%2039.3387%20119.765%2034.097%20119.76%2028.6299V1.85854e-06H27.63C24.0953%20-0.00131167%2020.5949%200.693646%2017.3289%202.04541C14.0628%203.39718%2011.0952%205.37922%208.59534%207.87818C6.09545%2010.3771%204.11238%2013.3441%202.7594%2016.6096C1.40642%2019.8751%200.709961%2023.3752%200.709961%2026.9099V189.13C0.709961%20192.665%201.40642%20196.165%202.7594%20199.43C4.11238%20202.696%206.09545%20205.663%208.59534%20208.162C11.0952%20210.661%2014.0628%20212.643%2017.3289%20213.994C20.5949%20215.346%2024.0953%20216.041%2027.63%20216.04H138.23C141.764%20216.04%20145.263%20215.344%20148.528%20213.992C151.793%20212.639%20154.759%20210.657%20157.258%20208.158C159.757%20205.659%20161.739%20202.693%20163.092%20199.428C164.444%20196.163%20165.14%20192.664%20165.14%20189.13V49.25H140.38Z'%20fill='%230072FF'/%3e%3c/g%3e%3cpath%20d='M165.14%2049.25H140.38C134.913%2049.2447%20129.671%2047.0704%20125.805%2043.2046C121.939%2039.3387%20119.765%2034.097%20119.76%2028.6299V0L165.14%2049.25Z'%20fill='%230072FF'/%3e%3cpath%20d='M131.31%2083.73H28.07C27.078%2083.73%2026.1268%2083.3359%2025.4254%2082.6345C24.724%2081.9331%2024.33%2080.9819%2024.33%2079.99C24.3287%2079.498%2024.4245%2079.0106%2024.6118%2078.5557C24.7992%2078.1008%2025.0745%2077.6872%2025.4219%2077.3389C25.7693%2076.9905%2026.1821%2076.7142%2026.6365%2076.5256C27.0909%2076.3371%2027.578%2076.24%2028.07%2076.24H131.31C132.305%2076.24%20133.258%2076.6351%20133.962%2077.3384C134.665%2078.0416%20135.06%2078.9954%20135.06%2079.99C135.057%2080.9828%20134.661%2081.9342%20133.958%2082.6353C133.255%2083.3364%20132.303%2083.73%20131.31%2083.73Z'%20fill='%230072FF'/%3e%3cpath%20d='M131.31%20106.1H28.07C27.078%20106.1%2026.1268%20105.706%2025.4254%20105.005C24.724%20104.303%2024.33%20103.352%2024.33%20102.36C24.3287%20101.868%2024.4245%20101.381%2024.6118%20100.926C24.7992%20100.471%2025.0745%20100.057%2025.4219%2099.709C25.7693%2099.3606%2026.1821%2099.0843%2026.6365%2098.8958C27.0909%2098.7072%2027.578%2098.6101%2028.07%2098.6101H131.31C132.305%2098.6101%20133.258%2099.005%20133.962%2099.7083C134.665%20100.412%20135.06%20101.366%20135.06%20102.36C135.057%20103.353%20134.661%20104.304%20133.958%20105.005C133.255%20105.706%20132.303%20106.1%20131.31%20106.1Z'%20fill='%230072FF'/%3e%3cpath%20d='M131.31%20128.47H28.07C27.578%20128.47%2027.0909%20128.373%2026.6365%20128.184C26.1821%20127.996%2025.7693%20127.719%2025.4219%20127.371C25.0745%20127.023%2024.7992%20126.609%2024.6118%20126.154C24.4245%20125.699%2024.3287%20125.212%2024.33%20124.72C24.33%20123.728%2024.724%20122.777%2025.4254%20122.075C26.1268%20121.374%2027.078%20120.98%2028.07%20120.98H131.31C132.303%20120.98%20133.255%20121.374%20133.958%20122.075C134.661%20122.776%20135.057%20123.727%20135.06%20124.72C135.06%20125.715%20134.665%20126.668%20133.962%20127.372C133.258%20128.075%20132.305%20128.47%20131.31%20128.47Z'%20fill='%230072FF'/%3e%3cpath%20d='M90.59%20150.84H28.07C27.578%20150.84%2027.0909%20150.743%2026.6365%20150.554C26.1821%20150.366%2025.7693%20150.089%2025.4219%20149.741C25.0745%20149.393%2024.7992%20148.979%2024.6118%20148.524C24.4245%20148.07%2024.3287%20147.582%2024.33%20147.09C24.33%20146.098%2024.724%20145.147%2025.4254%20144.445C26.1268%20143.744%2027.078%20143.35%2028.07%20143.35H90.59C91.5819%20143.35%2092.5332%20143.744%2093.2346%20144.445C93.936%20145.147%2094.33%20146.098%2094.33%20147.09C94.3313%20147.582%2094.2356%20148.07%2094.0482%20148.524C93.8609%20148.979%2093.5856%20149.393%2093.2382%20149.741C92.8908%20150.089%2092.478%20150.366%2092.0236%20150.554C91.5692%20150.743%2091.082%20150.84%2090.59%20150.84Z'%20fill='%230072FF'/%3e%3cpath%20d='M184.66%20170.61H59.62C50.7503%20170.61%2043.5601%20177.8%2043.5601%20186.67V223.95C43.5601%20232.82%2050.7503%20240.01%2059.62%20240.01H184.66C193.53%20240.01%20200.72%20232.82%20200.72%20223.95V186.67C200.72%20177.8%20193.53%20170.61%20184.66%20170.61Z'%20fill='%230072FF'/%3e%3cpath%20d='M76.9301%20213.38V220.65H69.4V213.38H76.9301Z'%20fill='white'/%3e%3cpath%20d='M105.87%20213.4C104.618%20215.674%20102.727%20217.53%20100.43%20218.74C97.8455%20220.062%2094.9721%20220.718%2092.0699%20220.65H80.71V190.58H92.0699C94.9742%20190.508%2097.8517%20191.15%20100.45%20192.45C102.737%20193.638%20104.623%20195.474%20105.87%20197.73C107.163%20200.13%20107.814%20202.824%20107.76%20205.55C107.811%20208.285%20107.161%20210.988%20105.87%20213.4ZM98.05%20211.89C98.863%20211.056%2099.4927%20210.061%2099.899%20208.969C100.305%20207.877%20100.48%20206.713%20100.41%20205.55C100.48%20204.389%20100.306%20203.225%2099.8997%20202.135C99.4932%20201.045%2098.8632%20200.052%2098.05%20199.22C96.2281%20197.623%2093.8485%20196.81%2091.4301%20196.96H88V214.14H91.4399C93.853%20214.286%2096.2269%20213.478%2098.05%20211.89Z'%20fill='white'/%3e%3cpath%20d='M133.9%20192.09C136.188%20193.389%20138.079%20195.287%20139.37%20197.58C140.723%20200.001%20141.413%20202.737%20141.37%20205.51C141.416%20208.29%20140.726%20211.033%20139.37%20213.46C138.075%20215.761%20136.177%20217.666%20133.88%20218.97C131.542%20220.305%20128.892%20220.995%20126.2%20220.97C123.508%20220.994%20120.858%20220.304%20118.52%20218.97C116.224%20217.669%20114.329%20215.763%20113.04%20213.46C111.68%20211.034%20110.989%20208.29%20111.04%20205.51C110.988%20202.736%20111.679%20199.998%20113.04%20197.58C114.335%20195.287%20116.229%20193.389%20118.52%20192.09C120.858%20190.756%20123.508%20190.066%20126.2%20190.09C128.898%20190.065%20131.555%20190.755%20133.9%20192.09ZM120.5%20199.19C119.025%20200.955%20118.274%20203.213%20118.4%20205.51C118.274%20207.797%20119.025%20210.047%20120.5%20211.8C121.219%20212.581%20122.099%20213.195%20123.081%20213.599C124.062%20214.004%20125.12%20214.188%20126.18%20214.14C127.237%20214.185%20128.291%20213.999%20129.268%20213.595C130.246%20213.191%20131.124%20212.578%20131.84%20211.8C133.322%20210.05%20134.081%20207.8%20133.96%20205.51C134.08%20203.223%20133.33%20200.976%20131.86%20199.22C131.142%20198.438%20130.261%20197.824%20129.28%20197.42C128.298%20197.015%20127.24%20196.831%20126.18%20196.88C125.123%20196.831%20124.067%20197.013%20123.086%20197.412C122.106%20197.81%20121.223%20198.417%20120.5%20199.19Z'%20fill='white'/%3e%3cpath%20d='M168.69%20193.3C171.226%20195.364%20172.951%20198.257%20173.56%20201.47H165.86C165.34%20200.139%20164.431%20198.995%20163.25%20198.19C162.005%20197.38%20160.545%20196.965%20159.06%20197C158.08%20196.969%20157.105%20197.163%20156.212%20197.569C155.319%20197.975%20154.531%20198.581%20153.91%20199.34C152.517%20201.121%20151.808%20203.342%20151.91%20205.6C151.808%20207.849%20152.518%20210.06%20153.91%20211.83C154.536%20212.581%20155.326%20213.18%20156.218%20213.58C157.11%20213.981%20158.082%20214.172%20159.06%20214.14C160.545%20214.18%20162.007%20213.764%20163.25%20212.95C164.424%20212.159%20165.333%20211.034%20165.86%20209.72H173.56C172.941%20212.923%20171.218%20215.808%20168.69%20217.87C165.97%20219.947%20162.609%20221.008%20159.19%20220.87C156.496%20220.927%20153.836%20220.257%20151.49%20218.93C149.295%20217.654%20147.514%20215.772%20146.36%20213.51C145.12%20211.029%20144.503%20208.283%20144.56%20205.51C144.504%20202.737%20145.121%20199.992%20146.36%20197.51C147.514%20195.248%20149.295%20193.366%20151.49%20192.09C153.836%20190.763%20156.496%20190.093%20159.19%20190.15C162.627%20190.059%20165.988%20191.173%20168.69%20193.3Z'%20fill='white'/%3e%3c/svg%3e", _C = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wC
}, Symbol.toStringTag, { value: "Module" })), EC = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M139.81%2049.25C134.343%2049.2447%20129.101%2047.0704%20125.235%2043.2046C121.369%2039.3387%20119.195%2034.097%20119.19%2028.6299V1.85854e-06H27.0601C23.5253%20-0.00131167%2020.0249%200.693646%2016.7589%202.04541C13.4929%203.39718%2010.5252%205.37922%208.02527%207.87818C5.52538%2010.3771%203.54231%2013.3441%202.18933%2016.6096C0.836352%2019.8751%200.140014%2023.3752%200.140015%2026.9099V189.13C0.140014%20192.665%200.836352%20196.165%202.18933%20199.43C3.54231%20202.696%205.52538%20205.663%208.02527%20208.162C10.5252%20210.661%2013.4929%20212.643%2016.7589%20213.994C20.0249%20215.346%2023.5253%20216.041%2027.0601%20216.04H137.66C144.797%20216.04%20151.642%20213.205%20156.688%20208.158C161.735%20203.112%20164.57%20196.267%20164.57%20189.13V49.25H139.81Z'%20fill='%230072FF'/%3e%3c/g%3e%3cpath%20d='M164.57%2049.25H139.81C134.343%2049.2447%20129.101%2047.0704%20125.235%2043.2046C121.369%2039.3387%20119.195%2034.097%20119.19%2028.6299V0L164.57%2049.25Z'%20fill='%230072FF'/%3e%3cpath%20d='M130.74%2083.73H27.5C26.5081%2083.73%2025.5569%2083.3359%2024.8555%2082.6345C24.1541%2081.9331%2023.76%2080.9819%2023.76%2079.99C23.7587%2079.498%2023.8545%2079.0106%2024.0419%2078.5557C24.2292%2078.1008%2024.5045%2077.6872%2024.8519%2077.3389C25.1994%2076.9905%2025.612%2076.7142%2026.0664%2076.5256C26.5208%2076.3371%2027.008%2076.24%2027.5%2076.24H130.74C131.735%2076.24%20132.688%2076.6351%20133.392%2077.3384C134.095%2078.0416%20134.49%2078.9954%20134.49%2079.99C134.487%2080.9828%20134.091%2081.9342%20133.388%2082.6353C132.685%2083.3364%20131.733%2083.73%20130.74%2083.73Z'%20fill='%230072FF'/%3e%3cpath%20d='M130.74%20106.1H27.5C26.5081%20106.1%2025.5569%20105.706%2024.8555%20105.005C24.1541%20104.303%2023.76%20103.352%2023.76%20102.36C23.7587%20101.868%2023.8545%20101.381%2024.0419%20100.926C24.2292%20100.471%2024.5045%20100.057%2024.8519%2099.709C25.1994%2099.3606%2025.612%2099.0843%2026.0664%2098.8958C26.5208%2098.7072%2027.008%2098.6101%2027.5%2098.6101H130.74C131.735%2098.6101%20132.688%2099.005%20133.392%2099.7083C134.095%20100.412%20134.49%20101.366%20134.49%20102.36C134.487%20103.353%20134.091%20104.304%20133.388%20105.005C132.685%20105.706%20131.733%20106.1%20130.74%20106.1Z'%20fill='%230072FF'/%3e%3cpath%20d='M130.74%20128.47H27.5C27.008%20128.47%2026.5208%20128.373%2026.0664%20128.184C25.612%20127.996%2025.1994%20127.719%2024.8519%20127.371C24.5045%20127.023%2024.2292%20126.609%2024.0419%20126.154C23.8545%20125.699%2023.7587%20125.212%2023.76%20124.72C23.76%20123.728%2024.1541%20122.777%2024.8555%20122.075C25.5569%20121.374%2026.5081%20120.98%2027.5%20120.98H130.74C131.733%20120.98%20132.685%20121.374%20133.388%20122.075C134.091%20122.776%20134.487%20123.727%20134.49%20124.72C134.49%20125.715%20134.095%20126.668%20133.392%20127.372C132.688%20128.075%20131.735%20128.47%20130.74%20128.47Z'%20fill='%230072FF'/%3e%3cpath%20d='M90%20150.84H27.5C27.008%20150.84%2026.5208%20150.743%2026.0664%20150.554C25.612%20150.366%2025.1994%20150.089%2024.8519%20149.741C24.5045%20149.393%2024.2292%20148.979%2024.0419%20148.524C23.8545%20148.07%2023.7587%20147.582%2023.76%20147.09C23.76%20146.098%2024.1541%20145.147%2024.8555%20144.445C25.5569%20143.744%2026.5081%20143.35%2027.5%20143.35H90C90.9919%20143.35%2091.9432%20143.744%2092.6445%20144.445C93.3459%20145.147%2093.74%20146.098%2093.74%20147.09C93.7413%20147.582%2093.6455%20148.07%2093.4581%20148.524C93.2708%20148.979%2092.9955%20149.393%2092.6481%20149.741C92.3007%20150.089%2091.888%20150.366%2091.4336%20150.554C90.9792%20150.743%2090.492%20150.84%2090%20150.84Z'%20fill='%230072FF'/%3e%3cpath%20d='M184.09%20170.61H59.05C50.1803%20170.61%2042.99%20177.8%2042.99%20186.67V223.95C42.99%20232.82%2050.1803%20240.01%2059.05%20240.01H184.09C192.96%20240.01%20200.15%20232.82%20200.15%20223.95V186.67C200.15%20177.8%20192.96%20170.61%20184.09%20170.61Z'%20fill='%230072FF'/%3e%3cpath%20d='M61.3199%20213.38V220.65H53.79V213.38H61.3199Z'%20fill='white'/%3e%3cpath%20d='M90.26%20213.4C89.0051%20215.671%2087.1144%20217.527%2084.8199%20218.74C82.2354%20220.062%2079.3621%20220.718%2076.46%20220.65H65.1V190.58H76.46C79.3641%20190.509%2082.2413%20191.151%2084.84%20192.45C87.1274%20193.637%2089.013%20195.474%2090.26%20197.73C91.5529%20200.13%2092.204%20202.824%2092.15%20205.55C92.2015%20208.285%2091.5508%20210.988%2090.26%20213.4ZM82.4399%20211.89C83.2528%20211.055%2083.8827%20210.061%2084.2891%20208.969C84.6954%20207.877%2084.8695%20206.713%2084.8%20205.55C84.87%20204.389%2084.6961%20203.225%2084.2897%20202.135C83.8832%20201.045%2083.2531%20200.052%2082.4399%20199.22C80.618%20197.622%2078.2384%20196.81%2075.8199%20196.96H72.38V214.14H75.8199C78.2364%20214.288%2080.6143%20213.48%2082.4399%20211.89Z'%20fill='white'/%3e%3cpath%20d='M118.29%20192.09C120.578%20193.389%20122.469%20195.287%20123.76%20197.58C125.113%20200.001%20125.803%20202.737%20125.76%20205.51C125.811%20208.29%20125.12%20211.034%20123.76%20213.46C122.472%20215.763%20120.576%20217.669%20118.28%20218.97C115.942%20220.305%20113.292%20220.995%20110.6%20220.97C107.908%20220.995%20105.258%20220.305%20102.92%20218.97C100.624%20217.669%2098.7284%20215.763%2097.44%20213.46C96.0797%20211.034%2095.3894%20208.29%2095.44%20205.51C95.3881%20202.736%2096.0786%20199.998%2097.44%20197.58C98.735%20195.287%20100.629%20193.389%20102.92%20192.09C105.258%20190.755%20107.908%20190.065%20110.6%20190.09C113.295%20190.066%20115.948%20190.756%20118.29%20192.09ZM104.89%20199.19C103.415%20200.955%20102.664%20203.213%20102.79%20205.51C102.664%20207.797%20103.415%20210.047%20104.89%20211.8C105.609%20212.581%20106.489%20213.195%20107.471%20213.599C108.452%20214.004%20109.51%20214.188%20110.57%20214.14C111.627%20214.184%20112.68%20213.997%20113.658%20213.593C114.635%20213.189%20115.513%20212.577%20116.23%20211.8C117.712%20210.05%20118.471%20207.8%20118.35%20205.51C118.47%20203.223%20117.72%20200.976%20116.25%20199.22C115.532%20198.438%20114.651%20197.824%20113.67%20197.42C112.688%20197.015%20111.63%20196.831%20110.57%20196.88C109.512%20196.831%20108.457%20197.013%20107.476%20197.412C106.496%20197.81%20105.613%20198.417%20104.89%20199.19Z'%20fill='white'/%3e%3cpath%20d='M153.08%20193.3C155.616%20195.364%20157.341%20198.257%20157.95%20201.47H150.25C149.731%20200.139%20148.821%20198.995%20147.64%20198.19C146.395%20197.38%20144.935%20196.965%20143.45%20197C142.47%20196.969%20141.495%20197.163%20140.602%20197.569C139.709%20197.975%20138.921%20198.581%20138.3%20199.34C136.908%20201.122%20136.199%20203.342%20136.3%20205.6C136.198%20207.849%20136.908%20210.06%20138.3%20211.83C138.926%20212.581%20139.716%20213.18%20140.608%20213.58C141.501%20213.981%20142.472%20214.172%20143.45%20214.14C144.935%20214.18%20146.397%20213.764%20147.64%20212.95C148.814%20212.159%20149.724%20211.034%20150.25%20209.72H157.95C157.331%20212.923%20155.608%20215.808%20153.08%20217.87C150.36%20219.947%20147%20221.008%20143.58%20220.87C140.886%20220.927%20138.226%20220.257%20135.88%20218.93C133.685%20217.654%20131.904%20215.772%20130.75%20213.51C129.507%20211.029%20128.886%20208.284%20128.94%20205.51C128.887%20202.736%20129.508%20199.991%20130.75%20197.51C131.904%20195.248%20133.685%20193.366%20135.88%20192.09C138.226%20190.763%20140.886%20190.093%20143.58%20190.15C147.017%20190.059%20150.378%20191.173%20153.08%20193.3Z'%20fill='white'/%3e%3cpath%20d='M180.28%20220.65L173.94%20211.29L168.5%20220.65H160.16L169.78%20205.17L159.87%20190.58H168.5L174.67%20199.64L179.98%20190.58H188.28L178.79%20205.72L188.91%20220.65H180.28Z'%20fill='white'/%3e%3c/svg%3e", SC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: EC
}, Symbol.toStringTag, { value: "Module" })), MC = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140%2049.24C134.531%2049.2373%20129.287%2047.0644%20125.419%2043.1982C121.551%2039.3321%20119.375%2034.0889%20119.37%2028.62V0H27.2C23.6652%20-2.4406e-07%2020.1652%200.696337%2016.8997%202.04932C13.6341%203.4023%2010.6672%205.38537%208.16821%207.88525C5.66926%2010.3851%203.68734%2013.3529%202.33557%2016.6189C0.983807%2019.8849%200.288727%2023.3853%200.290041%2026.92V189.13C0.300639%20196.26%203.14046%20203.094%208.18591%20208.132C13.2314%20213.17%2020.0699%20216%2027.2%20216H137.8C141.335%20216%20144.835%20215.304%20148.1%20213.951C151.366%20212.598%20154.333%20210.615%20156.832%20208.115C159.331%20205.615%20161.313%20202.647%20162.665%20199.381C164.016%20196.115%20164.711%20192.615%20164.71%20189.08V49.2L140%2049.24Z'%20fill='%23005FAD'/%3e%3c/g%3e%3cpath%20d='M164.71%2049.24H140C134.531%2049.2373%20129.287%2047.0644%20125.419%2043.1982C121.551%2039.3321%20119.375%2034.0889%20119.37%2028.62V0L164.71%2049.24Z'%20fill='%23005FAD'/%3e%3cpath%20d='M123.78%2086.34H34.78C33.9234%2086.34%2033.1018%2085.9997%2032.4961%2085.3939C31.8904%2084.7882%2031.55%2083.9666%2031.55%2083.11C31.55%2082.2533%2031.8904%2081.4318%2032.4961%2080.826C33.1018%2080.2203%2033.9234%2079.88%2034.78%2079.88H123.78C124.204%2079.88%20124.623%2079.9637%20125.015%2080.1261C125.406%2080.2885%20125.761%2080.5266%20126.06%2080.8267C126.36%2081.1267%20126.597%2081.4828%20126.758%2081.8746C126.919%2082.2665%20127.001%2082.6863%20127%2083.11C127%2083.9649%20126.661%2084.7849%20126.057%2085.3904C125.454%2085.9958%20124.635%2086.3373%20123.78%2086.34Z'%20fill='%23005FAD'/%3e%3cpath%20d='M184.23%20170.6H59.1899C50.3202%20170.6%2043.13%20177.79%2043.13%20186.66V223.94C43.13%20232.81%2050.3202%20240%2059.1899%20240H184.23C193.1%20240%20200.29%20232.81%20200.29%20223.94V186.66C200.29%20177.79%20193.1%20170.6%20184.23%20170.6Z'%20fill='%23005FAD'/%3e%3cpath%20d='M71%20213.37V220.65H63.47V213.37H71Z'%20fill='white'/%3e%3cpath%20d='M100%20213.39C98.7508%20215.666%2096.8587%20217.523%2094.5601%20218.73C91.978%20220.06%2089.1034%20220.72%2086.2%20220.65H74.8V190.58H86.16C89.0647%20190.504%2091.9431%20191.147%2094.54%20192.45C96.8271%20193.633%2098.7128%20195.467%2099.96%20197.72C101.253%20200.124%20101.904%20202.821%20101.85%20205.55C101.915%20208.279%20101.278%20210.978%20100%20213.39ZM92.17%20211.88C92.9865%20211.05%2093.6194%20210.057%2094.0277%20208.967C94.436%20207.876%2094.6105%20206.712%2094.54%20205.55C94.6107%20204.386%2094.4362%20203.221%2094.028%20202.128C93.6197%20201.036%2092.9868%20200.042%2092.17%20199.21C90.3491%20197.619%2087.9737%20196.81%2085.5601%20196.96H82.12V214.14H85.5601C87.9622%20214.281%2090.3229%20213.469%2092.13%20211.88H92.17Z'%20fill='white'/%3e%3cpath%20d='M146.85%20190.58L139.67%20220.65H130.67L125.86%20200.53L121.01%20220.65H112.01L104.82%20190.58H112.73L116.6%20212.35L121.87%20190.58H129.87L135.14%20212.35L139.05%20190.58H146.85Z'%20fill='white'/%3e%3cpath%20d='M174.07%20193C176.494%20194.818%20178.124%20197.501%20178.62%20200.49H170.93C170.427%20199.417%20169.612%20198.521%20168.59%20197.92C167.445%20197.24%20166.132%20196.893%20164.8%20196.92C163.765%20196.877%20162.732%20197.063%20161.776%20197.464C160.821%20197.865%20159.965%20198.471%20159.27%20199.24C157.807%20200.991%20157.064%20203.232%20157.19%20205.51C157.19%20208.37%20157.92%20210.567%20159.38%20212.1C160.201%20212.896%20161.179%20213.512%20162.252%20213.908C163.325%20214.304%20164.469%20214.472%20165.61%20214.4C167.242%20214.43%20168.839%20213.928%20170.16%20212.97C171.507%20211.962%20172.478%20210.533%20172.92%20208.91H163.74V203.68H179V210.87C178.413%20212.658%20177.49%20214.318%20176.28%20215.76C174.964%20217.31%20173.331%20218.558%20171.49%20219.42C169.404%20220.383%20167.127%20220.862%20164.83%20220.82C162.04%20220.894%20159.28%20220.228%20156.83%20218.89C154.589%20217.63%20152.764%20215.742%20151.58%20213.46C150.303%20210.99%20149.667%20208.24%20149.73%20205.46C149.675%20202.697%20150.311%20199.965%20151.58%20197.51C152.76%20195.231%20154.577%20193.344%20156.81%20192.08C159.223%20190.751%20161.946%20190.085%20164.7%20190.15C168.054%20190.025%20171.354%20191.028%20174.07%20193Z'%20fill='white'/%3e%3cpath%20d='M100.81%2058.17V147.17C100.811%20147.595%20100.729%20148.015%20100.567%20148.408C100.405%20148.8%20100.167%20149.157%2099.867%20149.457C99.5668%20149.757%2099.2101%20149.995%2098.8176%20150.157C98.4252%20150.319%2098.0045%20150.401%2097.58%20150.4C97.1563%20150.4%2096.7368%20150.316%2096.3455%20150.154C95.9542%20149.991%2095.5987%20149.753%2095.2996%20149.453C95.0004%20149.153%2094.7634%20148.797%2094.6022%20148.405C94.441%20148.013%2094.3587%20147.594%2094.36%20147.17V58.17C94.36%2057.3151%2094.6989%2056.495%2095.3025%2055.8895C95.9061%2055.2841%2096.7251%2054.9426%2097.58%2054.9399C98.4366%2054.9399%2099.2583%2055.2802%2099.864%2055.886C100.47%2056.4917%20100.81%2057.3134%20100.81%2058.17Z'%20fill='%23005FAD'/%3e%3cpath%20d='M108.1%2072.36H87.49V92.97H108.1V72.36Z'%20fill='%23005FAD'/%3e%3c/svg%3e", AC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MC
}, Symbol.toStringTag, { value: "Module" })), TC = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140.38%2049.24C134.913%2049.2347%20129.671%2047.0606%20125.805%2043.1947C121.939%2039.3288%20119.765%2034.0871%20119.76%2028.62V0H27.63C24.0948%200%2020.5942%200.696338%2017.3281%202.04919C14.062%203.40205%2011.0945%205.38489%208.59473%207.88464C6.09497%2010.3844%204.11201%2013.3521%202.75916%2016.6182C1.4063%2019.8842%200.709961%2023.3849%200.709961%2026.92V189.13C0.709961%20192.665%201.4063%20196.166%202.75916%20199.432C4.11201%20202.698%206.09497%20205.666%208.59473%20208.165C11.0945%20210.665%2014.062%20212.648%2017.3281%20214.001C20.5942%20215.354%2024.0948%20216.05%2027.63%20216.05H138.23C141.765%20216.05%20145.265%20215.354%20148.53%20214.001C151.796%20212.648%20154.763%20210.665%20157.262%20208.165C159.761%20205.665%20161.743%20202.697%20163.094%20199.431C164.446%20196.165%20165.141%20192.665%20165.14%20189.13V49.25L140.38%2049.24Z'%20fill='%23FF9908'/%3e%3c/g%3e%3cpath%20d='M165.14%2049.24H140.38C134.913%2049.2347%20129.671%2047.0606%20125.805%2043.1947C121.939%2039.3288%20119.765%2034.0871%20119.76%2028.62V0L165.14%2049.24Z'%20fill='%23FF9908'/%3e%3cpath%20d='M184.66%20170.6H59.62C50.7503%20170.6%2043.5601%20177.79%2043.5601%20186.66V223.94C43.5601%20232.81%2050.7503%20240%2059.62%20240H184.66C193.53%20240%20200.72%20232.81%20200.72%20223.94V186.66C200.72%20177.79%20193.53%20170.6%20184.66%20170.6Z'%20fill='%23FF9908'/%3e%3cpath%20d='M88%20213.37V220.65H80.47V213.37H88Z'%20fill='white'/%3e%3cpath%20d='M99.05%20196.36V202.65H109.21V208.14H99.05V214.82H110.49V220.65H91.77V190.58H110.49V196.36H99.05Z'%20fill='white'/%3e%3cpath%20d='M121.89%20210.1V220.65H114.61V190.58H126.39C129.97%20190.58%20132.693%20191.463%20134.56%20193.23C135.506%20194.16%20136.245%20195.28%20136.729%20196.515C137.214%20197.751%20137.432%20199.075%20137.37%20200.4C137.401%20202.149%20136.967%20203.875%20136.11%20205.4C135.245%20206.895%20133.948%20208.094%20132.39%20208.84C130.519%20209.732%20128.462%20210.164%20126.39%20210.1H121.89ZM129.97%20200.4C129.97%20197.733%20128.51%20196.4%20125.59%20196.4H121.89V204.23H125.59C128.53%20204.257%20130%20202.98%20130%20200.4H129.97Z'%20fill='white'/%3e%3cpath%20d='M161.33%20216.56C160.473%20217.946%20159.233%20219.054%20157.76%20219.75C155.974%20220.593%20154.014%20221.001%20152.04%20220.94C149.065%20221.06%20146.134%20220.195%20143.7%20218.48C142.629%20217.671%20141.752%20216.632%20141.134%20215.44C140.517%20214.247%20140.173%20212.932%20140.13%20211.59H147.87C147.934%20212.601%20148.365%20213.553%20149.08%20214.27C149.802%20214.938%20150.757%20215.298%20151.74%20215.27C152.548%20215.319%20153.343%20215.046%20153.95%20214.51C154.217%20214.251%20154.427%20213.94%20154.566%20213.595C154.705%20213.251%20154.772%20212.881%20154.76%20212.51C154.77%20212.157%20154.71%20211.805%20154.583%20211.476C154.456%20211.146%20154.265%20210.845%20154.02%20210.59C153.491%20210.056%20152.863%20209.632%20152.17%20209.34C151.43%20209.013%20150.41%20208.623%20149.11%20208.17C147.516%20207.646%20145.959%20207.015%20144.45%20206.28C143.206%20205.637%20142.138%20204.7%20141.34%20203.55C140.425%20202.159%20139.974%20200.513%20140.05%20198.85C140.008%20197.202%20140.484%20195.583%20141.41%20194.22C142.353%20192.883%20143.657%20191.842%20145.17%20191.22C146.919%20190.514%20148.794%20190.174%20150.68%20190.22C153.542%20190.059%20156.371%20190.901%20158.68%20192.6C159.645%20193.38%20160.438%20194.352%20161.009%20195.453C161.58%20196.554%20161.918%20197.762%20162%20199H154.13C154.042%20198.115%20153.662%20197.285%20153.05%20196.64C152.736%20196.343%20152.365%20196.112%20151.959%20195.963C151.554%20195.813%20151.122%20195.748%20150.69%20195.77C149.942%20195.732%20149.208%20195.974%20148.63%20196.45C148.357%20196.703%20148.144%20197.014%20148.007%20197.36C147.87%20197.706%20147.813%20198.079%20147.84%20198.45C147.831%20198.781%20147.889%20199.111%20148.009%20199.42C148.129%20199.729%20148.31%20200.011%20148.54%20200.25C149.043%20200.77%20149.645%20201.185%20150.31%20201.47C151.02%20201.78%20152.04%20202.18%20153.37%20202.66C154.991%20203.181%20156.568%20203.826%20158.09%20204.59C159.344%20205.26%20160.423%20206.216%20161.24%20207.38C162.171%20208.788%20162.633%20210.454%20162.56%20212.14C162.575%20213.7%20162.149%20215.232%20161.33%20216.56Z'%20fill='white'/%3e%3cpath%20d='M123.74%20127.73H121.25C121.237%20117.638%20117.221%20107.964%20110.084%20100.829C102.947%2093.6936%2093.2719%2089.6806%2083.1801%2089.67C73.0892%2089.6806%2063.4145%2093.6939%2056.2792%20100.829C49.1438%20107.965%2045.1306%20117.639%2045.12%20127.73H42.63C42.6432%20116.98%2046.9198%20106.673%2054.5215%2099.0714C62.1232%2091.4697%2072.4296%2087.1933%2083.1801%2087.1801C93.9323%2087.1906%20104.241%2091.4659%20111.845%2099.0679C119.449%20106.67%20123.727%20116.978%20123.74%20127.73Z'%20fill='%23FF9908'/%3e%3cpath%20d='M140.81%2087.1801H25.55V89.67H140.81V87.1801Z'%20fill='%23FF9908'/%3e%3cpath%20d='M47.86%20123.75H39.89V131.72H47.86V123.75Z'%20fill='%23FF9908'/%3e%3cpath%20d='M126.48%20123.75H118.51V131.72H126.48V123.75Z'%20fill='%23FF9908'/%3e%3cpath%20d='M87.17%2084.3101H79.2V92.28H87.17V84.3101Z'%20fill='%23FF9908'/%3e%3cpath%20d='M25.42%2092.29C27.6237%2092.29%2029.41%2090.5037%2029.41%2088.3C29.41%2086.0964%2027.6237%2084.3101%2025.42%2084.3101C23.2164%2084.3101%2021.4301%2086.0964%2021.4301%2088.3C21.4301%2090.5037%2023.2164%2092.29%2025.42%2092.29Z'%20fill='%23FF9908'/%3e%3cpath%20d='M140.43%2092.29C142.634%2092.29%20144.42%2090.5037%20144.42%2088.3C144.42%2086.0964%20142.634%2084.3101%20140.43%2084.3101C138.226%2084.3101%20136.44%2086.0964%20136.44%2088.3C136.44%2090.5037%20138.226%2092.29%20140.43%2092.29Z'%20fill='%23FF9908'/%3e%3c/svg%3e", OC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: TC
}, Symbol.toStringTag, { value: "Module" })), RC = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140%2049.25C134.53%2049.2447%20129.286%2047.0695%20125.418%2043.2018C121.55%2039.3341%20119.375%2034.0898%20119.37%2028.62V0H27.2C20.063%200%2013.2184%202.83511%208.17175%207.88171C3.12515%2012.9283%200.290039%2019.7731%200.290039%2026.91V189.13C0.300637%20196.26%203.14046%20203.094%208.18591%20208.132C13.2314%20213.17%2020.0699%20216%2027.2%20216H137.8C144.937%20216%20151.782%20213.165%20156.828%20208.118C161.875%20203.072%20164.71%20196.227%20164.71%20189.09V49.21L140%2049.25Z'%20fill='%230072FF'/%3e%3c/g%3e%3cpath%20d='M164.71%2049.25H140C134.53%2049.2447%20129.286%2047.0695%20125.418%2043.2018C121.55%2039.3341%20119.375%2034.0898%20119.37%2028.62V0L164.71%2049.25Z'%20fill='%230072FF'/%3e%3cpath%20d='M184.23%20170.61H59.1899C50.3202%20170.61%2043.13%20177.8%2043.13%20186.67V223.95C43.13%20232.82%2050.3202%20240.01%2059.1899%20240.01H184.23C193.1%20240.01%20200.29%20232.82%20200.29%20223.95V186.67C200.29%20177.8%20193.1%20170.61%20184.23%20170.61Z'%20fill='%230072FF'/%3e%3cpath%20d='M87.48%20213.38V220.65H80V213.38H87.48Z'%20fill='white'/%3e%3cpath%20d='M98.54%20196.36V202.66H108.7V208.14H98.54V214.82H110V220.65H91.28V190.58H110V196.36H98.54Z'%20fill='white'/%3e%3cpath%20d='M132.35%20220.65L126.01%20211.29L120.57%20220.65H112.23L121.84%20205.17L111.93%20190.58H120.57L126.73%20199.64L132.05%20190.58H140.35L130.86%20205.72L140.98%20220.65H132.35Z'%20fill='white'/%3e%3cpath%20d='M151.06%20196.36V202.66H161.23V208.14H151.06V214.82H162.5V220.65H143.79V190.58H162.5V196.36H151.06Z'%20fill='white'/%3e%3cpath%20d='M82.5%20147.71C81.3596%20147.71%2080.2659%20147.257%2079.4595%20146.451C78.6531%20145.644%2078.2%20144.55%2078.2%20143.41V136.8C78.1999%20136.236%2078.3112%20135.677%2078.5275%20135.156C78.7437%20134.635%2079.0607%20134.161%2079.4601%20133.763C79.8595%20133.364%2080.3336%20133.049%2080.8552%20132.834C81.3769%20132.619%2081.9358%20132.509%2082.5%20132.51C83.6378%20132.51%2084.7289%20132.962%2085.5334%20133.766C86.338%20134.571%2086.79%20135.662%2086.79%20136.8V143.41C86.79%20144.549%2086.3383%20145.641%2085.5341%20146.447C84.7298%20147.253%2083.6387%20147.707%2082.5%20147.71Z'%20fill='%230072FF'/%3e%3cpath%20d='M82.5%2094.42C81.3596%2094.42%2080.2659%2093.9669%2079.4595%2093.1605C78.6531%2092.3541%2078.2%2091.2604%2078.2%2090.12V82.4301C78.2%2081.2896%2078.6531%2080.1958%2079.4595%2079.3894C80.2659%2078.583%2081.3596%2078.13%2082.5%2078.13C83.6387%2078.1327%2084.7298%2078.5868%2085.5341%2079.3929C86.3383%2080.1991%2086.79%2081.2914%2086.79%2082.4301V90.12C86.79%2091.2587%2086.3383%2092.3509%2085.5341%2093.157C84.7298%2093.9631%2083.6387%2094.4174%2082.5%2094.42Z'%20fill='%230072FF'/%3e%3cpath%20d='M97.7499%20143.63C96.9941%20143.631%2096.2513%20143.433%2095.5965%20143.055C94.9417%20142.678%2094.3979%20142.135%2094.02%20141.48L90.8199%20135.92C90.2511%20134.935%2090.097%20133.764%2090.3914%20132.665C90.6858%20131.566%2091.4047%20130.629%2092.39%20130.06C92.8782%20129.777%2093.4177%20129.593%2093.9772%20129.518C94.5368%20129.444%2095.1055%20129.481%2095.6508%20129.627C96.1961%20129.772%2096.7072%20130.025%2097.155%20130.368C97.6027%20130.712%2097.9782%20131.141%2098.26%20131.63L101.46%20137.18C102.029%20138.167%20102.184%20139.339%20101.889%20140.44C101.595%20141.54%20100.876%20142.479%2099.89%20143.05C99.2394%20143.427%2098.5016%20143.627%2097.7499%20143.63Z'%20fill='%230072FF'/%3e%3cpath%20d='M71.1999%2097.63C70.4441%2097.6311%2069.7013%2097.4329%2069.0465%2097.0554C68.3916%2096.678%2067.8478%2096.1346%2067.4699%2095.48L63.53%2088.6701C62.9615%2087.682%2062.8085%2086.5087%2063.1048%2085.408C63.4011%2084.3072%2064.1223%2083.3692%2065.1099%2082.8001C66.0967%2082.2308%2067.2691%2082.0763%2068.3697%2082.3706C69.4703%2082.665%2070.4091%2083.3841%2070.9799%2084.37L74.91%2091.1899C75.4793%2092.1768%2075.6337%2093.3493%2075.3393%2094.4498C75.0449%2095.5504%2074.3258%2096.4892%2073.3399%2097.0601C72.6888%2097.4341%2071.9508%2097.6306%2071.1999%2097.63Z'%20fill='%230072FF'/%3e%3cpath%20d='M108.9%20132.46C108.149%20132.461%20107.411%20132.264%20106.76%20131.89L101.2%20128.68C100.214%20128.109%2099.4951%20127.17%2099.2007%20126.07C98.9064%20124.969%2099.0607%20123.797%2099.63%20122.81C100.199%20121.822%20101.137%20121.101%20102.238%20120.805C103.339%20120.509%20104.512%20120.661%20105.5%20121.23L111.06%20124.44C112.046%20125.011%20112.765%20125.95%20113.059%20127.05C113.354%20128.151%20113.199%20129.323%20112.63%20130.31C112.252%20130.965%20111.708%20131.508%20111.054%20131.885C110.399%20132.263%20109.656%20132.461%20108.9%20132.46Z'%20fill='%230072FF'/%3e%3cpath%20d='M62.9001%20105.91C62.1482%20105.908%2061.4101%20105.708%2060.76%20105.33L53.94%20101.4C52.9541%20100.829%2052.2351%2099.8904%2051.9407%2098.7898C51.6464%2097.6893%2051.8007%2096.5169%2052.37%2095.5301C52.6517%2095.0409%2053.0273%2094.6121%2053.475%2094.2684C53.9227%2093.9246%2054.4338%2093.6725%2054.9792%2093.5267C55.5245%2093.3808%2056.0932%2093.344%2056.6527%2093.4184C57.2123%2093.4927%2057.7517%2093.6768%2058.24%2093.96L65.0601%2097.8901C66.044%2098.4628%2066.7613%2099.4015%2067.0555%20100.501C67.3496%20101.601%2067.1967%20102.773%2066.63%20103.76C66.2521%20104.415%2065.7084%20104.958%2065.0535%20105.335C64.3987%20105.713%2063.6559%20105.911%2062.9001%20105.91Z'%20fill='%230072FF'/%3e%3cpath%20d='M113%20117.22H106.38C105.24%20117.22%20104.146%20116.767%20103.339%20115.961C102.533%20115.154%20102.08%20114.06%20102.08%20112.92C102.083%20111.781%20102.537%20110.69%20103.343%20109.886C104.149%20109.082%20105.241%20108.63%20106.38%20108.63H113C114.139%20108.63%20115.231%20109.082%20116.037%20109.886C116.843%20110.69%20117.297%20111.781%20117.3%20112.92C117.3%20114.06%20116.847%20115.154%20116.041%20115.961C115.234%20116.767%20114.14%20117.22%20113%20117.22Z'%20fill='%230072FF'/%3e%3cpath%20d='M59.6801%20117.22H52C50.8596%20117.22%2049.7659%20116.767%2048.9595%20115.961C48.1531%20115.154%2047.7%20114.06%2047.7%20112.92C47.7026%20111.781%2048.1569%20110.69%2048.963%20109.886C49.7691%20109.082%2050.8613%20108.63%2052%20108.63H59.67C60.2343%20108.629%2060.7932%20108.739%2061.3148%20108.954C61.8365%20109.169%2062.3105%20109.484%2062.71%20109.883C63.1094%20110.281%2063.4262%20110.755%2063.6425%20111.276C63.8587%20111.797%2063.97%20112.356%2063.97%20112.92C63.9713%20113.484%2063.8614%20114.043%2063.6464%20114.565C63.4314%20115.086%2063.1155%20115.561%2062.717%20115.96C62.3185%20116.359%2061.8451%20116.676%2061.324%20116.892C60.8028%20117.109%2060.2443%20117.22%2059.6801%20117.22Z'%20fill='%230072FF'/%3e%3cpath%20d='M102.88%20105.45C102.125%20105.451%20101.384%20105.254%20100.729%20104.878C100.074%20104.503%2099.5299%20103.962%2099.15%20103.31C98.5815%20102.322%2098.4285%20101.149%2098.7248%20100.048C99.0211%2098.9473%2099.7423%2098.0092%20100.73%2097.44L106.73%2093.96C107.717%2093.3907%20108.889%2093.2363%20109.99%2093.5307C111.09%2093.825%20112.029%2094.5441%20112.6%2095.5301C113.169%2096.5169%20113.324%2097.6893%20113.029%2098.7898C112.735%2099.8904%20112.016%20100.829%20111.03%20101.4L105.03%20104.88C104.376%20105.257%20103.634%20105.453%20102.88%20105.45Z'%20fill='%230072FF'/%3e%3cpath%20d='M56.09%20132.46C55.3355%20132.461%2054.594%20132.263%2053.9407%20131.886C53.2874%20131.508%2052.7455%20130.965%2052.37%20130.31C51.8007%20129.323%2051.6464%20128.151%2051.9407%20127.05C52.2351%20125.95%2052.9541%20125.011%2053.94%20124.44L60.3001%20120.77C61.2875%20120.203%2062.459%20120.05%2063.5588%20120.345C64.6586%20120.639%2065.5974%20121.356%2066.1701%20122.34C66.7386%20123.328%2066.8914%20124.501%2066.5951%20125.602C66.2989%20126.703%2065.5776%20127.641%2064.59%20128.21L58.24%20131.88C57.5884%20132.263%2056.8457%20132.463%2056.09%20132.46Z'%20fill='%230072FF'/%3e%3cpath%20d='M83%20141.11H82.3101C77.3952%20140.995%2072.6014%20139.562%2068.4301%20136.96C64.3077%20134.404%2060.9284%20130.811%2058.63%20126.54C56.4817%20122.518%2055.3553%20118.03%2055.35%20113.47C55.35%20113.24%2055.35%20113.01%2055.35%20112.78C55.4682%20108.081%2056.7831%20103.489%2059.17%2099.44C61.5539%2095.3959%2064.9259%2092.0239%2068.97%2089.64C73.0364%2087.2513%2077.6452%2085.9398%2082.36%2085.83H82.99C87.5553%2085.8251%2092.0502%2086.9558%2096.0699%2089.12C100.338%2091.4105%20103.928%2094.7834%20106.48%2098.9C109.085%20103.091%20110.515%20107.906%20110.62%20112.84C110.62%20113.01%20110.62%20113.24%20110.62%20113.47C110.621%20118.244%20109.384%20122.937%20107.03%20127.09C104.569%20131.449%20100.967%20135.055%2096.61%20137.52C92.4593%20139.872%2087.7705%20141.108%2083%20141.11ZM82.89%2094.41H82.62C79.353%2094.481%2076.1584%2095.3864%2073.34%2097.0401C70.5531%2098.6836%2068.2276%20101.006%2066.58%20103.79C64.9487%20106.59%2064.0606%20109.76%2064%20113C64%20113.18%2064%20113.31%2064%20113.44C63.9979%20116.581%2064.7744%20119.673%2066.26%20122.44C67.8424%20125.392%2070.1738%20127.875%2073.02%20129.64C75.9076%20131.431%2079.2227%20132.416%2082.62%20132.49H83.0601C86.3512%20132.494%2089.5867%20131.643%2092.45%20130.02C95.4566%20128.318%2097.9425%20125.829%2099.64%20122.82C101.261%20119.96%20102.112%20116.728%20102.11%20113.44V113.06C102.036%20109.643%20101.048%20106.307%2099.25%20103.4C97.4906%20100.561%2095.014%2098.2367%2092.0699%2096.66C89.2559%2095.1573%2086.1101%2094.3837%2082.92%2094.41H82.89Z'%20fill='%230072FF'/%3e%3cpath%20d='M94.0601%2097.1801C93.3089%2097.183%2092.5703%2096.9863%2091.9201%2096.61C91.4309%2096.3283%2091.0021%2095.9529%2090.6584%2095.5052C90.3146%2095.0574%2090.0625%2094.5462%2089.9167%2094.0009C89.7708%2093.4556%2089.734%2092.8869%2089.8084%2092.3273C89.8828%2091.7677%2090.0668%2091.2283%2090.35%2090.74L94.0201%2084.37C94.3018%2083.8809%2094.6772%2083.4521%2095.1249%2083.1083C95.5726%2082.7645%2096.0839%2082.5125%2096.6292%2082.3666C97.1745%2082.2208%2097.7432%2082.184%2098.3028%2082.2583C98.8623%2082.3327%2099.4018%2082.5169%2099.8901%2082.8001C100.379%2083.0818%20100.808%2083.4572%20101.152%2083.9049C101.496%2084.3527%20101.747%2084.8639%20101.893%2085.4092C102.039%2085.9545%20102.076%2086.5232%20102.002%2087.0828C101.927%2087.6424%20101.743%2088.1818%20101.46%2088.6701L97.7901%2095.0301C97.4122%2095.6846%2096.8684%2096.2281%2096.2135%2096.6055C95.5587%2096.983%2094.8159%2097.1812%2094.0601%2097.1801Z'%20fill='%230072FF'/%3e%3cpath%20d='M67.2499%20143.63C66.4979%20143.629%2065.7594%20143.429%2065.1099%20143.05C64.1223%20142.481%2063.4011%20141.543%2063.1048%20140.442C62.8085%20139.341%2062.9615%20138.168%2063.53%20137.18L67.01%20131.18C67.5808%20130.194%2068.5196%20129.475%2069.6202%20129.181C70.7208%20128.886%2071.8931%20129.041%2072.88%20129.61C73.8659%20130.181%2074.585%20131.12%2074.8793%20132.22C75.1737%20133.321%2075.0192%20134.493%2074.4499%20135.48L70.9799%20141.48C70.602%20142.135%2070.0582%20142.678%2069.4034%20143.055C68.7485%20143.433%2068.0058%20143.631%2067.2499%20143.63Z'%20fill='%230072FF'/%3e%3c/svg%3e", FC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: RC
}, Symbol.toStringTag, { value: "Module" })), PC = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140.38%2049.24C134.913%2049.2347%20129.671%2047.0606%20125.805%2043.1947C121.939%2039.3288%20119.765%2034.0871%20119.76%2028.62V1.85821e-06H27.63C24.0953%20-0.00131167%2020.5949%200.693768%2017.3289%202.04553C14.0628%203.3973%2011.0952%205.37928%208.59534%207.87824C6.09545%2010.3772%204.11238%2013.3442%202.7594%2016.6097C1.40642%2019.8752%200.709961%2023.3753%200.709961%2026.91V189.13C0.720561%20196.262%203.56176%20203.098%208.60938%20208.136C13.657%20213.174%2020.4982%20216.003%2027.63%20216H138.23C141.764%20216%20145.263%20215.304%20148.528%20213.952C151.793%20212.599%20154.759%20210.617%20157.258%20208.118C159.757%20205.619%20161.739%20202.653%20163.092%20199.388C164.444%20196.123%20165.14%20192.624%20165.14%20189.09V49.24H140.38Z'%20fill='%23FF3E4C'/%3e%3c/g%3e%3cpath%20d='M165.14%2049.24H140.38C134.913%2049.2347%20129.671%2047.0606%20125.805%2043.1947C121.939%2039.3288%20119.765%2034.0871%20119.76%2028.62V0L165.14%2049.24Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M184.66%20170.6H59.62C50.7503%20170.6%2043.5601%20177.79%2043.5601%20186.66V223.94C43.5601%20232.81%2050.7503%20240%2059.62%20240H184.66C193.53%20240%20200.72%20232.81%20200.72%20223.94V186.66C200.72%20177.79%20193.53%20170.6%20184.66%20170.6Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M88.09%20213.37V220.64H80.5699V213.37H88.09Z'%20fill='white'/%3e%3cpath%20d='M111.49%20190.57V196.36H99.15V203H108.68V208.53H99.15V220.69H91.88V190.62L111.49%20190.57Z'%20fill='white'/%3e%3cpath%20d='M122.5%20215.07H132.2V220.64H115.2V190.57H122.47L122.5%20215.07Z'%20fill='white'/%3e%3cpath%20d='M141.17%20190.57L148.53%20213.2L155.89%20190.57H163.67L153.21%20220.64H143.81L133.39%20190.57H141.17Z'%20fill='white'/%3e%3cpath%20d='M120.16%20131.91V84.1999C120.161%2083.9686%20120.141%2083.7377%20120.1%2083.5099C120.096%2083.4433%20120.096%2083.3766%20120.1%2083.3099C120.1%2083.1499%20120.01%2082.9999%20119.96%2082.8499L119.87%2082.65C119.801%2082.5057%20119.725%2082.3654%20119.64%2082.2299C119.613%2082.1731%20119.579%2082.1194%20119.54%2082.0699C119.417%2081.889%20119.28%2081.7184%20119.13%2081.5599L119.05%2081.4999C118.918%2081.3668%20118.774%2081.2463%20118.62%2081.1399L118.45%2081.03C118.32%2080.95%20118.18%2080.8799%20118.04%2080.8099L117.84%2080.7199C117.68%2080.6595%20117.516%2080.6094%20117.35%2080.5699H117.19C116.963%2080.521%20116.732%2080.4975%20116.5%2080.4999H49.0999C48.1742%2080.5847%2047.3134%2081.012%2046.6864%2081.6983C46.0593%2082.3846%2045.711%2083.2803%2045.7099%2084.21C45.7051%2084.2665%2045.7051%2084.3234%2045.7099%2084.3799V132.06C45.6858%20132.674%2045.8808%20133.276%2046.26%20133.76C46.5888%20134.313%2047.0556%20134.772%2047.6147%20135.091C48.1739%20135.41%2048.8062%20135.579%2049.4499%20135.58H116.45C117.424%20135.57%20118.356%20135.181%20119.048%20134.496C119.74%20133.811%20120.139%20132.884%20120.16%20131.91ZM49.67%2089.4799V82.2399H55.56V89.4799H49.67ZM59.6099%2089.4799V82.2399H65.5V89.4799H59.6099ZM69.55%2089.4799V82.2399H75.4399V89.4799H69.55ZM79.4899%2089.4799V82.2399H85.38V89.4799H79.4899ZM89.43%2089.4799V82.2399H95.3199V89.4799H89.43ZM99.3599%2089.4799V82.2399H105.25V89.4799H99.3599ZM109.3%2089.4799V82.2399H115.19V89.4799H109.3ZM48.3%20124.59V91.4399H117.52V124.59H48.3ZM49.65%20133.78V126.54H55.54V133.78H49.65ZM59.5899%20133.78V126.54H65.4799V133.78H59.5899ZM69.53%20133.78V126.54H75.42V133.78H69.53ZM79.4699%20133.78V126.54H85.3599V133.78H79.4699ZM89.41%20133.78V126.54H95.3V133.78H89.41ZM99.3399%20133.78V126.54H105.23V133.78H99.3399ZM109.28%20133.78V126.54H115.17V133.78H109.28Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M90.9399%20105.56L81.37%20100.03C80.8747%2099.744%2080.3128%2099.5934%2079.7408%2099.5933C79.1689%2099.5931%2078.6069%2099.7434%2078.1115%20100.029C77.616%20100.315%2077.2043%20100.726%2076.918%20101.221C76.6316%20101.716%2076.4805%20102.278%2076.48%20102.85V113.91C76.4805%20114.482%2076.6316%20115.044%2076.918%20115.539C77.2043%20116.034%2077.616%20116.445%2078.1115%20116.731C78.6069%20117.017%2079.1689%20117.167%2079.7408%20117.167C80.3128%20117.167%2080.8747%20117.016%2081.37%20116.73L90.9399%20111.2C91.434%20110.913%2091.8442%20110.502%2092.1293%20110.007C92.4144%20109.512%2092.5645%20108.951%2092.5645%20108.38C92.5645%20107.809%2092.4144%20107.248%2092.1293%20106.753C91.8442%20106.258%2091.434%20105.847%2090.9399%20105.56Z'%20fill='%23FF3E4C'/%3e%3c/svg%3e", kC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: PC
}, Symbol.toStringTag, { value: "Module" })), HC = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M139.81%2049.24C134.343%2049.2347%20129.101%2047.0606%20125.235%2043.1947C121.369%2039.3288%20119.195%2034.0871%20119.19%2028.62V1.85821e-06H27.0601C23.5253%20-0.00131167%2020.0249%200.693768%2016.7589%202.04553C13.4929%203.3973%2010.5252%205.37928%208.02527%207.87824C5.52538%2010.3772%203.54231%2013.3442%202.18933%2016.6097C0.836352%2019.8752%200.140014%2023.3753%200.140015%2026.91V189.13C0.150615%20196.262%202.99181%20203.098%208.03943%20208.136C13.087%20213.174%2019.9283%20216.003%2027.0601%20216H137.66C144.797%20216%20151.642%20213.165%20156.688%20208.118C161.735%20203.072%20164.57%20196.227%20164.57%20189.09V49.24H139.81Z'%20fill='%23FF9908'/%3e%3c/g%3e%3cpath%20d='M164.57%2049.24H139.81C134.343%2049.2347%20129.101%2047.0606%20125.235%2043.1947C121.369%2039.3288%20119.195%2034.0871%20119.19%2028.62V0L164.57%2049.24Z'%20fill='%23FF9908'/%3e%3cpath%20d='M184.09%20170.6H59.05C50.1803%20170.6%2042.99%20177.79%2042.99%20186.66V223.94C42.99%20232.81%2050.1803%20240%2059.05%20240H184.09C192.96%20240%20200.15%20232.81%20200.15%20223.94V186.66C200.15%20177.79%20192.96%20170.6%20184.09%20170.6Z'%20fill='%23FF9908'/%3e%3cpath%20d='M90.6%20213.37V220.64H83.0699V213.37H90.6Z'%20fill='white'/%3e%3cpath%20d='M117.78%20193C120.207%20194.816%20121.837%20197.5%20122.33%20200.49H114.63C114.125%20199.415%20113.31%20198.517%20112.29%20197.91C111.148%20197.23%20109.839%20196.884%20108.51%20196.91C107.475%20196.867%20106.444%20197.052%20105.489%20197.451C104.533%20197.85%20103.677%20198.454%20102.98%20199.22C101.515%20200.974%20100.769%20203.218%20100.89%20205.5C100.89%20208.36%20101.62%20210.557%20103.08%20212.09C103.902%20212.887%20104.882%20213.503%20105.957%20213.899C107.032%20214.295%20108.177%20214.462%20109.32%20214.39C110.951%20214.418%20112.548%20213.916%20113.87%20212.96C115.213%20211.949%20116.184%20210.521%20116.63%20208.9H107.44V203.67H122.71V211C122.126%20212.79%20121.203%20214.45%20119.99%20215.89C118.678%20217.439%20117.048%20218.688%20115.21%20219.55C113.124%20220.512%20110.847%20220.991%20108.55%20220.95C105.759%20221.022%20102.998%20220.353%20100.55%20219.01C98.3088%20217.751%2096.4814%20215.868%2095.2901%20213.59C94.0269%20211.133%2093.3912%20208.402%2093.44%20205.64C93.3846%20202.861%2094.0204%20200.112%2095.2901%20197.64C96.4793%20195.367%2098.2986%20193.485%20100.53%20192.22C102.943%20190.891%20105.666%20190.225%20108.42%20190.29C111.755%20190.126%20115.049%20191.08%20117.78%20193Z'%20fill='white'/%3e%3cpath%20d='M134.07%20190.57V220.64H126.8V190.57H134.07Z'%20fill='white'/%3e%3cpath%20d='M158.7%20190.57V196.36H146.36V203H155.89V208.53H146.36V220.69H139.09V190.62L158.7%20190.57Z'%20fill='white'/%3e%3cpath%20d='M77.78%20154.43C66.8704%20154.417%2056.4114%20150.077%2048.6971%20142.363C40.9829%20134.649%2036.6432%20124.19%2036.63%20113.28C36.6432%20102.37%2040.9829%2091.9114%2048.6971%2084.1971C56.4114%2076.4829%2066.8704%2072.1432%2077.78%2072.13C88.6896%2072.1432%2099.1485%2076.4829%20106.863%2084.1971C114.577%2091.9114%20118.917%20102.37%20118.93%20113.28C118.917%20124.19%20114.577%20134.649%20106.863%20142.363C99.1485%20150.077%2088.6896%20154.417%2077.78%20154.43ZM77.78%2079.34C68.7835%2079.3559%2060.1599%2082.9368%2053.7983%2089.2983C47.4368%2095.6599%2043.8558%20104.283%2043.84%20113.28C43.8558%20122.277%2047.4368%20130.9%2053.7983%20137.262C60.1599%20143.623%2068.7835%20147.204%2077.78%20147.22C86.7766%20147.204%2095.4002%20143.623%20101.762%20137.262C108.123%20130.9%20111.704%20122.277%20111.72%20113.28C111.704%20104.283%20108.123%2095.6599%20101.762%2089.2983C95.4002%2082.9368%2086.7766%2079.3559%2077.78%2079.34Z'%20fill='%23FF9908'/%3e%3cpath%20d='M77.78%20136.34C73.0778%20136.347%2068.4467%20135.192%2064.2982%20132.978C60.1497%20130.764%2056.6122%20127.56%2054%20123.65L60%20119.65C61.9512%20122.571%2064.5929%20124.965%2067.6909%20126.62C70.7889%20128.276%2074.2475%20129.141%2077.76%20129.14C81.2738%20129.142%2084.7336%20128.276%2087.8319%20126.618C90.9303%20124.961%2093.5712%20122.564%2095.52%20119.64L101.52%20123.64C98.9134%20127.547%2095.3829%20130.75%2091.2417%20132.965C87.1005%20135.181%2082.4766%20136.34%2077.78%20136.34Z'%20fill='%23FF9908'/%3e%3cpath%20d='M66.3701%20106.97C69.0155%20106.97%2071.16%20104.825%2071.16%20102.18C71.16%2099.5346%2069.0155%2097.39%2066.3701%2097.39C63.7246%2097.39%2061.5801%2099.5346%2061.5801%20102.18C61.5801%20104.825%2063.7246%20106.97%2066.3701%20106.97Z'%20fill='%23FF9908'/%3e%3cpath%20d='M89.19%20106.97C91.8354%20106.97%2093.98%20104.825%2093.98%20102.18C93.98%2099.5346%2091.8354%2097.39%2089.19%2097.39C86.5446%2097.39%2084.4%2099.5346%2084.4%20102.18C84.4%20104.825%2086.5446%20106.97%2089.19%20106.97Z'%20fill='%23FF9908'/%3e%3c/svg%3e", NC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HC
}, Symbol.toStringTag, { value: "Module" })), LC = "data:image/svg+xml,%3csvg%20width='200'%20height='240'%20viewBox='0%200%20200%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M139.67%2049.24C134.203%2049.2347%20128.961%2047.0606%20125.095%2043.1947C121.229%2039.3288%20119.055%2034.0871%20119.05%2028.62V0H26.9099C19.7747%20-4.92665e-07%2012.9316%202.83379%207.88525%207.87823C2.83894%2012.9227%200.00265152%2019.7648%200%2026.9V189.12C0.0079507%20196.252%202.84659%20203.089%207.89233%20208.129C12.9381%20213.169%2019.7781%20216%2026.9099%20216H137.51C141.045%20216.001%20144.545%20215.306%20147.811%20213.954C151.077%20212.603%20154.045%20210.621%20156.545%20208.122C159.045%20205.623%20161.028%20202.656%20162.381%20199.39C163.734%20196.125%20164.43%20192.625%20164.43%20189.09V49.24H139.67Z'%20fill='%2300C650'/%3e%3c/g%3e%3cpath%20d='M164.43%2049.24H139.67C134.203%2049.2347%20128.961%2047.0606%20125.095%2043.1947C121.229%2039.3288%20119.055%2034.0871%20119.05%2028.62V0L164.43%2049.24Z'%20fill='%2300C650'/%3e%3cpath%20d='M183.94%20170.6H58.8999C50.0302%20170.6%2042.8401%20177.79%2042.8401%20186.66V223.94C42.8401%20232.81%2050.0302%20240%2058.8999%20240H183.94C192.81%20240%20200%20232.81%20200%20223.94V186.66C200%20177.79%20192.81%20170.6%20183.94%20170.6Z'%20fill='%2300C650'/%3e%3cpath%20d='M68%20213.37V220.64H60.47V213.37H68Z'%20fill='white'/%3e%3cpath%20d='M97.8201%20190.57V220.64H90.5V208.09H79.1001V220.64H71.8301V190.57H79.1001V202.22H90.5V190.57H97.8201Z'%20fill='white'/%3e%3cpath%20d='M124.44%20190.57V196.35H116.28V220.64H109V196.35H100.92V190.57H124.44Z'%20fill='white'/%3e%3cpath%20d='M161.32%20190.78V220.64H154V202L147.54%20220.67H141.24L134.74%20201.96V220.67H127.46V190.81H136.35L144.48%20211.61L152.43%20190.81L161.32%20190.78Z'%20fill='white'/%3e%3cpath%20d='M173.61%20215.07H183.31V220.64H166.31V190.57H173.59L173.61%20215.07Z'%20fill='white'/%3e%3cpath%20d='M41.6398%20114.19C41.6288%20113.759%2041.7627%20113.336%2042.0199%20112.99C42.3233%20112.6%2042.6881%20112.262%2043.1%20111.99C43.723%20111.665%2044.3678%20111.385%2045.0299%20111.15L46.9599%20110.35L54.6798%20107.1C55.7532%20106.6%2057.7532%20105.767%2060.6798%20104.6L64.35%20103.1L65.6698%20102.63L65.8998%20102.53C65.9623%20102.516%2066.0274%20102.516%2066.09%20102.53C66.2378%20102.464%2066.398%20102.429%2066.56%20102.43C66.8696%20102.414%2067.1792%20102.46%2067.4711%20102.564C67.7629%20102.669%2068.0311%20102.831%2068.2599%20103.04C68.4507%20103.224%2068.6029%20103.445%2068.7077%20103.689C68.8124%20103.932%2068.8676%20104.195%2068.87%20104.46V107C68.861%20107.473%2068.7112%20107.932%2068.4398%20108.32C68.1677%20108.757%2067.7552%20109.088%2067.2699%20109.26L51.4999%20115.71L67.2699%20122.16C67.7381%20122.351%2068.1433%20122.67%2068.4398%20123.08C68.7216%20123.451%2068.873%20123.904%2068.87%20124.37V126.91C68.8639%20127.451%2068.6446%20127.969%2068.2599%20128.35C68.035%20128.566%2067.768%20128.734%2067.4755%20128.842C67.183%20128.95%2066.8714%20128.997%2066.56%20128.98C66.3991%20128.979%2066.2398%20128.949%2066.09%20128.89L65.6698%20128.75L64.35%20128.28L60.6798%20126.77L54.6798%20124.28L46.9599%20121.03L45.0299%20120.23C44.3999%20119.98%2043.76%20119.7%2043.1%20119.38C42.6892%20119.189%2042.337%20118.892%2042.0802%20118.519C41.8234%20118.147%2041.6712%20117.712%2041.6398%20117.26V114.19Z'%20fill='%2300C650'/%3e%3cpath%20d='M73.22%20131.7C72.5966%20131.722%2071.9873%20131.511%2071.51%20131.11C71.2975%20130.945%2071.1251%20130.735%2071.0056%20130.494C70.8861%20130.253%2070.8227%20129.989%2070.8201%20129.72C70.8201%20129.34%2071.95%20126.72%2074.21%20121.72L77.51%20114.47L78.21%20112.96L83.53%20101.15L85.4099%2097.06L85.79%2096.12C85.9358%2095.773%2086.1097%2095.4385%2086.3101%2095.12C86.574%2094.6869%2086.9482%2094.3318%2087.3945%2094.0911C87.8409%2093.8504%2088.3433%2093.7326%2088.8501%2093.75H91.2C91.8263%2093.7286%2092.4386%2093.9386%2092.9199%2094.34C93.1306%2094.5055%2093.3012%2094.7165%2093.4189%2094.9572C93.5367%2095.1979%2093.5987%2095.462%2093.6001%2095.73C92.7996%2098.0618%2091.8577%20100.343%2090.78%20102.56L90.26%20103.69L86.26%20112.44L80.9399%20124.25L79.0601%20128.35L78.6799%20129.29C78.5455%20129.666%2078.3747%20130.027%2078.1699%20130.37C77.8866%20130.796%2077.5014%20131.145%2077.0491%20131.384C76.5967%20131.623%2076.0918%20131.746%2075.5801%20131.74L73.22%20131.7Z'%20fill='%2300C650'/%3e%3cpath%20d='M97.93%20129C97.6123%20129.02%2097.2938%20128.974%2096.9945%20128.866C96.6951%20128.758%2096.4213%20128.589%2096.19%20128.37C95.9969%20128.183%2095.8434%20127.959%2095.7386%20127.712C95.6338%20127.465%2095.5799%20127.199%2095.5802%20126.93V124.39C95.5756%20123.929%2095.7154%20123.478%2095.9801%20123.1C96.2792%20122.68%2096.6971%20122.36%2097.18%20122.18L112.99%20115.73L97.18%20109.28C96.6985%20109.067%2096.2888%20108.72%2096.0001%20108.28C95.7345%20107.898%2095.5884%20107.445%2095.5802%20106.98V104.4C95.5805%20104.132%2095.6365%20103.868%2095.745%20103.623C95.8535%20103.379%2096.0119%20103.16%2096.2101%20102.98C96.6818%20102.56%2097.2991%20102.341%2097.93%20102.37C98.0795%20102.366%2098.2277%20102.401%2098.3602%20102.47C98.4462%20102.455%2098.5342%20102.455%2098.6202%20102.47L98.8302%20102.57C98.7602%20102.57%2099.1902%20102.69%20100.1%20103.04L103.82%20104.54C103.627%20104.453%20105.627%20105.287%20109.82%20107.04C112.107%20107.98%20114.727%20109.093%20117.68%20110.38C117.87%20110.44%20118.12%20110.54%20118.44%20110.66L119.52%20111.09C120.154%20111.316%20120.766%20111.597%20121.35%20111.93C121.772%20112.12%20122.132%20112.423%20122.39%20112.807C122.647%20113.19%20122.793%20113.638%20122.81%20114.1V117.2C122.806%20117.626%20122.666%20118.039%20122.41%20118.38C122.133%20118.77%20121.771%20119.092%20121.35%20119.32C120.79%20119.6%20120.11%20119.9%20119.35%20120.22L117.35%20121.02L99.93%20128.31C99.43%20128.56%2099.1301%20128.72%2099.0401%20128.78L98.8502%20128.92L97.93%20129Z'%20fill='%2300C650'/%3e%3c/svg%3e", VC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: LC
}, Symbol.toStringTag, { value: "Module" })), jC = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140.38%2049.25C134.912%2049.2421%20129.67%2047.0657%20125.805%2043.1982C121.939%2039.3308%20119.765%2034.0881%20119.76%2028.62V1.85821e-06H27.63C24.0953%20-0.00131167%2020.5949%200.693768%2017.3289%202.04553C14.0628%203.3973%2011.0952%205.37922%208.59534%207.87818C6.09545%2010.3771%204.11238%2013.3441%202.7594%2016.6096C1.40642%2019.8751%200.709961%2023.3753%200.709961%2026.91V189.13C0.709961%20192.665%201.40642%20196.165%202.7594%20199.43C4.11238%20202.696%206.09545%20205.663%208.59534%20208.162C11.0952%20210.661%2014.0628%20212.643%2017.3289%20213.995C20.5949%20215.346%2024.0953%20216.041%2027.63%20216.04H138.23C141.764%20216.04%20145.263%20215.344%20148.528%20213.992C151.793%20212.639%20154.759%20210.657%20157.258%20208.158C159.757%20205.659%20161.739%20202.693%20163.092%20199.428C164.444%20196.163%20165.14%20192.664%20165.14%20189.13V49.25H140.38Z'%20fill='%230072FF'/%3e%3c/g%3e%3cpath%20d='M165.14%2049.25H140.38C134.912%2049.2421%20129.67%2047.0657%20125.805%2043.1982C121.939%2039.3308%20119.765%2034.0881%20119.76%2028.62V0L165.14%2049.25Z'%20fill='%230072FF'/%3e%3cpath%20d='M184.66%20170.61H59.62C50.7503%20170.61%2043.5601%20177.8%2043.5601%20186.67V223.95C43.5601%20232.82%2050.7503%20240.01%2059.62%20240.01H184.66C193.53%20240.01%20200.72%20232.82%20200.72%20223.95V186.67C200.72%20177.8%20193.53%20170.61%20184.66%20170.61Z'%20fill='%230072FF'/%3e%3cpath%20d='M89.65%20213.38V220.65H82.12V213.38H89.65Z'%20fill='white'/%3e%3cpath%20d='M100.7%20190.58V220.65H93.4301V190.58H100.7Z'%20fill='white'/%3e%3cpath%20d='M126.12%20216.57C125.253%20217.951%20124.012%20219.058%20122.54%20219.76C120.753%20220.598%20118.793%20221.006%20116.82%20220.95C113.847%20221.068%20110.918%20220.199%20108.49%20218.48C107.413%20217.676%20106.531%20216.638%20105.911%20215.445C105.291%20214.252%20104.949%20212.934%20104.91%20211.59H112.66C112.708%20212.604%20113.141%20213.563%20113.87%20214.27C114.59%20214.941%20115.546%20215.301%20116.53%20215.27C117.339%20215.312%20118.132%20215.036%20118.74%20214.5C119.007%20214.241%20119.217%20213.93%20119.356%20213.585C119.496%20213.241%20119.562%20212.871%20119.55%20212.5C119.561%20212.147%20119.5%20211.796%20119.371%20211.468C119.242%20211.14%20119.048%20210.841%20118.8%20210.59C118.271%20210.054%20117.642%20209.626%20116.95%20209.33C116.21%20209.01%20115.19%20208.62%20113.89%20208.16C112.296%20207.635%20110.739%20207.003%20109.23%20206.27C107.992%20205.628%20106.928%20204.694%20106.13%20203.55C105.209%20202.161%20104.753%20200.515%20104.83%20198.85C104.788%20197.199%20105.263%20195.577%20106.19%20194.21C107.14%20192.875%20108.446%20191.836%20109.96%20191.21C111.706%20190.504%20113.578%20190.163%20115.46%20190.21C118.322%20190.05%20121.151%20190.891%20123.46%20192.59C124.441%20193.39%20125.245%20194.385%20125.82%20195.513C126.395%20196.641%20126.729%20197.876%20126.8%20199.14H118.93C118.84%20198.254%20118.456%20197.423%20117.84%20196.78C117.526%20196.482%20117.155%20196.251%20116.75%20196.102C116.344%20195.952%20115.912%20195.887%20115.48%20195.91C114.733%20195.872%20113.998%20196.114%20113.42%20196.59C113.148%20196.844%20112.937%20197.155%20112.8%20197.501C112.663%20197.847%20112.605%20198.219%20112.63%20198.59C112.618%20199.263%20112.874%20199.914%20113.34%20200.4C113.838%20200.919%20114.437%20201.33%20115.1%20201.61C115.81%20201.92%20116.83%20202.32%20118.16%20202.8C119.781%20203.324%20121.359%20203.972%20122.88%20204.74C124.136%20205.403%20125.216%20206.356%20126.03%20207.52C126.961%20208.928%20127.423%20210.594%20127.35%20212.28C127.338%20213.795%20126.913%20215.279%20126.12%20216.57Z'%20fill='white'/%3e%3cpath%20d='M153.38%20192.09C155.665%20193.389%20157.555%20195.282%20158.85%20197.57C160.203%20199.995%20160.893%20202.733%20160.85%20205.51C160.905%20208.307%20160.214%20211.068%20158.85%20213.51C157.552%20215.809%20155.655%20217.714%20153.36%20219.02C151.022%20220.355%20148.372%20221.045%20145.68%20221.02C142.988%20221.044%20140.338%20220.354%20138%20219.02C135.706%20217.716%20133.811%20215.811%20132.52%20213.51C131.151%20211.07%20130.46%20208.307%20130.52%20205.51C130.468%20202.732%20131.158%20199.991%20132.52%20197.57C133.818%20195.282%20135.712%20193.388%20138%20192.09C140.338%20190.756%20142.988%20190.066%20145.68%20190.09C148.378%20190.065%20151.035%20190.755%20153.38%20192.09ZM139.98%20199.19C138.504%20200.954%20137.753%20203.213%20137.88%20205.51C137.761%20207.797%20138.511%20210.044%20139.98%20211.8C140.699%20212.581%20141.579%20213.195%20142.561%20213.599C143.542%20214.004%20144.6%20214.188%20145.66%20214.14C146.717%20214.184%20147.77%20213.997%20148.748%20213.593C149.725%20213.189%20150.603%20212.577%20151.32%20211.8C152.802%20210.05%20153.56%20207.8%20153.44%20205.51C153.561%20203.22%20152.81%20200.969%20151.34%20199.21C150.622%20198.428%20149.741%20197.814%20148.76%20197.41C147.778%20197.005%20146.72%20196.821%20145.66%20196.87C144.605%20196.826%20143.553%20197.011%20142.576%20197.411C141.6%20197.812%20140.721%20198.418%20140%20199.19H139.98Z'%20fill='white'/%3e%3cpath%20d='M79.21%20145.6C69.7821%20145.589%2060.7435%20141.839%2054.077%20135.173C47.4105%20128.506%2043.6606%20119.468%2043.65%20110.04C43.6606%20100.612%2047.4105%2091.5735%2054.077%2084.907C60.7435%2078.2405%2069.7821%2074.4906%2079.21%2074.48C88.6378%2074.4906%2097.6765%2078.2405%20104.343%2084.907C111.01%2091.5735%20114.759%20100.612%20114.77%20110.04C114.759%20119.468%20111.01%20128.506%20104.343%20135.173C97.6765%20141.839%2088.6378%20145.589%2079.21%20145.6ZM79.21%2076.6C70.3542%2076.6079%2061.8634%2080.1294%2055.6014%2086.3914C49.3394%2092.6534%2045.818%20101.144%2045.8101%20110C45.8206%20118.855%2049.3429%20127.344%2055.6044%20133.606C61.8658%20139.867%2070.355%20143.389%2079.21%20143.4C88.0649%20143.389%2096.5543%20139.867%20102.816%20133.606C109.077%20127.344%20112.599%20118.855%20112.61%20110C112.591%20101.151%20109.065%2092.6706%20102.804%2086.4172C96.5436%2080.1639%2088.0588%2076.6479%2079.21%2076.64V76.6Z'%20fill='%230072FF'/%3e%3cpath%20d='M79.26%2075.37V103.65C77.567%20103.653%2075.9443%20104.327%2074.7481%20105.525C73.5519%20106.723%2072.88%20108.347%2072.88%20110.04C72.8804%20111.152%2073.1698%20112.244%2073.72%20113.21L49.35%20127.28L48.8101%20126.28C46.1149%20121.256%2044.7062%20115.642%2044.71%20109.94C44.71%20109.66%2044.71%20109.4%2044.71%20109.14C44.8321%20103.233%2046.475%2097.4571%2049.48%2092.37C52.47%2087.3135%2056.6911%2083.0959%2061.75%2080.11C66.8359%2077.1108%2072.607%2075.4683%2078.51%2075.34L79.26%2075.37Z'%20fill='%230072FF'/%3e%3cpath%20d='M113.86%20110C113.864%20115.959%20112.321%20121.817%20109.38%20127C106.296%20132.463%20101.78%20136.981%2096.3199%20140.07C91.123%20143.032%2085.2418%20144.583%2079.26%20144.57V116.42C80.9426%20116.404%2082.5511%20115.725%2083.7362%20114.531C84.9213%20113.336%2085.5874%20111.723%2085.59%20110.04C85.5952%20108.911%2085.2946%20107.802%2084.72%20106.83L109.23%2092.67C112.136%2097.6963%20113.725%20103.375%20113.85%20109.18C113.86%20109.44%20113.86%20109.7%20113.86%20110Z'%20fill='%230072FF'/%3e%3cpath%20d='M79.21%20114.4C78.0536%20114.4%2076.9447%20113.941%2076.1271%20113.123C75.3094%20112.305%2074.85%20111.196%2074.85%20110.04C74.85%20108.883%2075.3091%20107.773%2076.1265%20106.953C76.9438%20106.134%2078.0527%20105.673%2079.21%20105.67C80.3672%20105.673%2081.4762%20106.134%2082.2936%20106.953C83.111%20107.773%2083.5699%20108.883%2083.5699%20110.04C83.5699%20111.196%2083.1106%20112.305%2082.293%20113.123C81.4753%20113.941%2080.3663%20114.4%2079.21%20114.4ZM79.21%20107.84C78.6265%20107.84%2078.067%20108.072%2077.6544%20108.484C77.2418%20108.897%2077.01%20109.457%2077.01%20110.04C77.0126%20110.623%2077.2452%20111.181%2077.6572%20111.593C78.0692%20112.005%2078.6273%20112.237%2079.21%20112.24C79.7926%20112.237%2080.3507%20112.005%2080.7627%20111.593C81.1747%20111.181%2081.4074%20110.623%2081.41%20110.04C81.41%20109.751%2081.3531%20109.465%2081.2426%20109.198C81.132%20108.931%2080.9699%20108.689%2080.7656%20108.484C80.5613%20108.28%2080.3188%20108.118%2080.0519%20108.007C79.785%20107.897%2079.4989%20107.84%2079.21%20107.84Z'%20fill='%230072FF'/%3e%3c/svg%3e", IC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: jC
}, Symbol.toStringTag, { value: "Module" })), DC = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140%2049.24C134.532%2049.2347%20129.289%2047.0609%20125.422%2043.1953C121.554%2039.3297%20119.378%2034.0881%20119.37%2028.62V0H27.2C20.063%200%2013.2184%202.83514%208.17175%207.88174C3.12515%2012.9283%200.290039%2019.773%200.290039%2026.91V189.13C0.300637%20196.26%203.14046%20203.094%208.18591%20208.132C13.2314%20213.17%2020.0699%20216%2027.2%20216H137.8C144.937%20216%20151.782%20213.165%20156.828%20208.118C161.875%20203.072%20164.71%20196.227%20164.71%20189.09V49.24H140Z'%20fill='%23FF3E4C'/%3e%3c/g%3e%3cpath%20d='M164.71%2049.24H140C134.532%2049.2347%20129.289%2047.0609%20125.422%2043.1953C121.554%2039.3297%20119.378%2034.0881%20119.37%2028.62V0L164.71%2049.24Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M184.23%20170.6H59.1899C50.3202%20170.6%2043.13%20177.79%2043.13%20186.66V223.94C43.13%20232.81%2050.3202%20240%2059.1899%20240H184.23C193.1%20240%20200.29%20232.81%20200.29%20223.94V186.66C200.29%20177.79%20193.1%20170.6%20184.23%20170.6Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M67%20213.37V220.64H59.47V213.37H67Z'%20fill='white'/%3e%3cpath%20d='M89.3101%20190.57V211.11C89.3101%20214.26%2088.45%20216.68%2086.73%20218.39C85.7754%20219.272%2084.653%20219.952%2083.4297%20220.39C82.2064%20220.828%2080.9072%20221.015%2079.61%20220.94C78.1853%20221.015%2076.76%20220.807%2075.4161%20220.328C74.0723%20219.849%2072.8365%20219.109%2071.78%20218.15C69.85%20216.3%2068.89%20213.62%2068.89%20210.15H76.08C76.08%20212.963%2077.1434%20214.37%2079.27%20214.37C81.11%20214.37%2082.03%20213.29%2082.03%20211.13V190.59L89.3101%20190.57Z'%20fill='white'/%3e%3cpath%20d='M112.74%20215.15H101.47L99.6%20220.64H91.9399L102.94%20190.78H111.32L122.32%20220.64H114.58L112.74%20215.15ZM110.87%20209.62L107.13%20198.57L103.34%20209.62H110.87Z'%20fill='white'/%3e%3cpath%20d='M130.78%20190.57L138.13%20213.2L145.49%20190.57H153.28L142.81%20220.64H133.41L123%20190.57H130.78Z'%20fill='white'/%3e%3cpath%20d='M174.71%20215.15H163.44L161.57%20220.64H153.91L164.91%20190.78H173.29L184.29%20220.64H176.55L174.71%20215.15ZM172.84%20209.62L169.1%20198.57L165.31%20209.62H172.84Z'%20fill='white'/%3e%3cpath%20d='M67.4%20154.14H65.1899C60.0899%20154.14%2056.0267%20152.643%2053%20149.65C49.9733%20146.657%2048.4633%20142.613%2048.47%20137.52V121.2C48.47%20114.96%2045.9867%20111.84%2041.02%20111.84V104.18C45.9867%20104.18%2048.47%20101.06%2048.47%2094.8199V78.4999C48.47%2073.3999%2049.98%2069.3532%2053%2066.3599C56.02%2063.3666%2060.0833%2061.8732%2065.1899%2061.8799H67.4V69.5399H65.89C59.89%2069.5399%2056.89%2072.9299%2056.89%2079.7099V96.4299C56.8167%20102.43%2054.4833%20106.223%2049.89%20107.81V108.21C54.39%20109.69%2056.7233%20113.383%2056.89%20119.29V136.29C56.89%20143.07%2059.89%20146.46%2065.89%20146.46H67.4V154.14Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M97.59%20154.14V146.48H99.1C105.1%20146.48%20108.1%20143.09%20108.1%20136.31V119.31C108.233%20113.397%20110.567%20109.703%20115.1%20108.23V107.83C110.527%20106.217%20108.193%20102.423%20108.1%2096.4499V79.7299C108.1%2072.9499%20105.1%2069.5599%2099.1%2069.5599H97.59V61.8999H99.8101C104.91%2061.8999%20108.97%2063.3932%20111.99%2066.3799C115.01%2069.3666%20116.523%2073.4132%20116.53%2078.5199V94.8399C116.53%20101.08%20119.013%20104.2%20123.98%20104.2V111.86C119.013%20111.86%20116.53%20114.98%20116.53%20121.22V137.54C116.53%20142.64%20115.017%20146.683%20111.99%20149.67C108.963%20152.657%20104.903%20154.153%2099.8101%20154.16L97.59%20154.14Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M81.67%2086.1699C85.3317%2086.1699%2088.3%2083.2017%2088.3%2079.54C88.3%2075.8784%2085.3317%2072.9099%2081.67%2072.9099C78.0084%2072.9099%2075.04%2075.8784%2075.04%2079.54C75.04%2083.2017%2078.0084%2086.1699%2081.67%2086.1699Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M81.67%20114.64C85.3317%20114.64%2088.3%20111.672%2088.3%20108.01C88.3%20104.348%2085.3317%20101.38%2081.67%20101.38C78.0084%20101.38%2075.04%20104.348%2075.04%20108.01C75.04%20111.672%2078.0084%20114.64%2081.67%20114.64Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M81.67%20143.11C85.3317%20143.11%2088.3%20140.142%2088.3%20136.48C88.3%20132.818%2085.3317%20129.85%2081.67%20129.85C78.0084%20129.85%2075.04%20132.818%2075.04%20136.48C75.04%20140.142%2078.0084%20143.11%2081.67%20143.11Z'%20fill='%23FF3E4C'/%3e%3c/svg%3e", ZC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: DC
}, Symbol.toStringTag, { value: "Module" })), zC = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140.1%2049.24C134.632%2049.2373%20129.389%2047.0641%20125.522%2043.1976C121.656%2039.3312%20119.483%2034.0879%20119.48%2028.62V0H27.3401C23.8054%20-2.4406e-07%2020.3053%200.696337%2017.0398%202.04932C13.7743%203.4023%2010.8071%205.38537%208.30811%207.88525C5.80915%2010.3851%203.82735%2013.3529%202.47559%2016.6189C1.12382%2019.8849%200.42862%2023.3853%200.429933%2026.92V189.13C0.42862%20192.665%201.12382%20196.165%202.47559%20199.431C3.82735%20202.697%205.80915%20205.665%208.30811%20208.165C10.8071%20210.665%2013.7743%20212.648%2017.0398%20214.001C20.3053%20215.354%2023.8054%20216.05%2027.3401%20216.05H137.94C141.475%20216.05%20144.975%20215.354%20148.24%20214.001C151.506%20212.648%20154.473%20210.665%20156.972%20208.165C159.471%20205.665%20161.453%20202.697%20162.804%20199.431C164.156%20196.165%20164.851%20192.665%20164.85%20189.13V49.25L140.1%2049.24Z'%20fill='%2300C650'/%3e%3c/g%3e%3cpath%20d='M164.85%2049.24H140.1C134.632%2049.2373%20129.389%2047.0641%20125.522%2043.1976C121.656%2039.3312%20119.483%2034.0879%20119.48%2028.62V0L164.85%2049.24Z'%20fill='%2300C650'/%3e%3cpath%20d='M184.37%20170.6H59.3301C50.4604%20170.6%2043.27%20177.79%2043.27%20186.66V223.94C43.27%20232.81%2050.4604%20240%2059.3301%20240H184.37C193.24%20240%20200.43%20232.81%20200.43%20223.94V186.66C200.43%20177.79%20193.24%20170.6%20184.37%20170.6Z'%20fill='%2300C650'/%3e%3cpath%20d='M84.6499%20213.37V220.65H77.1201V213.37H84.6499Z'%20fill='white'/%3e%3cpath%20d='M107%20190.58V211.12C107%20214.273%20106.143%20216.697%20104.43%20218.39C103.474%20219.272%20102.349%20219.952%20101.125%20220.39C99.8995%20220.828%2098.5988%20221.015%2097.3%20220.94C95.8776%20221.016%2094.4541%20220.81%2093.1118%20220.333C91.7696%20219.856%2090.5351%20219.117%2089.48%20218.16C87.5533%20216.3%2086.5867%20213.633%2086.5801%20210.16H93.77C93.77%20212.97%2094.84%20214.37%2096.96%20214.37C98.81%20214.37%2099.73%20213.29%2099.73%20211.14V190.6L107%20190.58Z'%20fill='white'/%3e%3cpath%20d='M119.06%20210.1V220.65H111.79V190.58H123.57C127.137%20190.58%20129.857%20191.463%20131.73%20193.23C132.678%20194.159%20133.419%20195.278%20133.903%20196.514C134.387%20197.75%20134.604%20199.074%20134.54%20200.4C134.567%20202.147%20134.136%20203.871%20133.29%20205.4C132.419%20206.891%20131.124%20208.088%20129.57%20208.84C127.698%20209.729%20125.642%20210.16%20123.57%20210.1H119.06ZM127.14%20200.4C127.14%20197.733%20125.68%20196.4%20122.76%20196.4H119.06V204.23H122.76C125.68%20204.257%20127.14%20202.98%20127.14%20200.4Z'%20fill='white'/%3e%3cpath%20d='M161.51%20193C163.931%20194.821%20165.56%20197.502%20166.06%20200.49H158.36C157.839%20199.444%20157.017%20198.576%20156%20198C154.855%20197.32%20153.542%20196.973%20152.21%20197C151.176%20196.958%20150.145%20197.144%20149.191%20197.545C148.237%20197.946%20147.383%20198.552%20146.69%20199.32C145.223%20201.069%20144.476%20203.311%20144.6%20205.59C144.6%20208.45%20145.33%20210.647%20146.79%20212.18C147.611%20212.976%20148.589%20213.592%20149.662%20213.988C150.735%20214.384%20151.879%20214.552%20153.02%20214.48C154.652%20214.51%20156.249%20214.008%20157.57%20213.05C158.919%20212.042%20159.894%20210.614%20160.34%20208.99H151.15V203.76H166.42V210.95C165.837%20212.74%20164.913%20214.4%20163.7%20215.84C162.386%20217.391%20160.752%20218.64%20158.91%20219.5C156.827%20220.462%20154.554%20220.941%20152.26%20220.9C149.47%20220.973%20146.71%20220.307%20144.26%20218.97C142.019%20217.71%20140.194%20215.822%20139.01%20213.54C137.738%20211.069%20137.102%20208.319%20137.16%20205.54C137.11%20202.778%20137.746%20200.046%20139.01%20197.59C140.192%20195.313%20142.009%20193.427%20144.24%20192.16C146.654%20190.833%20149.376%20190.167%20152.13%20190.23C155.478%20190.084%20158.779%20191.059%20161.51%20193Z'%20fill='white'/%3e%3cpath%20d='M104.73%20146.41H60.5601C56.236%20146.405%2052.0905%20144.685%2049.033%20141.627C45.9754%20138.57%2044.2553%20134.424%2044.25%20130.1V85.9301C44.2553%2081.606%2045.9754%2077.4605%2049.033%2074.403C52.0905%2071.3454%2056.236%2069.6253%2060.5601%2069.62H104.73C109.053%2069.6253%20113.197%2071.3457%20116.253%2074.4036C119.309%2077.4614%20121.027%2081.6069%20121.03%2085.9301V130.1C121.027%20134.423%20119.309%20138.569%20116.253%20141.626C113.197%20144.684%20109.053%20146.405%20104.73%20146.41ZM60.5601%2076.83C58.1474%2076.8326%2055.8342%2077.7923%2054.1282%2079.4983C52.4222%2081.2043%2051.4626%2083.5174%2051.46%2085.9301V130.1C51.4626%20132.513%2052.4222%20134.826%2054.1282%20136.532C55.8342%20138.238%2058.1474%20139.197%2060.5601%20139.2H104.73C107.142%20139.197%20109.454%20138.237%20111.158%20136.531C112.863%20134.825%20113.82%20132.512%20113.82%20130.1V85.9301C113.82%2083.5183%20112.863%2081.2052%20111.158%2079.4989C109.454%2077.7926%20107.142%2076.8326%20104.73%2076.83H60.5601Z'%20fill='%2300C650'/%3e%3cpath%20d='M117.43%20121.7V130.1C117.427%20133.467%20116.088%20136.696%20113.707%20139.077C111.326%20141.458%20108.097%20142.797%20104.73%20142.8H60.5601C57.1918%20142.8%2053.9615%20141.462%2051.5798%20139.08C49.1981%20136.698%2047.8601%20133.468%2047.8601%20130.1V116C54.9301%20114.48%2065.7%20114%2078.77%20119.22L86.8701%20111.5L92.3899%20125.5C92.3899%20125.5%2093.8699%20120.35%2098.6499%20121.08C103.43%20121.81%20111.17%20124.4%20114.48%20122.19C115.372%20121.675%20116.42%20121.501%20117.43%20121.7Z'%20fill='%2300C650'/%3e%3cpath%20d='M101.96%2094.95C104.672%2094.95%20106.87%2092.7518%20106.87%2090.04C106.87%2087.3283%20104.672%2085.13%20101.96%2085.13C99.2482%2085.13%2097.05%2087.3283%2097.05%2090.04C97.05%2092.7518%2099.2482%2094.95%20101.96%2094.95Z'%20fill='%2300C650'/%3e%3c/svg%3e", $C = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: zC
}, Symbol.toStringTag, { value: "Module" })), BC = "data:image/svg+xml,%3csvg%20width='200'%20height='240'%20viewBox='0%200%20200%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M139.67%2049.25C134.202%2049.2421%20128.96%2047.0657%20125.095%2043.1982C121.229%2039.3308%20119.055%2034.0881%20119.05%2028.62V0H26.91C19.773%200%2012.9284%202.83511%207.88176%207.88171C2.83516%2012.9283%200%2019.7731%200%2026.91V189.13C0.0105984%20196.26%202.85043%20203.094%207.89589%20208.132C12.9413%20213.17%2019.78%20216%2026.91%20216H137.51C141.045%20216.001%20144.545%20215.306%20147.811%20213.954C151.077%20212.603%20154.045%20210.621%20156.545%20208.122C159.045%20205.623%20161.028%20202.656%20162.381%20199.39C163.734%20196.125%20164.43%20192.625%20164.43%20189.09V49.21L139.67%2049.25Z'%20fill='%23A140FF'/%3e%3c/g%3e%3cpath%20d='M164.43%2049.25H139.67C134.202%2049.2421%20128.96%2047.0657%20125.095%2043.1982C121.229%2039.3308%20119.055%2034.0881%20119.05%2028.62V0L164.43%2049.25Z'%20fill='%23A140FF'/%3e%3cpath%20d='M183.94%20170.61H58.9C50.0303%20170.61%2042.84%20177.8%2042.84%20186.67V223.95C42.84%20232.82%2050.0303%20240.01%2058.9%20240.01H183.94C192.81%20240.01%20200%20232.82%20200%20223.95V186.67C200%20177.8%20192.81%20170.61%20183.94%20170.61Z'%20fill='%23A140FF'/%3e%3cpath%20d='M75.21%20213.38V220.65H67.69V213.38H75.21Z'%20fill='white'/%3e%3cpath%20d='M112.81%20190.79V220.65H105.54V202L99.07%20220.67H92.78L86.27%20201.95V220.67H79V190.81H87.89L96.01%20211.61L104.01%20190.81L112.81%20190.79Z'%20fill='white'/%3e%3cpath%20d='M143%20213.4C141.748%20215.671%20139.856%20217.524%20137.56%20218.73C134.978%20220.06%20132.103%20220.72%20129.2%20220.65H117.83V190.58H129.19C132.095%20190.504%20134.973%20191.147%20137.57%20192.45C139.855%20193.636%20141.74%20195.469%20142.99%20197.72C144.283%20200.124%20144.934%20202.821%20144.88%20205.55C144.935%20208.284%20144.287%20210.987%20143%20213.4ZM135.17%20211.89C135.984%20211.057%20136.615%20210.062%20137.022%20208.97C137.428%20207.878%20137.601%20206.713%20137.53%20205.55C137.601%20204.387%20137.428%20203.222%20137.022%20202.13C136.615%20201.038%20135.984%20200.043%20135.17%20199.21C133.349%20197.62%20130.974%20196.811%20128.56%20196.96H125.1V214.14H128.55C130.964%20214.289%20133.338%20213.48%20135.16%20211.89H135.17Z'%20fill='white'/%3e%3cpath%20d='M171.36%20207.8C172.413%20209.115%20172.975%20210.756%20172.95%20212.44C173.004%20213.569%20172.801%20214.697%20172.356%20215.736C171.911%20216.775%20171.235%20217.7%20170.38%20218.44C168.66%20219.89%20166.21%20220.61%20163%20220.61H149V190.54H162.65C165.71%20190.54%20168.077%20191.207%20169.75%20192.54C170.59%20193.224%20171.255%20194.097%20171.691%20195.088C172.128%20196.079%20172.323%20197.159%20172.26%20198.24C172.318%20199.871%20171.809%20201.472%20170.82%20202.77C169.862%20203.965%20168.525%20204.798%20167.03%20205.13C168.741%20205.488%20170.272%20206.432%20171.36%20207.8ZM156.28%20202.87H161C163.527%20202.87%20164.79%20201.793%20164.79%20199.64C164.79%20197.48%20163.5%20196.41%20160.92%20196.41H156.24L156.28%20202.87ZM165.51%20211.42C165.536%20210.946%20165.453%20210.472%20165.27%20210.034C165.086%20209.595%20164.806%20209.205%20164.45%20208.89C163.593%20208.233%20162.528%20207.907%20161.45%20207.97H156.3V214.74H161.49C164.17%20214.74%20165.51%20213.633%20165.51%20211.42Z'%20fill='white'/%3e%3cpath%20d='M82.21%2067.9301C79.785%2067.9301%2077.3837%2068.4079%2075.1433%2069.3362C72.903%2070.2645%2070.8676%2071.6251%2069.1533%2073.3403C67.439%2075.0556%2066.0794%2077.0918%2065.1523%2079.3326C64.2252%2081.5735%2063.7487%2083.975%2063.75%2086.4C63.7492%2090.1616%2064.8981%2093.8336%2067.0429%2096.9238C69.1876%20100.014%2072.2257%20102.375%2075.75%20103.69V109.6L77.75%20111.6V118L75.86%20119.1V123.83L77.75%20124.93V128.13L75.5%20129.43V133.33L77.75%20134.64V139.08L75.68%20140.28V143.74L81.2%20148.09H87.2L89.86%20144.01V103.19C93.0883%20101.723%2095.8262%2099.3583%2097.7466%2096.3774C99.6671%2093.3966%20100.689%2089.9259%20100.69%2086.38C100.685%2081.4832%2098.735%2076.7889%2095.2697%2073.3291C91.8043%2069.8693%2087.1068%2067.9274%2082.21%2067.9301ZM82.68%2082.9301C81.4388%2082.9301%2080.2484%2082.4369%2079.3707%2081.5592C78.4931%2080.6815%2078%2079.4912%2078%2078.25C78.0027%2077.0105%2078.4969%2075.8227%2079.3743%2074.9471C80.2517%2074.0716%2081.4405%2073.58%2082.68%2073.58C83.2941%2073.5786%2083.9025%2073.6985%2084.4702%2073.9326C85.038%2074.1667%2085.5539%2074.5104%2085.9886%2074.9442C86.4234%2075.378%2086.7683%2075.8933%2087.0036%2076.4606C87.2389%2077.0278%2087.36%2077.6359%2087.36%2078.25C87.3494%2079.4834%2086.8514%2080.6625%2085.9746%2081.5299C85.0978%2082.3974%2083.9134%2082.8827%2082.68%2082.88V82.9301Z'%20fill='%23A140FF'/%3e%3c/svg%3e", UC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: BC
}, Symbol.toStringTag, { value: "Module" })), WC = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M139.81%2049.24C134.343%2049.2347%20129.101%2047.0606%20125.235%2043.1947C121.369%2039.3288%20119.195%2034.0871%20119.19%2028.62V1.85821e-06H27.0601C23.5253%20-0.00131167%2020.0249%200.693768%2016.7589%202.04553C13.4929%203.3973%2010.5252%205.37928%208.02527%207.87824C5.52538%2010.3772%203.54231%2013.3442%202.18933%2016.6097C0.836352%2019.8752%200.140014%2023.3753%200.140015%2026.91V189.13C0.150615%20196.262%202.99181%20203.098%208.03943%20208.136C13.087%20213.174%2019.9283%20216.003%2027.0601%20216H137.66C144.797%20216%20151.642%20213.165%20156.688%20208.118C161.735%20203.072%20164.57%20196.227%20164.57%20189.09V49.24H139.81Z'%20fill='%23005FAD'/%3e%3c/g%3e%3cpath%20d='M164.57%2049.24H139.81C134.343%2049.2347%20129.101%2047.0606%20125.235%2043.1947C121.369%2039.3288%20119.195%2034.0871%20119.19%2028.62V0L164.57%2049.24Z'%20fill='%23005FAD'/%3e%3cpath%20d='M184.09%20170.6H59.05C50.1803%20170.6%2042.99%20177.79%2042.99%20186.66V223.94C42.99%20232.81%2050.1803%20240%2059.05%20240H184.09C192.96%20240%20200.15%20232.81%20200.15%20223.94V186.66C200.15%20177.79%20192.96%20170.6%20184.09%20170.6Z'%20fill='%23005FAD'/%3e%3cpath%20d='M83.48%20213.37V220.64H76V213.37H83.48Z'%20fill='white'/%3e%3cpath%20d='M121.08%20190.78V220.64H113.8V202L107.34%20220.67H101L94.5%20201.96V220.67H87.22V190.81H96.11L104.24%20211.61L112.24%20190.81L121.08%20190.78Z'%20fill='white'/%3e%3cpath%20d='M133.37%20190.57V220.64H126.1V190.57H133.37Z'%20fill='white'/%3e%3cpath%20d='M163.54%20213.39C162.288%20215.664%20160.397%20217.52%20158.1%20218.73C155.516%20220.053%20152.642%20220.71%20149.74%20220.64H138.39V190.57H149.74C152.645%20190.492%20155.524%20191.134%20158.12%20192.44C160.41%20193.624%20162.297%20195.462%20163.54%20197.72C164.842%20200.117%20165.497%20202.813%20165.44%20205.54C165.494%20208.277%20164.84%20210.981%20163.54%20213.39ZM155.72%20211.88C156.533%20211.046%20157.163%20210.051%20157.569%20208.959C157.975%20207.867%20158.149%20206.703%20158.08%20205.54C158.149%20204.377%20157.975%20203.213%20157.568%20202.121C157.162%20201.03%20156.532%20200.035%20155.72%20199.2C153.894%20197.61%20151.516%20196.802%20149.1%20196.95H145.66V214.13H149.1C151.516%20214.278%20153.894%20213.47%20155.72%20211.88Z'%20fill='white'/%3e%3cpath%20d='M120.37%20131.92H109.42V87.6601C109.42%2086.1775%20108.831%2084.7557%20107.783%2083.7074C106.734%2082.659%20105.313%2082.0701%20103.83%2082.0701H75.83C74.3465%2082.0701%2072.9237%2082.6587%2071.8738%2083.7068C70.8239%2084.7548%2070.2326%2086.1766%2070.23%2087.6601V131.92H59.23V83.9201C59.2326%2080.5191%2060.5855%2077.2583%2062.9913%2074.8544C65.3971%2072.4504%2068.6591%2071.1001%2072.0601%2071.1001H107.47C110.87%2071.1001%20114.131%2072.4508%20116.535%2074.855C118.939%2077.2592%20120.29%2080.52%20120.29%2083.9201L120.37%20131.92Z'%20fill='%23005FAD'/%3e%3cpath%20d='M107.39%20144.9C114.559%20144.9%20120.37%20139.089%20120.37%20131.92C120.37%20124.751%20114.559%20118.94%20107.39%20118.94C100.221%20118.94%2094.4099%20124.751%2094.4099%20131.92C94.4099%20139.089%20100.221%20144.9%20107.39%20144.9Z'%20fill='%23005FAD'/%3e%3cpath%20d='M57.3201%20144.9C64.4887%20144.9%2070.3%20139.089%2070.3%20131.92C70.3%20124.751%2064.4887%20118.94%2057.3201%20118.94C50.1514%20118.94%2044.3401%20124.751%2044.3401%20131.92C44.3401%20139.089%2050.1514%20144.9%2057.3201%20144.9Z'%20fill='%23005FAD'/%3e%3c/svg%3e", qC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: WC
}, Symbol.toStringTag, { value: "Module" })), YC = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140.1%2049.24C134.633%2049.2347%20129.391%2047.0606%20125.525%2043.1947C121.66%2039.3288%20119.485%2034.0871%20119.48%2028.62V0H27.3401C20.2031%200%2013.3584%202.83517%208.31177%207.88177C3.26516%2012.9284%200.429932%2019.773%200.429932%2026.91V189.13C0.44053%20196.26%203.28047%20203.094%208.32593%20208.132C13.3714%20213.17%2020.21%20216%2027.3401%20216H137.94C141.474%20216.001%20144.974%20215.306%20148.24%20213.954C151.505%20212.602%20154.472%20210.62%20156.971%20208.121C159.47%20205.622%20161.452%20202.655%20162.804%20199.39C164.156%20196.124%20164.851%20192.624%20164.85%20189.09V49.24H140.1Z'%20fill='%230072FF'/%3e%3c/g%3e%3cpath%20d='M164.85%2049.24H140.1C134.633%2049.2347%20129.391%2047.0606%20125.525%2043.1947C121.66%2039.3288%20119.485%2034.0871%20119.48%2028.62V0L164.85%2049.24Z'%20fill='%230072FF'/%3e%3cpath%20d='M184.37%20170.6H59.3301C50.4604%20170.6%2043.27%20177.79%2043.27%20186.66V223.94C43.27%20232.81%2050.4604%20240%2059.3301%20240H184.37C193.24%20240%20200.43%20232.81%20200.43%20223.94V186.66C200.43%20177.79%20193.24%20170.6%20184.37%20170.6Z'%20fill='%230072FF'/%3e%3cpath%20d='M73.8401%20213.37V220.64H66.3201V213.37H73.8401Z'%20fill='white'/%3e%3cpath%20d='M111.44%20190.79V220.64H104.17V202L97.7%20220.67H91.4099L84.8999%20201.96V220.67H77.6299V190.82H86.52L94.6399%20211.61L102.64%20190.82L111.44%20190.79Z'%20fill='white'/%3e%3cpath%20d='M138.47%20192.08C140.758%20193.379%20142.649%20195.277%20143.94%20197.57C145.293%20199.991%20145.983%20202.727%20145.94%20205.5C145.992%20208.297%20145.302%20211.057%20143.94%20213.5C142.645%20215.799%20140.746%20217.7%20138.45%20219C136.112%20220.335%20133.462%20221.025%20130.77%20221C128.078%20221.022%20125.429%20220.332%20123.09%20219C120.797%20217.7%20118.902%20215.798%20117.61%20213.5C116.244%20211.059%20115.554%20208.297%20115.61%20205.5C115.558%20202.726%20116.249%20199.988%20117.61%20197.57C118.908%20195.279%20120.802%20193.382%20123.09%20192.08C125.429%20190.748%20128.078%20190.058%20130.77%20190.08C133.468%20190.055%20136.125%20190.745%20138.47%20192.08ZM125.07%20199.19C123.59%20200.948%20122.839%20203.206%20122.97%20205.5C122.849%20207.79%20123.6%20210.04%20125.07%20211.8C125.789%20212.581%20126.669%20213.195%20127.651%20213.599C128.632%20214.004%20129.69%20214.188%20130.75%20214.14C131.807%20214.185%20132.861%20213.999%20133.838%20213.595C134.816%20213.191%20135.694%20212.578%20136.41%20211.8C137.898%20210.049%20138.66%20207.795%20138.54%20205.5C138.657%20203.212%20137.903%20200.964%20136.43%20199.21C135.712%20198.429%20134.831%20197.814%20133.85%20197.41C132.868%20197.005%20131.81%20196.821%20130.75%20196.87C129.692%20196.821%20128.635%20197.003%20127.654%20197.403C126.673%20197.804%20125.791%20198.414%20125.07%20199.19Z'%20fill='white'/%3e%3cpath%20d='M155.63%20190.57L163%20213.2L170.36%20190.57H178.14L167.68%20220.64H158.28L147.86%20190.57H155.63Z'%20fill='white'/%3e%3cpath%20d='M78.6101%2069.61C68.4258%2069.61%2058.6584%2073.6557%2051.457%2080.8571C44.2556%2088.0585%2040.21%2097.8257%2040.21%20108.01C40.21%20118.194%2044.2556%20127.962%2051.457%20135.163C58.6584%20142.364%2068.4258%20146.41%2078.6101%20146.41C88.7936%20146.405%2098.5581%20142.356%20105.757%20135.153C112.956%20127.95%20117%20118.184%20117%20108C116.995%2097.82%20112.948%2088.0584%20105.75%2080.86C98.5516%2073.6617%2088.7901%2069.6153%2078.6101%2069.61ZM78.6101%2077.09C80.647%2077.09%2082.6002%2077.8991%2084.0405%2079.3394C85.4808%2080.7797%2086.29%2082.7332%2086.29%2084.77C86.29%2086.8069%2085.4808%2088.7603%2084.0405%2090.2006C82.6002%2091.6408%2080.647%2092.45%2078.6101%2092.45C76.5732%2092.45%2074.6197%2091.6408%2073.1794%2090.2006C71.7392%2088.7603%2070.9299%2086.8069%2070.9299%2084.77C70.9299%2082.7332%2071.7392%2080.7797%2073.1794%2079.3394C74.6197%2077.8991%2076.5732%2077.09%2078.6101%2077.09ZM51.8301%2092.55C52.8487%2090.7865%2054.526%2089.4998%2056.4932%2088.9728C58.4603%2088.4459%2060.5563%2088.7218%2062.3201%2089.74C63.1941%2090.2435%2063.9604%2090.9143%2064.5752%2091.7141C65.19%2092.5138%2065.641%2093.4268%2065.9028%2094.4009C66.1647%2095.375%2066.2322%2096.3911%2066.1013%2097.3913C65.9704%2098.3915%2065.6436%2099.3561%2065.1399%20100.23C64.1194%20101.994%2062.4402%20103.281%2060.4714%20103.808C58.5026%20104.335%2056.4052%20104.059%2054.6399%20103.04C52.8764%20102.021%2051.5897%20100.344%2051.0627%2098.3769C50.5358%2096.4097%2050.8119%2094.3137%2051.8301%2092.55ZM62.3201%20126.29C61.4462%20126.794%2060.4814%20127.12%2059.4812%20127.251C58.481%20127.382%2057.4651%20127.315%2056.491%20127.053C55.5168%20126.791%2054.6037%20126.34%2053.804%20125.725C53.0042%20125.11%2052.3336%20124.344%2051.8301%20123.47C50.8119%20121.706%2050.5358%20119.61%2051.0627%20117.643C51.5897%20115.676%2052.8764%20113.999%2054.6399%20112.98C56.4052%20111.961%2058.5026%20111.685%2060.4714%20112.212C62.4402%20112.739%2064.1194%20114.026%2065.1399%20115.79C66.1577%20117.556%2066.4326%20119.655%2065.9038%20121.624C65.375%20123.593%2064.0859%20125.271%2062.3201%20126.29ZM78.6101%20138.94C76.5732%20138.94%2074.6197%20138.131%2073.1794%20136.691C71.7392%20135.25%2070.9299%20133.297%2070.9299%20131.26C70.9299%20129.223%2071.7392%20127.27%2073.1794%20125.829C74.6197%20124.389%2076.5732%20123.58%2078.6101%20123.58C79.619%20123.579%2080.6182%20123.776%2081.5505%20124.162C82.4829%20124.547%2083.33%20125.113%2084.0435%20125.826C84.7569%20126.54%2085.3225%20127.387%2085.708%20128.319C86.0935%20129.252%2086.2914%20130.251%2086.29%20131.26C86.29%20133.297%2085.4808%20135.25%2084.0405%20136.691C82.6002%20138.131%2080.647%20138.94%2078.6101%20138.94ZM105.39%20123.47C104.887%20124.345%20104.217%20125.112%20103.417%20125.728C102.618%20126.343%20101.705%20126.795%20100.73%20127.057C99.7557%20127.319%2098.7392%20127.386%2097.7388%20127.254C96.7383%20127.123%2095.7735%20126.795%2094.8999%20126.29C93.1357%20125.269%2091.8489%20123.59%2091.322%20121.622C90.7951%20119.653%2091.0714%20117.555%2092.0901%20115.79C93.1087%20114.026%2094.786%20112.74%2096.7532%20112.213C98.7204%20111.686%20100.816%20111.962%20102.58%20112.98C103.454%20113.483%20104.22%20114.154%20104.835%20114.954C105.449%20115.754%20105.9%20116.668%20106.161%20117.642C106.422%20118.616%20106.489%20119.633%20106.356%20120.633C106.224%20121.633%20105.895%20122.597%20105.39%20123.47ZM102.58%20103C100.816%20104.018%2098.7204%20104.294%2096.7532%20103.767C94.786%20103.24%2093.1087%20101.954%2092.0901%20100.19C91.0719%2098.4263%2090.7958%2096.3303%2091.3228%2094.3632C91.8497%2092.396%2093.1364%2090.7186%2094.8999%2089.7C96.6637%2088.6818%2098.7596%2088.4058%20100.727%2088.9328C102.694%2089.4598%20104.371%2090.7465%20105.39%2092.51C105.895%2093.383%20106.224%2094.3471%20106.356%2095.3472C106.489%2096.3472%20106.422%2097.3635%20106.161%2098.338C105.9%2099.3124%20105.449%20100.226%20104.835%20101.026C104.22%20101.826%20103.454%20102.497%20102.58%20103Z'%20fill='%230072FF'/%3e%3cpath%20d='M114.74%20138.48C114.212%20138.478%20113.686%20138.421%20113.17%20138.31C108.9%20137.31%20107.17%20132.77%20107.17%20132.58C107.11%20132.417%20107.083%20132.243%20107.091%20132.069C107.099%20131.895%20107.141%20131.725%20107.215%20131.567C107.29%20131.41%20107.395%20131.269%20107.525%20131.153C107.654%20131.036%20107.806%20130.947%20107.97%20130.89C108.132%20130.831%20108.304%20130.805%20108.477%20130.813C108.649%20130.821%20108.818%20130.863%20108.974%20130.936C109.13%20131.009%20109.27%20131.113%20109.386%20131.241C109.502%20131.368%20109.592%20131.518%20109.65%20131.68C109.65%20131.74%20110.94%20135.11%20113.78%20135.74C116.2%20136.27%20119.33%20134.74%20122.84%20131.2C122.963%20131.077%20123.108%20130.979%20123.269%20130.913C123.429%20130.846%20123.601%20130.812%20123.775%20130.812C123.949%20130.812%20124.121%20130.846%20124.281%20130.913C124.442%20130.979%20124.587%20131.077%20124.71%20131.2C124.956%20131.447%20125.093%20131.782%20125.093%20132.13C125.093%20132.478%20124.956%20132.813%20124.71%20133.06C121.08%20136.67%20117.75%20138.48%20114.74%20138.48Z'%20fill='%230072FF'/%3e%3c/svg%3e", GC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: YC
}, Symbol.toStringTag, { value: "Module" })), KC = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140.24%2049.24C134.773%2049.2347%20129.531%2047.0606%20125.665%2043.1947C121.799%2039.3288%20119.625%2034.0871%20119.62%2028.62V0H27.48C20.343%200%2013.4984%202.83514%208.45178%207.88174C3.40518%2012.9283%200.570007%2019.773%200.570007%2026.91V189.13C0.580606%20196.26%203.42043%20203.094%208.46588%20208.132C13.5113%20213.17%2020.3499%20216%2027.48%20216H138.09C145.222%20216%20152.062%20213.169%20157.108%20208.129C162.153%20203.089%20164.992%20196.252%20165%20189.12V49.24H140.24Z'%20fill='%23FF3E4C'/%3e%3c/g%3e%3cpath%20d='M165%2049.24H140.24C134.773%2049.2347%20129.531%2047.0606%20125.665%2043.1947C121.799%2039.3288%20119.625%2034.0871%20119.62%2028.62V0L165%2049.24Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M184.51%20170.6H59.47C50.6003%20170.6%2043.41%20177.79%2043.41%20186.66V223.94C43.41%20232.81%2050.6003%20240%2059.47%20240H184.51C193.38%20240%20200.57%20232.81%20200.57%20223.94V186.66C200.57%20177.79%20193.38%20170.6%20184.51%20170.6Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M79.23%20213.37V220.64H71.7V213.37H79.23Z'%20fill='white'/%3e%3cpath%20d='M116.83%20190.78V220.64H109.56V202L103.09%20220.67H96.8L90.29%20201.96V220.67H83V190.81H91.89L100.01%20211.61L108.01%20190.81L116.83%20190.78Z'%20fill='white'/%3e%3cpath%20d='M129.12%20210.09V220.64H121.85V190.57H133.63C137.2%20190.57%20139.93%20191.46%20141.8%20193.23C142.745%20194.158%20143.484%20195.276%20143.966%20196.51C144.449%20197.744%20144.665%20199.067%20144.6%20200.39C144.636%20202.138%20144.204%20203.864%20143.35%20205.39C142.477%20206.881%20141.183%20208.082%20139.63%20208.84C137.755%20209.721%20135.7%20210.149%20133.63%20210.09H129.12ZM137.2%20200.39C137.2%20197.763%20135.74%20196.447%20132.82%20196.44H129.12V204.27H132.82C135.74%20204.27%20137.2%20202.977%20137.2%20200.39Z'%20fill='white'/%3e%3cpath%20d='M163.91%20190.34C165.323%20190.982%20166.516%20192.025%20167.34%20193.34C168.126%20194.628%20168.531%20196.112%20168.51%20197.62C168.589%20199.324%20168.053%20200.999%20167%20202.34C166.04%20203.502%20164.708%20204.297%20163.23%20204.59V204.81C167.123%20206.05%20169.067%20208.473%20169.06%20212.08C169.088%20213.696%20168.677%20215.29%20167.87%20216.69C167.051%20218.061%20165.843%20219.157%20164.4%20219.84C162.691%20220.632%20160.823%20221.019%20158.94%20220.97C155.48%20220.97%20152.73%20220.12%20150.71%20218.42C148.69%20216.72%20147.58%20214.12%20147.41%20210.63H154.51C154.501%20211.777%20154.894%20212.892%20155.62%20213.78C156.004%20214.182%20156.472%20214.493%20156.991%20214.692C157.51%20214.891%20158.066%20214.972%20158.62%20214.93C159.076%20214.955%20159.532%20214.884%20159.959%20214.722C160.386%20214.56%20160.775%20214.311%20161.1%20213.99C161.408%20213.669%20161.648%20213.29%20161.806%20212.874C161.964%20212.458%20162.037%20212.015%20162.02%20211.57C162.02%20209.097%20160.233%20207.863%20156.66%20207.87H155.3V201.96H156.62C159.82%20202.007%20161.42%20200.857%20161.42%20198.51C161.45%20198.081%20161.391%20197.65%20161.248%20197.244C161.106%20196.839%20160.882%20196.466%20160.59%20196.15C160.295%20195.867%20159.944%20195.647%20159.561%20195.505C159.177%20195.362%20158.769%20195.299%20158.36%20195.32C157.907%20195.293%20157.454%20195.369%20157.035%20195.542C156.616%20195.715%20156.242%20195.981%20155.94%20196.32C155.311%20197.116%20154.96%20198.096%20154.94%20199.11H147.83C147.813%20197.751%20148.07%20196.402%20148.585%20195.145C149.101%20193.887%20149.864%20192.746%20150.83%20191.79C152.67%20190.09%20155.25%20189.24%20158.57%20189.24C160.41%20189.201%20162.235%20189.577%20163.91%20190.34Z'%20fill='white'/%3e%3cpath%20d='M120.8%20131.92H109.85V87.6601C109.85%2086.1775%20109.261%2084.7557%20108.213%2083.7074C107.164%2082.659%20105.743%2082.0701%20104.26%2082.0701H76.26C75.5259%2082.0701%2074.799%2082.2147%2074.1208%2082.4956C73.4426%2082.7765%2072.8263%2083.1883%2072.3073%2083.7074C71.7882%2084.2264%2071.3764%2084.8427%2071.0955%2085.5209C70.8146%2086.1991%2070.67%2086.926%2070.67%2087.6601V131.92H59.67V83.9201C59.67%2082.2357%2060.002%2080.5678%2060.6469%2079.0118C61.2917%2077.4557%2062.2369%2076.042%2063.4284%2074.8514C64.6199%2073.6609%2066.0344%2072.7168%2067.5909%2072.0731C69.1475%2071.4294%2070.8156%2071.0988%2072.5%2071.1001H108C111.4%2071.1001%20114.661%2072.4508%20117.065%2074.855C119.469%2077.2592%20120.82%2080.52%20120.82%2083.9201L120.8%20131.92Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M107.82%20144.9C114.989%20144.9%20120.8%20139.089%20120.8%20131.92C120.8%20124.751%20114.989%20118.94%20107.82%20118.94C100.651%20118.94%2094.84%20124.751%2094.84%20131.92C94.84%20139.089%20100.651%20144.9%20107.82%20144.9Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M57.75%20144.9C64.9187%20144.9%2070.73%20139.089%2070.73%20131.92C70.73%20124.751%2064.9187%20118.94%2057.75%20118.94C50.5814%20118.94%2044.77%20124.751%2044.77%20131.92C44.77%20139.089%2050.5814%20144.9%2057.75%20144.9Z'%20fill='%23FF3E4C'/%3e%3c/svg%3e", XC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: KC
}, Symbol.toStringTag, { value: "Module" })), JC = "data:image/svg+xml,%3csvg%20width='200'%20height='240'%20viewBox='0%200%20200%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M139.67%2049.24C134.203%2049.2347%20128.961%2047.0606%20125.095%2043.1947C121.229%2039.3288%20119.055%2034.0871%20119.05%2028.62V0H26.9099C19.7747%20-4.92665e-07%2012.9316%202.83379%207.88525%207.87823C2.83894%2012.9227%200.00265152%2019.7648%200%2026.9V189.12C0.0079507%20196.252%202.84659%20203.089%207.89233%20208.129C12.9381%20213.169%2019.7781%20216%2026.9099%20216H137.51C141.045%20216.001%20144.545%20215.306%20147.811%20213.954C151.077%20212.603%20154.045%20210.621%20156.545%20208.122C159.045%20205.623%20161.028%20202.656%20162.381%20199.39C163.734%20196.125%20164.43%20192.625%20164.43%20189.09V49.24H139.67Z'%20fill='%23A140FF'/%3e%3c/g%3e%3cpath%20d='M164.43%2049.24H139.67C134.203%2049.2347%20128.961%2047.0606%20125.095%2043.1947C121.229%2039.3288%20119.055%2034.0871%20119.05%2028.62V0L164.43%2049.24Z'%20fill='%23A140FF'/%3e%3cpath%20d='M183.94%20170.6H58.8999C50.0302%20170.6%2042.8401%20177.79%2042.8401%20186.66V223.94C42.8401%20232.81%2050.0302%20240%2058.8999%20240H183.94C192.81%20240%20200%20232.81%20200%20223.94V186.66C200%20177.79%20192.81%20170.6%20183.94%20170.6Z'%20fill='%23A140FF'/%3e%3cpath%20d='M78.5901%20213.37V220.64H71.0601V213.37H78.5901Z'%20fill='white'/%3e%3cpath%20d='M116.19%20190.79V220.64H108.92V202L102.45%20220.67H96.1599L89.6499%20201.96V220.67H82.3799V190.82H91.27L99.3899%20211.61L107.39%20190.82L116.19%20190.79Z'%20fill='white'/%3e%3cpath%20d='M128.48%20210.1V220.64H121.21V190.57H133C136.57%20190.57%20139.3%20191.46%20141.17%20193.23C142.116%20194.16%20142.855%20195.28%20143.338%20196.515C143.82%20197.751%20144.036%20199.075%20143.97%20200.4C144.004%20202.148%20143.573%20203.874%20142.72%20205.4C141.846%20206.889%20140.552%20208.085%20139%20208.84C137.128%20209.729%20135.072%20210.161%20133%20210.1H128.48ZM136.56%20200.4C136.56%20197.733%20135.1%20196.4%20132.18%20196.4H128.48V204.23H132.18C135.1%20204.257%20136.56%20202.98%20136.56%20200.4Z'%20fill='white'/%3e%3cpath%20d='M146.9%20215.11V209L160.64%20190.16H168.46V208.75H172.08V215.08H168.46V220.61H161.1V215.08L146.9%20215.11ZM161.7%20198.61L154.3%20208.78H161.7V198.61Z'%20fill='white'/%3e%3cpath%20d='M119.44%20131.91V84.2001C119.438%2083.9684%20119.414%2083.7375%20119.37%2083.5101C119.359%2083.4421%20119.343%2083.3751%20119.32%2083.3101C119.284%2083.1537%20119.237%2083%20119.18%2082.85C119.154%2082.7816%20119.124%2082.7148%20119.09%2082.6501C119.029%2082.5041%20118.955%2082.3635%20118.87%2082.23L118.77%2082.0701C118.644%2081.8889%20118.504%2081.7184%20118.35%2081.5601L118.28%2081.5001C118.144%2081.3718%20118%2081.2516%20117.85%2081.1401L117.67%2081.0301L117.27%2080.8101L117.06%2080.72C116.904%2080.6595%20116.743%2080.6095%20116.58%2080.5701H116.42C116.193%2080.522%20115.962%2080.4986%20115.73%2080.5001H48.3702C47.4444%2080.5848%2046.5834%2081.0122%2045.9563%2081.6984C45.3293%2082.3847%2044.9811%2083.2805%2044.98%2084.2101C44.98%2084.2701%2044.98%2084.3201%2044.98%2084.3801V132.08C44.9559%20132.694%2045.1509%20133.297%2045.5301%20133.78C45.8581%20134.334%2046.3248%20134.793%2046.8841%20135.112C47.4434%20135.432%2048.0761%20135.6%2048.72%20135.6H115.72C116.7%20135.595%20117.639%20135.205%20118.334%20134.515C119.03%20133.825%20119.427%20132.89%20119.44%20131.91ZM49%2089.48V82.2401H54.8899V89.48H49ZM58.94%2089.48V82.2401H64.8301V89.48H58.94ZM68.8799%2089.48V82.2401H74.7701V89.48H68.8799ZM78.8201%2089.48V82.2401H84.71V89.48H78.8201ZM88.7601%2089.48V82.2401H94.6499V89.48H88.7601ZM98.7%2089.48V82.2401H104.59V89.48H98.7ZM108.64%2089.48V82.2401H114.53V89.48H108.64ZM47.6399%20124.59V91.4401H116.87V124.59H47.6399ZM48.99%20133.78V126.54H54.8799V133.78H48.99ZM58.93%20133.78V126.54H64.8201V133.78H58.93ZM68.8702%20133.78V126.54H74.7601V133.78H68.8702ZM78.8101%20133.78V126.54H84.7V133.78H78.8101ZM88.75%20133.78V126.54H94.6399V133.78H88.75ZM98.69%20133.78V126.54H104.58V133.78H98.69ZM108.63%20133.78V126.54H114.52V133.78H108.63Z'%20fill='%23A140FF'/%3e%3cpath%20d='M90.22%20105.56L80.6499%20100.03C80.1548%2099.7465%2079.5942%2099.5979%2079.0237%2099.599C78.4532%2099.6001%2077.8929%2099.7509%2077.3989%20100.036C76.905%20100.322%2076.4946%20100.732%2076.2087%20101.226C75.9229%20101.719%2075.7716%20102.279%2075.77%20102.85V113.91C75.7716%20114.48%2075.9229%20115.041%2076.2087%20115.534C76.4946%20116.028%2076.905%20116.438%2077.3989%20116.724C77.8929%20117.009%2078.4532%20117.16%2079.0237%20117.161C79.5942%20117.162%2080.1548%20117.013%2080.6499%20116.73L90.22%20111.2C90.714%20110.913%2091.1241%20110.502%2091.4092%20110.007C91.6943%20109.512%2091.8445%20108.951%2091.8445%20108.38C91.8445%20107.809%2091.6943%20107.248%2091.4092%20106.753C91.1241%20106.258%2090.714%20105.847%2090.22%20105.56Z'%20fill='%23A140FF'/%3e%3c/svg%3e", QC = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: JC
}, Symbol.toStringTag, { value: "Module" })), eg = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140.53%2049.24C135.062%2049.2347%20129.819%2047.0609%20125.952%2043.1953C122.084%2039.3297%20119.908%2034.0881%20119.9%2028.62V0H27.77C20.633%200%2013.7883%202.83517%208.7417%207.88177C3.6951%2012.9284%200.860107%2019.773%200.860107%2026.91V189.13C0.870706%20196.26%203.7104%20203.094%208.75586%20208.132C13.8013%20213.17%2020.64%20216%2027.77%20216H138.37C145.507%20216%20152.352%20213.165%20157.398%20208.118C162.445%20203.072%20165.28%20196.227%20165.28%20189.09V49.24H140.53Z'%20fill='%2300C650'/%3e%3c/g%3e%3cpath%20d='M165.28%2049.24H140.53C135.062%2049.2347%20129.819%2047.0609%20125.952%2043.1953C122.084%2039.3297%20119.908%2034.0881%20119.9%2028.62V0L165.28%2049.24Z'%20fill='%2300C650'/%3e%3cpath%20d='M184.8%20170.6H59.76C50.8903%20170.6%2043.7%20177.79%2043.7%20186.66V223.94C43.7%20232.81%2050.8903%20240%2059.76%20240H184.8C193.67%20240%20200.86%20232.81%20200.86%20223.94V186.66C200.86%20177.79%20193.67%20170.6%20184.8%20170.6Z'%20fill='%2300C650'/%3e%3cpath%20d='M65.9199%20213.37V220.64H58.3899V213.37H65.9199Z'%20fill='white'/%3e%3cpath%20d='M103.52%20190.79V220.64H96.24V202L89.78%20220.67H83.48L76.98%20201.96V220.67H69.7V190.82H78.5901L86.72%20211.61L94.72%20190.82L103.52%20190.79Z'%20fill='white'/%3e%3cpath%20d='M115.81%20210.1V220.64H108.54V190.57H120.32C123.887%20190.57%20126.607%20191.457%20128.48%20193.23C129.43%20194.158%20130.171%20195.277%20130.656%20196.513C131.14%20197.749%20131.356%20199.074%20131.29%20200.4C131.317%20202.147%20130.886%20203.871%20130.04%20205.4C129.166%20206.889%20127.872%20208.085%20126.32%20208.84C124.448%20209.729%20122.392%20210.161%20120.32%20210.1H115.81ZM123.89%20200.4C123.89%20197.733%20122.43%20196.4%20119.51%20196.4H115.81V204.23H119.51C122.43%20204.257%20123.89%20202.98%20123.89%20200.4Z'%20fill='white'/%3e%3cpath%20d='M142.14%20196.36V202.65H152.3V208.14H142.14V214.82H153.58V220.64H134.86V190.57H153.58V196.36H142.14Z'%20fill='white'/%3e%3cpath%20d='M181.1%20193C183.523%20194.819%20185.153%20197.501%20185.65%20200.49H178C177.495%20199.415%20176.68%20198.517%20175.66%20197.91C174.515%20197.229%20173.202%20196.883%20171.87%20196.91C170.836%20196.869%20169.805%20197.054%20168.849%20197.453C167.894%20197.852%20167.038%20198.455%20166.34%20199.22C164.883%20200.978%20164.141%20203.22%20164.26%20205.5C164.26%20208.36%20164.99%20210.557%20166.45%20212.09C167.271%20212.886%20168.249%20213.502%20169.322%20213.898C170.395%20214.294%20171.538%20214.462%20172.68%20214.39C174.311%20214.42%20175.909%20213.918%20177.23%20212.96C178.561%20211.978%20179.534%20210.587%20180%20209H170.81V203.77H186V211C185.412%20212.788%20184.489%20214.448%20183.28%20215.89C181.964%20217.439%20180.331%20218.688%20178.49%20219.55C176.407%20220.512%20174.134%20220.991%20171.84%20220.95C169.049%20221.02%20166.289%20220.351%20163.84%20219.01C161.599%20217.754%20159.774%20215.87%20158.59%20213.59C157.327%20211.133%20156.691%20208.402%20156.74%20205.64C156.685%20202.861%20157.32%20200.112%20158.59%20197.64C159.776%20195.368%20161.592%20193.486%20163.82%20192.22C166.234%20190.893%20168.956%20190.227%20171.71%20190.29C175.054%20190.124%20178.358%20191.078%20181.1%20193Z'%20fill='white'/%3e%3cpath%20d='M120.3%20131.91V84.2C120.297%2083.9684%20120.274%2083.7374%20120.23%2083.51C120.236%2083.4435%20120.236%2083.3765%20120.23%2083.31C120.23%2083.15%20120.14%2083%20120.09%2082.85L120%2082.65C119.935%2082.5037%20119.858%2082.3632%20119.77%2082.23L119.68%2082.07C119.551%2081.8912%20119.411%2081.7209%20119.26%2081.56L119.19%2081.5C119.054%2081.3717%20118.91%2081.2516%20118.76%2081.14L118.58%2081.03C118.45%2080.95%20118.31%2080.88%20118.17%2080.81L117.97%2080.72C117.81%2080.6595%20117.646%2080.6095%20117.48%2080.57H117.32C117.097%2080.5215%20116.868%2080.498%20116.64%2080.5H49.2799C48.3542%2080.5847%2047.4935%2081.0121%2046.8664%2081.6984C46.2393%2082.3846%2045.8909%2083.2804%2045.8898%2084.21C45.8898%2084.27%2045.8898%2084.32%2045.8898%2084.38V132.06C45.87%20132.673%2046.0645%20133.274%2046.4399%20133.76C46.7703%20134.314%2047.2388%20134.773%2047.7997%20135.092C48.3606%20135.411%2048.9946%20135.579%2049.6398%20135.58H116.64C117.606%20135.56%20118.526%20135.166%20119.209%20134.482C119.891%20133.798%20120.282%20132.876%20120.3%20131.91ZM49.81%2089.48V82.24H55.6999V89.48H49.81ZM59.7499%2089.48V82.24H65.6398V89.48H59.7499ZM69.6899%2089.48V82.24H75.58V89.48H69.6899ZM79.6298%2089.48V82.24H85.5199V89.48H79.6298ZM89.57%2089.48V82.24H95.4599V89.48H89.57ZM99.5099%2089.48V82.24H105.4V89.48H99.5099ZM109.45%2089.48V82.24H115.34V89.48H109.45ZM48.4499%20124.59V91.44H117.67V124.59H48.4499ZM49.8%20133.78V126.54H55.6899V133.78H49.8ZM59.7399%20133.78V126.54H65.6298V133.78H59.7399ZM69.6798%20133.78V126.54H75.57V133.78H69.6798ZM79.62%20133.78V126.54H85.5099V133.78H79.62ZM89.56%20133.78V126.54H95.4499V133.78H89.56ZM99.4999%20133.78V126.54H105.39V133.78H99.4999ZM109.44%20133.78V126.54H115.33V133.78H109.44Z'%20fill='%2300C650'/%3e%3cpath%20d='M91.0801%20105.56L81.51%20100.03C81.0147%2099.744%2080.4528%2099.5934%2079.8809%2099.5933C79.3089%2099.5931%2078.747%2099.7434%2078.2515%20100.029C77.756%20100.315%2077.3442%20100.726%2077.0579%20101.221C76.7715%20101.716%2076.6207%20102.278%2076.6201%20102.85V113.91C76.6207%20114.482%2076.7715%20115.044%2077.0579%20115.539C77.3442%20116.034%2077.756%20116.445%2078.2515%20116.731C78.747%20117.017%2079.3089%20117.167%2079.8809%20117.167C80.4528%20117.167%2081.0147%20117.016%2081.51%20116.73L91.0801%20111.2C91.5741%20110.913%2091.9842%20110.502%2092.2693%20110.007C92.5544%20109.512%2092.7043%20108.951%2092.7043%20108.38C92.7043%20107.809%2092.5544%20107.248%2092.2693%20106.753C91.9842%20106.258%2091.5741%20105.847%2091.0801%20105.56Z'%20fill='%2300C650'/%3e%3c/svg%3e", tg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: eg
}, Symbol.toStringTag, { value: "Module" })), ng = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140.24%2049.25C134.773%2049.2447%20129.531%2047.0704%20125.665%2043.2046C121.799%2039.3387%20119.625%2034.097%20119.62%2028.6299V0H27.48C20.343%200%2013.4984%202.83523%208.45178%207.88184C3.40518%2012.9284%200.570007%2019.7729%200.570007%2026.9099V189.13C0.580606%20196.26%203.42043%20203.094%208.46588%20208.132C13.5113%20213.17%2020.3499%20216%2027.48%20216H138.09C145.22%20216%20152.059%20213.17%20157.104%20208.132C162.15%20203.094%20164.989%20196.26%20165%20189.13V49.25H140.24Z'%20fill='%23FF3E4C'/%3e%3c/g%3e%3cpath%20d='M165%2049.25H140.24C134.773%2049.2447%20129.531%2047.0704%20125.665%2043.2046C121.799%2039.3387%20119.625%2034.097%20119.62%2028.6299V0L165%2049.25Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M131.17%20150.84H27.93C26.9354%20150.84%2025.9816%20150.445%2025.2783%20149.742C24.5751%20149.038%2024.18%20148.085%2024.18%20147.09C24.1826%20146.097%2024.5789%20145.146%2025.2819%20144.445C25.9848%20143.744%2026.9372%20143.35%2027.93%20143.35H131.17C132.162%20143.35%20133.113%20143.744%20133.815%20144.445C134.516%20145.147%20134.91%20146.098%20134.91%20147.09C134.911%20147.582%20134.816%20148.07%20134.628%20148.524C134.441%20148.979%20134.166%20149.393%20133.818%20149.741C133.471%20150.089%20133.058%20150.366%20132.604%20150.554C132.149%20150.743%20131.662%20150.84%20131.17%20150.84Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M131.17%20108.6H27.93C26.9372%20108.6%2025.9848%20108.206%2025.2819%20107.505C24.5789%20106.804%2024.1826%20105.853%2024.18%20104.86C24.18%20103.866%2024.5751%20102.912%2025.2783%20102.208C25.9816%20101.505%2026.9354%20101.11%2027.93%20101.11H131.17C131.662%20101.11%20132.149%20101.207%20132.604%20101.396C133.058%20101.584%20133.471%20101.861%20133.818%20102.209C134.166%20102.557%20134.441%20102.971%20134.628%20103.426C134.816%20103.881%20134.911%20104.368%20134.91%20104.86C134.91%20105.852%20134.516%20106.803%20133.815%20107.505C133.113%20108.206%20132.162%20108.6%20131.17%20108.6Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M131.17%20129.72H27.93C26.9354%20129.72%2025.9816%20129.325%2025.2783%20128.622C24.5751%20127.918%2024.18%20126.965%2024.18%20125.97C24.1826%20124.977%2024.5789%20124.026%2025.2819%20123.325C25.9848%20122.624%2026.9372%20122.23%2027.93%20122.23H131.17C132.162%20122.23%20133.113%20122.624%20133.815%20123.325C134.516%20124.027%20134.91%20124.978%20134.91%20125.97C134.911%20126.462%20134.816%20126.949%20134.628%20127.404C134.441%20127.859%20134.166%20128.273%20133.818%20128.621C133.471%20128.969%20133.058%20129.246%20132.604%20129.434C132.149%20129.623%20131.662%20129.72%20131.17%20129.72Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M90.45%2087.48H27.93C26.9372%2087.48%2025.9848%2087.0864%2025.2819%2086.3853C24.5789%2085.6842%2024.1826%2084.7328%2024.18%2083.74C24.18%2082.7454%2024.5751%2081.7916%2025.2783%2081.0884C25.9816%2080.3851%2026.9354%2079.99%2027.93%2079.99H90.45C91.4428%2079.9926%2092.3941%2080.3888%2093.0952%2081.0918C93.7963%2081.7948%2094.19%2082.7472%2094.19%2083.74C94.1874%2084.7311%2093.7925%2085.6808%2093.0917%2086.3816C92.3909%2087.0824%2091.4411%2087.4773%2090.45%2087.48Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M90.45%2066.3601H27.93C26.9372%2066.3601%2025.9848%2065.9662%2025.2819%2065.2651C24.5789%2064.564%2024.1826%2063.6129%2024.18%2062.6201C24.18%2061.6256%2024.5751%2060.6715%2025.2783%2059.9683C25.9816%2059.265%2026.9354%2058.8701%2027.93%2058.8701H90.45C91.4428%2058.8728%2092.3941%2059.2689%2093.0952%2059.9719C93.7963%2060.6749%2094.19%2061.6273%2094.19%2062.6201C94.1874%2063.6112%2093.7925%2064.5609%2093.0917%2065.2617C92.3909%2065.9625%2091.4411%2066.3575%2090.45%2066.3601Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M184.51%20170.61H59.47C50.6003%20170.61%2043.41%20177.8%2043.41%20186.67V223.95C43.41%20232.82%2050.6003%20240.01%2059.47%20240.01H184.51C193.38%20240.01%20200.57%20232.82%20200.57%20223.95V186.67C200.57%20177.8%20193.38%20170.61%20184.51%20170.61Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M84.43%20213.38V220.65H76.91V213.38H84.43Z'%20fill='white'/%3e%3cpath%20d='M95.49%20210.1V220.65H88.22V190.58H100C103.57%20190.58%20106.3%20191.47%20108.17%20193.24C109.116%20194.17%20109.855%20195.289%20110.338%20196.525C110.82%20197.761%20111.036%20199.085%20110.97%20200.41C111.006%20202.158%20110.575%20203.884%20109.72%20205.41C108.847%20206.901%20107.553%20208.102%20106%20208.86C104.127%20209.745%20102.071%20210.174%20100%20210.11L95.49%20210.1ZM103.57%20200.41C103.57%20197.743%20102.11%20196.41%2099.19%20196.41H95.49V204.24H99.19C102.11%20204.267%20103.57%20202.99%20103.57%20200.41Z'%20fill='white'/%3e%3cpath%20d='M139.7%20213.4C138.448%20215.674%20136.557%20217.53%20134.26%20218.74C131.676%20220.063%20128.802%20220.719%20125.9%20220.65H114.55V190.58H125.9C128.804%20190.507%20131.682%20191.149%20134.28%20192.45C136.57%20193.634%20138.457%20195.471%20139.7%20197.73C141.001%20200.128%20141.656%20202.823%20141.6%20205.55C141.654%20208.287%20141%20210.991%20139.7%20213.4ZM131.88%20211.89C132.693%20211.056%20133.323%20210.061%20133.729%20208.969C134.135%20207.877%20134.309%20206.713%20134.24%20205.55C134.31%20204.389%20134.136%20203.225%20133.73%20202.135C133.323%20201.045%20132.693%20200.052%20131.88%20199.22C130.061%20197.624%20127.685%20196.812%20125.27%20196.96H121.82V214.14H125.27C127.683%20214.287%20130.057%20213.478%20131.88%20211.89Z'%20fill='white'/%3e%3cpath%20d='M165.33%20190.58V196.37H153V202.96H162.52V208.49H153V220.65H145.72V190.58H165.33Z'%20fill='white'/%3e%3cpath%20d='M129.34%2058.87H111.66C108.578%2058.87%20106.08%2061.3682%20106.08%2064.45V82.13C106.08%2085.2117%20108.578%2087.71%20111.66%2087.71H129.34C132.422%2087.71%20134.92%2085.2117%20134.92%2082.13V64.45C134.92%2061.3682%20132.422%2058.87%20129.34%2058.87Z'%20fill='%23FF3E4C'/%3e%3c/svg%3e", rg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ng
}, Symbol.toStringTag, { value: "Module" })), ig = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140.24%2049.24C134.773%2049.2347%20129.531%2047.0606%20125.665%2043.1947C121.799%2039.3288%20119.625%2034.0871%20119.62%2028.62V0H27.48C20.343%200%2013.4984%202.83517%208.45178%207.88177C3.40518%2012.9284%200.570007%2019.773%200.570007%2026.91V189.13C0.580606%20196.26%203.42043%20203.094%208.46588%20208.132C13.5113%20213.17%2020.3499%20216%2027.48%20216H138.09C145.222%20216%20152.062%20213.169%20157.108%20208.129C162.153%20203.089%20164.992%20196.252%20165%20189.12V49.24H140.24Z'%20fill='%23005FAD'/%3e%3c/g%3e%3cpath%20d='M165%2049.24H140.24C134.773%2049.2347%20129.531%2047.0606%20125.665%2043.1947C121.799%2039.3288%20119.625%2034.0871%20119.62%2028.62V0L165%2049.24Z'%20fill='%23005FAD'/%3e%3cpath%20d='M184.51%20170.6H59.47C50.6003%20170.6%2043.41%20177.79%2043.41%20186.66V223.94C43.41%20232.81%2050.6003%20240%2059.47%20240H184.51C193.38%20240%20200.57%20232.81%20200.57%20223.94V186.66C200.57%20177.79%20193.38%20170.6%20184.51%20170.6Z'%20fill='%23005FAD'/%3e%3cpath%20d='M79.63%20213.37V220.64H72.1V213.37H79.63Z'%20fill='white'/%3e%3cpath%20d='M90.69%20210.1V220.64H83.41V190.57H95.19C98.77%20190.57%20101.493%20191.457%20103.36%20193.23C104.308%20194.159%20105.048%20195.279%20105.532%20196.514C106.016%20197.75%20106.234%20199.074%20106.17%20200.4C106.201%20202.149%20105.766%20203.875%20104.91%20205.4C104.042%20206.893%20102.746%20208.091%20101.19%20208.84C99.3191%20209.732%2097.2619%20210.164%2095.19%20210.1H90.69ZM98.77%20200.4C98.77%20197.733%2097.31%20196.4%2094.39%20196.4H90.69V204.23H94.39C97.31%20204.257%2098.77%20202.98%2098.77%20200.4Z'%20fill='white'/%3e%3cpath%20d='M136.45%20220.64H129.18L117%20202.18V220.64H109.73V190.57H117L129.17%20209.2V190.57H136.44L136.45%20220.64Z'%20fill='white'/%3e%3cpath%20d='M164.86%20193C167.287%20194.816%20168.917%20197.5%20169.41%20200.49H161.71C161.205%20199.419%20160.394%20198.521%20159.38%20197.91C158.234%20197.231%20156.922%20196.884%20155.59%20196.91C154.555%20196.867%20153.524%20197.052%20152.569%20197.451C151.613%20197.85%20150.757%20198.454%20150.06%20199.22C148.599%20200.976%20147.856%20203.219%20147.98%20205.5C147.98%20208.36%20148.71%20210.557%20150.17%20212.09C150.991%20212.887%20151.969%20213.503%20153.042%20213.899C154.115%20214.295%20155.259%20214.462%20156.4%20214.39C158.031%20214.418%20159.628%20213.916%20160.95%20212.96C162.297%20211.952%20163.268%20210.523%20163.71%20208.9H154.53V203.67H169.8V211C169.209%20212.788%20168.282%20214.448%20167.07%20215.89C165.761%20217.442%20164.13%20218.691%20162.29%20219.55C160.204%20220.513%20157.927%20220.992%20155.63%20220.95C152.839%20221.021%20150.079%20220.351%20147.63%20219.01C145.389%20217.754%20143.564%20215.87%20142.38%20213.59C141.112%20211.135%20140.477%20208.403%20140.53%20205.64C140.47%20202.861%20141.106%20200.111%20142.38%20197.64C143.563%20195.366%20145.379%20193.483%20147.61%20192.22C150.023%20190.891%20152.746%20190.225%20155.5%20190.29C158.835%20190.126%20162.128%20191.08%20164.86%20193Z'%20fill='white'/%3e%3cpath%20d='M55.27%2066.72H41.52V80.47H55.27V66.72Z'%20fill='%23005FAD'/%3e%3cpath%20d='M69.03%2080.47H55.28V94.22H69.03V80.47Z'%20fill='%23005FAD'/%3e%3cpath%20d='M82.78%2066.72H69.03V80.47H82.78V66.72Z'%20fill='%23005FAD'/%3e%3cpath%20d='M96.5301%2080.47H82.78V94.22H96.5301V80.47Z'%20fill='%23005FAD'/%3e%3cpath%20d='M110.3%2066.72H96.55V80.47H110.3V66.72Z'%20fill='%23005FAD'/%3e%3cpath%20d='M124.05%2080.47H110.3V94.22H124.05V80.47Z'%20fill='%23005FAD'/%3e%3cpath%20d='M55.27%2094.2H41.52V107.95H55.27V94.2Z'%20fill='%23005FAD'/%3e%3cpath%20d='M69.03%20107.95H55.28V121.7H69.03V107.95Z'%20fill='%23005FAD'/%3e%3cpath%20d='M82.78%2094.2H69.03V107.95H82.78V94.2Z'%20fill='%23005FAD'/%3e%3cpath%20d='M96.5301%20107.95H82.78V121.7H96.5301V107.95Z'%20fill='%23005FAD'/%3e%3cpath%20d='M110.3%2094.2H96.55V107.95H110.3V94.2Z'%20fill='%23005FAD'/%3e%3cpath%20d='M124.05%20107.95H110.3V121.7H124.05V107.95Z'%20fill='%23005FAD'/%3e%3cpath%20d='M55.27%20121.81H41.52V135.56H55.27V121.81Z'%20fill='%23005FAD'/%3e%3cpath%20d='M69.03%20135.56H55.28V149.31H69.03V135.56Z'%20fill='%23005FAD'/%3e%3cpath%20d='M82.78%20121.81H69.03V135.56H82.78V121.81Z'%20fill='%23005FAD'/%3e%3cpath%20d='M96.5301%20135.56H82.78V149.31H96.5301V135.56Z'%20fill='%23005FAD'/%3e%3cpath%20d='M110.3%20121.81H96.55V135.56H110.3V121.81Z'%20fill='%23005FAD'/%3e%3cpath%20d='M124.05%20135.56H110.3V149.31H124.05V135.56Z'%20fill='%23005FAD'/%3e%3c/svg%3e", og = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ig
}, Symbol.toStringTag, { value: "Module" })), ag = "data:image/svg+xml,%3csvg%20width='200'%20height='240'%20viewBox='0%200%20200%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M139.67%2049.25C134.203%2049.2447%20128.961%2047.0704%20125.095%2043.2046C121.229%2039.3387%20119.055%2034.097%20119.05%2028.6299V0H26.9099C19.7729%200%2012.9284%202.83523%207.88184%207.88184C2.83523%2012.9284%200%2019.7729%200%2026.9099V189.13C0%20196.267%202.83523%20203.112%207.88184%20208.158C12.9284%20213.205%2019.7729%20216.04%2026.9099%20216.04H137.51C141.045%20216.041%20144.545%20215.346%20147.811%20213.994C151.077%20212.643%20154.045%20210.661%20156.545%20208.162C159.045%20205.663%20161.028%20202.696%20162.381%20199.43C163.734%20196.165%20164.43%20192.665%20164.43%20189.13V49.25H139.67Z'%20fill='%23FF3E4C'/%3e%3c/g%3e%3cpath%20d='M164.43%2049.25H139.67C134.203%2049.2447%20128.961%2047.0704%20125.095%2043.2046C121.229%2039.3387%20119.055%2034.097%20119.05%2028.6299V0L164.43%2049.25Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M183.94%20170.61H58.8999C50.0302%20170.61%2042.8401%20177.8%2042.8401%20186.67V223.95C42.8401%20232.82%2050.0302%20240.01%2058.8999%20240.01H183.94C192.81%20240.01%20200%20232.82%20200%20223.95V186.67C200%20177.8%20192.81%20170.61%20183.94%20170.61Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M86.8%20213.38V220.65H79.27V213.38H86.8Z'%20fill='white'/%3e%3cpath%20d='M97.8601%20210.1V220.65H90.5901V190.58H102.37C105.943%20190.58%20108.663%20191.467%20110.53%20193.24C111.478%20194.169%20112.218%20195.289%20112.702%20196.524C113.186%20197.76%20113.404%20199.084%20113.34%20200.41C113.372%20202.158%20112.94%20203.883%20112.09%20205.41C111.216%20206.904%20109.918%20208.105%20108.36%20208.86C106.488%20209.749%20104.431%20210.178%20102.36%20210.11L97.8601%20210.1ZM105.94%20200.41C105.94%20197.743%20104.48%20196.41%20101.56%20196.41H97.8601V204.24H101.56C104.48%20204.267%20105.94%20202.99%20105.94%20200.41Z'%20fill='white'/%3e%3cpath%20d='M124.19%20210.1V220.65H116.91V190.58H128.69C132.27%20190.58%20134.993%20191.467%20136.86%20193.24C137.808%20194.169%20138.548%20195.289%20139.032%20196.524C139.516%20197.76%20139.734%20199.084%20139.67%20200.41C139.703%20202.159%20139.268%20203.885%20138.41%20205.41C137.542%20206.906%20136.247%20208.107%20134.69%20208.86C132.818%20209.749%20130.761%20210.178%20128.69%20210.11L124.19%20210.1ZM132.27%20200.41C132.27%20197.743%20130.81%20196.41%20127.89%20196.41H124.19V204.24H127.89C130.81%20204.267%20132.27%20202.99%20132.27%20200.41Z'%20fill='white'/%3e%3cpath%20d='M164.85%20190.58V196.37H156.68V220.65H149.37V196.37H141.28V190.58H164.85Z'%20fill='white'/%3e%3cpath%20d='M74.6899%2083.73H31C30.0072%2083.73%2029.0548%2083.3364%2028.3518%2082.6353C27.6488%2081.9342%2027.2526%2080.9828%2027.25%2079.99C27.25%2078.9954%2027.6451%2078.0416%2028.3484%2077.3384C29.0517%2076.6351%2030.0054%2076.24%2031%2076.24H74.6499C75.6445%2076.24%2076.5985%2076.6351%2077.3018%2077.3384C78.005%2078.0416%2078.3999%2078.9954%2078.3999%2079.99C78.3973%2080.9759%2078.0066%2081.9211%2077.3123%2082.6211C76.6179%2083.3211%2075.6758%2083.7195%2074.6899%2083.73Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M74.6899%20106.1H31C30.0072%20106.1%2029.0548%20105.706%2028.3518%20105.005C27.6488%20104.304%2027.2526%20103.353%2027.25%20102.36C27.25%20101.366%2027.6451%20100.412%2028.3484%2099.7083C29.0517%2099.005%2030.0054%2098.6101%2031%2098.6101H74.6499C75.6445%2098.6101%2076.5985%2099.005%2077.3018%2099.7083C78.005%20100.412%2078.3999%20101.366%2078.3999%20102.36C78.3973%20103.346%2078.0066%20104.291%2077.3123%20104.991C76.6179%20105.691%2075.6758%20106.09%2074.6899%20106.1Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M74.6899%20128.47H31C30.0054%20128.47%2029.0517%20128.075%2028.3484%20127.372C27.6451%20126.668%2027.25%20125.715%2027.25%20124.72C27.2579%20123.731%2027.6565%20122.784%2028.3589%20122.088C29.0613%20121.391%2030.0106%20121%2031%20121H74.6499C75.6427%20121%2076.5951%20121.394%2077.2981%20122.095C78.0011%20122.796%2078.3973%20123.747%2078.3999%20124.74C78.3947%20125.724%2078.0029%20126.667%2077.3088%20127.365C76.6148%20128.063%2075.6741%20128.459%2074.6899%20128.47Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M74.6899%20150.84H31C30.0054%20150.84%2029.0517%20150.445%2028.3484%20149.742C27.6451%20149.038%2027.25%20148.085%2027.25%20147.09C27.2526%20146.097%2027.6488%20145.146%2028.3518%20144.445C29.0548%20143.744%2030.0072%20143.35%2031%20143.35H74.6499C75.6427%20143.35%2076.5951%20143.744%2077.2981%20144.445C78.0011%20145.146%2078.3973%20146.097%2078.3999%20147.09C78.4%20148.078%2078.0106%20149.025%2077.3159%20149.728C76.6213%20150.43%2075.6776%20150.83%2074.6899%20150.84Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M117.25%20118V84.76C109.152%2085.1876%20101.527%2088.7053%2095.9451%2094.5881C90.3636%20100.471%2087.2515%20108.271%2087.25%20116.38C87.2487%20120.538%2088.0666%20124.656%2089.6572%20128.497C91.2478%20132.339%2093.5799%20135.83%2096.52%20138.77C99.4602%20141.71%20102.951%20144.042%20106.793%20145.633C110.634%20147.223%20114.752%20148.041%20118.91%20148.04C127.019%20148.041%20134.819%20144.929%20140.701%20139.347C146.582%20133.765%20150.097%20126.138%20150.52%20118.04L117.25%20118Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M123.31%2082.23V112.23H153.31C152.909%20104.403%20149.62%2097.0033%20144.078%2091.4617C138.537%2085.9201%20131.137%2082.6306%20123.31%2082.23Z'%20fill='%23FF3E4C'/%3e%3c/svg%3e", sg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ag
}, Symbol.toStringTag, { value: "Module" })), lg = "data:image/svg+xml,%3csvg%20width='200'%20height='240'%20viewBox='0%200%20200%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M139.67%2049.24C134.203%2049.2347%20128.961%2047.0606%20125.095%2043.1947C121.229%2039.3288%20119.055%2034.0871%20119.05%2028.62V0H26.91C19.773%200%2012.9284%202.83511%207.88176%207.88171C2.83516%2012.9283%200%2019.7731%200%2026.91V189.12C0.0079507%20196.252%202.84661%20203.089%207.89235%20208.129C12.9381%20213.169%2019.7782%20216%2026.91%20216H137.51C141.045%20216%20144.546%20215.304%20147.812%20213.951C151.078%20212.598%20154.046%20210.615%20156.545%20208.115C159.045%20205.616%20161.028%20202.648%20162.381%20199.382C163.734%20196.116%20164.43%20192.615%20164.43%20189.08V49.2L139.67%2049.24Z'%20fill='%23005FAD'/%3e%3c/g%3e%3cpath%20d='M164.43%2049.24H139.67C134.203%2049.2347%20128.961%2047.0606%20125.095%2043.1947C121.229%2039.3288%20119.055%2034.0871%20119.05%2028.62V0L164.43%2049.24Z'%20fill='%23005FAD'/%3e%3cpath%20d='M183.94%20170.6H58.9C50.0303%20170.6%2042.84%20177.79%2042.84%20186.66V223.94C42.84%20232.81%2050.0303%20240%2058.9%20240H183.94C192.81%20240%20200%20232.81%20200%20223.94V186.66C200%20177.79%20192.81%20170.6%20183.94%20170.6Z'%20fill='%23005FAD'/%3e%3cpath%20d='M98.12%20213.37V220.65H90.59V213.37H98.12Z'%20fill='white'/%3e%3cpath%20d='M109.18%20210.1V220.65H101.9V190.58H113.69C117.257%20190.58%20119.977%20191.463%20121.85%20193.23C122.796%20194.16%20123.535%20195.28%20124.019%20196.515C124.504%20197.751%20124.722%20199.075%20124.66%20200.4C124.691%20202.149%20124.257%20203.875%20123.4%20205.4C122.535%20206.895%20121.238%20208.094%20119.68%20208.84C117.809%20209.732%20115.752%20210.164%20113.68%20210.1H109.18ZM117.26%20200.4C117.26%20197.733%20115.8%20196.4%20112.88%20196.4H109.18V204.23H112.88C115.8%20204.257%20117.26%20202.98%20117.26%20200.4Z'%20fill='white'/%3e%3cpath%20d='M148.63%20216.56C147.769%20217.946%20146.526%20219.054%20145.05%20219.75C143.264%20220.593%20141.304%20221.001%20139.33%20220.94C136.358%20221.061%20133.429%20220.197%20131%20218.48C129.924%20217.675%20129.043%20216.637%20128.423%20215.444C127.803%20214.251%20127.46%20212.934%20127.42%20211.59H135.16C135.224%20212.603%20135.658%20213.557%20136.38%20214.27C137.097%20214.94%20138.049%20215.299%20139.03%20215.27C139.841%20215.317%20140.638%20215.044%20141.25%20214.51C141.513%20214.249%20141.72%20213.937%20141.858%20213.593C141.996%20213.249%20142.061%20212.88%20142.05%20212.51C142.063%20212.157%20142.004%20211.804%20141.876%20211.474C141.749%20211.144%20141.557%20210.843%20141.31%20210.59C140.781%20210.056%20140.153%20209.631%20139.46%20209.34C138.72%20209.013%20137.7%20208.623%20136.4%20208.17C134.806%20207.646%20133.249%20207.015%20131.74%20206.28C130.496%20205.637%20129.428%20204.7%20128.63%20203.55C127.715%20202.158%20127.264%20200.513%20127.34%20198.85C127.298%20197.202%20127.774%20195.583%20128.7%20194.22C129.645%20192.885%20130.949%20191.845%20132.46%20191.22C134.209%20190.514%20136.084%20190.173%20137.97%20190.22C140.832%20190.062%20143.66%20190.903%20145.97%20192.6C146.951%20193.399%20147.754%20194.395%20148.328%20195.523C148.901%20196.651%20149.233%20197.886%20149.3%20199.15H141.44C141.342%20198.266%20140.96%20197.438%20140.35%20196.79C140.036%20196.493%20139.665%20196.262%20139.259%20196.112C138.854%20195.963%20138.422%20195.897%20137.99%20195.92C137.243%20195.882%20136.508%20196.124%20135.93%20196.6C135.657%20196.853%20135.444%20197.164%20135.307%20197.51C135.17%20197.856%20135.113%20198.229%20135.14%20198.6C135.131%20198.931%20135.189%20199.261%20135.309%20199.57C135.429%20199.879%20135.61%20200.161%20135.84%20200.4C136.343%20200.92%20136.945%20201.335%20137.61%20201.62C138.32%20201.93%20139.34%20202.33%20140.67%20202.81C142.291%20203.331%20143.869%20203.976%20145.39%20204.74C146.644%20205.41%20147.723%20206.366%20148.54%20207.53C149.471%20208.938%20149.933%20210.604%20149.86%20212.29C149.843%20213.798%20149.418%20215.274%20148.63%20216.56Z'%20fill='white'/%3e%3cpath%20d='M50.06%20130.81C50.06%20130.81%2043.54%20116.98%2051.97%20103.48C51.97%20103.48%2054.46%20110.74%2056.51%20110.26C56.51%20110.26%2053.9%2099.8501%2055.82%2096.7701C55.82%2096.7701%2064.14%2084.8501%2073.33%2078.4001C73.33%2078.4001%2073.62%2085.49%2075.78%2086.07C75.78%2086.07%2075.44%2081.69%2078.49%2075.07C78.49%2075.07%2093.29%2063.67%20117.99%2064.71C117.99%2064.71%20108.24%2079.8%20102.76%2089.99C99.8648%2095.4881%2096.6803%20100.829%2093.22%20105.99C93.22%20105.99%2085.96%20110.24%2081.22%20109.84C81.22%20109.84%2085.22%20112.98%2089.56%20111.42C89.56%20111.42%2078.51%20131.42%2057.07%20133.95C57.07%20133.95%2053.07%20142.18%2052.27%20149.38C52.27%20149.38%2048.27%20151.8%2046.39%20151.38C46.39%20151.38%2056.76%20111.54%2092.11%2082.69C92.16%2082.69%2071.78%2088.0801%2050.06%20130.81Z'%20fill='%23005FAD'/%3e%3c/svg%3e", cg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: lg
}, Symbol.toStringTag, { value: "Module" })), ug = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140.1%2049.25C134.631%2049.2447%20129.388%2047.0692%20125.522%2043.2012C121.656%2039.3332%20119.483%2034.0889%20119.48%2028.62V0H27.3401C20.2031%200%2013.3584%202.83511%208.31177%207.88171C3.26516%2012.9283%200.429932%2019.7731%200.429932%2026.91V189.13C0.429932%20196.267%203.26516%20203.112%208.31177%20208.158C13.3584%20213.205%2020.2031%20216.04%2027.3401%20216.04H137.94C145.077%20216.04%20151.922%20213.205%20156.968%20208.158C162.015%20203.112%20164.85%20196.267%20164.85%20189.13V49.25H140.1Z'%20fill='%23005FAD'/%3e%3c/g%3e%3cpath%20d='M164.85%2049.25H140.1C134.631%2049.2447%20129.388%2047.0692%20125.522%2043.2012C121.656%2039.3332%20119.483%2034.0889%20119.48%2028.62V0L164.85%2049.25Z'%20fill='%23005FAD'/%3e%3cpath%20d='M184.37%20170.61H59.3301C50.4604%20170.61%2043.27%20177.8%2043.27%20186.67V223.95C43.27%20232.82%2050.4604%20240.01%2059.3301%20240.01H184.37C193.24%20240.01%20200.43%20232.82%20200.43%20223.95V186.67C200.43%20177.8%20193.24%20170.61%20184.37%20170.61Z'%20fill='%23005FAD'/%3e%3cpath%20d='M84.1201%20213.38V220.65H76.5901V213.38H84.1201Z'%20fill='white'/%3e%3cpath%20d='M95.1799%20210.1V220.65H87.8999V190.58H99.6899C103.26%20190.58%20105.98%20191.46%20107.85%20193.24C108.797%20194.168%20109.536%20195.285%20110.021%20196.519C110.505%20197.753%20110.723%20199.076%20110.66%20200.4C110.687%20202.147%20110.256%20203.871%20109.41%20205.4C108.536%20206.894%20107.237%20208.095%20105.68%20208.85C103.806%20209.733%20101.75%20210.161%2099.6799%20210.1H95.1799ZM103.26%20200.4C103.26%20197.767%20101.8%20196.433%2098.8799%20196.4H95.1799V204.22H98.8799C101.8%20204.253%20103.26%20202.98%20103.26%20200.4Z'%20fill='white'/%3e%3cpath%20d='M134.63%20216.57C133.763%20217.951%20132.522%20219.058%20131.05%20219.76C129.263%20220.598%20127.304%20221.006%20125.33%20220.95C122.357%20221.068%20119.428%20220.199%20117%20218.48C115.923%20217.676%20115.041%20216.638%20114.421%20215.445C113.801%20214.252%20113.459%20212.934%20113.42%20211.59H121.17C121.218%20212.604%20121.651%20213.563%20122.38%20214.27C123.1%20214.941%20124.056%20215.301%20125.04%20215.27C125.849%20215.312%20126.642%20215.036%20127.25%20214.5C127.517%20214.241%20127.726%20213.93%20127.866%20213.585C128.005%20213.241%20128.072%20212.871%20128.06%20212.5C128.071%20212.147%20128.01%20211.796%20127.881%20211.468C127.752%20211.14%20127.558%20210.841%20127.31%20210.59C126.779%20210.056%20126.151%20209.629%20125.46%20209.33C124.72%20209.01%20123.7%20208.62%20122.4%20208.16C120.806%20207.635%20119.249%20207.003%20117.74%20206.27C116.502%20205.628%20115.438%20204.694%20114.64%20203.55C113.719%20202.161%20113.263%20200.515%20113.34%20198.85C113.298%20197.199%20113.773%20195.577%20114.7%20194.21C115.648%20192.878%20116.951%20191.839%20118.46%20191.21C120.209%20190.505%20122.084%20190.165%20123.97%20190.21C126.832%20190.05%20129.661%20190.891%20131.97%20192.59C132.951%20193.39%20133.755%20194.385%20134.33%20195.513C134.905%20196.641%20135.239%20197.876%20135.31%20199.14H127.44C127.349%20198.254%20126.966%20197.423%20126.35%20196.78C126.036%20196.483%20125.665%20196.252%20125.259%20196.102C124.854%20195.953%20124.422%20195.887%20123.99%20195.91C123.243%20195.872%20122.508%20196.114%20121.93%20196.59C121.657%20196.843%20121.444%20197.154%20121.307%20197.5C121.17%20197.846%20121.113%20198.219%20121.14%20198.59C121.129%20199.261%20121.38%20199.911%20121.84%20200.4C122.344%20200.917%20122.946%20201.328%20123.61%20201.61C124.32%20201.92%20125.34%20202.32%20126.67%20202.8C128.291%20203.324%20129.869%20203.972%20131.39%20204.74C132.646%20205.403%20133.726%20206.356%20134.54%20207.52C135.471%20208.928%20135.933%20210.594%20135.86%20212.28C135.848%20213.795%20135.423%20215.279%20134.63%20216.57Z'%20fill='white'/%3e%3cpath%20d='M165%20213.4C163.747%20215.674%20161.851%20217.528%20159.55%20218.73C156.972%20220.061%20154.1%20220.721%20151.2%20220.65H139.84V190.58H151.2C154.102%20190.503%20156.977%20191.146%20159.57%20192.45C161.86%20193.633%20163.749%20195.467%20165%20197.72C166.293%20200.124%20166.944%20202.821%20166.89%20205.55C166.941%20208.285%20166.291%20210.988%20165%20213.4ZM157.17%20211.89C157.984%20211.057%20158.615%20210.062%20159.022%20208.97C159.428%20207.878%20159.601%20206.713%20159.53%20205.55C159.601%20204.387%20159.428%20203.222%20159.022%20202.13C158.615%20201.038%20157.984%20200.043%20157.17%20199.21C155.348%20197.62%20152.974%20196.811%20150.56%20196.96H147.11V214.14H150.56C152.987%20214.3%20155.378%20213.491%20157.21%20211.89H157.17Z'%20fill='white'/%3e%3cpath%20d='M50.48%20130.81C50.48%20130.81%2043.9699%20116.98%2052.3999%20103.48C52.3999%20103.48%2054.8899%20110.74%2056.9399%20110.27C56.9399%20110.27%2054.33%2099.8601%2056.25%2096.7801C56.25%2096.7801%2064.57%2084.8501%2073.75%2078.4001C73.75%2078.4001%2074.05%2085.49%2076.21%2086.07C76.21%2086.07%2075.8699%2081.69%2078.9199%2075.07C78.9199%2075.07%2093.7199%2063.67%20118.42%2064.71C118.42%2064.71%20108.67%2079.81%20103.19%2089.99C100.293%2095.4869%2097.1082%20100.828%2093.6499%20105.99C93.6499%20105.99%2086.3899%20110.23%2081.6499%20109.83C81.6499%20109.83%2085.65%20112.97%2089.99%20111.42C89.99%20111.42%2078.94%20131.42%2057.5%20133.94C57.5%20133.94%2053.5%20142.17%2052.7%20149.38C52.7%20149.38%2048.7001%20151.8%2046.8201%20151.38C46.8201%20151.38%2057.19%20111.55%2092.54%2082.69C92.59%2082.69%2072.21%2088.0801%2050.48%20130.81Z'%20fill='%23005FAD'/%3e%3c/svg%3e", fg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ug
}, Symbol.toStringTag, { value: "Module" })), dg = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140%2049.25C134.532%2049.2447%20129.289%2047.0709%20125.422%2043.2053C121.554%2039.3398%20119.378%2034.0979%20119.37%2028.6299V0H27.2C20.063%200%2013.2184%202.83523%208.17175%207.88184C3.12515%2012.9284%200.290039%2019.7729%200.290039%2026.9099V189.13C0.300637%20196.26%203.14046%20203.094%208.18591%20208.132C13.2314%20213.17%2020.0699%20216%2027.2%20216H137.8C144.937%20216%20151.782%20213.165%20156.828%20208.118C161.875%20203.072%20164.71%20196.227%20164.71%20189.09V49.21L140%2049.25Z'%20fill='%23FF3E4C'/%3e%3c/g%3e%3cpath%20d='M164.71%2049.25H140C134.532%2049.2447%20129.289%2047.0709%20125.422%2043.2053C121.554%2039.3398%20119.378%2034.0979%20119.37%2028.6299V0L164.71%2049.25Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M184.23%20170.61H59.1899C50.3202%20170.61%2043.13%20177.8%2043.13%20186.67V223.95C43.13%20232.82%2050.3202%20240.01%2059.1899%20240.01H184.23C193.1%20240.01%20200.29%20232.82%20200.29%20223.95V186.67C200.29%20177.8%20193.1%20170.61%20184.23%20170.61Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M89.33%20210.1V220.65H82.05V190.58H93.84C97.4133%20190.58%20100.133%20191.467%20102%20193.24C102.948%20194.169%20103.688%20195.289%20104.172%20196.524C104.656%20197.76%20104.874%20199.084%20104.81%20200.41C104.843%20202.159%20104.408%20203.885%20103.55%20205.41C102.682%20206.906%20101.387%20208.107%2099.83%20208.86C97.9582%20209.749%2095.901%20210.178%2093.83%20210.11L89.33%20210.1ZM97.41%20200.41C97.41%20197.743%2095.95%20196.41%2093.03%20196.41H89.33V204.24H93.03C95.95%20204.267%2097.41%20202.99%2097.41%20200.41Z'%20fill='white'/%3e%3cpath%20d='M115.44%20190.58V207.93C115.33%20209.561%20115.805%20211.178%20116.78%20212.49C117.269%20213.027%20117.872%20213.447%20118.546%20213.719C119.219%20213.991%20119.945%20214.108%20120.67%20214.06C121.396%20214.108%20122.124%20213.992%20122.799%20213.72C123.475%20213.449%20124.08%20213.028%20124.57%20212.49C125.545%20211.178%20126.02%20209.561%20125.91%20207.93V190.58H133.18V207.93C133.265%20210.424%20132.692%20212.897%20131.52%20215.1C130.477%20216.976%20128.9%20218.5%20126.99%20219.48C124.976%20220.484%20122.75%20220.989%20120.5%20220.95C118.287%20220.996%20116.096%20220.498%20114.12%20219.5C112.259%20218.522%20110.747%20216.992%20109.79%20215.12C108.674%20212.892%20108.131%20210.421%20108.21%20207.93V190.58H115.44Z'%20fill='white'/%3e%3cpath%20d='M160.38%20207.81C161.432%20209.122%20161.994%20210.759%20161.97%20212.44C162.023%20213.569%20161.819%20214.696%20161.374%20215.735C160.929%20216.774%20160.254%20217.699%20159.4%20218.44C157.68%20219.887%20155.22%20220.61%20152.02%20220.61H138.02V190.54H151.67C154.73%20190.54%20157.097%20191.207%20158.77%20192.54C159.61%20193.224%20160.275%20194.097%20160.711%20195.088C161.148%20196.079%20161.343%20197.159%20161.28%20198.24C161.338%20199.871%20160.829%20201.472%20159.84%20202.77C158.885%20203.969%20157.547%20204.802%20156.05%20205.13C157.76%20205.496%20159.29%20206.443%20160.38%20207.81ZM145.3%20202.87H150.06C152.59%20202.87%20153.85%20201.8%20153.85%20199.64C153.85%20197.48%20152.56%20196.41%20149.98%20196.41H145.3V202.87ZM154.53%20211.42C154.552%20210.946%20154.468%20210.473%20154.285%20210.036C154.102%20209.598%20153.823%20209.207%20153.47%20208.89C152.611%20208.237%20151.547%20207.914%20150.47%20207.98H145.32V214.74H150.51C153.183%20214.74%20154.523%20213.633%20154.53%20211.42Z'%20fill='white'/%3e%3cpath%20d='M71.3001%2083.73H27.64C26.6481%2083.73%2025.6968%2083.3359%2024.9954%2082.6345C24.294%2081.9331%2023.9%2080.9819%2023.9%2079.99C23.8987%2079.498%2023.9944%2079.0106%2024.1818%2078.5557C24.3691%2078.1008%2024.6444%2077.6872%2024.9918%2077.3389C25.3393%2076.9905%2025.752%2076.7142%2026.2064%2076.5256C26.6608%2076.3371%2027.148%2076.24%2027.64%2076.24H71.3001C72.2877%2076.2532%2073.2301%2076.6554%2073.9229%2077.3594C74.6156%2078.0634%2075.0027%2079.0123%2075%2080C74.9949%2080.9825%2074.6043%2081.9238%2073.9124%2082.6213C73.2204%2083.3189%2072.2825%2083.7169%2071.3001%2083.73Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M71.3001%20106.1H27.64C26.6481%20106.1%2025.6968%20105.706%2024.9954%20105.005C24.294%20104.303%2023.9%20103.352%2023.9%20102.36C23.8987%20101.868%2023.9944%20101.381%2024.1818%20100.926C24.3691%20100.471%2024.6444%20100.057%2024.9918%2099.709C25.3393%2099.3606%2025.752%2099.0843%2026.2064%2098.8958C26.6608%2098.7072%2027.148%2098.6101%2027.64%2098.6101H71.3001C72.2929%2098.6128%2073.2441%2099.0089%2073.9452%2099.7119C74.6463%20100.415%2075.0401%20101.367%2075.0401%20102.36C75.0374%20103.351%2074.6425%20104.301%2073.9417%20105.002C73.2409%20105.703%2072.2912%20106.097%2071.3001%20106.1Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M71.3001%20128.47H27.64C27.148%20128.47%2026.6608%20128.373%2026.2064%20128.184C25.752%20127.996%2025.3393%20127.719%2024.9918%20127.371C24.6444%20127.023%2024.3691%20126.609%2024.1818%20126.154C23.9944%20125.699%2023.8987%20125.212%2023.9%20124.72C23.9%20123.728%2024.294%20122.777%2024.9954%20122.075C25.6968%20121.374%2026.6481%20120.98%2027.64%20120.98H71.3001C72.2912%20120.983%2073.2409%20121.378%2073.9417%20122.078C74.6425%20122.779%2075.0374%20123.729%2075.0401%20124.72C75.0401%20125.713%2074.6463%20126.665%2073.9452%20127.368C73.2441%20128.071%2072.2929%20128.467%2071.3001%20128.47Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M71.3001%20150.84H27.64C27.148%20150.84%2026.6608%20150.743%2026.2064%20150.554C25.752%20150.366%2025.3393%20150.089%2024.9918%20149.741C24.6444%20149.393%2024.3691%20148.979%2024.1818%20148.524C23.9944%20148.07%2023.8987%20147.582%2023.9%20147.09C23.9%20146.098%2024.294%20145.147%2024.9954%20144.445C25.6968%20143.744%2026.6481%20143.35%2027.64%20143.35H71.3001C72.2912%20143.353%2073.2409%20143.747%2073.9417%20144.448C74.6425%20145.149%2075.0374%20146.099%2075.0401%20147.09C75.0401%20148.083%2074.6463%20149.035%2073.9452%20149.738C73.2441%20150.441%2072.2929%20150.837%2071.3001%20150.84Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M130.88%2083.73H88.32C87.328%2083.73%2086.3768%2083.3359%2085.6754%2082.6345C84.974%2081.9331%2084.58%2080.9819%2084.58%2079.99C84.5787%2079.498%2084.6745%2079.0106%2084.8618%2078.5557C85.0492%2078.1008%2085.3245%2077.6872%2085.6719%2077.3389C86.0193%2076.9905%2086.4321%2076.7142%2086.8865%2076.5256C87.3409%2076.3371%2087.828%2076.24%2088.32%2076.24H130.88C131.875%2076.24%20132.828%2076.6351%20133.532%2077.3384C134.235%2078.0416%20134.63%2078.9954%20134.63%2079.99C134.627%2080.9828%20134.231%2081.9342%20133.528%2082.6353C132.825%2083.3364%20131.873%2083.73%20130.88%2083.73Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M130.88%20106.1H88.32C87.328%20106.1%2086.3768%20105.706%2085.6754%20105.005C84.974%20104.303%2084.58%20103.352%2084.58%20102.36C84.5787%20101.868%2084.6745%20101.381%2084.8618%20100.926C85.0492%20100.471%2085.3245%20100.057%2085.6719%2099.709C86.0193%2099.3606%2086.4321%2099.0843%2086.8865%2098.8958C87.3409%2098.7072%2087.828%2098.6101%2088.32%2098.6101H130.88C131.875%2098.6101%20132.828%2099.005%20133.532%2099.7083C134.235%20100.412%20134.63%20101.366%20134.63%20102.36C134.627%20103.353%20134.231%20104.304%20133.528%20105.005C132.825%20105.706%20131.873%20106.1%20130.88%20106.1Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M130.88%20128.47H88.32C87.828%20128.47%2087.3409%20128.373%2086.8865%20128.184C86.4321%20127.996%2086.0193%20127.719%2085.6719%20127.371C85.3245%20127.023%2085.0492%20126.609%2084.8618%20126.154C84.6745%20125.699%2084.5787%20125.212%2084.58%20124.72C84.58%20123.728%2084.974%20122.777%2085.6754%20122.075C86.3768%20121.374%2087.328%20120.98%2088.32%20120.98H130.88C131.873%20120.98%20132.825%20121.374%20133.528%20122.075C134.231%20122.776%20134.627%20123.727%20134.63%20124.72C134.63%20125.715%20134.235%20126.668%20133.532%20127.372C132.828%20128.075%20131.875%20128.47%20130.88%20128.47Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M130.88%20150.84H88.32C87.828%20150.84%2087.3409%20150.743%2086.8865%20150.554C86.4321%20150.366%2086.0193%20150.089%2085.6719%20149.741C85.3245%20149.393%2085.0492%20148.979%2084.8618%20148.524C84.6745%20148.07%2084.5787%20147.582%2084.58%20147.09C84.58%20146.098%2084.974%20145.147%2085.6754%20144.445C86.3768%20143.744%2087.328%20143.35%2088.32%20143.35H130.88C131.873%20143.35%20132.825%20143.744%20133.528%20144.445C134.231%20145.146%20134.627%20146.097%20134.63%20147.09C134.63%20148.085%20134.235%20149.038%20133.532%20149.742C132.828%20150.445%20131.875%20150.84%20130.88%20150.84Z'%20fill='%23FF3E4C'/%3e%3c/svg%3e", pg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dg
}, Symbol.toStringTag, { value: "Module" })), hg = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M139.81%2049.25C134.342%2049.2421%20129.1%2047.0657%20125.235%2043.1982C121.369%2039.3308%20119.195%2034.0881%20119.19%2028.62V1.85821e-06H27.0601C23.5253%20-0.00131167%2020.0249%200.693768%2016.7589%202.04553C13.4929%203.3973%2010.5252%205.37922%208.02527%207.87818C5.52538%2010.3771%203.54231%2013.3441%202.18933%2016.6096C0.836352%2019.8751%200.140014%2023.3753%200.140015%2026.91V189.13C0.140014%20192.665%200.836352%20196.165%202.18933%20199.43C3.54231%20202.696%205.52538%20205.663%208.02527%20208.162C10.5252%20210.661%2013.4929%20212.643%2016.7589%20213.995C20.0249%20215.346%2023.5253%20216.041%2027.0601%20216.04H137.66C144.797%20216.04%20151.642%20213.205%20156.688%20208.158C161.735%20203.112%20164.57%20196.267%20164.57%20189.13V49.25H139.81Z'%20fill='%23A140FF'/%3e%3c/g%3e%3cpath%20d='M164.57%2049.25H139.81C134.342%2049.2421%20129.1%2047.0657%20125.235%2043.1982C121.369%2039.3308%20119.195%2034.0881%20119.19%2028.62V0L164.57%2049.25Z'%20fill='%23A140FF'/%3e%3cpath%20d='M184.09%20170.61H59.05C50.1803%20170.61%2042.99%20177.8%2042.99%20186.67V223.95C42.99%20232.82%2050.1803%20240.01%2059.05%20240.01H184.09C192.96%20240.01%20200.15%20232.82%20200.15%20223.95V186.67C200.15%20177.8%20192.96%20170.61%20184.09%20170.61Z'%20fill='%23A140FF'/%3e%3cpath%20d='M82.05%20213.38V220.65H74.52V213.38H82.05Z'%20fill='white'/%3e%3cpath%20d='M101.28%20220.65L94.77%20209.29H93.11V220.65H85.84V190.58H98.26C100.328%20190.523%20102.381%20190.944%20104.26%20191.81C105.802%20192.543%20107.09%20193.72%20107.96%20195.19C108.797%20196.693%20109.222%20198.39%20109.19%20200.11C109.248%20202.12%20108.609%20204.088%20107.38%20205.68C106.041%20207.297%20104.188%20208.405%20102.13%20208.82L109.28%20220.65H101.28ZM93.11%20204.32H97.62C98.7721%20204.407%2099.9136%20204.049%20100.81%20203.32C101.165%20202.944%20101.438%20202.498%20101.61%20202.011C101.782%20201.524%20101.85%20201.005%20101.81%20200.49C101.843%20199.978%20101.772%20199.465%20101.6%20198.982C101.428%20198.499%20101.159%20198.056%20100.81%20197.68C99.9258%20196.943%2098.787%20196.584%2097.64%20196.68H93.13L93.11%20204.32Z'%20fill='white'/%3e%3cpath%20d='M131.52%20215.16H120.25L118.37%20220.65H110.72L121.72%20190.79H130.09L141.09%20220.65H133.35L131.52%20215.16ZM129.65%20209.63L125.9%20198.57L122.12%20209.63H129.65Z'%20fill='white'/%3e%3cpath%20d='M159.38%20220.65L152.87%20209.29H151.21V220.65H143.94V190.58H156.36C158.428%20190.523%20160.481%20190.944%20162.36%20191.81C163.902%20192.543%20165.191%20193.72%20166.06%20195.19C166.897%20196.693%20167.322%20198.39%20167.29%20200.11C167.349%20202.12%20166.709%20204.088%20165.48%20205.68C164.141%20207.297%20162.288%20208.405%20160.23%20208.82L167.38%20220.65H159.38ZM151.21%20204.32H155.72C156.872%20204.405%20158.013%20204.047%20158.91%20203.32C159.265%20202.944%20159.538%20202.498%20159.71%20202.011C159.882%20201.524%20159.95%20201.005%20159.91%20200.49C159.943%20199.978%20159.872%20199.465%20159.7%20198.982C159.528%20198.499%20159.259%20198.056%20158.91%20197.68C158.026%20196.943%20156.887%20196.584%20155.74%20196.68H151.23L151.21%20204.32Z'%20fill='white'/%3e%3cpath%20d='M95.11%20150.84H32.59C31.5971%20150.837%2030.6459%20150.441%2029.9448%20149.738C29.2437%20149.035%2028.85%20148.083%2028.85%20147.09C28.85%20146.098%2029.244%20145.147%2029.9454%20144.445C30.6468%20143.744%2031.5981%20143.35%2032.59%20143.35H95.11C95.602%20143.349%2096.0894%20143.444%2096.5443%20143.632C96.9992%20143.819%2097.4126%20144.094%2097.761%20144.442C98.1093%20144.789%2098.3858%20145.202%2098.5743%20145.657C98.7629%20146.111%2098.86%20146.598%2098.86%20147.09C98.86%20148.085%2098.4649%20149.038%2097.7616%20149.742C97.0583%20150.445%2096.1045%20150.84%2095.11%20150.84Z'%20fill='%23A140FF'/%3e%3cpath%20d='M95.11%20128.75H32.59C31.5971%20128.747%2030.6459%20128.351%2029.9448%20127.648C29.2437%20126.945%2028.85%20125.993%2028.85%20125C28.8526%20124.009%2029.2475%20123.059%2029.9484%20122.358C30.6492%20121.657%2031.5989%20121.263%2032.59%20121.26H95.11C96.1028%20121.26%2097.0552%20121.654%2097.7582%20122.355C98.4612%20123.056%2098.8573%20124.007%2098.86%20125C98.86%20125.995%2098.4649%20126.948%2097.7616%20127.652C97.0583%20128.355%2096.1045%20128.75%2095.11%20128.75Z'%20fill='%23A140FF'/%3e%3cpath%20d='M95.11%20106.66H32.59C31.5981%20106.66%2030.6468%20106.266%2029.9454%20105.565C29.244%20104.863%2028.85%20103.912%2028.85%20102.92C28.85%20101.927%2029.2437%20100.975%2029.9448%20100.272C30.6459%2099.5689%2031.5971%2099.1727%2032.59%2099.17H95.11C96.1045%2099.17%2097.0583%2099.565%2097.7616%20100.268C98.4649%20100.972%2098.86%20101.925%2098.86%20102.92C98.86%20103.412%2098.7629%20103.899%2098.5743%20104.354C98.3858%20104.808%2098.1093%20105.221%2097.761%20105.568C97.4126%20105.916%2096.9992%20106.191%2096.5443%20106.378C96.0894%20106.566%2095.602%20106.661%2095.11%20106.66Z'%20fill='%23A140FF'/%3e%3cpath%20d='M95.11%2084.57H32.59C31.5981%2084.57%2030.6468%2084.176%2029.9454%2083.4746C29.244%2082.7732%2028.85%2081.8219%2028.85%2080.83C28.85%2079.8381%2029.244%2078.8868%2029.9454%2078.1854C30.6468%2077.4841%2031.5981%2077.09%2032.59%2077.09H95.11C95.602%2077.0887%2096.0894%2077.1845%2096.5443%2077.3718C96.9992%2077.5592%2097.4126%2077.8345%2097.761%2078.1819C98.1093%2078.5293%2098.3858%2078.9421%2098.5743%2079.3965C98.7629%2079.8509%2098.86%2080.338%2098.86%2080.83C98.86%2081.322%2098.7629%2081.8092%2098.5743%2082.2636C98.3858%2082.718%2098.1093%2083.1307%2097.761%2083.4782C97.4126%2083.8256%2096.9992%2084.1009%2096.5443%2084.2882C96.0894%2084.4756%2095.602%2084.5713%2095.11%2084.57Z'%20fill='%23A140FF'/%3e%3cpath%20d='M123.15%20152.52C119.785%20152.517%20116.559%20151.18%20114.18%20148.8C111.8%20146.421%20110.463%20143.195%20110.46%20139.83V127.14H135.83V139.83C135.827%20143.193%20134.491%20146.418%20132.114%20148.797C129.737%20151.176%20126.513%20152.515%20123.15%20152.52ZM116.95%20133.63V139.83C116.953%20141.473%20117.607%20143.049%20118.769%20144.211C119.931%20145.373%20121.506%20146.027%20123.15%20146.03C124.794%20146.027%20126.369%20145.373%20127.531%20144.211C128.693%20143.049%20129.347%20141.473%20129.35%20139.83V133.63H116.95Z'%20fill='%23A140FF'/%3e%3cpath%20d='M110.46%20127.15H123.18V114.43H110.46V127.15Z'%20fill='%23A140FF'/%3e%3cpath%20d='M123.14%20114.44H135.86V101.72H123.14V114.44Z'%20fill='%23A140FF'/%3e%3cpath%20d='M110.46%20101.73H123.18V89.01H110.46V101.73Z'%20fill='%23A140FF'/%3e%3cpath%20d='M123.14%2089.02H135.86V76.3H123.14V89.02Z'%20fill='%23A140FF'/%3e%3c/svg%3e", mg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: hg
}, Symbol.toStringTag, { value: "Module" })), Cg = "data:image/svg+xml,%3csvg%20width='200'%20height='240'%20viewBox='0%200%20200%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M139.67%2049.24C134.203%2049.2347%20128.961%2047.0606%20125.095%2043.1947C121.229%2039.3288%20119.055%2034.0871%20119.05%2028.62V0H26.91C19.7748%20-4.92665e-07%2012.9316%202.83379%207.88528%207.87823C2.83897%2012.9227%200.00265152%2019.7648%200%2026.9V189.12C0.0079507%20196.252%202.84661%20203.089%207.89235%20208.129C12.9381%20213.169%2019.7782%20216%2026.91%20216H137.51C141.045%20216.001%20144.545%20215.306%20147.811%20213.954C151.077%20212.603%20154.045%20210.621%20156.545%20208.122C159.045%20205.623%20161.028%20202.656%20162.381%20199.39C163.734%20196.125%20164.43%20192.625%20164.43%20189.09V49.24H139.67Z'%20fill='%23FF3E4C'/%3e%3c/g%3e%3cpath%20d='M164.43%2049.24H139.67C134.203%2049.2347%20128.961%2047.0606%20125.095%2043.1947C121.229%2039.3288%20119.055%2034.0871%20119.05%2028.62V0L164.43%2049.24Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M183.94%20170.6H58.9C50.0303%20170.6%2042.84%20177.79%2042.84%20186.66V223.94C42.84%20232.81%2050.0303%20240%2058.9%20240H183.94C192.81%20240%20200%20232.81%20200%20223.94V186.66C200%20177.79%20192.81%20170.6%20183.94%20170.6Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M72.7%20213.37V220.64H65.18V213.37H72.7Z'%20fill='white'/%3e%3cpath%20d='M91.93%20220.64L85.42%20209.29H83.76V220.64H76.49V190.57H88.91C90.9792%20190.512%2093.0334%20190.936%2094.91%20191.81C96.4543%20192.54%2097.7434%20193.718%2098.61%20195.19C99.4473%20196.689%2099.8718%20198.383%2099.84%20200.1C99.8964%20202.108%2099.2609%20204.075%2098.04%20205.67C96.6937%20207.285%2094.8393%20208.395%2092.78%20208.82L100%20220.64H91.93ZM83.76%20204.31H88.27C89.422%20204.397%2090.5635%20204.039%2091.46%20203.31C91.8154%20202.936%2092.0881%20202.492%2092.2604%20202.006C92.4327%20201.521%2092.5007%20201.004%2092.46%20200.49C92.4938%20199.978%2092.4225%20199.465%2092.2505%20198.982C92.0786%20198.498%2091.8095%20198.055%2091.46%20197.68C90.5768%20196.941%2089.4373%20196.582%2088.29%20196.68H83.78L83.76%20204.31Z'%20fill='white'/%3e%3cpath%20d='M122.17%20215.16H110.9L109%20220.64H101.34L112.34%20190.79H120.72L131.72%20220.64H124L122.17%20215.16ZM120.3%20209.63L116.56%20198.57L112.77%20209.63H120.3Z'%20fill='white'/%3e%3cpath%20d='M175.46%20190.57L168.28%20220.64H159.28L154.47%20200.53L149.62%20220.64H140.62L133.43%20190.57H141.34L145.21%20212.35L150.48%20190.57H158.48L163.75%20212.35L167.66%20190.57H175.46Z'%20fill='white'/%3e%3cpath%20d='M65.34%20123.66H41.06C39.1607%20118.658%2038.1915%20113.351%2038.2%20108C38.1927%20102.653%2039.1619%2097.349%2041.06%2092.35C41.8159%2090.3706%2042.715%2088.4488%2043.75%2086.6L47.1%2092.35L56.29%20108.12L60.29%20115.06L65.34%20123.66Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M116.32%20135.84C109.577%20144.108%20100.06%20149.645%2089.54%20151.42C87.3216%20151.788%2085.0786%20151.989%2082.83%20152.02L86.37%20146.02L95.37%20130.66L99.45%20123.66L104.45%20115.1L109.35%20123.66L113.35%20130.66L116.32%20135.84Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M126.23%20108C126.239%20113.348%20125.266%20118.653%20123.36%20123.65C122.604%20125.639%20121.705%20127.571%20120.67%20129.43L117.37%20123.65L108.51%20108.18L104.51%20101.18L99.43%2092.3101H123.33C125.251%2097.3178%20126.234%20102.636%20126.23%20108Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M120%2085.41H77.32L82.41%2076.53L86.41%2069.53L89.26%2064.53C100.057%2066.2715%20109.816%2071.9765%20116.63%2080.53C117.862%2082.0787%20118.988%2083.709%20120%2085.41Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M81.57%2064L78.4%2069.53L69.31%2085.41L65.31%2092.41L60.31%20101.22L55.17%2092.41L51.17%2085.41L48.17%2080.23C55.0495%2071.7602%2064.8343%2066.1531%2075.62%2064.5C77.5899%2064.2002%2079.5777%2064.0331%2081.57%2064Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M87.32%20130.62L82.32%20139.08L78.32%20145.96L75.11%20151.46C64.6061%20149.742%2055.0811%20144.274%2048.3%20136.07C46.8804%20134.351%2045.5902%20132.53%2044.44%20130.62H87.32Z'%20fill='%23FF3E4C'/%3e%3c/svg%3e", gg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Cg
}, Symbol.toStringTag, { value: "Module" })), vg = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140.53%2049.24C135.062%2049.2347%20129.819%2047.0609%20125.952%2043.1953C122.084%2039.3297%20119.908%2034.0881%20119.9%2028.62V0H27.77C20.633%200%2013.7883%202.83514%208.7417%207.88174C3.6951%2012.9283%200.860107%2019.773%200.860107%2026.91V189.13C0.870706%20196.26%203.7104%20203.094%208.75586%20208.132C13.8013%20213.17%2020.64%20216%2027.77%20216H138.37C145.507%20216%20152.352%20213.165%20157.398%20208.118C162.445%20203.072%20165.28%20196.227%20165.28%20189.09V49.24H140.53Z'%20fill='%23FF9908'/%3e%3c/g%3e%3cpath%20d='M165.28%2049.24H140.53C135.062%2049.2347%20129.819%2047.0609%20125.952%2043.1953C122.084%2039.3297%20119.908%2034.0881%20119.9%2028.62V0L165.28%2049.24Z'%20fill='%23FF9908'/%3e%3cpath%20d='M184.8%20170.6H59.76C50.8903%20170.6%2043.7%20177.79%2043.7%20186.66V223.94C43.7%20232.81%2050.8903%20240%2059.76%20240H184.8C193.67%20240%20200.86%20232.81%20200.86%20223.94V186.66C200.86%20177.79%20193.67%20170.6%20184.8%20170.6Z'%20fill='%23FF9908'/%3e%3cpath%20d='M86.76%20213.37V220.64H79.23V213.37H86.76Z'%20fill='white'/%3e%3cpath%20d='M106%20220.64L99.49%20209.28H97.8301V220.64H90.5601V190.57H103C105.068%20190.512%20107.121%20190.933%20109%20191.8C110.542%20192.533%20111.83%20193.71%20112.7%20195.18C113.537%20196.683%20113.962%20198.38%20113.93%20200.1C113.986%20202.108%20113.351%20204.075%20112.13%20205.67C110.784%20207.285%20108.929%20208.395%20106.87%20208.82L114.02%20220.64H106ZM97.8301%20204.31H102.34C103.492%20204.396%20104.634%20204.039%20105.53%20203.31C105.885%20202.934%20106.158%20202.488%20106.33%20202.001C106.502%20201.513%20106.57%20200.995%20106.53%20200.48C106.565%20199.969%20106.495%20199.457%20106.323%20198.975C106.151%20198.493%20105.881%20198.052%20105.53%20197.68C105.094%20197.312%20104.589%20197.034%20104.045%20196.863C103.501%20196.691%20102.928%20196.629%20102.36%20196.68H97.8501L97.8301%20204.31Z'%20fill='white'/%3e%3cpath%20d='M138%20216.56C137.133%20217.941%20135.892%20219.048%20134.42%20219.75C132.632%20220.588%20130.673%20220.996%20128.7%20220.94C125.726%20221.063%20122.796%20220.194%20120.37%20218.47C119.293%20217.666%20118.411%20216.628%20117.791%20215.435C117.171%20214.242%20116.829%20212.924%20116.79%20211.58H124.53C124.589%20212.594%20125.024%20213.55%20125.75%20214.26C126.467%20214.93%20127.419%20215.289%20128.4%20215.26C129.212%20215.304%20130.009%20215.027%20130.62%20214.49C130.884%20214.229%20131.09%20213.917%20131.228%20213.573C131.366%20213.229%20131.431%20212.86%20131.42%20212.49C131.431%20212.138%20131.372%20211.788%20131.244%20211.46C131.117%20211.132%20130.925%20210.832%20130.68%20210.58C130.149%20210.046%20129.521%20209.619%20128.83%20209.32C128.09%20209%20127.07%20208.61%20125.77%20208.15C124.176%20207.625%20122.62%20206.993%20121.11%20206.26C119.872%20205.618%20118.808%20204.684%20118.01%20203.54C117.089%20202.151%20116.633%20200.505%20116.71%20198.84C116.668%20197.189%20117.144%20195.567%20118.07%20194.2C119.018%20192.868%20120.321%20191.829%20121.83%20191.2C123.579%20190.494%20125.454%20190.154%20127.34%20190.2C130.202%20190.045%20133.029%20190.886%20135.34%20192.58C136.32%20193.381%20137.124%20194.376%20137.698%20195.504C138.273%20196.632%20138.608%20197.866%20138.68%20199.13H130.81C130.712%20198.246%20130.33%20197.418%20129.72%20196.77C129.406%20196.473%20129.035%20196.242%20128.629%20196.093C128.224%20195.943%20127.792%20195.878%20127.36%20195.9C126.613%20195.862%20125.878%20196.104%20125.3%20196.58C125.027%20196.833%20124.815%20197.144%20124.678%20197.49C124.541%20197.836%20124.484%20198.209%20124.51%20198.58C124.499%20199.251%20124.75%20199.901%20125.21%20200.39C125.714%20200.907%20126.316%20201.318%20126.98%20201.6C127.69%20201.91%20128.71%20202.31%20130.04%20202.79C131.661%20203.314%20133.239%20203.962%20134.76%20204.73C136.015%20205.395%20137.094%20206.348%20137.91%20207.51C138.843%20208.921%20139.305%20210.59%20139.23%20212.28C139.213%20213.791%20138.788%20215.27%20138%20216.56Z'%20fill='white'/%3e%3cpath%20d='M163.63%20216.56C162.764%20217.939%20161.527%20219.045%20160.06%20219.75C158.273%20220.588%20156.313%20220.996%20154.34%20220.94C151.363%20221.063%20148.43%20220.194%20146%20218.47C144.925%20217.664%20144.046%20216.625%20143.428%20215.432C142.81%20214.24%20142.469%20212.923%20142.43%20211.58H150.17C150.225%20212.593%20150.657%20213.549%20151.38%20214.26C152.101%20214.929%20153.056%20215.289%20154.04%20215.26C154.849%20215.304%20155.643%20215.027%20156.25%20214.49C156.517%20214.231%20156.726%20213.92%20156.866%20213.575C157.005%20213.231%20157.072%20212.861%20157.06%20212.49C157.069%20212.138%20157.008%20211.789%20156.881%20211.461C156.754%20211.133%20156.563%20210.834%20156.32%20210.58C155.788%20210.048%20155.16%20209.62%20154.47%20209.32C153.73%20209%20152.71%20208.61%20151.4%20208.15C149.809%20207.627%20148.255%20206.995%20146.75%20206.26C145.509%20205.618%20144.441%20204.685%20143.64%20203.54C142.726%20202.148%20142.275%20200.503%20142.35%20198.84C142.308%20197.189%20142.783%20195.567%20143.71%20194.2C144.656%20192.866%20145.959%20191.826%20147.47%20191.2C149.219%20190.494%20151.094%20190.154%20152.98%20190.2C155.842%20190.044%20158.669%20190.885%20160.98%20192.58C161.962%20193.379%20162.767%20194.374%20163.342%20195.502C163.917%20196.63%20164.25%20197.866%20164.32%20199.13H156.45C156.362%20198.245%20155.982%20197.415%20155.37%20196.77C155.056%20196.473%20154.685%20196.242%20154.279%20196.093C153.874%20195.943%20153.442%20195.877%20153.01%20195.9C152.262%20195.862%20151.528%20196.104%20150.95%20196.58C150.677%20196.833%20150.465%20197.144%20150.328%20197.49C150.191%20197.836%20150.134%20198.209%20150.16%20198.58C150.144%20199.252%20150.396%20199.903%20150.86%20200.39C151.364%20200.907%20151.965%20201.318%20152.63%20201.6C153.33%20201.91%20154.35%20202.31%20155.69%20202.79C157.311%20203.314%20158.889%20203.962%20160.41%20204.73C161.664%20205.395%20162.744%20206.348%20163.56%20207.51C164.493%20208.92%20164.955%20210.59%20164.88%20212.28C164.86%20213.794%20164.428%20215.274%20163.63%20216.56Z'%20fill='white'/%3e%3cpath%20d='M58.72%20139.61C62.724%20139.61%2065.97%20136.364%2065.97%20132.36C65.97%20128.356%2062.724%20125.11%2058.72%20125.11C54.7159%20125.11%2051.47%20128.356%2051.47%20132.36C51.47%20136.364%2054.7159%20139.61%2058.72%20139.61Z'%20fill='%23FF9908'/%3e%3cpath%20d='M51.47%2097V106.45C60.264%20106.461%2068.6948%20109.959%2074.9131%20116.177C81.1314%20122.395%2084.6293%20130.826%2084.6399%20139.62H94.0901C94.0769%20128.321%2089.5822%20117.488%2081.5923%20109.498C73.6024%20101.508%2062.7694%2097.0132%2051.47%2097Z'%20fill='%23FF9908'/%3e%3cpath%20d='M114.67%20139.61H105.22C105.204%20125.359%2099.5361%20111.697%2089.4595%20101.62C79.3828%2091.5438%2065.7205%2085.8758%2051.47%2085.8599V76.4099C68.226%2076.4284%2084.2904%2083.0929%2096.1387%2094.9412C107.987%20106.79%20114.651%20122.854%20114.67%20139.61Z'%20fill='%23FF9908'/%3e%3c/svg%3e", yg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vg
}, Symbol.toStringTag, { value: "Module" })), bg = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M139.81%2049.24C134.343%2049.2347%20129.101%2047.0606%20125.235%2043.1947C121.369%2039.3288%20119.195%2034.0871%20119.19%2028.62V0H27.0601C19.9204%200%2013.0731%202.83616%208.02466%207.88464C2.97618%2012.9331%200.140015%2019.7804%200.140015%2026.92V189.13C0.140015%20196.27%202.97618%20203.117%208.02466%20208.165C13.0731%20213.214%2019.9204%20216.05%2027.0601%20216.05H137.66C141.195%20216.05%20144.695%20215.354%20147.96%20214.001C151.226%20212.648%20154.193%20210.665%20156.692%20208.165C159.191%20205.665%20161.173%20202.697%20162.524%20199.431C163.876%20196.165%20164.571%20192.665%20164.57%20189.13V49.25L139.81%2049.24Z'%20fill='%23FF9908'/%3e%3c/g%3e%3cpath%20d='M164.57%2049.24H139.81C134.343%2049.2347%20129.101%2047.0606%20125.235%2043.1947C121.369%2039.3288%20119.195%2034.0871%20119.19%2028.62V0L164.57%2049.24Z'%20fill='%23FF9908'/%3e%3cpath%20d='M184.09%20170.6H59.05C50.1803%20170.6%2042.99%20177.79%2042.99%20186.66V223.94C42.99%20232.81%2050.1803%20240%2059.05%20240H184.09C192.96%20240%20200.15%20232.81%20200.15%20223.94V186.66C200.15%20177.79%20192.96%20170.6%20184.09%20170.6Z'%20fill='%23FF9908'/%3e%3cpath%20d='M80.14%20213.37V220.65H72.61V213.37H80.14Z'%20fill='white'/%3e%3cpath%20d='M104.32%20216.56C103.46%20217.943%20102.221%20219.051%20100.75%20219.75C98.9603%20220.592%2096.9971%20221%2095.0201%20220.94C92.048%20221.061%2089.1192%20220.197%2086.69%20218.48C85.6133%20217.676%2084.7328%20216.638%2084.1145%20215.445C83.4962%20214.251%2083.1563%20212.933%2083.12%20211.59H90.86C90.9153%20212.603%2091.3468%20213.559%2092.07%20214.27C92.79%20214.941%2093.7461%20215.301%2094.73%20215.27C95.5378%20215.316%2096.3312%20215.043%2096.94%20214.51C97.2067%20214.251%2097.4166%20213.94%2097.5561%20213.595C97.6955%20213.251%2097.7616%20212.881%2097.75%20212.51C97.7608%20212.156%2097.6998%20211.803%2097.571%20211.473C97.4421%20211.144%2097.2479%20210.843%2097%20210.59C96.4728%20210.054%2095.8439%20209.629%2095.1501%20209.34C94.4101%20209.013%2093.39%20208.623%2092.09%20208.17C90.4962%20207.645%2088.9395%20207.013%2087.4301%20206.28C86.1892%20205.637%2085.1247%20204.7%2084.33%20203.55C83.4074%20202.162%2082.9521%20200.515%2083.0301%20198.85C82.9881%20197.202%2083.4637%20195.583%2084.3901%20194.22C85.3368%20192.883%2086.6444%20191.842%2088.1601%20191.22C89.9057%20190.514%2091.7776%20190.173%2093.6601%20190.22C96.5222%20190.06%2099.3508%20190.901%20101.66%20192.6C102.623%20193.383%20103.417%20194.354%20103.991%20195.455C104.565%20196.556%20104.909%20197.762%20105%20199H97.13C97.0396%20198.114%2096.656%20197.283%2096.0401%20196.64C95.7265%20196.342%2095.3555%20196.111%2094.9497%20195.962C94.544%20195.812%2094.112%20195.747%2093.6801%20195.77C92.9326%20195.732%2092.1978%20195.974%2091.62%20196.45C91.3484%20196.704%2091.1367%20197.015%2091%20197.361C90.8634%20197.707%2090.8053%20198.079%2090.83%20198.45C90.8234%20198.782%2090.8827%20199.112%2091.0046%20199.421C91.1264%20199.73%2091.3085%20200.012%2091.5401%20200.25C92.0378%20200.772%2092.6367%20201.187%2093.3001%20201.47C94.0101%20201.78%2095.03%20202.18%2096.36%20202.66C97.9813%20203.179%2099.5594%20203.825%20101.08%20204.59C102.334%20205.26%20103.413%20206.216%20104.23%20207.38C105.161%20208.788%20105.623%20210.454%20105.55%20212.14C105.566%20213.7%20105.139%20215.232%20104.32%20216.56Z'%20fill='white'/%3e%3cpath%20d='M115.19%20190.58L122.54%20213.2L129.9%20190.58H137.69L127.22%20220.65H117.82L107.4%20190.58H115.19Z'%20fill='white'/%3e%3cpath%20d='M163.88%20193C166.304%20194.82%20167.937%20197.501%20168.44%20200.49H160.74C160.237%20199.417%20159.422%20198.521%20158.4%20197.92C157.255%20197.24%20155.942%20196.893%20154.61%20196.92C153.575%20196.878%20152.542%20197.064%20151.587%20197.465C150.631%20197.865%20149.775%20198.472%20149.08%20199.24C147.617%20200.991%20146.874%20203.232%20147%20205.51C147%20208.37%20147.73%20210.567%20149.19%20212.1C150.011%20212.896%20150.989%20213.512%20152.062%20213.908C153.135%20214.304%20154.279%20214.472%20155.42%20214.4C157.052%20214.43%20158.649%20213.928%20159.97%20212.97C161.319%20211.962%20162.294%20210.534%20162.74%20208.91H153.55V203.68H168.82V210.87C168.233%20212.658%20167.31%20214.318%20166.1%20215.76C164.784%20217.309%20163.151%20218.558%20161.31%20219.42C159.227%20220.382%20156.954%20220.861%20154.66%20220.82C151.87%20220.893%20149.11%20220.227%20146.66%20218.89C144.419%20217.63%20142.594%20215.742%20141.41%20213.46C140.138%20210.989%20139.502%20208.239%20139.56%20205.46C139.51%20202.698%20140.146%20199.966%20141.41%20197.51C142.592%20195.233%20144.409%20193.347%20146.64%20192.08C149.053%20190.751%20151.776%20190.085%20154.53%20190.15C157.878%20190.029%20161.169%20191.033%20163.88%20193Z'%20fill='white'/%3e%3cpath%20d='M123.17%20127.73H120.68C120.667%20117.638%20116.651%20107.964%20109.514%20100.829C102.377%2093.6936%2092.7018%2089.6806%2082.61%2089.67C72.5191%2089.6806%2062.8446%2093.6939%2055.7092%20100.829C48.5739%20107.965%2044.5606%20117.639%2044.55%20127.73H42.05C42.0633%20116.978%2046.3411%20106.67%2053.9449%2099.0679C61.5488%2091.4659%2071.8578%2087.1906%2082.61%2087.1801C93.3622%2087.1906%20103.671%2091.4659%20111.275%2099.0679C118.879%20106.67%20123.157%20116.978%20123.17%20127.73Z'%20fill='%23FF9908'/%3e%3cpath%20d='M140.24%2087.1801H24.98V89.67H140.24V87.1801Z'%20fill='%23FF9908'/%3e%3cpath%20d='M47.2801%20123.75H39.3101V131.72H47.2801V123.75Z'%20fill='%23FF9908'/%3e%3cpath%20d='M125.9%20123.75H117.93V131.72H125.9V123.75Z'%20fill='%23FF9908'/%3e%3cpath%20d='M86.59%2084.3101H78.62V92.28H86.59V84.3101Z'%20fill='%23FF9908'/%3e%3cpath%20d='M24.85%2092.29C27.0536%2092.29%2028.84%2090.5037%2028.84%2088.3C28.84%2086.0964%2027.0536%2084.3101%2024.85%2084.3101C22.6464%2084.3101%2020.86%2086.0964%2020.86%2088.3C20.86%2090.5037%2022.6464%2092.29%2024.85%2092.29Z'%20fill='%23FF9908'/%3e%3cpath%20d='M139.86%2092.29C142.064%2092.29%20143.85%2090.5037%20143.85%2088.3C143.85%2086.0964%20142.064%2084.3101%20139.86%2084.3101C137.656%2084.3101%20135.87%2086.0964%20135.87%2088.3C135.87%2090.5037%20137.656%2092.29%20139.86%2092.29Z'%20fill='%23FF9908'/%3e%3c/svg%3e", xg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: bg
}, Symbol.toStringTag, { value: "Module" })), wg = "data:image/svg+xml,%3csvg%20width='200'%20height='240'%20viewBox='0%200%20200%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M139.67%2049.24C134.203%2049.2347%20128.961%2047.0606%20125.095%2043.1947C121.229%2039.3288%20119.055%2034.0871%20119.05%2028.62V0H26.9099C23.3752%20-2.4406e-07%2019.8751%200.696337%2016.6096%202.04932C13.3441%203.4023%2010.3771%205.38537%207.87818%207.88525C5.37922%2010.3851%203.39718%2013.3529%202.04541%2016.6189C0.693646%2019.8849%20-0.00131167%2023.3853%201.85854e-06%2026.92V189.13C-0.00131167%20192.665%200.693646%20196.165%202.04541%20199.431C3.39718%20202.697%205.37922%20205.665%207.87818%20208.165C10.3771%20210.665%2013.3441%20212.648%2016.6096%20214.001C19.8751%20215.354%2023.3752%20216.05%2026.9099%20216.05H137.51C144.65%20216.05%20151.497%20213.214%20156.545%20208.165C161.594%20203.117%20164.43%20196.27%20164.43%20189.13V49.25L139.67%2049.24Z'%20fill='%23A140FF'/%3e%3c/g%3e%3cpath%20d='M164.43%2049.24H139.67C134.203%2049.2347%20128.961%2047.0606%20125.095%2043.1947C121.229%2039.3288%20119.055%2034.0871%20119.05%2028.62V0L164.43%2049.24Z'%20fill='%23A140FF'/%3e%3cpath%20d='M183.94%20170.6H58.8999C50.0302%20170.6%2042.8401%20177.79%2042.8401%20186.66V223.94C42.8401%20232.81%2050.0302%20240%2058.8999%20240H183.94C192.81%20240%20200%20232.81%20200%20223.94V186.66C200%20177.79%20192.81%20170.6%20183.94%20170.6Z'%20fill='%23A140FF'/%3e%3cpath%20d='M83.6299%20213.37V220.65H76.1001V213.37H83.6299Z'%20fill='white'/%3e%3cpath%20d='M109%20190.58V196.36H100.84V220.65H93.52V196.36H85.4399V190.58H109Z'%20fill='white'/%3e%3cpath%20d='M119.36%20190.58V220.65H112.08V190.58H119.36Z'%20fill='white'/%3e%3cpath%20d='M144%20190.58V196.36H131.67V202.95H141.2V208.48H131.67V220.65H124.4V190.58H144Z'%20fill='white'/%3e%3cpath%20d='M167.33%20190.58V196.36H155V202.95H164.53V208.48H155V220.65H147.73V190.58H167.33Z'%20fill='white'/%3e%3cpath%20d='M104.31%20146.41H60.1299C55.8058%20146.405%2051.6606%20144.685%2048.603%20141.627C45.5455%20138.57%2043.8254%20134.424%2043.8201%20130.1V85.9301C43.8254%2081.606%2045.5455%2077.4605%2048.603%2074.403C51.6606%2071.3454%2055.8058%2069.6253%2060.1299%2069.62H104.31C108.631%2069.6279%20112.773%2071.3495%20115.827%2074.4071C118.881%2077.4647%20120.597%2081.6086%20120.6%2085.9301V130.1C120.597%20134.421%20118.881%20138.565%20115.827%20141.623C112.773%20144.68%20108.631%20146.402%20104.31%20146.41ZM60.1299%2076.83C57.7172%2076.8326%2055.4043%2077.7923%2053.6982%2079.4983C51.9922%2081.2043%2051.0327%2083.5174%2051.03%2085.9301V130.1C51.0327%20132.513%2051.9922%20134.826%2053.6982%20136.532C55.4043%20138.238%2057.7172%20139.197%2060.1299%20139.2H104.31C106.721%20139.195%20109.032%20138.234%20110.735%20136.528C112.439%20134.822%20113.397%20132.511%20113.4%20130.1V85.9301C113.397%2083.5191%20112.439%2081.2076%20110.735%2079.5018C109.032%2077.7961%20106.721%2076.8352%20104.31%2076.83H60.1299Z'%20fill='%23A140FF'/%3e%3cpath%20d='M117%20121.7V130.1C117%20133.466%20115.663%20136.695%20113.284%20139.077C110.904%20141.458%20107.677%20142.797%20104.31%20142.8H60.1299C56.7616%20142.8%2053.5314%20141.462%2051.1497%20139.08C48.7679%20136.698%2047.4299%20133.468%2047.4299%20130.1V116C54.4999%20114.48%2065.2701%20114%2078.3501%20119.22L86.4399%20111.5L91.96%20125.5C91.96%20125.5%2093.44%20120.35%2098.22%20121.08C103%20121.81%20110.74%20124.4%20114.05%20122.19C114.942%20121.675%20115.99%20121.501%20117%20121.7Z'%20fill='%23A140FF'/%3e%3cpath%20d='M101.54%2094.95C104.252%2094.95%20106.45%2092.7518%20106.45%2090.04C106.45%2087.3283%20104.252%2085.13%20101.54%2085.13C98.8283%2085.13%2096.6299%2087.3283%2096.6299%2090.04C96.6299%2092.7518%2098.8283%2094.95%20101.54%2094.95Z'%20fill='%23A140FF'/%3e%3c/svg%3e", _g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: wg
}, Symbol.toStringTag, { value: "Module" })), Eg = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140.53%2049.25C135.062%2049.2447%20129.819%2047.0709%20125.952%2043.2053C122.084%2039.3398%20119.908%2034.0979%20119.9%2028.6299V0H27.77C20.633%200%2013.7883%202.83523%208.7417%207.88184C3.6951%2012.9284%200.860107%2019.7729%200.860107%2026.9099V189.13C0.860107%20196.267%203.6951%20203.112%208.7417%20208.158C13.7883%20213.205%2020.633%20216.04%2027.77%20216.04H138.37C145.507%20216.04%20152.352%20213.205%20157.398%20208.158C162.445%20203.112%20165.28%20196.267%20165.28%20189.13V49.25H140.53Z'%20fill='%230072FF'/%3e%3c/g%3e%3cpath%20d='M165.28%2049.25H140.53C135.062%2049.2447%20129.819%2047.0709%20125.952%2043.2053C122.084%2039.3398%20119.908%2034.0979%20119.9%2028.6299V0L165.28%2049.25Z'%20fill='%230072FF'/%3e%3cpath%20d='M131.46%2083.73H28.21C27.2189%2083.7273%2026.2692%2083.3324%2025.5684%2082.6316C24.8675%2081.9308%2024.4726%2080.9811%2024.47%2079.99C24.47%2078.9972%2024.8636%2078.0448%2025.5647%2077.3418C26.2658%2076.6388%2027.2171%2076.2426%2028.21%2076.24H131.46C132.453%2076.2426%20133.404%2076.6388%20134.105%2077.3418C134.806%2078.0448%20135.2%2078.9972%20135.2%2079.99C135.197%2080.9811%20134.802%2081.9308%20134.102%2082.6316C133.401%2083.3324%20132.451%2083.7273%20131.46%2083.73Z'%20fill='%230072FF'/%3e%3cpath%20d='M131.46%20106.1H28.21C27.2189%20106.097%2026.2692%20105.703%2025.5684%20105.002C24.8675%20104.301%2024.4726%20103.351%2024.47%20102.36C24.47%20101.367%2024.8636%20100.415%2025.5647%2099.7119C26.2658%2099.0089%2027.2171%2098.6128%2028.21%2098.6101H131.46C132.453%2098.6128%20133.404%2099.0089%20134.105%2099.7119C134.806%20100.415%20135.2%20101.367%20135.2%20102.36C135.197%20103.351%20134.802%20104.301%20134.102%20105.002C133.401%20105.703%20132.451%20106.097%20131.46%20106.1Z'%20fill='%230072FF'/%3e%3cpath%20d='M131.46%20128.47H28.21C27.2171%20128.467%2026.2658%20128.071%2025.5647%20127.368C24.8636%20126.665%2024.47%20125.713%2024.47%20124.72C24.4726%20123.729%2024.8675%20122.779%2025.5684%20122.078C26.2692%20121.378%2027.2189%20120.983%2028.21%20120.98H131.46C132.451%20120.983%20133.401%20121.378%20134.102%20122.078C134.802%20122.779%20135.197%20123.729%20135.2%20124.72C135.2%20125.713%20134.806%20126.665%20134.105%20127.368C133.404%20128.071%20132.453%20128.467%20131.46%20128.47Z'%20fill='%230072FF'/%3e%3cpath%20d='M131.46%20150.83H28.21C27.2181%20150.83%2026.2668%20150.436%2025.5654%20149.735C24.864%20149.033%2024.47%20148.082%2024.47%20147.09C24.47%20146.097%2024.8636%20145.145%2025.5647%20144.442C26.2658%20143.739%2027.2171%20143.343%2028.21%20143.34H131.46C132.453%20143.343%20133.404%20143.739%20134.105%20144.442C134.806%20145.145%20135.2%20146.097%20135.2%20147.09C135.2%20148.082%20134.806%20149.033%20134.104%20149.735C133.403%20150.436%20132.452%20150.83%20131.46%20150.83Z'%20fill='%230072FF'/%3e%3cpath%20d='M184.8%20170.61H59.76C50.8903%20170.61%2043.7%20177.8%2043.7%20186.67V223.95C43.7%20232.82%2050.8903%20240.01%2059.76%20240.01H184.8C193.67%20240.01%20200.86%20232.82%20200.86%20223.95V186.67C200.86%20177.8%20193.67%20170.61%20184.8%20170.61Z'%20fill='%230072FF'/%3e%3cpath%20d='M86.4199%20213.38V220.65H78.8899V213.38H86.4199Z'%20fill='white'/%3e%3cpath%20d='M111.81%20190.58V196.37H103.64V220.65H96.3301V196.37H88.24V190.58H111.81Z'%20fill='white'/%3e%3cpath%20d='M133.12%20220.65L126.78%20211.29L121.33%20220.65H113L122.61%20205.17L112.7%20190.58H121.33L127.5%20199.64L132.82%20190.58H141.11L131.63%20205.72L141.75%20220.65H133.12Z'%20fill='white'/%3e%3cpath%20d='M166.16%20190.58V196.37H158V220.65H150.68V196.37H142.6V190.58H166.16Z'%20fill='white'/%3e%3c/svg%3e", Sg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Eg
}, Symbol.toStringTag, { value: "Module" })), Mg = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140.38%2049.24C134.913%2049.2347%20129.671%2047.0606%20125.805%2043.1947C121.939%2039.3288%20119.765%2034.0871%20119.76%2028.62V1.85821e-06H27.63C24.0953%20-0.00131167%2020.5949%200.693768%2017.3289%202.04553C14.0628%203.3973%2011.0952%205.37928%208.59534%207.87824C6.09545%2010.3772%204.11238%2013.3442%202.7594%2016.6097C1.40642%2019.8752%200.709961%2023.3753%200.709961%2026.91V189.13C0.720561%20196.262%203.56176%20203.098%208.60938%20208.136C13.657%20213.174%2020.4982%20216.003%2027.63%20216H138.23C141.764%20216%20145.263%20215.304%20148.528%20213.952C151.793%20212.599%20154.759%20210.617%20157.258%20208.118C159.757%20205.619%20161.739%20202.653%20163.092%20199.388C164.444%20196.123%20165.14%20192.624%20165.14%20189.09V49.24H140.38Z'%20fill='%2300C650'/%3e%3c/g%3e%3cpath%20d='M165.14%2049.24H140.38C134.913%2049.2347%20129.671%2047.0606%20125.805%2043.1947C121.939%2039.3288%20119.765%2034.0871%20119.76%2028.62V0L165.14%2049.24Z'%20fill='%2300C650'/%3e%3cpath%20d='M184.66%20170.6H59.62C50.7503%20170.6%2043.5601%20177.79%2043.5601%20186.66V223.94C43.5601%20232.81%2050.7503%20240%2059.62%20240H184.66C193.53%20240%20200.72%20232.81%20200.72%20223.94V186.66C200.72%20177.79%20193.53%20170.6%20184.66%20170.6Z'%20fill='%2300C650'/%3e%3cpath%20d='M72.0601%20213.37V220.64H64.53V213.37H72.0601Z'%20fill='white'/%3e%3cpath%20d='M116.72%20190.57L109.53%20220.64H100.53L95.73%20200.52L90.88%20220.64H81.88L74.6899%20190.57H82.6L86.47%20212.35L91.75%20190.57H99.75L105.03%20212.35L108.94%20190.57H116.72Z'%20fill='white'/%3e%3cpath%20d='M139.18%20215.15H127.9L126.03%20220.64H118.38L129.38%20190.78H137.76L148.76%20220.64H141.02L139.18%20215.15ZM137.3%20209.62L133.56%20198.57L129.78%20209.62H137.3Z'%20fill='white'/%3e%3cpath%20d='M157.21%20190.57L164.57%20213.2L171.93%20190.57H179.71L169.25%20220.64H159.85L149.43%20190.57H157.21Z'%20fill='white'/%3e%3cpath%20d='M120.94%20131.92H109.94V87.6601C109.94%2086.1775%20109.351%2084.7557%20108.303%2083.7074C107.254%2082.659%20105.833%2082.0701%20104.35%2082.0701H76.35C74.8674%2082.0701%2073.4455%2082.659%2072.3972%2083.7074C71.3489%2084.7557%2070.76%2086.1775%2070.76%2087.6601V131.92H59.8101V83.9201C59.8101%2080.52%2061.1607%2077.2592%2063.5649%2074.855C65.9692%2072.4508%2069.2299%2071.1001%2072.63%2071.1001H108.04C111.44%2071.1001%20114.701%2072.4508%20117.105%2074.855C119.509%2077.2592%20120.86%2080.52%20120.86%2083.9201L120.94%20131.92Z'%20fill='%2300C650'/%3e%3cpath%20d='M107.96%20144.9C115.129%20144.9%20120.94%20139.089%20120.94%20131.92C120.94%20124.751%20115.129%20118.94%20107.96%20118.94C100.791%20118.94%2094.98%20124.751%2094.98%20131.92C94.98%20139.089%20100.791%20144.9%20107.96%20144.9Z'%20fill='%2300C650'/%3e%3cpath%20d='M57.9%20144.9C65.0687%20144.9%2070.88%20139.089%2070.88%20131.92C70.88%20124.751%2065.0687%20118.94%2057.9%20118.94C50.7314%20118.94%2044.92%20124.751%2044.92%20131.92C44.92%20139.089%2050.7314%20144.9%2057.9%20144.9Z'%20fill='%2300C650'/%3e%3c/svg%3e", Ag = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Mg
}, Symbol.toStringTag, { value: "Module" })), Tg = "data:image/svg+xml,%3csvg%20width='200'%20height='240'%20viewBox='0%200%20200%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M139.67%2049.24C134.203%2049.2347%20128.961%2047.0606%20125.095%2043.1947C121.229%2039.3288%20119.055%2034.0871%20119.05%2028.62V0H26.91C19.7748%20-4.92664e-07%2012.9316%202.83379%207.88528%207.87823C2.83897%2012.9227%200.00265152%2019.7648%200%2026.9V189.12C0.0079507%20196.252%202.84661%20203.089%207.89235%20208.129C12.9381%20213.169%2019.7782%20216%2026.91%20216H137.51C141.045%20216.001%20144.545%20215.306%20147.811%20213.954C151.077%20212.603%20154.045%20210.621%20156.545%20208.122C159.045%20205.623%20161.028%20202.656%20162.381%20199.39C163.734%20196.125%20164.43%20192.625%20164.43%20189.09V49.24H139.67Z'%20fill='%23FF9908'/%3e%3c/g%3e%3cpath%20d='M164.43%2049.24H139.67C134.203%2049.2347%20128.961%2047.0606%20125.095%2043.1947C121.229%2039.3288%20119.055%2034.0871%20119.05%2028.62V0L164.43%2049.24Z'%20fill='%23FF9908'/%3e%3cpath%20d='M183.94%20170.6H58.9C50.0303%20170.6%2042.84%20177.79%2042.84%20186.66V223.94C42.84%20232.81%2050.0303%20240%2058.9%20240H183.94C192.81%20240%20200%20232.81%20200%20223.94V186.66C200%20177.79%20192.81%20170.6%20183.94%20170.6Z'%20fill='%23FF9908'/%3e%3cpath%20d='M67%20213.37V220.64H59.47V213.37H67Z'%20fill='white'/%3e%3cpath%20d='M111.66%20190.57L104.47%20220.64H95.47L90.67%20200.52L85.82%20220.64H76.82L69.63%20190.57H77.54L81.41%20212.35L86.69%20190.57H94.69L99.97%20212.35L103.88%20190.57H111.66Z'%20fill='white'/%3e%3cpath%20d='M149.3%20190.78V220.64H142V202L135.53%20220.67H129.24L122.73%20201.96V220.67H115.45V190.81H124.34L132.47%20211.61L140.42%20190.81L149.3%20190.78Z'%20fill='white'/%3e%3cpath%20d='M173%20215.15H161.68L159.8%20220.64H152.15L163.15%20190.78H171.53L182.53%20220.64H174.79L173%20215.15ZM171.13%20209.62L167.38%20198.57L163.6%20209.62H171.13Z'%20fill='white'/%3e%3cpath%20d='M117.65%20131.92H106.7V87.6601C106.7%2086.1775%20106.111%2084.7557%20105.063%2083.7074C104.014%2082.659%20102.593%2082.0701%20101.11%2082.0701H73.11C71.6274%2082.0701%2070.2056%2082.659%2069.1573%2083.7074C68.109%2084.7557%2067.52%2086.1775%2067.52%2087.6601V131.92H56.52V83.9201C56.5226%2080.5191%2057.8755%2077.2583%2060.2813%2074.8544C62.6871%2072.4504%2065.949%2071.1001%2069.35%2071.1001H104.76C108.16%2071.1001%20111.421%2072.4508%20113.825%2074.855C116.229%2077.2592%20117.58%2080.52%20117.58%2083.9201L117.65%20131.92Z'%20fill='%23FF9908'/%3e%3cpath%20d='M104.67%20144.9C111.839%20144.9%20117.65%20139.089%20117.65%20131.92C117.65%20124.751%20111.839%20118.94%20104.67%20118.94C97.5013%20118.94%2091.69%20124.751%2091.69%20131.92C91.69%20139.089%2097.5013%20144.9%20104.67%20144.9Z'%20fill='%23FF9908'/%3e%3cpath%20d='M54.6%20144.9C61.7687%20144.9%2067.58%20139.089%2067.58%20131.92C67.58%20124.751%2061.7687%20118.94%2054.6%20118.94C47.4313%20118.94%2041.62%20124.751%2041.62%20131.92C41.62%20139.089%2047.4313%20144.9%2054.6%20144.9Z'%20fill='%23FF9908'/%3e%3c/svg%3e", Og = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Tg
}, Symbol.toStringTag, { value: "Module" })), Rg = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140.1%2049.24C134.633%2049.2347%20129.391%2047.0606%20125.525%2043.1947C121.66%2039.3288%20119.485%2034.0871%20119.48%2028.62V0H27.3401C20.2031%200%2013.3584%202.83514%208.31177%207.88174C3.26516%2012.9283%200.429932%2019.773%200.429932%2026.91V189.13C0.44053%20196.26%203.28047%20203.094%208.32593%20208.132C13.3714%20213.17%2020.21%20216%2027.3401%20216H137.94C145.077%20216%20151.922%20213.165%20156.968%20208.118C162.015%20203.072%20164.85%20196.227%20164.85%20189.09V49.24H140.1Z'%20fill='%23A140FF'/%3e%3c/g%3e%3cpath%20d='M164.85%2049.24H140.1C134.633%2049.2347%20129.391%2047.0606%20125.525%2043.1947C121.66%2039.3288%20119.485%2034.0871%20119.48%2028.62V0L164.85%2049.24Z'%20fill='%23A140FF'/%3e%3cpath%20d='M184.37%20170.6H59.3301C50.4604%20170.6%2043.27%20177.79%2043.27%20186.66V223.94C43.27%20232.81%2050.4604%20240%2059.3301%20240H184.37C193.24%20240%20200.43%20232.81%20200.43%20223.94V186.66C200.43%20177.79%20193.24%20170.6%20184.37%20170.6Z'%20fill='%23A140FF'/%3e%3cpath%20d='M81.27%20213.37V220.64H73.74V213.37H81.27Z'%20fill='white'/%3e%3cpath%20d='M103.3%20220.64L96.96%20211.28L91.52%20220.64H83.1799L92.8%20205.16L82.8899%20190.57H91.52L97.6899%20199.63L103%20190.57H111.3L101.81%20205.71L111.94%20220.64H103.3Z'%20fill='white'/%3e%3cpath%20d='M148.56%20190.78V220.64H141.28V202L134.82%20220.67H128.52L122.02%20201.96V220.67H114.74V190.81H123.63L131.76%20211.61L139.71%20190.81L148.56%20190.78Z'%20fill='white'/%3e%3cpath%20d='M160.85%20215.07H170.55V220.64H153.55V190.57H160.83L160.85%20215.07Z'%20fill='white'/%3e%3cpath%20d='M40.94%20114.19C40.9261%20113.76%2041.0564%20113.338%2041.3101%20112.99C41.6134%20112.6%2041.978%20112.263%2042.3899%20111.99C43.0137%20111.667%2043.6587%20111.387%2044.3201%20111.15L46.25%20110.35L53.97%20107.1C55.0433%20106.6%2057.0433%20105.767%2059.97%20104.6L63.6399%20103.1L64.96%20102.63L65.19%20102.53C65.2526%20102.517%2065.3173%20102.517%2065.3799%20102.53C65.528%20102.465%2065.6882%20102.431%2065.8501%20102.43C66.1599%20102.413%2066.4697%20102.458%2066.7617%20102.563C67.0537%20102.668%2067.3219%20102.83%2067.5501%20103.04C67.7436%20103.222%2067.8975%20103.442%2068.0025%20103.687C68.1074%20103.931%2068.161%20104.194%2068.1599%20104.46V107C68.1504%20107.471%2068.0046%20107.93%2067.74%20108.32C67.4618%20108.756%2067.0468%20109.086%2066.5601%20109.26L50.7901%20115.71L66.5601%20122.16C67.0296%20122.354%2067.4374%20122.672%2067.74%20123.08C68.0149%20123.454%2068.1621%20123.906%2068.1599%20124.37V126.91C68.1602%20127.179%2068.1063%20127.445%2068.0015%20127.692C67.8967%20127.94%2067.7433%20128.163%2067.5501%20128.35C67.3256%20128.567%2067.0585%20128.735%2066.7659%20128.843C66.4733%20128.951%2066.1616%20128.998%2065.8501%20128.98C65.6894%20128.978%2065.53%20128.948%2065.3799%20128.89L64.96%20128.75L63.6399%20128.28L60%20126.8L54%20124.31L46.2801%20121.06L44.3501%20120.26C43.7301%20120.01%2043.0799%20119.73%2042.4199%20119.41C42.0104%20119.219%2041.6597%20118.922%2041.4046%20118.549C41.1495%20118.176%2040.9994%20117.741%2040.97%20117.29L40.94%20114.19Z'%20fill='%23A140FF'/%3e%3cpath%20d='M88.05%20131.7C87.5496%20131.712%2087.0548%20131.592%2086.6157%20131.351C86.1767%20131.111%2085.809%20130.759%2085.55%20130.33C85.3352%20130.022%2085.1636%20129.685%2085.04%20129.33L84.71%20128.44L77.51%20112.53L76.99%20111.35C76.39%20110.07%2075.23%20107.53%2073.51%20103.73C71.2767%2098.8968%2070.1599%2096.2467%2070.1599%2095.7801C70.1602%2095.4989%2070.2244%2095.2214%2070.3474%2094.9685C70.4704%2094.7156%2070.6491%2094.494%2070.8701%2094.3201C71.3691%2093.8983%2072.0069%2093.6772%2072.6599%2093.7001H75C75.493%2093.6916%2075.9795%2093.8139%2076.4099%2094.0545C76.8403%2094.2952%2077.1991%2094.6456%2077.45%2095.0701L77.97%2096.0701L78.3%2096.9601L80.1799%20101.1L85.5%20112.87L86.2%20114.37L89.5%20121.62C90.7651%20124.221%2091.8803%20126.892%2092.8401%20129.62C92.8383%20129.9%2092.7736%20130.175%2092.6506%20130.426C92.5277%20130.677%2092.3496%20130.897%2092.1299%20131.07C91.6314%20131.493%2090.9932%20131.714%2090.3401%20131.69L88.05%20131.7Z'%20fill='%23A140FF'/%3e%3cpath%20d='M96.7599%20129C96.4406%20129.021%2096.1203%20128.976%2095.8192%20128.867C95.5182%20128.759%2095.2427%20128.59%2095.0099%20128.37C94.6252%20127.989%2094.406%20127.472%2094.3998%20126.93V124.39C94.3953%20123.929%2094.5353%20123.478%2094.8%20123.1C95.0991%20122.68%2095.517%20122.36%2095.9999%20122.18L111.82%20115.73L95.9999%20109.29C95.5196%20109.08%2095.1125%20108.732%2094.83%20108.29C94.5574%20107.911%2094.4072%20107.457%2094.3998%20106.99V104.41C94.3965%20104.146%2094.4481%20103.885%2094.5514%20103.642C94.6547%20103.399%2094.8075%20103.181%2094.9999%20103C95.47%20102.577%2096.0884%20102.358%2096.7199%20102.39C96.8661%20102.388%2097.0104%20102.422%2097.1398%20102.49C97.2258%20102.475%2097.3138%20102.475%2097.3998%20102.49L97.61%20102.59C97.55%20102.59%2097.9698%20102.71%2098.8798%20103.06L102.6%20104.56C102.407%20104.473%20104.407%20105.307%20108.6%20107.06C110.887%20108%20113.507%20109.113%20116.46%20110.4L117.21%20110.68L118.29%20111.11C118.926%20111.336%20119.542%20111.617%20120.13%20111.95C120.55%20112.142%20120.909%20112.446%20121.166%20112.829C121.424%20113.212%20121.571%20113.659%20121.59%20114.12V117.22C121.581%20117.645%20121.441%20118.057%20121.19%20118.4C120.911%20118.788%20120.549%20119.109%20120.13%20119.34C119.56%20119.62%20118.89%20119.92%20118.13%20120.24L116.13%20121.04L98.7099%20128.33C98.2099%20128.58%2097.91%20128.74%2097.82%20128.8L97.6298%20128.94L96.7599%20129Z'%20fill='%23A140FF'/%3e%3c/svg%3e", Fg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Rg
}, Symbol.toStringTag, { value: "Module" })), Pg = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140.1%2049.25C134.633%2049.2447%20129.391%2047.0704%20125.525%2043.2046C121.66%2039.3387%20119.485%2034.097%20119.48%2028.6299V0H27.3401C20.2031%200%2013.3584%202.83523%208.31177%207.88184C3.26516%2012.9284%200.429932%2019.7729%200.429932%2026.9099V189.13C0.429932%20196.267%203.26516%20203.112%208.31177%20208.158C13.3584%20213.205%2020.2031%20216.04%2027.3401%20216.04H137.94C145.077%20216.04%20151.922%20213.205%20156.968%20208.158C162.015%20203.112%20164.85%20196.267%20164.85%20189.13V49.25H140.1Z'%20fill='%2300C650'/%3e%3c/g%3e%3cpath%20d='M164.85%2049.25H140.1C134.633%2049.2447%20129.391%2047.0704%20125.525%2043.2046C121.66%2039.3387%20119.485%2034.097%20119.48%2028.6299V0L164.85%2049.25Z'%20fill='%2300C650'/%3e%3cpath%20d='M184.37%20170.61H59.3301C50.4604%20170.61%2043.27%20177.8%2043.27%20186.67V223.95C43.27%20232.82%2050.4604%20240.01%2059.3301%20240.01H184.37C193.24%20240.01%20200.43%20232.82%20200.43%20223.95V186.67C200.43%20177.8%20193.24%20170.61%20184.37%20170.61Z'%20fill='%2300C650'/%3e%3cpath%20d='M87.8601%20213.38V220.65H80.3301V213.38H87.8601Z'%20fill='white'/%3e%3cpath%20d='M109.89%20220.65L103.56%20211.29L98.1101%20220.65H89.78L99.3899%20205.17L89.48%20190.58H98.1101L104.28%20199.64L109.6%20190.58H117.89L108.41%20205.72L118.53%20220.65H109.89Z'%20fill='white'/%3e%3cpath%20d='M141.73%20216.57C140.867%20217.951%20139.629%20219.057%20138.16%20219.76C136.372%20220.597%20134.413%20221.005%20132.44%20220.95C129.463%20221.075%20126.529%20220.206%20124.1%20218.48C123.026%20217.673%20122.147%20216.635%20121.529%20215.443C120.911%20214.25%20120.569%20212.933%20120.53%20211.59H128.27C128.325%20212.603%20128.757%20213.559%20129.48%20214.27C130.2%20214.941%20131.156%20215.301%20132.14%20215.27C132.541%20215.293%20132.943%20215.238%20133.322%20215.105C133.701%20214.973%20134.051%20214.767%20134.35%20214.5C134.617%20214.241%20134.827%20213.93%20134.966%20213.585C135.106%20213.241%20135.172%20212.871%20135.16%20212.5C135.17%20212.147%20135.109%20211.797%20134.98%20211.468C134.851%20211.14%20134.657%20210.842%20134.41%20210.59C133.881%20210.054%20133.252%20209.626%20132.56%20209.33C131.833%20209.01%20130.813%20208.62%20129.5%20208.16C127.906%20207.634%20126.35%20207.003%20124.84%20206.27C123.6%20205.631%20122.535%20204.697%20121.74%20203.55C120.817%20202.162%20120.362%20200.515%20120.44%20198.85C120.404%20197.2%20120.879%20195.579%20121.8%20194.21C122.746%20192.872%20124.054%20191.831%20125.57%20191.21C127.318%20190.499%20129.194%20190.159%20131.08%20190.21C133.944%20190.052%20136.773%20190.897%20139.08%20192.6C140.062%20193.399%20140.867%20194.394%20141.442%20195.522C142.017%20196.65%20142.35%20197.886%20142.42%20199.15H134.55C134.462%20198.265%20134.082%20197.435%20133.47%20196.79C133.157%20196.49%20132.787%20196.258%20132.381%20196.106C131.975%20195.955%20131.543%20195.888%20131.11%20195.91C130.36%20195.876%20129.624%20196.118%20129.04%20196.59C128.771%20196.845%20128.561%20197.157%20128.426%20197.503C128.291%20197.848%20128.235%20198.22%20128.26%20198.59C128.245%20199.262%20128.496%20199.913%20128.96%20200.4C129.458%20200.919%20130.057%20201.332%20130.72%20201.61C131.43%20201.92%20132.45%20202.32%20133.78%20202.8C135.403%20203.329%20136.984%20203.977%20138.51%20204.74C139.757%20205.412%20140.831%20206.364%20141.65%20207.52C142.583%20208.93%20143.045%20210.6%20142.97%20212.29C142.957%20213.803%20142.528%20215.284%20141.73%20216.57Z'%20fill='white'/%3e%3cpath%20d='M154.26%20215.08H164V220.65H147V190.58H154.28L154.26%20215.08Z'%20fill='white'/%3e%3cpath%20d='M119.32%20150.84H46C39.65%20150.84%2034.48%20144.52%2034.48%20136.74V83.55C34.48%2075.78%2039.65%2069.46%2046%2069.46H119.35C125.69%2069.46%20130.86%2075.78%20130.86%2083.55V136.74C130.83%20144.52%20125.66%20150.84%20119.32%20150.84ZM46%2076.6599C42.89%2076.6599%2040.3701%2079.75%2040.3701%2083.55V136.74C40.3701%20140.54%2042.89%20143.63%2046%20143.63H119.35C122.45%20143.63%20124.97%20140.54%20124.97%20136.74V83.55C124.97%2079.75%20122.45%2076.6599%20119.35%2076.6599H46Z'%20fill='%2300C650'/%3e%3cpath%20d='M127.89%20118.81H37.3999V126.02H127.89V118.81Z'%20fill='%2300C650'/%3e%3cpath%20d='M127.89%2094.09H37.3999V101.3H127.89V94.09Z'%20fill='%2300C650'/%3e%3cpath%20d='M104.71%2073.06H97.5V147.23H104.71V73.06Z'%20fill='%2300C650'/%3e%3cpath%20d='M67.78%2073.06H60.5701V147.23H67.78V73.06Z'%20fill='%2300C650'/%3e%3c/svg%3e", kg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Pg
}, Symbol.toStringTag, { value: "Module" })), Hg = "data:image/svg+xml,%3csvg%20width='201'%20height='240'%20viewBox='0%200%20201%20240'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.3'%3e%3cpath%20opacity='0.3'%20d='M140.24%2049.25C134.772%2049.2421%20129.53%2047.0657%20125.665%2043.1982C121.799%2039.3308%20119.625%2034.0881%20119.62%2028.62V0H27.48C20.343%200%2013.4984%202.83511%208.45178%207.88171C3.40518%2012.9283%200.570007%2019.7731%200.570007%2026.91V189.13C0.580606%20196.26%203.42043%20203.094%208.46588%20208.132C13.5113%20213.17%2020.3499%20216%2027.48%20216H138.09C145.22%20216%20152.059%20213.17%20157.104%20208.132C162.15%20203.094%20164.989%20196.26%20165%20189.13V49.25H140.24Z'%20fill='%23FF3E4C'/%3e%3c/g%3e%3cpath%20d='M165%2049.25H140.24C134.772%2049.2421%20129.53%2047.0657%20125.665%2043.1982C121.799%2039.3308%20119.625%2034.0881%20119.62%2028.62V0L165%2049.25Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M184.51%20170.61H59.47C50.6003%20170.61%2043.41%20177.8%2043.41%20186.67V223.95C43.41%20232.82%2050.6003%20240.01%2059.47%20240.01H184.51C193.38%20240.01%20200.57%20232.82%20200.57%20223.95V186.67C200.57%20177.8%20193.38%20170.61%20184.51%20170.61Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M92.92%20213.38V220.65H85.39V213.38H92.92Z'%20fill='white'/%3e%3cpath%20d='M104.23%20214.78H117.5V220.65H96.15V215.12L109.21%20196.41H96.32V190.58H117.42V196.11L104.23%20214.78Z'%20fill='white'/%3e%3cpath%20d='M129.24%20190.58V220.65H122V190.58H129.24Z'%20fill='white'/%3e%3cpath%20d='M141.53%20210.1V220.65H134.26V190.58H146C149.57%20190.58%20152.3%20191.46%20154.17%20193.24C155.117%20194.168%20155.857%20195.285%20156.341%20196.519C156.825%20197.753%20157.043%20199.076%20156.98%20200.4C157.011%20202.149%20156.576%20203.875%20155.72%20205.4C154.847%20206.891%20153.553%20208.092%20152%20208.85C150.126%20209.731%20148.07%20210.159%20146%20210.1H141.53ZM149.61%20200.4C149.61%20197.767%20148.15%20196.433%20145.23%20196.4H141.53V204.22H145.23C148.15%20204.253%20149.61%20202.98%20149.61%20200.4Z'%20fill='white'/%3e%3cpath%20d='M82.77%20152.52C79.407%20152.515%2076.1833%20151.176%2073.8062%20148.797C71.4291%20146.418%2070.0927%20143.193%2070.09%20139.83V127.14H95.46V139.83C95.4574%20143.195%2094.1195%20146.421%2091.7402%20148.8C89.361%20151.18%2086.1348%20152.517%2082.77%20152.52ZM76.58%20133.63V139.83C76.58%20141.473%2077.2318%20143.048%2078.3924%20144.211C79.553%20145.373%2081.1274%20146.027%2082.77%20146.03C84.4135%20146.027%2085.989%20145.373%2087.1511%20144.211C88.3133%20143.049%2088.9673%20141.473%2088.97%20139.83V133.63H76.58Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M70.08%20127.15H82.8V114.43H70.08V127.15Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M82.77%20114.44H95.49V101.72H82.77V114.44Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M70.08%20101.73H82.8V89.01H70.08V101.73Z'%20fill='%23FF3E4C'/%3e%3cpath%20d='M82.77%2089.02H95.49V76.3H82.77V89.02Z'%20fill='%23FF3E4C'/%3e%3c/svg%3e", Ng = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Hg
}, Symbol.toStringTag, { value: "Module" })), Lg = /* @__PURE__ */ Object.assign({ "./AI.svg": fC, "./AVI.svg": pC, "./BMP.svg": mC, "./CRD.svg": gC, "./CSV.svg": yC, "./DLL.svg": xC, "./DOC.svg": _C, "./DOCX.svg": SC, "./DWG.svg": AC, "./EPS.svg": OC, "./EXE.svg": FC, "./FLV.svg": kC, "./GIFF.svg": NC, "./HTML.svg": VC, "./ISO.svg": IC, "./JAVA.svg": ZC, "./JPG.svg": $C, "./MDB.svg": UC, "./MID.svg": qC, "./MOV.svg": GC, "./MP3.svg": XC, "./MP4.svg": QC, "./MPEG.svg": tg, "./PDF.svg": rg, "./PNG.svg": og, "./PPT.svg": sg, "./PS.svg": cg, "./PSD.svg": fg, "./PUB.svg": pg, "./RAR.svg": mg, "./RAW.svg": gg, "./RSS.svg": yg, "./SVG.svg": xg, "./TIFF.svg": _g, "./TXT.svg": Sg, "./WAV.svg": Ag, "./WMA.svg": Og, "./XML.svg": Fg, "./XSL.svg": kg, "./ZIP.svg": Ng }), Vg = Object.fromEntries(
  Object.entries(Lg).map(([e, t]) => [e.replace("./", "").replace(".svg", "").toLowerCase(), t.default])
);
function S4({ media: e, placeholder: t }) {
  return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    e && e.picture && /* @__PURE__ */ h.jsx("img", { src: String(e.thumbnail), alt: String(e.alt), "data-checkerboard": !0, className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain" }),
    e && e.svg && /* @__PURE__ */ h.jsx("img", { src: String(e.reference), alt: String(e.alt), "data-checkerboard": !0, className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain" }),
    e && !e.picture && !e.svg && !e.gif && e.extension !== void 0 && /* @__PURE__ */ h.jsx("img", { src: Vg[e.extension], alt: String(e.alt), className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-[80%] max-w-[80%]" }),
    t && e === null && /* @__PURE__ */ h.jsx("img", { src: cC, alt: "Selection", className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain" })
  ] });
}
function Wc({
  className: e,
  ...t
}) {
  return /* @__PURE__ */ h.jsx(
    "div",
    {
      className: Oe("animate-pulse rounded-md bg-slate-100 dark:bg-slate-800", e),
      ...t
    }
  );
}
function jg({ media: e }) {
  const t = Q2(), n = Z2((i) => i.main.currentMedia), r = () => {
    t(Hr(e));
  };
  return /* @__PURE__ */ h.jsxs(Ei, { className: Oe("aspect-[124/129] min-w-[150px] max-w-[250px]", { "border-primary": e.id === (n == null ? void 0 : n.id), "drop-shadow-xl": e.id === (n == null ? void 0 : n.id) }), onClick: r, children: [
    /* @__PURE__ */ h.jsx(Ss, { className: "p-0 pb-6", children: /* @__PURE__ */ h.jsx(E4, { ratio: 4 / 3, className: "rounded-t-lg overflow-hidden has-[[data-checkerboard]]:bg-checkerboard has-[[data-checkerboard]]:bg-checkerboard-size has-[[data-checkerboard]]:bg-checkerboard-position", children: /* @__PURE__ */ h.jsx(S4, { media: e }) }) }),
    /* @__PURE__ */ h.jsx(Ms, { className: "text-ellipsis overflow-hidden text-nowrap", children: e.label })
  ] });
}
function Ig() {
  return /* @__PURE__ */ h.jsxs(Ei, { children: [
    /* @__PURE__ */ h.jsx(Ss, { className: "p-0 pb-6", children: /* @__PURE__ */ h.jsx(Wc, { className: "w-full aspect-[4/3]" }) }),
    /* @__PURE__ */ h.jsx(Ms, { className: "text-ellipsis overflow-hidden text-nowrap", children: /* @__PURE__ */ h.jsx(Wc, { className: "h-6 w-3/4" }) })
  ] });
}
function M4(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = M4(e[t])) && (r && (r += " "), r += n);
  else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function Dg() {
  for (var e, t, n = 0, r = ""; n < arguments.length; ) (e = arguments[n++]) && (t = M4(e)) && (r && (r += " "), r += t);
  return r;
}
const qc = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Yc = Dg, Si = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Yc(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: i, defaultVariants: o } = t, a = Object.keys(i).map((c) => {
    const u = n == null ? void 0 : n[c], d = o == null ? void 0 : o[c];
    if (u === null) return null;
    const p = qc(u) || qc(d);
    return i[c][p];
  }), s = n && Object.entries(n).reduce((c, u) => {
    let [d, p] = u;
    return p === void 0 || (c[d] = p), c;
  }, {}), l = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((c, u) => {
    let { class: d, className: p, ...m } = u;
    return Object.entries(m).every((C) => {
      let [g, b] = C;
      return Array.isArray(b) ? b.includes({
        ...o,
        ...s
      }[g]) : {
        ...o,
        ...s
      }[g] === b;
    }) ? [
      ...c,
      d,
      p
    ] : c;
  }, []);
  return Yc(e, a, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, Zg = Si(
  "relative w-full rounded-lg border border-slate-200 p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-slate-950 dark:border-slate-800 dark:[&>svg]:text-slate-50",
  {
    variants: {
      variant: {
        default: "bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        destructive: "border-red-500/50 text-red-500 dark:border-red-500 [&>svg]:text-red-500 dark:border-red-900/50 dark:text-red-900 dark:dark:border-red-900 dark:[&>svg]:text-red-900"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), A4 = y.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ h.jsx(
  "div",
  {
    ref: r,
    role: "alert",
    className: Oe(Zg({ variant: t }), e),
    ...n
  }
));
A4.displayName = "Alert";
const T4 = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  "h5",
  {
    ref: n,
    className: Oe("mb-1 font-medium leading-none tracking-tight", e),
    ...t
  }
));
T4.displayName = "AlertTitle";
const O4 = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  "div",
  {
    ref: n,
    className: Oe("text-sm [&_p]:leading-relaxed", e),
    ...t
  }
));
O4.displayName = "AlertDescription";
const Gc = () => {
};
let As = {}, R4 = {}, F4 = null, P4 = {
  mark: Gc,
  measure: Gc
};
try {
  typeof window < "u" && (As = window), typeof document < "u" && (R4 = document), typeof MutationObserver < "u" && (F4 = MutationObserver), typeof performance < "u" && (P4 = performance);
} catch {
}
const {
  userAgent: Kc = ""
} = As.navigator || {}, lt = As, s2 = R4, Xc = F4, Xn = P4;
lt.document;
const D0 = !!s2.documentElement && !!s2.head && typeof s2.addEventListener == "function" && typeof s2.createElement == "function", k4 = ~Kc.indexOf("MSIE") || ~Kc.indexOf("Trident/");
var l2 = "classic", H4 = "duotone", z2 = "sharp", $2 = "sharp-duotone", zg = [l2, H4, z2, $2], $g = {
  classic: {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  sharp: {
    900: "fass",
    400: "fasr",
    300: "fasl",
    100: "fast"
  },
  "sharp-duotone": {
    900: "fasds"
  }
}, Jc = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, Bg = ["kit"], Ug = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/, Wg = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, qg = {
  "Font Awesome 5 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 5 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal"
  },
  "Font Awesome 5 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 5 Duotone": {
    900: "fad"
  }
}, Yg = {
  "Font Awesome 6 Free": {
    900: "fas",
    400: "far"
  },
  "Font Awesome 6 Pro": {
    900: "fas",
    400: "far",
    normal: "far",
    300: "fal",
    100: "fat"
  },
  "Font Awesome 6 Brands": {
    400: "fab",
    normal: "fab"
  },
  "Font Awesome 6 Duotone": {
    900: "fad"
  },
  "Font Awesome 6 Sharp": {
    900: "fass",
    400: "fasr",
    normal: "fasr",
    300: "fasl",
    100: "fast"
  },
  "Font Awesome 6 Sharp Duotone": {
    900: "fasds"
  }
}, Gg = {
  classic: {
    "fa-brands": "fab",
    "fa-duotone": "fad",
    "fa-light": "fal",
    "fa-regular": "far",
    "fa-solid": "fas",
    "fa-thin": "fat"
  },
  sharp: {
    "fa-solid": "fass",
    "fa-regular": "fasr",
    "fa-light": "fasl",
    "fa-thin": "fast"
  },
  "sharp-duotone": {
    "fa-solid": "fasds"
  }
}, Kg = {
  classic: ["fas", "far", "fal", "fat"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds"]
}, Xg = {
  classic: {
    fab: "fa-brands",
    fad: "fa-duotone",
    fal: "fa-light",
    far: "fa-regular",
    fas: "fa-solid",
    fat: "fa-thin"
  },
  sharp: {
    fass: "fa-solid",
    fasr: "fa-regular",
    fasl: "fa-light",
    fast: "fa-thin"
  },
  "sharp-duotone": {
    fasds: "fa-solid"
  }
}, Jg = {
  classic: {
    solid: "fas",
    regular: "far",
    light: "fal",
    thin: "fat",
    duotone: "fad",
    brands: "fab"
  },
  sharp: {
    solid: "fass",
    regular: "fasr",
    light: "fasl",
    thin: "fast"
  },
  "sharp-duotone": {
    solid: "fasds"
  }
}, N4 = {
  classic: {
    fa: "solid",
    fas: "solid",
    "fa-solid": "solid",
    far: "regular",
    "fa-regular": "regular",
    fal: "light",
    "fa-light": "light",
    fat: "thin",
    "fa-thin": "thin",
    fad: "duotone",
    "fa-duotone": "duotone",
    fab: "brands",
    "fa-brands": "brands"
  },
  sharp: {
    fa: "solid",
    fass: "solid",
    "fa-solid": "solid",
    fasr: "regular",
    "fa-regular": "regular",
    fasl: "light",
    "fa-light": "light",
    fast: "thin",
    "fa-thin": "thin"
  },
  "sharp-duotone": {
    fa: "solid",
    fasds: "solid",
    "fa-solid": "solid"
  }
}, Qg = ["solid", "regular", "light", "thin", "duotone", "brands"], L4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], ev = L4.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Z1 = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, tv = [...Object.keys(Kg), ...Qg, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Z1.GROUP, Z1.SWAP_OPACITY, Z1.PRIMARY, Z1.SECONDARY].concat(L4.map((e) => "".concat(e, "x"))).concat(ev.map((e) => "w-".concat(e))), nv = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, rv = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, iv = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, Qc = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
const H0 = "___FONT_AWESOME___", Ma = 16, V4 = "fa", j4 = "svg-inline--fa", Vt = "data-fa-i2svg", Aa = "data-fa-pseudo-element", ov = "data-fa-pseudo-element-pending", Ts = "data-prefix", Os = "data-icon", e9 = "fontawesome-i2svg", av = "async", sv = ["HTML", "HEAD", "STYLE", "SCRIPT"], I4 = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})(), D4 = [l2, z2, $2];
function Nn(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[l2];
    }
  });
}
const Z4 = {
  ...N4
};
Z4[l2] = {
  ...N4[l2],
  ...Jc.kit,
  ...Jc["kit-duotone"]
};
const Rt = Nn(Z4), Ta = {
  ...Jg
};
Ta[l2] = {
  ...Ta[l2],
  ...Qc.kit,
  ...Qc["kit-duotone"]
};
const cn = Nn(Ta), Oa = {
  ...Xg
};
Oa[l2] = {
  ...Oa[l2],
  ...iv.kit
};
const Ft = Nn(Oa), Ra = {
  ...Gg
};
Ra[l2] = {
  ...Ra[l2],
  ...rv.kit
};
const lv = Nn(Ra), cv = Ug, z4 = "fa-layers-text", uv = Wg, fv = {
  ...$g
};
Nn(fv);
const dv = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Po = Z1, g1 = /* @__PURE__ */ new Set();
Object.keys(cn[l2]).map(g1.add.bind(g1));
Object.keys(cn[z2]).map(g1.add.bind(g1));
Object.keys(cn[$2]).map(g1.add.bind(g1));
const pv = [...Bg, ...tv], K1 = lt.FontAwesomeConfig || {};
function hv(e) {
  var t = s2.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function mv(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
s2 && typeof s2.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const i = mv(hv(n));
  i != null && (K1[r] = i);
});
const $4 = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: V4,
  replacementClass: j4,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0
};
K1.familyPrefix && (K1.cssPrefix = K1.familyPrefix);
const v1 = {
  ...$4,
  ...K1
};
v1.autoReplaceSvg || (v1.observeMutations = !1);
const we = {};
Object.keys($4).forEach((e) => {
  Object.defineProperty(we, e, {
    enumerable: !0,
    set: function(t) {
      v1[e] = t, X1.forEach((n) => n(we));
    },
    get: function() {
      return v1[e];
    }
  });
});
Object.defineProperty(we, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    v1.cssPrefix = e, X1.forEach((t) => t(we));
  },
  get: function() {
    return v1.cssPrefix;
  }
});
lt.FontAwesomeConfig = we;
const X1 = [];
function Cv(e) {
  return X1.push(e), () => {
    X1.splice(X1.indexOf(e), 1);
  };
}
const K0 = Ma, m0 = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function gv(e) {
  if (!e || !D0)
    return;
  const t = s2.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = s2.head.childNodes;
  let r = null;
  for (let i = n.length - 1; i > -1; i--) {
    const o = n[i], a = (o.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(a) > -1 && (r = o);
  }
  return s2.head.insertBefore(t, r), e;
}
const vv = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function un() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += vv[Math.random() * 62 | 0];
  return t;
}
function T1(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Rs(e) {
  return e.classList ? T1(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function B4(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function yv(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(B4(e[n]), '" '), "").trim();
}
function Mi(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function Fs(e) {
  return e.size !== m0.size || e.x !== m0.x || e.y !== m0.y || e.rotate !== m0.rotate || e.flipX || e.flipY;
}
function bv(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const i = {
    transform: "translate(".concat(n / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), a = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), l = {
    transform: "".concat(o, " ").concat(a, " ").concat(s)
  }, c = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: l,
    path: c
  };
}
function xv(e) {
  let {
    transform: t,
    width: n = Ma,
    height: r = Ma,
    startCentered: i = !1
  } = e, o = "";
  return i && k4 ? o += "translate(".concat(t.x / K0 - n / 2, "em, ").concat(t.y / K0 - r / 2, "em) ") : i ? o += "translate(calc(-50% + ".concat(t.x / K0, "em), calc(-50% + ").concat(t.y / K0, "em)) ") : o += "translate(".concat(t.x / K0, "em, ").concat(t.y / K0, "em) "), o += "scale(".concat(t.size / K0 * (t.flipX ? -1 : 1), ", ").concat(t.size / K0 * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
}
var wv = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function U4() {
  const e = V4, t = j4, n = we.cssPrefix, r = we.replacementClass;
  let i = wv;
  if (n !== e || r !== t) {
    const o = new RegExp("\\.".concat(e, "\\-"), "g"), a = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    i = i.replace(o, ".".concat(n, "-")).replace(a, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return i;
}
let t9 = !1;
function ko() {
  we.autoAddCss && !t9 && (gv(U4()), t9 = !0);
}
var _v = {
  mixout() {
    return {
      dom: {
        css: U4,
        insertCss: ko
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        ko();
      },
      beforeI2svg() {
        ko();
      }
    };
  }
};
const N0 = lt || {};
N0[H0] || (N0[H0] = {});
N0[H0].styles || (N0[H0].styles = {});
N0[H0].hooks || (N0[H0].hooks = {});
N0[H0].shims || (N0[H0].shims = []);
var C0 = N0[H0];
const W4 = [], q4 = function() {
  s2.removeEventListener("DOMContentLoaded", q4), jr = 1, W4.map((e) => e());
};
let jr = !1;
D0 && (jr = (s2.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(s2.readyState), jr || s2.addEventListener("DOMContentLoaded", q4));
function Ev(e) {
  D0 && (jr ? setTimeout(e, 0) : W4.push(e));
}
function Ln(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? B4(e) : "<".concat(t, " ").concat(yv(n), ">").concat(r.map(Ln).join(""), "</").concat(t, ">");
}
function n9(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Ho = function(t, n, r, i) {
  var o = Object.keys(t), a = o.length, s = n, l, c, u;
  for (r === void 0 ? (l = 1, u = t[o[0]]) : (l = 0, u = r); l < a; l++)
    c = o[l], u = s(u, t[c], c, t);
  return u;
};
function Sv(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const i = e.charCodeAt(n++);
    if (i >= 55296 && i <= 56319 && n < r) {
      const o = e.charCodeAt(n++);
      (o & 64512) == 56320 ? t.push(((i & 1023) << 10) + (o & 1023) + 65536) : (t.push(i), n--);
    } else
      t.push(i);
  }
  return t;
}
function Fa(e) {
  const t = Sv(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function Mv(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
function r9(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function Pa(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, i = r9(t);
  typeof C0.hooks.addPack == "function" && !r ? C0.hooks.addPack(e, r9(t)) : C0.styles[e] = {
    ...C0.styles[e] || {},
    ...i
  }, e === "fas" && Pa("fa", t);
}
const {
  styles: _t,
  shims: Av
} = C0, Tv = {
  [l2]: Object.values(Ft[l2]),
  [z2]: Object.values(Ft[z2]),
  [$2]: Object.values(Ft[$2])
};
let Ps = null, Y4 = {}, G4 = {}, K4 = {}, X4 = {}, J4 = {};
const Ov = {
  [l2]: Object.keys(Rt[l2]),
  [z2]: Object.keys(Rt[z2]),
  [$2]: Object.keys(Rt[$2])
};
function Rv(e) {
  return ~pv.indexOf(e);
}
function Fv(e, t) {
  const n = t.split("-"), r = n[0], i = n.slice(1).join("-");
  return r === e && i !== "" && !Rv(i) ? i : null;
}
const Q4 = () => {
  const e = (r) => Ho(_t, (i, o, a) => (i[a] = Ho(o, r, {}), i), {});
  Y4 = e((r, i, o) => (i[3] && (r[i[3]] = o), i[2] && i[2].filter((s) => typeof s == "number").forEach((s) => {
    r[s.toString(16)] = o;
  }), r)), G4 = e((r, i, o) => (r[o] = o, i[2] && i[2].filter((s) => typeof s == "string").forEach((s) => {
    r[s] = o;
  }), r)), J4 = e((r, i, o) => {
    const a = i[2];
    return r[o] = o, a.forEach((s) => {
      r[s] = o;
    }), r;
  });
  const t = "far" in _t || we.autoFetchSvg, n = Ho(Av, (r, i) => {
    const o = i[0];
    let a = i[1];
    const s = i[2];
    return a === "far" && !t && (a = "fas"), typeof o == "string" && (r.names[o] = {
      prefix: a,
      iconName: s
    }), typeof o == "number" && (r.unicodes[o.toString(16)] = {
      prefix: a,
      iconName: s
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  K4 = n.names, X4 = n.unicodes, Ps = Ai(we.styleDefault, {
    family: we.familyDefault
  });
};
Cv((e) => {
  Ps = Ai(e.styleDefault, {
    family: we.familyDefault
  });
});
Q4();
function ks(e, t) {
  return (Y4[e] || {})[t];
}
function Pv(e, t) {
  return (G4[e] || {})[t];
}
function rt(e, t) {
  return (J4[e] || {})[t];
}
function e8(e) {
  return K4[e] || {
    prefix: null,
    iconName: null
  };
}
function kv(e) {
  const t = X4[e], n = ks("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function ct() {
  return Ps;
}
const Hs = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function Ai(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = l2
  } = t, r = Rt[n][e], i = cn[n][e] || cn[n][r], o = e in C0.styles ? e : null;
  return i || o || null;
}
const Hv = {
  [l2]: Object.keys(Ft[l2]),
  [z2]: Object.keys(Ft[z2]),
  [$2]: Object.keys(Ft[$2])
};
function Ti(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t, r = {
    [l2]: "".concat(we.cssPrefix, "-").concat(l2),
    [z2]: "".concat(we.cssPrefix, "-").concat(z2),
    [$2]: "".concat(we.cssPrefix, "-").concat($2)
  };
  let i = null, o = l2;
  const a = zg.filter((l) => l !== H4);
  a.forEach((l) => {
    (e.includes(r[l]) || e.some((c) => Hv[l].includes(c))) && (o = l);
  });
  const s = e.reduce((l, c) => {
    const u = Fv(we.cssPrefix, c);
    if (_t[c] ? (c = Tv[o].includes(c) ? lv[o][c] : c, i = c, l.prefix = c) : Ov[o].indexOf(c) > -1 ? (i = c, l.prefix = Ai(c, {
      family: o
    })) : u ? l.iconName = u : c !== we.replacementClass && !a.some((d) => c === r[d]) && l.rest.push(c), !n && l.prefix && l.iconName) {
      const d = i === "fa" ? e8(l.iconName) : {}, p = rt(l.prefix, l.iconName);
      d.prefix && (i = null), l.iconName = d.iconName || p || l.iconName, l.prefix = d.prefix || l.prefix, l.prefix === "far" && !_t.far && _t.fas && !we.autoFetchSvg && (l.prefix = "fas");
    }
    return l;
  }, Hs());
  return (e.includes("fa-brands") || e.includes("fab")) && (s.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (s.prefix = "fad"), !s.prefix && o === z2 && (_t.fass || we.autoFetchSvg) && (s.prefix = "fass", s.iconName = rt(s.prefix, s.iconName) || s.iconName), !s.prefix && o === $2 && (_t.fasds || we.autoFetchSvg) && (s.prefix = "fasds", s.iconName = rt(s.prefix, s.iconName) || s.iconName), (s.prefix === "fa" || i === "fa") && (s.prefix = ct() || "fas"), s;
}
class Nv {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const i = n.reduce(this._pullDefinitions, {});
    Object.keys(i).forEach((o) => {
      this.definitions[o] = {
        ...this.definitions[o] || {},
        ...i[o]
      }, Pa(o, i[o]);
      const a = Ft[l2][o];
      a && Pa(a, i[o]), Q4();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(r).map((i) => {
      const {
        prefix: o,
        iconName: a,
        icon: s
      } = r[i], l = s[2];
      t[o] || (t[o] = {}), l.length > 0 && l.forEach((c) => {
        typeof c == "string" && (t[o][c] = s);
      }), t[o][a] = s;
    }), t;
  }
}
let i9 = [], r1 = {};
const u1 = {}, Lv = Object.keys(u1);
function Vv(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return i9 = e, r1 = {}, Object.keys(u1).forEach((r) => {
    Lv.indexOf(r) === -1 && delete u1[r];
  }), i9.forEach((r) => {
    const i = r.mixout ? r.mixout() : {};
    if (Object.keys(i).forEach((o) => {
      typeof i[o] == "function" && (n[o] = i[o]), typeof i[o] == "object" && Object.keys(i[o]).forEach((a) => {
        n[o] || (n[o] = {}), n[o][a] = i[o][a];
      });
    }), r.hooks) {
      const o = r.hooks();
      Object.keys(o).forEach((a) => {
        r1[a] || (r1[a] = []), r1[a].push(o[a]);
      });
    }
    r.provides && r.provides(u1);
  }), n;
}
function ka(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  return (r1[e] || []).forEach((a) => {
    t = a.apply(null, [t, ...r]);
  }), t;
}
function jt(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (r1[e] || []).forEach((o) => {
    o.apply(null, n);
  });
}
function ut() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return u1[e] ? u1[e].apply(null, t) : void 0;
}
function Ha(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || ct();
  if (t)
    return t = rt(n, t) || t, n9(t8.definitions, n, t) || n9(C0.styles, n, t);
}
const t8 = new Nv(), jv = () => {
  we.autoReplaceSvg = !1, we.observeMutations = !1, jt("noAuto");
}, Iv = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return D0 ? (jt("beforeI2svg", e), ut("pseudoElements2svg", e), ut("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    we.autoReplaceSvg === !1 && (we.autoReplaceSvg = !0), we.observeMutations = !0, Ev(() => {
      Zv({
        autoReplaceSvgRoot: t
      }), jt("watch", e);
    });
  }
}, Dv = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: rt(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = Ai(e[0]);
      return {
        prefix: n,
        iconName: rt(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(we.cssPrefix, "-")) > -1 || e.match(cv))) {
      const t = Ti(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || ct(),
        iconName: rt(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = ct();
      return {
        prefix: t,
        iconName: rt(t, e) || e
      };
    }
  }
}, G2 = {
  noAuto: jv,
  config: we,
  dom: Iv,
  parse: Dv,
  library: t8,
  findIconDefinition: Ha,
  toHtml: Ln
}, Zv = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = s2
  } = e;
  (Object.keys(C0.styles).length > 0 || we.autoFetchSvg) && D0 && we.autoReplaceSvg && G2.dom.i2svg({
    node: t
  });
};
function Oi(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Ln(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!D0) return;
      const n = s2.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function zv(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: i,
    styles: o,
    transform: a
  } = e;
  if (Fs(a) && n.found && !r.found) {
    const {
      width: s,
      height: l
    } = n, c = {
      x: s / l / 2,
      y: 0.5
    };
    i.style = Mi({
      ...o,
      "transform-origin": "".concat(c.x + a.x / 16, "em ").concat(c.y + a.y / 16, "em")
    });
  }
  return [{
    tag: "svg",
    attributes: i,
    children: t
  }];
}
function $v(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: i,
    symbol: o
  } = e;
  const a = o === !0 ? "".concat(t, "-").concat(we.cssPrefix, "-").concat(n) : o;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: {
        ...i,
        id: a
      },
      children: r
    }]
  }];
}
function Ns(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: i,
    transform: o,
    symbol: a,
    title: s,
    maskId: l,
    titleId: c,
    extra: u,
    watchable: d = !1
  } = e, {
    width: p,
    height: m
  } = n.found ? n : t, C = r === "fak", g = [we.replacementClass, i ? "".concat(we.cssPrefix, "-").concat(i) : ""].filter((_) => u.classes.indexOf(_) === -1).filter((_) => _ !== "" || !!_).concat(u.classes).join(" ");
  let b = {
    children: [],
    attributes: {
      ...u.attributes,
      "data-prefix": r,
      "data-icon": i,
      class: g,
      role: u.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(p, " ").concat(m)
    }
  };
  const x = C && !~u.classes.indexOf("fa-fw") ? {
    width: "".concat(p / m * 16 * 0.0625, "em")
  } : {};
  d && (b.attributes[Vt] = ""), s && (b.children.push({
    tag: "title",
    attributes: {
      id: b.attributes["aria-labelledby"] || "title-".concat(c || un())
    },
    children: [s]
  }), delete b.attributes.title);
  const w = {
    ...b,
    prefix: r,
    iconName: i,
    main: t,
    mask: n,
    maskId: l,
    transform: o,
    symbol: a,
    styles: {
      ...x,
      ...u.styles
    }
  }, {
    children: E,
    attributes: S
  } = n.found && t.found ? ut("generateAbstractMask", w) || {
    children: [],
    attributes: {}
  } : ut("generateAbstractIcon", w) || {
    children: [],
    attributes: {}
  };
  return w.children = E, w.attributes = S, a ? $v(w) : zv(w);
}
function o9(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: i,
    title: o,
    extra: a,
    watchable: s = !1
  } = e, l = {
    ...a.attributes,
    ...o ? {
      title: o
    } : {},
    class: a.classes.join(" ")
  };
  s && (l[Vt] = "");
  const c = {
    ...a.styles
  };
  Fs(i) && (c.transform = xv({
    transform: i,
    startCentered: !0,
    width: n,
    height: r
  }), c["-webkit-transform"] = c.transform);
  const u = Mi(c);
  u.length > 0 && (l.style = u);
  const d = [];
  return d.push({
    tag: "span",
    attributes: l,
    children: [t]
  }), o && d.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), d;
}
function Bv(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, i = {
    ...r.attributes,
    ...n ? {
      title: n
    } : {},
    class: r.classes.join(" ")
  }, o = Mi(r.styles);
  o.length > 0 && (i.style = o);
  const a = [];
  return a.push({
    tag: "span",
    attributes: i,
    children: [t]
  }), n && a.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [n]
  }), a;
}
const {
  styles: No
} = C0;
function Na(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let i = null;
  return Array.isArray(r) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(we.cssPrefix, "-").concat(Po.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(we.cssPrefix, "-").concat(Po.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(we.cssPrefix, "-").concat(Po.PRIMARY),
        fill: "currentColor",
        d: r[1]
      }
    }]
  } : i = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: r
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: i
  };
}
const Uv = {
  found: !1,
  width: 512,
  height: 512
};
function Wv(e, t) {
  !I4 && !we.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function La(e, t) {
  let n = t;
  return t === "fa" && we.styleDefault !== null && (t = ct()), new Promise((r, i) => {
    if (n === "fa") {
      const o = e8(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && No[t] && No[t][e]) {
      const o = No[t][e];
      return r(Na(o));
    }
    Wv(e, t), r({
      ...Uv,
      icon: we.showMissingIcons && e ? ut("missingIconAbstract") || {} : {}
    });
  });
}
const a9 = () => {
}, Va = we.measurePerformance && Xn && Xn.mark && Xn.measure ? Xn : {
  mark: a9,
  measure: a9
}, z1 = 'FA "6.6.0"', qv = (e) => (Va.mark("".concat(z1, " ").concat(e, " begins")), () => n8(e)), n8 = (e) => {
  Va.mark("".concat(z1, " ").concat(e, " ends")), Va.measure("".concat(z1, " ").concat(e), "".concat(z1, " ").concat(e, " begins"), "".concat(z1, " ").concat(e, " ends"));
};
var Ls = {
  begin: qv,
  end: n8
};
const br = () => {
};
function s9(e) {
  return typeof (e.getAttribute ? e.getAttribute(Vt) : null) == "string";
}
function Yv(e) {
  const t = e.getAttribute ? e.getAttribute(Ts) : null, n = e.getAttribute ? e.getAttribute(Os) : null;
  return t && n;
}
function Gv(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(we.replacementClass);
}
function Kv() {
  return we.autoReplaceSvg === !0 ? xr.replace : xr[we.autoReplaceSvg] || xr.replace;
}
function Xv(e) {
  return s2.createElementNS("http://www.w3.org/2000/svg", e);
}
function Jv(e) {
  return s2.createElement(e);
}
function r8(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? Xv : Jv
  } = t;
  if (typeof e == "string")
    return s2.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(o) {
    r.setAttribute(o, e.attributes[o]);
  }), (e.children || []).forEach(function(o) {
    r.appendChild(r8(o, {
      ceFn: n
    }));
  }), r;
}
function Qv(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const xr = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(r8(n), t);
      }), t.getAttribute(Vt) === null && we.keepOriginalSource) {
        let n = s2.createComment(Qv(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Rs(t).indexOf(we.replacementClass))
      return xr.replace(e);
    const r = new RegExp("".concat(we.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const o = n[0].attributes.class.split(" ").reduce((a, s) => (s === we.replacementClass || s.match(r) ? a.toSvg.push(s) : a.toNode.push(s), a), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", o.toNode.join(" "));
    }
    const i = n.map((o) => Ln(o)).join(`
`);
    t.setAttribute(Vt, ""), t.innerHTML = i;
  }
};
function l9(e) {
  e();
}
function i8(e, t) {
  const n = typeof t == "function" ? t : br;
  if (e.length === 0)
    n();
  else {
    let r = l9;
    we.mutateApproach === av && (r = lt.requestAnimationFrame || l9), r(() => {
      const i = Kv(), o = Ls.begin("mutate");
      e.map(i), o(), n();
    });
  }
}
let Vs = !1;
function o8() {
  Vs = !0;
}
function ja() {
  Vs = !1;
}
let Ir = null;
function c9(e) {
  if (!Xc || !we.observeMutations)
    return;
  const {
    treeCallback: t = br,
    nodeCallback: n = br,
    pseudoElementsCallback: r = br,
    observeMutationsRoot: i = s2
  } = e;
  Ir = new Xc((o) => {
    if (Vs) return;
    const a = ct();
    T1(o).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !s9(s.addedNodes[0]) && (we.searchPseudoElements && r(s.target), t(s.target)), s.type === "attributes" && s.target.parentNode && we.searchPseudoElements && r(s.target.parentNode), s.type === "attributes" && s9(s.target) && ~dv.indexOf(s.attributeName))
        if (s.attributeName === "class" && Yv(s.target)) {
          const {
            prefix: l,
            iconName: c
          } = Ti(Rs(s.target));
          s.target.setAttribute(Ts, l || a), c && s.target.setAttribute(Os, c);
        } else Gv(s.target) && n(s.target);
    });
  }), D0 && Ir.observe(i, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function ey() {
  Ir && Ir.disconnect();
}
function ty(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, i) => {
    const o = i.split(":"), a = o[0], s = o.slice(1);
    return a && s.length > 0 && (r[a] = s.join(":").trim()), r;
  }, {})), n;
}
function ny(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = Ti(Rs(e));
  return i.prefix || (i.prefix = ct()), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = Pv(i.prefix, e.innerText) || ks(i.prefix, Fa(e.innerText))), !i.iconName && we.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function ry(e) {
  const t = T1(e.attributes).reduce((i, o) => (i.name !== "class" && i.name !== "style" && (i[o.name] = o.value), i), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return we.autoA11y && (n ? t["aria-labelledby"] = "".concat(we.replacementClass, "-title-").concat(r || un()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function iy() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: m0,
    symbol: !1,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function u9(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: i
  } = ny(e), o = ry(e), a = ka("parseNodeAttributes", {}, e);
  let s = t.styleParser ? ty(e) : [];
  return {
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: m0,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: i,
      styles: s,
      attributes: o
    },
    ...a
  };
}
const {
  styles: oy
} = C0;
function a8(e) {
  const t = we.autoReplaceSvg === "nest" ? u9(e, {
    styleParser: !1
  }) : u9(e);
  return ~t.extra.classes.indexOf(z4) ? ut("generateLayersText", e, t) : ut("generateSvgReplacementMutation", e, t);
}
let b0 = /* @__PURE__ */ new Set();
D4.map((e) => {
  b0.add("fa-".concat(e));
});
Object.keys(Rt[l2]).map(b0.add.bind(b0));
Object.keys(Rt[z2]).map(b0.add.bind(b0));
Object.keys(Rt[$2]).map(b0.add.bind(b0));
b0 = [...b0];
function f9(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!D0) return Promise.resolve();
  const n = s2.documentElement.classList, r = (u) => n.add("".concat(e9, "-").concat(u)), i = (u) => n.remove("".concat(e9, "-").concat(u)), o = we.autoFetchSvg ? b0 : D4.map((u) => "fa-".concat(u)).concat(Object.keys(oy));
  o.includes("fa") || o.push("fa");
  const a = [".".concat(z4, ":not([").concat(Vt, "])")].concat(o.map((u) => ".".concat(u, ":not([").concat(Vt, "])"))).join(", ");
  if (a.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = T1(e.querySelectorAll(a));
  } catch {
  }
  if (s.length > 0)
    r("pending"), i("complete");
  else
    return Promise.resolve();
  const l = Ls.begin("onTree"), c = s.reduce((u, d) => {
    try {
      const p = a8(d);
      p && u.push(p);
    } catch (p) {
      I4 || p.name === "MissingIcon" && console.error(p);
    }
    return u;
  }, []);
  return new Promise((u, d) => {
    Promise.all(c).then((p) => {
      i8(p, () => {
        r("active"), r("complete"), i("pending"), typeof t == "function" && t(), l(), u();
      });
    }).catch((p) => {
      l(), d(p);
    });
  });
}
function ay(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  a8(e).then((n) => {
    n && i8([n], t);
  });
}
function sy(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : Ha(t || {});
    let {
      mask: i
    } = n;
    return i && (i = (i || {}).icon ? i : Ha(i || {})), e(r, {
      ...n,
      mask: i
    });
  };
}
const ly = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = m0,
    symbol: r = !1,
    mask: i = null,
    maskId: o = null,
    title: a = null,
    titleId: s = null,
    classes: l = [],
    attributes: c = {},
    styles: u = {}
  } = t;
  if (!e) return;
  const {
    prefix: d,
    iconName: p,
    icon: m
  } = e;
  return Oi({
    type: "icon",
    ...e
  }, () => (jt("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), we.autoA11y && (a ? c["aria-labelledby"] = "".concat(we.replacementClass, "-title-").concat(s || un()) : (c["aria-hidden"] = "true", c.focusable = "false")), Ns({
    icons: {
      main: Na(m),
      mask: i ? Na(i.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: d,
    iconName: p,
    transform: {
      ...m0,
      ...n
    },
    symbol: r,
    title: a,
    maskId: o,
    titleId: s,
    extra: {
      attributes: c,
      styles: u,
      classes: l
    }
  })));
};
var cy = {
  mixout() {
    return {
      icon: sy(ly)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = f9, e.nodeCallback = ay, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = s2,
        callback: r = () => {
        }
      } = t;
      return f9(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: i,
        titleId: o,
        prefix: a,
        transform: s,
        symbol: l,
        mask: c,
        maskId: u,
        extra: d
      } = n;
      return new Promise((p, m) => {
        Promise.all([La(r, a), c.iconName ? La(c.iconName, c.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((C) => {
          let [g, b] = C;
          p([t, Ns({
            icons: {
              main: g,
              mask: b
            },
            prefix: a,
            iconName: r,
            transform: s,
            symbol: l,
            maskId: u,
            title: i,
            titleId: o,
            extra: d,
            watchable: !0
          })]);
        }).catch(m);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: i,
        transform: o,
        styles: a
      } = t;
      const s = Mi(a);
      s.length > 0 && (r.style = s);
      let l;
      return Fs(o) && (l = ut("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), n.push(l || i.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, uy = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return Oi({
          type: "layer"
        }, () => {
          jt("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let r = [];
          return e((i) => {
            Array.isArray(i) ? i.map((o) => {
              r = r.concat(o.abstract);
            }) : r = r.concat(i.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(we.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, fy = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: r = [],
          attributes: i = {},
          styles: o = {}
        } = t;
        return Oi({
          type: "counter",
          content: e
        }, () => (jt("beforeDOMElementCreation", {
          content: e,
          params: t
        }), Bv({
          content: e.toString(),
          title: n,
          extra: {
            attributes: i,
            styles: o,
            classes: ["".concat(we.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, dy = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = m0,
          title: r = null,
          classes: i = [],
          attributes: o = {},
          styles: a = {}
        } = t;
        return Oi({
          type: "text",
          content: e
        }, () => (jt("beforeDOMElementCreation", {
          content: e,
          params: t
        }), o9({
          content: e,
          transform: {
            ...m0,
            ...n
          },
          title: r,
          extra: {
            attributes: o,
            styles: a,
            classes: ["".concat(we.cssPrefix, "-layers-text"), ...i]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: r,
        transform: i,
        extra: o
      } = n;
      let a = null, s = null;
      if (k4) {
        const l = parseInt(getComputedStyle(t).fontSize, 10), c = t.getBoundingClientRect();
        a = c.width / l, s = c.height / l;
      }
      return we.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, o9({
        content: t.innerHTML,
        width: a,
        height: s,
        transform: i,
        title: r,
        extra: o,
        watchable: !0
      })]);
    };
  }
};
const py = new RegExp('"', "ug"), d9 = [1105920, 1112319], p9 = {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  },
  ...Yg,
  ...qg,
  ...nv
}, Ia = Object.keys(p9).reduce((e, t) => (e[t.toLowerCase()] = p9[t], e), {}), hy = Object.keys(Ia).reduce((e, t) => {
  const n = Ia[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function my(e) {
  const t = e.replace(py, ""), n = Mv(t, 0), r = n >= d9[0] && n <= d9[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: Fa(i ? t[0] : t),
    isSecondary: r || i
  };
}
function Cy(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), i = isNaN(r) ? "normal" : r;
  return (Ia[n] || {})[i] || hy[n];
}
function h9(e, t) {
  const n = "".concat(ov).concat(t.replace(":", "-"));
  return new Promise((r, i) => {
    if (e.getAttribute(n) !== null)
      return r();
    const a = T1(e.children).filter((p) => p.getAttribute(Aa) === t)[0], s = lt.getComputedStyle(e, t), l = s.getPropertyValue("font-family"), c = l.match(uv), u = s.getPropertyValue("font-weight"), d = s.getPropertyValue("content");
    if (a && !c)
      return e.removeChild(a), r();
    if (c && d !== "none" && d !== "") {
      const p = s.getPropertyValue("content");
      let m = Cy(l, u);
      const {
        value: C,
        isSecondary: g
      } = my(p), b = c[0].startsWith("FontAwesome");
      let x = ks(m, C), w = x;
      if (b) {
        const E = kv(C);
        E.iconName && E.prefix && (x = E.iconName, m = E.prefix);
      }
      if (x && !g && (!a || a.getAttribute(Ts) !== m || a.getAttribute(Os) !== w)) {
        e.setAttribute(n, w), a && e.removeChild(a);
        const E = iy(), {
          extra: S
        } = E;
        S.attributes[Aa] = t, La(x, m).then((_) => {
          const P = Ns({
            ...E,
            icons: {
              main: _,
              mask: Hs()
            },
            prefix: m,
            iconName: w,
            extra: S,
            watchable: !0
          }), F = s2.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(F, e.firstChild) : e.appendChild(F), F.outerHTML = P.map(($) => Ln($)).join(`
`), e.removeAttribute(n), r();
        }).catch(i);
      } else
        r();
    } else
      r();
  });
}
function gy(e) {
  return Promise.all([h9(e, "::before"), h9(e, "::after")]);
}
function vy(e) {
  return e.parentNode !== document.head && !~sv.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Aa) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function m9(e) {
  if (D0)
    return new Promise((t, n) => {
      const r = T1(e.querySelectorAll("*")).filter(vy).map(gy), i = Ls.begin("searchPseudoElements");
      o8(), Promise.all(r).then(() => {
        i(), ja(), t();
      }).catch(() => {
        i(), ja(), n();
      });
    });
}
var yy = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = m9, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = s2
      } = t;
      we.searchPseudoElements && m9(n);
    };
  }
};
let C9 = !1;
var by = {
  mixout() {
    return {
      dom: {
        unwatch() {
          o8(), C9 = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        c9(ka("mutationObserverCallbacks", {}));
      },
      noAuto() {
        ey();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        C9 ? ja() : c9(ka("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const g9 = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, r) => {
    const i = r.toLowerCase().split("-"), o = i[0];
    let a = i.slice(1).join("-");
    if (o && a === "h")
      return n.flipX = !0, n;
    if (o && a === "v")
      return n.flipY = !0, n;
    if (a = parseFloat(a), isNaN(a))
      return n;
    switch (o) {
      case "grow":
        n.size = n.size + a;
        break;
      case "shrink":
        n.size = n.size - a;
        break;
      case "left":
        n.x = n.x - a;
        break;
      case "right":
        n.x = n.x + a;
        break;
      case "up":
        n.y = n.y - a;
        break;
      case "down":
        n.y = n.y + a;
        break;
      case "rotate":
        n.rotate = n.rotate + a;
        break;
    }
    return n;
  }, t);
};
var xy = {
  mixout() {
    return {
      parse: {
        transform: (e) => g9(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = g9(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: r,
        containerWidth: i,
        iconWidth: o
      } = t;
      const a = {
        transform: "translate(".concat(i / 2, " 256)")
      }, s = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), l = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), c = "rotate(".concat(r.rotate, " 0 0)"), u = {
        transform: "".concat(s, " ").concat(l, " ").concat(c)
      }, d = {
        transform: "translate(".concat(o / 2 * -1, " -256)")
      }, p = {
        outer: a,
        inner: u,
        path: d
      };
      return {
        tag: "g",
        attributes: {
          ...p.outer
        },
        children: [{
          tag: "g",
          attributes: {
            ...p.inner
          },
          children: [{
            tag: n.icon.tag,
            children: n.icon.children,
            attributes: {
              ...n.icon.attributes,
              ...p.path
            }
          }]
        }]
      };
    };
  }
};
const Lo = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function v9(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function wy(e) {
  return e.tag === "g" ? e.children : [e];
}
var _y = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? Ti(n.split(" ").map((i) => i.trim())) : Hs();
        return r.prefix || (r.prefix = ct()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
        main: i,
        mask: o,
        maskId: a,
        transform: s
      } = t;
      const {
        width: l,
        icon: c
      } = i, {
        width: u,
        icon: d
      } = o, p = bv({
        transform: s,
        containerWidth: u,
        iconWidth: l
      }), m = {
        tag: "rect",
        attributes: {
          ...Lo,
          fill: "white"
        }
      }, C = c.children ? {
        children: c.children.map(v9)
      } : {}, g = {
        tag: "g",
        attributes: {
          ...p.inner
        },
        children: [v9({
          tag: c.tag,
          attributes: {
            ...c.attributes,
            ...p.path
          },
          ...C
        })]
      }, b = {
        tag: "g",
        attributes: {
          ...p.outer
        },
        children: [g]
      }, x = "mask-".concat(a || un()), w = "clip-".concat(a || un()), E = {
        tag: "mask",
        attributes: {
          ...Lo,
          id: x,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        },
        children: [m, b]
      }, S = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: w
          },
          children: wy(d)
        }, E]
      };
      return n.push(S, {
        tag: "rect",
        attributes: {
          fill: "currentColor",
          "clip-path": "url(#".concat(w, ")"),
          mask: "url(#".concat(x, ")"),
          ...Lo
        }
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, Ey = {
  provides(e) {
    let t = !1;
    lt.matchMedia && (t = lt.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, i = {
        attributeType: "XML",
        repeatCount: "indefinite",
        dur: "2s"
      };
      n.push({
        tag: "path",
        attributes: {
          ...r,
          d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"
        }
      });
      const o = {
        ...i,
        attributeName: "opacity"
      }, a = {
        tag: "circle",
        attributes: {
          ...r,
          cx: "256",
          cy: "364",
          r: "28"
        },
        children: []
      };
      return t || a.children.push({
        tag: "animate",
        attributes: {
          ...i,
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        }
      }, {
        tag: "animate",
        attributes: {
          ...o,
          values: "1;0;1;1;0;1;"
        }
      }), n.push(a), n.push({
        tag: "path",
        attributes: {
          ...r,
          opacity: "1",
          d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"
        },
        children: t ? [] : [{
          tag: "animate",
          attributes: {
            ...o,
            values: "1;0;0;0;0;1;"
          }
        }]
      }), t || n.push({
        tag: "path",
        attributes: {
          ...r,
          opacity: "0",
          d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"
        },
        children: [{
          tag: "animate",
          attributes: {
            ...o,
            values: "0;0;1;1;0;0;"
          }
        }]
      }), {
        tag: "g",
        attributes: {
          class: "missing"
        },
        children: n
      };
    };
  }
}, Sy = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, My = [_v, cy, uy, fy, dy, yy, by, xy, _y, Ey, Sy];
Vv(My, {
  mixoutsTo: G2
});
G2.noAuto;
G2.config;
G2.library;
G2.dom;
const Da = G2.parse;
G2.findIconDefinition;
G2.toHtml;
const Ay = G2.icon;
G2.layer;
G2.text;
G2.counter;
var Za = { exports: {} }, Jn = { exports: {} }, Xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var y9;
function Ty() {
  if (y9) return Xe;
  y9 = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(_) {
    if (typeof _ == "object" && _ !== null) {
      var P = _.$$typeof;
      switch (P) {
        case t:
          switch (_ = _.type, _) {
            case l:
            case c:
            case r:
            case o:
            case i:
            case d:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case s:
                case u:
                case C:
                case m:
                case a:
                  return _;
                default:
                  return P;
              }
          }
        case n:
          return P;
      }
    }
  }
  function S(_) {
    return E(_) === c;
  }
  return Xe.AsyncMode = l, Xe.ConcurrentMode = c, Xe.ContextConsumer = s, Xe.ContextProvider = a, Xe.Element = t, Xe.ForwardRef = u, Xe.Fragment = r, Xe.Lazy = C, Xe.Memo = m, Xe.Portal = n, Xe.Profiler = o, Xe.StrictMode = i, Xe.Suspense = d, Xe.isAsyncMode = function(_) {
    return S(_) || E(_) === l;
  }, Xe.isConcurrentMode = S, Xe.isContextConsumer = function(_) {
    return E(_) === s;
  }, Xe.isContextProvider = function(_) {
    return E(_) === a;
  }, Xe.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === t;
  }, Xe.isForwardRef = function(_) {
    return E(_) === u;
  }, Xe.isFragment = function(_) {
    return E(_) === r;
  }, Xe.isLazy = function(_) {
    return E(_) === C;
  }, Xe.isMemo = function(_) {
    return E(_) === m;
  }, Xe.isPortal = function(_) {
    return E(_) === n;
  }, Xe.isProfiler = function(_) {
    return E(_) === o;
  }, Xe.isStrictMode = function(_) {
    return E(_) === i;
  }, Xe.isSuspense = function(_) {
    return E(_) === d;
  }, Xe.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === r || _ === c || _ === o || _ === i || _ === d || _ === p || typeof _ == "object" && _ !== null && (_.$$typeof === C || _.$$typeof === m || _.$$typeof === a || _.$$typeof === s || _.$$typeof === u || _.$$typeof === b || _.$$typeof === x || _.$$typeof === w || _.$$typeof === g);
  }, Xe.typeOf = E, Xe;
}
var Je = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b9;
function Oy() {
  return b9 || (b9 = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, C = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, x = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(ee) {
      return typeof ee == "string" || typeof ee == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      ee === r || ee === c || ee === o || ee === i || ee === d || ee === p || typeof ee == "object" && ee !== null && (ee.$$typeof === C || ee.$$typeof === m || ee.$$typeof === a || ee.$$typeof === s || ee.$$typeof === u || ee.$$typeof === b || ee.$$typeof === x || ee.$$typeof === w || ee.$$typeof === g);
    }
    function S(ee) {
      if (typeof ee == "object" && ee !== null) {
        var Ae = ee.$$typeof;
        switch (Ae) {
          case t:
            var Ue = ee.type;
            switch (Ue) {
              case l:
              case c:
              case r:
              case o:
              case i:
              case d:
                return Ue;
              default:
                var c2 = Ue && Ue.$$typeof;
                switch (c2) {
                  case s:
                  case u:
                  case C:
                  case m:
                  case a:
                    return c2;
                  default:
                    return Ae;
                }
            }
          case n:
            return Ae;
        }
      }
    }
    var _ = l, P = c, F = s, $ = a, le = t, pe = u, fe = r, D = C, Q = m, N = n, re = o, k = i, ce = d, xe = !1;
    function X(ee) {
      return xe || (xe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), j(ee) || S(ee) === l;
    }
    function j(ee) {
      return S(ee) === c;
    }
    function B(ee) {
      return S(ee) === s;
    }
    function he(ee) {
      return S(ee) === a;
    }
    function H(ee) {
      return typeof ee == "object" && ee !== null && ee.$$typeof === t;
    }
    function Y(ee) {
      return S(ee) === u;
    }
    function ie(ee) {
      return S(ee) === r;
    }
    function q(ee) {
      return S(ee) === C;
    }
    function G(ee) {
      return S(ee) === m;
    }
    function oe(ee) {
      return S(ee) === n;
    }
    function de(ee) {
      return S(ee) === o;
    }
    function ve(ee) {
      return S(ee) === i;
    }
    function ke(ee) {
      return S(ee) === d;
    }
    Je.AsyncMode = _, Je.ConcurrentMode = P, Je.ContextConsumer = F, Je.ContextProvider = $, Je.Element = le, Je.ForwardRef = pe, Je.Fragment = fe, Je.Lazy = D, Je.Memo = Q, Je.Portal = N, Je.Profiler = re, Je.StrictMode = k, Je.Suspense = ce, Je.isAsyncMode = X, Je.isConcurrentMode = j, Je.isContextConsumer = B, Je.isContextProvider = he, Je.isElement = H, Je.isForwardRef = Y, Je.isFragment = ie, Je.isLazy = q, Je.isMemo = G, Je.isPortal = oe, Je.isProfiler = de, Je.isStrictMode = ve, Je.isSuspense = ke, Je.isValidElementType = E, Je.typeOf = S;
  }()), Je;
}
var x9;
function s8() {
  return x9 || (x9 = 1, process.env.NODE_ENV === "production" ? Jn.exports = Ty() : Jn.exports = Oy()), Jn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Vo, w9;
function Ry() {
  if (w9) return Vo;
  w9 = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(a).map(function(u) {
        return a[u];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        c[u] = u;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Vo = i() ? Object.assign : function(o, a) {
    for (var s, l = r(o), c, u = 1; u < arguments.length; u++) {
      s = Object(arguments[u]);
      for (var d in s)
        t.call(s, d) && (l[d] = s[d]);
      if (e) {
        c = e(s);
        for (var p = 0; p < c.length; p++)
          n.call(s, c[p]) && (l[c[p]] = s[c[p]]);
      }
    }
    return l;
  }, Vo;
}
var jo, _9;
function js() {
  if (_9) return jo;
  _9 = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return jo = e, jo;
}
var Io, E9;
function l8() {
  return E9 || (E9 = 1, Io = Function.call.bind(Object.prototype.hasOwnProperty)), Io;
}
var Do, S9;
function Fy() {
  if (S9) return Do;
  S9 = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = js(), n = {}, r = l8();
    e = function(o) {
      var a = "Warning: " + o;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(o, a, s, l, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in o)
        if (r(o, u)) {
          var d;
          try {
            if (typeof o[u] != "function") {
              var p = Error(
                (l || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            d = o[u](a, u, l, s, null, t);
          } catch (C) {
            d = C;
          }
          if (d && !(d instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var m = c ? c() : "";
            e(
              "Failed " + s + " type: " + d.message + (m ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Do = i, Do;
}
var Zo, M9;
function Py() {
  if (M9) return Zo;
  M9 = 1;
  var e = s8(), t = Ry(), n = js(), r = l8(), i = Fy(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Zo = function(s, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(j) {
      var B = j && (c && j[c] || j[u]);
      if (typeof B == "function")
        return B;
    }
    var p = "<<anonymous>>", m = {
      array: x("array"),
      bigint: x("bigint"),
      bool: x("boolean"),
      func: x("function"),
      number: x("number"),
      object: x("object"),
      string: x("string"),
      symbol: x("symbol"),
      any: w(),
      arrayOf: E,
      element: S(),
      elementType: _(),
      instanceOf: P,
      node: pe(),
      objectOf: $,
      oneOf: F,
      oneOfType: le,
      shape: D,
      exact: Q
    };
    function C(j, B) {
      return j === B ? j !== 0 || 1 / j === 1 / B : j !== j && B !== B;
    }
    function g(j, B) {
      this.message = j, this.data = B && typeof B == "object" ? B : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function b(j) {
      if (process.env.NODE_ENV !== "production")
        var B = {}, he = 0;
      function H(ie, q, G, oe, de, ve, ke) {
        if (oe = oe || p, ve = ve || G, ke !== n) {
          if (l) {
            var ee = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ee.name = "Invariant Violation", ee;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ae = oe + ":" + G;
            !B[Ae] && // Avoid spamming the console because they are often not actionable except for lib authors
            he < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + ve + "` prop on `" + oe + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), B[Ae] = !0, he++);
          }
        }
        return q[G] == null ? ie ? q[G] === null ? new g("The " + de + " `" + ve + "` is marked as required " + ("in `" + oe + "`, but its value is `null`.")) : new g("The " + de + " `" + ve + "` is marked as required in " + ("`" + oe + "`, but its value is `undefined`.")) : null : j(q, G, oe, de, ve);
      }
      var Y = H.bind(null, !1);
      return Y.isRequired = H.bind(null, !0), Y;
    }
    function x(j) {
      function B(he, H, Y, ie, q, G) {
        var oe = he[H], de = k(oe);
        if (de !== j) {
          var ve = ce(oe);
          return new g(
            "Invalid " + ie + " `" + q + "` of type " + ("`" + ve + "` supplied to `" + Y + "`, expected ") + ("`" + j + "`."),
            { expectedType: j }
          );
        }
        return null;
      }
      return b(B);
    }
    function w() {
      return b(a);
    }
    function E(j) {
      function B(he, H, Y, ie, q) {
        if (typeof j != "function")
          return new g("Property `" + q + "` of component `" + Y + "` has invalid PropType notation inside arrayOf.");
        var G = he[H];
        if (!Array.isArray(G)) {
          var oe = k(G);
          return new g("Invalid " + ie + " `" + q + "` of type " + ("`" + oe + "` supplied to `" + Y + "`, expected an array."));
        }
        for (var de = 0; de < G.length; de++) {
          var ve = j(G, de, Y, ie, q + "[" + de + "]", n);
          if (ve instanceof Error)
            return ve;
        }
        return null;
      }
      return b(B);
    }
    function S() {
      function j(B, he, H, Y, ie) {
        var q = B[he];
        if (!s(q)) {
          var G = k(q);
          return new g("Invalid " + Y + " `" + ie + "` of type " + ("`" + G + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(j);
    }
    function _() {
      function j(B, he, H, Y, ie) {
        var q = B[he];
        if (!e.isValidElementType(q)) {
          var G = k(q);
          return new g("Invalid " + Y + " `" + ie + "` of type " + ("`" + G + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(j);
    }
    function P(j) {
      function B(he, H, Y, ie, q) {
        if (!(he[H] instanceof j)) {
          var G = j.name || p, oe = X(he[H]);
          return new g("Invalid " + ie + " `" + q + "` of type " + ("`" + oe + "` supplied to `" + Y + "`, expected ") + ("instance of `" + G + "`."));
        }
        return null;
      }
      return b(B);
    }
    function F(j) {
      if (!Array.isArray(j))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), a;
      function B(he, H, Y, ie, q) {
        for (var G = he[H], oe = 0; oe < j.length; oe++)
          if (C(G, j[oe]))
            return null;
        var de = JSON.stringify(j, function(ke, ee) {
          var Ae = ce(ee);
          return Ae === "symbol" ? String(ee) : ee;
        });
        return new g("Invalid " + ie + " `" + q + "` of value `" + String(G) + "` " + ("supplied to `" + Y + "`, expected one of " + de + "."));
      }
      return b(B);
    }
    function $(j) {
      function B(he, H, Y, ie, q) {
        if (typeof j != "function")
          return new g("Property `" + q + "` of component `" + Y + "` has invalid PropType notation inside objectOf.");
        var G = he[H], oe = k(G);
        if (oe !== "object")
          return new g("Invalid " + ie + " `" + q + "` of type " + ("`" + oe + "` supplied to `" + Y + "`, expected an object."));
        for (var de in G)
          if (r(G, de)) {
            var ve = j(G, de, Y, ie, q + "." + de, n);
            if (ve instanceof Error)
              return ve;
          }
        return null;
      }
      return b(B);
    }
    function le(j) {
      if (!Array.isArray(j))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var B = 0; B < j.length; B++) {
        var he = j[B];
        if (typeof he != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + xe(he) + " at index " + B + "."
          ), a;
      }
      function H(Y, ie, q, G, oe) {
        for (var de = [], ve = 0; ve < j.length; ve++) {
          var ke = j[ve], ee = ke(Y, ie, q, G, oe, n);
          if (ee == null)
            return null;
          ee.data && r(ee.data, "expectedType") && de.push(ee.data.expectedType);
        }
        var Ae = de.length > 0 ? ", expected one of type [" + de.join(", ") + "]" : "";
        return new g("Invalid " + G + " `" + oe + "` supplied to " + ("`" + q + "`" + Ae + "."));
      }
      return b(H);
    }
    function pe() {
      function j(B, he, H, Y, ie) {
        return N(B[he]) ? null : new g("Invalid " + Y + " `" + ie + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return b(j);
    }
    function fe(j, B, he, H, Y) {
      return new g(
        (j || "React class") + ": " + B + " type `" + he + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Y + "`."
      );
    }
    function D(j) {
      function B(he, H, Y, ie, q) {
        var G = he[H], oe = k(G);
        if (oe !== "object")
          return new g("Invalid " + ie + " `" + q + "` of type `" + oe + "` " + ("supplied to `" + Y + "`, expected `object`."));
        for (var de in j) {
          var ve = j[de];
          if (typeof ve != "function")
            return fe(Y, ie, q, de, ce(ve));
          var ke = ve(G, de, Y, ie, q + "." + de, n);
          if (ke)
            return ke;
        }
        return null;
      }
      return b(B);
    }
    function Q(j) {
      function B(he, H, Y, ie, q) {
        var G = he[H], oe = k(G);
        if (oe !== "object")
          return new g("Invalid " + ie + " `" + q + "` of type `" + oe + "` " + ("supplied to `" + Y + "`, expected `object`."));
        var de = t({}, he[H], j);
        for (var ve in de) {
          var ke = j[ve];
          if (r(j, ve) && typeof ke != "function")
            return fe(Y, ie, q, ve, ce(ke));
          if (!ke)
            return new g(
              "Invalid " + ie + " `" + q + "` key `" + ve + "` supplied to `" + Y + "`.\nBad object: " + JSON.stringify(he[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(j), null, "  ")
            );
          var ee = ke(G, ve, Y, ie, q + "." + ve, n);
          if (ee)
            return ee;
        }
        return null;
      }
      return b(B);
    }
    function N(j) {
      switch (typeof j) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !j;
        case "object":
          if (Array.isArray(j))
            return j.every(N);
          if (j === null || s(j))
            return !0;
          var B = d(j);
          if (B) {
            var he = B.call(j), H;
            if (B !== j.entries) {
              for (; !(H = he.next()).done; )
                if (!N(H.value))
                  return !1;
            } else
              for (; !(H = he.next()).done; ) {
                var Y = H.value;
                if (Y && !N(Y[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function re(j, B) {
      return j === "symbol" ? !0 : B ? B["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && B instanceof Symbol : !1;
    }
    function k(j) {
      var B = typeof j;
      return Array.isArray(j) ? "array" : j instanceof RegExp ? "object" : re(B, j) ? "symbol" : B;
    }
    function ce(j) {
      if (typeof j > "u" || j === null)
        return "" + j;
      var B = k(j);
      if (B === "object") {
        if (j instanceof Date)
          return "date";
        if (j instanceof RegExp)
          return "regexp";
      }
      return B;
    }
    function xe(j) {
      var B = ce(j);
      switch (B) {
        case "array":
        case "object":
          return "an " + B;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + B;
        default:
          return B;
      }
    }
    function X(j) {
      return !j.constructor || !j.constructor.name ? p : j.constructor.name;
    }
    return m.checkPropTypes = i, m.resetWarningCache = i.resetWarningCache, m.PropTypes = m, m;
  }, Zo;
}
var zo, A9;
function ky() {
  if (A9) return zo;
  A9 = 1;
  var e = js();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, zo = function() {
    function r(a, s, l, c, u, d) {
      if (d !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return o.PropTypes = o, o;
  }, zo;
}
if (process.env.NODE_ENV !== "production") {
  var Hy = s8(), Ny = !0;
  Za.exports = Py()(Hy.isElement, Ny);
} else
  Za.exports = ky()();
var Ly = Za.exports;
const Be = /* @__PURE__ */ g3(Ly);
function T9(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function d0(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? T9(Object(n), !0).forEach(function(r) {
      i1(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : T9(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Dr(e) {
  "@babel/helpers - typeof";
  return Dr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dr(e);
}
function i1(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Vy(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function jy(e, t) {
  if (e == null) return {};
  var n = Vy(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function za(e) {
  return Iy(e) || Dy(e) || Zy(e) || zy();
}
function Iy(e) {
  if (Array.isArray(e)) return $a(e);
}
function Dy(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Zy(e, t) {
  if (e) {
    if (typeof e == "string") return $a(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $a(e, t);
  }
}
function $a(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function zy() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $y(e) {
  var t, n = e.beat, r = e.fade, i = e.beatFade, o = e.bounce, a = e.shake, s = e.flash, l = e.spin, c = e.spinPulse, u = e.spinReverse, d = e.pulse, p = e.fixedWidth, m = e.inverse, C = e.border, g = e.listItem, b = e.flip, x = e.size, w = e.rotation, E = e.pull, S = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": i,
    "fa-bounce": o,
    "fa-shake": a,
    "fa-flash": s,
    "fa-spin": l,
    "fa-spin-reverse": u,
    "fa-spin-pulse": c,
    "fa-pulse": d,
    "fa-fw": p,
    "fa-inverse": m,
    "fa-border": C,
    "fa-li": g,
    "fa-flip": b === !0,
    "fa-flip-horizontal": b === "horizontal" || b === "both",
    "fa-flip-vertical": b === "vertical" || b === "both"
  }, i1(t, "fa-".concat(x), typeof x < "u" && x !== null), i1(t, "fa-rotate-".concat(w), typeof w < "u" && w !== null && w !== 0), i1(t, "fa-pull-".concat(E), typeof E < "u" && E !== null), i1(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(S).map(function(_) {
    return S[_] ? _ : null;
  }).filter(function(_) {
    return _;
  });
}
function By(e) {
  return e = e - 0, e === e;
}
function c8(e) {
  return By(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var Uy = ["style"];
function Wy(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function qy(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), i = c8(n.slice(0, r)), o = n.slice(r + 1).trim();
    return i.startsWith("webkit") ? t[Wy(i)] = o : t[i] = o, t;
  }, {});
}
function u8(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(l) {
    return u8(e, l);
  }), i = Object.keys(t.attributes || {}).reduce(function(l, c) {
    var u = t.attributes[c];
    switch (c) {
      case "class":
        l.attrs.className = u, delete t.attributes.class;
        break;
      case "style":
        l.attrs.style = qy(u);
        break;
      default:
        c.indexOf("aria-") === 0 || c.indexOf("data-") === 0 ? l.attrs[c.toLowerCase()] = u : l.attrs[c8(c)] = u;
    }
    return l;
  }, {
    attrs: {}
  }), o = n.style, a = o === void 0 ? {} : o, s = jy(n, Uy);
  return i.attrs.style = d0(d0({}, i.attrs.style), a), e.apply(void 0, [t.tag, d0(d0({}, i.attrs), s)].concat(za(r)));
}
var f8 = !1;
try {
  f8 = process.env.NODE_ENV === "production";
} catch {
}
function Yy() {
  if (!f8 && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function O9(e) {
  if (e && Dr(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Da.icon)
    return Da.icon(e);
  if (e === null)
    return null;
  if (e && Dr(e) === "object" && e.prefix && e.iconName)
    return e;
  if (Array.isArray(e) && e.length === 2)
    return {
      prefix: e[0],
      iconName: e[1]
    };
  if (typeof e == "string")
    return {
      prefix: "fas",
      iconName: e
    };
}
function $o(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? i1({}, e, t) : {};
}
var R9 = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1
}, x0 = /* @__PURE__ */ Ve.forwardRef(function(e, t) {
  var n = d0(d0({}, R9), e), r = n.icon, i = n.mask, o = n.symbol, a = n.className, s = n.title, l = n.titleId, c = n.maskId, u = O9(r), d = $o("classes", [].concat(za($y(n)), za((a || "").split(" ")))), p = $o("transform", typeof n.transform == "string" ? Da.transform(n.transform) : n.transform), m = $o("mask", O9(i)), C = Ay(u, d0(d0(d0(d0({}, d), p), m), {}, {
    symbol: o,
    title: s,
    titleId: l,
    maskId: c
  }));
  if (!C)
    return Yy("Could not find icon", u), null;
  var g = C.abstract, b = {
    ref: t
  };
  return Object.keys(n).forEach(function(x) {
    R9.hasOwnProperty(x) || (b[x] = n[x]);
  }), Gy(g[0], b);
});
x0.displayName = "FontAwesomeIcon";
x0.propTypes = {
  beat: Be.bool,
  border: Be.bool,
  beatFade: Be.bool,
  bounce: Be.bool,
  className: Be.string,
  fade: Be.bool,
  flash: Be.bool,
  mask: Be.oneOfType([Be.object, Be.array, Be.string]),
  maskId: Be.string,
  fixedWidth: Be.bool,
  inverse: Be.bool,
  flip: Be.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: Be.oneOfType([Be.object, Be.array, Be.string]),
  listItem: Be.bool,
  pull: Be.oneOf(["right", "left"]),
  pulse: Be.bool,
  rotation: Be.oneOf([0, 90, 180, 270]),
  shake: Be.bool,
  size: Be.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: Be.bool,
  spinPulse: Be.bool,
  spinReverse: Be.bool,
  symbol: Be.oneOfType([Be.bool, Be.string]),
  title: Be.string,
  titleId: Be.string,
  transform: Be.oneOfType([Be.string, Be.object]),
  swapOpacity: Be.bool
};
var Gy = u8.bind(null, Ve.createElement);
const Ky = {
  prefix: "fas",
  iconName: "minus",
  icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]
}, d8 = {
  prefix: "fas",
  iconName: "upload",
  icon: [512, 512, [], "f093", "M288 109.3L288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-242.7-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352l128 0c0 35.3 28.7 64 64 64s64-28.7 64-64l128 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]
}, Xy = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, Jy = Xy, Qy = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]
}, eb = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, tb = eb, nb = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, rb = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, ib = Si(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), at = y.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...i }, o) => {
    const a = r ? k0 : "button";
    return /* @__PURE__ */ h.jsx(
      a,
      {
        className: Oe(ib({ variant: t, size: n, className: e })),
        ref: o,
        ...i
      }
    );
  }
);
at.displayName = "Button";
const f1 = y.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ h.jsx(
    "input",
    {
      type: t,
      className: Oe(
        "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
        e
      ),
      ref: r,
      ...n
    }
  )
);
f1.displayName = "Input";
var Ge;
(function(e) {
  e.assertEqual = (i) => i;
  function t(i) {
  }
  e.assertIs = t;
  function n(i) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (i) => {
    const o = {};
    for (const a of i)
      o[a] = a;
    return o;
  }, e.getValidEnumValues = (i) => {
    const o = e.objectKeys(i).filter((s) => typeof i[i[s]] != "number"), a = {};
    for (const s of o)
      a[s] = i[s];
    return e.objectValues(a);
  }, e.objectValues = (i) => e.objectKeys(i).map(function(o) {
    return i[o];
  }), e.objectKeys = typeof Object.keys == "function" ? (i) => Object.keys(i) : (i) => {
    const o = [];
    for (const a in i)
      Object.prototype.hasOwnProperty.call(i, a) && o.push(a);
    return o;
  }, e.find = (i, o) => {
    for (const a of i)
      if (o(a))
        return a;
  }, e.isInteger = typeof Number.isInteger == "function" ? (i) => Number.isInteger(i) : (i) => typeof i == "number" && isFinite(i) && Math.floor(i) === i;
  function r(i, o = " | ") {
    return i.map((a) => typeof a == "string" ? `'${a}'` : a).join(o);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (i, o) => typeof o == "bigint" ? o.toString() : o;
})(Ge || (Ge = {}));
var Ba;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Ba || (Ba = {}));
const be = Ge.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), et = (e) => {
  switch (typeof e) {
    case "undefined":
      return be.undefined;
    case "string":
      return be.string;
    case "number":
      return isNaN(e) ? be.nan : be.number;
    case "boolean":
      return be.boolean;
    case "function":
      return be.function;
    case "bigint":
      return be.bigint;
    case "symbol":
      return be.symbol;
    case "object":
      return Array.isArray(e) ? be.array : e === null ? be.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? be.promise : typeof Map < "u" && e instanceof Map ? be.map : typeof Set < "u" && e instanceof Set ? be.set : typeof Date < "u" && e instanceof Date ? be.date : be.object;
    default:
      return be.unknown;
  }
}, ae = Ge.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]), ob = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class B2 extends Error {
  constructor(t) {
    super(), this.issues = [], this.addIssue = (r) => {
      this.issues = [...this.issues, r];
    }, this.addIssues = (r = []) => {
      this.issues = [...this.issues, ...r];
    };
    const n = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, n) : this.__proto__ = n, this.name = "ZodError", this.issues = t;
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const n = t || function(o) {
      return o.message;
    }, r = { _errors: [] }, i = (o) => {
      for (const a of o.issues)
        if (a.code === "invalid_union")
          a.unionErrors.map(i);
        else if (a.code === "invalid_return_type")
          i(a.returnTypeError);
        else if (a.code === "invalid_arguments")
          i(a.argumentsError);
        else if (a.path.length === 0)
          r._errors.push(n(a));
        else {
          let s = r, l = 0;
          for (; l < a.path.length; ) {
            const c = a.path[l];
            l === a.path.length - 1 ? (s[c] = s[c] || { _errors: [] }, s[c]._errors.push(n(a))) : s[c] = s[c] || { _errors: [] }, s = s[c], l++;
          }
        }
    };
    return i(this), r;
  }
  static assert(t) {
    if (!(t instanceof B2))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Ge.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, r = [];
    for (const i of this.issues)
      i.path.length > 0 ? (n[i.path[0]] = n[i.path[0]] || [], n[i.path[0]].push(t(i))) : r.push(t(i));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
B2.create = (e) => new B2(e);
const y1 = (e, t) => {
  let n;
  switch (e.code) {
    case ae.invalid_type:
      e.received === be.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case ae.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Ge.jsonStringifyReplacer)}`;
      break;
    case ae.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Ge.joinValues(e.keys, ", ")}`;
      break;
    case ae.invalid_union:
      n = "Invalid input";
      break;
    case ae.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Ge.joinValues(e.options)}`;
      break;
    case ae.invalid_enum_value:
      n = `Invalid enum value. Expected ${Ge.joinValues(e.options)}, received '${e.received}'`;
      break;
    case ae.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case ae.invalid_return_type:
      n = "Invalid function return type";
      break;
    case ae.invalid_date:
      n = "Invalid date";
      break;
    case ae.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : Ge.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case ae.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case ae.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case ae.custom:
      n = "Invalid input";
      break;
    case ae.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case ae.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case ae.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, Ge.assertNever(e);
  }
  return { message: n };
};
let p8 = y1;
function ab(e) {
  p8 = e;
}
function Zr() {
  return p8;
}
const zr = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: i } = e, o = [...n, ...i.path || []], a = {
    ...i,
    path: o
  };
  if (i.message !== void 0)
    return {
      ...i,
      path: o,
      message: i.message
    };
  let s = "";
  const l = r.filter((c) => !!c).slice().reverse();
  for (const c of l)
    s = c(a, { data: t, defaultError: s }).message;
  return {
    ...i,
    path: o,
    message: s
  };
}, sb = [];
function ge(e, t) {
  const n = Zr(), r = zr({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      n,
      n === y1 ? void 0 : y1
      // then global default map
    ].filter((i) => !!i)
  });
  e.common.issues.push(r);
}
class _2 {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, n) {
    const r = [];
    for (const i of n) {
      if (i.status === "aborted")
        return Pe;
      i.status === "dirty" && t.dirty(), r.push(i.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const i of n) {
      const o = await i.key, a = await i.value;
      r.push({
        key: o,
        value: a
      });
    }
    return _2.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const i of n) {
      const { key: o, value: a } = i;
      if (o.status === "aborted" || a.status === "aborted")
        return Pe;
      o.status === "dirty" && t.dirty(), a.status === "dirty" && t.dirty(), o.value !== "__proto__" && (typeof a.value < "u" || i.alwaysSet) && (r[o.value] = a.value);
    }
    return { status: t.value, value: r };
  }
}
const Pe = Object.freeze({
  status: "aborted"
}), o1 = (e) => ({ status: "dirty", value: e }), A2 = (e) => ({ status: "valid", value: e }), Ua = (e) => e.status === "aborted", Wa = (e) => e.status === "dirty", fn = (e) => e.status === "valid", dn = (e) => typeof Promise < "u" && e instanceof Promise;
function $r(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function h8(e, t, n, r, i) {
  if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Me;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(Me || (Me = {}));
var $1, B1;
class w0 {
  constructor(t, n, r, i) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const F9 = (e, t) => {
  if (fn(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new B2(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function Ie(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: i } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: i } : { errorMap: (a, s) => {
    var l, c;
    const { message: u } = e;
    return a.code === "invalid_enum_value" ? { message: u ?? s.defaultError } : typeof s.data > "u" ? { message: (l = u ?? r) !== null && l !== void 0 ? l : s.defaultError } : a.code !== "invalid_type" ? { message: s.defaultError } : { message: (c = u ?? n) !== null && c !== void 0 ? c : s.defaultError };
  }, description: i };
}
class Ze {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return et(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: et(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new _2(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: et(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (dn(n))
      throw new Error("Synchronous parse encountered promise.");
    return n;
  }
  _parseAsync(t) {
    const n = this._parse(t);
    return Promise.resolve(n);
  }
  parse(t, n) {
    const r = this.safeParse(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  safeParse(t, n) {
    var r;
    const i = {
      common: {
        issues: [],
        async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: et(t)
    }, o = this._parseSync({ data: t, path: i.path, parent: i });
    return F9(i, o);
  }
  async parseAsync(t, n) {
    const r = await this.safeParseAsync(t, n);
    if (r.success)
      return r.data;
    throw r.error;
  }
  async safeParseAsync(t, n) {
    const r = {
      common: {
        issues: [],
        contextualErrorMap: n == null ? void 0 : n.errorMap,
        async: !0
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: et(t)
    }, i = this._parse({ data: t, path: r.path, parent: r }), o = await (dn(i) ? i : Promise.resolve(i));
    return F9(r, o);
  }
  refine(t, n) {
    const r = (i) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(i) : n;
    return this._refinement((i, o) => {
      const a = t(i), s = () => o.addIssue({
        code: ae.custom,
        ...r(i)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((l) => l ? !0 : (s(), !1)) : a ? !0 : (s(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, i) => t(r) ? !0 : (i.addIssue(typeof n == "function" ? n(r, i) : n), !1));
  }
  _refinement(t) {
    return new s0({
      schema: this,
      typeName: Fe.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return y0.create(this, this._def);
  }
  nullable() {
    return ht.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return o0.create(this, this._def);
  }
  promise() {
    return x1.create(this, this._def);
  }
  or(t) {
    return Cn.create([this, t], this._def);
  }
  and(t) {
    return gn.create(this, t, this._def);
  }
  transform(t) {
    return new s0({
      ...Ie(this._def),
      schema: this,
      typeName: Fe.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new wn({
      ...Ie(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Fe.ZodDefault
    });
  }
  brand() {
    return new Is({
      typeName: Fe.ZodBranded,
      type: this,
      ...Ie(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new _n({
      ...Ie(this._def),
      innerType: this,
      catchValue: n,
      typeName: Fe.ZodCatch
    });
  }
  describe(t) {
    const n = this.constructor;
    return new n({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return Vn.create(this, t);
  }
  readonly() {
    return En.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const lb = /^c[^\s-]{8,}$/i, cb = /^[0-9a-z]+$/, ub = /^[0-9A-HJKMNP-TV-Z]{26}$/, fb = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, db = /^[a-z0-9_-]{21}$/i, pb = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, hb = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, mb = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Bo;
const Cb = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, gb = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, vb = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, m8 = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", yb = new RegExp(`^${m8}$`);
function C8(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function bb(e) {
  return new RegExp(`^${C8(e)}$`);
}
function g8(e) {
  let t = `${m8}T${C8(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function xb(e, t) {
  return !!((t === "v4" || !t) && Cb.test(e) || (t === "v6" || !t) && gb.test(e));
}
class t0 extends Ze {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== be.string) {
      const o = this._getOrReturnCtx(t);
      return ge(o, {
        code: ae.invalid_type,
        expected: be.string,
        received: o.parsedType
      }), Pe;
    }
    const r = new _2();
    let i;
    for (const o of this._def.checks)
      if (o.kind === "min")
        t.data.length < o.value && (i = this._getOrReturnCtx(t, i), ge(i, {
          code: ae.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), r.dirty());
      else if (o.kind === "max")
        t.data.length > o.value && (i = this._getOrReturnCtx(t, i), ge(i, {
          code: ae.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), r.dirty());
      else if (o.kind === "length") {
        const a = t.data.length > o.value, s = t.data.length < o.value;
        (a || s) && (i = this._getOrReturnCtx(t, i), a ? ge(i, {
          code: ae.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }) : s && ge(i, {
          code: ae.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }), r.dirty());
      } else if (o.kind === "email")
        hb.test(t.data) || (i = this._getOrReturnCtx(t, i), ge(i, {
          validation: "email",
          code: ae.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "emoji")
        Bo || (Bo = new RegExp(mb, "u")), Bo.test(t.data) || (i = this._getOrReturnCtx(t, i), ge(i, {
          validation: "emoji",
          code: ae.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "uuid")
        fb.test(t.data) || (i = this._getOrReturnCtx(t, i), ge(i, {
          validation: "uuid",
          code: ae.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "nanoid")
        db.test(t.data) || (i = this._getOrReturnCtx(t, i), ge(i, {
          validation: "nanoid",
          code: ae.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "cuid")
        lb.test(t.data) || (i = this._getOrReturnCtx(t, i), ge(i, {
          validation: "cuid",
          code: ae.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "cuid2")
        cb.test(t.data) || (i = this._getOrReturnCtx(t, i), ge(i, {
          validation: "cuid2",
          code: ae.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "ulid")
        ub.test(t.data) || (i = this._getOrReturnCtx(t, i), ge(i, {
          validation: "ulid",
          code: ae.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "url")
        try {
          new URL(t.data);
        } catch {
          i = this._getOrReturnCtx(t, i), ge(i, {
            validation: "url",
            code: ae.invalid_string,
            message: o.message
          }), r.dirty();
        }
      else o.kind === "regex" ? (o.regex.lastIndex = 0, o.regex.test(t.data) || (i = this._getOrReturnCtx(t, i), ge(i, {
        validation: "regex",
        code: ae.invalid_string,
        message: o.message
      }), r.dirty())) : o.kind === "trim" ? t.data = t.data.trim() : o.kind === "includes" ? t.data.includes(o.value, o.position) || (i = this._getOrReturnCtx(t, i), ge(i, {
        code: ae.invalid_string,
        validation: { includes: o.value, position: o.position },
        message: o.message
      }), r.dirty()) : o.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : o.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : o.kind === "startsWith" ? t.data.startsWith(o.value) || (i = this._getOrReturnCtx(t, i), ge(i, {
        code: ae.invalid_string,
        validation: { startsWith: o.value },
        message: o.message
      }), r.dirty()) : o.kind === "endsWith" ? t.data.endsWith(o.value) || (i = this._getOrReturnCtx(t, i), ge(i, {
        code: ae.invalid_string,
        validation: { endsWith: o.value },
        message: o.message
      }), r.dirty()) : o.kind === "datetime" ? g8(o).test(t.data) || (i = this._getOrReturnCtx(t, i), ge(i, {
        code: ae.invalid_string,
        validation: "datetime",
        message: o.message
      }), r.dirty()) : o.kind === "date" ? yb.test(t.data) || (i = this._getOrReturnCtx(t, i), ge(i, {
        code: ae.invalid_string,
        validation: "date",
        message: o.message
      }), r.dirty()) : o.kind === "time" ? bb(o).test(t.data) || (i = this._getOrReturnCtx(t, i), ge(i, {
        code: ae.invalid_string,
        validation: "time",
        message: o.message
      }), r.dirty()) : o.kind === "duration" ? pb.test(t.data) || (i = this._getOrReturnCtx(t, i), ge(i, {
        validation: "duration",
        code: ae.invalid_string,
        message: o.message
      }), r.dirty()) : o.kind === "ip" ? xb(t.data, o.version) || (i = this._getOrReturnCtx(t, i), ge(i, {
        validation: "ip",
        code: ae.invalid_string,
        message: o.message
      }), r.dirty()) : o.kind === "base64" ? vb.test(t.data) || (i = this._getOrReturnCtx(t, i), ge(i, {
        validation: "base64",
        code: ae.invalid_string,
        message: o.message
      }), r.dirty()) : Ge.assertNever(o);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((i) => t.test(i), {
      validation: n,
      code: ae.invalid_string,
      ...Me.errToObj(r)
    });
  }
  _addCheck(t) {
    return new t0({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...Me.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...Me.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...Me.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...Me.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...Me.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...Me.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...Me.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...Me.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...Me.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...Me.errToObj(t) });
  }
  datetime(t) {
    var n, r;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      local: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (n = t == null ? void 0 : t.offset) !== null && n !== void 0 ? n : !1,
      local: (r = t == null ? void 0 : t.local) !== null && r !== void 0 ? r : !1,
      ...Me.errToObj(t == null ? void 0 : t.message)
    });
  }
  date(t) {
    return this._addCheck({ kind: "date", message: t });
  }
  time(t) {
    return typeof t == "string" ? this._addCheck({
      kind: "time",
      precision: null,
      message: t
    }) : this._addCheck({
      kind: "time",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      ...Me.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...Me.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...Me.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...Me.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...Me.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...Me.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...Me.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...Me.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...Me.errToObj(n)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, Me.errToObj(t));
  }
  trim() {
    return new t0({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new t0({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new t0({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((t) => t.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((t) => t.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((t) => t.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((t) => t.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get isBase64() {
    return !!this._def.checks.find((t) => t.kind === "base64");
  }
  get minLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
t0.create = (e) => {
  var t;
  return new t0({
    checks: [],
    typeName: Fe.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Ie(e)
  });
};
function wb(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, i = n > r ? n : r, o = parseInt(e.toFixed(i).replace(".", "")), a = parseInt(t.toFixed(i).replace(".", ""));
  return o % a / Math.pow(10, i);
}
class ft extends Ze {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== be.number) {
      const o = this._getOrReturnCtx(t);
      return ge(o, {
        code: ae.invalid_type,
        expected: be.number,
        received: o.parsedType
      }), Pe;
    }
    let r;
    const i = new _2();
    for (const o of this._def.checks)
      o.kind === "int" ? Ge.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.invalid_type,
        expected: "integer",
        received: "float",
        message: o.message
      }), i.dirty()) : o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.too_small,
        minimum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), i.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.too_big,
        maximum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), i.dirty()) : o.kind === "multipleOf" ? wb(t.data, o.value) !== 0 && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), i.dirty()) : o.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.not_finite,
        message: o.message
      }), i.dirty()) : Ge.assertNever(o);
    return { status: i.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Me.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Me.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Me.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Me.toString(n));
  }
  setLimit(t, n, r, i) {
    return new ft({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: Me.toString(i)
        }
      ]
    });
  }
  _addCheck(t) {
    return new ft({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: Me.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: Me.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: Me.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: Me.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: Me.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Me.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: Me.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: Me.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: Me.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Ge.isInteger(t.value));
  }
  get isFinite() {
    let t = null, n = null;
    for (const r of this._def.checks) {
      if (r.kind === "finite" || r.kind === "int" || r.kind === "multipleOf")
        return !0;
      r.kind === "min" ? (n === null || r.value > n) && (n = r.value) : r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    }
    return Number.isFinite(n) && Number.isFinite(t);
  }
}
ft.create = (e) => new ft({
  checks: [],
  typeName: Fe.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Ie(e)
});
class dt extends Ze {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== be.bigint) {
      const o = this._getOrReturnCtx(t);
      return ge(o, {
        code: ae.invalid_type,
        expected: be.bigint,
        received: o.parsedType
      }), Pe;
    }
    let r;
    const i = new _2();
    for (const o of this._def.checks)
      o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.too_small,
        type: "bigint",
        minimum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), i.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.too_big,
        type: "bigint",
        maximum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), i.dirty()) : o.kind === "multipleOf" ? t.data % o.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), ge(r, {
        code: ae.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), i.dirty()) : Ge.assertNever(o);
    return { status: i.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Me.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Me.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Me.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Me.toString(n));
  }
  setLimit(t, n, r, i) {
    return new dt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: Me.toString(i)
        }
      ]
    });
  }
  _addCheck(t) {
    return new dt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: Me.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: Me.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: Me.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: Me.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Me.toString(n)
    });
  }
  get minValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t;
  }
}
dt.create = (e) => {
  var t;
  return new dt({
    checks: [],
    typeName: Fe.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Ie(e)
  });
};
class pn extends Ze {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== be.boolean) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: be.boolean,
        received: r.parsedType
      }), Pe;
    }
    return A2(t.data);
  }
}
pn.create = (e) => new pn({
  typeName: Fe.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Ie(e)
});
class It extends Ze {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== be.date) {
      const o = this._getOrReturnCtx(t);
      return ge(o, {
        code: ae.invalid_type,
        expected: be.date,
        received: o.parsedType
      }), Pe;
    }
    if (isNaN(t.data.getTime())) {
      const o = this._getOrReturnCtx(t);
      return ge(o, {
        code: ae.invalid_date
      }), Pe;
    }
    const r = new _2();
    let i;
    for (const o of this._def.checks)
      o.kind === "min" ? t.data.getTime() < o.value && (i = this._getOrReturnCtx(t, i), ge(i, {
        code: ae.too_small,
        message: o.message,
        inclusive: !0,
        exact: !1,
        minimum: o.value,
        type: "date"
      }), r.dirty()) : o.kind === "max" ? t.data.getTime() > o.value && (i = this._getOrReturnCtx(t, i), ge(i, {
        code: ae.too_big,
        message: o.message,
        inclusive: !0,
        exact: !1,
        maximum: o.value,
        type: "date"
      }), r.dirty()) : Ge.assertNever(o);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new It({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: Me.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: Me.toString(n)
    });
  }
  get minDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "min" && (t === null || n.value > t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const n of this._def.checks)
      n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    return t != null ? new Date(t) : null;
  }
}
It.create = (e) => new It({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: Fe.ZodDate,
  ...Ie(e)
});
class Br extends Ze {
  _parse(t) {
    if (this._getType(t) !== be.symbol) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: be.symbol,
        received: r.parsedType
      }), Pe;
    }
    return A2(t.data);
  }
}
Br.create = (e) => new Br({
  typeName: Fe.ZodSymbol,
  ...Ie(e)
});
class hn extends Ze {
  _parse(t) {
    if (this._getType(t) !== be.undefined) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: be.undefined,
        received: r.parsedType
      }), Pe;
    }
    return A2(t.data);
  }
}
hn.create = (e) => new hn({
  typeName: Fe.ZodUndefined,
  ...Ie(e)
});
class mn extends Ze {
  _parse(t) {
    if (this._getType(t) !== be.null) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: be.null,
        received: r.parsedType
      }), Pe;
    }
    return A2(t.data);
  }
}
mn.create = (e) => new mn({
  typeName: Fe.ZodNull,
  ...Ie(e)
});
class b1 extends Ze {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return A2(t.data);
  }
}
b1.create = (e) => new b1({
  typeName: Fe.ZodAny,
  ...Ie(e)
});
class Pt extends Ze {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return A2(t.data);
  }
}
Pt.create = (e) => new Pt({
  typeName: Fe.ZodUnknown,
  ...Ie(e)
});
class L0 extends Ze {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return ge(n, {
      code: ae.invalid_type,
      expected: be.never,
      received: n.parsedType
    }), Pe;
  }
}
L0.create = (e) => new L0({
  typeName: Fe.ZodNever,
  ...Ie(e)
});
class Ur extends Ze {
  _parse(t) {
    if (this._getType(t) !== be.undefined) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: be.void,
        received: r.parsedType
      }), Pe;
    }
    return A2(t.data);
  }
}
Ur.create = (e) => new Ur({
  typeName: Fe.ZodVoid,
  ...Ie(e)
});
class o0 extends Ze {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), i = this._def;
    if (n.parsedType !== be.array)
      return ge(n, {
        code: ae.invalid_type,
        expected: be.array,
        received: n.parsedType
      }), Pe;
    if (i.exactLength !== null) {
      const a = n.data.length > i.exactLength.value, s = n.data.length < i.exactLength.value;
      (a || s) && (ge(n, {
        code: a ? ae.too_big : ae.too_small,
        minimum: s ? i.exactLength.value : void 0,
        maximum: a ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), r.dirty());
    }
    if (i.minLength !== null && n.data.length < i.minLength.value && (ge(n, {
      code: ae.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), r.dirty()), i.maxLength !== null && n.data.length > i.maxLength.value && (ge(n, {
      code: ae.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((a, s) => i.type._parseAsync(new w0(n, a, n.path, s)))).then((a) => _2.mergeArray(r, a));
    const o = [...n.data].map((a, s) => i.type._parseSync(new w0(n, a, n.path, s)));
    return _2.mergeArray(r, o);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new o0({
      ...this._def,
      minLength: { value: t, message: Me.toString(n) }
    });
  }
  max(t, n) {
    return new o0({
      ...this._def,
      maxLength: { value: t, message: Me.toString(n) }
    });
  }
  length(t, n) {
    return new o0({
      ...this._def,
      exactLength: { value: t, message: Me.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
o0.create = (e, t) => new o0({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Fe.ZodArray,
  ...Ie(t)
});
function t1(e) {
  if (e instanceof f2) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = y0.create(t1(r));
    }
    return new f2({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof o0 ? new o0({
    ...e._def,
    type: t1(e.element)
  }) : e instanceof y0 ? y0.create(t1(e.unwrap())) : e instanceof ht ? ht.create(t1(e.unwrap())) : e instanceof _0 ? _0.create(e.items.map((t) => t1(t))) : e;
}
class f2 extends Ze {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = Ge.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== be.object) {
      const c = this._getOrReturnCtx(t);
      return ge(c, {
        code: ae.invalid_type,
        expected: be.object,
        received: c.parsedType
      }), Pe;
    }
    const { status: r, ctx: i } = this._processInputParams(t), { shape: o, keys: a } = this._getCached(), s = [];
    if (!(this._def.catchall instanceof L0 && this._def.unknownKeys === "strip"))
      for (const c in i.data)
        a.includes(c) || s.push(c);
    const l = [];
    for (const c of a) {
      const u = o[c], d = i.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: u._parse(new w0(i, d, i.path, c)),
        alwaysSet: c in i.data
      });
    }
    if (this._def.catchall instanceof L0) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const u of s)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: i.data[u] }
          });
      else if (c === "strict")
        s.length > 0 && (ge(i, {
          code: ae.unrecognized_keys,
          keys: s
        }), r.dirty());
      else if (c !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const u of s) {
        const d = i.data[u];
        l.push({
          key: { status: "valid", value: u },
          value: c._parse(
            new w0(i, d, i.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const u of l) {
        const d = await u.key, p = await u.value;
        c.push({
          key: d,
          value: p,
          alwaysSet: u.alwaysSet
        });
      }
      return c;
    }).then((c) => _2.mergeObjectSync(r, c)) : _2.mergeObjectSync(r, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return Me.errToObj, new f2({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var i, o, a, s;
          const l = (a = (o = (i = this._def).errorMap) === null || o === void 0 ? void 0 : o.call(i, n, r).message) !== null && a !== void 0 ? a : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (s = Me.errToObj(t).message) !== null && s !== void 0 ? s : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new f2({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new f2({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new f2({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new f2({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: Fe.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, n) {
    return this.augment({ [t]: n });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new f2({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return Ge.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new f2({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return Ge.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new f2({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return t1(this);
  }
  partial(t) {
    const n = {};
    return Ge.objectKeys(this.shape).forEach((r) => {
      const i = this.shape[r];
      t && !t[r] ? n[r] = i : n[r] = i.optional();
    }), new f2({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return Ge.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let o = this.shape[r];
        for (; o instanceof y0; )
          o = o._def.innerType;
        n[r] = o;
      }
    }), new f2({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return v8(Ge.objectKeys(this.shape));
  }
}
f2.create = (e, t) => new f2({
  shape: () => e,
  unknownKeys: "strip",
  catchall: L0.create(),
  typeName: Fe.ZodObject,
  ...Ie(t)
});
f2.strictCreate = (e, t) => new f2({
  shape: () => e,
  unknownKeys: "strict",
  catchall: L0.create(),
  typeName: Fe.ZodObject,
  ...Ie(t)
});
f2.lazycreate = (e, t) => new f2({
  shape: e,
  unknownKeys: "strip",
  catchall: L0.create(),
  typeName: Fe.ZodObject,
  ...Ie(t)
});
class Cn extends Ze {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function i(o) {
      for (const s of o)
        if (s.result.status === "valid")
          return s.result;
      for (const s of o)
        if (s.result.status === "dirty")
          return n.common.issues.push(...s.ctx.common.issues), s.result;
      const a = o.map((s) => new B2(s.ctx.common.issues));
      return ge(n, {
        code: ae.invalid_union,
        unionErrors: a
      }), Pe;
    }
    if (n.common.async)
      return Promise.all(r.map(async (o) => {
        const a = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await o._parseAsync({
            data: n.data,
            path: n.path,
            parent: a
          }),
          ctx: a
        };
      })).then(i);
    {
      let o;
      const a = [];
      for (const l of r) {
        const c = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, u = l._parseSync({
          data: n.data,
          path: n.path,
          parent: c
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !o && (o = { result: u, ctx: c }), c.common.issues.length && a.push(c.common.issues);
      }
      if (o)
        return n.common.issues.push(...o.ctx.common.issues), o.result;
      const s = a.map((l) => new B2(l));
      return ge(n, {
        code: ae.invalid_union,
        unionErrors: s
      }), Pe;
    }
  }
  get options() {
    return this._def.options;
  }
}
Cn.create = (e, t) => new Cn({
  options: e,
  typeName: Fe.ZodUnion,
  ...Ie(t)
});
const T0 = (e) => e instanceof yn ? T0(e.schema) : e instanceof s0 ? T0(e.innerType()) : e instanceof bn ? [e.value] : e instanceof pt ? e.options : e instanceof xn ? Ge.objectValues(e.enum) : e instanceof wn ? T0(e._def.innerType) : e instanceof hn ? [void 0] : e instanceof mn ? [null] : e instanceof y0 ? [void 0, ...T0(e.unwrap())] : e instanceof ht ? [null, ...T0(e.unwrap())] : e instanceof Is || e instanceof En ? T0(e.unwrap()) : e instanceof _n ? T0(e._def.innerType) : [];
class Ri extends Ze {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== be.object)
      return ge(n, {
        code: ae.invalid_type,
        expected: be.object,
        received: n.parsedType
      }), Pe;
    const r = this.discriminator, i = n.data[r], o = this.optionsMap.get(i);
    return o ? n.common.async ? o._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : o._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (ge(n, {
      code: ae.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), Pe);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(t, n, r) {
    const i = /* @__PURE__ */ new Map();
    for (const o of n) {
      const a = T0(o.shape[t]);
      if (!a.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const s of a) {
        if (i.has(s))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(s)}`);
        i.set(s, o);
      }
    }
    return new Ri({
      typeName: Fe.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: i,
      ...Ie(r)
    });
  }
}
function qa(e, t) {
  const n = et(e), r = et(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === be.object && r === be.object) {
    const i = Ge.objectKeys(t), o = Ge.objectKeys(e).filter((s) => i.indexOf(s) !== -1), a = { ...e, ...t };
    for (const s of o) {
      const l = qa(e[s], t[s]);
      if (!l.valid)
        return { valid: !1 };
      a[s] = l.data;
    }
    return { valid: !0, data: a };
  } else if (n === be.array && r === be.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const i = [];
    for (let o = 0; o < e.length; o++) {
      const a = e[o], s = t[o], l = qa(a, s);
      if (!l.valid)
        return { valid: !1 };
      i.push(l.data);
    }
    return { valid: !0, data: i };
  } else return n === be.date && r === be.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class gn extends Ze {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), i = (o, a) => {
      if (Ua(o) || Ua(a))
        return Pe;
      const s = qa(o.value, a.value);
      return s.valid ? ((Wa(o) || Wa(a)) && n.dirty(), { status: n.value, value: s.data }) : (ge(r, {
        code: ae.invalid_intersection_types
      }), Pe);
    };
    return r.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      }),
      this._def.right._parseAsync({
        data: r.data,
        path: r.path,
        parent: r
      })
    ]).then(([o, a]) => i(o, a)) : i(this._def.left._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }), this._def.right._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }));
  }
}
gn.create = (e, t, n) => new gn({
  left: e,
  right: t,
  typeName: Fe.ZodIntersection,
  ...Ie(n)
});
class _0 extends Ze {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== be.array)
      return ge(r, {
        code: ae.invalid_type,
        expected: be.array,
        received: r.parsedType
      }), Pe;
    if (r.data.length < this._def.items.length)
      return ge(r, {
        code: ae.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), Pe;
    !this._def.rest && r.data.length > this._def.items.length && (ge(r, {
      code: ae.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const o = [...r.data].map((a, s) => {
      const l = this._def.items[s] || this._def.rest;
      return l ? l._parse(new w0(r, a, r.path, s)) : null;
    }).filter((a) => !!a);
    return r.common.async ? Promise.all(o).then((a) => _2.mergeArray(n, a)) : _2.mergeArray(n, o);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new _0({
      ...this._def,
      rest: t
    });
  }
}
_0.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new _0({
    items: e,
    typeName: Fe.ZodTuple,
    rest: null,
    ...Ie(t)
  });
};
class vn extends Ze {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== be.object)
      return ge(r, {
        code: ae.invalid_type,
        expected: be.object,
        received: r.parsedType
      }), Pe;
    const i = [], o = this._def.keyType, a = this._def.valueType;
    for (const s in r.data)
      i.push({
        key: o._parse(new w0(r, s, r.path, s)),
        value: a._parse(new w0(r, r.data[s], r.path, s)),
        alwaysSet: s in r.data
      });
    return r.common.async ? _2.mergeObjectAsync(n, i) : _2.mergeObjectSync(n, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof Ze ? new vn({
      keyType: t,
      valueType: n,
      typeName: Fe.ZodRecord,
      ...Ie(r)
    }) : new vn({
      keyType: t0.create(),
      valueType: t,
      typeName: Fe.ZodRecord,
      ...Ie(n)
    });
  }
}
class Wr extends Ze {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== be.map)
      return ge(r, {
        code: ae.invalid_type,
        expected: be.map,
        received: r.parsedType
      }), Pe;
    const i = this._def.keyType, o = this._def.valueType, a = [...r.data.entries()].map(([s, l], c) => ({
      key: i._parse(new w0(r, s, r.path, [c, "key"])),
      value: o._parse(new w0(r, l, r.path, [c, "value"]))
    }));
    if (r.common.async) {
      const s = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of a) {
          const c = await l.key, u = await l.value;
          if (c.status === "aborted" || u.status === "aborted")
            return Pe;
          (c.status === "dirty" || u.status === "dirty") && n.dirty(), s.set(c.value, u.value);
        }
        return { status: n.value, value: s };
      });
    } else {
      const s = /* @__PURE__ */ new Map();
      for (const l of a) {
        const c = l.key, u = l.value;
        if (c.status === "aborted" || u.status === "aborted")
          return Pe;
        (c.status === "dirty" || u.status === "dirty") && n.dirty(), s.set(c.value, u.value);
      }
      return { status: n.value, value: s };
    }
  }
}
Wr.create = (e, t, n) => new Wr({
  valueType: t,
  keyType: e,
  typeName: Fe.ZodMap,
  ...Ie(n)
});
class Dt extends Ze {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== be.set)
      return ge(r, {
        code: ae.invalid_type,
        expected: be.set,
        received: r.parsedType
      }), Pe;
    const i = this._def;
    i.minSize !== null && r.data.size < i.minSize.value && (ge(r, {
      code: ae.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), n.dirty()), i.maxSize !== null && r.data.size > i.maxSize.value && (ge(r, {
      code: ae.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), n.dirty());
    const o = this._def.valueType;
    function a(l) {
      const c = /* @__PURE__ */ new Set();
      for (const u of l) {
        if (u.status === "aborted")
          return Pe;
        u.status === "dirty" && n.dirty(), c.add(u.value);
      }
      return { status: n.value, value: c };
    }
    const s = [...r.data.values()].map((l, c) => o._parse(new w0(r, l, r.path, c)));
    return r.common.async ? Promise.all(s).then((l) => a(l)) : a(s);
  }
  min(t, n) {
    return new Dt({
      ...this._def,
      minSize: { value: t, message: Me.toString(n) }
    });
  }
  max(t, n) {
    return new Dt({
      ...this._def,
      maxSize: { value: t, message: Me.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Dt.create = (e, t) => new Dt({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Fe.ZodSet,
  ...Ie(t)
});
class d1 extends Ze {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== be.function)
      return ge(n, {
        code: ae.invalid_type,
        expected: be.function,
        received: n.parsedType
      }), Pe;
    function r(s, l) {
      return zr({
        data: s,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Zr(),
          y1
        ].filter((c) => !!c),
        issueData: {
          code: ae.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function i(s, l) {
      return zr({
        data: s,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Zr(),
          y1
        ].filter((c) => !!c),
        issueData: {
          code: ae.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const o = { errorMap: n.common.contextualErrorMap }, a = n.data;
    if (this._def.returns instanceof x1) {
      const s = this;
      return A2(async function(...l) {
        const c = new B2([]), u = await s._def.args.parseAsync(l, o).catch((m) => {
          throw c.addIssue(r(l, m)), c;
        }), d = await Reflect.apply(a, this, u);
        return await s._def.returns._def.type.parseAsync(d, o).catch((m) => {
          throw c.addIssue(i(d, m)), c;
        });
      });
    } else {
      const s = this;
      return A2(function(...l) {
        const c = s._def.args.safeParse(l, o);
        if (!c.success)
          throw new B2([r(l, c.error)]);
        const u = Reflect.apply(a, this, c.data), d = s._def.returns.safeParse(u, o);
        if (!d.success)
          throw new B2([i(u, d.error)]);
        return d.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new d1({
      ...this._def,
      args: _0.create(t).rest(Pt.create())
    });
  }
  returns(t) {
    return new d1({
      ...this._def,
      returns: t
    });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, n, r) {
    return new d1({
      args: t || _0.create([]).rest(Pt.create()),
      returns: n || Pt.create(),
      typeName: Fe.ZodFunction,
      ...Ie(r)
    });
  }
}
class yn extends Ze {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
yn.create = (e, t) => new yn({
  getter: e,
  typeName: Fe.ZodLazy,
  ...Ie(t)
});
class bn extends Ze {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return ge(n, {
        received: n.data,
        code: ae.invalid_literal,
        expected: this._def.value
      }), Pe;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
bn.create = (e, t) => new bn({
  value: e,
  typeName: Fe.ZodLiteral,
  ...Ie(t)
});
function v8(e, t) {
  return new pt({
    values: e,
    typeName: Fe.ZodEnum,
    ...Ie(t)
  });
}
class pt extends Ze {
  constructor() {
    super(...arguments), $1.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ge(n, {
        expected: Ge.joinValues(r),
        received: n.parsedType,
        code: ae.invalid_type
      }), Pe;
    }
    if ($r(this, $1) || h8(this, $1, new Set(this._def.values)), !$r(this, $1).has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ge(n, {
        received: n.data,
        code: ae.invalid_enum_value,
        options: r
      }), Pe;
    }
    return A2(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Values() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  get Enum() {
    const t = {};
    for (const n of this._def.values)
      t[n] = n;
    return t;
  }
  extract(t, n = this._def) {
    return pt.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return pt.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
$1 = /* @__PURE__ */ new WeakMap();
pt.create = v8;
class xn extends Ze {
  constructor() {
    super(...arguments), B1.set(this, void 0);
  }
  _parse(t) {
    const n = Ge.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== be.string && r.parsedType !== be.number) {
      const i = Ge.objectValues(n);
      return ge(r, {
        expected: Ge.joinValues(i),
        received: r.parsedType,
        code: ae.invalid_type
      }), Pe;
    }
    if ($r(this, B1) || h8(this, B1, new Set(Ge.getValidEnumValues(this._def.values))), !$r(this, B1).has(t.data)) {
      const i = Ge.objectValues(n);
      return ge(r, {
        received: r.data,
        code: ae.invalid_enum_value,
        options: i
      }), Pe;
    }
    return A2(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
B1 = /* @__PURE__ */ new WeakMap();
xn.create = (e, t) => new xn({
  values: e,
  typeName: Fe.ZodNativeEnum,
  ...Ie(t)
});
class x1 extends Ze {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== be.promise && n.common.async === !1)
      return ge(n, {
        code: ae.invalid_type,
        expected: be.promise,
        received: n.parsedType
      }), Pe;
    const r = n.parsedType === be.promise ? n.data : Promise.resolve(n.data);
    return A2(r.then((i) => this._def.type.parseAsync(i, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
x1.create = (e, t) => new x1({
  type: e,
  typeName: Fe.ZodPromise,
  ...Ie(t)
});
class s0 extends Ze {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Fe.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), i = this._def.effect || null, o = {
      addIssue: (a) => {
        ge(r, a), a.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (o.addIssue = o.addIssue.bind(o), i.type === "preprocess") {
      const a = i.transform(r.data, o);
      if (r.common.async)
        return Promise.resolve(a).then(async (s) => {
          if (n.value === "aborted")
            return Pe;
          const l = await this._def.schema._parseAsync({
            data: s,
            path: r.path,
            parent: r
          });
          return l.status === "aborted" ? Pe : l.status === "dirty" || n.value === "dirty" ? o1(l.value) : l;
        });
      {
        if (n.value === "aborted")
          return Pe;
        const s = this._def.schema._parseSync({
          data: a,
          path: r.path,
          parent: r
        });
        return s.status === "aborted" ? Pe : s.status === "dirty" || n.value === "dirty" ? o1(s.value) : s;
      }
    }
    if (i.type === "refinement") {
      const a = (s) => {
        const l = i.refinement(s, o);
        if (r.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return s;
      };
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return s.status === "aborted" ? Pe : (s.status === "dirty" && n.dirty(), a(s.value), { status: n.value, value: s.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => s.status === "aborted" ? Pe : (s.status === "dirty" && n.dirty(), a(s.value).then(() => ({ status: n.value, value: s.value }))));
    }
    if (i.type === "transform")
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!fn(a))
          return a;
        const s = i.transform(a.value, o);
        if (s instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: s };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((a) => fn(a) ? Promise.resolve(i.transform(a.value, o)).then((s) => ({ status: n.value, value: s })) : a);
    Ge.assertNever(i);
  }
}
s0.create = (e, t, n) => new s0({
  schema: e,
  typeName: Fe.ZodEffects,
  effect: t,
  ...Ie(n)
});
s0.createWithPreprocess = (e, t, n) => new s0({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Fe.ZodEffects,
  ...Ie(n)
});
class y0 extends Ze {
  _parse(t) {
    return this._getType(t) === be.undefined ? A2(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
y0.create = (e, t) => new y0({
  innerType: e,
  typeName: Fe.ZodOptional,
  ...Ie(t)
});
class ht extends Ze {
  _parse(t) {
    return this._getType(t) === be.null ? A2(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ht.create = (e, t) => new ht({
  innerType: e,
  typeName: Fe.ZodNullable,
  ...Ie(t)
});
class wn extends Ze {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === be.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
wn.create = (e, t) => new wn({
  innerType: e,
  typeName: Fe.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Ie(t)
});
class _n extends Ze {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, i = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return dn(i) ? i.then((o) => ({
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new B2(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new B2(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
_n.create = (e, t) => new _n({
  innerType: e,
  typeName: Fe.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Ie(t)
});
class qr extends Ze {
  _parse(t) {
    if (this._getType(t) !== be.nan) {
      const r = this._getOrReturnCtx(t);
      return ge(r, {
        code: ae.invalid_type,
        expected: be.nan,
        received: r.parsedType
      }), Pe;
    }
    return { status: "valid", value: t.data };
  }
}
qr.create = (e) => new qr({
  typeName: Fe.ZodNaN,
  ...Ie(e)
});
const _b = Symbol("zod_brand");
class Is extends Ze {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = n.data;
    return this._def.type._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Vn extends Ze {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const o = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? Pe : o.status === "dirty" ? (n.dirty(), o1(o.value)) : this._def.out._parseAsync({
          data: o.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const i = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return i.status === "aborted" ? Pe : i.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: i.value
      }) : this._def.out._parseSync({
        data: i.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(t, n) {
    return new Vn({
      in: t,
      out: n,
      typeName: Fe.ZodPipeline
    });
  }
}
class En extends Ze {
  _parse(t) {
    const n = this._def.innerType._parse(t), r = (i) => (fn(i) && (i.value = Object.freeze(i.value)), i);
    return dn(n) ? n.then((i) => r(i)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
En.create = (e, t) => new En({
  innerType: e,
  typeName: Fe.ZodReadonly,
  ...Ie(t)
});
function y8(e, t = {}, n) {
  return e ? b1.create().superRefine((r, i) => {
    var o, a;
    if (!e(r)) {
      const s = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, l = (a = (o = s.fatal) !== null && o !== void 0 ? o : n) !== null && a !== void 0 ? a : !0, c = typeof s == "string" ? { message: s } : s;
      i.addIssue({ code: "custom", ...c, fatal: l });
    }
  }) : b1.create();
}
const Eb = {
  object: f2.lazycreate
};
var Fe;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(Fe || (Fe = {}));
const Sb = (e, t = {
  message: `Input not instance of ${e.name}`
}) => y8((n) => n instanceof e, t), b8 = t0.create, x8 = ft.create, Mb = qr.create, Ab = dt.create, w8 = pn.create, Tb = It.create, Ob = Br.create, Rb = hn.create, Fb = mn.create, Pb = b1.create, kb = Pt.create, Hb = L0.create, Nb = Ur.create, Lb = o0.create, Vb = f2.create, jb = f2.strictCreate, Ib = Cn.create, Db = Ri.create, Zb = gn.create, zb = _0.create, $b = vn.create, Bb = Wr.create, Ub = Dt.create, Wb = d1.create, qb = yn.create, Yb = bn.create, Gb = pt.create, Kb = xn.create, Xb = x1.create, P9 = s0.create, Jb = y0.create, Qb = ht.create, ex = s0.createWithPreprocess, tx = Vn.create, nx = () => b8().optional(), rx = () => x8().optional(), ix = () => w8().optional(), ox = {
  string: (e) => t0.create({ ...e, coerce: !0 }),
  number: (e) => ft.create({ ...e, coerce: !0 }),
  boolean: (e) => pn.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => dt.create({ ...e, coerce: !0 }),
  date: (e) => It.create({ ...e, coerce: !0 })
}, ax = Pe;
var tt = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: y1,
  setErrorMap: ab,
  getErrorMap: Zr,
  makeIssue: zr,
  EMPTY_PATH: sb,
  addIssueToContext: ge,
  ParseStatus: _2,
  INVALID: Pe,
  DIRTY: o1,
  OK: A2,
  isAborted: Ua,
  isDirty: Wa,
  isValid: fn,
  isAsync: dn,
  get util() {
    return Ge;
  },
  get objectUtil() {
    return Ba;
  },
  ZodParsedType: be,
  getParsedType: et,
  ZodType: Ze,
  datetimeRegex: g8,
  ZodString: t0,
  ZodNumber: ft,
  ZodBigInt: dt,
  ZodBoolean: pn,
  ZodDate: It,
  ZodSymbol: Br,
  ZodUndefined: hn,
  ZodNull: mn,
  ZodAny: b1,
  ZodUnknown: Pt,
  ZodNever: L0,
  ZodVoid: Ur,
  ZodArray: o0,
  ZodObject: f2,
  ZodUnion: Cn,
  ZodDiscriminatedUnion: Ri,
  ZodIntersection: gn,
  ZodTuple: _0,
  ZodRecord: vn,
  ZodMap: Wr,
  ZodSet: Dt,
  ZodFunction: d1,
  ZodLazy: yn,
  ZodLiteral: bn,
  ZodEnum: pt,
  ZodNativeEnum: xn,
  ZodPromise: x1,
  ZodEffects: s0,
  ZodTransformer: s0,
  ZodOptional: y0,
  ZodNullable: ht,
  ZodDefault: wn,
  ZodCatch: _n,
  ZodNaN: qr,
  BRAND: _b,
  ZodBranded: Is,
  ZodPipeline: Vn,
  ZodReadonly: En,
  custom: y8,
  Schema: Ze,
  ZodSchema: Ze,
  late: Eb,
  get ZodFirstPartyTypeKind() {
    return Fe;
  },
  coerce: ox,
  any: Pb,
  array: Lb,
  bigint: Ab,
  boolean: w8,
  date: Tb,
  discriminatedUnion: Db,
  effect: P9,
  enum: Gb,
  function: Wb,
  instanceof: Sb,
  intersection: Zb,
  lazy: qb,
  literal: Yb,
  map: Bb,
  nan: Mb,
  nativeEnum: Kb,
  never: Hb,
  null: Fb,
  nullable: Qb,
  number: x8,
  object: Vb,
  oboolean: ix,
  onumber: rx,
  optional: Jb,
  ostring: nx,
  pipeline: tx,
  preprocess: ex,
  promise: Xb,
  record: $b,
  set: Ub,
  strictObject: jb,
  string: b8,
  symbol: Ob,
  transformer: P9,
  tuple: zb,
  undefined: Rb,
  union: Ib,
  unknown: kb,
  void: Nb,
  NEVER: ax,
  ZodIssueCode: ae,
  quotelessJson: ob,
  ZodError: B2
});
function Re(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(i) {
    if (e == null || e(i), n === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
function sx(e, t) {
  const n = y.createContext(t);
  function r(o) {
    const { children: a, ...s } = o, l = y.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ h.jsx(n.Provider, { value: l, children: a });
  }
  function i(o) {
    const a = y.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${o}\` must be used within \`${e}\``);
  }
  return r.displayName = e + "Provider", [r, i];
}
function $t(e, t = []) {
  let n = [];
  function r(o, a) {
    const s = y.createContext(a), l = n.length;
    n = [...n, a];
    function c(d) {
      const { scope: p, children: m, ...C } = d, g = (p == null ? void 0 : p[e][l]) || s, b = y.useMemo(() => C, Object.values(C));
      return /* @__PURE__ */ h.jsx(g.Provider, { value: b, children: m });
    }
    function u(d, p) {
      const m = (p == null ? void 0 : p[e][l]) || s, C = y.useContext(m);
      if (C) return C;
      if (a !== void 0) return a;
      throw new Error(`\`${d}\` must be used within \`${o}\``);
    }
    return c.displayName = o + "Provider", [c, u];
  }
  const i = () => {
    const o = n.map((a) => y.createContext(a));
    return function(s) {
      const l = (s == null ? void 0 : s[e]) || o;
      return y.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: l } }),
        [s, l]
      );
    };
  };
  return i.scopeName = e, [r, lx(i, ...t)];
}
function lx(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(o) {
      const a = r.reduce((s, { useScope: l, scopeName: c }) => {
        const d = l(o)[`__scope${c}`];
        return { ...s, ...d };
      }, {});
      return y.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
var mt = globalThis != null && globalThis.document ? y.useLayoutEffect : () => {
}, cx = y.useId || (() => {
}), ux = 0;
function wr(e) {
  const [t, n] = y.useState(cx());
  return mt(() => {
    n((r) => r ?? String(ux++));
  }, [e]), t ? `radix-${t}` : "";
}
function E2(e) {
  const t = y.useRef(e);
  return y.useEffect(() => {
    t.current = e;
  }), y.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Ds({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, i] = fx({ defaultProp: t, onChange: n }), o = e !== void 0, a = o ? e : r, s = E2(n), l = y.useCallback(
    (c) => {
      if (o) {
        const d = typeof c == "function" ? c(e) : c;
        d !== e && s(d);
      } else
        i(c);
    },
    [o, e, i, s]
  );
  return [a, l];
}
function fx({
  defaultProp: e,
  onChange: t
}) {
  const n = y.useState(e), [r] = n, i = y.useRef(r), o = E2(t);
  return y.useEffect(() => {
    i.current !== r && (o(r), i.current = r);
  }, [r, i, o]), n;
}
function dx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = E2(e);
  y.useEffect(() => {
    const r = (i) => {
      i.key === "Escape" && n(i);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var px = "DismissableLayer", Ya = "dismissableLayer.update", hx = "dismissableLayer.pointerDownOutside", mx = "dismissableLayer.focusOutside", k9, _8 = y.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Fi = y.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: i,
      onFocusOutside: o,
      onInteractOutside: a,
      onDismiss: s,
      ...l
    } = e, c = y.useContext(_8), [u, d] = y.useState(null), p = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, m] = y.useState({}), C = y2(t, (F) => d(F)), g = Array.from(c.layers), [b] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1), x = g.indexOf(b), w = u ? g.indexOf(u) : -1, E = c.layersWithOutsidePointerEventsDisabled.size > 0, S = w >= x, _ = gx((F) => {
      const $ = F.target, le = [...c.branches].some((pe) => pe.contains($));
      !S || le || (i == null || i(F), a == null || a(F), F.defaultPrevented || s == null || s());
    }, p), P = vx((F) => {
      const $ = F.target;
      [...c.branches].some((pe) => pe.contains($)) || (o == null || o(F), a == null || a(F), F.defaultPrevented || s == null || s());
    }, p);
    return dx((F) => {
      w === c.layers.size - 1 && (r == null || r(F), !F.defaultPrevented && s && (F.preventDefault(), s()));
    }, p), y.useEffect(() => {
      if (u)
        return n && (c.layersWithOutsidePointerEventsDisabled.size === 0 && (k9 = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), c.layersWithOutsidePointerEventsDisabled.add(u)), c.layers.add(u), H9(), () => {
          n && c.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = k9);
        };
    }, [u, p, n, c]), y.useEffect(() => () => {
      u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), H9());
    }, [u, c]), y.useEffect(() => {
      const F = () => m({});
      return document.addEventListener(Ya, F), () => document.removeEventListener(Ya, F);
    }, []), /* @__PURE__ */ h.jsx(
      e2.div,
      {
        ...l,
        ref: C,
        style: {
          pointerEvents: E ? S ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Re(e.onFocusCapture, P.onFocusCapture),
        onBlurCapture: Re(e.onBlurCapture, P.onBlurCapture),
        onPointerDownCapture: Re(
          e.onPointerDownCapture,
          _.onPointerDownCapture
        )
      }
    );
  }
);
Fi.displayName = px;
var Cx = "DismissableLayerBranch", E8 = y.forwardRef((e, t) => {
  const n = y.useContext(_8), r = y.useRef(null), i = y2(t, r);
  return y.useEffect(() => {
    const o = r.current;
    if (o)
      return n.branches.add(o), () => {
        n.branches.delete(o);
      };
  }, [n.branches]), /* @__PURE__ */ h.jsx(e2.div, { ...e, ref: i });
});
E8.displayName = Cx;
function gx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = E2(e), r = y.useRef(!1), i = y.useRef(() => {
  });
  return y.useEffect(() => {
    const o = (s) => {
      if (s.target && !r.current) {
        let l = function() {
          S8(
            hx,
            n,
            c,
            { discrete: !0 }
          );
        };
        const c = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = l, t.addEventListener("click", i.current, { once: !0 })) : l();
      } else
        t.removeEventListener("click", i.current);
      r.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", o), t.removeEventListener("click", i.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function vx(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = E2(e), r = y.useRef(!1);
  return y.useEffect(() => {
    const i = (o) => {
      o.target && !r.current && S8(mx, n, { originalEvent: o }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function H9() {
  const e = new CustomEvent(Ya);
  document.dispatchEvent(e);
}
function S8(e, t, n, { discrete: r }) {
  const i = n.originalEvent.target, o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }), r ? Es(i, o) : i.dispatchEvent(o);
}
var yx = Fi, bx = E8, Uo = "focusScope.autoFocusOnMount", Wo = "focusScope.autoFocusOnUnmount", N9 = { bubbles: !1, cancelable: !0 }, xx = "FocusScope", Zs = y.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: i,
    onUnmountAutoFocus: o,
    ...a
  } = e, [s, l] = y.useState(null), c = E2(i), u = E2(o), d = y.useRef(null), p = y2(t, (g) => l(g)), m = y.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  y.useEffect(() => {
    if (r) {
      let g = function(E) {
        if (m.paused || !s) return;
        const S = E.target;
        s.contains(S) ? d.current = S : J0(d.current, { select: !0 });
      }, b = function(E) {
        if (m.paused || !s) return;
        const S = E.relatedTarget;
        S !== null && (s.contains(S) || J0(d.current, { select: !0 }));
      }, x = function(E) {
        if (document.activeElement === document.body)
          for (const _ of E)
            _.removedNodes.length > 0 && J0(s);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", b);
      const w = new MutationObserver(x);
      return s && w.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", b), w.disconnect();
      };
    }
  }, [r, s, m.paused]), y.useEffect(() => {
    if (s) {
      V9.add(m);
      const g = document.activeElement;
      if (!s.contains(g)) {
        const x = new CustomEvent(Uo, N9);
        s.addEventListener(Uo, c), s.dispatchEvent(x), x.defaultPrevented || (wx(Ax(M8(s)), { select: !0 }), document.activeElement === g && J0(s));
      }
      return () => {
        s.removeEventListener(Uo, c), setTimeout(() => {
          const x = new CustomEvent(Wo, N9);
          s.addEventListener(Wo, u), s.dispatchEvent(x), x.defaultPrevented || J0(g ?? document.body, { select: !0 }), s.removeEventListener(Wo, u), V9.remove(m);
        }, 0);
      };
    }
  }, [s, c, u, m]);
  const C = y.useCallback(
    (g) => {
      if (!n && !r || m.paused) return;
      const b = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, x = document.activeElement;
      if (b && x) {
        const w = g.currentTarget, [E, S] = _x(w);
        E && S ? !g.shiftKey && x === S ? (g.preventDefault(), n && J0(E, { select: !0 })) : g.shiftKey && x === E && (g.preventDefault(), n && J0(S, { select: !0 })) : x === w && g.preventDefault();
      }
    },
    [n, r, m.paused]
  );
  return /* @__PURE__ */ h.jsx(e2.div, { tabIndex: -1, ...a, ref: p, onKeyDown: C });
});
Zs.displayName = xx;
function wx(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (J0(r, { select: t }), document.activeElement !== n) return;
}
function _x(e) {
  const t = M8(e), n = L9(t, e), r = L9(t.reverse(), e);
  return [n, r];
}
function M8(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const i = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || i ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function L9(e, t) {
  for (const n of e)
    if (!Ex(n, { upTo: t })) return n;
}
function Ex(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function Sx(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function J0(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && Sx(e) && t && e.select();
  }
}
var V9 = Mx();
function Mx() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = j9(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = j9(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function j9(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function Ax(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Tx = "Portal", Pi = y.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [i, o] = y.useState(!1);
  mt(() => o(!0), []);
  const a = n || i && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return a ? K6.createPortal(/* @__PURE__ */ h.jsx(e2.div, { ...r, ref: t }), a) : null;
});
Pi.displayName = Tx;
function Ox(e, t) {
  return y.useReducer((n, r) => t[n][r] ?? n, e);
}
var Z0 = (e) => {
  const { present: t, children: n } = e, r = Rx(t), i = typeof n == "function" ? n({ present: r.isPresent }) : y.Children.only(n), o = y2(r.ref, Fx(i));
  return typeof n == "function" || r.isPresent ? y.cloneElement(i, { ref: o }) : null;
};
Z0.displayName = "Presence";
function Rx(e) {
  const [t, n] = y.useState(), r = y.useRef({}), i = y.useRef(e), o = y.useRef("none"), a = e ? "mounted" : "unmounted", [s, l] = Ox(a, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return y.useEffect(() => {
    const c = Qn(r.current);
    o.current = s === "mounted" ? c : "none";
  }, [s]), mt(() => {
    const c = r.current, u = i.current;
    if (u !== e) {
      const p = o.current, m = Qn(c);
      e ? l("MOUNT") : m === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && p !== m ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, l]), mt(() => {
    if (t) {
      const c = (d) => {
        const m = Qn(r.current).includes(d.animationName);
        d.target === t && m && ai.flushSync(() => l("ANIMATION_END"));
      }, u = (d) => {
        d.target === t && (o.current = Qn(r.current));
      };
      return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", c), t.addEventListener("animationend", c), () => {
        t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", c), t.removeEventListener("animationend", c);
      };
    } else
      l("ANIMATION_END");
  }, [t, l]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: y.useCallback((c) => {
      c && (r.current = getComputedStyle(c)), n(c);
    }, [])
  };
}
function Qn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function Fx(e) {
  var r, i;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var qo = 0;
function A8() {
  y.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? I9()), document.body.insertAdjacentElement("beforeend", e[1] ?? I9()), qo++, () => {
      qo === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), qo--;
    };
  }, []);
}
function I9() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var p0 = function() {
  return p0 = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, p0.apply(this, arguments);
};
function T8(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function Px(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, o; r < i; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var _r = "right-scroll-bar-position", Er = "width-before-scroll-bar", kx = "with-scroll-bars-hidden", Hx = "--removed-body-scroll-bar-size";
function Yo(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Nx(e, t) {
  var n = F0(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var i = n.value;
          i !== r && (n.value = r, n.callback(r, i));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var Lx = typeof window < "u" ? y.useLayoutEffect : y.useEffect, D9 = /* @__PURE__ */ new WeakMap();
function Vx(e, t) {
  var n = Nx(null, function(r) {
    return e.forEach(function(i) {
      return Yo(i, r);
    });
  });
  return Lx(function() {
    var r = D9.get(n);
    if (r) {
      var i = new Set(r), o = new Set(e), a = n.current;
      i.forEach(function(s) {
        o.has(s) || Yo(s, null);
      }), o.forEach(function(s) {
        i.has(s) || Yo(s, a);
      });
    }
    D9.set(n, e);
  }, [e]), n;
}
function jx(e) {
  return e;
}
function Ix(e, t) {
  t === void 0 && (t = jx);
  var n = [], r = !1, i = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(o) {
      var a = t(o, r);
      return n.push(a), function() {
        n = n.filter(function(s) {
          return s !== a;
        });
      };
    },
    assignSyncMedium: function(o) {
      for (r = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(o);
      }
      n = {
        push: function(s) {
          return o(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(o) {
      r = !0;
      var a = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(o), a = n;
      }
      var l = function() {
        var u = a;
        a = [], u.forEach(o);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), n = {
        push: function(u) {
          a.push(u), c();
        },
        filter: function(u) {
          return a = a.filter(u), n;
        }
      };
    }
  };
  return i;
}
function Dx(e) {
  e === void 0 && (e = {});
  var t = Ix(null);
  return t.options = p0({ async: !0, ssr: !1 }, e), t;
}
var O8 = function(e) {
  var t = e.sideCar, n = T8(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return y.createElement(r, p0({}, n));
};
O8.isSideCarExport = !0;
function Zx(e, t) {
  return e.useMedium(t), O8;
}
var R8 = Dx(), Go = function() {
}, ki = y.forwardRef(function(e, t) {
  var n = y.useRef(null), r = y.useState({
    onScrollCapture: Go,
    onWheelCapture: Go,
    onTouchMoveCapture: Go
  }), i = r[0], o = r[1], a = e.forwardProps, s = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, m = e.noIsolation, C = e.inert, g = e.allowPinchZoom, b = e.as, x = b === void 0 ? "div" : b, w = e.gapMode, E = T8(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), S = p, _ = Vx([n, t]), P = p0(p0({}, E), i);
  return y.createElement(
    y.Fragment,
    null,
    u && y.createElement(S, { sideCar: R8, removeScrollBar: c, shards: d, noIsolation: m, inert: C, setCallbacks: o, allowPinchZoom: !!g, lockRef: n, gapMode: w }),
    a ? y.cloneElement(y.Children.only(s), p0(p0({}, P), { ref: _ })) : y.createElement(x, p0({}, P, { className: l, ref: _ }), s)
  );
});
ki.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ki.classNames = {
  fullWidth: Er,
  zeroRight: _r
};
var zx = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function $x() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = zx();
  return t && e.setAttribute("nonce", t), e;
}
function Bx(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ux(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Wx = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = $x()) && (Bx(t, n), Ux(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, qx = function() {
  var e = Wx();
  return function(t, n) {
    y.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, F8 = function() {
  var e = qx(), t = function(n) {
    var r = n.styles, i = n.dynamic;
    return e(r, i), null;
  };
  return t;
}, Yx = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Ko = function(e) {
  return parseInt(e || "", 10) || 0;
}, Gx = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Ko(n), Ko(r), Ko(i)];
}, Kx = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return Yx;
  var t = Gx(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, Xx = F8(), p1 = "data-scroll-locked", Jx = function(e, t, n, r) {
  var i = e.left, o = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(kx, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(p1, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(i, `px;
    padding-top: `).concat(o, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(_r, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Er, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(_r, " .").concat(_r, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Er, " .").concat(Er, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(p1, `] {
    `).concat(Hx, ": ").concat(s, `px;
  }
`);
}, Z9 = function() {
  var e = parseInt(document.body.getAttribute(p1) || "0", 10);
  return isFinite(e) ? e : 0;
}, Qx = function() {
  y.useEffect(function() {
    return document.body.setAttribute(p1, (Z9() + 1).toString()), function() {
      var e = Z9() - 1;
      e <= 0 ? document.body.removeAttribute(p1) : document.body.setAttribute(p1, e.toString());
    };
  }, []);
}, ew = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
  Qx();
  var o = y.useMemo(function() {
    return Kx(i);
  }, [i]);
  return y.createElement(Xx, { styles: Jx(o, !t, i, n ? "" : "!important") });
}, Ga = !1;
if (typeof window < "u")
  try {
    var er = Object.defineProperty({}, "passive", {
      get: function() {
        return Ga = !0, !0;
      }
    });
    window.addEventListener("test", er, er), window.removeEventListener("test", er, er);
  } catch {
    Ga = !1;
  }
var Kt = Ga ? { passive: !1 } : !1, tw = function(e) {
  return e.tagName === "TEXTAREA";
}, P8 = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !tw(e) && n[t] === "visible")
  );
}, nw = function(e) {
  return P8(e, "overflowY");
}, rw = function(e) {
  return P8(e, "overflowX");
}, z9 = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var i = k8(e, r);
    if (i) {
      var o = H8(e, r), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, iw = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, ow = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, k8 = function(e, t) {
  return e === "v" ? nw(t) : rw(t);
}, H8 = function(e, t) {
  return e === "v" ? iw(t) : ow(t);
}, aw = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, sw = function(e, t, n, r, i) {
  var o = aw(e, window.getComputedStyle(t).direction), a = o * r, s = n.target, l = t.contains(s), c = !1, u = a > 0, d = 0, p = 0;
  do {
    var m = H8(e, s), C = m[0], g = m[1], b = m[2], x = g - b - o * C;
    (C || x) && k8(e, s) && (d += x, p += C), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (u && (Math.abs(d) < 1 || !i) || !u && (Math.abs(p) < 1 || !i)) && (c = !0), c;
}, tr = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, $9 = function(e) {
  return [e.deltaX, e.deltaY];
}, B9 = function(e) {
  return e && "current" in e ? e.current : e;
}, lw = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, cw = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, uw = 0, Xt = [];
function fw(e) {
  var t = y.useRef([]), n = y.useRef([0, 0]), r = y.useRef(), i = y.useState(uw++)[0], o = y.useState(F8)[0], a = y.useRef(e);
  y.useEffect(function() {
    a.current = e;
  }, [e]), y.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var g = Px([e.lockRef.current], (e.shards || []).map(B9), !0).filter(Boolean);
      return g.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(i));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(i)), g.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(i));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = y.useCallback(function(g, b) {
    if ("touches" in g && g.touches.length === 2)
      return !a.current.allowPinchZoom;
    var x = tr(g), w = n.current, E = "deltaX" in g ? g.deltaX : w[0] - x[0], S = "deltaY" in g ? g.deltaY : w[1] - x[1], _, P = g.target, F = Math.abs(E) > Math.abs(S) ? "h" : "v";
    if ("touches" in g && F === "h" && P.type === "range")
      return !1;
    var $ = z9(F, P);
    if (!$)
      return !0;
    if ($ ? _ = F : (_ = F === "v" ? "h" : "v", $ = z9(F, P)), !$)
      return !1;
    if (!r.current && "changedTouches" in g && (E || S) && (r.current = _), !_)
      return !0;
    var le = r.current || _;
    return sw(le, b, g, le === "h" ? E : S, !0);
  }, []), l = y.useCallback(function(g) {
    var b = g;
    if (!(!Xt.length || Xt[Xt.length - 1] !== o)) {
      var x = "deltaY" in b ? $9(b) : tr(b), w = t.current.filter(function(_) {
        return _.name === b.type && (_.target === b.target || b.target === _.shadowParent) && lw(_.delta, x);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var E = (a.current.shards || []).map(B9).filter(Boolean).filter(function(_) {
          return _.contains(b.target);
        }), S = E.length > 0 ? s(b, E[0]) : !a.current.noIsolation;
        S && b.cancelable && b.preventDefault();
      }
    }
  }, []), c = y.useCallback(function(g, b, x, w) {
    var E = { name: g, delta: b, target: x, should: w, shadowParent: dw(x) };
    t.current.push(E), setTimeout(function() {
      t.current = t.current.filter(function(S) {
        return S !== E;
      });
    }, 1);
  }, []), u = y.useCallback(function(g) {
    n.current = tr(g), r.current = void 0;
  }, []), d = y.useCallback(function(g) {
    c(g.type, $9(g), g.target, s(g, e.lockRef.current));
  }, []), p = y.useCallback(function(g) {
    c(g.type, tr(g), g.target, s(g, e.lockRef.current));
  }, []);
  y.useEffect(function() {
    return Xt.push(o), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", l, Kt), document.addEventListener("touchmove", l, Kt), document.addEventListener("touchstart", u, Kt), function() {
      Xt = Xt.filter(function(g) {
        return g !== o;
      }), document.removeEventListener("wheel", l, Kt), document.removeEventListener("touchmove", l, Kt), document.removeEventListener("touchstart", u, Kt);
    };
  }, []);
  var m = e.removeScrollBar, C = e.inert;
  return y.createElement(
    y.Fragment,
    null,
    C ? y.createElement(o, { styles: cw(i) }) : null,
    m ? y.createElement(ew, { gapMode: e.gapMode }) : null
  );
}
function dw(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const pw = Zx(R8, fw);
var zs = y.forwardRef(function(e, t) {
  return y.createElement(ki, p0({}, e, { ref: t, sideCar: pw }));
});
zs.classNames = ki.classNames;
var hw = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Jt = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), rr = {}, Xo = 0, N8 = function(e) {
  return e && (e.host || N8(e.parentNode));
}, mw = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = N8(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, Cw = function(e, t, n, r) {
  var i = mw(t, Array.isArray(e) ? e : [e]);
  rr[n] || (rr[n] = /* @__PURE__ */ new WeakMap());
  var o = rr[n], a = [], s = /* @__PURE__ */ new Set(), l = new Set(i), c = function(d) {
    !d || s.has(d) || (s.add(d), c(d.parentNode));
  };
  i.forEach(c);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (s.has(p))
        u(p);
      else
        try {
          var m = p.getAttribute(r), C = m !== null && m !== "false", g = (Jt.get(p) || 0) + 1, b = (o.get(p) || 0) + 1;
          Jt.set(p, g), o.set(p, b), a.push(p), g === 1 && C && nr.set(p, !0), b === 1 && p.setAttribute(n, "true"), C || p.setAttribute(r, "true");
        } catch (x) {
          console.error("aria-hidden: cannot operate on ", p, x);
        }
    });
  };
  return u(t), s.clear(), Xo++, function() {
    a.forEach(function(d) {
      var p = Jt.get(d) - 1, m = o.get(d) - 1;
      Jt.set(d, p), o.set(d, m), p || (nr.has(d) || d.removeAttribute(r), nr.delete(d)), m || d.removeAttribute(n);
    }), Xo--, Xo || (Jt = /* @__PURE__ */ new WeakMap(), Jt = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), rr = {});
  };
}, L8 = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), i = hw(e);
  return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live]"))), Cw(r, i, n, "aria-hidden")) : function() {
    return null;
  };
}, $s = "Dialog", [V8, kM] = $t($s), [gw, f0] = V8($s), j8 = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: i,
    onOpenChange: o,
    modal: a = !0
  } = e, s = y.useRef(null), l = y.useRef(null), [c = !1, u] = Ds({
    prop: r,
    defaultProp: i,
    onChange: o
  });
  return /* @__PURE__ */ h.jsx(
    gw,
    {
      scope: t,
      triggerRef: s,
      contentRef: l,
      contentId: wr(),
      titleId: wr(),
      descriptionId: wr(),
      open: c,
      onOpenChange: u,
      onOpenToggle: y.useCallback(() => u((d) => !d), [u]),
      modal: a,
      children: n
    }
  );
};
j8.displayName = $s;
var I8 = "DialogTrigger", vw = y.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, i = f0(I8, n), o = y2(t, i.triggerRef);
    return /* @__PURE__ */ h.jsx(
      e2.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": i.open,
        "aria-controls": i.contentId,
        "data-state": Ws(i.open),
        ...r,
        ref: o,
        onClick: Re(e.onClick, i.onOpenToggle)
      }
    );
  }
);
vw.displayName = I8;
var Bs = "DialogPortal", [yw, D8] = V8(Bs, {
  forceMount: void 0
}), Z8 = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: i } = e, o = f0(Bs, t);
  return /* @__PURE__ */ h.jsx(yw, { scope: t, forceMount: n, children: y.Children.map(r, (a) => /* @__PURE__ */ h.jsx(Z0, { present: n || o.open, children: /* @__PURE__ */ h.jsx(Pi, { asChild: !0, container: i, children: a }) })) });
};
Z8.displayName = Bs;
var Yr = "DialogOverlay", z8 = y.forwardRef(
  (e, t) => {
    const n = D8(Yr, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, o = f0(Yr, e.__scopeDialog);
    return o.modal ? /* @__PURE__ */ h.jsx(Z0, { present: r || o.open, children: /* @__PURE__ */ h.jsx(bw, { ...i, ref: t }) }) : null;
  }
);
z8.displayName = Yr;
var bw = y.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, i = f0(Yr, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ h.jsx(zs, { as: k0, allowPinchZoom: !0, shards: [i.contentRef], children: /* @__PURE__ */ h.jsx(
        e2.div,
        {
          "data-state": Ws(i.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Zt = "DialogContent", $8 = y.forwardRef(
  (e, t) => {
    const n = D8(Zt, e.__scopeDialog), { forceMount: r = n.forceMount, ...i } = e, o = f0(Zt, e.__scopeDialog);
    return /* @__PURE__ */ h.jsx(Z0, { present: r || o.open, children: o.modal ? /* @__PURE__ */ h.jsx(xw, { ...i, ref: t }) : /* @__PURE__ */ h.jsx(ww, { ...i, ref: t }) });
  }
);
$8.displayName = Zt;
var xw = y.forwardRef(
  (e, t) => {
    const n = f0(Zt, e.__scopeDialog), r = y.useRef(null), i = y2(t, n.contentRef, r);
    return y.useEffect(() => {
      const o = r.current;
      if (o) return L8(o);
    }, []), /* @__PURE__ */ h.jsx(
      B8,
      {
        ...e,
        ref: i,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: Re(e.onCloseAutoFocus, (o) => {
          var a;
          o.preventDefault(), (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: Re(e.onPointerDownOutside, (o) => {
          const a = o.detail.originalEvent, s = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || s) && o.preventDefault();
        }),
        onFocusOutside: Re(
          e.onFocusOutside,
          (o) => o.preventDefault()
        )
      }
    );
  }
), ww = y.forwardRef(
  (e, t) => {
    const n = f0(Zt, e.__scopeDialog), r = y.useRef(!1), i = y.useRef(!1);
    return /* @__PURE__ */ h.jsx(
      B8,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (o) => {
          var a, s;
          (a = e.onCloseAutoFocus) == null || a.call(e, o), o.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), o.preventDefault()), r.current = !1, i.current = !1;
        },
        onInteractOutside: (o) => {
          var l, c;
          (l = e.onInteractOutside) == null || l.call(e, o), o.defaultPrevented || (r.current = !0, o.detail.originalEvent.type === "pointerdown" && (i.current = !0));
          const a = o.target;
          ((c = n.triggerRef.current) == null ? void 0 : c.contains(a)) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && i.current && o.preventDefault();
        }
      }
    );
  }
), B8 = y.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: i, onCloseAutoFocus: o, ...a } = e, s = f0(Zt, n), l = y.useRef(null), c = y2(t, l);
    return A8(), /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
      /* @__PURE__ */ h.jsx(
        Zs,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: i,
          onUnmountAutoFocus: o,
          children: /* @__PURE__ */ h.jsx(
            Fi,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": Ws(s.open),
              ...a,
              ref: c,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
        /* @__PURE__ */ h.jsx(_w, { titleId: s.titleId }),
        /* @__PURE__ */ h.jsx(Sw, { contentRef: l, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), Us = "DialogTitle", U8 = y.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, i = f0(Us, n);
    return /* @__PURE__ */ h.jsx(e2.h2, { id: i.titleId, ...r, ref: t });
  }
);
U8.displayName = Us;
var W8 = "DialogDescription", q8 = y.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, i = f0(W8, n);
    return /* @__PURE__ */ h.jsx(e2.p, { id: i.descriptionId, ...r, ref: t });
  }
);
q8.displayName = W8;
var Y8 = "DialogClose", G8 = y.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, i = f0(Y8, n);
    return /* @__PURE__ */ h.jsx(
      e2.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Re(e.onClick, () => i.onOpenChange(!1))
      }
    );
  }
);
G8.displayName = Y8;
function Ws(e) {
  return e ? "open" : "closed";
}
var K8 = "DialogTitleWarning", [HM, X8] = sx(K8, {
  contentName: Zt,
  titleName: Us,
  docsSlug: "dialog"
}), _w = ({ titleId: e }) => {
  const t = X8(K8), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return y.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, Ew = "DialogDescriptionWarning", Sw = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${X8(Ew).contentName}}.`;
  return y.useEffect(() => {
    var o;
    const i = (o = e.current) == null ? void 0 : o.getAttribute("aria-describedby");
    t && i && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, Mw = j8, Aw = Z8, J8 = z8, Q8 = $8, ef = U8, tf = q8, Tw = G8;
const nf = Mw, Ow = Aw, rf = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  J8,
  {
    ref: n,
    className: Oe(
      "fixed inset-0 z-[900] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
rf.displayName = J8.displayName;
const qs = y.forwardRef(({ className: e, children: t, container: n, closeButton: r = !0, ...i }, o) => /* @__PURE__ */ h.jsxs(Ow, { container: n, children: [
  /* @__PURE__ */ h.jsx(rf, {}),
  /* @__PURE__ */ h.jsxs(
    Q8,
    {
      ref: o,
      className: Oe(
        "fixed left-[50%] top-[50%] z-[900] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",
        e
      ),
      ...i,
      children: [
        t,
        r && /* @__PURE__ */ h.jsxs(Tw, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400", children: [
          /* @__PURE__ */ h.jsx(Qu, { className: "h-4 w-4" }),
          /* @__PURE__ */ h.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
qs.displayName = Q8.displayName;
const Ys = ({
  className: e,
  ...t
}) => /* @__PURE__ */ h.jsx(
  "div",
  {
    className: Oe(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Ys.displayName = "DialogHeader";
const of = ({
  className: e,
  ...t
}) => /* @__PURE__ */ h.jsx(
  "div",
  {
    className: Oe(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      e
    ),
    ...t
  }
);
of.displayName = "DialogFooter";
const Gs = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  ef,
  {
    ref: n,
    className: Oe(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Gs.displayName = ef.displayName;
const Ks = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  tf,
  {
    ref: n,
    className: Oe("text-sm text-slate-500 dark:text-slate-400", e),
    ...t
  }
));
Ks.displayName = tf.displayName;
function Rw({ className: e }) {
  const { setIsDialogOpen: t, selectedMedia: n } = Li();
  return e = Oe("group bg-background w-96 m-6 aspect-[4/3]", e), /* @__PURE__ */ h.jsx(Ei, { onClick: () => t(!0), className: e, children: /* @__PURE__ */ h.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ h.jsx(E4, { ratio: 4 / 3, className: "rounded-lg overflow-hidden bg-checkerboard", children: /* @__PURE__ */ h.jsx(S4, { media: n, placeholder: !0 }) }),
    /* @__PURE__ */ h.jsx("div", { className: "hidden absolute inset-6 flex items-center justify-center group-hover:!flex rounded-lg bg-primary/25 text-white border-dashed border-2", children: /* @__PURE__ */ h.jsx(x0, { icon: d8, className: "text-4xl" }) })
  ] }) });
}
function Xs(e) {
  const t = e + "CollectionProvider", [n, r] = $t(t), [i, o] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (m) => {
    const { scope: C, children: g } = m, b = Ve.useRef(null), x = Ve.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ h.jsx(i, { scope: C, itemMap: x, collectionRef: b, children: g });
  };
  a.displayName = t;
  const s = e + "CollectionSlot", l = Ve.forwardRef(
    (m, C) => {
      const { scope: g, children: b } = m, x = o(s, g), w = y2(C, x.collectionRef);
      return /* @__PURE__ */ h.jsx(k0, { ref: w, children: b });
    }
  );
  l.displayName = s;
  const c = e + "CollectionItemSlot", u = "data-radix-collection-item", d = Ve.forwardRef(
    (m, C) => {
      const { scope: g, children: b, ...x } = m, w = Ve.useRef(null), E = y2(C, w), S = o(c, g);
      return Ve.useEffect(() => (S.itemMap.set(w, { ref: w, ...x }), () => void S.itemMap.delete(w))), /* @__PURE__ */ h.jsx(k0, { [u]: "", ref: E, children: b });
    }
  );
  d.displayName = c;
  function p(m) {
    const C = o(e + "CollectionConsumer", m);
    return Ve.useCallback(() => {
      const b = C.collectionRef.current;
      if (!b) return [];
      const x = Array.from(b.querySelectorAll(`[${u}]`));
      return Array.from(C.itemMap.values()).sort(
        (S, _) => x.indexOf(S.ref.current) - x.indexOf(_.ref.current)
      );
    }, [C.collectionRef, C.itemMap]);
  }
  return [
    { Provider: a, Slot: l, ItemSlot: d },
    p,
    r
  ];
}
var Fw = "VisuallyHidden", Js = y.forwardRef(
  (e, t) => /* @__PURE__ */ h.jsx(
    e2.span,
    {
      ...e,
      ref: t,
      style: {
        // See: https://github.com/twbs/bootstrap/blob/master/scss/mixins/_screen-reader.scss
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        ...e.style
      }
    }
  )
);
Js.displayName = Fw;
var Qs = "ToastProvider", [el, Pw, kw] = Xs("Toast"), [af, NM] = $t("Toast", [kw]), [Hw, Hi] = af(Qs), sf = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: i = "right",
    swipeThreshold: o = 50,
    children: a
  } = e, [s, l] = y.useState(null), [c, u] = y.useState(0), d = y.useRef(!1), p = y.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${Qs}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ h.jsx(el.Provider, { scope: t, children: /* @__PURE__ */ h.jsx(
    Hw,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: i,
      swipeThreshold: o,
      toastCount: c,
      viewport: s,
      onViewportChange: l,
      onToastAdd: y.useCallback(() => u((m) => m + 1), []),
      onToastRemove: y.useCallback(() => u((m) => m - 1), []),
      isFocusedToastEscapeKeyDownRef: d,
      isClosePausedRef: p,
      children: a
    }
  ) });
};
sf.displayName = Qs;
var lf = "ToastViewport", Nw = ["F8"], Ka = "toast.viewportPause", Xa = "toast.viewportResume", cf = y.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = Nw,
      label: i = "Notifications ({hotkey})",
      ...o
    } = e, a = Hi(lf, n), s = Pw(n), l = y.useRef(null), c = y.useRef(null), u = y.useRef(null), d = y.useRef(null), p = y2(t, d, a.onViewportChange), m = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), C = a.toastCount > 0;
    y.useEffect(() => {
      const b = (x) => {
        var E;
        r.every((S) => x[S] || x.code === S) && ((E = d.current) == null || E.focus());
      };
      return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
    }, [r]), y.useEffect(() => {
      const b = l.current, x = d.current;
      if (C && b && x) {
        const w = () => {
          if (!a.isClosePausedRef.current) {
            const P = new CustomEvent(Ka);
            x.dispatchEvent(P), a.isClosePausedRef.current = !0;
          }
        }, E = () => {
          if (a.isClosePausedRef.current) {
            const P = new CustomEvent(Xa);
            x.dispatchEvent(P), a.isClosePausedRef.current = !1;
          }
        }, S = (P) => {
          !b.contains(P.relatedTarget) && E();
        }, _ = () => {
          b.contains(document.activeElement) || E();
        };
        return b.addEventListener("focusin", w), b.addEventListener("focusout", S), b.addEventListener("pointermove", w), b.addEventListener("pointerleave", _), window.addEventListener("blur", w), window.addEventListener("focus", E), () => {
          b.removeEventListener("focusin", w), b.removeEventListener("focusout", S), b.removeEventListener("pointermove", w), b.removeEventListener("pointerleave", _), window.removeEventListener("blur", w), window.removeEventListener("focus", E);
        };
      }
    }, [C, a.isClosePausedRef]);
    const g = y.useCallback(
      ({ tabbingDirection: b }) => {
        const w = s().map((E) => {
          const S = E.ref.current, _ = [S, ...Yw(S)];
          return b === "forwards" ? _ : _.reverse();
        });
        return (b === "forwards" ? w.reverse() : w).flat();
      },
      [s]
    );
    return y.useEffect(() => {
      const b = d.current;
      if (b) {
        const x = (w) => {
          var _, P, F;
          const E = w.altKey || w.ctrlKey || w.metaKey;
          if (w.key === "Tab" && !E) {
            const $ = document.activeElement, le = w.shiftKey;
            if (w.target === b && le) {
              (_ = c.current) == null || _.focus();
              return;
            }
            const D = g({ tabbingDirection: le ? "backwards" : "forwards" }), Q = D.findIndex((N) => N === $);
            Jo(D.slice(Q + 1)) ? w.preventDefault() : le ? (P = c.current) == null || P.focus() : (F = u.current) == null || F.focus();
          }
        };
        return b.addEventListener("keydown", x), () => b.removeEventListener("keydown", x);
      }
    }, [s, g]), /* @__PURE__ */ h.jsxs(
      bx,
      {
        ref: l,
        role: "region",
        "aria-label": i.replace("{hotkey}", m),
        tabIndex: -1,
        style: { pointerEvents: C ? void 0 : "none" },
        children: [
          C && /* @__PURE__ */ h.jsx(
            Ja,
            {
              ref: c,
              onFocusFromOutsideViewport: () => {
                const b = g({
                  tabbingDirection: "forwards"
                });
                Jo(b);
              }
            }
          ),
          /* @__PURE__ */ h.jsx(el.Slot, { scope: n, children: /* @__PURE__ */ h.jsx(e2.ol, { tabIndex: -1, ...o, ref: p }) }),
          C && /* @__PURE__ */ h.jsx(
            Ja,
            {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const b = g({
                  tabbingDirection: "backwards"
                });
                Jo(b);
              }
            }
          )
        ]
      }
    );
  }
);
cf.displayName = lf;
var uf = "ToastFocusProxy", Ja = y.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...i } = e, o = Hi(uf, n);
    return /* @__PURE__ */ h.jsx(
      Js,
      {
        "aria-hidden": !0,
        tabIndex: 0,
        ...i,
        ref: t,
        style: { position: "fixed" },
        onFocus: (a) => {
          var c;
          const s = a.relatedTarget;
          !((c = o.viewport) != null && c.contains(s)) && r();
        }
      }
    );
  }
);
Ja.displayName = uf;
var Ni = "Toast", Lw = "toast.swipeStart", Vw = "toast.swipeMove", jw = "toast.swipeCancel", Iw = "toast.swipeEnd", ff = y.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: i, onOpenChange: o, ...a } = e, [s = !0, l] = Ds({
      prop: r,
      defaultProp: i,
      onChange: o
    });
    return /* @__PURE__ */ h.jsx(Z0, { present: n || s, children: /* @__PURE__ */ h.jsx(
      zw,
      {
        open: s,
        ...a,
        ref: t,
        onClose: () => l(!1),
        onPause: E2(e.onPause),
        onResume: E2(e.onResume),
        onSwipeStart: Re(e.onSwipeStart, (c) => {
          c.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: Re(e.onSwipeMove, (c) => {
          const { x: u, y: d } = c.detail.delta;
          c.currentTarget.setAttribute("data-swipe", "move"), c.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${u}px`), c.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`);
        }),
        onSwipeCancel: Re(e.onSwipeCancel, (c) => {
          c.currentTarget.setAttribute("data-swipe", "cancel"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: Re(e.onSwipeEnd, (c) => {
          const { x: u, y: d } = c.detail.delta;
          c.currentTarget.setAttribute("data-swipe", "end"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), c.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${u}px`), c.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`), l(!1);
        })
      }
    ) });
  }
);
ff.displayName = Ni;
var [Dw, Zw] = af(Ni, {
  onClose() {
  }
}), zw = y.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      type: r = "foreground",
      duration: i,
      open: o,
      onClose: a,
      onEscapeKeyDown: s,
      onPause: l,
      onResume: c,
      onSwipeStart: u,
      onSwipeMove: d,
      onSwipeCancel: p,
      onSwipeEnd: m,
      ...C
    } = e, g = Hi(Ni, n), [b, x] = y.useState(null), w = y2(t, (N) => x(N)), E = y.useRef(null), S = y.useRef(null), _ = i || g.duration, P = y.useRef(0), F = y.useRef(_), $ = y.useRef(0), { onToastAdd: le, onToastRemove: pe } = g, fe = E2(() => {
      var re;
      (b == null ? void 0 : b.contains(document.activeElement)) && ((re = g.viewport) == null || re.focus()), a();
    }), D = y.useCallback(
      (N) => {
        !N || N === 1 / 0 || (window.clearTimeout($.current), P.current = (/* @__PURE__ */ new Date()).getTime(), $.current = window.setTimeout(fe, N));
      },
      [fe]
    );
    y.useEffect(() => {
      const N = g.viewport;
      if (N) {
        const re = () => {
          D(F.current), c == null || c();
        }, k = () => {
          const ce = (/* @__PURE__ */ new Date()).getTime() - P.current;
          F.current = F.current - ce, window.clearTimeout($.current), l == null || l();
        };
        return N.addEventListener(Ka, k), N.addEventListener(Xa, re), () => {
          N.removeEventListener(Ka, k), N.removeEventListener(Xa, re);
        };
      }
    }, [g.viewport, _, l, c, D]), y.useEffect(() => {
      o && !g.isClosePausedRef.current && D(_);
    }, [o, _, g.isClosePausedRef, D]), y.useEffect(() => (le(), () => pe()), [le, pe]);
    const Q = y.useMemo(() => b ? vf(b) : null, [b]);
    return g.viewport ? /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
      Q && /* @__PURE__ */ h.jsx(
        $w,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          "aria-atomic": !0,
          children: Q
        }
      ),
      /* @__PURE__ */ h.jsx(Dw, { scope: n, onClose: fe, children: ai.createPortal(
        /* @__PURE__ */ h.jsx(el.ItemSlot, { scope: n, children: /* @__PURE__ */ h.jsx(
          yx,
          {
            asChild: !0,
            onEscapeKeyDown: Re(s, () => {
              g.isFocusedToastEscapeKeyDownRef.current || fe(), g.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ h.jsx(
              e2.li,
              {
                role: "status",
                "aria-live": "off",
                "aria-atomic": !0,
                tabIndex: 0,
                "data-state": o ? "open" : "closed",
                "data-swipe-direction": g.swipeDirection,
                ...C,
                ref: w,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: Re(e.onKeyDown, (N) => {
                  N.key === "Escape" && (s == null || s(N.nativeEvent), N.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = !0, fe()));
                }),
                onPointerDown: Re(e.onPointerDown, (N) => {
                  N.button === 0 && (E.current = { x: N.clientX, y: N.clientY });
                }),
                onPointerMove: Re(e.onPointerMove, (N) => {
                  if (!E.current) return;
                  const re = N.clientX - E.current.x, k = N.clientY - E.current.y, ce = !!S.current, xe = ["left", "right"].includes(g.swipeDirection), X = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max, j = xe ? X(0, re) : 0, B = xe ? 0 : X(0, k), he = N.pointerType === "touch" ? 10 : 2, H = { x: j, y: B }, Y = { originalEvent: N, delta: H };
                  ce ? (S.current = H, ir(Vw, d, Y, {
                    discrete: !1
                  })) : U9(H, g.swipeDirection, he) ? (S.current = H, ir(Lw, u, Y, {
                    discrete: !1
                  }), N.target.setPointerCapture(N.pointerId)) : (Math.abs(re) > he || Math.abs(k) > he) && (E.current = null);
                }),
                onPointerUp: Re(e.onPointerUp, (N) => {
                  const re = S.current, k = N.target;
                  if (k.hasPointerCapture(N.pointerId) && k.releasePointerCapture(N.pointerId), S.current = null, E.current = null, re) {
                    const ce = N.currentTarget, xe = { originalEvent: N, delta: re };
                    U9(re, g.swipeDirection, g.swipeThreshold) ? ir(Iw, m, xe, {
                      discrete: !0
                    }) : ir(
                      jw,
                      p,
                      xe,
                      {
                        discrete: !0
                      }
                    ), ce.addEventListener("click", (X) => X.preventDefault(), {
                      once: !0
                    });
                  }
                })
              }
            )
          }
        ) }),
        g.viewport
      ) })
    ] }) : null;
  }
), $w = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, i = Hi(Ni, t), [o, a] = y.useState(!1), [s, l] = y.useState(!1);
  return Ww(() => a(!0)), y.useEffect(() => {
    const c = window.setTimeout(() => l(!0), 1e3);
    return () => window.clearTimeout(c);
  }, []), s ? null : /* @__PURE__ */ h.jsx(Pi, { asChild: !0, children: /* @__PURE__ */ h.jsx(Js, { ...r, children: o && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    i.label,
    " ",
    n
  ] }) }) });
}, Bw = "ToastTitle", df = y.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ h.jsx(e2.div, { ...r, ref: t });
  }
);
df.displayName = Bw;
var Uw = "ToastDescription", pf = y.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ h.jsx(e2.div, { ...r, ref: t });
  }
);
pf.displayName = Uw;
var hf = "ToastAction", mf = y.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ h.jsx(gf, { altText: n, asChild: !0, children: /* @__PURE__ */ h.jsx(tl, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${hf}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
mf.displayName = hf;
var Cf = "ToastClose", tl = y.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, i = Zw(Cf, n);
    return /* @__PURE__ */ h.jsx(gf, { asChild: !0, children: /* @__PURE__ */ h.jsx(
      e2.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: Re(e.onClick, i.onClose)
      }
    ) });
  }
);
tl.displayName = Cf;
var gf = y.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...i } = e;
  return /* @__PURE__ */ h.jsx(
    e2.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...i,
      ref: t
    }
  );
});
function vf(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), qw(r)) {
      const i = r.ariaHidden || r.hidden || r.style.display === "none", o = r.dataset.radixToastAnnounceExclude === "";
      if (!i)
        if (o) {
          const a = r.dataset.radixToastAnnounceAlt;
          a && t.push(a);
        } else
          t.push(...vf(r));
    }
  }), t;
}
function ir(e, t, n, { discrete: r }) {
  const i = n.originalEvent.currentTarget, o = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }), r ? Es(i, o) : i.dispatchEvent(o);
}
var U9 = (e, t, n = 0) => {
  const r = Math.abs(e.x), i = Math.abs(e.y), o = r > i;
  return t === "left" || t === "right" ? o && r > n : !o && i > n;
};
function Ww(e = () => {
}) {
  const t = E2(e);
  mt(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function qw(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function Yw(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const i = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || i ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Jo(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var Gw = sf, yf = cf, bf = ff, xf = df, wf = pf, _f = mf, Ef = tl;
const Kw = Gw, Sf = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  yf,
  {
    ref: n,
    className: Oe(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      e
    ),
    ...t
  }
));
Sf.displayName = yf.displayName;
const Xw = Si(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border border-slate-200 p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full dark:border-slate-800",
  {
    variants: {
      variant: {
        default: "border bg-white text-slate-950 dark:bg-slate-950 dark:text-slate-50",
        destructive: "destructive group border-red-500 bg-red-500 text-slate-50 dark:border-red-900 dark:bg-red-900 dark:text-slate-50"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
), Mf = y.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ h.jsx(
  bf,
  {
    ref: r,
    className: Oe(Xw({ variant: t }), e),
    ...n
  }
));
Mf.displayName = bf.displayName;
const Jw = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  _f,
  {
    ref: n,
    className: Oe(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-transparent px-3 text-sm font-medium ring-offset-white transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-slate-100/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-slate-50 group-[.destructive]:focus:ring-red-500 dark:border-slate-800 dark:ring-offset-slate-950 dark:hover:bg-slate-800 dark:focus:ring-slate-300 dark:group-[.destructive]:border-slate-800/40 dark:group-[.destructive]:hover:border-red-900/30 dark:group-[.destructive]:hover:bg-red-900 dark:group-[.destructive]:hover:text-slate-50 dark:group-[.destructive]:focus:ring-red-900",
      e
    ),
    ...t
  }
));
Jw.displayName = _f.displayName;
const Af = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  Ef,
  {
    ref: n,
    className: Oe(
      "absolute right-2 top-2 rounded-md p-1 text-slate-950/50 opacity-0 transition-opacity hover:text-slate-950 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-slate-50/50 dark:hover:text-slate-50",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ h.jsx(Qu, { className: "h-4 w-4" })
  }
));
Af.displayName = Ef.displayName;
const Tf = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  xf,
  {
    ref: n,
    className: Oe("text-sm font-semibold", e),
    ...t
  }
));
Tf.displayName = xf.displayName;
const Of = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  wf,
  {
    ref: n,
    className: Oe("text-sm opacity-90", e),
    ...t
  }
));
Of.displayName = wf.displayName;
function Rf() {
  const { toasts: e } = Nu();
  return /* @__PURE__ */ h.jsxs(Kw, { children: [
    e.map(function({ id: t, title: n, description: r, action: i, ...o }) {
      return /* @__PURE__ */ h.jsxs(Mf, { ...o, children: [
        /* @__PURE__ */ h.jsxs("div", { className: "grid gap-1", children: [
          n && /* @__PURE__ */ h.jsx(Tf, { children: n }),
          r && /* @__PURE__ */ h.jsx(Of, { children: r })
        ] }),
        i,
        /* @__PURE__ */ h.jsx(Af, {})
      ] }, t);
    }),
    /* @__PURE__ */ h.jsx(Sf, {})
  ] });
}
function Qw({ className: e }) {
  Q2()(Mh(!0));
  const { isDialogOpen: n, setIsDialogOpen: r, dialogContainer: i } = Li();
  return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsx(Rw, { className: e }),
    /* @__PURE__ */ h.jsx(nf, { open: n, onOpenChange: (o) => r(o), children: /* @__PURE__ */ h.jsxs(qs, { container: i, className: "p-0 z-[900] h-[75vh] w-[75vw] max-h-none max-w-none", children: [
      /* @__PURE__ */ h.jsxs(Ys, { className: "pt-6 px-6", children: [
        /* @__PURE__ */ h.jsx(Gs, { children: "Médiathèque" }),
        /* @__PURE__ */ h.jsx(Ks, { children: "Sélectionnez ou ajoutez un nouveau média." })
      ] }),
      /* @__PURE__ */ h.jsx(j6, { dialogContainer: i, className: "h-[calc(75vh-1.5rem-70px)]" }),
      /* @__PURE__ */ h.jsx(Rf, {})
    ] }) })
  ] });
}
const Ff = h3(void 0), Li = () => {
  const e = m3(Ff);
  if (!e)
    throw new Error("usePickerContext must be used within a MediaPickerAppProvider");
  return e;
};
function LM({ serverUrl: e, className: t, onPickedMedia: n, dialogContainer: r, value: i, allowMimeType: o }) {
  const [a, s] = F0(!1), [l, c] = F0(!1), [u, d] = F0(null);
  return t = Oe("group bg-background w-96 m-6 aspect-[4/3]", t), a0(() => {
    (async () => {
      try {
        await Ku(e), s(!0);
      } catch (m) {
        console.error("Failed to initialize the app:", m);
      }
    })();
  }, [e]), a0(() => {
    a && i !== void 0 && (async (m) => {
      const C = await Vu(m);
      d(C);
    })(i);
  }, [a, i]), a ? /* @__PURE__ */ h.jsx(Ff.Provider, { value: { onPickedMedia: n, isDialogOpen: l, setIsDialogOpen: c, selectedMedia: u, setSelectedMedia: d, dialogContainer: r, allowMimeType: o }, children: /* @__PURE__ */ h.jsx(b3, { store: G1, children: /* @__PURE__ */ h.jsx(Qw, { className: t }) }) }) : /* @__PURE__ */ h.jsx("div", { className: t, children: "Initialisation ..." });
}
function Pf({ title: e }) {
  const { toast: t } = Nu(), n = Q2(), [r, i] = F0(null), o = C3(null);
  let a = null;
  try {
    a = Li().allowMimeType;
  } catch {
  }
  const s = tt.any().refine((c) => a == null ? !0 : a.includes(c.type), "Type de fichier invalide !");
  a0(() => {
    let c = 0;
    r && (async (d) => {
      for (const p of d) {
        try {
          s.parse(p), await n(mr({
            file: p
          })), c++;
        } catch (m) {
          t({
            variant: "destructive",
            description: m.errors.map((C) => C.message).join(" | ")
          });
        }
        if (!o.current)
          return;
        o.current.value = "";
      }
      c > 0 && n(ot());
    })(r);
  }, [r]);
  const l = () => {
    o.current && o.current.click();
  };
  return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsxs(at, { type: "button", onClick: l, children: [
      /* @__PURE__ */ h.jsx(x0, { icon: d8 }),
      e !== void 0 && /* @__PURE__ */ h.jsxs("span", { className: "ml-2", children: [
        " ",
        e
      ] })
    ] }),
    /* @__PURE__ */ h.jsx(
      f1,
      {
        className: "hidden",
        type: "file",
        ref: o,
        onChange: (c) => {
          i(c.target.files);
        }
      }
    )
  ] });
}
var e_ = y.createContext(void 0);
function kf(e) {
  const t = y.useContext(e_);
  return e || t || "ltr";
}
const t_ = ["top", "right", "bottom", "left"], g0 = Math.min, I2 = Math.max, Gr = Math.round, or = Math.floor, Ct = (e) => ({
  x: e,
  y: e
}), n_ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, r_ = {
  start: "end",
  end: "start"
};
function Qa(e, t, n) {
  return I2(e, g0(t, n));
}
function V0(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function j0(e) {
  return e.split("-")[0];
}
function O1(e) {
  return e.split("-")[1];
}
function nl(e) {
  return e === "x" ? "y" : "x";
}
function rl(e) {
  return e === "y" ? "height" : "width";
}
function gt(e) {
  return ["top", "bottom"].includes(j0(e)) ? "y" : "x";
}
function il(e) {
  return nl(gt(e));
}
function i_(e, t, n) {
  n === void 0 && (n = !1);
  const r = O1(e), i = il(e), o = rl(i);
  let a = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (a = Kr(a)), [a, Kr(a)];
}
function o_(e) {
  const t = Kr(e);
  return [es(e), t, es(t)];
}
function es(e) {
  return e.replace(/start|end/g, (t) => r_[t]);
}
function a_(e, t, n) {
  const r = ["left", "right"], i = ["right", "left"], o = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? i : r : t ? r : i;
    case "left":
    case "right":
      return t ? o : a;
    default:
      return [];
  }
}
function s_(e, t, n, r) {
  const i = O1(e);
  let o = a_(j0(e), n === "start", r);
  return i && (o = o.map((a) => a + "-" + i), t && (o = o.concat(o.map(es)))), o;
}
function Kr(e) {
  return e.replace(/left|right|bottom|top/g, (t) => n_[t]);
}
function l_(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Hf(e) {
  return typeof e != "number" ? l_(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Xr(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: i
  } = e;
  return {
    width: r,
    height: i,
    top: n,
    left: t,
    right: t + r,
    bottom: n + i,
    x: t,
    y: n
  };
}
function W9(e, t, n) {
  let {
    reference: r,
    floating: i
  } = e;
  const o = gt(t), a = il(t), s = rl(a), l = j0(t), c = o === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, p = r[s] / 2 - i[s] / 2;
  let m;
  switch (l) {
    case "top":
      m = {
        x: u,
        y: r.y - i.height
      };
      break;
    case "bottom":
      m = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      m = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      m = {
        x: r.x - i.width,
        y: d
      };
      break;
    default:
      m = {
        x: r.x,
        y: r.y
      };
  }
  switch (O1(t)) {
    case "start":
      m[a] -= p * (n && c ? -1 : 1);
      break;
    case "end":
      m[a] += p * (n && c ? -1 : 1);
      break;
  }
  return m;
}
const c_ = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: a
  } = n, s = o.filter(Boolean), l = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let c = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: u,
    y: d
  } = W9(c, r, l), p = r, m = {}, C = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: b,
      fn: x
    } = s[g], {
      x: w,
      y: E,
      data: S,
      reset: _
    } = await x({
      x: u,
      y: d,
      initialPlacement: r,
      placement: p,
      strategy: i,
      middlewareData: m,
      rects: c,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = w ?? u, d = E ?? d, m = {
      ...m,
      [b]: {
        ...m[b],
        ...S
      }
    }, _ && C <= 50 && (C++, typeof _ == "object" && (_.placement && (p = _.placement), _.rects && (c = _.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : _.rects), {
      x: u,
      y: d
    } = W9(c, p, l)), g = -1);
  }
  return {
    x: u,
    y: d,
    placement: p,
    strategy: i,
    middlewareData: m
  };
};
async function Sn(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: i,
    platform: o,
    rects: a,
    elements: s,
    strategy: l
  } = e, {
    boundary: c = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: m = 0
  } = V0(t, e), C = Hf(m), b = s[p ? d === "floating" ? "reference" : "floating" : d], x = Xr(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(b))) == null || n ? b : b.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)),
    boundary: c,
    rootBoundary: u,
    strategy: l
  })), w = d === "floating" ? {
    x: r,
    y: i,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, E = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)), S = await (o.isElement == null ? void 0 : o.isElement(E)) ? await (o.getScale == null ? void 0 : o.getScale(E)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, _ = Xr(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: w,
    offsetParent: E,
    strategy: l
  }) : w);
  return {
    top: (x.top - _.top + C.top) / S.y,
    bottom: (_.bottom - x.bottom + C.bottom) / S.y,
    left: (x.left - _.left + C.left) / S.x,
    right: (_.right - x.right + C.right) / S.x
  };
}
const u_ = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: i,
      rects: o,
      platform: a,
      elements: s,
      middlewareData: l
    } = t, {
      element: c,
      padding: u = 0
    } = V0(e, t) || {};
    if (c == null)
      return {};
    const d = Hf(u), p = {
      x: n,
      y: r
    }, m = il(i), C = rl(m), g = await a.getDimensions(c), b = m === "y", x = b ? "top" : "left", w = b ? "bottom" : "right", E = b ? "clientHeight" : "clientWidth", S = o.reference[C] + o.reference[m] - p[m] - o.floating[C], _ = p[m] - o.reference[m], P = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(c));
    let F = P ? P[E] : 0;
    (!F || !await (a.isElement == null ? void 0 : a.isElement(P))) && (F = s.floating[E] || o.floating[C]);
    const $ = S / 2 - _ / 2, le = F / 2 - g[C] / 2 - 1, pe = g0(d[x], le), fe = g0(d[w], le), D = pe, Q = F - g[C] - fe, N = F / 2 - g[C] / 2 + $, re = Qa(D, N, Q), k = !l.arrow && O1(i) != null && N !== re && o.reference[C] / 2 - (N < D ? pe : fe) - g[C] / 2 < 0, ce = k ? N < D ? N - D : N - Q : 0;
    return {
      [m]: p[m] + ce,
      data: {
        [m]: re,
        centerOffset: N - re - ce,
        ...k && {
          alignmentOffset: ce
        }
      },
      reset: k
    };
  }
}), f_ = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: i,
        middlewareData: o,
        rects: a,
        initialPlacement: s,
        platform: l,
        elements: c
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: p,
        fallbackStrategy: m = "bestFit",
        fallbackAxisSideDirection: C = "none",
        flipAlignment: g = !0,
        ...b
      } = V0(e, t);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const x = j0(i), w = gt(s), E = j0(s) === s, S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)), _ = p || (E || !g ? [Kr(s)] : o_(s)), P = C !== "none";
      !p && P && _.push(...s_(s, g, C, S));
      const F = [s, ..._], $ = await Sn(t, b), le = [];
      let pe = ((r = o.flip) == null ? void 0 : r.overflows) || [];
      if (u && le.push($[x]), d) {
        const N = i_(i, a, S);
        le.push($[N[0]], $[N[1]]);
      }
      if (pe = [...pe, {
        placement: i,
        overflows: le
      }], !le.every((N) => N <= 0)) {
        var fe, D;
        const N = (((fe = o.flip) == null ? void 0 : fe.index) || 0) + 1, re = F[N];
        if (re)
          return {
            data: {
              index: N,
              overflows: pe
            },
            reset: {
              placement: re
            }
          };
        let k = (D = pe.filter((ce) => ce.overflows[0] <= 0).sort((ce, xe) => ce.overflows[1] - xe.overflows[1])[0]) == null ? void 0 : D.placement;
        if (!k)
          switch (m) {
            case "bestFit": {
              var Q;
              const ce = (Q = pe.filter((xe) => {
                if (P) {
                  const X = gt(xe.placement);
                  return X === w || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  X === "y";
                }
                return !0;
              }).map((xe) => [xe.placement, xe.overflows.filter((X) => X > 0).reduce((X, j) => X + j, 0)]).sort((xe, X) => xe[1] - X[1])[0]) == null ? void 0 : Q[0];
              ce && (k = ce);
              break;
            }
            case "initialPlacement":
              k = s;
              break;
          }
        if (i !== k)
          return {
            reset: {
              placement: k
            }
          };
      }
      return {};
    }
  };
};
function q9(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Y9(e) {
  return t_.some((t) => e[t] >= 0);
}
const d_ = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...i
      } = V0(e, t);
      switch (r) {
        case "referenceHidden": {
          const o = await Sn(t, {
            ...i,
            elementContext: "reference"
          }), a = q9(o, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Y9(a)
            }
          };
        }
        case "escaped": {
          const o = await Sn(t, {
            ...i,
            altBoundary: !0
          }), a = q9(o, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Y9(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function p_(e, t) {
  const {
    placement: n,
    platform: r,
    elements: i
  } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), a = j0(n), s = O1(n), l = gt(n) === "y", c = ["left", "top"].includes(a) ? -1 : 1, u = o && l ? -1 : 1, d = V0(t, e);
  let {
    mainAxis: p,
    crossAxis: m,
    alignmentAxis: C
  } = typeof d == "number" ? {
    mainAxis: d,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: 0,
    crossAxis: 0,
    alignmentAxis: null,
    ...d
  };
  return s && typeof C == "number" && (m = s === "end" ? C * -1 : C), l ? {
    x: m * u,
    y: p * c
  } : {
    x: p * c,
    y: m * u
  };
}
const h_ = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: i,
        y: o,
        placement: a,
        middlewareData: s
      } = t, l = await p_(t, e);
      return a === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: i + l.x,
        y: o + l.y,
        data: {
          ...l,
          placement: a
        }
      };
    }
  };
}, m_ = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: i
      } = t, {
        mainAxis: o = !0,
        crossAxis: a = !1,
        limiter: s = {
          fn: (b) => {
            let {
              x,
              y: w
            } = b;
            return {
              x,
              y: w
            };
          }
        },
        ...l
      } = V0(e, t), c = {
        x: n,
        y: r
      }, u = await Sn(t, l), d = gt(j0(i)), p = nl(d);
      let m = c[p], C = c[d];
      if (o) {
        const b = p === "y" ? "top" : "left", x = p === "y" ? "bottom" : "right", w = m + u[b], E = m - u[x];
        m = Qa(w, m, E);
      }
      if (a) {
        const b = d === "y" ? "top" : "left", x = d === "y" ? "bottom" : "right", w = C + u[b], E = C - u[x];
        C = Qa(w, C, E);
      }
      const g = s.fn({
        ...t,
        [p]: m,
        [d]: C
      });
      return {
        ...g,
        data: {
          x: g.x - n,
          y: g.y - r
        }
      };
    }
  };
}, C_ = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: i,
        rects: o,
        middlewareData: a
      } = t, {
        offset: s = 0,
        mainAxis: l = !0,
        crossAxis: c = !0
      } = V0(e, t), u = {
        x: n,
        y: r
      }, d = gt(i), p = nl(d);
      let m = u[p], C = u[d];
      const g = V0(s, t), b = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (l) {
        const E = p === "y" ? "height" : "width", S = o.reference[p] - o.floating[E] + b.mainAxis, _ = o.reference[p] + o.reference[E] - b.mainAxis;
        m < S ? m = S : m > _ && (m = _);
      }
      if (c) {
        var x, w;
        const E = p === "y" ? "width" : "height", S = ["top", "left"].includes(j0(i)), _ = o.reference[d] - o.floating[E] + (S && ((x = a.offset) == null ? void 0 : x[d]) || 0) + (S ? 0 : b.crossAxis), P = o.reference[d] + o.reference[E] + (S ? 0 : ((w = a.offset) == null ? void 0 : w[d]) || 0) - (S ? b.crossAxis : 0);
        C < _ ? C = _ : C > P && (C = P);
      }
      return {
        [p]: m,
        [d]: C
      };
    }
  };
}, g_ = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: i,
        elements: o
      } = t, {
        apply: a = () => {
        },
        ...s
      } = V0(e, t), l = await Sn(t, s), c = j0(n), u = O1(n), d = gt(n) === "y", {
        width: p,
        height: m
      } = r.floating;
      let C, g;
      c === "top" || c === "bottom" ? (C = c, g = u === (await (i.isRTL == null ? void 0 : i.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (g = c, C = u === "end" ? "top" : "bottom");
      const b = m - l.top - l.bottom, x = p - l.left - l.right, w = g0(m - l[C], b), E = g0(p - l[g], x), S = !t.middlewareData.shift;
      let _ = w, P = E;
      if (d ? P = u || S ? g0(E, x) : x : _ = u || S ? g0(w, b) : b, S && !u) {
        const $ = I2(l.left, 0), le = I2(l.right, 0), pe = I2(l.top, 0), fe = I2(l.bottom, 0);
        d ? P = p - 2 * ($ !== 0 || le !== 0 ? $ + le : I2(l.left, l.right)) : _ = m - 2 * (pe !== 0 || fe !== 0 ? pe + fe : I2(l.top, l.bottom));
      }
      await a({
        ...t,
        availableWidth: P,
        availableHeight: _
      });
      const F = await i.getDimensions(o.floating);
      return p !== F.width || m !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function R1(e) {
  return Nf(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function U2(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function z0(e) {
  var t;
  return (t = (Nf(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Nf(e) {
  return e instanceof Node || e instanceof U2(e).Node;
}
function l0(e) {
  return e instanceof Element || e instanceof U2(e).Element;
}
function E0(e) {
  return e instanceof HTMLElement || e instanceof U2(e).HTMLElement;
}
function G9(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof U2(e).ShadowRoot;
}
function jn(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: i
  } = c0(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function v_(e) {
  return ["table", "td", "th"].includes(R1(e));
}
function Vi(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function ol(e) {
  const t = al(), n = l0(e) ? c0(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function y_(e) {
  let t = vt(e);
  for (; E0(t) && !w1(t); ) {
    if (ol(t))
      return t;
    if (Vi(t))
      return null;
    t = vt(t);
  }
  return null;
}
function al() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function w1(e) {
  return ["html", "body", "#document"].includes(R1(e));
}
function c0(e) {
  return U2(e).getComputedStyle(e);
}
function ji(e) {
  return l0(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function vt(e) {
  if (R1(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    G9(e) && e.host || // Fallback.
    z0(e)
  );
  return G9(t) ? t.host : t;
}
function Lf(e) {
  const t = vt(e);
  return w1(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : E0(t) && jn(t) ? t : Lf(t);
}
function Mn(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = Lf(e), o = i === ((r = e.ownerDocument) == null ? void 0 : r.body), a = U2(i);
  return o ? t.concat(a, a.visualViewport || [], jn(i) ? i : [], a.frameElement && n ? Mn(a.frameElement) : []) : t.concat(i, Mn(i, [], n));
}
function Vf(e) {
  const t = c0(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const i = E0(e), o = i ? e.offsetWidth : n, a = i ? e.offsetHeight : r, s = Gr(n) !== o || Gr(r) !== a;
  return s && (n = o, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function sl(e) {
  return l0(e) ? e : e.contextElement;
}
function h1(e) {
  const t = sl(e);
  if (!E0(t))
    return Ct(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: i,
    $: o
  } = Vf(t);
  let a = (o ? Gr(n.width) : n.width) / r, s = (o ? Gr(n.height) : n.height) / i;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const b_ = /* @__PURE__ */ Ct(0);
function jf(e) {
  const t = U2(e);
  return !al() || !t.visualViewport ? b_ : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function x_(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== U2(e) ? !1 : t;
}
function zt(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), o = sl(e);
  let a = Ct(1);
  t && (r ? l0(r) && (a = h1(r)) : a = h1(e));
  const s = x_(o, n, r) ? jf(o) : Ct(0);
  let l = (i.left + s.x) / a.x, c = (i.top + s.y) / a.y, u = i.width / a.x, d = i.height / a.y;
  if (o) {
    const p = U2(o), m = r && l0(r) ? U2(r) : r;
    let C = p, g = C.frameElement;
    for (; g && r && m !== C; ) {
      const b = h1(g), x = g.getBoundingClientRect(), w = c0(g), E = x.left + (g.clientLeft + parseFloat(w.paddingLeft)) * b.x, S = x.top + (g.clientTop + parseFloat(w.paddingTop)) * b.y;
      l *= b.x, c *= b.y, u *= b.x, d *= b.y, l += E, c += S, C = U2(g), g = C.frameElement;
    }
  }
  return Xr({
    width: u,
    height: d,
    x: l,
    y: c
  });
}
function w_(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: i
  } = e;
  const o = i === "fixed", a = z0(r), s = t ? Vi(t.floating) : !1;
  if (r === a || s && o)
    return n;
  let l = {
    scrollLeft: 0,
    scrollTop: 0
  }, c = Ct(1);
  const u = Ct(0), d = E0(r);
  if ((d || !d && !o) && ((R1(r) !== "body" || jn(a)) && (l = ji(r)), E0(r))) {
    const p = zt(r);
    c = h1(r), u.x = p.x + r.clientLeft, u.y = p.y + r.clientTop;
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - l.scrollLeft * c.x + u.x,
    y: n.y * c.y - l.scrollTop * c.y + u.y
  };
}
function __(e) {
  return Array.from(e.getClientRects());
}
function If(e) {
  return zt(z0(e)).left + ji(e).scrollLeft;
}
function E_(e) {
  const t = z0(e), n = ji(e), r = e.ownerDocument.body, i = I2(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), o = I2(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + If(e);
  const s = -n.scrollTop;
  return c0(r).direction === "rtl" && (a += I2(t.clientWidth, r.clientWidth) - i), {
    width: i,
    height: o,
    x: a,
    y: s
  };
}
function S_(e, t) {
  const n = U2(e), r = z0(e), i = n.visualViewport;
  let o = r.clientWidth, a = r.clientHeight, s = 0, l = 0;
  if (i) {
    o = i.width, a = i.height;
    const c = al();
    (!c || c && t === "fixed") && (s = i.offsetLeft, l = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: s,
    y: l
  };
}
function M_(e, t) {
  const n = zt(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, o = E0(e) ? h1(e) : Ct(1), a = e.clientWidth * o.x, s = e.clientHeight * o.y, l = i * o.x, c = r * o.y;
  return {
    width: a,
    height: s,
    x: l,
    y: c
  };
}
function K9(e, t, n) {
  let r;
  if (t === "viewport")
    r = S_(e, n);
  else if (t === "document")
    r = E_(z0(e));
  else if (l0(t))
    r = M_(t, n);
  else {
    const i = jf(e);
    r = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return Xr(r);
}
function Df(e, t) {
  const n = vt(e);
  return n === t || !l0(n) || w1(n) ? !1 : c0(n).position === "fixed" || Df(n, t);
}
function A_(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Mn(e, [], !1).filter((s) => l0(s) && R1(s) !== "body"), i = null;
  const o = c0(e).position === "fixed";
  let a = o ? vt(e) : e;
  for (; l0(a) && !w1(a); ) {
    const s = c0(a), l = ol(a);
    !l && s.position === "fixed" && (i = null), (o ? !l && !i : !l && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || jn(a) && !l && Df(e, a)) ? r = r.filter((u) => u !== a) : i = s, a = vt(a);
  }
  return t.set(e, r), r;
}
function T_(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = e;
  const a = [...n === "clippingAncestors" ? Vi(t) ? [] : A_(t, this._c) : [].concat(n), r], s = a[0], l = a.reduce((c, u) => {
    const d = K9(t, u, i);
    return c.top = I2(d.top, c.top), c.right = g0(d.right, c.right), c.bottom = g0(d.bottom, c.bottom), c.left = I2(d.left, c.left), c;
  }, K9(t, s, i));
  return {
    width: l.right - l.left,
    height: l.bottom - l.top,
    x: l.left,
    y: l.top
  };
}
function O_(e) {
  const {
    width: t,
    height: n
  } = Vf(e);
  return {
    width: t,
    height: n
  };
}
function R_(e, t, n) {
  const r = E0(t), i = z0(t), o = n === "fixed", a = zt(e, !0, o, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const l = Ct(0);
  if (r || !r && !o)
    if ((R1(t) !== "body" || jn(i)) && (s = ji(t)), r) {
      const d = zt(t, !0, o, t);
      l.x = d.x + t.clientLeft, l.y = d.y + t.clientTop;
    } else i && (l.x = If(i));
  const c = a.left + s.scrollLeft - l.x, u = a.top + s.scrollTop - l.y;
  return {
    x: c,
    y: u,
    width: a.width,
    height: a.height
  };
}
function Qo(e) {
  return c0(e).position === "static";
}
function X9(e, t) {
  return !E0(e) || c0(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Zf(e, t) {
  const n = U2(e);
  if (Vi(e))
    return n;
  if (!E0(e)) {
    let i = vt(e);
    for (; i && !w1(i); ) {
      if (l0(i) && !Qo(i))
        return i;
      i = vt(i);
    }
    return n;
  }
  let r = X9(e, t);
  for (; r && v_(r) && Qo(r); )
    r = X9(r, t);
  return r && w1(r) && Qo(r) && !ol(r) ? n : r || y_(e) || n;
}
const F_ = async function(e) {
  const t = this.getOffsetParent || Zf, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: R_(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function P_(e) {
  return c0(e).direction === "rtl";
}
const k_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: w_,
  getDocumentElement: z0,
  getClippingRect: T_,
  getOffsetParent: Zf,
  getElementRects: F_,
  getClientRects: __,
  getDimensions: O_,
  getScale: h1,
  isElement: l0,
  isRTL: P_
};
function H_(e, t) {
  let n = null, r;
  const i = z0(e);
  function o() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function a(s, l) {
    s === void 0 && (s = !1), l === void 0 && (l = 1), o();
    const {
      left: c,
      top: u,
      width: d,
      height: p
    } = e.getBoundingClientRect();
    if (s || t(), !d || !p)
      return;
    const m = or(u), C = or(i.clientWidth - (c + d)), g = or(i.clientHeight - (u + p)), b = or(c), w = {
      rootMargin: -m + "px " + -C + "px " + -g + "px " + -b + "px",
      threshold: I2(0, g0(1, l)) || 1
    };
    let E = !0;
    function S(_) {
      const P = _[0].intersectionRatio;
      if (P !== l) {
        if (!E)
          return a();
        P ? a(!1, P) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      E = !1;
    }
    try {
      n = new IntersectionObserver(S, {
        ...w,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(S, w);
    }
    n.observe(e);
  }
  return a(!0), o;
}
function N_(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: l = !1
  } = r, c = sl(e), u = i || o ? [...c ? Mn(c) : [], ...Mn(t)] : [];
  u.forEach((x) => {
    i && x.addEventListener("scroll", n, {
      passive: !0
    }), o && x.addEventListener("resize", n);
  });
  const d = c && s ? H_(c, n) : null;
  let p = -1, m = null;
  a && (m = new ResizeObserver((x) => {
    let [w] = x;
    w && w.target === c && m && (m.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var E;
      (E = m) == null || E.observe(t);
    })), n();
  }), c && !l && m.observe(c), m.observe(t));
  let C, g = l ? zt(e) : null;
  l && b();
  function b() {
    const x = zt(e);
    g && (x.x !== g.x || x.y !== g.y || x.width !== g.width || x.height !== g.height) && n(), g = x, C = requestAnimationFrame(b);
  }
  return n(), () => {
    var x;
    u.forEach((w) => {
      i && w.removeEventListener("scroll", n), o && w.removeEventListener("resize", n);
    }), d == null || d(), (x = m) == null || x.disconnect(), m = null, l && cancelAnimationFrame(C);
  };
}
const L_ = h_, V_ = m_, j_ = f_, I_ = g_, D_ = d_, J9 = u_, Z_ = C_, z_ = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: k_,
    ...n
  }, o = {
    ...i.platform,
    _c: r
  };
  return c_(e, t, {
    ...i,
    platform: o
  });
};
var Sr = typeof document < "u" ? G6 : a0;
function Jr(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, i;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Jr(e[r], t[r]))
          return !1;
      return !0;
    }
    if (i = Object.keys(e), n = i.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, i[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const o = i[r];
      if (!(o === "_owner" && e.$$typeof) && !Jr(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function zf(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Q9(e, t) {
  const n = zf(e);
  return Math.round(t * n) / n;
}
function e3(e) {
  const t = y.useRef(e);
  return Sr(() => {
    t.current = e;
  }), t;
}
function $_(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: i,
    elements: {
      reference: o,
      floating: a
    } = {},
    transform: s = !0,
    whileElementsMounted: l,
    open: c
  } = e, [u, d] = y.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, m] = y.useState(r);
  Jr(p, r) || m(r);
  const [C, g] = y.useState(null), [b, x] = y.useState(null), w = y.useCallback((ce) => {
    ce !== P.current && (P.current = ce, g(ce));
  }, []), E = y.useCallback((ce) => {
    ce !== F.current && (F.current = ce, x(ce));
  }, []), S = o || C, _ = a || b, P = y.useRef(null), F = y.useRef(null), $ = y.useRef(u), le = l != null, pe = e3(l), fe = e3(i), D = y.useCallback(() => {
    if (!P.current || !F.current)
      return;
    const ce = {
      placement: t,
      strategy: n,
      middleware: p
    };
    fe.current && (ce.platform = fe.current), z_(P.current, F.current, ce).then((xe) => {
      const X = {
        ...xe,
        isPositioned: !0
      };
      Q.current && !Jr($.current, X) && ($.current = X, ai.flushSync(() => {
        d(X);
      }));
    });
  }, [p, t, n, fe]);
  Sr(() => {
    c === !1 && $.current.isPositioned && ($.current.isPositioned = !1, d((ce) => ({
      ...ce,
      isPositioned: !1
    })));
  }, [c]);
  const Q = y.useRef(!1);
  Sr(() => (Q.current = !0, () => {
    Q.current = !1;
  }), []), Sr(() => {
    if (S && (P.current = S), _ && (F.current = _), S && _) {
      if (pe.current)
        return pe.current(S, _, D);
      D();
    }
  }, [S, _, D, pe, le]);
  const N = y.useMemo(() => ({
    reference: P,
    floating: F,
    setReference: w,
    setFloating: E
  }), [w, E]), re = y.useMemo(() => ({
    reference: S,
    floating: _
  }), [S, _]), k = y.useMemo(() => {
    const ce = {
      position: n,
      left: 0,
      top: 0
    };
    if (!re.floating)
      return ce;
    const xe = Q9(re.floating, u.x), X = Q9(re.floating, u.y);
    return s ? {
      ...ce,
      transform: "translate(" + xe + "px, " + X + "px)",
      ...zf(re.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: xe,
      top: X
    };
  }, [n, s, re.floating, u.x, u.y]);
  return y.useMemo(() => ({
    ...u,
    update: D,
    refs: N,
    elements: re,
    floatingStyles: k
  }), [u, D, N, re, k]);
}
const B_ = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: i
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? J9({
        element: r.current,
        padding: i
      }).fn(n) : {} : r ? J9({
        element: r,
        padding: i
      }).fn(n) : {};
    }
  };
}, U_ = (e, t) => ({
  ...L_(e),
  options: [e, t]
}), W_ = (e, t) => ({
  ...V_(e),
  options: [e, t]
}), q_ = (e, t) => ({
  ...Z_(e),
  options: [e, t]
}), Y_ = (e, t) => ({
  ...j_(e),
  options: [e, t]
}), G_ = (e, t) => ({
  ...I_(e),
  options: [e, t]
}), K_ = (e, t) => ({
  ...D_(e),
  options: [e, t]
}), X_ = (e, t) => ({
  ...B_(e),
  options: [e, t]
});
var J_ = "Arrow", $f = y.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: i = 5, ...o } = e;
  return /* @__PURE__ */ h.jsx(
    e2.svg,
    {
      ...o,
      ref: t,
      width: r,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ h.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
$f.displayName = J_;
var Q_ = $f;
function eE(e) {
  const [t, n] = y.useState(void 0);
  return mt(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const o = i[0];
        let a, s;
        if ("borderBoxSize" in o) {
          const l = o.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
          a = c.inlineSize, s = c.blockSize;
        } else
          a = e.offsetWidth, s = e.offsetHeight;
        n({ width: a, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var ll = "Popper", [Bf, Uf] = $t(ll), [tE, Wf] = Bf(ll), qf = (e) => {
  const { __scopePopper: t, children: n } = e, [r, i] = y.useState(null);
  return /* @__PURE__ */ h.jsx(tE, { scope: t, anchor: r, onAnchorChange: i, children: n });
};
qf.displayName = ll;
var Yf = "PopperAnchor", Gf = y.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...i } = e, o = Wf(Yf, n), a = y.useRef(null), s = y2(t, a);
    return y.useEffect(() => {
      o.onAnchorChange((r == null ? void 0 : r.current) || a.current);
    }), r ? null : /* @__PURE__ */ h.jsx(e2.div, { ...i, ref: s });
  }
);
Gf.displayName = Yf;
var cl = "PopperContent", [nE, rE] = Bf(cl), Kf = y.forwardRef(
  (e, t) => {
    var G, oe, de, ve, ke, ee;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: i = 0,
      align: o = "center",
      alignOffset: a = 0,
      arrowPadding: s = 0,
      avoidCollisions: l = !0,
      collisionBoundary: c = [],
      collisionPadding: u = 0,
      sticky: d = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: m = "optimized",
      onPlaced: C,
      ...g
    } = e, b = Wf(cl, n), [x, w] = y.useState(null), E = y2(t, (Ae) => w(Ae)), [S, _] = y.useState(null), P = eE(S), F = (P == null ? void 0 : P.width) ?? 0, $ = (P == null ? void 0 : P.height) ?? 0, le = r + (o !== "center" ? "-" + o : ""), pe = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, fe = Array.isArray(c) ? c : [c], D = fe.length > 0, Q = {
      padding: pe,
      boundary: fe.filter(oE),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: D
    }, { refs: N, floatingStyles: re, placement: k, isPositioned: ce, middlewareData: xe } = $_({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: le,
      whileElementsMounted: (...Ae) => N_(...Ae, {
        animationFrame: m === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        U_({ mainAxis: i + $, alignmentAxis: a }),
        l && W_({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? q_() : void 0,
          ...Q
        }),
        l && Y_({ ...Q }),
        G_({
          ...Q,
          apply: ({ elements: Ae, rects: Ue, availableWidth: c2, availableHeight: t2 }) => {
            const { width: ze, height: M } = Ue.reference, R = Ae.floating.style;
            R.setProperty("--radix-popper-available-width", `${c2}px`), R.setProperty("--radix-popper-available-height", `${t2}px`), R.setProperty("--radix-popper-anchor-width", `${ze}px`), R.setProperty("--radix-popper-anchor-height", `${M}px`);
          }
        }),
        S && X_({ element: S, padding: s }),
        aE({ arrowWidth: F, arrowHeight: $ }),
        p && K_({ strategy: "referenceHidden", ...Q })
      ]
    }), [X, j] = Qf(k), B = E2(C);
    mt(() => {
      ce && (B == null || B());
    }, [ce, B]);
    const he = (G = xe.arrow) == null ? void 0 : G.x, H = (oe = xe.arrow) == null ? void 0 : oe.y, Y = ((de = xe.arrow) == null ? void 0 : de.centerOffset) !== 0, [ie, q] = y.useState();
    return mt(() => {
      x && q(window.getComputedStyle(x).zIndex);
    }, [x]), /* @__PURE__ */ h.jsx(
      "div",
      {
        ref: N.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...re,
          transform: ce ? re.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: ie,
          "--radix-popper-transform-origin": [
            (ve = xe.transformOrigin) == null ? void 0 : ve.x,
            (ke = xe.transformOrigin) == null ? void 0 : ke.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ee = xe.hide) == null ? void 0 : ee.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ h.jsx(
          nE,
          {
            scope: n,
            placedSide: X,
            onArrowChange: _,
            arrowX: he,
            arrowY: H,
            shouldHideArrow: Y,
            children: /* @__PURE__ */ h.jsx(
              e2.div,
              {
                "data-side": X,
                "data-align": j,
                ...g,
                ref: E,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: ce ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
Kf.displayName = cl;
var Xf = "PopperArrow", iE = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Jf = y.forwardRef(function(t, n) {
  const { __scopePopper: r, ...i } = t, o = rE(Xf, r), a = iE[o.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ h.jsx(
      "span",
      {
        ref: o.onArrowChange,
        style: {
          position: "absolute",
          left: o.arrowX,
          top: o.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[o.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[o.placedSide],
          visibility: o.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ h.jsx(
          Q_,
          {
            ...i,
            ref: n,
            style: {
              ...i.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Jf.displayName = Xf;
function oE(e) {
  return e !== null;
}
var aE = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, x, w;
    const { placement: n, rects: r, middlewareData: i } = t, a = ((b = i.arrow) == null ? void 0 : b.centerOffset) !== 0, s = a ? 0 : e.arrowWidth, l = a ? 0 : e.arrowHeight, [c, u] = Qf(n), d = { start: "0%", center: "50%", end: "100%" }[u], p = (((x = i.arrow) == null ? void 0 : x.x) ?? 0) + s / 2, m = (((w = i.arrow) == null ? void 0 : w.y) ?? 0) + l / 2;
    let C = "", g = "";
    return c === "bottom" ? (C = a ? d : `${p}px`, g = `${-l}px`) : c === "top" ? (C = a ? d : `${p}px`, g = `${r.floating.height + l}px`) : c === "right" ? (C = `${-l}px`, g = a ? d : `${m}px`) : c === "left" && (C = `${r.floating.width + l}px`, g = a ? d : `${m}px`), { data: { x: C, y: g } };
  }
});
function Qf(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var sE = qf, lE = Gf, cE = Kf, uE = Jf, ea = "rovingFocusGroup.onEntryFocus", fE = { bubbles: !1, cancelable: !0 }, Ii = "RovingFocusGroup", [ts, ed, dE] = Xs(Ii), [pE, td] = $t(
  Ii,
  [dE]
), [hE, mE] = pE(Ii), nd = y.forwardRef(
  (e, t) => /* @__PURE__ */ h.jsx(ts.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ h.jsx(ts.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ h.jsx(CE, { ...e, ref: t }) }) })
);
nd.displayName = Ii;
var CE = y.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: i = !1,
    dir: o,
    currentTabStopId: a,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: l,
    onEntryFocus: c,
    preventScrollOnEntryFocus: u = !1,
    ...d
  } = e, p = y.useRef(null), m = y2(t, p), C = kf(o), [g = null, b] = Ds({
    prop: a,
    defaultProp: s,
    onChange: l
  }), [x, w] = y.useState(!1), E = E2(c), S = ed(n), _ = y.useRef(!1), [P, F] = y.useState(0);
  return y.useEffect(() => {
    const $ = p.current;
    if ($)
      return $.addEventListener(ea, E), () => $.removeEventListener(ea, E);
  }, [E]), /* @__PURE__ */ h.jsx(
    hE,
    {
      scope: n,
      orientation: r,
      dir: C,
      loop: i,
      currentTabStopId: g,
      onItemFocus: y.useCallback(
        ($) => b($),
        [b]
      ),
      onItemShiftTab: y.useCallback(() => w(!0), []),
      onFocusableItemAdd: y.useCallback(
        () => F(($) => $ + 1),
        []
      ),
      onFocusableItemRemove: y.useCallback(
        () => F(($) => $ - 1),
        []
      ),
      children: /* @__PURE__ */ h.jsx(
        e2.div,
        {
          tabIndex: x || P === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: m,
          style: { outline: "none", ...e.style },
          onMouseDown: Re(e.onMouseDown, () => {
            _.current = !0;
          }),
          onFocus: Re(e.onFocus, ($) => {
            const le = !_.current;
            if ($.target === $.currentTarget && le && !x) {
              const pe = new CustomEvent(ea, fE);
              if ($.currentTarget.dispatchEvent(pe), !pe.defaultPrevented) {
                const fe = S().filter((k) => k.focusable), D = fe.find((k) => k.active), Q = fe.find((k) => k.id === g), re = [D, Q, ...fe].filter(
                  Boolean
                ).map((k) => k.ref.current);
                od(re, u);
              }
            }
            _.current = !1;
          }),
          onBlur: Re(e.onBlur, () => w(!1))
        }
      )
    }
  );
}), rd = "RovingFocusGroupItem", id = y.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: i = !1,
      tabStopId: o,
      ...a
    } = e, s = wr(), l = o || s, c = mE(rd, n), u = c.currentTabStopId === l, d = ed(n), { onFocusableItemAdd: p, onFocusableItemRemove: m } = c;
    return y.useEffect(() => {
      if (r)
        return p(), () => m();
    }, [r, p, m]), /* @__PURE__ */ h.jsx(
      ts.ItemSlot,
      {
        scope: n,
        id: l,
        focusable: r,
        active: i,
        children: /* @__PURE__ */ h.jsx(
          e2.span,
          {
            tabIndex: u ? 0 : -1,
            "data-orientation": c.orientation,
            ...a,
            ref: t,
            onMouseDown: Re(e.onMouseDown, (C) => {
              r ? c.onItemFocus(l) : C.preventDefault();
            }),
            onFocus: Re(e.onFocus, () => c.onItemFocus(l)),
            onKeyDown: Re(e.onKeyDown, (C) => {
              if (C.key === "Tab" && C.shiftKey) {
                c.onItemShiftTab();
                return;
              }
              if (C.target !== C.currentTarget) return;
              const g = yE(C, c.orientation, c.dir);
              if (g !== void 0) {
                if (C.metaKey || C.ctrlKey || C.altKey || C.shiftKey) return;
                C.preventDefault();
                let x = d().filter((w) => w.focusable).map((w) => w.ref.current);
                if (g === "last") x.reverse();
                else if (g === "prev" || g === "next") {
                  g === "prev" && x.reverse();
                  const w = x.indexOf(C.currentTarget);
                  x = c.loop ? bE(x, w + 1) : x.slice(w + 1);
                }
                setTimeout(() => od(x));
              }
            })
          }
        )
      }
    );
  }
);
id.displayName = rd;
var gE = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function vE(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function yE(e, t, n) {
  const r = vE(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return gE[r];
}
function od(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function bE(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var xE = nd, wE = id, ns = ["Enter", " "], _E = ["ArrowDown", "PageUp", "Home"], ad = ["ArrowUp", "PageDown", "End"], EE = [..._E, ...ad], SE = {
  ltr: [...ns, "ArrowRight"],
  rtl: [...ns, "ArrowLeft"]
}, ME = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, In = "Menu", [An, AE, TE] = Xs(In), [Bt, sd] = $t(In, [
  TE,
  Uf,
  td
]), Di = Uf(), ld = td(), [OE, Ut] = Bt(In), [RE, Dn] = Bt(In), cd = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: i, onOpenChange: o, modal: a = !0 } = e, s = Di(t), [l, c] = y.useState(null), u = y.useRef(!1), d = E2(o), p = kf(i);
  return y.useEffect(() => {
    const m = () => {
      u.current = !0, document.addEventListener("pointerdown", C, { capture: !0, once: !0 }), document.addEventListener("pointermove", C, { capture: !0, once: !0 });
    }, C = () => u.current = !1;
    return document.addEventListener("keydown", m, { capture: !0 }), () => {
      document.removeEventListener("keydown", m, { capture: !0 }), document.removeEventListener("pointerdown", C, { capture: !0 }), document.removeEventListener("pointermove", C, { capture: !0 });
    };
  }, []), /* @__PURE__ */ h.jsx(sE, { ...s, children: /* @__PURE__ */ h.jsx(
    OE,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: l,
      onContentChange: c,
      children: /* @__PURE__ */ h.jsx(
        RE,
        {
          scope: t,
          onClose: y.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: u,
          dir: p,
          modal: a,
          children: r
        }
      )
    }
  ) });
};
cd.displayName = In;
var FE = "MenuAnchor", ul = y.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, i = Di(n);
    return /* @__PURE__ */ h.jsx(lE, { ...i, ...r, ref: t });
  }
);
ul.displayName = FE;
var fl = "MenuPortal", [PE, ud] = Bt(fl, {
  forceMount: void 0
}), fd = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: i } = e, o = Ut(fl, t);
  return /* @__PURE__ */ h.jsx(PE, { scope: t, forceMount: n, children: /* @__PURE__ */ h.jsx(Z0, { present: n || o.open, children: /* @__PURE__ */ h.jsx(Pi, { asChild: !0, container: i, children: r }) }) });
};
fd.displayName = fl;
var J2 = "MenuContent", [kE, dl] = Bt(J2), dd = y.forwardRef(
  (e, t) => {
    const n = ud(J2, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, o = Ut(J2, e.__scopeMenu), a = Dn(J2, e.__scopeMenu);
    return /* @__PURE__ */ h.jsx(An.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ h.jsx(Z0, { present: r || o.open, children: /* @__PURE__ */ h.jsx(An.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ h.jsx(HE, { ...i, ref: t }) : /* @__PURE__ */ h.jsx(NE, { ...i, ref: t }) }) }) });
  }
), HE = y.forwardRef(
  (e, t) => {
    const n = Ut(J2, e.__scopeMenu), r = y.useRef(null), i = y2(t, r);
    return y.useEffect(() => {
      const o = r.current;
      if (o) return L8(o);
    }, []), /* @__PURE__ */ h.jsx(
      pl,
      {
        ...e,
        ref: i,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: Re(
          e.onFocusOutside,
          (o) => o.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), NE = y.forwardRef((e, t) => {
  const n = Ut(J2, e.__scopeMenu);
  return /* @__PURE__ */ h.jsx(
    pl,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), pl = y.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: i,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: s,
      onEntryFocus: l,
      onEscapeKeyDown: c,
      onPointerDownOutside: u,
      onFocusOutside: d,
      onInteractOutside: p,
      onDismiss: m,
      disableOutsideScroll: C,
      ...g
    } = e, b = Ut(J2, n), x = Dn(J2, n), w = Di(n), E = ld(n), S = AE(n), [_, P] = y.useState(null), F = y.useRef(null), $ = y2(t, F, b.onContentChange), le = y.useRef(0), pe = y.useRef(""), fe = y.useRef(0), D = y.useRef(null), Q = y.useRef("right"), N = y.useRef(0), re = C ? zs : y.Fragment, k = C ? { as: k0, allowPinchZoom: !0 } : void 0, ce = (X) => {
      var G, oe;
      const j = pe.current + X, B = S().filter((de) => !de.disabled), he = document.activeElement, H = (G = B.find((de) => de.ref.current === he)) == null ? void 0 : G.textValue, Y = B.map((de) => de.textValue), ie = qE(Y, j, H), q = (oe = B.find((de) => de.textValue === ie)) == null ? void 0 : oe.ref.current;
      (function de(ve) {
        pe.current = ve, window.clearTimeout(le.current), ve !== "" && (le.current = window.setTimeout(() => de(""), 1e3));
      })(j), q && setTimeout(() => q.focus());
    };
    y.useEffect(() => () => window.clearTimeout(le.current), []), A8();
    const xe = y.useCallback((X) => {
      var B, he;
      return Q.current === ((B = D.current) == null ? void 0 : B.side) && GE(X, (he = D.current) == null ? void 0 : he.area);
    }, []);
    return /* @__PURE__ */ h.jsx(
      kE,
      {
        scope: n,
        searchRef: pe,
        onItemEnter: y.useCallback(
          (X) => {
            xe(X) && X.preventDefault();
          },
          [xe]
        ),
        onItemLeave: y.useCallback(
          (X) => {
            var j;
            xe(X) || ((j = F.current) == null || j.focus(), P(null));
          },
          [xe]
        ),
        onTriggerLeave: y.useCallback(
          (X) => {
            xe(X) && X.preventDefault();
          },
          [xe]
        ),
        pointerGraceTimerRef: fe,
        onPointerGraceIntentChange: y.useCallback((X) => {
          D.current = X;
        }, []),
        children: /* @__PURE__ */ h.jsx(re, { ...k, children: /* @__PURE__ */ h.jsx(
          Zs,
          {
            asChild: !0,
            trapped: i,
            onMountAutoFocus: Re(o, (X) => {
              var j;
              X.preventDefault(), (j = F.current) == null || j.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ h.jsx(
              Fi,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: c,
                onPointerDownOutside: u,
                onFocusOutside: d,
                onInteractOutside: p,
                onDismiss: m,
                children: /* @__PURE__ */ h.jsx(
                  xE,
                  {
                    asChild: !0,
                    ...E,
                    dir: x.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: _,
                    onCurrentTabStopIdChange: P,
                    onEntryFocus: Re(l, (X) => {
                      x.isUsingKeyboardRef.current || X.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ h.jsx(
                      cE,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Td(b.open),
                        "data-radix-menu-content": "",
                        dir: x.dir,
                        ...w,
                        ...g,
                        ref: $,
                        style: { outline: "none", ...g.style },
                        onKeyDown: Re(g.onKeyDown, (X) => {
                          const B = X.target.closest("[data-radix-menu-content]") === X.currentTarget, he = X.ctrlKey || X.altKey || X.metaKey, H = X.key.length === 1;
                          B && (X.key === "Tab" && X.preventDefault(), !he && H && ce(X.key));
                          const Y = F.current;
                          if (X.target !== Y || !EE.includes(X.key)) return;
                          X.preventDefault();
                          const q = S().filter((G) => !G.disabled).map((G) => G.ref.current);
                          ad.includes(X.key) && q.reverse(), UE(q);
                        }),
                        onBlur: Re(e.onBlur, (X) => {
                          X.currentTarget.contains(X.target) || (window.clearTimeout(le.current), pe.current = "");
                        }),
                        onPointerMove: Re(
                          e.onPointerMove,
                          Tn((X) => {
                            const j = X.target, B = N.current !== X.clientX;
                            if (X.currentTarget.contains(j) && B) {
                              const he = X.clientX > N.current ? "right" : "left";
                              Q.current = he, N.current = X.clientX;
                            }
                          })
                        )
                      }
                    )
                  }
                )
              }
            )
          }
        ) })
      }
    );
  }
);
dd.displayName = J2;
var LE = "MenuGroup", hl = y.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ h.jsx(e2.div, { role: "group", ...r, ref: t });
  }
);
hl.displayName = LE;
var VE = "MenuLabel", pd = y.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ h.jsx(e2.div, { ...r, ref: t });
  }
);
pd.displayName = VE;
var Qr = "MenuItem", t3 = "menu.itemSelect", Zi = y.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...i } = e, o = y.useRef(null), a = Dn(Qr, e.__scopeMenu), s = dl(Qr, e.__scopeMenu), l = y2(t, o), c = y.useRef(!1), u = () => {
      const d = o.current;
      if (!n && d) {
        const p = new CustomEvent(t3, { bubbles: !0, cancelable: !0 });
        d.addEventListener(t3, (m) => r == null ? void 0 : r(m), { once: !0 }), Es(d, p), p.defaultPrevented ? c.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ h.jsx(
      hd,
      {
        ...i,
        ref: l,
        disabled: n,
        onClick: Re(e.onClick, u),
        onPointerDown: (d) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, d), c.current = !0;
        },
        onPointerUp: Re(e.onPointerUp, (d) => {
          var p;
          c.current || (p = d.currentTarget) == null || p.click();
        }),
        onKeyDown: Re(e.onKeyDown, (d) => {
          const p = s.searchRef.current !== "";
          n || p && d.key === " " || ns.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
Zi.displayName = Qr;
var hd = y.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: i, ...o } = e, a = dl(Qr, n), s = ld(n), l = y.useRef(null), c = y2(t, l), [u, d] = y.useState(!1), [p, m] = y.useState("");
    return y.useEffect(() => {
      const C = l.current;
      C && m((C.textContent ?? "").trim());
    }, [o.children]), /* @__PURE__ */ h.jsx(
      An.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: i ?? p,
        children: /* @__PURE__ */ h.jsx(wE, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ h.jsx(
          e2.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...o,
            ref: c,
            onPointerMove: Re(
              e.onPointerMove,
              Tn((C) => {
                r ? a.onItemLeave(C) : (a.onItemEnter(C), C.defaultPrevented || C.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: Re(
              e.onPointerLeave,
              Tn((C) => a.onItemLeave(C))
            ),
            onFocus: Re(e.onFocus, () => d(!0)),
            onBlur: Re(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), jE = "MenuCheckboxItem", md = y.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...i } = e;
    return /* @__PURE__ */ h.jsx(bd, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ h.jsx(
      Zi,
      {
        role: "menuitemcheckbox",
        "aria-checked": ei(n) ? "mixed" : n,
        ...i,
        ref: t,
        "data-state": Cl(n),
        onSelect: Re(
          i.onSelect,
          () => r == null ? void 0 : r(ei(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
md.displayName = jE;
var Cd = "MenuRadioGroup", [IE, DE] = Bt(
  Cd,
  { value: void 0, onValueChange: () => {
  } }
), gd = y.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...i } = e, o = E2(r);
    return /* @__PURE__ */ h.jsx(IE, { scope: e.__scopeMenu, value: n, onValueChange: o, children: /* @__PURE__ */ h.jsx(hl, { ...i, ref: t }) });
  }
);
gd.displayName = Cd;
var vd = "MenuRadioItem", yd = y.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, i = DE(vd, e.__scopeMenu), o = n === i.value;
    return /* @__PURE__ */ h.jsx(bd, { scope: e.__scopeMenu, checked: o, children: /* @__PURE__ */ h.jsx(
      Zi,
      {
        role: "menuitemradio",
        "aria-checked": o,
        ...r,
        ref: t,
        "data-state": Cl(o),
        onSelect: Re(
          r.onSelect,
          () => {
            var a;
            return (a = i.onValueChange) == null ? void 0 : a.call(i, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
yd.displayName = vd;
var ml = "MenuItemIndicator", [bd, ZE] = Bt(
  ml,
  { checked: !1 }
), xd = y.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...i } = e, o = ZE(ml, n);
    return /* @__PURE__ */ h.jsx(
      Z0,
      {
        present: r || ei(o.checked) || o.checked === !0,
        children: /* @__PURE__ */ h.jsx(
          e2.span,
          {
            ...i,
            ref: t,
            "data-state": Cl(o.checked)
          }
        )
      }
    );
  }
);
xd.displayName = ml;
var zE = "MenuSeparator", wd = y.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ h.jsx(
      e2.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
wd.displayName = zE;
var $E = "MenuArrow", _d = y.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, i = Di(n);
    return /* @__PURE__ */ h.jsx(uE, { ...i, ...r, ref: t });
  }
);
_d.displayName = $E;
var BE = "MenuSub", [VM, Ed] = Bt(BE), U1 = "MenuSubTrigger", Sd = y.forwardRef(
  (e, t) => {
    const n = Ut(U1, e.__scopeMenu), r = Dn(U1, e.__scopeMenu), i = Ed(U1, e.__scopeMenu), o = dl(U1, e.__scopeMenu), a = y.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: l } = o, c = { __scopeMenu: e.__scopeMenu }, u = y.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return y.useEffect(() => u, [u]), y.useEffect(() => {
      const d = s.current;
      return () => {
        window.clearTimeout(d), l(null);
      };
    }, [s, l]), /* @__PURE__ */ h.jsx(ul, { asChild: !0, ...c, children: /* @__PURE__ */ h.jsx(
      hd,
      {
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": i.contentId,
        "data-state": Td(n.open),
        ...e,
        ref: _s(t, i.onTriggerChange),
        onClick: (d) => {
          var p;
          (p = e.onClick) == null || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: Re(
          e.onPointerMove,
          Tn((d) => {
            o.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !a.current && (o.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: Re(
          e.onPointerLeave,
          Tn((d) => {
            var m, C;
            u();
            const p = (m = n.content) == null ? void 0 : m.getBoundingClientRect();
            if (p) {
              const g = (C = n.content) == null ? void 0 : C.dataset.side, b = g === "right", x = b ? -5 : 5, w = p[b ? "left" : "right"], E = p[b ? "right" : "left"];
              o.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + x, y: d.clientY },
                  { x: w, y: p.top },
                  { x: E, y: p.top },
                  { x: E, y: p.bottom },
                  { x: w, y: p.bottom }
                ],
                side: g
              }), window.clearTimeout(s.current), s.current = window.setTimeout(
                () => o.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (o.onTriggerLeave(d), d.defaultPrevented) return;
              o.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: Re(e.onKeyDown, (d) => {
          var m;
          const p = o.searchRef.current !== "";
          e.disabled || p && d.key === " " || SE[r.dir].includes(d.key) && (n.onOpenChange(!0), (m = n.content) == null || m.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
Sd.displayName = U1;
var Md = "MenuSubContent", Ad = y.forwardRef(
  (e, t) => {
    const n = ud(J2, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, o = Ut(J2, e.__scopeMenu), a = Dn(J2, e.__scopeMenu), s = Ed(Md, e.__scopeMenu), l = y.useRef(null), c = y2(t, l);
    return /* @__PURE__ */ h.jsx(An.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ h.jsx(Z0, { present: r || o.open, children: /* @__PURE__ */ h.jsx(An.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ h.jsx(
      pl,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...i,
        ref: c,
        align: "start",
        side: a.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (u) => {
          var d;
          a.isUsingKeyboardRef.current && ((d = l.current) == null || d.focus()), u.preventDefault();
        },
        onCloseAutoFocus: (u) => u.preventDefault(),
        onFocusOutside: Re(e.onFocusOutside, (u) => {
          u.target !== s.trigger && o.onOpenChange(!1);
        }),
        onEscapeKeyDown: Re(e.onEscapeKeyDown, (u) => {
          a.onClose(), u.preventDefault();
        }),
        onKeyDown: Re(e.onKeyDown, (u) => {
          var m;
          const d = u.currentTarget.contains(u.target), p = ME[a.dir].includes(u.key);
          d && p && (o.onOpenChange(!1), (m = s.trigger) == null || m.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
Ad.displayName = Md;
function Td(e) {
  return e ? "open" : "closed";
}
function ei(e) {
  return e === "indeterminate";
}
function Cl(e) {
  return ei(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function UE(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function WE(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function qE(e, t, n) {
  const i = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t, o = n ? e.indexOf(n) : -1;
  let a = WE(e, Math.max(o, 0));
  i.length === 1 && (a = a.filter((c) => c !== n));
  const l = a.find(
    (c) => c.toLowerCase().startsWith(i.toLowerCase())
  );
  return l !== n ? l : void 0;
}
function YE(e, t) {
  const { x: n, y: r } = e;
  let i = !1;
  for (let o = 0, a = t.length - 1; o < t.length; a = o++) {
    const s = t[o].x, l = t[o].y, c = t[a].x, u = t[a].y;
    l > r != u > r && n < (c - s) * (r - l) / (u - l) + s && (i = !i);
  }
  return i;
}
function GE(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return YE(n, t);
}
function Tn(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var KE = cd, XE = ul, JE = fd, QE = dd, eS = hl, tS = pd, nS = Zi, rS = md, iS = gd, oS = yd, aS = xd, sS = wd, lS = _d, cS = Sd, uS = Ad, gl = "ContextMenu", [fS, jM] = $t(gl, [
  sd
]), O2 = sd(), [dS, Od] = fS(gl), Rd = (e) => {
  const { __scopeContextMenu: t, children: n, onOpenChange: r, dir: i, modal: o = !0 } = e, [a, s] = y.useState(!1), l = O2(t), c = E2(r), u = y.useCallback(
    (d) => {
      s(d), c(d);
    },
    [c]
  );
  return /* @__PURE__ */ h.jsx(
    dS,
    {
      scope: t,
      open: a,
      onOpenChange: u,
      modal: o,
      children: /* @__PURE__ */ h.jsx(
        KE,
        {
          ...l,
          dir: i,
          open: a,
          onOpenChange: u,
          modal: o,
          children: n
        }
      )
    }
  );
};
Rd.displayName = gl;
var Fd = "ContextMenuTrigger", Pd = y.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, disabled: r = !1, ...i } = e, o = Od(Fd, n), a = O2(n), s = y.useRef({ x: 0, y: 0 }), l = y.useRef({
      getBoundingClientRect: () => DOMRect.fromRect({ width: 0, height: 0, ...s.current })
    }), c = y.useRef(0), u = y.useCallback(
      () => window.clearTimeout(c.current),
      []
    ), d = (p) => {
      s.current = { x: p.clientX, y: p.clientY }, o.onOpenChange(!0);
    };
    return y.useEffect(() => u, [u]), y.useEffect(() => void (r && u()), [r, u]), /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
      /* @__PURE__ */ h.jsx(XE, { ...a, virtualRef: l }),
      /* @__PURE__ */ h.jsx(
        e2.span,
        {
          "data-state": o.open ? "open" : "closed",
          "data-disabled": r ? "" : void 0,
          ...i,
          ref: t,
          style: { WebkitTouchCallout: "none", ...e.style },
          onContextMenu: r ? e.onContextMenu : Re(e.onContextMenu, (p) => {
            u(), d(p), p.preventDefault();
          }),
          onPointerDown: r ? e.onPointerDown : Re(
            e.onPointerDown,
            ar((p) => {
              u(), c.current = window.setTimeout(() => d(p), 700);
            })
          ),
          onPointerMove: r ? e.onPointerMove : Re(e.onPointerMove, ar(u)),
          onPointerCancel: r ? e.onPointerCancel : Re(e.onPointerCancel, ar(u)),
          onPointerUp: r ? e.onPointerUp : Re(e.onPointerUp, ar(u))
        }
      )
    ] });
  }
);
Pd.displayName = Fd;
var pS = "ContextMenuPortal", kd = (e) => {
  const { __scopeContextMenu: t, ...n } = e, r = O2(t);
  return /* @__PURE__ */ h.jsx(JE, { ...r, ...n });
};
kd.displayName = pS;
var Hd = "ContextMenuContent", Nd = y.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, i = Od(Hd, n), o = O2(n), a = y.useRef(!1);
    return /* @__PURE__ */ h.jsx(
      QE,
      {
        ...o,
        ...r,
        ref: t,
        side: "right",
        sideOffset: 2,
        align: "start",
        onCloseAutoFocus: (s) => {
          var l;
          (l = e.onCloseAutoFocus) == null || l.call(e, s), !s.defaultPrevented && a.current && s.preventDefault(), a.current = !1;
        },
        onInteractOutside: (s) => {
          var l;
          (l = e.onInteractOutside) == null || l.call(e, s), !s.defaultPrevented && !i.modal && (a.current = !0);
        },
        style: {
          ...e.style,
          "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Nd.displayName = Hd;
var hS = "ContextMenuGroup", mS = y.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, i = O2(n);
    return /* @__PURE__ */ h.jsx(eS, { ...i, ...r, ref: t });
  }
);
mS.displayName = hS;
var CS = "ContextMenuLabel", Ld = y.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, i = O2(n);
    return /* @__PURE__ */ h.jsx(tS, { ...i, ...r, ref: t });
  }
);
Ld.displayName = CS;
var gS = "ContextMenuItem", Vd = y.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, i = O2(n);
    return /* @__PURE__ */ h.jsx(nS, { ...i, ...r, ref: t });
  }
);
Vd.displayName = gS;
var vS = "ContextMenuCheckboxItem", jd = y.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, i = O2(n);
  return /* @__PURE__ */ h.jsx(rS, { ...i, ...r, ref: t });
});
jd.displayName = vS;
var yS = "ContextMenuRadioGroup", bS = y.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, i = O2(n);
  return /* @__PURE__ */ h.jsx(iS, { ...i, ...r, ref: t });
});
bS.displayName = yS;
var xS = "ContextMenuRadioItem", Id = y.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, i = O2(n);
  return /* @__PURE__ */ h.jsx(oS, { ...i, ...r, ref: t });
});
Id.displayName = xS;
var wS = "ContextMenuItemIndicator", Dd = y.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, i = O2(n);
  return /* @__PURE__ */ h.jsx(aS, { ...i, ...r, ref: t });
});
Dd.displayName = wS;
var _S = "ContextMenuSeparator", Zd = y.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, i = O2(n);
  return /* @__PURE__ */ h.jsx(sS, { ...i, ...r, ref: t });
});
Zd.displayName = _S;
var ES = "ContextMenuArrow", SS = y.forwardRef(
  (e, t) => {
    const { __scopeContextMenu: n, ...r } = e, i = O2(n);
    return /* @__PURE__ */ h.jsx(lS, { ...i, ...r, ref: t });
  }
);
SS.displayName = ES;
var MS = "ContextMenuSubTrigger", zd = y.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, i = O2(n);
  return /* @__PURE__ */ h.jsx(cS, { ...i, ...r, ref: t });
});
zd.displayName = MS;
var AS = "ContextMenuSubContent", $d = y.forwardRef((e, t) => {
  const { __scopeContextMenu: n, ...r } = e, i = O2(n);
  return /* @__PURE__ */ h.jsx(
    uS,
    {
      ...i,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-context-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-context-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-context-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-context-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-context-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
$d.displayName = AS;
function ar(e) {
  return (t) => t.pointerType !== "mouse" ? e(t) : void 0;
}
var TS = Rd, OS = Pd, RS = kd, Bd = Nd, Ud = Ld, Wd = Vd, qd = jd, Yd = Id, Gd = Dd, Kd = Zd, Xd = zd, Jd = $d;
const Qd = TS, e6 = OS, t6 = RS, FS = y.forwardRef(({ className: e, inset: t, children: n, ...r }, i) => /* @__PURE__ */ h.jsxs(
  Xd,
  {
    ref: i,
    className: Oe(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[state=open]:bg-slate-100 data-[state=open]:text-slate-900 dark:focus:bg-slate-800 dark:focus:text-slate-50 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-50",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ h.jsx(Ju, { className: "ml-auto h-4 w-4" })
    ]
  }
));
FS.displayName = Xd.displayName;
const PS = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  Jd,
  {
    ref: n,
    className: Oe(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      e
    ),
    ...t
  }
));
PS.displayName = Jd.displayName;
const vl = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  Bd,
  {
    ref: n,
    className: Oe(
      "z-[900] min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      e
    ),
    ...t
  }
));
vl.displayName = Bd.displayName;
const R0 = y.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ h.jsx(
  Wd,
  {
    ref: r,
    className: Oe(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
R0.displayName = Wd.displayName;
const kS = y.forwardRef(({ className: e, children: t, checked: n, ...r }, i) => /* @__PURE__ */ h.jsxs(
  qd,
  {
    ref: i,
    className: Oe(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ h.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ h.jsx(Gd, { children: /* @__PURE__ */ h.jsx(gm, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
kS.displayName = qd.displayName;
const HS = y.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ h.jsxs(
  Yd,
  {
    ref: r,
    className: Oe(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ h.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ h.jsx(Gd, { children: /* @__PURE__ */ h.jsx(ym, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
HS.displayName = Yd.displayName;
const NS = y.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ h.jsx(
  Ud,
  {
    ref: r,
    className: Oe(
      "px-2 py-1.5 text-sm font-semibold text-slate-950 dark:text-slate-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
NS.displayName = Ud.displayName;
const On = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  Kd,
  {
    ref: n,
    className: Oe("-mx-1 my-1 h-px bg-slate-200 dark:bg-slate-800", e),
    ...t
  }
));
On.displayName = Kd.displayName;
function LS() {
  var a;
  const e = Q2(), { items: t, status: n, error: r } = Z2((s) => s.media), i = Z2((s) => s.folder), { dialogContainer: o } = Ui();
  return a0(() => {
    i.currentFolder && (i.currentFolder.id === -1 ? e(ot({
      // createdAt: ,
    })) : e(ot({ folder: [String(i.currentFolder.id)] })));
  }, [i.currentFolder]), n === "loading" || n === "idle" ? /* @__PURE__ */ h.jsx("div", { className: "p-3 h-[calc(100%-10rem)] overflow-y-auto", children: /* @__PURE__ */ h.jsx("div", { className: "grid grid-cols-[repeat(auto-fit,minmax(200px,2fr))] gap-2", children: [...Array.from(Array(30).keys())].map((s) => /* @__PURE__ */ h.jsx(Ig, {}, s)) }) }) : n === "failed" ? /* @__PURE__ */ h.jsx("div", { className: "p-3", children: /* @__PURE__ */ h.jsxs(A4, { variant: "destructive", children: [
    /* @__PURE__ */ h.jsx(vm, { className: "h-4 w-4" }),
    /* @__PURE__ */ h.jsx(T4, { children: "Error" }),
    /* @__PURE__ */ h.jsx(O4, { children: r })
  ] }) }) : t.length === 0 ? /* @__PURE__ */ h.jsx("div", { className: "p-3 h-[calc(100%-10rem)] overflow-y-auto", children: /* @__PURE__ */ h.jsx("div", { className: "h-full flex justify-center content-center items-center text-2xl", children: /* @__PURE__ */ h.jsxs("div", { className: "p-6 border-2 border-dashed border-secondary rounded-xl flex flex-col gap-3", children: [
    "Le dossier ",
    (a = i.currentFolder) == null ? void 0 : a.label,
    " ne contient aucun média.",
    /* @__PURE__ */ h.jsx(Pf, { title: "Ajouter un media" })
  ] }) }) }) : /* @__PURE__ */ h.jsx("div", { className: "p-3 h-[calc(100%-10rem)] overflow-y-auto", children: /* @__PURE__ */ h.jsx("div", { className: "grid grid-cols-[repeat(auto-fit,minmax(200px,2fr))] gap-2", children: t.length > 0 && t.map(
    (s) => /* @__PURE__ */ h.jsxs(Qd, { children: [
      /* @__PURE__ */ h.jsx(e6, { children: /* @__PURE__ */ h.jsx(jg, { media: s }) }),
      /* @__PURE__ */ h.jsx(t6, { container: o, children: /* @__PURE__ */ h.jsxs(vl, { children: [
        /* @__PURE__ */ h.jsx(R0, { onClick: () => {
        }, children: "Aperçu" }),
        /* @__PURE__ */ h.jsx(On, {}),
        /* @__PURE__ */ h.jsx(R0, { onClick: () => {
        }, children: "Déplacer" }),
        /* @__PURE__ */ h.jsx(R0, { onClick: () => {
          e(Hr(s));
        }, children: "Modifier" }),
        /* @__PURE__ */ h.jsx(On, {}),
        /* @__PURE__ */ h.jsx(
          R0,
          {
            className: "focus:bg-destructive focus:text-destructive-foreground",
            onClick: () => {
            },
            children: "Supprimer"
          }
        )
      ] }) })
    ] }, s.id)
  ) }) });
}
var Zn = (e) => e.type === "checkbox", a1 = (e) => e instanceof Date, M2 = (e) => e == null;
const n6 = (e) => typeof e == "object";
var b2 = (e) => !M2(e) && !Array.isArray(e) && n6(e) && !a1(e), r6 = (e) => b2(e) && e.target ? Zn(e.target) ? e.target.checked : e.target.value : e, VS = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, i6 = (e, t) => e.has(VS(t)), jS = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return b2(t) && t.hasOwnProperty("isPrototypeOf");
}, yl = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function H2(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(yl && (e instanceof Blob || e instanceof FileList)) && (n || b2(e)))
    if (t = n ? [] : {}, !n && !jS(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = H2(e[r]));
  else
    return e;
  return t;
}
var zi = (e) => Array.isArray(e) ? e.filter(Boolean) : [], p2 = (e) => e === void 0, ue = (e, t, n) => {
  if (!t || !b2(e))
    return n;
  const r = zi(t.split(/[,[\].]+?/)).reduce((i, o) => M2(i) ? i : i[o], e);
  return p2(r) || r === e ? p2(e[t]) ? n : e[t] : r;
}, h0 = (e) => typeof e == "boolean", bl = (e) => /^\w*$/.test(e), o6 = (e) => zi(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Qe = (e, t, n) => {
  let r = -1;
  const i = bl(t) ? [t] : o6(t), o = i.length, a = o - 1;
  for (; ++r < o; ) {
    const s = i[r];
    let l = n;
    if (r !== a) {
      const c = e[s];
      l = b2(c) || Array.isArray(c) ? c : isNaN(+i[r + 1]) ? {} : [];
    }
    if (s === "__proto__")
      return;
    e[s] = l, e = e[s];
  }
  return e;
};
const ti = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, e0 = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, A0 = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, a6 = Ve.createContext(null), $i = () => Ve.useContext(a6), IS = (e) => {
  const { children: t, ...n } = e;
  return Ve.createElement(a6.Provider, { value: n }, t);
};
var s6 = (e, t, n, r = !0) => {
  const i = {
    defaultValues: t._defaultValues
  };
  for (const o in e)
    Object.defineProperty(i, o, {
      get: () => {
        const a = o;
        return t._proxyFormState[a] !== e0.all && (t._proxyFormState[a] = !r || e0.all), n && (n[a] = !0), e[a];
      }
    });
  return i;
}, N2 = (e) => b2(e) && !Object.keys(e).length, l6 = (e, t, n, r) => {
  n(e);
  const { name: i, ...o } = e;
  return N2(o) || Object.keys(o).length >= Object.keys(t).length || Object.keys(o).find((a) => t[a] === (!r || e0.all));
}, J1 = (e) => Array.isArray(e) ? e : [e], c6 = (e, t, n) => !e || !t || e === t || J1(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function xl(e) {
  const t = Ve.useRef(e);
  t.current = e, Ve.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function DS(e) {
  const t = $i(), { control: n = t.control, disabled: r, name: i, exact: o } = e || {}, [a, s] = Ve.useState(n._formState), l = Ve.useRef(!0), c = Ve.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = Ve.useRef(i);
  return u.current = i, xl({
    disabled: r,
    next: (d) => l.current && c6(u.current, d.name, o) && l6(d, c.current, n._updateFormState) && s({
      ...n._formState,
      ...d
    }),
    subject: n._subjects.state
  }), Ve.useEffect(() => (l.current = !0, c.current.isValid && n._updateValid(!0), () => {
    l.current = !1;
  }), [n]), s6(a, n, c.current, !1);
}
var v0 = (e) => typeof e == "string", u6 = (e, t, n, r, i) => v0(e) ? (r && t.watch.add(e), ue(n, e, i)) : Array.isArray(e) ? e.map((o) => (r && t.watch.add(o), ue(n, o))) : (r && (t.watchAll = !0), n);
function ZS(e) {
  const t = $i(), { control: n = t.control, name: r, defaultValue: i, disabled: o, exact: a } = e || {}, s = Ve.useRef(r);
  s.current = r, xl({
    disabled: o,
    subject: n._subjects.values,
    next: (u) => {
      c6(s.current, u.name, a) && c(H2(u6(s.current, n._names, u.values || n._formValues, !1, i)));
    }
  });
  const [l, c] = Ve.useState(n._getWatch(r, i));
  return Ve.useEffect(() => n._removeUnmounted()), l;
}
function zS(e) {
  const t = $i(), { name: n, disabled: r, control: i = t.control, shouldUnregister: o } = e, a = i6(i._names.array, n), s = ZS({
    control: i,
    name: n,
    defaultValue: ue(i._formValues, n, ue(i._defaultValues, n, e.defaultValue)),
    exact: !0
  }), l = DS({
    control: i,
    name: n,
    exact: !0
  }), c = Ve.useRef(i.register(n, {
    ...e.rules,
    value: s,
    ...h0(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return Ve.useEffect(() => {
    const u = i._options.shouldUnregister || o, d = (p, m) => {
      const C = ue(i._fields, p);
      C && C._f && (C._f.mount = m);
    };
    if (d(n, !0), u) {
      const p = H2(ue(i._options.defaultValues, n));
      Qe(i._defaultValues, n, p), p2(ue(i._formValues, n)) && Qe(i._formValues, n, p);
    }
    return () => {
      (a ? u && !i._state.action : u) ? i.unregister(n) : d(n, !1);
    };
  }, [n, i, a, o]), Ve.useEffect(() => {
    ue(i._fields, n) && i._updateDisabledField({
      disabled: r,
      fields: i._fields,
      name: n,
      value: ue(i._fields, n)._f.value
    });
  }, [r, n, i]), {
    field: {
      name: n,
      value: s,
      ...h0(r) || l.disabled ? { disabled: l.disabled || r } : {},
      onChange: Ve.useCallback((u) => c.current.onChange({
        target: {
          value: r6(u),
          name: n
        },
        type: ti.CHANGE
      }), [n]),
      onBlur: Ve.useCallback(() => c.current.onBlur({
        target: {
          value: ue(i._formValues, n),
          name: n
        },
        type: ti.BLUR
      }), [n, i]),
      ref: Ve.useCallback((u) => {
        const d = ue(i._fields, n);
        d && u && (d._f.ref = {
          focus: () => u.focus(),
          select: () => u.select(),
          setCustomValidity: (p) => u.setCustomValidity(p),
          reportValidity: () => u.reportValidity()
        });
      }, [i._fields, n])
    },
    formState: l,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!ue(l.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!ue(l.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!ue(l.touchedFields, n)
      },
      isValidating: {
        enumerable: !0,
        get: () => !!ue(l.validatingFields, n)
      },
      error: {
        enumerable: !0,
        get: () => ue(l.errors, n)
      }
    })
  };
}
const $S = (e) => e.render(zS(e));
var f6 = (e, t, n, r, i) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: i || !0
  }
} : {}, n3 = (e) => ({
  isOnSubmit: !e || e === e0.onSubmit,
  isOnBlur: e === e0.onBlur,
  isOnChange: e === e0.onChange,
  isOnAll: e === e0.all,
  isOnTouch: e === e0.onTouched
}), r3 = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const Q1 = (e, t, n, r) => {
  for (const i of n || Object.keys(e)) {
    const o = ue(e, i);
    if (o) {
      const { _f: a, ...s } = o;
      if (a) {
        if (a.refs && a.refs[0] && t(a.refs[0], i) && !r)
          break;
        if (a.ref && t(a.ref, a.name) && !r)
          break;
        Q1(s, t);
      } else b2(s) && Q1(s, t);
    }
  }
};
var BS = (e, t, n) => {
  const r = J1(ue(e, n));
  return Qe(r, "root", t[n]), Qe(e, n, r), e;
}, wl = (e) => e.type === "file", it = (e) => typeof e == "function", ni = (e) => {
  if (!yl)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Mr = (e) => v0(e), _l = (e) => e.type === "radio", ri = (e) => e instanceof RegExp;
const i3 = {
  value: !1,
  isValid: !1
}, o3 = { value: !0, isValid: !0 };
var d6 = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !p2(e[0].attributes.value) ? p2(e[0].value) || e[0].value === "" ? o3 : { value: e[0].value, isValid: !0 } : o3
    ) : i3;
  }
  return i3;
};
const a3 = {
  isValid: !1,
  value: null
};
var p6 = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, a3) : a3;
function s3(e, t, n = "validate") {
  if (Mr(e) || Array.isArray(e) && e.every(Mr) || h0(e) && !e)
    return {
      type: n,
      message: Mr(e) ? e : "",
      ref: t
    };
}
var Qt = (e) => b2(e) && !ri(e) ? e : {
  value: e,
  message: ""
}, l3 = async (e, t, n, r, i) => {
  const { ref: o, refs: a, required: s, maxLength: l, minLength: c, min: u, max: d, pattern: p, validate: m, name: C, valueAsNumber: g, mount: b, disabled: x } = e._f, w = ue(t, C);
  if (!b || x)
    return {};
  const E = a ? a[0] : o, S = (D) => {
    r && E.reportValidity && (E.setCustomValidity(h0(D) ? "" : D || ""), E.reportValidity());
  }, _ = {}, P = _l(o), F = Zn(o), $ = P || F, le = (g || wl(o)) && p2(o.value) && p2(w) || ni(o) && o.value === "" || w === "" || Array.isArray(w) && !w.length, pe = f6.bind(null, C, n, _), fe = (D, Q, N, re = A0.maxLength, k = A0.minLength) => {
    const ce = D ? Q : N;
    _[C] = {
      type: D ? re : k,
      message: ce,
      ref: o,
      ...pe(D ? re : k, ce)
    };
  };
  if (i ? !Array.isArray(w) || !w.length : s && (!$ && (le || M2(w)) || h0(w) && !w || F && !d6(a).isValid || P && !p6(a).isValid)) {
    const { value: D, message: Q } = Mr(s) ? { value: !!s, message: s } : Qt(s);
    if (D && (_[C] = {
      type: A0.required,
      message: Q,
      ref: E,
      ...pe(A0.required, Q)
    }, !n))
      return S(Q), _;
  }
  if (!le && (!M2(u) || !M2(d))) {
    let D, Q;
    const N = Qt(d), re = Qt(u);
    if (!M2(w) && !isNaN(w)) {
      const k = o.valueAsNumber || w && +w;
      M2(N.value) || (D = k > N.value), M2(re.value) || (Q = k < re.value);
    } else {
      const k = o.valueAsDate || new Date(w), ce = (j) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + j), xe = o.type == "time", X = o.type == "week";
      v0(N.value) && w && (D = xe ? ce(w) > ce(N.value) : X ? w > N.value : k > new Date(N.value)), v0(re.value) && w && (Q = xe ? ce(w) < ce(re.value) : X ? w < re.value : k < new Date(re.value));
    }
    if ((D || Q) && (fe(!!D, N.message, re.message, A0.max, A0.min), !n))
      return S(_[C].message), _;
  }
  if ((l || c) && !le && (v0(w) || i && Array.isArray(w))) {
    const D = Qt(l), Q = Qt(c), N = !M2(D.value) && w.length > +D.value, re = !M2(Q.value) && w.length < +Q.value;
    if ((N || re) && (fe(N, D.message, Q.message), !n))
      return S(_[C].message), _;
  }
  if (p && !le && v0(w)) {
    const { value: D, message: Q } = Qt(p);
    if (ri(D) && !w.match(D) && (_[C] = {
      type: A0.pattern,
      message: Q,
      ref: o,
      ...pe(A0.pattern, Q)
    }, !n))
      return S(Q), _;
  }
  if (m) {
    if (it(m)) {
      const D = await m(w, t), Q = s3(D, E);
      if (Q && (_[C] = {
        ...Q,
        ...pe(A0.validate, Q.message)
      }, !n))
        return S(Q.message), _;
    } else if (b2(m)) {
      let D = {};
      for (const Q in m) {
        if (!N2(D) && !n)
          break;
        const N = s3(await m[Q](w, t), E, Q);
        N && (D = {
          ...N,
          ...pe(Q, N.message)
        }, S(N.message), n && (_[C] = D));
      }
      if (!N2(D) && (_[C] = {
        ref: E,
        ...D
      }, !n))
        return _;
    }
  }
  return S(!0), _;
};
function US(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = p2(e) ? r++ : e[t[r++]];
  return e;
}
function WS(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !p2(e[t]))
      return !1;
  return !0;
}
function v2(e, t) {
  const n = Array.isArray(t) ? t : bl(t) ? [t] : o6(t), r = n.length === 1 ? e : US(e, n), i = n.length - 1, o = n[i];
  return r && delete r[o], i !== 0 && (b2(r) && N2(r) || Array.isArray(r) && WS(r)) && v2(e, n.slice(0, -1)), e;
}
var ta = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (i) => {
      for (const o of e)
        o.next && o.next(i);
    },
    subscribe: (i) => (e.push(i), {
      unsubscribe: () => {
        e = e.filter((o) => o !== i);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, ii = (e) => M2(e) || !n6(e);
function Mt(e, t) {
  if (ii(e) || ii(t))
    return e === t;
  if (a1(e) && a1(t))
    return e.getTime() === t.getTime();
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (const i of n) {
    const o = e[i];
    if (!r.includes(i))
      return !1;
    if (i !== "ref") {
      const a = t[i];
      if (a1(o) && a1(a) || b2(o) && b2(a) || Array.isArray(o) && Array.isArray(a) ? !Mt(o, a) : o !== a)
        return !1;
    }
  }
  return !0;
}
var h6 = (e) => e.type === "select-multiple", qS = (e) => _l(e) || Zn(e), na = (e) => ni(e) && e.isConnected, m6 = (e) => {
  for (const t in e)
    if (it(e[t]))
      return !0;
  return !1;
};
function oi(e, t = {}) {
  const n = Array.isArray(e);
  if (b2(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || b2(e[r]) && !m6(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, oi(e[r], t[r])) : M2(e[r]) || (t[r] = !0);
  return t;
}
function C6(e, t, n) {
  const r = Array.isArray(e);
  if (b2(e) || r)
    for (const i in e)
      Array.isArray(e[i]) || b2(e[i]) && !m6(e[i]) ? p2(t) || ii(n[i]) ? n[i] = Array.isArray(e[i]) ? oi(e[i], []) : { ...oi(e[i]) } : C6(e[i], M2(t) ? {} : t[i], n[i]) : n[i] = !Mt(e[i], t[i]);
  return n;
}
var sr = (e, t) => C6(e, t, oi(t)), g6 = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => p2(e) ? e : t ? e === "" ? NaN : e && +e : n && v0(e) ? new Date(e) : r ? r(e) : e;
function ra(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return wl(t) ? t.files : _l(t) ? p6(e.refs).value : h6(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Zn(t) ? d6(e.refs).value : g6(p2(t.value) ? e.ref.value : t.value, e);
}
var YS = (e, t, n, r) => {
  const i = {};
  for (const o of e) {
    const a = ue(t, o);
    a && Qe(i, o, a._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: i,
    shouldUseNativeValidation: r
  };
}, V1 = (e) => p2(e) ? e : ri(e) ? e.source : b2(e) ? ri(e.value) ? e.value.source : e.value : e, GS = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function c3(e, t, n) {
  const r = ue(e, n);
  if (r || bl(n))
    return {
      error: r,
      name: n
    };
  const i = n.split(".");
  for (; i.length; ) {
    const o = i.join("."), a = ue(t, o), s = ue(e, o);
    if (a && !Array.isArray(a) && n !== o)
      return { name: n };
    if (s && s.type)
      return {
        name: o,
        error: s
      };
    i.pop();
  }
  return {
    name: n
  };
}
var KS = (e, t, n, r, i) => i.isOnAll ? !1 : !n && i.isOnTouch ? !(t || e) : (n ? r.isOnBlur : i.isOnBlur) ? !e : (n ? r.isOnChange : i.isOnChange) ? e : !0, XS = (e, t) => !zi(ue(e, t)).length && v2(e, t);
const JS = {
  mode: e0.onSubmit,
  reValidateMode: e0.onChange,
  shouldFocusError: !0
};
function QS(e = {}) {
  let t = {
    ...JS,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: it(t.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    validatingFields: {},
    errors: t.errors || {},
    disabled: t.disabled || !1
  }, r = {}, i = b2(t.defaultValues) || b2(t.values) ? H2(t.defaultValues || t.values) || {} : {}, o = t.shouldUnregister ? {} : H2(i), a = {
    action: !1,
    mount: !1,
    watch: !1
  }, s = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, l, c = 0;
  const u = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, d = {
    values: ta(),
    array: ta(),
    state: ta()
  }, p = n3(t.mode), m = n3(t.reValidateMode), C = t.criteriaMode === e0.all, g = (M) => (R) => {
    clearTimeout(c), c = setTimeout(M, R);
  }, b = async (M) => {
    if (u.isValid || M) {
      const R = t.resolver ? N2((await $()).errors) : await pe(r, !0);
      R !== n.isValid && d.state.next({
        isValid: R
      });
    }
  }, x = (M, R) => {
    (u.isValidating || u.validatingFields) && ((M || Array.from(s.mount)).forEach((V) => {
      V && (R ? Qe(n.validatingFields, V, R) : v2(n.validatingFields, V));
    }), d.state.next({
      validatingFields: n.validatingFields,
      isValidating: !N2(n.validatingFields)
    }));
  }, w = (M, R = [], V, f, A = !0, O = !0) => {
    if (f && V) {
      if (a.action = !0, O && Array.isArray(ue(r, M))) {
        const I = V(ue(r, M), f.argA, f.argB);
        A && Qe(r, M, I);
      }
      if (O && Array.isArray(ue(n.errors, M))) {
        const I = V(ue(n.errors, M), f.argA, f.argB);
        A && Qe(n.errors, M, I), XS(n.errors, M);
      }
      if (u.touchedFields && O && Array.isArray(ue(n.touchedFields, M))) {
        const I = V(ue(n.touchedFields, M), f.argA, f.argB);
        A && Qe(n.touchedFields, M, I);
      }
      u.dirtyFields && (n.dirtyFields = sr(i, o)), d.state.next({
        name: M,
        isDirty: D(M, R),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      Qe(o, M, R);
  }, E = (M, R) => {
    Qe(n.errors, M, R), d.state.next({
      errors: n.errors
    });
  }, S = (M) => {
    n.errors = M, d.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, _ = (M, R, V, f) => {
    const A = ue(r, M);
    if (A) {
      const O = ue(o, M, p2(V) ? ue(i, M) : V);
      p2(O) || f && f.defaultChecked || R ? Qe(o, M, R ? O : ra(A._f)) : re(M, O), a.mount && b();
    }
  }, P = (M, R, V, f, A) => {
    let O = !1, I = !1;
    const L = {
      name: M
    }, K = !!(ue(r, M) && ue(r, M)._f && ue(r, M)._f.disabled);
    if (!V || f) {
      u.isDirty && (I = n.isDirty, n.isDirty = L.isDirty = D(), O = I !== L.isDirty);
      const U = K || Mt(ue(i, M), R);
      I = !!(!K && ue(n.dirtyFields, M)), U || K ? v2(n.dirtyFields, M) : Qe(n.dirtyFields, M, !0), L.dirtyFields = n.dirtyFields, O = O || u.dirtyFields && I !== !U;
    }
    if (V) {
      const U = ue(n.touchedFields, M);
      U || (Qe(n.touchedFields, M, V), L.touchedFields = n.touchedFields, O = O || u.touchedFields && U !== V);
    }
    return O && A && d.state.next(L), O ? L : {};
  }, F = (M, R, V, f) => {
    const A = ue(n.errors, M), O = u.isValid && h0(R) && n.isValid !== R;
    if (e.delayError && V ? (l = g(() => E(M, V)), l(e.delayError)) : (clearTimeout(c), l = null, V ? Qe(n.errors, M, V) : v2(n.errors, M)), (V ? !Mt(A, V) : A) || !N2(f) || O) {
      const I = {
        ...f,
        ...O && h0(R) ? { isValid: R } : {},
        errors: n.errors,
        name: M
      };
      n = {
        ...n,
        ...I
      }, d.state.next(I);
    }
  }, $ = async (M) => {
    x(M, !0);
    const R = await t.resolver(o, t.context, YS(M || s.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return x(M), R;
  }, le = async (M) => {
    const { errors: R } = await $(M);
    if (M)
      for (const V of M) {
        const f = ue(R, V);
        f ? Qe(n.errors, V, f) : v2(n.errors, V);
      }
    else
      n.errors = R;
    return R;
  }, pe = async (M, R, V = {
    valid: !0
  }) => {
    for (const f in M) {
      const A = M[f];
      if (A) {
        const { _f: O, ...I } = A;
        if (O) {
          const L = s.array.has(O.name);
          x([f], !0);
          const K = await l3(A, o, C, t.shouldUseNativeValidation && !R, L);
          if (x([f]), K[O.name] && (V.valid = !1, R))
            break;
          !R && (ue(K, O.name) ? L ? BS(n.errors, K, O.name) : Qe(n.errors, O.name, K[O.name]) : v2(n.errors, O.name));
        }
        !N2(I) && await pe(I, R, V);
      }
    }
    return V.valid;
  }, fe = () => {
    for (const M of s.unMount) {
      const R = ue(r, M);
      R && (R._f.refs ? R._f.refs.every((V) => !na(V)) : !na(R._f.ref)) && q(M);
    }
    s.unMount = /* @__PURE__ */ new Set();
  }, D = (M, R) => (M && R && Qe(o, M, R), !Mt(B(), i)), Q = (M, R, V) => u6(M, s, {
    ...a.mount ? o : p2(R) ? i : v0(M) ? { [M]: R } : R
  }, V, R), N = (M) => zi(ue(a.mount ? o : i, M, e.shouldUnregister ? ue(i, M, []) : [])), re = (M, R, V = {}) => {
    const f = ue(r, M);
    let A = R;
    if (f) {
      const O = f._f;
      O && (!O.disabled && Qe(o, M, g6(R, O)), A = ni(O.ref) && M2(R) ? "" : R, h6(O.ref) ? [...O.ref.options].forEach((I) => I.selected = A.includes(I.value)) : O.refs ? Zn(O.ref) ? O.refs.length > 1 ? O.refs.forEach((I) => (!I.defaultChecked || !I.disabled) && (I.checked = Array.isArray(A) ? !!A.find((L) => L === I.value) : A === I.value)) : O.refs[0] && (O.refs[0].checked = !!A) : O.refs.forEach((I) => I.checked = I.value === A) : wl(O.ref) ? O.ref.value = "" : (O.ref.value = A, O.ref.type || d.values.next({
        name: M,
        values: { ...o }
      })));
    }
    (V.shouldDirty || V.shouldTouch) && P(M, A, V.shouldTouch, V.shouldDirty, !0), V.shouldValidate && j(M);
  }, k = (M, R, V) => {
    for (const f in R) {
      const A = R[f], O = `${M}.${f}`, I = ue(r, O);
      (s.array.has(M) || !ii(A) || I && !I._f) && !a1(A) ? k(O, A, V) : re(O, A, V);
    }
  }, ce = (M, R, V = {}) => {
    const f = ue(r, M), A = s.array.has(M), O = H2(R);
    Qe(o, M, O), A ? (d.array.next({
      name: M,
      values: { ...o }
    }), (u.isDirty || u.dirtyFields) && V.shouldDirty && d.state.next({
      name: M,
      dirtyFields: sr(i, o),
      isDirty: D(M, O)
    })) : f && !f._f && !M2(O) ? k(M, O, V) : re(M, O, V), r3(M, s) && d.state.next({ ...n }), d.values.next({
      name: a.mount ? M : void 0,
      values: { ...o }
    });
  }, xe = async (M) => {
    a.mount = !0;
    const R = M.target;
    let V = R.name, f = !0;
    const A = ue(r, V), O = () => R.type ? ra(A._f) : r6(M), I = (L) => {
      f = Number.isNaN(L) || L === ue(o, V, L);
    };
    if (A) {
      let L, K;
      const U = O(), me = M.type === ti.BLUR || M.type === ti.FOCUS_OUT, Te = !GS(A._f) && !t.resolver && !ue(n.errors, V) && !A._f.deps || KS(me, ue(n.touchedFields, V), n.isSubmitted, m, p), Ne = r3(V, s, me);
      Qe(o, V, U), me ? (A._f.onBlur && A._f.onBlur(M), l && l(0)) : A._f.onChange && A._f.onChange(M);
      const We = P(V, U, me, !1), _e = !N2(We) || Ne;
      if (!me && d.values.next({
        name: V,
        type: M.type,
        values: { ...o }
      }), Te)
        return u.isValid && b(), _e && d.state.next({ name: V, ...Ne ? {} : We });
      if (!me && Ne && d.state.next({ ...n }), t.resolver) {
        const { errors: d2 } = await $([V]);
        if (I(U), f) {
          const v = c3(n.errors, r, V), z = c3(d2, r, v.name || V);
          L = z.error, V = z.name, K = N2(d2);
        }
      } else
        x([V], !0), L = (await l3(A, o, C, t.shouldUseNativeValidation))[V], x([V]), I(U), f && (L ? K = !1 : u.isValid && (K = await pe(r, !0)));
      f && (A._f.deps && j(A._f.deps), F(V, K, L, We));
    }
  }, X = (M, R) => {
    if (ue(n.errors, R) && M.focus)
      return M.focus(), 1;
  }, j = async (M, R = {}) => {
    let V, f;
    const A = J1(M);
    if (t.resolver) {
      const O = await le(p2(M) ? M : A);
      V = N2(O), f = M ? !A.some((I) => ue(O, I)) : V;
    } else M ? (f = (await Promise.all(A.map(async (O) => {
      const I = ue(r, O);
      return await pe(I && I._f ? { [O]: I } : I);
    }))).every(Boolean), !(!f && !n.isValid) && b()) : f = V = await pe(r);
    return d.state.next({
      ...!v0(M) || u.isValid && V !== n.isValid ? {} : { name: M },
      ...t.resolver || !M ? { isValid: V } : {},
      errors: n.errors
    }), R.shouldFocus && !f && Q1(r, X, M ? A : s.mount), f;
  }, B = (M) => {
    const R = {
      ...a.mount ? o : i
    };
    return p2(M) ? R : v0(M) ? ue(R, M) : M.map((V) => ue(R, V));
  }, he = (M, R) => ({
    invalid: !!ue((R || n).errors, M),
    isDirty: !!ue((R || n).dirtyFields, M),
    error: ue((R || n).errors, M),
    isValidating: !!ue(n.validatingFields, M),
    isTouched: !!ue((R || n).touchedFields, M)
  }), H = (M) => {
    M && J1(M).forEach((R) => v2(n.errors, R)), d.state.next({
      errors: M ? n.errors : {}
    });
  }, Y = (M, R, V) => {
    const f = (ue(r, M, { _f: {} })._f || {}).ref, A = ue(n.errors, M) || {}, { ref: O, message: I, type: L, ...K } = A;
    Qe(n.errors, M, {
      ...K,
      ...R,
      ref: f
    }), d.state.next({
      name: M,
      errors: n.errors,
      isValid: !1
    }), V && V.shouldFocus && f && f.focus && f.focus();
  }, ie = (M, R) => it(M) ? d.values.subscribe({
    next: (V) => M(Q(void 0, R), V)
  }) : Q(M, R, !0), q = (M, R = {}) => {
    for (const V of M ? J1(M) : s.mount)
      s.mount.delete(V), s.array.delete(V), R.keepValue || (v2(r, V), v2(o, V)), !R.keepError && v2(n.errors, V), !R.keepDirty && v2(n.dirtyFields, V), !R.keepTouched && v2(n.touchedFields, V), !R.keepIsValidating && v2(n.validatingFields, V), !t.shouldUnregister && !R.keepDefaultValue && v2(i, V);
    d.values.next({
      values: { ...o }
    }), d.state.next({
      ...n,
      ...R.keepDirty ? { isDirty: D() } : {}
    }), !R.keepIsValid && b();
  }, G = ({ disabled: M, name: R, field: V, fields: f, value: A }) => {
    if (h0(M) && a.mount || M) {
      const O = M ? void 0 : p2(A) ? ra(V ? V._f : ue(f, R)._f) : A;
      Qe(o, R, O), P(R, O, !1, !1, !0);
    }
  }, oe = (M, R = {}) => {
    let V = ue(r, M);
    const f = h0(R.disabled);
    return Qe(r, M, {
      ...V || {},
      _f: {
        ...V && V._f ? V._f : { ref: { name: M } },
        name: M,
        mount: !0,
        ...R
      }
    }), s.mount.add(M), V ? G({
      field: V,
      disabled: R.disabled,
      name: M,
      value: R.value
    }) : _(M, !0, R.value), {
      ...f ? { disabled: R.disabled } : {},
      ...t.progressive ? {
        required: !!R.required,
        min: V1(R.min),
        max: V1(R.max),
        minLength: V1(R.minLength),
        maxLength: V1(R.maxLength),
        pattern: V1(R.pattern)
      } : {},
      name: M,
      onChange: xe,
      onBlur: xe,
      ref: (A) => {
        if (A) {
          oe(M, R), V = ue(r, M);
          const O = p2(A.value) && A.querySelectorAll && A.querySelectorAll("input,select,textarea")[0] || A, I = qS(O), L = V._f.refs || [];
          if (I ? L.find((K) => K === O) : O === V._f.ref)
            return;
          Qe(r, M, {
            _f: {
              ...V._f,
              ...I ? {
                refs: [
                  ...L.filter(na),
                  O,
                  ...Array.isArray(ue(i, M)) ? [{}] : []
                ],
                ref: { type: O.type, name: M }
              } : { ref: O }
            }
          }), _(M, !1, void 0, O);
        } else
          V = ue(r, M, {}), V._f && (V._f.mount = !1), (t.shouldUnregister || R.shouldUnregister) && !(i6(s.array, M) && a.action) && s.unMount.add(M);
      }
    };
  }, de = () => t.shouldFocusError && Q1(r, X, s.mount), ve = (M) => {
    h0(M) && (d.state.next({ disabled: M }), Q1(r, (R, V) => {
      const f = ue(r, V);
      f && (R.disabled = f._f.disabled || M, Array.isArray(f._f.refs) && f._f.refs.forEach((A) => {
        A.disabled = f._f.disabled || M;
      }));
    }, 0, !1));
  }, ke = (M, R) => async (V) => {
    let f;
    V && (V.preventDefault && V.preventDefault(), V.persist && V.persist());
    let A = H2(o);
    if (d.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: O, values: I } = await $();
      n.errors = O, A = I;
    } else
      await pe(r);
    if (v2(n.errors, "root"), N2(n.errors)) {
      d.state.next({
        errors: {}
      });
      try {
        await M(A, V);
      } catch (O) {
        f = O;
      }
    } else
      R && await R({ ...n.errors }, V), de(), setTimeout(de);
    if (d.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: N2(n.errors) && !f,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), f)
      throw f;
  }, ee = (M, R = {}) => {
    ue(r, M) && (p2(R.defaultValue) ? ce(M, H2(ue(i, M))) : (ce(M, R.defaultValue), Qe(i, M, H2(R.defaultValue))), R.keepTouched || v2(n.touchedFields, M), R.keepDirty || (v2(n.dirtyFields, M), n.isDirty = R.defaultValue ? D(M, H2(ue(i, M))) : D()), R.keepError || (v2(n.errors, M), u.isValid && b()), d.state.next({ ...n }));
  }, Ae = (M, R = {}) => {
    const V = M ? H2(M) : i, f = H2(V), A = N2(M), O = A ? i : f;
    if (R.keepDefaultValues || (i = V), !R.keepValues) {
      if (R.keepDirtyValues)
        for (const I of s.mount)
          ue(n.dirtyFields, I) ? Qe(O, I, ue(o, I)) : ce(I, ue(O, I));
      else {
        if (yl && p2(M))
          for (const I of s.mount) {
            const L = ue(r, I);
            if (L && L._f) {
              const K = Array.isArray(L._f.refs) ? L._f.refs[0] : L._f.ref;
              if (ni(K)) {
                const U = K.closest("form");
                if (U) {
                  U.reset();
                  break;
                }
              }
            }
          }
        r = {};
      }
      o = e.shouldUnregister ? R.keepDefaultValues ? H2(i) : {} : H2(O), d.array.next({
        values: { ...O }
      }), d.values.next({
        values: { ...O }
      });
    }
    s = {
      mount: R.keepDirtyValues ? s.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, a.mount = !u.isValid || !!R.keepIsValid || !!R.keepDirtyValues, a.watch = !!e.shouldUnregister, d.state.next({
      submitCount: R.keepSubmitCount ? n.submitCount : 0,
      isDirty: A ? !1 : R.keepDirty ? n.isDirty : !!(R.keepDefaultValues && !Mt(M, i)),
      isSubmitted: R.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: A ? {} : R.keepDirtyValues ? R.keepDefaultValues && o ? sr(i, o) : n.dirtyFields : R.keepDefaultValues && M ? sr(i, M) : R.keepDirty ? n.dirtyFields : {},
      touchedFields: R.keepTouched ? n.touchedFields : {},
      errors: R.keepErrors ? n.errors : {},
      isSubmitSuccessful: R.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Ue = (M, R) => Ae(it(M) ? M(o) : M, R);
  return {
    control: {
      register: oe,
      unregister: q,
      getFieldState: he,
      handleSubmit: ke,
      setError: Y,
      _executeSchema: $,
      _getWatch: Q,
      _getDirty: D,
      _updateValid: b,
      _removeUnmounted: fe,
      _updateFieldArray: w,
      _updateDisabledField: G,
      _getFieldArray: N,
      _reset: Ae,
      _resetDefaultValues: () => it(t.defaultValues) && t.defaultValues().then((M) => {
        Ue(M, t.resetOptions), d.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (M) => {
        n = {
          ...n,
          ...M
        };
      },
      _disableForm: ve,
      _subjects: d,
      _proxyFormState: u,
      _setErrors: S,
      get _fields() {
        return r;
      },
      get _formValues() {
        return o;
      },
      get _state() {
        return a;
      },
      set _state(M) {
        a = M;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return s;
      },
      set _names(M) {
        s = M;
      },
      get _formState() {
        return n;
      },
      set _formState(M) {
        n = M;
      },
      get _options() {
        return t;
      },
      set _options(M) {
        t = {
          ...t,
          ...M
        };
      }
    },
    trigger: j,
    register: oe,
    handleSubmit: ke,
    watch: ie,
    setValue: ce,
    getValues: B,
    reset: Ue,
    resetField: ee,
    clearErrors: H,
    unregister: q,
    setError: Y,
    setFocus: (M, R = {}) => {
      const V = ue(r, M), f = V && V._f;
      if (f) {
        const A = f.refs ? f.refs[0] : f.ref;
        A.focus && (A.focus(), R.shouldSelect && A.select());
      }
    },
    getFieldState: he
  };
}
function v6(e = {}) {
  const t = Ve.useRef(), n = Ve.useRef(), [r, i] = Ve.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: it(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    validatingFields: {},
    errors: e.errors || {},
    disabled: e.disabled || !1,
    defaultValues: it(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...QS(e),
    formState: r
  });
  const o = t.current.control;
  return o._options = e, xl({
    subject: o._subjects.state,
    next: (a) => {
      l6(a, o._proxyFormState, o._updateFormState, !0) && i({ ...o._formState });
    }
  }), Ve.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]), Ve.useEffect(() => {
    if (o._proxyFormState.isDirty) {
      const a = o._getDirty();
      a !== r.isDirty && o._subjects.state.next({
        isDirty: a
      });
    }
  }, [o, r.isDirty]), Ve.useEffect(() => {
    e.values && !Mt(e.values, n.current) ? (o._reset(e.values, o._options.resetOptions), n.current = e.values, i((a) => ({ ...a }))) : o._resetDefaultValues();
  }, [e.values, o]), Ve.useEffect(() => {
    e.errors && o._setErrors(e.errors);
  }, [e.errors, o]), Ve.useEffect(() => {
    o._state.mount || (o._updateValid(), o._state.mount = !0), o._state.watch && (o._state.watch = !1, o._subjects.state.next({ ...o._formState })), o._removeUnmounted();
  }), Ve.useEffect(() => {
    e.shouldUnregister && o._subjects.values.next({
      values: o._getWatch()
    });
  }, [e.shouldUnregister, o]), t.current.formState = s6(r, o), t.current;
}
const u3 = (e, t, n) => {
  if (e && "reportValidity" in e) {
    const r = ue(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, y6 = (e, t) => {
  for (const n in t.fields) {
    const r = t.fields[n];
    r && r.ref && "reportValidity" in r.ref ? u3(r.ref, n, e) : r.refs && r.refs.forEach((i) => u3(i, n, e));
  }
}, eM = (e, t) => {
  t.shouldUseNativeValidation && y6(e, t);
  const n = {};
  for (const r in e) {
    const i = ue(t.fields, r), o = Object.assign(e[r] || {}, { ref: i && i.ref });
    if (tM(t.names || Object.keys(e), r)) {
      const a = Object.assign({}, ue(n, r));
      Qe(a, "root", o), Qe(n, r, a);
    } else Qe(n, r, o);
  }
  return n;
}, tM = (e, t) => e.some((n) => n.startsWith(t + "."));
var nM = function(e, t) {
  for (var n = {}; e.length; ) {
    var r = e[0], i = r.code, o = r.message, a = r.path.join(".");
    if (!n[a]) if ("unionErrors" in r) {
      var s = r.unionErrors[0].errors[0];
      n[a] = { message: s.message, type: s.code };
    } else n[a] = { message: o, type: i };
    if ("unionErrors" in r && r.unionErrors.forEach(function(u) {
      return u.errors.forEach(function(d) {
        return e.push(d);
      });
    }), t) {
      var l = n[a].types, c = l && l[r.code];
      n[a] = f6(a, t, n, i, c ? [].concat(c, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, b6 = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, i, o) {
    try {
      return Promise.resolve(function(a, s) {
        try {
          var l = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(c) {
            return o.shouldUseNativeValidation && y6({}, o), { errors: {}, values: n.raw ? r : c };
          });
        } catch (c) {
          return s(c);
        }
        return l && l.then ? l.then(void 0, s) : l;
      }(0, function(a) {
        if (function(s) {
          return Array.isArray(s == null ? void 0 : s.errors);
        }(a)) return { values: {}, errors: eM(nM(a.errors, !o.shouldUseNativeValidation && o.criteriaMode === "all"), o) };
        throw a;
      }));
    } catch (a) {
      return Promise.reject(a);
    }
  };
}, rM = "Label", x6 = y.forwardRef((e, t) => /* @__PURE__ */ h.jsx(
  e2.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var i;
      n.target.closest("button, input, select, textarea") || ((i = e.onMouseDown) == null || i.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
x6.displayName = rM;
var w6 = x6;
const iM = Si(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), _6 = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  w6,
  {
    ref: n,
    className: Oe(iM(), e),
    ...t
  }
));
_6.displayName = w6.displayName;
const E6 = IS, S6 = y.createContext(
  {}
), W1 = ({
  ...e
}) => /* @__PURE__ */ h.jsx(S6.Provider, { value: { name: e.name }, children: /* @__PURE__ */ h.jsx($S, { ...e }) }), Bi = () => {
  const e = y.useContext(S6), t = y.useContext(M6), { getFieldState: n, formState: r } = $i(), i = n(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: o } = t;
  return {
    id: o,
    name: e.name,
    formItemId: `${o}-form-item`,
    formDescriptionId: `${o}-form-item-description`,
    formMessageId: `${o}-form-item-message`,
    ...i
  };
}, M6 = y.createContext(
  {}
), nt = y.forwardRef(({ className: e, ...t }, n) => {
  const r = y.useId();
  return /* @__PURE__ */ h.jsx(M6.Provider, { value: { id: r }, children: /* @__PURE__ */ h.jsx("div", { ref: n, className: Oe("space-y-2", e), ...t }) });
});
nt.displayName = "FormItem";
const s1 = y.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: i } = Bi();
  return /* @__PURE__ */ h.jsx(
    _6,
    {
      ref: n,
      className: Oe(r && "text-red-500 dark:text-red-900", e),
      htmlFor: i,
      ...t
    }
  );
});
s1.displayName = "FormLabel";
const l1 = y.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: i, formMessageId: o } = Bi();
  return /* @__PURE__ */ h.jsx(
    k0,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${i} ${o}` : `${i}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
l1.displayName = "FormControl";
const oM = y.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = Bi();
  return /* @__PURE__ */ h.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: Oe("text-sm text-slate-500 dark:text-slate-400", e),
      ...t
    }
  );
});
oM.displayName = "FormDescription";
const en = y.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: i, formMessageId: o } = Bi(), a = i ? String(i == null ? void 0 : i.message) : t;
  return a ? /* @__PURE__ */ h.jsx(
    "p",
    {
      ref: r,
      id: o,
      className: Oe("text-sm font-medium text-red-500 dark:text-red-900", e),
      ...n,
      children: a
    }
  ) : null;
});
en.displayName = "FormMessage";
const A6 = y.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
    "textarea",
    {
      className: Oe(
        "flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
        e
      ),
      ref: n,
      ...t
    }
  )
);
A6.displayName = "Textarea";
const aM = tt.object({
  label: tt.string().min(1, "Ce champs ne doit pas être vide"),
  alt: tt.string().optional(),
  description: tt.string().optional(),
  file: tt.any()
});
function sM() {
  const e = Z2((a) => a.main.currentMedia);
  if (e === null)
    return /* @__PURE__ */ h.jsx("p", { children: "Pas de media " });
  const t = Q2(), n = v6({
    resolver: b6(aM),
    mode: "all",
    defaultValues: {
      label: e.label,
      alt: e.alt === void 0 ? "" : String(e.alt),
      description: e.description === void 0 ? "" : String(e.description),
      file: null
    }
  }), r = n.register("file");
  a0(() => {
    e && n.reset({
      label: e.label || "",
      alt: e.alt === void 0 ? "" : String(e.alt),
      description: e.description === void 0 ? "" : String(e.description),
      file: null
    });
  }, [e, n]);
  const i = async (a) => {
    let s = null, l = null;
    a.file instanceof FileList && (s = a.file[0] ?? null, delete a.file);
    const c = {
      id: e.id,
      ...a
    };
    if (l = await t(pr(c)), s !== null && e.id !== void 0) {
      const u = {
        id: e.id,
        file: s
      };
      l = await t(hr(u));
    }
    t(Hr(l.payload));
  }, o = () => {
    t(Hr(null));
  };
  return /* @__PURE__ */ h.jsxs("div", { className: "h-full", children: [
    /* @__PURE__ */ h.jsx("div", { className: "border-y-2 h-20 flex items-center", children: /* @__PURE__ */ h.jsxs("div", { className: "px-6 flex items-center justify-between w-full", children: [
      /* @__PURE__ */ h.jsx("span", { className: "text-ellipsis", children: e.label }),
      /* @__PURE__ */ h.jsx(at, { variant: "ghost", onClick: o, children: /* @__PURE__ */ h.jsx(x0, { icon: tb, className: "h-5 w-5 text-gray-500" }) })
    ] }) }),
    /* @__PURE__ */ h.jsxs("div", { className: "px-6 pb-6 h-[calc(100%-5rem)] overflow-y-auto", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "my-3 bg-checkerboard flex justify-center", children: [
        e.picture && /* @__PURE__ */ h.jsx("img", { src: String(e.thumbnail), alt: String(e.alt), className: "" }),
        e.svg && /* @__PURE__ */ h.jsx("img", { src: String(e.reference), alt: String(e.alt), className: "" })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "my-3", children: [
        /* @__PURE__ */ h.jsxs("div", { className: "mb-2 border-b-2 flex justify-between", children: [
          /* @__PURE__ */ h.jsx("div", { className: "flex justify-start", children: "Created at" }),
          /* @__PURE__ */ h.jsx("div", { className: "flex justify-end", children: _a(e.createdAt) && Hc(String(e.createdAt)) })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "mb-2 border-b-2 flex justify-between", children: [
          /* @__PURE__ */ h.jsx("div", { className: "flex justify-start", children: "Updated at" }),
          /* @__PURE__ */ h.jsx("div", { className: "flex justify-end", children: _a(e.updatedAt) && Hc(String(e.updatedAt)) })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "mb-2 border-b-2 flex justify-between", children: [
          /* @__PURE__ */ h.jsx("div", { className: "flex justify-start", children: "Extension" }),
          /* @__PURE__ */ h.jsx("div", { className: "flex justify-end", children: e.extension })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "mb-2 border-b-2 flex justify-between", children: [
          /* @__PURE__ */ h.jsx("div", { className: "flex justify-start", children: "MimeType" }),
          /* @__PURE__ */ h.jsx("div", { className: "flex justify-end", children: e.mimeType })
        ] })
      ] }),
      /* @__PURE__ */ h.jsx("div", { className: "max-w-md mx-auto mt-10", children: /* @__PURE__ */ h.jsx(E6, { ...n, children: /* @__PURE__ */ h.jsxs("form", { onSubmit: n.handleSubmit(i), className: "space-y-6", children: [
        /* @__PURE__ */ h.jsx(
          W1,
          {
            name: "file",
            control: n.control,
            render: ({ field: a }) => /* @__PURE__ */ h.jsxs(nt, { children: [
              /* @__PURE__ */ h.jsx(s1, { children: "Fichier" }),
              /* @__PURE__ */ h.jsx(l1, { children: /* @__PURE__ */ h.jsx(
                f1,
                {
                  type: "file",
                  ...r,
                  onChange: (s) => {
                    var l, c;
                    a.onChange(((c = (l = s.target) == null ? void 0 : l.files) == null ? void 0 : c[0]) ?? null);
                  }
                }
              ) })
            ] })
          }
        ),
        /* @__PURE__ */ h.jsx(
          W1,
          {
            control: n.control,
            name: "label",
            render: ({ field: a }) => /* @__PURE__ */ h.jsxs(nt, { children: [
              /* @__PURE__ */ h.jsx(s1, { children: "Libellé" }),
              /* @__PURE__ */ h.jsx(l1, { children: /* @__PURE__ */ h.jsx(
                f1,
                {
                  ...a
                }
              ) }),
              /* @__PURE__ */ h.jsx(en, { className: "text-red-600" })
            ] })
          }
        ),
        /* @__PURE__ */ h.jsx(
          W1,
          {
            control: n.control,
            name: "alt",
            render: ({ field: a }) => /* @__PURE__ */ h.jsxs(nt, { children: [
              /* @__PURE__ */ h.jsx(s1, { children: "Balise alt" }),
              /* @__PURE__ */ h.jsx(l1, { children: /* @__PURE__ */ h.jsx(
                f1,
                {
                  ...a
                }
              ) }),
              /* @__PURE__ */ h.jsx(en, { className: "text-red-600" })
            ] })
          }
        ),
        /* @__PURE__ */ h.jsx(
          W1,
          {
            control: n.control,
            name: "description",
            render: ({ field: a }) => /* @__PURE__ */ h.jsxs(nt, { children: [
              /* @__PURE__ */ h.jsx(s1, { children: "Description" }),
              /* @__PURE__ */ h.jsx(l1, { children: /* @__PURE__ */ h.jsx(
                A6,
                {
                  ...a
                }
              ) }),
              /* @__PURE__ */ h.jsx(en, { className: "text-red-600" })
            ] })
          }
        ),
        /* @__PURE__ */ h.jsx(nt, { children: /* @__PURE__ */ h.jsx(at, { type: "submit", className: "w-full", children: "Valider" }) })
      ] }) }) })
    ] })
  ] });
}
const T6 = y.forwardRef(({ ...e }, t) => /* @__PURE__ */ h.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
T6.displayName = "Breadcrumb";
const O6 = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  "ol",
  {
    ref: n,
    className: Oe(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-slate-500 sm:gap-2.5 dark:text-slate-400",
      e
    ),
    ...t
  }
));
O6.displayName = "BreadcrumbList";
const R6 = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  "li",
  {
    ref: n,
    className: Oe("inline-flex items-center gap-1.5", e),
    ...t
  }
));
R6.displayName = "BreadcrumbItem";
const F6 = y.forwardRef(({ asChild: e, className: t, ...n }, r) => {
  const i = e ? k0 : "a";
  return /* @__PURE__ */ h.jsx(
    i,
    {
      ref: r,
      className: Oe("transition-colors hover:text-slate-950 dark:hover:text-slate-50", t),
      ...n
    }
  );
});
F6.displayName = "BreadcrumbLink";
const P6 = y.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ h.jsx(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: Oe("font-normal text-slate-950 dark:text-slate-50", e),
    ...t
  }
));
P6.displayName = "BreadcrumbPage";
const k6 = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ h.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: Oe("[&>svg]:size-3.5", t),
    ...n,
    children: e ?? /* @__PURE__ */ h.jsx(Ju, {})
  }
);
k6.displayName = "BreadcrumbSeparator";
function lM() {
  const e = Q2(), [t, n] = F0("");
  return Ui(), a0(() => {
    const r = async () => {
      e(ot({ page: 1, label: t }));
    };
    _a(t) && r();
  }, [t]), /* @__PURE__ */ h.jsx(h.Fragment, { children: /* @__PURE__ */ h.jsxs("div", { className: "flex gap-3 items-center justify-center w-full", children: [
    /* @__PURE__ */ h.jsx(x0, { icon: Jy }),
    /* @__PURE__ */ h.jsx(
      "input",
      {
        className: "h-11 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
        type: "text",
        placeholder: "Recherche",
        value: t,
        onChange: (r) => n(r.target.value)
      }
    )
  ] }) });
}
function cM() {
  const e = Q2(), { currentFolder: t, items: n } = Z2((o) => o.folder), r = (o, a, s) => {
    if (a.parent && !a.parent.match(/\/1$/)) {
      const l = s.find((c) => c["@id"] === a.parent);
      l !== void 0 && (o = r(o, l, s));
    }
    return [...o, a];
  };
  if (t === null)
    return;
  let i = r([], t, n);
  return /* @__PURE__ */ h.jsx("div", { className: "border-y-2 h-20 flex items-center", children: /* @__PURE__ */ h.jsxs("div", { className: "px-6 w-full flex items-center justify-between", children: [
    /* @__PURE__ */ h.jsx(T6, { children: /* @__PURE__ */ h.jsx(O6, { children: i.map((o, a) => /* @__PURE__ */ h.jsxs(Ve.Fragment, { children: [
      a !== 0 && /* @__PURE__ */ h.jsx(k6, {}),
      /* @__PURE__ */ h.jsxs(R6, { children: [
        i.length - 1 !== a && /* @__PURE__ */ h.jsx(
          F6,
          {
            className: "cursor-pointer",
            onClick: () => {
              e(gs(o));
            },
            children: o.label
          }
        ),
        i.length - 1 === a && /* @__PURE__ */ h.jsx(P6, { children: o.label })
      ] })
    ] }, o.id)) }) }),
    /* @__PURE__ */ h.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ h.jsx(lM, {}),
      /* @__PURE__ */ h.jsx(Pf, {})
    ] })
  ] }) });
}
function uM() {
  const e = Q2(), t = Z2((c) => c.media.view), n = Z2((c) => c.main.picker), r = Z2((c) => c.main.currentMedia);
  let i = () => {
  };
  try {
    const { setIsDialogOpen: c, setSelectedMedia: u, onPickedMedia: d } = Li();
    i = () => {
      u(r), d && r != null && d(r.id !== void 0 ? r.id : null), c(!1);
    };
  } catch {
  }
  if (!t) return null;
  const o = (c) => {
    const u = c.match(/page=(\d+)/i);
    return u ? u[1] ?? null : null;
  }, a = () => {
    l(t["hydra:previous"]);
  }, s = () => {
    l(t["hydra:next"]);
  }, l = (c) => {
    if (c == null)
      return;
    const u = Number(o(c));
    u !== null && e(ot({ page: u }));
  };
  return /* @__PURE__ */ h.jsx("div", { className: "px-6 h-20 flex items-center justify-end border-t-2", children: /* @__PURE__ */ h.jsxs("div", { className: "flex gap-2", children: [
    n && /* @__PURE__ */ h.jsx(at, { type: "button", onClick: i, disabled: r === null, children: "Valider" }),
    /* @__PURE__ */ h.jsxs(at, { type: "button", variant: "secondary", onClick: a, disabled: t["hydra:previous"] === void 0, children: [
      /* @__PURE__ */ h.jsx(x0, { icon: nb, className: "pr-2" }),
      "Précédent"
    ] }),
    /* @__PURE__ */ h.jsxs(at, { type: "button", variant: "secondary", onClick: s, disabled: t["hydra:next"] === void 0, children: [
      "Suivant",
      /* @__PURE__ */ h.jsx(x0, { icon: rb, className: "pl-2" })
    ] })
  ] }) });
}
const fM = {
  prefix: "far",
  iconName: "file-lines",
  icon: [384, 512, [128441, 128462, 61686, "file-alt", "file-text"], "f15c", "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l160 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l144 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-144 0z"]
}, dM = {
  prefix: "far",
  iconName: "folder",
  icon: [512, 512, [128193, 128447, 61716, "folder-blank"], "f07b", "M0 96C0 60.7 28.7 32 64 32l132.1 0c19.1 0 37.4 7.6 50.9 21.1L289.9 96 448 96c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-256c0-8.8-7.2-16-16-16l-161.4 0c-10.6 0-20.8-4.2-28.3-11.7L213.1 87c-4.5-4.5-10.6-7-17-7L64 80z"]
}, pM = {
  prefix: "far",
  iconName: "folder-open",
  icon: [576, 512, [128194, 128449, 61717], "f07c", "M384 480l48 0c11.4 0 21.9-6 27.6-15.9l112-192c5.8-9.9 5.8-22.1 .1-32.1S555.5 224 544 224l-400 0c-11.4 0-21.9 6-27.6 15.9L48 357.1 48 96c0-8.8 7.2-16 16-16l117.5 0c4.2 0 8.3 1.7 11.3 4.7l26.5 26.5c21 21 49.5 32.8 79.2 32.8L416 144c8.8 0 16 7.2 16 16l0 32 48 0 0-32c0-35.3-28.7-64-64-64L298.5 96c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l23.7 0L384 480z"]
}, hM = {
  prefix: "far",
  iconName: "image",
  icon: [512, 512, [], "f03e", "M448 80c8.8 0 16 7.2 16 16l0 319.8-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3L48 96c0-8.8 7.2-16 16-16l384 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]
}, mM = {
  prefix: "far",
  iconName: "folder-closed",
  icon: [512, 512, [], "e185", "M251.7 127.6s0 0 0 0c10.5 10.5 24.7 16.4 39.6 16.4L448 144c8.8 0 16 7.2 16 16l0 32L48 192l0-96c0-8.8 7.2-16 16-16l133.5 0c4.2 0 8.3 1.7 11.3 4.7l33.9-33.9L208.8 84.7l42.9 42.9zM48 240l416 0 0 176c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-176zM285.7 93.7L242.7 50.7c-12-12-28.3-18.7-45.3-18.7L64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L291.3 96c-2.1 0-4.2-.8-5.7-2.3z"]
}, CM = {
  prefix: "far",
  iconName: "circle-play",
  icon: [512, 512, [61469, "play-circle"], "f144", "M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9l0-176c0-8.7 4.7-16.7 12.3-20.9z"]
}, gM = {
  prefix: "far",
  iconName: "file-zipper",
  icon: [384, 512, ["file-archive"], "f1c6", "M64 464c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l48 0c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l48 0 0 80c0 17.7 14.3 32 32 32l80 0 0 288c0 8.8-7.2 16-16 16L64 464zM64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-293.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0L64 0zm48 112c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm-6.3 71.8L82.1 335.9c-1.4 5.4-2.1 10.9-2.1 16.4c0 35.2 28.8 63.7 64 63.7s64-28.5 64-63.7c0-5.5-.7-11.1-2.1-16.4l-23.5-88.2c-3.7-14-16.4-23.8-30.9-23.8l-14.8 0c-14.5 0-27.2 9.7-30.9 23.8zM128 336l32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z"]
}, vM = gM, yM = {
  prefix: "far",
  iconName: "clock",
  icon: [512, 512, [128339, "clock-four"], "f017", "M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]
};
var bM = "Separator", f3 = "horizontal", xM = ["horizontal", "vertical"], H6 = y.forwardRef((e, t) => {
  const { decorative: n, orientation: r = f3, ...i } = e, o = wM(r) ? r : f3, s = n ? { role: "none" } : { "aria-orientation": o === "vertical" ? o : void 0, role: "separator" };
  return /* @__PURE__ */ h.jsx(
    e2.div,
    {
      "data-orientation": o,
      ...s,
      ...i,
      ref: t
    }
  );
});
H6.displayName = bM;
function wM(e) {
  return xM.includes(e);
}
var N6 = H6;
const L6 = y.forwardRef(
  ({ className: e, orientation: t = "horizontal", decorative: n = !0, ...r }, i) => /* @__PURE__ */ h.jsx(
    N6,
    {
      ref: i,
      decorative: n,
      orientation: t,
      className: Oe(
        "shrink-0 bg-slate-200 dark:bg-slate-800",
        t === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
        e
      ),
      ...r
    }
  )
);
L6.displayName = N6.displayName;
const _M = (e) => {
  const t = e.map((i) => ({ ...i })), n = /* @__PURE__ */ new Map();
  t.forEach((i) => {
    i.children = [], n.set(i.id, i);
  });
  const r = [];
  return t.forEach((i) => {
    var o;
    if (i.parent) {
      const a = n.get(parseInt(i.parent.split("/").pop()));
      (o = a == null ? void 0 : a.children) == null || o.push(i);
    } else
      r.push(i);
  }), r;
};
function EM() {
  var s;
  const e = Q2(), { items: t, status: n, error: r, currentFolder: i } = Z2((l) => l.folder), o = (s = _M(t).pop()) == null ? void 0 : s.children, a = [
    {
      id: -1,
      code: "recent",
      label: "Recent",
      children: []
    }
  ];
  return a0(() => {
    n === "idle" && e(Cr()), n === "succeeded" && i === null && e(gs(o ? o[0] ?? null : null));
  }, [n, e]), n === "loading" || n === "idle" ? "Loading ..." : n === "failed" ? "Failed... " + r : o === void 0 ? null : /* @__PURE__ */ h.jsxs("div", { className: "py-3", children: [
    /* @__PURE__ */ h.jsx(d3, { nodes: o }),
    /* @__PURE__ */ h.jsx(L6, { className: "my-2" }),
    /* @__PURE__ */ h.jsx(d3, { nodes: a })
  ] });
}
function d3({ nodes: e }) {
  const t = Q2(), { currentFolder: n, openFolders: r } = Z2((s) => s.folder), { dialogContainer: i } = Ui(), o = (s) => {
    switch (s.code) {
      case "picture":
        return hM;
      case "audio-video":
        return CM;
      case "archive":
        return vM;
      case "document":
        return fM;
      case "recent":
        return yM;
    }
    return !s.children || s.children.length === 0 ? dM : r.includes(s.id) ? pM : mM;
  }, a = (s) => /* @__PURE__ */ h.jsx(h.Fragment, { children: s.map((l) => /* @__PURE__ */ h.jsxs(Qd, { children: [
    /* @__PURE__ */ h.jsx(e6, { children: /* @__PURE__ */ h.jsxs("div", { children: [
      /* @__PURE__ */ h.jsxs("div", { className: Oe({
        "is-active": l.id === (n == null ? void 0 : n.id),
        "!bg-primary": l.id === (n == null ? void 0 : n.id),
        "!text-primary-foreground": l.id === (n == null ? void 0 : n.id)
      }, "hs-accordion-heading group py-4 flex items-center gap-x-0.5 w-full hover:bg-accent rounded-sm"), children: [
        /* @__PURE__ */ h.jsx(
          "button",
          {
            type: "button",
            className: "size-6 ml-2 group-[[data-collapsed=true]]/collapse:hidden group-[.is-active]:text-primary-foreground group-[.is-active]:hover:!bg-primary flex justify-center items-center hover:bg-secondary rounded-md focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
            disabled: !l.children || l.children.length === 0,
            onClick: () => t(Oh({
              id: l.id,
              value: !r.includes(l.id)
            })),
            children: l.children && l.children.length > 0 && /* @__PURE__ */ h.jsx(x0, { icon: r.includes(l.id) ? Ky : Qy, className: "group-[.is-active]:text-primary-foreground text-secondary-foreground" })
          }
        ),
        /* @__PURE__ */ h.jsxs(
          "div",
          {
            className: "flex flex-nowrap px-1.5 cursor-pointer items-center",
            onClick: () => t(gs(l)),
            children: [
              /* @__PURE__ */ h.jsx(x0, { icon: o(l), className: "group-[.is-active]:text-primary-foreground text-secondary-foreground" }),
              /* @__PURE__ */ h.jsx("span", { className: "pl-2 text-ellipsis text-nowrap group-[[data-collapsed=true]]/collapse:hidden", children: l.label })
            ]
          }
        )
      ] }),
      l.children && l.children.length > 0 && r.includes(l.id) && /* @__PURE__ */ h.jsx("div", { className: "hs-accordion-content group-[[data-collapsed=true]]/collapse:hidden w-full overflow-hidden transition-[height] duration-300", children: /* @__PURE__ */ h.jsx("div", { className: "ps-7 relative before:absolute before:top-0 before:start-5 before:w-0.5 before:-ms-px before:h-full before:bg-gray-100 dark:before:bg-neutral-700", children: a(l.children) }) })
    ] }) }),
    l.id > 0 && /* @__PURE__ */ h.jsx(t6, { container: i, children: /* @__PURE__ */ h.jsxs(vl, { children: [
      /* @__PURE__ */ h.jsx(R0, { onClick: () => {
        t(Nr(!0)), t(Rc(null)), t(Fc(l));
      }, children: "Nouveau" }),
      /* @__PURE__ */ h.jsx(On, {}),
      /* @__PURE__ */ h.jsx(R0, { onClick: () => {
        t(Nr(!0)), t(Rc(l)), t(Fc(null));
      }, children: "Renommer" }),
      /* @__PURE__ */ h.jsx(R0, { children: "Déplacer" }),
      /* @__PURE__ */ h.jsx(On, {}),
      /* @__PURE__ */ h.jsx(
        R0,
        {
          disabled: l.lvl === void 0 || l.lvl <= 1,
          className: "focus:bg-destructive focus:text-destructive-foreground",
          onClick: () => {
            t(yr(l.id));
          },
          children: "Supprimer"
        }
      )
    ] }) })
  ] }, l.id)) });
  return /* @__PURE__ */ h.jsx("div", { className: "flex flex-col px-3", children: a(e) });
}
function SM() {
  const e = Z2((i) => i.main.currentMedia), [t, n] = F0(!1), r = C3(null);
  return /* @__PURE__ */ h.jsxs(Xm, { className: "overflow-y-auto", direction: "horizontal", children: [
    /* @__PURE__ */ h.jsx(
      Fo,
      {
        ref: r,
        collapsible: !1,
        collapsedSize: 5,
        minSize: 15,
        maxSize: 30,
        defaultSize: 15,
        onCollapse: () => n(!0),
        onExpand: () => n(!1),
        "data-collapsed": t,
        className: "group/collapse border-t-2",
        children: /* @__PURE__ */ h.jsx(EM, {})
      }
    ),
    /* @__PURE__ */ h.jsx(Uc, { withHandle: !0 }),
    /* @__PURE__ */ h.jsxs(Fo, { children: [
      /* @__PURE__ */ h.jsx(cM, {}),
      /* @__PURE__ */ h.jsx(LS, {}),
      /* @__PURE__ */ h.jsx(uM, {})
    ] }),
    e && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
      /* @__PURE__ */ h.jsx(Uc, { withHandle: !0 }),
      /* @__PURE__ */ h.jsx(Fo, { minSize: 20, maxSize: 30, defaultSize: 20, children: /* @__PURE__ */ h.jsx(sM, {}) })
    ] })
  ] });
}
const MM = tt.object({
  label: tt.string().min(1, "Ce champs ne doit pas être vide")
});
function AM() {
  const e = Q2(), { isOpen: t, folder: n, targetFolder: r } = Z2((l) => l.folder.dialogForm), [i, o] = F0("titre"), a = v6({
    resolver: b6(MM),
    mode: "onBlur",
    defaultValues: {
      label: (n == null ? void 0 : n.label) || ""
    }
  });
  a0(() => {
    o(n !== null ? `Mise à jour du dossier ${n.label}` : `Nouveau dossier dans ${r == null ? void 0 : r.label}`);
  }, [n]), a0(() => {
    a.reset({
      label: (n == null ? void 0 : n.label) || ""
    });
  }, [t, n, a]);
  const s = async (l) => {
    try {
      n !== null && await e(gr({ id: n.id, data: l })), r !== null && await e(vr({
        label: l.label,
        parent: String(r["@id"])
      }));
    } catch {
    }
    e(Nr(!1));
  };
  return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsxs(Ys, { children: [
      /* @__PURE__ */ h.jsx(Gs, { children: "Dossier" }),
      /* @__PURE__ */ h.jsx(Ks, { children: i })
    ] }),
    /* @__PURE__ */ h.jsx(E6, { ...a, children: /* @__PURE__ */ h.jsxs("form", { onSubmit: a.handleSubmit(s), className: "space-y-6", children: [
      /* @__PURE__ */ h.jsx(
        W1,
        {
          control: a.control,
          name: "label",
          render: ({ field: l }) => /* @__PURE__ */ h.jsxs(nt, { children: [
            /* @__PURE__ */ h.jsx(s1, { children: "Libellé" }),
            /* @__PURE__ */ h.jsx(l1, { children: /* @__PURE__ */ h.jsx(f1, { ...l }) }),
            /* @__PURE__ */ h.jsx(en, { className: "text-destructive" })
          ] })
        }
      ),
      /* @__PURE__ */ h.jsx(of, { children: /* @__PURE__ */ h.jsx(nt, { children: /* @__PURE__ */ h.jsx(at, { type: "submit", className: "w-full", disabled: !a.formState.isValid, children: "Enregistrer" }) }) })
    ] }) })
  ] });
}
function TM() {
  const e = Q2(), { isOpen: t } = Z2((i) => i.folder.dialogForm), { dialogContainer: n } = Ui(), r = AM;
  return /* @__PURE__ */ h.jsx(nf, { open: t, onOpenChange: (i) => e(Nr(i)), children: /* @__PURE__ */ h.jsx(qs, { container: n, children: /* @__PURE__ */ h.jsx(r, {}) }) });
}
const V6 = h3(void 0), Ui = () => {
  const e = m3(V6);
  if (!e)
    throw new Error("useLibraryContext must be used within a MediaPickerAppProvider");
  return e;
};
function j6({ className: e, dialogContainer: t, ...n }) {
  return e = Oe("bg-background h-full", e), /* @__PURE__ */ h.jsxs(V6.Provider, { value: { dialogContainer: t }, children: [
    /* @__PURE__ */ h.jsx("div", { className: e, ...n, children: /* @__PURE__ */ h.jsx(SM, {}) }),
    /* @__PURE__ */ h.jsx(TM, {})
  ] });
}
function IM({ serverUrl: e, dialogContainer: t, className: n }) {
  const [r, i] = F0(!1);
  return n = Oe("bg-background h-full", n), a0(() => {
    (async () => {
      try {
        await Ku(e), i(!0);
      } catch (a) {
        console.error("Failed to initialize the app:", a);
      }
    })();
  }, [e]), r ? /* @__PURE__ */ h.jsxs(b3, { store: G1, children: [
    /* @__PURE__ */ h.jsx(j6, { dialogContainer: t }),
    /* @__PURE__ */ h.jsx(Rf, {})
  ] }) : /* @__PURE__ */ h.jsx("div", { className: n, children: "Initialisation ..." });
}
export {
  IM as MediaLibraryApp,
  LM as MediaPickerApp
};

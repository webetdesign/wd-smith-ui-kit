var Cv = Object.defineProperty;
var Av = (e, t, n) => t in e ? Cv(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Mr = (e, t, n) => Av(e, typeof t != "symbol" ? t + "" : t, n);
import * as _ from "react";
import Le, { forwardRef as up, createElement as kc, useEffect as yo, useLayoutEffect as Ov, useState as Ol, useRef as Rv } from "react";
import * as Rl from "react-dom";
import Tv from "react-dom";
var ot = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function fp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Pc = { exports: {} }, gi = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tu;
function kv() {
  if (Tu) return gi;
  Tu = 1;
  var e = Le, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, c, l) {
    var u, d = {}, p = null, h = null;
    l !== void 0 && (p = "" + l), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (h = c.ref);
    for (u in c) r.call(c, u) && !o.hasOwnProperty(u) && (d[u] = c[u]);
    if (s && s.defaultProps) for (u in c = s.defaultProps, c) d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: t, type: s, key: p, ref: h, props: d, _owner: i.current };
  }
  return gi.Fragment = n, gi.jsx = a, gi.jsxs = a, gi;
}
var vi = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ku;
function Pv() {
  return ku || (ku = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Le, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, y = "@@iterator";
    function v(R) {
      if (R === null || typeof R != "object")
        return null;
      var ne = m && R[m] || R[y];
      return typeof ne == "function" ? ne : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(R) {
      {
        for (var ne = arguments.length, be = new Array(ne > 1 ? ne - 1 : 0), Ne = 1; Ne < ne; Ne++)
          be[Ne - 1] = arguments[Ne];
        S("error", R, be);
      }
    }
    function S(R, ne, be) {
      {
        var Ne = b.ReactDebugCurrentFrame, Ke = Ne.getStackAddendum();
        Ke !== "" && (ne += "%s", be = be.concat([Ke]));
        var nt = be.map(function(qe) {
          return String(qe);
        });
        nt.unshift("Warning: " + ne), Function.prototype.apply.call(console[R], console, nt);
      }
    }
    var A = !1, E = !1, N = !1, P = !1, U = !1, ue;
    ue = Symbol.for("react.module.reference");
    function ye(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === r || R === o || U || R === i || R === l || R === u || P || R === h || A || E || N || typeof R == "object" && R !== null && (R.$$typeof === p || R.$$typeof === d || R.$$typeof === a || R.$$typeof === s || R.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === ue || R.getModuleId !== void 0));
    }
    function pe(R, ne, be) {
      var Ne = R.displayName;
      if (Ne)
        return Ne;
      var Ke = ne.displayName || ne.name || "";
      return Ke !== "" ? be + "(" + Ke + ")" : be;
    }
    function V(R) {
      return R.displayName || "Context";
    }
    function Q(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case l:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case s:
            var ne = R;
            return V(ne) + ".Consumer";
          case a:
            var be = R;
            return V(be._context) + ".Provider";
          case c:
            return pe(R, R.render, "ForwardRef");
          case d:
            var Ne = R.displayName || null;
            return Ne !== null ? Ne : Q(R.type) || "Memo";
          case p: {
            var Ke = R, nt = Ke._payload, qe = Ke._init;
            try {
              return Q(qe(nt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, se = 0, j, fe, _e, J, L, q, ge;
    function I() {
    }
    I.__reactDisabledLog = !0;
    function X() {
      {
        if (se === 0) {
          j = console.log, fe = console.info, _e = console.warn, J = console.error, L = console.group, q = console.groupCollapsed, ge = console.groupEnd;
          var R = {
            configurable: !0,
            enumerable: !0,
            value: I,
            writable: !0
          };
          Object.defineProperties(console, {
            info: R,
            log: R,
            warn: R,
            error: R,
            group: R,
            groupCollapsed: R,
            groupEnd: R
          });
        }
        se++;
      }
    }
    function re() {
      {
        if (se--, se === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, R, {
              value: j
            }),
            info: B({}, R, {
              value: fe
            }),
            warn: B({}, R, {
              value: _e
            }),
            error: B({}, R, {
              value: J
            }),
            group: B({}, R, {
              value: L
            }),
            groupCollapsed: B({}, R, {
              value: q
            }),
            groupEnd: B({}, R, {
              value: ge
            })
          });
        }
        se < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = b.ReactCurrentDispatcher, G;
    function ie(R, ne, be) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (Ke) {
            var Ne = Ke.stack.trim().match(/\n( *(at )?)/);
            G = Ne && Ne[1] || "";
          }
        return `
` + G + R;
      }
    }
    var le = !1, ve;
    {
      var Pe = typeof WeakMap == "function" ? WeakMap : Map;
      ve = new Pe();
    }
    function ee(R, ne) {
      if (!R || le)
        return "";
      {
        var be = ve.get(R);
        if (be !== void 0)
          return be;
      }
      var Ne;
      le = !0;
      var Ke = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var nt;
      nt = Y.current, Y.current = null, X();
      try {
        if (ne) {
          var qe = function() {
            throw Error();
          };
          if (Object.defineProperty(qe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(qe, []);
            } catch (Rt) {
              Ne = Rt;
            }
            Reflect.construct(R, [], qe);
          } else {
            try {
              qe.call();
            } catch (Rt) {
              Ne = Rt;
            }
            R.call(qe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Rt) {
            Ne = Rt;
          }
          R();
        }
      } catch (Rt) {
        if (Rt && Ne && typeof Rt.stack == "string") {
          for (var He = Rt.stack.split(`
`), Et = Ne.stack.split(`
`), pt = He.length - 1, mt = Et.length - 1; pt >= 1 && mt >= 0 && He[pt] !== Et[mt]; )
            mt--;
          for (; pt >= 1 && mt >= 0; pt--, mt--)
            if (He[pt] !== Et[mt]) {
              if (pt !== 1 || mt !== 1)
                do
                  if (pt--, mt--, mt < 0 || He[pt] !== Et[mt]) {
                    var Yt = `
` + He[pt].replace(" at new ", " at ");
                    return R.displayName && Yt.includes("<anonymous>") && (Yt = Yt.replace("<anonymous>", R.displayName)), typeof R == "function" && ve.set(R, Yt), Yt;
                  }
                while (pt >= 1 && mt >= 0);
              break;
            }
        }
      } finally {
        le = !1, Y.current = nt, re(), Error.prepareStackTrace = Ke;
      }
      var Nr = R ? R.displayName || R.name : "", ar = Nr ? ie(Nr) : "";
      return typeof R == "function" && ve.set(R, ar), ar;
    }
    function Oe(R, ne, be) {
      return ee(R, !1);
    }
    function Be(R) {
      var ne = R.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function ct(R, ne, be) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return ee(R, Be(R));
      if (typeof R == "string")
        return ie(R);
      switch (R) {
        case l:
          return ie("Suspense");
        case u:
          return ie("SuspenseList");
      }
      if (typeof R == "object")
        switch (R.$$typeof) {
          case c:
            return Oe(R.render);
          case d:
            return ct(R.type, ne, be);
          case p: {
            var Ne = R, Ke = Ne._payload, nt = Ne._init;
            try {
              return ct(nt(Ke), ne, be);
            } catch {
            }
          }
        }
      return "";
    }
    var et = Object.prototype.hasOwnProperty, $e = {}, C = b.ReactDebugCurrentFrame;
    function k(R) {
      if (R) {
        var ne = R._owner, be = ct(R.type, R._source, ne ? ne.type : null);
        C.setExtraStackFrame(be);
      } else
        C.setExtraStackFrame(null);
    }
    function D(R, ne, be, Ne, Ke) {
      {
        var nt = Function.call.bind(et);
        for (var qe in R)
          if (nt(R, qe)) {
            var He = void 0;
            try {
              if (typeof R[qe] != "function") {
                var Et = Error((Ne || "React class") + ": " + be + " type `" + qe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[qe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Et.name = "Invariant Violation", Et;
              }
              He = R[qe](ne, qe, Ne, be, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pt) {
              He = pt;
            }
            He && !(He instanceof Error) && (k(Ke), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ne || "React class", be, qe, typeof He), k(null)), He instanceof Error && !(He.message in $e) && ($e[He.message] = !0, k(Ke), x("Failed %s type: %s", be, He.message), k(null));
          }
      }
    }
    var f = Array.isArray;
    function O(R) {
      return f(R);
    }
    function T(R) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, be = ne && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return be;
      }
    }
    function F(R) {
      try {
        return M(R), !1;
      } catch {
        return !0;
      }
    }
    function M(R) {
      return "" + R;
    }
    function Z(R) {
      if (F(R))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", T(R)), M(R);
    }
    var W = b.ReactCurrentOwner, de = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, Me, We;
    We = {};
    function Ee(R) {
      if (et.call(R, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function ft(R) {
      if (et.call(R, "key")) {
        var ne = Object.getOwnPropertyDescriptor(R, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function g(R, ne) {
      if (typeof R.ref == "string" && W.current && ne && W.current.stateNode !== ne) {
        var be = Q(W.current.type);
        We[be] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Q(W.current.type), R.ref), We[be] = !0);
      }
    }
    function $(R, ne) {
      {
        var be = function() {
          Re || (Re = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        be.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: be,
          configurable: !0
        });
      }
    }
    function K(R, ne) {
      {
        var be = function() {
          Me || (Me = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        be.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: be,
          configurable: !0
        });
      }
    }
    var H = function(R, ne, be, Ne, Ke, nt, qe) {
      var He = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: R,
        key: ne,
        ref: be,
        props: qe,
        // Record the component responsible for creating this element.
        _owner: nt
      };
      return He._store = {}, Object.defineProperty(He._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(He, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ne
      }), Object.defineProperty(He, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ke
      }), Object.freeze && (Object.freeze(He.props), Object.freeze(He)), He;
    };
    function te(R, ne, be, Ne, Ke) {
      {
        var nt, qe = {}, He = null, Et = null;
        be !== void 0 && (Z(be), He = "" + be), ft(ne) && (Z(ne.key), He = "" + ne.key), Ee(ne) && (Et = ne.ref, g(ne, Ke));
        for (nt in ne)
          et.call(ne, nt) && !de.hasOwnProperty(nt) && (qe[nt] = ne[nt]);
        if (R && R.defaultProps) {
          var pt = R.defaultProps;
          for (nt in pt)
            qe[nt] === void 0 && (qe[nt] = pt[nt]);
        }
        if (He || Et) {
          var mt = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          He && $(qe, mt), Et && K(qe, mt);
        }
        return H(R, He, Et, Ke, Ne, W.current, qe);
      }
    }
    var ae = b.ReactCurrentOwner, Se = b.ReactDebugCurrentFrame;
    function he(R) {
      if (R) {
        var ne = R._owner, be = ct(R.type, R._source, ne ? ne.type : null);
        Se.setExtraStackFrame(be);
      } else
        Se.setExtraStackFrame(null);
    }
    var Ce;
    Ce = !1;
    function Ie(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function lt() {
      {
        if (ae.current) {
          var R = Q(ae.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function ht(R) {
      return "";
    }
    var tt = {};
    function Io(R) {
      {
        var ne = lt();
        if (!ne) {
          var be = typeof R == "string" ? R : R.displayName || R.name;
          be && (ne = `

Check the top-level render call using <` + be + ">.");
        }
        return ne;
      }
    }
    function Mn(R, ne) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var be = Io(ne);
        if (tt[be])
          return;
        tt[be] = !0;
        var Ne = "";
        R && R._owner && R._owner !== ae.current && (Ne = " It was passed a child from " + Q(R._owner.type) + "."), he(R), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', be, Ne), he(null);
      }
    }
    function In(R, ne) {
      {
        if (typeof R != "object")
          return;
        if (O(R))
          for (var be = 0; be < R.length; be++) {
            var Ne = R[be];
            Ie(Ne) && Mn(Ne, ne);
          }
        else if (Ie(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Ke = v(R);
          if (typeof Ke == "function" && Ke !== R.entries)
            for (var nt = Ke.call(R), qe; !(qe = nt.next()).done; )
              Ie(qe.value) && Mn(qe.value, ne);
        }
      }
    }
    function gv(R) {
      {
        var ne = R.type;
        if (ne == null || typeof ne == "string")
          return;
        var be;
        if (typeof ne == "function")
          be = ne.propTypes;
        else if (typeof ne == "object" && (ne.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ne.$$typeof === d))
          be = ne.propTypes;
        else
          return;
        if (be) {
          var Ne = Q(ne);
          D(be, R.props, "prop", Ne, R);
        } else if (ne.PropTypes !== void 0 && !Ce) {
          Ce = !0;
          var Ke = Q(ne);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ke || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function vv(R) {
      {
        for (var ne = Object.keys(R.props), be = 0; be < ne.length; be++) {
          var Ne = ne[be];
          if (Ne !== "children" && Ne !== "key") {
            he(R), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ne), he(null);
            break;
          }
        }
        R.ref !== null && (he(R), x("Invalid attribute `ref` supplied to `React.Fragment`."), he(null));
      }
    }
    var Ou = {};
    function Ru(R, ne, be, Ne, Ke, nt) {
      {
        var qe = ye(R);
        if (!qe) {
          var He = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (He += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Et = ht();
          Et ? He += Et : He += lt();
          var pt;
          R === null ? pt = "null" : O(R) ? pt = "array" : R !== void 0 && R.$$typeof === t ? (pt = "<" + (Q(R.type) || "Unknown") + " />", He = " Did you accidentally export a JSX literal instead of a component?") : pt = typeof R, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pt, He);
        }
        var mt = te(R, ne, be, Ke, nt);
        if (mt == null)
          return mt;
        if (qe) {
          var Yt = ne.children;
          if (Yt !== void 0)
            if (Ne)
              if (O(Yt)) {
                for (var Nr = 0; Nr < Yt.length; Nr++)
                  In(Yt[Nr], R);
                Object.freeze && Object.freeze(Yt);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              In(Yt, R);
        }
        if (et.call(ne, "key")) {
          var ar = Q(R), Rt = Object.keys(ne).filter(function(Sv) {
            return Sv !== "key";
          }), Es = Rt.length > 0 ? "{key: someKey, " + Rt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ou[ar + Es]) {
            var Ev = Rt.length > 0 ? "{" + Rt.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Es, ar, Ev, ar), Ou[ar + Es] = !0;
          }
        }
        return R === r ? vv(mt) : gv(mt), mt;
      }
    }
    function bv(R, ne, be) {
      return Ru(R, ne, be, !0);
    }
    function xv(R, ne, be) {
      return Ru(R, ne, be, !1);
    }
    var wv = xv, _v = bv;
    vi.Fragment = r, vi.jsx = wv, vi.jsxs = _v;
  }()), vi;
}
process.env.NODE_ENV === "production" ? Pc.exports = kv() : Pc.exports = Pv();
var w = Pc.exports, Nc = { exports: {} }, Ss = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Pu;
function Nv() {
  if (Pu) return Ss;
  Pu = 1;
  var e = Le;
  function t(c, l) {
    return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, i = e.useRef, o = e.useEffect, a = e.useMemo, s = e.useDebugValue;
  return Ss.useSyncExternalStoreWithSelector = function(c, l, u, d, p) {
    var h = i(null);
    if (h.current === null) {
      var m = { hasValue: !1, value: null };
      h.current = m;
    } else m = h.current;
    h = a(function() {
      function v(E) {
        if (!b) {
          if (b = !0, x = E, E = d(E), p !== void 0 && m.hasValue) {
            var N = m.value;
            if (p(N, E)) return S = N;
          }
          return S = E;
        }
        if (N = S, n(x, E)) return N;
        var P = d(E);
        return p !== void 0 && p(N, P) ? N : (x = E, S = P);
      }
      var b = !1, x, S, A = u === void 0 ? null : u;
      return [function() {
        return v(l());
      }, A === null ? void 0 : function() {
        return v(A());
      }];
    }, [l, u, d, p]);
    var y = r(c, h[0], h[1]);
    return o(function() {
      m.hasValue = !0, m.value = y;
    }, [y]), s(y), y;
  }, Ss;
}
var Cs = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Nu;
function Mv() {
  return Nu || (Nu = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Le;
    function t(l, u) {
      return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
    }
    var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, i = e.useRef, o = e.useEffect, a = e.useMemo, s = e.useDebugValue;
    function c(l, u, d, p, h) {
      var m = i(null), y;
      m.current === null ? (y = {
        hasValue: !1,
        value: null
      }, m.current = y) : y = m.current;
      var v = a(function() {
        var A = !1, E, N, P = function(pe) {
          if (!A) {
            A = !0, E = pe;
            var V = p(pe);
            if (h !== void 0 && y.hasValue) {
              var Q = y.value;
              if (h(Q, V))
                return N = Q, Q;
            }
            return N = V, V;
          }
          var B = E, se = N;
          if (n(B, pe))
            return se;
          var j = p(pe);
          return h !== void 0 && h(se, j) ? se : (E = pe, N = j, j);
        }, U = d === void 0 ? null : d, ue = function() {
          return P(u());
        }, ye = U === null ? void 0 : function() {
          return P(U());
        };
        return [ue, ye];
      }, [u, d, p, h]), b = v[0], x = v[1], S = r(l, b, x);
      return o(function() {
        y.hasValue = !0, y.value = S;
      }, [S]), s(S), S;
    }
    Cs.useSyncExternalStoreWithSelector = c, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Cs;
}
process.env.NODE_ENV === "production" ? Nc.exports = Nv() : Nc.exports = Mv();
var Iv = Nc.exports, zt = (
  // prettier-ignore
  // @ts-ignore
  "default" in _ ? _.default : _
), Mu = Symbol.for("react-redux-context"), Iu = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function Dv() {
  if (!zt.createContext)
    return {};
  const e = Iu[Mu] ?? (Iu[Mu] = /* @__PURE__ */ new Map());
  let t = e.get(zt.createContext);
  return t || (t = zt.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set(zt.createContext, t)), t;
}
var Yn = /* @__PURE__ */ Dv(), jv = () => {
  throw new Error("uSES not initialized!");
};
function Tl(e = Yn) {
  return function() {
    const n = zt.useContext(e);
    if (process.env.NODE_ENV !== "production" && !n)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return n;
  };
}
var dp = /* @__PURE__ */ Tl(), pp = jv, Fv = (e) => {
  pp = e;
}, Lv = (e, t) => e === t;
function zv(e = Yn) {
  const t = e === Yn ? dp : Tl(e), n = (r, i = {}) => {
    const { equalityFn: o = Lv, devModeChecks: a = {} } = typeof i == "function" ? { equalityFn: i } : i;
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
      subscription: c,
      getServerState: l,
      stabilityCheck: u,
      identityFunctionCheck: d
    } = t(), p = zt.useRef(!0), h = zt.useCallback(
      {
        [r.name](y) {
          const v = r(y);
          if (process.env.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: b,
              stabilityCheck: x
            } = {
              stabilityCheck: u,
              identityFunctionCheck: d,
              ...a
            };
            if (x === "always" || x === "once" && p.current) {
              const S = r(y);
              if (!o(v, S)) {
                let A;
                try {
                  throw new Error();
                } catch (E) {
                  ({ stack: A } = E);
                }
                console.warn(
                  "Selector " + (r.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: y,
                    selected: v,
                    selected2: S,
                    stack: A
                  }
                );
              }
            }
            if ((b === "always" || b === "once" && p.current) && v === y) {
              let S;
              try {
                throw new Error();
              } catch (A) {
                ({ stack: S } = A);
              }
              console.warn(
                "Selector " + (r.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: S }
              );
            }
            p.current && (p.current = !1);
          }
          return v;
        }
      }[r.name],
      [r, u, a.stabilityCheck]
    ), m = pp(
      c.addNestedSub,
      s.getState,
      l || s.getState,
      h,
      o
    );
    return zt.useDebugValue(m), m;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var go = /* @__PURE__ */ zv();
function $v(e) {
  e();
}
function Vv() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      $v(() => {
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
var Du = {
  notify() {
  },
  get: () => []
};
function Uv(e, t) {
  let n, r = Du, i = 0, o = !1;
  function a(y) {
    u();
    const v = r.subscribe(y);
    let b = !1;
    return () => {
      b || (b = !0, v(), d());
    };
  }
  function s() {
    r.notify();
  }
  function c() {
    m.onStateChange && m.onStateChange();
  }
  function l() {
    return o;
  }
  function u() {
    i++, n || (n = e.subscribe(c), r = Vv());
  }
  function d() {
    i--, n && i === 0 && (n(), n = void 0, r.clear(), r = Du);
  }
  function p() {
    o || (o = !0, u());
  }
  function h() {
    o && (o = !1, d());
  }
  const m = {
    addNestedSub: a,
    notifyNestedSubs: s,
    handleChangeWrapper: c,
    isSubscribed: l,
    trySubscribe: p,
    tryUnsubscribe: h,
    getListeners: () => r
  };
  return m;
}
var Bv = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Wv = typeof navigator < "u" && navigator.product === "ReactNative", Hv = Bv || Wv ? zt.useLayoutEffect : zt.useEffect;
function qv({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: i = "once",
  identityFunctionCheck: o = "once"
}) {
  const a = zt.useMemo(() => {
    const l = Uv(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: i,
      identityFunctionCheck: o
    };
  }, [e, r, i, o]), s = zt.useMemo(() => e.getState(), [e]);
  Hv(() => {
    const { subscription: l } = a;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), s !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [a, s]);
  const c = t || Yn;
  return /* @__PURE__ */ zt.createElement(c.Provider, { value: a }, n);
}
var Yv = qv;
function hp(e = Yn) {
  const t = e === Yn ? dp : (
    // @ts-ignore
    Tl(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Gv = /* @__PURE__ */ hp();
function Zv(e = Yn) {
  const t = e === Yn ? Gv : hp(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var vo = /* @__PURE__ */ Zv();
Fv(Iv.useSyncExternalStoreWithSelector);
function bt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Kv = typeof Symbol == "function" && Symbol.observable || "@@observable", ju = Kv, As = () => Math.random().toString(36).substring(7).split("").join("."), Xv = {
  INIT: `@@redux/INIT${/* @__PURE__ */ As()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ As()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${As()}`
}, hr = Xv;
function bo(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Jv(e) {
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
  if (tb(e))
    return "date";
  if (eb(e))
    return "error";
  const n = Qv(e);
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
function Qv(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function eb(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function tb(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Vn(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Jv(e)), t;
}
function mp(e, t, n) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? bt(2) : `Expected the root reducer to be a function. Instead, received: '${Vn(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? bt(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? bt(1) : `Expected the enhancer to be a function. Instead, received: '${Vn(n)}'`);
    return n(mp)(e, t);
  }
  let r = e, i = t, o = /* @__PURE__ */ new Map(), a = o, s = 0, c = !1;
  function l() {
    a === o && (a = /* @__PURE__ */ new Map(), o.forEach((v, b) => {
      a.set(b, v);
    }));
  }
  function u() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? bt(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return i;
  }
  function d(v) {
    if (typeof v != "function")
      throw new Error(process.env.NODE_ENV === "production" ? bt(4) : `Expected the listener to be a function. Instead, received: '${Vn(v)}'`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? bt(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let b = !0;
    l();
    const x = s++;
    return a.set(x, v), function() {
      if (b) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? bt(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        b = !1, l(), a.delete(x), o = null;
      }
    };
  }
  function p(v) {
    if (!bo(v))
      throw new Error(process.env.NODE_ENV === "production" ? bt(7) : `Actions must be plain objects. Instead, the actual type was: '${Vn(v)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof v.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? bt(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof v.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? bt(17) : `Action "type" property must be a string. Instead, the actual type was: '${Vn(v.type)}'. Value was: '${v.type}' (stringified)`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? bt(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, i = r(i, v);
    } finally {
      c = !1;
    }
    return (o = a).forEach((x) => {
      x();
    }), v;
  }
  function h(v) {
    if (typeof v != "function")
      throw new Error(process.env.NODE_ENV === "production" ? bt(10) : `Expected the nextReducer to be a function. Instead, received: '${Vn(v)}`);
    r = v, p({
      type: hr.REPLACE
    });
  }
  function m() {
    const v = d;
    return {
      /**
       * The minimal observable subscription method.
       * @param observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe(b) {
        if (typeof b != "object" || b === null)
          throw new Error(process.env.NODE_ENV === "production" ? bt(11) : `Expected the observer to be an object. Instead, received: '${Vn(b)}'`);
        function x() {
          const A = b;
          A.next && A.next(u());
        }
        return x(), {
          unsubscribe: v(x)
        };
      },
      [ju]() {
        return this;
      }
    };
  }
  return p({
    type: hr.INIT
  }), {
    dispatch: p,
    subscribe: d,
    getState: u,
    replaceReducer: h,
    [ju]: m
  };
}
function Fu(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function nb(e, t, n, r) {
  const i = Object.keys(t), o = n && n.type === hr.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (i.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!bo(e))
    return `The ${o} has unexpected type of "${Vn(e)}". Expected argument to be an object with the following keys: "${i.join('", "')}"`;
  const a = Object.keys(e).filter((s) => !t.hasOwnProperty(s) && !r[s]);
  if (a.forEach((s) => {
    r[s] = !0;
  }), !(n && n.type === hr.REPLACE) && a.length > 0)
    return `Unexpected ${a.length > 1 ? "keys" : "key"} "${a.join('", "')}" found in ${o}. Expected to find one of the known reducer keys instead: "${i.join('", "')}". Unexpected keys will be ignored.`;
}
function rb(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: hr.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? bt(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof n(void 0, {
      type: hr.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? bt(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${hr.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function ib(e) {
  const t = Object.keys(e), n = {};
  for (let a = 0; a < t.length; a++) {
    const s = t[a];
    process.env.NODE_ENV !== "production" && typeof e[s] > "u" && Fu(`No reducer provided for key "${s}"`), typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let i;
  process.env.NODE_ENV !== "production" && (i = {});
  let o;
  try {
    rb(n);
  } catch (a) {
    o = a;
  }
  return function(s = {}, c) {
    if (o)
      throw o;
    if (process.env.NODE_ENV !== "production") {
      const d = nb(s, n, c, i);
      d && Fu(d);
    }
    let l = !1;
    const u = {};
    for (let d = 0; d < r.length; d++) {
      const p = r[d], h = n[p], m = s[p], y = h(m, c);
      if (typeof y > "u") {
        const v = c && c.type;
        throw new Error(process.env.NODE_ENV === "production" ? bt(14) : `When called with an action of type ${v ? `"${String(v)}"` : "(unknown type)"}, the slice reducer for key "${p}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      u[p] = y, l = l || y !== m;
    }
    return l = l || r.length !== Object.keys(s).length, l ? u : s;
  };
}
function ha(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function ob(...e) {
  return (t) => (n, r) => {
    const i = t(n, r);
    let o = () => {
      throw new Error(process.env.NODE_ENV === "production" ? bt(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: i.getState,
      dispatch: (c, ...l) => o(c, ...l)
    }, s = e.map((c) => c(a));
    return o = ha(...s)(i.dispatch), {
      ...i,
      dispatch: o
    };
  };
}
function yp(e) {
  return bo(e) && "type" in e && typeof e.type == "string";
}
var gp = Symbol.for("immer-nothing"), Lu = Symbol.for("immer-draftable"), Wt = Symbol.for("immer-state"), ab = process.env.NODE_ENV !== "production" ? [
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
function Dt(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const n = ab[e], r = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${r}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var ei = Object.getPrototypeOf;
function xr(e) {
  return !!e && !!e[Wt];
}
function Cn(e) {
  var t;
  return e ? vp(e) || Array.isArray(e) || !!e[Lu] || !!((t = e.constructor) != null && t[Lu]) || Ha(e) || qa(e) : !1;
}
var sb = Object.prototype.constructor.toString();
function vp(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = ei(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === sb;
}
function ma(e, t) {
  Wa(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function Wa(e) {
  const t = e[Wt];
  return t ? t.type_ : Array.isArray(e) ? 1 : Ha(e) ? 2 : qa(e) ? 3 : 0;
}
function Mc(e, t) {
  return Wa(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function bp(e, t, n) {
  const r = Wa(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function cb(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function Ha(e) {
  return e instanceof Map;
}
function qa(e) {
  return e instanceof Set;
}
function lr(e) {
  return e.copy_ || e.base_;
}
function Ic(e, t) {
  if (Ha(e))
    return new Map(e);
  if (qa(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = vp(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[Wt];
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
    return Object.create(ei(e), r);
  } else {
    const r = ei(e);
    if (r !== null && n)
      return { ...e };
    const i = Object.create(r);
    return Object.assign(i, e);
  }
}
function kl(e, t = !1) {
  return Ya(e) || xr(e) || !Cn(e) || (Wa(e) > 1 && (e.set = e.add = e.clear = e.delete = lb), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => kl(r, !0))), e;
}
function lb() {
  Dt(2);
}
function Ya(e) {
  return Object.isFrozen(e);
}
var ub = {};
function wr(e) {
  const t = ub[e];
  return t || Dt(0, e), t;
}
var Ui;
function xp() {
  return Ui;
}
function fb(e, t) {
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
function zu(e, t) {
  t && (wr("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function Dc(e) {
  jc(e), e.drafts_.forEach(db), e.drafts_ = null;
}
function jc(e) {
  e === Ui && (Ui = e.parent_);
}
function $u(e) {
  return Ui = fb(Ui, e);
}
function db(e) {
  const t = e[Wt];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function Vu(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[Wt].modified_ && (Dc(t), Dt(4)), Cn(e) && (e = ya(t, e), t.parent_ || ga(t, e)), t.patches_ && wr("Patches").generateReplacementPatches_(
    n[Wt].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = ya(t, n, []), Dc(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== gp ? e : void 0;
}
function ya(e, t, n) {
  if (Ya(t))
    return t;
  const r = t[Wt];
  if (!r)
    return ma(
      t,
      (i, o) => Uu(e, r, t, i, o, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return ga(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let o = i, a = !1;
    r.type_ === 3 && (o = new Set(i), i.clear(), a = !0), ma(
      o,
      (s, c) => Uu(e, r, i, s, c, n, a)
    ), ga(e, i, !1), n && e.patches_ && wr("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function Uu(e, t, n, r, i, o, a) {
  if (process.env.NODE_ENV !== "production" && i === n && Dt(5), xr(i)) {
    const s = o && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Mc(t.assigned_, r) ? o.concat(r) : void 0, c = ya(e, i, s);
    if (bp(n, r, c), xr(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else a && n.add(i);
  if (Cn(i) && !Ya(i)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    ya(e, i), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && ga(e, i);
  }
}
function ga(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && kl(t, n);
}
function pb(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : xp(),
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
  let i = r, o = Pl;
  n && (i = [r], o = Bi);
  const { revoke: a, proxy: s } = Proxy.revocable(i, o);
  return r.draft_ = s, r.revoke_ = a, s;
}
var Pl = {
  get(e, t) {
    if (t === Wt)
      return e;
    const n = lr(e);
    if (!Mc(n, t))
      return hb(e, n, t);
    const r = n[t];
    return e.finalized_ || !Cn(r) ? r : r === Os(e.base_, t) ? (Rs(e), e.copy_[t] = Lc(r, e)) : r;
  },
  has(e, t) {
    return t in lr(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(lr(e));
  },
  set(e, t, n) {
    const r = wp(lr(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const i = Os(lr(e), t), o = i == null ? void 0 : i[Wt];
      if (o && o.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (cb(n, i) && (n !== void 0 || Mc(e.base_, t)))
        return !0;
      Rs(e), Fc(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Os(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Rs(e), Fc(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = lr(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    Dt(11);
  },
  getPrototypeOf(e) {
    return ei(e.base_);
  },
  setPrototypeOf() {
    Dt(12);
  }
}, Bi = {};
ma(Pl, (e, t) => {
  Bi[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
Bi.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Dt(13), Bi.set.call(this, e, t, void 0);
};
Bi.set = function(e, t, n) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Dt(14), Pl.set.call(this, e[0], t, n, e[0]);
};
function Os(e, t) {
  const n = e[Wt];
  return (n ? lr(n) : e)[t];
}
function hb(e, t, n) {
  var i;
  const r = wp(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = r.get) == null ? void 0 : i.call(e.draft_)
  ) : void 0;
}
function wp(e, t) {
  if (!(t in e))
    return;
  let n = ei(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = ei(n);
  }
}
function Fc(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && Fc(e.parent_));
}
function Rs(e) {
  e.copy_ || (e.copy_ = Ic(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var mb = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const o = n;
        n = t;
        const a = this;
        return function(c = o, ...l) {
          return a.produce(c, (u) => n.call(this, u, ...l));
        };
      }
      typeof n != "function" && Dt(6), r !== void 0 && typeof r != "function" && Dt(7);
      let i;
      if (Cn(t)) {
        const o = $u(this), a = Lc(t, void 0);
        let s = !0;
        try {
          i = n(a), s = !1;
        } finally {
          s ? Dc(o) : jc(o);
        }
        return zu(o, r), Vu(i, o);
      } else if (!t || typeof t != "object") {
        if (i = n(t), i === void 0 && (i = t), i === gp && (i = void 0), this.autoFreeze_ && kl(i, !0), r) {
          const o = [], a = [];
          wr("Patches").generateReplacementPatches_(t, i, o, a), r(o, a);
        }
        return i;
      } else
        Dt(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (a, ...s) => this.produceWithPatches(a, (c) => t(c, ...s));
      let r, i;
      return [this.produce(t, n, (a, s) => {
        r = a, i = s;
      }), r, i];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    Cn(e) || Dt(8), xr(e) && (e = yb(e));
    const t = $u(this), n = Lc(e, void 0);
    return n[Wt].isManual_ = !0, jc(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Wt];
    (!n || !n.isManual_) && Dt(9);
    const { scope_: r } = n;
    return zu(r, t), Vu(void 0, r);
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
    const r = wr("Patches").applyPatches_;
    return xr(e) ? r(e, t) : this.produce(
      e,
      (i) => r(i, t)
    );
  }
};
function Lc(e, t) {
  const n = Ha(e) ? wr("MapSet").proxyMap_(e, t) : qa(e) ? wr("MapSet").proxySet_(e, t) : pb(e, t);
  return (t ? t.scope_ : xp()).drafts_.push(n), n;
}
function yb(e) {
  return xr(e) || Dt(10, e), _p(e);
}
function _p(e) {
  if (!Cn(e) || Ya(e))
    return e;
  const t = e[Wt];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Ic(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Ic(e, !0);
  return ma(n, (r, i) => {
    bp(n, r, _p(i));
  }), t && (t.finalized_ = !1), n;
}
var Ht = new mb(), Ep = Ht.produce;
Ht.produceWithPatches.bind(
  Ht
);
Ht.setAutoFreeze.bind(Ht);
Ht.setUseStrictShallowCopy.bind(Ht);
Ht.applyPatches.bind(Ht);
Ht.createDraft.bind(Ht);
Ht.finishDraft.bind(Ht);
function Sp(e) {
  return ({ dispatch: n, getState: r }) => (i) => (o) => typeof o == "function" ? o(n, r, e) : i(o);
}
var gb = Sp(), vb = Sp, bb = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? ha : ha.apply(null, arguments);
}, Cp = (e) => e && typeof e.match == "function";
function ji(e, t) {
  function n(...r) {
    if (t) {
      let i = t(...r);
      if (!i)
        throw new Error(process.env.NODE_ENV === "production" ? rt(0) : "prepareAction did not return an object");
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
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => yp(r) && r.type === e, n;
}
function xb(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  Cp(e);
}
function wb(e) {
  const t = e ? `${e}`.split("/") : [], n = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${n}())\` instead of \`dispatch(${n})\`. This is necessary even if the action has no payload.`;
}
function _b(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (n) => (r) => n(r);
  const {
    isActionCreator: t = xb
  } = e;
  return () => (n) => (r) => (t(r) && console.warn(wb(r.type)), n(r));
}
function Ap(e, t) {
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
var Op = class Ci extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, Ci.prototype);
  }
  static get [Symbol.species]() {
    return Ci;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new Ci(...t[0].concat(this)) : new Ci(...t.concat(this));
  }
};
function Bu(e) {
  return Cn(e) ? Ep(e, () => {
  }) : e;
}
function Wu(e, t, n) {
  if (e.has(t)) {
    let i = e.get(t);
    return n.update && (i = n.update(i, t, e), e.set(t, i)), i;
  }
  if (!n.insert) throw new Error(process.env.NODE_ENV === "production" ? rt(10) : "No insert provided for key not already in map");
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function Eb(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function Sb(e, t, n) {
  const r = Rp(e, t, n);
  return {
    detectMutations() {
      return Tp(e, t, r, n);
    }
  };
}
function Rp(e, t = [], n, r = "", i = /* @__PURE__ */ new Set()) {
  const o = {
    value: n
  };
  if (!e(n) && !i.has(n)) {
    i.add(n), o.children = {};
    for (const a in n) {
      const s = r ? r + "." + a : a;
      t.length && t.indexOf(s) !== -1 || (o.children[a] = Rp(e, t, n[a], s));
    }
  }
  return o;
}
function Tp(e, t = [], n, r, i = !1, o = "") {
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
  const c = {};
  for (let u in n.children)
    c[u] = !0;
  for (let u in r)
    c[u] = !0;
  const l = t.length > 0;
  for (let u in c) {
    const d = o ? o + "." + u : u;
    if (l && t.some((m) => m instanceof RegExp ? m.test(d) : d === m))
      continue;
    const p = Tp(e, t, n.children[u], r[u], s, d);
    if (p.wasMutated)
      return p;
  }
  return {
    wasMutated: !1
  };
}
function Cb(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (n) => t(n);
  {
    let t = function(s, c, l, u) {
      return JSON.stringify(s, n(c, u), l);
    }, n = function(s, c) {
      let l = [], u = [];
      return c || (c = function(d, p) {
        return l[0] === p ? "[Circular ~]" : "[Circular ~." + u.slice(0, l.indexOf(p)).join(".") + "]";
      }), function(d, p) {
        if (l.length > 0) {
          var h = l.indexOf(this);
          ~h ? l.splice(h + 1) : l.push(this), ~h ? u.splice(h, 1 / 0, d) : u.push(d), ~l.indexOf(p) && (p = c.call(this, d, p));
        } else l.push(p);
        return s == null ? p : s.call(this, d, p);
      };
    }, {
      isImmutable: r = Eb,
      ignoredPaths: i,
      warnAfter: o = 32
    } = e;
    const a = Sb.bind(null, r, i);
    return ({
      getState: s
    }) => {
      let c = s(), l = a(c), u;
      return (d) => (p) => {
        const h = Ap(o, "ImmutableStateInvariantMiddleware");
        h.measureTime(() => {
          if (c = s(), u = l.detectMutations(), l = a(c), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? rt(19) : `A state mutation was detected between dispatches, in the path '${u.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const m = d(p);
        return h.measureTime(() => {
          if (c = s(), u = l.detectMutations(), l = a(c), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? rt(20) : `A state mutation was detected inside a dispatch, in the path: ${u.path || ""}. Take a look at the reducer(s) handling the action ${t(p)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), h.warnIfExceeded(), m;
      };
    };
  }
}
function kp(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || bo(e);
}
function zc(e, t = "", n = kp, r, i = [], o) {
  let a;
  if (!n(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || o != null && o.has(e)) return !1;
  const s = r != null ? r(e) : Object.entries(e), c = i.length > 0;
  for (const [l, u] of s) {
    const d = t ? t + "." + l : l;
    if (!(c && i.some((h) => h instanceof RegExp ? h.test(d) : d === h))) {
      if (!n(u))
        return {
          keyPath: d,
          value: u
        };
      if (typeof u == "object" && (a = zc(u, d, n, r, i, o), a))
        return a;
    }
  }
  return o && Pp(e) && o.add(e), !1;
}
function Pp(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !Pp(t))
      return !1;
  return !0;
}
function Ab(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (n) => t(n);
  {
    const {
      isSerializable: t = kp,
      getEntries: n,
      ignoredActions: r = [],
      ignoredActionPaths: i = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: o = [],
      warnAfter: a = 32,
      ignoreState: s = !1,
      ignoreActions: c = !1,
      disableCache: l = !1
    } = e, u = !l && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (d) => (p) => (h) => {
      if (!yp(h))
        return p(h);
      const m = p(h), y = Ap(a, "SerializableStateInvariantMiddleware");
      return !c && !(r.length && r.indexOf(h.type) !== -1) && y.measureTime(() => {
        const v = zc(h, "", t, n, i, u);
        if (v) {
          const {
            keyPath: b,
            value: x
          } = v;
          console.error(`A non-serializable value was detected in an action, in the path: \`${b}\`. Value:`, x, `
Take a look at the logic that dispatched this action: `, h, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), s || (y.measureTime(() => {
        const v = d.getState(), b = zc(v, "", t, n, o, u);
        if (b) {
          const {
            keyPath: x,
            value: S
          } = b;
          console.error(`A non-serializable value was detected in the state, in the path: \`${x}\`. Value:`, S, `
Take a look at the reducer(s) handling this action type: ${h.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), y.warnIfExceeded()), m;
    };
  }
}
function Do(e) {
  return typeof e == "boolean";
}
var Ob = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: i = !0,
    actionCreatorCheck: o = !0
  } = t ?? {};
  let a = new Op();
  if (n && (Do(n) ? a.push(gb) : a.push(vb(n.extraArgument))), process.env.NODE_ENV !== "production") {
    if (r) {
      let s = {};
      Do(r) || (s = r), a.unshift(Cb(s));
    }
    if (i) {
      let s = {};
      Do(i) || (s = i), a.push(Ab(s));
    }
    if (o) {
      let s = {};
      Do(o) || (s = o), a.unshift(_b(s));
    }
  }
  return a;
}, Rb = "RTK_autoBatch", Np = (e) => (t) => {
  setTimeout(t, e);
}, Tb = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : Np(10), kb = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let i = !0, o = !1, a = !1;
  const s = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? Tb : e.type === "callback" ? e.queueNotification : Np(e.timeout), l = () => {
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
        return i = !((d = u == null ? void 0 : u.meta) != null && d[Rb]), o = !i, o && (a || (a = !0, c(l))), r.dispatch(u);
      } finally {
        i = !0;
      }
    }
  });
}, Pb = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let i = new Op(e);
  return r && i.push(kb(typeof r == "object" ? r : void 0)), i;
};
function Nb(e) {
  const t = Ob(), {
    reducer: n = void 0,
    middleware: r,
    devTools: i = !0,
    preloadedState: o = void 0,
    enhancers: a = void 0
  } = e || {};
  let s;
  if (typeof n == "function")
    s = n;
  else if (bo(n))
    s = ib(n);
  else
    throw new Error(process.env.NODE_ENV === "production" ? rt(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && r && typeof r != "function")
    throw new Error(process.env.NODE_ENV === "production" ? rt(2) : "`middleware` field must be a callback");
  let c;
  if (typeof r == "function") {
    if (c = r(t), process.env.NODE_ENV !== "production" && !Array.isArray(c))
      throw new Error(process.env.NODE_ENV === "production" ? rt(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    c = t();
  if (process.env.NODE_ENV !== "production" && c.some((m) => typeof m != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? rt(4) : "each middleware provided to configureStore must be a function");
  let l = ha;
  i && (l = bb({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof i == "object" && i
  }));
  const u = ob(...c), d = Pb(u);
  if (process.env.NODE_ENV !== "production" && a && typeof a != "function")
    throw new Error(process.env.NODE_ENV === "production" ? rt(5) : "`enhancers` field must be a callback");
  let p = typeof a == "function" ? a(d) : d();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(p))
    throw new Error(process.env.NODE_ENV === "production" ? rt(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && p.some((m) => typeof m != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? rt(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && c.length && !p.includes(u) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const h = l(...p);
  return mp(s, o, h);
}
function Mp(e) {
  const t = {}, n = [];
  let r;
  const i = {
    addCase(o, a) {
      if (process.env.NODE_ENV !== "production") {
        if (n.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? rt(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (r)
          throw new Error(process.env.NODE_ENV === "production" ? rt(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const s = typeof o == "string" ? o : o.type;
      if (!s)
        throw new Error(process.env.NODE_ENV === "production" ? rt(28) : "`builder.addCase` cannot be called with an empty action type");
      if (s in t)
        throw new Error(process.env.NODE_ENV === "production" ? rt(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${s}'`);
      return t[s] = a, i;
    },
    addMatcher(o, a) {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error(process.env.NODE_ENV === "production" ? rt(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return n.push({
        matcher: o,
        reducer: a
      }), i;
    },
    addDefaultCase(o) {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error(process.env.NODE_ENV === "production" ? rt(31) : "`builder.addDefaultCase` can only be called once");
      return r = o, i;
    }
  };
  return e(i), [t, n, r];
}
function Mb(e) {
  return typeof e == "function";
}
function Ib(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? rt(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [n, r, i] = Mp(t), o;
  if (Mb(e))
    o = () => Bu(e());
  else {
    const s = Bu(e);
    o = () => s;
  }
  function a(s = o(), c) {
    let l = [n[c.type], ...r.filter(({
      matcher: u
    }) => u(c)).map(({
      reducer: u
    }) => u)];
    return l.filter((u) => !!u).length === 0 && (l = [i]), l.reduce((u, d) => {
      if (d)
        if (xr(u)) {
          const h = d(u, c);
          return h === void 0 ? u : h;
        } else {
          if (Cn(u))
            return Ep(u, (p) => d(p, c));
          {
            const p = d(u, c);
            if (p === void 0) {
              if (u === null)
                return u;
              throw new Error(process.env.NODE_ENV === "production" ? rt(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return p;
          }
        }
      return u;
    }, s);
  }
  return a.getInitialState = o, a;
}
var Db = (e, t) => Cp(e) ? e.match(t) : e(t);
function jb(...e) {
  return (t) => e.some((n) => Db(n, t));
}
var Fb = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", Lb = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += Fb[Math.random() * 64 | 0];
  return t;
}, zb = ["name", "message", "stack", "code"], Ts = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Mr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Hu = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Mr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, $b = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n of zb)
      typeof e[n] == "string" && (t[n] = e[n]);
    return t;
  }
  return {
    message: String(e)
  };
}, Ga = /* @__PURE__ */ (() => {
  function e(t, n, r) {
    const i = ji(t + "/fulfilled", (c, l, u, d) => ({
      payload: c,
      meta: {
        ...d || {},
        arg: u,
        requestId: l,
        requestStatus: "fulfilled"
      }
    })), o = ji(t + "/pending", (c, l, u) => ({
      payload: void 0,
      meta: {
        ...u || {},
        arg: l,
        requestId: c,
        requestStatus: "pending"
      }
    })), a = ji(t + "/rejected", (c, l, u, d, p) => ({
      payload: d,
      error: (r && r.serializeError || $b)(c || "Rejected"),
      meta: {
        ...p || {},
        arg: u,
        requestId: l,
        rejectedWithValue: !!d,
        requestStatus: "rejected",
        aborted: (c == null ? void 0 : c.name) === "AbortError",
        condition: (c == null ? void 0 : c.name) === "ConditionError"
      }
    }));
    function s(c) {
      return (l, u, d) => {
        const p = r != null && r.idGenerator ? r.idGenerator(c) : Lb(), h = new AbortController();
        let m, y;
        function v(x) {
          y = x, h.abort();
        }
        const b = async function() {
          var A, E;
          let x;
          try {
            let N = (A = r == null ? void 0 : r.condition) == null ? void 0 : A.call(r, c, {
              getState: u,
              extra: d
            });
            if (Ub(N) && (N = await N), N === !1 || h.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const P = new Promise((U, ue) => {
              m = () => {
                ue({
                  name: "AbortError",
                  message: y || "Aborted"
                });
              }, h.signal.addEventListener("abort", m);
            });
            l(o(p, c, (E = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : E.call(r, {
              requestId: p,
              arg: c
            }, {
              getState: u,
              extra: d
            }))), x = await Promise.race([P, Promise.resolve(n(c, {
              dispatch: l,
              getState: u,
              extra: d,
              requestId: p,
              signal: h.signal,
              abort: v,
              rejectWithValue: (U, ue) => new Ts(U, ue),
              fulfillWithValue: (U, ue) => new Hu(U, ue)
            })).then((U) => {
              if (U instanceof Ts)
                throw U;
              return U instanceof Hu ? i(U.payload, p, c, U.meta) : i(U, p, c);
            })]);
          } catch (N) {
            x = N instanceof Ts ? a(null, p, c, N.payload, N.meta) : a(N, p, c);
          } finally {
            m && h.signal.removeEventListener("abort", m);
          }
          return r && !r.dispatchConditionRejection && a.match(x) && x.meta.condition || l(x), x;
        }();
        return Object.assign(b, {
          abort: v,
          requestId: p,
          arg: c,
          unwrap() {
            return b.then(Vb);
          }
        });
      };
    }
    return Object.assign(s, {
      pending: o,
      rejected: a,
      fulfilled: i,
      settled: jb(a, i),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function Vb(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function Ub(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var Bb = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function Wb(e, t) {
  return `${e}/${t}`;
}
function Hb({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[Bb];
  return function(i) {
    const {
      name: o,
      reducerPath: a = o
    } = i;
    if (!o)
      throw new Error(process.env.NODE_ENV === "production" ? rt(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && i.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const s = (typeof i.reducers == "function" ? i.reducers(Yb()) : i.reducers) || {}, c = Object.keys(s), l = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(S, A) {
        const E = typeof S == "string" ? S : S.type;
        if (!E)
          throw new Error(process.env.NODE_ENV === "production" ? rt(12) : "`context.addCase` cannot be called with an empty action type");
        if (E in l.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? rt(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + E);
        return l.sliceCaseReducersByType[E] = A, u;
      },
      addMatcher(S, A) {
        return l.sliceMatchers.push({
          matcher: S,
          reducer: A
        }), u;
      },
      exposeAction(S, A) {
        return l.actionCreators[S] = A, u;
      },
      exposeCaseReducer(S, A) {
        return l.sliceCaseReducersByName[S] = A, u;
      }
    };
    c.forEach((S) => {
      const A = s[S], E = {
        reducerName: S,
        type: Wb(o, S),
        createNotation: typeof i.reducers == "function"
      };
      Zb(A) ? Xb(E, A, u, t) : Gb(E, A, u);
    });
    function d() {
      if (process.env.NODE_ENV !== "production" && typeof i.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? rt(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [S = {}, A = [], E = void 0] = typeof i.extraReducers == "function" ? Mp(i.extraReducers) : [i.extraReducers], N = {
        ...S,
        ...l.sliceCaseReducersByType
      };
      return Ib(i.initialState, (P) => {
        for (let U in N)
          P.addCase(U, N[U]);
        for (let U of l.sliceMatchers)
          P.addMatcher(U.matcher, U.reducer);
        for (let U of A)
          P.addMatcher(U.matcher, U.reducer);
        E && P.addDefaultCase(E);
      });
    }
    const p = (S) => S, h = /* @__PURE__ */ new Map();
    let m;
    function y(S, A) {
      return m || (m = d()), m(S, A);
    }
    function v() {
      return m || (m = d()), m.getInitialState();
    }
    function b(S, A = !1) {
      function E(P) {
        let U = P[S];
        if (typeof U > "u") {
          if (A)
            U = v();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? rt(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return U;
      }
      function N(P = p) {
        const U = Wu(h, A, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Wu(U, P, {
          insert: () => {
            const ue = {};
            for (const [ye, pe] of Object.entries(i.selectors ?? {}))
              ue[ye] = qb(pe, P, v, A);
            return ue;
          }
        });
      }
      return {
        reducerPath: S,
        getSelectors: N,
        get selectors() {
          return N(E);
        },
        selectSlice: E
      };
    }
    const x = {
      name: o,
      reducer: y,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: v,
      ...b(a),
      injectInto(S, {
        reducerPath: A,
        ...E
      } = {}) {
        const N = A ?? a;
        return S.inject({
          reducerPath: N,
          reducer: y
        }, E), {
          ...x,
          ...b(N, !0)
        };
      }
    };
    return x;
  };
}
function qb(e, t, n, r) {
  function i(o, ...a) {
    let s = t(o);
    if (typeof s > "u") {
      if (r)
        s = n();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? rt(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(s, ...a);
  }
  return i.unwrapped = e, i;
}
var Ip = /* @__PURE__ */ Hb();
function Yb() {
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
function Gb({
  type: e,
  reducerName: t,
  createNotation: n
}, r, i) {
  let o, a;
  if ("reducer" in r) {
    if (n && !Kb(r))
      throw new Error(process.env.NODE_ENV === "production" ? rt(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    o = r.reducer, a = r.prepare;
  } else
    o = r;
  i.addCase(e, o).exposeCaseReducer(t, o).exposeAction(t, a ? ji(e, a) : ji(e));
}
function Zb(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function Kb(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function Xb({
  type: e,
  reducerName: t
}, n, r, i) {
  if (!i)
    throw new Error(process.env.NODE_ENV === "production" ? rt(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: o,
    fulfilled: a,
    pending: s,
    rejected: c,
    settled: l,
    options: u
  } = n, d = i(e, o, u);
  r.exposeAction(t, d), a && r.addCase(d.fulfilled, a), s && r.addCase(d.pending, s), c && r.addCase(d.rejected, c), l && r.addMatcher(d.settled, l), r.exposeCaseReducer(t, {
    fulfilled: a || jo,
    pending: s || jo,
    rejected: c || jo,
    settled: l || jo
  });
}
function jo() {
}
function rt(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Dp = {}, Wi = {};
function jp(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Jb } = Object.prototype, { getPrototypeOf: Nl } = Object, Za = /* @__PURE__ */ ((e) => (t) => {
  const n = Jb.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), sn = (e) => (e = e.toLowerCase(), (t) => Za(t) === e), Ka = (e) => (t) => typeof t === e, { isArray: ui } = Array, Hi = Ka("undefined");
function Qb(e) {
  return e !== null && !Hi(e) && e.constructor !== null && !Hi(e.constructor) && Gt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Fp = sn("ArrayBuffer");
function ex(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Fp(e.buffer), t;
}
const tx = Ka("string"), Gt = Ka("function"), Lp = Ka("number"), Xa = (e) => e !== null && typeof e == "object", nx = (e) => e === !0 || e === !1, Qo = (e) => {
  if (Za(e) !== "object")
    return !1;
  const t = Nl(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, rx = sn("Date"), ix = sn("File"), ox = sn("Blob"), ax = sn("FileList"), sx = (e) => Xa(e) && Gt(e.pipe), cx = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Gt(e.append) && ((t = Za(e)) === "formdata" || // detect form-data instance
  t === "object" && Gt(e.toString) && e.toString() === "[object FormData]"));
}, lx = sn("URLSearchParams"), [ux, fx, dx, px] = ["ReadableStream", "Request", "Response", "Headers"].map(sn), hx = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function xo(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, i;
  if (typeof e != "object" && (e = [e]), ui(e))
    for (r = 0, i = e.length; r < i; r++)
      t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let s;
    for (r = 0; r < a; r++)
      s = o[r], t.call(null, e[s], s, e);
  }
}
function zp(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, i;
  for (; r-- > 0; )
    if (i = n[r], t === i.toLowerCase())
      return i;
  return null;
}
const $p = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : ot, Vp = (e) => !Hi(e) && e !== $p;
function $c() {
  const { caseless: e } = Vp(this) && this || {}, t = {}, n = (r, i) => {
    const o = e && zp(t, i) || i;
    Qo(t[o]) && Qo(r) ? t[o] = $c(t[o], r) : Qo(r) ? t[o] = $c({}, r) : ui(r) ? t[o] = r.slice() : t[o] = r;
  };
  for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && xo(arguments[r], n);
  return t;
}
const mx = (e, t, n, { allOwnKeys: r } = {}) => (xo(t, (i, o) => {
  n && Gt(i) ? e[o] = jp(i, n) : e[o] = i;
}, { allOwnKeys: r }), e), yx = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), gx = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, vx = (e, t, n, r) => {
  let i, o, a;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0; )
      a = i[o], (!r || r(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = n !== !1 && Nl(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, bx = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, xx = (e) => {
  if (!e) return null;
  if (ui(e)) return e;
  let t = e.length;
  if (!Lp(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, wx = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Nl(Uint8Array)), _x = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let i;
  for (; (i = r.next()) && !i.done; ) {
    const o = i.value;
    t.call(e, o[0], o[1]);
  }
}, Ex = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, Sx = sn("HTMLFormElement"), Cx = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, i) {
    return r.toUpperCase() + i;
  }
), qu = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), Ax = sn("RegExp"), Up = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  xo(n, (i, o) => {
    let a;
    (a = t(i, o, e)) !== !1 && (r[o] = a || i);
  }), Object.defineProperties(e, r);
}, Ox = (e) => {
  Up(e, (t, n) => {
    if (Gt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Gt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, Rx = (e, t) => {
  const n = {}, r = (i) => {
    i.forEach((o) => {
      n[o] = !0;
    });
  };
  return ui(e) ? r(e) : r(String(e).split(t)), n;
}, Tx = () => {
}, kx = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, ks = "abcdefghijklmnopqrstuvwxyz", Yu = "0123456789", Bp = {
  DIGIT: Yu,
  ALPHA: ks,
  ALPHA_DIGIT: ks + ks.toUpperCase() + Yu
}, Px = (e = 16, t = Bp.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function Nx(e) {
  return !!(e && Gt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Mx = (e) => {
  const t = new Array(10), n = (r, i) => {
    if (Xa(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[i] = r;
        const o = ui(r) ? [] : {};
        return xo(r, (a, s) => {
          const c = n(a, i + 1);
          !Hi(c) && (o[s] = c);
        }), t[i] = void 0, o;
      }
    }
    return r;
  };
  return n(e, 0);
}, Ix = sn("AsyncFunction"), Dx = (e) => e && (Xa(e) || Gt(e)) && Gt(e.then) && Gt(e.catch);
var z = {
  isArray: ui,
  isArrayBuffer: Fp,
  isBuffer: Qb,
  isFormData: cx,
  isArrayBufferView: ex,
  isString: tx,
  isNumber: Lp,
  isBoolean: nx,
  isObject: Xa,
  isPlainObject: Qo,
  isReadableStream: ux,
  isRequest: fx,
  isResponse: dx,
  isHeaders: px,
  isUndefined: Hi,
  isDate: rx,
  isFile: ix,
  isBlob: ox,
  isRegExp: Ax,
  isFunction: Gt,
  isStream: sx,
  isURLSearchParams: lx,
  isTypedArray: wx,
  isFileList: ax,
  forEach: xo,
  merge: $c,
  extend: mx,
  trim: hx,
  stripBOM: yx,
  inherits: gx,
  toFlatObject: vx,
  kindOf: Za,
  kindOfTest: sn,
  endsWith: bx,
  toArray: xx,
  forEachEntry: _x,
  matchAll: Ex,
  isHTMLForm: Sx,
  hasOwnProperty: qu,
  hasOwnProp: qu,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Up,
  freezeMethods: Ox,
  toObjectSet: Rx,
  toCamelCase: Cx,
  noop: Tx,
  toFiniteNumber: kx,
  findKey: zp,
  global: $p,
  isContextDefined: Vp,
  ALPHABET: Bp,
  generateString: Px,
  isSpecCompliantForm: Nx,
  toJSONObject: Mx,
  isAsyncFn: Ix,
  isThenable: Dx
};
function De(e, t, n, r, i) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i);
}
z.inherits(De, Error, {
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
      config: z.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Wp = De.prototype, Hp = {};
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
  Hp[e] = { value: e };
});
Object.defineProperties(De, Hp);
Object.defineProperty(Wp, "isAxiosError", { value: !0 });
De.from = (e, t, n, r, i, o) => {
  const a = Object.create(Wp);
  return z.toFlatObject(e, a, function(c) {
    return c !== Error.prototype;
  }, (s) => s !== "isAxiosError"), De.call(a, e.message, t, n, r, i), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
var jx = null;
function Vc(e) {
  return z.isPlainObject(e) || z.isArray(e);
}
function qp(e) {
  return z.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Gu(e, t, n) {
  return e ? e.concat(t).map(function(i, o) {
    return i = qp(i), !n && o ? "[" + i + "]" : i;
  }).join(n ? "." : "") : t;
}
function Fx(e) {
  return z.isArray(e) && !e.some(Vc);
}
const Lx = z.toFlatObject(z, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ja(e, t, n) {
  if (!z.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = z.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(y, v) {
    return !z.isUndefined(v[y]);
  });
  const r = n.metaTokens, i = n.visitor || u, o = n.dots, a = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && z.isSpecCompliantForm(t);
  if (!z.isFunction(i))
    throw new TypeError("visitor must be a function");
  function l(m) {
    if (m === null) return "";
    if (z.isDate(m))
      return m.toISOString();
    if (!c && z.isBlob(m))
      throw new De("Blob is not supported. Use a Buffer instead.");
    return z.isArrayBuffer(m) || z.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function u(m, y, v) {
    let b = m;
    if (m && !v && typeof m == "object") {
      if (z.endsWith(y, "{}"))
        y = r ? y : y.slice(0, -2), m = JSON.stringify(m);
      else if (z.isArray(m) && Fx(m) || (z.isFileList(m) || z.endsWith(y, "[]")) && (b = z.toArray(m)))
        return y = qp(y), b.forEach(function(S, A) {
          !(z.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Gu([y], A, o) : a === null ? y : y + "[]",
            l(S)
          );
        }), !1;
    }
    return Vc(m) ? !0 : (t.append(Gu(v, y, o), l(m)), !1);
  }
  const d = [], p = Object.assign(Lx, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: Vc
  });
  function h(m, y) {
    if (!z.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(m), z.forEach(m, function(b, x) {
        (!(z.isUndefined(b) || b === null) && i.call(
          t,
          b,
          z.isString(x) ? x.trim() : x,
          y,
          p
        )) === !0 && h(b, y ? y.concat(x) : [x]);
      }), d.pop();
    }
  }
  if (!z.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function Zu(e) {
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
function Ml(e, t) {
  this._pairs = [], e && Ja(e, this, t);
}
const Yp = Ml.prototype;
Yp.append = function(t, n) {
  this._pairs.push([t, n]);
};
Yp.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, Zu);
  } : Zu;
  return this._pairs.map(function(i) {
    return n(i[0]) + "=" + n(i[1]);
  }, "").join("&");
};
function zx(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Gp(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || zx, i = n && n.serialize;
  let o;
  if (i ? o = i(t, n) : o = z.isURLSearchParams(t) ? t.toString() : new Ml(t, n).toString(r), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class $x {
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
    z.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
var Ku = $x, Zp = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Vx = typeof URLSearchParams < "u" ? URLSearchParams : Ml, Ux = typeof FormData < "u" ? FormData : null, Bx = typeof Blob < "u" ? Blob : null, Wx = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Vx,
    FormData: Ux,
    Blob: Bx
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
const Il = typeof window < "u" && typeof document < "u", Hx = ((e) => Il && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), qx = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Yx = Il && window.location.href || "http://localhost";
var Gx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  hasBrowserEnv: Il,
  hasStandardBrowserWebWorkerEnv: qx,
  hasStandardBrowserEnv: Hx,
  origin: Yx
}), Jt = {
  ...Gx,
  ...Wx
};
function Zx(e, t) {
  return Ja(e, new Jt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, i, o) {
      return Jt.isNode && z.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Kx(e) {
  return z.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function Xx(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const i = n.length;
  let o;
  for (r = 0; r < i; r++)
    o = n[r], t[o] = e[o];
  return t;
}
function Kp(e) {
  function t(n, r, i, o) {
    let a = n[o++];
    if (a === "__proto__") return !0;
    const s = Number.isFinite(+a), c = o >= n.length;
    return a = !a && z.isArray(i) ? i.length : a, c ? (z.hasOwnProp(i, a) ? i[a] = [i[a], r] : i[a] = r, !s) : ((!i[a] || !z.isObject(i[a])) && (i[a] = []), t(n, r, i[a], o) && z.isArray(i[a]) && (i[a] = Xx(i[a])), !s);
  }
  if (z.isFormData(e) && z.isFunction(e.entries)) {
    const n = {};
    return z.forEachEntry(e, (r, i) => {
      t(Kx(r), i, n, 0);
    }), n;
  }
  return null;
}
function Jx(e, t, n) {
  if (z.isString(e))
    try {
      return (t || JSON.parse)(e), z.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(e);
}
const Dl = {
  transitional: Zp,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, o = z.isObject(t);
    if (o && z.isHTMLForm(t) && (t = new FormData(t)), z.isFormData(t))
      return i ? JSON.stringify(Kp(t)) : t;
    if (z.isArrayBuffer(t) || z.isBuffer(t) || z.isStream(t) || z.isFile(t) || z.isBlob(t) || z.isReadableStream(t))
      return t;
    if (z.isArrayBufferView(t))
      return t.buffer;
    if (z.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (o) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Zx(t, this.formSerializer).toString();
      if ((s = z.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Ja(
          s ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return o || i ? (n.setContentType("application/json", !1), Jx(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || Dl.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json";
    if (z.isResponse(t) || z.isReadableStream(t))
      return t;
    if (t && z.isString(t) && (r && !this.responseType || i)) {
      const a = !(n && n.silentJSONParsing) && i;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? De.from(s, De.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: Jt.classes.FormData,
    Blob: Jt.classes.Blob
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
z.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Dl.headers[e] = {};
});
var jl = Dl;
const Qx = z.toObjectSet([
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
var e0 = (e) => {
  const t = {};
  let n, r, i;
  return e && e.split(`
`).forEach(function(a) {
    i = a.indexOf(":"), n = a.substring(0, i).trim().toLowerCase(), r = a.substring(i + 1).trim(), !(!n || t[n] && Qx[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
};
const Xu = Symbol("internals");
function bi(e) {
  return e && String(e).trim().toLowerCase();
}
function ea(e) {
  return e === !1 || e == null ? e : z.isArray(e) ? e.map(ea) : String(e);
}
function t0(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const n0 = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ps(e, t, n, r, i) {
  if (z.isFunction(r))
    return r.call(this, t, n);
  if (i && (t = n), !!z.isString(t)) {
    if (z.isString(r))
      return t.indexOf(r) !== -1;
    if (z.isRegExp(r))
      return r.test(t);
  }
}
function r0(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function i0(e, t) {
  const n = z.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(i, o, a) {
        return this[r].call(this, t, i, o, a);
      },
      configurable: !0
    });
  });
}
class Qa {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const i = this;
    function o(s, c, l) {
      const u = bi(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = z.findKey(i, u);
      (!d || i[d] === void 0 || l === !0 || l === void 0 && i[d] !== !1) && (i[d || c] = ea(s));
    }
    const a = (s, c) => z.forEach(s, (l, u) => o(l, u, c));
    if (z.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (z.isString(t) && (t = t.trim()) && !n0(t))
      a(e0(t), n);
    else if (z.isHeaders(t))
      for (const [s, c] of t.entries())
        o(c, s, r);
    else
      t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = bi(t), t) {
      const r = z.findKey(this, t);
      if (r) {
        const i = this[r];
        if (!n)
          return i;
        if (n === !0)
          return t0(i);
        if (z.isFunction(n))
          return n.call(this, i, r);
        if (z.isRegExp(n))
          return n.exec(i);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = bi(t), t) {
      const r = z.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ps(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let i = !1;
    function o(a) {
      if (a = bi(a), a) {
        const s = z.findKey(r, a);
        s && (!n || Ps(r, r[s], s, n)) && (delete r[s], i = !0);
      }
    }
    return z.isArray(t) ? t.forEach(o) : o(t), i;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, i = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Ps(this, this[o], o, t, !0)) && (delete this[o], i = !0);
    }
    return i;
  }
  normalize(t) {
    const n = this, r = {};
    return z.forEach(this, (i, o) => {
      const a = z.findKey(r, o);
      if (a) {
        n[a] = ea(i), delete n[o];
        return;
      }
      const s = t ? r0(o) : String(o).trim();
      s !== o && delete n[o], n[s] = ea(i), r[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return z.forEach(this, (r, i) => {
      r != null && r !== !1 && (n[i] = t && z.isArray(r) ? r.join(", ") : r);
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
    const r = (this[Xu] = this[Xu] = {
      accessors: {}
    }).accessors, i = this.prototype;
    function o(a) {
      const s = bi(a);
      r[s] || (i0(i, a), r[s] = !0);
    }
    return z.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Qa.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
z.reduceDescriptors(Qa.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
z.freezeMethods(Qa);
var Qt = Qa;
function Ns(e, t) {
  const n = this || jl, r = t || n, i = Qt.from(r.headers);
  let o = r.data;
  return z.forEach(e, function(s) {
    o = s.call(n, o, i.normalize(), t ? t.status : void 0);
  }), i.normalize(), o;
}
function Xp(e) {
  return !!(e && e.__CANCEL__);
}
function fi(e, t, n) {
  De.call(this, e ?? "canceled", De.ERR_CANCELED, t, n), this.name = "CanceledError";
}
z.inherits(fi, De, {
  __CANCEL__: !0
});
function Jp(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new De(
    "Request failed with status code " + n.status,
    [De.ERR_BAD_REQUEST, De.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function o0(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function a0(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let i = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), u = r[o];
    a || (a = l), n[i] = c, r[i] = l;
    let d = o, p = 0;
    for (; d !== i; )
      p += n[d++], d = d % e;
    if (i = (i + 1) % e, i === o && (o = (o + 1) % e), l - a < t)
      return;
    const h = u && l - u;
    return h ? Math.round(p * 1e3 / h) : void 0;
  };
}
function s0(e, t) {
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
var va = (e, t, n = 3) => {
  let r = 0;
  const i = a0(50, 250);
  return s0((o) => {
    const a = o.loaded, s = o.lengthComputable ? o.total : void 0, c = a - r, l = i(c), u = a <= s;
    r = a;
    const d = {
      loaded: a,
      total: s,
      progress: s ? a / s : void 0,
      bytes: c,
      rate: l || void 0,
      estimated: l && s && u ? (s - a) / l : void 0,
      event: o,
      lengthComputable: s != null
    };
    d[t ? "download" : "upload"] = !0, e(d);
  }, n);
}, c0 = Jt.hasStandardBrowserEnv ? (
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
      const s = z.isString(a) ? i(a) : a;
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
), l0 = Jt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, i, o) {
      const a = [e + "=" + encodeURIComponent(t)];
      z.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), z.isString(r) && a.push("path=" + r), z.isString(i) && a.push("domain=" + i), o === !0 && a.push("secure"), document.cookie = a.join("; ");
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
function u0(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function f0(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Qp(e, t) {
  return e && !u0(t) ? f0(e, t) : t;
}
const Ju = (e) => e instanceof Qt ? { ...e } : e;
function _r(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, d) {
    return z.isPlainObject(l) && z.isPlainObject(u) ? z.merge.call({ caseless: d }, l, u) : z.isPlainObject(u) ? z.merge({}, u) : z.isArray(u) ? u.slice() : u;
  }
  function i(l, u, d) {
    if (z.isUndefined(u)) {
      if (!z.isUndefined(l))
        return r(void 0, l, d);
    } else return r(l, u, d);
  }
  function o(l, u) {
    if (!z.isUndefined(u))
      return r(void 0, u);
  }
  function a(l, u) {
    if (z.isUndefined(u)) {
      if (!z.isUndefined(l))
        return r(void 0, l);
    } else return r(void 0, u);
  }
  function s(l, u, d) {
    if (d in t)
      return r(l, u);
    if (d in e)
      return r(void 0, l);
  }
  const c = {
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
    headers: (l, u) => i(Ju(l), Ju(u), !0)
  };
  return z.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = c[u] || i, p = d(e[u], t[u], u);
    z.isUndefined(p) && d !== s || (n[u] = p);
  }), n;
}
var eh = (e) => {
  const t = _r({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: i, xsrfCookieName: o, headers: a, auth: s } = t;
  t.headers = a = Qt.from(a), t.url = Gp(Qp(t.baseURL, t.url), e.params, e.paramsSerializer), s && a.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  );
  let c;
  if (z.isFormData(n)) {
    if (Jt.hasStandardBrowserEnv || Jt.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if ((c = a.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      a.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Jt.hasStandardBrowserEnv && (r && z.isFunction(r) && (r = r(t)), r || r !== !1 && c0(t.url))) {
    const l = i && o && l0.read(o);
    l && a.set(i, l);
  }
  return t;
};
const d0 = typeof XMLHttpRequest < "u";
var p0 = d0 && function(e) {
  return new Promise(function(n, r) {
    const i = eh(e);
    let o = i.data;
    const a = Qt.from(i.headers).normalize();
    let { responseType: s } = i, c;
    function l() {
      i.cancelToken && i.cancelToken.unsubscribe(c), i.signal && i.signal.removeEventListener("abort", c);
    }
    let u = new XMLHttpRequest();
    u.open(i.method.toUpperCase(), i.url, !0), u.timeout = i.timeout;
    function d() {
      if (!u)
        return;
      const h = Qt.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), y = {
        data: !s || s === "text" || s === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: h,
        config: e,
        request: u
      };
      Jp(function(b) {
        n(b), l();
      }, function(b) {
        r(b), l();
      }, y), u = null;
    }
    "onloadend" in u ? u.onloadend = d : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(d);
    }, u.onabort = function() {
      u && (r(new De("Request aborted", De.ECONNABORTED, i, u)), u = null);
    }, u.onerror = function() {
      r(new De("Network Error", De.ERR_NETWORK, i, u)), u = null;
    }, u.ontimeout = function() {
      let m = i.timeout ? "timeout of " + i.timeout + "ms exceeded" : "timeout exceeded";
      const y = i.transitional || Zp;
      i.timeoutErrorMessage && (m = i.timeoutErrorMessage), r(new De(
        m,
        y.clarifyTimeoutError ? De.ETIMEDOUT : De.ECONNABORTED,
        i,
        u
      )), u = null;
    }, o === void 0 && a.setContentType(null), "setRequestHeader" in u && z.forEach(a.toJSON(), function(m, y) {
      u.setRequestHeader(y, m);
    }), z.isUndefined(i.withCredentials) || (u.withCredentials = !!i.withCredentials), s && s !== "json" && (u.responseType = i.responseType), typeof i.onDownloadProgress == "function" && u.addEventListener("progress", va(i.onDownloadProgress, !0)), typeof i.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", va(i.onUploadProgress)), (i.cancelToken || i.signal) && (c = (h) => {
      u && (r(!h || h.type ? new fi(null, e, u) : h), u.abort(), u = null);
    }, i.cancelToken && i.cancelToken.subscribe(c), i.signal && (i.signal.aborted ? c() : i.signal.addEventListener("abort", c)));
    const p = o0(i.url);
    if (p && Jt.protocols.indexOf(p) === -1) {
      r(new De("Unsupported protocol " + p + ":", De.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(o || null);
  });
};
const h0 = (e, t) => {
  let n = new AbortController(), r;
  const i = function(c) {
    if (!r) {
      r = !0, a();
      const l = c instanceof Error ? c : this.reason;
      n.abort(l instanceof De ? l : new fi(l instanceof Error ? l.message : l));
    }
  };
  let o = t && setTimeout(() => {
    i(new De(`timeout ${t} of ms exceeded`, De.ETIMEDOUT));
  }, t);
  const a = () => {
    e && (o && clearTimeout(o), o = null, e.forEach((c) => {
      c && (c.removeEventListener ? c.removeEventListener("abort", i) : c.unsubscribe(i));
    }), e = null);
  };
  e.forEach((c) => c && c.addEventListener && c.addEventListener("abort", i));
  const { signal: s } = n;
  return s.unsubscribe = a, [s, () => {
    o && clearTimeout(o), o = null;
  }];
};
var m0 = h0;
const y0 = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, i;
  for (; r < n; )
    i = r + t, yield e.slice(r, i), r = i;
}, g0 = async function* (e, t, n) {
  for await (const r of e)
    yield* y0(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
}, Qu = (e, t, n, r, i) => {
  const o = g0(e, t, i);
  let a = 0;
  return new ReadableStream({
    type: "bytes",
    async pull(s) {
      const { done: c, value: l } = await o.next();
      if (c) {
        s.close(), r();
        return;
      }
      let u = l.byteLength;
      n && n(a += u), s.enqueue(new Uint8Array(l));
    },
    cancel(s) {
      return r(s), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, ef = (e, t) => {
  const n = e != null;
  return (r) => setTimeout(() => t({
    lengthComputable: n,
    total: e,
    loaded: r
  }));
}, es = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", th = es && typeof ReadableStream == "function", Uc = es && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), v0 = th && (() => {
  let e = !1;
  const t = new Request(Jt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
})(), tf = 64 * 1024, Bc = th && !!(() => {
  try {
    return z.isReadableStream(new Response("").body);
  } catch {
  }
})(), ba = {
  stream: Bc && ((e) => e.body)
};
es && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !ba[t] && (ba[t] = z.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new De(`Response type '${t}' is not supported`, De.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const b0 = async (e) => {
  if (e == null)
    return 0;
  if (z.isBlob(e))
    return e.size;
  if (z.isSpecCompliantForm(e))
    return (await new Request(e).arrayBuffer()).byteLength;
  if (z.isArrayBufferView(e))
    return e.byteLength;
  if (z.isURLSearchParams(e) && (e = e + ""), z.isString(e))
    return (await Uc(e)).byteLength;
}, x0 = async (e, t) => {
  const n = z.toFiniteNumber(e.getContentLength());
  return n ?? b0(t);
};
var w0 = es && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: i,
    cancelToken: o,
    timeout: a,
    onDownloadProgress: s,
    onUploadProgress: c,
    responseType: l,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: p
  } = eh(e);
  l = l ? (l + "").toLowerCase() : "text";
  let [h, m] = i || o || a ? m0([i, o], a) : [], y, v;
  const b = () => {
    !y && setTimeout(() => {
      h && h.unsubscribe();
    }), y = !0;
  };
  let x;
  try {
    if (c && v0 && n !== "get" && n !== "head" && (x = await x0(u, r)) !== 0) {
      let N = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), P;
      z.isFormData(r) && (P = N.headers.get("content-type")) && u.setContentType(P), N.body && (r = Qu(N.body, tf, ef(
        x,
        va(c)
      ), null, Uc));
    }
    z.isString(d) || (d = d ? "cors" : "omit"), v = new Request(t, {
      ...p,
      signal: h,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      withCredentials: d
    });
    let S = await fetch(v);
    const A = Bc && (l === "stream" || l === "response");
    if (Bc && (s || A)) {
      const N = {};
      ["status", "statusText", "headers"].forEach((U) => {
        N[U] = S[U];
      });
      const P = z.toFiniteNumber(S.headers.get("content-length"));
      S = new Response(
        Qu(S.body, tf, s && ef(
          P,
          va(s, !0)
        ), A && b, Uc),
        N
      );
    }
    l = l || "text";
    let E = await ba[z.findKey(ba, l) || "text"](S, e);
    return !A && b(), m && m(), await new Promise((N, P) => {
      Jp(N, P, {
        data: E,
        headers: Qt.from(S.headers),
        status: S.status,
        statusText: S.statusText,
        config: e,
        request: v
      });
    });
  } catch (S) {
    throw b(), S && S.name === "TypeError" && /fetch/i.test(S.message) ? Object.assign(
      new De("Network Error", De.ERR_NETWORK, e, v),
      {
        cause: S.cause || S
      }
    ) : De.from(S, S && S.code, e, v);
  }
});
const Wc = {
  http: jx,
  xhr: p0,
  fetch: w0
};
z.forEach(Wc, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const nf = (e) => `- ${e}`, _0 = (e) => z.isFunction(e) || e === null || e === !1;
var nh = {
  getAdapter: (e) => {
    e = z.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const i = {};
    for (let o = 0; o < t; o++) {
      n = e[o];
      let a;
      if (r = n, !_0(n) && (r = Wc[(a = String(n)).toLowerCase()], r === void 0))
        throw new De(`Unknown adapter '${a}'`);
      if (r)
        break;
      i[a || "#" + o] = r;
    }
    if (!r) {
      const o = Object.entries(i).map(
        ([s, c]) => `adapter ${s} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? o.length > 1 ? `since :
` + o.map(nf).join(`
`) : " " + nf(o[0]) : "as no adapter specified";
      throw new De(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: Wc
};
function Ms(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new fi(null, e);
}
function rf(e) {
  return Ms(e), e.headers = Qt.from(e.headers), e.data = Ns.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), nh.getAdapter(e.adapter || jl.adapter)(e).then(function(r) {
    return Ms(e), r.data = Ns.call(
      e,
      e.transformResponse,
      r
    ), r.headers = Qt.from(r.headers), r;
  }, function(r) {
    return Xp(r) || (Ms(e), r && r.response && (r.response.data = Ns.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = Qt.from(r.response.headers))), Promise.reject(r);
  });
}
const rh = "1.7.2", Fl = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Fl[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const of = {};
Fl.transitional = function(t, n, r) {
  function i(o, a) {
    return "[Axios v" + rh + "] Transitional option '" + o + "'" + a + (r ? ". " + r : "");
  }
  return (o, a, s) => {
    if (t === !1)
      throw new De(
        i(a, " has been removed" + (n ? " in " + n : "")),
        De.ERR_DEPRECATED
      );
    return n && !of[a] && (of[a] = !0, console.warn(
      i(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(o, a, s) : !0;
  };
};
function E0(e, t, n) {
  if (typeof e != "object")
    throw new De("options must be an object", De.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let i = r.length;
  for (; i-- > 0; ) {
    const o = r[i], a = t[o];
    if (a) {
      const s = e[o], c = s === void 0 || a(s, o, e);
      if (c !== !0)
        throw new De("option " + o + " must be " + c, De.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new De("Unknown option " + o, De.ERR_BAD_OPTION);
  }
}
var Hc = {
  assertOptions: E0,
  validators: Fl
};
const Dn = Hc.validators;
class xa {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Ku(),
      response: new Ku()
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
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = _r(this.defaults, n);
    const { transitional: r, paramsSerializer: i, headers: o } = n;
    r !== void 0 && Hc.assertOptions(r, {
      silentJSONParsing: Dn.transitional(Dn.boolean),
      forcedJSONParsing: Dn.transitional(Dn.boolean),
      clarifyTimeoutError: Dn.transitional(Dn.boolean)
    }, !1), i != null && (z.isFunction(i) ? n.paramsSerializer = {
      serialize: i
    } : Hc.assertOptions(i, {
      encode: Dn.function,
      serialize: Dn.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = o && z.merge(
      o.common,
      o[n.method]
    );
    o && z.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete o[m];
      }
    ), n.headers = Qt.concat(a, o);
    const s = [];
    let c = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(n) === !1 || (c = c && y.synchronous, s.unshift(y.fulfilled, y.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(y) {
      l.push(y.fulfilled, y.rejected);
    });
    let u, d = 0, p;
    if (!c) {
      const m = [rf.bind(this), void 0];
      for (m.unshift.apply(m, s), m.push.apply(m, l), p = m.length, u = Promise.resolve(n); d < p; )
        u = u.then(m[d++], m[d++]);
      return u;
    }
    p = s.length;
    let h = n;
    for (d = 0; d < p; ) {
      const m = s[d++], y = s[d++];
      try {
        h = m(h);
      } catch (v) {
        y.call(this, v);
        break;
      }
    }
    try {
      u = rf.call(this, h);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, p = l.length; d < p; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = _r(this.defaults, t);
    const n = Qp(t.baseURL, t.url);
    return Gp(n, t.params, t.paramsSerializer);
  }
}
z.forEach(["delete", "get", "head", "options"], function(t) {
  xa.prototype[t] = function(n, r) {
    return this.request(_r(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
z.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(o, a, s) {
      return this.request(_r(s || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  xa.prototype[t] = n(), xa.prototype[t + "Form"] = n(!0);
});
var ta = xa;
class Ll {
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
      r.reason || (r.reason = new fi(o, a, s), n(r.reason));
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
      token: new Ll(function(i) {
        t = i;
      }),
      cancel: t
    };
  }
}
var S0 = Ll;
function C0(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function A0(e) {
  return z.isObject(e) && e.isAxiosError === !0;
}
const qc = {
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
Object.entries(qc).forEach(([e, t]) => {
  qc[t] = e;
});
var O0 = qc;
function ih(e) {
  const t = new ta(e), n = jp(ta.prototype.request, t);
  return z.extend(n, ta.prototype, t, { allOwnKeys: !0 }), z.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(i) {
    return ih(_r(e, i));
  }, n;
}
const yt = ih(jl);
yt.Axios = ta;
yt.CanceledError = fi;
yt.CancelToken = S0;
yt.isCancel = Xp;
yt.VERSION = rh;
yt.toFormData = Ja;
yt.AxiosError = De;
yt.Cancel = yt.CanceledError;
yt.all = function(t) {
  return Promise.all(t);
};
yt.spread = C0;
yt.isAxiosError = A0;
yt.mergeConfig = _r;
yt.AxiosHeaders = Qt;
yt.formToJSON = (e) => Kp(z.isHTMLForm(e) ? new FormData(e) : e);
yt.getAdapter = nh.getAdapter;
yt.HttpStatusCode = O0;
yt.default = yt;
var R0 = yt, oh = {}, ts = {}, di = {};
Object.defineProperty(di, "__esModule", {
  value: !0
});
di.pathTempalteToParameterNames = void 0;
const T0 = (e) => {
  const t = e.match(/\{[A-Za-z0-9_-]+\}/g);
  return t === null ? [] : t.map((n) => n.substring(1, n.length - 1));
};
di.pathTempalteToParameterNames = T0;
Object.defineProperty(ts, "__esModule", {
  value: !0
});
ts.names = void 0;
var k0 = di;
const P0 = (e) => (0, k0.pathTempalteToParameterNames)(e).filter((n, r, i) => i.indexOf(n) === r);
ts.names = P0;
var ns = {}, wo = {};
Object.defineProperty(wo, "__esModule", {
  value: !0
});
wo.toParameterPattern = void 0;
var N0 = di;
const M0 = (e, t) => {
  const n = typeof t > "u" ? [] : Object.keys(t).map((o) => {
    const a = t[o];
    return {
      name: o,
      pattern: typeof a > "u" ? null : a
    };
  });
  return (0, N0.pathTempalteToParameterNames)(e).map((o) => {
    const a = n.find(({
      name: c
    }) => c === o), s = typeof a > "u" ? null : a.pattern;
    return {
      name: o,
      pattern: s
    };
  });
};
wo.toParameterPattern = M0;
Object.defineProperty(ns, "__esModule", {
  value: !0
});
ns.params = void 0;
var I0 = wo;
const D0 = (e, t) => {
  const r = z0(e), i = (0, I0.toParameterPattern)(e, t);
  return (o) => {
    const a = L0(o, r);
    if (a === null) return null;
    const s = F0(a, i);
    return s === null ? null : j0(s);
  };
};
ns.params = D0;
const j0 = (e) => e.map(({
  name: t,
  value: n
}) => ({
  [t]: n
})).reduce((t, n) => Object.assign(t, n), {}), F0 = (e, t) => {
  const n = e.map(({
    value: o
  }) => decodeURIComponent(o)).map((o, a) => {
    const {
      name: s,
      pattern: c
    } = t[a];
    return {
      name: s,
      pattern: c,
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
    value: c
  }) => s === o && c !== a)) ? null : n;
}, L0 = (e, t) => {
  const n = e.match(t);
  return n === null ? null : n.slice(1).map((i) => ({
    value: i
  }));
}, z0 = (e) => new RegExp("^" + e.replace(/\{[A-Za-z0-9_-]+\}/g, "([^\\/]*)") + "$");
var rs = {};
Object.defineProperty(rs, "__esModule", {
  value: !0
});
rs.path = void 0;
var $0 = di, V0 = wo;
const U0 = (e, t) => {
  const n = (0, $0.pathTempalteToParameterNames)(e);
  return (r) => n.some((o) => typeof r[o] != "string") || (0, V0.toParameterPattern)(e, t).some(({
    name: o,
    pattern: a
  }) => a !== null && r[o].match(a) === null) ? null : n.reduce((o, a) => o.split("{" + a + "}").join(encodeURIComponent(r[a])), e);
};
rs.path = U0;
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
  var t = ts, n = ns, r = rs;
  const i = (a, s) => {
    const c = (0, t.names)(a), l = (0, r.path)(a, s), u = (0, n.params)(a, s);
    return {
      names: c,
      path: l,
      params: u
    };
  };
  e.bath = i;
  var o = i;
  e.default = o;
})(oh);
var ah = {}, sh = {};
Object.defineProperty(sh, "__esModule", {
  value: !0
});
var ch = {}, lh = {};
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
})(lh);
var zl = {};
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
    var a = i.split("/").slice(1), s = r, c = !0, l = !1, u = void 0;
    try {
      for (var d = a[Symbol.iterator](), p; !(c = (p = d.next()).done); c = !0) {
        var h = p.value;
        (!s || typeof s != "object") && (s = null);
        var m;
        s = (m = s[h]) !== null && m !== void 0 ? m : null;
      }
    } catch (y) {
      l = !0, u = y;
    } finally {
      try {
        !c && d.return != null && d.return();
      } finally {
        if (l)
          throw u;
      }
    }
    return o.set(i, s), s;
  };
})(zl);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "dereferenceSync", {
    enumerable: !0,
    get: function() {
      return i;
    }
  });
  var t = lh, n = zl, r = /* @__PURE__ */ new Map(), i = function(o) {
    if (r.has(o))
      return r.get(o);
    var a = /* @__PURE__ */ new Set(), s = (0, t.klona)(o), c = function(u, d) {
      if (typeof u == "object" && u !== null) {
        if (a.has(u))
          return u;
        if (a.add(u), Array.isArray(u))
          for (var p = 0; p < u.length; p++)
            u[p] = c(u[p]);
        else {
          if ("$ref" in u && typeof u.$ref == "string")
            return (0, n.resolveRefSync)(s, u.$ref);
          for (var h in u)
            u[h] = c(u[h]);
        }
      }
      return u;
    }, l = c(s);
    return r.set(o, l), l;
  };
})(ch);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), t(sh, e), t(ch, e), t(zl, e);
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
})(ah);
var $l = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ParamType = e.HttpMethod = void 0, function(t) {
    t.Get = "get", t.Put = "put", t.Post = "post", t.Patch = "patch", t.Delete = "delete", t.Options = "options", t.Head = "head", t.Trace = "trace";
  }(e.HttpMethod || (e.HttpMethod = {})), function(t) {
    t.Query = "query", t.Header = "header", t.Path = "path", t.Cookie = "cookie";
  }(e.ParamType || (e.ParamType = {}));
})($l);
var wt = {}, Fo = {}, jn = {}, af;
function _o() {
  if (af) return jn;
  af = 1;
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
    var c, l, u, d;
    if (s)
      for (d = Object.keys(s), c = 0, l = d.length; c < l; c += 1)
        u = d[c], a[u] = s[u];
    return a;
  }
  function i(a, s) {
    var c = "", l;
    for (l = 0; l < s; l += 1)
      c += a;
    return c;
  }
  function o(a) {
    return a === 0 && Number.NEGATIVE_INFINITY === 1 / a;
  }
  return jn.isNothing = e, jn.isObject = t, jn.toArray = n, jn.repeat = i, jn.isNegativeZero = o, jn.extend = r, jn;
}
var Is, sf;
function Eo() {
  if (sf) return Is;
  sf = 1;
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
  }, Is = t, Is;
}
var Ds, cf;
function B0() {
  if (cf) return Ds;
  cf = 1;
  var e = _o();
  function t(i, o, a, s, c) {
    var l = "", u = "", d = Math.floor(c / 2) - 1;
    return s - o > d && (l = " ... ", o = s - d + l.length), a - s > d && (u = " ...", a = s + d - u.length), {
      str: l + i.slice(o, a).replace(/\t/g, "→") + u,
      pos: s - o + l.length
      // relative position
    };
  }
  function n(i, o) {
    return e.repeat(" ", o - i.length) + i;
  }
  function r(i, o) {
    if (o = Object.create(o || null), !i.buffer) return null;
    o.maxLength || (o.maxLength = 79), typeof o.indent != "number" && (o.indent = 1), typeof o.linesBefore != "number" && (o.linesBefore = 3), typeof o.linesAfter != "number" && (o.linesAfter = 2);
    for (var a = /\r?\n|\r|\0/g, s = [0], c = [], l, u = -1; l = a.exec(i.buffer); )
      c.push(l.index), s.push(l.index + l[0].length), i.position <= l.index && u < 0 && (u = s.length - 2);
    u < 0 && (u = s.length - 1);
    var d = "", p, h, m = Math.min(i.line + o.linesAfter, c.length).toString().length, y = o.maxLength - (o.indent + m + 3);
    for (p = 1; p <= o.linesBefore && !(u - p < 0); p++)
      h = t(
        i.buffer,
        s[u - p],
        c[u - p],
        i.position - (s[u] - s[u - p]),
        y
      ), d = e.repeat(" ", o.indent) + n((i.line - p + 1).toString(), m) + " | " + h.str + `
` + d;
    for (h = t(i.buffer, s[u], c[u], i.position, y), d += e.repeat(" ", o.indent) + n((i.line + 1).toString(), m) + " | " + h.str + `
`, d += e.repeat("-", o.indent + m + 3 + h.pos) + `^
`, p = 1; p <= o.linesAfter && !(u + p >= c.length); p++)
      h = t(
        i.buffer,
        s[u + p],
        c[u + p],
        i.position - (s[u] - s[u + p]),
        y
      ), d += e.repeat(" ", o.indent) + n((i.line + p + 1).toString(), m) + " | " + h.str + `
`;
    return d.replace(/\n$/, "");
  }
  return Ds = r, Ds;
}
var js, lf;
function At() {
  if (lf) return js;
  lf = 1;
  var e = Eo(), t = [
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
      o[s].forEach(function(c) {
        a[String(c)] = s;
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
  return js = i, js;
}
var Fs, uf;
function uh() {
  if (uf) return Fs;
  uf = 1;
  var e = Eo(), t = At();
  function n(o, a) {
    var s = [];
    return o[a].forEach(function(c) {
      var l = s.length;
      s.forEach(function(u, d) {
        u.tag === c.tag && u.kind === c.kind && u.multi === c.multi && (l = d);
      }), s[l] = c;
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
    function c(l) {
      l.multi ? (o.multi[l.kind].push(l), o.multi.fallback.push(l)) : o[l.kind][l.tag] = o.fallback[l.tag] = l;
    }
    for (a = 0, s = arguments.length; a < s; a += 1)
      arguments[a].forEach(c);
    return o;
  }
  function i(o) {
    return this.extend(o);
  }
  return i.prototype.extend = function(a) {
    var s = [], c = [];
    if (a instanceof t)
      c.push(a);
    else if (Array.isArray(a))
      c = c.concat(a);
    else if (a && (Array.isArray(a.implicit) || Array.isArray(a.explicit)))
      a.implicit && (s = s.concat(a.implicit)), a.explicit && (c = c.concat(a.explicit));
    else
      throw new e("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
    s.forEach(function(u) {
      if (!(u instanceof t))
        throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");
      if (u.loadKind && u.loadKind !== "scalar")
        throw new e("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
      if (u.multi)
        throw new e("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
    }), c.forEach(function(u) {
      if (!(u instanceof t))
        throw new e("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    });
    var l = Object.create(i.prototype);
    return l.implicit = (this.implicit || []).concat(s), l.explicit = (this.explicit || []).concat(c), l.compiledImplicit = n(l, "implicit"), l.compiledExplicit = n(l, "explicit"), l.compiledTypeMap = r(l.compiledImplicit, l.compiledExplicit), l;
  }, Fs = i, Fs;
}
var Ls, ff;
function fh() {
  if (ff) return Ls;
  ff = 1;
  var e = At();
  return Ls = new e("tag:yaml.org,2002:str", {
    kind: "scalar",
    construct: function(t) {
      return t !== null ? t : "";
    }
  }), Ls;
}
var zs, df;
function dh() {
  if (df) return zs;
  df = 1;
  var e = At();
  return zs = new e("tag:yaml.org,2002:seq", {
    kind: "sequence",
    construct: function(t) {
      return t !== null ? t : [];
    }
  }), zs;
}
var $s, pf;
function ph() {
  if (pf) return $s;
  pf = 1;
  var e = At();
  return $s = new e("tag:yaml.org,2002:map", {
    kind: "mapping",
    construct: function(t) {
      return t !== null ? t : {};
    }
  }), $s;
}
var Vs, hf;
function hh() {
  if (hf) return Vs;
  hf = 1;
  var e = uh();
  return Vs = new e({
    explicit: [
      fh(),
      dh(),
      ph()
    ]
  }), Vs;
}
var Us, mf;
function mh() {
  if (mf) return Us;
  mf = 1;
  var e = At();
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
  return Us = new e("tag:yaml.org,2002:null", {
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
  }), Us;
}
var Bs, yf;
function yh() {
  if (yf) return Bs;
  yf = 1;
  var e = At();
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
  return Bs = new e("tag:yaml.org,2002:bool", {
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
  }), Bs;
}
var Ws, gf;
function gh() {
  if (gf) return Ws;
  gf = 1;
  var e = _o(), t = At();
  function n(c) {
    return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
  }
  function r(c) {
    return 48 <= c && c <= 55;
  }
  function i(c) {
    return 48 <= c && c <= 57;
  }
  function o(c) {
    if (c === null) return !1;
    var l = c.length, u = 0, d = !1, p;
    if (!l) return !1;
    if (p = c[u], (p === "-" || p === "+") && (p = c[++u]), p === "0") {
      if (u + 1 === l) return !0;
      if (p = c[++u], p === "b") {
        for (u++; u < l; u++)
          if (p = c[u], p !== "_") {
            if (p !== "0" && p !== "1") return !1;
            d = !0;
          }
        return d && p !== "_";
      }
      if (p === "x") {
        for (u++; u < l; u++)
          if (p = c[u], p !== "_") {
            if (!n(c.charCodeAt(u))) return !1;
            d = !0;
          }
        return d && p !== "_";
      }
      if (p === "o") {
        for (u++; u < l; u++)
          if (p = c[u], p !== "_") {
            if (!r(c.charCodeAt(u))) return !1;
            d = !0;
          }
        return d && p !== "_";
      }
    }
    if (p === "_") return !1;
    for (; u < l; u++)
      if (p = c[u], p !== "_") {
        if (!i(c.charCodeAt(u)))
          return !1;
        d = !0;
      }
    return !(!d || p === "_");
  }
  function a(c) {
    var l = c, u = 1, d;
    if (l.indexOf("_") !== -1 && (l = l.replace(/_/g, "")), d = l[0], (d === "-" || d === "+") && (d === "-" && (u = -1), l = l.slice(1), d = l[0]), l === "0") return 0;
    if (d === "0") {
      if (l[1] === "b") return u * parseInt(l.slice(2), 2);
      if (l[1] === "x") return u * parseInt(l.slice(2), 16);
      if (l[1] === "o") return u * parseInt(l.slice(2), 8);
    }
    return u * parseInt(l, 10);
  }
  function s(c) {
    return Object.prototype.toString.call(c) === "[object Number]" && c % 1 === 0 && !e.isNegativeZero(c);
  }
  return Ws = new t("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: o,
    construct: a,
    predicate: s,
    represent: {
      binary: function(c) {
        return c >= 0 ? "0b" + c.toString(2) : "-0b" + c.toString(2).slice(1);
      },
      octal: function(c) {
        return c >= 0 ? "0o" + c.toString(8) : "-0o" + c.toString(8).slice(1);
      },
      decimal: function(c) {
        return c.toString(10);
      },
      /* eslint-disable max-len */
      hexadecimal: function(c) {
        return c >= 0 ? "0x" + c.toString(16).toUpperCase() : "-0x" + c.toString(16).toUpperCase().slice(1);
      }
    },
    defaultStyle: "decimal",
    styleAliases: {
      binary: [2, "bin"],
      octal: [8, "oct"],
      decimal: [10, "dec"],
      hexadecimal: [16, "hex"]
    }
  }), Ws;
}
var Hs, vf;
function vh() {
  if (vf) return Hs;
  vf = 1;
  var e = _o(), t = At(), n = new RegExp(
    // 2.5e4, 2.5 and integers
    "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
  );
  function r(c) {
    return !(c === null || !n.test(c) || // Quick hack to not allow integers end with `_`
    // Probably should update regexp & check speed
    c[c.length - 1] === "_");
  }
  function i(c) {
    var l, u;
    return l = c.replace(/_/g, "").toLowerCase(), u = l[0] === "-" ? -1 : 1, "+-".indexOf(l[0]) >= 0 && (l = l.slice(1)), l === ".inf" ? u === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : l === ".nan" ? NaN : u * parseFloat(l, 10);
  }
  var o = /^[-+]?[0-9]+e/;
  function a(c, l) {
    var u;
    if (isNaN(c))
      switch (l) {
        case "lowercase":
          return ".nan";
        case "uppercase":
          return ".NAN";
        case "camelcase":
          return ".NaN";
      }
    else if (Number.POSITIVE_INFINITY === c)
      switch (l) {
        case "lowercase":
          return ".inf";
        case "uppercase":
          return ".INF";
        case "camelcase":
          return ".Inf";
      }
    else if (Number.NEGATIVE_INFINITY === c)
      switch (l) {
        case "lowercase":
          return "-.inf";
        case "uppercase":
          return "-.INF";
        case "camelcase":
          return "-.Inf";
      }
    else if (e.isNegativeZero(c))
      return "-0.0";
    return u = c.toString(10), o.test(u) ? u.replace("e", ".e") : u;
  }
  function s(c) {
    return Object.prototype.toString.call(c) === "[object Number]" && (c % 1 !== 0 || e.isNegativeZero(c));
  }
  return Hs = new t("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: r,
    construct: i,
    predicate: s,
    represent: a,
    defaultStyle: "lowercase"
  }), Hs;
}
var qs, bf;
function bh() {
  return bf || (bf = 1, qs = hh().extend({
    implicit: [
      mh(),
      yh(),
      gh(),
      vh()
    ]
  })), qs;
}
var Ys, xf;
function xh() {
  return xf || (xf = 1, Ys = bh()), Ys;
}
var Gs, wf;
function wh() {
  if (wf) return Gs;
  wf = 1;
  var e = At(), t = new RegExp(
    "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
  ), n = new RegExp(
    "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
  );
  function r(a) {
    return a === null ? !1 : t.exec(a) !== null || n.exec(a) !== null;
  }
  function i(a) {
    var s, c, l, u, d, p, h, m = 0, y = null, v, b, x;
    if (s = t.exec(a), s === null && (s = n.exec(a)), s === null) throw new Error("Date resolve error");
    if (c = +s[1], l = +s[2] - 1, u = +s[3], !s[4])
      return new Date(Date.UTC(c, l, u));
    if (d = +s[4], p = +s[5], h = +s[6], s[7]) {
      for (m = s[7].slice(0, 3); m.length < 3; )
        m += "0";
      m = +m;
    }
    return s[9] && (v = +s[10], b = +(s[11] || 0), y = (v * 60 + b) * 6e4, s[9] === "-" && (y = -y)), x = new Date(Date.UTC(c, l, u, d, p, h, m)), y && x.setTime(x.getTime() - y), x;
  }
  function o(a) {
    return a.toISOString();
  }
  return Gs = new e("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: r,
    construct: i,
    instanceOf: Date,
    represent: o
  }), Gs;
}
var Zs, _f;
function _h() {
  if (_f) return Zs;
  _f = 1;
  var e = At();
  function t(n) {
    return n === "<<" || n === null;
  }
  return Zs = new e("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: t
  }), Zs;
}
var Ks, Ef;
function Eh() {
  if (Ef) return Ks;
  Ef = 1;
  var e = At(), t = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
\r`;
  function n(a) {
    if (a === null) return !1;
    var s, c, l = 0, u = a.length, d = t;
    for (c = 0; c < u; c++)
      if (s = d.indexOf(a.charAt(c)), !(s > 64)) {
        if (s < 0) return !1;
        l += 6;
      }
    return l % 8 === 0;
  }
  function r(a) {
    var s, c, l = a.replace(/[\r\n=]/g, ""), u = l.length, d = t, p = 0, h = [];
    for (s = 0; s < u; s++)
      s % 4 === 0 && s && (h.push(p >> 16 & 255), h.push(p >> 8 & 255), h.push(p & 255)), p = p << 6 | d.indexOf(l.charAt(s));
    return c = u % 4 * 6, c === 0 ? (h.push(p >> 16 & 255), h.push(p >> 8 & 255), h.push(p & 255)) : c === 18 ? (h.push(p >> 10 & 255), h.push(p >> 2 & 255)) : c === 12 && h.push(p >> 4 & 255), new Uint8Array(h);
  }
  function i(a) {
    var s = "", c = 0, l, u, d = a.length, p = t;
    for (l = 0; l < d; l++)
      l % 3 === 0 && l && (s += p[c >> 18 & 63], s += p[c >> 12 & 63], s += p[c >> 6 & 63], s += p[c & 63]), c = (c << 8) + a[l];
    return u = d % 3, u === 0 ? (s += p[c >> 18 & 63], s += p[c >> 12 & 63], s += p[c >> 6 & 63], s += p[c & 63]) : u === 2 ? (s += p[c >> 10 & 63], s += p[c >> 4 & 63], s += p[c << 2 & 63], s += p[64]) : u === 1 && (s += p[c >> 2 & 63], s += p[c << 4 & 63], s += p[64], s += p[64]), s;
  }
  function o(a) {
    return Object.prototype.toString.call(a) === "[object Uint8Array]";
  }
  return Ks = new e("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: n,
    construct: r,
    predicate: o,
    represent: i
  }), Ks;
}
var Xs, Sf;
function Sh() {
  if (Sf) return Xs;
  Sf = 1;
  var e = At(), t = Object.prototype.hasOwnProperty, n = Object.prototype.toString;
  function r(o) {
    if (o === null) return !0;
    var a = [], s, c, l, u, d, p = o;
    for (s = 0, c = p.length; s < c; s += 1) {
      if (l = p[s], d = !1, n.call(l) !== "[object Object]") return !1;
      for (u in l)
        if (t.call(l, u))
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
  return Xs = new e("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: r,
    construct: i
  }), Xs;
}
var Js, Cf;
function Ch() {
  if (Cf) return Js;
  Cf = 1;
  var e = At(), t = Object.prototype.toString;
  function n(i) {
    if (i === null) return !0;
    var o, a, s, c, l, u = i;
    for (l = new Array(u.length), o = 0, a = u.length; o < a; o += 1) {
      if (s = u[o], t.call(s) !== "[object Object]" || (c = Object.keys(s), c.length !== 1)) return !1;
      l[o] = [c[0], s[c[0]]];
    }
    return !0;
  }
  function r(i) {
    if (i === null) return [];
    var o, a, s, c, l, u = i;
    for (l = new Array(u.length), o = 0, a = u.length; o < a; o += 1)
      s = u[o], c = Object.keys(s), l[o] = [c[0], s[c[0]]];
    return l;
  }
  return Js = new e("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: n,
    construct: r
  }), Js;
}
var Qs, Af;
function Ah() {
  if (Af) return Qs;
  Af = 1;
  var e = At(), t = Object.prototype.hasOwnProperty;
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
  return Qs = new e("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: n,
    construct: r
  }), Qs;
}
var ec, Of;
function Vl() {
  return Of || (Of = 1, ec = xh().extend({
    implicit: [
      wh(),
      _h()
    ],
    explicit: [
      Eh(),
      Sh(),
      Ch(),
      Ah()
    ]
  })), ec;
}
var Rf;
function W0() {
  if (Rf) return Fo;
  Rf = 1;
  var e = _o(), t = Eo(), n = B0(), r = Vl(), i = Object.prototype.hasOwnProperty, o = 1, a = 2, s = 3, c = 4, l = 1, u = 2, d = 3, p = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, h = /[\x85\u2028\u2029]/, m = /[,\[\]\{\}]/, y = /^(?:!|!!|![a-z\-]+!)$/i, v = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
  function b(f) {
    return Object.prototype.toString.call(f);
  }
  function x(f) {
    return f === 10 || f === 13;
  }
  function S(f) {
    return f === 9 || f === 32;
  }
  function A(f) {
    return f === 9 || f === 32 || f === 10 || f === 13;
  }
  function E(f) {
    return f === 44 || f === 91 || f === 93 || f === 123 || f === 125;
  }
  function N(f) {
    var O;
    return 48 <= f && f <= 57 ? f - 48 : (O = f | 32, 97 <= O && O <= 102 ? O - 97 + 10 : -1);
  }
  function P(f) {
    return f === 120 ? 2 : f === 117 ? 4 : f === 85 ? 8 : 0;
  }
  function U(f) {
    return 48 <= f && f <= 57 ? f - 48 : -1;
  }
  function ue(f) {
    return f === 48 ? "\0" : f === 97 ? "\x07" : f === 98 ? "\b" : f === 116 || f === 9 ? "	" : f === 110 ? `
` : f === 118 ? "\v" : f === 102 ? "\f" : f === 114 ? "\r" : f === 101 ? "\x1B" : f === 32 ? " " : f === 34 ? '"' : f === 47 ? "/" : f === 92 ? "\\" : f === 78 ? "" : f === 95 ? " " : f === 76 ? "\u2028" : f === 80 ? "\u2029" : "";
  }
  function ye(f) {
    return f <= 65535 ? String.fromCharCode(f) : String.fromCharCode(
      (f - 65536 >> 10) + 55296,
      (f - 65536 & 1023) + 56320
    );
  }
  for (var pe = new Array(256), V = new Array(256), Q = 0; Q < 256; Q++)
    pe[Q] = ue(Q) ? 1 : 0, V[Q] = ue(Q);
  function B(f, O) {
    this.input = f, this.filename = O.filename || null, this.schema = O.schema || r, this.onWarning = O.onWarning || null, this.legacy = O.legacy || !1, this.json = O.json || !1, this.listener = O.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = f.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
  }
  function se(f, O) {
    var T = {
      name: f.filename,
      buffer: f.input.slice(0, -1),
      // omit trailing \0
      position: f.position,
      line: f.line,
      column: f.position - f.lineStart
    };
    return T.snippet = n(T), new t(O, T);
  }
  function j(f, O) {
    throw se(f, O);
  }
  function fe(f, O) {
    f.onWarning && f.onWarning.call(null, se(f, O));
  }
  var _e = {
    YAML: function(O, T, F) {
      var M, Z, W;
      O.version !== null && j(O, "duplication of %YAML directive"), F.length !== 1 && j(O, "YAML directive accepts exactly one argument"), M = /^([0-9]+)\.([0-9]+)$/.exec(F[0]), M === null && j(O, "ill-formed argument of the YAML directive"), Z = parseInt(M[1], 10), W = parseInt(M[2], 10), Z !== 1 && j(O, "unacceptable YAML version of the document"), O.version = F[0], O.checkLineBreaks = W < 2, W !== 1 && W !== 2 && fe(O, "unsupported YAML version of the document");
    },
    TAG: function(O, T, F) {
      var M, Z;
      F.length !== 2 && j(O, "TAG directive accepts exactly two arguments"), M = F[0], Z = F[1], y.test(M) || j(O, "ill-formed tag handle (first argument) of the TAG directive"), i.call(O.tagMap, M) && j(O, 'there is a previously declared suffix for "' + M + '" tag handle'), v.test(Z) || j(O, "ill-formed tag prefix (second argument) of the TAG directive");
      try {
        Z = decodeURIComponent(Z);
      } catch {
        j(O, "tag prefix is malformed: " + Z);
      }
      O.tagMap[M] = Z;
    }
  };
  function J(f, O, T, F) {
    var M, Z, W, de;
    if (O < T) {
      if (de = f.input.slice(O, T), F)
        for (M = 0, Z = de.length; M < Z; M += 1)
          W = de.charCodeAt(M), W === 9 || 32 <= W && W <= 1114111 || j(f, "expected valid JSON character");
      else p.test(de) && j(f, "the stream contains non-printable characters");
      f.result += de;
    }
  }
  function L(f, O, T, F) {
    var M, Z, W, de;
    for (e.isObject(T) || j(f, "cannot merge mappings; the provided source object is unacceptable"), M = Object.keys(T), W = 0, de = M.length; W < de; W += 1)
      Z = M[W], i.call(O, Z) || (O[Z] = T[Z], F[Z] = !0);
  }
  function q(f, O, T, F, M, Z, W, de, Re) {
    var Me, We;
    if (Array.isArray(M))
      for (M = Array.prototype.slice.call(M), Me = 0, We = M.length; Me < We; Me += 1)
        Array.isArray(M[Me]) && j(f, "nested arrays are not supported inside keys"), typeof M == "object" && b(M[Me]) === "[object Object]" && (M[Me] = "[object Object]");
    if (typeof M == "object" && b(M) === "[object Object]" && (M = "[object Object]"), M = String(M), O === null && (O = {}), F === "tag:yaml.org,2002:merge")
      if (Array.isArray(Z))
        for (Me = 0, We = Z.length; Me < We; Me += 1)
          L(f, O, Z[Me], T);
      else
        L(f, O, Z, T);
    else
      !f.json && !i.call(T, M) && i.call(O, M) && (f.line = W || f.line, f.lineStart = de || f.lineStart, f.position = Re || f.position, j(f, "duplicated mapping key")), M === "__proto__" ? Object.defineProperty(O, M, {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: Z
      }) : O[M] = Z, delete T[M];
    return O;
  }
  function ge(f) {
    var O;
    O = f.input.charCodeAt(f.position), O === 10 ? f.position++ : O === 13 ? (f.position++, f.input.charCodeAt(f.position) === 10 && f.position++) : j(f, "a line break is expected"), f.line += 1, f.lineStart = f.position, f.firstTabInLine = -1;
  }
  function I(f, O, T) {
    for (var F = 0, M = f.input.charCodeAt(f.position); M !== 0; ) {
      for (; S(M); )
        M === 9 && f.firstTabInLine === -1 && (f.firstTabInLine = f.position), M = f.input.charCodeAt(++f.position);
      if (O && M === 35)
        do
          M = f.input.charCodeAt(++f.position);
        while (M !== 10 && M !== 13 && M !== 0);
      if (x(M))
        for (ge(f), M = f.input.charCodeAt(f.position), F++, f.lineIndent = 0; M === 32; )
          f.lineIndent++, M = f.input.charCodeAt(++f.position);
      else
        break;
    }
    return T !== -1 && F !== 0 && f.lineIndent < T && fe(f, "deficient indentation"), F;
  }
  function X(f) {
    var O = f.position, T;
    return T = f.input.charCodeAt(O), !!((T === 45 || T === 46) && T === f.input.charCodeAt(O + 1) && T === f.input.charCodeAt(O + 2) && (O += 3, T = f.input.charCodeAt(O), T === 0 || A(T)));
  }
  function re(f, O) {
    O === 1 ? f.result += " " : O > 1 && (f.result += e.repeat(`
`, O - 1));
  }
  function Y(f, O, T) {
    var F, M, Z, W, de, Re, Me, We, Ee = f.kind, ft = f.result, g;
    if (g = f.input.charCodeAt(f.position), A(g) || E(g) || g === 35 || g === 38 || g === 42 || g === 33 || g === 124 || g === 62 || g === 39 || g === 34 || g === 37 || g === 64 || g === 96 || (g === 63 || g === 45) && (M = f.input.charCodeAt(f.position + 1), A(M) || T && E(M)))
      return !1;
    for (f.kind = "scalar", f.result = "", Z = W = f.position, de = !1; g !== 0; ) {
      if (g === 58) {
        if (M = f.input.charCodeAt(f.position + 1), A(M) || T && E(M))
          break;
      } else if (g === 35) {
        if (F = f.input.charCodeAt(f.position - 1), A(F))
          break;
      } else {
        if (f.position === f.lineStart && X(f) || T && E(g))
          break;
        if (x(g))
          if (Re = f.line, Me = f.lineStart, We = f.lineIndent, I(f, !1, -1), f.lineIndent >= O) {
            de = !0, g = f.input.charCodeAt(f.position);
            continue;
          } else {
            f.position = W, f.line = Re, f.lineStart = Me, f.lineIndent = We;
            break;
          }
      }
      de && (J(f, Z, W, !1), re(f, f.line - Re), Z = W = f.position, de = !1), S(g) || (W = f.position + 1), g = f.input.charCodeAt(++f.position);
    }
    return J(f, Z, W, !1), f.result ? !0 : (f.kind = Ee, f.result = ft, !1);
  }
  function G(f, O) {
    var T, F, M;
    if (T = f.input.charCodeAt(f.position), T !== 39)
      return !1;
    for (f.kind = "scalar", f.result = "", f.position++, F = M = f.position; (T = f.input.charCodeAt(f.position)) !== 0; )
      if (T === 39)
        if (J(f, F, f.position, !0), T = f.input.charCodeAt(++f.position), T === 39)
          F = f.position, f.position++, M = f.position;
        else
          return !0;
      else x(T) ? (J(f, F, M, !0), re(f, I(f, !1, O)), F = M = f.position) : f.position === f.lineStart && X(f) ? j(f, "unexpected end of the document within a single quoted scalar") : (f.position++, M = f.position);
    j(f, "unexpected end of the stream within a single quoted scalar");
  }
  function ie(f, O) {
    var T, F, M, Z, W, de;
    if (de = f.input.charCodeAt(f.position), de !== 34)
      return !1;
    for (f.kind = "scalar", f.result = "", f.position++, T = F = f.position; (de = f.input.charCodeAt(f.position)) !== 0; ) {
      if (de === 34)
        return J(f, T, f.position, !0), f.position++, !0;
      if (de === 92) {
        if (J(f, T, f.position, !0), de = f.input.charCodeAt(++f.position), x(de))
          I(f, !1, O);
        else if (de < 256 && pe[de])
          f.result += V[de], f.position++;
        else if ((W = P(de)) > 0) {
          for (M = W, Z = 0; M > 0; M--)
            de = f.input.charCodeAt(++f.position), (W = N(de)) >= 0 ? Z = (Z << 4) + W : j(f, "expected hexadecimal character");
          f.result += ye(Z), f.position++;
        } else
          j(f, "unknown escape sequence");
        T = F = f.position;
      } else x(de) ? (J(f, T, F, !0), re(f, I(f, !1, O)), T = F = f.position) : f.position === f.lineStart && X(f) ? j(f, "unexpected end of the document within a double quoted scalar") : (f.position++, F = f.position);
    }
    j(f, "unexpected end of the stream within a double quoted scalar");
  }
  function le(f, O) {
    var T = !0, F, M, Z, W = f.tag, de, Re = f.anchor, Me, We, Ee, ft, g, $ = /* @__PURE__ */ Object.create(null), K, H, te, ae;
    if (ae = f.input.charCodeAt(f.position), ae === 91)
      We = 93, g = !1, de = [];
    else if (ae === 123)
      We = 125, g = !0, de = {};
    else
      return !1;
    for (f.anchor !== null && (f.anchorMap[f.anchor] = de), ae = f.input.charCodeAt(++f.position); ae !== 0; ) {
      if (I(f, !0, O), ae = f.input.charCodeAt(f.position), ae === We)
        return f.position++, f.tag = W, f.anchor = Re, f.kind = g ? "mapping" : "sequence", f.result = de, !0;
      T ? ae === 44 && j(f, "expected the node content, but found ','") : j(f, "missed comma between flow collection entries"), H = K = te = null, Ee = ft = !1, ae === 63 && (Me = f.input.charCodeAt(f.position + 1), A(Me) && (Ee = ft = !0, f.position++, I(f, !0, O))), F = f.line, M = f.lineStart, Z = f.position, et(f, O, o, !1, !0), H = f.tag, K = f.result, I(f, !0, O), ae = f.input.charCodeAt(f.position), (ft || f.line === F) && ae === 58 && (Ee = !0, ae = f.input.charCodeAt(++f.position), I(f, !0, O), et(f, O, o, !1, !0), te = f.result), g ? q(f, de, $, H, K, te, F, M, Z) : Ee ? de.push(q(f, null, $, H, K, te, F, M, Z)) : de.push(K), I(f, !0, O), ae = f.input.charCodeAt(f.position), ae === 44 ? (T = !0, ae = f.input.charCodeAt(++f.position)) : T = !1;
    }
    j(f, "unexpected end of the stream within a flow collection");
  }
  function ve(f, O) {
    var T, F, M = l, Z = !1, W = !1, de = O, Re = 0, Me = !1, We, Ee;
    if (Ee = f.input.charCodeAt(f.position), Ee === 124)
      F = !1;
    else if (Ee === 62)
      F = !0;
    else
      return !1;
    for (f.kind = "scalar", f.result = ""; Ee !== 0; )
      if (Ee = f.input.charCodeAt(++f.position), Ee === 43 || Ee === 45)
        l === M ? M = Ee === 43 ? d : u : j(f, "repeat of a chomping mode identifier");
      else if ((We = U(Ee)) >= 0)
        We === 0 ? j(f, "bad explicit indentation width of a block scalar; it cannot be less than one") : W ? j(f, "repeat of an indentation width identifier") : (de = O + We - 1, W = !0);
      else
        break;
    if (S(Ee)) {
      do
        Ee = f.input.charCodeAt(++f.position);
      while (S(Ee));
      if (Ee === 35)
        do
          Ee = f.input.charCodeAt(++f.position);
        while (!x(Ee) && Ee !== 0);
    }
    for (; Ee !== 0; ) {
      for (ge(f), f.lineIndent = 0, Ee = f.input.charCodeAt(f.position); (!W || f.lineIndent < de) && Ee === 32; )
        f.lineIndent++, Ee = f.input.charCodeAt(++f.position);
      if (!W && f.lineIndent > de && (de = f.lineIndent), x(Ee)) {
        Re++;
        continue;
      }
      if (f.lineIndent < de) {
        M === d ? f.result += e.repeat(`
`, Z ? 1 + Re : Re) : M === l && Z && (f.result += `
`);
        break;
      }
      for (F ? S(Ee) ? (Me = !0, f.result += e.repeat(`
`, Z ? 1 + Re : Re)) : Me ? (Me = !1, f.result += e.repeat(`
`, Re + 1)) : Re === 0 ? Z && (f.result += " ") : f.result += e.repeat(`
`, Re) : f.result += e.repeat(`
`, Z ? 1 + Re : Re), Z = !0, W = !0, Re = 0, T = f.position; !x(Ee) && Ee !== 0; )
        Ee = f.input.charCodeAt(++f.position);
      J(f, T, f.position, !1);
    }
    return !0;
  }
  function Pe(f, O) {
    var T, F = f.tag, M = f.anchor, Z = [], W, de = !1, Re;
    if (f.firstTabInLine !== -1) return !1;
    for (f.anchor !== null && (f.anchorMap[f.anchor] = Z), Re = f.input.charCodeAt(f.position); Re !== 0 && (f.firstTabInLine !== -1 && (f.position = f.firstTabInLine, j(f, "tab characters must not be used in indentation")), !(Re !== 45 || (W = f.input.charCodeAt(f.position + 1), !A(W)))); ) {
      if (de = !0, f.position++, I(f, !0, -1) && f.lineIndent <= O) {
        Z.push(null), Re = f.input.charCodeAt(f.position);
        continue;
      }
      if (T = f.line, et(f, O, s, !1, !0), Z.push(f.result), I(f, !0, -1), Re = f.input.charCodeAt(f.position), (f.line === T || f.lineIndent > O) && Re !== 0)
        j(f, "bad indentation of a sequence entry");
      else if (f.lineIndent < O)
        break;
    }
    return de ? (f.tag = F, f.anchor = M, f.kind = "sequence", f.result = Z, !0) : !1;
  }
  function ee(f, O, T) {
    var F, M, Z, W, de, Re, Me = f.tag, We = f.anchor, Ee = {}, ft = /* @__PURE__ */ Object.create(null), g = null, $ = null, K = null, H = !1, te = !1, ae;
    if (f.firstTabInLine !== -1) return !1;
    for (f.anchor !== null && (f.anchorMap[f.anchor] = Ee), ae = f.input.charCodeAt(f.position); ae !== 0; ) {
      if (!H && f.firstTabInLine !== -1 && (f.position = f.firstTabInLine, j(f, "tab characters must not be used in indentation")), F = f.input.charCodeAt(f.position + 1), Z = f.line, (ae === 63 || ae === 58) && A(F))
        ae === 63 ? (H && (q(f, Ee, ft, g, $, null, W, de, Re), g = $ = K = null), te = !0, H = !0, M = !0) : H ? (H = !1, M = !0) : j(f, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), f.position += 1, ae = F;
      else {
        if (W = f.line, de = f.lineStart, Re = f.position, !et(f, T, a, !1, !0))
          break;
        if (f.line === Z) {
          for (ae = f.input.charCodeAt(f.position); S(ae); )
            ae = f.input.charCodeAt(++f.position);
          if (ae === 58)
            ae = f.input.charCodeAt(++f.position), A(ae) || j(f, "a whitespace character is expected after the key-value separator within a block mapping"), H && (q(f, Ee, ft, g, $, null, W, de, Re), g = $ = K = null), te = !0, H = !1, M = !1, g = f.tag, $ = f.result;
          else if (te)
            j(f, "can not read an implicit mapping pair; a colon is missed");
          else
            return f.tag = Me, f.anchor = We, !0;
        } else if (te)
          j(f, "can not read a block mapping entry; a multiline key may not be an implicit key");
        else
          return f.tag = Me, f.anchor = We, !0;
      }
      if ((f.line === Z || f.lineIndent > O) && (H && (W = f.line, de = f.lineStart, Re = f.position), et(f, O, c, !0, M) && (H ? $ = f.result : K = f.result), H || (q(f, Ee, ft, g, $, K, W, de, Re), g = $ = K = null), I(f, !0, -1), ae = f.input.charCodeAt(f.position)), (f.line === Z || f.lineIndent > O) && ae !== 0)
        j(f, "bad indentation of a mapping entry");
      else if (f.lineIndent < O)
        break;
    }
    return H && q(f, Ee, ft, g, $, null, W, de, Re), te && (f.tag = Me, f.anchor = We, f.kind = "mapping", f.result = Ee), te;
  }
  function Oe(f) {
    var O, T = !1, F = !1, M, Z, W;
    if (W = f.input.charCodeAt(f.position), W !== 33) return !1;
    if (f.tag !== null && j(f, "duplication of a tag property"), W = f.input.charCodeAt(++f.position), W === 60 ? (T = !0, W = f.input.charCodeAt(++f.position)) : W === 33 ? (F = !0, M = "!!", W = f.input.charCodeAt(++f.position)) : M = "!", O = f.position, T) {
      do
        W = f.input.charCodeAt(++f.position);
      while (W !== 0 && W !== 62);
      f.position < f.length ? (Z = f.input.slice(O, f.position), W = f.input.charCodeAt(++f.position)) : j(f, "unexpected end of the stream within a verbatim tag");
    } else {
      for (; W !== 0 && !A(W); )
        W === 33 && (F ? j(f, "tag suffix cannot contain exclamation marks") : (M = f.input.slice(O - 1, f.position + 1), y.test(M) || j(f, "named tag handle cannot contain such characters"), F = !0, O = f.position + 1)), W = f.input.charCodeAt(++f.position);
      Z = f.input.slice(O, f.position), m.test(Z) && j(f, "tag suffix cannot contain flow indicator characters");
    }
    Z && !v.test(Z) && j(f, "tag name cannot contain such characters: " + Z);
    try {
      Z = decodeURIComponent(Z);
    } catch {
      j(f, "tag name is malformed: " + Z);
    }
    return T ? f.tag = Z : i.call(f.tagMap, M) ? f.tag = f.tagMap[M] + Z : M === "!" ? f.tag = "!" + Z : M === "!!" ? f.tag = "tag:yaml.org,2002:" + Z : j(f, 'undeclared tag handle "' + M + '"'), !0;
  }
  function Be(f) {
    var O, T;
    if (T = f.input.charCodeAt(f.position), T !== 38) return !1;
    for (f.anchor !== null && j(f, "duplication of an anchor property"), T = f.input.charCodeAt(++f.position), O = f.position; T !== 0 && !A(T) && !E(T); )
      T = f.input.charCodeAt(++f.position);
    return f.position === O && j(f, "name of an anchor node must contain at least one character"), f.anchor = f.input.slice(O, f.position), !0;
  }
  function ct(f) {
    var O, T, F;
    if (F = f.input.charCodeAt(f.position), F !== 42) return !1;
    for (F = f.input.charCodeAt(++f.position), O = f.position; F !== 0 && !A(F) && !E(F); )
      F = f.input.charCodeAt(++f.position);
    return f.position === O && j(f, "name of an alias node must contain at least one character"), T = f.input.slice(O, f.position), i.call(f.anchorMap, T) || j(f, 'unidentified alias "' + T + '"'), f.result = f.anchorMap[T], I(f, !0, -1), !0;
  }
  function et(f, O, T, F, M) {
    var Z, W, de, Re = 1, Me = !1, We = !1, Ee, ft, g, $, K, H;
    if (f.listener !== null && f.listener("open", f), f.tag = null, f.anchor = null, f.kind = null, f.result = null, Z = W = de = c === T || s === T, F && I(f, !0, -1) && (Me = !0, f.lineIndent > O ? Re = 1 : f.lineIndent === O ? Re = 0 : f.lineIndent < O && (Re = -1)), Re === 1)
      for (; Oe(f) || Be(f); )
        I(f, !0, -1) ? (Me = !0, de = Z, f.lineIndent > O ? Re = 1 : f.lineIndent === O ? Re = 0 : f.lineIndent < O && (Re = -1)) : de = !1;
    if (de && (de = Me || M), (Re === 1 || c === T) && (o === T || a === T ? K = O : K = O + 1, H = f.position - f.lineStart, Re === 1 ? de && (Pe(f, H) || ee(f, H, K)) || le(f, K) ? We = !0 : (W && ve(f, K) || G(f, K) || ie(f, K) ? We = !0 : ct(f) ? (We = !0, (f.tag !== null || f.anchor !== null) && j(f, "alias node should not have any properties")) : Y(f, K, o === T) && (We = !0, f.tag === null && (f.tag = "?")), f.anchor !== null && (f.anchorMap[f.anchor] = f.result)) : Re === 0 && (We = de && Pe(f, H))), f.tag === null)
      f.anchor !== null && (f.anchorMap[f.anchor] = f.result);
    else if (f.tag === "?") {
      for (f.result !== null && f.kind !== "scalar" && j(f, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + f.kind + '"'), Ee = 0, ft = f.implicitTypes.length; Ee < ft; Ee += 1)
        if ($ = f.implicitTypes[Ee], $.resolve(f.result)) {
          f.result = $.construct(f.result), f.tag = $.tag, f.anchor !== null && (f.anchorMap[f.anchor] = f.result);
          break;
        }
    } else if (f.tag !== "!") {
      if (i.call(f.typeMap[f.kind || "fallback"], f.tag))
        $ = f.typeMap[f.kind || "fallback"][f.tag];
      else
        for ($ = null, g = f.typeMap.multi[f.kind || "fallback"], Ee = 0, ft = g.length; Ee < ft; Ee += 1)
          if (f.tag.slice(0, g[Ee].tag.length) === g[Ee].tag) {
            $ = g[Ee];
            break;
          }
      $ || j(f, "unknown tag !<" + f.tag + ">"), f.result !== null && $.kind !== f.kind && j(f, "unacceptable node kind for !<" + f.tag + '> tag; it should be "' + $.kind + '", not "' + f.kind + '"'), $.resolve(f.result, f.tag) ? (f.result = $.construct(f.result, f.tag), f.anchor !== null && (f.anchorMap[f.anchor] = f.result)) : j(f, "cannot resolve a node with !<" + f.tag + "> explicit tag");
    }
    return f.listener !== null && f.listener("close", f), f.tag !== null || f.anchor !== null || We;
  }
  function $e(f) {
    var O = f.position, T, F, M, Z = !1, W;
    for (f.version = null, f.checkLineBreaks = f.legacy, f.tagMap = /* @__PURE__ */ Object.create(null), f.anchorMap = /* @__PURE__ */ Object.create(null); (W = f.input.charCodeAt(f.position)) !== 0 && (I(f, !0, -1), W = f.input.charCodeAt(f.position), !(f.lineIndent > 0 || W !== 37)); ) {
      for (Z = !0, W = f.input.charCodeAt(++f.position), T = f.position; W !== 0 && !A(W); )
        W = f.input.charCodeAt(++f.position);
      for (F = f.input.slice(T, f.position), M = [], F.length < 1 && j(f, "directive name must not be less than one character in length"); W !== 0; ) {
        for (; S(W); )
          W = f.input.charCodeAt(++f.position);
        if (W === 35) {
          do
            W = f.input.charCodeAt(++f.position);
          while (W !== 0 && !x(W));
          break;
        }
        if (x(W)) break;
        for (T = f.position; W !== 0 && !A(W); )
          W = f.input.charCodeAt(++f.position);
        M.push(f.input.slice(T, f.position));
      }
      W !== 0 && ge(f), i.call(_e, F) ? _e[F](f, F, M) : fe(f, 'unknown document directive "' + F + '"');
    }
    if (I(f, !0, -1), f.lineIndent === 0 && f.input.charCodeAt(f.position) === 45 && f.input.charCodeAt(f.position + 1) === 45 && f.input.charCodeAt(f.position + 2) === 45 ? (f.position += 3, I(f, !0, -1)) : Z && j(f, "directives end mark is expected"), et(f, f.lineIndent - 1, c, !1, !0), I(f, !0, -1), f.checkLineBreaks && h.test(f.input.slice(O, f.position)) && fe(f, "non-ASCII line breaks are interpreted as content"), f.documents.push(f.result), f.position === f.lineStart && X(f)) {
      f.input.charCodeAt(f.position) === 46 && (f.position += 3, I(f, !0, -1));
      return;
    }
    if (f.position < f.length - 1)
      j(f, "end of the stream or a document separator is expected");
    else
      return;
  }
  function C(f, O) {
    f = String(f), O = O || {}, f.length !== 0 && (f.charCodeAt(f.length - 1) !== 10 && f.charCodeAt(f.length - 1) !== 13 && (f += `
`), f.charCodeAt(0) === 65279 && (f = f.slice(1)));
    var T = new B(f, O), F = f.indexOf("\0");
    for (F !== -1 && (T.position = F, j(T, "null byte is not allowed in input")), T.input += "\0"; T.input.charCodeAt(T.position) === 32; )
      T.lineIndent += 1, T.position += 1;
    for (; T.position < T.length - 1; )
      $e(T);
    return T.documents;
  }
  function k(f, O, T) {
    O !== null && typeof O == "object" && typeof T > "u" && (T = O, O = null);
    var F = C(f, T);
    if (typeof O != "function")
      return F;
    for (var M = 0, Z = F.length; M < Z; M += 1)
      O(F[M]);
  }
  function D(f, O) {
    var T = C(f, O);
    if (T.length !== 0) {
      if (T.length === 1)
        return T[0];
      throw new t("expected a single document in the stream, but found more");
    }
  }
  return Fo.loadAll = k, Fo.load = D, Fo;
}
var tc = {}, Tf;
function H0() {
  if (Tf) return tc;
  Tf = 1;
  var e = _o(), t = Eo(), n = Vl(), r = Object.prototype.toString, i = Object.prototype.hasOwnProperty, o = 65279, a = 9, s = 10, c = 13, l = 32, u = 33, d = 34, p = 35, h = 37, m = 38, y = 39, v = 42, b = 44, x = 45, S = 58, A = 61, E = 62, N = 63, P = 64, U = 91, ue = 93, ye = 96, pe = 123, V = 124, Q = 125, B = {};
  B[0] = "\\0", B[7] = "\\a", B[8] = "\\b", B[9] = "\\t", B[10] = "\\n", B[11] = "\\v", B[12] = "\\f", B[13] = "\\r", B[27] = "\\e", B[34] = '\\"', B[92] = "\\\\", B[133] = "\\N", B[160] = "\\_", B[8232] = "\\L", B[8233] = "\\P";
  var se = [
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
  ], j = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
  function fe(g, $) {
    var K, H, te, ae, Se, he, Ce;
    if ($ === null) return {};
    for (K = {}, H = Object.keys($), te = 0, ae = H.length; te < ae; te += 1)
      Se = H[te], he = String($[Se]), Se.slice(0, 2) === "!!" && (Se = "tag:yaml.org,2002:" + Se.slice(2)), Ce = g.compiledTypeMap.fallback[Se], Ce && i.call(Ce.styleAliases, he) && (he = Ce.styleAliases[he]), K[Se] = he;
    return K;
  }
  function _e(g) {
    var $, K, H;
    if ($ = g.toString(16).toUpperCase(), g <= 255)
      K = "x", H = 2;
    else if (g <= 65535)
      K = "u", H = 4;
    else if (g <= 4294967295)
      K = "U", H = 8;
    else
      throw new t("code point within a string may not be greater than 0xFFFFFFFF");
    return "\\" + K + e.repeat("0", H - $.length) + $;
  }
  var J = 1, L = 2;
  function q(g) {
    this.schema = g.schema || n, this.indent = Math.max(1, g.indent || 2), this.noArrayIndent = g.noArrayIndent || !1, this.skipInvalid = g.skipInvalid || !1, this.flowLevel = e.isNothing(g.flowLevel) ? -1 : g.flowLevel, this.styleMap = fe(this.schema, g.styles || null), this.sortKeys = g.sortKeys || !1, this.lineWidth = g.lineWidth || 80, this.noRefs = g.noRefs || !1, this.noCompatMode = g.noCompatMode || !1, this.condenseFlow = g.condenseFlow || !1, this.quotingType = g.quotingType === '"' ? L : J, this.forceQuotes = g.forceQuotes || !1, this.replacer = typeof g.replacer == "function" ? g.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
  }
  function ge(g, $) {
    for (var K = e.repeat(" ", $), H = 0, te = -1, ae = "", Se, he = g.length; H < he; )
      te = g.indexOf(`
`, H), te === -1 ? (Se = g.slice(H), H = he) : (Se = g.slice(H, te + 1), H = te + 1), Se.length && Se !== `
` && (ae += K), ae += Se;
    return ae;
  }
  function I(g, $) {
    return `
` + e.repeat(" ", g.indent * $);
  }
  function X(g, $) {
    var K, H, te;
    for (K = 0, H = g.implicitTypes.length; K < H; K += 1)
      if (te = g.implicitTypes[K], te.resolve($))
        return !0;
    return !1;
  }
  function re(g) {
    return g === l || g === a;
  }
  function Y(g) {
    return 32 <= g && g <= 126 || 161 <= g && g <= 55295 && g !== 8232 && g !== 8233 || 57344 <= g && g <= 65533 && g !== o || 65536 <= g && g <= 1114111;
  }
  function G(g) {
    return Y(g) && g !== o && g !== c && g !== s;
  }
  function ie(g, $, K) {
    var H = G(g), te = H && !re(g);
    return (
      // ns-plain-safe
      (K ? (
        // c = flow-in
        H
      ) : H && g !== b && g !== U && g !== ue && g !== pe && g !== Q) && g !== p && !($ === S && !te) || G($) && !re($) && g === p || $ === S && te
    );
  }
  function le(g) {
    return Y(g) && g !== o && !re(g) && g !== x && g !== N && g !== S && g !== b && g !== U && g !== ue && g !== pe && g !== Q && g !== p && g !== m && g !== v && g !== u && g !== V && g !== A && g !== E && g !== y && g !== d && g !== h && g !== P && g !== ye;
  }
  function ve(g) {
    return !re(g) && g !== S;
  }
  function Pe(g, $) {
    var K = g.charCodeAt($), H;
    return K >= 55296 && K <= 56319 && $ + 1 < g.length && (H = g.charCodeAt($ + 1), H >= 56320 && H <= 57343) ? (K - 55296) * 1024 + H - 56320 + 65536 : K;
  }
  function ee(g) {
    var $ = /^\n* /;
    return $.test(g);
  }
  var Oe = 1, Be = 2, ct = 3, et = 4, $e = 5;
  function C(g, $, K, H, te, ae, Se, he) {
    var Ce, Ie = 0, lt = null, ht = !1, tt = !1, Io = H !== -1, Mn = -1, In = le(Pe(g, 0)) && ve(Pe(g, g.length - 1));
    if ($ || Se)
      for (Ce = 0; Ce < g.length; Ie >= 65536 ? Ce += 2 : Ce++) {
        if (Ie = Pe(g, Ce), !Y(Ie))
          return $e;
        In = In && ie(Ie, lt, he), lt = Ie;
      }
    else {
      for (Ce = 0; Ce < g.length; Ie >= 65536 ? Ce += 2 : Ce++) {
        if (Ie = Pe(g, Ce), Ie === s)
          ht = !0, Io && (tt = tt || // Foldable line = too long, and not more-indented.
          Ce - Mn - 1 > H && g[Mn + 1] !== " ", Mn = Ce);
        else if (!Y(Ie))
          return $e;
        In = In && ie(Ie, lt, he), lt = Ie;
      }
      tt = tt || Io && Ce - Mn - 1 > H && g[Mn + 1] !== " ";
    }
    return !ht && !tt ? In && !Se && !te(g) ? Oe : ae === L ? $e : Be : K > 9 && ee(g) ? $e : Se ? ae === L ? $e : Be : tt ? et : ct;
  }
  function k(g, $, K, H, te) {
    g.dump = function() {
      if ($.length === 0)
        return g.quotingType === L ? '""' : "''";
      if (!g.noCompatMode && (se.indexOf($) !== -1 || j.test($)))
        return g.quotingType === L ? '"' + $ + '"' : "'" + $ + "'";
      var ae = g.indent * Math.max(1, K), Se = g.lineWidth === -1 ? -1 : Math.max(Math.min(g.lineWidth, 40), g.lineWidth - ae), he = H || g.flowLevel > -1 && K >= g.flowLevel;
      function Ce(Ie) {
        return X(g, Ie);
      }
      switch (C(
        $,
        he,
        g.indent,
        Se,
        Ce,
        g.quotingType,
        g.forceQuotes && !H,
        te
      )) {
        case Oe:
          return $;
        case Be:
          return "'" + $.replace(/'/g, "''") + "'";
        case ct:
          return "|" + D($, g.indent) + f(ge($, ae));
        case et:
          return ">" + D($, g.indent) + f(ge(O($, Se), ae));
        case $e:
          return '"' + F($) + '"';
        default:
          throw new t("impossible error: invalid scalar style");
      }
    }();
  }
  function D(g, $) {
    var K = ee(g) ? String($) : "", H = g[g.length - 1] === `
`, te = H && (g[g.length - 2] === `
` || g === `
`), ae = te ? "+" : H ? "" : "-";
    return K + ae + `
`;
  }
  function f(g) {
    return g[g.length - 1] === `
` ? g.slice(0, -1) : g;
  }
  function O(g, $) {
    for (var K = /(\n+)([^\n]*)/g, H = function() {
      var Ie = g.indexOf(`
`);
      return Ie = Ie !== -1 ? Ie : g.length, K.lastIndex = Ie, T(g.slice(0, Ie), $);
    }(), te = g[0] === `
` || g[0] === " ", ae, Se; Se = K.exec(g); ) {
      var he = Se[1], Ce = Se[2];
      ae = Ce[0] === " ", H += he + (!te && !ae && Ce !== "" ? `
` : "") + T(Ce, $), te = ae;
    }
    return H;
  }
  function T(g, $) {
    if (g === "" || g[0] === " ") return g;
    for (var K = / [^ ]/g, H, te = 0, ae, Se = 0, he = 0, Ce = ""; H = K.exec(g); )
      he = H.index, he - te > $ && (ae = Se > te ? Se : he, Ce += `
` + g.slice(te, ae), te = ae + 1), Se = he;
    return Ce += `
`, g.length - te > $ && Se > te ? Ce += g.slice(te, Se) + `
` + g.slice(Se + 1) : Ce += g.slice(te), Ce.slice(1);
  }
  function F(g) {
    for (var $ = "", K = 0, H, te = 0; te < g.length; K >= 65536 ? te += 2 : te++)
      K = Pe(g, te), H = B[K], !H && Y(K) ? ($ += g[te], K >= 65536 && ($ += g[te + 1])) : $ += H || _e(K);
    return $;
  }
  function M(g, $, K) {
    var H = "", te = g.tag, ae, Se, he;
    for (ae = 0, Se = K.length; ae < Se; ae += 1)
      he = K[ae], g.replacer && (he = g.replacer.call(K, String(ae), he)), (Me(g, $, he, !1, !1) || typeof he > "u" && Me(g, $, null, !1, !1)) && (H !== "" && (H += "," + (g.condenseFlow ? "" : " ")), H += g.dump);
    g.tag = te, g.dump = "[" + H + "]";
  }
  function Z(g, $, K, H) {
    var te = "", ae = g.tag, Se, he, Ce;
    for (Se = 0, he = K.length; Se < he; Se += 1)
      Ce = K[Se], g.replacer && (Ce = g.replacer.call(K, String(Se), Ce)), (Me(g, $ + 1, Ce, !0, !0, !1, !0) || typeof Ce > "u" && Me(g, $ + 1, null, !0, !0, !1, !0)) && ((!H || te !== "") && (te += I(g, $)), g.dump && s === g.dump.charCodeAt(0) ? te += "-" : te += "- ", te += g.dump);
    g.tag = ae, g.dump = te || "[]";
  }
  function W(g, $, K) {
    var H = "", te = g.tag, ae = Object.keys(K), Se, he, Ce, Ie, lt;
    for (Se = 0, he = ae.length; Se < he; Se += 1)
      lt = "", H !== "" && (lt += ", "), g.condenseFlow && (lt += '"'), Ce = ae[Se], Ie = K[Ce], g.replacer && (Ie = g.replacer.call(K, Ce, Ie)), Me(g, $, Ce, !1, !1) && (g.dump.length > 1024 && (lt += "? "), lt += g.dump + (g.condenseFlow ? '"' : "") + ":" + (g.condenseFlow ? "" : " "), Me(g, $, Ie, !1, !1) && (lt += g.dump, H += lt));
    g.tag = te, g.dump = "{" + H + "}";
  }
  function de(g, $, K, H) {
    var te = "", ae = g.tag, Se = Object.keys(K), he, Ce, Ie, lt, ht, tt;
    if (g.sortKeys === !0)
      Se.sort();
    else if (typeof g.sortKeys == "function")
      Se.sort(g.sortKeys);
    else if (g.sortKeys)
      throw new t("sortKeys must be a boolean or a function");
    for (he = 0, Ce = Se.length; he < Ce; he += 1)
      tt = "", (!H || te !== "") && (tt += I(g, $)), Ie = Se[he], lt = K[Ie], g.replacer && (lt = g.replacer.call(K, Ie, lt)), Me(g, $ + 1, Ie, !0, !0, !0) && (ht = g.tag !== null && g.tag !== "?" || g.dump && g.dump.length > 1024, ht && (g.dump && s === g.dump.charCodeAt(0) ? tt += "?" : tt += "? "), tt += g.dump, ht && (tt += I(g, $)), Me(g, $ + 1, lt, !0, ht) && (g.dump && s === g.dump.charCodeAt(0) ? tt += ":" : tt += ": ", tt += g.dump, te += tt));
    g.tag = ae, g.dump = te || "{}";
  }
  function Re(g, $, K) {
    var H, te, ae, Se, he, Ce;
    for (te = K ? g.explicitTypes : g.implicitTypes, ae = 0, Se = te.length; ae < Se; ae += 1)
      if (he = te[ae], (he.instanceOf || he.predicate) && (!he.instanceOf || typeof $ == "object" && $ instanceof he.instanceOf) && (!he.predicate || he.predicate($))) {
        if (K ? he.multi && he.representName ? g.tag = he.representName($) : g.tag = he.tag : g.tag = "?", he.represent) {
          if (Ce = g.styleMap[he.tag] || he.defaultStyle, r.call(he.represent) === "[object Function]")
            H = he.represent($, Ce);
          else if (i.call(he.represent, Ce))
            H = he.represent[Ce]($, Ce);
          else
            throw new t("!<" + he.tag + '> tag resolver accepts not "' + Ce + '" style');
          g.dump = H;
        }
        return !0;
      }
    return !1;
  }
  function Me(g, $, K, H, te, ae, Se) {
    g.tag = null, g.dump = K, Re(g, K, !1) || Re(g, K, !0);
    var he = r.call(g.dump), Ce = H, Ie;
    H && (H = g.flowLevel < 0 || g.flowLevel > $);
    var lt = he === "[object Object]" || he === "[object Array]", ht, tt;
    if (lt && (ht = g.duplicates.indexOf(K), tt = ht !== -1), (g.tag !== null && g.tag !== "?" || tt || g.indent !== 2 && $ > 0) && (te = !1), tt && g.usedDuplicates[ht])
      g.dump = "*ref_" + ht;
    else {
      if (lt && tt && !g.usedDuplicates[ht] && (g.usedDuplicates[ht] = !0), he === "[object Object]")
        H && Object.keys(g.dump).length !== 0 ? (de(g, $, g.dump, te), tt && (g.dump = "&ref_" + ht + g.dump)) : (W(g, $, g.dump), tt && (g.dump = "&ref_" + ht + " " + g.dump));
      else if (he === "[object Array]")
        H && g.dump.length !== 0 ? (g.noArrayIndent && !Se && $ > 0 ? Z(g, $ - 1, g.dump, te) : Z(g, $, g.dump, te), tt && (g.dump = "&ref_" + ht + g.dump)) : (M(g, $, g.dump), tt && (g.dump = "&ref_" + ht + " " + g.dump));
      else if (he === "[object String]")
        g.tag !== "?" && k(g, g.dump, $, ae, Ce);
      else {
        if (he === "[object Undefined]")
          return !1;
        if (g.skipInvalid) return !1;
        throw new t("unacceptable kind of an object to dump " + he);
      }
      g.tag !== null && g.tag !== "?" && (Ie = encodeURI(
        g.tag[0] === "!" ? g.tag.slice(1) : g.tag
      ).replace(/!/g, "%21"), g.tag[0] === "!" ? Ie = "!" + Ie : Ie.slice(0, 18) === "tag:yaml.org,2002:" ? Ie = "!!" + Ie.slice(18) : Ie = "!<" + Ie + ">", g.dump = Ie + " " + g.dump);
    }
    return !0;
  }
  function We(g, $) {
    var K = [], H = [], te, ae;
    for (Ee(g, K, H), te = 0, ae = H.length; te < ae; te += 1)
      $.duplicates.push(K[H[te]]);
    $.usedDuplicates = new Array(ae);
  }
  function Ee(g, $, K) {
    var H, te, ae;
    if (g !== null && typeof g == "object")
      if (te = $.indexOf(g), te !== -1)
        K.indexOf(te) === -1 && K.push(te);
      else if ($.push(g), Array.isArray(g))
        for (te = 0, ae = g.length; te < ae; te += 1)
          Ee(g[te], $, K);
      else
        for (H = Object.keys(g), te = 0, ae = H.length; te < ae; te += 1)
          Ee(g[H[te]], $, K);
  }
  function ft(g, $) {
    $ = $ || {};
    var K = new q($);
    K.noRefs || We(g, K);
    var H = g;
    return K.replacer && (H = K.replacer.call({ "": H }, "", H)), Me(K, 0, H, !0, !0) ? K.dump + `
` : "";
  }
  return tc.dump = ft, tc;
}
var kf;
function q0() {
  if (kf) return wt;
  kf = 1;
  var e = W0(), t = H0();
  function n(r, i) {
    return function() {
      throw new Error("Function yaml." + r + " is removed in js-yaml 4. Use yaml." + i + " instead, which is now safe by default.");
    };
  }
  return wt.Type = At(), wt.Schema = uh(), wt.FAILSAFE_SCHEMA = hh(), wt.JSON_SCHEMA = bh(), wt.CORE_SCHEMA = xh(), wt.DEFAULT_SCHEMA = Vl(), wt.load = e.load, wt.loadAll = e.loadAll, wt.dump = t.dump, wt.YAMLException = Eo(), wt.types = {
    binary: Eh(),
    float: vh(),
    map: ph(),
    null: mh(),
    pairs: Ch(),
    set: Ah(),
    timestamp: wh(),
    bool: yh(),
    int: gh(),
    merge: _h(),
    omap: Sh(),
    seq: dh(),
    str: fh()
  }, wt.safeLoad = n("safeLoad", "load"), wt.safeLoadAll = n("safeLoadAll", "loadAll"), wt.safeDump = n("safeDump", "dump"), wt;
}
var kt = ot && ot.__assign || function() {
  return kt = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
    }
    return e;
  }, kt.apply(this, arguments);
}, Y0 = ot && ot.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var i = Object.getOwnPropertyDescriptor(t, n);
  (!i || ("get" in i ? !t.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, i);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), G0 = ot && ot.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), Z0 = ot && ot.__importStar || function(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var n in e) n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && Y0(t, e, n);
  return G0(t, e), t;
}, Lo = ot && ot.__awaiter || function(e, t, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(a) {
      a(o);
    });
  }
  return new (n || (n = Promise))(function(o, a) {
    function s(u) {
      try {
        l(r.next(u));
      } catch (d) {
        a(d);
      }
    }
    function c(u) {
      try {
        l(r.throw(u));
      } catch (d) {
        a(d);
      }
    }
    function l(u) {
      u.done ? o(u.value) : i(u.value).then(s, c);
    }
    l((r = r.apply(e, t || [])).next());
  });
}, zo = ot && ot.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(l) {
    return function(u) {
      return c([l, u]);
    };
  }
  function c(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; a && (a = 0, l[0] && (n = 0)), n; ) try {
      if (r = 1, i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, l[1])).done) return o;
      switch (i = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
        case 0:
        case 1:
          o = l;
          break;
        case 4:
          return n.label++, { value: l[1], done: !1 };
        case 5:
          n.label++, i = l[1], l = [0];
          continue;
        case 7:
          l = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            n = 0;
            continue;
          }
          if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
            n.label = l[1];
            break;
          }
          if (l[0] === 6 && n.label < o[1]) {
            n.label = o[1], o = l;
            break;
          }
          if (o && n.label < o[2]) {
            n.label = o[2], n.ops.push(l);
            break;
          }
          o[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      l = t.call(e, n);
    } catch (u) {
      l = [6, u], i = 0;
    } finally {
      r = o = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}, Fn = ot && ot.__values || function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, xn = ot && ot.__read || function(e, t) {
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
}, $o = ot && ot.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, o; r < i; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}, Oh = ot && ot.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Wi, "__esModule", { value: !0 });
Wi.OpenAPIClientAxios = void 0;
var K0 = Oh(R0), Pf = Oh(oh), Nf = ah, sr = $l, nc = "default", X0 = (
  /** @class */
  function() {
    function e(t) {
      var n, r = this;
      this.getClient = function() {
        return Lo(r, void 0, void 0, function() {
          return zo(this, function(o) {
            return this.initialized ? [2, this.instance] : [2, this.init()];
          });
        });
      }, this.init = function() {
        return Lo(r, void 0, void 0, function() {
          return zo(this, function(o) {
            switch (o.label) {
              case 0:
                return [4, this.loadDocument()];
              case 1:
                return o.sent(), this.definition = (0, Nf.dereferenceSync)(this.document), this.instance = this.createAxiosInstance(), this.initialized = !0, [2, this.instance];
            }
          });
        });
      }, this.initSync = function() {
        if (typeof r.inputDocument != "object")
          throw new Error(".initSync() can't be called with a non-object definition. Please use .init()");
        return r.document = r.inputDocument, r.definition = (0, Nf.dereferenceSync)(r.document), r.instance = r.createAxiosInstance(), r.initialized = !0, r.instance;
      }, this.getAxiosInstance = function() {
        var o = K0.default.create(r.axiosConfigDefaults);
        return o;
      }, this.createAxiosInstance = function() {
        var o, a, s = r.getAxiosInstance(), c = r.getBaseURL();
        c && !r.axiosConfigDefaults.baseURL && (s.defaults.baseURL = c);
        var l = r.getOperations();
        try {
          for (var u = Fn(l), d = u.next(); !d.done; d = u.next()) {
            var p = d.value, h = p.operationId;
            h && (s[r.transformOperationName(h)] = r.createOperationMethod(p));
          }
        } catch (v) {
          o = { error: v };
        } finally {
          try {
            d && !d.done && (a = u.return) && a.call(u);
          } finally {
            if (o) throw o.error;
          }
        }
        s.paths = {};
        var m = function(v) {
          if (r.definition.paths[v]) {
            s.paths[v] || (s.paths[v] = {});
            var b = r.definition.paths[v], x = function(A) {
              if (b[A] && Object.values(sr.HttpMethod).includes(A)) {
                var E = A, N = r.getOperations().find(function(P) {
                  return P.method === E && P.path === v;
                });
                s.paths[v][E] = r.createOperationMethod(N);
              }
            };
            for (var S in b)
              x(S);
          }
        };
        for (var y in r.definition.paths)
          m(y);
        return s.api = r, s;
      }, this.getBaseURL = function(o) {
        var a, s, c, l;
        if (r.definition) {
          if (o && (typeof o == "string" && (o = r.getOperation(o)), o.servers && o.servers[0]))
            return o.servers[0].url;
          var u;
          if (typeof r.defaultServer == "number")
            r.definition.servers && r.definition.servers[r.defaultServer] && (u = r.definition.servers[r.defaultServer]);
          else if (typeof r.defaultServer == "string")
            try {
              for (var d = Fn(r.definition.servers), p = d.next(); !p.done; p = d.next()) {
                var h = p.value;
                if (h.description === r.defaultServer) {
                  u = h;
                  break;
                }
              }
            } catch (P) {
              a = { error: P };
            } finally {
              try {
                p && !p.done && (s = d.return) && s.call(d);
              } finally {
                if (a) throw a.error;
              }
            }
          else r.defaultServer.url && (u = r.defaultServer);
          if (u) {
            var m = u.url, y = u.variables, v = (0, Pf.default)(m);
            if (!v.names.length)
              return m;
            var b = {};
            try {
              for (var x = Fn(v.names), S = x.next(); !S.done; S = x.next()) {
                var A = S.value, E = r.baseURLVariables[A];
                if (E !== void 0 && y[A].enum) {
                  if (typeof E == "number") {
                    var N = y[A].enum[E];
                    if (N)
                      b[A] = N;
                    else
                      throw new Error("index ".concat(E, " out of range for enum of baseURL variable: ").concat(A, ";               enum max index is ").concat(y[A].enum.length - 1));
                  } else if (typeof E == "string")
                    if (y[A].enum.includes(E))
                      b[A] = E;
                    else
                      throw new Error("".concat(E, " is not a valid entry for baseURL variable ").concat(A, ";                 variable must be of the following: ").concat(y[A].enum.join(", ")));
                } else
                  b[A] = y[A].default;
              }
            } catch (P) {
              c = { error: P };
            } finally {
              try {
                S && !S.done && (l = x.return) && l.call(x);
              } finally {
                if (c) throw c.error;
              }
            }
            return v.path(b);
          }
        }
      }, this.getAxiosConfigForOperation = function(o, a) {
        typeof o == "string" && (o = r.getOperation(o));
        var s = r.getRequestConfigForOperation(o, a), c = {
          method: s.method,
          url: s.path,
          data: s.payload,
          params: s.query,
          headers: s.headers
        }, l = o.servers;
        l && l[0] && (c.baseURL = l[0].url);
        var u = xn(a, 3), d = u[2];
        return kt(kt(kt({}, c), d), { params: kt(kt({}, c == null ? void 0 : c.params), d == null ? void 0 : d.params), headers: kt(kt({}, c == null ? void 0 : c.headers), d == null ? void 0 : d.headers) });
      }, this.getRequestConfigForOperation = function(o, a) {
        var s, c, l, u, d, p, h, m, y, v;
        typeof o == "string" && (o = r.getOperation(o));
        var b = {}, x = new URLSearchParams(), S = {}, A = {}, E = {}, N = o.parameters || [], P = function($e, C, k) {
          var D, f;
          switch (k) {
            case sr.ParamType.Path:
              b[$e] = C;
              break;
            case sr.ParamType.Query:
              if (Array.isArray(C))
                try {
                  for (var O = Fn(C), T = O.next(); !T.done; T = O.next()) {
                    var F = T.value;
                    x.append($e, F);
                  }
                } catch (M) {
                  D = { error: M };
                } finally {
                  try {
                    T && !T.done && (f = O.return) && f.call(O);
                  } finally {
                    if (D) throw D.error;
                  }
                }
              else
                x.append($e, C);
              S[$e] = C;
              break;
            case sr.ParamType.Header:
              A[$e] = C;
              break;
            case sr.ParamType.Cookie:
              E[$e] = C;
              break;
          }
        }, U = function($e) {
          var C = N.find(function(k) {
            var D = k.name;
            return D === $e;
          });
          return C ? C.in : sr.ParamType.Query;
        }, ue = function() {
          var $e = N.find(function(k) {
            var D = k.required;
            return D === !0;
          });
          if ($e)
            return $e;
          var C = N[0];
          if (C)
            return C;
        }, ye = xn(a, 2), pe = ye[0], V = ye[1];
        if (Array.isArray(pe))
          try {
            for (var Q = Fn(pe), B = Q.next(); !B.done; B = Q.next()) {
              var se = B.value;
              P(se.name, se.value, se.in || U(se.name));
            }
          } catch ($e) {
            s = { error: $e };
          } finally {
            try {
              B && !B.done && (c = Q.return) && c.call(Q);
            } finally {
              if (s) throw s.error;
            }
          }
        else if (typeof pe == "object")
          for (var j in pe)
            pe[j] !== void 0 && P(j, pe[j], U(j));
        else if (pe) {
          var fe = ue();
          if (!fe)
            throw new Error("No parameters found for operation ".concat(o.operationId));
          P(fe.name, pe, fe.in);
        }
        var _e = (0, Pf.default)(o.path);
        try {
          for (var J = Fn(_e.names), L = J.next(); !L.done; L = J.next()) {
            var q = L.value, ge = b[q];
            b[q] = "".concat(ge);
          }
        } catch ($e) {
          l = { error: $e };
        } finally {
          try {
            L && !L.done && (u = J.return) && u.call(J);
          } finally {
            if (l) throw l.error;
          }
        }
        var I = _e.path(b), X = x.toString(), re = "".concat(r.getBaseURL(o)).concat(I).concat(X ? "?".concat(X) : ""), Y = r.client.defaults.headers;
        try {
          for (var G = Fn(Object.entries((y = Y.common) !== null && y !== void 0 ? y : {})), ie = G.next(); !ie.done; ie = G.next()) {
            var le = xn(ie.value, 2), ve = le[0], Pe = le[1];
            A[ve] = Pe;
          }
        } catch ($e) {
          d = { error: $e };
        } finally {
          try {
            ie && !ie.done && (p = G.return) && p.call(G);
          } finally {
            if (d) throw d.error;
          }
        }
        if (r.applyMethodCommonHeaders) {
          var ee = (v = Y[o.method]) !== null && v !== void 0 ? v : {};
          try {
            for (var Oe = Fn(Object.entries(ee)), Be = Oe.next(); !Be.done; Be = Oe.next()) {
              var ct = xn(Be.value, 2), ve = ct[0], Pe = ct[1];
              A[ve] = Pe;
            }
          } catch ($e) {
            h = { error: $e };
          } finally {
            try {
              Be && !Be.done && (m = Oe.return) && m.call(Oe);
            } finally {
              if (h) throw h.error;
            }
          }
        }
        var et = {
          method: o.method,
          url: re,
          path: I,
          pathParams: b,
          query: S,
          queryString: X,
          headers: A,
          cookies: E,
          payload: V
        };
        return et;
      }, this.getOperations = function() {
        var o, a = ((o = r.definition) === null || o === void 0 ? void 0 : o.paths) || {};
        return Object.entries(a).flatMap(function(s) {
          var c = xn(s, 2), l = c[0], u = c[1];
          return Object.values(sr.HttpMethod).map(function(d) {
            return { path: l, method: d, operation: u[d] };
          }).filter(function(d) {
            var p = d.operation;
            return p;
          }).map(function(d) {
            var p, h = d.operation, m = d.method, y = kt(kt({}, typeof h == "object" ? h : {}), { path: l, method: m });
            return u.parameters && (y.parameters = $o($o([], xn(y.parameters || []), !1), xn(u.parameters), !1)), u.servers && (y.servers = $o($o([], xn(y.servers || []), !1), xn(u.servers), !1)), y.security = (p = y.security) !== null && p !== void 0 ? p : r.definition.security, y;
          });
        });
      }, this.getOperation = function(o) {
        return r.getOperations().find(function(a) {
          return a.operationId === o;
        });
      }, this.createOperationMethod = function(o) {
        var a = function() {
          for (var s = [], c = 0; c < arguments.length; c++)
            s[c] = arguments[c];
          return Lo(r, void 0, void 0, function() {
            var l, u;
            return zo(this, function(d) {
              return l = this.getAxiosConfigForOperation(o, s), u = this.getRunner(o.operationId), [2, u.runRequest(l, o, u.context)];
            });
          });
        };
        return r.transformOperationMethod(a, o);
      };
      var i = kt(kt({ quick: !1, withServer: 0, baseURLVariables: {}, transformOperationName: function(o) {
        return o;
      }, transformOperationMethod: function(o) {
        return o;
      }, axiosRunner: function(o) {
        return r.client.request(o);
      }, applyMethodCommonHeaders: !1 }, t), { axiosConfigDefaults: kt({}, t.axiosConfigDefaults || {}) });
      this.inputDocument = i.definition, this.quick = i.quick, this.axiosConfigDefaults = i.axiosConfigDefaults, this.defaultServer = i.withServer, this.baseURLVariables = i.baseURLVariables, this.applyMethodCommonHeaders = i.applyMethodCommonHeaders, this.transformOperationName = i.transformOperationName, this.transformOperationMethod = i.transformOperationMethod, this.runners = (n = {}, n[nc] = { runRequest: i.axiosRunner }, n);
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
      return Lo(this, void 0, void 0, function() {
        var n, r, i, o;
        return zo(this, function(a) {
          switch (a.label) {
            case 0:
              return typeof this.inputDocument != "object" ? [3, 1] : (this.document = this.inputDocument, [3, 6]);
            case 1:
              return n = this.getAxiosInstance(), [4, n.get(this.inputDocument)];
            case 2:
              return r = a.sent(), typeof r.data != "object" ? [3, 3] : (this.document = r.data, [3, 6]);
            case 3:
              return typeof r.data == "string" && (!((t = r.headers["content-type"]) === null || t === void 0) && t.match(/ya?ml/)) ? [4, Promise.resolve().then(function() {
                return Z0(q0());
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
      this.runners[n ?? nc] = t;
    }, e.prototype.getRunner = function(t) {
      var n;
      return (n = this.runners[t]) !== null && n !== void 0 ? n : this.runners[nc];
    }, e;
  }()
);
Wi.OpenAPIClientAxios = X0;
(function(e) {
  var t = ot && ot.__createBinding || (Object.create ? function(i, o, a, s) {
    s === void 0 && (s = a);
    var c = Object.getOwnPropertyDescriptor(o, a);
    (!c || ("get" in c ? !o.__esModule : c.writable || c.configurable)) && (c = { enumerable: !0, get: function() {
      return o[a];
    } }), Object.defineProperty(i, s, c);
  } : function(i, o, a, s) {
    s === void 0 && (s = a), i[s] = o[a];
  }), n = ot && ot.__exportStar || function(i, o) {
    for (var a in i) a !== "default" && !Object.prototype.hasOwnProperty.call(o, a) && t(o, i, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = Wi;
  e.default = r.OpenAPIClientAxios, n(Wi, e), n($l, e);
})(Dp);
const J0 = /* @__PURE__ */ fp(Dp), Pt = class Pt {
  constructor() {
  }
  static configure(t) {
    Pt.serverUrl = t;
  }
  static async getInstance() {
    if (!Pt.serverUrl)
      throw new Error("ApiClient not configured. Please call ApiClient.configure(serverUrl) before using it.");
    return Pt.instance ? Pt.instance : (Pt.initializing || (Pt.initializing = (async () => {
      const t = new J0({
        definition: `${this.serverUrl}/wd-media-api/docs.jsonopenapi`,
        transformOperationMethod: (r, i) => (o, a, s) => (i.method === "patch" && (s = s || {}, s.headers = {
          "Content-Type": "application/merge-patch+json",
          ...s.headers
        }), r(o, a, s))
      });
      t.withServer({ url: String(this.serverUrl) });
      const n = await t.init();
      return Pt.instance = n, Pt.initializing = null, n;
    })()), Pt.initializing);
  }
};
Mr(Pt, "instance", null), Mr(Pt, "initializing", null), Mr(Pt, "serverUrl", null);
let Gn = Pt;
const Q0 = {
  items: [],
  status: "idle",
  error: null,
  view: null,
  updateStatus: "idle",
  updateError: null
}, Gr = Ga(
  "fetch",
  async (e) => (await (await Gn.getInstance()).getMedias({ page: e }, null, {
    headers: {
      Accept: "application/ld+json"
    }
  })).data
), na = Ga(
  "patch",
  async (e) => (await (await Gn.getInstance()).patchMedia(e.id, e)).data
), ra = Ga(
  "patchFile",
  async (e) => {
    const t = new FormData();
    return t.append("file", e.file), (await (await Gn.getInstance()).patchMediaFile(e.id, t, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })).data;
  }
), ia = Ga(
  "createMedia",
  async (e) => {
    const t = new FormData();
    return t.append("file", e.file), t.append("category", e.category), (await (await Gn.getInstance()).postMedia(null, t, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })).data;
  }
), Rh = Ip({
  name: "media",
  initialState: Q0,
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
    e.addCase(Gr.pending, (t) => {
      t.status = "loading", t.view = null;
    }).addCase(Gr.fulfilled, (t, n) => {
      t.status = "succeeded", t.items = n.payload["hydra:member"], t.view = n.payload["hydra:view"];
    }).addCase(Gr.rejected, (t, n) => {
      t.status = "failed", t.view = null, t.error = n.error.message || "Failed to fetch media items";
    }), e.addCase(na.pending, (t) => {
      t.updateStatus = "loading";
    }).addCase(na.fulfilled, (t, n) => {
      t.updateStatus = "succeeded";
      const r = t.items.findIndex((i) => i.id === n.payload.id);
      r !== -1 && (t.items[r] = n.payload);
    }).addCase(na.rejected, (t, n) => {
      t.updateStatus = "failed", t.updateError = n.error.message || "Failed to update media item";
    }), e.addCase(ra.pending, (t) => {
      t.updateStatus = "loading";
    }).addCase(ra.fulfilled, (t, n) => {
      t.updateStatus = "succeeded";
      const r = t.items.findIndex((i) => i.id === n.payload.id);
      r !== -1 && (t.items[r] = n.payload);
    }).addCase(ra.rejected, (t, n) => {
      t.updateStatus = "failed", t.updateError = n.error.message || "Failed to update media file item";
    }), e.addCase(ia.pending, (t) => {
      t.updateStatus = "loading";
    }).addCase(ia.fulfilled, (t) => {
      t.updateStatus = "succeeded";
    }).addCase(ia.rejected, (t, n) => {
      t.updateStatus = "failed", t.updateError = n.error.message || "Failed to create media item";
    });
  }
});
Rh.actions;
const ew = Rh.reducer, tw = {
  selectedMedia: null
}, Th = Ip({
  name: "main",
  initialState: tw,
  reducers: {
    setSelectedMedia: (e, t) => {
      e.selectedMedia = t.payload;
    }
  }
}), { setSelectedMedia: Yc } = Th.actions, nw = Th.reducer, rw = Nb({
  reducer: {
    main: nw,
    media: ew
  }
}), iw = async (e) => {
  Gn.configure(e), await Gn.getInstance();
};
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const ow = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), kh = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var aw = {
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
const sw = up(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: i = "",
    children: o,
    iconNode: a,
    ...s
  }, c) => kc(
    "svg",
    {
      ref: c,
      ...aw,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: kh("lucide", i),
      ...s
    },
    [
      ...a.map(([l, u]) => kc(l, u)),
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
const So = (e, t) => {
  const n = up(
    ({ className: r, ...i }, o) => kc(sw, {
      ref: o,
      iconNode: t,
      className: kh(`lucide-${ow(e)}`, r),
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
const cw = So("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ph = So("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const lw = So("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const uw = So("Ellipsis", [
  ["circle", { cx: "12", cy: "12", r: "1", key: "41hilf" }],
  ["circle", { cx: "19", cy: "12", r: "1", key: "1wjl8i" }],
  ["circle", { cx: "5", cy: "12", r: "1", key: "1pcz8c" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const fw = So("GripVertical", [
  ["circle", { cx: "9", cy: "12", r: "1", key: "1vctgf" }],
  ["circle", { cx: "9", cy: "5", r: "1", key: "hp0tcf" }],
  ["circle", { cx: "9", cy: "19", r: "1", key: "fkjjf6" }],
  ["circle", { cx: "15", cy: "12", r: "1", key: "1tmaij" }],
  ["circle", { cx: "15", cy: "5", r: "1", key: "19l28e" }],
  ["circle", { cx: "15", cy: "19", r: "1", key: "f4zoj3" }]
]), {
  createElement: ti,
  createContext: dw,
  createRef: kT,
  forwardRef: Nh,
  useCallback: Tt,
  useContext: Mh,
  useEffect: mr,
  useImperativeHandle: Ih,
  useLayoutEffect: pw,
  useMemo: hw,
  useRef: It,
  useState: Zr
} = _, Mf = _.useId, mw = pw, is = dw(null);
is.displayName = "PanelGroupContext";
const yr = mw, yw = typeof Mf == "function" ? Mf : () => null;
let gw = 0;
function Ul(e = null) {
  const t = yw(), n = It(e || t || null);
  return n.current === null && (n.current = "" + gw++), e ?? n.current;
}
function Dh({
  children: e,
  className: t = "",
  collapsedSize: n,
  collapsible: r,
  defaultSize: i,
  forwardedRef: o,
  id: a,
  maxSize: s,
  minSize: c,
  onCollapse: l,
  onExpand: u,
  onResize: d,
  order: p,
  style: h,
  tagName: m = "div",
  ...y
}) {
  const v = Mh(is);
  if (v === null)
    throw Error("Panel components must be rendered within a PanelGroup container");
  const {
    collapsePanel: b,
    expandPanel: x,
    getPanelSize: S,
    getPanelStyle: A,
    groupId: E,
    isPanelCollapsed: N,
    reevaluatePanelConstraints: P,
    registerPanel: U,
    resizePanel: ue,
    unregisterPanel: ye
  } = v, pe = Ul(a), V = It({
    callbacks: {
      onCollapse: l,
      onExpand: u,
      onResize: d
    },
    constraints: {
      collapsedSize: n,
      collapsible: r,
      defaultSize: i,
      maxSize: s,
      minSize: c
    },
    id: pe,
    idIsFromProps: a !== void 0,
    order: p
  });
  It({
    didLogMissingDefaultSizeWarning: !1
  }), yr(() => {
    const {
      callbacks: B,
      constraints: se
    } = V.current, j = {
      ...se
    };
    V.current.id = pe, V.current.idIsFromProps = a !== void 0, V.current.order = p, B.onCollapse = l, B.onExpand = u, B.onResize = d, se.collapsedSize = n, se.collapsible = r, se.defaultSize = i, se.maxSize = s, se.minSize = c, (j.collapsedSize !== se.collapsedSize || j.collapsible !== se.collapsible || j.maxSize !== se.maxSize || j.minSize !== se.minSize) && P(V.current, j);
  }), yr(() => {
    const B = V.current;
    return U(B), () => {
      ye(B);
    };
  }, [p, pe, U, ye]), Ih(o, () => ({
    collapse: () => {
      b(V.current);
    },
    expand: (B) => {
      x(V.current, B);
    },
    getId() {
      return pe;
    },
    getSize() {
      return S(V.current);
    },
    isCollapsed() {
      return N(V.current);
    },
    isExpanded() {
      return !N(V.current);
    },
    resize: (B) => {
      ue(V.current, B);
    }
  }), [b, x, S, N, pe, ue]);
  const Q = A(V.current, i);
  return ti(m, {
    ...y,
    children: e,
    className: t,
    id: a,
    style: {
      ...Q,
      ...h
    },
    // CSS selectors
    "data-panel": "",
    "data-panel-collapsible": r || void 0,
    "data-panel-group-id": E,
    "data-panel-id": pe,
    "data-panel-size": parseFloat("" + Q.flexGrow).toFixed(1)
  });
}
const jh = Nh((e, t) => ti(Dh, {
  ...e,
  forwardedRef: t
}));
Dh.displayName = "Panel";
jh.displayName = "forwardRef(Panel)";
let Gc = null, fr = null;
function vw(e, t) {
  if (t) {
    const n = (t & Vh) !== 0, r = (t & Uh) !== 0, i = (t & Bh) !== 0, o = (t & Wh) !== 0;
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
function bw() {
  fr !== null && (document.head.removeChild(fr), Gc = null, fr = null);
}
function rc(e, t) {
  const n = vw(e, t);
  Gc !== n && (Gc = n, fr === null && (fr = document.createElement("style"), document.head.appendChild(fr)), fr.innerHTML = `*{cursor: ${n}!important;}`);
}
function Fh(e) {
  return e.type === "keydown";
}
function Lh(e) {
  return e.type.startsWith("pointer");
}
function zh(e) {
  return e.type.startsWith("mouse");
}
function os(e) {
  if (Lh(e)) {
    if (e.isPrimary)
      return {
        x: e.clientX,
        y: e.clientY
      };
  } else if (zh(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  return {
    x: 1 / 0,
    y: 1 / 0
  };
}
function xw() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
function ww(e, t, n) {
  return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function _w(e, t) {
  if (e === t) throw new Error("Cannot compare node with itself");
  const n = {
    a: jf(e),
    b: jf(t)
  };
  let r;
  for (; n.a.at(-1) === n.b.at(-1); )
    e = n.a.pop(), t = n.b.pop(), r = e;
  Ve(r, "Stacking order can only be calculated for elements with a common ancestor");
  const i = {
    a: Df(If(n.a)),
    b: Df(If(n.b))
  };
  if (i.a === i.b) {
    const o = r.childNodes, a = {
      a: n.a.at(-1),
      b: n.b.at(-1)
    };
    let s = o.length;
    for (; s--; ) {
      const c = o[s];
      if (c === a.a) return 1;
      if (c === a.b) return -1;
    }
  }
  return Math.sign(i.a - i.b);
}
const Ew = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function Sw(e) {
  var t;
  const n = getComputedStyle((t = $h(e)) !== null && t !== void 0 ? t : e).display;
  return n === "flex" || n === "inline-flex";
}
function Cw(e) {
  const t = getComputedStyle(e);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || Sw(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || Ew.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function If(e) {
  let t = e.length;
  for (; t--; ) {
    const n = e[t];
    if (Ve(n, "Missing node"), Cw(n)) return n;
  }
  return null;
}
function Df(e) {
  return e && Number(getComputedStyle(e).zIndex) || 0;
}
function jf(e) {
  const t = [];
  for (; e; )
    t.push(e), e = $h(e);
  return t;
}
function $h(e) {
  const {
    parentNode: t
  } = e;
  return t && t instanceof ShadowRoot ? t.host : t;
}
const Vh = 1, Uh = 2, Bh = 4, Wh = 8, Aw = xw() === "coarse";
let en = [], qi = !1, Bn = /* @__PURE__ */ new Map(), as = /* @__PURE__ */ new Map();
const Yi = /* @__PURE__ */ new Set();
function Ow(e, t, n, r, i) {
  var o;
  const {
    ownerDocument: a
  } = t, s = {
    direction: n,
    element: t,
    hitAreaMargins: r,
    setResizeHandlerState: i
  }, c = (o = Bn.get(a)) !== null && o !== void 0 ? o : 0;
  return Bn.set(a, c + 1), Yi.add(s), wa(), function() {
    var u;
    as.delete(e), Yi.delete(s);
    const d = (u = Bn.get(a)) !== null && u !== void 0 ? u : 1;
    if (Bn.set(a, d - 1), wa(), d === 1 && Bn.delete(a), en.includes(s)) {
      const p = en.indexOf(s);
      p >= 0 && en.splice(p, 1), Wl();
    }
  };
}
function Ff(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = os(e);
  qi = !0, Bl({
    target: t,
    x: n,
    y: r
  }), wa(), en.length > 0 && (_a("down", e), e.preventDefault(), e.stopPropagation());
}
function xi(e) {
  const {
    x: t,
    y: n
  } = os(e);
  if (e.buttons === 0 && (qi = !1, _a("up", e)), !qi) {
    const {
      target: r
    } = e;
    Bl({
      target: r,
      x: t,
      y: n
    });
  }
  _a("move", e), Wl(), en.length > 0 && e.preventDefault();
}
function Ir(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = os(e);
  as.clear(), qi = !1, en.length > 0 && e.preventDefault(), _a("up", e), Bl({
    target: t,
    x: n,
    y: r
  }), Wl(), wa();
}
function Bl({
  target: e,
  x: t,
  y: n
}) {
  en.splice(0);
  let r = null;
  e instanceof HTMLElement && (r = e), Yi.forEach((i) => {
    const {
      element: o,
      hitAreaMargins: a
    } = i, s = o.getBoundingClientRect(), {
      bottom: c,
      left: l,
      right: u,
      top: d
    } = s, p = Aw ? a.coarse : a.fine;
    if (t >= l - p && t <= u + p && n >= d - p && n <= c + p) {
      if (r !== null && o !== r && !o.contains(r) && !r.contains(o) && // Calculating stacking order has a cost, so we should avoid it if possible
      // That is why we only check potentially intersecting handles,
      // and why we skip if the event target is within the handle's DOM
      _w(r, o) > 0) {
        let m = r, y = !1;
        for (; m && !m.contains(o); ) {
          if (ww(m.getBoundingClientRect(), s)) {
            y = !0;
            break;
          }
          m = m.parentElement;
        }
        if (y)
          return;
      }
      en.push(i);
    }
  });
}
function ic(e, t) {
  as.set(e, t);
}
function Wl() {
  let e = !1, t = !1;
  en.forEach((r) => {
    const {
      direction: i
    } = r;
    i === "horizontal" ? e = !0 : t = !0;
  });
  let n = 0;
  as.forEach((r) => {
    n |= r;
  }), e && t ? rc("intersection", n) : e ? rc("horizontal", n) : t ? rc("vertical", n) : bw();
}
function wa() {
  Bn.forEach((e, t) => {
    const {
      body: n
    } = t;
    n.removeEventListener("contextmenu", Ir), n.removeEventListener("pointerdown", Ff), n.removeEventListener("pointerleave", xi), n.removeEventListener("pointermove", xi);
  }), window.removeEventListener("pointerup", Ir), window.removeEventListener("pointercancel", Ir), Yi.size > 0 && (qi ? (en.length > 0 && Bn.forEach((e, t) => {
    const {
      body: n
    } = t;
    e > 0 && (n.addEventListener("contextmenu", Ir), n.addEventListener("pointerleave", xi), n.addEventListener("pointermove", xi));
  }), window.addEventListener("pointerup", Ir), window.addEventListener("pointercancel", Ir)) : Bn.forEach((e, t) => {
    const {
      body: n
    } = t;
    e > 0 && (n.addEventListener("pointerdown", Ff, {
      capture: !0
    }), n.addEventListener("pointermove", xi));
  }));
}
function _a(e, t) {
  Yi.forEach((n) => {
    const {
      setResizeHandlerState: r
    } = n, i = en.includes(n);
    r(e, i, t);
  });
}
function Rw() {
  const [e, t] = Zr(0);
  return Tt(() => t((n) => n + 1), []);
}
function Ve(e, t) {
  if (!e)
    throw console.error(t), Error(t);
}
const Hl = 10;
function Er(e, t, n = Hl) {
  return e.toFixed(n) === t.toFixed(n) ? 0 : e > t ? 1 : -1;
}
function Sn(e, t, n = Hl) {
  return Er(e, t, n) === 0;
}
function Ft(e, t, n) {
  return Er(e, t, n) === 0;
}
function Tw(e, t, n) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++) {
    const i = e[r], o = t[r];
    if (!Ft(i, o, n))
      return !1;
  }
  return !0;
}
function Br({
  panelConstraints: e,
  panelIndex: t,
  size: n
}) {
  const r = e[t];
  Ve(r != null, `Panel constraints not found for index ${t}`);
  let {
    collapsedSize: i = 0,
    collapsible: o,
    maxSize: a = 100,
    minSize: s = 0
  } = r;
  if (Er(n, s) < 0)
    if (o) {
      const c = (i + s) / 2;
      Er(n, c) < 0 ? n = i : n = s;
    } else
      n = s;
  return n = Math.min(a, n), n = parseFloat(n.toFixed(Hl)), n;
}
function Ai({
  delta: e,
  initialLayout: t,
  panelConstraints: n,
  pivotIndices: r,
  prevLayout: i,
  trigger: o
}) {
  if (Ft(e, 0))
    return t;
  const a = [...t], [s, c] = r;
  Ve(s != null, "Invalid first pivot index"), Ve(c != null, "Invalid second pivot index");
  let l = 0;
  if (o === "keyboard") {
    {
      const d = e < 0 ? c : s, p = n[d];
      Ve(p, `Panel constraints not found for index ${d}`);
      const {
        collapsedSize: h = 0,
        collapsible: m,
        minSize: y = 0
      } = p;
      if (m) {
        const v = t[d];
        if (Ve(v != null, `Previous layout not found for panel index ${d}`), Ft(v, h)) {
          const b = y - v;
          Er(b, Math.abs(e)) > 0 && (e = e < 0 ? 0 - b : b);
        }
      }
    }
    {
      const d = e < 0 ? s : c, p = n[d];
      Ve(p, `No panel constraints found for index ${d}`);
      const {
        collapsedSize: h = 0,
        collapsible: m,
        minSize: y = 0
      } = p;
      if (m) {
        const v = t[d];
        if (Ve(v != null, `Previous layout not found for panel index ${d}`), Ft(v, y)) {
          const b = v - h;
          Er(b, Math.abs(e)) > 0 && (e = e < 0 ? 0 - b : b);
        }
      }
    }
  }
  {
    const d = e < 0 ? 1 : -1;
    let p = e < 0 ? c : s, h = 0;
    for (; ; ) {
      const y = t[p];
      Ve(y != null, `Previous layout not found for panel index ${p}`);
      const b = Br({
        panelConstraints: n,
        panelIndex: p,
        size: 100
      }) - y;
      if (h += b, p += d, p < 0 || p >= n.length)
        break;
    }
    const m = Math.min(Math.abs(e), Math.abs(h));
    e = e < 0 ? 0 - m : m;
  }
  {
    let p = e < 0 ? s : c;
    for (; p >= 0 && p < n.length; ) {
      const h = Math.abs(e) - Math.abs(l), m = t[p];
      Ve(m != null, `Previous layout not found for panel index ${p}`);
      const y = m - h, v = Br({
        panelConstraints: n,
        panelIndex: p,
        size: y
      });
      if (!Ft(m, v) && (l += m - v, a[p] = v, l.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, {
        numeric: !0
      }) >= 0))
        break;
      e < 0 ? p-- : p++;
    }
  }
  if (Tw(i, a))
    return i;
  {
    const d = e < 0 ? c : s, p = t[d];
    Ve(p != null, `Previous layout not found for panel index ${d}`);
    const h = p + l, m = Br({
      panelConstraints: n,
      panelIndex: d,
      size: h
    });
    if (a[d] = m, !Ft(m, h)) {
      let y = h - m, b = e < 0 ? c : s;
      for (; b >= 0 && b < n.length; ) {
        const x = a[b];
        Ve(x != null, `Previous layout not found for panel index ${b}`);
        const S = x + y, A = Br({
          panelConstraints: n,
          panelIndex: b,
          size: S
        });
        if (Ft(x, A) || (y -= A - x, a[b] = A), Ft(y, 0))
          break;
        e > 0 ? b-- : b++;
      }
    }
  }
  const u = a.reduce((d, p) => p + d, 0);
  return Ft(u, 100) ? a : i;
}
function kw({
  layout: e,
  panelsArray: t,
  pivotIndices: n
}) {
  let r = 0, i = 100, o = 0, a = 0;
  const s = n[0];
  Ve(s != null, "No pivot index found"), t.forEach((d, p) => {
    const {
      constraints: h
    } = d, {
      maxSize: m = 100,
      minSize: y = 0
    } = h;
    p === s ? (r = y, i = m) : (o += y, a += m);
  });
  const c = Math.min(i, 100 - o), l = Math.max(r, 100 - a), u = e[s];
  return {
    valueMax: c,
    valueMin: l,
    valueNow: u
  };
}
function Gi(e, t = document) {
  return Array.from(t.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`));
}
function Hh(e, t, n = document) {
  const i = Gi(e, n).findIndex((o) => o.getAttribute("data-panel-resize-handle-id") === t);
  return i ?? null;
}
function qh(e, t, n) {
  const r = Hh(e, t, n);
  return r != null ? [r, r + 1] : [-1, -1];
}
function Yh(e, t = document) {
  var n;
  if (t instanceof HTMLElement && (t == null || (n = t.dataset) === null || n === void 0 ? void 0 : n.panelGroupId) == e)
    return t;
  const r = t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);
  return r || null;
}
function ss(e, t = document) {
  const n = t.querySelector(`[data-panel-resize-handle-id="${e}"]`);
  return n || null;
}
function Pw(e, t, n, r = document) {
  var i, o, a, s;
  const c = ss(t, r), l = Gi(e, r), u = c ? l.indexOf(c) : -1, d = (i = (o = n[u]) === null || o === void 0 ? void 0 : o.id) !== null && i !== void 0 ? i : null, p = (a = (s = n[u + 1]) === null || s === void 0 ? void 0 : s.id) !== null && a !== void 0 ? a : null;
  return [d, p];
}
function Nw({
  committedValuesRef: e,
  eagerValuesRef: t,
  groupId: n,
  layout: r,
  panelDataArray: i,
  panelGroupElement: o,
  setLayout: a
}) {
  It({
    didWarnAboutMissingResizeHandle: !1
  }), yr(() => {
    if (!o)
      return;
    const s = Gi(n, o);
    for (let c = 0; c < i.length - 1; c++) {
      const {
        valueMax: l,
        valueMin: u,
        valueNow: d
      } = kw({
        layout: r,
        panelsArray: i,
        pivotIndices: [c, c + 1]
      }), p = s[c];
      if (p != null) {
        const h = i[c];
        Ve(h, `No panel data found for index "${c}"`), p.setAttribute("aria-controls", h.id), p.setAttribute("aria-valuemax", "" + Math.round(l)), p.setAttribute("aria-valuemin", "" + Math.round(u)), p.setAttribute("aria-valuenow", d != null ? "" + Math.round(d) : "");
      }
    }
    return () => {
      s.forEach((c, l) => {
        c.removeAttribute("aria-controls"), c.removeAttribute("aria-valuemax"), c.removeAttribute("aria-valuemin"), c.removeAttribute("aria-valuenow");
      });
    };
  }, [n, r, i, o]), mr(() => {
    if (!o)
      return;
    const s = t.current;
    Ve(s, "Eager values not found");
    const {
      panelDataArray: c
    } = s, l = Yh(n, o);
    Ve(l != null, `No group found for id "${n}"`);
    const u = Gi(n, o);
    Ve(u, `No resize handles found for group id "${n}"`);
    const d = u.map((p) => {
      const h = p.getAttribute("data-panel-resize-handle-id");
      Ve(h, "Resize handle element has no handle id attribute");
      const [m, y] = Pw(n, h, c, o);
      if (m == null || y == null)
        return () => {
        };
      const v = (b) => {
        if (!b.defaultPrevented)
          switch (b.key) {
            case "Enter": {
              b.preventDefault();
              const x = c.findIndex((S) => S.id === m);
              if (x >= 0) {
                const S = c[x];
                Ve(S, `No panel data found for index ${x}`);
                const A = r[x], {
                  collapsedSize: E = 0,
                  collapsible: N,
                  minSize: P = 0
                } = S.constraints;
                if (A != null && N) {
                  const U = Ai({
                    delta: Ft(A, E) ? P - E : E - A,
                    initialLayout: r,
                    panelConstraints: c.map((ue) => ue.constraints),
                    pivotIndices: qh(n, h, o),
                    prevLayout: r,
                    trigger: "keyboard"
                  });
                  r !== U && a(U);
                }
              }
              break;
            }
          }
      };
      return p.addEventListener("keydown", v), () => {
        p.removeEventListener("keydown", v);
      };
    });
    return () => {
      d.forEach((p) => p());
    };
  }, [o, e, t, n, r, i, a]);
}
function Lf(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Gh(e, t) {
  const n = e === "horizontal", {
    x: r,
    y: i
  } = os(t);
  return n ? r : i;
}
function Mw(e, t, n, r, i) {
  const o = n === "horizontal", a = ss(t, i);
  Ve(a, `No resize handle element found for id "${t}"`);
  const s = a.getAttribute("data-panel-group-id");
  Ve(s, "Resize handle element has no group id attribute");
  let {
    initialCursorPosition: c
  } = r;
  const l = Gh(n, e), u = Yh(s, i);
  Ve(u, `No group element found for id "${s}"`);
  const d = u.getBoundingClientRect(), p = o ? d.width : d.height;
  return (l - c) / p * 100;
}
function Iw(e, t, n, r, i, o) {
  if (Fh(e)) {
    const a = n === "horizontal";
    let s = 0;
    e.shiftKey ? s = 100 : i != null ? s = i : s = 10;
    let c = 0;
    switch (e.key) {
      case "ArrowDown":
        c = a ? 0 : s;
        break;
      case "ArrowLeft":
        c = a ? -s : 0;
        break;
      case "ArrowRight":
        c = a ? s : 0;
        break;
      case "ArrowUp":
        c = a ? 0 : -s;
        break;
      case "End":
        c = 100;
        break;
      case "Home":
        c = -100;
        break;
    }
    return c;
  } else
    return r == null ? 0 : Mw(e, t, n, r, o);
}
function Dw({
  panelDataArray: e
}) {
  const t = Array(e.length), n = e.map((o) => o.constraints);
  let r = 0, i = 100;
  for (let o = 0; o < e.length; o++) {
    const a = n[o];
    Ve(a, `Panel constraints not found for index ${o}`);
    const {
      defaultSize: s
    } = a;
    s != null && (r++, t[o] = s, i -= s);
  }
  for (let o = 0; o < e.length; o++) {
    const a = n[o];
    Ve(a, `Panel constraints not found for index ${o}`);
    const {
      defaultSize: s
    } = a;
    if (s != null)
      continue;
    const c = e.length - r, l = i / c;
    r++, t[o] = l, i -= l;
  }
  return t;
}
function Dr(e, t, n) {
  t.forEach((r, i) => {
    const o = e[i];
    Ve(o, `Panel data not found for index ${i}`);
    const {
      callbacks: a,
      constraints: s,
      id: c
    } = o, {
      collapsedSize: l = 0,
      collapsible: u
    } = s, d = n[c];
    if (d == null || r !== d) {
      n[c] = r;
      const {
        onCollapse: p,
        onExpand: h,
        onResize: m
      } = a;
      m && m(r, d), u && (p || h) && (h && (d == null || Sn(d, l)) && !Sn(r, l) && h(), p && (d == null || !Sn(d, l)) && Sn(r, l) && p());
    }
  });
}
function Vo(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] != t[n])
      return !1;
  return !0;
}
function jw({
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
function Fw(e, t = 10) {
  let n = null;
  return (...i) => {
    n !== null && clearTimeout(n), n = setTimeout(() => {
      e(...i);
    }, t);
  };
}
function zf(e) {
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
function Zh(e) {
  return `react-resizable-panels:${e}`;
}
function Kh(e) {
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
function Xh(e, t) {
  try {
    const n = Zh(e), r = t.getItem(n);
    if (r) {
      const i = JSON.parse(r);
      if (typeof i == "object" && i != null)
        return i;
    }
  } catch {
  }
  return null;
}
function Lw(e, t, n) {
  var r, i;
  const o = (r = Xh(e, n)) !== null && r !== void 0 ? r : {}, a = Kh(t);
  return (i = o[a]) !== null && i !== void 0 ? i : null;
}
function zw(e, t, n, r, i) {
  var o;
  const a = Zh(e), s = Kh(t), c = (o = Xh(e, i)) !== null && o !== void 0 ? o : {};
  c[s] = {
    expandToSizes: Object.fromEntries(n.entries()),
    layout: r
  };
  try {
    i.setItem(a, JSON.stringify(c));
  } catch (l) {
    console.error(l);
  }
}
function $f({
  layout: e,
  panelConstraints: t
}) {
  const n = [...e], r = n.reduce((o, a) => o + a, 0);
  if (n.length !== t.length)
    throw Error(`Invalid ${t.length} panel layout: ${n.map((o) => `${o}%`).join(", ")}`);
  if (!Ft(r, 100))
    for (let o = 0; o < t.length; o++) {
      const a = n[o];
      Ve(a != null, `No layout data found for index ${o}`);
      const s = 100 / r * a;
      n[o] = s;
    }
  let i = 0;
  for (let o = 0; o < t.length; o++) {
    const a = n[o];
    Ve(a != null, `No layout data found for index ${o}`);
    const s = Br({
      panelConstraints: t,
      panelIndex: o,
      size: a
    });
    a != s && (i += a - s, n[o] = s);
  }
  if (!Ft(i, 0))
    for (let o = 0; o < t.length; o++) {
      const a = n[o];
      Ve(a != null, `No layout data found for index ${o}`);
      const s = a + i, c = Br({
        panelConstraints: t,
        panelIndex: o,
        size: s
      });
      if (a !== c && (i -= c - a, n[o] = c, Ft(i, 0)))
        break;
    }
  return n;
}
const $w = 100, Oi = {
  getItem: (e) => (zf(Oi), Oi.getItem(e)),
  setItem: (e, t) => {
    zf(Oi), Oi.setItem(e, t);
  }
}, Vf = {};
function Jh({
  autoSaveId: e = null,
  children: t,
  className: n = "",
  direction: r,
  forwardedRef: i,
  id: o = null,
  onLayout: a = null,
  keyboardResizeBy: s = null,
  storage: c = Oi,
  style: l,
  tagName: u = "div",
  ...d
}) {
  const p = Ul(o), h = It(null), [m, y] = Zr(null), [v, b] = Zr([]), x = Rw(), S = It({}), A = It(/* @__PURE__ */ new Map()), E = It(0), N = It({
    autoSaveId: e,
    direction: r,
    dragState: m,
    id: p,
    keyboardResizeBy: s,
    onLayout: a,
    storage: c
  }), P = It({
    layout: v,
    panelDataArray: [],
    panelDataArrayChanged: !1
  });
  It({
    didLogIdAndOrderWarning: !1,
    didLogPanelConstraintsWarning: !1,
    prevPanelIds: []
  }), Ih(i, () => ({
    getId: () => N.current.id,
    getLayout: () => {
      const {
        layout: I
      } = P.current;
      return I;
    },
    setLayout: (I) => {
      const {
        onLayout: X
      } = N.current, {
        layout: re,
        panelDataArray: Y
      } = P.current, G = $f({
        layout: I,
        panelConstraints: Y.map((ie) => ie.constraints)
      });
      Lf(re, G) || (b(G), P.current.layout = G, X && X(G), Dr(Y, G, S.current));
    }
  }), []), yr(() => {
    N.current.autoSaveId = e, N.current.direction = r, N.current.dragState = m, N.current.id = p, N.current.onLayout = a, N.current.storage = c;
  }), Nw({
    committedValuesRef: N,
    eagerValuesRef: P,
    groupId: p,
    layout: v,
    panelDataArray: P.current.panelDataArray,
    setLayout: b,
    panelGroupElement: h.current
  }), mr(() => {
    const {
      panelDataArray: I
    } = P.current;
    if (e) {
      if (v.length === 0 || v.length !== I.length)
        return;
      let X = Vf[e];
      X == null && (X = Fw(zw, $w), Vf[e] = X);
      const re = [...I], Y = new Map(A.current);
      X(e, re, Y, v, c);
    }
  }, [e, v, c]), mr(() => {
  });
  const U = Tt((I) => {
    const {
      onLayout: X
    } = N.current, {
      layout: re,
      panelDataArray: Y
    } = P.current;
    if (I.constraints.collapsible) {
      const G = Y.map((Pe) => Pe.constraints), {
        collapsedSize: ie = 0,
        panelSize: le,
        pivotIndices: ve
      } = cr(Y, I, re);
      if (Ve(le != null, `Panel size not found for panel "${I.id}"`), !Sn(le, ie)) {
        A.current.set(I.id, le);
        const ee = $r(Y, I) === Y.length - 1 ? le - ie : ie - le, Oe = Ai({
          delta: ee,
          initialLayout: re,
          panelConstraints: G,
          pivotIndices: ve,
          prevLayout: re,
          trigger: "imperative-api"
        });
        Vo(re, Oe) || (b(Oe), P.current.layout = Oe, X && X(Oe), Dr(Y, Oe, S.current));
      }
    }
  }, []), ue = Tt((I, X) => {
    const {
      onLayout: re
    } = N.current, {
      layout: Y,
      panelDataArray: G
    } = P.current;
    if (I.constraints.collapsible) {
      const ie = G.map((Be) => Be.constraints), {
        collapsedSize: le = 0,
        panelSize: ve = 0,
        minSize: Pe = 0,
        pivotIndices: ee
      } = cr(G, I, Y), Oe = X ?? Pe;
      if (Sn(ve, le)) {
        const Be = A.current.get(I.id), ct = Be != null && Be >= Oe ? Be : Oe, $e = $r(G, I) === G.length - 1 ? ve - ct : ct - ve, C = Ai({
          delta: $e,
          initialLayout: Y,
          panelConstraints: ie,
          pivotIndices: ee,
          prevLayout: Y,
          trigger: "imperative-api"
        });
        Vo(Y, C) || (b(C), P.current.layout = C, re && re(C), Dr(G, C, S.current));
      }
    }
  }, []), ye = Tt((I) => {
    const {
      layout: X,
      panelDataArray: re
    } = P.current, {
      panelSize: Y
    } = cr(re, I, X);
    return Ve(Y != null, `Panel size not found for panel "${I.id}"`), Y;
  }, []), pe = Tt((I, X) => {
    const {
      panelDataArray: re
    } = P.current, Y = $r(re, I);
    return jw({
      defaultSize: X,
      dragState: m,
      layout: v,
      panelData: re,
      panelIndex: Y
    });
  }, [m, v]), V = Tt((I) => {
    const {
      layout: X,
      panelDataArray: re
    } = P.current, {
      collapsedSize: Y = 0,
      collapsible: G,
      panelSize: ie
    } = cr(re, I, X);
    return Ve(ie != null, `Panel size not found for panel "${I.id}"`), G === !0 && Sn(ie, Y);
  }, []), Q = Tt((I) => {
    const {
      layout: X,
      panelDataArray: re
    } = P.current, {
      collapsedSize: Y = 0,
      collapsible: G,
      panelSize: ie
    } = cr(re, I, X);
    return Ve(ie != null, `Panel size not found for panel "${I.id}"`), !G || Er(ie, Y) > 0;
  }, []), B = Tt((I) => {
    const {
      panelDataArray: X
    } = P.current;
    X.push(I), X.sort((re, Y) => {
      const G = re.order, ie = Y.order;
      return G == null && ie == null ? 0 : G == null ? -1 : ie == null ? 1 : G - ie;
    }), P.current.panelDataArrayChanged = !0, x();
  }, [x]);
  yr(() => {
    if (P.current.panelDataArrayChanged) {
      P.current.panelDataArrayChanged = !1;
      const {
        autoSaveId: I,
        onLayout: X,
        storage: re
      } = N.current, {
        layout: Y,
        panelDataArray: G
      } = P.current;
      let ie = null;
      if (I) {
        const ve = Lw(I, G, re);
        ve && (A.current = new Map(Object.entries(ve.expandToSizes)), ie = ve.layout);
      }
      ie == null && (ie = Dw({
        panelDataArray: G
      }));
      const le = $f({
        layout: ie,
        panelConstraints: G.map((ve) => ve.constraints)
      });
      Lf(Y, le) || (b(le), P.current.layout = le, X && X(le), Dr(G, le, S.current));
    }
  }), yr(() => {
    const I = P.current;
    return () => {
      I.layout = [];
    };
  }, []);
  const se = Tt((I) => function(re) {
    re.preventDefault();
    const Y = h.current;
    if (!Y)
      return () => null;
    const {
      direction: G,
      dragState: ie,
      id: le,
      keyboardResizeBy: ve,
      onLayout: Pe
    } = N.current, {
      layout: ee,
      panelDataArray: Oe
    } = P.current, {
      initialLayout: Be
    } = ie ?? {}, ct = qh(le, I, Y);
    let et = Iw(re, I, G, ie, ve, Y);
    const $e = G === "horizontal";
    document.dir === "rtl" && $e && (et = -et);
    const C = Oe.map((f) => f.constraints), k = Ai({
      delta: et,
      initialLayout: Be ?? ee,
      panelConstraints: C,
      pivotIndices: ct,
      prevLayout: ee,
      trigger: Fh(re) ? "keyboard" : "mouse-or-touch"
    }), D = !Vo(ee, k);
    (Lh(re) || zh(re)) && E.current != et && (E.current = et, D ? ic(I, 0) : $e ? ic(I, et < 0 ? Vh : Uh) : ic(I, et < 0 ? Bh : Wh)), D && (b(k), P.current.layout = k, Pe && Pe(k), Dr(Oe, k, S.current));
  }, []), j = Tt((I, X) => {
    const {
      onLayout: re
    } = N.current, {
      layout: Y,
      panelDataArray: G
    } = P.current, ie = G.map((Be) => Be.constraints), {
      panelSize: le,
      pivotIndices: ve
    } = cr(G, I, Y);
    Ve(le != null, `Panel size not found for panel "${I.id}"`);
    const ee = $r(G, I) === G.length - 1 ? le - X : X - le, Oe = Ai({
      delta: ee,
      initialLayout: Y,
      panelConstraints: ie,
      pivotIndices: ve,
      prevLayout: Y,
      trigger: "imperative-api"
    });
    Vo(Y, Oe) || (b(Oe), P.current.layout = Oe, re && re(Oe), Dr(G, Oe, S.current));
  }, []), fe = Tt((I, X) => {
    const {
      layout: re,
      panelDataArray: Y
    } = P.current, {
      collapsedSize: G = 0,
      collapsible: ie
    } = X, {
      collapsedSize: le = 0,
      collapsible: ve,
      maxSize: Pe = 100,
      minSize: ee = 0
    } = I.constraints, {
      panelSize: Oe
    } = cr(Y, I, re);
    Oe != null && (ie && ve && Sn(Oe, G) ? Sn(G, le) || j(I, le) : Oe < ee ? j(I, ee) : Oe > Pe && j(I, Pe));
  }, [j]), _e = Tt((I, X) => {
    const {
      direction: re
    } = N.current, {
      layout: Y
    } = P.current;
    if (!h.current)
      return;
    const G = ss(I, h.current);
    Ve(G, `Drag handle element not found for id "${I}"`);
    const ie = Gh(re, X);
    y({
      dragHandleId: I,
      dragHandleRect: G.getBoundingClientRect(),
      initialCursorPosition: ie,
      initialLayout: Y
    });
  }, []), J = Tt(() => {
    y(null);
  }, []), L = Tt((I) => {
    const {
      panelDataArray: X
    } = P.current, re = $r(X, I);
    re >= 0 && (X.splice(re, 1), delete S.current[I.id], P.current.panelDataArrayChanged = !0, x());
  }, [x]), q = hw(() => ({
    collapsePanel: U,
    direction: r,
    dragState: m,
    expandPanel: ue,
    getPanelSize: ye,
    getPanelStyle: pe,
    groupId: p,
    isPanelCollapsed: V,
    isPanelExpanded: Q,
    reevaluatePanelConstraints: fe,
    registerPanel: B,
    registerResizeHandle: se,
    resizePanel: j,
    startDragging: _e,
    stopDragging: J,
    unregisterPanel: L,
    panelGroupElement: h.current
  }), [U, m, r, ue, ye, pe, p, V, Q, fe, B, se, j, _e, J, L]), ge = {
    display: "flex",
    flexDirection: r === "horizontal" ? "row" : "column",
    height: "100%",
    overflow: "hidden",
    width: "100%"
  };
  return ti(is.Provider, {
    value: q
  }, ti(u, {
    ...d,
    children: t,
    className: n,
    id: o,
    ref: h,
    style: {
      ...ge,
      ...l
    },
    // CSS selectors
    "data-panel-group": "",
    "data-panel-group-direction": r,
    "data-panel-group-id": p
  }));
}
const Qh = Nh((e, t) => ti(Jh, {
  ...e,
  forwardedRef: t
}));
Jh.displayName = "PanelGroup";
Qh.displayName = "forwardRef(PanelGroup)";
function $r(e, t) {
  return e.findIndex((n) => n === t || n.id === t.id);
}
function cr(e, t, n) {
  const r = $r(e, t), o = r === e.length - 1 ? [r - 1, r] : [r, r + 1], a = n[r];
  return {
    ...t.constraints,
    panelSize: a,
    pivotIndices: o
  };
}
function Vw({
  disabled: e,
  handleId: t,
  resizeHandler: n,
  panelGroupElement: r
}) {
  mr(() => {
    if (e || n == null || r == null)
      return;
    const i = ss(t, r);
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
            Ve(s, `No group element found for id "${s}"`);
            const c = Gi(s, r), l = Hh(s, t, r);
            Ve(l !== null, `No resize element found for id "${t}"`);
            const u = a.shiftKey ? l > 0 ? l - 1 : c.length - 1 : l + 1 < c.length ? l + 1 : 0;
            c[u].focus();
            break;
          }
        }
    };
    return i.addEventListener("keydown", o), () => {
      i.removeEventListener("keydown", o);
    };
  }, [r, e, t, n]);
}
function em({
  children: e = null,
  className: t = "",
  disabled: n = !1,
  hitAreaMargins: r,
  id: i,
  onBlur: o,
  onDragging: a,
  onFocus: s,
  style: c = {},
  tabIndex: l = 0,
  tagName: u = "div",
  ...d
}) {
  var p, h;
  const m = It(null), y = It({
    onDragging: a
  });
  mr(() => {
    y.current.onDragging = a;
  });
  const v = Mh(is);
  if (v === null)
    throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");
  const {
    direction: b,
    groupId: x,
    registerResizeHandle: S,
    startDragging: A,
    stopDragging: E,
    panelGroupElement: N
  } = v, P = Ul(i), [U, ue] = Zr("inactive"), [ye, pe] = Zr(!1), [V, Q] = Zr(null), B = It({
    state: U
  });
  yr(() => {
    B.current.state = U;
  }), mr(() => {
    if (n)
      Q(null);
    else {
      const _e = S(P);
      Q(() => _e);
    }
  }, [n, P, S]);
  const se = (p = r == null ? void 0 : r.coarse) !== null && p !== void 0 ? p : 15, j = (h = r == null ? void 0 : r.fine) !== null && h !== void 0 ? h : 5;
  return mr(() => {
    if (n || V == null)
      return;
    const _e = m.current;
    return Ve(_e, "Element ref not attached"), Ow(P, _e, b, {
      coarse: se,
      fine: j
    }, (L, q, ge) => {
      if (q)
        switch (L) {
          case "down": {
            ue("drag"), A(P, ge);
            const {
              onDragging: I
            } = y.current;
            I && I(!0);
            break;
          }
          case "move": {
            const {
              state: I
            } = B.current;
            I !== "drag" && ue("hover"), V(ge);
            break;
          }
          case "up": {
            ue("hover"), E();
            const {
              onDragging: I
            } = y.current;
            I && I(!1);
            break;
          }
        }
      else
        ue("inactive");
    });
  }, [se, b, n, j, S, P, V, A, E]), Vw({
    disabled: n,
    handleId: P,
    resizeHandler: V,
    panelGroupElement: N
  }), ti(u, {
    ...d,
    children: e,
    className: t,
    id: i,
    onBlur: () => {
      pe(!1), o == null || o();
    },
    onFocus: () => {
      pe(!0), s == null || s();
    },
    ref: m,
    role: "separator",
    style: {
      ...{
        touchAction: "none",
        userSelect: "none"
      },
      ...c
    },
    tabIndex: l,
    // CSS selectors
    "data-panel-group-direction": b,
    "data-panel-group-id": x,
    "data-resize-handle": "",
    "data-resize-handle-active": U === "drag" ? "pointer" : ye ? "keyboard" : void 0,
    "data-resize-handle-state": U,
    "data-panel-resize-handle-enabled": !n,
    "data-panel-resize-handle-id": P
  });
}
em.displayName = "PanelResizeHandle";
function tm(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var i = e.length;
    for (t = 0; t < i; t++) e[t] && (n = tm(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Uw() {
  for (var e, t, n = 0, r = "", i = arguments.length; n < i; n++) (e = arguments[n]) && (t = tm(e)) && (r && (r += " "), r += t);
  return r;
}
const ql = "-";
function Bw(e) {
  const t = Hw(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  function i(a) {
    const s = a.split(ql);
    return s[0] === "" && s.length !== 1 && s.shift(), nm(s, t) || Ww(a);
  }
  function o(a, s) {
    const c = n[a] || [];
    return s && r[a] ? [...c, ...r[a]] : c;
  }
  return {
    getClassGroupId: i,
    getConflictingClassGroupIds: o
  };
}
function nm(e, t) {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), i = r ? nm(e.slice(1), r) : void 0;
  if (i)
    return i;
  if (t.validators.length === 0)
    return;
  const o = e.join(ql);
  return (a = t.validators.find(({
    validator: s
  }) => s(o))) == null ? void 0 : a.classGroupId;
}
const Uf = /^\[(.+)\]$/;
function Ww(e) {
  if (Uf.test(e)) {
    const t = Uf.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Hw(e) {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Yw(Object.entries(e.classGroups), n).forEach(([o, a]) => {
    Zc(a, r, o, t);
  }), r;
}
function Zc(e, t, n, r) {
  e.forEach((i) => {
    if (typeof i == "string") {
      const o = i === "" ? t : Bf(t, i);
      o.classGroupId = n;
      return;
    }
    if (typeof i == "function") {
      if (qw(i)) {
        Zc(i(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: i,
        classGroupId: n
      });
      return;
    }
    Object.entries(i).forEach(([o, a]) => {
      Zc(a, Bf(t, o), n, r);
    });
  });
}
function Bf(e, t) {
  let n = e;
  return t.split(ql).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function qw(e) {
  return e.isThemeGetter;
}
function Yw(e, t) {
  return t ? e.map(([n, r]) => {
    const i = r.map((o) => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([a, s]) => [t + a, s])) : o);
    return [n, i];
  }) : e;
}
function Gw(e) {
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
const rm = "!";
function Zw(e) {
  const t = e.separator, n = t.length === 1, r = t[0], i = t.length;
  return function(a) {
    const s = [];
    let c = 0, l = 0, u;
    for (let y = 0; y < a.length; y++) {
      let v = a[y];
      if (c === 0) {
        if (v === r && (n || a.slice(y, y + i) === t)) {
          s.push(a.slice(l, y)), l = y + i;
          continue;
        }
        if (v === "/") {
          u = y;
          continue;
        }
      }
      v === "[" ? c++ : v === "]" && c--;
    }
    const d = s.length === 0 ? a : a.substring(l), p = d.startsWith(rm), h = p ? d.substring(1) : d, m = u && u > l ? u - l : void 0;
    return {
      modifiers: s,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: m
    };
  };
}
function Kw(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}
function Xw(e) {
  return {
    cache: Gw(e.cacheSize),
    splitModifiers: Zw(e),
    ...Bw(e)
  };
}
const Jw = /\s+/;
function Qw(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: i
  } = t, o = /* @__PURE__ */ new Set();
  return e.trim().split(Jw).map((a) => {
    const {
      modifiers: s,
      hasImportantModifier: c,
      baseClassName: l,
      maybePostfixModifierPosition: u
    } = n(a);
    let d = r(u ? l.substring(0, u) : l), p = !!u;
    if (!d) {
      if (!u)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      if (d = r(l), !d)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      p = !1;
    }
    const h = Kw(s).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? h + rm : h,
      classGroupId: d,
      originalClassName: a,
      hasPostfixModifier: p
    };
  }).reverse().filter((a) => {
    if (!a.isTailwindClass)
      return !0;
    const {
      modifierId: s,
      classGroupId: c,
      hasPostfixModifier: l
    } = a, u = s + c;
    return o.has(u) ? !1 : (o.add(u), i(c, l).forEach((d) => o.add(s + d)), !0);
  }).reverse().map((a) => a.originalClassName).join(" ");
}
function e_() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = im(t)) && (r && (r += " "), r += n);
  return r;
}
function im(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = im(e[r])) && (n && (n += " "), n += t);
  return n;
}
function t_(e, ...t) {
  let n, r, i, o = a;
  function a(c) {
    const l = t.reduce((u, d) => d(u), e());
    return n = Xw(l), r = n.cache.get, i = n.cache.set, o = s, s(c);
  }
  function s(c) {
    const l = r(c);
    if (l)
      return l;
    const u = Qw(c, n);
    return i(c, u), u;
  }
  return function() {
    return o(e_.apply(null, arguments));
  };
}
function it(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const om = /^\[(?:([a-z-]+):)?(.+)\]$/i, n_ = /^\d+\/\d+$/, r_ = /* @__PURE__ */ new Set(["px", "full", "screen"]), i_ = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, o_ = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, a_ = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, s_ = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, c_ = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function wn(e) {
  return dr(e) || r_.has(e) || n_.test(e);
}
function Ln(e) {
  return pi(e, "length", y_);
}
function dr(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Uo(e) {
  return pi(e, "number", dr);
}
function wi(e) {
  return !!e && Number.isInteger(Number(e));
}
function l_(e) {
  return e.endsWith("%") && dr(e.slice(0, -1));
}
function Fe(e) {
  return om.test(e);
}
function zn(e) {
  return i_.test(e);
}
const u_ = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function f_(e) {
  return pi(e, u_, am);
}
function d_(e) {
  return pi(e, "position", am);
}
const p_ = /* @__PURE__ */ new Set(["image", "url"]);
function h_(e) {
  return pi(e, p_, v_);
}
function m_(e) {
  return pi(e, "", g_);
}
function _i() {
  return !0;
}
function pi(e, t, n) {
  const r = om.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}
function y_(e) {
  return o_.test(e) && !a_.test(e);
}
function am() {
  return !1;
}
function g_(e) {
  return s_.test(e);
}
function v_(e) {
  return c_.test(e);
}
function b_() {
  const e = it("colors"), t = it("spacing"), n = it("blur"), r = it("brightness"), i = it("borderColor"), o = it("borderRadius"), a = it("borderSpacing"), s = it("borderWidth"), c = it("contrast"), l = it("grayscale"), u = it("hueRotate"), d = it("invert"), p = it("gap"), h = it("gradientColorStops"), m = it("gradientColorStopPositions"), y = it("inset"), v = it("margin"), b = it("opacity"), x = it("padding"), S = it("saturate"), A = it("scale"), E = it("sepia"), N = it("skew"), P = it("space"), U = it("translate"), ue = () => ["auto", "contain", "none"], ye = () => ["auto", "hidden", "clip", "visible", "scroll"], pe = () => ["auto", Fe, t], V = () => [Fe, t], Q = () => ["", wn, Ln], B = () => ["auto", dr, Fe], se = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], j = () => ["solid", "dashed", "dotted", "double", "none"], fe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], _e = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], J = () => ["", "0", Fe], L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], q = () => [dr, Uo], ge = () => [dr, Fe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [_i],
      spacing: [wn, Ln],
      blur: ["none", "", zn, Fe],
      brightness: q(),
      borderColor: [e],
      borderRadius: ["none", "", "full", zn, Fe],
      borderSpacing: V(),
      borderWidth: Q(),
      contrast: q(),
      grayscale: J(),
      hueRotate: ge(),
      invert: J(),
      gap: V(),
      gradientColorStops: [e],
      gradientColorStopPositions: [l_, Ln],
      inset: pe(),
      margin: pe(),
      opacity: q(),
      padding: V(),
      saturate: q(),
      scale: q(),
      sepia: J(),
      skew: ge(),
      space: V(),
      translate: V()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", Fe]
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
        columns: [zn]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": L()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": L()
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
        object: [...se(), Fe]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: ye()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": ye()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": ye()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: ue()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ue()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ue()
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
        inset: [y]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [y]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [y]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [y]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [y]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [y]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [y]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [y]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [y]
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
        z: ["auto", wi, Fe]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: pe()
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
        flex: ["1", "auto", "initial", "none", Fe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: J()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: J()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", wi, Fe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [_i]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", wi, Fe]
        }, Fe]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [_i]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [wi, Fe]
        }, Fe]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
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
        "auto-cols": ["auto", "min", "max", "fr", Fe]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", Fe]
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
        justify: ["normal", ..._e()]
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
        content: ["normal", ..._e(), "baseline"]
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
        "place-content": [..._e(), "baseline"]
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
        p: [x]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [x]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [x]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [x]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [x]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [x]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [x]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [x]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [x]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [v]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [v]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [v]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [v]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [v]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [v]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [v]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [v]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [v]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [P]
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
        "space-y": [P]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Fe, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [Fe, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [Fe, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [zn]
        }, zn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [Fe, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [Fe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [Fe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [Fe, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", zn, Ln]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Uo]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [_i]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Fe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", dr, Uo]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", wn, Fe]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", Fe]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", Fe]
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
        "placeholder-opacity": [b]
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
        "text-opacity": [b]
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
        decoration: [...j(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", wn, Ln]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", wn, Fe]
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
        indent: V()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Fe]
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
        content: ["none", Fe]
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
        "bg-opacity": [b]
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
        bg: [...se(), d_]
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
        bg: ["auto", "cover", "contain", f_]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, h_]
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
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [h]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [h]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [h]
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
        "border-opacity": [b]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...j(), "hidden"]
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
        "divide-opacity": [b]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: j()
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
        outline: ["", ...j()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [wn, Fe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [wn, Ln]
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
        "ring-opacity": [b]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [wn, Ln]
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
        shadow: ["", "inner", "none", zn, m_]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [_i]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [b]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...fe(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": fe()
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
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", zn, Fe]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
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
        saturate: [S]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [E]
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
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
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
        "backdrop-opacity": [b]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [S]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [E]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Fe]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: ge()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", Fe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: ge()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", Fe]
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
        scale: [A]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [A]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [A]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [wi, Fe]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [U]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [U]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [N]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [N]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", Fe]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", Fe]
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
        "scroll-m": V()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": V()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": V()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": V()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": V()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": V()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": V()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": V()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": V()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": V()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": V()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": V()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": V()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": V()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": V()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": V()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": V()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": V()
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
        "will-change": ["auto", "scroll", "contents", "transform", Fe]
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
        stroke: [wn, Ln, Uo]
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
const x_ = /* @__PURE__ */ t_(b_);
function Ze(...e) {
  return x_(Uw(e));
}
function Wf(e) {
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
function Hf(e) {
  return e == null ? !1 : typeof e == "string" ? e.trim().length > 0 : Array.isArray(e) ? e.length > 0 : typeof e == "object" ? Object.keys(e).length > 0 : !0;
}
const w_ = ({
  className: e,
  ...t
}) => /* @__PURE__ */ w.jsx(
  Qh,
  {
    className: Ze(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      e
    ),
    ...t
  }
), qf = jh, __ = ({
  withHandle: e,
  className: t,
  ...n
}) => /* @__PURE__ */ w.jsx(
  em,
  {
    className: Ze(
      "relative flex w-px items-center justify-center bg-slate-200 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90 dark:bg-slate-800 dark:focus-visible:ring-slate-300",
      t
    ),
    ...n,
    children: e && /* @__PURE__ */ w.jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border border-slate-200 bg-slate-200 dark:border-slate-800 dark:bg-slate-800", children: /* @__PURE__ */ w.jsx(fw, { className: "h-2.5 w-2.5" }) })
  }
);
function E_(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function cs(...e) {
  return (t) => e.forEach((n) => E_(n, t));
}
function jt(...e) {
  return _.useCallback(cs(...e), e);
}
var Zn = _.forwardRef((e, t) => {
  const { children: n, ...r } = e, i = _.Children.toArray(n), o = i.find(C_);
  if (o) {
    const a = o.props.children, s = i.map((c) => c === o ? _.Children.count(a) > 1 ? _.Children.only(null) : _.isValidElement(a) ? a.props.children : null : c);
    return /* @__PURE__ */ w.jsx(Kc, { ...r, ref: t, children: _.isValidElement(a) ? _.cloneElement(a, void 0, s) : null });
  }
  return /* @__PURE__ */ w.jsx(Kc, { ...r, ref: t, children: n });
});
Zn.displayName = "Slot";
var Kc = _.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (_.isValidElement(n)) {
    const i = O_(n);
    return _.cloneElement(n, {
      ...A_(r, n.props),
      // @ts-ignore
      ref: t ? cs(t, i) : i
    });
  }
  return _.Children.count(n) > 1 ? _.Children.only(null) : null;
});
Kc.displayName = "SlotClone";
var S_ = ({ children: e }) => /* @__PURE__ */ w.jsx(w.Fragment, { children: e });
function C_(e) {
  return _.isValidElement(e) && e.type === S_;
}
function A_(e, t) {
  const n = { ...t };
  for (const r in t) {
    const i = e[r], o = t[r];
    /^on[A-Z]/.test(r) ? i && o ? n[r] = (...s) => {
      o(...s), i(...s);
    } : i && (n[r] = i) : r === "style" ? n[r] = { ...i, ...o } : r === "className" && (n[r] = [i, o].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function O_(e) {
  var r, i;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var R_ = [
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
], xt = R_.reduce((e, t) => {
  const n = _.forwardRef((r, i) => {
    const { asChild: o, ...a } = r, s = o ? Zn : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ w.jsx(s, { ...a, ref: i });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function sm(e, t) {
  e && Rl.flushSync(() => e.dispatchEvent(t));
}
var T_ = "AspectRatio", cm = _.forwardRef(
  (e, t) => {
    const { ratio: n = 1 / 1, style: r, ...i } = e;
    return /* @__PURE__ */ w.jsx(
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
        children: /* @__PURE__ */ w.jsx(
          xt.div,
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
cm.displayName = T_;
var k_ = cm;
const P_ = k_, lm = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.jsx(
  "div",
  {
    ref: n,
    className: Ze(
      "rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      e
    ),
    ...t
  }
));
lm.displayName = "Card";
const um = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.jsx(
  "div",
  {
    ref: n,
    className: Ze("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
um.displayName = "CardHeader";
const N_ = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.jsx(
  "h3",
  {
    ref: n,
    className: Ze(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
N_.displayName = "CardTitle";
const M_ = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.jsx(
  "p",
  {
    ref: n,
    className: Ze("text-sm text-slate-500 dark:text-slate-400", e),
    ...t
  }
));
M_.displayName = "CardDescription";
const fm = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.jsx("div", { ref: n, className: Ze("p-6 pt-0", e), ...t }));
fm.displayName = "CardContent";
const I_ = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.jsx(
  "div",
  {
    ref: n,
    className: Ze("flex items-center p-6 pt-0", e),
    ...t
  }
));
I_.displayName = "CardFooter";
function D_({ className: e, media: t }) {
  const n = vo(), r = go((o) => o.main.selectedMedia), i = () => {
    n(Yc(t));
  };
  return /* @__PURE__ */ w.jsxs(lm, { className: Ze(e, { "border-primary": t.id === (r == null ? void 0 : r.id) }), onClick: i, children: [
    /* @__PURE__ */ w.jsx(um, { className: "p-0 pb-6", children: /* @__PURE__ */ w.jsxs(P_, { ratio: 4 / 3, className: "rounded-t-lg overflow-hidden bg-checkerboard", children: [
      t.picture && /* @__PURE__ */ w.jsx("img", { src: String(t.thumbnail), alt: String(t.alt), className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain" }),
      t.svg && /* @__PURE__ */ w.jsx("img", { src: String(t.reference), alt: String(t.alt), className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain" })
    ] }) }),
    /* @__PURE__ */ w.jsx(fm, { className: "text-ellipsis overflow-hidden text-nowrap", children: t.label })
  ] });
}
function j_() {
  const e = vo(), { items: t, status: n, error: r } = go((i) => i.media);
  return yo(() => {
    n === "idle" && e(Gr());
  }, [n, e]), n === "loading" || n === "idle" ? /* @__PURE__ */ w.jsx("div", { children: "Loading..." }) : n === "failed" ? /* @__PURE__ */ w.jsxs("div", { children: [
    "Error: ",
    r
  ] }) : /* @__PURE__ */ w.jsx("div", { className: "p-6 h-[calc(100%-10rem)] overflow-y-auto", children: /* @__PURE__ */ w.jsx("div", { className: "grid grid-cols-[repeat(auto-fit,minmax(200px,2fr))] gap-2", children: t.length > 0 && t.map(
    (i) => /* @__PURE__ */ w.jsx(D_, { className: "aspect-[124/129]", media: i }, i.id)
  ) }) });
}
function dm(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = dm(e[t])) && (r && (r += " "), r += n);
  else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function F_() {
  for (var e, t, n = 0, r = ""; n < arguments.length; ) (e = arguments[n++]) && (t = dm(e)) && (r && (r += " "), r += t);
  return r;
}
const Yf = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Gf = F_, pm = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Gf(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: i, defaultVariants: o } = t, a = Object.keys(i).map((l) => {
    const u = n == null ? void 0 : n[l], d = o == null ? void 0 : o[l];
    if (u === null) return null;
    const p = Yf(u) || Yf(d);
    return i[l][p];
  }), s = n && Object.entries(n).reduce((l, u) => {
    let [d, p] = u;
    return p === void 0 || (l[d] = p), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, u) => {
    let { class: d, className: p, ...h } = u;
    return Object.entries(h).every((m) => {
      let [y, v] = m;
      return Array.isArray(v) ? v.includes({
        ...o,
        ...s
      }[y]) : {
        ...o,
        ...s
      }[y] === v;
    }) ? [
      ...l,
      d,
      p
    ] : l;
  }, []);
  return Gf(e, a, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, L_ = pm(
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
), ni = _.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...i }, o) => {
    const a = r ? Zn : "button";
    return /* @__PURE__ */ w.jsx(
      a,
      {
        className: Ze(L_({ variant: t, size: n, className: e })),
        ref: o,
        ...i
      }
    );
  }
);
ni.displayName = "Button";
const Zf = () => {
};
let Yl = {}, hm = {}, mm = null, ym = {
  mark: Zf,
  measure: Zf
};
try {
  typeof window < "u" && (Yl = window), typeof document < "u" && (hm = document), typeof MutationObserver < "u" && (mm = MutationObserver), typeof performance < "u" && (ym = performance);
} catch {
}
const {
  userAgent: Kf = ""
} = Yl.navigator || {}, Kn = Yl, at = hm, Xf = mm, Bo = ym;
Kn.document;
const Pn = !!at.documentElement && !!at.head && typeof at.addEventListener == "function" && typeof at.createElement == "function", gm = ~Kf.indexOf("MSIE") || ~Kf.indexOf("Trident/");
var st = "classic", vm = "duotone", $t = "sharp", Vt = "sharp-duotone", z_ = [st, vm, $t, Vt], $_ = {
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
}, Jf = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, V_ = ["kit"], U_ = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/, B_ = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, W_ = {
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
}, H_ = {
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
}, q_ = {
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
}, Y_ = {
  classic: ["fas", "far", "fal", "fat"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds"]
}, G_ = {
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
}, Z_ = {
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
}, bm = {
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
}, K_ = ["solid", "regular", "light", "thin", "duotone", "brands"], xm = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], X_ = xm.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), Ri = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, J_ = [...Object.keys(Y_), ...K_, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", Ri.GROUP, Ri.SWAP_OPACITY, Ri.PRIMARY, Ri.SECONDARY].concat(xm.map((e) => "".concat(e, "x"))).concat(X_.map((e) => "w-".concat(e))), Q_ = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, eE = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, tE = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, Qf = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
const An = "___FONT_AWESOME___", Xc = 16, wm = "fa", _m = "svg-inline--fa", Sr = "data-fa-i2svg", Jc = "data-fa-pseudo-element", nE = "data-fa-pseudo-element-pending", Gl = "data-prefix", Zl = "data-icon", ed = "fontawesome-i2svg", rE = "async", iE = ["HTML", "HEAD", "STYLE", "SCRIPT"], Em = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})(), Sm = [st, $t, Vt];
function Co(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[st];
    }
  });
}
const Cm = {
  ...bm
};
Cm[st] = {
  ...bm[st],
  ...Jf.kit,
  ...Jf["kit-duotone"]
};
const gr = Co(Cm), Qc = {
  ...Z_
};
Qc[st] = {
  ...Qc[st],
  ...Qf.kit,
  ...Qf["kit-duotone"]
};
const Zi = Co(Qc), el = {
  ...G_
};
el[st] = {
  ...el[st],
  ...tE.kit
};
const vr = Co(el), tl = {
  ...q_
};
tl[st] = {
  ...tl[st],
  ...eE.kit
};
const oE = Co(tl), aE = U_, Am = "fa-layers-text", sE = B_, cE = {
  ...$_
};
Co(cE);
const lE = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], oc = Ri, ri = /* @__PURE__ */ new Set();
Object.keys(Zi[st]).map(ri.add.bind(ri));
Object.keys(Zi[$t]).map(ri.add.bind(ri));
Object.keys(Zi[Vt]).map(ri.add.bind(ri));
const uE = [...V_, ...J_], Fi = Kn.FontAwesomeConfig || {};
function fE(e) {
  var t = at.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function dE(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
at && typeof at.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const i = dE(fE(n));
  i != null && (Fi[r] = i);
});
const Om = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: wm,
  replacementClass: _m,
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
Fi.familyPrefix && (Fi.cssPrefix = Fi.familyPrefix);
const ii = {
  ...Om,
  ...Fi
};
ii.autoReplaceSvg || (ii.observeMutations = !1);
const we = {};
Object.keys(Om).forEach((e) => {
  Object.defineProperty(we, e, {
    enumerable: !0,
    set: function(t) {
      ii[e] = t, Li.forEach((n) => n(we));
    },
    get: function() {
      return ii[e];
    }
  });
});
Object.defineProperty(we, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    ii.cssPrefix = e, Li.forEach((t) => t(we));
  },
  get: function() {
    return ii.cssPrefix;
  }
});
Kn.FontAwesomeConfig = we;
const Li = [];
function pE(e) {
  return Li.push(e), () => {
    Li.splice(Li.indexOf(e), 1);
  };
}
const $n = Xc, fn = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function hE(e) {
  if (!e || !Pn)
    return;
  const t = at.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = at.head.childNodes;
  let r = null;
  for (let i = n.length - 1; i > -1; i--) {
    const o = n[i], a = (o.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(a) > -1 && (r = o);
  }
  return at.head.insertBefore(t, r), e;
}
const mE = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Ki() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += mE[Math.random() * 62 | 0];
  return t;
}
function hi(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function Kl(e) {
  return e.classList ? hi(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function Rm(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function yE(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(Rm(e[n]), '" '), "").trim();
}
function ls(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function Xl(e) {
  return e.size !== fn.size || e.x !== fn.x || e.y !== fn.y || e.rotate !== fn.rotate || e.flipX || e.flipY;
}
function gE(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const i = {
    transform: "translate(".concat(n / 2, " 256)")
  }, o = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), a = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), c = {
    transform: "".concat(o, " ").concat(a, " ").concat(s)
  }, l = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: i,
    inner: c,
    path: l
  };
}
function vE(e) {
  let {
    transform: t,
    width: n = Xc,
    height: r = Xc,
    startCentered: i = !1
  } = e, o = "";
  return i && gm ? o += "translate(".concat(t.x / $n - n / 2, "em, ").concat(t.y / $n - r / 2, "em) ") : i ? o += "translate(calc(-50% + ".concat(t.x / $n, "em), calc(-50% + ").concat(t.y / $n, "em)) ") : o += "translate(".concat(t.x / $n, "em, ").concat(t.y / $n, "em) "), o += "scale(".concat(t.size / $n * (t.flipX ? -1 : 1), ", ").concat(t.size / $n * (t.flipY ? -1 : 1), ") "), o += "rotate(".concat(t.rotate, "deg) "), o;
}
var bE = `:root, :host {
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
function Tm() {
  const e = wm, t = _m, n = we.cssPrefix, r = we.replacementClass;
  let i = bE;
  if (n !== e || r !== t) {
    const o = new RegExp("\\.".concat(e, "\\-"), "g"), a = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    i = i.replace(o, ".".concat(n, "-")).replace(a, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return i;
}
let td = !1;
function ac() {
  we.autoAddCss && !td && (hE(Tm()), td = !0);
}
var xE = {
  mixout() {
    return {
      dom: {
        css: Tm,
        insertCss: ac
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        ac();
      },
      beforeI2svg() {
        ac();
      }
    };
  }
};
const On = Kn || {};
On[An] || (On[An] = {});
On[An].styles || (On[An].styles = {});
On[An].hooks || (On[An].hooks = {});
On[An].shims || (On[An].shims = []);
var dn = On[An];
const km = [], Pm = function() {
  at.removeEventListener("DOMContentLoaded", Pm), Ea = 1, km.map((e) => e());
};
let Ea = !1;
Pn && (Ea = (at.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(at.readyState), Ea || at.addEventListener("DOMContentLoaded", Pm));
function wE(e) {
  Pn && (Ea ? setTimeout(e, 0) : km.push(e));
}
function Ao(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? Rm(e) : "<".concat(t, " ").concat(yE(n), ">").concat(r.map(Ao).join(""), "</").concat(t, ">");
}
function nd(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var sc = function(t, n, r, i) {
  var o = Object.keys(t), a = o.length, s = n, c, l, u;
  for (r === void 0 ? (c = 1, u = t[o[0]]) : (c = 0, u = r); c < a; c++)
    l = o[c], u = s(u, t[l], l, t);
  return u;
};
function _E(e) {
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
function nl(e) {
  const t = _E(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function EE(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), i;
  return r >= 55296 && r <= 56319 && n > t + 1 && (i = e.charCodeAt(t + 1), i >= 56320 && i <= 57343) ? (r - 55296) * 1024 + i - 56320 + 65536 : r;
}
function rd(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function rl(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, i = rd(t);
  typeof dn.hooks.addPack == "function" && !r ? dn.hooks.addPack(e, rd(t)) : dn.styles[e] = {
    ...dn.styles[e] || {},
    ...i
  }, e === "fas" && rl("fa", t);
}
const {
  styles: ur,
  shims: SE
} = dn, CE = {
  [st]: Object.values(vr[st]),
  [$t]: Object.values(vr[$t]),
  [Vt]: Object.values(vr[Vt])
};
let Jl = null, Nm = {}, Mm = {}, Im = {}, Dm = {}, jm = {};
const AE = {
  [st]: Object.keys(gr[st]),
  [$t]: Object.keys(gr[$t]),
  [Vt]: Object.keys(gr[Vt])
};
function OE(e) {
  return ~uE.indexOf(e);
}
function RE(e, t) {
  const n = t.split("-"), r = n[0], i = n.slice(1).join("-");
  return r === e && i !== "" && !OE(i) ? i : null;
}
const Fm = () => {
  const e = (r) => sc(ur, (i, o, a) => (i[a] = sc(o, r, {}), i), {});
  Nm = e((r, i, o) => (i[3] && (r[i[3]] = o), i[2] && i[2].filter((s) => typeof s == "number").forEach((s) => {
    r[s.toString(16)] = o;
  }), r)), Mm = e((r, i, o) => (r[o] = o, i[2] && i[2].filter((s) => typeof s == "string").forEach((s) => {
    r[s] = o;
  }), r)), jm = e((r, i, o) => {
    const a = i[2];
    return r[o] = o, a.forEach((s) => {
      r[s] = o;
    }), r;
  });
  const t = "far" in ur || we.autoFetchSvg, n = sc(SE, (r, i) => {
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
  Im = n.names, Dm = n.unicodes, Jl = us(we.styleDefault, {
    family: we.familyDefault
  });
};
pE((e) => {
  Jl = us(e.styleDefault, {
    family: we.familyDefault
  });
});
Fm();
function Ql(e, t) {
  return (Nm[e] || {})[t];
}
function TE(e, t) {
  return (Mm[e] || {})[t];
}
function Hn(e, t) {
  return (jm[e] || {})[t];
}
function Lm(e) {
  return Im[e] || {
    prefix: null,
    iconName: null
  };
}
function kE(e) {
  const t = Dm[e], n = Ql("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function Xn() {
  return Jl;
}
const eu = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function us(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = st
  } = t, r = gr[n][e], i = Zi[n][e] || Zi[n][r], o = e in dn.styles ? e : null;
  return i || o || null;
}
const PE = {
  [st]: Object.keys(vr[st]),
  [$t]: Object.keys(vr[$t]),
  [Vt]: Object.keys(vr[Vt])
};
function fs(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t, r = {
    [st]: "".concat(we.cssPrefix, "-").concat(st),
    [$t]: "".concat(we.cssPrefix, "-").concat($t),
    [Vt]: "".concat(we.cssPrefix, "-").concat(Vt)
  };
  let i = null, o = st;
  const a = z_.filter((c) => c !== vm);
  a.forEach((c) => {
    (e.includes(r[c]) || e.some((l) => PE[c].includes(l))) && (o = c);
  });
  const s = e.reduce((c, l) => {
    const u = RE(we.cssPrefix, l);
    if (ur[l] ? (l = CE[o].includes(l) ? oE[o][l] : l, i = l, c.prefix = l) : AE[o].indexOf(l) > -1 ? (i = l, c.prefix = us(l, {
      family: o
    })) : u ? c.iconName = u : l !== we.replacementClass && !a.some((d) => l === r[d]) && c.rest.push(l), !n && c.prefix && c.iconName) {
      const d = i === "fa" ? Lm(c.iconName) : {}, p = Hn(c.prefix, c.iconName);
      d.prefix && (i = null), c.iconName = d.iconName || p || c.iconName, c.prefix = d.prefix || c.prefix, c.prefix === "far" && !ur.far && ur.fas && !we.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, eu());
  return (e.includes("fa-brands") || e.includes("fab")) && (s.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (s.prefix = "fad"), !s.prefix && o === $t && (ur.fass || we.autoFetchSvg) && (s.prefix = "fass", s.iconName = Hn(s.prefix, s.iconName) || s.iconName), !s.prefix && o === Vt && (ur.fasds || we.autoFetchSvg) && (s.prefix = "fasds", s.iconName = Hn(s.prefix, s.iconName) || s.iconName), (s.prefix === "fa" || i === "fa") && (s.prefix = Xn() || "fas"), s;
}
class NE {
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
      }, rl(o, i[o]);
      const a = vr[st][o];
      a && rl(a, i[o]), Fm();
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
      } = r[i], c = s[2];
      t[o] || (t[o] = {}), c.length > 0 && c.forEach((l) => {
        typeof l == "string" && (t[o][l] = s);
      }), t[o][a] = s;
    }), t;
  }
}
let id = [], Wr = {};
const Kr = {}, ME = Object.keys(Kr);
function IE(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return id = e, Wr = {}, Object.keys(Kr).forEach((r) => {
    ME.indexOf(r) === -1 && delete Kr[r];
  }), id.forEach((r) => {
    const i = r.mixout ? r.mixout() : {};
    if (Object.keys(i).forEach((o) => {
      typeof i[o] == "function" && (n[o] = i[o]), typeof i[o] == "object" && Object.keys(i[o]).forEach((a) => {
        n[o] || (n[o] = {}), n[o][a] = i[o][a];
      });
    }), r.hooks) {
      const o = r.hooks();
      Object.keys(o).forEach((a) => {
        Wr[a] || (Wr[a] = []), Wr[a].push(o[a]);
      });
    }
    r.provides && r.provides(Kr);
  }), n;
}
function il(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++)
    r[i - 2] = arguments[i];
  return (Wr[e] || []).forEach((a) => {
    t = a.apply(null, [t, ...r]);
  }), t;
}
function Cr(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (Wr[e] || []).forEach((o) => {
    o.apply(null, n);
  });
}
function Jn() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return Kr[e] ? Kr[e].apply(null, t) : void 0;
}
function ol(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || Xn();
  if (t)
    return t = Hn(n, t) || t, nd(zm.definitions, n, t) || nd(dn.styles, n, t);
}
const zm = new NE(), DE = () => {
  we.autoReplaceSvg = !1, we.observeMutations = !1, Cr("noAuto");
}, jE = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return Pn ? (Cr("beforeI2svg", e), Jn("pseudoElements2svg", e), Jn("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    we.autoReplaceSvg === !1 && (we.autoReplaceSvg = !0), we.observeMutations = !0, wE(() => {
      LE({
        autoReplaceSvgRoot: t
      }), Cr("watch", e);
    });
  }
}, FE = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Hn(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = us(e[0]);
      return {
        prefix: n,
        iconName: Hn(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(we.cssPrefix, "-")) > -1 || e.match(aE))) {
      const t = fs(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || Xn(),
        iconName: Hn(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = Xn();
      return {
        prefix: t,
        iconName: Hn(t, e) || e
      };
    }
  }
}, qt = {
  noAuto: DE,
  config: we,
  dom: jE,
  parse: FE,
  library: zm,
  findIconDefinition: ol,
  toHtml: Ao
}, LE = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = at
  } = e;
  (Object.keys(dn.styles).length > 0 || we.autoFetchSvg) && Pn && we.autoReplaceSvg && qt.dom.i2svg({
    node: t
  });
};
function ds(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Ao(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!Pn) return;
      const n = at.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function zE(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: i,
    styles: o,
    transform: a
  } = e;
  if (Xl(a) && n.found && !r.found) {
    const {
      width: s,
      height: c
    } = n, l = {
      x: s / c / 2,
      y: 0.5
    };
    i.style = ls({
      ...o,
      "transform-origin": "".concat(l.x + a.x / 16, "em ").concat(l.y + a.y / 16, "em")
    });
  }
  return [{
    tag: "svg",
    attributes: i,
    children: t
  }];
}
function $E(e) {
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
function tu(e) {
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
    maskId: c,
    titleId: l,
    extra: u,
    watchable: d = !1
  } = e, {
    width: p,
    height: h
  } = n.found ? n : t, m = r === "fak", y = [we.replacementClass, i ? "".concat(we.cssPrefix, "-").concat(i) : ""].filter((E) => u.classes.indexOf(E) === -1).filter((E) => E !== "" || !!E).concat(u.classes).join(" ");
  let v = {
    children: [],
    attributes: {
      ...u.attributes,
      "data-prefix": r,
      "data-icon": i,
      class: y,
      role: u.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(p, " ").concat(h)
    }
  };
  const b = m && !~u.classes.indexOf("fa-fw") ? {
    width: "".concat(p / h * 16 * 0.0625, "em")
  } : {};
  d && (v.attributes[Sr] = ""), s && (v.children.push({
    tag: "title",
    attributes: {
      id: v.attributes["aria-labelledby"] || "title-".concat(l || Ki())
    },
    children: [s]
  }), delete v.attributes.title);
  const x = {
    ...v,
    prefix: r,
    iconName: i,
    main: t,
    mask: n,
    maskId: c,
    transform: o,
    symbol: a,
    styles: {
      ...b,
      ...u.styles
    }
  }, {
    children: S,
    attributes: A
  } = n.found && t.found ? Jn("generateAbstractMask", x) || {
    children: [],
    attributes: {}
  } : Jn("generateAbstractIcon", x) || {
    children: [],
    attributes: {}
  };
  return x.children = S, x.attributes = A, a ? $E(x) : zE(x);
}
function od(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: i,
    title: o,
    extra: a,
    watchable: s = !1
  } = e, c = {
    ...a.attributes,
    ...o ? {
      title: o
    } : {},
    class: a.classes.join(" ")
  };
  s && (c[Sr] = "");
  const l = {
    ...a.styles
  };
  Xl(i) && (l.transform = vE({
    transform: i,
    startCentered: !0,
    width: n,
    height: r
  }), l["-webkit-transform"] = l.transform);
  const u = ls(l);
  u.length > 0 && (c.style = u);
  const d = [];
  return d.push({
    tag: "span",
    attributes: c,
    children: [t]
  }), o && d.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [o]
  }), d;
}
function VE(e) {
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
  }, o = ls(r.styles);
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
  styles: cc
} = dn;
function al(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let i = null;
  return Array.isArray(r) ? i = {
    tag: "g",
    attributes: {
      class: "".concat(we.cssPrefix, "-").concat(oc.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(we.cssPrefix, "-").concat(oc.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(we.cssPrefix, "-").concat(oc.PRIMARY),
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
const UE = {
  found: !1,
  width: 512,
  height: 512
};
function BE(e, t) {
  !Em && !we.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function sl(e, t) {
  let n = t;
  return t === "fa" && we.styleDefault !== null && (t = Xn()), new Promise((r, i) => {
    if (n === "fa") {
      const o = Lm(e) || {};
      e = o.iconName || e, t = o.prefix || t;
    }
    if (e && t && cc[t] && cc[t][e]) {
      const o = cc[t][e];
      return r(al(o));
    }
    BE(e, t), r({
      ...UE,
      icon: we.showMissingIcons && e ? Jn("missingIconAbstract") || {} : {}
    });
  });
}
const ad = () => {
}, cl = we.measurePerformance && Bo && Bo.mark && Bo.measure ? Bo : {
  mark: ad,
  measure: ad
}, Ti = 'FA "6.6.0"', WE = (e) => (cl.mark("".concat(Ti, " ").concat(e, " begins")), () => $m(e)), $m = (e) => {
  cl.mark("".concat(Ti, " ").concat(e, " ends")), cl.measure("".concat(Ti, " ").concat(e), "".concat(Ti, " ").concat(e, " begins"), "".concat(Ti, " ").concat(e, " ends"));
};
var nu = {
  begin: WE,
  end: $m
};
const oa = () => {
};
function sd(e) {
  return typeof (e.getAttribute ? e.getAttribute(Sr) : null) == "string";
}
function HE(e) {
  const t = e.getAttribute ? e.getAttribute(Gl) : null, n = e.getAttribute ? e.getAttribute(Zl) : null;
  return t && n;
}
function qE(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(we.replacementClass);
}
function YE() {
  return we.autoReplaceSvg === !0 ? aa.replace : aa[we.autoReplaceSvg] || aa.replace;
}
function GE(e) {
  return at.createElementNS("http://www.w3.org/2000/svg", e);
}
function ZE(e) {
  return at.createElement(e);
}
function Vm(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? GE : ZE
  } = t;
  if (typeof e == "string")
    return at.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(o) {
    r.setAttribute(o, e.attributes[o]);
  }), (e.children || []).forEach(function(o) {
    r.appendChild(Vm(o, {
      ceFn: n
    }));
  }), r;
}
function KE(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const aa = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(Vm(n), t);
      }), t.getAttribute(Sr) === null && we.keepOriginalSource) {
        let n = at.createComment(KE(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~Kl(t).indexOf(we.replacementClass))
      return aa.replace(e);
    const r = new RegExp("".concat(we.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const o = n[0].attributes.class.split(" ").reduce((a, s) => (s === we.replacementClass || s.match(r) ? a.toSvg.push(s) : a.toNode.push(s), a), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = o.toSvg.join(" "), o.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", o.toNode.join(" "));
    }
    const i = n.map((o) => Ao(o)).join(`
`);
    t.setAttribute(Sr, ""), t.innerHTML = i;
  }
};
function cd(e) {
  e();
}
function Um(e, t) {
  const n = typeof t == "function" ? t : oa;
  if (e.length === 0)
    n();
  else {
    let r = cd;
    we.mutateApproach === rE && (r = Kn.requestAnimationFrame || cd), r(() => {
      const i = YE(), o = nu.begin("mutate");
      e.map(i), o(), n();
    });
  }
}
let ru = !1;
function Bm() {
  ru = !0;
}
function ll() {
  ru = !1;
}
let Sa = null;
function ld(e) {
  if (!Xf || !we.observeMutations)
    return;
  const {
    treeCallback: t = oa,
    nodeCallback: n = oa,
    pseudoElementsCallback: r = oa,
    observeMutationsRoot: i = at
  } = e;
  Sa = new Xf((o) => {
    if (ru) return;
    const a = Xn();
    hi(o).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !sd(s.addedNodes[0]) && (we.searchPseudoElements && r(s.target), t(s.target)), s.type === "attributes" && s.target.parentNode && we.searchPseudoElements && r(s.target.parentNode), s.type === "attributes" && sd(s.target) && ~lE.indexOf(s.attributeName))
        if (s.attributeName === "class" && HE(s.target)) {
          const {
            prefix: c,
            iconName: l
          } = fs(Kl(s.target));
          s.target.setAttribute(Gl, c || a), l && s.target.setAttribute(Zl, l);
        } else qE(s.target) && n(s.target);
    });
  }), Pn && Sa.observe(i, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function XE() {
  Sa && Sa.disconnect();
}
function JE(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, i) => {
    const o = i.split(":"), a = o[0], s = o.slice(1);
    return a && s.length > 0 && (r[a] = s.join(":").trim()), r;
  }, {})), n;
}
function QE(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let i = fs(Kl(e));
  return i.prefix || (i.prefix = Xn()), t && n && (i.prefix = t, i.iconName = n), i.iconName && i.prefix || (i.prefix && r.length > 0 && (i.iconName = TE(i.prefix, e.innerText) || Ql(i.prefix, nl(e.innerText))), !i.iconName && we.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (i.iconName = e.firstChild.data)), i;
}
function eS(e) {
  const t = hi(e.attributes).reduce((i, o) => (i.name !== "class" && i.name !== "style" && (i[o.name] = o.value), i), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return we.autoA11y && (n ? t["aria-labelledby"] = "".concat(we.replacementClass, "-title-").concat(r || Ki()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function tS() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: fn,
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
function ud(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: i
  } = QE(e), o = eS(e), a = il("parseNodeAttributes", {}, e);
  let s = t.styleParser ? JE(e) : [];
  return {
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: fn,
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
  styles: nS
} = dn;
function Wm(e) {
  const t = we.autoReplaceSvg === "nest" ? ud(e, {
    styleParser: !1
  }) : ud(e);
  return ~t.extra.classes.indexOf(Am) ? Jn("generateLayersText", e, t) : Jn("generateSvgReplacementMutation", e, t);
}
let yn = /* @__PURE__ */ new Set();
Sm.map((e) => {
  yn.add("fa-".concat(e));
});
Object.keys(gr[st]).map(yn.add.bind(yn));
Object.keys(gr[$t]).map(yn.add.bind(yn));
Object.keys(gr[Vt]).map(yn.add.bind(yn));
yn = [...yn];
function fd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Pn) return Promise.resolve();
  const n = at.documentElement.classList, r = (u) => n.add("".concat(ed, "-").concat(u)), i = (u) => n.remove("".concat(ed, "-").concat(u)), o = we.autoFetchSvg ? yn : Sm.map((u) => "fa-".concat(u)).concat(Object.keys(nS));
  o.includes("fa") || o.push("fa");
  const a = [".".concat(Am, ":not([").concat(Sr, "])")].concat(o.map((u) => ".".concat(u, ":not([").concat(Sr, "])"))).join(", ");
  if (a.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = hi(e.querySelectorAll(a));
  } catch {
  }
  if (s.length > 0)
    r("pending"), i("complete");
  else
    return Promise.resolve();
  const c = nu.begin("onTree"), l = s.reduce((u, d) => {
    try {
      const p = Wm(d);
      p && u.push(p);
    } catch (p) {
      Em || p.name === "MissingIcon" && console.error(p);
    }
    return u;
  }, []);
  return new Promise((u, d) => {
    Promise.all(l).then((p) => {
      Um(p, () => {
        r("active"), r("complete"), i("pending"), typeof t == "function" && t(), c(), u();
      });
    }).catch((p) => {
      c(), d(p);
    });
  });
}
function rS(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Wm(e).then((n) => {
    n && Um([n], t);
  });
}
function iS(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : ol(t || {});
    let {
      mask: i
    } = n;
    return i && (i = (i || {}).icon ? i : ol(i || {})), e(r, {
      ...n,
      mask: i
    });
  };
}
const oS = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = fn,
    symbol: r = !1,
    mask: i = null,
    maskId: o = null,
    title: a = null,
    titleId: s = null,
    classes: c = [],
    attributes: l = {},
    styles: u = {}
  } = t;
  if (!e) return;
  const {
    prefix: d,
    iconName: p,
    icon: h
  } = e;
  return ds({
    type: "icon",
    ...e
  }, () => (Cr("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), we.autoA11y && (a ? l["aria-labelledby"] = "".concat(we.replacementClass, "-title-").concat(s || Ki()) : (l["aria-hidden"] = "true", l.focusable = "false")), tu({
    icons: {
      main: al(h),
      mask: i ? al(i.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: d,
    iconName: p,
    transform: {
      ...fn,
      ...n
    },
    symbol: r,
    title: a,
    maskId: o,
    titleId: s,
    extra: {
      attributes: l,
      styles: u,
      classes: c
    }
  })));
};
var aS = {
  mixout() {
    return {
      icon: iS(oS)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = fd, e.nodeCallback = rS, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = at,
        callback: r = () => {
        }
      } = t;
      return fd(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: i,
        titleId: o,
        prefix: a,
        transform: s,
        symbol: c,
        mask: l,
        maskId: u,
        extra: d
      } = n;
      return new Promise((p, h) => {
        Promise.all([sl(r, a), l.iconName ? sl(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((m) => {
          let [y, v] = m;
          p([t, tu({
            icons: {
              main: y,
              mask: v
            },
            prefix: a,
            iconName: r,
            transform: s,
            symbol: c,
            maskId: u,
            title: i,
            titleId: o,
            extra: d,
            watchable: !0
          })]);
        }).catch(h);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: i,
        transform: o,
        styles: a
      } = t;
      const s = ls(a);
      s.length > 0 && (r.style = s);
      let c;
      return Xl(o) && (c = Jn("generateAbstractTransformGrouping", {
        main: i,
        transform: o,
        containerWidth: i.width,
        iconWidth: i.width
      })), n.push(c || i.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, sS = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return ds({
          type: "layer"
        }, () => {
          Cr("beforeDOMElementCreation", {
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
}, cS = {
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
        return ds({
          type: "counter",
          content: e
        }, () => (Cr("beforeDOMElementCreation", {
          content: e,
          params: t
        }), VE({
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
}, lS = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = fn,
          title: r = null,
          classes: i = [],
          attributes: o = {},
          styles: a = {}
        } = t;
        return ds({
          type: "text",
          content: e
        }, () => (Cr("beforeDOMElementCreation", {
          content: e,
          params: t
        }), od({
          content: e,
          transform: {
            ...fn,
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
      if (gm) {
        const c = parseInt(getComputedStyle(t).fontSize, 10), l = t.getBoundingClientRect();
        a = l.width / c, s = l.height / c;
      }
      return we.autoA11y && !r && (o.attributes["aria-hidden"] = "true"), Promise.resolve([t, od({
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
const uS = new RegExp('"', "ug"), dd = [1105920, 1112319], pd = {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  },
  ...H_,
  ...W_,
  ...Q_
}, ul = Object.keys(pd).reduce((e, t) => (e[t.toLowerCase()] = pd[t], e), {}), fS = Object.keys(ul).reduce((e, t) => {
  const n = ul[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function dS(e) {
  const t = e.replace(uS, ""), n = EE(t, 0), r = n >= dd[0] && n <= dd[1], i = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: nl(i ? t[0] : t),
    isSecondary: r || i
  };
}
function pS(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), i = isNaN(r) ? "normal" : r;
  return (ul[n] || {})[i] || fS[n];
}
function hd(e, t) {
  const n = "".concat(nE).concat(t.replace(":", "-"));
  return new Promise((r, i) => {
    if (e.getAttribute(n) !== null)
      return r();
    const a = hi(e.children).filter((p) => p.getAttribute(Jc) === t)[0], s = Kn.getComputedStyle(e, t), c = s.getPropertyValue("font-family"), l = c.match(sE), u = s.getPropertyValue("font-weight"), d = s.getPropertyValue("content");
    if (a && !l)
      return e.removeChild(a), r();
    if (l && d !== "none" && d !== "") {
      const p = s.getPropertyValue("content");
      let h = pS(c, u);
      const {
        value: m,
        isSecondary: y
      } = dS(p), v = l[0].startsWith("FontAwesome");
      let b = Ql(h, m), x = b;
      if (v) {
        const S = kE(m);
        S.iconName && S.prefix && (b = S.iconName, h = S.prefix);
      }
      if (b && !y && (!a || a.getAttribute(Gl) !== h || a.getAttribute(Zl) !== x)) {
        e.setAttribute(n, x), a && e.removeChild(a);
        const S = tS(), {
          extra: A
        } = S;
        A.attributes[Jc] = t, sl(b, h).then((E) => {
          const N = tu({
            ...S,
            icons: {
              main: E,
              mask: eu()
            },
            prefix: h,
            iconName: x,
            extra: A,
            watchable: !0
          }), P = at.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(P, e.firstChild) : e.appendChild(P), P.outerHTML = N.map((U) => Ao(U)).join(`
`), e.removeAttribute(n), r();
        }).catch(i);
      } else
        r();
    } else
      r();
  });
}
function hS(e) {
  return Promise.all([hd(e, "::before"), hd(e, "::after")]);
}
function mS(e) {
  return e.parentNode !== document.head && !~iE.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(Jc) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function md(e) {
  if (Pn)
    return new Promise((t, n) => {
      const r = hi(e.querySelectorAll("*")).filter(mS).map(hS), i = nu.begin("searchPseudoElements");
      Bm(), Promise.all(r).then(() => {
        i(), ll(), t();
      }).catch(() => {
        i(), ll(), n();
      });
    });
}
var yS = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = md, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = at
      } = t;
      we.searchPseudoElements && md(n);
    };
  }
};
let yd = !1;
var gS = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Bm(), yd = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        ld(il("mutationObserverCallbacks", {}));
      },
      noAuto() {
        XE();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        yd ? ll() : ld(il("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const gd = (e) => {
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
var vS = {
  mixout() {
    return {
      parse: {
        transform: (e) => gd(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = gd(n)), e;
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
      }, s = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), c = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), l = "rotate(".concat(r.rotate, " 0 0)"), u = {
        transform: "".concat(s, " ").concat(c, " ").concat(l)
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
const lc = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function vd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function bS(e) {
  return e.tag === "g" ? e.children : [e];
}
var xS = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? fs(n.split(" ").map((i) => i.trim())) : eu();
        return r.prefix || (r.prefix = Xn()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
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
        width: c,
        icon: l
      } = i, {
        width: u,
        icon: d
      } = o, p = gE({
        transform: s,
        containerWidth: u,
        iconWidth: c
      }), h = {
        tag: "rect",
        attributes: {
          ...lc,
          fill: "white"
        }
      }, m = l.children ? {
        children: l.children.map(vd)
      } : {}, y = {
        tag: "g",
        attributes: {
          ...p.inner
        },
        children: [vd({
          tag: l.tag,
          attributes: {
            ...l.attributes,
            ...p.path
          },
          ...m
        })]
      }, v = {
        tag: "g",
        attributes: {
          ...p.outer
        },
        children: [y]
      }, b = "mask-".concat(a || Ki()), x = "clip-".concat(a || Ki()), S = {
        tag: "mask",
        attributes: {
          ...lc,
          id: b,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        },
        children: [h, v]
      }, A = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: x
          },
          children: bS(d)
        }, S]
      };
      return n.push(A, {
        tag: "rect",
        attributes: {
          fill: "currentColor",
          "clip-path": "url(#".concat(x, ")"),
          mask: "url(#".concat(b, ")"),
          ...lc
        }
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, wS = {
  provides(e) {
    let t = !1;
    Kn.matchMedia && (t = Kn.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
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
}, _S = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, ES = [xE, aS, sS, cS, lS, yS, gS, vS, xS, wS, _S];
IE(ES, {
  mixoutsTo: qt
});
qt.noAuto;
qt.config;
qt.library;
qt.dom;
const fl = qt.parse;
qt.findIconDefinition;
qt.toHtml;
const SS = qt.icon;
qt.layer;
qt.text;
qt.counter;
var dl = { exports: {} }, Wo = { exports: {} }, Xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bd;
function CS() {
  if (bd) return Xe;
  bd = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function S(E) {
    if (typeof E == "object" && E !== null) {
      var N = E.$$typeof;
      switch (N) {
        case t:
          switch (E = E.type, E) {
            case c:
            case l:
            case r:
            case o:
            case i:
            case d:
              return E;
            default:
              switch (E = E && E.$$typeof, E) {
                case s:
                case u:
                case m:
                case h:
                case a:
                  return E;
                default:
                  return N;
              }
          }
        case n:
          return N;
      }
    }
  }
  function A(E) {
    return S(E) === l;
  }
  return Xe.AsyncMode = c, Xe.ConcurrentMode = l, Xe.ContextConsumer = s, Xe.ContextProvider = a, Xe.Element = t, Xe.ForwardRef = u, Xe.Fragment = r, Xe.Lazy = m, Xe.Memo = h, Xe.Portal = n, Xe.Profiler = o, Xe.StrictMode = i, Xe.Suspense = d, Xe.isAsyncMode = function(E) {
    return A(E) || S(E) === c;
  }, Xe.isConcurrentMode = A, Xe.isContextConsumer = function(E) {
    return S(E) === s;
  }, Xe.isContextProvider = function(E) {
    return S(E) === a;
  }, Xe.isElement = function(E) {
    return typeof E == "object" && E !== null && E.$$typeof === t;
  }, Xe.isForwardRef = function(E) {
    return S(E) === u;
  }, Xe.isFragment = function(E) {
    return S(E) === r;
  }, Xe.isLazy = function(E) {
    return S(E) === m;
  }, Xe.isMemo = function(E) {
    return S(E) === h;
  }, Xe.isPortal = function(E) {
    return S(E) === n;
  }, Xe.isProfiler = function(E) {
    return S(E) === o;
  }, Xe.isStrictMode = function(E) {
    return S(E) === i;
  }, Xe.isSuspense = function(E) {
    return S(E) === d;
  }, Xe.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === r || E === l || E === o || E === i || E === d || E === p || typeof E == "object" && E !== null && (E.$$typeof === m || E.$$typeof === h || E.$$typeof === a || E.$$typeof === s || E.$$typeof === u || E.$$typeof === v || E.$$typeof === b || E.$$typeof === x || E.$$typeof === y);
  }, Xe.typeOf = S, Xe;
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
var xd;
function AS() {
  return xd || (xd = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, i = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function S(ee) {
      return typeof ee == "string" || typeof ee == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      ee === r || ee === l || ee === o || ee === i || ee === d || ee === p || typeof ee == "object" && ee !== null && (ee.$$typeof === m || ee.$$typeof === h || ee.$$typeof === a || ee.$$typeof === s || ee.$$typeof === u || ee.$$typeof === v || ee.$$typeof === b || ee.$$typeof === x || ee.$$typeof === y);
    }
    function A(ee) {
      if (typeof ee == "object" && ee !== null) {
        var Oe = ee.$$typeof;
        switch (Oe) {
          case t:
            var Be = ee.type;
            switch (Be) {
              case c:
              case l:
              case r:
              case o:
              case i:
              case d:
                return Be;
              default:
                var ct = Be && Be.$$typeof;
                switch (ct) {
                  case s:
                  case u:
                  case m:
                  case h:
                  case a:
                    return ct;
                  default:
                    return Oe;
                }
            }
          case n:
            return Oe;
        }
      }
    }
    var E = c, N = l, P = s, U = a, ue = t, ye = u, pe = r, V = m, Q = h, B = n, se = o, j = i, fe = d, _e = !1;
    function J(ee) {
      return _e || (_e = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), L(ee) || A(ee) === c;
    }
    function L(ee) {
      return A(ee) === l;
    }
    function q(ee) {
      return A(ee) === s;
    }
    function ge(ee) {
      return A(ee) === a;
    }
    function I(ee) {
      return typeof ee == "object" && ee !== null && ee.$$typeof === t;
    }
    function X(ee) {
      return A(ee) === u;
    }
    function re(ee) {
      return A(ee) === r;
    }
    function Y(ee) {
      return A(ee) === m;
    }
    function G(ee) {
      return A(ee) === h;
    }
    function ie(ee) {
      return A(ee) === n;
    }
    function le(ee) {
      return A(ee) === o;
    }
    function ve(ee) {
      return A(ee) === i;
    }
    function Pe(ee) {
      return A(ee) === d;
    }
    Je.AsyncMode = E, Je.ConcurrentMode = N, Je.ContextConsumer = P, Je.ContextProvider = U, Je.Element = ue, Je.ForwardRef = ye, Je.Fragment = pe, Je.Lazy = V, Je.Memo = Q, Je.Portal = B, Je.Profiler = se, Je.StrictMode = j, Je.Suspense = fe, Je.isAsyncMode = J, Je.isConcurrentMode = L, Je.isContextConsumer = q, Je.isContextProvider = ge, Je.isElement = I, Je.isForwardRef = X, Je.isFragment = re, Je.isLazy = Y, Je.isMemo = G, Je.isPortal = ie, Je.isProfiler = le, Je.isStrictMode = ve, Je.isSuspense = Pe, Je.isValidElementType = S, Je.typeOf = A;
  }()), Je;
}
var wd;
function Hm() {
  return wd || (wd = 1, process.env.NODE_ENV === "production" ? Wo.exports = CS() : Wo.exports = AS()), Wo.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var uc, _d;
function OS() {
  if (_d) return uc;
  _d = 1;
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
      var c = Object.getOwnPropertyNames(a).map(function(u) {
        return a[u];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        l[u] = u;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return uc = i() ? Object.assign : function(o, a) {
    for (var s, c = r(o), l, u = 1; u < arguments.length; u++) {
      s = Object(arguments[u]);
      for (var d in s)
        t.call(s, d) && (c[d] = s[d]);
      if (e) {
        l = e(s);
        for (var p = 0; p < l.length; p++)
          n.call(s, l[p]) && (c[l[p]] = s[l[p]]);
      }
    }
    return c;
  }, uc;
}
var fc, Ed;
function iu() {
  if (Ed) return fc;
  Ed = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return fc = e, fc;
}
var dc, Sd;
function qm() {
  return Sd || (Sd = 1, dc = Function.call.bind(Object.prototype.hasOwnProperty)), dc;
}
var pc, Cd;
function RS() {
  if (Cd) return pc;
  Cd = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = iu(), n = {}, r = qm();
    e = function(o) {
      var a = "Warning: " + o;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(o, a, s, c, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in o)
        if (r(o, u)) {
          var d;
          try {
            if (typeof o[u] != "function") {
              var p = Error(
                (c || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            d = o[u](a, u, c, s, null, t);
          } catch (m) {
            d = m;
          }
          if (d && !(d instanceof Error) && e(
            (c || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var h = l ? l() : "";
            e(
              "Failed " + s + " type: " + d.message + (h ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, pc = i, pc;
}
var hc, Ad;
function TS() {
  if (Ad) return hc;
  Ad = 1;
  var e = Hm(), t = OS(), n = iu(), r = qm(), i = RS(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(s) {
    var c = "Warning: " + s;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return hc = function(s, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(L) {
      var q = L && (l && L[l] || L[u]);
      if (typeof q == "function")
        return q;
    }
    var p = "<<anonymous>>", h = {
      array: b("array"),
      bigint: b("bigint"),
      bool: b("boolean"),
      func: b("function"),
      number: b("number"),
      object: b("object"),
      string: b("string"),
      symbol: b("symbol"),
      any: x(),
      arrayOf: S,
      element: A(),
      elementType: E(),
      instanceOf: N,
      node: ye(),
      objectOf: U,
      oneOf: P,
      oneOfType: ue,
      shape: V,
      exact: Q
    };
    function m(L, q) {
      return L === q ? L !== 0 || 1 / L === 1 / q : L !== L && q !== q;
    }
    function y(L, q) {
      this.message = L, this.data = q && typeof q == "object" ? q : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function v(L) {
      if (process.env.NODE_ENV !== "production")
        var q = {}, ge = 0;
      function I(re, Y, G, ie, le, ve, Pe) {
        if (ie = ie || p, ve = ve || G, Pe !== n) {
          if (c) {
            var ee = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ee.name = "Invariant Violation", ee;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Oe = ie + ":" + G;
            !q[Oe] && // Avoid spamming the console because they are often not actionable except for lib authors
            ge < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + ve + "` prop on `" + ie + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), q[Oe] = !0, ge++);
          }
        }
        return Y[G] == null ? re ? Y[G] === null ? new y("The " + le + " `" + ve + "` is marked as required " + ("in `" + ie + "`, but its value is `null`.")) : new y("The " + le + " `" + ve + "` is marked as required in " + ("`" + ie + "`, but its value is `undefined`.")) : null : L(Y, G, ie, le, ve);
      }
      var X = I.bind(null, !1);
      return X.isRequired = I.bind(null, !0), X;
    }
    function b(L) {
      function q(ge, I, X, re, Y, G) {
        var ie = ge[I], le = j(ie);
        if (le !== L) {
          var ve = fe(ie);
          return new y(
            "Invalid " + re + " `" + Y + "` of type " + ("`" + ve + "` supplied to `" + X + "`, expected ") + ("`" + L + "`."),
            { expectedType: L }
          );
        }
        return null;
      }
      return v(q);
    }
    function x() {
      return v(a);
    }
    function S(L) {
      function q(ge, I, X, re, Y) {
        if (typeof L != "function")
          return new y("Property `" + Y + "` of component `" + X + "` has invalid PropType notation inside arrayOf.");
        var G = ge[I];
        if (!Array.isArray(G)) {
          var ie = j(G);
          return new y("Invalid " + re + " `" + Y + "` of type " + ("`" + ie + "` supplied to `" + X + "`, expected an array."));
        }
        for (var le = 0; le < G.length; le++) {
          var ve = L(G, le, X, re, Y + "[" + le + "]", n);
          if (ve instanceof Error)
            return ve;
        }
        return null;
      }
      return v(q);
    }
    function A() {
      function L(q, ge, I, X, re) {
        var Y = q[ge];
        if (!s(Y)) {
          var G = j(Y);
          return new y("Invalid " + X + " `" + re + "` of type " + ("`" + G + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(L);
    }
    function E() {
      function L(q, ge, I, X, re) {
        var Y = q[ge];
        if (!e.isValidElementType(Y)) {
          var G = j(Y);
          return new y("Invalid " + X + " `" + re + "` of type " + ("`" + G + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(L);
    }
    function N(L) {
      function q(ge, I, X, re, Y) {
        if (!(ge[I] instanceof L)) {
          var G = L.name || p, ie = J(ge[I]);
          return new y("Invalid " + re + " `" + Y + "` of type " + ("`" + ie + "` supplied to `" + X + "`, expected ") + ("instance of `" + G + "`."));
        }
        return null;
      }
      return v(q);
    }
    function P(L) {
      if (!Array.isArray(L))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), a;
      function q(ge, I, X, re, Y) {
        for (var G = ge[I], ie = 0; ie < L.length; ie++)
          if (m(G, L[ie]))
            return null;
        var le = JSON.stringify(L, function(Pe, ee) {
          var Oe = fe(ee);
          return Oe === "symbol" ? String(ee) : ee;
        });
        return new y("Invalid " + re + " `" + Y + "` of value `" + String(G) + "` " + ("supplied to `" + X + "`, expected one of " + le + "."));
      }
      return v(q);
    }
    function U(L) {
      function q(ge, I, X, re, Y) {
        if (typeof L != "function")
          return new y("Property `" + Y + "` of component `" + X + "` has invalid PropType notation inside objectOf.");
        var G = ge[I], ie = j(G);
        if (ie !== "object")
          return new y("Invalid " + re + " `" + Y + "` of type " + ("`" + ie + "` supplied to `" + X + "`, expected an object."));
        for (var le in G)
          if (r(G, le)) {
            var ve = L(G, le, X, re, Y + "." + le, n);
            if (ve instanceof Error)
              return ve;
          }
        return null;
      }
      return v(q);
    }
    function ue(L) {
      if (!Array.isArray(L))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var q = 0; q < L.length; q++) {
        var ge = L[q];
        if (typeof ge != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + _e(ge) + " at index " + q + "."
          ), a;
      }
      function I(X, re, Y, G, ie) {
        for (var le = [], ve = 0; ve < L.length; ve++) {
          var Pe = L[ve], ee = Pe(X, re, Y, G, ie, n);
          if (ee == null)
            return null;
          ee.data && r(ee.data, "expectedType") && le.push(ee.data.expectedType);
        }
        var Oe = le.length > 0 ? ", expected one of type [" + le.join(", ") + "]" : "";
        return new y("Invalid " + G + " `" + ie + "` supplied to " + ("`" + Y + "`" + Oe + "."));
      }
      return v(I);
    }
    function ye() {
      function L(q, ge, I, X, re) {
        return B(q[ge]) ? null : new y("Invalid " + X + " `" + re + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return v(L);
    }
    function pe(L, q, ge, I, X) {
      return new y(
        (L || "React class") + ": " + q + " type `" + ge + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + X + "`."
      );
    }
    function V(L) {
      function q(ge, I, X, re, Y) {
        var G = ge[I], ie = j(G);
        if (ie !== "object")
          return new y("Invalid " + re + " `" + Y + "` of type `" + ie + "` " + ("supplied to `" + X + "`, expected `object`."));
        for (var le in L) {
          var ve = L[le];
          if (typeof ve != "function")
            return pe(X, re, Y, le, fe(ve));
          var Pe = ve(G, le, X, re, Y + "." + le, n);
          if (Pe)
            return Pe;
        }
        return null;
      }
      return v(q);
    }
    function Q(L) {
      function q(ge, I, X, re, Y) {
        var G = ge[I], ie = j(G);
        if (ie !== "object")
          return new y("Invalid " + re + " `" + Y + "` of type `" + ie + "` " + ("supplied to `" + X + "`, expected `object`."));
        var le = t({}, ge[I], L);
        for (var ve in le) {
          var Pe = L[ve];
          if (r(L, ve) && typeof Pe != "function")
            return pe(X, re, Y, ve, fe(Pe));
          if (!Pe)
            return new y(
              "Invalid " + re + " `" + Y + "` key `" + ve + "` supplied to `" + X + "`.\nBad object: " + JSON.stringify(ge[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(L), null, "  ")
            );
          var ee = Pe(G, ve, X, re, Y + "." + ve, n);
          if (ee)
            return ee;
        }
        return null;
      }
      return v(q);
    }
    function B(L) {
      switch (typeof L) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !L;
        case "object":
          if (Array.isArray(L))
            return L.every(B);
          if (L === null || s(L))
            return !0;
          var q = d(L);
          if (q) {
            var ge = q.call(L), I;
            if (q !== L.entries) {
              for (; !(I = ge.next()).done; )
                if (!B(I.value))
                  return !1;
            } else
              for (; !(I = ge.next()).done; ) {
                var X = I.value;
                if (X && !B(X[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function se(L, q) {
      return L === "symbol" ? !0 : q ? q["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && q instanceof Symbol : !1;
    }
    function j(L) {
      var q = typeof L;
      return Array.isArray(L) ? "array" : L instanceof RegExp ? "object" : se(q, L) ? "symbol" : q;
    }
    function fe(L) {
      if (typeof L > "u" || L === null)
        return "" + L;
      var q = j(L);
      if (q === "object") {
        if (L instanceof Date)
          return "date";
        if (L instanceof RegExp)
          return "regexp";
      }
      return q;
    }
    function _e(L) {
      var q = fe(L);
      switch (q) {
        case "array":
        case "object":
          return "an " + q;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + q;
        default:
          return q;
      }
    }
    function J(L) {
      return !L.constructor || !L.constructor.name ? p : L.constructor.name;
    }
    return h.checkPropTypes = i, h.resetWarningCache = i.resetWarningCache, h.PropTypes = h, h;
  }, hc;
}
var mc, Od;
function kS() {
  if (Od) return mc;
  Od = 1;
  var e = iu();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, mc = function() {
    function r(a, s, c, l, u, d) {
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
  }, mc;
}
if (process.env.NODE_ENV !== "production") {
  var PS = Hm(), NS = !0;
  dl.exports = TS()(PS.isElement, NS);
} else
  dl.exports = kS()();
var MS = dl.exports;
const Ue = /* @__PURE__ */ fp(MS);
function Rd(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function cn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rd(Object(n), !0).forEach(function(r) {
      Hr(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rd(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ca(e) {
  "@babel/helpers - typeof";
  return Ca = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ca(e);
}
function Hr(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function IS(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(t.indexOf(i) >= 0) && (n[i] = e[i]);
  return n;
}
function DS(e, t) {
  if (e == null) return {};
  var n = IS(e, t), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (i = 0; i < o.length; i++)
      r = o[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function pl(e) {
  return jS(e) || FS(e) || LS(e) || zS();
}
function jS(e) {
  if (Array.isArray(e)) return hl(e);
}
function FS(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function LS(e, t) {
  if (e) {
    if (typeof e == "string") return hl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return hl(e, t);
  }
}
function hl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function zS() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function $S(e) {
  var t, n = e.beat, r = e.fade, i = e.beatFade, o = e.bounce, a = e.shake, s = e.flash, c = e.spin, l = e.spinPulse, u = e.spinReverse, d = e.pulse, p = e.fixedWidth, h = e.inverse, m = e.border, y = e.listItem, v = e.flip, b = e.size, x = e.rotation, S = e.pull, A = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": i,
    "fa-bounce": o,
    "fa-shake": a,
    "fa-flash": s,
    "fa-spin": c,
    "fa-spin-reverse": u,
    "fa-spin-pulse": l,
    "fa-pulse": d,
    "fa-fw": p,
    "fa-inverse": h,
    "fa-border": m,
    "fa-li": y,
    "fa-flip": v === !0,
    "fa-flip-horizontal": v === "horizontal" || v === "both",
    "fa-flip-vertical": v === "vertical" || v === "both"
  }, Hr(t, "fa-".concat(b), typeof b < "u" && b !== null), Hr(t, "fa-rotate-".concat(x), typeof x < "u" && x !== null && x !== 0), Hr(t, "fa-pull-".concat(S), typeof S < "u" && S !== null), Hr(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(A).map(function(E) {
    return A[E] ? E : null;
  }).filter(function(E) {
    return E;
  });
}
function VS(e) {
  return e = e - 0, e === e;
}
function Ym(e) {
  return VS(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var US = ["style"];
function BS(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function WS(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), i = Ym(n.slice(0, r)), o = n.slice(r + 1).trim();
    return i.startsWith("webkit") ? t[BS(i)] = o : t[i] = o, t;
  }, {});
}
function Gm(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(c) {
    return Gm(e, c);
  }), i = Object.keys(t.attributes || {}).reduce(function(c, l) {
    var u = t.attributes[l];
    switch (l) {
      case "class":
        c.attrs.className = u, delete t.attributes.class;
        break;
      case "style":
        c.attrs.style = WS(u);
        break;
      default:
        l.indexOf("aria-") === 0 || l.indexOf("data-") === 0 ? c.attrs[l.toLowerCase()] = u : c.attrs[Ym(l)] = u;
    }
    return c;
  }, {
    attrs: {}
  }), o = n.style, a = o === void 0 ? {} : o, s = DS(n, US);
  return i.attrs.style = cn(cn({}, i.attrs.style), a), e.apply(void 0, [t.tag, cn(cn({}, i.attrs), s)].concat(pl(r)));
}
var Zm = !1;
try {
  Zm = process.env.NODE_ENV === "production";
} catch {
}
function HS() {
  if (!Zm && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Td(e) {
  if (e && Ca(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (fl.icon)
    return fl.icon(e);
  if (e === null)
    return null;
  if (e && Ca(e) === "object" && e.prefix && e.iconName)
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
function yc(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? Hr({}, e, t) : {};
}
var kd = {
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
}, oi = /* @__PURE__ */ Le.forwardRef(function(e, t) {
  var n = cn(cn({}, kd), e), r = n.icon, i = n.mask, o = n.symbol, a = n.className, s = n.title, c = n.titleId, l = n.maskId, u = Td(r), d = yc("classes", [].concat(pl($S(n)), pl((a || "").split(" ")))), p = yc("transform", typeof n.transform == "string" ? fl.transform(n.transform) : n.transform), h = yc("mask", Td(i)), m = SS(u, cn(cn(cn(cn({}, d), p), h), {}, {
    symbol: o,
    title: s,
    titleId: c,
    maskId: l
  }));
  if (!m)
    return HS("Could not find icon", u), null;
  var y = m.abstract, v = {
    ref: t
  };
  return Object.keys(n).forEach(function(b) {
    kd.hasOwnProperty(b) || (v[b] = n[b]);
  }), qS(y[0], v);
});
oi.displayName = "FontAwesomeIcon";
oi.propTypes = {
  beat: Ue.bool,
  border: Ue.bool,
  beatFade: Ue.bool,
  bounce: Ue.bool,
  className: Ue.string,
  fade: Ue.bool,
  flash: Ue.bool,
  mask: Ue.oneOfType([Ue.object, Ue.array, Ue.string]),
  maskId: Ue.string,
  fixedWidth: Ue.bool,
  inverse: Ue.bool,
  flip: Ue.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: Ue.oneOfType([Ue.object, Ue.array, Ue.string]),
  listItem: Ue.bool,
  pull: Ue.oneOf(["right", "left"]),
  pulse: Ue.bool,
  rotation: Ue.oneOf([0, 90, 180, 270]),
  shake: Ue.bool,
  size: Ue.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: Ue.bool,
  spinPulse: Ue.bool,
  spinReverse: Ue.bool,
  symbol: Ue.oneOfType([Ue.bool, Ue.string]),
  title: Ue.string,
  titleId: Ue.string,
  transform: Ue.oneOfType([Ue.string, Ue.object]),
  swapOpacity: Ue.bool
};
var qS = Gm.bind(null, Le.createElement);
const YS = {
  prefix: "fas",
  iconName: "upload",
  icon: [512, 512, [], "f093", "M288 109.3L288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-242.7-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352l128 0c0 35.3 28.7 64 64 64s64-28.7 64-64l128 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]
}, GS = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, ZS = GS, KS = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, XS = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
};
var Oo = (e) => e.type === "checkbox", qr = (e) => e instanceof Date, St = (e) => e == null;
const Km = (e) => typeof e == "object";
var vt = (e) => !St(e) && !Array.isArray(e) && Km(e) && !qr(e), Xm = (e) => vt(e) && e.target ? Oo(e.target) ? e.target.checked : e.target.value : e, JS = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Jm = (e, t) => e.has(JS(t)), QS = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return vt(t) && t.hasOwnProperty("isPrototypeOf");
}, ou = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function Nt(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(ou && (e instanceof Blob || e instanceof FileList)) && (n || vt(e)))
    if (t = n ? [] : {}, !n && !QS(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = Nt(e[r]));
  else
    return e;
  return t;
}
var ps = (e) => Array.isArray(e) ? e.filter(Boolean) : [], dt = (e) => e === void 0, ce = (e, t, n) => {
  if (!t || !vt(e))
    return n;
  const r = ps(t.split(/[,[\].]+?/)).reduce((i, o) => St(i) ? i : i[o], e);
  return dt(r) || r === e ? dt(e[t]) ? n : e[t] : r;
}, ln = (e) => typeof e == "boolean", au = (e) => /^\w*$/.test(e), Qm = (e) => ps(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Qe = (e, t, n) => {
  let r = -1;
  const i = au(t) ? [t] : Qm(t), o = i.length, a = o - 1;
  for (; ++r < o; ) {
    const s = i[r];
    let c = n;
    if (r !== a) {
      const l = e[s];
      c = vt(l) || Array.isArray(l) ? l : isNaN(+i[r + 1]) ? {} : [];
    }
    if (s === "__proto__")
      return;
    e[s] = c, e = e[s];
  }
  return e;
};
const Aa = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Kt = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, _n = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, ey = Le.createContext(null), hs = () => Le.useContext(ey), eC = (e) => {
  const { children: t, ...n } = e;
  return Le.createElement(ey.Provider, { value: n }, t);
};
var ty = (e, t, n, r = !0) => {
  const i = {
    defaultValues: t._defaultValues
  };
  for (const o in e)
    Object.defineProperty(i, o, {
      get: () => {
        const a = o;
        return t._proxyFormState[a] !== Kt.all && (t._proxyFormState[a] = !r || Kt.all), n && (n[a] = !0), e[a];
      }
    });
  return i;
}, Mt = (e) => vt(e) && !Object.keys(e).length, ny = (e, t, n, r) => {
  n(e);
  const { name: i, ...o } = e;
  return Mt(o) || Object.keys(o).length >= Object.keys(t).length || Object.keys(o).find((a) => t[a] === (!r || Kt.all));
}, zi = (e) => Array.isArray(e) ? e : [e], ry = (e, t, n) => !e || !t || e === t || zi(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function su(e) {
  const t = Le.useRef(e);
  t.current = e, Le.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function tC(e) {
  const t = hs(), { control: n = t.control, disabled: r, name: i, exact: o } = e || {}, [a, s] = Le.useState(n._formState), c = Le.useRef(!0), l = Le.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = Le.useRef(i);
  return u.current = i, su({
    disabled: r,
    next: (d) => c.current && ry(u.current, d.name, o) && ny(d, l.current, n._updateFormState) && s({
      ...n._formState,
      ...d
    }),
    subject: n._subjects.state
  }), Le.useEffect(() => (c.current = !0, l.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), ty(a, n, l.current, !1);
}
var pn = (e) => typeof e == "string", iy = (e, t, n, r, i) => pn(e) ? (r && t.watch.add(e), ce(n, e, i)) : Array.isArray(e) ? e.map((o) => (r && t.watch.add(o), ce(n, o))) : (r && (t.watchAll = !0), n);
function nC(e) {
  const t = hs(), { control: n = t.control, name: r, defaultValue: i, disabled: o, exact: a } = e || {}, s = Le.useRef(r);
  s.current = r, su({
    disabled: o,
    subject: n._subjects.values,
    next: (u) => {
      ry(s.current, u.name, a) && l(Nt(iy(s.current, n._names, u.values || n._formValues, !1, i)));
    }
  });
  const [c, l] = Le.useState(n._getWatch(r, i));
  return Le.useEffect(() => n._removeUnmounted()), c;
}
function rC(e) {
  const t = hs(), { name: n, disabled: r, control: i = t.control, shouldUnregister: o } = e, a = Jm(i._names.array, n), s = nC({
    control: i,
    name: n,
    defaultValue: ce(i._formValues, n, ce(i._defaultValues, n, e.defaultValue)),
    exact: !0
  }), c = tC({
    control: i,
    name: n,
    exact: !0
  }), l = Le.useRef(i.register(n, {
    ...e.rules,
    value: s,
    ...ln(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return Le.useEffect(() => {
    const u = i._options.shouldUnregister || o, d = (p, h) => {
      const m = ce(i._fields, p);
      m && m._f && (m._f.mount = h);
    };
    if (d(n, !0), u) {
      const p = Nt(ce(i._options.defaultValues, n));
      Qe(i._defaultValues, n, p), dt(ce(i._formValues, n)) && Qe(i._formValues, n, p);
    }
    return () => {
      (a ? u && !i._state.action : u) ? i.unregister(n) : d(n, !1);
    };
  }, [n, i, a, o]), Le.useEffect(() => {
    ce(i._fields, n) && i._updateDisabledField({
      disabled: r,
      fields: i._fields,
      name: n,
      value: ce(i._fields, n)._f.value
    });
  }, [r, n, i]), {
    field: {
      name: n,
      value: s,
      ...ln(r) || c.disabled ? { disabled: c.disabled || r } : {},
      onChange: Le.useCallback((u) => l.current.onChange({
        target: {
          value: Xm(u),
          name: n
        },
        type: Aa.CHANGE
      }), [n]),
      onBlur: Le.useCallback(() => l.current.onBlur({
        target: {
          value: ce(i._formValues, n),
          name: n
        },
        type: Aa.BLUR
      }), [n, i]),
      ref: Le.useCallback((u) => {
        const d = ce(i._fields, n);
        d && u && (d._f.ref = {
          focus: () => u.focus(),
          select: () => u.select(),
          setCustomValidity: (p) => u.setCustomValidity(p),
          reportValidity: () => u.reportValidity()
        });
      }, [i._fields, n])
    },
    formState: c,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!ce(c.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!ce(c.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!ce(c.touchedFields, n)
      },
      isValidating: {
        enumerable: !0,
        get: () => !!ce(c.validatingFields, n)
      },
      error: {
        enumerable: !0,
        get: () => ce(c.errors, n)
      }
    })
  };
}
const iC = (e) => e.render(rC(e));
var oy = (e, t, n, r, i) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: i || !0
  }
} : {}, Pd = (e) => ({
  isOnSubmit: !e || e === Kt.onSubmit,
  isOnBlur: e === Kt.onBlur,
  isOnChange: e === Kt.onChange,
  isOnAll: e === Kt.all,
  isOnTouch: e === Kt.onTouched
}), Nd = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const $i = (e, t, n, r) => {
  for (const i of n || Object.keys(e)) {
    const o = ce(e, i);
    if (o) {
      const { _f: a, ...s } = o;
      if (a) {
        if (a.refs && a.refs[0] && t(a.refs[0], i) && !r)
          break;
        if (a.ref && t(a.ref, a.name) && !r)
          break;
        $i(s, t);
      } else vt(s) && $i(s, t);
    }
  }
};
var oC = (e, t, n) => {
  const r = zi(ce(e, n));
  return Qe(r, "root", t[n]), Qe(e, n, r), e;
}, cu = (e) => e.type === "file", qn = (e) => typeof e == "function", Oa = (e) => {
  if (!ou)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, sa = (e) => pn(e), lu = (e) => e.type === "radio", Ra = (e) => e instanceof RegExp;
const Md = {
  value: !1,
  isValid: !1
}, Id = { value: !0, isValid: !0 };
var ay = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !dt(e[0].attributes.value) ? dt(e[0].value) || e[0].value === "" ? Id : { value: e[0].value, isValid: !0 } : Id
    ) : Md;
  }
  return Md;
};
const Dd = {
  isValid: !1,
  value: null
};
var sy = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, Dd) : Dd;
function jd(e, t, n = "validate") {
  if (sa(e) || Array.isArray(e) && e.every(sa) || ln(e) && !e)
    return {
      type: n,
      message: sa(e) ? e : "",
      ref: t
    };
}
var jr = (e) => vt(e) && !Ra(e) ? e : {
  value: e,
  message: ""
}, Fd = async (e, t, n, r, i) => {
  const { ref: o, refs: a, required: s, maxLength: c, minLength: l, min: u, max: d, pattern: p, validate: h, name: m, valueAsNumber: y, mount: v, disabled: b } = e._f, x = ce(t, m);
  if (!v || b)
    return {};
  const S = a ? a[0] : o, A = (V) => {
    r && S.reportValidity && (S.setCustomValidity(ln(V) ? "" : V || ""), S.reportValidity());
  }, E = {}, N = lu(o), P = Oo(o), U = N || P, ue = (y || cu(o)) && dt(o.value) && dt(x) || Oa(o) && o.value === "" || x === "" || Array.isArray(x) && !x.length, ye = oy.bind(null, m, n, E), pe = (V, Q, B, se = _n.maxLength, j = _n.minLength) => {
    const fe = V ? Q : B;
    E[m] = {
      type: V ? se : j,
      message: fe,
      ref: o,
      ...ye(V ? se : j, fe)
    };
  };
  if (i ? !Array.isArray(x) || !x.length : s && (!U && (ue || St(x)) || ln(x) && !x || P && !ay(a).isValid || N && !sy(a).isValid)) {
    const { value: V, message: Q } = sa(s) ? { value: !!s, message: s } : jr(s);
    if (V && (E[m] = {
      type: _n.required,
      message: Q,
      ref: S,
      ...ye(_n.required, Q)
    }, !n))
      return A(Q), E;
  }
  if (!ue && (!St(u) || !St(d))) {
    let V, Q;
    const B = jr(d), se = jr(u);
    if (!St(x) && !isNaN(x)) {
      const j = o.valueAsNumber || x && +x;
      St(B.value) || (V = j > B.value), St(se.value) || (Q = j < se.value);
    } else {
      const j = o.valueAsDate || new Date(x), fe = (L) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + L), _e = o.type == "time", J = o.type == "week";
      pn(B.value) && x && (V = _e ? fe(x) > fe(B.value) : J ? x > B.value : j > new Date(B.value)), pn(se.value) && x && (Q = _e ? fe(x) < fe(se.value) : J ? x < se.value : j < new Date(se.value));
    }
    if ((V || Q) && (pe(!!V, B.message, se.message, _n.max, _n.min), !n))
      return A(E[m].message), E;
  }
  if ((c || l) && !ue && (pn(x) || i && Array.isArray(x))) {
    const V = jr(c), Q = jr(l), B = !St(V.value) && x.length > +V.value, se = !St(Q.value) && x.length < +Q.value;
    if ((B || se) && (pe(B, V.message, Q.message), !n))
      return A(E[m].message), E;
  }
  if (p && !ue && pn(x)) {
    const { value: V, message: Q } = jr(p);
    if (Ra(V) && !x.match(V) && (E[m] = {
      type: _n.pattern,
      message: Q,
      ref: o,
      ...ye(_n.pattern, Q)
    }, !n))
      return A(Q), E;
  }
  if (h) {
    if (qn(h)) {
      const V = await h(x, t), Q = jd(V, S);
      if (Q && (E[m] = {
        ...Q,
        ...ye(_n.validate, Q.message)
      }, !n))
        return A(Q.message), E;
    } else if (vt(h)) {
      let V = {};
      for (const Q in h) {
        if (!Mt(V) && !n)
          break;
        const B = jd(await h[Q](x, t), S, Q);
        B && (V = {
          ...B,
          ...ye(Q, B.message)
        }, A(B.message), n && (E[m] = V));
      }
      if (!Mt(V) && (E[m] = {
        ref: S,
        ...V
      }, !n))
        return E;
    }
  }
  return A(!0), E;
};
function aC(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = dt(e) ? r++ : e[t[r++]];
  return e;
}
function sC(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !dt(e[t]))
      return !1;
  return !0;
}
function gt(e, t) {
  const n = Array.isArray(t) ? t : au(t) ? [t] : Qm(t), r = n.length === 1 ? e : aC(e, n), i = n.length - 1, o = n[i];
  return r && delete r[o], i !== 0 && (vt(r) && Mt(r) || Array.isArray(r) && sC(r)) && gt(e, n.slice(0, -1)), e;
}
var gc = () => {
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
}, Ta = (e) => St(e) || !Km(e);
function pr(e, t) {
  if (Ta(e) || Ta(t))
    return e === t;
  if (qr(e) && qr(t))
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
      if (qr(o) && qr(a) || vt(o) && vt(a) || Array.isArray(o) && Array.isArray(a) ? !pr(o, a) : o !== a)
        return !1;
    }
  }
  return !0;
}
var cy = (e) => e.type === "select-multiple", cC = (e) => lu(e) || Oo(e), vc = (e) => Oa(e) && e.isConnected, ly = (e) => {
  for (const t in e)
    if (qn(e[t]))
      return !0;
  return !1;
};
function ka(e, t = {}) {
  const n = Array.isArray(e);
  if (vt(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || vt(e[r]) && !ly(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, ka(e[r], t[r])) : St(e[r]) || (t[r] = !0);
  return t;
}
function uy(e, t, n) {
  const r = Array.isArray(e);
  if (vt(e) || r)
    for (const i in e)
      Array.isArray(e[i]) || vt(e[i]) && !ly(e[i]) ? dt(t) || Ta(n[i]) ? n[i] = Array.isArray(e[i]) ? ka(e[i], []) : { ...ka(e[i]) } : uy(e[i], St(t) ? {} : t[i], n[i]) : n[i] = !pr(e[i], t[i]);
  return n;
}
var Ho = (e, t) => uy(e, t, ka(t)), fy = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => dt(e) ? e : t ? e === "" ? NaN : e && +e : n && pn(e) ? new Date(e) : r ? r(e) : e;
function bc(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return cu(t) ? t.files : lu(t) ? sy(e.refs).value : cy(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Oo(t) ? ay(e.refs).value : fy(dt(t.value) ? e.ref.value : t.value, e);
}
var lC = (e, t, n, r) => {
  const i = {};
  for (const o of e) {
    const a = ce(t, o);
    a && Qe(i, o, a._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: i,
    shouldUseNativeValidation: r
  };
}, Ei = (e) => dt(e) ? e : Ra(e) ? e.source : vt(e) ? Ra(e.value) ? e.value.source : e.value : e, uC = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Ld(e, t, n) {
  const r = ce(e, n);
  if (r || au(n))
    return {
      error: r,
      name: n
    };
  const i = n.split(".");
  for (; i.length; ) {
    const o = i.join("."), a = ce(t, o), s = ce(e, o);
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
var fC = (e, t, n, r, i) => i.isOnAll ? !1 : !n && i.isOnTouch ? !(t || e) : (n ? r.isOnBlur : i.isOnBlur) ? !e : (n ? r.isOnChange : i.isOnChange) ? e : !0, dC = (e, t) => !ps(ce(e, t)).length && gt(e, t);
const pC = {
  mode: Kt.onSubmit,
  reValidateMode: Kt.onChange,
  shouldFocusError: !0
};
function hC(e = {}) {
  let t = {
    ...pC,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: qn(t.defaultValues),
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
  }, r = {}, i = vt(t.defaultValues) || vt(t.values) ? Nt(t.defaultValues || t.values) || {} : {}, o = t.shouldUnregister ? {} : Nt(i), a = {
    action: !1,
    mount: !1,
    watch: !1
  }, s = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, c, l = 0;
  const u = {
    isDirty: !1,
    dirtyFields: !1,
    validatingFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, d = {
    values: gc(),
    array: gc(),
    state: gc()
  }, p = Pd(t.mode), h = Pd(t.reValidateMode), m = t.criteriaMode === Kt.all, y = (C) => (k) => {
    clearTimeout(l), l = setTimeout(C, k);
  }, v = async (C) => {
    if (u.isValid || C) {
      const k = t.resolver ? Mt((await U()).errors) : await ye(r, !0);
      k !== n.isValid && d.state.next({
        isValid: k
      });
    }
  }, b = (C, k) => {
    (u.isValidating || u.validatingFields) && ((C || Array.from(s.mount)).forEach((D) => {
      D && (k ? Qe(n.validatingFields, D, k) : gt(n.validatingFields, D));
    }), d.state.next({
      validatingFields: n.validatingFields,
      isValidating: !Mt(n.validatingFields)
    }));
  }, x = (C, k = [], D, f, O = !0, T = !0) => {
    if (f && D) {
      if (a.action = !0, T && Array.isArray(ce(r, C))) {
        const F = D(ce(r, C), f.argA, f.argB);
        O && Qe(r, C, F);
      }
      if (T && Array.isArray(ce(n.errors, C))) {
        const F = D(ce(n.errors, C), f.argA, f.argB);
        O && Qe(n.errors, C, F), dC(n.errors, C);
      }
      if (u.touchedFields && T && Array.isArray(ce(n.touchedFields, C))) {
        const F = D(ce(n.touchedFields, C), f.argA, f.argB);
        O && Qe(n.touchedFields, C, F);
      }
      u.dirtyFields && (n.dirtyFields = Ho(i, o)), d.state.next({
        name: C,
        isDirty: V(C, k),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      Qe(o, C, k);
  }, S = (C, k) => {
    Qe(n.errors, C, k), d.state.next({
      errors: n.errors
    });
  }, A = (C) => {
    n.errors = C, d.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, E = (C, k, D, f) => {
    const O = ce(r, C);
    if (O) {
      const T = ce(o, C, dt(D) ? ce(i, C) : D);
      dt(T) || f && f.defaultChecked || k ? Qe(o, C, k ? T : bc(O._f)) : se(C, T), a.mount && v();
    }
  }, N = (C, k, D, f, O) => {
    let T = !1, F = !1;
    const M = {
      name: C
    }, Z = !!(ce(r, C) && ce(r, C)._f && ce(r, C)._f.disabled);
    if (!D || f) {
      u.isDirty && (F = n.isDirty, n.isDirty = M.isDirty = V(), T = F !== M.isDirty);
      const W = Z || pr(ce(i, C), k);
      F = !!(!Z && ce(n.dirtyFields, C)), W || Z ? gt(n.dirtyFields, C) : Qe(n.dirtyFields, C, !0), M.dirtyFields = n.dirtyFields, T = T || u.dirtyFields && F !== !W;
    }
    if (D) {
      const W = ce(n.touchedFields, C);
      W || (Qe(n.touchedFields, C, D), M.touchedFields = n.touchedFields, T = T || u.touchedFields && W !== D);
    }
    return T && O && d.state.next(M), T ? M : {};
  }, P = (C, k, D, f) => {
    const O = ce(n.errors, C), T = u.isValid && ln(k) && n.isValid !== k;
    if (e.delayError && D ? (c = y(() => S(C, D)), c(e.delayError)) : (clearTimeout(l), c = null, D ? Qe(n.errors, C, D) : gt(n.errors, C)), (D ? !pr(O, D) : O) || !Mt(f) || T) {
      const F = {
        ...f,
        ...T && ln(k) ? { isValid: k } : {},
        errors: n.errors,
        name: C
      };
      n = {
        ...n,
        ...F
      }, d.state.next(F);
    }
  }, U = async (C) => {
    b(C, !0);
    const k = await t.resolver(o, t.context, lC(C || s.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return b(C), k;
  }, ue = async (C) => {
    const { errors: k } = await U(C);
    if (C)
      for (const D of C) {
        const f = ce(k, D);
        f ? Qe(n.errors, D, f) : gt(n.errors, D);
      }
    else
      n.errors = k;
    return k;
  }, ye = async (C, k, D = {
    valid: !0
  }) => {
    for (const f in C) {
      const O = C[f];
      if (O) {
        const { _f: T, ...F } = O;
        if (T) {
          const M = s.array.has(T.name);
          b([f], !0);
          const Z = await Fd(O, o, m, t.shouldUseNativeValidation && !k, M);
          if (b([f]), Z[T.name] && (D.valid = !1, k))
            break;
          !k && (ce(Z, T.name) ? M ? oC(n.errors, Z, T.name) : Qe(n.errors, T.name, Z[T.name]) : gt(n.errors, T.name));
        }
        !Mt(F) && await ye(F, k, D);
      }
    }
    return D.valid;
  }, pe = () => {
    for (const C of s.unMount) {
      const k = ce(r, C);
      k && (k._f.refs ? k._f.refs.every((D) => !vc(D)) : !vc(k._f.ref)) && Y(C);
    }
    s.unMount = /* @__PURE__ */ new Set();
  }, V = (C, k) => (C && k && Qe(o, C, k), !pr(q(), i)), Q = (C, k, D) => iy(C, s, {
    ...a.mount ? o : dt(k) ? i : pn(C) ? { [C]: k } : k
  }, D, k), B = (C) => ps(ce(a.mount ? o : i, C, e.shouldUnregister ? ce(i, C, []) : [])), se = (C, k, D = {}) => {
    const f = ce(r, C);
    let O = k;
    if (f) {
      const T = f._f;
      T && (!T.disabled && Qe(o, C, fy(k, T)), O = Oa(T.ref) && St(k) ? "" : k, cy(T.ref) ? [...T.ref.options].forEach((F) => F.selected = O.includes(F.value)) : T.refs ? Oo(T.ref) ? T.refs.length > 1 ? T.refs.forEach((F) => (!F.defaultChecked || !F.disabled) && (F.checked = Array.isArray(O) ? !!O.find((M) => M === F.value) : O === F.value)) : T.refs[0] && (T.refs[0].checked = !!O) : T.refs.forEach((F) => F.checked = F.value === O) : cu(T.ref) ? T.ref.value = "" : (T.ref.value = O, T.ref.type || d.values.next({
        name: C,
        values: { ...o }
      })));
    }
    (D.shouldDirty || D.shouldTouch) && N(C, O, D.shouldTouch, D.shouldDirty, !0), D.shouldValidate && L(C);
  }, j = (C, k, D) => {
    for (const f in k) {
      const O = k[f], T = `${C}.${f}`, F = ce(r, T);
      (s.array.has(C) || !Ta(O) || F && !F._f) && !qr(O) ? j(T, O, D) : se(T, O, D);
    }
  }, fe = (C, k, D = {}) => {
    const f = ce(r, C), O = s.array.has(C), T = Nt(k);
    Qe(o, C, T), O ? (d.array.next({
      name: C,
      values: { ...o }
    }), (u.isDirty || u.dirtyFields) && D.shouldDirty && d.state.next({
      name: C,
      dirtyFields: Ho(i, o),
      isDirty: V(C, T)
    })) : f && !f._f && !St(T) ? j(C, T, D) : se(C, T, D), Nd(C, s) && d.state.next({ ...n }), d.values.next({
      name: a.mount ? C : void 0,
      values: { ...o }
    });
  }, _e = async (C) => {
    a.mount = !0;
    const k = C.target;
    let D = k.name, f = !0;
    const O = ce(r, D), T = () => k.type ? bc(O._f) : Xm(C), F = (M) => {
      f = Number.isNaN(M) || M === ce(o, D, M);
    };
    if (O) {
      let M, Z;
      const W = T(), de = C.type === Aa.BLUR || C.type === Aa.FOCUS_OUT, Re = !uC(O._f) && !t.resolver && !ce(n.errors, D) && !O._f.deps || fC(de, ce(n.touchedFields, D), n.isSubmitted, h, p), Me = Nd(D, s, de);
      Qe(o, D, W), de ? (O._f.onBlur && O._f.onBlur(C), c && c(0)) : O._f.onChange && O._f.onChange(C);
      const We = N(D, W, de, !1), Ee = !Mt(We) || Me;
      if (!de && d.values.next({
        name: D,
        type: C.type,
        values: { ...o }
      }), Re)
        return u.isValid && v(), Ee && d.state.next({ name: D, ...Me ? {} : We });
      if (!de && Me && d.state.next({ ...n }), t.resolver) {
        const { errors: ft } = await U([D]);
        if (F(W), f) {
          const g = Ld(n.errors, r, D), $ = Ld(ft, r, g.name || D);
          M = $.error, D = $.name, Z = Mt(ft);
        }
      } else
        b([D], !0), M = (await Fd(O, o, m, t.shouldUseNativeValidation))[D], b([D]), F(W), f && (M ? Z = !1 : u.isValid && (Z = await ye(r, !0)));
      f && (O._f.deps && L(O._f.deps), P(D, Z, M, We));
    }
  }, J = (C, k) => {
    if (ce(n.errors, k) && C.focus)
      return C.focus(), 1;
  }, L = async (C, k = {}) => {
    let D, f;
    const O = zi(C);
    if (t.resolver) {
      const T = await ue(dt(C) ? C : O);
      D = Mt(T), f = C ? !O.some((F) => ce(T, F)) : D;
    } else C ? (f = (await Promise.all(O.map(async (T) => {
      const F = ce(r, T);
      return await ye(F && F._f ? { [T]: F } : F);
    }))).every(Boolean), !(!f && !n.isValid) && v()) : f = D = await ye(r);
    return d.state.next({
      ...!pn(C) || u.isValid && D !== n.isValid ? {} : { name: C },
      ...t.resolver || !C ? { isValid: D } : {},
      errors: n.errors
    }), k.shouldFocus && !f && $i(r, J, C ? O : s.mount), f;
  }, q = (C) => {
    const k = {
      ...a.mount ? o : i
    };
    return dt(C) ? k : pn(C) ? ce(k, C) : C.map((D) => ce(k, D));
  }, ge = (C, k) => ({
    invalid: !!ce((k || n).errors, C),
    isDirty: !!ce((k || n).dirtyFields, C),
    error: ce((k || n).errors, C),
    isValidating: !!ce(n.validatingFields, C),
    isTouched: !!ce((k || n).touchedFields, C)
  }), I = (C) => {
    C && zi(C).forEach((k) => gt(n.errors, k)), d.state.next({
      errors: C ? n.errors : {}
    });
  }, X = (C, k, D) => {
    const f = (ce(r, C, { _f: {} })._f || {}).ref, O = ce(n.errors, C) || {}, { ref: T, message: F, type: M, ...Z } = O;
    Qe(n.errors, C, {
      ...Z,
      ...k,
      ref: f
    }), d.state.next({
      name: C,
      errors: n.errors,
      isValid: !1
    }), D && D.shouldFocus && f && f.focus && f.focus();
  }, re = (C, k) => qn(C) ? d.values.subscribe({
    next: (D) => C(Q(void 0, k), D)
  }) : Q(C, k, !0), Y = (C, k = {}) => {
    for (const D of C ? zi(C) : s.mount)
      s.mount.delete(D), s.array.delete(D), k.keepValue || (gt(r, D), gt(o, D)), !k.keepError && gt(n.errors, D), !k.keepDirty && gt(n.dirtyFields, D), !k.keepTouched && gt(n.touchedFields, D), !k.keepIsValidating && gt(n.validatingFields, D), !t.shouldUnregister && !k.keepDefaultValue && gt(i, D);
    d.values.next({
      values: { ...o }
    }), d.state.next({
      ...n,
      ...k.keepDirty ? { isDirty: V() } : {}
    }), !k.keepIsValid && v();
  }, G = ({ disabled: C, name: k, field: D, fields: f, value: O }) => {
    if (ln(C) && a.mount || C) {
      const T = C ? void 0 : dt(O) ? bc(D ? D._f : ce(f, k)._f) : O;
      Qe(o, k, T), N(k, T, !1, !1, !0);
    }
  }, ie = (C, k = {}) => {
    let D = ce(r, C);
    const f = ln(k.disabled);
    return Qe(r, C, {
      ...D || {},
      _f: {
        ...D && D._f ? D._f : { ref: { name: C } },
        name: C,
        mount: !0,
        ...k
      }
    }), s.mount.add(C), D ? G({
      field: D,
      disabled: k.disabled,
      name: C,
      value: k.value
    }) : E(C, !0, k.value), {
      ...f ? { disabled: k.disabled } : {},
      ...t.progressive ? {
        required: !!k.required,
        min: Ei(k.min),
        max: Ei(k.max),
        minLength: Ei(k.minLength),
        maxLength: Ei(k.maxLength),
        pattern: Ei(k.pattern)
      } : {},
      name: C,
      onChange: _e,
      onBlur: _e,
      ref: (O) => {
        if (O) {
          ie(C, k), D = ce(r, C);
          const T = dt(O.value) && O.querySelectorAll && O.querySelectorAll("input,select,textarea")[0] || O, F = cC(T), M = D._f.refs || [];
          if (F ? M.find((Z) => Z === T) : T === D._f.ref)
            return;
          Qe(r, C, {
            _f: {
              ...D._f,
              ...F ? {
                refs: [
                  ...M.filter(vc),
                  T,
                  ...Array.isArray(ce(i, C)) ? [{}] : []
                ],
                ref: { type: T.type, name: C }
              } : { ref: T }
            }
          }), E(C, !1, void 0, T);
        } else
          D = ce(r, C, {}), D._f && (D._f.mount = !1), (t.shouldUnregister || k.shouldUnregister) && !(Jm(s.array, C) && a.action) && s.unMount.add(C);
      }
    };
  }, le = () => t.shouldFocusError && $i(r, J, s.mount), ve = (C) => {
    ln(C) && (d.state.next({ disabled: C }), $i(r, (k, D) => {
      const f = ce(r, D);
      f && (k.disabled = f._f.disabled || C, Array.isArray(f._f.refs) && f._f.refs.forEach((O) => {
        O.disabled = f._f.disabled || C;
      }));
    }, 0, !1));
  }, Pe = (C, k) => async (D) => {
    let f;
    D && (D.preventDefault && D.preventDefault(), D.persist && D.persist());
    let O = Nt(o);
    if (d.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: T, values: F } = await U();
      n.errors = T, O = F;
    } else
      await ye(r);
    if (gt(n.errors, "root"), Mt(n.errors)) {
      d.state.next({
        errors: {}
      });
      try {
        await C(O, D);
      } catch (T) {
        f = T;
      }
    } else
      k && await k({ ...n.errors }, D), le(), setTimeout(le);
    if (d.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Mt(n.errors) && !f,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), f)
      throw f;
  }, ee = (C, k = {}) => {
    ce(r, C) && (dt(k.defaultValue) ? fe(C, Nt(ce(i, C))) : (fe(C, k.defaultValue), Qe(i, C, Nt(k.defaultValue))), k.keepTouched || gt(n.touchedFields, C), k.keepDirty || (gt(n.dirtyFields, C), n.isDirty = k.defaultValue ? V(C, Nt(ce(i, C))) : V()), k.keepError || (gt(n.errors, C), u.isValid && v()), d.state.next({ ...n }));
  }, Oe = (C, k = {}) => {
    const D = C ? Nt(C) : i, f = Nt(D), O = Mt(C), T = O ? i : f;
    if (k.keepDefaultValues || (i = D), !k.keepValues) {
      if (k.keepDirtyValues)
        for (const F of s.mount)
          ce(n.dirtyFields, F) ? Qe(T, F, ce(o, F)) : fe(F, ce(T, F));
      else {
        if (ou && dt(C))
          for (const F of s.mount) {
            const M = ce(r, F);
            if (M && M._f) {
              const Z = Array.isArray(M._f.refs) ? M._f.refs[0] : M._f.ref;
              if (Oa(Z)) {
                const W = Z.closest("form");
                if (W) {
                  W.reset();
                  break;
                }
              }
            }
          }
        r = {};
      }
      o = e.shouldUnregister ? k.keepDefaultValues ? Nt(i) : {} : Nt(T), d.array.next({
        values: { ...T }
      }), d.values.next({
        values: { ...T }
      });
    }
    s = {
      mount: k.keepDirtyValues ? s.mount : /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, a.mount = !u.isValid || !!k.keepIsValid || !!k.keepDirtyValues, a.watch = !!e.shouldUnregister, d.state.next({
      submitCount: k.keepSubmitCount ? n.submitCount : 0,
      isDirty: O ? !1 : k.keepDirty ? n.isDirty : !!(k.keepDefaultValues && !pr(C, i)),
      isSubmitted: k.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: O ? {} : k.keepDirtyValues ? k.keepDefaultValues && o ? Ho(i, o) : n.dirtyFields : k.keepDefaultValues && C ? Ho(i, C) : k.keepDirty ? n.dirtyFields : {},
      touchedFields: k.keepTouched ? n.touchedFields : {},
      errors: k.keepErrors ? n.errors : {},
      isSubmitSuccessful: k.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Be = (C, k) => Oe(qn(C) ? C(o) : C, k);
  return {
    control: {
      register: ie,
      unregister: Y,
      getFieldState: ge,
      handleSubmit: Pe,
      setError: X,
      _executeSchema: U,
      _getWatch: Q,
      _getDirty: V,
      _updateValid: v,
      _removeUnmounted: pe,
      _updateFieldArray: x,
      _updateDisabledField: G,
      _getFieldArray: B,
      _reset: Oe,
      _resetDefaultValues: () => qn(t.defaultValues) && t.defaultValues().then((C) => {
        Be(C, t.resetOptions), d.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (C) => {
        n = {
          ...n,
          ...C
        };
      },
      _disableForm: ve,
      _subjects: d,
      _proxyFormState: u,
      _setErrors: A,
      get _fields() {
        return r;
      },
      get _formValues() {
        return o;
      },
      get _state() {
        return a;
      },
      set _state(C) {
        a = C;
      },
      get _defaultValues() {
        return i;
      },
      get _names() {
        return s;
      },
      set _names(C) {
        s = C;
      },
      get _formState() {
        return n;
      },
      set _formState(C) {
        n = C;
      },
      get _options() {
        return t;
      },
      set _options(C) {
        t = {
          ...t,
          ...C
        };
      }
    },
    trigger: L,
    register: ie,
    handleSubmit: Pe,
    watch: re,
    setValue: fe,
    getValues: q,
    reset: Be,
    resetField: ee,
    clearErrors: I,
    unregister: Y,
    setError: X,
    setFocus: (C, k = {}) => {
      const D = ce(r, C), f = D && D._f;
      if (f) {
        const O = f.refs ? f.refs[0] : f.ref;
        O.focus && (O.focus(), k.shouldSelect && O.select());
      }
    },
    getFieldState: ge
  };
}
function mC(e = {}) {
  const t = Le.useRef(), n = Le.useRef(), [r, i] = Le.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: qn(e.defaultValues),
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
    defaultValues: qn(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...hC(e),
    formState: r
  });
  const o = t.current.control;
  return o._options = e, su({
    subject: o._subjects.state,
    next: (a) => {
      ny(a, o._proxyFormState, o._updateFormState, !0) && i({ ...o._formState });
    }
  }), Le.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]), Le.useEffect(() => {
    if (o._proxyFormState.isDirty) {
      const a = o._getDirty();
      a !== r.isDirty && o._subjects.state.next({
        isDirty: a
      });
    }
  }, [o, r.isDirty]), Le.useEffect(() => {
    e.values && !pr(e.values, n.current) ? (o._reset(e.values, o._options.resetOptions), n.current = e.values, i((a) => ({ ...a }))) : o._resetDefaultValues();
  }, [e.values, o]), Le.useEffect(() => {
    e.errors && o._setErrors(e.errors);
  }, [e.errors, o]), Le.useEffect(() => {
    o._state.mount || (o._updateValid(), o._state.mount = !0), o._state.watch && (o._state.watch = !1, o._subjects.state.next({ ...o._formState })), o._removeUnmounted();
  }), Le.useEffect(() => {
    e.shouldUnregister && o._subjects.values.next({
      values: o._getWatch()
    });
  }, [e.shouldUnregister, o]), t.current.formState = ty(r, o), t.current;
}
var Ye;
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
})(Ye || (Ye = {}));
var ml;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(ml || (ml = {}));
const xe = Ye.arrayToEnum([
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
]), Wn = (e) => {
  switch (typeof e) {
    case "undefined":
      return xe.undefined;
    case "string":
      return xe.string;
    case "number":
      return isNaN(e) ? xe.nan : xe.number;
    case "boolean":
      return xe.boolean;
    case "function":
      return xe.function;
    case "bigint":
      return xe.bigint;
    case "symbol":
      return xe.symbol;
    case "object":
      return Array.isArray(e) ? xe.array : e === null ? xe.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? xe.promise : typeof Map < "u" && e instanceof Map ? xe.map : typeof Set < "u" && e instanceof Set ? xe.set : typeof Date < "u" && e instanceof Date ? xe.date : xe.object;
    default:
      return xe.unknown;
  }
}, oe = Ye.arrayToEnum([
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
]), yC = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Ut extends Error {
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
          let s = r, c = 0;
          for (; c < a.path.length; ) {
            const l = a.path[c];
            c === a.path.length - 1 ? (s[l] = s[l] || { _errors: [] }, s[l]._errors.push(n(a))) : s[l] = s[l] || { _errors: [] }, s = s[l], c++;
          }
        }
    };
    return i(this), r;
  }
  static assert(t) {
    if (!(t instanceof Ut))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Ye.jsonStringifyReplacer, 2);
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
Ut.create = (e) => new Ut(e);
const ai = (e, t) => {
  let n;
  switch (e.code) {
    case oe.invalid_type:
      e.received === xe.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case oe.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Ye.jsonStringifyReplacer)}`;
      break;
    case oe.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Ye.joinValues(e.keys, ", ")}`;
      break;
    case oe.invalid_union:
      n = "Invalid input";
      break;
    case oe.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Ye.joinValues(e.options)}`;
      break;
    case oe.invalid_enum_value:
      n = `Invalid enum value. Expected ${Ye.joinValues(e.options)}, received '${e.received}'`;
      break;
    case oe.invalid_arguments:
      n = "Invalid function arguments";
      break;
    case oe.invalid_return_type:
      n = "Invalid function return type";
      break;
    case oe.invalid_date:
      n = "Invalid date";
      break;
    case oe.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : Ye.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
      break;
    case oe.too_small:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : n = "Invalid input";
      break;
    case oe.too_big:
      e.type === "array" ? n = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? n = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? n = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? n = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? n = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : n = "Invalid input";
      break;
    case oe.custom:
      n = "Invalid input";
      break;
    case oe.invalid_intersection_types:
      n = "Intersection results could not be merged";
      break;
    case oe.not_multiple_of:
      n = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case oe.not_finite:
      n = "Number must be finite";
      break;
    default:
      n = t.defaultError, Ye.assertNever(e);
  }
  return { message: n };
};
let dy = ai;
function gC(e) {
  dy = e;
}
function Pa() {
  return dy;
}
const Na = (e) => {
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
  const c = r.filter((l) => !!l).slice().reverse();
  for (const l of c)
    s = l(a, { data: t, defaultError: s }).message;
  return {
    ...i,
    path: o,
    message: s
  };
}, vC = [];
function me(e, t) {
  const n = Pa(), r = Na({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      n,
      n === ai ? void 0 : ai
      // then global default map
    ].filter((i) => !!i)
  });
  e.common.issues.push(r);
}
class _t {
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
        return ke;
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
    return _t.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const i of n) {
      const { key: o, value: a } = i;
      if (o.status === "aborted" || a.status === "aborted")
        return ke;
      o.status === "dirty" && t.dirty(), a.status === "dirty" && t.dirty(), o.value !== "__proto__" && (typeof a.value < "u" || i.alwaysSet) && (r[o.value] = a.value);
    }
    return { status: t.value, value: r };
  }
}
const ke = Object.freeze({
  status: "aborted"
}), Yr = (e) => ({ status: "dirty", value: e }), Ct = (e) => ({ status: "valid", value: e }), yl = (e) => e.status === "aborted", gl = (e) => e.status === "dirty", Xi = (e) => e.status === "valid", Ji = (e) => typeof Promise < "u" && e instanceof Promise;
function Ma(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function py(e, t, n, r, i) {
  if (typeof t == "function" ? e !== t || !i : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ae;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(Ae || (Ae = {}));
var ki, Pi;
class gn {
  constructor(t, n, r, i) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = i;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const zd = (e, t) => {
  if (Xi(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new Ut(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function je(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: i } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: i } : { errorMap: (a, s) => {
    var c, l;
    const { message: u } = e;
    return a.code === "invalid_enum_value" ? { message: u ?? s.defaultError } : typeof s.data > "u" ? { message: (c = u ?? r) !== null && c !== void 0 ? c : s.defaultError } : a.code !== "invalid_type" ? { message: s.defaultError } : { message: (l = u ?? n) !== null && l !== void 0 ? l : s.defaultError };
  }, description: i };
}
class ze {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Wn(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Wn(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new _t(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Wn(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (Ji(n))
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
      parsedType: Wn(t)
    }, o = this._parseSync({ data: t, path: i.path, parent: i });
    return zd(i, o);
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
      parsedType: Wn(t)
    }, i = this._parse({ data: t, path: r.path, parent: r }), o = await (Ji(i) ? i : Promise.resolve(i));
    return zd(r, o);
  }
  refine(t, n) {
    const r = (i) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(i) : n;
    return this._refinement((i, o) => {
      const a = t(i), s = () => o.addIssue({
        code: oe.custom,
        ...r(i)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((c) => c ? !0 : (s(), !1)) : a ? !0 : (s(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, i) => t(r) ? !0 : (i.addIssue(typeof n == "function" ? n(r, i) : n), !1));
  }
  _refinement(t) {
    return new nn({
      schema: this,
      typeName: Te.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return mn.create(this, this._def);
  }
  nullable() {
    return nr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return tn.create(this, this._def);
  }
  promise() {
    return ci.create(this, this._def);
  }
  or(t) {
    return no.create([this, t], this._def);
  }
  and(t) {
    return ro.create(this, t, this._def);
  }
  transform(t) {
    return new nn({
      ...je(this._def),
      schema: this,
      typeName: Te.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new co({
      ...je(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Te.ZodDefault
    });
  }
  brand() {
    return new uu({
      typeName: Te.ZodBranded,
      type: this,
      ...je(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new lo({
      ...je(this._def),
      innerType: this,
      catchValue: n,
      typeName: Te.ZodCatch
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
    return Ro.create(this, t);
  }
  readonly() {
    return uo.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const bC = /^c[^\s-]{8,}$/i, xC = /^[0-9a-z]+$/, wC = /^[0-9A-HJKMNP-TV-Z]{26}$/, _C = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, EC = /^[a-z0-9_-]{21}$/i, SC = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, CC = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, AC = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let xc;
const OC = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, RC = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, TC = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, hy = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", kC = new RegExp(`^${hy}$`);
function my(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function PC(e) {
  return new RegExp(`^${my(e)}$`);
}
function yy(e) {
  let t = `${hy}T${my(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function NC(e, t) {
  return !!((t === "v4" || !t) && OC.test(e) || (t === "v6" || !t) && RC.test(e));
}
class Xt extends ze {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== xe.string) {
      const o = this._getOrReturnCtx(t);
      return me(o, {
        code: oe.invalid_type,
        expected: xe.string,
        received: o.parsedType
      }), ke;
    }
    const r = new _t();
    let i;
    for (const o of this._def.checks)
      if (o.kind === "min")
        t.data.length < o.value && (i = this._getOrReturnCtx(t, i), me(i, {
          code: oe.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), r.dirty());
      else if (o.kind === "max")
        t.data.length > o.value && (i = this._getOrReturnCtx(t, i), me(i, {
          code: oe.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), r.dirty());
      else if (o.kind === "length") {
        const a = t.data.length > o.value, s = t.data.length < o.value;
        (a || s) && (i = this._getOrReturnCtx(t, i), a ? me(i, {
          code: oe.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }) : s && me(i, {
          code: oe.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }), r.dirty());
      } else if (o.kind === "email")
        CC.test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
          validation: "email",
          code: oe.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "emoji")
        xc || (xc = new RegExp(AC, "u")), xc.test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
          validation: "emoji",
          code: oe.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "uuid")
        _C.test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
          validation: "uuid",
          code: oe.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "nanoid")
        EC.test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
          validation: "nanoid",
          code: oe.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "cuid")
        bC.test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
          validation: "cuid",
          code: oe.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "cuid2")
        xC.test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
          validation: "cuid2",
          code: oe.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "ulid")
        wC.test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
          validation: "ulid",
          code: oe.invalid_string,
          message: o.message
        }), r.dirty());
      else if (o.kind === "url")
        try {
          new URL(t.data);
        } catch {
          i = this._getOrReturnCtx(t, i), me(i, {
            validation: "url",
            code: oe.invalid_string,
            message: o.message
          }), r.dirty();
        }
      else o.kind === "regex" ? (o.regex.lastIndex = 0, o.regex.test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
        validation: "regex",
        code: oe.invalid_string,
        message: o.message
      }), r.dirty())) : o.kind === "trim" ? t.data = t.data.trim() : o.kind === "includes" ? t.data.includes(o.value, o.position) || (i = this._getOrReturnCtx(t, i), me(i, {
        code: oe.invalid_string,
        validation: { includes: o.value, position: o.position },
        message: o.message
      }), r.dirty()) : o.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : o.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : o.kind === "startsWith" ? t.data.startsWith(o.value) || (i = this._getOrReturnCtx(t, i), me(i, {
        code: oe.invalid_string,
        validation: { startsWith: o.value },
        message: o.message
      }), r.dirty()) : o.kind === "endsWith" ? t.data.endsWith(o.value) || (i = this._getOrReturnCtx(t, i), me(i, {
        code: oe.invalid_string,
        validation: { endsWith: o.value },
        message: o.message
      }), r.dirty()) : o.kind === "datetime" ? yy(o).test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
        code: oe.invalid_string,
        validation: "datetime",
        message: o.message
      }), r.dirty()) : o.kind === "date" ? kC.test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
        code: oe.invalid_string,
        validation: "date",
        message: o.message
      }), r.dirty()) : o.kind === "time" ? PC(o).test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
        code: oe.invalid_string,
        validation: "time",
        message: o.message
      }), r.dirty()) : o.kind === "duration" ? SC.test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
        validation: "duration",
        code: oe.invalid_string,
        message: o.message
      }), r.dirty()) : o.kind === "ip" ? NC(t.data, o.version) || (i = this._getOrReturnCtx(t, i), me(i, {
        validation: "ip",
        code: oe.invalid_string,
        message: o.message
      }), r.dirty()) : o.kind === "base64" ? TC.test(t.data) || (i = this._getOrReturnCtx(t, i), me(i, {
        validation: "base64",
        code: oe.invalid_string,
        message: o.message
      }), r.dirty()) : Ye.assertNever(o);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((i) => t.test(i), {
      validation: n,
      code: oe.invalid_string,
      ...Ae.errToObj(r)
    });
  }
  _addCheck(t) {
    return new Xt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...Ae.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...Ae.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...Ae.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...Ae.errToObj(t) });
  }
  nanoid(t) {
    return this._addCheck({ kind: "nanoid", ...Ae.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...Ae.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...Ae.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...Ae.errToObj(t) });
  }
  base64(t) {
    return this._addCheck({ kind: "base64", ...Ae.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...Ae.errToObj(t) });
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
      ...Ae.errToObj(t == null ? void 0 : t.message)
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
      ...Ae.errToObj(t == null ? void 0 : t.message)
    });
  }
  duration(t) {
    return this._addCheck({ kind: "duration", ...Ae.errToObj(t) });
  }
  regex(t, n) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...Ae.errToObj(n)
    });
  }
  includes(t, n) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: n == null ? void 0 : n.position,
      ...Ae.errToObj(n == null ? void 0 : n.message)
    });
  }
  startsWith(t, n) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...Ae.errToObj(n)
    });
  }
  endsWith(t, n) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...Ae.errToObj(n)
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...Ae.errToObj(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...Ae.errToObj(n)
    });
  }
  length(t, n) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...Ae.errToObj(n)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, Ae.errToObj(t));
  }
  trim() {
    return new Xt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Xt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Xt({
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
Xt.create = (e) => {
  var t;
  return new Xt({
    checks: [],
    typeName: Te.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...je(e)
  });
};
function MC(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, i = n > r ? n : r, o = parseInt(e.toFixed(i).replace(".", "")), a = parseInt(t.toFixed(i).replace(".", ""));
  return o % a / Math.pow(10, i);
}
class Qn extends ze {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== xe.number) {
      const o = this._getOrReturnCtx(t);
      return me(o, {
        code: oe.invalid_type,
        expected: xe.number,
        received: o.parsedType
      }), ke;
    }
    let r;
    const i = new _t();
    for (const o of this._def.checks)
      o.kind === "int" ? Ye.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), me(r, {
        code: oe.invalid_type,
        expected: "integer",
        received: "float",
        message: o.message
      }), i.dirty()) : o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (r = this._getOrReturnCtx(t, r), me(r, {
        code: oe.too_small,
        minimum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), i.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (r = this._getOrReturnCtx(t, r), me(r, {
        code: oe.too_big,
        maximum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), i.dirty()) : o.kind === "multipleOf" ? MC(t.data, o.value) !== 0 && (r = this._getOrReturnCtx(t, r), me(r, {
        code: oe.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), i.dirty()) : o.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), me(r, {
        code: oe.not_finite,
        message: o.message
      }), i.dirty()) : Ye.assertNever(o);
    return { status: i.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Ae.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Ae.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Ae.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Ae.toString(n));
  }
  setLimit(t, n, r, i) {
    return new Qn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: Ae.toString(i)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Qn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: Ae.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: Ae.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: Ae.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: Ae.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: Ae.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Ae.toString(n)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: Ae.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: Ae.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: Ae.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Ye.isInteger(t.value));
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
Qn.create = (e) => new Qn({
  checks: [],
  typeName: Te.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...je(e)
});
class er extends ze {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== xe.bigint) {
      const o = this._getOrReturnCtx(t);
      return me(o, {
        code: oe.invalid_type,
        expected: xe.bigint,
        received: o.parsedType
      }), ke;
    }
    let r;
    const i = new _t();
    for (const o of this._def.checks)
      o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (r = this._getOrReturnCtx(t, r), me(r, {
        code: oe.too_small,
        type: "bigint",
        minimum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), i.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (r = this._getOrReturnCtx(t, r), me(r, {
        code: oe.too_big,
        type: "bigint",
        maximum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), i.dirty()) : o.kind === "multipleOf" ? t.data % o.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), me(r, {
        code: oe.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), i.dirty()) : Ye.assertNever(o);
    return { status: i.value, value: t.data };
  }
  gte(t, n) {
    return this.setLimit("min", t, !0, Ae.toString(n));
  }
  gt(t, n) {
    return this.setLimit("min", t, !1, Ae.toString(n));
  }
  lte(t, n) {
    return this.setLimit("max", t, !0, Ae.toString(n));
  }
  lt(t, n) {
    return this.setLimit("max", t, !1, Ae.toString(n));
  }
  setLimit(t, n, r, i) {
    return new er({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: Ae.toString(i)
        }
      ]
    });
  }
  _addCheck(t) {
    return new er({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: Ae.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: Ae.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: Ae.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: Ae.toString(t)
    });
  }
  multipleOf(t, n) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: Ae.toString(n)
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
er.create = (e) => {
  var t;
  return new er({
    checks: [],
    typeName: Te.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...je(e)
  });
};
class Qi extends ze {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== xe.boolean) {
      const r = this._getOrReturnCtx(t);
      return me(r, {
        code: oe.invalid_type,
        expected: xe.boolean,
        received: r.parsedType
      }), ke;
    }
    return Ct(t.data);
  }
}
Qi.create = (e) => new Qi({
  typeName: Te.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...je(e)
});
class Ar extends ze {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== xe.date) {
      const o = this._getOrReturnCtx(t);
      return me(o, {
        code: oe.invalid_type,
        expected: xe.date,
        received: o.parsedType
      }), ke;
    }
    if (isNaN(t.data.getTime())) {
      const o = this._getOrReturnCtx(t);
      return me(o, {
        code: oe.invalid_date
      }), ke;
    }
    const r = new _t();
    let i;
    for (const o of this._def.checks)
      o.kind === "min" ? t.data.getTime() < o.value && (i = this._getOrReturnCtx(t, i), me(i, {
        code: oe.too_small,
        message: o.message,
        inclusive: !0,
        exact: !1,
        minimum: o.value,
        type: "date"
      }), r.dirty()) : o.kind === "max" ? t.data.getTime() > o.value && (i = this._getOrReturnCtx(t, i), me(i, {
        code: oe.too_big,
        message: o.message,
        inclusive: !0,
        exact: !1,
        maximum: o.value,
        type: "date"
      }), r.dirty()) : Ye.assertNever(o);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Ar({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, n) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: Ae.toString(n)
    });
  }
  max(t, n) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: Ae.toString(n)
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
Ar.create = (e) => new Ar({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: Te.ZodDate,
  ...je(e)
});
class Ia extends ze {
  _parse(t) {
    if (this._getType(t) !== xe.symbol) {
      const r = this._getOrReturnCtx(t);
      return me(r, {
        code: oe.invalid_type,
        expected: xe.symbol,
        received: r.parsedType
      }), ke;
    }
    return Ct(t.data);
  }
}
Ia.create = (e) => new Ia({
  typeName: Te.ZodSymbol,
  ...je(e)
});
class eo extends ze {
  _parse(t) {
    if (this._getType(t) !== xe.undefined) {
      const r = this._getOrReturnCtx(t);
      return me(r, {
        code: oe.invalid_type,
        expected: xe.undefined,
        received: r.parsedType
      }), ke;
    }
    return Ct(t.data);
  }
}
eo.create = (e) => new eo({
  typeName: Te.ZodUndefined,
  ...je(e)
});
class to extends ze {
  _parse(t) {
    if (this._getType(t) !== xe.null) {
      const r = this._getOrReturnCtx(t);
      return me(r, {
        code: oe.invalid_type,
        expected: xe.null,
        received: r.parsedType
      }), ke;
    }
    return Ct(t.data);
  }
}
to.create = (e) => new to({
  typeName: Te.ZodNull,
  ...je(e)
});
class si extends ze {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Ct(t.data);
  }
}
si.create = (e) => new si({
  typeName: Te.ZodAny,
  ...je(e)
});
class br extends ze {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Ct(t.data);
  }
}
br.create = (e) => new br({
  typeName: Te.ZodUnknown,
  ...je(e)
});
class Rn extends ze {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return me(n, {
      code: oe.invalid_type,
      expected: xe.never,
      received: n.parsedType
    }), ke;
  }
}
Rn.create = (e) => new Rn({
  typeName: Te.ZodNever,
  ...je(e)
});
class Da extends ze {
  _parse(t) {
    if (this._getType(t) !== xe.undefined) {
      const r = this._getOrReturnCtx(t);
      return me(r, {
        code: oe.invalid_type,
        expected: xe.void,
        received: r.parsedType
      }), ke;
    }
    return Ct(t.data);
  }
}
Da.create = (e) => new Da({
  typeName: Te.ZodVoid,
  ...je(e)
});
class tn extends ze {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), i = this._def;
    if (n.parsedType !== xe.array)
      return me(n, {
        code: oe.invalid_type,
        expected: xe.array,
        received: n.parsedType
      }), ke;
    if (i.exactLength !== null) {
      const a = n.data.length > i.exactLength.value, s = n.data.length < i.exactLength.value;
      (a || s) && (me(n, {
        code: a ? oe.too_big : oe.too_small,
        minimum: s ? i.exactLength.value : void 0,
        maximum: a ? i.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: i.exactLength.message
      }), r.dirty());
    }
    if (i.minLength !== null && n.data.length < i.minLength.value && (me(n, {
      code: oe.too_small,
      minimum: i.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.minLength.message
    }), r.dirty()), i.maxLength !== null && n.data.length > i.maxLength.value && (me(n, {
      code: oe.too_big,
      maximum: i.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: i.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((a, s) => i.type._parseAsync(new gn(n, a, n.path, s)))).then((a) => _t.mergeArray(r, a));
    const o = [...n.data].map((a, s) => i.type._parseSync(new gn(n, a, n.path, s)));
    return _t.mergeArray(r, o);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new tn({
      ...this._def,
      minLength: { value: t, message: Ae.toString(n) }
    });
  }
  max(t, n) {
    return new tn({
      ...this._def,
      maxLength: { value: t, message: Ae.toString(n) }
    });
  }
  length(t, n) {
    return new tn({
      ...this._def,
      exactLength: { value: t, message: Ae.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
tn.create = (e, t) => new tn({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Te.ZodArray,
  ...je(t)
});
function Vr(e) {
  if (e instanceof ut) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = mn.create(Vr(r));
    }
    return new ut({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof tn ? new tn({
    ...e._def,
    type: Vr(e.element)
  }) : e instanceof mn ? mn.create(Vr(e.unwrap())) : e instanceof nr ? nr.create(Vr(e.unwrap())) : e instanceof vn ? vn.create(e.items.map((t) => Vr(t))) : e;
}
class ut extends ze {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = Ye.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== xe.object) {
      const l = this._getOrReturnCtx(t);
      return me(l, {
        code: oe.invalid_type,
        expected: xe.object,
        received: l.parsedType
      }), ke;
    }
    const { status: r, ctx: i } = this._processInputParams(t), { shape: o, keys: a } = this._getCached(), s = [];
    if (!(this._def.catchall instanceof Rn && this._def.unknownKeys === "strip"))
      for (const l in i.data)
        a.includes(l) || s.push(l);
    const c = [];
    for (const l of a) {
      const u = o[l], d = i.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new gn(i, d, i.path, l)),
        alwaysSet: l in i.data
      });
    }
    if (this._def.catchall instanceof Rn) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of s)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: i.data[u] }
          });
      else if (l === "strict")
        s.length > 0 && (me(i, {
          code: oe.unrecognized_keys,
          keys: s
        }), r.dirty());
      else if (l !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const u of s) {
        const d = i.data[u];
        c.push({
          key: { status: "valid", value: u },
          value: l._parse(
            new gn(i, d, i.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in i.data
        });
      }
    }
    return i.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const u of c) {
        const d = await u.key, p = await u.value;
        l.push({
          key: d,
          value: p,
          alwaysSet: u.alwaysSet
        });
      }
      return l;
    }).then((l) => _t.mergeObjectSync(r, l)) : _t.mergeObjectSync(r, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return Ae.errToObj, new ut({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var i, o, a, s;
          const c = (a = (o = (i = this._def).errorMap) === null || o === void 0 ? void 0 : o.call(i, n, r).message) !== null && a !== void 0 ? a : r.defaultError;
          return n.code === "unrecognized_keys" ? {
            message: (s = Ae.errToObj(t).message) !== null && s !== void 0 ? s : c
          } : {
            message: c
          };
        }
      } : {}
    });
  }
  strip() {
    return new ut({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ut({
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
    return new ut({
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
    return new ut({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: Te.ZodObject
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
    return new ut({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return Ye.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new ut({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return Ye.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new ut({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Vr(this);
  }
  partial(t) {
    const n = {};
    return Ye.objectKeys(this.shape).forEach((r) => {
      const i = this.shape[r];
      t && !t[r] ? n[r] = i : n[r] = i.optional();
    }), new ut({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return Ye.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let o = this.shape[r];
        for (; o instanceof mn; )
          o = o._def.innerType;
        n[r] = o;
      }
    }), new ut({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return gy(Ye.objectKeys(this.shape));
  }
}
ut.create = (e, t) => new ut({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Rn.create(),
  typeName: Te.ZodObject,
  ...je(t)
});
ut.strictCreate = (e, t) => new ut({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Rn.create(),
  typeName: Te.ZodObject,
  ...je(t)
});
ut.lazycreate = (e, t) => new ut({
  shape: e,
  unknownKeys: "strip",
  catchall: Rn.create(),
  typeName: Te.ZodObject,
  ...je(t)
});
class no extends ze {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function i(o) {
      for (const s of o)
        if (s.result.status === "valid")
          return s.result;
      for (const s of o)
        if (s.result.status === "dirty")
          return n.common.issues.push(...s.ctx.common.issues), s.result;
      const a = o.map((s) => new Ut(s.ctx.common.issues));
      return me(n, {
        code: oe.invalid_union,
        unionErrors: a
      }), ke;
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
      for (const c of r) {
        const l = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        }, u = c._parseSync({
          data: n.data,
          path: n.path,
          parent: l
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !o && (o = { result: u, ctx: l }), l.common.issues.length && a.push(l.common.issues);
      }
      if (o)
        return n.common.issues.push(...o.ctx.common.issues), o.result;
      const s = a.map((c) => new Ut(c));
      return me(n, {
        code: oe.invalid_union,
        unionErrors: s
      }), ke;
    }
  }
  get options() {
    return this._def.options;
  }
}
no.create = (e, t) => new no({
  options: e,
  typeName: Te.ZodUnion,
  ...je(t)
});
const En = (e) => e instanceof oo ? En(e.schema) : e instanceof nn ? En(e.innerType()) : e instanceof ao ? [e.value] : e instanceof tr ? e.options : e instanceof so ? Ye.objectValues(e.enum) : e instanceof co ? En(e._def.innerType) : e instanceof eo ? [void 0] : e instanceof to ? [null] : e instanceof mn ? [void 0, ...En(e.unwrap())] : e instanceof nr ? [null, ...En(e.unwrap())] : e instanceof uu || e instanceof uo ? En(e.unwrap()) : e instanceof lo ? En(e._def.innerType) : [];
class ms extends ze {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== xe.object)
      return me(n, {
        code: oe.invalid_type,
        expected: xe.object,
        received: n.parsedType
      }), ke;
    const r = this.discriminator, i = n.data[r], o = this.optionsMap.get(i);
    return o ? n.common.async ? o._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : o._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (me(n, {
      code: oe.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [r]
    }), ke);
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
      const a = En(o.shape[t]);
      if (!a.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const s of a) {
        if (i.has(s))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(s)}`);
        i.set(s, o);
      }
    }
    return new ms({
      typeName: Te.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: i,
      ...je(r)
    });
  }
}
function vl(e, t) {
  const n = Wn(e), r = Wn(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === xe.object && r === xe.object) {
    const i = Ye.objectKeys(t), o = Ye.objectKeys(e).filter((s) => i.indexOf(s) !== -1), a = { ...e, ...t };
    for (const s of o) {
      const c = vl(e[s], t[s]);
      if (!c.valid)
        return { valid: !1 };
      a[s] = c.data;
    }
    return { valid: !0, data: a };
  } else if (n === xe.array && r === xe.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const i = [];
    for (let o = 0; o < e.length; o++) {
      const a = e[o], s = t[o], c = vl(a, s);
      if (!c.valid)
        return { valid: !1 };
      i.push(c.data);
    }
    return { valid: !0, data: i };
  } else return n === xe.date && r === xe.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class ro extends ze {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), i = (o, a) => {
      if (yl(o) || yl(a))
        return ke;
      const s = vl(o.value, a.value);
      return s.valid ? ((gl(o) || gl(a)) && n.dirty(), { status: n.value, value: s.data }) : (me(r, {
        code: oe.invalid_intersection_types
      }), ke);
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
ro.create = (e, t, n) => new ro({
  left: e,
  right: t,
  typeName: Te.ZodIntersection,
  ...je(n)
});
class vn extends ze {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== xe.array)
      return me(r, {
        code: oe.invalid_type,
        expected: xe.array,
        received: r.parsedType
      }), ke;
    if (r.data.length < this._def.items.length)
      return me(r, {
        code: oe.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ke;
    !this._def.rest && r.data.length > this._def.items.length && (me(r, {
      code: oe.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const o = [...r.data].map((a, s) => {
      const c = this._def.items[s] || this._def.rest;
      return c ? c._parse(new gn(r, a, r.path, s)) : null;
    }).filter((a) => !!a);
    return r.common.async ? Promise.all(o).then((a) => _t.mergeArray(n, a)) : _t.mergeArray(n, o);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new vn({
      ...this._def,
      rest: t
    });
  }
}
vn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new vn({
    items: e,
    typeName: Te.ZodTuple,
    rest: null,
    ...je(t)
  });
};
class io extends ze {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== xe.object)
      return me(r, {
        code: oe.invalid_type,
        expected: xe.object,
        received: r.parsedType
      }), ke;
    const i = [], o = this._def.keyType, a = this._def.valueType;
    for (const s in r.data)
      i.push({
        key: o._parse(new gn(r, s, r.path, s)),
        value: a._parse(new gn(r, r.data[s], r.path, s)),
        alwaysSet: s in r.data
      });
    return r.common.async ? _t.mergeObjectAsync(n, i) : _t.mergeObjectSync(n, i);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof ze ? new io({
      keyType: t,
      valueType: n,
      typeName: Te.ZodRecord,
      ...je(r)
    }) : new io({
      keyType: Xt.create(),
      valueType: t,
      typeName: Te.ZodRecord,
      ...je(n)
    });
  }
}
class ja extends ze {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== xe.map)
      return me(r, {
        code: oe.invalid_type,
        expected: xe.map,
        received: r.parsedType
      }), ke;
    const i = this._def.keyType, o = this._def.valueType, a = [...r.data.entries()].map(([s, c], l) => ({
      key: i._parse(new gn(r, s, r.path, [l, "key"])),
      value: o._parse(new gn(r, c, r.path, [l, "value"]))
    }));
    if (r.common.async) {
      const s = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of a) {
          const l = await c.key, u = await c.value;
          if (l.status === "aborted" || u.status === "aborted")
            return ke;
          (l.status === "dirty" || u.status === "dirty") && n.dirty(), s.set(l.value, u.value);
        }
        return { status: n.value, value: s };
      });
    } else {
      const s = /* @__PURE__ */ new Map();
      for (const c of a) {
        const l = c.key, u = c.value;
        if (l.status === "aborted" || u.status === "aborted")
          return ke;
        (l.status === "dirty" || u.status === "dirty") && n.dirty(), s.set(l.value, u.value);
      }
      return { status: n.value, value: s };
    }
  }
}
ja.create = (e, t, n) => new ja({
  valueType: t,
  keyType: e,
  typeName: Te.ZodMap,
  ...je(n)
});
class Or extends ze {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== xe.set)
      return me(r, {
        code: oe.invalid_type,
        expected: xe.set,
        received: r.parsedType
      }), ke;
    const i = this._def;
    i.minSize !== null && r.data.size < i.minSize.value && (me(r, {
      code: oe.too_small,
      minimum: i.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.minSize.message
    }), n.dirty()), i.maxSize !== null && r.data.size > i.maxSize.value && (me(r, {
      code: oe.too_big,
      maximum: i.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: i.maxSize.message
    }), n.dirty());
    const o = this._def.valueType;
    function a(c) {
      const l = /* @__PURE__ */ new Set();
      for (const u of c) {
        if (u.status === "aborted")
          return ke;
        u.status === "dirty" && n.dirty(), l.add(u.value);
      }
      return { status: n.value, value: l };
    }
    const s = [...r.data.values()].map((c, l) => o._parse(new gn(r, c, r.path, l)));
    return r.common.async ? Promise.all(s).then((c) => a(c)) : a(s);
  }
  min(t, n) {
    return new Or({
      ...this._def,
      minSize: { value: t, message: Ae.toString(n) }
    });
  }
  max(t, n) {
    return new Or({
      ...this._def,
      maxSize: { value: t, message: Ae.toString(n) }
    });
  }
  size(t, n) {
    return this.min(t, n).max(t, n);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Or.create = (e, t) => new Or({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Te.ZodSet,
  ...je(t)
});
class Xr extends ze {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== xe.function)
      return me(n, {
        code: oe.invalid_type,
        expected: xe.function,
        received: n.parsedType
      }), ke;
    function r(s, c) {
      return Na({
        data: s,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Pa(),
          ai
        ].filter((l) => !!l),
        issueData: {
          code: oe.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function i(s, c) {
      return Na({
        data: s,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          Pa(),
          ai
        ].filter((l) => !!l),
        issueData: {
          code: oe.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const o = { errorMap: n.common.contextualErrorMap }, a = n.data;
    if (this._def.returns instanceof ci) {
      const s = this;
      return Ct(async function(...c) {
        const l = new Ut([]), u = await s._def.args.parseAsync(c, o).catch((h) => {
          throw l.addIssue(r(c, h)), l;
        }), d = await Reflect.apply(a, this, u);
        return await s._def.returns._def.type.parseAsync(d, o).catch((h) => {
          throw l.addIssue(i(d, h)), l;
        });
      });
    } else {
      const s = this;
      return Ct(function(...c) {
        const l = s._def.args.safeParse(c, o);
        if (!l.success)
          throw new Ut([r(c, l.error)]);
        const u = Reflect.apply(a, this, l.data), d = s._def.returns.safeParse(u, o);
        if (!d.success)
          throw new Ut([i(u, d.error)]);
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
    return new Xr({
      ...this._def,
      args: vn.create(t).rest(br.create())
    });
  }
  returns(t) {
    return new Xr({
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
    return new Xr({
      args: t || vn.create([]).rest(br.create()),
      returns: n || br.create(),
      typeName: Te.ZodFunction,
      ...je(r)
    });
  }
}
class oo extends ze {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
oo.create = (e, t) => new oo({
  getter: e,
  typeName: Te.ZodLazy,
  ...je(t)
});
class ao extends ze {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return me(n, {
        received: n.data,
        code: oe.invalid_literal,
        expected: this._def.value
      }), ke;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
ao.create = (e, t) => new ao({
  value: e,
  typeName: Te.ZodLiteral,
  ...je(t)
});
function gy(e, t) {
  return new tr({
    values: e,
    typeName: Te.ZodEnum,
    ...je(t)
  });
}
class tr extends ze {
  constructor() {
    super(...arguments), ki.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return me(n, {
        expected: Ye.joinValues(r),
        received: n.parsedType,
        code: oe.invalid_type
      }), ke;
    }
    if (Ma(this, ki) || py(this, ki, new Set(this._def.values)), !Ma(this, ki).has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return me(n, {
        received: n.data,
        code: oe.invalid_enum_value,
        options: r
      }), ke;
    }
    return Ct(t.data);
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
    return tr.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return tr.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
ki = /* @__PURE__ */ new WeakMap();
tr.create = gy;
class so extends ze {
  constructor() {
    super(...arguments), Pi.set(this, void 0);
  }
  _parse(t) {
    const n = Ye.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== xe.string && r.parsedType !== xe.number) {
      const i = Ye.objectValues(n);
      return me(r, {
        expected: Ye.joinValues(i),
        received: r.parsedType,
        code: oe.invalid_type
      }), ke;
    }
    if (Ma(this, Pi) || py(this, Pi, new Set(Ye.getValidEnumValues(this._def.values))), !Ma(this, Pi).has(t.data)) {
      const i = Ye.objectValues(n);
      return me(r, {
        received: r.data,
        code: oe.invalid_enum_value,
        options: i
      }), ke;
    }
    return Ct(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Pi = /* @__PURE__ */ new WeakMap();
so.create = (e, t) => new so({
  values: e,
  typeName: Te.ZodNativeEnum,
  ...je(t)
});
class ci extends ze {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== xe.promise && n.common.async === !1)
      return me(n, {
        code: oe.invalid_type,
        expected: xe.promise,
        received: n.parsedType
      }), ke;
    const r = n.parsedType === xe.promise ? n.data : Promise.resolve(n.data);
    return Ct(r.then((i) => this._def.type.parseAsync(i, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
ci.create = (e, t) => new ci({
  type: e,
  typeName: Te.ZodPromise,
  ...je(t)
});
class nn extends ze {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Te.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), i = this._def.effect || null, o = {
      addIssue: (a) => {
        me(r, a), a.fatal ? n.abort() : n.dirty();
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
            return ke;
          const c = await this._def.schema._parseAsync({
            data: s,
            path: r.path,
            parent: r
          });
          return c.status === "aborted" ? ke : c.status === "dirty" || n.value === "dirty" ? Yr(c.value) : c;
        });
      {
        if (n.value === "aborted")
          return ke;
        const s = this._def.schema._parseSync({
          data: a,
          path: r.path,
          parent: r
        });
        return s.status === "aborted" ? ke : s.status === "dirty" || n.value === "dirty" ? Yr(s.value) : s;
      }
    }
    if (i.type === "refinement") {
      const a = (s) => {
        const c = i.refinement(s, o);
        if (r.common.async)
          return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return s;
      };
      if (r.common.async === !1) {
        const s = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return s.status === "aborted" ? ke : (s.status === "dirty" && n.dirty(), a(s.value), { status: n.value, value: s.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => s.status === "aborted" ? ke : (s.status === "dirty" && n.dirty(), a(s.value).then(() => ({ status: n.value, value: s.value }))));
    }
    if (i.type === "transform")
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!Xi(a))
          return a;
        const s = i.transform(a.value, o);
        if (s instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: s };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((a) => Xi(a) ? Promise.resolve(i.transform(a.value, o)).then((s) => ({ status: n.value, value: s })) : a);
    Ye.assertNever(i);
  }
}
nn.create = (e, t, n) => new nn({
  schema: e,
  typeName: Te.ZodEffects,
  effect: t,
  ...je(n)
});
nn.createWithPreprocess = (e, t, n) => new nn({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Te.ZodEffects,
  ...je(n)
});
class mn extends ze {
  _parse(t) {
    return this._getType(t) === xe.undefined ? Ct(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
mn.create = (e, t) => new mn({
  innerType: e,
  typeName: Te.ZodOptional,
  ...je(t)
});
class nr extends ze {
  _parse(t) {
    return this._getType(t) === xe.null ? Ct(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
nr.create = (e, t) => new nr({
  innerType: e,
  typeName: Te.ZodNullable,
  ...je(t)
});
class co extends ze {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    let r = n.data;
    return n.parsedType === xe.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
      data: r,
      path: n.path,
      parent: n
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
co.create = (e, t) => new co({
  innerType: e,
  typeName: Te.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...je(t)
});
class lo extends ze {
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
    return Ji(i) ? i.then((o) => ({
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new Ut(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Ut(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
lo.create = (e, t) => new lo({
  innerType: e,
  typeName: Te.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...je(t)
});
class Fa extends ze {
  _parse(t) {
    if (this._getType(t) !== xe.nan) {
      const r = this._getOrReturnCtx(t);
      return me(r, {
        code: oe.invalid_type,
        expected: xe.nan,
        received: r.parsedType
      }), ke;
    }
    return { status: "valid", value: t.data };
  }
}
Fa.create = (e) => new Fa({
  typeName: Te.ZodNaN,
  ...je(e)
});
const IC = Symbol("zod_brand");
class uu extends ze {
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
class Ro extends ze {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const o = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return o.status === "aborted" ? ke : o.status === "dirty" ? (n.dirty(), Yr(o.value)) : this._def.out._parseAsync({
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
      return i.status === "aborted" ? ke : i.status === "dirty" ? (n.dirty(), {
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
    return new Ro({
      in: t,
      out: n,
      typeName: Te.ZodPipeline
    });
  }
}
class uo extends ze {
  _parse(t) {
    const n = this._def.innerType._parse(t), r = (i) => (Xi(i) && (i.value = Object.freeze(i.value)), i);
    return Ji(n) ? n.then((i) => r(i)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
uo.create = (e, t) => new uo({
  innerType: e,
  typeName: Te.ZodReadonly,
  ...je(t)
});
function vy(e, t = {}, n) {
  return e ? si.create().superRefine((r, i) => {
    var o, a;
    if (!e(r)) {
      const s = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (a = (o = s.fatal) !== null && o !== void 0 ? o : n) !== null && a !== void 0 ? a : !0, l = typeof s == "string" ? { message: s } : s;
      i.addIssue({ code: "custom", ...l, fatal: c });
    }
  }) : si.create();
}
const DC = {
  object: ut.lazycreate
};
var Te;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(Te || (Te = {}));
const jC = (e, t = {
  message: `Input not instance of ${e.name}`
}) => vy((n) => n instanceof e, t), by = Xt.create, xy = Qn.create, FC = Fa.create, LC = er.create, wy = Qi.create, zC = Ar.create, $C = Ia.create, VC = eo.create, UC = to.create, BC = si.create, WC = br.create, HC = Rn.create, qC = Da.create, YC = tn.create, GC = ut.create, ZC = ut.strictCreate, KC = no.create, XC = ms.create, JC = ro.create, QC = vn.create, eA = io.create, tA = ja.create, nA = Or.create, rA = Xr.create, iA = oo.create, oA = ao.create, aA = tr.create, sA = so.create, cA = ci.create, $d = nn.create, lA = mn.create, uA = nr.create, fA = nn.createWithPreprocess, dA = Ro.create, pA = () => by().optional(), hA = () => xy().optional(), mA = () => wy().optional(), yA = {
  string: (e) => Xt.create({ ...e, coerce: !0 }),
  number: (e) => Qn.create({ ...e, coerce: !0 }),
  boolean: (e) => Qi.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => er.create({ ...e, coerce: !0 }),
  date: (e) => Ar.create({ ...e, coerce: !0 })
}, gA = ke;
var Si = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: ai,
  setErrorMap: gC,
  getErrorMap: Pa,
  makeIssue: Na,
  EMPTY_PATH: vC,
  addIssueToContext: me,
  ParseStatus: _t,
  INVALID: ke,
  DIRTY: Yr,
  OK: Ct,
  isAborted: yl,
  isDirty: gl,
  isValid: Xi,
  isAsync: Ji,
  get util() {
    return Ye;
  },
  get objectUtil() {
    return ml;
  },
  ZodParsedType: xe,
  getParsedType: Wn,
  ZodType: ze,
  datetimeRegex: yy,
  ZodString: Xt,
  ZodNumber: Qn,
  ZodBigInt: er,
  ZodBoolean: Qi,
  ZodDate: Ar,
  ZodSymbol: Ia,
  ZodUndefined: eo,
  ZodNull: to,
  ZodAny: si,
  ZodUnknown: br,
  ZodNever: Rn,
  ZodVoid: Da,
  ZodArray: tn,
  ZodObject: ut,
  ZodUnion: no,
  ZodDiscriminatedUnion: ms,
  ZodIntersection: ro,
  ZodTuple: vn,
  ZodRecord: io,
  ZodMap: ja,
  ZodSet: Or,
  ZodFunction: Xr,
  ZodLazy: oo,
  ZodLiteral: ao,
  ZodEnum: tr,
  ZodNativeEnum: so,
  ZodPromise: ci,
  ZodEffects: nn,
  ZodTransformer: nn,
  ZodOptional: mn,
  ZodNullable: nr,
  ZodDefault: co,
  ZodCatch: lo,
  ZodNaN: Fa,
  BRAND: IC,
  ZodBranded: uu,
  ZodPipeline: Ro,
  ZodReadonly: uo,
  custom: vy,
  Schema: ze,
  ZodSchema: ze,
  late: DC,
  get ZodFirstPartyTypeKind() {
    return Te;
  },
  coerce: yA,
  any: BC,
  array: YC,
  bigint: LC,
  boolean: wy,
  date: zC,
  discriminatedUnion: XC,
  effect: $d,
  enum: aA,
  function: rA,
  instanceof: jC,
  intersection: JC,
  lazy: iA,
  literal: oA,
  map: tA,
  nan: FC,
  nativeEnum: sA,
  never: HC,
  null: UC,
  nullable: uA,
  number: xy,
  object: GC,
  oboolean: mA,
  onumber: hA,
  optional: lA,
  ostring: pA,
  pipeline: dA,
  preprocess: fA,
  promise: cA,
  record: eA,
  set: nA,
  strictObject: ZC,
  string: by,
  symbol: $C,
  transformer: $d,
  tuple: QC,
  undefined: VC,
  union: KC,
  unknown: WC,
  void: qC,
  NEVER: gA,
  ZodIssueCode: oe,
  quotelessJson: yC,
  ZodError: Ut
});
const Vd = (e, t, n) => {
  if (e && "reportValidity" in e) {
    const r = ce(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, _y = (e, t) => {
  for (const n in t.fields) {
    const r = t.fields[n];
    r && r.ref && "reportValidity" in r.ref ? Vd(r.ref, n, e) : r.refs && r.refs.forEach((i) => Vd(i, n, e));
  }
}, vA = (e, t) => {
  t.shouldUseNativeValidation && _y(e, t);
  const n = {};
  for (const r in e) {
    const i = ce(t.fields, r), o = Object.assign(e[r] || {}, { ref: i && i.ref });
    if (bA(t.names || Object.keys(e), r)) {
      const a = Object.assign({}, ce(n, r));
      Qe(a, "root", o), Qe(n, r, a);
    } else Qe(n, r, o);
  }
  return n;
}, bA = (e, t) => e.some((n) => n.startsWith(t + "."));
var xA = function(e, t) {
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
      var c = n[a].types, l = c && c[r.code];
      n[a] = oy(a, t, n, i, l ? [].concat(l, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, wA = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, i, o) {
    try {
      return Promise.resolve(function(a, s) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(l) {
            return o.shouldUseNativeValidation && _y({}, o), { errors: {}, values: n.raw ? r : l };
          });
        } catch (l) {
          return s(l);
        }
        return c && c.then ? c.then(void 0, s) : c;
      }(0, function(a) {
        if (function(s) {
          return Array.isArray(s == null ? void 0 : s.errors);
        }(a)) return { values: {}, errors: vA(xA(a.errors, !o.shouldUseNativeValidation && o.criteriaMode === "all"), o) };
        throw a;
      }));
    } catch (a) {
      return Promise.reject(a);
    }
  };
}, _A = "Label", Ey = _.forwardRef((e, t) => /* @__PURE__ */ w.jsx(
  xt.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var i;
      n.target.closest("button, input, select, textarea") || ((i = e.onMouseDown) == null || i.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
Ey.displayName = _A;
var Sy = Ey;
const EA = pm(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Cy = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.jsx(
  Sy,
  {
    ref: n,
    className: Ze(EA(), e),
    ...t
  }
));
Cy.displayName = Sy.displayName;
const SA = eC, Ay = _.createContext(
  {}
), qo = ({
  ...e
}) => /* @__PURE__ */ w.jsx(Ay.Provider, { value: { name: e.name }, children: /* @__PURE__ */ w.jsx(iC, { ...e }) }), ys = () => {
  const e = _.useContext(Ay), t = _.useContext(Oy), { getFieldState: n, formState: r } = hs(), i = n(e.name, r);
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
}, Oy = _.createContext(
  {}
), Ur = _.forwardRef(({ className: e, ...t }, n) => {
  const r = _.useId();
  return /* @__PURE__ */ w.jsx(Oy.Provider, { value: { id: r }, children: /* @__PURE__ */ w.jsx("div", { ref: n, className: Ze("space-y-2", e), ...t }) });
});
Ur.displayName = "FormItem";
const Ni = _.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: i } = ys();
  return /* @__PURE__ */ w.jsx(
    Cy,
    {
      ref: n,
      className: Ze(r && "text-red-500 dark:text-red-900", e),
      htmlFor: i,
      ...t
    }
  );
});
Ni.displayName = "FormLabel";
const Mi = _.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: i, formMessageId: o } = ys();
  return /* @__PURE__ */ w.jsx(
    Zn,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${i} ${o}` : `${i}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
Mi.displayName = "FormControl";
const CA = _.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = ys();
  return /* @__PURE__ */ w.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: Ze("text-sm text-slate-500 dark:text-slate-400", e),
      ...t
    }
  );
});
CA.displayName = "FormDescription";
const ca = _.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: i, formMessageId: o } = ys(), a = i ? String(i == null ? void 0 : i.message) : t;
  return a ? /* @__PURE__ */ w.jsx(
    "p",
    {
      ref: r,
      id: o,
      className: Ze("text-sm font-medium text-red-500 dark:text-red-900", e),
      ...n,
      children: a
    }
  ) : null;
});
ca.displayName = "FormMessage";
const Vi = _.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ w.jsx(
    "input",
    {
      type: t,
      className: Ze(
        "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
        e
      ),
      ref: r,
      ...n
    }
  )
);
Vi.displayName = "Input";
const Ry = _.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ w.jsx(
    "textarea",
    {
      className: Ze(
        "flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
        e
      ),
      ref: n,
      ...t
    }
  )
);
Ry.displayName = "Textarea";
const AA = Si.object({
  label: Si.string().min(1, "Ce champs ne doit pas être vide"),
  alt: Si.string().optional(),
  description: Si.string().optional(),
  file: Si.any()
});
function OA() {
  const e = go((a) => a.main.selectedMedia);
  if (e === null)
    return /* @__PURE__ */ w.jsx("p", { children: "Pas de media " });
  const t = vo(), n = mC({
    resolver: wA(AA),
    mode: "onBlur",
    defaultValues: {
      label: e.label,
      alt: e.alt === void 0 ? "" : String(e.alt),
      description: e.description === void 0 ? "" : String(e.description),
      file: null
    }
  }), r = n.register("file");
  yo(() => {
    e && n.reset({
      label: e.label || "",
      alt: e.alt === void 0 ? "" : String(e.alt),
      description: e.description === void 0 ? "" : String(e.description),
      file: null
    });
  }, [e, n]);
  const i = async (a) => {
    let s = null, c = null;
    a.file instanceof FileList && (s = a.file[0] ?? null, delete a.file);
    const l = {
      id: e.id,
      ...a
    };
    if (c = await t(na(l)), s !== null && e.id !== void 0) {
      const u = {
        id: e.id,
        file: s
      };
      c = await t(ra(u));
    }
    t(Yc(c.payload));
  }, o = () => {
    t(Yc(null));
  };
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsx("div", { className: "border-y-2 h-20 flex items-center", children: /* @__PURE__ */ w.jsxs("div", { className: "px-6 flex items-center justify-between w-full", children: [
      /* @__PURE__ */ w.jsx("span", { className: "text-ellipsis", children: e.label }),
      /* @__PURE__ */ w.jsx(ni, { variant: "ghost", onClick: o, children: /* @__PURE__ */ w.jsx(oi, { icon: ZS, className: "h-5 w-5 text-gray-500" }) })
    ] }) }),
    /* @__PURE__ */ w.jsxs("div", { className: "px-6", children: [
      /* @__PURE__ */ w.jsxs("div", { className: "my-3 bg-checkerboard flex justify-center", children: [
        e.picture && /* @__PURE__ */ w.jsx("img", { src: String(e.thumbnail), alt: String(e.alt), className: "" }),
        e.svg && /* @__PURE__ */ w.jsx("img", { src: String(e.reference), alt: String(e.alt), className: "" })
      ] }),
      /* @__PURE__ */ w.jsxs("div", { className: "my-3", children: [
        /* @__PURE__ */ w.jsxs("div", { className: "mb-2 border-b-2 flex justify-between", children: [
          /* @__PURE__ */ w.jsx("div", { className: "flex justify-start", children: "Created at" }),
          /* @__PURE__ */ w.jsx("div", { className: "flex justify-end", children: Hf(e.createdAt) && Wf(String(e.createdAt)) })
        ] }),
        /* @__PURE__ */ w.jsxs("div", { className: "mb-2 border-b-2 flex justify-between", children: [
          /* @__PURE__ */ w.jsx("div", { className: "flex justify-start", children: "Updated at" }),
          /* @__PURE__ */ w.jsx("div", { className: "flex justify-end", children: Hf(e.updatedAt) && Wf(String(e.updatedAt)) })
        ] }),
        /* @__PURE__ */ w.jsxs("div", { className: "mb-2 border-b-2 flex justify-between", children: [
          /* @__PURE__ */ w.jsx("div", { className: "flex justify-start", children: "Extension" }),
          /* @__PURE__ */ w.jsx("div", { className: "flex justify-end", children: e.extension })
        ] }),
        /* @__PURE__ */ w.jsxs("div", { className: "mb-2 border-b-2 flex justify-between", children: [
          /* @__PURE__ */ w.jsx("div", { className: "flex justify-start", children: "MimeType" }),
          /* @__PURE__ */ w.jsx("div", { className: "flex justify-end", children: e.mimeType })
        ] })
      ] }),
      /* @__PURE__ */ w.jsx("div", { className: "max-w-md mx-auto mt-10", children: /* @__PURE__ */ w.jsx(SA, { ...n, children: /* @__PURE__ */ w.jsxs("form", { onSubmit: n.handleSubmit(i), className: "space-y-6", children: [
        /* @__PURE__ */ w.jsx(
          qo,
          {
            name: "file",
            control: n.control,
            render: ({ field: a }) => /* @__PURE__ */ w.jsxs(Ur, { children: [
              /* @__PURE__ */ w.jsx(Ni, { children: "Fichier" }),
              /* @__PURE__ */ w.jsx(Mi, { children: /* @__PURE__ */ w.jsx(
                Vi,
                {
                  type: "file",
                  ...r,
                  onChange: (s) => {
                    var c, l;
                    a.onChange(((l = (c = s.target) == null ? void 0 : c.files) == null ? void 0 : l[0]) ?? null);
                  }
                }
              ) })
            ] })
          }
        ),
        /* @__PURE__ */ w.jsx(
          qo,
          {
            control: n.control,
            name: "label",
            render: ({ field: a }) => /* @__PURE__ */ w.jsxs(Ur, { children: [
              /* @__PURE__ */ w.jsx(Ni, { children: "Libellé" }),
              /* @__PURE__ */ w.jsx(Mi, { children: /* @__PURE__ */ w.jsx(
                Vi,
                {
                  ...a
                }
              ) }),
              /* @__PURE__ */ w.jsx(ca, { className: "text-red-600" })
            ] })
          }
        ),
        /* @__PURE__ */ w.jsx(
          qo,
          {
            control: n.control,
            name: "alt",
            render: ({ field: a }) => /* @__PURE__ */ w.jsxs(Ur, { children: [
              /* @__PURE__ */ w.jsx(Ni, { children: "Balise alt" }),
              /* @__PURE__ */ w.jsx(Mi, { children: /* @__PURE__ */ w.jsx(
                Vi,
                {
                  ...a
                }
              ) }),
              /* @__PURE__ */ w.jsx(ca, { className: "text-red-600" })
            ] })
          }
        ),
        /* @__PURE__ */ w.jsx(
          qo,
          {
            control: n.control,
            name: "description",
            render: ({ field: a }) => /* @__PURE__ */ w.jsxs(Ur, { children: [
              /* @__PURE__ */ w.jsx(Ni, { children: "Description" }),
              /* @__PURE__ */ w.jsx(Mi, { children: /* @__PURE__ */ w.jsx(
                Ry,
                {
                  ...a
                }
              ) }),
              /* @__PURE__ */ w.jsx(ca, { className: "text-red-600" })
            ] })
          }
        ),
        /* @__PURE__ */ w.jsx(Ur, { children: /* @__PURE__ */ w.jsx(ni, { type: "submit", className: "w-full", children: "Valider" }) })
      ] }) }) })
    ] })
  ] });
}
const Ty = _.forwardRef(({ ...e }, t) => /* @__PURE__ */ w.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
Ty.displayName = "Breadcrumb";
const ky = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.jsx(
  "ol",
  {
    ref: n,
    className: Ze(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-slate-500 sm:gap-2.5 dark:text-slate-400",
      e
    ),
    ...t
  }
));
ky.displayName = "BreadcrumbList";
const Ii = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.jsx(
  "li",
  {
    ref: n,
    className: Ze("inline-flex items-center gap-1.5", e),
    ...t
  }
));
Ii.displayName = "BreadcrumbItem";
const bl = _.forwardRef(({ asChild: e, className: t, ...n }, r) => {
  const i = e ? Zn : "a";
  return /* @__PURE__ */ w.jsx(
    i,
    {
      ref: r,
      className: Ze("transition-colors hover:text-slate-950 dark:hover:text-slate-50", t),
      ...n
    }
  );
});
bl.displayName = "BreadcrumbLink";
const Py = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.jsx(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: Ze("font-normal text-slate-950 dark:text-slate-50", e),
    ...t
  }
));
Py.displayName = "BreadcrumbPage";
const la = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ w.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: Ze("[&>svg]:size-3.5", t),
    ...n,
    children: e ?? /* @__PURE__ */ w.jsx(Ph, {})
  }
);
la.displayName = "BreadcrumbSeparator";
const Ny = ({
  className: e,
  ...t
}) => /* @__PURE__ */ w.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: Ze("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ w.jsx(uw, { className: "h-4 w-4" }),
      /* @__PURE__ */ w.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
Ny.displayName = "BreadcrumbElipssis";
function Ge(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(i) {
    if (e == null || e(i), n === !1 || !i.defaultPrevented)
      return t == null ? void 0 : t(i);
  };
}
function To(e, t = []) {
  let n = [];
  function r(o, a) {
    const s = _.createContext(a), c = n.length;
    n = [...n, a];
    function l(d) {
      const { scope: p, children: h, ...m } = d, y = (p == null ? void 0 : p[e][c]) || s, v = _.useMemo(() => m, Object.values(m));
      return /* @__PURE__ */ w.jsx(y.Provider, { value: v, children: h });
    }
    function u(d, p) {
      const h = (p == null ? void 0 : p[e][c]) || s, m = _.useContext(h);
      if (m) return m;
      if (a !== void 0) return a;
      throw new Error(`\`${d}\` must be used within \`${o}\``);
    }
    return l.displayName = o + "Provider", [l, u];
  }
  const i = () => {
    const o = n.map((a) => _.createContext(a));
    return function(s) {
      const c = (s == null ? void 0 : s[e]) || o;
      return _.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: c } }),
        [s, c]
      );
    };
  };
  return i.scopeName = e, [r, RA(i, ...t)];
}
function RA(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((i) => ({
      useScope: i(),
      scopeName: i.scopeName
    }));
    return function(o) {
      const a = r.reduce((s, { useScope: c, scopeName: l }) => {
        const d = c(o)[`__scope${l}`];
        return { ...s, ...d };
      }, {});
      return _.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function rn(e) {
  const t = _.useRef(e);
  return _.useEffect(() => {
    t.current = e;
  }), _.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function My({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, i] = TA({ defaultProp: t, onChange: n }), o = e !== void 0, a = o ? e : r, s = rn(n), c = _.useCallback(
    (l) => {
      if (o) {
        const d = typeof l == "function" ? l(e) : l;
        d !== e && s(d);
      } else
        i(l);
    },
    [o, e, i, s]
  );
  return [a, c];
}
function TA({
  defaultProp: e,
  onChange: t
}) {
  const n = _.useState(e), [r] = n, i = _.useRef(r), o = rn(t);
  return _.useEffect(() => {
    i.current !== r && (o(r), i.current = r);
  }, [r, i, o]), n;
}
function Iy(e) {
  const t = e + "CollectionProvider", [n, r] = To(t), [i, o] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (h) => {
    const { scope: m, children: y } = h, v = Le.useRef(null), b = Le.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ w.jsx(i, { scope: m, itemMap: b, collectionRef: v, children: y });
  };
  a.displayName = t;
  const s = e + "CollectionSlot", c = Le.forwardRef(
    (h, m) => {
      const { scope: y, children: v } = h, b = o(s, y), x = jt(m, b.collectionRef);
      return /* @__PURE__ */ w.jsx(Zn, { ref: x, children: v });
    }
  );
  c.displayName = s;
  const l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = Le.forwardRef(
    (h, m) => {
      const { scope: y, children: v, ...b } = h, x = Le.useRef(null), S = jt(m, x), A = o(l, y);
      return Le.useEffect(() => (A.itemMap.set(x, { ref: x, ...b }), () => void A.itemMap.delete(x))), /* @__PURE__ */ w.jsx(Zn, { [u]: "", ref: S, children: v });
    }
  );
  d.displayName = l;
  function p(h) {
    const m = o(e + "CollectionConsumer", h);
    return Le.useCallback(() => {
      const v = m.collectionRef.current;
      if (!v) return [];
      const b = Array.from(v.querySelectorAll(`[${u}]`));
      return Array.from(m.itemMap.values()).sort(
        (A, E) => b.indexOf(A.ref.current) - b.indexOf(E.ref.current)
      );
    }, [m.collectionRef, m.itemMap]);
  }
  return [
    { Provider: a, Slot: c, ItemSlot: d },
    p,
    r
  ];
}
var kA = _.createContext(void 0);
function Dy(e) {
  const t = _.useContext(kA);
  return e || t || "ltr";
}
function PA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rn(e);
  _.useEffect(() => {
    const r = (i) => {
      i.key === "Escape" && n(i);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var NA = "DismissableLayer", xl = "dismissableLayer.update", MA = "dismissableLayer.pointerDownOutside", IA = "dismissableLayer.focusOutside", Ud, jy = _.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Fy = _.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: i,
      onFocusOutside: o,
      onInteractOutside: a,
      onDismiss: s,
      ...c
    } = e, l = _.useContext(jy), [u, d] = _.useState(null), p = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = _.useState({}), m = jt(t, (P) => d(P)), y = Array.from(l.layers), [v] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), b = y.indexOf(v), x = u ? y.indexOf(u) : -1, S = l.layersWithOutsidePointerEventsDisabled.size > 0, A = x >= b, E = FA((P) => {
      const U = P.target, ue = [...l.branches].some((ye) => ye.contains(U));
      !A || ue || (i == null || i(P), a == null || a(P), P.defaultPrevented || s == null || s());
    }, p), N = LA((P) => {
      const U = P.target;
      [...l.branches].some((ye) => ye.contains(U)) || (o == null || o(P), a == null || a(P), P.defaultPrevented || s == null || s());
    }, p);
    return PA((P) => {
      x === l.layers.size - 1 && (r == null || r(P), !P.defaultPrevented && s && (P.preventDefault(), s()));
    }, p), _.useEffect(() => {
      if (u)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Ud = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), Bd(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Ud);
        };
    }, [u, p, n, l]), _.useEffect(() => () => {
      u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), Bd());
    }, [u, l]), _.useEffect(() => {
      const P = () => h({});
      return document.addEventListener(xl, P), () => document.removeEventListener(xl, P);
    }, []), /* @__PURE__ */ w.jsx(
      xt.div,
      {
        ...c,
        ref: m,
        style: {
          pointerEvents: S ? A ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: Ge(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: Ge(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: Ge(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
Fy.displayName = NA;
var DA = "DismissableLayerBranch", jA = _.forwardRef((e, t) => {
  const n = _.useContext(jy), r = _.useRef(null), i = jt(t, r);
  return _.useEffect(() => {
    const o = r.current;
    if (o)
      return n.branches.add(o), () => {
        n.branches.delete(o);
      };
  }, [n.branches]), /* @__PURE__ */ w.jsx(xt.div, { ...e, ref: i });
});
jA.displayName = DA;
function FA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rn(e), r = _.useRef(!1), i = _.useRef(() => {
  });
  return _.useEffect(() => {
    const o = (s) => {
      if (s.target && !r.current) {
        let c = function() {
          Ly(
            MA,
            n,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", i.current), i.current = c, t.addEventListener("click", i.current, { once: !0 })) : c();
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
function LA(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = rn(e), r = _.useRef(!1);
  return _.useEffect(() => {
    const i = (o) => {
      o.target && !r.current && Ly(IA, n, { originalEvent: o }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", i), () => t.removeEventListener("focusin", i);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Bd() {
  const e = new CustomEvent(xl);
  document.dispatchEvent(e);
}
function Ly(e, t, n, { discrete: r }) {
  const i = n.originalEvent.target, o = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && i.addEventListener(e, t, { once: !0 }), r ? sm(i, o) : i.dispatchEvent(o);
}
var wc = 0;
function zA() {
  _.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Wd()), document.body.insertAdjacentElement("beforeend", e[1] ?? Wd()), wc++, () => {
      wc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), wc--;
    };
  }, []);
}
function Wd() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var _c = "focusScope.autoFocusOnMount", Ec = "focusScope.autoFocusOnUnmount", Hd = { bubbles: !1, cancelable: !0 }, $A = "FocusScope", zy = _.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: i,
    onUnmountAutoFocus: o,
    ...a
  } = e, [s, c] = _.useState(null), l = rn(i), u = rn(o), d = _.useRef(null), p = jt(t, (y) => c(y)), h = _.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  _.useEffect(() => {
    if (r) {
      let y = function(S) {
        if (h.paused || !s) return;
        const A = S.target;
        s.contains(A) ? d.current = A : Un(d.current, { select: !0 });
      }, v = function(S) {
        if (h.paused || !s) return;
        const A = S.relatedTarget;
        A !== null && (s.contains(A) || Un(d.current, { select: !0 }));
      }, b = function(S) {
        if (document.activeElement === document.body)
          for (const E of S)
            E.removedNodes.length > 0 && Un(s);
      };
      document.addEventListener("focusin", y), document.addEventListener("focusout", v);
      const x = new MutationObserver(b);
      return s && x.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", y), document.removeEventListener("focusout", v), x.disconnect();
      };
    }
  }, [r, s, h.paused]), _.useEffect(() => {
    if (s) {
      Yd.add(h);
      const y = document.activeElement;
      if (!s.contains(y)) {
        const b = new CustomEvent(_c, Hd);
        s.addEventListener(_c, l), s.dispatchEvent(b), b.defaultPrevented || (VA(qA($y(s)), { select: !0 }), document.activeElement === y && Un(s));
      }
      return () => {
        s.removeEventListener(_c, l), setTimeout(() => {
          const b = new CustomEvent(Ec, Hd);
          s.addEventListener(Ec, u), s.dispatchEvent(b), b.defaultPrevented || Un(y ?? document.body, { select: !0 }), s.removeEventListener(Ec, u), Yd.remove(h);
        }, 0);
      };
    }
  }, [s, l, u, h]);
  const m = _.useCallback(
    (y) => {
      if (!n && !r || h.paused) return;
      const v = y.key === "Tab" && !y.altKey && !y.ctrlKey && !y.metaKey, b = document.activeElement;
      if (v && b) {
        const x = y.currentTarget, [S, A] = UA(x);
        S && A ? !y.shiftKey && b === A ? (y.preventDefault(), n && Un(S, { select: !0 })) : y.shiftKey && b === S && (y.preventDefault(), n && Un(A, { select: !0 })) : b === x && y.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ w.jsx(xt.div, { tabIndex: -1, ...a, ref: p, onKeyDown: m });
});
zy.displayName = $A;
function VA(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (Un(r, { select: t }), document.activeElement !== n) return;
}
function UA(e) {
  const t = $y(e), n = qd(t, e), r = qd(t.reverse(), e);
  return [n, r];
}
function $y(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const i = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || i ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function qd(e, t) {
  for (const n of e)
    if (!BA(n, { upTo: t })) return n;
}
function BA(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function WA(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Un(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && WA(e) && t && e.select();
  }
}
var Yd = HA();
function HA() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Gd(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Gd(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Gd(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function qA(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Rr = globalThis != null && globalThis.document ? _.useLayoutEffect : () => {
}, YA = _.useId || (() => {
}), GA = 0;
function wl(e) {
  const [t, n] = _.useState(YA());
  return Rr(() => {
    n((r) => r ?? String(GA++));
  }, [e]), t ? `radix-${t}` : "";
}
const ZA = ["top", "right", "bottom", "left"], hn = Math.min, Lt = Math.max, La = Math.round, Yo = Math.floor, rr = (e) => ({
  x: e,
  y: e
}), KA = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, XA = {
  start: "end",
  end: "start"
};
function _l(e, t, n) {
  return Lt(e, hn(t, n));
}
function Tn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function kn(e) {
  return e.split("-")[0];
}
function mi(e) {
  return e.split("-")[1];
}
function fu(e) {
  return e === "x" ? "y" : "x";
}
function du(e) {
  return e === "y" ? "height" : "width";
}
function ir(e) {
  return ["top", "bottom"].includes(kn(e)) ? "y" : "x";
}
function pu(e) {
  return fu(ir(e));
}
function JA(e, t, n) {
  n === void 0 && (n = !1);
  const r = mi(e), i = pu(e), o = du(i);
  let a = i === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[o] > t.floating[o] && (a = za(a)), [a, za(a)];
}
function QA(e) {
  const t = za(e);
  return [El(e), t, El(t)];
}
function El(e) {
  return e.replace(/start|end/g, (t) => XA[t]);
}
function e1(e, t, n) {
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
function t1(e, t, n, r) {
  const i = mi(e);
  let o = e1(kn(e), n === "start", r);
  return i && (o = o.map((a) => a + "-" + i), t && (o = o.concat(o.map(El)))), o;
}
function za(e) {
  return e.replace(/left|right|bottom|top/g, (t) => KA[t]);
}
function n1(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function Vy(e) {
  return typeof e != "number" ? n1(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function $a(e) {
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
function Zd(e, t, n) {
  let {
    reference: r,
    floating: i
  } = e;
  const o = ir(t), a = pu(t), s = du(a), c = kn(t), l = o === "y", u = r.x + r.width / 2 - i.width / 2, d = r.y + r.height / 2 - i.height / 2, p = r[s] / 2 - i[s] / 2;
  let h;
  switch (c) {
    case "top":
      h = {
        x: u,
        y: r.y - i.height
      };
      break;
    case "bottom":
      h = {
        x: u,
        y: r.y + r.height
      };
      break;
    case "right":
      h = {
        x: r.x + r.width,
        y: d
      };
      break;
    case "left":
      h = {
        x: r.x - i.width,
        y: d
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (mi(t)) {
    case "start":
      h[a] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      h[a] += p * (n && l ? -1 : 1);
      break;
  }
  return h;
}
const r1 = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: i = "absolute",
    middleware: o = [],
    platform: a
  } = n, s = o.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let l = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: i
  }), {
    x: u,
    y: d
  } = Zd(l, r, c), p = r, h = {}, m = 0;
  for (let y = 0; y < s.length; y++) {
    const {
      name: v,
      fn: b
    } = s[y], {
      x,
      y: S,
      data: A,
      reset: E
    } = await b({
      x: u,
      y: d,
      initialPlacement: r,
      placement: p,
      strategy: i,
      middlewareData: h,
      rects: l,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = x ?? u, d = S ?? d, h = {
      ...h,
      [v]: {
        ...h[v],
        ...A
      }
    }, E && m <= 50 && (m++, typeof E == "object" && (E.placement && (p = E.placement), E.rects && (l = E.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: i
    }) : E.rects), {
      x: u,
      y: d
    } = Zd(l, p, c)), y = -1);
  }
  return {
    x: u,
    y: d,
    placement: p,
    strategy: i,
    middlewareData: h
  };
};
async function fo(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: i,
    platform: o,
    rects: a,
    elements: s,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = Tn(t, e), m = Vy(h), v = s[p ? d === "floating" ? "reference" : "floating" : d], b = $a(await o.getClippingRect({
    element: (n = await (o.isElement == null ? void 0 : o.isElement(v))) == null || n ? v : v.contextElement || await (o.getDocumentElement == null ? void 0 : o.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), x = d === "floating" ? {
    x: r,
    y: i,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, S = await (o.getOffsetParent == null ? void 0 : o.getOffsetParent(s.floating)), A = await (o.isElement == null ? void 0 : o.isElement(S)) ? await (o.getScale == null ? void 0 : o.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = $a(o.convertOffsetParentRelativeRectToViewportRelativeRect ? await o.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: x,
    offsetParent: S,
    strategy: c
  }) : x);
  return {
    top: (b.top - E.top + m.top) / A.y,
    bottom: (E.bottom - b.bottom + m.bottom) / A.y,
    left: (b.left - E.left + m.left) / A.x,
    right: (E.right - b.right + m.right) / A.x
  };
}
const i1 = (e) => ({
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
      middlewareData: c
    } = t, {
      element: l,
      padding: u = 0
    } = Tn(e, t) || {};
    if (l == null)
      return {};
    const d = Vy(u), p = {
      x: n,
      y: r
    }, h = pu(i), m = du(h), y = await a.getDimensions(l), v = h === "y", b = v ? "top" : "left", x = v ? "bottom" : "right", S = v ? "clientHeight" : "clientWidth", A = o.reference[m] + o.reference[h] - p[h] - o.floating[m], E = p[h] - o.reference[h], N = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l));
    let P = N ? N[S] : 0;
    (!P || !await (a.isElement == null ? void 0 : a.isElement(N))) && (P = s.floating[S] || o.floating[m]);
    const U = A / 2 - E / 2, ue = P / 2 - y[m] / 2 - 1, ye = hn(d[b], ue), pe = hn(d[x], ue), V = ye, Q = P - y[m] - pe, B = P / 2 - y[m] / 2 + U, se = _l(V, B, Q), j = !c.arrow && mi(i) != null && B !== se && o.reference[m] / 2 - (B < V ? ye : pe) - y[m] / 2 < 0, fe = j ? B < V ? B - V : B - Q : 0;
    return {
      [h]: p[h] + fe,
      data: {
        [h]: se,
        centerOffset: B - se - fe,
        ...j && {
          alignmentOffset: fe
        }
      },
      reset: j
    };
  }
}), o1 = function(e) {
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
        platform: c,
        elements: l
      } = t, {
        mainAxis: u = !0,
        crossAxis: d = !0,
        fallbackPlacements: p,
        fallbackStrategy: h = "bestFit",
        fallbackAxisSideDirection: m = "none",
        flipAlignment: y = !0,
        ...v
      } = Tn(e, t);
      if ((n = o.arrow) != null && n.alignmentOffset)
        return {};
      const b = kn(i), x = ir(s), S = kn(s) === s, A = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), E = p || (S || !y ? [za(s)] : QA(s)), N = m !== "none";
      !p && N && E.push(...t1(s, y, m, A));
      const P = [s, ...E], U = await fo(t, v), ue = [];
      let ye = ((r = o.flip) == null ? void 0 : r.overflows) || [];
      if (u && ue.push(U[b]), d) {
        const B = JA(i, a, A);
        ue.push(U[B[0]], U[B[1]]);
      }
      if (ye = [...ye, {
        placement: i,
        overflows: ue
      }], !ue.every((B) => B <= 0)) {
        var pe, V;
        const B = (((pe = o.flip) == null ? void 0 : pe.index) || 0) + 1, se = P[B];
        if (se)
          return {
            data: {
              index: B,
              overflows: ye
            },
            reset: {
              placement: se
            }
          };
        let j = (V = ye.filter((fe) => fe.overflows[0] <= 0).sort((fe, _e) => fe.overflows[1] - _e.overflows[1])[0]) == null ? void 0 : V.placement;
        if (!j)
          switch (h) {
            case "bestFit": {
              var Q;
              const fe = (Q = ye.filter((_e) => {
                if (N) {
                  const J = ir(_e.placement);
                  return J === x || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  J === "y";
                }
                return !0;
              }).map((_e) => [_e.placement, _e.overflows.filter((J) => J > 0).reduce((J, L) => J + L, 0)]).sort((_e, J) => _e[1] - J[1])[0]) == null ? void 0 : Q[0];
              fe && (j = fe);
              break;
            }
            case "initialPlacement":
              j = s;
              break;
          }
        if (i !== j)
          return {
            reset: {
              placement: j
            }
          };
      }
      return {};
    }
  };
};
function Kd(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Xd(e) {
  return ZA.some((t) => e[t] >= 0);
}
const a1 = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...i
      } = Tn(e, t);
      switch (r) {
        case "referenceHidden": {
          const o = await fo(t, {
            ...i,
            elementContext: "reference"
          }), a = Kd(o, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Xd(a)
            }
          };
        }
        case "escaped": {
          const o = await fo(t, {
            ...i,
            altBoundary: !0
          }), a = Kd(o, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Xd(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function s1(e, t) {
  const {
    placement: n,
    platform: r,
    elements: i
  } = e, o = await (r.isRTL == null ? void 0 : r.isRTL(i.floating)), a = kn(n), s = mi(n), c = ir(n) === "y", l = ["left", "top"].includes(a) ? -1 : 1, u = o && c ? -1 : 1, d = Tn(t, e);
  let {
    mainAxis: p,
    crossAxis: h,
    alignmentAxis: m
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
  return s && typeof m == "number" && (h = s === "end" ? m * -1 : m), c ? {
    x: h * u,
    y: p * l
  } : {
    x: p * l,
    y: h * u
  };
}
const c1 = function(e) {
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
      } = t, c = await s1(t, e);
      return a === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: i + c.x,
        y: o + c.y,
        data: {
          ...c,
          placement: a
        }
      };
    }
  };
}, l1 = function(e) {
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
          fn: (v) => {
            let {
              x: b,
              y: x
            } = v;
            return {
              x: b,
              y: x
            };
          }
        },
        ...c
      } = Tn(e, t), l = {
        x: n,
        y: r
      }, u = await fo(t, c), d = ir(kn(i)), p = fu(d);
      let h = l[p], m = l[d];
      if (o) {
        const v = p === "y" ? "top" : "left", b = p === "y" ? "bottom" : "right", x = h + u[v], S = h - u[b];
        h = _l(x, h, S);
      }
      if (a) {
        const v = d === "y" ? "top" : "left", b = d === "y" ? "bottom" : "right", x = m + u[v], S = m - u[b];
        m = _l(x, m, S);
      }
      const y = s.fn({
        ...t,
        [p]: h,
        [d]: m
      });
      return {
        ...y,
        data: {
          x: y.x - n,
          y: y.y - r
        }
      };
    }
  };
}, u1 = function(e) {
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
        mainAxis: c = !0,
        crossAxis: l = !0
      } = Tn(e, t), u = {
        x: n,
        y: r
      }, d = ir(i), p = fu(d);
      let h = u[p], m = u[d];
      const y = Tn(s, t), v = typeof y == "number" ? {
        mainAxis: y,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...y
      };
      if (c) {
        const S = p === "y" ? "height" : "width", A = o.reference[p] - o.floating[S] + v.mainAxis, E = o.reference[p] + o.reference[S] - v.mainAxis;
        h < A ? h = A : h > E && (h = E);
      }
      if (l) {
        var b, x;
        const S = p === "y" ? "width" : "height", A = ["top", "left"].includes(kn(i)), E = o.reference[d] - o.floating[S] + (A && ((b = a.offset) == null ? void 0 : b[d]) || 0) + (A ? 0 : v.crossAxis), N = o.reference[d] + o.reference[S] + (A ? 0 : ((x = a.offset) == null ? void 0 : x[d]) || 0) - (A ? v.crossAxis : 0);
        m < E ? m = E : m > N && (m = N);
      }
      return {
        [p]: h,
        [d]: m
      };
    }
  };
}, f1 = function(e) {
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
      } = Tn(e, t), c = await fo(t, s), l = kn(n), u = mi(n), d = ir(n) === "y", {
        width: p,
        height: h
      } = r.floating;
      let m, y;
      l === "top" || l === "bottom" ? (m = l, y = u === (await (i.isRTL == null ? void 0 : i.isRTL(o.floating)) ? "start" : "end") ? "left" : "right") : (y = l, m = u === "end" ? "top" : "bottom");
      const v = h - c.top - c.bottom, b = p - c.left - c.right, x = hn(h - c[m], v), S = hn(p - c[y], b), A = !t.middlewareData.shift;
      let E = x, N = S;
      if (d ? N = u || A ? hn(S, b) : b : E = u || A ? hn(x, v) : v, A && !u) {
        const U = Lt(c.left, 0), ue = Lt(c.right, 0), ye = Lt(c.top, 0), pe = Lt(c.bottom, 0);
        d ? N = p - 2 * (U !== 0 || ue !== 0 ? U + ue : Lt(c.left, c.right)) : E = h - 2 * (ye !== 0 || pe !== 0 ? ye + pe : Lt(c.top, c.bottom));
      }
      await a({
        ...t,
        availableWidth: N,
        availableHeight: E
      });
      const P = await i.getDimensions(o.floating);
      return p !== P.width || h !== P.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function yi(e) {
  return Uy(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Bt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Nn(e) {
  var t;
  return (t = (Uy(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Uy(e) {
  return e instanceof Node || e instanceof Bt(e).Node;
}
function on(e) {
  return e instanceof Element || e instanceof Bt(e).Element;
}
function bn(e) {
  return e instanceof HTMLElement || e instanceof Bt(e).HTMLElement;
}
function Jd(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Bt(e).ShadowRoot;
}
function ko(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: i
  } = an(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(i);
}
function d1(e) {
  return ["table", "td", "th"].includes(yi(e));
}
function gs(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function hu(e) {
  const t = mu(), n = on(e) ? an(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function p1(e) {
  let t = or(e);
  for (; bn(t) && !li(t); ) {
    if (hu(t))
      return t;
    if (gs(t))
      return null;
    t = or(t);
  }
  return null;
}
function mu() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function li(e) {
  return ["html", "body", "#document"].includes(yi(e));
}
function an(e) {
  return Bt(e).getComputedStyle(e);
}
function vs(e) {
  return on(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function or(e) {
  if (yi(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Jd(e) && e.host || // Fallback.
    Nn(e)
  );
  return Jd(t) ? t.host : t;
}
function By(e) {
  const t = or(e);
  return li(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : bn(t) && ko(t) ? t : By(t);
}
function po(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const i = By(e), o = i === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Bt(i);
  return o ? t.concat(a, a.visualViewport || [], ko(i) ? i : [], a.frameElement && n ? po(a.frameElement) : []) : t.concat(i, po(i, [], n));
}
function Wy(e) {
  const t = an(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const i = bn(e), o = i ? e.offsetWidth : n, a = i ? e.offsetHeight : r, s = La(n) !== o || La(r) !== a;
  return s && (n = o, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function yu(e) {
  return on(e) ? e : e.contextElement;
}
function Jr(e) {
  const t = yu(e);
  if (!bn(t))
    return rr(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: i,
    $: o
  } = Wy(t);
  let a = (o ? La(n.width) : n.width) / r, s = (o ? La(n.height) : n.height) / i;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const h1 = /* @__PURE__ */ rr(0);
function Hy(e) {
  const t = Bt(e);
  return !mu() || !t.visualViewport ? h1 : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function m1(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Bt(e) ? !1 : t;
}
function Tr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const i = e.getBoundingClientRect(), o = yu(e);
  let a = rr(1);
  t && (r ? on(r) && (a = Jr(r)) : a = Jr(e));
  const s = m1(o, n, r) ? Hy(o) : rr(0);
  let c = (i.left + s.x) / a.x, l = (i.top + s.y) / a.y, u = i.width / a.x, d = i.height / a.y;
  if (o) {
    const p = Bt(o), h = r && on(r) ? Bt(r) : r;
    let m = p, y = m.frameElement;
    for (; y && r && h !== m; ) {
      const v = Jr(y), b = y.getBoundingClientRect(), x = an(y), S = b.left + (y.clientLeft + parseFloat(x.paddingLeft)) * v.x, A = b.top + (y.clientTop + parseFloat(x.paddingTop)) * v.y;
      c *= v.x, l *= v.y, u *= v.x, d *= v.y, c += S, l += A, m = Bt(y), y = m.frameElement;
    }
  }
  return $a({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function y1(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: i
  } = e;
  const o = i === "fixed", a = Nn(r), s = t ? gs(t.floating) : !1;
  if (r === a || s && o)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = rr(1);
  const u = rr(0), d = bn(r);
  if ((d || !d && !o) && ((yi(r) !== "body" || ko(a)) && (c = vs(r)), bn(r))) {
    const p = Tr(r);
    l = Jr(r), u.x = p.x + r.clientLeft, u.y = p.y + r.clientTop;
  }
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y
  };
}
function g1(e) {
  return Array.from(e.getClientRects());
}
function qy(e) {
  return Tr(Nn(e)).left + vs(e).scrollLeft;
}
function v1(e) {
  const t = Nn(e), n = vs(e), r = e.ownerDocument.body, i = Lt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), o = Lt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + qy(e);
  const s = -n.scrollTop;
  return an(r).direction === "rtl" && (a += Lt(t.clientWidth, r.clientWidth) - i), {
    width: i,
    height: o,
    x: a,
    y: s
  };
}
function b1(e, t) {
  const n = Bt(e), r = Nn(e), i = n.visualViewport;
  let o = r.clientWidth, a = r.clientHeight, s = 0, c = 0;
  if (i) {
    o = i.width, a = i.height;
    const l = mu();
    (!l || l && t === "fixed") && (s = i.offsetLeft, c = i.offsetTop);
  }
  return {
    width: o,
    height: a,
    x: s,
    y: c
  };
}
function x1(e, t) {
  const n = Tr(e, !0, t === "fixed"), r = n.top + e.clientTop, i = n.left + e.clientLeft, o = bn(e) ? Jr(e) : rr(1), a = e.clientWidth * o.x, s = e.clientHeight * o.y, c = i * o.x, l = r * o.y;
  return {
    width: a,
    height: s,
    x: c,
    y: l
  };
}
function Qd(e, t, n) {
  let r;
  if (t === "viewport")
    r = b1(e, n);
  else if (t === "document")
    r = v1(Nn(e));
  else if (on(t))
    r = x1(t, n);
  else {
    const i = Hy(e);
    r = {
      ...t,
      x: t.x - i.x,
      y: t.y - i.y
    };
  }
  return $a(r);
}
function Yy(e, t) {
  const n = or(e);
  return n === t || !on(n) || li(n) ? !1 : an(n).position === "fixed" || Yy(n, t);
}
function w1(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = po(e, [], !1).filter((s) => on(s) && yi(s) !== "body"), i = null;
  const o = an(e).position === "fixed";
  let a = o ? or(e) : e;
  for (; on(a) && !li(a); ) {
    const s = an(a), c = hu(a);
    !c && s.position === "fixed" && (i = null), (o ? !c && !i : !c && s.position === "static" && !!i && ["absolute", "fixed"].includes(i.position) || ko(a) && !c && Yy(e, a)) ? r = r.filter((u) => u !== a) : i = s, a = or(a);
  }
  return t.set(e, r), r;
}
function _1(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: i
  } = e;
  const a = [...n === "clippingAncestors" ? gs(t) ? [] : w1(t, this._c) : [].concat(n), r], s = a[0], c = a.reduce((l, u) => {
    const d = Qd(t, u, i);
    return l.top = Lt(d.top, l.top), l.right = hn(d.right, l.right), l.bottom = hn(d.bottom, l.bottom), l.left = Lt(d.left, l.left), l;
  }, Qd(t, s, i));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function E1(e) {
  const {
    width: t,
    height: n
  } = Wy(e);
  return {
    width: t,
    height: n
  };
}
function S1(e, t, n) {
  const r = bn(t), i = Nn(t), o = n === "fixed", a = Tr(e, !0, o, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = rr(0);
  if (r || !r && !o)
    if ((yi(t) !== "body" || ko(i)) && (s = vs(t)), r) {
      const d = Tr(t, !0, o, t);
      c.x = d.x + t.clientLeft, c.y = d.y + t.clientTop;
    } else i && (c.x = qy(i));
  const l = a.left + s.scrollLeft - c.x, u = a.top + s.scrollTop - c.y;
  return {
    x: l,
    y: u,
    width: a.width,
    height: a.height
  };
}
function Sc(e) {
  return an(e).position === "static";
}
function ep(e, t) {
  return !bn(e) || an(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Gy(e, t) {
  const n = Bt(e);
  if (gs(e))
    return n;
  if (!bn(e)) {
    let i = or(e);
    for (; i && !li(i); ) {
      if (on(i) && !Sc(i))
        return i;
      i = or(i);
    }
    return n;
  }
  let r = ep(e, t);
  for (; r && d1(r) && Sc(r); )
    r = ep(r, t);
  return r && li(r) && Sc(r) && !hu(r) ? n : r || p1(e) || n;
}
const C1 = async function(e) {
  const t = this.getOffsetParent || Gy, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: S1(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function A1(e) {
  return an(e).direction === "rtl";
}
const O1 = {
  convertOffsetParentRelativeRectToViewportRelativeRect: y1,
  getDocumentElement: Nn,
  getClippingRect: _1,
  getOffsetParent: Gy,
  getElementRects: C1,
  getClientRects: g1,
  getDimensions: E1,
  getScale: Jr,
  isElement: on,
  isRTL: A1
};
function R1(e, t) {
  let n = null, r;
  const i = Nn(e);
  function o() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function a(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), o();
    const {
      left: l,
      top: u,
      width: d,
      height: p
    } = e.getBoundingClientRect();
    if (s || t(), !d || !p)
      return;
    const h = Yo(u), m = Yo(i.clientWidth - (l + d)), y = Yo(i.clientHeight - (u + p)), v = Yo(l), x = {
      rootMargin: -h + "px " + -m + "px " + -y + "px " + -v + "px",
      threshold: Lt(0, hn(1, c)) || 1
    };
    let S = !0;
    function A(E) {
      const N = E[0].intersectionRatio;
      if (N !== c) {
        if (!S)
          return a();
        N ? a(!1, N) : r = setTimeout(() => {
          a(!1, 1e-7);
        }, 1e3);
      }
      S = !1;
    }
    try {
      n = new IntersectionObserver(A, {
        ...x,
        // Handle <iframe>s
        root: i.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(A, x);
    }
    n.observe(e);
  }
  return a(!0), o;
}
function T1(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: i = !0,
    ancestorResize: o = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = yu(e), u = i || o ? [...l ? po(l) : [], ...po(t)] : [];
  u.forEach((b) => {
    i && b.addEventListener("scroll", n, {
      passive: !0
    }), o && b.addEventListener("resize", n);
  });
  const d = l && s ? R1(l, n) : null;
  let p = -1, h = null;
  a && (h = new ResizeObserver((b) => {
    let [x] = b;
    x && x.target === l && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var S;
      (S = h) == null || S.observe(t);
    })), n();
  }), l && !c && h.observe(l), h.observe(t));
  let m, y = c ? Tr(e) : null;
  c && v();
  function v() {
    const b = Tr(e);
    y && (b.x !== y.x || b.y !== y.y || b.width !== y.width || b.height !== y.height) && n(), y = b, m = requestAnimationFrame(v);
  }
  return n(), () => {
    var b;
    u.forEach((x) => {
      i && x.removeEventListener("scroll", n), o && x.removeEventListener("resize", n);
    }), d == null || d(), (b = h) == null || b.disconnect(), h = null, c && cancelAnimationFrame(m);
  };
}
const k1 = c1, P1 = l1, N1 = o1, M1 = f1, I1 = a1, tp = i1, D1 = u1, j1 = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), i = {
    platform: O1,
    ...n
  }, o = {
    ...i.platform,
    _c: r
  };
  return r1(e, t, {
    ...i,
    platform: o
  });
};
var ua = typeof document < "u" ? Ov : yo;
function Va(e, t) {
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
        if (!Va(e[r], t[r]))
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
      if (!(o === "_owner" && e.$$typeof) && !Va(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Zy(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function np(e, t) {
  const n = Zy(e);
  return Math.round(t * n) / n;
}
function rp(e) {
  const t = _.useRef(e);
  return ua(() => {
    t.current = e;
  }), t;
}
function F1(e) {
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
    whileElementsMounted: c,
    open: l
  } = e, [u, d] = _.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, h] = _.useState(r);
  Va(p, r) || h(r);
  const [m, y] = _.useState(null), [v, b] = _.useState(null), x = _.useCallback((fe) => {
    fe !== N.current && (N.current = fe, y(fe));
  }, []), S = _.useCallback((fe) => {
    fe !== P.current && (P.current = fe, b(fe));
  }, []), A = o || m, E = a || v, N = _.useRef(null), P = _.useRef(null), U = _.useRef(u), ue = c != null, ye = rp(c), pe = rp(i), V = _.useCallback(() => {
    if (!N.current || !P.current)
      return;
    const fe = {
      placement: t,
      strategy: n,
      middleware: p
    };
    pe.current && (fe.platform = pe.current), j1(N.current, P.current, fe).then((_e) => {
      const J = {
        ..._e,
        isPositioned: !0
      };
      Q.current && !Va(U.current, J) && (U.current = J, Rl.flushSync(() => {
        d(J);
      }));
    });
  }, [p, t, n, pe]);
  ua(() => {
    l === !1 && U.current.isPositioned && (U.current.isPositioned = !1, d((fe) => ({
      ...fe,
      isPositioned: !1
    })));
  }, [l]);
  const Q = _.useRef(!1);
  ua(() => (Q.current = !0, () => {
    Q.current = !1;
  }), []), ua(() => {
    if (A && (N.current = A), E && (P.current = E), A && E) {
      if (ye.current)
        return ye.current(A, E, V);
      V();
    }
  }, [A, E, V, ye, ue]);
  const B = _.useMemo(() => ({
    reference: N,
    floating: P,
    setReference: x,
    setFloating: S
  }), [x, S]), se = _.useMemo(() => ({
    reference: A,
    floating: E
  }), [A, E]), j = _.useMemo(() => {
    const fe = {
      position: n,
      left: 0,
      top: 0
    };
    if (!se.floating)
      return fe;
    const _e = np(se.floating, u.x), J = np(se.floating, u.y);
    return s ? {
      ...fe,
      transform: "translate(" + _e + "px, " + J + "px)",
      ...Zy(se.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: _e,
      top: J
    };
  }, [n, s, se.floating, u.x, u.y]);
  return _.useMemo(() => ({
    ...u,
    update: V,
    refs: B,
    elements: se,
    floatingStyles: j
  }), [u, V, B, se, j]);
}
const L1 = (e) => {
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
      return r && t(r) ? r.current != null ? tp({
        element: r.current,
        padding: i
      }).fn(n) : {} : r ? tp({
        element: r,
        padding: i
      }).fn(n) : {};
    }
  };
}, z1 = (e, t) => ({
  ...k1(e),
  options: [e, t]
}), $1 = (e, t) => ({
  ...P1(e),
  options: [e, t]
}), V1 = (e, t) => ({
  ...D1(e),
  options: [e, t]
}), U1 = (e, t) => ({
  ...N1(e),
  options: [e, t]
}), B1 = (e, t) => ({
  ...M1(e),
  options: [e, t]
}), W1 = (e, t) => ({
  ...I1(e),
  options: [e, t]
}), H1 = (e, t) => ({
  ...L1(e),
  options: [e, t]
});
var q1 = "Arrow", Ky = _.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: i = 5, ...o } = e;
  return /* @__PURE__ */ w.jsx(
    xt.svg,
    {
      ...o,
      ref: t,
      width: r,
      height: i,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ w.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
Ky.displayName = q1;
var Y1 = Ky;
function G1(e) {
  const [t, n] = _.useState(void 0);
  return Rr(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((i) => {
        if (!Array.isArray(i) || !i.length)
          return;
        const o = i[0];
        let a, s;
        if ("borderBoxSize" in o) {
          const c = o.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
          a = l.inlineSize, s = l.blockSize;
        } else
          a = e.offsetWidth, s = e.offsetHeight;
        n({ width: a, height: s });
      });
      return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
    } else
      n(void 0);
  }, [e]), t;
}
var gu = "Popper", [Xy, Jy] = To(gu), [Z1, Qy] = Xy(gu), eg = (e) => {
  const { __scopePopper: t, children: n } = e, [r, i] = _.useState(null);
  return /* @__PURE__ */ w.jsx(Z1, { scope: t, anchor: r, onAnchorChange: i, children: n });
};
eg.displayName = gu;
var tg = "PopperAnchor", ng = _.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...i } = e, o = Qy(tg, n), a = _.useRef(null), s = jt(t, a);
    return _.useEffect(() => {
      o.onAnchorChange((r == null ? void 0 : r.current) || a.current);
    }), r ? null : /* @__PURE__ */ w.jsx(xt.div, { ...i, ref: s });
  }
);
ng.displayName = tg;
var vu = "PopperContent", [K1, X1] = Xy(vu), rg = _.forwardRef(
  (e, t) => {
    var G, ie, le, ve, Pe, ee;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: i = 0,
      align: o = "center",
      alignOffset: a = 0,
      arrowPadding: s = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: u = 0,
      sticky: d = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: m,
      ...y
    } = e, v = Qy(vu, n), [b, x] = _.useState(null), S = jt(t, (Oe) => x(Oe)), [A, E] = _.useState(null), N = G1(A), P = (N == null ? void 0 : N.width) ?? 0, U = (N == null ? void 0 : N.height) ?? 0, ue = r + (o !== "center" ? "-" + o : ""), ye = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, pe = Array.isArray(l) ? l : [l], V = pe.length > 0, Q = {
      padding: ye,
      boundary: pe.filter(Q1),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: V
    }, { refs: B, floatingStyles: se, placement: j, isPositioned: fe, middlewareData: _e } = F1({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: ue,
      whileElementsMounted: (...Oe) => T1(...Oe, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: v.anchor
      },
      middleware: [
        z1({ mainAxis: i + U, alignmentAxis: a }),
        c && $1({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? V1() : void 0,
          ...Q
        }),
        c && U1({ ...Q }),
        B1({
          ...Q,
          apply: ({ elements: Oe, rects: Be, availableWidth: ct, availableHeight: et }) => {
            const { width: $e, height: C } = Be.reference, k = Oe.floating.style;
            k.setProperty("--radix-popper-available-width", `${ct}px`), k.setProperty("--radix-popper-available-height", `${et}px`), k.setProperty("--radix-popper-anchor-width", `${$e}px`), k.setProperty("--radix-popper-anchor-height", `${C}px`);
          }
        }),
        A && H1({ element: A, padding: s }),
        eO({ arrowWidth: P, arrowHeight: U }),
        p && W1({ strategy: "referenceHidden", ...Q })
      ]
    }), [J, L] = ag(j), q = rn(m);
    Rr(() => {
      fe && (q == null || q());
    }, [fe, q]);
    const ge = (G = _e.arrow) == null ? void 0 : G.x, I = (ie = _e.arrow) == null ? void 0 : ie.y, X = ((le = _e.arrow) == null ? void 0 : le.centerOffset) !== 0, [re, Y] = _.useState();
    return Rr(() => {
      b && Y(window.getComputedStyle(b).zIndex);
    }, [b]), /* @__PURE__ */ w.jsx(
      "div",
      {
        ref: B.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...se,
          transform: fe ? se.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: re,
          "--radix-popper-transform-origin": [
            (ve = _e.transformOrigin) == null ? void 0 : ve.x,
            (Pe = _e.transformOrigin) == null ? void 0 : Pe.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ee = _e.hide) == null ? void 0 : ee.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ w.jsx(
          K1,
          {
            scope: n,
            placedSide: J,
            onArrowChange: E,
            arrowX: ge,
            arrowY: I,
            shouldHideArrow: X,
            children: /* @__PURE__ */ w.jsx(
              xt.div,
              {
                "data-side": J,
                "data-align": L,
                ...y,
                ref: S,
                style: {
                  ...y.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: fe ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
rg.displayName = vu;
var ig = "PopperArrow", J1 = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, og = _.forwardRef(function(t, n) {
  const { __scopePopper: r, ...i } = t, o = X1(ig, r), a = J1[o.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ w.jsx(
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
        children: /* @__PURE__ */ w.jsx(
          Y1,
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
og.displayName = ig;
function Q1(e) {
  return e !== null;
}
var eO = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var v, b, x;
    const { placement: n, rects: r, middlewareData: i } = t, a = ((v = i.arrow) == null ? void 0 : v.centerOffset) !== 0, s = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [l, u] = ag(n), d = { start: "0%", center: "50%", end: "100%" }[u], p = (((b = i.arrow) == null ? void 0 : b.x) ?? 0) + s / 2, h = (((x = i.arrow) == null ? void 0 : x.y) ?? 0) + c / 2;
    let m = "", y = "";
    return l === "bottom" ? (m = a ? d : `${p}px`, y = `${-c}px`) : l === "top" ? (m = a ? d : `${p}px`, y = `${r.floating.height + c}px`) : l === "right" ? (m = `${-c}px`, y = a ? d : `${h}px`) : l === "left" && (m = `${r.floating.width + c}px`, y = a ? d : `${h}px`), { data: { x: m, y } };
  }
});
function ag(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var tO = eg, nO = ng, rO = rg, iO = og, oO = "Portal", sg = _.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [i, o] = _.useState(!1);
  Rr(() => o(!0), []);
  const a = n || i && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return a ? Tv.createPortal(/* @__PURE__ */ w.jsx(xt.div, { ...r, ref: t }), a) : null;
});
sg.displayName = oO;
function aO(e, t) {
  return _.useReducer((n, r) => t[n][r] ?? n, e);
}
var Po = (e) => {
  const { present: t, children: n } = e, r = sO(t), i = typeof n == "function" ? n({ present: r.isPresent }) : _.Children.only(n), o = jt(r.ref, cO(i));
  return typeof n == "function" || r.isPresent ? _.cloneElement(i, { ref: o }) : null;
};
Po.displayName = "Presence";
function sO(e) {
  const [t, n] = _.useState(), r = _.useRef({}), i = _.useRef(e), o = _.useRef("none"), a = e ? "mounted" : "unmounted", [s, c] = aO(a, {
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
  return _.useEffect(() => {
    const l = Go(r.current);
    o.current = s === "mounted" ? l : "none";
  }, [s]), Rr(() => {
    const l = r.current, u = i.current;
    if (u !== e) {
      const p = o.current, h = Go(l);
      e ? c("MOUNT") : h === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), i.current = e;
    }
  }, [e, c]), Rr(() => {
    if (t) {
      const l = (d) => {
        const h = Go(r.current).includes(d.animationName);
        d.target === t && h && Rl.flushSync(() => c("ANIMATION_END"));
      }, u = (d) => {
        d.target === t && (o.current = Go(r.current));
      };
      return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: _.useCallback((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function Go(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function cO(e) {
  var r, i;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (i = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : i.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Cc = "rovingFocusGroup.onEntryFocus", lO = { bubbles: !1, cancelable: !0 }, bs = "RovingFocusGroup", [Sl, cg, uO] = Iy(bs), [fO, lg] = To(
  bs,
  [uO]
), [dO, pO] = fO(bs), ug = _.forwardRef(
  (e, t) => /* @__PURE__ */ w.jsx(Sl.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ w.jsx(Sl.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ w.jsx(hO, { ...e, ref: t }) }) })
);
ug.displayName = bs;
var hO = _.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: i = !1,
    dir: o,
    currentTabStopId: a,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: c,
    onEntryFocus: l,
    preventScrollOnEntryFocus: u = !1,
    ...d
  } = e, p = _.useRef(null), h = jt(t, p), m = Dy(o), [y = null, v] = My({
    prop: a,
    defaultProp: s,
    onChange: c
  }), [b, x] = _.useState(!1), S = rn(l), A = cg(n), E = _.useRef(!1), [N, P] = _.useState(0);
  return _.useEffect(() => {
    const U = p.current;
    if (U)
      return U.addEventListener(Cc, S), () => U.removeEventListener(Cc, S);
  }, [S]), /* @__PURE__ */ w.jsx(
    dO,
    {
      scope: n,
      orientation: r,
      dir: m,
      loop: i,
      currentTabStopId: y,
      onItemFocus: _.useCallback(
        (U) => v(U),
        [v]
      ),
      onItemShiftTab: _.useCallback(() => x(!0), []),
      onFocusableItemAdd: _.useCallback(
        () => P((U) => U + 1),
        []
      ),
      onFocusableItemRemove: _.useCallback(
        () => P((U) => U - 1),
        []
      ),
      children: /* @__PURE__ */ w.jsx(
        xt.div,
        {
          tabIndex: b || N === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: Ge(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: Ge(e.onFocus, (U) => {
            const ue = !E.current;
            if (U.target === U.currentTarget && ue && !b) {
              const ye = new CustomEvent(Cc, lO);
              if (U.currentTarget.dispatchEvent(ye), !ye.defaultPrevented) {
                const pe = A().filter((j) => j.focusable), V = pe.find((j) => j.active), Q = pe.find((j) => j.id === y), se = [V, Q, ...pe].filter(
                  Boolean
                ).map((j) => j.ref.current);
                pg(se, u);
              }
            }
            E.current = !1;
          }),
          onBlur: Ge(e.onBlur, () => x(!1))
        }
      )
    }
  );
}), fg = "RovingFocusGroupItem", dg = _.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: i = !1,
      tabStopId: o,
      ...a
    } = e, s = wl(), c = o || s, l = pO(fg, n), u = l.currentTabStopId === c, d = cg(n), { onFocusableItemAdd: p, onFocusableItemRemove: h } = l;
    return _.useEffect(() => {
      if (r)
        return p(), () => h();
    }, [r, p, h]), /* @__PURE__ */ w.jsx(
      Sl.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: i,
        children: /* @__PURE__ */ w.jsx(
          xt.span,
          {
            tabIndex: u ? 0 : -1,
            "data-orientation": l.orientation,
            ...a,
            ref: t,
            onMouseDown: Ge(e.onMouseDown, (m) => {
              r ? l.onItemFocus(c) : m.preventDefault();
            }),
            onFocus: Ge(e.onFocus, () => l.onItemFocus(c)),
            onKeyDown: Ge(e.onKeyDown, (m) => {
              if (m.key === "Tab" && m.shiftKey) {
                l.onItemShiftTab();
                return;
              }
              if (m.target !== m.currentTarget) return;
              const y = gO(m, l.orientation, l.dir);
              if (y !== void 0) {
                if (m.metaKey || m.ctrlKey || m.altKey || m.shiftKey) return;
                m.preventDefault();
                let b = d().filter((x) => x.focusable).map((x) => x.ref.current);
                if (y === "last") b.reverse();
                else if (y === "prev" || y === "next") {
                  y === "prev" && b.reverse();
                  const x = b.indexOf(m.currentTarget);
                  b = l.loop ? vO(b, x + 1) : b.slice(x + 1);
                }
                setTimeout(() => pg(b));
              }
            })
          }
        )
      }
    );
  }
);
dg.displayName = fg;
var mO = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function yO(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function gO(e, t, n) {
  const r = yO(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return mO[r];
}
function pg(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function vO(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var bO = ug, xO = dg, wO = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Fr = /* @__PURE__ */ new WeakMap(), Zo = /* @__PURE__ */ new WeakMap(), Ko = {}, Ac = 0, hg = function(e) {
  return e && (e.host || hg(e.parentNode));
}, _O = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = hg(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, EO = function(e, t, n, r) {
  var i = _O(t, Array.isArray(e) ? e : [e]);
  Ko[n] || (Ko[n] = /* @__PURE__ */ new WeakMap());
  var o = Ko[n], a = [], s = /* @__PURE__ */ new Set(), c = new Set(i), l = function(d) {
    !d || s.has(d) || (s.add(d), l(d.parentNode));
  };
  i.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (s.has(p))
        u(p);
      else
        try {
          var h = p.getAttribute(r), m = h !== null && h !== "false", y = (Fr.get(p) || 0) + 1, v = (o.get(p) || 0) + 1;
          Fr.set(p, y), o.set(p, v), a.push(p), y === 1 && m && Zo.set(p, !0), v === 1 && p.setAttribute(n, "true"), m || p.setAttribute(r, "true");
        } catch (b) {
          console.error("aria-hidden: cannot operate on ", p, b);
        }
    });
  };
  return u(t), s.clear(), Ac++, function() {
    a.forEach(function(d) {
      var p = Fr.get(d) - 1, h = o.get(d) - 1;
      Fr.set(d, p), o.set(d, h), p || (Zo.has(d) || d.removeAttribute(r), Zo.delete(d)), h || d.removeAttribute(n);
    }), Ac--, Ac || (Fr = /* @__PURE__ */ new WeakMap(), Fr = /* @__PURE__ */ new WeakMap(), Zo = /* @__PURE__ */ new WeakMap(), Ko = {});
  };
}, SO = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), i = wO(e);
  return i ? (r.push.apply(r, Array.from(i.querySelectorAll("[aria-live]"))), EO(r, i, n, "aria-hidden")) : function() {
    return null;
  };
}, un = function() {
  return un = Object.assign || function(t) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
    }
    return t;
  }, un.apply(this, arguments);
};
function mg(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
  return n;
}
function CO(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, o; r < i; r++)
    (o || !(r in t)) && (o || (o = Array.prototype.slice.call(t, 0, r)), o[r] = t[r]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var fa = "right-scroll-bar-position", da = "width-before-scroll-bar", AO = "with-scroll-bars-hidden", OO = "--removed-body-scroll-bar-size";
function Oc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function RO(e, t) {
  var n = Ol(function() {
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
var TO = typeof window < "u" ? _.useLayoutEffect : _.useEffect, ip = /* @__PURE__ */ new WeakMap();
function kO(e, t) {
  var n = RO(null, function(r) {
    return e.forEach(function(i) {
      return Oc(i, r);
    });
  });
  return TO(function() {
    var r = ip.get(n);
    if (r) {
      var i = new Set(r), o = new Set(e), a = n.current;
      i.forEach(function(s) {
        o.has(s) || Oc(s, null);
      }), o.forEach(function(s) {
        i.has(s) || Oc(s, a);
      });
    }
    ip.set(n, e);
  }, [e]), n;
}
function PO(e) {
  return e;
}
function NO(e, t) {
  t === void 0 && (t = PO);
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
      var c = function() {
        var u = a;
        a = [], u.forEach(o);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(u) {
          a.push(u), l();
        },
        filter: function(u) {
          return a = a.filter(u), n;
        }
      };
    }
  };
  return i;
}
function MO(e) {
  e === void 0 && (e = {});
  var t = NO(null);
  return t.options = un({ async: !0, ssr: !1 }, e), t;
}
var yg = function(e) {
  var t = e.sideCar, n = mg(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return _.createElement(r, un({}, n));
};
yg.isSideCarExport = !0;
function IO(e, t) {
  return e.useMedium(t), yg;
}
var gg = MO(), Rc = function() {
}, xs = _.forwardRef(function(e, t) {
  var n = _.useRef(null), r = _.useState({
    onScrollCapture: Rc,
    onWheelCapture: Rc,
    onTouchMoveCapture: Rc
  }), i = r[0], o = r[1], a = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, h = e.noIsolation, m = e.inert, y = e.allowPinchZoom, v = e.as, b = v === void 0 ? "div" : v, x = e.gapMode, S = mg(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), A = p, E = kO([n, t]), N = un(un({}, S), i);
  return _.createElement(
    _.Fragment,
    null,
    u && _.createElement(A, { sideCar: gg, removeScrollBar: l, shards: d, noIsolation: h, inert: m, setCallbacks: o, allowPinchZoom: !!y, lockRef: n, gapMode: x }),
    a ? _.cloneElement(_.Children.only(s), un(un({}, N), { ref: E })) : _.createElement(b, un({}, N, { className: c, ref: E }), s)
  );
});
xs.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
xs.classNames = {
  fullWidth: da,
  zeroRight: fa
};
var DO = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function jO() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = DO();
  return t && e.setAttribute("nonce", t), e;
}
function FO(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function LO(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var zO = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = jO()) && (FO(t, n), LO(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, $O = function() {
  var e = zO();
  return function(t, n) {
    _.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, vg = function() {
  var e = $O(), t = function(n) {
    var r = n.styles, i = n.dynamic;
    return e(r, i), null;
  };
  return t;
}, VO = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Tc = function(e) {
  return parseInt(e || "", 10) || 0;
}, UO = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], i = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Tc(n), Tc(r), Tc(i)];
}, BO = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return VO;
  var t = UO(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, WO = vg(), Qr = "data-scroll-locked", HO = function(e, t, n, r) {
  var i = e.left, o = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(AO, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(Qr, `] {
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
  
  .`).concat(fa, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(da, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(fa, " .").concat(fa, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(da, " .").concat(da, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(Qr, `] {
    `).concat(OO, ": ").concat(s, `px;
  }
`);
}, op = function() {
  var e = parseInt(document.body.getAttribute(Qr) || "0", 10);
  return isFinite(e) ? e : 0;
}, qO = function() {
  _.useEffect(function() {
    return document.body.setAttribute(Qr, (op() + 1).toString()), function() {
      var e = op() - 1;
      e <= 0 ? document.body.removeAttribute(Qr) : document.body.setAttribute(Qr, e.toString());
    };
  }, []);
}, YO = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, i = r === void 0 ? "margin" : r;
  qO();
  var o = _.useMemo(function() {
    return BO(i);
  }, [i]);
  return _.createElement(WO, { styles: HO(o, !t, i, n ? "" : "!important") });
}, Cl = !1;
if (typeof window < "u")
  try {
    var Xo = Object.defineProperty({}, "passive", {
      get: function() {
        return Cl = !0, !0;
      }
    });
    window.addEventListener("test", Xo, Xo), window.removeEventListener("test", Xo, Xo);
  } catch {
    Cl = !1;
  }
var Lr = Cl ? { passive: !1 } : !1, GO = function(e) {
  return e.tagName === "TEXTAREA";
}, bg = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !GO(e) && n[t] === "visible")
  );
}, ZO = function(e) {
  return bg(e, "overflowY");
}, KO = function(e) {
  return bg(e, "overflowX");
}, ap = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var i = xg(e, r);
    if (i) {
      var o = wg(e, r), a = o[1], s = o[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, XO = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, JO = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, xg = function(e, t) {
  return e === "v" ? ZO(t) : KO(t);
}, wg = function(e, t) {
  return e === "v" ? XO(t) : JO(t);
}, QO = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, eR = function(e, t, n, r, i) {
  var o = QO(e, window.getComputedStyle(t).direction), a = o * r, s = n.target, c = t.contains(s), l = !1, u = a > 0, d = 0, p = 0;
  do {
    var h = wg(e, s), m = h[0], y = h[1], v = h[2], b = y - v - o * m;
    (m || b) && xg(e, s) && (d += b, p += m), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (u && (Math.abs(d) < 1 || !i) || !u && (Math.abs(p) < 1 || !i)) && (l = !0), l;
}, Jo = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, sp = function(e) {
  return [e.deltaX, e.deltaY];
}, cp = function(e) {
  return e && "current" in e ? e.current : e;
}, tR = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, nR = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, rR = 0, zr = [];
function iR(e) {
  var t = _.useRef([]), n = _.useRef([0, 0]), r = _.useRef(), i = _.useState(rR++)[0], o = _.useState(vg)[0], a = _.useRef(e);
  _.useEffect(function() {
    a.current = e;
  }, [e]), _.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(i));
      var y = CO([e.lockRef.current], (e.shards || []).map(cp), !0).filter(Boolean);
      return y.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(i));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(i)), y.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(i));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = _.useCallback(function(y, v) {
    if ("touches" in y && y.touches.length === 2)
      return !a.current.allowPinchZoom;
    var b = Jo(y), x = n.current, S = "deltaX" in y ? y.deltaX : x[0] - b[0], A = "deltaY" in y ? y.deltaY : x[1] - b[1], E, N = y.target, P = Math.abs(S) > Math.abs(A) ? "h" : "v";
    if ("touches" in y && P === "h" && N.type === "range")
      return !1;
    var U = ap(P, N);
    if (!U)
      return !0;
    if (U ? E = P : (E = P === "v" ? "h" : "v", U = ap(P, N)), !U)
      return !1;
    if (!r.current && "changedTouches" in y && (S || A) && (r.current = E), !E)
      return !0;
    var ue = r.current || E;
    return eR(ue, v, y, ue === "h" ? S : A, !0);
  }, []), c = _.useCallback(function(y) {
    var v = y;
    if (!(!zr.length || zr[zr.length - 1] !== o)) {
      var b = "deltaY" in v ? sp(v) : Jo(v), x = t.current.filter(function(E) {
        return E.name === v.type && (E.target === v.target || v.target === E.shadowParent) && tR(E.delta, b);
      })[0];
      if (x && x.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!x) {
        var S = (a.current.shards || []).map(cp).filter(Boolean).filter(function(E) {
          return E.contains(v.target);
        }), A = S.length > 0 ? s(v, S[0]) : !a.current.noIsolation;
        A && v.cancelable && v.preventDefault();
      }
    }
  }, []), l = _.useCallback(function(y, v, b, x) {
    var S = { name: y, delta: v, target: b, should: x, shadowParent: oR(b) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(A) {
        return A !== S;
      });
    }, 1);
  }, []), u = _.useCallback(function(y) {
    n.current = Jo(y), r.current = void 0;
  }, []), d = _.useCallback(function(y) {
    l(y.type, sp(y), y.target, s(y, e.lockRef.current));
  }, []), p = _.useCallback(function(y) {
    l(y.type, Jo(y), y.target, s(y, e.lockRef.current));
  }, []);
  _.useEffect(function() {
    return zr.push(o), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, Lr), document.addEventListener("touchmove", c, Lr), document.addEventListener("touchstart", u, Lr), function() {
      zr = zr.filter(function(y) {
        return y !== o;
      }), document.removeEventListener("wheel", c, Lr), document.removeEventListener("touchmove", c, Lr), document.removeEventListener("touchstart", u, Lr);
    };
  }, []);
  var h = e.removeScrollBar, m = e.inert;
  return _.createElement(
    _.Fragment,
    null,
    m ? _.createElement(o, { styles: nR(i) }) : null,
    h ? _.createElement(YO, { gapMode: e.gapMode }) : null
  );
}
function oR(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const aR = IO(gg, iR);
var _g = _.forwardRef(function(e, t) {
  return _.createElement(xs, un({}, e, { ref: t, sideCar: aR }));
});
_g.classNames = xs.classNames;
var Al = ["Enter", " "], sR = ["ArrowDown", "PageUp", "Home"], Eg = ["ArrowUp", "PageDown", "End"], cR = [...sR, ...Eg], lR = {
  ltr: [...Al, "ArrowRight"],
  rtl: [...Al, "ArrowLeft"]
}, uR = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, No = "Menu", [ho, fR, dR] = Iy(No), [kr, Sg] = To(No, [
  dR,
  Jy,
  lg
]), ws = Jy(), Cg = lg(), [pR, Pr] = kr(No), [hR, Mo] = kr(No), Ag = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: i, onOpenChange: o, modal: a = !0 } = e, s = ws(t), [c, l] = _.useState(null), u = _.useRef(!1), d = rn(o), p = Dy(i);
  return _.useEffect(() => {
    const h = () => {
      u.current = !0, document.addEventListener("pointerdown", m, { capture: !0, once: !0 }), document.addEventListener("pointermove", m, { capture: !0, once: !0 });
    }, m = () => u.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", m, { capture: !0 }), document.removeEventListener("pointermove", m, { capture: !0 });
    };
  }, []), /* @__PURE__ */ w.jsx(tO, { ...s, children: /* @__PURE__ */ w.jsx(
    pR,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ w.jsx(
        hR,
        {
          scope: t,
          onClose: _.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: u,
          dir: p,
          modal: a,
          children: r
        }
      )
    }
  ) });
};
Ag.displayName = No;
var mR = "MenuAnchor", bu = _.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, i = ws(n);
    return /* @__PURE__ */ w.jsx(nO, { ...i, ...r, ref: t });
  }
);
bu.displayName = mR;
var xu = "MenuPortal", [yR, Og] = kr(xu, {
  forceMount: void 0
}), Rg = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: i } = e, o = Pr(xu, t);
  return /* @__PURE__ */ w.jsx(yR, { scope: t, forceMount: n, children: /* @__PURE__ */ w.jsx(Po, { present: n || o.open, children: /* @__PURE__ */ w.jsx(sg, { asChild: !0, container: i, children: r }) }) });
};
Rg.displayName = xu;
var Zt = "MenuContent", [gR, wu] = kr(Zt), Tg = _.forwardRef(
  (e, t) => {
    const n = Og(Zt, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, o = Pr(Zt, e.__scopeMenu), a = Mo(Zt, e.__scopeMenu);
    return /* @__PURE__ */ w.jsx(ho.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ w.jsx(Po, { present: r || o.open, children: /* @__PURE__ */ w.jsx(ho.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ w.jsx(vR, { ...i, ref: t }) : /* @__PURE__ */ w.jsx(bR, { ...i, ref: t }) }) }) });
  }
), vR = _.forwardRef(
  (e, t) => {
    const n = Pr(Zt, e.__scopeMenu), r = _.useRef(null), i = jt(t, r);
    return _.useEffect(() => {
      const o = r.current;
      if (o) return SO(o);
    }, []), /* @__PURE__ */ w.jsx(
      _u,
      {
        ...e,
        ref: i,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: Ge(
          e.onFocusOutside,
          (o) => o.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), bR = _.forwardRef((e, t) => {
  const n = Pr(Zt, e.__scopeMenu);
  return /* @__PURE__ */ w.jsx(
    _u,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), _u = _.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: i,
      onOpenAutoFocus: o,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: s,
      onEntryFocus: c,
      onEscapeKeyDown: l,
      onPointerDownOutside: u,
      onFocusOutside: d,
      onInteractOutside: p,
      onDismiss: h,
      disableOutsideScroll: m,
      ...y
    } = e, v = Pr(Zt, n), b = Mo(Zt, n), x = ws(n), S = Cg(n), A = fR(n), [E, N] = _.useState(null), P = _.useRef(null), U = jt(t, P, v.onContentChange), ue = _.useRef(0), ye = _.useRef(""), pe = _.useRef(0), V = _.useRef(null), Q = _.useRef("right"), B = _.useRef(0), se = m ? _g : _.Fragment, j = m ? { as: Zn, allowPinchZoom: !0 } : void 0, fe = (J) => {
      var G, ie;
      const L = ye.current + J, q = A().filter((le) => !le.disabled), ge = document.activeElement, I = (G = q.find((le) => le.ref.current === ge)) == null ? void 0 : G.textValue, X = q.map((le) => le.textValue), re = PR(X, L, I), Y = (ie = q.find((le) => le.textValue === re)) == null ? void 0 : ie.ref.current;
      (function le(ve) {
        ye.current = ve, window.clearTimeout(ue.current), ve !== "" && (ue.current = window.setTimeout(() => le(""), 1e3));
      })(L), Y && setTimeout(() => Y.focus());
    };
    _.useEffect(() => () => window.clearTimeout(ue.current), []), zA();
    const _e = _.useCallback((J) => {
      var q, ge;
      return Q.current === ((q = V.current) == null ? void 0 : q.side) && MR(J, (ge = V.current) == null ? void 0 : ge.area);
    }, []);
    return /* @__PURE__ */ w.jsx(
      gR,
      {
        scope: n,
        searchRef: ye,
        onItemEnter: _.useCallback(
          (J) => {
            _e(J) && J.preventDefault();
          },
          [_e]
        ),
        onItemLeave: _.useCallback(
          (J) => {
            var L;
            _e(J) || ((L = P.current) == null || L.focus(), N(null));
          },
          [_e]
        ),
        onTriggerLeave: _.useCallback(
          (J) => {
            _e(J) && J.preventDefault();
          },
          [_e]
        ),
        pointerGraceTimerRef: pe,
        onPointerGraceIntentChange: _.useCallback((J) => {
          V.current = J;
        }, []),
        children: /* @__PURE__ */ w.jsx(se, { ...j, children: /* @__PURE__ */ w.jsx(
          zy,
          {
            asChild: !0,
            trapped: i,
            onMountAutoFocus: Ge(o, (J) => {
              var L;
              J.preventDefault(), (L = P.current) == null || L.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ w.jsx(
              Fy,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: l,
                onPointerDownOutside: u,
                onFocusOutside: d,
                onInteractOutside: p,
                onDismiss: h,
                children: /* @__PURE__ */ w.jsx(
                  bO,
                  {
                    asChild: !0,
                    ...S,
                    dir: b.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: E,
                    onCurrentTabStopIdChange: N,
                    onEntryFocus: Ge(c, (J) => {
                      b.isUsingKeyboardRef.current || J.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ w.jsx(
                      rO,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Hg(v.open),
                        "data-radix-menu-content": "",
                        dir: b.dir,
                        ...x,
                        ...y,
                        ref: U,
                        style: { outline: "none", ...y.style },
                        onKeyDown: Ge(y.onKeyDown, (J) => {
                          const q = J.target.closest("[data-radix-menu-content]") === J.currentTarget, ge = J.ctrlKey || J.altKey || J.metaKey, I = J.key.length === 1;
                          q && (J.key === "Tab" && J.preventDefault(), !ge && I && fe(J.key));
                          const X = P.current;
                          if (J.target !== X || !cR.includes(J.key)) return;
                          J.preventDefault();
                          const Y = A().filter((G) => !G.disabled).map((G) => G.ref.current);
                          Eg.includes(J.key) && Y.reverse(), TR(Y);
                        }),
                        onBlur: Ge(e.onBlur, (J) => {
                          J.currentTarget.contains(J.target) || (window.clearTimeout(ue.current), ye.current = "");
                        }),
                        onPointerMove: Ge(
                          e.onPointerMove,
                          mo((J) => {
                            const L = J.target, q = B.current !== J.clientX;
                            if (J.currentTarget.contains(L) && q) {
                              const ge = J.clientX > B.current ? "right" : "left";
                              Q.current = ge, B.current = J.clientX;
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
Tg.displayName = Zt;
var xR = "MenuGroup", Eu = _.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ w.jsx(xt.div, { role: "group", ...r, ref: t });
  }
);
Eu.displayName = xR;
var wR = "MenuLabel", kg = _.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ w.jsx(xt.div, { ...r, ref: t });
  }
);
kg.displayName = wR;
var Ua = "MenuItem", lp = "menu.itemSelect", _s = _.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...i } = e, o = _.useRef(null), a = Mo(Ua, e.__scopeMenu), s = wu(Ua, e.__scopeMenu), c = jt(t, o), l = _.useRef(!1), u = () => {
      const d = o.current;
      if (!n && d) {
        const p = new CustomEvent(lp, { bubbles: !0, cancelable: !0 });
        d.addEventListener(lp, (h) => r == null ? void 0 : r(h), { once: !0 }), sm(d, p), p.defaultPrevented ? l.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ w.jsx(
      Pg,
      {
        ...i,
        ref: c,
        disabled: n,
        onClick: Ge(e.onClick, u),
        onPointerDown: (d) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, d), l.current = !0;
        },
        onPointerUp: Ge(e.onPointerUp, (d) => {
          var p;
          l.current || (p = d.currentTarget) == null || p.click();
        }),
        onKeyDown: Ge(e.onKeyDown, (d) => {
          const p = s.searchRef.current !== "";
          n || p && d.key === " " || Al.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
_s.displayName = Ua;
var Pg = _.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: i, ...o } = e, a = wu(Ua, n), s = Cg(n), c = _.useRef(null), l = jt(t, c), [u, d] = _.useState(!1), [p, h] = _.useState("");
    return _.useEffect(() => {
      const m = c.current;
      m && h((m.textContent ?? "").trim());
    }, [o.children]), /* @__PURE__ */ w.jsx(
      ho.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: i ?? p,
        children: /* @__PURE__ */ w.jsx(xO, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ w.jsx(
          xt.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...o,
            ref: l,
            onPointerMove: Ge(
              e.onPointerMove,
              mo((m) => {
                r ? a.onItemLeave(m) : (a.onItemEnter(m), m.defaultPrevented || m.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: Ge(
              e.onPointerLeave,
              mo((m) => a.onItemLeave(m))
            ),
            onFocus: Ge(e.onFocus, () => d(!0)),
            onBlur: Ge(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), _R = "MenuCheckboxItem", Ng = _.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...i } = e;
    return /* @__PURE__ */ w.jsx(Fg, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ w.jsx(
      _s,
      {
        role: "menuitemcheckbox",
        "aria-checked": Ba(n) ? "mixed" : n,
        ...i,
        ref: t,
        "data-state": Cu(n),
        onSelect: Ge(
          i.onSelect,
          () => r == null ? void 0 : r(Ba(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Ng.displayName = _R;
var Mg = "MenuRadioGroup", [ER, SR] = kr(
  Mg,
  { value: void 0, onValueChange: () => {
  } }
), Ig = _.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...i } = e, o = rn(r);
    return /* @__PURE__ */ w.jsx(ER, { scope: e.__scopeMenu, value: n, onValueChange: o, children: /* @__PURE__ */ w.jsx(Eu, { ...i, ref: t }) });
  }
);
Ig.displayName = Mg;
var Dg = "MenuRadioItem", jg = _.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, i = SR(Dg, e.__scopeMenu), o = n === i.value;
    return /* @__PURE__ */ w.jsx(Fg, { scope: e.__scopeMenu, checked: o, children: /* @__PURE__ */ w.jsx(
      _s,
      {
        role: "menuitemradio",
        "aria-checked": o,
        ...r,
        ref: t,
        "data-state": Cu(o),
        onSelect: Ge(
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
jg.displayName = Dg;
var Su = "MenuItemIndicator", [Fg, CR] = kr(
  Su,
  { checked: !1 }
), Lg = _.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...i } = e, o = CR(Su, n);
    return /* @__PURE__ */ w.jsx(
      Po,
      {
        present: r || Ba(o.checked) || o.checked === !0,
        children: /* @__PURE__ */ w.jsx(
          xt.span,
          {
            ...i,
            ref: t,
            "data-state": Cu(o.checked)
          }
        )
      }
    );
  }
);
Lg.displayName = Su;
var AR = "MenuSeparator", zg = _.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ w.jsx(
      xt.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
zg.displayName = AR;
var OR = "MenuArrow", $g = _.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, i = ws(n);
    return /* @__PURE__ */ w.jsx(iO, { ...i, ...r, ref: t });
  }
);
$g.displayName = OR;
var RR = "MenuSub", [PT, Vg] = kr(RR), Di = "MenuSubTrigger", Ug = _.forwardRef(
  (e, t) => {
    const n = Pr(Di, e.__scopeMenu), r = Mo(Di, e.__scopeMenu), i = Vg(Di, e.__scopeMenu), o = wu(Di, e.__scopeMenu), a = _.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = o, l = { __scopeMenu: e.__scopeMenu }, u = _.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return _.useEffect(() => u, [u]), _.useEffect(() => {
      const d = s.current;
      return () => {
        window.clearTimeout(d), c(null);
      };
    }, [s, c]), /* @__PURE__ */ w.jsx(bu, { asChild: !0, ...l, children: /* @__PURE__ */ w.jsx(
      Pg,
      {
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": i.contentId,
        "data-state": Hg(n.open),
        ...e,
        ref: cs(t, i.onTriggerChange),
        onClick: (d) => {
          var p;
          (p = e.onClick) == null || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: Ge(
          e.onPointerMove,
          mo((d) => {
            o.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !a.current && (o.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: Ge(
          e.onPointerLeave,
          mo((d) => {
            var h, m;
            u();
            const p = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
            if (p) {
              const y = (m = n.content) == null ? void 0 : m.dataset.side, v = y === "right", b = v ? -5 : 5, x = p[v ? "left" : "right"], S = p[v ? "right" : "left"];
              o.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + b, y: d.clientY },
                  { x, y: p.top },
                  { x: S, y: p.top },
                  { x: S, y: p.bottom },
                  { x, y: p.bottom }
                ],
                side: y
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
        onKeyDown: Ge(e.onKeyDown, (d) => {
          var h;
          const p = o.searchRef.current !== "";
          e.disabled || p && d.key === " " || lR[r.dir].includes(d.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
Ug.displayName = Di;
var Bg = "MenuSubContent", Wg = _.forwardRef(
  (e, t) => {
    const n = Og(Zt, e.__scopeMenu), { forceMount: r = n.forceMount, ...i } = e, o = Pr(Zt, e.__scopeMenu), a = Mo(Zt, e.__scopeMenu), s = Vg(Bg, e.__scopeMenu), c = _.useRef(null), l = jt(t, c);
    return /* @__PURE__ */ w.jsx(ho.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ w.jsx(Po, { present: r || o.open, children: /* @__PURE__ */ w.jsx(ho.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ w.jsx(
      _u,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...i,
        ref: l,
        align: "start",
        side: a.dir === "rtl" ? "left" : "right",
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        trapFocus: !1,
        onOpenAutoFocus: (u) => {
          var d;
          a.isUsingKeyboardRef.current && ((d = c.current) == null || d.focus()), u.preventDefault();
        },
        onCloseAutoFocus: (u) => u.preventDefault(),
        onFocusOutside: Ge(e.onFocusOutside, (u) => {
          u.target !== s.trigger && o.onOpenChange(!1);
        }),
        onEscapeKeyDown: Ge(e.onEscapeKeyDown, (u) => {
          a.onClose(), u.preventDefault();
        }),
        onKeyDown: Ge(e.onKeyDown, (u) => {
          var h;
          const d = u.currentTarget.contains(u.target), p = uR[a.dir].includes(u.key);
          d && p && (o.onOpenChange(!1), (h = s.trigger) == null || h.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
Wg.displayName = Bg;
function Hg(e) {
  return e ? "open" : "closed";
}
function Ba(e) {
  return e === "indeterminate";
}
function Cu(e) {
  return Ba(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function TR(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function kR(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function PR(e, t, n) {
  const i = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, o = n ? e.indexOf(n) : -1;
  let a = kR(e, Math.max(o, 0));
  i.length === 1 && (a = a.filter((l) => l !== n));
  const c = a.find(
    (l) => l.toLowerCase().startsWith(i.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function NR(e, t) {
  const { x: n, y: r } = e;
  let i = !1;
  for (let o = 0, a = t.length - 1; o < t.length; a = o++) {
    const s = t[o].x, c = t[o].y, l = t[a].x, u = t[a].y;
    c > r != u > r && n < (l - s) * (r - c) / (u - c) + s && (i = !i);
  }
  return i;
}
function MR(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return NR(n, t);
}
function mo(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var IR = Ag, DR = bu, jR = Rg, FR = Tg, LR = Eu, zR = kg, $R = _s, VR = Ng, UR = Ig, BR = jg, WR = Lg, HR = zg, qR = $g, YR = Ug, GR = Wg, Au = "DropdownMenu", [ZR, NT] = To(
  Au,
  [Sg]
), Ot = Sg(), [KR, qg] = ZR(Au), Yg = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: i,
    defaultOpen: o,
    onOpenChange: a,
    modal: s = !0
  } = e, c = Ot(t), l = _.useRef(null), [u = !1, d] = My({
    prop: i,
    defaultProp: o,
    onChange: a
  });
  return /* @__PURE__ */ w.jsx(
    KR,
    {
      scope: t,
      triggerId: wl(),
      triggerRef: l,
      contentId: wl(),
      open: u,
      onOpenChange: d,
      onOpenToggle: _.useCallback(() => d((p) => !p), [d]),
      modal: s,
      children: /* @__PURE__ */ w.jsx(IR, { ...c, open: u, onOpenChange: d, dir: r, modal: s, children: n })
    }
  );
};
Yg.displayName = Au;
var Gg = "DropdownMenuTrigger", Zg = _.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...i } = e, o = qg(Gg, n), a = Ot(n);
    return /* @__PURE__ */ w.jsx(DR, { asChild: !0, ...a, children: /* @__PURE__ */ w.jsx(
      xt.button,
      {
        type: "button",
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": o.open,
        "aria-controls": o.open ? o.contentId : void 0,
        "data-state": o.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...i,
        ref: cs(t, o.triggerRef),
        onPointerDown: Ge(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (o.onOpenToggle(), o.open || s.preventDefault());
        }),
        onKeyDown: Ge(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && o.onOpenToggle(), s.key === "ArrowDown" && o.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
Zg.displayName = Gg;
var XR = "DropdownMenuPortal", Kg = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Ot(t);
  return /* @__PURE__ */ w.jsx(jR, { ...r, ...n });
};
Kg.displayName = XR;
var Xg = "DropdownMenuContent", Jg = _.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, i = qg(Xg, n), o = Ot(n), a = _.useRef(!1);
    return /* @__PURE__ */ w.jsx(
      FR,
      {
        id: i.contentId,
        "aria-labelledby": i.triggerId,
        ...o,
        ...r,
        ref: t,
        onCloseAutoFocus: Ge(e.onCloseAutoFocus, (s) => {
          var c;
          a.current || (c = i.triggerRef.current) == null || c.focus(), a.current = !1, s.preventDefault();
        }),
        onInteractOutside: Ge(e.onInteractOutside, (s) => {
          const c = s.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, u = c.button === 2 || l;
          (!i.modal || u) && (a.current = !0);
        }),
        style: {
          ...e.style,
          "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
          "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
          "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
          "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
          "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
      }
    );
  }
);
Jg.displayName = Xg;
var JR = "DropdownMenuGroup", QR = _.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, i = Ot(n);
    return /* @__PURE__ */ w.jsx(LR, { ...i, ...r, ref: t });
  }
);
QR.displayName = JR;
var eT = "DropdownMenuLabel", Qg = _.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, i = Ot(n);
    return /* @__PURE__ */ w.jsx(zR, { ...i, ...r, ref: t });
  }
);
Qg.displayName = eT;
var tT = "DropdownMenuItem", ev = _.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, i = Ot(n);
    return /* @__PURE__ */ w.jsx($R, { ...i, ...r, ref: t });
  }
);
ev.displayName = tT;
var nT = "DropdownMenuCheckboxItem", tv = _.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, i = Ot(n);
  return /* @__PURE__ */ w.jsx(VR, { ...i, ...r, ref: t });
});
tv.displayName = nT;
var rT = "DropdownMenuRadioGroup", iT = _.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, i = Ot(n);
  return /* @__PURE__ */ w.jsx(UR, { ...i, ...r, ref: t });
});
iT.displayName = rT;
var oT = "DropdownMenuRadioItem", nv = _.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, i = Ot(n);
  return /* @__PURE__ */ w.jsx(BR, { ...i, ...r, ref: t });
});
nv.displayName = oT;
var aT = "DropdownMenuItemIndicator", rv = _.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, i = Ot(n);
  return /* @__PURE__ */ w.jsx(WR, { ...i, ...r, ref: t });
});
rv.displayName = aT;
var sT = "DropdownMenuSeparator", iv = _.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, i = Ot(n);
  return /* @__PURE__ */ w.jsx(HR, { ...i, ...r, ref: t });
});
iv.displayName = sT;
var cT = "DropdownMenuArrow", lT = _.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, i = Ot(n);
    return /* @__PURE__ */ w.jsx(qR, { ...i, ...r, ref: t });
  }
);
lT.displayName = cT;
var uT = "DropdownMenuSubTrigger", ov = _.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, i = Ot(n);
  return /* @__PURE__ */ w.jsx(YR, { ...i, ...r, ref: t });
});
ov.displayName = uT;
var fT = "DropdownMenuSubContent", av = _.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, i = Ot(n);
  return /* @__PURE__ */ w.jsx(
    GR,
    {
      ...i,
      ...r,
      ref: t,
      style: {
        ...e.style,
        "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
        "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
        "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
        "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
      }
    }
  );
});
av.displayName = fT;
var dT = Yg, pT = Zg, hT = Kg, sv = Jg, cv = Qg, lv = ev, uv = tv, fv = nv, dv = rv, pv = iv, hv = ov, mv = av;
const mT = dT, yT = pT, gT = _.forwardRef(({ className: e, inset: t, children: n, ...r }, i) => /* @__PURE__ */ w.jsxs(
  hv,
  {
    ref: i,
    className: Ze(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-800 dark:data-[state=open]:bg-slate-800",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ w.jsx(Ph, { className: "ml-auto h-4 w-4" })
    ]
  }
));
gT.displayName = hv.displayName;
const vT = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.jsx(
  mv,
  {
    ref: n,
    className: Ze(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      e
    ),
    ...t
  }
));
vT.displayName = mv.displayName;
const yv = _.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ w.jsx(hT, { children: /* @__PURE__ */ w.jsx(
  sv,
  {
    ref: r,
    sideOffset: t,
    className: Ze(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      e
    ),
    ...n
  }
) }));
yv.displayName = sv.displayName;
const pa = _.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ w.jsx(
  lv,
  {
    ref: r,
    className: Ze(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
pa.displayName = lv.displayName;
const bT = _.forwardRef(({ className: e, children: t, checked: n, ...r }, i) => /* @__PURE__ */ w.jsxs(
  uv,
  {
    ref: i,
    className: Ze(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ w.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ w.jsx(dv, { children: /* @__PURE__ */ w.jsx(cw, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
bT.displayName = uv.displayName;
const xT = _.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ w.jsxs(
  fv,
  {
    ref: r,
    className: Ze(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ w.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ w.jsx(dv, { children: /* @__PURE__ */ w.jsx(lw, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
xT.displayName = fv.displayName;
const wT = _.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ w.jsx(
  cv,
  {
    ref: r,
    className: Ze(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
wT.displayName = cv.displayName;
const _T = _.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ w.jsx(
  pv,
  {
    ref: n,
    className: Ze("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", e),
    ...t
  }
));
_T.displayName = pv.displayName;
function ET() {
  const e = vo(), [t, n] = Ol(null), r = Rv(null);
  yo(() => {
    t && (async (a) => {
      for (const s of a) {
        if (await e(ia({
          file: s,
          category: "default_cms"
        })), !r.current)
          return;
        r.current.value = "";
      }
      e(Gr());
    })(t);
  }, [t]);
  const i = () => {
    r.current && r.current.click();
  };
  return /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
    /* @__PURE__ */ w.jsx(ni, { onClick: i, children: /* @__PURE__ */ w.jsx(oi, { icon: YS }) }),
    /* @__PURE__ */ w.jsx(
      Vi,
      {
        className: "hidden",
        type: "file",
        ref: r,
        onChange: (o) => {
          n(o.target.files);
        }
      }
    )
  ] });
}
function ST() {
  return /* @__PURE__ */ w.jsx("div", { className: "border-y-2 h-20 flex items-center", children: /* @__PURE__ */ w.jsxs("div", { className: "px-6 w-full flex items-center justify-between", children: [
    /* @__PURE__ */ w.jsx(Ty, { children: /* @__PURE__ */ w.jsxs(ky, { children: [
      /* @__PURE__ */ w.jsx(Ii, { children: /* @__PURE__ */ w.jsx(bl, { href: "/", children: "Home" }) }),
      /* @__PURE__ */ w.jsx(la, {}),
      /* @__PURE__ */ w.jsx(Ii, { children: /* @__PURE__ */ w.jsxs(mT, { children: [
        /* @__PURE__ */ w.jsxs(yT, { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ w.jsx(Ny, { className: "h-4 w-4" }),
          /* @__PURE__ */ w.jsx("span", { className: "sr-only", children: "Toggle menu" })
        ] }),
        /* @__PURE__ */ w.jsxs(yv, { align: "start", children: [
          /* @__PURE__ */ w.jsx(pa, { children: "Documentation" }),
          /* @__PURE__ */ w.jsx(pa, { children: "Themes" }),
          /* @__PURE__ */ w.jsx(pa, { children: "GitHub" })
        ] })
      ] }) }),
      /* @__PURE__ */ w.jsx(la, {}),
      /* @__PURE__ */ w.jsx(Ii, { children: /* @__PURE__ */ w.jsx(bl, { href: "/docs/components", children: "Components" }) }),
      /* @__PURE__ */ w.jsx(la, {}),
      /* @__PURE__ */ w.jsx(Ii, { children: /* @__PURE__ */ w.jsx(Py, { children: "Breadcrumb" }) })
    ] }) }),
    /* @__PURE__ */ w.jsx("div", { children: /* @__PURE__ */ w.jsx(ET, {}) })
  ] }) });
}
function CT() {
  const e = vo(), t = go((a) => a.media.view);
  if (!t) return null;
  const n = (a) => {
    const s = a.match(/page=(\d+)/i);
    return s ? s[1] ?? null : null;
  }, r = () => {
    o(t["hydra:previous"]);
  }, i = () => {
    o(t["hydra:next"]);
  }, o = (a) => {
    if (a == null)
      return;
    const s = Number(n(a));
    s !== null && e(Gr(s));
  };
  return /* @__PURE__ */ w.jsxs("div", { className: "flex gap-2", children: [
    /* @__PURE__ */ w.jsxs(ni, { onClick: r, disabled: t["hydra:previous"] === void 0, children: [
      /* @__PURE__ */ w.jsx(oi, { icon: KS, className: "pr-2" }),
      "Précédant"
    ] }),
    /* @__PURE__ */ w.jsxs(ni, { onClick: i, disabled: t["hydra:next"] === void 0, children: [
      "Suivant",
      /* @__PURE__ */ w.jsx(oi, { icon: XS, className: "pl-2" })
    ] })
  ] });
}
function AT() {
  const e = go((t) => t.main.selectedMedia);
  return /* @__PURE__ */ w.jsxs(w_, { className: "overflow-y-auto", direction: "horizontal", children: [
    /* @__PURE__ */ w.jsxs(qf, { children: [
      /* @__PURE__ */ w.jsx(ST, {}),
      /* @__PURE__ */ w.jsx(j_, {}),
      /* @__PURE__ */ w.jsx("footer", { className: "px-6 h-20 flex items-center justify-end border-t-2", children: /* @__PURE__ */ w.jsx(CT, {}) })
    ] }),
    e && /* @__PURE__ */ w.jsxs(w.Fragment, { children: [
      /* @__PURE__ */ w.jsx(__, { withHandle: !0 }),
      /* @__PURE__ */ w.jsx(qf, { minSize: 20, maxSize: 40, defaultSize: 20, children: /* @__PURE__ */ w.jsx(OA, {}) })
    ] })
  ] });
}
function MT({ serverUrl: e, className: t, ...n }) {
  const [r, i] = Ol(!1);
  return t = Ze("bg-background h-full", t), yo(() => {
    (async () => {
      try {
        await iw(e), i(!0);
      } catch (a) {
        console.error("Failed to initialize the app:", a);
      }
    })();
  }, [e]), r ? /* @__PURE__ */ w.jsx("div", { className: t, ...n, children: /* @__PURE__ */ w.jsx(Yv, { store: rw, children: /* @__PURE__ */ w.jsx(AT, {}) }) }) : /* @__PURE__ */ w.jsx("div", { className: t, children: "Initialisation ..." });
}
export {
  MT as M
};

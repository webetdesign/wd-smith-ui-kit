var fx = Object.defineProperty;
var dx = (e, t, n) => t in e ? fx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Wr = (e, t, n) => dx(e, typeof t != "symbol" ? t + "" : t, n);
import * as x from "react";
import $e, { forwardRef as qp, createElement as Kc, useEffect as Xn, useLayoutEffect as px, useState as br, createContext as Yp, useContext as Gp, useRef as hx } from "react";
import * as es from "react-dom";
import mx from "react-dom";
var at = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Kp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zc = { exports: {} }, Oo = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var uf;
function gx() {
  if (uf) return Oo;
  uf = 1;
  var e = $e, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, c, l) {
    var u, d = {}, p = null, h = null;
    l !== void 0 && (p = "" + l), c.key !== void 0 && (p = "" + c.key), c.ref !== void 0 && (h = c.ref);
    for (u in c) r.call(c, u) && !i.hasOwnProperty(u) && (d[u] = c[u]);
    if (s && s.defaultProps) for (u in c = s.defaultProps, c) d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: t, type: s, key: p, ref: h, props: d, _owner: o.current };
  }
  return Oo.Fragment = n, Oo.jsx = a, Oo.jsxs = a, Oo;
}
var ko = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ff;
function yx() {
  return ff || (ff = 1, process.env.NODE_ENV !== "production" && function() {
    var e = $e, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), m = Symbol.iterator, g = "@@iterator";
    function b(R) {
      if (R === null || typeof R != "object")
        return null;
      var ne = m && R[m] || R[g];
      return typeof ne == "function" ? ne : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(R) {
      {
        for (var ne = arguments.length, be = new Array(ne > 1 ? ne - 1 : 0), Me = 1; Me < ne; Me++)
          be[Me - 1] = arguments[Me];
        S("error", R, be);
      }
    }
    function S(R, ne, be) {
      {
        var Me = w.ReactDebugCurrentFrame, Ze = Me.getStackAddendum();
        Ze !== "" && (ne += "%s", be = be.concat([Ze]));
        var rt = be.map(function(Ge) {
          return String(Ge);
        });
        rt.unshift("Warning: " + ne), Function.prototype.apply.call(console[R], console, rt);
      }
    }
    var C = !1, E = !1, N = !1, P = !1, B = !1, ce;
    ce = Symbol.for("react.module.reference");
    function pe(R) {
      return !!(typeof R == "string" || typeof R == "function" || R === r || R === i || B || R === o || R === l || R === u || P || R === h || C || E || N || typeof R == "object" && R !== null && (R.$$typeof === p || R.$$typeof === d || R.$$typeof === a || R.$$typeof === s || R.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      R.$$typeof === ce || R.getModuleId !== void 0));
    }
    function fe(R, ne, be) {
      var Me = R.displayName;
      if (Me)
        return Me;
      var Ze = ne.displayName || ne.name || "";
      return Ze !== "" ? be + "(" + Ze + ")" : be;
    }
    function $(R) {
      return R.displayName || "Context";
    }
    function Q(R) {
      if (R == null)
        return null;
      if (typeof R.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof R == "function")
        return R.displayName || R.name || null;
      if (typeof R == "string")
        return R;
      switch (R) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case i:
          return "Profiler";
        case o:
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
            return $(ne) + ".Consumer";
          case a:
            var be = R;
            return $(be._context) + ".Provider";
          case c:
            return fe(R, R.render, "ForwardRef");
          case d:
            var Me = R.displayName || null;
            return Me !== null ? Me : Q(R.type) || "Memo";
          case p: {
            var Ze = R, rt = Ze._payload, Ge = Ze._init;
            try {
              return Q(Ge(rt));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, re = 0, M, le, we, X, L, W, he;
    function I() {
    }
    I.__reactDisabledLog = !0;
    function G() {
      {
        if (re === 0) {
          M = console.log, le = console.info, we = console.warn, X = console.error, L = console.group, W = console.groupCollapsed, he = console.groupEnd;
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
        re++;
      }
    }
    function oe() {
      {
        if (re--, re === 0) {
          var R = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, R, {
              value: M
            }),
            info: D({}, R, {
              value: le
            }),
            warn: D({}, R, {
              value: we
            }),
            error: D({}, R, {
              value: X
            }),
            group: D({}, R, {
              value: L
            }),
            groupCollapsed: D({}, R, {
              value: W
            }),
            groupEnd: D({}, R, {
              value: he
            })
          });
        }
        re < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = w.ReactCurrentDispatcher, K;
    function ie(R, ne, be) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (Ze) {
            var Me = Ze.stack.trim().match(/\n( *(at )?)/);
            K = Me && Me[1] || "";
          }
        return `
` + K + R;
      }
    }
    var de = !1, ve;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      ve = new Ne();
    }
    function ee(R, ne) {
      if (!R || de)
        return "";
      {
        var be = ve.get(R);
        if (be !== void 0)
          return be;
      }
      var Me;
      de = !0;
      var Ze = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var rt;
      rt = Y.current, Y.current = null, G();
      try {
        if (ne) {
          var Ge = function() {
            throw Error();
          };
          if (Object.defineProperty(Ge.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ge, []);
            } catch (kt) {
              Me = kt;
            }
            Reflect.construct(R, [], Ge);
          } else {
            try {
              Ge.call();
            } catch (kt) {
              Me = kt;
            }
            R.call(Ge.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (kt) {
            Me = kt;
          }
          R();
        }
      } catch (kt) {
        if (kt && Me && typeof kt.stack == "string") {
          for (var Ye = kt.stack.split(`
`), St = Me.stack.split(`
`), ht = Ye.length - 1, gt = St.length - 1; ht >= 1 && gt >= 0 && Ye[ht] !== St[gt]; )
            gt--;
          for (; ht >= 1 && gt >= 0; ht--, gt--)
            if (Ye[ht] !== St[gt]) {
              if (ht !== 1 || gt !== 1)
                do
                  if (ht--, gt--, gt < 0 || Ye[ht] !== St[gt]) {
                    var Gt = `
` + Ye[ht].replace(" at new ", " at ");
                    return R.displayName && Gt.includes("<anonymous>") && (Gt = Gt.replace("<anonymous>", R.displayName)), typeof R == "function" && ve.set(R, Gt), Gt;
                  }
                while (ht >= 1 && gt >= 0);
              break;
            }
        }
      } finally {
        de = !1, Y.current = rt, oe(), Error.prepareStackTrace = Ze;
      }
      var Br = R ? R.displayName || R.name : "", fr = Br ? ie(Br) : "";
      return typeof R == "function" && ve.set(R, fr), fr;
    }
    function Te(R, ne, be) {
      return ee(R, !1);
    }
    function He(R) {
      var ne = R.prototype;
      return !!(ne && ne.isReactComponent);
    }
    function lt(R, ne, be) {
      if (R == null)
        return "";
      if (typeof R == "function")
        return ee(R, He(R));
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
            return Te(R.render);
          case d:
            return lt(R.type, ne, be);
          case p: {
            var Me = R, Ze = Me._payload, rt = Me._init;
            try {
              return lt(rt(Ze), ne, be);
            } catch {
            }
          }
        }
      return "";
    }
    var et = Object.prototype.hasOwnProperty, Ue = {}, A = w.ReactDebugCurrentFrame;
    function k(R) {
      if (R) {
        var ne = R._owner, be = lt(R.type, R._source, ne ? ne.type : null);
        A.setExtraStackFrame(be);
      } else
        A.setExtraStackFrame(null);
    }
    function F(R, ne, be, Me, Ze) {
      {
        var rt = Function.call.bind(et);
        for (var Ge in R)
          if (rt(R, Ge)) {
            var Ye = void 0;
            try {
              if (typeof R[Ge] != "function") {
                var St = Error((Me || "React class") + ": " + be + " type `" + Ge + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof R[Ge] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw St.name = "Invariant Violation", St;
              }
              Ye = R[Ge](ne, Ge, Me, be, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ht) {
              Ye = ht;
            }
            Ye && !(Ye instanceof Error) && (k(Ze), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Me || "React class", be, Ge, typeof Ye), k(null)), Ye instanceof Error && !(Ye.message in Ue) && (Ue[Ye.message] = !0, k(Ze), _("Failed %s type: %s", be, Ye.message), k(null));
          }
      }
    }
    var f = Array.isArray;
    function T(R) {
      return f(R);
    }
    function O(R) {
      {
        var ne = typeof Symbol == "function" && Symbol.toStringTag, be = ne && R[Symbol.toStringTag] || R.constructor.name || "Object";
        return be;
      }
    }
    function z(R) {
      try {
        return j(R), !1;
      } catch {
        return !0;
      }
    }
    function j(R) {
      return "" + R;
    }
    function Z(R) {
      if (z(R))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", O(R)), j(R);
    }
    var H = w.ReactCurrentOwner, me = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, De, qe;
    qe = {};
    function Ee(R) {
      if (et.call(R, "ref")) {
        var ne = Object.getOwnPropertyDescriptor(R, "ref").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return R.ref !== void 0;
    }
    function dt(R) {
      if (et.call(R, "key")) {
        var ne = Object.getOwnPropertyDescriptor(R, "key").get;
        if (ne && ne.isReactWarning)
          return !1;
      }
      return R.key !== void 0;
    }
    function v(R, ne) {
      if (typeof R.ref == "string" && H.current && ne && H.current.stateNode !== ne) {
        var be = Q(H.current.type);
        qe[be] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Q(H.current.type), R.ref), qe[be] = !0);
      }
    }
    function U(R, ne) {
      {
        var be = function() {
          Re || (Re = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        be.isReactWarning = !0, Object.defineProperty(R, "key", {
          get: be,
          configurable: !0
        });
      }
    }
    function J(R, ne) {
      {
        var be = function() {
          De || (De = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ne));
        };
        be.isReactWarning = !0, Object.defineProperty(R, "ref", {
          get: be,
          configurable: !0
        });
      }
    }
    var q = function(R, ne, be, Me, Ze, rt, Ge) {
      var Ye = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: R,
        key: ne,
        ref: be,
        props: Ge,
        // Record the component responsible for creating this element.
        _owner: rt
      };
      return Ye._store = {}, Object.defineProperty(Ye._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ye, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Me
      }), Object.defineProperty(Ye, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ze
      }), Object.freeze && (Object.freeze(Ye.props), Object.freeze(Ye)), Ye;
    };
    function te(R, ne, be, Me, Ze) {
      {
        var rt, Ge = {}, Ye = null, St = null;
        be !== void 0 && (Z(be), Ye = "" + be), dt(ne) && (Z(ne.key), Ye = "" + ne.key), Ee(ne) && (St = ne.ref, v(ne, Ze));
        for (rt in ne)
          et.call(ne, rt) && !me.hasOwnProperty(rt) && (Ge[rt] = ne[rt]);
        if (R && R.defaultProps) {
          var ht = R.defaultProps;
          for (rt in ht)
            Ge[rt] === void 0 && (Ge[rt] = ht[rt]);
        }
        if (Ye || St) {
          var gt = typeof R == "function" ? R.displayName || R.name || "Unknown" : R;
          Ye && U(Ge, gt), St && J(Ge, gt);
        }
        return q(R, Ye, St, Ze, Me, H.current, Ge);
      }
    }
    var se = w.ReactCurrentOwner, Se = w.ReactDebugCurrentFrame;
    function ge(R) {
      if (R) {
        var ne = R._owner, be = lt(R.type, R._source, ne ? ne.type : null);
        Se.setExtraStackFrame(be);
      } else
        Se.setExtraStackFrame(null);
    }
    var Ce;
    Ce = !1;
    function je(R) {
      return typeof R == "object" && R !== null && R.$$typeof === t;
    }
    function ut() {
      {
        if (se.current) {
          var R = Q(se.current.type);
          if (R)
            return `

Check the render method of \`` + R + "`.";
        }
        return "";
      }
    }
    function mt(R) {
      return "";
    }
    var tt = {};
    function $i(R) {
      {
        var ne = ut();
        if (!ne) {
          var be = typeof R == "string" ? R : R.displayName || R.name;
          be && (ne = `

Check the top-level render call using <` + be + ">.");
        }
        return ne;
      }
    }
    function Fn(R, ne) {
      {
        if (!R._store || R._store.validated || R.key != null)
          return;
        R._store.validated = !0;
        var be = $i(ne);
        if (tt[be])
          return;
        tt[be] = !0;
        var Me = "";
        R && R._owner && R._owner !== se.current && (Me = " It was passed a child from " + Q(R._owner.type) + "."), ge(R), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', be, Me), ge(null);
      }
    }
    function Ln(R, ne) {
      {
        if (typeof R != "object")
          return;
        if (T(R))
          for (var be = 0; be < R.length; be++) {
            var Me = R[be];
            je(Me) && Fn(Me, ne);
          }
        else if (je(R))
          R._store && (R._store.validated = !0);
        else if (R) {
          var Ze = b(R);
          if (typeof Ze == "function" && Ze !== R.entries)
            for (var rt = Ze.call(R), Ge; !(Ge = rt.next()).done; )
              je(Ge.value) && Fn(Ge.value, ne);
        }
      }
    }
    function rx(R) {
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
          var Me = Q(ne);
          F(be, R.props, "prop", Me, R);
        } else if (ne.PropTypes !== void 0 && !Ce) {
          Ce = !0;
          var Ze = Q(ne);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ze || "Unknown");
        }
        typeof ne.getDefaultProps == "function" && !ne.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ox(R) {
      {
        for (var ne = Object.keys(R.props), be = 0; be < ne.length; be++) {
          var Me = ne[be];
          if (Me !== "children" && Me !== "key") {
            ge(R), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Me), ge(null);
            break;
          }
        }
        R.ref !== null && (ge(R), _("Invalid attribute `ref` supplied to `React.Fragment`."), ge(null));
      }
    }
    var cf = {};
    function lf(R, ne, be, Me, Ze, rt) {
      {
        var Ge = pe(R);
        if (!Ge) {
          var Ye = "";
          (R === void 0 || typeof R == "object" && R !== null && Object.keys(R).length === 0) && (Ye += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var St = mt();
          St ? Ye += St : Ye += ut();
          var ht;
          R === null ? ht = "null" : T(R) ? ht = "array" : R !== void 0 && R.$$typeof === t ? (ht = "<" + (Q(R.type) || "Unknown") + " />", Ye = " Did you accidentally export a JSX literal instead of a component?") : ht = typeof R, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ht, Ye);
        }
        var gt = te(R, ne, be, Ze, rt);
        if (gt == null)
          return gt;
        if (Ge) {
          var Gt = ne.children;
          if (Gt !== void 0)
            if (Me)
              if (T(Gt)) {
                for (var Br = 0; Br < Gt.length; Br++)
                  Ln(Gt[Br], R);
                Object.freeze && Object.freeze(Gt);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ln(Gt, R);
        }
        if (et.call(ne, "key")) {
          var fr = Q(R), kt = Object.keys(ne).filter(function(ux) {
            return ux !== "key";
          }), zs = kt.length > 0 ? "{key: someKey, " + kt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!cf[fr + zs]) {
            var lx = kt.length > 0 ? "{" + kt.join(": ..., ") + ": ...}" : "{}";
            _(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, zs, fr, lx, fr), cf[fr + zs] = !0;
          }
        }
        return R === r ? ox(gt) : rx(gt), gt;
      }
    }
    function ix(R, ne, be) {
      return lf(R, ne, be, !0);
    }
    function ax(R, ne, be) {
      return lf(R, ne, be, !1);
    }
    var sx = ax, cx = ix;
    ko.Fragment = r, ko.jsx = sx, ko.jsxs = cx;
  }()), ko;
}
process.env.NODE_ENV === "production" ? Zc.exports = gx() : Zc.exports = yx();
var y = Zc.exports, Xc = { exports: {} }, $s = {};
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var df;
function vx() {
  if (df) return $s;
  df = 1;
  var e = $e;
  function t(c, l) {
    return c === l && (c !== 0 || 1 / c === 1 / l) || c !== c && l !== l;
  }
  var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, o = e.useRef, i = e.useEffect, a = e.useMemo, s = e.useDebugValue;
  return $s.useSyncExternalStoreWithSelector = function(c, l, u, d, p) {
    var h = o(null);
    if (h.current === null) {
      var m = { hasValue: !1, value: null };
      h.current = m;
    } else m = h.current;
    h = a(function() {
      function b(E) {
        if (!w) {
          if (w = !0, _ = E, E = d(E), p !== void 0 && m.hasValue) {
            var N = m.value;
            if (p(N, E)) return S = N;
          }
          return S = E;
        }
        if (N = S, n(_, E)) return N;
        var P = d(E);
        return p !== void 0 && p(N, P) ? N : (_ = E, S = P);
      }
      var w = !1, _, S, C = u === void 0 ? null : u;
      return [function() {
        return b(l());
      }, C === null ? void 0 : function() {
        return b(C());
      }];
    }, [l, u, d, p]);
    var g = r(c, h[0], h[1]);
    return i(function() {
      m.hasValue = !0, m.value = g;
    }, [g]), s(g), g;
  }, $s;
}
var Vs = {};
/**
 * @license React
 * use-sync-external-store-with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pf;
function bx() {
  return pf || (pf = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = $e;
    function t(l, u) {
      return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
    }
    var n = typeof Object.is == "function" ? Object.is : t, r = e.useSyncExternalStore, o = e.useRef, i = e.useEffect, a = e.useMemo, s = e.useDebugValue;
    function c(l, u, d, p, h) {
      var m = o(null), g;
      m.current === null ? (g = {
        hasValue: !1,
        value: null
      }, m.current = g) : g = m.current;
      var b = a(function() {
        var C = !1, E, N, P = function(fe) {
          if (!C) {
            C = !0, E = fe;
            var $ = p(fe);
            if (h !== void 0 && g.hasValue) {
              var Q = g.value;
              if (h(Q, $))
                return N = Q, Q;
            }
            return N = $, $;
          }
          var D = E, re = N;
          if (n(D, fe))
            return re;
          var M = p(fe);
          return h !== void 0 && h(re, M) ? re : (E = fe, N = M, M);
        }, B = d === void 0 ? null : d, ce = function() {
          return P(u());
        }, pe = B === null ? void 0 : function() {
          return P(B());
        };
        return [ce, pe];
      }, [u, d, p, h]), w = b[0], _ = b[1], S = r(l, w, _);
      return i(function() {
        g.hasValue = !0, g.value = S;
      }, [S]), s(S), S;
    }
    Vs.useSyncExternalStoreWithSelector = c, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Vs;
}
process.env.NODE_ENV === "production" ? Xc.exports = vx() : Xc.exports = bx();
var xx = Xc.exports, $t = (
  // prettier-ignore
  // @ts-ignore
  "default" in x ? x.default : x
), hf = Symbol.for("react-redux-context"), mf = typeof globalThis < "u" ? globalThis : (
  /* fall back to a per-module scope (pre-8.1 behaviour) if `globalThis` is not available */
  {}
);
function wx() {
  if (!$t.createContext)
    return {};
  const e = mf[hf] ?? (mf[hf] = /* @__PURE__ */ new Map());
  let t = e.get($t.createContext);
  return t || (t = $t.createContext(
    null
  ), process.env.NODE_ENV !== "production" && (t.displayName = "ReactRedux"), e.set($t.createContext, t)), t;
}
var Jn = /* @__PURE__ */ wx(), _x = () => {
  throw new Error("uSES not initialized!");
};
function Kl(e = Jn) {
  return function() {
    const n = $t.useContext(e);
    if (process.env.NODE_ENV !== "production" && !n)
      throw new Error(
        "could not find react-redux context value; please ensure the component is wrapped in a <Provider>"
      );
    return n;
  };
}
var Zp = /* @__PURE__ */ Kl(), Xp = _x, Ex = (e) => {
  Xp = e;
}, Sx = (e, t) => e === t;
function Cx(e = Jn) {
  const t = e === Jn ? Zp : Kl(e), n = (r, o = {}) => {
    const { equalityFn: i = Sx, devModeChecks: a = {} } = typeof o == "function" ? { equalityFn: o } : o;
    if (process.env.NODE_ENV !== "production") {
      if (!r)
        throw new Error("You must pass a selector to useSelector");
      if (typeof r != "function")
        throw new Error("You must pass a function as a selector to useSelector");
      if (typeof i != "function")
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
    } = t(), p = $t.useRef(!0), h = $t.useCallback(
      {
        [r.name](g) {
          const b = r(g);
          if (process.env.NODE_ENV !== "production") {
            const {
              identityFunctionCheck: w,
              stabilityCheck: _
            } = {
              stabilityCheck: u,
              identityFunctionCheck: d,
              ...a
            };
            if (_ === "always" || _ === "once" && p.current) {
              const S = r(g);
              if (!i(b, S)) {
                let C;
                try {
                  throw new Error();
                } catch (E) {
                  ({ stack: C } = E);
                }
                console.warn(
                  "Selector " + (r.name || "unknown") + ` returned a different result when called with the same parameters. This can lead to unnecessary rerenders.
Selectors that return a new reference (such as an object or an array) should be memoized: https://redux.js.org/usage/deriving-data-selectors#optimizing-selectors-with-memoization`,
                  {
                    state: g,
                    selected: b,
                    selected2: S,
                    stack: C
                  }
                );
              }
            }
            if ((w === "always" || w === "once" && p.current) && b === g) {
              let S;
              try {
                throw new Error();
              } catch (C) {
                ({ stack: S } = C);
              }
              console.warn(
                "Selector " + (r.name || "unknown") + ` returned the root state when called. This can lead to unnecessary rerenders.
Selectors that return the entire state are almost certainly a mistake, as they will cause a rerender whenever *anything* in state changes.`,
                { stack: S }
              );
            }
            p.current && (p.current = !1);
          }
          return b;
        }
      }[r.name],
      [r, u, a.stabilityCheck]
    ), m = Xp(
      c.addNestedSub,
      s.getState,
      l || s.getState,
      h,
      i
    );
    return $t.useDebugValue(m), m;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var xr = /* @__PURE__ */ Cx();
function Ax(e) {
  e();
}
function Tx() {
  let e = null, t = null;
  return {
    clear() {
      e = null, t = null;
    },
    notify() {
      Ax(() => {
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
      const o = t = {
        callback: n,
        next: null,
        prev: t
      };
      return o.prev ? o.prev.next = o : e = o, function() {
        !r || e === null || (r = !1, o.next ? o.next.prev = o.prev : t = o.prev, o.prev ? o.prev.next = o.next : e = o.next);
      };
    }
  };
}
var gf = {
  notify() {
  },
  get: () => []
};
function Rx(e, t) {
  let n, r = gf, o = 0, i = !1;
  function a(g) {
    u();
    const b = r.subscribe(g);
    let w = !1;
    return () => {
      w || (w = !0, b(), d());
    };
  }
  function s() {
    r.notify();
  }
  function c() {
    m.onStateChange && m.onStateChange();
  }
  function l() {
    return i;
  }
  function u() {
    o++, n || (n = e.subscribe(c), r = Tx());
  }
  function d() {
    o--, n && o === 0 && (n(), n = void 0, r.clear(), r = gf);
  }
  function p() {
    i || (i = !0, u());
  }
  function h() {
    i && (i = !1, d());
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
var Ox = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", kx = typeof navigator < "u" && navigator.product === "ReactNative", Px = Ox || kx ? $t.useLayoutEffect : $t.useEffect;
function Nx({
  store: e,
  context: t,
  children: n,
  serverState: r,
  stabilityCheck: o = "once",
  identityFunctionCheck: i = "once"
}) {
  const a = $t.useMemo(() => {
    const l = Rx(e);
    return {
      store: e,
      subscription: l,
      getServerState: r ? () => r : void 0,
      stabilityCheck: o,
      identityFunctionCheck: i
    };
  }, [e, r, o, i]), s = $t.useMemo(() => e.getState(), [e]);
  Px(() => {
    const { subscription: l } = a;
    return l.onStateChange = l.notifyNestedSubs, l.trySubscribe(), s !== e.getState() && l.notifyNestedSubs(), () => {
      l.tryUnsubscribe(), l.onStateChange = void 0;
    };
  }, [a, s]);
  const c = t || Jn;
  return /* @__PURE__ */ $t.createElement(c.Provider, { value: a }, n);
}
var Jp = Nx;
function Qp(e = Jn) {
  const t = e === Jn ? Zp : (
    // @ts-ignore
    Kl(e)
  ), n = () => {
    const { store: r } = t();
    return r;
  };
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var Mx = /* @__PURE__ */ Qp();
function Ix(e = Jn) {
  const t = e === Jn ? Mx : Qp(e), n = () => t().dispatch;
  return Object.assign(n, {
    withTypes: () => n
  }), n;
}
var zr = /* @__PURE__ */ Ix();
Ex(xx.useSyncExternalStoreWithSelector);
function wt(e) {
  return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var Dx = typeof Symbol == "function" && Symbol.observable || "@@observable", yf = Dx, Us = () => Math.random().toString(36).substring(7).split("").join("."), jx = {
  INIT: `@@redux/INIT${/* @__PURE__ */ Us()}`,
  REPLACE: `@@redux/REPLACE${/* @__PURE__ */ Us()}`,
  PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Us()}`
}, wr = jx;
function Ti(e) {
  if (typeof e != "object" || e === null)
    return !1;
  let t = e;
  for (; Object.getPrototypeOf(t) !== null; )
    t = Object.getPrototypeOf(t);
  return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null;
}
function Fx(e) {
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
  if ($x(e))
    return "date";
  if (zx(e))
    return "error";
  const n = Lx(e);
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
function Lx(e) {
  return typeof e.constructor == "function" ? e.constructor.name : null;
}
function zx(e) {
  return e instanceof Error || typeof e.message == "string" && e.constructor && typeof e.constructor.stackTraceLimit == "number";
}
function $x(e) {
  return e instanceof Date ? !0 : typeof e.toDateString == "function" && typeof e.getDate == "function" && typeof e.setDate == "function";
}
function Hn(e) {
  let t = typeof e;
  return process.env.NODE_ENV !== "production" && (t = Fx(e)), t;
}
function eh(e, t, n) {
  if (typeof e != "function")
    throw new Error(process.env.NODE_ENV === "production" ? wt(2) : `Expected the root reducer to be a function. Instead, received: '${Hn(e)}'`);
  if (typeof t == "function" && typeof n == "function" || typeof n == "function" && typeof arguments[3] == "function")
    throw new Error(process.env.NODE_ENV === "production" ? wt(0) : "It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function. See https://redux.js.org/tutorials/fundamentals/part-4-store#creating-a-store-with-enhancers for an example.");
  if (typeof t == "function" && typeof n > "u" && (n = t, t = void 0), typeof n < "u") {
    if (typeof n != "function")
      throw new Error(process.env.NODE_ENV === "production" ? wt(1) : `Expected the enhancer to be a function. Instead, received: '${Hn(n)}'`);
    return n(eh)(e, t);
  }
  let r = e, o = t, i = /* @__PURE__ */ new Map(), a = i, s = 0, c = !1;
  function l() {
    a === i && (a = /* @__PURE__ */ new Map(), i.forEach((b, w) => {
      a.set(w, b);
    }));
  }
  function u() {
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? wt(3) : "You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");
    return o;
  }
  function d(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? wt(4) : `Expected the listener to be a function. Instead, received: '${Hn(b)}'`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? wt(5) : "You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api/store#subscribelistener for more details.");
    let w = !0;
    l();
    const _ = s++;
    return a.set(_, b), function() {
      if (w) {
        if (c)
          throw new Error(process.env.NODE_ENV === "production" ? wt(6) : "You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api/store#subscribelistener for more details.");
        w = !1, l(), a.delete(_), i = null;
      }
    };
  }
  function p(b) {
    if (!Ti(b))
      throw new Error(process.env.NODE_ENV === "production" ? wt(7) : `Actions must be plain objects. Instead, the actual type was: '${Hn(b)}'. You may need to add middleware to your store setup to handle dispatching other values, such as 'redux-thunk' to handle dispatching functions. See https://redux.js.org/tutorials/fundamentals/part-4-store#middleware and https://redux.js.org/tutorials/fundamentals/part-6-async-logic#using-the-redux-thunk-middleware for examples.`);
    if (typeof b.type > "u")
      throw new Error(process.env.NODE_ENV === "production" ? wt(8) : 'Actions may not have an undefined "type" property. You may have misspelled an action type string constant.');
    if (typeof b.type != "string")
      throw new Error(process.env.NODE_ENV === "production" ? wt(17) : `Action "type" property must be a string. Instead, the actual type was: '${Hn(b.type)}'. Value was: '${b.type}' (stringified)`);
    if (c)
      throw new Error(process.env.NODE_ENV === "production" ? wt(9) : "Reducers may not dispatch actions.");
    try {
      c = !0, o = r(o, b);
    } finally {
      c = !1;
    }
    return (i = a).forEach((_) => {
      _();
    }), b;
  }
  function h(b) {
    if (typeof b != "function")
      throw new Error(process.env.NODE_ENV === "production" ? wt(10) : `Expected the nextReducer to be a function. Instead, received: '${Hn(b)}`);
    r = b, p({
      type: wr.REPLACE
    });
  }
  function m() {
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
      subscribe(w) {
        if (typeof w != "object" || w === null)
          throw new Error(process.env.NODE_ENV === "production" ? wt(11) : `Expected the observer to be an object. Instead, received: '${Hn(w)}'`);
        function _() {
          const C = w;
          C.next && C.next(u());
        }
        return _(), {
          unsubscribe: b(_)
        };
      },
      [yf]() {
        return this;
      }
    };
  }
  return p({
    type: wr.INIT
  }), {
    dispatch: p,
    subscribe: d,
    getState: u,
    replaceReducer: h,
    [yf]: m
  };
}
function vf(e) {
  typeof console < "u" && typeof console.error == "function" && console.error(e);
  try {
    throw new Error(e);
  } catch {
  }
}
function Vx(e, t, n, r) {
  const o = Object.keys(t), i = n && n.type === wr.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
  if (o.length === 0)
    return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
  if (!Ti(e))
    return `The ${i} has unexpected type of "${Hn(e)}". Expected argument to be an object with the following keys: "${o.join('", "')}"`;
  const a = Object.keys(e).filter((s) => !t.hasOwnProperty(s) && !r[s]);
  if (a.forEach((s) => {
    r[s] = !0;
  }), !(n && n.type === wr.REPLACE) && a.length > 0)
    return `Unexpected ${a.length > 1 ? "keys" : "key"} "${a.join('", "')}" found in ${i}. Expected to find one of the known reducer keys instead: "${o.join('", "')}". Unexpected keys will be ignored.`;
}
function Ux(e) {
  Object.keys(e).forEach((t) => {
    const n = e[t];
    if (typeof n(void 0, {
      type: wr.INIT
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? wt(12) : `The slice reducer for key "${t}" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.`);
    if (typeof n(void 0, {
      type: wr.PROBE_UNKNOWN_ACTION()
    }) > "u")
      throw new Error(process.env.NODE_ENV === "production" ? wt(13) : `The slice reducer for key "${t}" returned undefined when probed with a random type. Don't try to handle '${wr.INIT}' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.`);
  });
}
function Bx(e) {
  const t = Object.keys(e), n = {};
  for (let a = 0; a < t.length; a++) {
    const s = t[a];
    process.env.NODE_ENV !== "production" && typeof e[s] > "u" && vf(`No reducer provided for key "${s}"`), typeof e[s] == "function" && (n[s] = e[s]);
  }
  const r = Object.keys(n);
  let o;
  process.env.NODE_ENV !== "production" && (o = {});
  let i;
  try {
    Ux(n);
  } catch (a) {
    i = a;
  }
  return function(s = {}, c) {
    if (i)
      throw i;
    if (process.env.NODE_ENV !== "production") {
      const d = Vx(s, n, c, o);
      d && vf(d);
    }
    let l = !1;
    const u = {};
    for (let d = 0; d < r.length; d++) {
      const p = r[d], h = n[p], m = s[p], g = h(m, c);
      if (typeof g > "u") {
        const b = c && c.type;
        throw new Error(process.env.NODE_ENV === "production" ? wt(14) : `When called with an action of type ${b ? `"${String(b)}"` : "(unknown type)"}, the slice reducer for key "${p}" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.`);
      }
      u[p] = g, l = l || g !== m;
    }
    return l = l || r.length !== Object.keys(s).length, l ? u : s;
  };
}
function Ea(...e) {
  return e.length === 0 ? (t) => t : e.length === 1 ? e[0] : e.reduce((t, n) => (...r) => t(n(...r)));
}
function Wx(...e) {
  return (t) => (n, r) => {
    const o = t(n, r);
    let i = () => {
      throw new Error(process.env.NODE_ENV === "production" ? wt(15) : "Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.");
    };
    const a = {
      getState: o.getState,
      dispatch: (c, ...l) => i(c, ...l)
    }, s = e.map((c) => c(a));
    return i = Ea(...s)(o.dispatch), {
      ...o,
      dispatch: i
    };
  };
}
function th(e) {
  return Ti(e) && "type" in e && typeof e.type == "string";
}
var nh = Symbol.for("immer-nothing"), bf = Symbol.for("immer-draftable"), Ht = Symbol.for("immer-state"), Hx = process.env.NODE_ENV !== "production" ? [
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
function Ft(e, ...t) {
  if (process.env.NODE_ENV !== "production") {
    const n = Hx[e], r = typeof n == "function" ? n.apply(null, t) : n;
    throw new Error(`[Immer] ${r}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var po = Object.getPrototypeOf;
function Or(e) {
  return !!e && !!e[Ht];
}
function An(e) {
  var t;
  return e ? rh(e) || Array.isArray(e) || !!e[bf] || !!((t = e.constructor) != null && t[bf]) || ns(e) || rs(e) : !1;
}
var qx = Object.prototype.constructor.toString();
function rh(e) {
  if (!e || typeof e != "object")
    return !1;
  const t = po(e);
  if (t === null)
    return !0;
  const n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === qx;
}
function Sa(e, t) {
  ts(e) === 0 ? Reflect.ownKeys(e).forEach((n) => {
    t(n, e[n], e);
  }) : e.forEach((n, r) => t(r, n, e));
}
function ts(e) {
  const t = e[Ht];
  return t ? t.type_ : Array.isArray(e) ? 1 : ns(e) ? 2 : rs(e) ? 3 : 0;
}
function Jc(e, t) {
  return ts(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t);
}
function oh(e, t, n) {
  const r = ts(e);
  r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : e[t] = n;
}
function Yx(e, t) {
  return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
function ns(e) {
  return e instanceof Map;
}
function rs(e) {
  return e instanceof Set;
}
function hr(e) {
  return e.copy_ || e.base_;
}
function Qc(e, t) {
  if (ns(e))
    return new Map(e);
  if (rs(e))
    return new Set(e);
  if (Array.isArray(e))
    return Array.prototype.slice.call(e);
  const n = rh(e);
  if (t === !0 || t === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(e);
    delete r[Ht];
    let o = Reflect.ownKeys(r);
    for (let i = 0; i < o.length; i++) {
      const a = o[i], s = r[a];
      s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (r[a] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: s.enumerable,
        value: e[a]
      });
    }
    return Object.create(po(e), r);
  } else {
    const r = po(e);
    if (r !== null && n)
      return { ...e };
    const o = Object.create(r);
    return Object.assign(o, e);
  }
}
function Zl(e, t = !1) {
  return os(e) || Or(e) || !An(e) || (ts(e) > 1 && (e.set = e.add = e.clear = e.delete = Gx), Object.freeze(e), t && Object.entries(e).forEach(([n, r]) => Zl(r, !0))), e;
}
function Gx() {
  Ft(2);
}
function os(e) {
  return Object.isFrozen(e);
}
var Kx = {};
function kr(e) {
  const t = Kx[e];
  return t || Ft(0, e), t;
}
var ei;
function ih() {
  return ei;
}
function Zx(e, t) {
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
function xf(e, t) {
  t && (kr("Patches"), e.patches_ = [], e.inversePatches_ = [], e.patchListener_ = t);
}
function el(e) {
  tl(e), e.drafts_.forEach(Xx), e.drafts_ = null;
}
function tl(e) {
  e === ei && (ei = e.parent_);
}
function wf(e) {
  return ei = Zx(ei, e);
}
function Xx(e) {
  const t = e[Ht];
  t.type_ === 0 || t.type_ === 1 ? t.revoke_() : t.revoked_ = !0;
}
function _f(e, t) {
  t.unfinalizedDrafts_ = t.drafts_.length;
  const n = t.drafts_[0];
  return e !== void 0 && e !== n ? (n[Ht].modified_ && (el(t), Ft(4)), An(e) && (e = Ca(t, e), t.parent_ || Aa(t, e)), t.patches_ && kr("Patches").generateReplacementPatches_(
    n[Ht].base_,
    e,
    t.patches_,
    t.inversePatches_
  )) : e = Ca(t, n, []), el(t), t.patches_ && t.patchListener_(t.patches_, t.inversePatches_), e !== nh ? e : void 0;
}
function Ca(e, t, n) {
  if (os(t))
    return t;
  const r = t[Ht];
  if (!r)
    return Sa(
      t,
      (o, i) => Ef(e, r, t, o, i, n)
    ), t;
  if (r.scope_ !== e)
    return t;
  if (!r.modified_)
    return Aa(e, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const o = r.copy_;
    let i = o, a = !1;
    r.type_ === 3 && (i = new Set(o), o.clear(), a = !0), Sa(
      i,
      (s, c) => Ef(e, r, o, s, c, n, a)
    ), Aa(e, o, !1), n && e.patches_ && kr("Patches").generatePatches_(
      r,
      n,
      e.patches_,
      e.inversePatches_
    );
  }
  return r.copy_;
}
function Ef(e, t, n, r, o, i, a) {
  if (process.env.NODE_ENV !== "production" && o === n && Ft(5), Or(o)) {
    const s = i && t && t.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Jc(t.assigned_, r) ? i.concat(r) : void 0, c = Ca(e, o, s);
    if (oh(n, r, c), Or(c))
      e.canAutoFreeze_ = !1;
    else
      return;
  } else a && n.add(o);
  if (An(o) && !os(o)) {
    if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1)
      return;
    Ca(e, o), (!t || !t.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && Aa(e, o);
  }
}
function Aa(e, t, n = !1) {
  !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && Zl(t, n);
}
function Jx(e, t) {
  const n = Array.isArray(e), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: t ? t.scope_ : ih(),
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
  let o = r, i = Xl;
  n && (o = [r], i = ti);
  const { revoke: a, proxy: s } = Proxy.revocable(o, i);
  return r.draft_ = s, r.revoke_ = a, s;
}
var Xl = {
  get(e, t) {
    if (t === Ht)
      return e;
    const n = hr(e);
    if (!Jc(n, t))
      return Qx(e, n, t);
    const r = n[t];
    return e.finalized_ || !An(r) ? r : r === Bs(e.base_, t) ? (Ws(e), e.copy_[t] = rl(r, e)) : r;
  },
  has(e, t) {
    return t in hr(e);
  },
  ownKeys(e) {
    return Reflect.ownKeys(hr(e));
  },
  set(e, t, n) {
    const r = ah(hr(e), t);
    if (r != null && r.set)
      return r.set.call(e.draft_, n), !0;
    if (!e.modified_) {
      const o = Bs(hr(e), t), i = o == null ? void 0 : o[Ht];
      if (i && i.base_ === n)
        return e.copy_[t] = n, e.assigned_[t] = !1, !0;
      if (Yx(n, o) && (n !== void 0 || Jc(e.base_, t)))
        return !0;
      Ws(e), nl(e);
    }
    return e.copy_[t] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || t in e.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = !0), !0;
  },
  deleteProperty(e, t) {
    return Bs(e.base_, t) !== void 0 || t in e.base_ ? (e.assigned_[t] = !1, Ws(e), nl(e)) : delete e.assigned_[t], e.copy_ && delete e.copy_[t], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(e, t) {
    const n = hr(e), r = Reflect.getOwnPropertyDescriptor(n, t);
    return r && {
      writable: !0,
      configurable: e.type_ !== 1 || t !== "length",
      enumerable: r.enumerable,
      value: n[t]
    };
  },
  defineProperty() {
    Ft(11);
  },
  getPrototypeOf(e) {
    return po(e.base_);
  },
  setPrototypeOf() {
    Ft(12);
  }
}, ti = {};
Sa(Xl, (e, t) => {
  ti[e] = function() {
    return arguments[0] = arguments[0][0], t.apply(this, arguments);
  };
});
ti.deleteProperty = function(e, t) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(t)) && Ft(13), ti.set.call(this, e, t, void 0);
};
ti.set = function(e, t, n) {
  return process.env.NODE_ENV !== "production" && t !== "length" && isNaN(parseInt(t)) && Ft(14), Xl.set.call(this, e[0], t, n, e[0]);
};
function Bs(e, t) {
  const n = e[Ht];
  return (n ? hr(n) : e)[t];
}
function Qx(e, t, n) {
  var o;
  const r = ah(t, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (o = r.get) == null ? void 0 : o.call(e.draft_)
  ) : void 0;
}
function ah(e, t) {
  if (!(t in e))
    return;
  let n = po(e);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, t);
    if (r)
      return r;
    n = po(n);
  }
}
function nl(e) {
  e.modified_ || (e.modified_ = !0, e.parent_ && nl(e.parent_));
}
function Ws(e) {
  e.copy_ || (e.copy_ = Qc(
    e.base_,
    e.scope_.immer_.useStrictShallowCopy_
  ));
}
var e0 = class {
  constructor(e) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (t, n, r) => {
      if (typeof t == "function" && typeof n != "function") {
        const i = n;
        n = t;
        const a = this;
        return function(c = i, ...l) {
          return a.produce(c, (u) => n.call(this, u, ...l));
        };
      }
      typeof n != "function" && Ft(6), r !== void 0 && typeof r != "function" && Ft(7);
      let o;
      if (An(t)) {
        const i = wf(this), a = rl(t, void 0);
        let s = !0;
        try {
          o = n(a), s = !1;
        } finally {
          s ? el(i) : tl(i);
        }
        return xf(i, r), _f(o, i);
      } else if (!t || typeof t != "object") {
        if (o = n(t), o === void 0 && (o = t), o === nh && (o = void 0), this.autoFreeze_ && Zl(o, !0), r) {
          const i = [], a = [];
          kr("Patches").generateReplacementPatches_(t, o, i, a), r(i, a);
        }
        return o;
      } else
        Ft(1, t);
    }, this.produceWithPatches = (t, n) => {
      if (typeof t == "function")
        return (a, ...s) => this.produceWithPatches(a, (c) => t(c, ...s));
      let r, o;
      return [this.produce(t, n, (a, s) => {
        r = a, o = s;
      }), r, o];
    }, typeof (e == null ? void 0 : e.autoFreeze) == "boolean" && this.setAutoFreeze(e.autoFreeze), typeof (e == null ? void 0 : e.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(e.useStrictShallowCopy);
  }
  createDraft(e) {
    An(e) || Ft(8), Or(e) && (e = t0(e));
    const t = wf(this), n = rl(e, void 0);
    return n[Ht].isManual_ = !0, tl(t), n;
  }
  finishDraft(e, t) {
    const n = e && e[Ht];
    (!n || !n.isManual_) && Ft(9);
    const { scope_: r } = n;
    return xf(r, t), _f(void 0, r);
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
      const o = t[n];
      if (o.path.length === 0 && o.op === "replace") {
        e = o.value;
        break;
      }
    }
    n > -1 && (t = t.slice(n + 1));
    const r = kr("Patches").applyPatches_;
    return Or(e) ? r(e, t) : this.produce(
      e,
      (o) => r(o, t)
    );
  }
};
function rl(e, t) {
  const n = ns(e) ? kr("MapSet").proxyMap_(e, t) : rs(e) ? kr("MapSet").proxySet_(e, t) : Jx(e, t);
  return (t ? t.scope_ : ih()).drafts_.push(n), n;
}
function t0(e) {
  return Or(e) || Ft(10, e), sh(e);
}
function sh(e) {
  if (!An(e) || os(e))
    return e;
  const t = e[Ht];
  let n;
  if (t) {
    if (!t.modified_)
      return t.base_;
    t.finalized_ = !0, n = Qc(e, t.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Qc(e, !0);
  return Sa(n, (r, o) => {
    oh(n, r, sh(o));
  }), t && (t.finalized_ = !1), n;
}
var qt = new e0(), ch = qt.produce;
qt.produceWithPatches.bind(
  qt
);
qt.setAutoFreeze.bind(qt);
qt.setUseStrictShallowCopy.bind(qt);
qt.applyPatches.bind(qt);
qt.createDraft.bind(qt);
qt.finishDraft.bind(qt);
function lh(e) {
  return ({ dispatch: n, getState: r }) => (o) => (i) => typeof i == "function" ? i(n, r, e) : o(i);
}
var n0 = lh(), r0 = lh, o0 = typeof window < "u" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : function() {
  if (arguments.length !== 0)
    return typeof arguments[0] == "object" ? Ea : Ea.apply(null, arguments);
}, uh = (e) => e && typeof e.match == "function";
function Yo(e, t) {
  function n(...r) {
    if (t) {
      let o = t(...r);
      if (!o)
        throw new Error(process.env.NODE_ENV === "production" ? ot(0) : "prepareAction did not return an object");
      return {
        type: e,
        payload: o.payload,
        ..."meta" in o && {
          meta: o.meta
        },
        ..."error" in o && {
          error: o.error
        }
      };
    }
    return {
      type: e,
      payload: r[0]
    };
  }
  return n.toString = () => `${e}`, n.type = e, n.match = (r) => th(r) && r.type === e, n;
}
function i0(e) {
  return typeof e == "function" && "type" in e && // hasMatchFunction only wants Matchers but I don't see the point in rewriting it
  uh(e);
}
function a0(e) {
  const t = e ? `${e}`.split("/") : [], n = t[t.length - 1] || "actionCreator";
  return `Detected an action creator with type "${e || "unknown"}" being dispatched. 
Make sure you're calling the action creator before dispatching, i.e. \`dispatch(${n}())\` instead of \`dispatch(${n})\`. This is necessary even if the action has no payload.`;
}
function s0(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (n) => (r) => n(r);
  const {
    isActionCreator: t = i0
  } = e;
  return () => (n) => (r) => (t(r) && console.warn(a0(r.type)), n(r));
}
function fh(e, t) {
  let n = 0;
  return {
    measureTime(r) {
      const o = Date.now();
      try {
        return r();
      } finally {
        const i = Date.now();
        n += i - o;
      }
    },
    warnIfExceeded() {
      n > e && console.warn(`${t} took ${n}ms, which is more than the warning threshold of ${e}ms. 
If your state or actions are very large, you may want to disable the middleware as it might cause too much of a slowdown in development mode. See https://redux-toolkit.js.org/api/getDefaultMiddleware for instructions.
It is disabled in production builds, so you don't need to worry about that.`);
    }
  };
}
var dh = class jo extends Array {
  constructor(...t) {
    super(...t), Object.setPrototypeOf(this, jo.prototype);
  }
  static get [Symbol.species]() {
    return jo;
  }
  concat(...t) {
    return super.concat.apply(this, t);
  }
  prepend(...t) {
    return t.length === 1 && Array.isArray(t[0]) ? new jo(...t[0].concat(this)) : new jo(...t.concat(this));
  }
};
function Sf(e) {
  return An(e) ? ch(e, () => {
  }) : e;
}
function Cf(e, t, n) {
  if (e.has(t)) {
    let o = e.get(t);
    return n.update && (o = n.update(o, t, e), e.set(t, o)), o;
  }
  if (!n.insert) throw new Error(process.env.NODE_ENV === "production" ? ot(10) : "No insert provided for key not already in map");
  const r = n.insert(t, e);
  return e.set(t, r), r;
}
function c0(e) {
  return typeof e != "object" || e == null || Object.isFrozen(e);
}
function l0(e, t, n) {
  const r = ph(e, t, n);
  return {
    detectMutations() {
      return hh(e, t, r, n);
    }
  };
}
function ph(e, t = [], n, r = "", o = /* @__PURE__ */ new Set()) {
  const i = {
    value: n
  };
  if (!e(n) && !o.has(n)) {
    o.add(n), i.children = {};
    for (const a in n) {
      const s = r ? r + "." + a : a;
      t.length && t.indexOf(s) !== -1 || (i.children[a] = ph(e, t, n[a], s));
    }
  }
  return i;
}
function hh(e, t = [], n, r, o = !1, i = "") {
  const a = n ? n.value : void 0, s = a === r;
  if (o && !s && !Number.isNaN(r))
    return {
      wasMutated: !0,
      path: i
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
    const d = i ? i + "." + u : u;
    if (l && t.some((m) => m instanceof RegExp ? m.test(d) : d === m))
      continue;
    const p = hh(e, t, n.children[u], r[u], s, d);
    if (p.wasMutated)
      return p;
  }
  return {
    wasMutated: !1
  };
}
function u0(e = {}) {
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
      isImmutable: r = c0,
      ignoredPaths: o,
      warnAfter: i = 32
    } = e;
    const a = l0.bind(null, r, o);
    return ({
      getState: s
    }) => {
      let c = s(), l = a(c), u;
      return (d) => (p) => {
        const h = fh(i, "ImmutableStateInvariantMiddleware");
        h.measureTime(() => {
          if (c = s(), u = l.detectMutations(), l = a(c), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? ot(19) : `A state mutation was detected between dispatches, in the path '${u.path || ""}'.  This may cause incorrect behavior. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        });
        const m = d(p);
        return h.measureTime(() => {
          if (c = s(), u = l.detectMutations(), l = a(c), u.wasMutated)
            throw new Error(process.env.NODE_ENV === "production" ? ot(20) : `A state mutation was detected inside a dispatch, in the path: ${u.path || ""}. Take a look at the reducer(s) handling the action ${t(p)}. (https://redux.js.org/style-guide/style-guide#do-not-mutate-state)`);
        }), h.warnIfExceeded(), m;
      };
    };
  }
}
function mh(e) {
  const t = typeof e;
  return e == null || t === "string" || t === "boolean" || t === "number" || Array.isArray(e) || Ti(e);
}
function ol(e, t = "", n = mh, r, o = [], i) {
  let a;
  if (!n(e))
    return {
      keyPath: t || "<root>",
      value: e
    };
  if (typeof e != "object" || e === null || i != null && i.has(e)) return !1;
  const s = r != null ? r(e) : Object.entries(e), c = o.length > 0;
  for (const [l, u] of s) {
    const d = t ? t + "." + l : l;
    if (!(c && o.some((h) => h instanceof RegExp ? h.test(d) : d === h))) {
      if (!n(u))
        return {
          keyPath: d,
          value: u
        };
      if (typeof u == "object" && (a = ol(u, d, n, r, o, i), a))
        return a;
    }
  }
  return i && gh(e) && i.add(e), !1;
}
function gh(e) {
  if (!Object.isFrozen(e)) return !1;
  for (const t of Object.values(e))
    if (!(typeof t != "object" || t === null) && !gh(t))
      return !1;
  return !0;
}
function f0(e = {}) {
  if (process.env.NODE_ENV === "production")
    return () => (t) => (n) => t(n);
  {
    const {
      isSerializable: t = mh,
      getEntries: n,
      ignoredActions: r = [],
      ignoredActionPaths: o = ["meta.arg", "meta.baseQueryMeta"],
      ignoredPaths: i = [],
      warnAfter: a = 32,
      ignoreState: s = !1,
      ignoreActions: c = !1,
      disableCache: l = !1
    } = e, u = !l && WeakSet ? /* @__PURE__ */ new WeakSet() : void 0;
    return (d) => (p) => (h) => {
      if (!th(h))
        return p(h);
      const m = p(h), g = fh(a, "SerializableStateInvariantMiddleware");
      return !c && !(r.length && r.indexOf(h.type) !== -1) && g.measureTime(() => {
        const b = ol(h, "", t, n, o, u);
        if (b) {
          const {
            keyPath: w,
            value: _
          } = b;
          console.error(`A non-serializable value was detected in an action, in the path: \`${w}\`. Value:`, _, `
Take a look at the logic that dispatched this action: `, h, `
(See https://redux.js.org/faq/actions#why-should-type-be-a-string-or-at-least-serializable-why-should-my-action-types-be-constants)`, `
(To allow non-serializable values see: https://redux-toolkit.js.org/usage/usage-guide#working-with-non-serializable-data)`);
        }
      }), s || (g.measureTime(() => {
        const b = d.getState(), w = ol(b, "", t, n, i, u);
        if (w) {
          const {
            keyPath: _,
            value: S
          } = w;
          console.error(`A non-serializable value was detected in the state, in the path: \`${_}\`. Value:`, S, `
Take a look at the reducer(s) handling this action type: ${h.type}.
(See https://redux.js.org/faq/organizing-state#can-i-put-functions-promises-or-other-non-serializable-items-in-my-store-state)`);
        }
      }), g.warnIfExceeded()), m;
    };
  }
}
function Vi(e) {
  return typeof e == "boolean";
}
var d0 = () => function(t) {
  const {
    thunk: n = !0,
    immutableCheck: r = !0,
    serializableCheck: o = !0,
    actionCreatorCheck: i = !0
  } = t ?? {};
  let a = new dh();
  if (n && (Vi(n) ? a.push(n0) : a.push(r0(n.extraArgument))), process.env.NODE_ENV !== "production") {
    if (r) {
      let s = {};
      Vi(r) || (s = r), a.unshift(u0(s));
    }
    if (o) {
      let s = {};
      Vi(o) || (s = o), a.push(f0(s));
    }
    if (i) {
      let s = {};
      Vi(i) || (s = i), a.unshift(s0(s));
    }
  }
  return a;
}, p0 = "RTK_autoBatch", yh = (e) => (t) => {
  setTimeout(t, e);
}, h0 = typeof window < "u" && window.requestAnimationFrame ? window.requestAnimationFrame : yh(10), m0 = (e = {
  type: "raf"
}) => (t) => (...n) => {
  const r = t(...n);
  let o = !0, i = !1, a = !1;
  const s = /* @__PURE__ */ new Set(), c = e.type === "tick" ? queueMicrotask : e.type === "raf" ? h0 : e.type === "callback" ? e.queueNotification : yh(e.timeout), l = () => {
    a = !1, i && (i = !1, s.forEach((u) => u()));
  };
  return Object.assign({}, r, {
    // Override the base `store.subscribe` method to keep original listeners
    // from running if we're delaying notifications
    subscribe(u) {
      const d = () => o && u(), p = r.subscribe(d);
      return s.add(u), () => {
        p(), s.delete(u);
      };
    },
    // Override the base `store.dispatch` method so that we can check actions
    // for the `shouldAutoBatch` flag and determine if batching is active
    dispatch(u) {
      var d;
      try {
        return o = !((d = u == null ? void 0 : u.meta) != null && d[p0]), i = !o, i && (a || (a = !0, c(l))), r.dispatch(u);
      } finally {
        o = !0;
      }
    }
  });
}, g0 = (e) => function(n) {
  const {
    autoBatch: r = !0
  } = n ?? {};
  let o = new dh(e);
  return r && o.push(m0(typeof r == "object" ? r : void 0)), o;
};
function y0(e) {
  const t = d0(), {
    reducer: n = void 0,
    middleware: r,
    devTools: o = !0,
    preloadedState: i = void 0,
    enhancers: a = void 0
  } = e || {};
  let s;
  if (typeof n == "function")
    s = n;
  else if (Ti(n))
    s = Bx(n);
  else
    throw new Error(process.env.NODE_ENV === "production" ? ot(1) : "`reducer` is a required argument, and must be a function or an object of functions that can be passed to combineReducers");
  if (process.env.NODE_ENV !== "production" && r && typeof r != "function")
    throw new Error(process.env.NODE_ENV === "production" ? ot(2) : "`middleware` field must be a callback");
  let c;
  if (typeof r == "function") {
    if (c = r(t), process.env.NODE_ENV !== "production" && !Array.isArray(c))
      throw new Error(process.env.NODE_ENV === "production" ? ot(3) : "when using a middleware builder function, an array of middleware must be returned");
  } else
    c = t();
  if (process.env.NODE_ENV !== "production" && c.some((m) => typeof m != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? ot(4) : "each middleware provided to configureStore must be a function");
  let l = Ea;
  o && (l = o0({
    // Enable capture of stack traces for dispatched Redux actions
    trace: process.env.NODE_ENV !== "production",
    ...typeof o == "object" && o
  }));
  const u = Wx(...c), d = g0(u);
  if (process.env.NODE_ENV !== "production" && a && typeof a != "function")
    throw new Error(process.env.NODE_ENV === "production" ? ot(5) : "`enhancers` field must be a callback");
  let p = typeof a == "function" ? a(d) : d();
  if (process.env.NODE_ENV !== "production" && !Array.isArray(p))
    throw new Error(process.env.NODE_ENV === "production" ? ot(6) : "`enhancers` callback must return an array");
  if (process.env.NODE_ENV !== "production" && p.some((m) => typeof m != "function"))
    throw new Error(process.env.NODE_ENV === "production" ? ot(7) : "each enhancer provided to configureStore must be a function");
  process.env.NODE_ENV !== "production" && c.length && !p.includes(u) && console.error("middlewares were provided, but middleware enhancer was not included in final enhancers - make sure to call `getDefaultEnhancers`");
  const h = l(...p);
  return eh(s, i, h);
}
function vh(e) {
  const t = {}, n = [];
  let r;
  const o = {
    addCase(i, a) {
      if (process.env.NODE_ENV !== "production") {
        if (n.length > 0)
          throw new Error(process.env.NODE_ENV === "production" ? ot(26) : "`builder.addCase` should only be called before calling `builder.addMatcher`");
        if (r)
          throw new Error(process.env.NODE_ENV === "production" ? ot(27) : "`builder.addCase` should only be called before calling `builder.addDefaultCase`");
      }
      const s = typeof i == "string" ? i : i.type;
      if (!s)
        throw new Error(process.env.NODE_ENV === "production" ? ot(28) : "`builder.addCase` cannot be called with an empty action type");
      if (s in t)
        throw new Error(process.env.NODE_ENV === "production" ? ot(29) : `\`builder.addCase\` cannot be called with two reducers for the same action type '${s}'`);
      return t[s] = a, o;
    },
    addMatcher(i, a) {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error(process.env.NODE_ENV === "production" ? ot(30) : "`builder.addMatcher` should only be called before calling `builder.addDefaultCase`");
      return n.push({
        matcher: i,
        reducer: a
      }), o;
    },
    addDefaultCase(i) {
      if (process.env.NODE_ENV !== "production" && r)
        throw new Error(process.env.NODE_ENV === "production" ? ot(31) : "`builder.addDefaultCase` can only be called once");
      return r = i, o;
    }
  };
  return e(o), [t, n, r];
}
function v0(e) {
  return typeof e == "function";
}
function b0(e, t) {
  if (process.env.NODE_ENV !== "production" && typeof t == "object")
    throw new Error(process.env.NODE_ENV === "production" ? ot(8) : "The object notation for `createReducer` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createReducer");
  let [n, r, o] = vh(t), i;
  if (v0(e))
    i = () => Sf(e());
  else {
    const s = Sf(e);
    i = () => s;
  }
  function a(s = i(), c) {
    let l = [n[c.type], ...r.filter(({
      matcher: u
    }) => u(c)).map(({
      reducer: u
    }) => u)];
    return l.filter((u) => !!u).length === 0 && (l = [o]), l.reduce((u, d) => {
      if (d)
        if (Or(u)) {
          const h = d(u, c);
          return h === void 0 ? u : h;
        } else {
          if (An(u))
            return ch(u, (p) => d(p, c));
          {
            const p = d(u, c);
            if (p === void 0) {
              if (u === null)
                return u;
              throw new Error(process.env.NODE_ENV === "production" ? ot(9) : "A case reducer on a non-draftable value must not return undefined");
            }
            return p;
          }
        }
      return u;
    }, s);
  }
  return a.getInitialState = i, a;
}
var x0 = (e, t) => uh(e) ? e.match(t) : e(t);
function w0(...e) {
  return (t) => e.some((n) => x0(n, t));
}
var _0 = "ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW", E0 = (e = 21) => {
  let t = "", n = e;
  for (; n--; )
    t += _0[Math.random() * 64 | 0];
  return t;
}, S0 = ["name", "message", "stack", "code"], Hs = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Wr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, Af = class {
  constructor(e, t) {
    /*
    type-only property to distinguish between RejectWithValue and FulfillWithMeta
    does not exist at runtime
    */
    Wr(this, "_type");
    this.payload = e, this.meta = t;
  }
}, C0 = (e) => {
  if (typeof e == "object" && e !== null) {
    const t = {};
    for (const n of S0)
      typeof e[n] == "string" && (t[n] = e[n]);
    return t;
  }
  return {
    message: String(e)
  };
}, Ri = /* @__PURE__ */ (() => {
  function e(t, n, r) {
    const o = Yo(t + "/fulfilled", (c, l, u, d) => ({
      payload: c,
      meta: {
        ...d || {},
        arg: u,
        requestId: l,
        requestStatus: "fulfilled"
      }
    })), i = Yo(t + "/pending", (c, l, u) => ({
      payload: void 0,
      meta: {
        ...u || {},
        arg: l,
        requestId: c,
        requestStatus: "pending"
      }
    })), a = Yo(t + "/rejected", (c, l, u, d, p) => ({
      payload: d,
      error: (r && r.serializeError || C0)(c || "Rejected"),
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
        const p = r != null && r.idGenerator ? r.idGenerator(c) : E0(), h = new AbortController();
        let m, g;
        function b(_) {
          g = _, h.abort();
        }
        const w = async function() {
          var C, E;
          let _;
          try {
            let N = (C = r == null ? void 0 : r.condition) == null ? void 0 : C.call(r, c, {
              getState: u,
              extra: d
            });
            if (T0(N) && (N = await N), N === !1 || h.signal.aborted)
              throw {
                name: "ConditionError",
                message: "Aborted due to condition callback returning false."
              };
            const P = new Promise((B, ce) => {
              m = () => {
                ce({
                  name: "AbortError",
                  message: g || "Aborted"
                });
              }, h.signal.addEventListener("abort", m);
            });
            l(i(p, c, (E = r == null ? void 0 : r.getPendingMeta) == null ? void 0 : E.call(r, {
              requestId: p,
              arg: c
            }, {
              getState: u,
              extra: d
            }))), _ = await Promise.race([P, Promise.resolve(n(c, {
              dispatch: l,
              getState: u,
              extra: d,
              requestId: p,
              signal: h.signal,
              abort: b,
              rejectWithValue: (B, ce) => new Hs(B, ce),
              fulfillWithValue: (B, ce) => new Af(B, ce)
            })).then((B) => {
              if (B instanceof Hs)
                throw B;
              return B instanceof Af ? o(B.payload, p, c, B.meta) : o(B, p, c);
            })]);
          } catch (N) {
            _ = N instanceof Hs ? a(null, p, c, N.payload, N.meta) : a(N, p, c);
          } finally {
            m && h.signal.removeEventListener("abort", m);
          }
          return r && !r.dispatchConditionRejection && a.match(_) && _.meta.condition || l(_), _;
        }();
        return Object.assign(w, {
          abort: b,
          requestId: p,
          arg: c,
          unwrap() {
            return w.then(A0);
          }
        });
      };
    }
    return Object.assign(s, {
      pending: i,
      rejected: a,
      fulfilled: o,
      settled: w0(a, o),
      typePrefix: t
    });
  }
  return e.withTypes = () => e, e;
})();
function A0(e) {
  if (e.meta && e.meta.rejectedWithValue)
    throw e.payload;
  if (e.error)
    throw e.error;
  return e.payload;
}
function T0(e) {
  return e !== null && typeof e == "object" && typeof e.then == "function";
}
var R0 = /* @__PURE__ */ Symbol.for("rtk-slice-createasyncthunk");
function O0(e, t) {
  return `${e}/${t}`;
}
function k0({
  creators: e
} = {}) {
  var n;
  const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[R0];
  return function(o) {
    const {
      name: i,
      reducerPath: a = i
    } = o;
    if (!i)
      throw new Error(process.env.NODE_ENV === "production" ? ot(11) : "`name` is a required option for createSlice");
    typeof process < "u" && process.env.NODE_ENV === "development" && o.initialState === void 0 && console.error("You must provide an `initialState` value that is not `undefined`. You may have misspelled `initialState`");
    const s = (typeof o.reducers == "function" ? o.reducers(N0()) : o.reducers) || {}, c = Object.keys(s), l = {
      sliceCaseReducersByName: {},
      sliceCaseReducersByType: {},
      actionCreators: {},
      sliceMatchers: []
    }, u = {
      addCase(S, C) {
        const E = typeof S == "string" ? S : S.type;
        if (!E)
          throw new Error(process.env.NODE_ENV === "production" ? ot(12) : "`context.addCase` cannot be called with an empty action type");
        if (E in l.sliceCaseReducersByType)
          throw new Error(process.env.NODE_ENV === "production" ? ot(13) : "`context.addCase` cannot be called with two reducers for the same action type: " + E);
        return l.sliceCaseReducersByType[E] = C, u;
      },
      addMatcher(S, C) {
        return l.sliceMatchers.push({
          matcher: S,
          reducer: C
        }), u;
      },
      exposeAction(S, C) {
        return l.actionCreators[S] = C, u;
      },
      exposeCaseReducer(S, C) {
        return l.sliceCaseReducersByName[S] = C, u;
      }
    };
    c.forEach((S) => {
      const C = s[S], E = {
        reducerName: S,
        type: O0(i, S),
        createNotation: typeof o.reducers == "function"
      };
      I0(C) ? j0(E, C, u, t) : M0(E, C, u);
    });
    function d() {
      if (process.env.NODE_ENV !== "production" && typeof o.extraReducers == "object")
        throw new Error(process.env.NODE_ENV === "production" ? ot(14) : "The object notation for `createSlice.extraReducers` has been removed. Please use the 'builder callback' notation instead: https://redux-toolkit.js.org/api/createSlice");
      const [S = {}, C = [], E = void 0] = typeof o.extraReducers == "function" ? vh(o.extraReducers) : [o.extraReducers], N = {
        ...S,
        ...l.sliceCaseReducersByType
      };
      return b0(o.initialState, (P) => {
        for (let B in N)
          P.addCase(B, N[B]);
        for (let B of l.sliceMatchers)
          P.addMatcher(B.matcher, B.reducer);
        for (let B of C)
          P.addMatcher(B.matcher, B.reducer);
        E && P.addDefaultCase(E);
      });
    }
    const p = (S) => S, h = /* @__PURE__ */ new Map();
    let m;
    function g(S, C) {
      return m || (m = d()), m(S, C);
    }
    function b() {
      return m || (m = d()), m.getInitialState();
    }
    function w(S, C = !1) {
      function E(P) {
        let B = P[S];
        if (typeof B > "u") {
          if (C)
            B = b();
          else if (process.env.NODE_ENV !== "production")
            throw new Error(process.env.NODE_ENV === "production" ? ot(15) : "selectSlice returned undefined for an uninjected slice reducer");
        }
        return B;
      }
      function N(P = p) {
        const B = Cf(h, C, {
          insert: () => /* @__PURE__ */ new WeakMap()
        });
        return Cf(B, P, {
          insert: () => {
            const ce = {};
            for (const [pe, fe] of Object.entries(o.selectors ?? {}))
              ce[pe] = P0(fe, P, b, C);
            return ce;
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
    const _ = {
      name: i,
      reducer: g,
      actions: l.actionCreators,
      caseReducers: l.sliceCaseReducersByName,
      getInitialState: b,
      ...w(a),
      injectInto(S, {
        reducerPath: C,
        ...E
      } = {}) {
        const N = C ?? a;
        return S.inject({
          reducerPath: N,
          reducer: g
        }, E), {
          ..._,
          ...w(N, !0)
        };
      }
    };
    return _;
  };
}
function P0(e, t, n, r) {
  function o(i, ...a) {
    let s = t(i);
    if (typeof s > "u") {
      if (r)
        s = n();
      else if (process.env.NODE_ENV !== "production")
        throw new Error(process.env.NODE_ENV === "production" ? ot(16) : "selectState returned undefined for an uninjected slice reducer");
    }
    return e(s, ...a);
  }
  return o.unwrapped = e, o;
}
var bh = /* @__PURE__ */ k0();
function N0() {
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
function M0({
  type: e,
  reducerName: t,
  createNotation: n
}, r, o) {
  let i, a;
  if ("reducer" in r) {
    if (n && !D0(r))
      throw new Error(process.env.NODE_ENV === "production" ? ot(17) : "Please use the `create.preparedReducer` notation for prepared action creators with the `create` notation.");
    i = r.reducer, a = r.prepare;
  } else
    i = r;
  o.addCase(e, i).exposeCaseReducer(t, i).exposeAction(t, a ? Yo(e, a) : Yo(e));
}
function I0(e) {
  return e._reducerDefinitionType === "asyncThunk";
}
function D0(e) {
  return e._reducerDefinitionType === "reducerWithPrepare";
}
function j0({
  type: e,
  reducerName: t
}, n, r, o) {
  if (!o)
    throw new Error(process.env.NODE_ENV === "production" ? ot(18) : "Cannot use `create.asyncThunk` in the built-in `createSlice`. Use `buildCreateSlice({ creators: { asyncThunk: asyncThunkCreator } })` to create a customised version of `createSlice`.");
  const {
    payloadCreator: i,
    fulfilled: a,
    pending: s,
    rejected: c,
    settled: l,
    options: u
  } = n, d = o(e, i, u);
  r.exposeAction(t, d), a && r.addCase(d.fulfilled, a), s && r.addCase(d.pending, s), c && r.addCase(d.rejected, c), l && r.addMatcher(d.settled, l), r.exposeCaseReducer(t, {
    fulfilled: a || Ui,
    pending: s || Ui,
    rejected: c || Ui,
    settled: l || Ui
  });
}
function Ui() {
}
function ot(e) {
  return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `;
}
var xh = {}, ni = {};
function wh(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: F0 } = Object.prototype, { getPrototypeOf: Jl } = Object, is = /* @__PURE__ */ ((e) => (t) => {
  const n = F0.call(t);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), sn = (e) => (e = e.toLowerCase(), (t) => is(t) === e), as = (e) => (t) => typeof t === e, { isArray: wo } = Array, ri = as("undefined");
function L0(e) {
  return e !== null && !ri(e) && e.constructor !== null && !ri(e.constructor) && Kt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const _h = sn("ArrayBuffer");
function z0(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && _h(e.buffer), t;
}
const $0 = as("string"), Kt = as("function"), Eh = as("number"), ss = (e) => e !== null && typeof e == "object", V0 = (e) => e === !0 || e === !1, aa = (e) => {
  if (is(e) !== "object")
    return !1;
  const t = Jl(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, U0 = sn("Date"), B0 = sn("File"), W0 = sn("Blob"), H0 = sn("FileList"), q0 = (e) => ss(e) && Kt(e.pipe), Y0 = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || Kt(e.append) && ((t = is(e)) === "formdata" || // detect form-data instance
  t === "object" && Kt(e.toString) && e.toString() === "[object FormData]"));
}, G0 = sn("URLSearchParams"), [K0, Z0, X0, J0] = ["ReadableStream", "Request", "Response", "Headers"].map(sn), Q0 = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Oi(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let r, o;
  if (typeof e != "object" && (e = [e]), wo(e))
    for (r = 0, o = e.length; r < o; r++)
      t.call(null, e[r], r, e);
  else {
    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e), a = i.length;
    let s;
    for (r = 0; r < a; r++)
      s = i[r], t.call(null, e[s], s, e);
  }
}
function Sh(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length, o;
  for (; r-- > 0; )
    if (o = n[r], t === o.toLowerCase())
      return o;
  return null;
}
const Ch = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : at, Ah = (e) => !ri(e) && e !== Ch;
function il() {
  const { caseless: e } = Ah(this) && this || {}, t = {}, n = (r, o) => {
    const i = e && Sh(t, o) || o;
    aa(t[i]) && aa(r) ? t[i] = il(t[i], r) : aa(r) ? t[i] = il({}, r) : wo(r) ? t[i] = r.slice() : t[i] = r;
  };
  for (let r = 0, o = arguments.length; r < o; r++)
    arguments[r] && Oi(arguments[r], n);
  return t;
}
const ew = (e, t, n, { allOwnKeys: r } = {}) => (Oi(t, (o, i) => {
  n && Kt(o) ? e[i] = wh(o, n) : e[i] = o;
}, { allOwnKeys: r }), e), tw = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), nw = (e, t, n, r) => {
  e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), n && Object.assign(e.prototype, n);
}, rw = (e, t, n, r) => {
  let o, i, a;
  const s = {};
  if (t = t || {}, e == null) return t;
  do {
    for (o = Object.getOwnPropertyNames(e), i = o.length; i-- > 0; )
      a = o[i], (!r || r(a, e, t)) && !s[a] && (t[a] = e[a], s[a] = !0);
    e = n !== !1 && Jl(e);
  } while (e && (!n || n(e, t)) && e !== Object.prototype);
  return t;
}, ow = (e, t, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= t.length;
  const r = e.indexOf(t, n);
  return r !== -1 && r === n;
}, iw = (e) => {
  if (!e) return null;
  if (wo(e)) return e;
  let t = e.length;
  if (!Eh(t)) return null;
  const n = new Array(t);
  for (; t-- > 0; )
    n[t] = e[t];
  return n;
}, aw = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Jl(Uint8Array)), sw = (e, t) => {
  const r = (e && e[Symbol.iterator]).call(e);
  let o;
  for (; (o = r.next()) && !o.done; ) {
    const i = o.value;
    t.call(e, i[0], i[1]);
  }
}, cw = (e, t) => {
  let n;
  const r = [];
  for (; (n = e.exec(t)) !== null; )
    r.push(n);
  return r;
}, lw = sn("HTMLFormElement"), uw = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, r, o) {
    return r.toUpperCase() + o;
  }
), Tf = (({ hasOwnProperty: e }) => (t, n) => e.call(t, n))(Object.prototype), fw = sn("RegExp"), Th = (e, t) => {
  const n = Object.getOwnPropertyDescriptors(e), r = {};
  Oi(n, (o, i) => {
    let a;
    (a = t(o, i, e)) !== !1 && (r[i] = a || o);
  }), Object.defineProperties(e, r);
}, dw = (e) => {
  Th(e, (t, n) => {
    if (Kt(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const r = e[n];
    if (Kt(r)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, pw = (e, t) => {
  const n = {}, r = (o) => {
    o.forEach((i) => {
      n[i] = !0;
    });
  };
  return wo(e) ? r(e) : r(String(e).split(t)), n;
}, hw = () => {
}, mw = (e, t) => e != null && Number.isFinite(e = +e) ? e : t, qs = "abcdefghijklmnopqrstuvwxyz", Rf = "0123456789", Rh = {
  DIGIT: Rf,
  ALPHA: qs,
  ALPHA_DIGIT: qs + qs.toUpperCase() + Rf
}, gw = (e = 16, t = Rh.ALPHA_DIGIT) => {
  let n = "";
  const { length: r } = t;
  for (; e--; )
    n += t[Math.random() * r | 0];
  return n;
};
function yw(e) {
  return !!(e && Kt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const vw = (e) => {
  const t = new Array(10), n = (r, o) => {
    if (ss(r)) {
      if (t.indexOf(r) >= 0)
        return;
      if (!("toJSON" in r)) {
        t[o] = r;
        const i = wo(r) ? [] : {};
        return Oi(r, (a, s) => {
          const c = n(a, o + 1);
          !ri(c) && (i[s] = c);
        }), t[o] = void 0, i;
      }
    }
    return r;
  };
  return n(e, 0);
}, bw = sn("AsyncFunction"), xw = (e) => e && (ss(e) || Kt(e)) && Kt(e.then) && Kt(e.catch);
var V = {
  isArray: wo,
  isArrayBuffer: _h,
  isBuffer: L0,
  isFormData: Y0,
  isArrayBufferView: z0,
  isString: $0,
  isNumber: Eh,
  isBoolean: V0,
  isObject: ss,
  isPlainObject: aa,
  isReadableStream: K0,
  isRequest: Z0,
  isResponse: X0,
  isHeaders: J0,
  isUndefined: ri,
  isDate: U0,
  isFile: B0,
  isBlob: W0,
  isRegExp: fw,
  isFunction: Kt,
  isStream: q0,
  isURLSearchParams: G0,
  isTypedArray: aw,
  isFileList: H0,
  forEach: Oi,
  merge: il,
  extend: ew,
  trim: Q0,
  stripBOM: tw,
  inherits: nw,
  toFlatObject: rw,
  kindOf: is,
  kindOfTest: sn,
  endsWith: ow,
  toArray: iw,
  forEachEntry: sw,
  matchAll: cw,
  isHTMLForm: lw,
  hasOwnProperty: Tf,
  hasOwnProp: Tf,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Th,
  freezeMethods: dw,
  toObjectSet: pw,
  toCamelCase: uw,
  noop: hw,
  toFiniteNumber: mw,
  findKey: Sh,
  global: Ch,
  isContextDefined: Ah,
  ALPHABET: Rh,
  generateString: gw,
  isSpecCompliantForm: yw,
  toJSONObject: vw,
  isAsyncFn: bw,
  isThenable: xw
};
function Fe(e, t, n, r, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o);
}
V.inherits(Fe, Error, {
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
      config: V.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Oh = Fe.prototype, kh = {};
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
  kh[e] = { value: e };
});
Object.defineProperties(Fe, kh);
Object.defineProperty(Oh, "isAxiosError", { value: !0 });
Fe.from = (e, t, n, r, o, i) => {
  const a = Object.create(Oh);
  return V.toFlatObject(e, a, function(c) {
    return c !== Error.prototype;
  }, (s) => s !== "isAxiosError"), Fe.call(a, e.message, t, n, r, o), a.cause = e, a.name = e.name, i && Object.assign(a, i), a;
};
var ww = null;
function al(e) {
  return V.isPlainObject(e) || V.isArray(e);
}
function Ph(e) {
  return V.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Of(e, t, n) {
  return e ? e.concat(t).map(function(o, i) {
    return o = Ph(o), !n && i ? "[" + o + "]" : o;
  }).join(n ? "." : "") : t;
}
function _w(e) {
  return V.isArray(e) && !e.some(al);
}
const Ew = V.toFlatObject(V, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function cs(e, t, n) {
  if (!V.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), n = V.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(g, b) {
    return !V.isUndefined(b[g]);
  });
  const r = n.metaTokens, o = n.visitor || u, i = n.dots, a = n.indexes, c = (n.Blob || typeof Blob < "u" && Blob) && V.isSpecCompliantForm(t);
  if (!V.isFunction(o))
    throw new TypeError("visitor must be a function");
  function l(m) {
    if (m === null) return "";
    if (V.isDate(m))
      return m.toISOString();
    if (!c && V.isBlob(m))
      throw new Fe("Blob is not supported. Use a Buffer instead.");
    return V.isArrayBuffer(m) || V.isTypedArray(m) ? c && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function u(m, g, b) {
    let w = m;
    if (m && !b && typeof m == "object") {
      if (V.endsWith(g, "{}"))
        g = r ? g : g.slice(0, -2), m = JSON.stringify(m);
      else if (V.isArray(m) && _w(m) || (V.isFileList(m) || V.endsWith(g, "[]")) && (w = V.toArray(m)))
        return g = Ph(g), w.forEach(function(S, C) {
          !(V.isUndefined(S) || S === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? Of([g], C, i) : a === null ? g : g + "[]",
            l(S)
          );
        }), !1;
    }
    return al(m) ? !0 : (t.append(Of(b, g, i), l(m)), !1);
  }
  const d = [], p = Object.assign(Ew, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: al
  });
  function h(m, g) {
    if (!V.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + g.join("."));
      d.push(m), V.forEach(m, function(w, _) {
        (!(V.isUndefined(w) || w === null) && o.call(
          t,
          w,
          V.isString(_) ? _.trim() : _,
          g,
          p
        )) === !0 && h(w, g ? g.concat(_) : [_]);
      }), d.pop();
    }
  }
  if (!V.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), t;
}
function kf(e) {
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
function Ql(e, t) {
  this._pairs = [], e && cs(e, this, t);
}
const Nh = Ql.prototype;
Nh.append = function(t, n) {
  this._pairs.push([t, n]);
};
Nh.toString = function(t) {
  const n = t ? function(r) {
    return t.call(this, r, kf);
  } : kf;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function Sw(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Mh(e, t, n) {
  if (!t)
    return e;
  const r = n && n.encode || Sw, o = n && n.serialize;
  let i;
  if (o ? i = o(t, n) : i = V.isURLSearchParams(t) ? t.toString() : new Ql(t, n).toString(r), i) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Cw {
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
    V.forEach(this.handlers, function(r) {
      r !== null && t(r);
    });
  }
}
var Pf = Cw, Ih = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Aw = typeof URLSearchParams < "u" ? URLSearchParams : Ql, Tw = typeof FormData < "u" ? FormData : null, Rw = typeof Blob < "u" ? Blob : null, Ow = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Aw,
    FormData: Tw,
    Blob: Rw
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
};
const eu = typeof window < "u" && typeof document < "u", kw = ((e) => eu && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Pw = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Nw = eu && window.location.href || "http://localhost";
var Mw = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  hasBrowserEnv: eu,
  hasStandardBrowserWebWorkerEnv: Pw,
  hasStandardBrowserEnv: kw,
  origin: Nw
}), Qt = {
  ...Mw,
  ...Ow
};
function Iw(e, t) {
  return cs(e, new Qt.classes.URLSearchParams(), Object.assign({
    visitor: function(n, r, o, i) {
      return Qt.isNode && V.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function Dw(e) {
  return V.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function jw(e) {
  const t = {}, n = Object.keys(e);
  let r;
  const o = n.length;
  let i;
  for (r = 0; r < o; r++)
    i = n[r], t[i] = e[i];
  return t;
}
function Dh(e) {
  function t(n, r, o, i) {
    let a = n[i++];
    if (a === "__proto__") return !0;
    const s = Number.isFinite(+a), c = i >= n.length;
    return a = !a && V.isArray(o) ? o.length : a, c ? (V.hasOwnProp(o, a) ? o[a] = [o[a], r] : o[a] = r, !s) : ((!o[a] || !V.isObject(o[a])) && (o[a] = []), t(n, r, o[a], i) && V.isArray(o[a]) && (o[a] = jw(o[a])), !s);
  }
  if (V.isFormData(e) && V.isFunction(e.entries)) {
    const n = {};
    return V.forEachEntry(e, (r, o) => {
      t(Dw(r), o, n, 0);
    }), n;
  }
  return null;
}
function Fw(e, t, n) {
  if (V.isString(e))
    try {
      return (t || JSON.parse)(e), V.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError")
        throw r;
    }
  return (0, JSON.stringify)(e);
}
const tu = {
  transitional: Ih,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(t, n) {
    const r = n.getContentType() || "", o = r.indexOf("application/json") > -1, i = V.isObject(t);
    if (i && V.isHTMLForm(t) && (t = new FormData(t)), V.isFormData(t))
      return o ? JSON.stringify(Dh(t)) : t;
    if (V.isArrayBuffer(t) || V.isBuffer(t) || V.isStream(t) || V.isFile(t) || V.isBlob(t) || V.isReadableStream(t))
      return t;
    if (V.isArrayBufferView(t))
      return t.buffer;
    if (V.isURLSearchParams(t))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let s;
    if (i) {
      if (r.indexOf("application/x-www-form-urlencoded") > -1)
        return Iw(t, this.formSerializer).toString();
      if ((s = V.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return cs(
          s ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || o ? (n.setContentType("application/json", !1), Fw(t)) : t;
  }],
  transformResponse: [function(t) {
    const n = this.transitional || tu.transitional, r = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (V.isResponse(t) || V.isReadableStream(t))
      return t;
    if (t && V.isString(t) && (r && !this.responseType || o)) {
      const a = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(t);
      } catch (s) {
        if (a)
          throw s.name === "SyntaxError" ? Fe.from(s, Fe.ERR_BAD_RESPONSE, this, null, this.response) : s;
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
    FormData: Qt.classes.FormData,
    Blob: Qt.classes.Blob
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
V.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  tu.headers[e] = {};
});
var nu = tu;
const Lw = V.toObjectSet([
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
var zw = (e) => {
  const t = {};
  let n, r, o;
  return e && e.split(`
`).forEach(function(a) {
    o = a.indexOf(":"), n = a.substring(0, o).trim().toLowerCase(), r = a.substring(o + 1).trim(), !(!n || t[n] && Lw[n]) && (n === "set-cookie" ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r);
  }), t;
};
const Nf = Symbol("internals");
function Po(e) {
  return e && String(e).trim().toLowerCase();
}
function sa(e) {
  return e === !1 || e == null ? e : V.isArray(e) ? e.map(sa) : String(e);
}
function $w(e) {
  const t = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; r = n.exec(e); )
    t[r[1]] = r[2];
  return t;
}
const Vw = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ys(e, t, n, r, o) {
  if (V.isFunction(r))
    return r.call(this, t, n);
  if (o && (t = n), !!V.isString(t)) {
    if (V.isString(r))
      return t.indexOf(r) !== -1;
    if (V.isRegExp(r))
      return r.test(t);
  }
}
function Uw(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function Bw(e, t) {
  const n = V.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function(o, i, a) {
        return this[r].call(this, t, o, i, a);
      },
      configurable: !0
    });
  });
}
class ls {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const o = this;
    function i(s, c, l) {
      const u = Po(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = V.findKey(o, u);
      (!d || o[d] === void 0 || l === !0 || l === void 0 && o[d] !== !1) && (o[d || c] = sa(s));
    }
    const a = (s, c) => V.forEach(s, (l, u) => i(l, u, c));
    if (V.isPlainObject(t) || t instanceof this.constructor)
      a(t, n);
    else if (V.isString(t) && (t = t.trim()) && !Vw(t))
      a(zw(t), n);
    else if (V.isHeaders(t))
      for (const [s, c] of t.entries())
        i(c, s, r);
    else
      t != null && i(n, t, r);
    return this;
  }
  get(t, n) {
    if (t = Po(t), t) {
      const r = V.findKey(this, t);
      if (r) {
        const o = this[r];
        if (!n)
          return o;
        if (n === !0)
          return $w(o);
        if (V.isFunction(n))
          return n.call(this, o, r);
        if (V.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (t = Po(t), t) {
      const r = V.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Ys(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let o = !1;
    function i(a) {
      if (a = Po(a), a) {
        const s = V.findKey(r, a);
        s && (!n || Ys(r, r[s], s, n)) && (delete r[s], o = !0);
      }
    }
    return V.isArray(t) ? t.forEach(i) : i(t), o;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length, o = !1;
    for (; r--; ) {
      const i = n[r];
      (!t || Ys(this, this[i], i, t, !0)) && (delete this[i], o = !0);
    }
    return o;
  }
  normalize(t) {
    const n = this, r = {};
    return V.forEach(this, (o, i) => {
      const a = V.findKey(r, i);
      if (a) {
        n[a] = sa(o), delete n[i];
        return;
      }
      const s = t ? Uw(i) : String(i).trim();
      s !== i && delete n[i], n[s] = sa(o), r[s] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = /* @__PURE__ */ Object.create(null);
    return V.forEach(this, (r, o) => {
      r != null && r !== !1 && (n[o] = t && V.isArray(r) ? r.join(", ") : r);
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
    return n.forEach((o) => r.set(o)), r;
  }
  static accessor(t) {
    const r = (this[Nf] = this[Nf] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function i(a) {
      const s = Po(a);
      r[s] || (Bw(o, a), r[s] = !0);
    }
    return V.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
ls.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
V.reduceDescriptors(ls.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    }
  };
});
V.freezeMethods(ls);
var en = ls;
function Gs(e, t) {
  const n = this || nu, r = t || n, o = en.from(r.headers);
  let i = r.data;
  return V.forEach(e, function(s) {
    i = s.call(n, i, o.normalize(), t ? t.status : void 0);
  }), o.normalize(), i;
}
function jh(e) {
  return !!(e && e.__CANCEL__);
}
function _o(e, t, n) {
  Fe.call(this, e ?? "canceled", Fe.ERR_CANCELED, t, n), this.name = "CanceledError";
}
V.inherits(_o, Fe, {
  __CANCEL__: !0
});
function Fh(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status) ? e(n) : t(new Fe(
    "Request failed with status code " + n.status,
    [Fe.ERR_BAD_REQUEST, Fe.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Ww(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Hw(e, t) {
  e = e || 10;
  const n = new Array(e), r = new Array(e);
  let o = 0, i = 0, a;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), u = r[i];
    a || (a = l), n[o] = c, r[o] = l;
    let d = i, p = 0;
    for (; d !== o; )
      p += n[d++], d = d % e;
    if (o = (o + 1) % e, o === i && (i = (i + 1) % e), l - a < t)
      return;
    const h = u && l - u;
    return h ? Math.round(p * 1e3 / h) : void 0;
  };
}
function qw(e, t) {
  let n = 0;
  const r = 1e3 / t;
  let o = null;
  return function() {
    const a = this === !0, s = Date.now();
    if (a || s - n > r)
      return o && (clearTimeout(o), o = null), n = s, e.apply(null, arguments);
    o || (o = setTimeout(() => (o = null, n = Date.now(), e.apply(null, arguments)), r - (s - n)));
  };
}
var Ta = (e, t, n = 3) => {
  let r = 0;
  const o = Hw(50, 250);
  return qw((i) => {
    const a = i.loaded, s = i.lengthComputable ? i.total : void 0, c = a - r, l = o(c), u = a <= s;
    r = a;
    const d = {
      loaded: a,
      total: s,
      progress: s ? a / s : void 0,
      bytes: c,
      rate: l || void 0,
      estimated: l && s && u ? (s - a) / l : void 0,
      event: i,
      lengthComputable: s != null
    };
    d[t ? "download" : "upload"] = !0, e(d);
  }, n);
}, Yw = Qt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a");
    let r;
    function o(i) {
      let a = i;
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
    return r = o(window.location.href), function(a) {
      const s = V.isString(a) ? o(a) : a;
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
), Gw = Qt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, n, r, o, i) {
      const a = [e + "=" + encodeURIComponent(t)];
      V.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), V.isString(r) && a.push("path=" + r), V.isString(o) && a.push("domain=" + o), i === !0 && a.push("secure"), document.cookie = a.join("; ");
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
function Kw(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Zw(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Lh(e, t) {
  return e && !Kw(t) ? Zw(e, t) : t;
}
const Mf = (e) => e instanceof en ? { ...e } : e;
function Pr(e, t) {
  t = t || {};
  const n = {};
  function r(l, u, d) {
    return V.isPlainObject(l) && V.isPlainObject(u) ? V.merge.call({ caseless: d }, l, u) : V.isPlainObject(u) ? V.merge({}, u) : V.isArray(u) ? u.slice() : u;
  }
  function o(l, u, d) {
    if (V.isUndefined(u)) {
      if (!V.isUndefined(l))
        return r(void 0, l, d);
    } else return r(l, u, d);
  }
  function i(l, u) {
    if (!V.isUndefined(u))
      return r(void 0, u);
  }
  function a(l, u) {
    if (V.isUndefined(u)) {
      if (!V.isUndefined(l))
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
    url: i,
    method: i,
    data: i,
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
    headers: (l, u) => o(Mf(l), Mf(u), !0)
  };
  return V.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = c[u] || o, p = d(e[u], t[u], u);
    V.isUndefined(p) && d !== s || (n[u] = p);
  }), n;
}
var zh = (e) => {
  const t = Pr({}, e);
  let { data: n, withXSRFToken: r, xsrfHeaderName: o, xsrfCookieName: i, headers: a, auth: s } = t;
  t.headers = a = en.from(a), t.url = Mh(Lh(t.baseURL, t.url), e.params, e.paramsSerializer), s && a.set(
    "Authorization",
    "Basic " + btoa((s.username || "") + ":" + (s.password ? unescape(encodeURIComponent(s.password)) : ""))
  );
  let c;
  if (V.isFormData(n)) {
    if (Qt.hasStandardBrowserEnv || Qt.hasStandardBrowserWebWorkerEnv)
      a.setContentType(void 0);
    else if ((c = a.getContentType()) !== !1) {
      const [l, ...u] = c ? c.split(";").map((d) => d.trim()).filter(Boolean) : [];
      a.setContentType([l || "multipart/form-data", ...u].join("; "));
    }
  }
  if (Qt.hasStandardBrowserEnv && (r && V.isFunction(r) && (r = r(t)), r || r !== !1 && Yw(t.url))) {
    const l = o && i && Gw.read(i);
    l && a.set(o, l);
  }
  return t;
};
const Xw = typeof XMLHttpRequest < "u";
var Jw = Xw && function(e) {
  return new Promise(function(n, r) {
    const o = zh(e);
    let i = o.data;
    const a = en.from(o.headers).normalize();
    let { responseType: s } = o, c;
    function l() {
      o.cancelToken && o.cancelToken.unsubscribe(c), o.signal && o.signal.removeEventListener("abort", c);
    }
    let u = new XMLHttpRequest();
    u.open(o.method.toUpperCase(), o.url, !0), u.timeout = o.timeout;
    function d() {
      if (!u)
        return;
      const h = en.from(
        "getAllResponseHeaders" in u && u.getAllResponseHeaders()
      ), g = {
        data: !s || s === "text" || s === "json" ? u.responseText : u.response,
        status: u.status,
        statusText: u.statusText,
        headers: h,
        config: e,
        request: u
      };
      Fh(function(w) {
        n(w), l();
      }, function(w) {
        r(w), l();
      }, g), u = null;
    }
    "onloadend" in u ? u.onloadend = d : u.onreadystatechange = function() {
      !u || u.readyState !== 4 || u.status === 0 && !(u.responseURL && u.responseURL.indexOf("file:") === 0) || setTimeout(d);
    }, u.onabort = function() {
      u && (r(new Fe("Request aborted", Fe.ECONNABORTED, o, u)), u = null);
    }, u.onerror = function() {
      r(new Fe("Network Error", Fe.ERR_NETWORK, o, u)), u = null;
    }, u.ontimeout = function() {
      let m = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const g = o.transitional || Ih;
      o.timeoutErrorMessage && (m = o.timeoutErrorMessage), r(new Fe(
        m,
        g.clarifyTimeoutError ? Fe.ETIMEDOUT : Fe.ECONNABORTED,
        o,
        u
      )), u = null;
    }, i === void 0 && a.setContentType(null), "setRequestHeader" in u && V.forEach(a.toJSON(), function(m, g) {
      u.setRequestHeader(g, m);
    }), V.isUndefined(o.withCredentials) || (u.withCredentials = !!o.withCredentials), s && s !== "json" && (u.responseType = o.responseType), typeof o.onDownloadProgress == "function" && u.addEventListener("progress", Ta(o.onDownloadProgress, !0)), typeof o.onUploadProgress == "function" && u.upload && u.upload.addEventListener("progress", Ta(o.onUploadProgress)), (o.cancelToken || o.signal) && (c = (h) => {
      u && (r(!h || h.type ? new _o(null, e, u) : h), u.abort(), u = null);
    }, o.cancelToken && o.cancelToken.subscribe(c), o.signal && (o.signal.aborted ? c() : o.signal.addEventListener("abort", c)));
    const p = Ww(o.url);
    if (p && Qt.protocols.indexOf(p) === -1) {
      r(new Fe("Unsupported protocol " + p + ":", Fe.ERR_BAD_REQUEST, e));
      return;
    }
    u.send(i || null);
  });
};
const Qw = (e, t) => {
  let n = new AbortController(), r;
  const o = function(c) {
    if (!r) {
      r = !0, a();
      const l = c instanceof Error ? c : this.reason;
      n.abort(l instanceof Fe ? l : new _o(l instanceof Error ? l.message : l));
    }
  };
  let i = t && setTimeout(() => {
    o(new Fe(`timeout ${t} of ms exceeded`, Fe.ETIMEDOUT));
  }, t);
  const a = () => {
    e && (i && clearTimeout(i), i = null, e.forEach((c) => {
      c && (c.removeEventListener ? c.removeEventListener("abort", o) : c.unsubscribe(o));
    }), e = null);
  };
  e.forEach((c) => c && c.addEventListener && c.addEventListener("abort", o));
  const { signal: s } = n;
  return s.unsubscribe = a, [s, () => {
    i && clearTimeout(i), i = null;
  }];
};
var e_ = Qw;
const t_ = function* (e, t) {
  let n = e.byteLength;
  if (n < t) {
    yield e;
    return;
  }
  let r = 0, o;
  for (; r < n; )
    o = r + t, yield e.slice(r, o), r = o;
}, n_ = async function* (e, t, n) {
  for await (const r of e)
    yield* t_(ArrayBuffer.isView(r) ? r : await n(String(r)), t);
}, If = (e, t, n, r, o) => {
  const i = n_(e, t, o);
  let a = 0;
  return new ReadableStream({
    type: "bytes",
    async pull(s) {
      const { done: c, value: l } = await i.next();
      if (c) {
        s.close(), r();
        return;
      }
      let u = l.byteLength;
      n && n(a += u), s.enqueue(new Uint8Array(l));
    },
    cancel(s) {
      return r(s), i.return();
    }
  }, {
    highWaterMark: 2
  });
}, Df = (e, t) => {
  const n = e != null;
  return (r) => setTimeout(() => t({
    lengthComputable: n,
    total: e,
    loaded: r
  }));
}, us = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", $h = us && typeof ReadableStream == "function", sl = us && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (t) => e.encode(t))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), r_ = $h && (() => {
  let e = !1;
  const t = new Request(Qt.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !t;
})(), jf = 64 * 1024, cl = $h && !!(() => {
  try {
    return V.isReadableStream(new Response("").body);
  } catch {
  }
})(), Ra = {
  stream: cl && ((e) => e.body)
};
us && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
    !Ra[t] && (Ra[t] = V.isFunction(e[t]) ? (n) => n[t]() : (n, r) => {
      throw new Fe(`Response type '${t}' is not supported`, Fe.ERR_NOT_SUPPORT, r);
    });
  });
})(new Response());
const o_ = async (e) => {
  if (e == null)
    return 0;
  if (V.isBlob(e))
    return e.size;
  if (V.isSpecCompliantForm(e))
    return (await new Request(e).arrayBuffer()).byteLength;
  if (V.isArrayBufferView(e))
    return e.byteLength;
  if (V.isURLSearchParams(e) && (e = e + ""), V.isString(e))
    return (await sl(e)).byteLength;
}, i_ = async (e, t) => {
  const n = V.toFiniteNumber(e.getContentLength());
  return n ?? o_(t);
};
var a_ = us && (async (e) => {
  let {
    url: t,
    method: n,
    data: r,
    signal: o,
    cancelToken: i,
    timeout: a,
    onDownloadProgress: s,
    onUploadProgress: c,
    responseType: l,
    headers: u,
    withCredentials: d = "same-origin",
    fetchOptions: p
  } = zh(e);
  l = l ? (l + "").toLowerCase() : "text";
  let [h, m] = o || i || a ? e_([o, i], a) : [], g, b;
  const w = () => {
    !g && setTimeout(() => {
      h && h.unsubscribe();
    }), g = !0;
  };
  let _;
  try {
    if (c && r_ && n !== "get" && n !== "head" && (_ = await i_(u, r)) !== 0) {
      let N = new Request(t, {
        method: "POST",
        body: r,
        duplex: "half"
      }), P;
      V.isFormData(r) && (P = N.headers.get("content-type")) && u.setContentType(P), N.body && (r = If(N.body, jf, Df(
        _,
        Ta(c)
      ), null, sl));
    }
    V.isString(d) || (d = d ? "cors" : "omit"), b = new Request(t, {
      ...p,
      signal: h,
      method: n.toUpperCase(),
      headers: u.normalize().toJSON(),
      body: r,
      duplex: "half",
      withCredentials: d
    });
    let S = await fetch(b);
    const C = cl && (l === "stream" || l === "response");
    if (cl && (s || C)) {
      const N = {};
      ["status", "statusText", "headers"].forEach((B) => {
        N[B] = S[B];
      });
      const P = V.toFiniteNumber(S.headers.get("content-length"));
      S = new Response(
        If(S.body, jf, s && Df(
          P,
          Ta(s, !0)
        ), C && w, sl),
        N
      );
    }
    l = l || "text";
    let E = await Ra[V.findKey(Ra, l) || "text"](S, e);
    return !C && w(), m && m(), await new Promise((N, P) => {
      Fh(N, P, {
        data: E,
        headers: en.from(S.headers),
        status: S.status,
        statusText: S.statusText,
        config: e,
        request: b
      });
    });
  } catch (S) {
    throw w(), S && S.name === "TypeError" && /fetch/i.test(S.message) ? Object.assign(
      new Fe("Network Error", Fe.ERR_NETWORK, e, b),
      {
        cause: S.cause || S
      }
    ) : Fe.from(S, S && S.code, e, b);
  }
});
const ll = {
  http: ww,
  xhr: Jw,
  fetch: a_
};
V.forEach(ll, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Ff = (e) => `- ${e}`, s_ = (e) => V.isFunction(e) || e === null || e === !1;
var Vh = {
  getAdapter: (e) => {
    e = V.isArray(e) ? e : [e];
    const { length: t } = e;
    let n, r;
    const o = {};
    for (let i = 0; i < t; i++) {
      n = e[i];
      let a;
      if (r = n, !s_(n) && (r = ll[(a = String(n)).toLowerCase()], r === void 0))
        throw new Fe(`Unknown adapter '${a}'`);
      if (r)
        break;
      o[a || "#" + i] = r;
    }
    if (!r) {
      const i = Object.entries(o).map(
        ([s, c]) => `adapter ${s} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? i.length > 1 ? `since :
` + i.map(Ff).join(`
`) : " " + Ff(i[0]) : "as no adapter specified";
      throw new Fe(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return r;
  },
  adapters: ll
};
function Ks(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new _o(null, e);
}
function Lf(e) {
  return Ks(e), e.headers = en.from(e.headers), e.data = Gs.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Vh.getAdapter(e.adapter || nu.adapter)(e).then(function(r) {
    return Ks(e), r.data = Gs.call(
      e,
      e.transformResponse,
      r
    ), r.headers = en.from(r.headers), r;
  }, function(r) {
    return jh(r) || (Ks(e), r && r.response && (r.response.data = Gs.call(
      e,
      e.transformResponse,
      r.response
    ), r.response.headers = en.from(r.response.headers))), Promise.reject(r);
  });
}
const Uh = "1.7.2", ru = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  ru[e] = function(r) {
    return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const zf = {};
ru.transitional = function(t, n, r) {
  function o(i, a) {
    return "[Axios v" + Uh + "] Transitional option '" + i + "'" + a + (r ? ". " + r : "");
  }
  return (i, a, s) => {
    if (t === !1)
      throw new Fe(
        o(a, " has been removed" + (n ? " in " + n : "")),
        Fe.ERR_DEPRECATED
      );
    return n && !zf[a] && (zf[a] = !0, console.warn(
      o(
        a,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), t ? t(i, a, s) : !0;
  };
};
function c_(e, t, n) {
  if (typeof e != "object")
    throw new Fe("options must be an object", Fe.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let o = r.length;
  for (; o-- > 0; ) {
    const i = r[o], a = t[i];
    if (a) {
      const s = e[i], c = s === void 0 || a(s, i, e);
      if (c !== !0)
        throw new Fe("option " + i + " must be " + c, Fe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new Fe("Unknown option " + i, Fe.ERR_BAD_OPTION);
  }
}
var ul = {
  assertOptions: c_,
  validators: ru
};
const zn = ul.validators;
class Oa {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Pf(),
      response: new Pf()
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
        let o;
        Error.captureStackTrace ? Error.captureStackTrace(o = {}) : o = new Error();
        const i = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack ? i && !String(r.stack).endsWith(i.replace(/^.+\n.+\n/, "")) && (r.stack += `
` + i) : r.stack = i;
        } catch {
        }
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? (n = n || {}, n.url = t) : n = t || {}, n = Pr(this.defaults, n);
    const { transitional: r, paramsSerializer: o, headers: i } = n;
    r !== void 0 && ul.assertOptions(r, {
      silentJSONParsing: zn.transitional(zn.boolean),
      forcedJSONParsing: zn.transitional(zn.boolean),
      clarifyTimeoutError: zn.transitional(zn.boolean)
    }, !1), o != null && (V.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : ul.assertOptions(o, {
      encode: zn.function,
      serialize: zn.function
    }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let a = i && V.merge(
      i.common,
      i[n.method]
    );
    i && V.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete i[m];
      }
    ), n.headers = en.concat(a, i);
    const s = [];
    let c = !0;
    this.interceptors.request.forEach(function(g) {
      typeof g.runWhen == "function" && g.runWhen(n) === !1 || (c = c && g.synchronous, s.unshift(g.fulfilled, g.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(g) {
      l.push(g.fulfilled, g.rejected);
    });
    let u, d = 0, p;
    if (!c) {
      const m = [Lf.bind(this), void 0];
      for (m.unshift.apply(m, s), m.push.apply(m, l), p = m.length, u = Promise.resolve(n); d < p; )
        u = u.then(m[d++], m[d++]);
      return u;
    }
    p = s.length;
    let h = n;
    for (d = 0; d < p; ) {
      const m = s[d++], g = s[d++];
      try {
        h = m(h);
      } catch (b) {
        g.call(this, b);
        break;
      }
    }
    try {
      u = Lf.call(this, h);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, p = l.length; d < p; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = Pr(this.defaults, t);
    const n = Lh(t.baseURL, t.url);
    return Mh(n, t.params, t.paramsSerializer);
  }
}
V.forEach(["delete", "get", "head", "options"], function(t) {
  Oa.prototype[t] = function(n, r) {
    return this.request(Pr(r || {}, {
      method: t,
      url: n,
      data: (r || {}).data
    }));
  };
});
V.forEach(["post", "put", "patch"], function(t) {
  function n(r) {
    return function(i, a, s) {
      return this.request(Pr(s || {}, {
        method: t,
        headers: r ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: a
      }));
    };
  }
  Oa.prototype[t] = n(), Oa.prototype[t + "Form"] = n(!0);
});
var ca = Oa;
class ou {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(i) {
      n = i;
    });
    const r = this;
    this.promise.then((o) => {
      if (!r._listeners) return;
      let i = r._listeners.length;
      for (; i-- > 0; )
        r._listeners[i](o);
      r._listeners = null;
    }), this.promise.then = (o) => {
      let i;
      const a = new Promise((s) => {
        r.subscribe(s), i = s;
      }).then(o);
      return a.cancel = function() {
        r.unsubscribe(i);
      }, a;
    }, t(function(i, a, s) {
      r.reason || (r.reason = new _o(i, a, s), n(r.reason));
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
      token: new ou(function(o) {
        t = o;
      }),
      cancel: t
    };
  }
}
var l_ = ou;
function u_(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function f_(e) {
  return V.isObject(e) && e.isAxiosError === !0;
}
const fl = {
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
Object.entries(fl).forEach(([e, t]) => {
  fl[t] = e;
});
var d_ = fl;
function Bh(e) {
  const t = new ca(e), n = wh(ca.prototype.request, t);
  return V.extend(n, ca.prototype, t, { allOwnKeys: !0 }), V.extend(n, t, null, { allOwnKeys: !0 }), n.create = function(o) {
    return Bh(Pr(e, o));
  }, n;
}
const yt = Bh(nu);
yt.Axios = ca;
yt.CanceledError = _o;
yt.CancelToken = l_;
yt.isCancel = jh;
yt.VERSION = Uh;
yt.toFormData = cs;
yt.AxiosError = Fe;
yt.Cancel = yt.CanceledError;
yt.all = function(t) {
  return Promise.all(t);
};
yt.spread = u_;
yt.isAxiosError = f_;
yt.mergeConfig = Pr;
yt.AxiosHeaders = en;
yt.formToJSON = (e) => Dh(V.isHTMLForm(e) ? new FormData(e) : e);
yt.getAdapter = Vh.getAdapter;
yt.HttpStatusCode = d_;
yt.default = yt;
var p_ = yt, Wh = {}, fs = {}, Eo = {};
Object.defineProperty(Eo, "__esModule", {
  value: !0
});
Eo.pathTempalteToParameterNames = void 0;
const h_ = (e) => {
  const t = e.match(/\{[A-Za-z0-9_-]+\}/g);
  return t === null ? [] : t.map((n) => n.substring(1, n.length - 1));
};
Eo.pathTempalteToParameterNames = h_;
Object.defineProperty(fs, "__esModule", {
  value: !0
});
fs.names = void 0;
var m_ = Eo;
const g_ = (e) => (0, m_.pathTempalteToParameterNames)(e).filter((n, r, o) => o.indexOf(n) === r);
fs.names = g_;
var ds = {}, ki = {};
Object.defineProperty(ki, "__esModule", {
  value: !0
});
ki.toParameterPattern = void 0;
var y_ = Eo;
const v_ = (e, t) => {
  const n = typeof t > "u" ? [] : Object.keys(t).map((i) => {
    const a = t[i];
    return {
      name: i,
      pattern: typeof a > "u" ? null : a
    };
  });
  return (0, y_.pathTempalteToParameterNames)(e).map((i) => {
    const a = n.find(({
      name: c
    }) => c === i), s = typeof a > "u" ? null : a.pattern;
    return {
      name: i,
      pattern: s
    };
  });
};
ki.toParameterPattern = v_;
Object.defineProperty(ds, "__esModule", {
  value: !0
});
ds.params = void 0;
var b_ = ki;
const x_ = (e, t) => {
  const r = S_(e), o = (0, b_.toParameterPattern)(e, t);
  return (i) => {
    const a = E_(i, r);
    if (a === null) return null;
    const s = __(a, o);
    return s === null ? null : w_(s);
  };
};
ds.params = x_;
const w_ = (e) => e.map(({
  name: t,
  value: n
}) => ({
  [t]: n
})).reduce((t, n) => Object.assign(t, n), {}), __ = (e, t) => {
  const n = e.map(({
    value: i
  }) => decodeURIComponent(i)).map((i, a) => {
    const {
      name: s,
      pattern: c
    } = t[a];
    return {
      name: s,
      pattern: c,
      value: i
    };
  });
  return n.some(({
    pattern: i,
    value: a
  }) => i !== null && a.match(i) === null) || n.some(({
    name: i,
    value: a
  }) => n.some(({
    name: s,
    value: c
  }) => s === i && c !== a)) ? null : n;
}, E_ = (e, t) => {
  const n = e.match(t);
  return n === null ? null : n.slice(1).map((o) => ({
    value: o
  }));
}, S_ = (e) => new RegExp("^" + e.replace(/\{[A-Za-z0-9_-]+\}/g, "([^\\/]*)") + "$");
var ps = {};
Object.defineProperty(ps, "__esModule", {
  value: !0
});
ps.path = void 0;
var C_ = Eo, A_ = ki;
const T_ = (e, t) => {
  const n = (0, C_.pathTempalteToParameterNames)(e);
  return (r) => n.some((i) => typeof r[i] != "string") || (0, A_.toParameterPattern)(e, t).some(({
    name: i,
    pattern: a
  }) => a !== null && r[i].match(a) === null) ? null : n.reduce((i, a) => i.split("{" + a + "}").join(encodeURIComponent(r[a])), e);
};
ps.path = T_;
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
  var t = fs, n = ds, r = ps;
  const o = (a, s) => {
    const c = (0, t.names)(a), l = (0, r.path)(a, s), u = (0, n.params)(a, s);
    return {
      names: c,
      path: l,
      params: u
    };
  };
  e.bath = o;
  var i = o;
  e.default = i;
})(Wh);
var Hh = {}, qh = {};
Object.defineProperty(qh, "__esModule", {
  value: !0
});
var Yh = {}, Gh = {};
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
    var r, o, i;
    if (Array.isArray(n)) {
      for (o = Array(r = n.length); r--; ) o[r] = (i = n[r]) && typeof i == "object" ? t(i) : i;
      return o;
    }
    if (Object.prototype.toString.call(n) === "[object Object]") {
      o = {};
      for (r in n)
        r === "__proto__" ? Object.defineProperty(o, r, {
          value: t(n[r]),
          configurable: !0,
          enumerable: !0,
          writable: !0
        }) : o[r] = (i = n[r]) && typeof i == "object" ? t(i) : i;
      return o;
    }
    return n;
  }
})(Gh);
var iu = {};
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "resolveRefSync", {
    enumerable: !0,
    get: function() {
      return n;
    }
  });
  var t = /* @__PURE__ */ new Map(), n = function(r, o) {
    t.has(r) || t.set(r, /* @__PURE__ */ new Map());
    var i = t.get(r);
    if (i.has(o))
      return i.get(o);
    var a = o.split("/").slice(1), s = r, c = !0, l = !1, u = void 0;
    try {
      for (var d = a[Symbol.iterator](), p; !(c = (p = d.next()).done); c = !0) {
        var h = p.value;
        (!s || typeof s != "object") && (s = null);
        var m;
        s = (m = s[h]) !== null && m !== void 0 ? m : null;
      }
    } catch (g) {
      l = !0, u = g;
    } finally {
      try {
        !c && d.return != null && d.return();
      } finally {
        if (l)
          throw u;
      }
    }
    return i.set(o, s), s;
  };
})(iu);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), Object.defineProperty(e, "dereferenceSync", {
    enumerable: !0,
    get: function() {
      return o;
    }
  });
  var t = Gh, n = iu, r = /* @__PURE__ */ new Map(), o = function(i) {
    if (r.has(i))
      return r.get(i);
    var a = /* @__PURE__ */ new Set(), s = (0, t.klona)(i), c = function(u, d) {
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
    return r.set(i, l), l;
  };
})(Yh);
(function(e) {
  Object.defineProperty(e, "__esModule", {
    value: !0
  }), t(qh, e), t(Yh, e), t(iu, e);
  function t(n, r) {
    return Object.keys(n).forEach(function(o) {
      o !== "default" && !Object.prototype.hasOwnProperty.call(r, o) && Object.defineProperty(r, o, {
        enumerable: !0,
        get: function() {
          return n[o];
        }
      });
    }), n;
  }
})(Hh);
var au = {};
(function(e) {
  Object.defineProperty(e, "__esModule", { value: !0 }), e.ParamType = e.HttpMethod = void 0, function(t) {
    t.Get = "get", t.Put = "put", t.Post = "post", t.Patch = "patch", t.Delete = "delete", t.Options = "options", t.Head = "head", t.Trace = "trace";
  }(e.HttpMethod || (e.HttpMethod = {})), function(t) {
    t.Query = "query", t.Header = "header", t.Path = "path", t.Cookie = "cookie";
  }(e.ParamType || (e.ParamType = {}));
})(au);
var _t = {}, Bi = {}, $n = {}, $f;
function Pi() {
  if ($f) return $n;
  $f = 1;
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
  function o(a, s) {
    var c = "", l;
    for (l = 0; l < s; l += 1)
      c += a;
    return c;
  }
  function i(a) {
    return a === 0 && Number.NEGATIVE_INFINITY === 1 / a;
  }
  return $n.isNothing = e, $n.isObject = t, $n.toArray = n, $n.repeat = o, $n.isNegativeZero = i, $n.extend = r, $n;
}
var Zs, Vf;
function Ni() {
  if (Vf) return Zs;
  Vf = 1;
  function e(n, r) {
    var o = "", i = n.reason || "(unknown reason)";
    return n.mark ? (n.mark.name && (o += 'in "' + n.mark.name + '" '), o += "(" + (n.mark.line + 1) + ":" + (n.mark.column + 1) + ")", !r && n.mark.snippet && (o += `

` + n.mark.snippet), i + " " + o) : i;
  }
  function t(n, r) {
    Error.call(this), this.name = "YAMLException", this.reason = n, this.mark = r, this.message = e(this, !1), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
  }
  return t.prototype = Object.create(Error.prototype), t.prototype.constructor = t, t.prototype.toString = function(r) {
    return this.name + ": " + e(this, r);
  }, Zs = t, Zs;
}
var Xs, Uf;
function R_() {
  if (Uf) return Xs;
  Uf = 1;
  var e = Pi();
  function t(o, i, a, s, c) {
    var l = "", u = "", d = Math.floor(c / 2) - 1;
    return s - i > d && (l = " ... ", i = s - d + l.length), a - s > d && (u = " ...", a = s + d - u.length), {
      str: l + o.slice(i, a).replace(/\t/g, "→") + u,
      pos: s - i + l.length
      // relative position
    };
  }
  function n(o, i) {
    return e.repeat(" ", i - o.length) + o;
  }
  function r(o, i) {
    if (i = Object.create(i || null), !o.buffer) return null;
    i.maxLength || (i.maxLength = 79), typeof i.indent != "number" && (i.indent = 1), typeof i.linesBefore != "number" && (i.linesBefore = 3), typeof i.linesAfter != "number" && (i.linesAfter = 2);
    for (var a = /\r?\n|\r|\0/g, s = [0], c = [], l, u = -1; l = a.exec(o.buffer); )
      c.push(l.index), s.push(l.index + l[0].length), o.position <= l.index && u < 0 && (u = s.length - 2);
    u < 0 && (u = s.length - 1);
    var d = "", p, h, m = Math.min(o.line + i.linesAfter, c.length).toString().length, g = i.maxLength - (i.indent + m + 3);
    for (p = 1; p <= i.linesBefore && !(u - p < 0); p++)
      h = t(
        o.buffer,
        s[u - p],
        c[u - p],
        o.position - (s[u] - s[u - p]),
        g
      ), d = e.repeat(" ", i.indent) + n((o.line - p + 1).toString(), m) + " | " + h.str + `
` + d;
    for (h = t(o.buffer, s[u], c[u], o.position, g), d += e.repeat(" ", i.indent) + n((o.line + 1).toString(), m) + " | " + h.str + `
`, d += e.repeat("-", i.indent + m + 3 + h.pos) + `^
`, p = 1; p <= i.linesAfter && !(u + p >= c.length); p++)
      h = t(
        o.buffer,
        s[u + p],
        c[u + p],
        o.position - (s[u] - s[u + p]),
        g
      ), d += e.repeat(" ", i.indent) + n((o.line + p + 1).toString(), m) + " | " + h.str + `
`;
    return d.replace(/\n$/, "");
  }
  return Xs = r, Xs;
}
var Js, Bf;
function Rt() {
  if (Bf) return Js;
  Bf = 1;
  var e = Ni(), t = [
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
  function r(i) {
    var a = {};
    return i !== null && Object.keys(i).forEach(function(s) {
      i[s].forEach(function(c) {
        a[String(c)] = s;
      });
    }), a;
  }
  function o(i, a) {
    if (a = a || {}, Object.keys(a).forEach(function(s) {
      if (t.indexOf(s) === -1)
        throw new e('Unknown option "' + s + '" is met in definition of "' + i + '" YAML type.');
    }), this.options = a, this.tag = i, this.kind = a.kind || null, this.resolve = a.resolve || function() {
      return !0;
    }, this.construct = a.construct || function(s) {
      return s;
    }, this.instanceOf = a.instanceOf || null, this.predicate = a.predicate || null, this.represent = a.represent || null, this.representName = a.representName || null, this.defaultStyle = a.defaultStyle || null, this.multi = a.multi || !1, this.styleAliases = r(a.styleAliases || null), n.indexOf(this.kind) === -1)
      throw new e('Unknown kind "' + this.kind + '" is specified for "' + i + '" YAML type.');
  }
  return Js = o, Js;
}
var Qs, Wf;
function Kh() {
  if (Wf) return Qs;
  Wf = 1;
  var e = Ni(), t = Rt();
  function n(i, a) {
    var s = [];
    return i[a].forEach(function(c) {
      var l = s.length;
      s.forEach(function(u, d) {
        u.tag === c.tag && u.kind === c.kind && u.multi === c.multi && (l = d);
      }), s[l] = c;
    }), s;
  }
  function r() {
    var i = {
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
      l.multi ? (i.multi[l.kind].push(l), i.multi.fallback.push(l)) : i[l.kind][l.tag] = i.fallback[l.tag] = l;
    }
    for (a = 0, s = arguments.length; a < s; a += 1)
      arguments[a].forEach(c);
    return i;
  }
  function o(i) {
    return this.extend(i);
  }
  return o.prototype.extend = function(a) {
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
    var l = Object.create(o.prototype);
    return l.implicit = (this.implicit || []).concat(s), l.explicit = (this.explicit || []).concat(c), l.compiledImplicit = n(l, "implicit"), l.compiledExplicit = n(l, "explicit"), l.compiledTypeMap = r(l.compiledImplicit, l.compiledExplicit), l;
  }, Qs = o, Qs;
}
var ec, Hf;
function Zh() {
  if (Hf) return ec;
  Hf = 1;
  var e = Rt();
  return ec = new e("tag:yaml.org,2002:str", {
    kind: "scalar",
    construct: function(t) {
      return t !== null ? t : "";
    }
  }), ec;
}
var tc, qf;
function Xh() {
  if (qf) return tc;
  qf = 1;
  var e = Rt();
  return tc = new e("tag:yaml.org,2002:seq", {
    kind: "sequence",
    construct: function(t) {
      return t !== null ? t : [];
    }
  }), tc;
}
var nc, Yf;
function Jh() {
  if (Yf) return nc;
  Yf = 1;
  var e = Rt();
  return nc = new e("tag:yaml.org,2002:map", {
    kind: "mapping",
    construct: function(t) {
      return t !== null ? t : {};
    }
  }), nc;
}
var rc, Gf;
function Qh() {
  if (Gf) return rc;
  Gf = 1;
  var e = Kh();
  return rc = new e({
    explicit: [
      Zh(),
      Xh(),
      Jh()
    ]
  }), rc;
}
var oc, Kf;
function em() {
  if (Kf) return oc;
  Kf = 1;
  var e = Rt();
  function t(o) {
    if (o === null) return !0;
    var i = o.length;
    return i === 1 && o === "~" || i === 4 && (o === "null" || o === "Null" || o === "NULL");
  }
  function n() {
    return null;
  }
  function r(o) {
    return o === null;
  }
  return oc = new e("tag:yaml.org,2002:null", {
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
  }), oc;
}
var ic, Zf;
function tm() {
  if (Zf) return ic;
  Zf = 1;
  var e = Rt();
  function t(o) {
    if (o === null) return !1;
    var i = o.length;
    return i === 4 && (o === "true" || o === "True" || o === "TRUE") || i === 5 && (o === "false" || o === "False" || o === "FALSE");
  }
  function n(o) {
    return o === "true" || o === "True" || o === "TRUE";
  }
  function r(o) {
    return Object.prototype.toString.call(o) === "[object Boolean]";
  }
  return ic = new e("tag:yaml.org,2002:bool", {
    kind: "scalar",
    resolve: t,
    construct: n,
    predicate: r,
    represent: {
      lowercase: function(o) {
        return o ? "true" : "false";
      },
      uppercase: function(o) {
        return o ? "TRUE" : "FALSE";
      },
      camelcase: function(o) {
        return o ? "True" : "False";
      }
    },
    defaultStyle: "lowercase"
  }), ic;
}
var ac, Xf;
function nm() {
  if (Xf) return ac;
  Xf = 1;
  var e = Pi(), t = Rt();
  function n(c) {
    return 48 <= c && c <= 57 || 65 <= c && c <= 70 || 97 <= c && c <= 102;
  }
  function r(c) {
    return 48 <= c && c <= 55;
  }
  function o(c) {
    return 48 <= c && c <= 57;
  }
  function i(c) {
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
        if (!o(c.charCodeAt(u)))
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
  return ac = new t("tag:yaml.org,2002:int", {
    kind: "scalar",
    resolve: i,
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
  }), ac;
}
var sc, Jf;
function rm() {
  if (Jf) return sc;
  Jf = 1;
  var e = Pi(), t = Rt(), n = new RegExp(
    // 2.5e4, 2.5 and integers
    "^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$"
  );
  function r(c) {
    return !(c === null || !n.test(c) || // Quick hack to not allow integers end with `_`
    // Probably should update regexp & check speed
    c[c.length - 1] === "_");
  }
  function o(c) {
    var l, u;
    return l = c.replace(/_/g, "").toLowerCase(), u = l[0] === "-" ? -1 : 1, "+-".indexOf(l[0]) >= 0 && (l = l.slice(1)), l === ".inf" ? u === 1 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : l === ".nan" ? NaN : u * parseFloat(l, 10);
  }
  var i = /^[-+]?[0-9]+e/;
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
    return u = c.toString(10), i.test(u) ? u.replace("e", ".e") : u;
  }
  function s(c) {
    return Object.prototype.toString.call(c) === "[object Number]" && (c % 1 !== 0 || e.isNegativeZero(c));
  }
  return sc = new t("tag:yaml.org,2002:float", {
    kind: "scalar",
    resolve: r,
    construct: o,
    predicate: s,
    represent: a,
    defaultStyle: "lowercase"
  }), sc;
}
var cc, Qf;
function om() {
  return Qf || (Qf = 1, cc = Qh().extend({
    implicit: [
      em(),
      tm(),
      nm(),
      rm()
    ]
  })), cc;
}
var lc, ed;
function im() {
  return ed || (ed = 1, lc = om()), lc;
}
var uc, td;
function am() {
  if (td) return uc;
  td = 1;
  var e = Rt(), t = new RegExp(
    "^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"
  ), n = new RegExp(
    "^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$"
  );
  function r(a) {
    return a === null ? !1 : t.exec(a) !== null || n.exec(a) !== null;
  }
  function o(a) {
    var s, c, l, u, d, p, h, m = 0, g = null, b, w, _;
    if (s = t.exec(a), s === null && (s = n.exec(a)), s === null) throw new Error("Date resolve error");
    if (c = +s[1], l = +s[2] - 1, u = +s[3], !s[4])
      return new Date(Date.UTC(c, l, u));
    if (d = +s[4], p = +s[5], h = +s[6], s[7]) {
      for (m = s[7].slice(0, 3); m.length < 3; )
        m += "0";
      m = +m;
    }
    return s[9] && (b = +s[10], w = +(s[11] || 0), g = (b * 60 + w) * 6e4, s[9] === "-" && (g = -g)), _ = new Date(Date.UTC(c, l, u, d, p, h, m)), g && _.setTime(_.getTime() - g), _;
  }
  function i(a) {
    return a.toISOString();
  }
  return uc = new e("tag:yaml.org,2002:timestamp", {
    kind: "scalar",
    resolve: r,
    construct: o,
    instanceOf: Date,
    represent: i
  }), uc;
}
var fc, nd;
function sm() {
  if (nd) return fc;
  nd = 1;
  var e = Rt();
  function t(n) {
    return n === "<<" || n === null;
  }
  return fc = new e("tag:yaml.org,2002:merge", {
    kind: "scalar",
    resolve: t
  }), fc;
}
var dc, rd;
function cm() {
  if (rd) return dc;
  rd = 1;
  var e = Rt(), t = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=
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
  function o(a) {
    var s = "", c = 0, l, u, d = a.length, p = t;
    for (l = 0; l < d; l++)
      l % 3 === 0 && l && (s += p[c >> 18 & 63], s += p[c >> 12 & 63], s += p[c >> 6 & 63], s += p[c & 63]), c = (c << 8) + a[l];
    return u = d % 3, u === 0 ? (s += p[c >> 18 & 63], s += p[c >> 12 & 63], s += p[c >> 6 & 63], s += p[c & 63]) : u === 2 ? (s += p[c >> 10 & 63], s += p[c >> 4 & 63], s += p[c << 2 & 63], s += p[64]) : u === 1 && (s += p[c >> 2 & 63], s += p[c << 4 & 63], s += p[64], s += p[64]), s;
  }
  function i(a) {
    return Object.prototype.toString.call(a) === "[object Uint8Array]";
  }
  return dc = new e("tag:yaml.org,2002:binary", {
    kind: "scalar",
    resolve: n,
    construct: r,
    predicate: i,
    represent: o
  }), dc;
}
var pc, od;
function lm() {
  if (od) return pc;
  od = 1;
  var e = Rt(), t = Object.prototype.hasOwnProperty, n = Object.prototype.toString;
  function r(i) {
    if (i === null) return !0;
    var a = [], s, c, l, u, d, p = i;
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
  function o(i) {
    return i !== null ? i : [];
  }
  return pc = new e("tag:yaml.org,2002:omap", {
    kind: "sequence",
    resolve: r,
    construct: o
  }), pc;
}
var hc, id;
function um() {
  if (id) return hc;
  id = 1;
  var e = Rt(), t = Object.prototype.toString;
  function n(o) {
    if (o === null) return !0;
    var i, a, s, c, l, u = o;
    for (l = new Array(u.length), i = 0, a = u.length; i < a; i += 1) {
      if (s = u[i], t.call(s) !== "[object Object]" || (c = Object.keys(s), c.length !== 1)) return !1;
      l[i] = [c[0], s[c[0]]];
    }
    return !0;
  }
  function r(o) {
    if (o === null) return [];
    var i, a, s, c, l, u = o;
    for (l = new Array(u.length), i = 0, a = u.length; i < a; i += 1)
      s = u[i], c = Object.keys(s), l[i] = [c[0], s[c[0]]];
    return l;
  }
  return hc = new e("tag:yaml.org,2002:pairs", {
    kind: "sequence",
    resolve: n,
    construct: r
  }), hc;
}
var mc, ad;
function fm() {
  if (ad) return mc;
  ad = 1;
  var e = Rt(), t = Object.prototype.hasOwnProperty;
  function n(o) {
    if (o === null) return !0;
    var i, a = o;
    for (i in a)
      if (t.call(a, i) && a[i] !== null)
        return !1;
    return !0;
  }
  function r(o) {
    return o !== null ? o : {};
  }
  return mc = new e("tag:yaml.org,2002:set", {
    kind: "mapping",
    resolve: n,
    construct: r
  }), mc;
}
var gc, sd;
function su() {
  return sd || (sd = 1, gc = im().extend({
    implicit: [
      am(),
      sm()
    ],
    explicit: [
      cm(),
      lm(),
      um(),
      fm()
    ]
  })), gc;
}
var cd;
function O_() {
  if (cd) return Bi;
  cd = 1;
  var e = Pi(), t = Ni(), n = R_(), r = su(), o = Object.prototype.hasOwnProperty, i = 1, a = 2, s = 3, c = 4, l = 1, u = 2, d = 3, p = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, h = /[\x85\u2028\u2029]/, m = /[,\[\]\{\}]/, g = /^(?:!|!!|![a-z\-]+!)$/i, b = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
  function w(f) {
    return Object.prototype.toString.call(f);
  }
  function _(f) {
    return f === 10 || f === 13;
  }
  function S(f) {
    return f === 9 || f === 32;
  }
  function C(f) {
    return f === 9 || f === 32 || f === 10 || f === 13;
  }
  function E(f) {
    return f === 44 || f === 91 || f === 93 || f === 123 || f === 125;
  }
  function N(f) {
    var T;
    return 48 <= f && f <= 57 ? f - 48 : (T = f | 32, 97 <= T && T <= 102 ? T - 97 + 10 : -1);
  }
  function P(f) {
    return f === 120 ? 2 : f === 117 ? 4 : f === 85 ? 8 : 0;
  }
  function B(f) {
    return 48 <= f && f <= 57 ? f - 48 : -1;
  }
  function ce(f) {
    return f === 48 ? "\0" : f === 97 ? "\x07" : f === 98 ? "\b" : f === 116 || f === 9 ? "	" : f === 110 ? `
` : f === 118 ? "\v" : f === 102 ? "\f" : f === 114 ? "\r" : f === 101 ? "\x1B" : f === 32 ? " " : f === 34 ? '"' : f === 47 ? "/" : f === 92 ? "\\" : f === 78 ? "" : f === 95 ? " " : f === 76 ? "\u2028" : f === 80 ? "\u2029" : "";
  }
  function pe(f) {
    return f <= 65535 ? String.fromCharCode(f) : String.fromCharCode(
      (f - 65536 >> 10) + 55296,
      (f - 65536 & 1023) + 56320
    );
  }
  for (var fe = new Array(256), $ = new Array(256), Q = 0; Q < 256; Q++)
    fe[Q] = ce(Q) ? 1 : 0, $[Q] = ce(Q);
  function D(f, T) {
    this.input = f, this.filename = T.filename || null, this.schema = T.schema || r, this.onWarning = T.onWarning || null, this.legacy = T.legacy || !1, this.json = T.json || !1, this.listener = T.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = f.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
  }
  function re(f, T) {
    var O = {
      name: f.filename,
      buffer: f.input.slice(0, -1),
      // omit trailing \0
      position: f.position,
      line: f.line,
      column: f.position - f.lineStart
    };
    return O.snippet = n(O), new t(T, O);
  }
  function M(f, T) {
    throw re(f, T);
  }
  function le(f, T) {
    f.onWarning && f.onWarning.call(null, re(f, T));
  }
  var we = {
    YAML: function(T, O, z) {
      var j, Z, H;
      T.version !== null && M(T, "duplication of %YAML directive"), z.length !== 1 && M(T, "YAML directive accepts exactly one argument"), j = /^([0-9]+)\.([0-9]+)$/.exec(z[0]), j === null && M(T, "ill-formed argument of the YAML directive"), Z = parseInt(j[1], 10), H = parseInt(j[2], 10), Z !== 1 && M(T, "unacceptable YAML version of the document"), T.version = z[0], T.checkLineBreaks = H < 2, H !== 1 && H !== 2 && le(T, "unsupported YAML version of the document");
    },
    TAG: function(T, O, z) {
      var j, Z;
      z.length !== 2 && M(T, "TAG directive accepts exactly two arguments"), j = z[0], Z = z[1], g.test(j) || M(T, "ill-formed tag handle (first argument) of the TAG directive"), o.call(T.tagMap, j) && M(T, 'there is a previously declared suffix for "' + j + '" tag handle'), b.test(Z) || M(T, "ill-formed tag prefix (second argument) of the TAG directive");
      try {
        Z = decodeURIComponent(Z);
      } catch {
        M(T, "tag prefix is malformed: " + Z);
      }
      T.tagMap[j] = Z;
    }
  };
  function X(f, T, O, z) {
    var j, Z, H, me;
    if (T < O) {
      if (me = f.input.slice(T, O), z)
        for (j = 0, Z = me.length; j < Z; j += 1)
          H = me.charCodeAt(j), H === 9 || 32 <= H && H <= 1114111 || M(f, "expected valid JSON character");
      else p.test(me) && M(f, "the stream contains non-printable characters");
      f.result += me;
    }
  }
  function L(f, T, O, z) {
    var j, Z, H, me;
    for (e.isObject(O) || M(f, "cannot merge mappings; the provided source object is unacceptable"), j = Object.keys(O), H = 0, me = j.length; H < me; H += 1)
      Z = j[H], o.call(T, Z) || (T[Z] = O[Z], z[Z] = !0);
  }
  function W(f, T, O, z, j, Z, H, me, Re) {
    var De, qe;
    if (Array.isArray(j))
      for (j = Array.prototype.slice.call(j), De = 0, qe = j.length; De < qe; De += 1)
        Array.isArray(j[De]) && M(f, "nested arrays are not supported inside keys"), typeof j == "object" && w(j[De]) === "[object Object]" && (j[De] = "[object Object]");
    if (typeof j == "object" && w(j) === "[object Object]" && (j = "[object Object]"), j = String(j), T === null && (T = {}), z === "tag:yaml.org,2002:merge")
      if (Array.isArray(Z))
        for (De = 0, qe = Z.length; De < qe; De += 1)
          L(f, T, Z[De], O);
      else
        L(f, T, Z, O);
    else
      !f.json && !o.call(O, j) && o.call(T, j) && (f.line = H || f.line, f.lineStart = me || f.lineStart, f.position = Re || f.position, M(f, "duplicated mapping key")), j === "__proto__" ? Object.defineProperty(T, j, {
        configurable: !0,
        enumerable: !0,
        writable: !0,
        value: Z
      }) : T[j] = Z, delete O[j];
    return T;
  }
  function he(f) {
    var T;
    T = f.input.charCodeAt(f.position), T === 10 ? f.position++ : T === 13 ? (f.position++, f.input.charCodeAt(f.position) === 10 && f.position++) : M(f, "a line break is expected"), f.line += 1, f.lineStart = f.position, f.firstTabInLine = -1;
  }
  function I(f, T, O) {
    for (var z = 0, j = f.input.charCodeAt(f.position); j !== 0; ) {
      for (; S(j); )
        j === 9 && f.firstTabInLine === -1 && (f.firstTabInLine = f.position), j = f.input.charCodeAt(++f.position);
      if (T && j === 35)
        do
          j = f.input.charCodeAt(++f.position);
        while (j !== 10 && j !== 13 && j !== 0);
      if (_(j))
        for (he(f), j = f.input.charCodeAt(f.position), z++, f.lineIndent = 0; j === 32; )
          f.lineIndent++, j = f.input.charCodeAt(++f.position);
      else
        break;
    }
    return O !== -1 && z !== 0 && f.lineIndent < O && le(f, "deficient indentation"), z;
  }
  function G(f) {
    var T = f.position, O;
    return O = f.input.charCodeAt(T), !!((O === 45 || O === 46) && O === f.input.charCodeAt(T + 1) && O === f.input.charCodeAt(T + 2) && (T += 3, O = f.input.charCodeAt(T), O === 0 || C(O)));
  }
  function oe(f, T) {
    T === 1 ? f.result += " " : T > 1 && (f.result += e.repeat(`
`, T - 1));
  }
  function Y(f, T, O) {
    var z, j, Z, H, me, Re, De, qe, Ee = f.kind, dt = f.result, v;
    if (v = f.input.charCodeAt(f.position), C(v) || E(v) || v === 35 || v === 38 || v === 42 || v === 33 || v === 124 || v === 62 || v === 39 || v === 34 || v === 37 || v === 64 || v === 96 || (v === 63 || v === 45) && (j = f.input.charCodeAt(f.position + 1), C(j) || O && E(j)))
      return !1;
    for (f.kind = "scalar", f.result = "", Z = H = f.position, me = !1; v !== 0; ) {
      if (v === 58) {
        if (j = f.input.charCodeAt(f.position + 1), C(j) || O && E(j))
          break;
      } else if (v === 35) {
        if (z = f.input.charCodeAt(f.position - 1), C(z))
          break;
      } else {
        if (f.position === f.lineStart && G(f) || O && E(v))
          break;
        if (_(v))
          if (Re = f.line, De = f.lineStart, qe = f.lineIndent, I(f, !1, -1), f.lineIndent >= T) {
            me = !0, v = f.input.charCodeAt(f.position);
            continue;
          } else {
            f.position = H, f.line = Re, f.lineStart = De, f.lineIndent = qe;
            break;
          }
      }
      me && (X(f, Z, H, !1), oe(f, f.line - Re), Z = H = f.position, me = !1), S(v) || (H = f.position + 1), v = f.input.charCodeAt(++f.position);
    }
    return X(f, Z, H, !1), f.result ? !0 : (f.kind = Ee, f.result = dt, !1);
  }
  function K(f, T) {
    var O, z, j;
    if (O = f.input.charCodeAt(f.position), O !== 39)
      return !1;
    for (f.kind = "scalar", f.result = "", f.position++, z = j = f.position; (O = f.input.charCodeAt(f.position)) !== 0; )
      if (O === 39)
        if (X(f, z, f.position, !0), O = f.input.charCodeAt(++f.position), O === 39)
          z = f.position, f.position++, j = f.position;
        else
          return !0;
      else _(O) ? (X(f, z, j, !0), oe(f, I(f, !1, T)), z = j = f.position) : f.position === f.lineStart && G(f) ? M(f, "unexpected end of the document within a single quoted scalar") : (f.position++, j = f.position);
    M(f, "unexpected end of the stream within a single quoted scalar");
  }
  function ie(f, T) {
    var O, z, j, Z, H, me;
    if (me = f.input.charCodeAt(f.position), me !== 34)
      return !1;
    for (f.kind = "scalar", f.result = "", f.position++, O = z = f.position; (me = f.input.charCodeAt(f.position)) !== 0; ) {
      if (me === 34)
        return X(f, O, f.position, !0), f.position++, !0;
      if (me === 92) {
        if (X(f, O, f.position, !0), me = f.input.charCodeAt(++f.position), _(me))
          I(f, !1, T);
        else if (me < 256 && fe[me])
          f.result += $[me], f.position++;
        else if ((H = P(me)) > 0) {
          for (j = H, Z = 0; j > 0; j--)
            me = f.input.charCodeAt(++f.position), (H = N(me)) >= 0 ? Z = (Z << 4) + H : M(f, "expected hexadecimal character");
          f.result += pe(Z), f.position++;
        } else
          M(f, "unknown escape sequence");
        O = z = f.position;
      } else _(me) ? (X(f, O, z, !0), oe(f, I(f, !1, T)), O = z = f.position) : f.position === f.lineStart && G(f) ? M(f, "unexpected end of the document within a double quoted scalar") : (f.position++, z = f.position);
    }
    M(f, "unexpected end of the stream within a double quoted scalar");
  }
  function de(f, T) {
    var O = !0, z, j, Z, H = f.tag, me, Re = f.anchor, De, qe, Ee, dt, v, U = /* @__PURE__ */ Object.create(null), J, q, te, se;
    if (se = f.input.charCodeAt(f.position), se === 91)
      qe = 93, v = !1, me = [];
    else if (se === 123)
      qe = 125, v = !0, me = {};
    else
      return !1;
    for (f.anchor !== null && (f.anchorMap[f.anchor] = me), se = f.input.charCodeAt(++f.position); se !== 0; ) {
      if (I(f, !0, T), se = f.input.charCodeAt(f.position), se === qe)
        return f.position++, f.tag = H, f.anchor = Re, f.kind = v ? "mapping" : "sequence", f.result = me, !0;
      O ? se === 44 && M(f, "expected the node content, but found ','") : M(f, "missed comma between flow collection entries"), q = J = te = null, Ee = dt = !1, se === 63 && (De = f.input.charCodeAt(f.position + 1), C(De) && (Ee = dt = !0, f.position++, I(f, !0, T))), z = f.line, j = f.lineStart, Z = f.position, et(f, T, i, !1, !0), q = f.tag, J = f.result, I(f, !0, T), se = f.input.charCodeAt(f.position), (dt || f.line === z) && se === 58 && (Ee = !0, se = f.input.charCodeAt(++f.position), I(f, !0, T), et(f, T, i, !1, !0), te = f.result), v ? W(f, me, U, q, J, te, z, j, Z) : Ee ? me.push(W(f, null, U, q, J, te, z, j, Z)) : me.push(J), I(f, !0, T), se = f.input.charCodeAt(f.position), se === 44 ? (O = !0, se = f.input.charCodeAt(++f.position)) : O = !1;
    }
    M(f, "unexpected end of the stream within a flow collection");
  }
  function ve(f, T) {
    var O, z, j = l, Z = !1, H = !1, me = T, Re = 0, De = !1, qe, Ee;
    if (Ee = f.input.charCodeAt(f.position), Ee === 124)
      z = !1;
    else if (Ee === 62)
      z = !0;
    else
      return !1;
    for (f.kind = "scalar", f.result = ""; Ee !== 0; )
      if (Ee = f.input.charCodeAt(++f.position), Ee === 43 || Ee === 45)
        l === j ? j = Ee === 43 ? d : u : M(f, "repeat of a chomping mode identifier");
      else if ((qe = B(Ee)) >= 0)
        qe === 0 ? M(f, "bad explicit indentation width of a block scalar; it cannot be less than one") : H ? M(f, "repeat of an indentation width identifier") : (me = T + qe - 1, H = !0);
      else
        break;
    if (S(Ee)) {
      do
        Ee = f.input.charCodeAt(++f.position);
      while (S(Ee));
      if (Ee === 35)
        do
          Ee = f.input.charCodeAt(++f.position);
        while (!_(Ee) && Ee !== 0);
    }
    for (; Ee !== 0; ) {
      for (he(f), f.lineIndent = 0, Ee = f.input.charCodeAt(f.position); (!H || f.lineIndent < me) && Ee === 32; )
        f.lineIndent++, Ee = f.input.charCodeAt(++f.position);
      if (!H && f.lineIndent > me && (me = f.lineIndent), _(Ee)) {
        Re++;
        continue;
      }
      if (f.lineIndent < me) {
        j === d ? f.result += e.repeat(`
`, Z ? 1 + Re : Re) : j === l && Z && (f.result += `
`);
        break;
      }
      for (z ? S(Ee) ? (De = !0, f.result += e.repeat(`
`, Z ? 1 + Re : Re)) : De ? (De = !1, f.result += e.repeat(`
`, Re + 1)) : Re === 0 ? Z && (f.result += " ") : f.result += e.repeat(`
`, Re) : f.result += e.repeat(`
`, Z ? 1 + Re : Re), Z = !0, H = !0, Re = 0, O = f.position; !_(Ee) && Ee !== 0; )
        Ee = f.input.charCodeAt(++f.position);
      X(f, O, f.position, !1);
    }
    return !0;
  }
  function Ne(f, T) {
    var O, z = f.tag, j = f.anchor, Z = [], H, me = !1, Re;
    if (f.firstTabInLine !== -1) return !1;
    for (f.anchor !== null && (f.anchorMap[f.anchor] = Z), Re = f.input.charCodeAt(f.position); Re !== 0 && (f.firstTabInLine !== -1 && (f.position = f.firstTabInLine, M(f, "tab characters must not be used in indentation")), !(Re !== 45 || (H = f.input.charCodeAt(f.position + 1), !C(H)))); ) {
      if (me = !0, f.position++, I(f, !0, -1) && f.lineIndent <= T) {
        Z.push(null), Re = f.input.charCodeAt(f.position);
        continue;
      }
      if (O = f.line, et(f, T, s, !1, !0), Z.push(f.result), I(f, !0, -1), Re = f.input.charCodeAt(f.position), (f.line === O || f.lineIndent > T) && Re !== 0)
        M(f, "bad indentation of a sequence entry");
      else if (f.lineIndent < T)
        break;
    }
    return me ? (f.tag = z, f.anchor = j, f.kind = "sequence", f.result = Z, !0) : !1;
  }
  function ee(f, T, O) {
    var z, j, Z, H, me, Re, De = f.tag, qe = f.anchor, Ee = {}, dt = /* @__PURE__ */ Object.create(null), v = null, U = null, J = null, q = !1, te = !1, se;
    if (f.firstTabInLine !== -1) return !1;
    for (f.anchor !== null && (f.anchorMap[f.anchor] = Ee), se = f.input.charCodeAt(f.position); se !== 0; ) {
      if (!q && f.firstTabInLine !== -1 && (f.position = f.firstTabInLine, M(f, "tab characters must not be used in indentation")), z = f.input.charCodeAt(f.position + 1), Z = f.line, (se === 63 || se === 58) && C(z))
        se === 63 ? (q && (W(f, Ee, dt, v, U, null, H, me, Re), v = U = J = null), te = !0, q = !0, j = !0) : q ? (q = !1, j = !0) : M(f, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), f.position += 1, se = z;
      else {
        if (H = f.line, me = f.lineStart, Re = f.position, !et(f, O, a, !1, !0))
          break;
        if (f.line === Z) {
          for (se = f.input.charCodeAt(f.position); S(se); )
            se = f.input.charCodeAt(++f.position);
          if (se === 58)
            se = f.input.charCodeAt(++f.position), C(se) || M(f, "a whitespace character is expected after the key-value separator within a block mapping"), q && (W(f, Ee, dt, v, U, null, H, me, Re), v = U = J = null), te = !0, q = !1, j = !1, v = f.tag, U = f.result;
          else if (te)
            M(f, "can not read an implicit mapping pair; a colon is missed");
          else
            return f.tag = De, f.anchor = qe, !0;
        } else if (te)
          M(f, "can not read a block mapping entry; a multiline key may not be an implicit key");
        else
          return f.tag = De, f.anchor = qe, !0;
      }
      if ((f.line === Z || f.lineIndent > T) && (q && (H = f.line, me = f.lineStart, Re = f.position), et(f, T, c, !0, j) && (q ? U = f.result : J = f.result), q || (W(f, Ee, dt, v, U, J, H, me, Re), v = U = J = null), I(f, !0, -1), se = f.input.charCodeAt(f.position)), (f.line === Z || f.lineIndent > T) && se !== 0)
        M(f, "bad indentation of a mapping entry");
      else if (f.lineIndent < T)
        break;
    }
    return q && W(f, Ee, dt, v, U, null, H, me, Re), te && (f.tag = De, f.anchor = qe, f.kind = "mapping", f.result = Ee), te;
  }
  function Te(f) {
    var T, O = !1, z = !1, j, Z, H;
    if (H = f.input.charCodeAt(f.position), H !== 33) return !1;
    if (f.tag !== null && M(f, "duplication of a tag property"), H = f.input.charCodeAt(++f.position), H === 60 ? (O = !0, H = f.input.charCodeAt(++f.position)) : H === 33 ? (z = !0, j = "!!", H = f.input.charCodeAt(++f.position)) : j = "!", T = f.position, O) {
      do
        H = f.input.charCodeAt(++f.position);
      while (H !== 0 && H !== 62);
      f.position < f.length ? (Z = f.input.slice(T, f.position), H = f.input.charCodeAt(++f.position)) : M(f, "unexpected end of the stream within a verbatim tag");
    } else {
      for (; H !== 0 && !C(H); )
        H === 33 && (z ? M(f, "tag suffix cannot contain exclamation marks") : (j = f.input.slice(T - 1, f.position + 1), g.test(j) || M(f, "named tag handle cannot contain such characters"), z = !0, T = f.position + 1)), H = f.input.charCodeAt(++f.position);
      Z = f.input.slice(T, f.position), m.test(Z) && M(f, "tag suffix cannot contain flow indicator characters");
    }
    Z && !b.test(Z) && M(f, "tag name cannot contain such characters: " + Z);
    try {
      Z = decodeURIComponent(Z);
    } catch {
      M(f, "tag name is malformed: " + Z);
    }
    return O ? f.tag = Z : o.call(f.tagMap, j) ? f.tag = f.tagMap[j] + Z : j === "!" ? f.tag = "!" + Z : j === "!!" ? f.tag = "tag:yaml.org,2002:" + Z : M(f, 'undeclared tag handle "' + j + '"'), !0;
  }
  function He(f) {
    var T, O;
    if (O = f.input.charCodeAt(f.position), O !== 38) return !1;
    for (f.anchor !== null && M(f, "duplication of an anchor property"), O = f.input.charCodeAt(++f.position), T = f.position; O !== 0 && !C(O) && !E(O); )
      O = f.input.charCodeAt(++f.position);
    return f.position === T && M(f, "name of an anchor node must contain at least one character"), f.anchor = f.input.slice(T, f.position), !0;
  }
  function lt(f) {
    var T, O, z;
    if (z = f.input.charCodeAt(f.position), z !== 42) return !1;
    for (z = f.input.charCodeAt(++f.position), T = f.position; z !== 0 && !C(z) && !E(z); )
      z = f.input.charCodeAt(++f.position);
    return f.position === T && M(f, "name of an alias node must contain at least one character"), O = f.input.slice(T, f.position), o.call(f.anchorMap, O) || M(f, 'unidentified alias "' + O + '"'), f.result = f.anchorMap[O], I(f, !0, -1), !0;
  }
  function et(f, T, O, z, j) {
    var Z, H, me, Re = 1, De = !1, qe = !1, Ee, dt, v, U, J, q;
    if (f.listener !== null && f.listener("open", f), f.tag = null, f.anchor = null, f.kind = null, f.result = null, Z = H = me = c === O || s === O, z && I(f, !0, -1) && (De = !0, f.lineIndent > T ? Re = 1 : f.lineIndent === T ? Re = 0 : f.lineIndent < T && (Re = -1)), Re === 1)
      for (; Te(f) || He(f); )
        I(f, !0, -1) ? (De = !0, me = Z, f.lineIndent > T ? Re = 1 : f.lineIndent === T ? Re = 0 : f.lineIndent < T && (Re = -1)) : me = !1;
    if (me && (me = De || j), (Re === 1 || c === O) && (i === O || a === O ? J = T : J = T + 1, q = f.position - f.lineStart, Re === 1 ? me && (Ne(f, q) || ee(f, q, J)) || de(f, J) ? qe = !0 : (H && ve(f, J) || K(f, J) || ie(f, J) ? qe = !0 : lt(f) ? (qe = !0, (f.tag !== null || f.anchor !== null) && M(f, "alias node should not have any properties")) : Y(f, J, i === O) && (qe = !0, f.tag === null && (f.tag = "?")), f.anchor !== null && (f.anchorMap[f.anchor] = f.result)) : Re === 0 && (qe = me && Ne(f, q))), f.tag === null)
      f.anchor !== null && (f.anchorMap[f.anchor] = f.result);
    else if (f.tag === "?") {
      for (f.result !== null && f.kind !== "scalar" && M(f, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + f.kind + '"'), Ee = 0, dt = f.implicitTypes.length; Ee < dt; Ee += 1)
        if (U = f.implicitTypes[Ee], U.resolve(f.result)) {
          f.result = U.construct(f.result), f.tag = U.tag, f.anchor !== null && (f.anchorMap[f.anchor] = f.result);
          break;
        }
    } else if (f.tag !== "!") {
      if (o.call(f.typeMap[f.kind || "fallback"], f.tag))
        U = f.typeMap[f.kind || "fallback"][f.tag];
      else
        for (U = null, v = f.typeMap.multi[f.kind || "fallback"], Ee = 0, dt = v.length; Ee < dt; Ee += 1)
          if (f.tag.slice(0, v[Ee].tag.length) === v[Ee].tag) {
            U = v[Ee];
            break;
          }
      U || M(f, "unknown tag !<" + f.tag + ">"), f.result !== null && U.kind !== f.kind && M(f, "unacceptable node kind for !<" + f.tag + '> tag; it should be "' + U.kind + '", not "' + f.kind + '"'), U.resolve(f.result, f.tag) ? (f.result = U.construct(f.result, f.tag), f.anchor !== null && (f.anchorMap[f.anchor] = f.result)) : M(f, "cannot resolve a node with !<" + f.tag + "> explicit tag");
    }
    return f.listener !== null && f.listener("close", f), f.tag !== null || f.anchor !== null || qe;
  }
  function Ue(f) {
    var T = f.position, O, z, j, Z = !1, H;
    for (f.version = null, f.checkLineBreaks = f.legacy, f.tagMap = /* @__PURE__ */ Object.create(null), f.anchorMap = /* @__PURE__ */ Object.create(null); (H = f.input.charCodeAt(f.position)) !== 0 && (I(f, !0, -1), H = f.input.charCodeAt(f.position), !(f.lineIndent > 0 || H !== 37)); ) {
      for (Z = !0, H = f.input.charCodeAt(++f.position), O = f.position; H !== 0 && !C(H); )
        H = f.input.charCodeAt(++f.position);
      for (z = f.input.slice(O, f.position), j = [], z.length < 1 && M(f, "directive name must not be less than one character in length"); H !== 0; ) {
        for (; S(H); )
          H = f.input.charCodeAt(++f.position);
        if (H === 35) {
          do
            H = f.input.charCodeAt(++f.position);
          while (H !== 0 && !_(H));
          break;
        }
        if (_(H)) break;
        for (O = f.position; H !== 0 && !C(H); )
          H = f.input.charCodeAt(++f.position);
        j.push(f.input.slice(O, f.position));
      }
      H !== 0 && he(f), o.call(we, z) ? we[z](f, z, j) : le(f, 'unknown document directive "' + z + '"');
    }
    if (I(f, !0, -1), f.lineIndent === 0 && f.input.charCodeAt(f.position) === 45 && f.input.charCodeAt(f.position + 1) === 45 && f.input.charCodeAt(f.position + 2) === 45 ? (f.position += 3, I(f, !0, -1)) : Z && M(f, "directives end mark is expected"), et(f, f.lineIndent - 1, c, !1, !0), I(f, !0, -1), f.checkLineBreaks && h.test(f.input.slice(T, f.position)) && le(f, "non-ASCII line breaks are interpreted as content"), f.documents.push(f.result), f.position === f.lineStart && G(f)) {
      f.input.charCodeAt(f.position) === 46 && (f.position += 3, I(f, !0, -1));
      return;
    }
    if (f.position < f.length - 1)
      M(f, "end of the stream or a document separator is expected");
    else
      return;
  }
  function A(f, T) {
    f = String(f), T = T || {}, f.length !== 0 && (f.charCodeAt(f.length - 1) !== 10 && f.charCodeAt(f.length - 1) !== 13 && (f += `
`), f.charCodeAt(0) === 65279 && (f = f.slice(1)));
    var O = new D(f, T), z = f.indexOf("\0");
    for (z !== -1 && (O.position = z, M(O, "null byte is not allowed in input")), O.input += "\0"; O.input.charCodeAt(O.position) === 32; )
      O.lineIndent += 1, O.position += 1;
    for (; O.position < O.length - 1; )
      Ue(O);
    return O.documents;
  }
  function k(f, T, O) {
    T !== null && typeof T == "object" && typeof O > "u" && (O = T, T = null);
    var z = A(f, O);
    if (typeof T != "function")
      return z;
    for (var j = 0, Z = z.length; j < Z; j += 1)
      T(z[j]);
  }
  function F(f, T) {
    var O = A(f, T);
    if (O.length !== 0) {
      if (O.length === 1)
        return O[0];
      throw new t("expected a single document in the stream, but found more");
    }
  }
  return Bi.loadAll = k, Bi.load = F, Bi;
}
var yc = {}, ld;
function k_() {
  if (ld) return yc;
  ld = 1;
  var e = Pi(), t = Ni(), n = su(), r = Object.prototype.toString, o = Object.prototype.hasOwnProperty, i = 65279, a = 9, s = 10, c = 13, l = 32, u = 33, d = 34, p = 35, h = 37, m = 38, g = 39, b = 42, w = 44, _ = 45, S = 58, C = 61, E = 62, N = 63, P = 64, B = 91, ce = 93, pe = 96, fe = 123, $ = 124, Q = 125, D = {};
  D[0] = "\\0", D[7] = "\\a", D[8] = "\\b", D[9] = "\\t", D[10] = "\\n", D[11] = "\\v", D[12] = "\\f", D[13] = "\\r", D[27] = "\\e", D[34] = '\\"', D[92] = "\\\\", D[133] = "\\N", D[160] = "\\_", D[8232] = "\\L", D[8233] = "\\P";
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
  ], M = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
  function le(v, U) {
    var J, q, te, se, Se, ge, Ce;
    if (U === null) return {};
    for (J = {}, q = Object.keys(U), te = 0, se = q.length; te < se; te += 1)
      Se = q[te], ge = String(U[Se]), Se.slice(0, 2) === "!!" && (Se = "tag:yaml.org,2002:" + Se.slice(2)), Ce = v.compiledTypeMap.fallback[Se], Ce && o.call(Ce.styleAliases, ge) && (ge = Ce.styleAliases[ge]), J[Se] = ge;
    return J;
  }
  function we(v) {
    var U, J, q;
    if (U = v.toString(16).toUpperCase(), v <= 255)
      J = "x", q = 2;
    else if (v <= 65535)
      J = "u", q = 4;
    else if (v <= 4294967295)
      J = "U", q = 8;
    else
      throw new t("code point within a string may not be greater than 0xFFFFFFFF");
    return "\\" + J + e.repeat("0", q - U.length) + U;
  }
  var X = 1, L = 2;
  function W(v) {
    this.schema = v.schema || n, this.indent = Math.max(1, v.indent || 2), this.noArrayIndent = v.noArrayIndent || !1, this.skipInvalid = v.skipInvalid || !1, this.flowLevel = e.isNothing(v.flowLevel) ? -1 : v.flowLevel, this.styleMap = le(this.schema, v.styles || null), this.sortKeys = v.sortKeys || !1, this.lineWidth = v.lineWidth || 80, this.noRefs = v.noRefs || !1, this.noCompatMode = v.noCompatMode || !1, this.condenseFlow = v.condenseFlow || !1, this.quotingType = v.quotingType === '"' ? L : X, this.forceQuotes = v.forceQuotes || !1, this.replacer = typeof v.replacer == "function" ? v.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
  }
  function he(v, U) {
    for (var J = e.repeat(" ", U), q = 0, te = -1, se = "", Se, ge = v.length; q < ge; )
      te = v.indexOf(`
`, q), te === -1 ? (Se = v.slice(q), q = ge) : (Se = v.slice(q, te + 1), q = te + 1), Se.length && Se !== `
` && (se += J), se += Se;
    return se;
  }
  function I(v, U) {
    return `
` + e.repeat(" ", v.indent * U);
  }
  function G(v, U) {
    var J, q, te;
    for (J = 0, q = v.implicitTypes.length; J < q; J += 1)
      if (te = v.implicitTypes[J], te.resolve(U))
        return !0;
    return !1;
  }
  function oe(v) {
    return v === l || v === a;
  }
  function Y(v) {
    return 32 <= v && v <= 126 || 161 <= v && v <= 55295 && v !== 8232 && v !== 8233 || 57344 <= v && v <= 65533 && v !== i || 65536 <= v && v <= 1114111;
  }
  function K(v) {
    return Y(v) && v !== i && v !== c && v !== s;
  }
  function ie(v, U, J) {
    var q = K(v), te = q && !oe(v);
    return (
      // ns-plain-safe
      (J ? (
        // c = flow-in
        q
      ) : q && v !== w && v !== B && v !== ce && v !== fe && v !== Q) && v !== p && !(U === S && !te) || K(U) && !oe(U) && v === p || U === S && te
    );
  }
  function de(v) {
    return Y(v) && v !== i && !oe(v) && v !== _ && v !== N && v !== S && v !== w && v !== B && v !== ce && v !== fe && v !== Q && v !== p && v !== m && v !== b && v !== u && v !== $ && v !== C && v !== E && v !== g && v !== d && v !== h && v !== P && v !== pe;
  }
  function ve(v) {
    return !oe(v) && v !== S;
  }
  function Ne(v, U) {
    var J = v.charCodeAt(U), q;
    return J >= 55296 && J <= 56319 && U + 1 < v.length && (q = v.charCodeAt(U + 1), q >= 56320 && q <= 57343) ? (J - 55296) * 1024 + q - 56320 + 65536 : J;
  }
  function ee(v) {
    var U = /^\n* /;
    return U.test(v);
  }
  var Te = 1, He = 2, lt = 3, et = 4, Ue = 5;
  function A(v, U, J, q, te, se, Se, ge) {
    var Ce, je = 0, ut = null, mt = !1, tt = !1, $i = q !== -1, Fn = -1, Ln = de(Ne(v, 0)) && ve(Ne(v, v.length - 1));
    if (U || Se)
      for (Ce = 0; Ce < v.length; je >= 65536 ? Ce += 2 : Ce++) {
        if (je = Ne(v, Ce), !Y(je))
          return Ue;
        Ln = Ln && ie(je, ut, ge), ut = je;
      }
    else {
      for (Ce = 0; Ce < v.length; je >= 65536 ? Ce += 2 : Ce++) {
        if (je = Ne(v, Ce), je === s)
          mt = !0, $i && (tt = tt || // Foldable line = too long, and not more-indented.
          Ce - Fn - 1 > q && v[Fn + 1] !== " ", Fn = Ce);
        else if (!Y(je))
          return Ue;
        Ln = Ln && ie(je, ut, ge), ut = je;
      }
      tt = tt || $i && Ce - Fn - 1 > q && v[Fn + 1] !== " ";
    }
    return !mt && !tt ? Ln && !Se && !te(v) ? Te : se === L ? Ue : He : J > 9 && ee(v) ? Ue : Se ? se === L ? Ue : He : tt ? et : lt;
  }
  function k(v, U, J, q, te) {
    v.dump = function() {
      if (U.length === 0)
        return v.quotingType === L ? '""' : "''";
      if (!v.noCompatMode && (re.indexOf(U) !== -1 || M.test(U)))
        return v.quotingType === L ? '"' + U + '"' : "'" + U + "'";
      var se = v.indent * Math.max(1, J), Se = v.lineWidth === -1 ? -1 : Math.max(Math.min(v.lineWidth, 40), v.lineWidth - se), ge = q || v.flowLevel > -1 && J >= v.flowLevel;
      function Ce(je) {
        return G(v, je);
      }
      switch (A(
        U,
        ge,
        v.indent,
        Se,
        Ce,
        v.quotingType,
        v.forceQuotes && !q,
        te
      )) {
        case Te:
          return U;
        case He:
          return "'" + U.replace(/'/g, "''") + "'";
        case lt:
          return "|" + F(U, v.indent) + f(he(U, se));
        case et:
          return ">" + F(U, v.indent) + f(he(T(U, Se), se));
        case Ue:
          return '"' + z(U) + '"';
        default:
          throw new t("impossible error: invalid scalar style");
      }
    }();
  }
  function F(v, U) {
    var J = ee(v) ? String(U) : "", q = v[v.length - 1] === `
`, te = q && (v[v.length - 2] === `
` || v === `
`), se = te ? "+" : q ? "" : "-";
    return J + se + `
`;
  }
  function f(v) {
    return v[v.length - 1] === `
` ? v.slice(0, -1) : v;
  }
  function T(v, U) {
    for (var J = /(\n+)([^\n]*)/g, q = function() {
      var je = v.indexOf(`
`);
      return je = je !== -1 ? je : v.length, J.lastIndex = je, O(v.slice(0, je), U);
    }(), te = v[0] === `
` || v[0] === " ", se, Se; Se = J.exec(v); ) {
      var ge = Se[1], Ce = Se[2];
      se = Ce[0] === " ", q += ge + (!te && !se && Ce !== "" ? `
` : "") + O(Ce, U), te = se;
    }
    return q;
  }
  function O(v, U) {
    if (v === "" || v[0] === " ") return v;
    for (var J = / [^ ]/g, q, te = 0, se, Se = 0, ge = 0, Ce = ""; q = J.exec(v); )
      ge = q.index, ge - te > U && (se = Se > te ? Se : ge, Ce += `
` + v.slice(te, se), te = se + 1), Se = ge;
    return Ce += `
`, v.length - te > U && Se > te ? Ce += v.slice(te, Se) + `
` + v.slice(Se + 1) : Ce += v.slice(te), Ce.slice(1);
  }
  function z(v) {
    for (var U = "", J = 0, q, te = 0; te < v.length; J >= 65536 ? te += 2 : te++)
      J = Ne(v, te), q = D[J], !q && Y(J) ? (U += v[te], J >= 65536 && (U += v[te + 1])) : U += q || we(J);
    return U;
  }
  function j(v, U, J) {
    var q = "", te = v.tag, se, Se, ge;
    for (se = 0, Se = J.length; se < Se; se += 1)
      ge = J[se], v.replacer && (ge = v.replacer.call(J, String(se), ge)), (De(v, U, ge, !1, !1) || typeof ge > "u" && De(v, U, null, !1, !1)) && (q !== "" && (q += "," + (v.condenseFlow ? "" : " ")), q += v.dump);
    v.tag = te, v.dump = "[" + q + "]";
  }
  function Z(v, U, J, q) {
    var te = "", se = v.tag, Se, ge, Ce;
    for (Se = 0, ge = J.length; Se < ge; Se += 1)
      Ce = J[Se], v.replacer && (Ce = v.replacer.call(J, String(Se), Ce)), (De(v, U + 1, Ce, !0, !0, !1, !0) || typeof Ce > "u" && De(v, U + 1, null, !0, !0, !1, !0)) && ((!q || te !== "") && (te += I(v, U)), v.dump && s === v.dump.charCodeAt(0) ? te += "-" : te += "- ", te += v.dump);
    v.tag = se, v.dump = te || "[]";
  }
  function H(v, U, J) {
    var q = "", te = v.tag, se = Object.keys(J), Se, ge, Ce, je, ut;
    for (Se = 0, ge = se.length; Se < ge; Se += 1)
      ut = "", q !== "" && (ut += ", "), v.condenseFlow && (ut += '"'), Ce = se[Se], je = J[Ce], v.replacer && (je = v.replacer.call(J, Ce, je)), De(v, U, Ce, !1, !1) && (v.dump.length > 1024 && (ut += "? "), ut += v.dump + (v.condenseFlow ? '"' : "") + ":" + (v.condenseFlow ? "" : " "), De(v, U, je, !1, !1) && (ut += v.dump, q += ut));
    v.tag = te, v.dump = "{" + q + "}";
  }
  function me(v, U, J, q) {
    var te = "", se = v.tag, Se = Object.keys(J), ge, Ce, je, ut, mt, tt;
    if (v.sortKeys === !0)
      Se.sort();
    else if (typeof v.sortKeys == "function")
      Se.sort(v.sortKeys);
    else if (v.sortKeys)
      throw new t("sortKeys must be a boolean or a function");
    for (ge = 0, Ce = Se.length; ge < Ce; ge += 1)
      tt = "", (!q || te !== "") && (tt += I(v, U)), je = Se[ge], ut = J[je], v.replacer && (ut = v.replacer.call(J, je, ut)), De(v, U + 1, je, !0, !0, !0) && (mt = v.tag !== null && v.tag !== "?" || v.dump && v.dump.length > 1024, mt && (v.dump && s === v.dump.charCodeAt(0) ? tt += "?" : tt += "? "), tt += v.dump, mt && (tt += I(v, U)), De(v, U + 1, ut, !0, mt) && (v.dump && s === v.dump.charCodeAt(0) ? tt += ":" : tt += ": ", tt += v.dump, te += tt));
    v.tag = se, v.dump = te || "{}";
  }
  function Re(v, U, J) {
    var q, te, se, Se, ge, Ce;
    for (te = J ? v.explicitTypes : v.implicitTypes, se = 0, Se = te.length; se < Se; se += 1)
      if (ge = te[se], (ge.instanceOf || ge.predicate) && (!ge.instanceOf || typeof U == "object" && U instanceof ge.instanceOf) && (!ge.predicate || ge.predicate(U))) {
        if (J ? ge.multi && ge.representName ? v.tag = ge.representName(U) : v.tag = ge.tag : v.tag = "?", ge.represent) {
          if (Ce = v.styleMap[ge.tag] || ge.defaultStyle, r.call(ge.represent) === "[object Function]")
            q = ge.represent(U, Ce);
          else if (o.call(ge.represent, Ce))
            q = ge.represent[Ce](U, Ce);
          else
            throw new t("!<" + ge.tag + '> tag resolver accepts not "' + Ce + '" style');
          v.dump = q;
        }
        return !0;
      }
    return !1;
  }
  function De(v, U, J, q, te, se, Se) {
    v.tag = null, v.dump = J, Re(v, J, !1) || Re(v, J, !0);
    var ge = r.call(v.dump), Ce = q, je;
    q && (q = v.flowLevel < 0 || v.flowLevel > U);
    var ut = ge === "[object Object]" || ge === "[object Array]", mt, tt;
    if (ut && (mt = v.duplicates.indexOf(J), tt = mt !== -1), (v.tag !== null && v.tag !== "?" || tt || v.indent !== 2 && U > 0) && (te = !1), tt && v.usedDuplicates[mt])
      v.dump = "*ref_" + mt;
    else {
      if (ut && tt && !v.usedDuplicates[mt] && (v.usedDuplicates[mt] = !0), ge === "[object Object]")
        q && Object.keys(v.dump).length !== 0 ? (me(v, U, v.dump, te), tt && (v.dump = "&ref_" + mt + v.dump)) : (H(v, U, v.dump), tt && (v.dump = "&ref_" + mt + " " + v.dump));
      else if (ge === "[object Array]")
        q && v.dump.length !== 0 ? (v.noArrayIndent && !Se && U > 0 ? Z(v, U - 1, v.dump, te) : Z(v, U, v.dump, te), tt && (v.dump = "&ref_" + mt + v.dump)) : (j(v, U, v.dump), tt && (v.dump = "&ref_" + mt + " " + v.dump));
      else if (ge === "[object String]")
        v.tag !== "?" && k(v, v.dump, U, se, Ce);
      else {
        if (ge === "[object Undefined]")
          return !1;
        if (v.skipInvalid) return !1;
        throw new t("unacceptable kind of an object to dump " + ge);
      }
      v.tag !== null && v.tag !== "?" && (je = encodeURI(
        v.tag[0] === "!" ? v.tag.slice(1) : v.tag
      ).replace(/!/g, "%21"), v.tag[0] === "!" ? je = "!" + je : je.slice(0, 18) === "tag:yaml.org,2002:" ? je = "!!" + je.slice(18) : je = "!<" + je + ">", v.dump = je + " " + v.dump);
    }
    return !0;
  }
  function qe(v, U) {
    var J = [], q = [], te, se;
    for (Ee(v, J, q), te = 0, se = q.length; te < se; te += 1)
      U.duplicates.push(J[q[te]]);
    U.usedDuplicates = new Array(se);
  }
  function Ee(v, U, J) {
    var q, te, se;
    if (v !== null && typeof v == "object")
      if (te = U.indexOf(v), te !== -1)
        J.indexOf(te) === -1 && J.push(te);
      else if (U.push(v), Array.isArray(v))
        for (te = 0, se = v.length; te < se; te += 1)
          Ee(v[te], U, J);
      else
        for (q = Object.keys(v), te = 0, se = q.length; te < se; te += 1)
          Ee(v[q[te]], U, J);
  }
  function dt(v, U) {
    U = U || {};
    var J = new W(U);
    J.noRefs || qe(v, J);
    var q = v;
    return J.replacer && (q = J.replacer.call({ "": q }, "", q)), De(J, 0, q, !0, !0) ? J.dump + `
` : "";
  }
  return yc.dump = dt, yc;
}
var ud;
function P_() {
  if (ud) return _t;
  ud = 1;
  var e = O_(), t = k_();
  function n(r, o) {
    return function() {
      throw new Error("Function yaml." + r + " is removed in js-yaml 4. Use yaml." + o + " instead, which is now safe by default.");
    };
  }
  return _t.Type = Rt(), _t.Schema = Kh(), _t.FAILSAFE_SCHEMA = Qh(), _t.JSON_SCHEMA = om(), _t.CORE_SCHEMA = im(), _t.DEFAULT_SCHEMA = su(), _t.load = e.load, _t.loadAll = e.loadAll, _t.dump = t.dump, _t.YAMLException = Ni(), _t.types = {
    binary: cm(),
    float: rm(),
    map: Jh(),
    null: em(),
    pairs: um(),
    set: fm(),
    timestamp: am(),
    bool: tm(),
    int: nm(),
    merge: sm(),
    omap: lm(),
    seq: Xh(),
    str: Zh()
  }, _t.safeLoad = n("safeLoad", "load"), _t.safeLoadAll = n("safeLoadAll", "loadAll"), _t.safeDump = n("safeDump", "dump"), _t;
}
var Nt = at && at.__assign || function() {
  return Nt = Object.assign || function(e) {
    for (var t, n = 1, r = arguments.length; n < r; n++) {
      t = arguments[n];
      for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, Nt.apply(this, arguments);
}, N_ = at && at.__createBinding || (Object.create ? function(e, t, n, r) {
  r === void 0 && (r = n);
  var o = Object.getOwnPropertyDescriptor(t, n);
  (!o || ("get" in o ? !t.__esModule : o.writable || o.configurable)) && (o = { enumerable: !0, get: function() {
    return t[n];
  } }), Object.defineProperty(e, r, o);
} : function(e, t, n, r) {
  r === void 0 && (r = n), e[r] = t[n];
}), M_ = at && at.__setModuleDefault || (Object.create ? function(e, t) {
  Object.defineProperty(e, "default", { enumerable: !0, value: t });
} : function(e, t) {
  e.default = t;
}), I_ = at && at.__importStar || function(e) {
  if (e && e.__esModule) return e;
  var t = {};
  if (e != null) for (var n in e) n !== "default" && Object.prototype.hasOwnProperty.call(e, n) && N_(t, e, n);
  return M_(t, e), t;
}, Wi = at && at.__awaiter || function(e, t, n, r) {
  function o(i) {
    return i instanceof n ? i : new n(function(a) {
      a(i);
    });
  }
  return new (n || (n = Promise))(function(i, a) {
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
      u.done ? i(u.value) : o(u.value).then(s, c);
    }
    l((r = r.apply(e, t || [])).next());
  });
}, Hi = at && at.__generator || function(e, t) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, o, i, a;
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
      if (r = 1, o && (i = l[0] & 2 ? o.return : l[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, l[1])).done) return i;
      switch (o = 0, i && (l = [l[0] & 2, i.value]), l[0]) {
        case 0:
        case 1:
          i = l;
          break;
        case 4:
          return n.label++, { value: l[1], done: !1 };
        case 5:
          n.label++, o = l[1], l = [0];
          continue;
        case 7:
          l = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            n = 0;
            continue;
          }
          if (l[0] === 3 && (!i || l[1] > i[0] && l[1] < i[3])) {
            n.label = l[1];
            break;
          }
          if (l[0] === 6 && n.label < i[1]) {
            n.label = i[1], i = l;
            break;
          }
          if (i && n.label < i[2]) {
            n.label = i[2], n.ops.push(l);
            break;
          }
          i[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      l = t.call(e, n);
    } catch (u) {
      l = [6, u], o = 0;
    } finally {
      r = i = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}, Vn = at && at.__values || function(e) {
  var t = typeof Symbol == "function" && Symbol.iterator, n = t && e[t], r = 0;
  if (n) return n.call(e);
  if (e && typeof e.length == "number") return {
    next: function() {
      return e && r >= e.length && (e = void 0), { value: e && e[r++], done: !e };
    }
  };
  throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, wn = at && at.__read || function(e, t) {
  var n = typeof Symbol == "function" && e[Symbol.iterator];
  if (!n) return e;
  var r = n.call(e), o, i = [], a;
  try {
    for (; (t === void 0 || t-- > 0) && !(o = r.next()).done; ) i.push(o.value);
  } catch (s) {
    a = { error: s };
  } finally {
    try {
      o && !o.done && (n = r.return) && n.call(r);
    } finally {
      if (a) throw a.error;
    }
  }
  return i;
}, qi = at && at.__spreadArray || function(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}, dm = at && at.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ni, "__esModule", { value: !0 });
ni.OpenAPIClientAxios = void 0;
var D_ = dm(p_), fd = dm(Wh), dd = Hh, dr = au, vc = "default", j_ = (
  /** @class */
  function() {
    function e(t) {
      var n, r = this;
      this.getClient = function() {
        return Wi(r, void 0, void 0, function() {
          return Hi(this, function(i) {
            return this.initialized ? [2, this.instance] : [2, this.init()];
          });
        });
      }, this.init = function() {
        return Wi(r, void 0, void 0, function() {
          return Hi(this, function(i) {
            switch (i.label) {
              case 0:
                return [4, this.loadDocument()];
              case 1:
                return i.sent(), this.definition = (0, dd.dereferenceSync)(this.document), this.instance = this.createAxiosInstance(), this.initialized = !0, [2, this.instance];
            }
          });
        });
      }, this.initSync = function() {
        if (typeof r.inputDocument != "object")
          throw new Error(".initSync() can't be called with a non-object definition. Please use .init()");
        return r.document = r.inputDocument, r.definition = (0, dd.dereferenceSync)(r.document), r.instance = r.createAxiosInstance(), r.initialized = !0, r.instance;
      }, this.getAxiosInstance = function() {
        var i = D_.default.create(r.axiosConfigDefaults);
        return i;
      }, this.createAxiosInstance = function() {
        var i, a, s = r.getAxiosInstance(), c = r.getBaseURL();
        c && !r.axiosConfigDefaults.baseURL && (s.defaults.baseURL = c);
        var l = r.getOperations();
        try {
          for (var u = Vn(l), d = u.next(); !d.done; d = u.next()) {
            var p = d.value, h = p.operationId;
            h && (s[r.transformOperationName(h)] = r.createOperationMethod(p));
          }
        } catch (b) {
          i = { error: b };
        } finally {
          try {
            d && !d.done && (a = u.return) && a.call(u);
          } finally {
            if (i) throw i.error;
          }
        }
        s.paths = {};
        var m = function(b) {
          if (r.definition.paths[b]) {
            s.paths[b] || (s.paths[b] = {});
            var w = r.definition.paths[b], _ = function(C) {
              if (w[C] && Object.values(dr.HttpMethod).includes(C)) {
                var E = C, N = r.getOperations().find(function(P) {
                  return P.method === E && P.path === b;
                });
                s.paths[b][E] = r.createOperationMethod(N);
              }
            };
            for (var S in w)
              _(S);
          }
        };
        for (var g in r.definition.paths)
          m(g);
        return s.api = r, s;
      }, this.getBaseURL = function(i) {
        var a, s, c, l;
        if (r.definition) {
          if (i && (typeof i == "string" && (i = r.getOperation(i)), i.servers && i.servers[0]))
            return i.servers[0].url;
          var u;
          if (typeof r.defaultServer == "number")
            r.definition.servers && r.definition.servers[r.defaultServer] && (u = r.definition.servers[r.defaultServer]);
          else if (typeof r.defaultServer == "string")
            try {
              for (var d = Vn(r.definition.servers), p = d.next(); !p.done; p = d.next()) {
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
            var m = u.url, g = u.variables, b = (0, fd.default)(m);
            if (!b.names.length)
              return m;
            var w = {};
            try {
              for (var _ = Vn(b.names), S = _.next(); !S.done; S = _.next()) {
                var C = S.value, E = r.baseURLVariables[C];
                if (E !== void 0 && g[C].enum) {
                  if (typeof E == "number") {
                    var N = g[C].enum[E];
                    if (N)
                      w[C] = N;
                    else
                      throw new Error("index ".concat(E, " out of range for enum of baseURL variable: ").concat(C, ";               enum max index is ").concat(g[C].enum.length - 1));
                  } else if (typeof E == "string")
                    if (g[C].enum.includes(E))
                      w[C] = E;
                    else
                      throw new Error("".concat(E, " is not a valid entry for baseURL variable ").concat(C, ";                 variable must be of the following: ").concat(g[C].enum.join(", ")));
                } else
                  w[C] = g[C].default;
              }
            } catch (P) {
              c = { error: P };
            } finally {
              try {
                S && !S.done && (l = _.return) && l.call(_);
              } finally {
                if (c) throw c.error;
              }
            }
            return b.path(w);
          }
        }
      }, this.getAxiosConfigForOperation = function(i, a) {
        typeof i == "string" && (i = r.getOperation(i));
        var s = r.getRequestConfigForOperation(i, a), c = {
          method: s.method,
          url: s.path,
          data: s.payload,
          params: s.query,
          headers: s.headers
        }, l = i.servers;
        l && l[0] && (c.baseURL = l[0].url);
        var u = wn(a, 3), d = u[2];
        return Nt(Nt(Nt({}, c), d), { params: Nt(Nt({}, c == null ? void 0 : c.params), d == null ? void 0 : d.params), headers: Nt(Nt({}, c == null ? void 0 : c.headers), d == null ? void 0 : d.headers) });
      }, this.getRequestConfigForOperation = function(i, a) {
        var s, c, l, u, d, p, h, m, g, b;
        typeof i == "string" && (i = r.getOperation(i));
        var w = {}, _ = new URLSearchParams(), S = {}, C = {}, E = {}, N = i.parameters || [], P = function(Ue, A, k) {
          var F, f;
          switch (k) {
            case dr.ParamType.Path:
              w[Ue] = A;
              break;
            case dr.ParamType.Query:
              if (Array.isArray(A))
                try {
                  for (var T = Vn(A), O = T.next(); !O.done; O = T.next()) {
                    var z = O.value;
                    _.append(Ue, z);
                  }
                } catch (j) {
                  F = { error: j };
                } finally {
                  try {
                    O && !O.done && (f = T.return) && f.call(T);
                  } finally {
                    if (F) throw F.error;
                  }
                }
              else
                _.append(Ue, A);
              S[Ue] = A;
              break;
            case dr.ParamType.Header:
              C[Ue] = A;
              break;
            case dr.ParamType.Cookie:
              E[Ue] = A;
              break;
          }
        }, B = function(Ue) {
          var A = N.find(function(k) {
            var F = k.name;
            return F === Ue;
          });
          return A ? A.in : dr.ParamType.Query;
        }, ce = function() {
          var Ue = N.find(function(k) {
            var F = k.required;
            return F === !0;
          });
          if (Ue)
            return Ue;
          var A = N[0];
          if (A)
            return A;
        }, pe = wn(a, 2), fe = pe[0], $ = pe[1];
        if (Array.isArray(fe))
          try {
            for (var Q = Vn(fe), D = Q.next(); !D.done; D = Q.next()) {
              var re = D.value;
              P(re.name, re.value, re.in || B(re.name));
            }
          } catch (Ue) {
            s = { error: Ue };
          } finally {
            try {
              D && !D.done && (c = Q.return) && c.call(Q);
            } finally {
              if (s) throw s.error;
            }
          }
        else if (typeof fe == "object")
          for (var M in fe)
            fe[M] !== void 0 && P(M, fe[M], B(M));
        else if (fe) {
          var le = ce();
          if (!le)
            throw new Error("No parameters found for operation ".concat(i.operationId));
          P(le.name, fe, le.in);
        }
        var we = (0, fd.default)(i.path);
        try {
          for (var X = Vn(we.names), L = X.next(); !L.done; L = X.next()) {
            var W = L.value, he = w[W];
            w[W] = "".concat(he);
          }
        } catch (Ue) {
          l = { error: Ue };
        } finally {
          try {
            L && !L.done && (u = X.return) && u.call(X);
          } finally {
            if (l) throw l.error;
          }
        }
        var I = we.path(w), G = _.toString(), oe = "".concat(r.getBaseURL(i)).concat(I).concat(G ? "?".concat(G) : ""), Y = r.client.defaults.headers;
        try {
          for (var K = Vn(Object.entries((g = Y.common) !== null && g !== void 0 ? g : {})), ie = K.next(); !ie.done; ie = K.next()) {
            var de = wn(ie.value, 2), ve = de[0], Ne = de[1];
            C[ve] = Ne;
          }
        } catch (Ue) {
          d = { error: Ue };
        } finally {
          try {
            ie && !ie.done && (p = K.return) && p.call(K);
          } finally {
            if (d) throw d.error;
          }
        }
        if (r.applyMethodCommonHeaders) {
          var ee = (b = Y[i.method]) !== null && b !== void 0 ? b : {};
          try {
            for (var Te = Vn(Object.entries(ee)), He = Te.next(); !He.done; He = Te.next()) {
              var lt = wn(He.value, 2), ve = lt[0], Ne = lt[1];
              C[ve] = Ne;
            }
          } catch (Ue) {
            h = { error: Ue };
          } finally {
            try {
              He && !He.done && (m = Te.return) && m.call(Te);
            } finally {
              if (h) throw h.error;
            }
          }
        }
        var et = {
          method: i.method,
          url: oe,
          path: I,
          pathParams: w,
          query: S,
          queryString: G,
          headers: C,
          cookies: E,
          payload: $
        };
        return et;
      }, this.getOperations = function() {
        var i, a = ((i = r.definition) === null || i === void 0 ? void 0 : i.paths) || {};
        return Object.entries(a).flatMap(function(s) {
          var c = wn(s, 2), l = c[0], u = c[1];
          return Object.values(dr.HttpMethod).map(function(d) {
            return { path: l, method: d, operation: u[d] };
          }).filter(function(d) {
            var p = d.operation;
            return p;
          }).map(function(d) {
            var p, h = d.operation, m = d.method, g = Nt(Nt({}, typeof h == "object" ? h : {}), { path: l, method: m });
            return u.parameters && (g.parameters = qi(qi([], wn(g.parameters || []), !1), wn(u.parameters), !1)), u.servers && (g.servers = qi(qi([], wn(g.servers || []), !1), wn(u.servers), !1)), g.security = (p = g.security) !== null && p !== void 0 ? p : r.definition.security, g;
          });
        });
      }, this.getOperation = function(i) {
        return r.getOperations().find(function(a) {
          return a.operationId === i;
        });
      }, this.createOperationMethod = function(i) {
        var a = function() {
          for (var s = [], c = 0; c < arguments.length; c++)
            s[c] = arguments[c];
          return Wi(r, void 0, void 0, function() {
            var l, u;
            return Hi(this, function(d) {
              return l = this.getAxiosConfigForOperation(i, s), u = this.getRunner(i.operationId), [2, u.runRequest(l, i, u.context)];
            });
          });
        };
        return r.transformOperationMethod(a, i);
      };
      var o = Nt(Nt({ quick: !1, withServer: 0, baseURLVariables: {}, transformOperationName: function(i) {
        return i;
      }, transformOperationMethod: function(i) {
        return i;
      }, axiosRunner: function(i) {
        return r.client.request(i);
      }, applyMethodCommonHeaders: !1 }, t), { axiosConfigDefaults: Nt({}, t.axiosConfigDefaults || {}) });
      this.inputDocument = o.definition, this.quick = o.quick, this.axiosConfigDefaults = o.axiosConfigDefaults, this.defaultServer = o.withServer, this.baseURLVariables = o.baseURLVariables, this.applyMethodCommonHeaders = o.applyMethodCommonHeaders, this.transformOperationName = o.transformOperationName, this.transformOperationMethod = o.transformOperationMethod, this.runners = (n = {}, n[vc] = { runRequest: o.axiosRunner }, n);
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
      return Wi(this, void 0, void 0, function() {
        var n, r, o, i;
        return Hi(this, function(a) {
          switch (a.label) {
            case 0:
              return typeof this.inputDocument != "object" ? [3, 1] : (this.document = this.inputDocument, [3, 6]);
            case 1:
              return n = this.getAxiosInstance(), [4, n.get(this.inputDocument)];
            case 2:
              return r = a.sent(), typeof r.data != "object" ? [3, 3] : (this.document = r.data, [3, 6]);
            case 3:
              return typeof r.data == "string" && (!((t = r.headers["content-type"]) === null || t === void 0) && t.match(/ya?ml/)) ? [4, Promise.resolve().then(function() {
                return I_(P_());
              })] : [3, 5];
            case 4:
              return o = a.sent(), this.document = o.load(r.data), [3, 6];
            case 5:
              throw i = new Error("Invalid response fetching OpenAPI definition: ".concat(r)), i.response = r, i;
            case 6:
              return [2, this.document];
          }
        });
      });
    }, e.prototype.registerRunner = function(t, n) {
      this.runners[n ?? vc] = t;
    }, e.prototype.getRunner = function(t) {
      var n;
      return (n = this.runners[t]) !== null && n !== void 0 ? n : this.runners[vc];
    }, e;
  }()
);
ni.OpenAPIClientAxios = j_;
(function(e) {
  var t = at && at.__createBinding || (Object.create ? function(o, i, a, s) {
    s === void 0 && (s = a);
    var c = Object.getOwnPropertyDescriptor(i, a);
    (!c || ("get" in c ? !i.__esModule : c.writable || c.configurable)) && (c = { enumerable: !0, get: function() {
      return i[a];
    } }), Object.defineProperty(o, s, c);
  } : function(o, i, a, s) {
    s === void 0 && (s = a), o[s] = i[a];
  }), n = at && at.__exportStar || function(o, i) {
    for (var a in o) a !== "default" && !Object.prototype.hasOwnProperty.call(i, a) && t(i, o, a);
  };
  Object.defineProperty(e, "__esModule", { value: !0 });
  var r = ni;
  e.default = r.OpenAPIClientAxios, n(ni, e), n(au, e);
})(xh);
const F_ = /* @__PURE__ */ Kp(xh), Mt = class Mt {
  constructor() {
  }
  static configure(t) {
    Mt.serverUrl = t;
  }
  static async getInstance() {
    if (!Mt.serverUrl)
      throw new Error("ApiClient not configured. Please call ApiClient.configure(serverUrl) before using it.");
    return Mt.instance ? Mt.instance : (Mt.initializing || (Mt.initializing = (async () => {
      const t = new F_({
        definition: `${this.serverUrl}/wd-media-api/docs.jsonopenapi`,
        transformOperationMethod: (r, o) => (i, a, s) => (o.method === "patch" && (s = s || {}, s.headers = {
          "Content-Type": "application/merge-patch+json",
          ...s.headers
        }), r(i, a, s))
      });
      t.withServer({ url: String(this.serverUrl) });
      const n = await t.init();
      return Mt.instance = n, Mt.initializing = null, n;
    })()), Mt.initializing);
  }
};
Wr(Mt, "instance", null), Wr(Mt, "initializing", null), Wr(Mt, "serverUrl", null);
let Tn = Mt;
const L_ = 1, z_ = 1e6;
let bc = 0;
function $_() {
  return bc = (bc + 1) % Number.MAX_SAFE_INTEGER, bc.toString();
}
const xc = /* @__PURE__ */ new Map(), pd = (e) => {
  if (xc.has(e))
    return;
  const t = setTimeout(() => {
    xc.delete(e), Go({
      type: "REMOVE_TOAST",
      toastId: e
    });
  }, z_);
  xc.set(e, t);
}, V_ = (e, t) => {
  switch (t.type) {
    case "ADD_TOAST":
      return {
        ...e,
        toasts: [t.toast, ...e.toasts].slice(0, L_)
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
      return n ? pd(n) : e.toasts.forEach((r) => {
        pd(r.id);
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
}, la = [];
let ua = { toasts: [] };
function Go(e) {
  ua = V_(ua, e), la.forEach((t) => {
    t(ua);
  });
}
function pm({ ...e }) {
  const t = $_(), n = (o) => Go({
    type: "UPDATE_TOAST",
    toast: { ...o, id: t }
  }), r = () => Go({ type: "DISMISS_TOAST", toastId: t });
  return Go({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: t,
      open: !0,
      onOpenChange: (o) => {
        o || r();
      }
    }
  }), {
    id: t,
    dismiss: r,
    update: n
  };
}
function hm() {
  const [e, t] = x.useState(ua);
  return x.useEffect(() => (la.push(t), () => {
    const n = la.indexOf(t);
    n > -1 && la.splice(n, 1);
  }), [e]), {
    ...e,
    toast: pm,
    dismiss: (n) => Go({ type: "DISMISS_TOAST", toastId: n })
  };
}
const hd = (e, t = "default", n = void 0) => {
  pm({
    title: e,
    description: n,
    variant: t
  });
}, U_ = {
  items: [],
  status: "idle",
  error: null,
  view: null,
  updateStatus: "idle",
  updateError: null
}, _r = Ri(
  "fetch",
  async (e) => (await (await Tn.getInstance()).getMedias(e, null, {
    headers: {
      Accept: "application/ld+json"
    }
  })).data
), mm = async (e) => (await (await Tn.getInstance()).getMedia({ id: String(e) }, null, {})).data;
Ri(
  "fetchOne",
  mm
);
const fa = Ri(
  "patch",
  async (e) => (await (await Tn.getInstance()).patchMedia(e.id, e)).data
), da = Ri(
  "patchFile",
  async (e) => {
    const t = new FormData();
    return t.append("file", e.file), (await (await Tn.getInstance()).patchMediaFile(e.id, t, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })).data;
  }
), pa = Ri(
  "createMedia",
  async (e) => {
    const t = new FormData();
    return t.append("file", e.file), (await (await Tn.getInstance()).postMedia(null, t, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })).data;
  }
), gm = bh({
  name: "media",
  initialState: U_,
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
    e.addCase(_r.pending, (t) => {
      t.status = "loading", t.view = null;
    }).addCase(_r.fulfilled, (t, n) => {
      t.status = "succeeded", t.items = n.payload["hydra:member"], t.view = n.payload["hydra:view"];
    }).addCase(_r.rejected, (t, n) => {
      t.status = "failed", t.view = null, t.error = n.error.message || "Failed to fetch media items";
    }), e.addCase(fa.pending, (t) => {
      t.updateStatus = "loading";
    }).addCase(fa.fulfilled, (t, n) => {
      t.updateStatus = "succeeded";
      const r = t.items.findIndex((o) => o.id === n.payload.id);
      r !== -1 && (t.items[r] = n.payload);
    }).addCase(fa.rejected, (t, n) => {
      t.updateStatus = "failed", t.updateError = n.error.message || "Failed to update media item";
    }), e.addCase(da.pending, (t) => {
      t.updateStatus = "loading";
    }).addCase(da.fulfilled, (t, n) => {
      t.updateStatus = "succeeded";
      const r = t.items.findIndex((o) => o.id === n.payload.id);
      r !== -1 && (t.items[r] = n.payload);
    }).addCase(da.rejected, (t, n) => {
      t.updateStatus = "failed", t.updateError = n.error.message || "Failed to update media file item";
    }), e.addCase(pa.pending, (t) => {
      t.updateStatus = "loading";
    }).addCase(pa.fulfilled, (t) => {
      t.updateStatus = "succeeded", hd("Media ajouté");
    }).addCase(pa.rejected, (t) => {
      t.updateStatus = "failed", hd("Une erreur est survenu pendant la création !", "destructive");
    });
  }
});
gm.actions;
const B_ = gm.reducer, W_ = {
  currentMedia: null,
  picker: !1
}, ym = bh({
  name: "main",
  initialState: W_,
  reducers: {
    setCurrentMedia: (e, t) => {
      e.currentMedia = t.payload;
    },
    setPicker: (e, t) => {
      e.picker = t.payload;
    }
  }
}), {
  setCurrentMedia: dl,
  setPicker: H_
} = ym.actions, q_ = ym.reducer, vm = y0({
  reducer: {
    main: q_,
    media: B_
  }
}), bm = async (e) => {
  Tn.configure(e), await Tn.getInstance();
};
function xm(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = xm(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function Y_() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = xm(e)) && (r && (r += " "), r += t);
  return r;
}
const cu = "-";
function G_(e) {
  const t = Z_(e), {
    conflictingClassGroups: n,
    conflictingClassGroupModifiers: r
  } = e;
  function o(a) {
    const s = a.split(cu);
    return s[0] === "" && s.length !== 1 && s.shift(), wm(s, t) || K_(a);
  }
  function i(a, s) {
    const c = n[a] || [];
    return s && r[a] ? [...c, ...r[a]] : c;
  }
  return {
    getClassGroupId: o,
    getConflictingClassGroupIds: i
  };
}
function wm(e, t) {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const n = e[0], r = t.nextPart.get(n), o = r ? wm(e.slice(1), r) : void 0;
  if (o)
    return o;
  if (t.validators.length === 0)
    return;
  const i = e.join(cu);
  return (a = t.validators.find(({
    validator: s
  }) => s(i))) == null ? void 0 : a.classGroupId;
}
const md = /^\[(.+)\]$/;
function K_(e) {
  if (md.test(e)) {
    const t = md.exec(e)[1], n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (n)
      return "arbitrary.." + n;
  }
}
function Z_(e) {
  const {
    theme: t,
    prefix: n
  } = e, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return J_(Object.entries(e.classGroups), n).forEach(([i, a]) => {
    pl(a, r, i, t);
  }), r;
}
function pl(e, t, n, r) {
  e.forEach((o) => {
    if (typeof o == "string") {
      const i = o === "" ? t : gd(t, o);
      i.classGroupId = n;
      return;
    }
    if (typeof o == "function") {
      if (X_(o)) {
        pl(o(r), t, n, r);
        return;
      }
      t.validators.push({
        validator: o,
        classGroupId: n
      });
      return;
    }
    Object.entries(o).forEach(([i, a]) => {
      pl(a, gd(t, i), n, r);
    });
  });
}
function gd(e, t) {
  let n = e;
  return t.split(cu).forEach((r) => {
    n.nextPart.has(r) || n.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), n = n.nextPart.get(r);
  }), n;
}
function X_(e) {
  return e.isThemeGetter;
}
function J_(e, t) {
  return t ? e.map(([n, r]) => {
    const o = r.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([a, s]) => [t + a, s])) : i);
    return [n, o];
  }) : e;
}
function Q_(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  function o(i, a) {
    n.set(i, a), t++, t > e && (t = 0, r = n, n = /* @__PURE__ */ new Map());
  }
  return {
    get(i) {
      let a = n.get(i);
      if (a !== void 0)
        return a;
      if ((a = r.get(i)) !== void 0)
        return o(i, a), a;
    },
    set(i, a) {
      n.has(i) ? n.set(i, a) : o(i, a);
    }
  };
}
const _m = "!";
function eE(e) {
  const t = e.separator, n = t.length === 1, r = t[0], o = t.length;
  return function(a) {
    const s = [];
    let c = 0, l = 0, u;
    for (let g = 0; g < a.length; g++) {
      let b = a[g];
      if (c === 0) {
        if (b === r && (n || a.slice(g, g + o) === t)) {
          s.push(a.slice(l, g)), l = g + o;
          continue;
        }
        if (b === "/") {
          u = g;
          continue;
        }
      }
      b === "[" ? c++ : b === "]" && c--;
    }
    const d = s.length === 0 ? a : a.substring(l), p = d.startsWith(_m), h = p ? d.substring(1) : d, m = u && u > l ? u - l : void 0;
    return {
      modifiers: s,
      hasImportantModifier: p,
      baseClassName: h,
      maybePostfixModifierPosition: m
    };
  };
}
function tE(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let n = [];
  return e.forEach((r) => {
    r[0] === "[" ? (t.push(...n.sort(), r), n = []) : n.push(r);
  }), t.push(...n.sort()), t;
}
function nE(e) {
  return {
    cache: Q_(e.cacheSize),
    splitModifiers: eE(e),
    ...G_(e)
  };
}
const rE = /\s+/;
function oE(e, t) {
  const {
    splitModifiers: n,
    getClassGroupId: r,
    getConflictingClassGroupIds: o
  } = t, i = /* @__PURE__ */ new Set();
  return e.trim().split(rE).map((a) => {
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
    const h = tE(s).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? h + _m : h,
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
    return i.has(u) ? !1 : (i.add(u), o(c, l).forEach((d) => i.add(s + d)), !0);
  }).reverse().map((a) => a.originalClassName).join(" ");
}
function iE() {
  let e = 0, t, n, r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Em(t)) && (r && (r += " "), r += n);
  return r;
}
function Em(e) {
  if (typeof e == "string")
    return e;
  let t, n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Em(e[r])) && (n && (n += " "), n += t);
  return n;
}
function aE(e, ...t) {
  let n, r, o, i = a;
  function a(c) {
    const l = t.reduce((u, d) => d(u), e());
    return n = nE(l), r = n.cache.get, o = n.cache.set, i = s, s(c);
  }
  function s(c) {
    const l = r(c);
    if (l)
      return l;
    const u = oE(c, n);
    return o(c, u), u;
  }
  return function() {
    return i(iE.apply(null, arguments));
  };
}
function it(e) {
  const t = (n) => n[e] || [];
  return t.isThemeGetter = !0, t;
}
const Sm = /^\[(?:([a-z-]+):)?(.+)\]$/i, sE = /^\d+\/\d+$/, cE = /* @__PURE__ */ new Set(["px", "full", "screen"]), lE = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, uE = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, fE = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/, dE = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, pE = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function _n(e) {
  return gr(e) || cE.has(e) || sE.test(e);
}
function Un(e) {
  return So(e, "length", wE);
}
function gr(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Yi(e) {
  return So(e, "number", gr);
}
function No(e) {
  return !!e && Number.isInteger(Number(e));
}
function hE(e) {
  return e.endsWith("%") && gr(e.slice(0, -1));
}
function ze(e) {
  return Sm.test(e);
}
function Bn(e) {
  return lE.test(e);
}
const mE = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function gE(e) {
  return So(e, mE, Cm);
}
function yE(e) {
  return So(e, "position", Cm);
}
const vE = /* @__PURE__ */ new Set(["image", "url"]);
function bE(e) {
  return So(e, vE, EE);
}
function xE(e) {
  return So(e, "", _E);
}
function Mo() {
  return !0;
}
function So(e, t, n) {
  const r = Sm.exec(e);
  return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1;
}
function wE(e) {
  return uE.test(e) && !fE.test(e);
}
function Cm() {
  return !1;
}
function _E(e) {
  return dE.test(e);
}
function EE(e) {
  return pE.test(e);
}
function SE() {
  const e = it("colors"), t = it("spacing"), n = it("blur"), r = it("brightness"), o = it("borderColor"), i = it("borderRadius"), a = it("borderSpacing"), s = it("borderWidth"), c = it("contrast"), l = it("grayscale"), u = it("hueRotate"), d = it("invert"), p = it("gap"), h = it("gradientColorStops"), m = it("gradientColorStopPositions"), g = it("inset"), b = it("margin"), w = it("opacity"), _ = it("padding"), S = it("saturate"), C = it("scale"), E = it("sepia"), N = it("skew"), P = it("space"), B = it("translate"), ce = () => ["auto", "contain", "none"], pe = () => ["auto", "hidden", "clip", "visible", "scroll"], fe = () => ["auto", ze, t], $ = () => [ze, t], Q = () => ["", _n, Un], D = () => ["auto", gr, ze], re = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], M = () => ["solid", "dashed", "dotted", "double", "none"], le = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], we = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], X = () => ["", "0", ze], L = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], W = () => [gr, Yi], he = () => [gr, ze];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Mo],
      spacing: [_n, Un],
      blur: ["none", "", Bn, ze],
      brightness: W(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Bn, ze],
      borderSpacing: $(),
      borderWidth: Q(),
      contrast: W(),
      grayscale: X(),
      hueRotate: he(),
      invert: X(),
      gap: $(),
      gradientColorStops: [e],
      gradientColorStopPositions: [hE, Un],
      inset: fe(),
      margin: fe(),
      opacity: W(),
      padding: $(),
      saturate: W(),
      scale: W(),
      sepia: X(),
      skew: he(),
      space: $(),
      translate: $()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ze]
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
        columns: [Bn]
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
        object: [...re(), ze]
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
        overscroll: ce()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": ce()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": ce()
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
        z: ["auto", No, ze]
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
        flex: ["1", "auto", "initial", "none", ze]
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
        order: ["first", "last", "none", No, ze]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Mo]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", No, ze]
        }, ze]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": D()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": D()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Mo]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [No, ze]
        }, ze]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": D()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": D()
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
        "auto-cols": ["auto", "min", "max", "fr", ze]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ze]
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
        justify: ["normal", ...we()]
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
        content: ["normal", ...we(), "baseline"]
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
        "place-content": [...we(), "baseline"]
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
        p: [_]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [_]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [_]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [_]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [_]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [_]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [_]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [_]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [_]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ze, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ze, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ze, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Bn]
        }, Bn]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ze, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ze, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ze, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ze, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Bn, Un]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Yi]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Mo]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ze]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", gr, Yi]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", _n, ze]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ze]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ze]
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
        "placeholder-opacity": [w]
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
        "text-opacity": [w]
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
        decoration: [...M(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", _n, Un]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", _n, ze]
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
        indent: $()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ze]
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
        content: ["none", ze]
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
        "bg-opacity": [w]
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
        bg: [...re(), yE]
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
        bg: ["auto", "cover", "contain", gE]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, bE]
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
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
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
        "border-opacity": [w]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...M(), "hidden"]
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
        "divide-opacity": [w]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: M()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [o]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [o]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [o]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [o]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [o]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [o]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [o]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [o]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...M()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [_n, ze]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [_n, Un]
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
        "ring-opacity": [w]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [_n, Un]
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
        shadow: ["", "inner", "none", Bn, xE]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Mo]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [w]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...le(), "plus-lighter", "plus-darker"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": le()
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
        "drop-shadow": ["", "none", Bn, ze]
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
        "backdrop-opacity": [w]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ze]
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
        ease: ["linear", "in", "out", "in-out", ze]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", ze]
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
        scale: [C]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [C]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [C]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [No, ze]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [B]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [B]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ze]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ze]
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
        "scroll-m": $()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": $()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": $()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": $()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": $()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": $()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": $()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": $()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": $()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": $()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": $()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": $()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": $()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": $()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": $()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": $()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": $()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": $()
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
        "will-change": ["auto", "scroll", "contents", "transform", ze]
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
        stroke: [_n, Un, Yi]
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
const CE = /* @__PURE__ */ aE(SE);
function Ie(...e) {
  return CE(Y_(e));
}
function yd(e) {
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
function hl(e) {
  return e == null ? !1 : typeof e == "string" ? e.trim().length > 0 : Array.isArray(e) ? e.length > 0 : typeof e == "object" ? Object.keys(e).length > 0 : !0;
}
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const AE = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), Am = (...e) => e.filter((t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var TE = {
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
const RE = qp(
  ({
    color: e = "currentColor",
    size: t = 24,
    strokeWidth: n = 2,
    absoluteStrokeWidth: r,
    className: o = "",
    children: i,
    iconNode: a,
    ...s
  }, c) => Kc(
    "svg",
    {
      ref: c,
      ...TE,
      width: t,
      height: t,
      stroke: e,
      strokeWidth: r ? Number(n) * 24 / Number(t) : n,
      className: Am("lucide", o),
      ...s
    },
    [
      ...a.map(([l, u]) => Kc(l, u)),
      ...Array.isArray(i) ? i : [i]
    ]
  )
);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Co = (e, t) => {
  const n = qp(
    ({ className: r, ...o }, i) => Kc(RE, {
      ref: i,
      iconNode: t,
      className: Am(`lucide-${AE(e)}`, r),
      ...o
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
const OE = Co("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Tm = Co("ChevronRight", [
  ["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kE = Co("Circle", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]
]);
/**
 * @license lucide-react v0.395.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const PE = Co("Ellipsis", [
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
const NE = Co("GripVertical", [
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
const Rm = Co("X", [
  ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
  ["path", { d: "m6 6 12 12", key: "d8bk6v" }]
]), {
  createElement: ho,
  createContext: ME,
  createRef: iN,
  forwardRef: Om,
  useCallback: Pt,
  useContext: km,
  useEffect: Er,
  useImperativeHandle: Pm,
  useLayoutEffect: IE,
  useMemo: DE,
  useRef: jt,
  useState: ao
} = x, vd = x.useId, jE = IE, hs = ME(null);
hs.displayName = "PanelGroupContext";
const Sr = jE, FE = typeof vd == "function" ? vd : () => null;
let LE = 0;
function lu(e = null) {
  const t = FE(), n = jt(e || t || null);
  return n.current === null && (n.current = "" + LE++), e ?? n.current;
}
function Nm({
  children: e,
  className: t = "",
  collapsedSize: n,
  collapsible: r,
  defaultSize: o,
  forwardedRef: i,
  id: a,
  maxSize: s,
  minSize: c,
  onCollapse: l,
  onExpand: u,
  onResize: d,
  order: p,
  style: h,
  tagName: m = "div",
  ...g
}) {
  const b = km(hs);
  if (b === null)
    throw Error("Panel components must be rendered within a PanelGroup container");
  const {
    collapsePanel: w,
    expandPanel: _,
    getPanelSize: S,
    getPanelStyle: C,
    groupId: E,
    isPanelCollapsed: N,
    reevaluatePanelConstraints: P,
    registerPanel: B,
    resizePanel: ce,
    unregisterPanel: pe
  } = b, fe = lu(a), $ = jt({
    callbacks: {
      onCollapse: l,
      onExpand: u,
      onResize: d
    },
    constraints: {
      collapsedSize: n,
      collapsible: r,
      defaultSize: o,
      maxSize: s,
      minSize: c
    },
    id: fe,
    idIsFromProps: a !== void 0,
    order: p
  });
  jt({
    didLogMissingDefaultSizeWarning: !1
  }), Sr(() => {
    const {
      callbacks: D,
      constraints: re
    } = $.current, M = {
      ...re
    };
    $.current.id = fe, $.current.idIsFromProps = a !== void 0, $.current.order = p, D.onCollapse = l, D.onExpand = u, D.onResize = d, re.collapsedSize = n, re.collapsible = r, re.defaultSize = o, re.maxSize = s, re.minSize = c, (M.collapsedSize !== re.collapsedSize || M.collapsible !== re.collapsible || M.maxSize !== re.maxSize || M.minSize !== re.minSize) && P($.current, M);
  }), Sr(() => {
    const D = $.current;
    return B(D), () => {
      pe(D);
    };
  }, [p, fe, B, pe]), Pm(i, () => ({
    collapse: () => {
      w($.current);
    },
    expand: (D) => {
      _($.current, D);
    },
    getId() {
      return fe;
    },
    getSize() {
      return S($.current);
    },
    isCollapsed() {
      return N($.current);
    },
    isExpanded() {
      return !N($.current);
    },
    resize: (D) => {
      ce($.current, D);
    }
  }), [w, _, S, N, fe, ce]);
  const Q = C($.current, o);
  return ho(m, {
    ...g,
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
    "data-panel-id": fe,
    "data-panel-size": parseFloat("" + Q.flexGrow).toFixed(1)
  });
}
const Mm = Om((e, t) => ho(Nm, {
  ...e,
  forwardedRef: t
}));
Nm.displayName = "Panel";
Mm.displayName = "forwardRef(Panel)";
let ml = null, yr = null;
function zE(e, t) {
  if (t) {
    const n = (t & Lm) !== 0, r = (t & zm) !== 0, o = (t & $m) !== 0, i = (t & Vm) !== 0;
    if (n)
      return o ? "se-resize" : i ? "ne-resize" : "e-resize";
    if (r)
      return o ? "sw-resize" : i ? "nw-resize" : "w-resize";
    if (o)
      return "s-resize";
    if (i)
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
function $E() {
  yr !== null && (document.head.removeChild(yr), ml = null, yr = null);
}
function wc(e, t) {
  const n = zE(e, t);
  ml !== n && (ml = n, yr === null && (yr = document.createElement("style"), document.head.appendChild(yr)), yr.innerHTML = `*{cursor: ${n}!important;}`);
}
function Im(e) {
  return e.type === "keydown";
}
function Dm(e) {
  return e.type.startsWith("pointer");
}
function jm(e) {
  return e.type.startsWith("mouse");
}
function ms(e) {
  if (Dm(e)) {
    if (e.isPrimary)
      return {
        x: e.clientX,
        y: e.clientY
      };
  } else if (jm(e))
    return {
      x: e.clientX,
      y: e.clientY
    };
  return {
    x: 1 / 0,
    y: 1 / 0
  };
}
function VE() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
function UE(e, t, n) {
  return e.x < t.x + t.width && e.x + e.width > t.x && e.y < t.y + t.height && e.y + e.height > t.y;
}
function BE(e, t) {
  if (e === t) throw new Error("Cannot compare node with itself");
  const n = {
    a: wd(e),
    b: wd(t)
  };
  let r;
  for (; n.a.at(-1) === n.b.at(-1); )
    e = n.a.pop(), t = n.b.pop(), r = e;
  Be(r, "Stacking order can only be calculated for elements with a common ancestor");
  const o = {
    a: xd(bd(n.a)),
    b: xd(bd(n.b))
  };
  if (o.a === o.b) {
    const i = r.childNodes, a = {
      a: n.a.at(-1),
      b: n.b.at(-1)
    };
    let s = i.length;
    for (; s--; ) {
      const c = i[s];
      if (c === a.a) return 1;
      if (c === a.b) return -1;
    }
  }
  return Math.sign(o.a - o.b);
}
const WE = /\b(?:position|zIndex|opacity|transform|webkitTransform|mixBlendMode|filter|webkitFilter|isolation)\b/;
function HE(e) {
  var t;
  const n = getComputedStyle((t = Fm(e)) !== null && t !== void 0 ? t : e).display;
  return n === "flex" || n === "inline-flex";
}
function qE(e) {
  const t = getComputedStyle(e);
  return !!(t.position === "fixed" || t.zIndex !== "auto" && (t.position !== "static" || HE(e)) || +t.opacity < 1 || "transform" in t && t.transform !== "none" || "webkitTransform" in t && t.webkitTransform !== "none" || "mixBlendMode" in t && t.mixBlendMode !== "normal" || "filter" in t && t.filter !== "none" || "webkitFilter" in t && t.webkitFilter !== "none" || "isolation" in t && t.isolation === "isolate" || WE.test(t.willChange) || t.webkitOverflowScrolling === "touch");
}
function bd(e) {
  let t = e.length;
  for (; t--; ) {
    const n = e[t];
    if (Be(n, "Missing node"), qE(n)) return n;
  }
  return null;
}
function xd(e) {
  return e && Number(getComputedStyle(e).zIndex) || 0;
}
function wd(e) {
  const t = [];
  for (; e; )
    t.push(e), e = Fm(e);
  return t;
}
function Fm(e) {
  const {
    parentNode: t
  } = e;
  return t && t instanceof ShadowRoot ? t.host : t;
}
const Lm = 1, zm = 2, $m = 4, Vm = 8, YE = VE() === "coarse";
let tn = [], oi = !1, Yn = /* @__PURE__ */ new Map(), gs = /* @__PURE__ */ new Map();
const ii = /* @__PURE__ */ new Set();
function GE(e, t, n, r, o) {
  var i;
  const {
    ownerDocument: a
  } = t, s = {
    direction: n,
    element: t,
    hitAreaMargins: r,
    setResizeHandlerState: o
  }, c = (i = Yn.get(a)) !== null && i !== void 0 ? i : 0;
  return Yn.set(a, c + 1), ii.add(s), ka(), function() {
    var u;
    gs.delete(e), ii.delete(s);
    const d = (u = Yn.get(a)) !== null && u !== void 0 ? u : 1;
    if (Yn.set(a, d - 1), ka(), d === 1 && Yn.delete(a), tn.includes(s)) {
      const p = tn.indexOf(s);
      p >= 0 && tn.splice(p, 1), fu();
    }
  };
}
function _d(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = ms(e);
  oi = !0, uu({
    target: t,
    x: n,
    y: r
  }), ka(), tn.length > 0 && (Pa("down", e), e.preventDefault(), e.stopPropagation());
}
function Io(e) {
  const {
    x: t,
    y: n
  } = ms(e);
  if (e.buttons === 0 && (oi = !1, Pa("up", e)), !oi) {
    const {
      target: r
    } = e;
    uu({
      target: r,
      x: t,
      y: n
    });
  }
  Pa("move", e), fu(), tn.length > 0 && e.preventDefault();
}
function Hr(e) {
  const {
    target: t
  } = e, {
    x: n,
    y: r
  } = ms(e);
  gs.clear(), oi = !1, tn.length > 0 && e.preventDefault(), Pa("up", e), uu({
    target: t,
    x: n,
    y: r
  }), fu(), ka();
}
function uu({
  target: e,
  x: t,
  y: n
}) {
  tn.splice(0);
  let r = null;
  e instanceof HTMLElement && (r = e), ii.forEach((o) => {
    const {
      element: i,
      hitAreaMargins: a
    } = o, s = i.getBoundingClientRect(), {
      bottom: c,
      left: l,
      right: u,
      top: d
    } = s, p = YE ? a.coarse : a.fine;
    if (t >= l - p && t <= u + p && n >= d - p && n <= c + p) {
      if (r !== null && i !== r && !i.contains(r) && !r.contains(i) && // Calculating stacking order has a cost, so we should avoid it if possible
      // That is why we only check potentially intersecting handles,
      // and why we skip if the event target is within the handle's DOM
      BE(r, i) > 0) {
        let m = r, g = !1;
        for (; m && !m.contains(i); ) {
          if (UE(m.getBoundingClientRect(), s)) {
            g = !0;
            break;
          }
          m = m.parentElement;
        }
        if (g)
          return;
      }
      tn.push(o);
    }
  });
}
function _c(e, t) {
  gs.set(e, t);
}
function fu() {
  let e = !1, t = !1;
  tn.forEach((r) => {
    const {
      direction: o
    } = r;
    o === "horizontal" ? e = !0 : t = !0;
  });
  let n = 0;
  gs.forEach((r) => {
    n |= r;
  }), e && t ? wc("intersection", n) : e ? wc("horizontal", n) : t ? wc("vertical", n) : $E();
}
function ka() {
  Yn.forEach((e, t) => {
    const {
      body: n
    } = t;
    n.removeEventListener("contextmenu", Hr), n.removeEventListener("pointerdown", _d), n.removeEventListener("pointerleave", Io), n.removeEventListener("pointermove", Io);
  }), window.removeEventListener("pointerup", Hr), window.removeEventListener("pointercancel", Hr), ii.size > 0 && (oi ? (tn.length > 0 && Yn.forEach((e, t) => {
    const {
      body: n
    } = t;
    e > 0 && (n.addEventListener("contextmenu", Hr), n.addEventListener("pointerleave", Io), n.addEventListener("pointermove", Io));
  }), window.addEventListener("pointerup", Hr), window.addEventListener("pointercancel", Hr)) : Yn.forEach((e, t) => {
    const {
      body: n
    } = t;
    e > 0 && (n.addEventListener("pointerdown", _d, {
      capture: !0
    }), n.addEventListener("pointermove", Io));
  }));
}
function Pa(e, t) {
  ii.forEach((n) => {
    const {
      setResizeHandlerState: r
    } = n, o = tn.includes(n);
    r(e, o, t);
  });
}
function KE() {
  const [e, t] = ao(0);
  return Pt(() => t((n) => n + 1), []);
}
function Be(e, t) {
  if (!e)
    throw console.error(t), Error(t);
}
const du = 10;
function Nr(e, t, n = du) {
  return e.toFixed(n) === t.toFixed(n) ? 0 : e > t ? 1 : -1;
}
function Cn(e, t, n = du) {
  return Nr(e, t, n) === 0;
}
function Lt(e, t, n) {
  return Nr(e, t, n) === 0;
}
function ZE(e, t, n) {
  if (e.length !== t.length)
    return !1;
  for (let r = 0; r < e.length; r++) {
    const o = e[r], i = t[r];
    if (!Lt(o, i, n))
      return !1;
  }
  return !0;
}
function to({
  panelConstraints: e,
  panelIndex: t,
  size: n
}) {
  const r = e[t];
  Be(r != null, `Panel constraints not found for index ${t}`);
  let {
    collapsedSize: o = 0,
    collapsible: i,
    maxSize: a = 100,
    minSize: s = 0
  } = r;
  if (Nr(n, s) < 0)
    if (i) {
      const c = (o + s) / 2;
      Nr(n, c) < 0 ? n = o : n = s;
    } else
      n = s;
  return n = Math.min(a, n), n = parseFloat(n.toFixed(du)), n;
}
function Fo({
  delta: e,
  initialLayout: t,
  panelConstraints: n,
  pivotIndices: r,
  prevLayout: o,
  trigger: i
}) {
  if (Lt(e, 0))
    return t;
  const a = [...t], [s, c] = r;
  Be(s != null, "Invalid first pivot index"), Be(c != null, "Invalid second pivot index");
  let l = 0;
  if (i === "keyboard") {
    {
      const d = e < 0 ? c : s, p = n[d];
      Be(p, `Panel constraints not found for index ${d}`);
      const {
        collapsedSize: h = 0,
        collapsible: m,
        minSize: g = 0
      } = p;
      if (m) {
        const b = t[d];
        if (Be(b != null, `Previous layout not found for panel index ${d}`), Lt(b, h)) {
          const w = g - b;
          Nr(w, Math.abs(e)) > 0 && (e = e < 0 ? 0 - w : w);
        }
      }
    }
    {
      const d = e < 0 ? s : c, p = n[d];
      Be(p, `No panel constraints found for index ${d}`);
      const {
        collapsedSize: h = 0,
        collapsible: m,
        minSize: g = 0
      } = p;
      if (m) {
        const b = t[d];
        if (Be(b != null, `Previous layout not found for panel index ${d}`), Lt(b, g)) {
          const w = b - h;
          Nr(w, Math.abs(e)) > 0 && (e = e < 0 ? 0 - w : w);
        }
      }
    }
  }
  {
    const d = e < 0 ? 1 : -1;
    let p = e < 0 ? c : s, h = 0;
    for (; ; ) {
      const g = t[p];
      Be(g != null, `Previous layout not found for panel index ${p}`);
      const w = to({
        panelConstraints: n,
        panelIndex: p,
        size: 100
      }) - g;
      if (h += w, p += d, p < 0 || p >= n.length)
        break;
    }
    const m = Math.min(Math.abs(e), Math.abs(h));
    e = e < 0 ? 0 - m : m;
  }
  {
    let p = e < 0 ? s : c;
    for (; p >= 0 && p < n.length; ) {
      const h = Math.abs(e) - Math.abs(l), m = t[p];
      Be(m != null, `Previous layout not found for panel index ${p}`);
      const g = m - h, b = to({
        panelConstraints: n,
        panelIndex: p,
        size: g
      });
      if (!Lt(m, b) && (l += m - b, a[p] = b, l.toPrecision(3).localeCompare(Math.abs(e).toPrecision(3), void 0, {
        numeric: !0
      }) >= 0))
        break;
      e < 0 ? p-- : p++;
    }
  }
  if (ZE(o, a))
    return o;
  {
    const d = e < 0 ? c : s, p = t[d];
    Be(p != null, `Previous layout not found for panel index ${d}`);
    const h = p + l, m = to({
      panelConstraints: n,
      panelIndex: d,
      size: h
    });
    if (a[d] = m, !Lt(m, h)) {
      let g = h - m, w = e < 0 ? c : s;
      for (; w >= 0 && w < n.length; ) {
        const _ = a[w];
        Be(_ != null, `Previous layout not found for panel index ${w}`);
        const S = _ + g, C = to({
          panelConstraints: n,
          panelIndex: w,
          size: S
        });
        if (Lt(_, C) || (g -= C - _, a[w] = C), Lt(g, 0))
          break;
        e > 0 ? w-- : w++;
      }
    }
  }
  const u = a.reduce((d, p) => p + d, 0);
  return Lt(u, 100) ? a : o;
}
function XE({
  layout: e,
  panelsArray: t,
  pivotIndices: n
}) {
  let r = 0, o = 100, i = 0, a = 0;
  const s = n[0];
  Be(s != null, "No pivot index found"), t.forEach((d, p) => {
    const {
      constraints: h
    } = d, {
      maxSize: m = 100,
      minSize: g = 0
    } = h;
    p === s ? (r = g, o = m) : (i += g, a += m);
  });
  const c = Math.min(o, 100 - i), l = Math.max(r, 100 - a), u = e[s];
  return {
    valueMax: c,
    valueMin: l,
    valueNow: u
  };
}
function ai(e, t = document) {
  return Array.from(t.querySelectorAll(`[data-panel-resize-handle-id][data-panel-group-id="${e}"]`));
}
function Um(e, t, n = document) {
  const o = ai(e, n).findIndex((i) => i.getAttribute("data-panel-resize-handle-id") === t);
  return o ?? null;
}
function Bm(e, t, n) {
  const r = Um(e, t, n);
  return r != null ? [r, r + 1] : [-1, -1];
}
function Wm(e, t = document) {
  var n;
  if (t instanceof HTMLElement && (t == null || (n = t.dataset) === null || n === void 0 ? void 0 : n.panelGroupId) == e)
    return t;
  const r = t.querySelector(`[data-panel-group][data-panel-group-id="${e}"]`);
  return r || null;
}
function ys(e, t = document) {
  const n = t.querySelector(`[data-panel-resize-handle-id="${e}"]`);
  return n || null;
}
function JE(e, t, n, r = document) {
  var o, i, a, s;
  const c = ys(t, r), l = ai(e, r), u = c ? l.indexOf(c) : -1, d = (o = (i = n[u]) === null || i === void 0 ? void 0 : i.id) !== null && o !== void 0 ? o : null, p = (a = (s = n[u + 1]) === null || s === void 0 ? void 0 : s.id) !== null && a !== void 0 ? a : null;
  return [d, p];
}
function QE({
  committedValuesRef: e,
  eagerValuesRef: t,
  groupId: n,
  layout: r,
  panelDataArray: o,
  panelGroupElement: i,
  setLayout: a
}) {
  jt({
    didWarnAboutMissingResizeHandle: !1
  }), Sr(() => {
    if (!i)
      return;
    const s = ai(n, i);
    for (let c = 0; c < o.length - 1; c++) {
      const {
        valueMax: l,
        valueMin: u,
        valueNow: d
      } = XE({
        layout: r,
        panelsArray: o,
        pivotIndices: [c, c + 1]
      }), p = s[c];
      if (p != null) {
        const h = o[c];
        Be(h, `No panel data found for index "${c}"`), p.setAttribute("aria-controls", h.id), p.setAttribute("aria-valuemax", "" + Math.round(l)), p.setAttribute("aria-valuemin", "" + Math.round(u)), p.setAttribute("aria-valuenow", d != null ? "" + Math.round(d) : "");
      }
    }
    return () => {
      s.forEach((c, l) => {
        c.removeAttribute("aria-controls"), c.removeAttribute("aria-valuemax"), c.removeAttribute("aria-valuemin"), c.removeAttribute("aria-valuenow");
      });
    };
  }, [n, r, o, i]), Er(() => {
    if (!i)
      return;
    const s = t.current;
    Be(s, "Eager values not found");
    const {
      panelDataArray: c
    } = s, l = Wm(n, i);
    Be(l != null, `No group found for id "${n}"`);
    const u = ai(n, i);
    Be(u, `No resize handles found for group id "${n}"`);
    const d = u.map((p) => {
      const h = p.getAttribute("data-panel-resize-handle-id");
      Be(h, "Resize handle element has no handle id attribute");
      const [m, g] = JE(n, h, c, i);
      if (m == null || g == null)
        return () => {
        };
      const b = (w) => {
        if (!w.defaultPrevented)
          switch (w.key) {
            case "Enter": {
              w.preventDefault();
              const _ = c.findIndex((S) => S.id === m);
              if (_ >= 0) {
                const S = c[_];
                Be(S, `No panel data found for index ${_}`);
                const C = r[_], {
                  collapsedSize: E = 0,
                  collapsible: N,
                  minSize: P = 0
                } = S.constraints;
                if (C != null && N) {
                  const B = Fo({
                    delta: Lt(C, E) ? P - E : E - C,
                    initialLayout: r,
                    panelConstraints: c.map((ce) => ce.constraints),
                    pivotIndices: Bm(n, h, i),
                    prevLayout: r,
                    trigger: "keyboard"
                  });
                  r !== B && a(B);
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
  }, [i, e, t, n, r, o, a]);
}
function Ed(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
function Hm(e, t) {
  const n = e === "horizontal", {
    x: r,
    y: o
  } = ms(t);
  return n ? r : o;
}
function eS(e, t, n, r, o) {
  const i = n === "horizontal", a = ys(t, o);
  Be(a, `No resize handle element found for id "${t}"`);
  const s = a.getAttribute("data-panel-group-id");
  Be(s, "Resize handle element has no group id attribute");
  let {
    initialCursorPosition: c
  } = r;
  const l = Hm(n, e), u = Wm(s, o);
  Be(u, `No group element found for id "${s}"`);
  const d = u.getBoundingClientRect(), p = i ? d.width : d.height;
  return (l - c) / p * 100;
}
function tS(e, t, n, r, o, i) {
  if (Im(e)) {
    const a = n === "horizontal";
    let s = 0;
    e.shiftKey ? s = 100 : o != null ? s = o : s = 10;
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
    return r == null ? 0 : eS(e, t, n, r, i);
}
function nS({
  panelDataArray: e
}) {
  const t = Array(e.length), n = e.map((i) => i.constraints);
  let r = 0, o = 100;
  for (let i = 0; i < e.length; i++) {
    const a = n[i];
    Be(a, `Panel constraints not found for index ${i}`);
    const {
      defaultSize: s
    } = a;
    s != null && (r++, t[i] = s, o -= s);
  }
  for (let i = 0; i < e.length; i++) {
    const a = n[i];
    Be(a, `Panel constraints not found for index ${i}`);
    const {
      defaultSize: s
    } = a;
    if (s != null)
      continue;
    const c = e.length - r, l = o / c;
    r++, t[i] = l, o -= l;
  }
  return t;
}
function qr(e, t, n) {
  t.forEach((r, o) => {
    const i = e[o];
    Be(i, `Panel data not found for index ${o}`);
    const {
      callbacks: a,
      constraints: s,
      id: c
    } = i, {
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
      m && m(r, d), u && (p || h) && (h && (d == null || Cn(d, l)) && !Cn(r, l) && h(), p && (d == null || !Cn(d, l)) && Cn(r, l) && p());
    }
  });
}
function Gi(e, t) {
  if (e.length !== t.length)
    return !1;
  for (let n = 0; n < e.length; n++)
    if (e[n] != t[n])
      return !1;
  return !0;
}
function rS({
  defaultSize: e,
  dragState: t,
  layout: n,
  panelData: r,
  panelIndex: o,
  precision: i = 3
}) {
  const a = n[o];
  let s;
  return a == null ? s = e != null ? e.toPrecision(i) : "1" : r.length === 1 ? s = "1" : s = a.toPrecision(i), {
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
function oS(e, t = 10) {
  let n = null;
  return (...o) => {
    n !== null && clearTimeout(n), n = setTimeout(() => {
      e(...o);
    }, t);
  };
}
function Sd(e) {
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
function qm(e) {
  return `react-resizable-panels:${e}`;
}
function Ym(e) {
  return e.map((t) => {
    const {
      constraints: n,
      id: r,
      idIsFromProps: o,
      order: i
    } = t;
    return o ? r : i ? `${i}:${JSON.stringify(n)}` : JSON.stringify(n);
  }).sort((t, n) => t.localeCompare(n)).join(",");
}
function Gm(e, t) {
  try {
    const n = qm(e), r = t.getItem(n);
    if (r) {
      const o = JSON.parse(r);
      if (typeof o == "object" && o != null)
        return o;
    }
  } catch {
  }
  return null;
}
function iS(e, t, n) {
  var r, o;
  const i = (r = Gm(e, n)) !== null && r !== void 0 ? r : {}, a = Ym(t);
  return (o = i[a]) !== null && o !== void 0 ? o : null;
}
function aS(e, t, n, r, o) {
  var i;
  const a = qm(e), s = Ym(t), c = (i = Gm(e, o)) !== null && i !== void 0 ? i : {};
  c[s] = {
    expandToSizes: Object.fromEntries(n.entries()),
    layout: r
  };
  try {
    o.setItem(a, JSON.stringify(c));
  } catch (l) {
    console.error(l);
  }
}
function Cd({
  layout: e,
  panelConstraints: t
}) {
  const n = [...e], r = n.reduce((i, a) => i + a, 0);
  if (n.length !== t.length)
    throw Error(`Invalid ${t.length} panel layout: ${n.map((i) => `${i}%`).join(", ")}`);
  if (!Lt(r, 100))
    for (let i = 0; i < t.length; i++) {
      const a = n[i];
      Be(a != null, `No layout data found for index ${i}`);
      const s = 100 / r * a;
      n[i] = s;
    }
  let o = 0;
  for (let i = 0; i < t.length; i++) {
    const a = n[i];
    Be(a != null, `No layout data found for index ${i}`);
    const s = to({
      panelConstraints: t,
      panelIndex: i,
      size: a
    });
    a != s && (o += a - s, n[i] = s);
  }
  if (!Lt(o, 0))
    for (let i = 0; i < t.length; i++) {
      const a = n[i];
      Be(a != null, `No layout data found for index ${i}`);
      const s = a + o, c = to({
        panelConstraints: t,
        panelIndex: i,
        size: s
      });
      if (a !== c && (o -= c - a, n[i] = c, Lt(o, 0)))
        break;
    }
  return n;
}
const sS = 100, Lo = {
  getItem: (e) => (Sd(Lo), Lo.getItem(e)),
  setItem: (e, t) => {
    Sd(Lo), Lo.setItem(e, t);
  }
}, Ad = {};
function Km({
  autoSaveId: e = null,
  children: t,
  className: n = "",
  direction: r,
  forwardedRef: o,
  id: i = null,
  onLayout: a = null,
  keyboardResizeBy: s = null,
  storage: c = Lo,
  style: l,
  tagName: u = "div",
  ...d
}) {
  const p = lu(i), h = jt(null), [m, g] = ao(null), [b, w] = ao([]), _ = KE(), S = jt({}), C = jt(/* @__PURE__ */ new Map()), E = jt(0), N = jt({
    autoSaveId: e,
    direction: r,
    dragState: m,
    id: p,
    keyboardResizeBy: s,
    onLayout: a,
    storage: c
  }), P = jt({
    layout: b,
    panelDataArray: [],
    panelDataArrayChanged: !1
  });
  jt({
    didLogIdAndOrderWarning: !1,
    didLogPanelConstraintsWarning: !1,
    prevPanelIds: []
  }), Pm(o, () => ({
    getId: () => N.current.id,
    getLayout: () => {
      const {
        layout: I
      } = P.current;
      return I;
    },
    setLayout: (I) => {
      const {
        onLayout: G
      } = N.current, {
        layout: oe,
        panelDataArray: Y
      } = P.current, K = Cd({
        layout: I,
        panelConstraints: Y.map((ie) => ie.constraints)
      });
      Ed(oe, K) || (w(K), P.current.layout = K, G && G(K), qr(Y, K, S.current));
    }
  }), []), Sr(() => {
    N.current.autoSaveId = e, N.current.direction = r, N.current.dragState = m, N.current.id = p, N.current.onLayout = a, N.current.storage = c;
  }), QE({
    committedValuesRef: N,
    eagerValuesRef: P,
    groupId: p,
    layout: b,
    panelDataArray: P.current.panelDataArray,
    setLayout: w,
    panelGroupElement: h.current
  }), Er(() => {
    const {
      panelDataArray: I
    } = P.current;
    if (e) {
      if (b.length === 0 || b.length !== I.length)
        return;
      let G = Ad[e];
      G == null && (G = oS(aS, sS), Ad[e] = G);
      const oe = [...I], Y = new Map(C.current);
      G(e, oe, Y, b, c);
    }
  }, [e, b, c]), Er(() => {
  });
  const B = Pt((I) => {
    const {
      onLayout: G
    } = N.current, {
      layout: oe,
      panelDataArray: Y
    } = P.current;
    if (I.constraints.collapsible) {
      const K = Y.map((Ne) => Ne.constraints), {
        collapsedSize: ie = 0,
        panelSize: de,
        pivotIndices: ve
      } = pr(Y, I, oe);
      if (Be(de != null, `Panel size not found for panel "${I.id}"`), !Cn(de, ie)) {
        C.current.set(I.id, de);
        const ee = Xr(Y, I) === Y.length - 1 ? de - ie : ie - de, Te = Fo({
          delta: ee,
          initialLayout: oe,
          panelConstraints: K,
          pivotIndices: ve,
          prevLayout: oe,
          trigger: "imperative-api"
        });
        Gi(oe, Te) || (w(Te), P.current.layout = Te, G && G(Te), qr(Y, Te, S.current));
      }
    }
  }, []), ce = Pt((I, G) => {
    const {
      onLayout: oe
    } = N.current, {
      layout: Y,
      panelDataArray: K
    } = P.current;
    if (I.constraints.collapsible) {
      const ie = K.map((He) => He.constraints), {
        collapsedSize: de = 0,
        panelSize: ve = 0,
        minSize: Ne = 0,
        pivotIndices: ee
      } = pr(K, I, Y), Te = G ?? Ne;
      if (Cn(ve, de)) {
        const He = C.current.get(I.id), lt = He != null && He >= Te ? He : Te, Ue = Xr(K, I) === K.length - 1 ? ve - lt : lt - ve, A = Fo({
          delta: Ue,
          initialLayout: Y,
          panelConstraints: ie,
          pivotIndices: ee,
          prevLayout: Y,
          trigger: "imperative-api"
        });
        Gi(Y, A) || (w(A), P.current.layout = A, oe && oe(A), qr(K, A, S.current));
      }
    }
  }, []), pe = Pt((I) => {
    const {
      layout: G,
      panelDataArray: oe
    } = P.current, {
      panelSize: Y
    } = pr(oe, I, G);
    return Be(Y != null, `Panel size not found for panel "${I.id}"`), Y;
  }, []), fe = Pt((I, G) => {
    const {
      panelDataArray: oe
    } = P.current, Y = Xr(oe, I);
    return rS({
      defaultSize: G,
      dragState: m,
      layout: b,
      panelData: oe,
      panelIndex: Y
    });
  }, [m, b]), $ = Pt((I) => {
    const {
      layout: G,
      panelDataArray: oe
    } = P.current, {
      collapsedSize: Y = 0,
      collapsible: K,
      panelSize: ie
    } = pr(oe, I, G);
    return Be(ie != null, `Panel size not found for panel "${I.id}"`), K === !0 && Cn(ie, Y);
  }, []), Q = Pt((I) => {
    const {
      layout: G,
      panelDataArray: oe
    } = P.current, {
      collapsedSize: Y = 0,
      collapsible: K,
      panelSize: ie
    } = pr(oe, I, G);
    return Be(ie != null, `Panel size not found for panel "${I.id}"`), !K || Nr(ie, Y) > 0;
  }, []), D = Pt((I) => {
    const {
      panelDataArray: G
    } = P.current;
    G.push(I), G.sort((oe, Y) => {
      const K = oe.order, ie = Y.order;
      return K == null && ie == null ? 0 : K == null ? -1 : ie == null ? 1 : K - ie;
    }), P.current.panelDataArrayChanged = !0, _();
  }, [_]);
  Sr(() => {
    if (P.current.panelDataArrayChanged) {
      P.current.panelDataArrayChanged = !1;
      const {
        autoSaveId: I,
        onLayout: G,
        storage: oe
      } = N.current, {
        layout: Y,
        panelDataArray: K
      } = P.current;
      let ie = null;
      if (I) {
        const ve = iS(I, K, oe);
        ve && (C.current = new Map(Object.entries(ve.expandToSizes)), ie = ve.layout);
      }
      ie == null && (ie = nS({
        panelDataArray: K
      }));
      const de = Cd({
        layout: ie,
        panelConstraints: K.map((ve) => ve.constraints)
      });
      Ed(Y, de) || (w(de), P.current.layout = de, G && G(de), qr(K, de, S.current));
    }
  }), Sr(() => {
    const I = P.current;
    return () => {
      I.layout = [];
    };
  }, []);
  const re = Pt((I) => function(oe) {
    oe.preventDefault();
    const Y = h.current;
    if (!Y)
      return () => null;
    const {
      direction: K,
      dragState: ie,
      id: de,
      keyboardResizeBy: ve,
      onLayout: Ne
    } = N.current, {
      layout: ee,
      panelDataArray: Te
    } = P.current, {
      initialLayout: He
    } = ie ?? {}, lt = Bm(de, I, Y);
    let et = tS(oe, I, K, ie, ve, Y);
    const Ue = K === "horizontal";
    document.dir === "rtl" && Ue && (et = -et);
    const A = Te.map((f) => f.constraints), k = Fo({
      delta: et,
      initialLayout: He ?? ee,
      panelConstraints: A,
      pivotIndices: lt,
      prevLayout: ee,
      trigger: Im(oe) ? "keyboard" : "mouse-or-touch"
    }), F = !Gi(ee, k);
    (Dm(oe) || jm(oe)) && E.current != et && (E.current = et, F ? _c(I, 0) : Ue ? _c(I, et < 0 ? Lm : zm) : _c(I, et < 0 ? $m : Vm)), F && (w(k), P.current.layout = k, Ne && Ne(k), qr(Te, k, S.current));
  }, []), M = Pt((I, G) => {
    const {
      onLayout: oe
    } = N.current, {
      layout: Y,
      panelDataArray: K
    } = P.current, ie = K.map((He) => He.constraints), {
      panelSize: de,
      pivotIndices: ve
    } = pr(K, I, Y);
    Be(de != null, `Panel size not found for panel "${I.id}"`);
    const ee = Xr(K, I) === K.length - 1 ? de - G : G - de, Te = Fo({
      delta: ee,
      initialLayout: Y,
      panelConstraints: ie,
      pivotIndices: ve,
      prevLayout: Y,
      trigger: "imperative-api"
    });
    Gi(Y, Te) || (w(Te), P.current.layout = Te, oe && oe(Te), qr(K, Te, S.current));
  }, []), le = Pt((I, G) => {
    const {
      layout: oe,
      panelDataArray: Y
    } = P.current, {
      collapsedSize: K = 0,
      collapsible: ie
    } = G, {
      collapsedSize: de = 0,
      collapsible: ve,
      maxSize: Ne = 100,
      minSize: ee = 0
    } = I.constraints, {
      panelSize: Te
    } = pr(Y, I, oe);
    Te != null && (ie && ve && Cn(Te, K) ? Cn(K, de) || M(I, de) : Te < ee ? M(I, ee) : Te > Ne && M(I, Ne));
  }, [M]), we = Pt((I, G) => {
    const {
      direction: oe
    } = N.current, {
      layout: Y
    } = P.current;
    if (!h.current)
      return;
    const K = ys(I, h.current);
    Be(K, `Drag handle element not found for id "${I}"`);
    const ie = Hm(oe, G);
    g({
      dragHandleId: I,
      dragHandleRect: K.getBoundingClientRect(),
      initialCursorPosition: ie,
      initialLayout: Y
    });
  }, []), X = Pt(() => {
    g(null);
  }, []), L = Pt((I) => {
    const {
      panelDataArray: G
    } = P.current, oe = Xr(G, I);
    oe >= 0 && (G.splice(oe, 1), delete S.current[I.id], P.current.panelDataArrayChanged = !0, _());
  }, [_]), W = DE(() => ({
    collapsePanel: B,
    direction: r,
    dragState: m,
    expandPanel: ce,
    getPanelSize: pe,
    getPanelStyle: fe,
    groupId: p,
    isPanelCollapsed: $,
    isPanelExpanded: Q,
    reevaluatePanelConstraints: le,
    registerPanel: D,
    registerResizeHandle: re,
    resizePanel: M,
    startDragging: we,
    stopDragging: X,
    unregisterPanel: L,
    panelGroupElement: h.current
  }), [B, m, r, ce, pe, fe, p, $, Q, le, D, re, M, we, X, L]), he = {
    display: "flex",
    flexDirection: r === "horizontal" ? "row" : "column",
    height: "100%",
    overflow: "hidden",
    width: "100%"
  };
  return ho(hs.Provider, {
    value: W
  }, ho(u, {
    ...d,
    children: t,
    className: n,
    id: i,
    ref: h,
    style: {
      ...he,
      ...l
    },
    // CSS selectors
    "data-panel-group": "",
    "data-panel-group-direction": r,
    "data-panel-group-id": p
  }));
}
const Zm = Om((e, t) => ho(Km, {
  ...e,
  forwardedRef: t
}));
Km.displayName = "PanelGroup";
Zm.displayName = "forwardRef(PanelGroup)";
function Xr(e, t) {
  return e.findIndex((n) => n === t || n.id === t.id);
}
function pr(e, t, n) {
  const r = Xr(e, t), i = r === e.length - 1 ? [r - 1, r] : [r, r + 1], a = n[r];
  return {
    ...t.constraints,
    panelSize: a,
    pivotIndices: i
  };
}
function cS({
  disabled: e,
  handleId: t,
  resizeHandler: n,
  panelGroupElement: r
}) {
  Er(() => {
    if (e || n == null || r == null)
      return;
    const o = ys(t, r);
    if (o == null)
      return;
    const i = (a) => {
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
            const s = o.getAttribute("data-panel-group-id");
            Be(s, `No group element found for id "${s}"`);
            const c = ai(s, r), l = Um(s, t, r);
            Be(l !== null, `No resize element found for id "${t}"`);
            const u = a.shiftKey ? l > 0 ? l - 1 : c.length - 1 : l + 1 < c.length ? l + 1 : 0;
            c[u].focus();
            break;
          }
        }
    };
    return o.addEventListener("keydown", i), () => {
      o.removeEventListener("keydown", i);
    };
  }, [r, e, t, n]);
}
function Xm({
  children: e = null,
  className: t = "",
  disabled: n = !1,
  hitAreaMargins: r,
  id: o,
  onBlur: i,
  onDragging: a,
  onFocus: s,
  style: c = {},
  tabIndex: l = 0,
  tagName: u = "div",
  ...d
}) {
  var p, h;
  const m = jt(null), g = jt({
    onDragging: a
  });
  Er(() => {
    g.current.onDragging = a;
  });
  const b = km(hs);
  if (b === null)
    throw Error("PanelResizeHandle components must be rendered within a PanelGroup container");
  const {
    direction: w,
    groupId: _,
    registerResizeHandle: S,
    startDragging: C,
    stopDragging: E,
    panelGroupElement: N
  } = b, P = lu(o), [B, ce] = ao("inactive"), [pe, fe] = ao(!1), [$, Q] = ao(null), D = jt({
    state: B
  });
  Sr(() => {
    D.current.state = B;
  }), Er(() => {
    if (n)
      Q(null);
    else {
      const we = S(P);
      Q(() => we);
    }
  }, [n, P, S]);
  const re = (p = r == null ? void 0 : r.coarse) !== null && p !== void 0 ? p : 15, M = (h = r == null ? void 0 : r.fine) !== null && h !== void 0 ? h : 5;
  return Er(() => {
    if (n || $ == null)
      return;
    const we = m.current;
    return Be(we, "Element ref not attached"), GE(P, we, w, {
      coarse: re,
      fine: M
    }, (L, W, he) => {
      if (W)
        switch (L) {
          case "down": {
            ce("drag"), C(P, he);
            const {
              onDragging: I
            } = g.current;
            I && I(!0);
            break;
          }
          case "move": {
            const {
              state: I
            } = D.current;
            I !== "drag" && ce("hover"), $(he);
            break;
          }
          case "up": {
            ce("hover"), E();
            const {
              onDragging: I
            } = g.current;
            I && I(!1);
            break;
          }
        }
      else
        ce("inactive");
    });
  }, [re, w, n, M, S, P, $, C, E]), cS({
    disabled: n,
    handleId: P,
    resizeHandler: $,
    panelGroupElement: N
  }), ho(u, {
    ...d,
    children: e,
    className: t,
    id: o,
    onBlur: () => {
      fe(!1), i == null || i();
    },
    onFocus: () => {
      fe(!0), s == null || s();
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
    "data-panel-group-direction": w,
    "data-panel-group-id": _,
    "data-resize-handle": "",
    "data-resize-handle-active": B === "drag" ? "pointer" : pe ? "keyboard" : void 0,
    "data-resize-handle-state": B,
    "data-panel-resize-handle-enabled": !n,
    "data-panel-resize-handle-id": P
  });
}
Xm.displayName = "PanelResizeHandle";
const lS = ({
  className: e,
  ...t
}) => /* @__PURE__ */ y.jsx(
  Zm,
  {
    className: Ie(
      "flex h-full w-full data-[panel-group-direction=vertical]:flex-col",
      e
    ),
    ...t
  }
), Td = Mm, uS = ({
  withHandle: e,
  className: t,
  ...n
}) => /* @__PURE__ */ y.jsx(
  Xm,
  {
    className: Ie(
      "relative flex w-px items-center justify-center bg-slate-200 after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950 focus-visible:ring-offset-1 data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90 dark:bg-slate-800 dark:focus-visible:ring-slate-300",
      t
    ),
    ...n,
    children: e && /* @__PURE__ */ y.jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-sm border border-slate-200 bg-slate-200 dark:border-slate-800 dark:bg-slate-800", children: /* @__PURE__ */ y.jsx(NE, { className: "h-2.5 w-2.5" }) })
  }
);
function fS(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function vs(...e) {
  return (t) => e.forEach((n) => fS(n, t));
}
function bt(...e) {
  return x.useCallback(vs(...e), e);
}
var Rn = x.forwardRef((e, t) => {
  const { children: n, ...r } = e, o = x.Children.toArray(n), i = o.find(pS);
  if (i) {
    const a = i.props.children, s = o.map((c) => c === i ? x.Children.count(a) > 1 ? x.Children.only(null) : x.isValidElement(a) ? a.props.children : null : c);
    return /* @__PURE__ */ y.jsx(gl, { ...r, ref: t, children: x.isValidElement(a) ? x.cloneElement(a, void 0, s) : null });
  }
  return /* @__PURE__ */ y.jsx(gl, { ...r, ref: t, children: n });
});
Rn.displayName = "Slot";
var gl = x.forwardRef((e, t) => {
  const { children: n, ...r } = e;
  if (x.isValidElement(n)) {
    const o = mS(n);
    return x.cloneElement(n, {
      ...hS(r, n.props),
      // @ts-ignore
      ref: t ? vs(t, o) : o
    });
  }
  return x.Children.count(n) > 1 ? x.Children.only(null) : null;
});
gl.displayName = "SlotClone";
var dS = ({ children: e }) => /* @__PURE__ */ y.jsx(y.Fragment, { children: e });
function pS(e) {
  return x.isValidElement(e) && e.type === dS;
}
function hS(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r], i = t[r];
    /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
      i(...s), o(...s);
    } : o && (n[r] = o) : r === "style" ? n[r] = { ...o, ...i } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function mS(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var gS = [
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
], nt = gS.reduce((e, t) => {
  const n = x.forwardRef((r, o) => {
    const { asChild: i, ...a } = r, s = i ? Rn : t;
    return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), /* @__PURE__ */ y.jsx(s, { ...a, ref: o });
  });
  return n.displayName = `Primitive.${t}`, { ...e, [t]: n };
}, {});
function pu(e, t) {
  e && es.flushSync(() => e.dispatchEvent(t));
}
var yS = "AspectRatio", Jm = x.forwardRef(
  (e, t) => {
    const { ratio: n = 1 / 1, style: r, ...o } = e;
    return /* @__PURE__ */ y.jsx(
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
        children: /* @__PURE__ */ y.jsx(
          nt.div,
          {
            ...o,
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
Jm.displayName = yS;
var vS = Jm;
const Qm = vS, hu = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  "div",
  {
    ref: n,
    className: Ie(
      "rounded-lg border border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      e
    ),
    ...t
  }
));
hu.displayName = "Card";
const eg = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  "div",
  {
    ref: n,
    className: Ie("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
eg.displayName = "CardHeader";
const bS = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  "h3",
  {
    ref: n,
    className: Ie(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
bS.displayName = "CardTitle";
const xS = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  "p",
  {
    ref: n,
    className: Ie("text-sm text-slate-500 dark:text-slate-400", e),
    ...t
  }
));
xS.displayName = "CardDescription";
const tg = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx("div", { ref: n, className: Ie("p-6 pt-0", e), ...t }));
tg.displayName = "CardContent";
const wS = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  "div",
  {
    ref: n,
    className: Ie("flex items-center p-6 pt-0", e),
    ...t
  }
));
wS.displayName = "CardFooter";
const _S = "data:image/svg+xml,%3c!--%20icon666.com%20-%20MILLIONS%20vector%20ICONS%20FREE%20--%3e%3csvg%20version='1.1'%20id='Layer_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20368%20368'%20style='enable-background:new%200%200%20368%20368;'%20xml:space='preserve'%3e%3cg%3e%3cg%3e%3cg%3e%3cpath%20d='M328,32H40C18,32,0,50,0,72v224c0,22,18,40,40,40h288c22,0,40-18,40-40V72C368,50,350,32,328,32z%20M352,185.6l-38-38%20c-6.4-6.4-16-6.4-22.4,0L200,238.8l-0.4-0.4L153.2,192c-6-6-16.4-6-22.4,0l-39.2,39.2c-3.2,3.2-3.2,8,0,11.2%20c3.2,3.2,8,3.2,11.2,0l39.2-39.2l46.4,46.4l0.4,0.4l-32.4,32.4c-3.2,3.2-3.2,8,0,11.2c1.6,1.6,3.6,2.4,5.6,2.4s4-0.8,5.6-2.4%20l135.2-134.8l47.6,47.6c0.4,0.4,1.2,0.8,1.6,1.2V296c0,13.2-10.8,24-24,24H40c-13.2,0-24-10.8-24-24V72c0-13.2,10.8-24,24-24h288%20c13.2,0,24,10.8,24,24V185.6z'%3e%3c/path%3e%3cpath%20d='M72.4,250.4l-8,8c-3.2,3.2-3.2,8,0,11.2C66,271.2,68,272,70,272s4-0.8,5.6-2.4l8-8c3.2-3.2,3.2-8,0-11.2%20C80.4,247.2,75.6,247.2,72.4,250.4z'%3e%3c/path%3e%3cpath%20d='M88,80c-22,0-40,18-40,40s18,40,40,40s40-18,40-40S110,80,88,80z%20M88,144c-13.2,0-24-10.8-24-24s10.8-24,24-24%20s24,10.8,24,24S101.2,144,88,144z'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
function ng({ media: e, placeholder: t }) {
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    e && e.picture && /* @__PURE__ */ y.jsx("img", { src: String(e.thumbnail), alt: String(e.alt), className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain" }),
    e && e.svg && /* @__PURE__ */ y.jsx("img", { src: String(e.reference), alt: String(e.alt), className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain" }),
    t && e === null && /* @__PURE__ */ y.jsx("img", { src: _S, alt: "Selection", className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain" })
  ] });
}
function ES({ className: e, media: t }) {
  const n = zr(), r = xr((i) => i.main.currentMedia), o = () => {
    n(dl(t));
  };
  return /* @__PURE__ */ y.jsxs(hu, { className: Ie(e, { "border-primary": t.id === (r == null ? void 0 : r.id) }), onClick: o, children: [
    /* @__PURE__ */ y.jsx(eg, { className: "p-0 pb-6", children: /* @__PURE__ */ y.jsx(Qm, { ratio: 4 / 3, className: "rounded-t-lg overflow-hidden bg-checkerboard", children: /* @__PURE__ */ y.jsx(ng, { media: t }) }) }),
    /* @__PURE__ */ y.jsx(tg, { className: "text-ellipsis overflow-hidden text-nowrap", children: t.label })
  ] });
}
function SS() {
  const e = zr(), { items: t, status: n, error: r } = xr((o) => o.media);
  return Xn(() => {
    n === "idle" && e(_r());
  }, [n, e]), n === "loading" || n === "idle" ? /* @__PURE__ */ y.jsx("div", { children: "Loading..." }) : n === "failed" ? /* @__PURE__ */ y.jsxs("div", { children: [
    "Error: ",
    r
  ] }) : /* @__PURE__ */ y.jsx("div", { className: "p-3 h-[calc(100%-10rem)] overflow-y-auto", children: /* @__PURE__ */ y.jsx("div", { className: "grid grid-cols-[repeat(auto-fit,minmax(200px,2fr))] gap-2", children: t.length > 0 && t.map(
    (o) => /* @__PURE__ */ y.jsx(ES, { className: "aspect-[124/129]", media: o }, o.id)
  ) }) });
}
function rg(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) for (t = 0; t < e.length; t++) e[t] && (n = rg(e[t])) && (r && (r += " "), r += n);
  else for (t in e) e[t] && (r && (r += " "), r += t);
  return r;
}
function CS() {
  for (var e, t, n = 0, r = ""; n < arguments.length; ) (e = arguments[n++]) && (t = rg(e)) && (r && (r += " "), r += t);
  return r;
}
const Rd = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Od = CS, mu = (e, t) => (n) => {
  var r;
  if ((t == null ? void 0 : t.variants) == null) return Od(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
  const { variants: o, defaultVariants: i } = t, a = Object.keys(o).map((l) => {
    const u = n == null ? void 0 : n[l], d = i == null ? void 0 : i[l];
    if (u === null) return null;
    const p = Rd(u) || Rd(d);
    return o[l][p];
  }), s = n && Object.entries(n).reduce((l, u) => {
    let [d, p] = u;
    return p === void 0 || (l[d] = p), l;
  }, {}), c = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((l, u) => {
    let { class: d, className: p, ...h } = u;
    return Object.entries(h).every((m) => {
      let [g, b] = m;
      return Array.isArray(b) ? b.includes({
        ...i,
        ...s
      }[g]) : {
        ...i,
        ...s
      }[g] === b;
    }) ? [
      ...l,
      d,
      p
    ] : l;
  }, []);
  return Od(e, a, c, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
}, AS = mu(
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
), Cr = x.forwardRef(
  ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
    const a = r ? Rn : "button";
    return /* @__PURE__ */ y.jsx(
      a,
      {
        className: Ie(AS({ variant: t, size: n, className: e })),
        ref: i,
        ...o
      }
    );
  }
);
Cr.displayName = "Button";
const kd = () => {
};
let gu = {}, og = {}, ig = null, ag = {
  mark: kd,
  measure: kd
};
try {
  typeof window < "u" && (gu = window), typeof document < "u" && (og = document), typeof MutationObserver < "u" && (ig = MutationObserver), typeof performance < "u" && (ag = performance);
} catch {
}
const {
  userAgent: Pd = ""
} = gu.navigator || {}, Qn = gu, st = og, Nd = ig, Ki = ag;
Qn.document;
const In = !!st.documentElement && !!st.head && typeof st.addEventListener == "function" && typeof st.createElement == "function", sg = ~Pd.indexOf("MSIE") || ~Pd.indexOf("Trident/");
var ct = "classic", cg = "duotone", Vt = "sharp", Ut = "sharp-duotone", TS = [ct, cg, Vt, Ut], RS = {
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
}, Md = {
  kit: {
    fak: "kit",
    "fa-kit": "kit"
  },
  "kit-duotone": {
    fakd: "kit-duotone",
    "fa-kit-duotone": "kit-duotone"
  }
}, OS = ["kit"], kS = /fa(s|r|l|t|d|b|k|kd|ss|sr|sl|st|sds)?[\-\ ]/, PS = /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i, NS = {
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
}, MS = {
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
}, IS = {
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
}, DS = {
  classic: ["fas", "far", "fal", "fat"],
  sharp: ["fass", "fasr", "fasl", "fast"],
  "sharp-duotone": ["fasds"]
}, jS = {
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
}, FS = {
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
}, lg = {
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
}, LS = ["solid", "regular", "light", "thin", "duotone", "brands"], ug = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], zS = ug.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]), zo = {
  GROUP: "duotone-group",
  SWAP_OPACITY: "swap-opacity",
  PRIMARY: "primary",
  SECONDARY: "secondary"
}, $S = [...Object.keys(DS), ...LS, "2xs", "xs", "sm", "lg", "xl", "2xl", "beat", "border", "fade", "beat-fade", "bounce", "flip-both", "flip-horizontal", "flip-vertical", "flip", "fw", "inverse", "layers-counter", "layers-text", "layers", "li", "pull-left", "pull-right", "pulse", "rotate-180", "rotate-270", "rotate-90", "rotate-by", "shake", "spin-pulse", "spin-reverse", "spin", "stack-1x", "stack-2x", "stack", "ul", zo.GROUP, zo.SWAP_OPACITY, zo.PRIMARY, zo.SECONDARY].concat(ug.map((e) => "".concat(e, "x"))).concat(zS.map((e) => "w-".concat(e))), VS = {
  "Font Awesome Kit": {
    400: "fak",
    normal: "fak"
  },
  "Font Awesome Kit Duotone": {
    400: "fakd",
    normal: "fakd"
  }
}, US = {
  kit: {
    "fa-kit": "fak"
  },
  "kit-duotone": {
    "fa-kit-duotone": "fakd"
  }
}, BS = {
  kit: {
    fak: "fa-kit"
  },
  "kit-duotone": {
    fakd: "fa-kit-duotone"
  }
}, Id = {
  kit: {
    kit: "fak"
  },
  "kit-duotone": {
    "kit-duotone": "fakd"
  }
};
const On = "___FONT_AWESOME___", yl = 16, fg = "fa", dg = "svg-inline--fa", Mr = "data-fa-i2svg", vl = "data-fa-pseudo-element", WS = "data-fa-pseudo-element-pending", yu = "data-prefix", vu = "data-icon", Dd = "fontawesome-i2svg", HS = "async", qS = ["HTML", "HEAD", "STYLE", "SCRIPT"], pg = (() => {
  try {
    return process.env.NODE_ENV === "production";
  } catch {
    return !1;
  }
})(), hg = [ct, Vt, Ut];
function Mi(e) {
  return new Proxy(e, {
    get(t, n) {
      return n in t ? t[n] : t[ct];
    }
  });
}
const mg = {
  ...lg
};
mg[ct] = {
  ...lg[ct],
  ...Md.kit,
  ...Md["kit-duotone"]
};
const Ar = Mi(mg), bl = {
  ...FS
};
bl[ct] = {
  ...bl[ct],
  ...Id.kit,
  ...Id["kit-duotone"]
};
const si = Mi(bl), xl = {
  ...jS
};
xl[ct] = {
  ...xl[ct],
  ...BS.kit
};
const Tr = Mi(xl), wl = {
  ...IS
};
wl[ct] = {
  ...wl[ct],
  ...US.kit
};
const YS = Mi(wl), GS = kS, gg = "fa-layers-text", KS = PS, ZS = {
  ...RS
};
Mi(ZS);
const XS = ["class", "data-prefix", "data-icon", "data-fa-transform", "data-fa-mask"], Ec = zo, mo = /* @__PURE__ */ new Set();
Object.keys(si[ct]).map(mo.add.bind(mo));
Object.keys(si[Vt]).map(mo.add.bind(mo));
Object.keys(si[Ut]).map(mo.add.bind(mo));
const JS = [...OS, ...$S], Ko = Qn.FontAwesomeConfig || {};
function QS(e) {
  var t = st.querySelector("script[" + e + "]");
  if (t)
    return t.getAttribute(e);
}
function eC(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
st && typeof st.querySelector == "function" && [["data-family-prefix", "familyPrefix"], ["data-css-prefix", "cssPrefix"], ["data-family-default", "familyDefault"], ["data-style-default", "styleDefault"], ["data-replacement-class", "replacementClass"], ["data-auto-replace-svg", "autoReplaceSvg"], ["data-auto-add-css", "autoAddCss"], ["data-auto-a11y", "autoA11y"], ["data-search-pseudo-elements", "searchPseudoElements"], ["data-observe-mutations", "observeMutations"], ["data-mutate-approach", "mutateApproach"], ["data-keep-original-source", "keepOriginalSource"], ["data-measure-performance", "measurePerformance"], ["data-show-missing-icons", "showMissingIcons"]].forEach((t) => {
  let [n, r] = t;
  const o = eC(QS(n));
  o != null && (Ko[r] = o);
});
const yg = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: fg,
  replacementClass: dg,
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
Ko.familyPrefix && (Ko.cssPrefix = Ko.familyPrefix);
const go = {
  ...yg,
  ...Ko
};
go.autoReplaceSvg || (go.observeMutations = !1);
const _e = {};
Object.keys(yg).forEach((e) => {
  Object.defineProperty(_e, e, {
    enumerable: !0,
    set: function(t) {
      go[e] = t, Zo.forEach((n) => n(_e));
    },
    get: function() {
      return go[e];
    }
  });
});
Object.defineProperty(_e, "familyPrefix", {
  enumerable: !0,
  set: function(e) {
    go.cssPrefix = e, Zo.forEach((t) => t(_e));
  },
  get: function() {
    return go.cssPrefix;
  }
});
Qn.FontAwesomeConfig = _e;
const Zo = [];
function tC(e) {
  return Zo.push(e), () => {
    Zo.splice(Zo.indexOf(e), 1);
  };
}
const Wn = yl, dn = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: !1,
  flipY: !1
};
function nC(e) {
  if (!e || !In)
    return;
  const t = st.createElement("style");
  t.setAttribute("type", "text/css"), t.innerHTML = e;
  const n = st.head.childNodes;
  let r = null;
  for (let o = n.length - 1; o > -1; o--) {
    const i = n[o], a = (i.tagName || "").toUpperCase();
    ["STYLE", "LINK"].indexOf(a) > -1 && (r = i);
  }
  return st.head.insertBefore(t, r), e;
}
const rC = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function ci() {
  let e = 12, t = "";
  for (; e-- > 0; )
    t += rC[Math.random() * 62 | 0];
  return t;
}
function Ao(e) {
  const t = [];
  for (let n = (e || []).length >>> 0; n--; )
    t[n] = e[n];
  return t;
}
function bu(e) {
  return e.classList ? Ao(e.classList) : (e.getAttribute("class") || "").split(" ").filter((t) => t);
}
function vg(e) {
  return "".concat(e).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function oC(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, '="').concat(vg(e[n]), '" '), "").trim();
}
function bs(e) {
  return Object.keys(e || {}).reduce((t, n) => t + "".concat(n, ": ").concat(e[n].trim(), ";"), "");
}
function xu(e) {
  return e.size !== dn.size || e.x !== dn.x || e.y !== dn.y || e.rotate !== dn.rotate || e.flipX || e.flipY;
}
function iC(e) {
  let {
    transform: t,
    containerWidth: n,
    iconWidth: r
  } = e;
  const o = {
    transform: "translate(".concat(n / 2, " 256)")
  }, i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "), a = "scale(".concat(t.size / 16 * (t.flipX ? -1 : 1), ", ").concat(t.size / 16 * (t.flipY ? -1 : 1), ") "), s = "rotate(".concat(t.rotate, " 0 0)"), c = {
    transform: "".concat(i, " ").concat(a, " ").concat(s)
  }, l = {
    transform: "translate(".concat(r / 2 * -1, " -256)")
  };
  return {
    outer: o,
    inner: c,
    path: l
  };
}
function aC(e) {
  let {
    transform: t,
    width: n = yl,
    height: r = yl,
    startCentered: o = !1
  } = e, i = "";
  return o && sg ? i += "translate(".concat(t.x / Wn - n / 2, "em, ").concat(t.y / Wn - r / 2, "em) ") : o ? i += "translate(calc(-50% + ".concat(t.x / Wn, "em), calc(-50% + ").concat(t.y / Wn, "em)) ") : i += "translate(".concat(t.x / Wn, "em, ").concat(t.y / Wn, "em) "), i += "scale(".concat(t.size / Wn * (t.flipX ? -1 : 1), ", ").concat(t.size / Wn * (t.flipY ? -1 : 1), ") "), i += "rotate(".concat(t.rotate, "deg) "), i;
}
var sC = `:root, :host {
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
function bg() {
  const e = fg, t = dg, n = _e.cssPrefix, r = _e.replacementClass;
  let o = sC;
  if (n !== e || r !== t) {
    const i = new RegExp("\\.".concat(e, "\\-"), "g"), a = new RegExp("\\--".concat(e, "\\-"), "g"), s = new RegExp("\\.".concat(t), "g");
    o = o.replace(i, ".".concat(n, "-")).replace(a, "--".concat(n, "-")).replace(s, ".".concat(r));
  }
  return o;
}
let jd = !1;
function Sc() {
  _e.autoAddCss && !jd && (nC(bg()), jd = !0);
}
var cC = {
  mixout() {
    return {
      dom: {
        css: bg,
        insertCss: Sc
      }
    };
  },
  hooks() {
    return {
      beforeDOMElementCreation() {
        Sc();
      },
      beforeI2svg() {
        Sc();
      }
    };
  }
};
const kn = Qn || {};
kn[On] || (kn[On] = {});
kn[On].styles || (kn[On].styles = {});
kn[On].hooks || (kn[On].hooks = {});
kn[On].shims || (kn[On].shims = []);
var pn = kn[On];
const xg = [], wg = function() {
  st.removeEventListener("DOMContentLoaded", wg), Na = 1, xg.map((e) => e());
};
let Na = !1;
In && (Na = (st.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(st.readyState), Na || st.addEventListener("DOMContentLoaded", wg));
function lC(e) {
  In && (Na ? setTimeout(e, 0) : xg.push(e));
}
function Ii(e) {
  const {
    tag: t,
    attributes: n = {},
    children: r = []
  } = e;
  return typeof e == "string" ? vg(e) : "<".concat(t, " ").concat(oC(n), ">").concat(r.map(Ii).join(""), "</").concat(t, ">");
}
function Fd(e, t, n) {
  if (e && e[t] && e[t][n])
    return {
      prefix: t,
      iconName: n,
      icon: e[t][n]
    };
}
var Cc = function(t, n, r, o) {
  var i = Object.keys(t), a = i.length, s = n, c, l, u;
  for (r === void 0 ? (c = 1, u = t[i[0]]) : (c = 0, u = r); c < a; c++)
    l = i[c], u = s(u, t[l], l, t);
  return u;
};
function uC(e) {
  const t = [];
  let n = 0;
  const r = e.length;
  for (; n < r; ) {
    const o = e.charCodeAt(n++);
    if (o >= 55296 && o <= 56319 && n < r) {
      const i = e.charCodeAt(n++);
      (i & 64512) == 56320 ? t.push(((o & 1023) << 10) + (i & 1023) + 65536) : (t.push(o), n--);
    } else
      t.push(o);
  }
  return t;
}
function _l(e) {
  const t = uC(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function fC(e, t) {
  const n = e.length;
  let r = e.charCodeAt(t), o;
  return r >= 55296 && r <= 56319 && n > t + 1 && (o = e.charCodeAt(t + 1), o >= 56320 && o <= 57343) ? (r - 55296) * 1024 + o - 56320 + 65536 : r;
}
function Ld(e) {
  return Object.keys(e).reduce((t, n) => {
    const r = e[n];
    return !!r.icon ? t[r.iconName] = r.icon : t[n] = r, t;
  }, {});
}
function El(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const {
    skipHooks: r = !1
  } = n, o = Ld(t);
  typeof pn.hooks.addPack == "function" && !r ? pn.hooks.addPack(e, Ld(t)) : pn.styles[e] = {
    ...pn.styles[e] || {},
    ...o
  }, e === "fas" && El("fa", t);
}
const {
  styles: mr,
  shims: dC
} = pn, pC = {
  [ct]: Object.values(Tr[ct]),
  [Vt]: Object.values(Tr[Vt]),
  [Ut]: Object.values(Tr[Ut])
};
let wu = null, _g = {}, Eg = {}, Sg = {}, Cg = {}, Ag = {};
const hC = {
  [ct]: Object.keys(Ar[ct]),
  [Vt]: Object.keys(Ar[Vt]),
  [Ut]: Object.keys(Ar[Ut])
};
function mC(e) {
  return ~JS.indexOf(e);
}
function gC(e, t) {
  const n = t.split("-"), r = n[0], o = n.slice(1).join("-");
  return r === e && o !== "" && !mC(o) ? o : null;
}
const Tg = () => {
  const e = (r) => Cc(mr, (o, i, a) => (o[a] = Cc(i, r, {}), o), {});
  _g = e((r, o, i) => (o[3] && (r[o[3]] = i), o[2] && o[2].filter((s) => typeof s == "number").forEach((s) => {
    r[s.toString(16)] = i;
  }), r)), Eg = e((r, o, i) => (r[i] = i, o[2] && o[2].filter((s) => typeof s == "string").forEach((s) => {
    r[s] = i;
  }), r)), Ag = e((r, o, i) => {
    const a = o[2];
    return r[i] = i, a.forEach((s) => {
      r[s] = i;
    }), r;
  });
  const t = "far" in mr || _e.autoFetchSvg, n = Cc(dC, (r, o) => {
    const i = o[0];
    let a = o[1];
    const s = o[2];
    return a === "far" && !t && (a = "fas"), typeof i == "string" && (r.names[i] = {
      prefix: a,
      iconName: s
    }), typeof i == "number" && (r.unicodes[i.toString(16)] = {
      prefix: a,
      iconName: s
    }), r;
  }, {
    names: {},
    unicodes: {}
  });
  Sg = n.names, Cg = n.unicodes, wu = xs(_e.styleDefault, {
    family: _e.familyDefault
  });
};
tC((e) => {
  wu = xs(e.styleDefault, {
    family: _e.familyDefault
  });
});
Tg();
function _u(e, t) {
  return (_g[e] || {})[t];
}
function yC(e, t) {
  return (Eg[e] || {})[t];
}
function Kn(e, t) {
  return (Ag[e] || {})[t];
}
function Rg(e) {
  return Sg[e] || {
    prefix: null,
    iconName: null
  };
}
function vC(e) {
  const t = Cg[e], n = _u("fas", e);
  return t || (n ? {
    prefix: "fas",
    iconName: n
  } : null) || {
    prefix: null,
    iconName: null
  };
}
function er() {
  return wu;
}
const Eu = () => ({
  prefix: null,
  iconName: null,
  rest: []
});
function xs(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    family: n = ct
  } = t, r = Ar[n][e], o = si[n][e] || si[n][r], i = e in pn.styles ? e : null;
  return o || i || null;
}
const bC = {
  [ct]: Object.keys(Tr[ct]),
  [Vt]: Object.keys(Tr[Vt]),
  [Ut]: Object.keys(Tr[Ut])
};
function ws(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    skipLookups: n = !1
  } = t, r = {
    [ct]: "".concat(_e.cssPrefix, "-").concat(ct),
    [Vt]: "".concat(_e.cssPrefix, "-").concat(Vt),
    [Ut]: "".concat(_e.cssPrefix, "-").concat(Ut)
  };
  let o = null, i = ct;
  const a = TS.filter((c) => c !== cg);
  a.forEach((c) => {
    (e.includes(r[c]) || e.some((l) => bC[c].includes(l))) && (i = c);
  });
  const s = e.reduce((c, l) => {
    const u = gC(_e.cssPrefix, l);
    if (mr[l] ? (l = pC[i].includes(l) ? YS[i][l] : l, o = l, c.prefix = l) : hC[i].indexOf(l) > -1 ? (o = l, c.prefix = xs(l, {
      family: i
    })) : u ? c.iconName = u : l !== _e.replacementClass && !a.some((d) => l === r[d]) && c.rest.push(l), !n && c.prefix && c.iconName) {
      const d = o === "fa" ? Rg(c.iconName) : {}, p = Kn(c.prefix, c.iconName);
      d.prefix && (o = null), c.iconName = d.iconName || p || c.iconName, c.prefix = d.prefix || c.prefix, c.prefix === "far" && !mr.far && mr.fas && !_e.autoFetchSvg && (c.prefix = "fas");
    }
    return c;
  }, Eu());
  return (e.includes("fa-brands") || e.includes("fab")) && (s.prefix = "fab"), (e.includes("fa-duotone") || e.includes("fad")) && (s.prefix = "fad"), !s.prefix && i === Vt && (mr.fass || _e.autoFetchSvg) && (s.prefix = "fass", s.iconName = Kn(s.prefix, s.iconName) || s.iconName), !s.prefix && i === Ut && (mr.fasds || _e.autoFetchSvg) && (s.prefix = "fasds", s.iconName = Kn(s.prefix, s.iconName) || s.iconName), (s.prefix === "fa" || o === "fa") && (s.prefix = er() || "fas"), s;
}
class xC {
  constructor() {
    this.definitions = {};
  }
  add() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r];
    const o = n.reduce(this._pullDefinitions, {});
    Object.keys(o).forEach((i) => {
      this.definitions[i] = {
        ...this.definitions[i] || {},
        ...o[i]
      }, El(i, o[i]);
      const a = Tr[ct][i];
      a && El(a, o[i]), Tg();
    });
  }
  reset() {
    this.definitions = {};
  }
  _pullDefinitions(t, n) {
    const r = n.prefix && n.iconName && n.icon ? {
      0: n
    } : n;
    return Object.keys(r).map((o) => {
      const {
        prefix: i,
        iconName: a,
        icon: s
      } = r[o], c = s[2];
      t[i] || (t[i] = {}), c.length > 0 && c.forEach((l) => {
        typeof l == "string" && (t[i][l] = s);
      }), t[i][a] = s;
    }), t;
  }
}
let zd = [], no = {};
const so = {}, wC = Object.keys(so);
function _C(e, t) {
  let {
    mixoutsTo: n
  } = t;
  return zd = e, no = {}, Object.keys(so).forEach((r) => {
    wC.indexOf(r) === -1 && delete so[r];
  }), zd.forEach((r) => {
    const o = r.mixout ? r.mixout() : {};
    if (Object.keys(o).forEach((i) => {
      typeof o[i] == "function" && (n[i] = o[i]), typeof o[i] == "object" && Object.keys(o[i]).forEach((a) => {
        n[i] || (n[i] = {}), n[i][a] = o[i][a];
      });
    }), r.hooks) {
      const i = r.hooks();
      Object.keys(i).forEach((a) => {
        no[a] || (no[a] = []), no[a].push(i[a]);
      });
    }
    r.provides && r.provides(so);
  }), n;
}
function Sl(e, t) {
  for (var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
    r[o - 2] = arguments[o];
  return (no[e] || []).forEach((a) => {
    t = a.apply(null, [t, ...r]);
  }), t;
}
function Ir(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  (no[e] || []).forEach((i) => {
    i.apply(null, n);
  });
}
function tr() {
  const e = arguments[0], t = Array.prototype.slice.call(arguments, 1);
  return so[e] ? so[e].apply(null, t) : void 0;
}
function Cl(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  let {
    iconName: t
  } = e;
  const n = e.prefix || er();
  if (t)
    return t = Kn(n, t) || t, Fd(Og.definitions, n, t) || Fd(pn.styles, n, t);
}
const Og = new xC(), EC = () => {
  _e.autoReplaceSvg = !1, _e.observeMutations = !1, Ir("noAuto");
}, SC = {
  i2svg: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    return In ? (Ir("beforeI2svg", e), tr("pseudoElements2svg", e), tr("i2svg", e)) : Promise.reject(new Error("Operation requires a DOM of some kind."));
  },
  watch: function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const {
      autoReplaceSvgRoot: t
    } = e;
    _e.autoReplaceSvg === !1 && (_e.autoReplaceSvg = !0), _e.observeMutations = !0, lC(() => {
      AC({
        autoReplaceSvgRoot: t
      }), Ir("watch", e);
    });
  }
}, CC = {
  icon: (e) => {
    if (e === null)
      return null;
    if (typeof e == "object" && e.prefix && e.iconName)
      return {
        prefix: e.prefix,
        iconName: Kn(e.prefix, e.iconName) || e.iconName
      };
    if (Array.isArray(e) && e.length === 2) {
      const t = e[1].indexOf("fa-") === 0 ? e[1].slice(3) : e[1], n = xs(e[0]);
      return {
        prefix: n,
        iconName: Kn(n, t) || t
      };
    }
    if (typeof e == "string" && (e.indexOf("".concat(_e.cssPrefix, "-")) > -1 || e.match(GS))) {
      const t = ws(e.split(" "), {
        skipLookups: !0
      });
      return {
        prefix: t.prefix || er(),
        iconName: Kn(t.prefix, t.iconName) || t.iconName
      };
    }
    if (typeof e == "string") {
      const t = er();
      return {
        prefix: t,
        iconName: Kn(t, e) || e
      };
    }
  }
}, Yt = {
  noAuto: EC,
  config: _e,
  dom: SC,
  parse: CC,
  library: Og,
  findIconDefinition: Cl,
  toHtml: Ii
}, AC = function() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  const {
    autoReplaceSvgRoot: t = st
  } = e;
  (Object.keys(pn.styles).length > 0 || _e.autoFetchSvg) && In && _e.autoReplaceSvg && Yt.dom.i2svg({
    node: t
  });
};
function _s(e, t) {
  return Object.defineProperty(e, "abstract", {
    get: t
  }), Object.defineProperty(e, "html", {
    get: function() {
      return e.abstract.map((n) => Ii(n));
    }
  }), Object.defineProperty(e, "node", {
    get: function() {
      if (!In) return;
      const n = st.createElement("div");
      return n.innerHTML = e.html, n.children;
    }
  }), e;
}
function TC(e) {
  let {
    children: t,
    main: n,
    mask: r,
    attributes: o,
    styles: i,
    transform: a
  } = e;
  if (xu(a) && n.found && !r.found) {
    const {
      width: s,
      height: c
    } = n, l = {
      x: s / c / 2,
      y: 0.5
    };
    o.style = bs({
      ...i,
      "transform-origin": "".concat(l.x + a.x / 16, "em ").concat(l.y + a.y / 16, "em")
    });
  }
  return [{
    tag: "svg",
    attributes: o,
    children: t
  }];
}
function RC(e) {
  let {
    prefix: t,
    iconName: n,
    children: r,
    attributes: o,
    symbol: i
  } = e;
  const a = i === !0 ? "".concat(t, "-").concat(_e.cssPrefix, "-").concat(n) : i;
  return [{
    tag: "svg",
    attributes: {
      style: "display: none;"
    },
    children: [{
      tag: "symbol",
      attributes: {
        ...o,
        id: a
      },
      children: r
    }]
  }];
}
function Su(e) {
  const {
    icons: {
      main: t,
      mask: n
    },
    prefix: r,
    iconName: o,
    transform: i,
    symbol: a,
    title: s,
    maskId: c,
    titleId: l,
    extra: u,
    watchable: d = !1
  } = e, {
    width: p,
    height: h
  } = n.found ? n : t, m = r === "fak", g = [_e.replacementClass, o ? "".concat(_e.cssPrefix, "-").concat(o) : ""].filter((E) => u.classes.indexOf(E) === -1).filter((E) => E !== "" || !!E).concat(u.classes).join(" ");
  let b = {
    children: [],
    attributes: {
      ...u.attributes,
      "data-prefix": r,
      "data-icon": o,
      class: g,
      role: u.attributes.role || "img",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 ".concat(p, " ").concat(h)
    }
  };
  const w = m && !~u.classes.indexOf("fa-fw") ? {
    width: "".concat(p / h * 16 * 0.0625, "em")
  } : {};
  d && (b.attributes[Mr] = ""), s && (b.children.push({
    tag: "title",
    attributes: {
      id: b.attributes["aria-labelledby"] || "title-".concat(l || ci())
    },
    children: [s]
  }), delete b.attributes.title);
  const _ = {
    ...b,
    prefix: r,
    iconName: o,
    main: t,
    mask: n,
    maskId: c,
    transform: i,
    symbol: a,
    styles: {
      ...w,
      ...u.styles
    }
  }, {
    children: S,
    attributes: C
  } = n.found && t.found ? tr("generateAbstractMask", _) || {
    children: [],
    attributes: {}
  } : tr("generateAbstractIcon", _) || {
    children: [],
    attributes: {}
  };
  return _.children = S, _.attributes = C, a ? RC(_) : TC(_);
}
function $d(e) {
  const {
    content: t,
    width: n,
    height: r,
    transform: o,
    title: i,
    extra: a,
    watchable: s = !1
  } = e, c = {
    ...a.attributes,
    ...i ? {
      title: i
    } : {},
    class: a.classes.join(" ")
  };
  s && (c[Mr] = "");
  const l = {
    ...a.styles
  };
  xu(o) && (l.transform = aC({
    transform: o,
    startCentered: !0,
    width: n,
    height: r
  }), l["-webkit-transform"] = l.transform);
  const u = bs(l);
  u.length > 0 && (c.style = u);
  const d = [];
  return d.push({
    tag: "span",
    attributes: c,
    children: [t]
  }), i && d.push({
    tag: "span",
    attributes: {
      class: "sr-only"
    },
    children: [i]
  }), d;
}
function OC(e) {
  const {
    content: t,
    title: n,
    extra: r
  } = e, o = {
    ...r.attributes,
    ...n ? {
      title: n
    } : {},
    class: r.classes.join(" ")
  }, i = bs(r.styles);
  i.length > 0 && (o.style = i);
  const a = [];
  return a.push({
    tag: "span",
    attributes: o,
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
  styles: Ac
} = pn;
function Al(e) {
  const t = e[0], n = e[1], [r] = e.slice(4);
  let o = null;
  return Array.isArray(r) ? o = {
    tag: "g",
    attributes: {
      class: "".concat(_e.cssPrefix, "-").concat(Ec.GROUP)
    },
    children: [{
      tag: "path",
      attributes: {
        class: "".concat(_e.cssPrefix, "-").concat(Ec.SECONDARY),
        fill: "currentColor",
        d: r[0]
      }
    }, {
      tag: "path",
      attributes: {
        class: "".concat(_e.cssPrefix, "-").concat(Ec.PRIMARY),
        fill: "currentColor",
        d: r[1]
      }
    }]
  } : o = {
    tag: "path",
    attributes: {
      fill: "currentColor",
      d: r
    }
  }, {
    found: !0,
    width: t,
    height: n,
    icon: o
  };
}
const kC = {
  found: !1,
  width: 512,
  height: 512
};
function PC(e, t) {
  !pg && !_e.showMissingIcons && e && console.error('Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.'));
}
function Tl(e, t) {
  let n = t;
  return t === "fa" && _e.styleDefault !== null && (t = er()), new Promise((r, o) => {
    if (n === "fa") {
      const i = Rg(e) || {};
      e = i.iconName || e, t = i.prefix || t;
    }
    if (e && t && Ac[t] && Ac[t][e]) {
      const i = Ac[t][e];
      return r(Al(i));
    }
    PC(e, t), r({
      ...kC,
      icon: _e.showMissingIcons && e ? tr("missingIconAbstract") || {} : {}
    });
  });
}
const Vd = () => {
}, Rl = _e.measurePerformance && Ki && Ki.mark && Ki.measure ? Ki : {
  mark: Vd,
  measure: Vd
}, $o = 'FA "6.6.0"', NC = (e) => (Rl.mark("".concat($o, " ").concat(e, " begins")), () => kg(e)), kg = (e) => {
  Rl.mark("".concat($o, " ").concat(e, " ends")), Rl.measure("".concat($o, " ").concat(e), "".concat($o, " ").concat(e, " begins"), "".concat($o, " ").concat(e, " ends"));
};
var Cu = {
  begin: NC,
  end: kg
};
const ha = () => {
};
function Ud(e) {
  return typeof (e.getAttribute ? e.getAttribute(Mr) : null) == "string";
}
function MC(e) {
  const t = e.getAttribute ? e.getAttribute(yu) : null, n = e.getAttribute ? e.getAttribute(vu) : null;
  return t && n;
}
function IC(e) {
  return e && e.classList && e.classList.contains && e.classList.contains(_e.replacementClass);
}
function DC() {
  return _e.autoReplaceSvg === !0 ? ma.replace : ma[_e.autoReplaceSvg] || ma.replace;
}
function jC(e) {
  return st.createElementNS("http://www.w3.org/2000/svg", e);
}
function FC(e) {
  return st.createElement(e);
}
function Pg(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    ceFn: n = e.tag === "svg" ? jC : FC
  } = t;
  if (typeof e == "string")
    return st.createTextNode(e);
  const r = n(e.tag);
  return Object.keys(e.attributes || []).forEach(function(i) {
    r.setAttribute(i, e.attributes[i]);
  }), (e.children || []).forEach(function(i) {
    r.appendChild(Pg(i, {
      ceFn: n
    }));
  }), r;
}
function LC(e) {
  let t = " ".concat(e.outerHTML, " ");
  return t = "".concat(t, "Font Awesome fontawesome.com "), t;
}
const ma = {
  replace: function(e) {
    const t = e[0];
    if (t.parentNode)
      if (e[1].forEach((n) => {
        t.parentNode.insertBefore(Pg(n), t);
      }), t.getAttribute(Mr) === null && _e.keepOriginalSource) {
        let n = st.createComment(LC(t));
        t.parentNode.replaceChild(n, t);
      } else
        t.remove();
  },
  nest: function(e) {
    const t = e[0], n = e[1];
    if (~bu(t).indexOf(_e.replacementClass))
      return ma.replace(e);
    const r = new RegExp("".concat(_e.cssPrefix, "-.*"));
    if (delete n[0].attributes.id, n[0].attributes.class) {
      const i = n[0].attributes.class.split(" ").reduce((a, s) => (s === _e.replacementClass || s.match(r) ? a.toSvg.push(s) : a.toNode.push(s), a), {
        toNode: [],
        toSvg: []
      });
      n[0].attributes.class = i.toSvg.join(" "), i.toNode.length === 0 ? t.removeAttribute("class") : t.setAttribute("class", i.toNode.join(" "));
    }
    const o = n.map((i) => Ii(i)).join(`
`);
    t.setAttribute(Mr, ""), t.innerHTML = o;
  }
};
function Bd(e) {
  e();
}
function Ng(e, t) {
  const n = typeof t == "function" ? t : ha;
  if (e.length === 0)
    n();
  else {
    let r = Bd;
    _e.mutateApproach === HS && (r = Qn.requestAnimationFrame || Bd), r(() => {
      const o = DC(), i = Cu.begin("mutate");
      e.map(o), i(), n();
    });
  }
}
let Au = !1;
function Mg() {
  Au = !0;
}
function Ol() {
  Au = !1;
}
let Ma = null;
function Wd(e) {
  if (!Nd || !_e.observeMutations)
    return;
  const {
    treeCallback: t = ha,
    nodeCallback: n = ha,
    pseudoElementsCallback: r = ha,
    observeMutationsRoot: o = st
  } = e;
  Ma = new Nd((i) => {
    if (Au) return;
    const a = er();
    Ao(i).forEach((s) => {
      if (s.type === "childList" && s.addedNodes.length > 0 && !Ud(s.addedNodes[0]) && (_e.searchPseudoElements && r(s.target), t(s.target)), s.type === "attributes" && s.target.parentNode && _e.searchPseudoElements && r(s.target.parentNode), s.type === "attributes" && Ud(s.target) && ~XS.indexOf(s.attributeName))
        if (s.attributeName === "class" && MC(s.target)) {
          const {
            prefix: c,
            iconName: l
          } = ws(bu(s.target));
          s.target.setAttribute(yu, c || a), l && s.target.setAttribute(vu, l);
        } else IC(s.target) && n(s.target);
    });
  }), In && Ma.observe(o, {
    childList: !0,
    attributes: !0,
    characterData: !0,
    subtree: !0
  });
}
function zC() {
  Ma && Ma.disconnect();
}
function $C(e) {
  const t = e.getAttribute("style");
  let n = [];
  return t && (n = t.split(";").reduce((r, o) => {
    const i = o.split(":"), a = i[0], s = i.slice(1);
    return a && s.length > 0 && (r[a] = s.join(":").trim()), r;
  }, {})), n;
}
function VC(e) {
  const t = e.getAttribute("data-prefix"), n = e.getAttribute("data-icon"), r = e.innerText !== void 0 ? e.innerText.trim() : "";
  let o = ws(bu(e));
  return o.prefix || (o.prefix = er()), t && n && (o.prefix = t, o.iconName = n), o.iconName && o.prefix || (o.prefix && r.length > 0 && (o.iconName = yC(o.prefix, e.innerText) || _u(o.prefix, _l(e.innerText))), !o.iconName && _e.autoFetchSvg && e.firstChild && e.firstChild.nodeType === Node.TEXT_NODE && (o.iconName = e.firstChild.data)), o;
}
function UC(e) {
  const t = Ao(e.attributes).reduce((o, i) => (o.name !== "class" && o.name !== "style" && (o[i.name] = i.value), o), {}), n = e.getAttribute("title"), r = e.getAttribute("data-fa-title-id");
  return _e.autoA11y && (n ? t["aria-labelledby"] = "".concat(_e.replacementClass, "-title-").concat(r || ci()) : (t["aria-hidden"] = "true", t.focusable = "false")), t;
}
function BC() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: dn,
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
function Hd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
    styleParser: !0
  };
  const {
    iconName: n,
    prefix: r,
    rest: o
  } = VC(e), i = UC(e), a = Sl("parseNodeAttributes", {}, e);
  let s = t.styleParser ? $C(e) : [];
  return {
    iconName: n,
    title: e.getAttribute("title"),
    titleId: e.getAttribute("data-fa-title-id"),
    prefix: r,
    transform: dn,
    mask: {
      iconName: null,
      prefix: null,
      rest: []
    },
    maskId: null,
    symbol: !1,
    extra: {
      classes: o,
      styles: s,
      attributes: i
    },
    ...a
  };
}
const {
  styles: WC
} = pn;
function Ig(e) {
  const t = _e.autoReplaceSvg === "nest" ? Hd(e, {
    styleParser: !1
  }) : Hd(e);
  return ~t.extra.classes.indexOf(gg) ? tr("generateLayersText", e, t) : tr("generateSvgReplacementMutation", e, t);
}
let yn = /* @__PURE__ */ new Set();
hg.map((e) => {
  yn.add("fa-".concat(e));
});
Object.keys(Ar[ct]).map(yn.add.bind(yn));
Object.keys(Ar[Vt]).map(yn.add.bind(yn));
Object.keys(Ar[Ut]).map(yn.add.bind(yn));
yn = [...yn];
function qd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!In) return Promise.resolve();
  const n = st.documentElement.classList, r = (u) => n.add("".concat(Dd, "-").concat(u)), o = (u) => n.remove("".concat(Dd, "-").concat(u)), i = _e.autoFetchSvg ? yn : hg.map((u) => "fa-".concat(u)).concat(Object.keys(WC));
  i.includes("fa") || i.push("fa");
  const a = [".".concat(gg, ":not([").concat(Mr, "])")].concat(i.map((u) => ".".concat(u, ":not([").concat(Mr, "])"))).join(", ");
  if (a.length === 0)
    return Promise.resolve();
  let s = [];
  try {
    s = Ao(e.querySelectorAll(a));
  } catch {
  }
  if (s.length > 0)
    r("pending"), o("complete");
  else
    return Promise.resolve();
  const c = Cu.begin("onTree"), l = s.reduce((u, d) => {
    try {
      const p = Ig(d);
      p && u.push(p);
    } catch (p) {
      pg || p.name === "MissingIcon" && console.error(p);
    }
    return u;
  }, []);
  return new Promise((u, d) => {
    Promise.all(l).then((p) => {
      Ng(p, () => {
        r("active"), r("complete"), o("pending"), typeof t == "function" && t(), c(), u();
      });
    }).catch((p) => {
      c(), d(p);
    });
  });
}
function HC(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  Ig(e).then((n) => {
    n && Ng([n], t);
  });
}
function qC(e) {
  return function(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = (t || {}).icon ? t : Cl(t || {});
    let {
      mask: o
    } = n;
    return o && (o = (o || {}).icon ? o : Cl(o || {})), e(r, {
      ...n,
      mask: o
    });
  };
}
const YC = function(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const {
    transform: n = dn,
    symbol: r = !1,
    mask: o = null,
    maskId: i = null,
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
  return _s({
    type: "icon",
    ...e
  }, () => (Ir("beforeDOMElementCreation", {
    iconDefinition: e,
    params: t
  }), _e.autoA11y && (a ? l["aria-labelledby"] = "".concat(_e.replacementClass, "-title-").concat(s || ci()) : (l["aria-hidden"] = "true", l.focusable = "false")), Su({
    icons: {
      main: Al(h),
      mask: o ? Al(o.icon) : {
        found: !1,
        width: null,
        height: null,
        icon: {}
      }
    },
    prefix: d,
    iconName: p,
    transform: {
      ...dn,
      ...n
    },
    symbol: r,
    title: a,
    maskId: i,
    titleId: s,
    extra: {
      attributes: l,
      styles: u,
      classes: c
    }
  })));
};
var GC = {
  mixout() {
    return {
      icon: qC(YC)
    };
  },
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.treeCallback = qd, e.nodeCallback = HC, e;
      }
    };
  },
  provides(e) {
    e.i2svg = function(t) {
      const {
        node: n = st,
        callback: r = () => {
        }
      } = t;
      return qd(n, r);
    }, e.generateSvgReplacementMutation = function(t, n) {
      const {
        iconName: r,
        title: o,
        titleId: i,
        prefix: a,
        transform: s,
        symbol: c,
        mask: l,
        maskId: u,
        extra: d
      } = n;
      return new Promise((p, h) => {
        Promise.all([Tl(r, a), l.iconName ? Tl(l.iconName, l.prefix) : Promise.resolve({
          found: !1,
          width: 512,
          height: 512,
          icon: {}
        })]).then((m) => {
          let [g, b] = m;
          p([t, Su({
            icons: {
              main: g,
              mask: b
            },
            prefix: a,
            iconName: r,
            transform: s,
            symbol: c,
            maskId: u,
            title: o,
            titleId: i,
            extra: d,
            watchable: !0
          })]);
        }).catch(h);
      });
    }, e.generateAbstractIcon = function(t) {
      let {
        children: n,
        attributes: r,
        main: o,
        transform: i,
        styles: a
      } = t;
      const s = bs(a);
      s.length > 0 && (r.style = s);
      let c;
      return xu(i) && (c = tr("generateAbstractTransformGrouping", {
        main: o,
        transform: i,
        containerWidth: o.width,
        iconWidth: o.width
      })), n.push(c || o.icon), {
        children: n,
        attributes: r
      };
    };
  }
}, KC = {
  mixout() {
    return {
      layer(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          classes: n = []
        } = t;
        return _s({
          type: "layer"
        }, () => {
          Ir("beforeDOMElementCreation", {
            assembler: e,
            params: t
          });
          let r = [];
          return e((o) => {
            Array.isArray(o) ? o.map((i) => {
              r = r.concat(i.abstract);
            }) : r = r.concat(o.abstract);
          }), [{
            tag: "span",
            attributes: {
              class: ["".concat(_e.cssPrefix, "-layers"), ...n].join(" ")
            },
            children: r
          }];
        });
      }
    };
  }
}, ZC = {
  mixout() {
    return {
      counter(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          title: n = null,
          classes: r = [],
          attributes: o = {},
          styles: i = {}
        } = t;
        return _s({
          type: "counter",
          content: e
        }, () => (Ir("beforeDOMElementCreation", {
          content: e,
          params: t
        }), OC({
          content: e.toString(),
          title: n,
          extra: {
            attributes: o,
            styles: i,
            classes: ["".concat(_e.cssPrefix, "-layers-counter"), ...r]
          }
        })));
      }
    };
  }
}, XC = {
  mixout() {
    return {
      text(e) {
        let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        const {
          transform: n = dn,
          title: r = null,
          classes: o = [],
          attributes: i = {},
          styles: a = {}
        } = t;
        return _s({
          type: "text",
          content: e
        }, () => (Ir("beforeDOMElementCreation", {
          content: e,
          params: t
        }), $d({
          content: e,
          transform: {
            ...dn,
            ...n
          },
          title: r,
          extra: {
            attributes: i,
            styles: a,
            classes: ["".concat(_e.cssPrefix, "-layers-text"), ...o]
          }
        })));
      }
    };
  },
  provides(e) {
    e.generateLayersText = function(t, n) {
      const {
        title: r,
        transform: o,
        extra: i
      } = n;
      let a = null, s = null;
      if (sg) {
        const c = parseInt(getComputedStyle(t).fontSize, 10), l = t.getBoundingClientRect();
        a = l.width / c, s = l.height / c;
      }
      return _e.autoA11y && !r && (i.attributes["aria-hidden"] = "true"), Promise.resolve([t, $d({
        content: t.innerHTML,
        width: a,
        height: s,
        transform: o,
        title: r,
        extra: i,
        watchable: !0
      })]);
    };
  }
};
const JC = new RegExp('"', "ug"), Yd = [1105920, 1112319], Gd = {
  FontAwesome: {
    normal: "fas",
    400: "fas"
  },
  ...MS,
  ...NS,
  ...VS
}, kl = Object.keys(Gd).reduce((e, t) => (e[t.toLowerCase()] = Gd[t], e), {}), QC = Object.keys(kl).reduce((e, t) => {
  const n = kl[t];
  return e[t] = n[900] || [...Object.entries(n)][0][1], e;
}, {});
function e1(e) {
  const t = e.replace(JC, ""), n = fC(t, 0), r = n >= Yd[0] && n <= Yd[1], o = t.length === 2 ? t[0] === t[1] : !1;
  return {
    value: _l(o ? t[0] : t),
    isSecondary: r || o
  };
}
function t1(e, t) {
  const n = e.replace(/^['"]|['"]$/g, "").toLowerCase(), r = parseInt(t), o = isNaN(r) ? "normal" : r;
  return (kl[n] || {})[o] || QC[n];
}
function Kd(e, t) {
  const n = "".concat(WS).concat(t.replace(":", "-"));
  return new Promise((r, o) => {
    if (e.getAttribute(n) !== null)
      return r();
    const a = Ao(e.children).filter((p) => p.getAttribute(vl) === t)[0], s = Qn.getComputedStyle(e, t), c = s.getPropertyValue("font-family"), l = c.match(KS), u = s.getPropertyValue("font-weight"), d = s.getPropertyValue("content");
    if (a && !l)
      return e.removeChild(a), r();
    if (l && d !== "none" && d !== "") {
      const p = s.getPropertyValue("content");
      let h = t1(c, u);
      const {
        value: m,
        isSecondary: g
      } = e1(p), b = l[0].startsWith("FontAwesome");
      let w = _u(h, m), _ = w;
      if (b) {
        const S = vC(m);
        S.iconName && S.prefix && (w = S.iconName, h = S.prefix);
      }
      if (w && !g && (!a || a.getAttribute(yu) !== h || a.getAttribute(vu) !== _)) {
        e.setAttribute(n, _), a && e.removeChild(a);
        const S = BC(), {
          extra: C
        } = S;
        C.attributes[vl] = t, Tl(w, h).then((E) => {
          const N = Su({
            ...S,
            icons: {
              main: E,
              mask: Eu()
            },
            prefix: h,
            iconName: _,
            extra: C,
            watchable: !0
          }), P = st.createElementNS("http://www.w3.org/2000/svg", "svg");
          t === "::before" ? e.insertBefore(P, e.firstChild) : e.appendChild(P), P.outerHTML = N.map((B) => Ii(B)).join(`
`), e.removeAttribute(n), r();
        }).catch(o);
      } else
        r();
    } else
      r();
  });
}
function n1(e) {
  return Promise.all([Kd(e, "::before"), Kd(e, "::after")]);
}
function r1(e) {
  return e.parentNode !== document.head && !~qS.indexOf(e.tagName.toUpperCase()) && !e.getAttribute(vl) && (!e.parentNode || e.parentNode.tagName !== "svg");
}
function Zd(e) {
  if (In)
    return new Promise((t, n) => {
      const r = Ao(e.querySelectorAll("*")).filter(r1).map(n1), o = Cu.begin("searchPseudoElements");
      Mg(), Promise.all(r).then(() => {
        o(), Ol(), t();
      }).catch(() => {
        o(), Ol(), n();
      });
    });
}
var o1 = {
  hooks() {
    return {
      mutationObserverCallbacks(e) {
        return e.pseudoElementsCallback = Zd, e;
      }
    };
  },
  provides(e) {
    e.pseudoElements2svg = function(t) {
      const {
        node: n = st
      } = t;
      _e.searchPseudoElements && Zd(n);
    };
  }
};
let Xd = !1;
var i1 = {
  mixout() {
    return {
      dom: {
        unwatch() {
          Mg(), Xd = !0;
        }
      }
    };
  },
  hooks() {
    return {
      bootstrap() {
        Wd(Sl("mutationObserverCallbacks", {}));
      },
      noAuto() {
        zC();
      },
      watch(e) {
        const {
          observeMutationsRoot: t
        } = e;
        Xd ? Ol() : Wd(Sl("mutationObserverCallbacks", {
          observeMutationsRoot: t
        }));
      }
    };
  }
};
const Jd = (e) => {
  let t = {
    size: 16,
    x: 0,
    y: 0,
    flipX: !1,
    flipY: !1,
    rotate: 0
  };
  return e.toLowerCase().split(" ").reduce((n, r) => {
    const o = r.toLowerCase().split("-"), i = o[0];
    let a = o.slice(1).join("-");
    if (i && a === "h")
      return n.flipX = !0, n;
    if (i && a === "v")
      return n.flipY = !0, n;
    if (a = parseFloat(a), isNaN(a))
      return n;
    switch (i) {
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
var a1 = {
  mixout() {
    return {
      parse: {
        transform: (e) => Jd(e)
      }
    };
  },
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-transform");
        return n && (e.transform = Jd(n)), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractTransformGrouping = function(t) {
      let {
        main: n,
        transform: r,
        containerWidth: o,
        iconWidth: i
      } = t;
      const a = {
        transform: "translate(".concat(o / 2, " 256)")
      }, s = "translate(".concat(r.x * 32, ", ").concat(r.y * 32, ") "), c = "scale(".concat(r.size / 16 * (r.flipX ? -1 : 1), ", ").concat(r.size / 16 * (r.flipY ? -1 : 1), ") "), l = "rotate(".concat(r.rotate, " 0 0)"), u = {
        transform: "".concat(s, " ").concat(c, " ").concat(l)
      }, d = {
        transform: "translate(".concat(i / 2 * -1, " -256)")
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
const Tc = {
  x: 0,
  y: 0,
  width: "100%",
  height: "100%"
};
function Qd(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e;
}
function s1(e) {
  return e.tag === "g" ? e.children : [e];
}
var c1 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-mask"), r = n ? ws(n.split(" ").map((o) => o.trim())) : Eu();
        return r.prefix || (r.prefix = er()), e.mask = r, e.maskId = t.getAttribute("data-fa-mask-id"), e;
      }
    };
  },
  provides(e) {
    e.generateAbstractMask = function(t) {
      let {
        children: n,
        attributes: r,
        main: o,
        mask: i,
        maskId: a,
        transform: s
      } = t;
      const {
        width: c,
        icon: l
      } = o, {
        width: u,
        icon: d
      } = i, p = iC({
        transform: s,
        containerWidth: u,
        iconWidth: c
      }), h = {
        tag: "rect",
        attributes: {
          ...Tc,
          fill: "white"
        }
      }, m = l.children ? {
        children: l.children.map(Qd)
      } : {}, g = {
        tag: "g",
        attributes: {
          ...p.inner
        },
        children: [Qd({
          tag: l.tag,
          attributes: {
            ...l.attributes,
            ...p.path
          },
          ...m
        })]
      }, b = {
        tag: "g",
        attributes: {
          ...p.outer
        },
        children: [g]
      }, w = "mask-".concat(a || ci()), _ = "clip-".concat(a || ci()), S = {
        tag: "mask",
        attributes: {
          ...Tc,
          id: w,
          maskUnits: "userSpaceOnUse",
          maskContentUnits: "userSpaceOnUse"
        },
        children: [h, b]
      }, C = {
        tag: "defs",
        children: [{
          tag: "clipPath",
          attributes: {
            id: _
          },
          children: s1(d)
        }, S]
      };
      return n.push(C, {
        tag: "rect",
        attributes: {
          fill: "currentColor",
          "clip-path": "url(#".concat(_, ")"),
          mask: "url(#".concat(w, ")"),
          ...Tc
        }
      }), {
        children: n,
        attributes: r
      };
    };
  }
}, l1 = {
  provides(e) {
    let t = !1;
    Qn.matchMedia && (t = Qn.matchMedia("(prefers-reduced-motion: reduce)").matches), e.missingIconAbstract = function() {
      const n = [], r = {
        fill: "currentColor"
      }, o = {
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
      const i = {
        ...o,
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
          ...o,
          attributeName: "r",
          values: "28;14;28;28;14;28;"
        }
      }, {
        tag: "animate",
        attributes: {
          ...i,
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
            ...i,
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
            ...i,
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
}, u1 = {
  hooks() {
    return {
      parseNodeAttributes(e, t) {
        const n = t.getAttribute("data-fa-symbol"), r = n === null ? !1 : n === "" ? !0 : n;
        return e.symbol = r, e;
      }
    };
  }
}, f1 = [cC, GC, KC, ZC, XC, o1, i1, a1, c1, l1, u1];
_C(f1, {
  mixoutsTo: Yt
});
Yt.noAuto;
Yt.config;
Yt.library;
Yt.dom;
const Pl = Yt.parse;
Yt.findIconDefinition;
Yt.toHtml;
const d1 = Yt.icon;
Yt.layer;
Yt.text;
Yt.counter;
var Nl = { exports: {} }, Zi = { exports: {} }, Xe = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ep;
function p1() {
  if (ep) return Xe;
  ep = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
  function S(E) {
    if (typeof E == "object" && E !== null) {
      var N = E.$$typeof;
      switch (N) {
        case t:
          switch (E = E.type, E) {
            case c:
            case l:
            case r:
            case i:
            case o:
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
  function C(E) {
    return S(E) === l;
  }
  return Xe.AsyncMode = c, Xe.ConcurrentMode = l, Xe.ContextConsumer = s, Xe.ContextProvider = a, Xe.Element = t, Xe.ForwardRef = u, Xe.Fragment = r, Xe.Lazy = m, Xe.Memo = h, Xe.Portal = n, Xe.Profiler = i, Xe.StrictMode = o, Xe.Suspense = d, Xe.isAsyncMode = function(E) {
    return C(E) || S(E) === c;
  }, Xe.isConcurrentMode = C, Xe.isContextConsumer = function(E) {
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
    return S(E) === i;
  }, Xe.isStrictMode = function(E) {
    return S(E) === o;
  }, Xe.isSuspense = function(E) {
    return S(E) === d;
  }, Xe.isValidElementType = function(E) {
    return typeof E == "string" || typeof E == "function" || E === r || E === l || E === i || E === o || E === d || E === p || typeof E == "object" && E !== null && (E.$$typeof === m || E.$$typeof === h || E.$$typeof === a || E.$$typeof === s || E.$$typeof === u || E.$$typeof === b || E.$$typeof === w || E.$$typeof === _ || E.$$typeof === g);
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
var tp;
function h1() {
  return tp || (tp = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, g = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, _ = e ? Symbol.for("react.scope") : 60119;
    function S(ee) {
      return typeof ee == "string" || typeof ee == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      ee === r || ee === l || ee === i || ee === o || ee === d || ee === p || typeof ee == "object" && ee !== null && (ee.$$typeof === m || ee.$$typeof === h || ee.$$typeof === a || ee.$$typeof === s || ee.$$typeof === u || ee.$$typeof === b || ee.$$typeof === w || ee.$$typeof === _ || ee.$$typeof === g);
    }
    function C(ee) {
      if (typeof ee == "object" && ee !== null) {
        var Te = ee.$$typeof;
        switch (Te) {
          case t:
            var He = ee.type;
            switch (He) {
              case c:
              case l:
              case r:
              case i:
              case o:
              case d:
                return He;
              default:
                var lt = He && He.$$typeof;
                switch (lt) {
                  case s:
                  case u:
                  case m:
                  case h:
                  case a:
                    return lt;
                  default:
                    return Te;
                }
            }
          case n:
            return Te;
        }
      }
    }
    var E = c, N = l, P = s, B = a, ce = t, pe = u, fe = r, $ = m, Q = h, D = n, re = i, M = o, le = d, we = !1;
    function X(ee) {
      return we || (we = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), L(ee) || C(ee) === c;
    }
    function L(ee) {
      return C(ee) === l;
    }
    function W(ee) {
      return C(ee) === s;
    }
    function he(ee) {
      return C(ee) === a;
    }
    function I(ee) {
      return typeof ee == "object" && ee !== null && ee.$$typeof === t;
    }
    function G(ee) {
      return C(ee) === u;
    }
    function oe(ee) {
      return C(ee) === r;
    }
    function Y(ee) {
      return C(ee) === m;
    }
    function K(ee) {
      return C(ee) === h;
    }
    function ie(ee) {
      return C(ee) === n;
    }
    function de(ee) {
      return C(ee) === i;
    }
    function ve(ee) {
      return C(ee) === o;
    }
    function Ne(ee) {
      return C(ee) === d;
    }
    Je.AsyncMode = E, Je.ConcurrentMode = N, Je.ContextConsumer = P, Je.ContextProvider = B, Je.Element = ce, Je.ForwardRef = pe, Je.Fragment = fe, Je.Lazy = $, Je.Memo = Q, Je.Portal = D, Je.Profiler = re, Je.StrictMode = M, Je.Suspense = le, Je.isAsyncMode = X, Je.isConcurrentMode = L, Je.isContextConsumer = W, Je.isContextProvider = he, Je.isElement = I, Je.isForwardRef = G, Je.isFragment = oe, Je.isLazy = Y, Je.isMemo = K, Je.isPortal = ie, Je.isProfiler = de, Je.isStrictMode = ve, Je.isSuspense = Ne, Je.isValidElementType = S, Je.typeOf = C;
  }()), Je;
}
var np;
function Dg() {
  return np || (np = 1, process.env.NODE_ENV === "production" ? Zi.exports = p1() : Zi.exports = h1()), Zi.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Rc, rp;
function m1() {
  if (rp) return Rc;
  rp = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
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
  return Rc = o() ? Object.assign : function(i, a) {
    for (var s, c = r(i), l, u = 1; u < arguments.length; u++) {
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
  }, Rc;
}
var Oc, op;
function Tu() {
  if (op) return Oc;
  op = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Oc = e, Oc;
}
var kc, ip;
function jg() {
  return ip || (ip = 1, kc = Function.call.bind(Object.prototype.hasOwnProperty)), kc;
}
var Pc, ap;
function g1() {
  if (ap) return Pc;
  ap = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Tu(), n = {}, r = jg();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, c, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in i)
        if (r(i, u)) {
          var d;
          try {
            if (typeof i[u] != "function") {
              var p = Error(
                (c || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            d = i[u](a, u, c, s, null, t);
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
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Pc = o, Pc;
}
var Nc, sp;
function y1() {
  if (sp) return Nc;
  sp = 1;
  var e = Dg(), t = m1(), n = Tu(), r = jg(), o = g1(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
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
  return Nc = function(s, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(L) {
      var W = L && (l && L[l] || L[u]);
      if (typeof W == "function")
        return W;
    }
    var p = "<<anonymous>>", h = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: _(),
      arrayOf: S,
      element: C(),
      elementType: E(),
      instanceOf: N,
      node: pe(),
      objectOf: B,
      oneOf: P,
      oneOfType: ce,
      shape: $,
      exact: Q
    };
    function m(L, W) {
      return L === W ? L !== 0 || 1 / L === 1 / W : L !== L && W !== W;
    }
    function g(L, W) {
      this.message = L, this.data = W && typeof W == "object" ? W : {}, this.stack = "";
    }
    g.prototype = Error.prototype;
    function b(L) {
      if (process.env.NODE_ENV !== "production")
        var W = {}, he = 0;
      function I(oe, Y, K, ie, de, ve, Ne) {
        if (ie = ie || p, ve = ve || K, Ne !== n) {
          if (c) {
            var ee = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ee.name = "Invariant Violation", ee;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Te = ie + ":" + K;
            !W[Te] && // Avoid spamming the console because they are often not actionable except for lib authors
            he < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + ve + "` prop on `" + ie + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), W[Te] = !0, he++);
          }
        }
        return Y[K] == null ? oe ? Y[K] === null ? new g("The " + de + " `" + ve + "` is marked as required " + ("in `" + ie + "`, but its value is `null`.")) : new g("The " + de + " `" + ve + "` is marked as required in " + ("`" + ie + "`, but its value is `undefined`.")) : null : L(Y, K, ie, de, ve);
      }
      var G = I.bind(null, !1);
      return G.isRequired = I.bind(null, !0), G;
    }
    function w(L) {
      function W(he, I, G, oe, Y, K) {
        var ie = he[I], de = M(ie);
        if (de !== L) {
          var ve = le(ie);
          return new g(
            "Invalid " + oe + " `" + Y + "` of type " + ("`" + ve + "` supplied to `" + G + "`, expected ") + ("`" + L + "`."),
            { expectedType: L }
          );
        }
        return null;
      }
      return b(W);
    }
    function _() {
      return b(a);
    }
    function S(L) {
      function W(he, I, G, oe, Y) {
        if (typeof L != "function")
          return new g("Property `" + Y + "` of component `" + G + "` has invalid PropType notation inside arrayOf.");
        var K = he[I];
        if (!Array.isArray(K)) {
          var ie = M(K);
          return new g("Invalid " + oe + " `" + Y + "` of type " + ("`" + ie + "` supplied to `" + G + "`, expected an array."));
        }
        for (var de = 0; de < K.length; de++) {
          var ve = L(K, de, G, oe, Y + "[" + de + "]", n);
          if (ve instanceof Error)
            return ve;
        }
        return null;
      }
      return b(W);
    }
    function C() {
      function L(W, he, I, G, oe) {
        var Y = W[he];
        if (!s(Y)) {
          var K = M(Y);
          return new g("Invalid " + G + " `" + oe + "` of type " + ("`" + K + "` supplied to `" + I + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(L);
    }
    function E() {
      function L(W, he, I, G, oe) {
        var Y = W[he];
        if (!e.isValidElementType(Y)) {
          var K = M(Y);
          return new g("Invalid " + G + " `" + oe + "` of type " + ("`" + K + "` supplied to `" + I + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(L);
    }
    function N(L) {
      function W(he, I, G, oe, Y) {
        if (!(he[I] instanceof L)) {
          var K = L.name || p, ie = X(he[I]);
          return new g("Invalid " + oe + " `" + Y + "` of type " + ("`" + ie + "` supplied to `" + G + "`, expected ") + ("instance of `" + K + "`."));
        }
        return null;
      }
      return b(W);
    }
    function P(L) {
      if (!Array.isArray(L))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function W(he, I, G, oe, Y) {
        for (var K = he[I], ie = 0; ie < L.length; ie++)
          if (m(K, L[ie]))
            return null;
        var de = JSON.stringify(L, function(Ne, ee) {
          var Te = le(ee);
          return Te === "symbol" ? String(ee) : ee;
        });
        return new g("Invalid " + oe + " `" + Y + "` of value `" + String(K) + "` " + ("supplied to `" + G + "`, expected one of " + de + "."));
      }
      return b(W);
    }
    function B(L) {
      function W(he, I, G, oe, Y) {
        if (typeof L != "function")
          return new g("Property `" + Y + "` of component `" + G + "` has invalid PropType notation inside objectOf.");
        var K = he[I], ie = M(K);
        if (ie !== "object")
          return new g("Invalid " + oe + " `" + Y + "` of type " + ("`" + ie + "` supplied to `" + G + "`, expected an object."));
        for (var de in K)
          if (r(K, de)) {
            var ve = L(K, de, G, oe, Y + "." + de, n);
            if (ve instanceof Error)
              return ve;
          }
        return null;
      }
      return b(W);
    }
    function ce(L) {
      if (!Array.isArray(L))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var W = 0; W < L.length; W++) {
        var he = L[W];
        if (typeof he != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + we(he) + " at index " + W + "."
          ), a;
      }
      function I(G, oe, Y, K, ie) {
        for (var de = [], ve = 0; ve < L.length; ve++) {
          var Ne = L[ve], ee = Ne(G, oe, Y, K, ie, n);
          if (ee == null)
            return null;
          ee.data && r(ee.data, "expectedType") && de.push(ee.data.expectedType);
        }
        var Te = de.length > 0 ? ", expected one of type [" + de.join(", ") + "]" : "";
        return new g("Invalid " + K + " `" + ie + "` supplied to " + ("`" + Y + "`" + Te + "."));
      }
      return b(I);
    }
    function pe() {
      function L(W, he, I, G, oe) {
        return D(W[he]) ? null : new g("Invalid " + G + " `" + oe + "` supplied to " + ("`" + I + "`, expected a ReactNode."));
      }
      return b(L);
    }
    function fe(L, W, he, I, G) {
      return new g(
        (L || "React class") + ": " + W + " type `" + he + "." + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + G + "`."
      );
    }
    function $(L) {
      function W(he, I, G, oe, Y) {
        var K = he[I], ie = M(K);
        if (ie !== "object")
          return new g("Invalid " + oe + " `" + Y + "` of type `" + ie + "` " + ("supplied to `" + G + "`, expected `object`."));
        for (var de in L) {
          var ve = L[de];
          if (typeof ve != "function")
            return fe(G, oe, Y, de, le(ve));
          var Ne = ve(K, de, G, oe, Y + "." + de, n);
          if (Ne)
            return Ne;
        }
        return null;
      }
      return b(W);
    }
    function Q(L) {
      function W(he, I, G, oe, Y) {
        var K = he[I], ie = M(K);
        if (ie !== "object")
          return new g("Invalid " + oe + " `" + Y + "` of type `" + ie + "` " + ("supplied to `" + G + "`, expected `object`."));
        var de = t({}, he[I], L);
        for (var ve in de) {
          var Ne = L[ve];
          if (r(L, ve) && typeof Ne != "function")
            return fe(G, oe, Y, ve, le(Ne));
          if (!Ne)
            return new g(
              "Invalid " + oe + " `" + Y + "` key `" + ve + "` supplied to `" + G + "`.\nBad object: " + JSON.stringify(he[I], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(L), null, "  ")
            );
          var ee = Ne(K, ve, G, oe, Y + "." + ve, n);
          if (ee)
            return ee;
        }
        return null;
      }
      return b(W);
    }
    function D(L) {
      switch (typeof L) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !L;
        case "object":
          if (Array.isArray(L))
            return L.every(D);
          if (L === null || s(L))
            return !0;
          var W = d(L);
          if (W) {
            var he = W.call(L), I;
            if (W !== L.entries) {
              for (; !(I = he.next()).done; )
                if (!D(I.value))
                  return !1;
            } else
              for (; !(I = he.next()).done; ) {
                var G = I.value;
                if (G && !D(G[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function re(L, W) {
      return L === "symbol" ? !0 : W ? W["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && W instanceof Symbol : !1;
    }
    function M(L) {
      var W = typeof L;
      return Array.isArray(L) ? "array" : L instanceof RegExp ? "object" : re(W, L) ? "symbol" : W;
    }
    function le(L) {
      if (typeof L > "u" || L === null)
        return "" + L;
      var W = M(L);
      if (W === "object") {
        if (L instanceof Date)
          return "date";
        if (L instanceof RegExp)
          return "regexp";
      }
      return W;
    }
    function we(L) {
      var W = le(L);
      switch (W) {
        case "array":
        case "object":
          return "an " + W;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + W;
        default:
          return W;
      }
    }
    function X(L) {
      return !L.constructor || !L.constructor.name ? p : L.constructor.name;
    }
    return h.checkPropTypes = o, h.resetWarningCache = o.resetWarningCache, h.PropTypes = h, h;
  }, Nc;
}
var Mc, cp;
function v1() {
  if (cp) return Mc;
  cp = 1;
  var e = Tu();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Mc = function() {
    function r(a, s, c, l, u, d) {
      if (d !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var i = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, Mc;
}
if (process.env.NODE_ENV !== "production") {
  var b1 = Dg(), x1 = !0;
  Nl.exports = y1()(b1.isElement, x1);
} else
  Nl.exports = v1()();
var w1 = Nl.exports;
const We = /* @__PURE__ */ Kp(w1);
function lp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ln(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? lp(Object(n), !0).forEach(function(r) {
      ro(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lp(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ia(e) {
  "@babel/helpers - typeof";
  return Ia = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ia(e);
}
function ro(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function _1(e, t) {
  if (e == null) return {};
  var n = {}, r = Object.keys(e), o, i;
  for (i = 0; i < r.length; i++)
    o = r[i], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
function E1(e, t) {
  if (e == null) return {};
  var n = _1(e, t), r, o;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (o = 0; o < i.length; o++)
      r = i[o], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ml(e) {
  return S1(e) || C1(e) || A1(e) || T1();
}
function S1(e) {
  if (Array.isArray(e)) return Il(e);
}
function C1(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function A1(e, t) {
  if (e) {
    if (typeof e == "string") return Il(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Il(e, t);
  }
}
function Il(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function T1() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function R1(e) {
  var t, n = e.beat, r = e.fade, o = e.beatFade, i = e.bounce, a = e.shake, s = e.flash, c = e.spin, l = e.spinPulse, u = e.spinReverse, d = e.pulse, p = e.fixedWidth, h = e.inverse, m = e.border, g = e.listItem, b = e.flip, w = e.size, _ = e.rotation, S = e.pull, C = (t = {
    "fa-beat": n,
    "fa-fade": r,
    "fa-beat-fade": o,
    "fa-bounce": i,
    "fa-shake": a,
    "fa-flash": s,
    "fa-spin": c,
    "fa-spin-reverse": u,
    "fa-spin-pulse": l,
    "fa-pulse": d,
    "fa-fw": p,
    "fa-inverse": h,
    "fa-border": m,
    "fa-li": g,
    "fa-flip": b === !0,
    "fa-flip-horizontal": b === "horizontal" || b === "both",
    "fa-flip-vertical": b === "vertical" || b === "both"
  }, ro(t, "fa-".concat(w), typeof w < "u" && w !== null), ro(t, "fa-rotate-".concat(_), typeof _ < "u" && _ !== null && _ !== 0), ro(t, "fa-pull-".concat(S), typeof S < "u" && S !== null), ro(t, "fa-swap-opacity", e.swapOpacity), t);
  return Object.keys(C).map(function(E) {
    return C[E] ? E : null;
  }).filter(function(E) {
    return E;
  });
}
function O1(e) {
  return e = e - 0, e === e;
}
function Fg(e) {
  return O1(e) ? e : (e = e.replace(/[\-_\s]+(.)?/g, function(t, n) {
    return n ? n.toUpperCase() : "";
  }), e.substr(0, 1).toLowerCase() + e.substr(1));
}
var k1 = ["style"];
function P1(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function N1(e) {
  return e.split(";").map(function(t) {
    return t.trim();
  }).filter(function(t) {
    return t;
  }).reduce(function(t, n) {
    var r = n.indexOf(":"), o = Fg(n.slice(0, r)), i = n.slice(r + 1).trim();
    return o.startsWith("webkit") ? t[P1(o)] = i : t[o] = i, t;
  }, {});
}
function Lg(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string")
    return t;
  var r = (t.children || []).map(function(c) {
    return Lg(e, c);
  }), o = Object.keys(t.attributes || {}).reduce(function(c, l) {
    var u = t.attributes[l];
    switch (l) {
      case "class":
        c.attrs.className = u, delete t.attributes.class;
        break;
      case "style":
        c.attrs.style = N1(u);
        break;
      default:
        l.indexOf("aria-") === 0 || l.indexOf("data-") === 0 ? c.attrs[l.toLowerCase()] = u : c.attrs[Fg(l)] = u;
    }
    return c;
  }, {
    attrs: {}
  }), i = n.style, a = i === void 0 ? {} : i, s = E1(n, k1);
  return o.attrs.style = ln(ln({}, o.attrs.style), a), e.apply(void 0, [t.tag, ln(ln({}, o.attrs), s)].concat(Ml(r)));
}
var zg = !1;
try {
  zg = process.env.NODE_ENV === "production";
} catch {
}
function M1() {
  if (!zg && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function up(e) {
  if (e && Ia(e) === "object" && e.prefix && e.iconName && e.icon)
    return e;
  if (Pl.icon)
    return Pl.icon(e);
  if (e === null)
    return null;
  if (e && Ia(e) === "object" && e.prefix && e.iconName)
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
function Ic(e, t) {
  return Array.isArray(t) && t.length > 0 || !Array.isArray(t) && t ? ro({}, e, t) : {};
}
var fp = {
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
}, nr = /* @__PURE__ */ $e.forwardRef(function(e, t) {
  var n = ln(ln({}, fp), e), r = n.icon, o = n.mask, i = n.symbol, a = n.className, s = n.title, c = n.titleId, l = n.maskId, u = up(r), d = Ic("classes", [].concat(Ml(R1(n)), Ml((a || "").split(" ")))), p = Ic("transform", typeof n.transform == "string" ? Pl.transform(n.transform) : n.transform), h = Ic("mask", up(o)), m = d1(u, ln(ln(ln(ln({}, d), p), h), {}, {
    symbol: i,
    title: s,
    titleId: c,
    maskId: l
  }));
  if (!m)
    return M1("Could not find icon", u), null;
  var g = m.abstract, b = {
    ref: t
  };
  return Object.keys(n).forEach(function(w) {
    fp.hasOwnProperty(w) || (b[w] = n[w]);
  }), I1(g[0], b);
});
nr.displayName = "FontAwesomeIcon";
nr.propTypes = {
  beat: We.bool,
  border: We.bool,
  beatFade: We.bool,
  bounce: We.bool,
  className: We.string,
  fade: We.bool,
  flash: We.bool,
  mask: We.oneOfType([We.object, We.array, We.string]),
  maskId: We.string,
  fixedWidth: We.bool,
  inverse: We.bool,
  flip: We.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: We.oneOfType([We.object, We.array, We.string]),
  listItem: We.bool,
  pull: We.oneOf(["right", "left"]),
  pulse: We.bool,
  rotation: We.oneOf([0, 90, 180, 270]),
  shake: We.bool,
  size: We.oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]),
  spin: We.bool,
  spinPulse: We.bool,
  spinReverse: We.bool,
  symbol: We.oneOfType([We.bool, We.string]),
  title: We.string,
  titleId: We.string,
  transform: We.oneOfType([We.string, We.object]),
  swapOpacity: We.bool
};
var I1 = Lg.bind(null, $e.createElement);
const $g = {
  prefix: "fas",
  iconName: "upload",
  icon: [512, 512, [], "f093", "M288 109.3L288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-242.7-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352l128 0c0 35.3 28.7 64 64 64s64-28.7 64-64l128 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]
}, D1 = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, j1 = D1, F1 = {
  prefix: "fas",
  iconName: "xmark",
  icon: [384, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]
}, L1 = F1, z1 = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, $1 = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
};
var Di = (e) => e.type === "checkbox", oo = (e) => e instanceof Date, Ct = (e) => e == null;
const Vg = (e) => typeof e == "object";
var xt = (e) => !Ct(e) && !Array.isArray(e) && Vg(e) && !oo(e), Ug = (e) => xt(e) && e.target ? Di(e.target) ? e.target.checked : e.target.value : e, V1 = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Bg = (e, t) => e.has(V1(t)), U1 = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return xt(t) && t.hasOwnProperty("isPrototypeOf");
}, Ru = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function It(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(Ru && (e instanceof Blob || e instanceof FileList)) && (n || xt(e)))
    if (t = n ? [] : {}, !n && !U1(e))
      t = e;
    else
      for (const r in e)
        e.hasOwnProperty(r) && (t[r] = It(e[r]));
  else
    return e;
  return t;
}
var Es = (e) => Array.isArray(e) ? e.filter(Boolean) : [], pt = (e) => e === void 0, ue = (e, t, n) => {
  if (!t || !xt(e))
    return n;
  const r = Es(t.split(/[,[\].]+?/)).reduce((o, i) => Ct(o) ? o : o[i], e);
  return pt(r) || r === e ? pt(e[t]) ? n : e[t] : r;
}, un = (e) => typeof e == "boolean", Ou = (e) => /^\w*$/.test(e), Wg = (e) => Es(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Qe = (e, t, n) => {
  let r = -1;
  const o = Ou(t) ? [t] : Wg(t), i = o.length, a = i - 1;
  for (; ++r < i; ) {
    const s = o[r];
    let c = n;
    if (r !== a) {
      const l = e[s];
      c = xt(l) || Array.isArray(l) ? l : isNaN(+o[r + 1]) ? {} : [];
    }
    if (s === "__proto__")
      return;
    e[s] = c, e = e[s];
  }
  return e;
};
const Da = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, Xt = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, En = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Hg = $e.createContext(null), Ss = () => $e.useContext(Hg), B1 = (e) => {
  const { children: t, ...n } = e;
  return $e.createElement(Hg.Provider, { value: n }, t);
};
var qg = (e, t, n, r = !0) => {
  const o = {
    defaultValues: t._defaultValues
  };
  for (const i in e)
    Object.defineProperty(o, i, {
      get: () => {
        const a = i;
        return t._proxyFormState[a] !== Xt.all && (t._proxyFormState[a] = !r || Xt.all), n && (n[a] = !0), e[a];
      }
    });
  return o;
}, Dt = (e) => xt(e) && !Object.keys(e).length, Yg = (e, t, n, r) => {
  n(e);
  const { name: o, ...i } = e;
  return Dt(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find((a) => t[a] === (!r || Xt.all));
}, Xo = (e) => Array.isArray(e) ? e : [e], Gg = (e, t, n) => !e || !t || e === t || Xo(e).some((r) => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function ku(e) {
  const t = $e.useRef(e);
  t.current = e, $e.useEffect(() => {
    const n = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      n && n.unsubscribe();
    };
  }, [e.disabled]);
}
function W1(e) {
  const t = Ss(), { control: n = t.control, disabled: r, name: o, exact: i } = e || {}, [a, s] = $e.useState(n._formState), c = $e.useRef(!0), l = $e.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    validatingFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = $e.useRef(o);
  return u.current = o, ku({
    disabled: r,
    next: (d) => c.current && Gg(u.current, d.name, i) && Yg(d, l.current, n._updateFormState) && s({
      ...n._formState,
      ...d
    }),
    subject: n._subjects.state
  }), $e.useEffect(() => (c.current = !0, l.current.isValid && n._updateValid(!0), () => {
    c.current = !1;
  }), [n]), qg(a, n, l.current, !1);
}
var hn = (e) => typeof e == "string", Kg = (e, t, n, r, o) => hn(e) ? (r && t.watch.add(e), ue(n, e, o)) : Array.isArray(e) ? e.map((i) => (r && t.watch.add(i), ue(n, i))) : (r && (t.watchAll = !0), n);
function H1(e) {
  const t = Ss(), { control: n = t.control, name: r, defaultValue: o, disabled: i, exact: a } = e || {}, s = $e.useRef(r);
  s.current = r, ku({
    disabled: i,
    subject: n._subjects.values,
    next: (u) => {
      Gg(s.current, u.name, a) && l(It(Kg(s.current, n._names, u.values || n._formValues, !1, o)));
    }
  });
  const [c, l] = $e.useState(n._getWatch(r, o));
  return $e.useEffect(() => n._removeUnmounted()), c;
}
function q1(e) {
  const t = Ss(), { name: n, disabled: r, control: o = t.control, shouldUnregister: i } = e, a = Bg(o._names.array, n), s = H1({
    control: o,
    name: n,
    defaultValue: ue(o._formValues, n, ue(o._defaultValues, n, e.defaultValue)),
    exact: !0
  }), c = W1({
    control: o,
    name: n,
    exact: !0
  }), l = $e.useRef(o.register(n, {
    ...e.rules,
    value: s,
    ...un(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return $e.useEffect(() => {
    const u = o._options.shouldUnregister || i, d = (p, h) => {
      const m = ue(o._fields, p);
      m && m._f && (m._f.mount = h);
    };
    if (d(n, !0), u) {
      const p = It(ue(o._options.defaultValues, n));
      Qe(o._defaultValues, n, p), pt(ue(o._formValues, n)) && Qe(o._formValues, n, p);
    }
    return () => {
      (a ? u && !o._state.action : u) ? o.unregister(n) : d(n, !1);
    };
  }, [n, o, a, i]), $e.useEffect(() => {
    ue(o._fields, n) && o._updateDisabledField({
      disabled: r,
      fields: o._fields,
      name: n,
      value: ue(o._fields, n)._f.value
    });
  }, [r, n, o]), {
    field: {
      name: n,
      value: s,
      ...un(r) || c.disabled ? { disabled: c.disabled || r } : {},
      onChange: $e.useCallback((u) => l.current.onChange({
        target: {
          value: Ug(u),
          name: n
        },
        type: Da.CHANGE
      }), [n]),
      onBlur: $e.useCallback(() => l.current.onBlur({
        target: {
          value: ue(o._formValues, n),
          name: n
        },
        type: Da.BLUR
      }), [n, o]),
      ref: $e.useCallback((u) => {
        const d = ue(o._fields, n);
        d && u && (d._f.ref = {
          focus: () => u.focus(),
          select: () => u.select(),
          setCustomValidity: (p) => u.setCustomValidity(p),
          reportValidity: () => u.reportValidity()
        });
      }, [o._fields, n])
    },
    formState: c,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!ue(c.errors, n)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!ue(c.dirtyFields, n)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!ue(c.touchedFields, n)
      },
      isValidating: {
        enumerable: !0,
        get: () => !!ue(c.validatingFields, n)
      },
      error: {
        enumerable: !0,
        get: () => ue(c.errors, n)
      }
    })
  };
}
const Y1 = (e) => e.render(q1(e));
var Zg = (e, t, n, r, o) => t ? {
  ...n[e],
  types: {
    ...n[e] && n[e].types ? n[e].types : {},
    [r]: o || !0
  }
} : {}, dp = (e) => ({
  isOnSubmit: !e || e === Xt.onSubmit,
  isOnBlur: e === Xt.onBlur,
  isOnChange: e === Xt.onChange,
  isOnAll: e === Xt.all,
  isOnTouch: e === Xt.onTouched
}), pp = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some((r) => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const Jo = (e, t, n, r) => {
  for (const o of n || Object.keys(e)) {
    const i = ue(e, o);
    if (i) {
      const { _f: a, ...s } = i;
      if (a) {
        if (a.refs && a.refs[0] && t(a.refs[0], o) && !r)
          break;
        if (a.ref && t(a.ref, a.name) && !r)
          break;
        Jo(s, t);
      } else xt(s) && Jo(s, t);
    }
  }
};
var G1 = (e, t, n) => {
  const r = Xo(ue(e, n));
  return Qe(r, "root", t[n]), Qe(e, n, r), e;
}, Pu = (e) => e.type === "file", Zn = (e) => typeof e == "function", ja = (e) => {
  if (!Ru)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, ga = (e) => hn(e), Nu = (e) => e.type === "radio", Fa = (e) => e instanceof RegExp;
const hp = {
  value: !1,
  isValid: !1
}, mp = { value: !0, isValid: !0 };
var Xg = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((n) => n && n.checked && !n.disabled).map((n) => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !pt(e[0].attributes.value) ? pt(e[0].value) || e[0].value === "" ? mp : { value: e[0].value, isValid: !0 } : mp
    ) : hp;
  }
  return hp;
};
const gp = {
  isValid: !1,
  value: null
};
var Jg = (e) => Array.isArray(e) ? e.reduce((t, n) => n && n.checked && !n.disabled ? {
  isValid: !0,
  value: n.value
} : t, gp) : gp;
function yp(e, t, n = "validate") {
  if (ga(e) || Array.isArray(e) && e.every(ga) || un(e) && !e)
    return {
      type: n,
      message: ga(e) ? e : "",
      ref: t
    };
}
var Yr = (e) => xt(e) && !Fa(e) ? e : {
  value: e,
  message: ""
}, vp = async (e, t, n, r, o) => {
  const { ref: i, refs: a, required: s, maxLength: c, minLength: l, min: u, max: d, pattern: p, validate: h, name: m, valueAsNumber: g, mount: b, disabled: w } = e._f, _ = ue(t, m);
  if (!b || w)
    return {};
  const S = a ? a[0] : i, C = ($) => {
    r && S.reportValidity && (S.setCustomValidity(un($) ? "" : $ || ""), S.reportValidity());
  }, E = {}, N = Nu(i), P = Di(i), B = N || P, ce = (g || Pu(i)) && pt(i.value) && pt(_) || ja(i) && i.value === "" || _ === "" || Array.isArray(_) && !_.length, pe = Zg.bind(null, m, n, E), fe = ($, Q, D, re = En.maxLength, M = En.minLength) => {
    const le = $ ? Q : D;
    E[m] = {
      type: $ ? re : M,
      message: le,
      ref: i,
      ...pe($ ? re : M, le)
    };
  };
  if (o ? !Array.isArray(_) || !_.length : s && (!B && (ce || Ct(_)) || un(_) && !_ || P && !Xg(a).isValid || N && !Jg(a).isValid)) {
    const { value: $, message: Q } = ga(s) ? { value: !!s, message: s } : Yr(s);
    if ($ && (E[m] = {
      type: En.required,
      message: Q,
      ref: S,
      ...pe(En.required, Q)
    }, !n))
      return C(Q), E;
  }
  if (!ce && (!Ct(u) || !Ct(d))) {
    let $, Q;
    const D = Yr(d), re = Yr(u);
    if (!Ct(_) && !isNaN(_)) {
      const M = i.valueAsNumber || _ && +_;
      Ct(D.value) || ($ = M > D.value), Ct(re.value) || (Q = M < re.value);
    } else {
      const M = i.valueAsDate || new Date(_), le = (L) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + L), we = i.type == "time", X = i.type == "week";
      hn(D.value) && _ && ($ = we ? le(_) > le(D.value) : X ? _ > D.value : M > new Date(D.value)), hn(re.value) && _ && (Q = we ? le(_) < le(re.value) : X ? _ < re.value : M < new Date(re.value));
    }
    if (($ || Q) && (fe(!!$, D.message, re.message, En.max, En.min), !n))
      return C(E[m].message), E;
  }
  if ((c || l) && !ce && (hn(_) || o && Array.isArray(_))) {
    const $ = Yr(c), Q = Yr(l), D = !Ct($.value) && _.length > +$.value, re = !Ct(Q.value) && _.length < +Q.value;
    if ((D || re) && (fe(D, $.message, Q.message), !n))
      return C(E[m].message), E;
  }
  if (p && !ce && hn(_)) {
    const { value: $, message: Q } = Yr(p);
    if (Fa($) && !_.match($) && (E[m] = {
      type: En.pattern,
      message: Q,
      ref: i,
      ...pe(En.pattern, Q)
    }, !n))
      return C(Q), E;
  }
  if (h) {
    if (Zn(h)) {
      const $ = await h(_, t), Q = yp($, S);
      if (Q && (E[m] = {
        ...Q,
        ...pe(En.validate, Q.message)
      }, !n))
        return C(Q.message), E;
    } else if (xt(h)) {
      let $ = {};
      for (const Q in h) {
        if (!Dt($) && !n)
          break;
        const D = yp(await h[Q](_, t), S, Q);
        D && ($ = {
          ...D,
          ...pe(Q, D.message)
        }, C(D.message), n && (E[m] = $));
      }
      if (!Dt($) && (E[m] = {
        ref: S,
        ...$
      }, !n))
        return E;
    }
  }
  return C(!0), E;
};
function K1(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; )
    e = pt(e) ? r++ : e[t[r++]];
  return e;
}
function Z1(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !pt(e[t]))
      return !1;
  return !0;
}
function vt(e, t) {
  const n = Array.isArray(t) ? t : Ou(t) ? [t] : Wg(t), r = n.length === 1 ? e : K1(e, n), o = n.length - 1, i = n[o];
  return r && delete r[i], o !== 0 && (xt(r) && Dt(r) || Array.isArray(r) && Z1(r)) && vt(e, n.slice(0, -1)), e;
}
var Dc = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (o) => {
      for (const i of e)
        i.next && i.next(o);
    },
    subscribe: (o) => (e.push(o), {
      unsubscribe: () => {
        e = e.filter((i) => i !== o);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, La = (e) => Ct(e) || !Vg(e);
function vr(e, t) {
  if (La(e) || La(t))
    return e === t;
  if (oo(e) && oo(t))
    return e.getTime() === t.getTime();
  const n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length)
    return !1;
  for (const o of n) {
    const i = e[o];
    if (!r.includes(o))
      return !1;
    if (o !== "ref") {
      const a = t[o];
      if (oo(i) && oo(a) || xt(i) && xt(a) || Array.isArray(i) && Array.isArray(a) ? !vr(i, a) : i !== a)
        return !1;
    }
  }
  return !0;
}
var Qg = (e) => e.type === "select-multiple", X1 = (e) => Nu(e) || Di(e), jc = (e) => ja(e) && e.isConnected, ey = (e) => {
  for (const t in e)
    if (Zn(e[t]))
      return !0;
  return !1;
};
function za(e, t = {}) {
  const n = Array.isArray(e);
  if (xt(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || xt(e[r]) && !ey(e[r]) ? (t[r] = Array.isArray(e[r]) ? [] : {}, za(e[r], t[r])) : Ct(e[r]) || (t[r] = !0);
  return t;
}
function ty(e, t, n) {
  const r = Array.isArray(e);
  if (xt(e) || r)
    for (const o in e)
      Array.isArray(e[o]) || xt(e[o]) && !ey(e[o]) ? pt(t) || La(n[o]) ? n[o] = Array.isArray(e[o]) ? za(e[o], []) : { ...za(e[o]) } : ty(e[o], Ct(t) ? {} : t[o], n[o]) : n[o] = !vr(e[o], t[o]);
  return n;
}
var Xi = (e, t) => ty(e, t, za(t)), ny = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) => pt(e) ? e : t ? e === "" ? NaN : e && +e : n && hn(e) ? new Date(e) : r ? r(e) : e;
function Fc(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((n) => n.disabled) : t.disabled))
    return Pu(t) ? t.files : Nu(t) ? Jg(e.refs).value : Qg(t) ? [...t.selectedOptions].map(({ value: n }) => n) : Di(t) ? Xg(e.refs).value : ny(pt(t.value) ? e.ref.value : t.value, e);
}
var J1 = (e, t, n, r) => {
  const o = {};
  for (const i of e) {
    const a = ue(t, i);
    a && Qe(o, i, a._f);
  }
  return {
    criteriaMode: n,
    names: [...e],
    fields: o,
    shouldUseNativeValidation: r
  };
}, Do = (e) => pt(e) ? e : Fa(e) ? e.source : xt(e) ? Fa(e.value) ? e.value.source : e.value : e, Q1 = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function bp(e, t, n) {
  const r = ue(e, n);
  if (r || Ou(n))
    return {
      error: r,
      name: n
    };
  const o = n.split(".");
  for (; o.length; ) {
    const i = o.join("."), a = ue(t, i), s = ue(e, i);
    if (a && !Array.isArray(a) && n !== i)
      return { name: n };
    if (s && s.type)
      return {
        name: i,
        error: s
      };
    o.pop();
  }
  return {
    name: n
  };
}
var eA = (e, t, n, r, o) => o.isOnAll ? !1 : !n && o.isOnTouch ? !(t || e) : (n ? r.isOnBlur : o.isOnBlur) ? !e : (n ? r.isOnChange : o.isOnChange) ? e : !0, tA = (e, t) => !Es(ue(e, t)).length && vt(e, t);
const nA = {
  mode: Xt.onSubmit,
  reValidateMode: Xt.onChange,
  shouldFocusError: !0
};
function rA(e = {}) {
  let t = {
    ...nA,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: Zn(t.defaultValues),
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
  }, r = {}, o = xt(t.defaultValues) || xt(t.values) ? It(t.defaultValues || t.values) || {} : {}, i = t.shouldUnregister ? {} : It(o), a = {
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
    values: Dc(),
    array: Dc(),
    state: Dc()
  }, p = dp(t.mode), h = dp(t.reValidateMode), m = t.criteriaMode === Xt.all, g = (A) => (k) => {
    clearTimeout(l), l = setTimeout(A, k);
  }, b = async (A) => {
    if (u.isValid || A) {
      const k = t.resolver ? Dt((await B()).errors) : await pe(r, !0);
      k !== n.isValid && d.state.next({
        isValid: k
      });
    }
  }, w = (A, k) => {
    (u.isValidating || u.validatingFields) && ((A || Array.from(s.mount)).forEach((F) => {
      F && (k ? Qe(n.validatingFields, F, k) : vt(n.validatingFields, F));
    }), d.state.next({
      validatingFields: n.validatingFields,
      isValidating: !Dt(n.validatingFields)
    }));
  }, _ = (A, k = [], F, f, T = !0, O = !0) => {
    if (f && F) {
      if (a.action = !0, O && Array.isArray(ue(r, A))) {
        const z = F(ue(r, A), f.argA, f.argB);
        T && Qe(r, A, z);
      }
      if (O && Array.isArray(ue(n.errors, A))) {
        const z = F(ue(n.errors, A), f.argA, f.argB);
        T && Qe(n.errors, A, z), tA(n.errors, A);
      }
      if (u.touchedFields && O && Array.isArray(ue(n.touchedFields, A))) {
        const z = F(ue(n.touchedFields, A), f.argA, f.argB);
        T && Qe(n.touchedFields, A, z);
      }
      u.dirtyFields && (n.dirtyFields = Xi(o, i)), d.state.next({
        name: A,
        isDirty: $(A, k),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      Qe(i, A, k);
  }, S = (A, k) => {
    Qe(n.errors, A, k), d.state.next({
      errors: n.errors
    });
  }, C = (A) => {
    n.errors = A, d.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, E = (A, k, F, f) => {
    const T = ue(r, A);
    if (T) {
      const O = ue(i, A, pt(F) ? ue(o, A) : F);
      pt(O) || f && f.defaultChecked || k ? Qe(i, A, k ? O : Fc(T._f)) : re(A, O), a.mount && b();
    }
  }, N = (A, k, F, f, T) => {
    let O = !1, z = !1;
    const j = {
      name: A
    }, Z = !!(ue(r, A) && ue(r, A)._f && ue(r, A)._f.disabled);
    if (!F || f) {
      u.isDirty && (z = n.isDirty, n.isDirty = j.isDirty = $(), O = z !== j.isDirty);
      const H = Z || vr(ue(o, A), k);
      z = !!(!Z && ue(n.dirtyFields, A)), H || Z ? vt(n.dirtyFields, A) : Qe(n.dirtyFields, A, !0), j.dirtyFields = n.dirtyFields, O = O || u.dirtyFields && z !== !H;
    }
    if (F) {
      const H = ue(n.touchedFields, A);
      H || (Qe(n.touchedFields, A, F), j.touchedFields = n.touchedFields, O = O || u.touchedFields && H !== F);
    }
    return O && T && d.state.next(j), O ? j : {};
  }, P = (A, k, F, f) => {
    const T = ue(n.errors, A), O = u.isValid && un(k) && n.isValid !== k;
    if (e.delayError && F ? (c = g(() => S(A, F)), c(e.delayError)) : (clearTimeout(l), c = null, F ? Qe(n.errors, A, F) : vt(n.errors, A)), (F ? !vr(T, F) : T) || !Dt(f) || O) {
      const z = {
        ...f,
        ...O && un(k) ? { isValid: k } : {},
        errors: n.errors,
        name: A
      };
      n = {
        ...n,
        ...z
      }, d.state.next(z);
    }
  }, B = async (A) => {
    w(A, !0);
    const k = await t.resolver(i, t.context, J1(A || s.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
    return w(A), k;
  }, ce = async (A) => {
    const { errors: k } = await B(A);
    if (A)
      for (const F of A) {
        const f = ue(k, F);
        f ? Qe(n.errors, F, f) : vt(n.errors, F);
      }
    else
      n.errors = k;
    return k;
  }, pe = async (A, k, F = {
    valid: !0
  }) => {
    for (const f in A) {
      const T = A[f];
      if (T) {
        const { _f: O, ...z } = T;
        if (O) {
          const j = s.array.has(O.name);
          w([f], !0);
          const Z = await vp(T, i, m, t.shouldUseNativeValidation && !k, j);
          if (w([f]), Z[O.name] && (F.valid = !1, k))
            break;
          !k && (ue(Z, O.name) ? j ? G1(n.errors, Z, O.name) : Qe(n.errors, O.name, Z[O.name]) : vt(n.errors, O.name));
        }
        !Dt(z) && await pe(z, k, F);
      }
    }
    return F.valid;
  }, fe = () => {
    for (const A of s.unMount) {
      const k = ue(r, A);
      k && (k._f.refs ? k._f.refs.every((F) => !jc(F)) : !jc(k._f.ref)) && Y(A);
    }
    s.unMount = /* @__PURE__ */ new Set();
  }, $ = (A, k) => (A && k && Qe(i, A, k), !vr(W(), o)), Q = (A, k, F) => Kg(A, s, {
    ...a.mount ? i : pt(k) ? o : hn(A) ? { [A]: k } : k
  }, F, k), D = (A) => Es(ue(a.mount ? i : o, A, e.shouldUnregister ? ue(o, A, []) : [])), re = (A, k, F = {}) => {
    const f = ue(r, A);
    let T = k;
    if (f) {
      const O = f._f;
      O && (!O.disabled && Qe(i, A, ny(k, O)), T = ja(O.ref) && Ct(k) ? "" : k, Qg(O.ref) ? [...O.ref.options].forEach((z) => z.selected = T.includes(z.value)) : O.refs ? Di(O.ref) ? O.refs.length > 1 ? O.refs.forEach((z) => (!z.defaultChecked || !z.disabled) && (z.checked = Array.isArray(T) ? !!T.find((j) => j === z.value) : T === z.value)) : O.refs[0] && (O.refs[0].checked = !!T) : O.refs.forEach((z) => z.checked = z.value === T) : Pu(O.ref) ? O.ref.value = "" : (O.ref.value = T, O.ref.type || d.values.next({
        name: A,
        values: { ...i }
      })));
    }
    (F.shouldDirty || F.shouldTouch) && N(A, T, F.shouldTouch, F.shouldDirty, !0), F.shouldValidate && L(A);
  }, M = (A, k, F) => {
    for (const f in k) {
      const T = k[f], O = `${A}.${f}`, z = ue(r, O);
      (s.array.has(A) || !La(T) || z && !z._f) && !oo(T) ? M(O, T, F) : re(O, T, F);
    }
  }, le = (A, k, F = {}) => {
    const f = ue(r, A), T = s.array.has(A), O = It(k);
    Qe(i, A, O), T ? (d.array.next({
      name: A,
      values: { ...i }
    }), (u.isDirty || u.dirtyFields) && F.shouldDirty && d.state.next({
      name: A,
      dirtyFields: Xi(o, i),
      isDirty: $(A, O)
    })) : f && !f._f && !Ct(O) ? M(A, O, F) : re(A, O, F), pp(A, s) && d.state.next({ ...n }), d.values.next({
      name: a.mount ? A : void 0,
      values: { ...i }
    });
  }, we = async (A) => {
    a.mount = !0;
    const k = A.target;
    let F = k.name, f = !0;
    const T = ue(r, F), O = () => k.type ? Fc(T._f) : Ug(A), z = (j) => {
      f = Number.isNaN(j) || j === ue(i, F, j);
    };
    if (T) {
      let j, Z;
      const H = O(), me = A.type === Da.BLUR || A.type === Da.FOCUS_OUT, Re = !Q1(T._f) && !t.resolver && !ue(n.errors, F) && !T._f.deps || eA(me, ue(n.touchedFields, F), n.isSubmitted, h, p), De = pp(F, s, me);
      Qe(i, F, H), me ? (T._f.onBlur && T._f.onBlur(A), c && c(0)) : T._f.onChange && T._f.onChange(A);
      const qe = N(F, H, me, !1), Ee = !Dt(qe) || De;
      if (!me && d.values.next({
        name: F,
        type: A.type,
        values: { ...i }
      }), Re)
        return u.isValid && b(), Ee && d.state.next({ name: F, ...De ? {} : qe });
      if (!me && De && d.state.next({ ...n }), t.resolver) {
        const { errors: dt } = await B([F]);
        if (z(H), f) {
          const v = bp(n.errors, r, F), U = bp(dt, r, v.name || F);
          j = U.error, F = U.name, Z = Dt(dt);
        }
      } else
        w([F], !0), j = (await vp(T, i, m, t.shouldUseNativeValidation))[F], w([F]), z(H), f && (j ? Z = !1 : u.isValid && (Z = await pe(r, !0)));
      f && (T._f.deps && L(T._f.deps), P(F, Z, j, qe));
    }
  }, X = (A, k) => {
    if (ue(n.errors, k) && A.focus)
      return A.focus(), 1;
  }, L = async (A, k = {}) => {
    let F, f;
    const T = Xo(A);
    if (t.resolver) {
      const O = await ce(pt(A) ? A : T);
      F = Dt(O), f = A ? !T.some((z) => ue(O, z)) : F;
    } else A ? (f = (await Promise.all(T.map(async (O) => {
      const z = ue(r, O);
      return await pe(z && z._f ? { [O]: z } : z);
    }))).every(Boolean), !(!f && !n.isValid) && b()) : f = F = await pe(r);
    return d.state.next({
      ...!hn(A) || u.isValid && F !== n.isValid ? {} : { name: A },
      ...t.resolver || !A ? { isValid: F } : {},
      errors: n.errors
    }), k.shouldFocus && !f && Jo(r, X, A ? T : s.mount), f;
  }, W = (A) => {
    const k = {
      ...a.mount ? i : o
    };
    return pt(A) ? k : hn(A) ? ue(k, A) : A.map((F) => ue(k, F));
  }, he = (A, k) => ({
    invalid: !!ue((k || n).errors, A),
    isDirty: !!ue((k || n).dirtyFields, A),
    error: ue((k || n).errors, A),
    isValidating: !!ue(n.validatingFields, A),
    isTouched: !!ue((k || n).touchedFields, A)
  }), I = (A) => {
    A && Xo(A).forEach((k) => vt(n.errors, k)), d.state.next({
      errors: A ? n.errors : {}
    });
  }, G = (A, k, F) => {
    const f = (ue(r, A, { _f: {} })._f || {}).ref, T = ue(n.errors, A) || {}, { ref: O, message: z, type: j, ...Z } = T;
    Qe(n.errors, A, {
      ...Z,
      ...k,
      ref: f
    }), d.state.next({
      name: A,
      errors: n.errors,
      isValid: !1
    }), F && F.shouldFocus && f && f.focus && f.focus();
  }, oe = (A, k) => Zn(A) ? d.values.subscribe({
    next: (F) => A(Q(void 0, k), F)
  }) : Q(A, k, !0), Y = (A, k = {}) => {
    for (const F of A ? Xo(A) : s.mount)
      s.mount.delete(F), s.array.delete(F), k.keepValue || (vt(r, F), vt(i, F)), !k.keepError && vt(n.errors, F), !k.keepDirty && vt(n.dirtyFields, F), !k.keepTouched && vt(n.touchedFields, F), !k.keepIsValidating && vt(n.validatingFields, F), !t.shouldUnregister && !k.keepDefaultValue && vt(o, F);
    d.values.next({
      values: { ...i }
    }), d.state.next({
      ...n,
      ...k.keepDirty ? { isDirty: $() } : {}
    }), !k.keepIsValid && b();
  }, K = ({ disabled: A, name: k, field: F, fields: f, value: T }) => {
    if (un(A) && a.mount || A) {
      const O = A ? void 0 : pt(T) ? Fc(F ? F._f : ue(f, k)._f) : T;
      Qe(i, k, O), N(k, O, !1, !1, !0);
    }
  }, ie = (A, k = {}) => {
    let F = ue(r, A);
    const f = un(k.disabled);
    return Qe(r, A, {
      ...F || {},
      _f: {
        ...F && F._f ? F._f : { ref: { name: A } },
        name: A,
        mount: !0,
        ...k
      }
    }), s.mount.add(A), F ? K({
      field: F,
      disabled: k.disabled,
      name: A,
      value: k.value
    }) : E(A, !0, k.value), {
      ...f ? { disabled: k.disabled } : {},
      ...t.progressive ? {
        required: !!k.required,
        min: Do(k.min),
        max: Do(k.max),
        minLength: Do(k.minLength),
        maxLength: Do(k.maxLength),
        pattern: Do(k.pattern)
      } : {},
      name: A,
      onChange: we,
      onBlur: we,
      ref: (T) => {
        if (T) {
          ie(A, k), F = ue(r, A);
          const O = pt(T.value) && T.querySelectorAll && T.querySelectorAll("input,select,textarea")[0] || T, z = X1(O), j = F._f.refs || [];
          if (z ? j.find((Z) => Z === O) : O === F._f.ref)
            return;
          Qe(r, A, {
            _f: {
              ...F._f,
              ...z ? {
                refs: [
                  ...j.filter(jc),
                  O,
                  ...Array.isArray(ue(o, A)) ? [{}] : []
                ],
                ref: { type: O.type, name: A }
              } : { ref: O }
            }
          }), E(A, !1, void 0, O);
        } else
          F = ue(r, A, {}), F._f && (F._f.mount = !1), (t.shouldUnregister || k.shouldUnregister) && !(Bg(s.array, A) && a.action) && s.unMount.add(A);
      }
    };
  }, de = () => t.shouldFocusError && Jo(r, X, s.mount), ve = (A) => {
    un(A) && (d.state.next({ disabled: A }), Jo(r, (k, F) => {
      const f = ue(r, F);
      f && (k.disabled = f._f.disabled || A, Array.isArray(f._f.refs) && f._f.refs.forEach((T) => {
        T.disabled = f._f.disabled || A;
      }));
    }, 0, !1));
  }, Ne = (A, k) => async (F) => {
    let f;
    F && (F.preventDefault && F.preventDefault(), F.persist && F.persist());
    let T = It(i);
    if (d.state.next({
      isSubmitting: !0
    }), t.resolver) {
      const { errors: O, values: z } = await B();
      n.errors = O, T = z;
    } else
      await pe(r);
    if (vt(n.errors, "root"), Dt(n.errors)) {
      d.state.next({
        errors: {}
      });
      try {
        await A(T, F);
      } catch (O) {
        f = O;
      }
    } else
      k && await k({ ...n.errors }, F), de(), setTimeout(de);
    if (d.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Dt(n.errors) && !f,
      submitCount: n.submitCount + 1,
      errors: n.errors
    }), f)
      throw f;
  }, ee = (A, k = {}) => {
    ue(r, A) && (pt(k.defaultValue) ? le(A, It(ue(o, A))) : (le(A, k.defaultValue), Qe(o, A, It(k.defaultValue))), k.keepTouched || vt(n.touchedFields, A), k.keepDirty || (vt(n.dirtyFields, A), n.isDirty = k.defaultValue ? $(A, It(ue(o, A))) : $()), k.keepError || (vt(n.errors, A), u.isValid && b()), d.state.next({ ...n }));
  }, Te = (A, k = {}) => {
    const F = A ? It(A) : o, f = It(F), T = Dt(A), O = T ? o : f;
    if (k.keepDefaultValues || (o = F), !k.keepValues) {
      if (k.keepDirtyValues)
        for (const z of s.mount)
          ue(n.dirtyFields, z) ? Qe(O, z, ue(i, z)) : le(z, ue(O, z));
      else {
        if (Ru && pt(A))
          for (const z of s.mount) {
            const j = ue(r, z);
            if (j && j._f) {
              const Z = Array.isArray(j._f.refs) ? j._f.refs[0] : j._f.ref;
              if (ja(Z)) {
                const H = Z.closest("form");
                if (H) {
                  H.reset();
                  break;
                }
              }
            }
          }
        r = {};
      }
      i = e.shouldUnregister ? k.keepDefaultValues ? It(o) : {} : It(O), d.array.next({
        values: { ...O }
      }), d.values.next({
        values: { ...O }
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
      isDirty: T ? !1 : k.keepDirty ? n.isDirty : !!(k.keepDefaultValues && !vr(A, o)),
      isSubmitted: k.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: T ? {} : k.keepDirtyValues ? k.keepDefaultValues && i ? Xi(o, i) : n.dirtyFields : k.keepDefaultValues && A ? Xi(o, A) : k.keepDirty ? n.dirtyFields : {},
      touchedFields: k.keepTouched ? n.touchedFields : {},
      errors: k.keepErrors ? n.errors : {},
      isSubmitSuccessful: k.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, He = (A, k) => Te(Zn(A) ? A(i) : A, k);
  return {
    control: {
      register: ie,
      unregister: Y,
      getFieldState: he,
      handleSubmit: Ne,
      setError: G,
      _executeSchema: B,
      _getWatch: Q,
      _getDirty: $,
      _updateValid: b,
      _removeUnmounted: fe,
      _updateFieldArray: _,
      _updateDisabledField: K,
      _getFieldArray: D,
      _reset: Te,
      _resetDefaultValues: () => Zn(t.defaultValues) && t.defaultValues().then((A) => {
        He(A, t.resetOptions), d.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (A) => {
        n = {
          ...n,
          ...A
        };
      },
      _disableForm: ve,
      _subjects: d,
      _proxyFormState: u,
      _setErrors: C,
      get _fields() {
        return r;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return a;
      },
      set _state(A) {
        a = A;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return s;
      },
      set _names(A) {
        s = A;
      },
      get _formState() {
        return n;
      },
      set _formState(A) {
        n = A;
      },
      get _options() {
        return t;
      },
      set _options(A) {
        t = {
          ...t,
          ...A
        };
      }
    },
    trigger: L,
    register: ie,
    handleSubmit: Ne,
    watch: oe,
    setValue: le,
    getValues: W,
    reset: He,
    resetField: ee,
    clearErrors: I,
    unregister: Y,
    setError: G,
    setFocus: (A, k = {}) => {
      const F = ue(r, A), f = F && F._f;
      if (f) {
        const T = f.refs ? f.refs[0] : f.ref;
        T.focus && (T.focus(), k.shouldSelect && T.select());
      }
    },
    getFieldState: he
  };
}
function oA(e = {}) {
  const t = $e.useRef(), n = $e.useRef(), [r, o] = $e.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: Zn(e.defaultValues),
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
    defaultValues: Zn(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...rA(e),
    formState: r
  });
  const i = t.current.control;
  return i._options = e, ku({
    subject: i._subjects.state,
    next: (a) => {
      Yg(a, i._proxyFormState, i._updateFormState, !0) && o({ ...i._formState });
    }
  }), $e.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]), $e.useEffect(() => {
    if (i._proxyFormState.isDirty) {
      const a = i._getDirty();
      a !== r.isDirty && i._subjects.state.next({
        isDirty: a
      });
    }
  }, [i, r.isDirty]), $e.useEffect(() => {
    e.values && !vr(e.values, n.current) ? (i._reset(e.values, i._options.resetOptions), n.current = e.values, o((a) => ({ ...a }))) : i._resetDefaultValues();
  }, [e.values, i]), $e.useEffect(() => {
    e.errors && i._setErrors(e.errors);
  }, [e.errors, i]), $e.useEffect(() => {
    i._state.mount || (i._updateValid(), i._state.mount = !0), i._state.watch && (i._state.watch = !1, i._subjects.state.next({ ...i._formState })), i._removeUnmounted();
  }), $e.useEffect(() => {
    e.shouldUnregister && i._subjects.values.next({
      values: i._getWatch()
    });
  }, [e.shouldUnregister, i]), t.current.formState = qg(r, i), t.current;
}
var Ke;
(function(e) {
  e.assertEqual = (o) => o;
  function t(o) {
  }
  e.assertIs = t;
  function n(o) {
    throw new Error();
  }
  e.assertNever = n, e.arrayToEnum = (o) => {
    const i = {};
    for (const a of o)
      i[a] = a;
    return i;
  }, e.getValidEnumValues = (o) => {
    const i = e.objectKeys(o).filter((s) => typeof o[o[s]] != "number"), a = {};
    for (const s of i)
      a[s] = o[s];
    return e.objectValues(a);
  }, e.objectValues = (o) => e.objectKeys(o).map(function(i) {
    return o[i];
  }), e.objectKeys = typeof Object.keys == "function" ? (o) => Object.keys(o) : (o) => {
    const i = [];
    for (const a in o)
      Object.prototype.hasOwnProperty.call(o, a) && i.push(a);
    return i;
  }, e.find = (o, i) => {
    for (const a of o)
      if (i(a))
        return a;
  }, e.isInteger = typeof Number.isInteger == "function" ? (o) => Number.isInteger(o) : (o) => typeof o == "number" && isFinite(o) && Math.floor(o) === o;
  function r(o, i = " | ") {
    return o.map((a) => typeof a == "string" ? `'${a}'` : a).join(i);
  }
  e.joinValues = r, e.jsonStringifyReplacer = (o, i) => typeof i == "bigint" ? i.toString() : i;
})(Ke || (Ke = {}));
var Dl;
(function(e) {
  e.mergeShapes = (t, n) => ({
    ...t,
    ...n
    // second overwrites first
  });
})(Dl || (Dl = {}));
const xe = Ke.arrayToEnum([
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
]), Gn = (e) => {
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
}, ae = Ke.arrayToEnum([
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
]), iA = (e) => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:");
class Bt extends Error {
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
    const n = t || function(i) {
      return i.message;
    }, r = { _errors: [] }, o = (i) => {
      for (const a of i.issues)
        if (a.code === "invalid_union")
          a.unionErrors.map(o);
        else if (a.code === "invalid_return_type")
          o(a.returnTypeError);
        else if (a.code === "invalid_arguments")
          o(a.argumentsError);
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
    return o(this), r;
  }
  static assert(t) {
    if (!(t instanceof Bt))
      throw new Error(`Not a ZodError: ${t}`);
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Ke.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (n) => n.message) {
    const n = {}, r = [];
    for (const o of this.issues)
      o.path.length > 0 ? (n[o.path[0]] = n[o.path[0]] || [], n[o.path[0]].push(t(o))) : r.push(t(o));
    return { formErrors: r, fieldErrors: n };
  }
  get formErrors() {
    return this.flatten();
  }
}
Bt.create = (e) => new Bt(e);
const yo = (e, t) => {
  let n;
  switch (e.code) {
    case ae.invalid_type:
      e.received === xe.undefined ? n = "Required" : n = `Expected ${e.expected}, received ${e.received}`;
      break;
    case ae.invalid_literal:
      n = `Invalid literal value, expected ${JSON.stringify(e.expected, Ke.jsonStringifyReplacer)}`;
      break;
    case ae.unrecognized_keys:
      n = `Unrecognized key(s) in object: ${Ke.joinValues(e.keys, ", ")}`;
      break;
    case ae.invalid_union:
      n = "Invalid input";
      break;
    case ae.invalid_union_discriminator:
      n = `Invalid discriminator value. Expected ${Ke.joinValues(e.options)}`;
      break;
    case ae.invalid_enum_value:
      n = `Invalid enum value. Expected ${Ke.joinValues(e.options)}, received '${e.received}'`;
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
      typeof e.validation == "object" ? "includes" in e.validation ? (n = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (n = `${n} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? n = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? n = `Invalid input: must end with "${e.validation.endsWith}"` : Ke.assertNever(e.validation) : e.validation !== "regex" ? n = `Invalid ${e.validation}` : n = "Invalid";
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
      n = t.defaultError, Ke.assertNever(e);
  }
  return { message: n };
};
let ry = yo;
function aA(e) {
  ry = e;
}
function $a() {
  return ry;
}
const Va = (e) => {
  const { data: t, path: n, errorMaps: r, issueData: o } = e, i = [...n, ...o.path || []], a = {
    ...o,
    path: i
  };
  if (o.message !== void 0)
    return {
      ...o,
      path: i,
      message: o.message
    };
  let s = "";
  const c = r.filter((l) => !!l).slice().reverse();
  for (const l of c)
    s = l(a, { data: t, defaultError: s }).message;
  return {
    ...o,
    path: i,
    message: s
  };
}, sA = [];
function ye(e, t) {
  const n = $a(), r = Va({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      n,
      n === yo ? void 0 : yo
      // then global default map
    ].filter((o) => !!o)
  });
  e.common.issues.push(r);
}
class Et {
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
    for (const o of n) {
      if (o.status === "aborted")
        return Pe;
      o.status === "dirty" && t.dirty(), r.push(o.value);
    }
    return { status: t.value, value: r };
  }
  static async mergeObjectAsync(t, n) {
    const r = [];
    for (const o of n) {
      const i = await o.key, a = await o.value;
      r.push({
        key: i,
        value: a
      });
    }
    return Et.mergeObjectSync(t, r);
  }
  static mergeObjectSync(t, n) {
    const r = {};
    for (const o of n) {
      const { key: i, value: a } = o;
      if (i.status === "aborted" || a.status === "aborted")
        return Pe;
      i.status === "dirty" && t.dirty(), a.status === "dirty" && t.dirty(), i.value !== "__proto__" && (typeof a.value < "u" || o.alwaysSet) && (r[i.value] = a.value);
    }
    return { status: t.value, value: r };
  }
}
const Pe = Object.freeze({
  status: "aborted"
}), io = (e) => ({ status: "dirty", value: e }), At = (e) => ({ status: "valid", value: e }), jl = (e) => e.status === "aborted", Fl = (e) => e.status === "dirty", li = (e) => e.status === "valid", ui = (e) => typeof Promise < "u" && e instanceof Promise;
function Ua(e, t, n, r) {
  if (typeof t == "function" ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return t.get(e);
}
function oy(e, t, n, r, o) {
  if (typeof t == "function" ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return t.set(e, n), n;
}
var Ae;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(Ae || (Ae = {}));
var Vo, Uo;
class vn {
  constructor(t, n, r, o) {
    this._cachedPath = [], this.parent = t, this.data = n, this._path = r, this._key = o;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const xp = (e, t) => {
  if (li(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const n = new Bt(e.common.issues);
      return this._error = n, this._error;
    }
  };
};
function Le(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: n, required_error: r, description: o } = e;
  if (t && (n || r))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: o } : { errorMap: (a, s) => {
    var c, l;
    const { message: u } = e;
    return a.code === "invalid_enum_value" ? { message: u ?? s.defaultError } : typeof s.data > "u" ? { message: (c = u ?? r) !== null && c !== void 0 ? c : s.defaultError } : a.code !== "invalid_type" ? { message: s.defaultError } : { message: (l = u ?? n) !== null && l !== void 0 ? l : s.defaultError };
  }, description: o };
}
class Ve {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Gn(t.data);
  }
  _getOrReturnCtx(t, n) {
    return n || {
      common: t.parent.common,
      data: t.data,
      parsedType: Gn(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Et(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Gn(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const n = this._parse(t);
    if (ui(n))
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
    const o = {
      common: {
        issues: [],
        async: (r = n == null ? void 0 : n.async) !== null && r !== void 0 ? r : !1,
        contextualErrorMap: n == null ? void 0 : n.errorMap
      },
      path: (n == null ? void 0 : n.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Gn(t)
    }, i = this._parseSync({ data: t, path: o.path, parent: o });
    return xp(o, i);
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
      parsedType: Gn(t)
    }, o = this._parse({ data: t, path: r.path, parent: r }), i = await (ui(o) ? o : Promise.resolve(o));
    return xp(r, i);
  }
  refine(t, n) {
    const r = (o) => typeof n == "string" || typeof n > "u" ? { message: n } : typeof n == "function" ? n(o) : n;
    return this._refinement((o, i) => {
      const a = t(o), s = () => i.addIssue({
        code: ae.custom,
        ...r(o)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((c) => c ? !0 : (s(), !1)) : a ? !0 : (s(), !1);
    });
  }
  refinement(t, n) {
    return this._refinement((r, o) => t(r) ? !0 : (o.addIssue(typeof n == "function" ? n(r, o) : n), !1));
  }
  _refinement(t) {
    return new rn({
      schema: this,
      typeName: Oe.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return gn.create(this, this._def);
  }
  nullable() {
    return ar.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return nn.create(this, this._def);
  }
  promise() {
    return bo.create(this, this._def);
  }
  or(t) {
    return hi.create([this, t], this._def);
  }
  and(t) {
    return mi.create(this, t, this._def);
  }
  transform(t) {
    return new rn({
      ...Le(this._def),
      schema: this,
      typeName: Oe.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const n = typeof t == "function" ? t : () => t;
    return new xi({
      ...Le(this._def),
      innerType: this,
      defaultValue: n,
      typeName: Oe.ZodDefault
    });
  }
  brand() {
    return new Mu({
      typeName: Oe.ZodBranded,
      type: this,
      ...Le(this._def)
    });
  }
  catch(t) {
    const n = typeof t == "function" ? t : () => t;
    return new wi({
      ...Le(this._def),
      innerType: this,
      catchValue: n,
      typeName: Oe.ZodCatch
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
    return ji.create(this, t);
  }
  readonly() {
    return _i.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const cA = /^c[^\s-]{8,}$/i, lA = /^[0-9a-z]+$/, uA = /^[0-9A-HJKMNP-TV-Z]{26}$/, fA = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, dA = /^[a-z0-9_-]{21}$/i, pA = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/, hA = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, mA = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Lc;
const gA = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, yA = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, vA = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/, iy = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))", bA = new RegExp(`^${iy}$`);
function ay(e) {
  let t = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
  return e.precision ? t = `${t}\\.\\d{${e.precision}}` : e.precision == null && (t = `${t}(\\.\\d+)?`), t;
}
function xA(e) {
  return new RegExp(`^${ay(e)}$`);
}
function sy(e) {
  let t = `${iy}T${ay(e)}`;
  const n = [];
  return n.push(e.local ? "Z?" : "Z"), e.offset && n.push("([+-]\\d{2}:?\\d{2})"), t = `${t}(${n.join("|")})`, new RegExp(`^${t}$`);
}
function wA(e, t) {
  return !!((t === "v4" || !t) && gA.test(e) || (t === "v6" || !t) && yA.test(e));
}
class Jt extends Ve {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== xe.string) {
      const i = this._getOrReturnCtx(t);
      return ye(i, {
        code: ae.invalid_type,
        expected: xe.string,
        received: i.parsedType
      }), Pe;
    }
    const r = new Et();
    let o;
    for (const i of this._def.checks)
      if (i.kind === "min")
        t.data.length < i.value && (o = this._getOrReturnCtx(t, o), ye(o, {
          code: ae.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), r.dirty());
      else if (i.kind === "max")
        t.data.length > i.value && (o = this._getOrReturnCtx(t, o), ye(o, {
          code: ae.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), r.dirty());
      else if (i.kind === "length") {
        const a = t.data.length > i.value, s = t.data.length < i.value;
        (a || s) && (o = this._getOrReturnCtx(t, o), a ? ye(o, {
          code: ae.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }) : s && ye(o, {
          code: ae.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }), r.dirty());
      } else if (i.kind === "email")
        hA.test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
          validation: "email",
          code: ae.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "emoji")
        Lc || (Lc = new RegExp(mA, "u")), Lc.test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
          validation: "emoji",
          code: ae.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "uuid")
        fA.test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
          validation: "uuid",
          code: ae.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "nanoid")
        dA.test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
          validation: "nanoid",
          code: ae.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "cuid")
        cA.test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
          validation: "cuid",
          code: ae.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "cuid2")
        lA.test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
          validation: "cuid2",
          code: ae.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "ulid")
        uA.test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
          validation: "ulid",
          code: ae.invalid_string,
          message: i.message
        }), r.dirty());
      else if (i.kind === "url")
        try {
          new URL(t.data);
        } catch {
          o = this._getOrReturnCtx(t, o), ye(o, {
            validation: "url",
            code: ae.invalid_string,
            message: i.message
          }), r.dirty();
        }
      else i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
        validation: "regex",
        code: ae.invalid_string,
        message: i.message
      }), r.dirty())) : i.kind === "trim" ? t.data = t.data.trim() : i.kind === "includes" ? t.data.includes(i.value, i.position) || (o = this._getOrReturnCtx(t, o), ye(o, {
        code: ae.invalid_string,
        validation: { includes: i.value, position: i.position },
        message: i.message
      }), r.dirty()) : i.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : i.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : i.kind === "startsWith" ? t.data.startsWith(i.value) || (o = this._getOrReturnCtx(t, o), ye(o, {
        code: ae.invalid_string,
        validation: { startsWith: i.value },
        message: i.message
      }), r.dirty()) : i.kind === "endsWith" ? t.data.endsWith(i.value) || (o = this._getOrReturnCtx(t, o), ye(o, {
        code: ae.invalid_string,
        validation: { endsWith: i.value },
        message: i.message
      }), r.dirty()) : i.kind === "datetime" ? sy(i).test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
        code: ae.invalid_string,
        validation: "datetime",
        message: i.message
      }), r.dirty()) : i.kind === "date" ? bA.test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
        code: ae.invalid_string,
        validation: "date",
        message: i.message
      }), r.dirty()) : i.kind === "time" ? xA(i).test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
        code: ae.invalid_string,
        validation: "time",
        message: i.message
      }), r.dirty()) : i.kind === "duration" ? pA.test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
        validation: "duration",
        code: ae.invalid_string,
        message: i.message
      }), r.dirty()) : i.kind === "ip" ? wA(t.data, i.version) || (o = this._getOrReturnCtx(t, o), ye(o, {
        validation: "ip",
        code: ae.invalid_string,
        message: i.message
      }), r.dirty()) : i.kind === "base64" ? vA.test(t.data) || (o = this._getOrReturnCtx(t, o), ye(o, {
        validation: "base64",
        code: ae.invalid_string,
        message: i.message
      }), r.dirty()) : Ke.assertNever(i);
    return { status: r.value, value: t.data };
  }
  _regex(t, n, r) {
    return this.refinement((o) => t.test(o), {
      validation: n,
      code: ae.invalid_string,
      ...Ae.errToObj(r)
    });
  }
  _addCheck(t) {
    return new Jt({
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
    return new Jt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Jt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Jt({
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
Jt.create = (e) => {
  var t;
  return new Jt({
    checks: [],
    typeName: Oe.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Le(e)
  });
};
function _A(e, t) {
  const n = (e.toString().split(".")[1] || "").length, r = (t.toString().split(".")[1] || "").length, o = n > r ? n : r, i = parseInt(e.toFixed(o).replace(".", "")), a = parseInt(t.toFixed(o).replace(".", ""));
  return i % a / Math.pow(10, o);
}
class rr extends Ve {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== xe.number) {
      const i = this._getOrReturnCtx(t);
      return ye(i, {
        code: ae.invalid_type,
        expected: xe.number,
        received: i.parsedType
      }), Pe;
    }
    let r;
    const o = new Et();
    for (const i of this._def.checks)
      i.kind === "int" ? Ke.isInteger(t.data) || (r = this._getOrReturnCtx(t, r), ye(r, {
        code: ae.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), o.dirty()) : i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (r = this._getOrReturnCtx(t, r), ye(r, {
        code: ae.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), o.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (r = this._getOrReturnCtx(t, r), ye(r, {
        code: ae.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), o.dirty()) : i.kind === "multipleOf" ? _A(t.data, i.value) !== 0 && (r = this._getOrReturnCtx(t, r), ye(r, {
        code: ae.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), o.dirty()) : i.kind === "finite" ? Number.isFinite(t.data) || (r = this._getOrReturnCtx(t, r), ye(r, {
        code: ae.not_finite,
        message: i.message
      }), o.dirty()) : Ke.assertNever(i);
    return { status: o.value, value: t.data };
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
  setLimit(t, n, r, o) {
    return new rr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: Ae.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new rr({
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Ke.isInteger(t.value));
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
rr.create = (e) => new rr({
  checks: [],
  typeName: Oe.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Le(e)
});
class or extends Ve {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== xe.bigint) {
      const i = this._getOrReturnCtx(t);
      return ye(i, {
        code: ae.invalid_type,
        expected: xe.bigint,
        received: i.parsedType
      }), Pe;
    }
    let r;
    const o = new Et();
    for (const i of this._def.checks)
      i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (r = this._getOrReturnCtx(t, r), ye(r, {
        code: ae.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), o.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (r = this._getOrReturnCtx(t, r), ye(r, {
        code: ae.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), o.dirty()) : i.kind === "multipleOf" ? t.data % i.value !== BigInt(0) && (r = this._getOrReturnCtx(t, r), ye(r, {
        code: ae.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), o.dirty()) : Ke.assertNever(i);
    return { status: o.value, value: t.data };
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
  setLimit(t, n, r, o) {
    return new or({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: n,
          inclusive: r,
          message: Ae.toString(o)
        }
      ]
    });
  }
  _addCheck(t) {
    return new or({
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
or.create = (e) => {
  var t;
  return new or({
    checks: [],
    typeName: Oe.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...Le(e)
  });
};
class fi extends Ve {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== xe.boolean) {
      const r = this._getOrReturnCtx(t);
      return ye(r, {
        code: ae.invalid_type,
        expected: xe.boolean,
        received: r.parsedType
      }), Pe;
    }
    return At(t.data);
  }
}
fi.create = (e) => new fi({
  typeName: Oe.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...Le(e)
});
class Dr extends Ve {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== xe.date) {
      const i = this._getOrReturnCtx(t);
      return ye(i, {
        code: ae.invalid_type,
        expected: xe.date,
        received: i.parsedType
      }), Pe;
    }
    if (isNaN(t.data.getTime())) {
      const i = this._getOrReturnCtx(t);
      return ye(i, {
        code: ae.invalid_date
      }), Pe;
    }
    const r = new Et();
    let o;
    for (const i of this._def.checks)
      i.kind === "min" ? t.data.getTime() < i.value && (o = this._getOrReturnCtx(t, o), ye(o, {
        code: ae.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), r.dirty()) : i.kind === "max" ? t.data.getTime() > i.value && (o = this._getOrReturnCtx(t, o), ye(o, {
        code: ae.too_big,
        message: i.message,
        inclusive: !0,
        exact: !1,
        maximum: i.value,
        type: "date"
      }), r.dirty()) : Ke.assertNever(i);
    return {
      status: r.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Dr({
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
Dr.create = (e) => new Dr({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: Oe.ZodDate,
  ...Le(e)
});
class Ba extends Ve {
  _parse(t) {
    if (this._getType(t) !== xe.symbol) {
      const r = this._getOrReturnCtx(t);
      return ye(r, {
        code: ae.invalid_type,
        expected: xe.symbol,
        received: r.parsedType
      }), Pe;
    }
    return At(t.data);
  }
}
Ba.create = (e) => new Ba({
  typeName: Oe.ZodSymbol,
  ...Le(e)
});
class di extends Ve {
  _parse(t) {
    if (this._getType(t) !== xe.undefined) {
      const r = this._getOrReturnCtx(t);
      return ye(r, {
        code: ae.invalid_type,
        expected: xe.undefined,
        received: r.parsedType
      }), Pe;
    }
    return At(t.data);
  }
}
di.create = (e) => new di({
  typeName: Oe.ZodUndefined,
  ...Le(e)
});
class pi extends Ve {
  _parse(t) {
    if (this._getType(t) !== xe.null) {
      const r = this._getOrReturnCtx(t);
      return ye(r, {
        code: ae.invalid_type,
        expected: xe.null,
        received: r.parsedType
      }), Pe;
    }
    return At(t.data);
  }
}
pi.create = (e) => new pi({
  typeName: Oe.ZodNull,
  ...Le(e)
});
class vo extends Ve {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return At(t.data);
  }
}
vo.create = (e) => new vo({
  typeName: Oe.ZodAny,
  ...Le(e)
});
class Rr extends Ve {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return At(t.data);
  }
}
Rr.create = (e) => new Rr({
  typeName: Oe.ZodUnknown,
  ...Le(e)
});
class Pn extends Ve {
  _parse(t) {
    const n = this._getOrReturnCtx(t);
    return ye(n, {
      code: ae.invalid_type,
      expected: xe.never,
      received: n.parsedType
    }), Pe;
  }
}
Pn.create = (e) => new Pn({
  typeName: Oe.ZodNever,
  ...Le(e)
});
class Wa extends Ve {
  _parse(t) {
    if (this._getType(t) !== xe.undefined) {
      const r = this._getOrReturnCtx(t);
      return ye(r, {
        code: ae.invalid_type,
        expected: xe.void,
        received: r.parsedType
      }), Pe;
    }
    return At(t.data);
  }
}
Wa.create = (e) => new Wa({
  typeName: Oe.ZodVoid,
  ...Le(e)
});
class nn extends Ve {
  _parse(t) {
    const { ctx: n, status: r } = this._processInputParams(t), o = this._def;
    if (n.parsedType !== xe.array)
      return ye(n, {
        code: ae.invalid_type,
        expected: xe.array,
        received: n.parsedType
      }), Pe;
    if (o.exactLength !== null) {
      const a = n.data.length > o.exactLength.value, s = n.data.length < o.exactLength.value;
      (a || s) && (ye(n, {
        code: a ? ae.too_big : ae.too_small,
        minimum: s ? o.exactLength.value : void 0,
        maximum: a ? o.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: o.exactLength.message
      }), r.dirty());
    }
    if (o.minLength !== null && n.data.length < o.minLength.value && (ye(n, {
      code: ae.too_small,
      minimum: o.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.minLength.message
    }), r.dirty()), o.maxLength !== null && n.data.length > o.maxLength.value && (ye(n, {
      code: ae.too_big,
      maximum: o.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: o.maxLength.message
    }), r.dirty()), n.common.async)
      return Promise.all([...n.data].map((a, s) => o.type._parseAsync(new vn(n, a, n.path, s)))).then((a) => Et.mergeArray(r, a));
    const i = [...n.data].map((a, s) => o.type._parseSync(new vn(n, a, n.path, s)));
    return Et.mergeArray(r, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, n) {
    return new nn({
      ...this._def,
      minLength: { value: t, message: Ae.toString(n) }
    });
  }
  max(t, n) {
    return new nn({
      ...this._def,
      maxLength: { value: t, message: Ae.toString(n) }
    });
  }
  length(t, n) {
    return new nn({
      ...this._def,
      exactLength: { value: t, message: Ae.toString(n) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
nn.create = (e, t) => new nn({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Oe.ZodArray,
  ...Le(t)
});
function Jr(e) {
  if (e instanceof ft) {
    const t = {};
    for (const n in e.shape) {
      const r = e.shape[n];
      t[n] = gn.create(Jr(r));
    }
    return new ft({
      ...e._def,
      shape: () => t
    });
  } else return e instanceof nn ? new nn({
    ...e._def,
    type: Jr(e.element)
  }) : e instanceof gn ? gn.create(Jr(e.unwrap())) : e instanceof ar ? ar.create(Jr(e.unwrap())) : e instanceof bn ? bn.create(e.items.map((t) => Jr(t))) : e;
}
class ft extends Ve {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), n = Ke.objectKeys(t);
    return this._cached = { shape: t, keys: n };
  }
  _parse(t) {
    if (this._getType(t) !== xe.object) {
      const l = this._getOrReturnCtx(t);
      return ye(l, {
        code: ae.invalid_type,
        expected: xe.object,
        received: l.parsedType
      }), Pe;
    }
    const { status: r, ctx: o } = this._processInputParams(t), { shape: i, keys: a } = this._getCached(), s = [];
    if (!(this._def.catchall instanceof Pn && this._def.unknownKeys === "strip"))
      for (const l in o.data)
        a.includes(l) || s.push(l);
    const c = [];
    for (const l of a) {
      const u = i[l], d = o.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new vn(o, d, o.path, l)),
        alwaysSet: l in o.data
      });
    }
    if (this._def.catchall instanceof Pn) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of s)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: o.data[u] }
          });
      else if (l === "strict")
        s.length > 0 && (ye(o, {
          code: ae.unrecognized_keys,
          keys: s
        }), r.dirty());
      else if (l !== "strip") throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const u of s) {
        const d = o.data[u];
        c.push({
          key: { status: "valid", value: u },
          value: l._parse(
            new vn(o, d, o.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in o.data
        });
      }
    }
    return o.common.async ? Promise.resolve().then(async () => {
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
    }).then((l) => Et.mergeObjectSync(r, l)) : Et.mergeObjectSync(r, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return Ae.errToObj, new ft({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (n, r) => {
          var o, i, a, s;
          const c = (a = (i = (o = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(o, n, r).message) !== null && a !== void 0 ? a : r.defaultError;
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
    return new ft({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new ft({
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
    return new ft({
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
    return new ft({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: Oe.ZodObject
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
    return new ft({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const n = {};
    return Ke.objectKeys(t).forEach((r) => {
      t[r] && this.shape[r] && (n[r] = this.shape[r]);
    }), new ft({
      ...this._def,
      shape: () => n
    });
  }
  omit(t) {
    const n = {};
    return Ke.objectKeys(this.shape).forEach((r) => {
      t[r] || (n[r] = this.shape[r]);
    }), new ft({
      ...this._def,
      shape: () => n
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Jr(this);
  }
  partial(t) {
    const n = {};
    return Ke.objectKeys(this.shape).forEach((r) => {
      const o = this.shape[r];
      t && !t[r] ? n[r] = o : n[r] = o.optional();
    }), new ft({
      ...this._def,
      shape: () => n
    });
  }
  required(t) {
    const n = {};
    return Ke.objectKeys(this.shape).forEach((r) => {
      if (t && !t[r])
        n[r] = this.shape[r];
      else {
        let i = this.shape[r];
        for (; i instanceof gn; )
          i = i._def.innerType;
        n[r] = i;
      }
    }), new ft({
      ...this._def,
      shape: () => n
    });
  }
  keyof() {
    return cy(Ke.objectKeys(this.shape));
  }
}
ft.create = (e, t) => new ft({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Pn.create(),
  typeName: Oe.ZodObject,
  ...Le(t)
});
ft.strictCreate = (e, t) => new ft({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Pn.create(),
  typeName: Oe.ZodObject,
  ...Le(t)
});
ft.lazycreate = (e, t) => new ft({
  shape: e,
  unknownKeys: "strip",
  catchall: Pn.create(),
  typeName: Oe.ZodObject,
  ...Le(t)
});
class hi extends Ve {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = this._def.options;
    function o(i) {
      for (const s of i)
        if (s.result.status === "valid")
          return s.result;
      for (const s of i)
        if (s.result.status === "dirty")
          return n.common.issues.push(...s.ctx.common.issues), s.result;
      const a = i.map((s) => new Bt(s.ctx.common.issues));
      return ye(n, {
        code: ae.invalid_union,
        unionErrors: a
      }), Pe;
    }
    if (n.common.async)
      return Promise.all(r.map(async (i) => {
        const a = {
          ...n,
          common: {
            ...n.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await i._parseAsync({
            data: n.data,
            path: n.path,
            parent: a
          }),
          ctx: a
        };
      })).then(o);
    {
      let i;
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
        u.status === "dirty" && !i && (i = { result: u, ctx: l }), l.common.issues.length && a.push(l.common.issues);
      }
      if (i)
        return n.common.issues.push(...i.ctx.common.issues), i.result;
      const s = a.map((c) => new Bt(c));
      return ye(n, {
        code: ae.invalid_union,
        unionErrors: s
      }), Pe;
    }
  }
  get options() {
    return this._def.options;
  }
}
hi.create = (e, t) => new hi({
  options: e,
  typeName: Oe.ZodUnion,
  ...Le(t)
});
const Sn = (e) => e instanceof yi ? Sn(e.schema) : e instanceof rn ? Sn(e.innerType()) : e instanceof vi ? [e.value] : e instanceof ir ? e.options : e instanceof bi ? Ke.objectValues(e.enum) : e instanceof xi ? Sn(e._def.innerType) : e instanceof di ? [void 0] : e instanceof pi ? [null] : e instanceof gn ? [void 0, ...Sn(e.unwrap())] : e instanceof ar ? [null, ...Sn(e.unwrap())] : e instanceof Mu || e instanceof _i ? Sn(e.unwrap()) : e instanceof wi ? Sn(e._def.innerType) : [];
class Cs extends Ve {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== xe.object)
      return ye(n, {
        code: ae.invalid_type,
        expected: xe.object,
        received: n.parsedType
      }), Pe;
    const r = this.discriminator, o = n.data[r], i = this.optionsMap.get(o);
    return i ? n.common.async ? i._parseAsync({
      data: n.data,
      path: n.path,
      parent: n
    }) : i._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }) : (ye(n, {
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
    const o = /* @__PURE__ */ new Map();
    for (const i of n) {
      const a = Sn(i.shape[t]);
      if (!a.length)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const s of a) {
        if (o.has(s))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(s)}`);
        o.set(s, i);
      }
    }
    return new Cs({
      typeName: Oe.ZodDiscriminatedUnion,
      discriminator: t,
      options: n,
      optionsMap: o,
      ...Le(r)
    });
  }
}
function Ll(e, t) {
  const n = Gn(e), r = Gn(t);
  if (e === t)
    return { valid: !0, data: e };
  if (n === xe.object && r === xe.object) {
    const o = Ke.objectKeys(t), i = Ke.objectKeys(e).filter((s) => o.indexOf(s) !== -1), a = { ...e, ...t };
    for (const s of i) {
      const c = Ll(e[s], t[s]);
      if (!c.valid)
        return { valid: !1 };
      a[s] = c.data;
    }
    return { valid: !0, data: a };
  } else if (n === xe.array && r === xe.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const o = [];
    for (let i = 0; i < e.length; i++) {
      const a = e[i], s = t[i], c = Ll(a, s);
      if (!c.valid)
        return { valid: !1 };
      o.push(c.data);
    }
    return { valid: !0, data: o };
  } else return n === xe.date && r === xe.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class mi extends Ve {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = (i, a) => {
      if (jl(i) || jl(a))
        return Pe;
      const s = Ll(i.value, a.value);
      return s.valid ? ((Fl(i) || Fl(a)) && n.dirty(), { status: n.value, value: s.data }) : (ye(r, {
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
    ]).then(([i, a]) => o(i, a)) : o(this._def.left._parseSync({
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
mi.create = (e, t, n) => new mi({
  left: e,
  right: t,
  typeName: Oe.ZodIntersection,
  ...Le(n)
});
class bn extends Ve {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== xe.array)
      return ye(r, {
        code: ae.invalid_type,
        expected: xe.array,
        received: r.parsedType
      }), Pe;
    if (r.data.length < this._def.items.length)
      return ye(r, {
        code: ae.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), Pe;
    !this._def.rest && r.data.length > this._def.items.length && (ye(r, {
      code: ae.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), n.dirty());
    const i = [...r.data].map((a, s) => {
      const c = this._def.items[s] || this._def.rest;
      return c ? c._parse(new vn(r, a, r.path, s)) : null;
    }).filter((a) => !!a);
    return r.common.async ? Promise.all(i).then((a) => Et.mergeArray(n, a)) : Et.mergeArray(n, i);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new bn({
      ...this._def,
      rest: t
    });
  }
}
bn.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new bn({
    items: e,
    typeName: Oe.ZodTuple,
    rest: null,
    ...Le(t)
  });
};
class gi extends Ve {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== xe.object)
      return ye(r, {
        code: ae.invalid_type,
        expected: xe.object,
        received: r.parsedType
      }), Pe;
    const o = [], i = this._def.keyType, a = this._def.valueType;
    for (const s in r.data)
      o.push({
        key: i._parse(new vn(r, s, r.path, s)),
        value: a._parse(new vn(r, r.data[s], r.path, s)),
        alwaysSet: s in r.data
      });
    return r.common.async ? Et.mergeObjectAsync(n, o) : Et.mergeObjectSync(n, o);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, n, r) {
    return n instanceof Ve ? new gi({
      keyType: t,
      valueType: n,
      typeName: Oe.ZodRecord,
      ...Le(r)
    }) : new gi({
      keyType: Jt.create(),
      valueType: t,
      typeName: Oe.ZodRecord,
      ...Le(n)
    });
  }
}
class Ha extends Ve {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== xe.map)
      return ye(r, {
        code: ae.invalid_type,
        expected: xe.map,
        received: r.parsedType
      }), Pe;
    const o = this._def.keyType, i = this._def.valueType, a = [...r.data.entries()].map(([s, c], l) => ({
      key: o._parse(new vn(r, s, r.path, [l, "key"])),
      value: i._parse(new vn(r, c, r.path, [l, "value"]))
    }));
    if (r.common.async) {
      const s = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of a) {
          const l = await c.key, u = await c.value;
          if (l.status === "aborted" || u.status === "aborted")
            return Pe;
          (l.status === "dirty" || u.status === "dirty") && n.dirty(), s.set(l.value, u.value);
        }
        return { status: n.value, value: s };
      });
    } else {
      const s = /* @__PURE__ */ new Map();
      for (const c of a) {
        const l = c.key, u = c.value;
        if (l.status === "aborted" || u.status === "aborted")
          return Pe;
        (l.status === "dirty" || u.status === "dirty") && n.dirty(), s.set(l.value, u.value);
      }
      return { status: n.value, value: s };
    }
  }
}
Ha.create = (e, t, n) => new Ha({
  valueType: t,
  keyType: e,
  typeName: Oe.ZodMap,
  ...Le(n)
});
class jr extends Ve {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.parsedType !== xe.set)
      return ye(r, {
        code: ae.invalid_type,
        expected: xe.set,
        received: r.parsedType
      }), Pe;
    const o = this._def;
    o.minSize !== null && r.data.size < o.minSize.value && (ye(r, {
      code: ae.too_small,
      minimum: o.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.minSize.message
    }), n.dirty()), o.maxSize !== null && r.data.size > o.maxSize.value && (ye(r, {
      code: ae.too_big,
      maximum: o.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: o.maxSize.message
    }), n.dirty());
    const i = this._def.valueType;
    function a(c) {
      const l = /* @__PURE__ */ new Set();
      for (const u of c) {
        if (u.status === "aborted")
          return Pe;
        u.status === "dirty" && n.dirty(), l.add(u.value);
      }
      return { status: n.value, value: l };
    }
    const s = [...r.data.values()].map((c, l) => i._parse(new vn(r, c, r.path, l)));
    return r.common.async ? Promise.all(s).then((c) => a(c)) : a(s);
  }
  min(t, n) {
    return new jr({
      ...this._def,
      minSize: { value: t, message: Ae.toString(n) }
    });
  }
  max(t, n) {
    return new jr({
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
jr.create = (e, t) => new jr({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Oe.ZodSet,
  ...Le(t)
});
class co extends Ve {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== xe.function)
      return ye(n, {
        code: ae.invalid_type,
        expected: xe.function,
        received: n.parsedType
      }), Pe;
    function r(s, c) {
      return Va({
        data: s,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          $a(),
          yo
        ].filter((l) => !!l),
        issueData: {
          code: ae.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function o(s, c) {
      return Va({
        data: s,
        path: n.path,
        errorMaps: [
          n.common.contextualErrorMap,
          n.schemaErrorMap,
          $a(),
          yo
        ].filter((l) => !!l),
        issueData: {
          code: ae.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const i = { errorMap: n.common.contextualErrorMap }, a = n.data;
    if (this._def.returns instanceof bo) {
      const s = this;
      return At(async function(...c) {
        const l = new Bt([]), u = await s._def.args.parseAsync(c, i).catch((h) => {
          throw l.addIssue(r(c, h)), l;
        }), d = await Reflect.apply(a, this, u);
        return await s._def.returns._def.type.parseAsync(d, i).catch((h) => {
          throw l.addIssue(o(d, h)), l;
        });
      });
    } else {
      const s = this;
      return At(function(...c) {
        const l = s._def.args.safeParse(c, i);
        if (!l.success)
          throw new Bt([r(c, l.error)]);
        const u = Reflect.apply(a, this, l.data), d = s._def.returns.safeParse(u, i);
        if (!d.success)
          throw new Bt([o(u, d.error)]);
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
    return new co({
      ...this._def,
      args: bn.create(t).rest(Rr.create())
    });
  }
  returns(t) {
    return new co({
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
    return new co({
      args: t || bn.create([]).rest(Rr.create()),
      returns: n || Rr.create(),
      typeName: Oe.ZodFunction,
      ...Le(r)
    });
  }
}
class yi extends Ve {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    return this._def.getter()._parse({ data: n.data, path: n.path, parent: n });
  }
}
yi.create = (e, t) => new yi({
  getter: e,
  typeName: Oe.ZodLazy,
  ...Le(t)
});
class vi extends Ve {
  _parse(t) {
    if (t.data !== this._def.value) {
      const n = this._getOrReturnCtx(t);
      return ye(n, {
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
vi.create = (e, t) => new vi({
  value: e,
  typeName: Oe.ZodLiteral,
  ...Le(t)
});
function cy(e, t) {
  return new ir({
    values: e,
    typeName: Oe.ZodEnum,
    ...Le(t)
  });
}
class ir extends Ve {
  constructor() {
    super(...arguments), Vo.set(this, void 0);
  }
  _parse(t) {
    if (typeof t.data != "string") {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ye(n, {
        expected: Ke.joinValues(r),
        received: n.parsedType,
        code: ae.invalid_type
      }), Pe;
    }
    if (Ua(this, Vo) || oy(this, Vo, new Set(this._def.values)), !Ua(this, Vo).has(t.data)) {
      const n = this._getOrReturnCtx(t), r = this._def.values;
      return ye(n, {
        received: n.data,
        code: ae.invalid_enum_value,
        options: r
      }), Pe;
    }
    return At(t.data);
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
    return ir.create(t, {
      ...this._def,
      ...n
    });
  }
  exclude(t, n = this._def) {
    return ir.create(this.options.filter((r) => !t.includes(r)), {
      ...this._def,
      ...n
    });
  }
}
Vo = /* @__PURE__ */ new WeakMap();
ir.create = cy;
class bi extends Ve {
  constructor() {
    super(...arguments), Uo.set(this, void 0);
  }
  _parse(t) {
    const n = Ke.getValidEnumValues(this._def.values), r = this._getOrReturnCtx(t);
    if (r.parsedType !== xe.string && r.parsedType !== xe.number) {
      const o = Ke.objectValues(n);
      return ye(r, {
        expected: Ke.joinValues(o),
        received: r.parsedType,
        code: ae.invalid_type
      }), Pe;
    }
    if (Ua(this, Uo) || oy(this, Uo, new Set(Ke.getValidEnumValues(this._def.values))), !Ua(this, Uo).has(t.data)) {
      const o = Ke.objectValues(n);
      return ye(r, {
        received: r.data,
        code: ae.invalid_enum_value,
        options: o
      }), Pe;
    }
    return At(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Uo = /* @__PURE__ */ new WeakMap();
bi.create = (e, t) => new bi({
  values: e,
  typeName: Oe.ZodNativeEnum,
  ...Le(t)
});
class bo extends Ve {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: n } = this._processInputParams(t);
    if (n.parsedType !== xe.promise && n.common.async === !1)
      return ye(n, {
        code: ae.invalid_type,
        expected: xe.promise,
        received: n.parsedType
      }), Pe;
    const r = n.parsedType === xe.promise ? n.data : Promise.resolve(n.data);
    return At(r.then((o) => this._def.type.parseAsync(o, {
      path: n.path,
      errorMap: n.common.contextualErrorMap
    })));
  }
}
bo.create = (e, t) => new bo({
  type: e,
  typeName: Oe.ZodPromise,
  ...Le(t)
});
class rn extends Ve {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Oe.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t), o = this._def.effect || null, i = {
      addIssue: (a) => {
        ye(r, a), a.fatal ? n.abort() : n.dirty();
      },
      get path() {
        return r.path;
      }
    };
    if (i.addIssue = i.addIssue.bind(i), o.type === "preprocess") {
      const a = o.transform(r.data, i);
      if (r.common.async)
        return Promise.resolve(a).then(async (s) => {
          if (n.value === "aborted")
            return Pe;
          const c = await this._def.schema._parseAsync({
            data: s,
            path: r.path,
            parent: r
          });
          return c.status === "aborted" ? Pe : c.status === "dirty" || n.value === "dirty" ? io(c.value) : c;
        });
      {
        if (n.value === "aborted")
          return Pe;
        const s = this._def.schema._parseSync({
          data: a,
          path: r.path,
          parent: r
        });
        return s.status === "aborted" ? Pe : s.status === "dirty" || n.value === "dirty" ? io(s.value) : s;
      }
    }
    if (o.type === "refinement") {
      const a = (s) => {
        const c = o.refinement(s, i);
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
        return s.status === "aborted" ? Pe : (s.status === "dirty" && n.dirty(), a(s.value), { status: n.value, value: s.value });
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((s) => s.status === "aborted" ? Pe : (s.status === "dirty" && n.dirty(), a(s.value).then(() => ({ status: n.value, value: s.value }))));
    }
    if (o.type === "transform")
      if (r.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: r.data,
          path: r.path,
          parent: r
        });
        if (!li(a))
          return a;
        const s = o.transform(a.value, i);
        if (s instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: n.value, value: s };
      } else
        return this._def.schema._parseAsync({ data: r.data, path: r.path, parent: r }).then((a) => li(a) ? Promise.resolve(o.transform(a.value, i)).then((s) => ({ status: n.value, value: s })) : a);
    Ke.assertNever(o);
  }
}
rn.create = (e, t, n) => new rn({
  schema: e,
  typeName: Oe.ZodEffects,
  effect: t,
  ...Le(n)
});
rn.createWithPreprocess = (e, t, n) => new rn({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Oe.ZodEffects,
  ...Le(n)
});
class gn extends Ve {
  _parse(t) {
    return this._getType(t) === xe.undefined ? At(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
gn.create = (e, t) => new gn({
  innerType: e,
  typeName: Oe.ZodOptional,
  ...Le(t)
});
class ar extends Ve {
  _parse(t) {
    return this._getType(t) === xe.null ? At(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ar.create = (e, t) => new ar({
  innerType: e,
  typeName: Oe.ZodNullable,
  ...Le(t)
});
class xi extends Ve {
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
xi.create = (e, t) => new xi({
  innerType: e,
  typeName: Oe.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...Le(t)
});
class wi extends Ve {
  _parse(t) {
    const { ctx: n } = this._processInputParams(t), r = {
      ...n,
      common: {
        ...n.common,
        issues: []
      }
    }, o = this._def.innerType._parse({
      data: r.data,
      path: r.path,
      parent: {
        ...r
      }
    });
    return ui(o) ? o.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new Bt(r.common.issues);
        },
        input: r.data
      })
    })) : {
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new Bt(r.common.issues);
        },
        input: r.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
wi.create = (e, t) => new wi({
  innerType: e,
  typeName: Oe.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...Le(t)
});
class qa extends Ve {
  _parse(t) {
    if (this._getType(t) !== xe.nan) {
      const r = this._getOrReturnCtx(t);
      return ye(r, {
        code: ae.invalid_type,
        expected: xe.nan,
        received: r.parsedType
      }), Pe;
    }
    return { status: "valid", value: t.data };
  }
}
qa.create = (e) => new qa({
  typeName: Oe.ZodNaN,
  ...Le(e)
});
const EA = Symbol("zod_brand");
class Mu extends Ve {
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
class ji extends Ve {
  _parse(t) {
    const { status: n, ctx: r } = this._processInputParams(t);
    if (r.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: r.data,
          path: r.path,
          parent: r
        });
        return i.status === "aborted" ? Pe : i.status === "dirty" ? (n.dirty(), io(i.value)) : this._def.out._parseAsync({
          data: i.value,
          path: r.path,
          parent: r
        });
      })();
    {
      const o = this._def.in._parseSync({
        data: r.data,
        path: r.path,
        parent: r
      });
      return o.status === "aborted" ? Pe : o.status === "dirty" ? (n.dirty(), {
        status: "dirty",
        value: o.value
      }) : this._def.out._parseSync({
        data: o.value,
        path: r.path,
        parent: r
      });
    }
  }
  static create(t, n) {
    return new ji({
      in: t,
      out: n,
      typeName: Oe.ZodPipeline
    });
  }
}
class _i extends Ve {
  _parse(t) {
    const n = this._def.innerType._parse(t), r = (o) => (li(o) && (o.value = Object.freeze(o.value)), o);
    return ui(n) ? n.then((o) => r(o)) : r(n);
  }
  unwrap() {
    return this._def.innerType;
  }
}
_i.create = (e, t) => new _i({
  innerType: e,
  typeName: Oe.ZodReadonly,
  ...Le(t)
});
function ly(e, t = {}, n) {
  return e ? vo.create().superRefine((r, o) => {
    var i, a;
    if (!e(r)) {
      const s = typeof t == "function" ? t(r) : typeof t == "string" ? { message: t } : t, c = (a = (i = s.fatal) !== null && i !== void 0 ? i : n) !== null && a !== void 0 ? a : !0, l = typeof s == "string" ? { message: s } : s;
      o.addIssue({ code: "custom", ...l, fatal: c });
    }
  }) : vo.create();
}
const SA = {
  object: ft.lazycreate
};
var Oe;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(Oe || (Oe = {}));
const CA = (e, t = {
  message: `Input not instance of ${e.name}`
}) => ly((n) => n instanceof e, t), uy = Jt.create, fy = rr.create, AA = qa.create, TA = or.create, dy = fi.create, RA = Dr.create, OA = Ba.create, kA = di.create, PA = pi.create, NA = vo.create, MA = Rr.create, IA = Pn.create, DA = Wa.create, jA = nn.create, FA = ft.create, LA = ft.strictCreate, zA = hi.create, $A = Cs.create, VA = mi.create, UA = bn.create, BA = gi.create, WA = Ha.create, HA = jr.create, qA = co.create, YA = yi.create, GA = vi.create, KA = ir.create, ZA = bi.create, XA = bo.create, wp = rn.create, JA = gn.create, QA = ar.create, eT = rn.createWithPreprocess, tT = ji.create, nT = () => uy().optional(), rT = () => fy().optional(), oT = () => dy().optional(), iT = {
  string: (e) => Jt.create({ ...e, coerce: !0 }),
  number: (e) => rr.create({ ...e, coerce: !0 }),
  boolean: (e) => fi.create({
    ...e,
    coerce: !0
  }),
  bigint: (e) => or.create({ ...e, coerce: !0 }),
  date: (e) => Dr.create({ ...e, coerce: !0 })
}, aT = Pe;
var Qr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  defaultErrorMap: yo,
  setErrorMap: aA,
  getErrorMap: $a,
  makeIssue: Va,
  EMPTY_PATH: sA,
  addIssueToContext: ye,
  ParseStatus: Et,
  INVALID: Pe,
  DIRTY: io,
  OK: At,
  isAborted: jl,
  isDirty: Fl,
  isValid: li,
  isAsync: ui,
  get util() {
    return Ke;
  },
  get objectUtil() {
    return Dl;
  },
  ZodParsedType: xe,
  getParsedType: Gn,
  ZodType: Ve,
  datetimeRegex: sy,
  ZodString: Jt,
  ZodNumber: rr,
  ZodBigInt: or,
  ZodBoolean: fi,
  ZodDate: Dr,
  ZodSymbol: Ba,
  ZodUndefined: di,
  ZodNull: pi,
  ZodAny: vo,
  ZodUnknown: Rr,
  ZodNever: Pn,
  ZodVoid: Wa,
  ZodArray: nn,
  ZodObject: ft,
  ZodUnion: hi,
  ZodDiscriminatedUnion: Cs,
  ZodIntersection: mi,
  ZodTuple: bn,
  ZodRecord: gi,
  ZodMap: Ha,
  ZodSet: jr,
  ZodFunction: co,
  ZodLazy: yi,
  ZodLiteral: vi,
  ZodEnum: ir,
  ZodNativeEnum: bi,
  ZodPromise: bo,
  ZodEffects: rn,
  ZodTransformer: rn,
  ZodOptional: gn,
  ZodNullable: ar,
  ZodDefault: xi,
  ZodCatch: wi,
  ZodNaN: qa,
  BRAND: EA,
  ZodBranded: Mu,
  ZodPipeline: ji,
  ZodReadonly: _i,
  custom: ly,
  Schema: Ve,
  ZodSchema: Ve,
  late: SA,
  get ZodFirstPartyTypeKind() {
    return Oe;
  },
  coerce: iT,
  any: NA,
  array: jA,
  bigint: TA,
  boolean: dy,
  date: RA,
  discriminatedUnion: $A,
  effect: wp,
  enum: KA,
  function: qA,
  instanceof: CA,
  intersection: VA,
  lazy: YA,
  literal: GA,
  map: WA,
  nan: AA,
  nativeEnum: ZA,
  never: IA,
  null: PA,
  nullable: QA,
  number: fy,
  object: FA,
  oboolean: oT,
  onumber: rT,
  optional: JA,
  ostring: nT,
  pipeline: tT,
  preprocess: eT,
  promise: XA,
  record: BA,
  set: HA,
  strictObject: LA,
  string: uy,
  symbol: OA,
  transformer: wp,
  tuple: UA,
  undefined: kA,
  union: zA,
  unknown: MA,
  void: DA,
  NEVER: aT,
  ZodIssueCode: ae,
  quotelessJson: iA,
  ZodError: Bt
});
const _p = (e, t, n) => {
  if (e && "reportValidity" in e) {
    const r = ue(n, t);
    e.setCustomValidity(r && r.message || ""), e.reportValidity();
  }
}, py = (e, t) => {
  for (const n in t.fields) {
    const r = t.fields[n];
    r && r.ref && "reportValidity" in r.ref ? _p(r.ref, n, e) : r.refs && r.refs.forEach((o) => _p(o, n, e));
  }
}, sT = (e, t) => {
  t.shouldUseNativeValidation && py(e, t);
  const n = {};
  for (const r in e) {
    const o = ue(t.fields, r), i = Object.assign(e[r] || {}, { ref: o && o.ref });
    if (cT(t.names || Object.keys(e), r)) {
      const a = Object.assign({}, ue(n, r));
      Qe(a, "root", i), Qe(n, r, a);
    } else Qe(n, r, i);
  }
  return n;
}, cT = (e, t) => e.some((n) => n.startsWith(t + "."));
var lT = function(e, t) {
  for (var n = {}; e.length; ) {
    var r = e[0], o = r.code, i = r.message, a = r.path.join(".");
    if (!n[a]) if ("unionErrors" in r) {
      var s = r.unionErrors[0].errors[0];
      n[a] = { message: s.message, type: s.code };
    } else n[a] = { message: i, type: o };
    if ("unionErrors" in r && r.unionErrors.forEach(function(u) {
      return u.errors.forEach(function(d) {
        return e.push(d);
      });
    }), t) {
      var c = n[a].types, l = c && c[r.code];
      n[a] = Zg(a, t, n, o, l ? [].concat(l, r.message) : r.message);
    }
    e.shift();
  }
  return n;
}, uT = function(e, t, n) {
  return n === void 0 && (n = {}), function(r, o, i) {
    try {
      return Promise.resolve(function(a, s) {
        try {
          var c = Promise.resolve(e[n.mode === "sync" ? "parse" : "parseAsync"](r, t)).then(function(l) {
            return i.shouldUseNativeValidation && py({}, i), { errors: {}, values: n.raw ? r : l };
          });
        } catch (l) {
          return s(l);
        }
        return c && c.then ? c.then(void 0, s) : c;
      }(0, function(a) {
        if (function(s) {
          return Array.isArray(s == null ? void 0 : s.errors);
        }(a)) return { values: {}, errors: sT(lT(a.errors, !i.shouldUseNativeValidation && i.criteriaMode === "all"), i) };
        throw a;
      }));
    } catch (a) {
      return Promise.reject(a);
    }
  };
}, fT = "Label", hy = x.forwardRef((e, t) => /* @__PURE__ */ y.jsx(
  nt.label,
  {
    ...e,
    ref: t,
    onMouseDown: (n) => {
      var o;
      n.target.closest("button, input, select, textarea") || ((o = e.onMouseDown) == null || o.call(e, n), !n.defaultPrevented && n.detail > 1 && n.preventDefault());
    }
  }
));
hy.displayName = fT;
var my = hy;
const dT = mu(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), gy = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  my,
  {
    ref: n,
    className: Ie(dT(), e),
    ...t
  }
));
gy.displayName = my.displayName;
const pT = B1, yy = x.createContext(
  {}
), Ji = ({
  ...e
}) => /* @__PURE__ */ y.jsx(yy.Provider, { value: { name: e.name }, children: /* @__PURE__ */ y.jsx(Y1, { ...e }) }), As = () => {
  const e = x.useContext(yy), t = x.useContext(vy), { getFieldState: n, formState: r } = Ss(), o = n(e.name, r);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: i } = t;
  return {
    id: i,
    name: e.name,
    formItemId: `${i}-form-item`,
    formDescriptionId: `${i}-form-item-description`,
    formMessageId: `${i}-form-item-message`,
    ...o
  };
}, vy = x.createContext(
  {}
), eo = x.forwardRef(({ className: e, ...t }, n) => {
  const r = x.useId();
  return /* @__PURE__ */ y.jsx(vy.Provider, { value: { id: r }, children: /* @__PURE__ */ y.jsx("div", { ref: n, className: Ie("space-y-2", e), ...t }) });
});
eo.displayName = "FormItem";
const Bo = x.forwardRef(({ className: e, ...t }, n) => {
  const { error: r, formItemId: o } = As();
  return /* @__PURE__ */ y.jsx(
    gy,
    {
      ref: n,
      className: Ie(r && "text-red-500 dark:text-red-900", e),
      htmlFor: o,
      ...t
    }
  );
});
Bo.displayName = "FormLabel";
const Wo = x.forwardRef(({ ...e }, t) => {
  const { error: n, formItemId: r, formDescriptionId: o, formMessageId: i } = As();
  return /* @__PURE__ */ y.jsx(
    Rn,
    {
      ref: t,
      id: r,
      "aria-describedby": n ? `${o} ${i}` : `${o}`,
      "aria-invalid": !!n,
      ...e
    }
  );
});
Wo.displayName = "FormControl";
const hT = x.forwardRef(({ className: e, ...t }, n) => {
  const { formDescriptionId: r } = As();
  return /* @__PURE__ */ y.jsx(
    "p",
    {
      ref: n,
      id: r,
      className: Ie("text-sm text-slate-500 dark:text-slate-400", e),
      ...t
    }
  );
});
hT.displayName = "FormDescription";
const ya = x.forwardRef(({ className: e, children: t, ...n }, r) => {
  const { error: o, formMessageId: i } = As(), a = o ? String(o == null ? void 0 : o.message) : t;
  return a ? /* @__PURE__ */ y.jsx(
    "p",
    {
      ref: r,
      id: i,
      className: Ie("text-sm font-medium text-red-500 dark:text-red-900", e),
      ...n,
      children: a
    }
  ) : null;
});
ya.displayName = "FormMessage";
const Qo = x.forwardRef(
  ({ className: e, type: t, ...n }, r) => /* @__PURE__ */ y.jsx(
    "input",
    {
      type: t,
      className: Ie(
        "flex h-10 w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
        e
      ),
      ref: r,
      ...n
    }
  )
);
Qo.displayName = "Input";
const by = x.forwardRef(
  ({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
    "textarea",
    {
      className: Ie(
        "flex min-h-[80px] w-full rounded-md border border-slate-200 bg-white px-3 py-2 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-800 dark:bg-slate-950 dark:ring-offset-slate-950 dark:placeholder:text-slate-400 dark:focus-visible:ring-slate-300",
        e
      ),
      ref: n,
      ...t
    }
  )
);
by.displayName = "Textarea";
const mT = Qr.object({
  label: Qr.string().min(1, "Ce champs ne doit pas être vide"),
  alt: Qr.string().optional(),
  description: Qr.string().optional(),
  file: Qr.any()
});
function gT() {
  const e = xr((a) => a.main.currentMedia);
  if (e === null)
    return /* @__PURE__ */ y.jsx("p", { children: "Pas de media " });
  const t = zr(), n = oA({
    resolver: uT(mT),
    mode: "onBlur",
    defaultValues: {
      label: e.label,
      alt: e.alt === void 0 ? "" : String(e.alt),
      description: e.description === void 0 ? "" : String(e.description),
      file: null
    }
  }), r = n.register("file");
  Xn(() => {
    e && n.reset({
      label: e.label || "",
      alt: e.alt === void 0 ? "" : String(e.alt),
      description: e.description === void 0 ? "" : String(e.description),
      file: null
    });
  }, [e, n]);
  const o = async (a) => {
    let s = null, c = null;
    a.file instanceof FileList && (s = a.file[0] ?? null, delete a.file);
    const l = {
      id: e.id,
      ...a
    };
    if (c = await t(fa(l)), s !== null && e.id !== void 0) {
      const u = {
        id: e.id,
        file: s
      };
      c = await t(da(u));
    }
    t(dl(c.payload));
  }, i = () => {
    t(dl(null));
  };
  return /* @__PURE__ */ y.jsxs("div", { className: "h-full", children: [
    /* @__PURE__ */ y.jsx("div", { className: "border-y-2 h-20 flex items-center", children: /* @__PURE__ */ y.jsxs("div", { className: "px-6 flex items-center justify-between w-full", children: [
      /* @__PURE__ */ y.jsx("span", { className: "text-ellipsis", children: e.label }),
      /* @__PURE__ */ y.jsx(Cr, { variant: "ghost", onClick: i, children: /* @__PURE__ */ y.jsx(nr, { icon: L1, className: "h-5 w-5 text-gray-500" }) })
    ] }) }),
    /* @__PURE__ */ y.jsxs("div", { className: "px-6 pb-6 h-[calc(100%-5rem)] overflow-y-auto", children: [
      /* @__PURE__ */ y.jsxs("div", { className: "my-3 bg-checkerboard flex justify-center", children: [
        e.picture && /* @__PURE__ */ y.jsx("img", { src: String(e.thumbnail), alt: String(e.alt), className: "" }),
        e.svg && /* @__PURE__ */ y.jsx("img", { src: String(e.reference), alt: String(e.alt), className: "" })
      ] }),
      /* @__PURE__ */ y.jsxs("div", { className: "my-3", children: [
        /* @__PURE__ */ y.jsxs("div", { className: "mb-2 border-b-2 flex justify-between", children: [
          /* @__PURE__ */ y.jsx("div", { className: "flex justify-start", children: "Created at" }),
          /* @__PURE__ */ y.jsx("div", { className: "flex justify-end", children: hl(e.createdAt) && yd(String(e.createdAt)) })
        ] }),
        /* @__PURE__ */ y.jsxs("div", { className: "mb-2 border-b-2 flex justify-between", children: [
          /* @__PURE__ */ y.jsx("div", { className: "flex justify-start", children: "Updated at" }),
          /* @__PURE__ */ y.jsx("div", { className: "flex justify-end", children: hl(e.updatedAt) && yd(String(e.updatedAt)) })
        ] }),
        /* @__PURE__ */ y.jsxs("div", { className: "mb-2 border-b-2 flex justify-between", children: [
          /* @__PURE__ */ y.jsx("div", { className: "flex justify-start", children: "Extension" }),
          /* @__PURE__ */ y.jsx("div", { className: "flex justify-end", children: e.extension })
        ] }),
        /* @__PURE__ */ y.jsxs("div", { className: "mb-2 border-b-2 flex justify-between", children: [
          /* @__PURE__ */ y.jsx("div", { className: "flex justify-start", children: "MimeType" }),
          /* @__PURE__ */ y.jsx("div", { className: "flex justify-end", children: e.mimeType })
        ] })
      ] }),
      /* @__PURE__ */ y.jsx("div", { className: "max-w-md mx-auto mt-10", children: /* @__PURE__ */ y.jsx(pT, { ...n, children: /* @__PURE__ */ y.jsxs("form", { onSubmit: n.handleSubmit(o), className: "space-y-6", children: [
        /* @__PURE__ */ y.jsx(
          Ji,
          {
            name: "file",
            control: n.control,
            render: ({ field: a }) => /* @__PURE__ */ y.jsxs(eo, { children: [
              /* @__PURE__ */ y.jsx(Bo, { children: "Fichier" }),
              /* @__PURE__ */ y.jsx(Wo, { children: /* @__PURE__ */ y.jsx(
                Qo,
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
        /* @__PURE__ */ y.jsx(
          Ji,
          {
            control: n.control,
            name: "label",
            render: ({ field: a }) => /* @__PURE__ */ y.jsxs(eo, { children: [
              /* @__PURE__ */ y.jsx(Bo, { children: "Libellé" }),
              /* @__PURE__ */ y.jsx(Wo, { children: /* @__PURE__ */ y.jsx(
                Qo,
                {
                  ...a
                }
              ) }),
              /* @__PURE__ */ y.jsx(ya, { className: "text-red-600" })
            ] })
          }
        ),
        /* @__PURE__ */ y.jsx(
          Ji,
          {
            control: n.control,
            name: "alt",
            render: ({ field: a }) => /* @__PURE__ */ y.jsxs(eo, { children: [
              /* @__PURE__ */ y.jsx(Bo, { children: "Balise alt" }),
              /* @__PURE__ */ y.jsx(Wo, { children: /* @__PURE__ */ y.jsx(
                Qo,
                {
                  ...a
                }
              ) }),
              /* @__PURE__ */ y.jsx(ya, { className: "text-red-600" })
            ] })
          }
        ),
        /* @__PURE__ */ y.jsx(
          Ji,
          {
            control: n.control,
            name: "description",
            render: ({ field: a }) => /* @__PURE__ */ y.jsxs(eo, { children: [
              /* @__PURE__ */ y.jsx(Bo, { children: "Description" }),
              /* @__PURE__ */ y.jsx(Wo, { children: /* @__PURE__ */ y.jsx(
                by,
                {
                  ...a
                }
              ) }),
              /* @__PURE__ */ y.jsx(ya, { className: "text-red-600" })
            ] })
          }
        ),
        /* @__PURE__ */ y.jsx(eo, { children: /* @__PURE__ */ y.jsx(Cr, { type: "submit", className: "w-full", children: "Valider" }) })
      ] }) }) })
    ] })
  ] });
}
const xy = x.forwardRef(({ ...e }, t) => /* @__PURE__ */ y.jsx("nav", { ref: t, "aria-label": "breadcrumb", ...e }));
xy.displayName = "Breadcrumb";
const wy = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  "ol",
  {
    ref: n,
    className: Ie(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-slate-500 sm:gap-2.5 dark:text-slate-400",
      e
    ),
    ...t
  }
));
wy.displayName = "BreadcrumbList";
const Ho = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  "li",
  {
    ref: n,
    className: Ie("inline-flex items-center gap-1.5", e),
    ...t
  }
));
Ho.displayName = "BreadcrumbItem";
const zl = x.forwardRef(({ asChild: e, className: t, ...n }, r) => {
  const o = e ? Rn : "a";
  return /* @__PURE__ */ y.jsx(
    o,
    {
      ref: r,
      className: Ie("transition-colors hover:text-slate-950 dark:hover:text-slate-50", t),
      ...n
    }
  );
});
zl.displayName = "BreadcrumbLink";
const _y = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  "span",
  {
    ref: n,
    role: "link",
    "aria-disabled": "true",
    "aria-current": "page",
    className: Ie("font-normal text-slate-950 dark:text-slate-50", e),
    ...t
  }
));
_y.displayName = "BreadcrumbPage";
const va = ({
  children: e,
  className: t,
  ...n
}) => /* @__PURE__ */ y.jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: Ie("[&>svg]:size-3.5", t),
    ...n,
    children: e ?? /* @__PURE__ */ y.jsx(Tm, {})
  }
);
va.displayName = "BreadcrumbSeparator";
const Ey = ({
  className: e,
  ...t
}) => /* @__PURE__ */ y.jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: Ie("flex h-9 w-9 items-center justify-center", e),
    ...t,
    children: [
      /* @__PURE__ */ y.jsx(PE, { className: "h-4 w-4" }),
      /* @__PURE__ */ y.jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
Ey.displayName = "BreadcrumbElipssis";
function ke(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function(o) {
    if (e == null || e(o), n === !1 || !o.defaultPrevented)
      return t == null ? void 0 : t(o);
  };
}
function yT(e, t) {
  const n = x.createContext(t);
  function r(i) {
    const { children: a, ...s } = i, c = x.useMemo(() => s, Object.values(s));
    return /* @__PURE__ */ y.jsx(n.Provider, { value: c, children: a });
  }
  function o(i) {
    const a = x.useContext(n);
    if (a) return a;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return r.displayName = e + "Provider", [r, o];
}
function $r(e, t = []) {
  let n = [];
  function r(i, a) {
    const s = x.createContext(a), c = n.length;
    n = [...n, a];
    function l(d) {
      const { scope: p, children: h, ...m } = d, g = (p == null ? void 0 : p[e][c]) || s, b = x.useMemo(() => m, Object.values(m));
      return /* @__PURE__ */ y.jsx(g.Provider, { value: b, children: h });
    }
    function u(d, p) {
      const h = (p == null ? void 0 : p[e][c]) || s, m = x.useContext(h);
      if (m) return m;
      if (a !== void 0) return a;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return l.displayName = i + "Provider", [l, u];
  }
  const o = () => {
    const i = n.map((a) => x.createContext(a));
    return function(s) {
      const c = (s == null ? void 0 : s[e]) || i;
      return x.useMemo(
        () => ({ [`__scope${e}`]: { ...s, [e]: c } }),
        [s, c]
      );
    };
  };
  return o.scopeName = e, [r, vT(o, ...t)];
}
function vT(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({
      useScope: o(),
      scopeName: o.scopeName
    }));
    return function(i) {
      const a = r.reduce((s, { useScope: c, scopeName: l }) => {
        const d = c(i)[`__scope${l}`];
        return { ...s, ...d };
      }, {});
      return x.useMemo(() => ({ [`__scope${t.scopeName}`]: a }), [a]);
    };
  };
  return n.scopeName = t.scopeName, n;
}
function Tt(e) {
  const t = x.useRef(e);
  return x.useEffect(() => {
    t.current = e;
  }), x.useMemo(() => (...n) => {
    var r;
    return (r = t.current) == null ? void 0 : r.call(t, ...n);
  }, []);
}
function Ts({
  prop: e,
  defaultProp: t,
  onChange: n = () => {
  }
}) {
  const [r, o] = bT({ defaultProp: t, onChange: n }), i = e !== void 0, a = i ? e : r, s = Tt(n), c = x.useCallback(
    (l) => {
      if (i) {
        const d = typeof l == "function" ? l(e) : l;
        d !== e && s(d);
      } else
        o(l);
    },
    [i, e, o, s]
  );
  return [a, c];
}
function bT({
  defaultProp: e,
  onChange: t
}) {
  const n = x.useState(e), [r] = n, o = x.useRef(r), i = Tt(t);
  return x.useEffect(() => {
    o.current !== r && (i(r), o.current = r);
  }, [r, o, i]), n;
}
function Iu(e) {
  const t = e + "CollectionProvider", [n, r] = $r(t), [o, i] = n(
    t,
    { collectionRef: { current: null }, itemMap: /* @__PURE__ */ new Map() }
  ), a = (h) => {
    const { scope: m, children: g } = h, b = $e.useRef(null), w = $e.useRef(/* @__PURE__ */ new Map()).current;
    return /* @__PURE__ */ y.jsx(o, { scope: m, itemMap: w, collectionRef: b, children: g });
  };
  a.displayName = t;
  const s = e + "CollectionSlot", c = $e.forwardRef(
    (h, m) => {
      const { scope: g, children: b } = h, w = i(s, g), _ = bt(m, w.collectionRef);
      return /* @__PURE__ */ y.jsx(Rn, { ref: _, children: b });
    }
  );
  c.displayName = s;
  const l = e + "CollectionItemSlot", u = "data-radix-collection-item", d = $e.forwardRef(
    (h, m) => {
      const { scope: g, children: b, ...w } = h, _ = $e.useRef(null), S = bt(m, _), C = i(l, g);
      return $e.useEffect(() => (C.itemMap.set(_, { ref: _, ...w }), () => void C.itemMap.delete(_))), /* @__PURE__ */ y.jsx(Rn, { [u]: "", ref: S, children: b });
    }
  );
  d.displayName = l;
  function p(h) {
    const m = i(e + "CollectionConsumer", h);
    return $e.useCallback(() => {
      const b = m.collectionRef.current;
      if (!b) return [];
      const w = Array.from(b.querySelectorAll(`[${u}]`));
      return Array.from(m.itemMap.values()).sort(
        (C, E) => w.indexOf(C.ref.current) - w.indexOf(E.ref.current)
      );
    }, [m.collectionRef, m.itemMap]);
  }
  return [
    { Provider: a, Slot: c, ItemSlot: d },
    p,
    r
  ];
}
var xT = x.createContext(void 0);
function Sy(e) {
  const t = x.useContext(xT);
  return e || t || "ltr";
}
function wT(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Tt(e);
  x.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return t.addEventListener("keydown", r, { capture: !0 }), () => t.removeEventListener("keydown", r, { capture: !0 });
  }, [n, t]);
}
var _T = "DismissableLayer", $l = "dismissableLayer.update", ET = "dismissableLayer.pointerDownOutside", ST = "dismissableLayer.focusOutside", Ep, Cy = x.createContext({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Rs = x.forwardRef(
  (e, t) => {
    const {
      disableOutsidePointerEvents: n = !1,
      onEscapeKeyDown: r,
      onPointerDownOutside: o,
      onFocusOutside: i,
      onInteractOutside: a,
      onDismiss: s,
      ...c
    } = e, l = x.useContext(Cy), [u, d] = x.useState(null), p = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document), [, h] = x.useState({}), m = bt(t, (P) => d(P)), g = Array.from(l.layers), [b] = [...l.layersWithOutsidePointerEventsDisabled].slice(-1), w = g.indexOf(b), _ = u ? g.indexOf(u) : -1, S = l.layersWithOutsidePointerEventsDisabled.size > 0, C = _ >= w, E = AT((P) => {
      const B = P.target, ce = [...l.branches].some((pe) => pe.contains(B));
      !C || ce || (o == null || o(P), a == null || a(P), P.defaultPrevented || s == null || s());
    }, p), N = TT((P) => {
      const B = P.target;
      [...l.branches].some((pe) => pe.contains(B)) || (i == null || i(P), a == null || a(P), P.defaultPrevented || s == null || s());
    }, p);
    return wT((P) => {
      _ === l.layers.size - 1 && (r == null || r(P), !P.defaultPrevented && s && (P.preventDefault(), s()));
    }, p), x.useEffect(() => {
      if (u)
        return n && (l.layersWithOutsidePointerEventsDisabled.size === 0 && (Ep = p.body.style.pointerEvents, p.body.style.pointerEvents = "none"), l.layersWithOutsidePointerEventsDisabled.add(u)), l.layers.add(u), Sp(), () => {
          n && l.layersWithOutsidePointerEventsDisabled.size === 1 && (p.body.style.pointerEvents = Ep);
        };
    }, [u, p, n, l]), x.useEffect(() => () => {
      u && (l.layers.delete(u), l.layersWithOutsidePointerEventsDisabled.delete(u), Sp());
    }, [u, l]), x.useEffect(() => {
      const P = () => h({});
      return document.addEventListener($l, P), () => document.removeEventListener($l, P);
    }, []), /* @__PURE__ */ y.jsx(
      nt.div,
      {
        ...c,
        ref: m,
        style: {
          pointerEvents: S ? C ? "auto" : "none" : void 0,
          ...e.style
        },
        onFocusCapture: ke(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: ke(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: ke(
          e.onPointerDownCapture,
          E.onPointerDownCapture
        )
      }
    );
  }
);
Rs.displayName = _T;
var CT = "DismissableLayerBranch", Ay = x.forwardRef((e, t) => {
  const n = x.useContext(Cy), r = x.useRef(null), o = bt(t, r);
  return x.useEffect(() => {
    const i = r.current;
    if (i)
      return n.branches.add(i), () => {
        n.branches.delete(i);
      };
  }, [n.branches]), /* @__PURE__ */ y.jsx(nt.div, { ...e, ref: o });
});
Ay.displayName = CT;
function AT(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Tt(e), r = x.useRef(!1), o = x.useRef(() => {
  });
  return x.useEffect(() => {
    const i = (s) => {
      if (s.target && !r.current) {
        let c = function() {
          Ty(
            ET,
            n,
            l,
            { discrete: !0 }
          );
        };
        const l = { originalEvent: s };
        s.pointerType === "touch" ? (t.removeEventListener("click", o.current), o.current = c, t.addEventListener("click", o.current, { once: !0 })) : c();
      } else
        t.removeEventListener("click", o.current);
      r.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", i), t.removeEventListener("click", o.current);
    };
  }, [t, n]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => r.current = !0
  };
}
function TT(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = Tt(e), r = x.useRef(!1);
  return x.useEffect(() => {
    const o = (i) => {
      i.target && !r.current && Ty(ST, n, { originalEvent: i }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
  }, [t, n]), {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  };
}
function Sp() {
  const e = new CustomEvent($l);
  document.dispatchEvent(e);
}
function Ty(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target, i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? pu(o, i) : o.dispatchEvent(i);
}
var RT = Rs, OT = Ay, zc = 0;
function Ry() {
  x.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", e[0] ?? Cp()), document.body.insertAdjacentElement("beforeend", e[1] ?? Cp()), zc++, () => {
      zc === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), zc--;
    };
  }, []);
}
function Cp() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var $c = "focusScope.autoFocusOnMount", Vc = "focusScope.autoFocusOnUnmount", Ap = { bubbles: !1, cancelable: !0 }, kT = "FocusScope", Du = x.forwardRef((e, t) => {
  const {
    loop: n = !1,
    trapped: r = !1,
    onMountAutoFocus: o,
    onUnmountAutoFocus: i,
    ...a
  } = e, [s, c] = x.useState(null), l = Tt(o), u = Tt(i), d = x.useRef(null), p = bt(t, (g) => c(g)), h = x.useRef({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  x.useEffect(() => {
    if (r) {
      let g = function(S) {
        if (h.paused || !s) return;
        const C = S.target;
        s.contains(C) ? d.current = C : qn(d.current, { select: !0 });
      }, b = function(S) {
        if (h.paused || !s) return;
        const C = S.relatedTarget;
        C !== null && (s.contains(C) || qn(d.current, { select: !0 }));
      }, w = function(S) {
        if (document.activeElement === document.body)
          for (const E of S)
            E.removedNodes.length > 0 && qn(s);
      };
      document.addEventListener("focusin", g), document.addEventListener("focusout", b);
      const _ = new MutationObserver(w);
      return s && _.observe(s, { childList: !0, subtree: !0 }), () => {
        document.removeEventListener("focusin", g), document.removeEventListener("focusout", b), _.disconnect();
      };
    }
  }, [r, s, h.paused]), x.useEffect(() => {
    if (s) {
      Rp.add(h);
      const g = document.activeElement;
      if (!s.contains(g)) {
        const w = new CustomEvent($c, Ap);
        s.addEventListener($c, l), s.dispatchEvent(w), w.defaultPrevented || (PT(jT(Oy(s)), { select: !0 }), document.activeElement === g && qn(s));
      }
      return () => {
        s.removeEventListener($c, l), setTimeout(() => {
          const w = new CustomEvent(Vc, Ap);
          s.addEventListener(Vc, u), s.dispatchEvent(w), w.defaultPrevented || qn(g ?? document.body, { select: !0 }), s.removeEventListener(Vc, u), Rp.remove(h);
        }, 0);
      };
    }
  }, [s, l, u, h]);
  const m = x.useCallback(
    (g) => {
      if (!n && !r || h.paused) return;
      const b = g.key === "Tab" && !g.altKey && !g.ctrlKey && !g.metaKey, w = document.activeElement;
      if (b && w) {
        const _ = g.currentTarget, [S, C] = NT(_);
        S && C ? !g.shiftKey && w === C ? (g.preventDefault(), n && qn(S, { select: !0 })) : g.shiftKey && w === S && (g.preventDefault(), n && qn(C, { select: !0 })) : w === _ && g.preventDefault();
      }
    },
    [n, r, h.paused]
  );
  return /* @__PURE__ */ y.jsx(nt.div, { tabIndex: -1, ...a, ref: p, onKeyDown: m });
});
Du.displayName = kT;
function PT(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if (qn(r, { select: t }), document.activeElement !== n) return;
}
function NT(e) {
  const t = Oy(e), n = Tp(t, e), r = Tp(t.reverse(), e);
  return [n, r];
}
function Oy(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Tp(e, t) {
  for (const n of e)
    if (!MT(n, { upTo: t })) return n;
}
function MT(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function IT(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function qn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && IT(e) && t && e.select();
  }
}
var Rp = DT();
function DT() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), e = Op(e, t), e.unshift(t);
    },
    remove(t) {
      var n;
      e = Op(e, t), (n = e[0]) == null || n.resume();
    }
  };
}
function Op(e, t) {
  const n = [...e], r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function jT(e) {
  return e.filter((t) => t.tagName !== "A");
}
var sr = globalThis != null && globalThis.document ? x.useLayoutEffect : () => {
}, FT = x.useId || (() => {
}), LT = 0;
function lo(e) {
  const [t, n] = x.useState(FT());
  return sr(() => {
    n((r) => r ?? String(LT++));
  }, [e]), t ? `radix-${t}` : "";
}
const zT = ["top", "right", "bottom", "left"], mn = Math.min, zt = Math.max, Ya = Math.round, Qi = Math.floor, cr = (e) => ({
  x: e,
  y: e
}), $T = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
}, VT = {
  start: "end",
  end: "start"
};
function Vl(e, t, n) {
  return zt(e, mn(t, n));
}
function Nn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Mn(e) {
  return e.split("-")[0];
}
function To(e) {
  return e.split("-")[1];
}
function ju(e) {
  return e === "x" ? "y" : "x";
}
function Fu(e) {
  return e === "y" ? "height" : "width";
}
function lr(e) {
  return ["top", "bottom"].includes(Mn(e)) ? "y" : "x";
}
function Lu(e) {
  return ju(lr(e));
}
function UT(e, t, n) {
  n === void 0 && (n = !1);
  const r = To(e), o = Lu(e), i = Fu(o);
  let a = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (a = Ga(a)), [a, Ga(a)];
}
function BT(e) {
  const t = Ga(e);
  return [Ul(e), t, Ul(t)];
}
function Ul(e) {
  return e.replace(/start|end/g, (t) => VT[t]);
}
function WT(e, t, n) {
  const r = ["left", "right"], o = ["right", "left"], i = ["top", "bottom"], a = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
      return t ? i : a;
    default:
      return [];
  }
}
function HT(e, t, n, r) {
  const o = To(e);
  let i = WT(Mn(e), n === "start", r);
  return o && (i = i.map((a) => a + "-" + o), t && (i = i.concat(i.map(Ul)))), i;
}
function Ga(e) {
  return e.replace(/left|right|bottom|top/g, (t) => $T[t]);
}
function qT(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function ky(e) {
  return typeof e != "number" ? qT(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ka(e) {
  const {
    x: t,
    y: n,
    width: r,
    height: o
  } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n
  };
}
function kp(e, t, n) {
  let {
    reference: r,
    floating: o
  } = e;
  const i = lr(t), a = Lu(t), s = Fu(a), c = Mn(t), l = i === "y", u = r.x + r.width / 2 - o.width / 2, d = r.y + r.height / 2 - o.height / 2, p = r[s] / 2 - o[s] / 2;
  let h;
  switch (c) {
    case "top":
      h = {
        x: u,
        y: r.y - o.height
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
        x: r.x - o.width,
        y: d
      };
      break;
    default:
      h = {
        x: r.x,
        y: r.y
      };
  }
  switch (To(t)) {
    case "start":
      h[a] -= p * (n && l ? -1 : 1);
      break;
    case "end":
      h[a] += p * (n && l ? -1 : 1);
      break;
  }
  return h;
}
const YT = async (e, t, n) => {
  const {
    placement: r = "bottom",
    strategy: o = "absolute",
    middleware: i = [],
    platform: a
  } = n, s = i.filter(Boolean), c = await (a.isRTL == null ? void 0 : a.isRTL(t));
  let l = await a.getElementRects({
    reference: e,
    floating: t,
    strategy: o
  }), {
    x: u,
    y: d
  } = kp(l, r, c), p = r, h = {}, m = 0;
  for (let g = 0; g < s.length; g++) {
    const {
      name: b,
      fn: w
    } = s[g], {
      x: _,
      y: S,
      data: C,
      reset: E
    } = await w({
      x: u,
      y: d,
      initialPlacement: r,
      placement: p,
      strategy: o,
      middlewareData: h,
      rects: l,
      platform: a,
      elements: {
        reference: e,
        floating: t
      }
    });
    u = _ ?? u, d = S ?? d, h = {
      ...h,
      [b]: {
        ...h[b],
        ...C
      }
    }, E && m <= 50 && (m++, typeof E == "object" && (E.placement && (p = E.placement), E.rects && (l = E.rects === !0 ? await a.getElementRects({
      reference: e,
      floating: t,
      strategy: o
    }) : E.rects), {
      x: u,
      y: d
    } = kp(l, p, c)), g = -1);
  }
  return {
    x: u,
    y: d,
    placement: p,
    strategy: o,
    middlewareData: h
  };
};
async function Ei(e, t) {
  var n;
  t === void 0 && (t = {});
  const {
    x: r,
    y: o,
    platform: i,
    rects: a,
    elements: s,
    strategy: c
  } = e, {
    boundary: l = "clippingAncestors",
    rootBoundary: u = "viewport",
    elementContext: d = "floating",
    altBoundary: p = !1,
    padding: h = 0
  } = Nn(t, e), m = ky(h), b = s[p ? d === "floating" ? "reference" : "floating" : d], w = Ka(await i.getClippingRect({
    element: (n = await (i.isElement == null ? void 0 : i.isElement(b))) == null || n ? b : b.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
    boundary: l,
    rootBoundary: u,
    strategy: c
  })), _ = d === "floating" ? {
    x: r,
    y: o,
    width: a.floating.width,
    height: a.floating.height
  } : a.reference, S = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating)), C = await (i.isElement == null ? void 0 : i.isElement(S)) ? await (i.getScale == null ? void 0 : i.getScale(S)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, E = Ka(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: s,
    rect: _,
    offsetParent: S,
    strategy: c
  }) : _);
  return {
    top: (w.top - E.top + m.top) / C.y,
    bottom: (E.bottom - w.bottom + m.bottom) / C.y,
    left: (w.left - E.left + m.left) / C.x,
    right: (E.right - w.right + m.right) / C.x
  };
}
const GT = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: n,
      y: r,
      placement: o,
      rects: i,
      platform: a,
      elements: s,
      middlewareData: c
    } = t, {
      element: l,
      padding: u = 0
    } = Nn(e, t) || {};
    if (l == null)
      return {};
    const d = ky(u), p = {
      x: n,
      y: r
    }, h = Lu(o), m = Fu(h), g = await a.getDimensions(l), b = h === "y", w = b ? "top" : "left", _ = b ? "bottom" : "right", S = b ? "clientHeight" : "clientWidth", C = i.reference[m] + i.reference[h] - p[h] - i.floating[m], E = p[h] - i.reference[h], N = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(l));
    let P = N ? N[S] : 0;
    (!P || !await (a.isElement == null ? void 0 : a.isElement(N))) && (P = s.floating[S] || i.floating[m]);
    const B = C / 2 - E / 2, ce = P / 2 - g[m] / 2 - 1, pe = mn(d[w], ce), fe = mn(d[_], ce), $ = pe, Q = P - g[m] - fe, D = P / 2 - g[m] / 2 + B, re = Vl($, D, Q), M = !c.arrow && To(o) != null && D !== re && i.reference[m] / 2 - (D < $ ? pe : fe) - g[m] / 2 < 0, le = M ? D < $ ? D - $ : D - Q : 0;
    return {
      [h]: p[h] + le,
      data: {
        [h]: re,
        centerOffset: D - re - le,
        ...M && {
          alignmentOffset: le
        }
      },
      reset: M
    };
  }
}), KT = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var n, r;
      const {
        placement: o,
        middlewareData: i,
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
        flipAlignment: g = !0,
        ...b
      } = Nn(e, t);
      if ((n = i.arrow) != null && n.alignmentOffset)
        return {};
      const w = Mn(o), _ = lr(s), S = Mn(s) === s, C = await (c.isRTL == null ? void 0 : c.isRTL(l.floating)), E = p || (S || !g ? [Ga(s)] : BT(s)), N = m !== "none";
      !p && N && E.push(...HT(s, g, m, C));
      const P = [s, ...E], B = await Ei(t, b), ce = [];
      let pe = ((r = i.flip) == null ? void 0 : r.overflows) || [];
      if (u && ce.push(B[w]), d) {
        const D = UT(o, a, C);
        ce.push(B[D[0]], B[D[1]]);
      }
      if (pe = [...pe, {
        placement: o,
        overflows: ce
      }], !ce.every((D) => D <= 0)) {
        var fe, $;
        const D = (((fe = i.flip) == null ? void 0 : fe.index) || 0) + 1, re = P[D];
        if (re)
          return {
            data: {
              index: D,
              overflows: pe
            },
            reset: {
              placement: re
            }
          };
        let M = ($ = pe.filter((le) => le.overflows[0] <= 0).sort((le, we) => le.overflows[1] - we.overflows[1])[0]) == null ? void 0 : $.placement;
        if (!M)
          switch (h) {
            case "bestFit": {
              var Q;
              const le = (Q = pe.filter((we) => {
                if (N) {
                  const X = lr(we.placement);
                  return X === _ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  X === "y";
                }
                return !0;
              }).map((we) => [we.placement, we.overflows.filter((X) => X > 0).reduce((X, L) => X + L, 0)]).sort((we, X) => we[1] - X[1])[0]) == null ? void 0 : Q[0];
              le && (M = le);
              break;
            }
            case "initialPlacement":
              M = s;
              break;
          }
        if (o !== M)
          return {
            reset: {
              placement: M
            }
          };
      }
      return {};
    }
  };
};
function Pp(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Np(e) {
  return zT.some((t) => e[t] >= 0);
}
const ZT = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: n
      } = t, {
        strategy: r = "referenceHidden",
        ...o
      } = Nn(e, t);
      switch (r) {
        case "referenceHidden": {
          const i = await Ei(t, {
            ...o,
            elementContext: "reference"
          }), a = Pp(i, n.reference);
          return {
            data: {
              referenceHiddenOffsets: a,
              referenceHidden: Np(a)
            }
          };
        }
        case "escaped": {
          const i = await Ei(t, {
            ...o,
            altBoundary: !0
          }), a = Pp(i, n.floating);
          return {
            data: {
              escapedOffsets: a,
              escaped: Np(a)
            }
          };
        }
        default:
          return {};
      }
    }
  };
};
async function XT(e, t) {
  const {
    placement: n,
    platform: r,
    elements: o
  } = e, i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)), a = Mn(n), s = To(n), c = lr(n) === "y", l = ["left", "top"].includes(a) ? -1 : 1, u = i && c ? -1 : 1, d = Nn(t, e);
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
const JT = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var n, r;
      const {
        x: o,
        y: i,
        placement: a,
        middlewareData: s
      } = t, c = await XT(t, e);
      return a === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
        x: o + c.x,
        y: i + c.y,
        data: {
          ...c,
          placement: a
        }
      };
    }
  };
}, QT = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: n,
        y: r,
        placement: o
      } = t, {
        mainAxis: i = !0,
        crossAxis: a = !1,
        limiter: s = {
          fn: (b) => {
            let {
              x: w,
              y: _
            } = b;
            return {
              x: w,
              y: _
            };
          }
        },
        ...c
      } = Nn(e, t), l = {
        x: n,
        y: r
      }, u = await Ei(t, c), d = lr(Mn(o)), p = ju(d);
      let h = l[p], m = l[d];
      if (i) {
        const b = p === "y" ? "top" : "left", w = p === "y" ? "bottom" : "right", _ = h + u[b], S = h - u[w];
        h = Vl(_, h, S);
      }
      if (a) {
        const b = d === "y" ? "top" : "left", w = d === "y" ? "bottom" : "right", _ = m + u[b], S = m - u[w];
        m = Vl(_, m, S);
      }
      const g = s.fn({
        ...t,
        [p]: h,
        [d]: m
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
}, eR = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: n,
        y: r,
        placement: o,
        rects: i,
        middlewareData: a
      } = t, {
        offset: s = 0,
        mainAxis: c = !0,
        crossAxis: l = !0
      } = Nn(e, t), u = {
        x: n,
        y: r
      }, d = lr(o), p = ju(d);
      let h = u[p], m = u[d];
      const g = Nn(s, t), b = typeof g == "number" ? {
        mainAxis: g,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...g
      };
      if (c) {
        const S = p === "y" ? "height" : "width", C = i.reference[p] - i.floating[S] + b.mainAxis, E = i.reference[p] + i.reference[S] - b.mainAxis;
        h < C ? h = C : h > E && (h = E);
      }
      if (l) {
        var w, _;
        const S = p === "y" ? "width" : "height", C = ["top", "left"].includes(Mn(o)), E = i.reference[d] - i.floating[S] + (C && ((w = a.offset) == null ? void 0 : w[d]) || 0) + (C ? 0 : b.crossAxis), N = i.reference[d] + i.reference[S] + (C ? 0 : ((_ = a.offset) == null ? void 0 : _[d]) || 0) - (C ? b.crossAxis : 0);
        m < E ? m = E : m > N && (m = N);
      }
      return {
        [p]: h,
        [d]: m
      };
    }
  };
}, tR = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      const {
        placement: n,
        rects: r,
        platform: o,
        elements: i
      } = t, {
        apply: a = () => {
        },
        ...s
      } = Nn(e, t), c = await Ei(t, s), l = Mn(n), u = To(n), d = lr(n) === "y", {
        width: p,
        height: h
      } = r.floating;
      let m, g;
      l === "top" || l === "bottom" ? (m = l, g = u === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (g = l, m = u === "end" ? "top" : "bottom");
      const b = h - c.top - c.bottom, w = p - c.left - c.right, _ = mn(h - c[m], b), S = mn(p - c[g], w), C = !t.middlewareData.shift;
      let E = _, N = S;
      if (d ? N = u || C ? mn(S, w) : w : E = u || C ? mn(_, b) : b, C && !u) {
        const B = zt(c.left, 0), ce = zt(c.right, 0), pe = zt(c.top, 0), fe = zt(c.bottom, 0);
        d ? N = p - 2 * (B !== 0 || ce !== 0 ? B + ce : zt(c.left, c.right)) : E = h - 2 * (pe !== 0 || fe !== 0 ? pe + fe : zt(c.top, c.bottom));
      }
      await a({
        ...t,
        availableWidth: N,
        availableHeight: E
      });
      const P = await o.getDimensions(i.floating);
      return p !== P.width || h !== P.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function Ro(e) {
  return Py(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Wt(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Dn(e) {
  var t;
  return (t = (Py(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Py(e) {
  return e instanceof Node || e instanceof Wt(e).Node;
}
function on(e) {
  return e instanceof Element || e instanceof Wt(e).Element;
}
function xn(e) {
  return e instanceof HTMLElement || e instanceof Wt(e).HTMLElement;
}
function Mp(e) {
  return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Wt(e).ShadowRoot;
}
function Fi(e) {
  const {
    overflow: t,
    overflowX: n,
    overflowY: r,
    display: o
  } = an(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o);
}
function nR(e) {
  return ["table", "td", "th"].includes(Ro(e));
}
function Os(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function zu(e) {
  const t = $u(), n = on(e) ? an(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some((r) => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some((r) => (n.contain || "").includes(r));
}
function rR(e) {
  let t = ur(e);
  for (; xn(t) && !xo(t); ) {
    if (zu(t))
      return t;
    if (Os(t))
      return null;
    t = ur(t);
  }
  return null;
}
function $u() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
function xo(e) {
  return ["html", "body", "#document"].includes(Ro(e));
}
function an(e) {
  return Wt(e).getComputedStyle(e);
}
function ks(e) {
  return on(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function ur(e) {
  if (Ro(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Mp(e) && e.host || // Fallback.
    Dn(e)
  );
  return Mp(t) ? t.host : t;
}
function Ny(e) {
  const t = ur(e);
  return xo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : xn(t) && Fi(t) ? t : Ny(t);
}
function Si(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Ny(e), i = o === ((r = e.ownerDocument) == null ? void 0 : r.body), a = Wt(o);
  return i ? t.concat(a, a.visualViewport || [], Fi(o) ? o : [], a.frameElement && n ? Si(a.frameElement) : []) : t.concat(o, Si(o, [], n));
}
function My(e) {
  const t = an(e);
  let n = parseFloat(t.width) || 0, r = parseFloat(t.height) || 0;
  const o = xn(e), i = o ? e.offsetWidth : n, a = o ? e.offsetHeight : r, s = Ya(n) !== i || Ya(r) !== a;
  return s && (n = i, r = a), {
    width: n,
    height: r,
    $: s
  };
}
function Vu(e) {
  return on(e) ? e : e.contextElement;
}
function uo(e) {
  const t = Vu(e);
  if (!xn(t))
    return cr(1);
  const n = t.getBoundingClientRect(), {
    width: r,
    height: o,
    $: i
  } = My(t);
  let a = (i ? Ya(n.width) : n.width) / r, s = (i ? Ya(n.height) : n.height) / o;
  return (!a || !Number.isFinite(a)) && (a = 1), (!s || !Number.isFinite(s)) && (s = 1), {
    x: a,
    y: s
  };
}
const oR = /* @__PURE__ */ cr(0);
function Iy(e) {
  const t = Wt(e);
  return !$u() || !t.visualViewport ? oR : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function iR(e, t, n) {
  return t === void 0 && (t = !1), !n || t && n !== Wt(e) ? !1 : t;
}
function Fr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(), i = Vu(e);
  let a = cr(1);
  t && (r ? on(r) && (a = uo(r)) : a = uo(e));
  const s = iR(i, n, r) ? Iy(i) : cr(0);
  let c = (o.left + s.x) / a.x, l = (o.top + s.y) / a.y, u = o.width / a.x, d = o.height / a.y;
  if (i) {
    const p = Wt(i), h = r && on(r) ? Wt(r) : r;
    let m = p, g = m.frameElement;
    for (; g && r && h !== m; ) {
      const b = uo(g), w = g.getBoundingClientRect(), _ = an(g), S = w.left + (g.clientLeft + parseFloat(_.paddingLeft)) * b.x, C = w.top + (g.clientTop + parseFloat(_.paddingTop)) * b.y;
      c *= b.x, l *= b.y, u *= b.x, d *= b.y, c += S, l += C, m = Wt(g), g = m.frameElement;
    }
  }
  return Ka({
    width: u,
    height: d,
    x: c,
    y: l
  });
}
function aR(e) {
  let {
    elements: t,
    rect: n,
    offsetParent: r,
    strategy: o
  } = e;
  const i = o === "fixed", a = Dn(r), s = t ? Os(t.floating) : !1;
  if (r === a || s && i)
    return n;
  let c = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = cr(1);
  const u = cr(0), d = xn(r);
  if ((d || !d && !i) && ((Ro(r) !== "body" || Fi(a)) && (c = ks(r)), xn(r))) {
    const p = Fr(r);
    l = uo(r), u.x = p.x + r.clientLeft, u.y = p.y + r.clientTop;
  }
  return {
    width: n.width * l.x,
    height: n.height * l.y,
    x: n.x * l.x - c.scrollLeft * l.x + u.x,
    y: n.y * l.y - c.scrollTop * l.y + u.y
  };
}
function sR(e) {
  return Array.from(e.getClientRects());
}
function Dy(e) {
  return Fr(Dn(e)).left + ks(e).scrollLeft;
}
function cR(e) {
  const t = Dn(e), n = ks(e), r = e.ownerDocument.body, o = zt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth), i = zt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let a = -n.scrollLeft + Dy(e);
  const s = -n.scrollTop;
  return an(r).direction === "rtl" && (a += zt(t.clientWidth, r.clientWidth) - o), {
    width: o,
    height: i,
    x: a,
    y: s
  };
}
function lR(e, t) {
  const n = Wt(e), r = Dn(e), o = n.visualViewport;
  let i = r.clientWidth, a = r.clientHeight, s = 0, c = 0;
  if (o) {
    i = o.width, a = o.height;
    const l = $u();
    (!l || l && t === "fixed") && (s = o.offsetLeft, c = o.offsetTop);
  }
  return {
    width: i,
    height: a,
    x: s,
    y: c
  };
}
function uR(e, t) {
  const n = Fr(e, !0, t === "fixed"), r = n.top + e.clientTop, o = n.left + e.clientLeft, i = xn(e) ? uo(e) : cr(1), a = e.clientWidth * i.x, s = e.clientHeight * i.y, c = o * i.x, l = r * i.y;
  return {
    width: a,
    height: s,
    x: c,
    y: l
  };
}
function Ip(e, t, n) {
  let r;
  if (t === "viewport")
    r = lR(e, n);
  else if (t === "document")
    r = cR(Dn(e));
  else if (on(t))
    r = uR(t, n);
  else {
    const o = Iy(e);
    r = {
      ...t,
      x: t.x - o.x,
      y: t.y - o.y
    };
  }
  return Ka(r);
}
function jy(e, t) {
  const n = ur(e);
  return n === t || !on(n) || xo(n) ? !1 : an(n).position === "fixed" || jy(n, t);
}
function fR(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let r = Si(e, [], !1).filter((s) => on(s) && Ro(s) !== "body"), o = null;
  const i = an(e).position === "fixed";
  let a = i ? ur(e) : e;
  for (; on(a) && !xo(a); ) {
    const s = an(a), c = zu(a);
    !c && s.position === "fixed" && (o = null), (i ? !c && !o : !c && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Fi(a) && !c && jy(e, a)) ? r = r.filter((u) => u !== a) : o = s, a = ur(a);
  }
  return t.set(e, r), r;
}
function dR(e) {
  let {
    element: t,
    boundary: n,
    rootBoundary: r,
    strategy: o
  } = e;
  const a = [...n === "clippingAncestors" ? Os(t) ? [] : fR(t, this._c) : [].concat(n), r], s = a[0], c = a.reduce((l, u) => {
    const d = Ip(t, u, o);
    return l.top = zt(d.top, l.top), l.right = mn(d.right, l.right), l.bottom = mn(d.bottom, l.bottom), l.left = zt(d.left, l.left), l;
  }, Ip(t, s, o));
  return {
    width: c.right - c.left,
    height: c.bottom - c.top,
    x: c.left,
    y: c.top
  };
}
function pR(e) {
  const {
    width: t,
    height: n
  } = My(e);
  return {
    width: t,
    height: n
  };
}
function hR(e, t, n) {
  const r = xn(t), o = Dn(t), i = n === "fixed", a = Fr(e, !0, i, t);
  let s = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const c = cr(0);
  if (r || !r && !i)
    if ((Ro(t) !== "body" || Fi(o)) && (s = ks(t)), r) {
      const d = Fr(t, !0, i, t);
      c.x = d.x + t.clientLeft, c.y = d.y + t.clientTop;
    } else o && (c.x = Dy(o));
  const l = a.left + s.scrollLeft - c.x, u = a.top + s.scrollTop - c.y;
  return {
    x: l,
    y: u,
    width: a.width,
    height: a.height
  };
}
function Uc(e) {
  return an(e).position === "static";
}
function Dp(e, t) {
  return !xn(e) || an(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Fy(e, t) {
  const n = Wt(e);
  if (Os(e))
    return n;
  if (!xn(e)) {
    let o = ur(e);
    for (; o && !xo(o); ) {
      if (on(o) && !Uc(o))
        return o;
      o = ur(o);
    }
    return n;
  }
  let r = Dp(e, t);
  for (; r && nR(r) && Uc(r); )
    r = Dp(r, t);
  return r && xo(r) && Uc(r) && !zu(r) ? n : r || rR(e) || n;
}
const mR = async function(e) {
  const t = this.getOffsetParent || Fy, n = this.getDimensions, r = await n(e.floating);
  return {
    reference: hR(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  };
};
function gR(e) {
  return an(e).direction === "rtl";
}
const yR = {
  convertOffsetParentRelativeRectToViewportRelativeRect: aR,
  getDocumentElement: Dn,
  getClippingRect: dR,
  getOffsetParent: Fy,
  getElementRects: mR,
  getClientRects: sR,
  getDimensions: pR,
  getScale: uo,
  isElement: on,
  isRTL: gR
};
function vR(e, t) {
  let n = null, r;
  const o = Dn(e);
  function i() {
    var s;
    clearTimeout(r), (s = n) == null || s.disconnect(), n = null;
  }
  function a(s, c) {
    s === void 0 && (s = !1), c === void 0 && (c = 1), i();
    const {
      left: l,
      top: u,
      width: d,
      height: p
    } = e.getBoundingClientRect();
    if (s || t(), !d || !p)
      return;
    const h = Qi(u), m = Qi(o.clientWidth - (l + d)), g = Qi(o.clientHeight - (u + p)), b = Qi(l), _ = {
      rootMargin: -h + "px " + -m + "px " + -g + "px " + -b + "px",
      threshold: zt(0, mn(1, c)) || 1
    };
    let S = !0;
    function C(E) {
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
      n = new IntersectionObserver(C, {
        ..._,
        // Handle <iframe>s
        root: o.ownerDocument
      });
    } catch {
      n = new IntersectionObserver(C, _);
    }
    n.observe(e);
  }
  return a(!0), i;
}
function bR(e, t, n, r) {
  r === void 0 && (r = {});
  const {
    ancestorScroll: o = !0,
    ancestorResize: i = !0,
    elementResize: a = typeof ResizeObserver == "function",
    layoutShift: s = typeof IntersectionObserver == "function",
    animationFrame: c = !1
  } = r, l = Vu(e), u = o || i ? [...l ? Si(l) : [], ...Si(t)] : [];
  u.forEach((w) => {
    o && w.addEventListener("scroll", n, {
      passive: !0
    }), i && w.addEventListener("resize", n);
  });
  const d = l && s ? vR(l, n) : null;
  let p = -1, h = null;
  a && (h = new ResizeObserver((w) => {
    let [_] = w;
    _ && _.target === l && h && (h.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
      var S;
      (S = h) == null || S.observe(t);
    })), n();
  }), l && !c && h.observe(l), h.observe(t));
  let m, g = c ? Fr(e) : null;
  c && b();
  function b() {
    const w = Fr(e);
    g && (w.x !== g.x || w.y !== g.y || w.width !== g.width || w.height !== g.height) && n(), g = w, m = requestAnimationFrame(b);
  }
  return n(), () => {
    var w;
    u.forEach((_) => {
      o && _.removeEventListener("scroll", n), i && _.removeEventListener("resize", n);
    }), d == null || d(), (w = h) == null || w.disconnect(), h = null, c && cancelAnimationFrame(m);
  };
}
const xR = JT, wR = QT, _R = KT, ER = tR, SR = ZT, jp = GT, CR = eR, AR = (e, t, n) => {
  const r = /* @__PURE__ */ new Map(), o = {
    platform: yR,
    ...n
  }, i = {
    ...o.platform,
    _c: r
  };
  return YT(e, t, {
    ...o,
    platform: i
  });
};
var ba = typeof document < "u" ? px : Xn;
function Za(e, t) {
  if (e === t)
    return !0;
  if (typeof e != typeof t)
    return !1;
  if (typeof e == "function" && e.toString() === t.toString())
    return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (n = e.length, n !== t.length) return !1;
      for (r = n; r-- !== 0; )
        if (!Za(e[r], t[r]))
          return !1;
      return !0;
    }
    if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length)
      return !1;
    for (r = n; r-- !== 0; )
      if (!{}.hasOwnProperty.call(t, o[r]))
        return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !Za(e[i], t[i]))
        return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Ly(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Fp(e, t) {
  const n = Ly(e);
  return Math.round(t * n) / n;
}
function Lp(e) {
  const t = x.useRef(e);
  return ba(() => {
    t.current = e;
  }), t;
}
function TR(e) {
  e === void 0 && (e = {});
  const {
    placement: t = "bottom",
    strategy: n = "absolute",
    middleware: r = [],
    platform: o,
    elements: {
      reference: i,
      floating: a
    } = {},
    transform: s = !0,
    whileElementsMounted: c,
    open: l
  } = e, [u, d] = x.useState({
    x: 0,
    y: 0,
    strategy: n,
    placement: t,
    middlewareData: {},
    isPositioned: !1
  }), [p, h] = x.useState(r);
  Za(p, r) || h(r);
  const [m, g] = x.useState(null), [b, w] = x.useState(null), _ = x.useCallback((le) => {
    le !== N.current && (N.current = le, g(le));
  }, []), S = x.useCallback((le) => {
    le !== P.current && (P.current = le, w(le));
  }, []), C = i || m, E = a || b, N = x.useRef(null), P = x.useRef(null), B = x.useRef(u), ce = c != null, pe = Lp(c), fe = Lp(o), $ = x.useCallback(() => {
    if (!N.current || !P.current)
      return;
    const le = {
      placement: t,
      strategy: n,
      middleware: p
    };
    fe.current && (le.platform = fe.current), AR(N.current, P.current, le).then((we) => {
      const X = {
        ...we,
        isPositioned: !0
      };
      Q.current && !Za(B.current, X) && (B.current = X, es.flushSync(() => {
        d(X);
      }));
    });
  }, [p, t, n, fe]);
  ba(() => {
    l === !1 && B.current.isPositioned && (B.current.isPositioned = !1, d((le) => ({
      ...le,
      isPositioned: !1
    })));
  }, [l]);
  const Q = x.useRef(!1);
  ba(() => (Q.current = !0, () => {
    Q.current = !1;
  }), []), ba(() => {
    if (C && (N.current = C), E && (P.current = E), C && E) {
      if (pe.current)
        return pe.current(C, E, $);
      $();
    }
  }, [C, E, $, pe, ce]);
  const D = x.useMemo(() => ({
    reference: N,
    floating: P,
    setReference: _,
    setFloating: S
  }), [_, S]), re = x.useMemo(() => ({
    reference: C,
    floating: E
  }), [C, E]), M = x.useMemo(() => {
    const le = {
      position: n,
      left: 0,
      top: 0
    };
    if (!re.floating)
      return le;
    const we = Fp(re.floating, u.x), X = Fp(re.floating, u.y);
    return s ? {
      ...le,
      transform: "translate(" + we + "px, " + X + "px)",
      ...Ly(re.floating) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: n,
      left: we,
      top: X
    };
  }, [n, s, re.floating, u.x, u.y]);
  return x.useMemo(() => ({
    ...u,
    update: $,
    refs: D,
    elements: re,
    floatingStyles: M
  }), [u, $, D, re, M]);
}
const RR = (e) => {
  function t(n) {
    return {}.hasOwnProperty.call(n, "current");
  }
  return {
    name: "arrow",
    options: e,
    fn(n) {
      const {
        element: r,
        padding: o
      } = typeof e == "function" ? e(n) : e;
      return r && t(r) ? r.current != null ? jp({
        element: r.current,
        padding: o
      }).fn(n) : {} : r ? jp({
        element: r,
        padding: o
      }).fn(n) : {};
    }
  };
}, OR = (e, t) => ({
  ...xR(e),
  options: [e, t]
}), kR = (e, t) => ({
  ...wR(e),
  options: [e, t]
}), PR = (e, t) => ({
  ...CR(e),
  options: [e, t]
}), NR = (e, t) => ({
  ..._R(e),
  options: [e, t]
}), MR = (e, t) => ({
  ...ER(e),
  options: [e, t]
}), IR = (e, t) => ({
  ...SR(e),
  options: [e, t]
}), DR = (e, t) => ({
  ...RR(e),
  options: [e, t]
});
var jR = "Arrow", zy = x.forwardRef((e, t) => {
  const { children: n, width: r = 10, height: o = 5, ...i } = e;
  return /* @__PURE__ */ y.jsx(
    nt.svg,
    {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : /* @__PURE__ */ y.jsx("polygon", { points: "0,0 30,0 15,10" })
    }
  );
});
zy.displayName = jR;
var FR = zy;
function LR(e) {
  const [t, n] = x.useState(void 0);
  return sr(() => {
    if (e) {
      n({ width: e.offsetWidth, height: e.offsetHeight });
      const r = new ResizeObserver((o) => {
        if (!Array.isArray(o) || !o.length)
          return;
        const i = o[0];
        let a, s;
        if ("borderBoxSize" in i) {
          const c = i.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
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
var Uu = "Popper", [$y, Vy] = $r(Uu), [zR, Uy] = $y(Uu), By = (e) => {
  const { __scopePopper: t, children: n } = e, [r, o] = x.useState(null);
  return /* @__PURE__ */ y.jsx(zR, { scope: t, anchor: r, onAnchorChange: o, children: n });
};
By.displayName = Uu;
var Wy = "PopperAnchor", Hy = x.forwardRef(
  (e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e, i = Uy(Wy, n), a = x.useRef(null), s = bt(t, a);
    return x.useEffect(() => {
      i.onAnchorChange((r == null ? void 0 : r.current) || a.current);
    }), r ? null : /* @__PURE__ */ y.jsx(nt.div, { ...o, ref: s });
  }
);
Hy.displayName = Wy;
var Bu = "PopperContent", [$R, VR] = $y(Bu), qy = x.forwardRef(
  (e, t) => {
    var K, ie, de, ve, Ne, ee;
    const {
      __scopePopper: n,
      side: r = "bottom",
      sideOffset: o = 0,
      align: i = "center",
      alignOffset: a = 0,
      arrowPadding: s = 0,
      avoidCollisions: c = !0,
      collisionBoundary: l = [],
      collisionPadding: u = 0,
      sticky: d = "partial",
      hideWhenDetached: p = !1,
      updatePositionStrategy: h = "optimized",
      onPlaced: m,
      ...g
    } = e, b = Uy(Bu, n), [w, _] = x.useState(null), S = bt(t, (Te) => _(Te)), [C, E] = x.useState(null), N = LR(C), P = (N == null ? void 0 : N.width) ?? 0, B = (N == null ? void 0 : N.height) ?? 0, ce = r + (i !== "center" ? "-" + i : ""), pe = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u }, fe = Array.isArray(l) ? l : [l], $ = fe.length > 0, Q = {
      padding: pe,
      boundary: fe.filter(BR),
      // with `strategy: 'fixed'`, this is the only way to get it to respect boundaries
      altBoundary: $
    }, { refs: D, floatingStyles: re, placement: M, isPositioned: le, middlewareData: we } = TR({
      // default to `fixed` strategy so users don't have to pick and we also avoid focus scroll issues
      strategy: "fixed",
      placement: ce,
      whileElementsMounted: (...Te) => bR(...Te, {
        animationFrame: h === "always"
      }),
      elements: {
        reference: b.anchor
      },
      middleware: [
        OR({ mainAxis: o + B, alignmentAxis: a }),
        c && kR({
          mainAxis: !0,
          crossAxis: !1,
          limiter: d === "partial" ? PR() : void 0,
          ...Q
        }),
        c && NR({ ...Q }),
        MR({
          ...Q,
          apply: ({ elements: Te, rects: He, availableWidth: lt, availableHeight: et }) => {
            const { width: Ue, height: A } = He.reference, k = Te.floating.style;
            k.setProperty("--radix-popper-available-width", `${lt}px`), k.setProperty("--radix-popper-available-height", `${et}px`), k.setProperty("--radix-popper-anchor-width", `${Ue}px`), k.setProperty("--radix-popper-anchor-height", `${A}px`);
          }
        }),
        C && DR({ element: C, padding: s }),
        WR({ arrowWidth: P, arrowHeight: B }),
        p && IR({ strategy: "referenceHidden", ...Q })
      ]
    }), [X, L] = Ky(M), W = Tt(m);
    sr(() => {
      le && (W == null || W());
    }, [le, W]);
    const he = (K = we.arrow) == null ? void 0 : K.x, I = (ie = we.arrow) == null ? void 0 : ie.y, G = ((de = we.arrow) == null ? void 0 : de.centerOffset) !== 0, [oe, Y] = x.useState();
    return sr(() => {
      w && Y(window.getComputedStyle(w).zIndex);
    }, [w]), /* @__PURE__ */ y.jsx(
      "div",
      {
        ref: D.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...re,
          transform: le ? re.transform : "translate(0, -200%)",
          // keep off the page when measuring
          minWidth: "max-content",
          zIndex: oe,
          "--radix-popper-transform-origin": [
            (ve = we.transformOrigin) == null ? void 0 : ve.x,
            (Ne = we.transformOrigin) == null ? void 0 : Ne.y
          ].join(" "),
          // hide the content if using the hide middleware and should be hidden
          // set visibility to hidden and disable pointer events so the UI behaves
          // as if the PopperContent isn't there at all
          ...((ee = we.hide) == null ? void 0 : ee.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: /* @__PURE__ */ y.jsx(
          $R,
          {
            scope: n,
            placedSide: X,
            onArrowChange: E,
            arrowX: he,
            arrowY: I,
            shouldHideArrow: G,
            children: /* @__PURE__ */ y.jsx(
              nt.div,
              {
                "data-side": X,
                "data-align": L,
                ...g,
                ref: S,
                style: {
                  ...g.style,
                  // if the PopperContent hasn't been placed yet (not all measurements done)
                  // we prevent animations so that users's animation don't kick in too early referring wrong sides
                  animation: le ? void 0 : "none"
                }
              }
            )
          }
        )
      }
    );
  }
);
qy.displayName = Bu;
var Yy = "PopperArrow", UR = {
  top: "bottom",
  right: "left",
  bottom: "top",
  left: "right"
}, Gy = x.forwardRef(function(t, n) {
  const { __scopePopper: r, ...o } = t, i = VR(Yy, r), a = UR[i.placedSide];
  return (
    // we have to use an extra wrapper because `ResizeObserver` (used by `useSize`)
    // doesn't report size as we'd expect on SVG elements.
    // it reports their bounding box which is effectively the largest path inside the SVG.
    /* @__PURE__ */ y.jsx(
      "span",
      {
        ref: i.onArrowChange,
        style: {
          position: "absolute",
          left: i.arrowX,
          top: i.arrowY,
          [a]: 0,
          transformOrigin: {
            top: "",
            right: "0 0",
            bottom: "center 0",
            left: "100% 0"
          }[i.placedSide],
          transform: {
            top: "translateY(100%)",
            right: "translateY(50%) rotate(90deg) translateX(-50%)",
            bottom: "rotate(180deg)",
            left: "translateY(50%) rotate(-90deg) translateX(50%)"
          }[i.placedSide],
          visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: /* @__PURE__ */ y.jsx(
          FR,
          {
            ...o,
            ref: n,
            style: {
              ...o.style,
              // ensures the element can be measured correctly (mostly for if SVG)
              display: "block"
            }
          }
        )
      }
    )
  );
});
Gy.displayName = Yy;
function BR(e) {
  return e !== null;
}
var WR = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var b, w, _;
    const { placement: n, rects: r, middlewareData: o } = t, a = ((b = o.arrow) == null ? void 0 : b.centerOffset) !== 0, s = a ? 0 : e.arrowWidth, c = a ? 0 : e.arrowHeight, [l, u] = Ky(n), d = { start: "0%", center: "50%", end: "100%" }[u], p = (((w = o.arrow) == null ? void 0 : w.x) ?? 0) + s / 2, h = (((_ = o.arrow) == null ? void 0 : _.y) ?? 0) + c / 2;
    let m = "", g = "";
    return l === "bottom" ? (m = a ? d : `${p}px`, g = `${-c}px`) : l === "top" ? (m = a ? d : `${p}px`, g = `${r.floating.height + c}px`) : l === "right" ? (m = `${-c}px`, g = a ? d : `${h}px`) : l === "left" && (m = `${r.floating.width + c}px`, g = a ? d : `${h}px`), { data: { x: m, y: g } };
  }
});
function Ky(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var HR = By, qR = Hy, YR = qy, GR = Gy, KR = "Portal", Ps = x.forwardRef((e, t) => {
  var s;
  const { container: n, ...r } = e, [o, i] = x.useState(!1);
  sr(() => i(!0), []);
  const a = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
  return a ? mx.createPortal(/* @__PURE__ */ y.jsx(nt.div, { ...r, ref: t }), a) : null;
});
Ps.displayName = KR;
function ZR(e, t) {
  return x.useReducer((n, r) => t[n][r] ?? n, e);
}
var jn = (e) => {
  const { present: t, children: n } = e, r = XR(t), o = typeof n == "function" ? n({ present: r.isPresent }) : x.Children.only(n), i = bt(r.ref, JR(o));
  return typeof n == "function" || r.isPresent ? x.cloneElement(o, { ref: i }) : null;
};
jn.displayName = "Presence";
function XR(e) {
  const [t, n] = x.useState(), r = x.useRef({}), o = x.useRef(e), i = x.useRef("none"), a = e ? "mounted" : "unmounted", [s, c] = ZR(a, {
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
  return x.useEffect(() => {
    const l = ea(r.current);
    i.current = s === "mounted" ? l : "none";
  }, [s]), sr(() => {
    const l = r.current, u = o.current;
    if (u !== e) {
      const p = i.current, h = ea(l);
      e ? c("MOUNT") : h === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && p !== h ? "ANIMATION_OUT" : "UNMOUNT"), o.current = e;
    }
  }, [e, c]), sr(() => {
    if (t) {
      const l = (d) => {
        const h = ea(r.current).includes(d.animationName);
        d.target === t && h && es.flushSync(() => c("ANIMATION_END"));
      }, u = (d) => {
        d.target === t && (i.current = ea(r.current));
      };
      return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      c("ANIMATION_END");
  }, [t, c]), {
    isPresent: ["mounted", "unmountSuspended"].includes(s),
    ref: x.useCallback((l) => {
      l && (r.current = getComputedStyle(l)), n(l);
    }, [])
  };
}
function ea(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function JR(e) {
  var r, o;
  let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get, n = t && "isReactWarning" in t && t.isReactWarning;
  return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref);
}
var Bc = "rovingFocusGroup.onEntryFocus", QR = { bubbles: !1, cancelable: !0 }, Ns = "RovingFocusGroup", [Bl, Zy, eO] = Iu(Ns), [tO, Xy] = $r(
  Ns,
  [eO]
), [nO, rO] = tO(Ns), Jy = x.forwardRef(
  (e, t) => /* @__PURE__ */ y.jsx(Bl.Provider, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ y.jsx(Bl.Slot, { scope: e.__scopeRovingFocusGroup, children: /* @__PURE__ */ y.jsx(oO, { ...e, ref: t }) }) })
);
Jy.displayName = Ns;
var oO = x.forwardRef((e, t) => {
  const {
    __scopeRovingFocusGroup: n,
    orientation: r,
    loop: o = !1,
    dir: i,
    currentTabStopId: a,
    defaultCurrentTabStopId: s,
    onCurrentTabStopIdChange: c,
    onEntryFocus: l,
    preventScrollOnEntryFocus: u = !1,
    ...d
  } = e, p = x.useRef(null), h = bt(t, p), m = Sy(i), [g = null, b] = Ts({
    prop: a,
    defaultProp: s,
    onChange: c
  }), [w, _] = x.useState(!1), S = Tt(l), C = Zy(n), E = x.useRef(!1), [N, P] = x.useState(0);
  return x.useEffect(() => {
    const B = p.current;
    if (B)
      return B.addEventListener(Bc, S), () => B.removeEventListener(Bc, S);
  }, [S]), /* @__PURE__ */ y.jsx(
    nO,
    {
      scope: n,
      orientation: r,
      dir: m,
      loop: o,
      currentTabStopId: g,
      onItemFocus: x.useCallback(
        (B) => b(B),
        [b]
      ),
      onItemShiftTab: x.useCallback(() => _(!0), []),
      onFocusableItemAdd: x.useCallback(
        () => P((B) => B + 1),
        []
      ),
      onFocusableItemRemove: x.useCallback(
        () => P((B) => B - 1),
        []
      ),
      children: /* @__PURE__ */ y.jsx(
        nt.div,
        {
          tabIndex: w || N === 0 ? -1 : 0,
          "data-orientation": r,
          ...d,
          ref: h,
          style: { outline: "none", ...e.style },
          onMouseDown: ke(e.onMouseDown, () => {
            E.current = !0;
          }),
          onFocus: ke(e.onFocus, (B) => {
            const ce = !E.current;
            if (B.target === B.currentTarget && ce && !w) {
              const pe = new CustomEvent(Bc, QR);
              if (B.currentTarget.dispatchEvent(pe), !pe.defaultPrevented) {
                const fe = C().filter((M) => M.focusable), $ = fe.find((M) => M.active), Q = fe.find((M) => M.id === g), re = [$, Q, ...fe].filter(
                  Boolean
                ).map((M) => M.ref.current);
                tv(re, u);
              }
            }
            E.current = !1;
          }),
          onBlur: ke(e.onBlur, () => _(!1))
        }
      )
    }
  );
}), Qy = "RovingFocusGroupItem", ev = x.forwardRef(
  (e, t) => {
    const {
      __scopeRovingFocusGroup: n,
      focusable: r = !0,
      active: o = !1,
      tabStopId: i,
      ...a
    } = e, s = lo(), c = i || s, l = rO(Qy, n), u = l.currentTabStopId === c, d = Zy(n), { onFocusableItemAdd: p, onFocusableItemRemove: h } = l;
    return x.useEffect(() => {
      if (r)
        return p(), () => h();
    }, [r, p, h]), /* @__PURE__ */ y.jsx(
      Bl.ItemSlot,
      {
        scope: n,
        id: c,
        focusable: r,
        active: o,
        children: /* @__PURE__ */ y.jsx(
          nt.span,
          {
            tabIndex: u ? 0 : -1,
            "data-orientation": l.orientation,
            ...a,
            ref: t,
            onMouseDown: ke(e.onMouseDown, (m) => {
              r ? l.onItemFocus(c) : m.preventDefault();
            }),
            onFocus: ke(e.onFocus, () => l.onItemFocus(c)),
            onKeyDown: ke(e.onKeyDown, (m) => {
              if (m.key === "Tab" && m.shiftKey) {
                l.onItemShiftTab();
                return;
              }
              if (m.target !== m.currentTarget) return;
              const g = sO(m, l.orientation, l.dir);
              if (g !== void 0) {
                if (m.metaKey || m.ctrlKey || m.altKey || m.shiftKey) return;
                m.preventDefault();
                let w = d().filter((_) => _.focusable).map((_) => _.ref.current);
                if (g === "last") w.reverse();
                else if (g === "prev" || g === "next") {
                  g === "prev" && w.reverse();
                  const _ = w.indexOf(m.currentTarget);
                  w = l.loop ? cO(w, _ + 1) : w.slice(_ + 1);
                }
                setTimeout(() => tv(w));
              }
            })
          }
        )
      }
    );
  }
);
ev.displayName = Qy;
var iO = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function aO(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function sO(e, t, n) {
  const r = aO(e.key, n);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
    return iO[r];
}
function tv(e, t = !1) {
  const n = document.activeElement;
  for (const r of e)
    if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function cO(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var lO = Jy, uO = ev, fO = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Gr = /* @__PURE__ */ new WeakMap(), ta = /* @__PURE__ */ new WeakMap(), na = {}, Wc = 0, nv = function(e) {
  return e && (e.host || nv(e.parentNode));
}, dO = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = nv(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, pO = function(e, t, n, r) {
  var o = dO(t, Array.isArray(e) ? e : [e]);
  na[n] || (na[n] = /* @__PURE__ */ new WeakMap());
  var i = na[n], a = [], s = /* @__PURE__ */ new Set(), c = new Set(o), l = function(d) {
    !d || s.has(d) || (s.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(p) {
      if (s.has(p))
        u(p);
      else
        try {
          var h = p.getAttribute(r), m = h !== null && h !== "false", g = (Gr.get(p) || 0) + 1, b = (i.get(p) || 0) + 1;
          Gr.set(p, g), i.set(p, b), a.push(p), g === 1 && m && ta.set(p, !0), b === 1 && p.setAttribute(n, "true"), m || p.setAttribute(r, "true");
        } catch (w) {
          console.error("aria-hidden: cannot operate on ", p, w);
        }
    });
  };
  return u(t), s.clear(), Wc++, function() {
    a.forEach(function(d) {
      var p = Gr.get(d) - 1, h = i.get(d) - 1;
      Gr.set(d, p), i.set(d, h), p || (ta.has(d) || d.removeAttribute(r), ta.delete(d)), h || d.removeAttribute(n);
    }), Wc--, Wc || (Gr = /* @__PURE__ */ new WeakMap(), Gr = /* @__PURE__ */ new WeakMap(), ta = /* @__PURE__ */ new WeakMap(), na = {});
  };
}, rv = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = fO(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), pO(r, o, n, "aria-hidden")) : function() {
    return null;
  };
}, fn = function() {
  return fn = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, fn.apply(this, arguments);
};
function ov(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function hO(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, o = t.length, i; r < o; r++)
    (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)), i[r] = t[r]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var xa = "right-scroll-bar-position", wa = "width-before-scroll-bar", mO = "with-scroll-bars-hidden", gO = "--removed-body-scroll-bar-size";
function Hc(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function yO(e, t) {
  var n = br(function() {
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
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
var vO = typeof window < "u" ? x.useLayoutEffect : x.useEffect, zp = /* @__PURE__ */ new WeakMap();
function bO(e, t) {
  var n = yO(null, function(r) {
    return e.forEach(function(o) {
      return Hc(o, r);
    });
  });
  return vO(function() {
    var r = zp.get(n);
    if (r) {
      var o = new Set(r), i = new Set(e), a = n.current;
      o.forEach(function(s) {
        i.has(s) || Hc(s, null);
      }), i.forEach(function(s) {
        o.has(s) || Hc(s, a);
      });
    }
    zp.set(n, e);
  }, [e]), n;
}
function xO(e) {
  return e;
}
function wO(e, t) {
  t === void 0 && (t = xO);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(i) {
      var a = t(i, r);
      return n.push(a), function() {
        n = n.filter(function(s) {
          return s !== a;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (r = !0; n.length; ) {
        var a = n;
        n = [], a.forEach(i);
      }
      n = {
        push: function(s) {
          return i(s);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(i) {
      r = !0;
      var a = [];
      if (n.length) {
        var s = n;
        n = [], s.forEach(i), a = n;
      }
      var c = function() {
        var u = a;
        a = [], u.forEach(i);
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
  return o;
}
function _O(e) {
  e === void 0 && (e = {});
  var t = wO(null);
  return t.options = fn({ async: !0, ssr: !1 }, e), t;
}
var iv = function(e) {
  var t = e.sideCar, n = ov(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return x.createElement(r, fn({}, n));
};
iv.isSideCarExport = !0;
function EO(e, t) {
  return e.useMedium(t), iv;
}
var av = _O(), qc = function() {
}, Ms = x.forwardRef(function(e, t) {
  var n = x.useRef(null), r = x.useState({
    onScrollCapture: qc,
    onWheelCapture: qc,
    onTouchMoveCapture: qc
  }), o = r[0], i = r[1], a = e.forwardProps, s = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, p = e.sideCar, h = e.noIsolation, m = e.inert, g = e.allowPinchZoom, b = e.as, w = b === void 0 ? "div" : b, _ = e.gapMode, S = ov(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), C = p, E = bO([n, t]), N = fn(fn({}, S), o);
  return x.createElement(
    x.Fragment,
    null,
    u && x.createElement(C, { sideCar: av, removeScrollBar: l, shards: d, noIsolation: h, inert: m, setCallbacks: i, allowPinchZoom: !!g, lockRef: n, gapMode: _ }),
    a ? x.cloneElement(x.Children.only(s), fn(fn({}, N), { ref: E })) : x.createElement(w, fn({}, N, { className: c, ref: E }), s)
  );
});
Ms.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Ms.classNames = {
  fullWidth: wa,
  zeroRight: xa
};
var SO = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function CO() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = SO();
  return t && e.setAttribute("nonce", t), e;
}
function AO(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function TO(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var RO = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = CO()) && (AO(t, n), TO(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, OO = function() {
  var e = RO();
  return function(t, n) {
    x.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, sv = function() {
  var e = OO(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, kO = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Yc = function(e) {
  return parseInt(e || "", 10) || 0;
}, PO = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Yc(n), Yc(r), Yc(o)];
}, NO = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return kO;
  var t = PO(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, MO = sv(), fo = "data-scroll-locked", IO = function(e, t, n, r) {
  var o = e.left, i = e.top, a = e.right, s = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(mO, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(fo, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(xa, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(wa, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(xa, " .").concat(xa, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(wa, " .").concat(wa, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(fo, `] {
    `).concat(gO, ": ").concat(s, `px;
  }
`);
}, $p = function() {
  var e = parseInt(document.body.getAttribute(fo) || "0", 10);
  return isFinite(e) ? e : 0;
}, DO = function() {
  x.useEffect(function() {
    return document.body.setAttribute(fo, ($p() + 1).toString()), function() {
      var e = $p() - 1;
      e <= 0 ? document.body.removeAttribute(fo) : document.body.setAttribute(fo, e.toString());
    };
  }, []);
}, jO = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r;
  DO();
  var i = x.useMemo(function() {
    return NO(o);
  }, [o]);
  return x.createElement(MO, { styles: IO(i, !t, o, n ? "" : "!important") });
}, Wl = !1;
if (typeof window < "u")
  try {
    var ra = Object.defineProperty({}, "passive", {
      get: function() {
        return Wl = !0, !0;
      }
    });
    window.addEventListener("test", ra, ra), window.removeEventListener("test", ra, ra);
  } catch {
    Wl = !1;
  }
var Kr = Wl ? { passive: !1 } : !1, FO = function(e) {
  return e.tagName === "TEXTAREA";
}, cv = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !FO(e) && n[t] === "visible")
  );
}, LO = function(e) {
  return cv(e, "overflowY");
}, zO = function(e) {
  return cv(e, "overflowX");
}, Vp = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = lv(e, r);
    if (o) {
      var i = uv(e, r), a = i[1], s = i[2];
      if (a > s)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, $O = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, VO = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, lv = function(e, t) {
  return e === "v" ? LO(t) : zO(t);
}, uv = function(e, t) {
  return e === "v" ? $O(t) : VO(t);
}, UO = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, BO = function(e, t, n, r, o) {
  var i = UO(e, window.getComputedStyle(t).direction), a = i * r, s = n.target, c = t.contains(s), l = !1, u = a > 0, d = 0, p = 0;
  do {
    var h = uv(e, s), m = h[0], g = h[1], b = h[2], w = g - b - i * m;
    (m || w) && lv(e, s) && (d += w, p += m), s instanceof ShadowRoot ? s = s.host : s = s.parentNode;
  } while (
    // portaled content
    !c && s !== document.body || // self content
    c && (t.contains(s) || t === s)
  );
  return (u && (Math.abs(d) < 1 || !o) || !u && (Math.abs(p) < 1 || !o)) && (l = !0), l;
}, oa = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Up = function(e) {
  return [e.deltaX, e.deltaY];
}, Bp = function(e) {
  return e && "current" in e ? e.current : e;
}, WO = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, HO = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, qO = 0, Zr = [];
function YO(e) {
  var t = x.useRef([]), n = x.useRef([0, 0]), r = x.useRef(), o = x.useState(qO++)[0], i = x.useState(sv)[0], a = x.useRef(e);
  x.useEffect(function() {
    a.current = e;
  }, [e]), x.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var g = hO([e.lockRef.current], (e.shards || []).map(Bp), !0).filter(Boolean);
      return g.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), g.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = x.useCallback(function(g, b) {
    if ("touches" in g && g.touches.length === 2)
      return !a.current.allowPinchZoom;
    var w = oa(g), _ = n.current, S = "deltaX" in g ? g.deltaX : _[0] - w[0], C = "deltaY" in g ? g.deltaY : _[1] - w[1], E, N = g.target, P = Math.abs(S) > Math.abs(C) ? "h" : "v";
    if ("touches" in g && P === "h" && N.type === "range")
      return !1;
    var B = Vp(P, N);
    if (!B)
      return !0;
    if (B ? E = P : (E = P === "v" ? "h" : "v", B = Vp(P, N)), !B)
      return !1;
    if (!r.current && "changedTouches" in g && (S || C) && (r.current = E), !E)
      return !0;
    var ce = r.current || E;
    return BO(ce, b, g, ce === "h" ? S : C, !0);
  }, []), c = x.useCallback(function(g) {
    var b = g;
    if (!(!Zr.length || Zr[Zr.length - 1] !== i)) {
      var w = "deltaY" in b ? Up(b) : oa(b), _ = t.current.filter(function(E) {
        return E.name === b.type && (E.target === b.target || b.target === E.shadowParent) && WO(E.delta, w);
      })[0];
      if (_ && _.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!_) {
        var S = (a.current.shards || []).map(Bp).filter(Boolean).filter(function(E) {
          return E.contains(b.target);
        }), C = S.length > 0 ? s(b, S[0]) : !a.current.noIsolation;
        C && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = x.useCallback(function(g, b, w, _) {
    var S = { name: g, delta: b, target: w, should: _, shadowParent: GO(w) };
    t.current.push(S), setTimeout(function() {
      t.current = t.current.filter(function(C) {
        return C !== S;
      });
    }, 1);
  }, []), u = x.useCallback(function(g) {
    n.current = oa(g), r.current = void 0;
  }, []), d = x.useCallback(function(g) {
    l(g.type, Up(g), g.target, s(g, e.lockRef.current));
  }, []), p = x.useCallback(function(g) {
    l(g.type, oa(g), g.target, s(g, e.lockRef.current));
  }, []);
  x.useEffect(function() {
    return Zr.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: p
    }), document.addEventListener("wheel", c, Kr), document.addEventListener("touchmove", c, Kr), document.addEventListener("touchstart", u, Kr), function() {
      Zr = Zr.filter(function(g) {
        return g !== i;
      }), document.removeEventListener("wheel", c, Kr), document.removeEventListener("touchmove", c, Kr), document.removeEventListener("touchstart", u, Kr);
    };
  }, []);
  var h = e.removeScrollBar, m = e.inert;
  return x.createElement(
    x.Fragment,
    null,
    m ? x.createElement(i, { styles: HO(o) }) : null,
    h ? x.createElement(jO, { gapMode: e.gapMode }) : null
  );
}
function GO(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
  return t;
}
const KO = EO(av, YO);
var Wu = x.forwardRef(function(e, t) {
  return x.createElement(Ms, fn({}, e, { ref: t, sideCar: KO }));
});
Wu.classNames = Ms.classNames;
var Hl = ["Enter", " "], ZO = ["ArrowDown", "PageUp", "Home"], fv = ["ArrowUp", "PageDown", "End"], XO = [...ZO, ...fv], JO = {
  ltr: [...Hl, "ArrowRight"],
  rtl: [...Hl, "ArrowLeft"]
}, QO = {
  ltr: ["ArrowLeft"],
  rtl: ["ArrowRight"]
}, Li = "Menu", [Ci, ek, tk] = Iu(Li), [Vr, dv] = $r(Li, [
  tk,
  Vy,
  Xy
]), Is = Vy(), pv = Xy(), [nk, Ur] = Vr(Li), [rk, zi] = Vr(Li), hv = (e) => {
  const { __scopeMenu: t, open: n = !1, children: r, dir: o, onOpenChange: i, modal: a = !0 } = e, s = Is(t), [c, l] = x.useState(null), u = x.useRef(!1), d = Tt(i), p = Sy(o);
  return x.useEffect(() => {
    const h = () => {
      u.current = !0, document.addEventListener("pointerdown", m, { capture: !0, once: !0 }), document.addEventListener("pointermove", m, { capture: !0, once: !0 });
    }, m = () => u.current = !1;
    return document.addEventListener("keydown", h, { capture: !0 }), () => {
      document.removeEventListener("keydown", h, { capture: !0 }), document.removeEventListener("pointerdown", m, { capture: !0 }), document.removeEventListener("pointermove", m, { capture: !0 });
    };
  }, []), /* @__PURE__ */ y.jsx(HR, { ...s, children: /* @__PURE__ */ y.jsx(
    nk,
    {
      scope: t,
      open: n,
      onOpenChange: d,
      content: c,
      onContentChange: l,
      children: /* @__PURE__ */ y.jsx(
        rk,
        {
          scope: t,
          onClose: x.useCallback(() => d(!1), [d]),
          isUsingKeyboardRef: u,
          dir: p,
          modal: a,
          children: r
        }
      )
    }
  ) });
};
hv.displayName = Li;
var ok = "MenuAnchor", Hu = x.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Is(n);
    return /* @__PURE__ */ y.jsx(qR, { ...o, ...r, ref: t });
  }
);
Hu.displayName = ok;
var qu = "MenuPortal", [ik, mv] = Vr(qu, {
  forceMount: void 0
}), gv = (e) => {
  const { __scopeMenu: t, forceMount: n, children: r, container: o } = e, i = Ur(qu, t);
  return /* @__PURE__ */ y.jsx(ik, { scope: t, forceMount: n, children: /* @__PURE__ */ y.jsx(jn, { present: n || i.open, children: /* @__PURE__ */ y.jsx(Ps, { asChild: !0, container: o, children: r }) }) });
};
gv.displayName = qu;
var Zt = "MenuContent", [ak, Yu] = Vr(Zt), yv = x.forwardRef(
  (e, t) => {
    const n = mv(Zt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = Ur(Zt, e.__scopeMenu), a = zi(Zt, e.__scopeMenu);
    return /* @__PURE__ */ y.jsx(Ci.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ y.jsx(jn, { present: r || i.open, children: /* @__PURE__ */ y.jsx(Ci.Slot, { scope: e.__scopeMenu, children: a.modal ? /* @__PURE__ */ y.jsx(sk, { ...o, ref: t }) : /* @__PURE__ */ y.jsx(ck, { ...o, ref: t }) }) }) });
  }
), sk = x.forwardRef(
  (e, t) => {
    const n = Ur(Zt, e.__scopeMenu), r = x.useRef(null), o = bt(t, r);
    return x.useEffect(() => {
      const i = r.current;
      if (i) return rv(i);
    }, []), /* @__PURE__ */ y.jsx(
      Gu,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: ke(
          e.onFocusOutside,
          (i) => i.preventDefault(),
          { checkForDefaultPrevented: !1 }
        ),
        onDismiss: () => n.onOpenChange(!1)
      }
    );
  }
), ck = x.forwardRef((e, t) => {
  const n = Ur(Zt, e.__scopeMenu);
  return /* @__PURE__ */ y.jsx(
    Gu,
    {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      disableOutsideScroll: !1,
      onDismiss: () => n.onOpenChange(!1)
    }
  );
}), Gu = x.forwardRef(
  (e, t) => {
    const {
      __scopeMenu: n,
      loop: r = !1,
      trapFocus: o,
      onOpenAutoFocus: i,
      onCloseAutoFocus: a,
      disableOutsidePointerEvents: s,
      onEntryFocus: c,
      onEscapeKeyDown: l,
      onPointerDownOutside: u,
      onFocusOutside: d,
      onInteractOutside: p,
      onDismiss: h,
      disableOutsideScroll: m,
      ...g
    } = e, b = Ur(Zt, n), w = zi(Zt, n), _ = Is(n), S = pv(n), C = ek(n), [E, N] = x.useState(null), P = x.useRef(null), B = bt(t, P, b.onContentChange), ce = x.useRef(0), pe = x.useRef(""), fe = x.useRef(0), $ = x.useRef(null), Q = x.useRef("right"), D = x.useRef(0), re = m ? Wu : x.Fragment, M = m ? { as: Rn, allowPinchZoom: !0 } : void 0, le = (X) => {
      var K, ie;
      const L = pe.current + X, W = C().filter((de) => !de.disabled), he = document.activeElement, I = (K = W.find((de) => de.ref.current === he)) == null ? void 0 : K.textValue, G = W.map((de) => de.textValue), oe = xk(G, L, I), Y = (ie = W.find((de) => de.textValue === oe)) == null ? void 0 : ie.ref.current;
      (function de(ve) {
        pe.current = ve, window.clearTimeout(ce.current), ve !== "" && (ce.current = window.setTimeout(() => de(""), 1e3));
      })(L), Y && setTimeout(() => Y.focus());
    };
    x.useEffect(() => () => window.clearTimeout(ce.current), []), Ry();
    const we = x.useCallback((X) => {
      var W, he;
      return Q.current === ((W = $.current) == null ? void 0 : W.side) && _k(X, (he = $.current) == null ? void 0 : he.area);
    }, []);
    return /* @__PURE__ */ y.jsx(
      ak,
      {
        scope: n,
        searchRef: pe,
        onItemEnter: x.useCallback(
          (X) => {
            we(X) && X.preventDefault();
          },
          [we]
        ),
        onItemLeave: x.useCallback(
          (X) => {
            var L;
            we(X) || ((L = P.current) == null || L.focus(), N(null));
          },
          [we]
        ),
        onTriggerLeave: x.useCallback(
          (X) => {
            we(X) && X.preventDefault();
          },
          [we]
        ),
        pointerGraceTimerRef: fe,
        onPointerGraceIntentChange: x.useCallback((X) => {
          $.current = X;
        }, []),
        children: /* @__PURE__ */ y.jsx(re, { ...M, children: /* @__PURE__ */ y.jsx(
          Du,
          {
            asChild: !0,
            trapped: o,
            onMountAutoFocus: ke(i, (X) => {
              var L;
              X.preventDefault(), (L = P.current) == null || L.focus({ preventScroll: !0 });
            }),
            onUnmountAutoFocus: a,
            children: /* @__PURE__ */ y.jsx(
              Rs,
              {
                asChild: !0,
                disableOutsidePointerEvents: s,
                onEscapeKeyDown: l,
                onPointerDownOutside: u,
                onFocusOutside: d,
                onInteractOutside: p,
                onDismiss: h,
                children: /* @__PURE__ */ y.jsx(
                  lO,
                  {
                    asChild: !0,
                    ...S,
                    dir: w.dir,
                    orientation: "vertical",
                    loop: r,
                    currentTabStopId: E,
                    onCurrentTabStopIdChange: N,
                    onEntryFocus: ke(c, (X) => {
                      w.isUsingKeyboardRef.current || X.preventDefault();
                    }),
                    preventScrollOnEntryFocus: !0,
                    children: /* @__PURE__ */ y.jsx(
                      YR,
                      {
                        role: "menu",
                        "aria-orientation": "vertical",
                        "data-state": Mv(b.open),
                        "data-radix-menu-content": "",
                        dir: w.dir,
                        ..._,
                        ...g,
                        ref: B,
                        style: { outline: "none", ...g.style },
                        onKeyDown: ke(g.onKeyDown, (X) => {
                          const W = X.target.closest("[data-radix-menu-content]") === X.currentTarget, he = X.ctrlKey || X.altKey || X.metaKey, I = X.key.length === 1;
                          W && (X.key === "Tab" && X.preventDefault(), !he && I && le(X.key));
                          const G = P.current;
                          if (X.target !== G || !XO.includes(X.key)) return;
                          X.preventDefault();
                          const Y = C().filter((K) => !K.disabled).map((K) => K.ref.current);
                          fv.includes(X.key) && Y.reverse(), vk(Y);
                        }),
                        onBlur: ke(e.onBlur, (X) => {
                          X.currentTarget.contains(X.target) || (window.clearTimeout(ce.current), pe.current = "");
                        }),
                        onPointerMove: ke(
                          e.onPointerMove,
                          Ai((X) => {
                            const L = X.target, W = D.current !== X.clientX;
                            if (X.currentTarget.contains(L) && W) {
                              const he = X.clientX > D.current ? "right" : "left";
                              Q.current = he, D.current = X.clientX;
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
yv.displayName = Zt;
var lk = "MenuGroup", Ku = x.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ y.jsx(nt.div, { role: "group", ...r, ref: t });
  }
);
Ku.displayName = lk;
var uk = "MenuLabel", vv = x.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ y.jsx(nt.div, { ...r, ref: t });
  }
);
vv.displayName = uk;
var Xa = "MenuItem", Wp = "menu.itemSelect", Ds = x.forwardRef(
  (e, t) => {
    const { disabled: n = !1, onSelect: r, ...o } = e, i = x.useRef(null), a = zi(Xa, e.__scopeMenu), s = Yu(Xa, e.__scopeMenu), c = bt(t, i), l = x.useRef(!1), u = () => {
      const d = i.current;
      if (!n && d) {
        const p = new CustomEvent(Wp, { bubbles: !0, cancelable: !0 });
        d.addEventListener(Wp, (h) => r == null ? void 0 : r(h), { once: !0 }), pu(d, p), p.defaultPrevented ? l.current = !1 : a.onClose();
      }
    };
    return /* @__PURE__ */ y.jsx(
      bv,
      {
        ...o,
        ref: c,
        disabled: n,
        onClick: ke(e.onClick, u),
        onPointerDown: (d) => {
          var p;
          (p = e.onPointerDown) == null || p.call(e, d), l.current = !0;
        },
        onPointerUp: ke(e.onPointerUp, (d) => {
          var p;
          l.current || (p = d.currentTarget) == null || p.click();
        }),
        onKeyDown: ke(e.onKeyDown, (d) => {
          const p = s.searchRef.current !== "";
          n || p && d.key === " " || Hl.includes(d.key) && (d.currentTarget.click(), d.preventDefault());
        })
      }
    );
  }
);
Ds.displayName = Xa;
var bv = x.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, disabled: r = !1, textValue: o, ...i } = e, a = Yu(Xa, n), s = pv(n), c = x.useRef(null), l = bt(t, c), [u, d] = x.useState(!1), [p, h] = x.useState("");
    return x.useEffect(() => {
      const m = c.current;
      m && h((m.textContent ?? "").trim());
    }, [i.children]), /* @__PURE__ */ y.jsx(
      Ci.ItemSlot,
      {
        scope: n,
        disabled: r,
        textValue: o ?? p,
        children: /* @__PURE__ */ y.jsx(uO, { asChild: !0, ...s, focusable: !r, children: /* @__PURE__ */ y.jsx(
          nt.div,
          {
            role: "menuitem",
            "data-highlighted": u ? "" : void 0,
            "aria-disabled": r || void 0,
            "data-disabled": r ? "" : void 0,
            ...i,
            ref: l,
            onPointerMove: ke(
              e.onPointerMove,
              Ai((m) => {
                r ? a.onItemLeave(m) : (a.onItemEnter(m), m.defaultPrevented || m.currentTarget.focus({ preventScroll: !0 }));
              })
            ),
            onPointerLeave: ke(
              e.onPointerLeave,
              Ai((m) => a.onItemLeave(m))
            ),
            onFocus: ke(e.onFocus, () => d(!0)),
            onBlur: ke(e.onBlur, () => d(!1))
          }
        ) })
      }
    );
  }
), fk = "MenuCheckboxItem", xv = x.forwardRef(
  (e, t) => {
    const { checked: n = !1, onCheckedChange: r, ...o } = e;
    return /* @__PURE__ */ y.jsx(Cv, { scope: e.__scopeMenu, checked: n, children: /* @__PURE__ */ y.jsx(
      Ds,
      {
        role: "menuitemcheckbox",
        "aria-checked": Ja(n) ? "mixed" : n,
        ...o,
        ref: t,
        "data-state": Xu(n),
        onSelect: ke(
          o.onSelect,
          () => r == null ? void 0 : r(Ja(n) ? !0 : !n),
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
xv.displayName = fk;
var wv = "MenuRadioGroup", [dk, pk] = Vr(
  wv,
  { value: void 0, onValueChange: () => {
  } }
), _v = x.forwardRef(
  (e, t) => {
    const { value: n, onValueChange: r, ...o } = e, i = Tt(r);
    return /* @__PURE__ */ y.jsx(dk, { scope: e.__scopeMenu, value: n, onValueChange: i, children: /* @__PURE__ */ y.jsx(Ku, { ...o, ref: t }) });
  }
);
_v.displayName = wv;
var Ev = "MenuRadioItem", Sv = x.forwardRef(
  (e, t) => {
    const { value: n, ...r } = e, o = pk(Ev, e.__scopeMenu), i = n === o.value;
    return /* @__PURE__ */ y.jsx(Cv, { scope: e.__scopeMenu, checked: i, children: /* @__PURE__ */ y.jsx(
      Ds,
      {
        role: "menuitemradio",
        "aria-checked": i,
        ...r,
        ref: t,
        "data-state": Xu(i),
        onSelect: ke(
          r.onSelect,
          () => {
            var a;
            return (a = o.onValueChange) == null ? void 0 : a.call(o, n);
          },
          { checkForDefaultPrevented: !1 }
        )
      }
    ) });
  }
);
Sv.displayName = Ev;
var Zu = "MenuItemIndicator", [Cv, hk] = Vr(
  Zu,
  { checked: !1 }
), Av = x.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, forceMount: r, ...o } = e, i = hk(Zu, n);
    return /* @__PURE__ */ y.jsx(
      jn,
      {
        present: r || Ja(i.checked) || i.checked === !0,
        children: /* @__PURE__ */ y.jsx(
          nt.span,
          {
            ...o,
            ref: t,
            "data-state": Xu(i.checked)
          }
        )
      }
    );
  }
);
Av.displayName = Zu;
var mk = "MenuSeparator", Tv = x.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e;
    return /* @__PURE__ */ y.jsx(
      nt.div,
      {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
      }
    );
  }
);
Tv.displayName = mk;
var gk = "MenuArrow", Rv = x.forwardRef(
  (e, t) => {
    const { __scopeMenu: n, ...r } = e, o = Is(n);
    return /* @__PURE__ */ y.jsx(GR, { ...o, ...r, ref: t });
  }
);
Rv.displayName = gk;
var yk = "MenuSub", [aN, Ov] = Vr(yk), qo = "MenuSubTrigger", kv = x.forwardRef(
  (e, t) => {
    const n = Ur(qo, e.__scopeMenu), r = zi(qo, e.__scopeMenu), o = Ov(qo, e.__scopeMenu), i = Yu(qo, e.__scopeMenu), a = x.useRef(null), { pointerGraceTimerRef: s, onPointerGraceIntentChange: c } = i, l = { __scopeMenu: e.__scopeMenu }, u = x.useCallback(() => {
      a.current && window.clearTimeout(a.current), a.current = null;
    }, []);
    return x.useEffect(() => u, [u]), x.useEffect(() => {
      const d = s.current;
      return () => {
        window.clearTimeout(d), c(null);
      };
    }, [s, c]), /* @__PURE__ */ y.jsx(Hu, { asChild: !0, ...l, children: /* @__PURE__ */ y.jsx(
      bv,
      {
        id: o.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": n.open,
        "aria-controls": o.contentId,
        "data-state": Mv(n.open),
        ...e,
        ref: vs(t, o.onTriggerChange),
        onClick: (d) => {
          var p;
          (p = e.onClick) == null || p.call(e, d), !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(), n.open || n.onOpenChange(!0));
        },
        onPointerMove: ke(
          e.onPointerMove,
          Ai((d) => {
            i.onItemEnter(d), !d.defaultPrevented && !e.disabled && !n.open && !a.current && (i.onPointerGraceIntentChange(null), a.current = window.setTimeout(() => {
              n.onOpenChange(!0), u();
            }, 100));
          })
        ),
        onPointerLeave: ke(
          e.onPointerLeave,
          Ai((d) => {
            var h, m;
            u();
            const p = (h = n.content) == null ? void 0 : h.getBoundingClientRect();
            if (p) {
              const g = (m = n.content) == null ? void 0 : m.dataset.side, b = g === "right", w = b ? -5 : 5, _ = p[b ? "left" : "right"], S = p[b ? "right" : "left"];
              i.onPointerGraceIntentChange({
                area: [
                  // Apply a bleed on clientX to ensure that our exit point is
                  // consistently within polygon bounds
                  { x: d.clientX + w, y: d.clientY },
                  { x: _, y: p.top },
                  { x: S, y: p.top },
                  { x: S, y: p.bottom },
                  { x: _, y: p.bottom }
                ],
                side: g
              }), window.clearTimeout(s.current), s.current = window.setTimeout(
                () => i.onPointerGraceIntentChange(null),
                300
              );
            } else {
              if (i.onTriggerLeave(d), d.defaultPrevented) return;
              i.onPointerGraceIntentChange(null);
            }
          })
        ),
        onKeyDown: ke(e.onKeyDown, (d) => {
          var h;
          const p = i.searchRef.current !== "";
          e.disabled || p && d.key === " " || JO[r.dir].includes(d.key) && (n.onOpenChange(!0), (h = n.content) == null || h.focus(), d.preventDefault());
        })
      }
    ) });
  }
);
kv.displayName = qo;
var Pv = "MenuSubContent", Nv = x.forwardRef(
  (e, t) => {
    const n = mv(Zt, e.__scopeMenu), { forceMount: r = n.forceMount, ...o } = e, i = Ur(Zt, e.__scopeMenu), a = zi(Zt, e.__scopeMenu), s = Ov(Pv, e.__scopeMenu), c = x.useRef(null), l = bt(t, c);
    return /* @__PURE__ */ y.jsx(Ci.Provider, { scope: e.__scopeMenu, children: /* @__PURE__ */ y.jsx(jn, { present: r || i.open, children: /* @__PURE__ */ y.jsx(Ci.Slot, { scope: e.__scopeMenu, children: /* @__PURE__ */ y.jsx(
      Gu,
      {
        id: s.contentId,
        "aria-labelledby": s.triggerId,
        ...o,
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
        onFocusOutside: ke(e.onFocusOutside, (u) => {
          u.target !== s.trigger && i.onOpenChange(!1);
        }),
        onEscapeKeyDown: ke(e.onEscapeKeyDown, (u) => {
          a.onClose(), u.preventDefault();
        }),
        onKeyDown: ke(e.onKeyDown, (u) => {
          var h;
          const d = u.currentTarget.contains(u.target), p = QO[a.dir].includes(u.key);
          d && p && (i.onOpenChange(!1), (h = s.trigger) == null || h.focus(), u.preventDefault());
        })
      }
    ) }) }) });
  }
);
Nv.displayName = Pv;
function Mv(e) {
  return e ? "open" : "closed";
}
function Ja(e) {
  return e === "indeterminate";
}
function Xu(e) {
  return Ja(e) ? "indeterminate" : e ? "checked" : "unchecked";
}
function vk(e) {
  const t = document.activeElement;
  for (const n of e)
    if (n === t || (n.focus(), document.activeElement !== t)) return;
}
function bk(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
function xk(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((l) => l === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1;
  let a = bk(e, Math.max(i, 0));
  o.length === 1 && (a = a.filter((l) => l !== n));
  const c = a.find(
    (l) => l.toLowerCase().startsWith(o.toLowerCase())
  );
  return c !== n ? c : void 0;
}
function wk(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, a = t.length - 1; i < t.length; a = i++) {
    const s = t[i].x, c = t[i].y, l = t[a].x, u = t[a].y;
    c > r != u > r && n < (l - s) * (r - c) / (u - c) + s && (o = !o);
  }
  return o;
}
function _k(e, t) {
  if (!t) return !1;
  const n = { x: e.clientX, y: e.clientY };
  return wk(n, t);
}
function Ai(e) {
  return (t) => t.pointerType === "mouse" ? e(t) : void 0;
}
var Ek = hv, Sk = Hu, Ck = gv, Ak = yv, Tk = Ku, Rk = vv, Ok = Ds, kk = xv, Pk = _v, Nk = Sv, Mk = Av, Ik = Tv, Dk = Rv, jk = kv, Fk = Nv, Ju = "DropdownMenu", [Lk, sN] = $r(
  Ju,
  [dv]
), Ot = dv(), [zk, Iv] = Lk(Ju), Dv = (e) => {
  const {
    __scopeDropdownMenu: t,
    children: n,
    dir: r,
    open: o,
    defaultOpen: i,
    onOpenChange: a,
    modal: s = !0
  } = e, c = Ot(t), l = x.useRef(null), [u = !1, d] = Ts({
    prop: o,
    defaultProp: i,
    onChange: a
  });
  return /* @__PURE__ */ y.jsx(
    zk,
    {
      scope: t,
      triggerId: lo(),
      triggerRef: l,
      contentId: lo(),
      open: u,
      onOpenChange: d,
      onOpenToggle: x.useCallback(() => d((p) => !p), [d]),
      modal: s,
      children: /* @__PURE__ */ y.jsx(Ek, { ...c, open: u, onOpenChange: d, dir: r, modal: s, children: n })
    }
  );
};
Dv.displayName = Ju;
var jv = "DropdownMenuTrigger", Fv = x.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, disabled: r = !1, ...o } = e, i = Iv(jv, n), a = Ot(n);
    return /* @__PURE__ */ y.jsx(Sk, { asChild: !0, ...a, children: /* @__PURE__ */ y.jsx(
      nt.button,
      {
        type: "button",
        id: i.triggerId,
        "aria-haspopup": "menu",
        "aria-expanded": i.open,
        "aria-controls": i.open ? i.contentId : void 0,
        "data-state": i.open ? "open" : "closed",
        "data-disabled": r ? "" : void 0,
        disabled: r,
        ...o,
        ref: vs(t, i.triggerRef),
        onPointerDown: ke(e.onPointerDown, (s) => {
          !r && s.button === 0 && s.ctrlKey === !1 && (i.onOpenToggle(), i.open || s.preventDefault());
        }),
        onKeyDown: ke(e.onKeyDown, (s) => {
          r || (["Enter", " "].includes(s.key) && i.onOpenToggle(), s.key === "ArrowDown" && i.onOpenChange(!0), ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault());
        })
      }
    ) });
  }
);
Fv.displayName = jv;
var $k = "DropdownMenuPortal", Lv = (e) => {
  const { __scopeDropdownMenu: t, ...n } = e, r = Ot(t);
  return /* @__PURE__ */ y.jsx(Ck, { ...r, ...n });
};
Lv.displayName = $k;
var zv = "DropdownMenuContent", $v = x.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Iv(zv, n), i = Ot(n), a = x.useRef(!1);
    return /* @__PURE__ */ y.jsx(
      Ak,
      {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...r,
        ref: t,
        onCloseAutoFocus: ke(e.onCloseAutoFocus, (s) => {
          var c;
          a.current || (c = o.triggerRef.current) == null || c.focus(), a.current = !1, s.preventDefault();
        }),
        onInteractOutside: ke(e.onInteractOutside, (s) => {
          const c = s.detail.originalEvent, l = c.button === 0 && c.ctrlKey === !0, u = c.button === 2 || l;
          (!o.modal || u) && (a.current = !0);
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
$v.displayName = zv;
var Vk = "DropdownMenuGroup", Uk = x.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ot(n);
    return /* @__PURE__ */ y.jsx(Tk, { ...o, ...r, ref: t });
  }
);
Uk.displayName = Vk;
var Bk = "DropdownMenuLabel", Vv = x.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ot(n);
    return /* @__PURE__ */ y.jsx(Rk, { ...o, ...r, ref: t });
  }
);
Vv.displayName = Bk;
var Wk = "DropdownMenuItem", Uv = x.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ot(n);
    return /* @__PURE__ */ y.jsx(Ok, { ...o, ...r, ref: t });
  }
);
Uv.displayName = Wk;
var Hk = "DropdownMenuCheckboxItem", Bv = x.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ot(n);
  return /* @__PURE__ */ y.jsx(kk, { ...o, ...r, ref: t });
});
Bv.displayName = Hk;
var qk = "DropdownMenuRadioGroup", Yk = x.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ot(n);
  return /* @__PURE__ */ y.jsx(Pk, { ...o, ...r, ref: t });
});
Yk.displayName = qk;
var Gk = "DropdownMenuRadioItem", Wv = x.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ot(n);
  return /* @__PURE__ */ y.jsx(Nk, { ...o, ...r, ref: t });
});
Wv.displayName = Gk;
var Kk = "DropdownMenuItemIndicator", Hv = x.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ot(n);
  return /* @__PURE__ */ y.jsx(Mk, { ...o, ...r, ref: t });
});
Hv.displayName = Kk;
var Zk = "DropdownMenuSeparator", qv = x.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ot(n);
  return /* @__PURE__ */ y.jsx(Ik, { ...o, ...r, ref: t });
});
qv.displayName = Zk;
var Xk = "DropdownMenuArrow", Jk = x.forwardRef(
  (e, t) => {
    const { __scopeDropdownMenu: n, ...r } = e, o = Ot(n);
    return /* @__PURE__ */ y.jsx(Dk, { ...o, ...r, ref: t });
  }
);
Jk.displayName = Xk;
var Qk = "DropdownMenuSubTrigger", Yv = x.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ot(n);
  return /* @__PURE__ */ y.jsx(jk, { ...o, ...r, ref: t });
});
Yv.displayName = Qk;
var eP = "DropdownMenuSubContent", Gv = x.forwardRef((e, t) => {
  const { __scopeDropdownMenu: n, ...r } = e, o = Ot(n);
  return /* @__PURE__ */ y.jsx(
    Fk,
    {
      ...o,
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
Gv.displayName = eP;
var tP = Dv, nP = Fv, rP = Lv, Kv = $v, Zv = Vv, Xv = Uv, Jv = Bv, Qv = Wv, eb = Hv, tb = qv, nb = Yv, rb = Gv;
const oP = tP, iP = nP, aP = x.forwardRef(({ className: e, inset: t, children: n, ...r }, o) => /* @__PURE__ */ y.jsxs(
  nb,
  {
    ref: o,
    className: Ie(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-800 dark:data-[state=open]:bg-slate-800",
      t && "pl-8",
      e
    ),
    ...r,
    children: [
      n,
      /* @__PURE__ */ y.jsx(Tm, { className: "ml-auto h-4 w-4" })
    ]
  }
));
aP.displayName = nb.displayName;
const sP = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  rb,
  {
    ref: n,
    className: Ie(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      e
    ),
    ...t
  }
));
sP.displayName = rb.displayName;
const ob = x.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) => /* @__PURE__ */ y.jsx(rP, { children: /* @__PURE__ */ y.jsx(
  Kv,
  {
    ref: r,
    sideOffset: t,
    className: Ie(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border border-slate-200 bg-white p-1 text-slate-950 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50",
      e
    ),
    ...n
  }
) }));
ob.displayName = Kv.displayName;
const _a = x.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ y.jsx(
  Xv,
  {
    ref: r,
    className: Ie(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      t && "pl-8",
      e
    ),
    ...n
  }
));
_a.displayName = Xv.displayName;
const cP = x.forwardRef(({ className: e, children: t, checked: n, ...r }, o) => /* @__PURE__ */ y.jsxs(
  Jv,
  {
    ref: o,
    className: Ie(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      e
    ),
    checked: n,
    ...r,
    children: [
      /* @__PURE__ */ y.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ y.jsx(eb, { children: /* @__PURE__ */ y.jsx(OE, { className: "h-4 w-4" }) }) }),
      t
    ]
  }
));
cP.displayName = Jv.displayName;
const lP = x.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ y.jsxs(
  Qv,
  {
    ref: r,
    className: Ie(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-slate-100 focus:text-slate-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-slate-800 dark:focus:text-slate-50",
      e
    ),
    ...n,
    children: [
      /* @__PURE__ */ y.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ y.jsx(eb, { children: /* @__PURE__ */ y.jsx(kE, { className: "h-2 w-2 fill-current" }) }) }),
      t
    ]
  }
));
lP.displayName = Qv.displayName;
const uP = x.forwardRef(({ className: e, inset: t, ...n }, r) => /* @__PURE__ */ y.jsx(
  Zv,
  {
    ref: r,
    className: Ie(
      "px-2 py-1.5 text-sm font-semibold",
      t && "pl-8",
      e
    ),
    ...n
  }
));
uP.displayName = Zv.displayName;
const fP = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  tb,
  {
    ref: n,
    className: Ie("-mx-1 my-1 h-px bg-slate-100 dark:bg-slate-800", e),
    ...t
  }
));
fP.displayName = tb.displayName;
var Qu = "Dialog", [ib, cN] = $r(Qu), [dP, cn] = ib(Qu), ab = (e) => {
  const {
    __scopeDialog: t,
    children: n,
    open: r,
    defaultOpen: o,
    onOpenChange: i,
    modal: a = !0
  } = e, s = x.useRef(null), c = x.useRef(null), [l = !1, u] = Ts({
    prop: r,
    defaultProp: o,
    onChange: i
  });
  return /* @__PURE__ */ y.jsx(
    dP,
    {
      scope: t,
      triggerRef: s,
      contentRef: c,
      contentId: lo(),
      titleId: lo(),
      descriptionId: lo(),
      open: l,
      onOpenChange: u,
      onOpenToggle: x.useCallback(() => u((d) => !d), [u]),
      modal: a,
      children: n
    }
  );
};
ab.displayName = Qu;
var sb = "DialogTrigger", pP = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = cn(sb, n), i = bt(t, o.triggerRef);
    return /* @__PURE__ */ y.jsx(
      nt.button,
      {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": o.open,
        "aria-controls": o.contentId,
        "data-state": nf(o.open),
        ...r,
        ref: i,
        onClick: ke(e.onClick, o.onOpenToggle)
      }
    );
  }
);
pP.displayName = sb;
var ef = "DialogPortal", [hP, cb] = ib(ef, {
  forceMount: void 0
}), lb = (e) => {
  const { __scopeDialog: t, forceMount: n, children: r, container: o } = e, i = cn(ef, t);
  return /* @__PURE__ */ y.jsx(hP, { scope: t, forceMount: n, children: x.Children.map(r, (a) => /* @__PURE__ */ y.jsx(jn, { present: n || i.open, children: /* @__PURE__ */ y.jsx(Ps, { asChild: !0, container: o, children: a }) })) });
};
lb.displayName = ef;
var Qa = "DialogOverlay", ub = x.forwardRef(
  (e, t) => {
    const n = cb(Qa, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = cn(Qa, e.__scopeDialog);
    return i.modal ? /* @__PURE__ */ y.jsx(jn, { present: r || i.open, children: /* @__PURE__ */ y.jsx(mP, { ...o, ref: t }) }) : null;
  }
);
ub.displayName = Qa;
var mP = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = cn(Qa, n);
    return (
      // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
      // ie. when `Overlay` and `Content` are siblings
      /* @__PURE__ */ y.jsx(Wu, { as: Rn, allowPinchZoom: !0, shards: [o.contentRef], children: /* @__PURE__ */ y.jsx(
        nt.div,
        {
          "data-state": nf(o.open),
          ...r,
          ref: t,
          style: { pointerEvents: "auto", ...r.style }
        }
      ) })
    );
  }
), Lr = "DialogContent", fb = x.forwardRef(
  (e, t) => {
    const n = cb(Lr, e.__scopeDialog), { forceMount: r = n.forceMount, ...o } = e, i = cn(Lr, e.__scopeDialog);
    return /* @__PURE__ */ y.jsx(jn, { present: r || i.open, children: i.modal ? /* @__PURE__ */ y.jsx(gP, { ...o, ref: t }) : /* @__PURE__ */ y.jsx(yP, { ...o, ref: t }) });
  }
);
fb.displayName = Lr;
var gP = x.forwardRef(
  (e, t) => {
    const n = cn(Lr, e.__scopeDialog), r = x.useRef(null), o = bt(t, n.contentRef, r);
    return x.useEffect(() => {
      const i = r.current;
      if (i) return rv(i);
    }, []), /* @__PURE__ */ y.jsx(
      db,
      {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: ke(e.onCloseAutoFocus, (i) => {
          var a;
          i.preventDefault(), (a = n.triggerRef.current) == null || a.focus();
        }),
        onPointerDownOutside: ke(e.onPointerDownOutside, (i) => {
          const a = i.detail.originalEvent, s = a.button === 0 && a.ctrlKey === !0;
          (a.button === 2 || s) && i.preventDefault();
        }),
        onFocusOutside: ke(
          e.onFocusOutside,
          (i) => i.preventDefault()
        )
      }
    );
  }
), yP = x.forwardRef(
  (e, t) => {
    const n = cn(Lr, e.__scopeDialog), r = x.useRef(!1), o = x.useRef(!1);
    return /* @__PURE__ */ y.jsx(
      db,
      {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        onCloseAutoFocus: (i) => {
          var a, s;
          (a = e.onCloseAutoFocus) == null || a.call(e, i), i.defaultPrevented || (r.current || (s = n.triggerRef.current) == null || s.focus(), i.preventDefault()), r.current = !1, o.current = !1;
        },
        onInteractOutside: (i) => {
          var c, l;
          (c = e.onInteractOutside) == null || c.call(e, i), i.defaultPrevented || (r.current = !0, i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
          const a = i.target;
          ((l = n.triggerRef.current) == null ? void 0 : l.contains(a)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && o.current && i.preventDefault();
        }
      }
    );
  }
), db = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, trapFocus: r, onOpenAutoFocus: o, onCloseAutoFocus: i, ...a } = e, s = cn(Lr, n), c = x.useRef(null), l = bt(t, c);
    return Ry(), /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsx(
        Du,
        {
          asChild: !0,
          loop: !0,
          trapped: r,
          onMountAutoFocus: o,
          onUnmountAutoFocus: i,
          children: /* @__PURE__ */ y.jsx(
            Rs,
            {
              role: "dialog",
              id: s.contentId,
              "aria-describedby": s.descriptionId,
              "aria-labelledby": s.titleId,
              "data-state": nf(s.open),
              ...a,
              ref: l,
              onDismiss: () => s.onOpenChange(!1)
            }
          )
        }
      ),
      /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
        /* @__PURE__ */ y.jsx(vP, { titleId: s.titleId }),
        /* @__PURE__ */ y.jsx(xP, { contentRef: c, descriptionId: s.descriptionId })
      ] })
    ] });
  }
), tf = "DialogTitle", pb = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = cn(tf, n);
    return /* @__PURE__ */ y.jsx(nt.h2, { id: o.titleId, ...r, ref: t });
  }
);
pb.displayName = tf;
var hb = "DialogDescription", mb = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = cn(hb, n);
    return /* @__PURE__ */ y.jsx(nt.p, { id: o.descriptionId, ...r, ref: t });
  }
);
mb.displayName = hb;
var gb = "DialogClose", yb = x.forwardRef(
  (e, t) => {
    const { __scopeDialog: n, ...r } = e, o = cn(gb, n);
    return /* @__PURE__ */ y.jsx(
      nt.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: ke(e.onClick, () => o.onOpenChange(!1))
      }
    );
  }
);
yb.displayName = gb;
function nf(e) {
  return e ? "open" : "closed";
}
var vb = "DialogTitleWarning", [lN, bb] = yT(vb, {
  contentName: Lr,
  titleName: tf,
  docsSlug: "dialog"
}), vP = ({ titleId: e }) => {
  const t = bb(vb), n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
  return x.useEffect(() => {
    e && (document.getElementById(e) || console.error(n));
  }, [n, e]), null;
}, bP = "DialogDescriptionWarning", xP = ({ contentRef: e, descriptionId: t }) => {
  const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${bb(bP).contentName}}.`;
  return x.useEffect(() => {
    var i;
    const o = (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
    t && o && (document.getElementById(t) || console.warn(r));
  }, [r, e, t]), null;
}, wP = ab, _P = lb, xb = ub, wb = fb, _b = pb, Eb = mb, EP = yb;
const SP = wP, CP = _P, Sb = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  xb,
  {
    ref: n,
    className: Ie(
      "fixed inset-0 z-[900] bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      e
    ),
    ...t
  }
));
Sb.displayName = xb.displayName;
const Cb = x.forwardRef(({ className: e, children: t, container: n, closeButton: r = !0, ...o }, i) => /* @__PURE__ */ y.jsxs(CP, { container: n, children: [
  /* @__PURE__ */ y.jsx(Sb, {}),
  /* @__PURE__ */ y.jsxs(
    wb,
    {
      ref: i,
      className: Ie(
        "fixed left-[50%] top-[50%] z-[900] grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-slate-200 bg-white p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg dark:border-slate-800 dark:bg-slate-950",
        e
      ),
      ...o,
      children: [
        t,
        r && /* @__PURE__ */ y.jsxs(EP, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-slate-100 data-[state=open]:text-slate-500 dark:ring-offset-slate-950 dark:focus:ring-slate-300 dark:data-[state=open]:bg-slate-800 dark:data-[state=open]:text-slate-400", children: [
          /* @__PURE__ */ y.jsx(Rm, { className: "h-4 w-4" }),
          /* @__PURE__ */ y.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
Cb.displayName = wb.displayName;
const Ab = ({
  className: e,
  ...t
}) => /* @__PURE__ */ y.jsx(
  "div",
  {
    className: Ie(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      e
    ),
    ...t
  }
);
Ab.displayName = "DialogHeader";
const Tb = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  _b,
  {
    ref: n,
    className: Ie(
      "text-lg font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Tb.displayName = _b.displayName;
const Rb = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  Eb,
  {
    ref: n,
    className: Ie("text-sm text-slate-500 dark:text-slate-400", e),
    ...t
  }
));
Rb.displayName = Eb.displayName;
function AP({ className: e }) {
  const { setIsDialogOpen: t, selectedMedia: n } = Ls();
  return e = Ie("group bg-background w-96 m-6 aspect-[4/3]", e), /* @__PURE__ */ y.jsx(hu, { onClick: () => t(!0), className: e, children: /* @__PURE__ */ y.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ y.jsx(Qm, { ratio: 4 / 3, className: "rounded-lg overflow-hidden bg-checkerboard", children: /* @__PURE__ */ y.jsx(ng, { media: n, placeholder: !0 }) }),
    /* @__PURE__ */ y.jsx("div", { className: "hidden absolute inset-6 flex items-center justify-center group-hover:!flex rounded-lg bg-primary/25 text-white border-dashed border-2", children: /* @__PURE__ */ y.jsx(nr, { icon: $g, className: "text-4xl" }) })
  ] }) });
}
var TP = "VisuallyHidden", rf = x.forwardRef(
  (e, t) => /* @__PURE__ */ y.jsx(
    nt.span,
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
rf.displayName = TP;
var of = "ToastProvider", [af, RP, OP] = Iu("Toast"), [Ob, uN] = $r("Toast", [OP]), [kP, js] = Ob(of), kb = (e) => {
  const {
    __scopeToast: t,
    label: n = "Notification",
    duration: r = 5e3,
    swipeDirection: o = "right",
    swipeThreshold: i = 50,
    children: a
  } = e, [s, c] = x.useState(null), [l, u] = x.useState(0), d = x.useRef(!1), p = x.useRef(!1);
  return n.trim() || console.error(
    `Invalid prop \`label\` supplied to \`${of}\`. Expected non-empty \`string\`.`
  ), /* @__PURE__ */ y.jsx(af.Provider, { scope: t, children: /* @__PURE__ */ y.jsx(
    kP,
    {
      scope: t,
      label: n,
      duration: r,
      swipeDirection: o,
      swipeThreshold: i,
      toastCount: l,
      viewport: s,
      onViewportChange: c,
      onToastAdd: x.useCallback(() => u((h) => h + 1), []),
      onToastRemove: x.useCallback(() => u((h) => h - 1), []),
      isFocusedToastEscapeKeyDownRef: d,
      isClosePausedRef: p,
      children: a
    }
  ) });
};
kb.displayName = of;
var Pb = "ToastViewport", PP = ["F8"], ql = "toast.viewportPause", Yl = "toast.viewportResume", Nb = x.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      hotkey: r = PP,
      label: o = "Notifications ({hotkey})",
      ...i
    } = e, a = js(Pb, n), s = RP(n), c = x.useRef(null), l = x.useRef(null), u = x.useRef(null), d = x.useRef(null), p = bt(t, d, a.onViewportChange), h = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), m = a.toastCount > 0;
    x.useEffect(() => {
      const b = (w) => {
        var S;
        r.every((C) => w[C] || w.code === C) && ((S = d.current) == null || S.focus());
      };
      return document.addEventListener("keydown", b), () => document.removeEventListener("keydown", b);
    }, [r]), x.useEffect(() => {
      const b = c.current, w = d.current;
      if (m && b && w) {
        const _ = () => {
          if (!a.isClosePausedRef.current) {
            const N = new CustomEvent(ql);
            w.dispatchEvent(N), a.isClosePausedRef.current = !0;
          }
        }, S = () => {
          if (a.isClosePausedRef.current) {
            const N = new CustomEvent(Yl);
            w.dispatchEvent(N), a.isClosePausedRef.current = !1;
          }
        }, C = (N) => {
          !b.contains(N.relatedTarget) && S();
        }, E = () => {
          b.contains(document.activeElement) || S();
        };
        return b.addEventListener("focusin", _), b.addEventListener("focusout", C), b.addEventListener("pointermove", _), b.addEventListener("pointerleave", E), window.addEventListener("blur", _), window.addEventListener("focus", S), () => {
          b.removeEventListener("focusin", _), b.removeEventListener("focusout", C), b.removeEventListener("pointermove", _), b.removeEventListener("pointerleave", E), window.removeEventListener("blur", _), window.removeEventListener("focus", S);
        };
      }
    }, [m, a.isClosePausedRef]);
    const g = x.useCallback(
      ({ tabbingDirection: b }) => {
        const _ = s().map((S) => {
          const C = S.ref.current, E = [C, ...WP(C)];
          return b === "forwards" ? E : E.reverse();
        });
        return (b === "forwards" ? _.reverse() : _).flat();
      },
      [s]
    );
    return x.useEffect(() => {
      const b = d.current;
      if (b) {
        const w = (_) => {
          var E, N, P;
          const S = _.altKey || _.ctrlKey || _.metaKey;
          if (_.key === "Tab" && !S) {
            const B = document.activeElement, ce = _.shiftKey;
            if (_.target === b && ce) {
              (E = l.current) == null || E.focus();
              return;
            }
            const $ = g({ tabbingDirection: ce ? "backwards" : "forwards" }), Q = $.findIndex((D) => D === B);
            Gc($.slice(Q + 1)) ? _.preventDefault() : ce ? (N = l.current) == null || N.focus() : (P = u.current) == null || P.focus();
          }
        };
        return b.addEventListener("keydown", w), () => b.removeEventListener("keydown", w);
      }
    }, [s, g]), /* @__PURE__ */ y.jsxs(
      OT,
      {
        ref: c,
        role: "region",
        "aria-label": o.replace("{hotkey}", h),
        tabIndex: -1,
        style: { pointerEvents: m ? void 0 : "none" },
        children: [
          m && /* @__PURE__ */ y.jsx(
            Gl,
            {
              ref: l,
              onFocusFromOutsideViewport: () => {
                const b = g({
                  tabbingDirection: "forwards"
                });
                Gc(b);
              }
            }
          ),
          /* @__PURE__ */ y.jsx(af.Slot, { scope: n, children: /* @__PURE__ */ y.jsx(nt.ol, { tabIndex: -1, ...i, ref: p }) }),
          m && /* @__PURE__ */ y.jsx(
            Gl,
            {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const b = g({
                  tabbingDirection: "backwards"
                });
                Gc(b);
              }
            }
          )
        ]
      }
    );
  }
);
Nb.displayName = Pb;
var Mb = "ToastFocusProxy", Gl = x.forwardRef(
  (e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e, i = js(Mb, n);
    return /* @__PURE__ */ y.jsx(
      rf,
      {
        "aria-hidden": !0,
        tabIndex: 0,
        ...o,
        ref: t,
        style: { position: "fixed" },
        onFocus: (a) => {
          var l;
          const s = a.relatedTarget;
          !((l = i.viewport) != null && l.contains(s)) && r();
        }
      }
    );
  }
);
Gl.displayName = Mb;
var Fs = "Toast", NP = "toast.swipeStart", MP = "toast.swipeMove", IP = "toast.swipeCancel", DP = "toast.swipeEnd", Ib = x.forwardRef(
  (e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...a } = e, [s = !0, c] = Ts({
      prop: r,
      defaultProp: o,
      onChange: i
    });
    return /* @__PURE__ */ y.jsx(jn, { present: n || s, children: /* @__PURE__ */ y.jsx(
      LP,
      {
        open: s,
        ...a,
        ref: t,
        onClose: () => c(!1),
        onPause: Tt(e.onPause),
        onResume: Tt(e.onResume),
        onSwipeStart: ke(e.onSwipeStart, (l) => {
          l.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: ke(e.onSwipeMove, (l) => {
          const { x: u, y: d } = l.detail.delta;
          l.currentTarget.setAttribute("data-swipe", "move"), l.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${u}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`);
        }),
        onSwipeCancel: ke(e.onSwipeCancel, (l) => {
          l.currentTarget.setAttribute("data-swipe", "cancel"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: ke(e.onSwipeEnd, (l) => {
          const { x: u, y: d } = l.detail.delta;
          l.currentTarget.setAttribute("data-swipe", "end"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"), l.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"), l.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${u}px`), l.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`), c(!1);
        })
      }
    ) });
  }
);
Ib.displayName = Fs;
var [jP, FP] = Ob(Fs, {
  onClose() {
  }
}), LP = x.forwardRef(
  (e, t) => {
    const {
      __scopeToast: n,
      type: r = "foreground",
      duration: o,
      open: i,
      onClose: a,
      onEscapeKeyDown: s,
      onPause: c,
      onResume: l,
      onSwipeStart: u,
      onSwipeMove: d,
      onSwipeCancel: p,
      onSwipeEnd: h,
      ...m
    } = e, g = js(Fs, n), [b, w] = x.useState(null), _ = bt(t, (D) => w(D)), S = x.useRef(null), C = x.useRef(null), E = o || g.duration, N = x.useRef(0), P = x.useRef(E), B = x.useRef(0), { onToastAdd: ce, onToastRemove: pe } = g, fe = Tt(() => {
      var re;
      (b == null ? void 0 : b.contains(document.activeElement)) && ((re = g.viewport) == null || re.focus()), a();
    }), $ = x.useCallback(
      (D) => {
        !D || D === 1 / 0 || (window.clearTimeout(B.current), N.current = (/* @__PURE__ */ new Date()).getTime(), B.current = window.setTimeout(fe, D));
      },
      [fe]
    );
    x.useEffect(() => {
      const D = g.viewport;
      if (D) {
        const re = () => {
          $(P.current), l == null || l();
        }, M = () => {
          const le = (/* @__PURE__ */ new Date()).getTime() - N.current;
          P.current = P.current - le, window.clearTimeout(B.current), c == null || c();
        };
        return D.addEventListener(ql, M), D.addEventListener(Yl, re), () => {
          D.removeEventListener(ql, M), D.removeEventListener(Yl, re);
        };
      }
    }, [g.viewport, E, c, l, $]), x.useEffect(() => {
      i && !g.isClosePausedRef.current && $(E);
    }, [i, E, g.isClosePausedRef, $]), x.useEffect(() => (ce(), () => pe()), [ce, pe]);
    const Q = x.useMemo(() => b ? Vb(b) : null, [b]);
    return g.viewport ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      Q && /* @__PURE__ */ y.jsx(
        zP,
        {
          __scopeToast: n,
          role: "status",
          "aria-live": r === "foreground" ? "assertive" : "polite",
          "aria-atomic": !0,
          children: Q
        }
      ),
      /* @__PURE__ */ y.jsx(jP, { scope: n, onClose: fe, children: es.createPortal(
        /* @__PURE__ */ y.jsx(af.ItemSlot, { scope: n, children: /* @__PURE__ */ y.jsx(
          RT,
          {
            asChild: !0,
            onEscapeKeyDown: ke(s, () => {
              g.isFocusedToastEscapeKeyDownRef.current || fe(), g.isFocusedToastEscapeKeyDownRef.current = !1;
            }),
            children: /* @__PURE__ */ y.jsx(
              nt.li,
              {
                role: "status",
                "aria-live": "off",
                "aria-atomic": !0,
                tabIndex: 0,
                "data-state": i ? "open" : "closed",
                "data-swipe-direction": g.swipeDirection,
                ...m,
                ref: _,
                style: { userSelect: "none", touchAction: "none", ...e.style },
                onKeyDown: ke(e.onKeyDown, (D) => {
                  D.key === "Escape" && (s == null || s(D.nativeEvent), D.nativeEvent.defaultPrevented || (g.isFocusedToastEscapeKeyDownRef.current = !0, fe()));
                }),
                onPointerDown: ke(e.onPointerDown, (D) => {
                  D.button === 0 && (S.current = { x: D.clientX, y: D.clientY });
                }),
                onPointerMove: ke(e.onPointerMove, (D) => {
                  if (!S.current) return;
                  const re = D.clientX - S.current.x, M = D.clientY - S.current.y, le = !!C.current, we = ["left", "right"].includes(g.swipeDirection), X = ["left", "up"].includes(g.swipeDirection) ? Math.min : Math.max, L = we ? X(0, re) : 0, W = we ? 0 : X(0, M), he = D.pointerType === "touch" ? 10 : 2, I = { x: L, y: W }, G = { originalEvent: D, delta: I };
                  le ? (C.current = I, ia(MP, d, G, {
                    discrete: !1
                  })) : Hp(I, g.swipeDirection, he) ? (C.current = I, ia(NP, u, G, {
                    discrete: !1
                  }), D.target.setPointerCapture(D.pointerId)) : (Math.abs(re) > he || Math.abs(M) > he) && (S.current = null);
                }),
                onPointerUp: ke(e.onPointerUp, (D) => {
                  const re = C.current, M = D.target;
                  if (M.hasPointerCapture(D.pointerId) && M.releasePointerCapture(D.pointerId), C.current = null, S.current = null, re) {
                    const le = D.currentTarget, we = { originalEvent: D, delta: re };
                    Hp(re, g.swipeDirection, g.swipeThreshold) ? ia(DP, h, we, {
                      discrete: !0
                    }) : ia(
                      IP,
                      p,
                      we,
                      {
                        discrete: !0
                      }
                    ), le.addEventListener("click", (X) => X.preventDefault(), {
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
), zP = (e) => {
  const { __scopeToast: t, children: n, ...r } = e, o = js(Fs, t), [i, a] = x.useState(!1), [s, c] = x.useState(!1);
  return UP(() => a(!0)), x.useEffect(() => {
    const l = window.setTimeout(() => c(!0), 1e3);
    return () => window.clearTimeout(l);
  }, []), s ? null : /* @__PURE__ */ y.jsx(Ps, { asChild: !0, children: /* @__PURE__ */ y.jsx(rf, { ...r, children: i && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    o.label,
    " ",
    n
  ] }) }) });
}, $P = "ToastTitle", Db = x.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ y.jsx(nt.div, { ...r, ref: t });
  }
);
Db.displayName = $P;
var VP = "ToastDescription", jb = x.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e;
    return /* @__PURE__ */ y.jsx(nt.div, { ...r, ref: t });
  }
);
jb.displayName = VP;
var Fb = "ToastAction", Lb = x.forwardRef(
  (e, t) => {
    const { altText: n, ...r } = e;
    return n.trim() ? /* @__PURE__ */ y.jsx($b, { altText: n, asChild: !0, children: /* @__PURE__ */ y.jsx(sf, { ...r, ref: t }) }) : (console.error(
      `Invalid prop \`altText\` supplied to \`${Fb}\`. Expected non-empty \`string\`.`
    ), null);
  }
);
Lb.displayName = Fb;
var zb = "ToastClose", sf = x.forwardRef(
  (e, t) => {
    const { __scopeToast: n, ...r } = e, o = FP(zb, n);
    return /* @__PURE__ */ y.jsx($b, { asChild: !0, children: /* @__PURE__ */ y.jsx(
      nt.button,
      {
        type: "button",
        ...r,
        ref: t,
        onClick: ke(e.onClick, o.onClose)
      }
    ) });
  }
);
sf.displayName = zb;
var $b = x.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return /* @__PURE__ */ y.jsx(
    nt.div,
    {
      "data-radix-toast-announce-exclude": "",
      "data-radix-toast-announce-alt": r || void 0,
      ...o,
      ref: t
    }
  );
});
function Vb(e) {
  const t = [];
  return Array.from(e.childNodes).forEach((r) => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), BP(r)) {
      const o = r.ariaHidden || r.hidden || r.style.display === "none", i = r.dataset.radixToastAnnounceExclude === "";
      if (!o)
        if (i) {
          const a = r.dataset.radixToastAnnounceAlt;
          a && t.push(a);
        } else
          t.push(...Vb(r));
    }
  }), t;
}
function ia(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget, i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }), r ? pu(o, i) : o.dispatchEvent(i);
}
var Hp = (e, t, n = 0) => {
  const r = Math.abs(e.x), o = Math.abs(e.y), i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function UP(e = () => {
}) {
  const t = Tt(e);
  sr(() => {
    let n = 0, r = 0;
    return n = window.requestAnimationFrame(() => r = window.requestAnimationFrame(t)), () => {
      window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
    };
  }, [t]);
}
function BP(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function WP(e) {
  const t = [], n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (r) => {
      const o = r.tagName === "INPUT" && r.type === "hidden";
      return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Gc(e) {
  const t = document.activeElement;
  return e.some((n) => n === t ? !0 : (n.focus(), document.activeElement !== t));
}
var HP = kb, Ub = Nb, Bb = Ib, Wb = Db, Hb = jb, qb = Lb, Yb = sf;
const qP = HP, Gb = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  Ub,
  {
    ref: n,
    className: Ie(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      e
    ),
    ...t
  }
));
Gb.displayName = Ub.displayName;
const YP = mu(
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
), Kb = x.forwardRef(({ className: e, variant: t, ...n }, r) => /* @__PURE__ */ y.jsx(
  Bb,
  {
    ref: r,
    className: Ie(YP({ variant: t }), e),
    ...n
  }
));
Kb.displayName = Bb.displayName;
const GP = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  qb,
  {
    ref: n,
    className: Ie(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-transparent px-3 text-sm font-medium ring-offset-white transition-colors hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-slate-100/40 group-[.destructive]:hover:border-red-500/30 group-[.destructive]:hover:bg-red-500 group-[.destructive]:hover:text-slate-50 group-[.destructive]:focus:ring-red-500 dark:border-slate-800 dark:ring-offset-slate-950 dark:hover:bg-slate-800 dark:focus:ring-slate-300 dark:group-[.destructive]:border-slate-800/40 dark:group-[.destructive]:hover:border-red-900/30 dark:group-[.destructive]:hover:bg-red-900 dark:group-[.destructive]:hover:text-slate-50 dark:group-[.destructive]:focus:ring-red-900",
      e
    ),
    ...t
  }
));
GP.displayName = qb.displayName;
const Zb = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  Yb,
  {
    ref: n,
    className: Ie(
      "absolute right-2 top-2 rounded-md p-1 text-slate-950/50 opacity-0 transition-opacity hover:text-slate-950 focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600 dark:text-slate-50/50 dark:hover:text-slate-50",
      e
    ),
    "toast-close": "",
    ...t,
    children: /* @__PURE__ */ y.jsx(Rm, { className: "h-4 w-4" })
  }
));
Zb.displayName = Yb.displayName;
const Xb = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  Wb,
  {
    ref: n,
    className: Ie("text-sm font-semibold", e),
    ...t
  }
));
Xb.displayName = Wb.displayName;
const Jb = x.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ y.jsx(
  Hb,
  {
    ref: n,
    className: Ie("text-sm opacity-90", e),
    ...t
  }
));
Jb.displayName = Hb.displayName;
function Qb() {
  const { toasts: e } = hm();
  return /* @__PURE__ */ y.jsxs(qP, { children: [
    e.map(function({ id: t, title: n, description: r, action: o, ...i }) {
      return /* @__PURE__ */ y.jsxs(Kb, { ...i, children: [
        /* @__PURE__ */ y.jsxs("div", { className: "grid gap-1", children: [
          n && /* @__PURE__ */ y.jsx(Xb, { children: n }),
          r && /* @__PURE__ */ y.jsx(Jb, { children: r })
        ] }),
        o,
        /* @__PURE__ */ y.jsx(Zb, {})
      ] }, t);
    }),
    /* @__PURE__ */ y.jsx(Gb, {})
  ] });
}
function KP({ className: e }) {
  zr()(H_(!0));
  const { isDialogOpen: n, setIsDialogOpen: r, dialogContainer: o } = Ls();
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsx(AP, { className: e }),
    /* @__PURE__ */ y.jsx(SP, { open: n, onOpenChange: (i) => r(i), children: /* @__PURE__ */ y.jsxs(Cb, { container: o, className: "p-0 z-[900] h-[75vh] w-[75vw] max-h-none max-w-none", children: [
      /* @__PURE__ */ y.jsxs(Ab, { className: "pt-6 px-6", children: [
        /* @__PURE__ */ y.jsx(Tb, { children: "Médiathèque" }),
        /* @__PURE__ */ y.jsx(Rb, { children: "Sélectionnez ou ajoutez un nouveau média." })
      ] }),
      /* @__PURE__ */ y.jsx(tx, { className: "h-[calc(75vh-1.5rem-70px)]" }),
      /* @__PURE__ */ y.jsx(Qb, {})
    ] }) })
  ] });
}
const ex = Yp(void 0), Ls = () => {
  const e = Gp(ex);
  if (!e)
    throw new Error("usePickerContext must be used within a MediaPickerAppProvider");
  return e;
};
function fN({ serverUrl: e, className: t, onPickedMedia: n, dialogContainer: r, value: o, allowMimeType: i }) {
  const [a, s] = br(!1), [c, l] = br(!1), [u, d] = br(null);
  return t = Ie("group bg-background w-96 m-6 aspect-[4/3]", t), Xn(() => {
    (async () => {
      try {
        await bm(e), s(!0);
      } catch (h) {
        console.error("Failed to initialize the app:", h);
      }
    })();
  }, [e]), Xn(() => {
    a && o !== void 0 && (async (h) => {
      const m = await mm(h);
      d(m);
    })(o);
  }, [a, o]), a ? /* @__PURE__ */ y.jsx(ex.Provider, { value: { onPickedMedia: n, isDialogOpen: c, setIsDialogOpen: l, selectedMedia: u, setSelectedMedia: d, dialogContainer: r, allowMimeType: i }, children: /* @__PURE__ */ y.jsx(Jp, { store: vm, children: /* @__PURE__ */ y.jsx(KP, { className: t }) }) }) : /* @__PURE__ */ y.jsx("div", { className: t, children: "Initialisation ..." });
}
function ZP() {
  const { toast: e } = hm(), t = zr(), [n, r] = br(null), o = hx(null);
  let i = null;
  try {
    i = Ls().allowMimeType;
  } catch {
  }
  const a = Qr.any().refine((c) => i == null ? !0 : i.includes(c.type), "Type de fichier invalide !");
  Xn(() => {
    let c = 0;
    n && (async (u) => {
      for (const d of u) {
        try {
          a.parse(d), await t(pa({
            file: d
          })), c++;
        } catch (p) {
          e({
            variant: "destructive",
            description: p.errors.map((h) => h.message).join(" | ")
          });
        }
        if (!o.current)
          return;
        o.current.value = "";
      }
      c > 0 && t(_r());
    })(n);
  }, [n]);
  const s = () => {
    o.current && o.current.click();
  };
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsx(Cr, { type: "button", onClick: s, children: /* @__PURE__ */ y.jsx(nr, { icon: $g }) }),
    /* @__PURE__ */ y.jsx(
      Qo,
      {
        className: "hidden",
        type: "file",
        ref: o,
        onChange: (c) => {
          r(c.target.files);
        }
      }
    )
  ] });
}
function XP() {
  const e = zr(), [t, n] = br("");
  return tN(), Xn(() => {
    const r = async () => {
      e(_r({ page: 1, label: t }));
    };
    hl(t) && r();
  }, [t]), /* @__PURE__ */ y.jsx(y.Fragment, { children: /* @__PURE__ */ y.jsxs("div", { className: "flex gap-3 items-center justify-center w-full", children: [
    /* @__PURE__ */ y.jsx(nr, { icon: j1 }),
    /* @__PURE__ */ y.jsx(
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
function JP() {
  return /* @__PURE__ */ y.jsx("div", { className: "border-y-2 h-20 flex items-center", children: /* @__PURE__ */ y.jsxs("div", { className: "px-6 w-full flex items-center justify-between", children: [
    /* @__PURE__ */ y.jsx(xy, { children: /* @__PURE__ */ y.jsxs(wy, { children: [
      /* @__PURE__ */ y.jsx(Ho, { children: /* @__PURE__ */ y.jsx(zl, { href: "/", children: "Home" }) }),
      /* @__PURE__ */ y.jsx(va, {}),
      /* @__PURE__ */ y.jsx(Ho, { children: /* @__PURE__ */ y.jsxs(oP, { children: [
        /* @__PURE__ */ y.jsxs(iP, { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ y.jsx(Ey, { className: "h-4 w-4" }),
          /* @__PURE__ */ y.jsx("span", { className: "sr-only", children: "Toggle menu" })
        ] }),
        /* @__PURE__ */ y.jsxs(ob, { align: "start", children: [
          /* @__PURE__ */ y.jsx(_a, { children: "Documentation" }),
          /* @__PURE__ */ y.jsx(_a, { children: "Themes" }),
          /* @__PURE__ */ y.jsx(_a, { children: "GitHub" })
        ] })
      ] }) }),
      /* @__PURE__ */ y.jsx(va, {}),
      /* @__PURE__ */ y.jsx(Ho, { children: /* @__PURE__ */ y.jsx(zl, { href: "/docs/components", children: "Components" }) }),
      /* @__PURE__ */ y.jsx(va, {}),
      /* @__PURE__ */ y.jsx(Ho, { children: /* @__PURE__ */ y.jsx(_y, { children: "Breadcrumb" }) })
    ] }) }),
    /* @__PURE__ */ y.jsxs("div", { className: "flex gap-3", children: [
      /* @__PURE__ */ y.jsx(XP, {}),
      /* @__PURE__ */ y.jsx(ZP, {})
    ] })
  ] }) });
}
function QP() {
  const e = zr(), t = xr((l) => l.media.view), n = xr((l) => l.main.picker), r = xr((l) => l.main.currentMedia);
  let o = () => {
  };
  try {
    const { setIsDialogOpen: l, setSelectedMedia: u, onPickedMedia: d } = Ls();
    o = () => {
      u(r), d && r != null && d(r.id !== void 0 ? r.id : null), l(!1);
    };
  } catch {
  }
  if (!t) return null;
  const i = (l) => {
    const u = l.match(/page=(\d+)/i);
    return u ? u[1] ?? null : null;
  }, a = () => {
    c(t["hydra:previous"]);
  }, s = () => {
    c(t["hydra:next"]);
  }, c = (l) => {
    if (l == null)
      return;
    const u = Number(i(l));
    u !== null && e(_r({ page: u }));
  };
  return /* @__PURE__ */ y.jsx("div", { className: "px-6 h-20 flex items-center justify-end border-t-2", children: /* @__PURE__ */ y.jsxs("div", { className: "flex gap-2", children: [
    n && /* @__PURE__ */ y.jsx(Cr, { type: "button", onClick: o, disabled: r === null, children: "Valider" }),
    /* @__PURE__ */ y.jsxs(Cr, { type: "button", variant: "secondary", onClick: a, disabled: t["hydra:previous"] === void 0, children: [
      /* @__PURE__ */ y.jsx(nr, { icon: z1, className: "pr-2" }),
      "Précédent"
    ] }),
    /* @__PURE__ */ y.jsxs(Cr, { type: "button", variant: "secondary", onClick: s, disabled: t["hydra:next"] === void 0, children: [
      "Suivant",
      /* @__PURE__ */ y.jsx(nr, { icon: $1, className: "pl-2" })
    ] })
  ] }) });
}
function eN() {
  const e = xr((t) => t.main.currentMedia);
  return /* @__PURE__ */ y.jsxs(lS, { className: "overflow-y-auto", direction: "horizontal", children: [
    /* @__PURE__ */ y.jsxs(Td, { children: [
      /* @__PURE__ */ y.jsx(JP, {}),
      /* @__PURE__ */ y.jsx(SS, {}),
      /* @__PURE__ */ y.jsx(QP, {})
    ] }),
    e && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsx(uS, { withHandle: !0 }),
      /* @__PURE__ */ y.jsx(Td, { minSize: 20, maxSize: 40, defaultSize: 20, children: /* @__PURE__ */ y.jsx(gT, {}) })
    ] })
  ] });
}
function tx({ className: e, ...t }) {
  return e = Ie("bg-background h-full", e), /* @__PURE__ */ y.jsx("div", { className: e, ...t, children: /* @__PURE__ */ y.jsx(eN, {}) });
}
const nx = Yp(void 0), tN = () => {
  const e = Gp(nx);
  if (!e)
    throw new Error("useLibraryContext must be used within a MediaPickerAppProvider");
  return e;
};
function dN({ serverUrl: e, dialogContainer: t, className: n }) {
  const [r, o] = br(!1);
  return n = Ie("bg-background h-full", n), Xn(() => {
    (async () => {
      try {
        await bm(e), o(!0);
      } catch (a) {
        console.error("Failed to initialize the app:", a);
      }
    })();
  }, [e]), r ? /* @__PURE__ */ y.jsx(nx.Provider, { value: { dialogContainer: t }, children: /* @__PURE__ */ y.jsxs(Jp, { store: vm, children: [
    /* @__PURE__ */ y.jsx(tx, {}),
    /* @__PURE__ */ y.jsx(Qb, {})
  ] }) }) : /* @__PURE__ */ y.jsx("div", { className: n, children: "Initialisation ..." });
}
export {
  dN as MediaLibraryApp,
  fN as MediaPickerApp
};
